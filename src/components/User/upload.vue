<template>
  <el-container style="height:100%">
    <el-header style="height: 104px;margin:0;">
      <app-nav-bar></app-nav-bar>
    </el-header>
    <el-main class="height:100%;margin-top:2px;">
      <!--主体内容部分-->
      <div class="body">
        <!--头部-->
        <div class="header">
          <div class="upload_img">
          </div>
          <!--标题-->
          <div class="title">
            <el-input
              maxlength="30" @input="descInput"
              v-model="desc" value data-minlen="1" data-maxlen="30"
              placeholder="游记题目" class="inpu el-input__inner">
            </el-input>
            <div class="characterCounter">剩余{{remnant}}个字</div>
          </div>
          <!--地点-->
          <div class="place">
            <el-input
              maxlength="30" @input="descInput"
              v-model="place" value data-minlen="1" data-maxlen="30"
              placeholder="游记地点" class="place el-input__inner">
            </el-input>
          </div>
        </div>
        <!--内容-->
        <div class="content">
          <!--上传这一次的内容-->
          <div class="section ui_card">
            <div class="section_head">
              <span class="section_title">这次旅行的记录</span>
            </div>
            <div>
              <div ref="editor" style="width: 978px;text-align: left"></div>
            </div>
          </div>
          <el-button type="success" class="button submit" @click.native="save">提交</el-button>
          <el-button type="success" class="button submit" @click.native="towrite">返回我的游记</el-button>
        </div>
      </div>
    </el-main>
    <el-footer>
      <app-nav-footer></app-nav-footer>
    </el-footer>
  </el-container>
</template>

<script>
  import E from 'wangeditor';
  import bar from '../nav-bar'
  import footer from '../foot'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      'app-nav-bar': bar,
      'app-nav-footer': footer,
    },
    computed: mapGetters(['UserId', 'UserName', 'UserPhone','isLogin']),
    get(url, data) {
      return new Promise((resolve, reject) => {
        axios.get(url, {
          params: data
        }).then((res) => {
          if (res) {
            //成功回调
            resolve(res);
          }
        }).catch((error) => {
          reject(error);
        })
      })
    },
    post(url, data) {
      return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(data), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          }
        }).then((res) => {
          if (res) {
            //成功回调
            resolve(res);
          }
        }).catch((error) => {
          reject(error);
        })
      })
    },
    name: "upload",
    data() {
      return {
        desc: [],
        place:[],
        remnant: 30,//倒计数
        input: '',
        input2: '',
        flag: false,
        pp: false,
        data: [],
        editorContent: "",
        content1: "",
      }
    },
    methods: {
      createEdtor() {
        var editor = new E(this.$refs.editor);
        editor.customConfig.onchange = (html) => {
          this.editorContent = html;
        };
        //设置颜色
        editor.customConfig.colors = [
          '#000000',
          '#1c487f',
          '#4d80bf',
          '#c24f4a',
          '#8baa4a',
          '#7b5ba1',
          '#46acc8',
          '#f9963b',
          '#ffffff',
          '#DB70DB',
          '#cc1d18'
        ];
        //设置表情
        editor.customConfig.emotions = [
          {
            // tab 的标题
            title: 'emoji',
            // type -> 'emoji' / 'image'
            type: 'emoji',
            // content -> 数组
            content: ['😀', '😃', '😄', '😁', '😆', '😀', '😁', '😂', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '😗', '😙', '😚',
              '☺', '😇', '😐', '😑', '😶', '😏', '😣', '😥', '😮', '😯', '😪', '😫', '😴', '😌', '😛', '😜', '😝', '😒', '😓', '😔', '😕', '😲',
              '😷', '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😬', '😰', '😱', '😳', '😵', '😡', '😠']
          }
        ];
        //配置菜单栏
        editor.customConfig.menus = [
          'head',  // 标题
          'bold',  // 粗体
          'fontSize',  // 字号
          'fontName',  // 字体
          'italic',  // 斜体
          'underline',  // 下划线
          'strikeThrough',  // 删除线
          'foreColor',  // 文字颜色
          'backColor',  // 背景颜色
          'link',  // 插入链接
          'list',  // 列表
          'justify',  // 对齐方式
          'quote',  // 引用
          'image',  // 插入图片
          'emoticon',  // 表情
          'table',  // 表格
          'undo',  // 撤销
          'redo'  // 重复
        ];
        // 使用 base64 保存图片
        editor.customConfig.uploadImgShowBase64 = true;
        // 上传图片到服务器
        editor.customConfig.uploadImgServer = `http://localhost:3000/locate/uploadEditor`;
        //图片上传
        editor.customConfig.uploadImgHooks = {
          customInsert: function (insertImg, result, editor) {
            if (result.errno == 0) {
              console.log('insert ok!');
              insertImg(`http://localhost:3000/article_img/${result.data[0]}`);
            } else {
              alert("图片上传失败！");
            }
          }
        };
        editor.create();
      },
      //计算输入数
      descInput() {
        var txtVal = this.desc.length;
        this.remnant = 30 - txtVal;
      },
      towrite: function (event) {
        alert('您即将打开您的游记')
        var _this = this
        setTimeout(function () {
          _this.$router.push({path: '/user/write'})
        }, 500)
      },
      save() {
        this.$axios.post('locate/articleAdd', {
          article_name: this.desc,
          user_id:this.UserId,
          content: this.editorContent,
          sort_article: this.place,
        }).then((res) => {
          alert("成功上传！");
          console.log(this.travel_time);
          console.log(res);
          history.go(-1);
        })
      },
      changeImage(e) {
        this.upath = e.target.files;
        if (this.upath.length < 0 || this.upath.length > 6) {
          alert("请上传1-6张图片")
          this.check1 = false
        } else {
          this.check1 = true
        }
      },
      //提交
      upload() {
        alert('正在提交!请等待审核通过~')
        this.$axios({
          method: 'post',
          url: `${$.url}/user/upload`,
          data: data,
        }).then(() => {
          this.$message({
            message: '恭喜你,上传成功,静侯热评！',
            type: 'success'
          });
        }).catch(() => {
          this.$message.error('上传失败,赶快看看是哪里出错了');
        });
      }
    },
    mounted() {
      this.createEdtor();
    },
  }
</script>

<style scoped>
  *{
    margin:0;
    padding: 0;
    list-style: none;
  }
  .el-header {
    padding:0;
  }
  .el-main{
    margin:0;
    padding:0;
    position:relative;
    top:20px;
    overflow: hidden;
  }
  .el-footer{
    padding:0;
  }

  .top {
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: #fff;
    height: 62px;
    border-top: 3px solid #00a680;
    text-align: right;
    box-shadow: 0 1px 6px 0 #cbcbcb;
  }

  .save_time {
    margin-right: 8px;
    font-size: 14px;
    color: #999;
    display: inline-block;
    position: relative;
    right: 20%;
    top: 15%;
  }

  .button {
    padding: 11px 16px 10px;
    width: 138px;
    font-size: 16px;
    font-weight: normal;
    margin-left: 16px;
    position: relative;
    margin-top: 10px;
    right: 20%;
    display: inline-block;
    font-family: inherit;
    border: 1px solid transparent;
    border-radius: 2px;
    background-clip: padding-box;
    line-height: 18px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
  }

  .save {
    border-color: #e6e6e6 #ccc #ccc #e6e6e6;
    background-color: #f0f0f0;
    color: #4a4a4a;
  }

  .loader {
    border-color: #67C23A #267060 #267060 #67C23A;
    background-color: #267060;
    color: #fff;
  }

  .body {
    height: 100%;
    width: 1130px;
    margin: 15px auto;
    position: relative;
  }

  .header {
    width: 1130px;
    height: 390px;
    background: url("../../assets/img/upload_background.png");
    overflow: hidden;
  }

  .title {
    position: relative;
    top: 60%;
    width: 50%;
  }

  .inpu {
    position: relative;
    left: 5%;
    font-size: 24px;
    width: 100%;
    border: 0;
    background: 0;
    color: #eee;
    padding-right: 35px;
    vertical-align: text-top;
    outline: none;
  }

  .place{
    position: relative;
    left: 11%;
    font-size: 18px;
    width: 51%;
    top: 70%;
    border: 0;
    background: 0;
    color: #eee;
    padding-right: 35px;
    vertical-align: text-top;
    outline: none;
  }

  .el-input__inner {
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    border-bottom-width: 1px;
  }

  .characterCounter {
    position: absolute;
    right: -10%;
    bottom: 3px;
    font-size: 12px;
    color: #fff;
  }

  .calendar {
    position: relative;
    top: 65%;
    width: 100%;
  }

  .el-date-editor {
    position: relative;
    left: 32%;
    text-align: left;
  }

  .content {
    z-index: 10;
    background-color: #fff;
    padding: 15px 0;
    height: 55%;
  }

  .section {
    background: #fff;
    border-radius: 2px;
    margin: 15px 75px;
    border: 1px solid #f8f8f8;
  }

  .section_head {
    text-align: center;
    padding: 13px 10px;
    background-color: #f8f8f8;
    cursor: pointer;
  }

  .section_title {
    font-size: 16px;
    color: #4a4a4a;
    text-align: center;
  }

  .section_toggle {
    cursor: pointer;
    position: relative;
    float: left;
    top: -11px;
    left: 11px;
    line-height: 47px;
    font-size: 30px;
    color: #999;
  }

  .ui_card {
    background-color: #fff;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    color: #2c2c2c;
    max-width: 100%;
    position: relative;
  }

  .tag {
    background-color: #fff;
  }

  .new_tag {
    width: 100%;
    bottom: 0;
    border-top: 1px solid #cbcbcb;
    border-bottom: 0;
  }

  .tag_input {
    min-height: 275px;
    padding: 26px 52px 45px 52px;
    display: block;
  }

  .tip_input .tip_choice {
    display: block;
  }

  .tip_cta {
    font-size: 16px;
    margin-bottom: 20px;
    color: #666;
  }

  .tip_list {
    min-height: 160px;
    text-align: justify;
  }

  .tip_input .tip_list .tip_choice {
    display: inline-block;
    width: 90px;
    margin-bottom: 20px;
  }

  .tip_input {
    text-align: justify;
  }

  .tag_name {
    display: inline-block;
    font-size: 20px;
    background-color: #d2d2d2;
    cursor: pointer;
    text-align: center;
    border-radius: 4px;
    width: 90px;
    height: 90px;
    line-height: 90px;
    color: #fff;
  }

  * {
    margin: 0 auto;
    padding: 0;
    font-family: "微软雅黑";
  }

  .clearboth::after {
    content: "";
    display: block;
    clear: both;
  }

  .image-view {
    width: 978px;
    height: 300px;
    margin: 10px 0 0 0;
  }

  .image-view .addbox {
    float: left;
    position: relative;
    left: -2%;
    height: 100px;
    width: 100px;
    margin-bottom: 20px;
    text-align: center;
  }

  .image-view .addbox input {
    position: absolute;
    left: 0;
    height: 100px;
    width: 100px;
    opacity: 0;
  }

  .image-view .addbox .addbtn {
    float: left;
    height: 100px;
    width: 100px;
    line-height: 100px;
    color: #fff;
    font-size: 40px;
    background: #ccc;
    border-radius: 10px;
  }

  .image-view .item {
    position: relative;
    top: 0;
    left: 0;
    float: left;
    height: 100px;
    width: 100px;
    margin: 1px 4px 1px 3px;
  }

  .image-view .item .cancel-btn {
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    width: 20px;
    height: 20px;
    color: #fff;
    line-height: 20px;
    text-align: center;
    background: red;
    border-radius: 10px;
    cursor: pointer;
  }

  .image-view .item img {
    width: 100%;
    height: 100%;
  }

  .image-view .view {
    clear: both;
    position: relative;
    top: -116.5%;
    left: 30%;
  }

  .myblog {
    width: 530px;
    height: 230px;
    position: relative;
    left: -22%;
  }

  .submit {
    position: relative;
    float: right;
  }

  .hide {
    display: none;
  }

  .img-item {
    width: 4.4rem;
    height: 3.75rem;
    float: left;
    margin-left: 1.4rem;
    margin-top: 0.5rem;
  }

  .img-item {
    width: 100%;
    height: 100%;
  }

  .active-pic {
    font-size: 0.6rem;
    color: red;
    padding: 0 1rem 0 1.5rem;
    margin-top: 1rem;
  }

  .add-pic {
    background: #f3f3f3;
    width: 4.4rem;
    height: 3.75rem;
    float: left;
    margin-left: 1.5rem;
    margin-top: 0.5rem;
    text-align: center;
    font-size: 2rem;
    line-height: 3.5rem;
    color: #979797;
    position: relative;
  }

  .add-pic input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    opacity: 0;
  }

  .section_toggle {
    cursor: pointer;
    position: relative;
    float: left;
    top: -11px;
    left: 11px;
    line-height: 47px;
    font-size: 30px;
    color: #999;
  }

  .section_title {
    font-size: 16px;
    color: #4a4a4a;
    text-align: center;
  }

  .section_body {
    height: 400px;
  }

  .ui_card {
    background-color: #fff;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    color: #2c2c2c;
    max-width: 100%;
    position: relative;
  }

  .section {
    background: #fff;
    border-radius: 2px;
    margin: 15px 75px;
    border: 1px solid #f8f8f8;
  }

  .section_head {
    text-align: center;
    padding: 13px 10px;
    background-color: #f8f8f8;
    cursor: pointer;
  }

  .image-view {
    width: 978px;
    height: 300px;
    margin: 10px 0 0 0;
  }

  .image-view .addbox {
    float: left;
    position: relative;
    left: -2%;
    height: 100px;
    width: 100px;
    margin-bottom: 20px;
    text-align: center;
  }

  .image-view .addbox input {
    position: absolute;
    left: 0;
    height: 100px;
    width: 100px;
    opacity: 0;
  }

  .image-view .addbox .addbtn {
    float: left;
    height: 100px;
    width: 100px;
    line-height: 100px;
    color: #fff;
    font-size: 40px;
    background: #ccc;
    border-radius: 10px;
  }

  .image-view .item {
    position: relative;
    top: 0;
    left: 0;
    float: left;
    height: 100px;
    width: 100px;
    margin: 1px 4px 1px 3px;
  }

  .image-view .item .cancel-btn {
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    width: 20px;
    height: 20px;
    color: #fff;
    line-height: 20px;
    text-align: center;
    background: red;
    border-radius: 10px;
    cursor: pointer;
  }

  .image-view .item img {
    width: 100%;
    height: 100%;
  }

  .image-view .view {
    clear: both;
    position: relative;
    top: -116.5%;
    left: 30%;
  }

</style>

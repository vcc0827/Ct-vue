<template>
    <div class="section ui_card">
      <div class="section_head">
        <span class="section_title">这次旅行的记录</span>
      </div>
        <div>
          <div ref="editor" style="width: 978px;text-align: left"></div>
        </div>
    </div>
</template>

<script>

  export default {
    components:{

    },
    data() {
      return {
        editorContent:"",
        content1:"",
        diary:{
          title:'',
          time:'',
          address:'',
        },
        flag: false,
        pp:false,
        textarea: '',
        dialogImageUrl: '',
        dialogVisible: false
      }
    },

    methods:{
      createEdtor(){
        var editor = new E(this.$refs.editor);
        editor.customConfig.onchange = (html)=>{
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
        editor.customConfig.emotions =  [
          {
            // tab 的标题
            title: 'emoji',
            // type -> 'emoji' / 'image'
            type: 'emoji',
            // content -> 数组
            content: ['😀', '😃', '😄', '😁', '😆','😀','😁','😂','😃','😄','😅','😆','😉','😊','😋','😎','😍','😘','😗','😙','😚',
              '☺','😇','😐','😑','😶','😏','😣','😥','😮','😯','😪','😫','😴','😌','😛','😜','😝','😒','😓','😔','😕','😲',
              '😷','😖','😞','😟','😤','😢','😭','😦','😧','😨','😬','😰','😱','😳','😵','😡','😠']
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
          customInsert:function (insertImg,result,editor) {
            if(result.errno ==0){
              console.log('insert ok!');
              insertImg(`http://localhost:3000/article_img/${result.data[0]}`);
            }else{
              alert("图片上传失败！");
            }
          }
        };
        editor.create();
      },
      save(){
        alert('保存成功');
      },
      articleAdd() {
        let _this=this
        console.log(this.upath);
        var zipFormData = new FormData();
        //依次添加多个文件
        for(var i = 0 ; i< this.upath.length ; i++){
          zipFormData.append('filename', this.upath[i]);
        }
        //添加其他的表单元素
        zipFormData.append('text',this.data.content)
        let config = { headers: { 'Content-Type': 'multipart/form-data' } };
        this.$axios.post(this.$store.state.url+'/articleAdd', zipFormData,config)
          .then(function (response) {
            console.log(response);
            console.log(response.data);
            console.log(response.bodyText);
            alert("发布成功！！！")
            location.href= _this.$store.state.myurl+'/article'
          }).catch((err) => {
          console.log(err)
          alert(err)
        });
      },
      changeImage(e) {
        this.upath = e.target.files;
        if(this.upath.length<0||this.upath.length>6){
          alert("请上传1-6张图片")
          this.check1=false
        }else {
          this.check1=true
        }
      },

      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      beforeUpload(file){
        console.log(this.form.name)
        var fd = new FormData();
        fd.append('fileList',this.fileList);//传文件
        fd.append('name',this.form.name)
        console.log(fd)
        var config = {	    headers:{'Content-Type':'multipart/form-data'}	};
        //fd.append('srid',this.aqForm.srid);//传其他参数
        /*axios.post('/cms/rating/savePic',fd).then(function(res){
            alert('成功');
        })*/

        return true;
      },
      UploadUrl:function(){
        return "http://localhost:9000/cms/rating/savePic";
      },
      submitUpload() {

        this.$refs.upload2.submit();
        var fd = new FormData();
        fd.append('fileList',this.fileList);//传文件
        fd.append('name',this.form.name)
        axios.post('/static/img',fd).then(function(res){
          alert('成功');

        })
      },
      onChange(file, fileList){
        this.fileList=fileList;
        console.log(this.fileList)
      },
      handlePictureCardPreview(file) {
        console.log("handlePictureCardPreview")
        this.dialogImageUrl = file.url;
        console.log(file.url);
        this.dialogVisible = true;
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);

      },
    },
    mounted(){
      this.createEdtor();
    }


  }
</script>

<style scoped>

  .hide{
    display:none;
  }
  .img-item{
    width:4.4rem;
    height: 3.75rem;
    float:left;
    margin-left: 1.4rem;
    margin-top:0.5rem;
  }
  .img-item{
    width: 100%;
    height: 100%;
  }
  .active-pic{
    font-size: 0.6rem;
    color:red;
    padding:0 1rem 0 1.5rem;
    margin-top: 1rem;
  }
  .add-pic{
    background: #f3f3f3;
    width: 4.4rem;
    height: 3.75rem;
    float: left;
    margin-left: 1.5rem;
    margin-top: 0.5rem;
    text-align: center;
    font-size:2rem;
    line-height: 3.5rem;
    color: #979797;
    position: relative;
  }
  .add-pic input{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height:100%;
    z-index: 10;
    opacity:0;
  }
  .section_toggle {
    cursor: pointer;
    position: relative;
    float:left;
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
  .section_body{
    height:400px;
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
    left:-2%;
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
    top:0;
    left:0;
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

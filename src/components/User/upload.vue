<!--未完成！-->
<template>
  <el-container>
    <app-nav-bar></app-nav-bar>
    <main style="    width: 100%;
    padding: 0;
    background-color: #f1f1f1;">
      <!--顶部提示条-->
      <div class="top">
        <!--<div class="save_time">没有保存</div>-->

        <el-button class="button save" type="info" plain>保存草稿</el-button>
        <el-button @click="towrite" class="button loader" type="success" plain>提交游记</el-button>
      </div>
      <!--主体内容部分-->
      <div class="body">
        <!--头部-->
        <div class="header">
          <div class="upload_img">
          </div>
          <!--标题-->
          <div class="title">
            <el-input
              maxlength="30" @input = "descInput"
              v-model="desc" value data-minlen="1" data-maxlen="30"
              placeholder="游记题目" class="inpu el-input__inner">
            </el-input>
            <div class="characterCounter">剩余{{remnant}}个字</div>
          </div>
          <!--日历-->
          <div class="calendar">
            <div class="calendar_container">
              <!--日期时间选择器-->
              <div class="block">
                <el-date-picker
                  v-model="value"
                  type="datetimerange"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :default-time="['12:00:00']">
                </el-date-picker>
              </div>
            </div>
          </div>
        </div>
        <!--内容-->
        <div class="content">
          <!--小贴士-->
          <div class="section ui_card">
            <div class="section_head" @click="flag=!flag">
              <span class="section_title">贴士</span>
              <div class="section_toggle">
                <div class="opened" v-if="flag">↓</div>
                <div class="closed" v-if="!flag">→</div>
              </div>
            </div>
            <div class="tips_body">
              <div class="tag new_tag show_tag_input" v-if="flag">
                <div class="tag_input">
                  <div class="tip_input input_overlay">
                    <div class="tip_choice">
                      <div class="tip_cta">选择贴士类型</div>
                      <div class="tip_list">
                        <div class="tip_choice"><span class="tag_name" data-tip="行前准备">行前准备</span><span
                          class="tag_label">行前贴士</span></div>
                        <div class="tip_choice"><span class="tag_name" data-tip="注意事项">注意事项</span><span
                          class="tag_label">事项贴士</span></div>
                        <div class="tip_choice"><span class="tag_name" data-tip="交通">交通</span><span
                          class="tag_label">交通贴士</span></div>
                        <div class="tip_choice"><span class="tag_name" data-tip="签证">签证</span><span
                          class="tag_label">签证贴士</span></div>
                        <div class="tip_choice"><span class="tag_name" data-tip="购物">购物</span><span
                          class="tag_label">购物贴士</span></div>
                        <div class="tip_choice"><span class="tag_name" data-tip="货币">货币</span><span
                          class="tag_label">货币贴士</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--添加新一天-->
          <div class="section add_card ui_button secondary loading" id="ADD_CARD">
            <div class="section_head" @click="plzwait">
              <span>
                <span class="ui_icon plus"></span>
                添加新一天
                <span class="ui_loader">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </span></span>
            </div>
          </div>
        </div>
      </div>
    </main>
    <el-footer>
      <app-nav-footer></app-nav-footer>
    </el-footer>
  </el-container>

</template>

<script>
  import bar from '../nav-bar'
  import footer from '../nav-footer'

  export default {
    components: {
      'app-nav-bar': bar,
      'app-nav-footer': footer
    },

    name: "upload",
    data() {
      return {
        remnant:30,//倒计数
        input: '',
        input2: '',
        value: '',
        flag: false,
      }
    },
    methods: {
      //计算输入数
      descInput(){
        var txtVal = this.desc.length;
        this.remnant = 30-txtVal;
      },
      towrite: function (event) {
        alert('您即将打开您的游记')
        var _this = this
        setTimeout(function () {
          _this.$router.push({path: '/user/write'})
        }, 500)
      },
      plzwait: function (event) {
        alert('程序员去看大海了，正在赶来完善！')
      },
    }
  }
</script>

<style scoped>
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
    top: 15%;
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
    height: 800px;
    width: 1130px;
    margin: 0 auto;
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
    left: 50%;
    font-size: 24px;
    width: 100%;
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
    right: -63%;
    bottom: 3px;
    font-size: 12px;
    color: #fff;
  }

  .calendar {
    position: relative;
    top: 65%;
    width: 100%;
  }

  .el-date-editor{
    position: relative;
    left: 32%;
    text-align: left;
  }
  .content {
    z-index: 10;
    background-color: #fff;
    padding: 15px 0;
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
  }

  .section_toggle {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 12px;
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
</style>

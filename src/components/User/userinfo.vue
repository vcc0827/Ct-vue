<template>
  <el-container style="height: 100%">
    <el-header style="height: 120px;">
      <app-nav-bar></app-nav-bar>
    </el-header>
    <main style="margin-top:20px">
      <div class="clearfix">
        <div class="live_wrap clearfix">
          <div class="myhead">
            <h1 style="color:#2d9f80">个人中心</h1>
          </div>
          <hr style="border-bottom:2px solid black; margin-bottom: 10px;"/>
          <el-tabs :tab-position="tabPosition">
            <el-tab-pane label="个人资料" style="font-size: 20px;">
              <div>
                <div class="title">
                  <span><img src="../../assets/img/personicon.png" alt="" width="20px" style="float:left"></span>
                  <p>
                    我的个人资料
                  </p>
                </div>
                <div class="info_main">
                  <ul style="font-size: 20px">
                    <li>昵称：{{data.user_nickname}}</li>
                    <li>姓名：{{data.user_name}}</li>
                    <li>电子邮件：{{data.user_email}}</li>
                    <li>地址：{{data.user_address}}</li>
                    <li>手机号：{{data.user_phone}}</li>
                  </ul>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="收到的消息">
              <div style="text-align: center"> 您尚未收到任何消息！ </div>
            </el-tab-pane>
            <el-tab-pane label="修改我的个人信息" style="overflow: hidden">
              <changeinfo></changeinfo>
            </el-tab-pane>
            <el-tab-pane label="我的收藏">
              <div   style="text-align: center"> 您还没有收藏过任何游记! </div>
            </el-tab-pane>
          </el-tabs>
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
  import footer from '../foot'
  import changeinfo from './changeinfo'


  export default {
    components: {
      'app-nav-bar': bar,
      'app-nav-footer': footer,
      'changeinfo': changeinfo,

    },
    data() {
      return {
        data:[],
        tabPosition: 'left',
        imageUrl: '',
      }
    },
    created(){
      this.mounted();
    },
    methods:{
      toUpload: function (event) {
        var _this = this
        setTimeout(function () {
          _this.$router.push({path: '/user/upload'})
        }, 500)
      },
      mounted() {
        this.$axios.get(`/user/get/`+this.$store.state.user_phone).then((result) => {
           console.log(this.$store.state.user_phone);
          this.data = result.data.data[0];
          console.log(this.data)
        })
      },
    },
  }

</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .myhead{
    display: inline;

  }
  ul li {
    text-align: left;
  }
  li{
    height:30px;
    margin-top:10px;
    margin-bottom:10px;
    margin-left :10px;
    border-bottom:1px dashed #FFCACA;
  }
  .title {
    font-size: large;
    text-align: left;
    margin-bottom: 34px;
    width: 100%;
    background: #f5f5f5;
  }


  .live_wrap{
    width: 1000px;
    margin: 0 auto 60px;
    padding-top: 30px;
  }
  .clearfix{
    display: block;
  }
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

</style>

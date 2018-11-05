<template>
  <main>
    <div class="banner">
      <div class="header">
        <div class="container" style="width:1700px; font-size:15px;">
          <div class="header-left">
            <div class="w3layouts-logo">
              <h1>
                <a href="/"><img src="../assets/img/logo1.1.png" alt="" width=210 height="70"></a>
              </h1>
            </div>
          </div>
          <div class="header-right">
            <div class="w3-header-top">
              <ul>
                <li>联系方式 <i class="fa fa-phone" aria-hidden="true"></i> : +1 234 567 9871</li>
                <li>意见箱 <i class="fa fa-envelope" aria-hidden="true"></i> : <a href="mailto:info@example.com">mail@example.com</a></li>
              </ul>
              <p></p>
            </div>
            <div class="w3-header-bottom">
              <div class="top-nav">
                <nav class="navbar navbar-default">
                  <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                  </div>
                  <!-- Collect the nav links, forms, and other content for toggling -->
                  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                      <li><a class="active" href="/">首页</a></li>
                      <li><a href="/blog/中国">大家的游记</a></li>
                      <li class=""><a href="#" class="dropdown-toggle hvr-bounce-to-bottom" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">主题推荐<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                          <li><a class="hvr-bounce-to-bottom" href="/show/photo">摄影</a></li>
                          <li><a class="hvr-bounce-to-bottom" href="/show/food">美食</a></li>
                          <li><a class="hvr-bounce-to-bottom" href="/show/buy">购物</a></li>
                        </ul>
                      </li>
                      <li class="" v-if="isLogin"><a href="#" class="dropdown-toggle hvr-bounce-to-bottom" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <a href="">欢迎：{{UserPhone}}！</a><span class="caret"></span></a>
                        <ul class="dropdown-menu">
                          <li><a class="hvr-bounce-to-bottom" href="/User/userinfo">个人信息</a></li>
                          <li><a class="hvr-bounce-to-bottom" href="/User/write">我的游记</a></li>
                        </ul>
                      </li>
                      <li v-if="!isLogin"><a href="/register/Login">登录/注册</a></li>
                      <li v-if="isLogin"><a href="/" @click="outLogin()">退出</a></li>
                    </ul>
                    <div class="clearfix"> </div>
                  </div>
                </nav>
              </div>
              <div class="clearfix"> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


<script>
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
          num:1
      }
    },
    methods: {
      tomain(event) {
        var _this = this;
        setTimeout(function () {
          _this.$router.push({path: '/'})
        }, 500)
      },
      outLogin() {
        localStorage.clear();
        history.go(0)
      },
    },
    computed: mapGetters(['UserId', 'UserName', 'UserPhone','isLogin'])
  }
</script>

<style scoped>
  /*bootstrap-css */
  @import "../../static/css/bootstrap.css";
  /*css*/
  @import "../../static/css/style.css";
  /*font-awesome icons*/
  @import "../../static/css/font-awesome.css";

  *{
    margin:0;
    padding: 0;
    list-style: none;
  }
</style>

<!--登录后的导航条-->
<template>
  <div style="position:relative; z-index:9999;">
    <ul class="main">
      <li class="forlogo">
        <img src="../assets/img/logo.png" style="float:left;cursor:pointer;width:127px;height: 50px" @click="tomain"/>
      </li>
      <li class="mover"><a href="/">首页</a>
      </li>
      <!--<li class="mover"><a href="#">旅行者之选</a>-->
      <!--</li>-->
      <li class="mover"><a href="#">主题游推荐</a>
        <ul class="drop menu2">
          <li><a href="/show/photo">摄影</a></li>
          <li><a href="/show/food">美食</a></li>
          <li><a href="/show/buy">购物</a></li>
        </ul>
      </li>
      <li class="mover"><a href="/blog/中国">游记</a>
      </li>
      <li class="mover" v-if="!isLogin">
        <a href="/register/Login">登录/注册</a>
      </li>
      <li class="mover" v-else>
        <a href="">欢迎：{{UserPhone}}！</a>
        <ul class="drop menu3">
          <li><a href="/User/userinfo">个人中心</a></li>
          <li><a href="/User/write">我的游记</a></li>
          <li><a href="#" @click="outLogin()">退出</a></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        num: 1
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
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    margin-bottom: -1%;
  }

  body {
    background-color: #1e1e1e;
    background-size: cover;
    height: 100vh;

    font-family: "Raleway", sans-serif;
    letter-spacing: 1px;
  }

  h1 {
    text-align: center;
    color: #fff;
    padding-top: 20px;
  }

  ul {
    list-style: none;
  }

  nav {
    height: 40px;
    margin: 40px auto;
    background-color: rgba(23, 23, 50, 0.7);
    text-align: center;
    border-radius: 4px;
  }

  .main {
    display: flex;
    justify-content: center;
    height: 50px;
    background: #2d9f80;
  }

  .main > li {
    margin: 0 2%;
  }

  .main > li a {
    border-left: 0px solid rgba(23, 23, 50, 1);
  }

  a {
    text-decoration: none;
    color: #ffe;
    text-transform: capitalize;
    font-family: monospace;
    display: block;
    padding: 10px 15px;
    font-size: 16px;
    transition: background-color 0.5s ease-in-out;
    margin-top: 2px;
    font-family: "Raleway", sans-serif;
  }

  a:hover {
    background-color: #2ECC40;
  }

  .drop li {
    opacity: 0;
    transform-origin: top center;
  }

  .drop li a {
    background-color: rgba(23, 23, 50, 0.7);
    padding: 10px 0;
  }

  .forlogo {
    position: absolute;
    left: 5%;
  }

  .mover {
    position: relative;
    right: -25%;
  }

  /*------------- menu1 animation -------------------*/

  .main li:hover .menu1 li:first-of-type {
    animation: menu1 0.3s ease-in-out forwards;
    animation-delay: 0.1s;
  }

  .main li:hover .menu1 li:nth-of-type(2) {
    animation: menu1 0.3s ease-in-out forwards;
    animation-delay: 0.2s;
  }

  .main li:hover .menu1 li:nth-of-type(3) {
    animation: menu1 0.3s ease-in-out forwards;
    animation-delay: 0.3s;
  }

  .main li:hover .menu1 li:last-of-type {
    animation: menu1 0.3s ease-in-out forwards;
    animation-delay: 0.4s;
  }

  @keyframes menu1 {
    from {
      opacity: 0;
      transform: translateX(30px) rotateY(90deg);
    }
    to {
      opacity: 1;
      transform: translateX(0) rotateY(0);
    }
  }

  /*------------- menu2 animation -------------------*/

  .main li:hover .menu2 li:first-of-type {
    animation: menu2 0.3s ease-in-out forwards;
    animation-delay: 0.1s;
  }

  .main li:hover .menu2 li:nth-of-type(2) {
    animation: menu2 0.3s ease-in-out forwards;
    animation-delay: 0.2s;
  }

  .main li:hover .menu2 li:nth-of-type(3) {
    animation: menu2 0.3s ease-in-out forwards;
    animation-delay: 0.3s;
  }

  .main li:hover .menu2 li:last-of-type {
    animation: menu2 0.3s ease-in-out forwards;
    animation-delay: 0.4s;
  }

  @keyframes menu2 {
    0% {
      opacity: 0;
      transform: scale(0.7);
    }
    50% {
      opacity: 0.5;
      transform: scale(1.1);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  /*------------- menu3 animation -------------------*/

  .main li:hover .menu3 li:first-of-type {
    animation: menu3 0.3s ease-in-out forwards;
    animation-delay: 0.1s;
  }

  .main li:hover .menu3 li:nth-of-type(2) {
    animation: menu3 0.3s ease-in-out forwards;
    animation-delay: 0.2s;
  }

  .main li:hover .menu3 li:nth-of-type(3) {
    animation: menu3 0.3s ease-in-out forwards;
    animation-delay: 0.3s;
  }

  .main li:hover .menu3 li:last-of-type {
    animation: menu3 0.3s ease-in-out forwards;
    animation-delay: 0.4s;
  }

  @keyframes menu3 {
    0% {
      opacity: 0;
      transform: translateX(20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /*------------- menu4 animation -------------------*/

  .main li:hover .menu4 li:first-of-type {
    animation: menu4 0.3s ease-in-out forwards;
    animation-delay: 0.1s;
  }

  .main li:hover .menu4 li:nth-of-type(2) {
    animation: menu4 0.3s ease-in-out forwards;
    animation-delay: 0.2s;
  }

  .main li:hover .menu4 li:nth-of-type(3) {
    animation: menu4 0.3s ease-in-out forwards;
    animation-delay: 0.3s;
  }

  .main li:hover .menu4 li:last-of-type {
    animation: menu4 0.3s ease-in-out forwards;
    animation-delay: 0.4s;
  }

  @keyframes menu4 {
    0% {
      opacity: 0;
      transform: translateX(50px) rotate(-90deg);
    }
    100% {
      opacity: 1;
      transform: translateX(0) rotate(0);
    }
  }

  /*------------- menu5 animation -------------------*/

  .main li:hover .menu5 li:first-of-type {
    animation: menu5 0.3s ease-in-out forwards;
    animation-delay: 0.3s;
  }

  .main li:hover .menu5 li:nth-of-type(2) {
    animation: menu5 0.3s ease-in-out forwards;
    animation-delay: 0.6s;
  }

  .main li:hover .menu5 li:nth-of-type(3) {
    animation: menu5 0.3s ease-in-out forwards;
    animation-delay: 0.9s;
  }

  .main li:hover .menu5 li:last-of-type {
    animation: menu5 0.3s ease-in-out forwards;
    animation-delay: 1.2s;
  }

  @keyframes menu5 {
    0% {
      opacity: 0;
      transform: rotateX(-90deg);
    }
    100% {
      opacity: 1;
      transform: rotateX(0);
    }
  }

  /*------------- menu6 animation -------------------*/

  .main li:hover .menu6 li:first-of-type {
    animation: menu6 0.3s ease-in-out forwards;
    animation-delay: 0.2s;
  }

  .main li:hover .menu6 li:nth-of-type(2) {
    animation: menu6 0.3s ease-in-out forwards;
    animation-delay: 0.4s;
  }

  .main li:hover .menu6 li:nth-of-type(3) {
    animation: menu6 0.3s ease-in-out forwards;
    animation-delay: 0.6s;
  }

  .main li:hover .menu6 li:last-of-type {
    animation: menu6 0.3s ease-in-out forwards;
    animation-delay: 0.8s;
  }

  @keyframes menu6 {
    0% {
      opacity: 0;
      transform: scale(2);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  /* my button style */
  .white-mode {
    text-decoration: none;
    padding: 7px 10px;
    background-color: #122;
    border-radius: 3px;
    color: #fff;
    transition: 0.35s ease-in-out;
    position: absolute;
    left: 15px;
    bottom: 15px;
    font-family: sans-serif;
  }

  .white-mode:hover {
    background-color: #fff;
    color: #122;
  }
</style>

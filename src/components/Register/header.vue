<template>
  <el-container>
    <el-header class="header" height="100px">
      <router-link to="/"><img src="../../assets/img/logo.png" width="228px" height="90px"></router-link>
      <h2 class="title">开始记录你的旅程吧！</h2>
    </el-header>
    <!--<el-main class="bg">-->
    <!--</el-main>-->
  </el-container>
</template>

<script>
  export default {
    name: 'header'
  }
</script>

<style>
  .header{
    background-color: #00a680;
    color: white;
    margin: 0 auto;
    width: 50%;
  }
  .title{
    color:rgba(37,149,15,0.35);
   margin-top:10px;
    text-align: center;
  }
  .bg{
    background-image: url("../../assets/img/login4.jpg");
    height: 600px;
    width: 840px;
    margin: 0 auto;
  }
</style>

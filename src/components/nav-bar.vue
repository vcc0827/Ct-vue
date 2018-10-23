<template>
  <el-row style="background: #2d9f80;">
    <el-col :span="8">
      <router-link to="/" tag="a" class="grid-content"><img class="img-nav" src="../assets/img/logo_long.png" alt="">
      </router-link>
    </el-col>
    <el-col :span="8">
      <div class="grid-content"></div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content">
        <div class="line"></div>
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                 background-color="#2d9f80" text-color="#000" active-text-color="#ffd04b" style="border: 0">

          <el-menu-item index="1">
            <router-link class="hove" to="/user/userinfo" tag="a">个人中心</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link class="hove" to="/user/write" tag="a">我的游记</router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link class="hove" to="/user/write" tag="a">我的足迹</router-link>
          </el-menu-item>
          <el-menu-item class="hove" index="4">退出</el-menu-item>
        </el-menu>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "nav-bar",
    data() {
      return {
        activeIndex: '',
        activeIndex2: ''
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .el-row {
    margin-bottom: 0;
  }

  .el-col {
    border-radius: 4px;
    height: 60px;
  }

  .grid-content {
    border-radius: 4px;
    height: 60px;
  }

  .img-nav {
    position:absolute;
    left:10%;
    width: 200px;
    height: 60px;
  }

  .hove{
    text-decoration: none;
  }
</style>

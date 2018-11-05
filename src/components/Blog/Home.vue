<template>
  <el-container>

    <el-header style="height: 104px"><app-nav-bar></app-nav-bar></el-header>

    <router-view></router-view>

    <app-nav-footer></app-nav-footer>

  </el-container>
</template>

<script>
  import bar from '../nav-bar'
  import footer from '.././foot'


  export default {
    name: 'Home',
    components: {
      'app-nav-bar': bar,
      'app-nav-footer': footer,

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    margin:0;
    padding: 0;
    list-style: none;
  }
  .el-container{
    height:100%;
  }
  .el-main {
    padding: 0;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    min-width: 1366px;
  }

  .el-header, .el-footer {
    color: #333;
    text-align: center;
  }

  .el-header {
    padding: 0;
  }

  .el-container {
    min-width: 1366px;
  }
</style>

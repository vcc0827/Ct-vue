<template>
  <el-container>
    <el-header><app-nav-bar></app-nav-bar></el-header>
    <router-view></router-view>
    <app-nav-footer></app-nav-footer>
  </el-container>
</template>

<script>
  import bar from './nav-bar'
  import footer from './nav-footer'

  export default {
    name: 'Home',
    components: {
      'app-nav-bar': bar,
      'app-nav-footer': footer
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    background: #2d9f80;
    padding: 0;
  }

  .el-container {
    min-width: 1366px;
  }
</style>

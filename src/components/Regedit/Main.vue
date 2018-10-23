<template>
  <el-container>
    <el-header><app-nav-bar></app-nav-bar></el-header>
    <div>
    <h1><myshow></myshow></h1>
    欢迎!<b @click="login">点这里登录</b>
    </div>
    <app-nav-footer></app-nav-footer>
  </el-container>

</template>

<script>
  import myshow from '../Home/show'
  import bar from '../nav-bar'
  import footer from '../nav-footer'

  export default {
    components:{
      'myshow':myshow,
      'app-nav-bar': bar,
      'app-nav-footer': footer
    },
    methods: {

      login () {
        this.$router.replace('/login')
      }
    }
  }
</script>

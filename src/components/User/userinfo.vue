<template>
  <el-container>
    <el-header style="background: #2d9f80;">
      <app-nav-bar></app-nav-bar>
    </el-header>
    <el-main>
      <h2 style="text-align:left">个人中心</h2>
      <hr/>
      <el-tabs :tab-position="tabPosition" style="height: auto">
        <el-tab-pane label="个人资料">
            <div class="title">我的个人资料</div>
            <hr>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                     class="demo-ruleForm，demo-dynamic" style="width:800px">
              <el-form-item label="我的头像">
                <img src="../../assets/Chrome.jpg" class="profile"/>
              </el-form-item>
              <el-form-item label="姓" prop="firstname">
                <el-input v-model="ruleForm.firstname" disabled></el-input>
              </el-form-item>
              <el-form-item label="名" prop="lastname" >
                <el-input v-model="ruleForm.lastname" disabled></el-input>
              </el-form-item>
              <el-form-item label="昵称" prop="nickname" >
                <el-input v-model="ruleForm.nickname" disabled></el-input>
              </el-form-item>
              <el-form-item label="电子邮箱" prop="nickname" >
                <el-input v-model="ruleForm.email" disabled></el-input>
              </el-form-item>
            </el-form>
        </el-tab-pane>
        <el-tab-pane label="收到的消息">
          <div> 您尚未收到任何消息！ </div>
        </el-tab-pane>
        <el-tab-pane label="修改我的个人信息" style="overflow: hidden">
          <changeinfo></changeinfo>
        </el-tab-pane>
        <el-tab-pane label="写游记">
          <el-button type="success" @click="toUpload" style="text-align: center"> 点击这里开始写游记 </el-button>
        </el-tab-pane>
      </el-tabs>
    </el-main>
    <el-footer>
      <app-nav-footer></app-nav-footer>
    </el-footer>
  </el-container>

</template>

<script>

  import bar from '../nav-bar1'
  import footer from '../nav-footer'
  import changeinfo from './changeinfo'


  export default {
    components: {
      'app-nav-bar': bar,
      'app-nav-footer': footer,
      'changeinfo': changeinfo,

    },
    data() {
      return {
        ruleForm: {
          firstname: '',
          lastname: '',
          nickname: '',
          email: '',
          pass: '',
        },
        tabPosition: 'left',
        imageUrl: '',
      }
    },
    methods:{
      toUpload: function (event) {
        var _this = this
        setTimeout(function () {
          _this.$router.push({path: '/user/upload'})
        }, 500)
      },
    }
  }

</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  ul li {
    text-align: left;
  }

  .title {
    font-size: large;
    text-align: left;
  }

  .profile{
    width: 120px;
    height: 120px;
  }
</style>

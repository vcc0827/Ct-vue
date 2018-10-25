<template>
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
</template>

<script>
  export default {
    components: {

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
        tabPosition: 'top',
        imageUrl: '',
      }
    },
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

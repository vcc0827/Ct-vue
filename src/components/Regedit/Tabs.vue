<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" class="style">
    <el-tab-pane label="用户登录" name="1">

      <el-row type="flex" justify="center">
        <el-form ref="loginForm" :model="user" :rules="rules" status-icon label-width="80px">
          <el-form-item label="账号" prop="account">
            <el-input v-model="user.account" placeholder="请输入用户账号"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password1">
            <el-input v-model="user.password1"  type="password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-upload" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </el-tab-pane>



    <el-tab-pane label="用户注册" name="2">

      <el-row type="flex" justify="center">
      <el-form ref="registerForm" :model="user" :rules="rules" status-icon label-width="80px">
        <el-form-item label="手机号码" prop="mobile">
          <el-input v-model="user.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="创建密码" prop="password2">
          <el-input v-model="user.password2" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-hhhhhform-item label="短信验证" prop="message">
          <el-input v-model="user.message" placeholder="请输入验证码"></el-input>
        </el-hhhhhform-item>
        <el-form-item>
          <el-button type="primary" @click="">获取验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="register">注册</el-button>
        </el-form-item>
      </el-form>
      </el-row>
    </el-tab-pane>

  </el-tabs>
</template>

<script>
  export default {
    data() {
      return {
        activeName: '1',
        user: {},
        rules: {
          account: [
            {required: true, message: '账号不能为空', trigger: 'blur'}
          ],
          password1: [
            {required: true, message: '密码不能为空', trigger: 'blur'}
          ],
          message: [
            {required: true, message: '验证码不能为空', trigger: 'blur'}
          ],
          password2: [
            {required: true, message: '创建密码不能为空', trigger: 'blur'}
          ],
          mobile: [
            {required: true, message: '手机号不能为空', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      login () {
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            if (this.user.account === 'admin' && this.user.pass === '123') {
              // dispatch采用Promise链式调用
              this.$store.dispatch('login', this.user).then(() => {
                this.$notify({
                  type: 'success',
                  message: '欢迎你,' + this.user.account + '!',
                  duration: 3000
                })
                this.$router.replace('/')
              })
            } else {
              this.$message({
                type: 'error',
                message: '用户名或密码错误',
                showClose: true
              })
            }
          }
          else {
            return false
          }
        })
      },


      register () {
        this.$refs.registerForm.validate((valid) => {
          if (valid) {
            if (valid) {
              this.$notify({
                type: 'success',
                message: '欢迎你,' + this.user.mobile + '!',
                duration: 3000
              })
              this.$router.replace('/')
            } else {
              this.$message({
                type: 'error',
                message: '验证码错误',
                showClose: true
              })
            }
          }
          else {
            return false
          }
        })
      }

    }
  };
</script>

<style>
  .style{
    width: 50%;
    margin: 0 auto;
  }
</style>

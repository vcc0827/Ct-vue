<template>
<div>
  <app-head></app-head><br/><br/>
  <el-tabs v-model="activeName" @tab-click="handleClick" class="style">
    <el-tab-pane label="用户登录" name="first">
      <el-row type="flex" justify="center">
        <el-form ref="loginForm" :model="user" status-icon label-width="80px">
          <el-form-item label="用户账号" prop="mobile">
            <el-input v-model="user.user_phone" placeholder="请输入您的账号"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="user.user_pwd" type="password" placeholder="请输入您的密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button  @click="login()" class="but">登录</el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </el-tab-pane>


    <el-tab-pane label="注册" name="second">
      <el-row type="flex" justify="center">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules2" status-icon label-width="80px">
      <el-form-item label="手机号" prop="user_phone">
        <el-input type="text" v-model="ruleForm.user_phone" placeholder="请输入手机号" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="user_name">
        <el-input type="text" v-model="ruleForm.user_name" placeholder="请输入昵称" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="user_pwd">
        <el-input type="password" v-model="ruleForm.user_pwd" placeholder="请输入密码" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" placeholder="请再次输入密码" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input type="text" v-model="ruleForm.code" placeholder="请输入验证码" autocomplete="off"></el-input>
        <el-button class="but" @click="getMessage()">获取验证码</el-button>
      </el-form-item>
      <el-form-item>
        <el-button  @click="submitForm('ruleForm')" class="but">注册</el-button>
        <el-button  icon="info" plain @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
      </el-form>
      </el-row>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>
  import axios from 'axios'
  import header from './header'
  export default {

    components:{
      'app-head':header
    },
    data() {
      var validatephone = (rule, value, callback) => {
      var pattern = /^1[34578]\d{9}$/
      if (!value) {
        return callback(new Error('手机号不能为空'));
      } else if(!pattern.test(value)){
        callback(new Error('请输入正确的手机号'))
      }else{
        callback()
      }
    };
      var validateName = (rule, value, callback) => {
        var pattern = /^[\w\u4e00-\u9fa5]{3,10}$/g
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else if (!pattern.test(value)) {
          cb(new Error('请输入3-10个字母/汉字/数字/下划线'))
        } else {
          callback()
        }
      }
      var validatePwd = (rule, value, callback) => {
        var pattern = /^\S{6,20}$/g
        if (value === '') {
          callback(new Error('请输入密码'))
        } else if (!pattern.test(value)) {
          callback(new Error('请输入6-20个非空白字'))
        } else {
          if (this.ruleForm.password !== '') {
            this.$refs.ruleForm.validateField('checkPass')
          }
          callback()
        }
      }
      var validateRePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.user_pwd) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var validateCode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请获取验证码'));
        } else if (value !== this.getcode) {
          callback(new Error('验证码有误，请重新输入!'));
        } else {
          callback();
        }
      };
      return {
        activeName: 'first',
        user: {
          user_phone: '',
          user_pwd: ''
        },
        getcode:'',
        ruleForm: {
          user_phone:'',
          userName:'',
          user_pwd: '',
          checkPass: '',
          code:'',
        },
        rules2: {
          user_phone: [
            { validator: validatephone, trigger: 'blur' }
          ],
          user_name: [
            { validator: validateName, trigger: 'blur' }
          ],
          user_pwd: [
            { validator: validatePwd, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validateRePass, trigger: 'blur' }
          ],
          code: [
            { validator: validateCode, trigger: 'blur' }
          ]

        },

      }

    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      login() {
        if (this.user.user_phone=== '' || this.user.user_pwd === '') {
          alert('手机号和密码不能为空！')
        } else {
          let _this = this;
          axios.post('http://localhost:3000/user/login',
            {
              user_phone: _this.user.user_phone,
              user_pwd: _this.user.user_pwd
            }).then(function (result) {
            let info = eval("(" + result.request.response + ")");
            console.log(info);
            if (info.code == 200) {
              alert('欢迎你,登录成功！');
              setTimeout(function () {
                _this.$router.push('/')
              }.bind(this), 1000);
              _this.$store.state.account =_this.userName;
              sessionStorage.setItem('sphone',_this.$store.state.account);
              sessionStorage.setItem('spassword',_this.$store.state.password);
              console.log(_this.$store.state.userName);
              _this.$router.push({path: '/'})
            }
            else {
              alert('用户名或密码错误')

            }
            //会记录当前路由
          });
        }
      },
      getMessage(){
        let _this = this
        for(let i = 0;i < 6;i++){
          _this.getcode += Math.floor(Math.random()*10);
        }
        alert(_this.getcode);
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('注册成功！');
            let _this = this
            _this.$router.push({path: '/'})
            axios.post("http://127.0.0.1:3000/user/register", {
              user_phone: _this.ruleForm.user_phone,
              user_pwd: _this.ruleForm.user_pwd,
              user_name: _this.ruleForm.user_name
            }).then((result)=> {

              console.log(result.data)
            },(err) =>{
              console.log(result.err)
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });

      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      // usercode(){
      //
      //   let _this=this;
      //   _this.ruleForm.user_phone=''
      //   for(let i =0;i<6;i++){
      //     this.ruleForm.user_phone += Math.floor(Math.random()*10);
      //   }
      //   console.log(_this. ruleForm.user_phone);
      //   axios.get('/proxy?mobile='+ _this.ruleForm.user_phone+'&tpl_id=109980&tpl_value=%23code%23%3d'+_this.ruleForm.user_phone+'&key=1a0fa998344f2822bbaf4c05e1235c7b')
      //     .then(function(res){
      //         console.log(res)
      //       }
      //     )
      //
      // },
    },



  };
</script>

<style scoped>
  .style {
    width: 50%;
    margin: 0 auto;
   background-color:rgba(53,149,0,0.26)
  }
.but{
  background-color:#00a680;
  color: white;
}


</style>



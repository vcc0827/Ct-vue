<template>

  <div class="bg">
    <!--<app-head></app-head><br/><br/>-->
    <el-tabs v-model="activeName" @tab-click="handleClick" class="style">
      <!--登录-->
      <el-tab-pane label="用户登录" name="first" >
        <el-row type="flex" justify="center" >
          <el-form ref="loginForm" :model="user" status-icon label-width="80px">
            <el-form-item label="用户账号" prop="account">
              <el-input v-model="user.userPhone" placeholder="请输入您的账号"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="user.password" type="password" placeholder="请输入您的密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="but" icon="el-icon-upload" round @click="login()">登录</el-button>
            </el-form-item>
          </el-form>
        </el-row>
      </el-tab-pane>
      <div class="container">
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
        <div class="circle-container">
          <div class="circle"></div>
        </div>
      </div>
      <!--注册-->
      <el-tab-pane label="注册" name="second">
        <el-row type="flex" justify="center">
          <el-form ref="ruleForm" :model="ruleForm" :rules="rules2" status-icon label-width="80px">
            <el-form-item label="手机号" prop="mobile">
              <el-input type="text" v-model="ruleForm.mobile" placeholder="请输入手机号" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="用户名" prop="userName">
              <el-input type="text" v-model="ruleForm.userName" placeholder="请输入昵称" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" placeholder="请再次输入密码"
                        autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="code">
              <el-input type="text"  v-model="ruleForm.code" placeholder="请输入验证码" autocomplete="off"></el-input>
              <el-button type="primary" class="but" round @click="getMessage()">获取验证码</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="but" icon="el-icon-edit" circle @click="submitForm('ruleForm')">注册</el-button>
              <el-button icon="info" plain @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-row>
      </el-tab-pane>
      <router-link to="/"><p class="rb">返回首页&nbsp;&nbsp;&nbsp;</p></router-link>



    </el-tabs>
  </div>
</template>
<script>
  import axios from 'axios'
  import header from './header'
  import foot from '../foot'
  export default {
    components:{
      'app-head':header
    },
    data() {
      var validatephone = (rule, value, callback) => {
        var pattern = /^1[345789]\d{9}$/
        if (!value) {
          return callback(new Error('手机号不能为空'));
        } else if (!pattern.test(value)) {
          callback(new Error('请输入正确的手机号'))
        } else {
          callback()
        }
      };
      var validateName = (rule, value, callback) => {
        var pattern = /^[\w\u4e00-\u9fa5]{3,10}$/g
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else if (!pattern.test(value)) {
          callback(new Error('请输入3-10个字母/汉字/数字/下划线'))
        } else {
          callback()
        }
      }
      var validatePwd = (rule, value, callback) => {
        var pattern = /^\S{3,20}$/g
        if (value === '') {
          callback(new Error('请输入密码'))
        } else if (!pattern.test(value)||(value.length<6||value.length>20)) {
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
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var validateCode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请获取验证码'));
        } else if (value !== this.ruleForm.code) {
          callback(new Error('验证码有误，请重新输入!'));
        } else {
          callback();
        }
      };
      return {
        activeName: 'first',
        user: {
          userPhone: '',
          password: ''
        },
        getcode: '',
        ruleForm: {
          mobile: '',
          userName: '',
          password: '',
          checkPass: '',
          code: '',
          code1:'',
        },
        rules2: {
          mobile: [
            {validator: validatephone, trigger: 'blur'}
          ],
          userName: [
            {validator: validateName, trigger: 'blur'}
          ],
          password: [
            {validator: validatePwd, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validateRePass, trigger: 'blur'}
          ],
          code: [
            {validator: validateCode, trigger: 'blur'}
          ],
        },
      }

    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      login() {
        if (this.user.userPhone === '' || this.user.password === '') {
          alert('手机号和密码不能为空！')
        } else {
          let _this = this;
          axios.post('http://localhost:3000/user/login',
            {
              user_phone: _this.user.userPhone,
              user_pwd: _this.user.password
            }).then(function (result) {
            let info = eval("(" + result.request.response + ")");
            console.log(info);
            if (info.code == 200) {
              // _this.$store.state.user_name = _this.user.userName;
              alert('欢迎你,登录成功！');
              setTimeout(function () {
                _this.$router.push('/')
              }.bind(this), 1000);
              // _this.$store.state.account =_this.userName;
              // sessionStorage.setItem('sphone',_this.$store.state.user_name);
              // sessionStorage.setItem('spassword',_this.$store.state.password);
              // console.log(_this.$store.state.userName);
              localStorage.setItem('user_id',result.data.data[0].user_id);
              localStorage.setItem('user_phone', _this.user.userPhone);
              history.go(0);
              _this.$router.push({path: '/'});
            }
            else {
              alert('用户名或密码错误')
            }
            //会记录当前路由
          });
        }
      },
      getMessage() {
        let _this = this
        // axios.get(`http://127.0.0.1:3000/user/getallphone/${_this.ruleForm.phoneNum}`,).then((result) => {
        //   let info = eval("(" + result.request.response + ")");
        //   if (info.data.length != 0) {
        //     alert("该用户已经注册,请直接登录!")
        //   }
        // }, (err) => {
        //   console.log(result.err)
        // })
        this.ruleForm.code1='';
        for (let i = 0; i < 6; i++) {
          _this.ruleForm.code1 += Math.floor(Math.random() * 10);
        }
        axios.get('http://v.juhe.cn/sms/send?mobile=' + _this.ruleForm.mobile + '&tpl_id=111245&tpl_value=%23code%23%3d' + _this.ruleForm.code1+ '&key=17759dd89fc0ca61d64ce2f7a29fc859')
          .then(function (res) {
              console.log(res)
            }
          )

        // function invokeSettime(obj) {
        //   var countdown = 60;
        //   settime(obj);
        //
        //   // function settime(obj) {
        //   //   if (countdown == 0) {
        //   //     $(obj).attr("disabled", false);
        //   //     $(obj).text("获取验证码");
        //   //     countdown = 60;
        //   //     return;
        //   //   } else {
        //   //     $(obj).attr("disabled", true);
        //   //     $(obj).text("(" + countdown + ")s重新发送");
        //   //     countdown--;
        //   //   }
        //   //   setTimeout(function () {
        //   //       settime(obj)
        //   //     }
        //   //     , 1000)
        //   // }
        // }

        // new invokeSettime("#showcode");

      },

      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('注册成功！即将跳转到登陆页面…');
            let _this = this;
            axios.post("http://127.0.0.1:3000/user/register", {
              user_phone: _this.ruleForm.mobile,
              user_pwd: _this.ruleForm.password,
              user_name: _this.ruleForm.userName
            }).then((result) => {
              console.log(result.data)
            }, (err) => {
              console.log(result.err)
            });
            _this.$router.push(history.go(0));
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    },
  };
</script>

<style>
  @import "../../assets/css/style.css";
  .style {
    background-color:transparent;
    color: black;
    letter-spacing: 1px;
    width: 37%;
    /*margin: 0 auto;*/
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
    position: absolute;
    top: 130px;
    right: 200px;


  }
  .but{
    background-color:#f5e29f;
    color: grey;
  }
  .fp{
    font-size:small;
    font-family:黑体;
    float: right;
    font-size:.9em;
    color:grey;
    letter-spacing: 1px;
  }
  .rb{
    font-size: small;
    font-family:黑体;
    float: left;
    font-size: .9em;
    color:gray;
    letter-spacing: 1px;
  }
  .bg{
    background: url("../../assets/img/zzpic11381.jpg") no-repeat;
    background-size: 100% auto;
    height: 100%;
    width: 100%;
  }

</style>


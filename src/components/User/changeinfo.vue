<template>
  <el-container>
    <el-main style="margin:0;padding:0;overflow: hidden;">
        <div class="title">帐号信息</div>
      <hr>
      <!--修改用户信息表单-->
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
               class="demo-ruleForm，demo-dynamic" style="width:800px">
        <!--上传头像-->
        <!--<el-form-item label="头像" prop="profile">-->
          <!--<el-upload-->
            <!--class="avatar-uploader"-->
            <!--action="https://jsonplaceholder.typicode.com/posts/"-->
            <!--:show-file-list="false"-->
            <!--:on-success="handleAvatarSuccess"-->
            <!--:before-upload="beforeAvatarUpload">-->
            <!--<img v-if="imageUrl" :src="imageUrl" class="avatar">-->
            <!--<i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
          <!--</el-upload>-->
        <!--</el-form-item>-->
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nickname">
          <el-input v-model="ruleForm.nickname"></el-input>
        </el-form-item>
        <!--邮箱验证-->
        <el-form-item
          prop="email"
          label="邮箱"
          :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]"
        >
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <!--国家地区级联选择-->
        <el-form-item label="国家地区">
          <div class="block" style="text-align: left">
            <el-cascader
              :options="options"
              v-model="selectedOptions"
              @change="handleChange"
              :separator="' '"
            >
            </el-cascader>
          </div>
        </el-form-item>
        <!--密码验证-->
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <!--确认/取消按钮-->
        <el-form-item>
          <el-button type="primary" @click="upload_click">保存</el-button>
          <el-button @click="resetForm('ruleForm')">取消修改</el-button>
        </el-form-item>
      </el-form>
      <hr>
    </el-main>
    <el-footer>
    </el-footer>
  </el-container>

</template>

<script>
  // vue中的JS，从外面引入地区数据到options
  import options from '../../assets/country-data.js'

  export default {
    components: {

    },
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }else if (!pattern.test(value)||(value.length<6||value.length>20)) {
          callback(new Error('请输入6-20个非空白字'))}
        else if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }callback();
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          name: '',
          nickname: '',
          email:'',
          address: '',
          pass: '',
          checkpass: '',
        },
        imageUrl: '',
        // email: '',
        rules: {
          name: [
            {required: true, message: '请输入您的姓名', trigger: 'blur'},
            {min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur'}
          ],
          nickname: [
            {required: true, message: '请输入您的昵称', trigger: 'blur'},
            {min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur'}
          ],
          address: [
            {required: true, message: '请选择国家/地区', trigger: 'change'}
          ],
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ],
        },
        selectedOptions: [],//存放默认值
        options: options,   //存放城市数据
      };
    },
    methods: {
      upload_click(i){
          this.$axios.post('user/uploadClick',{
            name:this.ruleForm.name,
            nickname:this.ruleForm.nickname,
            email:this.ruleForm.email,
            address:this.ruleForm.address.toString(),
            pass:this.ruleForm.pass,
            phone:this.$store.state.user_phone,
          }).then((res)=>{
            console.log(res.data.data)
            // this.$router.push(history.go(0));
          });
      },

      // 提交表单
      // submitForm(formName) {
      //   this.$refs[formName].validate((valid) => {
      //     if (valid) {
      //       alert('保存成功!');
      //       // post data to database
      //
      //     } else {
      //       console.log('保存失败!!');
      //       return false;
      //     }
      //   });
      // },
      // 重置表单
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },

      handleChange(value) {
        console.log(value);
        this.ruleForm.address = value;
      },
    }
  }
</script>

<style scoped>
  .title{
    font-size:large;
    text-align: left;
  }
  .avatar-uploader {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 200px;
  }

  .avatar-uploader:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    margin-left: 10px;
    margin-right: 80px;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

</style>

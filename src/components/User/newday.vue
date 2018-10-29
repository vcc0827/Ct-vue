<template>
    <div class="section ui_card">
      <div class="section_head" @click="pp=!pp">
        <span class="section_title">这次旅行的记录</span>
        <div class="section_toggle">
          <div class="opened" v-if="pp">↓</div>
          <div class="closed" v-if="!pp">→</div>
        </div>
      </div>
      <el-form class="section_body" ref="form" :model="form">
        <div class="image-view" v-if="pp">

          <!--图片-->
          <el-form-item label="上传图片">
            <el-upload
              name="img2"
              :before-upload="beforeUpload"
              :action="UploadUrl()"
              :auto-upload="false"
              ref="upload2"
              list-type="picture-card"
              :file-list="fileList2"
              :on-change="onChange"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>

          </el-form-item>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>

          <!--正文-->
          <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入内容"
            v-model="textarea"
          style="margin-top:70px">
          </el-input>

        </div>
      </el-form>
    </div>

</template>

<script>


  export default {

    data() {
      return {
        flag: false,
        pp:false,
        textarea: '',
        dialogImageUrl: '',
        dialogVisible: false
      }
    },
    created(){

    },
    methods:{
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      beforeUpload(file){
        console.log(this.form.name)
        var fd = new FormData();
        fd.append('fileList',this.fileList);//传文件
        fd.append('name',this.form.name)
        console.log(fd)
        var config = {	    headers:{'Content-Type':'multipart/form-data'}	};
        //fd.append('srid',this.aqForm.srid);//传其他参数
        /*axios.post('/cms/rating/savePic',fd).then(function(res){
            alert('成功');
        })*/

        return true;
      },
      UploadUrl:function(){
        return "http://localhost:9000/cms/rating/savePic";
      },
      submitUpload() {

        this.$refs.upload2.submit();
        var fd = new FormData();
        fd.append('fileList',this.fileList);//传文件
        fd.append('name',this.form.name)
        axios.post('/static/img',fd).then(function(res){
          alert('成功');

        })
      },
      onChange(file, fileList){
        this.fileList=fileList;
        console.log(this.fileList)
      },
      handlePictureCardPreview(file) {
        console.log("handlePictureCardPreview")
        this.dialogImageUrl = file.url;
        console.log(file.url);
        this.dialogVisible = true;
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);

      },
    }



  }
</script>

<style scoped>

  .hide{
    display:none;
  }
  .img-item{
    width:4.4rem;
    height: 3.75rem;
    float:left;
    margin-left: 1.4rem;
    margin-top:0.5rem;
  }
  .img-item{
    width: 100%;
    height: 100%;
  }
  .active-pic{
    font-size: 0.6rem;
    color:red;
    padding:0 1rem 0 1.5rem;
    margin-top: 1rem;
  }
  .add-pic{
    background: #f3f3f3;
    width: 4.4rem;
    height: 3.75rem;
    float: left;
    margin-left: 1.5rem;
    margin-top: 0.5rem;
    text-align: center;
    font-size:2rem;
    line-height: 3.5rem;
    color: #979797;
    position: relative;
  }
  .add-pic input{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height:100%;
    z-index: 10;
    opacity:0;
  }


  .section_toggle {
    cursor: pointer;
    position: relative;
    float:left;
    top: -11px;
    left: 11px;
    line-height: 47px;
    font-size: 30px;
    color: #999;
  }
  .section_title {
    font-size: 16px;
    color: #4a4a4a;
    text-align: center;
  }
  .section_body{
    height:400px;
  }
  .ui_card {
    background-color: #fff;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    color: #2c2c2c;
    max-width: 100%;
    position: relative;
  }
  .section {
    background: #fff;
    border-radius: 2px;
    margin: 15px 75px;
    border: 1px solid #f8f8f8;
  }
  .section_head {
    text-align: center;
    padding: 13px 10px;
    background-color: #f8f8f8;
    cursor: pointer;
  }
  .image-view {
    width: 978px;
    height: 300px;
    margin: 10px 0 0 0;
  }

  .image-view .addbox {
    float: left;
    position: relative;
    left:-2%;
    height: 100px;
    width: 100px;
    margin-bottom: 20px;
    text-align: center;
  }

  .image-view .addbox input {
    position: absolute;
    left: 0;
    height: 100px;
    width: 100px;
    opacity: 0;
  }

  .image-view .addbox .addbtn {
    float: left;
    height: 100px;
    width: 100px;
    line-height: 100px;
    color: #fff;
    font-size: 40px;
    background: #ccc;
    border-radius: 10px;
  }

  .image-view .item {
    position: relative;
    top:0;
    left:0;
    float: left;
    height: 100px;
    width: 100px;
    margin: 1px 4px 1px 3px;
  }

  .image-view .item .cancel-btn {
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    width: 20px;
    height: 20px;
    color: #fff;
    line-height: 20px;
    text-align: center;
    background: red;
    border-radius: 10px;
    cursor: pointer;
  }

  .image-view .item img {
    width: 100%;
    height: 100%;
  }

  .image-view .view {
    clear: both;
    position: relative;
    top: -116.5%;
    left: 30%;
  }

</style>

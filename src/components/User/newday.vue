<template>
    <div class="section ui_card">
      <div class="section_head" @click="pp=!pp">
        <span class="section_title">第1天</span>
        <div class="section_toggle">
          <div class="opened" v-if="pp">↓</div>
          <div class="closed" v-if="!pp">→</div>
        </div>
      </div>
      <div class="section_body">
        <div class="image-view" v-if="pp">
          <!--添加图片-->
          <div class="addbox">
            <input type="file" @change="getImgBase()">
            <div class="addbtn">+</div>
          </div>
          <!--预览-->
          <div class="item" v-for="(item, index) in imgBase64">
            <span class="cancel-btn" @click="delImg(index)">x</span>
            <img :src="item">
          </div>
          <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入内容"
            v-model="textarea">
          </el-input>
          <div style="float:right; margin:5px;">
            <el-button type="success" round>确认保存</el-button>
          </div>
        </div>
      </div>
    </div>

</template>

<script>


  export default {
    components: {
    },
    get(url, data) {
      return new Promise((resolve, reject) => {
        axios.get(url, {
          params: data
        }).then((res) => {
          if (res) {
            //成功回调
            resolve(res);
          }
        }).catch((error) => {
          reject(error);
        })
      })
    },
    post(url, data) {
      return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(data), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          }
        }).then((res) => {
          if (res) {
            //成功回调
            resolve(res);
          }
        }).catch((error) => {
          reject(error);
        })
      })
    },
    data() {
      return {
        input: '',
        input2: '',
        value: '',
        flag: false,
        pp:false,
        imgBase64: [],
        textarea: '',
        fileList2: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }]
      }
    },
    methods: {
      mounted: function () {
        var upload = document.getElementById("btnUpload");
        var avatar = document.getElementById("avatar");
        upload.onclick = function () {
          avatar.click();
        };

      },
      plzwait: function (event) {
        alert('程序员去看大海了，正在赶来完善！')
      },
      //图片预览
      getImgBase() {
        var _this = this;
        var event = event || window.event;
        var file = event.target.files[0];
        var reader = new FileReader();
        //转base64
        reader.onload = function (e) {
          _this.imgBase64.push(e.target.result);
        }
        reader.readAsDataURL(file);
      },
      //删除图片
      delImg(index) {
        this.imgBase64.splice(index, 1);
      },
      //新增一天
      newDays() {

      }
    }
  }
</script>

<style scoped>
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

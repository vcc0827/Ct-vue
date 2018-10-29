<template>
  <el-row class="row1">
    <el-col :span="6" class="el-img">
      <div class="div-img"><img style="width: 100%;height: auto;"
           src="../../assets/veer-133857517.jpg" alt=""></div>
    </el-col>
    <el-col :span="18">
      <div class="grid-content bg-purple-light">
        <el-row>
          <div class="grid-content1"><h2>{{data.article_name}}</h2></div>
        </el-row>
        <el-row>
          <div class="grid-content1">
            <p>
              <span>作者：{{data.user_name}}</span>
              <span style="padding-left: 20px">出行日期：{{data.travel_time | dateformat('YYYY-MM-DD')}}</span>
              <span style="padding-left: 20px">返回日期：{{data.return_time | dateformat('YYYY-MM-DD')}}</span><br>
            </p>
          </div>
        </el-row>
        <el-row>
          <div class="grid-content1">
            <el-col :span="12">
              <el-button type="primary">分享</el-button>
              <el-button type="warning">收藏</el-button>
              <el-button type="danger" @click="upload_click(data.article_click)">点赞{{data.article_click}}</el-button>
            </el-col>
            <el-col :span="12">
              <div style="float: right;padding-right: 200px">
                <el-button type="success" @click="tohome()">返回</el-button>
                <el-button type="info">分享行程</el-button>
              </div>
            </el-col>
          </div>
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "read-bar",
    data() {
      return {
        data: [],
        zan:true
      }
    },
    created(){
      this.mounted();
    },
    methods:{
      tohome(){
        this.$router.back(-1)
      },
      upload_click(i){
        if(this.zan){
        this.$axios.post('locate/uploadClick',{
          id:this.data.article_id,
          count:this.data.article_click+1
        }).then((res)=>{});
        this.data.article_click=parseInt(this.data.article_click) +1;
        console.log(this.data.article_click);
        this.zan=false;
        }else {
          alert("您已点赞过了，不能再次点赞！")
        }
      },
      mounted() {
        let article = this.$route.params.id;
        this.$axios.get(`locate/find/${article}`).then((result) => {
          // console.log(result.data);
          this.data = result.data.data[0];
          console.log(this.data)
        })
      }
    }
  }
</script>

<style scoped>
  .row1 {
    width: 100%;
    background: url("../../assets/veer-150121949.jpg") no-repeat 0 -450px;
    background-size: 100% auto;
    margin: 0 auto;
  }

  .div-img{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    overflow: hidden;
    margin: 0 auto;
  }

  .grid-content {
    min-height: 210px;
  }

  .grid-content1 {
    min-height: 55px;
  }
</style>

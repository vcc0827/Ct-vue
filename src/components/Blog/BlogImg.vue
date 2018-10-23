<template>
  <div class="b-img">
    <el-row :gutter="20">
      <el-col :span="6" v-for="(item,key,index) in travel" :key="key" :index="index">
        <div class="grid-content bg-purple" @click="toblog(index)">
          <div style="display: flex;justify-content: center;align-items: center;">
            <img class="el-img" src="../../assets/1.png" alt="">
          </div>
          <div>
            <h2 class="list">北海道+东京 13天休闲之行</h2>
            <div>
              <span>出行日期：2018/10/20</span><span style="padding-left: 30px">作者：</span>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import travel from '../../../static/travel'

  export default {
    name: "BlogImg",
    methods:{
      toblog(j){
        var i=j+1;
        this.$router.push({path: '/read/' + i + ''})
      }
    },
    data() {
      return {
        travel: travel
      }
    }
  }
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  }

  .el-col {
    border-radius: 4px;
    margin-bottom: 30px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    height: 400px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .b-img {
    width: 1366px;
    margin: 0 auto;
    margin-top: 20px;
  }

  .el-img {
    max-width: 80%;
    max-height: 90%;
    margin: 0 auto;
  }

  .list{
    width:260px;
    display:block;
    overflow:hidden;
    word-break:keep-all;
    white-space:nowrap;
    text-overflow:ellipsis;
  }
</style>

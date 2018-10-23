<template>
  <el-row class="row1">
    <el-col :span="6" class="el-img">
      <img style="width: 150px;height: 150px;"
           src="../../assets/veer-133857517.jpg" alt="">
    </el-col>
    <el-col :span="18">
      <div class="grid-content bg-purple-light">
        <el-row>
          <div class="grid-content1"><h2>香港，与迪士尼来一场痛快的约会</h2></div>
        </el-row>
        <el-row>
          <div class="grid-content1">
            <p>
              <span>作者：陆云龙</span>
              <span style="padding-left: 20px">出行日期：2018-08-01&nbsp&nbsp[4天]</span><br>
              旅游路线：香港
            </p>
          </div>
        </el-row>
        <el-row>
          <div class="grid-content1">
            <el-col :span="6">
              <el-button type="primary">分享</el-button>
              <el-button type="warning">收藏</el-button>
              <el-button type="danger">点赞</el-button>
            </el-col>
            <el-col :span="18">
              <div style="float: right">
                <router-link to="/blog/冰岛" tag="el-button" type="success">热门景点</router-link>
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
    name: "read-bar"
  }
</script>

<style scoped>
  .row1 {
    width: 1366px;
    background: url("../../assets/veer-150121949.jpg") no-repeat 0 -420px;
    background-size: 1366px 890px;
    margin: 0 auto;
  }

  .el-img {
    padding: 28px;
    padding-left: 150px;
  }

  .grid-content {
    height: 210px;
  }

  .grid-content1 {
    height: 55px;
  }
</style>

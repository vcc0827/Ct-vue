<template>
  <div class="third">
    <p class="cmmd">当季目的地推荐</p>
    <el-tabs v-model="activeName" @tab-click="handleClick" class="el">
      <el-tab-pane label="春天" name="first">
        <div class="row">
          <div class="col-xs-3 col-sm-3">
            <a href="#" class="thumbnail">
              <div class="img1">
                <p class="p1">马尔代夫</p>
              </div>
            </a>
          </div>
          <div class="col-xs-3 col-sm-3">
            <a href="#" class="thumbnail">
              <div class="img2">
                <p class="p1">悉尼</p>
              </div>
            </a>
          </div>
          <div class="col-xs-3 col-sm-3">
            <a href="#" class="thumbnail">
              <div class="img3">
                <p class="p1">吉隆坡</p>
              </div>
            </a>
          </div>
          <div class="col-xs-3 col-sm-3">
            <a href="#" class="thumbnail">
              <div class="img4">
                <p class="p1">长滩岛</p>
              </div>
            </a>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="夏天" name="second">
        <div class="row">
          <div class="col-xs-3 col-sm-3">
            <a href="#" class="thumbnail">
              <div class="img11">
                <p class="p1">毛里求斯</p>
              </div>
            </a>
          </div>
          <div class="col-xs-3 col-sm-3">
            <a href="#" class="thumbnail">
              <div class="img22">
                <p class="p1">悉尼</p>
              </div>
            </a>
          </div>
          <div class="col-xs-3 col-sm-3">
            <a href="#" class="thumbnail">
              <div class="img33">
                <p class="p1">吉隆坡</p>
              </div>
            </a>
          </div>
          <div class="col-xs-3 col-sm-3">
            <a href="#" class="thumbnail">
              <div class="img44">
                <p class="p1">曼谷</p>
              </div>
            </a>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="秋天" name="third">
        <div class="row">
          <div class="col-xs-3 col-sm-3">
            <a href="#" class="thumbnail">
              <div class="img111">
                <p class="p1">长滩岛</p>
              </div>
            </a>
          </div>
          <div class="col-xs-3 col-sm-3">
            <a href="#" class="thumbnail">
              <div class="img222">
                <p class="p1">悉尼</p>
              </div>
            </a>
          </div>
          <div class="col-xs-3 col-sm-3">
            <a href="#" class="thumbnail">
              <div class="img333">
                <p class="p1">吉隆坡</p>
              </div>
            </a>
          </div>
          <div class="col-xs-3 col-sm-3">
            <a href="#" class="thumbnail">
              <div class="img444">
                <p class="p1">曼谷</p>
              </div>
            </a>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="冬天" name="fourth">
        <div class="row">
          <div class="col-xs-3 col-sm-3">
            <a href="#" class="thumbnail">
              <div class="img1111">
                <p class="p1">长滩岛</p>
              </div>
            </a>
          </div>
          <div class="col-xs-3 col-sm-3">
            <a href="#" class="thumbnail">
              <div class="img2222">
                <p class="p1">悉尼</p>
              </div>
            </a>
          </div>
          <div class="col-xs-3 col-sm-3">
            <a href="#" class="thumbnail">
              <div class="img3333">
                <p class="p1">吉隆坡</p>
              </div>
            </a>
          </div>
          <div class="col-xs-3 col-sm-3">
            <a href="#" class="thumbnail">
              <div class="img4444">
                <p class="p1">曼谷</p>
              </div>
            </a>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    name: "Commd",
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style scoped>
  .cmmd {
    color: black;
    font-size: 35px;
    font-weight: 400;
  }

  a div {
    transition: all 0.3s ease-out 0s;
    margin: 0 auto;
  }

  a div:hover {
    transform: scale(1.04);

  }

  .third {
    background: #eee;
    min-width: 1366px;
    height: 400px;
    text-align: center;
  }

  .el {
    margin: 0 auto;
  }

  .img1 {
    background: url("../../assets/medf.png") no-repeat;
    width: 300px;
    height: 180px;
  }

  .img11 {
    background: url("../../assets/maoliqiusi.png") no-repeat;
    width: 300px;
    height: 180px;
  }

  .img111 {
    background: url("../../assets/xinjiapo.jpg") no-repeat;
    width: 300px;
    height: 180px;
  }

  .img1111 {
    background: url("../../assets/aomen.png") no-repeat;
    width: 300px;
    height: 180px;
  }

  .img2 {
    background: url("../../assets/balidao.png") no-repeat;
    width: 300px;
    height: 180px;
  }

  .img22 {
    background: url("../../assets/luoma.jpg") no-repeat;
    width: 300px;
    height: 180px;
  }

  .img222 {
    background: url("../../assets/kenniya.png") no-repeat;
    width: 300px;
    height: 180px;
  }

  .img2222 {
    background: url("../../assets/qingmai.jpg") no-repeat;
    width: 300px;
    height: 180px;
  }

  .img3 {
    background: url("../../assets/niboer.png") no-repeat;
    width: 300px;
    height: 180px;
  }

  .img33 {
    background: url("../../assets/lundun.png") no-repeat;
    width: 300px;
    height: 180px;
  }

  .img333 {
    background: url("../../assets/pujidao.jpg") no-repeat;
    width: 300px;
    height: 180px;
  }

  .img3333 {
    background: url("../../assets/wubu.jpg") no-repeat;
    width: 300px;
    height: 180px;
  }

  .img4 {
    background: url("../../assets/changtandao.png") no-repeat;
    width: 300px;
    height: 180px;
  }

  .img44 {
    background: url("../../assets/changtandao.png") no-repeat;
    width: 300px;
    height: 180px;
  }

  .img444 {
    background: url("../../assets/changtandao.png") no-repeat;
    width: 300px;
    height: 180px;
  }

  .img4444 {
    background: url("../../assets/changtandao.png") no-repeat;
    width: 300px;
    height: 180px;
  }

  .p1 {
    color: white;
    font-size: 25px;
    font-weight: 200;
    text-align: center;
    padding-top: 60px;

  }

  a {
    text-decoration: none;
  }


</style>

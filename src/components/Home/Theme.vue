<template>
  <div class="third">
    <p class="cmmd">主题游推荐</p>
    <el-tabs v-model="activeName" @tab-click="handleClick" class="el">
      <el-tab-pane label="摄影" name="first">
        <div class="row">
          <div class="col-xs-3 col-sm-3">
            <a href="#" class="thumbnail">
              <div class="img1">
                <p class="p1">香港摄影</p>
              </div>
            </a>
          </div>
          <div class="col-xs-3 col-sm-3">
            <a href="#" class="thumbnail">
              <div class="img2">
                <p class="p1">巴黎摄影</p>
              </div>
            </a>
          </div>
          <div class="col-xs-3 col-sm-3">
            <a href="#" class="thumbnail">
              <div class="img3">
                <p class="p1">澳门摄影</p>
              </div>
            </a>
          </div>
          <div class="col-xs-3 col-sm-3">
            <a href="#" class="thumbnail">
              <div class="img4">
                <p class="p1">伦敦摄影</p>
              </div>
            </a>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="美食" name="second">
        <div class="row">
          <div class="col-xs-3 col-sm-3">
            <router-link to="/hk"><a href="#" class="thumbnail">
              <div class="img11">
                <p class="p1">香港美食</p>
              </div>
            </a></router-link>
          </div>
          <div class="col-xs-3 col-sm-3">
            <router-link to="/tb"><a href="#" class="thumbnail">
              <div class="img22">
                <p class="p1">台北美食</p>
              </div>
            </a></router-link>
          </div>
          <div class="col-xs-3 col-sm-3">
            <router-link to="/xjp"><a href="#" class="thumbnail">
              <div class="img33">
                <p class="p1">新加坡美食</p>
              </div>
            </a></router-link>
          </div>
          <div class="col-xs-3 col-sm-3">
            <router-link to="/qm"><a href="#" class="thumbnail">
              <div class="img44">
                <p class="p1">清迈美食</p>
              </div>
            </a></router-link>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="购物" name="third">
        <div class="row">
          <div class="col-xs-3 col-sm-3">
            <router-link to="/lsj"><a href="#" class="thumbnail">
              <div class="img111">
                <p class="p1">洛杉矶购物</p>
              </div>
            </a></router-link>
          </div>
          <div class="col-xs-3 col-sm-3">
            <router-link to="/am"><a href="#" class="thumbnail">
              <div class="img222">
                <p class="p1">澳门购物</p>
              </div>
            </a></router-link>
          </div>
          <div class="col-xs-3 col-sm-3">
            <router-link to="/db"><a href="#" class="thumbnail">
              <div class="img333">
                <p class="p1">迪拜购物</p>
              </div>
            </a></router-link>
          </div>
          <div class="col-xs-3 col-sm-3">
            <router-link to="/dj"><a href="#" class="thumbnail">
              <div class="img444">
                <p class="p1">东京购物</p>
              </div>
            </a></router-link>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="博物馆" name="fourth">
        <div class="row">
          <div class="col-xs-3 col-sm-3">
            <a href="#" class="thumbnail">
              <div class="img1111">
                <p class="p1">曼谷博物馆</p>
              </div>
            </a>
          </div>
          <div class="col-xs-3 col-sm-3">
            <a href="#" class="thumbnail">
              <div class="img2222">
                <p class="p1">巴黎博物馆</p>
              </div>
            </a>
          </div>
          <div class="col-xs-3 col-sm-3">
            <a href="#" class="thumbnail">
              <div class="img3333">
                <p class="p1">西归埔市博物馆</p>
              </div>
            </a>
          </div>
          <div class="col-xs-3 col-sm-3">
            <a href="#" class="thumbnail">
              <div class="img4444">
                <p class="p1">罗马博物馆</p>
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
      },
      goHK() {
        this.$router.push({path: '/hk'})
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
    background: url("../../assets/xgsy.png") no-repeat;
    width: 300px;
    height: 180px;
  }

  .img11 {
    background: url("../../assets/blms.png") no-repeat;
    width: 300px;
    height: 180px;
  }

  .img111 {
    background: url("../../assets/lsjgw.png") no-repeat;
    width: 300px;
    height: 180px;
  }

  .img1111 {
    background: url("../../assets/mgbwg.png") no-repeat;
    width: 300px;
    height: 180px;
  }

  .img2 {
    background: url("../../assets/blsy.png") no-repeat;
    width: 300px;
    height: 180px;
  }

  .img22 {
    background: url("../../assets/tbms.png") no-repeat;
    width: 300px;
    height: 180px;
  }

  .img222 {
    background: url("../../assets/amgw.png") no-repeat;
    width: 300px;
    height: 180px;
  }

  .img2222 {
    background: url("../../assets/blbwg.png") no-repeat;
    width: 300px;
    height: 180px;
  }

  .img3 {
    background: url("../../assets/amsy.png") no-repeat;
    width: 300px;
    height: 180px;
  }

  .img33 {
    background: url("../../assets/xjpms.png") no-repeat;
    width: 300px;
    height: 180px;
  }

  .img333 {
    background: url("../../assets/dbgw.png") no-repeat;
    width: 300px;
    height: 180px;
  }

  .img3333 {
    background: url("../../assets/xgbsbwg.png") no-repeat;
    width: 300px;
    height: 180px;
  }

  .img4 {
    background: url("../../assets/ldsy.png") no-repeat;
    width: 300px;
    height: 180px;
  }

  .img44 {
    background: url("../../assets/qmms.png") no-repeat;
    width: 300px;
    height: 180px;
  }

  .img444 {
    background: url("../../assets/djgw.png") no-repeat;
    width: 300px;
    height: 180px;
  }

  .img4444 {
    background: url("../../assets/lmbwg.png") no-repeat;
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

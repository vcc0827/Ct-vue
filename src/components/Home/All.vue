<template>
  <div class="middle">
    <p class="al">热门目的地推荐</p>
    <div class="row">
      <div class="col-xs-4 col-sm-4">
        <div class="thumbnail">
          <img>
          <div class="caption">
            <h3>亚洲</h3>
            <p class="p1"><em>中国&nbsp;&nbsp;香港</em></p>
            <p class="p2"><a href="" class="btn btn-primary" role="button">景区详情</a> <a href="#" class="btn btn-default"
                                                                                       role="button">攻略</a></p>
          </div>
        </div>
      </div>
      <div class="col-xs-4 col-sm-4">
        <div class="thumbnail">
          <img class="img1">
          <div class="caption">
            <h3>欧洲</h3>
            <p class="p1"><em>法国&nbsp;&nbsp;巴黎</em></p>
            <p class="p2"><a href="#" class="btn btn-primary" role="button">景区详情</a> <a href="#" class="btn btn-default"
                                                                                        role="button">攻略</a></p>
          </div>
        </div>
      </div>
      <div class="col-xs-4 col-sm-4">
        <div class="thumbnail">
          <img class="img2">
          <div class="caption">
            <h3>美洲</h3>
            <p class="p1"><em>美国&nbsp;&nbsp;洛杉矶</em></p>
            <p class="p2"><a href="#" class="btn btn-primary" role="button">景区详情</a> <a href="#" class="btn btn-default"
                                                                                        role="button">攻略</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import $ from 'jquery'
  // $(function(){
  //   alert('start')
  // })
  export default {
    name: "All"
  }
</script>
<style scoped>
  .middle {
    background: rgba(0, 0, 255, 0.1);
    min-width: 1366px;
    height: 600px;
    text-align: center;
  }

  .al {
    color: black;
    font-size: 35px;
    font-weight: 400;
  }

  .row {
    min-width: 1366px;
  }

  img {
    background: url("../../assets/xianggang.jpg") no-repeat;
    width: 500px;
    height: 314px;
    transition: all 0.3s ease-out 0s;
  }

  img:hover {
    transform: scale(1.04);
  }

  h3, .p1, .p2 {
    text-align: center;
  }

  .img1 {
    background: url("../../assets/bali.jpg") no-repeat;
    width: 500px;
    height: 314px;
  }

  .img2 {
    background: url("../../assets/luoshanji.jpg") no-repeat;
    width: 500px;
    height: 314px;

  }
</style>

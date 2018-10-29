<template>
  <el-container>
    <el-header>
      <app-nav-bar></app-nav-bar>
    </el-header>
    <el-main>
      <el-carousel :interval="5000" arrow="always" height="768px">
        <el-carousel-item v-for="item in 2" :key="item">
          <div class="bcg">{{ item }}</div>
        </el-carousel-item>
      </el-carousel>
    </el-main>

  <el-footer>
    <div style="height:50px"></div>
    <app-nav-footer></app-nav-footer>
  </el-footer>
  </el-container>
</template>





<script>
  import navbar from './nav-bar1'
  import footer from './nav-footer'


    export default {
        name: "main",
      components:{
        'app-nav-bar': navbar,
        'app-nav-footer': footer,

      },
      data(){
        return{
          imgArray:[
            '../assets/img/lunbo3.jpg',
            '../assets/img/lunbo4.jpg',
          ]
        }
      },
      methods: {}
    }
</script>

<style scoped>
*{
  margin:0;
  padding: 0;
  list-style: none;
}
.el-header {
  padding:0;
}
.el-footer{
  padding:0;
}
.bcg {
  color: #475669;
  opacity: 0.75;
  line-height: 500px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-image: url("../assets/img/lunbo3.jpg");
  line-height: 500px;
}

.el-carousel__item:nth-child(2n+1) {
  background-image: url("../assets/img/lunbo4.jpg");
  line-height: 500px;
}

</style>

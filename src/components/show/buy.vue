<template>
  <div>
    <el-header style="height: 104px">
      <app-nav-bar></app-nav-bar>
    </el-header>
    <div class="container">
      <h2>Hi翻购！</h2>
      <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item v-for="item in dat" :key="item">
          <img :src="`http://localhost:3000/buy/`+item" alt="" class="image">
        </el-carousel-item>
      </el-carousel>
      <h3 style=" text-align: center">购物频道-----香港专区</h3>
      <el-row style="width: 100%;margin: 0 auto">
        <el-col :span="6" class="ul" v-for="(item ,key,index) in data" v-if="item.id<=4" :key="key" :index="index">
          <li class="li">
            <img :src="`http://localhost:3000/buy/`+item.src" alt="" class="img">
            <span style="font-weight: bold;font-size: 16px">{{item.name}}</span>
            <div ><p class="neirong">{{item.des}}</p></div>
          </li>
        </el-col>
      </el-row>
      <el-row style="width: 100%;margin: 0 auto">
        <h3 style=" text-align: center">购物频道-----东京专区</h3>
        <el-col :span="6" class="ul" v-for="(item ,key,index) in data" v-if="item.id>4&& item.id>4" :key="key" :index="index">
          <li class="li">
            <img :src="`http://localhost:3000/buy/`+item.src" alt=""  class="img">
            <span style="font-weight: bold;font-size: 16px">{{item.name}}</span>
            <div ><p class="neirong">{{item.des}}</p></div>
          </li>
        </el-col>>
      </el-row>
    </div>
    <el-footer>
      <app-nav-footer></app-nav-footer>
    </el-footer>
  </div>

</template>

<script>
  import axios from 'axios'
  import navbar from '../nav-bar'
  import footer from '../foot'

  export default {
    components: {
      'app-nav-bar': navbar,
      'app-nav-footer': footer,
    },
    name: "buy",
    data(){
      return{
        dat:['a.jpg','b.jpg','c.jpg','d.jpg'],
        data:[]
      }},
    created(){
      this.mounted();
    },
    methods: {
      mounted() {
        axios.get("/buy").then((res) => {
          this.data = res.data.data
          console.log(this.data)
        });
      }
    }
  }
</script>

<style scoped>
  .neirong{
    text-indent: 2em;
    text-align: left;
  }
  .el-header {
    padding:0;
  }
  .el-footer{
    padding:0;
  }
  .container{
    width: 100%;
    margin: 0 auto;
    padding:0;
    background:white;
    height: 1300px;

  }
  h2{
    text-align: center;
  }
  .el-carousel__item h3 {
    color:  #99a9bf;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #d3dce6;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .ul{
    float: left;
    list-style: none;
    text-align: center;

  }
  .li{
    width:300px ;
    height: 300px;
    border: 1px solid rgba(0,0,255,0.3);
    margin:0 auto;
    overflow: hidden;

  }
  .li:hover{
    border: 1px solid rgba(0,255,0,0.3);
  }
  .img{
    width: 300px;
    height: 150px;
  }
  .image{
    width: 100%;
    /*height: 100%;*/
  }


</style>

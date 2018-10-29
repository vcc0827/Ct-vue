<template>
  <div class="container">
    <el-header>
      <app-nav-bar></app-nav-bar>
    </el-header>
    <h2>You are so Beautiful!</h2>
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="item in dat" :key="item">
        <img :src="`http://localhost:3000/photo/`+item" alt="" class="image">
      </el-carousel-item>
    </el-carousel>
    <h3 style=" text-align: center">摄影频道-----澳门专区</h3>
    <el-row style="width: 100%;margin: 0 auto">
      <el-col :span="6" class="ul" v-for="(item ,key,index) in data" v-if="item.id<=4" :key="key" :index="index">
        <div class="li">
          <img :src="`http://localhost:3000/photo/`+item.src" alt="" class="img">
          <span>{{item.name}}</span>
          <div>{{item.des}}</div>
        </div>
      </el-col>
    </el-row>
    <el-row style="width: 100%;margin: 0 auto">
      <h3 style=" text-align: center">摄影频道-----巴黎专区</h3>
      <el-col :span="6" class="ul" v-for="(item ,key,index) in data" v-if="item.id>4" :key="key" :index="index">
        <li class="li">
          <img :src="`http://localhost:3000/photo/`+item.src" alt=""  class="img">
          <span>{{item.name}}</span>
          <div>{{item.des}}</div>
        </li>
      </el-col>
    </el-row>
    <el-footer>
      <app-nav-footer></app-nav-footer>
    </el-footer>
  </div>
</template>

<script>
  import axios from 'axios'
  import navbar from '../nav-bar1'
  import footer from '../nav-footer'

  export default {
    components:{
      'app-nav-bar': navbar,
      'app-nav-footer': footer,
    },
    name: "photo",
    data(){
      return{
        dat:['e.jpg','f.jpg','g.jpg','h.jpg'],
        data:[]
      }},
    created(){
      this.mounted();
    },
    methods: {
      mounted() {
        axios.get("http://localhost:3000/photo").then((res) => {
          this.data = res.data.data
          console.log(this.data)
        });
      }
    }
  }
</script>

<style scoped>
  .el-header {
    padding:0;
  }
  .el-footer{
    padding:0;
  }
  .container{
    width: 100%;
    margin: 0;
    padding:0;
    background:white;
    height: 2000px;

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

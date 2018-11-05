<template>
  <el-container>
    <el-header style="height: 65px">
      <app-nav-bar></app-nav-bar>
    </el-header>
    <el-main>
      <app-slider></app-slider>
      <app-welcome></app-welcome>
      <div>
        <a href="#" title="飞回顶部" id="huojian" style="right:1%;bottom:3% ;position:fixed">
          <div style="width: 100px;height: 100px;"><img src="../../static/images/arrow.png" alt=""></div>
        </a>
      </div>
    </el-main>
  <el-footer>
    <div style="height:50px"></div>
    <app-nav-footer></app-nav-footer>
  </el-footer>
  </el-container>
</template>





<script>
  import navbar from './nav-bar'
  import slider from  './main-slider'
  import welcome from './main-welcome'
  import footer from './foot'
    export default {
        name: "main",
      components:{
        'app-nav-bar': navbar,
        'app-slider': slider,
        'app-welcome': welcome,
        'app-nav-footer': footer,

      },
      mounted(){
        console.log("%c", "padding:50px 300px;line-height:120px;background:url('http://wayouliu.duapp.com/img/tagsImg/youth.gif') no-repeat;");
        $(window).scroll(function(){
          var h=$(this).scrollTop();//获得滚动条距top的高度
          if(h>300){
            $("#huojian").fadeIn();
          }else{
            $("#huojian").fadeOut();
          }
        });
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
.el-main{
  margin:0;
  padding:0;
  position:relative;
  top:20px;
  overflow: hidden;
}
.el-footer{
  padding:0;
}


</style>

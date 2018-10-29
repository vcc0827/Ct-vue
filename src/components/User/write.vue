<template>
  <el-container style="height: 100%">
    <el-header><app-nav-bar></app-nav-bar></el-header>
    <el-main class="elmain">
      <div class="header">
        <span class="hworld">快来记录你的旅程吧</span>
        <el-button class="write" @click="toupload">写游记</el-button>
      </div>
      <div style="height:20px"></div>
      <!--我的游记显示-->
     <el-table :data="data" >
       <el-table-column label="日期" width="200">
         <template slot-scope="scope">
            <span>{{data[0].article_time|dateformat('YYYY-MM-DD')}}</span>
         </template>
       </el-table-column>
       <el-table-column label="地点" width="200">
         <template slot-scope="scope">
           <span>{{data[0].sort_article}}</span>
         </template>
       </el-table-column>
       <el-table-column label="游记编号" width="200">
         <template slot-scope="scope">
           <span>{{data[0].article_id}}</span>
         </template>
       </el-table-column>
       <el-table-column label="游记名称" width="500">
         <template slot-scope="scope">
           <span @click="toBlog(data[0].article_id)" style="cursor:pointer">{{data[0].article_name}}</span>
         </template>
       </el-table-column>
     </el-table>
    </el-main>
    <el-footer>
      <app-nav-footer></app-nav-footer>
    </el-footer>
  </el-container>

</template>

<script>
  import bar from '../nav-bar1'
  import footer from '../nav-footer'

  export default {
    components:{
      'app-nav-bar': bar,
      'app-nav-footer': footer,
    },
    data() {
      return {
        data:[],
      }
    },
    created(){
      this.mounted();
    },
    methods: {
      toupload: function (event) {
        alert('您即将开始书写您的游记!')
        var _this = this
        setTimeout(function () {
          _this.$router.push({path: '/user/upload'})
        }, 500)
      },
      toBlog:function(event){
        this.$router.push({path: '/read/'+event})
        console.log(event);
      },
      mounted() {
        let article = 4;
        this.$axios.get(`locate/find/${article}`).then((result) => {
          // console.log(result.data);
          this.data = result.data.data;
          console.log(this.data)
        })
      },
    },
  }
</script>

<style>
  .el-header{
    background: #2d9f80;
    padding: 0;
  }

  .el-table{
    width:60%;
    position: relative;
    left:20%;
  }
.header{
  width: 1920px;
  height: 200px;
  background: url('../../assets/img/upload_background.png') center center no-repeat;
  background-size: 1920px 200px;

}
  .hworld{
    position: absolute;
    top:20%;
    transform: translateX(-50%);
    font-size: 46px;
    color: black;

  }
  .write{
    position: relative;
    top: 80%;
    transform: translateX(-50%);
    width: 160px;
    height: 38px;
    border-radius: 4px;
  }
  .el-main{
    padding:0;
    height: 100%;
  }
  .elmain{
    overflow:hidden;
    text-align: center;

  }
</style>

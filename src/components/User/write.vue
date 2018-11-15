<template>
  <el-container style="height: 100%">
    <el-header style="height: 104px"><app-nav-bar></app-nav-bar></el-header>
    <el-main class="elmain" style="overflow:hidden">
      <div class="header">
        <span class="hworld">快来记录你的旅程吧</span>
        <el-button class="write" @click="toupload">写游记</el-button>
      </div>
      <div style="height:20px"></div>
      <!--我的游记显示-->
     <el-table :data="data1" style="overflow:hidden">
       <el-table-column label="日期" width="200" prop="article_time">
         <!--<template slot-scope="scope">-->
            <!--<span>{{data.article_time|dateformat('YYYY-MM-DD')}}</span>-->
         <!--</template>-->
       </el-table-column>
       <el-table-column label="地点" width="200" prop="sort_article">
         <!--<template slot-scope="scope">-->
           <!--<span>{{data.sort_article}}</span>-->
         <!--</template>-->
       </el-table-column>
       <el-table-column label="游记编号" width="200" prop="article_id">
         <!--<template slot-scope="scope">-->
           <!--<span>{{data.article_id}}</span>-->
         <!--</template>-->
       </el-table-column>
       <el-table-column label="游记名称" width="200" prop="article_name">
         <!--<template slot-scope="scope">-->
           <!--<span @click="toBlog(data.article_id)" style="cursor:pointer">{{data.article_name}}</span>-->
         <!--</template>-->
       </el-table-column>

     </el-table>
    </el-main>
    <el-footer>
      <app-nav-footer></app-nav-footer>
    </el-footer>
  </el-container>

</template>

<script>
  import bar from '../nav-bar'
  import footer from '../foot'
  import {mapGetters} from 'vuex'

  export default {
    components:{
      'app-nav-bar': bar,
      'app-nav-footer': footer,
    },
    data() {
      return {
        data1:[],
      }
    },
    computed: mapGetters(['UserId', 'UserName', 'UserPhone','isLogin']),
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
        let article = this.UserId;
        this.$axios.get(`locate/finduser/${article}`).then((result) => {
          this.data1=result.data.data;
          console.log(this.data1)
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

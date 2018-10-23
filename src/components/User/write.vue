<template>
  <el-container>
    <app-nav-bar></app-nav-bar>
    <el-main class="elmain">
      <div class="header">
        <span class="hworld">快来记录你的旅程吧</span>
        <el-button class="write" @click="toupload">写游记</el-button>
      </div>
      <div style="height:20px"></div>
      <div style="width:1130px;position: relative;left:20%">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            sortable
            width="180"
            :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
            :filter-method="filterHandler"
          >
          </el-table-column>
          <el-table-column
            prop="travelid"
            label="编号"
            width="100">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地点"
            :formatter="formatter">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-main>
    <el-footer>
      <app-nav-footer></app-nav-footer>
    </el-footer>
  </el-container>

</template>

<script>
  import bar from '../nav-bar'
  import footer from '../nav-footer'

  export default {
    components:{
      'app-nav-bar': bar,
      'app-nav-footer': footer
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          travelid: 't001',
          address: '上海',
        }, {
          date: '2016-05-04',
          travelid: 't002',
          address: '悉尼',
        }, {
          date: '2016-05-01',
          travelid: 't003',
          address: '印度',

        }, {
          date: '2016-05-03',
          travelid: 't004',
          address: '阿联酋',
        }]
      }
    },
    methods: {
      handleDelete(index, row) {
        alert('功能施工中，敬请期待！')
        console.log(index, row);
      },
      toupload: function (event) {
        alert('您即将开始书写您的游记!')
        var _this = this
        setTimeout(function () {
          _this.$router.push({path: '/user/upload'})
        }, 500)
      }
    },
  }
</script>

<style>
.header{
  width: 1920px;
  height: 200px;
  background: url('../../assets/img/upload_background.png') center center no-repeat;
  background-size: 1920px 200px;

}
  .hworld{
    position: absolute;
    top:20%;
    left:50%;
    transform: translateX(-50%);
    font-size: 46px;
    color: black;

  }
  .write{
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    width: 160px;
    height: 38px;
    border-radius: 4px;
  }
  .el-main{
    padding:0;
  }
  .elmain{
    overflow:hidden;
  }
</style>

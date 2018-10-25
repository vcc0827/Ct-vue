<template>
  <div class="b-img">
    <el-row :gutter="20">
      <el-col :span="6" v-for="(item,key,index) in data" :key="key" :index="index">
        <div class="grid-content bg-purple" @click="toblog(item.article_id)">
          <div
            style="display: flex;justify-content: center;align-items: center;width: 326.5px;height: 190px;overflow:hidden">
            <img class="el-img" v-bind:src=item.cover alt="">
          </div>
          <div>
            <h3 class="list">{{item.article_name}}</h3>
            <div>
              <span>出行日期：{{item.travel_time | dateformat('YYYY-MM-DD')}}</span><span style="padding-left: 30px">作者：{{item.user_name}}</span>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import travel from '../../../static/travel'

  export default {
    name: "BlogImg",
    data() {
      return {
        travel: travel,
        data: []
      }
    },
    watch: {
      "$route": "mounted",
    },
    created(){
      this.mounted();
    },
    methods: {
      toblog(j) {
        this.$router.push({path: '/read/' + j})
      },
      mounted() {
        let country = this.$route.params.id;
        this.$axios.get(`scenic/findAll/${country}`).then((result) => {
          // console.log(result.data);
          this.data = result.data.data;
        })
      }
    },
  }
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  }

  .el-col {
    border-radius: 4px;
    margin-bottom: 30px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    height: 300px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .b-img {
    width: 1366px;
    margin: 0 auto;
    margin-top: 20px;
  }

  .el-img {
    width: 100%;
    height: auto;
  }

  .list {
    width: 260px;
    display: block;
    overflow: hidden;
    word-break: keep-all;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>

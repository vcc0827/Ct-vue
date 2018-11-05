<template>
  <div>
    <el-row style="width: 700px;margin: 0 auto;">
      <textarea class="textarea" v-model="input" maxlength="300"
                placeholder="有什么想对作者说的吗？快来发表你的感言~不能超过300字哦~"></textarea>
      <div class="num_dom" style="display: block;">{{count}}/300</div>
      <el-button type="success" @click="_submit()" style="float: right;">提交</el-button>
    </el-row>
    <div v-for="item in data">
      <el-container>
        <el-aside width="200px"><span style="font-size: 18px">{{item.user_name}}：</span></el-aside>
        <el-main>{{item.content}}</el-main>
        <span style="position: relative;bottom: 0;">{{item.data | dateformat('YYYY-MM-DD')}}</span>
      </el-container>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: "comment",
    data() {
      return {
        input: '',
        data: [],
        count: 300,
        f:1
      }
    },
    computed: mapGetters(['UserId', 'UserName', 'UserPhone','isLogin']),
    created() {
      this.mounted();
    },
    watch: {
      "input": "_count",
      "f":"mounted"
    },
    methods: {
      _count() {
        this.count = 300;
        this.count = this.count - this.input.length;
      },
      _submit() {
        if(!this.isLogin){
          alert('您还未登录，请先登录！');
          this.$router.push({path:'/register/Login'});
          return true;
        }
        if (this.input === '') {
          alert('评论内容为空！');
          return true;
        }
        let _this=this;
        this.$axios.post('locate/submit', {
          article_id: _this.$route.params.id,
          user_phone: _this.UserPhone,
          content: _this.input
        }).then((res) => {
          _this.f=-_this.f;
          console.log(res);
        });
      },
      mounted() {
        let article = this.$route.params.id;
        this.$axios.get(`locate/get_comment/${article}`).then((res) => {
          this.data = res.data.data;
        })
      }
    }
  }
</script>

<style scoped>
  .textarea {
    height: 260px;
    width: 100%;
    resize: none;
    font-size: 20px;
  }

  .el-container {
    width: 1000px;
    margin: 0 auto;
    border-bottom:#cccccc solid 2px ;
  }

  .el-aside {
    border-right:#cccccc solid 2px ;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    line-height: 160px;
    text-indent: 2em;
  }
</style>

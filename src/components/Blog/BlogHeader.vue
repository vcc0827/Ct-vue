<template>
  <div class="menu">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-submenu :index="(index+1).toString()" v-for="(item,key,index) in dataset1" :key="key">
        <template slot="title">{{key}}</template>
        <el-menu-item :index="getindex(index,subindex)" :key="key1" v-for="(country,subindex,key1) in item"
                      @click="toCountry(country)"><span>{{country}}</span></el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  import world from '../../../static/country'

  export default {
    data() {
      return {
        dataset1: world,
        activeIndex: '',
        activeIndex2: '',
        data: []
      }
    },
    name: "CloudBlog",
    methods: {
      toCountry(country) {
        this.$router.push({path: '/blog/' + country});
        console.log(country)
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      getindex(i, j) {
        var a = i + 1;
        var b = j + 1;
        return a + "-" + b
      }
    }
  }
</script>

<style scoped>
  .menu {
    width: 100%;
    background: #fff;
    margin-top: 30px;
  }

  .el-menu {
    width: 352px;
    margin: 0 auto;
  }
</style>

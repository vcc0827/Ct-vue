<template>
  <el-row class="bg-head" style="height: 400px">
    <div class="bg-p">
    <p class="p">准备，出发！</p>
    <!--<el-input v-model="input" placeholder="你想去哪里？" class="input"></el-input>-->
    <el-autocomplete popper-class="my-autocomplete" class="input" v-model="state3" :fetch-suggestions="querySearch"
                     placeholder="你想去哪里？" @select="handleSelect">
      <i class="el-icon-edit el-input__icon" slot="suffix" @click="handleIconClick"></i>
      <template slot-scope="{ item }">
        <div class="name">{{ item.value }}</div>
        <span class="addr">{{ item.address }}</span>
      </template>
    </el-autocomplete>
    </div>
  </el-row>
</template>

<script>
  export default {
    name: "Go",
    data() {
      return {
        restaurants: [],
        state3: ''
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          {"value": "中国", "address": "亚洲"},
          {"value": "日本", "address": "亚洲"},
          {"value": "韩国", "address": "亚洲"},
          {"value": "英国", "address": "欧洲"},
          {"value": "法国", "address": "欧洲"},
          {"value": "德国", "address": "欧洲"},
          {"value": "巴西", "address": "美洲"},
          {"value": "美国", "address": "美洲"},
          {"value": "加拿大", "address": "美洲"},
        ];
      },
      handleSelect(item) {
        console.log(item);
      },
      handleIconClick(ev) {
        console.log(ev);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  }
</script>

<style scoped>
  .bg-head {
    background: url("../../assets/bg.jpg") no-repeat;
  }

  .bg-p{
    text-align: center;
    padding-top: 135px;
  }

  .p {
    color: white;
    font-size: 40px;
    font-weight: bolder;
    text-align: center;
  }

  .input {
    width: 500px;
    margin: 0 auto;
  }

  li {
    line-height: normal;
    padding: 7px;
  }

  .name {
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .addr {
    font-size: 12px;
    color: #b4b4b4;
  }

  .highlighted .addr {
    color: #ddd;
  }


</style>


<!--<template>-->
<!--<div class="container">-->
<!--<p class="p">准备，出发！</p>-->
<!--&lt;!&ndash;<el-input v-model="input" placeholder="你想去哪里？" class="input"></el-input>&ndash;&gt;-->
<!--<el-autocomplete-->
<!--popper-class="my-autocomplete"-->
<!--class="input"-->
<!--v-model="state3"-->
<!--:fetch-suggestions="querySearch"-->
<!--placeholder="你想去哪里？"-->
<!--@select="handleSelect">-->
<!--<i-->
<!--class="el-icon-edit el-input__icon"-->
<!--slot="suffix"-->
<!--@click="handleIconClick">-->
<!--</i>-->
<!--<template slot-scope="{ item }">-->
<!--<div class="name">{{ item.value }}</div>-->
<!--<span class="addr">{{ item.address }}</span>-->
<!--</template>-->
<!--</el-autocomplete>-->


<!--</div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--name: "Go",-->
<!--data() {-->
<!--return {-->
<!--restaurants: [],-->
<!--state3: ''-->
<!--};-->
<!--},-->
<!--methods: {-->
<!--querySearch(queryString, cb) {-->
<!--var restaurants = this.restaurants;-->
<!--var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;-->
<!--// 调用 callback 返回建议列表的数据-->
<!--cb(results);-->
<!--},-->
<!--createFilter(queryString) {-->
<!--return (restaurant) => {-->
<!--return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);-->
<!--};-->
<!--},-->
<!--loadAll() {-->
<!--return [-->
<!--{ "value": "中国", "address": "亚洲" },-->
<!--{ "value": "日本", "address": "亚洲" },-->
<!--{ "value": "韩国", "address": "亚洲" },-->
<!--{ "value": "英国", "address": "欧洲" },-->
<!--{ "value": "法国", "address": "欧洲" },-->
<!--{ "value": "德国", "address": "欧洲" },-->
<!--{ "value": "巴西", "address": "美洲" },-->
<!--{ "value": "美国", "address": "美洲" },-->
<!--{ "value": "加拿大", "address": "美洲" },-->
<!--];-->
<!--},-->
<!--handleSelect(item) {-->
<!--console.log(item);-->
<!--},-->
<!--handleIconClick(ev) {-->
<!--console.log(ev);-->
<!--}-->
<!--},-->
<!--mounted() {-->
<!--this.restaurants = this.loadAll();-->
<!--}-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.container{-->
<!--background: url("../../assets/bg.jpg") no-repeat;-->
<!--width: 1920px;-->
<!--height: 400px;-->
<!--}-->
<!--.p{-->
<!--color: white;-->
<!--font-size: 40px;-->
<!--font-weight: bolder;-->
<!--position: absolute;-->
<!--left: 500px;-->
<!--top: 100px;-->
<!--}-->
<!--.input{-->
<!--position: absolute;-->
<!--left: 400px;-->
<!--top: 250px;-->
<!--width: 500px;-->
<!--}-->
<!--li {-->
<!--line-height: normal;-->
<!--padding: 7px;-->
<!--}-->
<!--.name {-->
<!--text-overflow: ellipsis;-->
<!--overflow: hidden;-->
<!--}-->
<!--.addr {-->
<!--font-size: 12px;-->
<!--color: #b4b4b4;-->
<!--}-->

<!--.highlighted .addr {-->
<!--color: #ddd;-->
<!--}-->


<!--</style>-->

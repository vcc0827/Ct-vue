<template>
  <div class="swiper-container swiper-container-h" style="height: 800px;width: 1366px;">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in traveldata">
        <div class="swiper-container swiper-container-v">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="subitem in item">
              <el-container>
                <el-aside width="400px">
                  <div style="padding-left: 40px;text-align: left;">
                    <h2>{{subitem.title}}</h2>
                    <p>{{subitem.article}}</p>
                  </div>
                </el-aside>
                <el-main style="display: flex;justify-content: center;align-items: center;">
                  <img v-bind:src="subitem.img" alt="">
                </el-main>
              </el-container>
            </div>
          </div>
          <div class="swiper-pagination swiper-pagination-v"></div>
        </div>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination swiper-pagination-h"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import traveldata from '../../../static/travel'
  import axios from 'axios'

  export default {
    name: "read",
    data() {
      return {
        traveldata: traveldata,
        data: [],
      }
    },
    computed: {
      data1: {
        get: function () {
          return this.data[0];
        }
      }
    },
    mounted() {
      new Swiper('.swiper-container-h', {
        spaceBetween: 50,
        pagination: {
          el: '.swiper-pagination-h',
          clickable: true,
        },
      });
      new Swiper('.swiper-container-v', {
        direction: 'vertical',
        spaceBetween: 50,
        pagination: {
          el: '.swiper-pagination-v',
          clickable: true,
        },
      });
      axios.get("http://localhost:3000/scenic/find/1").then((result) => {
        // console.log(result.data)
        this.mydata = result.data.data;
        // console.log(this.mydata[0].article_content)
        let a = JSON.parse(this.mydata[0].article_content)
        this.data.push(a)
      })
    }
  }
</script>

<style scoped>
  .swiper-container {
    width: 100%;
    height: 100%;
  }

  img {
    max-width: 966px;
    max-height: 550px;
  }

  .el-container {
    max-width: 1366px;
    max-height: 600px;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-container-v {
    background: #eee;
  }

  .el-aside::-webkit-scrollbar { /*滚动条整体样式*/
    width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 4px;
  }

  .el-aside::-webkit-scrollbar-thumb { /*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.2);
  }

  .el-aside::-webkit-scrollbar-track { /*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 0;
    background: rgba(0, 0, 0, 0.1);
  }
</style>

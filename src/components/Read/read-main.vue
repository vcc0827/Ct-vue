<template>
  <div class="read-cont">
    <div v-for="(item,key,index) in data">
      <div class="PG" :id="'anchor-'+index"></div>
      <div style="height: 50px">
        <div class="d-icon"></div>
        <div class="d-text">{{key}}</div>
      </div>
      <div style="clear: both;margin-top: 20px;margin-bottom: 25px">
        <div v-for="(subitem,subkey) in item">
          <div style="margin-top: 25px;margin-bottom: 25px;">
            <h5 style="font: 22px/24px arial,sans-serif;font-weight: bold;color: #333;">
              <i class="el-icon-star-on" style="color: #3cc"></i>
              {{subitem.title}}
            </h5>
          </div>
          <div style="margin-bottom: 25px"><img :src="`http://localhost:3000/images/`+subitem.img" alt=""></div>
          <div>
            <p>{{subitem.article}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="side-catalog" style="bottom: 65px;height: 348px;position: fixed;">
      <div id="sideIndexBox" class="unselectable">
        <div id="sideIndex">
          <div class="top_circle">
            <div class="btm_circle_ring"></div>
          </div>
          <div class="btm_circle">
            <div class="btm_circle_ring"></div>
          </div>
          <div class="indexContBox">
            <div class="scroll_window">
              <div class="contBox" style="height: 110px;">
                <div class="scroll_content" style="margin-top: 0;">
                  <ul class="indexCont">
                    <li class="tit" :class="{cur_index:is}" v-for="(item,key,index) in data">
                      <a class="js_jump" href="javascript:void(0)" @click="goAnchor('#anchor-'+index)">{{key}}</a>
                      <span class="dot"></span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="scrollbar" style="position: absolute; display: none;">
                <div class="bar" style="position: absolute; top: 0;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.min.css'

  export default {
    name: "read",
    watch: {
      "$route": "mounted",
    },
    data() {
      return {
        data: [],
        is:true
      }
    },
    created() {
      this.mounted();
    },
    methods: {
      goAnchor(selector) {
        var anchor = this.$el.querySelector(selector);
        document.documentElement.scrollTop = anchor.offsetTop;
        this.is=true;
      },
      mounted() {
        let id = this.$route.params.id;
        this.$axios.get(`scenic/find/${id}`).then((result) => {
          this.mydata = result.data.data;
          this.data = JSON.parse(this.mydata[0].article_content);
          console.log(this.data)
        });
      }
    }
  }
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .read-cont {
    width: 1000px;
    margin: 0 auto;
  }

  .d-icon {
    background: url(//s.qunarzz.com/travel/travel_notes/note_8/dlg_day_style.png) no-repeat -37px -790px;
    width: 50px;
    height: 50px;
    float: left;
  }

  .PG {
    width: 100%;
    height: 60px;
    background: url(http://localhost:3000/images/PG.png) no-repeat;
    background-size: 100% auto;
  }

  .d-text {
    font-weight: bold;
    margin-left: 4px;
    height: 50px;
    line-height: 50px;
    font-size: 28px;
    color: #666;
    float: left;
  }

  p {
    text-indent: 2em;
    font-size: 18px;
  }

  div {
    display: block;
  }

  .side-catalog {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    height: 456px;
    position: fixed;
    left: 50%;
    margin-left: -630px;
    font-size: 12px;
    z-index: 300;
    padding-top: 20px;
  }

  #sideIndexBox {
    width: 190px;
    font-size: 24px;
    color: #333
  }

  #rightBtns {
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -50px;
    height: 50px;
    width: 21px;
    overflow: hidden;
    visibility: hidden;
    z-index: 20
  }

  #btnUp, #btnDown {
    display: block;
    width: 21px;
    height: 25px;
    cursor: pointer;
    background: url("//source.qunarzz.com/site/images/travel/place/2th/guide_mix.gif") no-repeat -120px 0
  }

  #btnDown {
    background-position: -120px -25px
  }

  #btnUp:hover {
    background-position: -70px 0
  }

  #btnDown:hover {
    background-position: -70px -25px
  }

  #sideIndex {
    position: relative;
    width: 100%;
    zoom: 1;
    background: url("//s.qunarzz.com/travel/travel_notes/repeat-border.jpg") repeat-y 8px 0
  }

  #sideIndex .top_circle, #sideIndex .btm_circle {
    position: absolute;
    top: 0;
    left: 3px;
    z-index: 10;
    line-height: 0;
    overflow: hidden;
    border: solid 1px #fff;
    border-radius: 50%
  }

  #sideIndex .top_circle .btm_circle_ring, #sideIndex .btm_circle .btm_circle_ring {
    width: 9px;
    height: 9px;
    border: solid 1px #2ECC40;
    border-radius: 50%;
    background-color: #fff
  }

  #sideIndex .btm_circle {
    top: auto;
    bottom: 0
  }

  #sideIndex .indexContBox {
    padding: 20px 0;
    line-height: 28px;
    zoom: 1
  }

  #sideIndex .indexContBox .contBox {
    position: relative;
    z-index: 5;
    padding-left: 20px;
    overflow: hidden
  }

  #sideIndex .indexContBox .contBox .indexCont a:hover {
    text-decoration: underline
  }

  #sideIndex .indexContBox .contBox .indexCont a {
    padding-right: 25px;
    display: block;
    height: 28px;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: bold;
    overflow: hidden;
    font-size: 15px
  }

  #sideIndex .indexContBox .contBox .indexCont a:link, #sideIndex .indexContBox .contBox .indexCont a:visited {
    color: #333
  }

  #sideIndex .indexContBox .contBox .indexCont .tit {
    font-weight: 700;
    position: relative;
    height: 28px;
    line-height: 28px;
    zoom: 1
  }

  #sideIndex .indexContBox .contBox .indexCont .tit .dot {
    position: absolute;
    top: 11px;
    left: -15px;
    font-size: 0;
    line-height: 0;
    width: 5px;
    height: 5px;
    background-color: #ccc;
    border-radius: 50%;
    border: solid 1px #fff
  }

  #sideIndex .indexContBox .contBox .indexCont .tit_b {
    position: relative;
    height: 28px;
    line-height: 28px;
    zoom: 1
  }

  #sideIndex .indexContBox .contBox .indexCont .tit_b a {
    padding-right: 25px;
    overflow: hidden;
    font-size: 12px;
    font-weight: normal;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #666
  }

  #sideIndex .indexContBox .contBox .indexCont .tit_b a:hover, #sideIndex .indexContBox .contBox .indexCont .tit_b a:active {
    text-decoration: underline
  }

  #sideIndex .indexContBox .contBox .indexCont .tit_b .dot_b {
    position: absolute;
    left: 8px;
    top: 14px;
    height: 2px;
    width: 2px;
    overflow: hidden;
    font-size: 0;
    background: url("//source.qunarzz.com/site/images/travel/place/2th/guide_mix.gif") no-repeat -100px 0
  }

  #sideIndex .indexContBox .contBox .indexCont .tit_b .icon_cur {
    position: absolute;
    visibility: hidden;
    cursor: pointer;
    top: 12px;
    left: -16px;
    width: 9px;
    height: 5px;
    font-size: 0;
    line-height: 0;
    background-color: #3cc;
    border-radius: 4px
  }

  #sideIndex .indexContBox .contBox .indexCont .cur_index .icon_cur {
    visibility: visible
  }

  #sideIndex .indexContBox .contBox .indexCont .cur_index .dot {
    position: absolute;
    cursor: pointer;
    top: 10px;
    left: -17px;
    width: 11px;
    height: 7px;
    font-size: 0;
    line-height: 0;
    background-color: #3cc;
    border-radius: 4px
  }

  .cpt_m_inner .scrollbar .bar, .txtpanel_inner .scrollbar .bar {
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100px;
    background-color: #ccc;
    cursor: pointer
  }
</style>

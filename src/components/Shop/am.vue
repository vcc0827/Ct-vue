<template>
  <el-container>
    <el-header>
      <el-breadcrumb separator-class="el-icon-arrow-right" style="height: 50px;line-height: 50px">
        <el-breadcrumb-item :to="{ path: '/' }">亚洲</el-breadcrumb-item>
        <el-breadcrumb-item>中国</el-breadcrumb-item>
        <el-breadcrumb-item>澳门</el-breadcrumb-item>
        <el-breadcrumb-item>澳门景点</el-breadcrumb-item>
        <el-breadcrumb-item>在澳门的购物中心</el-breadcrumb-item>
        <div class="div">澳门景点 - 购物</div>
      </el-breadcrumb>
    </el-header>
    <el-container>
      <el-aside width="270px">
        <el-row>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <div class="div1">购物</div>
            </div>
            <el-checkbox-group v-model="checkList">
              <el-row><el-checkbox label="礼品与特产商店（144）"></el-checkbox></el-row>
              <el-row><el-checkbox label="画廊（39）"></el-checkbox></el-row>
              <el-row><el-checkbox label="购物中心（15）"></el-checkbox></el-row>
              <el-row><el-checkbox label="跳蚤市场与街头市集（11）"></el-checkbox></el-row>
              <el-row><el-checkbox label="古董店（8）" ></el-checkbox></el-row>
              <el-row><el-checkbox label="购物游（4）" ></el-checkbox></el-row>
              <el-row><el-checkbox label="百货商场（3）" ></el-checkbox></el-row>
            </el-checkbox-group>
          </el-card>
        </el-row>
        <el-row>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <div class="div1">街区</div>
            </div>
            <el-checkbox-group v-model="checkList">
              <el-row><el-checkbox label="Central L.A（65）"></el-checkbox></el-row>
              <el-row><el-checkbox label="市中心（29）"></el-checkbox></el-row>
              <el-row><el-checkbox label="好莱坞（22）"></el-checkbox></el-row>
              <el-row><el-checkbox label="Wilshire（15）"></el-checkbox></el-row>
            </el-checkbox-group>
          </el-card>
        </el-row>
        <el-row>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <div class="div1">附近主题公园</div>
            </div>
            <el-checkbox-group v-model="checkList">
              <el-row><el-checkbox label="Universal Studios Hollywood（2）"></el-checkbox></el-row>
            </el-checkbox-group>
          </el-card>
        </el-row>
        <el-row>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <div class="div1">其他</div>
            </div>
            <el-checkbox-group v-model="checkList">
              <el-row><el-checkbox label="免费入场"></el-checkbox></el-row>
              <el-row><el-checkbox label="适合雨天"></el-checkbox></el-row>
              <el-row><el-checkbox label="适合夫妻或情侣"></el-checkbox></el-row>
              <el-row><el-checkbox label="实惠"></el-checkbox></el-row>
              <el-row><el-checkbox label="适合大团体"></el-checkbox></el-row>
              <el-row><el-checkbox label="适合儿童"></el-checkbox></el-row>
            </el-checkbox-group>
          </el-card>
        </el-row>
      </el-aside>
      <el-container>
        <el-main>
          <el-row class="er">购物中心（11）</el-row>
          <br/>
          <el-row>
            <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
              <el-card :body-style="{ padding: '0px' }" class="elcard">
               <div class="gwzx"></div>
                <el-row >澳门渔人码头</el-row>
                <el-row>
                  <el-rate
                    v-model="value5"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}">
                  </el-rate>
                </el-row>
              </el-card>
            </el-col>
            <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
              <el-card :body-style="{ padding: '0px' }" class="elcard">
                <div class="bh"></div>
                <el-row >新八佰伴百货</el-row>
                <el-row>
                  <el-rate
                    v-model="value5"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}">
                  </el-rate>
                </el-row>
              </el-card>
            </el-col>
            <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
              <el-card :body-style="{ padding: '0px' }" class="elcard">
                <div class="the"></div>
                <el-row >The Boulevard</el-row>
                <el-row>
                  <el-rate
                    v-model="value5"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}">
                  </el-rate>
                </el-row>
              </el-card>
            </el-col>
            <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
              <el-card :body-style="{ padding: '0px' }" class="elcard">
                <div class="ssh"></div>
                <el-row >时尚汇</el-row>
                <el-row>
                  <el-rate
                    v-model="value5"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}">
                  </el-rate>
                </el-row>
              </el-card>
            </el-col>
          </el-row>
          <br/>


          <el-row class="er">画廊（7）</el-row>
          <br/>
          <el-row>
            <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
              <el-card :body-style="{ padding: '0px' }" class="elcard">
                <div class="mike"></div>
                <el-row >迈克尔杰克逊画廊</el-row>
                <el-row>
                  <el-rate
                    v-model="value5"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}">
                  </el-rate>
                </el-row>
              </el-card>
            </el-col>
            <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
              <el-card :body-style="{ padding: '0px' }" class="elcard">
                <div class="xdy"></div>
                <el-row >圣若瑟修道院圣堂</el-row>
                <el-row>
                  <el-rate
                    v-model="value5"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}">
                  </el-rate>
                </el-row>
              </el-card>
            </el-col>
            <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
              <el-card :body-style="{ padding: '0px' }" class="elcard">
                <div class="ssl"></div>
                <el-row >澳门时尚廊</el-row>
                <el-row>
                  <el-rate
                    v-model="value5"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}">
                  </el-rate>
                </el-row>
              </el-card>
            </el-col>
            <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
              <el-card :body-style="{ padding: '0px' }" class="elcard">
                <div class="mz"></div>
                <el-row >民政总署画廊</el-row>
                <el-row>
                  <el-rate
                    v-model="value5"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}">
                  </el-rate>
                </el-row>
              </el-card>
            </el-col>
          </el-row>
          <br/>
          <el-row class="er">排序：排名</el-row>
          <br/>

          <el-row>
          <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }" class="elcard1">
              <div class="xhtd"></div>
              <el-row >新濠天地</el-row>
              <el-row>澳门排名第一的购物</el-row>
              <el-row>购物中心</el-row>
            </el-card>
          </el-col>

            <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0"  class="elcol1">
              <el-card :body-style="{ padding: '0px' }" class="elcard1">
                <div class="dyh"></div>
                <el-row >大运河购物中心</el-row>
                <el-row>澳门排名第二的购物</el-row>
                <el-row>礼品与特产商店</el-row>
              </el-card>
            </el-col>
          </el-row>
          <br/>
          <el-row>
            <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
              <el-card :body-style="{ padding: '0px' }" class="elcard1">
                <div class="amyh"></div>
                <el-row >澳门银河</el-row>
                <el-row>澳门排名第三的购物</el-row>
                <el-row>购物中心</el-row>
              </el-card>
            </el-col>

            <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0"  class="elcol1">
              <el-card :body-style="{ padding: '0px' }" class="elcard1">
                <div class="dsbj"></div>
                <el-row >大三巴街</el-row>
                <el-row>澳门排名第四的购物</el-row>
                <el-row>礼品与特产商店</el-row>
              </el-card>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
              <el-card :body-style="{ padding: '0px' }" class="elcard1">
                <div class="gyj"></div>
                <el-row >官也街</el-row>
                <el-row>澳门排名第五的购物</el-row>
                <el-row>礼品与特产商店</el-row>
              </el-card>
            </el-col>

            <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0"  class="elcol1">
              <el-card :body-style="{ padding: '0px' }" class="elcard1">
                <div class="xdy"></div>
                <el-row >圣若瑟修道院圣堂</el-row>
                <el-row>澳门排名第六的购物</el-row>
                <el-row>画廊，历史博物馆</el-row>
              </el-card>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
              <el-card :body-style="{ padding: '0px' }" class="elcard1">
                <div class="blr"></div>
                <el-row >巴黎人购物中心</el-row>
                <el-row>澳门排名第七的购物</el-row>
                <el-row>购物中心</el-row>
              </el-card>
            </el-col>

            <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0"  class="elcol1">
              <el-card :body-style="{ padding: '0px' }" class="elcard1">
                <div class="mke"></div>
                <el-row >迈克尔杰克逊画廊</el-row>
                <el-row>澳门排名第八的购物</el-row>
                <el-row>画廊</el-row>
              </el-card>
            </el-col>
          </el-row>


        </el-main>
        <el-footer></el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "HK",
    data() {
      return {
        currentDate: new Date(),
        value5:3.5
      };
    }
  }
</script>

<style scoped>
  .dyh{
    background: url("../../../static/dyh.jpg") no-repeat;
    width: 252px;
    height: 234px;
  }
  .amyh{
    background: url("../../../static/amyh.jpg") no-repeat;
    width: 252px;
    height: 234px;
  }
  .dsbj{
    background: url("../../../static/dsbj.jpg") no-repeat;
    width: 252px;
    height: 234px;
  }
  .gyj{
    background: url("../../../static/gyj.jpg") no-repeat;
    width: 252px;
    height: 234px;
  }
  .xdy{
    background: url("../../../static/xdy.jpg") no-repeat;
    width: 252px;
    height: 234px;
  }
  .blr{
    background: url("../../../static/blr.jpg") no-repeat;
    width: 252px;
    height: 234px;
  }
  .mke{
    background: url("../../../static/mike.jpg") no-repeat;
    width: 252px;
    height: 234px;
  }

  .hlw{
    background: url("../../../static/hlwhq.jpg") no-repeat  -100px,-50px;
    width: 225px;
    height: 225px;
  }
  .elcard{
       width: 232px;
     }
  .elcard1{
    width: 252px;

  }
.elcol1{
  margin-left: 420px;
}
  .el-col{
    margin-right: -150px;
  }
  .gwzx{
    background: url("../../../static/yrmt.jpg") no-repeat;
    width: 232px;
    height: 140px;
  }
  .bh{
    background: url("../../../static/bbbbh.jpg") no-repeat;
    width: 232px;
    height: 140px;
  }
  .the{
    background: url("../../../static/the.jpg") no-repeat;
    width: 232px;
    height: 140px;
  }
  .mike{
    background: url("../../../static/mike.jpg") no-repeat;
    width: 232px;
    height: 140px;
  }
  .xdy{
    background: url("../../../static/xdy.jpg") no-repeat;
    width: 232px;
    height: 140px;
  }
  .mz {
    background: url("../../../static/mz.jpg") no-repeat;
    width: 232px;
    height: 140px;
  }
  .xhtd {
    background: url("../../../static/xhtd.jpg") no-repeat;
    width: 252px;
    height: 234px;
  }
  .ssl{
    background: url("../../../static/ssl.jpg") no-repeat;
    width: 232px;
    height: 140px;
  }
  .ssh{
    background: url("../../../static/ssh.jpg") no-repeat;
    width: 232px;
    height: 140px;
  }
  .hlw{
    background: url("../../../static/hlwhq.jpg") no-repeat  -100px,-50px;
    width: 225px;
    height: 225px;
  }
  .xtde{
    background: url("../../../static/xtde.jpg") no-repeat  -100px,-50px;
    width: 225px;
    height: 225px;
  }
  .kmla{
    background: url("../../../static/kmla.jpg") no-repeat -100px,-50px;
    width: 225px;
    height: 225px;
  }
  .atls{
    background: url("../../../static/atls.jpg") no-repeat -100px -50px;
    width: 225px;
    height: 225px;
  }
  .mxss{
    background: url("../../../static/mxss.jpg") no-repeat -25px -15px;
    width: 225px;
    height: 225px;
  }
  .p{
    padding-left: 235px;
    text-align: left;
  }
  .divv{
    width: 1024px;
  }
  .h3{
    padding-left: 240px;
  }
  .bfl{
    background: url("../../../static/bfl.jpg") no-repeat -100px -50px;
    width: 225px;
    height: 225px;
  }
  .wz{
    width: 225px;
    height: 225px;
    margin-left: -350px;
  }
  .el-row {
    margin-bottom: 20px;
  }

  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-header {
    background-color: white;
    color: #333;
    text-align: center;
    height: 60px;

  }
  .shop{
    background: url("../../../static/lsjgw.jpg");
    width: 1024px;
    height: 524px;
  }
  .sho{
    width: 1024px;
    text-align: left;
  }

  .el-footer {
    background-color: white;
    color: #333;
    text-align: center;
    height: 60px;

  }

  .el-aside {
    background-color: white;
    color: #333;
    /*text-align: center;*/
    height: 2560px;
    border-top: 1px solid rgba(0,0,60,0.1);
    border-right:1px solid rgba(0,0,60,0.1); ;

  }

  .el-main {
    /*background-color: #E9EEF3;*/
    background-color: white;
    color: #333;
    text-align: center;
    height: 2500px;
    border-top: 1px solid rgba(0,0,60,0.1);

  }
  .div{
    font-size: 30px;
    font-weight: 400;

  }
  .div1{
    font-size: 20px;
    font-weight: 400;

  }
  .border{
    border-bottom: 1px solid rgba(0,0,5,0.2);
  }
  .er{
    text-align: left;
    font-size: 20px;
    font-weight:bolder;
  }

</style>

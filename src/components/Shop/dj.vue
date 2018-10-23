<template>
  <el-container>
    <el-header>
      <el-breadcrumb separator-class="el-icon-arrow-right" style="height: 50px;line-height: 50px">
        <el-breadcrumb-item :to="{ path: '/' }">亚洲</el-breadcrumb-item>
        <el-breadcrumb-item>日本</el-breadcrumb-item>
        <el-breadcrumb-item>关东</el-breadcrumb-item>
        <el-breadcrumb-item>东京都</el-breadcrumb-item>
        <el-breadcrumb-item>东京</el-breadcrumb-item>
        <el-breadcrumb-item>东京景点</el-breadcrumb-item>
        <el-breadcrumb-item>在东京的购物中心</el-breadcrumb-item>
        <div class="div">东京景点 - 购物</div>
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
          <el-row class=" shop">

            <br/>
            <br/>
          </el-row>
          <br/>
          <el-row class="er">东京购物</el-row>
          <el-row class="sho">
            东京是一座由几个区组成的购物天堂，每个区的商店特点和风格都各不相同。
            从素净的复古服饰到高级定制服饰，从 T 恤到和服，从街头市场到高端百货商店，东京都应有尽有。东京的购物胜地如下。
          </el-row>
          <br/>
          <el-row class="er">东京热门购物去处</el-row>
          <br/>
          <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark bfl">

              <div class="divv">
                <h3 class="h3">比弗利购物中心</h3>
                <p class="p">这座八层购物中心现正进行大规模改建，以增加自然采光，并添设美食餐厅，
                  其中包括一家由厨师Michael Mina经营的餐厅。该中心还囊括了Prada、芬达=迪等各大奢侈品品牌，
                  并开设有布鲁明戴尔百货洛杉矶旗舰店</p>
              </div>
            </div></el-col>
          </el-row>
          <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark atls">
              <div class="divv">
                <h3 class="h3">棕榈泉奥特莱斯</h3>
                <p class="p">该购物中心有Jimmy Choo、Prada、DKNY等80家奢侈品品牌折扣店。洁净的地面，
                  美味的小吃摊，而且毗邻棕榈泉和约书亚树国家公园，无不令这里成为一个十分有趣的旅行站点。</p>
              </div>
            </div></el-col>
          </el-row>
          <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark mxss">
              <div class="divv">
                <h3 class="h3">梅西商厦</h3>
                <p class="p">梅西百货的洛杉矶旗舰店坐落在繁华熙攘的市中心，占地26万坪，翻修后焕然一新，
                  您想要的服装、鞋履、居家和化妆品，在这里都能找到。</p>
              </div>
            </div></el-col>
          </el-row>
          <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark kmla">
              <div class="divv">
                <h3 class="h3">卡马里奥名牌折扣中心</h3>
                <p class="p">如果您想以十分优惠的折扣价，购买汤丽柏琦、Kate Spade、蔻驰等设计品牌产品，
                  不妨驱车前往阳光灿烂的卡马里奥，您一定会不虚此行。这里除了有160家零售店外，还有许多小吃摊，
                  您大可边逛边吃，补充体力。</p>
              </div>
            </div></el-col>
          </el-row>
          <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark xtde">
              <div class="divv">
                <h3 class="h3">西特德尔奥特莱斯</h3>
                <p class="p">这家奥特莱斯购物中心看上去像一座城堡，正好位于去迪士尼乐园的路上。该购物中心服务
                  周到，并设有一间酒店、16个美食摊点，以及多家品牌店，其中包括BCBG、阿迪达斯和Gap。</p>
              </div>
            </div></el-col>
          </el-row>
          <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark hlw">
              <div class="divv">
                <h3 class="h3">好莱坞环球影城步行街</h3>
                <p class="p">这家奥特莱斯购物中心看上去像一座城堡，正好位于去迪士尼乐园的路上。该购物中心服务 周到，
                  并设有一间酒店、16个美食摊点，以及多家品牌店，其中包括BCBG、阿迪达斯和Gap。</p>
              </div>
            </div></el-col>
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
      };
    }
  }
</script>

<style scoped>
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
    background: url("../../../static/gwtt.jpg");
    width: 1024px;
    height: 550px;
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

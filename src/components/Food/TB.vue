<template>
  <el-container>
    <el-header>
      <el-breadcrumb separator-class="el-icon-arrow-right" style="height: 50px;line-height: 50px">
        <el-breadcrumb-item :to="{ path: '/' }">亚洲</el-breadcrumb-item>
        <el-breadcrumb-item>中国</el-breadcrumb-item>
        <el-breadcrumb-item>台湾</el-breadcrumb-item>
        <el-breadcrumb-item>台北市</el-breadcrumb-item>
        <el-breadcrumb-item>台北市美食</el-breadcrumb-item>
        <div class="div">台北美食 Taipei</div>
      </el-breadcrumb>


    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-row>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <div class="div1">类型</div>
            </div>
            <el-checkbox-group v-model="checkList">
              <el-row><el-checkbox label="餐厅"></el-checkbox></el-row>
              <el-row><el-checkbox label="甜点"></el-checkbox></el-row>
              <el-row><el-checkbox label="茶点"></el-checkbox></el-row>
              <el-row><el-checkbox label="面包"></el-checkbox></el-row>
              <el-row><el-checkbox label="酒吧" ></el-checkbox></el-row>
            </el-checkbox-group>
          </el-card>


        </el-row>
        <el-row>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <div class="div1">可预定</div>
            </div>
            <el-checkbox-group v-model="checkList">
              <el-row><el-checkbox label="在线订位"></el-checkbox></el-row>
            </el-checkbox-group>
          </el-card>


        </el-row>
        <el-row>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <div class="div1">菜系及菜肴</div>
            </div>
            <el-checkbox-group v-model="checkList">
              <el-row><el-checkbox label="中餐"></el-checkbox></el-row>
              <el-row><el-checkbox label="亚洲料理"></el-checkbox></el-row>
              <el-row><el-checkbox label="日式料理"></el-checkbox></el-row>
              <el-row><el-checkbox label="面包"></el-checkbox></el-row>
              <el-row><el-checkbox label="酒吧" ></el-checkbox></el-row>
            </el-checkbox-group>
          </el-card>


        </el-row>
        <el-row>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <div class="div1">就餐要求</div>
            </div>
            <el-checkbox-group v-model="checkList">
              <el-row><el-checkbox label="适合素食主义者"></el-checkbox></el-row>
              <el-row><el-checkbox label="适合严格素食者"></el-checkbox></el-row>
              <el-row><el-checkbox label="提供无麸质美食"></el-checkbox></el-row>
              <el-row><el-checkbox label="清真菜"></el-checkbox></el-row>
              <el-row><el-checkbox label="犹太洁食" ></el-checkbox></el-row>
            </el-checkbox-group>
          </el-card>


        </el-row>
        <el-row>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <div class="div1">餐时</div>
            </div>
            <el-checkbox-group v-model="checkList">
              <el-row><el-checkbox label="早餐"></el-checkbox></el-row>
              <el-row><el-checkbox label="早午餐"></el-checkbox></el-row>
              <el-row><el-checkbox label="午餐"></el-checkbox></el-row>
              <el-row><el-checkbox label="晚餐"></el-checkbox></el-row>
            </el-checkbox-group>
          </el-card>


        </el-row>
        <el-row>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <div class="div1">价格</div>
            </div>
            <el-checkbox-group v-model="checkList">
              <el-row><el-checkbox label="平价美食"></el-checkbox></el-row>
              <el-row><el-checkbox label="中等价位"></el-checkbox></el-row>
              <el-row><el-checkbox label="高档餐饮"></el-checkbox></el-row>
            </el-checkbox-group>
          </el-card>
        </el-row>
        <el-row>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <div class="div1">餐厅特点</div>
            </div>
            <el-checkbox-group v-model="checkList">
              <el-row><el-checkbox label="免费wifi"></el-checkbox></el-row>
              <el-row><el-checkbox label="可供停车"></el-checkbox></el-row>
              <el-row><el-checkbox label="外带"></el-checkbox></el-row>
              <el-row><el-checkbox label="自助餐"></el-checkbox></el-row>
            </el-checkbox-group>
          </el-card>


        </el-row>
        <el-row>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <div class="div1">就餐氛围</div>
            </div>
            <el-checkbox-group v-model="checkList">
              <el-row><el-checkbox label="儿童"></el-checkbox></el-row>
              <el-row><el-checkbox label="商务会议"></el-checkbox></el-row>
              <el-row><el-checkbox label="团体用餐"></el-checkbox></el-row>
              <el-row><el-checkbox label="自助餐"></el-checkbox></el-row>
            </el-checkbox-group>
          </el-card>


        </el-row>
      </el-aside>
      <el-container>
        <el-main>
          <el-row class="er">按菜系浏览台北市
            <br/>
            <br/>
          </el-row>
          <el-row>
            <el-row :gutter="12">
              <el-col :span="5">
                <el-card shadow="hover" class="card">
                  <div class="cxll">日式料理(949)</div>
                </el-card>
              </el-col>
              <el-col :span="5">
                <el-card shadow="hover" class="card1">
                  <div class="zc">中餐(2021)</div>
                </el-card>
              </el-col>
              <el-col :span="5">
                <el-card shadow="hover" class="card2">
                  <div class="zc">咖啡馆(350)</div>

                </el-card>
              </el-col>
              <el-col :span="5">
                <el-card shadow="hover" class="card3">
                  <div class="zc">牛排馆(2021)</div>
                </el-card>
              </el-col>
            </el-row>
            <br/>

            <el-row :gutter="12">
              <el-col :span="5">
                <el-card shadow="hover" class="car">
                  <div class="hx">海鲜(949)</div>
                </el-card>
              </el-col>
              <el-col :span="5">
                <el-card shadow="hover" class="car1">
                  <div class="ydc">印度菜(2021)</div>
                </el-card>
              </el-col>
              <el-col :span="5">
                <el-card shadow="hover" class="car2">
                  <div class="ydc">意餐(350)</div>

                </el-card>
              </el-col>
              <el-col :span="5">
                <el-card shadow="hover" class="car3">
                  <div class="ydc">寿司(2021)</div>
                </el-card>
              </el-col>
              <br/>
              <br/>
            </el-row>
          </el-row>
          <br/>
          <br/>
          <el-row class="er">高档餐饮
            <br/>
            <br/>
          </el-row>
          <el-row>


            <el-row>
              <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0" class="gdc">
                <el-card :body-style="{ padding: '0px' }">
                  <div class="image"></div>
                  <div style="padding: 14px;">
                    <span>吉地士</span>
                    <div class="bottom clearfix">
                      <!--<time class="time">{{ currentDate }}</time>-->
                      <!--<el-button type="text" class="button">操作按钮</el-button>-->


                      <el-rate
                        v-model="value5"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}">
                      </el-rate>
                      <br/>
                      <span>￥￥，法餐，欧洲</span>
                    </div>
                  </div>
                </el-card>
              </el-col>


              <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0" class="gdcy1">
                <el-card :body-style="{ padding: '0px' }">
                  <div class="image1"></div>
                  <div style="padding: 14px;">
                    <span>Gough's on Gough</span>
                    <div class="bottom clearfix">
                      <el-rate
                        v-model="value4"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}">
                      </el-rate>
                      <br/>
                      <span>￥￥￥，欧洲，英国菜</span>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0" class="gdcy1">
                <el-card :body-style="{ padding: '0px' }">
                  <div class="image2"></div>
                  <div style="padding: 14px;">
                    <span>文华厅</span>
                    <div class="bottom clearfix">
                      <el-rate
                        v-model="value3"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}">
                      </el-rate>
                      <br/>
                      <span>￥￥￥￥，中餐，亚洲料理</span>

                    </div>
                  </div>
                </el-card>
              </el-col>




              <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0" class="gdcy1">
                <el-card :body-style="{ padding: '0px' }">
                  <div class="image3"></div>
                  <div style="padding: 14px;">
                    <span>Cafe Gray</span>
                    <div class="bottom clearfix">
                      <el-rate
                        v-model="value2"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}">
                      </el-rate>
                      <br/>
                      <span>￥￥￥￥，各国料理，欧洲</span>

                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>

          </el-row>
          <br/>
          <br/>
          <el-row class="er">当地美食
            <br/>
            <br/>
          </el-row>
          <el-row>


            <el-row>
              <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0" class="gdc">
                <el-card :body-style="{ padding: '0px' }">
                  <div class="img1"></div>
                  <div style="padding: 14px;">
                    <span>一点心</span>
                    <div class="bottom clearfix">
                      <!--<time class="time">{{ currentDate }}</time>-->
                      <!--<el-button type="text" class="button">操作按钮</el-button>-->


                      <el-rate
                        v-model="value5"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}">
                      </el-rate>
                      <br/>
                      <span>¥, 中餐</span>
                    </div>
                  </div>
                </el-card>
              </el-col>


              <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0" class="gdcy1">
                <el-card :body-style="{ padding: '0px' }">
                  <div class="img2"></div>
                  <div style="padding: 14px;">
                    <span>欣图轩（香港洲际酒店）</span>
                    <div class="bottom clearfix">
                      <el-rate
                        v-model="value4"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}">
                      </el-rate>
                      <br/>
                      <span>¥¥¥¥, 中餐, 亚洲料理</span>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0" class="gdcy1">
                <el-card :body-style="{ padding: '0px' }">
                  <div class="img3"></div>
                  <div style="padding: 14px;">
                    <span>China  Club</span>
                    <div class="bottom clearfix">
                      <el-rate
                        v-model="value3"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}">
                      </el-rate>
                      <br/>
                      <span>¥¥¥¥, 中餐, 亚洲料理</span>

                    </div>
                  </div>
                </el-card>
              </el-col>




              <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0" class="gdcy1">
                <el-card :body-style="{ padding: '0px' }">
                  <div class="img4"></div>
                  <div style="padding: 14px;">
                    <span>满福楼</span>
                    <div class="bottom clearfix">
                      <el-rate
                        v-model="value2"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}">
                      </el-rate>
                      <br/>
                      <span>¥¥¥¥, 中餐, 亚洲料理</span>

                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>

          </el-row>
          <br/>
          <br/>

          <el-row class="er">中等价位
            <br/>
            <br/>
          </el-row>
          <el-row>


            <el-row>
              <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0" class="gdc">
                <el-card :body-style="{ padding: '0px' }">
                  <div class="imag1"></div>
                  <div style="padding: 14px;">
                    <span>Scarlett Cafe & Wine Bar</span>
                    <div class="bottom clearfix">
                      <!--<time class="time">{{ currentDate }}</time>-->
                      <!--<el-button type="text" class="button">操作按钮</el-button>-->


                      <el-rate
                        v-model="value5"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}">
                      </el-rate>
                      <br/>
                      <span>¥¥ - ¥¥¥, 法餐, 酒吧餐, 欧洲</span>
                    </div>
                  </div>
                </el-card>
              </el-col>


              <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0" class="gdcy1">
                <el-card :body-style="{ padding: '0px' }">
                  <div class="imag2"></div>
                  <div style="padding: 14px;">
                    <span>La Brata</span>
                    <div class="bottom clearfix">
                      <el-rate
                        v-model="value4"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}">
                      </el-rate>
                      <br/>
                      <span>¥¥ - ¥¥¥, 意餐, 地中海, 欧洲</span>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0" class="gdcy1">
                <el-card :body-style="{ padding: '0px' }">
                  <div class="imag3"></div>
                  <div style="padding: 14px;">
                    <span>Bistecca Italian Steak House</span>
                    <div class="bottom clearfix">
                      <el-rate
                        v-model="value3"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}">
                      </el-rate>
                      <br/>
                      <span>¥¥ - ¥¥¥, 意餐, 牛排馆</span>

                    </div>
                  </div>
                </el-card>
              </el-col>




              <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0" class="gdcy1">
                <el-card :body-style="{ padding: '0px' }">
                  <div class="imag4"></div>
                  <div style="padding: 14px;">
                    <span>Capo</span>
                    <div class="bottom clearfix">
                      <el-rate
                        v-model="value2"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}">
                      </el-rate>
                      <br/>
                      <span>¥¥ - ¥¥¥, 意餐, 披萨, 地中海</span>

                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>

          </el-row>


          <br/>
          <br/>

          <el-row class="er">平价美食
            <br/>
            <br/>
          </el-row>
          <el-row>


            <el-row>
              <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0" class="gdc">
                <el-card :body-style="{ padding: '0px' }">
                  <div class="ima1"></div>
                  <div style="padding: 14px;">
                    <span>Scarlett Cafe & Wine Bar</span>
                    <div class="bottom clearfix">
                      <!--<time class="time">{{ currentDate }}</time>-->
                      <!--<el-button type="text" class="button">操作按钮</el-button>-->


                      <el-rate
                        v-model="value5"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}">
                      </el-rate>
                      <br/>
                      <span>¥¥ - ¥¥¥, 法餐, 酒吧餐, 欧洲</span>
                    </div>
                  </div>
                </el-card>
              </el-col>


              <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0" class="gdcy1">
                <el-card :body-style="{ padding: '0px' }">
                  <div class="ima2"></div>
                  <div style="padding: 14px;">
                    <span>La Brata</span>
                    <div class="bottom clearfix">
                      <el-rate
                        v-model="value4"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}">
                      </el-rate>
                      <br/>
                      <span>¥¥ - ¥¥¥, 意餐, 地中海, 欧洲</span>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0" class="gdcy1">
                <el-card :body-style="{ padding: '0px' }">
                  <div class="ima3"></div>
                  <div style="padding: 14px;">
                    <span>Bistecca Italian Steak House</span>
                    <div class="bottom clearfix">
                      <el-rate
                        v-model="value3"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}">
                      </el-rate>
                      <br/>
                      <span>¥¥ - ¥¥¥, 意餐, 牛排馆</span>

                    </div>
                  </div>
                </el-card>
              </el-col>




              <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0" class="gdcy1">
                <el-card :body-style="{ padding: '0px' }">
                  <div class="ima4"></div>
                  <div style="padding: 14px;">
                    <span>Capo</span>
                    <div class="bottom clearfix">
                      <el-rate
                        v-model="value2"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}">
                      </el-rate>
                      <br/>
                      <span>¥¥ - ¥¥¥, 意餐, 披萨, 地中海</span>

                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>

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
        value5: 3.7,
        value4:4.8,
        value3:3.2,
        value2:4.5

      };
    }
  }
</script>

<style scoped>
  .el-header {
    background-color: white;
    color: #333;
    text-align: center;
    height: 60px;

  }

  .el-footer {
    /*background-color: #B3C0D1;*/
    background-color: white;
    color: #333;
    text-align: center;
    height: 60px;

  }

  .el-aside {
    background-color: white;
    color: #333;
    height: 1860px;
    border-top: 1px solid rgba(0,0,60,0.1);
    border-right:1px solid rgba(0,0,60,0.1); ;

  }

  .el-main {
    /*background-color: #E9EEF3;*/
    background-color: white;
    color: #333;
    text-align: center;
    height: 1800px;
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
  .card{
    width: 260px;
    height: 102px;
    background: url("../../assets/rsll.jpg") no-repeat 10px -110px;
  }
  .card1{
    width: 260px;
    height: 102px;
    background: url("../../assets/zc.jpg") no-repeat 10px -110px;
  }
  .card2{
    width: 260px;
    height: 102px;
    background: url("../../assets/kf.jpg") no-repeat 10px -110px;
  }
  .card3{
    width: 260px;
    height: 102px;
    background: url("../../assets/npg.jpg") no-repeat 10px -110px;
  }




  .car{
    width: 260px;
    height: 102px;
    background: url("../../assets/hx.jpg") no-repeat 10px -110px;
  }
  .car1{
    width: 260px;
    height: 102px;
    background: url("../../assets/ydc.jpg") no-repeat 10px -110px;
  }
  .car2{
    width: 260px;
    height: 102px;
    background: url("../../assets/yc.jpg") no-repeat 10px -110px;
  }
  .car3{
    width: 260px;
    height: 102px;
    background: url("../../assets/ss.jpg") no-repeat 10px -110px;
  }
  .cxll{
    color: white;
    width: 246px;
    height: 50px;
    line-height: 50px;
    background: rgba(0,0,10,0.3);
    position: absolute;
    left: 18px;
    top: 52px;
    transition: top 0.3s ease-out 0s;
  }
  .cxll:hover{
    top: 30px;

  }
  .zc{
    color: white;
    width: 239px;
    height: 50px;
    line-height: 50px;
    background: rgba(0,0,10,0.3);
    transition: top 0.3s ease-out 0s;
    position: absolute;
    top: 50px;
  }
  .zc:hover{
    top: 30px;
  }

  .hx{
    color: white;
    width: 246px;
    height: 50px;
    line-height: 50px;
    background: rgba(0,0,10,0.3);
    position: absolute;
    left: 18px;
    top: 52px;
    transition: top 0.3s ease-out 0s;
  }
  .hx:hover{
    top: 30px;

  }
  .ydc{
    color: white;
    width: 239px;
    height: 50px;
    line-height: 50px;
    background: rgba(0,0,10,0.3);
    transition: top 0.3s ease-out 0s;
    position: absolute;
    top: 50px;
  }
  .ydc:hover{
    top: 30px;
  }



  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }
  .image {
    width: 100%;
    display: block;
    background: url("../../../static/jds.jpg");
    width: 239px;
    height: 150px;
  }

  .image1 {
    width: 100%;
    display: block;
    background: url("../../../static/jog.jpg");
    width: 239px;
    height: 150px;
  }

  .img1{
    width: 100%;
    display: block;
    background: url("../../../static/ydx.jpg");
    width: 239px;
    height: 150px;
  }
  .img2{
    width: 100%;
    display: block;
    background: url("../../../static/xtx.jpg");
    width: 239px;
    height: 150px;
  }
  .img3{
    width: 100%;
    display: block;
    background: url("../../../static/club.jpg");
    width: 239px;
    height: 150px;
  }
  .img4{
    width: 100%;
    display: block;
    background: url("../../../static/mfl.jpg");
    width: 239px;
    height: 150px;
  }
  .image2 {
    width: 100%;
    display: block;
    background: url("../../../static/wht.jpg");
    width: 239px;
    height: 150px;
  }
  .image3 {
    width: 100%;
    display: block;
    background: url("../../../static/cg.jpg");
    width: 239px;
    height: 150px;
  }

  .imag1 {
    width: 100%;
    display: block;
    background: url("../../../static/scwb.jpg");
    width: 239px;
    height: 150px;
  }
  .imag2 {
    width: 100%;
    display: block;
    background: url("../../../static/lb.jpg");
    width: 239px;
    height: 150px;
  }
  .imag3 {
    width: 100%;
    display: block;
    background: url("../../../static/blsh.jpg");
    width: 239px;
    height: 150px;
  }
  .imag4 {
    width: 100%;
    display: block;
    background: url("../../../static/capo.jpg");
    width: 239px;
    height: 150px;
  }

  .ima1 {
    width: 100%;
    display: block;
    background: url("../../../static/mnr.jpg");
    width: 239px;
    height: 150px;
  }
  .ima4 {
    width: 100%;
    display: block;
    background: url("../../../static/ydx.jpg");
    width: 239px;
    height: 150px;
  }
  .ima2 {
    width: 100%;
    display: block;
    background: url("../../../static/ysl.jpg");
    width: 239px;
    height: 150px;
  }
  .ima3 {
    width: 100%;
    display: block;
    background: url("../../../static/dd968.jpg");
    width: 239px;
    height: 150px;
  }
  .gdcy1{
    width: 239px;
    margin-right: -35px;
    margin-left: 70px;
  }

  .gdc{
    width: 239px;
    margin-right: -35px;
    /*margin-left: 70px;*/
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>

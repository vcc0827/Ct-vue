<template>
  <div class="nav-footer"style="bottom:0;">
    <div class="wave-box">
      <div class="marquee-box marquee-up" id="marquee-box">
        <div class="marquee">
          <div class="wave-list-box" id="wave-list-box1">
            <ul>
              <li><img height="60" alt="波浪" src="../assets/wave_01.png"></li>
            </ul>
          </div>
          <div class="wave-list-box" id="wave-list-box2">
            <ul>
              <li><img height="60" alt="波浪" src="../assets/wave_02.png"></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="marquee-box" id="marquee-box3">
        <div class="marquee">
          <div class="wave-list-box" id="wave-list-box4">
            <ul>
              <li><img height="60" alt="波浪" src="../assets/wave_01.png"></li>
            </ul>
          </div>
          <div class="wave-list-box" id="wave-list-box5">
            <ul>
              <li><img height="60" alt="波浪" src="../assets/wave_01.png"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--<div class="footer">-->
      <!--<div class="auto clearfix">-->
        <!--&lt;!&ndash; footer主要&ndash;&gt;-->
        <!--<div class="five-superiority">-->
          <!--<ul class="five-superiority-list clearfix">-->
            <!--<li class="compensate_ico">-->
              <!--<a href="#compensate">-->
                <!--<span class="superiority-icon"></span>-->
                <!--<span>专业旅游顾问</span>-->
              <!--</a>-->
            <!--</li>-->
            <!--<li class="retreat_ico">-->
              <!--<a href="#refund">-->
                <!--<span class="superiority-icon"></span>-->
                <!--<span>高铁飞机查询</span>-->
              <!--</a>-->
            <!--</li>-->
            <!--<li class="technology_ico">-->
              <!--<a class="superiority-text" href="#afterService">-->
                <!--<span class="superiority-icon"></span>-->
                <!--<span>7x24小时住宿查询</span>-->
              <!--</a>-->
            <!--</li>-->
            <!--<li class="prepare_ico">-->
              <!--<a href="#ico">-->
                <!--<span class="superiority-icon"></span>-->
                <!--<span>0元定制旅程</span>-->
              <!--</a>-->
            <!--</li>-->
            <!--<li class="service_ico">-->
              <!--<a href="#secret">-->
                <!--<span class="superiority-icon"></span>-->
                <!--<span>1V1专席秘书</span>-->
              <!--</a>-->
            <!--</li>-->
          <!--</ul>-->
        <!--</div>-->
        <!--<div class="footer-floor1">-->
          <!--<div class="footer-list">-->
            <!--<ul>-->
              <!--<li class="flist-title">产品与服务</li>-->
              <!--<li><a href="#"><strong>弹性云服务器</strong></a></li>-->
              <!--<li><a href="#"><strong>服务器托管</strong></a></li>-->
              <!--<li><a href="#"><strong>云虚拟主机</strong></a></li>-->
              <!--<li><a href="#"><strong>某公司管家</strong></a></li>-->
              <!--<li><a href="#"><strong>某公司监控</strong></a></li>-->
            <!--</ul>-->
            <!--<ul>-->
              <!--<li class="flist-title">云解决方案</li>-->
              <!--<li><a href="#">金融解决方案</a></li>-->
              <!--<li><a href="#">电商解决方案</a></li>-->
              <!--<li><a href="#">移动解决方案</a></li>-->
              <!--<li><a href="#">游戏解决方案</a></li>-->
              <!--<li><a href="#">网站解决方案</a></li>-->
            <!--</ul>-->
            <!--<ul>-->
              <!--<li class="flist-title">技术与支持</li>-->
              <!--<li><a href="#" target="user/">工单系统</a></li>-->
              <!--&lt;!&ndash;<li><a href="http://icp.niaoyun.com/">备案中心</a></li>&ndash;&gt;-->
              <!--<li><a href="#">意见反馈</a></li>-->
              <!--<li><a href="">会员服务</a></li>-->
              <!--<li><a href="#">IDC公司</a></li>-->
              <!--<li><a href="#">帮助中心</a></li>-->
            <!--</ul>-->
            <!--<ul class="flist-4">-->
              <!--<li class="flist-title">关于公司</li>-->
              <!--<li><a href="#">公司简介</a></li>-->
              <!--<li><a href="#">新闻动态</a></li>-->
              <!--<li><a href="#">加入我们</a></li>-->
              <!--<li><a href="#">服务协议</a></li>-->
              <!--<li><a href="#">友情链接</a></li>-->
            <!--</ul>-->
            <!--<div class="clear-float"></div>-->
          <!--</div>-->
          <!--<div class="footer-right">-->
            <!--<div class="telephone" title="服务热线">-->
              <!--<span></span>-->
              <!--<div class="tel-number">010-101-2525</div>-->
            <!--</div>-->
            <!--<div class="official-plat">-->
              <!--<p class="weixin" style="background-image: "><span id="wx-corner"></span></p>-->
              <!--<p class="weibo" style="background-image: "><span id="wb-corner"></span></p>-->
              <!--<ul>-->
                <!--<li><a href="#a_null"><span class="weixin-logo"></span>官方微信</a></li>-->
                <!--<li title="点击打开官方微博"><a href="#" target="_blank"><span class="weibo-logo"></span>官方微博</a></li>-->
                <!--<li title="点击打开官方客服"><a-->
                  <!--href="http://crm2.qq.com/page/portalpage/wpa.php?uin=XXXXXXXX&amp;aty=0&amp;a=0&amp;curl=&amp;ty=1"><span-->
                  <!--class="qq-logo"></span>官方客服</a></li>-->
              <!--</ul>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="clear-float"></div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
  import '../../static/script'

  export default {
    name: "nav-footer"
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none
  }

  body {
    font-family: "Microsoft Yahei";
    min-width: 1000px
  }

  a {
    outline: 0;
    text-decoration: none
  }

  strong {
    font-weight: 400
  }

  .strong {
    font-weight: 700
  }

  ::selection {
    background: #1EACDF;
    color: #fff
  }

  img {
    border: 0
  }

  ::-moz-selection {
    background: #1EACDF;
    color: #fff
  }

  ::-webkit-selection {
    background: #1EACDF;
    color: #fff
  }

  .autoWidth {
    margin: 0 auto;
    min-width: 1000px;
    max-width: 1200px
  }

  .auto {
    margin: 0 auto;
    min-width: 1000px;
    max-width: 1200px
  }

  .nav-footer {
    /*margin-top: 50px;*/
  }

  @media screen and (max-width: 1233px) {
    .auto {
      padding-left: 10px
    }
  }

  .clearfix:after, .clearfix:before {
    display: table;
    line-height: 0;
    content: ""
  }

  .clearfix:after {
    clear: both
  }

  .clear-float {
    clear: both
  }

  .footer {
    background-color: #009fd9;
    font-family: "Microsoft Yahei"
  }

  .footer-floor1 {
    width: 100%;
    padding: 36px 0 60px
  }

  .footer-list {
    width: 69%;
    height: 100%;
    float: left
  }

  .footer-list ul {
    float: left;
    margin-right: 13%
  }

  .footer-list .flist-4 {
    margin-right: 0
  }

  .footer-list li {
    line-height: 32px
  }

  .footer-list li a {
    color: #b6e2f2;
    font-size: 12px;
    text-decoration: none
  }

  .footer-list li a:hover {
    text-decoration: underline;
    color: #fff
  }

  .footer-list .flist-title {
    font-size: 16px;
    color: #fff;
    margin-bottom: 15px
  }

  .footer-floor2 {
    width: 100%;
    border-top: 1px solid #4cc3ed;
    padding: 20px 0;
    text-align: center
  }

  .footer-floor2 p {
    text-align: center;
    color: #b6e2f2;
    font-size: 12px;
    line-height: 30px
  }

  .footer-floor2 p span {
    font-family: PingFangSC-Light, 'helvetica neue', 'hiragino sans gb', tahoma, 'microsoft yahei ui', 'microsoft yahei', simsun, sans-serif
  }

  .footer-floor2 a {
    color: #b6e2f2
  }

  .footer-floor2 a:hover {
    color: #a8d0e0;
    text-decoration: underline
  }

  .foot-link {
    margin: 0 15px;
    text-decoration: none;
    color: #b6e2f2
  }

  .foot-link:hover {
    text-decoration: underline
  }

  .footer-right {
    width: 300px;
    float: right
  }

  .telephone {
    width: 100%;
    height: 32px;
    line-height: 32px;
    color: #fff
  }

  .telephone .tel-number {
    font-size: 30px;
    font-weight: 400;
    text-align: right
  }

  .official-plat {
    width: 100%;
    height: 100%;
    margin-top: 20px;
    position: relative
  }

  .official-plat ul {
    float: right;
    margin-top: 7px
  }

  .official-plat ul li span {
    display: inline-block;
    width: 32px;
    height: 32px;
    background: url(../assets/plat_icon.png) no-repeat 0 0;
    line-height: 32px;
    float: left;
    margin-right: 12px
  }

  .official-plat ul li .weibo-logo {
    background: url(../assets/plat_icon.png) no-repeat -32px 0
  }

  .official-plat ul li .qq-logo {
    background: url(../assets/plat_icon.png) no-repeat -64px 0
  }

  .official-plat ul li {
    height: 45px
  }

  .official-plat ul a {
    display: inline-block;
    height: 32px;
    width: 100%;
    line-height: 32px;
    color: #fff;
    text-decoration: none;
    font-size: 12px
  }

  .official-plat > p {
    display: inline-block;
    width: 132px;
    height: 132px;
    border: 1px solid #ddd;
    background-color: #fff
  }

  .official-plat .weixin {
    position: absolute;
    top: 0;
    left: 10px;
    background-image: url(../assets/plat_qrcode.png);
    background-repeat: no-repeat;
    background-position: 0 0
  }

  .official-plat .weibo {
    position: absolute;
    top: 0;
    left: 10px;
    background-image: url(../assets/plat_qrcode.png);
    background-repeat: no-repeat;
    background-position: -132px 0;
    display: none
  }

  #wx-corner {
    border: 10px solid transparent;
    border-left: 10px solid #fff;
    position: absolute;
    top: 12px;
    right: -20px;
    z-index: 10
  }

  #wb-corner {
    border: 10px solid transparent;
    border-left: 10px solid #fff;
    position: absolute;
    top: 58px;
    right: -20px;
    z-index: 10
  }

  .five-superiority {
    width: 100%;
    border-bottom: 1px solid #27aede;
    padding: 10px 0 20px
  }

  .five-superiority-list li {
    float: left;
    width: 20%;
    height: 36px;
    text-align: center;
    border-left: 1px solid #27aede
  }

  .five-superiority-list li:first-child {
    border-left: none
  }

  .five-superiority-list li a {
    display: inline-block;
    position: relative;
    width: 100%;
    height: 36px;
    line-height: 36px;
    background: no-repeat 2% center;
    text-indent: 2em;
    color: #fff;
    font-size: 16px
  }

  .five-superiority-list li a:hover {
    color: #bfe7f5
  }

  .five-superiority-list li a.superiority-text {
    text-indent: 4em
  }

  .superiority-icon {
    position: absolute;
    width: 40px;
    height: 40px;
    left: 10%;
    background-repeat: no-repeat;
    background-image: url(../assets/footer_youshi.png)
  }

  .compensate_ico .superiority-icon {
    background-position: 0 0
  }

  .compensate_ico:hover .superiority-icon {
    background-position: 0 -50px
  }

  .retreat_ico .superiority-icon {
    background-position: 0 -100px
  }

  .retreat_ico:hover .superiority-icon {
    background-position: 0 -150px
  }

  .technology_ico .superiority-icon {
    background-position: 0 -200px
  }

  .technology_ico:hover .superiority-icon {
    background-position: 0 -250px
  }

  .prepare_ico .superiority-icon {
    background-position: 0 -300px
  }

  .prepare_ico:hover .superiority-icon {
    background-position: 0 -350px
  }

  .service_ico .superiority-icon {
    background-position: 0 -400px
  }

  .service_ico:hover .superiority-icon {
    background-position: 0 -450px
  }

  .marquee-box {
    overflow: hidden;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0
  }

  .marquee {
    width: 8000%;
    height: 60px
  }

  .wave-list-box {
    float: left
  }

  .wave-list-box ul {
    float: left;
    height: 60px;
    overflow: hidden;
    zoom: 1
  }

  .wave-list-box ul li {
    height: 60px;
    width: 100%;
    float: left;
    line-height: 30px;
    list-style: none
  }

  .wave-box {
    position: relative;
    height: 60px;
    background: rgba(0,0,255,0.1)
  }


</style>

<template>
  <!--<div class="banner">-->
    <!--<div class="bg-video">-->
      <video autoplay="" muted="" loop="" class="videos">
        <source type="video/webm" src="https://ccm.ddcdn.com/cms/site/branding/videos/tahiti/video.webm">
        <source type="video/mp4" src="https://ccm.ddcdn.com/cms/site/branding/videos/tahiti/video.mp4">
      </video>
    <!--</div>-->

  <!--</div>-->

</template>

<script>
export default {
    data(){
      return{
        bcg:[]
      }
    }
}



</script>

<style scoped>
  /*bootstrap-css */
  @import "../../static/css/bootstrap.css";
  /*css*/
  @import "../../static/css/style.css";
  /*font-awesome icons*/
  @import "../../static/css/font-awesome.css";
  .banner {
    position:relative;
    margin-top:10px;
    height:700px;
    width: 100%;

  }
  .bg-video {
    position: relative;
    width: 100%;
    height: 700px;
    overflow: hidden;
  }
  .bg-video video{
    position:absolute;
    top:0;
    width:1920px;
    height:700px;
    left:50%;
    -webkit-transform:translateX(-50%);
    -moz-transform:translateX(-50%);
    -ms-transform:translateX(-50%);
    transform:translateX(-50%);

  }
  .videos{
    position: relative;
    top:26px;

  }


</style>

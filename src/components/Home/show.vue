<template>
  <div style="min-width: 1366px;">
    <app-go></app-go>
    <app-blog-header style="margin-top: 0;"></app-blog-header>
    <app-all></app-all>
    <app-commd></app-commd>
    <app-theme></app-theme>

  </div>
</template>

<script>
  import Go from '../Home/Go'
  import All from './All'
  import Commd from './Commd'
  import Theme from './Theme'
  import blogheader from '../Blog/BlogHeader'

  export default {
    name: "show",
    components: {
      'app-go': Go,
      'app-blog-header':blogheader,
      'app-all': All,
      'app-commd': Commd,
      'app-theme': Theme,

    }
  }
</script>

<style scoped>

</style>

<template>
  <div>
    <app-header></app-header>
    <app-img></app-img>
  </div>
</template>

<script>
  import BlogHeader from './BlogHeader'
  import BlogImg from './BlogImg'

  export default {
    name: "Blog1",
    components: {
      'app-header': BlogHeader,
      'app-img': BlogImg
    }
  }
</script>

<style scoped>

</style>

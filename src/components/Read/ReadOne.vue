<template>
  <div>
    <app-read></app-read>
    <div class="add"></div>
    <app-article class="article"></app-article>
  </div>
</template>

<script>
  import read from './read-bar'
  import article from './read-main'

  export default {
    name: "ReadOne",
    components: {
      'app-read': read,
      'app-article': article
    }
  }
</script>

<style scoped>
  .article {
    width: 100%;
  }

  .add {
    margin: 20px 0;
  }
</style>

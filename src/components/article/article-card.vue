<template>
  <div class="article-card">
    <h3>{{ article.title }}</h3>
    <div class="article-card-body">
      <v-md-preview :text="article.body" class="article-card-body-content"></v-md-preview>
      <div class="ulBlend"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleCard"
}
</script>
<script setup>
  import {defineProps} from 'vue'
  const props = defineProps({
    article: {
      type: Object,
      default: () => {}
    }
  })
</script>

<style scoped lang="less">
  .article-card {
    border: 1px solid #e9ecef;
    width: 90%;
    max-width: 1000px;
    margin: 20px auto;
    padding: 20px;

    .article-card-body {
      overflow: hidden;
      max-height:400px;
      position: relative;

      .article-card-body-content {
        max-height: 200px;
      }
    }

    .ulBlend::before {
      content: "";
      position: absolute;
      left:0;
      bottom:0;
      width: 100%;
      height: 60px;
      z-index: 1;
      background: -webkit-gradient(
          linear,
          0 0,
          0 100%,
          from(rgba(255, 255, 255, 0.2)),
          to(rgba(255, 255, 255, 1))
      );
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#0ff, endColorstr=#fff, GradientType=0);
    }


  }
</style>
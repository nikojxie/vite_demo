<template>
  <div class="article-list">
    <article-card
        v-for="(item,index) of list"
        :key="item.id"
        :article="item"
        :loading="loading"
    ></article-card>
  </div>
</template>

<script>

export default {
  name: "Home",
}
</script>
<script setup>
  import useList from "../composables/article/useList"
  import ArticleCard from "../components/article/article-card.vue";
  const {list,loading,init} = useList()
</script>

<style scoped lang="less">
  .article-list {
    overflow: auto;
  }
</style>
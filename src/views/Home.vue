<template>
  <div class="article-list">
    <article-card
        v-for="(item,index) of list"
        :key="item.id"
        :article="item"
        :loading="loading"
    ></article-card>
    <a-pagination
        class="article-list-pagination"
        v-model:current="page"
        :total="totalRows"
        :pageSize="10"
        show-less-items
        @change="handlePageChange"
    />
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
  const {list,loading,page,totalRows,getList} = useList()
  const handlePageChange = (current) => {
    window.scrollTo(0,0)
    page.value = current
    getList()
  }
</script>

<style scoped lang="less">
  .article-list {
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .article-list-pagination {
      margin-top: 20px;
    }
  }

</style>
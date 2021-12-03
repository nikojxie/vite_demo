<template>
  <div class="article-detail">
    <a-skeleton :loading="loading" active>
        <h1 class="detail-title">{{detail.title}}</h1>
        <v-md-preview :text="detail.body"></v-md-preview>
    </a-skeleton>
  </div>
</template>

<script>
export default {
  name: "Detail"
}
</script>
<script setup>
  import useDetail from "../composables/article/useDetail"
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const {detail,loading,init} = useDetail(route.params.id)
</script>

<style scoped lang="less">
  .article-detail {
    width: 90%;
    max-width: 1000px;
    margin: 20px auto;
    .detail-title {
      font-size: 24px;
      font-weight: bold;
    }
  }

</style>
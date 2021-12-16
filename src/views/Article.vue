<template>
  <div class="article-detail">
    <a-skeleton :loading="loading" active>
      <a-breadcrumb separator=">">
        <a-breadcrumb-item>
          <router-link to="/">首页</router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item class="current-title">{{ detail.title }}</a-breadcrumb-item>
      </a-breadcrumb>
      <h1 class="detail-title">{{ detail.title }}</h1>
      <v-md-preview :text="detail.body"></v-md-preview>
    </a-skeleton>
  </div>
</template>

<script lang="ts">
export default {
  name: "Detail"
}
</script>
<script setup lang="ts">
import useDetail from "../composables/article/useDetail"
import {useRoute} from 'vue-router'

const route = useRoute()
const id: string = route.params.id
const {
  detail,
  loading,
  init
} = useDetail(id)
</script>

<style scoped lang="less">
.article-detail {
  width: 90%;
  //max-width: 1000px;
  margin: 20px auto;

  .detail-title {
    font-size: 24px;
    font-weight: bold;
    margin: 20px 0;
  }

  .current-title {
    color: #666;
  }
}

</style>
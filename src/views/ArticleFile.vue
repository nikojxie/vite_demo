<template>
  <div class="article-file">
    <a-skeleton :loading="loading" active :paragraph="paragraph" :title="false">
      <ul>
        <li v-for="(key,index) of Object.keys(file)" :key="key">
          <h3 v-text="key" class="file-date"></h3>
          <ul>
            <li v-for="(article,aIndex) of file[key]" class="article-cell">
              <router-link :to="`/article/${article.id}`">
                <span v-text="article.title" class="article-title"></span>
              </router-link>
              <span v-text="$dayjs.format(article.pub_time)" class="article-date"></span>
            </li>
          </ul>
        </li>
      </ul>
    </a-skeleton>
  </div>
</template>

<script>
export default {
  name: "ArticleFile"
}
</script>
<script setup>
import useFile from "../composables/article/useFile"
const {
  loading,
  paragraph,
  file
} = useFile()
</script>

<style scoped lang="less">
.article-file {
  width: 90%;
  margin: 0 auto;
  padding: 20px 0;

  .file-date {
    font-size: 20px;
    font-weight: bold;
  }

  .article-cell {
    margin-bottom: 20px;

    .article-title {
      color: #666;
      margin-left: 30px;

      &:hover {
        text-decoration: underline;
      }
    }

    .article-date {
      color: #999;
      margin-left: 20px;
      font-style: italic;
    }
  }

}

</style>
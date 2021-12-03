<template>
  <v-md-preview :text="detail.body"></v-md-preview>
</template>

<script>
export default {
  name: "Detail"
}
</script>
<script setup>
  import useDetail from "../composables/article/useDetail"
  const {detail,loading,init} = useDetail()
</script>

<style scoped>

</style>
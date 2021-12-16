<template>
  <div class="app-container">
    <router-view v-slot="{ Component }" >
      <keep-alive >
        <component :is="Component" v-if="$route.meta.keepalive" :key="$route.path"></component>
      </keep-alive>
      <component :is="Component" v-if="!$route.meta.keepalive"></component>
    </router-view>
  </div>
</template>

<script>
export default {
  name: "appContainer",
};
</script>
<script setup>

</script>

<style scoped>

</style>

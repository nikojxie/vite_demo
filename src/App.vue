<template>
  <app-header></app-header>
  <div>
    <app-aside></app-aside>
    <app-container></app-container>
  </div>
  <app-footer></app-footer>
  <app-module></app-module>
</template>

<script setup>
  import AppHeader from "@/layout/appHeader.vue";
  import AppFooter from "@/layout/appFooter.vue";
  import AppAside from "@/layout/appAside.vue";
  import AppContainer from "@/layout/appContainer.vue";
  import AppModule from "@/layout/appModule.vue";
</script>
<style lang="less">
  @import "./assets/less/app";
</style>
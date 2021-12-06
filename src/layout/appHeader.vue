<template>
  <header class="app-header">
    <nav class="app-header-container">
      <router-link to="/"><h1>Niko's Blog</h1></router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "header",
};
</script>

<style lang="less">
.app-header {
  .app-header-container {
    width: 100%;
    padding-left:48px;
    h1 {
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>

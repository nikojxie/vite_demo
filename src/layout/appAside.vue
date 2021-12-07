<template>
  <div class="app-aside">
    <a-menu
        v-model:openKeys="openKeys"
        v-bind:selectedKeys="selectedKeys"
        mode="inline"
        :inline-collapsed="collapsed"
        @select="handleMenuSelect"
    >
      <a-menu-item
          v-for="(menu, index) of menus"
          :key="menu.path"
      >
        <template #icon>
          <component :is="menu.icon"></component>
          <!--<folder-open-outlined />-->
        </template>
        <span>{{ menu.title }}</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: "appAside",
};
</script>
<script setup>
import useAsideMenu from "../composables/layout/useAsideMenu";
let {
  collapsed,
  selectedKeys,
  openKeys,
  menus,
  handleMenuSelect
} = useAsideMenu()
</script>

<style scoped></style>

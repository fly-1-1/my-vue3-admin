<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="layout-container">
    <!-- 左侧菜单栏 -->
    <div class="layout_slider">
      <Logo></Logo>
      <!-- 菜单展示 -->
      <el-scrollbar>
        <el-menu
          background-color="rgb(177.3, 179.4, 183.6)"
          text-color="rgb(179, 224.5, 156.5)"
          active-text-color="rgb(250, 181.5, 181.5)"
          :default-active="route.path"
        >
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部的导航 -->
    <div class="layout_tabbar">
      <Tabbar />
    </div>
    <!-- 内容展示区 -->
    <div class="layout_main">
      <Main></Main>
    </div>
  </div>
</template>
<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Main from './main/index.vue'
import Tabbar from './tabbar/index.vue'
import useUserStore from '@/stores/modules/user'
import { useRoute } from 'vue-router'
const userStore = useUserStore()
const route = useRoute()
</script>
<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: rgb(221.7, 222.6, 224.4);

    .el-scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
      .el-menu {
        border-right: none;
      }
    }
  }

  .layout_tabbar {
    position: fixed;
    width: calc(100% - #{$base-menu-width});
    height: $base-tabbar-height;
    top: 0;
    left: $base-menu-width;
  }

  .layout_main {
    position: absolute;
    width: calc(100% - #{$base-menu-width});
    height: calc(100vh - #{$base-tabbar-height});
    background: yellowgreen;
    left: $base-menu-width;
    top: $base-tabbar-height;
    padding: 20px;
    overflow: auto;
  }
}
</style>

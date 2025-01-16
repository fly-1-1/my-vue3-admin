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
        >
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部的导航 -->
    <div class="layout_tabbar">456</div>
    <!-- 内容展示区 -->
    <div class="layout_main">
      <p style="height: 100000px">
        <SvgIcon name="lock" color="pink" />
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import useUserStore from '@/stores/modules/user'

const userStore = useUserStore()
</script>
<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100vh;
  background: red;

  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;
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
    background: $base-tabbar-background;
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

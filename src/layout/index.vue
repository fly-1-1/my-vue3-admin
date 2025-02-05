<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="layout-container">
    <!-- 左侧菜单栏 -->
    <div class="layout_slider" :class="{ fold: LayOutSettingStore.fold ? true : false }">
      <Logo></Logo>
      <!-- 菜单展示 -->
      <el-scrollbar>
        <el-menu
          background-color="rgb(177.3, 179.4, 183.6)"
          text-color="rgb(179, 224.5, 156.5)"
          active-text-color="rgb(250, 181.5, 181.5)"
          :default-active="route.path"
          :collapse="LayOutSettingStore.fold"
        >
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部的导航 -->
    <div class="layout_tabbar" :class="{ fold: LayOutSettingStore.fold ? true : false }">
      <Tabbar />
    </div>
    <!-- 内容展示区 -->
    <div class="layout_main" :class="{ fold: LayOutSettingStore.fold ? true : false }">
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
import useLayOutSettingStore from '@/stores/modules/setting'

const userStore = useUserStore()
const route = useRoute()

const LayOutSettingStore = useLayOutSettingStore()
</script>

<script lang="ts">
export default {
  name: 'LayoutComponent',
}
</script>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: rgb(221.7, 222.6, 224.4);
    transition: all 0.7s;

    .el-scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
      .el-menu {
        border-right: none;
      }
    }

    &.fold {
      width: 50px;
    }
  }

  .layout_tabbar {
    position: fixed;
    width: calc(100% - #{$base-menu-width});
    height: $base-tabbar-height;
    top: 0;
    left: $base-menu-width;
    transition: all 0.7s;

    &.fold {
      width: calc(100% - #{$base-menu-width} + 250px);
      left: $base-menu-width - 250px;
    }
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

    transition: all 0.7s;

    &.fold {
      width: calc(100% - #{$base-menu-width} + 250px);
      left: $base-menu-width - 250px;
    }
  }
}
</style>

<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="tabbar">
    <Breadcrumb />
    <Setting />
  </div>
</template>
<script setup lang="ts">
import Breadcrumb from './tbreadcrumb/index.vue'
import Setting from './tsetting/index.vue'
</script>
<style scoped lang="scss">
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  //background-image: linear-gradient(to right, white, black, white);

  .tabbar-left {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }

  .tabbar-right {
    display: flex;
    align-items: center;
  }
}
</style>

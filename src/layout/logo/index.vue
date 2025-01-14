<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="logo">
    <!-- <img src="../../../public/image.png" /> -->
    <p>{{ setting.title }}</p>
  </div>
</template>
<script setup lang="ts">
import setting from '@/setting'
</script>
<style scoped lang="scss">
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  display: flex;
  align-items: center;
  padding: 20px;
  img {
    width: 100px;
    height: 50px;
  }

  p {
    color: #303133;
    font-size: $base-logo-title-font-size;
    margin-left: 10px;
  }
}
</style>

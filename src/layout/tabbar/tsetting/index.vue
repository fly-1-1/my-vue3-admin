<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="tabbar-right">
    <el-button type="primary" size="small" icon="Refresh" circle />
    <el-button type="primary" size="small" icon="FullScreen" circle />
    <el-button type="primary" size="small" icon="Setting" circle />
    <img src="../../../../public/image.png" style="height: 24px; width: 24px; margin: 0 10px" />

    <el-dropdown>
      <span class="el-dropdown-link">
        Dropdown List
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'TSettingComponent',
}
</script>
<style scoped lang="scss"></style>

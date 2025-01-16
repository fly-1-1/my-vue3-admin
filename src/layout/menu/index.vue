<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <template v-for="(item, index) in menus" :key="index">
    <el-menu-item v-if="!item.children" :index="item.path">
      <template #title>
        <span>==&nbsp;</span>
        <span>{{ item.meta.title }}</span>
      </template>
    </el-menu-item>

    <el-menu-item v-if="item.children && item.children.length === 1" :index="item.children[0].path">
      <template #title>
        <span>==&nbsp;</span>
        <span>{{ item.children[0].meta.title }}</span>
      </template>
    </el-menu-item>

    <el-sub-menu :index="item.path" v-if="item.children && item.children.length > 1">
      <template #title>
        <span>==&nbsp;</span>
        <span>{{ item.meta.title }}</span>
      </template>
      <Menu :menuList="item.children"></Menu>
    </el-sub-menu>
  </template>
</template>
<script setup lang="ts">
import Menu from './index.vue'
import { computed } from 'vue'
const { menuList } = defineProps([`menuList`])

const menus = computed(() => {
  return menuList.filter((item: any) => {
    return !item.meta.hidden
  })
})

console.log(menus.value)
</script>

<style scoped lang="scss"></style>

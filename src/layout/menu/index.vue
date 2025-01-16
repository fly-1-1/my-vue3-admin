<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <template v-for="(item, index) in menus" :key="index">
    <el-menu-item v-if="!item.children" :index="item.path" @click="goRoute(item.path)">
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
    </el-menu-item>

    <el-menu-item
      v-if="item.children && item.children.length === 1"
      :index="item.children[0].path"
      @click="goRoute(item.children[0].path)"
    >
      <template #title>
        <el-icon>
          <component :is="item.children[0].meta.icon"></component>
        </el-icon>
        <span>{{ item.children[0].meta.title }}</span>
      </template>
    </el-menu-item>

    <el-sub-menu :index="item.path" v-if="item.children && item.children.length > 1">
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <Menu :menuList="item.children"></Menu>
    </el-sub-menu>
  </template>
</template>
<script setup lang="ts">
import Menu from './index.vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const { menuList } = defineProps([`menuList`])

const menus = computed(() => {
  return menuList.filter((item: any) => {
    return !item.meta.hidden
  })
})

const goRoute = (path: string) => {
  router.push(path)
}
</script>

<style scoped lang="scss"></style>

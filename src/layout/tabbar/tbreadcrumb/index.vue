<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="tabbar-left">
    <el-icon style="margin-right: 10px" @click="changeIcon">
      <component :is="LayOutSettingStore.fold ? 'Fold' : 'Expand'"></component>
    </el-icon>
    <el-breadcrumb separator-icon="ArrowRight">
      <el-breadcrumb-item
        v-for="(item, index) in route.matched"
        :key="index"
        v-show="item.meta.title"
        :to="item.path"
      >
        <span>{{ item.meta.title }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script setup lang="ts">
import useLayOutSettingStore from '@/stores/modules/setting'
import { useRoute } from 'vue-router'

const LayOutSettingStore = useLayOutSettingStore()

const changeIcon = () => {
  LayOutSettingStore.fold = !LayOutSettingStore.fold
}

const route = useRoute()
</script>

<script lang="ts">
export default {
  name: 'TbreadcrumbComponent',
}
</script>

<style scoped lang="scss"></style>

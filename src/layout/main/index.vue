<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'MainComponent',
}
</script>
<style scoped lang="scss">
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}

.fade-enter-active {
  transition: all 0.3s;
}

.fafe-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>

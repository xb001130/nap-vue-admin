<script setup lang="ts">
import { useAppStoreHook } from '~/store/modules/app'

const Title = defineAsyncComponent(() => import('./components/Title.vue'))

const collapsed = computed(() => useAppStoreHook().collapsed)
</script>

<template>
  <div :w="!collapsed ? '260' : '70'" transition="width" border-r="1 color-border">
    <Title />
  </div>
</template>

<style scoped>

</style>

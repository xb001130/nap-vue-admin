<script setup lang="ts">
const Collapsed = defineAsyncComponent(() => import('./components/Collapsed.vue'))
const ThemeModel = defineAsyncComponent(() => import('./components/ThemeModel.vue'))
</script>

<template>
  <div h58 flex="~ items-center justify-between" p="l10 r10" border-b="~ color-border">
    <div>
      <Collapsed />
    </div>
    <div>
      <ThemeModel />
    </div>
  </div>
</template>

<style scoped>

</style>

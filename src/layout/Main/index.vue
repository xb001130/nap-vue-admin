<script setup lang="ts">
const RouterView = defineAsyncComponent(() => import('./components/RouterView.vue'))
</script>

<template>
  <div flex-1>
    <RouterView />
  </div>
</template>

<style scoped>

</style>

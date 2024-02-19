<script setup lang="ts">
const Header = defineAsyncComponent(() => import('./Header/index.vue'))
const Aside = defineAsyncComponent(() => import('./Aside/index.vue'))
const Main = defineAsyncComponent(() => import('./Main/index.vue'))
</script>

<template>
  <div wh-full flex>
    <Aside />
    <div flex="~ 1 col">
      <Header />
      <Main />
    </div>
  </div>
</template>

<style scoped>

</style>

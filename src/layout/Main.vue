<script setup lang="ts">
</script>

<template>
  <div flex-1>
    <RouterView v-slot="{ Component, route }">
      <component :is="Component" :key="route.name" />
    </RouterView>
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">

</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <component :is="Component" :key="route.name" />
  </RouterView>
</template>

<style scoped>

</style>

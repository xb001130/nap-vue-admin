<script setup lang="ts">
import { useAppStoreHook } from '~/store/modules/app'

const collapsed = computed(() => useAppStoreHook().collapsed)
</script>

<template>
  <i
    mr-10px cursor-pointer text-22px
    :class="collapsed ? 'i-ep-expand' : 'i-ep-fold'"
    @click="useAppStoreHook().collapsed = !collapsed"
  />
</template>

<style scoped>

</style>

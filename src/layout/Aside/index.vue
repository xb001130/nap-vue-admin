<script setup lang="ts">
import { useAppStoreHook } from '~/store/modules/app'

const isLargeScreen = useMediaQuery('(min-width: 1300px)')
watch(
  () => isLargeScreen.value,
  (val) => {
    useAppStoreHook().collapsed = !val
  },
)
const title = computed(() => useAppStoreHook().projectName)
const collapsed = computed(() => useAppStoreHook().collapsed)
</script>

<template>
  <div :w="!collapsed ? '260' : '70'" transition="width" border-r="1">
    <div flex="~ items-center" h58 p="l10">
      <i class="i-nap:nap" mr10 h40 w40 />
      <span v-if="!collapsed" text-nowrap text-22 font-600 auto-text>{{ title }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>

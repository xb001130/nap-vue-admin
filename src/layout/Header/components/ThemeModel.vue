<script setup lang="ts">
import { useAppStoreHook } from '~/store/modules/app'

const isDark = useDark()
const toggleDark = useToggle(isDark)
async function changeThemeFn() {
  await toggleDark()
  useAppStoreHook().setupThemeColor()
}
</script>

<template>
  <i i="carbon-sun dark:carbon-moon" m10px cursor-pointer text-20px @click="changeThemeFn" />
</template>

<style scoped>

</style>

<script setup lang="ts">
import { useRouterStoreHook } from '~/store/modules/router'

useRouterStoreHook().getAsyncRouter()
</script>

<template>
  <el-button type="primary">
    Primary
  </el-button>
  <el-button type="primary" plain>
    Primary
  </el-button>
</template>

<style scoped>
</style>

import { defineStore } from 'pinia'
import { kebabCase } from 'lodash-es'
import { store } from '~/store'

export const useAppStore = defineStore('nap-app', () => {
  const projectName = ref('nap-vue-admin')
  const themeColor = ref<any>({
    light: {
      primary: '#0ea5e9',
      primaryLight3: '#38bdf8',
      primaryLight5: '#7dd3fc',
      primaryLight7: '#bae6fd',
      primaryLight8: '#e0f2fe',
      primaryLight9: '#f0f9ff',
      primaryDark2: '#0284c7',
    },
    dark: {
      primary: '#0ea5e9',
      primaryLight3: '#028ac7',
      primaryLight5: '#0370A1',
      primaryLight7: '#075E85',
      primaryLight8: '#0C506E',
      primaryLight9: '#083549',
      primaryDark2: '#0ea5e9',
    },
  })

  function setupThemeColor() {
    const isDark = useDark()
    const keys = Object.keys(isDark.value ? themeColor.value.dark : themeColor.value.light)
    const el = document.getElementById('app')
    keys.forEach((key) => {
      useCssVar(`--el-color-${kebabCase(key)}`, el).value = themeColor.value[isDark.value ? 'dark' : 'light'][key]
    })
  }

  const collapsed = ref(false)

  return {
    projectName,
    themeColor,
    setupThemeColor,
    collapsed,
  }
})

export function useAppStoreHook() {
  return useAppStore(store)
}

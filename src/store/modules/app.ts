import { defineStore } from 'pinia'
import { kebabCase } from 'lodash-es'
import { store } from '~/store'

export const useAppStore = defineStore('nap-app', () => {
  const projectName = ref('nap-vue-admin')
  const themeColor = ref<any>({
    primary: '#0ea5e9',
    primaryLight3: '#38bdf8',
    primaryLight5: '#7dd3fc',
    primaryLight7: '#bae6fd',
    primaryLight8: '#e0f2fe',
    primaryLight9: '#f0f9ff',
    primaryDark2: '#0284c7',
  })

  function setupThemeColor() {
    const keys = Object.keys(themeColor.value)
    const el = document.getElementById('app')
    keys.forEach((key) => {
      useCssVar(`--el-color-${kebabCase(key)}`, el).value = useAppStoreHook().themeColor[key]
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

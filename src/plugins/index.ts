import type { App } from 'vue'
import { setupI18n } from './i18n'
import { useAppStoreHook } from '~/store/modules/app'
import { setupStore } from '~/store/index'
import { setupRouter } from '~/router/index'
import '~/router/permission.ts'

export function setupApp(app: App<Element>) {
  setupI18n(app)
  setupStore(app)
  setupRouter(app)
  app.mount('#app')
  useAppStoreHook().setupThemeColor()
}

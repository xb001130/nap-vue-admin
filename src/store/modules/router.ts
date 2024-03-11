import { defineStore } from 'pinia'
import { store } from '~/store'

export const useRouterStore = defineStore('nap-router', () => {
  const asyncRouter = ref([])

  function getAsyncRouter() {
    const { VITE_LOAD_ROUTER } = import.meta.env
    let resRouter: Array<RouteRecordRaw> = []
    if (VITE_LOAD_ROUTER === 'local') {
      const localRouter = import.meta.glob('~/router/routes/asyncRouter.ts', { eager: true, import: 'asyncRouter' })
      resRouter = (localRouter[Object.keys(localRouter)[0]] as Array<RouteRecordRaw>)
    }
    return new Promise<Array<RouteRecordRaw>>((resolve) => {
      resolve(resRouter)
    })
  }
  return {
    asyncRouter,
    getAsyncRouter,
  }
})

export function useRouterStoreHook() {
  return useRouterStore(store)
}

import { defineStore } from 'pinia'
import { store } from '~/store'

export const useAppStore = defineStore('nap-router', () => {
  return {
  }
})

export function useAppStoreHook() {
  return useAppStore(store)
}

import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import baseRoutes from './baseRoutes'

const router = createRouter({
  history: createWebHistory(),
  routes: (baseRoutes as RouteRecordRaw[]),
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}

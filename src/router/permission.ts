import { router } from './index'

// import { useRouterStoreHook } from '~/store/modules/router'

/** 路由守卫（权限控制） */
router.beforeEach(async (_to) => {
  // const data = await useRouterStoreHook().getAsyncRouter()
})

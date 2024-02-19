export const baseRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    redirect: '/home',
    component: () => import('~/layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('~/views/home/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('~/views/login/index.vue'),
  },
]

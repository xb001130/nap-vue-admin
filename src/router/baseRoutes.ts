export default [
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    component: () => import('~/layout/index.vue'),
    children: [
      {
        path: '/home',
        component: () => import('~/views/home/index.vue'),
      },
    ],
  },
]

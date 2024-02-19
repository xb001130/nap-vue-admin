export const asyncRouter: Array<RouteRecordRaw> = [
  {
    path: '/system',
    name: 'System',
    children: [
      {
        path: '/setnotice',
        component: '/setnotice/index',
        meta: {
          title: '通知管理',
        },
      },
    ],
  },
]

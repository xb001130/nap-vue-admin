export const asyncRouter: Array<RouteRecordRaw> = [
  {
    path: '/system',
    name: 'System',
    children: [
      {
        path: '/setnotice',
        component: '/setnotice/index',
        name: 'Setnotice',
        meta: {
          title: '通知管理',
        },
      },
    ],
  },
]

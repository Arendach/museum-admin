export default [
  {
    path: '/videos',
    name: 'videos',
    meta: {title: 'Відео'},
    redirect: '/videos/list',
    component: () => import('@/views/RouterView'),
    children: [
      {
        path: 'list',
        name: 'videos.list',
        meta: {title: 'Список'},
        component: () => import('@/views/media/Videos/List')
      },
      {
        path: ':id/edit',
        name: 'videos.edit',
        meta: {title: 'Редагування відео'},
        component: () => import('@/views/media/Videos/Edit')
      },
      {
        path: 'add',
        name: 'weapons.add',
        meta: {title: 'Нова зброя'},
        component: () => import('@/views/materials/Weapons/Add')
      },
    ]
  },
]

export default [
  {
    path: '/weapons',
    name: 'weapons',
    meta: {title: 'Зброя'},
    redirect: '/weapons/list',
    component: () => import('@/views/RouterView'),
    children: [
      {
        path: 'list',
        name: 'weapons.list',
        meta: {title: 'Список'},
        component: () => import('@/views/materials/Weapons/List')
      },
      {
        path: ':id/edit',
        name: 'weapons.edit',
        meta: {title: 'Редагування зброї'},
        component: () => import('@/views/materials/Weapons/EditForm')
      },
      {
        path: 'add',
        name: 'weapons.add',
        meta: {title: 'Нова зброя'},
        component: () => import('@/views/materials/Weapons/AddForm')
      },
    ]
  },
]

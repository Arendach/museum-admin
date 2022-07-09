export default [
  {
    path: '/users',
    name: 'users',
    meta: {title: 'Користувачі'},
    redirect: '/users/list',
    component: () => import('@/views/RouterView'),
    children: [
      {
        path: 'list',
        name: 'users.list',
        meta: {title: 'Список'},
        component: () => import('@/views/common/Users/List')
      },
      {
        path: 'edit/:id',
        name: 'users.edit',
        meta: {title: 'Редагування користувача'},
        component: () => import('@/views/common/Users/Edit'),
      },
      {
        path: 'add',
        name: 'users.add',
        meta: {title: 'Новий користувач'},
        component: () => import('@/views/common/Users/Add')
      }
    ]
  },
]

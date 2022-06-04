export default [
  {
    path: '/tags',
    name: 'tags',
    meta: {title: 'Теги'},
    redirect: '/tags/list',
    component: () => import('@/views/RouterView'),
    children: [
      {
        path: 'list',
        name: 'tags.list',
        meta: {title: 'Список'},
        component: () => import('@/views/materials/Tags/TagsList')
      },
      {
        path: ':id/edit',
        name: 'tags.edit',
        meta: {title: 'Редагування тега'},
        component: () => import('@/views/materials/Tags/EditForm')
      },
      {
        path: 'add',
        name: 'tags.add',
        meta: {title: 'Новий тег'},
        component: () => import('@/views/materials/Tags/AddForm')
      },
    ]
  },
]

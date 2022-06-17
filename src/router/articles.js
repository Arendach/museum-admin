export default [
  {
    path: '/articles',
    name: 'articles',
    meta: {title: 'Статті'},
    redirect: '/articles/list',
    component: () => import('@/views/RouterView'),
    children: [
      {
        path: 'list',
        name: 'articles.list',
        meta: {title: 'Список'},
        component: () => import('@/views/materials/Articles/ArticlesList')
      },
      {
        path: 'edit/:id',
        name: 'articles.edit',
        meta: {title: 'Редагування статті'},
        component: () => import('@/views/materials/Articles/Edit.vue'),
      },
      {
        path: 'add',
        name: 'articles.add',
        meta: {title: 'Нова стаття'},
        component: () => import('@/views/materials/Articles/AddForm')
      }
    ]
  },
]

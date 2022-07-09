export default [
  {
    path: '/pages',
    name: 'pages',
    meta: {title: 'Сторінки'},
    redirect: '/pages/list',
    component: () => import('@/views/RouterView'),
    children: [
      {
        path: 'list',
        name: 'pages.list',
        meta: {title: 'Список'},
        component: () => import('@/views/materials/Pages/List')
      },
      {
        path: 'edit/:id',
        name: 'pages.edit',
        meta: {title: 'Редагування сторінки'},
        component: () => import('@/views/materials/Pages/Edit'),
      },
      {
        path: 'add',
        name: 'pages.add',
        meta: {title: 'Нова сторінка'},
        component: () => import('@/views/materials/Pages/Add')
      }
    ]
  },
]

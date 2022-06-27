export default [
  {
    path: '/countries',
    name: 'countries',
    meta: {title: 'Країни'},
    component: () => import('@/views/RouterView'),
    redirect: '/countries/list',
    children: [
      {
        path: 'list',
        name: 'countries.list',
        meta: {title: 'Список'},
        component: () => import('@/views/materials/Countries/CountriesList'),
      },
      {
        path: ':id/edit',
        name: 'countries.edit',
        meta: {title: 'Редагування країни'},
        component: () => import('@/views/materials/Countries/Edit')
      },
      {
        path: 'add',
        name: 'countries.add',
        meta: {title: 'Нова країна'},
        component: () => import('@/views/materials/Countries/Add')
      }
    ]
  }
]

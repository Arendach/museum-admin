export default [
  {
    path: '/peoples',
    name: 'peoples',
    redirect: '/peoples/list',
    meta: {title: 'Люди'},
    component: () => import('@/views/RouterView'),
    children: [
      {
        path: 'list',
        name: 'peoples.list',
        meta: {title: 'Список'},
        component: () => import('@/views/materials/Peoples/PeopleList')
      },
      {
        path: 'add',
        name: 'peoples.add',
        meta: {title: 'Нова людина'},
        component: () => import('@/views/materials/Peoples/AddForm'),
      },
      {
        path: 'edit',
        meta: {notCrumb: true},
        component: () => import('@/views/RouterView'),
        children: [
          {
            path: ':id',
            name: 'peoples.edit',
            meta: {title: 'Редагування людини'},
            component: () => import('@/views/materials/Peoples/EditForm'),
          },
          {
            path: ':id/quotes/edit/:quote_id',
            name: 'peoples.quotes.edit',
            meta: {title: 'Редагування цитати'},
            component: () => import('@/views/materials/Peoples/EditQuoteForm')
          },
          {
            path: ':id/quotes/add',
            name: 'peoples.quotes.add',
            meta: {title: 'Додати цитату'},
            component: () => import('@/views/materials/Peoples/AddQuoteForm'),
          }
        ]
      },
    ],
  },
]

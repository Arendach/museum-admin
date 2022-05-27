export default {
  routes: [
    {
      path: '/peoples',
      name: 'Люди',
      component: () => import('@/views/materials/Peoples'),
    },
    {
      path: '/peoples/add',
      name: 'Додати людину',
      component: () => import('@/views/materials/Peoples/AddForm'),
    },
    {
      path: '/peoples/edit/:id',
      name: 'Редагування людини',
      component: () => import('@/views/materials/Peoples/EditForm'),
    },
    {
      path: '/peoples/edit/:id/quote/add',
      name: 'Додати цитату',
      component: () => import('@/views/materials/Peoples/AddQuoteForm'),
    },
  ],
}

export default [
  {
    path: '/articles',
    name: 'Статті',
    component: () => import('@/views/materials/Articles.vue'),
  },
  {
    path: '/articles/edit/:id',
    name: 'Редагування статті',
    component: () => import('@/views/materials/Articles/EditForm.vue'),
  },
]

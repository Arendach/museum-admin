import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    name: 'Адмін панель',
    component: DefaultLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
      },
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
      {
        path: '/tags',
        name: 'Теги',
        component: () => import('@/views/materials/Tags.vue'),
      },
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
        path: '/quotes',
        name: 'Цитати',
        component: () => import('@/views/materials/Quotes'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router

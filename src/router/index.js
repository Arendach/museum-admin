import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'
import peoples from '@/router/peoples'
import articles from "@/router/articles"
import tags from "@/router/tags"
import counties from '@/router/countries'
import weapons from "@/router/weapons"

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    redirect: '/dashboard',
    meta: {title: 'Адмінка'},
    name: 'index',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        meta: {title: 'Панель керування'},
        component: () => import('@/views/Dashboard.vue'),
      },
      ...articles,
      ...tags,
      ...peoples,
      ...counties,
      ...weapons,
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

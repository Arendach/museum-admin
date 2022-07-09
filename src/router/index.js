import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'
import peoples from '@/router/peoples'
import articles from "@/router/articles"
import tags from "@/router/tags"
import counties from '@/router/countries'
import weapons from "@/router/weapons"
import videos from "@/router/videos"
import auth from "@/router/auth"
import pages from "@/router/pages"
import users from "@/router/users"

const routes = [
  ...auth,
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
      ...videos,
      ...pages,
      ...users,
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

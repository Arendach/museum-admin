export default [
  {
    path: '/login',
    name: 'auth.login',
    meta: {title: 'Авторизація'},
    component: () => import('@/views/auth/Login')
  }
]

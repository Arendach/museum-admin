export default [
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'primary',
      text: 'NEW',
    },
  },
  {
    component: 'CNavTitle',
    name: 'Компоненти',
  },
  {
    component: 'CNavGroup',
    name: 'Матеріали',
    to: '/base',
    icon: 'cil-puzzle',
    items: [
      {
        component: 'CNavItem',
        name: 'Статті',
        to: '/articles',
      },
      {
        component: 'CNavItem',
        name: 'Теги',
        to: '/tags',
      },
    ],
  },
]

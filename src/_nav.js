export default [
  {
    component: 'CNavItem',
    name: 'Адмін панель',
    to: '/dashboard',
    icon: 'cil-speedometer',
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
        to: {name: 'articles.list'},
      },
      {
        component: 'CNavItem',
        name: 'Теги',
        to: {name: 'tags.list'},
      },
      {
        component: 'CNavItem',
        name: 'Люди',
        to: {name: 'peoples.list'},
      },
      {
        component: 'CNavItem',
        name: 'Країни',
        to: {name: 'countries.list'},
      },
      {
        component: 'CNavItem',
        name: 'Зброя',
        to: {name: 'weapons.list'},
      }
    ],
  },
]

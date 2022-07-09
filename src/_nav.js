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
        name: 'Сторінки',
        to: {name: 'pages.list'},
      },
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
  {
    component: 'CNavGroup',
    name: 'Медіа',
    to: '/media',
    icon: 'cil-drop',
    items: [
      {
        component: 'CNavItem',
        name: 'Відеоматеріали',
        to: {name: 'videos.list'},
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'Сайт',
    to: '/common',
    icon: 'cil-drop',
    items: [
      {
        component: 'CNavItem',
        name: 'Користувачі',
        to: {name: 'users.list'},
      },
    ],
  },
]

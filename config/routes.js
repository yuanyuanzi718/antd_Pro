export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    icon: 'crown',
    component: '@/pages/DashBoard',
  },
  {
    path: '/userlist',
    name: 'userlist',
    icon: 'UserOutlined',
    component: '@/pages/userlist',
  },
  {
    path: '/txetedit',
    name: 'txetedit',
    icon: 'UserOutlined',
    component: '@/pages/TextEdit',
  },
  {
    component: './404',
  },
];

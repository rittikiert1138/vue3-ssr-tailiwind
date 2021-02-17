const {
  createRouter,
  createMemoryHistory,
  createWebHistory,
} = require('vue-router');

const isServer = typeof window === 'undefined';

let history = isServer ? createMemoryHistory() : createWebHistory();

const routes = [
  { path: '/', name: 'home', component: () => import('../pages/Home') },
  { path: '/user', name: 'user', component: () => import('../pages/User') },
  {
    path: '/page/:id',
    name: 'page',
    component: () => import('../pages/Page'),
    props: true,
  },
  {
    path: '/user/:id',
    name: 'userdetail',
    component: () => import('../pages/Profile'),
    props: true,
  },
];

export default function () {
  return createRouter({ routes, history });
}

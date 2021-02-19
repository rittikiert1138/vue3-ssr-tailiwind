const {
  createRouter,
  createMemoryHistory,
  createWebHistory,
} = require('vue-router');

const isServer = typeof window === 'undefined';

let history = isServer ? createMemoryHistory() : createWebHistory();

const routes = [
  { 
    path: '/', 
    name: 'home', 
    component: () => import('../pages/Home'),
    meta: {
      reload: true,
    },
  },
  { 
    path: '/user', 
    name: 'user', 
    component: () => import('../pages/User'),
    meta: {
      reload: true,
    },
  },
  {
    path: '/user/:id',
    name: 'userdetail',
    component: () => import('../pages/Profile'),
    props: true,
    meta: {
      reload: true,
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../pages/Contact'),
    props: true,
    meta: {
      reload: true,
    },
  },
];

export default function () {
  return createRouter({ routes, history });
}

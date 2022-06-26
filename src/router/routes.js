const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }]
  },
  {
    path: '/05-componentes-asincronos',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/AsyncComponent.vue') }]
  },
  {
    path: '/06-transitions',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/transitions/TransitionsExample.vue') }]
  },

  {
    path: '/07-teleports',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/teleports/TeleportExample.vue') }]
  },
  {
    path: '/14-reactive-variables',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/composition/index.vue') }]
  },
  {
    path: '/15-watchers',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/watchers/index.vue') }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

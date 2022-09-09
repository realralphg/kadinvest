
const routes = [
  {
    path: '/',
    component: () => import('layouts/plain.vue'),
    children: [
      { path: '/', component: () => import('pages/Welcome.vue') },
      { path: '/register', component: () => import('pages/Register.vue') },
    ]
  },
  {
    path: '/hompage',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/home', component: () => import('pages/IndexPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes


const routes = [
  {
    path: '/',
    component: () => import('layouts/plain.vue'),
    children: [
      { path: '/', component: () => import('pages/Welcome.vue') },
      { path: '/register', component: () => import('pages/Register.vue') },
      { path: '/Admindashboard', component: () => import('pages/Dashboard.vue'), name:'dashboard', meta: { requireAuth: true, } },
      { path: '/login', component: () => import('pages/Auth/Login.vue'), name:'login' },
      // { path: '/signup', component: () => import('pages/Auth/Register.vue'), name:'signup'},
    ]
  },
  {
    path: '/homepage',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/home', component: () => import('pages/IndexPage.vue') },
    ]
  },
  {
    path: '/otherpages',
    component: () => import('layouts/Sponsors.vue'),
    children: [
      { path: '/sponsor', component: () => import('pages/Sponsor.vue') },
      { path: '/join', component: () => import('pages/Join.vue') },
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

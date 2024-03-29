
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [

      {
        path: 'bibles/default/:languageCodeHL',
        component: () => import('pages/BiblesToWeigh.vue')
      },
      {
        name: 'DBSBiblesToWeigh',
        path: 'bibles/dbs/:languageCodeHL',
        component: () => import('pages/DBSBiblesToWeigh.vue')
      },
      {
        name: 'DiscoveryBibleStudy',
        path: 'dbs/:languageCodeHL1?/:languageCodeHL2?/:session?',
        component: () => import('pages/DiscoveryBibleStudy.vue')
      },
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

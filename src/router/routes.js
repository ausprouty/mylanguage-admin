
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [

      {
        path: 'bibles/default/:languageCodeHL',
        component: () => import('src/pages/BiblesToWeigh.vue')
      },
      {
        name: 'DBSBiblesToWeigh',
        path: 'bibles/dbs/:languageCodeHL',
        component: () => import('src/pages/DBSBiblesToWeigh.vue')
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

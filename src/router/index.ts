import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/publicar-anuncio',
      name: 'publish-ad',
      component: () => import('../views/publish-ad/AdPostView.vue')
    },
    {
      path: '/publicar-anuncio/inmobiliaria',
      name: 'publish-ad-real-estate',
      component: () => import('../views/publish-ad/real-estate/RealEstate.vue')
    }
  ]
})

export default router

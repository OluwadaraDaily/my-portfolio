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
      path: '/projects/:slug',
      name: 'project',
      component: () => import('../views/ProjectPage/ProjectPage.vue')
    }
  ],
  scrollBehavior: () => ({ top: 0 })
})

export default router

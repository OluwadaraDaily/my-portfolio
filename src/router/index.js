import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects/:slug',
      name: 'project',
      component: () => import('../views/ProjectPage/ProjectPage.vue')
    },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ],
  scrollBehavior: (to, from, savedPosition) =>
    savedPosition || (to.hash ? { el: to.hash } : { top: 0 })
})

export default router

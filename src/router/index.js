import { createRouter } from 'vue-router'
import Home from '../views/Home/Home.vue'
// Not lazy: prerendered project pages need this CSS in the first paint.
import ProjectPage from '../views/ProjectPage/ProjectPage.vue'

// History is passed in so the same routes work in the browser and in the build-time prerender.
export default (history) =>
  createRouter({
    history,
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/projects/:slug',
        name: 'project',
        component: ProjectPage
      },
      { path: '/:pathMatch(.*)*', redirect: '/' }
    ],
    scrollBehavior: (to, from, savedPosition) =>
      savedPosition || (to.hash ? { el: to.hash } : { top: 0 })
  })

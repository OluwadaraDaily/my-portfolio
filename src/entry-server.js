import { createSSRApp } from 'vue'
import { createMemoryHistory } from 'vue-router'
import { renderToString } from 'vue/server-renderer'
import App from './App.vue'
import createRouter from './router'
import { projects } from './data/projects'

export const routes = ['/', ...projects.map((p) => `/projects/${p.slug}`)]

export async function render(url) {
  const app = createSSRApp(App)
  const router = createRouter(createMemoryHistory())
  app.use(router)
  await router.push(url)
  await router.isReady()
  return renderToString(app)
}

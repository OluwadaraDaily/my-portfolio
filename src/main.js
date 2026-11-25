import { createApp, createSSRApp } from 'vue'
import { createWebHistory } from 'vue-router'
import App from './App.vue'
import createRouter from './router'

import './assets/main.css'

// Hydrate the prerendered HTML (scripts/prerender.js); the dev server has none, so mount fresh.
const app = (document.getElementById('app').hasChildNodes() ? createSSRApp : createApp)(App)
const router = createRouter(createWebHistory(import.meta.env.BASE_URL))

app.use(router)

router.isReady().then(() => app.mount('#app'))

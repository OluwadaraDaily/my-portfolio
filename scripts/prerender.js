// Writes static HTML for every route into dist/ so the first paint doesn't wait for JS.
// Runs after `vite build` and `vite build --ssr src/entry-server.js --outDir dist-ssr`.
import fs from 'node:fs'
import { render, routes } from '../dist-ssr/entry-server.js'

const mount = '<div id="app"></div>'
const entry = /<script type="module" crossorigin src="([^"]+)"><\/script>/
let template = fs.readFileSync('dist/index.html', 'utf8')
if (!template.includes(mount) || !entry.test(template))
  throw new Error('dist/index.html is missing the app mount or the entry script')

// The HTML is already rendered, so hydrate after load and keep the bundle off the LCP path.
template = template.replace(
  entry,
  `<script type="module">const go = () => import('$1');
document.readyState === 'complete' ? go() : addEventListener('load', go)</script>`
)

for (const url of routes) {
  const html = template.replace(mount, `<div id="app">${await render(url)}</div>`)
  // projects/x.html, not projects/x/index.html: hosts serve it at /projects/x without a slash redirect.
  const file = `dist${url === '/' ? '/index' : url}.html`
  fs.mkdirSync(file.slice(0, file.lastIndexOf('/')), { recursive: true })
  fs.writeFileSync(file, html)
  console.log('prerendered', file)
}

fs.rmSync('dist-ssr', { recursive: true })

/**
 * Static prerender: build already done → serve dist → dump each SEO route HTML.
 * Writes dist/<route>/index.html so static hosts serve fully rendered content.
 */
import { spawn } from 'node:child_process'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const PORT = Number(process.env.PRERENDER_PORT || 4173)
const BASE = `http://127.0.0.1:${PORT}`

const GUIDE_SLUGS = [
  'ritual-de-sueno',
  'melatonina-para-dormir',
  'rutina-nocturna-bienestar',
  'gomitas-para-dormir',
  'recuperacion-muscular-natural',
  'parches-para-dolor-muscular',
  'aceite-de-magnesio-para-masajes',
  'citrato-de-magnesio-guia',
  'magnesio-y-musculos',
  'suplementos-diarios-guia',
  'colageno-hidrolizado',
  'vitaminas-del-complejo-b',
  'ashwagandha-estres',
  'probioticos-y-zinc',
  'betaglucanos-ganoderma',
  'omega-3-y-salud',
  'cafe-con-colageno',
]

const EEAT_SLUGS = [
  'nosotros',
  'contacto',
  'politica-de-privacidad',
  'terminos-y-condiciones',
  'devoluciones-y-cambios',
  'aviso-medico',
  'politica-editorial',
]

const PRODUCT_SLUGS = [
  'lullabites',
  'herbpads',
  'aceite-magnesio',
  'colageno-uva',
  'vitamina-b-complex',
  'omega-369-magnesio',
  'ashwagandha-ksm',
  'probioticos-zinc',
  'capuchino-colageno',
  'betaglucanos-ganoderma',
]

const ROUTES = [
  '/',
  '/catalogo',
  '/guias',
  ...GUIDE_SLUGS.map((slug) => `/guias/${slug}`),
  ...EEAT_SLUGS.map((slug) => `/${slug}`),
  ...PRODUCT_SLUGS.map((slug) => `/producto/${slug}`),
]

function startPreview() {
  const child = spawn('npx', ['vite', 'preview', '--host', '127.0.0.1', '--port', String(PORT), '--strictPort'], {
    cwd: root,
    stdio: ['ignore', 'pipe', 'pipe'],
    env: { ...process.env },
  })
  child.stdout.on('data', () => {})
  child.stderr.on('data', () => {})
  return child
}

async function waitForServer(url, attempts = 40) {
  for (let i = 0; i < attempts; i += 1) {
    try {
      const res = await fetch(url)
      if (res.ok) return
    } catch {
      /* retry */
    }
    await new Promise((r) => setTimeout(r, 250))
  }
  throw new Error(`Preview server not ready: ${url}`)
}

async function prerender() {
  const puppeteerMod = await import('puppeteer').catch(() => null)
  if (!puppeteerMod) {
    console.error('puppeteer is required: npm i -D puppeteer')
    process.exit(1)
  }
  const puppeteer = puppeteerMod.default
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  })
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 900 })
  await page.setUserAgent('BotanePrerender/1.0 (+https://botane.presentto.online)')

  let ok = 0
  for (const route of ROUTES) {
    try {
      await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle0', timeout: 30000 })
      await page.waitForSelector('h1', { timeout: 10000 })
      await page.waitForFunction(() => !document.body.innerText.includes('Cargando…'), { timeout: 8000 }).catch(() => {})
      const html = await page.content()
      const outDir = route === '/' ? dist : path.join(dist, route.replace(/^\//, ''))
      await mkdir(outDir, { recursive: true })
      await writeFile(path.join(outDir, 'index.html'), html, 'utf8')
      ok += 1
      console.log(`prerendered ${route}`)
    } catch (err) {
      console.warn(`skip ${route}: ${err.message}`)
    }
  }

  await browser.close()
  console.log(`Prerender done: ${ok}/${ROUTES.length}`)
  return ok === ROUTES.length
}

async function main() {
  const preview = startPreview()
  try {
    await waitForServer(`${BASE}/`)
    const success = await prerender()
    if (!success) process.exitCode = 1
  } finally {
    preview.kill('SIGTERM')
    setTimeout(() => process.exit(process.exitCode || 0), 400).unref()
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

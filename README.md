# Botané · tienda online

Tienda de Botané construida con React, Vite y React Router.

## Incluye

- Inicio, catálogo y fichas individuales de producto.
- 10 productos con fotografías reales optimizadas en WebP.
- Galería de imágenes por producto (Herbpads y otros con varias vistas).
- Pack completo de cuatro productos por `$160.000` (ahorro de `$32.000`).
- Carrito persistente con `localStorage`.
- `/pedido` con resumen del carrito y formulario de envío a Formspree (texto plano).
- **Pago directo con Mercado Pago** para compras individuales (cantidad 1) mediante links `mpago.li`.
- **Carrito y contra entrega** → pedido en texto plano a Formspree.
- WhatsApp `+57 314 457 2008`.
- Ubicación: Funza, Cra 19 Bis #9-15.
- Diseño **mobile-first** (base = móvil, mejoras en tablet/desktop).
- SEO ultra: Hub & Spoke (`/guias` + 17 guías en 3 silos), 7 páginas EEAT, schema avanzado, sitemap-index.
- Prerender estático de 37 rutas SEO en build (`npm run prerender`).
- Configuración para Netlify y Vercel.

## Flujo de pagos

| Origen | Método |
|---|---|
| Ficha de producto, cantidad **1** | Redirección directa al link Mercado Pago del producto |
| Ficha de producto, cantidad **> 1** | Solo “Agregar al carrito” (aviso en UI) |
| Carrito (`/pedido`) | Formulario → Formspree → pago **contra entrega** |
| Combo / pack | Solo vía carrito → Formspree |

## Requisitos

- Node.js 20.19 o superior.
- npm 9 o superior.

## Ejecutar localmente

```bash
npm install
npm run dev
```

Abrir la URL que indique Vite, normalmente `http://localhost:5173`.

## Crear build de producción

```bash
npm run build
npm run preview
```

El resultado queda en `dist/`.

### Build SEO (prerender)

```bash
npm run prerender
```

Genera `dist/` e inyecta HTML estático por ruta (`/guias/:slug`, EEAT, productos, home, catálogo) con títulos, canonical y JSON-LD ya renderizados. Requiere Puppeteer (devDependency).

## Desplegar

### Netlify

1. Subir este repositorio o el ZIP.
2. Build command: `npm run prerender` (ya en `netlify.toml`).
3. Publish directory: `dist`.
4. `netlify.toml` y `public/_redirects` ya contienen el fallback para las rutas React.

### Vercel

1. Importar el proyecto.
2. Framework preset: Vite.
3. Build command: `npm run prerender`.
4. Output directory: `dist`.
5. `vercel.json` ya contiene rewrite SPA + `cleanUrls` para servir el prerender.

## Dominio y SEO

Dominio canónico: **`https://botane.presentto.online`**

Ya configurado en:

- `index.html` (canonical, OG, Twitter, JSON-LD Organization/WebSite/ItemList)
- `public/sitemap-index.xml` + `sitemap-pages.xml` + `sitemap-products.xml` + `sitemap-guides.xml` (+ `sitemap.xml` completo)
- `public/robots.txt` (índice de sitemaps + `Disallow` en `/pedido` y `/confirmacion`)
- `src/lib/seo.js` (`SITE_URL`, metas dinámicas, Article/FAQ/Breadcrumb)
- Favicon y apple-touch-icon en `public/`

## Formspree y WhatsApp

- Formspree (carrito / contra entrega): `https://formspree.io/f/xrpbkjwn`
- WhatsApp: `https://wa.me/573144572008`

El formulario envía datos del cliente, dirección, método de pago, productos y cantidades, subtotal, descuento, total y una factura completa en texto plano mediante el campo `invoice`.

Los links de Mercado Pago por producto están en `src/data/products.js` (campo `mpLink`).

## Variables de entorno

Copiar `.env.example` a `.env` si es necesario:

- `VITE_FORM_ENDPOINT` — endpoint Formspree (default `https://formspree.io/f/xrpbkjwn`)
- `VITE_WHATSAPP_NUMBER` — solo dígitos con código de país

## Archivos importantes

- `src/data/products.js`: catálogo, precios, imágenes y links Mercado Pago.
- `src/data/combos.js`: pack / combo.
- `src/components/CheckoutForm.jsx`: checkout carrito → Formspree.
- `src/pages/ProductPage.jsx`: compra individual MP + agregar al carrito.
- `src/styles/`: CSS mobile-first (`base`, `glass`, `animations`, `components`, `content`).
- `src/data/guides.js`: 17 guías Hub & Spoke.
- `src/data/silos.js` + `src/lib/internalLinks.js`: silos estrictos.
- `src/lib/eeat.js`: páginas de confianza.
- `scripts/prerender.mjs`: prerender SEO (`npm run prerender`).
- `assets/IMG/products/`: imágenes WebP por producto.
- `public/`: SEO (sitemap-index por tipo), manifest y reglas de hosting.

## Estado

Build + prerender verificados (`npm run prerender`, 37/37 rutas).

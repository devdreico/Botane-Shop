# Plan de implementación — Botané

## Objetivo

Tienda online ligera para Botané, con estética natural, checkout de baja fricción, pagos directos por producto y diseño mobile-first.

## Arquitectura definida

- React + Vite, SPA con `react-router-dom`.
- `/` — inicio y presentación de Botané en Funza.
- `/catalogo` — 10 productos, carrito y oferta de combo.
- `/producto/:slug` — detalle, galería, compra individual (Mercado Pago) o agregar al carrito.
- `/guias` · `/guias/:slug` — biblioteca Hub & Spoke (3 hubs, 14 spokes).
- `/nosotros`, `/contacto`, `/politica-de-privacidad`, `/terminos-y-condiciones`, `/devoluciones-y-cambios`, `/aviso-medico`, `/politica-editorial` — EEAT.
- `/pedido` — resumen del carrito y formulario de datos de contacto y envío.
- `/confirmacion` — pantalla de éxito tras enviar el pedido.
- Carrito persistido en `localStorage`, sin backend propio.
- Datos de productos en `src/data/products.js` (precio, imágenes WebP, `mpLink`).
- Logo en `assets/IMG/botane-logo-fondo-transparente.png`.

## Flujo de compra

### Compra individual (Mercado Pago)

1. Cliente abre la ficha con cantidad **1**.
2. Botón **Pagar con MP** abre el link `mpago.li` del producto.
3. Pago gestionado por Mercado Pago; entrega coordinada por WhatsApp.

### Carrito / combo / contra entrega

1. Cliente agrega productos (cantidades libres) o el pack completo.
2. `/pedido` muestra resumen, descuento de combo y total.
3. Formulario (nombre, celular CO, ciudad, dirección) → `POST` JSON a Formspree `https://formspree.io/f/xrpbkjwn` con factura en texto plano (`invoice`).
4. Se limpia el carrito y se navega a `/confirmacion?metodo=contra-entrega`.
5. Confirmación ofrece WhatsApp.

### Cantidades > 1 en ficha

- El botón MP se deshabilita con aviso: usar carrito (contra entrega vía Formspree).

## Fases

### Fase 1 — Base funcional (realizada)

- App React/Vite, sistema visual, rutas, catálogo, carrito, combo, checkout Formspree.

### Fase 2 — Contenido real (realizada)

- 10 productos con precios y copy.
- Pack rehabilitante `$160.000` (ahorro real `$32.000`).
- WhatsApp real, envío gratis, logo real.

### Fase 3 — Pagos e imágenes (realizada)

- Links Mercado Pago por producto (`mpLink`) para compra individual qty=1.
- Formspree unificado en `xrpbkjwn` solo para carrito/contra entrega.
- Extracción y optimización de imágenes a WebP en `assets/IMG/products/<slug>/`.
- Eliminación de `VITE_MP_PAYMENT_LINK` y endpoint antiguo.

### Fase 4 — Mobile-first (realizada)

- CSS reescrito base = móvil; `min-width: 561px` / `901px` para tablet/desktop.
- Proporciones de tarjeta 4:5, tipografía con `clamp()`, touch targets ≥44px.
- Inputs a 16px (sin zoom iOS), sticky CTA con safe-area, drawer a ancho completo en móvil.
- `backdrop-filter` reducido en móvil (solo desktop con pointer fino).
- Lluvia: menos streaks en móvil; respeto a `prefers-reduced-motion`.

### Fase 5 — SEO ultra (realizada)

- Dominio canónico `https://botane.presentto.online` en sitemap, robots, canonical, OG y JSON-LD.
- `src/lib/seo.js`: metas dinámicas por ruta (title, description, canonical, OG, Twitter, JSON-LD).
- JSON-LD Product + BreadcrumbList en fichas; ItemList en catálogo; Organization + WebSite en inicio.
- `/pedido` y `/confirmacion` con `noindex`.
- Favicon, apple-touch-icon y manifest con iconos.

### Fase 6 — SEO ultra Hub & Spoke (realizada)

- Arquitectura Hub & Spoke con silos estrictos (`src/data/silos.js`): descanso, recuperación, suplementos.
- 17 guías (`src/data/guides.js`): 3 hubs + 14 spokes, FAQ, fuentes, entity Wikipedia.
- Rutas `/guias` e `/guias/:slug` + 7 páginas EEAT (`/nosotros`, `/contacto`, privacidad, términos, devoluciones, aviso médico, editorial).
- Schema: Article/BlogPosting + FAQPage + BreadcrumbList en guías; FAQ en fichas; CollectionPage en índice.
- Enlaces internos solo dentro del silo (`src/lib/internalLinks.js`); CTA producto en guías; guías del silo en fichas.
- Sitemap index por tipo + sitemap.xml completo; robots apunta al index.
- Prerender estático de 37 rutas con Puppeteer (`scripts/prerender.mjs`, `npm run prerender`).
- Lazy loading de rutas (`React.lazy` + Suspense), nav/footer “Guías”, skip-link, `content.css`.

### Fase 7 — Pendientes (no ejecutada)

- Configurar Formspree (correo receptor, autorespuesta, plantilla).
- Analítica y eventos de conversión.
- Control real de inventario.
- Tests automáticos y lint.
- Validar Formspree con pedido de prueba; GSC con `sitemap-index.xml`.
- Confirmar en navegador los links `mpago.li` (HEAD/bot recibe 403; abrir en browser real).

### Infra deploy (realizada)

- `netlify.toml`: build `npm run prerender`, publish `dist`.
- Vercel: usar build command `npm run prerender` + `cleanUrls` en `vercel.json`.

## Pendientes críticos

- Validar endpoint Formspree con un pedido de prueba (endpoint responde; falta correo real).
- Links `mpago.li` verificados HTTP 200 → Mercado Pago (10/10 con UA de navegador).
- En Google Search Console: agregar propiedad `botane.presentto.online` y enviar `sitemap-index.xml`.
- En Vercel: fijar Build command = `npm run prerender`.

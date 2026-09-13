# Botané · tienda online

Tienda MVP de Botané construida con React, Vite y React Router.

## Incluye

- Inicio, catálogo y fichas individuales de producto.
- Cuatro productos MVP con imágenes locales.
- Galería de imágenes para Herbpads.
- Pack completo de cuatro productos por `$160.000`.
- Carrito persistente con `localStorage`.
- Checkout directo con envío a Formspree.
- WhatsApp `+57 314 457 2008`.
- SEO base, `robots.txt`, `sitemap.xml`, manifest y reglas SPA.
- Configuración para Netlify y Vercel.

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

## Desplegar

### Netlify

1. Subir este repositorio o el ZIP.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. `netlify.toml` y `public/_redirects` ya contienen el fallback para las rutas React.

### Vercel

1. Importar el proyecto.
2. Framework preset: Vite.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. `vercel.json` ya contiene el rewrite de SPA.

## Antes de publicar el dominio

Reemplazar `https://TU-DOMINIO.com/` en estos tres lugares:

- `public/sitemap.xml`
- `public/robots.txt`
- `index.html` dentro del JSON-LD

También conviene verificar en Formspree que el correo receptor esté confirmado y realizar un pedido de prueba.

## Formspree y WhatsApp

- Formspree: `https://formspree.io/f/xvkojovn`
- WhatsApp: `https://wa.me/573144572008`

El formulario envía datos del cliente, dirección, método de pago, productos, subtotal, descuento, total y una factura completa en texto plano mediante el campo `invoice`.

## Archivos importantes

- `src/main.jsx`: productos, carrito, checkout y rutas.
- `src/styles.css`: sistema visual responsive.
- `assets/IMG/`: logo y fotografías reales.
- `public/`: SEO, manifest y reglas de hosting.
- `dist/`: build generado para producción.

## Estado

Build verificado con `npm run build`.

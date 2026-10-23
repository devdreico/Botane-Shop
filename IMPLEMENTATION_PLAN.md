# Plan de implementación — Botané

## Objetivo

Tienda online ligera para Botané, con estética natural, checkout de baja fricción, pago contra entrega y diseño mobile-first.

## Arquitectura definida

- React + Vite, SPA con `react-router-dom`.
- `/` — inicio y presentación de Botané en Funza.
- `/catalogo` — 10 productos, carrito y oferta de combo.
- `/producto/:slug` — detalle, galería y agregar al carrito (pago contra entrega).
- `/guias` · `/guias/:slug` — biblioteca Hub & Spoke (3 hubs, 14 spokes).
- `/nosotros`, `/contacto`, `/politica-de-privacidad`, `/terminos-y-condiciones`, `/devoluciones-y-cambios`, `/aviso-medico`, `/politica-editorial` — EEAT.
- `/pedido` — resumen del carrito y formulario de datos de contacto y envío.
- `/confirmacion` — pantalla de éxito tras enviar el pedido.
- Carrito persistido en `localStorage`, sin backend propio.
- Datos de productos en `src/data/products.js` (precio, imágenes WebP).
- Logo en `assets/IMG/botane-logo-fondo-transparente.png`.

## Flujo de compra

### Compra directa (contra entrega)

1. Cliente abre la ficha con cantidad **1**.
2. El pedido se registra en el formulario de Formspree `https://formspree.io/f/xrpbkjwn` o por WhatsApp.
3. Pago contra entrega al recibir el producto; entrega coordinada por WhatsApp.

### Carrito / combo / contra entrega

1. Cliente agrega productos (cantidades libres) o el pack completo.
2. `/pedido` muestra resumen, descuento de combo y total.
3. Formulario (nombre, celular CO, ciudad, dirección) → `POST` JSON a Formspree `https://formspree.io/f/xrpbkjwn` con factura en texto plano (`invoice`).
4. Se limpia el carrito y se navega a `/confirmacion?metodo=contra-entrega`.
5. Confirmación ofrece WhatsApp.

### Cantidades > 1 en ficha

- El botón de compra dirige al carrito (contra entrega vía Formspree).

## Fases

### Fase 1 — Base funcional (realizada)

- App React/Vite, sistema visual, rutas, catálogo, carrito, combo, checkout Formspree.

### Fase 2 — Contenido real (realizada)

- 10 productos con precios y copy.
- Pack rehabilitante `$160.000` (ahorro real `$32.000`).
- WhatsApp real, envío gratis, logo real.

### Fase 3 — Pagos e imágenes (realizada)

- Los enlaces de pago directo por producto fueron eliminados; método de pago único contra entrega.
- Formspree unificado en `xrpbkjwn` para todos los pedidos (pago contra entrega).
- Extracción y optimización de imágenes a WebP en `assets/IMG/products/<slug>/`.
- Eliminación de variables y endpoints de pago directo heredados.

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
- Confirmar en navegador el envío del formulario a Formspree `https://formspree.io/f/xrpbkjwn`.

### Infra deploy (realizada)

- `netlify.toml`: build `npm run prerender`, publish `dist`.
- Vercel: usar build command `npm run prerender` + `cleanUrls` en `vercel.json`.

## Pendientes críticos

- Validar endpoint Formspree con un pedido de prueba (endpoint responde; falta correo real).
- Endpoint Formspree `https://formspree.io/f/xrpbkjwn` verificado; método de pago único contra entrega (los enlaces de pago directo fueron eliminados).
- En Google Search Console: agregar propiedad `botane.presentto.online` y enviar `sitemap-index.xml`.
- En Vercel: fijar Build command = `npm run prerender`.

## Plan de mejora y maximización (propuesta)

### Objetivo

Actualizar Botané como tienda y punto de entrada a un ecosistema digital de salud: catálogo en `https://botane.presentto.online/productos`, fichas cómodas en móvil, identidad natural más cálida, consentimiento de cookies claro y accesos verificables a WhatsApp, Instagram, Paceform y Saniver.

### Fase 1 — Ruta pública del catálogo y SEO (prioridad P0)

- Convertir `/productos` en la ruta principal del catálogo y mostrar el nombre «Productos» o «Catálogo» de forma consistente en navegación y textos.
- Mantener `/catalogo` como compatibilidad: redirección HTTP permanente (301) en Netlify y Vercel, más fallback de SPA para visitas ya cargadas en el cliente. No dejar ambas URLs indexables.
- Actualizar enlaces internos, migas, canonical, Open Graph, JSON-LD, SearchAction, sitemap y rutas de prerender para que apunten a `/productos`.
- Conservar estables las fichas `/producto/:slug` y su canonical individual.
- Criterio de aceptación: `/productos` carga directamente y aparece en sitemap/prerender; `/catalogo` llega a `/productos`; no quedan enlaces internos ni canonical al catálogo antiguo.

### Fase 2 — Robustez técnica y móvil de las fichas (prioridad P0)

- Auditar las 10 fichas en anchos de 320, 360, 390 y 768 px: imagen principal y galería, texto largo, beneficios, precio, selector de cantidad y CTA.
- Corregir desbordamientos en el contenedor real que los produce; revisar `min-width`, columnas grid/flex, dimensiones intrínsecas y safe-area. Para fotos de producto, priorizar imagen completa (`object-fit: contain`) cuando el recorte o el zoom saque el empaque de cuadro.
- Mantener proporciones estables, `max-width: 100%`, controles táctiles utilizables y CTA sin empujar el ancho de página. Comprobar también carga y cambio de imagen de la galería.
- Corregir tokens de tema defectuosos, incluido `--glass-border` autorreferenciado en el tema claro, y comprobar contraste/foco visible en ambos temas.
- Criterio de aceptación: ninguna ficha genera scroll horizontal ni corta el producto en los anchos probados; acciones y galería siguen operables con teclado y tacto.

### Fase 3 — Dirección visual Botané (prioridad P1)

- Definir una paleta coherente: verde bosque/oliva con matiz ocre y tierra, crema claro para superficies, tinta gris-negruzca para texto y un acento de contraste reservado para acciones. Documentar los tokens para claro y oscuro.
- Dejar el tema claro como valor inicial independientemente de la preferencia del sistema; conservar el tema elegido explícitamente por la persona y mantener el selector manual.
- Crear un hero de inicio con fotografía real de stock relacionada con bienestar natural. Usar una imagen con licencia comprobable, guardarla optimizada localmente, definir recorte por breakpoint, texto alternativo y una alternativa visual si no carga.
- Extender glassmorphism de forma selectiva a navegación, superficies y botones: transparencia, borde fino, blur moderado, sombras y estados hover/focus/active. Mantener contraste, legibilidad y fallback sin `backdrop-filter`.
- Añadir animaciones breves y funcionales a entrada de contenido, CTA y transiciones; respetar `prefers-reduced-motion` y evitar trabajo costoso en móvil.
- Criterio de aceptación: identidad cálida consistente en inicio, catálogo, fichas y checkout; el contenido continúa legible con imagen y blur desactivados y con movimiento reducido.

### Fase 4 — Cookies, privacidad y consentimiento (prioridad P0 antes de analítica)

- Crear una política accesible en `/politica-de-cookies` y enlazarla desde el pie, el aviso de consentimiento y la política de privacidad. Explicar categorías, finalidad, duración, terceros y cómo cambiar la decisión.
- Añadir un panel inicial con opciones equivalentes y claras para aceptar, rechazar las no esenciales o configurar. Las cookies estrictamente necesarias siguen disponibles; analítica, publicidad o contenido no esencial no se activa antes del consentimiento correspondiente.
- Guardar la elección y su versión/fecha, permitir reabrir preferencias desde el pie y ofrecer retirada del consentimiento. No presentar el banner de nuevo en cada visita sin motivo.
- Incluir la nueva página en rutas, SEO, footer y prerender. Revisar texto y tratamiento con asesoría local antes de publicar; no asumir que una plantilla equivale a cumplimiento legal.
- Criterio de aceptación: la elección persiste, se puede modificar y se verifica que los scripts/cookies no esenciales esperan autorización.

### Fase 5 — Contacto y ecosistema externo (prioridad P1)

- Verificar WhatsApp con el número `+57 314 457 2008`; añadir acceso flotante accesible, sin cubrir el CTA de compra ni controles del móvil.
- Corregir Instagram a `https://www.instagram.com/botanehealthco/` y actualizar handle, etiquetas accesibles y menciones visibles.
- Añadir enlaces externos identificables a `https://paceform.presentto.online` (tienda de running/deporte) y `https://saniver.presentto.online` (noticias, avances, aplicaciones medicinales y productos de salud e higiene). Presentarlos como sitios relacionados, sin sugerir que son páginas internas de Botané.
- Usar enlaces seguros al abrir pestaña nueva, validar destinos antes del lanzamiento y comprobar que no rompan navegación ni datos estructurados.
- Criterio de aceptación: cada destino se abre correctamente en móvil/escritorio, se identifica su propósito y WhatsApp conserva un área táctil suficiente.

### Fase 6 — Validación de lanzamiento y mejora continua

- Ejecutar `npm run lint` y `npm run prerender`; comprobar el HTML renderizado, canonical, redirects y sitemap para `/productos`, `/politica-de-cookies` y las fichas.
- Revisar manualmente inicio, catálogo y una muestra representativa de fichas en móvil y escritorio; probar carrito, checkout, consentimiento, tema claro/oscuro, foco de teclado y movimiento reducido.
- Medir rendimiento de la imagen del hero y fichas (peso, formatos y carga), además de eventos de catálogo, ficha, añadir al carrito, WhatsApp y salidas al ecosistema. Activar analítica solo tras consentimiento.
- Actualizar Search Console y reenviar sitemap después del despliegue; vigilar errores 404, indexación duplicada y conversiones durante la transición.

### Orden recomendado

1. Resolver rutas canónicas y redirecciones para fijar el destino público.
2. Corregir las fichas móviles y tokens compartidos.
3. Implementar paleta, tema claro, hero, superficies y movimiento.
4. Publicar política y consentimiento antes de activar analítica.
5. Actualizar WhatsApp, Instagram y enlaces Paceform/Saniver.
6. Ejecutar validación completa y seguimiento de SEO/rendimiento.

### Estado de implementación — 2026-10-23

- **Fase 1:** implementada en el código. `/productos` es la ruta principal; `/catalogo` conserva compatibilidad con redirect 301 configurado para Netlify y Vercel. Rutas internas, schema, SearchAction, sitemap y prerender apuntan al catálogo nuevo.
- **Fase 2:** ajustes responsive de imágenes, grid y galería implementados; tokens corregidos. Falta revisar manualmente las 10 fichas en los anchos definidos para confirmar el criterio visual.
- **Fase 3:** implementados hero con foto WebP local, paleta bosque/oliva/crema, tema claro inicial, superficies glass y animaciones respetando movimiento reducido.
- **Fase 4:** política y panel de preferencias implementados. El sitio no carga analítica externa actualmente. El texto legal debe recibir revisión local antes del lanzamiento.
- **Fase 5:** WhatsApp, Instagram `@botanehealthco`, Paceform y Saniver enlazados. Paceform respondió 200; Saniver respondió 404 al verificarlo y requiere publicación del sitio. Instagram limitó la verificación automatizada con 429.
- **Fase 6:** `npm run lint`, `npm run build` y `git diff --check` pasan. `npm run prerender` construye el bundle, pero no genera HTML por ruta porque Chrome no está instalado en este contenedor. Las redirecciones HTTP y cambios de indexación deben confirmarse tras el despliegue.

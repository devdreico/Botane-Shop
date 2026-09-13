# Plan de implementación — Botané

## Objetivo

Construir una tienda online ligera para Botané, con estética natural, tres experiencias principales y un checkout de baja fricción para clientes que llegan directamente a un producto.

## Arquitectura definida

- React + Vite.
- SPA con `react-router-dom`.
- `/` — inicio y presentación de Botané en Funza.
- `/catalogo` — cuatro productos, carrito y oferta de combo.
- `/producto/:slug` — detalle de cada producto y compra directa.
- Carrito persistido en `localStorage`, sin backend propio.
- Formulario de pedido enviado mediante `POST` a Formspree: `https://formspree.io/f/xvkojovn`.
- Datos de productos centralizados en `src/main.jsx` para poder cambiar catálogo, precio e imágenes desde un solo sitio.
- Logo conectado desde `assets/IMG/botane-logo-fondo-transparente.png`.

## Flujo de compra

1. El cliente llega a inicio, catálogo o directamente a un producto.
2. Puede agregar unidades al carrito o usar “Comprar ahora”.
3. El carrito calcula subtotales y activa automáticamente el Pack rehabilitante cuando contiene los cuatro productos, aplicando un ahorro de `$12.000`.
4. El formulario solicita teléfono, correo, nombre, apellido, documento, etiquetas, notas, departamento, dirección, entrega en oficina y método de pago.
5. Se envía a Formspree con el resumen de productos, total y datos del pedido.
6. Se muestra confirmación y un acceso inmediato a WhatsApp.

## Fases recomendadas

### Fase 1 — Base funcional (realizada)

- Crear la aplicación React/Vite.
- Definir sistema visual beige, verde, tipografía editorial y componentes reutilizables.
- Implementar las tres rutas principales.
- Crear catálogo inicial con cuatro productos editables.
- Implementar carrito persistente, cantidades, eliminación y combo.
- Implementar checkout directo y formulario Formspree.
- Añadir enlaces de WhatsApp, promesa de envíos y sección de productos limitados.

### Fase 2 — Contenido real (realizada)

- Cargar los cuatro productos MVP: Lullabites ($50.000), Herbpads ($40.000), Aceite de magnesio ($37.000) y Citrato de magnesio ($45.000).
- Configurar el Pack rehabilitante completo en $160.000, con ahorro de $12.000 frente a la compra individual.
- Conectar el WhatsApp real `+57 314 457 2008` en header, footer, inicio, fichas y confirmación.
- Mostrar envío gratis, entrega en menos de 5 días y pago contra entrega en los puntos principales de conversión.
- Conectar el logo real disponible en `assets/IMG/`.

### Fase 3 — Conversión y operación

- Configurar en Formspree el correo receptor, autorespuesta y plantilla de notificación.
- Añadir analítica y eventos: vista de producto, agregar al carrito, inicio de checkout y pedido enviado.
- Definir mensajes de disponibilidad y control real de inventario.
- Agregar política de tratamiento de datos, términos, cambios y devoluciones.
- Configurar dominio, favicon, Open Graph y SEO por producto.

### Fase 4 — Validación antes de publicar

- Probar móvil, tablet y escritorio.
- Probar el flujo con carrito vacío, un producto, cantidades múltiples y combo.
- Confirmar que Formspree recibe todos los campos con nombres claros.
- Revisar accesibilidad básica: foco, contraste, labels y navegación por teclado.
- Ejecutar `npm install` y `npm run build` en un entorno con acceso al registro de npm.

## Pendientes críticos

- Las fotografías reales ya están conectadas desde `assets/IMG/img PRODUCTS/`; Herbpads incluye galería de cinco vistas y el pack reutiliza las cuatro imágenes reales.
- Validar en Formspree que el endpoint acepte AJAX y que el correo receptor, autorespuesta y plantilla de notificación estén configurados.
- La versión actual no procesa pagos en línea: registra la preferencia “Pago contra entrega” o “Pago anticipado” y deja la confirmación operativa para el contacto con Botané.

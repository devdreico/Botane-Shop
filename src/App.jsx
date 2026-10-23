import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CartProvider } from './cart/CartContext'

const Home = lazy(() => import('./pages/Home'))
const Catalog = lazy(() => import('./pages/Catalog'))
const ProductPage = lazy(() => import('./pages/ProductPage'))
const Checkout = lazy(() => import('./pages/Checkout'))
const Confirmation = lazy(() => import('./pages/Confirmation'))
const GuidesIndex = lazy(() => import('./pages/guides/GuidesIndex'))
const GuidePage = lazy(() => import('./pages/guides/GuidePage'))
const EeatPage = lazy(() => import('./pages/eeat/EeatPage'))

const EEAT_SLUGS = [
  'nosotros',
  'contacto',
  'politica-de-privacidad',
  'politica-de-cookies',
  'terminos-y-condiciones',
  'devoluciones-y-cambios',
  'aviso-medico',
  'politica-editorial',
]

function RouteFallback() {
  return (
    <div className="route-fallback container" role="status" aria-live="polite">
      Cargando…
    </div>
  )
}

export default function App() {
  return (
    <CartProvider>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Catalog />} />
          <Route path="/catalogo" element={<Navigate to="/productos" replace />} />
          <Route path="/producto/:slug" element={<ProductPage />} />
          <Route path="/pedido" element={<Checkout />} />
          <Route path="/confirmacion" element={<Confirmation />} />
          <Route path="/guias" element={<GuidesIndex />} />
          <Route path="/guias/:slug" element={<GuidePage />} />
          {EEAT_SLUGS.map((slug) => (
            <Route key={slug} path={`/${slug}`} element={<EeatPage slug={slug} />} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </CartProvider>
  )
}

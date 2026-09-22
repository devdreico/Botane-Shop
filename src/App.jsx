import { Navigate, Route, Routes } from 'react-router-dom'
import { CartProvider } from './cart/CartContext'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import ProductPage from './pages/ProductPage'
import Checkout from './pages/Checkout'
import Confirmation from './pages/Confirmation'

export default function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/producto/:slug" element={<ProductPage />} />
        <Route path="/pedido" element={<Checkout />} />
        <Route path="/confirmacion" element={<Confirmation />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </CartProvider>
  )
}

import { Navigate, Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import Layout from '../components/Layout'
import CheckoutForm from '../components/CheckoutForm'
import { FREE_SHIPPING_LABEL } from '../config/store'
import { formatCOP } from '../lib/format'
import { useCartContext } from '../cart/CartContext'

export default function Checkout() {
  const { cart, order, combo, clearCart } = useCartContext()

  if (cart.length === 0) return <Navigate to="/catalogo" replace />

  return (
    <Layout>
      <section className="checkout-page container">
        <div className="checkout-intro">
          <Link to="/catalogo" className="back-link">
            ← Seguir comprando
          </Link>
          <span className="eyebrow">Pedido Botané</span>
          <h1>
            Completa tu <em>pedido.</em>
          </h1>
          <p>Revisa tus productos y déjanos tus datos. Envío gratis siempre.</p>
        </div>

        <div className="order-summary">
          <h2>Productos agregados</h2>
          {order.items.map((item) => (
            <div className="order-summary-item" key={item.id}>
              {item.image ? (
                <img src={item.image} alt="" />
              ) : (
                <div className="product-image-placeholder thumb-placeholder" aria-hidden="true">
                  <span>{item.shortName || item.name}</span>
                </div>
              )}
              <span>
                <strong>{item.name}</strong>
                <small>
                  {item.quantity} x {formatCOP(item.price)}
                </small>
              </span>
              <b>{formatCOP(item.price * item.quantity)}</b>
            </div>
          ))}
          {combo && (
            <p className="combo-note">
              <Check size={16} /> {combo.label} aplicado: ahorras {formatCOP(order.discount)}
            </p>
          )}
          <p className="combo-note ship-note">{FREE_SHIPPING_LABEL} · siempre</p>
          <div className="order-summary-total">
            <span>Total</span>
            <strong>{formatCOP(order.total)}</strong>
          </div>
        </div>

        <CheckoutForm order={order} onSuccess={() => clearCart()} />
      </section>
    </Layout>
  )
}

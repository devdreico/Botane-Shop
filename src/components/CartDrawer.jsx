import { Link } from 'react-router-dom'
import { ArrowRight, Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { FREE_SHIPPING_LABEL } from '../config/store'
import { formatCOP } from '../lib/format'

export default function CartDrawer({ cart, changeQuantity, removeFromCart, total, combo, onClose, onCatalog }) {
  return (
    <div className="drawer-layer" onClick={onClose}>
      <aside className="cart-drawer" onClick={(event) => event.stopPropagation()}>
        <div className="drawer-head">
          <div>
            <span className="eyebrow">Tu selección</span>
            <h2>Carrito</h2>
          </div>
          <button className="icon-button" onClick={onClose} aria-label="Cerrar carrito">
            <X size={21} />
          </button>
        </div>
        {cart.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-icon">
              <ShoppingBag />
            </div>
            <h3>Tu carrito está vacío</h3>
            <p>Descubre productos para crear tu ritual de bienestar.</p>
            <button className="button button-primary" onClick={onCatalog}>
              Explorar catálogo <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt="" />
                  <div className="cart-item-info">
                    <strong>{item.name}</strong>
                    <span>{formatCOP(item.price)}</span>
                    <div className="quantity">
                      <button onClick={() => changeQuantity(item.id, -1)} aria-label="Quitar unidad">
                        <Minus size={13} />
                      </button>
                      <b>{item.quantity}</b>
                      <button onClick={() => changeQuantity(item.id, 1)} aria-label="Agregar unidad">
                        <Plus size={13} />
                      </button>
                    </div>
                  </div>
                  <button className="remove" onClick={() => removeFromCart(item.id)} aria-label={`Eliminar ${item.name}`}>
                    <X size={15} />
                  </button>
                </div>
              ))}
            </div>
            {combo && (
              <div className="combo-note">
                <ArrowRight size={16} /> {combo.label} aplicado: ahorras {formatCOP(Math.max(0, cart.reduce((s, i) => s + i.price * i.quantity, 0) - total))}
              </div>
            )}
            <div className="combo-note ship-note">
              {FREE_SHIPPING_LABEL} siempre · unidad o múltiple
            </div>
            <div className="drawer-total">
              <span>Total</span>
              <strong>{formatCOP(total)}</strong>
            </div>
            <Link to="/pedido" className="button button-primary button-wide" onClick={onClose}>
              Completar pedido <ArrowRight size={16} />
            </Link>
            <button className="text-button" onClick={onCatalog}>
              Seguir explorando
            </button>
          </>
        )}
      </aside>
    </div>
  )
}

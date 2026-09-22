import { Link } from 'react-router-dom'
import { ArrowRight, Check, Plus } from 'lucide-react'
import { FREE_SHIPPING_LABEL } from '../config/store'

export default function ProductCard({ product, index, onAdd }) {
  return (
    <article tabIndex="0" className={`product-card accent-${product.accent}`}>
      <Link to={`/producto/${product.id}`} className="product-image">
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <div className="product-image-placeholder" aria-hidden="true">
            <span>{product.shortName}</span>
          </div>
        )}
        <span className="product-number">{String(index + 1).padStart(2, '0')}</span>
        <span className="shipping-pill">{FREE_SHIPPING_LABEL}</span>
        {product.type === 'digital' && <span className="type-pill">Digital</span>}
        <div className="product-hover">
          <span className="hover-label">Beneficios</span>
          <strong>{product.hoverTitle}</strong>
          <p>{product.hoverText}</p>
          <ul>
            {product.benefits.map((benefit) => (
              <li key={benefit}>
                <Check size={13} /> {benefit}
              </li>
            ))}
          </ul>
          <span className="hover-cta">
            Ver producto <ArrowRight size={13} />
          </span>
        </div>
      </Link>
      <div className="product-content">
        <span className="product-category">{product.category}</span>
        <Link to={`/producto/${product.id}`}>
          <h3>{product.name}</h3>
        </Link>
        <div className="product-bottom">
          <div>
            <strong>{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(product.price)}</strong>
            <span className="pay-note">{FREE_SHIPPING_LABEL} · Contra entrega</span>
          </div>
          <button className="add-button" onClick={onAdd} aria-label={`Agregar ${product.name} al carrito`}>
            <Plus size={19} />
          </button>
        </div>
      </div>
    </article>
  )
}

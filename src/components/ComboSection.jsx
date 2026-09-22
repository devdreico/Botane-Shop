import { ArrowRight, Check, Sparkles } from 'lucide-react'
import { FREE_SHIPPING_LABEL } from '../config/store'
import { formatCOP } from '../lib/format'
import Reveal from './Reveal'

export default function ComboSection({ combo, products, onAdd }) {
  if (!combo) return null
  const comboProducts = combo.productIds.map((id) => products.find((p) => p.id === id)).filter(Boolean)
  if (!comboProducts.length) return null
  const subtotal = comboProducts.reduce((sum, p) => sum + p.price, 0)
  const savings = Math.max(0, subtotal - combo.price)

  return (
    <section className="combo-section container">
      <div className="combo-copy">
        <span className="eyebrow">{combo.eyebrow}</span>
        <h2 dangerouslySetInnerHTML={{ __html: combo.headline }} />
        <p className="combo-lead">{combo.lead}</p>
        <div className="combo-pillars">
          {combo.pillars.map((pillar) => (
            <div key={pillar.index}>
              <span>{pillar.index}</span>
              <strong>{pillar.title}</strong>
              <small>{pillar.text}</small>
            </div>
          ))}
        </div>
        <p className="combo-rhythm">{combo.rhythm}</p>
        <div className="combo-offer">
          <strong>{formatCOP(combo.price)}</strong>
          <span>
            {combo.productIds.length} productos · {FREE_SHIPPING_LABEL} · Contra entrega
          </span>
        </div>
        <button className="button button-light" onClick={() => onAdd(combo)}>
          Agregar pack completo <ArrowRight size={16} />
        </button>
      </div>
      <div className="combo-stack">
        {comboProducts.map((product, i) => (
          <img key={product.id} src={product.image} alt={product.name} style={{ '--i': i }} />
        ))}
        {savings > 0 && (
          <div className="save-pill">
            Ahorras
            <br />
            <strong>{formatCOP(savings)}</strong>
          </div>
        )}
      </div>
    </section>
  )
}

export function ComboCards({ combos, products }) {
  if (!combos.length) return null
  return (
    <section className="combo-list container">
      <div className="section-heading">
        <div>
          <span className="eyebrow">
            <Sparkles size={14} /> Packs
          </span>
          <h2>Combos recomendados</h2>
        </div>
        <span className="stock-note">
          <span className="stock-dot" /> Ahorro especial
        </span>
      </div>
      <div className="combo-card-grid">
        {combos.map((combo) => {
          const items = combo.productIds.map((id) => products.find((p) => p.id === id)).filter(Boolean)
          const sum = items.reduce((acc, p) => acc + p.price, 0)
          return (
            <Reveal key={combo.id} className="combo-card">
              <span className="eyebrow">{combo.label}</span>
              <h3>{items.length} productos</h3>
              <ul>
                {items.map((p) => (
                  <li key={p.id}>
                    <Check size={14} /> {p.shortName || p.name}
                  </li>
                ))}
              </ul>
              <div className="combo-card-price">
                <strong>{formatCOP(combo.price)}</strong>
                {sum > combo.price && <del>{formatCOP(sum)}</del>}
              </div>
              <span className="combo-card-ship">{FREE_SHIPPING_LABEL} · Contra entrega</span>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

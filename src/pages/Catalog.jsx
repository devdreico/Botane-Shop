import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Leaf, Sparkles } from 'lucide-react'
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import Toast from '../components/Toast'
import Reveal from '../components/Reveal'
import ComboSection, { ComboCards } from '../components/ComboSection'
import { WHATSAPP_URL, MAX_PRODUCTS } from '../config/store'
import { PRODUCTS } from '../data/products'
import { COMBOS } from '../data/combos'
import { useCartContext } from '../cart/CartContext'

export default function Catalog() {
  const { addToCart, addComboProducts, itemsCount } = useCartContext()
  const [notice, setNotice] = useState('')

  const add = (product) => {
    addToCart(product)
    setNotice(`${product.shortName || product.name} se agregó a tu carrito`)
    window.setTimeout(() => setNotice(''), 2400)
  }

  const primaryCombo = COMBOS[0]

  return (
    <Layout>
      <section className="catalog-hero container">
        <div>
          <span className="eyebrow">
            <Leaf size={14} /> Botané
          </span>
          <h1>
            Elige tu
            <br />
            <em>bienestar.</em>
          </h1>
        </div>
        <p>Envío gratis · Menos de 5 días · Contra entrega</p>
      </section>

      <section className="catalog-section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">MVP · hasta {MAX_PRODUCTS}</span>
            <h2>Productos</h2>
          </div>
          <span className="stock-note">
            <span className="stock-dot" /> Unidades limitadas
          </span>
        </div>
        <div className="product-grid">
          {PRODUCTS.map((product, index) => (
            <Reveal key={product.id} delay={index * 60}>
              <ProductCard product={product} index={index} onAdd={() => add(product)} />
            </Reveal>
          ))}
        </div>
        <div className="limited-note">
          <Sparkles size={20} />
          <div>
            <strong>Próximamente más novedades.</strong>
            <span>Disponibilidad limitada.</span>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="underlink">
            WhatsApp <ArrowRight size={15} />
          </a>
        </div>
      </section>

      <ComboCards combos={COMBOS} products={PRODUCTS} />

      {primaryCombo && (
        <ComboSection
          combo={primaryCombo}
          products={PRODUCTS}
          onAdd={(combo) => addComboProducts(combo, (id) => PRODUCTS.find((p) => p.id === id))}
        />
      )}

      <Toast message={notice} count={itemsCount} />
    </Layout>
  )
}

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Leaf, Sparkles } from 'lucide-react'
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import Toast from '../components/Toast'
import Reveal from '../components/Reveal'
import ComboSection, { ComboCards } from '../components/ComboSection'
import { WHATSAPP_URL } from '../config/store'
import { PRODUCTS } from '../data/products'
import { COMBOS } from '../data/combos'
import { useCartContext } from '../cart/CartContext'
import { applySeo, breadcrumbJsonLd, organizationJsonLd } from '../lib/seo'
import { GUIDES } from '../data/guides'
import { SILOS, SILO_ORDER } from '../data/silos'
import { hubOf } from '../lib/internalLinks'

export default function Catalog() {
  const { addToCart, addComboProducts, itemsCount } = useCartContext()
  const [notice, setNotice] = useState('')

  useEffect(() => {
    applySeo({
      title: 'Catálogo · Suplementos y bienestar natural · Botané',
      description:
        'Explora 10 productos de bienestar natural: gomitas para dormir, parches herbales, colágeno, vitaminas y más. Envío gratis en Colombia.',
      path: '/catalogo',
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          organizationJsonLd(),
          breadcrumbJsonLd([
            { name: 'Inicio', path: '/' },
            { name: 'Catálogo', path: '/catalogo' },
          ]),
          {
            '@type': 'ItemList',
            name: 'Productos Botané',
            url: 'https://botane.presentto.online/catalogo',
            numberOfItems: PRODUCTS.length,
            itemListElement: PRODUCTS.map((product, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              url: `https://botane.presentto.online/producto/${product.id}`,
              name: product.name,
            })),
          },
        ],
      },
    })
  }, [])

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
            <span className="eyebrow">Catálogo Botané</span>
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

      <section className="catalog-section container silo-guides-strip">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Contenido</span>
            <h2>Guías de cada silo</h2>
          </div>
          <Link to="/guias" className="underlink">
            Ir a guías <ArrowRight size={15} />
          </Link>
        </div>
        <div className="silo-strip-grid">
          {SILO_ORDER.map((siloId) => {
            const hub = hubOf(GUIDES, siloId)
            if (!hub) return null
            return (
              <Link key={siloId} to={`/guias/${hub.slug}`} className="silo-strip-card">
                <span className="eyebrow">{SILOS[siloId].label}</span>
                <strong>{hub.title}</strong>
                <span className="guide-card-cta">
                  Leer hub <ArrowRight size={14} />
                </span>
              </Link>
            )
          })}
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

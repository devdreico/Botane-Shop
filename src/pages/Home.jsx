import { Link } from 'react-router-dom'
import { ArrowRight, Leaf, PackageCheck, Sparkles, Truck } from 'lucide-react'
import Layout from '../components/Layout'
import Reveal from '../components/Reveal'
import { WHATSAPP_URL } from '../config/store'
import { COMBOS } from '../data/combos'
import { PRODUCTS } from '../data/products'
import { useCartContext } from '../cart/CartContext'
import ComboSection from '../components/ComboSection'

export default function Home() {
  const { addComboProducts } = useCartContext()
  const primaryCombo = COMBOS[0]
  const featured = PRODUCTS.filter((product) => product.featured).slice(0, 4)

  return (
    <Layout>
      <section className="hero container">
        <div className="hero-copy">
          <span className="eyebrow">
            <Leaf size={14} /> Funza · Colombia
          </span>
          <h1>
            Bienestar
            <br />
            <em>natural.</em>
          </h1>
          <p className="hero-minimal">Envío gratis · Menos de 5 días · Pagas al recibir</p>
          <div className="hero-actions">
            <Link to="/catalogo" className="button button-primary">
              Ver catálogo <ArrowRight size={17} />
            </Link>
            <a href={WHATSAPP_URL} className="button button-quiet" target="_blank" rel="noreferrer">
              WhatsApp 24/7
            </a>
          </div>
        </div>
      </section>

      <section className="value-strip">
        <div className="container value-grid">
          <div>
            <Truck />
            <span>
              <strong>Envío gratis</strong>
              <small>Siempre · unidad o múltiple</small>
            </span>
          </div>
          <div>
            <PackageCheck />
            <span>
              <strong>Contra entrega</strong>
              <small>Compra segura</small>
            </span>
          </div>
          <div>
            <Sparkles />
            <span>
              <strong>WhatsApp 24/7</strong>
              <small>Seguimiento</small>
            </span>
          </div>
        </div>
      </section>

      <section className="catalog-section container home-products">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Destacados</span>
            <h2>Productos</h2>
          </div>
          <Link to="/catalogo" className="underlink">
            Ver todos <ArrowRight size={15} />
          </Link>
        </div>
        <div className="product-grid">
          {featured.map((product, index) => (
            <Reveal key={product.id} delay={index * 70}>
              <HomeCard product={product} index={index} />
            </Reveal>
          ))}
        </div>
      </section>

      {primaryCombo && (
        <ComboSection
          combo={primaryCombo}
          products={PRODUCTS}
          onAdd={(combo) => addComboProducts(combo, (id) => PRODUCTS.find((p) => p.id === id))}
        />
      )}

      <section className="home-bottom container">
        <span className="eyebrow">Botané</span>
        <h2>
          Lo esencial para
          <br />
          <em>sentirte bien.</em>
        </h2>
        <Link to="/catalogo" className="button button-primary">
          Comprar ahora <ArrowRight size={16} />
        </Link>
      </section>
    </Layout>
  )
}

function HomeCard({ product, index }) {
  const { addToCart } = useCartContext()
  return (
    <article className={`product-card accent-${product.accent}`}>
      <Link to={`/producto/${product.id}`} className="product-image">
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <div className="product-image-placeholder" aria-hidden="true">
            <span>{product.shortName}</span>
          </div>
        )}
        <span className="product-number">{String(index + 1).padStart(2, '0')}</span>
        <span className="shipping-pill">Envío gratis</span>
      </Link>
      <div className="product-content">
        <span className="product-category">{product.category}</span>
        <Link to={`/producto/${product.id}`}>
          <h3>{product.name}</h3>
        </Link>
        <div className="product-bottom">
          <div>
            <strong>{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(product.price)}</strong>
            <span className="pay-note">Envío gratis · Contra entrega</span>
          </div>
          <button className="add-button" onClick={() => addToCart(product)} aria-label={`Agregar ${product.name}`}>
            +
          </button>
        </div>
      </div>
    </article>
  )
}

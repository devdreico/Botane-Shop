import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, Check, Clock, CreditCard, Leaf, Minus, PackageCheck, Plus, ShieldCheck, ShoppingBag, Sparkles, Truck, Zap } from 'lucide-react'
import Layout from '../components/Layout'
import Reveal from '../components/Reveal'
import { FREE_SHIPPING_LABEL, WHATSAPP_URL } from '../config/store'
import { PRODUCTS } from '../data/products'
import { COMBOS } from '../data/combos'
import { formatCOP } from '../lib/format'
import { useCartContext } from '../cart/CartContext'
import { applySeo, breadcrumbJsonLd, productJsonLd } from '../lib/seo'

export default function ProductPage() {
  const { slug } = useParams()
  const product = PRODUCTS.find((item) => item.id === slug)
  const { addToCart, cart } = useCartContext()
  const cartItem = cart.find((item) => item.id === product?.id)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(product?.image)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    setSelectedImage(product?.image)
    setQuantity(1)
    if (!product) {
      applySeo({ title: 'Producto no encontrado · Botané', path: '/catalogo', robots: 'noindex, follow' })
      return
    }
    const image = product.image
      ? product.image.startsWith('http')
        ? product.image
        : product.image
      : undefined
    applySeo({
      title: product.seo?.title || `${product.name} · Botané`,
      description: product.seo?.description || product.detail,
      path: `/producto/${product.id}`,
      image,
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          productJsonLd(product),
          breadcrumbJsonLd([
            { name: 'Inicio', path: '/' },
            { name: 'Catálogo', path: '/catalogo' },
            { name: product.shortName || product.name, path: `/producto/${product.id}` },
          ]),
        ].filter(Boolean),
      },
    })
    return () => {
      applySeo({})
    }
  }, [product])

  if (!product) return <Navigate to="/catalogo" replace />

  const related = PRODUCTS.filter((item) => item.id !== product.id).slice(0, 4)
  const productCombo = COMBOS.find((combo) => combo.productIds.includes(product.id))
  const mpEnabled = Boolean(product.mpLink) && quantity === 1

  const payWithMp = () => {
    if (!mpEnabled) return
    window.location.href = product.mpLink
  }

  const add = () => {
    addToCart(product, quantity)
    setAdded(true)
    window.setTimeout(() => setAdded(false), 2200)
  }

  const isDigital = product.type === 'digital'

  return (
    <Layout>
      <section className="product-page container">
        <Link to="/catalogo" className="back-link">
          ← Catálogo
        </Link>
        <div className="product-detail">
          <div>
            <div className={`detail-image accent-${product.accent}`}>
              {selectedImage ? (
                <img src={selectedImage} alt={product.name} fetchpriority="high" />
              ) : (
                <div className="product-image-placeholder detail-placeholder" aria-hidden="true">
                  <span>{product.shortName}</span>
                </div>
              )}
              <span className="detail-stamp">
                <Leaf size={16} /> botané
              </span>
              <span className="shipping-pill">{FREE_SHIPPING_LABEL}</span>
            </div>
            {product.gallery.length > 1 && (
              <div className="detail-gallery" role="tablist" aria-label="Galería del producto">
                {product.gallery.map((image, index) => (
                  <button
                    className={selectedImage === image ? 'selected' : ''}
                    key={`${image}-${index}`}
                    onClick={() => setSelectedImage(image)}
                    aria-label={`Vista ${index + 1}`}
                  >
                    <img src={image} alt={`${product.name} vista ${index + 1}`} loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="detail-copy">
            <span className="eyebrow">{product.category}</span>
            <span className="detail-badge">
              {product.badge}
              {isDigital ? ' · Digital' : ''}
            </span>
            <h1>{product.name}</h1>
            <p className="detail-description">{product.detail}</p>
            <ul className="benefit-list">
              {product.benefits.map((benefit) => (
                <li key={benefit}>
                  <Check size={15} /> {benefit}
                </li>
              ))}
            </ul>
            <div className="detail-price">
              <strong>{formatCOP(product.price)}</strong>
              <span className="free-shipping">{FREE_SHIPPING_LABEL}</span>
              <span>Mercado Pago · Contra entrega</span>
            </div>
            <div className="detail-actions">
              <div className="quantity large">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Menos">
                  <Minus size={15} />
                </button>
                <b>{quantity}</b>
                <button onClick={() => setQuantity(quantity + 1)} aria-label="Más">
                  <Plus size={15} />
                </button>
              </div>
              <button
                className="button button-primary buy-button"
                onClick={payWithMp}
                disabled={!mpEnabled}
                title={mpEnabled ? 'Pagar con Mercado Pago' : 'Para más unidades, agrégalo al carrito'}
              >
                <CreditCard size={17} /> Pagar con MP
              </button>
              <button className="button button-outline cart-add" onClick={add}>
                <ShoppingBag size={17} /> Agregar
              </button>
            </div>
            {!mpEnabled && (
              <p className="qty-note" role="status">
                Pago directo con Mercado Pago solo con cantidad 1. Para más unidades, agrégalo al carrito (contra entrega).
              </p>
            )}
            {added && (
              <div className="added-message">
                <Check size={16} /> Agregado al carrito
              </div>
            )}
            <div className="detail-promise">
              <div>
                <Truck size={19} />
                <span>
                  <b>Menos de 5 días</b>
                  <small>{FREE_SHIPPING_LABEL}</small>
                </span>
              </div>
              <div>
                <PackageCheck size={19} />
                <span>
                  <b>WhatsApp 24/7</b>
                  <small>Seguimiento</small>
                </span>
              </div>
            </div>
            <div className="impulse-bar">
              <span>
                <Zap size={14} /> Compra impulsiva
              </span>
              <span>
                <ShieldCheck size={14} /> Pago seguro
              </span>
              <span>
                <Clock size={14} /> Entrega rápida
              </span>
            </div>
          </div>
        </div>
      </section>

      <Reveal className="product-why container">
        <div className="product-why-main">
          <span className="eyebrow">Por qué elegirlo</span>
          <h2>{product.whyTitle}</h2>
          <p>{product.whyText}</p>
        </div>
        <div className="product-why-grid">
          <div>
            <span className="info-label">Ideal para</span>
            <strong>{product.idealFor}</strong>
          </div>
          <div>
            <span className="info-label">Cómo incorporarlo</span>
            <strong>{product.ritual}</strong>
          </div>
          <div>
            <span className="info-label">Tu pedido incluye</span>
            <strong>{product.included}</strong>
          </div>
        </div>
      </Reveal>

      {product.faq?.length > 0 && (
        <Reveal className="product-faq container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Preguntas</span>
              <h2>Resolvemos tus dudas</h2>
            </div>
          </div>
          <div className="faq-list">
            {product.faq.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      )}

      <section className="product-info container">
        <div>
          <span className="eyebrow">Compra fácil</span>
          <h2>
            Tu bienestar,
            <br />
            <em>en camino.</em>
          </h2>
        </div>
        <div>
          <p>
            {FREE_SHIPPING_LABEL} · Menos de 5 días · Pago contra entrega o Mercado Pago (unidad)
            {product.deliveryNote ? ` · ${product.deliveryNote}` : ''}
          </p>
          <a className="underlink" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            Resolver una duda <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {productCombo && (
        <Reveal className="combo-promo container">
          <Sparkles size={18} />
          <span>
            Incluido en <strong>{productCombo.label}</strong> · ahorras comprando el pack completo
          </span>
        </Reveal>
      )}

      {related.length > 0 && (
        <section className="catalog-section container related-products">
          <div className="section-heading">
            <div>
              <span className="eyebrow">También te puede gustar</span>
              <h2>Relacionados</h2>
            </div>
            <Link to="/catalogo" className="underlink">
              Ver catálogo <ArrowRight size={15} />
            </Link>
          </div>
          <div className="product-grid">
            {related.map((item, index) => (
              <Reveal key={item.id} delay={index * 60}>
                <RelatedCard product={item} index={index} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <div className="sticky-cta">
        <div className="sticky-cta-info">
          <strong>{formatCOP(product.price)}</strong>
          <span>{FREE_SHIPPING_LABEL}</span>
        </div>
        <button
          className="button button-primary"
          onClick={payWithMp}
          disabled={!mpEnabled}
          title={mpEnabled ? 'Pagar con Mercado Pago' : 'Para más unidades, agrégalo al carrito'}
        >
          <CreditCard size={16} /> Pagar con MP
        </button>
        <button className="button button-outline sticky-cart" onClick={add} aria-label="Agregar al carrito">
          <ShoppingBag size={16} />
        </button>
      </div>
      {cartItem && (
        <p className="sr-only">En carrito: {cartItem.quantity}</p>
      )}
    </Layout>
  )
}

function RelatedCard({ product, index }) {
  const { addToCart } = useCartContext()
  return (
    <article className={`product-card accent-${product.accent}`}>
      <Link to={`/producto/${product.id}`} className="product-image">
        {product.image ? (
          <img src={product.image} alt={product.name} loading="lazy" />
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
            <strong>{formatCOP(product.price)}</strong>
            <span className="pay-note">Envío gratis · MP o contra entrega</span>
          </div>
          <button className="add-button" onClick={() => addToCart(product)} aria-label={`Agregar ${product.name}`}>
            +
          </button>
        </div>
      </div>
    </article>
  )
}

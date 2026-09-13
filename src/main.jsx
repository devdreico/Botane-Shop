import React, { useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom'
import { ArrowRight, Check, ChevronDown, Leaf, Menu, Minus, PackageCheck, Plus, ShoppingBag, Sparkles, Truck, X } from 'lucide-react'
import logoSrc from '../assets/IMG/botane-logo-fondo-transparente.png'
import lullabitesImage from '../assets/IMG/img PRODUCTS/IMG 3/LULLABITESGOMITASPARADORMIR.jpg'
import herbpadsImage from '../assets/IMG/img PRODUCTS/IMG 2/PARCHESMUSCULARES1.jpg'
import herbpadsImage2 from '../assets/IMG/img PRODUCTS/IMG 2/PARCHESMUSCULARES2.jpeg'
import herbpadsImage3 from '../assets/IMG/img PRODUCTS/IMG 2/PARCHESMUSCULARES3.jpeg'
import herbpadsImage4 from '../assets/IMG/img PRODUCTS/IMG 2/PARCHESMUSCULARES4.jpeg'
import herbpadsImage5 from '../assets/IMG/img PRODUCTS/IMG 2/PARCHESMUSUCLARES5.jpeg'
import citrateImage from '../assets/IMG/img PRODUCTS/IMG 1/CITRATODEMAGNESIOECAPSULAS.jpg'
import magnesiumOilImage from '../assets/IMG/img PRODUCTS/IMG 4/ACEITEDEMAGNESION.jpg'
import './styles.css'

const FORM_ENDPOINT = 'https://formspree.io/f/xvkojovn'
const WHATSAPP_NUMBER = '573144572008'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Botané, quiero conocer el catálogo y recibir atención.')}`
const LOGO_SRC = logoSrc
const COMBO_PRICE = 160000

// Catálogo inicial editable. Reemplazar aquí nombres, precios e imágenes cuando llegue el catálogo real.
const PRODUCTS = [
  {
    id: 'lullabites',
    name: 'Lullabites',
    shortName: 'Lullabites',
    category: 'Descanso nocturno',
    badge: 'Gomitas para dormir',
    hoverTitle: 'Tu ritual nocturno',
    hoverText: 'Gomitas con melatonina para preparar tu noche y acompañar tu descanso.',
    description: 'Gomitas para tu ritual nocturno.',
    detail: 'Gomitas con melatonina para acompañar tu rutina de descanso.',
    benefits: ['60 gomitas', 'Sabor fresa', 'Con melatonina'],
    whyTitle: 'Cierra el día con un ritual que sí disfrutas.',
    whyText: 'Lullabites convierte tu momento previo a dormir en algo fácil, delicioso y constante. Una opción práctica para acompañar tus noches sin complicar tu rutina.',
    idealFor: 'Noches de descanso y rutinas con horarios cambiantes.',
    ritual: 'Sigue las indicaciones del empaque y disfruta su sabor a fresa.',
    included: '60 gomitas · melatonina · sabor fresa',
    price: 50000,
    image: lullabitesImage,
    gallery: [lullabitesImage],
    accent: 'sage',
  },
  {
    id: 'herbpads',
    name: 'Herbpads',
    shortName: 'Herbpads',
    category: 'Relajación corporal',
    badge: '35 parches herbales',
    hoverTitle: 'Relajación localizada',
    hoverText: 'Parches herbales para acompañar tus músculos y articulaciones después de un día activo.',
    description: '35 parches herbales para tu recuperación.',
    detail: 'Parches tópicos para acompañar la relajación muscular y articular.',
    benefits: ['35 parches', 'Aplicación localizada', 'Uso práctico'],
    whyTitle: 'Llévalos contigo. Úsalos donde tu cuerpo lo pide.',
    whyText: 'Herbpads es una solución práctica para sumar una pausa localizada a tu día. Ideal para después de la actividad física, una jornada larga o cuando quieres cuidar una zona específica.',
    idealFor: 'Músculos y articulaciones después de días activos.',
    ritual: 'Aplica sobre la piel limpia y sigue las indicaciones del empaque.',
    included: '35 parches herbales',
    price: 40000,
    image: herbpadsImage,
    gallery: [herbpadsImage, herbpadsImage2, herbpadsImage3, herbpadsImage4, herbpadsImage5],
    accent: 'cream',
  },
  {
    id: 'aceite-magnesio',
    name: 'Aceite de magnesio',
    shortName: 'Aceite de magnesio',
    category: 'Masaje y recuperación',
    badge: 'Relajante e hidratante',
    hoverTitle: 'Masaje · piel · músculos',
    hoverText: 'Perfecto para masajes y para rehidratar la piel después de la ducha, mientras acompañas el cuidado de músculos y cuerpo.',
    description: 'Aceite para masajes, relajación e hidratación.',
    detail: 'Aceite tópico para masajes, relajación e hidratación.',
    benefits: ['125 ml', 'Uso tópico', 'Para masajes'],
    whyTitle: 'Un solo producto para el masaje y la piel.',
    whyText: 'El aceite de magnesio acompaña tus momentos de autocuidado: úsalo después de la ducha para rehidratar la piel o conviértelo en el aliado de un masaje relajante para músculos cansados.',
    idealFor: 'Masajes, piel seca y recuperación corporal.',
    ritual: 'Aplica sobre la piel y masajea suavemente hasta sentirla confortable.',
    included: '125 ml · uso tópico · alta concentración',
    price: 37000,
    image: magnesiumOilImage,
    gallery: [magnesiumOilImage],
    accent: 'terracotta',
  },
  {
    id: 'citrato-magnesio',
    name: 'Citrato de magnesio',
    shortName: 'Citrato de magnesio',
    category: 'Bienestar diario',
    badge: '500 mg · 60 cápsulas',
    hoverTitle: 'Magnesio para tu ritmo',
    hoverText: 'Suplemento práctico para acompañar funciones normales de músculos, nervios y energía dentro de tu rutina.',
    description: '60 cápsulas para tu bienestar diario.',
    detail: 'Suplemento diario de magnesio para tu rutina de bienestar.',
    benefits: ['500 mg', '60 cápsulas', 'Sueño y relajación'],
    whyTitle: 'Una cápsula sencilla para acompañar todo tu día.',
    whyText: 'El citrato de magnesio suma un suplemento práctico a tu rutina. El magnesio participa en funciones normales de músculos, nervios y producción de energía, mientras tú mantienes tus hábitos de bienestar.',
    idealFor: 'Rutinas de bienestar, descanso y actividad diaria.',
    ritual: 'Toma según las indicaciones del empaque y mantén una rutina constante.',
    included: '60 cápsulas · 500 mg · suplemento alimenticio',
    price: 45000,
    image: citrateImage,
    gallery: [citrateImage],
    accent: 'forest',
  },
]

const formatCOP = (value) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(value)

function useCart() {
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem('botane-cart') || '[]') } catch { return [] }
  })

  useEffect(() => localStorage.setItem('botane-cart', JSON.stringify(cart)), [cart])

  const addToCart = (product, quantity = 1) => setCart((current) => {
    const item = current.find((entry) => entry.id === product.id)
    return item ? current.map((entry) => entry.id === product.id ? { ...entry, quantity: entry.quantity + quantity } : entry) : [...current, { ...product, quantity }]
  })
  const changeQuantity = (id, delta) => setCart((current) => current.map((item) => item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item).filter((item) => item.quantity > 0))
  const removeFromCart = (id) => setCart((current) => current.filter((item) => item.id !== id))
  const clearCart = () => setCart([])
  const addCombo = () => setCart(PRODUCTS.map((product) => ({ ...product, quantity: 1 })))
  const itemsCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const isCombo = cart.length === 4 && cart.every((item) => item.quantity === 1)
  const comboPrice = COMBO_PRICE
  const total = isCombo ? comboPrice : subtotal

  return { cart, addToCart, addCombo, changeQuantity, removeFromCart, clearCart, itemsCount, subtotal, total, isCombo, comboPrice }
}

function App() {
  const cartState = useCart()
  return <CartContext.Provider value={cartState}><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/catalogo" element={<Catalog />} />
    <Route path="/producto/:slug" element={<ProductPage />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes></CartContext.Provider>
}

const CartContext = React.createContext(null)
const useCartContext = () => React.useContext(CartContext)

function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const { itemsCount, cart, changeQuantity, removeFromCart, total, isCombo } = useCartContext()
  const location = useLocation()
  const navigate = useNavigate()
  const closeMenu = () => setMenuOpen(false)

  return <div className="app-shell">
    <div className="announcement"><Sparkles size={14} /> Envío gratis · Entrega en menos de 5 días · Pagas al recibir</div>
    <header className="site-header">
      <button className="icon-button mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú"><Menu size={21} /></button>
      <Link className="brand" to="/" onClick={closeMenu} aria-label="Botané inicio">
        <img className="brand-logo" src={LOGO_SRC} alt="" />
        <span>botané</span>
      </Link>
      <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
        <Link className={location.pathname === '/' ? 'active' : ''} to="/" onClick={closeMenu}>Inicio</Link>
        <Link className={location.pathname.startsWith('/catalogo') ? 'active' : ''} to="/catalogo" onClick={closeMenu}>Catálogo</Link>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>Hablemos <ArrowRight size={14} /></a>
      </nav>
      <button className="cart-button" onClick={() => setCartOpen(true)} aria-label="Abrir carrito">
        <ShoppingBag size={19} /><span>Carrito</span>{itemsCount > 0 && <b>{itemsCount}</b>}
      </button>
    </header>
    <main>{children}</main>
    <footer className="site-footer"><div><Link className="brand footer-brand" to="/"><img className="brand-logo" src={LOGO_SRC} alt="" /><span>botané</span></Link></div><div className="footer-links"><Link to="/catalogo">Catálogo</Link><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp 24/7</a><span>Funza · Colombia</span></div><small>© 2026 Botané</small><small className="footer-service">Servicio administrado por <a href="https://ya.presentto.online" target="_blank" rel="noreferrer">Alexandra Ortiz · 3219517348 · ya.presentto.online</a></small></footer>
    {cartOpen && <CartDrawer cart={cart} changeQuantity={changeQuantity} removeFromCart={removeFromCart} total={total} isCombo={isCombo} onClose={() => setCartOpen(false)} onCatalog={() => { setCartOpen(false); navigate('/catalogo') }} />}
  </div>
}

function CartDrawer({ cart, changeQuantity, removeFromCart, total, isCombo, onClose, onCatalog }) {
  return <div className="drawer-layer" onClick={onClose}><aside className="cart-drawer" onClick={(event) => event.stopPropagation()}>
    <div className="drawer-head"><div><span className="eyebrow">Tu selección</span><h2>Carrito</h2></div><button className="icon-button" onClick={onClose} aria-label="Cerrar carrito"><X size={21} /></button></div>
    {cart.length === 0 ? <div className="empty-cart"><div className="empty-icon"><ShoppingBag /></div><h3>Tu carrito está vacío</h3><p>Descubre productos para crear tu ritual de bienestar.</p><button className="button button-primary" onClick={onCatalog}>Explorar catálogo <ArrowRight size={16} /></button></div> : <>
      <div className="cart-items">{cart.map((item) => <div className="cart-item" key={item.id}><img src={item.image} alt="" /><div className="cart-item-info"><strong>{item.name}</strong><span>{formatCOP(item.price)}</span><div className="quantity"><button onClick={() => changeQuantity(item.id, -1)}><Minus size={13} /></button><b>{item.quantity}</b><button onClick={() => changeQuantity(item.id, 1)}><Plus size={13} /></button></div></div><button className="remove" onClick={() => removeFromCart(item.id)} aria-label={`Eliminar ${item.name}`}><X size={15} /></button></div>)}</div>
      {isCombo && <div className="combo-note"><Check size={16} /> Pack completo aplicado: ahorras $12.000</div>}
      <div className="drawer-total"><span>Total</span><strong>{formatCOP(total)}</strong></div>
      <Link to={`/producto/${cart[0].id}`} state={{ fromCart: true }} className="button button-primary button-wide" onClick={onClose}>Completar pedido <ArrowRight size={16} /></Link>
      <button className="text-button" onClick={onCatalog}>Seguir explorando</button>
    </>}
  </aside></div>
}

function Home() {
  return <Layout><section className="hero container"><div className="hero-copy"><span className="eyebrow"><Leaf size={14} /> Funza · Colombia</span><h1>Bienestar<br /><em>natural.</em></h1><p className="hero-minimal">Envío gratis · Menos de 5 días · Pagas al recibir</p><div className="hero-actions"><Link to="/catalogo" className="button button-primary">Ver catálogo <ArrowRight size={17} /></Link><a href={WHATSAPP_URL} className="button button-quiet" target="_blank" rel="noreferrer">WhatsApp 24/7</a></div></div><div className="hero-art"><div className="hero-circle circle-back"></div><div className="hero-circle circle-front"></div><div className="hero-bowl"><img className="hero-logo" src={LOGO_SRC} alt="Botané" /><span>botané</span></div><div className="art-sticker"><Leaf size={14} /><span>natural<br /><b>para ti</b></span></div></div></section>
    <section className="value-strip"><div className="container value-grid"><div><Truck /><span><strong>Envío gratis</strong><small>Menos de 5 días</small></span></div><div><PackageCheck /><span><strong>Contra entrega</strong><small>Compra segura</small></span></div><div><Sparkles /><span><strong>WhatsApp 24/7</strong><small>Seguimiento</small></span></div></div></section>
    <section className="home-bottom container"><span className="eyebrow">Botané</span><h2>Lo esencial para<br /><em>sentirte bien.</em></h2><Link to="/catalogo" className="button button-primary">Comprar ahora <ArrowRight size={16} /></Link></section>
  </Layout>
}

function Catalog() {
  const { addToCart, addCombo, itemsCount } = useCartContext()
  const [notice, setNotice] = useState('')
  const add = (product) => { addToCart(product); setNotice(`${product.shortName} se agregó a tu carrito`); setTimeout(() => setNotice(''), 2400) }
  const addPack = () => { addCombo(); setNotice('Pack completo agregado · ahorras $12.000'); setTimeout(() => setNotice(''), 2400) }
  return <Layout><section className="catalog-hero container"><div><span className="eyebrow"><Leaf size={14} /> Botané</span><h1>Elige tu<br /><em>bienestar.</em></h1></div><p>Envío gratis · Menos de 5 días · Contra entrega</p></section>
    <section className="catalog-section container"><div className="section-heading"><div><span className="eyebrow">MVP</span><h2>Productos</h2></div><span className="stock-note"><span className="stock-dot"></span> Unidades limitadas</span></div><div className="product-grid">{PRODUCTS.map((product, index) => <ProductCard key={product.id} product={product} index={index} onAdd={() => add(product)} />)}</div><div className="limited-note"><Sparkles size={20} /><div><strong>Próximamente más novedades.</strong><span>Disponibilidad limitada.</span></div><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="underlink">WhatsApp <ArrowRight size={15} /></a></div></section>
    <section className="combo-section container"><div className="combo-copy"><span className="eyebrow">Sistema Botané</span><h2>Todo tu ritual<br /><em>en un pack.</em></h2><p className="combo-lead">Un mini ecosistema de bienestar para preparar la noche, cuidar el cuerpo y sostener tu rutina diaria.</p><div className="combo-pillars"><div><span>01</span><strong>Noche</strong><small>Lullabites · ritual de descanso</small></div><div><span>02</span><strong>Cuerpo</strong><small>Aceite + Herbpads · cuidado localizado</small></div><div><span>03</span><strong>Rutina</strong><small>Citrato · soporte diario de magnesio</small></div></div><p className="combo-rhythm">Acompaña hábitos que cuidan tu ciclo sueño-vigilia: horarios, relajación y menos estímulos al final del día.</p><div className="combo-offer"><strong>$160.000</strong><span>4 productos · Envío gratis · Contra entrega</span></div><button className="button button-light" onClick={addPack}>Agregar pack completo <ArrowRight size={16} /></button></div><div className="combo-stack">{PRODUCTS.map((product, i) => <img key={product.id} src={product.image} alt={product.name} style={{ '--i': i }} />)}<div className="save-pill">Ahorras<br /><strong>$12.000</strong></div></div></section>
    {notice && <div className="toast"><Check size={16} /> {notice} · <span>{itemsCount} {itemsCount === 1 ? 'producto' : 'productos'}</span></div>}
  </Layout>
}

function ProductCard({ product, index, onAdd }) {
  return <article tabIndex="0" className={`product-card accent-${product.accent}`}><Link to={`/producto/${product.id}`} className="product-image"><img className={product.id === 'lullabites' ? 'lullabites-visual' : ''} src={product.image} alt={product.name} /><span className="product-number">0{index + 1}</span><span className="shipping-pill">Envío gratis</span><div className="product-hover"><span className="hover-label">Beneficios</span><strong>{product.hoverTitle}</strong><p>{product.hoverText}</p><ul>{product.benefits.map((benefit) => <li key={benefit}><Check size={13} /> {benefit}</li>)}</ul><span className="hover-cta">Ver producto <ArrowRight size={13} /></span></div></Link><div className="product-content"><span className="product-category">{product.category}</span><Link to={`/producto/${product.id}`}><h3>{product.name}</h3></Link><div className="product-bottom"><div><strong>{formatCOP(product.price)}</strong><span className="pay-note">Contra entrega</span></div><button className="add-button" onClick={onAdd} aria-label={`Agregar ${product.name} al carrito`}><Plus size={19} /></button></div></div></article>
}

function ProductPage() {
  const { slug } = useParams()
  const product = PRODUCTS.find((item) => item.id === slug)
  const { addToCart, cart } = useCartContext()
  const location = useLocation()
  const cartItem = cart.find((item) => item.id === product?.id)
  const fromCart = Boolean(location.state?.fromCart)
  const fromCombo = Boolean(location.state?.fromCombo)
  const [quantity, setQuantity] = useState(() => fromCart ? cartItem?.quantity || 1 : 1)
  const [selectedImage, setSelectedImage] = useState(product?.image)
  const [checkoutOrder, setCheckoutOrder] = useState(null)
  const [added, setAdded] = useState(false)
  if (!product) return <Navigate to="/catalogo" replace />
  const directBuy = () => {
    const existing = cart.find((item) => item.id === product.id)
    const orderCart = fromCombo ? PRODUCTS.map((item) => ({ ...item, quantity: 1 })) : fromCart ? cart : existing
      ? cart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item)
      : [...cart, { ...product, quantity }]
    const isCombo = orderCart.length === 4 && orderCart.every((item) => item.quantity === 1)
    const orderTotal = isCombo ? COMBO_PRICE : orderCart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    if (fromCombo) PRODUCTS.forEach((item) => addToCart(item))
    else if (!fromCart) addToCart(product, quantity)
    setCheckoutOrder({ cart: orderCart, total: orderTotal })
  }
  const add = () => { addToCart(product, quantity); setAdded(true); setTimeout(() => setAdded(false), 2200) }
  return <Layout><section className="product-page container"><Link to="/catalogo" className="back-link">← Catálogo</Link><div className="product-detail"><div><div className={`detail-image accent-${product.accent}`}><img className={product.id === 'lullabites' ? 'lullabites-visual' : ''} src={selectedImage} alt={product.name} /><span className="detail-stamp"><Leaf size={16} /> botané</span></div>{product.gallery.length > 1 && <div className="detail-gallery">{product.gallery.map((image, index) => <button className={selectedImage === image ? 'selected' : ''} key={`${image}-${index}`} onClick={() => setSelectedImage(image)}><img src={image} alt={`${product.name} vista ${index + 1}`} /></button>)}</div>}</div><div className="detail-copy"><span className="eyebrow">{product.category}</span><span className="detail-badge">{product.badge}</span><h1>{product.name}</h1><p className="detail-description">{product.detail}</p><ul className="benefit-list">{product.benefits.map((benefit) => <li key={benefit}><Check size={15} /> {benefit}</li>)}</ul><div className="detail-price"><strong>{formatCOP(product.price)}</strong><span className="free-shipping">Envío gratis</span><span>Contra entrega</span></div><div className="detail-actions"><div className="quantity large"><button onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={15} /></button><b>{quantity}</b><button onClick={() => setQuantity(quantity + 1)}><Plus size={15} /></button></div><button className="button button-primary buy-button" onClick={directBuy}>Comprar ahora <ArrowRight size={17} /></button><button className="button button-outline cart-add" onClick={add}><ShoppingBag size={17} /> Agregar</button></div>{added && <div className="added-message"><Check size={16} /> Agregado al carrito</div>}<div className="detail-promise"><div><Truck size={19} /><span><b>Menos de 5 días</b><small>Envío gratis</small></span></div><div><PackageCheck size={19} /><span><b>WhatsApp 24/7</b><small>Seguimiento</small></span></div></div></div></div></section><section className="product-why container"><div className="product-why-main"><span className="eyebrow">Por qué elegirlo</span><h2>{product.whyTitle}</h2><p>{product.whyText}</p></div><div className="product-why-grid"><div><span className="info-label">Ideal para</span><strong>{product.idealFor}</strong></div><div><span className="info-label">Cómo incorporarlo</span><strong>{product.ritual}</strong></div><div><span className="info-label">Tu pedido incluye</span><strong>{product.included}</strong></div></div></section><section className="product-info container"><div><span className="eyebrow">Compra fácil</span><h2>Tu bienestar,<br /><em>en camino.</em></h2></div><div><p>Envío gratis · Menos de 5 días · Pago contra entrega</p><a className="underlink" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Resolver una duda <ArrowRight size={15} /></a></div></section>{checkoutOrder && <Checkout product={product} quantity={quantity} cart={checkoutOrder.cart} total={checkoutOrder.total} onClose={() => setCheckoutOrder(null)} />}</Layout>
}

function Checkout({ product, quantity, cart, total, onClose }) {
  const navigate = useNavigate()
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ phone: '', email: '', firstName: '', lastName: '', document: '', tag: '', providerNotes: '', internalNotes: '', officeDelivery: false, department: '', addressInfo: '', payment: 'Pago contra entrega' })
  const update = (event) => { const { name, value, type, checked } = event.target; setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value })) }
  const submit = async (event) => {
    event.preventDefault(); setSubmitting(true); setError('')
    const summary = cart.map((item) => `${item.name} x${item.quantity}`).join(' | ') || `${product.name} x${quantity}`
    const payload = { ...form, _replyto: form.email, phone: `+57 ${form.phone}`, _subject: `Nuevo pedido Botané — ${form.firstName} ${form.lastName}`, products: summary, total: formatCOP(total), shipping: 'Envío gratis · entrega en menos de 5 días', source: 'Tienda online Botané' }
    try { const response = await fetch(FORM_ENDPOINT, { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }); if (!response.ok) throw new Error('formspree'); setSuccess(true) } catch { setError('No pudimos enviar el pedido. Revisa tu conexión o escríbenos por WhatsApp.') } finally { setSubmitting(false) }
  }
  return <div className="checkout-layer"><div className="checkout-modal"><button className="modal-close" onClick={onClose} aria-label="Cerrar"><X size={20} /></button>{success ? <div className="success-state"><div className="success-icon"><Check /></div><span className="eyebrow">Pedido recibido</span><h2>Gracias por elegir<br /><em>Botané.</em></h2><p>Recibimos tus datos. Te contactaremos muy pronto para confirmar tu pedido y coordinar la entrega por WhatsApp.</p><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="button button-primary">Seguir mi compra por WhatsApp <ArrowRight size={16} /></a><button className="text-button" onClick={() => navigate('/catalogo')}>Volver al catálogo</button></div> : <><div className="checkout-header"><span className="eyebrow">Último paso</span><h2>Completa tu pedido</h2><p>{cart.length === 4 ? 'Pack rehabilitante completo · 4 productos' : `${product.name} · ${quantity} ${quantity === 1 ? 'unidad' : 'unidades'}`}</p></div><form onSubmit={submit}><div className="form-section"><h3>Datos del cliente</h3><div className="form-grid"><label>Teléfono<div className="phone-field"><span>(+57)</span><input required name="phone" type="tel" value={form.phone} onChange={update} placeholder="300 000 0000" /></div></label><label>Correo<input required name="email" type="email" value={form.email} onChange={update} placeholder="tu@correo.com" /></label><label>Nombre<input required name="firstName" value={form.firstName} onChange={update} placeholder="Tu nombre" /></label><label>Apellido<input required name="lastName" value={form.lastName} onChange={update} placeholder="Tu apellido" /></label><label>Cédula o documento<input required name="document" value={form.document} onChange={update} placeholder="Número de documento" /></label><label>Etiqueta <span className="optional">(separadas por coma)</span><input name="tag" value={form.tag} onChange={update} placeholder="Casa, trabajo" /></label></div></div><div className="form-section"><h3>Dirección de entrega</h3><label>Departamento<select required name="department" value={form.department} onChange={update}><option value="">Selecciona una opción</option><option>Bogotá D.C.</option><option>Cundinamarca</option><option>Antioquia</option><option>Valle del Cauca</option><option>Atlántico</option><option>Santander</option><option>Otro departamento</option></select><ChevronDown className="select-icon" size={16} /></label><label>Información adicional de la dirección<textarea required name="addressInfo" value={form.addressInfo} onChange={update} placeholder="Dirección, barrio, ciudad y referencias" rows="3" /></label><label className="check-row"><input type="checkbox" name="officeDelivery" checked={form.officeDelivery} onChange={update} /><span>Entregar en una oficina de la transportadora</span></label><div className="form-grid"><label>Notas para el proveedor<textarea name="providerNotes" value={form.providerNotes} onChange={update} placeholder="Indicaciones para la entrega" rows="2" /></label><label>Notas internas<textarea name="internalNotes" value={form.internalNotes} onChange={update} placeholder="Algo más que debamos saber" rows="2" /></label></div></div><div className="form-section"><h3>Método de pago</h3><div className="payment-options"><label className={form.payment === 'Pago contra entrega' ? 'selected' : ''}><input type="radio" name="payment" value="Pago contra entrega" checked={form.payment === 'Pago contra entrega'} onChange={update} /><span><strong>Pago contra entrega</strong><small>Pagas al recibir tu pedido</small></span><Check size={16} /></label><label className={form.payment === 'Pago anticipado' ? 'selected' : ''}><input type="radio" name="payment" value="Pago anticipado" checked={form.payment === 'Pago anticipado'} onChange={update} /><span><strong>Pago anticipado</strong><small>Te contactaremos para coordinarlo</small></span><Check size={16} /></label></div></div>{error && <div className="form-error">{error}</div>}<div className="checkout-total"><span>Total del pedido</span><strong>{formatCOP(total)}</strong></div><button disabled={submitting} className="button button-primary button-wide submit-button" type="submit">{submitting ? 'Enviando pedido…' : 'Confirmar pedido'} {!submitting && <ArrowRight size={17} />}</button><p className="secure-note">Tus datos se usarán únicamente para procesar y entregar tu pedido.</p></form></>}</div></div>
}

function Root() { return <BrowserRouter><App /></BrowserRouter> }
createRoot(document.getElementById('root')).render(<Root />)

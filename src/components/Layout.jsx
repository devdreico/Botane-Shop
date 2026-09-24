import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ArrowRight, Menu, ShoppingBag, Sparkles, X } from 'lucide-react'
import { ANNOUNCEMENT_TEXT, RAIN_STREAKS, STORE_ADDRESS, WHATSAPP_URL } from '../config/store'
import { useCartContext } from '../cart/CartContext'
import { eeatFooterLinks } from '../lib/internalLinks'
import CartDrawer from './CartDrawer'
import logoSrc from '../../assets/IMG/botane-logo-fondo-transparente.png'

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const { itemsCount, cart, changeQuantity, removeFromCart, total, combo } = useCartContext()
  const location = useLocation()
  const navigate = useNavigate()
  const closeMenu = () => setMenuOpen(false)
  const footerLinks = eeatFooterLinks()

  return (
    <div className={`app-shell ${location.pathname === '/pedido' ? 'checkout-route' : ''}`}>
      <a className="skip-link" href="#main-content">
        Saltar al contenido
      </a>
      <div className="rain-layer" aria-hidden="true">
        {RAIN_STREAKS.map((streak) => (
          <span
            className="rain-streak"
            key={streak.id}
            style={{
              '--rain-top': streak.top,
              '--rain-width': streak.width,
              '--rain-delay': streak.delay,
              '--rain-duration': streak.duration,
              '--rain-opacity': streak.opacity,
            }}
          />
        ))}
      </div>
      <div className="announcement">
        <Sparkles size={14} /> {ANNOUNCEMENT_TEXT}
      </div>
      <header className="site-header">
        <button
          className="icon-button mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <Link className="brand" to="/" onClick={closeMenu} aria-label="Botané inicio">
          <img className="brand-logo" src={logoSrc} alt="" />
          <span>botané</span>
        </Link>
        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          <Link className={location.pathname === '/' ? 'active' : ''} to="/" onClick={closeMenu}>
            Inicio
          </Link>
          <Link className={location.pathname.startsWith('/catalogo') ? 'active' : ''} to="/catalogo" onClick={closeMenu}>
            Catálogo
          </Link>
          <Link
            className={location.pathname.startsWith('/guias') ? 'active' : ''}
            to="/guias"
            onClick={closeMenu}
          >
            Guías
          </Link>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Hablemos <ArrowRight size={14} />
          </a>
        </nav>
        <button className="cart-button" onClick={() => setCartOpen(true)} aria-label="Abrir carrito">
          <ShoppingBag size={19} />
          <span>Carrito</span>
          {itemsCount > 0 && <b>{itemsCount}</b>}
        </button>
      </header>
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <div>
          <Link className="brand footer-brand" to="/">
            <img className="brand-logo" src={logoSrc} alt="" />
            <span>botané</span>
          </Link>
        </div>
        <div className="footer-links">
          <Link to="/catalogo">Catálogo</Link>
          <Link to="/guias">Guías</Link>
          {footerLinks
            .filter((item) => item.to !== '/guias')
            .map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            WhatsApp 24/7
          </a>
          <span>{STORE_ADDRESS}</span>
          <span>Colombia</span>
        </div>
        <small>© 2026 Botané</small>
        <small className="footer-service">
          Servicio administrado por{' '}
          <a href="https://ya.presentto.online" target="_blank" rel="noreferrer">
            Alexandra Ortiz · 3219517348 · ya.presentto.online
          </a>
        </small>
      </footer>
      {cartOpen && (
        <CartDrawer
          cart={cart}
          changeQuantity={changeQuantity}
          removeFromCart={removeFromCart}
          total={total}
          combo={combo}
          onClose={() => setCartOpen(false)}
          onCatalog={() => {
            setCartOpen(false)
            navigate('/catalogo')
          }}
        />
      )}
    </div>
  )
}

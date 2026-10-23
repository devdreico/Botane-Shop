import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Cookie, Settings2, X } from 'lucide-react'

const STORAGE_KEY = 'botane-cookie-consent'
const CONSENT_VERSION = 1

function readConsent() {
  try {
    const stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || 'null')
    if (stored?.version === CONSENT_VERSION && typeof stored.analytics === 'boolean') return stored
  } catch {
    return null
  }
  return null
}

export default function CookieConsent() {
  const [consent, setConsent] = useState(readConsent)
  const [preferencesOpen, setPreferencesOpen] = useState(false)
  const [analyticsAllowed, setAnalyticsAllowed] = useState(() => readConsent()?.analytics ?? false)

  useEffect(() => {
    const openPreferences = () => {
      setAnalyticsAllowed(readConsent()?.analytics ?? false)
      setPreferencesOpen(true)
    }
    window.addEventListener('botane:open-cookie-preferences', openPreferences)
    return () => window.removeEventListener('botane:open-cookie-preferences', openPreferences)
  }, [])

  const saveConsent = (allowAnalytics) => {
    const nextConsent = {
      version: CONSENT_VERSION,
      analytics: allowAnalytics,
      savedAt: new Date().toISOString(),
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextConsent))
    } catch {
      // La decisión sigue activa durante esta visita aunque el almacenamiento esté bloqueado.
    }
    setConsent(nextConsent)
    setPreferencesOpen(false)
  }

  if (consent && !preferencesOpen) return null

  return (
    <aside className="cookie-panel" aria-label="Preferencias de privacidad">
      <div className="cookie-panel-heading">
        <span className="cookie-icon" aria-hidden="true">
          {preferencesOpen ? <Settings2 size={18} /> : <Cookie size={18} />}
        </span>
        <div>
          <strong>{preferencesOpen ? 'Preferencias de cookies' : 'Tu privacidad importa'}</strong>
          <p>
            Usamos almacenamiento necesario para el carrito y el tema. No cargamos analítica ni publicidad de terceros.
            Consulta la <Link to="/politica-de-cookies">política de cookies</Link>.
          </p>
        </div>
        {consent && preferencesOpen && (
          <button
            className="cookie-close icon-button"
            type="button"
            aria-label="Cerrar preferencias"
            onClick={() => setPreferencesOpen(false)}
          >
            <X size={18} />
          </button>
        )}
      </div>

      {preferencesOpen ? (
        <div className="cookie-options">
          <label className="cookie-option">
            <span>
              <strong>Necesarias</strong>
              <small>Carrito, tema y seguridad. Siempre activas.</small>
            </span>
            <input type="checkbox" checked disabled readOnly aria-label="Almacenamiento necesario activo" />
          </label>
          <label className="cookie-option">
            <span>
              <strong>Analítica</strong>
              <small>Permite medición opcional si se configura en el futuro.</small>
            </span>
            <input
              type="checkbox"
              checked={analyticsAllowed}
              onChange={(event) => setAnalyticsAllowed(event.target.checked)}
              aria-label="Permitir analítica opcional"
            />
          </label>
          <div className="cookie-actions">
            <button className="button button-quiet" type="button" onClick={() => setPreferencesOpen(false)}>
              Cancelar
            </button>
            <button className="button button-primary" type="button" onClick={() => saveConsent(analyticsAllowed)}>
              Guardar preferencias
            </button>
          </div>
        </div>
      ) : (
        <div className="cookie-actions">
          <button className="button button-quiet" type="button" onClick={() => saveConsent(false)}>
            Solo necesarias
          </button>
          <button className="button button-outline" type="button" onClick={() => setPreferencesOpen(true)}>
            Configurar
          </button>
          <button className="button button-primary" type="button" onClick={() => saveConsent(true)}>
            Aceptar
          </button>
        </div>
      )}
    </aside>
  )
}
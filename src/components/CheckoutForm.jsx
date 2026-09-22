import { useState } from 'react'
import { ArrowRight, CreditCard, PackageCheck, Truck } from 'lucide-react'
import { FORM_ENDPOINT, FREE_SHIPPING_LABEL, MP_PAYMENT_LINK, WHATSAPP_URL } from '../config/store'
import { buildFormspreePayload } from '../lib/order'
import { isValidColombianPhone } from '../lib/format'
import { useCartContext } from '../cart/CartContext'

const EMPTY_FORM = { nombre: '', telefono: '', ciudad_departamento: '', direccion: '' }

export default function CheckoutForm({ order, onSuccess }) {
  const { clearCart } = useCartContext()
  const [form, setForm] = useState(EMPTY_FORM)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const update = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const validate = () => {
    if (!form.nombre.trim() || form.nombre.trim().length < 2) return 'Ingresa tu nombre completo.'
    if (!isValidColombianPhone(form.telefono)) return 'Ingresa un celular colombiano válido de 10 dígitos (inicia en 3).'
    if (!form.ciudad_departamento.trim() || form.ciudad_departamento.trim().length < 3)
      return 'Ingresa tu ciudad y departamento.'
    if (!form.direccion.trim() || form.direccion.trim().length < 8) return 'Ingresa una dirección válida (mín. 8 caracteres).'
    return ''
  }

  const submit = async (payment) => {
    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }
    setSubmitting(true)
    setError('')
    const payload = buildFormspreePayload({ form, order, payment })
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!response.ok) throw new Error('formspree')
      clearCart()
      if (payment === 'Mercado Pago' && MP_PAYMENT_LINK) {
        window.location.href = MP_PAYMENT_LINK
        return
      }
      onSuccess(payment)
    } catch {
      setError('No pudimos enviar el pedido. Revisa tu conexión o escríbenos por WhatsApp.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className="checkout-form" onSubmit={(e) => e.preventDefault()}>
      <div className="form-section">
        <h3>Datos de entrega</h3>
        <div className="form-grid">
          <label>
            Nombre
            <input required name="nombre" value={form.nombre} onChange={update} placeholder="Tu nombre" autoComplete="name" />
          </label>
          <label>
            Teléfono
            <div className="phone-field">
              <span>(+57)</span>
              <input
                required
                name="telefono"
                type="tel"
                inputMode="numeric"
                value={form.telefono}
                onChange={update}
                placeholder="300 000 0000"
                autoComplete="tel"
              />
            </div>
          </label>
          <label>
            Ciudad + Departamento
            <input
              required
              name="ciudad_departamento"
              value={form.ciudad_departamento}
              onChange={update}
              placeholder="Ej. Bogotá D.C."
              autoComplete="address-level2"
            />
          </label>
          <label className="full">
            Dirección
            <input
              required
              name="direccion"
              value={form.direccion}
              onChange={update}
              placeholder="Calle, número, barrio"
              autoComplete="street-address"
            />
          </label>
        </div>
      </div>

      <div className="payment-actions">
        <div className="checkout-total">
          <span>Total del pedido</span>
          <strong>{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(order.total)}</strong>
        </div>
        <div className="ship-guarantee">
          <Truck size={16} /> {FREE_SHIPPING_LABEL} siempre · unidad o múltiple
        </div>
        {error && <div className="form-error">{error}</div>}
        <div className="payment-buttons">
          <button
            type="button"
            className="button button-primary pay-button"
            disabled={submitting}
            onClick={() => submit('Mercado Pago')}
          >
            <CreditCard size={17} />
            {submitting ? 'Enviando…' : 'Pagar ya con Mercado Libre'}
          </button>
          <button
            type="button"
            className="button button-outline pay-button"
            disabled={submitting}
            onClick={() => submit('Pago contra entrega')}
          >
            <PackageCheck size={17} />
            {submitting ? 'Enviando…' : 'Pagar contra entrega'}
          </button>
        </div>
        <p className="secure-note">
          Tus datos se usarán únicamente para procesar y entregar tu pedido.{' '}
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            ¿Dudas? WhatsApp
          </a>
        </p>
        {!MP_PAYMENT_LINK && (
          <p className="secure-note mp-note">
            Configura <code>VITE_MP_PAYMENT_LINK</code> en <code>.env</code> para activar el pago con Mercado Libre.
          </p>
        )}
        <button type="button" className="text-button" onClick={() => submit('Pago contra entrega')} hidden>
          confirmar
        </button>
        <ArrowRight className="sr-only" size={1} />
      </div>
    </form>
  )
}

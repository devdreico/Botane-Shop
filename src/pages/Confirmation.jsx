import { Link, useSearchParams } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import Layout from '../components/Layout'
import { WHATSAPP_URL } from '../config/store'

export default function Confirmation() {
  const [params] = useSearchParams()
  const method = params.get('metodo') || 'Pago contra entrega'
  const isMp = method === 'Mercado Pago'

  return (
    <Layout>
      <section className="checkout-page container">
        <div className="success-state confirmation">
          <div className="success-icon">
            <Check />
          </div>
          <span className="eyebrow">Pedido recibido</span>
          <h2>
            Gracias por elegir
            <br />
            <em>Botané.</em>
          </h2>
          <p>
            {isMp
              ? 'Recibimos tu pedido. Te contactaremos muy pronto para confirmarlo y coordinar la entrega por WhatsApp.'
              : 'Recibimos tu pedido. Te contactaremos muy pronto para confirmarlo y coordinar la entrega por WhatsApp.'}
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="button button-primary">
            Seguir mi compra por WhatsApp <ArrowRight size={16} />
          </a>
          <Link to="/catalogo" className="text-button">
            Volver al catálogo
          </Link>
        </div>
      </section>
    </Layout>
  )
}

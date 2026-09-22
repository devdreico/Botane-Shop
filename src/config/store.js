export const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || 'https://formspree.io/f/xoeqoven'
export const MP_PAYMENT_LINK = import.meta.env.VITE_MP_PAYMENT_LINK || ''
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '573144572008'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Botané, quiero conocer el catálogo y recibir atención.')}`
export const STORE_ADDRESS = 'Funza · Cra 19 Bis #9-15'
export const BRAND_NAME = 'Botané'
export const ANNOUNCEMENT_TEXT = 'Envío gratis · Entrega en menos de 5 días · Pagas al recibir'
export const FREE_SHIPPING = true
export const FREE_SHIPPING_LABEL = 'Envío gratis'
export const MAX_PRODUCTS = 10

export const RAIN_STREAKS = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  top: `${(index * 29) % 103}%`,
  width: `${36 + ((index * 17) % 80)}px`,
  delay: `${-((index * 0.73) % 7)}s`,
  duration: `${5 + ((index * 11) % 5)}s`,
  opacity: `${0.12 + ((index * 7) % 10) / 100}`,
}))

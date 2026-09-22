import lullabitesImage from '../../assets/IMG/img PRODUCTS/IMG 3/LULLABITESGOMITASPARADORMIR.jpg'
import herbpadsImage from '../../assets/IMG/img PRODUCTS/IMG 2/PARCHESMUSCULARES1.jpg'
import herbpadsImage2 from '../../assets/IMG/img PRODUCTS/IMG 2/PARCHESMUSCULARES2.jpeg'
import herbpadsImage3 from '../../assets/IMG/img PRODUCTS/IMG 2/PARCHESMUSCULARES3.jpeg'
import herbpadsImage4 from '../../assets/IMG/img PRODUCTS/IMG 2/PARCHESMUSCULARES4.jpeg'
import herbpadsImage5 from '../../assets/IMG/img PRODUCTS/IMG 2/PARCHESMUSUCLARES5.jpeg'
import citrateImage from '../../assets/IMG/img PRODUCTS/IMG 1/CITRATODEMAGNESIOECAPSULAS.jpg'
import magnesiumOilImage from '../../assets/IMG/img PRODUCTS/IMG 4/ACEITEDEMAGNESION.jpg'

/**
 * Catálogo MVP (máx. 15 productos).
 * type: 'fisico' | 'digital'
 * shipping: siempre gratis (no se calcula costo)
 * Reemplazar/crear entradas cuando llegue el catálogo real.
 */
export const PRODUCTS = [
  {
    id: 'lullabites',
    type: 'fisico',
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
    faq: [
      { q: '¿Cómo se toma?', a: 'Sigue las indicaciones del empaque.' },
      { q: '¿Tiene envío gratis?', a: 'Sí, siempre. Unidad o múltiple.' },
      { q: '¿Cómo pago?', a: 'Mercado Pago o contra entrega.' },
    ],
    deliveryNote: 'Entrega física en menos de 5 días',
    price: 50000,
    image: lullabitesImage,
    gallery: [lullabitesImage],
    accent: 'sage',
    featured: true,
    seo: { title: 'Lullabites · Botané', description: 'Gomitas con melatonina. Envío gratis.' },
  },
  {
    id: 'herbpads',
    type: 'fisico',
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
    faq: [
      { q: '¿Cómo se usan?', a: 'Aplica sobre la piel limpia.' },
      { q: '¿Tiene envío gratis?', a: 'Sí, siempre. Unidad o múltiple.' },
      { q: '¿Cómo pago?', a: 'Mercado Pago o contra entrega.' },
    ],
    deliveryNote: 'Entrega física en menos de 5 días',
    price: 40000,
    image: herbpadsImage,
    gallery: [herbpadsImage, herbpadsImage2, herbpadsImage3, herbpadsImage4, herbpadsImage5],
    accent: 'cream',
    featured: true,
    seo: { title: 'Herbpads · Botané', description: '35 parches herbales. Envío gratis.' },
  },
  {
    id: 'aceite-magnesio',
    type: 'fisico',
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
    faq: [
      { q: '¿Cómo se aplica?', a: 'Masajea sobre la piel limpia.' },
      { q: '¿Tiene envío gratis?', a: 'Sí, siempre. Unidad o múltiple.' },
      { q: '¿Cómo pago?', a: 'Mercado Pago o contra entrega.' },
    ],
    deliveryNote: 'Entrega física en menos de 5 días',
    price: 37000,
    image: magnesiumOilImage,
    gallery: [magnesiumOilImage],
    accent: 'terracotta',
    featured: true,
    seo: { title: 'Aceite de magnesio · Botané', description: 'Aceite tópico. Envío gratis.' },
  },
  {
    id: 'citrato-magnesio',
    type: 'fisico',
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
    faq: [
      { q: '¿Cuándo se toma?', a: 'Sigue las indicaciones del empaque.' },
      { q: '¿Tiene envío gratis?', a: 'Sí, siempre. Unidad o múltiple.' },
      { q: '¿Cómo pago?', a: 'Mercado Pago o contra entrega.' },
    ],
    deliveryNote: 'Entrega física en menos de 5 días',
    price: 45000,
    image: citrateImage,
    gallery: [citrateImage],
    accent: 'forest',
    featured: false,
    seo: { title: 'Citrato de magnesio · Botané', description: '60 cápsulas. Envío gratis.' },
  },
]

export default PRODUCTS

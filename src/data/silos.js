export const SILOS = {
  descanso: {
    id: 'descanso',
    label: 'Descanso y sueño',
    hubSlug: 'ritual-de-sueno',
    productIds: ['lullabites'],
  },
  recuperacion: {
    id: 'recuperacion',
    label: 'Músculos y recuperación',
    hubSlug: 'recuperacion-muscular-natural',
    productIds: ['herbpads', 'aceite-magnesio'],
  },
  suplementos: {
    id: 'suplementos',
    label: 'Suplementos y bienestar diario',
    hubSlug: 'suplementos-diarios-guia',
    productIds: [
      'colageno-uva',
      'vitamina-b-complex',
      'omega-369-magnesio',
      'ashwagandha-ksm',
      'probioticos-zinc',
      'betaglucanos-ganoderma',
      'capuchino-colageno',
    ],
  },
}

export const SILO_ORDER = ['descanso', 'recuperacion', 'suplementos']

export default SILOS

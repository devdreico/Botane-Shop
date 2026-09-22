/**
 * Combos configurables (packs con precio especial).
 * productIds: ids exactos del carrito que activan el combo (cantidad 1 c/u).
 * price: precio especial del combo.
 */
export const COMBOS = [
  {
    id: 'pack-ritual',
    label: 'Pack rehabilitante',
    eyebrow: 'Sistema Botané',
    headline: 'Todo tu ritual<br /><em>en un pack.</em>',
    lead: 'Un mini ecosistema de bienestar para preparar la noche, cuidar el cuerpo y sostener tu rutina diaria.',
    rhythm: 'Acompaña hábitos que cuidan tu ciclo sueño-vigilia: horarios, relajación y menos estímulos al final del día.',
    productIds: ['lullabites', 'herbpads', 'aceite-magnesio', 'citrato-magnesio'],
    price: 160000,
    pillars: [
      { index: '01', title: 'Noche', text: 'Lullabites · ritual de descanso' },
      { index: '02', title: 'Cuerpo', text: 'Aceite + Herbpads · cuidado localizado' },
      { index: '03', title: 'Rutina', text: 'Citrato · soporte diario de magnesio' },
    ],
  },
]

export default COMBOS

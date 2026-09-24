/**
 * Guías SEO — silos estrictos (Hub & Spoke).
 * type: 'hub' | 'spoke' · silo: descanso | recuperacion | suplementos
 * anchors: variantes de texto ancla para enlaces internos (nunca genéricas).
 */

const WIKI = {
  melatonina: 'https://es.wikipedia.org/wiki/Melatonina',
  sueno: 'https://es.wikipedia.org/wiki/Sue%C3%B1o',
  colageno: 'https://es.wikipedia.org/wiki/Col%C3%A1geno',
  magnesio: 'https://es.wikipedia.org/wiki/Magnesio',
  ashwagandha: 'https://es.wikipedia.org/wiki/Withania_somnifera',
  probiotico: 'https://es.wikipedia.org/wiki/Probi%C3%B3tico',
  omega3: 'https://es.wikipedia.org/wiki/%C3%81cido_eicosapentaenoico',
  vitaminaB: 'https://es.wikipedia.org/wiki/Vitamina_B',
  ganoderma: 'https://es.wikipedia.org/wiki/Ganoderma_lucidum',
}

export const GUIDES = [
  // ══════════════ SILO DESCANSO — HUB ══════════════
  {
    slug: 'ritual-de-sueno',
    type: 'hub',
    silo: 'descanso',
    intent: 'informativa',
    title: 'Ritual de sueño: guía completa para dormir mejor en Colombia',
    description:
      'Guía definitiva del ritual de sueño: higiene del sueño, rutina nocturna, melatonina y hábitos que ayudan a conciliar el descanso en 2026.',
    answer:
      'Un ritual de sueño es una secuencia corta y constante de hábitos —luz, temperatura, pantallas y relajación— que le avisa al cuerpo que es hora de dormir. Practicada 30 a 60 minutos antes de acostarse, mejora la calidad del descanso y reduce el tiempo que tardas en dormirte.',
    keyword: 'ritual de sueño',
    entity: { name: 'Sueño', sameAs: WIKI.sueno },
    anchors: [
      'ritual de sueño',
      'rutina para dormir mejor',
      'cómo preparar la noche',
      'hábitos de descanso nocturno',
    ],
    productIds: ['lullabites'],
    ctaAnchors: ['gomitas Lullabites para el ritual nocturno'],
    datePublished: '2026-09-23',
    dateModified: '2026-09-23',
    sections: [
      {
        h2: '¿Qué es un ritual de sueño?',
        p: 'Un ritual de sueño (o higiene del sueño activa) es el conjunto de acciones repetibles que haces al final del día para bajar la activación del sistema nervioso. No se trata de magia: es condicionamiento. Si cada noche haces lo mismo —misma luz tenue, misma hora, mismo aroma o té— el cerebro asocia la señal con “viene el descanso” y anticipa la somnolencia.',
        list: [
          'Horario constante de acostarte y levantarte, incluso fines de semana.',
          'Luz cálida y baja 60 minutos antes de dormir.',
          'Pantallas fuera o en modo noche; nada de feeds estimulantes.',
          'Cuarto oscuro, fresco (18–22 °C) y silencioso.',
          'Cierre mental: diario, respiración o lectura ligera.',
        ],
      },
      {
        h2: '¿Cuánto tiempo tarda en notarse?',
        p: 'La mayoría de las personas nota diferencias en 7 a 14 días de constancia. El cuerpo responde primero a la regularidad del horario; después se suman los hábitos de ambiente y la reducción de estimulantes por la noche.',
      },
      {
        h2: 'Pasos de una rutina nocturna efectiva',
        ordered: [
          'Cierra pantallas 30–60 minutos antes de acostarte.',
          'Baja luces y evita comidas pesadas o cafeína tardía.',
          'Hidrata, higiene ligera y ropa cómoda de dormir.',
          'Respiración 4-7-8, estiramientos suaves o lectura.',
          'Mismo lugar, misma hora; si no concilias en 20 minutos, levántate y vuelve con calma.',
        ],
      },
      {
        h2: 'Cuándo buscar ayuda profesional',
        p: 'Consulta a un profesional de la salud si el insomnio dura más de tres semanas, hay ronquido fuerte con pausas respiratorias, dolor nocturno frecuente o si tomas medicamentos. Los suplementos y gomitas complementan hábitos; no reemplazan un diagnóstico.',
      },
    ],
    faqs: [
      {
        q: '¿Qué es un ritual de sueño y para qué sirve?',
        a: 'Es una secuencia constante de hábitos previos a dormir que reduce la activación mental y física. Sirve para acortar el tiempo de conciliación y mejorar la profundidad del descanso.',
      },
      {
        q: '¿Cada cuánto debo hacer el ritual de sueño?',
        a: 'Todos los días, incluidos fines de semana, con horarios lo más estables posible. La constancia es más importante que la perfección de un solo hábito.',
      },
      {
        q: '¿Las gomitas con melatonina ayudan en el ritual?',
        a: 'Pueden ser un ancla sensorial y práctica al final de la noche. Lullabites está pensado para acompañar la rutina, sin sustituir higiene del sueño ni indicación médica.',
      },
      {
        q: '¿Cuántas semanas tarda en hacer efecto una rutina nocturna?',
        a: 'Muchos notan cambios en 1 a 2 semanas. Si no hay mejora en 3 semanas, conviene revisar hábitos y consultar profesional.',
      },
    ],
    sources: [
      { label: 'MedlinePlus — Sueño', url: 'https://medlineplus.gov/spanish/sleep.html' },
      { label: 'NIH — Sleep and health', url: 'https://www.nhlbi.nih.gov/health/sleep' },
    ],
  },
  {
    slug: 'melatonina-para-dormir',
    type: 'spoke',
    silo: 'descanso',
    intent: 'informativa',
    title: 'Melatonina para dormir: qué es, cuándo funciona y cómo usarla',
    description:
      'Todo sobre la melatonina para dormir en Colombia: qué es, dosis habituales, cuándo tomarla, mitos y cómo combinarla con un buen ritual de sueño.',
    answer:
      'La melatonina es una hormona que el cerebro libera cuando baja la luz y que participa en el reloj biológico. Los suplementos se usan ocasionalmente para desfases o para anclar una hora de sueño regular; no son pastillas para “apagar” el insomnio crónico.',
    keyword: 'melatonina para dormir',
    entity: { name: 'Melatonina', sameAs: WIKI.melatonina },
    anchors: [
      'melatonina para dormir',
      'qué es la melatonina',
      'melatonina y sueño',
      'cómo funciona la melatonina',
    ],
    productIds: ['lullabites'],
    ctaAnchors: ['gomitas con melatonina Lullabites'],
    datePublished: '2026-09-23',
    sections: [
      {
        h2: '¿Qué es la melatonina?',
        p: 'La melatonina es una hormona natural producida por la glándula pineal. Su nivel sube de noche con la oscuridad y baja con la luz de la mañana. Por eso se la asocia con la señal de “es hora de dormir” y con el ajuste del ritmo circadiano.',
      },
      {
        h2: '¿La melatonina sirve para el insomnio?',
        p: 'Puede ayudar a acortar el tiempo que tardas en dormirte cuando el problema es de timing (acostarse temprano, jet lag, turnos). En insomnio crónico multifactorial, la evidencia es más moderada: funciona mejor junto con restricción de estímulos y horarios estables.',
        list: [
          'Más útil: desfases, horarios irregulares, conciliación lenta puntual.',
          'Menos útil: despertares nocturnos por dolor o ansiedad intensa.',
          'Siempre: misma hora, luz tenue y sin alcohol/cafeína tardía.',
        ],
      },
      {
        h2: '¿Cómo y cuándo tomarla?',
        ordered: [
          'Toma la dosis del empaque 30–60 minutos antes de la hora objetivo de dormir.',
          'Combínala con la luz baja y pantallas fuera: la señal es el conjunto.',
          'Empieza con la presentación más baja que indique el fabricante.',
          'No la mezcles con alcohol ni con sedantes sin indicación profesional.',
        ],
      },
      {
        h2: 'Mitos frecuentes',
        p: '“Melatonina = dormí 8 horas” es falso: ayuda con la conciliación y el reloj, no garantiza armar todo el sueño. Tampoco es un somnífero de acción fuerte como los recetados. La calidad del cuarto y la regularidad siguen siendo el 70 % del resultado.',
      },
    ],
    faqs: [
      {
        q: '¿La melatonina es segura para tomar todos los días?',
        a: 'El uso a corto plazo según el empaque suele tolerarse bien en adultos sanos. Para uso prolongado, consulta profesional de la salud.',
      },
      {
        q: '¿Cuánto tarda en hacer efecto la melatonina?',
        a: 'Muchos sienten sueño en 30 a 60 minutos. El efecto máximo depende de la fórmula y de tu rutina previa.',
      },
      {
        q: '¿Puedo tomar melatonina con gomitas?',
        a: 'Sí, si la fórmula indica melatonina en gomitas como Lullabites: sigue las porciones del empaque y respeta la hora fija.',
      },
      {
        q: '¿La melatonina engaña al cuerpo?',
        a: 'No “engaña”: refuerza la señal de oscuridad. Funciona mejor cuando luces y horario también cambian.',
      },
    ],
    sources: [
      { label: 'MedlinePlus — Melatonina', url: 'https://medlineplus.gov/spanish/melatonin.html' },
      { label: 'Wikipedia — Melatonina', url: WIKI.melatonina },
    ],
  },
  {
    slug: 'rutina-nocturna-bienestar',
    type: 'spoke',
    silo: 'descanso',
    intent: 'informativa',
    title: 'Rutina nocturna de bienestar: checklist de 45 minutos para cerrar el día',
    description:
      'Rutina nocturna práctica de 45 minutos: luz, comida, higiene, respiración y anclas sensoriales para dormir mejor sin complicarte.',
    answer:
      'Una rutina nocturna de bienestar ordena 45 minutos previos a dormir en cuatro bloques —entorno, cuerpo, mente y ancla— para bajar estímulos y preparar el descanso. La constancia importa más que el ritual perfecto o los gadgets.',
    keyword: 'rutina nocturna',
    entity: { name: 'Sueño', sameAs: WIKI.sueno },
    anchors: [
      'rutina nocturna de bienestar',
      'checklist para dormir',
      'qué hacer antes de dormir',
      'cierre del día',
    ],
    productIds: ['lullabites'],
    datePublished: '2026-09-23',
    sections: [
      {
        h2: 'Checklist de 45 minutos',
        ordered: [
          'T-45: cierra correos y redes; baja luces del hogar.',
          'T-35: cena ligera o merienda proteica simple; evita alcohol.',
          'T-25: higiene (ducha tibia, dientes, ropa de dormir).',
          'T-15: respiración o lectura en papel; si usas gomitas, es un buen momento de ancla.',
          'T-0: cuarto listo (oscuro, fresco, teléfono afuera o en modo avión).',
        ],
      },
      {
        h2: 'Anclas sensoriales que sí funcionan',
        p: 'El cerebro responde a lo repetido: la misma taza, el mismo aroma, el mismo playlist lento o la misma gomita de sabor fresa pueden marcar el final del día. Elige una ancla barata y sostenible; no necesitas diez.',
        list: [
          'Luz cálida fija (lámpara de mesa, no techo).',
          'Aroma constante (lavanda, madera, lo que toleres).',
          'Gestito de ritual: gomitas, té descafeinado o diario de 3 líneas.',
        ],
      },
      {
        h2: 'Errores que arruinan la rutina',
        list: [
          'Snooze de alarma y horarios caóticos el fin de semana.',
          'Series de tensión o videojuegos hasta la cama.',
          'Cena copiosa o alcohol “para dormir” (fragmenta el sueño).',
          'Móvil en la almohada: luz + dopamina = más desvelo.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Qué hora es ideal para empezar la rutina nocturna?',
        a: 'Calcula tu hora de dormir y resta 45 a 60 minutos. Ejemplo: dormir 23:00 → empezar la rutina 22:00–22:15.',
      },
      {
        q: '¿La rutina nocturna reemplaza a la melatonina?',
        a: 'No: son capas distintas. La rutina es la base; un complemento como Lullabites puede ser el gesto final si el empaque te aplica.',
      },
      {
        q: '¿Sirve si duermo poco por trabajo?',
        a: 'Sí, aunque con menos horas el ritual ayuda a que ese sueño sea más reparador. Aun así, prioriza sumar ventanas de sueño cuando puedas.',
      },
    ],
    sources: [
      { label: 'CDC — Sleep and sleep disorders', url: 'https://www.cdc.gov/sleep/' },
      { label: 'MedlinePlus — Higiene del sueño', url: 'https://medlineplus.gov/spanish/sleep.html' },
    ],
  },
  {
    slug: 'gomitas-para-dormir',
    type: 'spoke',
    silo: 'descanso',
    intent: 'comercial',
    title: 'Gomitas para dormir: cómo elegirlas y qué revisar antes de comprar',
    description:
      'Gomitas para dormir en Colombia: qué revisar en la etiqueta, melatonina, sabor, horarios y cuándo elegir Lullabites para tu ritual nocturno.',
    answer:
      'Las gomitas para dormir suelen combinar melatonina u otros ingredientes de apoyo en formato de gomita. Al elegirlas, revisa dosis por unidad, lista de ingredientes, sabor, cantidad por envase y que la marca indique claramente las porciones recomendadas.',
    keyword: 'gomitas para dormir',
    entity: { name: 'Melatonina', sameAs: WIKI.melatonina },
    anchors: [
      'gomitas para dormir',
      'gomitas con melatonina',
      'elegir gomitas de sueño',
      'Lullabites gomitas',
    ],
    productIds: ['lullabites'],
    ctaAnchors: ['comprar Lullabites gomitas para dormir'],
    datePublished: '2026-09-23',
    sections: [
      {
        h2: '¿Qué son las gomitas para dormir?',
        p: 'Son suplementos en forma de goma de masticar que aportan melatonina u otras sustancias de apoyo al descanso, con la ventaja de un formato fácil y con sabor. No son caramelos: respeta la dosis del empaque y la hora fija.',
      },
      {
        h2: 'Lista de compra inteligente',
        list: [
          'Dosis de melatonina por unidad (empezar baja).',
          'Nº de gomitas por envase y costo por porción.',
          'Ingredientes y alergenos visibles.',
          'Sabor que realmente disfrutes (la constancia depende del gusto).',
          'Instrucciones claras de uso y conservación.',
        ],
      },
      {
        h2: '¿Lullabites es para ti?',
        p: 'Lullabites es una gomita de sabor fresa con melatonina, pensada para el ritual nocturno en presentación de 60 unidades. Encaja si buscas un gesto simple y repetible al final del día, con envío gratis y opción de pago contra entrega o Mercado Pago por unidad.',
        list: ['60 gomitas por envase', 'Sabor fresa', 'Envío gratis en Colombia'],
      },
      {
        h2: 'Cómo combinarlas con tu rutina',
        ordered: [
          'Elige una hora objetivo de dormir y sosténla.',
          'Toma la gomita según el empaque 30–60 minutos antes.',
          'Baja luces y deja el teléfono fuera del alcance.',
          'Si en 2 semanas no notas cambios, revisa hábitos y consulta profesional.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Las gomitas para dormir enganchan?',
        a: 'La melatonina no genera dependencia típica de somníferos potentes. El riesgo real es abandonar los hábitos buenos y depender solo del producto.',
      },
      {
        q: '¿Cada cuánto puedo tomar gomitas con melatonina?',
        a: 'Sigue el empaque. Úsalas como apoyo en noches de rutina, no como sustituto de evaluación médica si el insomnio persiste.',
      },
      {
        q: '¿Lullabites tiene envío gratis?',
        a: 'Sí. La tienda Botané ofrece envío siempre gratis, con entrega en menos de 5 días y pago contra entrega o Mercado Pago.',
      },
      {
        q: '¿Puedo tomar gomitas con otras pastillas para dormir?',
        a: 'No combines sedantes o recetados sin indicación de tu profesional de la salud.',
      },
    ],
    sources: [
      { label: 'NIH — Melatonin', url: 'https://ods.od.nih.gov/factsheets/Melatonin-HealthProfessional/' },
    ],
  },

  // ══════════════ SILO RECUPERACIÓN — HUB ══════════════
  {
    slug: 'recuperacion-muscular-natural',
    type: 'hub',
    silo: 'recuperacion',
    intent: 'informativa',
    title: 'Recuperación muscular natural: guía completa post ejercicio y fatiga',
    description:
      'Guía de recuperación muscular natural: descanso, hidratación, masaje, parches herbales y aceite de magnesio para dolor muscular en Colombia.',
    answer:
      'La recuperación muscular natural combina sueño suficiente, proteína e hidratación, movimiento suave y terapias tópicas como masaje, parches o aceite de magnesio. No existe un atajo mágico: el músculo se repara con tiempo, calorías y consistencia.',
    keyword: 'recuperación muscular natural',
    entity: { name: 'Masaje', sameAs: 'https://es.wikipedia.org/wiki/Masaje' },
    anchors: [
      'recuperación muscular natural',
      'cómo recuperar los músculos',
      'dolores musculares qué hacer',
      'rutina de recuperación',
    ],
    productIds: ['herbpads', 'aceite-magnesio'],
    datePublished: '2026-09-23',
    sections: [
      {
        h2: '¿Qué es la recuperación muscular?',
        p: 'Es el proceso por el cual el tejido se repara tras microlesiones del ejercicio o del esfuerzo cotidiano. Incluye inflamación controlada, relleno de glucógeno, rehidratación y descanso del sistema nervioso. Acortar esta fase con sobrecarga es la vía rápida a la lesión.',
      },
      {
        h2: 'Los 5 pilares que sí mueven la aguja',
        list: [
          'Sueño de 7–9 horas (aquí entra en juego el descanso nocturno).',
          'Proteína repartida en el día y calorías suficientes.',
          'Hidratación + electrolitos según sudoración.',
          'Movilidad y cardio ligero al día siguiente (active recovery).',
          'Terapia local: masaje, frío/calor según momento, tópicos.',
        ],
      },
      {
        h2: 'Masaje, parches y aceite: cómo usarlos',
        ordered: [
          'Post esfuerzo agudo: frío o reposo relativo 24–48 h si hay inflamación marcada.',
          'Tensión mecánica: masaje con aceite de magnesio en zona cansada.',
          'Apoyo local continuo: parches herbales en la zona que más trabaja.',
          'Día siguiente: estiramientos suaves y caminata.',
        ],
      },
      {
        h2: 'Señales de alarma',
        p: 'Dolor intenso que no cede, hinchazón extrema, orina muy oscura o mareo obligan a pausar y consultar. La recuperación natural no reemplaza atención médica ante lesión aguda.',
      },
    ],
    faqs: [
      {
        q: '¿Qué es mejor para dolores musculares: calor o frío?',
        a: 'En agudo con inflamación, frío; en tensión crónica y rigidez, calor. Muchas personas alternan según sensación; evita calor sobre lesión reciente hinchada.',
      },
      {
        q: '¿Los parches herbales ayudan a recuperar?',
        a: 'Aportan alivio local y un hábito de cuidado. Combinados con descanso y movilidad, mejoran la sensación post esfuerzo.',
      },
      {
        q: '¿El aceite de magnesio es lo mismo que el magnesio en cápsulas?',
        a: 'No: uno es tópico para masaje y piel, el otro oral como suplemento. Son complementos de distinta vía.',
      },
      {
        q: '¿Cada cuánto debo masajear la zona cansada?',
        a: '1–2 veces al día en sesiones cortas suele bastar. Detén si el dolor aumenta.',
      },
    ],
    sources: [
      { label: 'AAP — Sports injury recovery', url: 'https://www.aap.org/en/patient-care/sports-injuries/' },
      { label: 'Wikipedia — Masaje', url: 'https://es.wikipedia.org/wiki/Masaje' },
    ],
  },
  {
    slug: 'parches-para-dolor-muscular',
    type: 'spoke',
    silo: 'recuperacion',
    intent: 'comercial',
    title: 'Parches para dolor muscular: cómo funcionan y cuándo usarlos',
    description:
      'Parches para dolor muscular en Colombia: tipos, colocación, duración, beneficios de los parches herbales Herbpads y consejos de uso diario.',
    answer:
      'Los parches para dolor muscular liberan sustancias activas o proporcionan calor/frío sobre la zona. Se colocan sobre piel limpia y seca, se retiran tras el tiempo indicado y sirven para alivio localizado en cuello, hombros, espalda baja o piernas tras el esfuerzo.',
    keyword: 'parches para dolor muscular',
    entity: { name: 'Dolor muscular', sameAs: 'https://es.wikipedia.org/wiki/Mialgia' },
    anchors: [
      'parches para dolor muscular',
      'parches herbales para músculos',
      'Herbpads parches',
      'alivio localizado muscular',
    ],
    productIds: ['herbpads'],
    ctaAnchors: ['comprar parches Herbpads'],
    datePublished: '2026-09-23',
    sections: [
      {
        h2: '¿Qué son los parches para dolor muscular?',
        p: 'Son dispositivos tópicos adhesivos que actúan en una zona concreta: aportan frescor, calor o activos herbales según la fórmula. Su ventaja es la precisión —tratas la zona molesta sin cubrir todo el cuerpo— y la facilidad para llevarlos al trabajo o al gym.',
      },
      {
        h2: 'Cómo colocarlos bien',
        ordered: [
          'Lava y seca la piel; evita cremas o vello muy denso en el punto de adhesión.',
          'Aplica sobre el punto de tensión real (no “a ojo”).',
          'Plana burbujas; no estires el parche en exceso.',
          'Respeta el tiempo máximo del empaque y retira con suavidad.',
        ],
      },
      {
        h2: 'Herbpads: 35 parches herbales',
        p: 'Herbpads de Botané son 35 parches herbales de aplicación localizada para acompañar músculos y articulaciones después de un día activo. Formato práctico para llevar, envío gratis y pago contra entrega o Mercado Pago en la unidad.',
        list: ['35 parches por presentación', 'Uso localizado', 'Ideal post jornada o entreno'],
      },
      {
        h2: 'Cuándo no usarlos',
        list: [
          'Piel herida, irritada o con dermatitis activa.',
          'Alergia conocida a algún componente del empaque.',
          'Dolor profundo súbito o traumatismo sin evaluar.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Cuánto tiempo debo dejar el parche muscular?',
        a: 'El tiempo indicado en el empaque. No lo aumentes pensando que “más horas = más efecto”.',
      },
      {
        q: '¿Puedo usar parches todos los días?',
        a: 'Si el producto lo permite y la piel tolera la adherencia, sí con rotación de zonas. Si aparece irritación, pausa.',
      },
      {
        q: '¿Herbpads sirve para la espalda y el cuello?',
        a: 'Sí: su diseño es para aplicación localizada en la zona que más lo necesite.',
      },
      {
        q: '¿Dónde comprar parches herbales en Colombia?',
        a: 'En Botané hay envío gratis, contra entrega y links de Mercado Pago para unidad individual.',
      },
    ],
    sources: [{ label: 'MedlinePlus — Muscle pain', url: 'https://medlineplus.gov/musclepain.html' }],
  },
  {
    slug: 'aceite-de-magnesio-para-masajes',
    type: 'spoke',
    silo: 'recuperacion',
    intent: 'comercial',
    title: 'Aceite de magnesio para masajes: beneficios, uso y consejos',
    description:
      'Aceite de magnesio para masajes en Colombia: cómo se aplica, para qué sirve en piel y músculos, y cómo integrarlo a tu rutina con el aceite Botané.',
    answer:
      'El aceite de magnesio es una solución tópica de alta concentración que se masajea sobre la piel para acompañar la relajación muscular y la hidratación. Se aplica en zonas cansadas, se masajea hasta absorber y se integra tras la ducha o después del ejercicio.',
    keyword: 'aceite de magnesio para masajes',
    entity: { name: 'Magnesio', sameAs: WIKI.magnesio },
    anchors: [
      'aceite de magnesio para masajes',
      'aceite de magnesio en piel',
      'masaje con magnesio tópico',
      'aceite relajante muscular',
    ],
    productIds: ['aceite-magnesio'],
    ctaAnchors: ['aceite de magnesio Botané 125 ml'],
    datePublished: '2026-09-23',
    sections: [
      {
        h2: '¿Qué es el aceite de magnesio?',
        p: 'Es una solución de cloruro de magnesio (o fórmula similar) de textura aceitosa o “oliosa-aguada” que se usa por vía tópica. El nombre “aceite” es de textura: no es un aceite esencial perfumado, sino un vehículo de magnesio para masaje.',
      },
      {
        h2: 'Beneficios prácticos en el día a día',
        list: [
          'Masaje relajante en hombros, pantorrillas y espalda alta.',
          'Hidratación de la piel al momento de la aplicación (tras ducha).',
          'Ritual de cierre del día o post entreno.',
          'Formato líquido fácil de dosificar con las manos.',
        ],
      },
      {
        h2: 'Cómo aplicarlo (paso a paso)',
        ordered: [
          'Aplica una pequeña cantidad sobre piel limpia.',
          'Masajea con movimientos circulares 1–2 minutos.',
          'Deja que se absorba; si hay residual, retira con paño.',
          'Usa 1–2 veces al día en la zona de interés.',
          'Lava las manos después; evita ojos y mucosas.',
        ],
      },
      {
        h2: 'Aceite de magnesio Botané',
        p: 'Nuestro aceite de magnesio de 125 ml está pensado para masaje e hidratación diaria: alta concentración, uso tópico y envío gratis en Colombia. Puedes pagarlo contra entrega o con Mercado Pago en compra individual.',
        list: ['125 ml', 'Uso tópico y masaje', 'Envío gratis'],
      },
    ],
    faqs: [
      {
        q: '¿El aceite de magnesio se lava después de aplicarlo?',
        a: 'No es obligatorio: se masajea hasta absorber. Si queda residuo o mucha sensación, puedes retirar con agua.',
      },
      {
        q: '¿Pica o arde un poco al aplicar?',
        a: 'Algunas pieles sienten ligero cosquilleo en zonas sensibles. Si hay ardor intenso o roedad, suspende y enjuaga.',
      },
      {
        q: '¿Sirve para masaje de piernas cansadas?',
        a: 'Sí: es uno de los usos más comunes, junto con hombros y zona lumbar tensa.',
      },
      {
        q: '¿El aceite de magnesio reemplaza las cápsulas de magnesio?',
        a: 'No. Son vías distintas: tópica para masaje/piel vs oral como suplemento según indicación.',
      },
    ],
    sources: [{ label: 'Wikipedia — Magnesio', url: WIKI.magnesio }],
  },
  {
    slug: 'citrato-de-magnesio-guia',
    type: 'spoke',
    silo: 'recuperacion',
    intent: 'informativa',
    title: 'Citrato de magnesio: qué es, para qué sirve y cómo se toma',
    description:
      'Guía del citrato de magnesio: diferencia con otros sales de magnesio, usos habituales, Max Calm vegano y cuándo consultar al profesional.',
    answer:
      'El citrato de magnesio es una sales de magnesio con buena disolución, usada como suplemento para aportar magnesio en la dieta. Se toma por vía oral según el producto, con abundante agua, y no sustituye una alimentación variada ni una indicación médica.',
    keyword: 'citrato de magnesio',
    entity: { name: 'Magnesio', sameAs: WIKI.magnesio },
    anchors: [
      'citrato de magnesio',
      'qué es el citrato de magnesio',
      'magnesio en polvo',
      'Max Calm magnesio',
    ],
    productIds: ['aceite-magnesio'],
    datePublished: '2026-09-23',
    sections: [
      {
        h2: '¿Qué es el citrato de magnesio?',
        p: 'Es la sal de magnesio formada con ácido cítrico. Destaca por disolverse bien en agua. El magnesio es un mineral implicado en función muscular, energía y sistema nervioso; el citrato es una de las formas comerciales habituales en polvo o cápsulas.',
      },
      {
        h2: '¿En qué se diferencia de otras sales?',
        list: [
          'Óxido: más contenido elemental, peor tolerancia digestiva en algunos.',
          'Bisglicinato: suave, forma quelada.',
          'Citrato: buena solubilidad; uso muy extendido en polvo.',
          'Cloruro tópico: es el del aceite de magnesio, no se “toma”.',
        ],
      },
      {
        h2: 'Cómo se toma (orientativo)',
        ordered: [
          'Lee la dosis del empaque: no todas las presentaciones son iguales.',
          'Toma con suficiente agua.',
          'Respeta el horario fijo si lo usas como hábito.',
          'Si usas medicamentos o tienes condición renal, consulta primero.',
        ],
      },
      {
        h2: 'En Botané: pack Max Calm',
        p: 'El pack Omega 369 + Citrato de magnesio Max Calm vegano (450 g) reúne dos básicos de rutina en un solo pedido. Es una presentación de suplementos; lee siempre el empaque y consulta profesional ante dudas.',
      },
    ],
    faqs: [
      {
        q: '¿El citrato de magnesio es vegano?',
        a: 'La fórmula Max Calm del pack se posiciona como vegana según su empaque. Verifica etiqueta si tienes restricciones específicas.',
      },
      {
        q: '¿Cuándo se toma el citrato de magnesio?',
        a: 'La mayoría sigue el horario del fabricante; algunas personas lo prefieren por la noche. Constancia > hora mágica.',
      },
      {
        q: '¿Puedo combinarlo con aceite de magnesio?',
        a: 'Son vías distintas (oral vs tópica). No hay conflicto obvio, pero no dupliques sin criterio profesional.',
      },
      {
        q: '¿Sirve para dormir?',
        a: 'El magnesio participa en procesos de relajación, pero no es un somnífero. El descanso se construye con hábitos; ver también melatonina y ritual de sueño.',
      },
    ],
    sources: [{ label: 'NIH — Magnesium', url: 'https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/' }],
  },
  {
    slug: 'magnesio-y-musculos',
    type: 'spoke',
    silo: 'recuperacion',
    intent: 'informativa',
    title: 'Magnesio y músculos: por qué el mineral aparece siempre en la recuperación',
    description:
      'Relación entre magnesio y músculos: función muscular, calambres, fuentes alimentarias y cuándo sumar tópico o suplemento en tu recuperación.',
    answer:
      'El magnesio participa en la contracción y relajación muscular y en el metabolismo energético. Una ingesta insuficiente se asocia a calambres y fatiga en algunas personas. La estrategia inicial es alimentación; el tópico y el suplemento son apoyos, no curas milagrosas.',
    keyword: 'magnesio y músculos',
    entity: { name: 'Magnesio', sameAs: WIKI.magnesio },
    anchors: [
      'magnesio y músculos',
      'magnesio para calambres',
      'mineral para la recuperación',
      'magnesio y ejercicio',
    ],
    productIds: ['aceite-magnesio', 'herbpads'],
    datePublished: '2026-09-23',
    sections: [
      {
        h2: '¿Por qué el magnesio importa en el músculo?',
        p: 'Interviene en la bomba de calcio del músculo y en la producción de energía. Niveles bajos por ingesta crónica pueden acompañar de calambres, inquietud muscular o fatiga; el diagnóstico es clínico, no por “sensación”.',
      },
      {
        h2: 'Fuentes primero',
        list: [
          'Verduras de hoja verde, frutos secos y semillas.',
          'Legumbres, chocolate negro y cereales integrales.',
          'Agua y alcohol moderado: el alcohol excesivo favorece pérdidas.',
        ],
      },
      {
        h2: 'Tópico vs oral en deportistas',
        p: 'El aceite de magnesio acompaña el masaje de la zona trabajada y la sensación de cuidado muscular. El suplemento oral cubre ingesta dietaria cuando la alimentación no llega. Pueden coexistir en una rutina de recuperación sin competir.',
      },
      {
        h2: 'Integración en tu semana',
        ordered: [
          'Base alimentaria diaria con magnesio.',
          'Masaje tópico 2–3 días de tensión (aceite + movilidad).',
          'Parches localizados en zona de carga alta.',
          'Suplemento solo si lo indica el empaque o un profesional.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Los calambres siempre son por falta de magnesio?',
        a: 'No: hidratación, sobrecarga, electrolitos y otras causas también cuentan. Si persisten, consulta.',
      },
      {
        q: '¿El aceite de magnesio absorbe para el músculo profundo?',
        a: 'Su uso principal es tópico: masaje, piel y sensación local. No sustituye una reposición oral indicada.',
      },
      {
        q: '¿Cuánto magnesio al día es suficiente?',
        a: 'Depende de edad y sexo (RDA). Consulta fuentes institucionales o un nutricionista, no dosis de redes sociales.',
      },
    ],
    sources: [{ label: 'NIH Magnesium', url: 'https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/' }],
  },

  // ══════════════ SILO SUPLEMENTOS — HUB ══════════════
  {
    slug: 'suplementos-diarios-guia',
    type: 'hub',
    silo: 'suplementos',
    intent: 'informativa',
    title: 'Suplementos diarios: guía para elegir vitaminas y complementos sin caer en mitos',
    description:
      'Guía completa de suplementos diarios: colágeno, complejo B, omega, ashwagandha, probióticos y más. Cómo elegir, cuándo tienen sentido y qué ignorar.',
    answer:
      'Los suplementos diarios aportan nutrientes cuando la dieta no cubre el objetivo o hay una necesidad puntual. No reemplazan comida real. El orden correcto es: alimentación → hábitos → análisis o criterio profesional → producto bien etiquetado y tomado con constancia.',
    keyword: 'suplementos diarios',
    entity: { name: 'Suplemento dietético', sameAs: 'https://es.wikipedia.org/wiki/Suplemento_diet%C3%A9tico' },
    anchors: [
      'suplementos diarios',
      'cuáles suplementos tomar',
      'vitaminas y minerales',
      'rutina de suplementos',
    ],
    productIds: ['colageno-uva', 'vitamina-b-complex', 'ashwagandha-ksm'],
    datePublished: '2026-09-23',
    sections: [
      {
        h2: '¿Qué son los suplementos diarios?',
        p: 'Son productos que concentran vitaminas, minerales, proteínas o extractos en dosis prácticas. El valor está en la brecha que cierran (déficit, alto gasto, dieta restrictiva) y en la adherencia: un frasco que no tomas no existe.',
      },
      {
        h2: 'Framework de decisión en 4 pasos',
        ordered: [
          'Define el objetivo (energía, piel, descanso, digestión, deporte).',
          'Revisa tu dieta y tu rutina de sueño/estrés.',
          'Elige UNA línea de ataque y da 4–8 semanas.',
          'Evalúa sensación y constancia; cambia de a uno, no de diez a la vez.',
        ],
      },
      {
        h2: 'Mapa del catálogo Botané por objetivo',
        list: [
          'Piel, cabello y articulaciones: colágeno hidrolizado.',
          'Energía y metabolismo: complejo B con folato.',
          'Equilibrio y estrés cotidiano: ashwagandha KSM.',
          'Digestión y defensas: prebióticos + probióticos + zinc.',
          'Ácidos grasos: Omega 369.',
          'Apoyo inmune de hongo: betaglucanos de Ganoderma.',
          'Café + colágeno: capuchino 400 g.',
          'Descanso: Lullabites (silo descanso).',
        ],
      },
      {
        h2: 'Qué ignorar',
        list: [
          'Promesas de “milagro en 3 días”.',
          'Apilar 8 frascos sin objetivo.',
          'Comparar dosis de TikTok con tu caso clínico.',
          'Olvidar agua, proteína y sueño: ningún polvo los reemplaza.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Necesito suplementos si como bien?',
        a: 'A veces no. En dietas restrictidas, deporte intenso o déficits puntuales tienen más sentido. Un profesional puede orientar con tu caso.',
      },
      {
        q: '¿Puedo tomar varios suplementos a la vez?',
        a: 'Sí si la etiqueta lo permite y tienen objetivos claros. Introduce de a uno para saber qué te sienta bien.',
      },
      {
        q: '¿Cuánto tarda en notarse un suplemento?',
        a: 'Entre días y varias semanas según el nutriente y tu punto de partida. Mantén el mismo producto el tiempo de evaluación.',
      },
      {
        q: '¿Los suplementos tienen efectos secundarios?',
        a: 'Pueden. Respeta dosis, revisa alergias y consulta si tomas medicamentos o estás embarazada.',
      },
    ],
    sources: [
      { label: 'NIH ODS', url: 'https://ods.od.nih.gov/' },
      { label: 'WHO — Micronutrients', url: 'https://www.who.int/news-room/fact-sheets/detail/micronutrients' },
    ],
  },
  {
    slug: 'colageno-hidrolizado',
    type: 'spoke',
    silo: 'suplementos',
    intent: 'informativa',
    title: 'Colágeno hidrolizado: qué es, para qué sirve y cómo tomarlo',
    description:
      'Colágeno hidrolizado en polvo: qué significa “hidrolizado”, beneficios investigados, sabor uva 400 g y consejos de uso diario.',
    answer:
      'El colágeno hidrolizado es colágeno roto en péptidos más pequeños, mejor dispersable en líquidos. Se usa como proteína de apoyo para piel, articulaciones y cabello, tomando una porción diaria constante durante varias semanas.',
    keyword: 'colágeno hidrolizado',
    entity: { name: 'Colágeno', sameAs: WIKI.colageno },
    anchors: [
      'colágeno hidrolizado',
      'colágeno en polvo',
      'colágeno para la piel',
      'cómo tomar colágeno',
    ],
    productIds: ['colageno-uva'],
    ctaAnchors: ['colágeno hidrolizado uva 400 g Botané'],
    datePublished: '2026-09-23',
    sections: [
      {
        h2: '¿Qué es el colágeno hidrolizado?',
        p: 'El colágeno es la proteína estructural más abundante de la piel, huesos y tejido conectivo. En el proceso de hidrólisis se rompe en péptidos: se disuelven mejor y se estudian por su aporte de aminoácidos específicos.',
      },
      {
        h2: 'Para qué se usa habitualmente',
        list: [
          'Apoyo a elasticidad y aspecto de la piel (efectos con semanas de uso).',
          'Confort articular en rutinas de actividad.',
          'Aumento de proteína total en dietas bajas en colágeno endógeno.',
          'Saborizantes (uva, café) para adherencia diaria.',
        ],
      },
      {
        h2: 'Cómo tomarlo en el día',
        ordered: [
          'Mide la porción del empaque (no “a ojo”).',
          'Disuelve en agua fría o templada; remueve bien.',
          'Momento fijo: mañana con el desayuno o post entreno.',
          'Combina con vitamina C de la dieta (frutas) y constancia 4–8 semanas.',
        ],
      },
      {
        h2: 'Colágeno uva 400 g Botané',
        p: 'Bolsa de 400 g con sabor uva para integrar a la rutina sin complicarte. Envío gratis, contra entrega o Mercado Pago en compra individual de la unidad.',
      },
    ],
    faqs: [
      {
        q: '¿El colágeno hidrolizado engorda?',
        a: 'Es una proteína con su valor calórico; en el marco de una dieta equilibrada y dosis normal no es un “engordador” mágico.',
      },
      {
        q: '¿Cuánto tarda en verse el colágeno en la piel?',
        a: 'Los estudios suelen valorar 8–12 semanas de consumo regular. No esperes milagros en 3 días.',
      },
      {
        q: '¿Se puede mezclar con café o licuado?',
        a: 'Sí, es una de las ventajas del hidrolizado. Nuestro capuchino + colágeno ya viene mezclado si prefieres café.',
      },
      {
        q: '¿El colágeno uva es lo mismo que la vitamina C?',
        a: 'No. Son distintos; la vitamina C participa en la síntesis endógena de colágeno y conviene ingerirla por dieta o fruta.',
      },
    ],
    sources: [{ label: 'Wikipedia — Colágeno', url: WIKI.colageno }],
  },
  {
    slug: 'vitaminas-del-complejo-b',
    type: 'spoke',
    silo: 'suplementos',
    intent: 'informativa',
    title: 'Vitaminas del complejo B: función, fuentes y presentación x2',
    description:
      'Complejo de vitaminas B: B1, B6, B12, niacina y folato. Para qué sirven, cuándo tienen sentido y la presentación doble de Botané.',
    answer:
      'Las vitaminas del complejo B participan en el metabolismo energético y en el sistema nervioso. Se encuentran en carnes, legumbres, huevos y cereales integrales. Un suplemento tiene sentido en dietas restrictidas, estrés sostenido o según evaluación profesional.',
    keyword: 'complejo de vitaminas B',
    entity: { name: 'Vitamina B', sameAs: WIKI.vitaminaB },
    anchors: [
      'vitaminas del complejo B',
      'complejo B con folato',
      'vitamina B12 y energía',
      'B6 B1 niacina',
    ],
    productIds: ['vitamina-b-complex'],
    ctaAnchors: ['vitamina B complex x2 Botané'],
    datePublished: '2026-09-23',
    sections: [
      {
        h2: '¿Qué hace cada B (resumen)?',
        list: [
          'B1 (tiamina): metabolismo de carbohidratos y función nerviosa.',
          'B6: metabolismo de aminoácidos y neurotransmisores.',
          'B12: glóbulos rojos y sistema nervioso (sobre todo en dieta vegana estricta).',
          'Niacina (B3): energía celular.',
          'Folato (B9): síntesis celular; clave en embarazo bajo control médico.',
        ],
      },
      {
        h2: 'Señales de que conviene revisar tu ingesta',
        list: [
          'Dieta muy restrictiva o sin productos animales sin suplementar B12.',
          'Fatiga sostenida con alimentación pobre en variedad.',
          'Consumo de alcohol frecuente.',
          'Edad avanzada con menor absorción de B12.',
        ],
      },
      {
        h2: 'Presentación doble x2 en Botané',
        p: 'Vitamina B complex + folato en pack de 2 unidades: no te quedas a mitad de mes. B12, B6, B1, niacina y folato en un solo producto, envío gratis y contra entrega.',
        list: ['2 unidades por compra', 'B12 · B6 · B1 · niacina + folato', 'Ideal para constancia'],
      },
      {
        h2: 'Errores comunes',
        p: 'Más no es mejor con las B hidrosolubulares: el exceso se elimina, pero megadosis sin criterio no aceleran la energía. La vitamina no compensa 5 horas de sueño.',
      },
    ],
    faqs: [
      {
        q: '¿Cuándo se toman las vitaminas B?',
        a: 'Con comida, en horario fijo. Sigue el empaque del producto.',
      },
      {
        q: '¿Sirven para la ansiedad?',
        a: 'Participan en el sistema nervioso, pero no son ansiolíticos. Ansiedad clínica requiere evaluación profesional.',
      },
      {
        q: '¿Por qué traen 2 unidades?',
        a: 'La presentación x2 reduce reposiciones y mejora la adherencia del hábito diario.',
      },
      {
        q: '¿Puedo combinarlas con colágeno?',
        a: 'Sí, son objetivos distintos y encajan en la misma rutina de suplementos si la etiqueta lo permite.',
      },
    ],
    sources: [{ label: 'NIH — B Vitamins', url: 'https://ods.od.nih.gov/factsheets/VitaminB12-HealthProfessional/' }],
  },
  {
    slug: 'ashwagandha-estres',
    type: 'spoke',
    silo: 'suplementos',
    intent: 'informativa',
    title: 'Ashwagandha y estrés: qué dice la evidencia y cómo integrarla',
    description:
      'Ashwagandha KSM y estrés: qué es la planta, usos tradicionales, investigaciones, presentación 100 cápsulas y avisos importantes.',
    answer:
      'La ashwagandha (Withania somnifera) es una planta adaptógena usada tradicionalmente en Ayurveda. Algunos estudios exploran su relación con el estrés percibido y el sueño; no es un ansiolítico de farmacia y debe usarse con etiqueta clara y criterio profesional si hay condiciones de salud.',
    keyword: 'ashwagandha estrés',
    entity: { name: 'Withania somnifera', sameAs: WIKI.ashwagandha },
    anchors: [
      'ashwagandha y el estrés',
      'ashwagandha KSM',
      'planta adaptógena',
      'ashwagandha cápsulas',
    ],
    productIds: ['ashwagandha-ksm'],
    ctaAnchors: ['ashwagandha KSM 100 cápsulas Botané'],
    datePublished: '2026-09-23',
    sections: [
      {
        h2: '¿Qué es la ashwagandha?',
        p: 'Withania somnifera, de la familia de las solanáceas, se usa en la medicina tradicional india como “adaptógeno”: apoyo a la respuesta del organismo ante el estrés. El extracto KSM-66 es una forma estandarizada frecuente en cápsulas.',
      },
      {
        h2: 'Qué se investiga (sin exagerar)',
        list: [
          'Estrés percibido y sensación de calma en estudios pequeños a medianos.',
          'Calidad de sueño subjetiva en algunas poblaciones.',
          'Función física en contextos de entrenamiento.',
        ],
        pAfter:
          'Los diseños, dosis y poblaciones varían. “Hay estudios” no significa “curación garantizada”. Compara siempre con tu caso.',
      },
      {
        h2: 'Cómo integrarla con hábitos',
        ordered: [
          'Horario fijo con o sin comida según tolerancia.',
          'Mantén ritual de sueño y límites de cafeína.',
          'Evalúa a las 4–6 semanas tu sensación global.',
          'Combina con colágeno/B solo si no hay motivo para no hacerlo.',
        ],
      },
      {
        h2: 'Avisos importantes',
        list: [
          'Consulta si tomas medicamentos, tienes tiroides, autoinmunidad o estás embarazada/lactando.',
          'No la uses para “tapar” noches de 4 horas.',
          'Compra con etiqueta de presentación y lote claros.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿La ashwagandha es un medicamento para la ansiedad?',
        a: 'No. Es un suplemento botánico. Los trastornos de ansiedad se abordan con profesionales de la salud.',
      },
      {
        q: '¿Cuántas cápsulas trae el frasco Botané?',
        a: '100 cápsulas de ashwagandha KSM, pensadas para sostener el hábito sin recargas frecuentes.',
      },
      {
        q: '¿Se puede tomar con melatonina o Lullabites?',
        a: 'Son enfoques distintos. Si los combinas, respeta dosis de cada empaque y consulta si hay sensación de exceso de sedación.',
      },
      {
        q: '¿Desde cuándo se nota?',
        a: 'Algunas personas valoran cambios subjetivos en semanas; no hay una fecha universal.',
      },
    ],
    sources: [
      { label: 'Wikipedia — Withania somnifera', url: WIKI.ashwagandha },
      { label: 'NCCIH — Ashwagandha', url: 'https://www.nccih.nih.gov/health/ashwagandha' },
    ],
  },
  {
    slug: 'probioticos-y-zinc',
    type: 'spoke',
    silo: 'suplementos',
    intent: 'informativa',
    title: 'Probióticos y zinc: para qué sirven y cómo elegirlos',
    description:
      'Probióticos con zinc y prebióticos: función digestiva, defensas, cepas, presentación 60 unidades y consejos de uso en la rutina diaria.',
    answer:
      'Los probióticos aportan microorganismos vivos, los prebióticos alimentan bacterias beneficiosas y el zinc contribuye a la función inmune y del metabolismo. Una fórmula triple busca apoyar digestión y defensas con una sola toma diaria según el empaque.',
    keyword: 'probióticos y zinc',
    entity: { name: 'Probiótico', sameAs: WIKI.probiotico },
    anchors: [
      'probióticos y zinc',
      'prebióticos probióticos',
      'salud digestiva',
      'zinc y defensas',
    ],
    productIds: ['probioticos-zinc'],
    ctaAnchors: ['prebióticos + probióticos + zinc Botané'],
    datePublished: '2026-09-23',
    sections: [
      {
        h2: 'Prebiótico, probiótico y zinc en una frase',
        p: 'Prebiótico = alimento de bacterias buenas (fibras). Probiótico = cepas vivas que llegan. Zinc = mineral de apoyo inmune y reparación. Juntos cubren eje digestivo + defensa en un formato práctico.',
      },
      {
        h2: 'Cuándo tiene sentido una fórmula triple',
        list: [
          'Dieta baja en fermentados y fibra.',
          'Antibióticos recientes (consulta profesional para timing).',
          'Viajes o cambios de rutina alimentaria.',
          'Ganas de simplificar 3 frascos en 1.',
        ],
      },
      {
        h2: 'Consejos de conservación y uso',
        ordered: [
          'Sigue el empaque: algunos probióticos prefieren ayuno o con comida.',
          'Cierra bien el envase; humedad y calor son enemigos.',
          'No esperes efecto de un día: da varias semanas.',
          'Suficiente agua y fibra de la dieta para acompañar.',
        ],
      },
      {
        h2: 'Producto Botané',
        p: 'Prebióticos + probióticos + zinc, 60 unidades, para no multiplicar frascos. Envío gratis y contra entrega en Colombia.',
      },
    ],
    faqs: [
      {
        q: '¿Los probióticos viven hasta la fecha de caducidad?',
        a: 'Si el empaque lo indica y se conservan bien, la cantidad viable debe mantenerse hasta la fecha. No dejes el frasco abierto en humedad.',
      },
      {
        q: '¿El zinc se toma con el probiótico?',
        a: 'En esta fórmula vienen combinados según el fabricante. No añadas megadosis de zinc por tu cuenta.',
      },
      {
        q: '¿Sirve para hinchazón?',
        a: 'Pueden ayudar en algunos contextos funcionales; el dolor fuerte o sangrado requieren evaluación médica.',
      },
      {
        q: '¿Desde qué edad?',
        a: 'Este producto está pensado para adultos según etiqueta. En niños consulta pediatra.',
      },
    ],
    sources: [{ label: 'Wikipedia — Probiótico', url: WIKI.probiotico }],
  },
  {
    slug: 'betaglucanos-ganoderma',
    type: 'spoke',
    silo: 'suplementos',
    intent: 'informativa',
    title: 'Betaglucanos de Ganoderma: qué son y cómo encajan en tu rutina',
    description:
      'Betaglucanos de Ganoderma x100: polisacáridos de hongo, uso tradicional, investigaciones y presentación Botané de 100 unidades.',
    answer:
      'Los betaglucanos son polisacáridos presentes en paredes de hongos y levaduras; el Ganoderma lucidum (reishi) se consume tradicionalmente como té o extracto. En suplemento se busca un aporte estable diario, sin prometer curas ni sustituir alimentación y descanso.',
    keyword: 'betaglucanos de ganoderma',
    entity: { name: 'Ganoderma lucidum', sameAs: WIKI.ganoderma },
    anchors: [
      'betaglucanos de ganoderma',
      'ganoderma lucidum',
      'hongo reishi',
      'betaglucanos en cápsulas',
    ],
    productIds: ['betaglucanos-ganoderma'],
    ctaAnchors: ['betaglucanos Ganoderma x100 Botané'],
    datePublished: '2026-09-23',
    sections: [
      {
        h2: '¿Qué son los betaglucanos?',
        p: 'Son fibras complejas (β-glucanos) de la pared celular de hongos y levaduras. Se estudian por su interacción con el sistema inmune y su papel como componente no digerible de la dieta.',
      },
      {
        h2: 'Ganoderma (reishi) en contexto',
        list: [
          'Uso histórico en Asia como té y extracto.',
          'Presentación moderna: polvo, extracto o cápsulas estandarizadas.',
          'Perfil de sabor amargo en té; cápsulas evitan el sabor.',
        ],
      },
      {
        h2: 'Cómo tomarlos con cabeza',
        ordered: [
          'Presentación x100 para constancia sin recargas.',
          'Horario fijo (mañana o según empaque).',
          'Combina con sueño y alimentación: el hongo no reemplaza el resto.',
          'Consulta si tienes alergia a hongos, autoinmunidad o medicación.',
        ],
      },
      {
        h2: 'Producto Botané',
        p: 'Betaglucanos de Ganoderma en 100 unidades, pensados para rutinas que exploran hongos funcionales con etiqueta clara, envío gratis y contra entrega.',
      },
    ],
    faqs: [
      {
        q: '¿El Ganoderma es alucinógeno?',
        a: 'No. Reishi/Ganoderma no es un hongo psicoactivo; es un suplemento tradicional no alucinógeno.',
      },
      {
        q: '¿Puedo tomarlo con vitamina C o colágeno?',
        a: 'Sí, suelen convivir en una rutina si no hay indicación contraria.',
      },
      {
        q: '¿Cuántas cápsulas al día?',
        a: 'La dosis está en el empaque del producto. No la dupliques.',
      },
      {
        q: '¿Sirve para la gripe?',
        a: 'No es tratamiento de gripe ni vacuna. Cuidados generales y atención médica ante síntomas.',
      },
    ],
    sources: [{ label: 'Wikipedia — Ganoderma lucidum', url: WIKI.ganoderma }],
  },
  {
    slug: 'omega-3-y-salud',
    type: 'spoke',
    silo: 'suplementos',
    intent: 'informativa',
    title: 'Omega 3 y salud: por qué el pack Omega 369 encaja en la rutina',
    description:
      'Omega 3, 6 y 9 y salud cardiovascular: fuentes, por qué suplementar, pack Omega 369 + Max Calm y avisos de compra inteligente.',
    answer:
      'Los omega 3 son ácidos grasos esenciales presentes en pescado azul y algas; el 6 y el 9 se obtienen de aceites vegetales. Un pack Omega 369 busca cubrir el perfil de ácidos grasos cuando el pescado no alcanza en la semana.',
    keyword: 'omega 3 y salud',
    entity: { name: 'Ácido eicosapentaenoico', sameAs: WIKI.omega3 },
    anchors: [
      'omega 3 y salud',
      'omega 369',
      'ácidos grasos esenciales',
      'suplemento de omega',
    ],
    productIds: ['omega-369-magnesio'],
    ctaAnchors: ['pack Omega 369 + Max Calm Botané'],
    datePublished: '2026-09-23',
    sections: [
      {
        h2: '¿Qué es el omega 3?',
        p: 'Es un ácido graso esencial: el cuerpo no lo fabrica bien y debe llegar por la dieta (pescado, semillas, nueces o suplemento). EPA y DHA son las formas marinas más estudiadas.',
      },
      {
        h2: 'Omega 3, 6 y 9 en la dieta moderna',
        list: [
          '3: suele faltar si hay poco pescado azul.',
          '6: abundante en aceites vegetales de frituras industriales.',
          '9: presente en aceite de oliva y algunos frutos secos.',
          'Objetivo práctico: más fuentes 3 y menos exceso de fritos.',
        ],
      },
      {
        h2: 'Pack Omega 369 + Max Calm',
        p: '100 cápsulas de Omega 369 + citrato de magnesio Max Calm vegano 450 g en un solo pedido. Ideal para rutinas que quieren simplificar. Envío gratis; carrito con pack y contra entrega, o Mercado Pago individual.',
        list: ['100 cápsulas Omega 369', 'Max Calm 450 g', 'Ahorro vs comprar por separado'],
      },
      {
        h2: 'Avisos',
        p: 'Antes de suplementar con anticoagulantes u otras condiciones, consulta profesional. No uses el suplemento como excusa para ignorar tensión arterial, tabaco o alimentación.',
      },
    ],
    faqs: [
      {
        q: '¿Cuántas veces a la semana debo comer pescado?',
        a: 'Variadas guías sugieren 2–3 porciones de pescado; ajusta a disponibilidad, mercurio y recomendación local.',
      },
      {
        q: '¿Omega y magnesio juntos son seguros?',
        a: 'En un producto formulado se siguen las instrucciones del empaque. Dosis caseras combinadas pueden exceder.',
      },
      {
        q: '¿Por qué incluir 6 y 9?',
        a: 'Para un perfil de ácidos grasos más completo en una sola cápsula; el foco nutricional sigue en el balance de la dieta.',
      },
      {
        q: '¿Dónde compro el pack en Colombia?',
        a: 'En Botané: agrega el pack al carrito para descuento o compra la unidad con link Mercado Pago según corresponda.',
      },
    ],
    sources: [{ label: 'NIH — Omega-3 Fatty Acids', url: 'https://ods.od.nih.gov/factsheets/Omega3FattyAcids-HealthProfessional/' }],
  },
  {
    slug: 'cafe-con-colageno',
    type: 'spoke',
    silo: 'suplementos',
    intent: 'comercial',
    title: 'Café con colágeno: capuchino 400 g para arrancar el día',
    description:
      'Café capuchino con colágeno 400 g: ritual del café + proteína, preparación, beneficios prácticos y compra con envío gratis en Colombia.',
    answer:
      'El café con colágeno mezcla capuchino soluble con colágeno hidrolizado en una sola preparación. Sirve para no añadir pasos a tu mañana: una taza, el sabor que ya te gusta y un aporte de proteína/colágeno con constancia.',
    keyword: 'café con colágeno',
    entity: { name: 'Colágeno', sameAs: WIKI.colageno },
    anchors: [
      'café con colágeno',
      'capuchino con colágeno',
      'colágeno en el café',
      'capuchino 400 g',
    ],
    productIds: ['capuchino-colageno', 'colageno-uva'],
    ctaAnchors: ['capuchino + colágeno 400 g Botané'],
    datePublished: '2026-09-23',
    sections: [
      {
        h2: '¿Qué es un capuchino con colágeno?',
        p: 'Es una mezcla soluble de café/capuchino con colágeno hidrolizado. El objetivo no es magia en la taza, sino adherencia: si ya tomas café, sumar colágeno sin un segundo frasco.',
      },
      {
        h2: 'Cómo prepararlo',
        ordered: [
          'Sirve la porción recomendada en taza.',
          'Añade agua caliente (no hirviendo a borbotones si quieres menos espuma agria).',
          'Remueve hasta homogeneizar.',
          'Acompaña con tu horario de siempre; evita el exceso de azúcar extra.',
        ],
      },
      {
        h2: 'Para quién encaja',
        list: [
          'Quienes ya tienen ritual de café de mañana.',
          'Oficina y home office sin licuadora.',
          'Quieres colágeno con sabor a capuchino, no insípido.',
        ],
      },
      {
        h2: 'Producto 400 g Botané',
        p: 'Bolsa de 400 g de café capuchino + colágeno. Envío gratis, contra entrega o Mercado Pago en unidad individual. Ideal si el colágeno en polvo solo no te convence por las mañanas.',
      },
    ],
    faqs: [
      {
        q: '¿El colágeno del café se daña con el calor?',
        a: 'El colágeno hidrolizado es estable en bebidas calientes de consumo habitual; sigue las instrucciones del empaque.',
      },
      {
        q: '¿Cuánta cafeína tiene?',
        a: 'Depende de la formulación y de cuántas cucharadas uses. Revisa etiqueta si eres sensible.',
      },
      {
        q: '¿Puedo tomarlo en la tarde?',
        a: 'Sí, si la cafeína no te afecta el sueño. De noche, mejor una opción sin cafeína como el colágeno uva.',
      },
      {
        q: '¿Reemplaza el desayuno?',
        a: 'No. Es un complemento de bebida, no una comida completa.',
      },
    ],
    sources: [{ label: 'Wikipedia — Capuchino', url: 'https://es.wikipedia.org/wiki/Capuchino' }],
  },
]

export const GUIDE_BY_SLUG = Object.fromEntries(GUIDES.map((g) => [g.slug, g]))

export function getGuide(slug) {
  return GUIDE_BY_SLUG[slug] || null
}

export default GUIDES

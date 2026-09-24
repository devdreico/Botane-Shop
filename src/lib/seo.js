export const SITE_URL = 'https://botane.presentto.online'
export const SITE_NAME = 'Botané'
export const DEFAULT_TITLE = 'Botané · Bienestar natural en Colombia'
export const DEFAULT_DESCRIPTION =
  'Tienda de bienestar natural en Colombia: suplementos, descanso y recuperación. Envío gratis, pago contra entrega o Mercado Pago. Funza, Cundinamarca.'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/IMG/botane-logo-fondo-transparente.png`
export const LOCALE = 'es_CO'

const abs = (path) => (path.startsWith('http') ? path : `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`)

const upsertMeta = (selector, attr, key, content) => {
  if (!content) return
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

const upsertLink = (rel, href) => {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export const setJsonLd = (id, data) => {
  let el = document.getElementById(id)
  if (!data) {
    el?.remove()
    return
  }
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export function applySeo({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  robots = 'index, follow',
  jsonLdId,
  jsonLd,
} = {}) {
  const url = abs(path)
  const absImage = abs(image)

  document.title = title
  upsertMeta('meta[name="description"]', 'name', 'description', description)
  upsertMeta('meta[name="robots"]', 'name', 'robots', robots)
  upsertMeta('meta[name="author"]', 'name', 'author', 'Botané')
  upsertMeta('meta[name="theme-color"]', 'name', 'theme-color', '#1f4d3b')
  upsertLink('canonical', url)

  upsertMeta('meta[property="og:url"]', 'property', 'og:url', url)
  upsertMeta('meta[property="og:title"]', 'property', 'og:title', title)
  upsertMeta('meta[property="og:description"]', 'property', 'og:description', description)
  upsertMeta('meta[property="og:image"]', 'property', 'og:image', absImage)
  upsertMeta('meta[property="og:image:alt"]', 'property', 'og:image:alt', SITE_NAME)
  upsertMeta('meta[property="og:type"]', 'property', 'og:type', path.startsWith('/producto') ? 'product' : 'website')
  upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', SITE_NAME)
  upsertMeta('meta[property="og:locale"]', 'property', 'og:locale', LOCALE)

  upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
  upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
  upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
  upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', absImage)

  setJsonLd(jsonLdId || 'seo-jsonld', jsonLd || null)
}

export function productJsonLd(product) {
  if (!product) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.seo?.description || product.detail || product.description,
    sku: product.id,
    brand: { '@type': 'Brand', name: SITE_NAME },
    image: [abs(product.image || DEFAULT_OG_IMAGE)],
    offers: {
      '@type': 'Offer',
      url: abs(`/producto/${product.id}`),
      priceCurrency: 'COP',
      price: String(product.price),
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
    },
  }
}

export function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: abs(item.path),
    })),
  }
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'OnlineStore'],
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: DEFAULT_OG_IMAGE,
    image: DEFAULT_OG_IMAGE,
    description: DEFAULT_DESCRIPTION,
    telephone: '+573144572008',
    areaServed: { '@type': 'Country', name: 'Colombia' },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Cra 19 Bis #9-15',
      addressLocality: 'Funza',
      addressRegion: 'Cundinamarca',
      postalCode: '253055',
      addressCountry: 'CO',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+573144572008',
      contactType: 'customer service',
      areaServed: 'CO',
      availableLanguage: ['es'],
    },
    sameAs: ['https://wa.me/573144572008'],
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    inLanguage: 'es-CO',
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/catalogo?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function faqJsonLd(faqs = []) {
  if (!faqs.length) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

export function articleJsonLd(guide) {
  if (!guide) return null
  const url = abs(`/guias/${guide.slug}`)
  const graph = [
    {
      '@type': guide.type === 'hub' ? ['Article', 'TechArticle'] : 'BlogPosting',
      '@id': `${url}#article`,
      headline: guide.title,
      description: guide.description,
      inLanguage: 'es-CO',
      datePublished: guide.datePublished || '2026-09-23',
      dateModified: guide.dateModified || '2026-09-23',
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      author: { '@type': 'Organization', name: SITE_NAME, url: `${SITE_URL}/` },
      publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
        logo: { '@type': 'ImageObject', url: DEFAULT_OG_IMAGE },
      },
      image: DEFAULT_OG_IMAGE,
      about: guide.entity
        ? {
            '@type': 'Thing',
            name: guide.entity.name,
            sameAs: guide.entity.sameAs,
          }
        : undefined,
    },
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: guide.title,
      inLanguage: 'es-CO',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      breadcrumb: breadcrumbForGuideLd(guide),
    },
  ].filter(Boolean)

  const faq = faqJsonLd(guide.faqs)
  if (faq) graph.push(faq)

  return { '@context': 'https://schema.org', '@graph': graph.filter(Boolean) }
}

function breadcrumbForGuideLd(guide) {
  const siloLabel =
    guide.silo === 'descanso'
      ? 'Descanso y sueño'
      : guide.silo === 'recuperacion'
        ? 'Músculos y recuperación'
        : guide.silo === 'suplementos'
          ? 'Suplementos y bienestar diario'
          : null
  const hubSlug =
    guide.silo === 'descanso'
      ? 'ritual-de-sueno'
      : guide.silo === 'recuperacion'
        ? 'recuperacion-muscular-natural'
        : guide.silo === 'suplementos'
          ? 'suplementos-diarios-guia'
          : null
  const items = [
    { name: 'Inicio', path: '/' },
    { name: 'Guías', path: '/guias' },
    ...(siloLabel && hubSlug ? [{ name: siloLabel, path: `/guias/${hubSlug}` }] : []),
    { name: guide.title, path: `/guias/${guide.slug}` },
  ]
  return breadcrumbJsonLd(items)
}

export function faqForProduct(product) {
  return faqJsonLd(product?.faq || [])
}

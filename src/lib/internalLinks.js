import { SILOS } from '../data/silos'

const pickAnchors = (guide, index = 0) => {
  const list = guide.anchors?.length ? guide.anchors : [guide.title]
  return list[index % list.length]
}

export function guidesInSilo(guides, siloId) {
  return guides.filter((g) => g.silo === siloId)
}

export function hubOf(guides, siloId) {
  return guides.find((g) => g.silo === siloId && g.type === 'hub')
}

export function spokesOf(guides, siloId) {
  return guides.filter((g) => g.silo === siloId && g.type === 'spoke')
}

export function siloOfProduct(productId) {
  const entry = Object.values(SILOS).find((silo) => silo.productIds.includes(productId))
  return entry?.id || null
}

/** Strict siloing: related = same silo only (hub + other spokes), never cross-silo. */
export function relatedInSilo(guides, guide, limit = 5) {
  return guidesInSilo(guides, guide.silo)
    .filter((g) => g.slug !== guide.slug)
    .sort((a, b) => {
      if (a.type === 'hub' && b.type !== 'hub') return -1
      if (b.type === 'hub' && a.type !== 'hub') return 1
      return 0
    })
    .slice(0, limit)
    .map((g, i) => ({
      slug: g.slug,
      title: g.title,
      type: g.type,
      silo: g.silo,
      anchor: pickAnchors(g, i + 1),
      href: `/guias/${g.slug}`,
    }))
}

/** Guides for a product: same silo only (product-linked first, then spokes/hub). */
export function guidesForProduct(guides, products, productId, limit = 3) {
  const siloId = siloOfProduct(productId)
  if (!siloId) return []
  const inSilo = guidesInSilo(guides, siloId)
  const linked = inSilo.filter((g) => g.productIds?.includes(productId))
  const rest = inSilo.filter((g) => !g.productIds?.includes(productId))
  return [...linked, ...rest]
    .filter((g, index, arr) => arr.findIndex((x) => x.slug === g.slug) === index)
    .slice(0, limit)
    .map((g, i) => ({
      slug: g.slug,
      title: g.title,
      type: g.type,
      href: `/guias/${g.slug}`,
      anchor: pickAnchors(g, i),
    }))
}

export function productCtasForGuide(products, guide) {
  const ids = guide.productIds?.length
    ? guide.productIds
    : (SILOS[guide.silo]?.productIds || []).slice(0, 2)
  return ids
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean)
    .slice(0, 3)
    .map((p, i) => ({
      id: p.id,
      name: p.name,
      shortName: p.shortName,
      price: p.price,
      image: p.image,
      href: `/producto/${p.id}`,
      anchor:
        guide.ctaAnchors?.[i] ||
        `${p.shortName || p.name} ${guide.silo === 'descanso' ? 'para dormir' : guide.silo === 'recuperacion' ? 'para músculos' : 'en Botané'}`,
    }))
}

/** Rotating internal anchors for hub → spokes (exact, partial, synonym). */
export function hubLinkList(guides, siloId) {
  return spokesOf(guides, siloId).map((g, i) => ({
    slug: g.slug,
    title: g.title,
    href: `/guias/${g.slug}`,
    anchor: pickAnchors(g, i),
  }))
}

export function breadcrumbForGuide(guide) {
  const silo = SILOS[guide.silo]
  return [
    { name: 'Inicio', path: '/' },
    { name: 'Guías', path: '/guias' },
    ...(silo ? [{ name: silo.label, path: `/guias/${silo.hubSlug}` }] : []),
    { name: guide.title, path: `/guias/${guide.slug}` },
  ]
}

export function eeatFooterLinks() {
  return [
    { to: '/nosotros', label: 'Nosotros' },
    { to: '/guias', label: 'Guías' },
    { to: '/contacto', label: 'Contacto' },
    { to: '/politica-de-privacidad', label: 'Privacidad' },
    { to: '/terminos-y-condiciones', label: 'Términos' },
    { to: '/devoluciones-y-cambios', label: 'Cambios' },
    { to: '/aviso-medico', label: 'Aviso médico' },
    { to: '/politica-editorial', label: 'Editorial' },
  ]
}

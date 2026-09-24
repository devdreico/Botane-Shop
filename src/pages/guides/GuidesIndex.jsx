import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Leaf } from 'lucide-react'
import Layout from '../../components/Layout'
import Reveal from '../../components/Reveal'
import { GUIDES } from '../../data/guides'
import { SILOS, SILO_ORDER } from '../../data/silos'
import { spokesOf } from '../../lib/internalLinks'
import { applySeo, breadcrumbJsonLd, organizationJsonLd } from '../../lib/seo'

const INTRO =
  'Guías prácticas de Botané sobre descanso, recuperación muscular y suplementos diarios. Contenido con fuentes, sin promesas milagrosas y con enlaces a productos cuando tiene sentido.'

export default function GuidesIndex() {
  useEffect(() => {
    applySeo({
      title: 'Guías de bienestar natural · Descanso, músculos y suplementos · Botané',
      description:
        'Hub de guías Botané: ritual de sueño, recuperación muscular, colágeno, magnesio, ashwagandha y más. Envío gratis en Colombia.',
      path: '/guias',
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          organizationJsonLd(),
          breadcrumbJsonLd([
            { name: 'Inicio', path: '/' },
            { name: 'Guías', path: '/guias' },
          ]),
          {
            '@type': 'CollectionPage',
            name: 'Guías Botané',
            url: 'https://botane.presentto.online/guias',
            inLanguage: 'es-CO',
            description: INTRO,
            hasPart: GUIDES.map((guide) => ({
              '@type': 'Article',
              headline: guide.title,
              url: `https://botane.presentto.online/guias/${guide.slug}`,
            })),
          },
        ],
      },
    })
    return () => applySeo({})
  }, [])

  return (
    <Layout>
      <section className="guides-hero container">
        <span className="eyebrow">
          <BookOpen size={14} /> Biblioteca Botané
        </span>
        <h1>
          Guías para
          <br />
          <em>bienestar diario.</em>
        </h1>
        <p>{INTRO}</p>
      </section>

      <section className="guides-index container">
        {SILO_ORDER.map((siloId) => {
          const silo = SILOS[siloId]
          const hub = GUIDES.find((g) => g.silo === siloId && g.type === 'hub')
          const spokes = spokesOf(GUIDES, siloId)
          return (
            <Reveal key={siloId} className="silo-block">
              <div className="section-heading">
                <div>
                  <span className="eyebrow">
                    <Leaf size={13} /> Silo
                  </span>
                  <h2>{silo.label}</h2>
                </div>
                {hub && (
                  <Link to={`/guias/${hub.slug}`} className="underlink">
                    Ver hub <ArrowRight size={15} />
                  </Link>
                )}
              </div>
              <div className="guide-card-grid">
                {hub && (
                  <Link to={`/guias/${hub.slug}`} className="guide-card hub">
                    <span className="guide-card-badge">Hub</span>
                    <h3>{hub.title}</h3>
                    <p>{hub.description}</p>
                    <span className="guide-card-cta">
                      Leer guía <ArrowRight size={14} />
                    </span>
                  </Link>
                )}
                {spokes.map((guide, index) => (
                  <Link key={guide.slug} to={`/guias/${guide.slug}`} className="guide-card">
                    <span className="guide-card-badge">
                      {guide.intent === 'comercial' ? 'Compra' : 'Guía'}
                    </span>
                    <h3>{guide.title}</h3>
                    <p>{guide.description}</p>
                    <span className="guide-card-cta">
                      {index % 2 === 0 ? 'Seguir leyendo' : 'Abrir guía'} <ArrowRight size={14} />
                    </span>
                  </Link>
                ))}
              </div>
            </Reveal>
          )
        })}
      </section>

      <section className="guides-cta container">
        <div>
          <span className="eyebrow">Productos</span>
          <h2>
            Del contenido al
            <br />
            <em>carrito.</em>
          </h2>
        </div>
        <Link to="/catalogo" className="button button-primary">
          Ver catálogo <ArrowRight size={16} />
        </Link>
      </section>
    </Layout>
  )
}

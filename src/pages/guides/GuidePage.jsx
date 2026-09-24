import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, BookOpen, ExternalLink, Leaf, ShieldCheck } from 'lucide-react'
import Layout from '../../components/Layout'
import Reveal from '../../components/Reveal'
import { WHATSAPP_URL } from '../../config/store'
import { GUIDES, getGuide } from '../../data/guides'
import { PRODUCTS } from '../../data/products'
import { SILOS } from '../../data/silos'
import { breadcrumbForGuide, productCtasForGuide, relatedInSilo, hubOf } from '../../lib/internalLinks'
import { applySeo, articleJsonLd, breadcrumbJsonLd } from '../../lib/seo'
import { formatCOP } from '../../lib/format'

export default function GuidePage() {
  const { slug } = useParams()
  const guide = getGuide(slug)

  useEffect(() => {
    if (!guide) {
      applySeo({ title: 'Guía no encontrada · Botané', path: '/guias', robots: 'noindex, follow' })
      return
    }
    applySeo({
      title: `${guide.title} · Botané`,
      description: guide.description,
      path: `/guias/${guide.slug}`,
      jsonLd: articleJsonLd(guide),
    })
    return () => applySeo({})
  }, [guide])

  if (!guide) return <Navigate to="/guias" replace />

  const silo = SILOS[guide.silo]
  const hub = hubOf(GUIDES, guide.silo)
  const related = relatedInSilo(GUIDES, guide, 5)
  const ctas = productCtasForGuide(PRODUCTS, guide)
  const crumbs = breadcrumbForGuide(guide)

  return (
    <Layout>
      <article className="guide-page container">
        <nav className="breadcrumbs" aria-label="Migas de pan">
          {crumbs.map((item, index) => (
            <span key={item.path}>
              {index > 0 && <span aria-hidden="true"> / </span>}
              {index === crumbs.length - 1 ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <Link to={item.path}>{item.name}</Link>
              )}
            </span>
          ))}
        </nav>

        <header className="guide-header">
          <span className="eyebrow">
            <BookOpen size={14} /> {silo?.label || 'Guía'}
            {guide.type === 'hub' ? ' · Hub' : ''}
          </span>
          <h1>{guide.title}</h1>
          <p className="guide-answer">{guide.answer}</p>
          <div className="guide-meta">
            <span>Por Botané</span>
            <span aria-hidden="true">·</span>
            <time dateTime={guide.datePublished}>{formatDate(guide.datePublished)}</time>
            {guide.dateModified && (
              <>
                <span aria-hidden="true">·</span>
                <span>Actualizado {formatDate(guide.dateModified)}</span>
              </>
            )}
          </div>
        </header>

        <div className="guide-body">
          {guide.sections?.map((section) => (
            <section key={section.h2}>
              <h2>{section.h2}</h2>
              {section.p && <p>{section.p}</p>}
              {section.list && (
                <ul>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {section.ordered && (
                <ol>
                  {section.ordered.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              )}
              {section.pAfter && <p>{section.pAfter}</p>}
            </section>
          ))}

          {ctas.length > 0 && (
            <aside className="guide-cta-box" aria-label="Productos relacionados">
              <span className="eyebrow">
                <Leaf size={14} /> En Botané
              </span>
              <p>Si buscas acompañar este hábito con un producto, estas son las opciones del silo:</p>
              <div className="guide-cta-list">
                {ctas.map((product) => (
                  <Link key={product.id} to={product.href} className="guide-cta-card">
                    {product.image ? (
                      <img src={product.image} alt={product.name} loading="lazy" />
                    ) : (
                      <div className="guide-cta-thumb" aria-hidden="true" />
                    )}
                    <div>
                      <strong>{product.name}</strong>
                      <span>{formatCOP(product.price)} · Envío gratis</span>
                      <em>{product.anchor}</em>
                    </div>
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                ))}
              </div>
              <Link to="/catalogo" className="button button-primary">
                Ver catálogo completo <ArrowRight size={15} />
              </Link>
            </aside>
          )}

          {guide.faqs?.length > 0 && (
            <section className="guide-faq" aria-labelledby="guide-faq-title">
              <h2 id="guide-faq-title">Preguntas frecuentes</h2>
              <div className="faq-list">
                {guide.faqs.map((item) => (
                  <details key={item.q} className="faq-item" open>
                    <summary>{item.q}</summary>
                    <p>{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          <aside className="author-box">
            <div className="author-avatar" aria-hidden="true">
              <Leaf size={22} />
            </div>
            <div>
              <strong>Equipo editorial Botané</strong>
              <p>
                Contenido revisado por la marca Botané (bienestar natural, Funza · Colombia). Publicamos guías
                prácticas con fuentes institucionales y lenguaje claro. No sustituimos consejo médico profesional.
              </p>
              <div className="author-links">
                <Link to="/politica-editorial">Política editorial</Link>
                <Link to="/aviso-medico">Aviso médico</Link>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </aside>

          <p className="ymyl-disclaimer">
            <ShieldCheck size={15} aria-hidden="true" />
            <span>
              Esta guía es informativa. Los suplementos y gomitas complementan hábitos; no diagnostican, tratan ni
              curan enfermedades. Ante síntomas persistentes o medicación, consulta un profesional de la salud. Lee
              siempre el empaque.
            </span>
          </p>

          {guide.sources?.length > 0 && (
            <section className="guide-sources">
              <h2>Fuentes y referencias</h2>
              <ul>
                {guide.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noopener noreferrer">
                      {source.label} <ExternalLink size={13} aria-hidden="true" />
                    </a>
                  </li>
                ))}
                {guide.entity?.sameAs && (
                  <li>
                    <a href={guide.entity.sameAs} target="_blank" rel="noopener noreferrer">
                      {guide.entity.name} (Wikipedia) <ExternalLink size={13} aria-hidden="true" />
                    </a>
                  </li>
                )}
              </ul>
            </section>
          )}
        </div>

        {related.length > 0 && (
          <Reveal className="guide-related">
            <div className="section-heading">
              <div>
                <span className="eyebrow">Silo {silo?.label}</span>
                <h2>Guías relacionadas</h2>
              </div>
              {hub && guide.type === 'spoke' && (
                <Link to={`/guias/${hub.slug}`} className="underlink">
                  Volver al hub <ArrowRight size={15} />
                </Link>
              )}
            </div>
            <ul className="guide-related-list">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link to={item.href}>
                    <span className="guide-related-type">{item.type === 'hub' ? 'Hub' : 'Guía'}</span>
                    <strong>{item.anchor}</strong>
                    <span className="guide-related-title">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </article>
    </Layout>
  )
}

function formatDate(iso) {
  if (!iso) return ''
  try {
    return new Date(`${iso}T12:00:00`).toLocaleDateString('es-CO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return iso
  }
}

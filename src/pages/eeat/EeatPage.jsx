import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, Leaf, Send, ShieldCheck } from 'lucide-react'
import Layout from '../../components/Layout'
import { WHATSAPP_URL } from '../../config/store'
import { getEeatPage } from '../../lib/eeat'
import { applySeo, breadcrumbJsonLd, faqJsonLd, organizationJsonLd } from '../../lib/seo'

export default function EeatPage({ slug: slugProp }) {
  const params = useParams()
  const slug = slugProp || params.slug
  const page = getEeatPage(slug)
  const isContact = page?.slug === 'contacto'
  const [formState, setFormState] = useState('idle')
  const [error, setError] = useState('')

  useEffect(() => {
    if (!page) {
      applySeo({ title: 'Página no encontrada · Botané', path: '/', robots: 'noindex, follow' })
      return
    }
    applySeo({
      title: page.title,
      description: page.lead,
      path: page.path,
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          organizationJsonLd(),
          breadcrumbJsonLd([
            { name: 'Inicio', path: '/' },
            { name: page.h1, path: page.path },
          ]),
          {
            '@type': 'WebPage',
            name: page.title,
            url: `https://botane.presentto.online${page.path}`,
            inLanguage: 'es-CO',
            description: page.lead,
            isPartOf: { '@id': 'https://botane.presentto.online/#website' },
            about: { '@id': 'https://botane.presentto.online/#organization' },
          },
          faqJsonLd(page.faqs),
        ].filter(Boolean),
      },
    })
    return () => applySeo({})
  }, [page])

  if (!page) return <Navigate to="/" replace />

  const submitContact = async (event) => {
    event.preventDefault()
    setError('')
    setFormState('loading')
    const form = event.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error('error')
      setFormState('success')
      form.reset()
    } catch {
      setFormState('error')
      setError('No pudimos enviar el mensaje. Escríbenos por WhatsApp o intenta de nuevo.')
    }
  }

  return (
    <Layout>
      <article className="eeat-page container">
        <nav className="breadcrumbs" aria-label="Migas de pan">
          <Link to="/">Inicio</Link>
          <span aria-hidden="true"> / </span>
          <span aria-current="page">{page.h1}</span>
        </nav>

        <header className="guide-header">
          <span className="eyebrow">
            <ShieldCheck size={14} /> Botané · Confianza
          </span>
          <h1>{page.h1}</h1>
          <p className="guide-answer">{page.lead}</p>
        </header>

        <div className="guide-body">
          {page.sections.map((section) => (
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
            </section>
          ))}

          {isContact && (
            <section className="contact-block" id="formulario">
              <h2>Formulario de contacto</h2>
              {formState === 'success' ? (
                <p className="form-success" role="status">
                  Mensaje enviado. Te respondemos pronto (también puedes escribir por WhatsApp).
                </p>
              ) : (
                <form
                  className="contact-form"
                  action="https://formspree.io/f/xrpbkjwn"
                  method="POST"
                  onSubmit={submitContact}
                >
                  <input type="hidden" name="tipo" value="contacto" />
                  <label>
                    Nombre
                    <input name="nombre" type="text" required autoComplete="name" placeholder="Tu nombre" />
                  </label>
                  <label>
                    Correo
                    <input name="email" type="email" required autoComplete="email" placeholder="tu@email.com" />
                  </label>
                  <label>
                    Mensaje
                    <textarea name="mensaje" required rows={5} placeholder="¿En qué te ayudamos?" />
                  </label>
                  {error && (
                    <p className="form-error" role="alert">
                      {error}
                    </p>
                  )}
                  <button className="button button-primary" type="submit" disabled={formState === 'loading'}>
                    <Send size={15} /> {formState === 'loading' ? 'Enviando…' : 'Enviar mensaje'}
                  </button>
                </form>
              )}
              <p className="contact-alt">
                ¿Más rápido? <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp 24/7</a>
              </p>
            </section>
          )}

          {page.faqs?.length > 0 && (
            <section className="guide-faq" aria-labelledby="eeat-faq-title">
              <h2 id="eeat-faq-title">Preguntas frecuentes</h2>
              <div className="faq-list">
                {page.faqs.map((item) => (
                  <details key={item.q} className="faq-item">
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
              <strong>Botané</strong>
              <p>
                Marca de bienestar natural en Funza, Cundinamarca. Contenido informativo con fuentes; sin sustituir
                consejo profesional.
              </p>
              <div className="author-links">
                <Link to="/nosotros">Nosotros</Link>
                <Link to="/politica-editorial">Política editorial</Link>
                <Link to="/aviso-medico">Aviso médico</Link>
                <Link to="/guias">
                  Guías <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </Layout>
  )
}

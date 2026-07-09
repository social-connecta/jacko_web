import { Link, Navigate, useParams, useSearchParams } from 'react-router-dom'
import en from '../locales/en.json'
import projectMedia from '../data/projectMedia.json'
import { useScrollReveal } from '../hooks/useScrollReveal'
import JsonLd from '../components/JsonLd'

const PHOTOS_PER_PAGE = 20

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const [searchParams, setSearchParams] = useSearchParams()
  useScrollReveal([slug, searchParams.get('page')])

  const project = en.why.items.find(item => item.slug === slug)
  const media = slug ? projectMedia[slug as keyof typeof projectMedia] : undefined

  if (!project || !media) return <Navigate to="/" replace />

  const totalPages = Math.max(1, Math.ceil(media.photos.length / PHOTOS_PER_PAGE))
  const page = Math.min(Math.max(1, Number(searchParams.get('page')) || 1), totalPages)
  const pagePhotos = media.photos.slice((page - 1) * PHOTOS_PER_PAGE, page * PHOTOS_PER_PAGE)

  const goToPage = (n: number) => {
    setSearchParams(n === 1 ? {} : { page: String(n) })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const origin = window.location.origin
  const pageUrl = `${origin}/projects/${project.slug}`

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${project.title} | Jacko LLC`,
    url: pageUrl,
    isPartOf: { '@id': `${origin}/#business` },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: origin },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: `${origin}/#why` },
      { '@type': 'ListItem', position: 3, name: project.title, item: pageUrl },
    ],
  }

  return (
    <section className="project-page">
      <div className="container">
        <JsonLd data={webPageSchema} />
        <JsonLd data={breadcrumbSchema} />
        <Link to="/#why" className="project-back">&larr; Back to projects</Link>

        <div className="project-header reveal">
          <h1 className="section-title">{project.title}</h1>
          <div className="gold-line" />
          <p className="section-subtitle">{project.desc}</p>
        </div>

        {media.videos.length > 0 && (
          <div className="project-videos reveal">
            <span className="section-label">Featured Video{media.videos.length > 1 ? 's' : ''}</span>
            <div className="project-video-grid">
              {media.videos.map(src => (
                <video key={src} src={src} controls playsInline className="project-video" />
              ))}
            </div>
          </div>
        )}

        {pagePhotos.length > 0 ? (
          <div className="project-grid">
            {pagePhotos.map((src, i) => (
              <div key={src} className={`project-media-item reveal reveal-delay-${(i % 3) + 1}`}>
                <img src={src} alt={`${project.title} photo ${(page - 1) * PHOTOS_PER_PAGE + i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        ) : (
          <p className="project-empty reveal">Photos and videos coming soon.</p>
        )}

        {totalPages > 1 && (
          <div className="project-pagination">
            <button
              type="button"
              className="project-page-btn"
              disabled={page === 1}
              onClick={() => goToPage(page - 1)}
            >
              Previous
            </button>
            <span className="project-page-status">Page {page} of {totalPages}</span>
            <button
              type="button"
              className="project-page-btn"
              disabled={page === totalPages}
              onClick={() => goToPage(page + 1)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

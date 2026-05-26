import { useEffect, useState } from 'react'
import './App.css'
import en from './locales/en.json'
import pt from './locales/pt.json'

type Locale = typeof en

/* ── Icons ──────────────────────────────────────────────── */
const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)
const IconPhone = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.79 19.79 0 0115 1.2 2 2 0 0117 3.18v3a2 2 0 01-1.4 1.93" />
  </svg>
)
const IconMail = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)
const IconPin = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)
const IconInstagram = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)
const IconHome = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)
const IconImage = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
)

/* ── Gallery slot ───────────────────────────────────────── */
function GallerySlot({
  large = false,
  delay = '',
  viewText,
  photoText,
}: {
  large?: boolean
  delay?: string
  viewText: string
  photoText: string
}) {
  return (
    <div className={`gallery-item reveal${delay}`}>
      <div className="gallery-placeholder" style={large ? { aspectRatio: '16/10' } : {}}>
        <div className="gallery-overlay">
          <div className="gallery-overlay-content">
            <div className="gallery-view-text">{viewText}</div>
          </div>
        </div>
        <span className="gallery-placeholder-icon">
          <IconImage size={large ? 36 : 28} />
        </span>
        <span className="gallery-placeholder-text">{photoText}</span>
      </div>
    </div>
  )
}

/* ── Service icons ──────────────────────────────────────── */
const serviceIcons = [
  // Kitchen
  <svg key="k" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 3h16a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1z" />
    <line x1="4" y1="11" x2="11" y2="11" /><line x1="4" y1="15" x2="11" y2="15" />
    <line x1="15" y1="11" x2="20" y2="11" /><line x1="15" y1="15" x2="20" y2="15" />
    <line x1="4" y1="19" x2="20" y2="19" />
  </svg>,
  // Bathroom
  <svg key="b" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12h16a1 1 0 011 1v3a4 4 0 01-4 4H7a4 4 0 01-4-4v-3a1 1 0 011-1z" />
    <path d="M6 12V5a2 2 0 012-2h3v2.25" />
    <line x1="4" y1="20" x2="4" y2="22" /><line x1="20" y1="20" x2="20" y2="22" />
  </svg>,
  // House flip
  <svg key="h" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>,
  // Cabinetry
  <svg key="c" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="2" y1="10" x2="22" y2="10" />
    <line x1="7" y1="3" x2="7" y2="10" /><line x1="17" y1="3" x2="17" y2="10" />
    <line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
  </svg>,
]

const whyIcons = [
  <svg key="$" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
  </svg>,
  <svg key="t" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>,
  <svg key="w" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
  </svg>,
]

/* ── App ────────────────────────────────────────────────── */
export default function App() {
  const [lang, setLang] = useState<'en' | 'pt'>('en')
  const t: Locale = lang === 'en' ? en : pt

  useEffect(() => {
    const els = document.querySelectorAll<Element>('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    els.forEach(el => observer.observe(el))

    const navbar = document.getElementById('navbar')
    const onScroll = () => navbar?.classList.toggle('scrolled', window.scrollY > 60)
    window.addEventListener('scroll', onScroll)

    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [])

  const toggleLang = () => setLang(l => l === 'en' ? 'pt' : 'en')

  const gallerySlots = [
    { large: true, delay: ' reveal-delay-1' },
    { delay: ' reveal-delay-2' },
    { delay: ' reveal-delay-3' },
    { delay: ' reveal-delay-1' },
    { delay: ' reveal-delay-2' },
    { delay: ' reveal-delay-3' },
    { delay: ' reveal-delay-1' },
    { delay: ' reveal-delay-2' },
  ]

  return (
    <>
      {/* ══════════════ NAV ══════════════ */}
      <nav className="nav" id="navbar">
        <div className="container">
          <div className="nav-inner">
            <a href="#hero" className="nav-logo">JACKO<span>LLC</span></a>

            <ul className="nav-links">
              <li><a href="#services">{t.nav.services}</a></li>
              <li><a href="#gallery">{t.nav.gallery}</a></li>
              <li><a href="#testimonials">{t.nav.reviews}</a></li>
              <li><a href="#contact">{t.nav.contact}</a></li>
            </ul>

            <div className="nav-right">
              <button className="lang-toggle" onClick={toggleLang} aria-label="Toggle language">
                <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
                <span className="lang-sep">|</span>
                <span className={lang === 'pt' ? 'lang-active' : ''}>PT</span>
              </button>
              <a href="#contact" className="nav-cta">{t.nav.cta}</a>
            </div>
          </div>
        </div>
      </nav>

      {/* ══════════════ HERO ══════════════ */}
      <section className="hero" id="hero">
        <div className="hero-bg" />
        <div className="container">
          <div className="hero-content">

            <div className="hero-text">
              <div className="hero-badge">{t.hero.badge}</div>
              <h1 className="hero-headline">
                {t.hero.headline.line1}
                <span className="gold">{t.hero.headline.line2}</span>
                {t.hero.headline.line3}
                <span className="gold">{t.hero.headline.line4}</span>
              </h1>
              <p className="hero-subline">{t.hero.subline}</p>
              <p className="hero-desc">{t.hero.desc}</p>

              <div className="hero-cta-group">
                <a href="#contact" className="btn-primary">
                  {t.hero.cta} <IconArrow />
                </a>
                <a href="#gallery" className="btn-ghost">
                  {t.hero.ctaSecondary}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-num">10+</div>
                  <div className="hero-stat-label">{t.hero.stats.flips}</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-num">100%</div>
                  <div className="hero-stat-label">{t.hero.stats.budget}</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-num">5★</div>
                  <div className="hero-stat-label">{t.hero.stats.rating}</div>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              {/* ── LOGO PLACEHOLDER — troque pelo <img> da logo real ── */}
              <div className="logo-placeholder">
                <div className="logo-placeholder-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(200,146,26,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <div className="logo-placeholder-text">{t.hero.logoText}</div>
                <div className="logo-placeholder-sub">{t.hero.logoSub}</div>
              </div>

              <div className="hero-card">
                <div className="hero-card-icon"><IconHome /></div>
                <div className="hero-card-text">
                  <strong>{t.hero.location}</strong>
                  {t.hero.locationSub}
                </div>
              </div>

              <div className="hero-card">
                <div className="hero-card-icon"><IconPhone /></div>
                <div className="hero-card-text">
                  <strong>+1 (804) 546-6990</strong>
                  {t.hero.phoneSub}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════ TRUST BAR ══════════════ */}
      <div className="trust-bar">
        <div className="container">
          <div className="trust-bar-inner">
            <div className="trust-item">
              <svg className="trust-item-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              {t.trust.licensed}
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <svg className="trust-item-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {t.trust.flips}
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <svg className="trust-item-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
              {t.trust.onTime}
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <svg className="trust-item-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              {t.trust.stars}
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <svg className="trust-item-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
              </svg>
              {t.trust.local}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════ SERVICES ══════════════ */}
      <section className="services" id="services">
        <div className="container">
          <div className="services-header reveal">
            <span className="section-label">{t.services.label}</span>
            <h2 className="section-title">
              {t.services.title1}<br />{t.services.title2}
            </h2>
            <div className="gold-line" />
            <p className="section-subtitle">{t.services.subtitle}</p>
          </div>

          <div className="services-grid">
            {t.services.items.map((item, i) => (
              <div key={i} className={`service-card reveal reveal-delay-${i + 1}`}>
                <span className="service-number">0{i + 1}</span>
                <div className="service-icon">{serviceIcons[i]}</div>
                <h3 className="service-name">{item.name}</h3>
                <p className="service-desc">{item.desc}</p>
                <div className="service-tags">
                  {item.tags.map((tag, j) => (
                    <span key={j} className="service-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ WHY ══════════════ */}
      <section className="why" id="why">
        <div className="container">
          <div className="why-header reveal">
            <span className="section-label">{t.why.label}</span>
            <h2 className="section-title">{t.why.title}</h2>
            <div className="gold-line" />
            <p className="section-subtitle">{t.why.subtitle}</p>
          </div>

          <div className="why-grid">
            {t.why.items.map((item, i) => (
              <div key={i} className={`why-card reveal reveal-delay-${i + 1}`}>
                <div className="why-icon">{whyIcons[i]}</div>
                <h3 className="why-title">{item.title}</h3>
                <p className="why-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ GALLERY ══════════════ */}
      <section className="gallery" id="gallery">
        <div className="container">
          <div className="reveal">
            <span className="section-label">{t.gallery.label}</span>
            <h2 className="section-title">
              {t.gallery.title1}<br />{t.gallery.title2}
            </h2>
            <div className="gold-line" />
            <p className="section-subtitle">{t.gallery.subtitle}</p>
          </div>

          <div className="gallery-grid">
            {gallerySlots.map((slot, i) => (
              <GallerySlot
                key={i}
                large={slot.large}
                delay={slot.delay}
                viewText={t.gallery.viewProject}
                photoText={t.gallery.photoLabel}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ TESTIMONIALS ══════════════ */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="testimonials-header reveal">
            <span className="section-label">{t.testimonials.label}</span>
            <h2 className="section-title">
              {t.testimonials.title1}<br />{t.testimonials.title2}
            </h2>
            <div className="gold-line" />
          </div>

          <div className="testimonials-grid">
            {t.testimonials.items.map((item, i) => (
              <div key={i} className={`testimonial-card reveal reveal-delay-${i + 1}`}>
                <div className="testimonial-quote-mark">"</div>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, j) => <span key={j} className="star">★</span>)}
                </div>
                <p className="testimonial-text">{item.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {item.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <div className="author-name">{item.name}</div>
                    <div className="author-location">{item.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section className="cta-section" id="contact">
        <div className="cta-bg" />
        <div className="container">
          <div className="cta-content reveal">
            <span className="section-label" style={{ display: 'block' }}>{t.cta.label}</span>
            <h2 className="cta-title">
              {t.cta.title1}<br />{t.cta.title2} <span className="gold">{t.cta.titleHighlight}</span>
            </h2>
            <p className="cta-desc">{t.cta.desc}</p>
            <div className="cta-buttons">
              <a href="tel:+18045466990" className="btn-primary">
                {t.cta.callBtn} <IconPhone size={16} />
              </a>
              <a href="mailto:jacko@jackollc.com" className="btn-outline">
                {t.cta.emailBtn}
              </a>
            </div>
            <div className="cta-contact-info">
              <a href="mailto:jacko@jackollc.com" className="cta-contact-item">
                <span className="cta-contact-icon"><IconMail /></span>
                jacko@jackollc.com
              </a>
              <a href="https://www.instagram.com/jackollc" target="_blank" rel="noopener noreferrer" className="cta-contact-item">
                <span className="cta-contact-icon"><IconInstagram /></span>
                @jackollc
              </a>
              <span className="cta-contact-item">
                <span className="cta-contact-icon"><IconPin /></span>
                Richmond, VA 23229
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ FOOTER ══════════════ */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <div className="footer-logo">JACKO<span>LLC</span></div>
              <div className="footer-slogan">{t.footer.slogan}</div>
              <p className="footer-desc">{t.footer.desc}</p>
            </div>

            <div>
              <div className="footer-heading">{t.footer.servicesHeading}</div>
              <ul className="footer-links">
                {t.footer.servicesList.map((s, i) => (
                  <li key={i}><a href="#services">{s}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <div className="footer-heading">{t.footer.contactHeading}</div>
              <a href="tel:+18045466990" className="footer-contact-item">
                <span className="footer-contact-icon"><IconPhone size={14} /></span>
                +1 (804) 546-6990
              </a>
              <a href="mailto:jacko@jackollc.com" className="footer-contact-item">
                <span className="footer-contact-icon"><IconMail size={14} /></span>
                jacko@jackollc.com
              </a>
              <span className="footer-contact-item">
                <span className="footer-contact-icon"><IconPin size={14} /></span>
                Richmond, VA 23229
              </span>
              <a href="https://www.instagram.com/jackollc" target="_blank" rel="noopener noreferrer" className="footer-contact-item">
                <span className="footer-contact-icon"><IconInstagram size={14} /></span>
                @jackollc
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copy">
              &copy; {new Date().getFullYear()} {t.footer.copyright}
            </div>
            <div className="footer-social">
              <a href="https://www.instagram.com/jackollc" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <IconInstagram />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

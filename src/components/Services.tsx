import type en from '../locales/en.json'

type Props = {
  services: typeof en['services']
}

const icons = [
  <svg key="kitchen" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 3h16a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1z" />
    <line x1="4" y1="11" x2="11" y2="11" /><line x1="4" y1="15" x2="11" y2="15" />
    <line x1="15" y1="11" x2="20" y2="11" /><line x1="15" y1="15" x2="20" y2="15" />
    <line x1="4" y1="19" x2="20" y2="19" />
  </svg>,
  <svg key="bath" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12h16a1 1 0 011 1v3a4 4 0 01-4 4H7a4 4 0 01-4-4v-3a1 1 0 011-1z" />
    <path d="M6 12V5a2 2 0 012-2h3v2.25" />
    <line x1="4" y1="20" x2="4" y2="22" /><line x1="20" y1="20" x2="20" y2="22" />
  </svg>,
  <svg key="home" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>,
  <svg key="cabinet" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="2" y1="10" x2="22" y2="10" />
    <line x1="7" y1="3" x2="7" y2="10" /><line x1="17" y1="3" x2="17" y2="10" />
    <line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
  </svg>,
]

export default function Services({ services }: Props) {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header reveal">
          <span className="section-label">{services.label}</span>
          <h2 className="section-title">
            {services.title1}<br />{services.title2}
          </h2>
          <div className="gold-line" />
          <p className="section-subtitle">{services.subtitle}</p>
        </div>

        <div className="services-grid">
          {services.items.map((item, i) => (
            <div key={i} className={`service-card reveal reveal-delay-${i + 1}`}>
              <span className="service-number">0{i + 1}</span>
              <div className="service-icon">{icons[i]}</div>
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
  )
}

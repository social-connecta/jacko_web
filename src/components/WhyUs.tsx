import type en from '../locales/en.json'

type Props = {
  why: typeof en['why']
}

const icons = [
  <svg key="budget" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
  </svg>,
  <svg key="time" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>,
  <svg key="craft" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
  </svg>,
]

export default function WhyUs({ why }: Props) {
  return (
    <section className="why" id="why">
      <div className="container">
        <div className="why-header reveal">
          <span className="section-label">{why.label}</span>
          <h2 className="section-title">{why.title}</h2>
          <div className="gold-line" />
          <p className="section-subtitle">{why.subtitle}</p>
        </div>

        <div className="why-grid">
          {why.items.map((item, i) => (
            <div key={i} className={`why-card reveal reveal-delay-${i + 1}`}>
              <div className="why-icon">{icons[i]}</div>
              <h3 className="why-title">{item.title}</h3>
              <p className="why-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

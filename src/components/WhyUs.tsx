import type en from '../locales/en.json'

type Props = {
  why: typeof en['why']
}

const icons = [
  <svg key="flip1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
  </svg>,
  <svg key="flip2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
  </svg>,
  <svg key="flip3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
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

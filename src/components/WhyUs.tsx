import { Link } from 'react-router-dom'
import type en from '../locales/en.json'

type Props = {
  why: typeof en['why']
}

const HouseIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)

export default function WhyUs({ why }: Props) {
  return (
    <section className="why" id="why">
      <div className="container">
        <div className="why-header reveal">
          <div className="gold-line" />
        </div>

        <div className="why-grid">
          {why.items.map((item, i) => (
            <Link
              key={i}
              to={`/projects/${item.slug}`}
              className={`why-card reveal reveal-delay-${i + 1}`}
            >
              <div className="why-icon"><HouseIcon /></div>
              <h3 className="why-title">{item.title}</h3>
              <p className="why-desc">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

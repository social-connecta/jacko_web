import { IconArrow, IconPhone, IconHome } from '../icons'
import type en from '../locales/en.json'

type Props = {
  hero: typeof en['hero']
}

export default function Hero({ hero }: Props) {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="container">
        <div className="hero-content">

          <div className="hero-text">
            <div className="hero-badge">{hero.badge}</div>
            <h1 className="hero-headline">
              {hero.headline.line1}
              <span className="gold">{hero.headline.line2}</span>
              {hero.headline.line3}
              <span className="gold">{hero.headline.line4}</span>
            </h1>
            <p className="hero-subline">{hero.subline}</p>
            <p className="hero-desc">{hero.desc}</p>

            <div className="hero-cta-group">
              <a href="#contact" className="btn-primary">
                {hero.cta} <IconArrow />
              </a>
              <a href="#gallery" className="btn-ghost">
                {hero.ctaSecondary}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-num">10+</div>
                <div className="hero-stat-label">{hero.stats.flips}</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">100%</div>
                <div className="hero-stat-label">{hero.stats.budget}</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">5★</div>
                <div className="hero-stat-label">{hero.stats.rating}</div>
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
              <div className="logo-placeholder-text">{hero.logoText}</div>
              <div className="logo-placeholder-sub">{hero.logoSub}</div>
            </div>

            <div className="hero-card">
              <div className="hero-card-icon"><IconHome /></div>
              <div className="hero-card-text">
                <strong>{hero.location}</strong>
                {hero.locationSub}
              </div>
            </div>

            <div className="hero-card">
              <div className="hero-card-icon"><IconPhone /></div>
              <div className="hero-card-text">
                <strong>+1 (804) 546-6990</strong>
                {hero.phoneSub}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

import { IconPhone, IconMail, IconInstagram, IconPin } from '../icons'
import type en from '../locales/en.json'

type Props = {
  cta: typeof en['cta']
}

export default function CtaSection({ cta }: Props) {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-bg" />
      <div className="container">
        <div className="cta-content reveal">
          <span className="section-label" style={{ display: 'block' }}>{cta.label}</span>
          <h2 className="cta-title">
            {cta.title1}<br />{cta.title2} <span className="gold">{cta.titleHighlight}</span>
          </h2>
          <p className="cta-desc">{cta.desc}</p>

          <div className="cta-buttons">
            <a href="tel:+18045466990" className="btn-primary">
              {cta.callBtn} <IconPhone size={16} />
            </a>
            <a href="mailto:jacko@jackollc.com" className="btn-outline">
              {cta.emailBtn}
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
  )
}

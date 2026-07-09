import { IconPhone, IconMail, IconPin, IconInstagram } from '../icons'
import type en from '../locales/en.json'

type Props = {
  footer: typeof en['footer']
}

export default function Footer({ footer }: Props) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-logo">JACKO<span>LLC</span></div>
            <div className="footer-slogan">{footer.slogan}</div>
            <p className="footer-desc">{footer.desc}</p>
          </div>

          <div>
            <div className="footer-heading">{footer.servicesHeading}</div>
            <ul className="footer-links">
              {footer.servicesList.map((s, i) => (
                <li key={i}><a href="/#services">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-heading">{footer.contactHeading}</div>
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
            &copy; {new Date().getFullYear()} {footer.copyright}
          </div>
          <div className="footer-social">
            <a href="https://www.instagram.com/jackollc" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <IconInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

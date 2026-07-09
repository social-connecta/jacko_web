import type en from '../locales/en.json'

type Props = {
  nav: typeof en['nav']
}

export default function Navbar({ nav }: Props) {
  return (
    <nav className="nav" id="navbar">
      <div className="container">
        <div className="nav-inner">
          <a href="#hero" className="nav-logo">JACKO<span>LLC</span></a>

          <ul className="nav-links">
            <li><a href="#services">{nav.services}</a></li>
            <li><a href="#gallery">{nav.gallery}</a></li>
            <li><a href="#testimonials">{nav.reviews}</a></li>
            <li><a href="#contact">{nav.contact}</a></li>
          </ul>

          <div className="nav-right">
            <a href="#contact" className="nav-cta">{nav.cta}</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

import { useEffect, useState } from 'react'
import './App.css'

import en from './locales/en.json'
import pt from './locales/pt.json'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'

export default function App() {
  const [lang, setLang] = useState<'en' | 'pt'>('en')
  const t = lang === 'en' ? en : pt

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

  return (
    <>
      <Navbar nav={t.nav} lang={lang} onToggleLang={toggleLang} />
      <Hero hero={t.hero} />
      <TrustBar trust={t.trust} />
      <Services services={t.services} />
      <WhyUs why={t.why} />
      <Gallery gallery={t.gallery} />
      <Testimonials testimonials={t.testimonials} />
      <CtaSection cta={t.cta} />
      <Footer footer={t.footer} />
    </>
  )
}

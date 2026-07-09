import en from '../locales/en.json'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import Services from '../components/Services'
import WhyUs from '../components/WhyUs'
import Testimonials from '../components/Testimonials'
import CtaSection from '../components/CtaSection'

export default function Home() {
  useScrollReveal()

  return (
    <>
      <Hero hero={en.hero} />
      <TrustBar trust={en.trust} />
      <Services services={en.services} />
      <WhyUs why={en.why} />
      <Testimonials testimonials={en.testimonials} />
      <CtaSection cta={en.cta} />
    </>
  )
}

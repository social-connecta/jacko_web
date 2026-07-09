import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import en from '../locales/en.json'
import { business } from '../data/business'
import Navbar from './Navbar'
import Footer from './Footer'
import JsonLd from './JsonLd'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const navbar = document.getElementById('navbar')
    const onScroll = () => navbar?.classList.toggle('scrolled', window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const origin = window.location.origin

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': `${origin}/#business`,
    name: business.name,
    image: `${origin}/logo.png`,
    url: origin,
    telephone: business.telephone,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      ...business.address,
    },
    areaServed: business.areaServed.map(name => ({ '@type': 'Place', name })),
    sameAs: business.sameAs,
    makesOffer: business.offerCategories.map(name => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name },
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: String(en.testimonials.items.length),
    },
    review: en.testimonials.items.map(t => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: t.name },
      reviewBody: t.text,
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    })),
  }

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <Navbar nav={en.nav} />
      <Outlet />
      <Footer footer={en.footer} />
    </>
  )
}

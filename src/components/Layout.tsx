import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import en from '../locales/en.json'
import Navbar from './Navbar'
import Footer from './Footer'

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

  return (
    <>
      <Navbar nav={en.nav} />
      <Outlet />
      <Footer footer={en.footer} />
    </>
  )
}

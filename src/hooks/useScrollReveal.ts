import { useEffect } from 'react'

export function useScrollReveal(deps: unknown[] = []) {
  useEffect(() => {
    const els = document.querySelectorAll<Element>('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    els.forEach(el => observer.observe(el))

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

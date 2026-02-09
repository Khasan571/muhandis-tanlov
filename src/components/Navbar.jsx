import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { href: '#hero', label: 'Bosh sahifa' },
  { href: '#about', label: 'Tanlov' },
  { href: '#stats', label: 'Statistika' },
  { href: '#directions', label: "Yo'nalishlar" },
  { href: '#prizes', label: 'Mukofotlar' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (e, id) => {
    e.preventDefault()
    setOpen(false)
    document.body.style.overflow = ''
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <div className="container nav__inner">
          <a href="#hero" onClick={(e) => go(e, '#hero')} className="nav__logo">
            <div className="nav__logo-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 19h20L12 2z" />
              </svg>
            </div>
            <span>MUHANDIS</span>
          </a>
          <div className="nav__links">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)}>{l.label}</a>
            ))}
          </div>
          <a href="#timeline" onClick={(e) => go(e, '#timeline')} className="btn-outline nav__cta">Ariza yuborish</a>
          <button className={`nav__burger${open ? ' active' : ''}`} onClick={() => { setOpen(!open); document.body.style.overflow = !open ? 'hidden' : '' }} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`nav__mobile${open ? ' open' : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)}>{l.label}</a>
        ))}
        <a href="#timeline" onClick={(e) => go(e, '#timeline')} className="btn-primary">Ariza yuborish</a>
      </div>
    </>
  )
}

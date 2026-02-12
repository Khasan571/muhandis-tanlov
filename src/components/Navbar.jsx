import { useState, useEffect } from 'react'
import { useTheme } from '../hooks/useTheme'
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
  const { theme, toggle } = useTheme()

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
          <div className="nav__actions">
            <button className="nav__theme" onClick={toggle} aria-label="Temani o'zgartirish">
              {theme === 'dark' ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
            </button>
            <a href="#timeline" onClick={(e) => go(e, '#timeline')} className="btn-outline nav__cta">Ariza yuborish</a>
          </div>
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

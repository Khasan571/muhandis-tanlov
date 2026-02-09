import './Hero.css'

export default function Hero() {
  const go = (e, id) => { e.preventDefault(); document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' }) }

  return (
    <section className="hero" id="hero">
      {/* Floating icon cards — left side (3) */}
      <div className="hero__card hero__card--1" aria-hidden="true">
        <div className="hero__card-icon hero__card-icon--blue">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            <path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.49"/>
          </svg>
        </div>
        <span className="hero__card-label">Energetika</span>
      </div>

      <div className="hero__card hero__card--2" aria-hidden="true">
        <div className="hero__card-icon hero__card-icon--purple">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="2"/>
            <rect x="9" y="9" width="6" height="6"/>
            <line x1="9" y1="2" x2="9" y2="4"/><line x1="15" y1="2" x2="15" y2="4"/>
            <line x1="9" y1="20" x2="9" y2="22"/><line x1="15" y1="20" x2="15" y2="22"/>
            <line x1="2" y1="9" x2="4" y2="9"/><line x1="2" y1="15" x2="4" y2="15"/>
            <line x1="20" y1="9" x2="22" y2="9"/><line x1="20" y1="15" x2="22" y2="15"/>
          </svg>
        </div>
        <span className="hero__card-label">Elektronika</span>
      </div>

      <div className="hero__card hero__card--3" aria-hidden="true">
        <div className="hero__card-icon hero__card-icon--teal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 20h20"/>
            <path d="M5 20V8l7-5 7 5v12"/>
            <rect x="9" y="12" width="6" height="8"/>
            <line x1="9" y1="8" x2="15" y2="8"/>
          </svg>
        </div>
        <span className="hero__card-label">Qurilish</span>
      </div>

      {/* Floating icon cards — right side (2) */}
      <div className="hero__card hero__card--4" aria-hidden="true">
        <div className="hero__card-icon hero__card-icon--blue">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="2.5"/>
            <ellipse cx="12" cy="12" rx="8" ry="3.2"/>
            <ellipse cx="12" cy="12" rx="8" ry="3.2" transform="rotate(60 12 12)"/>
            <ellipse cx="12" cy="12" rx="8" ry="3.2" transform="rotate(120 12 12)"/>
          </svg>
        </div>
        <span className="hero__card-label">Atom</span>
      </div>

      <div className="hero__card hero__card--5" aria-hidden="true">
        <div className="hero__card-icon hero__card-icon--purple">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
            <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
          </svg>
        </div>
        <span className="hero__card-label">Aerokosmik</span>
      </div>

      <div className="container hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          2025-yil Respublika Tanlovi
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line">Muhandislik</span>
          <span className="hero__title-line hero__title--gradient">yo'nalishlari bo'yicha</span>
          <span className="hero__title-line">respublika tanlovi</span>
        </h1>

        <p className="hero__desc">
          Agar siz muhandislikka qiziqsangiz va innovatsion fikrlaringiz bo'lsa,
          bu tanlov siz uchun ajoyib imkoniyat. 8 ta yo'nalish, 3 mlrd mukofot fondi.
        </p>

        <div className="hero__actions">
          <a href="#timeline" onClick={(e) => go(e, '#timeline')} className="btn-primary hero__btn-glow">
            Ariza yuborish
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#about" onClick={(e) => go(e, '#about')} className="btn-outline">Batafsil</a>
        </div>
      </div>

      <div className="hero__fade" />
    </section>
  )
}

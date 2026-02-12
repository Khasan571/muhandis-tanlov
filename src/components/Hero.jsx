import './Hero.css'

export default function Hero() {
  const go = (e, id) => { e.preventDefault(); document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' }) }

  return (
    <section className="hero2" id="hero">
      {/* Geometric mesh background */}
      <div className="hero2__mesh" aria-hidden="true">
        <div className="hero2__mesh-blob hero2__mesh-blob--1" />
        <div className="hero2__mesh-blob hero2__mesh-blob--2" />
        <div className="hero2__mesh-blob hero2__mesh-blob--3" />
      </div>

      {/* Grid overlay */}
      <div className="hero2__grid" aria-hidden="true" />

      <div className="container hero2__layout">
        {/* LEFT — Text */}
        <div className="hero2__text">
          <div className="hero2__tag">
            <span className="hero2__tag-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </span>
            2025-yil Respublika Tanlovi
          </div>

          <h1 className="hero2__title">
            <span className="hero2__title-top">"Kelajak</span>
            <span className="hero2__title-mid">Muhandislari"</span>
            <span className="hero2__title-bot">Respublika <br/>Ko'rik Tanlovi</span>
          </h1>

          <p className="hero2__desc">
            Agar siz muhandislikka qiziqsangiz va innovatsion fikrlaringiz bo'lsa,
            bu tanlov siz uchun ajoyib imkoniyat. 8 ta yo'nalish, 3 mlrd mukofot fondi.
          </p>

          <div className="hero2__actions">
            <a href="#timeline" onClick={(e) => go(e, '#timeline')} className="hero2__btn-main">
              Ariza yuborish
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#about" onClick={(e) => go(e, '#about')} className="hero2__btn-sec">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              Batafsil
            </a>
          </div>

          {/* Mini stats */}
          <div className="hero2__mini-stats">
            <div className="hero2__stat">
              <span className="hero2__stat-num">8</span>
              <span className="hero2__stat-label">Yo'nalish</span>
            </div>
            <div className="hero2__stat-divider" />
            <div className="hero2__stat">
              <span className="hero2__stat-num">3 mlrd</span>
              <span className="hero2__stat-label">Mukofot fondi</span>
            </div>
            <div className="hero2__stat-divider" />
            <div className="hero2__stat">
              <span className="hero2__stat-num">14+</span>
              <span className="hero2__stat-label">Viloyat</span>
            </div>
          </div>
        </div>

        {/* RIGHT — Orbital icons */}
        <div className="hero2__visual">
          {/* Center icon */}
          <div className="hero2__orbit-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 19h20L12 2z" />
              <path d="M12 9v4" />
              <circle cx="12" cy="16" r="0.5" fill="currentColor" />
            </svg>
          </div>

          {/* Orbit ring 1 */}
          <div className="hero2__orbit hero2__orbit--1">
            <div className="hero2__orb hero2__orb--blue" style={{'--angle': '0deg'}}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.49"/></svg>
              <span>Energetika</span>
            </div>
            <div className="hero2__orb hero2__orb--green" style={{'--angle': '90deg'}}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 20h20"/><path d="M5 20V8l7-5 7 5v12"/><rect x="9" y="12" width="6" height="8"/></svg>
              <span>Qurilish</span>
            </div>
            <div className="hero2__orb hero2__orb--purple" style={{'--angle': '180deg'}}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="2" x2="9" y2="4"/><line x1="15" y1="2" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="22"/><line x1="15" y1="20" x2="15" y2="22"/><line x1="2" y1="9" x2="4" y2="9"/><line x1="2" y1="15" x2="4" y2="15"/><line x1="20" y1="9" x2="22" y2="9"/><line x1="20" y1="15" x2="22" y2="15"/></svg>
              <span>Elektronika</span>
            </div>
            <div className="hero2__orb hero2__orb--cyan" style={{'--angle': '270deg'}}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" y1="4" x2="10" y2="20"/></svg>
              <span>Dasturlash</span>
            </div>
          </div>

          {/* Orbit ring 2 */}
          <div className="hero2__orbit hero2__orbit--2">
            <div className="hero2__orb hero2__orb--orange" style={{'--angle': '45deg'}}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="2.5"/><ellipse cx="12" cy="12" rx="8" ry="3.2"/><ellipse cx="12" cy="12" rx="8" ry="3.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="8" ry="3.2" transform="rotate(120 12 12)"/></svg>
              <span>Atom</span>
            </div>
            <div className="hero2__orb hero2__orb--pink" style={{'--angle': '135deg'}}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>
              <span>Aerokosmik</span>
            </div>
            <div className="hero2__orb hero2__orb--blue" style={{'--angle': '225deg'}}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              <span>Mexanika</span>
            </div>
            <div className="hero2__orb hero2__orb--green" style={{'--angle': '315deg'}}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
              <span>Xavfsizlik</span>
            </div>
          </div>

          {/* Decorative rings */}
          <div className="hero2__ring hero2__ring--1" />
          <div className="hero2__ring hero2__ring--2" />
          <div className="hero2__ring hero2__ring--3" />

          {/* Floating particles */}
          <div className="hero2__particle hero2__particle--1" />
          <div className="hero2__particle hero2__particle--2" />
          <div className="hero2__particle hero2__particle--3" />
          <div className="hero2__particle hero2__particle--4" />
          <div className="hero2__particle hero2__particle--5" />
          <div className="hero2__particle hero2__particle--6" />
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="hero2__marquee" aria-hidden="true">
        <div className="hero2__marquee-track">
          {[1, 2].map((i) => (
            <div key={i} className="hero2__marquee-content">
              <span>Energetika</span><span className="hero2__marquee-dot">&#9670;</span>
              <span>Elektronika</span><span className="hero2__marquee-dot">&#9670;</span>
              <span>Qurilish</span><span className="hero2__marquee-dot">&#9670;</span>
              <span>Dasturlash</span><span className="hero2__marquee-dot">&#9670;</span>
              <span>Atom energetikasi</span><span className="hero2__marquee-dot">&#9670;</span>
              <span>Aerokosmik</span><span className="hero2__marquee-dot">&#9670;</span>
              <span>Mexanika</span><span className="hero2__marquee-dot">&#9670;</span>
              <span>Xavfsizlik</span><span className="hero2__marquee-dot">&#9670;</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero2__fade" />
    </section>
  )
}

import { useReveal } from '../hooks/useReveal'
import './Prizes.css'

function R({ className, children }) { const ref = useReveal(); return <div className={`reveal ${className||''}`} ref={ref}>{children}</div> }

const highlights = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/>
        <circle cx="7" cy="17" r="2"/>
        <path d="M9 17h6"/>
        <circle cx="17" cy="17" r="2"/>
      </svg>
    ),
    value: '9 ta',
    label: 'Elektromobil',
    desc: "Har bir yo'nalish g'oliblari uchun zamonaviy elektromobil",
    color: '#3B82F6',
    rgb: '59,130,246',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    value: 'Xorijda',
    label: 'Stajirovka',
    desc: "Yetakchi xorijiy universitetlarda malaka oshirish dasturi",
    color: '#8B5CF6',
    rgb: '139,92,246',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6"/>
      </svg>
    ),
    value: '3 mlrd',
    label: 'Pul mukofotlari',
    desc: "Umumiy mukofot fondi — pul sovrinlari va grantlar",
    color: '#06B6D4',
    rgb: '6,182,212',
  },
]

const categories = [
  {
    place: "1-o'rin",
    title: "Eng yaxshi g'oya",
    prize: 'Elektromobil + Stajirovka',
    extra: "Pul mukofoti va xalqaro konferentsiyada ishtirok",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6"/>
        <path d="M10 22h4"/>
        <path d="M12 2a7 7 0 0 1 4 12.73V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.27A7 7 0 0 1 12 2z"/>
      </svg>
    ),
    accent: '#F59E0B',
    accentRgb: '245,158,11',
  },
  {
    place: "2-o'rin",
    title: 'Eng yaxshi loyiha',
    prize: 'Elektromobil + Stajirovka',
    extra: "Pul mukofoti va loyihani amalga oshirish uchun grant",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    accent: '#94A3B8',
    accentRgb: '148,163,184',
  },
  {
    place: "3-o'rin",
    title: 'Eng yaxshi ixtiro',
    prize: 'Elektromobil + Stajirovka',
    extra: "Pul mukofoti va patent olishda yordam",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    accent: '#D97706',
    accentRgb: '217,119,6',
  },
]

export default function Prizes() {
  return (
    <section className="prizes sec sec-darker" id="prizes">
      <div className="container">
        {/* Header */}
        <R className="prizes__header">
          <span className="sec-label">Mukofotlar</span>
          <h2 className="sec-heading">G'oliblarni katta sovg'alar kutmoqda</h2>
          <p className="sec-text">
            Har bir yo'nalish bo'yicha 3 ta eng yaxshi ishtirokchi quyidagi mukofotlarga sazovor bo'ladi.
          </p>
        </R>

        {/* Highlight banner cards */}
        <div className="prizes__highlights">
          {highlights.map((h) => (
            <R key={h.label} className="prizes__hl">
              <div className="prizes__hl-icon" style={{'--hl-rgb': h.rgb, '--hl-color': h.color}}>
                {h.icon}
              </div>
              <div className="prizes__hl-info">
                <div className="prizes__hl-value" style={{color: h.color}}>{h.value}</div>
                <div className="prizes__hl-label">{h.label}</div>
              </div>
              <p className="prizes__hl-desc">{h.desc}</p>
              <div className="prizes__hl-glow" style={{'--hl-rgb': h.rgb}} />
            </R>
          ))}
        </div>

        {/* Category prizes table */}
        <R className="prizes__table-wrap">
          <div className="prizes__table-head">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
            <span>Yo'nalishlar bo'yicha mukofotlar</span>
          </div>
          <div className="prizes__table">
            {categories.map((c) => (
              <div key={c.title} className="prizes__row" style={{'--row-rgb': c.accentRgb, '--row-color': c.accent}}>
                <div className="prizes__row-place">
                  <span>{c.place}</span>
                </div>
                <div className="prizes__row-icon">
                  {c.icon}
                </div>
                <div className="prizes__row-info">
                  <h4>{c.title}</h4>
                  <p>{c.extra}</p>
                </div>
                <div className="prizes__row-prize">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                  <span>{c.prize}</span>
                </div>
              </div>
            ))}
          </div>
        </R>

        {/* Bottom CTA */}
        <R className="prizes__cta">
          <div className="prizes__cta-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            9 ta elektromobil — 3 ta yo'nalish
          </div>
        </R>
      </div>
    </section>
  )
}

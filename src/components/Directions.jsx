import { useReveal } from '../hooks/useReveal'
import './Directions.css'

function R({ className, children }) { const ref = useReveal(); return <div className={`reveal ${className||''}`} ref={ref}>{children}</div> }

const dirs = [
  {
    title: 'Axborot texnologiyalari',
    tag: 'IT & Dasturlash',
    desc: "Dasturlash, sun'iy intellekt, kiberxavfsizlik",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
  },
  {
    title: 'Mexanika',
    tag: 'Robotika',
    desc: 'Mashinasozlik, robotika, avtomatlashtirish',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  },
  {
    title: 'Elektronika',
    tag: 'IoT & Signallar',
    desc: 'Mikroelektronika, signallar, IoT qurilmalar',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M6 8H5a4 4 0 0 0 0 8h1"/><path d="M8 6v12"/><path d="M16 6v12"/><path d="M8 12h8"/></svg>,
  },
  {
    title: 'Qurilish',
    tag: 'Arxitektura',
    desc: 'Arxitektura, konstruktsiyalar, smart binolar',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20"/><path d="M5 20V6l7-3 7 3v14"/><path d="M9 20v-4h6v4"/></svg>,
  },
  {
    title: 'Kimyo muhandisligi',
    tag: 'Materiallar',
    desc: 'Materiallar, farmatsevtika, kimyoviy texnologiya',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6v8l4 9H5l4-9V3z"/><path d="M9 3h6"/></svg>,
  },
  {
    title: 'Energetika',
    tag: 'Yashil energiya',
    desc: 'Qayta tiklanadigan energiya, quyosh, shamol',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  },
  {
    title: 'Aerokosmik',
    tag: 'Aviatsiya',
    desc: 'Aviatsiya, kosmik texnologiyalar, dronlar',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>,
  },
  {
    title: 'Biotexnologiya',
    tag: 'Biomedikal',
    desc: 'Biomedikal, genetika, oziq-ovqat texnologiyasi',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z"/><circle cx="12" cy="10" r="3"/></svg>,
  },
]

export default function Directions() {
  return (
    <section className="dirs sec sec-dark" id="directions">
      <div className="container">
        <R className="dirs__header">
          <span className="sec-label">Yo'nalishlar</span>
          <h2 className="sec-heading">8 ta muhandislik yo'nalishi</h2>
          <p className="sec-text">
            O'zingizga yaqin bo'lgan yo'nalishni tanlang va loyihangiz bilan tanlovda ishtirok eting.
          </p>
        </R>
        <div className="dirs__grid">
          {dirs.map((d) => (
            <R key={d.title} className="dirs__card glass">
              <div className="dirs__card-top">
                <span className="dirs__tag">{d.tag}</span>
                <div className="dirs__arrow-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                </div>
              </div>
              <div className="dirs__icon">{d.icon}</div>
              <h3>{d.title}</h3>
              <p>{d.desc}</p>
            </R>
          ))}
        </div>
      </div>
    </section>
  )
}

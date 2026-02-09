import { useReveal } from '../hooks/useReveal'
import './Timeline.css'

function R({ className, children }) { const ref = useReveal(); return <div className={`reveal ${className||''}`} ref={ref}>{children}</div> }

const steps = [
  {
    num: '01',
    title: "Ro'yxatdan o'ting",
    desc: "Rasmiy veb-saytda shaxsiy ma'lumotlaringizni to'ldiring va akkount yarating.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6M23 11h-6"/></svg>,
  },
  {
    num: '02',
    title: "Yo'nalish tanlang",
    desc: "8 ta yo'nalishdan o'zingizga mos keluvchisini tanlang.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
  },
  {
    num: '03',
    title: 'Ariza topshiring',
    desc: "Loyihangiz tavsifi, texnik hujjatlar va video taqdimotni yuklang.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>,
  },
  {
    num: '04',
    title: 'Baholash va final',
    desc: "Finalga chiqqan ishtirokchilar Toshkentda jonli taqdimot qiladi.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>,
  },
]

export default function Timeline() {
  return (
    <section className="tl sec sec-dark" id="timeline">
      {/* Subtle glow */}
      <div className="tl__bg-glow" />
      <div className="container">
        <R className="tl__header">
          <span className="sec-label">Ishtirok etish</span>
          <h2 className="sec-heading">Qanday ishtirok etish mumkin?</h2>
          <p className="sec-text">Tanlovda ishtirok etish uchun quyidagi oddiy qadamlarni bajaring.</p>
        </R>

        <div className="tl__grid">
          {steps.map((s, i) => (
            <R key={s.num} className="tl__step glass">
              <div className="tl__step-icon">{s.icon}</div>
              <div className="tl__step-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="tl__connector">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                </div>
              )}
            </R>
          ))}
        </div>
      </div>
    </section>
  )
}

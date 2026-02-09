import { useReveal } from '../hooks/useReveal'
import './About.css'

function R({ className, children }) { const ref = useReveal(); return <div className={`reveal ${className||''}`} ref={ref}>{children}</div> }

const features = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z"/><path d="M9 21h6M10 17h4"/></svg>,
    title: 'Innovatsion g\'oya',
    desc: 'Yangi va ijodiy g\'oyalarni taqdim eting. Ekspertlar tomonidan baholanadi.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20"/><path d="M5 20V8l7-5 7 5v12"/><path d="M9 20v-5h6v5"/></svg>,
    title: 'Amaliy loyiha',
    desc: 'Haqiqiy muammolarni hal qiluvchi amaliy loyihalar ishlab chiqing.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
    title: 'Ilmiy ixtiro',
    desc: 'Ilmiy tadqiqotlarga asoslangan ixtirolaringizni namoyish eting.',
  },
]

export default function About() {
  const go = (e, id) => { e.preventDefault(); document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' }) }

  return (
    <section className="about sec sec-darker" id="about">
      <div className="container">
        <R className="about__top">
          <span className="sec-label">Tanlov haqida</span>
          <h2 className="sec-heading">Eng yaxshi g'oya — eng katta yutuq</h2>
          <p className="sec-text">
            Tanlov uch asosiy kategoriya bo'yicha o'tkaziladi. Har bir ishtirokchi
            o'z sohasida eng yaxshi natijani ko'rsatishi mumkin.
          </p>
        </R>

        <div className="about__cards">
          {features.map((f) => (
            <R key={f.title} className="about__card glass">
              <div className="about__card-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              <div className="about__card-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
              </div>
            </R>
          ))}
        </div>

        <R className="about__bottom glass">
          <div className="about__bottom-text">
            <span className="sec-label">Ekspert baholash</span>
            <h3>150+ ekspert hakamlar loyihalarni baholaydi</h3>
            <p>Innovatsiya darajasi (30%), amaliy qo'llanilishi (25%), texnik murakkablik (25%) va taqdimot sifati (20%) bo'yicha baholanadi.</p>
            <div className="about__bottom-actions">
              <a href="#directions" onClick={(e) => go(e, '#directions')} className="btn-primary">Yo'nalishlarni ko'rish</a>
              <a href="#faq" onClick={(e) => go(e, '#faq')} className="btn-outline">Ko'proq bilish</a>
            </div>
          </div>
          <div className="about__bottom-visual">
            <div className="about__percent">
              <svg viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
                <circle cx="60" cy="60" r="52" fill="none" stroke="#3B82F6" strokeWidth="8" strokeDasharray="327" strokeDashoffset="82" strokeLinecap="round" transform="rotate(-90 60 60)" />
              </svg>
              <div className="about__percent-text">
                <span>75%</span>
                <small>G'oliblar amaliy loyihalar bilan ishtirok etgan</small>
              </div>
            </div>
          </div>
        </R>
      </div>
    </section>
  )
}

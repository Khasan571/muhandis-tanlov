import { useReveal } from '../hooks/useReveal'
import './Directions.css'

function R({ className, children }) { const ref = useReveal(); return <div className={`reveal ${className||''}`} ref={ref}>{children}</div> }

const categories = [
  {
    num: '01',
    title: "Eng yaxshi g'oya",
    accent: '#3B82F6',
    accentRgb: '59,130,246',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6"/>
        <path d="M10 22h4"/>
        <path d="M12 2a7 7 0 0 1 4 12.73V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.27A7 7 0 0 1 12 2z"/>
      </svg>
    ),
    desc: "Ilmiy-innovatsion xususiyatga ega bo'lgan oddiy fikr yoki taklif shaklidagi yangilikni anglatadi. Bu biror muammoni hal qilishga yoki mavjud jarayonni yaxshilashga qaratilgan konseptual yondashuv bo'lishi lozim.",
    detail: "Odatda g'oya boshlang'ich bosqichda bo'ladi va hali rejalashtirish, texnik yechim yoki amaliy qo'llash darajasiga yetmagan bo'ladi.",
    tags: ['Konseptual fikr', 'Innovatsiya', "Boshlang'ich bosqich"],
  },
  {
    num: '02',
    title: 'Eng yaxshi loyiha',
    accent: '#8B5CF6',
    accentRgb: '139,92,246',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    desc: "G'oya bosqichidan keyingi daraja bo'lib, unda g'oya amalga oshirish uchun aniq rejalashtirilgan va hujjatlashtirilgan shaklda ifodalanadi.",
    detail: "Loyihada aniq biznes-reja, maqsadlar, resurslar, vaqt jadvali, bosqichlar va ehtiyojlar belgilab qo'yiladi. Loyihalar g'oya asosida quriladi, lekin ular aniq rejalashtirilgan va amalga oshirish uchun aniq yondashuvlarni o'z ichiga oladi.",
    tags: ['Biznes-reja', 'Hujjatlashtirilgan', 'Rejalashtirilgan'],
  },
  {
    num: '03',
    title: 'Eng yaxshi ixtiro',
    accent: '#06B6D4',
    accentRgb: '6,182,212',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    desc: "Amaliyotda qo'llanilishi mumkin bo'lgan yangi, ilgari mavjud bo'lmagan mahsulot, qurilma yoki texnologiyani yaratishni anglatadi.",
    detail: "Ixtirolar odatda maxsus sinovlardan o'tgan va patentlanadigan obyektlar hisoblanadi. G'oya va loyihadan keyingi bosqich bo'lib, real, jismoniy yoki texnik jihatdan aniq shaklga ega. Ixtiro mavjud muammoni hal etuvchi tayyor yechim bo'lib, undan foydalanish mumkin.",
    tags: ['Patent', 'Tayyor yechim', 'Amaliy qo\'llash'],
  },
]

export default function Directions() {
  return (
    <section className="dirs sec sec-darker" id="directions">
      <div className="container">
        <R className="dirs__header">
          <span className="sec-label">Yo'nalishlar</span>
          <h2 className="sec-heading">Tanlov yo'nalishlari</h2>
          <p className="sec-text">
            Muhandislik yo'nalishlari bo'yicha respublika ko'rik-tanlovida
            o'qituvchilar, talabalar va amaliyotchi muhandislar ishtirok etishi mumkin.
          </p>
        </R>

        {/* Step progress line */}
        <R className="dirs__progress">
          {categories.map((c, i) => (
            <div key={c.num} className="dirs__step" style={{'--step-color': c.accent}}>
              <div className="dirs__step-dot">{c.num}</div>
              <span className="dirs__step-label">{c.title}</span>
              {i < categories.length - 1 && <div className="dirs__step-line" />}
            </div>
          ))}
        </R>

        {/* Cards */}
        <div className="dirs__cards">
          {categories.map((c, i) => (
            <R key={c.num} className={`dirs__card dirs__card--${i + 1}`}>
              {/* Glow effect */}
              <div className="dirs__card-glow" style={{'--glow-rgb': c.accentRgb}} />

              {/* Header */}
              <div className="dirs__card-head">
                <div className="dirs__card-icon" style={{'--ic-rgb': c.accentRgb, '--ic-color': c.accent}}>
                  {c.icon}
                </div>
                <span className="dirs__card-num" style={{color: c.accent}}>{c.num}</span>
              </div>

              {/* Content */}
              <h3 className="dirs__card-title">{c.title}</h3>
              <p className="dirs__card-desc">{c.desc}</p>
              <p className="dirs__card-detail">{c.detail}</p>

              {/* Tags */}
              <div className="dirs__card-tags">
                {c.tags.map((t) => (
                  <span key={t} className="dirs__card-tag" style={{'--tag-rgb': c.accentRgb}}>{t}</span>
                ))}
              </div>

              {/* Bottom accent bar */}
              <div className="dirs__card-bar" style={{background: `linear-gradient(90deg, ${c.accent}, transparent)`}} />
            </R>
          ))}
        </div>
      </div>
    </section>
  )
}

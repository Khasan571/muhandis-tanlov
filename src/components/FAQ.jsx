import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import './FAQ.css'

function R({ className, children }) { const ref = useReveal(); return <div className={`reveal ${className||''}`} ref={ref}>{children}</div> }

const faqs = [
  {
    q: 'Tanlovda kimlar ishtirok etishi mumkin?',
    a: "O'zbekiston Respublikasi fuqarolari, 18 yoshdan 35 yoshgacha bo'lgan barcha yosh muhandislar, talabalar va mutaxassislar ishtirok etishi mumkin. Jamoaviy arizalar ham qabul qilinadi (5 nafargacha).",
  },
  {
    q: 'Ishtirok etish bepulmi?',
    a: "Ha, tanlovda ishtirok etish to'liq bepul. Ro'yxatdan o'tish, ariza topshirish va barcha bosqichlarda qatnashish uchun hech qanday to'lov talab etilmaydi.",
  },
  {
    q: 'Ariza topshirish muddati qachongacha?',
    a: "Arizalar 2025-yil 1-sentabrgacha qabul qilinadi. Natijalar 2025-yil oktyabr oyida e'lon qilinadi. Final bosqichi 2025-yil noyabr oyida Toshkent shahrida o'tkaziladi.",
  },
  {
    q: 'Loyiha qanday baholanadi?',
    a: "Loyihalar innovatsiya darajasi (30%), amaliy qo'llanilishi (25%), texnik murakkablik (25%) va taqdimot sifati (20%) bo'yicha baholanadi. Har bir yo'nalish uchun alohida ekspert komissiyasi tayinlanadi.",
  },
  {
    q: "Bir nechta yo'nalishda ishtirok etsa bo'ladimi?",
    a: "Yo'q, har bir ishtirokchi faqat bitta yo'nalishda qatnashishi mumkin. Ammo jamoaviy ariza a'zolari boshqa jamoada individual tarzda qatnashishi mumkin.",
  },
  {
    q: "Qo'shimcha ma'lumot olish uchun kimga murojaat qilish mumkin?",
    a: "Rasmiy Telegram kanal: @muhandis_edu_uz orqali yoki info@muhandis.edu.uz elektron pochta manziliga murojaat qilishingiz mumkin. Ish vaqti: dushanba-juma, 9:00-18:00.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1)
  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i)

  return (
    <section className="faq sec sec-darker" id="faq">
      <div className="container">
        <R className="faq__header">
          <span className="sec-label">FAQ</span>
          <h2 className="sec-heading">Ko'p beriladigan savollar</h2>
          <p className="sec-text">Tanlov haqida eng ko'p so'raladigan savollarga javoblar.</p>
        </R>

        <R className="faq__list">
          {faqs.map((item, i) => (
            <div key={i} className={`faq__item${openIndex === i ? ' faq__item--open' : ''}`}>
              <button className="faq__q" onClick={() => toggle(i)}>
                <div className="faq__q-num">{String(i + 1).padStart(2, '0')}</div>
                <span>{item.q}</span>
                <svg className="faq__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div className="faq__a">
                <div className="faq__a-wrap">
                  <div className="faq__a-inner">{item.a}</div>
                </div>
              </div>
            </div>
          ))}
        </R>
      </div>
    </section>
  )
}

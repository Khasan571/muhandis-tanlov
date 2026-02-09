import { useReveal } from '../hooks/useReveal'
import './Prizes.css'

function R({ className, children }) { const ref = useReveal(); return <div className={`reveal ${className||''}`} ref={ref}>{children}</div> }

export default function Prizes() {
  return (
    <section className="prizes sec sec-darker" id="prizes">
      <div className="container">
        <R className="prizes__header">
          <span className="sec-label">Mukofotlar</span>
          <h2 className="sec-heading">G'oliblarni katta sovg'alar kutmoqda</h2>
        </R>
        <div className="prizes__grid">
          <R className="prizes__card prizes__card--gold glass">
            <div className="prizes__glow" />
            <div className="prizes__rank">01</div>
            <div className="prizes__medal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
            </div>
            <h3>Elektromobil</h3>
            <p>Zamonaviy elektromobil va xalqaro konferentsiyalarda ishtirok etish imkoniyati</p>
            <span className="prizes__tag">1-o'rin</span>
          </R>
          <R className="prizes__card prizes__card--silver glass">
            <div className="prizes__glow" />
            <div className="prizes__rank">02</div>
            <div className="prizes__medal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
            <h3>Xorijda malaka oshirish</h3>
            <p>Yetakchi xorijiy universitetlarda 6 oylik malaka oshirish dasturi</p>
            <span className="prizes__tag">2-o'rin</span>
          </R>
          <R className="prizes__card prizes__card--bronze glass">
            <div className="prizes__glow" />
            <div className="prizes__rank">03</div>
            <div className="prizes__medal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6"/></svg>
            </div>
            <h3>100 million so'm</h3>
            <p>Pul mukofoti va loyihani amalga oshirish uchun grant</p>
            <span className="prizes__tag">3-o'rin</span>
          </R>
        </div>
      </div>
    </section>
  )
}

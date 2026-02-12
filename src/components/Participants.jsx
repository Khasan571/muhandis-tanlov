import { useReveal } from '../hooks/useReveal'
import './Participants.css'

function R({ className, children }) { const ref = useReveal(); return <div className={`reveal ${className||''}`} ref={ref}>{children}</div> }

const participants = [
  {
    title: 'Talabalar',
    desc: 'Bakalavriat hamda magistratura bosqichida tahsil olayotgan talabalar',
    video: 'https://assets.mixkit.co/videos/48503/48503-720.mp4',
  },
  {
    title: 'Amaliyotchi muhandislar',
    desc: 'Doktorantlar, tadqiqotchilar, sanoat va texnopark mutaxassislari ishtirok etadi.',
    video: 'https://assets.mixkit.co/videos/4719/4719-720.mp4',
  },
  {
    title: "Professor-o'qituvchilar",
    desc: "Oliy ta'lim tashkilotlarida faoliyat yurituvchi professor-o'qituvchilar",
    video: 'https://assets.mixkit.co/videos/48165/48165-720.mp4',
  },
]

export default function Participants() {
  return (
    <section className="participants sec sec-darker" id="participants">
      <div className="container">
        <R className="participants__header">
          <span className="sec-label">Ishtirokchilar</span>
          <h2 className="sec-heading">Tanlovda kimlar qatnasha oladi?</h2>
          <p className="sec-text">
            Tanlovda quyidagi toifadagi mutaxassislar ishtirok etishi mumkin.
          </p>
        </R>

        <div className="participants__grid">
          {participants.map((p) => (
            <R key={p.title} className="participants__card">
              <div className="participants__frame">
                <div className="participants__corner-bl" />
                <div className="participants__corner-br" />
                <div className="participants__scanline" />
                <video
                  className="participants__video"
                  src={p.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
              <h3 className="participants__title">{p.title}</h3>
              <p className="participants__desc">{p.desc}</p>
            </R>
          ))}
        </div>
      </div>
    </section>
  )
}

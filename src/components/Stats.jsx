import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { useCounter } from '../hooks/useCounter'
import { regions as mapRegions, aralSea } from './UzbekistanMap'
import './Stats.css'

function R({ className, children }) { const ref = useReveal(); return <div className={`reveal ${className||''}`} ref={ref}>{children}</div> }

function Counter({ target, suffix = '' }) {
  const { ref, display } = useCounter(target, suffix)
  return <span ref={ref} className="stats__counter">{display}</span>
}

const regionData = {
  'qoraqalpogiston': { name: "Qoraqalpog'iston", applications: 320 },
  'xorazm': { name: 'Xorazm', applications: 185 },
  'buxoro': { name: 'Buxoro', applications: 210 },
  'navoiy': { name: 'Navoiy', applications: 145 },
  'samarqand': { name: 'Samarqand', applications: 290 },
  'qashqadaryo': { name: "Qashqadaryo", applications: 230 },
  'surxondaryo': { name: "Surxondaryo", applications: 175 },
  'jizzax': { name: 'Jizzax', applications: 160 },
  'sirdaryo': { name: "Sirdaryo", applications: 140 },
  'toshkent-viloyati': { name: 'Toshkent vil.', applications: 380 },
  'toshkent-shahri': { name: 'Toshkent sh.', applications: 420 },
  'fargona': { name: "Farg'ona", applications: 265 },
  'andijon': { name: 'Andijon', applications: 240 },
  'namangan': { name: 'Namangan', applications: 220 },
}

const dirStats = [
  { name: 'Axborot texnologiyalari', count: 620, color: '#3B82F6' },
  { name: 'Mexanika', count: 410, color: '#60A5FA' },
  { name: 'Elektronika', count: 380, color: '#93C5FD' },
  { name: 'Qurilish', count: 350, color: '#3B82F6' },
  { name: 'Kimyo muhandisligi', count: 290, color: '#60A5FA' },
  { name: 'Energetika', count: 320, color: '#93C5FD' },
  { name: 'Aerokosmik', count: 210, color: '#3B82F6' },
  { name: 'Biotexnologiya', count: 280, color: '#60A5FA' },
]

const totalApps = Object.values(regionData).reduce((s, r) => s + r.applications, 0)
const maxDir = Math.max(...dirStats.map(d => d.count))

export default function Stats() {
  const [hovered, setHovered] = useState(null)
  const hoveredInfo = hovered ? regionData[hovered] : null

  return (
    <section className="stats sec sec-darker" id="stats">
      <div className="container">
        <R className="stats__head">
          <h2 className="stats__title">
            <span className="stats__title--accent">Statistik</span> ma'lumotlar
          </h2>
        </R>

        <div className="stats__layout">
          {/* Left — Uzbekistan map */}
          <R className="stats__map-wrap">
            <div className="stats__map-container">
              <svg className="stats__map" viewBox="0 0 793 517" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Aral Sea */}
                <path
                  d={aralSea.path}
                  fill="rgba(59,130,246,0.08)"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="0.5"
                  opacity="0.5"
                />

                {/* Regions */}
                {mapRegions.map(region => {
                  const isCity = region.id === 'toshkent-shahri'
                  return (
                    <path
                      key={region.id}
                      data-id={region.id}
                      d={region.path}
                      className={`stats__region${isCity ? ' stats__region--city' : ''} ${hovered === region.id ? 'active' : ''}`}
                      onMouseEnter={() => setHovered(region.id)}
                      onMouseLeave={() => setHovered(null)}
                    />
                  )
                })}
              </svg>

              {/* Tooltip */}
              {hoveredInfo && (
                <div className="stats__tooltip glass">
                  <span className="stats__tooltip-name">{hoveredInfo.name}</span>
                  <span className="stats__tooltip-val">{hoveredInfo.applications} ariza</span>
                </div>
              )}
            </div>
          </R>

          {/* Right — statistics panel */}
          <R className="stats__panel">
            <div className="stats__panel-head">
              <span className="sec-label">Respublika miqyosida</span>
              <h3>Respublika miqyosidagi statistika</h3>
              <p className="stats__total">Jami arizalar soni: <Counter target={totalApps} /></p>
            </div>

            {/* 3 summary cards */}
            <div className="stats__cards">
              <div className="stats__card stats__card--blue glass">
                <div className="stats__card-num"><Counter target={14} /></div>
                <div className="stats__card-label">Viloyat</div>
                <div className="stats__card-sub">Barcha viloyatlardan arizalar qabul qilinmoqda</div>
              </div>
              <div className="stats__card stats__card--green glass">
                <div className="stats__card-num"><Counter target={8} /></div>
                <div className="stats__card-label">Yo'nalish</div>
                <div className="stats__card-sub">Muhandislik yo'nalishlari bo'yicha tanlov</div>
              </div>
              <div className="stats__card stats__card--purple glass">
                <div className="stats__card-num"><Counter target={150} suffix="+" /></div>
                <div className="stats__card-label">Ekspertlar</div>
                <div className="stats__card-sub">Professional hakamlar baholaydi</div>
              </div>
            </div>

            {/* Direction bar chart */}
            <div className="stats__bars">
              <h4>Yo'nalishlar bo'yicha</h4>
              {dirStats.map(d => (
                <div key={d.name} className="stats__bar-row">
                  <span className="stats__bar-label">{d.name}</span>
                  <div className="stats__bar-track">
                    <div className="stats__bar-fill" style={{ width: `${(d.count / maxDir) * 100}%`, background: d.color }} />
                  </div>
                  <span className="stats__bar-val">{d.count}</span>
                </div>
              ))}
            </div>
          </R>
        </div>
      </div>
    </section>
  )
}

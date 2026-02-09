import './Footer.css'

const pageLinks = [
  { href: '#about', label: 'Tanlov haqida' },
  { href: '#prizes', label: 'Mukofotlar' },
  { href: '#directions', label: "Yo'nalishlar" },
  { href: '#timeline', label: 'Ishtirok etish' },
  { href: '#faq', label: 'FAQ' },
]

export default function Footer() {
  const go = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#hero" onClick={(e) => go(e, '#hero')} className="footer__logo">
              <div className="footer__logo-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 19h20L12 2z" />
                </svg>
              </div>
              <span>MUHANDIS</span>
            </a>
            <p>
              Muhandislik yo'nalishlari bo'yicha respublika tanlovi — yosh muhandislar uchun eng
              katta imkoniyat platformasi.
            </p>
          </div>

          <div className="footer__col">
            <h4>Sahifa</h4>
            {pageLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)}>{l.label}</a>
            ))}
          </div>

          <div className="footer__col">
            <h4>Kontakt</h4>
            <a href="mailto:info@muhandis.edu.uz">info@muhandis.edu.uz</a>
            <a href="tel:+998711234567">+998 71 123 45 67</a>
            <a href="#">Toshkent, Olmazor tumani</a>
          </div>

          <div className="footer__col">
            <h4>Ijtimoiy tarmoqlar</h4>
            <div className="footer__social">
              <a href="#" aria-label="Telegram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.2 4.6L2.5 11.1c-.5.2-.5.5 0 .6l4.8 1.5 1.8 5.8c.1.4.5.5.8.2l2.6-2.1 4.9 3.6c.5.3 1 .1 1.1-.4L21.8 5.5c.2-.7-.2-1.1-.6-.9z"/><path d="M8.3 13.2l9.6-5.9"/></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.5 6.4a2.8 2.8 0 0 0-2-2C18.9 4 12 4 12 4s-6.9 0-8.5.4a2.8 2.8 0 0 0-2 2A29.3 29.3 0 0 0 1 12a29.3 29.3 0 0 0 .5 5.6 2.8 2.8 0 0 0 2 2c1.6.4 8.5.4 8.5.4s6.9 0 8.5-.4a2.8 2.8 0 0 0 2-2A29.3 29.3 0 0 0 23 12a29.3 29.3 0 0 0-.5-5.6z"/><path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          &copy; 2025 MUHANDIS. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  )
}

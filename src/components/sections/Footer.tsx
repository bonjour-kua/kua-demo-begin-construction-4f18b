import { Phone, MapPin } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#gallery' },
  { label: 'À propos', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'FAQ', href: '#faq' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#1B1B1B] border-t border-[#3c3c3c]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <div>
            <a href="#" className="inline-flex items-baseline gap-2 mb-5 focus-visible:ring-2 focus-visible:ring-[#cfcfcf]">
              <span className="font-display text-4xl text-white leading-none tracking-tight">BEGIN</span>
              <span className="font-body text-xs uppercase tracking-[0.18em] text-[#cfcfcf] font-medium">Construction</span>
            </a>
            <p className="font-body text-sm text-white/60 leading-relaxed max-w-[260px]">
              De la fondation aux finitions — un seul entrepreneur pour votre projet résidentiel complet à Gatineau.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#cfcfcf]/50 mb-6">Navigation</p>
            <nav aria-label="Navigation pied de page">
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-body text-sm text-white/70 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#cfcfcf]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#cfcfcf]/50 mb-6">Nous joindre</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-[#cfcfcf] flex-shrink-0" />
                <a
                  href="tel:+18192095754"
                  className="font-body text-sm text-white/80 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#cfcfcf]"
                >
                  819-209-5754
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={14} className="text-[#cfcfcf] flex-shrink-0" />
                <p className="font-body text-sm text-white/80">Gatineau, Québec</p>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 border border-[#cfcfcf]/40 text-[#cfcfcf] font-mono text-xs uppercase tracking-widest px-6 py-3 min-h-[44px] hover:bg-[#3c3c3c] hover:border-[#cfcfcf] transition-colors focus-visible:ring-2 focus-visible:ring-[#cfcfcf]"
            >
              Obtenir une soumission
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#3c3c3c] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/40">
            © {year} BEGIN Construction. Tous droits réservés.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/30">
            Gatineau, Outaouais, QC
          </p>
        </div>
      </div>
    </footer>
  )
}

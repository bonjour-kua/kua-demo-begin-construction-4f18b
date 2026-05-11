import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#gallery' },
  { label: 'À propos', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setOpen(false)

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-200 ${scrolled ? 'bg-[#1B1B1B]' : 'bg-[#1B1B1B]'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-[#cfcfcf]" aria-label="BEGIN Construction — Accueil">
          <img src="/images/logo-clean.jpg" alt="BEGIN Construction" loading="eager" width={44} height={44} className="object-contain" />
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-2xl text-white leading-none tracking-tight">BEGIN</span>
            <span className="font-body text-[10px] uppercase tracking-[0.18em] text-[#cfcfcf] font-medium">Construction</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="font-mono text-xs uppercase tracking-[0.12em] text-[#cfcfcf] hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#cfcfcf]">
              {link.label}
            </a>
          ))}
          <a href="tel:+18192095754" className="flex items-center gap-2 bg-[#3c3c3c] text-white font-mono text-xs uppercase tracking-widest px-5 py-2 min-h-[40px] hover:bg-[#cfcfcf] hover:text-[#1B1B1B] transition-colors focus-visible:ring-2 focus-visible:ring-[#cfcfcf]" aria-label="Appeler BEGIN Construction">
            <Phone size={13} />
            819-209-5754
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white p-2 min-h-[48px] min-w-[48px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#cfcfcf]" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-[#1B1B1B] border-t border-[#3c3c3c] px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={handleNavClick} className="font-display text-2xl text-white uppercase tracking-wide hover:text-[#cfcfcf] transition-colors">
              {link.label}
            </a>
          ))}
          <a href="tel:+18192095754" className="flex items-center gap-3 mt-4 bg-[#3c3c3c] text-white font-mono text-sm uppercase tracking-widest px-6 py-4 min-h-[48px] hover:bg-[#cfcfcf] hover:text-[#1B1B1B] transition-colors">
            <Phone size={16} />
            819-209-5754
          </a>
        </div>
      )}
    </header>
  )
}

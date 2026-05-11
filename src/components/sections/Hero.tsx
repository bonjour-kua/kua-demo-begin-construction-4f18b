import { ArrowRight, ChevronDown } from 'lucide-react'

const currentYear = new Date().getFullYear()

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-[90vh] flex items-end overflow-hidden" aria-label="Accueil">
      <img src="/images/hero/fb-photo-2.jpg" alt="Équipe BEGIN Construction devant leur camion sur un chantier actif à Gatineau" className="absolute inset-0 w-full h-full object-cover object-center" loading="eager" width={1200} height={800} fetchPriority="high" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(27,27,27,0.95) 0%, rgba(27,27,27,0.65) 40%, rgba(27,27,27,0.2) 70%, rgba(27,27,27,0.1) 100%)' }} aria-hidden="true" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 pt-32 w-full">
        <div className="max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#cfcfcf] mb-6">
            Entrepreneur Général&nbsp;·&nbsp;Gatineau, Outaouais
          </p>
          <h1 className="font-display text-7xl sm:text-8xl lg:text-[10rem] text-white uppercase leading-[0.9] tracking-tight mb-8">
            De la <span className="text-[#cfcfcf]">fondation</span>
            <br />aux finitions
          </h1>
          <p className="font-body text-lg lg:text-xl text-white/80 max-w-xl leading-relaxed mb-10">
            Un seul entrepreneur pour votre projet résidentiel complet — construction neuve, rénovation, aménagement extérieur et piscines.
          </p>
          <div className="flex items-baseline gap-3 mb-12 border-l-4 border-[#cfcfcf] pl-5">
            <span className="font-display text-6xl text-white leading-none">{currentYear - 2020}</span>
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#cfcfcf]">ans à bâtir Gatineau</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="inline-flex items-center gap-3 bg-white text-[#1B1B1B] font-body font-bold uppercase tracking-widest text-sm px-8 py-4 min-h-[52px] hover:bg-[#cfcfcf] transition-colors focus-visible:ring-2 focus-visible:ring-white">
              Obtenir une soumission
              <ArrowRight size={16} />
            </a>
            <a href="#gallery" className="inline-flex items-center gap-3 border-2 border-white/60 text-white font-body font-bold uppercase tracking-widest text-sm px-8 py-4 min-h-[52px] hover:border-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-white">
              Voir nos réalisations
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 right-10 hidden lg:flex flex-col items-center gap-2 opacity-50">
          <ChevronDown size={16} className="text-white animate-bounce" />
        </div>
      </div>
    </section>
  )
}

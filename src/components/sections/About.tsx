import { ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#737373] mb-5">Qui sommes-nous</p>
            <h2 className="font-display text-6xl lg:text-7xl text-[#1B1B1B] uppercase leading-[0.92] tracking-tight mb-8">
              Votre projet,<br /><span className="text-[#3c3c3c]">notre priorité</span>
            </h2>
            <div className="w-12 h-1 bg-[#3c3c3c] mb-8" />
            <p className="font-body text-base lg:text-lg text-[#1B1B1B]/80 leading-relaxed max-w-prose mb-6">
              BEGIN Construction est un entrepreneur général basé à Gatineau, dans l'Outaouais.
              Nous prenons en charge vos projets résidentiels de A à Z — construction neuve,
              rénovation complète, aménagement extérieur, piscines et finitions intérieures.
            </p>
            <p className="font-body text-base lg:text-lg text-[#1B1B1B]/80 leading-relaxed max-w-prose mb-10">
              Un seul interlocuteur. Une seule équipe. Du premier coup de pelle au dernier
              détail de finition, nous gérons chaque étape pour que vous n'ayez pas à le faire.
            </p>
            <ul className="space-y-3 mb-10">
              {['Construction résidentielle neuve', 'Rénovation complète clé en main', 'Aménagement extérieur et piscines', 'Gestion de projet de A à Z'].map((item) => (
                <li key={item} className="flex items-center gap-3 font-body text-sm font-medium text-[#1B1B1B]">
                  <span className="w-2 h-2 bg-[#3c3c3c] flex-shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="inline-flex items-center gap-3 bg-[#3c3c3c] text-white font-body font-bold uppercase tracking-widest text-sm px-8 py-4 min-h-[48px] hover:bg-[#1B1B1B] transition-colors focus-visible:ring-2 focus-visible:ring-[#3c3c3c]">
              Nous contacter <ArrowRight size={15} />
            </a>
          </div>
          <div className="relative">
            <figure>
              <img src="/images/hero/pack-hero-1.webp" alt="Projet résidentiel complété par BEGIN Construction à Gatineau" className="w-full aspect-[4/5] object-cover" loading="lazy" width={600} height={750} />
              <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-[#737373]">Réalisation résidentielle · Gatineau</figcaption>
            </figure>
            <div className="hidden lg:block absolute -bottom-10 -right-10 w-48 h-48 border-4 border-[#3c3c3c] overflow-hidden">
              <img src="/images/gallery/fb-photo-8.jpg" alt="Vue aérienne d'une maison avec piscine et terrasse réalisée par BEGIN Construction" className="w-full h-full object-cover" loading="lazy" width={192} height={192} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { ArrowRight } from 'lucide-react'

export default function Services() {
  return (
    <section id="services" className="bg-[#1B1B1B] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#cfcfcf] mb-5">Nos services</p>
            <h2 className="font-display text-6xl lg:text-7xl text-white uppercase leading-[0.92] tracking-tight">
              Ce que nous<br /><span className="text-[#cfcfcf]">réalisons</span>
            </h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-3 border-2 border-[#cfcfcf] text-[#cfcfcf] font-body font-bold uppercase tracking-widest text-sm px-8 py-4 min-h-[48px] hover:bg-[#cfcfcf] hover:text-[#1B1B1B] transition-colors self-start focus-visible:ring-2 focus-visible:ring-[#cfcfcf]">
            Demander une soumission <ArrowRight size={15} />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#3c3c3c]">
          <article className="bg-[#1B1B1B] group overflow-hidden">
            <div className="overflow-hidden h-64 lg:h-72">
              <img src="/images/gallery/pack-gallery-1.webp" alt="Chantier de construction résidentielle neuve à Gatineau" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0" loading="lazy" width={600} height={400} />
            </div>
            <div className="p-8">
              <h3 className="font-display text-3xl text-white uppercase tracking-wide mb-4 leading-tight">Construction résidentielle neuve</h3>
              <p className="font-body text-sm text-white/70 leading-relaxed">Maisons unifamiliales sur mesure, du plan de fondation à la clé en main. Nous coordonnons chaque corps de métier pour une livraison dans les délais.</p>
            </div>
          </article>
          <article className="bg-[#1B1B1B] group overflow-hidden">
            <div className="overflow-hidden h-64 lg:h-72">
              <img src="/images/gallery/fb-photo-4.jpg" alt="Salle de bain entièrement rénovée par BEGIN Construction" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0" loading="lazy" width={600} height={400} />
            </div>
            <div className="p-8">
              <h3 className="font-display text-3xl text-white uppercase tracking-wide mb-4 leading-tight">Rénovation complète</h3>
              <p className="font-body text-sm text-white/70 leading-relaxed">Cuisine, salle de bain, sous-sol, ou maison entière — nous transformons votre espace avec des matériaux de qualité et un souci du détail.</p>
            </div>
          </article>
          <article className="bg-[#1B1B1B] group overflow-hidden">
            <div className="overflow-hidden h-64 lg:h-72">
              <img src="/images/gallery/fb-photo-6.jpg" alt="Aménagement extérieur avec piscine et terrasse couverte réalisé par BEGIN Construction" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0" loading="lazy" width={600} height={400} />
            </div>
            <div className="p-8">
              <h3 className="font-display text-3xl text-white uppercase tracking-wide mb-4 leading-tight">Aménagement extérieur & piscines</h3>
              <p className="font-body text-sm text-white/70 leading-relaxed">Terrasses, murets, allées, cours avant/arrière, piscines hors-terre et creusées. Transformez votre terrain en extension de votre maison.</p>
            </div>
          </article>
          <article className="bg-[#1B1B1B] group overflow-hidden">
            <div className="overflow-hidden h-64 lg:h-72">
              <img src="/images/gallery/pack-gallery-3.webp" alt="Finitions intérieures haut de gamme réalisées par BEGIN Construction" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0" loading="lazy" width={600} height={400} />
            </div>
            <div className="p-8">
              <h3 className="font-display text-3xl text-white uppercase tracking-wide mb-4 leading-tight">Finitions intérieures</h3>
              <p className="font-body text-sm text-white/70 leading-relaxed">Planchers, millwork, plâtrage, peinture — les détails qui font la différence entre un chantier terminé et un intérieur dont on est fier.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

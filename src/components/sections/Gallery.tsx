export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#F5F5F5] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#737373] mb-5">Nos réalisations</p>
          <h2 className="font-display text-6xl lg:text-7xl text-[#1B1B1B] uppercase leading-[0.92] tracking-tight">
            Des projets qui<br className="hidden lg:block" /><span className="text-[#3c3c3c]">parlent d'eux-mêmes</span>
          </h2>
        </div>

        {/* Asymmetric grid row 1 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
          <figure className="lg:col-span-2 overflow-hidden group">
            <div className="aspect-[16/9] overflow-hidden">
              <img src="/images/gallery/fb-photo-6.jpg" alt="Résidence complète avec piscine et terrasse couverte à Gatineau" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={800} height={450} />
            </div>
            <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[#737373]">Résidence complète · Gatineau</figcaption>
          </figure>
          <figure className="overflow-hidden group">
            <div className="aspect-square overflow-hidden">
              <img src="/images/gallery/fb-photo-7.jpg" alt="Aménagement extérieur — gravier, muret de pierre et terrasse" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={400} height={400} />
            </div>
            <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[#737373]">Aménagement extérieur</figcaption>
          </figure>
          <figure className="overflow-hidden group">
            <div className="aspect-square overflow-hidden">
              <img src="/images/gallery/pack-gallery-2.webp" alt="Projet résidentiel réalisé par BEGIN Construction" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={400} height={400} />
            </div>
            <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[#737373]">Réalisation résidentielle</figcaption>
          </figure>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
          <figure className="overflow-hidden group">
            <div className="aspect-square overflow-hidden">
              <img src="/images/gallery/pack-gallery-4.webp" alt="Rénovation intérieure par BEGIN Construction" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={400} height={400} />
            </div>
            <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[#737373]">Rénovation intérieure</figcaption>
          </figure>
          <figure className="overflow-hidden group">
            <div className="aspect-square overflow-hidden">
              <img src="/images/gallery/pack-gallery-5.webp" alt="Construction neuve résidentielle" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={400} height={400} />
            </div>
            <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[#737373]">Construction neuve</figcaption>
          </figure>
          <figure className="lg:col-span-2 overflow-hidden group">
            <div className="aspect-[16/9] overflow-hidden">
              <img src="/images/gallery/fb-photo-8.jpg" alt="Vue aérienne — maison avec piscine, clôture et terrasse à Gatineau" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={800} height={450} />
            </div>
            <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[#737373]">Vue d'ensemble · Gatineau</figcaption>
          </figure>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
          <figure className="overflow-hidden group">
            <div className="aspect-square overflow-hidden">
              <img src="/images/gallery/pack-gallery-6.webp" alt="Aménagement paysager complété par BEGIN Construction" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={400} height={400} />
            </div>
            <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[#737373]">Aménagement paysager</figcaption>
          </figure>
          <figure className="overflow-hidden group">
            <div className="aspect-square overflow-hidden">
              <img src="/images/gallery/pack-gallery-8.webp" alt="Rénovation complète résidentielle par BEGIN Construction" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={400} height={400} />
            </div>
            <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[#737373]">Rénovation complète</figcaption>
          </figure>
          <figure className="overflow-hidden group">
            <div className="aspect-square overflow-hidden">
              <img src="/images/gallery/pack-gallery-9.webp" alt="Projet extérieur réalisé par BEGIN Construction" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={400} height={400} />
            </div>
            <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[#737373]">Projet extérieur</figcaption>
          </figure>
          <figure className="overflow-hidden group">
            <div className="aspect-square overflow-hidden">
              <img src="/images/gallery/pack-gallery-10.webp" alt="Finitions et détails de construction résidentielle" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={400} height={400} />
            </div>
            <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[#737373]">Détails de finition</figcaption>
          </figure>
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-16">
          <figure className="lg:col-span-2 overflow-hidden group">
            <div className="aspect-[16/9] overflow-hidden">
              <img src="/images/gallery/pack-gallery-11.webp" alt="Grand projet résidentiel neuf réalisé par BEGIN Construction à Gatineau" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={800} height={450} />
            </div>
            <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[#737373]">Résidence neuve · Gatineau</figcaption>
          </figure>
          <figure className="overflow-hidden group">
            <div className="aspect-square overflow-hidden">
              <img src="/images/gallery/pack-gallery-12.webp" alt="Projet de construction et rénovation résidentielle" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={400} height={400} />
            </div>
            <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[#737373]">Construction résidentielle</figcaption>
          </figure>
          <figure className="overflow-hidden group">
            <div className="aspect-square overflow-hidden">
              <img src="/images/gallery/fb-photo-4.jpg" alt="Salle de bain rénovée — finitions modernes par BEGIN Construction" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={400} height={400} />
            </div>
            <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[#737373]">Salle de bain rénovée</figcaption>
          </figure>
        </div>

        {/* Full-bleed CTA strip */}
        <div className="w-screen ml-[calc(-50vw+50%)] bg-[#3c3c3c] py-10 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="font-display text-4xl lg:text-5xl text-white uppercase tracking-tight text-center sm:text-left">Votre projet est le suivant.</p>
            <a href="#contact" className="inline-flex items-center gap-3 bg-white text-[#1B1B1B] font-body font-bold uppercase tracking-widest text-sm px-8 py-4 min-h-[48px] hover:bg-[#cfcfcf] transition-colors whitespace-nowrap focus-visible:ring-2 focus-visible:ring-white">
              Démarrer mon projet
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

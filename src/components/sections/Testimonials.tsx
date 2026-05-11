export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-[#3c3c3c] py-24 lg:py-32 overflow-hidden">
      <img src="/images/gallery/pack-gallery-7.webp" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-10" loading="lazy" width={1200} height={800} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#cfcfcf] mb-5">Ce que disent nos clients</p>
          <h2 className="font-display text-6xl lg:text-7xl text-white uppercase leading-[0.92] tracking-tight">
            Ils nous font <span className="text-[#cfcfcf]">confiance</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[#1B1B1B]">
          <blockquote className="bg-[#3c3c3c] p-10 lg:p-12 flex flex-col justify-between">
            <div>
              <span className="font-display text-8xl text-[#cfcfcf]/30 leading-none block mb-4" aria-hidden="true">"</span>
              <p className="font-body text-base lg:text-lg text-white/90 leading-relaxed mb-8">BEGIN Construction a transformé notre sous-sol en un espace de vie exceptionnel. Professionnels, ponctuels, et les finitions sont impeccables.</p>
            </div>
            <footer>
              <div className="w-8 h-px bg-[#cfcfcf] mb-5" />
              <cite className="not-italic">
                <p className="font-body font-bold text-white text-sm">Marie-Hélène T.</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#cfcfcf]/70 mt-1">Gatineau, QC</p>
              </cite>
            </footer>
          </blockquote>
          <blockquote className="bg-[#3c3c3c] p-10 lg:p-12 flex flex-col justify-between">
            <div>
              <span className="font-display text-8xl text-[#cfcfcf]/30 leading-none block mb-4" aria-hidden="true">"</span>
              <p className="font-body text-base lg:text-lg text-white/90 leading-relaxed mb-8">De la fondation aux finitions, un seul entrepreneur — ce n'est pas qu'un slogan, c'est exactement ce qu'on a vécu. Projet livré dans les délais et dans le budget.</p>
            </div>
            <footer>
              <div className="w-8 h-px bg-[#cfcfcf] mb-5" />
              <cite className="not-italic">
                <p className="font-body font-bold text-white text-sm">Patrick D.</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#cfcfcf]/70 mt-1">Hull, QC</p>
              </cite>
            </footer>
          </blockquote>
          <blockquote className="bg-[#3c3c3c] p-10 lg:p-12 flex flex-col justify-between">
            <div>
              <span className="font-display text-8xl text-[#cfcfcf]/30 leading-none block mb-4" aria-hidden="true">"</span>
              <p className="font-body text-base lg:text-lg text-white/90 leading-relaxed mb-8">Piscine creusée, terrasse et aménagement paysager — tout réalisé en une seule saison. Équipe sérieuse, communication transparente du début à la fin.</p>
            </div>
            <footer>
              <div className="w-8 h-px bg-[#cfcfcf] mb-5" />
              <cite className="not-italic">
                <p className="font-body font-bold text-white text-sm">Sophie &amp; Marc A.</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#cfcfcf]/70 mt-1">Aylmer, QC</p>
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

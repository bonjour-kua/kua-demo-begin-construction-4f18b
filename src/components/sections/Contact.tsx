import { FormEvent, useState } from 'react'
import { Phone, MapPin, Send, Check } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-[#1B1B1B] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#cfcfcf] mb-5">Contactez-nous</p>
            <h2 className="font-display text-6xl lg:text-7xl text-white uppercase leading-[0.92] tracking-tight mb-12">
              Prêt à démarrer<br /><span className="text-[#cfcfcf]">votre projet?</span>
            </h2>
            {sent ? (
              <div className="flex items-start gap-4 border border-[#cfcfcf]/40 p-8">
                <Check size={24} className="text-[#cfcfcf] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-body font-bold text-white mb-2">Message envoyé!</p>
                  <p className="font-body text-sm text-white/70 leading-relaxed">Nous vous répondons généralement dans les 24 heures.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block font-mono text-[11px] uppercase tracking-[0.15em] text-[#cfcfcf] mb-2">Nom</label>
                    <input id="contact-name" type="text" name="name" required autoComplete="name" className="w-full bg-[#2a2a2a] border border-[#3c3c3c] text-white font-body text-sm px-4 py-3 min-h-[48px] placeholder-white/30 focus-visible:border-[#cfcfcf] focus-visible:outline-none transition-colors" placeholder="Votre nom" />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block font-mono text-[11px] uppercase tracking-[0.15em] text-[#cfcfcf] mb-2">Téléphone</label>
                    <input id="contact-phone" type="tel" name="phone" autoComplete="tel" className="w-full bg-[#2a2a2a] border border-[#3c3c3c] text-white font-body text-sm px-4 py-3 min-h-[48px] placeholder-white/30 focus-visible:border-[#cfcfcf] focus-visible:outline-none transition-colors" placeholder="Votre numéro" />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-email" className="block font-mono text-[11px] uppercase tracking-[0.15em] text-[#cfcfcf] mb-2">Courriel</label>
                  <input id="contact-email" type="email" name="email" required autoComplete="email" className="w-full bg-[#2a2a2a] border border-[#3c3c3c] text-white font-body text-sm px-4 py-3 min-h-[48px] placeholder-white/30 focus-visible:border-[#cfcfcf] focus-visible:outline-none transition-colors" placeholder="votre@email.com" />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block font-mono text-[11px] uppercase tracking-[0.15em] text-[#cfcfcf] mb-2">Votre projet</label>
                  <textarea id="contact-message" name="message" required rows={5} className="w-full bg-[#2a2a2a] border border-[#3c3c3c] text-white font-body text-sm px-4 py-3 placeholder-white/30 focus-visible:border-[#cfcfcf] focus-visible:outline-none transition-colors resize-none" placeholder="Décrivez votre projet en quelques lignes..." />
                </div>
                <button type="submit" className="inline-flex items-center gap-3 bg-white text-[#1B1B1B] font-body font-bold uppercase tracking-widest text-sm px-8 py-4 min-h-[48px] hover:bg-[#cfcfcf] transition-colors focus-visible:ring-2 focus-visible:ring-white w-full justify-center">
                  Envoyer ma demande <Send size={15} />
                </button>
              </form>
            )}
          </div>
          <div className="flex flex-col gap-10">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone size={18} className="text-[#cfcfcf] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#cfcfcf]/60 mb-1">Téléphone</p>
                  <a href="tel:+18192095754" className="font-body text-lg font-bold text-white hover:text-[#cfcfcf] transition-colors focus-visible:ring-2 focus-visible:ring-[#cfcfcf]">819-209-5754</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-[#cfcfcf] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#cfcfcf]/60 mb-1">Zone de service</p>
                  <p className="font-body text-lg font-bold text-white">Gatineau &amp; Outaouais, QC</p>
                </div>
              </div>
            </div>
            <div className="relative flex-1 min-h-[240px]">
              <img src="/images/gallery/fb-photo-7.jpg" alt="Projet d'aménagement extérieur réalisé par BEGIN Construction à Gatineau" className="w-full h-full object-cover min-h-[240px]" loading="lazy" width={600} height={400} />
              <div className="absolute inset-0 bg-[#1B1B1B]/30" aria-hidden="true" />
            </div>
            <div>
              <iframe src={`https://www.google.com/maps?q=${encodeURIComponent('Gatineau, Quebec, Canada')}&output=embed`} width="100%" height="220" loading="lazy" title="Localisation de BEGIN Construction à Gatineau, Québec" className="border-0 grayscale" allowFullScreen={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Dans quelles régions intervenez-vous?',
    a: 'Nous sommes basés à Gatineau et intervenons principalement dans l\'Outaouais — Gatineau, Aylmer, Hull, Buckingham et les municipalités environnantes. Contactez-nous pour les projets hors région.',
  },
  {
    q: 'Offrez-vous des soumissions gratuites?',
    a: 'Oui, toutes nos soumissions sont gratuites et sans engagement. Après une visite du chantier, nous vous remettons une soumission détaillée incluant les matériaux, la main-d\'œuvre et le calendrier prévu.',
  },
  {
    q: 'Combien de temps dure une rénovation complète?',
    a: 'La durée varie selon l\'ampleur du projet. Une rénovation de cuisine ou de salle de bain prend en général 3 à 6 semaines. Un sous-sol complet, 6 à 10 semaines. Une maison entière, 3 à 6 mois. Nous établissons un calendrier précis dès le début du projet.',
  },
  {
    q: 'Êtes-vous licenciés et assurés?',
    a: 'Oui. BEGIN Construction détient toutes les licences requises par la Régie du bâtiment du Québec (RBQ) et est entièrement assuré en responsabilité civile. Toutes nos rénovations incluent la garantie légale de construction.',
  },
  {
    q: 'Prenez-vous en charge les permis de construction?',
    a: 'Oui, nous nous occupons de l\'obtention des permis de construction auprès de la Ville de Gatineau et de tout autre organisme concerné. C\'est inclus dans notre service clé en main.',
  },
  {
    q: 'Puis-je habiter ma maison pendant les travaux?',
    a: 'Dans la plupart des cas de rénovation partielle, oui. Pour les rénovations complètes, nous discutons des options en amont pour minimiser les inconvénients. Nous adaptons notre approche à votre situation.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Sticky label side */}
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#737373] mb-5">
              Questions fréquentes
            </p>
            <h2 className="font-display text-6xl lg:text-7xl text-[#1B1B1B] uppercase leading-[0.92] tracking-tight mb-8">
              Vos questions,{' '}
              <br />
              <span className="text-[#3c3c3c]">nos réponses</span>
            </h2>
            <p className="font-body text-sm text-[#7c7c7c] leading-relaxed">
              Une question qui n'est pas là? Appelez-nous directement au{' '}
              <a
                href="tel:+18192095754"
                className="text-[#3c3c3c] font-medium hover:text-[#1B1B1B] underline underline-offset-2 focus-visible:ring-2 focus-visible:ring-[#3c3c3c]"
              >
                819-209-5754
              </a>
            </p>
          </div>

          {/* Accordion side */}
          <div className="lg:col-span-8">
            <dl className="divide-y divide-[#cfcfcf] border-t border-[#cfcfcf]">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <dt>
                    <button
                      className="w-full flex items-center justify-between py-7 text-left gap-6 focus-visible:ring-2 focus-visible:ring-[#3c3c3c]"
                      aria-expanded={openIndex === i}
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    >
                      <span className="font-body font-bold text-base lg:text-lg text-[#1B1B1B]">
                        {faq.q}
                      </span>
                      <span className="flex-shrink-0 w-8 h-8 bg-[#F5F5F5] flex items-center justify-center" aria-hidden="true">
                        {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                      </span>
                    </button>
                  </dt>
                  {openIndex === i && (
                    <dd className="pb-7 pr-14">
                      <p className="font-body text-sm lg:text-base text-[#7c7c7c] leading-relaxed">
                        {faq.a}
                      </p>
                    </dd>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

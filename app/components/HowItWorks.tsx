'use client';

import { config } from '@/app/config';
import { useState } from 'react';

export default function HowItWorks() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const steps = [
    {
      number: '1',
      title: 'Cliquez sur mon lien',
      description: 'Utilisez mon lien ou mon code de parrainage',
    },
    {
      number: '2',
      title: 'Ouvrez un compte',
      description: 'L\'ouverture prend environ 5 minutes',
    },
    {
      number: '3',
      title: 'Validez votre compte',
      description: 'Confirmez vos données personnelles',
    },
    {
      number: '4',
      title: 'Recevez votre prime',
      description: 'Jusqu\'à 220€ sur votre compte',
    },
  ];

  const faqs = [
    {
      q: 'Comment fonctionne le parrainage BoursoBank ?',
      a: 'Vous utilisez mon code ou mon lien de parrainage lors de votre inscription. Une fois votre compte ouvert et validé, vous recevez la prime de bienvenue directement sur votre compte.',
    },
    {
      q: 'Quel est le montant de la prime ?',
      a: 'La prime varie selon les offres actuelles, entre 50€ et 220€. Consultez les conditions actuelles de BoursoBank pour les montants exacts.',
    },
    {
      q: 'Quand vais-je recevoir la prime ?',
      a: 'La prime est généralement versée dans les 30 jours suivant l\'ouverture et la validation de votre compte.',
    },
    {
      q: 'Y a-t-il une limite de parrainages ?',
      a: 'Non ! Vous pouvez parrainer autant de personnes que vous le souhaitez sans limite.',
    },
    {
      q: 'Dois-je domicilier mon salaire ?',
      a: 'Non, la prime ne nécessite pas la domiciliation du salaire chez BoursoBank.',
    },
    {
      q: 'Est-ce sécurisé ?',
      a: 'Oui, BoursoBank est une banque française agréée par les autorités financières avec tous les systèmes de sécurité nécessaires.',
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12">
        {/* Steps */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12">
            Comment être parrainé(e) dès aujourd'hui ?
          </h2>

          <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-start">
                <div
                  className="mb-4 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full text-xl md:text-2xl font-bold text-white"
                  style={{ backgroundColor: config.primaryColor }}
                >
                  {step.number}
                </div>
                <h3 className="mb-2 text-lg md:text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12">
            Questions fréquemment posées
          </h2>

          <div className="space-y-3 md:space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg border bg-white cursor-pointer transition-all hover:shadow-md"
                style={{
                  borderColor: openFaq === index ? config.primaryColor : config.primaryColor + '30',
                  backgroundColor: openFaq === index ? config.primaryColor + '05' : 'white',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between font-semibold text-gray-900 text-sm md:text-base select-none p-4 md:p-6"
                >
                  {faq.q}
                  <span
                    className="ml-2 transition-transform"
                    style={{
                      color: config.primaryColor,
                      transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    ▼
                  </span>
                </button>
                {openFaq === index && (
                  <div className="border-t px-4 md:px-6 py-4 md:py-4" style={{ borderColor: config.primaryColor + '20' }}>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

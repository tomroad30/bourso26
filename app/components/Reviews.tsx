'use client';

import { config } from '@/app/config';
import { useState } from 'react';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Avis du site Boursobank - données authentiques
  const reviews = [
    {
      stars: 5,
      text: "l'ouverture de compte et le transfert des données sont très faciles",
      date: "05/01/2022",
      author: "Client satisfait"
    },
    {
      stars: 5,
      text: "Service rapide et simple. Tout en ligne : c'est top !",
      date: "16/05/2022",
      author: "Utilisateur content"
    },
    {
      stars: 5,
      text: "Très bien, pas de frais, c'est top ! La meilleure banque.",
      date: "12/03/2023",
      author: "Recommande vivement"
    },
    {
      stars: 4,
      text: "Bonne banque, interface intuitive et fonctionnalités utiles.",
      date: "08/07/2023",
      author: "Client fidèle"
    },
    {
      stars: 5,
      text: "Excellente application mobile, très fluide et ergonomique.",
      date: "23/11/2023",
      author: "Mobile first"
    },
    {
      stars: 5,
      text: "Parrainage très simple à utiliser, parfait pour gagner de l'argent.",
      date: "14/02/2024",
      author: "Parraineur heureux"
    },
  ];

  const renderStars = (count: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span key={i} style={{ color: i < count ? config.primaryColor : '#e5e7eb' }}>
        ★
      </span>
    ));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nos clients parlent de nous !
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-3xl font-bold" style={{ color: config.primaryColor }}>
              4.7
            </div>
            <div className="flex gap-1">
              {renderStars(5)}
            </div>
          </div>
          <p className="text-gray-600 text-sm md:text-base">
            54 134 avis donnés lors de la souscription à un produit ou service
          </p>
        </div>

        {/* Carrousel d'avis */}
        <div className="max-w-2xl mx-auto">
          <div
            className="rounded-2xl p-6 md:p-8 border-2 transition-all duration-300"
            style={{
              borderColor: config.primaryColor + '30',
              backgroundColor: config.primaryColor + '05'
            }}
          >
            {/* Avis actuel */}
            <div className="mb-6">
              <div className="flex gap-1 mb-4">
                {renderStars(reviews[currentIndex].stars)}
              </div>
              <p className="text-gray-700 text-base md:text-lg italic mb-4">
                "{reviews[currentIndex].text}"
              </p>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span className="font-semibold">{reviews[currentIndex].author}</span>
                <span>{reviews[currentIndex].date}</span>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={prevReview}
                className="flex-1 py-2 px-4 rounded-lg border-2 font-semibold transition-colors hover:opacity-80 text-sm"
                style={{
                  borderColor: config.primaryColor,
                  color: config.primaryColor,
                  backgroundColor: 'transparent'
                }}
              >
                ← Précédent
              </button>

              <div className="flex gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className="w-2 h-2 rounded-full transition-all"
                    style={{
                      backgroundColor: index === currentIndex ? config.primaryColor : '#e5e7eb'
                    }}
                    aria-label={`Aller à l'avis ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextReview}
                className="flex-1 py-2 px-4 rounded-lg font-semibold transition-colors hover:opacity-80 text-sm text-white"
                style={{ backgroundColor: config.primaryColor }}
              >
                Suivant →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

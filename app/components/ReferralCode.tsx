'use client';

import { useState } from 'react';
import { config } from '@/app/config';

export default function ReferralCode({ referralCode }: { referralCode: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCodeClick = () => {
    window.open(config.boursoramaUrl, '_blank');
  };

  const shareLinks = {
    whatsapp: `https://wa.me/?text=Rejoins-moi sur Boursobank avec mon code de parrainage ${referralCode} et reçois jusqu'à 200€ ! ${config.boursoramaUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(config.boursoramaUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=Ouvrez votre compte Boursobank avec mon code ${referralCode} et gagnez 200€ ! ${encodeURIComponent(config.boursoramaUrl)}`,
    email: `mailto:?subject=Rejoins-moi sur Boursobank&body=Bonjour,%0A%0AJe te partage mon code de parrainage Boursobank: ${referralCode}%0A%0ATu peux gagner jusqu'à 200€ en ouvrant un compte:%0A${config.boursoramaUrl}`,
  };

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-4xl px-4 md:px-8 lg:px-12">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Mon Code de Parrainage</h2>
          <p className="text-gray-600 text-base md:text-lg">Utilisez ce code pour que vos amis bénéficient de la prime de bienvenue</p>
        </div>

        <div className="mb-8 md:mb-12 rounded-2xl bg-white p-6 md:p-8 lg:p-10">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <button
              onClick={handleCodeClick}
              className="flex-1 w-full rounded-lg bg-white p-4 md:p-6 text-center border-2 hover:shadow-lg transition-all cursor-pointer"
              style={{ borderColor: config.primaryColor }}
              title="Cliquer pour ouvrir le lien de parrainage"
            >
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: config.primaryColor }}>
                {referralCode}
              </p>
            </button>
            <button
              onClick={handleCopy}
              className="w-full sm:w-auto flex-shrink-0 rounded-lg px-6 md:px-8 py-3 md:py-4 text-white font-bold transition-opacity hover:opacity-90 text-sm md:text-base"
              style={{ backgroundColor: config.primaryColor }}
            >
              {copied ? '✓ Copié!' : 'Copier'}
            </button>
          </div>
        </div>

        <div className="mb-8 md:mb-12">
          <p className="text-center text-gray-700 font-semibold mb-4 md:mb-6 text-sm md:text-base">Partage rapidement sur les réseaux</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer"
              className="rounded-lg bg-green-500 hover:bg-green-600 py-2 md:py-3 text-white font-semibold transition-colors flex items-center justify-center gap-2 text-xs md:text-sm">
              <span>💬</span> WhatsApp
            </a>
            <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 hover:bg-blue-700 py-2 md:py-3 text-white font-semibold transition-colors flex items-center justify-center gap-2 text-xs md:text-sm">
              <span>f</span> Facebook
            </a>
            <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer"
              className="rounded-lg bg-sky-500 hover:bg-sky-600 py-2 md:py-3 text-white font-semibold transition-colors flex items-center justify-center gap-2 text-xs md:text-sm">
              <span>𝕏</span> Twitter
            </a>
            <a href={shareLinks.email}
              className="rounded-lg bg-gray-600 hover:bg-gray-700 py-2 md:py-3 text-white font-semibold transition-colors flex items-center justify-center gap-2 text-xs md:text-sm">
              <span>✉️</span> Email
            </a>
          </div>
        </div>

        <div className="rounded-lg border-2 bg-white p-4 md:p-6" style={{ borderColor: config.primaryColor }}>
          <p className="mb-3 text-gray-700 font-semibold text-sm md:text-base">Lien de parrainage</p>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
            <input type="text" readOnly
              className="flex-1 rounded-lg border px-3 md:px-4 py-2 md:py-3 text-gray-600 text-xs md:text-sm"
              style={{ borderColor: config.primaryColor }}
              value={config.boursoramaUrl}
            />
            <button
              onClick={() => {
                navigator.clipboard.writeText(config.boursoramaUrl);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="w-full sm:w-auto flex-shrink-0 rounded-lg px-4 md:px-6 py-2 md:py-3 text-white font-semibold transition-opacity hover:opacity-90 text-xs md:text-sm"
              style={{ backgroundColor: config.primaryColor }}
            >
              {copied ? '✓ Copié!' : 'Copier'}
            </button>
          </div>
          <p className="mt-3 text-gray-600 text-xs md:text-sm">
            Copie ce lien direct dans ton navigateur ou clique directement
          </p>
        </div>
      </div>
    </section>
  );
}

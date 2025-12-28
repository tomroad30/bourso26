'use client';

import { useState, useEffect } from 'react';
import { config } from '@/app/config';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const endDate = new Date(config.offerEndDate).getTime();
      const difference = endDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          expired: true,
        });
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          expired: false,
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatEndDate = () => {
    const date = config.offerEndDate;
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-pink-50 to-white pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12">
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-4 md:gap-6 text-center max-w-2xl">
            {/* Titre principal */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Ouvrez votre compte Boursobank et obtenez jusqu'à{' '}
              <span style={{ color: config.primaryColor }} className="font-bold">
                {config.maxPrimeAmount}
              </span>
              {' '}de prime avec mon parrainage
            </h1>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Profitez de notre offre de parrainage exclusive. Plus rapide, plus simple, plus sûr.
            </p>

            {/* Boutons CTA */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 md:pt-6 justify-center">
              <a
                href={config.boursoramaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center font-bold py-3 px-6 md:px-8 rounded-lg transition-opacity text-sm md:text-base text-white hover:opacity-90"
                style={{ backgroundColor: config.primaryColor }}
              >
                Ouvrir mon compte
              </a>
            </div>

            {/* Compteur dégressif - Design professionnel - CENTRÉ */}
            <div className="mt-8 md:mt-12 p-6 md:p-8 rounded-2xl border flex flex-col items-center w-full" style={{ borderColor: config.primaryColor + '20', backgroundColor: config.primaryColor + '05' }}>
              {!timeLeft.expired ? (
                <div className="w-full">
                  <p className="text-sm md:text-base font-semibold text-gray-900 mb-6 text-center">
                    <span style={{ color: config.primaryColor }} className="font-bold">⏰ Offre limitée dans le temps</span>
                  </p>
                  
                  {/* Compteur avec séparateurs - CENTRÉ */}
                  <div className="flex gap-2 md:gap-3 justify-center items-end mb-6">
                    <div className="text-center flex-1 max-w-20">
                      <p className="text-4xl md:text-5xl font-bold leading-none" style={{ color: config.primaryColor }}>
                        {String(timeLeft.days).padStart(2, '0')}
                      </p>
                      <p className="text-xs md:text-sm text-gray-600 mt-2 font-medium">Jour{timeLeft.days > 1 ? 's' : ''}</p>
                    </div>
                    
                    <span className="text-3xl md:text-4xl font-light text-gray-400 mb-1">:</span>
                    
                    <div className="text-center flex-1 max-w-20">
                      <p className="text-4xl md:text-5xl font-bold leading-none" style={{ color: config.primaryColor }}>
                        {String(timeLeft.hours).padStart(2, '0')}
                      </p>
                      <p className="text-xs md:text-sm text-gray-600 mt-2 font-medium">Heure{timeLeft.hours > 1 ? 's' : ''}</p>
                    </div>
                    
                    <span className="text-3xl md:text-4xl font-light text-gray-400 mb-1">:</span>
                    
                    <div className="text-center flex-1 max-w-20">
                      <p className="text-4xl md:text-5xl font-bold leading-none" style={{ color: config.primaryColor }}>
                        {String(timeLeft.minutes).padStart(2, '0')}
                      </p>
                      <p className="text-xs md:text-sm text-gray-600 mt-2 font-medium">Min</p>
                    </div>
                    
                    <span className="text-3xl md:text-4xl font-light text-gray-400 mb-1">:</span>
                    
                    <div className="text-center flex-1 max-w-20">
                      <p className="text-4xl md:text-5xl font-bold leading-none" style={{ color: config.primaryColor }}>
                        {String(timeLeft.seconds).padStart(2, '0')}
                      </p>
                      <p className="text-xs md:text-sm text-gray-600 mt-2 font-medium">Sec</p>
                    </div>
                  </div>
                  
                  {/* Date de fin */}
                  <p className="text-sm text-gray-700 border-t pt-4 text-center w-full" style={{ borderColor: config.primaryColor + '20' }}>
                    Offre valable jusqu'au <span className="font-bold" style={{ color: config.primaryColor }}>{formatEndDate()}</span>
                  </p>
                </div>
              ) : (
                <div className="text-center py-4">
                  <p className="font-bold text-lg text-gray-700">⏳ Cette offre a expiré</p>
                  <p className="text-sm text-gray-600 mt-2">Consultez Boursorama pour connaître la prochaine offre</p>
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-8 md:pt-12 border-t border-gray-200 w-full">
              <div>
                <div style={{ color: config.primaryColor }} className="text-2xl md:text-3xl font-bold">
                  {config.maxPrimeAmount}
                </div>
                <div className="text-xs md:text-sm text-gray-600 mt-1">Prime maximale</div>
              </div>
              <div>
                <div style={{ color: config.primaryColor }} className="text-2xl md:text-3xl font-bold">
                  {formatEndDate()}
                </div>
                <div className="text-xs md:text-sm text-gray-600 mt-1">Date limite</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

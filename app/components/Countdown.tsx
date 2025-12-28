'use client';

import { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string; // Format: "2025-12-31"
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 justify-center md:justify-start">
      <div className="text-center">
        <div className="text-2xl md:text-3xl font-bold text-pink-600">{timeLeft.days}</div>
        <div className="text-xs md:text-sm text-gray-600">jours</div>
      </div>
      <div className="text-2xl md:text-3xl font-bold text-gray-400">:</div>
      <div className="text-center">
        <div className="text-2xl md:text-3xl font-bold text-pink-600">{String(timeLeft.hours).padStart(2, '0')}</div>
        <div className="text-xs md:text-sm text-gray-600">heures</div>
      </div>
      <div className="text-2xl md:text-3xl font-bold text-gray-400">:</div>
      <div className="text-center">
        <div className="text-2xl md:text-3xl font-bold text-pink-600">{String(timeLeft.minutes).padStart(2, '0')}</div>
        <div className="text-xs md:text-sm text-gray-600">minutes</div>
      </div>
      <div className="text-2xl md:text-3xl font-bold text-gray-400">:</div>
      <div className="text-center">
        <div className="text-2xl md:text-3xl font-bold text-pink-600">{String(timeLeft.seconds).padStart(2, '0')}</div>
        <div className="text-xs md:text-sm text-gray-600">secondes</div>
      </div>
    </div>
  );
}

'use client';

import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import ReferralCode from '@/app/components/ReferralCode';
import HowItWorks from '@/app/components/HowItWorks';
import Reviews from '@/app/components/Reviews';
import Blog from '@/app/components/Blog';
import Footer from '@/app/components/Footer';
import { config } from '@/app/config';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <Hero />
        <ReferralCode referralCode={config.referralCode} />
        <HowItWorks />
        <Reviews />
        <Blog />
      </main>
      <Footer />
    </>
  );
}

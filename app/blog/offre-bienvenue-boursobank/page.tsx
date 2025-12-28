'use client';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { config } from '@/app/config';

export default function Article() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-white">
        <div className="w-full">
          {/* Featured Image */}
          <div className="relative w-full h-96">
            <Image
              src="/blog/offre-bienvenue-boursobank.jpg"
              alt="L'Offre de Bienvenue BoursoBank : Comment Maximiser Votre Prime"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
          <nav className="mb-8">
            <Link href="/blog" className="text-sm" style={{ color: config.primaryColor }}>← Retour au blog</Link>
          </nav>
          <div className="mb-8">
            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: config.primaryColor + '20', color: config.primaryColor }}>Conseils pratiques</span>
            <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-gray-900">L'Offre de Bienvenue BoursoBank : Comment Maximiser Votre Prime</h1>
            <p className="text-gray-600 text-sm mb-2">27 décembre 2025 • 5 min de lecture</p>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700">
            <h2>Introduction</h2>
            <p>BoursoBank s'engage à offrir les meilleures solutions bancaires avec transparence et simplicité. Dans cet article, découvrez comment tirer le meilleur parti de nos services.</p>
            <h2>Les Points Clés</h2>
            <p>BoursoBank se distingue par sa politique de transparence et ses services innovants. Avec plus de 8 millions de clients satisfaits, nous prouvons chaque jour notre engagement envers la qualité.</p>
            <h2>Comment Commencer</h2>
            <p>L'inscription est simple et rapide. En quelques minutes, vous pouvez ouvrir votre compte et commencer à profiter de tous nos avantages. Nos conseillers sont disponibles pour vous accompagner à chaque étape.</p>
            <h2>Conclusion</h2>
            <p>Ne manquez pas l'opportunité de rejoindre des millions de clients satisfaits. Ouvrez votre compte BoursoBank dès aujourd'hui et profitez de nos offres exceptionnelles.</p>
            <div className="mt-8 p-6 rounded-lg" style={{ backgroundColor: config.primaryColor + '05', borderLeft: `4px solid ${config.primaryColor}`}}>
              <p className="text-gray-700 font-semibold">Prêt à commencer ?</p>
              <p className="text-gray-600 text-sm mb-4">Ouvrez votre compte BoursoBank dès aujourd'hui et profitez de notre offre de bienvenue.</p>
              <a href="{config.boursoramaUrl}" target="_blank" rel="noopener noreferrer" className="inline-block text-white font-bold py-2 px-6 rounded-lg hover:opacity-90" style={{ backgroundColor: config.primaryColor }}>Ouvrir un compte →</a>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}

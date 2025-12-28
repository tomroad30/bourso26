'use client';

import Link from 'next/link';
import Image from 'next/image';
import { config } from '@/app/config';

export default function Blog() {
  const articles = [
    {
      slug: 'parrainage-boursobank',
      title: 'Comment Profiter du Programme de Parrainage BoursoBank ?',
      excerpt: 'Découvrez comment gagner de l\'argent en parrainant vos amis et proches avec BoursoBank.',
      date: '27 décembre 2024',
      category: 'Parrainage'
    },
    {
      slug: 'cartes-bancaires-boursobank',
      title: 'Les Meilleures Cartes Bancaires de BoursoBank : Gratuite et Premium',
      excerpt: 'Comparez les cartes bancaires de BoursoBank et trouvez celle qui vous correspond le mieux.',
      date: '26 décembre 2024',
      category: 'Cartes Bancaires'
    },
    {
      slug: 'cashback-boursobank-the-corner',
      title: 'The Corner : Gagnez du Cashback Avec Vos Achats BoursoBank',
      excerpt: 'Découvrez le programme de cashback The Corner et économisez sur vos achats quotidiens.',
      date: '25 décembre 2024',
      category: 'Bonnes Affaires'
    },
    {
      slug: 'mobilite-bancaire-easymove',
      title: 'EasyMove : Changez de Banque Facilement Avec BoursoBank',
      excerpt: 'Apprenez comment migrer vers BoursoBank sans tracas en quelques clics seulement.',
      date: '24 décembre 2024',
      category: 'Services'
    },
    {
      slug: 'epargne-boursobank',
      title: 'Solutions d\'Épargne chez BoursoBank : Rendement et Sécurité',
      excerpt: 'Explorez les différentes options d\'épargne disponibles chez BoursoBank.',
      date: '23 décembre 2024',
      category: 'Épargne'
    },
    {
      slug: 'application-mobile-boursobank',
      title: 'L\'Application Mobile BoursoBank : Gérez Vos Finances 24/7',
      excerpt: 'Découvrez les fonctionnalités de l\'application mobile BoursoBank et ses avantages.',
      date: '22 décembre 2024',
      category: 'Tech'
    },
    {
      slug: 'offre-bienvenue-boursobank',
      title: 'L\'Offre de Bienvenue BoursoBank : Comment Maximiser Votre Prime',
      excerpt: 'Tous les détails sur l\'offre de bienvenue et les conditions pour obtenir votre prime.',
      date: '21 décembre 2024',
      category: 'Offres'
    },
    {
      slug: 'frais-bancaires-boursobank',
      title: 'BoursoBank : Pourquoi les Frais Bancaires Sont les Plus Bas ?',
      excerpt: 'Comprendre la politique tarifaire avantageuse de BoursoBank.',
      date: '20 décembre 2024',
      category: 'Tarification'
    }
  ];

  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link key={article.slug} href={`/blog/${article.slug}`}>
            <div className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <Image
                  src={`/blog/${article.slug}.jpg`}
                  alt={article.title}
                  width={1200}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Contenu */}
              <div className="p-6 bg-white">
                <span 
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ backgroundColor: config.primaryColor + '20', color: config.primaryColor }}
                >
                  {article.category}
                </span>
                <h3 className="text-lg font-bold mt-3 mb-2 text-gray-900 group-hover:text-gray-700">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <p className="text-gray-500 text-xs">
                  {article.date}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

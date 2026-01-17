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
              src="/blog/cashback-boursobank-the-corner.jpg"
              alt="The Corner : Gagnez du Cashback Avec Vos Achats BoursoBank"
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
            <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-gray-900">The Corner : Gagnez du Cashback Avec Vos Achats BoursoBank</h1>
            <p className="text-gray-600 text-sm mb-2">27 décembre 2025 • 5 min de lecture</p>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700">
            <h2>The Corner Cashback : Gagner de l'Argent à Chaque Achat</h2>
            <p>The Corner est le programme de fidélité exclusif de BoursoBank qui vous permet de gagner de l'argent sur chaque achat. Contrairement aux cartes de crédit traditionnelles qui vous mettent en endettement, BoursoBank vous rembourse une partie de vos dépenses sous forme de cashback. C'est une véritable révolution dans le secteur bancaire français.</p>
            
            <h2>Comment Fonctionne Exactement le Cashback ?</h2>
            <p>Une fois votre compte BoursoBank ouvert et votre carte activée, vous êtes automatiquement inscrit à The Corner. Chaque fois que vous effectuez un achat chez un commerçant partenaire, le cashback est calculé instantanément et crédité sur votre compte dans les 24 à 48 heures. C'est complètement automatique et transparent.</p>
            <p>Les taux de cashback varient selon le type de commerçant : 1% chez certains partenaires, jusqu'à 5% chez d'autres pour les catégories spécifiques comme les voyages ou la gastronomie. Plus vous dépensez, plus vous gagnez. Il n'y a aucun minimum de dépense requis.</p>

            <h2>Les Milliers de Commerçants Partenaires</h2>
            <p>BoursoBank a noué des partenariats avec des milliers de commerces en France et à l'étranger. Les secteurs couverts incluent : restauration, shopping, voyage, bien-être, loisirs, carburants et services. Vous retrouvez les logos des partenaires chez les marchands ou consultez la liste à jour dans votre application mobile. Les partenaires incluent des marques comme Decathlon, Nespresso, Booking, Airbnb, et bien d'autres.</p>

            <h2>Combien Pouvez-Vous Réellement Gagner ?</h2>
            <p>Le montant dépend de vos habitudes de dépense. Une personne qui dépense 2 000€ par mois avec un taux moyen de 2% de cashback gagne 40€ par mois, soit 480€ par an ! Pour ceux qui utilisent davantage le programme, certains rapportent plus de 1 000€ annuels. C'est de l'argent gratuit que vous laissez sur la table si vous n'utilisez pas ce programme.</p>

            <h2>Les Avantages Additionnels du Programme</h2>
            <p>En plus du cashback, The Corner offre des offres exclusives périodiques, des points bonus lors de certains achats, et des réductions spéciales pour les membres réguliers. Vous recevez aussi des alertes sur vos paiements et votre solde cashback en temps réel via l'application.</p>

            <h2>Y a-t-il des Conditions Ou des Limitations ?</h2>
            <p>Le cashback est crédité sur tous les achats avec votre carte BoursoBank chez les partenaires, sans minimum d'achat requis. Il n'existe pas de limite maximale de cashback que vous pouvez accumuler. Les achats en ligne et en magasin sont tous éligibles. C'est vraiment inclusif et sans prise de tête.</p>

            <h2>FAQ - The Corner et le Programme de Cashback</h2>
            <h3>Le cashback peut-il être utilisé directement comme paiement ?</h3>
            <p>Non, il est crédité directement sur votre compte bancaire, vous l'utilisez comme de l'argent normal.</p>

            <h3>Y a-t-il une période pour utiliser le cashback gagné ?</h3>
            <p>Non, vous pouvez le retirer ou l'utiliser immédiatement une fois crédité. Zéro contrainte.</p>

            <h3>Les achats en ligne font-ils partie du cashback ?</h3>
            <p>Oui, tous les achats online avec votre carte BoursoBank chez les partenaires donnent du cashback, même Amazon.</p>

            <h3>Le cashback se perd s'il n'est pas utilisé ?</h3>
            <p>Non, c'est de l'argent sur votre compte. Il n'y a pas de date d'expiration ou de limites de validité.</p>

            <h2>Stratégies pour Maximiser Votre Cashback</h2>
            <p>Pensez à utiliser votre carte BoursoBank partout où vous avez le choix. Avant une grosse dépense (voyage, électroménager), vérifiez si le marchand est partenaire de The Corner. Planifiez vos achats pendant les périodes promotionnelles où les taux de cashback sont augmentés. Partagez le programme avec vos proches - certaines promotions offrent du cashback bonus si vous les parrainez.</p>

            <h2>Conclusion : Une Source de Revenu Passif Réelle</h2>
            <p>The Corner et le programme de cashback de BoursoBank est une excellente façon de faire travailler votre argent. Vous achetez de toute façon, alors autant gagner du cashback en le faisant. Avec les milliers de commerçants partenaires et des taux intéressants, c'est une source de revenus passifs réelle et facile à mettre en place.</p>
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

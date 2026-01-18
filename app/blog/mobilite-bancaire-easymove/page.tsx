import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { config } from '@/app/config';
import { blogMetadata } from '@/app/blog/blog-metadata';

export const metadata: Metadata = {
  title: blogMetadata['mobilite-bancaire-easymove'].title,
  description: blogMetadata['mobilite-bancaire-easymove'].description,
  keywords: blogMetadata['mobilite-bancaire-easymove'].keywords,
  openGraph: {
    title: blogMetadata['mobilite-bancaire-easymove'].title,
    description: blogMetadata['mobilite-bancaire-easymove'].description,
    url: 'https://monparrainboursobank.fr/blog/mobilite-bancaire-easymove',
    type: 'article',
    images: [{ url: '/blog/mobilite-bancaire-easymove.jpg', width: 1200, height: 600 }],
  },
};

export default function Article() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-white">
        <div className="w-full">
          {/* Featured Image */}
          <div className="relative w-full h-96">
            <Image
              src="/blog/mobilite-bancaire-easymove.jpg"
              alt="EasyMove : Changez de Banque Facilement Avec BoursoBank"
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
            <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-gray-900">EasyMove : Changez de Banque Facilement Avec BoursoBank</h1>
            <p className="text-gray-600 text-sm mb-2">27 décembre 2025 • 5 min de lecture</p>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700">
            <h2>EasyMove : Changer de Banque Sans Stress en Quelques Clics</h2>
            <p>EasyMove est le service révolutionnaire de BoursoBank qui simplifie complètement le changement de banque. Oubliez les démarches administratives longues et compliquées : EasyMove automatise tout en quelques clics. Ce service gratuit et sécurisé vous permet de basculer vers BoursoBank sans stress en seulement 2 à 3 semaines.</p>
            
            <h2>Pourquoi Changer de Banque ?</h2>
            <p>De nombreuses raisons peuvent motiver un changement : des frais trop élevés (200€+ par an), un service client insuffisant, une interface bancaire peu ergonomique, ou simplement l'envie de profiter des avantages de BoursoBank. Le droit au changement de banque est protégé en France. Vous avez le droit légal de migrer vers n'importe quelle banque sans pénalité.</p>

            <h2>Comment Fonctionne Exactement EasyMove ?</h2>
            <h3>Étape 1 : Créer Votre Compte BoursoBank</h3>
            <p>Commencez par ouvrir votre compte en ligne en quelques minutes. Fournissez vos informations personnelles et validez votre identité. C'est entièrement digital et sécurisé. Aucune visite en agence n'est nécessaire.</p>

            <h3>Étape 2 : Autoriser EasyMove à Accéder Votre Ancienne Banque</h3>
            <p>Une fois votre compte créé, activez le service EasyMove. BoursoBank vous demandera les identifiants de votre ancienne banque pour accéder aux informations de vos prélèvements et virements. C'est sécurisé grâce aux normes de protection bancaires strictes.</p>

            <h3>Étape 3 : Vérification Automatique des Paiements</h3>
            <p>EasyMove identifie automatiquement tous vos prélèvements actifs et vos virements récurrents chez votre ancienne banque. Vous avez la possibilité de modifier ou d'annuler avant que le transfert ne commence. Vous restez en contrôle complet du processus.</p>

            <h3>Étape 4 : Transfert Automatique des Paiements</h3>
            <p>BoursoBank contacte automatiquement tous vos créanciers (employeur, EDF, téléphone, assurances, impôts, etc.) pour modifier vos informations bancaires. Vous n'avez rien à faire. Plus de 500 organismes sont automatiquement traités.</p>

            <h3>Étape 5 : Fin de la Migration et Fermeture</h3>
            <p>Après quelques semaines, tous vos paiements sont transférés. Vous pouvez fermer votre ancien compte. BoursoBank vous guide tout au long du processus et assure le suivi jusqu'à la fin.</p>

            <h2>Les Avantages Majeurs d'EasyMove</h2>
            <p>Le principal avantage est le gain de temps énorme. Au lieu de passer des heures à contacter vos créanciers individuellement, tout est automatisé. C'est aussi sécurisé : BoursoBank respecte les normes de sécurité strictes pour protéger vos données. Et surtout, c'est GRATUIT.</p>

            <h2>Y a-t-il des Risques ?</h2>
            <p>Non. Le service est encadré légalement en France. Vos fonds restent accessibles pendant la migration. EasyMove garantit que vous continuez à recevoir vos salaires et à effectuer vos paiements normalement. Il n'y a aucun risque de découvert ou de perte d'argent. Zéro risque financier.</p>

            <h2>Combien de Temps Cela Prend-il Exactement ?</h2>
            <p>La plupart des migrations prennent 2 à 3 semaines. C'est beaucoup plus rapide qu'une migration manuelle qui prendrait plusieurs mois. Vous avez accès immédiat à tous vos services chez BoursoBank dès le jour 1.</p>

            <h2>FAQ - Questions sur EasyMove</h2>
            <h3>Je peux annuler le processus après avoir commencé ?</h3>
            <p>Oui, vous pouvez annuler à tout moment avant la fin de la migration sans pénalité.</p>

            <h3>Mon ancien compte sera-t-il fermé automatiquement ?</h3>
            <p>Non, vous devez le demander vous-même à votre ancienne banque une fois tous les paiements transférés. EasyMove vous guidera sur cette étape.</p>

            <h3>Que se passe-t-il si une entreprise oublie de mettre à jour mes coordonnées ?</h3>
            <p>BoursoBank relance automatiquement et suit le processus jusqu'à confirmation. Vous êtes couvert.</p>

            <h3>Y a-t-il des frais pour EasyMove ?</h3>
            <p>Non, c'est complètement gratuit. C'est un service offert à tous les nouveaux clients BoursoBank.</p>

            <h2>Conclusion : Migrer Vers BoursoBank Est Facile</h2>
            <p>EasyMove rend le changement de banque aussi simple que quelques clics. Avec BoursoBank, fini les soucis administratifs. Vous démarrez une nouvelle relation bancaire sereine et sans tracas. C'est le moment de changer pour une meilleure banque.</p>
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

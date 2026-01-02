import Link from 'next/link';

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-8 lg:px-12">
          <Link href="/" className="text-[#D20073] hover:underline font-medium text-sm mb-4 inline-block">
            ← Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">Politique de confidentialité</h1>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 md:px-8 lg:px-12 py-12 md:py-16">
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Respect de la confidentialité</h2>
          <p className="text-gray-600 leading-relaxed">
            Mon Parrain Boursobank s'engage à respecter la confidentialité de vos données personnelles et à se conformer à la réglementation applicable en matière de protection des données personnelles, notamment le Règlement Général sur la Protection des Données (RGPD) et la loi Informatique et Libertés.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Données collectées</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Nous collectons les données suivantes :
          </p>
          <ul className="text-gray-600 list-disc list-inside space-y-2">
            <li>Votre nom et prénom (formulaire de contact)</li>
            <li>Votre adresse email (formulaire de contact)</li>
            <li>Votre message (formulaire de contact)</li>
            <li>Votre adresse IP et données de navigation (automatiquement)</li>
            <li>Les cookies de navigation</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Utilisation des données</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Vos données personnelles sont utilisées pour :
          </p>
          <ul className="text-gray-600 list-disc list-inside space-y-2">
            <li>Répondre à vos messages via le formulaire de contact</li>
            <li>Améliorer le contenu et les services du site</li>
            <li>Analyser l'utilisation du site (analytics)</li>
            <li>Prévenir les abus et améliorer la sécurité</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Protection des données</h2>
          <p className="text-gray-600 leading-relaxed">
            Nous mettons en place des mesures techniques et organisationnelles pour protéger vos données personnelles contre l'accès non autorisé, la modification, la suppression ou la divulgation. Cependant, aucune transmission sur Internet ne peut être garantie comme totalement sécurisée.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Partage des données</h2>
          <p className="text-gray-600 leading-relaxed">
            Vos données personnelles ne sont pas partagées avec des tiers, sauf :
          </p>
          <ul className="text-gray-600 list-disc list-inside space-y-2">
            <li>Si requis par la loi ou les autorités compétentes</li>
            <li>Avec notre prestataire d'hébergement (Vercel)</li>
            <li>Pour prévenir ou résoudre des litiges</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Droits RGPD</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Vous disposez des droits suivants en vertu du RGPD :
          </p>
          <ul className="text-gray-600 list-disc list-inside space-y-2">
            <li>Droit d'accès à vos données</li>
            <li>Droit de rectification de vos données</li>
            <li>Droit à l'effacement de vos données</li>
            <li>Droit à la portabilité de vos données</li>
            <li>Droit de vous opposer au traitement</li>
            <li>Droit à la limitation du traitement</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-3">
            Pour exercer ces droits, veuillez nous contacter à <a href="mailto:contact.monparrainboursobank@gmail.com" className="text-[#D20073] hover:underline">contact.monparrainboursobank@gmail.com</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies</h2>
          <p className="text-gray-600 leading-relaxed">
            Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur. Certains cookies sont essentiels au fonctionnement du site, d'autres peuvent être désactivés.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contactez-nous</h2>
          <p className="text-gray-600 leading-relaxed">
            Si vous avez des questions concernant cette politique de confidentialité ou si vous souhaitez exercer vos droits, veuillez nous contacter à :
          </p>
          <p className="text-gray-600 leading-relaxed mt-3">
            Email : <strong><a href="mailto:contact.monparrainboursobank@gmail.com" className="text-[#D20073] hover:underline">contact.monparrainboursobank@gmail.com</a></strong><br />
            Adresse : France
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Modifications de la politique</h2>
          <p className="text-gray-600 leading-relaxed">
            Mon Parrain Boursobank se réserve le droit de modifier la présente politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec la date de la dernière mise à jour.
          </p>
        </section>

        <p className="text-gray-500 text-sm mt-12">
          Dernière mise à jour : 28 décembre 2025
        </p>
      </div>
    </main>
  );
}

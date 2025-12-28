import Link from 'next/link';

export default function ConditionsGenerales() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-8 lg:px-12">
          <Link href="/" className="text-[#D20073] hover:underline font-medium text-sm mb-4 inline-block">
            ← Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">Conditions générales d'utilisation</h1>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 md:px-8 lg:px-12 py-12 md:py-16">
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Objet</h2>
          <p className="text-gray-600 leading-relaxed">
            Le présent site web a pour objet de permettre aux utilisateurs de consulter et de partager leur code de parrainage Boursobank.
            Mon Parrain Boursobank est un site indépendant proposant à titre personnel un code de parrainage.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Acceptation des conditions</h2>
          <p className="text-gray-600 leading-relaxed">
            En accédant à ce site et en l'utilisant, vous acceptez sans restriction ni réserve les présentes conditions générales.
            Si vous ne les acceptez pas, merci de ne pas utiliser le site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Utilisation du site</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Vous acceptez d'utiliser ce site uniquement à des fins légales et licites. Vous vous engagez notamment à ne pas :
          </p>
          <ul className="text-gray-600 list-disc list-inside space-y-2">
            <li>Violer les droits d'autrui</li>
            <li>Contourner les mesures de sécurité</li>
            <li>Diffuser du contenu illégal ou offensant</li>
            <li>Effectuer du harcèlement ou du spam</li>
            <li>Violer les termes de service de Boursorama Banque</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Données personnelles</h2>
          <p className="text-gray-600 leading-relaxed">
            Nous respectons la confidentialité de vos données. Veuillez consulter notre politique de confidentialité pour plus d'informations
            sur la collecte et l'utilisation de vos données personnelles.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Responsabilité</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Mon Parrain Boursobank décline toute responsabilité concernant :
          </p>
          <ul className="text-gray-600 list-disc list-inside space-y-2">
            <li>Les erreurs ou omissions du contenu</li>
            <li>Les dommages directs ou indirects</li>
            <li>L'indisponibilité temporaire du site</li>
            <li>Les contenus externes liés</li>
            <li>Les actes de tiers en utilisant ce site</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Programme de parrainage</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Le partage de code de parrainage sur ce site est soumis aux conditions suivantes :
          </p>
          <ul className="text-gray-600 list-disc list-inside space-y-2">
            <li>Le code ne peut être utilisé que pour ouvrir un compte Boursobank</li>
            <li>Les conditions de Boursorama Banque s'appliquent à toute ouverture de compte</li>
            <li>Bourso26 n'est pas responsable des refus d'ouverture ou des délais de versement</li>
            <li>Les primes sont soumises aux termes et conditions de Boursorama Banque</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Modification des conditions</h2>
          <p className="text-gray-600 leading-relaxed">
            Bourso26 se réserve le droit de modifier les présentes conditions à tout moment.
            Les utilisateurs seront notifiés de toute modification substantielle.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Loi applicable</h2>
          <p className="text-gray-600 leading-relaxed">
            Les présentes conditions sont régies par la loi française.
            En cas de litige, les juridictions compétentes seront exclusivement celles situées en France.
          </p>
        </section>
      </div>
    </main>
  );
}

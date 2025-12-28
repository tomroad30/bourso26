import Link from 'next/link';

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-8 lg:px-12">
          <Link href="/" className="text-[#EC1C24] hover:underline font-medium text-sm mb-4 inline-block">
            ← Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">Mentions légales</h1>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 md:px-8 lg:px-12 py-12 md:py-16 prose prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Éditeur du site</h2>
          <p className="text-gray-600 leading-relaxed">
            Le présent site web est édité par :<br />
            <strong>Bourso26</strong><br />
            [Votre nom ou nom de l'entreprise]<br />
            Adresse : [Votre adresse]<br />
            Email : contact@bourso26.fr<br />
            Téléphone : [Votre téléphone]<br />
            SIRET/SIREN : [Vos numéros]
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Hébergement</h2>
          <p className="text-gray-600 leading-relaxed">
            Le site est hébergé par :<br />
            <strong>Vercel Inc.</strong><br />
            340 S Lemon Ave #4133<br />
            Walnut, CA 91789<br />
            États-Unis
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Directeur de la publication</h2>
          <p className="text-gray-600 leading-relaxed">
            Responsable de la publication : [Votre nom]<br />
            Email : [Votre email]
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Propriété intellectuelle</h2>
          <p className="text-gray-600 leading-relaxed">
            L'ensemble du contenu du site (textes, images, vidéos, logos, etc.) est la propriété de Bourso26 ou de ses partenaires. 
            Toute reproduction ou utilisation non autorisée est strictement interdite.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Responsabilité</h2>
          <p className="text-gray-600 leading-relaxed">
            Bourso26 décline toute responsabilité concernant :<br />
            - Les erreurs ou omissions présentes sur le site<br />
            - L'indisponibilité du site<br />
            - Les dommages causés par l'utilisation du site<br />
            - Les contenus externes liés depuis ce site
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Affiliation avec Boursorama</h2>
          <p className="text-gray-600 leading-relaxed">
            Ce site n'est pas affilié à, approuvé ou endossé par Boursorama Banque. 
            Bourso26 est un site indépendant de partage de code de parrainage.
            Boursorama Banque est une marque de Boursorama SA.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Modifications</h2>
          <p className="text-gray-600 leading-relaxed">
            Bourso26 se réserve le droit de modifier les présentes mentions légales à tout moment.
            Les modifications seront publiées directement sur le site.
          </p>
        </section>
      </div>
    </main>
  );
}

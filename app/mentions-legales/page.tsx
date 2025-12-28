import Link from 'next/link';

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-8 lg:px-12">
          <Link href="/" className="text-[#D20073] hover:underline font-medium text-sm mb-4 inline-block">
            ← Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">Mentions Légales</h1>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="prose prose-lg max-w-none">
          
          <h2>1. Éditeur du site</h2>
          <p>
            <strong>Nom :</strong> monparrainboursobank<br />
            <strong>Nature :</strong> Site d'information indépendant<br />
            <strong>Email :</strong> <a href="mailto:contact@monparrainboursobank.fr" className="text-[#D20073] hover:underline">contact@monparrainboursobank.fr</a>
          </p>

          <h2>2. Hébergement</h2>
          <p>
            Ce site est hébergé par :<br />
            <strong>Vercel Inc.</strong><br />
            340 S Lemon Ave #4133<br />
            Walnut, CA 91789<br />
            États-Unis
          </p>

          <h2>3. Responsable de la publication</h2>
          <p>
            <strong>Responsable :</strong> monparrainboursobank
          </p>

          <h2>4. Indépendance et Avertissement Important</h2>
          <p>
            <strong>monparrainboursobank</strong> est un site d'information <strong>indépendant</strong> et n'est <strong>en aucun cas associé, affilié ou sponsorisé</strong> par :
          </p>
          <ul>
            <li>Boursobank</li>
            <li>Boursorama Banque</li>
            <li>Le groupe Boursorama</li>
            <li>Toute autre entité du groupe Société Générale</li>
          </ul>
          <p>
            Les informations fournies sur ce site concernant le programme de parrainage Boursobank sont basées sur les conditions publiquement disponibles et sont fournies à titre informatif uniquement. L'utilisateur est responsable de vérifier les conditions actuelles directement auprès de Boursobank avant de participer au programme.
          </p>

          <h2>5. Propriété Intellectuelle</h2>
          <p>
            L'ensemble du contenu de ce site (textes, images, logos, graphiques) est la propriété exclusive de monparrainboursobank ou de ses partenaires. Toute reproduction, distribution ou modification sans autorisation écrite préalable est interdite.
          </p>

          <h2>6. Limitations de Responsabilité</h2>
          <p>
            L'utilisateur accède au site à ses propres risques. monparrainboursobank décline toute responsabilité concernant :
          </p>
          <ul>
            <li>L'exactitude ou l'exhaustivité des informations fournies</li>
            <li>Les dommages directs ou indirects résultant de l'utilisation du site</li>
            <li>Les modifications apportées par Boursobank aux conditions du programme de parrainage</li>
            <li>Les services fournis par des tiers</li>
          </ul>

          <h2>7. Liens Externes</h2>
          <p>
            Ce site contient des liens vers des sites externes (notamment Boursobank). monparrainboursobank ne peut être tenue responsable du contenu, de la disponibilité ou du fonctionnement de ces sites tiers.
          </p>

          <h2>8. Données Personnelles et Confidentialité</h2>
          <p>
            Les données personnelles collectées via le formulaire de contact sont utilisées uniquement pour répondre aux demandes. Aucune donnée n'est partagée avec des tiers sans consentement explicite.
          </p>

          <h2>9. Droits d'Auteur</h2>
          <p>
            © {new Date().getFullYear()} monparrainboursobank. Tous droits réservés.
          </p>

          <h2>10. Modifications des Conditions</h2>
          <p>
            monparrainboursobank se réserve le droit de modifier ces mentions légales à tout moment. Les modifications entrent en vigueur immédiatement à leur publication sur le site.
          </p>

          <h2>11. Loi Applicable</h2>
          <p>
            Ce site est soumis à la loi française. Toute réclamation ou litige sera soumis aux tribunaux compétents.
          </p>

        </div>
      </div>
    </main>
  );
}

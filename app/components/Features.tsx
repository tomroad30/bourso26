export default function Features() {
  const features = [
    {
      title: "100% en ligne et sécurisé",
      description: "Ouverture de compte simple, rapide et complètement en ligne avec tous les processus sécurisés.",
    },
    {
      title: "Pas de frais de tenue de compte",
      description: "Contrairement à d'autres banques, chez BoursoBank votre compte ne vous coûte rien à gérer.",
    },
    {
      title: "Banque la moins chère depuis 18 ans",
      description: "Économisez jusqu'à 252€ par an sur vos frais bancaires. Classée meilleure banque en 2025.",
    },
    {
      title: "Support client disponible",
      description: "Conseillers disponibles par email ou téléphone du lundi au vendredi 8h-20h et samedi 8h45-16h30.",
    },
    {
      title: "Mobilité bancaire simple",
      description: "Changez de banque facilement avec EasyMove. Nous communiquons votre RIB à tous vos organismes.",
    },
    {
      title: "Tous les services quotidiens gratuits",
      description: "Paiements, retraits, virements, prélèvements en euros en France et à l'étranger sans frais.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Pourquoi choisir BoursoBank ?
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Découvrez les avantages d'une banque moderne et transparent
          </p>
        </div>
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl bg-gradient-to-br from-blue-50 to-pink-50 border border-pink-100 p-6 md:p-8 hover:border-pink-300 hover:shadow-md transition-all"
            >
              <h3 className="mb-2 text-lg md:text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

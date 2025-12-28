import Link from 'next/link';

export default function CommentCaMarche() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-8 lg:px-12">
          <Link href="/" className="text-[#D20073] hover:underline font-medium text-sm mb-4 inline-block">
            ← Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">Comment ça marche</h1>
          <p className="text-lg text-gray-600 mt-4">Découvrez comment parrainer et gagner de l'argent facilement</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 md:px-8 lg:px-12 py-12 md:py-16">
        
        {/* Les 4 étapes */}
        <section id="comment-etre-parrainé" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">4 étapes simples</h2>
          
          <div className="space-y-8">
            {[
              {
                step: 1,
                title: "Obtenez votre code de parrainage",
                description: "Vous recevez un code personnel unique dès l'ouverture de votre compte. Dans notre cas, c'est MONCODEPARRAINAGE. Vous pouvez le partager avec vos amis via lien direct, SMS, email ou réseaux sociaux."
              },
              {
                step: 2,
                title: "Partagez avec vos amis",
                description: "Envoyez votre code ou lien de parrainage à vos amis. Plus vous partagez, plus vous gagnez ! Il n'y a pas de limite au nombre de parrainages."
              },
              {
                step: 3,
                title: "Vos amis ouvrent un compte",
                description: "Vos amis utilisent votre code lors de l'inscription et complètent l'ouverture de leur compte Boursobank en ligne. C'est rapide, gratuit et 100% sécurisé."
              },
              {
                step: 4,
                title: "Recevez votre prime",
                description: "Une fois le compte ouvert et validé par votre ami, vous recevez une prime directement sur votre compte Boursobank. Jusqu'à 220€ par ami parrainé !"
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D20073] text-white font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Informations importantes */}
        <section id="comment-etre-parrainé" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Informations importantes</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-[#D20073] bg-red-50 p-6 rounded">
              <h3 className="font-bold text-gray-900 mb-2">Pas de limite de parrainages</h3>
              <p className="text-gray-600">Vous pouvez parrainer autant de personnes que vous le souhaitez. Chaque parrainage vous rapporte une prime supplémentaire.</p>
            </div>

            <div className="border-l-4 border-[#D20073] bg-red-50 p-6 rounded">
              <h3 className="font-bold text-gray-900 mb-2">Ouverture gratuite et rapide</h3>
              <p className="text-gray-600">L'ouverture du compte Boursobank prend seulement 5 minutes. Pas de frais cachés, tout est transparent et gratuit.</p>
            </div>

            <div className="border-l-4 border-[#D20073] bg-red-50 p-6 rounded">
              <h3 className="font-bold text-gray-900 mb-2">Sécurisé et fiable</h3>
              <p className="text-gray-600">Boursobank est une banque française agréée avec tous les systèmes de sécurité nécessaires. Vos données sont protégées.</p>
            </div>

            <div className="border-l-4 border-[#D20073] bg-red-50 p-6 rounded">
              <h3 className="font-bold text-gray-900 mb-2">Pas de domiciliation obligatoire</h3>
              <p className="text-gray-600">Pour bénéficier de la prime, il n'est pas nécessaire de domicilier votre salaire chez Boursobank.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 bg-blue-50 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Prêt à commencer ?</h2>
          <p className="text-gray-600 mb-6">Ouvrez votre compte Boursobank maintenant et commencez à parrainer</p>
          <a
            href="https://www.boursobank.com/landing/search?&origine=2235&at_medium=sl&at_campaign=fr_sea&at_platform=google&at_term=&at_creation=marque_cav&at_variant=filrouge&gad_source=1&gad_campaignid=917874925&gbraid=0AAAAADFboX3EUt0n5vT8JJDAN17nTKiwR&gclid=Cj0KCQiAgbnKBhDgARIsAGCDdldZpmGfQ_bbzjr7Tn4Ms3Uxr94seTnU8y_qx0nO382BxiJ47-j8tLwaAmTDEALw_wcB"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#D20073] hover:bg-[#B3005F] text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Ouvrir mon compte
          </a>
        </section>
      </div>
    </main>
  );
}

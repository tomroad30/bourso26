import Link from 'next/link';

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-8 lg:px-12">
          <Link href="/" className="text-[#D20073] hover:underline font-medium text-sm mb-4 inline-block">
            ← Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">Nous contacter</h1>
          <p className="text-lg text-gray-600 mt-4">Des questions ? Nous sommes ici pour vous aider</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 md:px-8 lg:px-12 py-12 md:py-16">
        
        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Informations de contact</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <a href="mailto:contact@monparrainboursobank.fr" className="text-[#D20073] hover:underline">
                  contact@monparrainboursobank.fr
                </a>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">Adresse</h3>
                <p className="text-gray-600">
                  Mon Parrain Boursobank<br />
                  Site d'information indépendant<br />
                  France
                </p>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Envoyer un message</h2>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D20073]"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D20073]"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D20073]"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D20073]"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#D20073] hover:bg-[#B3005F] text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Envoyer
              </button>
            </form>
          </section>
        </div>

        {/* FAQ */}
        <section id="faq" className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquemment posées</h2>
          <div className="space-y-4">
            <details className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50">
              <summary className="font-bold text-gray-900">Comment puis-je commencer à parrainer ?</summary>
              <p className="mt-3 text-gray-600">Vous pouvez commencer à parrainer immédiatement. Ouvrez un compte Boursobank avec le code MONCODEPARRAINAGE et commencez à partager votre propre code avec vos amis.</p>
            </details>

            <details className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50">
              <summary className="font-bold text-gray-900">Combien de temps pour recevoir ma prime ?</summary>
              <p className="mt-3 text-gray-600">La prime est généralement versée dans les 30 jours suivant l'ouverture et la validation du compte de votre ami.</p>
            </details>

            <details className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50">
              <summary className="font-bold text-gray-900">Y a-t-il des frais ?</summary>
              <p className="mt-3 text-gray-600">Non, l'ouverture de compte et le programme de parrainage sont totalement gratuits. Boursobank ne facture aucun frais pour ces services.</p>
            </details>

            <details className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50">
              <summary className="font-bold text-gray-900">Puis-je parrainer des personnes à l'étranger ?</summary>
              <p className="mt-3 text-gray-600">Le programme de parrainage Boursobank est actuellement réservé aux résidents français. Vérifiez les conditions actuelles pour plus de détails.</p>
            </details>
          </div>
        </section>
      </div>
    </main>
  );
}

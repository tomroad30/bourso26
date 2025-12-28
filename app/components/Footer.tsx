'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="grid gap-8 md:gap-12 md:grid-cols-4 mb-8 md:mb-12">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Mon Parrain Boursobank</h3>
            <p className="text-sm leading-relaxed">
              Plateforme de parrainage BoursoBank. Ouvrez votre compte et gagnez jusqu'à 200€.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-semibold text-white text-sm md:text-base">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Accueil</Link></li>
              <li><Link href="/comment-ca-marche" className="hover:text-white transition-colors">Comment ça marche</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 font-semibold text-white text-sm md:text-base">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link></li>
              <li><Link href="/conditions-generales" className="hover:text-white transition-colors">Conditions générales</Link></li>
              <li><Link href="/politique-confidentialite" className="hover:text-white transition-colors">Confidentialité</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 font-semibold text-white text-sm md:text-base">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="/contact#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 md:flex-row md:justify-between items-center text-sm">
          <p>
            © {currentYear} Mon Parrain Boursobank. Tous droits réservés.
          </p>
          <p className="text-xs text-gray-500 text-center md:text-right">
            Ce site n'est pas affilié à BoursoBank. Consulter les conditions générales.
          </p>
        </div>
      </div>
    </footer>
  );
}

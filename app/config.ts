/**
 * CONFIGURATION CENTRALISÉE - À METTRE À JOUR RÉGULIÈREMENT
 * Surveillance requise toutes les 2-4 semaines
 */

export const config = {
  // 🎯 CODE DE PARRAINAGE - À PERSONNALISER
  referralCode: 'MONCODEPARRAINAGE',

  // 💰 PRIME DE BIENVENUE - À METTRE À JOUR
  // ⚠️ Vérifier l'offre Boursorama toutes les 2-4 semaines
  maxPrimeAmount: '200€',
  minPrimeAmount: '50€',

  // 📅 DATES DE L'OFFRE - CRITIQUE !
  // ⚠️ NE JAMAIS afficher une offre expirée (perte de confiance + signalement Google)
  offerEndDate: new Date('2026-01-05T17:00:00'), // 05/01/2026 à 17h
  offerText: 'Offre valable du 22/12/2025 17h au 05/01/2026 17h',

  // 🔗 LIENS BOURSORAMA - À VÉRIFIER 1 FOIS PAR MOIS
  // ⚠️ Tester régulièrement que les redirections fonctionnent
  boursoramaUrl: 'https://bour.so/p/UjmYkbTklMd',

  // 🎨 COULEURS BOURSOBANK - NE PAS MODIFIER
  // Rose Boursobank officiel (#D20073)
  primaryColor: '#D20073',
  secondaryColor: '#0066CC', // Bleu secondaire

  // 📱 URL DE PARTAGE
  shareUrl: 'https://monparrainboursobank.fr',

  // 📧 CONTACT
  contactEmail: 'contact.monparrainboursobank@gmail.com',
  contactPhone: '+33 X XX XX XX XX', // À mettre à jour

  // 🏢 INFORMATIONS LÉGALES
  companyName: 'Mon Parrain Boursobank',
  companyYear: new Date().getFullYear(),
  legalRepresentative: '[Votre Nom/Entreprise]',
  address: '[Votre Adresse]',
  phone: '[Votre Téléphone]',
  email: '[Votre Email]',
  hosting: '[Hébergeur]',
};

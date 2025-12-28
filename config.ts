// Configuration centralisée du site Bourso26
export const siteConfig = {
  // Code de parrainage personnel
  referralCode: 'LUCAS26',

  // URLs
  referralLink: 'https://www.boursobank.com/landing/parrainage',
  
  // Métadonnées
  siteName: 'Bourso26',
  siteDescription: 'Gagnez de l\'argent en parrainant vos amis Boursorama',
  siteUrl: 'https://bourso26.fr',

  // Informations de contact
  email: 'contact@bourso26.fr',
  phone: '+33 1 23 45 67 89',

  // Réseaux sociaux
  social: {
    facebook: 'https://facebook.com/bourso26',
    twitter: 'https://twitter.com/bourso26',
    instagram: 'https://instagram.com/bourso26',
  },

  // Conditions de parrainage
  referralInfo: {
    minAmount: 50,
    maxAmount: 150,
    currency: 'EUR',
    processingTime: '30 jours',
  },

  // Textes personnalisables
  texts: {
    shareMessage: 'Rejoins-moi sur Boursorama et gagne jusqu\'à €150 avec mon code de parrainage !',
    heroCTA: 'Partager mon code de parrainage',
    heroTitle: 'Gagnez de l\'argent en parrainant vos amis',
    heroSubtitle: 'C\'est simple, gratuit et sans engagement',
  },
};

export default siteConfig;

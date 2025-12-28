# Bourso26 - Site de Parrainage Boursorama

Un site web moderne pour promouvoir votre code de parrainage Boursorama et gagner de l'argent en parrainant vos amis.

## 🚀 Fonctionnalités

- **Page d'accueil attrayante** avec appel à l'action
- **Code de parrainage personnalisable** avec copie facile
- **Partage sur les réseaux sociaux** (WhatsApp, Facebook, Twitter, Email)
- **Lien de parrainage personnel** à partager
- **Section "Comment ça marche"** avec tutoriel en 4 étapes
- **FAQ** avec les questions les plus posées
- **Design responsive** qui s'adapte à tous les appareils
- **Performance optimisée** avec Next.js et Tailwind CSS

## 💻 Tech Stack

- **Next.js 16** - Framework React avec SSR et SSG
- **React 19** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **ESLint** - Linting et qualité du code

## 📦 Installation

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Étapes

1. **Installer les dépendances**
```bash
cd bourso26
npm install
```

2. **Lancer le serveur de développement**
```bash
npm run dev
```

3. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

## 🛠️ Configuration

### Modifier votre code de parrainage

Dans `app/page.tsx`, remplacez `LUCAS26` par votre code personnel :

```typescript
const [referralCode] = useState('VOTRE_CODE_ICI');
```

### Personnaliser le contenu

Tous les textes et messages peuvent être modifiés dans les composants correspondants :
- `components/Hero.tsx` - Section héroïque
- `components/ReferralCode.tsx` - Affichage du code
- `components/Features.tsx` - Caractéristiques
- `components/HowItWorks.tsx` - Tutoriel et FAQ
- `components/Footer.tsx` - Pied de page

### Mettre à jour les métadonnées

Modifiez les métadonnées du site dans `app/layout.tsx` :
- Titre
- Description
- Mots-clés

## 📱 Partage

Le site inclut des boutons de partage pour :
- **WhatsApp** - Partage direct par message
- **Facebook** - Partage sur le fil d'actualité
- **Twitter** - Partage avec mention personnalisée
- **Email** - Envoi par email
- **Lien personnel** - URL direct à copier

## 🚀 Déploiement

### Sur Vercel (recommandé)

1. Poussez votre code sur GitHub
2. Importez le projet sur Vercel.com
3. Vercel détectera automatiquement Next.js et configurera tout

### Sur un serveur personnalisé

```bash
npm run build
npm start
```

L'application sera disponible sur le port 3000.

## 📊 Structure du projet

```
bourso26/
├── app/
│   ├── components/           # Composants React
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ReferralCode.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   └── Footer.tsx
│   ├── globals.css           # Styles globaux
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Page d'accueil
├── public/                   # Assets statiques
├── package.json              # Dépendances
├── tsconfig.json             # Configuration TypeScript
├── tailwind.config.ts        # Configuration Tailwind
└── next.config.ts            # Configuration Next.js
```

## 🎨 Personnalisation du design

Le site utilise Tailwind CSS. Pour modifier les couleurs :

1. Modifier les classes Tailwind dans les composants
2. Les couleurs principales sont `blue-600`, `blue-800`, etc.
3. Vous pouvez personnaliser via `tailwind.config.ts`

## 📝 Notes importantes

- ⚠️ Remplacez `LUCAS26` par votre vrai code de parrainage
- ⚠️ Changez l'URL de partage (`https://bourso26.fr`) par votre domaine réel
- ⚠️ Vérifiez les conditions de Boursorama avant de publier
- 📋 Mettez à jour les mentions légales et conditions d'utilisation

## 🤝 Support

Pour modifier ou améliorer le site, consultez :
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation React](https://react.dev)

## 📄 Licence

Ce projet est fourni tel quel à titre personnel.

---

**Bon parrainage ! 💰**

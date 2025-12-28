# Bourso26 - Instructions de Développement

## Vue d'ensemble
Bourso26 est une plateforme web moderne pour promouvoir le parrainage Boursorama. Le site permet de partager un code de parrainage personnel via plusieurs canaux et de gagner des commissions.

## Stack Technologique
- **Framework**: Next.js 16 (App Router)
- **UI**: React 19
- **Styling**: Tailwind CSS
- **Langage**: TypeScript
- **Qualité**: ESLint

## Structure du Projet

```
app/
├── components/          # Composants React réutilisables
│   ├── Header.tsx       # Navigation principale
│   ├── Hero.tsx         # Section héroïque
│   ├── ReferralCode.tsx # Affichage et partage du code
│   ├── Features.tsx     # Avantages du programme
│   ├── HowItWorks.tsx   # Tutoriel et FAQ
│   └── Footer.tsx       # Pied de page
├── page.tsx             # Page d'accueil (SSR)
├── layout.tsx           # Layout racine avec métadonnées
└── globals.css          # Styles globaux
```

## Démarrage Rapide

### Installation
```bash
cd bourso26
npm install
```

### Développement
```bash
npm run dev
# Accès à http://localhost:3000
```

### Build Production
```bash
npm run build
npm start
```

## Configuration Importante

### 1. Code de Parrainage Personnel
Modifier dans `app/page.tsx` :
```typescript
const [referralCode] = useState('VOTRE_CODE_BOURSORAMA');
```

### 2. URL de Partage
Mettre à jour dans `app/components/ReferralCode.tsx` :
```typescript
const shareUrl = `https://votre-domaine.fr/?ref=${referralCode}`;
```

### 3. Métadonnées SEO
Mettre à jour dans `app/layout.tsx` :
- Titre du site
- Description
- Mots-clés

## Fonctionnalités Principales

### Boutons de Partage
Le site inclut le partage intégré pour :
- WhatsApp
- Facebook
- Twitter
- Email
- Copie de lien direct

### Sections du Site
1. **Header** - Navigation collapsible
2. **Hero** - Section d'introduction avec CTA
3. **Code de Parrainage** - Affichage et boutons de partage
4. **Caractéristiques** - 6 avantages principaux
5. **Comment ça marche** - 4 étapes + FAQ
6. **Footer** - Liens et informations légales

## Performance et SEO

- ✅ Image Optimization (Next.js Image)
- ✅ Code Splitting automatique
- ✅ Métadonnées optimisées
- ✅ Responsive design
- ✅ TailwindCSS purging

## Personnalisation du Design

Les couleurs principales utilisent Tailwind :
- Primaire: `blue-600`, `blue-800`
- Accents: `green-500`, `sky-500`
- Neutres: `gray-*`

Modifier via les classes Tailwind dans chaque composant ou via `tailwind.config.ts`.

## Déploiement

### Vercel (Recommandé)
1. Pousser sur GitHub
2. Importer sur Vercel.com
3. Vercel configure automatiquement

### Autre hébergement
- Build statique: `npm run build`
- Serveur Node: `npm start`

## Dépannage

### Erreur TypeScript
```bash
npm run lint
```

### Rebuild nécessaire
```bash
rm -rf .next
npm run dev
```

### Port 3000 occupé
```bash
npm run dev -- -p 3001
```

## Points de Vigilance

⚠️ **Important**:
- Vérifier les conditions légales de Boursorama
- Remplacer tous les codes de démonstration
- Mettre à jour domaine et URLs réels
- Ajouter mentions légales complètes
- Vérifier conformité RGPD

## Ressources

- [Docs Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## Notes de Développement

- Tous les composants utilisent `'use client'` (client-side rendering)
- State management via `useState` (simple)
- Pas de base de données (statique)
- Images placeholders à remplacer
- Navigation utilise `#` (à connecter si nécessaire)

---

**Dernière mise à jour**: Décembre 2025

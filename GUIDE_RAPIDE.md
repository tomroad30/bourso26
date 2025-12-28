# 🚀 Guide Rapide - Bourso26

## Première utilisation en 5 minutes

### 1. Lancer le site
```bash
cd bourso26
npm run dev
```
Puis ouvrez `http://localhost:3000` dans votre navigateur.

### 2. Configurer votre code de parrainage

**Méthode 1 - Fichier de configuration** (recommandé)
Modifiez `config.ts` :
```typescript
referralCode: 'VOTRE_CODE_BOURSORAMA',
```

**Méthode 2 - Direct dans le code**
Modifiez `app/page.tsx` :
```typescript
const [referralCode] = useState('VOTRE_CODE_ICI');
```

### 3. Personnaliser le texte
Modifiez `config.ts` pour changer :
- Les messages de partage
- Les titres et sous-titres
- Les informations de contact

### 4. Remplacer les liens
Dans `app/components/ReferralCode.tsx`, mettez à jour :
```typescript
const shareUrl = `https://votre-domaine.fr/?ref=${referralCode}`;
```

### 5. Déployer
```bash
npm run build
npm start
```

## Points clés à personnaliser

- ✏️ Code de parrainage (LUCAS26 → VOTRE_CODE)
- 🔗 Domaine du site (https://bourso26.fr → votre domaine)
- 📱 Réseaux sociaux (config.ts)
- 📧 Email de contact (config.ts)
- 📝 Mentions légales (Footer)

## Couleurs et design

Modifiez les classes Tailwind pour changer les couleurs :
- `blue-600` → couleur primaire
- `gray-*` → couleurs neutres
- Voir chaque composant pour d'autres options

## Partage

Le site supporte automatiquement :
- ✓ WhatsApp
- ✓ Facebook
- ✓ Twitter
- ✓ Email
- ✓ Copie du lien

## Troubleshooting rapide

### Port occupé ?
```bash
npm run dev -- -p 3001
```

### Erreurs TypeScript ?
```bash
npm run lint
```

### Besoin de rebuild ?
```bash
rm -rf .next && npm run dev
```

## Aide supplémentaire

- README.md - Documentation complète
- .github/copilot-instructions.md - Détails techniques
- config.ts - Tous les paramètres configurables

---

**C'est prêt ! Bonne chance avec votre parrainage ! 💰**

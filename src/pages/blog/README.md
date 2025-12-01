# Blog Structure

## Organisation des fichiers

Le blog est organisé en composants modulaires pour faciliter la maintenance et les modifications futures.

### Structure du dossier `/src/pages/blog/`

```
blog/
├── index.ts                    # Exports centralisés
├── BlogPage.tsx               # Page d'accueil du blog (liste des catégories et articles)
├── QuotidienSection.tsx       # Section "Gestion Quotidienne" (~400 lignes)
├── TraceSection.tsx           # Section "AUTYVO Trace" (~400 lignes)
└── CalendrierSection.tsx      # Section "Calendrier Saisonnier" (~500 lignes)
```

### BlogPage.tsx (principal)
- **Rôle** : Page d'accueil du blog avec navigation par catégories
- **Contenu** :
  - 5 catégories cliquables (Quotidien, Trace, Calendrier, Intelligence, Transmission)
  - 6 articles récents avec images
  - Gestion du state pour la navigation entre sections
- **Lignes** : ~200 lignes (simplifié)

### QuotidienSection.tsx
- **Rôle** : Guide de l'entretien quotidien
- **Contenu** :
  - Hero section avec bouton retour
  - 3 piliers de l'entretien (Hebdomadaire, Mensuel, Préventif)
  - 4 conseils d'optimisation (éco-conduite, longévité moteur, protection carrosserie, traçabilité)
  - Checklist synthétique (quotidien, hebdomadaire, mensuel, saisonnier)
  - CTA de téléchargement
- **Lignes** : ~400 lignes

### TraceSection.tsx
- **Rôle** : Valorisation de la traçabilité
- **Contenu** :
  - Hero section avec carnet numérique
  - 3 bénéfices majeurs (valorisation, protection, confiance acheteur)
  - 4 statistiques du marché
  - 3 catégories de traçabilité (entretiens, suivi quotidien, événements)
  - 4 étapes "Comment ça marche"
  - Sources officielles (L'Argus, DGCCRF, etc.)
  - CTA de téléchargement
- **Lignes** : ~400 lignes

### CalendrierSection.tsx
- **Rôle** : Guide d'entretien saisonnier
- **Contenu** :
  - Hero section
  - 4 saisons avec tableaux de priorités détaillés (Hiver, Printemps, Été, Automne)
  - Calendrier mensuel (12 mois avec focus et checks)
  - 4 recommandations générales
  - Sources techniques officielles (TCS, ADAC, Cerema, INC, NREL, etc.)
  - CTA de téléchargement
- **Lignes** : ~500 lignes

## Navigation

L'utilisateur peut :
1. **Accéder au blog** via `/blog`
2. **Cliquer sur une catégorie** → charge le composant correspondant
3. **Cliquer sur "Retour aux catégories"** → revient à BlogPage
4. **Cliquer sur "Lire la suite" d'un article** → charge la section correspondante

## État actuel

✅ **Complété** :
- Quotidien (gestion quotidienne du véhicule)
- Trace (traçabilité et valorisation)
- Calendrier d'Entretien (saisonnier, 4 saisons + calendrier mensuel)

⏳ **À développer** :
- Intelligence (technologies, IA, innovations)
- Transmission (achat/vente de véhicules)

## Avantages de cette structure

1. **Maintenabilité** : Chaque section est indépendante et facile à modifier
2. **Performance** : Composants plus légers, compilations plus rapides
3. **Lisibilité** : Code organisé et facile à comprendre
4. **Évolutivité** : Facile d'ajouter de nouvelles sections
5. **Réutilisabilité** : Les composants peuvent être importés ailleurs si nécessaire

## Comment ajouter une nouvelle section

1. Créer un nouveau fichier `NomSection.tsx` dans `/src/pages/blog/`
2. Utiliser le pattern existant avec props `onBack`
3. Ajouter la section dans le state de `BlogPage.tsx`
4. Ajouter la condition de rendu dans `BlogPage.tsx`
5. Exporter le composant dans `index.ts`

Exemple :
```tsx
// IntelligenceSection.tsx
interface IntelligenceSectionProps {
  onBack: () => void;
}

function IntelligenceSection({ onBack }: IntelligenceSectionProps) {
  return (
    <>
      <Helmet>
        <title>Intelligence Automobile - Blog Autyvo</title>
      </Helmet>
      <div className="pt-16">
        <button onClick={onBack}>← Retour aux catégories</button>
        {/* Contenu... */}
      </div>
    </>
  );
}

export default IntelligenceSection;
```

Puis dans BlogPage.tsx :
```tsx
import IntelligenceSection from './IntelligenceSection';

// Dans le composant
if (selectedCategory === 'Intelligence') {
  return <IntelligenceSection onBack={() => setSelectedCategory(null)} />;
}
```

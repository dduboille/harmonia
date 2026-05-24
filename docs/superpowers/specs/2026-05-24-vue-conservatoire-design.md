# Vue Conservatoire — Design Spec

**Date:** 2026-05-24

## Objectif

Enrichir les 9 composants de cours (`Cours1.tsx` à `Cours9.tsx`) avec un onglet supplémentaire "🎓 Conservatoire" contenant 6 sous-sections pédagogiques par cours. Les données sont centralisées dans un fichier de données, le rendu dans un composant partagé.

## Architecture

### Approche choisie : Centralisée (C)
- **`src/data/conservatoireData.ts`** — source unique de vérité pour tout le contenu des 9 cours
- **`src/components/VueConservatoire.tsx`** — composant partagé, reçoit `courseNum` comme prop
- **Chaque `CoursX.tsx`** — 3 modifications légères uniquement
- **6 fichiers JSON i18n** — ajout de la clé `"conservatoire"` dans `sections`

## Structure des données

```ts
interface CoursPieceData {
  titre: string;
  compositeur: string;
  notes: string[];  // noms de notes MIDI-style pour PianoPlayer
}

interface CoursConservatoireData {
  intuition: string;               // paragraphe d'accroche
  reference: {
    badge: string;                 // ex. "Dubois · Traité de Contrepoint"
    citation: string;              // citation exacte
    auteur: string;                // ex. "Théodore Dubois, 1901"
  };
  voix: string[];                  // règles DEM, liste à puces
  repertoire: CoursPieceData;      // œuvre réelle + notes jouables
  pieges: Array<{
    erreur: string;                // ✗ description de l'erreur
    correction: string;            // ✓ correction
  }>;
  resume: string[];                // puces synthèse, fond #1a1a1a
}

export const CONSERVATOIRE_DATA: Record<`cours${1|2|3|4|5|6|7|8|9}`, CoursConservatoireData>
```

## Composant VueConservatoire

**Props :** `{ courseNum: 1|2|3|4|5|6|7|8|9 }`

**Rendu — 6 blocs empilés verticalement, accent `#2D5A8E` :**

1. **Intuition musicale** — fond `#EEF3FA`, texte paragraphe, label "INTUITION MUSICALE"
2. **Référence pédagogique** — badge auteur en `#2D5A8E`, citation en italique, lien vers `/[locale]/cursus`
3. **Conduite des voix** — liste à puces des règles DEM
4. **Exemple du répertoire** — carte avec titre/compositeur, bouton "Écouter" (PianoPlayer via ref masqué)
5. **Pièges fréquents** — liste ✗/✓ avec couleurs rouge/vert
6. **Résumé conservatoire** — fond `#1a1a1a`, texte blanc, puces `#BA7517`

100% inline styles, aucun Tailwind. Locale récupérée via `useParams()`.

## Modifications CoursX.tsx (x9)

Chaque fichier reçoit exactement 3 modifications :
1. `SECTIONS_IDS` — ajouter `"conservatoire"` avant `"quiz"`
2. Import : `import { VueConservatoire } from "@/components/VueConservatoire"`
3. Rendu section : `{activeSection === "conservatoire" && <VueConservatoire courseNum={X} />}`

## i18n (x6 fichiers)

Dans chaque `messages/[locale].json`, pour les clés `cours1` à `cours9`, ajouter dans l'objet `sections` :
```json
"conservatoire": "🎓 Conservatoire"
```

## Contenu par cours

### cours1 — Fondements & Gammes
- **Intuition :** "Avant toute théorie, la gamme est une expérience physique — sentir la tension des demi-tons et la résolution vers la tonique."
- **Référence :** Dubois · Traité d'Harmonie | "La gamme est l'alphabet du musicien ; sans elle, nulle phrase ne peut s'écrire." — Théodore Dubois, 1901
- **Voix :** ["Les demi-tons diatoniques (mi–fa, si–do) créent les tensions harmoniques fondamentales", "Chaque degré possède une fonction : tonique, dominante, sous-dominante", "La sensible (VII) monte obligatoirement vers la tonique à la voix de soprano"]
- **Répertoire :** Bach, Prélude en Do majeur BWV 846 — notes: ["C4","E4","G4","C5","E5","G4","C5","E5"]
- **Pièges :** [{ erreur: "Utiliser la gamme mineure naturelle à la dominante", correction: "Toujours élever la sensible (VII#) dans le contexte harmonique mineur" }]
- **Résumé :** ["Gamme = 7 degrés, 2 demi-tons diatoniques", "Sensible obligatoirement ascendante", "Modes grecs dérivés des rotations de la gamme majeure"]

### cours2 — Accords & Triades
- **Intuition :** "Un accord n'est pas une superposition de notes mais une tension entre elles — comprendre les intervalles, c'est entendre l'harmonie avant de la lire."
- **Référence :** Piston · Harmony | "Every chord has a personality determined by the intervals it contains." — Walter Piston, 1941
- **Voix :** ["L'accord de dominante (V) contient le triton si–fa qui résout sur l'accord de tonique", "Les quintes et octaves parallèles entre voix sont interdites", "Doubler la fondamentale à l'état fondamental, la tierce en premier renversement"]
- **Répertoire :** Beethoven, Sonate op.13 'Pathétique' mvt.II — notes: ["Ab4","C5","Eb5","Ab5","C5","Eb5","Ab4","C5"]
- **Pièges :** [{ erreur: "Doubler la tierce de l'accord de dominante (sensible)", correction: "Doubler la fondamentale ou la quinte, jamais la sensible" }]
- **Résumé :** ["Triade = fondamentale + tierce + quinte", "Accord parfait majeur : tierce M + quinte J", "Renversements : 1er (tierce basse), 2e (quinte basse)"]

### cours3 — Harmonie Fonctionnelle
- **Intuition :** "La fonction harmonique, c'est le rôle dramaturgique de chaque accord dans le discours musical — tonique repose, dominante tend, sous-dominante prépare."
- **Référence :** Schönberg · Harmonielehre | "Die Harmonie ist nicht Selbstzweck, sondern Mittel des Ausdrucks." — Arnold Schönberg, 1911
- **Voix :** ["La progression authentique V–I est la cadence par excellence", "La cadence plagale IV–I conclut en douceur (amen cadence)", "Éviter les mouvements de basse par triton non résolu"]
- **Répertoire :** Mozart, Symphonie n°40 KV550, mvt.I — notes: ["D4","Eb4","D4","C4","Bb3","G3","Bb3","D4"]
- **Pièges :** [{ erreur: "Enchaîner IV–V–IV (retour arrière fonctionnel)", correction: "Respecter le sens tonal : T → S → D → T" }]
- **Résumé :** ["Fonctions : Tonique (I, III, VI), Dominante (V, VII), Sous-dominante (II, IV)", "Cadence authentique V–I = clôture forte", "Le triton dans V7 résout : si→do, fa→mi"]

### cours4 — Cadences & Progressions
- **Intuition :** "La cadence est la ponctuation du discours musical — une virgule, un point-virgule, un point final selon son type."
- **Référence :** Aldwell & Schachter · Harmony and Voice Leading | "Cadences articulate musical form at every level, from the phrase to the whole composition." — Aldwell & Schachter, 2003
- **Voix :** ["La cadence parfaite (V–I) exige la fondamentale à la basse ET au soprano", "La cadence imparfaite (V–I avec tierce au soprano) conclut moins définitivement", "La cadence rompue (V–VI) déjoue l'attente — usage expressif"]
- **Répertoire :** Bach, Choral BWV 227 'Jesu, meine Freude' — notes: ["E4","F#4","G4","A4","B4","A4","G4","F#4","E4"]
- **Pièges :** [{ erreur: "Placer une cadence rompue en fin de pièce", correction: "La cadence rompue relance le discours — réserver la cadence parfaite aux conclusions" }]
- **Résumé :** ["4 cadences : parfaite, imparfaite, demi-cadence (I–V), rompue (V–VI)", "Cadence parfaite = accord de tonique en position fondamentale", "La cadence structure la forme : période, section, mouvement"]

### cours5 — Modes & Emprunts
- **Intuition :** "L'emprunt modal est le clair-obscur de l'harmonie tonale — une note étrangère qui colore sans rompre la tonalité."
- **Référence :** Gallon & Truchot · Précis d'harmonie | "L'emprunt est une modulation avortée qui enrichit la palette harmonique sans quitter la tonalité." — Jean Gallon, 1947
- **Voix :** ["L'accord de sixte napolitaine (bII en 1er renversement) prépare la dominante", "Les accords de région mineure (bVI, bVII) s'empruntent fréquemment en majeur", "Résoudre les altérations chromatiques dans le sens de leur tension"]
- **Répertoire :** Schubert, Sonate D.845 mvt.I — notes: ["A3","C4","E4","A4","F4","A4","C5","E5"]
- **Pièges :** [{ erreur: "Emprunter sans résoudre les altérations", correction: "Toute note empruntée crée une tension qui doit se résoudre dans les voix concernées" }]
- **Résumé :** ["Emprunt = accord d'une tonalité parallèle ou relative", "Sixte napolitaine : bII6 → V → I", "Région modale : accords majeurs sur degrés naturellement mineurs"]

### cours6 — Notes étrangères & Ornementation
- **Intuition :** "Les notes étrangères sont le poivre de l'harmonie — elles créent la dissonance qui rend la consonance désirable."
- **Référence :** Piston · Harmony | "Non-harmonic tones are the spice of musical texture; used with discretion they add variety and forward motion." — Walter Piston, 1941
- **Voix :** ["Le retard (suspension) se prépare consonante, frappe dissonante, résout descendante", "La pédale de tonique ou dominante peut supporter des harmonies étrangères", "Les broderies (notes auxiliaires) ne doublent jamais la basse en leur point de dissonance"]
- **Répertoire :** Chopin, Nocturne op.9 n°2 — notes: ["Eb4","G4","Bb4","Eb5","D5","C5","Bb4","Ab4","G4"]
- **Pièges :** [{ erreur: "Résoudre une suspension vers le haut", correction: "La suspension résout toujours par mouvement descendant (sauf rares exceptions baroques)" }]
- **Résumé :** ["Notes étrangères : passage, broderie, retard, anticipation, échappée, cambiata", "Retard : préparation → dissonance → résolution", "Pédale : note tenue sous harmonies changeantes"]

### cours7 — Modulation & Dominantes secondaires
- **Intuition :** "La dominante secondaire est un rayon de soleil dans une autre tonalité — elle tonicise momentanément un degré sans vraiment moduler."
- **Référence :** Levine · The Jazz Theory Book | "Secondary dominants temporarily tonicize scale degrees, creating harmonic color without full modulation." — Mark Levine, 1995
- **Voix :** ["V/V (dominante de la dominante) rehausse la cadence authentique", "Chaque degré sauf VII peut être précédé de sa dominante secondaire", "Les dominantes secondaires introduisent des altérations chromatiques à résoudre"]
- **Répertoire :** Brahms, Intermezzo op.118 n°2 — notes: ["A4","C#5","E5","A5","G#5","F#5","E5","D5","C#5"]
- **Pièges :** [{ erreur: "Appliquer V/IV en majeur (produit un accord de IV mineur inattendu)", correction: "Vérifier la qualité de l'accord tonicisé avant d'appliquer la dominante secondaire" }]
- **Résumé :** ["V7/X → X : tonicisation temporaire", "Altérations toujours résolues dans le sens chromatique", "Fréquents en jazz et musique de la période romantique"]

### cours8 — Modulation par accord pivot
- **Intuition :** "L'accord pivot est le pont entre deux tonalités — le même accord, deux fonctions, une transition imperceptible."
- **Référence :** Aldwell & Schachter · Harmony and Voice Leading | "The pivot chord belongs to both keys simultaneously, making the modulation smooth and logical." — Aldwell & Schachter, 2003
- **Voix :** ["Choisir le pivot parmi les accords communs aux deux tonalités", "Confirmer la nouvelle tonalité par une cadence authentique après le pivot", "La modulation aux tonalités voisines (±1 dièse/bémol) est la plus fluide"]
- **Répertoire :** Beethoven, Sonate op.27 n°2 'Clair de Lune' mvt.I — notes: ["C#4","E4","G#4","C#5","E5","G#4","C#5","E5","G#5"]
- **Pièges :** [{ erreur: "Utiliser un accord diminué comme pivot (ambiguïté trop grande)", correction: "Préférer des accords majeurs ou mineurs comme pivot pour garantir la clarté tonale" }]
- **Résumé :** ["Accord pivot = commun à la tonalité de départ et d'arrivée", "Modulations proches : relatives, parallèles, quinte supérieure/inférieure", "Toujours confirmer par cadence dans la nouvelle tonalité"]

### cours9 — Chromatisme avancé & Marches harmoniques
- **Intuition :** "La marche harmonique est la répétition d'un motif mélodico-harmonique à intervalles réguliers — elle crée une logique interne perceptible même sans connaissance théorique."
- **Référence :** Schönberg · Harmonielehre | "Sequences are the most powerful tool of tonal development; they generate both expectation and surprise." — Arnold Schönberg, 1911
- **Voix :** ["La marche harmonique (séquence) se transpose à la même qualité d'intervalle", "Les marches tonales maintiennent la tonalité ; les marches réelles la quittent", "Les pédaliers (notes communes) fondent les transitions chromatiques"]
- **Répertoire :** Bach, Chaconne BWV 1004 — notes: ["D4","A3","F4","D4","C#4","A3","E4","C#4"]
- **Pièges :** [{ erreur: "Réaliser une marche réelle en conservant toutes les altérations du ton initial", correction: "La marche réelle transpose exactement les intervalles ; les altérations changent selon le degré" }]
- **Résumé :** ["Marche tonale : transposition dans le même ton (intervalles diatoniques)", "Marche réelle : transposition exacte (intervalles chromatiques identiques)", "Chromatisme : altérations non diatoniques enrichissant l'harmonie sans moduler"]

## Règles d'implémentation

- 100% inline styles, aucun Tailwind
- Ne pas modifier les sections/quiz existants
- `npm run build` + `tsc --noEmit` avant chaque commit
- `vercel --prod` après validation finale
- Couleur accent : `#2D5A8E` (bleu conservatoire)
- `SECTIONS_IDS` : insérer `"conservatoire"` avant `"quiz"` (avant-dernier)

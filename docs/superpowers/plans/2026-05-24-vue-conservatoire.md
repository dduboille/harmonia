# Vue Conservatoire Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ajouter un onglet "🎓 Conservatoire" avec 6 sous-sections pédagogiques dans chacun des 9 composants Cours.

**Architecture:** Un fichier de données centralisé (`conservatoireData.ts`) alimente un composant partagé (`VueConservatoire.tsx`). Chaque CoursX reçoit 3 modifications minimales (SECTIONS_IDS + import + rendu). 6 fichiers i18n reçoivent la clé `"conservatoire"` dans chaque cours.

**Tech Stack:** Next.js App Router, TypeScript, next-intl, PianoPlayer (useRef), 100% inline styles.

---

## Fichiers touchés

| Action | Fichier | Responsabilité |
|--------|---------|----------------|
| Create | `src/data/conservatoireData.ts` | Toutes les données des 9 cours (intuition, référence, voix, répertoire, pièges, résumé) |
| Create | `src/components/VueConservatoire.tsx` | Rendu des 6 sous-sections, PianoPlayer interne, lien vers /cursus |
| Modify | `src/components/Cours1.tsx` | +1 section ID, +1 import, +1 bloc de rendu |
| Modify | `src/components/Cours2.tsx` | idem |
| Modify | `src/components/Cours3.tsx` | idem |
| Modify | `src/components/Cours4.tsx` | idem |
| Modify | `src/components/Cours5.tsx` | idem |
| Modify | `src/components/Cours6.tsx` | idem |
| Modify | `src/components/Cours7.tsx` | idem |
| Modify | `src/components/Cours8.tsx` | idem |
| Modify | `src/components/Cours9.tsx` | idem |
| Modify | `messages/fr.json` | `"conservatoire"` dans sections de cours1–9 |
| Modify | `messages/en.json` | idem |
| Modify | `messages/es.json` | idem |
| Modify | `messages/de.json` | idem |
| Modify | `messages/it.json` | idem |
| Modify | `messages/pt.json` | idem |

---

## Task 1 : `src/data/conservatoireData.ts`

**Files:**
- Create: `src/data/conservatoireData.ts`

- [ ] **Step 1 : Créer le fichier de données**

```ts
export interface CoursPieceData {
  titre: string;
  compositeur: string;
  notes: string[]; // format "C4", "F#3", "G#5"
}

export interface CoursConservatoireData {
  intuition: string;
  reference: {
    badge: string;
    citation: string;
    auteur: string;
  };
  voix: string[];
  repertoire: CoursPieceData;
  pieges: Array<{ erreur: string; correction: string }>;
  resume: string[];
}

export const CONSERVATOIRE_DATA: Record<`cours${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`, CoursConservatoireData> = {
  cours1: {
    intuition:
      "Avant toute théorie, la gamme est une expérience physique — sentir la tension des demi-tons et la résolution vers la tonique.",
    reference: {
      badge: "Dubois · Traité d'Harmonie",
      citation: "La gamme est l'alphabet du musicien ; sans elle, nulle phrase ne peut s'écrire.",
      auteur: "Théodore Dubois, 1901",
    },
    voix: [
      "Les demi-tons diatoniques (mi–fa, si–do) créent les tensions harmoniques fondamentales",
      "Chaque degré possède une fonction : tonique, dominante, sous-dominante",
      "La sensible (VII) monte obligatoirement vers la tonique à la voix de soprano",
    ],
    repertoire: {
      titre: "Prélude en Do majeur BWV 846",
      compositeur: "J.S. Bach",
      notes: ["C4", "E4", "G4", "C5", "E5", "G4", "C5", "E5"],
    },
    pieges: [
      {
        erreur: "Utiliser la gamme mineure naturelle à la dominante",
        correction: "Toujours élever la sensible (VII#) dans le contexte harmonique mineur",
      },
    ],
    resume: [
      "Gamme = 7 degrés, 2 demi-tons diatoniques",
      "Sensible obligatoirement ascendante",
      "Modes grecs dérivés des rotations de la gamme majeure",
    ],
  },
  cours2: {
    intuition:
      "Un accord n'est pas une superposition de notes mais une tension entre elles — comprendre les intervalles, c'est entendre l'harmonie avant de la lire.",
    reference: {
      badge: "Piston · Harmony",
      citation: "Every chord has a personality determined by the intervals it contains.",
      auteur: "Walter Piston, 1941",
    },
    voix: [
      "L'accord de dominante (V) contient le triton si–fa qui résout sur l'accord de tonique",
      "Les quintes et octaves parallèles entre voix sont interdites",
      "Doubler la fondamentale à l'état fondamental, la tierce en premier renversement",
    ],
    repertoire: {
      titre: "Sonate op.13 'Pathétique' mvt.II",
      compositeur: "L. van Beethoven",
      notes: ["G#4", "C5", "D#5", "G#5", "C5", "D#5", "G#4", "C5"],
    },
    pieges: [
      {
        erreur: "Doubler la tierce de l'accord de dominante (sensible)",
        correction: "Doubler la fondamentale ou la quinte, jamais la sensible",
      },
    ],
    resume: [
      "Triade = fondamentale + tierce + quinte",
      "Accord parfait majeur : tierce M + quinte J",
      "Renversements : 1er (tierce basse), 2e (quinte basse)",
    ],
  },
  cours3: {
    intuition:
      "La fonction harmonique, c'est le rôle dramaturgique de chaque accord dans le discours musical — tonique repose, dominante tend, sous-dominante prépare.",
    reference: {
      badge: "Schönberg · Harmonielehre",
      citation: "Die Harmonie ist nicht Selbstzweck, sondern Mittel des Ausdrucks.",
      auteur: "Arnold Schönberg, 1911",
    },
    voix: [
      "La progression authentique V–I est la cadence par excellence",
      "La cadence plagale IV–I conclut en douceur (amen cadence)",
      "Éviter les mouvements de basse par triton non résolu",
    ],
    repertoire: {
      titre: "Symphonie n°40 KV550, mvt.I",
      compositeur: "W.A. Mozart",
      notes: ["D4", "D#4", "D4", "C4", "A#3", "G3", "A#3", "D4"],
    },
    pieges: [
      {
        erreur: "Enchaîner IV–V–IV (retour arrière fonctionnel)",
        correction: "Respecter le sens tonal : T → S → D → T",
      },
    ],
    resume: [
      "Fonctions : Tonique (I, III, VI), Dominante (V, VII), Sous-dominante (II, IV)",
      "Cadence authentique V–I = clôture forte",
      "Le triton dans V7 résout : si→do, fa→mi",
    ],
  },
  cours4: {
    intuition:
      "La cadence est la ponctuation du discours musical — une virgule, un point-virgule, un point final selon son type.",
    reference: {
      badge: "Aldwell & Schachter · Harmony and Voice Leading",
      citation: "Cadences articulate musical form at every level, from the phrase to the whole composition.",
      auteur: "Aldwell & Schachter, 2003",
    },
    voix: [
      "La cadence parfaite (V–I) exige la fondamentale à la basse ET au soprano",
      "La cadence imparfaite (V–I avec tierce au soprano) conclut moins définitivement",
      "La cadence rompue (V–VI) déjoue l'attente — usage expressif",
    ],
    repertoire: {
      titre: "Choral BWV 227 'Jesu, meine Freude'",
      compositeur: "J.S. Bach",
      notes: ["E4", "F#4", "G4", "A4", "B4", "A4", "G4", "F#4", "E4"],
    },
    pieges: [
      {
        erreur: "Placer une cadence rompue en fin de pièce",
        correction: "La cadence rompue relance le discours — réserver la cadence parfaite aux conclusions",
      },
    ],
    resume: [
      "4 cadences : parfaite, imparfaite, demi-cadence (I–V), rompue (V–VI)",
      "Cadence parfaite = accord de tonique en position fondamentale",
      "La cadence structure la forme : période, section, mouvement",
    ],
  },
  cours5: {
    intuition:
      "L'emprunt modal est le clair-obscur de l'harmonie tonale — une note étrangère qui colore sans rompre la tonalité.",
    reference: {
      badge: "Gallon & Truchot · Précis d'harmonie",
      citation: "L'emprunt est une modulation avortée qui enrichit la palette harmonique sans quitter la tonalité.",
      auteur: "Jean Gallon, 1947",
    },
    voix: [
      "L'accord de sixte napolitaine (bII en 1er renversement) prépare la dominante",
      "Les accords de région mineure (bVI, bVII) s'empruntent fréquemment en majeur",
      "Résoudre les altérations chromatiques dans le sens de leur tension",
    ],
    repertoire: {
      titre: "Sonate D.845 mvt.I",
      compositeur: "F. Schubert",
      notes: ["A3", "C4", "E4", "A4", "F4", "A4", "C5", "E5"],
    },
    pieges: [
      {
        erreur: "Emprunter sans résoudre les altérations",
        correction: "Toute note empruntée crée une tension qui doit se résoudre dans les voix concernées",
      },
    ],
    resume: [
      "Emprunt = accord d'une tonalité parallèle ou relative",
      "Sixte napolitaine : bII6 → V → I",
      "Région modale : accords majeurs sur degrés naturellement mineurs",
    ],
  },
  cours6: {
    intuition:
      "Les notes étrangères sont le poivre de l'harmonie — elles créent la dissonance qui rend la consonance désirable.",
    reference: {
      badge: "Piston · Harmony",
      citation:
        "Non-harmonic tones are the spice of musical texture; used with discretion they add variety and forward motion.",
      auteur: "Walter Piston, 1941",
    },
    voix: [
      "Le retard (suspension) se prépare consonante, frappe dissonante, résout descendante",
      "La pédale de tonique ou dominante peut supporter des harmonies étrangères",
      "Les broderies (notes auxiliaires) ne doublent jamais la basse en leur point de dissonance",
    ],
    repertoire: {
      titre: "Nocturne op.9 n°2",
      compositeur: "F. Chopin",
      notes: ["D#4", "G4", "A#4", "D#5", "D5", "C5", "A#4", "G#4", "G4"],
    },
    pieges: [
      {
        erreur: "Résoudre une suspension vers le haut",
        correction: "La suspension résout toujours par mouvement descendant (sauf rares exceptions baroques)",
      },
    ],
    resume: [
      "Notes étrangères : passage, broderie, retard, anticipation, échappée, cambiata",
      "Retard : préparation → dissonance → résolution",
      "Pédale : note tenue sous harmonies changeantes",
    ],
  },
  cours7: {
    intuition:
      "La dominante secondaire est un rayon de soleil dans une autre tonalité — elle tonicise momentanément un degré sans vraiment moduler.",
    reference: {
      badge: "Levine · The Jazz Theory Book",
      citation:
        "Secondary dominants temporarily tonicize scale degrees, creating harmonic color without full modulation.",
      auteur: "Mark Levine, 1995",
    },
    voix: [
      "V/V (dominante de la dominante) rehausse la cadence authentique",
      "Chaque degré sauf VII peut être précédé de sa dominante secondaire",
      "Les dominantes secondaires introduisent des altérations chromatiques à résoudre",
    ],
    repertoire: {
      titre: "Intermezzo op.118 n°2",
      compositeur: "J. Brahms",
      notes: ["A4", "C#5", "E5", "A5", "G#5", "F#5", "E5", "D5", "C#5"],
    },
    pieges: [
      {
        erreur: "Appliquer V/IV en majeur (produit un accord de IV mineur inattendu)",
        correction: "Vérifier la qualité de l'accord tonicisé avant d'appliquer la dominante secondaire",
      },
    ],
    resume: [
      "V7/X → X : tonicisation temporaire",
      "Altérations toujours résolues dans le sens chromatique",
      "Fréquents en jazz et musique de la période romantique",
    ],
  },
  cours8: {
    intuition:
      "L'accord pivot est le pont entre deux tonalités — le même accord, deux fonctions, une transition imperceptible.",
    reference: {
      badge: "Aldwell & Schachter · Harmony and Voice Leading",
      citation:
        "The pivot chord belongs to both keys simultaneously, making the modulation smooth and logical.",
      auteur: "Aldwell & Schachter, 2003",
    },
    voix: [
      "Choisir le pivot parmi les accords communs aux deux tonalités",
      "Confirmer la nouvelle tonalité par une cadence authentique après le pivot",
      "La modulation aux tonalités voisines (±1 dièse/bémol) est la plus fluide",
    ],
    repertoire: {
      titre: "Sonate op.27 n°2 'Clair de Lune' mvt.I",
      compositeur: "L. van Beethoven",
      notes: ["C#4", "E4", "G#4", "C#5", "E5", "G#4", "C#5", "E5", "G#5"],
    },
    pieges: [
      {
        erreur: "Utiliser un accord diminué comme pivot (ambiguïté trop grande)",
        correction: "Préférer des accords majeurs ou mineurs comme pivot pour garantir la clarté tonale",
      },
    ],
    resume: [
      "Accord pivot = commun à la tonalité de départ et d'arrivée",
      "Modulations proches : relatives, parallèles, quinte supérieure/inférieure",
      "Toujours confirmer par cadence dans la nouvelle tonalité",
    ],
  },
  cours9: {
    intuition:
      "La marche harmonique est la répétition d'un motif mélodico-harmonique à intervalles réguliers — elle crée une logique interne perceptible même sans connaissance théorique.",
    reference: {
      badge: "Schönberg · Harmonielehre",
      citation:
        "Sequences are the most powerful tool of tonal development; they generate both expectation and surprise.",
      auteur: "Arnold Schönberg, 1911",
    },
    voix: [
      "La marche harmonique (séquence) se transpose à la même qualité d'intervalle",
      "Les marches tonales maintiennent la tonalité ; les marches réelles la quittent",
      "Les pédaliers (notes communes) fondent les transitions chromatiques",
    ],
    repertoire: {
      titre: "Chaconne BWV 1004",
      compositeur: "J.S. Bach",
      notes: ["D4", "A3", "F4", "D4", "C#4", "A3", "E4", "C#4"],
    },
    pieges: [
      {
        erreur: "Réaliser une marche réelle en conservant toutes les altérations du ton initial",
        correction:
          "La marche réelle transpose exactement les intervalles ; les altérations changent selon le degré",
      },
    ],
    resume: [
      "Marche tonale : transposition dans le même ton (intervalles diatoniques)",
      "Marche réelle : transposition exacte (intervalles chromatiques identiques)",
      "Chromatisme : altérations non diatoniques enrichissant l'harmonie sans moduler",
    ],
  },
};
```

- [ ] **Step 2 : Vérifier TypeScript**

```powershell
npx tsc --noEmit
```

Expected: no output (= no errors).

- [ ] **Step 3 : Commit**

```powershell
git add src/data/conservatoireData.ts
git commit -m "feat: conservatoireData — données pédagogiques cours1-9"
```

---

## Task 2 : `src/components/VueConservatoire.tsx`

**Files:**
- Create: `src/components/VueConservatoire.tsx`

- [ ] **Step 1 : Créer le composant**

```tsx
"use client";

import React, { useRef, useCallback } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import { CONSERVATOIRE_DATA } from "@/data/conservatoireData";

const ACCENT = "#2D5A8E";
const ACCENT_BG = "#EEF3FA";

function parseNote(s: string): [string, number] {
  const m = s.match(/^([A-G]#?)(\d)$/);
  return m ? [m[1], parseInt(m[2])] : ["C", 4];
}

export function VueConservatoire({ courseNum }: { courseNum: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 }) {
  const params = useParams();
  const locale = (params?.locale as string) ?? "fr";
  const data = CONSERVATOIRE_DATA[`cours${courseNum}`];
  const pianoRef = useRef<PianoPlayerRef>(null);

  const playRepertoire = useCallback(() => {
    data.repertoire.notes.forEach((n, i) => {
      const [note, octave] = parseNote(n);
      setTimeout(() => pianoRef.current?.playNote(note, octave, { duration: 0.8 }), i * 380);
    });
  }, [data.repertoire.notes]);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      {/* PianoPlayer masqué */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={3} startOctave={3} showLabels={false} />
      </div>

      {/* 1. Intuition musicale */}
      <div style={{ background: ACCENT_BG, borderRadius: 10, padding: "16px 20px", marginBottom: 12 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: ACCENT, letterSpacing: "0.1em", marginBottom: 8, textTransform: "uppercase" as const }}>
          Intuition musicale
        </div>
        <p style={{ fontSize: 14, color: "#1a1a1a", lineHeight: 1.75, margin: 0 }}>
          {data.intuition}
        </p>
      </div>

      {/* 2. Référence pédagogique */}
      <div style={{ border: `0.5px solid ${ACCENT}`, borderRadius: 10, padding: "16px 20px", marginBottom: 12 }}>
        <div style={{ display: "inline-block", background: ACCENT, color: "#fff", fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 20, marginBottom: 10, letterSpacing: "0.05em" }}>
          {data.reference.badge}
        </div>
        <p style={{ fontSize: 14, color: "#333", lineHeight: 1.75, fontStyle: "italic", margin: "0 0 8px" }}>
          « {data.reference.citation} »
        </p>
        <p style={{ fontSize: 12, color: "#888", margin: "0 0 10px" }}>— {data.reference.auteur}</p>
        <Link href={`/${locale}/cursus`} style={{ fontSize: 12, color: ACCENT, textDecoration: "none", fontWeight: 600 }}>
          Voir le cursus conservatoire →
        </Link>
      </div>

      {/* 3. Conduite des voix */}
      <div style={{ background: "#fff", border: "0.5px solid #e0dbd3", borderRadius: 10, padding: "16px 20px", marginBottom: 12 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: ACCENT, letterSpacing: "0.1em", marginBottom: 10, textTransform: "uppercase" as const }}>
          Conduite des voix · Règles DEM
        </div>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          {data.voix.map((rule, i) => (
            <li key={i} style={{ fontSize: 13, color: "#333", lineHeight: 1.7, marginBottom: 4 }}>
              {rule}
            </li>
          ))}
        </ul>
      </div>

      {/* 4. Exemple du répertoire */}
      <div style={{ background: "#fff", border: "0.5px solid #e0dbd3", borderRadius: 10, padding: "16px 20px", marginBottom: 12 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: ACCENT, letterSpacing: "0.1em", marginBottom: 10, textTransform: "uppercase" as const }}>
          Exemple du répertoire
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: 10 }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#1a1a1a" }}>{data.repertoire.titre}</div>
            <div style={{ fontSize: 13, color: "#666", marginTop: 2 }}>{data.repertoire.compositeur}</div>
          </div>
          <button
            onClick={playRepertoire}
            style={{ fontSize: 12, padding: "6px 16px", border: `0.5px solid ${ACCENT}`, borderRadius: 20, cursor: "pointer", background: ACCENT_BG, color: ACCENT, fontFamily: "system-ui, sans-serif" }}
          >
            ▶ Écouter
          </button>
        </div>
      </div>

      {/* 5. Pièges fréquents */}
      <div style={{ background: "#fff", border: "0.5px solid #e0dbd3", borderRadius: 10, padding: "16px 20px", marginBottom: 12 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: ACCENT, letterSpacing: "0.1em", marginBottom: 10, textTransform: "uppercase" as const }}>
          Pièges fréquents
        </div>
        {data.pieges.map((p, i) => (
          <div key={i} style={{ marginBottom: i < data.pieges.length - 1 ? 12 : 0 }}>
            <div style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 4 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#C0392B", minWidth: 16 }}>✗</span>
              <span style={{ fontSize: 13, color: "#C0392B", lineHeight: 1.6 }}>{p.erreur}</span>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#0F6E56", minWidth: 16 }}>✓</span>
              <span style={{ fontSize: 13, color: "#0F6E56", lineHeight: 1.6 }}>{p.correction}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 6. Résumé conservatoire */}
      <div style={{ background: "#1a1a1a", borderRadius: 10, padding: "16px 20px" }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: "#BA7517", letterSpacing: "0.1em", marginBottom: 10, textTransform: "uppercase" as const }}>
          Résumé conservatoire
        </div>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          {data.resume.map((point, i) => (
            <li key={i} style={{ fontSize: 13, color: "#fff", lineHeight: 1.7, marginBottom: 4 }}>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
```

- [ ] **Step 2 : Vérifier TypeScript**

```powershell
npx tsc --noEmit
```

Expected: no output.

- [ ] **Step 3 : Commit**

```powershell
git add src/components/VueConservatoire.tsx
git commit -m "feat: VueConservatoire — composant 6 sous-sections pédagogiques"
```

---

## Task 3 : i18n — ajouter la clé `"conservatoire"` dans les 6 fichiers de messages

**Files:**
- Modify: `messages/fr.json`
- Modify: `messages/en.json`
- Modify: `messages/es.json`
- Modify: `messages/de.json`
- Modify: `messages/it.json`
- Modify: `messages/pt.json`

Pour chaque fichier, dans **chacun** des blocs `cours1` à `cours9`, à l'intérieur de l'objet `"sections"`, ajouter la clé `"conservatoire"` **avant** la clé `"quiz"` :

```json
"conservatoire": "🎓 Conservatoire",
```

La valeur est identique dans les 6 langues (terme international).

**Exemple avant (fr.json, cours1) :**
```json
"sections": {
  "origines": "Origines",
  "degres": "Les degrés",
  "tons": "Tons & demi-tons",
  "intervalles": "Intervalles",
  "quiz": "Entraînement"
}
```

**Exemple après :**
```json
"sections": {
  "origines": "Origines",
  "degres": "Les degrés",
  "tons": "Tons & demi-tons",
  "intervalles": "Intervalles",
  "conservatoire": "🎓 Conservatoire",
  "quiz": "Entraînement"
}
```

Faire la même modification pour cours2–cours9 dans chaque fichier (sections différentes, mais toujours ajouter `"conservatoire"` avant `"quiz"`).

- [ ] **Step 1 : Modifier `messages/fr.json`** — ajouter `"conservatoire": "🎓 Conservatoire"` avant `"quiz"` dans cours1, cours2, cours3, cours4, cours5, cours6, cours7, cours8, cours9.

- [ ] **Step 2 : Modifier `messages/en.json`** — même opération.

- [ ] **Step 3 : Modifier `messages/es.json`** — même opération.

- [ ] **Step 4 : Modifier `messages/de.json`** — même opération.

- [ ] **Step 5 : Modifier `messages/it.json`** — même opération.

- [ ] **Step 6 : Modifier `messages/pt.json`** — même opération.

- [ ] **Step 7 : Vérifier que le JSON est valide**

```powershell
node -e "['fr','en','es','de','it','pt'].forEach(l => { JSON.parse(require('fs').readFileSync('messages/'+l+'.json','utf8')); console.log(l,'OK') })"
```

Expected:
```
fr OK
en OK
es OK
de OK
it OK
pt OK
```

- [ ] **Step 8 : Vérifier que la clé est présente dans tous les cours et langues**

```powershell
node -e "const l=['fr','en','es','de','it','pt']; l.forEach(lc => { const f=JSON.parse(require('fs').readFileSync('messages/'+lc+'.json','utf8')); for(let i=1;i<=9;i++){const k='cours'+i; if(!f[k].sections.conservatoire) console.log('MISSING',lc,k);} console.log(lc,'all OK') })"
```

Expected: `fr all OK`, `en all OK`, etc. (no MISSING lines)

- [ ] **Step 9 : Commit**

```powershell
git add messages/fr.json messages/en.json messages/es.json messages/de.json messages/it.json messages/pt.json
git commit -m "feat: i18n — clé conservatoire dans sections cours1-9 (6 langues)"
```

---

## Task 4 : Modifier `Cours1.tsx` à `Cours9.tsx`

**Files:**
- Modify: `src/components/Cours1.tsx`
- Modify: `src/components/Cours2.tsx`
- Modify: `src/components/Cours3.tsx`
- Modify: `src/components/Cours4.tsx`
- Modify: `src/components/Cours5.tsx`
- Modify: `src/components/Cours6.tsx`
- Modify: `src/components/Cours7.tsx`
- Modify: `src/components/Cours8.tsx`
- Modify: `src/components/Cours9.tsx`

Chaque fichier reçoit exactement 3 modifications. Le pattern est identique.

### Cours1.tsx

- [ ] **Step 1 : Ajouter `"conservatoire"` dans SECTIONS_IDS**

Trouver :
```ts
const SECTIONS_IDS = ["origines","degres","tons","intervalles","quiz"] as const;
```
Remplacer par :
```ts
const SECTIONS_IDS = ["origines","degres","tons","intervalles","conservatoire","quiz"] as const;
```

- [ ] **Step 2 : Ajouter l'import VueConservatoire** (après les autres imports, par exemple après la ligne `import MaitreCard`)

```ts
import { VueConservatoire } from "@/components/VueConservatoire";
```

- [ ] **Step 3 : Ajouter le bloc de rendu** — juste avant `{/* ══ SECTION 5 : QUIZ ══ */}` (ou avant le bloc `{activeSection === "quiz" && ...}`)

```tsx
{activeSection === "conservatoire" && <VueConservatoire courseNum={1} />}
```

### Cours2.tsx

Note: Dans Cours2.tsx, `SECTIONS_IDS` est défini **à l'intérieur** de la fonction (indenté), et la variable d'état est `activeSection`.

- [ ] **Step 4 : SECTIONS_IDS** — dans le corps de la fonction, trouver la ligne indentée :

```ts
  const SECTIONS_IDS = ["triades","gamme","tetrades","renversements","quiz"] as const;
```
Remplacer par :
```ts
  const SECTIONS_IDS = ["triades","gamme","tetrades","renversements","conservatoire","quiz"] as const;
```

- [ ] **Step 5 : Import VueConservatoire** (après les imports existants en haut du fichier)

```ts
import { VueConservatoire } from "@/components/VueConservatoire";
```

- [ ] **Step 6 : Bloc de rendu** (avant `{activeSection === "quiz" && ...}`)

```tsx
{activeSection === "conservatoire" && <VueConservatoire courseNum={2} />}
```

### Cours3.tsx

Note: Dans Cours3.tsx, la variable d'état de section est **`sec`** (pas `activeSection`).

- [ ] **Step 7 : SECTIONS_IDS**

Trouver :
```ts
const SECTIONS_IDS = ["triton","fonctions","progressions","voix","quiz"] as const;
```
Remplacer par :
```ts
const SECTIONS_IDS = ["triton","fonctions","progressions","voix","conservatoire","quiz"] as const;
```

- [ ] **Step 8 : Import VueConservatoire**

```ts
import { VueConservatoire } from "@/components/VueConservatoire";
```

- [ ] **Step 9 : Bloc de rendu** (avant `{sec === "quiz" && ...}`)

```tsx
{sec === "conservatoire" && <VueConservatoire courseNum={3} />}
```

### Cours4.tsx

Note: variable d'état = `activeSection`.

- [ ] **Step 10 : SECTIONS_IDS**

Trouver :
```ts
const SECTIONS_IDS = ["cadences","progressions","quiz"] as const;
```
Remplacer par :
```ts
const SECTIONS_IDS = ["cadences","progressions","conservatoire","quiz"] as const;
```

- [ ] **Step 11 : Import VueConservatoire**

```ts
import { VueConservatoire } from "@/components/VueConservatoire";
```

- [ ] **Step 12 : Bloc de rendu** (avant `{activeSection === "quiz" && ...}`)

```tsx
{activeSection === "conservatoire" && <VueConservatoire courseNum={4} />}
```

### Cours5.tsx

Note: variable d'état = `activeSection`.

- [ ] **Step 13 : SECTIONS_IDS**

Trouver :
```ts
const SECTIONS_IDS = ["mineur","emprunts","classiques","quiz"] as const;
```
Remplacer par :
```ts
const SECTIONS_IDS = ["mineur","emprunts","classiques","conservatoire","quiz"] as const;
```

- [ ] **Step 14 : Import VueConservatoire**

```ts
import { VueConservatoire } from "@/components/VueConservatoire";
```

- [ ] **Step 15 : Bloc de rendu** (avant `{activeSection === "quiz" && ...}`)

```tsx
{activeSection === "conservatoire" && <VueConservatoire courseNum={5} />}
```

### Cours6.tsx

Note: variable d'état = **`sec`**.

- [ ] **Step 16 : SECTIONS_IDS**

Trouver :
```ts
const SECTIONS_IDS = ["tonal","etrangeres","squelette","accomp","quiz"] as const;
```
Remplacer par :
```ts
const SECTIONS_IDS = ["tonal","etrangeres","squelette","accomp","conservatoire","quiz"] as const;
```

- [ ] **Step 17 : Import VueConservatoire**

```ts
import { VueConservatoire } from "@/components/VueConservatoire";
```

- [ ] **Step 18 : Bloc de rendu** (avant `{sec === "quiz" && ...}`)

```tsx
{sec === "conservatoire" && <VueConservatoire courseNum={6} />}
```

### Cours7.tsx

Note: variable d'état = **`sec`**.

- [ ] **Step 19 : SECTIONS_IDS**

Trouver :
```ts
const SECTIONS_IDS = ["principe","secondaires","voisins","chaines","quiz"] as const;
```
Remplacer par :
```ts
const SECTIONS_IDS = ["principe","secondaires","voisins","chaines","conservatoire","quiz"] as const;
```

- [ ] **Step 20 : Import VueConservatoire**

```ts
import { VueConservatoire } from "@/components/VueConservatoire";
```

- [ ] **Step 21 : Bloc de rendu** (avant `{sec === "quiz" && ...}`)

```tsx
{sec === "conservatoire" && <VueConservatoire courseNum={7} />}
```

### Cours8.tsx

Note: variable d'état = **`sec`**.

- [ ] **Step 22 : SECTIONS_IDS**

Trouver :
```ts
const SECTIONS_IDS = ["logique","pivot","outils","exemples","quiz"] as const;
```
Remplacer par :
```ts
const SECTIONS_IDS = ["logique","pivot","outils","exemples","conservatoire","quiz"] as const;
```

- [ ] **Step 23 : Import VueConservatoire**

```ts
import { VueConservatoire } from "@/components/VueConservatoire";
```

- [ ] **Step 24 : Bloc de rendu** (avant `{sec === "quiz" && ...}`)

```tsx
{sec === "conservatoire" && <VueConservatoire courseNum={8} />}
```

### Cours9.tsx

Note: variable d'état = **`sec`**.

- [ ] **Step 25 : SECTIONS_IDS**

Trouver :
```ts
const SECTIONS_IDS = ["marche","notecom","minor","pedales","appog","quiz"] as const;
```
Remplacer par :
```ts
const SECTIONS_IDS = ["marche","notecom","minor","pedales","appog","conservatoire","quiz"] as const;
```

- [ ] **Step 26 : Import VueConservatoire**

```ts
import { VueConservatoire } from "@/components/VueConservatoire";
```

- [ ] **Step 27 : Bloc de rendu** (avant `{sec === "quiz" && ...}`)

```tsx
{sec === "conservatoire" && <VueConservatoire courseNum={9} />}
```

### Vérifications finales

- [ ] **Step 28 : TypeScript**

```powershell
npx tsc --noEmit
```

Expected: no output.

- [ ] **Step 29 : Build**

```powershell
npm run build
```

Expected: `✓ Compiled successfully` — aucune erreur, aucun warning TypeScript.

- [ ] **Step 30 : Commit**

```powershell
git add src/components/Cours1.tsx src/components/Cours2.tsx src/components/Cours3.tsx src/components/Cours4.tsx src/components/Cours5.tsx src/components/Cours6.tsx src/components/Cours7.tsx src/components/Cours8.tsx src/components/Cours9.tsx
git commit -m "feat: Cours1-9 — onglet Vue Conservatoire"
```

---

## Task 5 : Déploiement

- [ ] **Step 1 : Déployer en production**

```powershell
vercel --prod
```

Expected: URL de déploiement Vercel affichée. Vérifier manuellement sur `/fr/cours/1` (ou `/fr/atelier`) que l'onglet "🎓 Conservatoire" apparaît et que les 6 sous-sections s'affichent correctement.

- [ ] **Step 2 : Smoke test manuel**
  - Cliquer sur l'onglet "🎓 Conservatoire" dans Cours1 → les 6 blocs s'affichent
  - Cliquer "▶ Écouter" → la mélodie se joue
  - Cliquer "Voir le cursus conservatoire →" → redirige vers `/[locale]/cursus`
  - Les onglets existants (origines, quiz, etc.) fonctionnent toujours normalement
  - Vérifier au moins Cours1 et Cours9 (début et fin de séquence)

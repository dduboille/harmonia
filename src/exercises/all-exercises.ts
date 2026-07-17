/**
 * exercises/all-exercises.ts
 * Harmonia — Base de données des exercices niveau 1
 *
 * Convention notes : C D E F G A B + octave (ex: C4, Bb3, F#5)
 * Voix : soprano (S), alto (A), tenor (T), bass (B)
 * Tessitures : S=C4-G5, A=G3-C5, T=C3-G4, B=E2-C4
 */

import type { SATBExercise } from "@/types/exercise";

function n(name: string, octave: number) {
  return { name: name as any, octave };
}

// ════════════════════════════════════════════════════════════════════════════
// COURS 3 — Fonctions tonales et conduites de voix
// ════════════════════════════════════════════════════════════════════════════

const COURS3_EXERCISES: SATBExercise[] = [
  {
    id: "c3-iivi-c-position7351",
    type: "satb",
    cours: 3,
    title: "II–V–I en Do majeur",
    subtitle: "Conduite minimaliste · Position 7351",
    difficulty: 1,
    tags: ["II-V-I", "conduite minimaliste", "Do majeur", "positions"],
    keySignature: "C",
    measures: ["II · Dm7", "V · G7", "I · CMaj7"],
    solution: [
      { soprano: n("D",5), alto: n("F",4), tenor: n("A",3), bass: n("D",3) },
      { soprano: n("D",5), alto: n("F",4), tenor: n("G",3), bass: n("G",3) },
      { soprano: n("E",5), alto: n("E",4), tenor: n("G",3), bass: n("C",3) },
    ],
    hint: "De Dm7 à G7 : D et F restent en place — seuls A (→G) et C (→B) bougent.",
    explanation: "La conduite minimaliste exploite les 2 notes communes entre Dm7 et G7 (D et F). La résolution G7→CMaj7 suit les règles : B monte vers C (sensible), F descend vers E (septième de dominante).",
    concepts: ["notes communes", "sensible", "septième de dominante", "triton"],
  },
  {
    id: "c3-iivi-c-position3751",
    type: "satb",
    cours: 3,
    title: "II–V–I en Do majeur",
    subtitle: "Position 3751 — voix serrées",
    difficulty: 2,
    tags: ["II-V-I", "Do majeur", "positions", "voix serrées"],
    keySignature: "C",
    measures: ["II · Dm7", "V · G7", "I · CMaj7"],
    solution: [
      { soprano: n("F",4), alto: n("D",4), tenor: n("A",3), bass: n("D",3) },
      { soprano: n("F",4), alto: n("D",4), tenor: n("B",3), bass: n("G",3) },
      { soprano: n("E",4), alto: n("C",4), tenor: n("G",3), bass: n("C",3) },
    ],
    hint: "Au soprano : F reste en place de Dm7 à G7. Attention à la résolution F→E (septième de G7).",
    explanation: "Position 3751 du Dm7 : tierce au soprano. Les voix bougent par degrés conjoints. La résolution G7→I : F descend vers E, B monte vers C.",
    concepts: ["positions d'accord", "septième de dominante", "sensible", "voix serrées"],
  },
  {
    id: "c3-cadence-parfaite-c",
    type: "satb",
    cours: 3,
    title: "Cadence parfaite en Do majeur",
    subtitle: "G7 → C · État fondamental",
    difficulty: 1,
    tags: ["cadence parfaite", "Do majeur", "V7-I", "résolution"],
    keySignature: "C",
    measures: ["V7 · G7", "I · C"],
    solution: [
      { soprano: n("B",4), alto: n("F",4), tenor: n("D",4), bass: n("G",3) },
      { soprano: n("C",5), alto: n("E",4), tenor: n("C",4), bass: n("C",3) },
    ],
    hint: "B (sensible) doit monter vers C. F (septième) doit descendre vers E.",
    explanation: "Cadence parfaite : G7 et C tous deux à l'état fondamental. B→C (+½ ton, sensible), F→E (-½ ton, 7e de dominante). La quinte D peut aller vers C ou E. La quinte de C est supprimée (sucrée) pour éviter les problèmes.",
    concepts: ["cadence parfaite", "sensible", "septième de dominante", "sucrée de quinte"],
  },
  {
    id: "c3-cadence-rompue-c",
    type: "satb",
    cours: 3,
    title: "Cadence rompue en Do majeur",
    subtitle: "G7 → Am · Effet de surprise",
    difficulty: 2,
    tags: ["cadence rompue", "Do majeur", "V7-VI", "substitution"],
    keySignature: "C",
    measures: ["V7 · G7", "VI · Am"],
    solution: [
      { soprano: n("B",4), alto: n("F",4), tenor: n("D",4), bass: n("G",3) },
      { soprano: n("C",5), alto: n("E",4), tenor: n("C",4), bass: n("A",3) },
    ],
    hint: "La sensible B monte vers C comme dans une cadence parfaite — mais la basse va vers A au lieu de C.",
    explanation: "Cadence rompue : la sensible résout normalement (B→C), mais la basse surprend en allant vers A (VI) au lieu de C (I). Am remplace C comme tonique de substitution.",
    concepts: ["cadence rompue", "substitution diatonique", "tonique de substitution"],
  },
];

// ════════════════════════════════════════════════════════════════════════════
// COURS 4 — Cadences et progressions
// ════════════════════════════════════════════════════════════════════════════

const COURS4_EXERCISES: SATBExercise[] = [
  {
    id: "c4-cadence-parfaite-g",
    type: "satb",
    cours: 4,
    title: "Cadence parfaite en Sol majeur",
    subtitle: "D7 → G · Transposition",
    difficulty: 1,
    tags: ["cadence parfaite", "Sol majeur", "transposition"],
    keySignature: "G",
    measures: ["V7 · D7", "I · G"],
    solution: [
      { soprano: n("F#",4), alto: n("C",4), tenor: n("A",3), bass: n("D",3) },
      { soprano: n("G",4),  alto: n("B",3), tenor: n("G",3), bass: n("G",3) },
    ],
    hint: "En Sol majeur, la sensible est F#. Elle doit monter vers G. La septième C descend vers B.",
    explanation: "Même principe qu'en Do, transposé en Sol. F# (sensible) →G (+½), C (7e de D7) →B (-½). La quinte A peut rester ou descendre vers G.",
    concepts: ["cadence parfaite", "transposition", "sensible", "septième de dominante"],
  },
  {
    id: "c4-cadence-plagale-c",
    type: "satb",
    cours: 4,
    title: "Cadence plagale en Do majeur",
    subtitle: "F → C · Couleur Amen",
    difficulty: 1,
    tags: ["cadence plagale", "Do majeur", "IV-I"],
    keySignature: "C",
    measures: ["IV · F", "I · C"],
    solution: [
      { soprano: n("A",4), alto: n("F",4), tenor: n("C",4), bass: n("F",3) },
      { soprano: n("G",4), alto: n("E",4), tenor: n("C",4), bass: n("C",3) },
    ],
    hint: "La cadence plagale est douce — pas de triton à résoudre. Les voix descendent conjointement.",
    explanation: "F→C : pas de sensible ni de septième de dominante. Les voix bougent par degrés conjoints. A→G, F→E, C reste, F→C (basse, quinte descendante). Couleur 'Amen' douce et solennelle.",
    concepts: ["cadence plagale", "IV-I", "mouvement conjoint"],
  },
  {
    id: "c4-progression-t-sd-d-t",
    type: "satb",
    cours: 4,
    title: "Progression T – SD – D – T en Do",
    subtitle: "C – F – G7 – C · Progression fondamentale",
    difficulty: 1,
    tags: ["I-IV-V7-I", "Do majeur", "progression fondamentale"],
    keySignature: "C",
    measures: ["I · C", "IV · F", "V7 · G7", "I · C"],
    solution: [
      { soprano: n("E",5), alto: n("C",5), tenor: n("G",4), bass: n("C",3) },
      { soprano: n("F",5), alto: n("A",4), tenor: n("C",4), bass: n("F",3) },
      { soprano: n("D",5), alto: n("B",4), tenor: n("F",4), bass: n("G",3) },
      { soprano: n("E",5), alto: n("C",5), tenor: n("E",4), bass: n("C",3) },
    ],
    hint: "De C à F : E monte vers F (conjoint). De F à G7 : C reste (note commune), A→B, F reste. De G7 à C : B→C, F→E.",
    explanation: "I–IV–V7–I : la progression cadentielle fondamentale. Notes communes entre accords : C (commun à C et F), F (commun à F et G7). Résolution finale : sensible B→C, septième F→E.",
    concepts: ["I-IV-V7-I", "notes communes", "sensible", "septième de dominante", "progression fondamentale"],
  },
  {
    id: "c4-demi-cadence-c",
    type: "satb",
    cours: 4,
    title: "Demi-cadence en Do majeur",
    subtitle: "C – Am – G7 · Suspension",
    difficulty: 2,
    tags: ["demi-cadence", "Do majeur", "suspension"],
    keySignature: "C",
    measures: ["I · C", "VI · Am", "V7 · G7"],
    solution: [
      { soprano: n("E",5), alto: n("C",5), tenor: n("G",4), bass: n("C",3) },
      { soprano: n("E",5), alto: n("C",5), tenor: n("E",4), bass: n("A",3) },
      { soprano: n("F",5), alto: n("B",4), tenor: n("G",4), bass: n("G",3) },
    ],
    hint: "C→Am : E et C restent en place, seul G descend vers A (basse). Am→G7 : les voix supérieures montent en mouvement contraire à la basse (sensible B, septième F) — l'accord de dominante complet.",
    explanation: "La demi-cadence se termine sur G7 sans résoudre — effet de suspension, de question. Idéale en fin de première phrase d'une période musicale. La sensible B n'est pas doublée et la septième F est présente : on monte les voix supérieures contre la basse descendante pour éviter les quintes parallèles.",
    concepts: ["demi-cadence", "suspension", "substitution VI pour I"],
  },
];

// ════════════════════════════════════════════════════════════════════════════
// COURS 5 — Emprunts et suites harmoniques classiques
// ════════════════════════════════════════════════════════════════════════════

const COURS5_EXERCISES: SATBExercise[] = [
  {
    id: "c5-cycle-quintes-cm",
    type: "satb",
    cours: 5,
    title: "Suite de quintes descendantes en Do mineur",
    subtitle: "Cm – Fm7 – Bdim7 – Eb",
    difficulty: 2,
    tags: ["cycle des quintes", "Do mineur", "suite classique"],
    keySignature: "Bb",
    measures: ["i · Cm", "iv · Fm7", "VII° · Bdim7", "III · Eb"],
    solution: [
      { soprano: n("G",4),  alto: n("Eb",4), tenor: n("C",4),  bass: n("C",3)  },
      { soprano: n("F",4),  alto: n("C",4),  tenor: n("Ab",3), bass: n("F",3)  },
      { soprano: n("F",4),  alto: n("D",4),  tenor: n("Ab",3), bass: n("B",2)  },
      { soprano: n("Eb",4), alto: n("Bb",3), tenor: n("G",3),  bass: n("Eb",3) },
    ],
    hint: "Chaque fondamentale descend d'une quinte. Les voix intérieures restent aussi proches que possible.",
    explanation: "Cycle des quintes descendantes en mineur. Chaque accord résout sur le suivant par quinte descendante. Ce mouvement est le plus naturel de l'harmonie — il est présent dans Autumn Leaves.",
    concepts: ["cycle des quintes", "Do mineur", "mouvement de quinte", "suites classiques"],
  },
  {
    id: "c5-emprunt-iv-mineur",
    type: "satb",
    cours: 5,
    title: "Emprunt du IV mineur en Do majeur",
    subtitle: "C – Fm – G7 – C · Couleur sombre",
    difficulty: 2,
    tags: ["emprunt", "IV mineur", "homonyme", "Do majeur"],
    keySignature: "C",
    measures: ["I · C", "iv · Fm", "V7 · G7", "I · C"],
    solution: [
      { soprano: n("E",5), alto: n("C",5), tenor: n("G",4), bass: n("C",3) },
      { soprano: n("F",5), alto: n("Ab",4), tenor: n("C",4), bass: n("F",3) },
      { soprano: n("D",5), alto: n("B",4), tenor: n("F",4),  bass: n("G",3) },
      { soprano: n("E",5), alto: n("C",5), tenor: n("E",4),  bass: n("C",3) },
    ],
    hint: "Fm est emprunté à Do mineur. Ab (3e de Fm) descend vers G puis remonte vers G — mouvement expressif.",
    explanation: "L'emprunt du iv mineur (Fm au lieu de F) apporte une couleur sombre et romantique. Ab est la note étrangère empruntée à Do mineur. Elle crée un chromatisme descendant expressif.",
    concepts: ["emprunt à l'homonyme", "IV mineur", "chromatisme", "couleur harmonique"],
  },
  {
    id: "c5-basse-chaconne-cm",
    type: "satb",
    cours: 5,
    title: "Basse de chaconne en Do mineur",
    subtitle: "Cm – Gm/Bb – Fm/Ab – G7",
    difficulty: 3,
    tags: ["basse de chaconne", "Do mineur", "baroque", "basse descendante"],
    keySignature: "Bb",
    measures: ["i · Cm", "V/Bb · Gm/Bb", "iv/Ab · Fm/Ab", "V7 · G7"],
    solution: [
      { soprano: n("Eb",5), alto: n("G",4),  tenor: n("C",4), bass: n("C",3)  },
      { soprano: n("D",5),  alto: n("G",4),  tenor: n("D",4), bass: n("Bb",2) },
      { soprano: n("F",5),  alto: n("Ab",4), tenor: n("C",4), bass: n("Ab",2) },
      { soprano: n("F",5),  alto: n("B",4),  tenor: n("D",4), bass: n("G",2)  },
    ],
    hint: "La basse descend conjointement : C–Bb–Ab–G. Les voix supérieures se conduisent en mouvement oblique et contraire (le sol de l'alto est tenu de Cm à Gm) pour éviter quintes et octaves parallèles.",
    explanation: "La basse de chaconne : ostinato descendant C–Bb–Ab–G. Gm/Bb et Fm/Ab sont des premier renversements — la tierce est à la basse. Sous cette basse descendante, les voix supérieures ne suivent pas en parallèle : elles tiennent leurs notes communes ou montent à contre-sens, jusqu'à la sensible (B) du G7 final. Ce schéma est un archétype baroque.",
    concepts: ["basse de chaconne", "renversements", "basse ostinato", "baroque"],
  },
];

// ════════════════════════════════════════════════════════════════════════════
// COURS 6 — Construire une harmonisation
// ════════════════════════════════════════════════════════════════════════════

const COURS6_EXERCISES: SATBExercise[] = [
  {
    id: "c6-harmonisation-pendule",
    type: "satb",
    cours: 6,
    title: "Technique du pendule en Do",
    subtitle: "C – Am – F – G7 – C",
    difficulty: 2,
    tags: ["pendule", "Do majeur", "T-SD oscillation"],
    keySignature: "C",
    measures: ["I · C", "VI · Am", "IV · F", "V7 · G7", "I · C"],
    solution: [
      { soprano: n("E",5), alto: n("C",5), tenor: n("G",4), bass: n("C",3) },
      { soprano: n("E",5), alto: n("C",5), tenor: n("C",4), bass: n("A",3) },
      { soprano: n("F",5), alto: n("A",4), tenor: n("C",4), bass: n("F",3) },
      { soprano: n("D",5), alto: n("B",4), tenor: n("F",4), bass: n("G",3) },
      { soprano: n("E",5), alto: n("C",5), tenor: n("E",4), bass: n("C",3) },
    ],
    hint: "C→Am : seule la basse bouge (C→A). Notes communes dans les voix supérieures. Am→F : la basse descend (A→F).",
    explanation: "Le pendule T–T–SD–D–T exploite les notes communes pour économiser les mouvements. C et Am partagent E et C. F et Am partagent A et C.",
    concepts: ["pendule", "notes communes", "substitution diatonique", "T-SD-D-T"],
  },
];

// ════════════════════════════════════════════════════════════════════════════
// COURS 7 — La tonicisation
// ════════════════════════════════════════════════════════════════════════════

const COURS7_EXERCISES: SATBExercise[] = [
  {
    id: "c7-tonicisation-v-of-v",
    type: "satb",
    cours: 7,
    title: "Tonicisation de la dominante (V/V)",
    subtitle: "C – D7 – G7 – C en Do majeur",
    difficulty: 2,
    tags: ["tonicisation", "V/V", "dominante secondaire", "Do majeur"],
    keySignature: "C",
    measures: ["I · C", "V/V · D7", "V7 · G7", "I · C"],
    solution: [
      { soprano: n("E",5), alto: n("C",5), tenor: n("G",4), bass: n("C",3) },
      { soprano: n("D",5), alto: n("F#",4), tenor: n("C",4), bass: n("D",3) },
      { soprano: n("D",5), alto: n("F",4),  tenor: n("B",3), bass: n("G",3) },
      { soprano: n("E",5), alto: n("E",4),  tenor: n("G",3), bass: n("C",3) },
    ],
    hint: "D7 tonicise G. F# (sensible de G) monte vers G. C (7e de D7) descend vers B (3e de G7).",
    explanation: "D7 est la dominante de G — il le rend brièvement tonique. F# (note étrangère à C majeur) est la sensible de G. F# descend vers G à la mesure suivante. C descend vers B.",
    concepts: ["tonicisation", "dominante secondaire", "V/V", "chromatisme ascendant"],
  },
  {
    id: "c7-chaine-dominantes",
    type: "satb",
    cours: 7,
    title: "Chaîne de tonicisations",
    subtitle: "C – A7 – Dm – G7 – C",
    difficulty: 3,
    tags: ["chaîne de tonicisations", "dominante secondaire", "V/II"],
    keySignature: "C",
    measures: ["I · C", "V/II · A7", "II · Dm", "V7 · G7", "I · C"],
    solution: [
      { soprano: n("E",5), alto: n("C",5),  tenor: n("G",4),  bass: n("C",3) },
      { soprano: n("E",5), alto: n("G",4),  tenor: n("C#",4), bass: n("A",3) },
      { soprano: n("F",5), alto: n("F",4),  tenor: n("A",3),  bass: n("D",3) },
      { soprano: n("F",5), alto: n("B",4),  tenor: n("G",4),  bass: n("G",3) },
      { soprano: n("E",5), alto: n("C",5),  tenor: n("G",4),  bass: n("C",3) },
    ],
    hint: "A7 tonicise Dm. C# (sensible de Dm) monte vers D. G (7e de A7) descend vers F# — attention, F# dans A7 est la tierce, pas la 7e.",
    explanation: "Chaîne A7→Dm→G7→C : deux tonicisations consécutives. A7 prépare Dm (V/II), puis G7 prépare C (V/I). C# est la sensible de Dm — elle résout vers D.",
    concepts: ["chaîne de tonicisations", "V/II", "V/I", "chromatismes"],
  },
];

// ════════════════════════════════════════════════════════════════════════════
// COURS 8 — Modulation par accord pivot
// ════════════════════════════════════════════════════════════════════════════

const COURS8_EXERCISES: SATBExercise[] = [
  {
    id: "c8-modulation-c-vers-g",
    type: "satb",
    cours: 8,
    title: "Modulation Do → Sol par accord pivot",
    subtitle: "C – F – G7 – Am(pivot) – D7 – G",
    difficulty: 3,
    tags: ["modulation", "accord pivot", "Do majeur", "Sol majeur"],
    keySignature: "C",
    measures: ["I·C", "IV·F", "V7·G7", "pivot·Am", "V/G·D7", "I·G"],
    solution: [
      { soprano: n("E",5), alto: n("C",5), tenor: n("G",4), bass: n("C",3) },
      { soprano: n("F",5), alto: n("A",4), tenor: n("C",4), bass: n("F",3) },
      { soprano: n("F",5), alto: n("B",4), tenor: n("G",4), bass: n("G",3) },
      { soprano: n("E",5), alto: n("C",5), tenor: n("C",4), bass: n("A",3) },
      { soprano: n("F#",5),alto: n("C",5), tenor: n("D",4), bass: n("D",3) },
      { soprano: n("G",5), alto: n("B",4), tenor: n("D",4), bass: n("G",3) },
    ],
    hint: "Am est VI en Do et II en Sol — c'est l'accord pivot. Après Am, F# (sensible de Sol) annonce la nouvelle tonalité.",
    explanation: "L'accord pivot Am appartient aux deux tonalités : VI en Do, II en Sol. Après le pivot, D7 (V de Sol) installe la nouvelle tonalité. F# est la nouvelle sensible.",
    concepts: ["modulation", "accord pivot", "tons voisins", "nouvelle sensible"],
  },
  {
    id: "c8-modulation-g-vers-d",
    type: "satb",
    cours: 8,
    title: "Modulation Sol → Ré par accord pivot",
    subtitle: "G – C – D7 – Bm(pivot) – A7 – D",
    difficulty: 3,
    tags: ["modulation", "accord pivot", "Sol majeur", "Ré majeur"],
    keySignature: "G",
    measures: ["I·G", "IV·C", "V7·D7", "pivot·Bm", "V/D·A7", "I·D"],
    solution: [
      { soprano: n("B",4), alto: n("G",4), tenor: n("D",4), bass: n("G",3) },
      { soprano: n("C",5), alto: n("G",4), tenor: n("E",4), bass: n("C",3) },
      { soprano: n("A",4), alto: n("F#",4), tenor: n("C",4), bass: n("D",3) },
      { soprano: n("B",4), alto: n("F#",4), tenor: n("B",3), bass: n("D",3) },
      { soprano: n("C#",5),alto: n("G",4),  tenor: n("A",3), bass: n("A",3) },
      { soprano: n("D",5), alto: n("F#",4), tenor: n("A",3), bass: n("D",3) },
    ],
    hint: "Bm est VI en Sol et VI en Ré également — mais après Bm, A7 (V de Ré) installe la nouvelle tonalité. C# est la nouvelle sensible de Ré.",
    explanation: "Modulation par quinte vers le ton le plus proche. Bm est l'accord pivot (VI dans les deux tonalités). A7 (V de Ré) confirme la nouvelle tonique. C# remplace C naturel.",
    concepts: ["modulation", "accord pivot", "tons voisins", "nouvelle sensible"],
  },
  {
    id: "c8-modulation-c-vers-f",
    type: "satb",
    cours: 8,
    title: "Modulation Do → Fa par accord pivot",
    subtitle: "C – Am – F(pivot) – C7 – F",
    difficulty: 3,
    tags: ["modulation", "accord pivot", "Do majeur", "Fa majeur"],
    keySignature: "C",
    measures: ["I·C", "VI·Am", "pivot·F", "V7/F·C7", "I·F"],
    solution: [
      { soprano: n("E",5), alto: n("C",5), tenor: n("G",4), bass: n("C",3) },
      { soprano: n("E",5), alto: n("C",5), tenor: n("C",4), bass: n("A",3) },
      { soprano: n("F",5), alto: n("A",4), tenor: n("C",4), bass: n("F",3) },
      { soprano: n("E",5), alto: n("Bb",4),tenor: n("G",4), bass: n("C",3) },
      { soprano: n("F",5), alto: n("A",4), tenor: n("C",4), bass: n("F",3) },
    ],
    hint: "F est IV en Do et I en Fa — c'est l'accord pivot. C7 confirme Fa en y ajoutant Bb (la 7e absente de Do majeur).",
    explanation: "Modulation vers le ton voisin par la quarte. F (IV en Do, I en Fa) est le pivot. C7 confirme Fa car il contient Bb, note hors de Do majeur. La modulation vers la sous-dominante est plus 'douce' que vers la dominante.",
    concepts: ["modulation", "accord pivot", "sous-dominante", "tons voisins"],
  },
  {
    id: "c8-64-de-cadence",
    type: "satb",
    cours: 8,
    title: "6/4 de cadence en Do majeur",
    subtitle: "I – IV – I6/4 – V7 – I",
    difficulty: 2,
    tags: ["6/4 de cadence", "deuxième renversement", "Do majeur", "ornement de cadence"],
    keySignature: "C",
    measures: ["I·C", "IV·F", "I6/4·C/G", "V7·G7", "I·C"],
    solution: [
      { soprano: n("E",5), alto: n("C",5), tenor: n("G",4), bass: n("C",3) },
      { soprano: n("F",5), alto: n("A",4), tenor: n("C",4), bass: n("F",3) },
      { soprano: n("E",5), alto: n("C",5), tenor: n("G",4), bass: n("G",3) },
      { soprano: n("G",5), alto: n("B",4), tenor: n("F",4), bass: n("G",3) },
      { soprano: n("E",5), alto: n("C",5), tenor: n("E",4), bass: n("C",3) },
    ],
    hint: "Le I6/4 (C/G) a G à la basse comme le V7 suivant — la basse reste immobile. Le I6/4 est instable et demande résolution immédiate sur V7.",
    explanation: "Le 6/4 de cadence : C en deuxième renversement (G à la basse). Cette disposition crée une double dissonance (quarte et sixte sur G) qui appelle impérativement la résolution sur G7. La basse reste sur G des deux mesures. C'est un ornement de la cadence parfaite.",
    concepts: ["6/4 de cadence", "deuxième renversement", "double dissonance", "ornement cadentiel"],
  },
  {
    id: "c8-v7sus4-resolution",
    type: "satb",
    cours: 8,
    title: "V7sus4 → V7 → I en Do majeur",
    subtitle: "G7sus4 → G7 → C · Résolution différée",
    difficulty: 2,
    tags: ["V7sus4", "suspension", "Do majeur", "résolution différée"],
    keySignature: "C",
    measures: ["V7sus4·Gsus", "V7·G7", "I·C"],
    solution: [
      { soprano: n("C",5), alto: n("F",4), tenor: n("D",4), bass: n("G",3) },
      { soprano: n("B",4), alto: n("F",4), tenor: n("D",4), bass: n("G",3) },
      { soprano: n("C",5), alto: n("E",4), tenor: n("C",4), bass: n("C",3) },
    ],
    hint: "Dans Gsus4, F reste. La quarte C (sus4) descend vers B (tierce de G7) — c'est la résolution de la suspension.",
    explanation: "G7sus4 = G–C–D–F (C remplace B). La suspension C descend vers B dans G7. La basse reste sur G. Ce procédé 'diffère' la résolution harmonique : G7sus4 crée une attente, G7 confirme la dominante, puis I résout.",
    concepts: ["suspension", "V7sus4", "résolution différée", "quarte suspendue"],
  },
];

// ════════════════════════════════════════════════════════════════════════════
// COURS 9 — Modulations avancées et pédales
// ════════════════════════════════════════════════════════════════════════════

const COURS9_EXERCISES: SATBExercise[] = [
  {
    id: "c9-pedale-dominante-c",
    type: "satb",
    cours: 9,
    title: "Pédale de dominante en Do",
    subtitle: "C – F/G – G7 – C sur pédale de Sol",
    difficulty: 3,
    tags: ["pédale", "pédale de dominante", "Do majeur"],
    keySignature: "C",
    measures: ["I·C/G", "IV·F/G", "V7·G7", "I·C"],
    solution: [
      { soprano: n("E",5), alto: n("C",5), tenor: n("G",4), bass: n("G",3) },
      { soprano: n("F",5), alto: n("A",4), tenor: n("C",4), bass: n("G",3) },
      { soprano: n("D",5), alto: n("B",4), tenor: n("F",4), bass: n("G",3) },
      { soprano: n("E",5), alto: n("C",5), tenor: n("E",4), bass: n("C",3) },
    ],
    hint: "G reste à la basse pendant les 3 premières mesures. Les voix supérieures changent normalement.",
    explanation: "La pédale de dominante (G à la basse) crée une tension prolongée. F/G est dissonant — la quarte F–G entre basse et ténor est tendue. La résolution sur G7 puis C libère cette tension.",
    concepts: ["pédale de dominante", "pédale harmonique", "dissonance de pédale", "résolution"],
  },
  {
    id: "c9-pedale-tonique-c",
    type: "satb",
    cours: 9,
    title: "Pédale de tonique en Do",
    subtitle: "C – G7/C – F/C – C sur pédale de Do",
    difficulty: 3,
    tags: ["pédale", "pédale de tonique", "Do majeur"],
    keySignature: "C",
    measures: ["I·C", "V7/C·G7/C", "IV/C·F/C", "I·C"],
    solution: [
      { soprano: n("E",5), alto: n("C",5), tenor: n("G",4), bass: n("C",3) },
      { soprano: n("D",5), alto: n("B",4), tenor: n("G",4), bass: n("C",3) },
      { soprano: n("F",5), alto: n("A",4), tenor: n("C",4), bass: n("C",3) },
      { soprano: n("E",5), alto: n("C",5), tenor: n("G",4), bass: n("C",3) },
    ],
    hint: "C reste à la basse tout au long. G7 et F sont dissonants avec la basse C — c'est voulu.",
    explanation: "La pédale de tonique crée un effet statique et solennel. G7 sur pédale C : la quinte G–D est consonante, mais B et F créent des dissonances expressives. F sur pédale C : la quinte C–F est dissonante (quarte). La résolution finale libère toutes les tensions.",
    concepts: ["pédale de tonique", "pédale harmonique", "dissonance", "effet statique"],
  },
  {
    id: "c9-marche-harmonique-c",
    type: "satb",
    cours: 9,
    title: "Marche harmonique descendante en Do",
    subtitle: "C – Bm7b5 – Am – Gm – F – E7",
    difficulty: 3,
    tags: ["marche harmonique", "Do majeur", "séquence descendante"],
    keySignature: "C",
    measures: ["I·C", "VII°·Bm7b5", "vi·Am", "v·Gm", "IV·F", "III7·E7"],
    solution: [
      { soprano: n("E",5), alto: n("G",4),  tenor: n("E",4), bass: n("C",4) },
      { soprano: n("D",5), alto: n("A",4),  tenor: n("F",4), bass: n("B",3) },
      { soprano: n("C",5), alto: n("A",4),  tenor: n("E",4), bass: n("A",3) },
      { soprano: n("D",5), alto: n("Bb",4), tenor: n("G",4), bass: n("G",3) },
      { soprano: n("A",4), alto: n("F",4),  tenor: n("C",4), bass: n("F",3) },
      { soprano: n("B",4), alto: n("G#",4), tenor: n("D",4), bass: n("E",3) },
    ],
    hint: "La basse descend diatoniquement par degrés (C–B–A–G–F–E). Les voix supérieures ne la suivent PAS en parallèle : notes tenues (le la de l'alto de VII° à vi) et mouvements contraires évitent les octaves et quintes parallèles.",
    explanation: "La marche harmonique utilise le même motif mélodique transposé d'un degré à la fois. La basse descend par degrés de C à E. E7 à la fin est une dominante secondaire qui prépare Am — c'est une marche avec 'minorisation' (Gm au lieu de Gm7b5, Bb naturel).",
    concepts: ["marche harmonique", "séquence", "minorisation", "basse descendante"],
  },
  {
    id: "c9-minorisation-c",
    type: "satb",
    cours: 9,
    title: "Minorisation en Do majeur",
    subtitle: "C – Cm – F – Fm – C",
    difficulty: 2,
    tags: ["minorisation", "emprunt modal", "Do majeur", "parallèle mineur"],
    keySignature: "C",
    measures: ["I·C", "i·Cm", "IV·F", "iv·Fm", "I·C"],
    solution: [
      { soprano: n("E",5), alto: n("C",5), tenor: n("G",4), bass: n("C",3) },
      { soprano: n("Eb",5),alto: n("C",5), tenor: n("G",4), bass: n("C",3) },
      { soprano: n("F",5), alto: n("A",4), tenor: n("C",4), bass: n("F",3) },
      { soprano: n("F",5), alto: n("Ab",4),tenor: n("C",4), bass: n("F",3) },
      { soprano: n("E",5), alto: n("C",5), tenor: n("G",4), bass: n("C",3) },
    ],
    hint: "Cm est l'accord de Do mineur parallèle. Seule la tierce change : E → Eb. C'est un emprunt direct à la tonalité homonyme.",
    explanation: "La minorisation consiste à 'noircir' momentanément un accord majeur en le rendant mineur. Ici C devient Cm (Eb remplace E), et F devient Fm (Ab remplace A). C'est l'emprunt modal à l'état pur — les deux modes coexistent dans la même phrase.",
    concepts: ["minorisation", "emprunt modal", "parallèle mineur", "tierce bémolisée"],
  },
];

// ════════════════════════════════════════════════════════════════════════════
// EXPORT GLOBAL
// ════════════════════════════════════════════════════════════════════════════

import { generateAllExercises } from "@/exercises/generator";
import { COURS1_EXERCISES, COURS2_EXERCISES } from "@/exercises/cours1-2-exercises";
import { COURS3_9_IDENTIFY } from "@/exercises/cours3-9-identify";
import { INVERSION_EXERCISES } from "@/exercises/cours-inversion-exercises";
import { COURS10_23_EXERCISES } from "@/exercises/cours10-23-exercises";
import { COURS38_EXERCISES, COURS39_EXERCISES, COURS40_EXERCISES, COURS41_EXERCISES } from "@/exercises/cours38-41-exercises";
import { COURS24_EXERCISES, COURS26_EXERCISES, COURS32_EXERCISES, COURS27_EXERCISES, COURS28_EXERCISES, COURS29_EXERCISES, COURS30_EXERCISES, COURS31_EXERCISES, COURS33_EXERCISES, COURS34_EXERCISES, COURS35_EXERCISES, COURS36_EXERCISES } from "@/exercises/cours24-37-exercises";
export type { IdentifyExercise, BuildExercise } from "@/types/exercise";
export type { InversionExercise, InversionChoice } from "@/exercises/cours-inversion-exercises";

let _generated: SATBExercise[] | null = null;
function getGenerated() {
  if (!_generated) _generated = generateAllExercises();
  return _generated;
}

export const ALL_EXERCISES = [
  ...COURS1_EXERCISES,
  ...COURS2_EXERCISES,
  ...COURS3_9_IDENTIFY,
  ...COURS3_EXERCISES,
  ...COURS4_EXERCISES,
  ...COURS5_EXERCISES,
  ...COURS6_EXERCISES,
  ...COURS7_EXERCISES,
  ...COURS8_EXERCISES,
  ...COURS9_EXERCISES,
  ...INVERSION_EXERCISES,
  ...COURS10_23_EXERCISES,
  ...COURS24_EXERCISES,
  ...COURS26_EXERCISES,
  ...COURS27_EXERCISES,
  ...COURS28_EXERCISES,
  ...COURS29_EXERCISES,
  ...COURS30_EXERCISES,
  ...COURS31_EXERCISES,
  ...COURS32_EXERCISES,
  ...COURS33_EXERCISES,
  ...COURS34_EXERCISES,
  ...COURS35_EXERCISES,
  ...COURS36_EXERCISES,
  ...COURS38_EXERCISES,
  ...COURS39_EXERCISES,
  ...COURS40_EXERCISES,
  ...COURS41_EXERCISES,
  ...getGenerated(),
];
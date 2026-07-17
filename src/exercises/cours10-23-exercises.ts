/**
 * exercises/cours10-23-exercises.ts
 * Harmonia — Exercices d'identification pour les cours 10 à 23
 *
 * Types : identify (QCM) et build (construction)
 */

import type { IdentifyExercise, BuildExercise, SATBExercise } from "@/types/exercise";

function n(name: string, octave: number) {
  return { name: name as any, octave };
}

// ════════════════════════════════════════════════════════════════════════════
// COURS 10 — Les modes de la gamme majeure
// ════════════════════════════════════════════════════════════════════════════

export const COURS10_EXERCISES: (IdentifyExercise | BuildExercise)[] = [
  {
    id: "c10-mode-identify-phrygien",
    type: "identify", cours: 10, difficulty: 1,
    tags: ["modes", "phrygien", "♭2"],
    concepts: ["mode phrygien", "2e degré bémolisé"],
    question: "Quel mode de la gamme majeure se distingue par un 2e degré bémolisé (♭2) ?",
    options: [
      { id: "a", label: "Dorien",      isCorrect: false },
      { id: "b", label: "Phrygien",    isCorrect: true  },
      { id: "c", label: "Lydien",      isCorrect: false },
      { id: "d", label: "Mixolydien",  isCorrect: false },
    ],
    explanation: "Le mode phrygien (3e mode) se construit sur le 3e degré de la gamme majeure. Il se caractérise par son ♭2 — la demi-seconde initiale qui lui donne sa couleur espagnole ou orientale. Ex : Mi phrygien = E F G A B C D E.",
  },
  {
    id: "c10-mode-identify-lydien",
    type: "identify", cours: 10, difficulty: 1,
    tags: ["modes", "lydien", "#4"],
    concepts: ["mode lydien", "4e degré augmenté"],
    question: "Quel mode de la gamme majeure possède un 4e degré augmenté (♯4) ?",
    options: [
      { id: "a", label: "Ionien",      isCorrect: false },
      { id: "b", label: "Mixolydien",  isCorrect: false },
      { id: "c", label: "Lydien",      isCorrect: true  },
      { id: "d", label: "Éolien",      isCorrect: false },
    ],
    explanation: "Le mode lydien (4e mode) se construit sur le 4e degré de la gamme majeure. Son ♯4 (triton depuis la tonique) lui confère une couleur lumineuse et 'flottante'. Ex : Fa lydien = F G A B C D E F. Utilisé par Debussy et dans les films de John Williams.",
  },
  {
    id: "c10-mode-identify-mixolydien",
    type: "identify", cours: 10, difficulty: 1,
    tags: ["modes", "mixolydien", "♭7"],
    concepts: ["mode mixolydien", "septième bémolisée", "blues"],
    question: "Quel mode ressemble à la gamme majeure mais avec un 7e degré bémolisé (♭7) ?",
    options: [
      { id: "a", label: "Dorien",      isCorrect: false },
      { id: "b", label: "Ionien",      isCorrect: false },
      { id: "c", label: "Éolien",      isCorrect: false },
      { id: "d", label: "Mixolydien",  isCorrect: true  },
    ],
    explanation: "Le mode mixolydien (5e mode) est une gamme majeure avec ♭7. Il est fondamental dans le blues, le rock et le jazz — c'est le mode de la dominante (G mixolydien sur un G7 en Do majeur). Ex : Sol mixolydien = G A B C D E F G.",
  },
  {
    id: "c10-mode-dorien-jazz",
    type: "identify", cours: 10, difficulty: 2,
    tags: ["modes", "dorien", "jazz", "Dm7"],
    concepts: ["mode dorien", "II mineur jazz"],
    question: "En Do majeur, sur quel accord joue-t-on le mode dorien ?",
    options: [
      { id: "a", label: "C majeur (I)",   isCorrect: false },
      { id: "b", label: "Dm (II)",        isCorrect: true  },
      { id: "c", label: "Em (III)",       isCorrect: false },
      { id: "d", label: "G7 (V)",         isCorrect: false },
    ],
    explanation: "Le mode dorien (2e mode) se joue sur le IIe degré de la gamme majeure. En Do : Dm7 = Ré dorien (D E F G A B C). Le dorien est la gamme de base pour improviser sur les accords mineurs 7 en jazz — sa 6e majeure le distingue du mode éolien.",
  },
  {
    id: "c10-mode-ordre",
    type: "identify", cours: 10, difficulty: 2,
    tags: ["modes", "ordre", "mémorisation"],
    concepts: ["sept modes", "ordre des modes"],
    question: "Quel est l'ordre correct des sept modes de la gamme majeure ?",
    options: [
      { id: "a", label: "Ionien – Dorien – Phrygien – Lydien – Mixolydien – Éolien – Locrien", isCorrect: true  },
      { id: "b", label: "Dorien – Ionien – Lydien – Phrygien – Éolien – Mixolydien – Locrien", isCorrect: false },
      { id: "c", label: "Ionien – Lydien – Dorien – Mixolydien – Phrygien – Éolien – Locrien", isCorrect: false },
      { id: "d", label: "Ionien – Dorien – Lydien – Phrygien – Mixolydien – Locrien – Éolien", isCorrect: false },
    ],
    explanation: "Moyen mnémotechnique : 'I Don't Play Loud Music All Evening Lately' — Ionien, Dorien, Phrygien, Lydien, Mixolydien, Éolien, Locrien. Chaque mode se construit sur un degré successif de la gamme majeure.",
  },
  {
    id: "c10-mode-locrien-particularite",
    type: "identify", cours: 10, difficulty: 2,
    tags: ["modes", "locrien", "quinte diminuée"],
    concepts: ["mode locrien", "accord diminué", "instabilité"],
    question: "Quelle est la particularité du mode locrien par rapport aux autres modes ?",
    options: [
      { id: "a", label: "Il a un ♯4",                                     isCorrect: false },
      { id: "b", label: "Sa quinte est diminuée (♭5) — il est très instable", isCorrect: true  },
      { id: "c", label: "Il est identique à la gamme mineure harmonique",  isCorrect: false },
      { id: "d", label: "Il n'a aucune altération",                        isCorrect: false },
    ],
    explanation: "Le mode locrien (7e mode) est le seul mode avec une quinte diminuée (♭5). Cela le rend structurellement instable — l'accord construit sur le locrien est un accord diminué (VIIø). Il est rarement utilisé comme tonique, mais apparaît dans le jazz moderne et le metal.",
  },
];

export const COURS10_SATB: SATBExercise[] = [
  {
    id: "c10-satb-dorien-dm",
    type: "satb",
    cours: 10,
    title: "Progression dorienne en Ré",
    subtitle: "im7 – IV – im7 – IV · Ré dorien",
    difficulty: 2,
    tags: ["modes", "dorien", "Ré dorien", "IV majeur"],
    keySignature: "C",
    measures: ["im7·Dm7", "IV·G", "im7·Dm7", "IV·G"],
    solution: [
      { soprano: n("A",4), alto: n("F",4), tenor: n("C",4), bass: n("D",3) },
      { soprano: n("B",4), alto: n("G",4), tenor: n("D",4), bass: n("G",3) },
      { soprano: n("A",4), alto: n("F",4), tenor: n("C",4), bass: n("D",3) },
      { soprano: n("B",4), alto: n("G",4), tenor: n("D",4), bass: n("G",3) },
    ],
    hint: "En Ré dorien : le IVe degré est G majeur (B naturel). Le B naturel distingue le dorien de l'éolien (qui aurait Bb).",
    explanation: "Le dorien se joue sur le 2e degré de la gamme majeure. En Ré dorien (gamme de Do), le IVe degré est G majeur — cet accord IV majeur dans un contexte mineur est la signature du dorien. Notez le B naturel (6e majeure) qui donne sa couleur caractéristique.",
    concepts: ["mode dorien", "IV majeur", "6e majeure", "jazz modal"],
    regles: "libre",
  },
  {
    id: "c10-satb-mixolydien-sol",
    type: "satb",
    cours: 10,
    title: "Cadence mixolydienne en Sol",
    subtitle: "I – ♭VII – IV – I · Sol mixolydien",
    difficulty: 2,
    tags: ["modes", "mixolydien", "Sol mixolydien", "♭VII"],
    keySignature: "C",
    measures: ["I·G", "♭VII·F", "IV·C", "I·G"],
    solution: [
      { soprano: n("D",5), alto: n("B",4), tenor: n("G",4), bass: n("G",3) },
      { soprano: n("C",5), alto: n("A",4), tenor: n("F",4), bass: n("F",3) },
      { soprano: n("C",5), alto: n("G",4), tenor: n("E",4), bass: n("C",3) },
      { soprano: n("D",5), alto: n("B",4), tenor: n("G",4), bass: n("G",3) },
    ],
    hint: "Sol mixolydien = gamme de Do mais en commençant sur Sol. F naturel (♭7) est la note distinctive. La cadence ♭VII–I (F→G) remplace V7–I.",
    explanation: "Le mixolydien est une gamme majeure avec ♭7. En Sol mixolydien, F naturel (au lieu de F#). La progression I–♭VII–IV–I évite la sensible et la cadence parfaite classique — c'est l'esthétique modale pure. Très présent dans le rock et le blues.",
    concepts: ["mode mixolydien", "♭VII", "cadence modale", "blues rock"],
    regles: "libre",
  },
  {
    id: "c10-satb-phrygien-em",
    type: "satb",
    cours: 10,
    title: "Cadence phrygienne en Mi",
    subtitle: "i – ♭II – i · Mi phrygien",
    difficulty: 2,
    tags: ["modes", "phrygien", "Mi phrygien", "cadence phrygienne"],
    keySignature: "C",
    measures: ["i·Em", "♭II·F", "i·Em"],
    solution: [
      { soprano: n("B",4), alto: n("G",4), tenor: n("E",4), bass: n("E",3) },
      { soprano: n("C",5), alto: n("A",4), tenor: n("F",4), bass: n("F",3) },
      { soprano: n("B",4), alto: n("G",4), tenor: n("E",4), bass: n("E",3) },
    ],
    hint: "La cadence phrygienne : ♭II (F majeur) descend d'un demi-ton vers i (Em). Le mouvement F→E à la basse crée la 'seconde phrygienne' caractéristique.",
    explanation: "Mi phrygien (3e mode de Do majeur) : E F G A B C D. Le mouvement ♭II→i (F→Em) est la cadence phrygienne andalouse. F majeur comme ♭II est l'accord caractéristique du phrygien — absent de tous les autres modes. Très utilisé dans le flamenco et la musique espagnole.",
    concepts: ["mode phrygien", "cadence phrygienne", "♭II", "flamenco"],
    regles: "libre",
  },
];

// ════════════════════════════════════════════════════════════════════════════
// COURS 11 — Les extensions d'accords
// ════════════════════════════════════════════════════════════════════════════

export const COURS11_EXERCISES: (IdentifyExercise | BuildExercise)[] = [
  {
    id: "c11-extension-9e-identify",
    type: "identify", cours: 11, difficulty: 1,
    tags: ["extensions", "9e", "nomenclature"],
    concepts: ["neuvième", "tierce empilée", "jazz"],
    question: "La 9e d'un accord est la même note que...",
    options: [
      { id: "a", label: "La 7e à l'octave supérieure",  isCorrect: false },
      { id: "b", label: "La 2e à l'octave supérieure",  isCorrect: true  },
      { id: "c", label: "La 4e à l'octave supérieure",  isCorrect: false },
      { id: "d", label: "La 6e à l'octave supérieure",  isCorrect: false },
    ],
    explanation: "La 9e est la 2e élevée d'une octave : 2e = 2 demi-tons (majeure), 9e = 14 demi-tons. Cmaj9 = C E G B D (D est la 9e = 2e à l'octave sup.). En jazz, on empile les tierces au-delà de la 7e pour créer les extensions.",
  },
  {
    id: "c11-extension-cmaj9",
    type: "build", cours: 11, difficulty: 1,
    tags: ["extensions", "Cmaj9", "construction"],
    concepts: ["accord de 9e majeure", "empiler des tierces"],
    question: "Quelles sont les notes de Cmaj9 (Do majeur 9) ?",
    correctNotes: ["C", "E", "G", "B", "D"],
    keySignature: "C",
    explanation: "Cmaj9 = C (fondamentale) + E (tierce majeure) + G (quinte) + B (septième majeure) + D (9e majeure). On empile des tierces : C–E (3ce maj) – G (3ce min) – B (3ce maj) – D (3ce min). La 9e est le D.",
  },
  {
    id: "c11-extension-g13",
    type: "identify", cours: 11, difficulty: 2,
    tags: ["extensions", "13e", "jazz"],
    concepts: ["accord de 13e", "note de couleur"],
    question: "Dans un accord de 13e (ex: G13), quelle est la note la plus haute de la pile de tierces ?",
    options: [
      { id: "a", label: "La 9e (A pour G13)",   isCorrect: false },
      { id: "b", label: "La 11e (C pour G13)",  isCorrect: false },
      { id: "c", label: "La 13e (E pour G13)",  isCorrect: true  },
      { id: "d", label: "La 7e (F pour G13)",   isCorrect: false },
    ],
    explanation: "G13 = G B D F A C E (G–B–D–F–A–C–E). La 13e est E — c'est la 6e à l'octave supérieure. En jazz, on ne joue jamais toutes les notes à la fois : on omet la quinte (D) et souvent la 11e (C) pour éviter les dissonances trop criardes.",
  },
  {
    id: "c11-extension-tensions-disponibles",
    type: "identify", cours: 11, difficulty: 3,
    tags: ["extensions", "tensions disponibles", "jazz"],
    concepts: ["tensions disponibles", "extensions altérées"],
    question: "Quelles extensions sont 'disponibles' (non altérées) sur un accord de dominante G7 en Do majeur ?",
    options: [
      { id: "a", label: "La 9e (A) et la 13e (E)",             isCorrect: true  },
      { id: "b", label: "La 9e (A) et la 11e (C)",              isCorrect: false },
      { id: "c", label: "La ♭9 (Ab) et la ♯11 (C#)",           isCorrect: false },
      { id: "d", label: "La 13e (E) et la 11e (C) seulement",   isCorrect: false },
    ],
    explanation: "Sur G7 en Do majeur, les tensions 'disponibles' (qui sonnent bien sans altération) sont la 9e (A) et la 13e (E). La 11e (C) crée un clash direct avec la 3ce (B) et est évitée — sauf altérée en ♯11 (C#). La ♭9 et ♯9 sont des tensions altérées pour couleur blues.",
  },
  {
    id: "c11-11juste-interdite-majeur",
    type: "identify", cours: 11, difficulty: 2,
    tags: ["extensions", "11e juste", "#11", "tensions disponibles"],
    concepts: ["11e juste interdite sur accord majeur", "frottement de ♭9 avec la 3ce", "#11 lydienne"],
    question: "Pourquoi la 11e JUSTE est-elle interdite sur un accord majeur (Cmaj7), et que met-on à la place ?",
    options: [
      { id: "a", label: "Elle forme un ♭9 (demi-ton) avec la 3ce majeure Mi ; on la remplace par la #11 (Fa#)", isCorrect: true  },
      { id: "b", label: "Elle est trop grave ; on la monte d'une octave",                                       isCorrect: false },
      { id: "c", label: "Elle double la quinte Sol ; on la remplace par la 13e",                                 isCorrect: false },
      { id: "d", label: "Aucune interdiction : la 11e juste sonne bien sur tout accord majeur",                  isCorrect: false },
    ],
    explanation: "Sur Cmaj7 (Do–Mi–Sol–Si), la 11e juste est Fa. Or Fa n'est qu'à un demi-ton de la 3ce majeure Mi : ce frottement de ♭9 sonne « faux » (tension non disponible). On hausse donc la 11e en #11 (Fa#), qui est à un TON de Mi : plus de frottement, et la couleur lydienne brillante en prime. Sur les accords MINEURS, en revanche, la 11e juste est disponible (pas de demi-ton avec la ♭3).",
    hint: "Comptez la distance entre la 11e juste (Fa) et la tierce majeure (Mi) de l'accord.",
  },
  {
    id: "c11-build-c7s11",
    type: "build", cours: 11, difficulty: 2,
    tags: ["extensions", "C7#11", "lydien dominant", "construction", "quinte omise"],
    concepts: ["voicing lydien-dominant", "guide-tones 3ce + ♭7", "quinte omise pour éviter la friction avec #11"],
    question: "Construisez le voicing compact de C7#11 (accord lydien-dominant), quinte omise : fondamentale, 3ce, ♭7, #11. Donnez les quatre notes.",
    correctNotes: ["C", "E", "Bb", "F#"],
    keySignature: "C",
    explanation: "C7#11 = Do (fond.) – Mi (3ce majeure) – Sib (♭7, dominante) – Fa# (#11). On omet la quinte juste (Sol) car elle frotterait à un demi-ton avec la #11 (Fa#) : le voicing gagne en clarté et affiche la couleur lydienne-dominante (mode lydien-mixolydien, 4e mode de la mineure mélodique).",
    hint: "La #11 de Do est Fa# (triton au-dessus de la fondamentale) ; la ♭7 est Sib (pas de « Maj »).",
  },
];

export const COURS11_SATB: SATBExercise[] = [
  {
    id: "c11-satb-iivi-extensions-c",
    type: "satb",
    cours: 11,
    title: "II–V–I avec extensions en Do",
    subtitle: "Dm9 – G13 – Cmaj9 · Jazz avec tensions",
    difficulty: 3,
    tags: ["extensions", "9e", "13e", "jazz", "Do majeur"],
    keySignature: "C",
    measures: ["Dm9", "G13", "Cmaj9"],
    solution: [
      { soprano: n("E",5), alto: n("C",5), tenor: n("A",3), bass: n("D",3) },
      { soprano: n("E",5), alto: n("F",4), tenor: n("B",3), bass: n("G",3) },
      { soprano: n("D",5), alto: n("E",4), tenor: n("G",3), bass: n("C",3) },
    ],
    hint: "Dm9 = D F A C E (E est la 9e). G13 = G B D F A (A est la 13e, D et 11e omis). Cmaj9 = C E G B D (D est la 9e).",
    explanation: "Les extensions colorent les accords jazz sans changer leur fonction. Dm9 : la 9e (E) au soprano. G13 : la 13e (A) naturelle disponible en Do majeur. Cmaj9 : résolution sur la 9e (D) au soprano. En SATB, on omet la quinte et la 11e pour éviter les frictions — on garde fondamentale, 3ce, 7e et l'extension.",
    concepts: ["neuvième", "treizième", "tensions disponibles", "jazz voicing"],
    regles: "libre",
  },
  {
    id: "c11-satb-maj7-extensions",
    type: "satb",
    cours: 11,
    title: "Cmaj7 – Am9 – Fmaj9 – G13",
    subtitle: "Extensions sur une progression I–VI–IV–V",
    difficulty: 2,
    tags: ["extensions", "Maj7", "Am9", "Fmaj9"],
    keySignature: "C",
    measures: ["Cmaj7", "Am9", "Fmaj9", "G13"],
    solution: [
      { soprano: n("E",5), alto: n("B",4), tenor: n("G",4), bass: n("C",3) },
      { soprano: n("G",4), alto: n("E",4), tenor: n("C",4), bass: n("A",3) },
      { soprano: n("A",4), alto: n("E",4), tenor: n("C",4), bass: n("F",3) },
      { soprano: n("A",4), alto: n("F",4), tenor: n("B",3), bass: n("G",3) },
    ],
    hint: "Cmaj7 : la 7e majeure B remplace l'octave. Am9 : la 9e B naturel (pas Bb !). Fmaj9 : la 9e G. G13 : la 13e A.",
    explanation: "Enrichir une progression classique avec des 7es et extensions. Cmaj7→Am9 : B reste en place (note commune). Am9→Fmaj9 : E reste, A→C (basse descend conjointement). Fmaj9→G13 : A reste (note commune = 13e de G). La conduite de voix reste économique malgré les extensions.",
    concepts: ["extensions", "Maj7", "9e", "notes communes avec extensions"],
    regles: "libre",
  },
  {
    id: "c11-satb-9e-preparee-ecole",
    type: "satb",
    cours: 11,
    title: "9e de dominante préparée et résolue",
    subtitle: "Dm7 – G9 – C · la 9e descend sur la quinte (école)",
    difficulty: 2,
    tags: ["extensions", "9e de dominante", "préparation", "résolution", "Do majeur", "école"],
    keySignature: "C",
    measures: ["II7 · Dm7", "V9 · G9", "I · C"],
    solution: [
      { soprano: n("A",4), alto: n("C",4), tenor: n("F",3), bass: n("D",3) },
      { soprano: n("A",4), alto: n("B",3), tenor: n("F",3), bass: n("G",2) },
      { soprano: n("G",4), alto: n("C",4), tenor: n("E",3), bass: n("C",3) },
    ],
    hint: "La 9e de G9 est La — déjà présente comme quinte du Dm7 : elle est donc PRÉPARÉE (note commune au soprano). À la résolution G9→C, la 9e (La) descend d'un ton sur la quinte de Do (Sol), la sensible Si monte vers Do et la 7e Fa descend vers Mi.",
    explanation: "Traitement CLASSIQUE de la 9e de dominante, à la différence du jazz : la 9e y est une dissonance PRÉPARÉE puis RÉSOLUE. G9 = Sol–Si–Fa–La (quinte Ré omise) ; la 9e La est préparée (quinte du Dm7 précédent, tenue au soprano) puis résout en descendant d'un ton sur la quinte de la tonique (La→Sol). En parallèle, la sensible Si monte vers Do et la 7e de dominante Fa descend vers Mi. La 7e du Dm7 (Do) descend elle aussi conjointement vers Si. Réalisation d'ÉCOLE : aucune quinte ni octave parallèle, sensible non doublée, tessitures respectées.",
    concepts: ["9e de dominante", "dissonance préparée", "résolution de la 9e", "sensible", "septième de dominante"],
    regles: "ecole",
  },
];

// ════════════════════════════════════════════════════════════════════════════
// COURS 12 — La substitution tritonique
// ════════════════════════════════════════════════════════════════════════════

export const COURS12_EXERCISES: (IdentifyExercise | BuildExercise)[] = [
  {
    id: "c12-sub-triton-principe",
    type: "identify", cours: 12, difficulty: 1,
    tags: ["substitution tritonique", "principe", "V7"],
    concepts: ["triton", "substitution", "basse chromatique"],
    question: "La substitution tritonique remplace V7 par quel accord ?",
    options: [
      { id: "a", label: "L'accord situé une quinte au-dessus",          isCorrect: false },
      { id: "b", label: "L'accord situé un triton (♭5) plus bas",       isCorrect: true  },
      { id: "c", label: "L'accord situé une tierce mineure plus haut",  isCorrect: false },
      { id: "d", label: "Le VIIe degré diminué",                        isCorrect: false },
    ],
    explanation: "La substitution tritonique (SubV) remplace G7 par D♭7 (un triton = 6 demi-tons plus bas). G et D♭ sont à distance de triton. L'astuce : G7 et D♭7 partagent les mêmes notes de triton (F et B/C♭), juste renommées. La basse descend chromatiquement D♭→C au lieu de G→C.",
  },
  {
    id: "c12-sub-triton-do",
    type: "identify", cours: 12, difficulty: 1,
    tags: ["substitution tritonique", "Do majeur", "G7"],
    concepts: ["SubV", "Db7", "basse chromatique"],
    question: "En Do majeur, quel accord est la substitution tritonique de G7 ?",
    options: [
      { id: "a", label: "F7",   isCorrect: false },
      { id: "b", label: "Db7",  isCorrect: true  },
      { id: "c", label: "Ab7",  isCorrect: false },
      { id: "d", label: "Eb7",  isCorrect: false },
    ],
    explanation: "G → D♭ = 6 demi-tons (triton). G7 = G B D F. D♭7 = D♭ F A♭ C♭(=B). Les deux accords partagent F et B (=C♭) — les notes du triton. La basse D♭ descend chromatiquement vers C (tonique). Très utilisé dans le jazz bebop.",
  },
  {
    id: "c12-sub-triton-notes-communes",
    type: "identify", cours: 12, difficulty: 2,
    tags: ["substitution tritonique", "notes communes", "triton partagé"],
    concepts: ["enharmonie", "triton commun", "G7 et Db7"],
    question: "Quelles notes G7 et D♭7 partagent-ils (à enharmonie près) ?",
    options: [
      { id: "a", label: "G et D♭",              isCorrect: false },
      { id: "b", label: "F et B (=C♭)",         isCorrect: true  },
      { id: "c", label: "D et A♭",              isCorrect: false },
      { id: "d", label: "Aucune note commune",   isCorrect: false },
    ],
    explanation: "G7 = G–B–D–F. D♭7 = D♭–F–A♭–C♭. Les notes communes sont F (identique) et B = C♭ (enharmoniques). Ce sont précisément les notes du triton de G7 ! C'est pourquoi la substitution fonctionne : même tension, basse différente.",
  },
  {
    id: "c12-sub-triton-basse",
    type: "identify", cours: 12, difficulty: 2,
    tags: ["substitution tritonique", "mouvement de basse", "chromatisme"],
    concepts: ["basse chromatique", "approche chromatique"],
    question: "Quel est l'avantage de la substitution tritonique D♭7 → C sur G7 → C ?",
    options: [
      { id: "a", label: "D♭7 est plus dissonant que G7",                   isCorrect: false },
      { id: "b", label: "La basse descend chromatiquement D♭→C (½ ton)",   isCorrect: true  },
      { id: "c", label: "D♭7 supprime la sensible",                         isCorrect: false },
      { id: "d", label: "D♭7 appartient à la gamme de Do majeur",          isCorrect: false },
    ],
    explanation: "G7→C : la basse fait une quinte descendante (G→C, 7 demi-tons). D♭7→C : la basse descend d'un demi-ton (D♭→C), une approche chromatique très fluide. Cette basse chromatique est l'un des attraits majeurs de la substitution tritonique dans le jazz.",
  },
];

export const COURS12_SATB: SATBExercise[] = [
  {
    id: "c12-satb-sub-triton-c",
    type: "satb",
    cours: 12,
    title: "Substitution tritonique en Do",
    subtitle: "IIm7 – SubV7 (D♭7) – IMaj7 · Basse chromatique",
    difficulty: 3,
    tags: ["substitution tritonique", "Db7", "basse chromatique", "Do majeur"],
    keySignature: "C",
    measures: ["IIm7·Dm7", "SubV·Db7", "IMaj7·Cmaj7"],
    solution: [
      { soprano: n("C",5), alto: n("F",4), tenor: n("A",3), bass: n("D",3) },
      { soprano: n("B",4), alto: n("F",4), tenor: n("Ab",3), bass: n("Db",3) },
      { soprano: n("C",5), alto: n("E",4), tenor: n("G",3), bass: n("C",3) },
    ],
    hint: "Db7 = D♭ F A♭ C♭(=B). Notez que F reste en place de Dm7 à Db7 — c'est la note commune (triton partagé). La basse descend chromatiquement D♭→C.",
    explanation: "La substitution tritonique : G7 remplacé par D♭7. Dm7→D♭7→Cmaj7 : la basse descend chromatiquement D→D♭→C (progression ultra-fluide). F reste en place (note du triton commun). A♭ (enharmonique de G#) dans D♭7 crée la couleur blues. C♭=B résout vers C (sensible enharmonique).",
    concepts: ["substitution tritonique", "basse chromatique", "triton commun", "enharmonie"],
    regles: "libre",
  },
  {
    id: "c12-satb-sub-triton-g",
    type: "satb",
    cours: 12,
    title: "Substitution tritonique en Sol",
    subtitle: "Am7 – Ab7 (SubV) – Gmaj7 · Sol majeur",
    difficulty: 3,
    tags: ["substitution tritonique", "Ab7", "Sol majeur", "basse chromatique"],
    keySignature: "G",
    measures: ["IIm7·Am7", "SubV·Ab7", "IMaj7·Gmaj7"],
    solution: [
      { soprano: n("G",4), alto: n("E",4), tenor: n("C",4), bass: n("A",3) },
      { soprano: n("F",4), alto: n("Eb",4), tenor: n("C",4), bass: n("Ab",3) },
      { soprano: n("G",4), alto: n("D",4), tenor: n("B",3), bass: n("G",3) },
    ],
    hint: "Ab7 = A♭ C E♭ G♭. La basse descend A→A♭→G. C reste en place entre Am7 et Ab7.",
    explanation: "En Sol majeur, D7 (V7) est remplacé par A♭7 (SubV). Am7→A♭7→Gmaj7 : même basse chromatique descendante A→A♭→G. C reste en place (note commune = triton de D7 réenharmonisé). E♭ (=D#) résout vers D, G♭(=F#) résout vers G (sensible).",
    concepts: ["substitution tritonique", "basse chromatique", "Sol majeur", "enharmonie"],
    regles: "libre",
  },
];

// ════════════════════════════════════════════════════════════════════════════
// COURS 13 — Le contrepoint à 2 voix
// ════════════════════════════════════════════════════════════════════════════

export const COURS13_EXERCISES: (IdentifyExercise | BuildExercise)[] = [
  {
    id: "c13-contrepoint-1ere-espece",
    type: "identify", cours: 13, difficulty: 1,
    tags: ["contrepoint", "1ère espèce", "note contre note"],
    concepts: ["note contre note", "consonances", "Fux"],
    question: "La première espèce de contrepoint (Fux) est caractérisée par :",
    options: [
      { id: "a", label: "Deux notes au contrepoint pour une note au cantus firmus",  isCorrect: false },
      { id: "b", label: "Note contre note — une note en face de chaque note du cantus", isCorrect: true  },
      { id: "c", label: "Des liaisons et syncopes",                                   isCorrect: false },
      { id: "d", label: "Des notes de passage libres",                                isCorrect: false },
    ],
    explanation: "La 1ère espèce : une note du contrepoint face à chaque note du cantus firmus. Seules les consonances parfaites (unisson, quinte, octave) et imparfaites (tierce, sixte) sont permises. Les quintes et octaves parallèles sont interdites.",
  },
  {
    id: "c13-mouvement-contraire",
    type: "identify", cours: 13, difficulty: 1,
    tags: ["contrepoint", "mouvements", "mouvement contraire"],
    concepts: ["mouvement contraire", "mouvement similaire", "oblique"],
    question: "Dans le contrepoint à 2 voix, le mouvement le plus sûr pour éviter les quintes/octaves parallèles est :",
    options: [
      { id: "a", label: "Le mouvement parallèle (même direction, même intervalle)", isCorrect: false },
      { id: "b", label: "Le mouvement similaire (même direction, intervalle différent)", isCorrect: false },
      { id: "c", label: "Le mouvement contraire (directions opposées)",              isCorrect: true  },
      { id: "d", label: "Le mouvement oblique est toujours interdit",                isCorrect: false },
    ],
    explanation: "Le mouvement contraire (une voix monte, l'autre descend) est privilégié car il ne peut pas créer de quintes ou octaves parallèles. Le mouvement similaire vers une quinte/octave parfaite (de salto) est interdit même s'il n'est pas strictement parallèle.",
  },
  {
    id: "c13-espece-notes-passage",
    type: "identify", cours: 13, difficulty: 2,
    tags: ["contrepoint", "2ème espèce", "notes de passage"],
    concepts: ["notes de passage", "temps faible", "dissonance contrôlée"],
    question: "Dans la 2ème espèce (2 notes contre 1), les dissonances sont permises :",
    options: [
      { id: "a", label: "Sur le temps fort uniquement",                           isCorrect: false },
      { id: "b", label: "Sur le temps faible, comme notes de passage par degrés", isCorrect: true  },
      { id: "c", label: "Jamais — seules les consonances sont permises",           isCorrect: false },
      { id: "d", label: "N'importe où tant que la voix descend",                  isCorrect: false },
    ],
    explanation: "Dans la 2ème espèce, le temps fort doit être consonant. Le temps faible peut être dissonant s'il est une note de passage (par degrés conjoints, entre deux consonances). Ce principe de 'dissonance contrôlée' est fondamental pour toute l'harmonie tonale.",
  },
  {
    id: "c13-quinte-octave-parallele",
    type: "identify", cours: 13, difficulty: 1,
    tags: ["contrepoint", "parallélismes", "règles fondamentales"],
    concepts: ["quintes parallèles", "octaves parallèles", "interdiction"],
    question: "Pourquoi les quintes et octaves parallèles sont-elles interdites en contrepoint ?",
    options: [
      { id: "a", label: "Car elles sont trop dissonantes",                              isCorrect: false },
      { id: "b", label: "Car elles fusionnent les voix — on perd l'indépendance mélodique", isCorrect: true  },
      { id: "c", label: "Car elles créent des tensions non résolues",                   isCorrect: false },
      { id: "d", label: "C'est une règle arbitraire de l'époque baroque",              isCorrect: false },
    ],
    explanation: "Les quintes et octaves parfaites ont une résonance si 'vide' que les deux voix fusionnent acoustiquement — on ne perçoit plus qu'une seule voix. Le contrepoint vise l'indépendance des lignes : chaque voix doit avoir sa propre identité mélodique.",
  },
];

// ════════════════════════════════════════════════════════════════════════════
// COURS 14 — L'harmonisation modale
// ════════════════════════════════════════════════════════════════════════════

export const COURS14_EXERCISES: (IdentifyExercise | BuildExercise)[] = [
  {
    id: "c14-modal-accord-caracteristique-dorien",
    type: "identify", cours: 14, difficulty: 2,
    tags: ["harmonisation modale", "dorien", "accord caractéristique"],
    concepts: ["accord caractéristique", "dorien", "IVe majeur sur mineur"],
    question: "Quel accord est caractéristique du mode dorien (pas présent en éolien) ?",
    options: [
      { id: "a", label: "Le Ier degré mineur (im)",         isCorrect: false },
      { id: "b", label: "Le IVe degré majeur (IV)",          isCorrect: true  },
      { id: "c", label: "Le Ve degré mineur (vm)",           isCorrect: false },
      { id: "d", label: "Le VIIe degré majeur (VII)",        isCorrect: false },
    ],
    explanation: "Dorien vs Éolien : la différence est la 6e (naturelle vs bémolisée). En Ré dorien, le IVe degré est G majeur (G–B–D), pas G mineur. Cet accord IV majeur dans un contexte mineur est la 'marque de fabrique' du dorien — très présent dans la musique folk, le funk et le jazz modal.",
  },
  {
    id: "c14-modal-accord-caracteristique-phrygien",
    type: "identify", cours: 14, difficulty: 2,
    tags: ["harmonisation modale", "phrygien", "accord caractéristique"],
    concepts: ["accord caractéristique", "phrygien", "♭II majeur"],
    question: "Quel accord caractérise le mode phrygien et lui donne sa couleur flamenco ?",
    options: [
      { id: "a", label: "Le I7 (dominante sur la tonique)",                isCorrect: false },
      { id: "b", label: "Le ♭II (accord construit sur le 2e degré bémolisé)", isCorrect: true  },
      { id: "c", label: "Le IV augmenté",                                   isCorrect: false },
      { id: "d", label: "Le VIm7",                                          isCorrect: false },
    ],
    explanation: "En Mi phrygien, le ♭II est F majeur (F–A–C). Le mouvement F→E (♭II→I) est la cadence phrygienne — une 'cadence andalouse' typique du flamenco. Ce ♭II donne au phrygien son caractère espagnol ou moyen-oriental.",
  },
  {
    id: "c14-modal-accord-caracteristique-lydien",
    type: "identify", cours: 14, difficulty: 2,
    tags: ["harmonisation modale", "lydien", "accord caractéristique"],
    concepts: ["accord caractéristique", "lydien", "IIe degré majeur"],
    question: "Quel accord est caractéristique du mode lydien et absent de l'ionien ?",
    options: [
      { id: "a", label: "Le IVe mineur",             isCorrect: false },
      { id: "b", label: "Le IIe degré majeur (II)",  isCorrect: true  },
      { id: "c", label: "Le VIIe diminué",            isCorrect: false },
      { id: "d", label: "Le Ve augmenté",             isCorrect: false },
    ],
    explanation: "En Fa lydien, le ♯4 (Si naturel) crée un IIe degré majeur (G–B–D) au lieu du IVe (B♭–D–F de Fa ionien). Ce IIe majeur sur fond lydien donne la couleur 'magique' et 'lumineuse' du lydien. John Williams en use abondamment (E.T., Star Wars).",
  },
  {
    id: "c14-modal-harmonisation",
    type: "identify", cours: 14, difficulty: 3,
    tags: ["harmonisation modale", "dorien", "progression typique"],
    concepts: ["harmonisation modale", "progression dorian"],
    question: "Quelle progression est typiquement dorienne ?",
    options: [
      { id: "a", label: "i – VII – VI – V (mineur naturel)",                isCorrect: false },
      { id: "b", label: "i – IV – i – IV (alternance tonique-sousdominante)", isCorrect: true  },
      { id: "c", label: "i – iv – V – i (harmonique)",                      isCorrect: false },
      { id: "d", label: "I – IV – V – I (majeur)",                          isCorrect: false },
    ],
    explanation: "La progression i–IV en dorien exploite l'accord caractéristique du mode. Dm–G en Ré dorien (ou Am–D en La dorien) crée un va-et-vient entre tonique mineure et sous-dominante majeure. Cette couleur est au cœur de 'So What' de Miles Davis et de nombreux standards jazz modaux.",
  },
];

export const COURS14_SATB: SATBExercise[] = [
  {
    id: "c14-satb-dorien-am",
    type: "satb",
    cours: 14,
    title: "Harmonisation dorienne en La",
    subtitle: "Am7 – D – Am7 – G · La dorien",
    difficulty: 2,
    tags: ["harmonisation modale", "dorien", "La dorien", "So What"],
    keySignature: "C",
    measures: ["i·Am7", "IV·D", "i·Am7", "VII·G"],
    solution: [
      { soprano: n("E",5), alto: n("C",5), tenor: n("E",4), bass: n("A",3) },
      { soprano: n("F#",5),alto: n("D",4), tenor: n("A",3), bass: n("D",3) },
      { soprano: n("E",5), alto: n("C",5), tenor: n("E",4), bass: n("A",3) },
      { soprano: n("D",5), alto: n("B",4), tenor: n("G",4), bass: n("G",3) },
    ],
    hint: "En La dorien (gamme de Sol), le IVe degré est Ré majeur (avec F#). Le G est le ♭VII dorien, pas le V.",
    explanation: "La dorien = gamme de Sol à partir de La. IVe degré = D majeur (avec F# naturel). Le mouvement Am7→D→Am7 est la cellule de base du jazz modal ('So What' de Miles Davis). G (♭VII) donne une couleur ouverte sans résolution de sensible.",
    concepts: ["dorien", "IV majeur", "jazz modal", "Miles Davis"],
    regles: "libre",
  },
  {
    id: "c14-satb-mixolydien-g",
    type: "satb",
    cours: 14,
    title: "Harmonisation mixolydienne en Sol",
    subtitle: "G – F – C – G · Sol mixolydien",
    difficulty: 2,
    tags: ["harmonisation modale", "mixolydien", "Sol mixolydien", "rock"],
    keySignature: "C",
    measures: ["I·G", "♭VII·F", "IV·C", "I·G"],
    solution: [
      { soprano: n("G",4), alto: n("D",4), tenor: n("B",3), bass: n("G",3) },
      { soprano: n("A",4), alto: n("F",4), tenor: n("C",4), bass: n("F",3) },
      { soprano: n("G",4), alto: n("E",4), tenor: n("C",4), bass: n("C",3) },
      { soprano: n("G",4), alto: n("D",4), tenor: n("B",3), bass: n("G",3) },
    ],
    hint: "Sol mixolydien : F naturel (♭7). La progression I–♭VII–IV–I évite toute cadence parfaite — aucune sensible F#.",
    explanation: "Sol mixolydien utilise F naturel au lieu de F#. La progression I–♭VII–IV–I crée un mouvement 'en boucle' typique du rock et du blues. Sans sensible, pas de résolution classique V→I — on reste dans l'espace modal.",
    concepts: ["mixolydien", "♭VII", "harmonisation modale", "rock"],
  },
  {
    id: "c14-satb-lydien-f",
    type: "satb",
    cours: 14,
    title: "Harmonisation lydienne en Fa",
    subtitle: "F – G – Am – F · Fa lydien",
    difficulty: 2,
    tags: ["harmonisation modale", "lydien", "Fa lydien", "IIe majeur"],
    keySignature: "F",
    measures: ["I·F", "II·G", "III·Am", "I·F"],
    solution: [
      { soprano: n("A",4), alto: n("F",4), tenor: n("C",4), bass: n("F",3) },
      { soprano: n("B",4), alto: n("G",4), tenor: n("D",4), bass: n("G",3) },
      { soprano: n("C",5), alto: n("A",4), tenor: n("E",4), bass: n("A",3) },
      { soprano: n("A",4), alto: n("F",4), tenor: n("C",4), bass: n("F",3) },
    ],
    hint: "Fa lydien : Si naturel (♯4). Le IIe degré G majeur (avec B naturel) est l'accord caractéristique du lydien.",
    explanation: "Fa lydien (4e mode de Do majeur) : B naturel au lieu de Bb. G majeur (IIe degré) est l'accord qui révèle le lydien — en Fa ionien, ce serait G mineur. La progression I–II–III en lydien crée une couleur lumineuse et 'flottante', typique de John Williams.",
    concepts: ["lydien", "#4", "IIe majeur", "accord caractéristique"],
    regles: "libre",
  },
];

// ════════════════════════════════════════════════════════════════════════════
// COURS 15 — Les progressions jazz avancées
// ════════════════════════════════════════════════════════════════════════════

export const COURS15_EXERCISES: (IdentifyExercise | BuildExercise)[] = [
  {
    id: "c15-jazz-turnaround",
    type: "identify", cours: 15, difficulty: 2,
    tags: ["jazz", "turnaround", "I-VI-II-V"],
    concepts: ["turnaround", "cycle de répétition", "I-VI-II-V"],
    question: "Qu'est-ce qu'un 'turnaround' en jazz ?",
    options: [
      { id: "a", label: "Une modulation permanente vers une nouvelle tonalité",          isCorrect: false },
      { id: "b", label: "Une progression de 2-4 mesures qui ramène au début d'une section", isCorrect: true  },
      { id: "c", label: "Une substitution tritonique appliquée au II",                   isCorrect: false },
      { id: "d", label: "Un accord de passage entre deux tonalités",                     isCorrect: false },
    ],
    explanation: "Le turnaround est une courte progression (souvent I–VI–II–V ou I–♭III–♭VI–♭II) qui boucle la forme et prépare le retour au I du thème. Il est généralement joué dans les 2 dernières mesures d'une section de 8 ou 12 mesures.",
  },
  {
    id: "c15-jazz-blues-structure",
    type: "identify", cours: 15, difficulty: 1,
    tags: ["jazz", "blues", "12 mesures"],
    concepts: ["blues à 12 mesures", "structure I-IV-V"],
    question: "Quelle est la structure harmonique de base du blues jazz à 12 mesures ?",
    options: [
      { id: "a", label: "I (4) – IV (4) – I (4)",                                isCorrect: false },
      { id: "b", label: "I (4) – IV (2) – I (2) – V (1) – IV (1) – I (2)",      isCorrect: true  },
      { id: "c", label: "I (6) – V (4) – I (2)",                                 isCorrect: false },
      { id: "d", label: "I (4) – II (4) – V (4)",                                isCorrect: false },
    ],
    explanation: "Le blues à 12 mesures classique : I7 (4) | IV7 (2) | I7 (2) | V7 (1) IV7 (1) | I7 (2). En jazz, on l'enrichit avec des substitutions : le turnaround final IV–V est remplacé par un II–V–I sophistiqué, et les accords deviennent des dominantes 7 avec extensions.",
  },
  {
    id: "c15-jazz-backdoor",
    type: "identify", cours: 15, difficulty: 3,
    tags: ["jazz", "backdoor", "♭VII7"],
    concepts: ["backdoor dominant", "SubV alternatif", "♭VII7→I"],
    question: "Le 'backdoor dominant' vers Cmaj7 est :",
    options: [
      { id: "a", label: "G7 (V7 classique)",   isCorrect: false },
      { id: "b", label: "Db7 (SubV)",           isCorrect: false },
      { id: "c", label: "Bb7 (♭VII7)",          isCorrect: true  },
      { id: "d", label: "Ab7",                  isCorrect: false },
    ],
    explanation: "Le backdoor dominant est ♭VII7 (Bb7 vers Cmaj7). Au lieu d'aller G7→C (quinte descendante), on va Bb7→C (seconde ascendante). Bb7 contient Eb et Ab — empruntés au mode mixolydien IV (sous-dominante modale). Très utilisé dans le jazz cool et le bebop tardif.",
  },
  {
    id: "c15-jazz-rythme-harmonique",
    type: "identify", cours: 15, difficulty: 2,
    tags: ["jazz", "rythme harmonique", "tempo des accords"],
    concepts: ["rythme harmonique", "densité", "bebop vs ballad"],
    question: "Qu'est-ce que le rythme harmonique ?",
    options: [
      { id: "a", label: "Le tempo général du morceau",                        isCorrect: false },
      { id: "b", label: "La fréquence à laquelle les accords changent",       isCorrect: true  },
      { id: "c", label: "Le rythme joué par le pianiste à la main droite",    isCorrect: false },
      { id: "d", label: "Le nombre de mesures dans une phrase",               isCorrect: false },
    ],
    explanation: "Le rythme harmonique détermine la 'densité' harmonique : lent (une harmonie par mesure dans les ballades) ou rapide (2 accords par mesure dans le bebop). Miles Davis a révolutionné le jazz en réduisant drastiquement le rythme harmonique — 'So What' a seulement 2 accords sur 32 mesures.",
  },
];

export const COURS15_SATB: SATBExercise[] = [
  {
    id: "c15-satb-iivi-jazz-c",
    type: "satb",
    cours: 15,
    title: "II–V–I jazz étendu en Do",
    subtitle: "Dm7 – G7(9) – Cmaj7 · Voicings jazz fermés",
    difficulty: 3,
    tags: ["jazz", "II-V-I", "voicings jazz", "Do majeur"],
    keySignature: "C",
    measures: ["IIm7·Dm7", "V7·G9", "IMaj7·Cmaj7"],
    solution: [
      { soprano: n("C",5), alto: n("A",4), tenor: n("F",4), bass: n("D",3) },
      { soprano: n("D",5), alto: n("F",4), tenor: n("B",3), bass: n("G",3) },
      { soprano: n("E",5), alto: n("G",4), tenor: n("B",3), bass: n("C",3) },
    ],
    hint: "Dm7→G9 : F reste en place (note commune). Dans G9, D est la 9e au soprano. B monte vers B (reste) dans Cmaj7.",
    explanation: "Voicing jazz du II–V–I : la 7e de Dm7 (C) au soprano crée un mouvement conjoint C→D (9e de G)→E (3ce de Cmaj7). F reste en place de Dm7 à G9 (notes communes). La basse fait la progression roots D→G→C. Le résultat est fluide et idiomatique jazz.",
    concepts: ["voicings jazz", "9e", "notes communes", "II-V-I jazz"],
    regles: "libre",
  },
  {
    id: "c15-satb-blues-jazz-f",
    type: "satb",
    cours: 15,
    title: "Blues jazz en Fa (6 premières mesures)",
    subtitle: "F7 – Bb7 – F7 – Cm7 – F7 · Progression blues",
    difficulty: 3,
    tags: ["jazz", "blues", "Fa majeur", "dominantes"],
    keySignature: "F",
    measures: ["I7·F7", "IV7·Bb7", "I7·F7", "IIm7·Cm7", "V7·F7"],
    solution: [
      { soprano: n("A",4), alto: n("Eb",4), tenor: n("C",4), bass: n("F",3) },
      { soprano: n("Bb",4),alto: n("Ab",4), tenor: n("D",4), bass: n("Bb",3) },
      { soprano: n("A",4), alto: n("Eb",4), tenor: n("C",4), bass: n("F",3) },
      { soprano: n("G",4), alto: n("Eb",4), tenor: n("C",4), bass: n("C",3) },
      { soprano: n("A",4), alto: n("Eb",4), tenor: n("C",4), bass: n("F",3) },
    ],
    hint: "Eb naturel dans F7 (♭7 de Fa) est hors de Fa majeur — c'est normal, le blues utilise des dominantes altérées même sur I.",
    explanation: "Le blues jazz utilise des accords de 7e dominante sur chaque degré — même I et IV sont des dominantes 7. F7 (I7) contient Eb (♭7) étranger à Fa majeur. Bb7 (IV7) contient Ab. Ce chromatisme 'bluesé' est la signature du blues : la grille est fonctionnelle mais les couleurs sont délibérément 'sales'.",
    concepts: ["blues jazz", "dominante sur I", "Eb dans Fa majeur", "couleur blues"],
    regles: "libre",
  },
  {
    id: "c15-satb-turnaround-c",
    type: "satb",
    cours: 15,
    title: "Turnaround I–VI–II–V en Do",
    subtitle: "C – Am7 – Dm7 – G7 · Cadence jazz cyclique",
    difficulty: 2,
    tags: ["jazz", "turnaround", "I-VI-II-V", "Do majeur"],
    keySignature: "C",
    measures: ["I·C", "VI·Am7", "II·Dm7", "V7·G7"],
    solution: [
      { soprano: n("E",5), alto: n("C",5), tenor: n("G",4), bass: n("C",3) },
      { soprano: n("E",5), alto: n("C",5), tenor: n("E",4), bass: n("A",3) },
      { soprano: n("F",5), alto: n("C",5), tenor: n("A",3), bass: n("D",3) },
      { soprano: n("F",5), alto: n("B",4), tenor: n("G",4), bass: n("G",3) },
    ],
    hint: "C→Am7 : E et C restent en place, seule la basse bouge (C→A). Am7→Dm7 : la basse descend d'une quinte (A→D), le reste bouge peu.",
    explanation: "Le turnaround I–VI–II–V crée un cycle de retour vers I. Notes communes maximisées : E reste de C à Am7, C reste de Am7 à Dm7, F reste de Dm7 à G7. La basse fait le cycle des quintes descendantes C–A–D–G. C'est la progression jazz la plus employée.",
    concepts: ["turnaround", "I-VI-II-V", "cycle des quintes", "notes communes jazz"],
    regles: "libre",
  },
];

// ════════════════════════════════════════════════════════════════════════════
// COURS 16 — La réharmonisation
// ════════════════════════════════════════════════════════════════════════════

export const COURS16_EXERCISES: (IdentifyExercise | BuildExercise)[] = [
  {
    id: "c16-reharmonisation-diatonique",
    type: "identify", cours: 16, difficulty: 1,
    tags: ["réharmonisation", "substitution diatonique", "même fonction"],
    concepts: ["substitution diatonique", "même fonction harmonique", "couleur différente"],
    question: "La substitution diatonique remplace un accord par :",
    options: [
      { id: "a", label: "Un accord à un triton de distance",                          isCorrect: false },
      { id: "b", label: "Un accord de la même gamme ayant la même fonction",           isCorrect: true  },
      { id: "c", label: "Un accord emprunté au mode parallèle",                       isCorrect: false },
      { id: "d", label: "Un accord diminué de passage",                               isCorrect: false },
    ],
    explanation: "La substitution diatonique remplace un accord par un autre accord de la même gamme partageant 2 notes et la même fonction. Ex : Am remplace C (deux partagent E et C), Dm remplace F (deux partagent F et A). Même fonction, couleur différente.",
  },
  {
    id: "c16-reharmonisation-coltrane",
    type: "identify", cours: 16, difficulty: 3,
    tags: ["réharmonisation", "Coltrane changes", "tierces majeures"],
    concepts: ["Coltrane changes", "cycle des tierces", "Giant Steps"],
    question: "Les 'Coltrane changes' réharmonisent les cadences en divisant l'octave en :",
    options: [
      { id: "a", label: "Deux parties égales (tritons)",            isCorrect: false },
      { id: "b", label: "Trois parties égales (tierces majeures)",  isCorrect: true  },
      { id: "c", label: "Quatre parties égales (quintes)",          isCorrect: false },
      { id: "d", label: "Six parties égales (secondes majeures)",   isCorrect: false },
    ],
    explanation: "John Coltrane ('Giant Steps', 1960) a révolutionné la réharmonisation en divisant l'octave en 3 parties égales (tierces majeures : C–E–Ab–C). Un II–V–I classique devient 3 II–V–I rapides dans 3 tonalités à distance de tierce majeure. Cela crée un 'vortex' harmonique tournoiement vertigineux.",
  },
  {
    id: "c16-reharmonisation-parallelisme",
    type: "identify", cours: 16, difficulty: 2,
    tags: ["réharmonisation", "harmonisation parallèle", "Debussy"],
    concepts: ["harmonisation parallèle", "planing", "impressionnisme"],
    question: "L'harmonisation parallèle (planing) consiste à :",
    options: [
      { id: "a", label: "Faire monter toutes les voix en même temps",                        isCorrect: false },
      { id: "b", label: "Déplacer un accord entier en conservant sa qualité, par degrés conjoints", isCorrect: true  },
      { id: "c", label: "Alterner entre accord majeur et mineur",                             isCorrect: false },
      { id: "d", label: "Doubler la mélodie à l'octave",                                     isCorrect: false },
    ],
    explanation: "L'harmonisation parallèle (planing) déplace tout l'accord en bloc, conservant le même type de voicing. La mélodie impose les notes, et l'accord suit en glissant. Debussy l'a popularisé — ses accords de 9e parallèles créent l'effet 'impressionniste' caractéristique ('La cathédrale engloutie').",
  },
];

export const COURS16_SATB: SATBExercise[] = [
  {
    id: "c16-satb-reharmo-diatonique",
    type: "satb",
    cours: 16,
    title: "Réharmonisation diatonique en Do",
    subtitle: "C → Em → Am → Cmaj7 · Substitutions tonique",
    difficulty: 2,
    tags: ["réharmonisation", "substitution diatonique", "Do majeur"],
    keySignature: "C",
    measures: ["I·C", "III·Em", "VI·Am", "IMaj7·Cmaj7"],
    solution: [
      { soprano: n("E",5), alto: n("C",5), tenor: n("G",4), bass: n("C",3) },
      { soprano: n("E",5), alto: n("B",4), tenor: n("G",4), bass: n("E",3) },
      { soprano: n("E",5), alto: n("C",5), tenor: n("E",4), bass: n("A",3) },
      { soprano: n("E",5), alto: n("B",4), tenor: n("G",4), bass: n("C",3) },
    ],
    hint: "E reste au soprano tout au long — c'est la même mélodie. Seule l'harmonie change. C, Em et Am sont tous de fonction tonique.",
    explanation: "Réharmonisation diatonique : C, Em et Am ont tous la même fonction tonique (pas de F ni de B). La mélodie reste identique (E au soprano) mais les harmonies changent. C→Em : couleur plus 'modale'. Em→Am : descente de la basse par tierce. Am→Cmaj7 : retour tonique enrichi.",
    concepts: ["substitution diatonique", "même mélodie", "fonction tonique", "couleurs différentes"],
  },
  {
    id: "c16-satb-reharmo-sub-triton",
    type: "satb",
    cours: 16,
    title: "Réharmonisation par substitution tritonique",
    subtitle: "Dm7 – G7 – C → Dm7 – D♭7 – C",
    difficulty: 3,
    tags: ["réharmonisation", "substitution tritonique", "basse chromatique"],
    keySignature: "C",
    measures: ["IIm7·Dm7", "SubV·Db7", "I·Cmaj7"],
    solution: [
      { soprano: n("F",5), alto: n("C",5), tenor: n("A",3), bass: n("D",3) },
      { soprano: n("F",5), alto: n("Ab",4), tenor: n("B",3), bass: n("Db",3) },
      { soprano: n("E",5), alto: n("G",4), tenor: n("C",4), bass: n("C",3) },
    ],
    hint: "F reste en place de Dm7 à D♭7 (note du triton commun). A♭ dans D♭7 descend vers G dans Cmaj7. Basse chromatique D→D♭→C.",
    explanation: "La substitution tritonique de G7 par D♭7 sous la même mélodie. F reste en place (triton commun G7/D♭7). A♭ crée la couleur 'blue note' de la substitution. B est enharmonique de C♭ — la sensible de la nouvelle dominante. Basse chromatique D→D♭→C : ultra-fluide.",
    concepts: ["substitution tritonique", "réharmonisation", "même mélodie", "basse chromatique"],
    regles: "libre",
  },
  {
    id: "c16-satb-reharmo-modale",
    type: "satb",
    cours: 16,
    title: "Réharmonisation modale en Do",
    subtitle: "C – Cm – F – Fm · Emprunt au parallèle mineur",
    difficulty: 2,
    tags: ["réharmonisation", "emprunt modal", "iv mineur", "Do majeur"],
    keySignature: "C",
    measures: ["I·C", "i·Cm", "IV·F", "iv·Fm"],
    solution: [
      { soprano: n("G",4), alto: n("E",4), tenor: n("C",4), bass: n("C",3) },
      { soprano: n("G",4), alto: n("Eb",4), tenor: n("C",4), bass: n("C",3) },
      { soprano: n("F",4), alto: n("C",4), tenor: n("A",3), bass: n("F",3) },
      { soprano: n("F",4), alto: n("C",4), tenor: n("Ab",3),bass: n("F",3) },
    ],
    hint: "De C à Cm : seule la tierce change (E → Eb). De F à Fm : seule la tierce change (A → Ab). La mélodie (G–G–F–F) reste identique.",
    explanation: "Réharmonisation par emprunt modal : le même accord, rendu mineur. C→Cm : Eb remplace E (assombrissement). F→Fm : Ab remplace A. La mélodie G–G–F–F est identique. Le contraste majeur/mineur crée une progression harmonique expressément romantique — Schubert et Brahms en font leur signature.",
    concepts: ["emprunt modal", "minorisation", "même mélodie", "tierce chromatique"],
  },
];

// ════════════════════════════════════════════════════════════════════════════
// COURS 17 — La phrase musicale et la forme
// ════════════════════════════════════════════════════════════════════════════

export const COURS17_EXERCISES: (IdentifyExercise | BuildExercise)[] = [
  {
    id: "c17-forme-periode",
    type: "identify", cours: 17, difficulty: 1,
    tags: ["phrase musicale", "période", "antécédent-conséquent"],
    concepts: ["période musicale", "antécédent", "conséquent"],
    question: "Une période musicale se compose de :",
    options: [
      { id: "a", label: "Un motif répété 4 fois",                                   isCorrect: false },
      { id: "b", label: "Une phrase antécédente (demi-cadence) + une phrase conséquente (cadence parfaite)", isCorrect: true  },
      { id: "c", label: "Deux phrases identiques",                                   isCorrect: false },
      { id: "d", label: "Un développement + une récapitulation",                    isCorrect: false },
    ],
    explanation: "La période classique : une phrase antécédente se termine par une demi-cadence (suspension sur V) — la 'question'. La phrase conséquente résout sur une cadence parfaite (I) — la 'réponse'. C'est la structure de base de la mélodie classique. Ex : Thème de la Lettre à Élise de Beethoven.",
  },
  {
    id: "c17-forme-sonate",
    type: "identify", cours: 17, difficulty: 2,
    tags: ["forme sonate", "exposition", "développement", "récapitulation"],
    concepts: ["forme sonate", "trois grandes sections"],
    question: "La forme sonate classique comprend dans l'ordre :",
    options: [
      { id: "a", label: "Exposition – Coda – Développement",                  isCorrect: false },
      { id: "b", label: "Développement – Exposition – Récapitulation",         isCorrect: false },
      { id: "c", label: "Exposition – Développement – Récapitulation",         isCorrect: true  },
      { id: "d", label: "Introduction – Développement – Coda",                 isCorrect: false },
    ],
    explanation: "La forme sonate (Haydn, Mozart, Beethoven) : Exposition (présentation des thèmes en tonique et dominante) → Développement (exploration modulante) → Récapitulation (retour des thèmes, tous en tonique). La coda peut suivre la récapitulation. C'est le schéma de la majorité des 1ers mouvements de symphonies classiques.",
  },
  {
    id: "c17-forme-motif",
    type: "identify", cours: 17, difficulty: 1,
    tags: ["phrase musicale", "motif", "cellule"],
    concepts: ["motif", "cellule mélodique", "unité de base"],
    question: "Quelle est la plus petite unité structurelle signifiante d'une phrase musicale ?",
    options: [
      { id: "a", label: "La période",  isCorrect: false },
      { id: "b", label: "La phrase",   isCorrect: false },
      { id: "c", label: "Le motif",    isCorrect: true  },
      { id: "d", label: "La section",  isCorrect: false },
    ],
    explanation: "La hiérarchie structurelle : Motif (2-4 notes, cellule de base) → Phrase (2-4 motifs, pensée complète) → Période (antécédent + conséquent) → Section → Forme. Beethoven a bâti toute sa 5e symphonie sur un motif de 4 notes : 3 courts + 1 long (ta-ta-ta-TAAA).",
  },
  {
    id: "c17-forme-rondo",
    type: "identify", cours: 17, difficulty: 2,
    tags: ["forme rondo", "refrain", "couplets"],
    concepts: ["forme rondo", "A-B-A-C-A", "refrain"],
    question: "La forme rondo est caractérisée par :",
    options: [
      { id: "a", label: "Un seul thème développé de façon continue",                       isCorrect: false },
      { id: "b", label: "Un refrain (A) qui revient entre des couplets contrastants (B, C…)", isCorrect: true  },
      { id: "c", label: "Deux thèmes opposés qui se développent simultanément",            isCorrect: false },
      { id: "d", label: "La répétition exacte d'une phrase 3 fois de suite",               isCorrect: false },
    ],
    explanation: "La forme rondo : A–B–A–C–A (ou A–B–A–B–A). Le refrain A revient dans la tonique principale après chaque épisode (B, C) dans des tonalités différentes. Très utilisée dans les finales rapides de concertos et sonates (Beethoven, Mozart).",
  },
];

// ════════════════════════════════════════════════════════════════════════════
// COURS 18 — Le développement motivique
// ════════════════════════════════════════════════════════════════════════════

export const COURS18_EXERCISES: (IdentifyExercise | BuildExercise)[] = [
  {
    id: "c18-dev-inversion",
    type: "identify", cours: 18, difficulty: 1,
    tags: ["développement motivique", "inversion", "miroir"],
    concepts: ["inversion mélodique", "miroir", "technique contrapuntique"],
    question: "L'inversion d'un motif mélodique consiste à :",
    options: [
      { id: "a", label: "Le jouer à l'envers (rétrograde)",                 isCorrect: false },
      { id: "b", label: "Retourner chaque intervalle dans la direction opposée", isCorrect: true  },
      { id: "c", label: "Le transposer d'une octave plus bas",               isCorrect: false },
      { id: "d", label: "Doubler son tempo",                                 isCorrect: false },
    ],
    explanation: "L'inversion retourne les intervalles : si le motif monte d'une tierce, l'inversion descend d'une tierce. C'est le motif vu dans un miroir horizontal. Ex : C–E–G (monte) inversé donne C–Ab–F (descend). Bach en use constamment dans ses fugues.",
  },
  {
    id: "c18-dev-augmentation",
    type: "identify", cours: 18, difficulty: 1,
    tags: ["développement motivique", "augmentation", "valeurs doublées"],
    concepts: ["augmentation rythmique", "élargissement", "majestueux"],
    question: "L'augmentation d'un motif rythmique consiste à :",
    options: [
      { id: "a", label: "Diviser chaque valeur de note par deux",        isCorrect: false },
      { id: "b", label: "Multiplier chaque valeur de note par deux",     isCorrect: true  },
      { id: "c", label: "Ajouter des ornements",                         isCorrect: false },
      { id: "d", label: "Changer la métrique",                           isCorrect: false },
    ],
    explanation: "L'augmentation double les valeurs rythmiques : une noire devient blanche, une croche devient noire. Le motif semble s'élargir, devenant plus majestueux ou solennel. Bach l'utilise pour le point culminant de fugues — le sujet en augmentation à la basse pendant que les autres voix s'agitent.",
  },
  {
    id: "c18-dev-retrograde",
    type: "identify", cours: 18, difficulty: 2,
    tags: ["développement motivique", "rétrograde", "cancrizans"],
    concepts: ["rétrograde", "motif à l'envers", "canon écrevisse"],
    question: "Le 'canon cancrizans' (marche de crabe) utilise :",
    options: [
      { id: "a", label: "L'inversion du motif",                                         isCorrect: false },
      { id: "b", label: "Le rétrograde — le motif joué de la fin vers le début",        isCorrect: true  },
      { id: "c", label: "L'augmentation en valeurs triplées",                           isCorrect: false },
      { id: "d", label: "Un motif joué simultanément dans deux tonalités",              isCorrect: false },
    ],
    explanation: "Le rétrograde joue le motif à l'envers. La 'Offertorium' de Bach et certains canons de Mozart utilisent cette technique. Dans la musique sérielle du XXe siècle, rétrograde, inversion et rétrograde-inversion sont les 4 formes fondamentales d'une série dodécaphonique.",
  },
  {
    id: "c18-dev-fragmentation",
    type: "identify", cours: 18, difficulty: 2,
    tags: ["développement motivique", "fragmentation", "Beethoven"],
    concepts: ["fragmentation", "réduction du motif", "développement dramatique"],
    question: "La fragmentation d'un motif consiste à :",
    options: [
      { id: "a", label: "L'allonger en ajoutant des notes",                             isCorrect: false },
      { id: "b", label: "N'utiliser qu'une partie du motif, répétée de façon obsédante", isCorrect: true  },
      { id: "c", label: "Le transposer dans une autre tonalité",                        isCorrect: false },
      { id: "d", label: "Changer son mode (majeur/mineur)",                             isCorrect: false },
    ],
    explanation: "La fragmentation isole un fragment du motif (souvent les 2-3 premières notes) et le répète comme une obsession croissante. Beethoven en fait un usage magistral dans le développement de la 5e Symphonie : le motif de 4 notes se réduit à 2, puis à 1, créant une tension insoutenable avant la récapitulation.",
  },
];

// ════════════════════════════════════════════════════════════════════════════
// COURS 19 — Introduction à l'orchestration
// ════════════════════════════════════════════════════════════════════════════

export const COURS19_EXERCISES: (IdentifyExercise | BuildExercise)[] = [
  {
    id: "c19-orchestre-famille-cordes",
    type: "identify", cours: 19, difficulty: 1,
    tags: ["orchestration", "cordes", "tessiture"],
    concepts: ["famille des cordes", "SATB orchestral", "violon alto violoncelle contrebasse"],
    question: "Dans l'orchestre à cordes, quel instrument joue typiquement la voix de basse ?",
    options: [
      { id: "a", label: "Alto",        isCorrect: false },
      { id: "b", label: "Violoncelle", isCorrect: true  },
      { id: "c", label: "Contrebasse", isCorrect: false },
      { id: "d", label: "Violon II",   isCorrect: false },
    ],
    explanation: "La répartition SATB à l'orchestre à cordes : Soprano = Violon I, Alto = Violon II, Ténor = Alto, Basse = Violoncelle. La contrebasse double généralement le violoncelle à l'octave inférieure pour renforcer la basse. Le violoncelle (tessiture C2–C6) est l'instrument de basse par excellence.",
  },
  {
    id: "c19-orchestre-instrument-transposant",
    type: "identify", cours: 19, difficulty: 2,
    tags: ["orchestration", "instruments transposants", "clarinette"],
    concepts: ["instrument transposant", "Bb", "transposition"],
    question: "Quand une clarinette en Sib joue un Do écrit, l'auditeur entend :",
    options: [
      { id: "a", label: "Un Do (pas de transposition)",  isCorrect: false },
      { id: "b", label: "Un Sib (une seconde plus bas)", isCorrect: true  },
      { id: "c", label: "Un Ré (une seconde plus haut)", isCorrect: false },
      { id: "d", label: "Un Sol (une quinte plus bas)",  isCorrect: false },
    ],
    explanation: "La clarinette en Sib est un instrument transposant en Sib : elle sonne une seconde majeure (un ton) plus bas que la note écrite. Do écrit = Sib entendu. Pour écrire un Do audible, on écrit Ré. Les instruments transpositeurs courants : clarinette Sib (-1 ton), cor en Fa (-1 quinte), trompette Sib (-1 ton).",
  },
  {
    id: "c19-orchestre-tessitures",
    type: "identify", cours: 19, difficulty: 1,
    tags: ["orchestration", "tessitures", "cuivres"],
    concepts: ["tessiture", "cor", "trompette", "trombone"],
    question: "Quel instrument de la famille des cuivres a la tessiture la plus basse ?",
    options: [
      { id: "a", label: "Trompette",  isCorrect: false },
      { id: "b", label: "Cor",        isCorrect: false },
      { id: "c", label: "Trombone",   isCorrect: false },
      { id: "d", label: "Tuba",       isCorrect: true  },
    ],
    explanation: "Tessitures des cuivres (du plus aigu au plus grave) : Trompette (E3–C6) → Cor (B1–F5) → Trombone (E2–F5) → Tuba (D1–F4). Le tuba est la 'basse' des cuivres, pendant que la trompette est le soprano. Dans l'orchestre, le tuba est souvent doublé par les contrebasses.",
  },
  {
    id: "c19-orchestre-doublures",
    type: "identify", cours: 19, difficulty: 2,
    tags: ["orchestration", "doublures", "timbre", "renforcement"],
    concepts: ["doublures orchestrales", "fusion de timbres"],
    question: "Quelle doublure est classiquement utilisée pour renforcer le son d'une mélodie aux cordes ?",
    options: [
      { id: "a", label: "Doubler à l'unisson avec les percussions",                         isCorrect: false },
      { id: "b", label: "Doubler à l'octave supérieure avec les bois (flûte ou hautbois)",  isCorrect: true  },
      { id: "c", label: "Doubler avec le tuba",                                              isCorrect: false },
      { id: "d", label: "Doubler à la tierce inférieure avec les trombones",                isCorrect: false },
    ],
    explanation: "La doublure classique : mélodie aux cordes + même mélodie à l'octave supérieure à la flûte ou au hautbois. La flûte 'éclaircit' le son des cordes, le hautbois le 'perce'. Doubler à l'unisson avec un instrument différent enrichit le timbre sans changer la hauteur. Ravel était maître de ces mélanges de timbres.",
  },
];

// ════════════════════════════════════════════════════════════════════════════
// COURS 20 — Analyse des grands compositeurs classiques
// ════════════════════════════════════════════════════════════════════════════

export const COURS20_EXERCISES: (IdentifyExercise | BuildExercise)[] = [
  {
    id: "c20-analyse-bach-signature",
    type: "identify", cours: 20, difficulty: 2,
    tags: ["analyse", "Bach", "signature harmonique"],
    concepts: ["Bach", "contrepoint", "cycle des quintes"],
    question: "Quelle technique harmonique est la 'signature' de Bach dans ses chorals ?",
    options: [
      { id: "a", label: "Les accords parallèles et le planing",                           isCorrect: false },
      { id: "b", label: "Le cycle des quintes complet avec tonicisations et chromatismes", isCorrect: true  },
      { id: "c", label: "L'utilisation exclusive de la gamme pentatonique",               isCorrect: false },
      { id: "d", label: "Les cadences modales sans sensible",                             isCorrect: false },
    ],
    explanation: "Bach maîtrise le cycle des quintes avec une densité chromatique unique : tonicisations de chaque degré, chromatismes expressifs (notes de passage chromatiques, appoggiatures), conduites de voix impeccables. Ses chorals contiennent plus d'accords distincts par mesure que tout autre compositeur baroque.",
  },
  {
    id: "c20-analyse-schubert",
    type: "identify", cours: 20, difficulty: 2,
    tags: ["analyse", "Schubert", "médiante", "couleur"],
    concepts: ["médiante", "relation de tierce", "Schubert"],
    question: "Quelle relation harmonique est caractéristique de Schubert et du romantisme ?",
    options: [
      { id: "a", label: "Les relations de quinte (I–V)",                    isCorrect: false },
      { id: "b", label: "Les relations de tierce (médiantes — I vers III ou VI)", isCorrect: true  },
      { id: "c", label: "Les progressions par tons entiers",                isCorrect: false },
      { id: "d", label: "L'utilisation exclusive du mode mineur",           isCorrect: false },
    ],
    explanation: "Schubert révolutionne l'harmonie romantique avec les modulations par médiante (relation de tierce). Do majeur → La bémol majeur (tierce mineure dessous) est un saut schubert typique — pas de note commune, mais une parenté enharmonique secrète. Ce procédé crée des effets de couleur bouleversants, 'comme si le soleil se voilait'.",
  },
  {
    id: "c20-analyse-beethoven-dev",
    type: "identify", cours: 20, difficulty: 2,
    tags: ["analyse", "Beethoven", "développement dramatique"],
    concepts: ["développement motivique", "Beethoven", "tension-résolution"],
    question: "La 'signature' de Beethoven dans ses développements symphoniques est :",
    options: [
      { id: "a", label: "La multiplication des thèmes mélodiques",                         isCorrect: false },
      { id: "b", label: "La fragmentation et réduction d'un motif jusqu'à l'essentiel",    isCorrect: true  },
      { id: "c", label: "L'immobilité harmonique prolongée",                               isCorrect: false },
      { id: "d", label: "L'utilisation du planing modal",                                  isCorrect: false },
    ],
    explanation: "Beethoven fragmente ses motifs jusqu'à l'atome, créant une tension insoutenable avant la récapitulation. Dans la 5e Symphonie, le motif court-court-court-long se réduit à 3 notes, puis 2, puis presque rien — et l'explosion de joie du retour au I semble d'autant plus libératrice. C'est la 'dramaturgie harmonique' portée à son comble.",
  },
  {
    id: "c20-analyse-chopin",
    type: "identify", cours: 20, difficulty: 2,
    tags: ["analyse", "Chopin", "chromatisme", "emprunts"],
    concepts: ["chromatisme chopin", "enharmonie", "pédale"],
    question: "Chopin est célèbre pour quelle technique harmonique caractéristique ?",
    options: [
      { id: "a", label: "L'harmonie de jazz avec extensions complexes",                    isCorrect: false },
      { id: "b", label: "Les longues pédales de tonique avec harmonie chromatique flottante", isCorrect: true  },
      { id: "c", label: "Le contrepoint strict en 4 voix",                                 isCorrect: false },
      { id: "d", label: "La bitonalité (deux tonalités simultanées)",                      isCorrect: false },
    ],
    explanation: "Chopin utilise souvent des pédales de basse (tonique ou dominante) pendant lesquelles l'harmonie se déplace librement et chromatiquement. Le fameux Prélude en Mi mineur op.28 n°4 : la basse descend chromatiquement sur une pédale, pendant que la mélodie plane immobile. Effets de 'flottement' harmonique uniques.",
  },
];

// ════════════════════════════════════════════════════════════════════════════
// COURS 21 — Analyse des compositeurs modernes
// ════════════════════════════════════════════════════════════════════════════

export const COURS21_EXERCISES: (IdentifyExercise | BuildExercise)[] = [
  {
    id: "c21-debussy-wholetone",
    type: "identify", cours: 21, difficulty: 2,
    tags: ["analyse", "Debussy", "gamme par tons"],
    concepts: ["gamme par tons", "impressionnisme", "ambiguïté tonale"],
    question: "Debussy utilise la gamme par tons entiers pour créer :",
    options: [
      { id: "a", label: "Des cadences parfaites claires et affirméesx",                   isCorrect: false },
      { id: "b", label: "Une ambiguïté tonale et un effet de 'flottement'",               isCorrect: true  },
      { id: "c", label: "Des modulations vers des tonalités très éloignées",              isCorrect: false },
      { id: "d", label: "Une tension maximum avant une résolution forte",                  isCorrect: false },
    ],
    explanation: "La gamme par tons (C D E F# Ab Bb) n'a ni sensible, ni sous-dominante, ni septième de dominante — aucun accord dominant ne peut se former. Tout y est symétrique, aucun pôle d'attraction. Debussy l'utilise pour dissoudre la logique tonale et créer l'atmosphère 'en suspension' de l'impressionnisme.",
  },
  {
    id: "c21-beatles-harmonie",
    type: "identify", cours: 21, difficulty: 2,
    tags: ["analyse", "Beatles", "emprunt modal"],
    concepts: ["emprunt modal", "mixolydien", "éolien rock"],
    question: "Quelle technique harmonique les Beatles ont-ils popularisée dans le rock ?",
    options: [
      { id: "a", label: "Les accords altérés de jazz (♭9, ♯11)",            isCorrect: false },
      { id: "b", label: "L'emprunt modal — mélanger accords majeur et éolien/mixolydien", isCorrect: true  },
      { id: "c", label: "Le contrepoint strict en 4 voix à la Bach",        isCorrect: false },
      { id: "d", label: "Les accords de cluster atonal",                     isCorrect: false },
    ],
    explanation: "Les Beatles ont popularisé l'emprunt modal dans la pop : utiliser ♭VII (mixolydien), ♭VI, ♭III (éolien) dans des contextes majoritairement majeurs. 'Let It Be' oscille entre C majeur et A éolien. 'Yesterday' utilise des accords empruntés au mineur parallèle. C'est devenu le langage de base du rock harmonique.",
  },
  {
    id: "c21-radiohead-harmonie",
    type: "identify", cours: 21, difficulty: 3,
    tags: ["analyse", "Radiohead", "ambiguïté modale"],
    concepts: ["ambiguïté tonale", "rock alternatif", "harmonie modale"],
    question: "La signature harmonique de Radiohead ('Karma Police', 'Exit Music') est :",
    options: [
      { id: "a", label: "La progression I–V–VI–IV du pop classique",           isCorrect: false },
      { id: "b", label: "Des progressions évitant la résolution V→I, favorisant le mouvement modal", isCorrect: true  },
      { id: "c", label: "L'utilisation exclusive du mode locrien",              isCorrect: false },
      { id: "d", label: "La bitonalité systématique (deux tonalités à la fois)", isCorrect: false },
    ],
    explanation: "Radiohead évite le V7→I trop 'propre'. Leurs progressions favorisent les mouvements éoliens (i–VII–VI, i–♭III–VII) ou les progressions 'en boucle' sans point d'arrivée clair. Ce refus de la cadence parfaite crée une atmosphère d'anxiété et d'incomplétude harmonique caractéristique.",
  },
  {
    id: "c21-morricone-harmonie",
    type: "identify", cours: 21, difficulty: 2,
    tags: ["analyse", "Morricone", "couleur modale"],
    concepts: ["couleur modale", "phrygien", "mixolydien", "western"],
    question: "Ennio Morricone est connu pour quelle approche harmonique dans ses musiques de films ?",
    options: [
      { id: "a", label: "L'harmonie jazz bebop avec II-V-I complexes",                    isCorrect: false },
      { id: "b", label: "La mixité de modes (phrygien, éolien) et couleurs ethniques (flamenco, folk)", isCorrect: true  },
      { id: "c", label: "L'atonalité sérielle",                                           isCorrect: false },
      { id: "d", label: "Le blues pentatonique exclusivement",                             isCorrect: false },
    ],
    explanation: "Morricone mélange modes ecclésiastiques (phrygien pour l'Italie médiévale), couleurs flamenco, tonalités folk américaines et techniques classiques. Dans 'Il Buono il Brutto il Cattivo', il juxtapose phrygien et major pour créer une tension psychologique unique — à la fois étrange et immédiatement mémorable.",
  },
];

// ════════════════════════════════════════════════════════════════════════════
// COURS 22 — La réharmonisation avancée
// ════════════════════════════════════════════════════════════════════════════

export const COURS22_EXERCISES: (IdentifyExercise | BuildExercise)[] = [
  {
    id: "c22-reharmo-emprunt-modal",
    type: "identify", cours: 22, difficulty: 2,
    tags: ["réharmonisation avancée", "emprunt modal", "altération"],
    concepts: ["emprunt modal avancé", "couleur harmonique", "réharmonisation"],
    question: "Pour 'assombrir' harmoniquement une mélodie en Do majeur restant sur le Ier degré, on peut :",
    options: [
      { id: "a", label: "Rester sur C majeur en rajoutant des ornements",               isCorrect: false },
      { id: "b", label: "Utiliser Cm7 (emprunt au parallèle mineur) sous la même mélodie", isCorrect: true  },
      { id: "c", label: "Transposer la mélodie un demi-ton plus bas",                   isCorrect: false },
      { id: "d", label: "Ajouter un accord de sixte",                                   isCorrect: false },
    ],
    explanation: "L'emprunt modal remplace un accord diatonique par son équivalent d'un autre mode, sous une mélodie inchangée. C majeur → C mineur : le Eb (tierce mineure) crée un effet dramatique immédiat. La mélodie reste identique, mais l'harmonie change complètement de couleur — technique fondamentale de la réharmonisation.",
  },
  {
    id: "c22-reharmo-approche-chromatique",
    type: "identify", cours: 22, difficulty: 2,
    tags: ["réharmonisation avancée", "approche chromatique", "chord substitution"],
    concepts: ["approche chromatique", "demi-ton", "tension finale"],
    question: "L'approche chromatique consiste à précéder un accord cible par :",
    options: [
      { id: "a", label: "Le même accord un ton plus haut",                                isCorrect: false },
      { id: "b", label: "Le même accord transposé un demi-ton au-dessus ou en-dessous",  isCorrect: true  },
      { id: "c", label: "L'accord diminué diatonique",                                   isCorrect: false },
      { id: "d", label: "La substitution tritonique",                                    isCorrect: false },
    ],
    explanation: "L'approche chromatique : pour aller vers C majeur, passer par C♭ majeur (demi-ton dessous) ou par C# majeur (demi-ton dessus) juste avant. Cet accord de passage crée une tension maximum (chromatisme) qui rend la résolution d'autant plus satisfaisante. Bill Evans et Herbie Hancock en sont maîtres.",
  },
  {
    id: "c22-reharmo-bIII7",
    type: "identify", cours: 22, difficulty: 3,
    tags: ["réharmonisation avancée", "♭III7", "substitution dominante"],
    concepts: ["dominante de substitution", "♭III7", "cadence évitée"],
    question: "Dans une réharmonisation jazz, ♭III7 (Eb7 en Do majeur) peut remplacer :",
    options: [
      { id: "a", label: "IIm7 (Dm7)",                        isCorrect: false },
      { id: "b", label: "V7 (G7) ou SubV (Db7)",             isCorrect: false },
      { id: "c", label: "IMaj7 (Cmaj7) comme tonique de substitution", isCorrect: true  },
      { id: "d", label: "VI (Am)",                            isCorrect: false },
    ],
    explanation: "En réharmonisation avancée, ♭III7 peut servir de 'dominante de remplacement' par sa relation enharmonique. Mais il est surtout utilisé comme 'couleur de substitution' du Ier degré — Eb7 sur une mélodie stable crée une tension jazzy inattendue. Technique de Bill Evans et McCoy Tyner.",
  },
];

export const COURS22_SATB: SATBExercise[] = [
  {
    id: "c22-satb-reharmo-avancee-c",
    type: "satb",
    cours: 22,
    title: "Réharmonisation avancée en Do",
    subtitle: "G7 → D♭maj7 – G♭7 – Cmaj7 · Coltrane approach",
    difficulty: 3,
    tags: ["réharmonisation avancée", "substitutions multiples", "Do majeur"],
    keySignature: "C",
    measures: ["IIm7·Dm7", "♭IIImaj7·Dbmaj7", "♭VII7·Gb7", "IMaj7·Cmaj7"],
    solution: [
      { soprano: n("C",5), alto: n("F",4), tenor: n("A",3), bass: n("D",3) },
      { soprano: n("C",5), alto: n("F",4), tenor: n("Ab",3), bass: n("Db",3) },
      { soprano: n("B",4), alto: n("F",4), tenor: n("Bb",3), bass: n("Gb",3) },
      { soprano: n("C",5), alto: n("E",4), tenor: n("G",3), bass: n("C",3) },
    ],
    hint: "D♭maj7 remplace G7 (substitution tritonique + maj7). G♭7 est le SubV du I. F reste en place tout au long — c'est le fil conducteur.",
    explanation: "Réharmonisation multi-substitutions : D♭maj7 en lieu de G7 (SubV avec couleur maj7). G♭7 est un second SubV qui approche C par demi-ton descendant. F reste en place comme fil mélodique continu. B dans G♭7 est la sensible enharmonique (C♭) qui résout vers C. Technique inspirée des Coltrane Changes.",
    concepts: ["substitutions multiples", "Coltrane approach", "SubV maj7", "fil mélodique"],
    regles: "libre",
  },
  {
    id: "c22-satb-parallelisme-debussy",
    type: "satb",
    cours: 22,
    title: "Harmonisation parallèle (planing) en Do",
    subtitle: "Cmaj7 – Dmaj7 – Emaj7 – Fmaj7 · Style Debussy",
    difficulty: 2,
    tags: ["réharmonisation avancée", "planing", "Debussy", "accords parallèles"],
    keySignature: "C",
    measures: ["Cmaj7", "Dmaj7", "Emaj7", "Fmaj7"],
    solution: [
      { soprano: n("B",4), alto: n("G",4), tenor: n("E",4), bass: n("C",3) },
      { soprano: n("C#",5),alto: n("A",4), tenor: n("F#",4),bass: n("D",3) },
      { soprano: n("D#",5),alto: n("B",4), tenor: n("G#",3),bass: n("E",3) },
      { soprano: n("E",5), alto: n("C",5), tenor: n("A",3), bass: n("F",3) },
    ],
    hint: "Chaque accord se déplace d'un ton vers le haut tout en conservant la qualité maj7. La mélodie monte conjointement : B–C#–D#–E.",
    explanation: "L'harmonisation parallèle (planing) de Debussy : déplacer tout l'accord en bloc, ton par ton. Toutes les voix bougent en mouvement parallèle — les quintes et octaves parallèles sont ici intentionnelles et voulues (contrairement au contrepoint classique). L'oreille perçoit un 'glissement' de couleur harmonique plutôt que des fonctions tonales.",
    concepts: ["planing", "accords parallèles", "Debussy", "mouvement conjoint"],
    regles: "libre",
  },
];

// ════════════════════════════════════════════════════════════════════════════
// COURS 23 — Composer dans le style des maîtres
// ════════════════════════════════════════════════════════════════════════════

export const COURS23_EXERCISES: (IdentifyExercise | BuildExercise)[] = [
  {
    id: "c23-style-bach-choral",
    type: "identify", cours: 23, difficulty: 2,
    tags: ["composition", "Bach", "choral", "style"],
    concepts: ["style Bach", "conduite de voix", "tonicisation dense"],
    question: "Pour composer dans le style d'un choral de Bach, la règle la plus importante est :",
    options: [
      { id: "a", label: "Utiliser des accords complexes de 9e et 11e",                      isCorrect: false },
      { id: "b", label: "Conduire les voix par degrés conjoints et toniciser chaque degré important", isCorrect: true  },
      { id: "c", label: "Éviter tout mouvement contraire entre les voix",                   isCorrect: false },
      { id: "d", label: "Rester en Do majeur uniquement",                                    isCorrect: false },
    ],
    explanation: "Bach : conduite de voix économique (minimal movement), exploitation des notes communes, tonicisations chromatiques de chaque degré significatif. Ses chorals évitent les sauts de quinte dans les voix intérieures. La 7e de dominante et la sensible respectent toujours leurs résolutions obligées.",
  },
  {
    id: "c23-style-mozart",
    type: "identify", cours: 23, difficulty: 2,
    tags: ["composition", "Mozart", "classicisme", "équilibre"],
    concepts: ["style Mozart", "clarté classique", "ornementation"],
    question: "Le style de Mozart se distingue par :",
    options: [
      { id: "a", label: "Des modulations continuelles et des chromatismes abondants",        isCorrect: false },
      { id: "b", label: "Clarté harmonique, symétrie des phrases, équilibre entre tension et légèreté", isCorrect: true  },
      { id: "c", label: "L'utilisation de clusters et de polytonalité",                      isCorrect: false },
      { id: "d", label: "Des phrases asymétriques et des fins brusques",                     isCorrect: false },
    ],
    explanation: "Mozart : harmonie claire et fonctionnelle, phrases symétriques de 4+4 mesures, progressions I–IV–V–I sans surprise. L'art de Mozart est dans la perfection de l'équilibre — jamais trop peu harmonique, jamais trop dense. Ses dissonances sont calculées, ses résolutions inévitables et satisfaisantes.",
  },
  {
    id: "c23-style-debussy",
    type: "identify", cours: 23, difficulty: 2,
    tags: ["composition", "Debussy", "impressionnisme", "couleur"],
    concepts: ["style Debussy", "parallelisme", "gamme par tons", "absence de résolution"],
    question: "Pour imiter le style de Debussy, on privilégiera :",
    options: [
      { id: "a", label: "Les cadences parfaites claires et les progressions II–V–I",        isCorrect: false },
      { id: "b", label: "Le planing (accords parallèles), les gammes pentatonique et par tons, l'évitement des cadences", isCorrect: true  },
      { id: "c", label: "Le contrepoint strict à 4 voix",                                   isCorrect: false },
      { id: "d", label: "Les modulations rapides vers des tonalités très éloignées",        isCorrect: false },
    ],
    explanation: "Debussy : accords parallèles (pas de résolution de la sensible), gammes par tons et pentatoniques pour l'atmosphère, évitement de la cadence parfaite trop 'carrée', textures de brume harmonique. La mélodie n'est plus un chemin vers une destination — c'est une couleur qui se dépose.",
  },
  {
    id: "c23-style-jazz-iivi",
    type: "identify", cours: 23, difficulty: 2,
    tags: ["composition", "jazz", "II-V-I", "extensions"],
    concepts: ["style jazz", "extensions", "voicing jazz", "chromatismes"],
    question: "Un II–V–I 'dans le style jazz' diffère d'un II–V–I classique par :",
    options: [
      { id: "a", label: "Les accords sont en état fondamental uniquement",                   isCorrect: false },
      { id: "b", label: "Les septièmes, extensions (9e, 13e), approches chromatiques et voicings comprimés", isCorrect: true  },
      { id: "c", label: "La présence de quintes et octaves parallèles",                      isCorrect: false },
      { id: "d", label: "L'absence de la note de basse",                                     isCorrect: false },
    ],
    explanation: "En jazz, IIm9–V13(♭9)–Imaj9 au lieu de Dm–G7–C. Les extensions colorent les accords. Les voicings sont comprimés (voix à la main droite, basse à la main gauche ou à la contrebasse). Les approches chromatiques sur les temps faibles créent la 'tension jazz'. La sensible ne monte plus obligatoirement — la 7e de dominante peut descendre d'un demi-ton vers la 3ce de I.",
  },
  {
    id: "c23-style-rock-progressions",
    type: "identify", cours: 23, difficulty: 1,
    tags: ["composition", "rock", "progressions modales", "power chords"],
    concepts: ["style rock", "éolien", "mixolydien", "progression rock"],
    question: "La progression harmonique la plus caractéristique du rock 'éolien' est :",
    options: [
      { id: "a", label: "I – IV – V – I (fonctionnel majeur)",            isCorrect: false },
      { id: "b", label: "i – ♭VII – ♭VI – ♭VII (éolien en boucle)",      isCorrect: true  },
      { id: "c", label: "IIm7 – V7 – Imaj7 (jazz)",                      isCorrect: false },
      { id: "d", label: "I – ♭II – V – I (napolitaine)",                  isCorrect: false },
    ],
    explanation: "Le rock 'éolien' (Am–G–F–G ou Dm–C–Bb–C) utilise le mouvement i–♭VII–♭VI–♭VII en boucle — aucune résolution de dominante traditionnelle. 'Stairway to Heaven', 'Paranoid', 'Hotel California' : l'éolien rotatif crée un mouvement perpétuel sans fin harmonique nette. C'est le 'moteur' du rock.",
  },
];

// ════════════════════════════════════════════════════════════════════════════
// EXPORT GLOBAL
// ════════════════════════════════════════════════════════════════════════════

export const COURS10_23_EXERCISES = [
  ...COURS10_EXERCISES,
  ...COURS10_SATB,
  ...COURS11_EXERCISES,
  ...COURS11_SATB,
  ...COURS12_EXERCISES,
  ...COURS12_SATB,
  ...COURS13_EXERCISES,
  ...COURS14_EXERCISES,
  ...COURS14_SATB,
  ...COURS15_EXERCISES,
  ...COURS15_SATB,
  ...COURS16_EXERCISES,
  ...COURS16_SATB,
  ...COURS17_EXERCISES,
  ...COURS18_EXERCISES,
  ...COURS19_EXERCISES,
  ...COURS20_EXERCISES,
  ...COURS21_EXERCISES,
  ...COURS22_EXERCISES,
  ...COURS22_SATB,
  ...COURS23_EXERCISES,
];

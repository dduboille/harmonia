/**
 * exercises/cours38-41-exercises.ts
 * Harmonia — Exercices pour les cours 38 à 41
 *
 * Types couverts :
 * - identify : QCM sur les notes étrangères (notes de passage, broderies, retards,
 *              appogiatures, échappées, anticipations)
 * - build    : construire une figure ornementale (note de passage, résolution d'un retard)
 *
 * NB : le système `build` vérifie l'ENSEMBLE des notes (sans ordre ni octave) —
 * `correctNotes` est une liste de noms de notes (ex : "C", "F#", "Bb").
 */

import type { IdentifyExercise, BuildExercise, SATBExercise } from "@/types/exercise";
import type { NoteName, NoteEntry } from "@/components/HarmoniaEditor";

function n(name: NoteName, octave: number): NoteEntry {
  return { name, octave };
}

// ════════════════════════════════════════════════════════════════════════════
// COURS 38 — Les notes étrangères
// ════════════════════════════════════════════════════════════════════════════

export const COURS38_EXERCISES: (IdentifyExercise | BuildExercise)[] = [
  {
    id: "c38-note-de-passage",
    type: "identify",
    cours: 38,
    difficulty: 1,
    tags: ["notes étrangères", "note de passage", "mouvement conjoint"],
    concepts: ["note de passage", "mouvement conjoint entre deux notes réelles", "temps faible"],
    question:
      "Sur un accord de Do majeur (C–E–G), la voix supérieure joue G – F – E (croches). Quelle est la nature de la note F ?",
    context: "Accord tenu : C majeur (C–E–G). Mélodie : G → F → E, F sur un temps faible.",
    options: [
      { id: "a", label: "Une note réelle de l'accord", isCorrect: false },
      { id: "b", label: "Une note de passage", isCorrect: true },
      { id: "c", label: "Un retard", isCorrect: false },
      { id: "d", label: "Une anticipation", isCorrect: false },
    ],
    explanation:
      "F n'appartient pas à l'accord de C (C–E–G). Elle relie deux notes réelles, G et E, par mouvement conjoint descendant et tombe sur un temps faible : c'est une note de passage. La note de passage comble l'intervalle de tierce entre deux notes de l'accord par degrés conjoints.",
    hint: "La note se situe entre deux notes réelles, atteinte et quittée par degré conjoint, sur un temps faible.",
  },
  {
    id: "c38-broderie",
    type: "identify",
    cours: 38,
    difficulty: 1,
    tags: ["notes étrangères", "broderie", "note voisine"],
    concepts: ["broderie", "note étrangère encadrée par la même note réelle", "broderie inférieure"],
    question:
      "Sur un accord de Do majeur, la voix joue E – D – E. Quelle est la nature de la note D ?",
    context: "Accord tenu : C majeur (C–E–G). Mélodie : E → D → E.",
    options: [
      { id: "a", label: "Une note de passage", isCorrect: false },
      { id: "b", label: "Une broderie (inférieure)", isCorrect: true },
      { id: "c", label: "Une appogiature", isCorrect: false },
      { id: "d", label: "Une échappée", isCorrect: false },
    ],
    explanation:
      "D est une note étrangère encadrée des deux côtés par la même note réelle E (note de l'accord). Comme elle est plus basse que la note brodée, c'est une broderie inférieure. La broderie quitte une note réelle par degré conjoint puis y revient.",
    hint: "La note étrangère est précédée ET suivie de la même note réelle.",
  },
  {
    id: "c38-build-note-de-passage",
    type: "build",
    cours: 38,
    difficulty: 2,
    tags: ["notes étrangères", "note de passage", "construction"],
    concepts: ["note de passage", "remplir une tierce par mouvement conjoint", "gamme de Do"],
    question:
      "Sur un accord de C majeur, on veut relier C (note réelle) à E (note réelle) par une note de passage diatonique sur le temps faible intermédiaire. Sélectionne les trois notes de la figure complète (C → ? → E).",
    correctNotes: ["C", "D", "E"],
    keySignature: "C",
    explanation:
      "Pour relier C et E (intervalle de tierce) par mouvement conjoint ascendant, on insère D, la note diatonique intermédiaire de la gamme de Do. La figure C – D – E place D, étrangère à l'accord, en note de passage sur le temps faible. La note de passage comble l'intervalle de tierce sans rupture.",
    hint: "Entre C et E, la seule note diatonique intermédiaire est le IIe degré de Do majeur.",
  },
  {
    id: "c38-build-retard-4-3",
    type: "build",
    cours: 38,
    difficulty: 3,
    tags: ["notes étrangères", "retard", "retard 4-3", "résolution"],
    concepts: ["retard 4-3", "dissonance préparée puis résolue", "résolution conjointe descendante"],
    question:
      "Sur l'accord de dominante G (G–B–D) en Do majeur, on réalise un retard 4–3 à la voix supérieure : la quarte C (prolongée de l'accord précédent) se résout sur la tierce de G. Sélectionne les deux notes successives de la voix supérieure (retard puis résolution).",
    correctNotes: ["C", "B"],
    keySignature: "C",
    explanation:
      "Le retard 4–3 : sur G (G–B–D), la note C forme une quarte au-dessus de la basse G — c'est la dissonance retardée, prolongée de l'accord précédent. Elle se résout par mouvement conjoint descendant sur B, la tierce de G (intervalle de tierce au-dessus de la basse). On a donc C (retard, dissonance) → B (résolution, note réelle). Le retard tombe sur un temps fort et se résout en descendant d'un degré.",
    hint: "La quarte au-dessus de G est C ; sa résolution descend d'un degré conjoint vers la tierce de l'accord.",
  },
];

// ════════════════════════════════════════════════════════════════════════════
// COURS 39 — Les 7èmes d'espèces (accords de septième sur chaque degré)
// ════════════════════════════════════════════════════════════════════════════

export const COURS39_EXERCISES: SATBExercise[] = [
  {
    id: "c39-ii7-v7-i-do",
    type: "satb",
    cours: 39,
    title: "II⁷ – V⁷ – I en Do majeur",
    subtitle: "La septième de II⁷ préparée puis résolue",
    difficulty: 1,
    tags: ["7èmes d'espèces", "II-V-I", "septième préparée", "Do majeur"],
    keySignature: "C",
    measures: ["II⁷ · Dm7", "V⁷ · G7", "I · C"],
    solution: [
      { soprano: n("C", 5), alto: n("A", 4), tenor: n("F", 4), bass: n("D", 3) },
      { soprano: n("B", 4), alto: n("F", 4), tenor: n("D", 4), bass: n("G", 3) },
      { soprano: n("C", 5), alto: n("E", 4), tenor: n("C", 4), bass: n("C", 3) },
    ],
    hint: "La 7e de Dm7 (C, au soprano) descend d'un degré vers B, la sensible de G7. La 7e de G7 (F, au ténor) descendra ensuite vers E.",
    explanation:
      "II⁷ – V⁷ – I, la cellule fondamentale du langage tonal. La 7e de Dm7 (C, soprano) est consonante dans l'accord puis se résout par mouvement conjoint descendant sur B (sensible de G7). De Dm7 à G7, F est commun (5e de Dm7 → 7e de G7), D est commun (fondamentale → quinte). Résolution de G7 vers I : la sensible B monte vers C, la 7e F descend vers E. L'accord de tonique est ici incomplet (tierce et fondamentale triplée, sans quinte) — résolution classique lorsque toutes les notes attractives de V⁷ se résolvent normalement. Vérification : aucune quinte ni octave parallèle.",
    concepts: ["septième d'espèce", "septième préparée", "résolution descendante de la 7e", "sensible", "II-V-I"],
  },
  {
    id: "c39-iv-maj7-v7-i-do",
    type: "satb",
    cours: 39,
    title: "IV⁷(M) – V⁷ – I en Do majeur",
    subtitle: "La septième majeure de la sous-dominante",
    difficulty: 2,
    tags: ["7èmes d'espèces", "septième majeure", "IV-V-I", "Do majeur"],
    keySignature: "C",
    measures: ["IV⁷ · Fmaj7", "V⁷ · G7", "I · C"],
    solution: [
      { soprano: n("E", 5), alto: n("C", 5), tenor: n("A", 4), bass: n("F", 3) },
      { soprano: n("D", 5), alto: n("B", 4), tenor: n("F", 4), bass: n("G", 3) },
      { soprano: n("C", 5), alto: n("G", 4), tenor: n("E", 4), bass: n("C", 3) },
    ],
    hint: "La 7e majeure de Fmaj7 (E, au soprano) descend d'un degré vers D (quinte de G7). La sensible B (alto) montera vers C.",
    explanation:
      "Fmaj7 contient une 7e majeure (E), dissonance plus tendue, qui se résout par mouvement conjoint descendant sur D (quinte de G7). De Fmaj7 à G7, F est commun (fondamentale → 7e de G7, donc 7e préparée). Sur G7 (complet : G B D F), la résolution amène la sensible B vers C ; comme elle est à une voix intérieure (alto), elle est ici 'frustrée' et bondit vers G pour compléter l'accord de tonique (C E G complet) — exception classique de la sensible intérieure. La 7e F descend vers E. Vérification : aucune quinte ni octave parallèle ; la 5e→8ve alto-basse de G7 à I se fait par mouvement contraire.",
    concepts: ["septième majeure", "septième préparée", "sensible frustrée", "résolution descendante de la 7e", "IV-V-I"],
  },
  {
    id: "c39-cycle-septiemes-do",
    type: "satb",
    cours: 39,
    title: "Chaîne de septièmes par quintes descendantes",
    subtitle: "VII⁷ – III⁷ – VI⁷ – II⁷ – V⁷ – I en Do majeur",
    difficulty: 3,
    tags: ["7èmes d'espèces", "cycle des quintes", "chaîne de septièmes", "Do majeur"],
    keySignature: "C",
    measures: ["VII⁷ · Bø7", "III⁷ · Em7", "VI⁷ · Am7", "II⁷ · Dm7", "V⁷ · G7", "I · C"],
    solution: [
      { soprano: n("A", 4), alto: n("F", 4), tenor: n("D", 4), bass: n("B", 2) },
      { soprano: n("G", 4), alto: n("E", 4), tenor: n("D", 4), bass: n("E", 3) },
      { soprano: n("G", 4), alto: n("E", 4), tenor: n("C", 4), bass: n("A", 2) },
      { soprano: n("F", 4), alto: n("D", 4), tenor: n("C", 4), bass: n("D", 3) },
      { soprano: n("F", 4), alto: n("D", 4), tenor: n("B", 3), bass: n("G", 2) },
      { soprano: n("E", 4), alto: n("C", 4), tenor: n("C", 4), bass: n("C", 3) },
    ],
    hint: "À chaque accord, la 7e (note dissonante) descend d'un degré conjoint vers la tierce de l'accord suivant, où elle est aussitôt préparée comme 7e suivante. La basse descend de quinte (ou monte de quarte) à chaque fois.",
    explanation:
      "Chaîne diatonique de septièmes par quintes descendantes — le mouvement harmonique le plus naturel. Chaque 7e est préparée (tenue depuis l'accord précédent comme note consonante) puis résolue par mouvement conjoint descendant sur la tierce de l'accord suivant : A (7e de Bø7) → G, D (7e de Em7) → C, G (7e de Am7) → F, C (7e de Dm7) → B (sensible), F (7e de G7) → E. Les accords alternent complets et incomplets (quinte omise) pour permettre cette conduite sans fautes. La sensible finale B monte vers C ; la tonique finale est incomplète (fondamentale triplée, sans quinte). Vérification : aucune quinte ni octave parallèle ; les rares passages 5e→8ve (alto-basse de VI⁷ à II⁷ et de V⁷ à I) se font par mouvement contraire.",
    concepts: ["chaîne de septièmes", "cycle des quintes", "septième préparée et résolue", "accords incomplets", "demi-diminué"],
  },
  {
    id: "c39-vii-dim7-i-mineur",
    type: "satb",
    cours: 39,
    title: "i – iv – VII°⁷ – i en La mineur",
    subtitle: "La septième diminuée résolue sur la tonique",
    difficulty: 3,
    tags: ["7èmes d'espèces", "septième diminuée", "La mineur", "sensible"],
    keySignature: "Am",
    measures: ["i · Am", "iv · Dm", "VII°⁷ · G#°7", "i · Am"],
    solution: [
      { soprano: n("A", 4), alto: n("E", 4), tenor: n("C", 4), bass: n("A", 2) },
      { soprano: n("A", 4), alto: n("F", 4), tenor: n("D", 4), bass: n("D", 3) },
      { soprano: n("B", 4), alto: n("F", 4), tenor: n("D", 4), bass: n("G#", 2) },
      { soprano: n("C", 5), alto: n("E", 4), tenor: n("C", 4), bass: n("A", 2) },
    ],
    hint: "L'accord de septième diminuée G#°7 (G#–B–D–F) est entièrement attractif : chaque note se résout par demi-ton ou ton. G# (sensible, basse) monte vers A ; F (7e) descend vers E.",
    explanation:
      "En La mineur harmonique, le VII°⁷ (G#°7 : G#–B–D–F) est un accord de septième diminuée, empilement de tierces mineures où toutes les notes sont dissonantes et attractives. De Dm à G#°7, D et F sont communs (la 7e F est ainsi préparée). Résolution sur i : la sensible G# (basse) monte vers A ; B monte vers C ; D descend vers C ; F (7e diminuée) descend vers E. L'accord de tonique Am (A–C–E) est complet (tierce doublée). Vérification : aucune quinte ni octave parallèle ; l'octave soprano-ténor de VII°⁷ à i se fait par mouvement contraire.",
    concepts: ["septième diminuée", "VII°7", "mineur harmonique", "septième préparée", "sensible", "résolution par demi-tons"],
  },
];

// ════════════════════════════════════════════════════════════════════════════
// COURS 40 — L'invention à 2 voix
// ════════════════════════════════════════════════════════════════════════════

export const COURS40_EXERCISES: (IdentifyExercise | BuildExercise)[] = [
  {
    id: "c40-imitation-octave",
    type: "identify",
    cours: 40,
    difficulty: 1,
    tags: ["invention à 2 voix", "imitation", "contrepoint", "octave"],
    concepts: ["imitation", "intervalle d'imitation", "conséquent à l'octave"],
    question:
      "À la voix supérieure, le sujet énonce C – D – E – F. Une mesure plus tard, la voix inférieure reprend exactement le même dessin C – D – E – F, mais une octave plus bas. À quel intervalle se fait cette imitation ?",
    context: "Sujet (dessus) : C4 – D4 – E4 – F4. Réponse (basse) : C3 – D3 – E3 – F3.",
    options: [
      { id: "a", label: "À l'unisson", isCorrect: false },
      { id: "b", label: "À l'octave", isCorrect: true },
      { id: "c", label: "À la quinte", isCorrect: false },
      { id: "d", label: "À la quarte", isCorrect: false },
    ],
    explanation:
      "La seconde voix reprend le sujet sans aucune transformation d'intervalles, exactement huit degrés plus bas : c'est une imitation à l'octave (la forme d'imitation la plus simple et la plus fréquente dans l'invention à 2 voix de Bach). Les noms de notes sont conservés (C, D, E, F), seule l'octave change. On parle d'imitation rigoureuse car le profil mélodique est reproduit à l'identique.",
    hint: "Les deux voix jouent les mêmes noms de notes (C–D–E–F) ; comparez seulement la hauteur de registre.",
  },
  {
    id: "c40-procede-melodique",
    type: "identify",
    cours: 40,
    difficulty: 2,
    tags: ["invention à 2 voix", "procédés motiviques", "augmentation", "contrepoint"],
    concepts: ["augmentation", "diminution", "renversement", "transformation du motif"],
    question:
      "Le motif initial est exposé en croches : C – D – E – F. Plus loin, la même succession de hauteurs C – D – E – F réapparaît, mais cette fois en blanches (valeurs deux fois plus longues), les intervalles et l'ordre des notes restant inchangés. De quel procédé d'écriture s'agit-il ?",
    context: "Motif : C–D–E–F en croches. Reprise : C–D–E–F en blanches (valeurs doublées).",
    options: [
      { id: "a", label: "Le renversement (inversion mélodique)", isCorrect: false },
      { id: "b", label: "L'augmentation", isCorrect: true },
      { id: "c", label: "La diminution", isCorrect: false },
      { id: "d", label: "La marche (séquence)", isCorrect: false },
    ],
    explanation:
      "Les hauteurs et les intervalles sont identiques ; seules les durées sont allongées (ici multipliées par deux). Allonger les valeurs rythmiques d'un motif s'appelle l'augmentation. Le procédé inverse — raccourcir les valeurs — est la diminution. Le renversement transformerait les intervalles (chaque mouvement ascendant deviendrait descendant), et la marche transposerait le motif à des degrés successifs : ce n'est ici ni l'un ni l'autre, puisque les notes ne changent pas.",
    hint: "Les notes ne changent pas, seules les durées sont modifiées. Sont-elles plus longues ou plus courtes ?",
  },
  {
    id: "c40-build-renversement",
    type: "build",
    cours: 40,
    difficulty: 2,
    tags: ["invention à 2 voix", "renversement", "inversion mélodique", "contrepoint"],
    concepts: ["renversement", "inversion mélodique", "axe de symétrie", "intervalles diatoniques"],
    question:
      "Soit le sujet ascendant C – D – E – F (trois secondes ascendantes) en Do majeur. Construis son RENVERSEMENT (inversion mélodique) en gardant la première note C comme axe : chaque seconde ascendante devient une seconde descendante diatonique. Sélectionne les quatre notes du sujet renversé.",
    correctNotes: ["C", "B", "A", "G"],
    keySignature: "C",
    explanation:
      "Renversement (miroir) du sujet autour de sa première note C, qui sert d'axe. Le sujet monte par degrés conjoints : C → D (2de↑), D → E (2de↑), E → F (2de↑). Dans le renversement, chaque intervalle est reproduit en sens inverse, par degré conjoint diatonique descendant : C → B (2de↓), B → A (2de↓), A → G (2de↓). On obtient donc C – B – A – G. C'est une inversion diatonique (on respecte le nombre de degrés dans la gamme de Do, sans accident), procédé courant chez Bach pour répondre au sujet par son miroir.",
    hint: "Gardez C, puis descendez par degrés conjoints de la gamme de Do autant de fois que le sujet montait.",
  },
  {
    id: "c40-build-imitation-octave",
    type: "build",
    cours: 40,
    difficulty: 3,
    tags: ["invention à 2 voix", "imitation", "octave", "conséquent"],
    concepts: ["imitation à l'octave", "transposition à l'octave", "conservation des noms de notes"],
    question:
      "La tête de sujet, à la voix supérieure, est G4 – A4 – B4 – C5. Construis sa réponse en imitation à l'octave inférieure, à la voix de basse. Sélectionne les quatre notes (noms) de la réponse.",
    correctNotes: ["G", "A", "B", "C"],
    keySignature: "C",
    explanation:
      "L'imitation à l'octave transpose le sujet huit degrés plus bas (ou plus haut) sans modifier les intervalles. Transposer d'une octave juste conserve la classe de hauteur : les noms de notes restent identiques (G – A – B – C), seul le registre change (G3 – A3 – B3 – C4 à la basse). C'est pourquoi l'imitation à l'octave est la plus simple : elle ne demande aucun ajustement des hauteurs, contrairement à l'imitation à la quinte qui modifierait certains intervalles (réponse tonale).",
    hint: "Une octave juste plus bas, les notes gardent exactement le même nom : seul le chiffre d'octave change.",
  },
];

// ════════════════════════════════════════════════════════════════════════════
// COURS 41 — L'écriture de style (pastiche stylistique)
// ════════════════════════════════════════════════════════════════════════════

export const COURS41_EXERCISES: SATBExercise[] = [
  {
    id: "c41-classique-cadence-parfaite",
    type: "satb",
    cours: 41,
    title: "Écriture classique en Do majeur",
    subtitle: "Style Mozart / Haydn — phrase homophonique",
    difficulty: 1,
    tags: ["écriture de style", "classicisme", "Mozart", "Haydn", "Do majeur", "cadence parfaite"],
    keySignature: "C",
    measures: ["I · C", "V⁶⁵ · G7/B", "I · C", "IV · F", "I⁶⁴ · C/G", "V · G", "I · C"],
    solution: [
      { soprano: n("G", 4), alto: n("E", 4), tenor: n("C", 4), bass: n("C", 3) },
      { soprano: n("G", 4), alto: n("F", 4), tenor: n("D", 4), bass: n("B", 2) },
      { soprano: n("G", 4), alto: n("E", 4), tenor: n("C", 4), bass: n("C", 3) },
      { soprano: n("A", 4), alto: n("F", 4), tenor: n("C", 4), bass: n("F", 2) },
      { soprano: n("G", 4), alto: n("E", 4), tenor: n("C", 4), bass: n("G", 2) },
      { soprano: n("G", 4), alto: n("D", 4), tenor: n("B", 3), bass: n("G", 2) },
      { soprano: n("G", 4), alto: n("E", 4), tenor: n("C", 4), bass: n("C", 3) },
    ],
    hint: "Texture homophonique limpide : la basse fait l'ossature (C–B–C–F–G–G–C), les voix supérieures bougent au plus court. La septième du V⁶⁵ (F, alto) descend vers E ; le 6/4 de cadence (sur basse G) résout 6→5 et 4→3 avant le V.",
    explanation:
      "Signature classique (Mozart, Haydn) : progression diatonique claire I – V⁶⁵ – I – IV – I⁶⁴ – V – I, conduite homophonique sans chromatisme. Le V⁶⁵ (premier renversement de G7, sensible B à la basse) ramène la tonique par mouvement de basse conjoint ; sa septième F (alto) se résout par degré conjoint descendant sur E. La cadence parfaite est ornée du 6/4 de cadence (C/G) sur pédale de dominante : la sixte E descend vers D (6→5) et la quarte C descend vers B (4→3, sensible) au-dessus de la basse G immobile, puis V résout sur I. Vérification des parallèles : aucune quinte ni octave parallèle entre paires de voix adjacentes (vérifié paire par paire) ; la sensible B est ici à une voix intérieure (ténor) et monte vers C.",
    concepts: ["écriture classique", "homophonie", "V⁶⁵", "6/4 de cadence", "cadence parfaite", "résolution de la septième"],
  },
  {
    id: "c41-classique-64-cadentiel",
    type: "satb",
    cours: 41,
    title: "Le 6/4 cadentiel d'école",
    subtitle: "Style classique — II⁶ – I⁶⁴ – V⁷ – I",
    difficulty: 2,
    tags: ["écriture de style", "classicisme", "6/4 de cadence", "II6", "Do majeur", "cadence parfaite"],
    keySignature: "C",
    measures: ["II⁶ · Dm/F", "I⁶⁴ · C/G", "V⁷ · G7", "I · C"],
    solution: [
      { soprano: n("F", 4), alto: n("D", 4), tenor: n("A", 3), bass: n("F", 3) },
      { soprano: n("C", 5), alto: n("G", 4), tenor: n("E", 4), bass: n("G", 2) },
      { soprano: n("B", 4), alto: n("F", 4), tenor: n("D", 4), bass: n("G", 2) },
      { soprano: n("C", 5), alto: n("E", 4), tenor: n("G", 3), bass: n("C", 3) },
    ],
    hint: "Formule cadentielle d'école : la sous-dominante II⁶ (premier renversement de Dm) prépare le 6/4 cadentiel. Au-dessus de la basse G tenue, la quarte C (soprano) descend vers B (sensible) et la sixte E descend vers D : c'est le V⁷ déguisé.",
    explanation:
      "Le 6/4 cadentiel d'école — la formule la plus enseignée du langage classique. Sur la basse de dominante G, le I⁶⁴ (C/G) n'est pas une vraie tonique mais un retard double du V : la quarte C et la sixte E sont des appogiatures qui résolvent sur la tierce B (sensible) et la quinte D du V⁷. La basse reste sur G pendant deux mesures (6/4 puis V⁷). La sensible B est ici au soprano (voix extérieure) et monte vers C à la cadence ; la septième F (alto) descend vers E. La tonique finale est complète (C–E–G–C). Vérification des parallèles : aucune quinte ni octave parallèle (vérifié paire par paire).",
    concepts: ["6/4 de cadence", "double appogiature", "II⁶", "V⁷", "cadence parfaite", "sensible au soprano"],
  },
  {
    id: "c41-romantique-sixte-allemande",
    type: "satb",
    cours: 41,
    title: "Écriture romantique en Do majeur",
    subtitle: "Style Schumann / Brahms — emprunt & sixte allemande",
    difficulty: 3,
    tags: ["écriture de style", "romantisme", "Schumann", "Brahms", "sixte augmentée", "sixte allemande", "emprunt"],
    keySignature: "C",
    measures: ["I · C", "VI · Am", "iv · Fm", "Ger⁺⁶ · A♭7", "I⁶⁴ · C/G", "V · G", "I · C"],
    solution: [
      { soprano: n("C", 4), alto: n("G", 3), tenor: n("E", 3), bass: n("C", 3) },
      { soprano: n("C", 4), alto: n("A", 3), tenor: n("E", 3), bass: n("A", 2) },
      { soprano: n("C", 4), alto: n("Ab", 3), tenor: n("F", 3), bass: n("F", 2) },
      { soprano: n("F#", 4), alto: n("Eb", 4), tenor: n("C", 4), bass: n("Ab", 2) },
      { soprano: n("G", 4), alto: n("E", 4), tenor: n("C", 4), bass: n("G", 2) },
      { soprano: n("G", 4), alto: n("D", 4), tenor: n("B", 3), bass: n("G", 2) },
      { soprano: n("G", 4), alto: n("E", 4), tenor: n("C", 4), bass: n("C", 3) },
    ],
    hint: "Couleur romantique : le iv emprunté (Fm, avec Ab) annonce la sixte allemande Ab–C–Eb–F#. La sixte augmentée Ab (basse) ↔ F# (soprano) s'écarte vers l'octave G–G. Le F# monte, le Ab descend : mouvement contraire vers le V (via le 6/4 cadentiel).",
    explanation:
      "Signature romantique (Schumann, Brahms) : emprunt au mode mineur (le iv, Fm, avec son Ab expressif) puis sixte augmentée allemande (Ger⁺⁶ = Ab–C–Eb–F#). La sixte augmentée se résout par mouvement contraire et écartement vers l'octave sur la dominante : Ab (basse) descend chromatiquement vers G, F# (soprano) monte vers G — les deux notes de la ⁺6 s'ouvrent vers l'octave G–G. Pour éviter les quintes parallèles classiques de la sixte allemande (Ab–Eb → G–D), la sixte allemande résout d'abord sur le 6/4 cadentiel (C/G) : la quinte Eb monte chromatiquement vers E (sixte du 6/4) au lieu de descendre vers D. Ensuite I⁶⁴ → V (6→5, 4→3) → I parfait. Vérification des parallèles : aucune quinte ni octave parallèle (vérifié paire par paire), grâce à la résolution Eb→E via le 6/4.",
    concepts: ["sixte augmentée", "sixte allemande", "emprunt au mode mineur", "iv emprunté", "résolution par écartement", "romantisme", "6/4 de cadence"],
  },
  {
    id: "c41-debut-xxe-planing",
    type: "satb",
    cours: 41,
    title: "Couleur début XXe en Do",
    subtitle: "Style Fauré / Ravel — accords parallèles & 9e ajoutée",
    difficulty: 3,
    tags: ["écriture de style", "début XXe", "Fauré", "Ravel", "planing", "accords parallèles", "neuvième ajoutée", "modal"],
    keySignature: "C",
    measures: ["IV · F", "V · G", "vi · Am", "V · G", "IM9 · CMaj9"],
    solution: [
      { soprano: n("F", 4), alto: n("C", 4), tenor: n("A", 3), bass: n("F", 3) },
      { soprano: n("G", 4), alto: n("D", 4), tenor: n("B", 3), bass: n("G", 3) },
      { soprano: n("A", 4), alto: n("E", 4), tenor: n("C", 4), bass: n("A", 3) },
      { soprano: n("G", 4), alto: n("D", 4), tenor: n("B", 3), bass: n("G", 3) },
      { soprano: n("D", 5), alto: n("G", 4), tenor: n("E", 4), bass: n("C", 3) },
    ],
    hint: "Esthétique Fauré / Ravel : les triades diatoniques glissent en blocs parallèles (planing) — les quintes et octaves parallèles sont VOULUES, c'est la couleur. L'accord final ajoute une 9e (D) non résolue par-dessus la tonique.",
    explanation:
      "Signature début XXe (Fauré, Ravel) : technique du planing (accords parallèles) — les triades diatoniques F – G – Am – G glissent en mouvement parallèle strict, toutes les voix montant ou descendant du même intervalle. ATTENTION : ici les quintes et octaves parallèles sont STYLISTIQUEMENT INTENTIONNELLES — elles ne constituent PAS une faute mais le procédé même qui crée la couleur impressionniste (le bloc sonore se déplace comme un objet rigide). L'accord final CMaj9 (C–E–G–D) ajoute une neuvième (D, au soprano) laissée en suspension, non résolue, comme note de couleur ajoutée — autre marque du langage modal/impressionniste où la dissonance devient timbre. Les « règles » du contrepoint tonal (interdiction des parallèles, résolution des dissonances) sont ici délibérément relâchées au profit de la couleur harmonique. Tessitures et ordre S≥A≥T≥B respectés.",
    concepts: ["planing", "accords parallèles", "parallélisme intentionnel", "neuvième ajoutée", "couleur modale", "impressionnisme", "Fauré", "Ravel"],
  },
];

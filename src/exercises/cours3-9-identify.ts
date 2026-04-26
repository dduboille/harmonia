/**
 * exercises/cours3-9-identify.ts
 * Harmonia — Exercices d'identification pour les cours 3 à 9
 *
 * Types couverts :
 * - identify : QCM sur fonctions, cadences, tonicisations, modulations, notes étrangères
 * - build    : construire une progression, identifier des degrés
 */

import type { IdentifyExercise, BuildExercise } from "@/types/exercise";

// ════════════════════════════════════════════════════════════════════════════
// COURS 3 — Fonctions tonales et conduite de voix
// ════════════════════════════════════════════════════════════════════════════

export const COURS3_IDENTIFY: IdentifyExercise[] = [
  {
    id: "c3-fn-triton-presence",
    type: "identify", cours: 3, difficulty: 1,
    tags: ["fonctions","triton","dominante"],
    concepts: ["triton","fonction dominante","F et B"],
    question: "En Do majeur, quel accord contient les deux notes du triton (F et B) ?",
    options: [
      { id:"a", label:"F majeur",  isCorrect: false },
      { id:"b", label:"G7",        isCorrect: true  },
      { id:"c", label:"Am",        isCorrect: false },
      { id:"d", label:"Dm",        isCorrect: false },
    ],
    explanation: "G7 = G–B–D–F. Il contient B (sensible, VIIe degré) et F (sous-dominante, IVe degré) — le triton complet. C'est pourquoi G7 est la dominante parfaite de Do majeur.",
  },
  {
    id: "c3-fn-identify-sd",
    type: "identify", cours: 3, difficulty: 1,
    tags: ["fonctions","sous-dominante","F seul"],
    concepts: ["fonction sous-dominante","IVe degré"],
    question: "En Do majeur, quel accord a la fonction Sous-dominante ?",
    context: "Rappel : Sous-dominante = contient F mais pas B",
    options: [
      { id:"a", label:"C (Do majeur)",  isCorrect: false },
      { id:"b", label:"G7",             isCorrect: false },
      { id:"c", label:"Dm",             isCorrect: true  },
      { id:"d", label:"Em",             isCorrect: false },
    ],
    explanation: "Dm = D–F–A. Contient F (IVe degré) mais pas B (VIIe degré) → fonction Sous-dominante. F majeur (F–A–C) est aussi une sous-dominante.",
  },
  {
    id: "c3-fn-identify-t",
    type: "identify", cours: 3, difficulty: 1,
    tags: ["fonctions","tonique","aucun triton"],
    concepts: ["fonction tonique","stabilité"],
    question: "En Do majeur, quel accord a la fonction Tonique ?",
    options: [
      { id:"a", label:"Bdim",  isCorrect: false },
      { id:"b", label:"F",     isCorrect: false },
      { id:"c", label:"Am",    isCorrect: true  },
      { id:"d", label:"G7",    isCorrect: false },
    ],
    explanation: "Am = A–C–E. Aucune des deux notes du triton (F et B) → fonction Tonique. Am est la tonique de substitution — il peut remplacer C dans une cadence rompue.",
  },
  {
    id: "c3-fn-em-batard",
    type: "identify", cours: 3, difficulty: 2,
    tags: ["fonctions","Em","accord bâtard"],
    concepts: ["accord bâtard","IIIe degré","ambiguïté fonctionnelle"],
    question: "Pourquoi Em (IIIe degré de Do majeur) est-il un accord 'bâtard' ?",
    options: [
      { id:"a", label:"Car il est diminué",                                                isCorrect: false },
      { id:"b", label:"Car il contient B (sensible) mais pas F — sa fonction est ambiguë", isCorrect: true  },
      { id:"c", label:"Car il n'appartient pas à la gamme de Do",                          isCorrect: false },
      { id:"d", label:"Car il est trop instable",                                          isCorrect: false },
    ],
    explanation: "Em = E–G–B. Contient B (sensible) mais pas F (sous-dominante). Il ne rentre clairement dans aucune des trois fonctions — les compositeurs ne s'accordent pas sur son rôle. C'est pourquoi il est rarement utilisé seul.",
  },
  {
    id: "c3-fn-progression-label",
    type: "identify", cours: 3, difficulty: 1,
    tags: ["fonctions","progression","SD-D-T"],
    concepts: ["enchaînement fondamental","SD-D-T"],
    question: "La progression Dm – G7 – C est analysée comme :",
    options: [
      { id:"a", label:"T – D – SD",  isCorrect: false },
      { id:"b", label:"SD – D – T",  isCorrect: true  },
      { id:"c", label:"D – T – SD",  isCorrect: false },
      { id:"d", label:"T – SD – D",  isCorrect: false },
    ],
    explanation: "Dm = Sous-dominante (contient F, pas B), G7 = Dominante (contient F et B), C = Tonique (ni F ni B). SD–D–T est l'enchaînement fondamental de l'harmonie tonale.",
  },
  {
    id: "c3-fn-substitution",
    type: "identify", cours: 3, difficulty: 2,
    tags: ["substitution diatonique","fonctions"],
    concepts: ["substitution diatonique","même fonction"],
    question: "En Do majeur, Am peut remplacer C car :",
    options: [
      { id:"a", label:"Ils partagent les mêmes notes",                                   isCorrect: false },
      { id:"b", label:"Ils ont tous deux la fonction Tonique — ni F ni B",                isCorrect: true  },
      { id:"c", label:"Am est plus grave",                                                isCorrect: false },
      { id:"d", label:"Am est le relatif mineur",                                         isCorrect: false },
    ],
    explanation: "Am (VI) et C (I) ont tous deux la fonction Tonique — aucun ne contient F ni B. Cette substitution est exploitée dans la cadence rompue (G7 → Am au lieu de G7 → C).",
  },
  {
    id: "c3-voix-mouvement-contraire",
    type: "identify", cours: 3, difficulty: 1,
    tags: ["conduite de voix","mouvement contraire"],
    concepts: ["mouvement contraire","indépendance des voix"],
    question: "Le mouvement contraire entre deux voix est :",
    options: [
      { id:"a", label:"Les deux voix montent ensemble",          isCorrect: false },
      { id:"b", label:"Une voix monte, l'autre descend",         isCorrect: true  },
      { id:"c", label:"Une voix reste immobile",                  isCorrect: false },
      { id:"d", label:"Les deux voix font le même intervalle",   isCorrect: false },
    ],
    explanation: "Le mouvement contraire est le plus équilibré — une voix monte, l'autre descend. Il favorise l'indépendance des voix et évite naturellement les quintes et octaves parallèles.",
  },
  {
    id: "c3-voix-quinpar",
    type: "identify", cours: 3, difficulty: 1,
    tags: ["conduite de voix","quintes parallèles","interdiction"],
    concepts: ["quintes parallèles","polyphonie","indépendance"],
    question: "Pourquoi les quintes parallèles sont-elles interdites ?",
    options: [
      { id:"a", label:"Car elles sont trop dissonantes",                                       isCorrect: false },
      { id:"b", label:"Car elles fusionnent deux voix en une — elles annulent la polyphonie",  isCorrect: true  },
      { id:"c", label:"Car elles créent des quintes diminuées",                                isCorrect: false },
      { id:"d", label:"Car elles sont difficiles à chanter",                                   isCorrect: false },
    ],
    explanation: "Deux voix en quintes parallèles sonnent comme une seule — elles perdent leur indépendance mélodique. L'écriture polyphonique exige que chaque voix soit une ligne distincte.",
  },
  {
    id: "c3-voix-doublure",
    type: "identify", cours: 3, difficulty: 2,
    tags: ["conduite de voix","doublure","fondamentale"],
    concepts: ["doublure","fondamentale","VIIe degré exception"],
    question: "Dans un accord à l'état fondamental réparti sur 4 voix, quelle note double-t-on par défaut ?",
    options: [
      { id:"a", label:"La tierce",        isCorrect: false },
      { id:"b", label:"La quinte",        isCorrect: false },
      { id:"c", label:"La fondamentale",  isCorrect: true  },
      { id:"d", label:"La septième",      isCorrect: false },
    ],
    explanation: "On double la fondamentale — c'est la note la plus stable. Exception absolue : au VIIe degré (Bdim), on double la tierce (D), jamais B (la sensible ne se double jamais).",
  },
  {
    id: "c3-voix-sensible",
    type: "identify", cours: 3, difficulty: 1,
    tags: ["conduite de voix","sensible","résolution"],
    concepts: ["sensible","résolution obligatoire","demi-ton ascendant"],
    question: "Dans la résolution G7 → C, la sensible B doit :",
    options: [
      { id:"a", label:"Descendre vers G",             isCorrect: false },
      { id:"b", label:"Monter vers C (+½ ton)",       isCorrect: true  },
      { id:"c", label:"Rester sur B",                 isCorrect: false },
      { id:"d", label:"Sauter vers E",                isCorrect: false },
    ],
    explanation: "La sensible (VIIe degré) doit obligatoirement monter vers la tonique par demi-ton ascendant. Ne jamais faire descendre la sensible — règle absolue de l'écriture tonale.",
  },
  {
    id: "c3-voix-septieme",
    type: "identify", cours: 3, difficulty: 1,
    tags: ["conduite de voix","septième de dominante","résolution"],
    concepts: ["septième de dominante","descente conjointe"],
    question: "Dans la résolution G7 → C, la septième F doit :",
    options: [
      { id:"a", label:"Monter vers G",                    isCorrect: false },
      { id:"b", label:"Descendre vers E (–½ ton)",        isCorrect: true  },
      { id:"c", label:"Rester sur F",                     isCorrect: false },
      { id:"d", label:"Descendre vers D",                 isCorrect: false },
    ],
    explanation: "La septième de dominante (F dans G7) doit descendre par degré conjoint vers la tierce de l'accord suivant (E dans C). Règle absolue — ne jamais faire monter la septième.",
  },
];

// ════════════════════════════════════════════════════════════════════════════
// COURS 4 — Cadences et progressions
// ════════════════════════════════════════════════════════════════════════════

export const COURS4_IDENTIFY: IdentifyExercise[] = [
  {
    id: "c4-cadence-type-v-i",
    type: "identify", cours: 4, difficulty: 1,
    tags: ["cadences","cadence parfaite","identification"],
    concepts: ["cadence parfaite","V-I état fondamental"],
    question: "G7 → C (les deux à l'état fondamental) est une :",
    options: [
      { id:"a", label:"Demi-cadence",      isCorrect: false },
      { id:"b", label:"Cadence rompue",    isCorrect: false },
      { id:"c", label:"Cadence parfaite",  isCorrect: true  },
      { id:"d", label:"Cadence plagale",   isCorrect: false },
    ],
    explanation: "Cadence parfaite = V → I, tous deux à l'état fondamental. C'est la cadence la plus conclusive — elle apporte une résolution définitive.",
  },
  {
    id: "c4-cadence-type-iv-i",
    type: "identify", cours: 4, difficulty: 1,
    tags: ["cadences","cadence plagale","Amen"],
    concepts: ["cadence plagale","IV-I","couleur solennelle"],
    question: "La progression F → C en Do majeur est une :",
    options: [
      { id:"a", label:"Cadence parfaite",   isCorrect: false },
      { id:"b", label:"Cadence plagale",    isCorrect: true  },
      { id:"c", label:"Cadence rompue",     isCorrect: false },
      { id:"d", label:"Demi-cadence",       isCorrect: false },
    ],
    explanation: "Cadence plagale = IV → I (F → C). Sa couleur douce et solennelle lui vaut le surnom de cadence 'Amen' — très présente dans la musique liturgique.",
  },
  {
    id: "c4-cadence-type-v-vi",
    type: "identify", cours: 4, difficulty: 1,
    tags: ["cadences","cadence rompue","surprise"],
    concepts: ["cadence rompue","V-VI","effet de surprise"],
    question: "La progression G7 → Am est une :",
    options: [
      { id:"a", label:"Cadence parfaite",  isCorrect: false },
      { id:"b", label:"Cadence plagale",   isCorrect: false },
      { id:"c", label:"Demi-cadence",      isCorrect: false },
      { id:"d", label:"Cadence rompue",    isCorrect: true  },
    ],
    explanation: "Cadence rompue = V → VI (ou toute tonique secondaire). G7 devrait résoudre sur C — en allant vers Am, on crée un effet de surprise qui prolonge la phrase.",
  },
  {
    id: "c4-cadence-type-demicadence",
    type: "identify", cours: 4, difficulty: 1,
    tags: ["cadences","demi-cadence","suspension"],
    concepts: ["demi-cadence","suspension","question musicale"],
    question: "Une phrase qui se termine sur G7 (sans résoudre vers C) est :",
    options: [
      { id:"a", label:"Une cadence parfaite",   isCorrect: false },
      { id:"b", label:"Une cadence plagale",    isCorrect: false },
      { id:"c", label:"Une demi-cadence",       isCorrect: true  },
      { id:"d", label:"Une cadence rompue",     isCorrect: false },
    ],
    explanation: "La demi-cadence se termine sur la dominante sans résoudre. Effet de suspension — comme une question restée sans réponse. Souvent à la fin de la première phrase d'une période.",
  },
  {
    id: "c4-cadence-imparfaite",
    type: "identify", cours: 4, difficulty: 2,
    tags: ["cadences","cadence imparfaite","renversement"],
    concepts: ["cadence imparfaite","renversement","moins conclusive"],
    question: "En quoi une cadence imparfaite diffère-t-elle de la cadence parfaite ?",
    options: [
      { id:"a", label:"Elle utilise IV au lieu de V",                                    isCorrect: false },
      { id:"b", label:"Au moins un des deux accords est renversé (ex : G7/B → C ou G7 → C/E)", isCorrect: true  },
      { id:"c", label:"Elle résout sur VI au lieu de I",                                  isCorrect: false },
      { id:"d", label:"Elle ne contient pas de triton",                                   isCorrect: false },
    ],
    explanation: "Cadence imparfaite = V → I, mais au moins un accord est renversé. On perçoit bien la résolution vers la tonique, mais elle reste moins ferme qu'avec les deux accords en état fondamental.",
  },
  {
    id: "c4-prog-pendule",
    type: "identify", cours: 4, difficulty: 2,
    tags: ["progressions","pendule","oscillation"],
    concepts: ["technique du pendule","oscillation harmonique"],
    question: "La technique du 'pendule' consiste à :",
    options: [
      { id:"a", label:"Toujours alterner V et I",                                    isCorrect: false },
      { id:"b", label:"Alterner deux fonctions (ex T–SD–T–SD) avant une cadence finale", isCorrect: true  },
      { id:"c", label:"Répéter le même accord deux fois",                             isCorrect: false },
      { id:"d", label:"Changer de tonalité à chaque mesure",                          isCorrect: false },
    ],
    explanation: "Le pendule alterne entre deux fonctions — souvent T et SD (C–F–C–F) ou T et D — créant un effet d'oscillation avant de rejoindre la cadence finale. Très fréquent dans les introductions.",
  },
  {
    id: "c4-prog-cycle-quintes",
    type: "identify", cours: 4, difficulty: 2,
    tags: ["progressions","cycle des quintes","séquence"],
    concepts: ["cycle des quintes","mouvement de quinte","progression naturelle"],
    question: "Dans le cycle des quintes diatoniques de Do majeur, quel accord suit IV (F) ?",
    options: [
      { id:"a", label:"I (C)",    isCorrect: false },
      { id:"b", label:"II (Dm)",  isCorrect: false },
      { id:"c", label:"VII (Bdim)",isCorrect: true  },
      { id:"d", label:"VI (Am)",  isCorrect: false },
    ],
    explanation: "Cycle complet : I–IV–VII–III–VI–II–V–I. Chaque fondamentale descend d'une quinte. Après F (IV), on va vers B (VII) — fondamentale F → B = descente de quinte.",
  },
  {
    id: "c4-prog-extension",
    type: "identify", cours: 4, difficulty: 2,
    tags: ["progressions","extension de fonction"],
    concepts: ["extension de fonction","prolongement harmonique"],
    question: "La progression Dm – F – G7 – C est analysée comme :",
    options: [
      { id:"a", label:"SD – D – D – T",   isCorrect: false },
      { id:"b", label:"SD – SD – D – T",  isCorrect: true  },
      { id:"c", label:"T – SD – D – T",   isCorrect: false },
      { id:"d", label:"SD – T – D – T",   isCorrect: false },
    ],
    explanation: "Dm (SD) – F (SD) – G7 (D) – C (T) = SD–SD–D–T. C'est une extension de la fonction sous-dominante — deux accords SD s'enchaînent pour donner plus de poids à la préparation de la dominante.",
  },
  {
    id: "c4-cadence-parfaite-condition",
    type: "identify", cours: 4, difficulty: 1,
    tags: ["cadence parfaite","état fondamental","condition"],
    concepts: ["cadence parfaite","état fondamental obligatoire"],
    question: "Pour qu'une cadence V → I soit 'parfaite', il faut que :",
    options: [
      { id:"a", label:"V soit renversé",                                       isCorrect: false },
      { id:"b", label:"Les deux accords soient à l'état fondamental",          isCorrect: true  },
      { id:"c", label:"V soit un accord de 7e",                                isCorrect: false },
      { id:"d", label:"I soit en premier renversement",                        isCorrect: false },
    ],
    explanation: "La cadence parfaite exige V et I à l'état fondamental — les fondamentales sont à la basse. Cette condition crée le signal acoustique le plus fort d'une résolution.",
  },
  {
    id: "c4-prog-analyse-pop",
    type: "identify", cours: 4, difficulty: 2,
    tags: ["progressions","analyse","I-V-vi-IV"],
    concepts: ["progression pop","T-D-T-SD","analyse fonctionnelle"],
    question: "La progression C – G – Am – F est fonctionnellement :",
    options: [
      { id:"a", label:"T – SD – T – D",     isCorrect: false },
      { id:"b", label:"T – D – T – SD",     isCorrect: true  },
      { id:"c", label:"SD – D – T – SD",    isCorrect: false },
      { id:"d", label:"T – D – SD – T",     isCorrect: false },
    ],
    explanation: "C(T) – G(D) – Am(T) – F(SD) = T–D–T–SD. Am est la tonique de substitution (VI). Cette progression est à la base de milliers de chansons pop modernes.",
  },
];

// ════════════════════════════════════════════════════════════════════════════
// COURS 5 — Emprunts et suites harmoniques classiques
// ════════════════════════════════════════════════════════════════════════════

export const COURS5_IDENTIFY: IdentifyExercise[] = [
  {
    id: "c5-minor-harmonic",
    type: "identify", cours: 5, difficulty: 1,
    tags: ["gamme mineure harmonique","sensible élevée"],
    concepts: ["gamme mineure harmonique","VIIe degré élevé","triton fonctionnel"],
    question: "Pourquoi élève-t-on le VIIe degré dans la gamme mineure harmonique ?",
    options: [
      { id:"a", label:"Pour faciliter la lecture",                                                          isCorrect: false },
      { id:"b", label:"Pour créer une sensible forte et recréer un triton fonctionnel (IV et VII)",         isCorrect: true  },
      { id:"c", label:"Pour éviter les quintes parallèles",                                                 isCorrect: false },
      { id:"d", label:"Car le VIIe degré naturel est faux",                                                 isCorrect: false },
    ],
    explanation: "La gamme mineure naturelle n'a pas de triton fonctionnel utilisable. En élevant le VIIe d'un ½ ton, on crée une sensible (forte attraction vers la tonique) et un triton entre les IVe et VIIe degrés — identique à la gamme majeure.",
  },
  {
    id: "c5-minor-dominant",
    type: "identify", cours: 5, difficulty: 1,
    tags: ["gamme mineure","dominante V7","sensible"],
    concepts: ["dominante en mineur","sensible harmonique"],
    question: "En La mineur, quel est l'accord de dominante (V7) avec la sensible correcte ?",
    context: "La mineur harmonique : A – B – C – D – E – F – G#",
    options: [
      { id:"a", label:"Em7 (E–G–B–D)",   isCorrect: false },
      { id:"b", label:"E7 (E–G#–B–D)",   isCorrect: true  },
      { id:"c", label:"Edim (E–G–Bb)",   isCorrect: false },
      { id:"d", label:"G7 (G–B–D–F)",    isCorrect: false },
    ],
    explanation: "En La mineur harmonique, le Ve degré est E. Avec la sensible G# (VIIe degré élevé), on obtient E7 = E–G#–B–D. G# crée la tension vers A (tonique).",
  },
  {
    id: "c5-emprunt-iv-mineur",
    type: "identify", cours: 5, difficulty: 2,
    tags: ["emprunt","IV mineur","homonyme"],
    concepts: ["emprunt à l'homonyme","IV mineur","couleur romantique"],
    question: "Dans la progression C – Fm – G7 – C (en Do majeur), Fm est :",
    options: [
      { id:"a", label:"Un accord de Do mineur",                                      isCorrect: false },
      { id:"b", label:"Un emprunt au mode mineur homonyme (Do mineur)",              isCorrect: true  },
      { id:"c", label:"Une faute harmonique",                                        isCorrect: false },
      { id:"d", label:"Un accord de Fa majeur renversé",                             isCorrect: false },
    ],
    explanation: "Fm est le IVe degré de Do mineur — emprunté temporairement. Do majeur et Do mineur partagent le même triton (F–B), donc Fm a la même fonction SD en Do majeur. La tierce bémolisée (Ab) apporte une couleur sombre romantique.",
  },
  {
    id: "c5-emprunt-fonctionnel",
    type: "identify", cours: 5, difficulty: 2,
    tags: ["emprunt","triton fonctionnel","même fonction"],
    concepts: ["emprunt à l'homonyme","même triton fonctionnel","substitution"],
    question: "Pourquoi Do majeur et Do mineur peuvent-ils s'échanger des accords ?",
    options: [
      { id:"a", label:"Car ils ont les mêmes notes",                                               isCorrect: false },
      { id:"b", label:"Car ils partagent le même triton fonctionnel (F–B) — les fonctions sont identiques", isCorrect: true  },
      { id:"c", label:"Car Do mineur est plus simple",                                              isCorrect: false },
      { id:"d", label:"Car ils sont à la même hauteur",                                             isCorrect: false },
    ],
    explanation: "Do majeur et Do mineur partagent le triton F–B. Ce triton détermine les fonctions T/SD/D. Les accords de même fonction peuvent donc s'échanger entre les deux modes — c'est le principe des emprunts à l'homonyme.",
  },
  {
    id: "c5-chaconne-bass",
    type: "identify", cours: 5, difficulty: 2,
    tags: ["basse de chaconne","baroque","basse descendante"],
    concepts: ["basse de chaconne","ostinato","basse descendante"],
    question: "La basse de chaconne est caractérisée par :",
    options: [
      { id:"a", label:"Une basse montante par demi-tons",                          isCorrect: false },
      { id:"b", label:"Une basse descendante, souvent par tierces ou secondes, avec retour régulier au Ier degré", isCorrect: true  },
      { id:"c", label:"Une basse qui reste sur la dominante",                      isCorrect: false },
      { id:"d", label:"Un accord de 6 mesures répété",                             isCorrect: false },
    ],
    explanation: "La basse de chaconne descend (I–V/3e basse–IV/3e basse–V7) créant une tension progressive qui retourne toujours à la tonique. Archétype baroque utilisé dans de nombreuses variations.",
  },
  {
    id: "c5-napolitain",
    type: "identify", cours: 5, difficulty: 3,
    tags: ["accord napolitain","bII","sous-dominante"],
    concepts: ["accord napolitain","bII6","emprunt dramatique"],
    question: "L'accord napolitain (♭II6) en Do mineur est :",
    options: [
      { id:"a", label:"Db majeur en premier renversement, fonction Sous-dominante",  isCorrect: true  },
      { id:"b", label:"D bémol mineur, fonction Dominante",                           isCorrect: false },
      { id:"c", label:"D majeur, fonction Tonique",                                   isCorrect: false },
      { id:"d", label:"Cb majeur, fonction Dominante",                                isCorrect: false },
    ],
    explanation: "L'accord napolitain = IIe degré abaissé (♭II) en position de premier renversement. En Do mineur : Db majeur / Fa = ♭II6. Sa fonction est sous-dominante — il prépare la dominante avec une couleur dramatique caractéristique du romantisme.",
  },
  {
    id: "c5-cycle-quintes-autumn",
    type: "identify", cours: 5, difficulty: 2,
    tags: ["cycle des quintes","Autumn Leaves","structure"],
    concepts: ["cycle des quintes descendantes","mouvement naturel"],
    question: "Autumn Leaves est basé sur quel principe harmonique ?",
    options: [
      { id:"a", label:"Le pendule T–SD",                    isCorrect: false },
      { id:"b", label:"Le cycle des quintes descendantes",  isCorrect: true  },
      { id:"c", label:"L'emprunt au mineur",                isCorrect: false },
      { id:"d", label:"La basse de chaconne",               isCorrect: false },
    ],
    explanation: "Autumn Leaves suit le cycle des quintes descendantes : Cm–Fm–Bdim–Eb–Ab–Ddim–G7–Cm. Chaque accord résout sur le suivant par mouvement de quinte descendante — le mouvement harmonique le plus naturel.",
  },
  {
    id: "c5-relative-minor",
    type: "identify", cours: 5, difficulty: 1,
    tags: ["relatif mineur","même armure"],
    concepts: ["relatif mineur","VIe degré","même armure"],
    question: "Le relatif mineur de Do majeur est :",
    options: [
      { id:"a", label:"Do mineur",  isCorrect: false },
      { id:"b", label:"La mineur",  isCorrect: true  },
      { id:"c", label:"Ré mineur",  isCorrect: false },
      { id:"d", label:"Mi mineur",  isCorrect: false },
    ],
    explanation: "Le relatif mineur est au VIe degré de la gamme majeure — soit 3 demi-tons en dessous de la tonique. Do majeur → La mineur. Même armure (pas d'altération), même notes mais couleur différente.",
  },
  {
    id: "c5-harmonic-vs-natural",
    type: "identify", cours: 5, difficulty: 2,
    tags: ["mineur naturel","mineur harmonique","différence"],
    concepts: ["mineur naturel","mineur harmonique","VIIe degré"],
    question: "La différence entre la gamme mineure naturelle et harmonique est :",
    options: [
      { id:"a", label:"Le IVe degré est différent",                                            isCorrect: false },
      { id:"b", label:"Le VIIe degré est élevé d'un ½ ton dans la gamme harmonique",           isCorrect: true  },
      { id:"c", label:"Le IIe degré est différent",                                            isCorrect: false },
      { id:"d", label:"La gamme harmonique a 8 notes au lieu de 7",                            isCorrect: false },
    ],
    explanation: "La gamme mineure harmonique = mineure naturelle avec le VIIe degré élevé d'un ½ ton. Ex : La mineur naturel = A B C D E F G. La mineur harmonique = A B C D E F G#. Le G# est la sensible qui attire vers A.",
  },
  {
    id: "c5-function-minor",
    type: "identify", cours: 5, difficulty: 2,
    tags: ["fonctions en mineur","triton fonctionnel"],
    concepts: ["fonctions en mineur","même triton","adaptation"],
    question: "En La mineur, le triton fonctionnel est formé par :",
    options: [
      { id:"a", label:"A et E",  isCorrect: false },
      { id:"b", label:"D et G#", isCorrect: true  },
      { id:"c", label:"E et B",  isCorrect: false },
      { id:"d", label:"C et F#", isCorrect: false },
    ],
    explanation: "En La mineur harmonique, IV = D et VII = G# (sensible élevée). D–G# = 6 demi-tons = triton fonctionnel. L'accord de dominante E7 contient D et G# — il résout sur A (tonique).",
  },
];

// ════════════════════════════════════════════════════════════════════════════
// COURS 6 — Construire une harmonisation / Notes étrangères
// ════════════════════════════════════════════════════════════════════════════

export const COURS6_IDENTIFY: IdentifyExercise[] = [
  {
    id: "c6-nonchord-passage",
    type: "identify", cours: 6, difficulty: 1,
    tags: ["notes étrangères","note de passage"],
    concepts: ["note de passage","mouvement conjoint entre notes réelles"],
    question: "Dans la mélodie E – D – C sur l'accord de C, D est :",
    context: "Accord : C majeur (C–E–G). Mélodie : E → D → C",
    options: [
      { id:"a", label:"Une note réelle de l'accord",   isCorrect: false },
      { id:"b", label:"Une note de passage",            isCorrect: true  },
      { id:"c", label:"Une appogiature",                isCorrect: false },
      { id:"d", label:"Un retard",                     isCorrect: false },
    ],
    explanation: "D n'appartient pas à C (C–E–G). Il relie E (note réelle) à C (note réelle) par mouvement conjoint descendant → note de passage. Les notes de passage toujours entre deux notes réelles par degré conjoint.",
  },
  {
    id: "c6-nonchord-broderie",
    type: "identify", cours: 6, difficulty: 1,
    tags: ["notes étrangères","broderie"],
    concepts: ["broderie","note étrangère entourée de deux notes identiques"],
    question: "Dans la mélodie C – D – C sur l'accord de C, D est :",
    context: "Accord : C majeur. Mélodie : C → D → C",
    options: [
      { id:"a", label:"Une note de passage",  isCorrect: false },
      { id:"b", label:"Une broderie",          isCorrect: true  },
      { id:"c", label:"Un retard",            isCorrect: false },
      { id:"d", label:"Une échappée",         isCorrect: false },
    ],
    explanation: "La broderie est une note étrangère entourée des deux côtés par la même note réelle. C–D–C : D est une broderie supérieure de C. La note réelle C encadre la note étrangère D.",
  },
  {
    id: "c6-nonchord-retard",
    type: "identify", cours: 6, difficulty: 2,
    tags: ["notes étrangères","retard","résolution"],
    concepts: ["retard","dissonance préparée","résolution conjointe"],
    question: "Un retard se définit comme :",
    options: [
      { id:"a", label:"Une note qui anticipe l'accord suivant",                              isCorrect: false },
      { id:"b", label:"Une note prolongée de l'accord précédent, dissonante sur le nouvel accord, qui se résout conjointement", isCorrect: true  },
      { id:"c", label:"Une note entre deux notes réelles par mouvement conjoint",           isCorrect: false },
      { id:"d", label:"Une note appuyée sur un temps fort",                                  isCorrect: false },
    ],
    explanation: "Le retard : une note reste (est 'retardée') de l'accord précédent sur le nouvel accord où elle est dissonante, puis se résout par degré conjoint. Ex : D–C sur G7 → C, où D est un retard de C.",
  },
  {
    id: "c6-nonchord-anticipation",
    type: "identify", cours: 6, difficulty: 2,
    tags: ["notes étrangères","anticipation"],
    concepts: ["anticipation","note de l'accord suivant introduite en avance"],
    question: "Une anticipation est :",
    options: [
      { id:"a", label:"Une note qui reste de l'accord précédent",                  isCorrect: false },
      { id:"b", label:"Une note de l'accord suivant introduite avant le changement", isCorrect: true  },
      { id:"c", label:"Une note non harmonique sur un temps fort",                  isCorrect: false },
      { id:"d", label:"Une note entre deux notes réelles",                          isCorrect: false },
    ],
    explanation: "L'anticipation introduit une note du prochain accord avant le changement harmonique. Ex : mélodie E sur G7, alors que C n'arrive qu'au temps suivant. E est anticipé.",
  },
  {
    id: "c6-nonchord-appogiature",
    type: "identify", cours: 6, difficulty: 2,
    tags: ["notes étrangères","appogiature","temps fort"],
    concepts: ["appogiature","dissonance sur temps fort","résolution"],
    question: "L'appogiature se distingue de la note de passage car :",
    options: [
      { id:"a", label:"Elle est toujours descendante",                                     isCorrect: false },
      { id:"b", label:"Elle tombe sur un temps fort et se résout conjointement (souvent descendante)", isCorrect: true  },
      { id:"c", label:"Elle dure plus longtemps",                                           isCorrect: false },
      { id:"d", label:"Elle est toujours chromatique",                                      isCorrect: false },
    ],
    explanation: "L'appogiature : note étrangère appuyée sur un temps fort, résolue ensuite par mouvement conjoint. Elle crée une dissonance intentionnelle très expressive — caractéristique du style romantique.",
  },
  {
    id: "c6-rhythm-harmonic",
    type: "identify", cours: 6, difficulty: 2,
    tags: ["rythme harmonique","rythme mélodique"],
    concepts: ["rythme harmonique","rythme mélodique","distinction"],
    question: "Le rythme harmonique est :",
    options: [
      { id:"a", label:"La fréquence de changement des notes de la mélodie",     isCorrect: false },
      { id:"b", label:"La fréquence de changement des accords",                  isCorrect: true  },
      { id:"c", label:"Le tempo du morceau",                                     isCorrect: false },
      { id:"d", label:"Le nombre de notes par mesure",                           isCorrect: false },
    ],
    explanation: "Le rythme harmonique = fréquence de changement des accords. La mélodie peut évoluer rapidement pendant que l'harmonie reste immobile. Identifier le rythme harmonique permet d'éviter de chercher un accord pour chaque note de la mélodie.",
  },
  {
    id: "c6-tonal-center",
    type: "identify", cours: 6, difficulty: 1,
    tags: ["centre tonal","identification","armure"],
    concepts: ["centre tonal","indices tonals","cadence finale"],
    question: "Pour identifier le centre tonal d'une mélodie, on examine :",
    options: [
      { id:"a", label:"Uniquement le premier accord",                                                isCorrect: false },
      { id:"b", label:"L'armure, les altérations accidentelles, les points stables et la cadence finale", isCorrect: true  },
      { id:"c", label:"Le nombre de notes dans la mélodie",                                           isCorrect: false },
      { id:"d", label:"Uniquement les notes sur les temps forts",                                     isCorrect: false },
    ],
    explanation: "Plusieurs indices permettent d'identifier le centre tonal : l'armure (tonalités possibles), les altérations accidentelles (emprunts ou modulations), les notes tenues/répétées (souvent I ou VI), et la cadence finale (révèle le 'vrai ton').",
  },
  {
    id: "c6-harmonization-step",
    type: "identify", cours: 6, difficulty: 2,
    tags: ["harmonisation","étapes","processus"],
    concepts: ["étapes de l'harmonisation","notes réelles","cohérence fonctionnelle"],
    question: "Dans le processus d'harmonisation, après avoir identifié les notes réelles, on :",
    options: [
      { id:"a", label:"Choisit la première tonalité qui vient à l'esprit",                             isCorrect: false },
      { id:"b", label:"Cherche les accords contenant ces notes et vérifie la cohérence fonctionnelle", isCorrect: true  },
      { id:"c", label:"Applique toujours la progression I–IV–V–I",                                    isCorrect: false },
      { id:"d", label:"Élimine toutes les notes de passage",                                          isCorrect: false },
    ],
    explanation: "Après identification des notes réelles : chercher les accords candidats (qui contiennent ces notes), vérifier que les autres notes peuvent être des notes étrangères, puis tester la logique fonctionnelle T–SD–D–T.",
  },
];

// ════════════════════════════════════════════════════════════════════════════
// COURS 7 — La tonicisation
// ════════════════════════════════════════════════════════════════════════════

export const COURS7_IDENTIFY: IdentifyExercise[] = [
  {
    id: "c7-tonicization-def",
    type: "identify", cours: 7, difficulty: 1,
    tags: ["tonicisation","définition","dominante secondaire"],
    concepts: ["tonicisation","tonique temporaire","dominante secondaire"],
    question: "La tonicisation consiste à :",
    options: [
      { id:"a", label:"Changer de tonalité définitivement",                                     isCorrect: false },
      { id:"b", label:"Traiter momentanément un accord comme une tonique en lui appliquant sa propre dominante", isCorrect: true  },
      { id:"c", label:"Emprunter un accord au mode mineur",                                      isCorrect: false },
      { id:"d", label:"Répéter le même accord plusieurs fois",                                   isCorrect: false },
    ],
    explanation: "La tonicisation rend un accord 'tonique' l'espace d'un instant en le précédant de sa propre dominante (et/ou sous-dominante). Ce n'est pas une modulation — on reste dans la tonalité principale.",
  },
  {
    id: "c7-tonicization-vv",
    type: "identify", cours: 7, difficulty: 1,
    tags: ["tonicisation","V/V","dominante de la dominante"],
    concepts: ["V/V","dominante secondaire","tonicisation de V"],
    question: "En Do majeur, V/V (dominante de la dominante) est :",
    options: [
      { id:"a", label:"C7",   isCorrect: false },
      { id:"b", label:"D7",   isCorrect: true  },
      { id:"c", label:"A7",   isCorrect: false },
      { id:"d", label:"F#7",  isCorrect: false },
    ],
    explanation: "En Do majeur, V = G. La dominante de G = D7. D7 est le V/V — il tonicise G (la dominante) en le précédant comme si G était une tonique temporaire. La progression D7 → G7 → C exploite cette double tension.",
  },
  {
    id: "c7-tonicization-identify",
    type: "identify", cours: 7, difficulty: 2,
    tags: ["tonicisation","identification","chromatisme"],
    concepts: ["dominante secondaire","chromatisme ascendant","sensible temporaire"],
    question: "Dans la progression C – A7 – Dm – G7 – C, A7 est :",
    options: [
      { id:"a", label:"Une erreur — A7 n'appartient pas à Do majeur",           isCorrect: false },
      { id:"b", label:"V/II — il tonicise Dm (la sus-tonique) en étant sa dominante", isCorrect: true  },
      { id:"c", label:"Un emprunt à La majeur",                                 isCorrect: false },
      { id:"d", label:"Une substitution de G7",                                 isCorrect: false },
    ],
    explanation: "A7 est la dominante de Dm (Ré mineur). En plaçant A7 avant Dm, on tonicise Dm — on lui donne brièvement le statut de tonique. C# (la tierce de A7) est la sensible temporaire de Dm.",
  },
  {
    id: "c7-tonicization-rule",
    type: "identify", cours: 7, difficulty: 2,
    tags: ["tonicisation","règles","exclusions"],
    concepts: ["limites de la tonicisation","accord diminué","tonique principale"],
    question: "Quels accords ne peuvent PAS être tonicisés ?",
    options: [
      { id:"a", label:"Les accords mineurs",                                              isCorrect: false },
      { id:"b", label:"La tonique principale et les accords diminués",                    isCorrect: true  },
      { id:"c", label:"Les accords de 7e",                                                isCorrect: false },
      { id:"d", label:"Les accords en renversement",                                      isCorrect: false },
    ],
    explanation: "La tonique principale est déjà tonique — pas besoin de la toniciser. Les accords diminués ne peuvent pas assumer le rôle de tonique dans une tonalité. Tous les autres degrés peuvent être tonicisés.",
  },
  {
    id: "c7-tonicization-chain",
    type: "identify", cours: 7, difficulty: 3,
    tags: ["tonicisation","chaîne","dominantes secondaires"],
    concepts: ["chaîne de tonicisations","dominante de dominante"],
    question: "La progression C – C#7 – F#7 – B7 – E7 – A est une :",
    options: [
      { id:"a", label:"Suite de modulations",                        isCorrect: false },
      { id:"b", label:"Chaîne de tonicisations (dominantes secondaires enchaînées)", isCorrect: true  },
      { id:"c", label:"Cycle des quintes ascendantes",              isCorrect: false },
      { id:"d", label:"Extension de la fonction tonique",            isCorrect: false },
    ],
    explanation: "Chaque accord est la dominante du suivant : C#7 tonicise F#, F#7 tonicise B, B7 tonicise E, E7 tonicise A. C'est une chaîne de tonicisations — chaque dominant prépare le suivant jusqu'à la résolution finale.",
  },
  {
    id: "c7-secondary-dominant-find",
    type: "identify", cours: 7, difficulty: 2,
    tags: ["tonicisation","trouver la dominante secondaire"],
    concepts: ["dominante secondaire","méthode pratique","quinte ascendante"],
    question: "Pour trouver la dominante secondaire de Dm (V/II en Do), on :",
    options: [
      { id:"a", label:"Descend d'une quinte depuis D",                                    isCorrect: false },
      { id:"b", label:"Monte d'une quinte depuis D : A, puis joue A7",                    isCorrect: true  },
      { id:"c", label:"Prend le IIe degré de D",                                          isCorrect: false },
      { id:"d", label:"Emprunte à Ré majeur",                                             isCorrect: false },
    ],
    explanation: "Astuce : pour trouver V/X, monte d'une quinte depuis la fondamentale de X, puis joue un accord dominant 7. Dm → monter une quinte = A → A7 est V/II. Simple et systématique.",
  },
  {
    id: "c7-tonicization-vs-modulation",
    type: "identify", cours: 7, difficulty: 3,
    tags: ["tonicisation","vs modulation","différence"],
    concepts: ["tonicisation vs modulation","durée","cadence d'arrivée"],
    question: "La tonicisation diffère de la modulation car :",
    options: [
      { id:"a", label:"La tonicisation utilise plus d'accords",                                     isCorrect: false },
      { id:"b", label:"La tonicisation est momentanée — la nouvelle 'tonique' ne s'installe pas. La modulation installe durablement une nouvelle tonalité par une cadence", isCorrect: true  },
      { id:"c", label:"La modulation est interdite",                                                isCorrect: false },
      { id:"d", label:"La tonicisation ne fonctionne qu'en majeur",                                 isCorrect: false },
    ],
    explanation: "La tonicisation = flash momentané — on revient aussitôt à la tonalité principale. La modulation = voyage réel : on installe une nouvelle tonalité avec une cadence parfaite et on y reste un moment.",
  },
];

// ════════════════════════════════════════════════════════════════════════════
// COURS 8 — Modulation par accord pivot
// ════════════════════════════════════════════════════════════════════════════

export const COURS8_IDENTIFY: IdentifyExercise[] = [
  {
    id: "c8-modulation-def",
    type: "identify", cours: 8, difficulty: 1,
    tags: ["modulation","définition","changement de tonalité"],
    concepts: ["modulation","changement de centre tonal","voyage harmonique"],
    question: "Une modulation est :",
    options: [
      { id:"a", label:"Un emprunt momentané d'accord étranger",                          isCorrect: false },
      { id:"b", label:"Un changement durable de centre tonal, instauré par une cadence", isCorrect: true  },
      { id:"c", label:"Une tonicisation prolongée",                                      isCorrect: false },
      { id:"d", label:"L'utilisation du mode mineur en majeur",                          isCorrect: false },
    ],
    explanation: "La modulation change véritablement de tonalité de référence — ce n'est pas un simple emprunt. Elle exige d'effacer l'ancien centre tonal, d'installer le nouveau par une cadence parfaite, et d'y rester un moment.",
  },
  {
    id: "c8-pivot-def",
    type: "identify", cours: 8, difficulty: 1,
    tags: ["accord pivot","modulation","double appartenance"],
    concepts: ["accord pivot","double appartenance","transition fluide"],
    question: "L'accord pivot est :",
    options: [
      { id:"a", label:"Le premier accord de la nouvelle tonalité",                            isCorrect: false },
      { id:"b", label:"Un accord appartenant simultanément aux deux tonalités — il assure la transition", isCorrect: true  },
      { id:"c", label:"Toujours la dominante de la nouvelle tonalité",                        isCorrect: false },
      { id:"d", label:"Un accord renversé utilisé pour moduler",                              isCorrect: false },
    ],
    explanation: "L'accord pivot appartient aux deux tonalités — il est analysé différemment dans chacune. Ex : Am est VI en Do majeur et II en Sol majeur. Cette double appartenance permet la transition la plus fluide.",
  },
  {
    id: "c8-pivot-c-to-g",
    type: "identify", cours: 8, difficulty: 2,
    tags: ["accord pivot","Do vers Sol","Am"],
    concepts: ["modulation par accord pivot","tons voisins","Am VI=II"],
    question: "Dans la modulation Do majeur → Sol majeur, Am est l'accord pivot idéal car :",
    options: [
      { id:"a", label:"Am est la tonique de Do et de Sol",                               isCorrect: false },
      { id:"b", label:"Am est VI en Do (tonique douce) et II en Sol (sous-dominante)",   isCorrect: true  },
      { id:"c", label:"Am contient les notes des deux gammes",                            isCorrect: false },
      { id:"d", label:"Am est plus stable que C et G",                                   isCorrect: false },
    ],
    explanation: "Am = VI en Do majeur (tonique de substitution) = II en Sol majeur (sous-dominante, prépare naturellement la cadence en Sol). Ce double rôle en fait le pivot idéal pour cette modulation.",
  },
  {
    id: "c8-64-cadential",
    type: "identify", cours: 8, difficulty: 2,
    tags: ["6/4 cadentiel","I6/4","instabilité"],
    concepts: ["6/4 cadentiel","Ier degré en 2e renversement","appoggiature de V"],
    question: "Le 6/4 de cadence est :",
    options: [
      { id:"a", label:"V7 en deuxième renversement",                                               isCorrect: false },
      { id:"b", label:"Le Ier degré en 2e renversement (quinte à la basse), juste avant V7",      isCorrect: true  },
      { id:"c", label:"Un accord de 6te ajoutée sur IV",                                           isCorrect: false },
      { id:"d", label:"Un accord de IV en premier renversement",                                   isCorrect: false },
    ],
    explanation: "Le 6/4 cadentiel = I en 2e renversement (ex : C/G en Do). La quinte G à la basse crée une double appoggiature de V — les intervalles de 6te et 4te au-dessus de la basse se résolvent vers 5te et 3ce de V. Très dramatique avant la résolution finale.",
  },
  {
    id: "c8-v7sus4",
    type: "identify", cours: 8, difficulty: 2,
    tags: ["V7sus4","suspension","résolution douce"],
    concepts: ["V7sus4","quarte suspendue","résolution vers tierce"],
    question: "Dans V7sus4 → V7 → I, la quarte suspendue :",
    options: [
      { id:"a", label:"Monte vers la quinte",                  isCorrect: false },
      { id:"b", label:"Descend vers la tierce de V7",          isCorrect: true  },
      { id:"c", label:"Reste immobile",                        isCorrect: false },
      { id:"d", label:"Monte vers la fondamentale",            isCorrect: false },
    ],
    explanation: "Dans V7sus4, la quarte (souvent la tonique) remplace temporairement la tierce. Elle descend ensuite conjointement vers la tierce (V7sus4 → V7), créant un retard expressif avant la résolution finale. Très utilisé en jazz.",
  },
  {
    id: "c8-neighbor-keys",
    type: "identify", cours: 8, difficulty: 2,
    tags: ["tons voisins","modulation facile"],
    concepts: ["tons voisins","notes communes","modulation fluide"],
    question: "Pourquoi module-t-on plus facilement vers les tons voisins ?",
    options: [
      { id:"a", label:"Car ils sont dans la même gamme pentatonique",                                isCorrect: false },
      { id:"b", label:"Car ils partagent de nombreuses notes et accords communs — plus d'accords pivots possibles", isCorrect: true  },
      { id:"c", label:"Car ils ont la même tonique",                                                 isCorrect: false },
      { id:"d", label:"Car ils utilisent les mêmes doigtés au piano",                               isCorrect: false },
    ],
    explanation: "Les tons voisins partagent 6 notes sur 7 — donc beaucoup d'accords communs, autant d'accords pivots possibles. Plus les tonalités sont proches sur le cycle des quintes, plus la modulation est fluide.",
  },
  {
    id: "c8-modulation-confirm",
    type: "identify", cours: 8, difficulty: 2,
    tags: ["modulation","cadence d'arrivée","confirmation"],
    concepts: ["cadence parfaite dans nouvelle tonalité","confirmer la modulation"],
    question: "Pour confirmer une modulation, on utilise :",
    options: [
      { id:"a", label:"L'accord pivot suivi d'une note longue",                           isCorrect: false },
      { id:"b", label:"Une cadence parfaite dans la nouvelle tonalité",                    isCorrect: true  },
      { id:"c", label:"Un silence",                                                        isCorrect: false },
      { id:"d", label:"Un accord de 7e de dominante seulement",                           isCorrect: false },
    ],
    explanation: "La modulation se confirme par une cadence parfaite dans la nouvelle tonalité (V–I état fondamental). Sans cette cadence, le changement reste ambigu — on pourrait l'interpréter comme une tonicisation ou un emprunt.",
  },
];

// ════════════════════════════════════════════════════════════════════════════
// COURS 9 — Modulations avancées et pédales harmoniques
// ════════════════════════════════════════════════════════════════════════════

export const COURS9_IDENTIFY: IdentifyExercise[] = [
  {
    id: "c9-marche-diatonique",
    type: "identify", cours: 9, difficulty: 2,
    tags: ["marche diatonique","séquence tonale","Canon de Pachelbel"],
    concepts: ["marche diatonique","séquence tonale","reste dans la tonalité"],
    question: "La marche diatonique diffère de la marche harmonique car :",
    options: [
      { id:"a", label:"Elle est toujours ascendante",                                                   isCorrect: false },
      { id:"b", label:"Elle reste dans la tonalité — les intervalles s'adaptent à la gamme sans sortir de la tonalité", isCorrect: true  },
      { id:"c", label:"Elle utilise uniquement des accords majeurs",                                    isCorrect: false },
      { id:"d", label:"Elle est plus rapide",                                                           isCorrect: false },
    ],
    explanation: "La marche diatonique (ou séquence tonale) transpose le motif à l'intérieur de la même gamme — les intervalles s'ajustent légèrement. La marche harmonique transpose exactement, quittant la tonalité. Ex : le Canon de Pachelbel est une marche diatonique.",
  },
  {
    id: "c9-marche-harmonique",
    type: "identify", cours: 9, difficulty: 2,
    tags: ["marche harmonique","modulation","transposition exacte"],
    concepts: ["marche harmonique","transposition exacte","modulation progressive"],
    question: "La marche harmonique est utilisée pour moduler car :",
    options: [
      { id:"a", label:"Elle reste dans la même tonalité",                                       isCorrect: false },
      { id:"b", label:"En transposant le motif exactement, elle sort progressivement de la tonalité de départ", isCorrect: true  },
      { id:"c", label:"Elle ne fonctionne qu'en mineur",                                        isCorrect: false },
      { id:"d", label:"Elle utilise toujours l'accord pivot",                                   isCorrect: false },
    ],
    explanation: "La marche harmonique transpose le motif à l'identique (mêmes intervalles exacts) — ce qui force la sortie de la tonalité de départ. Chaque étape de la marche est une 'escale' vers la nouvelle tonalité.",
  },
  {
    id: "c9-modulation-note-commune",
    type: "identify", cours: 9, difficulty: 3,
    tags: ["modulation","note commune","lien entre tonalités"],
    concepts: ["modulation par note commune","note pivot","changement de fonction"],
    question: "La modulation par note commune consiste à :",
    options: [
      { id:"a", label:"Utiliser un accord commun aux deux tonalités",                              isCorrect: false },
      { id:"b", label:"Maintenir une seule note (souvent au soprano) qui change de fonction dans la nouvelle tonalité", isCorrect: true  },
      { id:"c", label:"Rester sur la même note à la basse",                                       isCorrect: false },
      { id:"d", label:"Répéter la même mélodie dans une nouvelle tonalité",                       isCorrect: false },
    ],
    explanation: "La note commune reste physiquement identique mais change de rôle. Ex : Sol (tonique de Sol majeur) devient tierce de Mib majeur. L'harmonie se transforme sous cette note immuable — très fluide à l'oreille.",
  },
  {
    id: "c9-minorization",
    type: "identify", cours: 9, difficulty: 2,
    tags: ["minorisation","modulation expressive"],
    concepts: ["minorisation","changement modal","chromatisme fonctionnel"],
    question: "La minorisation consiste à :",
    options: [
      { id:"a", label:"Transposer un accord vers le grave",                                     isCorrect: false },
      { id:"b", label:"Transformer la tierce majeure d'un accord en tierce mineure, ouvrant vers une nouvelle tonalité", isCorrect: true  },
      { id:"c", label:"Ajouter une septième mineure à un accord",                               isCorrect: false },
      { id:"d", label:"Jouer tous les accords en mode mineur",                                  isCorrect: false },
    ],
    explanation: "La minorisation : on bémolise la tierce d'un accord majeur. Ex : C → Cm. Ce Cm peut alors être réinterprété dans une nouvelle tonalité (Cm = IIe degré de Bb majeur). Simple et expressif.",
  },
  {
    id: "c9-pedal-def",
    type: "identify", cours: 9, difficulty: 1,
    tags: ["pédale harmonique","définition","note tenue"],
    concepts: ["pédale harmonique","note tenue","tension de pédale"],
    question: "Une pédale harmonique est :",
    options: [
      { id:"a", label:"Un accord tenu pendant 4 mesures",                                             isCorrect: false },
      { id:"b", label:"Une note maintenue (tenue ou répétée) à une voix pendant que les autres changent d'accords", isCorrect: true  },
      { id:"c", label:"Un effet de sustain au piano",                                                 isCorrect: false },
      { id:"d", label:"La basse qui monte par demi-tons",                                            isCorrect: false },
    ],
    explanation: "La pédale : une note reste fixe pendant que les harmonies changent au-dessus. Elle peut créer des dissonances temporaires qui se résolvent quand l'harmonie rejoint la note tenue. Très présente dans la musique baroque et romantique.",
  },
  {
    id: "c9-pedal-dominant",
    type: "identify", cours: 9, difficulty: 2,
    tags: ["pédale de dominante","tension prolongée","cadence"],
    concepts: ["pédale de dominante","tension avant résolution"],
    question: "La pédale de dominante (V à la basse) est utilisée pour :",
    options: [
      { id:"a", label:"Stabiliser la tonalité",                                                      isCorrect: false },
      { id:"b", label:"Prolonger la tension dominante avant la cadence finale — maximiser l'attente de résolution", isCorrect: true  },
      { id:"c", label:"Permettre la modulation",                                                     isCorrect: false },
      { id:"d", label:"Doubler la tonique",                                                          isCorrect: false },
    ],
    explanation: "La pédale de dominante maintient Sol (V) à la basse pendant que les harmonies F, Dm, etc. passent au-dessus — créant des dissonances temporaires. La tension s'accumule puis se libère quand G7 → C résout enfin.",
  },
  {
    id: "c9-pedal-tonic",
    type: "identify", cours: 9, difficulty: 2,
    tags: ["pédale de tonique","stabilité","début ou fin"],
    concepts: ["pédale de tonique","ancrage tonal"],
    question: "La pédale de tonique (I à la basse) est caractéristique de :",
    options: [
      { id:"a", label:"La tension maximale avant la résolution",                        isCorrect: false },
      { id:"b", label:"La stabilisation du centre tonal — début ou fin de phrase, ancrage",  isCorrect: true  },
      { id:"c", label:"La préparation d'une modulation",                                isCorrect: false },
      { id:"d", label:"L'extension de la fonction dominante",                           isCorrect: false },
    ],
    explanation: "La pédale de tonique ancre le centre tonal — on maintient Do à la basse pendant que IV, II, etc. passent au-dessus. Typique en début de pièce (établir la tonalité) ou en conclusion (confirmer le retour à la tonique).",
  },
  {
    id: "c9-appogiature-chord",
    type: "identify", cours: 9, difficulty: 3,
    tags: ["accord appogiaturé","V/I","retard harmonique"],
    concepts: ["accord appogiaturé","retard de la résolution","tension expressive"],
    question: "G7/C (Sol7 avec Do à la basse) est appelé :",
    options: [
      { id:"a", label:"Un accord de quarte et sixte",                                         isCorrect: false },
      { id:"b", label:"Un accord de dominante appogiaturé sur la tonique — il retarde la résolution", isCorrect: true  },
      { id:"c", label:"Un renversement de C majeur",                                          isCorrect: false },
      { id:"d", label:"Un accord napolitain",                                                 isCorrect: false },
    ],
    explanation: "G7/C = accord de dominante G7 avec C à la basse. La basse de tonique empêche la résolution réelle — c'est un retard harmonique. La tension de dominante est présente mais la résolution est suspendue jusqu'à ce que G7/C cède la place à C complet.",
  },
  {
    id: "c9-modulation-types",
    type: "identify", cours: 9, difficulty: 2,
    tags: ["types de modulation","récapitulatif"],
    concepts: ["types de modulation","pivot vs note commune vs minorisation"],
    question: "La modulation la plus fluide et naturelle est :",
    options: [
      { id:"a", label:"La modulation directe (sans transition)",             isCorrect: false },
      { id:"b", label:"La modulation par accord pivot",                      isCorrect: true  },
      { id:"c", label:"La modulation par minorisation",                      isCorrect: false },
      { id:"d", label:"La modulation par marche harmonique",                 isCorrect: false },
    ],
    explanation: "La modulation par accord pivot est la plus stable et naturelle — l'accord pivot appartient aux deux tonalités et assure une transition sans rupture. La modulation directe est la plus abrupte (effet théâtral), la marche harmonique est la plus 'voyageuse'.",
  },
];

// ─── Export global ────────────────────────────────────────────────────────────

export const COURS3_9_IDENTIFY = [
  ...COURS3_IDENTIFY,
  ...COURS4_IDENTIFY,
  ...COURS5_IDENTIFY,
  ...COURS6_IDENTIFY,
  ...COURS7_IDENTIFY,
  ...COURS8_IDENTIFY,
  ...COURS9_IDENTIFY,
];
// Cours 41 — L'écriture de style (Niveau 5, UV stylistiques du DEM / CPES)
// Contenu pédagogique : FR validé en premier (le quiz vit ici, comme dans cours40Content).
// Les autres locales sont aliasées sur le FR en attendant la traduction.

export interface Question { q: string; opts: string[]; a: number; fb: string; }
export interface Cours41Locale { questions: Question[]; }

const questionsFr: Question[] = [
  // ── Style classique ──────────────────────────────────────────────────────
  {
    q: "Quelle texture instrumentale est typiquement attendue pour l'harmonisation d'un chant donné dans le style classique (Mozart, Haydn) ?",
    opts: [
      "un quatuor à cordes homophone, à la texture claire",
      "un orchestre wagnérien à cordes divisées",
      "un duo de pianos en imitation libre",
      "un chœur a cappella à huit voix",
    ],
    a: 0,
    fb: "Le style classique privilégie le quatuor à cordes (2 violons, alto, violoncelle) à la texture homophone et claire : une mélodie nettement détachée sur un accompagnement transparent. C'est le cadre d'écriture le plus courant des UV stylistiques classiques.",
  },
  {
    q: "Quel type d'accompagnement, fondé sur l'arpègement régulier de l'accord, est emblématique du style classique ?",
    opts: [
      "le planing (accords parallèles)",
      "la basse d'Alberti",
      "le choral note contre note",
      "le contrepoint fleuri à cinq voix",
    ],
    a: 1,
    fb: "La basse d'Alberti — l'accord égrené selon un patron régulier (grave–aigu–médium–aigu) — est une formule d'accompagnement caractéristique du clavier classique. Elle entretient un rythme harmonique régulier sous une mélodie homophone.",
  },
  {
    q: "Quel trait harmonique signe le style classique ?",
    opts: [
      "un chromatisme dense et une tonalité ambiguë",
      "des accords parallèles non résolus",
      "une harmonie diatonique avec des cadences nettes (parfaite, demi-cadence)",
      "l'usage systématique de la gamme par tons",
    ],
    a: 2,
    fb: "Le langage classique repose sur une harmonie essentiellement diatonique, un rythme harmonique régulier et des cadences clairement articulées (cadence parfaite, demi-cadence, cadence rompue). La fonction tonale y est limpide.",
  },
  {
    q: "Dans un pastiche classique, comment doit se comporter le rythme harmonique (la vitesse de changement des accords) ?",
    opts: [
      "totalement libre et imprévisible",
      "régulier et lisible, souvent par temps ou par mesure",
      "suspendu sur de longues pédales sans changement",
      "saturé de changements à chaque double-croche",
    ],
    a: 1,
    fb: "Le style classique se caractérise par un rythme harmonique régulier et prévisible : l'harmonie change à intervalles réguliers (par temps fort, par mesure), ce qui donne la clarté de phrase propre à Mozart et Haydn.",
  },
  // ── Style romantique ─────────────────────────────────────────────────────
  {
    q: "Quel trait distingue avant tout le langage harmonique romantique (Schumann, Brahms) du langage classique ?",
    opts: [
      "l'absence totale de modulation",
      "un chromatisme expressif et une harmonie enrichie (9es, emprunts, altérations)",
      "la réduction à trois accords seulement",
      "le refus de toute dissonance",
    ],
    a: 1,
    fb: "Le romantisme intensifie le chromatisme expressif et enrichit l'harmonie : accords de neuvième, emprunts modaux, sixtes augmentées, accords altérés. La conduite des voix se densifie et la tonalité devient parfois ambiguë.",
  },
  {
    q: "Quel accord altéré, à la sonorité tendue et caractéristique du XIXe siècle, est typique du langage romantique ?",
    opts: [
      "l'accord parfait majeur à l'état fondamental",
      "la sixte augmentée (italienne, française, allemande)",
      "l'accord de quinte à vide",
      "la triade diminuée sur la tonique",
    ],
    a: 1,
    fb: "Les sixtes augmentées (italienne, française, allemande) sont des accords altérés emblématiques du langage romantique. Leur tension dirigée vers la dominante colore puissamment la conduite chromatique des voix.",
  },
  {
    q: "L'« ambiguïté tonale », fréquemment recherchée dans le style romantique, se traduit notamment par...",
    opts: [
      "des cadences parfaites systématiques à chaque mesure",
      "un retard de la résolution et des enchaînements chromatiques qui brouillent la fonction",
      "l'emploi exclusif de la basse d'Alberti",
      "une seule tonalité affirmée du début à la fin sans inflexion",
    ],
    a: 1,
    fb: "Le romantisme cultive l'ambiguïté tonale : résolutions différées, accords pivots chromatiques, modulations lointaines et enharmonie. La fonction tonale, encore présente, est volontairement voilée — pensez à Schumann ou au jeune Brahms.",
  },
  {
    q: "Quel élément d'interprétation, lié à la souplesse du tempo, accompagne souvent l'écriture romantique ?",
    opts: [
      "le rubato",
      "le tactus rigide et invariable",
      "la basse continue chiffrée",
      "le hoquet médiéval",
    ],
    a: 0,
    fb: "Le rubato — souplesse expressive du tempo — est consubstantiel au phrasé romantique. L'écriture (longues lignes, appuis expressifs, rallentandos implicites) appelle cette liberté agogique propre à Chopin, Schumann ou Brahms.",
  },
  // ── Style début XXe (Ravel, Debussy, Fauré) ──────────────────────────────
  {
    q: "Quel trait harmonique signe le style de Debussy ?",
    opts: [
      "une harmonie strictement diatonique à cadences nettes",
      "des accords parallèles (planing) et des 9es/11es non résolues, employés pour leur couleur",
      "une basse d'Alberti omniprésente",
      "un contrepoint sévère dans le style de Bach",
    ],
    a: 1,
    fb: "Chez Debussy, les accords parallèles (planing) et les neuvièmes/onzièmes non résolues sont employés pour leur couleur plus que pour leur fonction. L'harmonie cesse d'être un système de tensions résolues pour devenir une palette sonore.",
  },
  {
    q: "Le « planing » désigne...",
    opts: [
      "la résolution obligatoire de toute dissonance vers la tonique",
      "le déplacement parallèle d'un même agrégat d'accords à différentes hauteurs",
      "la doublure systématique de la sensible",
      "l'arpègement régulier d'un accord à la basse",
    ],
    a: 1,
    fb: "Le planing (accords parallèles) consiste à transposer parallèlement un même agrégat — accords de septième, de neuvième — le long d'une ligne. Procédé proscrit dans l'écriture classique (quintes/octaves parallèles), il devient une signature coloriste chez Debussy et Ravel.",
  },
  {
    q: "Quelle ressource d'échelle, suspendant tout sentiment de tonique, est emblématique de Debussy ?",
    opts: [
      "la gamme mineure harmonique",
      "la gamme par tons",
      "la gamme chromatique ascendante seule",
      "le mode de do majeur sans altération",
    ],
    a: 1,
    fb: "La gamme par tons (six sons entiers, sans demi-ton) supprime sensible et quinte juste fonctionnelle : elle flotte, sans tonique affirmée. C'est l'une des couleurs caractéristiques de Debussy (Voiles, par exemple).",
  },
  {
    q: "Quel principe résume le mieux l'esthétique harmonique du début du XXe siècle (Debussy, Ravel, Fauré) ?",
    opts: [
      "la couleur prime sur la fonction",
      "la fonction tonale prime sur tout le reste",
      "l'absence totale d'accords",
      "le retour strict au contrepoint modal de la Renaissance",
    ],
    a: 0,
    fb: "Chez Debussy, Ravel et Fauré, l'accord vaut d'abord par sa couleur (timbre harmonique) plutôt que par sa fonction tonale. Modalité, pédales, agrégats non résolus : l'harmonie devient sensation avant d'être grammaire.",
  },
  {
    q: "L'emploi de la modalité (modes anciens) au début du XXe siècle vise principalement à...",
    opts: [
      "renforcer la cadence parfaite traditionnelle",
      "échapper à l'attraction de la sensible et colorer autrement l'harmonie",
      "imposer la basse d'Alberti",
      "interdire toute pédale",
    ],
    a: 1,
    fb: "Recourir aux modes (dorien, phrygien, lydien, mixolydien) permet d'éviter la sensible majeure et son attraction cadentielle : l'harmonie respire autrement, plus archaïque ou plus colorée. Fauré et Debussy y puisent abondamment.",
  },
  // ── Méthode de pastiche ──────────────────────────────────────────────────
  {
    q: "Quelle est la première étape d'une bonne méthode de pastiche stylistique ?",
    opts: [
      "écrire immédiatement sans réfléchir au modèle",
      "analyser un modèle pour identifier ses signatures (harmonie, rythme, texture, conduite des voix)",
      "choisir au hasard des accords colorés",
      "transposer une œuvre existante note pour note",
    ],
    a: 1,
    fb: "Pasticher, c'est d'abord analyser : on identifie les signatures stylistiques du modèle (langage harmonique, rythme harmonique, texture, conduite des voix, cadences) avant de chercher à les reproduire. On n'imite bien que ce qu'on a compris.",
  },
  {
    q: "Dans un pastiche, qu'appelle-t-on un « anachronisme harmonique » — le piège majeur à éviter ?",
    opts: [
      "une cadence parfaite dans un choral classique",
      "l'emploi d'un procédé étranger à l'époque visée (ex. planing debussyste dans un pastiche de Mozart)",
      "le respect du rythme harmonique régulier en style classique",
      "la doublure de la fondamentale d'un accord parfait",
    ],
    a: 1,
    fb: "L'anachronisme harmonique consiste à introduire un procédé absent du langage de l'époque pastichée : un accord parallèle debussyste dans un pastiche classique, ou une sixte augmentée romantique dans une page de Mozart. C'est l'erreur qui « casse » le style.",
  },
];

// Aliases temporaires sur le FR — traductions à venir dans une tâche ultérieure.
const questionsEn = questionsFr;
const questionsEs = questionsFr;
const questionsDe = questionsFr;
const questionsIt = questionsFr;
const questionsPt = questionsFr;

export const cours41Content: Record<string, Cours41Locale> = {
  fr: { questions: questionsFr },
  // Traductions à venir — alias temporaire sur le FR (validation pédagogique d'abord).
  en: { questions: questionsEn },
  es: { questions: questionsEs },
  de: { questions: questionsDe },
  it: { questions: questionsIt },
  pt: { questions: questionsPt },
};

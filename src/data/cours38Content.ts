// Cours 38 — Les notes étrangères (Niveau 1, aligné DEM)
// Contenu pédagogique : FR validé en premier (le quiz vit ici, comme dans cours5Content).
// Les autres locales sont aliasées sur le FR en attendant la traduction.

export interface Question { q: string; opts: string[]; a: number; fb: string; }
export interface Cours38Locale { questions: Question[]; }

const questionsFr: Question[] = [
  {
    q: "Qu'est-ce qu'une note étrangère ?",
    opts: [
      "Une note jouée dans une autre tonalité",
      "Une note qui n'est pas constitutive de l'accord en cours",
      "Une note de la basse",
      "Une note toujours dissonante avec la mélodie",
    ],
    a: 1,
    fb: "Une note étrangère est une note qui n'appartient pas à l'accord entendu à ce moment précis. Elle orne la ligne mélodique sans changer l'harmonie.",
  },
  {
    q: "Quelle note étrangère exige une préparation ?",
    opts: ["La note de passage", "La broderie", "Le retard", "L'échappée"],
    a: 2,
    fb: "Seul le retard exige une préparation : la note dissonante doit d'abord avoir été entendue comme consonance dans l'accord précédent, sur le même son et à la même voix.",
  },
  {
    q: "Sur quel temps se place l'appogiature ?",
    opts: ["Sur un temps faible", "Sur le temps fort", "Toujours à la levée", "Indifféremment"],
    a: 1,
    fb: "L'appogiature est une note étrangère accentuée : elle frappe sur le temps fort (ou la partie forte du temps), retardant la note réelle de l'accord, puis se résout par degré conjoint.",
  },
  {
    q: "Comment se résout un retard 4-3 ?",
    opts: [
      "La 4te monte conjointement sur la 5te",
      "La 4te descend conjointement sur la 3ce",
      "La 4te saute sur la fondamentale",
      "La 4te reste en place",
    ],
    a: 1,
    fb: "Dans le retard 4-3, la quarte (note étrangère, dissonante) descend par degré conjoint sur la tierce de l'accord. C'est la résolution descendante classique du retard.",
  },
  {
    q: "Comment se déplace une note de passage ?",
    opts: [
      "Par saut, sur temps fort",
      "Par degrés conjoints, reliant deux notes de l'accord, sur temps faible",
      "En répétant la note précédente",
      "Par saut, puis retour conjoint",
    ],
    a: 1,
    fb: "La note de passage relie deux notes différentes de l'harmonie par mouvement conjoint (diatonique ou chromatique), généralement sur un temps faible.",
  },
  {
    q: "Qu'est-ce qui distingue la broderie de la note de passage ?",
    opts: [
      "La broderie se fait toujours par saut",
      "La broderie quitte une note de l'accord et y revient ; la note de passage relie deux notes différentes",
      "La broderie est toujours sur le temps fort",
      "Il n'y a aucune différence",
    ],
    a: 1,
    fb: "La broderie part d'une note de l'accord, va à la note voisine (supérieure ou inférieure) par degré conjoint, puis revient à la note de départ. La note de passage, elle, relie deux notes distinctes de l'harmonie.",
  },
  {
    q: "Comment se comporte une échappée ?",
    opts: [
      "Elle quitte l'accord par saut et résout par degré conjoint",
      "Elle quitte une note de l'accord par degré conjoint, puis résout par saut dans l'autre sens",
      "Elle reste sur place avant de descendre",
      "Elle anticipe la note suivante",
    ],
    a: 1,
    fb: "L'échappée s'éloigne d'une note de l'accord par degré conjoint, puis « s'échappe » par un saut en sens contraire vers une note de l'accord suivant.",
  },
  {
    q: "Qu'est-ce qu'une anticipation ?",
    opts: [
      "Une note tenue pendant que l'harmonie change",
      "Une note de l'accord suivant jouée par avance, avant le changement d'harmonie",
      "Une note de passage chromatique",
      "Une appogiature résolue par le haut",
    ],
    a: 1,
    fb: "L'anticipation fait entendre par avance une note qui appartiendra à l'accord suivant : elle arrive trop tôt, sur l'accord encore en cours, créant une brève dissonance.",
  },
  {
    q: "Qu'appelle-t-on une pédale ?",
    opts: [
      "Une note de passage répétée",
      "Une note tenue (souvent tonique ou dominante) pendant que l'harmonie change au-dessus",
      "Un accord plaqué à la basse",
      "Une broderie de la basse",
    ],
    a: 1,
    fb: "La pédale est une note prolongée — le plus souvent la tonique ou la dominante, à la basse — maintenue tandis que les autres voix font évoluer l'harmonie, parfois en créant de fortes dissonances passagères.",
  },
  {
    q: "Quelles sont les trois étapes d'un retard ?",
    opts: [
      "Attaque, tenue, saut",
      "Préparation (consonance), percussion (dissonance sur temps fort), résolution (descente conjointe)",
      "Broderie, passage, retour",
      "Anticipation, percussion, échappée",
    ],
    a: 1,
    fb: "Le retard se déroule en trois temps : préparation (la note est consonante dans l'accord précédent), percussion (elle devient dissonante sur le temps fort), résolution (elle descend par degré conjoint sur une note de l'accord).",
  },
  {
    q: "Qu'est-ce qu'une note de passage accentuée ?",
    opts: [
      "Une note de passage jouée fortissimo",
      "Une note de passage placée sur le temps fort au lieu du temps faible",
      "Une note de passage chromatique",
      "Une double note de passage",
    ],
    a: 1,
    fb: "La note de passage accentuée est une note de passage qui, exceptionnellement, tombe sur le temps fort. Elle se rapproche de l'appogiature, mais reste reliée par mouvement conjoint des deux côtés.",
  },
  {
    q: "À quoi sert le repérage des notes étrangères dans l'analyse d'un chant donné (DEM) ?",
    opts: [
      "À transposer la mélodie",
      "À isoler les notes réelles de l'accord pour déterminer l'harmonie sous-jacente",
      "À compter les mesures",
      "À choisir le tempo",
    ],
    a: 1,
    fb: "Repérer les notes étrangères permet de dégager le squelette harmonique : on écarte les ornements pour ne garder que les notes réelles, et ainsi proposer une harmonisation cohérente — compétence centrale du chant donné / basse donnée au DEM.",
  },
  {
    q: "Le retard 7-6 se résout en :",
    opts: [
      "Faisant descendre la 7e conjointement sur la 6te",
      "Faisant monter la 7e sur l'octave",
      "Maintenant la 7e",
      "Faisant sauter la 7e sur la 3ce",
    ],
    a: 0,
    fb: "Comme tous les retards classiques, le 7-6 résout par descente conjointe : la septième (dissonante) descend d'un degré sur la sixte (consonante).",
  },
  {
    q: "Parmi ces formules, laquelle est un retard à la basse ?",
    opts: ["4-3", "7-6", "9-8", "2-3"],
    a: 3,
    fb: "Le retard 2-3 est la formule typique du retard à la basse : la basse, retardée, forme une seconde avec une voix supérieure, puis descend d'un degré pour donner une tierce (ou dixième) consonante.",
  },
];

export const cours38Content: Record<string, Cours38Locale> = {
  fr: { questions: questionsFr },
  // Traductions à venir — alias temporaire sur le FR (validation pédagogique d'abord).
  en: { questions: questionsFr },
  es: { questions: questionsFr },
  de: { questions: questionsFr },
  it: { questions: questionsFr },
  pt: { questions: questionsFr },
};

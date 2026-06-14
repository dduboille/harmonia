// Cours 40 — L'invention à 2 voix (Niveau 2, aligné DEM, vers le contrepoint Bach)
// Contenu pédagogique : FR validé en premier (le quiz vit ici, comme dans cours39Content).
// Les autres locales sont aliasées sur le FR en attendant la traduction.

export interface Question { q: string; opts: string[]; a: number; fb: string; }
export interface Cours40Locale { questions: Question[]; }

const questionsFr: Question[] = [
  {
    q: "Qu'est-ce qu'une « invention à 2 voix » au sens où l'entend J.S. Bach (BWV 772-786) ?",
    opts: [
      "une pièce contrapuntique à deux voix fondée sur un motif (sujet) unique",
      "une pièce d'accompagnement homophonique à deux mains",
      "une suite de danses pour clavier",
      "une improvisation libre sans thème défini",
    ],
    a: 0,
    fb: "Les Inventions à 2 voix de Bach (BWV 772-786) sont des pièces contrapuntiques où deux voix indépendantes dialoguent à partir d'un même motif générateur, le sujet. Tout le matériau découle de ce motif unique.",
  },
  {
    q: "Le SUJET d'une invention est...",
    opts: [
      "l'accord final de la pièce",
      "le motif mélodique générateur qui sera imité et développé tout au long de la pièce",
      "la note pédale tenue à la basse",
      "le nom de la tonalité",
    ],
    a: 1,
    fb: "Le sujet est le motif mélodique de base : c'est lui qui est énoncé, imité par la seconde voix, puis fragmenté et transformé dans les épisodes. Toute l'invention en dérive.",
  },
  {
    q: "On appelle « tête de sujet » (incipit)...",
    opts: [
      "la dernière note du motif",
      "le début caractéristique du sujet (ses premières notes, son rythme et son contour)",
      "l'accompagnement de la main gauche",
      "la cadence conclusive",
    ],
    a: 1,
    fb: "La tête de sujet est l'incipit : les premières notes qui donnent au motif son identité reconnaissable (contour, rythme caractéristique). C'est elle que l'oreille repère à chaque entrée.",
  },
  {
    q: "Dans une invention, l'IMITATION consiste, le plus souvent, à...",
    opts: [
      "jouer le sujet en accords plaqués",
      "transposer le sujet une seconde plus haut",
      "faire répéter le sujet par la 2e voix, le plus souvent à l'octave, après un court délai",
      "renverser le rythme du sujet",
    ],
    a: 2,
    fb: "L'imitation : la seconde voix reprend le sujet après un bref décalage, le plus souvent à l'octave (parfois à la quinte). Pendant ce temps, la première voix poursuit avec une voix libre ou un contre-sujet.",
  },
  {
    q: "Pendant que la 2e voix imite le sujet, la 1re voix joue généralement...",
    opts: [
      "un silence complet",
      "le sujet une troisième fois",
      "une simple pédale immobile",
      "un contre-sujet (ou une voix libre) qui accompagne le sujet imité",
    ],
    a: 3,
    fb: "Au moment de l'imitation, la voix qui a déjà exposé le sujet enchaîne avec un contre-sujet (matériau récurrent et fixe) ou une voix libre. Cela assure le dialogue à deux voix réellement indépendantes.",
  },
  {
    q: "Qu'appelle-t-on un ÉPISODE (ou divertissement) dans une invention ?",
    opts: [
      "un passage de liaison fondé sur des fragments du motif, souvent en marche modulante",
      "la reprise intégrale du sujet à la tonique",
      "l'unique cadence finale",
      "une section sans aucun lien avec le sujet",
    ],
    a: 0,
    fb: "L'épisode (divertissement) est un passage de transition construit à partir de fragments du sujet (ou du contre-sujet), souvent traité en marche (séquence) qui module et conduit d'une tonalité à la suivante.",
  },
  {
    q: "Le PLAN TONAL typique d'une invention en mode majeur va...",
    opts: [
      "de la tonique à la sus-tonique puis retour",
      "de la dominante au relatif puis à la sous-dominante",
      "de la tonique vers la dominante, puis développement par les tons voisins, puis retour à la tonique",
      "il n'y a aucun plan tonal, tout est libre",
    ],
    a: 2,
    fb: "Le schéma classique : exposition à la tonique → modulation à la dominante (ou au relatif en mineur) → développement par les tons voisins → retour à la tonique pour conclure. C'est l'ossature tonale de l'invention.",
  },
  {
    q: "En mode mineur, vers quelle tonalité une invention module-t-elle le plus typiquement après l'exposition ?",
    opts: [
      "vers la sous-dominante mineure",
      "vers le relatif majeur (ou la dominante)",
      "vers le ton napolitain",
      "elle ne module jamais",
    ],
    a: 1,
    fb: "En mineur, la première modulation se fait le plus souvent vers le relatif majeur (ton du IIIe degré), parfois vers la dominante mineure. C'est l'équivalent du passage tonique → dominante du mode majeur.",
  },
  {
    q: "L'INVERSION (renversement mélodique) d'un motif consiste à...",
    opts: [
      "le jouer deux fois plus vite",
      "le transposer à l'octave",
      "inverser l'ordre des mesures",
      "renverser le sens de ses intervalles (ce qui montait descend, ce qui descendait monte)",
    ],
    a: 3,
    fb: "L'inversion (renversement mélodique) retourne le contour du motif : chaque intervalle est reproduit en sens contraire. Un procédé de développement très présent chez Bach, à ne pas confondre avec le renversement d'accord.",
  },
  {
    q: "L'AUGMENTATION d'un motif consiste à...",
    opts: [
      "allonger ses valeurs rythmiques (par exemple les doubler)",
      "ajouter une troisième voix",
      "monter le motif d'une octave",
      "supprimer sa dernière note",
    ],
    a: 0,
    fb: "L'augmentation allonge les durées du motif (souvent en les doublant), ce qui le fait paraître plus solennel. La DIMINUTION fait l'inverse : elle raccourcit les valeurs et accélère le motif.",
  },
  {
    q: "La DIMINUTION d'un motif consiste à...",
    opts: [
      "baisser le motif d'une tierce",
      "raccourcir ses valeurs rythmiques (le motif passe plus vite)",
      "n'en garder que la première note",
      "le jouer en accords",
    ],
    a: 1,
    fb: "La diminution réduit les durées du motif : il défile plus rapidement. C'est le procédé inverse de l'augmentation. Tous deux servent à renouveler le motif sans en perdre l'identité mélodique.",
  },
  {
    q: "Une MARCHE (ou séquence) dans un épisode consiste à...",
    opts: [
      "tenir une longue note pédale sans rien dessus",
      "jouer le sujet à l'envers",
      "répéter un fragment à des hauteurs successives (souvent en descendant par quintes), créant une progression modulante",
      "alterner forte et piano sur le même accord",
    ],
    a: 2,
    fb: "La marche (séquence) reprend un même fragment mélodico-harmonique transposé par degrés successifs, souvent selon le cycle des quintes descendantes. C'est le moteur des épisodes : elle module et relance le discours.",
  },
  {
    q: "Qu'est-ce qu'une STRETTE (entrée en strette) ?",
    opts: [
      "une cadence parfaite renforcée",
      "un silence général",
      "une marche par tons entiers",
      "une imitation très rapprochée : la 2e voix entre avant que la 1re ait fini d'énoncer le sujet",
    ],
    a: 3,
    fb: "Dans une strette, la voix imitante entre avant la fin du sujet de la voix précédente : les entrées se chevauchent, resserrant le tissu contrapuntique. Dans une invention, on rencontre surtout des strettes légères ; elle est plus systématique dans la fugue.",
  },
  {
    q: "Quel théoricien est la référence classique pour la rigueur du travail motivique et l'enseignement de la fugue ?",
    opts: [
      "André Gédalge, auteur du Traité de la fugue",
      "Jean-Philippe Rameau, pour son Traité de l'harmonie",
      "Hector Berlioz, pour son traité d'orchestration",
      "Arnold Schönberg, pour son Harmonielehre",
    ],
    a: 0,
    fb: "André Gédalge (Traité de la fugue, 1901) est la référence française pour le travail rigoureux du sujet, du contre-sujet et des entrées. Son enseignement prépare directement à l'épreuve de contrepoint Bach du DEM.",
  },
  {
    q: "Quelle démarche est conseillée pour composer une petite invention de 8 à 16 mesures ?",
    opts: [
      "écrire d'abord la cadence finale puis remonter",
      "inventer un sujet bref et caractéristique, l'imiter à l'octave, puis enchaîner épisodes (marches sur des fragments) et modulations avant de revenir à la tonique",
      "improviser au hasard jusqu'à trouver 16 mesures",
      "harmoniser une mélodie de choral à 4 voix",
    ],
    a: 1,
    fb: "Méthode : (1) trouver un sujet court et reconnaissable ; (2) l'imiter à l'octave avec un contre-sujet ; (3) construire des épisodes en marche sur des fragments du motif, qui modulent vers la dominante puis les tons voisins ; (4) ramener le sujet à la tonique pour la cadence conclusive.",
  },
];

export const cours40Content: Record<string, Cours40Locale> = {
  fr: { questions: questionsFr },
  // Traductions à venir — alias temporaire sur le FR (validation pédagogique d'abord).
  en: { questions: questionsFr },
  es: { questions: questionsFr },
  de: { questions: questionsFr },
  it: { questions: questionsFr },
  pt: { questions: questionsFr },
};

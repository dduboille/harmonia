import type { CoursConservatoireData } from "./conservatoireData";

export const CONSERVATOIRE_DATA_33: CoursConservatoireData = {
  intuition: "La fugue n'est pas une contrainte — c'est une conversation à plusieurs voix où chacun parle et écoute en même temps. Bach pensait en fugue comme nous pensons en phrases.",
  reference: {
    badge: "Bach · L'Art de la Fugue BWV 1080",
    citation: "La fugue est l'art de faire entrer successivement les voix dans un sujet, puis de les mener ensemble sans que l'une n'écrase l'autre — c'est la démocratie absolue du contrepoint.",
    auteur: "Johann Sebastian Bach, testament musical, 1740–1750",
  },
  voix: [
    "Dans le choral à 4 voix, la basse est la fondation — elle établit l'harmonie. Alto et ténor ne sont pas des 'voix de remplissage' : ils portent la conduite des voix. Une mauvaise conduite de voix tue un choral.",
    "La sensible (7e degré) DOIT monter vers la tonique. La septième de dominante DOIT descendre. Ce sont des règles inviolables dans le style Bach — les violer crée une erreur stylistique grave.",
    "Dans l'analyse d'une fugue, commencez par identifier le sujet, la réponse et le contre-sujet avant d'analyser quoi que ce soit d'autre. Ces trois éléments sont le matériau de toute la fugue.",
  ],
  repertoire: {
    titre: "Fugue en Do mineur BWV 847",
    compositeur: "Johann Sebastian Bach",
    notes: ["Do:3", "Ré:3", "Mib:3", "Fa:3", "Sol:3", "Fa:3", "Mib:3", "Ré:3", "Do:3"],
  },
  pieges: [
    {
      erreur: "Faire monter la sensible vers la dominante (sol au lieu de la tonique)",
      correction: "La sensible (Si en Do majeur, Si bémol non — le 7e degré naturel) doit TOUJOURS résoudre vers la tonique par demi-ton ascendant. C'est la règle la plus stricte du choral baroquiste.",
    },
    {
      erreur: "Confondre sujet et réponse dans une fugue",
      correction: "Le sujet est à la tonique ; la réponse est à la dominante (transposée une quinte plus haut ou une quarte plus bas). La réponse peut être tonale (légèrement modifiée) ou réelle (transposition exacte).",
    },
    {
      erreur: "Analyser la fugue comme une suite d'accords classiques",
      correction: "La fugue est un tissu contrapuntique — chaque voix est une ligne mélodique indépendante. L'harmonie résulte de l'intersection de ces lignes, pas d'une progression d'accords planifiée.",
    },
  ],
  resume: [
    "Choral Bach : 4 voix (SATB), règles strictes de conduite des voix, sensible résolue vers I, septième de dominante descendante",
    "Fugue : sujet (tonique) → réponse (dominante) → contre-sujet → strette — tissu contrapuntique, pas de progressions d'accords",
    "L'Art de la Fugue BWV 1080 : testament musical de Bach, 14 fugues sur un seul sujet, inachevé au moment de sa mort",
  ],
};

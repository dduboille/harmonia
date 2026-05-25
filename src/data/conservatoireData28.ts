import type { CoursConservatoireData } from "./conservatoireData";

export const CONSERVATOIRE_DATA_28: CoursConservatoireData = {
  intuition: "La forme c'est l'harmonie qui se déploie dans le temps.",
  reference: {
    badge: "Schönberg · Fundamentals of Musical Composition",
    citation: "La forme musicale n'est pas un moule dans lequel on verse la musique — c'est la conséquence logique du développement thématique et harmonique.",
    auteur: "Arnold Schönberg, 1967",
  },
  voix: [
    "Dans la forme sonate, le thème 2 est toujours à la TONIQUE en réexposition — même s'il était à la dominante en exposition. C'est la résolution harmonique de la forme entière.",
    "Le développement DOIT moduler : rester dans la tonalité principale pendant le développement est une faute de forme grave.",
    "Distinguer forme de phrase (antécédent-conséquent) et grande forme (exposition-développement-réexposition) — deux niveaux hiérarchiques distincts.",
  ],
  repertoire: {
    titre: "Sonate K.545 en Do majeur",
    compositeur: "Wolfgang Amadeus Mozart",
    notes: ["Do:4", "Mi:4", "Sol:4", "Mi:4", "Do:4", "Sol:3", "Mi:4", "Do:5"],
  },
  pieges: [
    {
      erreur: "Confondre forme de phrase et grande forme",
      correction: "La forme de phrase (antécédent 4 mesures + conséquent 4 mesures) est un niveau micro. La grande forme (sonate, rondo) est un niveau macro qui dure plusieurs minutes.",
    },
    {
      erreur: "Thème 2 en dominante à la réexposition (en majeur)",
      correction: "En réexposition, le thème 2 revient TOUJOURS à la tonique. C'est la résolution harmonique fondamentale de la forme sonate — sinon il n'y a pas de résolution.",
    },
    {
      erreur: "Développement sans modulations",
      correction: "Le développement doit traverser plusieurs tonalités — c'est son rôle dramatique. Un développement qui reste dans la tonalité principale manque son but.",
    },
    {
      erreur: "Réexposition identique à l'exposition",
      correction: "La réexposition diffère toujours de l'exposition sur un point crucial : le thème 2 est à la tonique, pas à la dominante. Souvent la transition est aussi raccourcie.",
    },
  ],
  resume: [
    "Forme sonate : Exposition (T1 en tonique + T2 en dominante) → Développement (modulations) → Réexposition (T1 + T2 tous deux à la TONIQUE)",
    "Formes simples : binaire (AB, tonalement instable→stable) · ternaire (ABA) · rondo (ABACA, retour cyclique)",
    "Analyse : identifier les sections par leur tonalité, pas seulement par leurs thèmes",
  ],
};

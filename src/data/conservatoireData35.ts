import type { CoursConservatoireData } from "./conservatoireData";

export const CONSERVATOIRE_DATA_35: CoursConservatoireData = {
  intuition: "Miles Davis disait : 'Ne jouez pas ce qui est là — jouez ce qui n'est pas là.' La reharmonisation, c'est exactement ça : entendre les possibilités que la mélodie n'impose pas.",
  reference: {
    badge: "Levine · The Jazz Theory Book, 1995",
    citation: "La reharmonisation n'est pas de la triche — c'est une conversation entre le compositeur original et le jazzman. Tu respectes la mélodie, tu invites l'harmonie à danser différemment.",
    auteur: "Mark Levine, The Jazz Theory Book, 1995",
  },
  voix: [
    "Les guide-tones (tierce et septième de l'accord) sont les notes qui définissent la couleur harmonique. Quand vous reharmonisez, assurez-vous que la mélodie ne frotte pas contre les guide-tones du nouvel accord — c'est la contrainte principale.",
    "Le shell voicing (fondamentale + 3e + 7e sans quinte) sonne plus moderne et laisse plus d'espace pour la mélodie et la ligne de basse. Éliminer la quinte n'appauvrit pas l'accord — ça le clarifie.",
    "Kind of Blue de Miles Davis a été enregistré sans répétition — les musiciens découvraient les grilles en studio. Ce n'est pas de l'improvisation totale : c'est une structure modale précise avec une liberté totale à l'intérieur. La différence est essentielle.",
  ],
  repertoire: {
    titre: "So What (Kind of Blue)",
    compositeur: "Miles Davis",
    notes: ["Ré:3", "Sol:3", "Do:4", "Fa:4", "La:4"],
  },
  pieges: [
    {
      erreur: "Reharmoniser sans respecter les notes de mélodie",
      correction: "La mélodie est intouchable dans une reharmonisation. Chaque accord choisi doit permettre à la note mélodique d'être soit la fondamentale, la tierce, la quinte, la septième ou une extension disponible — jamais une note évitée.",
    },
    {
      erreur: "Utiliser la substitution tritonique sur tous les accords indistinctement",
      correction: "La substitution tritonique ne fonctionne que sur les accords de dominante (V7). L'appliquer sur IMaj7 ou IIm7 produit une dissonance non-stylistique car les guide-tones ne sont plus partagés.",
    },
    {
      erreur: "Confondre chord scale et mode",
      correction: "Un chord scale est une gamme jouée sur un accord spécifique dans un contexte tonal précis. CMaj7 en Do majeur → gamme ionienne (ou lydienne). CMaj7 modal → peut utiliser n'importe quelle gamme majeure appropriée. Le contexte harmonique détermine le chord scale.",
    },
  ],
  resume: [
    "Reharmonisation : substitution diatonique (I↔VI↔III) · tritonique (V7→bII7) · modal interchange · chromatic mediant",
    "Guide-tones : tierce + septième de l'accord — ne jamais frotter la mélodie contre eux lors d'une reharmonisation",
    "Voicings professionnels : shell (1-3-7) · drop 2 · Bill Evans (7-9 sans fondamentale) · So What quartal",
  ],
};

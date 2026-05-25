import type { CoursConservatoireData } from "./conservatoireData";

export const CONSERVATOIRE_DATA_36: CoursConservatoireData = {
  intuition: "Debussy et Ravel ont la même surface — accords non fonctionnels, couleurs sonores, impressionnisme. Mais Debussy rêve et Ravel calcule. Sous le même voile, deux intelligences opposées.",
  reference: {
    badge: "Debussy · Correspondance, 1907",
    citation: "Je veux une musique qui semble venir de l'ombre et qui y retourne parfois — dont le contenu harmonique ne soit pas soumis à des règles rigides et artificiales.",
    auteur: "Claude Debussy, lettre à son éditeur Durand, 1907",
  },
  voix: [
    "Chez Debussy, la progression harmonique suit la mélodie — pas l'inverse. Un accord est choisi pour sa couleur sonore, pas pour sa fonction T/SD/D. Analyser Debussy avec les fonctions classiques revient à lire un poème comme un mode d'emploi.",
    "Ravel est l'architecte de l'impressionnisme : ses accords sont non fonctionnels en apparence, mais leur enchaînement est rigoureusement calculé. Le Boléro n'est qu'un accord (Do7) et pourtant son orchestration progressive crée une tension que aucune progression d'accords n'aurait pu produire.",
    "La pédales longue de Debussy — basse immobile pendant que l'harmonie change au-dessus — crée un effet de suspension temporelle. C'est une technique médiévale (organum) réinventée au service de la couleur moderne.",
  ],
  repertoire: {
    titre: "Gymnopédie n°1",
    compositeur: "Erik Satie",
    notes: ["Ré:3", "Fa#:3", "La:3", "Do#:4", "Mi:4"],
  },
  pieges: [
    {
      erreur: "Appliquer l'analyse fonctionnelle T/SD/D à l'harmonie de Debussy",
      correction: "La musique de Debussy ne suit pas la logique tension-résolution classique. Les accords sont des couleurs, non des fonctions. L'analyse correcte identifie les gammes sources (gamme par tons, octatonique, pentatonique) et l'effet de planing, pas les fonctions harmoniques.",
    },
    {
      erreur: "Confondre Ravel et Debussy stylistiquement",
      correction: "Debussy : harmonie intuitive, structure fluide, sans forme classique rigide. Ravel : harmonie calculée avec précision, formes classiques réinterprétées (sonatine, menuet), orchestration d'horloger. Même surface impressionniste, logiques compositionnelles opposées.",
    },
    {
      erreur: "Croire que les polyaccords de Ravel sont aléatoires",
      correction: "Chez Ravel, la superposition de deux accords (Do majeur + Ré majeur) est calculée : les notes communes créent des liens, les notes divergentes créent la couleur. Ce n'est pas du hasard — c'est de l'algèbre harmonique.",
    },
  ],
  resume: [
    "Debussy : planing (accords parallèles), gamme par tons/octatonique/pentatonique, pédales longues, harmonie non fonctionnelle par couleur",
    "Ravel : polyaccords, notes ajoutées (6te, 9e), modalité néoclassique, ostinato harmonique (Boléro), orchestration précise et calculée",
    "Satie : musique d'ameublement, harmonie statique, répétition hypnotique — préfigure la musique minimaliste et ambient 50 ans avant l'époque",
  ],
};

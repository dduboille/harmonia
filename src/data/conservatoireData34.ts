import type { CoursConservatoireData } from "./conservatoireData";

export const CONSERVATOIRE_DATA_34: CoursConservatoireData = {
  intuition: "La musique de film ne raconte pas ce qu'on voit — elle dit ce qu'on ressent devant ce qu'on voit. C'est la différence entre commentaire et révélation.",
  reference: {
    badge: "Morricone · Entretien avec Bonini, 2016",
    citation: "La musique est le langage invisible du film. Sergio me donnait les images, je composais sans regarder — je composais les émotions qu'il voulait que le spectateur ressente.",
    auteur: "Ennio Morricone, compositeur, 2016",
  },
  voix: [
    "Le triton non résolu est l'outil de tension le plus efficace du cinéma. Une seule quarte augmentée suspendue, sans résolution, met le spectateur en alerte. Le cerveau humain attend la résolution — le compositeur peut s'en emparer.",
    "Le leitmotif transformé harmoniquement est plus puissant qu'un nouveau thème. Quand l'Imperial March de Williams passe en mineur-majeur ou est joué par une harpe seule, c'est plus déchirant qu'une nouvelle mélodie créée de toutes pièces.",
    "John Williams, Hans Zimmer et Ennio Morricone partagent un secret : leurs harmonies sont souvent simples (I–V–VI–IV), mais leur orchestration est exceptionnelle. La puissance émotionnelle vient du timbre, pas de la complexité harmonique.",
  ],
  repertoire: {
    titre: "Il Buono, il Brutto, il Cattivo (thème)",
    compositeur: "Ennio Morricone",
    notes: ["Mi:3", "Sol:3", "Si:3", "Ré:4", "Mi:4"],
  },
  pieges: [
    {
      erreur: "Penser que la musique de film doit être harmoniquement complexe pour être efficace",
      correction: "La progression I–V–VI–IV (utilisée dans 'Time' de Zimmer, 'Can't Help Falling in Love' de Williams) crée plus d'émotion que des harmonies complexes car elle libère l'oreille pour se concentrer sur le timbre, la dynamique et la mélodie.",
    },
    {
      erreur: "Utiliser le même registre harmonique pour toutes les émotions",
      correction: "Chaque émotion a sa carte harmonique : triton (tension), mineur descendant (tristesse), majeur + quinte ouverte (héroïsme), phrygien (mystère). Choisir la mauvaise couleur harmonique détruit l'effet émotionnel.",
    },
    {
      erreur: "Confondre underscoring et source music",
      correction: "L'underscoring est une musique que les personnages n'entendent pas (fond musical). La source music est une musique dans la diégèse (radio, orchestre sur scène). L'harmonie peut être la même ; la fonction narrative est opposée.",
    },
  ],
  resume: [
    "Carte des émotions : triton non résolu (tension) · mineur descendant (tristesse) · quinte ouverte majeur (héroïsme) · phrygien/dim (mystère) · add9 (amour)",
    "Leitmotif : thème associé à un personnage ou concept, transformé harmoniquement selon l'évolution narrative",
    "La puissance émotionnelle du cinéma vient de l'orchestration, pas de la complexité harmonique — I–V–VI–IV peut être épique si l'orchestration est juste",
  ],
};

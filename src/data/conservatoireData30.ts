import type { CoursConservatoireData } from "./conservatoireData";

export const CONSERVATOIRE_DATA_30: CoursConservatoireData = {
  intuition: "Quand Debussy joue un accord de 9e parallèle, il ne pense pas 'tension-résolution' — il pense 'bleu ciel passant au violet'.",
  reference: {
    badge: "Messiaen · Technique de mon langage musical",
    citation: "Les modes à transpositions limitées sont la clé de mon langage. Leur symétrie interne crée une couleur unique et inimitable.",
    auteur: "Olivier Messiaen, 1944",
  },
  voix: [
    "Le planing n'est pas une erreur : c'est un mouvement d'accords en parallèle où la couleur remplace la fonction. Analyser avec les yeux (pas les fonctions T/SD/D).",
    "La gamme par tons (6 notes équidistantes) ne contient aucune note directrice — le flottement est voulu, pas une ambiguïté à résoudre.",
    "Les modes de Messiaen ont des transpositions limitées : le mode 1 (gamme par tons) ne peut être transposé que 2 fois avant de revenir à lui-même.",
  ],
  repertoire: {
    titre: "Voiles (Préludes Livre I)",
    compositeur: "Claude Debussy",
    notes: ["Do:3", "Ré:3", "Mi:3", "Fa#:3", "Sol#:3", "La#:3"],
  },
  pieges: [
    {
      erreur: "Analyser Debussy avec les fonctions T/SD/D",
      correction: "L'harmonie impressionniste fonctionne par couleur et registre. Chercher une dominante dans 'Voiles' de Debussy c'est chercher la mauvaise chose.",
    },
    {
      erreur: "Croire que le planing est une erreur de conduite de voix",
      correction: "Le planing est une technique délibérée — les quintes et octaves parallèles sont voulues pour créer un effet de bloc sonore qui glisse sans résolution.",
    },
    {
      erreur: "Confondre gamme par tons et gamme pentatonique",
      correction: "Gamme par tons : 6 notes équidistantes (tous tons), accords augmentés. Pentatonique : 5 notes sans demi-ton (Do–Ré–Mi–Sol–La). Couleurs très différentes.",
    },
    {
      erreur: "Chercher une résolution fonctionnelle dans l'impressionnisme",
      correction: "La résolution V–I est volontairement évitée. La tension impressionniste est sensorielle (couleur, registre, dynamique) et non fonctionnelle.",
    },
  ],
  resume: [
    "Planing : déplacement d'un accord entier sans résolution — diatonique (même type sur chaque degré) ou chromatique (même accord exact transposé)",
    "Gammes spéciales : par tons (6 notes équidistantes, accords augmentés) · octatonique (ton/demi-ton, dim7) · pentatonique (5 notes sans demi-ton)",
    "Modes de Messiaen : symétrie interne + transpositions limitées → couleur unique et reconnaissable (mode 1 = gamme par tons, mode 2 = octatonique)",
  ],
};

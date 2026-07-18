/**
 * lib/catalogue.ts
 * Harmonia — Source unique de vérité du catalogue de cours.
 *
 * Toute mention d'un nombre de cours (landing, page tarifs, sitemap, paywall)
 * doit dériver d'ici. Auparavant la landing annonçait 37 cours, la page d'achat
 * 19, et la logique d'accès en plafonnait 23 : trois chiffres pour un catalogue
 * qui en compte 41.
 */

export type CoursLevel = 1 | 2 | 3 | 4 | 5;

export interface CoursMeta {
  num: number;
  level: CoursLevel;
  title: string;
  desc: string;
  tags: string[];
}

export const COURS: CoursMeta[] = [
  { num: 1,  level: 1 as const, title: "La gamme, les degrés et les intervalles",    desc: "Des origines acoustiques de la gamme aux intervalles et leurs renversements.",                                                            tags: ["Gamme", "Degrés", "Intervalles"] },
  { num: 2,  level: 1 as const, title: "Les accords",                                  desc: "Construire une triade, enrichir en septième, maîtriser les renversements.",                                                               tags: ["Triades", "Tétrades", "Renversements"] },
  { num: 3,  level: 1 as const, title: "Fonctions tonales et conduites de voix",       desc: "Le triton comme moteur de tension. Le cycle SD → D → T et le II–V–I.",                                                                   tags: ["Fonctions", "Triton", "Voix"] },
  { num: 4,  level: 1 as const, title: "Cadences et progressions",                     desc: "La ponctuation musicale : cadence parfaite, plagale, rompue, demi-cadence.",                                                             tags: ["Cadences", "Progressions", "Cycle des quintes"] },
  { num: 5,  level: 1 as const, title: "Emprunts et suites harmoniques classiques",    desc: "Mode mineur, emprunts à l'homonyme, accord napolitain, basse de chaconne.",                                                              tags: ["Mineur", "Emprunts", "Napolitain"] },
  { num: 6,  level: 1 as const, title: "Construire une harmonisation",                 desc: "De la mélodie à l'accompagnement : analyser, choisir les accords, réaliser.",                                                            tags: ["Harmonisation", "Mélodie", "Accompagnement"] },
  { num: 7,  level: 1 as const, title: "La tonicisation",                              desc: "Dominantes secondaires, tons voisins et chaînes de tonicisations.",                                                                       tags: ["Tonicisation", "V/V", "Tons voisins"] },
  { num: 8,  level: 1 as const, title: "Modulation par accord pivot",                  desc: "Changer de tonalité avec fluidité. Le 6/4 de cadence et le V7sus4.",                                                                     tags: ["Modulation", "Accord pivot", "6/4"] },
  { num: 9,  level: 1 as const, title: "Modulation avancée et pédales",                desc: "Marche harmonique, note commune, minorisation, pédales et accords appogiaturés.",                                                         tags: ["Marche", "Pédale", "Minorisation"] },
  { num: 10, level: 2 as const, title: "Les modes de la gamme majeure",                desc: "Ionien, dorien, phrygien, lydien, mixolydien, éolien, locrien — sept couleurs, une seule gamme.",                                        tags: ["Modes", "Modal", "Jazz"] },
  { num: 11, level: 2 as const, title: "Les extensions d'accords",                     desc: "9e, 11e, 13e — empiler des tierces au-delà de la 7te pour enrichir la couleur harmonique.",                                              tags: ["Extensions", "9e", "Jazz"] },
  { num: 12, level: 2 as const, title: "La substitution tritonique",                   desc: "Remplacer V7 par l'accord situé un triton plus bas — même tension, basse chromatique.",                                                  tags: ["Triton", "Substitution", "Jazz"] },
  { num: 13, level: 2 as const, title: "Le contrepoint à 2 voix",                      desc: "Les 5 espèces de Fux — note contre note, doubles croches, liaisons, syncopes et fleuretis.",                                             tags: ["Contrepoint", "Espèces", "Fux"] },
  { num: 14, level: 2 as const, title: "L'harmonisation modale",                       desc: "Colorer chaque mode avec ses accords caractéristiques — dorien, phrygien, lydien, mixolydien, éolien.",                                  tags: ["Modal", "Debussy", "Couleur"] },
  { num: 15, level: 2 as const, title: "Les progressions jazz avancées",               desc: "II–V–I avancé, extensions, rythme harmonique, turnarounds et jazz blues.",                                                               tags: ["Jazz", "Bebop", "II-V-I"] },
  { num: 16, level: 2 as const, title: "La réharmonisation",                           desc: "Substitution diatonique, tritonique, emprunt modal et harmonisation parallèle — transformer les accords sous une mélodie intacte.",       tags: ["Réharmonisation", "Bill Evans", "Substitution"] },
  { num: 24, level: 2 as const, title: "Les accords de sixte augmentée",               desc: "It+6, Fr+6, Al+6 — les trois sixtes augmentées, leur résolution par mouvement contraire et leur lien avec la substitution tritonique.",    tags: ["Sixte augmentée", "Altéré", "Romantique"] },
  { num: 25, level: 2 as const, title: "Le chromatisme et l'harmonie chromatique avancée", desc: "Lignes chromatiques, accord de Tristan, modulation enharmonique — la tonalité poussée à ses limites expressives.",                    tags: ["Chromatisme", "Wagner", "Enharmonie"] },
  { num: 26, level: 2 as const, title: "Harmonisation DEM : basse donnée et soprano donné", desc: "Les deux exercices fondamentaux de l'examen DEM — méthode en 5 étapes, exercices guidés avec corrections.",                          tags: ["DEM", "Harmonisation", "Basse donnée"] },
  { num: 30, level: 4 as const, title: "Harmonie impressionniste et modalité avancée", desc: "Planing, gamme par tons, octatonique, pentatonique et modes de Messiaen — la couleur harmonique comme langage autonome.",                  tags: ["Impressionnisme", "Messiaen", "Planing"] },
  { num: 31, level: 4 as const, title: "Polytonalité et harmonie quartale",             desc: "Superposition de tonalités (Stravinsky), accords construits en quartes, So What chord — au-delà de la tonalité classique.",               tags: ["Polytonalité", "Stravinsky", "Quartes"] },
  { num: 32, level: 4 as const, title: "Extensions jazz avancées et reharmonisation",   desc: "b9, #9, #11, b13 — tensions disponibles, Giant Steps de Coltrane, cycle de tierces et substitutions avancées.",                            tags: ["Coltrane", "Extensions altérées", "Reharmonisation"] },
  { num: 33, level: 5 as const, title: "Écriture classique : Fugue et choral",            desc: "Contrepoint strict, règles du choral à 4 voix, anatomie de la fugue — Bach et le sommet du contrepoint baroque.",                           tags: ["Fugue", "Choral", "Bach"] },
  { num: 34, level: 5 as const, title: "Composition pour l'image : Harmonie cinématographique", desc: "Carte des émotions harmoniques, leitmotif et transformation — Morricone, Williams, Zimmer.",                                              tags: ["Cinéma", "Leitmotif", "Morricone"] },
  { num: 35, level: 5 as const, title: "Jazz avancé : Reharmonisation et improvisation",  desc: "Substitutions avancées, chord scales et voicings professionnels — Miles Davis et Kind of Blue.",                                               tags: ["Jazz", "Voicings", "Miles Davis"] },
  { num: 36, level: 5 as const, title: "Harmonie de Debussy et Ravel : l'impressionnisme approfondi", desc: "Gamme par tons, planing, polyaccords, modalité néoclassique — les deux logiques de l'impressionnisme français.",                  tags: ["Debussy", "Ravel", "Satie"] },
  { num: 37, level: 5 as const, title: "Analyse avancée : Schenker et analyse motivique",  desc: "Ursatz, Urlinie, 4 niveaux de réduction et analyse motivique — voir la structure profonde d'une œuvre.",                                     tags: ["Schenker", "Motivique", "Beethoven"] },
  { num: 27, level: 3 as const, title: "Analyse fonctionnelle profonde",              desc: "Hiérarchies tonales, prolongation harmonique, réduction schenkérienne — voir la structure osseuse d'une œuvre au-delà de ses accords de surface.",          tags: ["Schenker", "Analyse", "Ursatz"] },
  { num: 28, level: 3 as const, title: "Formes musicales approfondies",              desc: "Binaire, ternaire, rondo, forme sonate — anatomie des grandes architectures musicales avec analyse guidée de Mozart, Bach et Beethoven.",                    tags: ["Forme sonate", "Analyse", "Beethoven"] },
  { num: 29, level: 3 as const, title: "Analyse comparative du répertoire",          desc: "Baroque, classique, romantique, impressionniste — 5 périodes, une même mélodie harmonisée 5 fois pour révéler l'évolution du langage musical.",             tags: ["Debussy", "Évolution", "Styles"] },
  { num: 17, level: 3 as const, title: "La phrase musicale et la forme",               desc: "Motif, développement en 4 étapes, techniques de répétition, période antécédent-conséquent et grandes formes musicales.",                 tags: ["Phrase", "Forme", "Analyse"] },
  { num: 18, level: 3 as const, title: "Le développement motivique",                   desc: "Les 5 éléments du motif, le paradoxe de la répétition, et les 4 familles de techniques — de l'harmonie au rythme.",                     tags: ["Motif", "Développement", "Beethoven"] },
  { num: 19, level: 3 as const, title: "Introduction à l'orchestration",               desc: "Les 4 familles d'instruments, leurs tessitures et rôles — doublures, équilibre, registres et distribution SATB à l'orchestre.",          tags: ["Orchestre", "Timbres", "Ravel"] },
  { num: 20, level: 3 as const, title: "Analyse des grands compositeurs classiques",   desc: "Bach, Mozart, Beethoven, Schubert, Chopin, Liszt, Berlioz, Tchaïkovski, Rachmaninov — les signatures harmoniques.",                      tags: ["Analyse", "Compositeurs", "Histoire"] },
  { num: 21, level: 3 as const, title: "Analyse des compositeurs modernes",            desc: "Debussy, Ravel, Stravinsky, Messiaen, Satie, Beatles, Radiohead, Morricone — de l'impressionnisme au rock.",                             tags: ["Moderne", "Contemporain", "Impressionnisme"] },
  { num: 22, level: 3 as const, title: "La réharmonisation avancée",                   desc: "Transformer une progression en conservant la mélodie — substitutions diatonique et tritonique, emprunt modal, harmonisation parallèle.", tags: ["Réharmonisation", "Substitution", "Jazz"] },
  { num: 23, level: 3 as const, title: "Composer dans le style des maîtres",           desc: "Bach, Mozart, Chopin, Debussy, Jazz, Rock — identifier et reproduire les signatures harmoniques des grands compositeurs.",                tags: ["Style", "Composition", "Analyse"] },
  { num: 38, level: 1 as const, title: "Les notes étrangères", desc: "Retard, appogiature, broderie, note de passage, échappée, anticipation et pédale — l'ornementation mélodique de l'harmonie.", tags: ["Notes étrangères", "Retard", "Appogiature"] },
  { num: 39, level: 2 as const, title: "Les 7èmes d'espèces", desc: "Au-delà du V7 : l'accord de septième sur chaque degré, sa nature, sa préparation, sa résolution, ses renversements et la marche de 7èmes.", tags: ["Septièmes", "Préparation", "Résolution"] },
  { num: 40, level: 2 as const, title: "L'invention à 2 voix", desc: "Sujet, imitation à l'octave, contre-sujet, épisodes et plan tonal — l'écriture de l'invention dans le style de Bach.", tags: ["Invention", "Bach", "Imitation"] },
  { num: 41, level: 5 as const, title: "L'écriture de style", desc: "Pasticher le classique, le romantique et le début du XXe — la discipline d'écriture stylistique du DEM.", tags: ["Style", "Pastiche", "DEM"] },
  { num: 42, level: 3 as const, title: "Harmonisation au clavier et basse chiffrée", desc: "Lire et réaliser un continuo baroque : chiffrages, renversements, 6/4 cadentiel, retards et marches — à quatre voix et au clavier.", tags: ["Basse chiffrée", "Continuo", "Réalisation"] },
  { num: 43, level: 3 as const, title: "Contrepoint modal de la Renaissance", desc: "Le style Palestrina (prima pratica) : modes ecclésiastiques, ligne mélodique, contrepoint à 2 voix, dissonance stricte (retards, nota cambiata) et cadences modales.", tags: ["Contrepoint", "Palestrina", "Modal"] },
  { num: 44, level: 5 as const, title: "Analyse post-tonale : la set theory", desc: "Classes de hauteurs, forme normale et forme première, vecteur d'intervalles, nombres de Forte, relation Z — analyser Schoenberg et Webern, jusqu'à la série dodécaphonique.", tags: ["Set theory", "Forte", "Atonal"] },
  { num: 45, level: 3 as const, title: "Méthodologie du commentaire d'écoute", desc: "La méthode complète de l'épreuve — grille des paramètres, marqueurs stylistiques, formes à l'oreille, plan et vocabulaire — et le gymnase harmonique : cadences, modes, modulations, rythme harmonique, textures.", tags: ["Commentaire d'écoute", "Styles", "Méthodologie"] },
];

/** Nombre total de cours publiés. */
export const COURS_COUNT = COURS.length;

/** Cours ouverts sans abonnement (et indexables par les moteurs). */
export const FREE_COURS = [1, 2, 3];

export function getCours(num: number): CoursMeta | undefined {
  return COURS.find(c => c.num === num);
}

export function isFreeCours(num: number): boolean {
  return FREE_COURS.includes(num);
}

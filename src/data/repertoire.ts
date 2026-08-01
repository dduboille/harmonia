/**
 * src/data/repertoire.ts
 * Liste statique des 48 pièces du répertoire analysées dans les sections
 * « conservatoire » des cours (une par cours, 1 à 48). Sert la page
 * `/[locale]/repertoire` (frise chronologique) et son badge sur la landing.
 *
 * Titres/compositeurs recopiés verbatim depuis `CoursConservatoireData.repertoire`
 * de chaque cours (src/data/conservatoireData*.ts) — pas réimportés ici pour
 * éviter de tirer les très gros fichiers `conservatoire-*.ts` (MusicXML complet,
 * jusqu'à ~39000 lignes) dans le bundle d'une simple page de liste. Années de
 * composition : faits musicologiques établis ; « v. » (vers) marque une date
 * approximative documentée, pas une extrapolation.
 */

export type Ere =
  | "renaissance"
  | "baroque"
  | "classique"
  | "romantique"
  | "xxe"
  | "jazz"
  | "horscours";

export interface RepertoirePiece {
  cours: number;
  titre: string;
  compositeur: string;
  annee: string;
  anneeSort: number;
  ere: Ere;
}

export const ERE_LABELS: Record<Ere, string> = {
  renaissance: "Renaissance",
  baroque: "Baroque",
  classique: "Classique",
  romantique: "Romantique",
  xxe: "XXe siècle",
  jazz: "Jazz & musiques populaires",
  horscours: "Hors chronologie",
};

export const REPERTOIRE: RepertoirePiece[] = [
  { cours: 42, titre: "La Folia (la grille)", compositeur: "Formule anonyme (d'origine ibérique)", annee: "XVIe s.", anneeSort: 1500, ere: "renaissance" },
  { cours: 43, titre: "Missa Brevis, Agnus Dei II", compositeur: "Palestrina", annee: "1570", anneeSort: 1570, ere: "renaissance" },
  { cours: 38, titre: "Dido's Lament (Dido and Aeneas)", compositeur: "Henry Purcell", annee: "1689", anneeSort: 1689, ere: "baroque" },
  { cours: 9, titre: "Chaconne, BWV 1004", compositeur: "J.S. Bach", annee: "v. 1720", anneeSort: 1720, ere: "baroque" },
  { cours: 1, titre: "Prélude en Do majeur, BWV 846", compositeur: "J.S. Bach", annee: "1722", anneeSort: 1722, ere: "baroque" },
  { cours: 33, titre: "Prélude et Fugue n°2, BWV 847", compositeur: "J.S. Bach", annee: "1722", anneeSort: 1722, ere: "baroque" },
  { cours: 4, titre: "Choral « Jesu, meine Freude », BWV 227", compositeur: "J.S. Bach", annee: "v. 1723", anneeSort: 1723, ere: "baroque" },
  { cours: 13, titre: "Invention n°1, BWV 772", compositeur: "J.S. Bach", annee: "1723", anneeSort: 1723, ere: "baroque" },
  { cours: 27, titre: "« Jesu, meine Freude » (choral intégral)", compositeur: "J.S. Bach", annee: "v. 1723", anneeSort: 1723, ere: "baroque" },
  { cours: 40, titre: "Invention n°4, BWV 775", compositeur: "J.S. Bach", annee: "v. 1723", anneeSort: 1723, ere: "baroque" },
  { cours: 48, titre: "« L'Hiver », 1er mvt des Quatre Saisons", compositeur: "Antonio Vivaldi", annee: "1725", anneeSort: 1725, ere: "baroque" },
  { cours: 26, titre: "« Wachet auf, ruft uns die Stimme », BWV 645", compositeur: "J.S. Bach", annee: "v. 1748", anneeSort: 1748, ere: "baroque" },
  { cours: 3, titre: "Symphonie n°40, KV 550, 1er mvt", compositeur: "W.A. Mozart", annee: "1788", anneeSort: 1788, ere: "classique" },
  { cours: 28, titre: "Sonate n°15, K.545, 1er mvt", compositeur: "W.A. Mozart", annee: "1788", anneeSort: 1788, ere: "classique" },
  { cours: 17, titre: "Symphonie n°94 « La Surprise », 2e mvt", compositeur: "Joseph Haydn", annee: "1791", anneeSort: 1791, ere: "classique" },
  { cours: 2, titre: "Sonate « Pathétique » op.13, 2e mvt", compositeur: "L. van Beethoven", annee: "1798", anneeSort: 1798, ere: "classique" },
  { cours: 39, titre: "Sonate « Pathétique » op.13, intro. Grave", compositeur: "L. van Beethoven", annee: "1798", anneeSort: 1798, ere: "classique" },
  { cours: 8, titre: "Sonate « Clair de lune » op.27 n°2, 1er mvt", compositeur: "L. van Beethoven", annee: "1801", anneeSort: 1801, ere: "classique" },
  { cours: 37, titre: "Symphonie n°5, 1er mvt", compositeur: "L. van Beethoven", annee: "1808", anneeSort: 1808, ere: "classique" },
  { cours: 5, titre: "Sonate D.845, 1er mvt", compositeur: "Franz Schubert", annee: "1825", anneeSort: 1825, ere: "romantique" },
  { cours: 20, titre: "Symphonie fantastique, 4e mvt", compositeur: "Hector Berlioz", annee: "1830", anneeSort: 1830, ere: "romantique" },
  { cours: 6, titre: "Nocturne op.9 n°2", compositeur: "Frédéric Chopin", annee: "1832", anneeSort: 1832, ere: "romantique" },
  { cours: 46, titre: "« Träumerei » (Kinderszenen op.15 n°7)", compositeur: "Robert Schumann", annee: "1838", anneeSort: 1838, ere: "romantique" },
  { cours: 24, titre: "Prélude op.28 n°20", compositeur: "Frédéric Chopin", annee: "1839", anneeSort: 1839, ere: "romantique" },
  { cours: 25, titre: "Prélude de Tristan und Isolde", compositeur: "Richard Wagner", annee: "1859", anneeSort: 1859, ere: "romantique" },
  { cours: 23, titre: "Suite Holberg op.40, I. Praeludium", compositeur: "Edvard Grieg", annee: "1884", anneeSort: 1884, ere: "romantique" },
  { cours: 14, titre: "Première Gymnopédie", compositeur: "Erik Satie", annee: "1888", anneeSort: 1888, ere: "romantique" },
  { cours: 47, titre: "Schéhérazade, 3e mvt (extrait)", compositeur: "Nikolaï Rimski-Korsakov", annee: "1888", anneeSort: 1888, ere: "romantique" },
  { cours: 7, titre: "Intermezzo op.118 n°2", compositeur: "Johannes Brahms", annee: "1893", anneeSort: 1893, ere: "romantique" },
  { cours: 45, titre: "Nocturne n°6 en Ré♭ majeur, op.63", compositeur: "Gabriel Fauré", annee: "1894", anneeSort: 1894, ere: "romantique" },
  { cours: 36, titre: "Pavane pour une infante défunte", compositeur: "Maurice Ravel", annee: "1899", anneeSort: 1899, ere: "romantique" },
  { cours: 30, titre: "Voiles (Préludes, Livre I)", compositeur: "Claude Debussy", annee: "1909", anneeSort: 1909, ere: "xxe" },
  { cours: 44, titre: "Trois Pièces op.11, n°1", compositeur: "Arnold Schoenberg", annee: "1909", anneeSort: 1909, ere: "xxe" },
  { cours: 29, titre: "La Cathédrale engloutie (Préludes, Livre I)", compositeur: "Claude Debussy", annee: "1910", anneeSort: 1910, ere: "xxe" },
  { cours: 31, titre: "L'accord de Petrouchka", compositeur: "D'après Igor Stravinsky, Petrouchka", annee: "1911", anneeSort: 1911, ere: "xxe" },
  { cours: 21, titre: "L'accord des Augures", compositeur: "D'après Igor Stravinsky, Le Sacre du printemps", annee: "1913", anneeSort: 1913, ere: "xxe" },
  { cours: 18, titre: "Étude op.76 n°2", compositeur: "Jean Sibelius", annee: "années 1910", anneeSort: 1916, ere: "xxe" },
  { cours: 19, titre: "Boléro", compositeur: "Maurice Ravel", annee: "1928", anneeSort: 1928, ere: "xxe" },
  { cours: 16, titre: "My Funny Valentine", compositeur: "Richard Rodgers", annee: "1937", anneeSort: 1937, ere: "jazz" },
  { cours: 11, titre: "All the Things You Are", compositeur: "Jerome Kern", annee: "1939", anneeSort: 1939, ere: "jazz" },
  { cours: 15, titre: "Autumn Leaves", compositeur: "Joseph Kosma", annee: "1945", anneeSort: 1945, ere: "jazz" },
  { cours: 12, titre: "Satin Doll", compositeur: "Duke Ellington", annee: "1953", anneeSort: 1953, ere: "jazz" },
  { cours: 22, titre: "Le pendule", compositeur: "D'après Bill Evans, Peace Piece", annee: "1958", anneeSort: 1958, ere: "jazz" },
  { cours: 10, titre: "So What", compositeur: "Miles Davis", annee: "1959", anneeSort: 1959, ere: "jazz" },
  { cours: 32, titre: "Giant Steps", compositeur: "John Coltrane", annee: "1959", anneeSort: 1959, ere: "jazz" },
  { cours: 35, titre: "Blue in Green", compositeur: "Miles Davis / Bill Evans", annee: "1959", anneeSort: 1959, ere: "jazz" },
  { cours: 34, titre: "Il Buono, il Brutto, il Cattivo", compositeur: "Ennio Morricone", annee: "1966", anneeSort: 1966, ere: "jazz" },
  { cours: 41, titre: "Période classique en Do majeur", compositeur: "Exercice de style (Harmonia)", annee: "Exercice de style", anneeSort: 999999, ere: "horscours" },
];

export const REPERTOIRE_COUNT = REPERTOIRE.length;

export const ERES_ORDONNEES: Ere[] = ["renaissance", "baroque", "classique", "romantique", "xxe", "jazz"];

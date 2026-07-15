/**
 * lib/palette-fonctionnelle.ts
 * Harmonia — La palette d'accords de la composition guidée, ORGANISÉE PAR FONCTION.
 *
 * On n'étiquette rien à la main : on génère des candidats { pcs, basse }, et c'est
 * `analyzeChord` — le moteur de l'analyseur de partitions — qui leur donne leur
 * chiffre romain, leur fonction et leur catégorie. La composition guidée parle donc
 * exactement le même langage harmonique que l'analyseur.
 */

import {
  analyzeChord,
  identifyChordFromNotes,
  pcOfDegree,
  NOTE_FR,
  type Fonction,
  type Categorie,
} from "./harmonic-analysis";

export interface AccordPalette {
  id: string;          // = degree (unique dans une tonalité) : "V7", "ii6", "bII6"…
  nom: string;         // "Sol7", "Rém", "Réb"… (orthographe française simple)
  pcs: number[];
  bassPc: number;
  degree: string;
  fonction: Fonction;
  categorie: Categorie;
}

export interface GroupeFonctionnel {
  titre: "Tonique" | "Prédominante" | "Dominante" | "Chromatisme";
  accords: AccordPalette[];
}

const MAJOR_DEGREES = [0, 2, 4, 5, 7, 9, 11];
const MINOR_DEGREES = [0, 2, 3, 5, 7, 8, 10];

/** Un accord candidat, avant étiquetage : ses hauteurs et la note qu'on met à la basse. */
interface Candidat {
  pcs: number[];
  bassPc: number;
}

/** Triade/7e diatonique sur un degré, avec le renversement voulu (0=fond., 1, 2, 3). */
function accordDiatonique(
  degre: number, tonicPc: number, mode: "major" | "minor", avecSeptieme: boolean, renv: number,
): Candidat {
  const gamme = mode === "major" ? MAJOR_DEGREES : MINOR_DEGREES;
  const idx = degre - 1;
  const tons = [0, 2, 4, ...(avecSeptieme ? [6] : [])].map(
    (saut) => (tonicPc + gamme[(idx + saut) % 7]) % 12,
  );
  return { pcs: tons, bassPc: tons[renv % tons.length] };
}

/** 7e de dominante bâtie une quinte au-dessus d'un degré (dominante secondaire V7/x). */
function dominanteSecondaire(cibleDegre: number, tonicPc: number, mode: "major" | "minor"): Candidat {
  const ciblePc = pcOfDegree(cibleDegre, tonicPc, mode);
  const root = (ciblePc + 7) % 12;
  const pcs = [root, (root + 4) % 12, (root + 7) % 12, (root + 10) % 12];
  return { pcs, bassPc: root };
}

/**
 * Recettes chromatiques bâties à la main (leurs hauteurs, pas leurs étiquettes —
 * `analyzeChord` étiquette). En Do majeur : napolitain, emprunts, sixte allemande.
 */
function candidatsChromatiques(tonicPc: number, mode: "major" | "minor"): Candidat[] {
  const out: Candidat[] = [];
  // Dominantes secondaires des degrés tonicisables usuels.
  for (const d of mode === "major" ? [5, 2, 4, 6] : [5, 4, 6]) {
    out.push(dominanteSecondaire(d, tonicPc, mode));
  }
  if (mode === "major") {
    // Napolitain bII6 : accord majeur sur le 2e degré abaissé, 1er renversement (basse = 4e degré).
    const b2 = (tonicPc + 1) % 12;
    const napo = [b2, (b2 + 4) % 12, (b2 + 7) % 12];
    out.push({ pcs: napo, bassPc: (b2 + 4) % 12 });
    // Emprunts au mineur : iv, bVI.
    const iv = (tonicPc + 5) % 12;
    out.push({ pcs: [iv, (iv + 3) % 12, (iv + 7) % 12], bassPc: iv }); // iv (Fa mineur)
    const b6 = (tonicPc + 8) % 12;
    out.push({ pcs: [b6, (b6 + 4) % 12, (b6 + 7) % 12], bassPc: b6 }); // bVI (Lab)
    // Sixte allemande : b6 à la basse, tonique, b3, #4 (Lab-Do-Mib-Fa#).
    out.push({ pcs: [b6, tonicPc, (tonicPc + 3) % 12, (tonicPc + 6) % 12], bassPc: b6 });
  }
  return out;
}

/** Nom français simple d'un accord, d'après sa fondamentale et sa qualité (via le moteur). */
function nomAccord(pcs: number[], bassPc: number): string {
  const chord = identifyChordFromNotes(pcs, bassPc);
  if (!chord) return "?";
  return (NOTE_FR[chord.rootPc] ?? "?") + chord.quality;
}

const CHROMATIQUES: Set<Categorie> = new Set([
  "dominante_secondaire", "sensible_degre", "emprunt", "napolitain", "sixte_augmentee",
]);

/** Niveau → catégories autorisées. */
function categoriesAutorisees(niveau: 1 | 2 | 3): Set<Categorie> {
  if (niveau === 1) return new Set(["diatonique"]);
  if (niveau === 2) return new Set(["diatonique", "dominante_secondaire", "sensible_degre", "emprunt"]);
  return new Set(["diatonique", "dominante_secondaire", "sensible_degre", "emprunt", "napolitain", "sixte_augmentee"]);
}

function etiqueter(c: Candidat, tonicPc: number, mode: "major" | "minor"): AccordPalette | null {
  const chord = identifyChordFromNotes(c.pcs, c.bassPc);
  if (!chord) return null;
  chord.spelled = undefined; // les recettes ne portent pas d'orthographe fine ; la sixte augm.
  //                            est captée par ses classes de hauteurs (b6 basse + tonique + #4).
  const r = analyzeChord(chord, tonicPc, mode);
  return {
    id: r.degree,
    nom: nomAccord(c.pcs, c.bassPc),
    pcs: r.pcs,
    bassPc: c.bassPc,
    degree: r.degree,
    fonction: r.fonction,
    categorie: r.categorie,
  };
}

export function construirePalette(
  tonicPc: number, mode: "major" | "minor", niveau: 1 | 2 | 3,
): GroupeFonctionnel[] {
  const candidats: Candidat[] = [];

  // Diatoniques : triades sur chaque degré (fond. + 1er renversement pour I, ii, IV, V),
  // plus le V7 et son 1er renversement, plus le vii°7. Le ii6 est une prédominante
  // trop usuelle pour l'omettre — et les exercices l'appellent par son id.
  for (let d = 1; d <= 7; d++) {
    candidats.push(accordDiatonique(d, tonicPc, mode, false, 0));
    if ([1, 2, 4, 5].includes(d)) candidats.push(accordDiatonique(d, tonicPc, mode, false, 1));
  }
  candidats.push(accordDiatonique(5, tonicPc, mode, true, 0)); // V7
  candidats.push(accordDiatonique(5, tonicPc, mode, true, 1)); // V6/5
  candidats.push(accordDiatonique(2, tonicPc, mode, true, 0)); // ii7
  candidats.push(accordDiatonique(7, tonicPc, mode, true, 0)); // vii°7 (en mineur) / viiø7 (majeur)

  candidats.push(...candidatsChromatiques(tonicPc, mode));

  const autorisees = categoriesAutorisees(niveau);
  const etiquetes = candidats
    .map((c) => etiqueter(c, tonicPc, mode))
    .filter((a): a is AccordPalette => a !== null && autorisees.has(a.categorie));

  // Dédoublonnage par degré (deux recettes peuvent tomber sur la même étiquette).
  const vus = new Set<string>();
  const uniques = etiquetes.filter((a) => (vus.has(a.id) ? false : (vus.add(a.id), true)));

  const groupe = (a: AccordPalette): GroupeFonctionnel["titre"] => {
    if (CHROMATIQUES.has(a.categorie)) return "Chromatisme";
    if (a.fonction === "T") return "Tonique";
    if (a.fonction === "SD") return "Prédominante";
    return "Dominante";
  };

  const titres: GroupeFonctionnel["titre"][] = ["Tonique", "Prédominante", "Dominante", "Chromatisme"];
  return titres.map((titre) => ({
    titre,
    accords: uniques.filter((a) => groupe(a) === titre),
  }));
}

/** Résout un id de palette OU un nom d'accord d'exercice ("C", "G7") en accord étiqueté. */
export function resoudreAccord(
  idOuNom: string, tonicPc: number, mode: "major" | "minor",
): AccordPalette | null {
  // 1) un id de palette ? (on régénère la palette du niveau maximal et on cherche)
  for (const g of construirePalette(tonicPc, mode, 3)) {
    const trouve = g.accords.find((a) => a.id === idOuNom);
    if (trouve) return trouve;
  }
  // 2) sinon, un nom d'accord "Root+qualité", fondamentale à la basse.
  const pcs = nomVersPcs(idOuNom);
  if (!pcs) return null;
  return etiqueter({ pcs, bassPc: pcs[0] }, tonicPc, mode);
}

const NAME_PC: Record<string, number> = {
  C: 0, "C#": 1, Db: 1, D: 2, "D#": 3, Eb: 3, E: 4, F: 5, "F#": 6, Gb: 6,
  G: 7, "G#": 8, Ab: 8, A: 9, "A#": 10, Bb: 10, B: 11,
};

/** "G7" → [7,11,2,5] ; "Dm" → [2,5,9] ; "C" → [0,4,7]. Sous-ensemble des qualités d'exercice. */
function nomVersPcs(nom: string): number[] | null {
  const m = nom.match(/^([A-G][#b]?)(.*)$/);
  if (!m || !(m[1] in NAME_PC)) return null;
  const root = NAME_PC[m[1]];
  const q = m[2];
  let ivs: number[];
  if (q === "" || q === "maj" || q === "M") ivs = [0, 4, 7];
  else if (q === "m" || q === "min") ivs = [0, 3, 7];
  else if (q === "7") ivs = [0, 4, 7, 10];
  else if (q === "m7" || q === "min7") ivs = [0, 3, 7, 10];
  else if (q === "Maj7" || q === "maj7" || q === "M7") ivs = [0, 4, 7, 11];
  else if (q === "dim" || q === "o") ivs = [0, 3, 6];
  else if (q === "dim7" || q === "o7") ivs = [0, 3, 6, 9];
  else if (q === "m7b5" || q === "ø") ivs = [0, 3, 6, 10];
  else if (q === "aug" || q === "+") ivs = [0, 4, 8];
  else return null;
  return ivs.map((i) => (root + i) % 12);
}

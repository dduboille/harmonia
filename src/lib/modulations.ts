/**
 * lib/modulations.ts
 * Harmonia — La TONALITÉ GLISSANTE : où la pièce module, par quels pivots.
 *
 * Ce module n'invente aucune théorie. `analyzeChord` sait déjà lire un accord DANS
 * une tonalité donnée (tonique et mode en paramètres) : détecter une modulation vers
 * Sol, c'est rejouer cette lecture calée sur Sol et voir si une région y trouve sa
 * cadence. C2 est une couche AU-DESSUS de la suite d'accords, pas un nouveau moteur.
 */

import {
  analyzeChord,
  diatonicSet,
  NOTE_FR,
  type Chord,
  type ChordResult,
} from "./harmonic-analysis";

export interface Tonalite {
  tonicPc: number;
  mode: "major" | "minor";
}

export function nomTonalite(t: Tonalite): string {
  return `${NOTE_FR[t.tonicPc] ?? "?"} ${t.mode === "major" ? "majeur" : "mineur"}`;
}

/**
 * Les CINQ tons voisins (armures à un accident près) — là où va l'immense majorité
 * des modulations tonales. Depuis un ton MAJEUR : sa dominante et sa sous-dominante
 * (majeures), son relatif et les relatifs de sa dominante et de sa sous-dominante
 * (mineurs). Depuis un ton MINEUR : le même cercle, vu depuis le relatif.
 */
const VOISINS_MAJEUR: ReadonlyArray<{ offset: number; mode: "major" | "minor" }> = [
  { offset: 7, mode: "major" }, // dominante
  { offset: 5, mode: "major" }, // sous-dominante
  { offset: 9, mode: "minor" }, // relatif
  { offset: 4, mode: "minor" }, // relatif de la dominante
  { offset: 2, mode: "minor" }, // relatif de la sous-dominante
];

const VOISINS_MINEUR: ReadonlyArray<{ offset: number; mode: "major" | "minor" }> = [
  { offset: 3, mode: "major" },  // relatif majeur (III)
  { offset: 5, mode: "minor" },  // sous-dominante (iv)
  { offset: 7, mode: "minor" },  // dominante (v)
  { offset: 8, mode: "major" },  // VI
  { offset: 10, mode: "major" }, // VII
];

export function tonsVoisins(t: Tonalite): Tonalite[] {
  const table = t.mode === "major" ? VOISINS_MAJEUR : VOISINS_MINEUR;
  return table.map((v) => ({ tonicPc: (t.tonicPc + v.offset) % 12, mode: v.mode }));
}

/** Reconstruit un `Chord` minimal depuis un résultat, pour le relire dans un autre ton. */
function chordDeResult(r: ChordResult): Chord {
  return {
    rootPc: r.rootPc,
    rootFr: r.rootFr,
    quality: r.quality,
    pcs: r.pcs,
    bassPc: r.bassPc,
  };
}

/** Relit un accord DANS une tonalité donnée : c'est tout le principe de C2. */
export function analyseEn(r: ChordResult, t: Tonalite): ChordResult {
  return analyzeChord(chordDeResult(r), t.tonicPc, t.mode);
}

/** Toutes les notes de l'accord appartiennent-elles à la gamme du ton ? */
export function estDiatoniqueEn(r: ChordResult, t: Tonalite): boolean {
  const dia = diatonicSet(t.tonicPc, t.mode);
  return r.pcs.every((pc) => dia.has(pc));
}

/**
 * L'accord est-il la DOMINANTE du ton (5e degré, fonction D) ?
 *
 * Le 5e degré ne suffit pas : en mineur, le `v` NATUREL (Mi-Sol-Si en La mineur,
 * sans Sol#) porte le degré 5 mais ne cadence pas — il ne conduit pas à la tonique.
 * Seul le V AVEC SENSIBLE cadence. On exige donc la sensible du ton — `tonicPc+11` —
 * dans l'accord : le V majeur et le V7 la contiennent, le v mineur non.
 */
export function estDominanteDe(r: ChordResult, t: Tonalite): boolean {
  const lu = analyseEn(r, t);
  if (lu.degreeNum !== 5 || lu.fonction !== "D") return false;
  const sensible = (t.tonicPc + 11) % 12;
  return r.pcs.includes(sensible);
}

/** L'accord est-il la TONIQUE du ton (1er degré, fonction T) ? */
export function estToniqueDe(r: ChordResult, t: Tonalite): boolean {
  const lu = analyseEn(r, t);
  return lu.degreeNum === 1 && lu.fonction === "T";
}

/**
 * Y a-t-il, avant la dominante (à `indexDominante`), une PRÉDOMINANTE du ton `t`,
 * annonçant une vraie cellule cadentielle — et non un simple V/V de passage ?
 *
 * On remonte tant que les accords appartiennent à `t` (la cellule est d'un seul
 * tenant), sans dépasser `borneGauche` (le début de la région courante). Une
 * quarte-et-sixte cadentielle — la tonique de `t` au 2e renversement — se glisse
 * légitimement entre la prédominante et la dominante : on la traverse. Le premier
 * accord ÉTRANGER au ton rompt la cellule.
 *
 * Toute la difficulté tient à un piège d'homonymie de degré : seul le ii du nouveau
 * ton est une prédominante sans ambiguïté. Le IV/iv comme le vi sont des degrés
 * FANTÔMES, car le I d'un ton emprunte leur numéro dans deux tons voisins :
 *  - le I est le IV de sa dominante — « I V/V V » en Do : le Do se relit « IV de Sol » ;
 *  - le I est le VI de son médiant mineur — « I V7/iii iii » en Do : le Do se relit
 *    « VI de Mi mineur ».
 * Dans les deux cas, la tonique de départ file vers une dominante secondaire sans
 * rien installer. On n'accepte donc ces deux degrés comme prédominante que s'ils
 * sont LUI-MÊME adossés, à gauche, à un autre accord du nouveau ton : une cellule
 * installée. Le vi est de surcroît de fonction TONIQUE : la plus faible des
 * prétendantes, jamais recevable seule.
 *
 * Limite connue et VALIDÉE : un IV en TÊTE de cellule (« Sib Do7 Fa » vers Fa) n'a
 * pas d'accord antérieur du ton et n'est donc pas détecté. Compromis assumé : mieux
 * vaut manquer ce cas rare que déclarer des modulations sur des tonicisations banales.
 */
export function aPredominantePreparee(
  seq: ChordResult[], indexDominante: number, t: Tonalite, borneGauche: number,
): boolean {
  for (let j = indexDominante - 1; j >= borneGauche; j--) {
    const r = seq[j];
    if (!estDiatoniqueEn(r, t)) return false; // la cellule est rompue
    const deg = analyseEn(r, t).degreeNum;
    if (deg === 2) return true; // ii : seule prédominante non ambiguë
    if (deg === 4 || deg === 6) {
      // IV/iv et vi : n'ouvrent une vraie cellule que s'ils sont adossés, à gauche,
      // à un autre accord du ton — sinon ce sont les degrés 4/6 fantômes du V/V ou
      // du V/iii isolés.
      const precedent = j - 1;
      return precedent >= borneGauche && estDiatoniqueEn(seq[precedent], t);
    }
    if (deg === 1) continue;  // quarte-et-sixte cadentielle : on la traverse
    // Tout autre degré diatonique (une autre dominante, un iii…) ne prépare rien :
    // on continue de remonter, dans la limite de la borne.
  }
  return false;
}

/**
 * Le PIVOT : le dernier accord diatonique aux DEUX tonalités avant la dominante du
 * nouveau ton (à `indexDominante`). On remonte depuis la dominante ; le premier
 * accord commun rencontré est, par construction, le dernier avant la bascule.
 *
 * `null` s'il n'existe aucun accord commun dans la région : c'est une modulation
 * sans pivot (par saut, par juxtaposition), que la version stricte laisse en
 * chromatisme plutôt que de l'inventer.
 */
export function trouvePivot(
  seq: ChordResult[], indexDominante: number, ancien: Tonalite, nouveau: Tonalite,
  borneGauche: number,
): number | null {
  for (let j = indexDominante - 1; j >= borneGauche; j--) {
    if (estDiatoniqueEn(seq[j], ancien) && estDiatoniqueEn(seq[j], nouveau)) {
      return j;
    }
  }
  return null;
}

export interface AccordSequence {
  result: ChordResult;
  measure: number;
}

export interface RegionTonale {
  tonicPc: number;
  mode: "major" | "minor";
  nom: string;
  indexDebut: number;   // position dans la séquence (incluse)
  indexFin: number;     // position dans la séquence (incluse)
  mesureDebut: number;
  mesureFin: number;
  /** L'accord charnière — absent pour la région initiale. */
  pivot?: {
    index: number;
    etiquetteAncienne: string; // degré dans le ton QUITTÉ
    etiquetteNouvelle: string; // degré dans le ton REJOINT
  };
  /** La cadence qui a confirmé cette région — absente pour la région initiale. */
  cadence?: { mesure: number };
}

export interface DegreRelu {
  index: number;
  degree: string;   // le degré dans le ton de sa région
  tonalite: string; // le nom du ton
}

export interface PlanTonal {
  regions: RegionTonale[];
  /** Étiquette de chaque accord dans le ton de SA région (pivot exclu : sa double
   *  étiquette vit dans `region.pivot`). */
  degresRelus: DegreRelu[];
}

/**
 * Construit le plan tonal par un balayage séquentiel à état. La tonalité courante
 * démarre sur `home` et bascule dès qu'une cadence dans un ton voisin est à la fois
 * CONFIRMÉE (dominante → tonique), PRÉPARÉE (prédominante du nouveau ton) et PIVOTÉE
 * (accord commun aux deux tons). Sans l'un de ces trois, on reste : c'est une
 * tonicisation, pas une modulation.
 */
export function construirePlanTonal(seq: AccordSequence[], home: Tonalite): PlanTonal {
  const regions: RegionTonale[] = [];
  const degresRelus: DegreRelu[] = [];

  // On hisse la projection {result} → ChordResult hors de la boucle : les prédicats
  // (aPredominantePreparee, trouvePivot) travaillent sur des ChordResult nus, et cette
  // liste est stable pour toute la durée du balayage.
  const results = seq.map((s) => s.result);

  let courant = home;
  let debut = 0;            // index de début de la région courante
  let pivotEntrant: RegionTonale["pivot"] | undefined; // pivot qui a ouvert la région
  let cadenceEntrante: RegionTonale["cadence"] | undefined;

  /** Clôt la région courante sur l'intervalle [debut, fin] et enregistre ses degrés. */
  const clore = (fin: number) => {
    if (fin < debut) return; // région vide (bascule immédiate) : rien à émettre
    regions.push({
      tonicPc: courant.tonicPc,
      mode: courant.mode,
      nom: nomTonalite(courant),
      indexDebut: debut,
      indexFin: fin,
      mesureDebut: seq[debut].measure,
      mesureFin: seq[fin].measure,
      pivot: pivotEntrant,
      cadence: cadenceEntrante,
    });
    for (let k = debut; k <= fin; k++) {
      // Le pivot porte une double étiquette (dans `region.pivot`) : on ne le remet
      // pas ici, pour ne pas afficher deux fois le même index.
      if (pivotEntrant && k === pivotEntrant.index) continue;
      degresRelus.push({
        index: k,
        degree: analyseEn(seq[k].result, courant).degree,
        tonalite: nomTonalite(courant),
      });
    }
  };

  let i = 1;
  while (i < seq.length - 1) {
    let bascule = false;

    for (const K of tonsVoisins(courant)) {
      // Cadence à cette position : seq[i] dominante de K, seq[i+1] tonique de K.
      if (!estDominanteDe(seq[i].result, K)) continue;
      if (!estToniqueDe(seq[i + 1].result, K)) continue;

      // Préparée ? Pivotée ? — sinon ce n'est qu'une tonicisation.
      if (!aPredominantePreparee(results, i, K, debut)) continue;
      const pivot = trouvePivot(results, i, courant, K, debut);
      if (pivot === null) continue;

      // On clôt la région courante JUSTE AVANT le pivot ; le pivot ouvre la nouvelle.
      const ancienne = analyseEn(seq[pivot].result, courant).degree;
      const nouvelle = analyseEn(seq[pivot].result, K).degree;
      clore(pivot - 1);

      debut = pivot;
      courant = K;
      pivotEntrant = { index: pivot, etiquetteAncienne: ancienne, etiquetteNouvelle: nouvelle };
      cadenceEntrante = { mesure: seq[i + 1].measure };

      i = i + 2; // on reprend le balayage APRÈS la tonique de cadence
      bascule = true;
      break;
    }

    if (!bascule) i++;
  }

  clore(seq.length - 1);
  return { regions, degresRelus };
}

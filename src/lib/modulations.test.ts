import { describe, it, expect } from "vitest";
import {
  nomTonalite,
  tonsVoisins,
  estDiatoniqueEn,
  type Tonalite,
} from "./modulations";
import { estDominanteDe, estToniqueDe, aPredominantePreparee } from "./modulations";
import { trouvePivot } from "./modulations";
import { construirePlanTonal, type AccordSequence } from "./modulations";
import { identifyChordFromNotes, analyzeChord, type ChordResult } from "./harmonic-analysis";

const DO: Tonalite = { tonicPc: 0, mode: "major" };
const LAm: Tonalite = { tonicPc: 9, mode: "minor" };
const SOL: Tonalite = { tonicPc: 7, mode: "major" };

/** Un accord analysé, pour les tests, à partir de ses classes de hauteurs. */
function acc(pcs: number[], bassPc?: number): ChordResult {
  return analyzeChord(identifyChordFromNotes(pcs, bassPc)!, 0, "major");
}

describe("nomTonalite", () => {
  it("nomme en français", () => {
    expect(nomTonalite(DO)).toBe("Do majeur");
    expect(nomTonalite(LAm)).toBe("La mineur");
  });
});

describe("tonsVoisins — les cinq tons proches", () => {
  it("depuis Do majeur : Sol, Fa majeurs ; La, Mi, Ré mineurs", () => {
    const noms = tonsVoisins(DO).map(nomTonalite).sort();
    expect(noms).toEqual(
      ["Fa majeur", "La mineur", "Mi mineur", "Ré mineur", "Sol majeur"].sort(),
    );
  });

  it("depuis La mineur : Do majeur, Ré/Mi mineurs, Fa/Sol majeurs (mêmes armures)", () => {
    const noms = tonsVoisins(LAm).map(nomTonalite).sort();
    expect(noms).toEqual(
      ["Do majeur", "Ré mineur", "Mi mineur", "Fa majeur", "Sol majeur"].sort(),
    );
  });

  it("un ton n'est jamais son propre voisin", () => {
    expect(tonsVoisins(DO).some((t) => t.tonicPc === 0 && t.mode === "major")).toBe(false);
  });
});

describe("estDiatoniqueEn", () => {
  it("Do majeur est diatonique en Do et en Sol, pas en Ré", () => {
    const doMaj = acc([0, 4, 7]);
    expect(estDiatoniqueEn(doMaj, DO)).toBe(true);
    expect(estDiatoniqueEn(doMaj, { tonicPc: 7, mode: "major" })).toBe(true);  // Sol : Do = IV
    expect(estDiatoniqueEn(doMaj, { tonicPc: 2, mode: "major" })).toBe(false); // Ré : Do# attendu
  });
});

describe("estDominanteDe / estToniqueDe", () => {
  it("Ré7 est la dominante de Sol ; Sol majeur en est la tonique", () => {
    expect(estDominanteDe(acc([2, 6, 9, 0]), SOL)).toBe(true); // Ré-Fa#-La-Do
    expect(estToniqueDe(acc([7, 11, 2]), SOL)).toBe(true);     // Sol-Si-Ré
  });

  it("Ré majeur (sans 7e) est aussi une dominante de Sol", () => {
    expect(estDominanteDe(acc([2, 6, 9]), SOL)).toBe(true);
  });

  it("Sol7 n'est pas la tonique de Sol (c'est sa dominante à lui)", () => {
    expect(estToniqueDe(acc([7, 11, 2, 5]), SOL)).toBe(false);
  });

  it("le v mineur naturel n'est PAS une dominante : seule la sensible cadence", () => {
    // Mi mineur (Mi-Sol-Si, SANS Sol#) en La mineur : un iii de passage, pas un V.
    expect(estDominanteDe(acc([4, 7, 11]), LAm)).toBe(false);
    // Mi majeur (Mi-Sol#-Si) porte la sensible de La : vraie dominante.
    expect(estDominanteDe(acc([4, 8, 11]), LAm)).toBe(true);
  });
});

describe("aPredominantePreparee — la cellule cadentielle du nouveau ton", () => {
  // Séquence en Do, virant vers Sol : ... Lam (ii de Sol) — Ré7 (V de Sol) — Sol
  const seqVersSol: ChordResult[] = [
    acc([0, 4, 7]),      // 0 Do
    acc([9, 0, 4]),      // 1 Lam  (ii de Sol)
    acc([2, 6, 9, 0]),   // 2 Ré7  (V de Sol)  ← dominante en position 2
    acc([7, 11, 2]),     // 3 Sol
  ];

  it("reconnaît la prédominante (Lam = ii de Sol) juste avant la dominante", () => {
    expect(aPredominantePreparee(seqVersSol, 2, SOL, 0)).toBe(true);
  });

  it("tolère une quarte-et-sixte cadentielle entre la prédominante et la dominante", () => {
    const avecQ64: ChordResult[] = [
      acc([9, 0, 4]),        // 0 Lam  (ii de Sol)
      acc([7, 11, 2], 2),    // 1 Sol6/4 (tonique de Sol au 2e renversement)
      acc([2, 6, 9, 0]),     // 2 Ré7  (V de Sol)
      acc([7, 11, 2]),       // 3 Sol
    ];
    expect(aPredominantePreparee(avecQ64, 2, SOL, 0)).toBe(true);
  });

  it("refuse un V/V isolé, sans prédominante du nouveau ton", () => {
    // I  V7/V  V  I  en Do : Ré7 surgit après Do, aucune cellule en Sol.
    const isole: ChordResult[] = [
      acc([0, 4, 7]),      // 0 Do
      acc([2, 6, 9, 0]),   // 1 Ré7 (V de Sol) ← dominante en position 1
      acc([7, 11, 2]),     // 2 Sol
      acc([0, 4, 7]),      // 3 Do
    ];
    expect(aPredominantePreparee(isole, 1, SOL, 0)).toBe(false);
  });

  it("ne remonte pas au-delà de la borne gauche (début de région)", () => {
    expect(aPredominantePreparee(seqVersSol, 2, SOL, 2)).toBe(false);
  });

  it("refuse le VI phantom du degré 6 (I V7/iii iii, tonicisation du médiant)", () => {
    // Do Si7 Mim = I V7/iii iii en Do : le Do initial se relit VI de Mi mineur,
    // mais aucun accord de Mi mineur ne le précède — ce n'est pas une cellule.
    const versMim: ChordResult[] = [
      acc([0, 4, 7]),      // 0 Do  (VI de Mi mineur : phantom)
      acc([11, 3, 6, 9]),  // 1 Si7 (V de Mi mineur)
      acc([4, 7, 11]),     // 2 Mim
    ];
    expect(aPredominantePreparee(versMim, 1, { tonicPc: 4, mode: "minor" }, 0)).toBe(false);
  });
});

describe("trouvePivot — le dernier accord commun aux deux tons", () => {
  // Do  Lam  Ré7  Sol   —  home = Do, cible = Sol, dominante en 2.
  const seq: ChordResult[] = [
    acc([0, 4, 7]),      // 0 Do  (I en Do = IV en Sol : commun)
    acc([9, 0, 4]),      // 1 Lam (vi en Do = ii en Sol : commun) ← le dernier avant Ré7
    acc([2, 6, 9, 0]),   // 2 Ré7 (Fa# : étranger à Do)
    acc([7, 11, 2]),     // 3 Sol
  ];

  it("prend le dernier accord commun avant la dominante (Lam)", () => {
    expect(trouvePivot(seq, 2, DO, SOL, 0)).toBe(1);
  });

  it("rend null s'il n'existe aucun accord commun (modulation sans pivot)", () => {
    // Ré7 précédé d'un accord déjà étranger à Do (Fa#m) : rien de commun.
    const sansPivot: ChordResult[] = [
      acc([6, 9, 1]),      // 0 Fa#m (étranger à Do)
      acc([2, 6, 9, 0]),   // 1 Ré7
      acc([7, 11, 2]),     // 2 Sol
    ];
    expect(trouvePivot(sansPivot, 1, DO, SOL, 0)).toBeNull();
  });

  it("ne remonte pas au-delà de la borne gauche", () => {
    expect(trouvePivot(seq, 2, DO, SOL, 2)).toBeNull();
  });
});

/** Fabrique une séquence {result, measure} à partir de pcs et d'un numéro de mesure. */
function sq(items: Array<{ pcs: number[]; bass?: number; m: number }>): AccordSequence[] {
  return items.map((it) => ({ result: acc(it.pcs, it.bass), measure: it.m }));
}

describe("construirePlanTonal", () => {
  it("Do → Sol par pivot, confirmée par la cadence", () => {
    // Do  Sol  Do | Lam(=ii Sol)  Ré7(=V Sol)  Sol(cadence)
    const seq = sq([
      { pcs: [0, 4, 7], m: 1 },   // Do   I
      { pcs: [7, 11, 2], m: 1 },  // Sol  (V en Do)
      { pcs: [0, 4, 7], m: 2 },   // Do   I
      { pcs: [9, 0, 4], m: 2 },   // Lam  vi en Do = ii en Sol  ← pivot
      { pcs: [2, 6, 9, 0], m: 3 },// Ré7  V en Sol
      { pcs: [7, 11, 2], m: 3 },  // Sol  I en Sol (cadence)
    ]);
    const plan = construirePlanTonal(seq, { tonicPc: 0, mode: "major" });

    expect(plan.regions.map((r) => r.nom)).toEqual(["Do majeur", "Sol majeur"]);
    const sol = plan.regions[1];
    expect(sol.pivot).toBeDefined();
    // Le pivot est le DERNIER accord commun aux deux tons (contrat validé de
    // `trouvePivot`, cf. test Task 3) : ici Lam, vi de Do et ii de Sol — un pivot
    // vi=ii tout à fait canonique. Le plan attendait Do (I=IV), mais Lam, également
    // commun et postérieur, l'emporte : on suit le socle, pas l'attente périmée.
    expect(sol.pivot!.etiquetteAncienne).toBe("vi");  // en Do
    expect(sol.pivot!.etiquetteNouvelle).toBe("ii");  // en Sol
    expect(sol.mesureFin).toBe(3);
  });

  it("une simple tonicisation ne module pas : I V7/V V I reste en Do", () => {
    const seq = sq([
      { pcs: [0, 4, 7], m: 1 },    // Do
      { pcs: [2, 6, 9, 0], m: 1 }, // Ré7 (V/V) — pas de prédominante de Sol avant
      { pcs: [7, 11, 2], m: 2 },   // Sol
      { pcs: [0, 4, 7], m: 2 },    // Do
    ]);
    const plan = construirePlanTonal(seq, { tonicPc: 0, mode: "major" });
    expect(plan.regions).toHaveLength(1);
    expect(plan.regions[0].nom).toBe("Do majeur");
  });

  it("modulation au relatif mineur (Do → La mineur)", () => {
    // Do  Rém(=iv Lam)  Mi7(=V Lam)  Lam(cadence)
    const seq = sq([
      { pcs: [0, 4, 7], m: 1 },     // Do  ← pivot (I en Do = III en Lam)
      { pcs: [2, 5, 9], m: 1 },     // Rém iv en Lam
      { pcs: [4, 8, 11, 2], m: 2 }, // Mi7 V en Lam
      { pcs: [9, 0, 4], m: 2 },     // Lam i (cadence)
    ]);
    const plan = construirePlanTonal(seq, { tonicPc: 0, mode: "major" });
    expect(plan.regions.map((r) => r.nom)).toEqual(["Do majeur", "La mineur"]);
  });

  it("chaîne Do → Sol → Ré", () => {
    const seq = sq([
      { pcs: [0, 4, 7], m: 1 },     // Do   pivot vers Sol
      { pcs: [9, 0, 4], m: 1 },     // Lam  ii Sol
      { pcs: [2, 6, 9, 0], m: 2 },  // Ré7  V Sol
      { pcs: [7, 11, 2], m: 2 },    // Sol  I Sol   pivot vers Ré (I Sol = IV Ré)
      { pcs: [4, 7, 11], m: 3 },    // Mim  ii Ré
      { pcs: [9, 1, 4, 7], m: 3 },  // La7  V Ré
      { pcs: [2, 6, 9], m: 4 },     // Ré   I Ré (cadence)
    ]);
    const plan = construirePlanTonal(seq, { tonicPc: 0, mode: "major" });
    expect(plan.regions.map((r) => r.nom)).toEqual(["Do majeur", "Sol majeur", "Ré majeur"]);
  });

  it("pas de bascule si le pivot serait le tout premier accord (pivot à l'index 0)", () => {
    // La séquence s'ouvre DIRECTEMENT sur son pivot : Lam (vi de Do = ii de Sol),
    // puis Ré7 (V de Sol), Sol (cadence). Basculer ici viderait la région d'origine
    // (Do) et pendrait un pivot vers un ton absent du plan. On refuse : une seule
    // région, « Do majeur », sans pivot.
    const seq = sq([
      { pcs: [9, 0, 4], m: 1 },    // Lam  (pivot potentiel à l'index 0)
      { pcs: [2, 6, 9, 0], m: 1 }, // Ré7  V en Sol
      { pcs: [7, 11, 2], m: 2 },   // Sol  I en Sol
    ]);
    const plan = construirePlanTonal(seq, { tonicPc: 0, mode: "major" });
    expect(plan.regions).toHaveLength(1);
    expect(plan.regions[0].nom).toBe("Do majeur");
    expect(plan.regions[0].pivot).toBeUndefined();
  });

  it("aucune modulation → une seule région couvrant toute la pièce", () => {
    const seq = sq([
      { pcs: [0, 4, 7], m: 1 },   // Do
      { pcs: [5, 9, 0], m: 1 },   // Fa
      { pcs: [7, 11, 2], m: 2 },  // Sol
      { pcs: [0, 4, 7], m: 2 },   // Do
    ]);
    const plan = construirePlanTonal(seq, { tonicPc: 0, mode: "major" });
    expect(plan.regions).toHaveLength(1);
    expect(plan.regions[0].mesureDebut).toBe(1);
    expect(plan.regions[0].mesureFin).toBe(2);
  });
});

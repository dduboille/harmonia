/**
 * lib/squelette-model.ts
 * Harmonia — Le MODÈLE du « squelette harmonique » : une succession d'accords
 * posés sur 8 mesures, chaque mesure portant un accord (ronde) ou deux (blanches).
 *
 * Tout est PUR et IMMUABLE : chaque opération renvoie un nouveau `Squelette`, sans
 * jamais muter l'entrée. L'état vit dans le composant ; ce module ne fait que le
 * transformer. Les accords sont des `AccordPalette` (palette-fonctionnelle) — on ne
 * réinvente pas l'harmonie ici, on ne fait que placer des accords déjà étiquetés.
 */

import type { AccordPalette } from "@/lib/palette-fonctionnelle";

/** Un emplacement d'accord dans une mesure : rempli, ou vide (`null`). */
export interface EmplacementAccord {
  accord: AccordPalette | null;
}

/** Une mesure : 1 emplacement (ronde) ou 2 (deux blanches). */
export interface MesureSquelette {
  emplacements: EmplacementAccord[];
}

/** La tonalité unique du squelette (pas de modulation en v1). */
export interface Tonalite {
  tonicPc: number;
  mode: "major" | "minor";
  keySignature: string; // « C », « Am »…
}

export interface Squelette {
  tonalite: Tonalite;
  niveau: 1 | 2; // 1 = diatonique, 2 = + chromatismes
  mesures: MesureSquelette[]; // toujours 8
}

const NB_MESURES = 8;

/** Un squelette vierge : 8 mesures d'un seul emplacement vide. */
export function squeletteVierge(tonalite: Tonalite, niveau: 1 | 2): Squelette {
  return {
    tonalite,
    niveau,
    mesures: Array.from({ length: NB_MESURES }, () => ({
      emplacements: [{ accord: null }],
    })),
  };
}

/**
 * Recopie une mesure en remplaçant l'un de ses emplacements. Garde le reste
 * intact (les autres mesures ne sont pas touchées, elles sont partagées).
 */
function avecMesure(
  sq: Squelette,
  mesure: number,
  transformer: (m: MesureSquelette) => MesureSquelette,
): Squelette {
  return {
    ...sq,
    mesures: sq.mesures.map((m, i) => (i === mesure ? transformer(m) : m)),
  };
}

/** Pose un accord à un emplacement donné. */
export function poserAccord(
  sq: Squelette,
  mesure: number,
  emplacement: number,
  accord: AccordPalette,
): Squelette {
  return avecMesure(sq, mesure, (m) => ({
    emplacements: m.emplacements.map((e, j) => (j === emplacement ? { accord } : e)),
  }));
}

/** Vide un emplacement (le rend `null`). */
export function viderEmplacement(
  sq: Squelette,
  mesure: number,
  emplacement: number,
): Squelette {
  return avecMesure(sq, mesure, (m) => ({
    emplacements: m.emplacements.map((e, j) => (j === emplacement ? { accord: null } : e)),
  }));
}

/**
 * Bascule une mesure entre 1 et 2 accords : 1→2 ajoute un emplacement vide ;
 * 2→1 retire le second (on garde le premier). Au-delà de 2 (jamais atteint en
 * v1), on retombe à 1.
 */
export function basculerSubdivision(sq: Squelette, mesure: number): Squelette {
  return avecMesure(sq, mesure, (m) =>
    m.emplacements.length === 1
      ? { emplacements: [m.emplacements[0], { accord: null }] }
      : { emplacements: [m.emplacements[0]] },
  );
}

/**
 * Change la tonalité : VIDE tous les accords (les degrés d'une tonalité n'ont
 * pas de sens dans une autre) mais conserve la structure des subdivisions.
 */
export function changerTonalite(sq: Squelette, tonalite: Tonalite): Squelette {
  return {
    ...sq,
    tonalite,
    mesures: sq.mesures.map((m) => ({
      emplacements: m.emplacements.map(() => ({ accord: null })),
    })),
  };
}

/**
 * Change le niveau. En repassant au niveau 1 (diatonique seul), on vide les
 * emplacements dont l'accord est chromatique (catégorie ≠ diatonique) — ils
 * n'existent plus dans la banque. En montant au niveau 2, rien à retirer.
 */
export function changerNiveau(sq: Squelette, niveau: 1 | 2): Squelette {
  if (niveau === 2) return { ...sq, niveau };
  return {
    ...sq,
    niveau,
    mesures: sq.mesures.map((m) => ({
      emplacements: m.emplacements.map((e) =>
        e.accord && e.accord.categorie !== "diatonique" ? { accord: null } : e,
      ),
    })),
  };
}

/**
 * Les accords remplis, dans l'ordre de lecture (mesure puis emplacement), pour
 * la réalisation SATB. Les emplacements vides sont sautés.
 */
export function accordsEnSuite(
  sq: Squelette,
): Array<{ mesure: number; emplacement: number; accord: AccordPalette }> {
  const suite: Array<{ mesure: number; emplacement: number; accord: AccordPalette }> = [];
  sq.mesures.forEach((m, mesure) => {
    m.emplacements.forEach((e, emplacement) => {
      if (e.accord) suite.push({ mesure, emplacement, accord: e.accord });
    });
  });
  return suite;
}

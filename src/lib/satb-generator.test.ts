/**
 * Tests du générateur de la page /generateur-satb (satb-generator.ts).
 *
 * Verrou du chantier « mise à niveau /generateur-satb » : le générateur produit
 * ses exercices à la volée (gabarits × tonalités × doigtés). On balaie TOUS les
 * combos offerts par la page ; pour chaque combo CONSERVÉ (le générateur peut
 * renvoyer `null` = combo écarté par l'auto-filtrage), la solution recopiée à
 * l'identique doit être terminable et valoir 100 (0 erreur, 0 avertissement
 * noté hors cross_relation). On verrouille aussi le sauvetage des deux gabarits
 * jadis entièrement écartés (cycle-quintes, basse-fondamentale).
 */

import { describe, it, expect } from "vitest";
import { PROGRESSION_TEMPLATES } from "@/data/progressions-templates";
import { generateSATBExercise, type Doigte, type GeneratedExercise } from "@/lib/satb-generator";
import { validateSATB, type Measure } from "@/lib/satb-rules";

// Les 24 tonalités exposées par l'UI (GenerateurSATB → KEYS_BY_LEVEL).
const KEYS = [
  "C", "G", "F", "D", "A", "E", "Bb", "Eb", "B", "F#", "Db", "Ab",
  "Am", "Em", "Dm", "Bm", "F#m", "C#m", "Gm", "Cm", "G#m", "Ebm", "Bbm", "Fm",
];
const DOIGTES: Doigte[] = ["1", "3", "5", "7"];

interface KeptCombo {
  id: string;
  ex: GeneratedExercise;
}

// Énumération de tous les combos, une seule fois (partagée par les tests).
const kept: KeptCombo[] = [];
let enumerated = 0;
let discarded = 0;
for (const template of PROGRESSION_TEMPLATES) {
  for (const key of KEYS) {
    for (const doigte of DOIGTES) {
      enumerated++;
      const ex = generateSATBExercise(template, key, doigte);
      if (ex === null) { discarded++; continue; }
      kept.push({ id: `${template.id}·${key}·d${doigte}`, ex });
    }
  }
}

/** Le juge, joué sur la solution contre elle-même (recopie du modèle), en école. */
function judge(ex: GeneratedExercise) {
  const sol = ex.solution as unknown as Measure[];
  return validateSATB(sol, ex.tonalite, false, sol, "ecole");
}

describe("générateur /generateur-satb", () => {
  it("produit un large éventail de combos conservés", () => {
    expect(kept.length).toBeGreaterThan(1500);
  });

  it("écarte ≤ 15 % des combos (budget du chantier)", () => {
    expect(discarded / enumerated).toBeLessThanOrEqual(0.15);
  });

  it("chaque combo conservé passe le juge SANS erreur bloquante", () => {
    const offenders = kept
      .map(k => ({ id: k.id, errs: judge(k.ex).filter(e => e.severity === "error") }))
      .filter(o => o.errs.length > 0);
    expect(
      offenders.map(o => `${o.id}: ${[...new Set(o.errs.map(e => e.type))].join(",")}`),
    ).toEqual([]);
  });

  it("aucun combo conservé n'écope d'avertissement noté (hors cross_relation) — vaut 100", () => {
    const offenders = kept
      .map(k => ({
        id: k.id,
        warns: judge(k.ex).filter(e => e.severity === "warning" && e.type !== "cross_relation"),
      }))
      .filter(o => o.warns.length > 0);
    expect(
      offenders.map(o => `${o.id}: ${[...new Set(o.warns.map(w => w.type))].join(",")}`),
    ).toEqual([]);
  });

  it("les gabarits sauvés cycle-quintes et basse-fondamentale sont générables", () => {
    for (const id of ["cycle-quintes", "basse-fondamentale"]) {
      const some = kept.filter(k => k.id.startsWith(id + "·"));
      expect(some.length, id).toBeGreaterThan(0);
    }
  });

  it("les tonalités mineures portent leur vraie identité « Xm »", () => {
    const minorKept = kept.filter(k => /·[A-G]#?b?m·/.test(k.id));
    expect(minorKept.length).toBeGreaterThan(0);
    for (const k of minorKept) {
      expect(k.ex.mode, k.id).toBe("minor");
      expect(k.ex.tonalite, k.id).toMatch(/m$/);
    }
  });
});

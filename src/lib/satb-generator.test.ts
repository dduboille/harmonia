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
import { generateSATBExercise, empreinteDegre, premierAccordImpose, type Doigte, type GeneratedExercise } from "@/lib/satb-generator";
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

// ── Le doigté n'écrase pas l'inversion imposée par le gabarit (I64/II6/bII6) ────
//
// Le doigté ne gouverne la basse du 1er accord QUE si le gabarit le laisse en
// position fondamentale. Trois gabarits imposent déjà un renversement à leur 1er
// accord (I64, II6, bII6) : sur ceux-là le doigté doit rester INERTE — la basse
// suit le chiffrage, comme avant l'introduction du doigté-contrôle-la-basse.

/** Classe de hauteurs d'un nom de note (arithmétique — graphies savantes comprises). */
function pcOfName(name: string): number {
  const base: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
  const semis =
    (base[name[0]] ?? 0) +
    (name.match(/#/g) ?? []).length -
    (name.match(/b/g) ?? []).length;
  return ((semis % 12) + 12) % 12;
}

describe("premierAccordImpose", () => {
  it("ne repère QUE les gabarits dont le 1er accord est déjà renversé (I64/II6/bII6)", () => {
    const imposes = PROGRESSION_TEMPLATES.filter(premierAccordImpose).map(t => t.id).sort();
    expect(imposes).toEqual(["i64-v-i", "ii6-v-i", "napolitain"].sort());
  });

  it("IV–I64–V–I ne compte PAS : son 1er accord (IV) est fondamental, le 6/4 est sur le 2e", () => {
    const t = PROGRESSION_TEMPLATES.find(x => x.id === "iv-i64-v-i")!;
    expect(premierAccordImpose(t)).toBe(false);
  });
});

describe("doigté inerte sur les gabarits à 1er accord imposé", () => {
  const imposes = PROGRESSION_TEMPLATES.filter(premierAccordImpose);

  it("la basse du 1er accord est identique pour les 4 doigtés et vaut l'inversion du chiffrage", () => {
    for (const t of imposes) {
      let viables = 0;
      for (const key of KEYS) {
        const exs = DOIGTES.map(d => generateSATBExercise(t, key, d));
        // Doigté inerte ⇒ les 4 réalisations sont soit toutes écartées, soit
        // toutes présentes (jamais un mélange dû au doigté).
        const nNull = exs.filter(e => e === null).length;
        expect(nNull === 0 || nNull === DOIGTES.length, `${t.id}·${key}: mélange null/non-null`).toBe(true);
        if (nNull === DOIGTES.length) continue;
        viables++;

        // Basse attendue = celle du chiffrage du 1er symbole (renversement imposé).
        const attendu = empreinteDegre(t.symboles[0], key).bassPc;
        const ref = exs[0]!.solution[0].bass;
        for (const ex of exs) {
          const b = ex!.solution[0].bass;
          expect(`${b.name}${b.octave}`, `${t.id}·${key}: basse variable selon le doigté`)
            .toBe(`${ref.name}${ref.octave}`);
        }
        expect(pcOfName(ref.name), `${t.id}·${key}: basse ≠ inversion imposée`).toBe(attendu);
      }
      expect(viables, `${t.id}: aucune tonalité viable`).toBeGreaterThan(0);
    }
  });
});

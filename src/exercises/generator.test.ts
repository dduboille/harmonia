/**
 * Tests du générateur d'exercices SATB (generator.ts).
 *
 * Le générateur produit l'essentiel du catalogue (progressions transposées dans
 * les 24 tonalités × positions de soprano). Ces tests verrouillent les invariants
 * de la remédiation R1/R2 : tonalités mineures VRAIES, voicings complets, et
 * surtout — chaque solution générée doit être terminable et valoir 100 quand on la
 * recopie à l'identique (pré-invariant du verrou R8, mais restreint aux générés).
 */

import { describe, it, expect } from "vitest";
import { generateAllExercises } from "@/exercises/generator";
import { validateSATB, noteToMidi, noteName, type Measure } from "@/lib/satb-rules";

const generated = generateAllExercises();

/** Classes de hauteurs distinctes d'une mesure complète. */
function pitchClasses(measure: Measure): Set<number> {
  return new Set(
    (["soprano", "alto", "tenor", "bass"] as const).map(v => {
      const n = measure[v];
      return ((noteToMidi(noteName(n.name!), n.octave) % 12) + 12) % 12;
    }),
  );
}

/** Le juge, joué sur la solution contre elle-même (recopie du modèle). */
function judge(e: (typeof generated)[number]) {
  return validateSATB(
    e.solution as unknown as Measure[],
    e.keySignature,
    false,
    e.solution as unknown as Measure[],
    e.regles ?? "ecole",
  );
}

const MAJOR_SIGNATURES = ["C", "G", "D", "A", "E", "B", "F#", "F", "Bb", "Eb", "Ab", "Db", "Gb"];

describe("générateur SATB", () => {
  it("produit un catalogue substantiel", () => {
    expect(generated.length).toBeGreaterThan(100);
  });

  it("R1 — les exercices mineurs portent une VRAIE armure mineure « Xm »", () => {
    // Le mode se lit sur la TONALITÉ (label de clé dans le sous-titre), pas sur le
    // titre — « emprunt IV mineur » en Do MAJEUR ne doit pas être compté mineur.
    const minors = generated.filter(e => /mineur$/.test(e.subtitle ?? ""));
    expect(minors.length).toBeGreaterThan(0);
    for (const e of minors) {
      expect(e.keySignature, e.id).toMatch(/m$/);
      // …et jamais l'armure NUE du relatif majeur (le bug corrigé : Am → "C").
      expect(MAJOR_SIGNATURES, e.id).not.toContain(e.keySignature);
    }
  });

  it("R2b — chaque solution générée passe le juge SANS erreur (pré-invariant du corpus)", () => {
    const offenders = generated
      .map(e => ({ id: e.id, errs: judge(e).filter(x => x.severity === "error") }))
      .filter(o => o.errs.length > 0);
    expect(
      offenders.map(o => `${o.id}: ${[...new Set(o.errs.map(e => e.type))].join(",")}`),
    ).toEqual([]);
  });

  it("R8 (générés) — aucune solution générée n'écope d'avertissement noté (hors cross_relation)", () => {
    const offenders = generated
      .map(e => ({
        id: e.id,
        warns: judge(e).filter(x => x.severity === "warning" && x.type !== "cross_relation"),
      }))
      .filter(o => o.warns.length > 0);
    expect(
      offenders.map(o => `${o.id}: ${[...new Set(o.warns.map(w => w.type))].join(",")}`),
    ).toEqual([]);
  });

  it("R2a — aucune tétrade étiquetée n'a moins de 3 classes de hauteurs", () => {
    const tetrad = /(Maj7|m7b5|dim7|m7|7)/;
    for (const e of generated) {
      e.measures.forEach((label, i) => {
        if (!tetrad.test(label)) return;
        expect(
          pitchClasses(e.solution[i] as unknown as Measure).size,
          `${e.id} · mesure ${i + 1} (${label})`,
        ).toBeGreaterThanOrEqual(3);
      });
    }
  });

  it("R2a — la sensible de la tonalité n'est jamais doublée sur un accord de dominante", () => {
    for (const e of generated) {
      expect(
        judge(e).some(x => x.type === "doubled_leading_tone"),
        e.id,
      ).toBe(false);
    }
  });
});

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
import { validateSATB, noteToMidi, noteName, tonaliteDeSignature, type Measure } from "@/lib/satb-rules";

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

// ─── Task 4bis — déclinaison mineure diatonique ───────────────────────────────

const pcOfNote = (n: { name: string | null; octave: number }) =>
  ((noteToMidi(noteName(n.name!), n.octave) % 12) + 12) % 12;

const VOICES = ["soprano", "alto", "tenor", "bass"] as const;
const minorExercises = generated.filter(e => /m$/.test(e.keySignature));

/** Gabarits both-mode DÉCLINÉS au mineur harmonique (hors tonicisation chromatique
 *  V/V et hors gabarits mineurs-only « jazz » préexistants). */
const DECLINED_TEMPLATES = [
  "gen-i-iv-v7-i-major",
  "gen-v7-i-perfect",
  "gen-iv-i-plagal",
  "gen-v7-vi-deceptive",
  "gen-i-vi-ii-v-i",
];
const isDeclined = (id: string) => DECLINED_TEMPLATES.some(p => id.startsWith(p + "-"));

describe("générateur SATB — déclinaison mineure (Task 4bis)", () => {
  it("il existe bien des exercices mineurs pour les gabarits both-mode déclinés", () => {
    expect(minorExercises.filter(e => isDeclined(e.id)).length).toBeGreaterThan(0);
  });

  it("les accords des gabarits déclinés sont diatoniques au mineur harmonique", () => {
    // Ensemble du mineur harmonique : i, ii, III, iv, V, VI et la SENSIBLE haussée
    // (T+11). Le V7 et le iiø7 y tiennent ; la tonicisation V/V (chromatique) est
    // exclue par construction (hors DECLINED_TEMPLATES).
    const offenders: string[] = [];
    for (const e of minorExercises) {
      if (!isDeclined(e.id)) continue;
      const { tonicPc } = tonaliteDeSignature(e.keySignature);
      const harmonic = new Set([0, 2, 3, 5, 7, 8, 11].map(i => (tonicPc + i) % 12));
      for (const m of e.solution) {
        for (const v of VOICES) {
          if (!harmonic.has(pcOfNote(m[v]))) offenders.push(`${e.id}:${m[v].name}`);
        }
      }
    }
    expect([...new Set(offenders)]).toEqual([]);
  });

  it("la cadence rompue mineure contient un VI MAJEUR (T+8, triade majeure)", () => {
    const deceptive = minorExercises.filter(e => e.id.startsWith("gen-v7-vi-deceptive-"));
    expect(deceptive.length).toBeGreaterThan(0);
    for (const e of deceptive) {
      const { tonicPc } = tonaliteDeSignature(e.keySignature);
      // VI majeur = triade majeure sur le 6e degré : { T+8, T+8+4, T+8+7 }
      const viMajor = [(tonicPc + 8) % 12, (tonicPc + 8 + 4) % 12, (tonicPc + 8 + 7) % 12].sort((a, b) => a - b);
      const pcs = [...new Set(VOICES.map(v => pcOfNote(e.solution[1][v])))].sort((a, b) => a - b); // mesure VI
      expect(pcs, e.id).toEqual(viMajor);
    }
  });

  it("aucune sensible mineure n'est écrite en bémol (Ré m → Do#, pas Réb)", () => {
    const offenders: string[] = [];
    for (const e of minorExercises) {
      const { tonicPc } = tonaliteDeSignature(e.keySignature);
      const ltPc = (tonicPc + 11) % 12;
      for (const m of e.solution) {
        for (const v of VOICES) {
          const n = m[v];
          if (pcOfNote(n) === ltPc && /b$/.test(n.name ?? "")) offenders.push(`${e.id}:${n.name}`);
        }
      }
    }
    expect([...new Set(offenders)]).toEqual([]);
  });

  it("Task 4ter — le V/V (2e mesure) est une 7e de dominante fondée sur le IIe degré (T+2), en majeur ET mineur", () => {
    const vov = generated.filter(e => e.id.startsWith("gen-v-of-v-tonicization-"));
    // Doit couvrir les deux modes (majeur + mineur).
    expect(vov.some(e => /m$/.test(e.keySignature))).toBe(true);
    expect(vov.some(e => !/m$/.test(e.keySignature))).toBe(true);
    for (const e of vov) {
      const { tonicPc } = tonaliteDeSignature(e.keySignature);
      const root = (tonicPc + 2) % 12; // Ré en Do, Si en la min
      const dom7 = new Set([0, 4, 7, 10].map(i => (root + i) % 12));
      const vovChord = e.solution[1]; // mesure V/V
      // Basse sur la fondamentale (état fondamental).
      expect(pcOfNote(vovChord.bass), `${e.id} basse`).toBe(root);
      // Toutes les hauteurs appartiennent à la 7e de dominante sur T+2…
      const pcs = VOICES.map(v => pcOfNote(vovChord[v]));
      for (const p of pcs) expect(dom7.has(p), `${e.id}:${p}`).toBe(true);
      // …et les sons ESSENTIELS (fondamentale, tierce = sensible secondaire, 7e)
      // sont présents (la quinte peut être ellipsée).
      expect(pcs, `${e.id} fond.`).toContain(root);
      expect(pcs, `${e.id} tierce`).toContain((root + 4) % 12);
      expect(pcs, `${e.id} 7e`).toContain((root + 10) % 12);
    }
  });
});

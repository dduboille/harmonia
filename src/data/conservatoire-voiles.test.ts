import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  VOILES_MESURES_1_64,
  VOILES_ANALYSE,
  VOILES_ANALYSE_NARRATIVE,
} from "./conservatoire-voiles";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (fichier
// « voiles-annote.musicxml ») : Voiles de Debussy, INTÉGRALE (64 mesures), sans
// chiffrage fonctionnel — la grille nomme des collections (cf. commentaire
// d'en-tête).
const WHOLE_TONE = new Set([0, 2, 4, 6, 8, 10]); // Do Ré Mi Fa# Sol# Sib
const PENTA_BLACK = new Set([1, 3, 6, 8, 10]); // Réb Mib Solb Lab Sib

describe("VOILES_MESURES_1_64", () => {
  it("s'analyse sans erreur et couvre 64 mesures en 2/4", () => {
    const score = parseMusicXML(VOILES_MESURES_1_64);
    expect(score.signature).toBe("2/4");
    expect(score.measures).toHaveLength(64);
    expect(score.tempos[0]).toEqual({ onset: 0, bpm: 44 });
  });

  it("porte bien le titre « Voiles » (métadonnée absente du fichier source, ajoutée)", () => {
    expect(VOILES_MESURES_1_64).toContain("<work-title>Voiles</work-title>");
  });

  it("63 des 64 mesures n'utilisent que la collection par tons entiers, sauf m.31 (ornement) et m.42-46 (pentatonique)", () => {
    const score = parseMusicXML(VOILES_MESURES_1_64);
    const exceptions: number[] = [];
    for (let n = 1; n <= 64; n++) {
      const meas = score.measures.find((m) => m.numero === n)!;
      const notesIn = score.notes.filter((nt) => nt.onset >= meas.start && nt.onset < meas.start + meas.length);
      const pcs = new Set(notesIn.map((nt) => nt.midi % 12));
      const outsideWT = [...pcs].some((p) => !WHOLE_TONE.has(p));
      if (outsideWT) exceptions.push(n);
    }
    // m.31 (ornement chromatique) + m.42-46 (îlot pentatonique) = 6 mesures hors collection.
    expect(exceptions).toEqual([31, 42, 43, 44, 45, 46]);
  });

  it("mesure 31 : les seules notes étrangères aux deux collections sont Sol et Réb", () => {
    const score = parseMusicXML(VOILES_MESURES_1_64);
    const meas = score.measures.find((m) => m.numero === 31)!;
    const notesIn = score.notes.filter((n) => n.onset >= meas.start && n.onset < meas.start + meas.length);
    const pcs = new Set(notesIn.map((n) => n.midi % 12));
    const outsideWT = [...pcs].filter((p) => !WHOLE_TONE.has(p));
    expect(outsideWT.sort((a, b) => a - b)).toEqual([1, 7]); // Réb=1, Sol=7
  });

  it("mesures 42-46 : îlot pentatonique des touches noires exclusivement", () => {
    const score = parseMusicXML(VOILES_MESURES_1_64);
    for (let n = 42; n <= 46; n++) {
      const meas = score.measures.find((m) => m.numero === n)!;
      const notesIn = score.notes.filter((nt) => nt.onset >= meas.start && nt.onset < meas.start + meas.length);
      const pcs = new Set(notesIn.map((nt) => nt.midi % 12));
      expect([...pcs].every((p) => PENTA_BLACK.has(p))).toBe(true);
    }
  });

  it("la basse tient Sib de la mesure 5 à la mesure 61, puis glisse sur Fa# (m.62-63)", () => {
    const score = parseMusicXML(VOILES_MESURES_1_64);
    const bassAt = (num: number) => {
      const meas = score.measures.find((m) => m.numero === num)!;
      const notesIn = score.notes.filter((n) => n.onset < meas.start + meas.length && n.onset + n.duration > meas.start);
      return Math.min(...notesIn.map((n) => n.midi)) % 12;
    };
    for (const n of [5, 20, 40, 61]) expect(bassAt(n)).toBe(10); // Sib
    for (const n of [62, 63]) expect(bassAt(n)).toBe(6); // Fa#
  });

  it("la pièce s'achève sur une tierce Do-Mi nue, sans basse, apparaissant deux fois sur la pédale de Fa# (m.62-64)", () => {
    const score = parseMusicXML(VOILES_MESURES_1_64);
    const m62 = score.measures.find((m) => m.numero === 62)!;
    const m64 = score.measures.find((m) => m.numero === 64)!;
    const fin = m64.start + m64.length;
    const notesIn = score.notes.filter((n) => n.onset >= m62.start && n.onset < fin);
    const byOnset = new Map<number, number[]>();
    for (const n of notesIn) {
      const arr = byOnset.get(n.onset) ?? [];
      arr.push(n.midi % 12);
      byOnset.set(n.onset, arr);
    }
    const bareThirds = [...byOnset.values()].filter(
      (pcs) => new Set(pcs).size === 2 && pcs.every((p) => p === 0 || p === 4),
    );
    expect(bareThirds).toHaveLength(2);
  });

  it("VOILES_ANALYSE : fonction \"?\" sans exception, mesures triées entre 1 et 64", () => {
    expect(VOILES_ANALYSE.length).toBeGreaterThan(5);
    expect(VOILES_ANALYSE.every((m) => m.fonction === "?")).toBe(true);
    const nums = VOILES_ANALYSE.map((m) => m.numero);
    expect(nums.every((n) => n >= 1 && n <= 64)).toBe(true);
    expect(nums.every((n, i) => i === 0 || n > nums[i - 1])).toBe(true);
  });
});

describe("VOILES_ANALYSE_NARRATIVE", () => {
  it("couvre les 8 sections du parcours", () => {
    expect(VOILES_ANALYSE_NARRATIVE.sections).toHaveLength(8);
    expect(VOILES_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  // Le contenu affiché aux étudiants ne doit jamais faire référence au
  // processus de relecture (brouillon, correction...) — seul le commentaire
  // d'en-tête du fichier source garde ce journal.
  it("ne mentionne pas le processus de relecture (brouillon/correction) dans le contenu affiché", () => {
    const tousLesTextes = [
      VOILES_ANALYSE_NARRATIVE.tonalite,
      VOILES_ANALYSE_NARRATIVE.metrique,
      VOILES_ANALYSE_NARRATIVE.forme,
      ...VOILES_ANALYSE_NARRATIVE.sections.map((s) => s.texte),
      ...VOILES_ANALYSE_NARRATIVE.synthese.map((s) => s.texte),
    ].join(" ");
    expect(tousLesTextes).not.toMatch(/brouillon|corrig|Dany/i);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("VOILES_MESURES_1_64 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur (64 mesures, réparties sur plusieurs pages)", () => {
    tk.loadData(VOILES_MESURES_1_64);
    tk.renderToMIDI();
    tk.setOptions({ scale: 25, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 3000 });
    const pageCount = tk.getPageCount();
    let totalMesures = 0;
    let totalNotes = 0;
    for (let p = 1; p <= pageCount; p++) {
      const svg: string = tk.renderToSVG(p);
      totalNotes += [...svg.matchAll(/<g id="([^"]+)" class="note"/g)].length;
      totalMesures += [...svg.matchAll(/<g[^>]*class="measure"[^>]*>/g)].length;
    }
    expect(totalNotes).toBeGreaterThan(0);
    expect(totalMesures).toBe(64);
  }, 20000);

  // Pièce marquée "Dans un rythme sans rigueur" — beaucoup de changements de
  // tempo écrits (rubato). On vérifie seulement que le surlignage avance de
  // façon strictement croissante, pas un écart constant (inapproprié ici).
  it("le surlignage Verovio avance de façon strictement croissante sur toute la pièce", async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
    const frais: any = new VerovioToolkit(await creerModule());
    frais.loadData(VOILES_MESURES_1_64);
    frais.renderToMIDI();
    frais.setOptions({ scale: 25, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 3000 });
    frais.renderToSVG(1);

    let lastId: string | undefined;
    const timestamps: number[] = [];
    for (let ms = 0; ms <= 130000; ms += 50) {
      const els = frais.getElementsAtTime(ms);
      const id = els.measure;
      if (id && id !== lastId) {
        timestamps.push(ms);
        lastId = id;
      }
    }
    expect(timestamps.length).toBeGreaterThanOrEqual(40);
    for (let i = 1; i < timestamps.length; i++) expect(timestamps[i]).toBeGreaterThan(timestamps[i - 1]);
  }, 20000);
});

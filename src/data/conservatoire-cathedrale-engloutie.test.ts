import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  CATHEDRALE_ENGLOUTIE_MESURES_1_89,
  CATHEDRALE_ENGLOUTIE_ANALYSE,
  CATHEDRALE_ENGLOUTIE_ANALYSE_NARRATIVE,
} from "./conservatoire-cathedrale-engloutie";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (fichier
// « cathedrale-engloutie-annote.musicxml », transcription créditée « arranger:
// Ben Macarell ») : La Cathédrale engloutie de Debussy, INTÉGRALE (89 mesures),
// avec étiquettes descriptives (pas de chiffrage fonctionnel systématique —
// cf. commentaire d'en-tête) en <direction><words>.
describe("CATHEDRALE_ENGLOUTIE_MESURES_1_89", () => {
  it("s'analyse sans erreur et couvre 89 mesures en 6/4", () => {
    const score = parseMusicXML(CATHEDRALE_ENGLOUTIE_MESURES_1_89);
    expect(score.signature).toBe("6/4");
    expect(score.measures).toHaveLength(89);
    expect(score.tempos[0]).toEqual({ onset: 0, bpm: 60 });
  });

  it("mesure 1 : accord de cloches pentatonique {Sol-La-Si-Ré-Mi}, sans tierce, sur six octaves (Sol1-Ré7)", () => {
    const score = parseMusicXML(CATHEDRALE_ENGLOUTIE_MESURES_1_89);
    const m1 = score.measures.find((m) => m.numero === 1)!;
    const notes = score.notes.filter((n) => n.onset >= m1.start && n.onset < m1.start + m1.length);
    const classes = new Set(notes.map((n) => n.midi % 12));
    // Sol=7, La=9, Si=11, Ré=2, Mi=4 — et ni Do(0) ni Fa(5), aucune tierce structurelle.
    expect([...classes].sort((a, b) => a - b)).toEqual([2, 4, 7, 9, 11]);
    const midis = notes.map((n) => n.midi);
    expect(Math.min(...midis)).toBe(31); // Sol1 (G1)
    expect(Math.max(...midis)).toBe(98); // Ré7 (D7)
  });

  it("mesures 62-64 : la seule cadence fonctionnelle (V7-I de Sol#), Fa## et Si# dûment épelés", () => {
    const zone = CATHEDRALE_ENGLOUTIE_MESURES_1_89.slice(
      CATHEDRALE_ENGLOUTIE_MESURES_1_89.indexOf('<measure number="62"'),
      CATHEDRALE_ENGLOUTIE_MESURES_1_89.indexOf('<measure number="65"'),
    );
    expect(zone).toMatch(/<step>F<\/step>\s*<alter>2<\/alter>/); // Fa##
    expect(zone).toMatch(/<step>B<\/step>\s*<alter>1<\/alter>/); // Si#
    expect(zone).toContain("V7 de Sol#");
    expect(zone).toContain("cadence la plus fonctionnelle");
  });

  it("mesures 88-89 : accord final Do majeur pur (Do-Mi-Sol), la tierce enfin présente", () => {
    const score = parseMusicXML(CATHEDRALE_ENGLOUTIE_MESURES_1_89);
    const m88 = score.measures.find((m) => m.numero === 88)!;
    const m89 = score.measures.find((m) => m.numero === 89)!;
    const fin = m89.start + m89.length;
    const notes = score.notes.filter((n) => n.onset < fin && n.onset + n.duration > m88.start);
    const classes = new Set(notes.map((n) => n.midi % 12));
    expect([...classes].sort((a, b) => a - b)).toEqual([0, 4, 7]); // Do, Mi, Sol
  });

  it("le choral (m.28-41) ne contient aucune balise <harmony> de dominante réelle — organum parallèle uniquement", () => {
    const choral = CATHEDRALE_ENGLOUTIE_MESURES_1_89.slice(
      CATHEDRALE_ENGLOUTIE_MESURES_1_89.indexOf('<measure number="28"'),
      CATHEDRALE_ENGLOUTIE_MESURES_1_89.indexOf('<measure number="42"'),
    );
    expect(choral).toContain("♭VII");
    expect(choral).not.toContain("<kind text=\"7\">dominant</kind>");
  });

  it("CATHEDRALE_ENGLOUTIE_ANALYSE couvre des mesures triées entre 1 et 89, fonction \"?\" sauf la cadence de Sol#", () => {
    expect(CATHEDRALE_ENGLOUTIE_ANALYSE.length).toBeGreaterThan(20);
    const nums = CATHEDRALE_ENGLOUTIE_ANALYSE.map((m) => m.numero);
    expect(nums.every((n) => n >= 1 && n <= 89)).toBe(true);
    expect(nums.every((n, i) => i === 0 || n > nums[i - 1])).toBe(true);
    const fonctionsReelles = CATHEDRALE_ENGLOUTIE_ANALYSE.filter((m) => m.fonction !== "?");
    // Seules la cadence de Sol# (62-64) et l'accord de conclusion (88) portent une fonction réelle.
    expect(fonctionsReelles.map((m) => m.numero)).toEqual([62, 64, 88]);
  });
});

describe("CATHEDRALE_ENGLOUTIE_ANALYSE_NARRATIVE", () => {
  it("couvre les 7 sections de l'arche narrative (cloches → émersion → choral → engloutissement → médiane → écho → conclusion)", () => {
    expect(CATHEDRALE_ENGLOUTIE_ANALYSE_NARRATIVE.sections).toHaveLength(7);
    expect(CATHEDRALE_ENGLOUTIE_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  // Le contenu affiché aux étudiants ne doit jamais faire référence au
  // processus de relecture (brouillon, correction...) — seul le commentaire
  // d'en-tête du fichier source garde ce journal.
  it("ne mentionne pas le processus de relecture (brouillon/correction) dans le contenu affiché", () => {
    const tousLesTextes = [
      CATHEDRALE_ENGLOUTIE_ANALYSE_NARRATIVE.tonalite,
      CATHEDRALE_ENGLOUTIE_ANALYSE_NARRATIVE.metrique,
      CATHEDRALE_ENGLOUTIE_ANALYSE_NARRATIVE.forme,
      ...CATHEDRALE_ENGLOUTIE_ANALYSE_NARRATIVE.sections.map((s) => s.texte),
      ...CATHEDRALE_ENGLOUTIE_ANALYSE_NARRATIVE.synthese.map((s) => s.texte),
    ].join(" ");
    expect(tousLesTextes).not.toMatch(/brouillon|corrig|Dany/i);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("CATHEDRALE_ENGLOUTIE_MESURES_1_89 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur (89 mesures, réparties sur plusieurs pages)", () => {
    tk.loadData(CATHEDRALE_ENGLOUTIE_MESURES_1_89);
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
    expect(totalMesures).toBe(89);
  }, 20000);

  it("le surlignage Verovio avance de ~6000ms par mesure sur le premier segment (60bpm, 6/4, avant le 1er changement de tempo à m.22)", async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
    const frais: any = new VerovioToolkit(await creerModule());
    frais.loadData(CATHEDRALE_ENGLOUTIE_MESURES_1_89);
    frais.renderToMIDI();
    frais.setOptions({ scale: 25, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 3000 });
    frais.renderToSVG(1);

    let lastId: string | undefined;
    const ecarts: number[] = [];
    let lastMs = 0;
    for (let ms = 0; ms <= 96000; ms += 25) {
      const els = frais.getElementsAtTime(ms);
      const id = els.measure;
      if (id && id !== lastId) {
        if (lastId !== undefined) ecarts.push(ms - lastMs);
        lastId = id;
        lastMs = ms;
      }
    }
    expect(ecarts.length).toBeGreaterThanOrEqual(15);
    for (const e of ecarts) expect(e).toBeCloseTo((6 / 60) * 60000, -2);
  }, 20000);
});

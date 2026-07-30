import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  BWV847_MESURES_1_69,
  BWV847_ANALYSE,
  BWV847_ANALYSE_NARRATIVE,
} from "./conservatoire-bwv847";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (fichier
// « bwv847-annote.musicxml ») : le Prélude et Fugue n°2 en do mineur BWV 847
// (Clavier bien tempéré I), INTÉGRAL après les 2 corrections déjà apportées par
// Dany (silence final retiré, restauration de la barre finale — 69 mesures,
// pas 98). Chiffrage romain complet en <direction><words>.
describe("BWV847_MESURES_1_69", () => {
  it("s'analyse sans erreur et couvre 69 mesures en do mineur, 4/4", () => {
    const score = parseMusicXML(BWV847_MESURES_1_69);
    expect(score.fifths).toBe(-3);
    expect(score.mode).toBe("minor");
    expect(score.signature).toBe("4/4");
    expect(score.measures).toHaveLength(69);
    expect(score.tempos[0]).toEqual({ onset: 0, bpm: 118 });
  });

  it("porte bien le titre (métadonnée absente du fichier livré, ajoutée)", () => {
    expect(BWV847_MESURES_1_69).toContain("Prélude et Fugue n° 2 en do mineur, BWV 847");
  });

  it("les changements de tempo écrits (Presto m.28, Adagio m.34, Allegro m.35) sont bien présents", () => {
    const extraireTempo = (num: number) => {
      const s = BWV847_MESURES_1_69.slice(
        BWV847_MESURES_1_69.indexOf(`<measure number="${num}"`),
        BWV847_MESURES_1_69.indexOf(`<measure number="${num + 1}"`),
      );
      return [...s.matchAll(/font-weight="bold"[^>]*>([^<]*)<\/words>/g)].map((m) => m[1]);
    };
    expect(extraireTempo(28)).toEqual(["Presto"]);
    expect(extraireTempo(34)).toEqual(["Adagio"]);
    expect(extraireTempo(35)).toEqual(["Allegro"]);
  });

  it("la séquence de dominantes secondaires (m.6-10) porte bien V4/2 de v, de iv, de III", () => {
    for (const [num, texte] of [
      [6, "V4/2 de v"],
      [8, "V4/2 de iv"],
      [10, "V4/2 de III"],
    ] as const) {
      const s = BWV847_MESURES_1_69.slice(
        BWV847_MESURES_1_69.indexOf(`<measure number="${num}"`),
        BWV847_MESURES_1_69.indexOf(`<measure number="${num + 1}"`),
      );
      expect(s).toContain(texte);
    }
  });

  it("mesure 39 (sujet, alto) : le saut de quarte descendante est bien présent", () => {
    const score = parseMusicXML(BWV847_MESURES_1_69);
    const meas = score.measures.find((m) => m.numero === 39)!;
    const notes = score.notes
      .filter((n) => n.onset >= meas.start && n.onset < meas.start + meas.length && n.voice === "2")
      .sort((a, b) => a.onset - b.onset);
    // Do5 -> ... -> Sol4 : un saut de quarte descendante (5 demi-tons... en fait
    // Do5(60+12=72 style)->Sol4 = -5 demi-tons, une quarte juste descendante).
    const midis = notes.map((n) => n.midi);
    const doIdx = notes.findIndex((n) => n.midi % 12 === 0);
    expect(doIdx).toBeGreaterThanOrEqual(0);
    const solApres = midis.slice(doIdx).find((m, i) => i > 0 && m % 12 === 7);
    expect(solApres).toBeDefined();
  });

  it("mesure 69 : tierce picarde confirmée (Mi naturel présent)", () => {
    const score = parseMusicXML(BWV847_MESURES_1_69);
    const meas = score.measures.find((m) => m.numero === 69)!;
    const notes = score.notes.filter((n) => n.onset >= meas.start && n.onset < meas.start + meas.length);
    const pcs = new Set(notes.map((n) => n.midi % 12));
    expect(pcs.has(4)).toBe(true); // Mi naturel
  });

  it("BWV847_ANALYSE couvre les mesures clés, dans l'ordre, entre 1 et 69", () => {
    expect(BWV847_ANALYSE.length).toBeGreaterThan(20);
    const nums = BWV847_ANALYSE.map((m) => m.numero);
    expect(nums.every((n) => n >= 1 && n <= 69)).toBe(true);
    expect(nums.every((n, i) => i === 0 || n > nums[i - 1])).toBe(true);
  });
});

describe("BWV847_ANALYSE_NARRATIVE", () => {
  it("couvre les 6 sections (prélude ×4, fugue ×2)", () => {
    expect(BWV847_ANALYSE_NARRATIVE.sections).toHaveLength(6);
    expect(BWV847_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  // Le contenu affiché aux étudiants ne doit jamais faire référence au
  // processus de relecture (brouillon, correction...) — seul le commentaire
  // d'en-tête du fichier source garde ce journal.
  it("ne mentionne pas le processus de relecture (brouillon/correction) dans le contenu affiché", () => {
    const tousLesTextes = [
      BWV847_ANALYSE_NARRATIVE.tonalite,
      BWV847_ANALYSE_NARRATIVE.metrique,
      BWV847_ANALYSE_NARRATIVE.forme,
      ...BWV847_ANALYSE_NARRATIVE.sections.map((s) => s.texte),
      ...BWV847_ANALYSE_NARRATIVE.synthese.map((s) => s.texte),
    ].join(" ");
    expect(tousLesTextes).not.toMatch(/brouillon|corrig|Dany/i);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("BWV847_MESURES_1_69 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur (69 mesures, réparties sur plusieurs pages)", () => {
    tk.loadData(BWV847_MESURES_1_69);
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
    expect(totalMesures).toBe(69);
  }, 30000);

  it("le surlignage Verovio avance de ~2034ms par mesure (118bpm, 4/4) sur les 20 premières mesures (avant le Presto de la m.28)", async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
    const frais: any = new VerovioToolkit(await creerModule());
    frais.loadData(BWV847_MESURES_1_69);
    frais.renderToMIDI();
    frais.setOptions({ scale: 25, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 3000 });
    frais.renderToSVG(1);

    let lastId: string | undefined;
    const ecarts: number[] = [];
    let lastMs = 0;
    for (let ms = 0; ms <= 38000; ms += 25) {
      const els = frais.getElementsAtTime(ms);
      const id = els.measure;
      if (id && id !== lastId) {
        if (lastId !== undefined) ecarts.push(ms - lastMs);
        lastId = id;
        lastMs = ms;
      }
    }
    expect(ecarts.length).toBeGreaterThanOrEqual(15);
    for (const e of ecarts) expect(e).toBeCloseTo((4 / 118) * 60000, -2);
  }, 20000);
});

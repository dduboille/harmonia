import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  GIANT_STEPS_MESURES_1_98,
  GIANT_STEPS_ANALYSE,
  GIANT_STEPS_ANALYSE_NARRATIVE,
} from "./conservatoire-giant-steps";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (fichier
// « giant-steps-74-annote.musicxml ») : Giant Steps de Coltrane, arrangement
// piano en 7/4 de Jacob Koller, INTÉGRAL (98 mesures). Fichier SANS chiffrage
// préexistant — les changes ont été reconstitués depuis les notes réelles.
describe("GIANT_STEPS_MESURES_1_98", () => {
  it("s'analyse sans erreur et couvre 98 mesures en 7/4", () => {
    const score = parseMusicXML(GIANT_STEPS_MESURES_1_98);
    expect(score.signature).toBe("7/4");
    expect(score.measures).toHaveLength(98);
    expect(score.tempos[0]).toEqual({ onset: 0, bpm: 242 });
  });

  it("ne porte aucune balise <harmony> préexistante (changes reconstitués depuis les notes)", () => {
    expect((GIANT_STEPS_MESURES_1_98.match(/<harmony /g) || [])).toHaveLength(0);
  });

  it("la tête (m.9-16) porte le chiffrage exact du cycle, mesure par mesure", () => {
    const extraireMots = (num: number) => {
      const s = GIANT_STEPS_MESURES_1_98.slice(
        GIANT_STEPS_MESURES_1_98.indexOf(`<measure number="${num}"`),
        GIANT_STEPS_MESURES_1_98.indexOf(`<measure number="${num + 1}"`),
      );
      return [...s.matchAll(/<words font-style="italic" font-size="10">([^<]*)<\/words>/g)].map((m) => m[1]);
    };
    expect(extraireMots(9)).toEqual(["TÊTE — 2 mesures 4/4 par mesure de 7/4 : B∆–D7 · G∆–B♭7"]);
    expect(extraireMots(16)[0]).toContain("E♭∆ · C#m7–F#7");
  });

  it("les trois centres tonals (Si, Sol, Mib) forment une triade augmentée (intervalles égaux)", () => {
    const B = 11, G = 7, Eb = 3;
    expect((B - G + 12) % 12).toBe(4);
    expect((G - Eb + 12) % 12).toBe(4);
    expect((Eb - B + 12) % 12).toBe(4);
  });

  it("mesure 96 : les 7 classes de hauteurs du Mi lydien sont toutes présentes", () => {
    const score = parseMusicXML(GIANT_STEPS_MESURES_1_98);
    const meas = score.measures.find((m) => m.numero === 96)!;
    const notesIn = score.notes.filter((n) => n.onset >= meas.start && n.onset < meas.start + meas.length);
    const pcs = new Set(notesIn.map((n) => n.midi % 12));
    // Mi lydien : Mi(4) Fa#(6) Sol#(8) La#(10) Si(11) Do#(1) Ré#(3)
    for (const p of [4, 6, 8, 10, 11, 1, 3]) expect(pcs.has(p)).toBe(true);
  });

  it("la pièce s'achève sur un Mi nu (mesure 98, une seule classe de hauteur)", () => {
    const score = parseMusicXML(GIANT_STEPS_MESURES_1_98);
    const meas = score.measures.find((m) => m.numero === 98)!;
    const notesIn = score.notes.filter((n) => n.onset >= meas.start && n.onset < meas.start + meas.length);
    const pcs = new Set(notesIn.map((n) => n.midi % 12));
    expect([...pcs]).toEqual([4]); // Mi
  });

  it("les didascalies du transcripteur sont conservées", () => {
    for (const mot of ["Almost there!", "Just go crazy", "Calm down"]) {
      expect(GIANT_STEPS_MESURES_1_98).toContain(mot);
    }
  });

  it("GIANT_STEPS_ANALYSE couvre les mesures clés, dans l'ordre, entre 1 et 98", () => {
    expect(GIANT_STEPS_ANALYSE.length).toBeGreaterThan(10);
    const nums = GIANT_STEPS_ANALYSE.map((m) => m.numero);
    expect(nums.every((n) => n >= 1 && n <= 98)).toBe(true);
    expect(nums.every((n, i) => i === 0 || n > nums[i - 1])).toBe(true);
    // Les 8 mesures de la tête portent toutes fonction "T" (arrivée sur une tonique locale).
    const tete = GIANT_STEPS_ANALYSE.filter((m) => m.numero >= 9 && m.numero <= 16);
    expect(tete).toHaveLength(8);
    expect(tete.every((m) => m.fonction === "T")).toBe(true);
  });
});

describe("GIANT_STEPS_ANALYSE_NARRATIVE", () => {
  it("couvre les 5 sections (7/4, tête, Coltrane changes, solo, coda)", () => {
    expect(GIANT_STEPS_ANALYSE_NARRATIVE.sections).toHaveLength(5);
    expect(GIANT_STEPS_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  // Le contenu affiché aux étudiants ne doit jamais faire référence au
  // processus de relecture (brouillon, correction...) — seul le commentaire
  // d'en-tête du fichier source garde ce journal.
  it("ne mentionne pas le processus de relecture (brouillon/correction) dans le contenu affiché", () => {
    const tousLesTextes = [
      GIANT_STEPS_ANALYSE_NARRATIVE.tonalite,
      GIANT_STEPS_ANALYSE_NARRATIVE.metrique,
      GIANT_STEPS_ANALYSE_NARRATIVE.forme,
      ...GIANT_STEPS_ANALYSE_NARRATIVE.sections.map((s) => s.texte),
      ...GIANT_STEPS_ANALYSE_NARRATIVE.synthese.map((s) => s.texte),
    ].join(" ");
    expect(tousLesTextes).not.toMatch(/brouillon|corrig|Dany/i);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("GIANT_STEPS_MESURES_1_98 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur (98 mesures, réparties sur plusieurs pages)", () => {
    tk.loadData(GIANT_STEPS_MESURES_1_98);
    tk.renderToMIDI();
    tk.setOptions({ scale: 20, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 3000 });
    const pageCount = tk.getPageCount();
    let totalMesures = 0;
    let totalNotes = 0;
    for (let p = 1; p <= pageCount; p++) {
      const svg: string = tk.renderToSVG(p);
      totalNotes += [...svg.matchAll(/<g id="([^"]+)" class="note"/g)].length;
      totalMesures += [...svg.matchAll(/<g[^>]*class="measure"[^>]*>/g)].length;
    }
    expect(totalNotes).toBeGreaterThan(0);
    expect(totalMesures).toBe(98);
  }, 30000);

  it("le surlignage Verovio avance de ~1735ms par mesure (242bpm, 7 temps) sur les 20 premières mesures", async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
    const frais: any = new VerovioToolkit(await creerModule());
    frais.loadData(GIANT_STEPS_MESURES_1_98);
    frais.renderToMIDI();
    frais.setOptions({ scale: 20, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 3000 });
    frais.renderToSVG(1);

    let lastId: string | undefined;
    const ecarts: number[] = [];
    let lastMs = 0;
    for (let ms = 0; ms <= 35000; ms += 25) {
      const els = frais.getElementsAtTime(ms);
      const id = els.measure;
      if (id && id !== lastId) {
        if (lastId !== undefined) ecarts.push(ms - lastMs);
        lastId = id;
        lastMs = ms;
      }
    }
    expect(ecarts.length).toBeGreaterThanOrEqual(15);
    for (const e of ecarts) expect(e).toBeCloseTo((7 / 242) * 60000, -2);
  }, 20000);
});

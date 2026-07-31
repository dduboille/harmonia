import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  HAYDN94_MESURES_1_148,
  HAYDN94_ANALYSE,
  HAYDN94_ANALYSE_NARRATIVE,
} from "./conservatoire-haydn94";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (fichier
// « haydn94-annote.musicxml ») : Haydn, Symphonie n°94 « La Surprise », 2e
// mouvement, 148 mesures, avec 5 balises <harmony> aux points structurels clés.
describe("HAYDN94_MESURES_1_148", () => {
  it("s'analyse sans erreur et couvre 148 mesures en Do majeur, 2/4", () => {
    const score = parseMusicXML(HAYDN94_MESURES_1_148);
    expect(score.fifths).toBe(0);
    expect(score.mode).toBe("major");
    expect(score.signature).toBe("2/4");
    expect(score.measures).toHaveLength(148);
  });

  it("tempo 64bpm puis 58bpm, le changement tombant pile au début de la coda (m.135)", () => {
    const score = parseMusicXML(HAYDN94_MESURES_1_148);
    expect(score.tempos).toEqual([
      { onset: 0, bpm: 64 },
      { onset: 205824, bpm: 58 }, // 134 mesures pleines de 2/4 (768 ticks/noire)
    ]);
    const m135 = score.measures.find((m) => m.numero === 135)!;
    expect(m135.start).toBe(205824);
  });

  it("2086 notes retenues après fusion des liaisons (2232 <note> bruts, 129 silences, 1 ornement, 13 liaisons fusionnées)", () => {
    const score = parseMusicXML(HAYDN94_MESURES_1_148);
    expect(score.notes).toHaveLength(2086);
  });

  it("porte 5 balises <harmony> (Do I, Sol V, Do m, Sol7, Do I)", () => {
    expect((HAYDN94_MESURES_1_148.match(/<harmony /g) || [])).toHaveLength(5);
  });

  it("mesure 1 : arpège Do-Mi à la mélodie sur basse Do (le thème)", () => {
    const score = parseMusicXML(HAYDN94_MESURES_1_148);
    const m1 = score.measures.find((m) => m.numero === 1)!;
    const notes = score.notes
      .filter((n) => n.onset >= m1.start && n.onset < m1.start + m1.length)
      .sort((a, b) => a.onset - b.onset);
    expect(notes.some((n) => n.pc === 0 && n.octave <= 3)).toBe(true); // Do à la basse
    expect(notes.some((n) => n.pc === 4)).toBe(true); // Mi à la mélodie
  });

  it("mesure 16 (LA SURPRISE) : accord de Sol majeur de Sol2 à Sol5", () => {
    const score = parseMusicXML(HAYDN94_MESURES_1_148);
    const m16 = score.measures.find((m) => m.numero === 16)!;
    const notes = score.notes.filter((n) => n.onset >= m16.start && n.onset < m16.start + m16.length);
    const midis = notes.map((n) => n.midi);
    expect(Math.min(...midis)).toBe(43); // Sol2
    expect(Math.max(...midis)).toBe(79); // Sol5
    expect(new Set(notes.map((n) => n.pc))).toEqual(new Set([7, 11, 2])); // Sol-Si-Ré, aucune note étrangère
  });

  it("mesure 140 : le Sol7 complet — Ré4/Fa4 tenus depuis la mesure 139 (<tie>), Sol/Si frappés à neuf", () => {
    const score = parseMusicXML(HAYDN94_MESURES_1_148);
    const m140 = score.measures.find((m) => m.numero === 140)!;
    // Notes SONNANTES pendant la mesure 140 (attaquées ici OU tenues depuis avant).
    const notes = score.notes.filter(
      (n) => n.onset < m140.start + m140.length && n.onset + n.duration > m140.start
    );
    const classes = new Set(notes.map((n) => n.pc));
    expect(classes.has(7)).toBe(true);  // Sol
    expect(classes.has(11)).toBe(true); // Si
    expect(classes.has(2)).toBe(true);  // Ré (tenu depuis m.139)
    expect(classes.has(5)).toBe(true);  // Fa (tenu depuis m.139) — la 7e du Sol7
  });

  it("HAYDN94_ANALYSE : repères croissants, tous dans [1, 148]", () => {
    const nums = HAYDN94_ANALYSE.map((m) => m.numero);
    expect(nums).toEqual([...nums].sort((a, b) => a - b));
    for (const n of nums) {
      expect(n).toBeGreaterThanOrEqual(1);
      expect(n).toBeLessThanOrEqual(148);
    }
  });

  it("les repères de structure de Dany sont bien présents dans le fichier (<direction><words>)", () => {
    expect(HAYDN94_MESURES_1_148).toContain("LA SURPRISE");
    expect(HAYDN94_MESURES_1_148).toContain("VARIATION II en UT MINEUR");
    expect(HAYDN94_MESURES_1_148).toContain("point d'orgue");
    expect(HAYDN94_MESURES_1_148).toContain("G7 complet");
  });
});

describe("HAYDN94_ANALYSE_NARRATIVE", () => {
  it("couvre les 8 sections (thème, reprise/surprise, B, 4 variations, coda)", () => {
    expect(HAYDN94_ANALYSE_NARRATIVE.sections).toHaveLength(8);
    expect(HAYDN94_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  it("ne mentionne pas le processus de relecture (brouillon/correction) dans le contenu affiché", () => {
    const tousLesTextes = [
      HAYDN94_ANALYSE_NARRATIVE.tonalite,
      HAYDN94_ANALYSE_NARRATIVE.metrique,
      HAYDN94_ANALYSE_NARRATIVE.forme,
      ...HAYDN94_ANALYSE_NARRATIVE.sections.map((s) => s.texte),
      ...HAYDN94_ANALYSE_NARRATIVE.synthese.map((s) => s.texte),
    ].join(" ");
    expect(tousLesTextes).not.toMatch(/brouillon|corrig|Dany/i);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("HAYDN94_MESURES_1_148 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur (148 mesures, réparties sur plusieurs pages)", () => {
    tk.loadData(HAYDN94_MESURES_1_148);
    tk.renderToMIDI();
    tk.setOptions({ scale: 30, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 3000 });
    const pageCount = tk.getPageCount();
    let totalMesures = 0;
    let totalNotes = 0;
    for (let p = 1; p <= pageCount; p++) {
      const svg: string = tk.renderToSVG(p);
      totalNotes += [...svg.matchAll(/<g id="([^"]+)" class="note"/g)].length;
      totalMesures += [...svg.matchAll(/<g[^>]*class="measure"[^>]*>/g)].length;
    }
    expect(totalNotes).toBeGreaterThan(0);
    expect(totalMesures).toBe(148);
  });

  it("le surlignage Verovio avance de ~1875ms par mesure pendant le thème (Andante, 64bpm, 2/4)", async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
    const frais: any = new VerovioToolkit(await creerModule());
    frais.loadData(HAYDN94_MESURES_1_148);
    frais.renderToMIDI();
    frais.setOptions({ scale: 30, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 3000 });
    frais.renderToSVG(1);

    let lastId: string | undefined;
    const ecarts: number[] = [];
    let lastMs = 0;
    // Le thème (m.1-16) dure 16 mesures à 64bpm : (2/64)*60000 = 1875ms/mesure.
    for (let ms = 0; ms <= 25000; ms += 25) {
      const els = frais.getElementsAtTime(ms);
      const id = els.measure;
      if (id && id !== lastId) {
        if (lastId !== undefined) ecarts.push(ms - lastMs);
        lastId = id;
        lastMs = ms;
      }
    }
    expect(ecarts.length).toBeGreaterThanOrEqual(8);
    for (const e of ecarts) expect(e).toBeCloseTo((2 / 64) * 60000, -2);
  }, 20000);
});

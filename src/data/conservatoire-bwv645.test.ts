import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  BWV645_MESURES_1_54,
  BWV645_ANALYSE,
  BWV645_ANALYSE_NARRATIVE,
} from "./conservatoire-bwv645";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (export
// MuseScore Studio, fichier « bwv645-annote.musicxml ») : le choral BWV 645
// « Wachet auf » (1er des Chorals Schübler), transcription pour piano dans la
// lignée de Kempff, INTÉGRAL (54 mesures), avec <harmony> et chiffrage romain
// complet en <direction><words> + marqueurs « ▸ CF ».
describe("BWV645_MESURES_1_54", () => {
  it("s'analyse sans erreur et couvre 54 mesures en Mib majeur, 4/4", () => {
    const score = parseMusicXML(BWV645_MESURES_1_54);
    expect(score.fifths).toBe(-3);
    expect(score.mode).toBe("major");
    expect(score.signature).toBe("4/4");
    expect(score.measures).toHaveLength(54);
    expect(score.tempos[0]).toEqual({ onset: 0, bpm: 68 });
  });

  it("ne contient aucune barre de reprise (le Stollen n'est joué qu'une fois)", () => {
    expect(BWV645_MESURES_1_54).not.toContain("<repeat ");
  });

  it("porte 8 marqueurs de cantus firmus « ▸ CF »", () => {
    expect((BWV645_MESURES_1_54.match(/▸ CF/g) || [])).toHaveLength(8);
  });

  it("l'entrée du ténor (m.14) porte l'accord vi7 (Do m7) sous « Wachet auf »", () => {
    const m14 = BWV645_MESURES_1_54.slice(
      BWV645_MESURES_1_54.indexOf('<measure number="14"'),
      BWV645_MESURES_1_54.indexOf('<measure number="15"'),
    );
    expect(m14).toContain("<root-step>C</root-step>");
    expect(m14).toContain("minor-seventh");
    expect(m14).toContain("Wachet auf");
  });

  it("le climax (m.47-49) culmine exactement sur Fa6 (register pianistique, pas organistique)", () => {
    const score = parseMusicXML(BWV645_MESURES_1_54);
    const start = score.measures.find((m) => m.numero === 47)!.start;
    const endMeasure = score.measures.find((m) => m.numero === 49)!;
    const end = endMeasure.start + endMeasure.length;
    const notesIn = score.notes.filter((n) => n.onset >= start && n.onset < end);
    const maxMidi = Math.max(...notesIn.map((n) => n.midi));
    expect(maxMidi).toBe(89); // F6
  });

  it("les deux excursions modales de l'Abgesang sont bien chiffrées (ut mineur m.34-37, sol mineur m.40-43)", () => {
    const m34 = BWV645_MESURES_1_54.slice(
      BWV645_MESURES_1_54.indexOf('<measure number="34"'),
      BWV645_MESURES_1_54.indexOf('<measure number="35"'),
    );
    expect(m34).toContain("c : V6");
    const m43 = BWV645_MESURES_1_54.slice(
      BWV645_MESURES_1_54.indexOf('<measure number="43"'),
      BWV645_MESURES_1_54.indexOf('<measure number="44"'),
    );
    expect(m43).toContain("i (cad.)");
  });

  it("R2 (m.25-30) réplique R1 (m.8-13), le fichier l'annote lui-même", () => {
    const m25 = BWV645_MESURES_1_54.slice(
      BWV645_MESURES_1_54.indexOf('<measure number="25"'),
      BWV645_MESURES_1_54.indexOf('<measure number="26"'),
    );
    expect(m25).toContain("ritournelle R2 (= m. 8");
  });

  it("BWV645_ANALYSE couvre 44 mesures porteuses de chiffrage, dans l'ordre, entre 1 et 54", () => {
    expect(BWV645_ANALYSE).toHaveLength(44);
    const nums = BWV645_ANALYSE.map((m) => m.numero);
    expect(nums.every((n) => n >= 1 && n <= 54)).toBe(true);
    expect(nums.every((n, i) => i === 0 || n > nums[i - 1])).toBe(true);
  });
});

describe("BWV645_ANALYSE_NARRATIVE", () => {
  it("couvre les 6 grandes sections (ritournelle, Stollen×2, R2, Abgesang, climax/fin)", () => {
    expect(BWV645_ANALYSE_NARRATIVE.sections).toHaveLength(6);
    expect(BWV645_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  // Le contenu affiché aux étudiants ne doit jamais faire référence au
  // processus de relecture (brouillon, correction...) — seul le commentaire
  // d'en-tête du fichier source garde ce journal.
  it("ne mentionne pas le processus de relecture (brouillon/correction) dans le contenu affiché", () => {
    const tousLesTextes = [
      BWV645_ANALYSE_NARRATIVE.tonalite,
      BWV645_ANALYSE_NARRATIVE.metrique,
      BWV645_ANALYSE_NARRATIVE.forme,
      ...BWV645_ANALYSE_NARRATIVE.sections.map((s) => s.texte),
      ...BWV645_ANALYSE_NARRATIVE.synthese.map((s) => s.texte),
    ].join(" ");
    expect(tousLesTextes).not.toMatch(/brouillon|corrig|Dany/i);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("BWV645_MESURES_1_54 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur (54 mesures, réparties sur plusieurs pages)", () => {
    tk.loadData(BWV645_MESURES_1_54);
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
    expect(totalMesures).toBe(54);
  }, 20000);

  it("le surlignage Verovio avance de ~3529ms par mesure (68bpm à la noire, 4/4)", async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
    const frais: any = new VerovioToolkit(await creerModule());
    frais.loadData(BWV645_MESURES_1_54);
    frais.renderToMIDI();
    frais.setOptions({ scale: 30, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 3000 });
    frais.renderToSVG(1);

    let lastId: string | undefined;
    const ecarts: number[] = [];
    let lastMs = 0;
    for (let ms = 0; ms <= 200000; ms += 25) {
      const els = frais.getElementsAtTime(ms);
      const id = els.measure;
      if (id && id !== lastId) {
        if (lastId !== undefined) ecarts.push(ms - lastMs);
        lastId = id;
        lastMs = ms;
      }
    }
    expect(ecarts.length).toBeGreaterThanOrEqual(50);
    for (const e of ecarts) expect(e).toBeCloseTo((4 / 68) * 60000, -2);
  }, 20000);
});

import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  PALESTRINA_AGNUS_MESURES_1_56,
  PALESTRINA_AGNUS_ANALYSE,
  PALESTRINA_AGNUS_ANALYSE_NARRATIVE,
} from "./conservatoire-palestrina-agnus";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (fichier
// « palestrina-agnus-annote.musicxml ») : Palestrina, Missa Brevis (1570),
// Agnus Dei II, 56 mesures à 4 voix (SATB séparées), avec 5 balises <harmony>
// aux clausules structurelles.
describe("PALESTRINA_AGNUS_MESURES_1_56", () => {
  it("s'analyse sans erreur et couvre 56 mesures, 4/4, armure à 3 bémols", () => {
    const score = parseMusicXML(PALESTRINA_AGNUS_MESURES_1_56);
    expect(score.fifths).toBe(-3);
    expect(score.signature).toBe("4/4");
    expect(score.measures).toHaveLength(56);
    expect(score.tempos[0]).toEqual({ onset: 0, bpm: 80 });
  });

  it("503 notes retenues (598 <note> bruts, 73 silences, 22 liaisons fusionnées)", () => {
    const score = parseMusicXML(PALESTRINA_AGNUS_MESURES_1_56);
    expect(score.notes).toHaveLength(503);
  });

  it("porte 5 balises <harmony>", () => {
    expect((PALESTRINA_AGNUS_MESURES_1_56.match(/<harmony /g) || [])).toHaveLength(5);
  });

  it("mesure 1 : le sujet commence au soprano (P1) sur Si♭4", () => {
    const score = parseMusicXML(PALESTRINA_AGNUS_MESURES_1_56);
    const m1 = score.measures.find((m) => m.numero === 1)!;
    const first = score.notes
      .filter((n) => n.part === "P1" && n.onset >= m1.start && n.onset < m1.start + m1.length)
      .sort((a, b) => a.onset - b.onset)[0];
    expect(first.midi).toBe(70); // Sib4
  });

  it("mesure 2 : l'alto (P2) répond sur Mi♭4, exactement une quinte sous le soprano", () => {
    const score = parseMusicXML(PALESTRINA_AGNUS_MESURES_1_56);
    const m2 = score.measures.find((m) => m.numero === 2)!;
    const altoNotes = score.notes.filter(
      (n) => n.part === "P2" && n.onset >= m2.start && n.onset < m2.start + m2.length
    );
    expect(altoNotes[0].midi).toBe(63); // Mib4
    expect(70 - 63).toBe(7); // une quinte juste sous le Sib4 du soprano
  });

  it("mesure 7 : le ténor (P3) entre sur Si♭3, exactement une octave sous le soprano", () => {
    const score = parseMusicXML(PALESTRINA_AGNUS_MESURES_1_56);
    const m7 = score.measures.find((m) => m.numero === 7)!;
    const tenorNotes = score.notes.filter(
      (n) => n.part === "P3" && n.onset >= m7.start && n.onset < m7.start + m7.length
    );
    expect(tenorNotes[0].midi).toBe(58); // Sib3
    expect(70 - 58).toBe(12); // une octave sous le Sib4 du soprano
  });

  it("mesure 8 : la basse (P4) entre — l'exposition à quatre voix est complète", () => {
    const score = parseMusicXML(PALESTRINA_AGNUS_MESURES_1_56);
    const m8 = score.measures.find((m) => m.numero === 8)!;
    const basseNotes = score.notes.filter(
      (n) => n.part === "P4" && n.onset >= m8.start && n.onset < m8.start + m8.length
    );
    expect(basseNotes.length).toBeGreaterThan(0);
  });

  it("LE RÉGIME ZÉRO : un seul évènement sur les 503 tombe hors de la gamme diatonique à 3 bémols", () => {
    const score = parseMusicXML(PALESTRINA_AGNUS_MESURES_1_56);
    const diatonique = new Set([0, 2, 3, 5, 7, 8, 10]); // Do Ré Mib Fa Sol Lab Sib
    const accidents = score.notes.filter((n) => !diatonique.has(n.pc));
    expect(accidents).toHaveLength(1);
    expect(accidents[0].measure).toBe(45);
    expect(accidents[0].part).toBe("P1");
    expect(accidents[0].pc).toBe(9); // La naturel
  });

  it("mesure 56 (accord final) : Mi♭ majeur complet (Mi♭-Sol-Si♭)", () => {
    const score = parseMusicXML(PALESTRINA_AGNUS_MESURES_1_56);
    const m56 = score.measures.find((m) => m.numero === 56)!;
    const classes = new Set(
      score.notes.filter((n) => n.onset >= m56.start && n.onset < m56.start + m56.length).map((n) => n.pc)
    );
    expect(classes).toEqual(new Set([3, 7, 10]));
  });

  it("les repères de structure de Dany sont bien présents dans le fichier (<direction><words>)", () => {
    expect(PALESTRINA_AGNUS_MESURES_1_56).toContain("POINT D'IMITATION");
    expect(PALESTRINA_AGNUS_MESURES_1_56).toContain("SEUL ACCIDENT");
    expect(PALESTRINA_AGNUS_MESURES_1_56).toContain("cadence PLAGALE");
  });

  it("PALESTRINA_AGNUS_ANALYSE : repères croissants, tous dans [1, 56]", () => {
    const nums = PALESTRINA_AGNUS_ANALYSE.map((m) => m.numero);
    expect(nums).toEqual([...nums].sort((a, b) => a - b));
    for (const n of nums) {
      expect(n).toBeGreaterThanOrEqual(1);
      expect(n).toBeLessThanOrEqual(56);
    }
  });
});

describe("PALESTRINA_AGNUS_ANALYSE_NARRATIVE", () => {
  it("couvre les 4 sections (point d'imitation, modules, l'accident, cadence finale)", () => {
    expect(PALESTRINA_AGNUS_ANALYSE_NARRATIVE.sections).toHaveLength(4);
    expect(PALESTRINA_AGNUS_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  it("ne mentionne pas le processus de relecture (brouillon/correction) dans le contenu affiché", () => {
    const tousLesTextes = [
      PALESTRINA_AGNUS_ANALYSE_NARRATIVE.tonalite,
      PALESTRINA_AGNUS_ANALYSE_NARRATIVE.metrique,
      PALESTRINA_AGNUS_ANALYSE_NARRATIVE.forme,
      ...PALESTRINA_AGNUS_ANALYSE_NARRATIVE.sections.map((s) => s.texte),
      ...PALESTRINA_AGNUS_ANALYSE_NARRATIVE.synthese.map((s) => s.texte),
    ].join(" ");
    expect(tousLesTextes).not.toMatch(/brouillon|corrig|Dany/i);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("PALESTRINA_AGNUS_MESURES_1_56 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur (56 mesures, réparties sur plusieurs pages)", () => {
    tk.loadData(PALESTRINA_AGNUS_MESURES_1_56);
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
    expect(totalMesures).toBe(56);
  }, 20000);
});

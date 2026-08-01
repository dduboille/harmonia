import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  FAURE_NOCTURNE6_MESURES_0_141,
  FAURE_NOCTURNE6_ANALYSE,
  FAURE_NOCTURNE6_ANALYSE_NARRATIVE,
} from "./conservatoire-faure-nocturne6";

// Vérifie l'extrait rejoué contre le MusicXML fourni par Dany (fichier
// « faure-nocturne6-annote.musicxml »), musicalement verbatim — seule la
// numérotation de mesure a été corrigée (8 mesures "implicit=X1..X8" du
// fichier source entraient en collision avec le fallback du parseur partagé,
// cf. le commentaire d'en-tête de conservatoire-faure-nocturne6.ts). 142
// mesures (0-141), avec des mutations de mètre/armure écrites en cours de
// pièce.
describe("FAURE_NOCTURNE6_MESURES_0_141", () => {
  it("s'analyse sans erreur et couvre 142 mesures (0-141), Ré♭ majeur initial, 3/2", () => {
    const score = parseMusicXML(FAURE_NOCTURNE6_MESURES_0_141);
    expect(score.fifths).toBe(-5);
    expect(score.signature).toBe("3/2");
    expect(score.measures).toHaveLength(142);
    expect(score.measures.map((m) => m.numero).sort((a, b) => a - b)).toEqual(
      Array.from({ length: 142 }, (_, i) => i)
    );
    expect(score.tempos[0]).toEqual({ onset: 0, bpm: 76 });
  });

  it("3430 notes retenues (4037 <note> bruts, 531 silences, 3 notes d'ornement, 77 liaisons fusionnées)", () => {
    const score = parseMusicXML(FAURE_NOCTURNE6_MESURES_0_141);
    expect(score.notes).toHaveLength(3430);
  });

  it("aucune mesure marquée implicit=\"yes\" ni de numéro non-numérique (X1..X8) ne subsiste", () => {
    expect(FAURE_NOCTURNE6_MESURES_0_141).not.toContain("implicit");
    expect(FAURE_NOCTURNE6_MESURES_0_141).not.toMatch(/<measure number="X\d"/);
  });

  it("mesure 1 : la basse conjointe La♭-Si♭-Do porte iii, vi7, viiø7", () => {
    const score = parseMusicXML(FAURE_NOCTURNE6_MESURES_0_141);
    const m1 = score.measures.find((m) => m.numero === 1)!;
    // La♭ (basse, 1er tiers de la mesure) : Fa m (iii) = Fa-La♭-Do, confirmé
    // en union sur tout le segment (les 3 notes de l'accord arrivent par
    // arpège plutôt que toutes à l'onset exact).
    const surLab = new Set(
      score.notes
        .filter((n) => n.onset >= m1.start && n.onset < m1.start + 1536)
        .map((n) => n.pc)
    );
    for (const pc of [5, 8, 0]) expect(surLab.has(pc)).toBe(true);
  });

  it("mesure 19 : la charnière enharmonique — do# mineur (Do#-Mi-Sol#, 7e Si)", () => {
    const score = parseMusicXML(FAURE_NOCTURNE6_MESURES_0_141);
    const m19 = score.measures.find((m) => m.numero === 19)!;
    const classes = new Set(
      score.notes.filter((n) => n.onset >= m19.start && n.onset < m19.start + m19.length).map((n) => n.pc)
    );
    expect(classes.has(1)).toBe(true);  // Do#/Ré♭
    expect(classes.has(4)).toBe(true);  // Mi
    expect(classes.has(8)).toBe(true);  // Sol#/La♭
  });

  it("mesures 64-67 : le carrousel de médiantes — Ré♭ (broderies), LA majeur complet (m.66), DO majeur (m.67)", () => {
    // Les balises <harmony> annoncent le changement une mesure à l'avance
    // (m.65 « A », m.66 « C ») ; la sonorité pleine, elle, s'établit une
    // mesure plus tard dans la texture arpégée — vérifié ici où le son
    // réel apparaît, pas seulement où l'étiquette est postée.
    const score = parseMusicXML(FAURE_NOCTURNE6_MESURES_0_141);
    const classesDe = (mnum: number) => {
      const m = score.measures.find((mm) => mm.numero === mnum)!;
      return new Set(
        score.notes.filter((n) => n.onset >= m.start && n.onset < m.start + m.length).map((n) => n.pc)
      );
    };
    const m64 = classesDe(64);
    expect(m64.has(1)).toBe(true); // Ré♭
    const m66 = classesDe(66);
    for (const pc of [9, 1, 4]) expect(m66.has(pc)).toBe(true); // La-Do#-Mi (La majeur)
    const m67 = classesDe(67);
    for (const pc of [0, 4, 7]) expect(m67.has(pc)).toBe(true); // Do-Mi-Sol (Do majeur)
  });

  it("mesure 107 : le monde des dièses — Fa#-Si-Ré#", () => {
    const score = parseMusicXML(FAURE_NOCTURNE6_MESURES_0_141);
    const m = score.measures.find((mm) => mm.numero === 107)!;
    const classes = new Set(
      score.notes.filter((n) => n.onset >= m.start && n.onset < m.start + m.length).map((n) => n.pc)
    );
    for (const pc of [6, 11, 3]) expect(classes.has(pc)).toBe(true); // Fa# Si Ré#
  });

  it("mesures 109-110 : le retour par la plagale — Ré♭7 (V7/IV) puis Sol♭ (IV)", () => {
    expect(FAURE_NOCTURNE6_MESURES_0_141).toContain("V7/IV");
    expect(FAURE_NOCTURNE6_MESURES_0_141).toContain("PLAGALE");
    const idx109 = FAURE_NOCTURNE6_MESURES_0_141.indexOf('<measure number="109"');
    const idx111 = FAURE_NOCTURNE6_MESURES_0_141.indexOf('<measure number="111"');
    const bloc = FAURE_NOCTURNE6_MESURES_0_141.slice(idx109, idx111);
    expect(bloc).toContain("<root-step>D</root-step><root-alter>-1</root-alter>");
    expect(bloc).toContain("<root-step>G</root-step><root-alter>-1</root-alter>");
  });

  it("mesure 116 : Ré♭ retrouvé (balise <harmony> ET repère textuel du sommet)", () => {
    const idx = FAURE_NOCTURNE6_MESURES_0_141.indexOf('<measure number="116"');
    const idxNext = FAURE_NOCTURNE6_MESURES_0_141.indexOf('<measure number="117"');
    const bloc = FAURE_NOCTURNE6_MESURES_0_141.slice(idx, idxNext);
    expect(bloc).toContain("<root-step>D</root-step><root-alter>-1</root-alter>");
    expect(bloc).toContain("le sommet");
  });

  it("mesure 131 : un Do♭ littéral (l'ombre du mineur parallèle)", () => {
    const score = parseMusicXML(FAURE_NOCTURNE6_MESURES_0_141);
    const m = score.measures.find((mm) => mm.numero === 131)!;
    const notes = score.notes.filter((n) => n.onset >= m.start && n.onset < m.start + m.length);
    expect(notes.some((n) => n.step === "C" && n.alter === -1)).toBe(true);
  });

  it("mesure 141 (accord final) : Ré♭ majeur pur (tierce majeure, Fa naturel)", () => {
    const score = parseMusicXML(FAURE_NOCTURNE6_MESURES_0_141);
    const m = score.measures.find((mm) => mm.numero === 141)!;
    const classes = new Set(
      score.notes.filter((n) => n.onset >= m.start && n.onset < m.start + m.length).map((n) => n.pc)
    );
    expect(classes).toEqual(new Set([1, 5, 8])); // Ré♭-Fa-La♭
  });

  it("la coquille du transcripteur « docle » (pour dolce) est bien présente, telle que signalée", () => {
    expect(FAURE_NOCTURNE6_MESURES_0_141).toContain("docle");
  });

  it("FAURE_NOCTURNE6_ANALYSE : repères croissants, tous dans [0, 141]", () => {
    const nums = FAURE_NOCTURNE6_ANALYSE.map((m) => m.numero);
    expect(nums).toEqual([...nums].sort((a, b) => a - b));
    for (const n of nums) {
      expect(n).toBeGreaterThanOrEqual(0);
      expect(n).toBeLessThanOrEqual(141);
    }
  });
});

describe("FAURE_NOCTURNE6_ANALYSE_NARRATIVE", () => {
  it("couvre les 5 sections (A, charnière B, carrousel C, retour plagal, coda)", () => {
    expect(FAURE_NOCTURNE6_ANALYSE_NARRATIVE.sections).toHaveLength(5);
    expect(FAURE_NOCTURNE6_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  it("ne mentionne pas le processus de relecture (brouillon/correction) dans le contenu affiché", () => {
    const tousLesTextes = [
      FAURE_NOCTURNE6_ANALYSE_NARRATIVE.tonalite,
      FAURE_NOCTURNE6_ANALYSE_NARRATIVE.metrique,
      FAURE_NOCTURNE6_ANALYSE_NARRATIVE.forme,
      ...FAURE_NOCTURNE6_ANALYSE_NARRATIVE.sections.map((s) => s.texte),
      ...FAURE_NOCTURNE6_ANALYSE_NARRATIVE.synthese.map((s) => s.texte),
    ].join(" ");
    expect(tousLesTextes).not.toMatch(/brouillon|corrig|Dany/i);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("FAURE_NOCTURNE6_MESURES_0_141 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur (142 mesures, réparties sur plusieurs pages)", () => {
    tk.loadData(FAURE_NOCTURNE6_MESURES_0_141);
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
    expect(totalMesures).toBe(142);
  }, 30000);
});

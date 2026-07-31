import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  FOLIA_GRILLE_MESURES_1_16,
  FOLIA_GRILLE_ANALYSE,
  FOLIA_GRILLE_ANALYSE_NARRATIVE,
} from "./conservatoire-folia-grille";

// Vérifie la réalisation ENTIÈREMENT ORIGINALE de la grille de La Folia (16
// mesures, formule anonyme du XVIe siècle, domaine public — aucune note de
// l'arrangement source de Dany, lui protégé, n'est reproduite ici).
describe("FOLIA_GRILLE_MESURES_1_16", () => {
  it("s'analyse sans erreur et couvre 16 mesures en ré mineur, 3/4", () => {
    const score = parseMusicXML(FOLIA_GRILLE_MESURES_1_16);
    expect(score.fifths).toBe(-1);
    expect(score.mode).toBe("minor");
    expect(score.signature).toBe("3/4");
    expect(score.measures).toHaveLength(16);
  });

  function pcsDe(mnum: number) {
    const score = parseMusicXML(FOLIA_GRILLE_MESURES_1_16);
    const m = score.measures.find((mm) => mm.numero === mnum)!;
    return new Set(
      score.notes.filter((n) => n.onset >= m.start && n.onset < m.start + m.length).map((n) => n.pc)
    );
  }

  it("mesures 1-8 : la grille complète, i-V-i-VII-III-VII-iv6-V", () => {
    expect(pcsDe(1)).toEqual(new Set([2, 5, 9]));   // i (ré m)
    expect(pcsDe(2)).toEqual(new Set([1, 4, 9]));   // V (La)
    expect(pcsDe(3)).toEqual(new Set([2, 5, 9]));   // i
    expect(pcsDe(4)).toEqual(new Set([0, 4, 7]));   // VII (Do)
    expect(pcsDe(5)).toEqual(new Set([0, 5, 9]));   // III (Fa)
    expect(pcsDe(6)).toEqual(new Set([0, 1, 4, 7])); // VII + faux-rapport (Do ET Do#)
    expect(pcsDe(7)).toEqual(new Set([2, 7, 10]));  // iv6 (sol m/Sib)
    expect(pcsDe(8)).toEqual(new Set([1, 4, 9]));   // V
  });

  it("mesures 9-15 : la grille se répète à l'identique (même parcours que 1-7)", () => {
    for (let i = 0; i < 7; i++) {
      expect(pcsDe(9 + i)).toEqual(pcsDe(1 + i));
    }
  });

  it("mesures 6 et 14 : le faux-rapport (Do naturel à la main droite, Do# à la basse)", () => {
    const score = parseMusicXML(FOLIA_GRILLE_MESURES_1_16);
    for (const mnum of [6, 14]) {
      const m = score.measures.find((mm) => mm.numero === mnum)!;
      const rh = score.notes.filter((n) => n.voice === "1" && n.onset >= m.start && n.onset < m.start + m.length);
      const lh = score.notes.filter((n) => n.voice === "5" && n.onset >= m.start && n.onset < m.start + m.length);
      expect(rh.some((n) => n.pc === 0)).toBe(true);  // Do naturel, main droite
      expect(lh.some((n) => n.pc === 1)).toBe(true);  // Do#, basse
    }
  });

  it("mesure 16 : cadence finale sur i, sans tierce picarde (pas de Fa#)", () => {
    const classes = pcsDe(16);
    expect(classes).toEqual(new Set([2, 5, 9])); // ré m : Ré-Fa-La
    expect(classes.has(6)).toBe(false); // pas de Fa# (picarde)
  });

  it("porte une balise <harmony> par mesure (16 au total)", () => {
    expect((FOLIA_GRILLE_MESURES_1_16.match(/<harmony /g) || [])).toHaveLength(16);
  });

  it("les repères de structure sont bien présents (<direction><words>)", () => {
    expect(FOLIA_GRILLE_MESURES_1_16).toContain("LA FOLIA");
    expect(FOLIA_GRILLE_MESURES_1_16).toContain("sous-tonique");
    expect(FOLIA_GRILLE_MESURES_1_16).toContain("faux-rapport");
    expect(FOLIA_GRILLE_MESURES_1_16).toContain("2e moitié de la grille");
  });

  it("mesure 16 : point d'orgue à la main droite ET à la main gauche", () => {
    const m16 = FOLIA_GRILLE_MESURES_1_16.slice(FOLIA_GRILLE_MESURES_1_16.indexOf('<measure number="16"'));
    expect((m16.match(/<fermata\/>/g) || [])).toHaveLength(2);
  });

  it("FOLIA_GRILLE_ANALYSE : repères croissants, tous dans [1, 16]", () => {
    const nums = FOLIA_GRILLE_ANALYSE.map((m) => m.numero);
    expect(nums).toEqual([...nums].sort((a, b) => a - b));
    for (const n of nums) {
      expect(n).toBeGreaterThanOrEqual(1);
      expect(n).toBeLessThanOrEqual(16);
    }
  });
});

describe("FOLIA_GRILLE_ANALYSE_NARRATIVE", () => {
  it("couvre les 2 sections (les deux hémistiches de la grille)", () => {
    expect(FOLIA_GRILLE_ANALYSE_NARRATIVE.sections).toHaveLength(2);
    expect(FOLIA_GRILLE_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  it("ne mentionne pas le processus de relecture (brouillon/correction) dans le contenu affiché", () => {
    const tousLesTextes = [
      FOLIA_GRILLE_ANALYSE_NARRATIVE.tonalite,
      FOLIA_GRILLE_ANALYSE_NARRATIVE.metrique,
      FOLIA_GRILLE_ANALYSE_NARRATIVE.forme,
      ...FOLIA_GRILLE_ANALYSE_NARRATIVE.sections.map((s) => s.texte),
      ...FOLIA_GRILLE_ANALYSE_NARRATIVE.synthese.map((s) => s.texte),
    ].join(" ");
    expect(tousLesTextes).not.toMatch(/brouillon|corrig|Dany/i);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("FOLIA_GRILLE_MESURES_1_16 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur (16 mesures)", () => {
    tk.loadData(FOLIA_GRILLE_MESURES_1_16);
    tk.renderToMIDI();
    tk.setOptions({ scale: 35, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2500 });
    const pageCount = tk.getPageCount();
    let totalMesures = 0;
    let totalNotes = 0;
    for (let p = 1; p <= pageCount; p++) {
      const svg: string = tk.renderToSVG(p);
      totalNotes += [...svg.matchAll(/<g id="([^"]+)" class="note"/g)].length;
      totalMesures += [...svg.matchAll(/<g[^>]*class="measure"[^>]*>/g)].length;
    }
    expect(totalNotes).toBeGreaterThan(0);
    expect(totalMesures).toBe(16);
  }, 20000);
});

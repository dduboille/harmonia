import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  PENDULE_FICHE_MESURES_1_8,
  PENDULE_FICHE_ANALYSE,
  PENDULE_FICHE_ANALYSE_NARRATIVE,
} from "./conservatoire-pendule-fiche";

// Vérifie la fiche didactique ENTIÈREMENT ORIGINALE (aucune mesure de « Peace
// Piece » de Bill Evans reproduite — l'œuvre reste protégée), démonstration
// de l'ostinato à deux accords-couleurs (Do∆7 / Sol9sus) porteur d'une vague
// de densité chromatique à la main droite.
describe("PENDULE_FICHE_MESURES_1_8", () => {
  it("s'analyse sans erreur et couvre 8 mesures, 4/4, Do majeur", () => {
    const score = parseMusicXML(PENDULE_FICHE_MESURES_1_8);
    expect(score.fifths).toBe(0);
    expect(score.signature).toBe("4/4");
    expect(score.measures).toHaveLength(8);
  });

  it("l'ostinato stabilisé (voix 5, main gauche) est rigoureusement IDENTIQUE de la mesure 3 à la mesure 8", () => {
    // m.1 et m.2 présentent d'abord les deux accords SÉPARÉMENT (Do∆7 seul,
    // puis Sol9sus seul) ; le pendule stabilisé (les deux en alternance dans
    // une même mesure) ne commence qu'à partir de la mesure 3.
    const score = parseMusicXML(PENDULE_FICHE_MESURES_1_8);
    const signatureDe = (mnum: number) => {
      const m = score.measures.find((mm) => mm.numero === mnum)!;
      return score.notes
        .filter((n) => n.voice === "5" && n.onset >= m.start && n.onset < m.start + m.length)
        .map((n) => `${n.midi}@${n.onset - m.start}`)
        .sort()
        .join(",");
    };
    const reference = signatureDe(3);
    expect(reference.length).toBeGreaterThan(0);
    for (let mnum = 4; mnum <= 8; mnum++) {
      expect(signatureDe(mnum)).toBe(reference);
    }
  });

  it("mesure 1 : Do∆7 (Do-Mi-Sol-Si, avec la septième majeure)", () => {
    const score = parseMusicXML(PENDULE_FICHE_MESURES_1_8);
    const m1 = score.measures.find((m) => m.numero === 1)!;
    const classes = new Set(
      score.notes.filter((n) => n.onset >= m1.start && n.onset < m1.start + m1.length).map((n) => n.pc)
    );
    expect(classes).toEqual(new Set([0, 4, 7, 11]));
  });

  it("mesure 2 : Sol9sus (Sol-La-Do-Fa) — la quarte (Do), aucune tierce (Si)", () => {
    const score = parseMusicXML(PENDULE_FICHE_MESURES_1_8);
    const m2 = score.measures.find((m) => m.numero === 2)!;
    const classes = new Set(
      score.notes.filter((n) => n.onset >= m2.start && n.onset < m2.start + m2.length).map((n) => n.pc)
    );
    expect(classes).toEqual(new Set([7, 9, 0, 5]));
    expect(classes.has(11)).toBe(false); // pas de Si (tierce) : la quarte n'est jamais résolue
  });

  it("la courbe de densité chromatique (main droite) dessine la vague : 0,0,0,0,1,4,1,0", () => {
    const score = parseMusicXML(PENDULE_FICHE_MESURES_1_8);
    const diatonique = new Set([0, 2, 4, 5, 7, 9, 11]);
    const courbe: number[] = [];
    for (let mnum = 1; mnum <= 8; mnum++) {
      const m = score.measures.find((mm) => mm.numero === mnum)!;
      const rh = score.notes.filter(
        (n) => n.voice === "1" && n.onset >= m.start && n.onset < m.start + m.length
      );
      courbe.push(rh.filter((n) => !diatonique.has(n.pc)).length);
    }
    expect(courbe).toEqual([0, 0, 0, 0, 1, 4, 1, 0]);
  });

  it("mesure 6 (le sommet) : une gerbe de 4 notes altérées empilées au même instant", () => {
    const score = parseMusicXML(PENDULE_FICHE_MESURES_1_8);
    const m6 = score.measures.find((m) => m.numero === 6)!;
    const rh = score.notes.filter(
      (n) => n.voice === "1" && n.onset >= m6.start && n.onset < m6.start + m6.length
    );
    expect(rh).toHaveLength(4);
    expect(new Set(rh.map((n) => n.onset)).size).toBe(1); // toutes au même instant
    expect(new Set(rh.map((n) => n.pc))).toEqual(new Set([1, 3, 6, 8])); // Réb Mib Solb Lab
  });

  it("mesure 8 : point d'orgue à la main droite ET à la main gauche", () => {
    const m8 = PENDULE_FICHE_MESURES_1_8.slice(PENDULE_FICHE_MESURES_1_8.indexOf('<measure number="8"'));
    expect((m8.match(/<fermata\/>/g) || [])).toHaveLength(2);
    expect(m8).toContain("sans cadence");
  });

  it("les repères de structure sont bien présents (<direction><words>)", () => {
    expect(PENDULE_FICHE_MESURES_1_8).toContain("l'ostinato s'installe");
    expect(PENDULE_FICHE_MESURES_1_8).toContain("diatonisme intégral");
    expect(PENDULE_FICHE_MESURES_1_8).toContain("le sommet");
    expect(PENDULE_FICHE_MESURES_1_8).toContain("blanc absolu");
  });

  it("PENDULE_FICHE_ANALYSE couvre les 8 mesures", () => {
    expect(PENDULE_FICHE_ANALYSE).toHaveLength(8);
    expect(PENDULE_FICHE_ANALYSE.map((m) => m.numero)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});

describe("PENDULE_FICHE_ANALYSE_NARRATIVE", () => {
  it("couvre les 4 sections de la démonstration", () => {
    expect(PENDULE_FICHE_ANALYSE_NARRATIVE.sections).toHaveLength(4);
    expect(PENDULE_FICHE_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  it("ne mentionne pas le processus de relecture (brouillon/correction) dans le contenu affiché", () => {
    const tousLesTextes = [
      PENDULE_FICHE_ANALYSE_NARRATIVE.tonalite,
      PENDULE_FICHE_ANALYSE_NARRATIVE.metrique,
      PENDULE_FICHE_ANALYSE_NARRATIVE.forme,
      ...PENDULE_FICHE_ANALYSE_NARRATIVE.sections.map((s) => s.texte),
      ...PENDULE_FICHE_ANALYSE_NARRATIVE.synthese.map((s) => s.texte),
    ].join(" ");
    expect(tousLesTextes).not.toMatch(/brouillon|corrig|Dany/i);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("PENDULE_FICHE_MESURES_1_8 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur (8 mesures)", () => {
    tk.loadData(PENDULE_FICHE_MESURES_1_8);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2000 });
    const svg: string = tk.renderToSVG(1);
    const notes = [...svg.matchAll(/<g id="([^"]+)" class="note"/g)];
    expect(notes.length).toBeGreaterThan(0);
    const mesures = [...svg.matchAll(/<g[^>]*class="measure"[^>]*>/g)];
    expect(mesures).toHaveLength(8);
  }, 20000);
});

import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  BWV775_MESURES_1_52,
  BWV775_ANALYSE,
  BWV775_ANALYSE_NARRATIVE,
} from "./conservatoire-bwv775";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (fichier
// « bwv775-annote.musicxml ») : Bach, Invention n°4 BWV 775, 52 mesures,
// avec 17 balises <harmony> aux points structurels clés.
describe("BWV775_MESURES_1_52", () => {
  it("s'analyse sans erreur et couvre 52 mesures en ré mineur, 3/8", () => {
    const score = parseMusicXML(BWV775_MESURES_1_52);
    expect(score.fifths).toBe(-1);
    expect(score.mode).toBe("minor");
    expect(score.signature).toBe("3/8");
    expect(score.measures).toHaveLength(52);
    expect(score.tempos).toHaveLength(0); // aucun tempo indiqué dans le fichier source
  });

  it("538 notes retenues (550 <note> bruts, 8 silences, 4 liaisons fusionnées)", () => {
    const score = parseMusicXML(BWV775_MESURES_1_52);
    expect(score.notes).toHaveLength(538);
  });

  it("porte 17 balises <harmony>", () => {
    expect((BWV775_MESURES_1_52.match(/<harmony /g) || [])).toHaveLength(17);
  });

  it("mesure 1 : le sujet, gamme de ré mineur montant jusqu'à Si♭", () => {
    const score = parseMusicXML(BWV775_MESURES_1_52);
    const m1 = score.measures.find((m) => m.numero === 1)!;
    const notes = score.notes
      .filter((n) => n.onset >= m1.start && n.onset < m1.start + m1.length)
      .sort((a, b) => a.onset - b.onset);
    expect(notes.map((n) => n.pc)).toEqual([2, 4, 5, 7, 9, 10]); // Ré Mi Fa Sol La Sib
    expect(Math.max(...notes.map((n) => n.midi))).toBe(70); // Sib4
  });

  it("mesure 2 : redescente depuis Do#, ambitus Do#4-Sib4 = 9 demi-tons (7e diminuée)", () => {
    const score = parseMusicXML(BWV775_MESURES_1_52);
    const m2 = score.measures.find((m) => m.numero === 2)!;
    const notes = score.notes
      .filter((n) => n.onset >= m2.start && n.onset < m2.start + m2.length)
      .sort((a, b) => a.onset - b.onset);
    expect(notes[0].pc).toBe(1); // Do#
    expect(notes[0].midi).toBe(61);
    const ambitus = 70 - 61; // Sib4 (m.1) - Do#4 (m.2)
    expect(ambitus).toBe(9);
  });

  it("mesures 19-21 : le trille écrit à la main droite (Ré-Do) sans exception", () => {
    const score = parseMusicXML(BWV775_MESURES_1_52);
    for (let mnum = 19; mnum <= 21; mnum++) {
      const m = score.measures.find((mm) => mm.numero === mnum)!;
      const rh = score.notes.filter(
        (n) => n.voice === "1" && n.onset >= m.start && n.onset < m.start + m.length
      );
      expect(new Set(rh.map((n) => n.pc))).toEqual(new Set([0, 2]));
    }
  });

  it("mesures 29-33 : le trille écrit à la main gauche (Fa-Mi, ♭6→5) sans exception", () => {
    const score = parseMusicXML(BWV775_MESURES_1_52);
    for (let mnum = 29; mnum <= 33; mnum++) {
      const m = score.measures.find((mm) => mm.numero === mnum)!;
      const lh = score.notes.filter(
        (n) => n.voice === "5" && n.onset >= m.start && n.onset < m.start + m.length
      );
      expect(new Set(lh.map((n) => n.pc))).toEqual(new Set([4, 5]));
    }
  });

  it("mesure 39 : le vii°7 de sol mineur (Fa#-La-Do-Mib) déployé en gamme à la basse", () => {
    const score = parseMusicXML(BWV775_MESURES_1_52);
    const m39 = score.measures.find((m) => m.numero === 39)!;
    const lh = score.notes.filter(
      (n) => n.voice === "5" && n.onset >= m39.start && n.onset < m39.start + m39.length
    );
    const classes = new Set(lh.map((n) => n.pc));
    for (const pc of [6, 9, 0, 3]) expect(classes.has(pc)).toBe(true); // Fa# La Do Mib
  });

  it("mesure 50 : le vii°7 complet (Do#-Mi-Sol-Sib), verticalisé", () => {
    const score = parseMusicXML(BWV775_MESURES_1_52);
    const m50 = score.measures.find((m) => m.numero === 50)!;
    const classes = new Set(
      score.notes.filter((n) => n.onset >= m50.start && n.onset < m50.start + m50.length).map((n) => n.pc)
    );
    for (const pc of [1, 4, 7, 10]) expect(classes.has(pc)).toBe(true); // Do# Mi Sol Sib
  });

  it("mesure 52 (accord final) : octave nue Ré-Ré, sans tierce", () => {
    const score = parseMusicXML(BWV775_MESURES_1_52);
    const m52 = score.measures.find((m) => m.numero === 52)!;
    const notes = score.notes.filter((n) => n.onset >= m52.start && n.onset < m52.start + m52.length);
    expect(new Set(notes.map((n) => n.pc))).toEqual(new Set([2]));
    expect(notes).toHaveLength(2); // Ré2 (main gauche) + Ré4 (main droite)
  });

  it("les repères de structure de Dany sont bien présents dans le fichier (<direction><words>)", () => {
    expect(BWV775_MESURES_1_52).toContain("SUJET seul");
    expect(BWV775_MESURES_1_52).toContain("TRILLE");
    expect(BWV775_MESURES_1_52).toContain("vii°7 COMPLET");
    expect(BWV775_MESURES_1_52).toContain("OCTAVE NUE");
  });

  it("BWV775_ANALYSE : repères croissants, tous dans [1, 52]", () => {
    const nums = BWV775_ANALYSE.map((m) => m.numero);
    expect(nums).toEqual([...nums].sort((a, b) => a - b));
    for (const n of nums) {
      expect(n).toBeGreaterThanOrEqual(1);
      expect(n).toBeLessThanOrEqual(52);
    }
  });
});

describe("BWV775_ANALYSE_NARRATIVE", () => {
  it("couvre les 5 sections (sujet, vers le relatif, marche/2e trille, cadence/retour, réexposition)", () => {
    expect(BWV775_ANALYSE_NARRATIVE.sections).toHaveLength(5);
    expect(BWV775_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  it("ne mentionne pas le processus de relecture (brouillon/correction) dans le contenu affiché", () => {
    const tousLesTextes = [
      BWV775_ANALYSE_NARRATIVE.tonalite,
      BWV775_ANALYSE_NARRATIVE.metrique,
      BWV775_ANALYSE_NARRATIVE.forme,
      ...BWV775_ANALYSE_NARRATIVE.sections.map((s) => s.texte),
      ...BWV775_ANALYSE_NARRATIVE.synthese.map((s) => s.texte),
    ].join(" ");
    expect(tousLesTextes).not.toMatch(/brouillon|corrig|Dany/i);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("BWV775_MESURES_1_52 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur (52 mesures, réparties sur plusieurs pages)", () => {
    tk.loadData(BWV775_MESURES_1_52);
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
    expect(totalMesures).toBe(52);
  }, 20000);
});

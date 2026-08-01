import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  TRAUMEREI_MESURES_0_24,
  TRAUMEREI_ANALYSE,
  TRAUMEREI_ANALYSE_NARRATIVE,
} from "./conservatoire-traumerei";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (fichier
// « traumerei-annote.musicxml ») : Schumann, « Träumerei », 25 mesures (0-24),
// avec 18 balises <harmony> aux points structurels clés.
describe("TRAUMEREI_MESURES_0_24", () => {
  it("s'analyse sans erreur et couvre 25 mesures (0-24) en Fa majeur, 4/4", () => {
    const score = parseMusicXML(TRAUMEREI_MESURES_0_24);
    expect(score.fifths).toBe(-1);
    expect(score.mode).toBe("major");
    expect(score.signature).toBe("4/4");
    expect(score.measures).toHaveLength(25);
    expect(score.measures.map((m) => m.numero).sort((a, b) => a - b)).toEqual(
      Array.from({ length: 25 }, (_, i) => i)
    );
    expect(score.tempos[0]).toEqual({ onset: 0, bpm: 90 });
  });

  it("379 notes retenues (420 <note> bruts, 19 silences, 8 notes d'ornement, 17 liaisons fusionnées)", () => {
    const score = parseMusicXML(TRAUMEREI_MESURES_0_24);
    expect(score.notes).toHaveLength(379);
  });

  it("porte 18 balises <harmony>", () => {
    expect((TRAUMEREI_MESURES_0_24.match(/<harmony /g) || [])).toHaveLength(18);
  });

  it("strophe 5 (m.17-20) reprend note pour note la strophe 1 (m.1-4)", () => {
    const score = parseMusicXML(TRAUMEREI_MESURES_0_24);
    const signatureDe = (mnum: number) => {
      const m = score.measures.find((mm) => mm.numero === mnum)!;
      return score.notes
        .filter((n) => n.onset >= m.start && n.onset < m.start + m.length)
        .map((n) => `${n.midi}@${n.onset - m.start}`)
        .join(",");
    };
    for (let i = 0; i < 4; i++) {
      expect(signatureDe(17 + i)).toBe(signatureDe(1 + i));
    }
  });

  it("strophe 1 : sommet mélodique Fa5 (midi 77)", () => {
    const score = parseMusicXML(TRAUMEREI_MESURES_0_24);
    const notes = score.notes.filter((n) => n.measure >= 0 && n.measure <= 4);
    expect(Math.max(...notes.map((n) => n.midi))).toBe(77);
  });

  it("strophe 4 : sommet mélodique Si♭5 (midi 82), le plus haut de toute la pièce", () => {
    const score = parseMusicXML(TRAUMEREI_MESURES_0_24);
    const strophe4 = score.notes.filter((n) => n.measure >= 13 && n.measure <= 16);
    expect(Math.max(...strophe4.map((n) => n.midi))).toBe(82);
    expect(Math.max(...score.notes.map((n) => n.midi))).toBe(82); // le plus haut de la pièce
  });

  it("mesure 7 : l'agrégat Fa#°7 (Fa#-La-Do-Mi♭)", () => {
    const score = parseMusicXML(TRAUMEREI_MESURES_0_24);
    const m7 = score.measures.find((m) => m.numero === 7)!;
    const classes = new Set(
      score.notes.filter((n) => n.onset >= m7.start && n.onset < m7.start + m7.length).map((n) => n.pc)
    );
    for (const pc of [6, 9, 0, 3]) expect(classes.has(pc)).toBe(true); // Fa# La Do Mib
  });

  it("mesure 22 : le point d'orgue sur Sol9 (Sol-Si-Ré-Fa-La), mélodie suspendue sur La5", () => {
    const score = parseMusicXML(TRAUMEREI_MESURES_0_24);
    const m22 = score.measures.find((m) => m.numero === 22)!;
    const notes = score.notes.filter((n) => n.onset >= m22.start && n.onset < m22.start + m22.length);
    const classes = new Set(notes.map((n) => n.pc));
    for (const pc of [7, 11, 2, 5, 9]) expect(classes.has(pc)).toBe(true); // Sol Si Ré Fa La
    expect(Math.max(...notes.map((n) => n.midi))).toBe(81); // La5
    const bloc = TRAUMEREI_MESURES_0_24.slice(
      TRAUMEREI_MESURES_0_24.indexOf('<measure number="22"'),
      TRAUMEREI_MESURES_0_24.indexOf('<measure number="23"')
    );
    expect(bloc).toContain("<fermata");
  });

  it("mesure 24 : le Ré et le Mi dans l'accord de V9, sous point d'orgue (le réveil)", () => {
    const score = parseMusicXML(TRAUMEREI_MESURES_0_24);
    const m24 = score.measures.find((m) => m.numero === 24)!;
    const classes = new Set(
      score.notes.filter((n) => n.onset >= m24.start && n.onset < m24.start + m24.length).map((n) => n.pc)
    );
    expect(classes.has(2)).toBe(true); // Ré
    expect(classes.has(4)).toBe(true); // Mi
    const bloc = TRAUMEREI_MESURES_0_24.slice(TRAUMEREI_MESURES_0_24.indexOf('<measure number="24"'));
    expect(bloc).toContain("<fermata");
  });

  it("les repères de structure de Dany sont bien présents dans le fichier (<direction><words>)", () => {
    expect(TRAUMEREI_MESURES_0_24).toContain("LE THÈME REVIENDRA SIX FOIS");
    expect(TRAUMEREI_MESURES_0_24).toContain("porte tournante");
    expect(TRAUMEREI_MESURES_0_24).toContain("LE POINT D'ORGUE");
    expect(TRAUMEREI_MESURES_0_24).toContain("le réveil");
  });

  it("TRAUMEREI_ANALYSE : repères croissants, tous dans [0, 24]", () => {
    const nums = TRAUMEREI_ANALYSE.map((m) => m.numero);
    expect(nums).toEqual([...nums].sort((a, b) => a - b));
    for (const n of nums) {
      expect(n).toBeGreaterThanOrEqual(0);
      expect(n).toBeLessThanOrEqual(24);
    }
  });
});

describe("TRAUMEREI_ANALYSE_NARRATIVE", () => {
  it("couvre les 5 sections (strophes 1&5, strophe2, strophe3, strophe4, strophe6)", () => {
    expect(TRAUMEREI_ANALYSE_NARRATIVE.sections).toHaveLength(5);
    expect(TRAUMEREI_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  it("ne mentionne pas le processus de relecture (brouillon/correction) dans le contenu affiché", () => {
    const tousLesTextes = [
      TRAUMEREI_ANALYSE_NARRATIVE.tonalite,
      TRAUMEREI_ANALYSE_NARRATIVE.metrique,
      TRAUMEREI_ANALYSE_NARRATIVE.forme,
      ...TRAUMEREI_ANALYSE_NARRATIVE.sections.map((s) => s.texte),
      ...TRAUMEREI_ANALYSE_NARRATIVE.synthese.map((s) => s.texte),
    ].join(" ");
    expect(tousLesTextes).not.toMatch(/brouillon|corrig|Dany/i);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("TRAUMEREI_MESURES_0_24 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur (25 mesures)", () => {
    tk.loadData(TRAUMEREI_MESURES_0_24);
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
    expect(totalMesures).toBe(25);
  }, 20000);
});

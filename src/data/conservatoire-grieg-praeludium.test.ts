import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  GRIEG_PRAELUDIUM_MESURES_1_72,
  GRIEG_PRAELUDIUM_ANALYSE,
  GRIEG_PRAELUDIUM_ANALYSE_NARRATIVE,
} from "./conservatoire-grieg-praeludium";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (fichier
// « grieg-praeludium-annote.musicxml ») : Grieg, Suite Holberg op.40, Praeludium,
// 72 mesures, avec 16 balises <harmony> aux points structurels clés.
describe("GRIEG_PRAELUDIUM_MESURES_1_72", () => {
  it("s'analyse sans erreur et couvre 72 mesures en Sol majeur, 4/4", () => {
    const score = parseMusicXML(GRIEG_PRAELUDIUM_MESURES_1_72);
    expect(score.fifths).toBe(1);
    expect(score.mode).toBe("major");
    expect(score.signature).toBe("4/4");
    expect(score.measures).toHaveLength(72);
    expect(score.tempos[0]).toEqual({ onset: 0, bpm: 154 });
  });

  it("1307 notes retenues (1480 <note> bruts, 145 silences, 12 notes d'ornement, 16 liaisons fusionnées)", () => {
    const score = parseMusicXML(GRIEG_PRAELUDIUM_MESURES_1_72);
    expect(score.notes).toHaveLength(1307);
  });

  it("porte 16 balises <harmony>", () => {
    expect((GRIEG_PRAELUDIUM_MESURES_1_72.match(/<harmony /g) || [])).toHaveLength(16);
  });

  it("mesures 1-4 : la pédale de tonique (Sol1) sonne sans interruption", () => {
    const score = parseMusicXML(GRIEG_PRAELUDIUM_MESURES_1_72);
    const soundingAt = (tick: number) =>
      score.notes.filter((n) => n.onset <= tick && tick < n.onset + n.duration);
    for (let mnum = 1; mnum <= 4; mnum++) {
      const m = score.measures.find((mm) => mm.numero === mnum)!;
      for (const rel of [0, Math.floor(m.length / 2)]) {
        const notes = soundingAt(m.start + rel);
        const lowest = Math.min(...notes.map((n) => n.midi));
        expect(lowest).toBe(31); // Sol1
      }
    }
  });

  it("mesures 19-20 : Ré7/Fa# (Do♮-Ré-Fa#-La), la rétrotransition", () => {
    const score = parseMusicXML(GRIEG_PRAELUDIUM_MESURES_1_72);
    for (const mnum of [19, 20]) {
      const m = score.measures.find((mm) => mm.numero === mnum)!;
      const classes = new Set(
        score.notes.filter((n) => n.onset >= m.start && n.onset < m.start + m.length).map((n) => n.pc)
      );
      expect(classes).toEqual(new Set([0, 2, 6, 9]));
    }
  });

  it("mesure 29 : l'agrégat La#°7/Do (secousse chromatique fz)", () => {
    const score = parseMusicXML(GRIEG_PRAELUDIUM_MESURES_1_72);
    const m29 = score.measures.find((m) => m.numero === 29)!;
    const classes = new Set(
      score.notes.filter((n) => n.onset >= m29.start && n.onset < m29.start + m29.length).map((n) => n.pc)
    );
    expect(classes).toEqual(new Set([0, 1, 4, 7, 10]));
  });

  it("mesures 38-39 : la pédale de Si hésite entre majeur (Ré#) et mineur (Ré♮)", () => {
    const score = parseMusicXML(GRIEG_PRAELUDIUM_MESURES_1_72);
    const classesDe = (mnum: number) => {
      const m = score.measures.find((mm) => mm.numero === mnum)!;
      return new Set(
        score.notes.filter((n) => n.onset >= m.start && n.onset < m.start + m.length).map((n) => n.pc)
      );
    };
    const m38 = classesDe(38);
    const m39 = classesDe(39);
    expect(m38.has(3)).toBe(true);  // Ré# : Si majeur
    expect(m39.has(3)).toBe(false);
    expect(m39.has(2)).toBe(true);  // Ré naturel : si mineur
  });

  it("mesure 40 : Lam7 (La-Do-Mi-Sol), la résolution déceptive", () => {
    const score = parseMusicXML(GRIEG_PRAELUDIUM_MESURES_1_72);
    const m40 = score.measures.find((m) => m.numero === 40)!;
    const classes = new Set(
      score.notes.filter((n) => n.onset >= m40.start && n.onset < m40.start + m40.length).map((n) => n.pc)
    );
    expect(classes).toEqual(new Set([0, 4, 7, 9]));
  });

  it("mesure 45 : Sol7/Fa (V4/2 de IV), l'expansion plagale", () => {
    const score = parseMusicXML(GRIEG_PRAELUDIUM_MESURES_1_72);
    const m45 = score.measures.find((m) => m.numero === 45)!;
    const classes = new Set(
      score.notes.filter((n) => n.onset >= m45.start && n.onset < m45.start + m45.length).map((n) => n.pc)
    );
    expect(classes).toEqual(new Set([2, 5, 7, 11]));
  });

  it("mesure 70 : la couleur #11 (Fa#) sur un accord de Do majeur", () => {
    const score = parseMusicXML(GRIEG_PRAELUDIUM_MESURES_1_72);
    const m70 = score.measures.find((m) => m.numero === 70)!;
    const classes = new Set(
      score.notes.filter((n) => n.onset >= m70.start && n.onset < m70.start + m70.length).map((n) => n.pc)
    );
    expect(classes.has(0)).toBe(true); // Do
    expect(classes.has(4)).toBe(true); // Mi
    expect(classes.has(7)).toBe(true); // Sol
    expect(classes.has(6)).toBe(true); // Fa# : la 11e augmentée
  });

  it("mesure 72 (accord final) : Sol majeur (Sol-Ré-Si)", () => {
    const score = parseMusicXML(GRIEG_PRAELUDIUM_MESURES_1_72);
    const m72 = score.measures.find((m) => m.numero === 72)!;
    const classes = new Set(
      score.notes.filter((n) => n.onset >= m72.start && n.onset < m72.start + m72.length).map((n) => n.pc)
    );
    expect(classes).toEqual(new Set([2, 7, 11]));
  });

  it("les repères de structure de Dany sont bien présents dans le fichier (<direction><words>)", () => {
    expect(GRIEG_PRAELUDIUM_MESURES_1_72).toContain("moto perpetuo");
    expect(GRIEG_PRAELUDIUM_MESURES_1_72).toContain("PÉDALE DE DOMINANTE");
    expect(GRIEG_PRAELUDIUM_MESURES_1_72).toContain("résolution déceptive");
    expect(GRIEG_PRAELUDIUM_MESURES_1_72).toContain("#11");
  });

  it("GRIEG_PRAELUDIUM_ANALYSE : repères croissants, tous dans [1, 72]", () => {
    const nums = GRIEG_PRAELUDIUM_ANALYSE.map((m) => m.numero);
    expect(nums).toEqual([...nums].sort((a, b) => a - b));
    for (const n of nums) {
      expect(n).toBeGreaterThanOrEqual(1);
      expect(n).toBeLessThanOrEqual(72);
    }
  });
});

describe("GRIEG_PRAELUDIUM_ANALYSE_NARRATIVE", () => {
  it("couvre les 5 sections (introduction/exposition, développement, réexposition, tranquillo/coda)", () => {
    expect(GRIEG_PRAELUDIUM_ANALYSE_NARRATIVE.sections).toHaveLength(5);
    expect(GRIEG_PRAELUDIUM_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  it("ne mentionne pas le processus de relecture (brouillon/correction) dans le contenu affiché", () => {
    const tousLesTextes = [
      GRIEG_PRAELUDIUM_ANALYSE_NARRATIVE.tonalite,
      GRIEG_PRAELUDIUM_ANALYSE_NARRATIVE.metrique,
      GRIEG_PRAELUDIUM_ANALYSE_NARRATIVE.forme,
      ...GRIEG_PRAELUDIUM_ANALYSE_NARRATIVE.sections.map((s) => s.texte),
      ...GRIEG_PRAELUDIUM_ANALYSE_NARRATIVE.synthese.map((s) => s.texte),
    ].join(" ");
    expect(tousLesTextes).not.toMatch(/brouillon|corrig|Dany/i);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("GRIEG_PRAELUDIUM_MESURES_1_72 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur (72 mesures, réparties sur plusieurs pages)", () => {
    tk.loadData(GRIEG_PRAELUDIUM_MESURES_1_72);
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
    expect(totalMesures).toBe(72);
  }, 20000);

  it("le surlignage Verovio avance de ~1558ms par mesure (Allegro vivace, 154bpm, 4/4)", async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
    const frais: any = new VerovioToolkit(await creerModule());
    frais.loadData(GRIEG_PRAELUDIUM_MESURES_1_72);
    frais.renderToMIDI();
    frais.setOptions({ scale: 30, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 3000 });
    frais.renderToSVG(1);

    let lastId: string | undefined;
    const ecarts: number[] = [];
    let lastMs = 0;
    for (let ms = 0; ms <= 30000; ms += 25) {
      const els = frais.getElementsAtTime(ms);
      const id = els.measure;
      if (id && id !== lastId) {
        if (lastId !== undefined) ecarts.push(ms - lastMs);
        lastId = id;
        lastMs = ms;
      }
    }
    expect(ecarts.length).toBeGreaterThanOrEqual(10);
    for (const e of ecarts) expect(e).toBeCloseTo((4 / 154) * 60000, -2);
  }, 20000);
});

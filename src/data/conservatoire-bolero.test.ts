import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  BOLERO_MESURES_1_98,
  BOLERO_ANALYSE,
  BOLERO_ANALYSE_NARRATIVE,
} from "./conservatoire-bolero";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (fichier
// « bolero-harmonise-annote.musicxml ») : Ravel, Boléro (arrangement piano
// harmonisé), 98 mesures, avec 4 balises <harmony> aux points structurels clés.
describe("BOLERO_MESURES_1_98", () => {
  it("s'analyse sans erreur et couvre 98 mesures en Do majeur, 3/4", () => {
    const score = parseMusicXML(BOLERO_MESURES_1_98);
    expect(score.fifths).toBe(0);
    expect(score.mode).toBe("major");
    expect(score.signature).toBe("3/4");
    expect(score.measures).toHaveLength(98);
    expect(score.tempos[0]).toEqual({ onset: 0, bpm: 72 });
  });

  it("2356 notes retenues (2651 <note> bruts, 130 silences, 26 notes d'ornement)", () => {
    const score = parseMusicXML(BOLERO_MESURES_1_98);
    expect(score.notes).toHaveLength(2356);
  });

  it("porte 4 balises <harmony>", () => {
    expect((BOLERO_MESURES_1_98.match(/<harmony /g) || [])).toHaveLength(4);
  });

  it("mesures 1 à 84 : la main gauche (voix 5/6) ne joue jamais autre chose que Do (pc0) et Sol (pc7)", () => {
    const score = parseMusicXML(BOLERO_MESURES_1_98);
    const mainGauche = score.notes.filter((n) => n.voice === "5" || n.voice === "6");
    for (let mnum = 1; mnum <= 84; mnum++) {
      const m = score.measures.find((mm) => mm.numero === mnum)!;
      const pcs = new Set(
        mainGauche
          .filter((n) => n.onset >= m.start && n.onset < m.start + m.length)
          .map((n) => n.pc)
      );
      for (const pc of pcs) {
        expect([0, 7]).toContain(pc);
      }
    }
  });

  it("mesure 85 : Mi majeur (Mi-Sol#-Si) surgit, sans préparation", () => {
    const score = parseMusicXML(BOLERO_MESURES_1_98);
    const m85 = score.measures.find((m) => m.numero === 85)!;
    const classes = new Set(
      score.notes.filter((n) => n.onset >= m85.start && n.onset < m85.start + m85.length).map((n) => n.pc)
    );
    expect(classes.has(4)).toBe(true);  // Mi
    expect(classes.has(8)).toBe(true);  // Sol#
    expect(classes.has(11)).toBe(true); // Si
  });

  it("mesures 93 à 96 : le même motif (Do-Sol-Do, La♭, Sol) est répété à l'identique — pas de Fa ni Fa#", () => {
    const score = parseMusicXML(BOLERO_MESURES_1_98);
    const mainGauche = score.notes.filter((n) => n.voice === "5" || n.voice === "6");
    const signatureDe = (mnum: number) => {
      const m = score.measures.find((mm) => mm.numero === mnum)!;
      return mainGauche
        .filter((n) => n.onset >= m.start && n.onset < m.start + m.length)
        .map((n) => `${n.pc}@${n.onset - m.start}`)
        .sort()
        .join(",");
    };
    const sig93 = signatureDe(93);
    expect(sig93.length).toBeGreaterThan(0);
    for (const mnum of [94, 95, 96]) {
      expect(signatureDe(mnum)).toBe(sig93);
    }
    // Aucun Fa (pc5) ni Fa# (pc6) dans aucune voix de ces 4 mesures.
    for (let mnum = 93; mnum <= 96; mnum++) {
      const m = score.measures.find((mm) => mm.numero === mnum)!;
      const pcs = new Set(
        score.notes.filter((n) => n.onset >= m.start && n.onset < m.start + m.length).map((n) => n.pc)
      );
      expect(pcs.has(5)).toBe(false);
      expect(pcs.has(6)).toBe(false);
    }
  });

  it("mesure 97 (LE CRASH) : le polyaccord Do-Fa (main droite) contre La♭-Si-Réb (main gauche)", () => {
    const score = parseMusicXML(BOLERO_MESURES_1_98);
    const m97 = score.measures.find((m) => m.numero === 97)!;
    // Premier temps fort de l'accord (onset relatif 384 ticks = 2e croche).
    const onsetCrash = m97.start + 384;
    const notesAuCrash = score.notes.filter((n) => n.onset === onsetCrash);
    const classes = new Set(notesAuCrash.map((n) => n.pc));
    expect(classes.has(0)).toBe(true);  // Do
    expect(classes.has(5)).toBe(true);  // Fa
    expect(classes.has(8)).toBe(true);  // La♭
    expect(classes.has(11)).toBe(true); // Si
    expect(classes.has(1)).toBe(true);  // Réb
  });

  it("mesure 98 : Do-Sol nu, sans tierce", () => {
    const score = parseMusicXML(BOLERO_MESURES_1_98);
    const m98 = score.measures.find((m) => m.numero === 98)!;
    const notes = score.notes.filter((n) => n.onset >= m98.start && n.onset < m98.start + m98.length);
    const classes = new Set(notes.map((n) => n.pc));
    expect(classes).toEqual(new Set([0, 7]));
    expect(classes.has(4)).toBe(false); // pas de tierce (Mi)
  });

  it("les repères de structure de Dany sont bien présents dans le fichier (<direction><words>)", () => {
    expect(BOLERO_MESURES_1_98).toContain("UNE harmonie pour 84 mesures");
    expect(BOLERO_MESURES_1_98).toContain("MI MAJEUR");
    expect(BOLERO_MESURES_1_98).toContain("LE CRASH");
    expect(BOLERO_MESURES_1_98).toContain("effondrement final");
  });

  it("BOLERO_ANALYSE : repères croissants, tous dans [1, 98]", () => {
    const nums = BOLERO_ANALYSE.map((m) => m.numero);
    expect(nums).toEqual([...nums].sort((a, b) => a - b));
    for (const n of nums) {
      expect(n).toBeGreaterThanOrEqual(1);
      expect(n).toBeLessThanOrEqual(98);
    }
  });
});

describe("BOLERO_ANALYSE_NARRATIVE", () => {
  it("couvre les 5 sections (pédale, Mi majeur, retour, crash, effondrement)", () => {
    expect(BOLERO_ANALYSE_NARRATIVE.sections).toHaveLength(5);
    expect(BOLERO_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  it("ne mentionne pas le processus de relecture (brouillon/correction) dans le contenu affiché", () => {
    const tousLesTextes = [
      BOLERO_ANALYSE_NARRATIVE.tonalite,
      BOLERO_ANALYSE_NARRATIVE.metrique,
      BOLERO_ANALYSE_NARRATIVE.forme,
      ...BOLERO_ANALYSE_NARRATIVE.sections.map((s) => s.texte),
      ...BOLERO_ANALYSE_NARRATIVE.synthese.map((s) => s.texte),
    ].join(" ");
    expect(tousLesTextes).not.toMatch(/brouillon|corrig|Dany/i);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("BOLERO_MESURES_1_98 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur (98 mesures, réparties sur plusieurs pages)", () => {
    tk.loadData(BOLERO_MESURES_1_98);
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
    expect(totalMesures).toBe(98);
  }, 20000);

  it("le surlignage Verovio avance de 2500ms par mesure (Tempo di bolero, 72bpm, 3/4)", async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
    const frais: any = new VerovioToolkit(await creerModule());
    frais.loadData(BOLERO_MESURES_1_98);
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
    expect(ecarts.length).toBeGreaterThanOrEqual(8);
    for (const e of ecarts) expect(e).toBeCloseTo((3 / 72) * 60000, -2);
  }, 20000);
});

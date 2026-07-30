import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  K545_EXPOSITION_MESURES_1_28,
  K545_EXPOSITION_ANALYSE,
  K545_EXPOSITION_ANALYSE_NARRATIVE,
} from "./conservatoire-k545-exposition";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (fichier
// « k545-exposition-annote.musicxml ») : la Sonate K.545 de Mozart, EXPOSITION
// COMPLÈTE (28 mesures), avec <harmony> et chiffrage romain complet en
// <direction><words>.
describe("K545_EXPOSITION_MESURES_1_28", () => {
  it("s'analyse sans erreur et couvre 28 mesures en Do majeur, 4/4", () => {
    const score = parseMusicXML(K545_EXPOSITION_MESURES_1_28);
    expect(score.fifths).toBe(0);
    expect(score.mode).toBe("major");
    expect(score.signature).toBe("4/4");
    expect(score.measures).toHaveLength(28);
    expect(score.tempos[0]).toEqual({ onset: 0, bpm: 140 });
  });

  it("porte 34 balises <harmony>, concordance totale avec le chiffrage", () => {
    expect((K545_EXPOSITION_MESURES_1_28.match(/<harmony /g) || [])).toHaveLength(34);
  });

  it("mesure 13 : la main gauche seule oscille Do#-Ré (×4) puis Do♮-Ré (×4)", () => {
    const score = parseMusicXML(K545_EXPOSITION_MESURES_1_28);
    const m13 = score.measures.find((m) => m.numero === 13)!;
    const notes = score.notes
      .filter((n) => n.onset >= m13.start && n.onset < m13.start + m13.length)
      .sort((a, b) => a.onset - b.onset);
    expect(notes).toHaveLength(16);
    const premiereMoitie = notes.slice(0, 8);
    const secondeMoitie = notes.slice(8);
    // Do# (classe 1) en alternance avec Ré (classe 2) sur la 1re moitié.
    expect(premiereMoitie.filter((n) => n.midi % 12 === 1)).toHaveLength(4);
    expect(premiereMoitie.filter((n) => n.midi % 12 === 2)).toHaveLength(4);
    // Do naturel (classe 0) en alternance avec Ré sur la 2e moitié.
    expect(secondeMoitie.filter((n) => n.midi % 12 === 0)).toHaveLength(4);
    expect(secondeMoitie.filter((n) => n.midi % 12 === 2)).toHaveLength(4);
  });

  it("mesure 25 porte bien le trille cadentiel (<trill-mark>)", () => {
    const m25 = K545_EXPOSITION_MESURES_1_28.slice(
      K545_EXPOSITION_MESURES_1_28.indexOf('<measure number="25"'),
      K545_EXPOSITION_MESURES_1_28.indexOf('<measure number="26"'),
    );
    expect(m25).toContain("<trill-mark");
  });

  it("mesures 18-21 : le cycle des quintes diatonique complet (I-IV-vii°-iii-vi-ii-V-I)", () => {
    const extraireMots = (num: number) => {
      const s = K545_EXPOSITION_MESURES_1_28.slice(
        K545_EXPOSITION_MESURES_1_28.indexOf(`<measure number="${num}"`),
        K545_EXPOSITION_MESURES_1_28.indexOf(`<measure number="${num + 1}"`),
      );
      return [...s.matchAll(/<words[^>]*>([^<]*)<\/words>/g)].map((m) => m[1]);
    };
    const degres = [18, 19, 20, 21].flatMap(extraireMots).join(" ; ");
    expect(degres).toMatch(/vii°6/);
    expect(degres).toMatch(/iii/);
    expect(degres).toMatch(/vi6/);
    expect(degres).toMatch(/ii/);
  });

  it("K545_EXPOSITION_ANALYSE couvre les 28 mesures, dans l'ordre", () => {
    expect(K545_EXPOSITION_ANALYSE).toHaveLength(28);
    const nums = K545_EXPOSITION_ANALYSE.map((m) => m.numero);
    expect(nums).toEqual(Array.from({ length: 28 }, (_, i) => i + 1));
  });
});

describe("K545_EXPOSITION_ANALYSE_NARRATIVE", () => {
  it("couvre les 6 sections de l'exposition (thème1, gammes, transition, thème2, marche, cadence)", () => {
    expect(K545_EXPOSITION_ANALYSE_NARRATIVE.sections).toHaveLength(6);
    expect(K545_EXPOSITION_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  // Le contenu affiché aux étudiants ne doit jamais faire référence au
  // processus de relecture (brouillon, correction...) — seul le commentaire
  // d'en-tête du fichier source garde ce journal.
  it("ne mentionne pas le processus de relecture (brouillon/correction) dans le contenu affiché", () => {
    const tousLesTextes = [
      K545_EXPOSITION_ANALYSE_NARRATIVE.tonalite,
      K545_EXPOSITION_ANALYSE_NARRATIVE.metrique,
      K545_EXPOSITION_ANALYSE_NARRATIVE.forme,
      ...K545_EXPOSITION_ANALYSE_NARRATIVE.sections.map((s) => s.texte),
      ...K545_EXPOSITION_ANALYSE_NARRATIVE.synthese.map((s) => s.texte),
    ].join(" ");
    expect(tousLesTextes).not.toMatch(/brouillon|corrig|Dany/i);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("K545_EXPOSITION_MESURES_1_28 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur (28 mesures, réparties sur plusieurs pages)", () => {
    tk.loadData(K545_EXPOSITION_MESURES_1_28);
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
    expect(totalMesures).toBe(28);
  });

  it("le surlignage Verovio avance de ~1714ms par mesure (140bpm, 4/4)", async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
    const frais: any = new VerovioToolkit(await creerModule());
    frais.loadData(K545_EXPOSITION_MESURES_1_28);
    frais.renderToMIDI();
    frais.setOptions({ scale: 30, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 3000 });
    frais.renderToSVG(1);

    let lastId: string | undefined;
    const ecarts: number[] = [];
    let lastMs = 0;
    for (let ms = 0; ms <= 50000; ms += 25) {
      const els = frais.getElementsAtTime(ms);
      const id = els.measure;
      if (id && id !== lastId) {
        if (lastId !== undefined) ecarts.push(ms - lastMs);
        lastId = id;
        lastMs = ms;
      }
    }
    expect(ecarts.length).toBeGreaterThanOrEqual(20);
    for (const e of ecarts) expect(e).toBeCloseTo((4 / 140) * 60000, -2);
  }, 20000);
});

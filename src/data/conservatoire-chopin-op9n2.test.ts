import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import { CHOPIN_OP9_N2_MESURES_1_9 } from "./conservatoire-chopin-op9n2";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (export
// MuseScore Studio 4.6.3, fichier « nocturne-opus-9-no-2-in-e-major.musicxml »,
// source musescore.com/score/53288) : mesure 1 = la levée célèbre (un seul
// sib4), mesures 2-9 en Mib majeur, 12/8, piano à 2 portées, avec `<harmony>`
// et `<lyric>` (chiffrage romain) portés directement sous la portée. Pas de
// balise <mode> : le mode majeur est INFÉRÉ (cf. musicxml-parse.test.ts).
describe("CHOPIN_OP9_N2_MESURES_1_9", () => {
  it("s'analyse sans erreur et couvre 9 mesures en Mib majeur (inféré), 12/8", () => {
    const score = parseMusicXML(CHOPIN_OP9_N2_MESURES_1_9);
    expect(score.fifths).toBe(-3);
    expect(score.mode).toBe("major");
    expect(score.signature).toBe("12/8");
    expect(score.measures).toHaveLength(9);
  });

  it("mesure 1 : la levée — un seul sib4 à la mélodie, rien à la main gauche", () => {
    const score = parseMusicXML(CHOPIN_OP9_N2_MESURES_1_9);
    const notes = score.notes.filter((n) => n.measure === 1);
    expect(notes).toHaveLength(1);
    expect(notes[0].pc).toBe(10); // Sib
    expect(notes[0].octave).toBe(4);
    expect(notes[0].voice).toBe("1");
  });

  it("mesure 2, 1er temps : triade de Mib majeur complète (mib-sol-sib) à la tonique", () => {
    const score = parseMusicXML(CHOPIN_OP9_N2_MESURES_1_9);
    const m2 = score.measures.find((m) => m.numero === 2)!;
    const premierTemps = score.notes.filter(
      (n) => n.measure === 2 && n.onset >= m2.start && n.onset < m2.start + m2.length / 4,
    );
    const pcs = new Set(premierTemps.map((n) => n.pc));
    expect([...pcs].sort((a, b) => a - b)).toEqual([3, 7, 10]); // Mib, Sol, Sib
  });

  it("les mesures 6-9 répètent exactement le chiffrage des mesures 2-5 (reprise du thème)", () => {
    for (const texte of ["I", "IIø7", "I7", "V7/II", "II", "V7", "VII/VI", "VI", "V65/V"]) {
      const occurrences = [...CHOPIN_OP9_N2_MESURES_1_9.matchAll(new RegExp(`<text>${texte.replace("/", "\\/")}</text>`, "g"))];
      expect(occurrences.length).toBeGreaterThanOrEqual(1);
    }
    // "I" (tonique) apparaît 6 fois : mesures 2 et 6 (2x chacune : I initial et
    // I7→I), plus mesures 5 et 9 (1x chacune : la résolution finale V7→I).
    expect([...CHOPIN_OP9_N2_MESURES_1_9.matchAll(/<text>I<\/text>/g)]).toHaveLength(6);
  });

  it("chaque mesure porte un symbole d'accord (<harmony>) — 24 au total, aucun sur la levée", () => {
    const harmonies = [...CHOPIN_OP9_N2_MESURES_1_9.matchAll(/<harmony print-frame="no">/g)];
    expect(harmonies).toHaveLength(24);
    const mesure1 = CHOPIN_OP9_N2_MESURES_1_9.slice(
      CHOPIN_OP9_N2_MESURES_1_9.indexOf('<measure number="1"'),
      CHOPIN_OP9_N2_MESURES_1_9.indexOf('<measure number="2"'),
    );
    expect(mesure1).not.toContain("<harmony");
  });

  it("aucune tête de note colorée (comme BWV227/Schubert) — le chiffrage porte seul l'analyse", () => {
    expect(CHOPIN_OP9_N2_MESURES_1_9).not.toContain("notehead color");
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("CHOPIN_OP9_N2_MESURES_1_9 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur", () => {
    tk.loadData(CHOPIN_OP9_N2_MESURES_1_9);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2000 });
    const svg: string = tk.renderToSVG(1);
    const notes = [...svg.matchAll(/<g id="([^"]+)" class="note"/g)];
    expect(notes.length).toBeGreaterThan(0);
  }, 20000);

  it("Verovio rend bien les 24 symboles d'accord", () => {
    tk.loadData(CHOPIN_OP9_N2_MESURES_1_9);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2000 });
    const svg: string = tk.renderToSVG(1);
    const harms = [...svg.matchAll(/<g[^>]*class="harm"[^>]*>[\s\S]*?<\/g>/g)];
    expect(harms).toHaveLength(24);
  });

  it("avec breaks=encoded (StudioScore + VueConservatoire), les 9 mesures tiennent sur UNE SEULE page", async () => {
    // Régression : le fichier source portait un <print new-page="yes"> à la
    // mesure 7 (hérité de la mise en page 2 pages du PDF d'origine sur
    // musescore.com) — corrigé en <print new-system="yes"> pour que
    // StudioScore, qui n'affiche que la page 1 de Verovio, montre bien les
    // 9 mesures et pas seulement les 6 premières.
    expect(CHOPIN_OP9_N2_MESURES_1_9).toContain("<print new-system");
    expect(CHOPIN_OP9_N2_MESURES_1_9).not.toContain('<print new-page="yes">');
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    const frais = new VerovioToolkit(await creerModule());
    frais.setOptions({ scale: 40, adjustPageHeight: true, breaks: "encoded", footer: "none", pageWidth: 1750 });
    frais.loadData(CHOPIN_OP9_N2_MESURES_1_9);
    frais.renderToMIDI();
    const svg: string = frais.renderToSVG(1);
    const systemes = svg.split(/<g[^>]*class="system"[^>]*>/).slice(1);
    const mesuresParSysteme = systemes.map((s) => [...s.matchAll(/<g[^>]*class="measure"[^>]*>/g)].length);
    expect(mesuresParSysteme.reduce((a, b) => a + b, 0)).toBe(9);
  });
});

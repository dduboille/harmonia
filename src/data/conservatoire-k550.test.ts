import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import { K550_MESURES_1_9 } from "./conservatoire-k550";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (export
// MuseScore Studio 4.6.3, fichier final "40bon.musicxml" — voir commentaire du
// fichier de données) : 8 mesures + une demi-mesure 9 (cadence IIø7-V7-I) en
// Sol mineur (2 bémols), 2/2, deux voix (1 = mélodie, 5 = basse — même
// numérotation que BWV846/Pathétique). Pas de balise <mode> : le mode mineur
// est INFÉRÉ (cf. musicxml-parse.test.ts).
describe("K550_MESURES_1_9", () => {
  it("s'analyse sans erreur et couvre 9 mesures en sol mineur (inféré), 2/2", () => {
    const score = parseMusicXML(K550_MESURES_1_9);
    expect(score.fifths).toBe(-2);
    expect(score.mode).toBe("minor");
    expect(score.signature).toBe("2/2");
    expect(score.measures).toHaveLength(9);
  });

  it("mesures 1-4 : basse en tapis sol-ré-sol-sib (I6/4, tonique)", () => {
    const score = parseMusicXML(K550_MESURES_1_9);
    for (let m = 1; m <= 4; m++) {
      const basse = score.notes.filter((n) => n.measure === m && n.voice === "5");
      expect(basse.map((n) => n.pc)).toEqual([7, 2, 7, 10, 7, 2, 7, 10]); // Sol,Ré,Sol,Sib ×2
    }
  });

  it("mesures 5-6 : basse en tapis sol-mib-sol-la (IIø7, sous-dominante)", () => {
    const score = parseMusicXML(K550_MESURES_1_9);
    for (const m of [5, 6]) {
      const basse = score.notes.filter((n) => n.measure === m && n.voice === "5");
      expect(basse.map((n) => n.pc)).toEqual([7, 3, 7, 9, 7, 3, 7, 9]); // Sol,Mib,Sol,La ×2
    }
  });

  it("mesures 7-8 : seule altération CHROMATIQUE de l'extrait, fa# (dominante de Ré)", () => {
    // Les mib (alter=-1) sont diatoniques à l'armure (2 bémols) et apparaissent
    // partout dans l'extrait — seul le fa# EXCÈDE l'armure, et seulement aux
    // mesures 7-8 (sensible de la dominante Ré).
    const score = parseMusicXML(K550_MESURES_1_9);
    const chromatiques = score.notes.filter((n) => n.step === "F" && n.alter === 1);
    expect(chromatiques.length).toBeGreaterThan(0);
    expect(new Set(chromatiques.map((n) => n.measure))).toEqual(new Set([7, 8]));
    expect(score.notes.some((n) => n.alter === 1 && n.step !== "F")).toBe(false);
  });

  it("mesure 9 : demi-mesure, retour à I6/4 (sib4 tenu, basse sol-ré-sol-sib), 2e moitié silencieuse", () => {
    // La cadence IIø7-V7-I que la leçon enseigne : Dany a ajouté cette demi-mesure
    // spécifiquement pour la compléter (les 2 derniers temps sont un silence).
    const score = parseMusicXML(K550_MESURES_1_9);
    const melodie = score.notes.filter((n) => n.measure === 9 && n.voice === "1");
    const basse = score.notes.filter((n) => n.measure === 9 && n.voice === "5");
    expect(melodie).toHaveLength(2);
    expect(melodie.every((n) => n.pc === 10 && n.octave === 4)).toBe(true); // Sib4 répété
    expect(basse.map((n) => n.pc)).toEqual([7, 2, 7, 10]); // Sol,Ré,Sol,Sib — même tapis qu'aux mesures 1-4
  });

  it("chaque mesure porte un symbole d'accord (<harmony>) correspondant à son analyse", () => {
    const attendus = [
      /<root-step>G<\/root-step>[\s\S]*?kind text="m">minor[\s\S]*?bass-step>D/,   // I6/4
      /<root-step>A<\/root-step>[\s\S]*?kind text="m7b5">half-diminished[\s\S]*?bass-step>E/, // IIø7
      /<root-step>D<\/root-step>[\s\S]*?kind text="7">dominant/,                   // V7
      /<root-step>D<\/root-step>[\s\S]*?<kind>major<\/kind>[\s\S]*?bass-step>A/,   // V6/4
    ];
    for (const re of attendus) expect(K550_MESURES_1_9).toMatch(re);
  });

  it("34 têtes de note colorées par fonction (15 bleu, 8 orange, 11 rouge) — pas uniforme", () => {
    const bleu = [...K550_MESURES_1_9.matchAll(/notehead color="#0000FF"/g)];
    const orange = [...K550_MESURES_1_9.matchAll(/notehead color="#FFAA00"/g)];
    const rouge = [...K550_MESURES_1_9.matchAll(/notehead color="#FF0000"/g)];
    expect(bleu).toHaveLength(15);
    expect(orange).toHaveLength(8);
    expect(rouge).toHaveLength(11);
  });

  it("chaque mesure annotée porte son chiffrage + fonction en parole (<lyric>) sous la basse", () => {
    for (const texte of ["I6/4(T)", "II+4/3(SD)", "V7(D)", "V6/4(D)", "V7+6(D)"]) {
      expect(K550_MESURES_1_9).toContain(`<text>${texte}</text>`);
    }
    // "I6/4(T)" apparaît deux fois : mesure 1 (ouverture) ET mesure 9 (retour, la
    // cadence complétée).
    expect([...K550_MESURES_1_9.matchAll(/<text>I6\/4\(T\)<\/text>/g)]).toHaveLength(2);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("K550_MESURES_1_9 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur", () => {
    tk.loadData(K550_MESURES_1_9);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 3000 });
    const svg: string = tk.renderToSVG(1);
    const notes = [...svg.matchAll(/<g id="([^"]+)" class="note"/g)];
    expect(notes.length).toBeGreaterThan(0);
  });

  it("Verovio rend bien les couleurs par fonction (têtes de note)", () => {
    tk.loadData(K550_MESURES_1_9);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 3000 });
    const svg: string = tk.renderToSVG(1);
    expect([...svg.matchAll(/fill="#0000FF"/gi)]).toHaveLength(15);
    expect([...svg.matchAll(/fill="#FFAA00"/gi)]).toHaveLength(8);
    expect([...svg.matchAll(/fill="#FF0000"/gi)]).toHaveLength(11);
  });

  it("Verovio rend le chiffrage romain sous la basse", () => {
    tk.loadData(K550_MESURES_1_9);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 3000 });
    const svg: string = tk.renderToSVG(1);
    expect(svg).toContain("II+4/3(SD)");
    expect(svg).toContain("V6/4(D)");
  });

  it("avec breaks=encoded (StudioScore + VueConservatoire), respecte les sauts de système aux mesures 5 et 9", async () => {
    expect(K550_MESURES_1_9).toContain("<print new-system");
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    const frais = new VerovioToolkit(await creerModule());
    frais.setOptions({ scale: 40, adjustPageHeight: true, breaks: "encoded", footer: "none", pageWidth: 1750 });
    frais.loadData(K550_MESURES_1_9);
    frais.renderToMIDI();
    const svg: string = frais.renderToSVG(1);
    const systemes = svg.split(/<g[^>]*class="system"[^>]*>/).slice(1);
    const mesuresParSysteme = systemes.map((s) => [...s.matchAll(/<g[^>]*class="measure"[^>]*>/g)].length);
    // 4 mesures, puis 4 mesures, puis la demi-mesure 9 seule sur son système.
    expect(mesuresParSysteme).toEqual([4, 4, 1]);
  });
});

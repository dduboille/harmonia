import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import { PATHETIQUE2_MESURES_1_8 } from "./conservatoire-pathetique2";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (export
// MuseScore Studio 4.6.3, voir commentaire du fichier de données) : 8 mesures en
// La♭ majeur (4 bémols), 2/4, trois voix (1 = mélodie, 2 = accompagnement, 5 =
// basse — même numérotation que BWV846_MESURES_1_8).
describe("PATHETIQUE2_MESURES_1_8", () => {
  it("s'analyse sans erreur et couvre 8 mesures en la♭ majeur, 2/4", () => {
    const score = parseMusicXML(PATHETIQUE2_MESURES_1_8);
    expect(score.fifths).toBe(-4);
    // Ce fichier n'a PAS de balise <mode> (comme tous les exports MuseScore de
    // Dany) : "major" vient donc de `inferModeParProfil`, pas d'un repli par
    // défaut — garde-fou en conditions réelles contre le faux positif identifié
    // en le concevant (le mi bécarre de passage, mesures 4/6, ne doit PAS faire
    // basculer la lecture vers fa mineur, son relatif).
    expect(score.mode).toBe("major");
    expect(score.signature).toBe("2/4");
    expect(score.measures).toHaveLength(8);
  });

  it("mesure 1 : mélodie do4-sib3, basse la♭2-réb3 (I)", () => {
    const score = parseMusicXML(PATHETIQUE2_MESURES_1_8);
    const melodie = score.notes.filter((n) => n.measure === 1 && n.voice === "1");
    const basse = score.notes.filter((n) => n.measure === 1 && n.voice === "5");
    expect(melodie.map((n) => [n.pc, n.octave])).toEqual([[0, 4], [10, 3]]);
    expect(basse.map((n) => [n.pc, n.octave])).toEqual([[8, 2], [1, 3]]);
  });

  it("mesures 4 et 6 : les deux notes chromatiques de la mélodie (mi et la naturels)", () => {
    const score = parseMusicXML(PATHETIQUE2_MESURES_1_8);
    const m4 = score.notes.filter((n) => n.measure === 4 && n.voice === "1");
    const m6 = score.notes.filter((n) => n.measure === 6 && n.voice === "1");
    expect(m4[1].step).toBe("E");
    expect(m4[1].alter).toBe(0); // mi NATUREL, pas mib (chromatique hors gamme)
    expect(m6[1].step).toBe("A");
    expect(m6[1].alter).toBe(0); // la NATUREL, pas lab (chromatique hors gamme)
  });

  it("mesure 7 : seule triade mineure de l'extrait (ii, sib-réb-fa), broderie mélodique staccato", () => {
    const score = parseMusicXML(PATHETIQUE2_MESURES_1_8);
    const melodie = score.notes.filter((n) => n.measure === 7 && n.voice === "1");
    // Réb4 (temps 1) puis la broderie staccato do4-sib3-lab3-sol3, fidèle à la
    // gravure de Dany (l'ancienne reconstruction s'arrêtait à ces 5 notes aussi,
    // mais la mesure 8 ci-dessous, elle, gagne en détail).
    expect(melodie.map((n) => `${n.step}${n.alter === -1 ? "b" : ""}${n.octave}`)).toEqual([
      "Db4", "C4", "Bb3", "Ab3", "G3",
    ]);
  });

  it("mesure 8 : accord {sol3, sib3} puis la♭3, et le tourné final en triolet (do4-mib4-la♭4)", () => {
    const score = parseMusicXML(PATHETIQUE2_MESURES_1_8);
    const melodie = score.notes.filter((n) => n.measure === 8 && n.voice === "1");
    // Contrairement à l'ancienne reconstruction (silencieuse après le la♭3), le
    // fichier réel de Dany grave le tourné en triolet qui clôt la phrase.
    expect(melodie).toHaveLength(6);
    expect(melodie.map((n) => [n.pc, n.octave])).toEqual([
      [7, 3], [10, 3], // accord sol3-sib3
      [8, 3],          // la♭3
      [0, 4], [3, 4], [8, 4], // triolet do4-mib4-la♭4
    ]);
    const basse = score.notes.filter((n) => n.measure === 8 && n.voice === "5");
    expect(basse).toHaveLength(3); // la♭1, la♭2, la♭1 — le silence final n'est pas une note
    expect(basse.every((n) => n.pc === 8)).toBe(true); // pédale de tonique, doublée à l'octave
  });

  it("chaque mesure porte un symbole d'accord (<harmony>) correspondant à son analyse", () => {
    const mesures = PATHETIQUE2_MESURES_1_8.split(/<measure number="\d+"[^>]*>/).slice(1);
    expect(mesures).toHaveLength(8);
    const attendus = [
      /<root-step>A<\/root-step>[\s\S]*?root-alter>-1[\s\S]*?<kind>major<\/kind>/, // I, pas de basse
      /<root-step>A<\/root-step>[\s\S]*?<kind>major<\/kind>[\s\S]*?bass-step>C/,   // I6, basse do
      /<root-step>A<\/root-step>[\s\S]*?<kind>major<\/kind>/,                     // I
      /<root-step>E<\/root-step>[\s\S]*?<kind>major<\/kind>/,                     // V
      /<root-step>D<\/root-step>[\s\S]*?<kind>major<\/kind>/,                     // IV
      /<root-step>A<\/root-step>[\s\S]*?<kind>major<\/kind>[\s\S]*?bass-step>C/,  // I6, basse do
      /<root-step>B<\/root-step>[\s\S]*?kind text="m">minor/,                     // ii
      /<root-step>A<\/root-step>[\s\S]*?<kind>major<\/kind>/,                     // I
    ];
    mesures.forEach((m, i) => expect(m).toMatch(attendus[i]));
  });

  it("24 têtes de note colorées par fonction (15 bleu, 3 rouge, 6 orange) — pas uniforme", () => {
    const bleu = [...PATHETIQUE2_MESURES_1_8.matchAll(/notehead color="#0000FF"/g)];
    const rouge = [...PATHETIQUE2_MESURES_1_8.matchAll(/notehead color="#FF0000"/g)];
    const orange = [...PATHETIQUE2_MESURES_1_8.matchAll(/notehead color="#FFAA00"/g)];
    expect(bleu).toHaveLength(15);
    expect(rouge).toHaveLength(3);
    expect(orange).toHaveLength(6);
  });

  it("chaque mesure porte son chiffrage romain + fonction en parole (<lyric>) sous la basse", () => {
    const attendus = ["I(T)", "I6(T)", "I(T)", "V(D)", "IV(SD)", "I6(T)", "II(SD)", "I(T)"];
    for (const texte of attendus) {
      expect(PATHETIQUE2_MESURES_1_8).toContain(`<text>${texte}</text>`);
    }
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("PATHETIQUE2_MESURES_1_8 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur", () => {
    tk.loadData(PATHETIQUE2_MESURES_1_8);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 3000 });
    const svg: string = tk.renderToSVG(1);
    const notes = [...svg.matchAll(/<g id="([^"]+)" class="note"/g)];
    expect(notes.length).toBeGreaterThan(0);
  }, 20000);

  it("Verovio rend bien les couleurs par fonction (têtes de note)", () => {
    tk.loadData(PATHETIQUE2_MESURES_1_8);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 3000 });
    const svg: string = tk.renderToSVG(1);
    expect([...svg.matchAll(/fill="#0000FF"/gi)]).toHaveLength(15);
    expect([...svg.matchAll(/fill="#FF0000"/gi)]).toHaveLength(3);
    expect([...svg.matchAll(/fill="#FFAA00"/gi)]).toHaveLength(6);
  });

  it("Verovio rend les symboles d'accords et le chiffrage romain sous la basse", () => {
    tk.loadData(PATHETIQUE2_MESURES_1_8);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 3000 });
    const svg: string = tk.renderToSVG(1);
    expect(svg).toContain("I6(T)");
    expect(svg).toContain("V(D)");
    expect(svg).toContain("II(SD)");
  });

  it("avec breaks=encoded (StudioScore + VueConservatoire), respecte la mise en page 4+4 de Dany", async () => {
    // PATHETIQUE2_MESURES_1_8 porte un <print new-system="yes"> sur la mesure 5
    // (système de 4+4 mesures, comme demandé par Dany) : VueConservatoire détecte
    // cette balise et bascule StudioScore sur breaks="encoded" plutôt que "auto"
    // — sinon Verovio recalcule ses propres sauts (constaté : "5 mesures puis 3").
    expect(PATHETIQUE2_MESURES_1_8).toContain("<print new-system");
    // Instance FRAÎCHE, MÊME ORDRE D'APPELS que StudioScore.tsx : `setOptions`
    // AVANT `loadData` (cf. le même test dans conservatoire-bwv846.test.ts pour
    // le pourquoi — sinon le tout premier rendu ignore les sauts "encoded").
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    const frais = new VerovioToolkit(await creerModule());
    frais.setOptions({ scale: 40, adjustPageHeight: true, breaks: "encoded", footer: "none", pageWidth: 1750 });
    frais.loadData(PATHETIQUE2_MESURES_1_8);
    frais.renderToMIDI();
    const svg: string = frais.renderToSVG(1);
    const systemes = svg.split(/<g[^>]*class="system"[^>]*>/).slice(1);
    const mesuresParSysteme = systemes.map((s) => [...s.matchAll(/<g[^>]*class="measure"[^>]*>/g)].length);
    expect(mesuresParSysteme).toEqual([4, 4]);
  });
});

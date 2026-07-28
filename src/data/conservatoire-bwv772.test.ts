import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import { BWV772_MESURES_1_8, BWV772_ANALYSE } from "./conservatoire-bwv772";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (export
// MuseScore Studio 4.6.3, fichier « js-bach-invention-no-1-bwv-772.musicxml »,
// source musescore.com/user/28614883/scores/6299667) : la 1ère phrase de
// l'Invention n°1 en Do majeur BWV 772 de J.S. Bach, avec <harmony> et
// <lyric> (chiffrage romain) portés directement sous la portée.
describe("BWV772_MESURES_1_8", () => {
  it("s'analyse sans erreur et couvre 8 mesures en Do majeur, 4/4", () => {
    const score = parseMusicXML(BWV772_MESURES_1_8);
    expect(score.fifths).toBe(0);
    expect(score.mode).toBe("major");
    expect(score.signature).toBe("4/4");
    expect(score.measures).toHaveLength(8);
    expect(score.tempos).toEqual([{ onset: 0, bpm: 120 }]); // déjà écrit dans le fichier
  });

  // Régression : même bug d'affichage que It+6/Fr+6 sur Schubert D.845 cette
  // même session (kind="none" fait ignorer le kind text par Verovio, qui
  // n'affiche que le root-step). Corrigé en kind="other" + root-step vide.
  it("mesure 2 : le symbole \"V7\" (kind=other) ne porte plus le bug d'affichage kind=none", () => {
    expect(BWV772_MESURES_1_8).not.toContain('<kind text="V7">none</kind>');
    expect(BWV772_MESURES_1_8).toContain('<kind text="V7">other</kind>');
  });

  it("aucune tête de note colorée — le chiffrage porte seul l'analyse", () => {
    expect(BWV772_MESURES_1_8).not.toContain("notehead color");
  });

  it("aucun <print new-page> ne coupe l'affichage (systèmes uniquement)", () => {
    expect(BWV772_MESURES_1_8).not.toContain('<print new-page="yes">');
  });

  it("BWV772_ANALYSE couvre les 8 mesures", () => {
    expect(BWV772_ANALYSE).toHaveLength(8);
    expect(BWV772_ANALYSE[0]).toMatchObject({ numero: 1, degre: "I", fonction: "T" });
    expect(BWV772_ANALYSE[6]).toMatchObject({ numero: 7, degre: "I", fonction: "T" }); // module vers Sol majeur
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("BWV772_MESURES_1_8 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur, et le symbole V7 (ex-kind=none) s'affiche bien tel quel", () => {
    tk.loadData(BWV772_MESURES_1_8);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2000 });
    const svg: string = tk.renderToSVG(1);
    const notes = [...svg.matchAll(/<g id="([^"]+)" class="note"/g)];
    expect(notes.length).toBeGreaterThan(0);
    const harms = [...svg.matchAll(/<g[^>]*class="harm"[^>]*>[\s\S]*?<\/g>/g)].map((m) =>
      m[0].replace(/<[^>]+>/g, "").trim(),
    );
    // Le 3e symbole de la partition (mesure 2, 2e accord) est celui qui portait
    // le bug ; sans le correctif, il afficherait "C" (root-step) au lieu de "V7".
    expect(harms[2]).toBe("V7");
  });

  it("avec breaks=encoded (StudioScore + VueConservatoire), les 8 mesures tiennent sur UNE SEULE page", async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    const frais = new VerovioToolkit(await creerModule());
    frais.setOptions({ scale: 40, adjustPageHeight: true, breaks: "encoded", footer: "none", pageWidth: 1750 });
    frais.loadData(BWV772_MESURES_1_8);
    frais.renderToMIDI();
    const svg: string = frais.renderToSVG(1);
    const systemes = svg.split(/<g[^>]*class="system"[^>]*>/).slice(1);
    const mesuresParSysteme = systemes.map((s) => [...s.matchAll(/<g[^>]*class="measure"[^>]*>/g)].length);
    expect(mesuresParSysteme.reduce((a, b) => a + b, 0)).toBe(8);
  });
});

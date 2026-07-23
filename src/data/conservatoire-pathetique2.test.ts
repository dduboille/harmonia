import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import { PATHETIQUE2_MESURES_1_8 } from "./conservatoire-pathetique2";

// Vérifie l'extrait rejoué contre le MIDI de référence Mutopia (voir commentaire du
// fichier de données) : 8 mesures en La♭ majeur (4 bémols), 2/4, trois voix (mélodie,
// accompagnement, basse), et les hauteurs qui portent les deux notes chromatiques de
// la mélodie (mi et la naturels, mesures 4 et 6).
describe("PATHETIQUE2_MESURES_1_8", () => {
  it("s'analyse sans erreur et couvre 8 mesures en la♭ majeur, 2/4", () => {
    const score = parseMusicXML(PATHETIQUE2_MESURES_1_8);
    expect(score.fifths).toBe(-4);
    expect(score.mode).toBe("major");
    expect(score.signature).toBe("2/4");
    expect(score.measures).toHaveLength(8);
  });

  it("mesure 1 : mélodie do4-sib3, basse la♭2-réb3 (I)", () => {
    const score = parseMusicXML(PATHETIQUE2_MESURES_1_8);
    const melodie = score.notes.filter((n) => n.measure === 1 && n.voice === "1");
    const basse = score.notes.filter((n) => n.measure === 1 && n.voice === "3");
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

  it("mesure 8 : accord {sol3, sib3} à la mélodie, silence final à la basse", () => {
    const score = parseMusicXML(PATHETIQUE2_MESURES_1_8);
    const melodie = score.notes.filter((n) => n.measure === 8 && n.voice === "1");
    const basse = score.notes.filter((n) => n.measure === 8 && n.voice === "3");
    expect(melodie).toHaveLength(3); // accord (2 notes) + la♭3 — le silence final n'est pas une note
    expect(melodie.map((n) => [n.pc, n.octave])).toEqual([[7, 3], [10, 3], [8, 3]]);
    expect(basse).toHaveLength(3); // la♭1, la♭2, la♭1 — le silence final n'est pas une note
  });

  it("compte les notes attendues par mesure (mélodie + accompagnement + basse)", () => {
    const score = parseMusicXML(PATHETIQUE2_MESURES_1_8);
    const attendues = [2 + 8 + 2, 2 + 8 + 2, 4 + 8 + 4, 2 + 8 + 2, 4 + 8 + 2, 2 + 8 + 2, 5 + 8 + 2, 3 + 10 + 3];
    for (let m = 1; m <= 8; m++) {
      expect(score.notes.filter((n) => n.measure === m)).toHaveLength(attendues[m - 1]);
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
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2000 });
    const svg: string = tk.renderToSVG(1);
    const notes = [...svg.matchAll(/<g id="([^"]+)" class="note"/g)];
    // Attaques NOTÉES (chaque tête de note dessinée), pas les notes fusionnées par mesure.
    expect(notes.length).toBeGreaterThan(0);
  });
});

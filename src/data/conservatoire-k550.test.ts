import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import { K550_MESURES_1_4 } from "./conservatoire-k550";

// Vérifie l'extrait rejoué contre la transcription de référence (voir commentaire
// du fichier de données — mélodie confirmée par la partition LilyPond intégrée à
// l'article Wikipédia (EN) sur la symphonie, recoupée avec la description
// musicologique de l'article Wikipédia (DE)) : 4 mesures en sol mineur, 2/2, et la
// levée caractéristique (mib-ré) qui introduit le thème au 4e temps de la mesure 1.
describe("K550_MESURES_1_4", () => {
  it("s'analyse sans erreur et couvre 4 mesures en sol mineur, 2/2", () => {
    const score = parseMusicXML(K550_MESURES_1_4);
    expect(score.fifths).toBe(-2);
    expect(score.mode).toBe("minor");
    expect(score.signature).toBe("2/2");
    expect(score.measures).toHaveLength(4);
  });

  it("mesure 1 : la mélodie n'entre qu'au 4e temps (mib5-ré5), le reste est silence", () => {
    const score = parseMusicXML(K550_MESURES_1_4);
    const melodie = score.notes.filter((n) => n.measure === 1 && n.voice === "1");
    expect(melodie).toHaveLength(2);
    expect(melodie.map((n) => [n.pc, n.octave])).toEqual([[3, 5], [2, 5]]); // Mib5, Ré5
  });

  it("motif du soupir (mib-ré répété) aux mesures 1 et 2, sixte ré-sib à la mesure 3", () => {
    const score = parseMusicXML(K550_MESURES_1_4);
    const m2 = score.notes.filter((n) => n.measure === 2 && n.voice === "1");
    const m3 = score.notes.filter((n) => n.measure === 3 && n.voice === "1");
    expect(m2.map((n) => [n.pc, n.octave])).toEqual([[2, 5], [3, 5], [2, 5], [2, 5], [3, 5], [2, 5]]);
    expect(m3[0].pc).toBe(2); // Ré5
    expect(m3[1].pc).toBe(10); // Sib5 — la sixte ascendante caractéristique (ré→sib)
  });

  it("pédale de tonique (sol) tenue en accompagnement et en basse sur les 4 mesures", () => {
    const score = parseMusicXML(K550_MESURES_1_4);
    for (let m = 1; m <= 4; m++) {
      const accomp = score.notes.filter((n) => n.measure === m && n.voice === "2");
      const basse = score.notes.filter((n) => n.measure === m && n.voice === "3");
      expect(accomp.every((n) => n.pc === 7)).toBe(true); // toutes les notes = sol
      expect(basse.every((n) => n.pc === 7 && n.octave === 2)).toBe(true);
    }
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("K550_MESURES_1_4 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur", () => {
    tk.loadData(K550_MESURES_1_4);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2000 });
    const svg: string = tk.renderToSVG(1);
    const notes = [...svg.matchAll(/<g id="([^"]+)" class="note"/g)];
    expect(notes.length).toBeGreaterThan(0);
  });
});

import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import { BWV227_MESURES_1_8 } from "./conservatoire-bwv227";

// Vérifie l'extrait rejoué contre la transcription de référence (voir commentaire
// du fichier de données, CPDL/ChoralWiki) : 8 mesures en mi mineur, 4/4, quatre
// voix réelles, et la cadence parfaite (V7-I, fondamentale basse+soprano) qui
// clôt la mesure 6.
describe("BWV227_MESURES_1_8", () => {
  it("s'analyse sans erreur et couvre 8 mesures en mi mineur, 4/4", () => {
    const score = parseMusicXML(BWV227_MESURES_1_8);
    expect(score.fifths).toBe(1);
    expect(score.mode).toBe("minor");
    expect(score.signature).toBe("4/4");
    expect(score.measures).toHaveLength(8);
  });

  it("mesure 1, 1er temps : accord de tonique mi mineur (mi doublé, sol, si) aux 4 voix", () => {
    const score = parseMusicXML(BWV227_MESURES_1_8);
    const premierTemps = score.notes.filter((n) => n.measure === 1 && n.onset === score.measures[0].start);
    expect(premierTemps).toHaveLength(4); // soprano, alto, ténor, basse
    expect(premierTemps.map((n) => n.pc).sort((a, b) => a - b)).toEqual([4, 4, 7, 11]); // Mi(basse) Mi(ténor) Sol(alto) Si(soprano)
  });

  it("mesure 5 : la dernière note de chaque voix forme une dominante 7e (si-ré#-fa#-la)", () => {
    // Rythmes différents par voix : la dernière ATTAQUE de chacune ne tombe pas au
    // même instant (basse en croche dès le temps 3, soprano jusqu'au dernier 8e) —
    // on prend donc la dernière note DE CHAQUE VOIX plutôt qu'un instant commun.
    const score = parseMusicXML(BWV227_MESURES_1_8);
    const m5 = score.notes.filter((n) => n.measure === 5);
    const dernieresParVoix = [1, 2, 3, 4].map((v) => {
      const notes = m5.filter((n) => n.voice === String(v));
      return notes.reduce((max, n) => (n.onset > max.onset ? n : max));
    });
    expect(dernieresParVoix.map((n) => n.pc).sort((a, b) => a - b)).toEqual([3, 6, 9, 11]); // Ré#(3) Fa#(6) La(9) Si(11)
  });

  it("mesure 6 : cadence parfaite — mi mineur avec la fondamentale au soprano ET à la basse", () => {
    const score = parseMusicXML(BWV227_MESURES_1_8);
    const soprano = score.notes.find((n) => n.measure === 6 && n.voice === "1");
    const basse = score.notes.find((n) => n.measure === 6 && n.voice === "4");
    expect(soprano?.pc).toBe(4); // Mi
    expect(basse?.pc).toBe(4); // Mi
    expect(soprano?.octave).toBe(5);
    expect(basse?.octave).toBe(3);
  });

  it("les 4 voix (soprano/alto/ténor/basse) sont bien présentes sur tout l'extrait", () => {
    const score = parseMusicXML(BWV227_MESURES_1_8);
    for (let v = 1; v <= 4; v++) {
      const notes = score.notes.filter((n) => n.voice === String(v));
      expect(notes.length).toBeGreaterThan(0);
      expect(new Set(notes.map((n) => n.measure)).size).toBe(8); // présente dans les 8 mesures
    }
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("BWV227_MESURES_1_8 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur", () => {
    tk.loadData(BWV227_MESURES_1_8);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2000 });
    const svg: string = tk.renderToSVG(1);
    const notes = [...svg.matchAll(/<g id="([^"]+)" class="note"/g)];
    expect(notes.length).toBeGreaterThan(0);
  });
});

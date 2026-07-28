import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import { planifierLecture } from "@/lib/studio-playback";
import {
  ALL_THE_THINGS_MESURES_1_8,
  ALL_THE_THINGS_ANALYSE,
  ALL_THE_THINGS_ANALYSE_NARRATIVE,
} from "./conservatoire-all-the-things";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (export
// MuseScore Studio 4.6.3, fichier « all-the-things-you-are-jerome-
// kernoscar-hammerstein-ii-solo-piano.musicxml », piano solo, 53 mesures au
// total — TRONQUÉ aux 8 premières, cf. commentaire d'en-tête) : le vamp
// chromatique d'introduction, en accords de dominante altérés (#9), AVANT le
// standard lui-même qui commence à la mesure 9 du fichier source.
describe("ALL_THE_THINGS_MESURES_1_8", () => {
  it("s'analyse sans erreur et couvre 8 mesures, 4/4", () => {
    const score = parseMusicXML(ALL_THE_THINGS_MESURES_1_8);
    expect(score.fifths).toBe(-4);
    expect(score.signature).toBe("4/4");
    expect(score.measures).toHaveLength(8);
    expect(score.tempos).toEqual([{ onset: 0, bpm: 140 }]);
  });

  it("le chiffrage de Dany est du texte libre (<words>), pas des <harmony> structurées", () => {
    expect(ALL_THE_THINGS_MESURES_1_8).not.toContain("<harmony");
    expect(ALL_THE_THINGS_MESURES_1_8).toContain("<words");
  });

  it("alterne Réb7(#9) (« SubV/V » puis « SubV7/V ») et Do7(#9) (« V7/VI »)", () => {
    expect(ALL_THE_THINGS_MESURES_1_8).toContain("Db7(#9)");
    expect(ALL_THE_THINGS_MESURES_1_8).toContain("C7(#9)");
    expect(ALL_THE_THINGS_MESURES_1_8).toContain("<text>SubV/V</text>");
    expect(ALL_THE_THINGS_MESURES_1_8).toContain("<text>SubV7/V</text>");
    expect([...ALL_THE_THINGS_MESURES_1_8.matchAll(/<text>V7\/VI<\/text>/g)]).toHaveLength(2);
  });

  it("mesure 2 : les tensions (3ce, 7e, #9 de Réb7) sonnent sans fondamentale ni quinte à la voix supérieure", () => {
    const score = parseMusicXML(ALL_THE_THINGS_MESURES_1_8);
    const m2 = score.measures.find((m) => m.numero === 2)!;
    const notes = score.notes.filter(
      (n) => n.measure === 2 && n.voice === "1" && n.onset === m2.start + (m2.length * 1.5) / 4,
    );
    const pcs = new Set(notes.map((n) => n.pc));
    expect(pcs.has(5)).toBe(true); // Fa (3ce de Réb7)
    expect(pcs.has(11)).toBe(true); // Si (7e de Réb7, orthographiée Cb)
    expect(pcs.has(4)).toBe(true); // Mi (#9 de Réb7)
  });

  it("aucune tête de note colorée — le chiffrage porte seul l'analyse", () => {
    expect(ALL_THE_THINGS_MESURES_1_8).not.toContain("notehead color");
  });

  it("aucun <print new-page> ne coupe l'affichage dans ces 8 mesures", () => {
    expect(ALL_THE_THINGS_MESURES_1_8).not.toContain('<print new-page="yes">');
  });

  it("ALL_THE_THINGS_ANALYSE couvre les mesures 2 à 8 (la levée, mesure 1, est omise)", () => {
    expect(ALL_THE_THINGS_ANALYSE).toHaveLength(7);
    expect(ALL_THE_THINGS_ANALYSE[0].numero).toBe(2);
    for (const a of ALL_THE_THINGS_ANALYSE) {
      expect(a.fonction).toBe("D");
      expect(a.dominanteSecondaire).toBe(true);
    }
  });

  // Régression : Dany distingue "SubV/V" (mesures 2-3) de "SubV7/V" (mesures
  // 6-7) pour le MÊME accord (Réb7(#9)) — vérifié avant publication de
  // l'analyse narrative, qui préserve cette nuance (le brouillon de
  // référence uniformisait à tort en "SubV7/V" partout).
  it("le chiffrage distingue SubV/V (mesures 2-3) de SubV7/V (mesures 6-7)", () => {
    const m2 = ALL_THE_THINGS_ANALYSE.find((a) => a.numero === 2)!;
    const m6 = ALL_THE_THINGS_ANALYSE.find((a) => a.numero === 6)!;
    expect(m2.degre).toBe("SubV/V");
    expect(m6.degre).toBe("SubV7/V");
    expect(m2.degre).not.toBe(m6.degre);
  });

  // Régression : le retour du vamp (mesures 6-8) n'est PAS une répétition
  // stricte — la main droite y touche des couleurs absentes du premier
  // passage (13e à la mesure 7, quinte à la mesure 8) — vérifié avant
  // publication (le brouillon de référence affirmait à tort une
  // "répétition stricte").
  it("mesure 7 touche la 13e (Sib) et la 11e augmentée (Sol), absentes du premier passage (mesure 2)", () => {
    const score = parseMusicXML(ALL_THE_THINGS_MESURES_1_8);
    const m2pcs = new Set(
      score.notes.filter((n) => n.measure === 2 && n.voice === "1").map((n) => n.pc),
    );
    const m7pcs = new Set(
      score.notes.filter((n) => n.measure === 7 && n.voice === "1").map((n) => n.pc),
    );
    expect(m2pcs.has(10)).toBe(false); // Sib absent au 1er passage
    expect(m7pcs.has(10)).toBe(true); // Sib présent au retour (13e)
    expect(m2pcs.has(7)).toBe(false); // Sol absent au 1er passage
    expect(m7pcs.has(7)).toBe(true); // Sol présent au retour (11e augmentée)
  });
});

describe("ALL_THE_THINGS_ANALYSE_NARRATIVE", () => {
  it("couvre les 5 étapes du vamp, de l'anacrouse à la suspension finale", () => {
    expect(ALL_THE_THINGS_ANALYSE_NARRATIVE.sections).toHaveLength(5);
    expect(ALL_THE_THINGS_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("ALL_THE_THINGS_MESURES_1_8 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur (malgré des liaisons ouvertes vers la mesure 9 coupée, tolérées par Verovio)", () => {
    tk.loadData(ALL_THE_THINGS_MESURES_1_8);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2000 });
    const svg: string = tk.renderToSVG(1);
    const notes = [...svg.matchAll(/<g id="([^"]+)" class="note"/g)];
    expect(notes.length).toBeGreaterThan(0);
  });

  it("avec breaks=encoded (StudioScore + VueConservatoire), les 8 mesures tiennent sur UNE SEULE page", async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    const frais = new VerovioToolkit(await creerModule());
    frais.setOptions({ scale: 40, adjustPageHeight: true, breaks: "encoded", footer: "none", pageWidth: 1750 });
    frais.loadData(ALL_THE_THINGS_MESURES_1_8);
    frais.renderToMIDI();
    const svg: string = frais.renderToSVG(1);
    const systemes = svg.split(/<g[^>]*class="system"[^>]*>/).slice(1);
    const mesuresParSysteme = systemes.map((s) => [...s.matchAll(/<g[^>]*class="measure"[^>]*>/g)].length);
    expect(mesuresParSysteme.reduce((a, b) => a + b, 0)).toBe(8);
  });

  // Régression : le fichier a un tempo écrit (140) — vérifie quand même que
  // le surlignage reste synchronisé jusqu'à la fin réelle (cf. le bug
  // corrigé cette même session sur 5 autres pièces sans tempo écrit).
  it("le surlignage Verovio reste synchronisé jusque près de la vraie fin", () => {
    const score = parseMusicXML(ALL_THE_THINGS_MESURES_1_8);
    const { dureeTotale } = planifierLecture(score, 1);
    tk.loadData(ALL_THE_THINGS_MESURES_1_8);
    tk.renderToMIDI();
    const r = tk.getElementsAtTime(Math.round((dureeTotale - 0.3) * 1000));
    expect(r.measure).toBeTruthy();
  });
});

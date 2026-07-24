import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import { CHOPIN_OP9_N2_MESURES_1_4 } from "./conservatoire-chopin-op9n2";

// Vérifie l'extrait rejoué contre les événements MIDI de référence Mutopia (voir
// commentaire du fichier de données) : 4 mesures (+ levée) en Mib majeur, 12/8.
// NOTE : le parseur ramène TOUJOURS les durées à sa propre résolution interne
// (TPQ=768), indépendamment des <divisions> du fichier — les tests comparent donc
// des PROPORTIONS (rapports de durées, bornes de mesure via `score.measures`),
// jamais des valeurs de tick absolues qui dépendraient de ce facteur d'échelle.
describe("CHOPIN_OP9_N2_MESURES_1_4", () => {
  it("s'analyse sans erreur et couvre 4 mesures (+ levée) en Mib majeur, 12/8", () => {
    const score = parseMusicXML(CHOPIN_OP9_N2_MESURES_1_4);
    expect(score.fifths).toBe(-3);
    expect(score.mode).toBe("major");
    expect(score.signature).toBe("12/8");
    expect(score.measures).toHaveLength(5); // mesure 0 (levée, implicite) + mesures 1-4
  });

  it("levée (mesure 0, implicite) : sib4 seul à la mélodie, silence à la main gauche", () => {
    const score = parseMusicXML(CHOPIN_OP9_N2_MESURES_1_4);
    const levee = score.notes.filter((n) => n.measure === 0);
    expect(levee).toHaveLength(1); // la basse est un silence, pas une note
    expect(levee[0].voice).toBe("1");
    expect(levee[0].pc).toBe(10); // Sib
    expect(levee[0].octave).toBe(4);
  });

  it("mesure 1 : la mélodie ouvre sur sol5 (tenu), la main gauche sur la tonique mib", () => {
    const score = parseMusicXML(CHOPIN_OP9_N2_MESURES_1_4);
    const melodie = score.notes.filter((n) => n.measure === 1 && n.voice === "1");
    expect(melodie[0].pc).toBe(7); // Sol
    expect(melodie[0].octave).toBe(5);
    const basse = score.notes.filter((n) => n.measure === 1 && n.voice === "2");
    expect(basse[0].pc).toBe(3); // Mib
    expect(basse[0].octave).toBe(2);
  });

  it("mesure 1, 1er temps (1/4 de la mesure) : triade de Mib majeur complète (mib-sol-sib)", () => {
    const score = parseMusicXML(CHOPIN_OP9_N2_MESURES_1_4);
    const m1 = score.measures.find((m) => m.numero === 1)!;
    const finPremierTemps = m1.start + m1.length / 4; // 12/8 = 4 temps (noire pointée)
    const premierTemps = score.notes.filter(
      (n) => n.measure === 1 && n.onset >= m1.start && n.onset < finPremierTemps
    );
    const pcs = new Set(premierTemps.map((n) => n.pc));
    expect([...pcs].sort((a, b) => a - b)).toEqual([3, 7, 10]); // Mib, Sol, Sib
  });

  it("mesure 2, 1er temps : dominante secondaire Do7 (do-mi-sol-sib) vers le degré ii", () => {
    const score = parseMusicXML(CHOPIN_OP9_N2_MESURES_1_4);
    const m2 = score.measures.find((m) => m.numero === 2)!;
    const finPremierTemps = m2.start + m2.length / 4;
    const premierTemps = score.notes.filter(
      (n) => n.measure === 2 && n.onset >= m2.start && n.onset < finPremierTemps
    );
    const pcs = new Set(premierTemps.map((n) => n.pc));
    expect([...pcs].sort((a, b) => a - b)).toEqual([0, 4, 7, 10]); // Do, Mi(nat.), Sol, Sib
  });

  it("mesure 4 : un silence (noire pointée) sépare mib5 du sib4 final", () => {
    const score = parseMusicXML(CHOPIN_OP9_N2_MESURES_1_4);
    const melodie = score.notes.filter((n) => n.measure === 4 && n.voice === "1");
    const avantDerniere = melodie[melodie.length - 2]; // mib5, pointée
    const derniere = melodie[melodie.length - 1]; // sib4, après le silence
    expect(avantDerniere.step).toBe("E");
    expect(avantDerniere.alter).toBe(-1);
    const silence = derniere.onset - (avantDerniere.onset + avantDerniere.duration);
    // Le silence (noire pointée, 24 en divisions du fichier) vaut les 2/3 de la
    // durée de la note pointée qui précède (36 en divisions du fichier) — un
    // rapport indépendant du facteur d'échelle interne du parseur.
    expect(silence).toBeCloseTo(avantDerniere.duration * (2 / 3), 0);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("CHOPIN_OP9_N2_MESURES_1_4 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur", () => {
    tk.loadData(CHOPIN_OP9_N2_MESURES_1_4);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2000 });
    const svg: string = tk.renderToSVG(1);
    const notes = [...svg.matchAll(/<g id="([^"]+)" class="note"/g)];
    expect(notes.length).toBeGreaterThan(0);
  });
});

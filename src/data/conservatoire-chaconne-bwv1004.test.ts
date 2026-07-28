import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  CHACONNE_BWV1004_MESURES_0_8,
  CHACONNE_BWV1004_ANALYSE,
  CHACONNE_BWV1004_ANALYSE_NARRATIVE,
} from "./conservatoire-chaconne-bwv1004";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (export
// MuseScore Studio 4.6.3, fichier « chaconne-from-bach-violin-partita-no-2-in-
// d-minor-arranged-for-solo-marimba.musicxml », source musescore.com/user/
// 27264174/scores/6066998 — la partition embarquée est la transcription piano
// de Busoni, cf. credit-words) : mesure 0 = la levée (accord de Ré mineur
// brisé), mesures 1-8 en Ré mineur, 3/4, avec <harmony> et <lyric> (chiffrage
// romain) portés directement sous la portée.
describe("CHACONNE_BWV1004_MESURES_0_8", () => {
  it("s'analyse sans erreur et couvre 9 mesures (0 à 8) en Ré mineur (inféré), 3/4", () => {
    const score = parseMusicXML(CHACONNE_BWV1004_MESURES_0_8);
    expect(score.fifths).toBe(-1);
    expect(score.mode).toBe("minor");
    expect(score.signature).toBe("3/4");
    expect(score.measures).toHaveLength(9);
  });

  it("mesure 0 (levée) : l'accord de Ré mineur brisé qui ouvre la pièce", () => {
    const score = parseMusicXML(CHACONNE_BWV1004_MESURES_0_8);
    const pcs = new Set(score.notes.filter((n) => n.measure === 0).map((n) => n.pc));
    expect(pcs.has(2)).toBe(true); // Ré
    expect(pcs.has(5)).toBe(true); // Fa
    expect(pcs.has(9)).toBe(true); // La
  });

  it("les mesures 1-2 et 5-6 répètent le même chiffrage (basse obstinée de la chaconne)", () => {
    // "II" et "V7" apparaissent aussi une 3e fois (mesure 7, dont l'harmonie
    // diffère des mesures 3/4 — Bach varie l'harmonie, pas seulement la
    // figuration, à chaque répétition de la basse obstinée).
    const compte = (texte: string) =>
      [...CHACONNE_BWV1004_MESURES_0_8.matchAll(new RegExp(`<text>${texte}</text>`, "g"))].length;
    expect(compte("II")).toBe(3);
    expect(compte("V65")).toBe(2);
    expect(compte("I")).toBe(5); // levée (m.0) + m.2, 4, 6, 8
    expect(compte("VI")).toBe(2);
    expect(compte("IV")).toBe(1); // mesure 3 seulement
    expect(compte("I64")).toBe(1); // mesure 3 seulement
    expect(compte("V7")).toBe(2);
    expect(compte("V")).toBe(1); // mesure 7 seulement (triade simple, pas V7)
  });

  it("chaque mesure porte au moins un symbole d'accord (<harmony>) — 17 au total, dont 1 sur la levée", () => {
    const harmonies = [...CHACONNE_BWV1004_MESURES_0_8.matchAll(/<harmony print-frame="no">/g)];
    expect(harmonies).toHaveLength(17);
    // La levée (mesure 0) porte elle aussi un accord (Ré mineur, "I") — à la
    // différence du Nocturne de Chopin (une seule note de levée sans
    // <harmony>), l'accord brisé d'ouverture de la Chaconne est un vrai
    // accord complet. Toujours omis de l'ANALYSE (convention des levées).
    const mesure0 = CHACONNE_BWV1004_MESURES_0_8.slice(
      CHACONNE_BWV1004_MESURES_0_8.indexOf('<measure number="0"'),
      CHACONNE_BWV1004_MESURES_0_8.indexOf('<measure number="1"'),
    );
    expect(mesure0).toContain("<harmony");
  });

  it("aucune tête de note colorée — le chiffrage porte seul l'analyse", () => {
    expect(CHACONNE_BWV1004_MESURES_0_8).not.toContain("notehead color");
  });

  it("aucun <print new-page> ne coupe l'affichage (systèmes uniquement)", () => {
    expect(CHACONNE_BWV1004_MESURES_0_8).not.toContain('<print new-page="yes">');
  });

  it("CHACONNE_BWV1004_ANALYSE couvre les 8 mesures et répète le même schéma deux fois", () => {
    expect(CHACONNE_BWV1004_ANALYSE).toHaveLength(8);
    const degres = CHACONNE_BWV1004_ANALYSE.map((a) => a.degre);
    expect(degres.slice(0, 2)).toEqual(degres.slice(4, 6));
  });

  // Régression : mesures 1/5 (iiø, 7e Ré à la basse) et mesure 7 (iiø, tierce
  // Sol à la basse) portent le MÊME accord mais dans deux renversements
  // différents — vérifié par script avant publication de l'analyse
  // narrative (cf. son commentaire d'en-tête).
  it("mesures 1/5 (basse Ré, 3e renv.) et mesure 7 (basse Sol, 1er renv.) diffèrent", () => {
    const m1 = CHACONNE_BWV1004_ANALYSE.find((a) => a.numero === 1)!;
    const m5 = CHACONNE_BWV1004_ANALYSE.find((a) => a.numero === 5)!;
    const m7 = CHACONNE_BWV1004_ANALYSE.find((a) => a.numero === 7)!;
    expect(m1.degre).toBe(m5.degre);
    expect(m1.degre).not.toBe(m7.degre);

    const score = parseMusicXML(CHACONNE_BWV1004_MESURES_0_8);
    const bassePremiereNote = (numero: number) => {
      const m = score.measures.find((mm) => mm.numero === numero)!;
      return score.notes
        .filter((n) => n.measure === numero && n.onset === m.start)
        .sort((a, b) => a.octave * 12 + a.pc - (b.octave * 12 + b.pc))[0];
    };
    expect(bassePremiereNote(1).pc).toBe(2); // Ré
    expect(bassePremiereNote(7).pc).toBe(7); // Sol
  });
});

describe("CHACONNE_BWV1004_ANALYSE_NARRATIVE", () => {
  it("couvre les 6 étapes de la phrase, de la levée à la 2e répétition", () => {
    expect(CHACONNE_BWV1004_ANALYSE_NARRATIVE.sections).toHaveLength(6);
    expect(CHACONNE_BWV1004_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("CHACONNE_BWV1004_MESURES_0_8 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur", () => {
    tk.loadData(CHACONNE_BWV1004_MESURES_0_8);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2000 });
    const svg: string = tk.renderToSVG(1);
    const notes = [...svg.matchAll(/<g id="([^"]+)" class="note"/g)];
    expect(notes.length).toBeGreaterThan(0);
  });

  it("avec breaks=encoded (StudioScore + VueConservatoire), les 9 mesures tiennent sur UNE SEULE page", async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    const frais = new VerovioToolkit(await creerModule());
    frais.setOptions({ scale: 40, adjustPageHeight: true, breaks: "encoded", footer: "none", pageWidth: 1750 });
    frais.loadData(CHACONNE_BWV1004_MESURES_0_8);
    frais.renderToMIDI();
    const svg: string = frais.renderToSVG(1);
    const systemes = svg.split(/<g[^>]*class="system"[^>]*>/).slice(1);
    const mesuresParSysteme = systemes.map((s) => [...s.matchAll(/<g[^>]*class="measure"[^>]*>/g)].length);
    expect(mesuresParSysteme.reduce((a, b) => a + b, 0)).toBe(9);
  });
});

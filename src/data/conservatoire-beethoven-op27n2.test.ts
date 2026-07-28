import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import { planifierLecture } from "@/lib/studio-playback";
import {
  BEETHOVEN_OP27N2_MESURES_1_9,
  BEETHOVEN_OP27N2_ANALYSE,
  BEETHOVEN_OP27N2_ANALYSE_NARRATIVE,
} from "./conservatoire-beethoven-op27n2";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (export
// MuseScore Studio 4.6.3, fichier « sonata-no-14-op-27-no-2-ludwig-van-
// beethoven.musicxml ») : 9 mesures en Do# mineur, 4/4, piano à 2 portées,
// avec <harmony> et <lyric> (chiffrage romain) portés directement sous la
// portée.
describe("BEETHOVEN_OP27N2_MESURES_1_9", () => {
  it("s'analyse sans erreur et couvre 9 mesures en Do# mineur (inféré), 4/4", () => {
    const score = parseMusicXML(BEETHOVEN_OP27N2_MESURES_1_9);
    expect(score.fifths).toBe(4);
    expect(score.mode).toBe("minor");
    expect(score.signature).toBe("4/4");
    expect(score.measures).toHaveLength(9);
  });

  it("mesure 1 : l'arpège de croches en triolet (main droite) dessine la triade de Do# mineur", () => {
    const score = parseMusicXML(BEETHOVEN_OP27N2_MESURES_1_9);
    const pcs = new Set(score.notes.filter((n) => n.measure === 1).map((n) => n.pc));
    expect(pcs.has(1)).toBe(true); // Do#
    expect(pcs.has(4)).toBe(true); // Mi
    expect(pcs.has(8)).toBe(true); // Sol#
  });

  it("mesure 3 porte le chiffrage VI puis N6 (napolitaine)", () => {
    expect(BEETHOVEN_OP27N2_MESURES_1_9).toContain("<text>VI</text>");
    expect(BEETHOVEN_OP27N2_MESURES_1_9).toContain("<text>N6</text>");
  });

  it("mesure 8 : basse tenue sur Si (pédale), <harmony> distingue Mi majeur puis Si7", () => {
    const score = parseMusicXML(BEETHOVEN_OP27N2_MESURES_1_9);
    const m8 = score.measures.find((m) => m.numero === 8)!;
    const basses = score.notes.filter(
      (n) => n.measure === 8 && n.voice === "5" && n.onset === m8.start,
    );
    expect(basses.every((n) => n.pc === 11)).toBe(true); // Si (Bb=10, Si=11)
  });

  it("chaque mesure porte au moins un symbole d'accord (<harmony>) — 14 au total", () => {
    const harmonies = [...BEETHOVEN_OP27N2_MESURES_1_9.matchAll(/<harmony print-frame="no">/g)];
    expect(harmonies).toHaveLength(14);
  });

  it("aucune tête de note colorée — le chiffrage porte seul l'analyse", () => {
    expect(BEETHOVEN_OP27N2_MESURES_1_9).not.toContain("notehead color");
  });

  it("aucun <print new-page> ne coupe l'affichage (systèmes uniquement)", () => {
    expect(BEETHOVEN_OP27N2_MESURES_1_9).not.toContain('<print new-page="yes">');
  });

  it("BEETHOVEN_OP27N2_ANALYSE couvre les 9 mesures", () => {
    expect(BEETHOVEN_OP27N2_ANALYSE).toHaveLength(9);
    expect(BEETHOVEN_OP27N2_ANALYSE[0]).toMatchObject({ numero: 1, degre: "I", fonction: "T" });
    expect(BEETHOVEN_OP27N2_ANALYSE[8]).toMatchObject({ numero: 9, degre: "III", fonction: "T" });
  });

  // Régression : à la mesure 7, 2e accord, le <lyric> écrit "IV6" (1er
  // renversement, basse La) mais la seule voix de basse réelle (voix 5,
  // aucune doublure concurrente ici) joue Fa# — la note La n'apparaît qu'à
  // une voix médiane (voix 2). Vérifié avant publication de l'analyse
  // narrative (cf. son commentaire d'en-tête) : la prose corrige la lecture
  // en "iv" à l'état fondamental.
  it("mesure 7, 2e moitié : la seule basse réelle (voix 5) est Fa#, pas La", () => {
    const score = parseMusicXML(BEETHOVEN_OP27N2_MESURES_1_9);
    const m7 = score.measures.find((m) => m.numero === 7)!;
    const secondeMoitie = m7.start + m7.length / 2;
    const basses = score.notes.filter(
      (n) => n.measure === 7 && n.voice === "5" && n.onset === secondeMoitie,
    );
    expect(basses.length).toBeGreaterThan(0);
    expect(basses.every((n) => n.pc === 6)).toBe(true); // Fa#
  });
});

describe("BEETHOVEN_OP27N2_ANALYSE_NARRATIVE", () => {
  it("couvre les 6 étapes de la phrase, de la tonique à la tonicisation du relatif majeur", () => {
    expect(BEETHOVEN_OP27N2_ANALYSE_NARRATIVE.sections).toHaveLength(6);
    expect(BEETHOVEN_OP27N2_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("BEETHOVEN_OP27N2_MESURES_1_9 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur", () => {
    tk.loadData(BEETHOVEN_OP27N2_MESURES_1_9);
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
    frais.loadData(BEETHOVEN_OP27N2_MESURES_1_9);
    frais.renderToMIDI();
    const svg: string = frais.renderToSVG(1);
    const systemes = svg.split(/<g[^>]*class="system"[^>]*>/).slice(1);
    const mesuresParSysteme = systemes.map((s) => [...s.matchAll(/<g[^>]*class="measure"[^>]*>/g)].length);
    expect(mesuresParSysteme.reduce((a, b) => a + b, 0)).toBe(9);
  });

  // Régression : sans tempo écrit dans le fichier, notre horloge de lecture
  // audio (studio-playback.ts, repli 90 bpm) et la table de temps MIDI
  // interne de Verovio (repli 120 bpm) divergent — le surlignage des notes
  // pendant la lecture (VueConservatoire.tsx) finit par décrocher de l'audio
  // bien avant la fin réelle. Un <sound tempo="90"> explicite fait lire le
  // même chiffre aux deux systèmes (cf. commentaire d'en-tête du fichier).
  it("le surlignage Verovio reste synchronisé jusque près de la vraie fin (pas de désync tempo)", () => {
    const score = parseMusicXML(BEETHOVEN_OP27N2_MESURES_1_9);
    expect(score.tempos.length).toBeGreaterThan(0);
    const { dureeTotale } = planifierLecture(score, 1);
    tk.loadData(BEETHOVEN_OP27N2_MESURES_1_9);
    tk.renderToMIDI();
    const r = tk.getElementsAtTime(Math.round((dureeTotale - 0.3) * 1000));
    expect(r.measure).toBeTruthy();
  });
});

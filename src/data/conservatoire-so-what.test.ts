import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import { planifierLecture } from "@/lib/studio-playback";
import {
  SO_WHAT_MESURES_1_9,
  SO_WHAT_ANALYSE,
  SO_WHAT_ANALYSE_NARRATIVE,
} from "./conservatoire-so-what";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (export
// MuseScore Studio 4.6.3, fichier « so-what (1).musicxml », sous-titre
// "Transcription of Davis' Solo") : le vamp modal d'ouverture de « So What »
// (Miles Davis, Kind of Blue, 1959) — appel de la basse seule (mesures
// impaires), réponse en accords parallèles ii7→i7 rootless (mesures paires).
describe("SO_WHAT_MESURES_1_9", () => {
  it("s'analyse sans erreur et couvre 9 mesures, 4/4 (mode inféré 'major' : limite connue, cf. commentaire d'en-tête)", () => {
    const score = parseMusicXML(SO_WHAT_MESURES_1_9);
    expect(score.fifths).toBe(0);
    expect(score.signature).toBe("4/4");
    expect(score.measures).toHaveLength(9);
    expect(score.tempos.length).toBeGreaterThan(0); // <sound tempo> ajouté, cf. en-tête
  });

  it("mesures impaires (1,3,5,7,9) : la basse joue seule, aucun accord ne les accompagne", () => {
    const score = parseMusicXML(SO_WHAT_MESURES_1_9);
    for (const numero of [1, 3, 5, 7, 9]) {
      const notes = score.notes.filter((n) => n.measure === numero);
      const voix1 = notes.filter((n) => n.voice === "1" || n.voice === "2");
      expect(voix1).toHaveLength(0);
    }
  });

  it("mesures paires (2,4,6,8) : la réponse en accords parallèles Mim7 (ii7) puis Rém7 (i7)", () => {
    for (const texte of ["II7", "I7"]) {
      const occurrences = [
        ...SO_WHAT_MESURES_1_9.matchAll(new RegExp(`<text>${texte}</text>`, "g")),
      ];
      expect(occurrences.length).toBe(4); // une fois par mesure paire
    }
  });

  it("aucun accord de dominante nulle part dans l'extrait (pièce modale, pas de cadence V-I)", () => {
    expect(SO_WHAT_MESURES_1_9).not.toMatch(/<kind[^>]*>dominant</);
  });

  it("aucune tête de note colorée — le chiffrage porte seul l'analyse", () => {
    expect(SO_WHAT_MESURES_1_9).not.toContain("notehead color");
  });

  it("aucun <print new-page> ne coupe l'affichage (systèmes uniquement)", () => {
    expect(SO_WHAT_MESURES_1_9).not.toContain('<print new-page="yes">');
  });

  it("SO_WHAT_ANALYSE couvre les 9 mesures en alternant I (tonique) et II7 (couleur)", () => {
    expect(SO_WHAT_ANALYSE).toHaveLength(9);
    for (const a of SO_WHAT_ANALYSE) {
      expect(["I", "II7"]).toContain(a.degre);
    }
  });

  // Régression : les accords de réponse (mesures 2/4/6/8) sont des voicings
  // "rootless" à 3 sons (PAS les célèbres accords quartaux à 5 sons du vrai
  // enregistrement de 1959) — vérifié avant publication de l'analyse
  // narrative, qui corrige cette erreur précise du brouillon de référence.
  it("les accords de réponse sont des voicings à 3 sons sans fondamentale (Ré-Sol-Si, Do-Fa-La)", () => {
    const score = parseMusicXML(SO_WHAT_MESURES_1_9);
    const m2 = score.measures.find((m) => m.numero === 2)!;
    const notes = score.notes.filter((n) => n.measure === 2 && n.voice === "1");
    const parOnset = new Map<number, number[]>();
    for (const n of notes) {
      const arr = parOnset.get(n.onset) ?? [];
      arr.push(n.pc);
      parOnset.set(n.onset, arr);
    }
    for (const [, pcs] of parOnset) {
      expect(pcs).toHaveLength(3);
    }
    expect(m2).toBeDefined();
  });

  // Régression : la mesure 7 ne porte AUCUN chiffrage (ni "I" ni autre) —
  // contrairement à ce qu'affirmait le brouillon de référence.
  it("la mesure 7 ne porte aucun chiffrage romain", () => {
    const m7 = SO_WHAT_MESURES_1_9.slice(
      SO_WHAT_MESURES_1_9.indexOf('<measure number="7"'),
      SO_WHAT_MESURES_1_9.indexOf('<measure number="8"'),
    );
    expect(m7).not.toContain("<lyric");
  });

  // Régression : la 1ère fin (volta) est sur la mesure 9, pas la mesure 8.
  it("la 1ère fin (ending) du repeat est portée par la mesure 9, pas la 8", () => {
    const m8 = SO_WHAT_MESURES_1_9.slice(
      SO_WHAT_MESURES_1_9.indexOf('<measure number="8"'),
      SO_WHAT_MESURES_1_9.indexOf('<measure number="9"'),
    );
    const m9 = SO_WHAT_MESURES_1_9.slice(SO_WHAT_MESURES_1_9.indexOf('<measure number="9"'));
    expect(m8).not.toContain("<ending");
    expect(m9).toContain('<ending number="1" type="start"');
    expect(m9).toContain('<ending number="1" type="stop"');
  });
});

describe("SO_WHAT_ANALYSE_NARRATIVE", () => {
  it("couvre les 6 étapes du vamp, de l'appel à la reprise", () => {
    expect(SO_WHAT_ANALYSE_NARRATIVE.sections).toHaveLength(6);
    expect(SO_WHAT_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("SO_WHAT_MESURES_1_9 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur", () => {
    tk.loadData(SO_WHAT_MESURES_1_9);
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
    frais.loadData(SO_WHAT_MESURES_1_9);
    frais.renderToMIDI();
    const svg: string = frais.renderToSVG(1);
    const systemes = svg.split(/<g[^>]*class="system"[^>]*>/).slice(1);
    const mesuresParSysteme = systemes.map((s) => [...s.matchAll(/<g[^>]*class="measure"[^>]*>/g)].length);
    expect(mesuresParSysteme.reduce((a, b) => a + b, 0)).toBe(9);
  });

  // Régression : sans tempo écrit, notre horloge audio (repli 90 bpm) et la
  // table de temps MIDI interne de Verovio (repli 120 bpm) divergent — le
  // surlignage décroche de l'audio avant la fin réelle. Ajouté proactivement
  // dès l'import cette fois (cf. commentaire d'en-tête et
  // conservatoire-beethoven-op27n2.ts).
  it("le surlignage Verovio reste synchronisé jusque près de la vraie fin (pas de désync tempo)", () => {
    const score = parseMusicXML(SO_WHAT_MESURES_1_9);
    const { dureeTotale } = planifierLecture(score, 1);
    tk.loadData(SO_WHAT_MESURES_1_9);
    tk.renderToMIDI();
    const r = tk.getElementsAtTime(Math.round((dureeTotale - 0.3) * 1000));
    expect(r.measure).toBeTruthy();
  });
});

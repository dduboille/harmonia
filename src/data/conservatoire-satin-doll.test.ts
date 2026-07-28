import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import { planifierLecture } from "@/lib/studio-playback";
import {
  SATIN_DOLL_MESURES_1_8,
  SATIN_DOLL_ANALYSE,
  SATIN_DOLL_ANALYSE_NARRATIVE,
} from "./conservatoire-satin-doll";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (export
// MuseScore Studio 4.6.3, fichier « satin-doll-duke-ellington.musicxml »,
// source musescore.com/user/801096/scores/9414118) : la phrase A du standard
// « Satin Doll » (Duke Ellington), en Do majeur, 4/4, avec <harmony> et
// <lyric> (chiffrage romain) portés directement sous la portée.
describe("SATIN_DOLL_MESURES_1_8", () => {
  it("s'analyse sans erreur et couvre 8 mesures, 4/4 (mode inféré 'minor' malgré le Do majeur réel — cf. commentaire d'en-tête)", () => {
    const score = parseMusicXML(SATIN_DOLL_MESURES_1_8);
    expect(score.fifths).toBe(0);
    expect(score.signature).toBe("4/4");
    expect(score.measures).toHaveLength(8);
    expect(score.tempos.length).toBeGreaterThan(0); // <sound tempo> ajouté, cf. en-tête
  });

  it("mesure 6 : le second accord est chiffré « subV7 » — la substitution tritonique, sujet du cours", () => {
    expect(SATIN_DOLL_MESURES_1_8).toContain("<text>subV7</text>");
  });

  it("mesure 6, 2e moitié (Réb7/subV7) : la voix supérieure porte bien Si (Cb, la 7e — une des 2 notes du triton partagé avec Sol7)", () => {
    const score = parseMusicXML(SATIN_DOLL_MESURES_1_8);
    const m6 = score.measures.find((m) => m.numero === 6)!;
    const secondeMoitie = m6.start + m6.length / 2;
    const pcs = new Set(
      score.notes.filter((n) => n.measure === 6 && n.onset === secondeMoitie).map((n) => n.pc),
    );
    expect(pcs.has(11)).toBe(true); // Si (orthographié Cb, la 7e de Réb7 = même triton que V7)
    expect(pcs.has(1)).toBe(true); // Do# (Réb, la basse/fondamentale)
  });

  it("aucune tête de note colorée — le chiffrage porte seul l'analyse", () => {
    expect(SATIN_DOLL_MESURES_1_8).not.toContain("notehead color");
  });

  it("aucun <print new-page> ne coupe l'affichage (systèmes uniquement)", () => {
    expect(SATIN_DOLL_MESURES_1_8).not.toContain('<print new-page="yes">');
  });

  it("SATIN_DOLL_ANALYSE couvre les 8 mesures", () => {
    expect(SATIN_DOLL_ANALYSE).toHaveLength(8);
    expect(SATIN_DOLL_ANALYSE[0]).toMatchObject({ numero: 1, degre: "II7", fonction: "SD" });
    expect(SATIN_DOLL_ANALYSE[5]).toMatchObject({ numero: 6, degre: "bVI7", fonction: "SD" });
  });

  // Régression : le fichier source ne contient AUCUN tempo ni AUCUNE
  // mention de swing (vérifié avant publication de l'analyse narrative, qui
  // corrige un brouillon de référence affirmant à tort "120 bpm, swing 5:3").
  it("le fichier source ne contient aucune mention de swing (le tempo affiché est ajouté par nous)", () => {
    expect(SATIN_DOLL_MESURES_1_8.toLowerCase()).not.toContain("swing");
  });

  // Régression : la mesure 8 sonne une septième diminuée COMPLÈTE
  // (Mib-Fa#-La-Do), pas seulement la triade — la balise <harmony> dit
  // "diminished" (triade), mais les 4 notes réelles forment bien un accord
  // de 7e diminuée. "nom" corrigé en conséquence après vérification.
  it("mesure 8 : les 4 notes d'une septième diminuée complète sonnent (Mib-Fa#-La-Do)", () => {
    const score = parseMusicXML(SATIN_DOLL_MESURES_1_8);
    const m8 = score.measures.find((m) => m.numero === 8)!;
    const pcs = new Set(
      score.notes.filter((n) => n.measure === 8 && n.onset === m8.start).map((n) => n.pc),
    );
    expect(pcs.has(3)).toBe(true); // Mib
    expect(pcs.has(6)).toBe(true); // Fa# (Solb enharmonique)
    expect(pcs.has(9)).toBe(true); // La
    expect(pcs.has(0)).toBe(true); // Do
    expect(SATIN_DOLL_ANALYSE.find((a) => a.numero === 8)!.nom).toBe("Mibdim7");
  });

  // Régression : l'accord de tonique (Cmaj9) de la mesure 7 est anticipé et
  // lié depuis le dernier contretemps de la mesure 6 (4 ties "start" en
  // mesure 6, 4 ties "stop" correspondants en mesure 7).
  it("mesure 6→7 : l'accord Cmaj9 est anticipé et lié par-dessus la barre de mesure", () => {
    const m6 = SATIN_DOLL_MESURES_1_8.slice(
      SATIN_DOLL_MESURES_1_8.indexOf('<measure number="6"'),
      SATIN_DOLL_MESURES_1_8.indexOf('<measure number="7"'),
    );
    const m7 = SATIN_DOLL_MESURES_1_8.slice(
      SATIN_DOLL_MESURES_1_8.indexOf('<measure number="7"'),
      SATIN_DOLL_MESURES_1_8.indexOf('<measure number="8"'),
    );
    expect([...m6.matchAll(/<tie type="start"\/>/g)]).toHaveLength(4);
    expect([...m7.matchAll(/<tie type="stop"\/>/g)]).toHaveLength(4);
  });
});

describe("SATIN_DOLL_ANALYSE_NARRATIVE", () => {
  it("couvre les 6 étapes de la marche, de ii-V à la relance chromatique", () => {
    expect(SATIN_DOLL_ANALYSE_NARRATIVE.sections).toHaveLength(6);
    expect(SATIN_DOLL_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("SATIN_DOLL_MESURES_1_8 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur", () => {
    tk.loadData(SATIN_DOLL_MESURES_1_8);
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
    frais.loadData(SATIN_DOLL_MESURES_1_8);
    frais.renderToMIDI();
    const svg: string = frais.renderToSVG(1);
    const systemes = svg.split(/<g[^>]*class="system"[^>]*>/).slice(1);
    const mesuresParSysteme = systemes.map((s) => [...s.matchAll(/<g[^>]*class="measure"[^>]*>/g)].length);
    expect(mesuresParSysteme.reduce((a, b) => a + b, 0)).toBe(8);
  });

  // Régression : sans tempo écrit, notre horloge audio (repli 90 bpm) et la
  // table de temps MIDI interne de Verovio (repli 120 bpm) divergent — le
  // surlignage décroche de l'audio avant la fin réelle. Ajouté proactivement
  // dès l'import (cf. commentaire d'en-tête et conservatoire-beethoven-op27n2.ts).
  it("le surlignage Verovio reste synchronisé jusque près de la vraie fin (pas de désync tempo)", () => {
    const score = parseMusicXML(SATIN_DOLL_MESURES_1_8);
    const { dureeTotale } = planifierLecture(score, 1);
    tk.loadData(SATIN_DOLL_MESURES_1_8);
    tk.renderToMIDI();
    const r = tk.getElementsAtTime(Math.round((dureeTotale - 0.3) * 1000));
    expect(r.measure).toBeTruthy();
  });
});

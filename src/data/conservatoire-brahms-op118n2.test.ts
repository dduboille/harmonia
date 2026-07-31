import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  BRAHMS_OP118N2_MESURES_0_8,
  BRAHMS_OP118N2_ANALYSE,
  BRAHMS_OP118N2_ANALYSE_NARRATIVE,
} from "./conservatoire-brahms-op118n2";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (export
// MuseScore Studio 4.6.3, fichier « intermezzo-op-118-no-2-johannes-brahms.musicxml »,
// source musescore.com/user/39375368/scores/11762053) : mesure 0 = la levée
// (implicite, un accord de La majeur), mesures 1-8 en La majeur, 3/4, piano à
// 2 portées, avec <harmony> et <lyric> (chiffrage romain, déjà au format
// « X/Y » pour les dominantes secondaires) portés directement sous la portée.
describe("BRAHMS_OP118N2_MESURES_0_8", () => {
  it("s'analyse sans erreur et couvre 9 mesures (0 à 8) en La majeur (inféré), 3/4", () => {
    const score = parseMusicXML(BRAHMS_OP118N2_MESURES_0_8);
    expect(score.fifths).toBe(3);
    expect(score.mode).toBe("major");
    expect(score.signature).toBe("3/4");
    expect(score.measures).toHaveLength(9);
  });

  it("mesure 0 (levée) : accord de La majeur (I) sur le 3e temps, rien avant", () => {
    const score = parseMusicXML(BRAHMS_OP118N2_MESURES_0_8);
    const m0 = score.measures.find((m) => m.numero === 0)!;
    const notes = score.notes.filter((n) => n.measure === 0);
    expect(notes.length).toBeGreaterThan(0);
    const pcs = new Set(notes.filter((n) => n.onset === m0.start).map((n) => n.pc));
    expect(pcs.has(9)).toBe(true); // La
  });

  it("mesure 6 porte bien le chiffrage de dominante secondaire V6/5/V et V4/2/V", () => {
    expect(BRAHMS_OP118N2_MESURES_0_8).toContain("<text>V65/V</text>");
    expect(BRAHMS_OP118N2_MESURES_0_8).toContain("<text>V42/V</text>");
  });

  it("chaque mesure (sauf la levée) porte au moins un symbole d'accord (<harmony>) — 19 au total", () => {
    const harmonies = [...BRAHMS_OP118N2_MESURES_0_8.matchAll(/<harmony print-frame="no">/g)];
    expect(harmonies).toHaveLength(19);
  });

  it("aucune tête de note colorée — le chiffrage porte seul l'analyse", () => {
    expect(BRAHMS_OP118N2_MESURES_0_8).not.toContain("notehead color");
  });

  it("aucun <print new-page> ne coupe l'affichage (un seul système, breaks encodés)", () => {
    expect(BRAHMS_OP118N2_MESURES_0_8).not.toContain('<print new-page="yes">');
  });

  // Régression : à la mesure 4, 3e temps, deux voix graves sonnent en même
  // temps — la voix 5 (celle qui porte tout le chiffrage romain du morceau,
  // ici "VII64/IV") joue un Sol bécarre marqué accidental="natural" (altère
  // le Sol# diatonique), tandis qu'une simple voix de doublure (6) tient un
  // Mi plus grave. Le <bass-step> de la balise <harmony> dit Mi (la
  // doublure) ; c'est le chiffrage romain écrit par Dany ("64" = 2e
  // renversement, Sol à la basse fonctionnelle) qui fait foi, cf. le
  // commentaire d'en-tête de BRAHMS_OP118N2_ANALYSE_NARRATIVE.
  it("mesure 4, 3e temps : le Sol bécarre altéré (chiffrage) sonne bien, sous une doublure de Mi", () => {
    const score = parseMusicXML(BRAHMS_OP118N2_MESURES_0_8);
    const m4 = score.measures.find((m) => m.numero === 4)!;
    const troisiemeTemps = m4.start + (2 * m4.length) / 3;
    const pcs = new Set(
      score.notes.filter((n) => n.measure === 4 && n.onset === troisiemeTemps).map((n) => n.pc),
    );
    expect(pcs.has(7)).toBe(true); // Sol (chiffrage romain)
    expect(pcs.has(4)).toBe(true); // Mi (doublure grave, <bass-step> de la balise <harmony>)
  });

  it("BRAHMS_OP118N2_ANALYSE : la mesure 4 (6/4 de cadence) garde la fonction D, pas T", () => {
    const m4 = BRAHMS_OP118N2_ANALYSE.find((a) => a.numero === 4)!;
    expect(m4.fonction).toBe("D");
  });
});

describe("BRAHMS_OP118N2_ANALYSE_NARRATIVE", () => {
  it("couvre les 6 étapes de la phrase, de la levée à la demi-cadence", () => {
    expect(BRAHMS_OP118N2_ANALYSE_NARRATIVE.sections).toHaveLength(6);
    expect(BRAHMS_OP118N2_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("BRAHMS_OP118N2_MESURES_0_8 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur", () => {
    tk.loadData(BRAHMS_OP118N2_MESURES_0_8);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2000 });
    const svg: string = tk.renderToSVG(1);
    const notes = [...svg.matchAll(/<g id="([^"]+)" class="note"/g)];
    expect(notes.length).toBeGreaterThan(0);
  }, 20000);

  it("avec breaks=encoded (StudioScore + VueConservatoire), les 9 mesures tiennent sur UNE SEULE page", async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    const frais = new VerovioToolkit(await creerModule());
    frais.setOptions({ scale: 40, adjustPageHeight: true, breaks: "encoded", footer: "none", pageWidth: 1750 });
    frais.loadData(BRAHMS_OP118N2_MESURES_0_8);
    frais.renderToMIDI();
    const svg: string = frais.renderToSVG(1);
    const systemes = svg.split(/<g[^>]*class="system"[^>]*>/).slice(1);
    const mesuresParSysteme = systemes.map((s) => [...s.matchAll(/<g[^>]*class="measure"[^>]*>/g)].length);
    expect(mesuresParSysteme.reduce((a, b) => a + b, 0)).toBe(9);
  });
});

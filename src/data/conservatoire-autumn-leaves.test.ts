import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import { AUTUMN_LEAVES_MESURES_1_10, AUTUMN_LEAVES_ANALYSE, AUTUMN_LEAVES_ANALYSE_NARRATIVE } from "./conservatoire-autumn-leaves";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (export
// MuseScore Studio 4.6.3, fichier « autum-leaves-joseph-koshma.musicxml »,
// source musescore.com/user/32589767/scores/12099418) : les 10 premières
// mesures d'« Autumn Leaves » (Joseph Kosma), avec <harmony> et <lyric>
// (chiffrage romain, en SOL MINEUR) portés directement sous la portée.
describe("AUTUMN_LEAVES_MESURES_1_10", () => {
  it("s'analyse sans erreur et couvre 10 mesures en Sol mineur, 4/4", () => {
    const score = parseMusicXML(AUTUMN_LEAVES_MESURES_1_10);
    expect(score.fifths).toBe(-2);
    expect(score.mode).toBe("minor");
    expect(score.signature).toBe("4/4");
    expect(score.measures).toHaveLength(10);
    // Tempo ajouté nous-mêmes (absent du fichier d'origine, pas de swing non
    // plus) — cf. commentaire d'en-tête et project_playback_tempo_desync.
    expect(score.tempos).toEqual([{ onset: 0, bpm: 120 }]);
  });

  it("boucle bien sur elle-même : la mesure 10 reprend le même accord (Cm7/IV7) que la mesure 2", () => {
    const m2 = AUTUMN_LEAVES_MESURES_1_10.slice(
      AUTUMN_LEAVES_MESURES_1_10.indexOf('<measure number="2"'),
      AUTUMN_LEAVES_MESURES_1_10.indexOf('<measure number="3"'),
    );
    const m10 = AUTUMN_LEAVES_MESURES_1_10.slice(AUTUMN_LEAVES_MESURES_1_10.indexOf('<measure number="10"'));
    expect(m2).toContain("<root-step>C</root-step>");
    expect(m10).toContain("<root-step>C</root-step>");
    expect(m2).toContain(">IV7<");
    expect(m10).toContain(">IV7<");
  });

  // Anomalie signalée à Dany (cf. commentaire d'en-tête) : la basse écrite sous
  // "subV7/VI" (mesure 4) est Mib2, alors que la balise <harmony> juste
  // au-dessus indique "E" SANS altération (Mi7, cohérent avec la théorie —
  // substitut tritonique de Sib7). Test de non-régression sur ce constat.
  it("mesure 4 : la balise <harmony> du 2e accord est bien Mi7 (E, sans altération)", () => {
    const m4 = AUTUMN_LEAVES_MESURES_1_10.slice(
      AUTUMN_LEAVES_MESURES_1_10.indexOf('<measure number="4"'),
      AUTUMN_LEAVES_MESURES_1_10.indexOf('<measure number="5"'),
    );
    const harmonies = [...m4.matchAll(/<root-step>([^<]*)<\/root-step>[\s\S]*?<kind[^>]*>([^<]+)<\/kind>/g)];
    expect(harmonies).toHaveLength(2);
    expect(harmonies[1][1]).toBe("E");
    expect(harmonies[1][2]).toBe("dominant");
  });

  it("aucune tête de note colorée — le chiffrage porte seul l'analyse", () => {
    expect(AUTUMN_LEAVES_MESURES_1_10).not.toContain("notehead color");
  });

  it("AUTUMN_LEAVES_ANALYSE couvre les mesures 2 à 10 (mesure 1 = anacrouse, sans accord)", () => {
    expect(AUTUMN_LEAVES_ANALYSE).toHaveLength(9);
    expect(AUTUMN_LEAVES_ANALYSE[0]).toMatchObject({ numero: 2, degre: "IV7", fonction: "SD" });
    expect(AUTUMN_LEAVES_ANALYSE.find((m) => m.numero === 8)).toMatchObject({ degre: "I", fonction: "T" });
    // Chaîne de dominantes secondaires, le cœur pédagogique du cours 15.
    const secondaires = AUTUMN_LEAVES_ANALYSE.filter((m) => m.dominanteSecondaire);
    expect(secondaires.map((m) => m.degre)).toEqual(["V7/III", "V7/V", "V7/IV"]);
  });

  // Corrige un brouillon d'analyse qui affirmait 2 "erreurs de transcription"
  // (un "GM7" à la mesure 8, un "B°7" à la mesure 9) : AUCUNE des deux
  // n'existe dans le fichier, déjà correctement chiffré des deux côtés.
  it("mesure 8 : déjà chiffrée Gm7→Gm6→Gm(add b6), jamais GM7 (majeur)", () => {
    const m8 = AUTUMN_LEAVES_MESURES_1_10.slice(
      AUTUMN_LEAVES_MESURES_1_10.indexOf('<measure number="8"'),
      AUTUMN_LEAVES_MESURES_1_10.indexOf('<measure number="9"'),
    );
    const harmonies = [...m8.matchAll(/<root-step>([^<]*)<\/root-step>[\s\S]*?<kind[^>]*>([^<]+)<\/kind>/g)];
    expect(harmonies).toHaveLength(3);
    expect(harmonies.map((h) => h[2])).toEqual(["minor-seventh", "minor-sixth", "minor"]);
    expect(m8).not.toContain(">major<");
  });

  it("mesure 9 : déjà chiffrée G7(add b9), romain « V7/IV », jamais B°7", () => {
    const m9 = AUTUMN_LEAVES_MESURES_1_10.slice(
      AUTUMN_LEAVES_MESURES_1_10.indexOf('<measure number="9"'),
      AUTUMN_LEAVES_MESURES_1_10.indexOf('<measure number="10"'),
    );
    expect(m9).toContain("<root-step>G</root-step>");
    expect(m9).toContain(">dominant<");
    expect(m9).toContain(">V7/IV<");
    expect(m9).not.toContain("B°7");
  });
});

describe("AUTUMN_LEAVES_ANALYSE_NARRATIVE", () => {
  it("couvre les 6 étapes de la phrase, de l'anacrouse à la reprise coupée", () => {
    expect(AUTUMN_LEAVES_ANALYSE_NARRATIVE.sections).toHaveLength(6);
    expect(AUTUMN_LEAVES_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  it("clarifie que les mesures 8 et 9 n'ont besoin d'aucune correction", () => {
    const section89 = AUTUMN_LEAVES_ANALYSE_NARRATIVE.sections.find((s) => s.label.includes("8"));
    expect(section89?.texte).toContain("rien à corriger");
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("AUTUMN_LEAVES_MESURES_1_10 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur", () => {
    tk.loadData(AUTUMN_LEAVES_MESURES_1_10);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2000 });
    const svg: string = tk.renderToSVG(1);
    const notes = [...svg.matchAll(/<g id="([^"]+)" class="note"/g)];
    expect(notes.length).toBeGreaterThan(0);
  });

  it("avec breaks=encoded (StudioScore + VueConservatoire), les 10 mesures tiennent sur UNE SEULE page", async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    const frais = new VerovioToolkit(await creerModule());
    frais.setOptions({ scale: 40, adjustPageHeight: true, breaks: "encoded", footer: "none", pageWidth: 1750 });
    frais.loadData(AUTUMN_LEAVES_MESURES_1_10);
    frais.renderToMIDI();
    const svg: string = frais.renderToSVG(1);
    const systemes = svg.split(/<g[^>]*class="system"[^>]*>/).slice(1);
    const mesuresParSysteme = systemes.map((s) => [...s.matchAll(/<g[^>]*class="measure"[^>]*>/g)].length);
    expect(mesuresParSysteme.reduce((a, b) => a + b, 0)).toBe(10);
  });
});

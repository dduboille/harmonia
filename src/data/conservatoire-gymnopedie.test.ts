import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import { GYMNOPEDIE_MESURES_1_9, GYMNOPEDIE_ANALYSE, GYMNOPEDIE_ANALYSE_NARRATIVE } from "./conservatoire-gymnopedie";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (export
// MuseScore Studio 4.6.3, fichier « gymnopedie-no-1-single-page-erik-satie-1888.musicxml »,
// source musescore.com/user/58480/scores/2904571) : les 9 premières mesures de
// la Première Gymnopédie d'Erik Satie, avec <harmony> et <lyric> (chiffrage
// romain) portés directement sous la portée.
describe("GYMNOPEDIE_MESURES_1_9", () => {
  it("s'analyse sans erreur et couvre 9 mesures en Ré majeur, 3/4", () => {
    const score = parseMusicXML(GYMNOPEDIE_MESURES_1_9);
    expect(score.fifths).toBe(2);
    expect(score.mode).toBe("major");
    expect(score.signature).toBe("3/4");
    expect(score.measures).toHaveLength(9);
    // Tempo ajouté nous-mêmes (absent du fichier d'origine) — cf. commentaire
    // d'en-tête et project_playback_tempo_desync : sans tempo écrit, Verovio
    // et notre moteur audio dérivent chacun vers un défaut différent.
    expect(score.tempos).toEqual([{ onset: 0, bpm: 60 }]);
  });

  it("n'alterne QUE IVmaj7/9 (Sol) et Imaj7 (Ré), jamais de dominante (La)", () => {
    const harmonies = [...GYMNOPEDIE_MESURES_1_9.matchAll(/<root-step>([^<]*)<\/root-step>/g)].map((m) => m[1]);
    expect(harmonies).toHaveLength(9);
    expect(new Set(harmonies)).toEqual(new Set(["G", "D"]));
    expect(harmonies).not.toContain("A");
  });

  it("aucune tête de note colorée — le chiffrage porte seul l'analyse", () => {
    expect(GYMNOPEDIE_MESURES_1_9).not.toContain("notehead color");
  });

  it("GYMNOPEDIE_ANALYSE couvre les 9 mesures, en alternance SD/T stricte", () => {
    expect(GYMNOPEDIE_ANALYSE).toHaveLength(9);
    expect(GYMNOPEDIE_ANALYSE[0]).toMatchObject({ numero: 1, degre: "IVmaj7", fonction: "SD" });
    expect(GYMNOPEDIE_ANALYSE[1]).toMatchObject({ numero: 2, degre: "Imaj7", fonction: "T" });
    // Les mesures impaires sont toutes IV (SD), les mesures paires toutes I (T).
    GYMNOPEDIE_ANALYSE.forEach((m) => {
      expect(m.fonction).toBe(m.numero % 2 === 1 ? "SD" : "T");
    });
  });

  // Les 2 seules mesures à porter une extension explicite dans le chiffrage de
  // Dany (maj9 à la mesure 5, (#11) à la mesure 7) sont aussi les 2 mesures où
  // la mélodie touche cette même extension — vérifié pour l'analyse narrative.
  it("les extensions explicites du chiffrage (maj9, #11) sont bien sur les mesures 5 et 7", () => {
    const m5 = GYMNOPEDIE_MESURES_1_9.slice(
      GYMNOPEDIE_MESURES_1_9.indexOf('<measure number="5"'),
      GYMNOPEDIE_MESURES_1_9.indexOf('<measure number="6"'),
    );
    const m7 = GYMNOPEDIE_MESURES_1_9.slice(
      GYMNOPEDIE_MESURES_1_9.indexOf('<measure number="7"'),
      GYMNOPEDIE_MESURES_1_9.indexOf('<measure number="8"'),
    );
    expect(m5).toContain('<kind text="maj9">major-ninth</kind>');
    expect(m7).toContain("<degree-value>11</degree-value>");
    expect(m7).toContain("<degree-alter>1</degree-alter>");
  });
});

describe("GYMNOPEDIE_ANALYSE_NARRATIVE", () => {
  it("couvre les 5 étapes de la phrase, du pendule statique à la suspension finale", () => {
    expect(GYMNOPEDIE_ANALYSE_NARRATIVE.sections).toHaveLength(5);
    expect(GYMNOPEDIE_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  it("signale l'ambiguïté modale Sol lydien / Ré majeur", () => {
    expect(GYMNOPEDIE_ANALYSE_NARRATIVE.tonalite).toContain("lydien");
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("GYMNOPEDIE_MESURES_1_9 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur", () => {
    tk.loadData(GYMNOPEDIE_MESURES_1_9);
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
    frais.loadData(GYMNOPEDIE_MESURES_1_9);
    frais.renderToMIDI();
    const svg: string = frais.renderToSVG(1);
    const systemes = svg.split(/<g[^>]*class="system"[^>]*>/).slice(1);
    const mesuresParSysteme = systemes.map((s) => [...s.matchAll(/<g[^>]*class="measure"[^>]*>/g)].length);
    expect(mesuresParSysteme.reduce((a, b) => a + b, 0)).toBe(9);
  });
});

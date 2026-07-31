import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  CHOPIN_OP28_N20_MESURES_1_13,
  CHOPIN_OP28_N20_ANALYSE,
  CHOPIN_OP28_N20_ANALYSE_NARRATIVE,
} from "./conservatoire-chopin-op28-20";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (export
// MuseScore Studio 4.7.4, fichier « chopin-op28-20-annote.musicxml ») : le
// Prélude op.28 n°20 en do mineur de Chopin, INTÉGRAL (13 mesures), avec
// <harmony> et chiffrage romain complet en <direction><words>.
describe("CHOPIN_OP28_N20_MESURES_1_13", () => {
  it("s'analyse sans erreur et couvre 13 mesures en Do mineur, 4/4", () => {
    const score = parseMusicXML(CHOPIN_OP28_N20_MESURES_1_13);
    expect(score.fifths).toBe(-3);
    expect(score.mode).toBe("minor");
    expect(score.signature).toBe("4/4");
    expect(score.measures).toHaveLength(13);
    // Tempo/nuances ajoutés (absents du fichier source) — cf. commentaire
    // d'en-tête et project_playback_tempo_desync.
    expect(score.tempos).toEqual([{ onset: 0, bpm: 40 }]);
  });

  it("contient bien une sixte augmentée française (mesures 6 et 10) : le sujet du cours 24", () => {
    const m6 = CHOPIN_OP28_N20_MESURES_1_13.slice(
      CHOPIN_OP28_N20_MESURES_1_13.indexOf('<measure number="6"'),
      CHOPIN_OP28_N20_MESURES_1_13.indexOf('<measure number="7"'),
    );
    expect(m6).toContain("+6 fr.");
    expect(m6).toContain("<root-step>D</root-step>");
    expect(m6).toContain("<bass-step>A</bass-step>");
    expect(m6).toContain("<bass-alter>-1</bass-alter>");
  });

  it("mesure 3 : le Mi naturel (Do majeur, variante éditoriale la plus attestée) est le 4e accord, pas le 3e", () => {
    const m3 = CHOPIN_OP28_N20_MESURES_1_13.slice(
      CHOPIN_OP28_N20_MESURES_1_13.indexOf('<measure number="3"'),
      CHOPIN_OP28_N20_MESURES_1_13.indexOf('<measure number="4"'),
    );
    const harmonies = [...m3.matchAll(/<root-step>([^<]*)<\/root-step>[\s\S]*?<kind[^>]*>([^<]+)<\/kind>/g)];
    expect(harmonies).toHaveLength(4);
    expect(harmonies[2][1]).toBe("F"); // 3e accord : Fa mineur
    expect(harmonies[3][1]).toBe("C"); // 4e accord : Do majeur (le Mi naturel)
    expect(harmonies[3][2]).toBe("major");
  });

  it("aucune tête de note colorée — le chiffrage porte seul l'analyse", () => {
    expect(CHOPIN_OP28_N20_MESURES_1_13).not.toContain("notehead color");
  });

  it("les mesures 9-12 reprennent 5-8 à l'identique (même chiffrage)", () => {
    const extraire = (num: number) => {
      const s = CHOPIN_OP28_N20_MESURES_1_13.slice(
        CHOPIN_OP28_N20_MESURES_1_13.indexOf(`<measure number="${num}"`),
        CHOPIN_OP28_N20_MESURES_1_13.indexOf(`<measure number="${num + 1}"`),
      );
      return [...s.matchAll(/<words[^>]*>([^<]*)<\/words>/g)].map((m) => m[1]);
    };
    expect(extraire(9)).toEqual(extraire(5));
    expect(extraire(10)).toEqual(extraire(6));
    expect(extraire(11)).toEqual(extraire(7));
    expect(extraire(12)).toEqual(extraire(8));
  });

  it("CHOPIN_OP28_N20_ANALYSE couvre les 13 mesures", () => {
    expect(CHOPIN_OP28_N20_ANALYSE).toHaveLength(13);
    expect(CHOPIN_OP28_N20_ANALYSE[0]).toMatchObject({ numero: 1, degre: "i", fonction: "T" });
    expect(CHOPIN_OP28_N20_ANALYSE.find((m) => m.numero === 13)).toMatchObject({ degre: "i (final)" });
  });
});

describe("CHOPIN_OP28_N20_ANALYSE_NARRATIVE", () => {
  it("couvre les 6 étapes de la phrase, de la cadence-mère à la fin nue", () => {
    expect(CHOPIN_OP28_N20_ANALYSE_NARRATIVE.sections).toHaveLength(6);
    expect(CHOPIN_OP28_N20_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  // Le contenu affiché aux étudiants ne doit jamais faire référence au
  // processus de relecture (brouillon, correction...) — seul le commentaire
  // d'en-tête du fichier source garde ce journal.
  it("ne mentionne pas le processus de relecture (brouillon/correction) dans le contenu affiché", () => {
    const tousLesTextes = [
      CHOPIN_OP28_N20_ANALYSE_NARRATIVE.tonalite,
      CHOPIN_OP28_N20_ANALYSE_NARRATIVE.metrique,
      CHOPIN_OP28_N20_ANALYSE_NARRATIVE.forme,
      ...CHOPIN_OP28_N20_ANALYSE_NARRATIVE.sections.map((s) => s.texte),
      ...CHOPIN_OP28_N20_ANALYSE_NARRATIVE.synthese.map((s) => s.texte),
    ].join(" ");
    expect(tousLesTextes).not.toMatch(/brouillon|corrig|Dany/i);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("CHOPIN_OP28_N20_MESURES_1_13 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur", () => {
    tk.loadData(CHOPIN_OP28_N20_MESURES_1_13);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2000 });
    const svg: string = tk.renderToSVG(1);
    const notes = [...svg.matchAll(/<g id="([^"]+)" class="note"/g)];
    expect(notes.length).toBeGreaterThan(0);
    const mesures = [...svg.matchAll(/<g[^>]*class="measure"[^>]*>/g)];
    expect(mesures).toHaveLength(13);
  }, 20000);

  it("le surlignage Verovio avance de 6000ms par mesure (40bpm, 4 temps)", async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
    const frais: any = new VerovioToolkit(await creerModule());
    frais.loadData(CHOPIN_OP28_N20_MESURES_1_13);
    frais.renderToMIDI();
    frais.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2000 });
    frais.renderToSVG(1);

    let lastId: string | undefined;
    const ecarts: number[] = [];
    let lastMs = 0;
    for (let ms = 0; ms <= 80000; ms += 25) {
      const els = frais.getElementsAtTime(ms);
      const id = els.measure;
      if (id && id !== lastId) {
        if (lastId !== undefined) ecarts.push(ms - lastMs);
        lastId = id;
        lastMs = ms;
      }
    }
    expect(ecarts.length).toBeGreaterThanOrEqual(8);
    for (const e of ecarts) expect(e).toBeCloseTo(6000, -2);
  });
});

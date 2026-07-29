import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  PATHETIQUE_GRAVE_MESURES_1_10,
  PATHETIQUE_GRAVE_ANALYSE,
  PATHETIQUE_GRAVE_ANALYSE_NARRATIVE,
} from "./conservatoire-pathetique-grave";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (export
// MuseScore Studio 4.6.3, fichier « pathetique-grave-annote.musicxml ») : les
// 10 mesures de l'introduction Grave du 1er mouvement de la Sonate n°8
// "Pathétique" op.13 de Beethoven, avec <harmony> et chiffrage romain complet
// en <direction><words> (pas de <lyric> dans ce fichier).
describe("PATHETIQUE_GRAVE_MESURES_1_10", () => {
  it("s'analyse sans erreur et couvre 10 mesures en Do mineur, 4/4", () => {
    const score = parseMusicXML(PATHETIQUE_GRAVE_MESURES_1_10);
    expect(score.fifths).toBe(-3);
    expect(score.mode).toBe("minor");
    expect(score.signature).toBe("4/4");
    expect(score.measures).toHaveLength(10);
    expect(score.tempos[0]).toEqual({ onset: 0, bpm: 30 });
  });

  // Régression du correctif de structure : le fichier source scindait la
  // mesure 10 en 2 éléments <measure number="10"> (saut de page MuseScore) ;
  // notre parseur partagé prenait le MAX des deux longueurs au lieu de leur
  // somme, tronquant la mesure de moitié. Fusionné en un seul élément.
  it("la mesure 10 (fusionnée) a la longueur d'une mesure complète, pas la moitié", () => {
    const score = parseMusicXML(PATHETIQUE_GRAVE_MESURES_1_10);
    const m10 = score.measures.find((m) => m.numero === 10)!;
    const m1 = score.measures.find((m) => m.numero === 1)!;
    expect(m10.length).toBeGreaterThan(m1.length * 0.9);
    expect(PATHETIQUE_GRAVE_MESURES_1_10.match(/<measure number="10"/g)).toHaveLength(1);
  });

  it("aucune sixte augmentée dans le chiffrage : cette pièce a été réorientée vers le cours 39 (7èmes d'espèces), pas le cours 24", () => {
    expect(PATHETIQUE_GRAVE_MESURES_1_10).not.toMatch(/[Ii]t\+6|[Aa]ll?\+6|[Ff]r\+6|augmented-sixth/);
  });

  it("aucune tête de note colorée — le chiffrage porte seul l'analyse", () => {
    expect(PATHETIQUE_GRAVE_MESURES_1_10).not.toContain("notehead color");
  });

  it("PATHETIQUE_GRAVE_ANALYSE couvre les 10 mesures, dominée par la 7e diminuée (vii°)", () => {
    expect(PATHETIQUE_GRAVE_ANALYSE).toHaveLength(10);
    expect(PATHETIQUE_GRAVE_ANALYSE[0]).toMatchObject({ numero: 1, degre: "i", fonction: "T" });
    const septiemesDiminuees = PATHETIQUE_GRAVE_ANALYSE.filter((m) => m.degre.startsWith("vii°"));
    expect(septiemesDiminuees.length).toBeGreaterThanOrEqual(5);
  });

  it("mesure 6 : le pivot enharmonique (Do#°7) est bien chiffré dans le fichier", () => {
    const m6 = PATHETIQUE_GRAVE_MESURES_1_10.slice(
      PATHETIQUE_GRAVE_MESURES_1_10.indexOf('<measure number="6"'),
      PATHETIQUE_GRAVE_MESURES_1_10.indexOf('<measure number="7"'),
    );
    expect(m6).toContain("pivot enh.");
    expect(m6).toContain("<root-step>C</root-step>");
  });
});

describe("PATHETIQUE_GRAVE_ANALYSE_NARRATIVE", () => {
  it("couvre les 5 étapes de la phrase, de l'exposition à la cadence suspendue", () => {
    expect(PATHETIQUE_GRAVE_ANALYSE_NARRATIVE.sections).toHaveLength(5);
    expect(PATHETIQUE_GRAVE_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  // Le contenu affiché aux étudiants ne doit jamais faire référence au
  // processus de relecture (brouillon, correction...) — seul le commentaire
  // d'en-tête du fichier source garde ce journal.
  it("ne mentionne pas le processus de relecture (brouillon/correction) dans le contenu affiché", () => {
    const tousLesTextes = [
      PATHETIQUE_GRAVE_ANALYSE_NARRATIVE.tonalite,
      PATHETIQUE_GRAVE_ANALYSE_NARRATIVE.metrique,
      PATHETIQUE_GRAVE_ANALYSE_NARRATIVE.forme,
      ...PATHETIQUE_GRAVE_ANALYSE_NARRATIVE.sections.map((s) => s.texte),
      ...PATHETIQUE_GRAVE_ANALYSE_NARRATIVE.synthese.map((s) => s.texte),
    ].join(" ");
    expect(tousLesTextes).not.toMatch(/brouillon|corrig|Dany/i);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("PATHETIQUE_GRAVE_MESURES_1_10 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur", () => {
    tk.loadData(PATHETIQUE_GRAVE_MESURES_1_10);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2000 });
    const svg: string = tk.renderToSVG(1);
    const notes = [...svg.matchAll(/<g id="([^"]+)" class="note"/g)];
    expect(notes.length).toBeGreaterThan(0);
    const mesures = [...svg.matchAll(/<g[^>]*class="measure"[^>]*>/g)];
    expect(mesures).toHaveLength(10);
  });

  // Régression du correctif de tempo/structure : chaque mesure doit durer
  // exactement 8000ms (30 à la noire, 4 temps) — écarts observés avant le
  // correctif de la mesure 10 : la dernière transition n'apparaissait plus.
  it("le surlignage Verovio avance de 8000ms par mesure (30bpm) sur les 9 premières transitions", async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
    const frais: any = new VerovioToolkit(await creerModule());
    frais.loadData(PATHETIQUE_GRAVE_MESURES_1_10);
    frais.renderToMIDI();
    frais.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2000 });
    frais.renderToSVG(1);

    let lastId: string | undefined;
    const ecarts: number[] = [];
    let lastMs = 0;
    for (let ms = 0; ms <= 90000; ms += 25) {
      const els = frais.getElementsAtTime(ms);
      const id = els.measure;
      if (id && id !== lastId) {
        if (lastId !== undefined) ecarts.push(ms - lastMs);
        lastId = id;
        lastMs = ms;
      }
    }
    expect(ecarts.length).toBeGreaterThanOrEqual(8);
    for (const e of ecarts) expect(e).toBeCloseTo(8000, -2);
  });
});

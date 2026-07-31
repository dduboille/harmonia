import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  TRISTAN_PRELUDE_MESURES_0_13,
  TRISTAN_PRELUDE_ANALYSE,
  TRISTAN_PRELUDE_ANALYSE_NARRATIVE,
} from "./conservatoire-tristan-prelude";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (export
// MuseScore Studio 4.7.4, fichier « tristan-prelude-annote.musicxml ») : le
// Prélude de Tristan und Isolde de Wagner, anacrouse + 13 mesures, avec
// <harmony> et chiffrage romain complet en <direction><words>.
describe("TRISTAN_PRELUDE_MESURES_0_13", () => {
  it("s'analyse sans erreur et couvre 14 mesures (0-13) en 6/8", () => {
    const score = parseMusicXML(TRISTAN_PRELUDE_MESURES_0_13);
    expect(score.fifths).toBe(0);
    expect(score.mode).toBe("minor");
    expect(score.signature).toBe("6/8");
    expect(score.measures).toHaveLength(14);
    expect(score.tempos).toEqual([{ onset: 0, bpm: 52.5 }]);
  });

  it("contient bien l'accord de Tristan (Fa-Si-Ré#-Sol#) à la mesure 2", () => {
    const m2 = TRISTAN_PRELUDE_MESURES_0_13.slice(
      TRISTAN_PRELUDE_MESURES_0_13.indexOf('<measure number="2"'),
      TRISTAN_PRELUDE_MESURES_0_13.indexOf('<measure number="3"'),
    );
    expect(m2).toContain("<root-step>F</root-step>");
    expect(m2).toContain("half-diminished");
    expect(m2).toContain("accord de Tristan");
  });

  it("transpose le même accord d'une tierce mineure à la mesure 6", () => {
    const m6 = TRISTAN_PRELUDE_MESURES_0_13.slice(
      TRISTAN_PRELUDE_MESURES_0_13.indexOf('<measure number="6"'),
      TRISTAN_PRELUDE_MESURES_0_13.indexOf('<measure number="7"'),
    );
    expect(m6).toContain("<root-step>G</root-step>");
    expect(m6).toContain("<root-alter>1</root-alter>");
    expect(m6).toContain("half-diminished");
  });

  it("place la 7e à la basse (Do) à la mesure 10, avec l'accord augmenté de passage", () => {
    const m10 = TRISTAN_PRELUDE_MESURES_0_13.slice(
      TRISTAN_PRELUDE_MESURES_0_13.indexOf('<measure number="10"'),
      TRISTAN_PRELUDE_MESURES_0_13.indexOf('<measure number="11"'),
    );
    expect(m10).toContain("<bass-step>C</bass-step>");
  });

  it("8 balises <harmony>, aux mesures 2, 3, 6, 7, 10, 11, 12, 13 uniquement", () => {
    const harmonies = [...TRISTAN_PRELUDE_MESURES_0_13.matchAll(/<measure number="(\d+)"[^>]*>(?:(?!<measure)[\s\S])*?<harmony /g)];
    const numeros = harmonies.map((m) => Number(m[1]));
    expect(numeros).toEqual([2, 3, 6, 7, 10, 11, 12, 13]);
  });

  it("se termine sur la dominante suspendue (Si7), sans jamais résoudre vers la tonique", () => {
    const m13 = TRISTAN_PRELUDE_MESURES_0_13.slice(
      TRISTAN_PRELUDE_MESURES_0_13.indexOf('<measure number="13"'),
    );
    expect(m13).toContain("<root-step>B</root-step>");
    expect(m13).toContain("suspendu");
  });

  it("nuances ajoutées : pp au début, deux crescendos, f à la troisième entrée (m.8)", () => {
    expect((TRISTAN_PRELUDE_MESURES_0_13.match(/<dynamics>/g) || [])).toHaveLength(2);
    expect((TRISTAN_PRELUDE_MESURES_0_13.match(/<wedge type="crescendo"/g) || [])).toHaveLength(2);
    expect((TRISTAN_PRELUDE_MESURES_0_13.match(/<wedge type="stop"/g) || [])).toHaveLength(2);
    expect(TRISTAN_PRELUDE_MESURES_0_13).toContain("<pp/>");
    expect(TRISTAN_PRELUDE_MESURES_0_13).toContain("<f/>");
  });

  it("TRISTAN_PRELUDE_ANALYSE couvre les 8 mesures harmonisées, l'accord de Tristan chiffré \"?\"", () => {
    expect(TRISTAN_PRELUDE_ANALYSE).toHaveLength(8);
    const tristanChords = TRISTAN_PRELUDE_ANALYSE.filter((m) => m.degre.includes("Tristan"));
    expect(tristanChords).toHaveLength(4);
    for (const m of tristanChords) expect(m.fonction).toBe("?");
    const dominantes = TRISTAN_PRELUDE_ANALYSE.filter((m) => m.fonction === "D");
    expect(dominantes).toHaveLength(4);
  });
});

describe("TRISTAN_PRELUDE_ANALYSE_NARRATIVE", () => {
  it("couvre les 3 phrases du motif", () => {
    expect(TRISTAN_PRELUDE_ANALYSE_NARRATIVE.sections).toHaveLength(3);
    expect(TRISTAN_PRELUDE_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  // Le contenu affiché aux étudiants ne doit jamais faire référence au
  // processus de relecture (brouillon, correction...) — seul le commentaire
  // d'en-tête du fichier source garde ce journal.
  it("ne mentionne pas le processus de relecture (brouillon/correction) dans le contenu affiché", () => {
    const tousLesTextes = [
      TRISTAN_PRELUDE_ANALYSE_NARRATIVE.tonalite,
      TRISTAN_PRELUDE_ANALYSE_NARRATIVE.metrique,
      TRISTAN_PRELUDE_ANALYSE_NARRATIVE.forme,
      ...TRISTAN_PRELUDE_ANALYSE_NARRATIVE.sections.map((s) => s.texte),
      ...TRISTAN_PRELUDE_ANALYSE_NARRATIVE.synthese.map((s) => s.texte),
    ].join(" ");
    expect(tousLesTextes).not.toMatch(/brouillon|corrig|Dany/i);
  });

  it("présente les deux lectures de l'accord de Tristan (verticale et fonctionnelle) dans la première section", () => {
    expect(TRISTAN_PRELUDE_ANALYSE_NARRATIVE.sections[0].texte).toMatch(/verticalement/i);
    expect(TRISTAN_PRELUDE_ANALYSE_NARRATIVE.sections[0].texte).toMatch(/appoggiature/i);
  });

  it("relie la sixte augmentée de la mesure 6 à celle du Prélude de Chopin (cours précédent)", () => {
    expect(TRISTAN_PRELUDE_ANALYSE_NARRATIVE.sections[1].texte).toMatch(/Chopin/);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("TRISTAN_PRELUDE_MESURES_0_13 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur", () => {
    tk.loadData(TRISTAN_PRELUDE_MESURES_0_13);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2000 });
    const svg: string = tk.renderToSVG(1);
    const notes = [...svg.matchAll(/<g id="([^"]+)" class="note"/g)];
    expect(notes.length).toBeGreaterThan(0);
    const mesures = [...svg.matchAll(/<g[^>]*class="measure"[^>]*>/g)];
    expect(mesures).toHaveLength(14);
  }, 20000);

  it("le surlignage Verovio avance de 3428.6ms par mesure pleine (52.5bpm à la noire, 3 noires par mesure de 6/8) — sauf la 1re transition, l'anacrouse ne durant qu'une croche", async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
    const frais: any = new VerovioToolkit(await creerModule());
    frais.loadData(TRISTAN_PRELUDE_MESURES_0_13);
    frais.renderToMIDI();
    frais.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2000 });
    frais.renderToSVG(1);

    let lastId: string | undefined;
    const ecarts: number[] = [];
    let lastMs = 0;
    for (let ms = 0; ms <= 60000; ms += 25) {
      const els = frais.getElementsAtTime(ms);
      const id = els.measure;
      if (id && id !== lastId) {
        if (lastId !== undefined) ecarts.push(ms - lastMs);
        lastId = id;
        lastMs = ms;
      }
    }
    expect(ecarts.length).toBeGreaterThanOrEqual(8);
    // 1re transition (m.0 → m.1) : l'anacrouse ne dure qu'une croche (0.5 noire).
    expect(ecarts[0]).toBeCloseTo((0.5 / 52.5) * 60000, -2);
    for (const e of ecarts.slice(1)) expect(e).toBeCloseTo((3 / 52.5) * 60000, -2);
  });
});

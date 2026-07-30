import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  PETROUCHKA_FICHE_MESURES_1_7,
  PETROUCHKA_FICHE_ANALYSE,
  PETROUCHKA_FICHE_ANALYSE_NARRATIVE,
} from "./conservatoire-petrouchka-fiche";

// Vérifie la fiche didactique VERBATIM fournie par Dany (fichier
// « petrouchka-fiche-didactique.musicxml ») : 7 mesures ENTIÈREMENT
// ORIGINALES (aucun passage du 2e tableau de Stravinsky reproduit),
// démonstration de l'accord de Petrouchka avec chiffrage/étiquettes en
// <direction><words>.
describe("PETROUCHKA_FICHE_MESURES_1_7", () => {
  it("s'analyse sans erreur et couvre 7 mesures, 4/4", () => {
    const score = parseMusicXML(PETROUCHKA_FICHE_MESURES_1_7);
    expect(score.signature).toBe("4/4");
    expect(score.measures).toHaveLength(7);
  });

  it("mesures 1-2 : Do majeur et Fa# majeur, sans note commune", () => {
    const score = parseMusicXML(PETROUCHKA_FICHE_MESURES_1_7);
    const pcsOf = (num: number) => {
      const meas = score.measures.find((m) => m.numero === num)!;
      const notesIn = score.notes.filter((n) => n.onset >= meas.start && n.onset < meas.start + meas.length);
      return new Set(notesIn.map((n) => n.midi % 12));
    };
    const m1 = pcsOf(1); // Do majeur : 0, 4, 7
    const m2 = pcsOf(2); // Fa# majeur : 6, 10, 1
    expect([...m1].sort((a, b) => a - b)).toEqual([0, 4, 7]);
    expect([...m2].sort((a, b) => a - b)).toEqual([1, 6, 10]);
    // Aucune classe de hauteur commune entre les deux triades.
    expect([...m1].some((p) => m2.has(p))).toBe(false);
  });

  it("mesure 3 : les deux triades sonnent simultanément, chacune intacte, une par portée", () => {
    const score = parseMusicXML(PETROUCHKA_FICHE_MESURES_1_7);
    const meas = score.measures.find((m) => m.numero === 3)!;
    const notesIn = score.notes.filter((n) => n.onset >= meas.start && n.onset < meas.start + meas.length);
    const staff1 = notesIn.filter((n) => n.part === "P1" && n.voice === "1").map((n) => n.midi % 12).sort((a, b) => a - b);
    const staff2 = notesIn.filter((n) => n.voice === "5").map((n) => n.midi % 12).sort((a, b) => a - b);
    expect(staff1).toEqual([0, 4, 7]); // Do majeur, main droite
    expect(staff2).toEqual([1, 6, 10]); // Fa# majeur, main gauche
  });

  it("mesure 4 : le Fa# est en 1er renversement, La# à la basse", () => {
    const score = parseMusicXML(PETROUCHKA_FICHE_MESURES_1_7);
    const meas = score.measures.find((m) => m.numero === 4)!;
    const notesIn = score.notes.filter((n) => n.onset >= meas.start && n.onset < meas.start + meas.length && n.voice === "5");
    const premiere = notesIn.sort((a, b) => a.onset - b.onset)[0];
    expect(premiere.midi % 12).toBe(10); // La# = Bb = classe 10
  });

  it("mesure 5 : la gamme hexatonique Do-Réb-Mi-Solb-Sol-Sib, dans cet ordre", () => {
    const score = parseMusicXML(PETROUCHKA_FICHE_MESURES_1_7);
    const meas = score.measures.find((m) => m.numero === 5)!;
    const notesIn = score.notes
      .filter((n) => n.onset >= meas.start && n.onset < meas.start + meas.length && n.voice === "1")
      .sort((a, b) => a.onset - b.onset);
    const pcs = notesIn.map((n) => n.midi % 12);
    // Do, Réb, Mi, Solb, Sol, Sib, puis retour au Do (octave supérieure).
    expect(pcs).toEqual([0, 1, 4, 6, 7, 10, 0]);
  });

  it("mesure 6 : collection octatonique complète (alternance demi-ton/ton), contenant les deux triades", () => {
    const score = parseMusicXML(PETROUCHKA_FICHE_MESURES_1_7);
    const meas = score.measures.find((m) => m.numero === 6)!;
    const notesIn = score.notes
      .filter((n) => n.onset >= meas.start && n.onset < meas.start + meas.length && n.voice === "1")
      .sort((a, b) => a.onset - b.onset);
    const pcs = notesIn.map((n) => n.midi % 12);
    expect(pcs).toEqual([0, 1, 3, 4, 6, 7, 9, 10]);
    const set = new Set(pcs);
    for (const p of [0, 4, 7]) expect(set.has(p)).toBe(true); // Do majeur
    for (const p of [1, 6, 10]) expect(set.has(p)).toBe(true); // Fa# majeur
  });

  it("mesure 7 : l'accord tenu sous point d'orgue aux deux portées", () => {
    const m7 = PETROUCHKA_FICHE_MESURES_1_7.slice(
      PETROUCHKA_FICHE_MESURES_1_7.indexOf('<measure number="7"'),
    );
    expect((m7.match(/<fermata/g) || [])).toHaveLength(2);
    expect(m7).toContain("polarité active");
  });

  it("PETROUCHKA_FICHE_ANALYSE couvre les 7 mesures, fonction \"?\" sans exception", () => {
    expect(PETROUCHKA_FICHE_ANALYSE).toHaveLength(7);
    expect(PETROUCHKA_FICHE_ANALYSE.every((m) => m.fonction === "?")).toBe(true);
    const nums = PETROUCHKA_FICHE_ANALYSE.map((m) => m.numero);
    expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});

describe("PETROUCHKA_FICHE_ANALYSE_NARRATIVE", () => {
  it("couvre les 6 sections de la démonstration (m.1-2 regroupées)", () => {
    expect(PETROUCHKA_FICHE_ANALYSE_NARRATIVE.sections).toHaveLength(6);
    expect(PETROUCHKA_FICHE_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  // Le contenu affiché aux étudiants ne doit jamais faire référence au
  // processus de relecture (brouillon, correction...) — seul le commentaire
  // d'en-tête du fichier source garde ce journal.
  it("ne mentionne pas le processus de relecture (brouillon/correction) dans le contenu affiché", () => {
    const tousLesTextes = [
      PETROUCHKA_FICHE_ANALYSE_NARRATIVE.tonalite,
      PETROUCHKA_FICHE_ANALYSE_NARRATIVE.metrique,
      PETROUCHKA_FICHE_ANALYSE_NARRATIVE.forme,
      ...PETROUCHKA_FICHE_ANALYSE_NARRATIVE.sections.map((s) => s.texte),
      ...PETROUCHKA_FICHE_ANALYSE_NARRATIVE.synthese.map((s) => s.texte),
    ].join(" ");
    expect(tousLesTextes).not.toMatch(/brouillon|corrig|Dany/i);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("PETROUCHKA_FICHE_MESURES_1_7 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur (7 mesures)", () => {
    tk.loadData(PETROUCHKA_FICHE_MESURES_1_7);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2000 });
    const svg: string = tk.renderToSVG(1);
    const notes = [...svg.matchAll(/<g id="([^"]+)" class="note"/g)];
    expect(notes.length).toBeGreaterThan(0);
    const mesures = [...svg.matchAll(/<g[^>]*class="measure"[^>]*>/g)];
    expect(mesures).toHaveLength(7);
  });
});

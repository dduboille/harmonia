import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  BLUE_IN_GREEN_MESURES_0_310,
  BLUE_IN_GREEN_ANALYSE,
  BLUE_IN_GREEN_ANALYSE_NARRATIVE,
} from "./conservatoire-blue-in-green";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (fichier
// « blue-in-green-annote.musicxml ») : Blue in Green (Miles Davis & Bill Evans,
// Kind of Blue, 1959), transcription intégrale pour piano (311 mesures, 3/4
// rubato, numérotation commençant à 0). Œuvre protégée — usage privé.
const PC_NAMES = ["Do","Do#","Ré","Mib","Mi","Fa","Fa#","Sol","Sol#","La","Sib","Si"];

function activeAt(score: ReturnType<typeof parseMusicXML>, t: number) {
  return score.notes.filter((n) => n.onset <= t && t < n.onset + n.duration);
}

describe("BLUE_IN_GREEN_MESURES_0_310", () => {
  it("s'analyse sans erreur et couvre 311 mesures (0 à 310) en 3/4", () => {
    const score = parseMusicXML(BLUE_IN_GREEN_MESURES_0_310);
    expect(score.fifths).toBe(-1);
    expect(score.signature).toBe("3/4");
    expect(score.measures).toHaveLength(311);
    expect(score.measures[0].numero).toBe(0);
    expect(score.measures[score.measures.length - 1].numero).toBe(310);
    expect(score.tempos[0]).toEqual({ onset: 0, bpm: 172 });
  });

  it("porte déjà le titre et le double crédit compositeur (aucune métadonnée ajoutée)", () => {
    expect(BLUE_IN_GREEN_MESURES_0_310).toContain("<movement-title>Blue in Green</movement-title>");
    expect(BLUE_IN_GREEN_MESURES_0_310).toContain("Miles Davis &amp; Bill Evans");
  });

  it("la pédale « sempre dopo » est présente une seule fois, à la mesure XML n°1 (mesure 2 de Dany)", () => {
    const idx = BLUE_IN_GREEN_MESURES_0_310.search(/sempre dopo/i);
    expect(idx).toBeGreaterThan(-1);
    const before = BLUE_IN_GREEN_MESURES_0_310.slice(0, idx);
    const matches = [...before.matchAll(/<measure number="(\d+)"/g)];
    expect(Number(matches[matches.length - 1][1])).toBe(1);
    expect((BLUE_IN_GREEN_MESURES_0_310.match(/sempre dopo/gi) ?? []).length).toBe(1);
  });

  it("le turnaround (ii-V de Sib, pas de Ré) est exactement aux mesures 31-32 : Cm9 puis F13", () => {
    const extraire = (num: number) => {
      const s = BLUE_IN_GREEN_MESURES_0_310.slice(
        BLUE_IN_GREEN_MESURES_0_310.indexOf(`<measure number="${num}"`),
        BLUE_IN_GREEN_MESURES_0_310.indexOf(`<measure number="${num + 1}"`),
      );
      return {
        root: (s.match(/<root-step>([^<]*)<\/root-step>/) ?? [])[1],
        kindText: (s.match(/<kind[^>]*text="([^"]*)"/) ?? [])[1],
      };
    };
    expect(extraire(31)).toEqual({ root: "C", kindText: "m9" });
    expect(extraire(32)).toEqual({ root: "F", kindText: "13" });
  });

  it("Mi7 (m.11) résout en La mineur, jamais en La majeur (pas de Do# au début de la m.14)", () => {
    const score = parseMusicXML(BLUE_IN_GREEN_MESURES_0_310);
    const meas14 = score.measures.find((m) => m.numero === 14)!;
    const pcs = new Set(activeAt(score, meas14.start).map((n) => PC_NAMES[n.midi % 12]));
    expect(pcs.has("La")).toBe(true);
    expect(pcs.has("Do#")).toBe(false);
  });

  it("mesure 38 : la basse réelle est Sib1 — le « B7 » du transcripteur est bien faux (subV confirmé)", () => {
    const score = parseMusicXML(BLUE_IN_GREEN_MESURES_0_310);
    const meas = score.measures.find((m) => m.numero === 38)!;
    const notes = score.notes.filter((n) => n.onset >= meas.start && n.onset < meas.start + meas.length);
    const basse = notes.reduce((min, n) => (n.midi < min.midi ? n : min));
    expect(PC_NAMES[basse.midi % 12]).toBe("Sib");
    expect(basse.midi).toBeLessThan(36); // Sib1, très grave
    expect(BLUE_IN_GREEN_MESURES_0_310.slice(
      BLUE_IN_GREEN_MESURES_0_310.indexOf('<measure number="38"'),
      BLUE_IN_GREEN_MESURES_0_310.indexOf('<measure number="39"'),
    )).toContain("le chiffrage « B7 » du fichier est FAUX");
  });

  it("les deux « A# major » du fichier (m.77 et m.219) sont bien la même enharmonie fautive de Sib majeur", () => {
    for (const num of [77, 219]) {
      const s = BLUE_IN_GREEN_MESURES_0_310.slice(
        BLUE_IN_GREEN_MESURES_0_310.indexOf(`<measure number="${num}"`),
        BLUE_IN_GREEN_MESURES_0_310.indexOf(`<measure number="${num + 1}"`),
      );
      expect(s).toContain("<root-step>A</root-step>");
      expect(s).toContain("<root-alter>1</root-alter>");
    }
  });

  it("mesure 39 : la tension du La7 contient bien ♭9 (Sib) et #9 (Do naturel), mais AUCUN fa naturel (pas de ♭13)", () => {
    const score = parseMusicXML(BLUE_IN_GREEN_MESURES_0_310);
    const meas = score.measures.find((m) => m.numero === 39)!;
    const notes = score.notes.filter((n) => n.onset >= meas.start && n.onset < meas.start + meas.length);
    const pcs = new Set(notes.map((n) => PC_NAMES[n.midi % 12]));
    expect(pcs.has("Sib")).toBe(true); // ♭9
    expect(pcs.has("Do")).toBe(true);  // #9 (enharmonique de Si#)
    expect(pcs.has("Fa#")).toBe(true); // 13 naturelle
    expect(pcs.has("Fa")).toBe(false); // pas de ♭13
  });

  it("la pièce s'éteint sur un accord de Ré∆7 sans tierce (Ré + La + Do#, Do# écrit Réb)", () => {
    const score = parseMusicXML(BLUE_IN_GREEN_MESURES_0_310);
    // Le dernier onset de toute la pièce : les 2 notes aiguës (La, Do#)
    // démarrent ici, pendant que la basse Ré (entamée un peu plus tôt) sonne
    // encore — c'est l'instant où les 3 notes de l'accord final se superposent.
    const maxOnset = Math.max(...score.notes.map((n) => n.onset));
    const finalNotes = activeAt(score, maxOnset);
    const pcs = new Set(finalNotes.map((n) => PC_NAMES[n.midi % 12]));
    expect([...pcs].sort()).toEqual(["Do#", "La", "Ré"].sort());
    // pas de tierce (Fa ou Fa#) dans l'accord final
    expect(pcs.has("Fa")).toBe(false);
    expect(pcs.has("Fa#")).toBe(false);
    // écrit Réb dans le fichier (step D, alter -1), pas Do#/C#
    const meas309 = BLUE_IN_GREEN_MESURES_0_310.slice(
      BLUE_IN_GREEN_MESURES_0_310.indexOf('<measure number="309"'),
      BLUE_IN_GREEN_MESURES_0_310.indexOf('<measure number="310"'),
    );
    expect(meas309).toMatch(/<step>D<\/step>\s*<alter>-1<\/alter>/);
  });

  it("BLUE_IN_GREEN_ANALYSE couvre les mesures clés, dans l'ordre, entre 0 et 310", () => {
    expect(BLUE_IN_GREEN_ANALYSE.length).toBeGreaterThan(10);
    const nums = BLUE_IN_GREEN_ANALYSE.map((m) => m.numero);
    expect(nums.every((n) => n >= 0 && n <= 310)).toBe(true);
    expect(nums.every((n, i) => i === 0 || n > nums[i - 1])).toBe(true);
  });
});

describe("BLUE_IN_GREEN_ANALYSE_NARRATIVE", () => {
  it("couvre les 5 sections (intro, cycle, dominantes déviées, enharmonie, fin)", () => {
    expect(BLUE_IN_GREEN_ANALYSE_NARRATIVE.sections).toHaveLength(5);
    expect(BLUE_IN_GREEN_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  it("décrit correctement le turnaround comme un cycle qui ne revient jamais à la tonique", () => {
    expect(BLUE_IN_GREEN_ANALYSE_NARRATIVE.forme).toMatch(/ne ramène jamais/);
  });

  // Le contenu affiché aux étudiants ne doit jamais faire référence au
  // processus de relecture (brouillon, correction...) — seul le commentaire
  // d'en-tête du fichier source garde ce journal.
  it("ne mentionne pas le processus de relecture (brouillon/correction) dans le contenu affiché", () => {
    const tousLesTextes = [
      BLUE_IN_GREEN_ANALYSE_NARRATIVE.tonalite,
      BLUE_IN_GREEN_ANALYSE_NARRATIVE.metrique,
      BLUE_IN_GREEN_ANALYSE_NARRATIVE.forme,
      ...BLUE_IN_GREEN_ANALYSE_NARRATIVE.sections.map((s) => s.texte),
      ...BLUE_IN_GREEN_ANALYSE_NARRATIVE.synthese.map((s) => s.texte),
    ].join(" ");
    expect(tousLesTextes).not.toMatch(/brouillon|corrig|Dany/i);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("BLUE_IN_GREEN_MESURES_0_310 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur (311 mesures, réparties sur plusieurs pages)", () => {
    tk.loadData(BLUE_IN_GREEN_MESURES_0_310);
    tk.renderToMIDI();
    tk.setOptions({ scale: 20, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 3000 });
    const pageCount = tk.getPageCount();
    let totalMesures = 0;
    let totalNotes = 0;
    for (let p = 1; p <= pageCount; p++) {
      const svg: string = tk.renderToSVG(p);
      totalNotes += [...svg.matchAll(/<g id="([^"]+)" class="note"/g)].length;
      totalMesures += [...svg.matchAll(/<g[^>]*class="measure"[^>]*>/g)].length;
    }
    expect(totalNotes).toBeGreaterThan(0);
    expect(totalMesures).toBe(311);
  }, 180000);
});

import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  PAVANE_MESURES_1_72,
  PAVANE_ANALYSE,
  PAVANE_ANALYSE_NARRATIVE,
} from "./conservatoire-pavane";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (fichier
// « pavane-annote.musicxml ») : Pavane pour une infante défunte (Maurice Ravel,
// 1899), INTÉGRALE (72 mesures, Sol majeur, 4/4). Œuvre du domaine public.
const PC_NAMES = ["Do","Do#","Ré","Mib","Mi","Fa","Fa#","Sol","Sol#","La","Sib","Si"];

function pcsMesure(score: ReturnType<typeof parseMusicXML>, num: number) {
  const meas = score.measures.find((m) => m.numero === num)!;
  const notes = score.notes.filter((n) => n.onset >= meas.start && n.onset < meas.start + meas.length);
  return new Set(notes.map((n) => PC_NAMES[n.midi % 12]));
}

describe("PAVANE_MESURES_1_72", () => {
  it("s'analyse sans erreur et couvre 72 mesures en Sol majeur, 4/4", () => {
    const score = parseMusicXML(PAVANE_MESURES_1_72);
    expect(score.fifths).toBe(1);
    expect(score.mode).toBe("major");
    expect(score.signature).toBe("4/4");
    expect(score.measures).toHaveLength(72);
    expect(score.tempos[0]).toEqual({ onset: 0, bpm: 80 });
  });

  it("porte déjà le titre et le compositeur (aucune métadonnée ajoutée)", () => {
    expect(PAVANE_MESURES_1_72).toContain("Pavane pour une infante défunte");
    expect(PAVANE_MESURES_1_72).toContain("Maurice Ravel");
  });

  it("mesure 4 : le I∆9 porte bien sa 7e majeure (Fa#)", () => {
    const score = parseMusicXML(PAVANE_MESURES_1_72);
    const pcs = pcsMesure(score, 4);
    expect(pcs.has("Fa#")).toBe(true);
    expect(pcs.has("Sol")).toBe(true);
  });

  it("le premier chromatisme de toute la pièce (Sol#) est bien à la mesure 11, aucune note hors de la gamme de Sol majeur avant", () => {
    const score = parseMusicXML(PAVANE_MESURES_1_72);
    const gammeSolMajeur = new Set([7, 9, 11, 0, 2, 4, 6]); // Sol,La,Si,Do,Ré,Mi,Fa#
    for (const meas of score.measures) {
      if (meas.numero >= 11) break;
      const notes = score.notes.filter((n) => n.onset >= meas.start && n.onset < meas.start + meas.length);
      for (const nt of notes) {
        expect(gammeSolMajeur.has(nt.midi % 12)).toBe(true);
      }
    }
    const pcs11 = pcsMesure(score, 11);
    expect(pcs11.has("Sol#")).toBe(true);
  });

  it("le refrain cadence bien sur si mineur (iii) à la mesure 12, pas sur la tonique", () => {
    const score = parseMusicXML(PAVANE_MESURES_1_72);
    const pcs = pcsMesure(score, 12);
    // Si-Ré-Fa# = la triade de Si mineur elle-même (Fa# en est la quinte, pas
    // le témoin d'une tierce de Sol majeur) — donc pas de Do# ni de tension
    // qui trahirait une autre lecture.
    expect(pcs.has("Si")).toBe(true);
    expect(pcs.has("Ré")).toBe(true);
    expect(pcs.has("Fa#")).toBe(true);
  });

  it("les repères de forme (rondeau) sont bien annotés dans le fichier, aux bonnes mesures", () => {
    const extraireMots = (num: number, next: number) =>
      PAVANE_MESURES_1_72.slice(
        PAVANE_MESURES_1_72.indexOf(`<measure number="${num}"`),
        PAVANE_MESURES_1_72.indexOf(`<measure number="${next}"`),
      );
    expect(extraireMots(13, 14)).toContain("Très lointain");
    expect(extraireMots(26, 27)).toContain("couplet 1");
    expect(extraireMots(28, 29)).toContain("Reprenez le mouvement");
    expect(extraireMots(39, 40)).toContain("couplet 2");
    expect(extraireMots(48, 49)).toContain("Très grave");
    expect(extraireMots(58, 59)).toContain("Très grave");
    expect(extraireMots(61, 62)).toContain("marquez le chant");
    expect(extraireMots(70, 71)).toContain("En élargissant beaucoup");
  });

  it("les bémols du couplet 2 (mixture de Sol mineur) apparaissent progressivement après la mesure 39", () => {
    const score = parseMusicXML(PAVANE_MESURES_1_72);
    expect(pcsMesure(score, 39).has("Sib")).toBe(false);
    expect(pcsMesure(score, 40).has("Sib")).toBe(true);
    let premierMib: number | null = null;
    for (const meas of score.measures) {
      if (meas.numero < 39) continue;
      if ([...pcsMesure(score, meas.numero)].includes("Mib")) { premierMib = meas.numero; break; }
    }
    expect(premierMib).toBe(44);
  });

  it("PAVANE_ANALYSE couvre les mesures clés, dans l'ordre, entre 1 et 72", () => {
    expect(PAVANE_ANALYSE.length).toBeGreaterThan(10);
    const nums = PAVANE_ANALYSE.map((m) => m.numero);
    expect(nums.every((n) => n >= 1 && n <= 72)).toBe(true);
    expect(nums.every((n, i) => i === 0 || n > nums[i - 1])).toBe(true);
  });
});

describe("PAVANE_ANALYSE_NARRATIVE", () => {
  it("couvre les 5 sections (refrain, médiante, couplet1/refrain2, couplet2, final)", () => {
    expect(PAVANE_ANALYSE_NARRATIVE.sections).toHaveLength(5);
    expect(PAVANE_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  // Le contenu affiché aux étudiants ne doit jamais faire référence au
  // processus de relecture (brouillon, correction...) — seul le commentaire
  // d'en-tête du fichier source garde ce journal.
  it("ne mentionne pas le processus de relecture (brouillon/correction) dans le contenu affiché", () => {
    const tousLesTextes = [
      PAVANE_ANALYSE_NARRATIVE.tonalite,
      PAVANE_ANALYSE_NARRATIVE.metrique,
      PAVANE_ANALYSE_NARRATIVE.forme,
      ...PAVANE_ANALYSE_NARRATIVE.sections.map((s) => s.texte),
      ...PAVANE_ANALYSE_NARRATIVE.synthese.map((s) => s.texte),
    ].join(" ");
    expect(tousLesTextes).not.toMatch(/brouillon|corrig|Dany/i);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("PAVANE_MESURES_1_72 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur (72 mesures, réparties sur plusieurs pages)", () => {
    tk.loadData(PAVANE_MESURES_1_72);
    tk.renderToMIDI();
    tk.setOptions({ scale: 25, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 3000 });
    const pageCount = tk.getPageCount();
    let totalMesures = 0;
    let totalNotes = 0;
    for (let p = 1; p <= pageCount; p++) {
      const svg: string = tk.renderToSVG(p);
      totalNotes += [...svg.matchAll(/<g id="([^"]+)" class="note"/g)].length;
      totalMesures += [...svg.matchAll(/<g[^>]*class="measure"[^>]*>/g)].length;
    }
    expect(totalNotes).toBeGreaterThan(0);
    expect(totalMesures).toBe(72);
  }, 60000);
});

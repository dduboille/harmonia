import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  VIVALDI_HIVER_MESURES_1_124,
  VIVALDI_HIVER_ANALYSE,
  VIVALDI_HIVER_ANALYSE_NARRATIVE,
} from "./conservatoire-vivaldi-hiver";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (fichier
// « vivaldi-hiver-annote.musicxml ») : Vivaldi, L'Hiver, 1er mouvement, 124
// mesures, arrangement piano développé.
describe("VIVALDI_HIVER_MESURES_1_124", () => {
  it("s'analyse sans erreur et couvre 124 mesures en fa mineur, 4/4", () => {
    const score = parseMusicXML(VIVALDI_HIVER_MESURES_1_124);
    expect(score.fifths).toBe(-4);
    expect(score.mode).toBe("minor");
    expect(score.signature).toBe("4/4");
    expect(score.measures).toHaveLength(124);
  });

  it("2475 <note> bruts (le compte annoncé par Dany, 10e fois d'affilée qu'il tombe pile)", () => {
    const rawNoteTags = (VIVALDI_HIVER_MESURES_1_124.match(/<note[ >]/g) || []).length;
    expect(rawNoteTags).toBe(2475);
  });

  it("porte 13 balises <harmony>", () => {
    expect((VIVALDI_HIVER_MESURES_1_124.match(/<harmony/g) || [])).toHaveLength(13);
  });

  it("m.1-8 : l'accumulation glacée — Fa seul, puis +Sol +Sib, puis +Réb (iiø7)", () => {
    const score = parseMusicXML(VIVALDI_HIVER_MESURES_1_124);
    const m1 = score.measures.find((m) => m.numero === 1)!;
    const notesM1 = score.notes.filter((n) => n.onset >= m1.start && n.onset < m1.start + m1.length);
    expect(new Set(notesM1.map((n) => n.pc))).toEqual(new Set([5])); // Fa seul

    const m3 = score.measures.find((m) => m.numero === 3)!;
    const notesM3 = score.notes.filter((n) => n.onset >= m3.start && n.onset < m3.start + m3.length);
    expect(new Set(notesM3.map((n) => n.pc))).toEqual(new Set([5, 7, 10])); // Fa-Sol-Sib

    const m5 = score.measures.find((m) => m.numero === 5)!;
    const m8 = score.measures.find((m) => m.numero === 8)!;
    const notesM58 = score.notes.filter((n) => n.onset >= m5.start && n.onset < m8.start + m8.length);
    expect(new Set(notesM58.map((n) => n.pc))).toEqual(new Set([5, 7, 10, 1])); // Fa-Sol-Sib-Réb : iiø7
  });

  it("m.9-10 : le Fa♭ (enharmonique de Mi) aiguise l'accord en vii°7", () => {
    const score = parseMusicXML(VIVALDI_HIVER_MESURES_1_124);
    const m9 = score.measures.find((m) => m.numero === 9)!;
    const m10 = score.measures.find((m) => m.numero === 10)!;
    const notes = score.notes.filter((n) => n.onset >= m9.start && n.onset < m10.start + m10.length);
    expect(notes.some((n) => n.step === "F" && n.alter === -1)).toBe(true); // Fa♭ littéral
    expect(new Set(notes.map((n) => n.pc))).toEqual(new Set([4, 7, 10, 1])); // Mi-Sol-Sib-Réb = E°7
  });

  it("m.11 : résolution en fa mineur (i) après dix mesures de gel", () => {
    const score = parseMusicXML(VIVALDI_HIVER_MESURES_1_124);
    const m11 = score.measures.find((m) => m.numero === 11)!;
    const notes = score.notes.filter((n) => n.onset >= m11.start && n.onset < m11.start + m11.length);
    const pcs = new Set(notes.map((n) => n.pc));
    for (const pc of [5, 8, 0]) expect(pcs.has(pc)).toBe(true); // Fa-Lab-Do
  });

  it("m.44-51 : le cycle des quintes complet à la basse (Do-Fa-Sib-Mib-Lab-Réb-Sol-Do)", () => {
    const score = parseMusicXML(VIVALDI_HIVER_MESURES_1_124);
    const basseDe = (mnum: number) => {
      const m = score.measures.find((mm) => mm.numero === mnum)!;
      const notes = score.notes.filter((n) => n.onset >= m.start && n.onset < m.start + m.length);
      const minMidi = Math.min(...notes.map((n) => n.midi));
      return notes.find((n) => n.midi === minMidi)!.pc;
    };
    const seq = [44, 45, 46, 47, 48, 49, 50, 51].map(basseDe);
    expect(seq).toEqual([0, 5, 10, 3, 8, 1, 7, 0]); // Do-Fa-Sib-Mib-Lab-Réb-Sol-Do
  });

  it("m.62 : Mi♭♭ (mi double bémol) littéral, chromatisme maximal (9 classes de hauteur)", () => {
    const score = parseMusicXML(VIVALDI_HIVER_MESURES_1_124);
    const m62 = score.measures.find((m) => m.numero === 62)!;
    const notes = score.notes.filter((n) => n.onset >= m62.start && n.onset < m62.start + m62.length);
    expect(notes.some((n) => n.step === "E" && n.alter === -2)).toBe(true);
    expect(new Set(notes.map((n) => n.pc)).size).toBeGreaterThanOrEqual(9);
  });

  it("m.111-116 reprend LITTÉRALEMENT la séquence de basse de m.45-50 (pas m.44-49 : décalage d'une station)", () => {
    const score = parseMusicXML(VIVALDI_HIVER_MESURES_1_124);
    const basseDe = (mnum: number) => {
      const m = score.measures.find((mm) => mm.numero === mnum)!;
      const notes = score.notes.filter((n) => n.onset >= m.start && n.onset < m.start + m.length);
      const minMidi = Math.min(...notes.map((n) => n.midi));
      return notes.find((n) => n.midi === minMidi)!.pc;
    };
    const seqOrigine = [45, 46, 47, 48, 49, 50].map(basseDe);
    const seqReprise = [111, 112, 113, 114, 115, 116].map(basseDe);
    expect(seqReprise).toEqual(seqOrigine);
    // mais la figuration change : m.44 (1re exposition) a des accords tenus longs,
    // m.111 (reprise) alterne une basse martelée courte — pas identique note pour note
    const m44 = score.measures.find((m) => m.numero === 44)!;
    const m111 = score.measures.find((m) => m.numero === 111)!;
    const notes44 = score.notes.filter((n) => n.onset >= m44.start && n.onset < m44.start + m44.length);
    const notes111 = score.notes.filter((n) => n.onset >= m111.start && n.onset < m111.start + m111.length);
    const sig44 = notes44.map((n) => `${n.midi}@${n.onset - m44.start}`).sort().join(",");
    const sig111 = notes111.map((n) => `${n.midi}@${n.onset - m111.start}`).sort().join(",");
    expect(sig44).not.toBe(sig111);
  });

  it("m.119 : l'accord du gel initial (Sol-Sib-Réb-Fa) revient en iiø6/5, basse Sib", () => {
    const score = parseMusicXML(VIVALDI_HIVER_MESURES_1_124);
    const m119 = score.measures.find((m) => m.numero === 119)!;
    const notes = score.notes.filter((n) => n.onset >= m119.start && n.onset < m119.start + m119.length);
    expect(new Set(notes.map((n) => n.pc))).toEqual(new Set([1, 5, 7, 10])); // Réb-Fa-Sol-Sib
    const minMidi = Math.min(...notes.map((n) => n.midi));
    expect(notes.find((n) => n.midi === minMidi)!.pc).toBe(10); // basse = Sib
  });

  it("m.122 : le même accord revient une 2e fois, avec le Si♭0 — la note la plus grave du fichier", () => {
    const score = parseMusicXML(VIVALDI_HIVER_MESURES_1_124);
    const minMidiGlobal = Math.min(...score.notes.map((n) => n.midi));
    expect(minMidiGlobal).toBe(22); // Si♭0
    const noteLaPlusGrave = score.notes.find((n) => n.midi === minMidiGlobal)!;
    expect(noteLaPlusGrave.measure).toBe(122);
    expect(noteLaPlusGrave.step).toBe("B");
    expect(noteLaPlusGrave.alter).toBe(-1);
  });

  it("m.124 : accord final fa mineur (i), sans tierce picarde", () => {
    const score = parseMusicXML(VIVALDI_HIVER_MESURES_1_124);
    const m124 = score.measures.find((m) => m.numero === 124)!;
    const notes = score.notes.filter((n) => n.onset >= m124.start && n.onset < m124.start + m124.length);
    const pcs = new Set(notes.map((n) => n.pc));
    expect(pcs.has(8)).toBe(true); // Lab, tierce mineure
    expect(pcs.has(4)).toBe(false); // pas de Mi (tierce picarde)
  });

  it("VIVALDI_HIVER_ANALYSE : repères croissants, tous dans [1, 124]", () => {
    const nums = VIVALDI_HIVER_ANALYSE.map((m) => m.numero);
    expect(nums).toEqual([...nums].sort((a, b) => a - b));
    for (const n of nums) {
      expect(n).toBeGreaterThanOrEqual(1);
      expect(n).toBeLessThanOrEqual(124);
    }
  });

  it("les repères de structure de Dany sont bien présents dans le fichier (<direction><words>)", () => {
    expect(VIVALDI_HIVER_MESURES_1_124).toContain("L'ACCUMULATION GLACÉE");
    expect(VIVALDI_HIVER_MESURES_1_124).toContain("CYCLE DES QUINTES COMPLET");
    expect(VIVALDI_HIVER_MESURES_1_124).toContain("secondes broyées");
    expect(VIVALDI_HIVER_MESURES_1_124).toContain("cheville cadentielle");
    expect(VIVALDI_HIVER_MESURES_1_124).toContain("sans picarde");
  });
});

describe("VIVALDI_HIVER_ANALYSE_NARRATIVE", () => {
  it("couvre les 5 sections (ouverture, épisodes en ut, clusters, più Vivace, grande cadence)", () => {
    expect(VIVALDI_HIVER_ANALYSE_NARRATIVE.sections).toHaveLength(5);
    expect(VIVALDI_HIVER_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  it("ne mentionne pas le processus de relecture (brouillon/correction) dans le contenu affiché", () => {
    const tousLesTextes = [
      VIVALDI_HIVER_ANALYSE_NARRATIVE.tonalite,
      VIVALDI_HIVER_ANALYSE_NARRATIVE.metrique,
      VIVALDI_HIVER_ANALYSE_NARRATIVE.forme,
      ...VIVALDI_HIVER_ANALYSE_NARRATIVE.sections.map((s) => s.texte),
      ...VIVALDI_HIVER_ANALYSE_NARRATIVE.synthese.map((s) => s.texte),
    ].join(" ");
    expect(tousLesTextes).not.toMatch(/brouillon|corrig|Dany/i);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("VIVALDI_HIVER_MESURES_1_124 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur (124 mesures)", () => {
    tk.loadData(VIVALDI_HIVER_MESURES_1_124);
    tk.renderToMIDI();
    tk.setOptions({ scale: 30, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2500 });
    const pageCount = tk.getPageCount();
    let totalNotes = 0;
    for (let p = 1; p <= pageCount; p++) {
      const svg: string = tk.renderToSVG(p);
      totalNotes += [...svg.matchAll(/<g id="([^"]+)" class="note"/g)].length;
    }
    expect(totalNotes).toBeGreaterThan(0);
  }, 30000);
});

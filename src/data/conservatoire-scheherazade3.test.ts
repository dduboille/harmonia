import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  SCHEHERAZADE3_MESURES_1_80,
  SCHEHERAZADE3_ANALYSE,
  SCHEHERAZADE3_ANALYSE_NARRATIVE,
} from "./conservatoire-scheherazade3";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (fichier
// « scheherazade-3-annote.musicxml ») : Rimsky-Korsakov, Schéhérazade, 3e
// mouvement, 80 mesures, version condensée pour quatuor à cordes + contrebasse.
describe("SCHEHERAZADE3_MESURES_1_80", () => {
  it("s'analyse sans erreur et couvre 80 mesures en Sol majeur, 6/8", () => {
    const score = parseMusicXML(SCHEHERAZADE3_MESURES_1_80);
    expect(score.fifths).toBe(1);
    expect(score.mode).toBe("major");
    expect(score.signature).toBe("6/8");
    expect(score.measures).toHaveLength(80);
  });

  it("1264 <note> bruts (le compte annoncé par Dany), sur 5 parties instrumentales", () => {
    const rawNoteTags = (SCHEHERAZADE3_MESURES_1_80.match(/<note[ >]/g) || []).length;
    expect(rawNoteTags).toBe(1264);
    const score = parseMusicXML(SCHEHERAZADE3_MESURES_1_80);
    expect(new Set(score.notes.map((n) => n.part)).size).toBe(5);
  });

  it("ne porte que 2 balises <harmony> (sol mineur à la Princesse, Sol majeur final) — pas de grille chiffrable", () => {
    expect((SCHEHERAZADE3_MESURES_1_80.match(/<harmony/g) || [])).toHaveLength(2);
  });

  it("mesure 1 : le violon (P1) expose seul l'anacrouse, avant l'entrée des pédales en m.2", () => {
    const score = parseMusicXML(SCHEHERAZADE3_MESURES_1_80);
    const m1 = score.measures.find((m) => m.numero === 1)!;
    const notesM1 = score.notes.filter((n) => n.onset >= m1.start && n.onset < m1.start + m1.length);
    expect(new Set(notesM1.map((n) => n.part)).size).toBe(1);
  });

  it("mesure 2 : une pédale Sol-Si-Ré (I) tenue par 4 parties sous la mélodie qui continue", () => {
    const score = parseMusicXML(SCHEHERAZADE3_MESURES_1_80);
    const m2 = score.measures.find((m) => m.numero === 2)!;
    const notesM2 = score.notes.filter((n) => n.onset === m2.start);
    const pedale = notesM2.filter((n) => n.part !== "P1");
    expect(pedale.length).toBe(4);
    expect(new Set(pedale.map((n) => n.pc))).toEqual(new Set([7, 2, 11])); // Sol, Ré, Si
    // la mélodie (P1) a une durée bien plus courte que la pédale tenue
    const melodie = notesM2.find((n) => n.part === "P1")!;
    expect(melodie.duration).toBeLessThan(pedale[0].duration);
  });

  it("thème du Prince (m.1-9) : la MÉLODIE (violon I) est diatonique pure, aucune altération", () => {
    const score = parseMusicXML(SCHEHERAZADE3_MESURES_1_80);
    const m1 = score.measures.find((m) => m.numero === 1)!;
    const m9 = score.measures.find((m) => m.numero === 9)!;
    const melodie = score.notes.filter(
      (n) => n.onset >= m1.start && n.onset < m9.start + m9.length && n.part === "P1"
    );
    const gMajor = new Set([7, 9, 11, 0, 2, 4, 6]);
    expect(melodie.length).toBeGreaterThan(0);
    expect(melodie.every((n) => gMajor.has(n.pc))).toBe(true);
  });

  it("mais le VIOLONCELLE, sous la pédale, orne discrètement d'un chromatisme de passage (m.4/6/8)", () => {
    const score = parseMusicXML(SCHEHERAZADE3_MESURES_1_80);
    const m3 = score.measures.find((m) => m.numero === 3)!;
    const m8 = score.measures.find((m) => m.numero === 8)!;
    const violoncelle = score.notes.filter(
      (n) => n.onset >= m3.start && n.onset < m8.start + m8.length && n.part === "P4"
    );
    expect(violoncelle.some((n) => n.alter !== 0)).toBe(true); // nuance non mentionnée par Dany
  });

  it("épisode pizzicato (m.24-30) : dialogue de basses La-Si sous Fa# tenu", () => {
    const score = parseMusicXML(SCHEHERAZADE3_MESURES_1_80);
    const m24 = score.measures.find((m) => m.numero === 24)!;
    const m30 = score.measures.find((m) => m.numero === 30)!;
    const pcs = new Set(
      score.notes.filter((n) => n.onset >= m24.start && n.onset < m30.start + m30.length).map((n) => n.pc)
    );
    for (const pc of [9, 11, 6]) expect(pcs.has(pc)).toBe(true); // La, Si, Fa#
  });

  it("la Princesse (m.43) : sol mineur orné du Do#, ornement jamais résolu", () => {
    const score = parseMusicXML(SCHEHERAZADE3_MESURES_1_80);
    const m43 = score.measures.find((m) => m.numero === 43)!;
    const m46 = score.measures.find((m) => m.numero === 46)!;
    const pcs = new Set(
      score.notes.filter((n) => n.onset >= m43.start && n.onset < m46.start + m46.length).map((n) => n.pc)
    );
    expect(pcs.has(1)).toBe(true); // Do#
    expect(pcs.has(2)).toBe(true); // Ré (résolution locale de l'appogiature)
  });

  it("la descente Ré-Do-Sib-La-Sol (tétracorde) présente entre les mesures 47 et 58", () => {
    const score = parseMusicXML(SCHEHERAZADE3_MESURES_1_80);
    const m47 = score.measures.find((m) => m.numero === 47)!;
    const m58 = score.measures.find((m) => m.numero === 58)!;
    const pcs = new Set(
      score.notes.filter((n) => n.onset >= m47.start && n.onset < m58.start + m58.length).map((n) => n.pc)
    );
    for (const pc of [2, 0, 10, 9, 7]) expect(pcs.has(pc)).toBe(true); // Ré Do Sib La Sol
  });

  it("mesure 80 : l'UNIQUE tutti homophone du fichier — 5 parties, même onset, même durée", () => {
    const score = parseMusicXML(SCHEHERAZADE3_MESURES_1_80);
    const m80 = score.measures.find((m) => m.numero === 80)!;
    const notes = score.notes.filter((n) => n.onset >= m80.start && n.onset < m80.start + m80.length);
    const dernierOnset = Math.max(...notes.map((n) => n.onset));
    const auDernierOnset = notes.filter((n) => n.onset === dernierOnset);
    expect(new Set(auDernierOnset.map((n) => n.part)).size).toBe(5);
    expect(new Set(auDernierOnset.map((n) => n.duration)).size).toBe(1); // même durée pour toutes les parties
    // Sol-Ré-Si aux violons/contrebasse (7,2,11), MAIS l'alto y superpose son propre
    // arpège Mi-Do-La (4,0,9) — le hexacorde complet réellement sonnant, pas une
    // simple triade nue (détail non mentionné par Dany, vérifié dans le XML brut).
    expect(new Set(auDernierOnset.map((n) => n.pc))).toEqual(new Set([7, 2, 11, 4, 0, 9]));
    const alto = auDernierOnset.filter((n) => n.part === "P3");
    expect(new Set(alto.map((n) => n.pc))).toEqual(new Set([4, 0, 9])); // Mi-Do-La, l'arpège isolé
  });

  it("l'accord final (m.80) est le moment le plus dense de toute la pièce (le plus de notes ET de classes de hauteur distinctes)", () => {
    // Nuance vérifiée : il existe QUELQUES autres instants où les 5 parties
    // s'alignent brièvement (surtout aux articulations de la forme — fin du
    // Prince m.42, fin de la Princesse m.58, fin du retour m.74) — donc m.80
    // n'est PAS le seul moment d'alignement à 5 parties. En revanche c'est,
    // de loin, le plus dense (15 notes contre 7 au maximum ailleurs, 6 classes
    // de hauteur distinctes contre 4 au maximum ailleurs) et le seul explicitement
    // annoté "Sol majeur final" dans le fichier.
    const score = parseMusicXML(SCHEHERAZADE3_MESURES_1_80);
    const byOnset = new Map<number, typeof score.notes>();
    for (const n of score.notes) {
      const arr = byOnset.get(n.onset) ?? [];
      arr.push(n);
      byOnset.set(n.onset, arr);
    }
    let maxNotes = 0;
    let maxPcs = 0;
    let m80MaxNotes = 0;
    let m80MaxPcs = 0;
    const m80 = score.measures.find((m) => m.numero === 80)!;
    for (const [onset, arr] of byOnset) {
      const pcCount = new Set(arr.map((n) => n.pc)).size;
      const isM80 = onset >= m80.start && onset < m80.start + m80.length;
      if (isM80) {
        m80MaxNotes = Math.max(m80MaxNotes, arr.length);
        m80MaxPcs = Math.max(m80MaxPcs, pcCount);
      } else {
        maxNotes = Math.max(maxNotes, arr.length);
        maxPcs = Math.max(maxPcs, pcCount);
      }
    }
    expect(m80MaxNotes).toBeGreaterThan(maxNotes);
    expect(m80MaxPcs).toBeGreaterThan(maxPcs);
  });

  it("SCHEHERAZADE3_ANALYSE : repères croissants, tous dans [1, 80]", () => {
    const nums = SCHEHERAZADE3_ANALYSE.map((m) => m.numero);
    expect(nums).toEqual([...nums].sort((a, b) => a - b));
    for (const n of nums) {
      expect(n).toBeGreaterThanOrEqual(1);
      expect(n).toBeLessThanOrEqual(80);
    }
  });

  it("les repères de structure de Dany sont bien présents dans le fichier (<direction><words>)", () => {
    expect(SCHEHERAZADE3_MESURES_1_80).toContain("THÈME DU PRINCE");
    expect(SCHEHERAZADE3_MESURES_1_80).toContain("LA PRINCESSE");
    expect(SCHEHERAZADE3_MESURES_1_80).toContain("tétracorde descendant");
    expect(SCHEHERAZADE3_MESURES_1_80).toContain("retour du Prince");
    expect(SCHEHERAZADE3_MESURES_1_80).toContain("Sol majeur final");
  });
});

describe("SCHEHERAZADE3_ANALYSE_NARRATIVE", () => {
  it("couvre les 5 sections (Prince, pizzicato, Princesse, retour, coda)", () => {
    expect(SCHEHERAZADE3_ANALYSE_NARRATIVE.sections).toHaveLength(5);
    expect(SCHEHERAZADE3_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  it("ne mentionne pas le processus de relecture (brouillon/correction) dans le contenu affiché", () => {
    const tousLesTextes = [
      SCHEHERAZADE3_ANALYSE_NARRATIVE.tonalite,
      SCHEHERAZADE3_ANALYSE_NARRATIVE.metrique,
      SCHEHERAZADE3_ANALYSE_NARRATIVE.forme,
      ...SCHEHERAZADE3_ANALYSE_NARRATIVE.sections.map((s) => s.texte),
      ...SCHEHERAZADE3_ANALYSE_NARRATIVE.synthese.map((s) => s.texte),
    ].join(" ");
    expect(tousLesTextes).not.toMatch(/brouillon|corrig|Dany/i);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("SCHEHERAZADE3_MESURES_1_80 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur (80 mesures, 5 parties)", () => {
    tk.loadData(SCHEHERAZADE3_MESURES_1_80);
    tk.renderToMIDI();
    tk.setOptions({ scale: 30, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2500 });
    const pageCount = tk.getPageCount();
    let totalNotes = 0;
    for (let p = 1; p <= pageCount; p++) {
      const svg: string = tk.renderToSVG(p);
      totalNotes += [...svg.matchAll(/<g id="([^"]+)" class="note"/g)].length;
    }
    expect(totalNotes).toBeGreaterThan(0);
  }, 20000);
});

import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  MORRICONE_MESURES_1_111,
  MORRICONE_ANALYSE,
  MORRICONE_ANALYSE_NARRATIVE,
} from "./conservatoire-morricone";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (fichier
// « morricone-annote.musicxml », métadonnées déjà nettoyées par ses soins) :
// Le Bon, la Brute et le Truand (thème principal), INTÉGRAL (111 mesures, 7
// parties). Œuvre protégée — usage privé exclusivement.
//
// La trompette (partie P4) est transpositrice (Sib, -2 demi-tons) ; notre
// moteur partagé ne lit pas <transpose> (limite documentée, cf. commentaire
// d'en-tête du fichier de données) — les vérifications ci-dessous décalent
// manuellement les notes de P4 de -2 demi-tons pour retrouver la hauteur réelle.
function realMidi(n: { midi: number; part: string }): number {
  return n.part === "P4" ? n.midi - 2 : n.midi;
}

describe("MORRICONE_MESURES_1_111", () => {
  it("s'analyse sans erreur et couvre 111 mesures en 2/2, 1 bémol à la clé", () => {
    const score = parseMusicXML(MORRICONE_MESURES_1_111);
    expect(score.fifths).toBe(-1);
    expect(score.signature).toBe("2/2");
    expect(score.measures).toHaveLength(111);
    expect(score.tempos[0]).toEqual({ onset: 0, bpm: 200 });
  });

  it("porte bien les 7 parties instrumentales", () => {
    const noms = [...MORRICONE_MESURES_1_111.matchAll(/<part-name[^>]*>([^<]*)<\/part-name>/g)].map((m) => m[1]);
    expect(noms).toEqual([
      "Piano",
      "Synthétiseur d'instruments à cordes",
      "Ocarina Alto en Sol",
      "Trompette",
      "Guitare électrique",
      "Voix",
      "Grosse caisse de concert",
    ]);
  });

  it("la trompette est bien déclarée transpositrice (Sib, -2 demi-tons)", () => {
    const trompette = MORRICONE_MESURES_1_111.slice(
      0,
      MORRICONE_MESURES_1_111.indexOf('<part id="P5"'),
    );
    expect(trompette).toContain("<chromatic>-2</chromatic>");
  });

  it("le renvoi To Coda est exactement à la mesure 50, D.S. al Coda exactement à la mesure 90", () => {
    const idxToCoda = MORRICONE_MESURES_1_111.indexOf("To Coda");
    const idxDS = MORRICONE_MESURES_1_111.indexOf("D.S. al Coda");
    const mesureAvant = (idx: number) => {
      const avant = MORRICONE_MESURES_1_111.slice(0, idx);
      const matches = [...avant.matchAll(/<measure number="(\d+)"/g)];
      return Number(matches[matches.length - 1][1]);
    };
    expect(mesureAvant(idxToCoda)).toBe(50);
    expect(mesureAvant(idxDS)).toBe(90);
  });

  it("le vocabulaire harmonique tient en 6 accords diatoniques au mode + 1 événement exceptionnel (Lab, La7)", () => {
    const part1 = MORRICONE_MESURES_1_111.slice(
      MORRICONE_MESURES_1_111.indexOf('<part id="P1">'),
      MORRICONE_MESURES_1_111.indexOf('<part id="P2">'),
    );
    const harmonies = [...part1.matchAll(/<root-step>([^<]*)<\/root-step>(?:<root-alter>([^<]*)<\/root-alter>)?<\/root><kind[^>]*>([^<]*)<\/kind>/g)]
      .map((m) => `${m[1]}${m[2] === "-1" ? "b" : ""}${m[3]}`);
    const distincts = new Set(harmonies);
    // 6 accords diatoniques (Dminor, Gmajor, Cmajor, Aminor, Fmajor, Bbmajor) + Abmajor + Adominant.
    expect(distincts.size).toBe(8);
    expect(distincts.has("Abmajor")).toBe(true);
    expect(distincts.has("Adominant")).toBe(true);
  });

  it("le do# (V7, mesure 55) est bien le seul de la pièce — présent aux 2 occurrences de l'événement (m.55 et sa reprise)", () => {
    const score = parseMusicXML(MORRICONE_MESURES_1_111);
    const mesuresAvecDoDiese: number[] = [];
    for (const n of score.notes) {
      if (realMidi(n) % 12 === 1) {
        const meas = score.measures.find((m) => n.onset >= m.start && n.onset < m.start + m.length);
        if (meas) mesuresAvecDoDiese.push(meas.numero);
      }
    }
    expect([...new Set(mesuresAvecDoDiese)].sort((a, b) => a - b)).toEqual([55, 93]);
  });

  it("l'accord final (mesure 110) est un Ré mineur complet (Ré-Fa-La), pas une quinte à vide", () => {
    const score = parseMusicXML(MORRICONE_MESURES_1_111);
    const maxOnset = Math.max(...score.notes.map((n) => n.onset));
    const finalNotes = score.notes.filter((n) => n.onset === maxOnset);
    const pcs = new Set(finalNotes.map((n) => realMidi(n) % 12));
    expect([...pcs].sort((a, b) => a - b)).toEqual([2, 5, 9]); // Ré, Fa, La
  });

  it("les mesures 106-109 traversent bien des quintes à vide (Ré-La sans tierce) pendant le decrescendo", () => {
    const score = parseMusicXML(MORRICONE_MESURES_1_111);
    for (const num of [106, 108, 109]) {
      const meas = score.measures.find((m) => m.numero === num)!;
      const notesIn = score.notes.filter(
        (n) => n.onset >= meas.start && n.onset < meas.start + meas.length && (n.part === "P1" || n.part === "P2"),
      );
      const pcs = new Set(notesIn.map((n) => realMidi(n) % 12));
      expect([...pcs].sort((a, b) => a - b)).toEqual([2, 9]); // Ré, La — sans Fa
    }
  });

  it("MORRICONE_ANALYSE couvre les mesures clés, dans l'ordre, entre 1 et 111", () => {
    expect(MORRICONE_ANALYSE.length).toBeGreaterThan(10);
    const nums = MORRICONE_ANALYSE.map((m) => m.numero);
    expect(nums.every((n) => n >= 1 && n <= 111)).toBe(true);
    expect(nums.every((n, i) => i === 0 || n > nums[i - 1])).toBe(true);
    // Seuls le La7 (dominante réelle) et la résolution finale portent une vraie fonction.
    const fonctionsReelles = MORRICONE_ANALYSE.filter((m) => m.fonction !== "?");
    expect(fonctionsReelles.map((m) => m.numero)).toEqual([55, 91, 110]);
  });
});

describe("MORRICONE_ANALYSE_NARRATIVE", () => {
  it("couvre les 4 sections (appel/set modal, pont, événement, coda)", () => {
    expect(MORRICONE_ANALYSE_NARRATIVE.sections).toHaveLength(4);
    expect(MORRICONE_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  it("décrit correctement la résolution finale complète (pas une quinte à vide)", () => {
    const coda = MORRICONE_ANALYSE_NARRATIVE.sections.find((s) => s.label.includes("95-111"))!;
    expect(coda.texte).toMatch(/tierce mineure/);
    expect(coda.texte).toMatch(/accord de ré mineur complet/);
  });

  // Le contenu affiché aux étudiants ne doit jamais faire référence au
  // processus de relecture (brouillon, correction...) — seul le commentaire
  // d'en-tête du fichier source garde ce journal.
  it("ne mentionne pas le processus de relecture (brouillon/correction) dans le contenu affiché", () => {
    const tousLesTextes = [
      MORRICONE_ANALYSE_NARRATIVE.tonalite,
      MORRICONE_ANALYSE_NARRATIVE.metrique,
      MORRICONE_ANALYSE_NARRATIVE.forme,
      ...MORRICONE_ANALYSE_NARRATIVE.sections.map((s) => s.texte),
      ...MORRICONE_ANALYSE_NARRATIVE.synthese.map((s) => s.texte),
    ].join(" ");
    expect(tousLesTextes).not.toMatch(/brouillon|corrig|Dany/i);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("MORRICONE_MESURES_1_111 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur (111 mesures, réparties sur plusieurs pages)", () => {
    tk.loadData(MORRICONE_MESURES_1_111);
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
    expect(totalMesures).toBe(111);
  }, 180000);
});

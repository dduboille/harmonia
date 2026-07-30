import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  PASTICHE_CLASSIQUE_MESURES_1_8,
  PASTICHE_CLASSIQUE_ANALYSE,
  PASTICHE_CLASSIQUE_ANALYSE_NARRATIVE,
} from "./conservatoire-pastiche-classique";

// Vérifie l'exercice de pastiche classique COMPOSÉ par l'assistant (seul cas de ce
// chantier où la pièce n'est pas fournie par Dany, mais générée depuis le plan
// qu'il a approuvé le 2026-07-30 : "c'est parfait") : période classique en Do
// majeur, 8 mesures, antécédent (demi-cadence) + conséquent (cadence parfaite).
const PC_NAMES = ["Do","Do#","Ré","Mib","Mi","Fa","Fa#","Sol","Sol#","La","Sib","Si"];

function pcsMesure(score: ReturnType<typeof parseMusicXML>, num: number) {
  const meas = score.measures.find((m) => m.numero === num)!;
  const notes = score.notes.filter((n) => n.onset >= meas.start && n.onset < meas.start + meas.length);
  return new Set(notes.map((n) => PC_NAMES[n.midi % 12]));
}

describe("PASTICHE_CLASSIQUE_MESURES_1_8", () => {
  it("s'analyse sans erreur : 8 mesures en Do majeur, 4/4, tempo 96", () => {
    const score = parseMusicXML(PASTICHE_CLASSIQUE_MESURES_1_8);
    expect(score.fifths).toBe(0);
    expect(score.mode).toBe("major");
    expect(score.signature).toBe("4/4");
    expect(score.measures).toHaveLength(8);
    expect(score.tempos[0]).toEqual({ onset: 0, bpm: 96 });
  });

  it("l'antécédent (m.1-4) déroule I-IV-V puis une demi-cadence tenue sur V", () => {
    const score = parseMusicXML(PASTICHE_CLASSIQUE_MESURES_1_8);
    expect([...pcsMesure(score, 1)].sort()).toEqual(["Do", "Mi", "Sol"].sort());
    expect([...pcsMesure(score, 2)].sort()).toEqual(["Do", "Fa", "La", "Mi", "Ré", "Sol"].sort());
    expect([...pcsMesure(score, 3)].sort()).toEqual(["Do", "Ré", "La", "Si", "Sol"].sort());
    expect([...pcsMesure(score, 4)].sort()).toEqual(["Ré", "Sol"].sort());
  });

  it("le conséquent (m.5-8) reprend l'ouverture, passe par le ii, puis referme sur une cadence parfaite V7-I", () => {
    const score = parseMusicXML(PASTICHE_CLASSIQUE_MESURES_1_8);
    // m.5 identique à m.1 (reprise exacte, carrure 4+4)
    expect([...pcsMesure(score, 5)].sort()).toEqual([...pcsMesure(score, 1)].sort());
    // m.6 : ii réel (Ré-Fa-La), pas la faute de frappe "La-Fa-Do" du brouillon initial
    expect([...pcsMesure(score, 6)].sort()).toEqual(["Ré", "Fa", "La"].sort());
    // m.7 : V7 complet (Sol-Si-Ré-Fa)
    expect([...pcsMesure(score, 7)].sort()).toEqual(["Sol", "Si", "Ré", "Fa"].sort());
    // m.8 : résolution complète sur la tonique seule
    expect([...pcsMesure(score, 8)]).toEqual(["Do"]);
  });

  it("PASTICHE_CLASSIQUE_ANALYSE couvre les 8 mesures dans l'ordre", () => {
    expect(PASTICHE_CLASSIQUE_ANALYSE).toHaveLength(8);
    const nums = PASTICHE_CLASSIQUE_ANALYSE.map((m) => m.numero);
    expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});

describe("PASTICHE_CLASSIQUE_ANALYSE_NARRATIVE", () => {
  it("couvre les 3 sections (antécédent, conséquent, basse d'Alberti)", () => {
    expect(PASTICHE_CLASSIQUE_ANALYSE_NARRATIVE.sections).toHaveLength(3);
    expect(PASTICHE_CLASSIQUE_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  it("ne mentionne pas le processus de conception (brouillon/plan/Dany) dans le contenu affiché", () => {
    const tousLesTextes = [
      PASTICHE_CLASSIQUE_ANALYSE_NARRATIVE.tonalite,
      PASTICHE_CLASSIQUE_ANALYSE_NARRATIVE.metrique,
      PASTICHE_CLASSIQUE_ANALYSE_NARRATIVE.forme,
      ...PASTICHE_CLASSIQUE_ANALYSE_NARRATIVE.sections.map((s) => s.texte),
      ...PASTICHE_CLASSIQUE_ANALYSE_NARRATIVE.synthese.map((s) => s.texte),
    ].join(" ");
    expect(tousLesTextes).not.toMatch(/brouillon|corrig[ée]|Dany/i);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("PASTICHE_CLASSIQUE_MESURES_1_8 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur (8 mesures, 53 notes)", () => {
    tk.loadData(PASTICHE_CLASSIQUE_MESURES_1_8);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2000 });
    const pageCount = tk.getPageCount();
    let totalMesures = 0;
    let totalNotes = 0;
    for (let p = 1; p <= pageCount; p++) {
      const svg: string = tk.renderToSVG(p);
      totalNotes += [...svg.matchAll(/<g id="([^"]+)" class="note"/g)].length;
      totalMesures += [...svg.matchAll(/<g[^>]*class="measure"[^>]*>/g)].length;
    }
    expect(totalMesures).toBe(8);
    expect(totalNotes).toBe(53);
  }, 30000);
});

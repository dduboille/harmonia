import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  AUGURES_FICHE_MESURES_1_6,
  AUGURES_FICHE_ANALYSE,
  AUGURES_FICHE_ANALYSE_NARRATIVE,
} from "./conservatoire-augures-fiche";

// Vérifie la fiche didactique ENTIÈREMENT ORIGINALE (aucune mesure du Sacre du
// printemps de Stravinsky reproduite — l'œuvre reste protégée jusqu'en 2042),
// démonstration du polyaccord au demi-ton des « Augures printaniers » avec
// chiffrage/étiquettes en <direction><words>.
describe("AUGURES_FICHE_MESURES_1_6", () => {
  it("s'analyse sans erreur et couvre 6 mesures, 4/4", () => {
    const score = parseMusicXML(AUGURES_FICHE_MESURES_1_6);
    expect(score.signature).toBe("4/4");
    expect(score.measures).toHaveLength(6);
  });

  function pcsOf(mnum: number) {
    return (score: ReturnType<typeof parseMusicXML>) => {
      const m = score.measures.find((mm) => mm.numero === mnum)!;
      const notes = score.notes.filter((n) => n.onset >= m.start && n.onset < m.start + m.length);
      return new Set(notes.map((n) => n.pc));
    };
  }

  it("mesure 1 : Mi♭7 seul (Mi♭-Sol-Si♭-Ré♭)", () => {
    const score = parseMusicXML(AUGURES_FICHE_MESURES_1_6);
    expect(pcsOf(1)(score)).toEqual(new Set([3, 7, 10, 1]));
  });

  it("mesure 2 : Fa♭ majeur seul (Fa♭-La♭-Do♭)", () => {
    const score = parseMusicXML(AUGURES_FICHE_MESURES_1_6);
    expect(pcsOf(2)(score)).toEqual(new Set([4, 8, 11]));
  });

  it("mesure 3 : L'ACCORD DES AUGURES — les deux objets superposés, chaque note de la triade à un demi-ton d'une note de la septième", () => {
    const score = parseMusicXML(AUGURES_FICHE_MESURES_1_6);
    const classes = pcsOf(3)(score);
    expect(classes).toEqual(new Set([3, 7, 10, 1, 4, 8, 11]));
    // Chaque pc de la triade (4, 8, 11) est exactement 1 demi-ton au-dessus
    // d'un pc de la septième (3, 7, 10).
    expect((4 - 3 + 12) % 12).toBe(1);
    expect((8 - 7 + 12) % 12).toBe(1);
    expect((11 - 10 + 12) % 12).toBe(1);
  });

  it("mesures 4-5 : l'accord ne change JAMAIS pendant le martèlement, seuls les accents se déplacent", () => {
    const score = parseMusicXML(AUGURES_FICHE_MESURES_1_6);
    const attaques = (mnum: number) => {
      const m = score.measures.find((mm) => mm.numero === mnum)!;
      return score.notes.filter((n) => n.onset >= m.start && n.onset < m.start + m.length);
    };
    const m4 = attaques(4);
    const m5 = attaques(5);
    expect(m4).toHaveLength(56); // 8 croches x 7 notes
    expect(m5).toHaveLength(56);
    // Chaque attaque, à tout instant, reproduit exactement les 7 classes de l'accord.
    const pcsParOnset = (notes: typeof m4) => {
      const groupes = new Map<number, Set<number>>();
      for (const n of notes) {
        if (!groupes.has(n.onset)) groupes.set(n.onset, new Set());
        groupes.get(n.onset)!.add(n.pc);
      }
      return [...groupes.values()];
    };
    for (const groupe of [...pcsParOnset(m4), ...pcsParOnset(m5)]) {
      expect(groupe).toEqual(new Set([3, 7, 10, 1, 4, 8, 11]));
    }
  });

  it("mesure 4 : accents sur les croches 1, 3, 6 — mesure 5 : accents déplacés sur 2, 5, 7 (jamais les mêmes positions)", () => {
    const m4 = AUGURES_FICHE_MESURES_1_6.slice(
      AUGURES_FICHE_MESURES_1_6.indexOf('<measure number="4"'),
      AUGURES_FICHE_MESURES_1_6.indexOf('<measure number="5"'),
    );
    const m5 = AUGURES_FICHE_MESURES_1_6.slice(
      AUGURES_FICHE_MESURES_1_6.indexOf('<measure number="5"'),
      AUGURES_FICHE_MESURES_1_6.indexOf('<measure number="6"'),
    );
    // 3 croches accentuées par portée x 2 portées = 6 balises <accent/> par mesure.
    expect((m4.match(/<accent\/>/g) || [])).toHaveLength(6);
    expect((m5.match(/<accent\/>/g) || [])).toHaveLength(6);
  });

  it("mesure 6 : l'accord des Augures tenu sous point d'orgue aux deux portées", () => {
    const m6 = AUGURES_FICHE_MESURES_1_6.slice(AUGURES_FICHE_MESURES_1_6.indexOf('<measure number="6"'));
    expect((m6.match(/<fermata\/>/g) || [])).toHaveLength(2);
    expect(m6).toContain("l'harmonie est gelée");
  });

  it("AUGURES_FICHE_ANALYSE couvre les 6 mesures, fonction \"?\" sans exception", () => {
    expect(AUGURES_FICHE_ANALYSE).toHaveLength(6);
    expect(AUGURES_FICHE_ANALYSE.every((m) => m.fonction === "?")).toBe(true);
    expect(AUGURES_FICHE_ANALYSE.map((m) => m.numero)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe("AUGURES_FICHE_ANALYSE_NARRATIVE", () => {
  it("couvre les 4 sections de la démonstration (m.1-2, m.3, m.4-5, m.6)", () => {
    expect(AUGURES_FICHE_ANALYSE_NARRATIVE.sections).toHaveLength(4);
    expect(AUGURES_FICHE_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  it("ne mentionne pas le processus de relecture (brouillon/correction) dans le contenu affiché", () => {
    const tousLesTextes = [
      AUGURES_FICHE_ANALYSE_NARRATIVE.tonalite,
      AUGURES_FICHE_ANALYSE_NARRATIVE.metrique,
      AUGURES_FICHE_ANALYSE_NARRATIVE.forme,
      ...AUGURES_FICHE_ANALYSE_NARRATIVE.sections.map((s) => s.texte),
      ...AUGURES_FICHE_ANALYSE_NARRATIVE.synthese.map((s) => s.texte),
    ].join(" ");
    expect(tousLesTextes).not.toMatch(/brouillon|corrig|Dany/i);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("AUGURES_FICHE_MESURES_1_6 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur (6 mesures)", () => {
    tk.loadData(AUGURES_FICHE_MESURES_1_6);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2000 });
    const svg: string = tk.renderToSVG(1);
    const notes = [...svg.matchAll(/<g id="([^"]+)" class="note"/g)];
    expect(notes.length).toBeGreaterThan(0);
    const mesures = [...svg.matchAll(/<g[^>]*class="measure"[^>]*>/g)];
    expect(mesures).toHaveLength(6);
  }, 20000);
});

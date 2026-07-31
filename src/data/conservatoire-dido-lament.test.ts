import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  DIDO_LAMENT_MESURES_1_65,
  DIDO_LAMENT_ANALYSE,
  DIDO_LAMENT_ANALYSE_NARRATIVE,
} from "./conservatoire-dido-lament";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (fichier
// « dido-lament-annote.musicxml », arr. Connor Sannipoli) : Purcell, Dido's
// Lament (1689), 65 mesures. AUCUNE balise <harmony> dans ce fichier (une
// première dans le corpus) — le chiffrage de DIDO_LAMENT_ANALYSE est donc une
// lecture dérivée des hauteurs réelles, pas une vérification d'un chiffrage
// préexistant.
describe("DIDO_LAMENT_MESURES_1_65", () => {
  it("s'analyse sans erreur et couvre 65 mesures en 4/4, tempo Largo puis Adagio con moto", () => {
    const score = parseMusicXML(DIDO_LAMENT_MESURES_1_65);
    expect(score.fifths).toBe(0);
    expect(score.signature).toBe("4/4");
    expect(score.measures).toHaveLength(65);
    expect(score.tempos).toEqual([
      { onset: 0, bpm: 50 },
      { onset: 27648, bpm: 80 }, // 36 noires = 9 mesures de 4/4 : le changement tombe pile au début de la mesure 10
    ]);
  });

  it("score.mode infère 'major' — la pièce est réellement en SOL MINEUR (même limite que So What/Satin Doll/Jesu)", () => {
    const score = parseMusicXML(DIDO_LAMENT_MESURES_1_65);
    expect(score.mode).toBe("major");
  });

  it("838 notes retenues après fusion des liaisons (847 attaques hors silences/ornements, 6 liaisons fusionnées)", () => {
    const score = parseMusicXML(DIDO_LAMENT_MESURES_1_65);
    expect(score.notes).toHaveLength(838);
  });

  const bassePrincipale = (score: ReturnType<typeof parseMusicXML>, debut: number, fin: number) =>
    score.notes
      .filter((n) => n.measure >= debut && n.measure <= fin)
      .reduce((min, n) => (n.midi < min.midi ? n : min))
      .midi % 12;

  it("le ground (tétracorde chromatique Sol-Fa#-Fa-Mi-Mib-Ré) est identique aux 3 premiers passages (m.10-14, 15-19, 20-24)", () => {
    const score = parseMusicXML(DIDO_LAMENT_MESURES_1_65);
    // Classe de hauteur (pc) de la voix 5/6 (la ligne du ground), mesure par mesure,
    // pour les 3 premiers passages — Sol=7.
    const pcGround = (debut: number) =>
      [0, 1, 2, 3, 4].map((offset) => {
        const m = debut + offset;
        const notesGround = score.notes.filter(
          (n) => n.measure === m && (n.voice === "5" || n.voice === "6")
        );
        // la 1re attaque de la mesure porte la note structurelle du ground
        const premiere = notesGround.sort((a, b) => a.onset - b.onset)[0];
        return premiere?.pc;
      });
    expect(pcGround(10)).toEqual(pcGround(15));
    expect(pcGround(15)).toEqual(pcGround(20));
  });

  it("mesure 65 (accord final) : Sol-Ré uniquement — SANS TIERCE (ni Sib ni Si)", () => {
    const score = parseMusicXML(DIDO_LAMENT_MESURES_1_65);
    const m65 = score.measures.find((m) => m.numero === 65)!;
    const notes = score.notes.filter((n) => n.onset >= m65.start && n.onset < m65.start + m65.length);
    const classes = new Set(notes.map((n) => n.pc));
    expect(classes.has(7)).toBe(true); // Sol
    expect(classes.has(2)).toBe(true); // Ré
    expect(classes.has(10)).toBe(false); // Sib (tierce mineure)
    expect(classes.has(11)).toBe(false); // Si (tierce majeure)
  });

  it("mesure 1 : Do-Mib-Sol (i, ut mineur)", () => {
    const score = parseMusicXML(DIDO_LAMENT_MESURES_1_65);
    const m1 = score.measures.find((m) => m.numero === 1)!;
    const classes = new Set(
      score.notes.filter((n) => n.onset >= m1.start && n.onset < m1.start + m1.length).map((n) => n.pc)
    );
    expect(classes.has(0)).toBe(true); // Do
    expect(classes.has(3)).toBe(true); // Mib
    expect(classes.has(7)).toBe(true); // Sol
  });

  it("les repères de structure de Dany sont bien présents dans le fichier (<direction><words>)", () => {
    expect(DIDO_LAMENT_MESURES_1_65).toContain("RÉCITATIF");
    expect(DIDO_LAMENT_MESURES_1_65).toContain("Remember me");
    expect(DIDO_LAMENT_MESURES_1_65).toContain("il canto ben marcato");
    expect(DIDO_LAMENT_MESURES_1_65).toContain("ground final");
  });

  it("DIDO_LAMENT_ANALYSE : repères croissants, tous dans [1, 65]", () => {
    const nums = DIDO_LAMENT_ANALYSE.map((m) => m.numero);
    expect(nums).toEqual([...nums].sort((a, b) => a - b));
    for (const n of nums) {
      expect(n).toBeGreaterThanOrEqual(1);
      expect(n).toBeLessThanOrEqual(65);
    }
  });
});

describe("DIDO_LAMENT_ANALYSE_NARRATIVE", () => {
  it("couvre les 7 sections (récitatif + 5 groupes de grounds + ground final)", () => {
    expect(DIDO_LAMENT_ANALYSE_NARRATIVE.sections).toHaveLength(7);
    expect(DIDO_LAMENT_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  // Le contenu affiché aux étudiants ne doit jamais faire référence au
  // processus de relecture (brouillon, correction...) — seul le commentaire
  // d'en-tête du fichier source garde ce journal.
  it("ne mentionne pas le processus de relecture (brouillon/correction) dans le contenu affiché", () => {
    const tousLesTextes = [
      DIDO_LAMENT_ANALYSE_NARRATIVE.tonalite,
      DIDO_LAMENT_ANALYSE_NARRATIVE.metrique,
      DIDO_LAMENT_ANALYSE_NARRATIVE.forme,
      ...DIDO_LAMENT_ANALYSE_NARRATIVE.sections.map((s) => s.texte),
      ...DIDO_LAMENT_ANALYSE_NARRATIVE.synthese.map((s) => s.texte),
    ].join(" ");
    expect(tousLesTextes).not.toMatch(/brouillon|corrig|Dany/i);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("DIDO_LAMENT_MESURES_1_65 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur (65 mesures, réparties sur plusieurs pages)", () => {
    tk.loadData(DIDO_LAMENT_MESURES_1_65);
    tk.renderToMIDI();
    tk.setOptions({ scale: 30, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 3000 });
    const pageCount = tk.getPageCount();
    let totalMesures = 0;
    let totalNotes = 0;
    for (let p = 1; p <= pageCount; p++) {
      const svg: string = tk.renderToSVG(p);
      totalNotes += [...svg.matchAll(/<g id="([^"]+)" class="note"/g)].length;
      totalMesures += [...svg.matchAll(/<g[^>]*class="measure"[^>]*>/g)].length;
    }
    expect(totalNotes).toBeGreaterThan(0);
    expect(totalMesures).toBe(65);
  });

  it("le surlignage Verovio avance de ~1200ms par mesure pendant le récitatif (Largo, 50bpm, 4/4)", async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
    const frais: any = new VerovioToolkit(await creerModule());
    frais.loadData(DIDO_LAMENT_MESURES_1_65);
    frais.renderToMIDI();
    frais.setOptions({ scale: 30, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 3000 });
    frais.renderToSVG(1);

    let lastId: string | undefined;
    const ecarts: number[] = [];
    let lastMs = 0;
    // Le récitatif (m.1-9) dure 9 mesures à 50bpm : (4/50)*60000 = 4800ms/mesure,
    // soit ~43200ms — on échantillonne large mais on s'arrête bien avant le
    // changement de tempo de la mesure 10 pour ne mesurer QUE le Largo.
    for (let ms = 0; ms <= 40000; ms += 25) {
      const els = frais.getElementsAtTime(ms);
      const id = els.measure;
      if (id && id !== lastId) {
        if (lastId !== undefined) ecarts.push(ms - lastMs);
        lastId = id;
        lastMs = ms;
      }
    }
    expect(ecarts.length).toBeGreaterThanOrEqual(5);
    for (const e of ecarts) expect(e).toBeCloseTo((4 / 50) * 60000, -2);
  }, 20000);
});

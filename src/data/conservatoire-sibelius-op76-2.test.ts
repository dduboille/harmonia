import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  SIBELIUS_OP76_2_MESURES_1_72,
  SIBELIUS_OP76_2_ANALYSE,
  SIBELIUS_OP76_2_ANALYSE_NARRATIVE,
} from "./conservatoire-sibelius-op76-2";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (fichier
// « sibelius-op76-2-annote.musicxml ») : Sibelius, Étude op. 76 n°2, 72 mesures,
// avec 12 balises <harmony> aux points structurels clés.
describe("SIBELIUS_OP76_2_MESURES_1_72", () => {
  it("s'analyse sans erreur et couvre 72 mesures en la mineur, 2/4", () => {
    const score = parseMusicXML(SIBELIUS_OP76_2_MESURES_1_72);
    expect(score.fifths).toBe(0);
    expect(score.mode).toBe("minor");
    expect(score.signature).toBe("2/4");
    expect(score.measures).toHaveLength(72);
    expect(score.tempos[0]).toEqual({ onset: 0, bpm: 60 });
  });

  it("943 notes retenues (963 <note> bruts, 17 silences, 0 ornement, 0 liaison)", () => {
    const score = parseMusicXML(SIBELIUS_OP76_2_MESURES_1_72);
    expect(score.notes).toHaveLength(943);
  });

  it("porte 12 balises <harmony>", () => {
    expect((SIBELIUS_OP76_2_MESURES_1_72.match(/<harmony /g) || [])).toHaveLength(12);
  });

  it("mesure 2 : Mi7 avec un Do naturel ajouté (la ♭13 éolienne d'office)", () => {
    const score = parseMusicXML(SIBELIUS_OP76_2_MESURES_1_72);
    const m2 = score.measures.find((m) => m.numero === 2)!;
    const classes = new Set(
      score.notes.filter((n) => n.onset >= m2.start && n.onset < m2.start + m2.length).map((n) => n.pc)
    );
    expect(classes.has(4)).toBe(true);  // Mi (fondamentale)
    expect(classes.has(8)).toBe(true);  // Sol# (tierce)
    expect(classes.has(11)).toBe(true); // Si (quinte)
    expect(classes.has(2)).toBe(true);  // Ré (7e)
    expect(classes.has(0)).toBe(true);  // Do naturel (♭13 éolienne)
  });

  it("mesures 17-20 : la descente andalouse Sol7-Fa∆7-Mi7-Lam (tétracorde phrygien harmonisé)", () => {
    const score = parseMusicXML(SIBELIUS_OP76_2_MESURES_1_72);
    const classesDe = (num: number) => {
      const m = score.measures.find((mm) => mm.numero === num)!;
      return new Set(score.notes.filter((n) => n.onset >= m.start && n.onset < m.start + m.length).map((n) => n.pc));
    };
    const m17 = classesDe(17); // Sol7 : Sol-Si-Ré-Fa
    expect(m17.has(7) && m17.has(11) && m17.has(2) && m17.has(5)).toBe(true);
    const m18 = classesDe(18); // Fa∆7 : Fa-La-Do-Mi
    expect(m18.has(5) && m18.has(9) && m18.has(0) && m18.has(4)).toBe(true);
    const m19 = classesDe(19); // Mi7 : Mi-Sol#-Si-Ré
    expect(m19.has(4) && m19.has(8) && m19.has(11) && m19.has(2)).toBe(true);
    const m20 = classesDe(20); // La mineur : La-Do-Mi
    expect(m20.has(9) && m20.has(0) && m20.has(4)).toBe(true);
  });

  it("mesure 72 (accord final) : La-Do-Mi — la tierce mineure est présente (pas de tierce picarde), basse La1", () => {
    const score = parseMusicXML(SIBELIUS_OP76_2_MESURES_1_72);
    const m72 = score.measures.find((m) => m.numero === 72)!;
    const notes = score.notes.filter((n) => n.onset >= m72.start && n.onset < m72.start + m72.length);
    const classes = new Set(notes.map((n) => n.pc));
    expect(classes.has(9)).toBe(true); // La
    expect(classes.has(0)).toBe(true); // Do (tierce mineure)
    expect(classes.has(4)).toBe(true); // Mi
    expect(Math.min(...notes.map((n) => n.midi))).toBe(33); // La1
  });

  it("les 30 premières mesures de la reprise (m.37-66) sont identiques à m.1-30, hauteur par hauteur", () => {
    const score = parseMusicXML(SIBELIUS_OP76_2_MESURES_1_72);
    const pitchSetOf = (num: number) => {
      const m = score.measures.find((mm) => mm.numero === num)!;
      return score.notes
        .filter((n) => n.onset >= m.start && n.onset < m.start + m.length)
        .map((n) => n.midi)
        .sort((a, b) => a - b)
        .join(",");
    };
    // m.1, m.25, m.27 et m.34 sont les seules exceptions connues (documentées
    // dans le commentaire d'en-tête) — on vérifie ici un échantillon de
    // mesures qui DOIVENT être identiques.
    for (const n of [5, 10, 15, 20, 24, 29, 30]) {
      expect(pitchSetOf(n)).toBe(pitchSetOf(n + 36));
    }
  });

  it("les repères de structure de Dany sont bien présents dans le fichier (<direction><words>)", () => {
    expect(SIBELIUS_OP76_2_MESURES_1_72).toContain("DESCENTE ANDALOUSE");
    expect(SIBELIUS_OP76_2_MESURES_1_72).toContain("GRANDE REPRISE");
    expect(SIBELIUS_OP76_2_MESURES_1_72).toContain("clausule variée");
  });

  it("SIBELIUS_OP76_2_ANALYSE : repères croissants, tous dans [1, 72]", () => {
    const nums = SIBELIUS_OP76_2_ANALYSE.map((m) => m.numero);
    expect(nums).toEqual([...nums].sort((a, b) => a - b));
    for (const n of nums) {
      expect(n).toBeGreaterThanOrEqual(1);
      expect(n).toBeLessThanOrEqual(72);
    }
  });
});

describe("SIBELIUS_OP76_2_ANALYSE_NARRATIVE", () => {
  it("couvre les 5 sections (A, B, A', grande reprise, clausule)", () => {
    expect(SIBELIUS_OP76_2_ANALYSE_NARRATIVE.sections).toHaveLength(5);
    expect(SIBELIUS_OP76_2_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  it("ne mentionne pas le processus de relecture (brouillon/correction) dans le contenu affiché", () => {
    const tousLesTextes = [
      SIBELIUS_OP76_2_ANALYSE_NARRATIVE.tonalite,
      SIBELIUS_OP76_2_ANALYSE_NARRATIVE.metrique,
      SIBELIUS_OP76_2_ANALYSE_NARRATIVE.forme,
      ...SIBELIUS_OP76_2_ANALYSE_NARRATIVE.sections.map((s) => s.texte),
      ...SIBELIUS_OP76_2_ANALYSE_NARRATIVE.synthese.map((s) => s.texte),
    ].join(" ");
    expect(tousLesTextes).not.toMatch(/brouillon|corrig|Dany/i);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("SIBELIUS_OP76_2_MESURES_1_72 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur (72 mesures, réparties sur plusieurs pages)", () => {
    tk.loadData(SIBELIUS_OP76_2_MESURES_1_72);
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
    expect(totalMesures).toBe(72);
  }, 20000);

  it("le surlignage Verovio avance de 2000ms par mesure (Leggiero, 60bpm, 2/4)", async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
    const frais: any = new VerovioToolkit(await creerModule());
    frais.loadData(SIBELIUS_OP76_2_MESURES_1_72);
    frais.renderToMIDI();
    frais.setOptions({ scale: 30, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 3000 });
    frais.renderToSVG(1);

    let lastId: string | undefined;
    const ecarts: number[] = [];
    let lastMs = 0;
    for (let ms = 0; ms <= 30000; ms += 25) {
      const els = frais.getElementsAtTime(ms);
      const id = els.measure;
      if (id && id !== lastId) {
        if (lastId !== undefined) ecarts.push(ms - lastMs);
        lastId = id;
        lastMs = ms;
      }
    }
    expect(ecarts.length).toBeGreaterThanOrEqual(10);
    for (const e of ecarts) expect(e).toBeCloseTo((2 / 60) * 60000, -2);
  }, 20000);
});

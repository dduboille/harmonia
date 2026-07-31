import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  BERLIOZ_MARCHE_MESURES_1_178,
  BERLIOZ_MARCHE_ANALYSE,
  BERLIOZ_MARCHE_ANALYSE_NARRATIVE,
} from "./conservatoire-berlioz-marche";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (fichier
// « berlioz-marche-annote.musicxml ») : Berlioz, Marche au supplice (arr. trio à
// cordes), 178 mesures, avec 3 balises <harmony> aux points structurels clés.
describe("BERLIOZ_MARCHE_MESURES_1_178", () => {
  it("s'analyse sans erreur et couvre 178 mesures en sol mineur, 4/4", () => {
    const score = parseMusicXML(BERLIOZ_MARCHE_MESURES_1_178);
    expect(score.fifths).toBe(-2);
    expect(score.mode).toBe("minor");
    expect(score.signature).toBe("4/4");
    expect(score.measures).toHaveLength(178);
    expect(score.tempos[0]).toEqual({ onset: 0, bpm: 144 });
  });

  it("2567 notes retenues (3067 <note> bruts, 396 silences, 89 notes d'ornement, 15 liaisons fusionnées)", () => {
    const score = parseMusicXML(BERLIOZ_MARCHE_MESURES_1_178);
    expect(score.notes).toHaveLength(2567);
  });

  it("porte 3 balises <harmony>", () => {
    expect((BERLIOZ_MARCHE_MESURES_1_178.match(/<harmony /g) || [])).toHaveLength(3);
  });

  it("mesure 1 : le drone Sol-Si♭ (introduction pp), aucune autre classe de hauteur", () => {
    const score = parseMusicXML(BERLIOZ_MARCHE_MESURES_1_178);
    const m1 = score.measures.find((m) => m.numero === 1)!;
    const classes = new Set(
      score.notes.filter((n) => n.onset >= m1.start && n.onset < m1.start + m1.length).map((n) => n.pc)
    );
    expect(classes).toEqual(new Set([7, 10])); // Sol, Si♭
  });

  it("mesures 17-20 : la gamme descendante de sol MINEUR NATUREL au violoncelle (P3), aucun Fa#", () => {
    const score = parseMusicXML(BERLIOZ_MARCHE_MESURES_1_178);
    const classes = new Set<number>();
    for (let mnum = 17; mnum <= 20; mnum++) {
      const m = score.measures.find((mm) => mm.numero === mnum)!;
      score.notes
        .filter((n) => n.part === "P3" && n.onset >= m.start && n.onset < m.start + m.length)
        .forEach((n) => classes.add(n.pc));
    }
    // Sol mineur naturel : Sol-La-Sib-Do-Ré-Mib-Fa (7,9,10,0,2,3,5)
    for (const pc of classes) expect([7, 9, 10, 0, 2, 3, 5]).toContain(pc);
    expect(classes.has(6)).toBe(false); // pas de Fa# (donc pas la forme harmonique)
  });

  it("mesures 62-63 : le champ diatonique de Si♭ majeur (thème 2), la triade Si♭-Ré-Fa incluse", () => {
    const score = parseMusicXML(BERLIOZ_MARCHE_MESURES_1_178);
    const classes = new Set<number>();
    for (const mnum of [62, 63]) {
      const m = score.measures.find((mm) => mm.numero === mnum)!;
      score.notes
        .filter((n) => n.onset >= m.start && n.onset < m.start + m.length)
        .forEach((n) => classes.add(n.pc));
    }
    expect(classes.has(10)).toBe(true); // Si♭
    expect(classes.has(2)).toBe(true);  // Ré
    expect(classes.has(5)).toBe(true);  // Fa
  });

  it("mesure 165 : silence total (aucune note dans aucune partie) — la seule mesure vide de toute la pièce", () => {
    const score = parseMusicXML(BERLIOZ_MARCHE_MESURES_1_178);
    const m165 = score.measures.find((m) => m.numero === 165)!;
    const notes = score.notes.filter((n) => n.onset >= m165.start && n.onset < m165.start + m165.length);
    expect(notes).toHaveLength(0);
  });

  it("mesure 169 (LE COUPERET) : violon Sol4→Sol3 et violoncelle Sol3→Sol2, synchronisés", () => {
    const score = parseMusicXML(BERLIOZ_MARCHE_MESURES_1_178);
    const m169 = score.measures.find((m) => m.numero === 169)!;
    const at = (rel: number, part: string) =>
      score.notes.filter((n) => n.onset === m169.start + rel && n.part === part).map((n) => n.midi);
    // temps 3 (onset relatif 1536) : Sol4 (violon), Sol3 (violoncelle)
    expect(at(1536, "P1")).toContain(67); // G4
    expect(at(1536, "P3")).toContain(55); // G3
    // temps 4 (onset relatif 2304) : Sol3 (violon), Sol2 (violoncelle) — chute d'une octave
    expect(at(2304, "P1")).toContain(55); // G3
    expect(at(2304, "P3")).toContain(43); // G2
  });

  it("mesures 170 à 176 : Sol majeur complet (Ré-Sol-Si♮) sans exception", () => {
    const score = parseMusicXML(BERLIOZ_MARCHE_MESURES_1_178);
    for (let mnum = 170; mnum <= 176; mnum++) {
      const m = score.measures.find((mm) => mm.numero === mnum)!;
      const classes = new Set(
        score.notes.filter((n) => n.onset >= m.start && n.onset < m.start + m.length).map((n) => n.pc)
      );
      expect(classes).toEqual(new Set([2, 7, 11])); // Ré, Sol, Si
    }
  });

  it("mesure 178 (accord final) : Sol majeur étalé sur ~4 octaves (Sol2 à Sol6), sous point d'orgue", () => {
    const score = parseMusicXML(BERLIOZ_MARCHE_MESURES_1_178);
    const m178 = score.measures.find((m) => m.numero === 178)!;
    const notes = score.notes.filter((n) => n.onset >= m178.start && n.onset < m178.start + m178.length);
    const classes = new Set(notes.map((n) => n.pc));
    expect(classes).toEqual(new Set([2, 7, 11]));
    expect(Math.min(...notes.map((n) => n.midi))).toBe(43); // Sol2
    expect(Math.max(...notes.map((n) => n.midi))).toBe(91); // Sol6
  });

  it("les repères de structure de Dany sont bien présents dans le fichier (<direction><words>)", () => {
    expect(BERLIOZ_MARCHE_MESURES_1_178).toContain("THÈME 1");
    expect(BERLIOZ_MARCHE_MESURES_1_178).toContain("THÈME 2");
    expect(BERLIOZ_MARCHE_MESURES_1_178).toContain("L'IDÉE FIXE");
    expect(BERLIOZ_MARCHE_MESURES_1_178).toContain("LE COUPERET");
    expect(BERLIOZ_MARCHE_MESURES_1_178).toContain("SOL MAJEUR");
    expect(BERLIOZ_MARCHE_MESURES_1_178).toContain("horn call");
  });

  it("BERLIOZ_MARCHE_ANALYSE : repères croissants, tous dans [1, 178]", () => {
    const nums = BERLIOZ_MARCHE_ANALYSE.map((m) => m.numero);
    expect(nums).toEqual([...nums].sort((a, b) => a - b));
    for (const n of nums) {
      expect(n).toBeGreaterThanOrEqual(1);
      expect(n).toBeLessThanOrEqual(178);
    }
  });
});

describe("BERLIOZ_MARCHE_ANALYSE_NARRATIVE", () => {
  it("couvre les 6 sections (introduction, thème1, thème2, développement, idée fixe/couperet, sol majeur)", () => {
    expect(BERLIOZ_MARCHE_ANALYSE_NARRATIVE.sections).toHaveLength(6);
    expect(BERLIOZ_MARCHE_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  it("ne mentionne pas le processus de relecture (brouillon/correction) dans le contenu affiché", () => {
    const tousLesTextes = [
      BERLIOZ_MARCHE_ANALYSE_NARRATIVE.tonalite,
      BERLIOZ_MARCHE_ANALYSE_NARRATIVE.metrique,
      BERLIOZ_MARCHE_ANALYSE_NARRATIVE.forme,
      ...BERLIOZ_MARCHE_ANALYSE_NARRATIVE.sections.map((s) => s.texte),
      ...BERLIOZ_MARCHE_ANALYSE_NARRATIVE.synthese.map((s) => s.texte),
    ].join(" ");
    expect(tousLesTextes).not.toMatch(/brouillon|corrig|Dany/i);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("BERLIOZ_MARCHE_MESURES_1_178 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur (178 mesures, réparties sur plusieurs pages)", () => {
    tk.loadData(BERLIOZ_MARCHE_MESURES_1_178);
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
    expect(totalMesures).toBe(178);
  }, 20000);

  it("le surlignage Verovio avance de 1667ms par mesure au tempo initial (144bpm, 4/4)", async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
    const frais: any = new VerovioToolkit(await creerModule());
    frais.loadData(BERLIOZ_MARCHE_MESURES_1_178);
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
    for (const e of ecarts) expect(e).toBeCloseTo((4 / 144) * 60000, -2);
  }, 20000);
});

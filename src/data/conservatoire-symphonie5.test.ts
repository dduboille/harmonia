import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  SYMPHONIE5_MESURES_1_502,
  SYMPHONIE5_ANALYSE,
  SYMPHONIE5_ANALYSE_NARRATIVE,
} from "./conservatoire-symphonie5";

// Vérifie l'extrait rejoué contre le MusicXML fourni par Dany (fichier
// « symphonie5-annote.musicxml ») : Symphonie n°5 en do mineur, 1er mouvement
// (Beethoven), transcription intégrale pour piano d'Ernest Pauer (502 mesures).
// Seule déviation du verbatim, documentée : le texte « Re-vo-lu-tion » (ajout
// de l'uploader, ni Beethoven ni Pauer) retiré avant l'embed.
const PC_NAMES = ["Do","Do#","Ré","Mib","Mi","Fa","Fa#","Sol","Sol#","La","Sib","Si"];

function pcsMesure(score: ReturnType<typeof parseMusicXML>, num: number) {
  const meas = score.measures.find((m) => m.numero === num)!;
  const notes = score.notes.filter((n) => n.onset >= meas.start && n.onset < meas.start + meas.length);
  return new Set(notes.map((n) => PC_NAMES[n.midi % 12]));
}

describe("SYMPHONIE5_MESURES_1_502", () => {
  it("s'analyse sans erreur : 502 mesures en do mineur, 2/4", () => {
    const score = parseMusicXML(SYMPHONIE5_MESURES_1_502);
    expect(score.fifths).toBe(-3);
    expect(score.mode).toBe("minor");
    expect(score.signature).toBe("2/4");
    expect(score.measures).toHaveLength(502);
    expect(score.measures[0].numero).toBe(1);
    expect(score.measures[score.measures.length - 1].numero).toBe(502);
  });

  it("porte déjà les créateurs (Beethoven, Pauer) et le texte « Re-vo-lu-tion » a bien été retiré", () => {
    expect(SYMPHONIE5_MESURES_1_502).toContain("Ludwig van Beethoven");
    expect(SYMPHONIE5_MESURES_1_502).toContain("Ernest Pauer");
    expect(SYMPHONIE5_MESURES_1_502).not.toContain("Re-vo-lu-tion");
  });

  it("le motto (m.1-5) est un unisson pur : aucun accord (une seule classe de hauteur par mesure)", () => {
    const score = parseMusicXML(SYMPHONIE5_MESURES_1_502);
    expect([...pcsMesure(score, 1)]).toEqual(["Sol"]);
    expect([...pcsMesure(score, 2)]).toEqual(["Mib"]);
    expect([...pcsMesure(score, 3)]).toEqual(["Fa"]);
  });

  it("les points d'orgue jumeaux du motto sont exactement aux mesures 2 et 5, pas 2 et 4 (asymétrie réelle)", () => {
    const extraireFermatas = (num: number) => {
      const s = SYMPHONIE5_MESURES_1_502.slice(
        SYMPHONIE5_MESURES_1_502.indexOf(`<measure number="${num}"`),
        SYMPHONIE5_MESURES_1_502.indexOf(`<measure number="${num + 1}"`),
      );
      return (s.match(/<fermata/g) ?? []).length;
    };
    expect(extraireFermatas(2)).toBeGreaterThan(0);
    expect(extraireFermatas(4)).toBe(0);
    expect(extraireFermatas(5)).toBeGreaterThan(0);
  });

  it("l'appel de cor (m.59-62) est exactement Sib-Sib-Sib-Mib puis Fa puis Sib", () => {
    const score = parseMusicXML(SYMPHONIE5_MESURES_1_502);
    expect([...pcsMesure(score, 59)]).toEqual(["Sib"]);
    expect([...pcsMesure(score, 60)]).toEqual(["Mib"]);
    expect([...pcsMesure(score, 61)]).toEqual(["Fa"]);
    expect([...pcsMesure(score, 62)]).toEqual(["Sib"]);
  });

  it("la barre de fin d'exposition (reprise) est exactement à la mesure 124", () => {
    const meas124 = SYMPHONIE5_MESURES_1_502.slice(
      SYMPHONIE5_MESURES_1_502.indexOf('<measure number="124"'),
      SYMPHONIE5_MESURES_1_502.indexOf('<measure number="125"'),
    );
    expect(meas124).toContain('<repeat direction="backward"');
  });

  it("le développement (m.200-235) traverse bien une zone de raréfaction (peu de notes, dynamique p/pp) avant de rallumer vers la réexposition", () => {
    const score = parseMusicXML(SYMPHONIE5_MESURES_1_502);
    for (const num of [200, 215, 230, 235]) {
      const meas = score.measures.find((m) => m.numero === num)!;
      const notes = score.notes.filter((n) => n.onset >= meas.start && n.onset < meas.start + meas.length);
      expect(notes.length).toBeLessThanOrEqual(6);
    }
    const meas245 = score.measures.find((m) => m.numero === 245)!;
    const notes245 = score.notes.filter((n) => n.onset >= meas245.start && n.onset < meas245.start + meas245.length);
    expect(notes245.length).toBeGreaterThan(10);
  });

  it("l'Adagio (mesure 268) est bien annoté dans le fichier lui-même", () => {
    const meas268 = SYMPHONIE5_MESURES_1_502.slice(
      SYMPHONIE5_MESURES_1_502.indexOf('<measure number="268"'),
      SYMPHONIE5_MESURES_1_502.indexOf('<measure number="269"'),
    );
    expect(meas268).toContain("Adagio");
  });

  it("le 2e thème de la réexposition revient bien en Do majeur (Si naturel ET Mi naturel présents)", () => {
    const score = parseMusicXML(SYMPHONIE5_MESURES_1_502);
    let siTrouve = false;
    let miTrouve = false;
    for (let num = 300; num <= 330; num++) {
      const pcs = pcsMesure(score, num);
      if (pcs.has("Si")) siTrouve = true;
      if (pcs.has("Mi")) miTrouve = true;
    }
    expect(siTrouve).toBe(true);
    expect(miTrouve).toBe(true);
  });

  it("l'accord final (mesure 502) est Do mineur strict, sans tierce picarde (aucun Mi naturel)", () => {
    const score = parseMusicXML(SYMPHONIE5_MESURES_1_502);
    const pcs = pcsMesure(score, 502);
    expect(pcs.has("Do")).toBe(true);
    expect(pcs.has("Mib")).toBe(true);
    expect(pcs.has("Mi")).toBe(false);
  });

  it("SYMPHONIE5_ANALYSE couvre les mesures clés, dans l'ordre, entre 1 et 502", () => {
    expect(SYMPHONIE5_ANALYSE.length).toBeGreaterThan(10);
    const nums = SYMPHONIE5_ANALYSE.map((m) => m.numero);
    expect(nums.every((n) => n >= 1 && n <= 502)).toBe(true);
    expect(nums.every((n, i) => i === 0 || n > nums[i - 1])).toBe(true);
  });
});

describe("SYMPHONIE5_ANALYSE_NARRATIVE", () => {
  it("couvre les 5 sections (motto, exposition, développement, réexposition, coda)", () => {
    expect(SYMPHONIE5_ANALYSE_NARRATIVE.sections).toHaveLength(5);
    expect(SYMPHONIE5_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  // Le contenu affiché aux étudiants ne doit jamais faire référence au
  // processus de relecture (brouillon, correction...) — seul le commentaire
  // d'en-tête du fichier source garde ce journal.
  it("ne mentionne pas le processus de relecture (brouillon/correction) dans le contenu affiché", () => {
    const tousLesTextes = [
      SYMPHONIE5_ANALYSE_NARRATIVE.tonalite,
      SYMPHONIE5_ANALYSE_NARRATIVE.metrique,
      SYMPHONIE5_ANALYSE_NARRATIVE.forme,
      ...SYMPHONIE5_ANALYSE_NARRATIVE.sections.map((s) => s.texte),
      ...SYMPHONIE5_ANALYSE_NARRATIVE.synthese.map((s) => s.texte),
    ].join(" ");
    expect(tousLesTextes).not.toMatch(/brouillon|corrig|Dany/i);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("SYMPHONIE5_MESURES_1_502 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur (502 mesures, réparties sur plusieurs pages)", () => {
    tk.loadData(SYMPHONIE5_MESURES_1_502);
    tk.renderToMIDI();
    tk.setOptions({ scale: 15, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 3000 });
    const pageCount = tk.getPageCount();
    let totalMesures = 0;
    let totalNotes = 0;
    for (let p = 1; p <= pageCount; p++) {
      const svg: string = tk.renderToSVG(p);
      totalNotes += [...svg.matchAll(/<g id="([^"]+)" class="note"/g)].length;
      totalMesures += [...svg.matchAll(/<g[^>]*class="measure"[^>]*>/g)].length;
    }
    expect(totalNotes).toBeGreaterThan(0);
    expect(totalMesures).toBe(502);
  }, 240000);
});

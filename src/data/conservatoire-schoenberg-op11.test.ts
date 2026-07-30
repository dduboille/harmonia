import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  SCHOENBERG_OP11_MESURES_1_64,
  SCHOENBERG_OP11_ANALYSE,
  SCHOENBERG_OP11_ANALYSE_NARRATIVE,
} from "./conservatoire-schoenberg-op11";

// Vérifie l'extrait rejoué contre le MusicXML fourni par Dany (fichier
// « schoenberg-op11-1-annote.musicxml ») : Drei Klavierstücke op. 11 n°1
// (Schoenberg, 1909), intégrale (64 mesures, 3/4). Deux coquilles de
// métadonnées corrigées (composeur, titre), aucune note touchée.
const PC_NAMES = ["Do","Do#","Ré","Mib","Mi","Fa","Fa#","Sol","Sol#","La","Sib","Si"];

function pcsMesure(score: ReturnType<typeof parseMusicXML>, num: number) {
  const meas = score.measures.find((m) => m.numero === num)!;
  const notes = score.notes.filter((n) => n.onset >= meas.start && n.onset < meas.start + meas.length);
  return new Set(notes.map((n) => PC_NAMES[n.midi % 12]));
}

describe("SCHOENBERG_OP11_MESURES_1_64", () => {
  it("s'analyse sans erreur : 64 mesures, 3/4, sans armure (atonal)", () => {
    const score = parseMusicXML(SCHOENBERG_OP11_MESURES_1_64);
    expect(score.fifths).toBe(0);
    expect(score.signature).toBe("3/4");
    expect(score.measures).toHaveLength(64);
    expect(score.tempos[0]).toEqual({ onset: 0, bpm: 114 });
  });

  it("porte le compositeur corrigé (Schoenberg, pas Schoemberg) et le titre précisé", () => {
    expect(SCHOENBERG_OP11_MESURES_1_64).toContain("Arnold Schoenberg");
    expect(SCHOENBERG_OP11_MESURES_1_64).not.toContain("Schoemberg");
    expect(SCHOENBERG_OP11_MESURES_1_64).toContain("I. Mäßige");
  });

  it("ne contient AUCUNE balise <harmony> — rien à chiffrer, une première dans ce corpus", () => {
    expect((SCHOENBERG_OP11_MESURES_1_64.match(/<harmony/g) ?? []).length).toBe(0);
  });

  it("le thème inaugural (m.1-2) contient bien Si-Sol#-Sol-La-Fa, sans accompagnement harmonique", () => {
    const score = parseMusicXML(SCHOENBERG_OP11_MESURES_1_64);
    const pcs1 = pcsMesure(score, 1);
    const pcs2 = pcsMesure(score, 2);
    expect(pcs1.has("Si")).toBe(true);
    expect(pcs1.has("Sol#")).toBe(true);
    expect(pcs2.has("Sol")).toBe(true);
    expect(pcs2.has("La")).toBe(true);
    expect(pcs2.has("Fa")).toBe(true);
  });

  it("les 3 premières notes du thème (Si-Sol#-Sol) forment la cellule [0,1,4] une fois normalisées", () => {
    // Si=11, Sol#=8, Sol=7 -> relatif à 7 : {0,1,4}
    const pcs = [11, 8, 7].map((pc) => (pc - 7 + 12) % 12).sort((a, b) => a - b);
    expect(pcs).toEqual([0, 1, 4]);
  });

  it("les 2 accords d'accompagnement (m.2-3) sont bien orthographiés Fa-Sol♭-Si et La-Sib-Réb (pas Fa#, pas Do#)", () => {
    const meas2 = SCHOENBERG_OP11_MESURES_1_64.slice(
      SCHOENBERG_OP11_MESURES_1_64.indexOf('<measure number="2"'),
      SCHOENBERG_OP11_MESURES_1_64.indexOf('<measure number="3"'),
    );
    const meas3 = SCHOENBERG_OP11_MESURES_1_64.slice(
      SCHOENBERG_OP11_MESURES_1_64.indexOf('<measure number="3"'),
      SCHOENBERG_OP11_MESURES_1_64.indexOf('<measure number="4"'),
    );
    expect(meas2).toMatch(/<step>G<\/step>\s*<alter>-1<\/alter>/); // Sol♭
    expect(meas3).toMatch(/<step>D<\/step>\s*<alter>-1<\/alter>/); // Réb
  });

  it("le 2e accord d'accompagnement (La-Sib-Réb) est exactement [0,1,4], la cellule mélodique verticalisée", () => {
    // La=9, Sib=10, Réb(=Do#)=1 -> relatif à 9 : {0,1,4}
    const pcs = [9, 10, 1].map((pc) => (pc - 9 + 12) % 12).sort((a, b) => a - b);
    expect(pcs).toEqual([0, 1, 4]);
  });

  it("les flageolets (m.14-17) sont bien annotés dans le fichier lui-même", () => {
    const meas14 = SCHOENBERG_OP11_MESURES_1_64.slice(
      SCHOENBERG_OP11_MESURES_1_64.indexOf('<measure number="14"'),
      SCHOENBERG_OP11_MESURES_1_64.indexOf('<measure number="15"'),
    );
    expect(meas14).toContain("FLAGEOLETS");
    expect(meas14).toContain("∆7#5");
  });

  it("la reprise (mesure 53) double bien Si et Sol# chacun sur deux octaves simultanément", () => {
    const score = parseMusicXML(SCHOENBERG_OP11_MESURES_1_64);
    const meas = score.measures.find((m) => m.numero === 53)!;
    const notes = score.notes.filter((n) => n.onset >= meas.start && n.onset < meas.start + meas.length);
    const parOnset = new Map<number, number[]>();
    for (const n of notes) {
      const arr = parOnset.get(n.onset) ?? [];
      arr.push(n.midi % 12);
      parOnset.set(n.onset, arr);
    }
    const aDesOctavesDoublees = [...parOnset.values()].some(
      (pcs) => new Set(pcs).size === 1 && pcs.length >= 2,
    );
    expect(aDesOctavesDoublees).toBe(true);
  });

  it("SCHOENBERG_OP11_ANALYSE couvre les mesures clés, dans l'ordre, entre 1 et 64, toutes en fonction '?'", () => {
    expect(SCHOENBERG_OP11_ANALYSE.length).toBeGreaterThan(5);
    const nums = SCHOENBERG_OP11_ANALYSE.map((m) => m.numero);
    expect(nums.every((n) => n >= 1 && n <= 64)).toBe(true);
    expect(nums.every((n, i) => i === 0 || n > nums[i - 1])).toBe(true);
    expect(SCHOENBERG_OP11_ANALYSE.every((m) => m.fonction === "?")).toBe(true);
  });
});

describe("SCHOENBERG_OP11_ANALYSE_NARRATIVE", () => {
  it("couvre les 5 sections (Grundgestalt, flageolets, tempête, reprise, coda)", () => {
    expect(SCHOENBERG_OP11_ANALYSE_NARRATIVE.sections).toHaveLength(5);
    expect(SCHOENBERG_OP11_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  // Le contenu affiché aux étudiants ne doit jamais faire référence au
  // processus de relecture (brouillon, correction...) — seul le commentaire
  // d'en-tête du fichier source garde ce journal.
  it("ne mentionne pas le processus de relecture (brouillon/correction) dans le contenu affiché", () => {
    const tousLesTextes = [
      SCHOENBERG_OP11_ANALYSE_NARRATIVE.tonalite,
      SCHOENBERG_OP11_ANALYSE_NARRATIVE.metrique,
      SCHOENBERG_OP11_ANALYSE_NARRATIVE.forme,
      ...SCHOENBERG_OP11_ANALYSE_NARRATIVE.sections.map((s) => s.texte),
      ...SCHOENBERG_OP11_ANALYSE_NARRATIVE.synthese.map((s) => s.texte),
    ].join(" ");
    expect(tousLesTextes).not.toMatch(/brouillon|corrig|Dany/i);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("SCHOENBERG_OP11_MESURES_1_64 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur (64 mesures)", () => {
    tk.loadData(SCHOENBERG_OP11_MESURES_1_64);
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
    expect(totalMesures).toBe(64);
  }, 60000);
});

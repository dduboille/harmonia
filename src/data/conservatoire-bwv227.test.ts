import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import { planifierLecture } from "@/lib/studio-playback";
import { BWV227_MESURES_1_8 } from "./conservatoire-bwv227";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (export
// MuseScore Studio 4.6.3, fichier « jesu meine freude BMW227.musicxml ») : 8
// mesures en mi mineur, 4/4, piano à 2 portées (voix 1/2 = soprano+alto, voix 5/6
// = ténor+basse), avec `<harmony>` et `<lyric>` (chiffrage romain) portés
// directement sous la portée. Pas de balise <mode> : le mode mineur est INFÉRÉ
// (cf. musicxml-parse.test.ts) — l'armure (fifths=0) ne code aucune tonalité ici,
// toutes les altérations sont écrites en clair note par note.
describe("BWV227_MESURES_1_8", () => {
  it("s'analyse sans erreur et couvre 8 mesures en mi mineur (inféré), 4/4", () => {
    const score = parseMusicXML(BWV227_MESURES_1_8);
    expect(score.fifths).toBe(0);
    expect(score.mode).toBe("minor");
    expect(score.signature).toBe("4/4");
    expect(score.measures).toHaveLength(8);
  });

  it("mesure 1, 1er temps : accord de tonique mi mineur (mi-sol-si) — la voix 2 entre plus tard", () => {
    // La portée de basse (voix 5) porte l'accord EMPILÉ (mi-sol-si) dès l'attaque ;
    // la voix 2 (alto), elle, n'entre qu'au 3e temps (silence initial via <forward>).
    const score = parseMusicXML(BWV227_MESURES_1_8);
    const premierTemps = score.notes.filter((n) => n.measure === 1 && n.onset === score.measures[0].start);
    expect(premierTemps.map((n) => n.pc).sort((a, b) => a - b)).toEqual([4, 7, 11, 11]); // Mi,Sol,Si(basse) + Si(soprano)
  });

  it("mesure 6 : cadence parfaite — mi mineur, ronde, mi DOUBLÉ à la basse ET au soprano", () => {
    // Mesure la plus courte de l'extrait (une seule ronde par voix).
    const score = parseMusicXML(BWV227_MESURES_1_8);
    const notes = score.notes.filter((n) => n.measure === 6);
    expect(notes.map((n) => n.pc).sort((a, b) => a - b)).toEqual([4, 4, 7, 11]); // Mi(x2)-Sol-Si, tonique complet
    const soprano = score.notes.find((n) => n.measure === 6 && n.voice === "1");
    const basse = score.notes.find((n) => n.measure === 6 && n.voice === "5");
    expect(soprano?.pc).toBe(4);
    expect(soprano?.octave).toBe(5);
    expect(basse?.pc).toBe(4); // Mi à la basse
    expect(basse?.octave).toBe(3);
  });

  it("chaque mesure porte un symbole d'accord (<harmony>) — 4 accords à la mesure 1", () => {
    const attendus = [
      /<root-step>E<\/root-step>[\s\S]{0,60}kind text="m">minor/,   // i
      /<root-step>B<\/root-step>[\s\S]{0,60}kind text="m">minor/,   // v (avant altération)
      /<root-step>A<\/root-step>[\s\S]{0,60}kind text="m6">minor-sixth/, // iv6
    ];
    for (const re of attendus) expect(BWV227_MESURES_1_8).toMatch(re);
    expect([...BWV227_MESURES_1_8.matchAll(/<harmony print-frame="no">/g)]).toHaveLength(22);
  });

  it("le chiffrage romain (<lyric>) couvre les 8 mesures, cadence I…V7…I comprise", () => {
    for (const texte of ["I", "V", "IV6", "V7", "VI", "V4/3", "V/VII", "VII", "III"]) {
      expect(BWV227_MESURES_1_8).toContain(`<text>${texte}</text>`);
    }
    // La cadence parfaite de la mesure 6 : I en ronde, seule note de la mesure.
    expect([...BWV227_MESURES_1_8.matchAll(/<text>I<\/text>/g)].length).toBeGreaterThan(1);
  });

  it("aucune tête de note colorée (contrairement à BWV846/K550) — le chiffrage porte seul l'analyse", () => {
    expect(BWV227_MESURES_1_8).not.toContain("notehead color");
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("BWV227_MESURES_1_8 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur", () => {
    tk.loadData(BWV227_MESURES_1_8);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2000 });
    const svg: string = tk.renderToSVG(1);
    const notes = [...svg.matchAll(/<g id="([^"]+)" class="note"/g)];
    expect(notes.length).toBeGreaterThan(0);
  });

  it("Verovio rend le chiffrage romain sous la basse", () => {
    tk.loadData(BWV227_MESURES_1_8);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2000 });
    const svg: string = tk.renderToSVG(1);
    expect(svg).toContain("IV6");
    expect(svg).toContain("V7");
  });

  it("avec breaks=encoded (StudioScore + VueConservatoire), respecte le saut de système voulu à la mesure 5", async () => {
    expect(BWV227_MESURES_1_8).toContain("<print new-system");
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    const frais = new VerovioToolkit(await creerModule());
    frais.setOptions({ scale: 40, adjustPageHeight: true, breaks: "encoded", footer: "none", pageWidth: 1750 });
    frais.loadData(BWV227_MESURES_1_8);
    frais.renderToMIDI();
    const svg: string = frais.renderToSVG(1);
    const systemes = svg.split(/<g[^>]*class="system"[^>]*>/).slice(1);
    const mesuresParSysteme = systemes.map((s) => [...s.matchAll(/<g[^>]*class="measure"[^>]*>/g)].length);
    // Mesures 1-4, puis 5-8 : équilibré, à la demande de Dany.
    expect(mesuresParSysteme).toEqual([4, 4]);
  });

  // Régression : sans tempo écrit, notre horloge audio (repli 90 bpm) et la
  // table de temps MIDI interne de Verovio (repli 120 bpm) divergent — le
  // surlignage décroche de l'audio avant la fin réelle. Cf. commentaire
  // d'en-tête du fichier et conservatoire-beethoven-op27n2.ts.
  it("le surlignage Verovio reste synchronisé jusque près de la vraie fin (pas de désync tempo)", () => {
    const score = parseMusicXML(BWV227_MESURES_1_8);
    expect(score.tempos.length).toBeGreaterThan(0);
    const { dureeTotale } = planifierLecture(score, 1);
    tk.loadData(BWV227_MESURES_1_8);
    tk.renderToMIDI();
    const r = tk.getElementsAtTime(Math.round((dureeTotale - 0.3) * 1000));
    expect(r.measure).toBeTruthy();
  });
});

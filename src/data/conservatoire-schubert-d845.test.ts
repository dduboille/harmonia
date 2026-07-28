import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import { planifierLecture } from "@/lib/studio-playback";
import { SCHUBERT_D845_MESURES_1_10 } from "./conservatoire-schubert-d845";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (export
// MuseScore Studio 4.6.3, fichier « schubert sonate.musicxml ») : 10 mesures en
// la mineur, 4/4, piano à 2 portées (voix 1/2 = main droite, voix 5/6 = main
// gauche), avec `<harmony>` et `<lyric>` (chiffrage romain) portés directement
// sous la portée — dont deux sixtes augmentées (It+6 aux mesures 4 et 9, Fr+6 à
// la mesure 10), l'illustration même de l'emprunt chromatique que ce cours
// enseigne. Pas de balise <mode> : le mode mineur est INFÉRÉ (cf.
// musicxml-parse.test.ts) — l'armure (fifths=0) ne code aucune tonalité ici.
describe("SCHUBERT_D845_MESURES_1_10", () => {
  it("s'analyse sans erreur et couvre 10 mesures en la mineur (inféré), 4/4", () => {
    const score = parseMusicXML(SCHUBERT_D845_MESURES_1_10);
    expect(score.fifths).toBe(0);
    expect(score.mode).toBe("minor");
    expect(score.signature).toBe("4/4");
    expect(score.measures).toHaveLength(10);
  });

  it("mesure 1 : le motif d'ouverture (main droite) — do-si-la-mi, sur la tonique tenue à la basse", () => {
    // Les 2 appogiatures (grace notes, si-do) n'ont pas de durée propre : le
    // parseur les ignore, ne retient que les notes réellement chronométrées.
    const score = parseMusicXML(SCHUBERT_D845_MESURES_1_10);
    const melodie = score.notes.filter((n) => n.measure === 1 && n.voice === "1");
    expect(melodie.map((n) => n.pc)).toEqual([0, 11, 9, 4]); // Do,Si,La,Mi(lié)
    const basse = score.notes.filter((n) => n.measure === 1 && n.voice === "5");
    expect(basse[0].pc).toBe(0); // Do — la tonique (i) tenue à la basse
  });

  it("chaque mesure porte un symbole d'accord (<harmony>) — 17 au total", () => {
    const attendus = [
      /<root-step>A<\/root-step>[\s\S]{0,40}kind text="m">minor/,       // i
      /<root-step>B<\/root-step>[\s\S]{0,40}kind text="dim">diminished/, // ii°
      /<kind text="It\+6">other/,                                       // sixte italienne
      /<kind text="Fr\+6">other/,                                       // sixte française
    ];
    for (const re of attendus) expect(SCHUBERT_D845_MESURES_1_10).toMatch(re);
    expect([...SCHUBERT_D845_MESURES_1_10.matchAll(/<harmony print-frame="no">/g)]).toHaveLength(17);
  });

  it("le chiffrage romain (<lyric>) couvre les deux sixtes augmentées de la leçon", () => {
    for (const texte of ["I", "i6".replace("i6", "I6"), "II", "V4/2", "V6/4", "it+6", "Fr+6"]) {
      expect(SCHUBERT_D845_MESURES_1_10).toContain(`<text>${texte}</text>`);
    }
    // "it+6" apparaît deux fois : mesure 4 (annoncé) et mesure 9 (rappelé avant Fr+6).
    expect([...SCHUBERT_D845_MESURES_1_10.matchAll(/<text>it\+6<\/text>/g)]).toHaveLength(2);
  });

  it("aucune tête de note colorée (comme BWV227) — le chiffrage porte seul l'analyse", () => {
    expect(SCHUBERT_D845_MESURES_1_10).not.toContain("notehead color");
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("SCHUBERT_D845_MESURES_1_10 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur", () => {
    tk.loadData(SCHUBERT_D845_MESURES_1_10);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2000 });
    const svg: string = tk.renderToSVG(1);
    const notes = [...svg.matchAll(/<g id="([^"]+)" class="note"/g)];
    expect(notes.length).toBeGreaterThan(0);
  });

  it("Verovio rend le chiffrage romain sous la basse", () => {
    tk.loadData(SCHUBERT_D845_MESURES_1_10);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2000 });
    const svg: string = tk.renderToSVG(1);
    expect(svg).toContain("it+6");
    expect(svg).toContain("Fr+6");
  });

  it("Verovio rend le SYMBOLE d'accord des sixtes augmentées en toutes lettres (pas la racine seule)", () => {
    // Regression : `<kind>none</kind>` (avec `<root-step text="">C</root-step>`
    // comme racine de remplissage) faisait afficher « C » nu par Verovio, qui
    // ignore le texte du kind quand il vaut "none" — Dany n'avait jamais saisi
    // ce "C", qui ne correspondait à rien sur sa partition. Corrigé en
    // `<root-step></root-step>` (vide) + `<kind text="It+6">other</kind>` :
    // avec kind="other", Verovio concatène racine (vide) + texte du kind.
    tk.loadData(SCHUBERT_D845_MESURES_1_10);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2000 });
    const svg: string = tk.renderToSVG(1);
    const harms = [...svg.matchAll(/<g[^>]*class="harm"[^>]*>[\s\S]*?<\/g>/g)].map((m) =>
      m[0].replace(/<[^>]+>/g, "").replace(/\s+/g, "").trim(),
    );
    expect(harms.filter((h) => h === "It+6")).toHaveLength(2); // mesures 4 et 9
    expect(harms.filter((h) => h === "Fr+6")).toHaveLength(1); // mesure 10
    expect(harms).not.toContain("C");
    expect(harms).not.toContain("Fr+");
  });

  it("avec breaks=encoded (StudioScore + VueConservatoire), respecte le saut de système voulu à la mesure 6 (5+5)", async () => {
    expect(SCHUBERT_D845_MESURES_1_10).toContain("<print new-system");
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    const frais = new VerovioToolkit(await creerModule());
    frais.setOptions({ scale: 40, adjustPageHeight: true, breaks: "encoded", footer: "none", pageWidth: 1750 });
    frais.loadData(SCHUBERT_D845_MESURES_1_10);
    frais.renderToMIDI();
    const svg: string = frais.renderToSVG(1);
    const systemes = svg.split(/<g[^>]*class="system"[^>]*>/).slice(1);
    const mesuresParSysteme = systemes.map((s) => [...s.matchAll(/<g[^>]*class="measure"[^>]*>/g)].length);
    expect(mesuresParSysteme).toEqual([5, 5]);
  });

  // Régression : sans tempo écrit, notre horloge audio (repli 90 bpm) et la
  // table de temps MIDI interne de Verovio (repli 120 bpm) divergent — le
  // surlignage décroche de l'audio avant la fin réelle. Cf. commentaire
  // d'en-tête du fichier et conservatoire-beethoven-op27n2.ts.
  it("le surlignage Verovio reste synchronisé jusque près de la vraie fin (pas de désync tempo)", () => {
    const score = parseMusicXML(SCHUBERT_D845_MESURES_1_10);
    expect(score.tempos.length).toBeGreaterThan(0);
    const { dureeTotale } = planifierLecture(score, 1);
    tk.loadData(SCHUBERT_D845_MESURES_1_10);
    tk.renderToMIDI();
    const r = tk.getElementsAtTime(Math.round((dureeTotale - 0.3) * 1000));
    expect(r.measure).toBeTruthy();
  });
});

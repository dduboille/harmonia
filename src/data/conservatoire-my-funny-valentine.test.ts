import { describe, it, expect, beforeAll } from "vitest";
import { parseMusicXML } from "@/lib/musicxml-parse";
import { MY_FUNNY_VALENTINE_MESURES_1_9, MY_FUNNY_VALENTINE_ANALYSE, MY_FUNNY_VALENTINE_ANALYSE_NARRATIVE } from "./conservatoire-my-funny-valentine";

// Vérifie l'extrait rejoué contre le MusicXML VERBATIM fourni par Dany (export
// MuseScore Studio 4.6.3, fichier « my-funny-valentine-bill-evans-transcription.musicxml »,
// source musescore.com/user/1431431/scores/8970407) : les 9 mesures d'une
// transcription (Bill Evans Trio) de « My Funny Valentine » (Richard Rodgers),
// avec <harmony> et <lyric> (chiffrage romain) portés directement sous la portée.
describe("MY_FUNNY_VALENTINE_MESURES_1_9", () => {
  it("s'analyse sans erreur et couvre 9 mesures en Do mineur, 4/4", () => {
    const score = parseMusicXML(MY_FUNNY_VALENTINE_MESURES_1_9);
    expect(score.fifths).toBe(-3);
    expect(score.mode).toBe("minor");
    expect(score.signature).toBe("4/4");
    expect(score.measures).toHaveLength(9);
    // Le fichier source avait un tempo (100) déclaré à la MESURE 7 seulement,
    // ce qui désynchronisait réellement Verovio (défaut 120bpm) de notre
    // propre moteur (qui remonte le seul tempo trouvé jusqu'à l'onset 0,
    // donc 100bpm dès le début) — déplacé vers la mesure 1, cf. commentaire
    // d'en-tête et project_playback_tempo_desync.
    expect(score.tempos).toEqual([{ onset: 0, bpm: 100 }]);
  });

  it("le tempo n'apparaît plus qu'une seule fois, à la mesure 1 (plus à la mesure 7)", () => {
    const occurrences = [...MY_FUNNY_VALENTINE_MESURES_1_9.matchAll(/<sound tempo="100"\/>/g)];
    expect(occurrences).toHaveLength(1);
    const m1 = MY_FUNNY_VALENTINE_MESURES_1_9.slice(
      MY_FUNNY_VALENTINE_MESURES_1_9.indexOf('<measure number="1"'),
      MY_FUNNY_VALENTINE_MESURES_1_9.indexOf('<measure number="2"'),
    );
    expect(m1).toContain('<sound tempo="100"/>');
  });

  it("aucune tête de note colorée — le chiffrage porte seul l'analyse", () => {
    expect(MY_FUNNY_VALENTINE_MESURES_1_9).not.toContain("notehead color");
  });

  it("MY_FUNNY_VALENTINE_ANALYSE couvre les 9 mesures, avec la cadence mineure iiø7-V7alt-i à la fin", () => {
    expect(MY_FUNNY_VALENTINE_ANALYSE).toHaveLength(9);
    expect(MY_FUNNY_VALENTINE_ANALYSE[0]).toMatchObject({ numero: 1, degre: "I(6/9)", fonction: "T" });
    expect(MY_FUNNY_VALENTINE_ANALYSE.slice(-3).map((m) => m.degre)).toEqual(["II7", "V7alt", "I"]);
    const secondaires = MY_FUNNY_VALENTINE_ANALYSE.filter((m) => m.dominanteSecondaire);
    expect(secondaires.map((m) => m.degre)).toEqual(["V/V", "V/IV"]);
  });

  // Corrige un brouillon d'analyse qui affirmait 2 lacunes de chiffrage qui
  // n'existent pas dans le fichier (mesure 1 "Cm" sec, mesure 6 vide) —
  // troisième occurrence de ce piège cette session (déjà vu sur Autumn Leaves).
  it("mesure 1 : déjà chiffrée Cm6/9 (kind=m/6 + degree 9 add), jamais un Cm sec", () => {
    const m1 = MY_FUNNY_VALENTINE_MESURES_1_9.slice(0, MY_FUNNY_VALENTINE_MESURES_1_9.indexOf('<measure number="2"'));
    expect(m1).toContain('<kind text="m/6">minor-sixth</kind>');
    expect(m1).toContain(">I(6/9)<");
  });

  it("mesure 6 : chiffrage déjà complet (F13sus9, degrés 7/9/11/13), jamais vide", () => {
    const m6 = MY_FUNNY_VALENTINE_MESURES_1_9.slice(
      MY_FUNNY_VALENTINE_MESURES_1_9.indexOf('<measure number="6"'),
      MY_FUNNY_VALENTINE_MESURES_1_9.indexOf('<measure number="7"'),
    );
    expect(m6).toContain('<kind text="13sus">suspended-fourth</kind>');
    const degrees = [...m6.matchAll(/<degree-value>(\d+)<\/degree-value>/g)].map((m) => m[1]);
    expect(degrees).toEqual(["7", "9", "11", "13"]);
  });
});

describe("MY_FUNNY_VALENTINE_ANALYSE_NARRATIVE", () => {
  it("couvre les 7 étapes de la phrase, du line cliché verticalisé à la résolution nue", () => {
    expect(MY_FUNNY_VALENTINE_ANALYSE_NARRATIVE.sections).toHaveLength(7);
    expect(MY_FUNNY_VALENTINE_ANALYSE_NARRATIVE.synthese.length).toBeGreaterThan(0);
  });

  // Le contenu affiché aux étudiants ne doit jamais faire référence au
  // processus de relecture (brouillon, correction, "n'existe pas...") —
  // seul le commentaire d'en-tête du fichier source garde ce journal.
  it("ne mentionne pas le processus de relecture (brouillon/correction) dans le contenu affiché", () => {
    const tousLesTextes = [
      MY_FUNNY_VALENTINE_ANALYSE_NARRATIVE.tonalite,
      MY_FUNNY_VALENTINE_ANALYSE_NARRATIVE.metrique,
      MY_FUNNY_VALENTINE_ANALYSE_NARRATIVE.forme,
      ...MY_FUNNY_VALENTINE_ANALYSE_NARRATIVE.sections.map((s) => s.texte),
      ...MY_FUNNY_VALENTINE_ANALYSE_NARRATIVE.synthese.map((s) => s.texte),
    ].join(" ");
    expect(tousLesTextes).not.toMatch(/brouillon|corrig|Dany/i);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
let tk: any;

describe("MY_FUNNY_VALENTINE_MESURES_1_9 — gravure Verovio (séquence réelle de StudioScore)", () => {
  beforeAll(async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    tk = new VerovioToolkit(await creerModule());
  });

  it("se grave sans erreur", () => {
    tk.loadData(MY_FUNNY_VALENTINE_MESURES_1_9);
    tk.renderToMIDI();
    tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2000 });
    const svg: string = tk.renderToSVG(1);
    const notes = [...svg.matchAll(/<g id="([^"]+)" class="note"/g)];
    expect(notes.length).toBeGreaterThan(0);
  });

  // Régression du correctif de tempo : la table de temps MIDI de Verovio doit
  // désormais avancer d'une mesure toutes les 2400ms (100bpm, 4 temps), pas
  // 2000ms (l'ancien défaut 120bpm observé avant le déplacement du tempo).
  it("le surlignage Verovio avance de 2400ms par mesure (100bpm), pas 2000ms (120bpm)", async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans verovio-appariement.test.ts
    const frais: any = new VerovioToolkit(await creerModule());
    frais.loadData(MY_FUNNY_VALENTINE_MESURES_1_9);
    frais.renderToMIDI();
    frais.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2000 });
    frais.renderToSVG(1);

    let lastId: string | undefined;
    const ecarts: number[] = [];
    let lastMs = 0;
    for (let ms = 0; ms <= 20000; ms += 25) {
      const els = frais.getElementsAtTime(ms);
      const id = els.measure;
      if (id && id !== lastId) {
        if (lastId !== undefined) ecarts.push(ms - lastMs);
        lastId = id;
        lastMs = ms;
      }
    }
    expect(ecarts.length).toBeGreaterThan(0);
    for (const e of ecarts) expect(e).toBeCloseTo(2400, -2); // tolérance d'échantillonnage (pas de 25ms)
  });

  it("avec breaks=encoded (StudioScore + VueConservatoire), les 9 mesures tiennent sur UNE SEULE page", async () => {
    const creerModule = (await import("verovio/wasm")).default;
    const { VerovioToolkit } = await import("verovio/esm");
    const frais = new VerovioToolkit(await creerModule());
    frais.setOptions({ scale: 40, adjustPageHeight: true, breaks: "encoded", footer: "none", pageWidth: 1750 });
    frais.loadData(MY_FUNNY_VALENTINE_MESURES_1_9);
    frais.renderToMIDI();
    const svg: string = frais.renderToSVG(1);
    const systemes = svg.split(/<g[^>]*class="system"[^>]*>/).slice(1);
    const mesuresParSysteme = systemes.map((s) => [...s.matchAll(/<g[^>]*class="measure"[^>]*>/g)].length);
    expect(mesuresParSysteme.reduce((a, b) => a + b, 0)).toBe(9);
    // 2 mesures par ligne (pas 4) : signalé par Dany, les nombreux chiffrages
    // (jusqu'à 3 par mesure) se chevauchaient visuellement à 4 par ligne.
    expect(mesuresParSysteme).toEqual([2, 2, 2, 2, 1]);
  });
});

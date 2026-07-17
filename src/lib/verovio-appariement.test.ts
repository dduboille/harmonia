/**
 * Le CONTRAT d'appariement modèle ↔ Verovio sur lequel StudioScore repose
 * (clic sur note, surlignage de sélection, surlignage des fautes) :
 *
 *   loadData + renderToMIDI ⇒ getElementsAtTime et getMIDIValuesForElement
 *   rendent (time, pitch) pour CHAQUE tête — têtes internes d'accord comprises.
 *
 * POURQUOI `renderToMIDI()` est indispensable : en Verovio 6.2.0, la table de
 * temps MIDI ne se construit PAS paresseusement — sans cet appel,
 * `getMIDIValuesForElement` émet « Calculation of MIDI timemap failed » et rend
 * `{}` pour toutes les notes : clic, sélection et fautes deviennent muets
 * (constaté en production, reproduit ici). Ce test verrouille la séquence
 * exacte que StudioScore exécute au chargement.
 *
 * Verovio tourne en WASM aussi bien en Node qu'au navigateur : ce chemin,
 * longtemps cru « hors de portée des tests », ne l'est pas.
 */

import { describe, it, expect, beforeAll } from "vitest";
import { pieceVersMusicXML } from "./piece-vers-musicxml";
import { satbVersMusicXML } from "./satb-vers-musicxml";
import { trouverPosition } from "./composition-edition";
import type { Piece, Note } from "./piece-model";
import type { Measure } from "./satb-rules";

function ronde(hs: Array<[Note["hauteurs"][0]["lettre"], number]>): Note {
  return {
    type: "note",
    hauteurs: hs.map(([lettre, octave]) => ({ lettre, alteration: 0, octave })),
    duree: { base: "ronde", points: 0 },
  };
}

/** Soprano Do5 ; basse = accord empilé Do3+Mi3+Sol3 (midis 72 / 48, 52, 55). */
const PIECE: Piece = {
  armure: 0, chiffrage: { temps: 4, unite: 4 },
  mesures: [{ voix: { soprano: [ronde([["C", 5]])], alto: [], tenor: [], basse: [ronde([["C", 3], ["E", 3], ["G", 3]])] } }],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans StudioScore
let tk: any;
let idsSvg: string[];

beforeAll(async () => {
  const creerModule = (await import("verovio/wasm")).default;
  const { VerovioToolkit } = await import("verovio/esm");
  tk = new VerovioToolkit(await creerModule());
  // LA séquence de StudioScore : loadData → renderToMIDI (table de temps) → options → SVG.
  tk.loadData(pieceVersMusicXML(PIECE));
  tk.renderToMIDI();
  tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2000 });
  const svg: string = tk.renderToSVG(1);
  idsSvg = [...svg.matchAll(/<g id="([^"]+)" class="note"/g)].map((m) => m[1]);
}, 60000);

describe("appariement Verovio — le contrat de StudioScore", () => {
  it("chaque tête du SVG (accord compris) rend (time, pitch)", () => {
    expect(idsSvg).toHaveLength(4); // Do5 + les trois têtes de l'accord
    const midis = idsSvg.map((id) => {
      const v = tk.getMIDIValuesForElement(id);
      expect(typeof v.time).toBe("number");
      expect(typeof v.pitch).toBe("number");
      return v.pitch;
    });
    expect([...midis].sort((a, b) => a - b)).toEqual([48, 52, 55, 72]);
  });

  it("getElementsAtTime à l'attaque (+1 ms) rend toutes les têtes — le chemin des surlignages", () => {
    const notes: string[] = tk.getElementsAtTime(1).notes ?? [];
    expect([...notes].sort()).toEqual([...idsSvg].sort());
  });

  it("le clic sur une tête INTERNE retrouve le bloc dans le modèle", () => {
    // Comme onSelectNote : (time, pitch) de la tête cliquée → trouverPosition.
    const interne = idsSvg
      .map((id) => tk.getMIDIValuesForElement(id))
      .find((v: { pitch: number }) => v.pitch === 52)!; // Mi3, tête interne de l'accord
    const pos = trouverPosition(PIECE, interne.time, interne.pitch);
    expect(pos).toEqual({ mesure: 0, voix: "basse", note: 0 });
  });
});

/**
 * Même contrat, mais sur le MusicXML produit par `satbVersMusicXML` (l'éditeur
 * SATB). VERROUILLE la constante de temps sur laquelle repose tout l'appariement
 * clic/couleur de l'éditeur : à tempo Verovio par défaut (120 BPM), une ronde
 * en 4/4 dure 2000 ms, donc l'onset de la mesure i (0-based) vaut i × 2000 ms.
 */
function entree(name: string | null, octave: number): Measure["bass"] {
  return { name: name as Measure["bass"]["name"], octave };
}

// m0 : Do majeur C3/C4/E4/G4 (midis 48/60/64/67).
// m1 : Sol majeur G2/B3/D4/G4 (midis 43/59/62/67).
const MESURES_SATB: Measure[] = [
  { bass: entree("C", 3), tenor: entree("C", 4), alto: entree("E", 4), soprano: entree("G", 4) },
  { bass: entree("G", 2), tenor: entree("B", 3), alto: entree("D", 4), soprano: entree("G", 4) },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- poignée opaque, comme dans StudioScore
let tkSatb: any;

beforeAll(async () => {
  const creerModule = (await import("verovio/wasm")).default;
  const { VerovioToolkit } = await import("verovio/esm");
  tkSatb = new VerovioToolkit(await creerModule());
  // La séquence de StudioScore : loadData → renderToMIDI (table de temps) → SVG.
  tkSatb.loadData(satbVersMusicXML(MESURES_SATB, "C", true));
  tkSatb.renderToMIDI();
  tkSatb.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none", pageWidth: 2000 });
  tkSatb.renderToSVG(1);
}, 60000);

describe("appariement du MusicXML SATB genere", () => {
  const CAS: Array<{ mesure: number; midis: number[] }> = [
    { mesure: 0, midis: [48, 60, 64, 67] },
    { mesure: 1, midis: [43, 59, 62, 67] },
  ];

  it.each(CAS)("mesure $mesure : les 4 têtes à l'attaque rendent les hauteurs attendues", ({ mesure, midis }) => {
    const onset = mesure * 2000;
    const notes: string[] = tkSatb.getElementsAtTime(onset + 1).notes ?? [];
    expect(notes).toHaveLength(4);
    const rendus = notes.map((id) => tkSatb.getMIDIValuesForElement(id).pitch);
    expect([...rendus].sort((a, b) => a - b)).toEqual(midis);
  });

  it("chaque tête porte le time de sa mesure (± 1 ms) — la constante 2000 ms/mesure", () => {
    for (const { mesure } of CAS) {
      const onset = mesure * 2000;
      const notes: string[] = tkSatb.getElementsAtTime(onset + 1).notes ?? [];
      for (const id of notes) {
        expect(Math.abs(tkSatb.getMIDIValuesForElement(id).time - onset)).toBeLessThanOrEqual(1);
      }
    }
  });
});

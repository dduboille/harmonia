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
import { trouverPosition } from "./composition-edition";
import type { Piece, Note } from "./piece-model";

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

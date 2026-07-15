/**
 * lib/piece-vers-musicxml.ts
 * Harmonia — Sérialise une `Piece` en MusicXML : à une PARTIE, DEUX PORTÉES
 * (convention MusicXML : <staff>1 = clé de Sol, <staff>2 = clé de Fa, séparées dans
 * chaque mesure par un <backup>). De ce MusicXML découlent la gravure (Verovio),
 * l'analyse et l'export vers MuseScore.
 */

import {
  DIVISIONS,
  dureeEnDivisions,
  type Piece,
  type Mesure,
  type Voix,
  type Note,
  type Silence,
  type Hauteur,
  type BaseDuree,
} from "./piece-model";

const TYPE_XML: Record<BaseDuree, string> = {
  ronde: "whole", blanche: "half", noire: "quarter", croche: "eighth", double: "16th",
};

function hauteurXML(h: Hauteur): string {
  const alter = h.alteration !== 0 ? `<alter>${h.alteration}</alter>` : "";
  return `<pitch><step>${h.lettre}</step>${alter}<octave>${h.octave}</octave></pitch>`;
}

/**
 * Un `<note>` par hauteur ; les hauteurs 2..n portent `<chord/>`. `tenueEntrante`
 * ferme une liaison venue de la note précédente ; `note.liee` en ouvre une vers la
 * suivante. La liaison est à la fois SONORE (`<tie>`) et GRAPHIQUE (`<tied>`).
 */
function noteXML(note: Note, voix: string, portee: number, tenueEntrante: boolean): string {
  const duree = dureeEnDivisions(note.duree);
  const type = TYPE_XML[note.duree.base];
  const points = "<dot/>".repeat(note.duree.points);
  const modif = note.duree.nolet
    ? `<time-modification><actual-notes>${note.duree.nolet.reelles}</actual-notes>` +
      `<normal-notes>${note.duree.nolet.normales}</normal-notes></time-modification>`
    : "";

  const debut = note.liee;
  const ties =
    (tenueEntrante ? `<tie type="stop"/>` : "") + (debut ? `<tie type="start"/>` : "");
  const tied =
    (tenueEntrante ? `<tied type="stop"/>` : "") + (debut ? `<tied type="start"/>` : "");
  const notations = tied ? `<notations>${tied}</notations>` : "";

  return note.hauteurs
    .map((h, i) => {
      const chord = i > 0 ? "<chord/>" : "";
      return (
        `<note>${chord}${hauteurXML(h)}<duration>${duree}</duration>${ties}` +
        `<voice>${voix}</voice><type>${type}</type>${points}${modif}` +
        `<staff>${portee}</staff>${notations}</note>`
      );
    })
    .join("");
}

function silenceXML(s: Silence, voix: string, portee: number, ticksMesure: number): string {
  if (s.mesureEntiere) {
    // Silence de mesure : `measure="yes"`, durée = toute la mesure, sans <type>.
    return `<note><rest measure="yes"/><duration>${ticksMesure}</duration>` +
      `<voice>${voix}</voice><staff>${portee}</staff></note>`;
  }
  const duree = dureeEnDivisions(s.duree);
  const points = "<dot/>".repeat(s.duree.points);
  return `<note><rest/><duration>${duree}</duration><voice>${voix}</voice>` +
    `<type>${TYPE_XML[s.duree.base]}</type>${points}<staff>${portee}</staff></note>`;
}

function voixXML(voix: Voix, numeroVoix: string, portee: number, ticksMesure: number): string {
  let out = "";
  let tenueEntrante = false;
  for (const ev of voix) {
    if (ev.type === "silence") {
      out += silenceXML(ev, numeroVoix, portee, ticksMesure);
      tenueEntrante = false;
    } else {
      out += noteXML(ev, numeroVoix, portee, tenueEntrante);
      tenueEntrante = !!ev.liee;
    }
  }
  return out;
}

function attributsXML(piece: Piece): string {
  return (
    `<attributes><divisions>${DIVISIONS}</divisions>` +
    `<key><fifths>${piece.armure}</fifths></key>` +
    `<time><beats>${piece.chiffrage.temps}</beats><beat-type>${piece.chiffrage.unite}</beat-type></time>` +
    `<staves>2</staves>` +
    `<clef number="1"><sign>G</sign><line>2</line></clef>` +
    `<clef number="2"><sign>F</sign><line>4</line></clef></attributes>`
  );
}

function mesureXML(mesure: Mesure, index: number, piece: Piece, ticksMesure: number): string {
  const attrs = index === 0 ? attributsXML(piece) : "";
  const haut = voixXML(mesure.portees[0], "1", 1, ticksMesure);
  const bas = voixXML(mesure.portees[1], "2", 2, ticksMesure);
  // Le <backup> ramène le curseur au début de la mesure pour écrire la 2e portée.
  return (
    `<measure number="${index + 1}">${attrs}${haut}` +
    `<backup><duration>${ticksMesure}</duration></backup>${bas}</measure>`
  );
}

export function pieceVersMusicXML(piece: Piece): string {
  // Durée d'une mesure en ticks : temps × (une noire) × 4 / unité. En 4/4 : 4×48 = 192.
  const ticksMesure = (piece.chiffrage.temps * DIVISIONS * 4) / piece.chiffrage.unite;
  const mesures = piece.mesures
    .map((m, i) => mesureXML(m, i, piece, ticksMesure))
    .join("");

  return (
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<score-partwise version="4.0">` +
    `<part-list><score-part id="P1"><part-name>Harmonia</part-name></score-part></part-list>` +
    `<part id="P1">${mesures}</part>` +
    `</score-partwise>`
  );
}

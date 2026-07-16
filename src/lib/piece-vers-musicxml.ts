/**
 * lib/piece-vers-musicxml.ts
 * Harmonia — Sérialise une `Piece` SATB en MusicXML : une PARTIE, DEUX PORTÉES
 * (<staff>1 = clé de Sol, <staff>2 = clé de Fa), jusqu'à DEUX VOIX par portée séparées
 * par des <backup>. Chaque note porte sa HAMPE explicite (S/T en haut, A/B en bas) et
 * son <staff>. Une voix sans aucune note n'est pas émise (masquée) ; une portée sans
 * voix active reçoit une voix de silence pour rester visible.
 *
 * De ce MusicXML découlent la gravure (Verovio), l'analyse et l'export vers MuseScore.
 */

import {
  DIVISIONS,
  ORDRE_VOIX,
  CONFIG_VOIX,
  dureeEnDivisions,
  type Piece,
  type Voix,
  type Note,
  type Silence,
  type Hauteur,
  type BaseDuree,
  type NomVoix,
} from "./piece-model";
import {
  capaciteMesure, dureePlacee, decouperEnSilences, voixActives,
} from "./composition-edition";

const TYPE_XML: Record<BaseDuree, string> = {
  ronde: "whole", blanche: "half", noire: "quarter", croche: "eighth", double: "16th",
};

// Numéro de voix MusicXML par nom : distinct pour chaque voix, y compris entre les
// deux portées, pour que le parseur et le graveur ne les confondent jamais.
const NUM_VOIX: Record<NomVoix, string> = {
  soprano: "1", alto: "2", tenor: "3", basse: "4",
};

function hauteurXML(h: Hauteur): string {
  const alter = h.alteration !== 0 ? `<alter>${h.alteration}</alter>` : "";
  return `<pitch><step>${h.lettre}</step>${alter}<octave>${h.octave}</octave></pitch>`;
}

/**
 * Un `<note>` par hauteur ; les hauteurs 2..n portent `<chord/>`. `tenueEntrante`
 * ferme une liaison venue de la note précédente ; `note.liee` en ouvre une vers la
 * suivante. La HAMPE (`<stem>`) est émise explicitement, dans l'ordre du schéma
 * MusicXML : … type, dot, time-modification, STEM, STAFF, notations.
 */
function noteXML(
  note: Note, voix: string, portee: number, hampe: string,
  tenueEntrante: boolean, tupletDebut: boolean, tupletFin: boolean,
): string {
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
  // Le CROCHET de n-olet est porté par la première et la dernière note du groupe.
  // Sans lui, le graveur ne dessine ni le crochet ni le chiffre « 3 » : la seule
  // `time-modification` donne la bonne durée mais pas la notation. Le crochet ne
  // vaut que pour la première hauteur d'un accord.
  const tuplet =
    (tupletDebut ? `<tuplet type="start"/>` : "") + (tupletFin ? `<tuplet type="stop"/>` : "");

  return note.hauteurs
    .map((h, i) => {
      const chord = i > 0 ? "<chord/>" : "";
      const contenu = tied + (i === 0 ? tuplet : "");
      const notations = contenu ? `<notations>${contenu}</notations>` : "";
      return (
        `<note>${chord}${hauteurXML(h)}<duration>${duree}</duration>${ties}` +
        `<voice>${voix}</voice><type>${type}</type>${points}${modif}` +
        `<stem>${hampe}</stem><staff>${portee}</staff>${notations}</note>`
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

/**
 * Sérialise UNE voix pour UNE mesure : les événements posés, COMPLÉTÉS en silences
 * jusqu'à la capacité (une voix vide devient un silence de mesure centré). Suit l'état
 * de liaison entrante et les groupes de n-olet, et applique la hampe de la voix.
 */
function voixMesureXML(evenements: Voix, nom: NomVoix, ticksMesure: number): string {
  const num = NUM_VOIX[nom];
  const { portee, hampe } = CONFIG_VOIX[nom];
  // Complément : voix vide → un silence de mesure ; voix partielle → + silences.
  const complet: Voix = evenements.length === 0
    ? [{ type: "silence", duree: { base: "ronde", points: 0 }, mesureEntiere: true }]
    : [...evenements, ...decouperEnSilences(ticksMesure - dureePlacee(evenements))];

  let out = "";
  let tenueEntrante = false;
  // Position dans le n-olet courant : les notes de n-olet consécutives se groupent par
  // paquets de `reelles` (3 pour un triolet) ; le premier ouvre le crochet, le dernier
  // le ferme.
  let posNolet = 0;
  for (const ev of complet) {
    if (ev.type === "silence") {
      out += silenceXML(ev, num, portee, ticksMesure);
      tenueEntrante = false;
      posNolet = 0;
    } else {
      const nolet = ev.duree.nolet;
      let debut = false;
      let fin = false;
      if (nolet) {
        if (posNolet === 0) debut = true;
        posNolet += 1;
        if (posNolet >= nolet.reelles) { fin = true; posNolet = 0; }
      } else {
        posNolet = 0;
      }
      out += noteXML(ev, num, portee, hampe, tenueEntrante, debut, fin);
      tenueEntrante = !!ev.liee;
    }
  }
  return out;
}

function attributsXML(piece: Piece): string {
  return (
    `<attributes><divisions>${DIVISIONS}</divisions>` +
    `<key><fifths>${piece.armure}</fifths><mode>${piece.mode ?? "major"}</mode></key>` +
    `<time><beats>${piece.chiffrage.temps}</beats><beat-type>${piece.chiffrage.unite}</beat-type></time>` +
    `<staves>2</staves>` +
    `<clef number="1"><sign>G</sign><line>2</line></clef>` +
    `<clef number="2"><sign>F</sign><line>4</line></clef></attributes>`
  );
}

export function pieceVersMusicXML(piece: Piece): string {
  const ticksMesure = capaciteMesure(piece.chiffrage);
  const actives = voixActives(piece);

  const mesures = piece.mesures.map((mesure, i) => {
    const attrs = i === 0 ? attributsXML(piece) : "";

    // Par portée (1 puis 2) : les voix actives de cette portée, ou une voix de silence
    // (repli) si aucune, pour que la portée reste visible.
    const parPortee = ([1, 2] as const).map((p) => {
      const voixDeLaPortee = ORDRE_VOIX.filter(
        (v) => CONFIG_VOIX[v].portee === p && actives.includes(v),
      );
      if (voixDeLaPortee.length === 0) {
        const repli: NomVoix = p === 1 ? "soprano" : "tenor";
        return [voixMesureXML([], repli, ticksMesure)];
      }
      return voixDeLaPortee.map((v) => voixMesureXML(mesure.voix[v], v, ticksMesure));
    }).flat();

    // Le <backup> ramène le curseur au début de la mesure entre chaque voix (pas après
    // la dernière) : toutes les voix commencent donc au même instant.
    const backup = `<backup><duration>${ticksMesure}</duration></backup>`;
    return `<measure number="${i + 1}">${attrs}${parPortee.join(backup)}</measure>`;
  }).join("");

  return (
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<score-partwise version="4.0">` +
    `<part-list><score-part id="P1"><part-name>Harmonia</part-name></score-part></part-list>` +
    `<part id="P1">${mesures}</part>` +
    `</score-partwise>`
  );
}

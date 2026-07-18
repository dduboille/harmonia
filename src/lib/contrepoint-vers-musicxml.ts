/**
 * lib/contrepoint-vers-musicxml.ts
 * Harmonia — Grave 1 ou 2 voix INDÉPENDANTES en MusicXML, UNE VOIX PAR PORTÉE
 * (clé de sol ou de fa au choix de chaque voix), SANS SILENCE PARASITE.
 *
 * POURQUOI ce module à côté de satb-vers-musicxml : le convertisseur SATB grave
 * toujours quatre voix sur un grand staff — une voix absente y devient un silence
 * de ronde affiché. Pour le contrepoint Renaissance à deux voix (cours 43), ces
 * silences fantômes n'ont pas lieu d'être : chaque portée ne porte QUE sa voix.
 *
 * Contrairement au SATB (une ronde par mesure), le contrepoint mélange rondes et
 * blanches (note contre note, fleuri simple) et lie les tenues (retards) : chaque
 * voix est une SÉQUENCE de notes de durée variable, redécoupée en mesures selon le
 * chiffrage. L'orthographe des hauteurs (lettre + altération, glyphe, armure) est
 * empruntée à lib/note-musicxml — aucune copie divergente de la logique de hauteur.
 *
 * Convention : noms de notes ANGLAIS (« D », « F# », « C# », « Bb »…) et octave à
 * la manière de satb-rules (NoteEntry) ; Do4 = do central. Modal par défaut :
 * showKeySignature=false grave <fifths>0</fifths> et écrit les altérations (ficta).
 */

import { decoderNote, GLYPHE_ALTERATION, armureDe } from "@/lib/note-musicxml";
import type { NoteName } from "@/lib/satb-rules";

// Résolution : une noire = 1 division. Blanche = 2, ronde = 4, carrée = 8.
const DIVISIONS = 1;

export type CpDuree = "breve" | "whole" | "half" | "quarter";

const DUREE_DIV: Record<CpDuree, number> = { breve: 8, whole: 4, half: 2, quarter: 1 };
const DUREE_TYPE: Record<CpDuree, string> = {
  breve: "breve", whole: "whole", half: "half", quarter: "quarter",
};

/** Une note d'une voix de contrepoint. Pas de silence : jamais de rest parasite. */
export interface CpNote {
  name: NoteName;
  octave: number;
  duree: CpDuree;
  /** Liaison de tenue vers la note SUIVANTE de la même voix (même hauteur). */
  lie?: boolean;
}

/** Une voix : sa clé et sa séquence de notes (l'ordre fait la ligne). */
export interface CpVoix {
  clef: "sol" | "fa";
  notes: CpNote[];
}

export interface CpOptions {
  /** Numérateur du chiffrage (défaut 4). */
  beats?: number;
  /** Dénominateur du chiffrage (défaut 4). */
  beatType?: number;
  /** « C », « Dm »… (utile seulement si showKeySignature). */
  keySignature?: string;
  /** Grave l'armure ; sinon <fifths>0</fifths> et altérations écrites (modal). */
  showKeySignature?: boolean;
}

/** Un <note> pour une voix : hauteur, durée, liaisons, portée. Jamais de silence. */
function noteXML(
  n: CpNote, voix: string, portee: number,
  attendu: Record<string, number>, tenueEntrante: boolean,
): string {
  const { step, alter } = decoderNote(n.name);
  const alterXML = alter !== 0 ? `<alter>${alter}</alter>` : "";
  const pitch = `<pitch><step>${step}</step>${alterXML}<octave>${n.octave}</octave></pitch>`;
  // Altération affichée seulement si elle contredit l'armure (armure vide ⇒ toute
  // altération est écrite ; note conforme à l'armure ⇒ rien à afficher).
  const accidental = alter !== (attendu[step] ?? 0) ? `<accidental>${GLYPHE_ALTERATION[alter]}</accidental>` : "";

  // <tie> (sonore, après <duration>) et <tied> (graphique, dans <notations>).
  const ties = (tenueEntrante ? `<tie type="stop"/>` : "") + (n.lie ? `<tie type="start"/>` : "");
  const tied = (tenueEntrante ? `<tied type="stop"/>` : "") + (n.lie ? `<tied type="start"/>` : "");
  const notations = tied ? `<notations>${tied}</notations>` : "";

  return (
    `<note>${pitch}<duration>${DUREE_DIV[n.duree] * DIVISIONS}</duration>${ties}` +
    `<voice>${voix}</voice><type>${DUREE_TYPE[n.duree]}</type>${accidental}` +
    `<staff>${portee}</staff>${notations}</note>`
  );
}

/** Découpe la séquence d'une voix en mesures selon la capacité (en divisions). */
function decouperEnMesures(notes: CpNote[], capacite: number): { n: CpNote; entrante: boolean }[][] {
  const mesures: { n: CpNote; entrante: boolean }[][] = [];
  let courante: { n: CpNote; entrante: boolean }[] = [];
  let cumul = 0;
  notes.forEach((n, i) => {
    courante.push({ n, entrante: i > 0 ? notes[i - 1].lie === true : false });
    cumul += DUREE_DIV[n.duree] * DIVISIONS;
    if (cumul >= capacite) {
      mesures.push(courante);
      courante = [];
      cumul = 0;
    }
  });
  if (courante.length) mesures.push(courante);
  return mesures;
}

function clefXML(clef: "sol" | "fa", numero: number): string {
  return clef === "fa"
    ? `<clef number="${numero}"><sign>F</sign><line>4</line></clef>`
    : `<clef number="${numero}"><sign>G</sign><line>2</line></clef>`;
}

/**
 * Sérialise 1 ou 2 voix indépendantes (une par portée) en MusicXML bien formé.
 * @param voix   1 ou 2 voix (chacune sa clé et sa séquence de notes)
 * @param options chiffrage, armure
 */
export function contrepointVersMusicXML(voix: CpVoix[], options: CpOptions = {}): string {
  const { beats = 4, beatType = 4, keySignature = "C", showKeySignature = false } = options;
  const { fifths, attendu } = showKeySignature ? armureDe(keySignature) : { fifths: 0, attendu: {} };

  const N = voix.length;
  // Capacité d'une mesure en divisions (noire = 1) : beats × (ronde / beatType).
  const capacite = (beats * 4 * DIVISIONS) / beatType;

  const parVoix = voix.map((v) => decouperEnMesures(v.notes, capacite));
  const nbMesures = Math.max(1, ...parVoix.map((m) => m.length));

  const attributs =
    `<attributes><divisions>${DIVISIONS}</divisions>` +
    `<key><fifths>${fifths}</fifths></key>` +
    `<time><beats>${beats}</beats><beat-type>${beatType}</beat-type></time>` +
    `<staves>${N}</staves>` +
    voix.map((v, i) => clefXML(v.clef, i + 1)).join("") +
    `</attributes>`;

  // Le <backup> ramène le curseur au début de la mesure entre deux voix : elles
  // commencent donc au même instant.
  const backup = `<backup><duration>${capacite}</duration></backup>`;

  const mesures = Array.from({ length: nbMesures }, (_, m) => {
    const attrs = m === 0 ? attributs : "";
    const contenus = voix.map((_, vi) => {
      const items = parVoix[vi][m] ?? [];
      const numVoix = String(vi + 1);
      const portee = vi + 1;
      return items.map((it) => noteXML(it.n, numVoix, portee, attendu, it.entrante)).join("");
    });
    return `<measure number="${m + 1}">${attrs}${contenus.join(backup)}</measure>`;
  }).join("");

  return (
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<score-partwise version="4.0">` +
    `<part-list><score-part id="P1"><part-name>Harmonia</part-name></score-part></part-list>` +
    `<part id="P1">${mesures}</part>` +
    `</score-partwise>`
  );
}

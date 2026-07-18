/**
 * lib/squelette-vers-piece.ts
 * Harmonia — Convertit un squelette RÉALISÉ (VoicedMeasure regroupés par mesure) en
 * modèle `Piece` de l'atelier, pour l'export « Étoffer dans l'atelier ».
 *
 * Chaque voix SATB devient une voix nommée de la pièce (soprano/alto/tenor/basse) ;
 * une mesure à un accord donne des rondes, à deux accords des blanches, vide reste
 * vide (l'atelier grave lui-même les silences). L'épellation des MIDI suit l'armure
 * (midi-vers-musicxml.ts, l'orthographieur partagé).
 */

import { armure, nomsPourArmure, decoderMidi } from "@/lib/midi-vers-musicxml";
import type {
  Piece, Mesure, Voix, Note, Hauteur, BaseDuree, LettreNote, NomVoix,
} from "@/lib/piece-model";
import type { VoicedMeasure } from "@/lib/voicing-ecole";
import type { Tonalite } from "@/lib/squelette-model";

// Correspondance voix SATB du voicing (bass) → voix nommée de la pièce (basse).
const CHAMPS: Array<{ nom: NomVoix; champ: keyof VoicedMeasure }> = [
  { nom: "soprano", champ: "soprano" },
  { nom: "alto", champ: "alto" },
  { nom: "tenor", champ: "tenor" },
  { nom: "basse", champ: "bass" },
];

function hauteurDeMidi(midi: number, noms: string[]): Hauteur {
  const { step, alter, octave } = decoderMidi(midi, noms);
  return { lettre: step as LettreNote, alteration: alter, octave };
}

function noteDeMidi(midi: number, base: BaseDuree, noms: string[]): Note {
  return { type: "note", hauteurs: [hauteurDeMidi(midi, noms)], duree: { base, points: 0 } };
}

/** Les événements d'une voix pour une mesure : rien, une ronde, ou deux blanches. */
function voixDeMesure(bloc: VoicedMeasure[], champ: keyof VoicedMeasure, noms: string[]): Voix {
  if (bloc.length === 0) return [];
  if (bloc.length === 1) return [noteDeMidi(bloc[0][champ], "ronde", noms)];
  return bloc.slice(0, 2).map((v) => noteDeMidi(v[champ], "blanche", noms));
}

function mesureDeBloc(bloc: VoicedMeasure[], noms: string[]): Mesure {
  const voix = {} as Record<NomVoix, Voix>;
  for (const { nom, champ } of CHAMPS) voix[nom] = voixDeMesure(bloc, champ, noms);
  return { voix };
}

/** Convertit le squelette voicé en `Piece` (armure, mode, 4/4, quatre voix). */
export function squeletteVersPiece(mesures: VoicedMeasure[][], tonalite: Tonalite): Piece {
  const { fifths } = armure(tonalite.keySignature);
  const noms = nomsPourArmure(fifths);
  return {
    armure: fifths,
    mode: tonalite.mode,
    chiffrage: { temps: 4, unite: 4 },
    mesures: mesures.map((bloc) => mesureDeBloc(bloc, noms)),
  };
}

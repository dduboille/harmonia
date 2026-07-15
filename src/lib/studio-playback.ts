/**
 * lib/studio-playback.ts
 * Harmonia — Planifier la LECTURE d'une partition importée dans le studio.
 *
 * Le parseur donne les notes en ticks (TPQ par noire) ; `PianoPlayer` joue en
 * SECONDES. Ce module fait la conversion : chaque note devient un événement daté,
 * prêt à être programmé. Pur — la programmation audio elle-même vit dans le composant.
 *
 * La conversion suit les CHANGEMENTS DE TEMPO écrits dans le fichier (`score.tempos`) :
 * une pièce comme la Pathétique, où le Grave lent précède un Allegro vif, ne joue plus
 * à un tempo unique. La VITESSE est un facteur global (1 = tel qu'écrit) : jouer à 70 %
 * pour étudier ralentit tout sans déformer les rapports de tempo.
 */

import { TPQ, type ParsedScore, type TempoEvent } from "./musicxml-parse";

/** Un événement audio : une note, quand elle sonne, combien de temps. */
export interface EvenementAudio {
  spec: string;      // "C:3" — convention PianoPlayer
  startTime: number; // secondes
  duration: number;  // secondes
  velocity: number;
  measure: number;   // pour le surlignage synchronisé
}

/** Le début d'une mesure, en secondes — pour caler le surlignage sur la lecture. */
export interface MesureMinutee {
  numero: number;
  debutSec: number;
}

export interface Lecture {
  evenements: EvenementAudio[];
  mesures: MesureMinutee[];
  dureeTotale: number; // secondes
}

/** Tempo de repli quand le fichier n'en déclare aucun (noires/minute). */
const BPM_DEFAUT = 90;

const NOMS_DIESE = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

/**
 * Spec PianoPlayer d'une hauteur midi. La justesse tient à la HAUTEUR (fréquence),
 * pas à l'orthographe : on nomme au dièse, l'octave PianoPlayer est l'octave
 * standard moins un (Do4 = midi 60 = « C:3 »).
 */
export function specDepuisMidi(midi: number): string {
  const nom = NOMS_DIESE[((midi % 12) + 12) % 12];
  const octaveStandard = Math.floor(midi / 12) - 1;
  return `${nom}:${octaveStandard - 1}`;
}

interface Segment {
  onset: number;       // ticks, début du segment
  sec: number;         // secondes écoulées à ce début
  secParTick: number;  // durée d'un tick dans ce segment
}

/**
 * Horloge tick → secondes, PAR MORCEAUX : chaque changement de tempo ouvre un
 * segment à sa propre échelle, mise à l'échelle par `vitesse`. On précalcule le
 * temps atteint au début de chaque segment, puis on interpole à l'intérieur.
 *
 * On garantit toujours un segment à l'instant 0 (avec le premier tempo écrit, ou le
 * repli) : une note avant la première indication doit avoir une durée définie.
 */
function construireHorloge(tempos: TempoEvent[], vitesse: number): (onset: number) => number {
  const tries = [...tempos].sort((a, b) => a.onset - b.onset);
  const base: TempoEvent[] =
    tries.length > 0 && tries[0].onset === 0
      ? tries
      : [{ onset: 0, bpm: tries[0]?.bpm ?? BPM_DEFAUT }, ...tries.filter((t) => t.onset > 0)];

  const segments: Segment[] = [];
  let sec = 0;
  for (let i = 0; i < base.length; i++) {
    const secParTick = 60 / (base[i].bpm * vitesse) / TPQ;
    segments.push({ onset: base[i].onset, sec, secParTick });
    if (i + 1 < base.length) sec += (base[i + 1].onset - base[i].onset) * secParTick;
  }

  return (onset: number): number => {
    let seg = segments[0];
    for (const s of segments) {
      if (s.onset <= onset) seg = s;
      else break;
    }
    return seg.sec + (onset - seg.onset) * seg.secParTick;
  };
}

/**
 * @param score   la partition analysée
 * @param vitesse facteur de vitesse global (1 = tel qu'écrit ; 0.7 = 70 %, pour étudier)
 */
export function planifierLecture(score: ParsedScore, vitesse: number): Lecture {
  const tempsDe = construireHorloge(score.tempos, vitesse);

  const evenements: EvenementAudio[] = score.notes
    .map((n) => {
      const startTime = tempsDe(n.onset);
      return {
        spec: specDepuisMidi(n.midi),
        startTime,
        duration: tempsDe(n.onset + n.duration) - startTime,
        velocity: 0.75,
        measure: n.measure,
      };
    })
    .sort((a, b) => a.startTime - b.startTime);

  const mesures: MesureMinutee[] = score.measures.map((m) => ({
    numero: m.numero,
    debutSec: tempsDe(m.start),
  }));

  const dureeTotale = evenements.reduce((mx, e) => Math.max(mx, e.startTime + e.duration), 0);

  return { evenements, mesures, dureeTotale };
}

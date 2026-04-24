"use client";

/**
 * usePiano — Harmonia
 * Hook partagé pour jouer du piano dans n'importe quel composant de cours.
 * Charge @tonejs/piano de manière lazy (au premier appel).
 *
 * Usage :
 *   const { playNote, playChord, playSequence, isReady } = usePiano()
 *   playChord(['Do', 'Mi', 'Sol'], 3, { arp: true })
 *   playSequence([
 *     { notes: ['Ré', 'Fa', 'La'], octave: 3 },
 *     { notes: ['Sol', 'Si', 'Ré'], octave: 3 },
 *     { notes: ['Do', 'Mi', 'Sol'], octave: 3 },
 *   ], { interval: 1.5 })
 */

import { useCallback, useRef, useState } from "react";

// ─── Note helpers ─────────────────────────────────────────────────────────────

const CHROMATIC_FR = [
  "Do", "Do#", "Ré", "Ré#", "Mi",
  "Fa", "Fa#", "Sol", "Sol#", "La", "La#", "Si",
] as const;

const FR_TO_EN: Record<string, string> = {
  Do: "C",  "Do#": "C#",
  Ré: "D",  "Ré#": "D#", Mib: "Eb",
  Mi: "E",
  Fa: "F",  "Fa#": "F#",
  Sol: "G", "Sol#": "G#",
  La: "A",  "La#": "A#", Sib: "Bb",
  Si: "B",
};

export type NoteName = (typeof CHROMATIC_FR)[number];

function toToneNote(note: string, octave: number): string {
  // French octave 3 = MIDI octave 4 (Do3 = C4 = middle C)
  return `${FR_TO_EN[note] ?? "C"}${octave + 1}`;
}

function semiOf(note: string, octave: number): number {
  return CHROMATIC_FR.indexOf(note as any) + (octave - 3) * 12;
}

// ─── Fallback WebAudio synthesis ──────────────────────────────────────────────

let _fallbackCtx: AudioContext | null = null;
function getFallbackCtx(): AudioContext {
  if (!_fallbackCtx) _fallbackCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  return _fallbackCtx;
}

function synthNote(
  note: string,
  octave: number,
  startTime: number,
  duration: number,
  velocity: number
) {
  const ctx = getFallbackCtx();
  const freq = 261.63 * Math.pow(2, semiOf(note, octave) / 12);
  const master = ctx.createGain();
  master.connect(ctx.destination);

  [
    { mult: 1.0, vol: velocity * 0.65 },
    { mult: 2.0, vol: velocity * 0.10 },
    { mult: 3.0, vol: velocity * 0.05 },
    { mult: 4.0, vol: velocity * 0.02 },
  ].forEach(({ mult, vol }) => {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.connect(g); g.connect(master);
    osc.type = "triangle";
    osc.frequency.value = freq * mult;
    const t = ctx.currentTime + startTime;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.009);
    g.gain.exponentialRampToValueAtTime(vol * 0.5, t + 0.2);
    g.gain.setValueAtTime(vol * 0.5, Math.max(t + 0.2, t + duration - 0.1));
    g.gain.exponentialRampToValueAtTime(0.0001, t + duration + 1.2);
    osc.start(t); osc.stop(t + duration + 1.5);
  });
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export interface PlayNoteOptions {
  duration?: number;   // seconds (default: 1.8)
  velocity?: number;   // 0–1 (default: 0.7)
  startTime?: number;  // offset from now in seconds (default: 0)
}

export interface PlayChordOptions extends PlayNoteOptions {
  arp?: boolean;       // arpeggiate (default: false)
  arpDelay?: number;   // seconds between arp notes (default: 0.07)
}

export interface PlaySequenceOptions extends PlayChordOptions {
  interval?: number;   // seconds between chords (default: 1.5)
}

export interface ChordDef {
  notes: string[];
  octave?: number;
}

export function usePiano() {
  const pianoRef = useRef<any>(null);
  const toneRef = useRef<any>(null);
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const loadingRef = useRef(false);

  // ── Lazy load ──
  const ensureLoaded = useCallback(async () => {
    if (pianoRef.current || loadingRef.current) return;
    loadingRef.current = true;
    setIsLoading(true);
    try {
      const [Tone, { Piano }] = await Promise.all([
        import("tone"),
        import("@tonejs/piano"),
      ]);
      toneRef.current = Tone;
      await Tone.start();
      const piano = new Piano({ velocities: 5, release: true, pedal: true });
      piano.toDestination();
      await piano.load();
      pianoRef.current = piano;
      setIsReady(true);
    } catch (e) {
      console.warn("[usePiano] Falling back to WebAudio synthesis:", e);
      setIsReady(true); // will use synth fallback
    } finally {
      loadingRef.current = false;
      setIsLoading(false);
    }
  }, []);

  // ── Play single note ──
  const playNote = useCallback(
    async (note: string, octave = 3, opts: PlayNoteOptions = {}) => {
      const { duration = 1.8, velocity = 0.7, startTime = 0 } = opts;
      await ensureLoaded();

      if (pianoRef.current && toneRef.current) {
        const Tone = toneRef.current;
        const now = Tone.now() + startTime;
        pianoRef.current.keyDown({ note: toToneNote(note, octave), time: now, velocity });
        pianoRef.current.keyUp({ note: toToneNote(note, octave), time: now + duration });
      } else {
        synthNote(note, octave, startTime, duration, velocity);
      }
    },
    [ensureLoaded]
  );

  // ── Play chord ──
  const playChord = useCallback(
    async (notes: string[], octave = 3, opts: PlayChordOptions = {}) => {
      const { arp = false, arpDelay = 0.07, duration = 1.8, velocity = 0.7, startTime = 0 } = opts;
      await ensureLoaded();
      notes.forEach((note, i) => {
        playNote(note, octave, {
          duration,
          velocity,
          startTime: startTime + (arp ? i * arpDelay : 0),
        });
      });
    },
    [ensureLoaded, playNote]
  );

  // ── Play sequence ──
  const playSequence = useCallback(
    async (chords: ChordDef[], opts: PlaySequenceOptions = {}) => {
      const { interval = 1.5, arp = true, arpDelay = 0.07, duration, velocity = 0.7 } = opts;
      const dur = duration ?? interval * 0.95;
      await ensureLoaded();
      chords.forEach((chord, ci) => {
        const oct = chord.octave ?? 3;
        chord.notes.forEach((note, ni) => {
          playNote(note, oct, {
            duration: dur,
            velocity,
            startTime: ci * interval + (arp ? ni * arpDelay : 0),
          });
        });
      });
    },
    [ensureLoaded, playNote]
  );

  return { playNote, playChord, playSequence, isReady, isLoading, ensureLoaded };
}

"use client";

/**
 * PianoPlayer v5 — Harmonia
 * @tonejs/piano (Salamander Grand Piano, 4 couches de vélocité) + reverb léger
 * Singleton partagé (getInstrument / playChordNow) réutilisé par StaffNotation.
 * Fallback : synthèse WebAudio triangle si le chargement échoue
 */

import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
  useRef,
} from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface PlayOptions {
  arp?: boolean;
  arpDelay?: number;
  duration?: number;
  velocity?: number;
  startTime?: number;
}

export interface PlaySequenceOptions extends PlayOptions {
  interval?: number;
}

export interface ChordDef {
  notes: string[];
  octave?: number;
}

export interface PianoPlayerRef {
  playNote: (note: string, octave?: number, opts?: PlayOptions) => void;
  playChord: (notes: string[], octave?: number, opts?: PlayOptions) => void;
  playSequence: (chords: ChordDef[], opts?: PlaySequenceOptions) => void;
  /** Play a chord where each element is "Note:octave" (e.g. "C:3", "Bb:3", "G#:4"). */
  playVoicing: (specs: string[], opts?: PlayOptions) => void;
  /** Play a sequence of voicings, each element an array of "Note:octave" specs. */
  playVoicingSequence: (voicings: string[][], opts?: PlaySequenceOptions) => void;
  isReady: boolean;
}

export interface PianoPlayerProps {
  highlightNotes?: string[];
  rootNote?: string;
  dotNotes?: string[];       // noms seuls — dot sur toutes les octaves
  dotKeys?: string[];        // "Note:octave" — dot précis ex: ["Sol:3","La:3","Do:4"]
  blackKeyLabels?: Record<string, string>;
  octaves?: number;
  startOctave?: number;
  showLabels?: boolean;
  showOctaveMarkers?: boolean;
  onNoteClick?: (note: string, octave: number) => void;
  className?: string;
}

// ─── Note data ────────────────────────────────────────────────────────────────

const CHROMATIC_FR = [
  "Do", "Do#", "Ré", "Ré#", "Mi",
  "Fa", "Fa#", "Sol", "Sol#", "La", "La#", "Si",
];

// French → MIDI note name (English pass-through included)
const FR_TO_MIDI: Record<string, string> = {
  // French names
  "Do": "C",   "Do#": "C#",  "Réb": "Db",
  "Ré": "D",   "Ré#": "D#",  "Mib": "Eb",
  "Mi": "E",
  "Fa": "F",   "Fa#": "F#",  "Solb": "Gb",
  "Sol": "G",  "Sol#": "G#", "Lab": "Ab",
  "La": "A",   "La#": "A#",  "Sib": "Bb",
  "Si": "B",
  // English pass-through (Cours1/Cours2+ use English note names)
  "C": "C",  "C#": "C#",  "Db": "Db",
  "D": "D",  "D#": "D#",  "Eb": "Eb",
  "E": "E",
  "F": "F",  "F#": "F#",  "Gb": "Gb",
  "G": "G",  "G#": "G#",  "Ab": "Ab",
  "A": "A",  "A#": "A#",  "Bb": "Bb",
  "B": "B",
};

// Bémols → dièses (unique définition, utilisée partout)
const FLAT_TO_SHARP: Record<string, string> = {
  "Réb":"Do#","Mib":"Ré#","Solb":"Fa#","Lab":"Sol#","Sib":"La#","Dob":"Si",
};

// English flats → French sharps (for synth fallback semitone lookup)
const EN_FLAT_TO_FR_SHARP: Record<string, string> = {
  "Bb":"La#","Ab":"Sol#","Eb":"Ré#","Db":"Do#","Gb":"Fa#","Cb":"Si",
};

// English naturals/sharps → French forms (for synth fallback)
const EN_TO_FR: Record<string, string> = {
  "C":"Do","C#":"Do#","D":"Ré","D#":"Ré#","E":"Mi",
  "F":"Fa","F#":"Fa#","G":"Sol","G#":"Sol#","A":"La","A#":"La#","B":"Si",
};

function toMidiNote(note: string, octave: number): string {
  const n = FLAT_TO_SHARP[note] ?? note;
  return `${FR_TO_MIDI[n] ?? "C"}${octave + 1}`;
}

function semiOf(note: string, octave: number): number {
  // Resolve to a French sharp form present in CHROMATIC_FR
  const n = FLAT_TO_SHARP[note] ?? EN_FLAT_TO_FR_SHARP[note] ?? EN_TO_FR[note] ?? note;
  return CHROMATIC_FR.indexOf(n) + (octave - 3) * 12;
}

/**
 * Parse a "Note:octave" spec (e.g. "C:3", "Bb:3", "G#:4") into note + octave.
 * Also handles specs without colon if the last char is a digit (e.g. "C3", "Bb3").
 */
function parseNoteSpec(spec: string): { note: string; octave: number } {
  if (spec.includes(":")) {
    const idx = spec.lastIndexOf(":");
    return { note: spec.slice(0, idx), octave: parseInt(spec.slice(idx + 1)) };
  }
  // No colon — try to split at last digit sequence
  const m = spec.match(/^(.+?)(\d+)$/);
  if (m) return { note: m[1], octave: parseInt(m[2]) };
  return { note: spec, octave: 3 };
}

function toSharp(note: string): string {
  // French bémols → French dièses
  if (FLAT_TO_SHARP[note]) return FLAT_TO_SHARP[note];
  // English flats → French dièses (e.g. "Bb" → "La#")
  if (EN_FLAT_TO_FR_SHARP[note]) return EN_FLAT_TO_FR_SHARP[note];
  // English naturals/sharps → French (e.g. "C" → "Do", "G#" → "Sol#")
  return EN_TO_FR[note] ?? note;
}

// ─── Singleton Tone.Sampler (Salamander Grand Piano) ─────────────────────────

const SALAMANDER_URLS: Record<string, string> = {
  A0: "A0.mp3",
  C1: "C1.mp3", "D#1": "Ds1.mp3", "F#1": "Fs1.mp3",
  A1: "A1.mp3",
  C2: "C2.mp3", "D#2": "Ds2.mp3", "F#2": "Fs2.mp3",
  A2: "A2.mp3",
  C3: "C3.mp3", "D#3": "Ds3.mp3", "F#3": "Fs3.mp3",
  A3: "A3.mp3",
  C4: "C4.mp3", "D#4": "Ds4.mp3", "F#4": "Fs4.mp3",
  A4: "A4.mp3",
  C5: "C5.mp3", "D#5": "Ds5.mp3", "F#5": "Fs5.mp3",
  A5: "A5.mp3",
  C6: "C6.mp3", "D#6": "Ds6.mp3", "F#6": "Fs6.mp3",
  A6: "A6.mp3",
  C7: "C7.mp3", "D#7": "Ds7.mp3", "F#7": "Fs7.mp3",
  A7: "A7.mp3",
  C8: "C8.mp3",
};

let _sampler: any = null;
let _tone: any = null;
let _audioCtx: AudioContext | null = null;
let _loading = false;
let _ready = false;
let _cbs: Array<() => void> = [];

function getInstrument(): Promise<void> {
  if (_ready) return Promise.resolve();
  return new Promise((resolve) => {
    _cbs.push(resolve);
    if (_loading) return;
    _loading = true;

    import("tone").then(async (Tone) => {
      _tone = Tone;
      await Tone.start();
      _sampler = new Tone.Sampler({
        urls: SALAMANDER_URLS,
        baseUrl: "https://tonejs.github.io/audio/salamander/",
        onload: () => {
          _ready = true;
          _loading = false;
          _cbs.forEach((cb) => cb());
          _cbs = [];
        },
        onerror: () => {
          _ready = true;
          _loading = false;
          _cbs.forEach((cb) => cb());
          _cbs = [];
        },
      }).toDestination();
    }).catch(() => {
      _ready = true;
      _loading = false;
      _cbs.forEach((cb) => cb());
      _cbs = [];
    });
  });
}

export function playChordNow(notes: string[], duration = "2n") {
  if (!_sampler || !_tone) return;
  _sampler.triggerAttackRelease(notes, duration, _tone.now(), 0.75);
}

export { getInstrument };

// ─── Fallback WebAudio synth ──────────────────────────────────────────────────

function synthNote(note: string, octave: number, t0: number, dur: number, vel: number) {
  if (!_audioCtx) _audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  const ctx = _audioCtx;
  const semi = semiOf(note, octave);
  const freq = 261.63 * Math.pow(2, semi / 12);
  const master = ctx.createGain();
  master.connect(ctx.destination);
  [{ m: 1, v: vel * 0.6 }, { m: 2, v: vel * 0.1 }, { m: 3, v: vel * 0.04 }].forEach(({ m, v }) => {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.connect(g); g.connect(master);
    o.type = "triangle"; o.frequency.value = freq * m;
    const t = ctx.currentTime + t0;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(v, t + 0.01);
    g.gain.exponentialRampToValueAtTime(v * 0.4, t + 0.2);
    g.gain.setValueAtTime(v * 0.4, t + Math.max(0.21, dur - 0.1));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur + 1.2);
    o.start(t); o.stop(t + dur + 1.5);
  });
}

// ─── SVG Piano layout ─────────────────────────────────────────────────────────

const IS_BLACK = new Set(["Do#", "Ré#", "Fa#", "Sol#", "La#"]);
const BLACK_FRAC: Record<string, number> = {
  "Do#": 0.67, "Ré#": 1.67, "Fa#": 3.67, "Sol#": 4.67, "La#": 5.67,
};

// Extrait note et octave d'un dotKey, normalise la note
function parseDotKey(key: string): { note: string; octave: number; displayNote: string } {
  const [rawNote, octStr] = key.split(":");
  const note = toSharp(rawNote); // forme interne (dièse)
  return { note, octave: parseInt(octStr), displayNote: rawNote };
}

interface Key { note: string; octave: number; isBlack: boolean; wi: number; }

function buildKeys(start: number, count: number): Key[] {
  const keys: Key[] = [];
  let wi = 0;
  for (let oct = start; oct < start + count; oct++) {
    CHROMATIC_FR.forEach((note) => {
      const b = IS_BLACK.has(note);
      if (b) {
        keys.push({ note, octave: oct, isBlack: true, wi: wi - 1 });
      } else {
        keys.push({ note, octave: oct, isBlack: false, wi });
        wi++;
      }
    });
  }
  keys.push({ note: "Do", octave: start + count, isBlack: false, wi });
  return keys;
}

const WW = 40, WH = 112, BW = 26, BH = 70;

// ─── Component ────────────────────────────────────────────────────────────────

const PianoPlayer = forwardRef<PianoPlayerRef, PianoPlayerProps>(({
  highlightNotes = [],
  rootNote,
  dotNotes = [],
  dotKeys = [],
  blackKeyLabels = {},
  octaves = 2,
  startOctave = 3,
  showLabels = true,
  showOctaveMarkers = true,
  onNoteClick,
  className = "",
}, ref) => {
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pressed, setPressed] = useState<Set<string>>(new Set());

  const ensureReady = useCallback(async () => {
    if (isReady) return;
    setIsLoading(true);
    try {
      await getInstrument();
      setIsReady(true);
    } catch {
      setIsReady(true);
    } finally {
      setIsLoading(false);
    }
  }, [isReady]);

  const playNoteInternal = useCallback(async (
    note: string, octave: number, opts: PlayOptions = {}
  ) => {
    const { duration = 1.8, velocity = 0.75, startTime = 0 } = opts;
    await ensureReady();

    // Resume AudioContext if suspended (browser autoplay policy)
    if (_audioCtx?.state === "suspended") await _audioCtx.resume();

    const id = `${note}${octave}`;
    setTimeout(() => {
      setPressed((p) => new Set(p).add(id));
      setTimeout(() => setPressed((p) => { const s = new Set(p); s.delete(id); return s; }), 280);
    }, startTime * 1000);

    if (_ready && _sampler && _tone) {
      const midiNote = toMidiNote(note, octave);
      const lookahead = 0.05;
      const when = _tone.now() + startTime + lookahead;
      _sampler.triggerAttackRelease(midiNote, duration, when, velocity);
    } else {
      synthNote(note, octave, startTime, duration, velocity);
    }
  }, [ensureReady]);

  useImperativeHandle(ref, () => ({
    isReady,
    playNote: (n, oct = 3, opts) => { playNoteInternal(n, oct, opts); },
    playChord: (notes, oct = 3, opts = {}) => {
      const { arp = false, arpDelay = 0.07, ...rest } = opts;
      notes.forEach((n, i) =>
        playNoteInternal(n, oct, { ...rest, startTime: (rest.startTime ?? 0) + (arp ? i * arpDelay : 0) })
      );
    },
    playSequence: (chords, opts = {}) => {
      const { interval = 1.5, arp = true, arpDelay = 0.07, duration, velocity = 0.75 } = opts;
      const dur = duration ?? interval * 0.95;
      chords.forEach((chord, ci) => {
        const oct = chord.octave ?? 3;
        chord.notes.forEach((n, ni) =>
          playNoteInternal(n, oct, {
            duration: dur, velocity,
            startTime: ci * interval + (arp ? ni * arpDelay : 0),
          })
        );
      });
    },
    playVoicing: (specs, opts = {}) => {
      const { arp = false, arpDelay = 0.05, ...rest } = opts;
      specs.forEach((spec, i) => {
        const { note, octave } = parseNoteSpec(spec);
        playNoteInternal(note, octave, {
          ...rest,
          startTime: (rest.startTime ?? 0) + (arp ? i * arpDelay : 0),
        });
      });
    },
    playVoicingSequence: (voicings, opts = {}) => {
      const { interval = 1.8, arp = false, arpDelay = 0.05, duration, velocity = 0.75 } = opts;
      const dur = duration ?? interval * 0.9;
      voicings.forEach((specs, vi) => {
        specs.forEach((spec, ni) => {
          const { note, octave } = parseNoteSpec(spec);
          playNoteInternal(note, octave, {
            duration: dur, velocity,
            startTime: vi * interval + (arp ? ni * arpDelay : 0),
          });
        });
      });
    },
  }), [isReady, playNoteInternal]);

  // Layout
  const keys = buildKeys(startOctave, octaves);
  const whites = keys.filter((k) => !k.isBlack);
  const blacks = keys.filter((k) => k.isBlack);
  const svgW = whites.length * WW + 8;
  const svgH = WH + 24;

  const getWX = (k: Key) => 4 + k.wi * WW;
  const getBX = (k: Key) => {
    const off = (k.octave - startOctave) * 7;
    return 4 + (off + BLACK_FRAC[k.note]) * WW - BW / 2;
  };

  const fill = (k: Key) => {
    const id = `${k.note}${k.octave}`;
    if (pressed.has(id)) return k.isBlack ? "#3a2a10" : "#e8d8b0";
    if (k.note === rootNote && highlightNotes.includes(k.note))
      return k.isBlack ? "#0F6E56" : "#9FE1CB";
    if (highlightNotes.includes(k.note))
      return k.isBlack ? "#185FA5" : "#B5D4F4";
    return k.isBlack ? "#1a1208" : "#faf6ee";
  };

  const handleClick = (k: Key) => {
    playNoteInternal(k.note, k.octave, { duration: 2.0, velocity: 0.78 });
    onNoteClick?.(k.note, k.octave);
  };

  return (
    <div className={`harmonia-piano ${className}`} style={{ width: "100%", overflowX: "auto" }}>
      {isLoading && (
        <p style={{ fontSize: 12, color: "#888", padding: "4px 0" }}>
          Chargement du piano…
        </p>
      )}
      <svg
        width="100%"
        viewBox={`0 0 ${svgW} ${svgH}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", borderRadius: 8, border: "0.5px solid #c8bfa8", background: "#f0ebe0" }}
      >
        {whites.map((k) => {
          const x = getWX(k);
          const keyId = `${k.note}:${k.octave}`;
          const hasDot = dotKeys.length > 0
            ? dotKeys.some(dk => { const p = parseDotKey(dk); return p.note === k.note && p.octave === k.octave; })
            : dotNotes.includes(k.note) && k.octave === startOctave;
          return (
            <g key={`w${k.note}${k.octave}`} style={{ cursor: "pointer" }} onClick={() => handleClick(k)}>
              <rect x={x + 0.5} y={2} width={WW - 1} height={WH} rx={4}
                fill={fill(k)} stroke="#c8bfa8" strokeWidth={0.8} />
              {hasDot && <circle cx={x + WW / 2} cy={WH - 14} r={5} fill="#E24B4A" />}
              {showLabels && (
                <text x={x + WW / 2} y={hasDot ? WH - 22 : WH - 6}
                  textAnchor="middle" fontSize={9} fill="#7a6a50"
                  style={{ pointerEvents: "none", userSelect: "none" }}>
                  {showOctaveMarkers && k.note === "Do" ? `Do${k.octave}` : k.note}
                </text>
              )}
            </g>
          );
        })}

        {blacks.map((k) => {
          const x = getBX(k);
          // Find matching dotKey (handles bémols → dièses)
          const matchingDotKey = dotKeys.find(dk => {
            const p = parseDotKey(dk);
            return p.note === k.note && p.octave === k.octave;
          });
          const hasDot = dotKeys.length > 0
            ? !!matchingDotKey
            : dotNotes.includes(k.note) && k.octave === startOctave;
          // Display label: use the original dotKey name (may be bémol) if dot present, else nothing
          const displayLabel = hasDot
            ? (matchingDotKey ? parseDotKey(matchingDotKey).displayNote : (blackKeyLabels[k.note] ?? k.note))
            : (blackKeyLabels[k.note] ?? null); // null = no label unless explicitly set
          return (
            <g key={`b${k.note}${k.octave}`} style={{ cursor: "pointer" }} onClick={() => handleClick(k)}>
              <rect x={x} y={2} width={BW} height={BH} rx={3} fill={fill(k)} />
              {hasDot && <circle cx={x + BW / 2} cy={BH - 10} r={4} fill="#E24B4A" />}
              {showLabels && hasDot && displayLabel && (
                <text x={x + BW / 2} y={BH - 17}
                  textAnchor="middle" fontSize={8} fill="#9a8a70"
                  style={{ pointerEvents: "none", userSelect: "none" }}>
                  {displayLabel}
                </text>
              )}
              {showLabels && !hasDot && blackKeyLabels[k.note] && (
                <text x={x + BW / 2} y={BH - 5}
                  textAnchor="middle" fontSize={8} fill="#9a8a70"
                  style={{ pointerEvents: "none", userSelect: "none" }}>
                  {blackKeyLabels[k.note]}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {(highlightNotes.length > 0 || dotNotes.length > 0) && (
        <div style={{ display: "flex", gap: 12, marginTop: 6, flexWrap: "wrap" }}>
          {rootNote && highlightNotes.includes(rootNote) && (
            <Legend color="#9FE1CB" text="#0F6E56" label="Fondamentale" />
          )}
          {highlightNotes.length > 0 && (
            <Legend color="#B5D4F4" text="#185FA5" label="Notes de l'accord" />
          )}
          {dotNotes.length > 0 && (
            <Legend color="#E24B4A" text="#A32D2D" label="Notes de la gamme" dot />
          )}
        </div>
      )}
    </div>
  );
});

PianoPlayer.displayName = "PianoPlayer";
export default PianoPlayer;

function Legend({ color, text, label, dot = false }: {
  color: string; text: string; label: string; dot?: boolean;
}) {
  return (
    <span style={{ fontSize: 11, color: text, display: "flex", alignItems: "center", gap: 4 }}>
      <span style={{
        display: "inline-block", width: 10, height: 10,
        borderRadius: dot ? "50%" : 2, background: color,
      }} />
      {label}
    </span>
  );
}

"use client";

/**
 * PianoPlayer v3 — Harmonia
 * soundfont-player + samples acoustic_grand_piano depuis CDN gleitz/midi-js-soundfonts
 * Seule dépendance : "soundfont-player"
 *
 * Usage :
 *   const ref = useRef<PianoPlayerRef>(null)
 *   <PianoPlayer ref={ref} highlightNotes={['Do','Mi','Sol']} rootNote="Do" />
 *   ref.current?.playChord(['Do','Mi','Sol'], 3, { arp: true })
 *   ref.current?.playSequence([
 *     { notes: ['Ré','Fa','La','Do'] },
 *     { notes: ['Sol','Si','Ré','Fa'] },
 *     { notes: ['Do','Mi','Sol','Si'] },
 *   ], { interval: 1.5 })
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

// French → MIDI note name
const FR_TO_MIDI: Record<string, string> = {
  "Do": "C",   "Do#": "C#",  "Réb": "Db",
  "Ré": "D",   "Ré#": "D#",  "Mib": "Eb",
  "Mi": "E",
  "Fa": "F",   "Fa#": "F#",  "Solb": "Gb",
  "Sol": "G",  "Sol#": "G#", "Lab": "Ab",
  "La": "A",   "La#": "A#",  "Sib": "Bb",
  "Si": "B",
};

// Bémols → dièses (unique définition, utilisée partout)
const FLAT_TO_SHARP: Record<string, string> = {
  "Réb":"Do#","Mib":"Ré#","Solb":"Fa#","Lab":"Sol#","Sib":"La#","Dob":"Si",
};

function toMidiNote(note: string, octave: number): string {
  const n = FLAT_TO_SHARP[note] ?? note;
  return `${FR_TO_MIDI[n] ?? "C"}${octave + 1}`;
}

function semiOf(note: string, octave: number): number {
  const n = FLAT_TO_SHARP[note] ?? note;
  return CHROMATIC_FR.indexOf(n) + (octave - 3) * 12;
}

function toSharp(note: string): string {
  return FLAT_TO_SHARP[note] ?? note;
}

// ─── Singleton instrument ─────────────────────────────────────────────────────

let _instrument: any = null;
let _audioCtx: AudioContext | null = null;
let _loading = false;
let _ready = false;
let _cbs: Array<() => void> = [];

function getInstrument(): Promise<any> {
  if (_ready && _instrument) return Promise.resolve(_instrument);
  return new Promise((resolve) => {
    _cbs.push(() => resolve(_instrument));
    if (_loading) return;
    _loading = true;

    if (!_audioCtx) {
      _audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    import("soundfont-player").then((Soundfont) => {
      const SF = (Soundfont as any).default ?? Soundfont;
      SF.instrument(_audioCtx, "acoustic_grand_piano", {
        soundfont: "MusyngKite",
        format: "mp3",
      }).then((inst: any) => {
        _instrument = inst;
        _ready = true;
        _cbs.forEach((cb) => cb());
        _cbs = [];
      }).catch(() => {
        // fallback: try FluidR3_GM
        SF.instrument(_audioCtx, "acoustic_grand_piano", {
          soundfont: "FluidR3_GM",
          format: "ogg",
        }).then((inst: any) => {
          _instrument = inst;
          _ready = true;
          _cbs.forEach((cb) => cb());
          _cbs = [];
        }).catch(() => {
          _ready = true; // will use synth fallback
          _cbs.forEach((cb) => cb());
          _cbs = [];
        });
      });
    });
  });
}

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
  const scheduledNotes = useRef<any[]>([]);

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

    if (_ready && _instrument) {
      const midiNote = toMidiNote(note, octave);
      const when = (_audioCtx?.currentTime ?? 0) + startTime;
      const node = _instrument.play(midiNote, when, {
        duration,
        gain: velocity,
      });
      if (node) scheduledNotes.current.push(node);
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

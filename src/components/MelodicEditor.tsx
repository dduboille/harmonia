'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import PianoPlayer, { PianoPlayerRef } from './PianoPlayer';

// ── Types ──────────────────────────────────────────────────────────────────────

type Duration = 'whole' | 'half' | 'quarter' | 'eighth';
type Voice = 'soprano' | 'alto' | 'tenor' | 'bass';

interface VNote { name: string; octave: number }

interface BeatSlot {
  id: string;
  duration: Duration;
  soprano: VNote | 'rest';
  alto:    VNote | 'rest' | null;
  tenor:   VNote | 'rest' | null;
  bass:    VNote | 'rest' | null;
}

// ── Music constants ────────────────────────────────────────────────────────────

const DURATION_BEATS: Record<Duration, number> = { whole: 4, half: 2, quarter: 1, eighth: 0.5 };
const DURATION_LABEL: Record<Duration, string>  = { whole: '𝅝 Ronde', half: '𝅗𝅥 Blanche', quarter: '♩ Noire', eighth: '♪ Croche' };

const SEMITONES: Record<string, number> = {
  C: 0, 'C#': 1, Db: 1, D: 2, 'D#': 3, Eb: 3,
  E: 4, F: 5, 'F#': 6, Gb: 6, G: 7,
  'G#': 8, Ab: 8, A: 9, 'A#': 10, Bb: 10, B: 11,
};

const DIATONIC: Record<string, number> = { C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6 };

const EN_TO_FR: Record<string, string> = {
  C: 'Do', 'C#': 'Do♯', Db: 'Ré♭', D: 'Ré', 'D#': 'Ré♯',
  Eb: 'Mi♭', E: 'Mi', F: 'Fa', 'F#': 'Fa♯', Gb: 'Sol♭',
  G: 'Sol', 'G#': 'Sol♯', Ab: 'La♭', A: 'La', 'A#': 'La♯',
  Bb: 'Si♭', B: 'Si',
};

const NATURAL_KEYS = ['C', 'D', 'E', 'F', 'G', 'A', 'B'] as const;
const KEY_COLORS: Record<string, string> = {
  C: '#E53E3E', D: '#DD6B20', E: '#D69E2E',
  F: '#38A169', G: '#3182CE', A: '#805AD5', B: '#D53F8C',
};

const VOICE_CONFIG: Record<Voice, {
  label: string; fullLabel: string; color: string;
  clef: 'treble' | 'bass'; stemUp: boolean;
  defaultOctave: number; rangeMin: number; rangeMax: number;
}> = {
  soprano: { label: 'S', fullLabel: 'Soprano', color: '#5C3D6E', clef: 'treble', stemUp: true,  defaultOctave: 5, rangeMin: 60, rangeMax: 79 },
  alto:    { label: 'A', fullLabel: 'Alto',    color: '#185FA5', clef: 'treble', stemUp: false, defaultOctave: 4, rangeMin: 55, rangeMax: 72 },
  tenor:   { label: 'T', fullLabel: 'Ténor',   color: '#0F6E56', clef: 'bass',   stemUp: true,  defaultOctave: 4, rangeMin: 48, rangeMax: 67 },
  bass:    { label: 'B', fullLabel: 'Basse',   color: '#BA7517', clef: 'bass',   stemUp: false, defaultOctave: 3, rangeMin: 40, rangeMax: 60 },
};

const INTERVAL_NAMES: Record<number, string> = {
  0: 'unisson', 1: 'seconde ♭', 2: 'seconde', 3: 'tierce ♭',
  4: 'tierce', 5: 'quarte', 6: 'triton', 7: 'quinte',
  8: 'sixte ♭', 9: 'sixte', 10: 'septième ♭', 11: 'septième', 12: 'octave',
};

const MAJOR_SCALE = [0, 2, 4, 5, 7, 9, 11];
const MINOR_SCALE = [0, 2, 3, 5, 7, 8, 10];
const CHROMATIC_ROOTS = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];

// ── Staff geometry ─────────────────────────────────────────────────────────────

const HS     = 10;           // pixels per diatonic half-step
const CLEF_W = 70;
const TIME_W = 28;
const HEAD_W = CLEF_W + TIME_W;
const BEAT_W = 60;
const NRX    = 8;
const NRY    = 6;
const STAFF_LINES = [0, 2, 4, 6, 8];

const T_BOT  = 150;          // y of treble staff lowest line
const B_BOT  = 340;          // y of bass staff lowest line
const SVG_H  = 440;

function toMidi(name: string, octave: number): number {
  return (octave + 1) * 12 + (SEMITONES[name] ?? 0);
}

function trebleStep(name: string, octave: number): number {
  const base = name.replace(/[#b]/g, '');
  return (DIATONIC[base] ?? 0) + (octave - 4) * 7 - 2; // E4 = step 0
}

function bassStep(name: string, octave: number): number {
  return trebleStep(name, octave) + 12; // G2 = step 0
}

function getLedgers(step: number): number[] {
  const ls: number[] = [];
  if (step < 0)  { const top = 2 * Math.ceil(step / 2);  for (let s = -2; s >= top; s -= 2) ls.push(s); }
  if (step > 8)  { const bot = 2 * Math.floor(step / 2); for (let s = 10; s <= bot; s += 2) ls.push(s); }
  return ls;
}

// ── Voice leading validation ───────────────────────────────────────────────────

interface VError {
  slot: number;
  type: 'parallel5' | 'parallel8' | 'crossing' | 'spacing' | 'range';
  msg: string;
}

function validateSlots(slots: BeatSlot[]): VError[] {
  const errs: VError[] = [];

  for (let i = 0; i < slots.length; i++) {
    const s = slots[i];
    const prev = i > 0 ? slots[i - 1] : null;

    // Crossing
    if (s.soprano && s.soprano !== 'rest' && s.alto && s.alto !== 'rest' && toMidi(s.soprano.name, s.soprano.octave) < toMidi(s.alto.name, s.alto.octave))
      errs.push({ slot: i, type: 'crossing', msg: 'Soprano sous l\'alto' });
    if (s.alto && s.alto !== 'rest' && s.tenor && s.tenor !== 'rest' && toMidi(s.alto.name, s.alto.octave) < toMidi(s.tenor.name, s.tenor.octave))
      errs.push({ slot: i, type: 'crossing', msg: 'Alto sous le ténor' });
    if (s.tenor && s.tenor !== 'rest' && s.bass && s.bass !== 'rest' && toMidi(s.tenor.name, s.tenor.octave) < toMidi(s.bass.name, s.bass.octave))
      errs.push({ slot: i, type: 'crossing', msg: 'Ténor sous la basse' });

    // Spacing > octave (S–A, A–T)
    const spacePairs: [Voice, Voice][] = [['soprano', 'alto'], ['alto', 'tenor']];
    for (const [u, l] of spacePairs) {
      const un = s[u], ln = s[l];
      if (un && un !== 'rest' && ln && ln !== 'rest' && toMidi(un.name, un.octave) - toMidi(ln.name, ln.octave) > 12)
        errs.push({ slot: i, type: 'spacing', msg: `${VOICE_CONFIG[u].fullLabel}–${VOICE_CONFIG[l].fullLabel} > octave` });
    }

    // Range
    for (const v of ['soprano', 'alto', 'tenor', 'bass'] as Voice[]) {
      const n = s[v];
      if (n && n !== 'rest') {
        const midi = toMidi(n.name, n.octave);
        const { rangeMin, rangeMax, fullLabel } = VOICE_CONFIG[v];
        if (midi < rangeMin || midi > rangeMax)
          errs.push({ slot: i, type: 'range', msg: `${fullLabel} hors tessiture` });
      }
    }

    // Parallels (between consecutive slots)
    if (!prev) continue;
    const vPairs: [Voice, Voice][] = [
      ['soprano', 'alto'], ['soprano', 'tenor'], ['soprano', 'bass'],
      ['alto', 'tenor'], ['alto', 'bass'], ['tenor', 'bass'],
    ];
    for (const [v1, v2] of vPairs) {
      const p1 = prev[v1], p2 = prev[v2], c1 = s[v1], c2 = s[v2];
      if (!p1 || p1 === 'rest' || !p2 || p2 === 'rest' || !c1 || c1 === 'rest' || !c2 || c2 === 'rest') continue;
      const pi = Math.abs(toMidi(p1.name, p1.octave) - toMidi(p2.name, p2.octave)) % 12;
      const ci = Math.abs(toMidi(c1.name, c1.octave) - toMidi(c2.name, c2.octave)) % 12;
      const d1 = toMidi(c1.name, c1.octave) - toMidi(p1.name, p1.octave);
      const d2 = toMidi(c2.name, c2.octave) - toMidi(p2.name, p2.octave);
      const par = (d1 !== 0 || d2 !== 0) && Math.sign(d1) === Math.sign(d2);
      if (par && pi === 7 && ci === 7)
        errs.push({ slot: i, type: 'parallel5', msg: `Quintes ‖ ${VOICE_CONFIG[v1].label}–${VOICE_CONFIG[v2].label}` });
      if (par && pi === 0 && ci === 0)
        errs.push({ slot: i, type: 'parallel8', msg: `Octaves ‖ ${VOICE_CONFIG[v1].label}–${VOICE_CONFIG[v2].label}` });
    }
  }

  return errs;
}

// ── Melodic analysis (soprano) ────────────────────────────────────────────────

function sopranoAnalysis(slots: BeatSlot[]) {
  const mel = slots.map(s => s.soprano).filter((s): s is VNote => s !== 'rest');
  if (mel.length < 2) return { intervals: [] as string[], scale: null as string | null, ambitus: null as { low: string; high: string } | null };

  const intervals = mel.slice(1).map((n, i) => {
    const diff = Math.abs(toMidi(n.name, n.octave) - toMidi(mel[i].name, mel[i].octave));
    return INTERVAL_NAMES[diff] ?? `${diff} ½t`;
  });

  const pcs = new Set(mel.map(n => SEMITONES[n.name] ?? 0));
  let bestScore = 0, scale: string | null = null;
  for (let root = 0; root < 12; root++) {
    for (const [pat, suf] of [[MAJOR_SCALE, 'majeur'], [MINOR_SCALE, 'mineur']] as const) {
      const sc = new Set((pat as number[]).map(i => (root + i) % 12));
      const score = [...pcs].filter(p => sc.has(p)).length;
      if (score > bestScore) {
        bestScore = score;
        scale = `${EN_TO_FR[CHROMATIC_ROOTS[root]] ?? CHROMATIC_ROOTS[root]} ${suf}`;
      }
    }
  }
  if (bestScore / pcs.size < 0.75) scale = null;

  const midis = mel.map(n => toMidi(n.name, n.octave));
  const lo = mel[midis.indexOf(Math.min(...midis))];
  const hi = mel[midis.indexOf(Math.max(...midis))];
  const fmt = (n: VNote) => `${EN_TO_FR[n.name] ?? n.name}${n.octave}`;
  const ambitus = { low: fmt(lo), high: fmt(hi) };

  return { intervals, scale, ambitus };
}

// ── Note head SVG ─────────────────────────────────────────────────────────────

function NoteHead({ x, y, color, duration, stemUp }: {
  x: number; y: number; color: string; duration: Duration; stemUp: boolean;
}) {
  const filled  = duration === 'quarter' || duration === 'eighth';
  const hasStem = duration !== 'whole';
  const sy = stemUp ? y - 30 : y + 30;
  const sx = stemUp ? x + NRX : x - NRX;

  return (
    <g>
      {hasStem && <line x1={sx} y1={y} x2={sx} y2={sy} stroke={color} strokeWidth="1.5" />}
      {duration === 'eighth' && (
        <path
          d={stemUp
            ? `M ${sx} ${sy} Q ${x + 22} ${sy + 10} ${x + 14} ${sy + 18}`
            : `M ${sx} ${sy} Q ${x - 22} ${sy - 10} ${x - 14} ${sy - 18}`}
          fill="none" stroke={color} strokeWidth="1.5" />
      )}
      <ellipse cx={x} cy={y} rx={NRX} ry={NRY}
        fill={filled ? color : '#fff'} stroke={color} strokeWidth="1.4"
        transform={`rotate(-15,${x},${y})`} />
      {duration === 'whole' && (
        <ellipse cx={x} cy={y} rx={NRX - 3} ry={NRY - 2.5}
          fill="#fff" stroke="none" transform={`rotate(-15,${x},${y})`} />
      )}
    </g>
  );
}

// ── One voice note on staff ───────────────────────────────────────────────────

function VoiceNoteEl({ x, bot, step, note, voice, isCursor, duration }: {
  x: number; bot: number; step: number; note: VNote; voice: Voice; isCursor: boolean; duration: Duration;
}) {
  const { color, stemUp } = VOICE_CONFIG[voice];
  const y = bot - step * HS;
  const ledgers = getLedgers(step);
  const acc = note.name.includes('#') ? '♯' : note.name.includes('b') && !note.name.startsWith('B') ? '♭' : '';
  const lineColor = isCursor ? '#BA7517' : color;
  return (
    <g>
      {ledgers.map(ls => (
        <line key={ls} x1={x - 14} y1={bot - ls * HS} x2={x + 14} y2={bot - ls * HS} stroke="#555" strokeWidth="1.2" />
      ))}
      {acc && <text x={x - 18} y={y + 5} fontSize="13" fontFamily="serif" fill={lineColor} textAnchor="middle">{acc}</text>}
      <NoteHead x={x} y={y} color={lineColor} duration={duration} stemUp={stemUp} />
    </g>
  );
}

// ── Rest SVG ──────────────────────────────────────────────────────────────────

function RestEl({ x, bot, duration, color }: { x: number; bot: number; duration: Duration; color: string }) {
  const RW = 16;
  switch (duration) {
    case 'whole':
      return <rect x={x - RW / 2} y={bot - 6 * HS} width={RW} height={HS - 2} fill={color} />;
    case 'half':
      return <rect x={x - RW / 2} y={bot - 4 * HS - (HS - 2)} width={RW} height={HS - 2} fill={color} />;
    case 'quarter':
      return <text x={x} y={bot - 3 * HS + 8} fontSize="22" fontFamily="'Times New Roman',serif" fill={color} textAnchor="middle">𝄽</text>;
    case 'eighth':
      return <text x={x} y={bot - 3 * HS + 8} fontSize="22" fontFamily="'Times New Roman',serif" fill={color} textAnchor="middle">𝄾</text>;
  }
}

// ── Grand Staff SVG ────────────────────────────────────────────────────────────

function GrandStaff({ slots, activeVoice, cursorSlot, errors, bpm }: {
  slots: BeatSlot[]; activeVoice: Voice; cursorSlot: number;
  errors: VError[]; bpm: number;
}) {
  let cum = 0;
  const xs: number[] = [];
  for (const s of slots) { xs.push(HEAD_W + 20 + cum * BEAT_W); cum += DURATION_BEATS[s.duration]; }

  const totalBeats = Math.max(bpm * 4, cum);
  const W = Math.max(700, HEAD_W + 20 + totalBeats * BEAT_W + 60);
  const barXs: number[] = [];
  for (let m = 1; m <= Math.ceil(totalBeats / bpm); m++) {
    const bx = HEAD_W + 20 + m * bpm * BEAT_W;
    if (bx < W - 5) barXs.push(bx);
  }
  const fX = W - 10;

  const errSlots = new Set(errors.map(e => e.slot));

  return (
    <svg width={W} height={SVG_H} style={{ display: 'block', minWidth: W }}>

      {/* Staff lines — treble */}
      {STAFF_LINES.map(s => (
        <line key={`t${s}`} x1={10} y1={T_BOT - s * HS} x2={W - 10} y2={T_BOT - s * HS} stroke="#555" strokeWidth="0.8" />
      ))}
      {/* Staff lines — bass */}
      {STAFF_LINES.map(s => (
        <line key={`b${s}`} x1={10} y1={B_BOT - s * HS} x2={W - 10} y2={B_BOT - s * HS} stroke="#555" strokeWidth="0.8" />
      ))}

      {/* System barline (connects both staves) */}
      <line x1={10} y1={T_BOT - 8 * HS} x2={10} y2={B_BOT} stroke="#555" strokeWidth="1.4" />

      {/* Bracket — visual brace between the two staves */}
      <rect x={4} y={T_BOT - 8 * HS} width={5} height={B_BOT - T_BOT + 8 * HS} rx={2} fill="#555" />
      <ellipse cx={4} cy={T_BOT - 8 * HS} rx={6} ry={10} fill="#555" />
      <ellipse cx={4} cy={B_BOT} rx={6} ry={10} fill="#555" />

      {/* Clef — treble: baseline at G4 line (2nd from bottom) */}
      <text x={14} y={T_BOT - 2 * HS} fontSize="95" fontFamily="'Times New Roman',Georgia,serif" fill="#1a1a1a">𝄞</text>
      {/* Clef — bass: baseline at 3rd line so dots bracket F3 (4th line) */}
      <text x={15} y={B_BOT - 4 * HS} fontSize="54" fontFamily="'Times New Roman',Georgia,serif" fill="#1a1a1a">𝄢</text>

      {/* Time signatures */}
      {[T_BOT, B_BOT].map((bot, bi) => (
        <g key={bi}>
          <text x={CLEF_W + TIME_W / 2} y={bot - 5 * HS + 4} fontSize="18" fontFamily="'Times New Roman',Georgia,serif" fill="#1a1a1a" textAnchor="middle" fontWeight="bold">{bpm}</text>
          <text x={CLEF_W + TIME_W / 2} y={bot - HS + 4} fontSize="18" fontFamily="'Times New Roman',Georgia,serif" fill="#1a1a1a" textAnchor="middle" fontWeight="bold">4</text>
        </g>
      ))}

      {/* Opening barlines */}
      <line x1={HEAD_W} y1={T_BOT - 8 * HS} x2={HEAD_W} y2={T_BOT} stroke="#555" strokeWidth="1" />
      <line x1={HEAD_W} y1={B_BOT - 8 * HS} x2={HEAD_W} y2={B_BOT} stroke="#555" strokeWidth="1" />

      {/* Measure barlines */}
      {barXs.map((bx, i) => (
        <g key={i}>
          <line x1={bx} y1={T_BOT - 8 * HS} x2={bx} y2={T_BOT} stroke="#555" strokeWidth="0.9" />
          <line x1={bx} y1={B_BOT - 8 * HS} x2={bx} y2={B_BOT} stroke="#555" strokeWidth="0.9" />
        </g>
      ))}

      {/* Final barline */}
      <line x1={fX - 3} y1={T_BOT - 8 * HS} x2={fX - 3} y2={T_BOT} stroke="#555" strokeWidth="0.9" />
      <line x1={fX}     y1={T_BOT - 8 * HS} x2={fX}     y2={T_BOT} stroke="#555" strokeWidth="2.5" />
      <line x1={fX - 3} y1={B_BOT - 8 * HS} x2={fX - 3} y2={B_BOT} stroke="#555" strokeWidth="0.9" />
      <line x1={fX}     y1={B_BOT - 8 * HS} x2={fX}     y2={B_BOT} stroke="#555" strokeWidth="2.5" />

      {/* Measure numbers */}
      {Array.from({ length: Math.ceil(totalBeats / bpm) }, (_, m) => (
        <text key={m} x={HEAD_W + 20 + m * bpm * BEAT_W + 3} y={T_BOT - 8 * HS - 12} fontSize="9" fontFamily="system-ui" fill="#bbb">{m + 1}</text>
      ))}

      {/* Beat slots */}
      {slots.map((slot, i) => {
        const x = xs[i];
        const isCursor = i === cursorSlot && activeVoice !== 'soprano';
        const hasErr   = errSlots.has(i);

        return (
          <g key={slot.id}>
            {/* Cursor highlight column */}
            {isCursor && (
              <rect x={x - 15} y={T_BOT - 8 * HS - 4} width={30} height={B_BOT - T_BOT + 8 * HS + 8}
                fill={hasErr ? 'rgba(220,38,38,0.06)' : 'rgba(186,117,23,0.08)'} rx={4} />
            )}
            {/* Error dot */}
            {hasErr && <circle cx={x} cy={T_BOT - 8 * HS - 14} r={4} fill="#dc2626" />}

            {/* Soprano (treble) */}
            {slot.soprano === 'rest'
              ? <RestEl x={x} bot={T_BOT} duration={slot.duration} color={VOICE_CONFIG.soprano.color} />
              : <VoiceNoteEl x={x} bot={T_BOT} step={trebleStep(slot.soprano.name, slot.soprano.octave)}
                  note={slot.soprano} voice="soprano" isCursor={i === cursorSlot && activeVoice === 'soprano'}
                  duration={slot.duration} />
            }

            {/* Alto (treble) */}
            {slot.alto === 'rest'
              ? <RestEl x={x} bot={T_BOT} duration={slot.duration} color={VOICE_CONFIG.alto.color} />
              : slot.alto && <VoiceNoteEl x={x} bot={T_BOT} step={trebleStep(slot.alto.name, slot.alto.octave)}
                  note={slot.alto} voice="alto" isCursor={i === cursorSlot && activeVoice === 'alto'}
                  duration={slot.duration} />
            }

            {/* Tenor (bass) */}
            {slot.tenor === 'rest'
              ? <RestEl x={x} bot={B_BOT} duration={slot.duration} color={VOICE_CONFIG.tenor.color} />
              : slot.tenor && <VoiceNoteEl x={x} bot={B_BOT} step={bassStep(slot.tenor.name, slot.tenor.octave)}
                  note={slot.tenor} voice="tenor" isCursor={i === cursorSlot && activeVoice === 'tenor'}
                  duration={slot.duration} />
            }

            {/* Bass (bass) */}
            {slot.bass === 'rest'
              ? <RestEl x={x} bot={B_BOT} duration={slot.duration} color={VOICE_CONFIG.bass.color} />
              : slot.bass && <VoiceNoteEl x={x} bot={B_BOT} step={bassStep(slot.bass.name, slot.bass.octave)}
                  note={slot.bass} voice="bass" isCursor={i === cursorSlot && activeVoice === 'bass'}
                  duration={slot.duration} />
            }

            {/* Completion dots below bass staff */}
            <text x={x} y={B_BOT + 28} fontSize="8" fontFamily="system-ui" fill="#ccc" textAnchor="middle">
              {(['soprano', 'alto', 'tenor', 'bass'] as Voice[]).map(v =>
                slot[v] === 'rest' ? '-' : slot[v] ? VOICE_CONFIG[v].label : '·'
              ).join(' ')}
            </text>
          </g>
        );
      })}

      {/* Empty hint */}
      {slots.length === 0 && (
        <text x={HEAD_W + 24} y={T_BOT - 4 * HS} fontSize="12" fontFamily="system-ui" fill="#bbb">
          Sélectionnez Soprano, choisissez une durée, puis saisissez la mélodie →
        </text>
      )}
    </svg>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────

export default function MelodicEditor() {
  const [slots, setSlots]             = useState<BeatSlot[]>([]);
  const [activeVoice, setActiveVoice] = useState<Voice>('soprano');
  const [cursorSlot, setCursorSlot]   = useState(0);
  const [duration, setDuration]       = useState<Duration>('quarter');
  const [accidental, setAccidental]   = useState<'' | '#' | 'b'>('');
  const [octaves, setOctaves]         = useState<Record<Voice, number>>({
    soprano: 5, alto: 4, tenor: 4, bass: 3,
  });
  const [bpm, setBpm]     = useState(4);
  const [tempo, setTempo] = useState(80);

  const pianoRef = useRef<PianoPlayerRef>(null);

  const errors                    = useMemo(() => validateSlots(slots), [slots]);
  const { intervals, scale, ambitus } = useMemo(() => sopranoAnalysis(slots), [slots]);

  const handleKeyClick = useCallback((naturalKey: string) => {
    const noteName = accidental ? `${naturalKey}${accidental}` : naturalKey;
    const octave   = octaves[activeVoice];

    if (activeVoice === 'soprano') {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      setSlots(prev => {
        const next: BeatSlot[] = [...prev, { id, duration, soprano: { name: noteName, octave }, alto: null, tenor: null, bass: null }];
        setCursorSlot(next.length - 1);
        return next;
      });
    } else {
      setSlots(prev => {
        if (cursorSlot < 0 || cursorSlot >= prev.length) return prev;
        const next = [...prev];
        next[cursorSlot] = { ...next[cursorSlot], [activeVoice]: { name: noteName, octave } };
        return next;
      });
      // Auto-advance to next slot after filling bass
      if (activeVoice === 'bass') {
        setCursorSlot(c => Math.min(c + 1, slots.length - 1));
      }
    }

    pianoRef.current?.playVoicing([`${noteName}:${octave - 1}`], { duration: 0.45, velocity: 0.8 });
  }, [activeVoice, accidental, duration, octaves, cursorSlot, slots.length]);

  const handleRestClick = useCallback(() => {
    if (activeVoice === 'soprano') {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      setSlots(prev => {
        const next: BeatSlot[] = [...prev, { id, duration, soprano: 'rest', alto: null, tenor: null, bass: null }];
        setCursorSlot(next.length - 1);
        return next;
      });
    } else {
      setSlots(prev => {
        if (cursorSlot < 0 || cursorSlot >= prev.length) return prev;
        const next = [...prev];
        next[cursorSlot] = { ...next[cursorSlot], [activeVoice]: 'rest' };
        return next;
      });
      if (activeVoice === 'bass') setCursorSlot(c => Math.min(c + 1, slots.length - 1));
    }
  }, [activeVoice, duration, cursorSlot, slots.length]);

  const handleClearVoice = useCallback(() => {
    if (activeVoice === 'soprano') return;
    setSlots(prev => {
      if (cursorSlot < 0 || cursorSlot >= prev.length) return prev;
      const next = [...prev];
      next[cursorSlot] = { ...next[cursorSlot], [activeVoice]: null };
      return next;
    });
  }, [activeVoice, cursorSlot]);

  const handleDeleteLast = () => {
    setSlots(prev => {
      const next = prev.slice(0, -1);
      setCursorSlot(Math.max(0, next.length - 1));
      return next;
    });
  };

  const handlePlay = useCallback(() => {
    if (!pianoRef.current || slots.length === 0) return;
    const beatSec = 60 / tempo;
    let t = 0;
    for (const s of slots) {
      const dur = DURATION_BEATS[s.duration] * beatSec;
      const keys: string[] = [];
      if (s.soprano && s.soprano !== 'rest') keys.push(`${s.soprano.name}:${s.soprano.octave - 1}`);
      if (s.alto    && s.alto    !== 'rest') keys.push(`${s.alto.name}:${s.alto.octave - 1}`);
      if (s.tenor   && s.tenor   !== 'rest') keys.push(`${s.tenor.name}:${s.tenor.octave - 1}`);
      if (s.bass    && s.bass    !== 'rest') keys.push(`${s.bass.name}:${s.bass.octave - 1}`);
      if (keys.length) pianoRef.current.playVoicing(keys, { startTime: t, duration: dur * 0.9, velocity: 0.75 });
      t += dur;
    }
  }, [slots, tempo]);

  // ── Styles ──

  const btn: React.CSSProperties = {
    padding: '5px 10px', minHeight: 34, borderRadius: 6, fontSize: 12,
    fontFamily: 'system-ui, sans-serif', cursor: 'pointer', fontWeight: 400,
    border: '0.5px solid #e0dbd3', background: '#fff', color: '#444',
  };
  const btnOn: React.CSSProperties = { ...btn, border: '0.5px solid #1a1a1a', background: '#1a1a1a', color: '#fff', fontWeight: 600 };

  const hasSoprano = slots.length > 0;
  const voiceComplete = (v: Voice) => slots.every(s => s[v] !== null);

  return (
    <main style={{ minHeight: '100vh', background: '#f4f1ec', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: 1040, margin: '0 auto' }}>

        {/* ── Header ─────────────────────────────────────────────────── */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: '#BA7517', textTransform: 'uppercase', marginBottom: 4 }}>
            Outil d'entraînement
          </div>
          <h1 style={{ fontSize: 24, fontWeight: 500, color: '#1a1a1a', margin: '0 0 4px' }}>
            Harmonisation mélodique
          </h1>
          <p style={{ fontSize: 13, color: '#888', margin: 0, fontFamily: 'system-ui, sans-serif' }}>
            Grand staff SATB — portée Sol (soprano · alto), portée Fa (ténor · basse). Validation voix en temps réel.
          </p>
        </div>

        {/* ── Controls bar ───────────────────────────────────────────── */}
        <div style={{ background: '#fff', border: '0.5px solid #e8e3db', borderRadius: 10, padding: '12px 16px', marginBottom: 12, display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: '#888', marginRight: 4 }}>CHIFFRAGE</span>
            {([4, 3, 2] as const).map(b => (
              <button key={b} onClick={() => setBpm(b)} style={bpm === b ? btnOn : btn}>{b}/4</button>
            ))}
          </div>
          <div style={{ width: 1, height: 28, background: '#e0dbd3' }} />
          <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: '#888', marginRight: 4 }}>DURÉE</span>
            {(['whole', 'half', 'quarter', 'eighth'] as Duration[]).map(d => (
              <button key={d} onClick={() => setDuration(d)} style={duration === d ? btnOn : btn}>
                {DURATION_LABEL[d]}
              </button>
            ))}
          </div>
          <div style={{ width: 1, height: 28, background: '#e0dbd3' }} />
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: '#888' }}>♩=</span>
            <input type="range" min={40} max={160} value={tempo} onChange={e => setTempo(+e.target.value)} style={{ width: 80, accentColor: '#1a1a1a' }} />
            <span style={{ fontSize: 12, color: '#555', fontFamily: 'monospace', minWidth: 28 }}>{tempo}</span>
          </div>
        </div>

        {/* ── Grand staff ────────────────────────────────────────────── */}
        <div style={{ background: '#fff', border: '0.5px solid #e8e3db', borderRadius: 10, padding: '16px', marginBottom: 12, overflowX: 'auto' }}>
          <GrandStaff slots={slots} activeVoice={activeVoice} cursorSlot={cursorSlot} errors={errors} bpm={bpm} />
        </div>

        {/* Hidden audio engine */}
        <div style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', height: 0, overflow: 'hidden' }}>
          <PianoPlayer ref={pianoRef} octaves={5} startOctave={1} showLabels={false} />
        </div>

        {/* ── Input panel ────────────────────────────────────────────── */}
        <div style={{ background: '#fff', border: '0.5px solid #e8e3db', borderRadius: 10, padding: '16px 20px', marginBottom: 12 }}>

          {/* Voice selector */}
          <div style={{ display: 'flex', gap: 6, marginBottom: 14, alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: '#888', letterSpacing: '0.06em', marginRight: 4 }}>VOIX ACTIVE</span>
            {(['soprano', 'alto', 'tenor', 'bass'] as Voice[]).map(v => {
              const cfg   = VOICE_CONFIG[v];
              const isOn  = activeVoice === v;
              const done  = v !== 'soprano' && hasSoprano && voiceComplete(v);
              return (
                <button key={v} onClick={() => setActiveVoice(v)} style={{
                  padding: '7px 16px', borderRadius: 8, fontFamily: 'system-ui, sans-serif',
                  border: `1.5px solid ${isOn ? cfg.color : '#e0dbd3'}`,
                  background: isOn ? cfg.color : done ? cfg.color + '18' : '#fff',
                  color: isOn ? '#fff' : done ? cfg.color : '#666',
                  fontSize: 13, fontWeight: isOn ? 700 : 400, cursor: 'pointer', transition: 'all .15s',
                  display: 'flex', gap: 6, alignItems: 'center',
                }}>
                  <span style={{ fontWeight: 800 }}>{cfg.label}</span>
                  <span style={{ fontSize: 10, opacity: 0.8 }}>{cfg.fullLabel}</span>
                  {done && <span style={{ fontSize: 10 }}>✓</span>}
                </button>
              );
            })}
          </div>

          {/* Status bar */}
          <div style={{ background: '#f4f1ec', borderRadius: 8, padding: '8px 14px', marginBottom: 14, fontSize: 12, color: '#666', fontFamily: 'system-ui, sans-serif', display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <span>
              <span style={{ color: '#aaa' }}>Voix : </span>
              <strong style={{ color: VOICE_CONFIG[activeVoice].color }}>{VOICE_CONFIG[activeVoice].fullLabel}</strong>
            </span>
            <span style={{ color: '#e0dbd3' }}>·</span>
            <span>
              <span style={{ color: '#aaa' }}>Portée : </span>
              <strong>{VOICE_CONFIG[activeVoice].clef === 'treble' ? '𝄞 Sol' : '𝄢 Fa'}</strong>
            </span>
            <span style={{ color: '#e0dbd3' }}>·</span>
            <span>
              <span style={{ color: '#aaa' }}>Octave : </span>
              <strong style={{ fontFamily: 'monospace' }}>{octaves[activeVoice]}</strong>
            </span>
            {activeVoice !== 'soprano' && hasSoprano && (
              <>
                <span style={{ color: '#e0dbd3' }}>·</span>
                <span>
                  <span style={{ color: '#aaa' }}>Note : </span>
                  <strong>{cursorSlot + 1}/{slots.length}</strong>
                </span>
                <span style={{ display: 'flex', gap: 4 }}>
                  <button onClick={() => setCursorSlot(c => Math.max(0, c - 1))} style={{ ...btn, padding: '2px 8px' }}>←</button>
                  <button onClick={() => setCursorSlot(c => Math.min(slots.length - 1, c + 1))} style={{ ...btn, padding: '2px 8px' }}>→</button>
                </span>
                <button onClick={handleClearVoice} style={{ ...btn, fontSize: 11, color: '#c0392b' }}>
                  Effacer cette voix
                </button>
              </>
            )}
          </div>

          {/* Alteration selector */}
          <div style={{ display: 'flex', gap: 6, marginBottom: 12, alignItems: 'center' }}>
            <span style={{ fontSize: 11, color: '#aaa', marginRight: 4 }}>Altération</span>
            {([['♭', 'b'], ['♮', ''], ['♯', '#']] as [string, '' | '#' | 'b'][]).map(([sym, val]) => (
              <button key={val} onClick={() => setAccidental(val)} style={{
                width: 36, height: 36, borderRadius: 8, fontFamily: 'serif', fontSize: 17,
                border: `1.5px solid ${accidental === val ? '#1a1a1a' : '#e0dbd3'}`,
                background: accidental === val ? '#1a1a1a' : '#fff',
                color: accidental === val ? '#fff' : '#555',
                cursor: 'pointer',
              }}>{sym}</button>
            ))}
          </div>

          {/* 7 natural keys + rest */}
          <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
            {NATURAL_KEYS.map(k => (
              <button key={k} onClick={() => handleKeyClick(k)} style={{
                flex: 1, padding: '14px 0', borderRadius: 8, fontSize: 18, fontWeight: 700,
                border: `1.5px solid ${KEY_COLORS[k]}`,
                background: KEY_COLORS[k] + '18',
                color: KEY_COLORS[k], cursor: 'pointer',
                fontFamily: 'system-ui, sans-serif',
              }}>
                {EN_TO_FR[k] ?? k}
              </button>
            ))}
            <button onClick={handleRestClick} style={{
              flex: 1, padding: '14px 0', borderRadius: 8, fontSize: 20, fontWeight: 700,
              border: '1.5px solid #999',
              background: '#f0ede8',
              color: '#666', cursor: 'pointer',
              fontFamily: "'Times New Roman', serif",
              letterSpacing: 0,
            }} title="Insérer un silence">
              𝄽
            </button>
          </div>

          {/* Octave + action buttons */}
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontSize: 11, color: '#aaa' }}>Octave</span>
            <button onClick={() => setOctaves(o => ({ ...o, [activeVoice]: o[activeVoice] - 1 }))} style={{ ...btn, padding: '5px 12px' }}>▼</button>
            <span style={{ fontSize: 14, fontFamily: 'monospace', color: '#1a1a1a', minWidth: 20, textAlign: 'center' }}>{octaves[activeVoice]}</span>
            <button onClick={() => setOctaves(o => ({ ...o, [activeVoice]: o[activeVoice] + 1 }))} style={{ ...btn, padding: '5px 12px' }}>▲</button>
            <div style={{ flex: 1 }} />
            <button onClick={handlePlay} disabled={!hasSoprano} style={{ ...btnOn, padding: '8px 20px', opacity: hasSoprano ? 1 : 0.4 }}>
              ▶ Écouter
            </button>
            <button onClick={handleDeleteLast} disabled={!hasSoprano} style={{ ...btn, padding: '8px 14px', color: '#c0392b', opacity: hasSoprano ? 1 : 0.4 }}>
              ⌫ Suppr. dernière
            </button>
            <button onClick={() => { setSlots([]); setCursorSlot(0); }} disabled={!hasSoprano} style={{ ...btn, padding: '8px 14px', opacity: hasSoprano ? 1 : 0.4 }}>
              ✕ Effacer tout
            </button>
          </div>
        </div>

        {/* ── Analysis & Errors ───────────────────────────────────────── */}
        {(errors.length > 0 || slots.length >= 2) && (
          <div style={{ display: 'grid', gridTemplateColumns: errors.length > 0 && slots.length >= 2 ? '1fr 1fr' : '1fr', gap: 12 }}>

            {/* Validation errors */}
            {errors.length > 0 && (
              <div style={{ background: '#fff', border: '0.5px solid #e8e3db', borderRadius: 10, padding: '14px 18px' }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#c0392b', letterSpacing: '0.1em', marginBottom: 10, textTransform: 'uppercase' }}>
                  Erreurs détectées — {errors.length}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                  {errors.slice(0, 10).map((e, i) => (
                    <div key={i} style={{ display: 'flex', gap: 8, fontSize: 12, fontFamily: 'system-ui, sans-serif' }}>
                      <span style={{ color: '#c0392b', flexShrink: 0 }}>✗</span>
                      <span style={{ color: '#444' }}>Note {e.slot + 1} — {e.msg}</span>
                    </div>
                  ))}
                  {errors.length > 10 && <div style={{ fontSize: 11, color: '#aaa', fontFamily: 'system-ui' }}>+{errors.length - 10} autres…</div>}
                </div>
              </div>
            )}

            {/* Melodic analysis — soprano */}
            {slots.length >= 2 && (
              <div style={{ background: '#fff', border: '0.5px solid #e8e3db', borderRadius: 10, padding: '14px 18px' }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#5C3D6E', letterSpacing: '0.1em', marginBottom: 10, textTransform: 'uppercase' }}>
                  Analyse soprano
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontFamily: 'system-ui, sans-serif', fontSize: 12 }}>
                  {scale && (
                    <div><span style={{ color: '#888' }}>Gamme probable : </span><strong>{scale}</strong></div>
                  )}
                  {ambitus && (
                    <div><span style={{ color: '#888' }}>Ambitus : </span><strong>{ambitus.low}</strong> → <strong>{ambitus.high}</strong></div>
                  )}
                  {intervals.length > 0 && (
                    <div>
                      <div style={{ color: '#888', marginBottom: 4 }}>Intervalles :</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                        {intervals.map((iv, i) => (
                          <span key={i} style={{ background: '#f4f1ec', borderRadius: 20, padding: '2px 8px', fontSize: 11, color: '#555' }}>{iv}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </main>
  );
}

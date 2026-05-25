'use client';

import React, { useState, useRef, useCallback, useMemo } from 'react';
import PianoPlayer, { PianoPlayerRef } from './PianoPlayer';
import { useLilyPond } from './music/useLilyPond';
import type { MelodicNote, IntervalInfo, MelodyAnalysis, Duration } from '@/types/melody';

// ── Note data ─────────────────────────────────────────────────────────────────

const FR_TO_EN: Record<string, string> = {
  'Do': 'C', 'Do#': 'C#', 'Ré': 'D', 'Ré#': 'D#', 'Mi': 'E',
  'Fa': 'F', 'Fa#': 'F#', 'Sol': 'G', 'Sol#': 'G#',
  'La': 'A', 'La#': 'A#', 'Si': 'B',
};

const EN_TO_FR: Record<string, string> = {
  'C': 'Do', 'C#': 'Do♯', 'Db': 'Ré♭', 'D': 'Ré', 'D#': 'Ré♯',
  'Eb': 'Mi♭', 'E': 'Mi', 'F': 'Fa', 'F#': 'Fa♯', 'Gb': 'Sol♭',
  'G': 'Sol', 'G#': 'Sol♯', 'Ab': 'La♭', 'A': 'La', 'A#': 'La♯',
  'Bb': 'Si♭', 'B': 'Si',
};

const SEMITONES: Record<string, number> = {
  'C': 0, 'C#': 1, 'Db': 1, 'D': 2, 'D#': 3, 'Eb': 3,
  'E': 4, 'F': 5, 'F#': 6, 'Gb': 6,
  'G': 7, 'G#': 8, 'Ab': 8, 'A': 9, 'A#': 10, 'Bb': 10, 'B': 11,
};

const INTERVAL_NAMES: Record<number, string> = {
  0: 'unisson', 1: 'seconde ♭', 2: 'seconde', 3: 'tierce ♭',
  4: 'tierce', 5: 'quarte', 6: 'triton', 7: 'quinte',
  8: 'sixte ♭', 9: 'sixte', 10: 'septième ♭', 11: 'septième',
  12: 'octave', 13: 'neuvième ♭', 14: 'neuvième',
  15: 'dixième ♭', 16: 'dixième',
};

const DIATONIC_FROM_C: Record<string, number> = {
  'C': 0, 'D': 1, 'E': 2, 'F': 3, 'G': 4, 'A': 5, 'B': 6,
};

const DURATION_BEATS: Record<Duration, number> = {
  whole: 4, half: 2, quarter: 1, eighth: 0.5,
};

const DURATION_LABEL: Record<Duration, string> = {
  whole: '𝅝 Ronde', half: '𝅗𝅥 Blanche', quarter: '♩ Noire', eighth: '♪ Croche',
};

const EN_TO_LILY: Record<string, string> = {
  'C': 'c', 'C#': 'cis', 'Db': 'des', 'D': 'd', 'D#': 'dis',
  'Eb': 'ees', 'E': 'e', 'F': 'f', 'F#': 'fis', 'Gb': 'ges',
  'G': 'g', 'G#': 'gis', 'Ab': 'aes', 'A': 'a', 'A#': 'ais',
  'Bb': 'bes', 'B': 'b',
};

const DURATION_LILY: Record<Duration, string> = {
  whole: '1', half: '2', quarter: '4', eighth: '8',
};

const MAJOR_SCALE = [0, 2, 4, 5, 7, 9, 11];
const MINOR_SCALE = [0, 2, 3, 5, 7, 8, 10];
const CHROMATIC_ROOTS = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];

// ── Helpers ───────────────────────────────────────────────────────────────────

function noteToSemitone(note: string, octave: number): number {
  return (SEMITONES[note] ?? 0) + octave * 12;
}

// Treble clef: E4 = step 0 (bottom line)
function trebleStep(note: string, octave: number): number {
  const base = note.replace(/[#b]/g, '');
  const diatC = DIATONIC_FROM_C[base] ?? 0;
  return diatC + (octave - 4) * 7 - 2;
}

// Bass clef: G2 = step 0 (bottom line) — treble step + 12
function bassStep(note: string, octave: number): number {
  return trebleStep(note, octave) + 12;
}

function noteStep(note: string, octave: number, clef: 'treble' | 'bass'): number {
  return clef === 'bass' ? bassStep(note, octave) : trebleStep(note, octave);
}

function getLedgerLines(step: number): number[] {
  const ledgers: number[] = [];
  if (step < 0) {
    const topLedger = 2 * Math.ceil(step / 2);
    for (let s = -2; s >= topLedger; s -= 2) ledgers.push(s);
  } else if (step > 8) {
    const bottomLedger = 2 * Math.floor(step / 2);
    for (let s = 10; s <= bottomLedger; s += 2) ledgers.push(s);
  }
  return ledgers;
}

function computeAnalysis(melody: MelodicNote[]): MelodyAnalysis {
  const intervals: IntervalInfo[] = [];
  for (let i = 1; i < melody.length; i++) {
    const a = melody[i - 1];
    const b = melody[i];
    const sA = noteToSemitone(a.note, a.octave);
    const sB = noteToSemitone(b.note, b.octave);
    const diff = sB - sA;
    const absDiff = Math.abs(diff);
    intervals.push({
      semitones: absDiff,
      direction: diff > 0 ? 'up' : diff < 0 ? 'down' : 'unison',
      name: INTERVAL_NAMES[absDiff] ?? `${absDiff} demi-tons`,
    });
  }

  let detectedScale: string | null = null;
  if (melody.length >= 3) {
    const pitchClasses = new Set(melody.map(n => SEMITONES[n.note] ?? 0));
    let bestScore = 0;
    let bestName = '';
    for (let root = 0; root < 12; root++) {
      for (const [pattern, suffix] of [[MAJOR_SCALE, 'majeur'], [MINOR_SCALE, 'mineur']] as const) {
        const scaleSet = new Set(pattern.map((i: number) => (root + i) % 12));
        let score = 0;
        for (const pc of pitchClasses) if (scaleSet.has(pc)) score++;
        if (score > bestScore) {
          bestScore = score;
          bestName = `${EN_TO_FR[CHROMATIC_ROOTS[root]] ?? CHROMATIC_ROOTS[root]} ${suffix}`;
        }
      }
    }
    if (bestScore / pitchClasses.size >= 0.75) detectedScale = bestName;
  }

  let ambitus: { low: string; high: string } | null = null;
  if (melody.length > 0) {
    let lowestSemi = Infinity;
    let highestSemi = -Infinity;
    let low = melody[0];
    let high = melody[0];
    for (const n of melody) {
      const s = noteToSemitone(n.note, n.octave);
      if (s < lowestSemi) { lowestSemi = s; low = n; }
      if (s > highestSemi) { highestSemi = s; high = n; }
    }
    const fmt = (n: MelodicNote) => `${EN_TO_FR[n.note] ?? n.note}${n.octave}`;
    ambitus = { low: fmt(low), high: fmt(high) };
  }

  return { intervals, detectedScale, ambitus };
}

function buildLilyPond(
  melody: MelodicNote[],
  clef: 'treble' | 'bass',
  beatsPerMeasure: number,
): string {
  if (melody.length === 0) return '';
  const clefLily = clef === 'bass' ? 'bass' : 'treble';
  const timeSig = `${beatsPerMeasure}/4`;

  // Group into measures
  let bar = '';
  let cum = 0;
  const bars: string[] = [];
  for (const n of melody) {
    const name = EN_TO_LILY[n.note] ?? 'c';
    const ticks = "'".repeat(Math.max(0, n.octave - 3));
    const dur = DURATION_LILY[n.duration];
    bar += `${name}${ticks}${dur} `;
    cum += DURATION_BEATS[n.duration];
    if (cum >= beatsPerMeasure - 0.001) {
      bars.push(bar.trim());
      bar = '';
      cum = 0;
    }
  }
  if (bar.trim()) bars.push(bar.trim());

  const content = bars.join(' | ');
  return `\\version "2.24.0"\n{\n  \\clef ${clefLily}\n  \\time ${timeSig}\n  ${content}\n}`;
}

// ── SVG Staff ─────────────────────────────────────────────────────────────────

const HALF_STEP = 10;
const STAFF_BOTTOM = 150;
const SVG_HEIGHT = 210;
const CLEF_W = 70;      // clef symbol width
const TIME_SIG_W = 28;  // time signature width
const HEADER_W = CLEF_W + TIME_SIG_W; // total left margin before first note
const BEAT_W = 56;      // pixels per beat (proportional spacing)
const NOTE_R_X = 8;
const NOTE_R_Y = 6;

const STAFF_LINES = [0, 2, 4, 6, 8];

interface StaffSVGProps {
  melody: MelodicNote[];
  clef: 'treble' | 'bass';
  beatsPerMeasure: number;
  measuresCount: number;
}

function StaffSVG({ melody, clef, beatsPerMeasure, measuresCount }: StaffSVGProps) {
  // Compute proportional x positions from beat offsets
  const notePositions: { x: number; step: number; beatOffset: number }[] = [];
  let cumBeats = 0;
  for (const n of melody) {
    const x = HEADER_W + 10 + cumBeats * BEAT_W;
    const step = noteStep(n.note, n.octave, clef);
    notePositions.push({ x, step, beatOffset: cumBeats });
    cumBeats += DURATION_BEATS[n.duration];
  }

  const totalBeats = Math.max(measuresCount * beatsPerMeasure, cumBeats);
  const svgWidth = Math.max(680, HEADER_W + 10 + totalBeats * BEAT_W + 60);

  // Barline x positions (at every beatsPerMeasure boundary)
  const barlineXs: number[] = [];
  for (let m = 1; m <= Math.ceil(totalBeats / beatsPerMeasure); m++) {
    const bx = HEADER_W + 10 + m * beatsPerMeasure * BEAT_W;
    if (bx < svgWidth - 5) barlineXs.push(bx);
  }
  const finalX = svgWidth - 10;

  return (
    <svg width={svgWidth} height={SVG_HEIGHT} style={{ display: 'block', minWidth: svgWidth }}>

      {/* Staff lines */}
      {STAFF_LINES.map(s => (
        <line key={s} x1={10} y1={STAFF_BOTTOM - s * HALF_STEP} x2={svgWidth - 10} y2={STAFF_BOTTOM - s * HALF_STEP} stroke="#555" strokeWidth="0.8" />
      ))}

      {/* Clef symbol */}
      {clef === 'treble' ? (
        <text x={14} y={STAFF_BOTTOM + 16} fontSize="95" fontFamily="'Times New Roman', Georgia, serif" fill="#1a1a1a">𝄞</text>
      ) : (
        <text x={15} y={STAFF_BOTTOM - HALF_STEP * 1 + 2} fontSize="54" fontFamily="'Times New Roman', Georgia, serif" fill="#1a1a1a">𝄢</text>
      )}

      {/* Time signature */}
      <text x={CLEF_W + TIME_SIG_W / 2} y={STAFF_BOTTOM - 5 * HALF_STEP + 4} fontSize="18" fontFamily="'Times New Roman', Georgia, serif" fill="#1a1a1a" textAnchor="middle" fontWeight="bold">{beatsPerMeasure}</text>
      <text x={CLEF_W + TIME_SIG_W / 2} y={STAFF_BOTTOM - 1 * HALF_STEP + 4} fontSize="18" fontFamily="'Times New Roman', Georgia, serif" fill="#1a1a1a" textAnchor="middle" fontWeight="bold">4</text>

      {/* Opening barline */}
      <line x1={HEADER_W} y1={STAFF_BOTTOM - 8 * HALF_STEP} x2={HEADER_W} y2={STAFF_BOTTOM} stroke="#555" strokeWidth="1" />

      {/* Measure barlines */}
      {barlineXs.map((bx, i) => (
        <line key={i} x1={bx} y1={STAFF_BOTTOM - 8 * HALF_STEP} x2={bx} y2={STAFF_BOTTOM} stroke="#555" strokeWidth="0.9" />
      ))}

      {/* Final double barline */}
      <line x1={finalX - 3} y1={STAFF_BOTTOM - 8 * HALF_STEP} x2={finalX - 3} y2={STAFF_BOTTOM} stroke="#555" strokeWidth="0.9" />
      <line x1={finalX} y1={STAFF_BOTTOM - 8 * HALF_STEP} x2={finalX} y2={STAFF_BOTTOM} stroke="#555" strokeWidth="2.5" />

      {/* Notes */}
      {melody.map((n, i) => {
        const pos = notePositions[i];
        if (!pos) return null;
        const { x, step } = pos;
        const y = STAFF_BOTTOM - step * HALF_STEP;
        const isFilled = n.duration === 'quarter' || n.duration === 'eighth';
        const hasStem = n.duration !== 'whole';
        const stemUp = step <= 4;
        const ledgers = getLedgerLines(step);
        const hasAccidental = n.note.length > 1;
        const accidental = n.note.endsWith('#') ? '♯' : n.note.endsWith('b') ? '♭' : '';
        const frLabel = EN_TO_FR[n.note] ?? n.note;

        return (
          <g key={n.id}>
            {/* Ledger lines */}
            {ledgers.map(ls => (
              <line key={ls} x1={x - 14} y1={STAFF_BOTTOM - ls * HALF_STEP} x2={x + 14} y2={STAFF_BOTTOM - ls * HALF_STEP} stroke="#1a1a1a" strokeWidth="1.2" />
            ))}
            {/* Accidental */}
            {hasAccidental && (
              <text x={x - 18} y={y + 5} fontSize="13" fontFamily="serif" fill="#1a1a1a" textAnchor="middle">{accidental}</text>
            )}
            {/* Stem */}
            {hasStem && (
              <line x1={stemUp ? x + NOTE_R_X : x - NOTE_R_X} y1={y} x2={stemUp ? x + NOTE_R_X : x - NOTE_R_X} y2={stemUp ? y - 32 : y + 32} stroke="#1a1a1a" strokeWidth="1.5" />
            )}
            {/* Eighth flag */}
            {n.duration === 'eighth' && (
              <path
                d={stemUp
                  ? `M ${x + NOTE_R_X} ${y - 32} Q ${x + 22} ${y - 22} ${x + 14} ${y - 14}`
                  : `M ${x - NOTE_R_X} ${y + 32} Q ${x - 22} ${y + 22} ${x - 14} ${y + 14}`}
                fill="none" stroke="#1a1a1a" strokeWidth="1.5"
              />
            )}
            {/* Note head */}
            <ellipse cx={x} cy={y} rx={NOTE_R_X} ry={NOTE_R_Y} fill={isFilled ? '#1a1a1a' : '#fff'} stroke="#1a1a1a" strokeWidth="1.4" transform={`rotate(-15, ${x}, ${y})`} />
            {/* Whole note inner cutout */}
            {n.duration === 'whole' && (
              <ellipse cx={x} cy={y} rx={NOTE_R_X - 3} ry={NOTE_R_Y - 2.5} fill="#fff" stroke="none" transform={`rotate(-15, ${x}, ${y})`} />
            )}
            {/* Note label — last note */}
            {i === melody.length - 1 && (
              <text x={x} y={STAFF_BOTTOM + 45} fontSize="10" fontFamily="system-ui, sans-serif" fill="#BA7517" textAnchor="middle" fontWeight="600">
                {frLabel}{n.octave}
              </text>
            )}
          </g>
        );
      })}

      {/* Empty hint */}
      {melody.length === 0 && (
        <text x={HEADER_W + 20} y={STAFF_BOTTOM - 4 * HALF_STEP} fontSize="12" fontFamily="system-ui, sans-serif" fill="#bbb">
          Cliquez sur le piano pour saisir des notes →
        </text>
      )}

      {/* Measure numbers */}
      {Array.from({ length: measuresCount }, (_, m) => (
        <text
          key={m}
          x={HEADER_W + 10 + m * beatsPerMeasure * BEAT_W + 3}
          y={STAFF_BOTTOM - 8 * HALF_STEP - 6}
          fontSize="9"
          fontFamily="system-ui, sans-serif"
          fill="#bbb"
        >
          {m + 1}
        </text>
      ))}
    </svg>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

type Clef = 'treble' | 'bass';
type BPM = 2 | 3 | 4;
type MeasuresCount = 1 | 2 | 4 | 8;

export default function MelodicEditor() {
  const [melody, setMelody] = useState<MelodicNote[]>([]);
  const [duration, setDuration] = useState<Duration>('quarter');
  const [tempo, setTempo] = useState(100);
  const [clef, setClef] = useState<Clef>('treble');
  const [beatsPerMeasure, setBeatsPerMeasure] = useState<BPM>(4);
  const [measuresCount, setMeasuresCount] = useState<MeasuresCount>(4);
  const [showLilyPond, setShowLilyPond] = useState(false);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 600;

  const pianoRef = useRef<PianoPlayerRef>(null);
  const { imageUrl, loading: lilyLoading, error: lilyError, render: lilyRender, reset: lilyReset } = useLilyPond({ format: 'svg' });

  // Total capacity in beats
  const totalCapacity = measuresCount * beatsPerMeasure;
  const usedBeats = melody.reduce((s, n) => s + DURATION_BEATS[n.duration], 0);
  const remainingBeats = totalCapacity - usedBeats;

  const handleNoteClick = useCallback((frNote: string, pianoOctave: number) => {
    const enNote = FR_TO_EN[frNote] ?? frNote;
    const noteDur = DURATION_BEATS[duration];
    if (remainingBeats < noteDur - 0.001) return; // measure limit reached
    const newNote: MelodicNote = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      note: enNote,
      octave: pianoOctave + 1,
      duration,
    };
    setMelody(prev => [...prev, newNote]);
  }, [duration, remainingBeats]);

  const handleClear = () => {
    setMelody([]);
    lilyReset();
    setShowLilyPond(false);
  };

  const handleRemoveLast = () => setMelody(prev => prev.slice(0, -1));

  const handlePlay = useCallback(() => {
    if (!pianoRef.current?.isReady || melody.length === 0) return;
    const beatSec = 60 / tempo;
    const piano = pianoRef.current;
    let time = 0;
    for (const n of melody) {
      const dur = DURATION_BEATS[n.duration] * beatSec;
      piano.playVoicing([`${n.note}:${n.octave - 1}`], {
        startTime: time,
        duration: dur * 0.92,
        velocity: 0.8,
      });
      time += dur;
    }
  }, [melody, tempo]);

  const handleExport = async () => {
    setShowLilyPond(true);
    const code = buildLilyPond(melody, clef, beatsPerMeasure);
    if (code) {
      lilyReset();
      await lilyRender(code);
    }
  };

  const lilyCode = useMemo(() => buildLilyPond(melody, clef, beatsPerMeasure), [melody, clef, beatsPerMeasure]);
  const analysis = useMemo(() => computeAnalysis(melody), [melody]);
  const dotKeys = melody.length > 0 ? [`${melody[melody.length - 1].note}:${melody[melody.length - 1].octave - 1}`] : [];

  // Piano range: treble → C3-B4 (piano oct 3-4), bass → C2-B3 (piano oct 1-2)
  const pianoStartOctave = clef === 'bass' ? 1 : 3;

  const btnBase: React.CSSProperties = {
    padding: '5px 10px', minHeight: 36, borderRadius: 6, fontSize: 12,
    fontFamily: 'system-ui, sans-serif', cursor: 'pointer', fontWeight: 400,
    border: '0.5px solid #e0dbd3', background: '#fff', color: '#444',
  };
  const btnActive: React.CSSProperties = {
    ...btnBase, border: '0.5px solid #5C3D6E', background: '#5C3D6E', color: '#fff', fontWeight: 600,
  };

  return (
    <main style={{ minHeight: '100vh', background: '#f4f1ec', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>

        {/* ── Header ────────────────────────────────────── */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: '#BA7517', textTransform: 'uppercase', marginBottom: 4 }}>
            Outil d'entraînement
          </div>
          <h1 style={{ fontSize: 24, fontWeight: 500, color: '#1a1a1a', margin: 0 }}>
            ♩ Éditeur mélodique
          </h1>
        </div>

        {/* ── Controls ──────────────────────────────────── */}
        <div style={{ background: '#fff', border: '0.5px solid #e8e3db', borderRadius: 10, padding: '14px 18px', marginBottom: '1rem', display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>

          {/* Clef */}
          <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: '#888', marginRight: 4, letterSpacing: '0.06em' }}>CLÉ</span>
            {(['treble', 'bass'] as Clef[]).map(c => (
              <button key={c} onClick={() => { setClef(c); setMelody([]); }} style={clef === c ? btnActive : btnBase}>
                {c === 'treble' ? '𝄞 Sol' : '𝄢 Fa'}
              </button>
            ))}
          </div>

          <div style={{ width: 1, height: 28, background: '#e0dbd3' }} />

          {/* Measures */}
          <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: '#888', marginRight: 4, letterSpacing: '0.06em' }}>MESURES</span>
            {([1, 2, 4, 8] as MeasuresCount[]).map(m => (
              <button key={m} onClick={() => setMeasuresCount(m)} style={measuresCount === m ? btnActive : btnBase}>{m}</button>
            ))}
          </div>

          <div style={{ width: 1, height: 28, background: '#e0dbd3' }} />

          {/* Time signature */}
          <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: '#888', marginRight: 4, letterSpacing: '0.06em' }}>TEMPS</span>
            {([4, 3, 2] as BPM[]).map(b => (
              <button key={b} onClick={() => { setBeatsPerMeasure(b); setMelody([]); }} style={beatsPerMeasure === b ? btnActive : btnBase}>{b}/4</button>
            ))}
          </div>

          <div style={{ width: 1, height: 28, background: '#e0dbd3' }} />

          {/* Duration */}
          <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: '#888', marginRight: 4, letterSpacing: '0.06em' }}>DURÉE</span>
            {(['whole', 'half', 'quarter', 'eighth'] as Duration[]).map(d => (
              <button key={d} onClick={() => setDuration(d)} style={duration === d ? btnActive : btnBase}>
                {DURATION_LABEL[d]}
              </button>
            ))}
          </div>

          <div style={{ width: 1, height: 28, background: '#e0dbd3' }} />

          {/* Tempo */}
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: '#888', letterSpacing: '0.06em' }}>♩=</span>
            <input
              type="number" min={40} max={240} value={tempo}
              onChange={e => setTempo(Math.max(40, Math.min(240, Number(e.target.value))))}
              style={{ width: 52, padding: '4px 6px', border: '0.5px solid #e0dbd3', borderRadius: 6, fontSize: 13, fontFamily: 'system-ui, sans-serif', color: '#1a1a1a', background: '#fff', textAlign: 'center' }}
            />
          </div>

          {/* Actions */}
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
            <button onClick={handleRemoveLast} disabled={melody.length === 0} style={{ ...btnBase, minHeight: 36, opacity: melody.length === 0 ? 0.45 : 1, cursor: melody.length === 0 ? 'not-allowed' : 'pointer' }}>
              ← Effacer
            </button>
            <button onClick={handleClear} disabled={melody.length === 0} style={{ ...btnBase, minHeight: 36, opacity: melody.length === 0 ? 0.45 : 1, cursor: melody.length === 0 ? 'not-allowed' : 'pointer' }}>
              ✕ Vider
            </button>
            <button onClick={handlePlay} disabled={melody.length === 0} style={{ ...btnBase, minHeight: 36, border: '0.5px solid #185FA5', background: melody.length === 0 ? '#f0ece6' : '#185FA5', color: melody.length === 0 ? '#bbb' : '#fff', fontWeight: 600, cursor: melody.length === 0 ? 'not-allowed' : 'pointer' }}>
              ▶ Jouer
            </button>
            <button onClick={handleExport} disabled={melody.length === 0} style={{ ...btnBase, minHeight: 36, border: '0.5px solid #BA7517', background: melody.length === 0 ? '#f0ece6' : '#BA7517', color: melody.length === 0 ? '#bbb' : '#fff', fontWeight: 600, cursor: melody.length === 0 ? 'not-allowed' : 'pointer' }}>
              ♬ Exporter
            </button>
          </div>
        </div>

        {/* Beat capacity indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, padding: '0 4px' }}>
          <div style={{ flex: 1, height: 4, background: '#e8e3db', borderRadius: 2, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${Math.min(100, (usedBeats / totalCapacity) * 100)}%`, background: remainingBeats < 0.5 ? '#c0392b' : '#5C3D6E', borderRadius: 2, transition: 'width 0.2s' }} />
          </div>
          <span style={{ fontSize: 10, color: '#888', fontFamily: 'system-ui, sans-serif', whiteSpace: 'nowrap' }}>
            {usedBeats.toFixed(1)} / {totalCapacity} temps
          </span>
        </div>

        {/* ── Staff ─────────────────────────────────────── */}
        <div style={{ background: '#fff', border: '0.5px solid #e8e3db', borderRadius: 10, padding: '16px 20px', marginBottom: '1rem', overflowX: 'auto' }}>
          <StaffSVG melody={melody} clef={clef} beatsPerMeasure={beatsPerMeasure} measuresCount={measuresCount} />
        </div>

        {/* ── Analysis panel ─────────────────────────────── */}
        {melody.length >= 2 && (
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 10, marginBottom: '1rem' }}>
            <div style={{ background: '#fff', border: '0.5px solid #e8e3db', borderRadius: 10, padding: '14px 18px' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>Intervalles</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                {analysis.intervals.map((iv, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontSize: 11, color: '#bbb', minWidth: 22, textAlign: 'right' }}>{i + 1}→{i + 2}</span>
                    <span style={{ fontSize: 11, color: iv.direction === 'up' ? '#185FA5' : iv.direction === 'down' ? '#BA7517' : '#888' }}>
                      {iv.direction === 'up' ? '↑' : iv.direction === 'down' ? '↓' : '='}
                    </span>
                    <span style={{ fontSize: 12, color: '#1a1a1a', fontWeight: 500 }}>{iv.name}</span>
                    <span style={{ fontSize: 11, color: '#bbb', marginLeft: 'auto' }}>{iv.semitones} ½t</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: '#fff', border: '0.5px solid #e8e3db', borderRadius: 10, padding: '14px 18px' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>Analyse</div>
              {analysis.detectedScale && (
                <div style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 11, color: '#888', marginBottom: 3 }}>Gamme probable</div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#5C3D6E' }}>{analysis.detectedScale}</div>
                </div>
              )}
              {analysis.ambitus && (
                <div style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 11, color: '#888', marginBottom: 3 }}>Ambitus</div>
                  <div style={{ fontSize: 13, color: '#1a1a1a' }}>{analysis.ambitus.low} → {analysis.ambitus.high}</div>
                </div>
              )}
              <div>
                <div style={{ fontSize: 11, color: '#888', marginBottom: 3 }}>Notes utilisées</div>
                <div style={{ fontSize: 12, color: '#444', lineHeight: 1.7 }}>
                  {[...new Set(melody.map(n => EN_TO_FR[n.note] ?? n.note))].join(' · ')}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Piano input ─────────────────────────────────── */}
        <div style={{ background: '#fff', border: '0.5px solid #e8e3db', borderRadius: 10, padding: '16px 20px', marginBottom: '1rem', overflowX: 'auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>
            Saisie au clavier — {clef === 'bass' ? 'Clé de fa (Do2–Si3)' : 'Clé de sol (Do3–Si4)'}
          </div>
          <PianoPlayer
            ref={pianoRef}
            octaves={2}
            startOctave={pianoStartOctave}
            showLabels={true}
            showOctaveMarkers={true}
            dotKeys={dotKeys}
            onNoteClick={handleNoteClick}
          />
        </div>

        {/* ── LilyPond export ──────────────────────────────── */}
        {showLilyPond && (
          <div style={{ background: '#fff', border: '0.5px solid #e8e3db', borderRadius: 10, padding: '16px 20px', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Export LilyPond</div>
              <button onClick={() => setShowLilyPond(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#bbb', fontSize: 16 }}>✕</button>
            </div>
            {lilyLoading && <div style={{ fontSize: 13, color: '#888', padding: '12px 0' }}>Compilation en cours…</div>}
            {lilyError && (
              <div style={{ fontSize: 12, color: '#c0392b', padding: '8px 12px', background: '#fdf3f3', borderRadius: 6, marginBottom: 10 }}>
                Service LilyPond indisponible. Copiez le code ci-dessous dans{' '}
                <a href="https://lilypond.org" target="_blank" rel="noopener noreferrer" style={{ color: '#185FA5' }}>lilypond.org</a>.
              </div>
            )}
            {imageUrl && (
              <div style={{ marginBottom: 16, border: '0.5px solid #e0dbd3', borderRadius: 8, overflow: 'hidden', background: '#fafaf8' }}>
                <img src={imageUrl} alt="Partition LilyPond" style={{ maxWidth: '100%', display: 'block' }} />
              </div>
            )}
            <pre style={{ background: '#f8f6f1', border: '0.5px solid #e0dbd3', borderRadius: 8, padding: '12px 14px', fontSize: 12, fontFamily: 'monospace', color: '#1a1a1a', overflowX: 'auto', whiteSpace: 'pre', margin: 0 }}>
              {lilyCode}
            </pre>
            <button onClick={() => navigator.clipboard.writeText(lilyCode)} style={{ marginTop: 8, padding: '6px 14px', borderRadius: 6, border: '0.5px solid #e0dbd3', background: '#fff', color: '#444', fontSize: 12, fontFamily: 'system-ui, sans-serif', cursor: 'pointer' }}>
              Copier le code
            </button>
          </div>
        )}

      </div>
    </main>
  );
}

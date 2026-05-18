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

// Chromatic semitones from C=0
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

// Diatonic steps from C (for staff position calculation)
const DIATONIC_FROM_C: Record<string, number> = {
  'C': 0, 'D': 1, 'E': 2, 'F': 3, 'G': 4, 'A': 5, 'B': 6,
};

const DURATION_BEATS: Record<Duration, number> = {
  whole: 4, half: 2, quarter: 1, eighth: 0.5,
};

const DURATION_LABEL: Record<Duration, string> = {
  whole: '𝅝 Ronde', half: '𝅗𝅥 Blanche', quarter: '♩ Noire', eighth: '♪ Croche',
};

// LilyPond note name mapping
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

function noteStaffStep(note: string, octave: number): number {
  // Steps from E4 (bottom line = 0). E4=0, F4=1, G4=2, ..., C4=-2, D4=-1
  const base = note.replace(/[#b]/g, '');
  const diatC = DIATONIC_FROM_C[base] ?? 0;
  const stepFromC4 = diatC + (octave - 4) * 7;
  return stepFromC4 - 2; // E4 = 2 steps above C4 → E4 = step 0
}

function getLedgerLines(step: number): number[] {
  const ledgers: number[] = [];
  if (step < 0) {
    // Draw ledger lines from -2 down to the nearest even step at or above `step`
    const topLedger = 2 * Math.ceil(step / 2);
    for (let s = -2; s >= topLedger; s -= 2) ledgers.push(s);
  } else if (step > 8) {
    // Draw ledger lines from 10 up to the nearest even step at or below `step`
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

function buildLilyPond(melody: MelodicNote[]): string {
  if (melody.length === 0) return '';
  const noteStrs = melody.map(n => {
    const name = EN_TO_LILY[n.note] ?? 'c';
    const ticks = "'".repeat(Math.max(0, n.octave - 3));
    const dur = DURATION_LILY[n.duration];
    return `${name}${ticks}${dur}`;
  }).join(' ');
  return `\\version "2.24.0"\n{\n  \\clef treble\n  \\time 4/4\n  ${noteStrs}\n}`;
}

// ── SVG Staff ─────────────────────────────────────────────────────────────────

const HALF_STEP = 10;   // px per diatonic half-step
const STAFF_BOTTOM = 150;
const SVG_HEIGHT = 210;
const CLEF_WIDTH = 70;
const NOTE_SPACING = 56;
const NOTE_R_X = 8;
const NOTE_R_Y = 6;

interface StaffNoteProps {
  n: MelodicNote;
  x: number;
  isLast: boolean;
}

function StaffNote({ n, x, isLast }: StaffNoteProps) {
  const step = noteStaffStep(n.note, n.octave);
  const y = STAFF_BOTTOM - step * HALF_STEP;
  const isFilled = n.duration === 'quarter' || n.duration === 'eighth';
  const ledgerLines = getLedgerLines(step);
  const hasAccidental = n.note.length > 1;
  const accidental = n.note.endsWith('#') ? '♯' : n.note.endsWith('b') ? '♭' : '';
  const frLabel = EN_TO_FR[n.note] ?? n.note;

  // Stem: quarter and eighth get a stem
  const hasStem = n.duration === 'quarter' || n.duration === 'half' || n.duration === 'eighth';
  const stemUp = step <= 4; // Stem goes up if note is at or below middle line (B4)

  return (
    <g>
      {/* Ledger lines */}
      {ledgerLines.map(ls => (
        <line
          key={ls}
          x1={x - 14}
          y1={STAFF_BOTTOM - ls * HALF_STEP}
          x2={x + 14}
          y2={STAFF_BOTTOM - ls * HALF_STEP}
          stroke="#1a1a1a"
          strokeWidth="1.2"
        />
      ))}

      {/* Accidental */}
      {hasAccidental && (
        <text
          x={x - 18}
          y={y + 5}
          fontSize="13"
          fontFamily="serif"
          fill="#1a1a1a"
          textAnchor="middle"
        >
          {accidental}
        </text>
      )}

      {/* Stem */}
      {hasStem && (
        <line
          x1={stemUp ? x + NOTE_R_X : x - NOTE_R_X}
          y1={y}
          x2={stemUp ? x + NOTE_R_X : x - NOTE_R_X}
          y2={stemUp ? y - 32 : y + 32}
          stroke="#1a1a1a"
          strokeWidth="1.5"
        />
      )}

      {/* Eighth flag */}
      {n.duration === 'eighth' && (
        <path
          d={stemUp
            ? `M ${x + NOTE_R_X} ${y - 32} Q ${x + 22} ${y - 22} ${x + 14} ${y - 14}`
            : `M ${x - NOTE_R_X} ${y + 32} Q ${x - 22} ${y + 22} ${x - 14} ${y + 14}`}
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="1.5"
        />
      )}

      {/* Note head */}
      <ellipse
        cx={x}
        cy={y}
        rx={NOTE_R_X}
        ry={NOTE_R_Y}
        fill={isFilled ? '#1a1a1a' : '#fff'}
        stroke="#1a1a1a"
        strokeWidth="1.4"
        transform={`rotate(-15, ${x}, ${y})`}
      />

      {/* Whole note: two arcs */}
      {n.duration === 'whole' && (
        <ellipse
          cx={x}
          cy={y}
          rx={NOTE_R_X - 3}
          ry={NOTE_R_Y - 2.5}
          fill="#fff"
          stroke="#1a1a1a"
          strokeWidth="0"
          transform={`rotate(-15, ${x}, ${y})`}
        />
      )}

      {/* Note label below */}
      {isLast && (
        <text
          x={x}
          y={STAFF_BOTTOM + 45}
          fontSize="10"
          fontFamily="system-ui, sans-serif"
          fill="#BA7517"
          textAnchor="middle"
          fontWeight="600"
        >
          {frLabel}{n.octave}
        </text>
      )}
    </g>
  );
}

interface StaffSVGProps {
  melody: MelodicNote[];
}

function StaffSVG({ melody }: StaffSVGProps) {
  const svgWidth = Math.max(680, CLEF_WIDTH + 30 + melody.length * NOTE_SPACING + 60);

  // Staff lines at steps 0, 2, 4, 6, 8 (E4, G4, B4, D5, F5)
  const staffLines = [0, 2, 4, 6, 8];

  return (
    <svg
      width={svgWidth}
      height={SVG_HEIGHT}
      style={{ display: 'block', minWidth: svgWidth }}
    >
      {/* Staff lines */}
      {staffLines.map(s => (
        <line
          key={s}
          x1={10}
          y1={STAFF_BOTTOM - s * HALF_STEP}
          x2={svgWidth - 10}
          y2={STAFF_BOTTOM - s * HALF_STEP}
          stroke="#555"
          strokeWidth="0.8"
        />
      ))}

      {/* Treble clef */}
      <text
        x={14}
        y={STAFF_BOTTOM + 16}
        fontSize="95"
        fontFamily="'Times New Roman', Georgia, serif"
        fill="#1a1a1a"
      >
        𝄞
      </text>

      {/* Start barline */}
      <line
        x1={CLEF_WIDTH}
        y1={STAFF_BOTTOM - 8 * HALF_STEP}
        x2={CLEF_WIDTH}
        y2={STAFF_BOTTOM}
        stroke="#555"
        strokeWidth="1"
      />

      {/* Notes */}
      {melody.map((n, i) => (
        <StaffNote
          key={n.id}
          n={n}
          x={CLEF_WIDTH + 30 + i * NOTE_SPACING}
          isLast={i === melody.length - 1}
        />
      ))}

      {/* Empty staff hint */}
      {melody.length === 0 && (
        <text
          x={CLEF_WIDTH + 30}
          y={STAFF_BOTTOM - 4 * HALF_STEP}
          fontSize="12"
          fontFamily="system-ui, sans-serif"
          fill="#bbb"
        >
          Cliquez sur le piano pour saisir des notes →
        </text>
      )}
    </svg>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function MelodicEditor() {
  const [melody, setMelody] = useState<MelodicNote[]>([]);
  const [duration, setDuration] = useState<Duration>('quarter');
  const [tempo, setTempo] = useState(100);
  const [showLilyPond, setShowLilyPond] = useState(false);

  const pianoRef = useRef<PianoPlayerRef>(null);
  const { imageUrl, loading: lilyLoading, error: lilyError, render: lilyRender, reset: lilyReset } = useLilyPond({ format: 'svg' });

  const handleNoteClick = useCallback((frNote: string, pianoOctave: number) => {
    const enNote = FR_TO_EN[frNote] ?? frNote;
    const newNote: MelodicNote = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      note: enNote,
      octave: pianoOctave + 1, // PianoPlayer octave + 1 = standard scientific octave
      duration,
    };
    setMelody(prev => [...prev, newNote]);
  }, [duration]);

  const handleClear = () => {
    setMelody([]);
    lilyReset();
    setShowLilyPond(false);
  };

  const handleRemoveLast = () => {
    setMelody(prev => prev.slice(0, -1));
  };

  const handlePlay = () => {
    if (!pianoRef.current?.isReady || melody.length === 0) return;
    const beatSec = 60 / tempo;
    // Use English note names directly — PianoPlayer accepts them
    const voicings = melody.map(n => [`${n.note}:${n.octave - 1}`]);
    pianoRef.current.playVoicingSequence(voicings, {
      interval: beatSec,
      duration: beatSec * DURATION_BEATS[duration] * 0.92,
    });
  };

  const handleExport = async () => {
    setShowLilyPond(true);
    const code = buildLilyPond(melody);
    if (code) {
      lilyReset();
      await lilyRender(code);
    }
  };

  const lilyCode = useMemo(() => buildLilyPond(melody), [melody]);

  const analysis = useMemo(() => computeAnalysis(melody), [melody]);

  const dotKeys = melody.length > 0
    ? [`${melody[melody.length - 1].note}:${melody[melody.length - 1].octave - 1}`]
    : [];

  return (
    <main style={{ minHeight: '100vh', background: '#f4f1ec', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>

        {/* ── Header ─────────────────────────────────────── */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: '#BA7517', textTransform: 'uppercase', marginBottom: 4 }}>
            Outil d'entraînement
          </div>
          <h1 style={{ fontSize: 24, fontWeight: 500, color: '#1a1a1a', margin: 0 }}>
            ♩ Éditeur mélodique
          </h1>
        </div>

        {/* ── Controls ────────────────────────────────────── */}
        <div style={{ background: '#fff', border: '0.5px solid #e8e3db', borderRadius: 10, padding: '14px 18px', marginBottom: '1rem', display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>

          {/* Duration selector */}
          <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: '#888', marginRight: 4, letterSpacing: '0.06em' }}>DURÉE</span>
            {(['whole', 'half', 'quarter', 'eighth'] as Duration[]).map(d => (
              <button
                key={d}
                onClick={() => setDuration(d)}
                style={{
                  padding: '5px 10px',
                  borderRadius: 6,
                  border: '0.5px solid ' + (duration === d ? '#5C3D6E' : '#e0dbd3'),
                  background: duration === d ? '#5C3D6E' : '#fff',
                  color: duration === d ? '#fff' : '#444',
                  fontSize: 12,
                  fontFamily: 'system-ui, sans-serif',
                  cursor: 'pointer',
                  fontWeight: duration === d ? 600 : 400,
                }}
              >
                {DURATION_LABEL[d]}
              </button>
            ))}
          </div>

          <div style={{ width: 1, height: 28, background: '#e0dbd3' }} />

          {/* Tempo */}
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: '#888', letterSpacing: '0.06em' }}>♩=</span>
            <input
              type="number"
              min={40}
              max={240}
              value={tempo}
              onChange={e => setTempo(Math.max(40, Math.min(240, Number(e.target.value))))}
              style={{
                width: 52,
                padding: '4px 6px',
                border: '0.5px solid #e0dbd3',
                borderRadius: 6,
                fontSize: 13,
                fontFamily: 'system-ui, sans-serif',
                color: '#1a1a1a',
                background: '#fff',
                textAlign: 'center',
              }}
            />
          </div>

          <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
            <button
              onClick={handleRemoveLast}
              disabled={melody.length === 0}
              style={{
                padding: '6px 12px',
                borderRadius: 6,
                border: '0.5px solid #e0dbd3',
                background: '#fff',
                color: '#666',
                fontSize: 12,
                fontFamily: 'system-ui, sans-serif',
                cursor: melody.length === 0 ? 'not-allowed' : 'pointer',
                opacity: melody.length === 0 ? 0.45 : 1,
              }}
            >
              ← Effacer
            </button>
            <button
              onClick={handleClear}
              disabled={melody.length === 0}
              style={{
                padding: '6px 12px',
                borderRadius: 6,
                border: '0.5px solid #e0dbd3',
                background: '#fff',
                color: '#666',
                fontSize: 12,
                fontFamily: 'system-ui, sans-serif',
                cursor: melody.length === 0 ? 'not-allowed' : 'pointer',
                opacity: melody.length === 0 ? 0.45 : 1,
              }}
            >
              ✕ Vider
            </button>
            <button
              onClick={handlePlay}
              disabled={melody.length === 0}
              style={{
                padding: '6px 14px',
                borderRadius: 6,
                border: '0.5px solid #185FA5',
                background: melody.length === 0 ? '#f0ece6' : '#185FA5',
                color: melody.length === 0 ? '#bbb' : '#fff',
                fontSize: 12,
                fontFamily: 'system-ui, sans-serif',
                cursor: melody.length === 0 ? 'not-allowed' : 'pointer',
                fontWeight: 600,
              }}
            >
              ▶ Jouer
            </button>
            <button
              onClick={handleExport}
              disabled={melody.length === 0}
              style={{
                padding: '6px 14px',
                borderRadius: 6,
                border: '0.5px solid #BA7517',
                background: melody.length === 0 ? '#f0ece6' : '#BA7517',
                color: melody.length === 0 ? '#bbb' : '#fff',
                fontSize: 12,
                fontFamily: 'system-ui, sans-serif',
                cursor: melody.length === 0 ? 'not-allowed' : 'pointer',
                fontWeight: 600,
              }}
            >
              ♬ Exporter
            </button>
          </div>
        </div>

        {/* ── Staff ───────────────────────────────────────── */}
        <div style={{ background: '#fff', border: '0.5px solid #e8e3db', borderRadius: 10, padding: '16px 20px', marginBottom: '1rem', overflowX: 'auto' }}>
          <StaffSVG melody={melody} />
        </div>

        {/* ── Analysis panel ──────────────────────────────── */}
        {melody.length >= 2 && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: '1rem' }}>

            {/* Intervals */}
            <div style={{ background: '#fff', border: '0.5px solid #e8e3db', borderRadius: 10, padding: '14px 18px' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>
                Intervalles
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                {analysis.intervals.map((iv, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontSize: 11, color: '#bbb', minWidth: 22, textAlign: 'right' }}>
                      {i + 1}→{i + 2}
                    </span>
                    <span style={{
                      fontSize: 11,
                      color: iv.direction === 'up' ? '#185FA5' : iv.direction === 'down' ? '#BA7517' : '#888',
                    }}>
                      {iv.direction === 'up' ? '↑' : iv.direction === 'down' ? '↓' : '='}
                    </span>
                    <span style={{ fontSize: 12, color: '#1a1a1a', fontWeight: 500 }}>{iv.name}</span>
                    <span style={{ fontSize: 11, color: '#bbb', marginLeft: 'auto' }}>{iv.semitones} ½t</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scale + Ambitus */}
            <div style={{ background: '#fff', border: '0.5px solid #e8e3db', borderRadius: 10, padding: '14px 18px' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>
                Analyse
              </div>

              {analysis.detectedScale && (
                <div style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 11, color: '#888', marginBottom: 3 }}>Gamme probable</div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#5C3D6E' }}>
                    {analysis.detectedScale}
                  </div>
                </div>
              )}

              {analysis.ambitus && (
                <div>
                  <div style={{ fontSize: 11, color: '#888', marginBottom: 3 }}>Ambitus</div>
                  <div style={{ fontSize: 13, color: '#1a1a1a' }}>
                    {analysis.ambitus.low} → {analysis.ambitus.high}
                  </div>
                </div>
              )}

              <div style={{ marginTop: 12 }}>
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
            Saisie au clavier
          </div>
          <PianoPlayer
            ref={pianoRef}
            octaves={2}
            startOctave={3}
            showLabels={true}
            showOctaveMarkers={true}
            dotKeys={dotKeys}
            onNoteClick={handleNoteClick}
          />
        </div>

        {/* ── LilyPond export panel ────────────────────────── */}
        {showLilyPond && (
          <div style={{ background: '#fff', border: '0.5px solid #e8e3db', borderRadius: 10, padding: '16px 20px', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Export LilyPond
              </div>
              <button
                onClick={() => setShowLilyPond(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#bbb', fontSize: 16 }}
              >
                ✕
              </button>
            </div>

            {/* LilyPond rendered score */}
            {lilyLoading && (
              <div style={{ fontSize: 13, color: '#888', padding: '12px 0' }}>Compilation en cours…</div>
            )}
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

            {/* LilyPond source code */}
            <pre style={{
              background: '#f8f6f1',
              border: '0.5px solid #e0dbd3',
              borderRadius: 8,
              padding: '12px 14px',
              fontSize: 12,
              fontFamily: 'monospace',
              color: '#1a1a1a',
              overflowX: 'auto',
              whiteSpace: 'pre',
              margin: 0,
            }}>
              {lilyCode}
            </pre>
            <button
              onClick={() => navigator.clipboard.writeText(lilyCode)}
              style={{
                marginTop: 8,
                padding: '6px 14px',
                borderRadius: 6,
                border: '0.5px solid #e0dbd3',
                background: '#fff',
                color: '#444',
                fontSize: 12,
                fontFamily: 'system-ui, sans-serif',
                cursor: 'pointer',
              }}
            >
              Copier le code
            </button>
          </div>
        )}

      </div>
    </main>
  );
}

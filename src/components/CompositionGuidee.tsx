'use client';

import React, { useState, useRef, useMemo, useCallback } from 'react';
import PianoPlayer, { PianoPlayerRef } from './PianoPlayer';
import { evaluateHarmonization, getChordBassSpecs } from '@/lib/harmonization-engine';
import { MELODIES } from '@/data/melodies-exercices';
import type { MelodyExercise, HarmonizationScore } from '@/types/composition';

// ── Staff rendering helpers ──────────────────────────────────────────────────

const HALF_STEP = 10;
const STAFF_BOTTOM = 150;
const SVG_HEIGHT = 210;
const CLEF_W = 70;
const NOTE_SP = 52;
const NOTE_RX = 8;
const NOTE_RY = 6;

const DIATONIC_FROM_C: Record<string, number> = {
  C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6,
};

function noteStaffStep(note: string, octave: number): number {
  const base = note.replace(/[#b]/g, '');
  const d = DIATONIC_FROM_C[base] ?? 0;
  return d + (octave - 4) * 7 - 2; // E4 = 0
}

function getLedgerLines(step: number): number[] {
  const lines: number[] = [];
  if (step < 0) {
    const top = 2 * Math.ceil(step / 2);
    for (let s = -2; s >= top; s -= 2) lines.push(s);
  } else if (step > 8) {
    const bot = 2 * Math.floor(step / 2);
    for (let s = 10; s <= bot; s += 2) lines.push(s);
  }
  return lines;
}

const EN_TO_FR: Record<string, string> = {
  C: 'Do', 'C#': 'Do♯', Db: 'Ré♭', D: 'Ré', 'D#': 'Ré♯',
  Eb: 'Mi♭', E: 'Mi', F: 'Fa', 'F#': 'Fa♯', Gb: 'Sol♭',
  G: 'Sol', 'G#': 'Sol♯', Ab: 'La♭', A: 'La', 'A#': 'La♯',
  Bb: 'Si♭', B: 'Si',
};

const STAFF_LINES = [0, 2, 4, 6, 8];

function MelodyStaff({ exercise }: { exercise: MelodyExercise }) {
  const notes = exercise.notes;
  const svgW = Math.max(660, CLEF_W + 30 + notes.length * NOTE_SP + 40);

  return (
    <svg width={svgW} height={SVG_HEIGHT} style={{ display: 'block', minWidth: svgW }}>
      {STAFF_LINES.map(s => (
        <line key={s} x1={10} y1={STAFF_BOTTOM - s * HALF_STEP} x2={svgW - 10} y2={STAFF_BOTTOM - s * HALF_STEP} stroke="#999" strokeWidth="0.8" />
      ))}
      <text x={14} y={STAFF_BOTTOM + 16} fontSize="95" fontFamily="'Times New Roman',Georgia,serif" fill="#1a1a1a">𝄞</text>
      <line x1={CLEF_W} y1={STAFF_BOTTOM - 8 * HALF_STEP} x2={CLEF_W} y2={STAFF_BOTTOM} stroke="#999" strokeWidth="1" />

      {/* Bar lines between measures */}
      {(() => {
        const bpm = exercise.timeSignature === '4/4' ? 4 : 3;
        const dBeats: Record<string, number> = { whole: 4, half: 2, quarter: 1, eighth: 0.5 };
        const barXs: number[] = [];
        let cum = 0;
        notes.forEach((n, i) => {
          const prevCum = cum;
          cum += dBeats[n.duration] ?? 1;
          if (cum % bpm < 0.01 && i < notes.length - 1) {
            barXs.push(CLEF_W + 14 + i * NOTE_SP + NOTE_SP);
          }
          void prevCum;
        });
        return barXs.map((x, i) => (
          <line key={i} x1={x} y1={STAFF_BOTTOM - 8 * HALF_STEP} x2={x} y2={STAFF_BOTTOM} stroke="#aaa" strokeWidth="0.7" />
        ));
      })()}

      {notes.map((n, i) => {
        const step = noteStaffStep(n.note, n.octave);
        const y = STAFF_BOTTOM - step * HALF_STEP;
        const isFilled = n.duration === 'quarter' || n.duration === 'eighth';
        const hasStem = n.duration !== 'whole';
        const stemUp = step <= 4;
        const ledgers = getLedgerLines(step);
        const isAccidental = n.note.length > 1;
        const accSymbol = n.note.endsWith('#') ? '♯' : '♭';
        const x = CLEF_W + 30 + i * NOTE_SP;

        return (
          <g key={i}>
            {ledgers.map(ls => (
              <line key={ls} x1={x - 14} y1={STAFF_BOTTOM - ls * HALF_STEP} x2={x + 14} y2={STAFF_BOTTOM - ls * HALF_STEP} stroke="#555" strokeWidth="1.1" />
            ))}
            {isAccidental && (
              <text x={x - 18} y={y + 5} fontSize="13" fontFamily="serif" fill="#1a1a1a" textAnchor="middle">{accSymbol}</text>
            )}
            {hasStem && (
              <line x1={stemUp ? x + NOTE_RX : x - NOTE_RX} y1={y} x2={stemUp ? x + NOTE_RX : x - NOTE_RX} y2={stemUp ? y - 30 : y + 30} stroke="#1a1a1a" strokeWidth="1.4" />
            )}
            {n.duration === 'eighth' && (
              <path d={stemUp ? `M ${x + NOTE_RX} ${y - 30} Q ${x + 20} ${y - 20} ${x + 13} ${y - 13}` : `M ${x - NOTE_RX} ${y + 30} Q ${x - 20} ${y + 20} ${x - 13} ${y + 13}`} fill="none" stroke="#1a1a1a" strokeWidth="1.4" />
            )}
            <ellipse cx={x} cy={y} rx={NOTE_RX} ry={NOTE_RY} fill={isFilled ? '#1a1a1a' : '#fff'} stroke="#1a1a1a" strokeWidth="1.3" transform={`rotate(-15,${x},${y})`} />
          </g>
        );
      })}

      {notes.length === 0 && (
        <text x={CLEF_W + 30} y={STAFF_BOTTOM - 4 * HALF_STEP} fontSize="12" fontFamily="system-ui,sans-serif" fill="#bbb">Chargement…</text>
      )}
    </svg>
  );
}

// ── Chord grid ───────────────────────────────────────────────────────────────

function ChordGrid({
  exercise,
  attempt,
  onChange,
}: {
  exercise: MelodyExercise;
  attempt: string[][];
  onChange: (mi: number, chords: string[]) => void;
}) {
  const measures = exercise.measures;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${measures}, 1fr)`, gap: 8 }}>
      {Array.from({ length: measures }, (_, mi) => {
        const selected = attempt[mi] ?? [];
        const pool = exercise.pool;

        return (
          <div key={mi} style={{ background: '#faf8f5', border: '0.5px solid #e0dbd3', borderRadius: 8, padding: 10 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#BA7517', letterSpacing: '0.1em', marginBottom: 6 }}>
              M {mi + 1}
            </div>

            {/* Selected chords badges */}
            <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', minHeight: 28, marginBottom: 8 }}>
              {selected.length === 0 && (
                <span style={{ fontSize: 11, color: '#ccc', fontStyle: 'italic' }}>—</span>
              )}
              {selected.map((c, ci) => (
                <button
                  key={ci}
                  onClick={() => {
                    const next = selected.filter((_, i) => i !== ci);
                    onChange(mi, next);
                  }}
                  style={{
                    padding: '2px 8px',
                    borderRadius: 4,
                    background: '#5C3D6E',
                    color: '#fff',
                    border: 'none',
                    fontSize: 12,
                    fontWeight: 600,
                    fontFamily: 'system-ui,sans-serif',
                    cursor: 'pointer',
                  }}
                >
                  {c} ✕
                </button>
              ))}
            </div>

            {/* Pool chord buttons */}
            <div style={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
              {pool.map(chord => {
                const isSelected = selected.includes(chord);
                return (
                  <button
                    key={chord}
                    onClick={() => {
                      if (isSelected) {
                        onChange(mi, selected.filter(c => c !== chord));
                      } else if (selected.length < 2) {
                        onChange(mi, [...selected, chord]);
                      } else {
                        onChange(mi, [selected[0], chord]);
                      }
                    }}
                    style={{
                      padding: '3px 7px',
                      borderRadius: 4,
                      border: `0.5px solid ${isSelected ? '#5C3D6E' : '#e0dbd3'}`,
                      background: isSelected ? '#F0EBF8' : '#fff',
                      color: isSelected ? '#5C3D6E' : '#444',
                      fontSize: 11,
                      fontFamily: 'system-ui,sans-serif',
                      cursor: 'pointer',
                      fontWeight: isSelected ? 600 : 400,
                    }}
                  >
                    {chord}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Score display ────────────────────────────────────────────────────────────

function ScoreBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <span style={{ fontSize: 12, color: '#666' }}>{label}</span>
        <span style={{ fontSize: 12, fontWeight: 700, color }}>{value}/100</span>
      </div>
      <div style={{ height: 6, background: '#f0ece6', borderRadius: 3, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${value}%`, background: color, borderRadius: 3, transition: 'width .5s ease' }} />
      </div>
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────────────────

type Step = 'select' | 'harmonize' | 'results' | 'solution';

const STYLE_LABELS: Record<string, string> = {
  classique: 'Classique', jazz: 'Jazz', modal: 'Modal', romantique: 'Romantique',
};

const STYLE_COLORS: Record<string, string> = {
  classique: '#185FA5', jazz: '#BA7517', modal: '#2E8B57', romantique: '#7B3F9E',
};

export default function CompositionGuidee() {
  const [step, setStep] = useState<Step>('select');
  const [exercise, setExercise] = useState<MelodyExercise | null>(null);
  const [attempt, setAttempt] = useState<string[][]>([[], [], [], []]);
  const [score, setScore] = useState<HarmonizationScore | null>(null);
  const [filterDifficulty, setFilterDifficulty] = useState<1 | 2 | 3 | null>(null);
  const [filterStyle, setFilterStyle] = useState<string | null>(null);
  const [tempo, setTempo] = useState(80);
  const pianoRef = useRef<PianoPlayerRef>(null);

  const filtered = useMemo(() => {
    let list = MELODIES;
    if (filterDifficulty) list = list.filter(m => m.difficulty === filterDifficulty);
    if (filterStyle) list = list.filter(m => m.style === filterStyle);
    return list;
  }, [filterDifficulty, filterStyle]);

  const handleSelect = (ex: MelodyExercise) => {
    setExercise(ex);
    setAttempt(Array.from({ length: ex.measures }, () => []));
    setScore(null);
    setStep('harmonize');
  };

  const handleAttemptChange = (mi: number, chords: string[]) => {
    setAttempt(prev => {
      const next = [...prev];
      next[mi] = chords;
      return next;
    });
  };

  const handleValidate = () => {
    if (!exercise) return;
    const result = evaluateHarmonization(exercise, attempt);
    setScore(result);
    setStep('results');
  };

  const handlePlayMelody = useCallback(() => {
    if (!exercise || !pianoRef.current?.isReady) return;
    const beatSec = 60 / tempo;
    const voicings = exercise.notes.map(n => [`${n.note}:${n.octave - 1}`]);
    pianoRef.current.playVoicingSequence(voicings, { interval: beatSec, duration: beatSec * 0.88 });
  }, [exercise, tempo]);

  const handlePlayVersion = useCallback(() => {
    if (!exercise || !pianoRef.current?.isReady) return;
    const beatSec = 60 / tempo;
    const bpm = exercise.timeSignature === '4/4' ? 4 : 3;
    const dBeats: Record<string, number> = { whole: 4, half: 2, quarter: 1, eighth: 0.5 };

    // Build combined melody + chord root voicings per note
    const voicings: string[][] = [];
    let measureIdx = 0;
    let beatsInMeasure = 0;

    for (const note of exercise.notes) {
      const dur = dBeats[note.duration] ?? 1;
      const mChords = (attempt[measureIdx] ?? []).filter(c => c !== '');
      const chordIdx = mChords.length === 2 && beatsInMeasure >= bpm / 2 ? 1 : 0;
      const chord = mChords[chordIdx];

      const melSpec = `${note.note}:${note.octave - 1}`;
      const voicing: string[] = [melSpec];

      if (chord) {
        const bassSpecs = getChordBassSpecs(chord, 1);
        voicing.push(...bassSpecs);
      }

      voicings.push(voicing);

      beatsInMeasure += dur;
      if (beatsInMeasure >= bpm - 0.01) {
        measureIdx++;
        beatsInMeasure = 0;
      }
    }

    pianoRef.current.playVoicingSequence(voicings, { interval: beatSec, duration: beatSec * 0.88 });
  }, [exercise, attempt, tempo]);

  const handlePlaySolution = useCallback(() => {
    if (!exercise || !pianoRef.current?.isReady) return;
    const beatSec = 60 / tempo;
    const bpm = exercise.timeSignature === '4/4' ? 4 : 3;
    const dBeats: Record<string, number> = { whole: 4, half: 2, quarter: 1, eighth: 0.5 };

    const voicings: string[][] = [];
    let measureIdx = 0;
    let beatsInMeasure = 0;

    for (const note of exercise.notes) {
      const dur = dBeats[note.duration] ?? 1;
      const mChords = (exercise.suggestedChords[measureIdx] ?? []);
      const chordIdx = mChords.length === 2 && beatsInMeasure >= bpm / 2 ? 1 : 0;
      const chord = mChords[chordIdx];

      const melSpec = `${note.note}:${note.octave - 1}`;
      const voicing: string[] = [melSpec];
      if (chord) voicing.push(...getChordBassSpecs(chord, 1));

      voicings.push(voicing);

      beatsInMeasure += dur;
      if (beatsInMeasure >= bpm - 0.01) {
        measureIdx++;
        beatsInMeasure = 0;
      }
    }

    pianoRef.current.playVoicingSequence(voicings, { interval: beatSec, duration: beatSec * 0.88 });
  }, [exercise, tempo]);

  const scoreColor = (v: number) => v >= 75 ? '#2E8B57' : v >= 50 ? '#BA7517' : '#c0392b';

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <main style={{ minHeight: '100vh', background: '#f4f1ec', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: '#BA7517', textTransform: 'uppercase', marginBottom: 4 }}>
            Outil d'entraînement
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
            <h1 style={{ fontSize: 24, fontWeight: 500, color: '#1a1a1a', margin: 0 }}>
              ✎ Composition guidée
            </h1>
            {step !== 'select' && (
              <button
                onClick={() => setStep('select')}
                style={{ padding: '6px 14px', borderRadius: 6, border: '0.5px solid #e0dbd3', background: '#fff', color: '#666', fontSize: 12, fontFamily: 'system-ui,sans-serif', cursor: 'pointer' }}
              >
                ← Choisir un autre exercice
              </button>
            )}
          </div>
        </div>

        {/* ── STEP 1 : Exercise selection ─────────────────────────────────── */}
        {step === 'select' && (
          <div>
            {/* Filters */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: '1.5rem', alignItems: 'center' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: '0.08em' }}>NIVEAU</span>
              {([null, 1, 2, 3] as (1 | 2 | 3 | null)[]).map(d => (
                <button
                  key={d ?? 'all'}
                  onClick={() => setFilterDifficulty(d)}
                  style={{
                    padding: '4px 12px', borderRadius: 20,
                    border: '0.5px solid ' + (filterDifficulty === d ? '#5C3D6E' : '#e0dbd3'),
                    background: filterDifficulty === d ? '#5C3D6E' : '#fff',
                    color: filterDifficulty === d ? '#fff' : '#444',
                    fontSize: 12, fontFamily: 'system-ui,sans-serif', cursor: 'pointer',
                  }}
                >
                  {d === null ? 'Tous' : `Niveau ${d}`}
                </button>
              ))}
              <div style={{ width: 1, height: 20, background: '#e0dbd3', margin: '0 4px' }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: '0.08em' }}>STYLE</span>
              {([null, 'classique', 'jazz', 'modal', 'romantique'] as (string | null)[]).map(s => (
                <button
                  key={s ?? 'all'}
                  onClick={() => setFilterStyle(s)}
                  style={{
                    padding: '4px 12px', borderRadius: 20,
                    border: '0.5px solid ' + (filterStyle === s ? (STYLE_COLORS[s ?? ''] ?? '#5C3D6E') : '#e0dbd3'),
                    background: filterStyle === s ? (STYLE_COLORS[s ?? ''] ?? '#5C3D6E') : '#fff',
                    color: filterStyle === s ? '#fff' : '#444',
                    fontSize: 12, fontFamily: 'system-ui,sans-serif', cursor: 'pointer',
                  }}
                >
                  {s === null ? 'Tous' : STYLE_LABELS[s]}
                </button>
              ))}
            </div>

            {/* Exercise grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 10 }}>
              {filtered.map(ex => (
                <button
                  key={ex.id}
                  onClick={() => handleSelect(ex)}
                  style={{
                    textAlign: 'left',
                    background: '#fff',
                    border: '0.5px solid #e8e3db',
                    borderRadius: 10,
                    padding: '16px 18px',
                    cursor: 'pointer',
                    fontFamily: 'system-ui,sans-serif',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{
                      fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
                      color: STYLE_COLORS[ex.style] ?? '#888',
                      textTransform: 'uppercase',
                    }}>
                      {STYLE_LABELS[ex.style]}
                    </span>
                    <span style={{ fontSize: 11, color: '#bbb' }}>
                      {'★'.repeat(ex.difficulty)}{'☆'.repeat(3 - ex.difficulty)}
                    </span>
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#1a1a1a', marginBottom: 4 }}>
                    {ex.title}
                  </div>
                  {ex.composer && (
                    <div style={{ fontSize: 11, color: '#888', marginBottom: 6 }}>style {ex.composer}</div>
                  )}
                  <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginTop: 6 }}>
                    {ex.concepts.slice(0, 2).map(c => (
                      <span key={c} style={{ fontSize: 10, padding: '2px 6px', borderRadius: 3, background: '#f0ece6', color: '#666' }}>
                        {c}
                      </span>
                    ))}
                  </div>
                  <div style={{ fontSize: 12, color: '#185FA5', fontWeight: 600, marginTop: 10 }}>
                    Démarrer →
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── STEP 2 : Harmonize ────────────────────────────────────────────── */}
        {(step === 'harmonize' || step === 'results' || step === 'solution') && exercise && (
          <div>
            {/* Exercise header */}
            <div style={{ background: '#fff', border: '0.5px solid #e8e3db', borderRadius: 10, padding: '14px 18px', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, color: STYLE_COLORS[exercise.style] ?? '#888', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 2 }}>
                  {STYLE_LABELS[exercise.style]} · Niveau {'★'.repeat(exercise.difficulty)}
                </div>
                <div style={{ fontSize: 16, fontWeight: 600, color: '#1a1a1a' }}>{exercise.title}</div>
                <div style={{ fontSize: 12, color: '#888', marginTop: 2 }}>
                  Tonalité : {exercise.keySignature} · {exercise.timeSignature}
                </div>
              </div>
              <div style={{ display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap' }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: '#888' }}>♩=</span>
                <input
                  type="number" min={50} max={200} value={tempo}
                  onChange={e => setTempo(Math.max(50, Math.min(200, Number(e.target.value))))}
                  style={{ width: 52, padding: '4px 6px', border: '0.5px solid #e0dbd3', borderRadius: 6, fontSize: 13, textAlign: 'center', fontFamily: 'system-ui,sans-serif', color: '#1a1a1a' }}
                />
                <button onClick={handlePlayMelody} style={{ padding: '6px 12px', borderRadius: 6, border: '0.5px solid #185FA5', background: '#185FA5', color: '#fff', fontSize: 12, fontFamily: 'system-ui,sans-serif', cursor: 'pointer', fontWeight: 600 }}>
                  ▶ Écouter la mélodie
                </button>
              </div>
            </div>

            {/* Melody staff */}
            <div style={{ background: '#fff', border: '0.5px solid #e8e3db', borderRadius: 10, padding: '16px 20px', marginBottom: '1rem', overflowX: 'auto' }}>
              <MelodyStaff exercise={exercise} />
            </div>

            {/* Hint */}
            <div style={{ background: '#fffbf0', border: '0.5px solid #E9C97E', borderRadius: 8, padding: '10px 14px', marginBottom: '1rem', fontSize: 12, color: '#5a4020', lineHeight: 1.6 }}>
              💡 {exercise.hint}
            </div>
          </div>
        )}

        {step === 'harmonize' && exercise && (
          <div>
            {/* Chord grid */}
            <div style={{ background: '#fff', border: '0.5px solid #e8e3db', borderRadius: 10, padding: '16px 20px', marginBottom: '1rem' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>
                Grille d'harmonisation — choisissez 1 ou 2 accords par mesure
              </div>
              <ChordGrid exercise={exercise} attempt={attempt} onChange={handleAttemptChange} />
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <button
                onClick={handlePlayVersion}
                disabled={attempt.every(m => m.length === 0)}
                style={{ padding: '8px 16px', borderRadius: 6, border: '0.5px solid #185FA5', background: attempt.every(m => m.length === 0) ? '#f0ece6' : '#185FA5', color: attempt.every(m => m.length === 0) ? '#bbb' : '#fff', fontSize: 13, fontFamily: 'system-ui,sans-serif', cursor: 'pointer', fontWeight: 600 }}
              >
                ▶ Écouter ma version
              </button>
              <button
                onClick={handleValidate}
                disabled={attempt.every(m => m.length === 0)}
                style={{ padding: '8px 18px', borderRadius: 6, border: '0.5px solid #5C3D6E', background: attempt.every(m => m.length === 0) ? '#f0ece6' : '#5C3D6E', color: attempt.every(m => m.length === 0) ? '#bbb' : '#fff', fontSize: 13, fontFamily: 'system-ui,sans-serif', cursor: 'pointer', fontWeight: 600 }}
              >
                Valider mon harmonisation →
              </button>
            </div>

            {/* Piano (hidden, for playback only) */}
            <div style={{ height: 0, overflow: 'hidden', pointerEvents: 'none' }}>
              <PianoPlayer ref={pianoRef} octaves={3} startOctave={1} showLabels={false} />
            </div>
          </div>
        )}

        {/* ── STEP 3 : Results ─────────────────────────────────────────────── */}
        {step === 'results' && score && exercise && (
          <div>
            {/* Global score */}
            <div style={{ background: '#fff', border: '0.5px solid #e8e3db', borderRadius: 10, padding: '20px 24px', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap', marginBottom: 20 }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 48, fontWeight: 700, color: scoreColor(score.global), lineHeight: 1 }}>
                    {score.global}
                  </div>
                  <div style={{ fontSize: 11, color: '#888', marginTop: 4 }}>/ 100</div>
                </div>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <div style={{ fontSize: 16, fontWeight: 600, color: score.global >= 75 ? '#2E8B57' : score.global >= 50 ? '#BA7517' : '#c0392b', marginBottom: 4 }}>
                    {score.global >= 75 ? 'Excellente harmonisation !' : score.global >= 55 ? 'Bonne tentative !' : 'À retravailler'}
                  </div>
                  <div style={{ fontSize: 13, color: '#666' }}>
                    {score.global >= 75 ? 'Les notes de la mélodie s\'intègrent naturellement dans vos accords.' : score.global >= 55 ? 'L\'ensemble est cohérent mais quelques choix peuvent être améliorés.' : 'Certains accords créent des dissonances difficiles à justifier musicalement.'}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <ScoreBar label="Compatibilité mélodie/accord" value={score.compatibility} color={scoreColor(score.compatibility)} />
                <ScoreBar label="Cohérence fonctionnelle (T/SD/D)" value={score.functions} color={scoreColor(score.functions)} />
                <ScoreBar label="Cadence finale" value={score.cadences} color={scoreColor(score.cadences)} />
              </div>
            </div>

            {/* Your attempt recap */}
            <div style={{ background: '#fff', border: '0.5px solid #e8e3db', borderRadius: 10, padding: '14px 18px', marginBottom: '1rem' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: '0.08em', marginBottom: 10 }}>VOTRE HARMONISATION</div>
              <div style={{ display: 'grid', gridTemplateColumns: `repeat(${exercise.measures}, 1fr)`, gap: 6 }}>
                {attempt.map((chords, mi) => (
                  <div key={mi} style={{ textAlign: 'center', padding: '8px 4px', background: '#faf8f5', borderRadius: 6 }}>
                    <div style={{ fontSize: 10, color: '#bbb', marginBottom: 4 }}>M {mi + 1}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#5C3D6E' }}>
                      {chords.join(' / ') || '—'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feedback */}
            {score.feedback.length > 0 && (
              <div style={{ background: '#fff', border: '0.5px solid #e8e3db', borderRadius: 10, padding: '14px 18px', marginBottom: '1rem' }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: '0.08em', marginBottom: 10 }}>RETOUR DÉTAILLÉ</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {score.feedback.map((f, i) => (
                    <div key={i} style={{
                      fontSize: 12, color: f.startsWith('✓') ? '#2E8B57' : '#BA7517',
                      padding: '6px 10px', borderRadius: 6,
                      background: f.startsWith('✓') ? '#f0faf0' : '#fff9f0',
                      lineHeight: 1.5,
                    }}>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <button onClick={() => setStep('harmonize')} style={{ padding: '8px 16px', borderRadius: 6, border: '0.5px solid #e0dbd3', background: '#fff', color: '#444', fontSize: 13, fontFamily: 'system-ui,sans-serif', cursor: 'pointer' }}>
                ↩ Réessayer
              </button>
              <button onClick={() => setStep('solution')} style={{ padding: '8px 16px', borderRadius: 6, border: '0.5px solid #BA7517', background: '#BA7517', color: '#fff', fontSize: 13, fontFamily: 'system-ui,sans-serif', cursor: 'pointer', fontWeight: 600 }}>
                Voir la solution de référence →
              </button>
            </div>

            {/* Piano for results playback */}
            <div style={{ height: 0, overflow: 'hidden', pointerEvents: 'none' }}>
              <PianoPlayer ref={pianoRef} octaves={3} startOctave={1} showLabels={false} />
            </div>
          </div>
        )}

        {/* ── STEP 4 : Reference solution ──────────────────────────────────── */}
        {step === 'solution' && exercise && (
          <div>
            <div style={{ background: '#fff', border: '0.5px solid #e8e3db', borderRadius: 10, padding: '18px 20px', marginBottom: '1rem' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: '0.08em', marginBottom: 14 }}>SOLUTION DE RÉFÉRENCE</div>

              {/* Suggested chords grid */}
              <div style={{ display: 'grid', gridTemplateColumns: `repeat(${exercise.measures}, 1fr)`, gap: 8, marginBottom: 16 }}>
                {exercise.suggestedChords.map((chords, mi) => (
                  <div key={mi} style={{ background: '#f0faf0', border: '0.5px solid #a8d8a8', borderRadius: 8, padding: '10px 12px' }}>
                    <div style={{ fontSize: 10, color: '#2E8B57', fontWeight: 700, marginBottom: 6 }}>M {mi + 1}</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#1a4a1a', marginBottom: 8 }}>
                      {chords.join(' / ')}
                    </div>
                    <div style={{ fontSize: 11, color: '#444', lineHeight: 1.5 }}>
                      {exercise.solutionExplanation[mi]}
                    </div>
                  </div>
                ))}
              </div>

              {/* Concepts */}
              <div style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: '0.08em', marginBottom: 6 }}>CONCEPTS ILLUSTRÉS</div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {exercise.concepts.map(c => (
                    <span key={c} style={{ fontSize: 12, padding: '3px 10px', borderRadius: 4, background: '#f0ece6', color: '#5a4020', border: '0.5px solid #e0dbd3' }}>{c}</span>
                  ))}
                </div>
              </div>

              <button
                onClick={handlePlaySolution}
                style={{ padding: '8px 16px', borderRadius: 6, border: '0.5px solid #2E8B57', background: '#2E8B57', color: '#fff', fontSize: 13, fontFamily: 'system-ui,sans-serif', cursor: 'pointer', fontWeight: 600 }}
              >
                ▶ Écouter la solution
              </button>
            </div>

            {/* Your attempt vs solution */}
            {score && (
              <div style={{ background: '#fff', border: '0.5px solid #e8e3db', borderRadius: 10, padding: '14px 18px', marginBottom: '1rem' }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: '0.08em', marginBottom: 10 }}>COMPARAISON</div>
                <div style={{ display: 'grid', gridTemplateColumns: `repeat(${exercise.measures}, 1fr)`, gap: 6 }}>
                  {exercise.suggestedChords.map((sug, mi) => {
                    const myChords = attempt[mi] ?? [];
                    const match = sug.some(s => myChords.includes(s));
                    return (
                      <div key={mi} style={{ borderRadius: 6, overflow: 'hidden', border: `0.5px solid ${match ? '#a8d8a8' : '#e8e3db'}` }}>
                        <div style={{ padding: '6px 8px', background: match ? '#f0faf0' : '#faf8f5', fontSize: 11 }}>
                          <div style={{ color: '#888', marginBottom: 2 }}>Votre réponse</div>
                          <div style={{ fontWeight: 600, color: '#5C3D6E' }}>{myChords.join(' / ') || '—'}</div>
                        </div>
                        <div style={{ padding: '6px 8px', background: '#f0faf0', fontSize: 11, borderTop: '0.5px solid #a8d8a8' }}>
                          <div style={{ color: '#888', marginBottom: 2 }}>Référence</div>
                          <div style={{ fontWeight: 600, color: '#2E8B57' }}>{sug.join(' / ')}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <button onClick={() => setStep('harmonize')} style={{ padding: '8px 16px', borderRadius: 6, border: '0.5px solid #e0dbd3', background: '#fff', color: '#444', fontSize: 13, fontFamily: 'system-ui,sans-serif', cursor: 'pointer' }}>
                ↩ Réessayer
              </button>
              <button onClick={() => { setStep('select'); setExercise(null); }} style={{ padding: '8px 16px', borderRadius: 6, border: '0.5px solid #5C3D6E', background: '#5C3D6E', color: '#fff', fontSize: 13, fontFamily: 'system-ui,sans-serif', cursor: 'pointer', fontWeight: 600 }}>
                Exercice suivant →
              </button>
            </div>

            {/* Piano for solution playback */}
            <div style={{ height: 0, overflow: 'hidden', pointerEvents: 'none' }}>
              <PianoPlayer ref={pianoRef} octaves={3} startOctave={1} showLabels={false} />
            </div>
          </div>
        )}

      </div>
    </main>
  );
}

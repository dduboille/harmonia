'use client';

import React, { useState, useRef, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import PianoPlayer, { PianoPlayerRef } from './PianoPlayer';
import { MELODIES } from '@/data/melodies-exercices';
import type { MelodyExercise, MelodyNote } from '@/types/composition';
import { construirePalette, resoudreAccord, type AccordPalette } from '@/lib/palette-fonctionnelle';
import { realiserSATB, type Voicing } from '@/lib/satb-voicing';
import { corrigerHarmonisation, type CorrectionResult } from '@/lib/correction-harmonisation';

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

const STAFF_LINES = [0, 2, 4, 6, 8];

// ── Bass staff infrastructure ────────────────────────────────────────────────

const BASS_STAFF_BOTTOM = 340;
const SVG_HEIGHT_WITH_BASS = 430;

// Bass clef staff step: G2(std)=0, B2=2, D3=4, F3=6, A3=8
function bassStaffStep(note: string, stdOctave: number): number {
  return noteStaffStep(note, stdOctave) + 12;
}

// ── SATB voice leading (soprano fixed = melody) ──────────────────────────────

const ALL_SHARP_NAMES = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
const PC_FROM_NAME: Record<string, number> = {
  C:0,'C#':1,Db:1,D:2,'D#':3,Eb:3,E:4,F:5,'F#':6,Gb:6,
  G:7,'G#':8,Ab:8,A:9,'A#':10,Bb:10,B:11,
};

function noteMidiValue(name: string, octave: number): number {
  const pc = PC_FROM_NAME[name] ?? 0;
  return (octave + 1) * 12 + pc;
}

function midiToNameOct(midi: number): { name: string; octave: number } {
  return { name: ALL_SHARP_NAMES[midi % 12], octave: Math.floor(midi / 12) - 1 };
}

/**
 * Tonalité de l'exercice → { classe de la tonique, mode } que le moteur attend.
 * "Am"/"Cm"/"Em" portent le suffixe `m` : on l'ôte pour lire la fondamentale.
 */
function exerciseTonic(ex: MelodyExercise): { tonicPc: number; mode: 'major' | 'minor' } {
  const tonicPc = PC_FROM_NAME[ex.keySignature.replace(/m$/, '')] ?? 0;
  return { tonicPc, mode: ex.isMinor ? 'minor' : 'major' };
}

/**
 * Réalisation SATB d'un jeton de copie : id de palette ("V6/5") OU nom d'accord
 * de solution ("G7"). `resoudreAccord` fait le pont vers { pcs, bassPc } — donc la
 * BASSE suit le renversement — puis `realiserSATB` conduit alto/ténor. `null` si le
 * jeton est illisible : l'appelant n'affiche alors aucune voix d'accompagnement.
 */
function realiserPourJeton(
  jeton: string, sopMidi: number, prev: Voicing | null,
  tonicPc: number, mode: 'major' | 'minor',
): Voicing | null {
  const acc = resoudreAccord(jeton, tonicPc, mode);
  if (!acc) return null;
  return realiserSATB(acc.pcs, acc.bassPc, sopMidi, prev);
}

// ── Grand staff component ────────────────────────────────────────────────────

function MelodyStaff({
  exercise,
  attempt,
}: {
  exercise: MelodyExercise;
  attempt?: string[][];
}) {
  const notes = exercise.notes;
  const bpm = exercise.timeSignature === '4/4' ? 4 : 3;
  const { tonicPc, mode } = exerciseTonic(exercise);
  const dBeats: Record<string, number> = { whole: 4, half: 2, quarter: 1, eighth: 0.5 };
  const hasChords = Boolean(attempt?.some(m => m.length > 0));
  const svgW = Math.max(660, CLEF_W + 30 + notes.length * NOTE_SP + 40);
  const svgH = hasChords ? SVG_HEIGHT_WITH_BASS : SVG_HEIGHT;

  // Group notes by measure
  const measureNoteIndices: number[][] = [];
  {
    let cur: number[] = [];
    let cum = 0;
    notes.forEach((n, i) => {
      cur.push(i);
      cum += dBeats[n.duration] ?? 1;
      if (cum % bpm < 0.01) { measureNoteIndices.push([...cur]); cur = []; }
    });
    if (cur.length > 0) measureNoteIndices.push(cur);
  }

  // For each measure: index of the note at/after the half-measure beat
  const measureMidIndices = measureNoteIndices.map(indices => {
    let beats = 0;
    for (const idx of indices) {
      if (beats >= bpm / 2 - 0.01) return idx;
      beats += dBeats[notes[idx].duration] ?? 1;
    }
    return indices[Math.floor(indices.length / 2)];
  });

  // Barline x positions
  const barXs: number[] = [];
  {
    let cum = 0;
    notes.forEach((n, i) => {
      cum += dBeats[n.duration] ?? 1;
      if (cum % bpm < 0.01 && i < notes.length - 1) {
        barXs.push(CLEF_W + 14 + i * NOTE_SP + NOTE_SP);
      }
    });
  }

  const noteX = (i: number) => CLEF_W + 30 + i * NOTE_SP;

  return (
    <svg width={svgW} height={svgH} style={{ display: 'block', minWidth: svgW }}>

      {/* ── Treble staff ── */}
      {STAFF_LINES.map(s => (
        <line key={s} x1={10} y1={STAFF_BOTTOM - s * HALF_STEP} x2={svgW - 10} y2={STAFF_BOTTOM - s * HALF_STEP} stroke="#999" strokeWidth="0.8" />
      ))}
      <text x={14} y={STAFF_BOTTOM + 6} fontSize="95" fontFamily="'Times New Roman',Georgia,serif" fill="#1a1a1a">𝄞</text>
      <line x1={CLEF_W} y1={STAFF_BOTTOM - 8 * HALF_STEP} x2={CLEF_W} y2={STAFF_BOTTOM} stroke="#999" strokeWidth="1" />
      {barXs.map((x, i) => (
        <line key={i} x1={x} y1={STAFF_BOTTOM - 8 * HALF_STEP} x2={x} y2={STAFF_BOTTOM} stroke="#aaa" strokeWidth="0.7" />
      ))}

      {notes.map((n, i) => {
        const step = noteStaffStep(n.note, n.octave);
        const y = STAFF_BOTTOM - step * HALF_STEP;
        const isFilled = n.duration === 'quarter' || n.duration === 'eighth';
        const hasStem = n.duration !== 'whole';
        const stemUp = step <= 4;
        const ledgers = getLedgerLines(step);
        const isAccidental = n.note.length > 1;
        const accSymbol = n.note.endsWith('#') ? '♯' : '♭';
        const x = noteX(i);

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

      {/* ── Bass staff (shown when chords are selected) ── */}
      {hasChords && (() => {
        // Collect all chord positions and compute SATB voice leading sequentially.
        // `chord` porte désormais un id de palette ("V6/5") ou un nom ("G7") ; c'est
        // `realiserPourJeton` (via `resoudreAccord`) qui en tire les hauteurs + la basse.
        type ChordPos = { x: number; chord: string; sopIdx: number; twoPerBar: boolean };
        const positions: ChordPos[] = [];
        measureNoteIndices.forEach((indices, mi) => {
          const chords = (attempt?.[mi] ?? []).filter(c => c !== '');
          if (!chords.length) return;
          const twoPerBar = chords.length === 2;
          chords.forEach((chord, ci) => {
            const sopIdx = ci === 0 ? indices[0] : measureMidIndices[mi];
            positions.push({ x: noteX(sopIdx), chord, sopIdx, twoPerBar });
          });
        });

        let prevV: Voicing | null = null;
        const voicings: (Voicing | null)[] = positions.map(pos => {
          const sn = notes[pos.sopIdx];
          const sopMidi = noteMidiValue(sn.note, sn.octave);
          const v = realiserPourJeton(pos.chord, sopMidi, prevV, tonicPc, mode);
          if (v) prevV = v;
          return v;
        });

        function renderNote(
          x: number, y: number,
          hasSharp: boolean, stemUp: boolean | null, /* null = whole note */
          color: string, xOffset: number = 0
        ) {
          const cx = x + xOffset;
          return (
            <g>
              {hasSharp && (
                <text x={cx - 16} y={y + 5} fontSize="13" fontFamily="serif" fill={color} textAnchor="middle">♯</text>
              )}
              {stemUp !== null && (
                <line x1={stemUp ? cx + NOTE_RX : cx - NOTE_RX} y1={y}
                  x2={stemUp ? cx + NOTE_RX : cx - NOTE_RX} y2={stemUp ? y - 28 : y + 28}
                  stroke={color} strokeWidth="1.4" />
              )}
              <ellipse cx={cx} cy={y} rx={NOTE_RX} ry={NOTE_RY}
                fill="#fff" stroke={color} strokeWidth="1.3"
                transform={`rotate(-15,${cx},${y})`} />
            </g>
          );
        }

        return (
          <>
            {/* System bracket */}
            <line x1={8} y1={STAFF_BOTTOM - 8 * HALF_STEP} x2={8} y2={BASS_STAFF_BOTTOM} stroke="#444" strokeWidth="3" />
            {/* System connector between staves */}
            <line x1={CLEF_W} y1={STAFF_BOTTOM} x2={CLEF_W} y2={BASS_STAFF_BOTTOM - 8 * HALF_STEP} stroke="#bbb" strokeWidth="0.6" />
            {/* Bass staff lines */}
            {STAFF_LINES.map(s => (
              <line key={s} x1={10} y1={BASS_STAFF_BOTTOM - s * HALF_STEP} x2={svgW - 10} y2={BASS_STAFF_BOTTOM - s * HALF_STEP} stroke="#999" strokeWidth="0.8" />
            ))}
            <text x={15} y={BASS_STAFF_BOTTOM - HALF_STEP * 1 + 2} fontSize="54" fontFamily="'Times New Roman',Georgia,serif" fill="#1a1a1a">𝄢</text>
            <line x1={CLEF_W} y1={BASS_STAFF_BOTTOM - 8 * HALF_STEP} x2={CLEF_W} y2={BASS_STAFF_BOTTOM} stroke="#999" strokeWidth="1" />
            {barXs.map((bx, i) => (
              <line key={i} x1={bx} y1={BASS_STAFF_BOTTOM - 8 * HALF_STEP} x2={bx} y2={BASS_STAFF_BOTTOM} stroke="#aaa" strokeWidth="0.7" />
            ))}

            {positions.map((pos, pi) => {
              const { x, chord, twoPerBar } = pos;
              const atb = voicings[pi];
              if (!atb) return null; // jeton illisible : pas de voix d'accompagnement
              const stemMode = twoPerBar ? true : null; // half notes get stem, whole notes don't

              // Alto → treble staff (stem down, purple)
              const altInfo = midiToNameOct(atb.alto);
              const altStep = noteStaffStep(altInfo.name, altInfo.octave);
              const altY = STAFF_BOTTOM - altStep * HALF_STEP;
              const altLedgers = getLedgerLines(altStep);

              // Tenor → bass staff (stem up, purple), offset slightly right to avoid collision with bass
              const tenInfo = midiToNameOct(atb.tenor);
              const tenStep = bassStaffStep(tenInfo.name, tenInfo.octave);
              const tenY = BASS_STAFF_BOTTOM - tenStep * HALF_STEP;
              const tenLedgers = getLedgerLines(tenStep);

              // Bass → bass staff (stem down, black)
              const basInfo = midiToNameOct(atb.bass);
              const basStep = bassStaffStep(basInfo.name, basInfo.octave);
              const basY = BASS_STAFF_BOTTOM - basStep * HALF_STEP;
              const basLedgers = getLedgerLines(basStep);

              // Same pitch → offset tenor right so noteheads don't overlap
              const tenXOffset = Math.abs(tenY - basY) < 7 ? NOTE_RX * 2 + 1 : 0;

              return (
                <g key={pi}>
                  {/* Alto ledger lines on treble staff */}
                  {altLedgers.map(ls => (
                    <line key={ls} x1={x - 14} y1={STAFF_BOTTOM - ls * HALF_STEP} x2={x + 14} y2={STAFF_BOTTOM - ls * HALF_STEP} stroke="#555" strokeWidth="1.1" />
                  ))}
                  {renderNote(x, altY, altInfo.name.includes('#'), stemMode === null ? null : false, '#5C3D6E')}

                  {/* Tenor ledger lines on bass staff */}
                  {tenLedgers.map(ls => (
                    <line key={ls} x1={x + tenXOffset - 14} y1={BASS_STAFF_BOTTOM - ls * HALF_STEP} x2={x + tenXOffset + 14} y2={BASS_STAFF_BOTTOM - ls * HALF_STEP} stroke="#555" strokeWidth="1.1" />
                  ))}
                  {renderNote(x, tenY, tenInfo.name.includes('#'), stemMode === null ? null : true, '#5C3D6E', tenXOffset)}

                  {/* Bass ledger lines on bass staff */}
                  {basLedgers.map(ls => (
                    <line key={ls} x1={x - 14} y1={BASS_STAFF_BOTTOM - ls * HALF_STEP} x2={x + 14} y2={BASS_STAFF_BOTTOM - ls * HALF_STEP} stroke="#555" strokeWidth="1.1" />
                  ))}
                  {renderNote(x, basY, basInfo.name.includes('#'), stemMode === null ? null : false, '#1a1a1a')}

                  {/* Chord label (id de palette ou nom d'accord) */}
                  <text x={x} y={BASS_STAFF_BOTTOM + 18} fontSize="10" fontFamily="system-ui,sans-serif"
                    fill="#5C3D6E" fontWeight="700" textAnchor="middle">{chord}</text>
                </g>
              );
            })}
          </>
        );
      })()}
    </svg>
  );
}

// ── Palette d'accords par fonction ───────────────────────────────────────────

const GROUPE_COULEUR: Record<string, string> = {
  'Tonique': '#2E8B57',
  'Prédominante': '#185FA5',
  'Dominante': '#7B3F9E',
  'Chromatisme': '#BA7517',
};

/**
 * La palette : pour chaque mesure, les accords de `construirePalette` filtrés par
 * le NIVEAU de l'exercice, rangés en sous-sections Tonique / Prédominante /
 * Dominante / Chromatisme. Un clic stocke l'`accord.id` (jamais le nom) dans la
 * copie — un renversement comme "V6/5" y garde donc son identité harmonique.
 */
function PaletteGrid({
  exercise,
  attempt,
  onChange,
}: {
  exercise: MelodyExercise;
  attempt: string[][];
  onChange: (mi: number, chords: string[]) => void;
}) {
  const { tonicPc, mode } = exerciseTonic(exercise);
  const groupes = useMemo(
    () => construirePalette(tonicPc, mode, exercise.difficulty),
    [tonicPc, mode, exercise.difficulty],
  );
  // id → accord, pour afficher le nom d'un accord déjà sélectionné.
  const parId = useMemo(() => {
    const m = new Map<string, AccordPalette>();
    for (const g of groupes) for (const a of g.accords) m.set(a.id, a);
    return m;
  }, [groupes]);
  const groupesNonVides = groupes.filter(g => g.accords.length > 0);
  const measures = exercise.measures;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${measures}, minmax(160px, 1fr))`, gap: 8, overflowX: 'auto' }}>
      {Array.from({ length: measures }, (_, mi) => {
        const selected = attempt[mi] ?? [];
        const toggle = (id: string) => {
          if (selected.includes(id)) {
            onChange(mi, selected.filter(c => c !== id));
          } else if (selected.length < 2) {
            onChange(mi, [...selected, id]);
          } else {
            onChange(mi, [selected[0], id]);
          }
        };

        return (
          <div key={mi} style={{ background: '#faf8f5', border: '0.5px solid #e0dbd3', borderRadius: 8, padding: 10 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#BA7517', letterSpacing: '0.1em', marginBottom: 6 }}>
              M {mi + 1}
            </div>

            {/* Accords sélectionnés (cliquer pour retirer) */}
            <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', minHeight: 26, marginBottom: 8 }}>
              {selected.length === 0 && (
                <span style={{ fontSize: 11, color: '#ccc', fontStyle: 'italic' }}>—</span>
              )}
              {selected.map((id, ci) => {
                const a = parId.get(id);
                return (
                  <button
                    key={ci}
                    onClick={() => onChange(mi, selected.filter((_, i) => i !== ci))}
                    title={a ? `${a.nom} · ${a.degree}` : id}
                    style={{
                      padding: '2px 8px', borderRadius: 4, background: '#5C3D6E', color: '#fff',
                      border: 'none', fontSize: 12, fontWeight: 600, fontFamily: 'system-ui,sans-serif', cursor: 'pointer',
                    }}
                  >
                    {a ? a.nom : id} ✕
                  </button>
                );
              })}
            </div>

            {/* Palette par groupes fonctionnels */}
            {groupesNonVides.map(g => (
              <div key={g.titre} style={{ marginBottom: 8 }}>
                <div style={{ fontSize: 9, fontWeight: 700, color: GROUPE_COULEUR[g.titre], letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 4 }}>
                  {g.titre}
                </div>
                <div style={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                  {g.accords.map(a => {
                    const isSelected = selected.includes(a.id);
                    return (
                      <button
                        key={a.id}
                        onClick={() => toggle(a.id)}
                        style={{
                          display: 'flex', flexDirection: 'column', alignItems: 'center',
                          padding: '3px 6px', borderRadius: 4,
                          border: `0.5px solid ${isSelected ? '#5C3D6E' : '#e0dbd3'}`,
                          background: isSelected ? '#F0EBF8' : '#fff',
                          color: isSelected ? '#5C3D6E' : '#444',
                          fontFamily: 'system-ui,sans-serif', cursor: 'pointer', lineHeight: 1.15,
                        }}
                      >
                        <span style={{ fontSize: 11, fontWeight: isSelected ? 700 : 600 }}>{a.nom}</span>
                        <span style={{ fontSize: 8, color: isSelected ? '#7B5A8E' : '#999' }}>{a.degree}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

// ── Panneau d'analyse par le moteur ──────────────────────────────────────────

const FONCTION_LABEL: Record<string, string> = {
  T: 'Tonique', SD: 'Prédominante', D: 'Dominante', '?': '—',
};

/**
 * L'analyse, alimentée par `corrigerHarmonisation` (le vrai moteur) : par accord,
 * son degré et sa fonction ; par note de la mélodie, son statut — note de l'accord
 * (✓), note étrangère nommée par la taxonomie C1, ou dissonance non expliquée.
 */
function AnalysePanel({
  exercise,
  attempt,
}: {
  exercise: MelodyExercise;
  attempt: string[][];
}) {
  const anyAttempt = attempt.some(m => m.length > 0);
  const correction = useMemo(
    () => (anyAttempt ? corrigerHarmonisation(exercise, attempt) : null),
    [exercise, attempt, anyAttempt],
  );

  return (
    <div style={{ background: '#fff', border: '0.5px solid #e8e3db', borderRadius: 10, padding: '16px 20px', marginBottom: '1rem' }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>
        Analyse par le moteur harmonique
      </div>

      {!correction && (
        <div style={{ fontSize: 12, color: '#aaa', fontStyle: 'italic', fontFamily: 'system-ui,sans-serif' }}>
          Sélectionnez des accords ci-dessus pour voir l'analyse note par note.
        </div>
      )}

      {correction && (
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${exercise.measures}, minmax(140px, 1fr))`, gap: 10, overflowX: 'auto' }}>
          {Array.from({ length: exercise.measures }, (_, mi) => {
            const accs = correction.accords.filter(a => a.mesure === mi + 1);
            const notes = correction.notesMelodie.filter(n => n.mesure === mi + 1);
            const suggested = exercise.suggestedChords[mi] ?? [];

            return (
              <div key={mi} style={{ fontSize: 11, fontFamily: 'system-ui,sans-serif' }}>
                <div style={{ fontWeight: 700, color: '#BA7517', marginBottom: 6 }}>M {mi + 1}</div>

                {accs.length === 0 && (
                  <div style={{ color: '#ccc', fontStyle: 'italic' }}>— pas d'accord —</div>
                )}

                {accs.length > 0 && (
                  <>
                    {/* Accords analysés : degré + fonction */}
                    <div style={{ marginBottom: 6 }}>
                      {accs.map((a, ai) => (
                        <div key={ai} style={{ display: 'flex', alignItems: 'baseline', gap: 5, marginBottom: 2 }}>
                          <span style={{ fontWeight: 700, color: '#5C3D6E' }}>{a.degree}</span>
                          <span style={{ fontSize: 10, color: '#888' }}>{FONCTION_LABEL[a.fonction] ?? a.fonction}</span>
                          {a.resolue && (
                            <span style={{ fontSize: 9, color: '#2E8B57', fontWeight: 600 }}>résolue</span>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Notes de la mélodie : accord / étrangère nommée / dissonance */}
                    <div style={{ borderTop: '0.5px solid #f0ece6', paddingTop: 6 }}>
                      {notes.map((n, ni) => (
                        <div key={ni} style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
                          <span style={{ fontWeight: 600, color: '#1a1a1a', minWidth: 28 }}>{n.nom}</span>
                          {n.estAccord ? (
                            <span style={{ color: '#2E8B57', fontSize: 10, fontWeight: 600 }}>✓ accord</span>
                          ) : n.type !== null ? (
                            <span style={{ color: '#185FA5', fontSize: 10, fontWeight: 600 }}>{n.type}</span>
                          ) : (
                            <span style={{ color: '#c0392b', fontSize: 10, fontWeight: 600 }} title="Dissonance non expliquée par l'accord">étrangère</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {suggested.length > 0 && (
                  <div style={{ marginTop: 8, paddingTop: 6, borderTop: '0.5px solid #f0ece6' }}>
                    <div style={{ color: '#888', fontSize: 10, marginBottom: 3 }}>Piste :</div>
                    {suggested.map(c => (
                      <span key={c} style={{ display: 'inline-block', marginRight: 4, marginBottom: 2, padding: '1px 6px', background: '#E1F5EE', color: '#0F6E56', borderRadius: 4, fontSize: 10, fontWeight: 600 }}>
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
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

// Le score renvoyé par la correction (sans les listes note-à-note, gardées pour le panneau).
type Score = CorrectionResult['score'];

const STYLE_LABELS: Record<string, string> = {
  classique: 'Classique', jazz: 'Jazz', modal: 'Modal', romantique: 'Romantique',
};

const STYLE_COLORS: Record<string, string> = {
  classique: '#185FA5', jazz: '#BA7517', modal: '#2E8B57', romantique: '#7B3F9E',
};

export default function CompositionGuidee({ plan }: { plan?: string }) {
  const [step, setStep] = useState<Step>('select');
  const [exercise, setExercise] = useState<MelodyExercise | null>(null);
  const [attempt, setAttempt] = useState<string[][]>([[], [], [], []]);
  const [score, setScore] = useState<Score | null>(null);
  const [filterDifficulty, setFilterDifficulty] = useState<1 | 2 | 3 | null>(null);
  const [filterStyle, setFilterStyle] = useState<string | null>(null);
  const [tempo, setTempo] = useState(80);
  const pianoRef = useRef<PianoPlayerRef>(null);

  const isFree = !plan || plan === "free";
  const params = useParams();
  const locale = (params?.locale as string) ?? "fr";

  const filtered = useMemo(() => {
    let list = isFree ? MELODIES.slice(0, 1) : MELODIES;
    if (filterDifficulty) list = list.filter(m => m.difficulty === filterDifficulty);
    if (filterStyle) list = list.filter(m => m.style === filterStyle);
    return list;
  }, [filterDifficulty, filterStyle, isFree]);

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
    const result = corrigerHarmonisation(exercise, attempt);
    setScore(result.score);
    setStep('results');
  };

  const handlePlayMelody = useCallback(() => {
    if (!exercise || !pianoRef.current) return;
    const beatSec = 60 / tempo;
    const voicings = exercise.notes.map(n => [`${n.note}:${n.octave - 1}`]);
    pianoRef.current.playVoicingSequence(voicings, { interval: beatSec, duration: beatSec * 0.88 });
  }, [exercise, tempo]);

  // Pre-compute SATB voice leadings for a chord schedule, keyed by "measureIdx-chordIdx".
  // Chaque jeton (id de palette ou nom) est résolu par `realiserPourJeton` → la basse
  // suit le renversement.
  function buildATBMap(
    exNotes: MelodyNote[],
    chordsByMeasure: string[][],
    bpm: number,
    tonicPc: number,
    mode: 'major' | 'minor',
  ): Map<string, Voicing> {
    const dBeats: Record<string, number> = { whole: 4, half: 2, quarter: 1, eighth: 0.5 };
    const map = new Map<string, Voicing>();
    let prev: Voicing | null = null;
    let mi = 0, mb = 0;
    const seen = new Set<string>();
    for (const note of exNotes) {
      const dur = dBeats[note.duration] ?? 1;
      const mc = (chordsByMeasure[mi] ?? []).filter(c => c !== '');
      const ci = mc.length === 2 && mb >= bpm / 2 ? 1 : 0;
      const chord = mc[ci];
      const key = `${mi}-${ci}`;
      if (chord && !seen.has(key)) {
        seen.add(key);
        const sopMidi = noteMidiValue(note.note, note.octave);
        const atb = realiserPourJeton(chord, sopMidi, prev, tonicPc, mode);
        if (atb) {
          map.set(key, atb);
          prev = atb;
        }
      }
      mb += dur;
      if (mb >= bpm - 0.01) { mi++; mb = 0; }
    }
    return map;
  }

  function atbSpecs(atb: Voicing): string[] {
    return [atb.alto, atb.tenor, atb.bass].map(midi => {
      const n = midiToNameOct(midi);
      return `${n.name}:${n.octave - 1}`;
    });
  }

  const handlePlayVersion = useCallback(() => {
    if (!exercise || !pianoRef.current) return;
    const piano = pianoRef.current;
    const beatSec = 60 / tempo;
    const bpm = exercise.timeSignature === '4/4' ? 4 : 3;
    const { tonicPc, mode } = exerciseTonic(exercise);
    const dBeats: Record<string, number> = { whole: 4, half: 2, quarter: 1, eighth: 0.5 };
    const atbMap = buildATBMap(exercise.notes, attempt.map(m => m ?? []), bpm, tonicPc, mode);

    let globalBeat = 0;
    let measureIdx = 0;
    let measureBeat = 0;
    const scheduled = new Set<string>();

    for (const note of exercise.notes) {
      const dur = dBeats[note.duration] ?? 1;
      const mChords = (attempt[measureIdx] ?? []).filter(c => c !== '');
      const chordIdx = mChords.length === 2 && measureBeat >= bpm / 2 ? 1 : 0;
      const chord = mChords[chordIdx];

      piano.playVoicing([`${note.note}:${note.octave - 1}`], {
        startTime: globalBeat * beatSec,
        duration: dur * beatSec * 0.88,
        velocity: 0.82,
      });

      const segKey = `${measureIdx}-${chordIdx}`;
      if (chord && !scheduled.has(segKey)) {
        scheduled.add(segKey);
        const segStartBeat = measureIdx * bpm + (chordIdx === 1 ? bpm / 2 : 0);
        const segEndBeat = chordIdx === 0 && mChords.length === 2
          ? measureIdx * bpm + bpm / 2
          : (measureIdx + 1) * bpm;
        const atb = atbMap.get(segKey);
        const chordSpecs = atb ? atbSpecs(atb) : [];
        piano.playVoicing(chordSpecs, {
          startTime: segStartBeat * beatSec,
          duration: (segEndBeat - segStartBeat) * beatSec * 0.96,
          velocity: 0.52,
        });
      }

      measureBeat += dur;
      globalBeat += dur;
      if (measureBeat >= bpm - 0.01) { measureIdx++; measureBeat = 0; }
    }
  }, [exercise, attempt, tempo]);

  const handlePlaySolution = useCallback(() => {
    if (!exercise || !pianoRef.current) return;
    const piano = pianoRef.current;
    const beatSec = 60 / tempo;
    const bpm = exercise.timeSignature === '4/4' ? 4 : 3;
    const { tonicPc, mode } = exerciseTonic(exercise);
    const dBeats: Record<string, number> = { whole: 4, half: 2, quarter: 1, eighth: 0.5 };
    const atbMap = buildATBMap(exercise.notes, exercise.suggestedChords, bpm, tonicPc, mode);

    let globalBeat = 0;
    let measureIdx = 0;
    let measureBeat = 0;
    const scheduled = new Set<string>();

    for (const note of exercise.notes) {
      const dur = dBeats[note.duration] ?? 1;
      const mChords = exercise.suggestedChords[measureIdx] ?? [];
      const chordIdx = mChords.length === 2 && measureBeat >= bpm / 2 ? 1 : 0;
      const chord = mChords[chordIdx];

      piano.playVoicing([`${note.note}:${note.octave - 1}`], {
        startTime: globalBeat * beatSec,
        duration: dur * beatSec * 0.88,
        velocity: 0.82,
      });

      const segKey = `${measureIdx}-${chordIdx}`;
      if (chord && !scheduled.has(segKey)) {
        scheduled.add(segKey);
        const segStartBeat = measureIdx * bpm + (chordIdx === 1 ? bpm / 2 : 0);
        const segEndBeat = chordIdx === 0 && mChords.length === 2
          ? measureIdx * bpm + bpm / 2
          : (measureIdx + 1) * bpm;
        const atb = atbMap.get(segKey);
        const chordSpecs = atb ? atbSpecs(atb) : [];
        piano.playVoicing(chordSpecs, {
          startTime: segStartBeat * beatSec,
          duration: (segEndBeat - segStartBeat) * beatSec * 0.96,
          velocity: 0.52,
        });
      }

      measureBeat += dur;
      globalBeat += dur;
      if (measureBeat >= bpm - 0.01) { measureIdx++; measureBeat = 0; }
    }
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
            {/* Free user notice */}
            {isFree && (
              <div style={{
                background: "#FAEEDA", border: "0.5px solid #F6AD55",
                borderRadius: 8, padding: "10px 14px", marginBottom: "1.5rem",
                fontSize: 13, color: "#744210", lineHeight: 1.5,
                fontFamily: 'system-ui,sans-serif',
              }}>
                ✦ Mode gratuit — 1 exercice disponible.{" "}
                <Link href={`/${locale}/upgrade`} style={{ color: "#BA7517", fontWeight: 700, textDecoration: "none" }}>
                  Passer Pro
                </Link>{" "}pour accéder à tous les exercices.
              </div>
            )}

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

            {/* Pre-requisite banner */}
            <div style={{ background: '#FFF4E8', border: '0.5px solid #F5C77E', borderRadius: 10, padding: '12px 16px', marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
              <div style={{ fontSize: 12, color: '#8a5a10', lineHeight: 1.5 }}>
                <span style={{ fontWeight: 700 }}>♪ Prérequis —</span> Savez-vous identifier les notes étrangères ? Maîtrisez-les avant d'harmoniser.
              </div>
              <a href="notes-etrangeres" style={{ fontSize: 12, fontWeight: 700, color: '#BA7517', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                S'entraîner →
              </a>
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
              <MelodyStaff exercise={exercise} attempt={step === 'solution' ? exercise.suggestedChords : attempt} />
            </div>

            {/* Hint */}
            <div style={{ background: '#fffbf0', border: '0.5px solid #E9C97E', borderRadius: 8, padding: '10px 14px', marginBottom: '1rem', fontSize: 12, color: '#5a4020', lineHeight: 1.6 }}>
              💡 {exercise.hint}
            </div>
          </div>
        )}

        {step === 'harmonize' && exercise && (
          <div>
            {/* Palette d'accords */}
            <div style={{ background: '#fff', border: '0.5px solid #e8e3db', borderRadius: 10, padding: '16px 20px', marginBottom: '1rem' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>
                Palette d'accords — choisissez 1 ou 2 accords par mesure
              </div>
              <PaletteGrid exercise={exercise} attempt={attempt} onChange={handleAttemptChange} />
            </div>

            {/* Analyse par le moteur */}
            <AnalysePanel exercise={exercise} attempt={attempt} />

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
                <ScoreBar label="Compatibilité mélodie/accord" value={score.compatibilite} color={scoreColor(score.compatibilite)} />
                <ScoreBar label="Cohérence fonctionnelle (T/SD/D)" value={score.fonctions} color={scoreColor(score.fonctions)} />
                <ScoreBar label="Cadence finale" value={score.cadence} color={scoreColor(score.cadence)} />
              </div>
            </div>

            {/* Your attempt recap */}
            <div style={{ background: '#fff', border: '0.5px solid #e8e3db', borderRadius: 10, padding: '14px 18px', marginBottom: '1rem' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: '0.08em', marginBottom: 10 }}>VOTRE HARMONISATION</div>
              <div style={{ overflowX: 'auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: `repeat(${exercise.measures}, minmax(70px, 1fr))`, gap: 6 }}>
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
            </div>

            {/* Feedback */}
            {score.feedback.length > 0 && (
              <div style={{ background: '#fff', border: '0.5px solid #e8e3db', borderRadius: 10, padding: '14px 18px', marginBottom: '1rem' }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: '0.08em', marginBottom: 10 }}>RETOUR DÉTAILLÉ</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {score.feedback.map((f, i) => (
                    <div key={i} style={{
                      fontSize: 12, color: '#5a4020',
                      padding: '6px 10px', borderRadius: 6,
                      background: '#fff9f0',
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
              <div style={{ overflowX: 'auto', marginBottom: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: `repeat(${exercise.measures}, minmax(140px, 1fr))`, gap: 8 }}>
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
                <div style={{ overflowX: 'auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: `repeat(${exercise.measures}, minmax(90px, 1fr))`, gap: 6 }}>
                  {exercise.suggestedChords.map((sug, mi) => {
                    // Votre copie porte des ids de palette, la référence des noms d'accords.
                    // On compare sur le TERRAIN COMMUN : le degré rendu par le moteur.
                    const { tonicPc, mode } = exerciseTonic(exercise);
                    const degresRef = new Set(
                      sug.map(s => resoudreAccord(s, tonicPc, mode)?.degree).filter(Boolean),
                    );
                    const myChords = attempt[mi] ?? [];
                    const match = myChords.some(
                      c => degresRef.has(resoudreAccord(c, tonicPc, mode)?.degree),
                    );
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

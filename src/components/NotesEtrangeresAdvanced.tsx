"use client";

import React, { useRef, useState } from "react";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import {
  NE_ADVANCED_EXERCISES,
  CHORD_FR_LABELS,
  CHORD_FR_NOTES,
  type NEAdvancedExercise,
  type NEMesure,
} from "@/data/notes-etrangeres-advanced";
import type { NEType } from "@/data/notes-etrangeres-exercises";

// ── Constantes staff ───────────────────────────────────────────────────────────

const HALF_STEP = 11;
const STAFF_BOTTOM = 148;
const SVG_HEIGHT = 210;
const CLEF_W = 68;
const NOTE_SP = 42;
const NOTE_RX = 9;
const NOTE_RY = 6;
const STAFF_LINES = [0, 2, 4, 6, 8];
const MEASURE_PAD = 14;
const MEASURE_W = 4 * NOTE_SP + MEASURE_PAD * 2; // 196px par mesure

const DIATONIC_FROM_C: Record<string, number> = {
  C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6,
};

const EN_TO_FR: Record<string, string> = {
  C: "Do", "C#": "Do♯", Db: "Ré♭", D: "Ré", "D#": "Ré♯",
  Eb: "Mi♭", E: "Mi", F: "Fa", "F#": "Fa♯", Gb: "Sol♭",
  G: "Sol", "G#": "Sol♯", Ab: "La♭", A: "La", "A#": "La♯",
  Bb: "Si♭", B: "Si",
};

const SEMITONES: Record<string, number> = {
  C: 0, "C#": 1, Db: 1, D: 2, "D#": 3, Eb: 3, E: 4, F: 5,
  "F#": 6, Gb: 6, G: 7, "G#": 8, Ab: 8, A: 9, "A#": 10, Bb: 10, B: 11,
};

const NCT_OPTIONS: { value: NEType; label: string; abbr: string; color: string }[] = [
  { value: "passage",      label: "Note de passage", abbr: "NP",  color: "#2E8B57" },
  { value: "broderie",     label: "Broderie",         abbr: "Br",  color: "#185FA5" },
  { value: "retard",       label: "Retard",           abbr: "Ret", color: "#BA7517" },
  { value: "anticipation", label: "Anticipation",     abbr: "Ant", color: "#7B3F9E" },
  { value: "appoggiature", label: "Appoggiature",     abbr: "App", color: "#c0392b" },
  { value: "echappee",     label: "Échappée",         abbr: "Éch", color: "#555" },
];

const DIFF_COLORS: Record<number, string> = { 2: "#BA7517", 3: "#7B3F9E" };

// ── Helpers ───────────────────────────────────────────────────────────────────

function parsePitch(pitch: string): { note: string; octave: number } {
  const m = pitch.match(/^([A-G][#b]?)(\d)$/);
  if (!m) return { note: "C", octave: 4 };
  return { note: m[1], octave: parseInt(m[2]) };
}

function noteStaffStep(note: string, octave: number): number {
  const base = note.replace(/[#b]/g, "");
  const d = DIATONIC_FROM_C[base] ?? 0;
  return d + (octave - 4) * 7 - 2;
}

function getLedgerLines(step: number): number[] {
  const lines: number[] = [];
  if (step < 0) {
    for (let s = -2; s >= 2 * Math.ceil(step / 2); s -= 2) lines.push(s);
  } else if (step > 8) {
    for (let s = 10; s <= 2 * Math.floor(step / 2); s += 2) lines.push(s);
  }
  return lines;
}

function chordTonesPc(chord: string): Set<number> {
  const m = chord.match(/^([A-G][#b]?)(.*)$/);
  if (!m) return new Set([0, 4, 7]);
  const root = SEMITONES[m[1]] ?? 0;
  const qual = m[2];
  let ivls: number[];
  if (qual === "m" || qual === "min") ivls = [0, 3, 7];
  else if (qual === "7") ivls = [0, 4, 7, 10];
  else if (qual === "m7") ivls = [0, 3, 7, 10];
  else if (qual === "dim") ivls = [0, 3, 6];
  else if (qual === "Maj7" || qual === "maj7") ivls = [0, 4, 7, 11];
  else ivls = [0, 4, 7];
  return new Set(ivls.map(i => (root + i) % 12));
}

function isChordTone(note: string, chord: string): boolean {
  const pc = SEMITONES[note] ?? 0;
  return chordTonesPc(chord).has(pc);
}

// ── Types locaux ──────────────────────────────────────────────────────────────

type MesureResult = {
  chordOk: boolean;
  noteOks: boolean[];
};

// Clé composée pour identifier une note étrangère : "mesurePos-noteIdx"
type NctKey = string;

// ── Staff SVG multi-mesures ────────────────────────────────────────────────────

function AdvancedStaffSVG({
  exercise,
  selectedChords,
  validated,
  results,
}: {
  exercise: NEAdvancedExercise;
  selectedChords: Record<number, string>;
  validated: boolean;
  results: Record<number, MesureResult>;
}) {
  const svgW = CLEF_W + exercise.mesures.length * MEASURE_W + 20;

  return (
    <svg width={svgW} height={SVG_HEIGHT} style={{ display: "block", minWidth: svgW }}>
      {/* Lignes de portée */}
      {STAFF_LINES.map(s => (
        <line key={s} x1={10} y1={STAFF_BOTTOM - s * HALF_STEP} x2={svgW - 10} y2={STAFF_BOTTOM - s * HALF_STEP}
          stroke="#bbb" strokeWidth="0.8" />
      ))}

      {/* Clé de sol */}
      <text x={14} y={STAFF_BOTTOM + 6} fontSize="90" fontFamily="'Times New Roman',Georgia,serif" fill="#1a1a1a">𝄞</text>

      {/* Barre de début */}
      <line x1={CLEF_W} y1={STAFF_BOTTOM - 8 * HALF_STEP} x2={CLEF_W} y2={STAFF_BOTTOM} stroke="#999" strokeWidth="1" />

      {/* Barres de mesures et double barre finale */}
      {exercise.mesures.map((_, mi) => {
        const x = CLEF_W + (mi + 1) * MEASURE_W;
        const isLast = mi === exercise.mesures.length - 1;
        return (
          <g key={mi}>
            {isLast ? (
              <>
                <line x1={x + 6} y1={STAFF_BOTTOM - 8 * HALF_STEP} x2={x + 6} y2={STAFF_BOTTOM} stroke="#999" strokeWidth="1.5" />
                <line x1={x + 10} y1={STAFF_BOTTOM - 8 * HALF_STEP} x2={x + 10} y2={STAFF_BOTTOM} stroke="#999" strokeWidth="3.5" />
              </>
            ) : (
              <line x1={x} y1={STAFF_BOTTOM - 8 * HALF_STEP} x2={x} y2={STAFF_BOTTOM} stroke="#bbb" strokeWidth="0.8" />
            )}
          </g>
        );
      })}

      {/* Notes par mesure */}
      {exercise.mesures.map((mesure, mi) => {
        const chord = selectedChords[mesure.position];
        const mesureResult = results[mesure.position];
        const measureStartX = CLEF_W + mi * MEASURE_W + MEASURE_PAD;

        return mesure.notes.map((n, ni) => {
          const { note, octave } = parsePitch(n.pitch);
          const step = noteStaffStep(note, octave);
          const x = measureStartX + ni * NOTE_SP + NOTE_SP / 2;
          const y = STAFF_BOTTOM - step * HALF_STEP;
          const ledgers = getLedgerLines(step);
          const isAccidental = note.includes("#") || note.includes("b");

          let fill = "#ccc";
          if (chord) {
            fill = isChordTone(note, chord) ? "#185FA5" : "#E07020";
          }

          let strokeColor = fill;
          let strokeW = 0;
          if (validated && mesureResult) {
            const noteOk = mesureResult.noteOks[ni];
            strokeColor = noteOk ? "#2E8B57" : "#c0392b";
            strokeW = 2.5;
          }

          return (
            <g key={`${mi}-${ni}`}>
              {ledgers.map(ls => (
                <line key={ls}
                  x1={x - 14} y1={STAFF_BOTTOM - ls * HALF_STEP}
                  x2={x + 14} y2={STAFF_BOTTOM - ls * HALF_STEP}
                  stroke="#999" strokeWidth="1" />
              ))}
              {isAccidental && (
                <text x={x - 20} y={y + 5} fontSize="16" fill="#555" fontFamily="serif">
                  {note.includes("#") ? "♯" : "♭"}
                </text>
              )}
              <ellipse cx={x} cy={y} rx={NOTE_RX} ry={NOTE_RY}
                fill={fill} stroke={strokeColor} strokeWidth={strokeW}
                opacity={chord ? 1 : 0.4} />
              {step < 4 ? (
                <line x1={x + NOTE_RX - 1} y1={y} x2={x + NOTE_RX - 1} y2={y - 32}
                  stroke={fill} strokeWidth="1.5" opacity={chord ? 1 : 0.4} />
              ) : (
                <line x1={x - NOTE_RX + 1} y1={y} x2={x - NOTE_RX + 1} y2={y + 32}
                  stroke={fill} strokeWidth="1.5" opacity={chord ? 1 : 0.4} />
              )}
              {validated && mesureResult && (
                <text x={x} y={STAFF_BOTTOM + 30} textAnchor="middle" fontSize="12"
                  fill={mesureResult.noteOks[ni] ? "#2E8B57" : "#c0392b"}>
                  {mesureResult.noteOks[ni] ? "✓" : "✗"}
                </text>
              )}
            </g>
          );
        });
      })}

      {/* Numéros de mesures */}
      {exercise.mesures.map((mesure, mi) => {
        const x = CLEF_W + mi * MEASURE_W + MEASURE_PAD + 4;
        return (
          <text key={mi} x={x} y={STAFF_BOTTOM - 9 * HALF_STEP}
            fontSize="9" fill="#bbb" fontFamily="system-ui,sans-serif">
            {mesure.position}
          </text>
        );
      })}
    </svg>
  );
}

// ── Composant principal ────────────────────────────────────────────────────────

export default function NotesEtrangeresAdvanced() {
  const pianoRef = useRef<PianoPlayerRef>(null);

  const [exIdx, setExIdx] = useState(0);
  const [filterDiff, setFilterDiff] = useState<2 | 3 | null>(null);

  // chord sélectionné par mesure : { [position]: "C" }
  const [selectedChords, setSelectedChords] = useState<Record<number, string>>({});
  // type NCT par note étrangère : { "pos-noteIdx": NEType }
  const [nctTypes, setNctTypes] = useState<Record<NctKey, NEType>>({});
  const [validated, setValidated] = useState(false);
  const [results, setResults] = useState<Record<number, MesureResult>>({});
  const [globalScore, setGlobalScore] = useState<{ correct: number; total: number } | null>(null);

  const exercises = filterDiff
    ? NE_ADVANCED_EXERCISES.filter(e => e.difficulte === filterDiff)
    : NE_ADVANCED_EXERCISES;
  const exercise: NEAdvancedExercise = exercises[exIdx % exercises.length];

  const resetExercise = (ex: NEAdvancedExercise) => {
    setSelectedChords({});
    setNctTypes({});
    setValidated(false);
    setResults({});
    setGlobalScore(null);
    void ex;
  };

  const handleSelect = (i: number) => {
    setExIdx(i);
    resetExercise(exercises[i]);
  };

  const handleChordSelect = (mesurePos: number, chord: string) => {
    if (validated) return;
    setSelectedChords(prev => ({ ...prev, [mesurePos]: chord }));
    // Reset NCT types for this measure's notes
    setNctTypes(prev => {
      const next = { ...prev };
      Object.keys(next).forEach(k => {
        if (k.startsWith(`${mesurePos}-`)) delete next[k];
      });
      return next;
    });
  };

  const handleNctType = (mesurePos: number, noteIdx: number, type: NEType) => {
    setNctTypes(prev => ({ ...prev, [`${mesurePos}-${noteIdx}`]: type }));
  };

  // Orange notes per measure (foreign = not chord tone)
  const getOrangeNotes = (mesure: NEMesure): number[] => {
    const chord = selectedChords[mesure.position];
    if (!chord) return [];
    return mesure.notes
      .map((n, i) => (!isChordTone(parsePitch(n.pitch).note, chord) ? i : -1))
      .filter(i => i >= 0);
  };

  const allChordsSelected = exercise.mesures.every(m => !!selectedChords[m.position]);
  const allNctFilled = exercise.mesures.every(m => {
    const oranges = getOrangeNotes(m);
    return oranges.every(ni => !!nctTypes[`${m.position}-${ni}`]);
  });
  const canValidate = allChordsSelected && allNctFilled;

  const handleValidate = () => {
    const newResults: Record<number, MesureResult> = {};
    let totalCorrect = 0;
    let totalNotes = 0;

    for (const mesure of exercise.mesures) {
      const chordOk = selectedChords[mesure.position] === mesure.accordRecommande;
      const noteOks: boolean[] = mesure.solution.map((sol, ni) => {
        const correctType = sol.type;
        const chord = selectedChords[mesure.position];
        if (!chord) return false;
        const noteName = parsePitch(mesure.notes[ni].pitch).note;
        const isTone = isChordTone(noteName, chord);
        if (correctType === "reelle") return isTone;
        const userNct = nctTypes[`${mesure.position}-${ni}`];
        return !isTone && userNct === correctType;
      });
      newResults[mesure.position] = { chordOk, noteOks };
      if (chordOk) totalCorrect++;
      totalNotes++;
      noteOks.forEach(ok => { if (ok) totalCorrect++; totalNotes++; });
    }

    setResults(newResults);
    setValidated(true);
    setGlobalScore({ correct: totalCorrect, total: totalNotes });
  };

  const handleNext = () => {
    const nextIdx = (exIdx + 1) % exercises.length;
    setExIdx(nextIdx);
    resetExercise(exercises[nextIdx]);
  };

  const playFullMelody = () => {
    if (!pianoRef.current) return;
    const voicings = exercise.mesures.flatMap(m =>
      m.notes.map(n => {
        const { note, octave } = parsePitch(n.pitch);
        return [`${note}:${octave - 1}`];
      })
    );
    pianoRef.current.playVoicingSequence(voicings, { interval: 0.65, duration: 0.55 });
  };

  const playMesure = (mesure: NEMesure) => {
    if (!pianoRef.current) return;
    const voicings = mesure.notes.map(n => {
      const { note, octave } = parsePitch(n.pitch);
      return [`${note}:${octave - 1}`];
    });
    pianoRef.current.playVoicingSequence(voicings, { interval: 0.65, duration: 0.55 });
  };

  const playChordSample = (chord: string) => {
    if (!pianoRef.current) return;
    const chordVoicings: Record<string, string[]> = {
      C: ["C:2","E:2","G:2"], G: ["G:2","B:2","D:3"], F: ["F:2","A:2","C:3"],
      Am: ["A:2","C:3","E:3"], Dm: ["D:2","F:2","A:2"], Em: ["E:2","G:2","B:2"],
      G7: ["G:2","B:2","D:3","F:3"], E: ["E:2","G#:2","B:2"], D: ["D:2","F#:2","A:2"],
    };
    const specs = chordVoicings[chord] ?? ["C:2","E:2","G:2"];
    pianoRef.current.playVoicing(specs, { arp: true, arpDelay: 0.06, duration: 2.0 });
  };

  return (
    <div>
      {/* En-tête exercice */}
      <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 12, padding: "14px 20px", marginBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <span style={{
                fontSize: 9, fontWeight: 700, letterSpacing: "0.05em",
                color: DIFF_COLORS[exercise.difficulte] ?? "#888",
                background: `${DIFF_COLORS[exercise.difficulte] ?? "#888"}18`,
                padding: "2px 8px", borderRadius: 6,
              }}>
                Niveau {exercise.difficulte}{exercise.difficulte === 3 ? "★" : ""}
              </span>
              <span style={{ fontSize: 15, fontWeight: 600, color: "#1a1a1a" }}>{exercise.titre}</span>
            </div>
            <div style={{ fontSize: 11, color: "#888" }}>Tonalité : {exercise.tonalite}</div>
          </div>
          <button onClick={playFullMelody}
            style={{ padding: "7px 14px", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer", border: "0.5px solid #e0dbd3", background: "#faf8f4", color: "#555" }}>
            ▶ Écouter tout
          </button>
        </div>
      </div>

      {/* Portée 4 mesures */}
      <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 12, padding: "16px 20px", marginBottom: 14 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
          Portée — 4 mesures
        </div>
        <div style={{ display: "flex", gap: 12, marginBottom: 10, fontSize: 11 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <div style={{ width: 12, height: 9, borderRadius: "50%", background: "#185FA5" }} />
            <span style={{ color: "#185FA5", fontWeight: 600 }}>Bleu = note réelle</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <div style={{ width: 12, height: 9, borderRadius: "50%", background: "#E07020" }} />
            <span style={{ color: "#E07020", fontWeight: 600 }}>Orange = note étrangère</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <div style={{ width: 12, height: 9, borderRadius: "50%", background: "#ccc" }} />
            <span style={{ color: "#999" }}>Gris = accord non choisi</span>
          </div>
        </div>
        <div style={{ overflowX: "auto" }}>
          <AdvancedStaffSVG
            exercise={exercise}
            selectedChords={selectedChords}
            validated={validated}
            results={results}
          />
        </div>
        {/* Noms des notes par mesure */}
        <div style={{ display: "flex" }}>
          <div style={{ width: CLEF_W + MEASURE_PAD }} />
          {exercise.mesures.map((mesure, mi) => (
            <div key={mi} style={{ display: "flex", width: MEASURE_W - MEASURE_PAD }}>
              {mesure.notes.map((n, ni) => {
                const { note } = parsePitch(n.pitch);
                const fr = EN_TO_FR[note] ?? note;
                return (
                  <div key={ni} style={{ width: NOTE_SP, textAlign: "center", fontSize: 9, color: "#767676", fontFamily: "system-ui,sans-serif" }}>
                    {fr}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Choix d'accord par mesure */}
      {!validated && (
        <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 12, padding: "16px 20px", marginBottom: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>
            Choisir l'accord de chaque mesure
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
            {exercise.mesures.map(mesure => {
              const selected = selectedChords[mesure.position];
              return (
                <div key={mesure.position} style={{ padding: "12px 14px", background: "#faf8f4", borderRadius: 8, border: "0.5px solid #ede9e3" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#555" }}>Mesure {mesure.position}</div>
                    <button onClick={() => playMesure(mesure)}
                      style={{ fontSize: 9, padding: "2px 7px", borderRadius: 5, border: "0.5px solid #e0dbd3", background: "#fff", color: "#888", cursor: "pointer" }}>
                      ▶
                    </button>
                  </div>
                  {mesure.contexte && (
                    <div style={{ fontSize: 10, color: "#BA7517", background: "#FAEEDA", padding: "4px 8px", borderRadius: 5, marginBottom: 8, lineHeight: 1.4 }}>
                      💡 {mesure.contexte}
                    </div>
                  )}
                  <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                    {mesure.accordsPossibles.map(chord => (
                      <button key={chord}
                        onClick={() => handleChordSelect(mesure.position, chord)}
                        style={{
                          padding: "5px 12px", borderRadius: 7, fontSize: 13, fontWeight: 700, cursor: "pointer",
                          border: `1.5px solid ${selected === chord ? "#185FA5" : "#e0dbd3"}`,
                          background: selected === chord ? "#EBF3FD" : "#fff",
                          color: selected === chord ? "#185FA5" : "#555",
                        }}>
                        {chord}
                        <span style={{ fontSize: 9, marginLeft: 4, fontWeight: 400, opacity: 0.7 }}>
                          {CHORD_FR_LABELS[chord] ? `(${CHORD_FR_LABELS[chord]})` : ""}
                        </span>
                      </button>
                    ))}
                  </div>
                  {selected && (
                    <div style={{ marginTop: 6, fontSize: 10, color: "#185FA5", display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ fontWeight: 600 }}>{selected}</span>
                      <span style={{ color: "#888" }}>{CHORD_FR_NOTES[selected] ?? ""}</span>
                      <button onClick={() => playChordSample(selected)}
                        style={{ fontSize: 9, padding: "1px 6px", borderRadius: 4, border: "0.5px solid #A8C7EE", background: "#EBF3FD", color: "#185FA5", cursor: "pointer" }}>
                        ▶
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Identification des notes étrangères */}
      {!validated && allChordsSelected && (
        <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 12, padding: "16px 20px", marginBottom: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>
            Identifier les notes étrangères (orange)
          </div>
          {exercise.mesures.map(mesure => {
            const oranges = getOrangeNotes(mesure);
            if (oranges.length === 0) return null;
            return (
              <div key={mesure.position} style={{ marginBottom: 14 }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#555", marginBottom: 8 }}>
                  Mesure {mesure.position} — accord <span style={{ color: "#185FA5" }}>{selectedChords[mesure.position]}</span>
                </div>
                {oranges.map(ni => {
                  const { note } = parsePitch(mesure.notes[ni].pitch);
                  const fr = EN_TO_FR[note] ?? note;
                  const key: NctKey = `${mesure.position}-${ni}`;
                  return (
                    <div key={ni} style={{ marginBottom: 10, padding: "10px 12px", background: "#FFF7EE", borderRadius: 8, border: "0.5px solid #F5C77E" }}>
                      <div style={{ fontSize: 12, fontWeight: 600, color: "#E07020", marginBottom: 6 }}>
                        Note {ni + 1} — <span style={{ fontFamily: "Georgia,serif" }}>{fr}</span> : quel type ?
                      </div>
                      <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                        {NCT_OPTIONS.map(opt => (
                          <button key={opt.value}
                            onClick={() => handleNctType(mesure.position, ni, opt.value)}
                            style={{
                              padding: "4px 10px", borderRadius: 6, fontSize: 11, fontWeight: 600, cursor: "pointer",
                              border: `1.5px solid ${nctTypes[key] === opt.value ? opt.color : "#e0dbd3"}`,
                              background: nctTypes[key] === opt.value ? opt.color : "#fff",
                              color: nctTypes[key] === opt.value ? "#fff" : "#444",
                            }}>
                            {opt.abbr}
                            <span style={{ fontSize: 9, marginLeft: 3, opacity: 0.8 }}>{opt.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}

      {/* Validation */}
      {!validated && (
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 14 }}>
          <button onClick={handleValidate} disabled={!canValidate}
            style={{
              padding: "10px 24px", borderRadius: 9, fontSize: 13, fontWeight: 700,
              cursor: canValidate ? "pointer" : "not-allowed",
              background: canValidate ? "#5C3D6E" : "#f0ece6",
              color: canValidate ? "#fff" : "#aaa",
              border: "none",
            }}>
            Valider mon analyse →
          </button>
        </div>
      )}

      {/* Résultats */}
      {validated && globalScore && (
        <div>
          {/* Score global */}
          <div style={{
            background: globalScore.correct === globalScore.total ? "#E6F5EE"
              : globalScore.correct >= globalScore.total * 0.6 ? "#FEF0D9" : "#FEEEEA",
            border: `0.5px solid ${globalScore.correct === globalScore.total ? "#8ECFB7"
              : globalScore.correct >= globalScore.total * 0.6 ? "#F5C77E" : "#F5B5AA"}`,
            borderRadius: 12, padding: "16px 20px", marginBottom: 14,
          }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#1a1a1a", marginBottom: 4 }}>
              {globalScore.correct} / {globalScore.total} points
            </div>
            <div style={{ fontSize: 13, color: "#555" }}>
              {globalScore.correct === globalScore.total
                ? "Parfait ! Analyse impeccable sur les 4 mesures."
                : globalScore.correct >= globalScore.total * 0.6
                  ? "Bien ! Relisez le corrigé pour les erreurs."
                  : "Continuez à pratiquer — relisez chaque mesure attentivement."}
            </div>
          </div>

          {/* Corrigé par mesure */}
          {exercise.mesures.map(mesure => {
            const mesureResult = results[mesure.position];
            return (
              <div key={mesure.position} style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 12, padding: "16px 20px", marginBottom: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#555" }}>Mesure {mesure.position}</span>
                  {mesureResult?.chordOk ? (
                    <span style={{ fontSize: 11, background: "#E6F5EE", color: "#2E8B57", padding: "2px 8px", borderRadius: 6, fontWeight: 600 }}>
                      ✓ Accord correct : {mesure.accordRecommande}
                    </span>
                  ) : (
                    <span style={{ fontSize: 11, background: "#FEEEEA", color: "#c0392b", padding: "2px 8px", borderRadius: 6, fontWeight: 600 }}>
                      ✗ Accord : {selectedChords[mesure.position] ?? "—"} → réponse : {mesure.accordRecommande}
                    </span>
                  )}
                </div>
                <div style={{ fontSize: 11, color: "#666", background: "#F7F4F0", padding: "8px 12px", borderRadius: 6, marginBottom: 10, lineHeight: 1.5 }}>
                  {mesure.explication}
                </div>
                {mesure.solution.map((sol, ni) => {
                  const ok = mesureResult?.noteOks[ni] ?? false;
                  const { note } = parsePitch(mesure.notes[ni].pitch);
                  const fr = EN_TO_FR[note] ?? note;
                  const opt = NCT_OPTIONS.find(o => o.value === sol.type);
                  return (
                    <div key={ni} style={{
                      display: "flex", gap: 10, marginBottom: 8, padding: "8px 12px", borderRadius: 8, alignItems: "flex-start",
                      background: ok ? "#F0FAF4" : "#FEF0EF",
                    }}>
                      <span style={{ fontSize: 14, lineHeight: 1.2 }}>{ok ? "✓" : "✗"}</span>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: ok ? "#2E8B57" : "#c0392b", marginBottom: 2 }}>
                          {fr} — {sol.type === "reelle" ? "Note réelle" : (
                            <span style={{ color: opt?.color ?? "#555" }}>{opt?.label ?? sol.type}</span>
                          )}
                        </div>
                        <div style={{ fontSize: 11, color: "#555", lineHeight: 1.5 }}>{sol.explication}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}

          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
            <button onClick={handleNext}
              style={{ padding: "10px 24px", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: "pointer", background: "#1a1a1a", color: "#fff", border: "none" }}>
              Exercice suivant →
            </button>
          </div>
        </div>
      )}

      {/* Liste exercices (compact) */}
      <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 12, padding: "14px 16px" }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>
          Exercices avancés
        </div>
        <div style={{ display: "flex", gap: 4, marginBottom: 8 }}>
          {([null, 2, 3] as (2|3|null)[]).map(d => (
            <button key={String(d)} onClick={() => { setFilterDiff(d); handleSelect(0); }}
              style={{
                padding: "3px 8px", borderRadius: 6, fontSize: 10, fontWeight: 600, cursor: "pointer", border: "none",
                background: filterDiff === d ? "#5C3D6E" : "#f0ece6",
                color: filterDiff === d ? "#fff" : "#666",
              }}>
              {d === null ? "Tous" : `N${d}${d === 3 ? "★" : ""}`}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {exercises.map((ex, i) => (
            <button key={ex.id} onClick={() => handleSelect(i)}
              style={{
                textAlign: "left", padding: "6px 10px", borderRadius: 7, fontSize: 11, cursor: "pointer", border: "none",
                background: i === exIdx % exercises.length ? "#F0EBF8" : "transparent",
                color: i === exIdx % exercises.length ? "#5C3D6E" : "#555",
                fontWeight: i === exIdx % exercises.length ? 700 : 400,
              }}>
              <span style={{
                fontSize: 8, fontWeight: 800, marginRight: 5,
                color: DIFF_COLORS[ex.difficulte] ?? "#888",
                background: `${DIFF_COLORS[ex.difficulte] ?? "#888"}18`,
                padding: "1px 4px", borderRadius: 3,
              }}>N{ex.difficulte}</span>
              {ex.titre}
            </button>
          ))}
        </div>
      </div>

      {/* Piano caché */}
      <div style={{ height: 0, overflow: "hidden", pointerEvents: "none" }}>
        <PianoPlayer ref={pianoRef} octaves={3} startOctave={2} showLabels={false} />
      </div>
    </div>
  );
}

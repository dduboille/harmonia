"use client";

import React, { useRef, useState, useCallback } from "react";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import { NE_EXERCISES, type NEExercise, type NEType } from "@/data/notes-etrangeres-exercises";
import NotesEtrangeresAdvanced from "@/components/NotesEtrangeresAdvanced";

// ── Constantes staff ───────────────────────────────────────────────────────────

const HALF_STEP = 11;
const STAFF_BOTTOM = 148;
const SVG_HEIGHT = 210;
const CLEF_W = 68;
const NOTE_SP = 56;
const NOTE_RX = 9;
const NOTE_RY = 6;
const STAFF_LINES = [0, 2, 4, 6, 8];

const DIATONIC_FROM_C: Record<string, number> = {
  C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6,
};

const EN_TO_FR: Record<string, string> = {
  C: "Do", "C#": "Do♯", Db: "Ré♭", D: "Ré", "D#": "Ré♯",
  Eb: "Mi♭", E: "Mi", F: "Fa", "F#": "Fa♯", Gb: "Sol♭",
  "G#": "Sol♯", Ab: "La♭", G: "Sol", A: "La", "A#": "La♯",
  Bb: "Si♭", B: "Si", "G#4": "Sol♯", Eb4: "Mi♭",
};

function parsePitch(pitch: string): { note: string; octave: number } {
  const m = pitch.match(/^([A-G][#b]?)(\d)$/);
  if (!m) return { note: "C", octave: 4 };
  return { note: m[1], octave: parseInt(m[2]) };
}

function noteStaffStep(note: string, octave: number): number {
  const base = note.replace(/[#b]/g, "");
  const d = DIATONIC_FROM_C[base] ?? 0;
  return d + (octave - 4) * 7 - 2; // E4 = 0
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

// ── Chord tones ─────────────────────────────────────────────────────────────

const SEMITONES: Record<string, number> = {
  C: 0, "C#": 1, Db: 1, D: 2, "D#": 3, Eb: 3, E: 4, F: 5,
  "F#": 6, Gb: 6, G: 7, "G#": 8, Ab: 8, A: 9, "A#": 10, Bb: 10, B: 11,
};

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

function chordNoteNames(chord: string, accordLabel: string): string {
  // Return a readable label like "Do–Mi–Sol"
  const labels: Record<string, string[]> = {
    "C":  ["Do","Mi","Sol"],
    "G":  ["Sol","Si","Ré"],
    "Am": ["La","Do","Mi"],
    "F":  ["Fa","La","Do"],
    "G7": ["Sol","Si","Ré","Fa"],
    "Dm": ["Ré","Fa","La"],
    "Em": ["Mi","Sol","Si"],
  };
  return labels[chord]?.join("–") ?? accordLabel;
}

// ── Types ────────────────────────────────────────────────────────────────────

type NoteState = "unclassified" | "reelle" | "etrangere";

const NCT_OPTIONS: { value: NEType; label: string; abbr: string; color: string }[] = [
  { value: "passage",      label: "Note de passage", abbr: "NP",  color: "#2E8B57" },
  { value: "broderie",     label: "Broderie",         abbr: "Br",  color: "#185FA5" },
  { value: "retard",       label: "Retard",           abbr: "Ret", color: "#BA7517" },
  { value: "anticipation", label: "Anticipation",     abbr: "Ant", color: "#7B3F9E" },
  { value: "appoggiature", label: "Appoggiature",     abbr: "App", color: "#c0392b" },
  { value: "echappee",     label: "Échappée",         abbr: "Éch", color: "#555" },
];

const REFERENCE_TYPES = [
  {
    abbr: "NP", label: "Note de passage", color: "#2E8B57",
    def: "Relie deux notes réelles par mouvement conjoint sur un temps faible.",
    exemple: "Do–Ré–Mi sur accord C (Ré = NP)",
    play: ["C4", "D4", "E4"],
  },
  {
    abbr: "Br", label: "Broderie", color: "#185FA5",
    def: "Quitte une note réelle et y revient par mouvement conjoint.",
    exemple: "Do–Ré–Do sur accord C (Ré = broderie)",
    play: ["C4", "D4", "C4"],
  },
  {
    abbr: "Ret", label: "Retard", color: "#BA7517",
    def: "Note tenue de l'accord précédent, dissonante, résolue par degré conjoint sur un temps fort.",
    exemple: "Fa–Mi sur accord C (Fa = retard 4-3)",
    play: ["F4", "E4"],
  },
  {
    abbr: "Ant", label: "Anticipation", color: "#7B3F9E",
    def: "Note de l'accord suivant introduite en avance sur un temps faible.",
    exemple: "Sol–Fa sur accord C→F (Fa = anticipation de F)",
    play: ["G4", "F4"],
  },
  {
    abbr: "App", label: "Appoggiature", color: "#c0392b",
    def: "Note étrangère non préparée sur un temps fort, très expressive, résolue conjointement.",
    exemple: "Ré–Do sur accord C (Ré = appoggiature)",
    play: ["D4", "C4"],
  },
  {
    abbr: "Éch", label: "Échappée", color: "#555",
    def: "Arrive par mouvement conjoint depuis une note réelle, repart par saut.",
    exemple: "Sol–La–Do sur accord C (La = échappée)",
    play: ["G4", "A4", "C5"],
  },
];

const DIFF_COLORS = { 1: "#2E8B57", 2: "#BA7517", 3: "#7B3F9E" };
const DIFF_LABELS = { 1: "Niveau 1", 2: "Niveau 2", 3: "Niveau 3" };

// ── Staff SVG ────────────────────────────────────────────────────────────────

function StaffSVG({
  exercise,
  noteStates,
  validated,
  solution,
  onNoteClick,
}: {
  exercise: NEExercise;
  noteStates: NoteState[];
  validated: boolean;
  solution: boolean[];
  onNoteClick: (i: number) => void;
}) {
  const notes = exercise.notes;
  const tones = chordTonesPc(exercise.accord);
  const svgW = Math.max(500, CLEF_W + 30 + notes.length * NOTE_SP + 40);

  return (
    <svg width={svgW} height={SVG_HEIGHT} style={{ display: "block", minWidth: svgW }}>
      {/* Staff lines */}
      {STAFF_LINES.map(s => (
        <line key={s} x1={10} y1={STAFF_BOTTOM - s * HALF_STEP} x2={svgW - 10} y2={STAFF_BOTTOM - s * HALF_STEP}
          stroke="#bbb" strokeWidth="0.8" />
      ))}

      {/* Treble clef */}
      <text x={14} y={STAFF_BOTTOM + 6} fontSize="90" fontFamily="'Times New Roman',Georgia,serif" fill="#1a1a1a">𝄞</text>

      {/* Barline at clef end */}
      <line x1={CLEF_W} y1={STAFF_BOTTOM - 8 * HALF_STEP} x2={CLEF_W} y2={STAFF_BOTTOM} stroke="#999" strokeWidth="1" />

      {/* Final barline */}
      <line x1={svgW - 10} y1={STAFF_BOTTOM - 8 * HALF_STEP} x2={svgW - 10} y2={STAFF_BOTTOM} stroke="#999" strokeWidth="1.5" />
      <line x1={svgW - 14} y1={STAFF_BOTTOM - 8 * HALF_STEP} x2={svgW - 14} y2={STAFF_BOTTOM} stroke="#999" strokeWidth="3.5" />

      {/* Notes */}
      {notes.map((n, i) => {
        const { note, octave } = parsePitch(n.pitch);
        const step = noteStaffStep(note, octave);
        const x = CLEF_W + 30 + i * NOTE_SP;
        const y = STAFF_BOTTOM - step * HALF_STEP;
        const ledgers = getLedgerLines(step);
        const isAccidental = note.includes("#") || note.includes("b");

        const state = noteStates[i];
        let fill = "#ccc";
        if (state === "reelle") fill = "#185FA5";
        if (state === "etrangere") fill = "#E07020";

        // After validation: green = correct, red = wrong
        let stroke = fill;
        if (validated) {
          stroke = solution[i] ? "#2E8B57" : "#c0392b";
          fill = solution[i] ? (state === "reelle" ? "#185FA5" : "#E07020") : (state === "reelle" ? "#185FA5" : "#E07020");
        }

        const isChordTone = tones.has(SEMITONES[note] ?? 0);
        void isChordTone;

        return (
          <g key={i} onClick={() => !validated && onNoteClick(i)} style={{ cursor: validated ? "default" : "pointer" }}>
            {ledgers.map(ls => (
              <line key={ls} x1={x - 14} y1={STAFF_BOTTOM - ls * HALF_STEP} x2={x + 14} y2={STAFF_BOTTOM - ls * HALF_STEP}
                stroke="#999" strokeWidth="1" />
            ))}
            {isAccidental && (
              <text x={x - 20} y={y + 5} fontSize="16" fill="#555" fontFamily="serif">
                {note.includes("#") ? "♯" : "♭"}
              </text>
            )}
            <ellipse cx={x} cy={y} rx={NOTE_RX} ry={NOTE_RY} fill={fill}
              stroke={validated ? stroke : "none"} strokeWidth={validated ? 2.5 : 0}
              opacity={state === "unclassified" ? 0.45 : 1} />
            {/* Note stem */}
            {step < 4 ? (
              <line x1={x + NOTE_RX - 1} y1={y} x2={x + NOTE_RX - 1} y2={y - 32} stroke={fill} strokeWidth="1.5" opacity={state === "unclassified" ? 0.45 : 1} />
            ) : (
              <line x1={x - NOTE_RX + 1} y1={y} x2={x - NOTE_RX + 1} y2={y + 32} stroke={fill} strokeWidth="1.5" opacity={state === "unclassified" ? 0.45 : 1} />
            )}
            {/* State indicator below */}
            {state !== "unclassified" && !validated && (
              <text x={x} y={STAFF_BOTTOM + 30} textAnchor="middle" fontSize="9" fontWeight="700"
                fill={state === "reelle" ? "#185FA5" : "#E07020"} fontFamily="system-ui,sans-serif">
                {state === "reelle" ? "RÉELLE" : "ÉTRNG"}
              </text>
            )}
            {/* Validation check/cross */}
            {validated && (
              <text x={x} y={STAFF_BOTTOM + 32} textAnchor="middle" fontSize="13" fill={solution[i] ? "#2E8B57" : "#c0392b"}>
                {solution[i] ? "✓" : "✗"}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

// ── Main component ───────────────────────────────────────────────────────────

export default function NotesEtrangeresExercice() {
  const pianoRef = useRef<PianoPlayerRef>(null);

  const [mode, setMode] = useState<"standard" | "avance">("standard");
  const [exIdx, setExIdx] = useState(0);
  const [filterDiff, setFilterDiff] = useState<1 | 2 | 3 | null>(null);
  const [noteStates, setNoteStates] = useState<NoteState[]>([]);
  const [nctTypes, setNctTypes] = useState<Record<number, NEType>>({});
  const [validated, setValidated] = useState(false);
  const [correctness, setCorrectness] = useState<boolean[]>([]);
  const [score, setScore] = useState<{ correct: number; total: number } | null>(null);

  const exercises = filterDiff ? NE_EXERCISES.filter(e => e.difficulte === filterDiff) : NE_EXERCISES;
  const exercise: NEExercise = exercises[exIdx % exercises.length];

  const initState = useCallback((ex: NEExercise) => {
    setNoteStates(ex.notes.map(() => "unclassified"));
    setNctTypes({});
    setValidated(false);
    setCorrectness([]);
    setScore(null);
  }, []);

  // Init on mount and exercise change
  const prevExId = useRef<string | null>(null);
  if (prevExId.current !== exercise.id) {
    prevExId.current = exercise.id;
    // Defer to avoid render-during-render
    if (noteStates.length !== exercise.notes.length) {
      setTimeout(() => initState(exercise), 0);
    } else {
      // reset immediately on first render
      if (!validated && noteStates.every(s => s === "unclassified") && exercise.notes.length !== noteStates.length) {
        initState(exercise);
      }
    }
  }

  const cycleNote = (i: number) => {
    setNoteStates(prev => {
      const next = [...prev];
      const cur = next[i];
      next[i] = cur === "unclassified" ? "reelle" : cur === "reelle" ? "etrangere" : "unclassified";
      if (next[i] !== "etrangere") {
        setNctTypes(t => { const c = { ...t }; delete c[i]; return c; });
      }
      return next;
    });
  };

  const playMelody = () => {
    if (!pianoRef.current) return;
    const voicings = exercise.notes.map(n => {
      const { note, octave } = parsePitch(n.pitch);
      return [`${note}:${octave - 1}`];
    });
    pianoRef.current.playVoicingSequence(voicings, { interval: 0.7, duration: 0.6 });
  };

  const playChord = () => {
    if (!pianoRef.current) return;
    const tones = chordTonesPc(exercise.accord);
    // Build voicing from chord name
    const chordNotes: Record<string, string[]> = {
      "C":  ["C:2","E:2","G:2"], "G":  ["G:2","B:2","D:3"], "Am": ["A:2","C:3","E:3"],
      "F":  ["F:2","A:2","C:3"], "G7": ["G:2","B:2","D:3","F:3"], "Dm": ["D:2","F:2","A:2"],
      "Em": ["E:2","G:2","B:2"],
    };
    const specs = chordNotes[exercise.accord] ?? [`C:2`,`E:2`,`G:2`];
    void tones;
    pianoRef.current.playVoicing(specs, { arp: true, arpDelay: 0.06, duration: 2.0 });
  };

  const playRefExample = (pitches: string[]) => {
    if (!pianoRef.current) return;
    const voicings = pitches.map(p => {
      const { note, octave } = parsePitch(p);
      return [`${note}:${octave - 1}`];
    });
    pianoRef.current.playVoicingSequence(voicings, { interval: 0.6, duration: 0.5 });
  };

  const handleValidate = () => {
    const sol = exercise.solution;
    const results: boolean[] = [];
    let correct = 0;

    for (let i = 0; i < sol.length; i++) {
      const correctType = sol[i].type;
      const userState = noteStates[i];
      const userNct = nctTypes[i];

      let ok = false;
      if (correctType === "reelle" && userState === "reelle") ok = true;
      if (correctType !== "reelle" && userState === "etrangere" && userNct === correctType) ok = true;

      results.push(ok);
      if (ok) correct++;
    }

    setCorrectness(results);
    setValidated(true);
    setScore({ correct, total: sol.length });
  };

  const handleNext = () => {
    const nextIdx = (exIdx + 1) % exercises.length;
    setExIdx(nextIdx);
    const nextEx = exercises[nextIdx];
    setNoteStates(nextEx.notes.map(() => "unclassified"));
    setNctTypes({});
    setValidated(false);
    setCorrectness([]);
    setScore(null);
    prevExId.current = nextEx.id;
  };

  const handleSelect = (i: number) => {
    setExIdx(i);
    const ex = exercises[i];
    setNoteStates(ex.notes.map(() => "unclassified"));
    setNctTypes({});
    setValidated(false);
    setCorrectness([]);
    setScore(null);
    prevExId.current = ex.id;
  };

  // Ensure noteStates length matches exercise
  const safeNoteStates: NoteState[] = exercise.notes.map((_, i) => noteStates[i] ?? "unclassified");
  const orangeIndices = safeNoteStates.map((s, i) => s === "etrangere" ? i : -1).filter(i => i >= 0);
  const canValidate = safeNoteStates.every(s => s !== "unclassified") &&
    orangeIndices.every(i => !!nctTypes[i]);

  return (
    <main style={{ minHeight: "100vh", background: "#f4f1ec", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "1.5rem" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "#BA7517", textTransform: "uppercase", marginBottom: 6 }}>
            ♩ Identification des notes étrangères
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 500, color: "#1a1a1a", margin: "0 0 6px", fontFamily: "Georgia,serif" }}>
            Notes réelles et notes étrangères
          </h1>
          <p style={{ fontSize: 13, color: "#888", margin: "0 0 14px", lineHeight: 1.6 }}>
            Colorez chaque note en <span style={{ color: "#185FA5", fontWeight: 600 }}>bleu (réelle)</span> ou <span style={{ color: "#E07020", fontWeight: 600 }}>orange (étrangère)</span>, puis identifiez le type.
          </p>
          {/* Switcher de mode */}
          <div style={{ display: "inline-flex", background: "#f0ece6", borderRadius: 10, padding: 3, gap: 2 }}>
            <button onClick={() => setMode("standard")}
              style={{
                padding: "6px 18px", borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: "pointer", border: "none",
                background: mode === "standard" ? "#fff" : "transparent",
                color: mode === "standard" ? "#1a1a1a" : "#888",
                boxShadow: mode === "standard" ? "0 1px 3px rgba(0,0,0,0.12)" : "none",
                transition: "all 0.15s",
              }}>
              Mode standard
            </button>
            <button onClick={() => setMode("avance")}
              style={{
                padding: "6px 18px", borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: "pointer", border: "none",
                background: mode === "avance" ? "#5C3D6E" : "transparent",
                color: mode === "avance" ? "#fff" : "#888",
                boxShadow: mode === "avance" ? "0 1px 3px rgba(92,61,110,0.3)" : "none",
                transition: "all 0.15s",
              }}>
              Mode avancé ★
            </button>
          </div>
        </div>

        {/* Mode avancé */}
        {mode === "avance" && <NotesEtrangeresAdvanced />}

        {mode === "standard" && <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 20, alignItems: "start" }}>

          {/* ── Colonne gauche — Référence ───────────────────────────────── */}
          <div style={{ position: "sticky", top: 72 }}>
            <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 12, padding: "16px 18px", marginBottom: 16 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>
                Les 6 types
              </div>
              {REFERENCE_TYPES.map(rt => (
                <div key={rt.abbr} style={{ marginBottom: 14, paddingBottom: 14, borderBottom: "0.5px solid #f0ece6" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{
                        fontSize: 9, fontWeight: 800, color: "#fff", background: rt.color,
                        padding: "2px 6px", borderRadius: 5, letterSpacing: "0.04em",
                      }}>{rt.abbr}</span>
                      <span style={{ fontSize: 12, fontWeight: 600, color: "#1a1a1a" }}>{rt.label}</span>
                    </div>
                    <button
                      onClick={() => playRefExample(rt.play)}
                      style={{
                        fontSize: 9, padding: "2px 7px", borderRadius: 5,
                        border: "0.5px solid #e0dbd3", background: "#faf8f4",
                        color: "#555", cursor: "pointer",
                      }}
                    >▶</button>
                  </div>
                  <div style={{ fontSize: 11, color: "#666", lineHeight: 1.5, marginBottom: 3 }}>{rt.def}</div>
                  <div style={{ fontSize: 10, color: "#6b6b6b", fontStyle: "italic" }}>{rt.exemple}</div>
                </div>
              ))}
            </div>

            {/* Exercise list */}
            <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 12, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
                Exercices
              </div>
              {/* Difficulty filter */}
              <div style={{ display: "flex", gap: 4, marginBottom: 10 }}>
                {([null, 1, 2, 3] as (1|2|3|null)[]).map(d => (
                  <button key={String(d)} onClick={() => { setFilterDiff(d); setExIdx(0); handleSelect(0); }}
                    style={{
                      padding: "3px 8px", borderRadius: 6, fontSize: 10, fontWeight: 600, cursor: "pointer", border: "none",
                      background: filterDiff === d ? "#5C3D6E" : "#f0ece6",
                      color: filterDiff === d ? "#fff" : "#666",
                    }}>
                    {d === null ? "Tous" : `N${d}`}
                  </button>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {exercises.map((ex, i) => (
                  <button key={ex.id} onClick={() => handleSelect(i)}
                    style={{
                      textAlign: "left", padding: "7px 10px", borderRadius: 7, fontSize: 11, cursor: "pointer",
                      border: "none",
                      background: i === exIdx % exercises.length ? "#F0EBF8" : "transparent",
                      color: i === exIdx % exercises.length ? "#5C3D6E" : "#555",
                      fontWeight: i === exIdx % exercises.length ? 700 : 400,
                    }}>
                    <span style={{
                      fontSize: 8, fontWeight: 800, marginRight: 5,
                      color: DIFF_COLORS[ex.difficulte], background: `${DIFF_COLORS[ex.difficulte]}18`,
                      padding: "1px 4px", borderRadius: 3,
                    }}>N{ex.difficulte}</span>
                    {ex.titre}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── Colonne droite — Exercice ────────────────────────────────── */}
          <div>

            {/* Zone 1 — Accord et contexte */}
            <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 12, padding: "16px 20px", marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <span style={{
                      fontSize: 9, fontWeight: 700,
                      color: DIFF_COLORS[exercise.difficulte],
                      background: `${DIFF_COLORS[exercise.difficulte]}18`,
                      padding: "2px 8px", borderRadius: 6, letterSpacing: "0.05em",
                    }}>
                      {DIFF_LABELS[exercise.difficulte]}
                    </span>
                    <span style={{ fontSize: 15, fontWeight: 600, color: "#1a1a1a" }}>
                      {exercise.titre}
                    </span>
                  </div>
                  <div style={{ fontSize: 12, color: "#555", marginBottom: 4 }}>
                    <span style={{
                      display: "inline-block", marginRight: 8,
                      background: "#EBF3FD", color: "#185FA5", fontWeight: 700,
                      padding: "4px 14px", borderRadius: 8, fontSize: 14, border: "0.5px solid #A8C7EE",
                    }}>
                      {exercise.accord}
                    </span>
                    <span style={{ color: "#888", fontSize: 12 }}>
                      {exercise.accordLabel} — <span style={{ fontStyle: "italic" }}>{chordNoteNames(exercise.accord, exercise.accordLabel)}</span>
                    </span>
                  </div>
                  {exercise.contexte && (
                    <div style={{ fontSize: 11, color: "#BA7517", background: "#FAEEDA", padding: "6px 10px", borderRadius: 6, marginTop: 6, lineHeight: 1.5 }}>
                      💡 {exercise.contexte}
                    </div>
                  )}
                </div>
                <button onClick={playChord}
                  style={{ padding: "7px 14px", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer", border: "0.5px solid #A8C7EE", background: "#EBF3FD", color: "#185FA5" }}>
                  ▶ Écouter l'accord
                </button>
              </div>
            </div>

            {/* Zone 2 — Portée interactive */}
            <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 12, padding: "16px 20px", marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Portée — Cliquez sur chaque note pour la colorier
                </div>
                <button onClick={playMelody}
                  style={{ padding: "6px 12px", borderRadius: 7, fontSize: 11, fontWeight: 600, cursor: "pointer", border: "0.5px solid #e0dbd3", background: "#faf8f4", color: "#555" }}>
                  ▶ Écouter la mélodie
                </button>
              </div>

              {/* Color legend */}
              <div style={{ display: "flex", gap: 16, marginBottom: 14, fontSize: 11, fontFamily: "system-ui,sans-serif" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <div style={{ width: 14, height: 10, borderRadius: "50%", background: "#185FA5" }} />
                  <span style={{ color: "#185FA5", fontWeight: 600 }}>Bleu = note réelle (accord)</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <div style={{ width: 14, height: 10, borderRadius: "50%", background: "#E07020" }} />
                  <span style={{ color: "#E07020", fontWeight: 600 }}>Orange = note étrangère</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <div style={{ width: 14, height: 10, borderRadius: "50%", background: "#ccc" }} />
                  <span style={{ color: "#999" }}>Gris = non classée</span>
                </div>
              </div>

              <div style={{ overflowX: "auto" }}>
                <StaffSVG
                  exercise={exercise}
                  noteStates={safeNoteStates}
                  validated={validated}
                  solution={correctness}
                  onNoteClick={cycleNote}
                />
              </div>

              {/* Note names below */}
              <div style={{ display: "flex", paddingLeft: CLEF_W + 30, gap: 0, marginTop: 4 }}>
                {exercise.notes.map((n, i) => {
                  const { note } = parsePitch(n.pitch);
                  const fr = EN_TO_FR[note] ?? note;
                  return (
                    <div key={i} style={{ width: NOTE_SP, textAlign: "center", fontSize: 10, color: "#6b6b6b", fontFamily: "system-ui,sans-serif" }}>
                      {fr}
                    </div>
                  );
                })}
              </div>

              <div style={{ fontSize: 11, color: "#6b6b6b", marginTop: 10, fontStyle: "italic" }}>
                Clic 1 → bleu (réelle) · Clic 2 → orange (étrangère) · Clic 3 → gris (réinitialiser)
              </div>
            </div>

            {/* Zone 3 — Type identification for orange notes */}
            {!validated && orangeIndices.length > 0 && (
              <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 12, padding: "16px 20px", marginBottom: 16 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>
                  Identifiez les notes étrangères (orange)
                </div>
                {orangeIndices.map(i => {
                  const { note } = parsePitch(exercise.notes[i].pitch);
                  const fr = EN_TO_FR[note] ?? note;
                  return (
                    <div key={i} style={{ marginBottom: 14, padding: "12px 14px", background: "#FFF7EE", borderRadius: 8, border: "0.5px solid #F5C77E" }}>
                      <div style={{ fontSize: 12, fontWeight: 600, color: "#E07020", marginBottom: 8 }}>
                        Note {i + 1} — <span style={{ fontFamily: "Georgia,serif" }}>{fr}</span> : quel type ?
                      </div>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        {NCT_OPTIONS.map(opt => (
                          <button key={opt.value} onClick={() => setNctTypes(t => ({ ...t, [i]: opt.value }))}
                            style={{
                              padding: "5px 11px", borderRadius: 7, fontSize: 11, fontWeight: 600, cursor: "pointer",
                              border: `1.5px solid ${nctTypes[i] === opt.value ? opt.color : "#e0dbd3"}`,
                              background: nctTypes[i] === opt.value ? opt.color : "#fff",
                              color: nctTypes[i] === opt.value ? "#fff" : "#444",
                            }}>
                            {opt.abbr}
                            <span style={{ fontSize: 9, marginLeft: 4, opacity: 0.75 }}>{opt.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Zone 4 — Validation */}
            {!validated ? (
              <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
                <button onClick={handleValidate} disabled={!canValidate}
                  style={{
                    padding: "10px 24px", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: canValidate ? "pointer" : "not-allowed",
                    background: canValidate ? "#5C3D6E" : "#f0ece6",
                    color: canValidate ? "#fff" : "#aaa",
                    border: "none",
                  }}>
                  Valider mon analyse →
                </button>
              </div>
            ) : (
              <div>
                {/* Score */}
                <div style={{
                  background: score && score.correct === score.total ? "#E6F5EE" : score && score.correct >= score.total * 0.6 ? "#FEF0D9" : "#FEEEEA",
                  border: `0.5px solid ${score && score.correct === score.total ? "#8ECFB7" : score && score.correct >= score.total * 0.6 ? "#F5C77E" : "#F5B5AA"}`,
                  borderRadius: 12, padding: "16px 20px", marginBottom: 16,
                }}>
                  <div style={{ fontSize: 22, fontWeight: 700, color: "#1a1a1a", marginBottom: 4 }}>
                    {score?.correct} / {score?.total} notes correctes
                  </div>
                  <div style={{ fontSize: 13, color: "#555" }}>
                    {score?.correct === score?.total ? "Parfait ! Toutes les notes sont correctement identifiées." :
                     score && score.correct >= score.total * 0.6 ? "Bien ! Relisez les explications pour les erreurs." :
                     "Continuez à pratiquer — relisez le panneau de référence."}
                  </div>
                </div>

                {/* Feedback per note */}
                <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 12, padding: "16px 20px", marginBottom: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>
                    Corrigé détaillé
                  </div>
                  {exercise.solution.map((sol, i) => {
                    const ok = correctness[i];
                    const { note } = parsePitch(exercise.notes[i].pitch);
                    const fr = EN_TO_FR[note] ?? note;
                    const correctOpt = NCT_OPTIONS.find(o => o.value === sol.type);
                    return (
                      <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10, padding: "10px 12px", borderRadius: 8, background: ok ? "#F0FAF4" : "#FEF0EF", alignItems: "flex-start" }}>
                        <span style={{ fontSize: 16, lineHeight: 1.2 }}>{ok ? "✓" : "✗"}</span>
                        <div>
                          <div style={{ fontSize: 12, fontWeight: 700, color: ok ? "#2E8B57" : "#c0392b", marginBottom: 2 }}>
                            {fr} — {correctOpt ? (
                              <span style={{ color: correctOpt.color }}>{correctOpt.label}</span>
                            ) : sol.type === "reelle" ? "Note réelle" : sol.type}
                          </div>
                          <div style={{ fontSize: 12, color: "#555", lineHeight: 1.5 }}>{sol.explication}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <button onClick={handleNext}
                    style={{ padding: "10px 24px", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: "pointer", background: "#1a1a1a", color: "#fff", border: "none" }}>
                    Exercice suivant →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>}

        {/* Hidden piano player */}
        <div style={{ height: 0, overflow: "hidden", pointerEvents: "none" }}>
          <PianoPlayer ref={pianoRef} octaves={3} startOctave={2} showLabels={false} />
        </div>
      </div>
    </main>
  );
}

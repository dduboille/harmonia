"use client";

/**
 * HarmoniaEditor.tsx
 * Harmonia — Éditeur d'exercices SATB interactif
 *
 * Fonctionnalités :
 * - Portées grand staff (Sol + Fa) via VexFlowScoreClient
 * - Placement de notes voix par voix (B / T / A / S)
 * - Clavier chromatique 12 touches
 * - Validation harmonique en temps réel (parallèles, espacements, résolutions)
 * - Audio via PianoPlayer (note à la saisie + lecture complète)
 * - Feedback couleur sur les erreurs
 *
 * Usage :
 *   <HarmoniaEditor
 *     title="II – V – I en Do majeur"
 *     measures={["II", "V", "I"]}
 *     keySignature="C"
 *     solution={SOLUTION_IIVI}   // optionnel — pour comparaison
 *   />
 */

import React, { useRef, useState, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";

// VexFlow côté client uniquement
const VexFlowScoreClient = dynamic(
  () => import("@/components/VexFlowScoreClient").then((m) => m.GrandStaffSATB),
  { ssr: false, loading: () => <div style={styles.staffPlaceholder}>Chargement partition…</div> }
);

// ─── Types ────────────────────────────────────────────────────────────────────

export type NoteName = "C" | "D" | "E" | "F" | "G" | "A" | "B"
  | "C#" | "Db" | "D#" | "Eb" | "F#" | "Gb" | "G#" | "Ab" | "A#" | "Bb"
  | "Cbb" | "Dbb" | "Ebb" | "Fbb" | "Gbb" | "Abb" | "Bbb"
  | "C##" | "D##" | "E##" | "F##" | "G##" | "A##" | "B##";

export type Voice = "bass" | "tenor" | "alto" | "soprano";

export interface NoteEntry {
  name: NoteName | null; // null = vide
  octave: number;
}

export type Measure = Record<Voice, NoteEntry>;

export interface HarmoniaEditorProps {
  title?: string;
  subtitle?: string;
  measures?: string[];          // labels ex: ["II","V","I"]
  keySignature?: string;        // ex: "C", "G", "F"
  initialNotes?: Partial<Record<Voice, (NoteEntry | null)[]>>; // notes pré-remplies
  solution?: Record<Voice, NoteEntry>[]; // solution pour comparaison
  onComplete?: (measures: Measure[]) => void;
}

// ─── Constantes ───────────────────────────────────────────────────────────────

const VOICES: Voice[] = ["bass", "tenor", "alto", "soprano"];

const VOICE_LABELS: Record<Voice, string> = {
  bass:    "Basse",
  tenor:   "Ténor",
  alto:    "Alto",
  soprano: "Soprano",
};

const VOICE_RANGES: Record<Voice, { min: [NoteName, number]; max: [NoteName, number] }> = {
  bass:    { min: ["E", 2], max: ["C", 4] },
  tenor:   { min: ["C", 3], max: ["G", 4] },
  alto:    { min: ["G", 3], max: ["C", 5] },
  soprano: { min: ["C", 4], max: ["G", 5] },
};

const DEFAULT_OCTAVES: Record<Voice, number> = {
  bass: 2, tenor: 3, alto: 4, soprano: 4,
};

// Clavier — 7 touches naturelles uniquement
const NATURAL_KEYS: { name: NoteName; color: string }[] = [
  { name: "C", color: "#E53E3E" },
  { name: "D", color: "#DD6B20" },
  { name: "E", color: "#D69E2E" },
  { name: "F", color: "#38A169" },
  { name: "G", color: "#3182CE" },
  { name: "A", color: "#805AD5" },
  { name: "B", color: "#D53F8C" },
];

// Modificateurs d'altération
type Accidental = "bb" | "b" | "n" | "#" | "##";
const ACCIDENTALS: { symbol: string; value: Accidental; label: string }[] = [
  { symbol: "𝄫", value: "bb", label: "Double bémol" },
  { symbol: "♭", value: "b",  label: "Bémol" },
  { symbol: "♮", value: "n",  label: "Naturel" },
  { symbol: "♯", value: "#",  label: "Dièse" },
  { symbol: "𝄪", value: "##", label: "Double dièse" },
];

// Ordre chromatique pour les demi-tons (flèches clavier) et comparaisons MIDI
const CHROMATIC_ORDER = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
const NOTE_TO_FR: Record<string, string> = {
  "C": "Do", "C#": "Do#", "Db": "Réb",
  "D": "Ré", "D#": "Ré#", "Eb": "Mib",
  "E": "Mi",
  "F": "Fa", "F#": "Fa#", "Gb": "Solb",
  "G": "Sol", "G#": "Sol#", "Ab": "Lab",
  "A": "La", "A#": "La#", "Bb": "Sib",
  "B": "Si",
};

function noteToMidi(name: string, octave: number): number {
  const base = CHROMATIC_ORDER.indexOf(name.replace("b", "#").replace("Db","C#")
    .replace("Eb","D#").replace("Gb","F#").replace("Ab","G#").replace("Bb","A#"));
  return (octave + 1) * 12 + (base === -1 ? 0 : base);
}

function noteName(name: string): string {
  // Normalize flats to sharps for midi
  const map: Record<string,string> = { "Db":"C#","Eb":"D#","Gb":"F#","Ab":"G#","Bb":"A#" };
  return map[name] || name;
}

// ─── Validation harmonique ────────────────────────────────────────────────────

interface ValidationError {
  type: "parallel_fifth" | "parallel_octave" | "spacing" | "range" | "crossing" | "leading_tone" | "seventh";
  voices?: [Voice, Voice];
  measure?: number;
  message: string;
  severity: "error" | "warning";
}

function validateSATB(measures: Measure[]): ValidationError[] {
  const errors: ValidationError[] = [];

  for (let m = 0; m < measures.length; m++) {
    const cur = measures[m];

    // 1. Tessitures
    VOICES.forEach(v => {
      const n = cur[v];
      if (!n.name) return;
      const midi = noteToMidi(noteName(n.name), n.octave);
      const [minN, minO] = VOICE_RANGES[v].min;
      const [maxN, maxO] = VOICE_RANGES[v].max;
      const midiMin = noteToMidi(noteName(minN), minO);
      const midiMax = noteToMidi(noteName(maxN), maxO);
      if (midi < midiMin || midi > midiMax) {
        errors.push({ type:"range", measure:m, message:`${VOICE_LABELS[v]} hors tessiture (m.${m+1})`, severity:"error" });
      }
    });

    // 2. Espacements (S-A et A-T : max 1 octave)
    const pairs: [Voice, Voice][] = [["soprano","alto"],["alto","tenor"]];
    pairs.forEach(([v1, v2]) => {
      const n1 = cur[v1], n2 = cur[v2];
      if (!n1.name || !n2.name) return;
      const diff = Math.abs(noteToMidi(noteName(n1.name), n1.octave) - noteToMidi(noteName(n2.name), n2.octave));
      if (diff > 12) {
        errors.push({ type:"spacing", voices:[v1,v2], measure:m, message:`${VOICE_LABELS[v1]}–${VOICE_LABELS[v2]} : plus d'une octave (m.${m+1})`, severity:"error" });
      }
    });

    // 3. Croisements (voix inférieure > voix supérieure)
    const order: Voice[] = ["soprano","alto","tenor","bass"];
    for (let i = 0; i < order.length - 1; i++) {
      const upper = cur[order[i]], lower = cur[order[i+1]];
      if (!upper.name || !lower.name) continue;
      const midiUpper = noteToMidi(noteName(upper.name), upper.octave);
      const midiLower = noteToMidi(noteName(lower.name), lower.octave);
      if (midiLower > midiUpper) {
        errors.push({ type:"crossing", voices:[order[i],order[i+1]], measure:m, message:`Croisement ${VOICE_LABELS[order[i+1]]} > ${VOICE_LABELS[order[i]]} (m.${m+1})`, severity:"error" });
      }
    }

    // 4. Quintes et octaves parallèles (entre mesures successives)
    if (m > 0) {
      const prev = measures[m - 1];
      const allPairs: [Voice, Voice][] = [
        ["soprano","alto"],["soprano","tenor"],["soprano","bass"],
        ["alto","tenor"],["alto","bass"],["tenor","bass"]
      ];
      allPairs.forEach(([v1, v2]) => {
        const p1 = prev[v1], p2 = prev[v2];
        const c1 = cur[v1],  c2 = cur[v2];
        if (!p1.name || !p2.name || !c1.name || !c2.name) return;
        const prevInterval = Math.abs(noteToMidi(noteName(p1.name),p1.octave) - noteToMidi(noteName(p2.name),p2.octave)) % 12;
        const curInterval  = Math.abs(noteToMidi(noteName(c1.name),c1.octave) - noteToMidi(noteName(c2.name),c2.octave)) % 12;
        // Même direction?
        const dir1 = noteToMidi(noteName(c1.name),c1.octave) - noteToMidi(noteName(p1.name),p1.octave);
        const dir2 = noteToMidi(noteName(c2.name),c2.octave) - noteToMidi(noteName(p2.name),p2.octave);
        const sameDir = (dir1 > 0 && dir2 > 0) || (dir1 < 0 && dir2 < 0);
        if (!sameDir) return;
        if (prevInterval === 7 && curInterval === 7) {
          errors.push({ type:"parallel_fifth", voices:[v1,v2], measure:m, message:`Quintes parallèles ${VOICE_LABELS[v1]}–${VOICE_LABELS[v2]} (m.${m}→${m+1})`, severity:"error" });
        }
        if (prevInterval === 0 && curInterval === 0 && p1.name !== c1.name) {
          errors.push({ type:"parallel_octave", voices:[v1,v2], measure:m, message:`Octaves parallèles ${VOICE_LABELS[v1]}–${VOICE_LABELS[v2]} (m.${m}→${m+1})`, severity:"error" });
        }
      });
    }
  }

  return errors;
}

// ─── Conversion vers format VexFlow ──────────────────────────────────────────

function measureToVexFlow(measures: Measure[], measureIdx: number): { treble: string; bass: string } {
  const m = measures[measureIdx];
  if (!m) return { treble: "B4/wr", bass: "C3/wr" };

  const s = m.soprano;
  const a = m.alto;
  const t = m.tenor;
  const b = m.bass;

  function noteStr(n: NoteEntry): string {
    if (!n.name) return "";
    // VexFlow attend ex: Cb4, C##4, Bb3
    return `${n.name}${n.octave}`;
  }

  // Portée Sol (Soprano + Alto)
  let treble: string;
  if (s.name && a.name) {
    treble = `(${noteStr(s)} ${noteStr(a)})/w`;
  } else if (s.name) {
    treble = `${noteStr(s)}/w`;
  } else if (a.name) {
    treble = `${noteStr(a)}/w`;
  } else {
    treble = "B4/wr";
  }

  // Portée Fa (Tenor + Bass)
  let bassClef: string;
  if (t.name && b.name) {
    bassClef = `(${noteStr(t)} ${noteStr(b)})/w`;
  } else if (t.name) {
    bassClef = `${noteStr(t)}/w`;
  } else if (b.name) {
    bassClef = `${noteStr(b)}/w`;
  } else {
    bassClef = "C3/wr";
  }

  return { treble, bass: bassClef };
}

function allMeasuresToVexFlow(measures: Measure[]): { treble: string; bass: string } {
  const parts = measures.map((_, i) => measureToVexFlow(measures, i));
  return {
    treble: parts.map(p => p.treble).join(" | "),
    bass:   parts.map(p => p.bass).join(" | "),
  };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function emptyMeasure(): Measure {
  return {
    bass:    { name: null, octave: DEFAULT_OCTAVES.bass },
    tenor:   { name: null, octave: DEFAULT_OCTAVES.tenor },
    alto:    { name: null, octave: DEFAULT_OCTAVES.alto },
    soprano: { name: null, octave: DEFAULT_OCTAVES.soprano },
  };
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = {
  staffPlaceholder: {
    height: 200,
    background: "#f8f7f4",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
    color: "#bbb",
  } as React.CSSProperties,
};

// ─── Composant principal ──────────────────────────────────────────────────────

export default function HarmoniaEditor({
  title = "Exercice de conduite de voix",
  subtitle,
  measures: measureLabels = ["I", "IV", "V", "I"],
  keySignature = "C",
  initialNotes,
  solution,
  onComplete,
}: HarmoniaEditorProps) {

  // State
  const [measures, setMeasures] = useState<Measure[]>(() =>
    measureLabels.map(() => emptyMeasure())
  );
  const [activeVoice,   setActiveVoice]   = useState<Voice>("bass");
  const [activeMeasure, setActiveMeasure] = useState(0);
  const [accidental,    setAccidental]    = useState<Accidental>("n");
  const [errors,        setErrors]        = useState<ValidationError[]>([]);
  const [completed,     setCompleted]     = useState(false);
  const [showSolution,  setShowSolution]  = useState(false);

  const pianoRef = useRef<PianoPlayerRef>(null);

  // Validation à chaque changement
  useEffect(() => {
    const errs = validateSATB(measures);
    setErrors(errs);
  }, [measures]);

  // ── Fix 3 : flèches clavier → demi-ton ──
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
      e.preventDefault();
      setMeasures(prev => {
        const next = prev.map(m => ({ ...m }));
        const cur = { ...next[activeMeasure] };
        const v = cur[activeVoice];
        if (!v.name) return prev;
        // Trouver position dans l'ordre chromatique
        const normalized = v.name.replace("bb","").replace("##","")
          .replace("b","").replace("#","").replace("n","");
        // Utiliser noteName() pour normaliser vers dièses
        const normSharp = noteName(v.name as string);
        const idx = CHROMATIC_ORDER.indexOf(normSharp);
        if (idx === -1) return prev;
        let newIdx = idx + (e.key === "ArrowUp" ? 1 : -1);
        let newOctave = v.octave;
        if (newIdx > 11) { newIdx = 0; newOctave = Math.min(7, newOctave + 1); }
        if (newIdx < 0)  { newIdx = 11; newOctave = Math.max(1, newOctave - 1); }
        const newName = CHROMATIC_ORDER[newIdx] as NoteName;
        cur[activeVoice] = { name: newName, octave: newOctave };
        next[activeMeasure] = cur;
        // Audio
        const fr = NOTE_TO_FR[newName] || newName;
        setTimeout(() => pianoRef.current?.playNote(fr, newOctave, { duration: 0.8 }), 0);
        return next;
      });
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeMeasure, activeVoice]);

  // Placer une note (avec altération active)
  const placeNote = useCallback((natural: NoteName) => {
    // Construire le nom complet avec altération
    let fullName: NoteName = natural;
    if (accidental === "b")  fullName = `${natural}b` as NoteName;
    if (accidental === "bb") fullName = `${natural}bb` as NoteName;
    if (accidental === "#")  fullName = `${natural}#` as NoteName;
    if (accidental === "##") fullName = `${natural}##` as NoteName;
    // "n" = naturel, pas de modification

    setMeasures(prev => {
      const next = prev.map(m => ({ ...m }));
      const cur = { ...next[activeMeasure] };
      const existing = cur[activeVoice];
      cur[activeVoice] = { name: fullName, octave: existing.octave };
      next[activeMeasure] = cur;
      return next;
    });

    // Audio — utiliser le nom normalisé (sans double altération pour PianoPlayer)
    const audioName = fullName.replace("bb","b").replace("##","#");
    const fr = NOTE_TO_FR[audioName] || NOTE_TO_FR[natural] || natural;
    const oct = measures[activeMeasure]?.[activeVoice]?.octave ?? DEFAULT_OCTAVES[activeVoice];
    pianoRef.current?.playNote(fr, oct, { duration: 1.2 });
  }, [activeMeasure, activeVoice, accidental, measures]);

  // Effacer la note courante
  const clearNote = useCallback(() => {
    setMeasures(prev => {
      const next = prev.map(m => ({ ...m }));
      const cur = { ...next[activeMeasure] };
      cur[activeVoice] = { name: null, octave: DEFAULT_OCTAVES[activeVoice] };
      next[activeMeasure] = cur;
      return next;
    });
  }, [activeMeasure, activeVoice]);

  // Modifier l'octave
  const changeOctave = useCallback((delta: number) => {
    setMeasures(prev => {
      const next = prev.map(m => ({ ...m }));
      const cur = { ...next[activeMeasure] };
      const v = cur[activeVoice];
      cur[activeVoice] = { ...v, octave: Math.max(1, Math.min(7, v.octave + delta)) };
      next[activeMeasure] = cur;
      return next;
    });
  }, [activeMeasure, activeVoice]);

  // Jouer tout
  const playAll = useCallback(() => {
    measures.forEach((m, i) => {
      const delay = i * 1200;
      const voices: Voice[] = ["bass","tenor","alto","soprano"];
      voices.forEach(v => {
        const n = m[v];
        if (!n.name) return;
        const fr = NOTE_TO_FR[n.name] || n.name;
        setTimeout(() => {
          pianoRef.current?.playNote(fr, n.octave, { duration: 1.5 });
        }, delay + 30 * VOICES.indexOf(v));
      });
    });
  }, [measures]);

  // Vexflow strings
  const { treble, bass } = allMeasuresToVexFlow(showSolution && solution ? solution.map(s => ({
    soprano: s.soprano, alto: s.alto, tenor: s.tenor, bass: s.bass
  })) : measures);

  // Stats
  const totalNotes = measureLabels.length * 4;
  const placedNotes = measures.reduce((acc, m) =>
    acc + VOICES.filter(v => m[v].name !== null).length, 0);
  const progress = Math.round((placedNotes / totalNotes) * 100);
  const hasErrors = errors.filter(e => e.severity === "error").length > 0;
  const hasWarnings = errors.filter(e => e.severity === "warning").length > 0;

  // Note actuelle
  const currentNote = measures[activeMeasure]?.[activeVoice];

  return (
    <div style={{
      fontFamily: "var(--font-sans, 'Georgia', serif)",
      maxWidth: 760,
      margin: "0 auto",
      background: "#fafaf8",
      borderRadius: 16,
      border: "0.5px solid #e8e3db",
      overflow: "hidden",
    }}>

      {/* Piano caché */}
      <div style={{ position:"absolute", opacity:0, pointerEvents:"none", height:0, overflow:"hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={3} startOctave={2} showLabels={false} />
      </div>

      {/* ── En-tête ── */}
      <div style={{
        padding: "20px 24px 16px",
        borderBottom: "0.5px solid #e8e3db",
        background: "#fff",
      }}>
        <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:12 }}>
          <div>
            <div style={{ fontSize:11, fontWeight:600, letterSpacing:"0.1em", color:"#BA7517", textTransform:"uppercase" as const, marginBottom:4 }}>
              Exercice SATB
            </div>
            <h2 style={{ fontSize:18, fontWeight:500, color:"#1a1a1a", margin:0, lineHeight:1.3 }}>
              {title}
            </h2>
            {subtitle && <p style={{ fontSize:13, color:"#888", margin:"4px 0 0", lineHeight:1.5 }}>{subtitle}</p>}
          </div>
          {/* Progression */}
          <div style={{ textAlign:"right" as const, flexShrink:0 }}>
            <div style={{ fontSize:11, color:"#bbb", marginBottom:4 }}>{placedNotes}/{totalNotes} notes</div>
            <div style={{ width:80, height:4, background:"#f0ece6", borderRadius:4, overflow:"hidden" }}>
              <div style={{ height:"100%", width:`${progress}%`, background:hasErrors?"#E53E3E":"#185FA5", borderRadius:4, transition:"width .3s" }} />
            </div>
          </div>
        </div>

        {/* Navigation mesures */}
        <div style={{ display:"flex", gap:8, marginTop:14 }}>
          {measureLabels.map((label, i) => {
            const filled = VOICES.filter(v => measures[i]?.[v].name !== null).length;
            const isActive = i === activeMeasure;
            return (
              <button key={i} onClick={() => setActiveMeasure(i)}
                style={{
                  padding: "5px 14px",
                  borderRadius: 20,
                  border: `0.5px solid ${isActive ? "#185FA5" : "#e0dbd3"}`,
                  background: isActive ? "#185FA5" : "#fff",
                  color: isActive ? "#fff" : "#555",
                  fontSize: 12,
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all .15s",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}>
                <span style={{ fontFamily:"monospace" }}>{label}</span>
                <span style={{
                  width:16, height:16, borderRadius:"50%",
                  background: filled === 4 ? (isActive?"rgba(255,255,255,0.3)":"#E1F5EE") : "transparent",
                  border: `1px solid ${filled === 4 ? (isActive?"rgba(255,255,255,0.5)":"#0F6E56") : (isActive?"rgba(255,255,255,0.3)":"#e0dbd3")}`,
                  fontSize: 9,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  color: filled === 4 ? (isActive?"#fff":"#0F6E56") : (isActive?"rgba(255,255,255,0.6)":"#bbb"),
                }}>
                  {filled}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Portées ── */}
      <div style={{ padding:"20px 24px", background:"#fff", borderBottom:"0.5px solid #e8e3db" }}>
        <div style={{ background:"#fdfcfa", borderRadius:10, border:"0.5px solid #ede8e0", padding:"16px 12px", overflow:"auto" }}>
          {/* Labels voix */}
          <div style={{ display:"flex", justifyContent:"space-between", fontSize:10, color:"#bbb", letterSpacing:"0.08em", marginBottom:8, padding:"0 8px" }}>
            <span>SOPRANO · ALTO</span>
          </div>
          <VexFlowScoreClient
            treble={treble}
            bass={bass}
            keySignature={keySignature}
            width={700}
            label={measureLabels.map((l,i)=>`Mesure ${i+1}: ${l}`).join(" · ")}
          />
          <div style={{ fontSize:10, color:"#bbb", letterSpacing:"0.08em", marginTop:6, padding:"0 8px" }}>
            TÉNOR · BASSE
          </div>
        </div>

        {/* Indicateur mesure active */}
        <div style={{ display:"flex", gap:4, marginTop:10, justifyContent:"center" }}>
          {measureLabels.map((_, i) => (
            <div key={i} style={{
              width: `${100/measureLabels.length}%`,
              height: 3,
              borderRadius: 2,
              background: i === activeMeasure ? "#185FA5" : "#e0dbd3",
              transition: "background .2s",
            }} />
          ))}
        </div>
      </div>

      {/* ── Panneau de saisie ── */}
      <div style={{ padding:"20px 24px" }}>

        {/* Sélecteur de voix */}
        <div style={{ display:"flex", gap:8, marginBottom:16, alignItems:"center" }}>
          <span style={{ fontSize:11, color:"#aaa", letterSpacing:"0.06em", marginRight:4 }}>VOIX</span>
          {VOICES.map(v => (
            <button key={v} onClick={() => setActiveVoice(v)}
              style={{
                padding: "7px 16px",
                borderRadius: 8,
                border: `1px solid ${activeVoice === v ? "#185FA5" : "#e0dbd3"}`,
                background: activeVoice === v ? "#185FA5" : "#fff",
                color: activeVoice === v ? "#fff" : "#666",
                fontSize: 13,
                fontWeight: activeVoice === v ? 600 : 400,
                cursor: "pointer",
                transition: "all .15s",
              }}>
              {VOICE_LABELS[v]}
            </button>
          ))}
          <button onClick={clearNote}
            style={{ marginLeft:"auto", padding:"6px 12px", borderRadius:8, border:"0.5px solid #e0dbd3", background:"transparent", color:"#aaa", fontSize:11, cursor:"pointer" }}>
            × Effacer
          </button>
        </div>

        {/* Statut courant */}
        <div style={{
          padding:"8px 14px",
          background:"#f4f1ec",
          borderRadius:8,
          fontSize:12,
          color:"#666",
          marginBottom:16,
          display:"flex",
          alignItems:"center",
          gap:8,
        }}>
          <span style={{ color:"#aaa" }}>Voix :</span>
          <strong style={{ color:"#185FA5" }}>{VOICE_LABELS[activeVoice]}</strong>
          <span style={{ color:"#e0dbd3" }}>·</span>
          <span style={{ color:"#aaa" }}>Mesure :</span>
          <strong>{activeMeasure + 1} ({measureLabels[activeMeasure]})</strong>
          <span style={{ color:"#e0dbd3" }}>·</span>
          <span style={{ color:"#aaa" }}>Note :</span>
          <strong style={{ color: currentNote?.name ? "#1a1a1a" : "#bbb", fontFamily:"monospace" }}>
            {currentNote?.name ? `${currentNote.name}${currentNote.octave}` : "—"}
          </strong>
        </div>

        {/* Clavier — 7 touches naturelles + modificateurs */}
        <div style={{ marginBottom:16 }}>
          <div style={{ fontSize:11, color:"#bbb", letterSpacing:"0.06em", marginBottom:10 }}>NOTES</div>

          {/* Modificateurs d'altération */}
          <div style={{ display:"flex", gap:6, marginBottom:10, alignItems:"center" }}>
            <span style={{ fontSize:11, color:"#aaa", marginRight:4 }}>Altération :</span>
            {ACCIDENTALS.map(acc => (
              <button key={acc.value} onClick={() => setAccidental(acc.value)}
                title={acc.label}
                style={{
                  width: 38, height: 38,
                  borderRadius: 8,
                  border: `1.5px solid ${accidental === acc.value ? "#185FA5" : "#e0dbd3"}`,
                  background: accidental === acc.value ? "#185FA5" : "#fff",
                  color: accidental === acc.value ? "#fff" : "#555",
                  fontSize: 16,
                  cursor: "pointer",
                  transition: "all .12s",
                  fontFamily: "serif",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                {acc.symbol}
              </button>
            ))}
            <span style={{ fontSize:11, color:"#bbb", marginLeft:4 }}>
              {ACCIDENTALS.find(a => a.value === accidental)?.label}
            </span>
          </div>

          {/* 7 touches naturelles */}
          <div style={{ display:"flex", gap:6 }}>
            {NATURAL_KEYS.map(key => {
              // La touche est "active" si la note courante commence par cette lettre naturelle
              const curName = currentNote?.name ?? "";
              const isSelected = curName === key.name
                || curName === `${key.name}b`
                || curName === `${key.name}bb`
                || curName === `${key.name}#`
                || curName === `${key.name}##`;
              return (
                <button key={key.name} onClick={() => placeNote(key.name)}
                  style={{
                    flex: 1,
                    height: 56,
                    borderRadius: 10,
                    border: `2px solid ${isSelected ? "#fff" : "transparent"}`,
                    background: isSelected ? key.color : key.color,
                    color: "#fff",
                    fontSize: 15,
                    fontWeight: 700,
                    cursor: "pointer",
                    opacity: isSelected ? 1 : 0.85,
                    transform: isSelected ? "scale(1.04)" : "scale(1)",
                    transition: "all .12s",
                    boxShadow: isSelected ? `0 0 0 3px ${key.color}50` : "0 2px 4px rgba(0,0,0,0.1)",
                    fontFamily: "monospace",
                    position: "relative" as const,
                  }}>
                  {key.name}
                  {accidental !== "n" && isSelected && (
                    <span style={{ position:"absolute", top:4, right:6, fontSize:10, opacity:0.8 }}>
                      {ACCIDENTALS.find(a => a.value === accidental)?.symbol}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Info note complète */}
          {currentNote?.name && accidental !== "n" && (
            <div style={{ fontSize:11, color:"#888", marginTop:8 }}>
              Prochain placement : <strong style={{ color:"#185FA5", fontFamily:"monospace" }}>
                {"{note}"}{ACCIDENTALS.find(a=>a.value===accidental)?.symbol} → ex. C{ACCIDENTALS.find(a=>a.value===accidental)?.symbol}
              </strong>
            </div>
          )}
        </div>

        {/* Octave */}
        <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:20 }}>
          <span style={{ fontSize:11, color:"#aaa", letterSpacing:"0.06em" }}>OCTAVE</span>
          <button onClick={() => changeOctave(-1)}
            style={{ width:32, height:32, borderRadius:8, border:"0.5px solid #e0dbd3", background:"#fff", color:"#555", fontSize:16, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
            −
          </button>
          <span style={{ fontSize:16, fontWeight:600, color:"#185FA5", minWidth:24, textAlign:"center" as const, fontFamily:"monospace" }}>
            {currentNote?.octave ?? DEFAULT_OCTAVES[activeVoice]}
          </span>
          <button onClick={() => changeOctave(+1)}
            style={{ width:32, height:32, borderRadius:8, border:"0.5px solid #e0dbd3", background:"#fff", color:"#555", fontSize:16, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
            +
          </button>
          <span style={{ fontSize:11, color:"#bbb", marginLeft:4 }}>
            Tessiture {activeVoice}: {VOICE_RANGES[activeVoice].min[0]}{VOICE_RANGES[activeVoice].min[1]}–{VOICE_RANGES[activeVoice].max[0]}{VOICE_RANGES[activeVoice].max[1]}
          </span>
        </div>

        {/* ── Feedback erreurs ── */}
        {errors.length > 0 && (
          <div style={{ marginBottom:20 }}>
            <div style={{ fontSize:11, color:"#aaa", letterSpacing:"0.06em", marginBottom:8 }}>ANALYSE HARMONIQUE</div>
            <div style={{ display:"flex", flexDirection:"column" as const, gap:6 }}>
              {errors.map((err, i) => (
                <div key={i} style={{
                  padding:"8px 12px",
                  borderRadius:8,
                  background: err.severity === "error" ? "#FFF5F5" : "#FFFBEB",
                  border: `0.5px solid ${err.severity === "error" ? "#FC8181" : "#F6E05E"}`,
                  fontSize:12,
                  color: err.severity === "error" ? "#C53030" : "#744210",
                  display:"flex",
                  alignItems:"center",
                  gap:8,
                }}>
                  <span style={{ fontSize:14 }}>{err.severity === "error" ? "✗" : "⚠"}</span>
                  {err.message}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pas d'erreurs et notes placées */}
        {errors.length === 0 && placedNotes > 0 && (
          <div style={{
            marginBottom:20, padding:"8px 12px", borderRadius:8,
            background:"#F0FFF4", border:"0.5px solid #9AE6B4",
            fontSize:12, color:"#276749", display:"flex", alignItems:"center", gap:8,
          }}>
            <span>✓</span>
            {placedNotes === totalNotes ? "Progression complète — aucune erreur harmonique détectée." : "Aucune erreur pour les notes placées."}
          </div>
        )}

        {/* ── Actions ── */}
        <div style={{ display:"flex", gap:10, alignItems:"center", flexWrap:"wrap" as const }}>
          <button onClick={playAll}
            style={{
              padding:"9px 20px", borderRadius:10,
              border:"1px solid #185FA5",
              background:"#E6F1FB", color:"#185FA5",
              fontSize:13, fontWeight:500, cursor:"pointer",
              display:"flex", alignItems:"center", gap:8,
            }}>
            ▶ Écouter
          </button>

          {solution && (
            <button onClick={() => setShowSolution(s => !s)}
              style={{
                padding:"9px 20px", borderRadius:10,
                border:"1px solid #e0dbd3",
                background:showSolution?"#f0ece6":"#fff",
                color:"#666", fontSize:13, cursor:"pointer",
              }}>
              {showSolution ? "Masquer la solution" : "Voir la solution"}
            </button>
          )}

          <button
            onClick={() => {
              if (placedNotes === totalNotes) {
                setCompleted(true);
                onComplete?.(measures);
              }
            }}
            disabled={placedNotes < totalNotes || hasErrors}
            style={{
              marginLeft:"auto",
              padding:"9px 24px", borderRadius:10,
              border:"none",
              background: placedNotes === totalNotes && !hasErrors ? "#185FA5" : "#e0dbd3",
              color: placedNotes === totalNotes && !hasErrors ? "#fff" : "#aaa",
              fontSize:13, fontWeight:600,
              cursor: placedNotes === totalNotes && !hasErrors ? "pointer" : "default",
              transition:"all .2s",
            }}>
            Terminer ✓
          </button>
        </div>

        {/* Message de complétion */}
        {completed && (
          <div style={{
            marginTop:16, padding:"14px 18px", borderRadius:10,
            background:"#F0FFF4", border:"1px solid #9AE6B4",
            fontSize:14, color:"#276749",
          }}>
            🎹 Exercice terminé avec succès ! {errors.length === 0 ? "Aucune erreur harmonique — excellent travail." : ""}
          </div>
        )}
      </div>
    </div>
  );
}

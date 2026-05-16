"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import PianoPlayer, { type PianoPlayerRef } from "@/components/PianoPlayer";

// ─── Types ────────────────────────────────────────────────────────────────────

interface CN { fr: string; oct: number; }
interface CE { label: string; notes: CN[]; }
interface Prog { id: string; level: 1 | 2 | 3; title: string; chords: CE[]; }
type Phase = "idle" | "listening" | "answering" | "complete";
interface Ans { correct: boolean; chosen: string; expected: string; }

// ─── Helpers ──────────────────────────────────────────────────────────────────

const n = (fr: string, oct: number): CN => ({ fr, oct });

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Chord pools ──────────────────────────────────────────────────────────────

const POOL_L1: CE[] = [
  { label: "Do",   notes: [n("Do",3), n("Mi",3), n("Sol",3)] },
  { label: "Rém",  notes: [n("Ré",3), n("Fa",3), n("La",3)] },
  { label: "Mim",  notes: [n("Mi",3), n("Sol",3), n("Si",3)] },
  { label: "Fa",   notes: [n("Fa",3), n("La",3), n("Do",4)] },
  { label: "Sol",  notes: [n("Sol",3), n("Si",3), n("Ré",4)] },
  { label: "Lam",  notes: [n("La",3), n("Do",4), n("Mi",4)] },
  { label: "Si°",  notes: [n("Si",3), n("Ré",4), n("Fa",4)] },
  { label: "Ré",   notes: [n("Ré",3), n("Fa#",3), n("La",3)] },
  { label: "Mi",   notes: [n("Mi",3), n("Sol#",3), n("Si",3)] },
  { label: "La",   notes: [n("La",3), n("Do#",4), n("Mi",4)] },
  { label: "Solm", notes: [n("Sol",3), n("Sib",3), n("Ré",4)] },
  { label: "Fa#°", notes: [n("Fa#",3), n("La",3), n("Do",4)] },
  { label: "Dom",  notes: [n("Do",3), n("Mib",3), n("Sol",3)] },
  { label: "Sib",  notes: [n("Sib",2), n("Ré",3), n("Fa",3)] },
  { label: "Mib",  notes: [n("Mib",3), n("Sol",3), n("Sib",3)] },
  { label: "Lab",  notes: [n("Lab",2), n("Do",3), n("Mib",3)] },
];

const POOL_L2: CE[] = [
  { label: "DoMaj7",  notes: [n("Do",3), n("Mi",3), n("Sol",3), n("Si",3)] },
  { label: "Rém7",    notes: [n("Ré",3), n("Fa",3), n("La",3), n("Do",4)] },
  { label: "Mim7",    notes: [n("Mi",3), n("Sol",3), n("Si",3), n("Ré",4)] },
  { label: "FaMaj7",  notes: [n("Fa",3), n("La",3), n("Do",4), n("Mi",4)] },
  { label: "Sol7",    notes: [n("Sol",3), n("Si",3), n("Ré",4), n("Fa",4)] },
  { label: "Lam7",    notes: [n("La",2), n("Do",3), n("Mi",3), n("Sol",3)] },
  { label: "Siø7",    notes: [n("Si",2), n("Ré",3), n("Fa",3), n("La",3)] },
  { label: "Ré7",     notes: [n("Ré",3), n("Fa#",3), n("La",3), n("Do",4)] },
  { label: "Fa7",     notes: [n("Fa",3), n("La",3), n("Do",4), n("Mib",4)] },
  { label: "SibMaj7", notes: [n("Sib",2), n("Ré",3), n("Fa",3), n("La",3)] },
  { label: "MibMaj7", notes: [n("Mib",3), n("Sol",3), n("Sib",3), n("Ré",4)] },
  { label: "LabMaj7", notes: [n("Lab",2), n("Do",3), n("Mib",3), n("Sol",3)] },
  { label: "Solm7",   notes: [n("Sol",3), n("Sib",3), n("Ré",4), n("Fa",4)] },
  { label: "Dom7",    notes: [n("Do",3), n("Mib",3), n("Sol",3), n("Sib",3)] },
  { label: "Do7",     notes: [n("Do",3), n("Mi",3), n("Sol",3), n("Sib",3)] },
  { label: "SolMaj7", notes: [n("Sol",3), n("Si",3), n("Ré",4), n("Fa#",4)] },
];

const POOL_L3: CE[] = [
  { label: "DoMaj9",  notes: [n("Do",3), n("Mi",3), n("Sol",3), n("Si",3), n("Ré",4)] },
  { label: "Rém9",    notes: [n("Ré",3), n("Fa",3), n("La",3), n("Do",4), n("Mi",4)] },
  { label: "Sol13",   notes: [n("Sol",2), n("Fa",3), n("La",3), n("Si",3), n("Mi",4)] },
  { label: "Réb7",    notes: [n("Réb",3), n("Fa",3), n("Lab",3), n("Si",3)] },
  { label: "Lab7",    notes: [n("Lab",2), n("Do",3), n("Mib",3), n("Solb",3)] },
  { label: "Fa#m7",   notes: [n("Fa#",3), n("La",3), n("Do#",4), n("Mi",4)] },
  { label: "Do#ø7",   notes: [n("Do#",3), n("Mi",3), n("Sol",3), n("Si",3)] },
  { label: "Fam7",    notes: [n("Fa",3), n("Lab",3), n("Do",4), n("Mib",4)] },
  { label: "Sib7",    notes: [n("Sib",2), n("Ré",3), n("Fa",3), n("Lab",3)] },
  { label: "MiMaj7",  notes: [n("Mi",3), n("Sol#",3), n("Si",3), n("Ré#",4)] },
  { label: "LaMaj7",  notes: [n("La",3), n("Do#",4), n("Mi",4), n("Sol#",4)] },
  { label: "RéMaj9",  notes: [n("Ré",3), n("Fa#",3), n("La",3), n("Do#",4), n("Mi",4)] },
  { label: "Solm9",   notes: [n("Sol",3), n("Sib",3), n("Ré",4), n("Fa",4), n("La",4)] },
  { label: "FaMaj9",  notes: [n("Fa",3), n("La",3), n("Do",4), n("Mi",4), n("Sol",4)] },
  { label: "Sibm7",   notes: [n("Sib",2), n("Réb",3), n("Fa",3), n("Lab",3)] },
  { label: "MibMaj9", notes: [n("Mib",3), n("Sol",3), n("Sib",3), n("Ré",4), n("Fa",4)] },
];

// ─── Progressions ─────────────────────────────────────────────────────────────

function chord(label: string, pool: CE[]): CE {
  return pool.find(e => e.label === label)!;
}

const L1 = POOL_L1;
const L2 = POOL_L2;
const L3 = POOL_L3;

const PROGRESSIONS: Prog[] = [
  // ── Niveau 1 : triades ──────────────────────────────────────────────────────
  { id: "l1-1", level: 1, title: "I – IV – V – I",
    chords: [chord("Do",L1), chord("Fa",L1), chord("Sol",L1), chord("Do",L1)] },
  { id: "l1-2", level: 1, title: "I – VIm – IV – V",
    chords: [chord("Do",L1), chord("Lam",L1), chord("Fa",L1), chord("Sol",L1)] },
  { id: "l1-3", level: 1, title: "VIm – IV – I – V",
    chords: [chord("Lam",L1), chord("Fa",L1), chord("Do",L1), chord("Sol",L1)] },
  { id: "l1-4", level: 1, title: "V – IV – I",
    chords: [chord("Sol",L1), chord("Fa",L1), chord("Do",L1)] },
  { id: "l1-5", level: 1, title: "I – V – VIm – IV",
    chords: [chord("Do",L1), chord("Sol",L1), chord("Lam",L1), chord("Fa",L1)] },
  { id: "l1-6", level: 1, title: "IIm – V – I",
    chords: [chord("Rém",L1), chord("Sol",L1), chord("Do",L1)] },
  { id: "l1-7", level: 1, title: "I – IIIm – IV – V",
    chords: [chord("Do",L1), chord("Mim",L1), chord("Fa",L1), chord("Sol",L1)] },
  { id: "l1-8", level: 1, title: "IIm – V – I – IV",
    chords: [chord("Rém",L1), chord("Sol",L1), chord("Do",L1), chord("Fa",L1)] },
  { id: "l1-9", level: 1, title: "I – IV – V – I (La)",
    chords: [chord("La",L1), chord("Ré",L1), chord("Mi",L1), chord("La",L1)] },
  { id: "l1-10", level: 1, title: "Im – IVm – bVII – bIII (mineur)",
    chords: [chord("Dom",L1), chord("Solm",L1), chord("Mib",L1), chord("Sib",L1)] },

  // ── Niveau 2 : accords de 7e ─────────────────────────────────────────────────
  { id: "l2-1", level: 2, title: "IIm7 – V7 – IMaj7",
    chords: [chord("Rém7",L2), chord("Sol7",L2), chord("DoMaj7",L2)] },
  { id: "l2-2", level: 2, title: "IIm7 – V7 – IMaj7 (Sol)",
    chords: [chord("Lam7",L2), chord("Ré7",L2), chord("SolMaj7",L2)] },
  { id: "l2-3", level: 2, title: "IIm7 – V7 – IMaj7 (Fa)",
    chords: [chord("Solm7",L2), chord("Do7",L2), chord("FaMaj7",L2)] },
  { id: "l2-4", level: 2, title: "IMaj7 – VIm7 – IIm7 – V7",
    chords: [chord("DoMaj7",L2), chord("Lam7",L2), chord("Rém7",L2), chord("Sol7",L2)] },
  { id: "l2-5", level: 2, title: "IIIm7 – VIm7 – IIm7 – V7",
    chords: [chord("Mim7",L2), chord("Lam7",L2), chord("Rém7",L2), chord("Sol7",L2)] },
  { id: "l2-6", level: 2, title: "IMaj7 – VIIø7 – IIIm7 – VIm7",
    chords: [chord("DoMaj7",L2), chord("Siø7",L2), chord("Mim7",L2), chord("Lam7",L2)] },
  { id: "l2-7", level: 2, title: "Progression en Mib",
    chords: [chord("MibMaj7",L2), chord("Dom7",L2), chord("SibMaj7",L2), chord("Fa7",L2)] },
  { id: "l2-8", level: 2, title: "Progression en Lab",
    chords: [chord("LabMaj7",L2), chord("MibMaj7",L2), chord("SibMaj7",L2), chord("Fa7",L2)] },
  { id: "l2-9", level: 2, title: "IVMaj7 – Im7 – V7 – I7",
    chords: [chord("DoMaj7",L2), chord("Siø7",L2), chord("Mim7",L2), chord("Lam7",L2)] },
  { id: "l2-10", level: 2, title: "IIm7 – V7 – IMaj7 – IVMaj7",
    chords: [chord("Rém7",L2), chord("Sol7",L2), chord("DoMaj7",L2), chord("FaMaj7",L2)] },

  // ── Niveau 3 : jazz & extensions ─────────────────────────────────────────────
  { id: "l3-1", level: 3, title: "IIm9 – V13 – IMaj9",
    chords: [chord("Rém9",L3), chord("Sol13",L3), chord("DoMaj9",L3)] },
  { id: "l3-2", level: 3, title: "IIm9 – bII7 – IMaj9 (tritone sub)",
    chords: [chord("Rém9",L3), chord("Réb7",L3), chord("DoMaj9",L3)] },
  { id: "l3-3", level: 3, title: "IIm7 – V7 – IMaj9 (Mib)",
    chords: [chord("Fam7",L3), chord("Sib7",L3), chord("MibMaj9",L3)] },
  { id: "l3-4", level: 3, title: "IIm7 – bII7 – IMaj7 (Mi)",
    chords: [chord("Fa#m7",L3), chord("Lab7",L3), chord("MiMaj7",L3)] },
  { id: "l3-5", level: 3, title: "IIm9 – V13 – IMaj9 – IVMaj9",
    chords: [chord("Rém9",L3), chord("Sol13",L3), chord("DoMaj9",L3), chord("FaMaj9",L3)] },
  { id: "l3-6", level: 3, title: "IMaj9 – IVMaj9 – IIm9 – V13",
    chords: [chord("DoMaj9",L3), chord("FaMaj9",L3), chord("Rém9",L3), chord("Sol13",L3)] },
  { id: "l3-7", level: 3, title: "IMaj7 – VIm7 – IIMaj9 – IMaj9 (Ré)",
    chords: [chord("LaMaj7",L3), chord("Fa#m7",L3), chord("RéMaj9",L3), chord("DoMaj9",L3)] },
  { id: "l3-8", level: 3, title: "Vm9 – VIIø7 – IVMaj9",
    chords: [chord("Solm9",L3), chord("Do#ø7",L3), chord("FaMaj9",L3)] },
  { id: "l3-9", level: 3, title: "IMaj7 – VIm7 – IIMaj9 (Ré)",
    chords: [chord("LaMaj7",L3), chord("Fa#m7",L3), chord("RéMaj9",L3)] },
  { id: "l3-10", level: 3, title: "Enchaînement modal – IV tonalités",
    chords: [chord("MiMaj7",L3), chord("LaMaj7",L3), chord("RéMaj9",L3), chord("DoMaj9",L3)] },
];

// ─── Options generator ────────────────────────────────────────────────────────

function getPool(level: 1 | 2 | 3): CE[] {
  return level === 1 ? POOL_L1 : level === 2 ? POOL_L2 : POOL_L3;
}

function makeOptions(correct: CE, level: 1 | 2 | 3): CE[] {
  const pool = getPool(level);
  const distractors = shuffle(pool.filter(c => c.label !== correct.label)).slice(0, 7);
  return shuffle([correct, ...distractors]);
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const PURPLE = "#5C3D6E";
const GOLD   = "#E9C97E";
const GREEN  = "#16a34a";
const RED    = "#dc2626";
const BG     = "#faf8fc";

// ─── Component ────────────────────────────────────────────────────────────────

export default function DicteeHarmonique() {
  const [level,      setLevel]      = useState<1 | 2 | 3>(1);
  const [phase,      setPhase]      = useState<Phase>("idle");
  const [prog,       setProg]       = useState<Prog | null>(null);
  const [chordIdx,   setChordIdx]   = useState(0);
  const [allOptions, setAllOptions] = useState<CE[][]>([]);
  const [answers,    setAnswers]    = useState<Ans[]>([]);
  const [feedback,   setFeedback]   = useState<{ chosen: string; ok: boolean } | null>(null);

  const piano     = useRef<PianoPlayerRef>(null);
  const timers    = useRef<ReturnType<typeof setTimeout>[]>([]);
  const answering = useRef(false);

  const clearAll = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  useEffect(() => () => clearAll(), [clearAll]);

  // ── Playback helpers ────────────────────────────────────────────────────────

  const playChord = useCallback((ce: CE) => {
    ce.notes.forEach(({ fr, oct }) => {
      piano.current?.playNote(fr, oct, { duration: 1.6 });
    });
  }, []);

  const playProgression = useCallback((chords: CE[], onDone?: () => void) => {
    clearAll();
    const INTERVAL = 2000;
    chords.forEach((ch, i) => {
      const t = setTimeout(() => playChord(ch), i * INTERVAL);
      timers.current.push(t);
    });
    if (onDone) {
      const t = setTimeout(onDone, chords.length * INTERVAL);
      timers.current.push(t);
    }
  }, [clearAll, playChord]);

  // ── Game actions ────────────────────────────────────────────────────────────

  const startNew = useCallback(() => {
    clearAll();
    answering.current = false;
    setAnswers([]);
    setFeedback(null);
    setChordIdx(0);

    const pool = PROGRESSIONS.filter(p => p.level === level);
    const picked = pool[Math.floor(Math.random() * pool.length)];
    setProg(picked);

    const opts = picked.chords.map(ch => makeOptions(ch, level));
    setAllOptions(opts);

    setPhase("listening");
    playProgression(picked.chords, () => setPhase("answering"));
  }, [level, clearAll, playProgression]);

  const replayAll = useCallback(() => {
    if (!prog) return;
    playProgression(prog.chords);
  }, [prog, playProgression]);

  const replayCurrent = useCallback(() => {
    if (!prog) return;
    playChord(prog.chords[chordIdx]);
  }, [prog, chordIdx, playChord]);

  const handleAnswer = useCallback((chosen: CE) => {
    if (!prog || answering.current) return;
    answering.current = true;

    const expected = prog.chords[chordIdx];
    const ok = chosen.label === expected.label;

    setFeedback({ chosen: chosen.label, ok });
    setAnswers(prev => [...prev, { correct: ok, chosen: chosen.label, expected: expected.label }]);

    playChord(chosen);
    if (!ok) {
      const t = setTimeout(() => playChord(expected), 700);
      timers.current.push(t);
    }

    const t = setTimeout(() => {
      answering.current = false;
      setFeedback(null);
      const next = chordIdx + 1;
      if (next >= prog.chords.length) {
        setPhase("complete");
      } else {
        setChordIdx(next);
        playChord(prog.chords[next]);
      }
    }, 1300);
    timers.current.push(t);
  }, [prog, chordIdx, playChord]);

  // ── Render helpers ──────────────────────────────────────────────────────────

  const levelColors: Record<number, string> = { 1: "#16a34a", 2: "#2563eb", 3: "#7c3aed" };
  const levelNames  = ["Triades", "Accords de 7e", "Jazz & extensions"];
  const score       = answers.filter(a => a.correct).length;
  const currentOpts = allOptions[chordIdx] ?? [];

  // ── UI ──────────────────────────────────────────────────────────────────────

  return (
    <div style={{
      minHeight: "100vh",
      background: BG,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "2rem 1rem 4rem",
      fontFamily: "system-ui, sans-serif",
    }}>
      {/* Hidden piano */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={piano} octaves={5} startOctave={2} showLabels={false} />
      </div>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ margin: 0, fontSize: "1.8rem", fontWeight: 800, color: PURPLE, letterSpacing: "-0.03em" }}>
          ♫ Dictée harmonique
        </h1>
        <p style={{ margin: "0.4rem 0 0", color: "#666", fontSize: "0.95rem" }}>
          Écoute la progression et identifie chaque accord
        </p>
      </div>

      {/* Level selector */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem" }}>
        {([1, 2, 3] as const).map(l => (
          <button
            key={l}
            onClick={() => { setLevel(l); setPhase("idle"); clearAll(); setProg(null); setAnswers([]); setFeedback(null); }}
            style={{
              padding: "0.45rem 1.1rem",
              borderRadius: 24,
              border: `2px solid ${level === l ? levelColors[l] : "#ddd"}`,
              background: level === l ? levelColors[l] : "#fff",
              color: level === l ? "#fff" : "#555",
              fontWeight: 700,
              fontSize: "0.85rem",
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >
            Niv.{l} — {levelNames[l - 1]}
          </button>
        ))}
      </div>

      {/* Main card */}
      <div style={{
        width: "100%",
        maxWidth: 640,
        background: "#fff",
        borderRadius: 18,
        boxShadow: "0 4px 32px rgba(92,61,110,0.10)",
        padding: "2rem",
        minHeight: 320,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
      }}>

        {/* ── IDLE ── */}
        {phase === "idle" && (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎹</div>
            <p style={{ color: "#444", marginBottom: "1.5rem", fontSize: "0.95rem", lineHeight: 1.6 }}>
              Une progression de 3 à 5 accords va être jouée.<br />
              Identifie chaque accord parmi 8 propositions.
            </p>
            <button onClick={startNew} style={btnStyle(PURPLE, "#fff")}>
              Commencer
            </button>
          </div>
        )}

        {/* ── LISTENING ── */}
        {phase === "listening" && prog && (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem", animation: "pulse 1s ease-in-out infinite" }}>♩</div>
            <p style={{ color: PURPLE, fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.3rem" }}>
              Écoute de la progression…
            </p>
            <p style={{ color: "#888", fontSize: "0.85rem" }}>
              {prog.chords.length} accord{prog.chords.length > 1 ? "s" : ""}
            </p>
            {/* Dot indicators */}
            <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: "1.2rem" }}>
              {prog.chords.map((_, i) => (
                <div key={i} style={{
                  width: 10, height: 10, borderRadius: "50%",
                  background: PURPLE, opacity: 0.3,
                }} />
              ))}
            </div>
          </div>
        )}

        {/* ── ANSWERING ── */}
        {phase === "answering" && prog && (
          <div style={{ width: "100%" }}>
            {/* Progress dots */}
            <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: "1rem" }}>
              {prog.chords.map((_, i) => {
                const done = i < answers.length;
                const current = i === chordIdx;
                return (
                  <div key={i} style={{
                    width: 12, height: 12, borderRadius: "50%",
                    background: done
                      ? (answers[i]?.correct ? GREEN : RED)
                      : current ? PURPLE : "#e0d8ea",
                    transition: "background 0.3s",
                  }} />
                );
              })}
            </div>

            <p style={{ textAlign: "center", color: "#888", fontSize: "0.85rem", marginBottom: "0.3rem" }}>
              Accord <strong style={{ color: PURPLE }}>{chordIdx + 1}</strong> / {prog.chords.length}
            </p>
            <p style={{ textAlign: "center", fontWeight: 700, color: PURPLE, fontSize: "1.05rem", marginBottom: "1.2rem" }}>
              Quel est cet accord ?
            </p>

            {/* Option grid */}
            <div key={chordIdx} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.5rem", marginBottom: "1.2rem" }}>
              {currentOpts.map(opt => {
                const isChosen = feedback?.chosen === opt.label;
                const isExpected = feedback !== null && !feedback.ok && prog.chords[chordIdx].label === opt.label;
                let bg = "#f5f0fb";
                let color = PURPLE;
                let border = "2px solid #e0d8ea";
                if (isChosen && feedback?.ok) { bg = GREEN; color = "#fff"; border = `2px solid ${GREEN}`; }
                else if (isChosen && !feedback?.ok) { bg = RED; color = "#fff"; border = `2px solid ${RED}`; }
                else if (isExpected) { bg = "#dcfce7"; color = GREEN; border = `2px solid ${GREEN}`; }
                return (
                  <button
                    key={opt.label}
                    onClick={() => handleAnswer(opt)}
                    disabled={!!feedback}
                    style={{
                      padding: "0.65rem 0.4rem",
                      borderRadius: 10,
                      border,
                      background: bg,
                      color,
                      fontWeight: 700,
                      fontSize: "0.82rem",
                      cursor: feedback ? "default" : "pointer",
                      transition: "all 0.15s",
                      opacity: feedback && !isChosen && !isExpected ? 0.5 : 1,
                    }}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>

            {/* Controls */}
            <div style={{ display: "flex", gap: "0.6rem", justifyContent: "center" }}>
              <button onClick={replayCurrent} style={btnStyle("#f0ebfa", PURPLE, true)}>
                ↺ Cet accord
              </button>
              <button onClick={replayAll} style={btnStyle("#f0ebfa", PURPLE, true)}>
                ↺ Depuis le début
              </button>
            </div>
          </div>
        )}

        {/* ── COMPLETE ── */}
        {phase === "complete" && prog && (
          <div style={{ width: "100%", textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
              {score === answers.length ? "🎉" : score >= answers.length / 2 ? "👍" : "💪"}
            </div>
            <p style={{ fontSize: "1.4rem", fontWeight: 800, color: PURPLE, margin: "0 0 0.3rem" }}>
              {score} / {answers.length}
            </p>
            <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "1.4rem" }}>
              {score === answers.length
                ? "Excellent ! Oreille parfaite !"
                : score >= answers.length * 0.75
                  ? "Très bien ! Continue comme ça."
                  : score >= answers.length / 2
                    ? "Pas mal ! Rejoue pour progresser."
                    : "Continue à t'entraîner, tu vas y arriver !"}
            </p>

            {/* Bilan */}
            <div style={{ textAlign: "left", marginBottom: "1.5rem" }}>
              {answers.map((a, i) => (
                <div key={i} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.45rem 0.8rem",
                  borderRadius: 8,
                  background: a.correct ? "#f0fdf4" : "#fef2f2",
                  marginBottom: "0.4rem",
                  fontSize: "0.88rem",
                }}>
                  <span style={{ color: a.correct ? GREEN : RED, fontWeight: 700, minWidth: 20 }}>
                    {a.correct ? "✓" : "✗"}
                  </span>
                  <span style={{ color: "#555", flex: 1 }}>Accord {i + 1} :</span>
                  <span style={{ fontWeight: 700, color: a.correct ? GREEN : RED }}>
                    {a.expected}
                  </span>
                  {!a.correct && (
                    <span style={{ color: "#aaa", fontSize: "0.8rem" }}>
                      (tu as dit : {a.chosen})
                    </span>
                  )}
                  <button
                    onClick={() => playChord(prog.chords[i])}
                    style={{
                      background: "none", border: "none", cursor: "pointer",
                      color: PURPLE, fontSize: "0.85rem", padding: "0 0.2rem",
                    }}
                    title="Réécouter"
                  >
                    ♪
                  </button>
                </div>
              ))}
            </div>

            <button onClick={startNew} style={btnStyle(PURPLE, "#fff")}>
              Nouvelle dictée
            </button>
          </div>
        )}
      </div>

      {/* Pulse animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
}

// ─── Button style helper ──────────────────────────────────────────────────────

function btnStyle(bg: string, color: string, small = false): React.CSSProperties {
  return {
    padding: small ? "0.4rem 0.9rem" : "0.65rem 1.8rem",
    borderRadius: 24,
    border: "none",
    background: bg,
    color,
    fontWeight: 700,
    fontSize: small ? "0.82rem" : "0.95rem",
    cursor: "pointer",
  };
}

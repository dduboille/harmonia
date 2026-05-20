// src/components/DicteeIntervalles.tsx
"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import PianoPlayer, { type PianoPlayerRef } from "@/components/PianoPlayer";
import VisualisationNote from "@/components/VisualisationNote";

// ── Types ─────────────────────────────────────────────────────────────────────
interface CN { fr: string; oct: number; }
interface IvDef { name: string; semitones: number; level: 1 | 2 | 3; }
interface IvQuestion { note1: CN; note2: CN; interval: IvDef; level: 1 | 2 | 3; }
type Phase = "idle" | "question" | "complete";
interface Ans { correct: boolean; chosen: string; expected: string; }

// ── Helpers ───────────────────────────────────────────────────────────────────
const n = (fr: string, oct: number): CN => ({ fr, oct });

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── 14 intervalles ────────────────────────────────────────────────────────────
const ALL_INTERVALS: IvDef[] = [
  { name: "Unisson",             semitones: 0,  level: 1 },
  { name: "Seconde mineure",     semitones: 1,  level: 2 },
  { name: "Seconde majeure",     semitones: 2,  level: 1 },
  { name: "Tierce mineure",      semitones: 3,  level: 1 },
  { name: "Tierce majeure",      semitones: 4,  level: 1 },
  { name: "Quarte juste",        semitones: 5,  level: 1 },
  { name: "Quarte augmentée",    semitones: 6,  level: 2 },
  { name: "Quinte juste",        semitones: 7,  level: 1 },
  { name: "Sixte mineure",       semitones: 8,  level: 2 },
  { name: "Sixte majeure",       semitones: 9,  level: 1 },
  { name: "Septième mineure",    semitones: 10, level: 2 },
  { name: "Septième majeure",    semitones: 11, level: 3 },
  { name: "Octave",              semitones: 12, level: 1 },
  { name: "Neuvième majeure",    semitones: 14, level: 3 },
];

function iv(name: string): IvDef {
  return ALL_INTERVALS.find(x => x.name === name)!;
}

function poolForLevel(level: 1 | 2 | 3): IvDef[] {
  return ALL_INTERVALS.filter(x => x.level <= level);
}

// ── 30 paires (10 par niveau) ─────────────────────────────────────────────────
const ALL_PAIRS: IvQuestion[] = [
  // ── Niveau 1 ─────────────────────────────────────────────────────────────
  { note1: n("Do",4), note2: n("Do",4),  interval: iv("Unisson"),         level: 1 },
  { note1: n("Do",4), note2: n("Ré",4),  interval: iv("Seconde majeure"), level: 1 },
  { note1: n("Do",4), note2: n("Mib",4), interval: iv("Tierce mineure"),  level: 1 },
  { note1: n("Do",4), note2: n("Mi",4),  interval: iv("Tierce majeure"),  level: 1 },
  { note1: n("Do",4), note2: n("Fa",4),  interval: iv("Quarte juste"),    level: 1 },
  { note1: n("Do",4), note2: n("Sol",4), interval: iv("Quinte juste"),    level: 1 },
  { note1: n("Do",4), note2: n("La",4),  interval: iv("Sixte majeure"),   level: 1 },
  { note1: n("Do",4), note2: n("Do",5),  interval: iv("Octave"),          level: 1 },
  { note1: n("Sol",3), note2: n("La",3), interval: iv("Seconde majeure"), level: 1 },
  { note1: n("La",3), note2: n("Do",4),  interval: iv("Tierce mineure"),  level: 1 },

  // ── Niveau 2 ─────────────────────────────────────────────────────────────
  { note1: n("Do",4),  note2: n("Réb",4), interval: iv("Seconde mineure"),  level: 2 },
  { note1: n("Sol",3), note2: n("La",3),  interval: iv("Seconde majeure"),  level: 2 },
  { note1: n("La",3),  note2: n("Do",4),  interval: iv("Tierce mineure"),   level: 2 },
  { note1: n("Sol",3), note2: n("Si",3),  interval: iv("Tierce majeure"),   level: 2 },
  { note1: n("Do",4),  note2: n("Fa",4),  interval: iv("Quarte juste"),     level: 2 },
  { note1: n("Do",4),  note2: n("Fa#",4), interval: iv("Quarte augmentée"), level: 2 },
  { note1: n("Sol",3), note2: n("Ré",4),  interval: iv("Quinte juste"),     level: 2 },
  { note1: n("Mi",4),  note2: n("Do",5),  interval: iv("Sixte mineure"),    level: 2 },
  { note1: n("Do",4),  note2: n("La",4),  interval: iv("Sixte majeure"),    level: 2 },
  { note1: n("Ré",4),  note2: n("Do",5),  interval: iv("Septième mineure"), level: 2 },

  // ── Niveau 3 ─────────────────────────────────────────────────────────────
  { note1: n("Do",4),  note2: n("Si",4),  interval: iv("Septième majeure"), level: 3 },
  { note1: n("Do",4),  note2: n("Ré",5),  interval: iv("Neuvième majeure"), level: 3 },
  { note1: n("Sol",3), note2: n("Fa#",4), interval: iv("Septième majeure"), level: 3 },
  { note1: n("Ré",4),  note2: n("Do#",5), interval: iv("Septième majeure"), level: 3 },
  { note1: n("Fa",3),  note2: n("Mi",4),  interval: iv("Septième majeure"), level: 3 },
  { note1: n("Mi",4),  note2: n("Fa#",5), interval: iv("Neuvième majeure"), level: 3 },
  { note1: n("La",3),  note2: n("Sol#",4),interval: iv("Septième majeure"), level: 3 },
  { note1: n("Si",3),  note2: n("Do#",5), interval: iv("Neuvième majeure"), level: 3 },
  { note1: n("Ré",4),  note2: n("Mi",5),  interval: iv("Neuvième majeure"), level: 3 },
  { note1: n("Sol",3), note2: n("La",4),  interval: iv("Neuvième majeure"), level: 3 },
];

// ── Options (always 8 buttons) ────────────────────────────────────────────────
function makeOptions(correct: IvDef, level: 1 | 2 | 3): IvDef[] {
  const pool = poolForLevel(level);
  const distractors = shuffle(pool.filter(x => x.name !== correct.name)).slice(0, 7);
  return shuffle([correct, ...distractors]);
}

// ── Styles ────────────────────────────────────────────────────────────────────
const PURPLE = "#5C3D6E";
const GREEN  = "#16a34a";
const RED    = "#dc2626";
const BG     = "#faf8fc";

function btnStyle(bg: string, color: string, small = false): React.CSSProperties {
  return {
    padding: small ? "0.4rem 0.9rem" : "0.65rem 1.8rem",
    borderRadius: 24, border: "none",
    background: bg, color,
    fontWeight: 700,
    fontSize: small ? "0.82rem" : "0.95rem",
    cursor: "pointer",
  };
}

// ── Composant ─────────────────────────────────────────────────────────────────
export default function DicteeIntervalles() {
  const [level,     setLevel]     = useState<1 | 2 | 3>(1);
  const [phase,     setPhase]     = useState<Phase>("idle");
  const [questions, setQuestions] = useState<IvQuestion[]>([]);
  const [qIdx,      setQIdx]      = useState(0);
  const [options,   setOptions]   = useState<IvDef[][]>([]);
  const [answers,   setAnswers]   = useState<Ans[]>([]);
  const [feedback,  setFeedback]  = useState<{ chosen: string; ok: boolean } | null>(null);
  const [showViz,   setShowViz]   = useState(false);

  const piano  = useRef<PianoPlayerRef>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const busy   = useRef(false);

  const clearAll = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  useEffect(() => () => clearAll(), [clearAll]);

  // ── Playback ──────────────────────────────────────────────────────────────
  const playMelodic = useCallback((q: IvQuestion) => {
    clearAll();
    piano.current?.playNote(q.note1.fr, q.note1.oct, { duration: 1.2 });
    const t = setTimeout(() => {
      piano.current?.playNote(q.note2.fr, q.note2.oct, { duration: 1.2 });
    }, 600);
    timers.current.push(t);
  }, [clearAll]);

  const playHarmonic = useCallback((q: IvQuestion) => {
    clearAll();
    piano.current?.playNote(q.note1.fr, q.note1.oct, { duration: 1.6 });
    piano.current?.playNote(q.note2.fr, q.note2.oct, { duration: 1.6 });
  }, [clearAll]);

  // ── Game ──────────────────────────────────────────────────────────────────
  const startNew = useCallback(() => {
    clearAll();
    busy.current = false;
    setAnswers([]);
    setFeedback(null);
    setShowViz(false);
    setQIdx(0);

    const pool = shuffle(ALL_PAIRS.filter(p => p.level === level)).slice(0, 10);
    setQuestions(pool);
    setOptions(pool.map(q => makeOptions(q.interval, level)));
    setPhase("question");

    const t = setTimeout(() => {
      if (pool[0]) playMelodic(pool[0]);
    }, 300);
    timers.current.push(t);
  }, [level, clearAll, playMelodic]);

  const handleAnswer = useCallback((chosen: IvDef) => {
    if (phase !== "question" || busy.current || !questions[qIdx]) return;
    busy.current = true;

    const expected = questions[qIdx].interval;
    const ok = chosen.name === expected.name;

    setFeedback({ chosen: chosen.name, ok });
    setAnswers(prev => [...prev, { correct: ok, chosen: chosen.name, expected: expected.name }]);

    piano.current?.playNote(questions[qIdx].note1.fr, questions[qIdx].note1.oct, { duration: 1.0 });
    const t1 = setTimeout(() => {
      piano.current?.playNote(questions[qIdx].note2.fr, questions[qIdx].note2.oct, { duration: 1.0 });
    }, ok ? 500 : 700);
    timers.current.push(t1);

    const t2 = setTimeout(() => setShowViz(true), 600);
    timers.current.push(t2);
  }, [phase, questions, qIdx]);

  const handleNext = useCallback(() => {
    setShowViz(false);
    setFeedback(null);
    busy.current = false;
    const next = qIdx + 1;
    if (next >= questions.length) {
      setPhase("complete");
    } else {
      setQIdx(next);
      const t = setTimeout(() => {
        if (questions[next]) playMelodic(questions[next]);
      }, 200);
      timers.current.push(t);
    }
  }, [qIdx, questions, playMelodic]);

  // ── Render ────────────────────────────────────────────────────────────────
  const levelColors: Record<number, string> = { 1: "#16a34a", 2: "#2563eb", 3: "#7c3aed" };
  const levelNames = ["8 intervalles", "12 intervalles", "14 intervalles"];
  const score = answers.filter(a => a.correct).length;
  const currentQ = questions[qIdx];
  const currentOpts = options[qIdx] ?? [];

  return (
    <div style={{
      minHeight: "100vh", background: BG,
      display: "flex", flexDirection: "column",
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
          🎼 Dictée d&apos;intervalles
        </h1>
        <p style={{ margin: "0.4rem 0 0", color: "#666", fontSize: "0.95rem" }}>
          Écoute les deux notes et identifie l&apos;intervalle
        </p>
      </div>

      {/* Level selector */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem" }}>
        {([1, 2, 3] as const).map(l => (
          <button key={l}
            onClick={() => {
              setLevel(l);
              setPhase("idle");
              clearAll();
              setAnswers([]);
              setFeedback(null);
              setShowViz(false);
            }}
            style={{
              padding: "0.45rem 1.1rem", borderRadius: 24,
              border: `2px solid ${level === l ? levelColors[l] : "#ddd"}`,
              background: level === l ? levelColors[l] : "#fff",
              color: level === l ? "#fff" : "#555",
              fontWeight: 700, fontSize: "0.85rem", cursor: "pointer",
            }}
          >
            Niv.{l} — {levelNames[l - 1]}
          </button>
        ))}
      </div>

      {/* Main card */}
      <div style={{
        width: "100%", maxWidth: 640,
        background: "#fff", borderRadius: 18,
        boxShadow: "0 4px 32px rgba(92,61,110,0.10)",
        minHeight: 320,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: "1.5rem",
        overflow: "hidden",
      }}>

        {/* ── IDLE ── */}
        {phase === "idle" && (
          <div style={{ textAlign: "center", padding: "2rem" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎼</div>
            <p style={{ color: "#444", marginBottom: "1.5rem", fontSize: "0.95rem", lineHeight: 1.6 }}>
              10 intervalles à identifier.<br />
              Écoute les deux notes et choisis parmi{" "}
              {poolForLevel(level).length} propositions.
            </p>
            <button onClick={startNew} style={btnStyle(PURPLE, "#fff")}>
              Commencer
            </button>
          </div>
        )}

        {/* ── QUESTION ── */}
        {phase === "question" && currentQ && (
          <div style={{ width: "100%", padding: "1.5rem 1.5rem 0" }}>
            {/* Progress dots */}
            <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: "1rem" }}>
              {questions.map((_, i) => {
                const done = i < answers.length;
                const cur  = i === qIdx;
                return (
                  <div key={i} style={{
                    width: 10, height: 10, borderRadius: "50%",
                    background: done
                      ? (answers[i]?.correct ? GREEN : RED)
                      : cur ? PURPLE : "#e0d8ea",
                  }} />
                );
              })}
            </div>

            <p style={{ textAlign: "center", color: "#888", fontSize: "0.85rem", marginBottom: "0.25rem" }}>
              Question <strong style={{ color: PURPLE }}>{qIdx + 1}</strong> / {questions.length}
            </p>
            <p style={{ textAlign: "center", fontWeight: 700, color: PURPLE, fontSize: "1.05rem", marginBottom: "1rem" }}>
              Quel est cet intervalle ?
            </p>

            {/* Playback buttons */}
            <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", marginBottom: "1.2rem" }}>
              <button onClick={() => playMelodic(currentQ)} style={btnStyle("#f0ebfa", PURPLE, true)}>
                ▶ Mélodie
              </button>
              <button onClick={() => playHarmonic(currentQ)} style={btnStyle("#f0ebfa", PURPLE, true)}>
                ▶ Harmonie
              </button>
            </div>

            {/* Option grid */}
            <div key={qIdx} style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "0.5rem",
              marginBottom: showViz ? 0 : "1.5rem",
            }}>
              {currentOpts.map(opt => {
                const isChosen   = feedback?.chosen === opt.name;
                const isExpected = feedback !== null && !feedback.ok && currentQ.interval.name === opt.name;
                let bg = "#f5f0fb", color = PURPLE, border = "2px solid #e0d8ea";
                if (isChosen && feedback?.ok)  { bg = GREEN;     color = "#fff"; border = `2px solid ${GREEN}`; }
                if (isChosen && !feedback?.ok) { bg = RED;       color = "#fff"; border = `2px solid ${RED}`; }
                if (isExpected)                { bg = "#dcfce7"; color = GREEN;  border = `2px solid ${GREEN}`; }
                return (
                  <button key={opt.name}
                    onClick={() => handleAnswer(opt)}
                    disabled={!!feedback}
                    style={{
                      padding: "0.65rem 0.5rem", borderRadius: 10,
                      border, background: bg, color,
                      fontWeight: 600, fontSize: "0.82rem",
                      cursor: feedback ? "default" : "pointer",
                      opacity: feedback && !isChosen && !isExpected ? 0.5 : 1,
                      textAlign: "center",
                    }}
                  >
                    {opt.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ── COMPLETE ── */}
        {phase === "complete" && (
          <div style={{ width: "100%", textAlign: "center", padding: "2rem" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
              {score === 10 ? "🎉" : score >= 7 ? "👍" : "💪"}
            </div>
            <p style={{ fontSize: "1.4rem", fontWeight: 800, color: PURPLE, margin: "0 0 0.3rem" }}>
              {score} / {answers.length}
            </p>
            <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "1.4rem" }}>
              {score === 10
                ? "Excellent ! Oreille absolue !"
                : score >= 7 ? "Très bien ! Continue comme ça."
                : score >= 5 ? "Pas mal ! Rejoue pour progresser."
                : "Continue à t'entraîner !"}
            </p>

            <div style={{ textAlign: "left", marginBottom: "1.5rem" }}>
              {answers.map((a, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: "0.5rem",
                  padding: "0.4rem 0.7rem", borderRadius: 8,
                  background: a.correct ? "#f0fdf4" : "#fef2f2",
                  marginBottom: "0.35rem", fontSize: "0.85rem",
                }}>
                  <span style={{ color: a.correct ? GREEN : RED, fontWeight: 700, minWidth: 18 }}>
                    {a.correct ? "✓" : "✗"}
                  </span>
                  <span style={{ color: "#555", flex: 1 }}>{a.expected}</span>
                  {!a.correct && (
                    <span style={{ color: "#aaa", fontSize: "0.78rem" }}>
                      (tu as dit : {a.chosen})
                    </span>
                  )}
                </div>
              ))}
            </div>
            <button onClick={startNew} style={btnStyle(PURPLE, "#fff")}>
              Nouvelle dictée
            </button>
          </div>
        )}

        {/* ── VISUALISATION ── */}
        {phase === "question" && showViz && currentQ && (
          <VisualisationNote
            notes={[currentQ.note1, currentQ.note2]}
            label={`${currentQ.interval.name} — ${currentQ.interval.semitones} demi-ton${currentQ.interval.semitones > 1 ? "s" : ""}`}
            onNext={handleNext}
            onReplay={() => playMelodic(currentQ)}
          />
        )}
      </div>
    </div>
  );
}

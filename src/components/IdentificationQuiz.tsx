"use client";

/**
 * IdentificationQuiz.tsx
 * Harmonia — Composant quiz d'identification et de construction
 *
 * Utilisé pour :
 * - Cours 1 : identifier intervalles, degrés, gammes
 * - Cours 2 : identifier accords, renversements, tétrades
 * - Cours 6 : identifier notes étrangères
 */

import React, { useState, useCallback } from "react";
import type { IdentifyExercise, BuildExercise } from "@/types/exercise";

type QuizExercise = IdentifyExercise | BuildExercise;

interface IdentificationQuizProps {
  exercises: QuizExercise[];
  /** Nombre de questions par session */
  count?: number;
  onComplete?: (score: number, total: number) => void;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Composant question "identify" ────────────────────────────────────────────

function IdentifyQuestion({
  exercise,
  onAnswer,
}: {
  exercise: IdentifyExercise;
  onAnswer: (correct: boolean) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);

  const answer = (id: string) => {
    if (answered) return;
    const opt = exercise.options.find(o => o.id === id);
    setSelected(id);
    setAnswered(true);
    onAnswer(opt?.isCorrect ?? false);
  };

  return (
    <div>
      {/* Contexte visuel (ex: notation d'accord, intervalle) */}
      {exercise.context && (
        <div style={{
          background: "#f4f1ec",
          border: "0.5px solid #e0dbd3",
          borderRadius: 10,
          padding: "14px 18px",
          marginBottom: 16,
          fontFamily: "Georgia, serif",
          fontSize: 18,
          color: "#1a1a1a",
          textAlign: "center" as const,
          letterSpacing: "0.05em",
        }}>
          {exercise.context}
        </div>
      )}

      {/* Question */}
      <div style={{
        fontSize: 15,
        fontWeight: 500,
        color: "#1a1a1a",
        lineHeight: 1.6,
        marginBottom: 16,
      }}>
        {exercise.question}
      </div>

      {/* Options */}
      <div style={{ display: "flex", flexDirection: "column" as const, gap: 8 }}>
        {exercise.options.map(opt => {
          let bg = "#fff", border = "#e0dbd3", color = "#333";
          if (answered) {
            if (opt.isCorrect)        { bg = "#E1F5EE"; border = "#0F6E56"; color = "#085041"; }
            else if (selected === opt.id) { bg = "#FFF5F5"; border = "#FC8181"; color = "#C53030"; }
          } else if (selected === opt.id) {
            bg = "#E6F1FB"; border = "#185FA5"; color = "#185FA5";
          }
          return (
            <button key={opt.id} onClick={() => answer(opt.id)} disabled={answered}
              style={{
                padding: "11px 16px",
                border: `1px solid ${border}`,
                borderRadius: 10,
                background: bg,
                color,
                fontSize: 13,
                fontWeight: answered && opt.isCorrect ? 600 : 400,
                cursor: answered ? "default" : "pointer",
                textAlign: "left" as const,
                transition: "all .12s",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}>
              <span style={{
                width: 22, height: 22, borderRadius: "50%",
                border: `1px solid ${border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 11, fontWeight: 600, flexShrink: 0,
                background: answered && opt.isCorrect ? "#0F6E56" : "transparent",
                color: answered && opt.isCorrect ? "#fff" : color,
              }}>
                {answered && opt.isCorrect ? "✓" : answered && selected === opt.id ? "✗" : ""}
              </span>
              {opt.label}
            </button>
          );
        })}
      </div>

      {/* Explication */}
      {answered && (
        <div style={{
          marginTop: 14,
          padding: "12px 16px",
          borderRadius: 10,
          background: exercise.options.find(o => o.id === selected)?.isCorrect ? "#E1F5EE" : "#FFF5F5",
          border: `0.5px solid ${exercise.options.find(o => o.id === selected)?.isCorrect ? "#9AE6B4" : "#FC8181"}`,
          fontSize: 13,
          color: exercise.options.find(o => o.id === selected)?.isCorrect ? "#085041" : "#C53030",
          lineHeight: 1.65,
        }}>
          {exercise.explanation}
        </div>
      )}

      {/* Indice */}
      {!answered && exercise.hint && (
        <div style={{
          marginTop: 10, fontSize: 12, color: "#aaa",
          fontStyle: "italic",
        }}>
          💡 {exercise.hint}
        </div>
      )}
    </div>
  );
}

// ─── Composant question "build" ───────────────────────────────────────────────

function BuildQuestion({
  exercise,
  onAnswer,
}: {
  exercise: BuildExercise;
  onAnswer: (correct: boolean) => void;
}) {
  const [selected, setSelected] = useState<string[]>([]);
  const [answered, setAnswered] = useState(false);

  // Toutes les notes possibles (chromatique)
  const ALL_NOTES = ["C","D","E","F","G","A","B","C#","D#","F#","G#","A#","Db","Eb","Gb","Ab","Bb"];
  const relevantNotes = shuffle(ALL_NOTES).slice(0, 8);
  // Assure que les bonnes notes sont incluses
  const pool = shuffle([...new Set([...relevantNotes, ...exercise.correctNotes])]);

  const toggle = (note: string) => {
    if (answered) return;
    setSelected(prev =>
      prev.includes(note) ? prev.filter(n => n !== note) : [...prev, note]
    );
  };

  const check = () => {
    const correct = exercise.correctNotes.every(n => selected.includes(n))
      && selected.length === exercise.correctNotes.length;
    setAnswered(true);
    onAnswer(correct);
  };

  const isCorrect = answered && exercise.correctNotes.every(n => selected.includes(n))
    && selected.length === exercise.correctNotes.length;

  return (
    <div>
      <div style={{ fontSize: 15, fontWeight: 500, color: "#1a1a1a", lineHeight: 1.6, marginBottom: 16 }}>
        {exercise.question}
      </div>

      {exercise.hint && !answered && (
        <div style={{ fontSize: 12, color: "#aaa", fontStyle: "italic", marginBottom: 12 }}>
          💡 {exercise.hint}
        </div>
      )}

      {/* Sélection des notes */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const, marginBottom: 14 }}>
        {pool.map(note => {
          const isSelected = selected.includes(note);
          const isInAnswer = exercise.correctNotes.includes(note);
          let bg = isSelected ? "#185FA5" : "#fff";
          let color = isSelected ? "#fff" : "#333";
          let border = isSelected ? "#185FA5" : "#e0dbd3";
          if (answered) {
            if (isInAnswer && isSelected)  { bg = "#E1F5EE"; border = "#0F6E56"; color = "#085041"; }
            if (isInAnswer && !isSelected) { bg = "#FFF5F5"; border = "#FC8181"; color = "#C53030"; }
            if (!isInAnswer && isSelected) { bg = "#FFF5F5"; border = "#FC8181"; color = "#C53030"; }
          }
          return (
            <button key={note} onClick={() => toggle(note)} disabled={answered}
              style={{
                padding: "8px 14px",
                border: `1.5px solid ${border}`,
                borderRadius: 8,
                background: bg,
                color,
                fontSize: 13,
                fontWeight: 600,
                cursor: answered ? "default" : "pointer",
                fontFamily: "monospace",
                transition: "all .12s",
              }}>
              {note}
            </button>
          );
        })}
      </div>

      {/* Notes sélectionnées */}
      <div style={{ fontSize: 12, color: "#888", marginBottom: 12 }}>
        Sélection : {selected.length > 0 ? selected.join(" – ") : "—"}
      </div>

      {/* Bouton vérifier */}
      {!answered && (
        <button onClick={check} disabled={selected.length === 0}
          style={{
            padding: "9px 22px",
            borderRadius: 10,
            border: "none",
            background: selected.length > 0 ? "#185FA5" : "#e0dbd3",
            color: selected.length > 0 ? "#fff" : "#aaa",
            fontSize: 13, fontWeight: 600,
            cursor: selected.length > 0 ? "pointer" : "default",
          }}>
          Vérifier
        </button>
      )}

      {/* Résultat */}
      {answered && (
        <div style={{
          marginTop: 12,
          padding: "12px 16px",
          borderRadius: 10,
          background: isCorrect ? "#E1F5EE" : "#FFF5F5",
          border: `0.5px solid ${isCorrect ? "#9AE6B4" : "#FC8181"}`,
          fontSize: 13,
          color: isCorrect ? "#085041" : "#C53030",
          lineHeight: 1.65,
        }}>
          {isCorrect ? "✓ " : "✗ Réponse correcte : "}
          {!isCorrect && <strong>{exercise.correctNotes.join(" – ")}</strong>}
          <div style={{ marginTop: 6, color: "#555" }}>{exercise.explanation}</div>
        </div>
      )}
    </div>
  );
}

// ─── Composant principal ──────────────────────────────────────────────────────

export default function IdentificationQuiz({
  exercises,
  count = 10,
  onComplete,
}: IdentificationQuizProps) {
  const [session,  setSession]  = useState(() => shuffle(exercises).slice(0, count));
  const [current,  setCurrent]  = useState(0);
  const [score,    setScore]    = useState(0);
  const [answered, setAnswered] = useState(false);
  const [done,     setDone]     = useState(false);

  const handleAnswer = useCallback((correct: boolean) => {
    if (correct) setScore(s => s + 1);
    setAnswered(true);
  }, []);

  const next = () => {
    if (current + 1 >= session.length) {
      setDone(true);
      onComplete?.(score + (answered ? 1 : 0), session.length);
    } else {
      setCurrent(i => i + 1);
      setAnswered(false);
    }
  };

  const reset = () => {
    setSession(shuffle(exercises).slice(0, count));
    setCurrent(0);
    setScore(0);
    setAnswered(false);
    setDone(false);
  };

  const ex = session[current];
  const progress = Math.round((current / session.length) * 100);

  if (done) {
    const finalScore = score;
    const pct = Math.round((finalScore / session.length) * 100);
    return (
      <div style={{
        background: "#fff",
        border: "0.5px solid #e8e3db",
        borderRadius: 16,
        padding: "2.5rem",
        textAlign: "center" as const,
        maxWidth: 560,
        margin: "0 auto",
      }}>
        <div style={{ fontSize: 40, marginBottom: 12 }}>
          {pct >= 90 ? "🎹" : pct >= 70 ? "👍" : "💪"}
        </div>
        <div style={{ fontSize: 22, fontWeight: 500, color: "#1a1a1a", marginBottom: 6 }}>
          {finalScore} / {session.length}
        </div>
        <div style={{ fontSize: 14, color: "#888", marginBottom: 24 }}>
          {pct >= 90 ? "Parfait — tu maîtrises ce contenu." :
           pct >= 70 ? "Très bien ! Quelques points à revoir." :
           "Continue à explorer — recommence quand tu es prêt."}
        </div>
        <button onClick={reset} style={{
          padding: "9px 24px",
          borderRadius: 10,
          border: "none",
          background: "#185FA5",
          color: "#fff",
          fontSize: 13, fontWeight: 500,
          cursor: "pointer",
        }}>
          Nouvelles questions →
        </button>
      </div>
    );
  }

  return (
    <div style={{
      background: "#fff",
      border: "0.5px solid #e8e3db",
      borderRadius: 16,
      overflow: "hidden",
      maxWidth: 620,
      margin: "0 auto",
    }}>
      {/* Header */}
      <div style={{
        padding: "14px 20px",
        borderBottom: "0.5px solid #e8e3db",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
      }}>
        <div style={{ fontSize: 12, color: "#888" }}>
          Question {current + 1} / {session.length}
          <span style={{ marginLeft: 12, fontSize: 11, color: "#bbb" }}>
            {exercises.length} dans le pool
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ fontSize: 12, color: "#185FA5", fontWeight: 500 }}>
            Score : {score}
          </div>
          <div style={{ width: 80, height: 4, background: "#f0ece6", borderRadius: 4, overflow: "hidden" }}>
            <div style={{
              height: "100%",
              width: `${progress}%`,
              background: "#185FA5",
              borderRadius: 4,
              transition: "width .3s",
            }} />
          </div>
        </div>
      </div>

      {/* Question */}
      <div style={{ padding: "20px" }}>
        {/* Badge type */}
        <div style={{
          fontSize: 10, fontWeight: 600,
          letterSpacing: "0.08em",
          color: ex.type === "identify" ? "#185FA5" : "#0F6E56",
          background: ex.type === "identify" ? "#E6F1FB" : "#E1F5EE",
          padding: "2px 8px",
          borderRadius: 6,
          display: "inline-block",
          marginBottom: 14,
        }}>
          {ex.type === "identify" ? "IDENTIFICATION" : "CONSTRUCTION"}
        </div>

        {ex.type === "identify" ? (
          <IdentifyQuestion
            exercise={ex as IdentifyExercise}
            onAnswer={handleAnswer}
          />
        ) : (
          <BuildQuestion
            exercise={ex as BuildExercise}
            onAnswer={handleAnswer}
          />
        )}

        {/* Bouton suivant */}
        {answered && (
          <button onClick={next} style={{
            marginTop: 16,
            padding: "9px 22px",
            borderRadius: 10,
            border: "0.5px solid #333",
            background: "transparent",
            color: "#333",
            fontSize: 13,
            cursor: "pointer",
          }}>
            {current + 1 < session.length ? "Question suivante →" : "Voir le score →"}
          </button>
        )}
      </div>
    </div>
  );
}

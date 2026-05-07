"use client";

/**
 * src/components/InversionQuiz.tsx
 * Harmonia — Exercice de choix de renversement
 *
 * L'élève voit une progression et choisit le meilleur renversement
 * pour assurer une bonne conduite de voix.
 */

import React, { useState, useRef, useCallback } from "react";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import { SATB } from "@/lib/satb-voicings";
import type { InversionExercise } from "@/exercises/cours-inversion-exercises";

interface Props {
  exercise: InversionExercise;
  onComplete?: (correct: boolean) => void;
}

function playChord(ref: React.RefObject<PianoPlayerRef>, chordName: string, duration = 1.8) {
  const keys = SATB[chordName] ?? [];
  keys.forEach((key) => {
    const [note, octStr] = key.split(":");
    ref.current?.playNote(note, parseInt(octStr), { duration });
  });
}

export default function InversionQuiz({ exercise, onComplete }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const pianoRef = useRef<PianoPlayerRef>(null);

  const handleSelect = useCallback((label: string) => {
    if (answered) return;
    setSelected(label);
    setAnswered(true);
    const choice = exercise.choices.find(c => c.label === label);
    onComplete?.(choice?.isCorrect ?? false);
  }, [answered, exercise.choices, onComplete]);

  const handlePlay = useCallback((chordLabel: string, e: React.MouseEvent) => {
    e.stopPropagation();
    playChord(pianoRef as React.RefObject<PianoPlayerRef>, chordLabel);
  }, []);

  const correctChoice = exercise.choices.find(c => c.isCorrect);
  const selectedChoice = exercise.choices.find(c => c.label === selected);
  const isCorrect = selectedChoice?.isCorrect ?? false;

  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      {/* Piano caché */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={3} startOctave={2} showLabels={false} />
      </div>

      {/* En-tête */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const, marginBottom: 10 }}>
          <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 10, background: "#E6F1FB", color: "#185FA5" }}>
            Renversements
          </span>
          {exercise.concepts.slice(0, 2).map(c => (
            <span key={c} style={{ fontSize: 10, fontWeight: 500, padding: "2px 8px", borderRadius: 10, background: "#F0EAE0", color: "#6B5E4E" }}>
              {c}
            </span>
          ))}
        </div>

        <p style={{ fontSize: 15, fontWeight: 500, color: "#1a1a1a", lineHeight: 1.6, margin: "0 0 12px" }}>
          {exercise.question}
        </p>

        {/* Progression visuelle */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", background: "#F4F1EC", borderRadius: 8, marginBottom: 12, flexWrap: "wrap" as const }}>
          {exercise.progressionBefore && (
            <span style={{ fontSize: 14, fontFamily: "Georgia, serif", color: "#6B5E4E" }}>
              {exercise.progressionBefore}
            </span>
          )}
          <span style={{ fontSize: 16, fontFamily: "Georgia, serif", fontWeight: 500, color: "#BA7517", background: "#FAEEDA", padding: "3px 10px", borderRadius: 6 }}>
            {exercise.targetChord} ?
          </span>
          {exercise.progressionAfter && (
            <span style={{ fontSize: 14, fontFamily: "Georgia, serif", color: "#6B5E4E" }}>
              {exercise.progressionAfter}
            </span>
          )}
        </div>

        {/* Indice */}
        {exercise.hint && !answered && (
          <div>
            {!showHint ? (
              <button
                onClick={() => setShowHint(true)}
                style={{ fontSize: 12, color: "#BA7517", background: "none", border: "none", cursor: "pointer", padding: 0, textDecoration: "underline" }}
              >
                💡 Voir l'indice
              </button>
            ) : (
              <div style={{ fontSize: 13, color: "#633806", background: "#FAEEDA", borderLeft: "2px solid #BA7517", padding: "8px 12px", borderRadius: "0 6px 6px 0", lineHeight: 1.6 }}>
                {exercise.hint}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Choix */}
      <div style={{ display: "flex", flexDirection: "column" as const, gap: 8, marginBottom: 16 }}>
        {exercise.choices.map(choice => {
          const isSelected = selected === choice.label;
          let bg = "#fff";
          let border = "#e5e5e5";
          let color = "#1a1a1a";

          if (answered) {
            if (choice.isCorrect) {
              bg = "#E1F5EE"; border = "#0F6E56"; color = "#085041";
            } else if (isSelected && !choice.isCorrect) {
              bg = "#FCEBEB"; border = "#A32D2D"; color = "#501313";
            }
          } else if (isSelected) {
            bg = "#E6F1FB"; border = "#185FA5";
          }

          return (
            <div
              key={choice.label}
              onClick={() => handleSelect(choice.label)}
              style={{
                border: `0.5px solid ${border}`,
                borderRadius: 10,
                background: bg,
                padding: "12px 16px",
                cursor: answered ? "default" : "pointer",
                transition: "all .12s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                    {answered && choice.isCorrect && <span style={{ color: "#0F6E56", fontSize: 14 }}>✓</span>}
                    {answered && isSelected && !choice.isCorrect && <span style={{ color: "#A32D2D", fontSize: 14 }}>✗</span>}
                    <span style={{ fontSize: 15, fontFamily: "Georgia, serif", fontWeight: 500, color }}>
                      {choice.label}
                    </span>
                  </div>
                  <div style={{ fontSize: 12, color: answered ? color : "#888", opacity: answered ? 1 : 0.8 }}>
                    {choice.description}
                  </div>
                </div>

                {/* Bouton écouter */}
                <button
                  onClick={(e) => handlePlay(choice.label, e)}
                  style={{
                    fontSize: 11,
                    padding: "4px 12px",
                    border: `0.5px solid ${border}`,
                    borderRadius: 20,
                    background: "transparent",
                    color: answered ? color : "#666",
                    cursor: "pointer",
                    flexShrink: 0,
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  ▶ Écouter
                </button>
              </div>

              {/* Feedback spécifique */}
              {answered && isSelected && (
                <div style={{ marginTop: 10, padding: "8px 12px", borderRadius: 6, background: choice.isCorrect ? "rgba(15,110,86,0.08)" : "rgba(163,45,45,0.08)", fontSize: 13, color, lineHeight: 1.6 }}>
                  {choice.feedback}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Explication générale */}
      {answered && (
        <div style={{ padding: "14px 16px", borderRadius: 8, background: isCorrect ? "#E1F5EE" : "#F0EAE0", borderLeft: `3px solid ${isCorrect ? "#0F6E56" : "#BA7517"}`, fontSize: 13, color: isCorrect ? "#085041" : "#3A2A0A", lineHeight: 1.7 }}>
          <div style={{ fontWeight: 600, marginBottom: 4 }}>
            {isCorrect ? "✓ Bonne réponse !" : `✗ La bonne réponse était : ${correctChoice?.label}`}
          </div>
          {exercise.explanation}
        </div>
      )}
    </div>
  );
}

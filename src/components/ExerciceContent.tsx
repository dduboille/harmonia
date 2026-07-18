"use client";

import React, { useState } from "react";
import HarmoniaEditor from "@/components/HarmoniaEditor";
import { getKeyAccidentalHint } from "@/lib/key-accidentals";
import IdentificationQuiz from "@/components/IdentificationQuiz";
import { useProgress } from "@/hooks/useProgress";
import type { IdentifyExercise, BuildExercise } from "@/types/exercise";
import { validateSATB, noteExercice, type Measure, type NoteEntry, type Voice } from "@/lib/satb-rules";

interface SATBData {
  type: "satb";
  exerciseId: string;
  coursId: number;
  title: string;
  subtitle?: string;
  measures: string[];
  keySignature: string;
  solution: Measure[];
  /** Notes pré-remplies (basse donnée / voix internes), indexées par mesure. */
  initialNotes?: Partial<Record<Voice, (NoteEntry | null)[]>>;
  hint?: string;
  devoirId?: string;
  plan?: string;
  /** école = règles d'écriture complètes ; libre = conformité + tessitures, pour les exercices non tonals. */
  regles?: "ecole" | "libre";
}

interface QuizData {
  type: "identify" | "build";
  exerciseId: string;
  coursId: number;
  exercises: (IdentifyExercise | BuildExercise)[];
  devoirId?: string;
}

type ExerciceContentProps = SATBData | QuizData;

export default function ExerciceContent(props: ExerciceContentProps) {
  const { saveProgress } = useProgress();
  const [showKS, setShowKS] = useState(true);

  const handleComplete = async (score: number) => {
    saveProgress({
      exerciseId: props.exerciseId,
      coursId: props.coursId,
      exerciseType: props.type,
      score,
      completed: score >= 60,
    });

    if (props.devoirId) {
      try {
        await fetch("/api/conservatoire/soumissions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ devoirId: props.devoirId, note: score }),
        });
      } catch (err) {
        console.error("Devoir submission failed:", err);
      }
    }
  };

  if (props.type === "satb") {
    const canToggle = props.plan && props.plan !== "free";
    const hint = getKeyAccidentalHint(props.keySignature);
    return (
      <div>
        {canToggle && (
          <div style={{ display:"flex", justifyContent:"flex-end", gap:4, marginBottom:8, fontFamily:"system-ui, sans-serif" }}>
            {([true, false] as const).map(val => (
              <button key={String(val)} onClick={() => setShowKS(val)}
                style={{
                  padding:"5px 12px", borderRadius:20, fontSize:11, fontWeight:600, cursor:"pointer",
                  border:`1.5px solid ${showKS === val ? "#5C3D6E" : "#e0dbd3"}`,
                  background: showKS === val ? "#5C3D6E" : "#fff",
                  color: showKS === val ? "#fff" : "#666",
                }}>
                {val ? "🎼 Avec armure" : "✏️ Sans armure"}
              </button>
            ))}
          </div>
        )}
        {!showKS && hint && (
          <div style={{
            marginBottom:12, padding:"10px 14px", borderRadius:10,
            background:"#FEF0D9", border:"0.5px solid #F5C77E",
            fontSize:12, color:"#744210", lineHeight:1.65,
            fontFamily:"system-ui, sans-serif",
          }}>
            <strong>Mode avancé — sans armure.</strong>{" "}
            Placez vous-même les altérations sur chaque note.{" "}
            Notes altérées : <strong>{hint}</strong>
          </div>
        )}
        <HarmoniaEditor
          title={props.title}
          subtitle={props.subtitle}
          measures={props.measures}
          keySignature={props.keySignature}
          showKeySignature={showKS}
          initialNotes={props.initialNotes}
          solution={props.solution}
          regles={props.regles}
          onComplete={(measures) => {
            // La note reflète la propreté de la copie : les FAUTES sont déjà
            // impossibles (Terminer bloqué) ; chaque avertissement restant coûte 10.
            const restants = validateSATB(measures, props.keySignature, !showKS, props.solution, props.regles);
            // cross_relation reste affichée mais ne coûte rien — faux positifs
            // enharmoniques, analyse fine de la règle en suivi (R5).
            const avertissements = restants.filter(e => e.severity === "warning" && e.type !== "cross_relation").length;
            handleComplete(noteExercice(avertissements));
          }}
        />
      </div>
    );
  }

  return (
    <IdentificationQuiz
      exercises={props.exercises}
      count={10}
      onComplete={(score, total) => handleComplete(Math.round((score / total) * 100))}
    />
  );
}

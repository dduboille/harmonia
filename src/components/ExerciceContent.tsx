"use client";

import React from "react";
import HarmoniaEditor from "@/components/HarmoniaEditor";
import IdentificationQuiz from "@/components/IdentificationQuiz";
import { useProgress } from "@/hooks/useProgress";
import type { IdentifyExercise, BuildExercise } from "@/types/exercise";

interface SATBData {
  type: "satb";
  exerciseId: string;
  coursId: number;
  title: string;
  subtitle?: string;
  measures: string[];
  keySignature: string;
  solution: any[];
  hint?: string;
  devoirId?: string;
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
    return (
      <HarmoniaEditor
        title={props.title}
        subtitle={props.subtitle}
        measures={props.measures}
        keySignature={props.keySignature}
        solution={props.solution}
        onComplete={() => handleComplete(100)}
      />
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

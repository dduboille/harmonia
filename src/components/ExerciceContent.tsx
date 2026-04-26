"use client";

/**
 * ExerciceContent.tsx
 * Wrapper client pour le contenu interactif d'un exercice.
 * Gère la sauvegarde automatique de la progression.
 */

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
}

interface QuizData {
  type: "identify" | "build";
  exerciseId: string;
  coursId: number;
  exercises: (IdentifyExercise | BuildExercise)[];
}

type ExerciceContentProps = SATBData | QuizData;

export default function ExerciceContent(props: ExerciceContentProps) {
  const { saveProgress } = useProgress();

  const handleComplete = (score: number) => {
    saveProgress({
      exerciseId: props.exerciseId,
      coursId: props.coursId,
      exerciseType: props.type,
      score,
      completed: score >= 60,
    });
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

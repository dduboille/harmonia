"use client";

/**
 * ExerciceContent.tsx
 * Wrapper client pour le contenu interactif d'un exercice.
 * Reçoit les données sérialisables depuis la Server Component parente.
 */

import React from "react";
import HarmoniaEditor from "@/components/HarmoniaEditor";
import IdentificationQuiz from "@/components/IdentificationQuiz";
import type { IdentifyExercise, BuildExercise } from "@/types/exercise";

interface SATBData {
  type: "satb";
  title: string;
  subtitle?: string;
  measures: string[];
  keySignature: string;
  solution: any[];
  hint?: string;
}

interface QuizData {
  type: "identify" | "build";
  exercises: (IdentifyExercise | BuildExercise)[];
}

type ExerciceContentProps = SATBData | QuizData;

export default function ExerciceContent(props: ExerciceContentProps) {
  if (props.type === "satb") {
    return (
      <HarmoniaEditor
        title={props.title}
        subtitle={props.subtitle}
        measures={props.measures}
        keySignature={props.keySignature}
        solution={props.solution}
      />
    );
  }

  return (
    <IdentificationQuiz
      exercises={props.exercises}
      count={10}
    />
  );
}

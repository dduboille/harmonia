"use client";

/**
 * hooks/useProgress.ts
 * Harmonia — Hook client pour sauvegarder la progression
 * Appelle /api/progress depuis les composants client (ExerciceContent)
 */

import { useCallback } from "react";

interface SaveProgressOptions {
  exerciseId: string;
  coursId: number;
  exerciseType: string;
  score: number;
  completed: boolean;
}

export function useProgress() {
  const saveProgress = useCallback(async (opts: SaveProgressOptions) => {
    try {
      await fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(opts),
      });
    } catch (err) {
      // Silencieux — la progression n'est pas critique
      console.warn("Impossible de sauvegarder la progression:", err);
    }
  }, []);

  return { saveProgress };
}

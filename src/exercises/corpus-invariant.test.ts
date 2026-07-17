/**
 * Invariant du corpus SATB — LE VERROU (R8 du chantier de remédiation).
 *
 * Voir docs/superpowers/specs/2026-07-16-corpus-satb-remediation-design.md (R8)
 * et le plan associé, Task 6. Toute solution du catalogue est censée être ce
 * qu'un·e élève écrirait en recopiant le modèle à l'identique : le moteur de
 * validation doit donc la laisser Terminer sans faute, et la note associée
 * doit valoir 100 (aucun avertissement compté). Ce test rejoue chaque
 * exercice SATB de `ALL_EXERCISES` contre lui-même et échoue, avec le détail
 * des ids et des types de fautes en cause, si un futur exercice — écrit main
 * ou généré — casse cette garantie. C'est le juge de paix du chantier de
 * remédiation : il verrouille le corpus pour toujours.
 */

import { describe, it, expect } from "vitest";
import { ALL_EXERCISES } from "@/exercises/all-exercises";
import { validateSATB } from "@/lib/satb-rules";
import type { SATBExercise } from "@/types/exercise";

const satbExercises = ALL_EXERCISES.filter((ex): ex is SATBExercise => ex.type === "satb");

describe("invariant du corpus SATB — reproduction du modèle = 100 (R8)", () => {
  it(`ne rapporte AUCUNE erreur bloquante sur la solution d'aucun des ${satbExercises.length} exercices SATB`, () => {
    const offenders = satbExercises
      .map(ex => {
        const errors = validateSATB(ex.solution, ex.keySignature, false, ex.solution, ex.regles ?? "ecole");
        const types = [...new Set(errors.filter(e => e.severity === "error").map(e => e.type))];
        return { id: ex.id, types };
      })
      .filter(o => o.types.length > 0);

    expect(offenders).toEqual([]);
  });

  it(`ne rapporte AUCUN avertissement NOTÉ (hors cross_relation) sur la solution d'aucun des ${satbExercises.length} exercices SATB`, () => {
    const offenders = satbExercises
      .map(ex => {
        const errors = validateSATB(ex.solution, ex.keySignature, false, ex.solution, ex.regles ?? "ecole");
        const types = [
          ...new Set(
            errors
              .filter(e => e.severity === "warning" && e.type !== "cross_relation")
              .map(e => e.type),
          ),
        ];
        return { id: ex.id, types };
      })
      .filter(o => o.types.length > 0);

    expect(offenders).toEqual([]);
  });
});

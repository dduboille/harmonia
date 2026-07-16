/**
 * scripts/audit-corpus-satb.ts
 * Harmonia — Audit du corpus SATB contre ses propres règles.
 *
 * Boucle de retour du chantier de remédiation (voir
 * docs/superpowers/specs/2026-07-16-corpus-satb-remediation-design.md et le
 * plan associé). Pour chaque exercice SATB du catalogue, on fait rejouer sa
 * SOLUTION comme si un·e élève l'avait recopiée à l'identique, et on regarde
 * si le moteur de validation la laisse terminer sans faute avec la note de
 * 100. Script en lecture seule : il ne modifie ni le catalogue ni aucun
 * fichier — seulement un rapport sur stdout.
 *
 * Usage : npx tsx scripts/audit-corpus-satb.ts
 */

import { ALL_EXERCISES } from "../src/exercises/all-exercises";
import { validateSATB, noteExercice, type ValidationError, type ValidationErrorType } from "../src/lib/satb-rules";
import type { SATBExercise } from "../src/types/exercise";

// Types d'erreur introduits par le chantier « conduite de voix / conformité ».
const NEW_TYPES = new Set<ValidationErrorType>([
  "wrong_chord",
  "wrong_bass",
  "leading_tone",
  "doubled_leading_tone",
]);

// Types d'erreur préexistants au chantier.
const PRE_EXISTING_TYPES = new Set<ValidationErrorType>([
  "parallel_fifth",
  "parallel_octave",
  "spacing",
  "range",
  "crossing",
]);

interface ExerciceAudit {
  id: string;
  cours: number;
  errors: ValidationError[];
  warnings: ValidationError[];
}

function dedupTypes(errs: ValidationError[]): ValidationErrorType[] {
  return [...new Set(errs.map(e => e.type))];
}

function countByType(errs: ValidationError[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const e of errs) out[e.type] = (out[e.type] ?? 0) + 1;
  return out;
}

const satbExercises = ALL_EXERCISES.filter((ex): ex is SATBExercise => ex.type === "satb");

const audits: ExerciceAudit[] = satbExercises.map(ex => {
  // Le moteur juge la solution contre elle-même : un élève qui recopierait le
  // modèle à la note près doit pouvoir Terminer sans faute. Les exercices
  // signalés "libre" (modaux/planing/jazz) ne sont jugés que sur la
  // conformité et les tessitures — voir R3 de la spec.
  const errors = validateSATB(ex.solution, ex.keySignature, false, ex.solution, ex.regles ?? "ecole");
  return {
    id: ex.id,
    cours: ex.cours,
    errors: errors.filter(e => e.severity === "error"),
    warnings: errors.filter(e => e.severity === "warning"),
  };
});

const total = audits.length;
const clean = audits.filter(a => a.errors.length === 0 && a.warnings.length === 0);
const blocked = audits.filter(a => a.errors.length > 0);
// Notées <100 : avertissements comptés par noteExercice, en excluant
// cross_relation — alignement sur la note de l'app (R5 : cross_relation reste
// affichée mais ne pénalise plus). Le test d'invariant (R8) et l'app comptent
// donc la même chose.
const notedWarnings = (a: ExerciceAudit) => a.warnings.filter(w => w.type !== "cross_relation");
const warned = audits.filter(a => a.errors.length === 0 && notedWarnings(a).length > 0 && noteExercice(notedWarnings(a).length) < 100);

// ─── Répartition des bloqués : nouvelles règles vs préexistantes vs mixte ────
let blockedNewOnly = 0;
let blockedPreExistingOnly = 0;
let blockedMixed = 0;
let blockedOther = 0; // erreurs d'un type ni "nouveau" ni "préexistant" (ex: seventh en erreur — n'arrive pas en pratique, filet de sécurité)

for (const a of blocked) {
  const types = new Set(dedupTypes(a.errors));
  const hasNew = [...types].some(t => NEW_TYPES.has(t));
  const hasPre = [...types].some(t => PRE_EXISTING_TYPES.has(t));
  const hasOther = [...types].some(t => !NEW_TYPES.has(t) && !PRE_EXISTING_TYPES.has(t));
  if (hasNew && hasPre) blockedMixed++;
  else if (hasNew) blockedNewOnly++;
  else if (hasPre) blockedPreExistingOnly++;
  else if (hasOther) blockedOther++;
}

// ─── Rapport ──────────────────────────────────────────────────────────────

console.log("=".repeat(78));
console.log("AUDIT DU CORPUS SATB — solutions jugées contre leurs propres règles");
console.log("=".repeat(78));
console.log();
console.log(`Total exercices SATB       : ${total}`);
console.log(`Propres (0 erreur, 0 avert.): ${clean.length}`);
console.log(`Bloqués (≥1 erreur)         : ${blocked.length}`);
console.log(`Notés <100 (sans erreur)    : ${warned.length}`);
console.log();
console.log("Répartition des bloqués :");
console.log(`  - nouvelles règles seules (wrong_chord/wrong_bass/leading_tone/doubled_leading_tone) : ${blockedNewOnly}`);
console.log(`  - règles préexistantes seules (parallel_fifth/parallel_octave/spacing/range/crossing) : ${blockedPreExistingOnly}`);
console.log(`  - mixte (nouvelles + préexistantes)                                                    : ${blockedMixed}`);
if (blockedOther > 0) {
  console.log(`  - autre (type hors des deux catégories ci-dessus)                                       : ${blockedOther}`);
}

console.log();
console.log("-".repeat(78));
console.log(`LISTE DES BLOQUÉS (${blocked.length})`);
console.log("-".repeat(78));
for (const a of blocked) {
  const types = dedupTypes(a.errors).join(", ");
  console.log(`  ${a.id}  (cours ${a.cours})  →  ${types}`);
}

console.log();
console.log("-".repeat(78));
console.log(`LISTE DES NOTÉS <100 SANS ERREUR BLOQUANTE (${warned.length})`);
console.log("-".repeat(78));
for (const a of warned) {
  const counts = countByType(a.warnings);
  const detail = Object.entries(counts).map(([t, n]) => `${t}×${n}`).join(", ");
  const note = noteExercice(notedWarnings(a).length);
  console.log(`  ${a.id}  (cours ${a.cours})  note=${note}  →  ${detail}`);
}

console.log();
const summary = {
  total,
  clean: clean.length,
  blocked: blocked.length,
  blockedNewOnly,
  blockedPreExistingOnly,
  blockedMixed,
  blockedOther,
  warnedBelow100: warned.length,
};
console.log(`JSON: ${JSON.stringify(summary)}`);

/**
 * scripts/audit-generateur-satb.ts
 * Harmonia — Sweep du générateur /generateur-satb contre les règles d'école.
 *
 * Boucle de retour du chantier « mise à niveau /generateur-satb » (voir
 * docs/superpowers/specs/2026-07-17-generateur-satb-remediation-design.md et le
 * plan associé). Contrairement au corpus figé (audit-corpus-satb.ts), le
 * générateur de la page produit ses exercices À LA VOLÉE : gabarits ×
 * tonalités × doigtés. On énumère ici TOUS les combos générables par la page
 * — les 22 gabarits (PROGRESSION_TEMPLATES), les 24 tonalités proposées par
 * l'UI (KEYS_BY_LEVEL de GenerateurSATB, 12 majeures + 12 mineures) et les 4
 * doigtés — puis on fait rejouer la SOLUTION de chaque combo comme si un·e
 * élève l'avait recopiée à l'identique, et l'on regarde si le moteur de
 * validation la laisse terminer à 100 (école).
 *
 * Le juge : validateSATB(sol, tonalite, false, sol, "ecole"). On passe la VRAIE
 * signature (« Am », « Dm »…) — pas l'armure nue du relatif majeur — pour armer
 * la sensible sur le bon degré, à l'identique du chantier ①.
 *
 * Script en lecture seule : ne modifie aucun fichier — seulement un rapport
 * sur stdout, terminé par une ligne `JSON:` machine-lisible.
 *
 * Usage : npx tsx scripts/audit-generateur-satb.ts
 */

import { PROGRESSION_TEMPLATES } from "../src/data/progressions-templates";
import { generateSATBExercise, type Doigte } from "../src/lib/satb-generator";
import {
  validateSATB,
  noteExercice,
  type Measure,
  type ValidationError,
  type ValidationErrorType,
} from "../src/lib/satb-rules";

// Les 24 tonalités exposées par l'UI (GenerateurSATB → KEYS_BY_LEVEL).
const KEYS = [
  // majeures
  "C", "G", "F", "D", "A", "E", "Bb", "Eb", "B", "F#", "Db", "Ab",
  // mineures
  "Am", "Em", "Dm", "Bm", "F#m", "C#m", "Gm", "Cm", "G#m", "Ebm", "Bbm", "Fm",
];

const DOIGTES: Doigte[] = ["1", "3", "5", "7"];

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

interface ComboAudit {
  id: string;
  errors: ValidationError[];
  warnings: ValidationError[];
}

function countByType(errs: ValidationError[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const e of errs) out[e.type] = (out[e.type] ?? 0) + 1;
  return out;
}

// ─── Énumération et jugement ─────────────────────────────────────────────────

const audits: ComboAudit[] = [];
const discarded: string[] = []; // combos écartés par l'auto-filtrage (générateur → null)

let enumerated = 0;
for (const template of PROGRESSION_TEMPLATES) {
  for (const key of KEYS) {
    for (const doigte of DOIGTES) {
      enumerated++;
      const id = `${template.id}·${key}·d${doigte}`;
      const ex = generateSATBExercise(template, key, doigte);
      if (ex === null) {
        // Combo écarté par le générateur (aucune conduite légale, ou solution
        // qui n'obtient pas 100). Non « offert » par la page — hors périmètre.
        discarded.push(id);
        continue;
      }
      const sol = ex.solution as unknown as Measure[];
      // Le juge évalue la solution contre elle-même, en école, avec la vraie
      // signature (mineures « Xm » incluses).
      const errs = validateSATB(sol, ex.tonalite, false, sol, "ecole");
      audits.push({
        id,
        errors: errs.filter(e => e.severity === "error"),
        warnings: errs.filter(e => e.severity === "warning"),
      });
    }
  }
}

const total = audits.length;
const clean = audits.filter(a => a.errors.length === 0 && a.warnings.length === 0);
const blocked = audits.filter(a => a.errors.length > 0);

// Notés <100 : avertissements comptés par noteExercice, en excluant
// cross_relation (alignement sur la note de l'app — R5 du chantier corpus).
const notedWarnings = (a: ComboAudit) => a.warnings.filter(w => w.type !== "cross_relation");
const warned = audits.filter(
  a => a.errors.length === 0 && notedWarnings(a).length > 0 && noteExercice(notedWarnings(a).length) < 100,
);

// ─── Répartition des bloqués : nouvelles règles vs préexistantes vs mixte ────

let blockedNewOnly = 0;
let blockedPreExistingOnly = 0;
let blockedMixed = 0;
let blockedOther = 0;

for (const a of blocked) {
  const types = new Set(a.errors.map(e => e.type));
  const hasNew = [...types].some(t => NEW_TYPES.has(t));
  const hasPre = [...types].some(t => PRE_EXISTING_TYPES.has(t));
  const hasOther = [...types].some(t => !NEW_TYPES.has(t) && !PRE_EXISTING_TYPES.has(t));
  if (hasNew && hasPre) blockedMixed++;
  else if (hasNew) blockedNewOnly++;
  else if (hasPre) blockedPreExistingOnly++;
  else if (hasOther) blockedOther++;
}

// ─── Décompte global par type (erreurs bloquantes) ───────────────────────────

const errorTypeTotals: Record<string, number> = {};
for (const a of blocked) {
  for (const t of new Set(a.errors.map(e => e.type))) {
    errorTypeTotals[t] = (errorTypeTotals[t] ?? 0) + 1;
  }
}

// ─── Décompte global par type (avertissements notés) ─────────────────────────

const warnTypeTotals: Record<string, number> = {};
for (const a of warned) {
  for (const t of new Set(notedWarnings(a).map(w => w.type))) {
    warnTypeTotals[t] = (warnTypeTotals[t] ?? 0) + 1;
  }
}

// ─── Rapport ──────────────────────────────────────────────────────────────

console.log("=".repeat(78));
console.log("SWEEP DU GÉNÉRATEUR /generateur-satb — solutions jugées contre l'école");
console.log("=".repeat(78));
console.log();
const discardRate = enumerated === 0 ? 0 : (discarded.length / enumerated) * 100;
console.log(`Gabarits × tonalités × doigtés : ${PROGRESSION_TEMPLATES.length} × ${KEYS.length} × ${DOIGTES.length}`);
console.log(`Total combos énumérés          : ${enumerated}`);
console.log(`Écartés (auto-filtrage → null) : ${discarded.length}  (${discardRate.toFixed(1)} %)`);
console.log(`Conservés (jugés)              : ${total}`);
console.log(`Propres (0 erreur, 0 avert.)   : ${clean.length}`);
console.log(`Bloqués (≥1 erreur)            : ${blocked.length}`);
console.log(`Notés <100 (sans erreur)       : ${warned.length}`);
console.log();
console.log("Répartition des bloqués :");
console.log(`  - nouvelles règles seules   : ${blockedNewOnly}`);
console.log(`  - préexistantes seules      : ${blockedPreExistingOnly}`);
console.log(`  - mixte                     : ${blockedMixed}`);
if (blockedOther > 0) console.log(`  - autre                     : ${blockedOther}`);
console.log();
console.log("Combos bloqués par type d'erreur (un combo peut compter dans plusieurs) :");
for (const [t, n] of Object.entries(errorTypeTotals).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${t.padEnd(24)} : ${n}`);
}
console.log();
console.log("Combos notés <100 par type d'avertissement :");
for (const [t, n] of Object.entries(warnTypeTotals).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${t.padEnd(24)} : ${n}`);
}

console.log();
const summary = {
  enumerated,
  discarded: discarded.length,
  discardRatePct: Number(discardRate.toFixed(2)),
  kept: total,
  clean: clean.length,
  blocked: blocked.length,
  blockedNewOnly,
  blockedPreExistingOnly,
  blockedMixed,
  blockedOther,
  warnedBelow100: warned.length,
  errorTypeTotals,
  warnTypeTotals,
};
console.log(`JSON: ${JSON.stringify(summary)}`);

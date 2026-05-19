/**
 * scripts/recover-keys-from-debug.mjs
 * Injecte les clés NARRATIVE_KEYS depuis les fichiers debug (réponses API sauvegardées)
 * dans fr.json et en.json, pour les cours dont le TSX était trop long.
 *
 * Usage :
 *   node scripts/recover-keys-from-debug.mjs
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dir = dirname(fileURLToPath(import.meta.url));
const ROOT  = join(__dir, "..");

const FR_PATH   = join(ROOT, "messages/fr.json");
const EN_PATH   = join(ROOT, "messages/en.json");
const DEBUG_DIR = join(ROOT, "scripts/debug");

// Cours à récupérer depuis les fichiers debug
const COURSES = [3, 5, 6, 7, 8, 11, 12, 14, 16, 17, 18, 19];

const fr = JSON.parse(readFileSync(FR_PATH, "utf8"));
const en = JSON.parse(readFileSync(EN_PATH, "utf8"));

let totalInjected = 0;

for (const num of COURSES) {
  const debugPath = join(DEBUG_DIR, `cours${num}-response.txt`);

  if (!existsSync(debugPath)) {
    console.log(`cours${num}: ⚠ pas de fichier debug`);
    continue;
  }

  if (fr[`cours${num}`]?.narrative) {
    const keyCount = Object.keys(fr[`cours${num}`].narrative).length;
    console.log(`cours${num}: ↷ déjà ${keyCount} clés — ignoré`);
    continue;
  }

  const raw = readFileSync(debugPath, "utf8");
  const keysMatch = raw.match(/<NARRATIVE_KEYS>\s*([\s\S]*?)\s*<\/NARRATIVE_KEYS>/);

  if (!keysMatch) {
    console.log(`cours${num}: ✗ <NARRATIVE_KEYS> absent`);
    continue;
  }

  let keys;
  try {
    keys = JSON.parse(keysMatch[1].trim());
  } catch (e) {
    console.log(`cours${num}: ✗ JSON invalide — ${e.message}`);
    continue;
  }

  if (!keys.fr || !keys.en || typeof keys.fr !== "object") {
    console.log(`cours${num}: ✗ structure JSON incorrecte`);
    continue;
  }

  const keyCount = Object.keys(keys.fr).length;
  if (keyCount === 0) {
    console.log(`cours${num}: ⚠ aucune clé`);
    continue;
  }

  if (!fr[`cours${num}`]) {
    console.log(`cours${num}: ✗ "cours${num}" absent de fr.json`);
    continue;
  }
  if (!en[`cours${num}`]) {
    console.log(`cours${num}: ✗ "cours${num}" absent de en.json`);
    continue;
  }

  fr[`cours${num}`].narrative = keys.fr;
  en[`cours${num}`].narrative = keys.en;
  totalInjected += keyCount;
  console.log(`cours${num}: ✓ ${keyCount} clés injectées`);
}

writeFileSync(FR_PATH, JSON.stringify(fr, null, 2) + "\n", "utf8");
writeFileSync(EN_PATH, JSON.stringify(en, null, 2) + "\n", "utf8");

console.log(`\nTotal : ${totalInjected} clés injectées dans fr.json / en.json`);
console.log("Prochaine étape : node scripts/translate-narrative.mjs  (TSX uniquement)");

/**
 * translate-content.mjs
 * Traduit les questions de quiz (questionsFr) dans les 5 autres langues
 * pour tous les fichiers src/data/coursNContent.ts.
 *
 * Usage:
 *   node scripts/translate-content.mjs           → cours 1-37 (tous)
 *   node scripts/translate-content.mjs 18        → cours 18 uniquement
 *   node scripts/translate-content.mjs 18 37     → cours 18 à 37
 *
 * Stratégie anti-token-limit :
 *   - Découpage en batches de BATCH_SIZE questions par appel API
 *   - Chaque batch = 1 appel indépendant, résultats concaténés
 *   - Idempotent : saute les langues déjà traduites complètement
 *   - Force re-traduction si le nb de questions < nb FR (traduction partielle)
 */

import Anthropic from "@anthropic-ai/sdk";
import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const LANGS = {
  en: "English",
  es: "Spanish",
  de: "German",
  it: "Italian",
  pt: "Brazilian Portuguese",
};

// Nombre de questions par appel API — ajuste si tu as des timeouts
const BATCH_SIZE = 15;

// ── Helpers ───────────────────────────────────────────────────────────────────

function varName(lang) {
  return `questions${lang[0].toUpperCase()}${lang.slice(1)}`;
}

/** Extrait le contenu brut de `const questionsFr: Question[] = [ ... ];` */
function extractFrBlock(content) {
  const m = content.match(/const questionsFr:\s*Question\[\]\s*=\s*\[([\s\S]*?)\n\];/);
  if (!m) throw new Error("questionsFr not found");
  return m[1];
}

/** Découpe le bloc FR en lignes de questions individuelles. */
function splitIntoQuestions(frBlock) {
  const lines = frBlock.split("\n");
  const questions = [];
  let current = "";

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("//")) {
      if (current.trim()) {
        questions.push(current.trim());
        current = "";
      }
      continue;
    }
    if (trimmed.startsWith("{ q:")) {
      if (current.trim()) questions.push(current.trim());
      current = trimmed;
    } else {
      current += " " + trimmed;
    }
  }
  if (current.trim()) questions.push(current.trim());

  return questions.filter(q => q.startsWith("{ q:"));
}

/** Compte les questions dans un bloc brut. */
function countQuestions(block) {
  return (block.match(/\{ q:/g) || []).length;
}

/**
 * True si la langue est déjà traduite ET avec autant de questions que le FR.
 * Si la traduction est partielle (moins de questions), on la refait.
 */
function isTranslatedCompletely(content, lang, frCount) {
  const v = varName(lang);
  if (!new RegExp(`const ${v}:\\s*Question\\[\\]\\s*=\\s*\\[`).test(content)) {
    return false;
  }
  const m = content.match(new RegExp(`const ${v}:\\s*Question\\[\\]\\s*=\\s*\\[([\\s\\S]*?)\\n\\];`));
  if (!m) return false;
  const existingCount = countQuestions(m[1]);
  if (existingCount < frCount) {
    console.log(`    ⚠ ${lang}: ${existingCount}/${frCount} questions — re-traduction`);
    return false;
  }
  return true;
}

// ── Traduction via Claude ─────────────────────────────────────────────────────

async function translateBatch(batch, lang, batchNum, total) {
  const langName = LANGS[lang];
  const batchText = batch.join("\n");

  const prompt = `You are translating French music-theory quiz questions into ${langName}.

Each item has this TypeScript shape:
  { q:"question", opts:["a","b","c","d"], a:NUMBER, fb:"feedback" }

Translation rules:
- Translate q, opts, fb into ${langName}
- NEVER change a (the answer index) — it must stay exactly as-is
- Keep note names unchanged: C, D, E, F, G, A, B, C#, Bb, F#, Eb, etc.
- Keep chord symbols unchanged: Cmaj7, G7, Dm, Bdim, etc.
- Keep Roman numerals unchanged: I, II, III, IV, V, VI, VII
- Keep function symbols unchanged: T, SD, D, V→I, ii–V–I, etc.
- Keep numeric intervals when used as identifiers: "3 dt", "4 dt", etc.
- Output ONLY the translated items in exactly the same TypeScript single-line format
- One item per line, each starting with { q:
- No markdown, no code fences, no comments, no explanation

Batch ${batchNum}/${total} — French items to translate:
${batchText}`;

  const resp = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 8192,
    messages: [{ role: "user", content: prompt }],
  });

  let text = resp.content[0].text.trim();
  text = text.replace(/^```(?:typescript|ts|json)?\n?/, "").replace(/\n?```$/, "").trim();
  return text;
}

async function translateAllBatches(frQuestions, lang) {
  const chunks = [];
  for (let i = 0; i < frQuestions.length; i += BATCH_SIZE) {
    chunks.push(frQuestions.slice(i, i + BATCH_SIZE));
  }

  const results = [];
  for (let i = 0; i < chunks.length; i++) {
    process.stdout.write(`       batch ${i + 1}/${chunks.length}...`);
    const translated = await translateBatch(chunks[i], lang, i + 1, chunks.length);
    results.push(translated);
    process.stdout.write(` ✓\n`);
    // Throttle entre batches
    if (i < chunks.length - 1) await new Promise(r => setTimeout(r, 500));
  }

  return results.join("\n");
}

// ── Traitement d'un fichier ───────────────────────────────────────────────────

async function processCours(num) {
  const filePath = resolve(ROOT, `src/data/cours${num}Content.ts`);
  let content;
  try {
    content = readFileSync(filePath, "utf-8");
  } catch {
    console.log(`  cours${num}Content.ts introuvable, ignoré`);
    return;
  }

  let frBlock;
  try {
    frBlock = extractFrBlock(content);
  } catch {
    console.log(`  Pas de questionsFr dans cours${num}, ignoré`);
    return;
  }

  const frCount = countQuestions(frBlock);
  if (frCount === 0) {
    console.log(`  questionsFr vide dans cours${num}, ignoré`);
    return;
  }

  const missing = Object.keys(LANGS).filter(l => !isTranslatedCompletely(content, l, frCount));
  if (missing.length === 0) {
    console.log(`  Toutes les langues sont complètes (${frCount}q).`);
    return;
  }

  console.log(`  FR: ${frCount} questions | À traduire: ${missing.join(", ")}`);
  const frQuestions = splitIntoQuestions(frBlock);

  let modified = false;

  for (const lang of missing) {
    const v = varName(lang);
    console.log(`  → ${LANGS[lang]} (${frCount}q en ${Math.ceil(frCount / BATCH_SIZE)} batch${frCount > BATCH_SIZE ? "es" : ""}):`);

    try {
      const translated = await translateAllBatches(frQuestions, lang);

      // Supprime l'ancienne déclaration partielle si elle existe
      content = content.replace(
        new RegExp(`const ${v}:\\s*Question\\[\\]\\s*=\\s*\\[[\\s\\S]*?\\n\\];\\s*`),
        ""
      );
      // Supprime l'alias `const questionsXx: Question[] = questionsFr;` si présent
      content = content.replace(
        new RegExp(`const ${v}:\\s*Question\\[\\]\\s*=\\s*questionsFr;\\s*`),
        ""
      );

      const declaration = `const ${v}: Question[] = [\n${translated}\n];`;

      // Insère avant l'export
      if (content.includes("// ─── Export ───")) {
        content = content.replace(/(\/\/ ─── Export ───)/, `${declaration}\n\n$1`);
      } else {
        content = content.replace(/(export const cours\d+Content)/, `${declaration}\n\n$1`);
      }

      // Remplace `questions: questionsFr` → `questions: questionsXx` dans l'entrée de cette langue
      content = content.replace(
        new RegExp(`(${lang}\\s*:\\s*\\{[^}]*?)questions\\s*:\\s*questionsFr`, "s"),
        `$1questions: ${v}`
      );

      modified = true;
    } catch (e) {
      console.error(`     ✗ échec: ${e.message}`);
    }

    // Throttle entre langues
    await new Promise(r => setTimeout(r, 400));
  }

  if (modified) {
    writeFileSync(filePath, content, "utf-8");
    console.log(`  ✓ Sauvegardé.`);
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
let nums;
if (args.length === 0) {
  nums = Array.from({ length: 37 }, (_, i) => i + 1); // cours 1 → 37
} else if (args.length === 1) {
  nums = [parseInt(args[0])];
} else {
  const [from, to] = args.map(Number);
  nums = Array.from({ length: to - from + 1 }, (_, i) => from + i);
}

if (!process.env.ANTHROPIC_API_KEY) {
  console.error("❌  ANTHROPIC_API_KEY non définie. Lance : ANTHROPIC_API_KEY=sk-... node scripts/translate-content.mjs");
  process.exit(1);
}

console.log(`Traduction des cours : ${nums[0]}–${nums[nums.length - 1]}\n`);

for (const n of nums) {
  console.log(`\n=== Cours ${n} ===`);
  await processCours(n);
}

console.log("\n✓ Terminé.");

/**
 * translate-content.mjs
 * Traduit les questions de quiz (questionsFr) dans les 5 autres langues
 * pour tous les fichiers src/data/coursNContent.ts.
 *
 * Usage:
 *   node scripts/translate-content.mjs           → tous les cours
 *   node scripts/translate-content.mjs 2         → cours 2 uniquement
 *   node scripts/translate-content.mjs 2 5       → cours 2 à 5
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

// ── Helpers ───────────────────────────────────────────────────────────────────

function varName(lang) {
  return `questions${lang[0].toUpperCase()}${lang.slice(1)}`;
}

/** Extract the raw content of `const questionsFr: Question[] = [ ... ];` */
function extractFrBlock(content) {
  const m = content.match(/const questionsFr:\s*Question\[\]\s*=\s*\[([\s\S]*?)\n\];/);
  if (!m) throw new Error("questionsFr not found");
  return m[1];
}

/** True if questionsXx already exists as a real declaration (not just an alias to questionsFr) */
function isTranslated(content, lang) {
  const v = varName(lang);
  // Look for `const questionsXx: Question[] = [` (real array, not `= questionsFr`)
  return new RegExp(`const ${v}:\\s*Question\\[\\]\\s*=\\s*\\[`).test(content);
}

// ── Claude translation ────────────────────────────────────────────────────────

async function translateBlock(frBlock, lang) {
  const langName = LANGS[lang];

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
- Output ONLY the translated array items in exactly the same TypeScript format
- No markdown, no code fences, no comments, no explanation

French items to translate:
${frBlock}`;

  const resp = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 8192,
    messages: [{ role: "user", content: prompt }],
  });

  let text = resp.content[0].text.trim();
  // Strip accidental code fences
  text = text.replace(/^```(?:typescript|ts|json)?\n?/, "").replace(/\n?```$/, "").trim();
  return text;
}

// ── File processing ───────────────────────────────────────────────────────────

async function processCours(num) {
  const filePath = resolve(ROOT, `src/data/cours${num}Content.ts`);
  let content;
  try {
    content = readFileSync(filePath, "utf-8");
  } catch {
    console.log(`  cours${num}Content.ts not found, skipping`);
    return;
  }

  let frBlock;
  try {
    frBlock = extractFrBlock(content);
  } catch {
    console.log(`  No questionsFr found in cours${num}, skipping`);
    return;
  }

  const missing = Object.keys(LANGS).filter(l => !isTranslated(content, l));
  if (missing.length === 0) {
    console.log(`  All languages already translated.`);
    return;
  }

  console.log(`  Missing: ${missing.join(", ")}`);

  let modified = false;

  for (const lang of missing) {
    const v = varName(lang);
    console.log(`  → ${LANGS[lang]}...`);

    try {
      const translated = await translateBlock(frBlock, lang);

      // Build the TypeScript declaration
      const declaration = `const ${v}: Question[] = [${translated}\n];`;

      // Insert before "// ─── Export ───" or "export const"
      if (content.includes("// ─── Export ───")) {
        content = content.replace(
          /(\/\/ ─── Export ───)/,
          `${declaration}\n\n$1`
        );
      } else {
        content = content.replace(
          /(export const cours\d+Content)/,
          `${declaration}\n\n$1`
        );
      }

      // Replace `questions: questionsFr` → `questions: questionsXx` for this lang's entry
      // Handles both inline and multiline export entries
      content = content.replace(
        new RegExp(
          `(${lang}\\s*:\\s*\\{[^}]*?)questions\\s*:\\s*questionsFr`,
          "s"
        ),
        `$1questions: ${v}`
      );

      // Also replace alias `const questionsXx: Question[] = questionsFr;` if present
      content = content.replace(
        new RegExp(`const ${v}:\\s*Question\\[\\]\\s*=\\s*questionsFr;`),
        ""
      );

      modified = true;
      console.log(`     ✓ done`);
    } catch (e) {
      console.error(`     ✗ failed: ${e.message}`);
    }

    // Throttle to avoid hitting rate limits
    await new Promise(r => setTimeout(r, 400));
  }

  if (modified) {
    writeFileSync(filePath, content, "utf-8");
    console.log(`  Saved.`);
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
let nums;
if (args.length === 0) {
  nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
} else if (args.length === 1) {
  nums = [parseInt(args[0])];
} else {
  const [from, to] = args.map(Number);
  nums = Array.from({ length: to - from + 1 }, (_, i) => from + i);
}

console.log(`Translating cours: ${nums.join(", ")}\n`);

for (const n of nums) {
  console.log(`\n=== Cours ${n} ===`);
  await processCours(n);
}

console.log("\n✓ All done.");

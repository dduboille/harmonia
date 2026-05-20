/**
 * scripts/translate-narrative-langs.mjs
 * Traduit les clés narrative.* de fr.json → es, de, it, pt
 * pour tous les cours Harmonia.
 *
 * Chaque appel API traite UN cours dans LES 4 LANGUES simultanément.
 * Les clés EN sont fournies comme référence supplémentaire.
 *
 * Usage :
 *   ANTHROPIC_API_KEY=sk-ant-... node scripts/translate-narrative-langs.mjs
 *   START=5 END=10 ANTHROPIC_API_KEY=... node scripts/translate-narrative-langs.mjs
 */

import Anthropic from "@anthropic-ai/sdk";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dir = dirname(fileURLToPath(import.meta.url));
const ROOT  = join(__dir, "..");

const START = parseInt(process.env.START ?? "1",  10);
const END   = parseInt(process.env.END   ?? "23", 10);
const DRY   = process.env.DRY_RUN === "1";
const MODEL = "claude-sonnet-4-6";

const PATHS = {
  fr: join(ROOT, "messages/fr.json"),
  en: join(ROOT, "messages/en.json"),
  es: join(ROOT, "messages/es.json"),
  de: join(ROOT, "messages/de.json"),
  it: join(ROOT, "messages/it.json"),
  pt: join(ROOT, "messages/pt.json"),
};

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const sleep  = ms => new Promise(r => setTimeout(r, ms));

// ── Prompt système ────────────────────────────────────────────────────────────

const SYSTEM = `\
You are a professional music-theory educator and translator specializing in pedagogy.
You translate educational content from French to Spanish, German, Italian, and Brazilian Portuguese.

## Rules

- Preserve HTML tags exactly: <strong>, <em>, <br />, etc.
- Do NOT translate note names: C D E F G A B (and accidentals: C#, Bb, F#, Eb, Ab, etc.)
- Do NOT translate Roman numerals used as chord/degree labels: I II III IV V VI VII
- Do NOT translate chord symbols: Cmaj7, G7, Dm, Bdim, Am7, F#dim, etc.
- Do NOT translate functional abbreviations: T, SD, D, V→I, ii–V–I, SATB, etc.
- Do NOT translate solfège syllables: Ut, Ré, Mi, Fa, Sol, La, Si, Do
- Do NOT translate Latin hymn phrases: "Ut queant laxis", "Resonare fibris", etc.
- Preserve arrows (→), em-dashes (—), and special characters
- Translate everything else naturally and pedagogically
- Match the register and tone of the French original (educational, precise, engaging)
- Use the English version as additional context when French is ambiguous

## Output format (STRICT)

Output a single JSON object — ONE LINE, no markdown fences, no extra text:

{"es":{"key1":"traducción","key2":"otra traducción"},"de":{"key1":"Übersetzung"},"it":{"key1":"traduzione"},"pt":{"key1":"tradução"}}

All 4 language objects must have ALL the same keys as the French input.
Escape double quotes inside values with \\".
Do NOT add line breaks inside JSON values — use HTML <br /> for line breaks in content.`;

const BATCH_SIZE = 75; // split large courses to avoid JSON parse errors

// ── JSON repair ───────────────────────────────────────────────────────────────
// Fix unescaped double-quotes inside JSON string values.
// When a " inside a string is NOT followed by , : ] } (i.e. it's not closing
// the string), escape it as \".

function repairJson(raw) {
  let result = "";
  let inString = false;
  let escaped = false;

  for (let i = 0; i < raw.length; i++) {
    const ch = raw[i];

    if (escaped) {
      result += ch;
      escaped = false;
      continue;
    }

    if (ch === "\\") {
      result += ch;
      escaped = true;
      continue;
    }

    if (ch === '"') {
      if (!inString) {
        inString = true;
        result += ch;
      } else {
        // Look ahead past whitespace to decide if this " closes the string
        let j = i + 1;
        while (j < raw.length && (raw[j] === " " || raw[j] === "\t")) j++;
        const next = raw[j];
        const closes = !next || /[,:\]}\n]/.test(next);
        if (closes) {
          inString = false;
          result += ch;
        } else {
          // Unescaped quote inside value — escape it
          result += '\\"';
        }
      }
      continue;
    }

    result += ch;
  }

  return result;
}

// ── Translate a batch of keys ─────────────────────────────────────────────────

async function translateBatch(num, batchKeys, msgs, batchLabel) {
  const coursKey = `cours${num}`;
  const frKeys   = msgs.fr[coursKey].narrative;

  const frSubset = {};
  const enSubset = {};
  for (const k of batchKeys) {
    frSubset[k] = frKeys[k];
    enSubset[k] = msgs.en[coursKey]?.narrative?.[k] ?? "";
  }

  const userMsg = `Translate the following ${batchKeys.length} narrative keys for Cours ${num} into Spanish, German, Italian, and Brazilian Portuguese.

French values:
${JSON.stringify(frSubset)}

English reference (same keys):
${JSON.stringify(enSubset)}

Return ALL ${batchKeys.length} keys for ALL 4 languages in the single-line JSON format.
IMPORTANT: Escape ALL double quotes inside string values with \\". Do not use literal unescaped " inside a JSON string value.`;

  let raw = "";
  let inputTokens = 0, outputTokens = 0;

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      raw = "";
      const stream = client.messages.stream({
        model: MODEL,
        max_tokens: 32000,
        system: SYSTEM,
        messages: [{ role: "user", content: userMsg }],
      });

      process.stdout.write(`  streaming${batchLabel}`);
      for await (const chunk of stream) {
        if (chunk.type === "content_block_delta" && chunk.delta.type === "text_delta") {
          raw += chunk.delta.text;
          if (raw.length % 5000 < 20) process.stdout.write(".");
        }
      }
      process.stdout.write("\n");

      const finalMsg = await stream.finalMessage();
      inputTokens  = finalMsg.usage.input_tokens;
      outputTokens = finalMsg.usage.output_tokens;
      break;
    } catch (err) {
      raw = "";
      console.error(`\n  tentative ${attempt}/3 : ${err.message}`);
      if (attempt === 3) throw err;
      await sleep(8000 * attempt);
    }
  }

  const cost = (inputTokens * 3 + outputTokens * 15) / 1_000_000;
  console.log(`  tokens : ${inputTokens} in / ${outputTokens} out  →  ~$${cost.toFixed(3)}`);

  raw = raw.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "").trim();

  let translations;
  try {
    translations = JSON.parse(raw);
  } catch {
    // Attempt JSON repair: escape unescaped " inside string values
    const repaired = repairJson(raw);
    try {
      translations = JSON.parse(repaired);
      console.log("  ⚠ JSON réparé (guillemets non échappés corrigés)");
    } catch (e2) {
      console.error(`  ✗ JSON invalide (même après réparation) : ${e2.message}`);
      console.error(`  Réponse brute : ${raw.slice(0, 300)}`);
      return null;
    }
  }

  for (const lang of ["es","de","it","pt"]) {
    if (!translations[lang] || typeof translations[lang] !== "object") {
      console.error(`  ✗ "${lang}" absent de la réponse`);
      return null;
    }
  }

  return translations;
}

// ── Process one cours ─────────────────────────────────────────────────────────

async function processCours(num, msgs) {
  const coursKey = `cours${num}`;

  const frKeys = msgs.fr[coursKey]?.narrative;
  if (!frKeys || Object.keys(frKeys).length === 0) {
    console.log(`  ↷ cours${num} : aucune clé narrative`);
    return;
  }

  const keyNames = Object.keys(frKeys);
  const keyCount = keyNames.length;
  const allDone  = ["es","de","it","pt"].every(lang =>
    msgs[lang][coursKey]?.narrative &&
    keyNames.every(k => msgs[lang][coursKey].narrative[k] !== undefined)
  );
  if (allDone) {
    console.log(`  ↷ cours${num} : déjà traduit (${keyCount} clés)`);
    return;
  }

  const missingKeys = keyNames.filter(k =>
    ["es","de","it","pt"].some(lang => !msgs[lang][coursKey]?.narrative?.[k])
  );
  console.log(`  ${missingKeys.length}/${keyCount} clés à traduire`);

  if (DRY) {
    console.log("  [DRY_RUN] ignoré");
    return;
  }

  // Ensure narrative objects exist
  for (const lang of ["es","de","it","pt"]) {
    if (!msgs[lang][coursKey]) {
      console.warn(`  ⚠ "${coursKey}" absent de ${lang}.json — ignoré`);
      return;
    }
    if (!msgs[lang][coursKey].narrative) msgs[lang][coursKey].narrative = {};
  }

  // ── Split into batches if needed ───────────────────────────────────────────
  const batches = [];
  for (let i = 0; i < missingKeys.length; i += BATCH_SIZE) {
    batches.push(missingKeys.slice(i, i + BATCH_SIZE));
  }

  let totalTranslated = 0;

  for (let b = 0; b < batches.length; b++) {
    const batchLabel = batches.length > 1 ? ` [lot ${b + 1}/${batches.length}]` : "";
    const translations = await translateBatch(num, batches[b], msgs, batchLabel);
    if (!translations) {
      console.error(`  ✗ Abandon du cours${num} (lot ${b + 1} échoué)`);
      return;
    }

    for (const lang of ["es","de","it","pt"]) {
      Object.assign(msgs[lang][coursKey].narrative, translations[lang]);
    }

    totalTranslated += Object.keys(translations.es ?? {}).length;

    if (b < batches.length - 1) await sleep(2000);
  }

  console.log(`  ✓ ${totalTranslated}/${missingKeys.length} clés traduites (4 langues)`);
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error("Erreur : ANTHROPIC_API_KEY manquante");
    process.exit(1);
  }

  // Load all message files once
  const msgs = {};
  for (const [lang, path] of Object.entries(PATHS)) {
    msgs[lang] = JSON.parse(readFileSync(path, "utf8"));
  }

  const courses = Array.from({ length: END - START + 1 }, (_, i) => START + i);
  console.log("════════════════════════════════════════════════════════");
  console.log(` Harmonia — Traduction narrative → ES/DE/IT/PT`);
  console.log(` Cours : ${START}–${END}   ${DRY ? "[DRY RUN]" : ""}`);
  console.log(` Coût estimé : ~$${(courses.length * 0.20).toFixed(2)} total`);
  console.log("════════════════════════════════════════════════════════\n");

  for (const num of courses) {
    console.log(`\n── Cours ${num} ──────────────────────────────────────`);
    const t0 = Date.now();
    try {
      await processCours(num, msgs);
    } catch (err) {
      console.error(`  ✗ Erreur : ${err.message}`);
    }
    console.log(`  durée : ${((Date.now() - t0) / 1000).toFixed(1)}s`);

    if (num < END) await sleep(1000);
  }

  // Write all 4 language files at the end
  for (const lang of ["es","de","it","pt"]) {
    writeFileSync(PATHS[lang], JSON.stringify(msgs[lang], null, 2) + "\n", "utf8");
  }
  console.log("\n✓ Fichiers es/de/it/pt mis à jour");
  console.log("  npx tsc --noEmit && npm run build");
}

main().catch(err => {
  console.error("Erreur non gérée :", err);
  process.exit(1);
});

/**
 * scripts/translate-narrative.mjs
 * Harmonia — Traduction narrative des cours via API Anthropic
 *
 * Pour chaque CoursN.tsx (N = START..END), ce script :
 *  1. Lit le fichier TSX
 *  2. Appelle claude-sonnet-4-6 pour extraire le texte FR et produire les traductions EN
 *  3. Injecte les clés dans messages/fr.json et messages/en.json
 *  4. Écrit le TSX modifié avec tc("narrative.clé") à la place des chaînes en dur
 *
 * Usage :
 *   ANTHROPIC_API_KEY=sk-ant-... node scripts/translate-narrative.mjs
 *   START=5 END=9  ANTHROPIC_API_KEY=... node scripts/translate-narrative.mjs
 *   DRY_RUN=1      ANTHROPIC_API_KEY=... node scripts/translate-narrative.mjs
 *
 * Cours déjà traités (détectés auto) : 1, 2, 4, 9, 10, 13, 15, 20, 21, 22
 * Clés injectées, TSX pending : 3, 5, 6, 7, 8, 11, 12, 14, 16, 17, 18, 19 (mode TSX-only)
 * Traitement complet requis : 23
 * Coût estimé : ~$0.45/cours · ~$6 pour les 13 restants
 */

import Anthropic from "@anthropic-ai/sdk";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// ── Config ────────────────────────────────────────────────────────────────────

const __dir  = dirname(fileURLToPath(import.meta.url));
const ROOT   = join(__dir, "..");
const START  = parseInt(process.env.START  ?? "3",  10);
const END    = parseInt(process.env.END    ?? "23", 10);
const DRY    = process.env.DRY_RUN === "1";
const MODEL  = "claude-sonnet-4-6";
const MAX_TOKENS = 64000;

const FR_PATH   = join(ROOT, "messages/fr.json");
const EN_PATH   = join(ROOT, "messages/en.json");
const DEBUG_DIR = join(ROOT, "scripts/debug");

if (!existsSync(DEBUG_DIR)) mkdirSync(DEBUG_DIR, { recursive: true });

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const sleep  = (ms) => new Promise(r => setTimeout(r, ms));

// ── Prompt système ────────────────────────────────────────────────────────────

const SYSTEM = `\
You are a senior TypeScript/React developer and music theory expert helping to internationalize \
Harmonia, a Next.js music theory learning platform.

## Context

Each course component (CoursN.tsx) uses this i18n hook pattern:

\`\`\`typescript
const i18n = useCoursI18n("coursN");
const tc   = i18n.tc;                                     // useTranslations("coursN")
const n    = (key: string) => tc(\`narrative.\${key}\` as any); // shorthand for narrative keys
\`\`\`

The \`n()\` helper and \`const tc = i18n.tc\` declaration must be added right after the line:
  const { ... } = useCoursContent(coursNContent);

## Your task

For the given CoursN.tsx:
1. Identify every hardcoded French string in JSX
2. Assign each a camelCase key name (prefixed by section: origines*, degres*, tons*, etc.)
3. Return French and English values for every key
4. Return the full modified TSX using n("keyName") instead of hardcoded strings

## What to extract

- h2 / h3 / p text content
- div / span inline text
- Button labels
- Table headers and cell strings
- Info box / warning box content (these often contain HTML tags — keep them as HTML strings)
- MaitreCard props: period, concept, anecdote, lesson

## What NOT to extract

- Musical note names: C D E F G A B and accidentals (F#, Bb, C#…)
- Technical formulas: T–T–½, T-T-½-T-T-T-½
- Roman numerals used as degree labels: I II III IV V VI VII
- Solfège syllables: Ut Ré Mi Fa Sol La Si
- Latin hymn verses: "Ut queant laxis", "Resonare fibris" etc.
- Content from useCoursContent() — degrees, intervals, quiz questions already localized
- Strings already using i18n.* hooks (i18n.title, i18n.badge, i18n.training, etc.)
- Composer names / historical names
- Emoji
- Props that are purely dynamic variables

## Handling HTML in strings

Paragraphs that contain <em>, <strong>, <br /> tags:
- Store the full HTML string (escaped as needed) in the message key value
- Replace in JSX: <p dangerouslySetInnerHTML={{ __html: n("keyName") }} />
- This is already the pattern used for degree .origin and .attraction fields

## Dynamic strings

When a translated string contains a runtime variable, split around it:
  BEFORE: ▶ Jouer la gamme de {g.name}
  AFTER:  ▶ {n("tonsPlayBtnPrefix")} {g.name}

For plurals / conditionals:
  {g.accidentals.length === 1 ? n("tonsOneAccidental") : n("tonsTwoAccidentals")}

## Output format (STRICT — do not add markdown fences or extra text)

When keys are NOT yet extracted (full mode):

<NARRATIVE_KEYS>
{"fr":{"key1":"Texte français","key2":"Autre texte"},"en":{"key1":"English text","key2":"Other text"}}
</NARRATIVE_KEYS>

<MODIFIED_TSX>
[full TSX file content — no markdown fences, no extra text, just the raw file]
</MODIFIED_TSX>

When the user says keys are ALREADY extracted (TSX-only mode), output ONLY:

<MODIFIED_TSX>
[full TSX file content — no markdown fences, no extra text, just the raw file]
</MODIFIED_TSX>

The JSON in NARRATIVE_KEYS must be a single valid JSON object on ONE line.
Use \\n inside JSON string values only where a literal newline is semantically needed.
All other text must be on the single JSON line.`;

// ── Traitement d'un cours ─────────────────────────────────────────────────────

async function processCours(num) {
  const tsxPath  = join(ROOT, `src/components/Cours${num}.tsx`);
  const debugOut = join(DEBUG_DIR, `cours${num}-response.txt`);

  if (!existsSync(tsxPath)) {
    console.log(`  ⚠ Cours${num}.tsx introuvable — ignoré`);
    return;
  }

  const tsxSrc = readFileSync(tsxPath, "utf8");
  console.log(`  fichier : ${(tsxSrc.length / 1024).toFixed(1)} KB`);

  // Check if TSX already modified (contains the narrative helper)
  if (tsxSrc.includes('narrative.${key}')) {
    console.log(`  ↷ Cours${num}.tsx déjà modifié — ignoré`);
    return;
  }

  // Check if keys already injected (TSX-only mode)
  const fr = JSON.parse(readFileSync(FR_PATH, "utf8"));
  const tsxOnlyMode = !!(fr[`cours${num}`]?.narrative);
  if (tsxOnlyMode) {
    console.log(`  ℹ clés déjà présentes — mode TSX uniquement`);
  }

  if (DRY) {
    console.log("  [DRY_RUN] appel API ignoré");
    return;
  }

  // ── Appel API ──────────────────────────────────────────────────────────────

  // Build narrative keys reference for TSX-only mode
  let tsxOnlyKeysRef = "";
  if (tsxOnlyMode) {
    const frKeys = fr[`cours${num}`].narrative;
    tsxOnlyKeysRef = `\n\nThe following narrative keys are ALREADY in fr.json / en.json for cours${num}:\n${JSON.stringify(frKeys, null, 2)}\n\nUse these exact key names when generating the MODIFIED_TSX. Output ONLY the <MODIFIED_TSX> block — skip <NARRATIVE_KEYS>.`;
  }

  const userMsg = tsxOnlyMode
    ? `\
Modify Cours${num}.tsx to use the already-extracted narrative keys.

The messages key is "cours${num}". Each key "keyName" is accessed via n("keyName").
${tsxOnlyKeysRef}

Here is Cours${num}.tsx:

${tsxSrc}`
    : `\
Process Cours${num}.tsx. Extract all hardcoded French narrative text, create translation keys \
(namespace: cours${num}.narrative.*), and return the modified TSX.

The messages key in fr.json / en.json is "cours${num}".

Here is Cours${num}.tsx:

${tsxSrc}`;

  let raw = "";
  let inputTokens = 0;
  let outputTokens = 0;

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      // Streaming requis pour les requêtes longues (fichiers > 40 KB)
      const stream = client.messages.stream({
        model: MODEL,
        max_tokens: MAX_TOKENS,
        system: SYSTEM,
        messages: [{ role: "user", content: userMsg }],
      });

      process.stdout.write("  streaming");
      for await (const chunk of stream) {
        if (chunk.type === "content_block_delta" && chunk.delta.type === "text_delta") {
          raw += chunk.delta.text;
          if (raw.length % 4000 < 20) process.stdout.write(".");
        }
      }
      process.stdout.write("\n");

      const finalMsg = await stream.finalMessage();
      inputTokens  = finalMsg.usage.input_tokens;
      outputTokens = finalMsg.usage.output_tokens;
      break;
    } catch (err) {
      raw = "";
      console.error(`\n  tentative ${attempt}/3 échouée : ${err.message}`);
      if (attempt === 3) throw err;
      await sleep(8000 * attempt);
    }
  }

  // Coût estimatif
  const cost = (inputTokens * 3 + outputTokens * 15) / 1_000_000;
  console.log(`  tokens : ${inputTokens} in / ${outputTokens} out  →  ~$${cost.toFixed(3)}`);

  // Sauvegarder la réponse brute pour debug
  writeFileSync(debugOut, raw, "utf8");

  // ── Parsing NARRATIVE_KEYS (skipped in TSX-only mode) ────────────────────
  let keys = null;
  let keyCount = 0;

  if (!tsxOnlyMode) {
    const keysMatch = raw.match(/<NARRATIVE_KEYS>\s*([\s\S]*?)\s*<\/NARRATIVE_KEYS>/);
    if (!keysMatch) {
      console.error(`  ✗ <NARRATIVE_KEYS> absent. Réponse sauvegardée dans ${debugOut}`);
      return;
    }
    try {
      keys = JSON.parse(keysMatch[1].trim());
    } catch (e) {
      console.error(`  ✗ JSON invalide dans <NARRATIVE_KEYS> : ${e.message}`);
      return;
    }
    if (!keys.fr || !keys.en || typeof keys.fr !== "object") {
      console.error("  ✗ Structure JSON incorrecte (attendu {fr:{...}, en:{...}})");
      return;
    }
    keyCount = Object.keys(keys.fr).length;
    if (keyCount === 0) {
      console.log("  ⚠ Aucune clé extraite — le cours est peut-être déjà en anglais ou sans texte narratif");
      return;
    }
  } else {
    keyCount = Object.keys(fr[`cours${num}`].narrative).length;
  }

  // ── Parsing MODIFIED_TSX ──────────────────────────────────────────────────
  const tsxMatch = raw.match(/<MODIFIED_TSX>\s*([\s\S]*?)\s*<\/MODIFIED_TSX>/);
  if (!tsxMatch) {
    console.error(`  ✗ <MODIFIED_TSX> absent. Réponse sauvegardée dans ${debugOut}`);
    return;
  }

  const modifiedTsx = tsxMatch[1].trim();

  // Validation basique
  if (!modifiedTsx.includes('"use client"') && !modifiedTsx.includes("'use client'")) {
    console.error('  ✗ TSX modifié ne contient pas "use client" — sortie suspecte, ignorée');
    return;
  }
  if (!modifiedTsx.includes('export default')) {
    console.error('  ✗ TSX modifié ne contient pas "export default" — incomplet');
    return;
  }
  if (modifiedTsx.length < 4000) {
    console.error(`  ✗ TSX modifié trop court (${modifiedTsx.length} chars) — sortie vide ?`);
    return;
  }
  // Note: file can be shorter than original when long FR strings are replaced with short key refs
  const ratio = modifiedTsx.length / tsxSrc.length;
  if (ratio < 0.25) {
    console.error(`  ✗ TSX modifié suspect (${(ratio*100).toFixed(0)}% de l'original) — tronqué ?`);
    return;
  }

  // ── Écriture ───────────────────────────────────────────────────────────────

  // Messages (only in full mode — TSX-only mode skips key injection)
  if (!tsxOnlyMode && keys) {
    const en = JSON.parse(readFileSync(EN_PATH, "utf8"));
    const frFresh = JSON.parse(readFileSync(FR_PATH, "utf8"));
    if (!frFresh[`cours${num}`]) {
      console.warn(`  ⚠ "cours${num}" absent de fr.json — clés narrative non injectées`);
    } else {
      frFresh[`cours${num}`].narrative = keys.fr;
      en[`cours${num}`].narrative      = keys.en;
      writeFileSync(FR_PATH, JSON.stringify(frFresh, null, 2) + "\n", "utf8");
      writeFileSync(EN_PATH, JSON.stringify(en,      null, 2) + "\n", "utf8");
      console.log(`  ✓ messages : ${keyCount} clés injectées`);
    }
  } else if (tsxOnlyMode) {
    console.log(`  ✓ messages : ${keyCount} clés déjà en place — inchangées`);
  }

  // TSX
  writeFileSync(tsxPath, modifiedTsx, "utf8");
  console.log(`  ✓ Cours${num}.tsx écrit`);
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error("Erreur : variable ANTHROPIC_API_KEY manquante.");
    console.error("  export ANTHROPIC_API_KEY=sk-ant-...");
    process.exit(1);
  }

  const courses = Array.from({ length: END - START + 1 }, (_, i) => START + i);

  console.log("═══════════════════════════════════════════════════════");
  console.log(` Harmonia — Traduction narrative  (${MODEL})`);
  console.log(` Cours : ${START}–${END}   ${DRY ? "[DRY RUN]" : ""}`);
  console.log(` Coût estimé : ~$${(courses.length * 0.45).toFixed(2)} total`);
  console.log("═══════════════════════════════════════════════════════\n");

  let totalCost = 0;

  for (const num of courses) {
    console.log(`\n── Cours ${num} ──────────────────────────────────────`);
    const t0 = Date.now();
    try {
      await processCours(num);
    } catch (err) {
      console.error(`  ✗ Erreur fatale cours ${num} :`, err.message);
    }
    console.log(`  durée : ${((Date.now() - t0) / 1000).toFixed(1)}s`);

    // Pause inter-cours pour éviter le rate limiting
    if (num < END) await sleep(4000);
  }

  console.log("\n═══════════════════════════════════════════════════════");
  console.log(" Terminé. Prochaines étapes :");
  console.log("   npx tsc --noEmit");
  console.log("   npm run build");
  console.log("   vercel --prod");
  console.log("═══════════════════════════════════════════════════════");
}

main().catch(err => {
  console.error("Erreur non gérée :", err);
  process.exit(1);
});

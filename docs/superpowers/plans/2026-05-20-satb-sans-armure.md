# SATB Sans Armure — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a "sans armure" toggle to all SATB exercises and the generator, removing the key-signature from the staff and enabling real-time validation of missing accidentals.

**Architecture:** A new pure-data utility `src/lib/key-accidentals.ts` exports the circle-of-fifths accidentals map and a hint-string helper; `HarmoniaEditor` gains a `showKeySignature` prop and an extended `validateSATB` that emits `missing_accidental` warnings; `GenerateurSATB` and `ExerciceContent` each add a local `showKS` toggle that passes the prop down, with `ExerciceContent`'s toggle gated behind `plan !== "free"`; the exercise page server component is wired up to fetch and forward the user's plan.

**Tech Stack:** React 18, Next.js App Router, TypeScript, VexFlow v5 (via `VexFlowScore`), Clerk (`auth()`), inline styles only.

---

## Context you must know before touching any file

### Key files and their roles

| File | Role |
|---|---|
| `src/lib/key-accidentals.ts` | NEW — pure data, circle-of-fifths map |
| `src/components/HarmoniaEditor.tsx` | SATB editor; `validateSATB()` lives here |
| `src/components/VexFlowScore.tsx` | VexFlow rendering; `keySignature` controls the staff armure |
| `src/components/GenerateurSATB.tsx` | Generator UI; already has `plan` prop |
| `src/components/ExerciceContent.tsx` | Wraps HarmoniaEditor for cours exercises |
| `src/app/[locale]/cours/[id]/exercices/[exerciceId]/page.tsx` | Server component; passes data to ExerciceContent |

### How `keySignature` flows today

```
ExercicePage (server) ──── keySignature ──▶ ExerciceContent ──▶ HarmoniaEditor ──▶ GrandStaffSATB ──▶ VexFlowScore
GenerateurSATB ──────────── tonalite.replace("m","") ──▶ HarmoniaEditor ──▶ ...
```

`VexFlowScore` calls `stave.addKeySignature(key)` on the first measure only when `keySignature` is truthy. Passing `undefined` removes the armure entirely — no VexFlow changes needed.

### How `validateSATB` works today

```typescript
function validateSATB(measures: Measure[]): ValidationError[]
```

Called inside a `useEffect([measures])` and stored in `errors` state. Errors drive the red/yellow feedback panel below the staff. We will extend the signature to `validateSATB(measures, keySignature?, checkAccidentals?)`.

### Plan/auth pattern

`GenerateurSATBPage` shows how the pattern works:
```typescript
const { userId } = await auth();            // Clerk — null if not logged in
const plan = await getUserPlan(userId);     // "free" | "etudiant" | "pro"
```
`getUserPlan` is at `src/lib/progression.ts`. It accepts a userId string.

### 100% inline styles rule

Zero Tailwind, zero CSS modules. All styles are inline `style={{}}` objects.

---

## Task 1 — Create `src/lib/key-accidentals.ts`

**Files:**
- Create: `src/lib/key-accidentals.ts`

- [ ] **Step 1: Create the file**

```typescript
// src/lib/key-accidentals.ts

export interface KSEntry {
  note: string;   // Base letter: "F", "C", "G", etc.
  acc: "#" | "b";
  frName: string; // French display name: "Fa#", "Sib"
}

/**
 * Circle-of-fifths accidentals for each key signature string.
 * Includes both major keys and natural-minor keys (relative minor = same accidentals as relative major).
 * Used for:
 *  1. "sans armure" real-time validation in HarmoniaEditor
 *  2. The hint banner in GenerateurSATB and ExerciceContent
 */
export const KEY_ACCIDENTALS: Record<string, KSEntry[]> = {
  // ── Major keys ───────────────────────────────────────────────────────────────
  "C":  [],
  "G":  [{ note:"F", acc:"#", frName:"Fa#" }],
  "D":  [{ note:"F", acc:"#", frName:"Fa#" }, { note:"C", acc:"#", frName:"Do#" }],
  "A":  [{ note:"F", acc:"#", frName:"Fa#" }, { note:"C", acc:"#", frName:"Do#" }, { note:"G", acc:"#", frName:"Sol#" }],
  "E":  [{ note:"F", acc:"#", frName:"Fa#" }, { note:"C", acc:"#", frName:"Do#" }, { note:"G", acc:"#", frName:"Sol#" }, { note:"D", acc:"#", frName:"Ré#" }],
  "B":  [{ note:"F", acc:"#", frName:"Fa#" }, { note:"C", acc:"#", frName:"Do#" }, { note:"G", acc:"#", frName:"Sol#" }, { note:"D", acc:"#", frName:"Ré#" }, { note:"A", acc:"#", frName:"La#" }],
  "F#": [{ note:"F", acc:"#", frName:"Fa#" }, { note:"C", acc:"#", frName:"Do#" }, { note:"G", acc:"#", frName:"Sol#" }, { note:"D", acc:"#", frName:"Ré#" }, { note:"A", acc:"#", frName:"La#" }, { note:"E", acc:"#", frName:"Mi#" }],
  "Gb": [{ note:"B", acc:"b", frName:"Sib" }, { note:"E", acc:"b", frName:"Mib" }, { note:"A", acc:"b", frName:"Lab" }, { note:"D", acc:"b", frName:"Réb" }, { note:"G", acc:"b", frName:"Solb" }, { note:"C", acc:"b", frName:"Dob" }],
  "F":  [{ note:"B", acc:"b", frName:"Sib" }],
  "Bb": [{ note:"B", acc:"b", frName:"Sib" }, { note:"E", acc:"b", frName:"Mib" }],
  "Eb": [{ note:"B", acc:"b", frName:"Sib" }, { note:"E", acc:"b", frName:"Mib" }, { note:"A", acc:"b", frName:"Lab" }],
  "Ab": [{ note:"B", acc:"b", frName:"Sib" }, { note:"E", acc:"b", frName:"Mib" }, { note:"A", acc:"b", frName:"Lab" }, { note:"D", acc:"b", frName:"Réb" }],
  "Db": [{ note:"B", acc:"b", frName:"Sib" }, { note:"E", acc:"b", frName:"Mib" }, { note:"A", acc:"b", frName:"Lab" }, { note:"D", acc:"b", frName:"Réb" }, { note:"G", acc:"b", frName:"Solb" }],
  "Cb": [{ note:"B", acc:"b", frName:"Sib" }, { note:"E", acc:"b", frName:"Mib" }, { note:"A", acc:"b", frName:"Lab" }, { note:"D", acc:"b", frName:"Réb" }, { note:"G", acc:"b", frName:"Solb" }, { note:"C", acc:"b", frName:"Dob" }],
  // ── Natural minor keys (same accidentals as relative major) ──────────────────
  "Am":  [],
  "Em":  [{ note:"F", acc:"#", frName:"Fa#" }],
  "Bm":  [{ note:"F", acc:"#", frName:"Fa#" }, { note:"C", acc:"#", frName:"Do#" }],
  "F#m": [{ note:"F", acc:"#", frName:"Fa#" }, { note:"C", acc:"#", frName:"Do#" }, { note:"G", acc:"#", frName:"Sol#" }],
  "C#m": [{ note:"F", acc:"#", frName:"Fa#" }, { note:"C", acc:"#", frName:"Do#" }, { note:"G", acc:"#", frName:"Sol#" }, { note:"D", acc:"#", frName:"Ré#" }],
  "G#m": [{ note:"F", acc:"#", frName:"Fa#" }, { note:"C", acc:"#", frName:"Do#" }, { note:"G", acc:"#", frName:"Sol#" }, { note:"D", acc:"#", frName:"Ré#" }, { note:"A", acc:"#", frName:"La#" }],
  "Dm":  [{ note:"B", acc:"b", frName:"Sib" }],
  "Gm":  [{ note:"B", acc:"b", frName:"Sib" }, { note:"E", acc:"b", frName:"Mib" }],
  "Cm":  [{ note:"B", acc:"b", frName:"Sib" }, { note:"E", acc:"b", frName:"Mib" }, { note:"A", acc:"b", frName:"Lab" }],
  "Fm":  [{ note:"B", acc:"b", frName:"Sib" }, { note:"E", acc:"b", frName:"Mib" }, { note:"A", acc:"b", frName:"Lab" }, { note:"D", acc:"b", frName:"Réb" }],
  "Bbm": [{ note:"B", acc:"b", frName:"Sib" }, { note:"E", acc:"b", frName:"Mib" }, { note:"A", acc:"b", frName:"Lab" }, { note:"D", acc:"b", frName:"Réb" }, { note:"G", acc:"b", frName:"Solb" }],
  "Ebm": [{ note:"B", acc:"b", frName:"Sib" }, { note:"E", acc:"b", frName:"Mib" }, { note:"A", acc:"b", frName:"Lab" }, { note:"D", acc:"b", frName:"Réb" }, { note:"G", acc:"b", frName:"Solb" }, { note:"C", acc:"b", frName:"Dob" }],
};

/**
 * Returns the hint string for the "sans armure" banner.
 * Tries `key` first, then strips trailing "m" as fallback (handles pre-existing GenerateurSATB .replace("m","")).
 * Returns null for C major / A minor (no accidentals needed).
 */
export function getKeyAccidentalHint(key: string): string | null {
  const entries = KEY_ACCIDENTALS[key] ?? KEY_ACCIDENTALS[key.replace(/m$/, "")] ?? [];
  if (entries.length === 0) return null;
  return entries.map(e => `${e.note} → ${e.frName}`).join("  ·  ");
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```powershell
cd "c:\Users\Dany Duboille\Desktop\harmonia"
npx tsc --noEmit
```

Expected: exit 0, no errors.

- [ ] **Step 3: Commit**

```powershell
git add src/lib/key-accidentals.ts
git commit -m "feat: key-accidentals utility — circle of fifths map + hint helper"
```

---

## Task 2 — Extend `HarmoniaEditor.tsx`

**Files:**
- Modify: `src/components/HarmoniaEditor.tsx`

Context: the file is 795 lines. The changes are surgical — no restructuring. Read the full file before editing to get exact line numbers, then apply each diff.

- [ ] **Step 1: Add `"missing_accidental"` to ValidationError.type**

Find `interface ValidationError` (around line 129). Change the `type` union from:

```typescript
type: "parallel_fifth" | "parallel_octave" | "spacing" | "range" | "crossing" | "leading_tone" | "seventh";
```

to:

```typescript
type: "parallel_fifth" | "parallel_octave" | "spacing" | "range" | "crossing" | "leading_tone" | "seventh" | "missing_accidental";
```

- [ ] **Step 2: Add import for `KEY_ACCIDENTALS`**

After the existing React import block (after `import PianoPlayer, ...`), add:

```typescript
import { KEY_ACCIDENTALS } from "@/lib/key-accidentals";
```

- [ ] **Step 3: Extend `validateSATB` signature and add missing-accidental logic**

Change the function signature from:
```typescript
function validateSATB(measures: Measure[]): ValidationError[] {
```
to:
```typescript
function validateSATB(measures: Measure[], keySignature?: string, checkAccidentals?: boolean): ValidationError[] {
```

Inside the `for (let m = 0; m < measures.length; m++)` loop, add the missing-accidental block **after** the existing parallel-fifths/octaves block (after the closing `}` of `if (m > 0) {...}`), still inside the outer `for` loop:

```typescript
    // 5. Altérations manquantes (mode sans armure)
    if (checkAccidentals && keySignature) {
      const accReqs = KEY_ACCIDENTALS[keySignature] ?? KEY_ACCIDENTALS[keySignature.replace(/m$/, "")] ?? [];
      if (accReqs.length > 0) {
        VOICES.forEach(v => {
          const n = cur[v];
          if (!n.name) return;
          const baseLetter = n.name[0];
          const accsInName = n.name.slice(1); // "#", "b", "##", "bb", "", etc.
          const req = accReqs.find(r => r.note === baseLetter);
          if (!req) return;
          const hasReqAcc = req.acc === "#" ? accsInName.includes("#") : accsInName.includes("b");
          if (!hasReqAcc) {
            errors.push({
              type: "missing_accidental",
              measure: m,
              message: `${VOICE_LABELS[v]} : ${n.name}${n.octave} naturel — en mode sans armure, utilisez ${req.frName} (m.${m + 1})`,
              severity: "warning",
            });
          }
        });
      }
    }
```

- [ ] **Step 4: Add `showKeySignature` to `HarmoniaEditorProps`**

Find `HarmoniaEditorProps` interface (around line 50). Add the new prop after `keySignature?`:

```typescript
export interface HarmoniaEditorProps {
  title?: string;
  subtitle?: string;
  measures?: string[];
  keySignature?: string;
  showKeySignature?: boolean;        // ← add this line
  initialNotes?: Partial<Record<Voice, (NoteEntry | null)[]>>;
  solution?: Record<Voice, NoteEntry>[];
  onComplete?: (measures: Measure[]) => void;
}
```

- [ ] **Step 5: Destructure `showKeySignature` in the component**

Find `export default function HarmoniaEditor({` (around line 291). Add `showKeySignature = true` to the destructuring:

```typescript
export default function HarmoniaEditor({
  title = "Exercice de conduite de voix",
  subtitle,
  measures: measureLabels = ["I", "IV", "V", "I"],
  keySignature = "C",
  showKeySignature = true,
  initialNotes,
  solution,
  onComplete,
}: HarmoniaEditorProps) {
```

- [ ] **Step 6: Update the `useEffect` that calls `validateSATB`**

Find the useEffect that calls validateSATB (around line 315):

```typescript
  useEffect(() => {
    const errs = validateSATB(measures);
    setErrors(errs);
  }, [measures]);
```

Replace with:

```typescript
  useEffect(() => {
    const errs = validateSATB(measures, keySignature, !showKeySignature);
    setErrors(errs);
  }, [measures, keySignature, showKeySignature]);
```

- [ ] **Step 7: Conditionally pass `keySignature` to GrandStaffSATB**

Find the `<VexFlowScoreClient` render (around line 521):

```tsx
          <VexFlowScoreClient
            treble={treble}
            bass={bass}
            keySignature={keySignature}
            width={700}
            label={measureLabels.map((l,i)=>`Mesure ${i+1}: ${l}`).join(" · ")}
          />
```

Replace `keySignature={keySignature}` with:

```tsx
            keySignature={showKeySignature ? keySignature : undefined}
```

- [ ] **Step 8: Verify TypeScript compiles**

```powershell
npx tsc --noEmit
```

Expected: exit 0, no errors.

- [ ] **Step 9: Commit**

```powershell
git add src/components/HarmoniaEditor.tsx
git commit -m "feat: HarmoniaEditor — showKeySignature prop + missing_accidental validation"
```

---

## Task 3 — Add toggle to `GenerateurSATB.tsx`

**Files:**
- Modify: `src/components/GenerateurSATB.tsx`

Context: the file is 550 lines. The exercise display is in the second `return` block (after `if (step === "config") return (...)`). The `<HarmoniaEditor>` call is around line 450.

- [ ] **Step 1: Import `getKeyAccidentalHint`**

At the top of the file, after the existing imports, add:

```typescript
import { getKeyAccidentalHint } from "@/lib/key-accidentals";
```

- [ ] **Step 2: Add `showKS` state**

Inside the component, near the other `useState` declarations (around line 63–73), add:

```typescript
  const [showKS, setShowKS] = useState(true);
```

Also add `showKS` reset when generating a new exercise. Find the `generate` callback:

```typescript
  const generate = useCallback(() => {
    if (!template) return;
    const ex = generateSATBExercise(template, selectedKey, doigte);
    setExercise(ex);
    setResults(null);
    setScore(null);
    setStep("exercise");
  }, [template, selectedKey, doigte]);
```

Replace with:

```typescript
  const generate = useCallback(() => {
    if (!template) return;
    const ex = generateSATBExercise(template, selectedKey, doigte);
    setExercise(ex);
    setResults(null);
    setScore(null);
    setShowKS(true);
    setStep("exercise");
  }, [template, selectedKey, doigte]);
```

- [ ] **Step 3: Add the sans-armure toggle and hint banner in the exercise view**

In the exercise view section, find the `{/* Controls */}` div (around line 372). It contains the "▶ Écouter la solution" button, the mode selector, and the "↺ Regénérer" button. Add the sans-armure toggle as a new direct child of the controls flex container, after the regénérer button:

```tsx
          {/* Sans armure toggle */}
          <div style={{ display:"flex", gap:4, background:"#f4f1ec", borderRadius:8, padding:3 }}>
            {([true, false] as const).map(val => (
              <button key={String(val)} onClick={() => setShowKS(val)}
                style={{
                  padding:"5px 11px", borderRadius:6, fontSize:11, fontWeight:600, cursor:"pointer",
                  border:"none",
                  background: showKS === val ? "#fff" : "transparent",
                  color: showKS === val ? "#1a1a1a" : "#888",
                  boxShadow: showKS === val ? "0 1px 4px rgba(0,0,0,0.1)" : "none",
                  fontFamily:"system-ui, sans-serif",
                }}>
                {val ? "🎼 Avec armure" : "✏️ Sans armure"}
              </button>
            ))}
          </div>
```

- [ ] **Step 4: Add the hint banner below the controls div**

Immediately after the closing `</div>` of the controls div (and before the chord labels div `{/* Chord labels */}`), add:

```tsx
      {/* Sans armure warning + hint */}
      {!showKS && (() => {
        const hint = getKeyAccidentalHint(exercise.tonalite);
        return (
          <div style={{
            marginBottom:"1rem", padding:"10px 16px", borderRadius:10,
            background:"#FEF0D9", border:"0.5px solid #F5C77E",
            fontSize:12, color:"#744210", lineHeight:1.65,
            fontFamily:"system-ui, sans-serif",
          }}>
            <strong>Mode avancé — sans armure.</strong>{" "}
            Placez vous-même les altérations accidentelles sur chaque note.
            {hint && (
              <div style={{ marginTop:4 }}>
                Notes altérées en <strong>{keyLabel}</strong> :{" "}
                <strong>{hint}</strong>
              </div>
            )}
          </div>
        );
      })()}
```

- [ ] **Step 5: Pass `showKeySignature` to `<HarmoniaEditor>`**

Find the `<HarmoniaEditor` call (around line 450) and add the prop:

```tsx
        <HarmoniaEditor
          title={mode === "dictee" ? "Dictée SATB — Écoutez et recopiez" : mode === "basse" ? "Réalisez les voix intérieures" : "Réalisez la progression"}
          subtitle={`${exercise.template.nom} — ${keyLabel}`}
          measures={exercise.labels}
          keySignature={exercise.tonalite.replace("m","")}
          showKeySignature={showKS}
          initialNotes={initialNotes}
          solution={exercise.solution.map(m => ({
            soprano: { name: m.soprano.name as NoteName, octave: m.soprano.octave },
            alto:    { name: m.alto.name    as NoteName, octave: m.alto.octave    },
            tenor:   { name: m.tenor.name   as NoteName, octave: m.tenor.octave   },
            bass:    { name: m.bass.name    as NoteName, octave: m.bass.octave    },
          }))}
          onComplete={handleComplete}
        />
```

- [ ] **Step 6: Verify TypeScript compiles**

```powershell
npx tsc --noEmit
```

Expected: exit 0.

- [ ] **Step 7: Commit**

```powershell
git add src/components/GenerateurSATB.tsx
git commit -m "feat: GenerateurSATB — toggle sans armure + hint banner"
```

---

## Task 4 — Add plan-gated toggle to `ExerciceContent.tsx`

**Files:**
- Modify: `src/components/ExerciceContent.tsx`

Context: the file is 77 lines. The satb branch renders `<HarmoniaEditor>` directly. We need to wrap it in a `<div>` to add the toggle and banner above it.

- [ ] **Step 1: Add imports**

Add to the existing imports at top of file:

```typescript
import { useState } from "react";
import { getKeyAccidentalHint } from "@/lib/key-accidentals";
```

Note: `React` is already imported.

- [ ] **Step 2: Add `plan` to SATBData interface**

Find `interface SATBData` and add `plan?: string`:

```typescript
interface SATBData {
  type: "satb";
  exerciseId: string;
  coursId: number;
  title: string;
  subtitle?: string;
  measures: string[];
  keySignature: string;
  solution: any[];
  hint?: string;
  devoirId?: string;
  plan?: string;
}
```

- [ ] **Step 3: Add `showKS` state inside the component**

Inside `export default function ExerciceContent(props: ExerciceContentProps) {`, after the `useProgress` hook call, add:

```typescript
  const [showKS, setShowKS] = useState(true);
```

- [ ] **Step 4: Replace the satb branch render**

Find:

```typescript
  if (props.type === "satb") {
    return (
      <HarmoniaEditor
        title={props.title}
        subtitle={props.subtitle}
        measures={props.measures}
        keySignature={props.keySignature}
        solution={props.solution}
        onComplete={() => handleComplete(100)}
      />
    );
  }
```

Replace with:

```typescript
  if (props.type === "satb") {
    const canToggle = props.plan && props.plan !== "free";
    const hint = getKeyAccidentalHint(props.keySignature);
    return (
      <div>
        {canToggle && (
          <div style={{ display:"flex", justifyContent:"flex-end", gap:4, marginBottom:8, fontFamily:"system-ui, sans-serif" }}>
            {([true, false] as const).map(val => (
              <button key={String(val)} onClick={() => setShowKS(val)}
                style={{
                  padding:"5px 12px", borderRadius:20, fontSize:11, fontWeight:600, cursor:"pointer",
                  border:`1.5px solid ${showKS === val ? "#5C3D6E" : "#e0dbd3"}`,
                  background: showKS === val ? "#5C3D6E" : "#fff",
                  color: showKS === val ? "#fff" : "#666",
                }}>
                {val ? "🎼 Avec armure" : "✏️ Sans armure"}
              </button>
            ))}
          </div>
        )}
        {!showKS && hint && (
          <div style={{
            marginBottom:12, padding:"10px 14px", borderRadius:10,
            background:"#FEF0D9", border:"0.5px solid #F5C77E",
            fontSize:12, color:"#744210", lineHeight:1.65,
            fontFamily:"system-ui, sans-serif",
          }}>
            <strong>Mode avancé — sans armure.</strong>{" "}
            Placez vous-même les altérations sur chaque note.{" "}
            Notes altérées : <strong>{hint}</strong>
          </div>
        )}
        <HarmoniaEditor
          title={props.title}
          subtitle={props.subtitle}
          measures={props.measures}
          keySignature={props.keySignature}
          showKeySignature={showKS}
          solution={props.solution}
          onComplete={() => handleComplete(100)}
        />
      </div>
    );
  }
```

- [ ] **Step 5: Verify TypeScript compiles**

```powershell
npx tsc --noEmit
```

Expected: exit 0.

- [ ] **Step 6: Commit**

```powershell
git add src/components/ExerciceContent.tsx
git commit -m "feat: ExerciceContent — sans armure toggle (plan-gated Étudiant/Pro)"
```

---

## Task 5 — Wire up auth + plan in `ExercicePage`

**Files:**
- Modify: `src/app/[locale]/cours/[id]/exercices/[exerciceId]/page.tsx`

Context: this is a Next.js Server Component (no `"use client"`). It already imports `auth` from Clerk? Check — if it doesn't, add the import. `getUserPlan` is at `src/lib/progression.ts`.

- [ ] **Step 1: Read the current file**

Read `src/app/[locale]/cours/[id]/exercices/[exerciceId]/page.tsx` to get the current imports block (it should be around 127 lines).

- [ ] **Step 2: Add imports**

At the top of the file, after existing imports, add:

```typescript
import { auth } from "@clerk/nextjs/server";
import { getUserPlan } from "@/lib/progression";
```

- [ ] **Step 3: Add plan resolution inside the page function**

Find the start of `export default async function ExercicePage({ params, searchParams }: Props) {`. After the destructuring of `params` and `searchParams`, add plan resolution before the `ALL_EXERCISES.find(...)` call:

```typescript
  const { userId } = await auth();
  const plan = userId ? await getUserPlan(userId) : "free";
```

- [ ] **Step 4: Pass `plan` to ExerciceContent for satb type**

Find the satb branch inside the JSX:

```tsx
          {exercise.type === "satb" ? (
            <ExerciceContent
              type="satb"
              exerciseId={exercise.id}
              coursId={exercise.cours}
              title={exercise.title}
              subtitle={(exercise as any).subtitle}
              measures={(exercise as any).measures}
              keySignature={(exercise as any).keySignature}
              solution={(exercise as any).solution}
              hint={(exercise as any).hint}
              devoirId={devoirId}
            />
```

Add `plan={plan}` as a prop:

```tsx
          {exercise.type === "satb" ? (
            <ExerciceContent
              type="satb"
              exerciseId={exercise.id}
              coursId={exercise.cours}
              title={exercise.title}
              subtitle={(exercise as any).subtitle}
              measures={(exercise as any).measures}
              keySignature={(exercise as any).keySignature}
              solution={(exercise as any).solution}
              hint={(exercise as any).hint}
              devoirId={devoirId}
              plan={plan}
            />
```

- [ ] **Step 5: Verify TypeScript compiles**

```powershell
npx tsc --noEmit
```

Expected: exit 0.

- [ ] **Step 6: Commit**

```powershell
git add "src/app/[locale]/cours/[id]/exercices/[exerciceId]/page.tsx"
git commit -m "feat: ExercicePage — forward user plan to ExerciceContent for sans-armure gate"
```

---

## Task 6 — Build verification

**Files:** none (verification only)

- [ ] **Step 1: Full TypeScript check**

```powershell
npx tsc --noEmit
```

Expected: exit 0, zero errors.

- [ ] **Step 2: Production build**

```powershell
npm run build
```

Expected: exit 0. Note any warnings (acceptable) vs errors (must fix).

- [ ] **Step 3: Manual verification checklist**

Start dev server: `npm run dev`. Open `http://localhost:3000/fr/generateur-satb`.

**Generateur — avec armure (default):**
1. Sélectionner progression II–V–I, tonalité Sol M, générer.
2. La portée affiche l'armure (1 dièse — Fa#). ✓
3. Le toggle "🎼 Avec armure" est actif (fond blanc), "✏️ Sans armure" est gris.

**Generateur — sans armure:**
4. Cliquer "✏️ Sans armure".
5. La portée se met à jour : l'armure disparaît (aucun dièse).
6. La bannière orange apparaît : "Mode avancé — sans armure. Notes altérées en Sol majeur : F → Fa#"
7. Saisir un Fa naturel dans la basse → avertissement temps réel "Basse : F2 naturel — en mode sans armure, utilisez Fa# (m.1)"
8. Repasser sur "🎼 Avec armure" → armure revient, avertissement disparaît.

**Cours exercice SATB (plan Pro/Étudiant) :**
9. Se connecter avec un compte Pro. Aller sur un exercice SATB (`/cours/2/exercices/...`).
10. Les pills "🎼 Avec armure" / "✏️ Sans armure" apparaissent en haut à droite.

**Cours exercice SATB (plan Free) :**
11. Se déconnecter (ou utiliser compte gratuit). Aller sur le même exercice.
12. Les pills ne sont pas affichées (toggle caché pour plan free).

- [ ] **Step 4: If any error, fix and re-run steps 1–2**

- [ ] **Step 5: Commit fix if needed, then push**

```powershell
git add -A
git commit -m "fix: ..."  # only if a fix was needed
git push origin main
```

---

## Self-Review

**Spec coverage:**
- ✅ Prop `showKeySignature?: boolean` (default true) sur HarmoniaEditor → Task 2
- ✅ Si false : armure SVG retirée → Task 2 step 7 (keySignature conditionnel)
- ✅ Toggle [🎼 Avec armure] / [✏️ Sans armure] dans GenerateurSATB → Task 3
- ✅ Avertissement "Mode avancé — placez vous-même les altérations" → Task 3 step 4
- ✅ Altérations attendues listées ("En Sol majeur sans armure : Fa → Fa#") → Task 3 step 4 + `getKeyAccidentalHint`
- ✅ Même toggle dans exercices SATB existants → Task 4
- ✅ Toggle visible uniquement Étudiant/Pro → Task 4 step 4 (`canToggle`)
- ✅ Feedback adapté : moteur de validation vérifie altérations accidentelles → Task 2 step 3
- ✅ 100% inline styles, zéro Tailwind → vérifié dans chaque task
- ✅ `npm run build` + `tsc --noEmit` avant commit → Task 6

**Type consistency:**
- `KSEntry` défini dans Task 1, utilisé implicitement dans `KEY_ACCIDENTALS` valeurs — ok
- `getKeyAccidentalHint(key: string): string | null` utilisé dans Task 3 et Task 4 — signatures cohérentes
- `showKeySignature?: boolean` dans `HarmoniaEditorProps` (Task 2) = prop passée dans Task 3 et Task 4 — ok
- `plan?: string` dans `SATBData` (Task 4) passé depuis `ExercicePage` (Task 5) — ok

**Placeholder scan:** aucun TBD, aucun "implement later", tout le code est complet.

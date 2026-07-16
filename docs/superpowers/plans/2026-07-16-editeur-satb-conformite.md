# Éditeur SATB : conformité et résolutions — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Le moteur des exercices SATB vérifie que l'élève réalise l'HARMONIE DEMANDÉE (accord + basse de la solution, dispositions libres), contrôle les résolutions de sensible et de 7e au barème d'école, signale les directes S–B, et la note devient graduée (100 − 10 par avertissement, plancher 60).

**Architecture:** `validateSATB` gagne un 4e paramètre optionnel `solution` (zéro régression sans lui) ; conformité et complétude précalculées par mesure ; règles de résolution armées par `identifyChordFromNotes` (import de `harmonic-analysis`, pur) sur les seules mesures conformes à fonction dominante. `HarmoniaEditor` passe la solution ; `ExerciceContent` recalcule la note via un helper pur `noteExercice`. Nouvelles clés i18n dans les 6 langues.

**Tech Stack:** TypeScript strict, React 19, next-intl, vitest.

---

## Notes transverses (à lire avant de commencer)

- **Ne JAMAIS `npx tsc --noEmit`** (OOM). Vérif types via `NODE_OPTIONS="--max-old-space-size=8192" npm run build`.
- Tests : `npx vitest run <fichier>` ; suite complète `npx vitest run` (396 verts au départ).
- `src/lib/satb-rules.ts` (213 l.) : `validateSATB(measures, keySignature?, checkAccidentals?)`,
  types `Measure = Record<Voice, NoteEntry>`, `NoteEntry = { name: NoteName | null; octave }`,
  helpers `noteName` (normalise bémols), `noteToMidi(name, octave)`, `VOICES`.
- `src/lib/satb-rules.test.ts` : helper `chord(bass, tenor, alto, soprano)` (notes « C3 »…),
  helper `typesOf(errors)`. 17 tests existants.
- `identifyChordFromNotes(pcs: number[], bassPc?: number): Chord | null` dans
  `src/lib/harmonic-analysis.ts` ; `Chord.rootPc` est la fondamentale (pitch class).
  harmonic-analysis n'importe PAS satb-rules : aucun cycle.
- i18n : namespace `satb` (`const t = useTranslations("satb")` dans HarmoniaEditor l. ~192),
  messages dans `messages/{fr,en,de,es,it,pt}.json` sous `satb.errors.*`. Les clés `leading_tone`
  et `seventh` EXISTENT déjà dans les 6 langues (gabarit `(m.{from})`) — ne pas les recréer.
- `HarmoniaEditor.tsx` : appel au validateur l. ~258 (`const errs = validateSATB(measures, keySignature, !showKeySignature);`),
  prop `solution?: Record<Voice, NoteEntry>[]` déjà reçue, `hasErrors` filtre déjà
  `severity === "error"`, bouton en dur « Terminer ✓ » l. ~745.
- `ExerciceContent.tsx` : branche satb l. ~60, `onComplete={() => handleComplete(100)}`,
  `props.solution: any[]`, `showKS` (armure affichée ou non).

---

## Task 1 : conformité à la solution (`wrong_chord` / `wrong_bass`)

**Files:**
- Modify: `src/lib/satb-rules.ts`
- Test: `src/lib/satb-rules.test.ts`

- [ ] **Step 1 : Écrire les tests**

Ajouter dans `src/lib/satb-rules.test.ts` :

```ts
describe("validateSATB — conformité à la solution", () => {
  // Solution : V – I en do majeur (G au V, C fondamentale au I, triades complètes).
  const SOLUTION = [
    chord("G2", "D3", "B3", "G4"),
    chord("C3", "G3", "C4", "E4"),
  ];

  it("accord hors sujet → wrong_chord (error)", () => {
    const copie = [
      chord("C3", "E3", "G3", "C4"), // Do majeur au lieu de Sol
      chord("C3", "G3", "C4", "E4"),
    ];
    const errs = validateSATB(copie, "C", false, SOLUTION);
    const wc = errs.find(e => e.type === "wrong_chord");
    expect(wc).toBeDefined();
    expect(wc!.severity).toBe("error");
    expect(wc!.params.from).toBe(1);
  });
  it("bon accord, mauvaise basse (renversement) → wrong_bass, PAS wrong_chord", () => {
    const copie = [
      chord("B2", "D3", "G3", "G4"), // V6 au lieu de V à l'état fondamental
      chord("C3", "G3", "C4", "E4"),
    ];
    const errs = validateSATB(copie, "C", false, SOLUTION);
    expect(typesOf(errs)).toContain("wrong_bass");
    expect(typesOf(errs)).not.toContain("wrong_chord");
    expect(errs.find(e => e.type === "wrong_bass")!.params.expected).toBe("G");
  });
  it("réalisation ALTERNATIVE valide (autres octaves/doublures, même accord même basse) → conforme", () => {
    const copie = [
      chord("G2", "B3", "D4", "G4"), // autre disposition du V
      chord("C3", "G3", "E4", "C5"), // autre disposition du I (mêmes pitch classes, même basse)
    ];
    // NB : d'autres règles (ex. octaves parallèles) peuvent parler sur cette copie —
    // seules les erreurs de CONFORMITÉ sont sous test ici.
    const errs = validateSATB(copie, "C", false, SOLUTION);
    expect(typesOf(errs)).not.toContain("wrong_chord");
    expect(typesOf(errs)).not.toContain("wrong_bass");
  });
  it("mesure incomplète → la conformité se tait", () => {
    const copie = [
      { ...chord("C3", "E3", "G3", "C4"), soprano: { name: null, octave: 4 } } as Measure,
      chord("C3", "E3", "C4", "E4"),
    ];
    const errs = validateSATB(copie, "C", false, SOLUTION);
    expect(typesOf(errs)).not.toContain("wrong_chord");
  });
  it("sans solution : comportement inchangé (aucune erreur de conformité possible)", () => {
    const copie = [chord("C3", "E3", "G3", "C4")];
    expect(typesOf(validateSATB(copie, "C", false))).not.toContain("wrong_chord");
  });
});
```

- [ ] **Step 2 : Lancer — échoue** — Run: `npx vitest run src/lib/satb-rules.test.ts` → FAIL (4e argument inconnu / wrong_chord absent).

- [ ] **Step 3 : Implémenter**

Dans `src/lib/satb-rules.ts` :

1. Étendre l'union :

```ts
export type ValidationErrorType =
  | "parallel_fifth"
  | "parallel_octave"
  | "spacing"
  | "range"
  | "crossing"
  | "leading_tone"
  | "seventh"
  | "missing_accidental"
  | "cross_relation"
  | "wrong_chord"
  | "wrong_bass"
  | "doubled_leading_tone"
  | "hidden_fifth"
  | "hidden_octave";
```

2. Ajouter les helpers (après `noteToMidi`) :

```ts
/** Pitch class (0-11) d'une case remplie. */
function pcOf(n: NoteEntry): number {
  return ((noteToMidi(noteName(n.name!), n.octave) % 12) + 12) % 12;
}

/** Une mesure est complète quand les quatre voix sont posées. */
function estComplete(m: Measure): boolean {
  return VOICES.every(v => m[v].name !== null);
}

/** L'ensemble des pitch classes d'une mesure complète. */
function pcsDe(m: Measure): Set<number> {
  return new Set(VOICES.map(v => pcOf(m[v])));
}
```

3. Étendre la signature et précalculer complétude/conformité EN TÊTE de `validateSATB`
(avant la boucle) :

```ts
export function validateSATB(
  measures: Measure[],
  keySignature?: string,
  checkAccidentals?: boolean,
  solution?: Measure[],
): ValidationError[] {
  const errors: ValidationError[] = [];

  // ── Conformité à la solution : précalculée par mesure (les règles de résolution
  //    ne parlent que sur des mesures conformes, pour éviter les cascades absurdes).
  const conforme: boolean[] = measures.map((cur, m) => {
    const sol = solution?.[m];
    if (!sol || !estComplete(cur) || !estComplete(sol)) return false;
    const a = pcsDe(cur), b = pcsDe(sol);
    return a.size === b.size && [...a].every(pc => b.has(pc)) && pcOf(cur.bass) === pcOf(sol.bass);
  });
```

4. Dans la boucle existante (à la fin du corps, après le bloc altérations), la règle :

```ts
    // 6. Conformité à l'harmonie demandée (mesures complètes seulement)
    const sol = solution?.[m];
    if (sol && estComplete(cur) && estComplete(sol) && !conforme[m]) {
      const a = pcsDe(cur), b = pcsDe(sol);
      const memeAccord = a.size === b.size && [...a].every(pc => b.has(pc));
      if (!memeAccord) {
        errors.push({ type: "wrong_chord", measure: m, severity: "error", params: { from: m + 1 } });
      } else {
        errors.push({ type: "wrong_bass", measure: m, severity: "error", params: { from: m + 1, expected: sol.bass.name! } });
      }
    }
```

- [ ] **Step 4 : Lancer — passe** — Run: `npx vitest run src/lib/satb-rules.test.ts` → PASS (17 existants + 5 nouveaux = 22).

- [ ] **Step 5 : Commit**

```bash
git add src/lib/satb-rules.ts src/lib/satb-rules.test.ts
git commit -m "feat(satb): conformite a l'harmonie demandee — wrong_chord / wrong_bass"
```

---

## Task 2 : sensible — résolution et doublure

**Files:**
- Modify: `src/lib/satb-rules.ts`
- Test: `src/lib/satb-rules.test.ts`

- [ ] **Step 1 : Écrire les tests**

```ts
describe("validateSATB — la sensible (barème d'école)", () => {
  // V7 – I en do majeur ; la sensible (B) est au soprano. Le I est une triade
  // COMPLÈTE : les copies fautives doivent rester CONFORMES (mêmes pitch classes,
  // même basse), sinon les règles de résolution se taisent par construction.
  const SOL_V7_I = [
    chord("G2", "F3", "D4", "B4"),
    chord("C3", "E3", "G4", "C5"),
  ];

  it("sensible au soprano montant à la tonique → rien", () => {
    const errs = validateSATB(SOL_V7_I, "C", false, SOL_V7_I);
    expect(typesOf(errs)).not.toContain("leading_tone");
  });
  it("sensible au soprano NE montant PAS → leading_tone (error)", () => {
    const copie = [
      chord("G2", "F3", "D4", "B4"),
      chord("C3", "E3", "C4", "G4"), // {do,mi,sol} basse do : CONFORME ; B4 → G4 : la sensible saute
    ];
    const errs = validateSATB(copie, "C", false, SOL_V7_I);
    const lt = errs.find(e => e.type === "leading_tone");
    expect(lt).toBeDefined();
    expect(lt!.severity).toBe("error"); // voix extrême (même la descente à la dominante y est interdite)
  });
  it("sensible à l'ALTO descendant à la dominante (frustrée) → rien", () => {
    const sol = [
      chord("G2", "D3", "B3", "F4"),   // sensible à l'alto
      chord("C3", "E3", "G3", "E4"),   // B3 → G3 : descente à la dominante
    ];
    const errs = validateSATB(sol, "C", false, sol);
    expect(typesOf(errs)).not.toContain("leading_tone");
  });
  it("sensible à l'alto sautant AILLEURS → leading_tone (warning)", () => {
    const sol = [
      chord("G2", "D3", "B3", "F4"),
      chord("C3", "E3", "E4", "C5"),   // B3 → E4 : ni tonique, ni tenue, ni dominante
    ];
    const errs = validateSATB(sol, "C", false, sol);
    const lt = errs.find(e => e.type === "leading_tone");
    expect(lt).toBeDefined();
    expect(lt!.severity).toBe("warning"); // voix interne
  });
  it("cadence rompue V→VI : la sensible monte quand même → rien", () => {
    const sol = [
      chord("G2", "D3", "F4", "B4"),
      chord("A2", "C3", "E4", "C5"),   // B4 → C5 ✓
    ];
    const errs = validateSATB(sol, "C", false, sol);
    expect(typesOf(errs)).not.toContain("leading_tone");
  });
  it("sensible TENUE (V → V7) → rien", () => {
    const sol = [
      chord("G2", "D3", "B3", "G4"),
      chord("G2", "F3", "B3", "G4"),   // B3 tenu
    ];
    const errs = validateSATB(sol, "C", false, sol);
    expect(typesOf(errs)).not.toContain("leading_tone");
  });
  it("en LA MINEUR (Am) : sensible = sol dièse, mêmes verdicts", () => {
    const sol = [
      chord("E2", "E3", "B3", "G#4"),  // V de la mineur, sensible au soprano
      chord("A2", "E3", "C4", "A4"),   // G#4 → A4 ✓
    ];
    expect(typesOf(validateSATB(sol, "Am", false, sol))).not.toContain("leading_tone");
    const faux = [
      chord("E2", "E3", "B3", "G#4"),
      chord("A2", "E3", "C4", "E4"),   // G#4 → E4 : saute
    ];
    expect(validateSATB(faux, "Am", false, sol).find(e => e.type === "leading_tone")!.severity).toBe("error");
  });
  it("accord NON dominant contenant le pc de la sensible (iii) → la règle se tait", () => {
    const sol = [
      chord("E3", "G3", "B3", "E4"),   // iii (Em) — B présent mais pas fonction dominante
      chord("A2", "A3", "C4", "E4"),   // vi
    ];
    expect(typesOf(validateSATB(sol, "C", false, sol))).not.toContain("leading_tone");
  });
  it("sensible DOUBLÉE dans un accord de dominante → doubled_leading_tone (error)", () => {
    const sol = [
      chord("G2", "B3", "D4", "B4"),   // B au ténor ET au soprano
      chord("C3", "C4", "E4", "C5"),
    ];
    const errs = validateSATB(sol, "C", false, sol);
    const d = errs.find(e => e.type === "doubled_leading_tone");
    expect(d).toBeDefined();
    expect(d!.severity).toBe("error");
  });
});
```

- [ ] **Step 2 : Lancer — échoue** — Run: `npx vitest run src/lib/satb-rules.test.ts` → FAIL.

- [ ] **Step 3 : Implémenter**

Dans `satb-rules.ts` :

1. Import (en tête) : `import { identifyChordFromNotes } from "@/lib/harmonic-analysis";`

2. Helper exporté (près de `noteToMidi`) :

```ts
/** Tonique (pitch class) et mode d'une signature « C », « Bb », « Am »… */
export function tonaliteDeSignature(keySignature: string): { tonicPc: number; minor: boolean } {
  const minor = keySignature.endsWith("m");
  const nom = minor ? keySignature.slice(0, -1) : keySignature;
  return { tonicPc: ((noteToMidi(noteName(nom), 0) % 12) + 12) % 12, minor };
}
```

3. Dans `validateSATB`, après le précalcul de `conforme`, précalculer les accords de la
solution (identification UNE fois par mesure) :

```ts
  // Accord attendu de chaque mesure (identifié sur la SOLUTION), pour armer les
  // règles de résolution. Identification nulle → les règles se taisent.
  const accords = (solution ?? []).map(sol =>
    estComplete(sol) ? identifyChordFromNotes([...pcsDe(sol)], pcOf(sol.bass)) : null,
  );
```

4. Dans la boucle, section mesure-locale (après la conformité) — la doublure :

```ts
    // 7. Sensible doublée (accord de fonction dominante, mesure conforme)
    if (keySignature && conforme[m]) {
      const { tonicPc } = tonaliteDeSignature(keySignature);
      const sensible = (tonicPc + 11) % 12;
      const acc = accords[m];
      const dominant = acc && (acc.rootPc === (tonicPc + 7) % 12 || acc.rootPc === sensible);
      if (dominant && VOICES.filter(v => pcOf(cur[v]) === sensible).length >= 2) {
        errors.push({ type: "doubled_leading_tone", measure: m, severity: "error", params: { from: m + 1 } });
      }
    }
```

5. Dans la section inter-mesures (`if (m > 0)`), après les fausses relations — la résolution :

```ts
      // 4c. Résolution de la sensible (accord de dominante conforme → mesure conforme)
      if (keySignature && conforme[m - 1] && conforme[m]) {
        const { tonicPc } = tonaliteDeSignature(keySignature);
        const sensible = (tonicPc + 11) % 12;
        const dominante = (tonicPc + 7) % 12;
        const acc = accords[m - 1];
        if (acc && (acc.rootPc === dominante || acc.rootPc === sensible)) {
          VOICES.forEach(v => {
            if (pcOf(prev[v]) !== sensible) return;
            const midiP = noteToMidi(noteName(prev[v].name!), prev[v].octave);
            const midiC = noteToMidi(noteName(cur[v].name!), cur[v].octave);
            const externe = v === "soprano" || v === "bass";
            const ok =
              midiC - midiP === 1 ||   // monte à la tonique
              midiC === midiP ||        // tenue
              (!externe && midiC - midiP === -4 && pcOf(cur[v]) === dominante); // frustrée interne
            if (!ok) {
              errors.push({
                type: "leading_tone", measure: m,
                severity: externe ? "error" : "warning",
                params: { voice: v, from: m },
              });
            }
          });
        }
      }
```

- [ ] **Step 4 : Lancer — passe** — Run: `npx vitest run src/lib/satb-rules.test.ts` → PASS (22 + 9 = 31).
  Si un verdict musical diffère (ex. l'identification d'un accord de la fixture), NE PAS tordre
  la règle : vérifier la fixture, puis STOP et rapporter BLOCKED.

- [ ] **Step 5 : Commit**

```bash
git add src/lib/satb-rules.ts src/lib/satb-rules.test.ts
git commit -m "feat(satb): resolution et doublure de la sensible — bareme d'ecole"
```

---

## Task 3 : la 7e et les directes S–B

**Files:**
- Modify: `src/lib/satb-rules.ts`
- Test: `src/lib/satb-rules.test.ts`

- [ ] **Step 1 : Écrire les tests**

```ts
describe("validateSATB — 7e d'accord et directes S–B", () => {
  it("7e de V7 descendant par degré → rien ; quittée par saut → seventh (warning)", () => {
    const sol = [
      chord("G2", "F3", "D4", "B4"),   // 7e = F au ténor
      chord("C3", "E3", "C4", "C5"),   // F3 → E3 ✓
    ];
    expect(typesOf(validateSATB(sol, "C", false, sol))).not.toContain("seventh");
    const faux = [
      chord("G2", "F3", "D4", "B4"),
      chord("C3", "C4", "E4", "C5"),   // {do,mi} basse do : CONFORME ; F3 → C4 : la 7e saute
    ];
    const errs = validateSATB(faux, "C", false, sol);
    const s = errs.find(e => e.type === "seventh");
    expect(s).toBeDefined();
    expect(s!.severity).toBe("warning");
  });
  it("7e TENUE → rien ; triade sans 7e → la règle se tait", () => {
    const tenue = [
      chord("G2", "F3", "D4", "B4"),
      chord("C3", "F3", "C4", "C5"),   // F3 tenu (deviendra retard — toléré)
    ];
    expect(typesOf(validateSATB(tenue, "C", false, tenue))).not.toContain("seventh");
    const triade = [
      chord("G2", "D3", "B3", "G4"),
      chord("C3", "E3", "C4", "E4"),
    ];
    expect(typesOf(validateSATB(triade, "C", false, triade))).not.toContain("seventh");
  });
  it("quinte directe S–B (saut du soprano vers la quinte, même sens) → hidden_fifth (warning)", () => {
    // B : C3 → G3 (monte). S : E4 → D5 (saut, monte). Arrivée D5/G3 = quinte réduite,
    // qui n'en était pas une avant (E4/C3 = tierce+octave).
    const sol = [
      chord("C3", "E3", "G3", "E4"),
      chord("G3", "B3", "G4", "D5"),
    ];
    const errs = validateSATB(sol, "C", false, sol);
    const h = errs.find(e => e.type === "hidden_fifth");
    expect(h).toBeDefined();
    expect(h!.severity).toBe("warning");
  });
  it("arrivée sur la quinte par mouvement conjoint du soprano → rien", () => {
    const sol = [
      chord("E3", "G3", "C4", "C5"),
      chord("G3", "B3", "G4", "D5"),   // soprano C5 → D5 : conjoint (2 demi-tons)
    ];
    expect(typesOf(validateSATB(sol, "C", false, sol))).not.toContain("hidden_fifth");
  });
  it("quintes déjà PARALLÈLES : parallel_fifth, pas de doublon hidden_fifth", () => {
    const sol = [
      chord("C3", "E3", "E4", "G4"),
      chord("D3", "F3", "F4", "A4"),   // quintes parallèles S–B (G4/C3 → A4/D3)
    ];
    const errs = validateSATB(sol, "C", false, sol);
    expect(typesOf(errs)).toContain("parallel_fifth");
    expect(typesOf(errs)).not.toContain("hidden_fifth");
  });
});
```

- [ ] **Step 2 : Lancer — échoue** — Run: `npx vitest run src/lib/satb-rules.test.ts` → FAIL.

- [ ] **Step 3 : Implémenter**

Dans la section inter-mesures de `validateSATB` (`if (m > 0)`), après la résolution de la
sensible :

```ts
      // 4d. Résolution de la 7e d'accord (descend par degré ou tient)
      if (conforme[m - 1] && conforme[m]) {
        const acc = accords[m - 1];
        if (acc) {
          const pcs = solution?.[m - 1] ? pcsDe(solution[m - 1]) : new Set<number>();
          const septieme = [...pcs].find(pc => {
            const iv = (pc - acc.rootPc + 12) % 12;
            return iv === 10 || iv === 11;
          });
          if (septieme !== undefined) {
            VOICES.forEach(v => {
              if (pcOf(prev[v]) !== septieme) return;
              const midiP = noteToMidi(noteName(prev[v].name!), prev[v].octave);
              const midiC = noteToMidi(noteName(cur[v].name!), cur[v].octave);
              const d = midiC - midiP;
              if (d !== 0 && d !== -1 && d !== -2) {
                errors.push({ type: "seventh", measure: m, severity: "warning", params: { voice: v, from: m } });
              }
            });
          }
        }
      }

      // 4e. Quintes et octaves DIRECTES soprano–basse (mêmes conditions que l'atelier)
      if (solution && estComplete(prev) && estComplete(cur)) {
        const ps = prev.soprano, pb = prev.bass, cs = cur.soprano, cb = cur.bass;
        const mPS = noteToMidi(noteName(ps.name!), ps.octave), mPB = noteToMidi(noteName(pb.name!), pb.octave);
        const mCS = noteToMidi(noteName(cs.name!), cs.octave), mCB = noteToMidi(noteName(cb.name!), cb.octave);
        const ds = mCS - mPS, db = mCB - mPB;
        const memeSens = ds !== 0 && db !== 0 && Math.sign(ds) === Math.sign(db);
        if (memeSens && Math.abs(ds) > 2) {
          const avant = Math.abs(mPS - mPB) % 12;
          const apres = Math.abs(mCS - mCB) % 12;
          if (apres === 7 && avant !== 7) {
            errors.push({ type: "hidden_fifth", voices: ["soprano", "bass"], measure: m, severity: "warning", params: { from: m, to: m + 1 } });
          }
          if (apres === 0 && avant !== 0) {
            errors.push({ type: "hidden_octave", voices: ["soprano", "bass"], measure: m, severity: "warning", params: { from: m, to: m + 1 } });
          }
        }
      }
```

Et le helper pur de la note, en fin de fichier :

```ts
/** La note d'un exercice terminé : 100 moins 10 par avertissement restant, plancher 60. */
export function noteExercice(avertissements: number): number {
  return Math.max(60, 100 - 10 * avertissements);
}
```

Avec ses tests :

```ts
describe("noteExercice", () => {
  it("0 avertissement → 100 ; 2 → 80 ; 5 et plus → 60 (plancher)", () => {
    expect(noteExercice(0)).toBe(100);
    expect(noteExercice(2)).toBe(80);
    expect(noteExercice(5)).toBe(60);
    expect(noteExercice(9)).toBe(60);
  });
});
```

- [ ] **Step 4 : Lancer — passe** — Run: `npx vitest run src/lib/satb-rules.test.ts` → PASS. Puis `npx vitest run` → suite complète verte.

- [ ] **Step 5 : Commit**

```bash
git add src/lib/satb-rules.ts src/lib/satb-rules.test.ts
git commit -m "feat(satb): resolution de la 7e, directes S-B et note graduee (noteExercice)"
```

---

## Task 4 : brancher l'interface — HarmoniaEditor, ExerciceContent, i18n (6 langues)

**Files:**
- Modify: `src/components/HarmoniaEditor.tsx`
- Modify: `src/components/ExerciceContent.tsx`
- Modify: `messages/fr.json`, `messages/en.json`, `messages/de.json`, `messages/es.json`, `messages/it.json`, `messages/pt.json`

- [ ] **Step 1 : HarmoniaEditor**

1. L'appel au validateur (l. ~258) devient :

```ts
    const errs = validateSATB(measures, keySignature, !showKeySignature, solution);
```

2. Le bouton en dur « Terminer ✓ » (l. ~745) devient `{t("finish")} ✓`.

- [ ] **Step 2 : ExerciceContent**

1. Compléter les imports :

```ts
import { validateSATB, noteExercice, type Measure } from "@/lib/satb-rules";
```

2. Typage : dans `SATBData`, remplacer `solution: any[];` par `solution: Measure[];`
   (les données d'exercices ont déjà cette forme — le build le confirme).

3. La branche satb : remplacer `onComplete={() => handleComplete(100)}` par :

```ts
          onComplete={(measures) => {
            // La note reflète la propreté de la copie : les FAUTES sont déjà
            // impossibles (Terminer bloqué) ; chaque avertissement restant coûte 10.
            const restants = validateSATB(measures, props.keySignature, !showKS, props.solution);
            const avertissements = restants.filter(e => e.severity === "warning").length;
            handleComplete(noteExercice(avertissements));
          }}
```

- [ ] **Step 3 : i18n — les 6 langues**

Dans `messages/<lang>.json`, section `satb` : ajouter la clé `finish` (à côté de `play`) et,
sous `satb.errors`, les cinq nouvelles clés (NE PAS toucher `leading_tone`/`seventh`, déjà là).
Textes :

| clé | fr | en |
|---|---|---|
| `finish` | Terminer | Finish |
| `errors.wrong_chord` | Mesure {from} : ce n'est pas l'accord demandé | Bar {from}: this is not the requested chord |
| `errors.wrong_bass` | Mesure {from} : la basse attendue est {expected} | Bar {from}: the expected bass is {expected} |
| `errors.doubled_leading_tone` | Sensible doublée (m.{from}) | Doubled leading note (bar {from}) |
| `errors.hidden_fifth` | Quinte directe soprano–basse (m.{from}→{to}) | Hidden fifth soprano–bass (bars {from}→{to}) |
| `errors.hidden_octave` | Octave directe soprano–basse (m.{from}→{to}) | Hidden octave soprano–bass (bars {from}→{to}) |

Pour de/es/it/pt : traduire dans le ton des clés voisines du même fichier (vocabulaire
musical du pays : de « Querstand »-style — Leitton verdoppelt, verdeckte Quinte ; es — sensible
duplicada, quinta directa/oculta ; it — sensibile raddoppiata, quinta nascosta ; pt — sensível
dobrada, quinta oculta). Reprendre la STRUCTURE des gabarits fr/en ({from}, {to}, {expected}).

- [ ] **Step 4 : Build + suite** — Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build && npx vitest run` → succès, tout vert.

- [ ] **Step 5 : Commit**

```bash
git add src/components/HarmoniaEditor.tsx src/components/ExerciceContent.tsx messages/fr.json messages/en.json messages/de.json messages/es.json messages/it.json messages/pt.json
git commit -m "feat(satb): l'editeur verifie la conformite en direct, note graduee, messages 6 langues"
```

---

## Task 5 : Vérification finale

- [ ] **Step 1 : Build + tests complets**

Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build && npx vitest run`
Expected: build OK, tous les tests verts.

- [ ] **Step 2 : Contrôle manuel (Dany, en production)**

Exercice « II–V–I en Do » (cours 3) : poser trois accords de Do → « ce n'est pas l'accord
demandé », Terminer bloqué ; réaliser correctement mais sensible du V sautant au soprano →
faute bloquante ; la faire descendre à la dominante à l'alto → rien ; terminer une copie avec
une 7e non résolue → avertissement ⚠ et note 90 au tableau de bord ; vérifier un exercice en
mineur (sensible haussée) et les messages dans une autre langue (EN).

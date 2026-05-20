# Dictée enrichie — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ajouter un mode dictée d'intervalles et un panneau VisualisationNote (clavier + portée SVG) à la page `/dictee` existante.

**Architecture:** 4 fichiers — `dictee/page.tsx` (tab switcher), `DicteeHarmonique.tsx` (intégrer VisualisationNote), `VisualisationNote.tsx` (nouveau), `DicteeIntervalles.tsx` (nouveau). Pas de dépendances externes supplémentaires.

**Tech Stack:** React 18, Next.js App Router, styles 100 % inline, PianoPlayer existant (notes en français `"Do"/"Ré"/…`).

---

## File Map

| Fichier | Action | Responsabilité |
|---|---|---|
| `src/components/VisualisationNote.tsx` | Créer | Panneau slide-in : clavier 3 octaves + portée SVG complète |
| `src/components/DicteeHarmonique.tsx` | Modifier | Intégrer VisualisationNote, remplacer timer 1300 ms |
| `src/components/DicteeIntervalles.tsx` | Créer | Mode dictée d'intervalles complet (30 paires, 3 niveaux) |
| `src/app/[locale]/dictee/page.tsx` | Modifier | `"use client"`, tab switcher Accords / Intervalles |

---

## Task 1 — VisualisationNote.tsx (nouveau composant)

**Files:**
- Create: `src/components/VisualisationNote.tsx`

- [ ] **Step 1 — Créer le fichier avec types, constantes et helpers**

```tsx
// src/components/VisualisationNote.tsx
"use client";

import React, { useEffect, useState } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────
interface CN { fr: string; oct: number; }

export interface VisualisationNoteProps {
  notes: CN[];
  label: string;
  onNext: () => void;
  onReplay?: () => void;
}

// ── Chromatic pitch helper (C3=0, C4=12, C5=24…) ─────────────────────────────
const SEMI: Record<string, number> = {
  "Do":0,"Do#":1,"Réb":1,"Ré":2,"Ré#":3,"Mib":3,"Mi":4,
  "Fa":5,"Fa#":6,"Solb":6,"Sol":7,"Sol#":8,"Lab":8,
  "La":9,"La#":10,"Sib":10,"Si":11,
};
function pitch(fr: string, oct: number) { return (oct - 3) * 12 + (SEMI[fr] ?? 0); }

// ── Diatonic step from C4 = 0 (used for staff y-position) ────────────────────
// Each accidental keeps the diatonic position of its base note name:
// Sib = B♭ → diatonic B = 6 ; Lab = A♭ → diatonic A = 5, etc.
const DIAT: Record<string, number> = {
  "Do":0,"Do#":0,
  "Réb":1,"Ré":1,"Ré#":1,
  "Mib":2,"Mi":2,
  "Fa":3,"Fa#":3,
  "Solb":4,"Sol":4,"Sol#":4,
  "Lab":5,"La":5,"La#":5,
  "Sib":6,"Si":6,
};
function diatFromC4(fr: string, oct: number) { return (oct - 4) * 7 + (DIAT[fr] ?? 0); }

// ── Accidentals ───────────────────────────────────────────────────────────────
const SHARPS = new Set(["Do#","Ré#","Fa#","Sol#","La#"]);
const FLATS  = new Set(["Réb","Mib","Solb","Lab","Sib"]);

// ── Keyboard constants ────────────────────────────────────────────────────────
// 3 octaves: C3–B5 → 21 white keys, 15 black keys
const WW = 24; // white key width px
const WH = 96; // white key height px
const BW = 15; // black key width px
const BH = 60; // black key height px

// White key diatonic index within octave (0–6)
const WHITE_IDX: Record<string, number> = { Do:0, Ré:1, Mi:2, Fa:3, Sol:4, La:5, Si:6 };
const WHITE_FR  = ["Do","Ré","Mi","Fa","Sol","La","Si"] as const;

// Black key x-offset in white-key units (from octave start)
const BLACK_OFFSET: Record<string, number> = {
  "Do#":0.58,"Réb":0.58,
  "Ré#":1.60,"Mib":1.60,
  "Fa#":3.58,"Solb":3.58,
  "Sol#":4.58,"Lab":4.58,
  "La#":5.60,"Sib":5.60,
};
// Canonical black key names for rendering (sharps)
const BLACK_CANONICAL = ["Do#","Ré#","Fa#","Sol#","La#"] as const;
const BLACK_CANONICAL_OFFSETS: Record<string, number> = {
  "Do#":0.58,"Ré#":1.60,"Fa#":3.58,"Sol#":4.58,"La#":5.60,
};
function isBlack(fr: string) { return fr in BLACK_OFFSET; }

// Get left-edge x of a white key
function whiteX(fr: string, oct: number) {
  return ((oct - 3) * 7 + WHITE_IDX[fr]) * WW;
}
// Get left-edge x of a black key (by canonical name)
function blackCanonicalX(fr: string, oct: number) {
  return ((oct - 3) * 7 + BLACK_CANONICAL_OFFSETS[fr]) * WW - BW / 2;
}

// ── Staff constants ───────────────────────────────────────────────────────────
const SVG_W    = 280;
const LS       = 10;           // line spacing px
const E4_Y     = 95;           // y of bottom staff line (E4 = 1st line)
// y = E4_Y - (diatFromC4(fr,oct) - 2) * (LS/2)
function noteY(fr: string, oct: number) {
  return E4_Y - (diatFromC4(fr, oct) - 2) * (LS / 2);
}
// Staff lines: E4(y=95), G4(85), B4(75), D5(65), F5(55)
const STAFF_LINES = [E4_Y, E4_Y - LS, E4_Y - 2*LS, E4_Y - 3*LS, E4_Y - 4*LS];
```

- [ ] **Step 2 — Écrire la fonction de rendu du clavier**

Ajouter après les constantes :

```tsx
function PianoKeyboard({ notes }: { notes: CN[] }) {
  const activePitches = new Set(notes.map(n => pitch(n.fr, n.oct)));
  // Map pitch → original fr name for label
  const pitchLabel = new Map(notes.map(n => [pitch(n.fr, n.oct), n.fr]));

  const TOTAL_W = 21 * WW; // 504px

  return (
    <div style={{ overflowX: "auto", width: "100%" }}>
      <div style={{ position: "relative", width: TOTAL_W, height: WH, flexShrink: 0 }}>
        {/* White keys */}
        {([3,4,5] as const).flatMap(oct =>
          WHITE_FR.map(fr => {
            const p = pitch(fr, oct);
            const active = activePitches.has(p);
            return (
              <div key={`w-${fr}${oct}`} style={{
                position: "absolute",
                left: whiteX(fr, oct),
                top: 0,
                width: WW - 1,
                height: WH,
                background: active ? "#3B82F6" : "#fff",
                border: "1px solid #ccc",
                borderRadius: "0 0 4px 4px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                paddingBottom: 4,
              }}>
                {active && (
                  <span style={{ fontSize: 9, fontWeight: 700, color: "#fff", lineHeight: 1 }}>
                    {pitchLabel.get(p) ?? fr}
                  </span>
                )}
              </div>
            );
          })
        )}
        {/* Black keys */}
        {([3,4,5] as const).flatMap(oct =>
          BLACK_CANONICAL.map(fr => {
            const p = pitch(fr, oct);
            const active = activePitches.has(p);
            const label = pitchLabel.get(p);
            return (
              <div key={`b-${fr}${oct}`} style={{
                position: "absolute",
                left: blackCanonicalX(fr, oct),
                top: 0,
                width: BW,
                height: BH,
                background: active ? "#3B82F6" : "#222",
                borderRadius: "0 0 3px 3px",
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                paddingBottom: 3,
              }}>
                {active && (
                  <span style={{ fontSize: 8, fontWeight: 700, color: "#fff", lineHeight: 1 }}>
                    {label ?? fr}
                  </span>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 3 — Écrire la fonction de rendu de la portée SVG**

```tsx
function StaffSVG({ notes, label }: { notes: CN[]; label: string }) {
  // Compute SVG height dynamically
  const ys = notes.map(n => noteY(n.fr, n.oct));
  const maxY = Math.max(...ys, E4_Y + 15);
  const minY = Math.min(...ys, STAFF_LINES[4] - 10);
  const svgH = maxY + 28; // room for label
  const CLEF_X = 8;
  const NOTE_X = 90; // x of notehead column (leave room for clef + key sig)

  // Ledger lines needed below staff (even diatonic steps < E4 diat = 2)
  // Below: diatonic from C4 must be even and < 2 (i.e., 0, -2, -4, ...)
  // Above: diatonic from C4 must be even and > 10 (F5 diat = 10 is 5th line)
  function ledgerLines(fr: string, oct: number): number[] {
    const d = diatFromC4(fr, oct);
    const lines: number[] = [];
    if (d <= 0) {
      // below: at diatonic 0 (C4), -2 (A3), -4 (F3)... down to note
      for (let step = 0; step >= d; step -= 2) {
        lines.push(E4_Y - (step - 2) * (LS / 2)); // y of ledger line
      }
    }
    if (d >= 12) {
      // above: at diatonic 12 (A5), 14 (C6)... up to note
      for (let step = 12; step <= d; step += 2) {
        lines.push(E4_Y - (step - 2) * (LS / 2));
      }
    }
    return lines;
  }

  return (
    <svg
      viewBox={`0 0 ${SVG_W} ${svgH}`}
      style={{ width: "100%", maxWidth: SVG_W, display: "block", margin: "0 auto" }}
    >
      {/* Staff lines */}
      {STAFF_LINES.map((y, i) => (
        <line key={i} x1={CLEF_X} y1={y} x2={SVG_W - 8} y2={y}
          stroke="#333" strokeWidth={0.8} />
      ))}

      {/* Treble clef */}
      <text x={CLEF_X} y={E4_Y - 10}
        style={{ fontSize: 68, fontFamily: "serif", fill: "#333", userSelect: "none" }}>
        𝄞
      </text>

      {/* Notes */}
      {notes.map((note, i) => {
        const y    = noteY(note.fr, note.oct);
        const d    = diatFromC4(note.fr, note.oct);
        const stemUp = d < 6; // below B4 → stem up
        const acc  = SHARPS.has(note.fr) ? "♯" : FLATS.has(note.fr) ? "♭" : null;
        // Spread multiple noteheads slightly if they overlap (same x)
        const xOff = i % 2 === 0 ? 0 : 12; // alternate offset to avoid collision

        return (
          <g key={i}>
            {/* Ledger lines */}
            {ledgerLines(note.fr, note.oct).map((ly, li) => (
              <line key={li}
                x1={NOTE_X + xOff - 10} y1={ly}
                x2={NOTE_X + xOff + 14} y2={ly}
                stroke="#333" strokeWidth={0.8} />
            ))}
            {/* Accidental */}
            {acc && (
              <text x={NOTE_X + xOff - 14} y={y + 4}
                style={{ fontSize: 11, fontFamily: "serif", fill: "#222" }}>
                {acc}
              </text>
            )}
            {/* Notehead */}
            <ellipse
              cx={NOTE_X + xOff + 5} cy={y}
              rx={5.5} ry={4}
              fill="#222"
              transform={`rotate(-15, ${NOTE_X + xOff + 5}, ${y})`}
            />
            {/* Stem */}
            {stemUp ? (
              <line
                x1={NOTE_X + xOff + 10} y1={y}
                x2={NOTE_X + xOff + 10} y2={y - 30}
                stroke="#222" strokeWidth={1.2} />
            ) : (
              <line
                x1={NOTE_X + xOff} y1={y}
                x2={NOTE_X + xOff} y2={y + 30}
                stroke="#222" strokeWidth={1.2} />
            )}
          </g>
        );
      })}

      {/* Label */}
      <text
        x={SVG_W / 2} y={svgH - 6}
        textAnchor="middle"
        style={{ fontSize: 12, fontFamily: "system-ui, sans-serif", fill: "#5C3D6E", fontWeight: 600 }}
      >
        {label}
      </text>
    </svg>
  );
}
```

- [ ] **Step 4 — Écrire le composant principal VisualisationNote avec slide-in**

```tsx
export default function VisualisationNote({ notes, label, onNext, onReplay }: VisualisationNoteProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger slide-in on mount
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{
      transform: visible ? "translateY(0)" : "translateY(100%)",
      transition: "transform 250ms ease",
      background: "#fff",
      borderTop: "1px solid #e8e0f0",
      borderRadius: "0 0 18px 18px",
      padding: "1rem 1.25rem 1.25rem",
      width: "100%",
    }}>
      {/* Section header */}
      <p style={{
        fontSize: 11, fontWeight: 700, letterSpacing: "0.08em",
        color: "#5C3D6E", margin: "0 0 0.75rem", textTransform: "uppercase",
      }}>
        Visualisation
      </p>

      {/* Piano keyboard */}
      <div style={{ marginBottom: "1rem" }}>
        <PianoKeyboard notes={notes} />
      </div>

      {/* Staff */}
      <div style={{ marginBottom: "1rem" }}>
        <StaffSVG notes={notes} label={label} />
      </div>

      {/* Actions */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {onReplay ? (
          <button
            onClick={onReplay}
            style={{
              background: "none", border: "1px solid #d0c8e0",
              borderRadius: 20, padding: "0.35rem 0.9rem",
              fontSize: "0.8rem", fontWeight: 600, color: "#5C3D6E", cursor: "pointer",
            }}
          >
            ↺ Réécouter
          </button>
        ) : <span />}
        <button
          onClick={onNext}
          style={{
            background: "#5C3D6E", border: "none",
            borderRadius: 20, padding: "0.45rem 1.2rem",
            fontSize: "0.85rem", fontWeight: 700, color: "#fff", cursor: "pointer",
          }}
        >
          Suivant →
        </button>
      </div>
    </div>
  );
}
```

- [ ] **Step 5 — Vérifier le typage**

```powershell
cd "c:\Users\Dany Duboille\Desktop\harmonia"
npx tsc --noEmit 2>&1 | Select-String "VisualisationNote"
```

Attendu : aucune erreur sur `VisualisationNote.tsx`.

- [ ] **Step 6 — Commit**

```powershell
git add src/components/VisualisationNote.tsx
git commit -m "feat: VisualisationNote — clavier 3 octaves + portée SVG complète"
```

---

## Task 2 — DicteeHarmonique.tsx (modifications)

**Files:**
- Modify: `src/components/DicteeHarmonique.tsx`

Les seuls changements sont dans la phase `answering` : remplacer le timer 1300 ms par `showViz` + `VisualisationNote`.

- [ ] **Step 1 — Ajouter l'import et le state showViz**

En haut du fichier, ajouter l'import :

```tsx
import VisualisationNote from "@/components/VisualisationNote";
```

Dans `DicteeHarmonique()`, ajouter après `const [feedback, setFeedback]` :

```tsx
const [showViz, setShowViz] = useState(false);
```

- [ ] **Step 2 — Extraire la logique d'avance dans handleNext**

Ajouter juste avant `handleAnswer` :

```tsx
const handleNext = useCallback(() => {
  setShowViz(false);
  setFeedback(null);
  answering.current = false;
  const next = chordIdx + 1;
  if (next >= (prog?.chords.length ?? 0)) {
    setPhase("complete");
  } else {
    setChordIdx(next);
    playChord(prog!.chords[next]);
  }
}, [chordIdx, prog, playChord]);
```

- [ ] **Step 3 — Modifier handleAnswer pour utiliser showViz**

Remplacer le bloc entier de `handleAnswer` (lignes ~257-285 dans le fichier original) :

```tsx
const handleAnswer = useCallback((chosen: CE) => {
  if (!prog || answering.current) return;
  answering.current = true;

  const expected = prog.chords[chordIdx];
  const ok = chosen.label === expected.label;

  setFeedback({ chosen: chosen.label, ok });
  setAnswers(prev => [...prev, { correct: ok, chosen: chosen.label, expected: expected.label }]);

  playChord(chosen);
  if (!ok) {
    const t = setTimeout(() => playChord(expected), 700);
    timers.current.push(t);
  }

  // Show visualisation instead of auto-advancing
  const t = setTimeout(() => setShowViz(true), 600);
  timers.current.push(t);
}, [prog, chordIdx, playChord]);
```

- [ ] **Step 4 — Réinitialiser showViz dans startNew**

Dans `startNew`, après `setFeedback(null)` ajouter :

```tsx
setShowViz(false);
```

- [ ] **Step 5 — Rendre VisualisationNote dans la phase answering**

Dans le JSX, à l'intérieur du `{/* Main card */}` div, juste après la section `{/* ── ANSWERING ── */}` (après la `</div>` fermante qui contient les controls) :

```tsx
{/* ── VISUALISATION ── */}
{phase === "answering" && showViz && prog && (
  <VisualisationNote
    notes={prog.chords[chordIdx].notes}
    label={prog.chords[chordIdx].label}
    onNext={handleNext}
    onReplay={() => playChord(prog.chords[chordIdx])}
  />
)}
```

**Important :** ce JSX doit être un enfant direct du div `Main card` (à côté des blocs IDLE/LISTENING/ANSWERING/COMPLETE, pas imbriqué à l'intérieur du bloc ANSWERING). Le div `Main card` a `display: flex, flexDirection: column`, donc VisualisationNote apparaît en bas.

- [ ] **Step 6 — Vérifier le typage et tester manuellement**

```powershell
npx tsc --noEmit
```

Attendu : 0 erreur. Tester dans le browser : jouer une dictée niveau 1, répondre → vérifier que le panneau slide-in apparaît avec les bonnes notes et que "Suivant →" avance bien.

- [ ] **Step 7 — Commit**

```powershell
git add src/components/DicteeHarmonique.tsx
git commit -m "feat: DicteeHarmonique — VisualisationNote après chaque réponse"
```

---

## Task 3 — DicteeIntervalles.tsx (nouveau composant)

**Files:**
- Create: `src/components/DicteeIntervalles.tsx`

- [ ] **Step 1 — Types, constantes intervalles, helpers**

```tsx
// src/components/DicteeIntervalles.tsx
"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import PianoPlayer, { type PianoPlayerRef } from "@/components/PianoPlayer";
import VisualisationNote from "@/components/VisualisationNote";

// ── Types ─────────────────────────────────────────────────────────────────────
interface CN { fr: string; oct: number; }
interface IvDef { name: string; semitones: number; level: 1 | 2 | 3; }
interface IvQuestion { note1: CN; note2: CN; interval: IvDef; level: 1 | 2 | 3; }
type Phase = "idle" | "question" | "complete";
interface Ans { correct: boolean; chosen: string; expected: string; }

// ── Helpers ───────────────────────────────────────────────────────────────────
const n = (fr: string, oct: number): CN => ({ fr, oct });

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── 14 intervalles ────────────────────────────────────────────────────────────
const ALL_INTERVALS: IvDef[] = [
  { name: "Unisson",             semitones: 0,  level: 1 },
  { name: "Seconde mineure",     semitones: 1,  level: 2 },
  { name: "Seconde majeure",     semitones: 2,  level: 1 },
  { name: "Tierce mineure",      semitones: 3,  level: 1 },
  { name: "Tierce majeure",      semitones: 4,  level: 1 },
  { name: "Quarte juste",        semitones: 5,  level: 1 },
  { name: "Quarte augmentée",    semitones: 6,  level: 2 },
  { name: "Quinte juste",        semitones: 7,  level: 1 },
  { name: "Sixte mineure",       semitones: 8,  level: 2 },
  { name: "Sixte majeure",       semitones: 9,  level: 1 },
  { name: "Septième mineure",    semitones: 10, level: 2 },
  { name: "Septième majeure",    semitones: 11, level: 3 },
  { name: "Octave",              semitones: 12, level: 1 },
  { name: "Neuvième majeure",    semitones: 14, level: 3 },
];

function iv(name: string): IvDef {
  return ALL_INTERVALS.find(x => x.name === name)!;
}

// ── Pool des intervalles par niveau ───────────────────────────────────────────
function poolForLevel(level: 1 | 2 | 3): IvDef[] {
  return ALL_INTERVALS.filter(x => x.level <= level);
}
```

- [ ] **Step 2 — 30 paires de notes**

```tsx
// ── 30 paires (10 par niveau) ─────────────────────────────────────────────────
const ALL_PAIRS: IvQuestion[] = [
  // ── Niveau 1 : 8 intervalles diatoniques simples ───────────────────────────
  { note1: n("Do",4), note2: n("Do",4),  interval: iv("Unisson"),         level: 1 },
  { note1: n("Do",4), note2: n("Ré",4),  interval: iv("Seconde majeure"), level: 1 },
  { note1: n("Do",4), note2: n("Mib",4), interval: iv("Tierce mineure"),  level: 1 },
  { note1: n("Do",4), note2: n("Mi",4),  interval: iv("Tierce majeure"),  level: 1 },
  { note1: n("Do",4), note2: n("Fa",4),  interval: iv("Quarte juste"),    level: 1 },
  { note1: n("Do",4), note2: n("Sol",4), interval: iv("Quinte juste"),    level: 1 },
  { note1: n("Do",4), note2: n("La",4),  interval: iv("Sixte majeure"),   level: 1 },
  { note1: n("Do",4), note2: n("Do",5),  interval: iv("Octave"),          level: 1 },
  { note1: n("Sol",3), note2: n("La",3), interval: iv("Seconde majeure"), level: 1 },
  { note1: n("La",3), note2: n("Do",4),  interval: iv("Tierce mineure"),  level: 1 },

  // ── Niveau 2 : + Seconde m, Triton, Sixte m, Septième m ────────────────────
  { note1: n("Do",4),  note2: n("Réb",4), interval: iv("Seconde mineure"),  level: 2 },
  { note1: n("Sol",3), note2: n("La",3),  interval: iv("Seconde majeure"),  level: 2 },
  { note1: n("La",3),  note2: n("Do",4),  interval: iv("Tierce mineure"),   level: 2 },
  { note1: n("Sol",3), note2: n("Si",3),  interval: iv("Tierce majeure"),   level: 2 },
  { note1: n("Do",4),  note2: n("Fa",4),  interval: iv("Quarte juste"),     level: 2 },
  { note1: n("Do",4),  note2: n("Fa#",4), interval: iv("Quarte augmentée"), level: 2 },
  { note1: n("Sol",3), note2: n("Ré",4),  interval: iv("Quinte juste"),     level: 2 },
  { note1: n("Mi",4),  note2: n("Do",5),  interval: iv("Sixte mineure"),    level: 2 },
  { note1: n("Do",4),  note2: n("La",4),  interval: iv("Sixte majeure"),    level: 2 },
  { note1: n("Ré",4),  note2: n("Do",5),  interval: iv("Septième mineure"), level: 2 },

  // ── Niveau 3 : + Septième M, Neuvième M ────────────────────────────────────
  { note1: n("Do",4), note2: n("Si",4),   interval: iv("Septième majeure"), level: 3 },
  { note1: n("Do",4), note2: n("Ré",5),   interval: iv("Neuvième majeure"), level: 3 },
  { note1: n("Sol",3), note2: n("Fa#",4), interval: iv("Septième majeure"), level: 3 },
  { note1: n("Ré",4), note2: n("Do#",5),  interval: iv("Septième majeure"), level: 3 },
  { note1: n("Fa",3), note2: n("Mi",4),   interval: iv("Septième majeure"), level: 3 },
  { note1: n("Mi",4), note2: n("Fa#",5),  interval: iv("Neuvième majeure"), level: 3 },
  { note1: n("La",3), note2: n("Sol#",4), interval: iv("Septième majeure"), level: 3 },
  { note1: n("Si",3), note2: n("Do#",5),  interval: iv("Neuvième majeure"), level: 3 },
  { note1: n("Ré",4), note2: n("Mi",5),   interval: iv("Neuvième majeure"), level: 3 },
  { note1: n("Sol",3), note2: n("La",4),  interval: iv("Neuvième majeure"), level: 3 },
];

// ── Options (toujours 8 boutons) ──────────────────────────────────────────────
function makeOptions(correct: IvDef, level: 1 | 2 | 3): IvDef[] {
  const pool = poolForLevel(level);
  const distractors = shuffle(pool.filter(iv => iv.name !== correct.name)).slice(0, 7);
  return shuffle([correct, ...distractors]);
}
```

- [ ] **Step 3 — Styles partagés**

```tsx
// ── Styles ────────────────────────────────────────────────────────────────────
const PURPLE = "#5C3D6E";
const GREEN  = "#16a34a";
const RED    = "#dc2626";
const BG     = "#faf8fc";

function btnStyle(bg: string, color: string, small = false): React.CSSProperties {
  return {
    padding: small ? "0.4rem 0.9rem" : "0.65rem 1.8rem",
    borderRadius: 24, border: "none",
    background: bg, color,
    fontWeight: 700,
    fontSize: small ? "0.82rem" : "0.95rem",
    cursor: "pointer",
  };
}
```

- [ ] **Step 4 — Composant principal DicteeIntervalles**

```tsx
// ── Composant ─────────────────────────────────────────────────────────────────
export default function DicteeIntervalles() {
  const [level,    setLevel]    = useState<1 | 2 | 3>(1);
  const [phase,    setPhase]    = useState<Phase>("idle");
  const [questions, setQuestions] = useState<IvQuestion[]>([]);
  const [qIdx,     setQIdx]     = useState(0);
  const [options,  setOptions]  = useState<IvDef[][]>([]);
  const [answers,  setAnswers]  = useState<Ans[]>([]);
  const [feedback, setFeedback] = useState<{ chosen: string; ok: boolean } | null>(null);
  const [showViz,  setShowViz]  = useState(false);

  const piano   = useRef<PianoPlayerRef>(null);
  const timers  = useRef<ReturnType<typeof setTimeout>[]>([]);
  const busy    = useRef(false);

  const clearAll = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  useEffect(() => () => clearAll(), [clearAll]);

  // ── Playback ──────────────────────────────────────────────────────────────
  const playMelodic = useCallback((q: IvQuestion) => {
    clearAll();
    piano.current?.playNote(q.note1.fr, q.note1.oct, { duration: 1.2 });
    const t = setTimeout(() => {
      piano.current?.playNote(q.note2.fr, q.note2.oct, { duration: 1.2 });
    }, 600);
    timers.current.push(t);
  }, [clearAll]);

  const playHarmonic = useCallback((q: IvQuestion) => {
    clearAll();
    piano.current?.playNote(q.note1.fr, q.note1.oct, { duration: 1.6 });
    piano.current?.playNote(q.note2.fr, q.note2.oct, { duration: 1.6 });
  }, [clearAll]);

  // ── Game ──────────────────────────────────────────────────────────────────
  const startNew = useCallback(() => {
    clearAll();
    busy.current = false;
    setAnswers([]);
    setFeedback(null);
    setShowViz(false);
    setQIdx(0);

    const pool = shuffle(ALL_PAIRS.filter(p => p.level === level)).slice(0, 10);
    setQuestions(pool);
    setOptions(pool.map(q => makeOptions(q.interval, level)));
    setPhase("question");

    // Auto-play first interval melodically
    const t = setTimeout(() => {
      if (pool[0]) {
        piano.current?.playNote(pool[0].note1.fr, pool[0].note1.oct, { duration: 1.2 });
        const t2 = setTimeout(() => {
          piano.current?.playNote(pool[0].note2.fr, pool[0].note2.oct, { duration: 1.2 });
        }, 600);
        timers.current.push(t2);
      }
    }, 300);
    timers.current.push(t);
  }, [level, clearAll]);

  const handleAnswer = useCallback((chosen: IvDef) => {
    if (phase !== "question" || busy.current || !questions[qIdx]) return;
    busy.current = true;

    const expected = questions[qIdx].interval;
    const ok = chosen.name === expected.name;

    setFeedback({ chosen: chosen.name, ok });
    setAnswers(prev => [...prev, { correct: ok, chosen: chosen.name, expected: expected.name }]);

    // Play the chosen interval melodically for feedback
    piano.current?.playNote(questions[qIdx].note1.fr, questions[qIdx].note1.oct, { duration: 1.0 });
    if (!ok) {
      const t = setTimeout(() => {
        piano.current?.playNote(questions[qIdx].note2.fr, questions[qIdx].note2.oct, { duration: 1.0 });
      }, 700);
      timers.current.push(t);
    } else {
      const t = setTimeout(() => {
        piano.current?.playNote(questions[qIdx].note2.fr, questions[qIdx].note2.oct, { duration: 1.0 });
      }, 500);
      timers.current.push(t);
    }

    // Show visualisation
    const t = setTimeout(() => setShowViz(true), 600);
    timers.current.push(t);
  }, [phase, questions, qIdx]);

  const handleNext = useCallback(() => {
    setShowViz(false);
    setFeedback(null);
    busy.current = false;
    const next = qIdx + 1;
    if (next >= questions.length) {
      setPhase("complete");
    } else {
      setQIdx(next);
      // Auto-play next interval
      const t = setTimeout(() => {
        if (questions[next]) playMelodic(questions[next]);
      }, 200);
      timers.current.push(t);
    }
  }, [qIdx, questions, playMelodic]);

  // ── Render ────────────────────────────────────────────────────────────────
  const levelColors: Record<number, string> = { 1: "#16a34a", 2: "#2563eb", 3: "#7c3aed" };
  const levelNames = ["8 intervalles", "12 intervalles", "14 intervalles"];
  const score = answers.filter(a => a.correct).length;
  const currentQ = questions[qIdx];
  const currentOpts = options[qIdx] ?? [];

  return (
    <div style={{
      minHeight: "100vh", background: BG,
      display: "flex", flexDirection: "column",
      alignItems: "center",
      padding: "2rem 1rem 4rem",
      fontFamily: "system-ui, sans-serif",
    }}>
      {/* Hidden piano */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={piano} octaves={5} startOctave={2} showLabels={false} />
      </div>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ margin: 0, fontSize: "1.8rem", fontWeight: 800, color: PURPLE, letterSpacing: "-0.03em" }}>
          🎼 Dictée d&apos;intervalles
        </h1>
        <p style={{ margin: "0.4rem 0 0", color: "#666", fontSize: "0.95rem" }}>
          Écoute les deux notes et identifie l&apos;intervalle
        </p>
      </div>

      {/* Level selector */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem" }}>
        {([1, 2, 3] as const).map(l => (
          <button key={l}
            onClick={() => { setLevel(l); setPhase("idle"); clearAll(); setAnswers([]); setFeedback(null); setShowViz(false); }}
            style={{
              padding: "0.45rem 1.1rem", borderRadius: 24,
              border: `2px solid ${level === l ? levelColors[l] : "#ddd"}`,
              background: level === l ? levelColors[l] : "#fff",
              color: level === l ? "#fff" : "#555",
              fontWeight: 700, fontSize: "0.85rem", cursor: "pointer",
            }}
          >
            Niv.{l} — {levelNames[l - 1]}
          </button>
        ))}
      </div>

      {/* Main card */}
      <div style={{
        width: "100%", maxWidth: 640,
        background: "#fff", borderRadius: 18,
        boxShadow: "0 4px 32px rgba(92,61,110,0.10)",
        minHeight: 320,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: "1.5rem",
        overflow: "hidden",
      }}>

        {/* ── IDLE ── */}
        {phase === "idle" && (
          <div style={{ textAlign: "center", padding: "2rem" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎼</div>
            <p style={{ color: "#444", marginBottom: "1.5rem", fontSize: "0.95rem", lineHeight: 1.6 }}>
              10 intervalles à identifier.<br />
              Écoute les deux notes et choisis parmi {poolForLevel(level).length} propositions.
            </p>
            <button onClick={startNew} style={btnStyle(PURPLE, "#fff")}>
              Commencer
            </button>
          </div>
        )}

        {/* ── QUESTION ── */}
        {phase === "question" && currentQ && (
          <div style={{ width: "100%", padding: "1.5rem 1.5rem 0" }}>
            {/* Progress dots */}
            <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: "1rem" }}>
              {questions.map((_, i) => {
                const done = i < answers.length;
                const cur  = i === qIdx;
                return (
                  <div key={i} style={{
                    width: 10, height: 10, borderRadius: "50%",
                    background: done
                      ? (answers[i]?.correct ? GREEN : RED)
                      : cur ? PURPLE : "#e0d8ea",
                  }} />
                );
              })}
            </div>

            <p style={{ textAlign: "center", color: "#888", fontSize: "0.85rem", marginBottom: "0.25rem" }}>
              Question <strong style={{ color: PURPLE }}>{qIdx + 1}</strong> / {questions.length}
            </p>
            <p style={{ textAlign: "center", fontWeight: 700, color: PURPLE, fontSize: "1.05rem", marginBottom: "1rem" }}>
              Quel est cet intervalle ?
            </p>

            {/* Playback buttons */}
            <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", marginBottom: "1.2rem" }}>
              <button onClick={() => playMelodic(currentQ)} style={btnStyle("#f0ebfa", PURPLE, true)}>
                ▶ Mélodie
              </button>
              <button onClick={() => playHarmonic(currentQ)} style={btnStyle("#f0ebfa", PURPLE, true)}>
                ▶ Harmonie
              </button>
            </div>

            {/* Option grid */}
            <div key={qIdx} style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "0.5rem",
              marginBottom: "1rem",
              paddingBottom: showViz ? 0 : "1.5rem",
            }}>
              {currentOpts.map(opt => {
                const isChosen   = feedback?.chosen === opt.name;
                const isExpected = feedback !== null && !feedback.ok && currentQ.interval.name === opt.name;
                let bg = "#f5f0fb", color = PURPLE, border = "2px solid #e0d8ea";
                if (isChosen && feedback?.ok)   { bg = GREEN;    color = "#fff"; border = `2px solid ${GREEN}`; }
                if (isChosen && !feedback?.ok)  { bg = RED;      color = "#fff"; border = `2px solid ${RED}`; }
                if (isExpected)                  { bg = "#dcfce7"; color = GREEN;  border = `2px solid ${GREEN}`; }
                return (
                  <button key={opt.name}
                    onClick={() => handleAnswer(opt)}
                    disabled={!!feedback}
                    style={{
                      padding: "0.65rem 0.5rem", borderRadius: 10,
                      border, background: bg, color,
                      fontWeight: 600, fontSize: "0.82rem", cursor: feedback ? "default" : "pointer",
                      opacity: feedback && !isChosen && !isExpected ? 0.5 : 1,
                      textAlign: "center",
                    }}
                  >
                    {opt.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ── COMPLETE ── */}
        {phase === "complete" && (
          <div style={{ width: "100%", textAlign: "center", padding: "2rem" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
              {score === 10 ? "🎉" : score >= 7 ? "👍" : "💪"}
            </div>
            <p style={{ fontSize: "1.4rem", fontWeight: 800, color: PURPLE, margin: "0 0 0.3rem" }}>
              {score} / {answers.length}
            </p>
            <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "1.4rem" }}>
              {score === 10
                ? "Excellent ! Oreille absolue !"
                : score >= 7 ? "Très bien ! Continue comme ça."
                : score >= 5 ? "Pas mal ! Rejoue pour progresser."
                : "Continue à t'entraîner !"}
            </p>

            {/* Bilan */}
            <div style={{ textAlign: "left", marginBottom: "1.5rem" }}>
              {answers.map((a, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: "0.5rem",
                  padding: "0.4rem 0.7rem", borderRadius: 8,
                  background: a.correct ? "#f0fdf4" : "#fef2f2",
                  marginBottom: "0.35rem", fontSize: "0.85rem",
                }}>
                  <span style={{ color: a.correct ? GREEN : RED, fontWeight: 700, minWidth: 18 }}>
                    {a.correct ? "✓" : "✗"}
                  </span>
                  <span style={{ color: "#555", flex: 1 }}>{a.expected}</span>
                  {!a.correct && (
                    <span style={{ color: "#aaa", fontSize: "0.78rem" }}>
                      (tu as dit : {a.chosen})
                    </span>
                  )}
                </div>
              ))}
            </div>
            <button onClick={startNew} style={btnStyle(PURPLE, "#fff")}>
              Nouvelle dictée
            </button>
          </div>
        )}

        {/* ── VISUALISATION ── */}
        {phase === "question" && showViz && currentQ && (
          <VisualisationNote
            notes={[currentQ.note1, currentQ.note2]}
            label={`${currentQ.interval.name} — ${currentQ.interval.semitones} demi-ton${currentQ.interval.semitones > 1 ? "s" : ""}`}
            onNext={handleNext}
            onReplay={() => playMelodic(currentQ)}
          />
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 5 — Vérifier le typage**

```powershell
npx tsc --noEmit 2>&1 | Select-String "DicteeIntervalles"
```

Attendu : 0 erreur.

- [ ] **Step 6 — Commit**

```powershell
git add src/components/DicteeIntervalles.tsx
git commit -m "feat: DicteeIntervalles — 30 paires, 14 intervalles, 3 niveaux"
```

---

## Task 4 — dictee/page.tsx (tab switcher)

**Files:**
- Modify: `src/app/[locale]/dictee/page.tsx`

- [ ] **Step 1 — Réécrire dictee/page.tsx**

Remplacer le contenu entier du fichier par :

```tsx
"use client";

import React, { useState } from "react";
import DicteeHarmonique from "@/components/DicteeHarmonique";
import DicteeIntervalles from "@/components/DicteeIntervalles";

type Mode = "accords" | "intervalles";

const PURPLE = "#5C3D6E";

export default function DicteePage() {
  const [mode, setMode] = useState<Mode>("accords");

  return (
    <div>
      {/* Tab switcher */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "0.5rem",
        paddingTop: "1.5rem",
        paddingBottom: "0.25rem",
        background: "#faf8fc",
        fontFamily: "system-ui, sans-serif",
      }}>
        {(["accords", "intervalles"] as Mode[]).map(m => (
          <button
            key={m}
            onClick={() => setMode(m)}
            style={{
              padding: "0.45rem 1.2rem",
              borderRadius: 24,
              border: `2px solid ${mode === m ? PURPLE : "#ddd"}`,
              background: mode === m ? PURPLE : "#fff",
              color: mode === m ? "#fff" : "#666",
              fontWeight: 700,
              fontSize: "0.88rem",
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >
            {m === "accords" ? "🎵 Accords" : "🎼 Intervalles"}
          </button>
        ))}
      </div>

      {/* Active mode */}
      {mode === "accords"
        ? <DicteeHarmonique />
        : <DicteeIntervalles />
      }
    </div>
  );
}
```

- [ ] **Step 2 — Vérifier le typage et le build**

```powershell
npx tsc --noEmit
```

Attendu : 0 erreur TypeScript.

```powershell
npm run build 2>&1 | tail -20
```

Attendu : `✓ Compiled successfully` (ou équivalent Next.js).

- [ ] **Step 3 — Commit final**

```powershell
git add src/app/[locale]/dictee/page.tsx
git commit -m "feat: /dictee — tab switcher Accords / Intervalles + VisualisationNote"
```

---

## Task 5 — Vérification finale et commit de récap

- [ ] **Step 1 — Build complet propre**

```powershell
npm run build
```

Attendu : build sans erreur ni warning TypeScript.

- [ ] **Step 2 — Test manuel des 3 flux**

1. **Mode Accords** : démarrer une dictée niv.1, répondre → vérifier slide-in clavier + portée → "Suivant →" avance.
2. **Mode Intervalles niv.1** : les 8 boutons affichent les bons noms → cliquer "▶ Mélodie" joue les 2 notes → répondre → portée montre les 2 notes surlignées.
3. **Vérifier l'i18n** : changer la langue dans l'AppNav → la page `/dictee` se recharge correctement (pas de crash).

- [ ] **Step 3 — Commit de récap si pas d'ajustements**

Si tout est vert, aucun commit supplémentaire nécessaire. Sinon corriger et commiter les fixes.

---

## Self-Review

**Spec coverage :**
- [x] Tab switcher Accords / Intervalles → Task 4
- [x] VisualisationNote panneau bloquant → Tasks 1, 2, 3
- [x] Clavier piano 3 octaves, notes surlignées bleu → Task 1 step 2
- [x] Portée SVG complète (clé de sol, têtes, queues, altérations, lignes supp.) → Task 1 step 3
- [x] 14 intervalles, 3 niveaux → Task 3 step 1
- [x] 30 paires de notes → Task 3 step 2
- [x] Options : 8 boutons (pool exact niv.1, bonne+7 distracteurs niv.2/3) → Task 3 step 2 `makeOptions`
- [x] Boutons ▶ Mélodie + ▶ Harmonie → Task 3 step 4
- [x] Score + bilan final → Task 3 step 4
- [x] Styles 100% inline, zéro Tailwind → vérifié dans tout le code
- [x] PianoPlayer en notes françaises → `n("Do",4)` partout
- [x] `tsc --noEmit` + `npm run build` avant commit → Task 5

**Placeholders :** aucun TBD dans le plan.

**Type consistency :** `CN = { fr: string; oct: number }` utilisé dans les 3 composants. `VisualisationNoteProps.notes: CN[]` cohérent avec les appels dans DicteeHarmonique (`prog.chords[chordIdx].notes`) et DicteeIntervalles (`[currentQ.note1, currentQ.note2]`).

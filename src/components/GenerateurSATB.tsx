"use client";

import React, { useRef, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import { PROGRESSION_TEMPLATES, type ProgressionTemplate, type ProgressionCategory } from "@/data/progressions-templates";
import { generateSATBExercise, type Doigte, type GeneratedExercise } from "@/lib/satb-generator";
import type { Measure, NoteName, HarmoniaEditorProps } from "@/components/HarmoniaEditor";

const HarmoniaEditor = dynamic(() => import("@/components/HarmoniaEditor"), {
  ssr: false,
  loading: () => <div style={{ padding: 32, textAlign: "center", color: "#888" }}>Chargement de l'éditeur…</div>,
});

// ── Données UI ─────────────────────────────────────────────────────────────────

const KEY_FR: Record<string, string> = {
  "C":"Do M","G":"Sol M","D":"Ré M","A":"La M","E":"Mi M","B":"Si M","F#":"Fa♯ M","Gb":"Sol♭ M",
  "F":"Fa M","Bb":"Si♭ M","Eb":"Mi♭ M","Ab":"La♭ M","Db":"Ré♭ M","Cb":"Do♭ M",
  "Am":"La m","Em":"Mi m","Bm":"Si m","F#m":"Fa♯ m","C#m":"Do♯ m","G#m":"Sol♯ m",
  "Dm":"Ré m","Gm":"Sol m","Cm":"Do m","Fm":"Fa m","Bbm":"Si♭ m","Ebm":"Mi♭ m",
};

const KEYS_BY_LEVEL: { key: string; level: 1|2|3 }[] = [
  // Major
  { key:"C",   level:1 }, { key:"G",   level:1 }, { key:"F",   level:1 }, { key:"D",   level:1 },
  { key:"A",   level:2 }, { key:"E",   level:2 }, { key:"Bb",  level:2 }, { key:"Eb",  level:2 },
  { key:"B",   level:3 }, { key:"F#",  level:3 }, { key:"Db",  level:3 }, { key:"Ab",  level:3 },
  // Minor
  { key:"Am",  level:1 }, { key:"Em",  level:1 }, { key:"Dm",  level:1 }, { key:"Bm",  level:1 },
  { key:"F#m", level:2 }, { key:"C#m", level:2 }, { key:"Gm",  level:2 }, { key:"Cm",  level:2 },
  { key:"G#m", level:3 }, { key:"Ebm", level:3 }, { key:"Bbm", level:3 }, { key:"Fm",  level:3 },
];

const DOIGTE_INFO: { value: Doigte; label: string; desc: string }[] = [
  { value:"1", label:"① Fondamentale", desc:"La fondamentale de l'accord au soprano." },
  { value:"3", label:"③ Tierce",       desc:"La tierce de l'accord au soprano." },
  { value:"5", label:"⑤ Quinte",       desc:"La quinte de l'accord au soprano." },
  { value:"7", label:"⑦ Septième",     desc:"La septième de l'accord au soprano (si disponible)." },
];

const LEVEL_COLOR: Record<1|2|3, { bg: string; border: string; text: string }> = {
  1: { bg:"#E6F5EE", border:"#8ECFB7", text:"#0F6E56" },
  2: { bg:"#E6F1FB", border:"#A8C7EE", text:"#185FA5" },
  3: { bg:"#FEF0D9", border:"#F5C77E", text:"#BA7517" },
};

const CAT_LABELS: Record<ProgressionCategory, string> = {
  cadence:"Cadences", modulation:"Modulations", cycle:"Cycles", emprunt:"Emprunts", jazz:"Jazz",
};

const DOIGTE_FR: Record<Doigte, string> = { "1":"Fondamentale", "3":"Tierce", "5":"Quinte", "7":"Septième" };

type ExerciseMode = "chiffres" | "basse" | "dictee";

// ── Component ──────────────────────────────────────────────────────────────────

export default function GenerateurSATB() {
  const pianoRef = useRef<PianoPlayerRef>(null);

  const [step, setStep] = useState<"config" | "exercise">("config");
  const [template, setTemplate]     = useState<ProgressionTemplate | null>(null);
  const [selectedKey, setSelectedKey] = useState("C");
  const [doigte, setDoigte]         = useState<Doigte>("1");
  const [filterCat, setFilterCat]   = useState<ProgressionCategory | null>(null);
  const [filterDiff, setFilterDiff] = useState<1|2|3|null>(null);
  const [exercise, setExercise]     = useState<GeneratedExercise | null>(null);
  const [mode, setMode]             = useState<ExerciseMode>("chiffres");
  const [playing, setPlaying]       = useState(false);
  const [results, setResults]       = useState<Measure[] | null>(null);
  const [score, setScore]           = useState<number | null>(null);

  const filtered = PROGRESSION_TEMPLATES.filter(t => {
    if (filterCat  && t.categorie  !== filterCat)  return false;
    if (filterDiff && t.difficulte !== filterDiff) return false;
    return true;
  });

  const generate = useCallback(() => {
    if (!template) return;
    const ex = generateSATBExercise(template, selectedKey, doigte);
    setExercise(ex);
    setResults(null);
    setScore(null);
    setStep("exercise");
  }, [template, selectedKey, doigte]);

  const handlePlaySolution = useCallback(() => {
    if (!exercise || !pianoRef.current) return;
    setPlaying(true);
    pianoRef.current.playVoicingSequence(exercise.dotKeys, { interval: 1.5, arp: true, arpDelay: 0.06 });
    setTimeout(() => setPlaying(false), exercise.dotKeys.length * 1500 + 1200);
  }, [exercise]);

  const handleComplete = useCallback((measures: Measure[]) => {
    if (!exercise) return;
    // Compare pitch classes
    let correct = 0, total = 0;
    const sol = exercise.solution;
    for (let i = 0; i < sol.length; i++) {
      for (const v of ["soprano","alto","tenor","bass"] as const) {
        total++;
        const s = sol[i][v];
        const m = measures[i]?.[v];
        if (m?.name && s?.name) {
          const sPC = s.name.replace("#","is").replace("b","es");
          const mPC = m.name.replace("#","is").replace("b","es");
          if (sPC === mPC) correct++;
        }
      }
    }
    setResults(measures);
    setScore(Math.round((correct / total) * 100));
  }, [exercise]);

  const initialNotes: HarmoniaEditorProps["initialNotes"] = exercise && mode === "basse"
    ? { bass: exercise.mesures.map(m => ({ name: m.bass.name as NoteName, octave: m.bass.octave })) }
    : undefined;

  // ── Step 1: Config ────────────────────────────────────────────────────────

  if (step === "config") return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2rem 1rem" }}>

      {/* Header */}
      <div style={{ marginBottom: "2rem" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "#185FA5", textTransform: "uppercase", marginBottom: 6 }}>
          ⊞ Générateur d'exercices SATB
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 500, color: "#1a1a1a", margin: "0 0 8px" }}>
          Créer un exercice SATB
        </h1>
        <p style={{ fontSize: 14, color: "#666", margin: 0, lineHeight: 1.6 }}>
          Choisissez une progression harmonique, une tonalité et un doigté de départ.
          Le générateur calculera les 4 voix SATB selon les règles de conduite des voix.
        </p>
      </div>

      {/* 3-panel grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginBottom: "2rem" }}>

        {/* Panel A — Progression */}
        <div style={{ background: "#fff", border: "0.5px solid #e0dbd3", borderRadius: 12, padding: 20, gridColumn: "1/3" }}>
          <div style={{ fontWeight: 600, fontSize: 13, color: "#1a1a1a", marginBottom: 12 }}>
            A — Progression harmonique
          </div>

          {/* Filters */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
            {([null,1,2,3] as (1|2|3|null)[]).map(d => (
              <button key={String(d)} onClick={() => setFilterDiff(d)}
                style={{
                  padding: "4px 12px", borderRadius: 16, fontSize: 11, fontWeight: 600, cursor: "pointer",
                  border: "0.5px solid",
                  background: filterDiff === d ? "#1a1a1a" : "#fff",
                  color: filterDiff === d ? "#fff" : "#666",
                  borderColor: filterDiff === d ? "#1a1a1a" : "#e0dbd3",
                }}
              >
                {d === null ? "Tous niveaux" : `Niveau ${d}`}
              </button>
            ))}
            {(["cadence","cycle","emprunt","jazz","modulation"] as ProgressionCategory[]).map(cat => (
              <button key={cat} onClick={() => setFilterCat(filterCat === cat ? null : cat)}
                style={{
                  padding: "4px 12px", borderRadius: 16, fontSize: 11, fontWeight: 600, cursor: "pointer",
                  border: "0.5px solid",
                  background: filterCat === cat ? "#185FA5" : "#fff",
                  color: filterCat === cat ? "#fff" : "#666",
                  borderColor: filterCat === cat ? "#185FA5" : "#e0dbd3",
                }}
              >
                {CAT_LABELS[cat]}
              </button>
            ))}
          </div>

          {/* Progression cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 8, maxHeight: 380, overflowY: "auto" }}>
            {filtered.map(t => {
              const lv = t.difficulte;
              const sel = template?.id === t.id;
              return (
                <button key={t.id} onClick={() => setTemplate(t)}
                  style={{
                    textAlign: "left", padding: "12px 14px", borderRadius: 10, cursor: "pointer",
                    border: sel ? "1.5px solid #185FA5" : "0.5px solid #e0dbd3",
                    background: sel ? "#EBF3FD" : "#fafaf8",
                    transition: "border-color .1s, background .1s",
                  }}
                >
                  <div style={{ fontSize: 13, fontWeight: 600, color: sel ? "#185FA5" : "#1a1a1a", marginBottom: 4 }}>
                    {t.nom}
                  </div>
                  <div style={{ fontSize: 11, color: "#888", marginBottom: 6, lineHeight: 1.4 }}>
                    {t.symboles.join(" – ")}
                  </div>
                  <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                    <span style={{
                      fontSize: 9, fontWeight: 700, padding: "2px 6px", borderRadius: 8,
                      background: LEVEL_COLOR[lv].bg, color: LEVEL_COLOR[lv].text, border: `0.5px solid ${LEVEL_COLOR[lv].border}`,
                    }}>
                      {"●".repeat(lv)} Niv. {lv}
                    </span>
                    <span style={{ fontSize: 9, color: "#aaa", padding: "2px 0" }}>
                      {CAT_LABELS[t.categorie]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {template && (
            <div style={{ marginTop: 12, padding: 12, background: "#F0F6FF", borderRadius: 8, border: "0.5px solid #C2D5EC" }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#185FA5", marginBottom: 4 }}>{template.nom}</div>
              <div style={{ fontSize: 11, color: "#444", lineHeight: 1.5, marginBottom: 6 }}>{template.description}</div>
              <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                {template.concepts.map(c => (
                  <span key={c} style={{ fontSize: 10, padding: "2px 8px", borderRadius: 10, background: "#fff", border: "0.5px solid #C2D5EC", color: "#185FA5" }}>{c}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Panel B + C stacked */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

          {/* Panel B — Tonalité */}
          <div style={{ background: "#fff", border: "0.5px solid #e0dbd3", borderRadius: 12, padding: 20, flex: 1 }}>
            <div style={{ fontWeight: 600, fontSize: 13, color: "#1a1a1a", marginBottom: 10 }}>B — Tonalité</div>
            <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
              {KEYS_BY_LEVEL.map(({ key, level }) => {
                const sel = selectedKey === key;
                const lv = LEVEL_COLOR[level];
                return (
                  <button key={key} onClick={() => setSelectedKey(key)}
                    style={{
                      padding: "5px 8px", borderRadius: 8, cursor: "pointer", fontSize: 11, fontWeight: 600,
                      border: sel ? `1.5px solid ${lv.text}` : `0.5px solid ${lv.border}`,
                      background: sel ? lv.bg : "#fafaf8",
                      color: sel ? lv.text : "#666",
                      minWidth: 48,
                    }}
                  >
                    {key}
                  </button>
                );
              })}
            </div>
            <div style={{ marginTop: 10, fontSize: 11, color: "#888" }}>
              Tonalité choisie : <strong style={{ color: "#185FA5" }}>{KEY_FR[selectedKey] ?? selectedKey}</strong>
            </div>
          </div>

          {/* Panel C — Doigté */}
          <div style={{ background: "#fff", border: "0.5px solid #e0dbd3", borderRadius: 12, padding: 20 }}>
            <div style={{ fontWeight: 600, fontSize: 13, color: "#1a1a1a", marginBottom: 10 }}>C — Doigté de départ</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {DOIGTE_INFO.map(d => (
                <button key={d.value} onClick={() => setDoigte(d.value)}
                  style={{
                    textAlign: "left", padding: "8px 12px", borderRadius: 8, cursor: "pointer",
                    border: doigte === d.value ? "1.5px solid #185FA5" : "0.5px solid #e0dbd3",
                    background: doigte === d.value ? "#EBF3FD" : "#fafaf8",
                  }}
                >
                  <div style={{ fontSize: 12, fontWeight: 600, color: doigte === d.value ? "#185FA5" : "#1a1a1a" }}>
                    {d.label}
                  </div>
                  <div style={{ fontSize: 10, color: "#888", marginTop: 2 }}>{d.desc}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Generate button */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={generate}
          disabled={!template}
          style={{
            padding: "14px 40px", borderRadius: 12, fontSize: 16, fontWeight: 700, cursor: template ? "pointer" : "not-allowed",
            background: template ? "#1a1a1a" : "#ccc", color: "#fff", border: "none",
            boxShadow: template ? "0 4px 16px rgba(0,0,0,0.18)" : "none",
          }}
        >
          🎵 Générer l'exercice
        </button>
      </div>
      {!template && (
        <p style={{ textAlign: "center", fontSize: 12, color: "#aaa", marginTop: 8 }}>
          Sélectionnez d'abord une progression harmonique
        </p>
      )}
    </div>
  );

  // ── Step 2: Exercise ──────────────────────────────────────────────────────

  if (!exercise) return null;

  const lv = exercise.template.difficulte;
  const keyLabel = KEY_FR[exercise.tonalite] ?? exercise.tonalite;

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2rem 1rem" }}>

      {/* Back button */}
      <button onClick={() => { setStep("config"); setResults(null); setScore(null); }}
        style={{ background: "none", border: "none", cursor: "pointer", fontSize: 13, color: "#888", marginBottom: 16, padding: 0 }}>
        ← Modifier les paramètres
      </button>

      {/* Title bar */}
      <div style={{ marginBottom: "1.5rem" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "#185FA5", textTransform: "uppercase", marginBottom: 6 }}>
          Exercice SATB généré
        </div>
        <h1 style={{ fontSize: 24, fontWeight: 500, color: "#1a1a1a", margin: "0 0 8px" }}>
          {exercise.template.nom} en {keyLabel} — Soprano : {DOIGTE_FR[exercise.doigte]}
        </h1>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 10 }}>
          <span style={{
            fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 8,
            background: LEVEL_COLOR[lv].bg, color: LEVEL_COLOR[lv].text, border: `0.5px solid ${LEVEL_COLOR[lv].border}`,
          }}>
            {"●".repeat(lv)} Niveau {lv}
          </span>
          <span style={{ fontSize: 10, padding: "3px 8px", borderRadius: 8, background: "#f0ece6", color: "#666", border: "0.5px solid #e0dbd3" }}>
            {CAT_LABELS[exercise.template.categorie]}
          </span>
          {exercise.template.concepts.map(c => (
            <span key={c} style={{ fontSize: 10, padding: "3px 8px", borderRadius: 8, background: "#f7f4f0", color: "#888", border: "0.5px solid #ede8df" }}>{c}</span>
          ))}
        </div>

        {/* Controls */}
        <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
          <button
            onClick={handlePlaySolution}
            disabled={playing}
            style={{
              padding: "8px 18px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer",
              background: playing ? "#f0ece6" : "#1a1a1a", color: playing ? "#888" : "#fff", border: "none",
            }}
          >
            {playing ? "♪ Lecture…" : "▶ Écouter la solution"}
          </button>

          {/* Mode selector */}
          <div style={{ display: "flex", gap: 6, background: "#f4f1ec", borderRadius: 8, padding: 4 }}>
            {(["chiffres","basse","dictee"] as ExerciseMode[]).map(m => (
              <button key={m} onClick={() => setMode(m)}
                style={{
                  padding: "6px 12px", borderRadius: 6, fontSize: 11, fontWeight: 600, cursor: "pointer",
                  border: "none",
                  background: mode === m ? "#fff" : "transparent",
                  color: mode === m ? "#1a1a1a" : "#888",
                  boxShadow: mode === m ? "0 1px 4px rgba(0,0,0,0.1)" : "none",
                }}
              >
                {m === "chiffres" ? "Chiffres romains" : m === "basse" ? "Basse donnée" : "Dictée SATB"}
              </button>
            ))}
          </div>

          <button
            onClick={() => { setExercise(generateSATBExercise(exercise.template, exercise.tonalite, exercise.doigte)); setResults(null); setScore(null); }}
            style={{ padding: "8px 14px", borderRadius: 8, fontSize: 12, cursor: "pointer", background: "#fff", border: "0.5px solid #e0dbd3", color: "#555" }}
          >
            ↺ Regénérer
          </button>
        </div>
      </div>

      {/* Chord labels */}
      <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
        {exercise.accords.map((acc, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 11, color: "#888", marginBottom: 2 }}>{exercise.labels[i]}</div>
            <div style={{
              padding: "6px 14px", borderRadius: 8, fontSize: 13, fontWeight: 600,
              background: "#EBF3FD", color: "#185FA5", border: "0.5px solid #A8C7EE",
            }}>
              {acc}
            </div>
          </div>
        ))}
      </div>

      {/* HarmoniaEditor */}
      <div style={{ marginBottom: "1.5rem" }}>
        <HarmoniaEditor
          title={mode === "dictee" ? "Dictée SATB — Écoutez et recopiez" : mode === "basse" ? "Réalisez les voix intérieures" : "Réalisez la progression"}
          subtitle={`${exercise.template.nom} — ${keyLabel}`}
          measures={exercise.labels}
          keySignature={exercise.tonalite.replace("m","")}
          initialNotes={initialNotes}
          solution={exercise.solution.map(m => ({
            soprano: { name: m.soprano.name as NoteName, octave: m.soprano.octave },
            alto:    { name: m.alto.name    as NoteName, octave: m.alto.octave    },
            tenor:   { name: m.tenor.name   as NoteName, octave: m.tenor.octave   },
            bass:    { name: m.bass.name    as NoteName, octave: m.bass.octave    },
          }))}
          onComplete={handleComplete}
        />
      </div>

      {/* Results */}
      {score !== null && (
        <div style={{
          padding: 20, borderRadius: 12, marginBottom: "1.5rem",
          background: score >= 75 ? "#E6F5EE" : score >= 50 ? "#FEF0D9" : "#FEEEEA",
          border: `0.5px solid ${score >= 75 ? "#8ECFB7" : score >= 50 ? "#F5C77E" : "#F5B5AA"}`,
        }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: score >= 75 ? "#0F6E56" : score >= 50 ? "#BA7517" : "#CC2200", marginBottom: 6 }}>
            Score : {score}/100
          </div>
          <div style={{ fontSize: 13, color: "#555" }}>
            {score >= 90 ? "Excellent ! Votre réalisation SATB est correcte." :
             score >= 75 ? "Très bien ! Quelques ajustements possibles." :
             score >= 50 ? "Correct, mais plusieurs notes à réviser." :
             "Difficile — réécoutez la solution et recommencez."}
          </div>
        </div>
      )}

      {/* Rules applied */}
      <div style={{ background: "#f4f1ec", borderRadius: 10, padding: 16, marginBottom: "1.5rem" }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: "#555", marginBottom: 8 }}>Règles appliquées</div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {exercise.reglesAppliquees.map(r => (
            <span key={r} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 8, background: "#fff", border: "0.5px solid #e0dbd3", color: "#555" }}>
              ✓ {r}
            </span>
          ))}
        </div>
      </div>

      {/* Solution reference */}
      <div style={{ background: "#fff", border: "0.5px solid #e0dbd3", borderRadius: 10, padding: 16 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: "#555", marginBottom: 10 }}>Solution de référence</div>
        <div style={{ display: "flex", gap: 12, overflowX: "auto" }}>
          {exercise.solution.map((m, i) => (
            <div key={i} style={{ textAlign: "center", minWidth: 70 }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: "#185FA5", marginBottom: 4 }}>{exercise.labels[i]}</div>
              {(["soprano","alto","tenor","bass"] as const).map(v => (
                <div key={v} style={{
                  fontSize: 11, padding: "2px 6px", marginBottom: 2, borderRadius: 4,
                  background: v === "soprano" ? "#F0F6FF" : v === "alto" ? "#F0F6FF" : v === "tenor" ? "#F0F9F4" : "#F9F3E6",
                  color: "#333",
                }}>
                  <span style={{ fontSize: 9, color: "#aaa", marginRight: 3 }}>
                    {v === "soprano" ? "S" : v === "alto" ? "A" : v === "tenor" ? "T" : "B"}
                  </span>
                  {m[v].name}{m[v].octave}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom actions */}
      <div style={{ display: "flex", gap: 10, marginTop: "1.5rem", flexWrap: "wrap" }}>
        <button
          onClick={() => {
            const keys = KEYS_BY_LEVEL.map(k => k.key);
            const randKey = keys[Math.floor(Math.random() * keys.length)];
            setExercise(generateSATBExercise(exercise.template, randKey, exercise.doigte));
            setSelectedKey(randKey);
            setResults(null);
            setScore(null);
          }}
          style={{ padding: "10px 20px", borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: "pointer", background: "#185FA5", color: "#fff", border: "none" }}
        >
          🎲 Autre tonalité
        </button>
        <button
          onClick={() => { setStep("config"); setResults(null); setScore(null); }}
          style={{ padding: "10px 20px", borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: "pointer", background: "#fff", color: "#1a1a1a", border: "0.5px solid #e0dbd3" }}
        >
          ← Changer la progression
        </button>
      </div>

      {/* Hidden PianoPlayer */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}>
        <PianoPlayer ref={pianoRef} octaves={4} startOctave={2} />
      </div>
    </div>
  );
}

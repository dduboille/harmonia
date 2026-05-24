"use client";

/**
 * Cours4.tsx
 * Harmonia · Niveau 1 · Cours 4 — Cadences et progressions
 *
 * TODO: i18n — basculer vers next-intl (passe dédiée)
 *
 * Sections :
 * 1. Les cadences — définition et 5 types
 * 2. Techniques d'enchaînement — extension, pendule, cycle des quintes
 * 3. Entraînement — quiz
 *
 * Convention Harmonia : noms de notes en anglais (C D E F G A B)
 * Audio : PianoPlayer via playChord / playProgression
 */

import React, { useRef, useState, useCallback } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { useTerm } from "@/hooks/useTerm";
import { cours4Content } from "@/data/cours4Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import { SATB } from "@/lib/satb-voicings";
import MaitreCard from "@/components/MaitreCard";
import InversionQuiz from "@/components/InversionQuiz";
import { INVERSION_EXERCISES } from "@/exercises/cours-inversion-exercises";
import { VueConservatoire } from "@/components/VueConservatoire";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Section {
  id: string;
  label: string;
}

// ─── Helpers audio ────────────────────────────────────────────────────────────

// PianoPlayer attend des noms de notes EN FRANÇAIS (Do Ré Mi Fa Sol La Si)
// Les dotKeys ont le format "NomFrançais:octave"
const CHORDS = SATB;

// Joue une note de basse + accord au-dessus
function playChord(ref: React.RefObject<PianoPlayerRef>, keys: string[], duration = 1.8) {
  keys.forEach((key, i) => {
    const [note, octStr] = key.split(":");
    setTimeout(() => ref.current?.playNote(note, parseInt(octStr), { duration }), 0);
  });
}

function playProgression(
  ref: React.RefObject<PianoPlayerRef>,
  chordNames: string[],
  gap = 900
) {
  chordNames.forEach((name, i) => {
    const keys = CHORDS[name] ?? [];
    setTimeout(() => playChord(ref, keys, 1.2), i * gap);
  });
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SECTIONS_IDS = ["cadences","progressions","conservatoire","quiz"] as const;

interface CadenceDef {
  id: string;
  nameKey: string;
  structure: string;
  progression: string[];
  conditionKey?: string;
  effectKey: string;
  color: string;
  bg: string;
  analogyKey: string;
}

const CADENCES: CadenceDef[] = [
  {
    id: "parfaite",
    nameKey: "cadenceParfaiteName",
    structure: "V → I",
    progression: ["G7","C"],
    conditionKey: "cadenceParfaiteCondition",
    effectKey: "cadenceParfaiteEffect",
    color: "#0F6E56",
    bg: "#E1F5EE",
    analogyKey: "cadenceParfaiteAnalogy",
  },
  {
    id: "imparfaite",
    nameKey: "cadenceImparfaiteName",
    structure: "V → I",
    progression: ["G7/B","C/E"],
    conditionKey: "cadenceImparfaiteCondition",
    effectKey: "cadenceImparfaiteEffect",
    color: "#534AB7",
    bg: "#EEEDFE",
    analogyKey: "cadenceImparfaiteAnalogy",
  },
  {
    id: "rompue",
    nameKey: "cadenceRomputeName",
    structure: "V → VI",
    progression: ["G7","Am"],
    effectKey: "cadenceRompueEffect",
    color: "#BA7517",
    bg: "#FAEEDA",
    analogyKey: "cadenceRompueAnalogy",
  },
  {
    id: "plagale",
    nameKey: "cadencePlagaleName",
    structure: "IV → I",
    progression: ["F/A","C"],
    effectKey: "cadencePlagaleEffect",
    color: "#993C1D",
    bg: "#FAECE7",
    analogyKey: "cadencePlagaleAnalogy",
  },
  {
    id: "demi",
    nameKey: "cadenceDemiName",
    structure: "… → V",
    progression: ["Dm","G7/B"],
    effectKey: "cadenceDemiEffect",
    color: "#185FA5",
    bg: "#E6F1FB",
    analogyKey: "cadenceDemiAnalogy",
  },
];

interface ProgressionTech {
  id: string;
  nameKey: string;
  descKey: string;
  detailKey: string;
  progression: string[];
  color: string;
  bg: string;
}

const PROGRESSION_TECHS: ProgressionTech[] = [
  {
    id: "extension",
    nameKey: "techExtensionName",
    descKey: "techExtensionDesc",
    detailKey: "techExtensionDetail",
    progression: ["Dm","F/A","G7/B","C"],
    color: "#0F6E56",
    bg: "#E1F5EE",
  },
  {
    id: "pendule",
    nameKey: "techPenduleName",
    descKey: "techPenduleDesc",
    detailKey: "techPenduleDetail",
    progression: ["C","F/A","C/E","F/A","G7/B","C"],
    color: "#534AB7",
    bg: "#EEEDFE",
  },
  {
    id: "cycle",
    nameKey: "techCycleName",
    descKey: "techCycleDesc",
    detailKey: "techCycleDetail",
    progression: ["C","F/A","Bdim/D","Em/B","Am","Dm/F","G7/B","C"],
    color: "#BA7517",
    bg: "#FAEEDA",
  },
];

// ─── Quiz ─────────────────────────────────────────────────────────────────────

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const QUIZ_COUNT = 8;

// ─── Styles ───────────────────────────────────────────────────────────────────

const S = {
  wrap:     { fontFamily: "var(--font-sans, system-ui)", maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" } as React.CSSProperties,
  header:   { padding: "1.5rem 0 1rem", borderBottom: "0.5px solid #e5e5e5", marginBottom: "1.25rem" } as React.CSSProperties,
  badge:    { display: "inline-block", background: "#E6F1FB", color: "#185FA5", fontSize: 11, fontWeight: 500, padding: "2px 10px", borderRadius: 20, marginBottom: 6 } as React.CSSProperties,
  h1:       { fontSize: 26, fontWeight: 500, color: "#111", margin: 0 } as React.CSSProperties,
  subtitle: { fontSize: 14, color: "#666", marginTop: 4, lineHeight: 1.6 } as React.CSSProperties,
  nav:      { display: "flex", gap: 6, flexWrap: "wrap" as const, marginBottom: "1.5rem" },
  pill:     (active: boolean): React.CSSProperties => ({
    fontSize: 12, padding: "5px 14px",
    border: `0.5px solid ${active ? "#333" : "#ddd"}`,
    borderRadius: 20, cursor: "pointer",
    background: active ? "#111" : "transparent",
    color: active ? "#fff" : "#666",
    transition: "all .15s",
  }),
  stitle:   { fontSize: 17, fontWeight: 500, color: "#111", marginBottom: 8 } as React.CSSProperties,
  sbody:    { fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: "1rem" } as React.CSSProperties,
  infoBox:  { borderLeft: "2px solid #185FA5", padding: "8px 14px", background: "#E6F1FB", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#0C447C", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
};

// ─── Composant ────────────────────────────────────────────────────────────────

export default function Cours4() {
  const [activeSection, setActiveSection] = useState("cadences");
  const i18n = useCoursI18n("cours4");
  const tc = i18n.tc;
  const n = (key: string) => tc(`narrative.${key}` as any);
  const tr = useTerm();
  const { questions: ALL_QUESTIONS } = useCoursContent(cours4Content);
  const [activeCadence, setActiveCadence] = useState<string | null>(null);
  const [activeTech,    setActiveTech]    = useState<string | null>(null);

  // Quiz
  const [quizQuestions, setQuizQuestions] = useState(() => shuffleArray(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [quizIdx,       setQuizIdx]       = useState(0);
  const [quizScore,     setQuizScore]     = useState(0);
  const [quizAnswered,  setQuizAnswered]  = useState(false);
  const [quizDone,      setQuizDone]      = useState(false);
  const [selectedOpt,   setSelectedOpt]   = useState<number | null>(null);

  const pianoRef = useRef<PianoPlayerRef>(null);

  const handlePlayCadence = useCallback((progression: string[]) => {
    playProgression(pianoRef as React.RefObject<PianoPlayerRef>, progression, 900);
  }, []);

  const handlePlayTech = useCallback((progression: string[]) => {
    playProgression(pianoRef as React.RefObject<PianoPlayerRef>, progression, 800);
  }, []);

  const answerQuiz = (optIdx: number) => {
    if (quizAnswered) return;
    setSelectedOpt(optIdx);
    setQuizAnswered(true);
    if (optIdx === quizQuestions[quizIdx].a) setQuizScore((s) => s + 1);
  };

  const nextQuiz = () => {
    if (quizIdx + 1 >= QUIZ_COUNT) { setQuizDone(true); }
    else { setQuizIdx((i) => i + 1); setQuizAnswered(false); setSelectedOpt(null); }
  };

  const resetQuiz = () => {
    setQuizQuestions(shuffleArray(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
    setQuizIdx(0); setQuizScore(0);
    setQuizAnswered(false); setSelectedOpt(null); setQuizDone(false);
  };

  return (
    <div style={S.wrap}>
      {/* Piano caché */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={3} startOctave={3} showLabels={false} />
      </div>

      {/* Header */}
      <div style={S.header}>
        <span style={S.badge}>{i18n.badge}</span>
        <h1 style={S.h1}>{i18n.title}</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Joseph Haydn"
        period={n("maitrePeriod")}
        emoji="😄"
        concept={n("maitreConceptLabel")}
        anecdote={n("maitreAnecdote")}
        lesson={n("maitreLesson")}
        accentColor="#185FA5"
      />

      {/* Navigation */}
      <nav style={S.nav}>
        {SECTIONS_IDS.map((id) => (
          <button key={id} style={S.pill(activeSection === id)} onClick={() => setActiveSection(id)}>
            {i18n.sectionLabel(id)}
          </button>
        ))}
      </nav>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 1 : CADENCES
      ══════════════════════════════════════════════════════════════ */}
      {activeSection === "cadences" && (
        <div>
          <h2 style={S.stitle}>{n("cadencesH2")}</h2>
          <p style={S.sbody} dangerouslySetInnerHTML={{ __html: n("cadencesIntro") }} />

          <div style={S.infoBox} dangerouslySetInnerHTML={{ __html: n("cadencesInfoBox") }} />

          <p style={{ fontSize: 13, color: "#888", marginBottom: 16 }}>
            {n("cadencesClickHint")}
          </p>

          {CADENCES.map((cad) => (
            <div
              key={cad.id}
              onClick={() => {
                setActiveCadence(activeCadence === cad.id ? null : cad.id);
                handlePlayCadence(cad.progression);
              }}
              style={{
                border: `0.5px solid ${activeCadence === cad.id ? cad.color : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 8,
                overflow: "hidden",
                cursor: "pointer",
                background: activeCadence === cad.id ? cad.bg : "#fff",
                transition: "all .15s",
              }}
            >
              {/* Header cadence */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px" }}>
                <div style={{
                  fontSize: 13, fontWeight: 700, color: cad.color,
                  background: cad.bg, border: `0.5px solid ${cad.color}`,
                  padding: "3px 10px", borderRadius: 6, whiteSpace: "nowrap" as const,
                  fontFamily: "monospace",
                }}>
                  {cad.structure}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>{n(cad.nameKey)}</div>
                  <div style={{ fontSize: 11, color: "#888", marginTop: 2, fontStyle: "italic" }}>{n(cad.analogyKey)}</div>
                </div>
                <div style={{ fontSize: 11, color: "#bbb" }}>
                  {cad.progression.join(" → ")}
                </div>
              </div>

              {/* Détail si sélectionné */}
              {activeCadence === cad.id && (
                <div style={{ padding: "0 16px 14px", borderTop: `0.5px solid ${cad.color}20` }}>
                  {cad.conditionKey && (
                    <div style={{ fontSize: 12, color: cad.color, marginBottom: 8, marginTop: 10, fontWeight: 500 }}>
                      {n("cadenceConditionLabel")} {n(cad.conditionKey)}
                    </div>
                  )}
                  <p style={{ fontSize: 13, color: "#444", lineHeight: 1.65, margin: "10px 0 10px" }}>
                    {n(cad.effectKey)}
                  </p>
                  <button
                    onClick={(e) => { e.stopPropagation(); handlePlayCadence(cad.progression); }}
                    style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${cad.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: cad.color }}
                  >
                    {n("cadenceRelistenBtn")} {cad.progression.join(" → ")}
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* Tableau récap */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "24px 0 8px", color: "#111" }}>{n("cadencesRecapH3")}</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {[n("cadencesTableHCadence"), n("cadencesTableHStructure"), n("cadencesTableHExemple"), n("cadencesTableHEffet")].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 10px", fontWeight: 500, color: "#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { name: n("cadenceParfaiteName"),   struct: "V → I",   ex: "G7 → C",     effet: n("cadenceRecapParfaiteEffet") },
                  { name: n("cadenceImparfaiteName"),  struct: "V → I",   ex: "G7/B → C/E", effet: n("cadenceRecapImparfaiteEffet") },
                  { name: n("cadenceRomputeName"),     struct: "V → VI",  ex: "G7 → Am",    effet: n("cadenceRecapRompueEffet") },
                  { name: n("cadencePlagaleName"),     struct: "IV → I",  ex: "F → C",      effet: n("cadenceRecapPlagaleEffet") },
                  { name: n("cadenceDemiName"),        struct: "… → V",   ex: "Dm → G7",    effet: n("cadenceRecapDemiEffet") },
                ].map((row, i) => (
                  <tr key={row.name} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "7px 10px", fontWeight: 500 }}>{row.name}</td>
                    <td style={{ padding: "7px 10px", fontFamily: "monospace", color: "#185FA5" }}>{row.struct}</td>
                    <td style={{ padding: "7px 10px", color: "#555" }}>{row.ex}</td>
                    <td style={{ padding: "7px 10px", color: "#888", fontSize: 12 }}>{row.effet}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 : PROGRESSIONS
      ══════════════════════════════════════════════════════════════ */}
      {activeSection === "progressions" && (
        <div>
          <h2 style={S.stitle}>{n("progressionsH2")}</h2>
          <p style={S.sbody} dangerouslySetInnerHTML={{ __html: n("progressionsIntro") }} />

          <div style={S.infoBox} dangerouslySetInnerHTML={{ __html: n("progressionsInfoBox") }} />

          <p style={{ fontSize: 13, color: "#888", marginBottom: 16 }}>
            {n("progressionsClickHint")}
          </p>

          {PROGRESSION_TECHS.map((tech) => (
            <div
              key={tech.id}
              onClick={() => {
                setActiveTech(activeTech === tech.id ? null : tech.id);
                handlePlayTech(tech.progression);
              }}
              style={{
                border: `0.5px solid ${activeTech === tech.id ? tech.color : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 10,
                overflow: "hidden",
                cursor: "pointer",
                background: activeTech === tech.id ? tech.bg : "#fff",
                transition: "all .15s",
              }}
            >
              <div style={{ padding: "12px 16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <span style={{ fontSize: 14, fontWeight: 500, color: activeTech === tech.id ? tech.color : "#111" }}>
                    {n(tech.nameKey)}
                  </span>
                  <span style={{
                    fontSize: 10, padding: "1px 8px", borderRadius: 10,
                    background: tech.bg, color: tech.color, border: `0.5px solid ${tech.color}`,
                    fontFamily: "monospace",
                  }}>
                    {tech.progression.join(" → ")}
                  </span>
                </div>
                <p style={{ fontSize: 13, color: "#666", margin: 0, lineHeight: 1.6 }}>{n(tech.descKey)}</p>
              </div>

              {activeTech === tech.id && (
                <div style={{ padding: "0 16px 14px", borderTop: `0.5px solid ${tech.color}20` }}>
                  <p style={{ fontSize: 13, color: "#444", lineHeight: 1.65, margin: "10px 0 10px" }}>
                    {n(tech.detailKey)}
                  </p>
                  <button
                    onClick={(e) => { e.stopPropagation(); handlePlayTech(tech.progression); }}
                    style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${tech.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: tech.color }}
                  >
                    {n("progressionsRelistenBtn")}
                  </button>
                </div>
              )}
            </div>
          ))}

          <div style={S.warnBox} dangerouslySetInnerHTML={{ __html: n("progressionsWarnBox") }} />

          {/* Tableau fonctions rappel */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "24px 0 8px", color: "#111" }}>{n("progressionsSubstitH3")}</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {[n("progressionsTableHFonction"), n("progressionsTableHAccords"), n("progressionsTableHExemple")].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 10px", fontWeight: 500, color: "#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { fn: n("progressionsSubstitTonique"),    accords: "C  ↔  Am",     ex: "C → G7 → C  ou  Am → G7 → C" },
                  { fn: n("progressionsSubstitSousDom"),    accords: "Dm  ↔  F",     ex: "Dm → G7 → C  ou  F → G7 → C" },
                  { fn: n("progressionsSubstitDominante"),  accords: "G7  ↔  Bdim",  ex: "G7 → C  ou  Bdim → C" },
                ].map((row, i) => (
                  <tr key={row.fn} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "7px 10px", fontWeight: 500 }}>{row.fn}</td>
                    <td style={{ padding: "7px 10px", fontFamily: "monospace", color: "#185FA5" }}>{row.accords}</td>
                    <td style={{ padding: "7px 10px", color: "#888", fontSize: 12 }}>{row.ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3 : QUIZ
      ══════════════════════════════════════════════════════════════ */}
      {/* Exercices de renversements */}
      {activeSection === "progressions" && (
        <div style={{ marginTop: 32 }}>
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "0 0 8px", color: "#111" }}>{n("inversionsH3")}</h3>
          <p style={{ fontSize: 13, color: "#888", lineHeight: 1.7, marginBottom: 16, fontFamily: "system-ui, sans-serif" }}>
            {n("inversionsSubtitle")}
          </p>
          {INVERSION_EXERCISES.filter(e => e.cours === 4).map(ex => (
            <div key={ex.id} style={{ border: "0.5px solid #e5e5e5", borderRadius: 12, padding: "20px", marginBottom: 16, background: "#fff" }}>
              <InversionQuiz exercise={ex} />
            </div>
          ))}
        </div>
      )}
      {activeSection === "conservatoire" && <VueConservatoire courseNum={4} />}

      {activeSection === "quiz" && (
        <div>
          <h2 style={S.stitle}>{n("quizH2")}</h2>

          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 7 ? "🎹" : quizScore >= 5 ? "👍" : "💪"}
              </div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>
                {i18n.t("score")} : {quizScore} / {QUIZ_COUNT}
              </div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
                {i18n.quizMessage(quizScore, QUIZ_COUNT)}
              </div>
              <button
                onClick={resetQuiz}
                style={{ fontSize: 13, padding: "8px 20px", border: "0.5px solid #185FA5", borderRadius: 20, cursor: "pointer", background: "#E6F1FB", color: "#185FA5" }}
              >
                {i18n.newQ}
              </button>
            </div>
          ) : (
            <div>
              <div style={{ fontSize: 12, color: "#999", marginBottom: 10 }}>
                {i18n.t("question")} {quizIdx + 1} {i18n.t("of")} {QUIZ_COUNT}
                <span style={{ marginLeft: 12, color: "#bbb" }}>{ALL_QUESTIONS.length} {i18n.t("questionsPool")}</span>
              </div>
              <div style={{ fontSize: 15, fontWeight: 500, color: "#111", lineHeight: 1.6, marginBottom: 16 }}>
                {quizQuestions[quizIdx].q}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {quizQuestions[quizIdx].opts.map((opt, i) => {
                  const isCorrect  = i === quizQuestions[quizIdx].a;
                  const isSelected = selectedOpt === i;
                  let bg = "#fff", border = "#e5e5e5", color = "#333";
                  if (quizAnswered) {
                    if (isCorrect)       { bg = "#E1F5EE"; border = "#0F6E56"; color = "#085041"; }
                    else if (isSelected) { bg = "#FCEBEB"; border = "#A32D2D"; color = "#501313"; }
                  }
                  return (
                    <button
                      key={i}
                      onClick={() => answerQuiz(i)}
                      disabled={quizAnswered}
                      style={{ fontSize: 13, padding: "10px 14px", border: `0.5px solid ${border}`, borderRadius: 8, cursor: quizAnswered ? "default" : "pointer", background: bg, color, textAlign: "left", transition: "all .12s" }}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {quizAnswered && (
                <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 8, background: selectedOpt === quizQuestions[quizIdx].a ? "#E1F5EE" : "#FCEBEB", fontSize: 13, color: selectedOpt === quizQuestions[quizIdx].a ? "#085041" : "#501313", lineHeight: 1.6 }}>
                  {quizQuestions[quizIdx].fb}
                </div>
              )}

              {quizAnswered && (
                <button
                  onClick={nextQuiz}
                  style={{ marginTop: 12, fontSize: 13, padding: "7px 18px", border: "0.5px solid #333", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#333" }}
                >
                  {quizIdx + 1 < QUIZ_COUNT ? i18n.nextQ : i18n.seeScore}
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
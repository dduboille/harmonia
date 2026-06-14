"use client";

/**
 * Cours40.tsx
 * Harmonia · Niveau 2 · Cours 40 — L'invention à 2 voix
 * Sujet, imitation à l'octave, contre-sujet, épisodes et plan tonal —
 * l'écriture de l'invention dans le style de Bach (vers le contrepoint DEM).
 * Convention : narration via i18n (narrative.*), dotKeys PianoPlayer français,
 * lecture à 2 voix (sujet + réponse) inspirée de Cours13.
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { cours40Content } from "@/data/cours40Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";

// Joue une voix mélodique : une note après l'autre, à un tempo donné
function playVoice(
  ref: React.RefObject<PianoPlayerRef>,
  keys: string[],
  gapMs: number,
  noteDur = 0.55,
  startDelay = 0,
) {
  keys.forEach((key, i) => {
    const [note, octStr] = key.split(":");
    setTimeout(() => ref.current?.playNote(note, parseInt(octStr), { duration: noteDur }), startDelay + i * gapMs);
  });
}

// Joue deux voix superposées (sujet + voix imitante décalée)
function playTwoVoices(
  ref: React.RefObject<PianoPlayerRef>,
  voiceA: string[],
  voiceB: string[],
  gapMs: number,
  delayBeats: number,
  noteDur = 0.55,
) {
  playVoice(ref, voiceA, gapMs, noteDur, 0);
  playVoice(ref, voiceB, gapMs, noteDur, delayBeats * gapMs);
}

// ── Procédés de développement motivique ──────────────────────────────────────

interface Procede {
  id: string;
  name: string;
  symbol: string;
  color: string;
  bg: string;
  description: string;
  // motif de référence (do majeur, voix aiguë) puis sa transformation
  motif: string[];
  transformed: string[];
}

const PROCEDES: Procede[] = [
  {
    id: "inversion",
    name: "Inversion (renversement mélodique)",
    symbol: "↕",
    color: "#0F6E56", bg: "#E1F5EE",
    description: "Le contour du motif est retourné : chaque intervalle est reproduit en sens contraire. Ce qui montait descend, ce qui descendait monte.",
    motif:       ["Do:4", "Mi:4", "Sol:4", "Do:5"],
    transformed: ["Do:4", "La:3", "Fa:3", "Do:3"],
  },
  {
    id: "augmentation",
    name: "Augmentation",
    symbol: "⟶",
    color: "#185FA5", bg: "#E6F1FB",
    description: "Les valeurs rythmiques du motif sont allongées (souvent doublées) : le motif paraît plus large, plus solennel.",
    motif:       ["Do:4", "Mi:4", "Sol:4", "Do:5"],
    transformed: ["Do:4", "Mi:4", "Sol:4", "Do:5"],
  },
  {
    id: "diminution",
    name: "Diminution",
    symbol: "⟵",
    color: "#BA7517", bg: "#FAEEDA",
    description: "Les valeurs sont raccourcies : le motif défile plus vite. Procédé inverse de l'augmentation.",
    motif:       ["Do:4", "Mi:4", "Sol:4", "Do:5"],
    transformed: ["Do:4", "Mi:4", "Sol:4", "Do:5"],
  },
  {
    id: "marche",
    name: "Marche / séquence",
    symbol: "⇘",
    color: "#993C1D", bg: "#FAECE7",
    description: "Un fragment du motif est répété à des hauteurs successives, souvent par quintes descendantes : c'est le moteur modulant des épisodes.",
    motif:       ["Do:5", "Si:4", "Sol:4"],
    transformed: ["Sol:4", "Fa:4", "Ré:4", "Do:4", "Si:3", "Sol:3"],
  },
];

// ── Plan tonal de l'invention ─────────────────────────────────────────────────

interface PlanStep {
  zone: string;
  tonalite: string;
  color: string;
}

const PLAN_MAJEUR: PlanStep[] = [
  { zone: "Exposition", tonalite: "Tonique (I)", color: "#0F6E56" },
  { zone: "Modulation", tonalite: "Dominante (V)", color: "#185FA5" },
  { zone: "Développement", tonalite: "Tons voisins", color: "#BA7517" },
  { zone: "Conclusion", tonalite: "Retour à la tonique (I)", color: "#993C1D" },
];

// ── Quiz ──────────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const QUIZ_COUNT = 10;

// Sujet d'invention (do majeur) — tête de sujet + suite, voix aiguë
const SUJET = ["Do:4", "Ré:4", "Mi:4", "Fa:4", "Sol:4", "Mi:4", "Do:4", "Sol:4"];
// Réponse à l'octave inférieure (imitation), voix grave
const REPONSE = ["Do:3", "Ré:3", "Mi:3", "Fa:3", "Sol:3", "Mi:3", "Do:3", "Sol:3"];

const S = {
  wrap:     { fontFamily: "var(--font-sans, system-ui)", maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" } as React.CSSProperties,
  header:   { padding: "1.5rem 0 1rem", borderBottom: "0.5px solid #e5e5e5", marginBottom: "1.25rem" } as React.CSSProperties,
  badge:    { display: "inline-block", background: "#FAEEDA", color: "#BA7517", fontSize: 11, fontWeight: 500, padding: "2px 10px", borderRadius: 20, marginBottom: 6 } as React.CSSProperties,
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
  h2:       { fontSize: 17, fontWeight: 500, color: "#111", marginBottom: 8 } as React.CSSProperties,
  h3:       { fontSize: 14, fontWeight: 500, margin: "20px 0 10px", color: "#111" } as React.CSSProperties,
  p:        { fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: "1rem" } as React.CSSProperties,
  infoBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #993C1D", padding: "8px 14px", background: "#FAECE7", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#5a2412", lineHeight: 1.6 } as React.CSSProperties,
  tip:      { borderLeft: "2px solid #0F6E56", padding: "8px 14px", background: "#E1F5EE", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#085041", lineHeight: 1.6 } as React.CSSProperties,
  btn:      { fontSize: 13, padding: "8px 20px", border: "0.5px solid #333", borderRadius: 20, cursor: "pointer", background: "#111", color: "#fff" } as React.CSSProperties,
};

export default function Cours40() {
  const [activeSection, setActiveSection] = useState<string>("structure");
  const i18n = useCoursI18n("cours40");
  const tc = i18n.tc;
  const n = (key: string) => tc(`narrative.${key}` as never);
  const { questions: ALL_QUESTIONS } = useCoursContent(cours40Content);
  const [activeProc, setActiveProc] = useState<string | null>(null);

  const [quizQuestions] = useState(() => shuffle(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [quizIdx,      setQuizIdx]      = useState(0);
  const [quizScore,    setQuizScore]    = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizDone,     setQuizDone]     = useState(false);
  const [selectedOpt,  setSelectedOpt]  = useState<number | null>(null);

  const pianoRef = useRef<PianoPlayerRef>(null);

  const answerQuiz = (optIdx: number) => {
    if (quizAnswered) return;
    setSelectedOpt(optIdx);
    setQuizAnswered(true);
    if (optIdx === quizQuestions[quizIdx].a) setQuizScore(s => s + 1);
  };

  const nextQuiz = () => {
    if (quizIdx + 1 >= QUIZ_COUNT) setQuizDone(true);
    else { setQuizIdx(i => i + 1); setQuizAnswered(false); setSelectedOpt(null); }
  };

  const resetQuiz = () => {
    setQuizIdx(0); setQuizScore(0);
    setQuizAnswered(false); setSelectedOpt(null); setQuizDone(false);
  };

  const sectionLabel = (id: string) => {
    if (id === "structure") return n("navStructure");
    if (id === "developpement") return n("navDeveloppement");
    return n("navQuiz");
  };

  const playProcede = (proc: Procede) => {
    // motif de référence puis sa transformation, séquentiellement
    playVoice(pianoRef as React.RefObject<PianoPlayerRef>, proc.motif, 480, 0.5, 0);
    const after = proc.motif.length * 480 + 500;
    const gap = proc.id === "augmentation" ? 900 : proc.id === "diminution" ? 240 : 480;
    playVoice(pianoRef as React.RefObject<PianoPlayerRef>, proc.transformed, gap, gap > 600 ? 0.9 : 0.45, after);
  };

  return (
    <div style={S.wrap}>
      {/* Piano caché */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={4} startOctave={2} showLabels={false} />
      </div>

      {/* Header */}
      <div style={S.header}>
        <span style={S.badge}>{n("headerBadge")}</span>
        <h1 style={S.h1}>{n("headerTitle")}</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Johann Sebastian Bach"
        period="1685–1750"
        emoji="🎼"
        concept={n("maitreConceptLabel")}
        anecdote={n("maitreAnecdote")}
        lesson={n("maitreLesson")}
        accentColor="#BA7517"
      />

      {/* Navigation */}
      <nav style={S.nav}>
        {(["structure", "developpement", "quiz"] as const).map(id => (
          <button key={id} style={S.pill(activeSection === id)} onClick={() => setActiveSection(id)}>
            {sectionLabel(id)}
          </button>
        ))}
      </nav>

      {/* ══ SECTION 1 : STRUCTURE — SUJET, IMITATION, CONTRE-SUJET ══ */}
      {activeSection === "structure" && (
        <div>
          <h2 style={S.h2}>{n("structSectionTitle")}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: n("structIntro") }} />

          <div style={S.infoBox} dangerouslySetInnerHTML={{ __html: n("structInfoBox") }} />

          {/* Le sujet */}
          <h3 style={S.h3}>{n("structSujetTitle")}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: n("structSujetText") }} />
          <button
            onClick={() => playVoice(pianoRef as React.RefObject<PianoPlayerRef>, SUJET, 420, 0.5)}
            style={{ ...S.btn, marginBottom: 20 }}
          >
            {n("structSujetListenBtn")}
          </button>

          {/* L'imitation */}
          <h3 style={S.h3}>{n("structImitTitle")}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: n("structImitText") }} />
          <div style={S.tip} dangerouslySetInnerHTML={{ __html: n("structImitBox") }} />
          <button
            onClick={() => playTwoVoices(pianoRef as React.RefObject<PianoPlayerRef>, SUJET, REPONSE, 420, 4, 0.5)}
            style={{ ...S.btn, marginBottom: 20 }}
          >
            {n("structImitListenBtn")}
          </button>

          {/* Le contre-sujet */}
          <h3 style={S.h3}>{n("structCsTitle")}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: n("structCsText") }} />
          <div style={S.warnBox} dangerouslySetInnerHTML={{ __html: n("structCsBox") }} />
        </div>
      )}

      {/* ══ SECTION 2 : DÉVELOPPEMENT — PROCÉDÉS, PLAN TONAL, MÉTHODE ══ */}
      {activeSection === "developpement" && (
        <div>
          <h2 style={S.h2}>{n("devSectionTitle")}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: n("devIntro") }} />

          {/* Épisodes */}
          <h3 style={S.h3}>{n("devEpisodesTitle")}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: n("devEpisodesText") }} />

          {/* Procédés motiviques */}
          <h3 style={S.h3}>{n("devProcedesTitle")}</h3>
          <p style={{ fontSize: 13, color: "#888", marginBottom: 16 }}>
            {n("devProcedesClickHint")}
          </p>

          {PROCEDES.map(proc => (
            <div
              key={proc.id}
              onClick={() => {
                const isActive = activeProc === proc.id;
                setActiveProc(isActive ? null : proc.id);
                playProcede(proc);
              }}
              style={{
                border: `0.5px solid ${activeProc === proc.id ? proc.color : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 8,
                overflow: "hidden",
                cursor: "pointer",
                background: activeProc === proc.id ? proc.bg : "#fff",
                transition: "all .15s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px" }}>
                <div style={{
                  fontSize: 15, fontWeight: 700, color: proc.color,
                  background: proc.bg, border: `0.5px solid ${proc.color}`,
                  padding: "3px 12px", borderRadius: 6,
                  flexShrink: 0, whiteSpace: "nowrap" as const, minWidth: 40, textAlign: "center" as const,
                }}>
                  {proc.symbol}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>{proc.name}</div>
                </div>
              </div>

              {activeProc === proc.id && (
                <div style={{ padding: "0 16px 16px", borderTop: `0.5px solid ${proc.color}20` }}>
                  <div style={{ fontSize: 13, color: "#444", lineHeight: 1.6, marginTop: 12, marginBottom: 12 }}>
                    {proc.description}
                  </div>
                  <button
                    onClick={e => { e.stopPropagation(); playProcede(proc); }}
                    style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${proc.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: proc.color }}
                  >
                    {n("devProcedeReplayBtn")}
                  </button>
                </div>
              )}
            </div>
          ))}

          <div style={S.infoBox} dangerouslySetInnerHTML={{ __html: n("devStretteBox") }} />

          {/* Plan tonal */}
          <h3 style={S.h3}>{n("devPlanTitle")}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: n("devPlanText") }} />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 8, marginBottom: 16 }}>
            {PLAN_MAJEUR.map((step, i) => (
              <div key={step.zone} style={{
                border: `0.5px solid ${step.color}40`,
                borderRadius: 10, padding: "12px 14px", background: `${step.color}10`,
              }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: step.color, marginBottom: 4 }}>
                  {i + 1}. {n(`devPlanZone${i + 1}` as string)}
                </div>
                <div style={{ fontSize: 12, color: "#444" }}>{n(`devPlanTon${i + 1}` as string)}</div>
              </div>
            ))}
          </div>

          <div style={S.tip} dangerouslySetInnerHTML={{ __html: n("devPlanMineurBox") }} />

          {/* Méthode de composition */}
          <h3 style={S.h3}>{n("devMethodeTitle")}</h3>
          <p style={S.p}>{n("devMethodeIntro")}</p>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: 8, marginBottom: 16 }}>
            {[1, 2, 3, 4].map(i => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 10, padding: "10px 14px", borderRadius: 8, background: i % 2 === 1 ? "#fafafa" : "#fff", border: "0.5px solid #f0f0f0" }}>
                <div style={{ fontSize: 13, color: "#BA7517", fontWeight: 700, marginTop: 1 }}>{i}.</div>
                <div style={{ fontSize: 13, color: "#444", lineHeight: 1.6 }}>{n(`devMethodeStep${i}` as string)}</div>
              </div>
            ))}
          </div>

          <div style={S.warnBox} dangerouslySetInnerHTML={{ __html: n("devGedalgeBox") }} />
        </div>
      )}

      {/* ══ SECTION 3 : QUIZ ══ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.h2}>{n("quizSectionTitle")}</h2>

          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 8 ? "🎼" : quizScore >= 6 ? "👍" : "💪"}
              </div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>
                {n("quizScoreLabel")} {quizScore} / {QUIZ_COUNT}
              </div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
                {quizScore >= 8
                  ? n("quizFeedbackExcellent")
                  : quizScore >= 6
                  ? n("quizFeedbackGood")
                  : n("quizFeedbackKeepGoing")}
              </div>
              <button
                onClick={resetQuiz}
                style={{ fontSize: 13, padding: "8px 20px", border: "0.5px solid #BA7517", borderRadius: 20, cursor: "pointer", background: "#FAEEDA", color: "#BA7517" }}
              >{n("quizResetBtn")}</button>
            </div>
          ) : (
            <div>
              <div style={{ fontSize: 12, color: "#999", marginBottom: 10 }}>
                {n("quizQuestionCounter")} {quizIdx + 1} / {QUIZ_COUNT}
                <span style={{ marginLeft: 12, color: "#bbb" }}>{ALL_QUESTIONS.length} {n("quizPoolInfo")}</span>
              </div>
              <div style={{ fontSize: 15, fontWeight: 500, color: "#111", lineHeight: 1.6, marginBottom: 16 }}>
                {quizQuestions[quizIdx].q}
              </div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 8 }}>
                {quizQuestions[quizIdx].opts.map((opt, i) => {
                  const isCorrect  = i === quizQuestions[quizIdx].a;
                  const isSelected = selectedOpt === i;
                  let bg = "#fff", border = "#e5e5e5", color = "#333";
                  if (quizAnswered) {
                    if (isCorrect)       { bg = "#E1F5EE"; border = "#0F6E56"; color = "#085041"; }
                    else if (isSelected) { bg = "#FCEBEB"; border = "#A32D2D"; color = "#501313"; }
                  }
                  return (
                    <button key={i} onClick={() => answerQuiz(i)} disabled={quizAnswered}
                      style={{ fontSize: 13, padding: "10px 14px", border: `0.5px solid ${border}`, borderRadius: 8, cursor: quizAnswered ? "default" : "pointer", background: bg, color, textAlign: "left" as const, transition: "all .12s" }}>
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
                <button onClick={nextQuiz}
                  style={{ marginTop: 12, fontSize: 13, padding: "7px 18px", border: "0.5px solid #333", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#333" }}>
                  {quizIdx + 1 < QUIZ_COUNT ? n("quizNextBtn") : n("quizFinishBtn")}
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

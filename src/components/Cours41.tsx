"use client";

/**
 * Cours41.tsx
 * Harmonia · Niveau 5 · Cours 41 — L'écriture de style
 * Le pastiche stylistique du DEM écriture (cycle spécialisé / CPES) :
 * style classique, style romantique, style début XXe, plus une méthode
 * de pastiche et des corrigés commentés.
 * Convention : narration via i18n (narrative.*), quiz seedé depuis le content
 * (useCoursContent), structure héritée de Cours40 / Cours26.
 */

import React, { useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { cours41Content } from "@/data/cours41Content";
import MaitreCard from "@/components/MaitreCard";

// ── Les trois styles et leurs signatures ─────────────────────────────────────

interface StyleFiche {
  id: string;
  color: string;
  bg: string;
}

const STYLES: StyleFiche[] = [
  { id: "classique",  color: "#185FA5", bg: "#E6F1FB" },
  { id: "romantique", color: "#993C1D", bg: "#FAECE7" },
  { id: "xxe",        color: "#0F6E56", bg: "#E1F5EE" },
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

const S = {
  wrap:     { fontFamily: "var(--font-sans, system-ui)", maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" } as React.CSSProperties,
  header:   { padding: "1.5rem 0 1rem", borderBottom: "0.5px solid #e5e5e5", marginBottom: "1.25rem" } as React.CSSProperties,
  badge:    { display: "inline-block", background: "#EEE6FA", color: "#5B3CA5", fontSize: 11, fontWeight: 500, padding: "2px 10px", borderRadius: 20, marginBottom: 6 } as React.CSSProperties,
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
  infoBox:  { borderLeft: "2px solid #185FA5", padding: "8px 14px", background: "#E6F1FB", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#0d3a66", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #993C1D", padding: "8px 14px", background: "#FAECE7", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#5a2412", lineHeight: 1.6 } as React.CSSProperties,
  tip:      { borderLeft: "2px solid #0F6E56", padding: "8px 14px", background: "#E1F5EE", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#085041", lineHeight: 1.6 } as React.CSSProperties,
};

export default function Cours41() {
  const [activeSection, setActiveSection] = useState<string>("styles");
  const i18n = useCoursI18n("cours41");
  const tc = i18n.tc;
  const n = (key: string) => tc(`narrative.${key}` as never);
  const { questions: ALL_QUESTIONS } = useCoursContent(cours41Content);
  const [activeStyle, setActiveStyle] = useState<string | null>("classique");

  const [quizQuestions] = useState(() => shuffle(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [quizIdx,      setQuizIdx]      = useState(0);
  const [quizScore,    setQuizScore]    = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizDone,     setQuizDone]     = useState(false);
  const [selectedOpt,  setSelectedOpt]  = useState<number | null>(null);

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
    if (id === "styles") return n("navStyles");
    if (id === "methode") return n("navMethode");
    return n("navQuiz");
  };

  return (
    <div style={S.wrap}>
      {/* Header */}
      <div style={S.header}>
        <span style={S.badge}>{n("headerBadge")}</span>
        <h1 style={S.h1}>{n("headerTitle")}</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Maurice Ravel"
        period="1875–1937"
        emoji="🎨"
        concept={n("maitreConceptLabel")}
        anecdote={n("maitreAnecdote")}
        lesson={n("maitreLesson")}
        accentColor="#5B3CA5"
      />

      {/* Navigation */}
      <nav style={S.nav}>
        {(["styles", "methode", "quiz"] as const).map(id => (
          <button key={id} style={S.pill(activeSection === id)} onClick={() => setActiveSection(id)}>
            {sectionLabel(id)}
          </button>
        ))}
      </nav>

      {/* ══ SECTION 1 : LES TROIS STYLES ET LEURS SIGNATURES ══ */}
      {activeSection === "styles" && (
        <div>
          <h2 style={S.h2}>{n("stylesSectionTitle")}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: n("stylesIntro") }} />

          <div style={S.infoBox} dangerouslySetInnerHTML={{ __html: n("stylesInfoBox") }} />

          <p style={{ fontSize: 13, color: "#888", marginBottom: 16 }}>
            {n("stylesClickHint")}
          </p>

          {STYLES.map(st => (
            <div
              key={st.id}
              onClick={() => setActiveStyle(activeStyle === st.id ? null : st.id)}
              style={{
                border: `0.5px solid ${activeStyle === st.id ? st.color : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 8,
                overflow: "hidden",
                cursor: "pointer",
                background: activeStyle === st.id ? st.bg : "#fff",
                transition: "all .15s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px" }}>
                <div style={{
                  fontSize: 12, fontWeight: 700, color: st.color,
                  background: st.bg, border: `0.5px solid ${st.color}`,
                  padding: "3px 10px", borderRadius: 6,
                  flexShrink: 0, whiteSpace: "nowrap" as const, textAlign: "center" as const,
                }}>
                  {n(`style_${st.id}_period`)}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>{n(`style_${st.id}_name`)}</div>
                </div>
              </div>

              {activeStyle === st.id && (
                <div style={{ padding: "0 16px 16px", borderTop: `0.5px solid ${st.color}20` }}>
                  <div
                    style={{ fontSize: 13, color: "#444", lineHeight: 1.7, marginTop: 12 }}
                    dangerouslySetInnerHTML={{ __html: n(`style_${st.id}_desc`) }}
                  />
                  <div style={{ marginTop: 12 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: st.color, marginBottom: 6, letterSpacing: 0.3 }}>
                      {n("stylesSignaturesLabel")}
                    </div>
                    <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: "#444", lineHeight: 1.7 }}>
                      {[1, 2, 3, 4].map(i => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: n(`style_${st.id}_sig${i}`) }} />
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}

          <div style={S.warnBox} dangerouslySetInnerHTML={{ __html: n("stylesPiegeBox") }} />
        </div>
      )}

      {/* ══ SECTION 2 : MÉTHODE DE PASTICHE ET CORRIGÉS ══ */}
      {activeSection === "methode" && (
        <div>
          <h2 style={S.h2}>{n("methodeSectionTitle")}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: n("methodeIntro") }} />

          {/* Étapes de la méthode */}
          <h3 style={S.h3}>{n("methodeStepsTitle")}</h3>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 8, marginBottom: 16 }}>
            {[1, 2, 3, 4].map(i => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 10, padding: "10px 14px", borderRadius: 8, background: i % 2 === 1 ? "#fafafa" : "#fff", border: "0.5px solid #f0f0f0" }}>
                <div style={{ fontSize: 13, color: "#5B3CA5", fontWeight: 700, marginTop: 1 }}>{i}.</div>
                <div style={{ fontSize: 13, color: "#444", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: n(`methodeStep${i}`) }} />
              </div>
            ))}
          </div>

          <div style={S.warnBox} dangerouslySetInnerHTML={{ __html: n("methodeAnachroBox") }} />

          {/* Corrigés commentés — un exemple par style */}
          <h3 style={S.h3}>{n("corrigesTitle")}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: n("corrigesIntro") }} />

          {STYLES.map(st => (
            <div key={st.id} style={{
              border: `0.5px solid ${st.color}40`,
              borderLeft: `2px solid ${st.color}`,
              borderRadius: "0 8px 8px 0",
              padding: "12px 16px",
              marginBottom: 10,
              background: `${st.color}08`,
            }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: st.color, marginBottom: 6 }}>
                {n(`corrige_${st.id}_title`)}
              </div>
              <div style={{ fontSize: 13, color: "#444", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: n(`corrige_${st.id}_text`) }} />
            </div>
          ))}

          <div style={S.tip} dangerouslySetInnerHTML={{ __html: n("methodeDemBox") }} />
        </div>
      )}

      {/* ══ SECTION 3 : QUIZ ══ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.h2}>{n("quizSectionTitle")}</h2>

          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 8 ? "🎨" : quizScore >= 6 ? "👍" : "💪"}
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
                style={{ fontSize: 13, padding: "8px 20px", border: "0.5px solid #5B3CA5", borderRadius: 20, cursor: "pointer", background: "#EEE6FA", color: "#5B3CA5" }}
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

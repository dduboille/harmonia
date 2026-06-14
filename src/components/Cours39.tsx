"use client";

/**
 * Cours39.tsx
 * Harmonia · Niveau 2 · Cours 39 — Les 7èmes d'espèces
 * Au-delà du V7 : la 7e sur chaque degré, sa nature, sa préparation,
 * sa résolution, ses renversements et la marche de 7èmes.
 * Convention : narration via i18n (narrative.*), dotKeys PianoPlayer français.
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { cours39Content } from "@/data/cours39Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";

function playChord(ref: React.RefObject<PianoPlayerRef>, keys: string[], duration = 2.5) {
  keys.forEach(key => {
    const [note, octStr] = key.split(":");
    ref.current?.playNote(note, parseInt(octStr), { duration });
  });
}

// ── Les 7èmes sur chaque degré (do majeur) ───────────────────────────────────

interface DegreeChord {
  id: string;
  degree: string;
  symbol: string;
  notes: string;
  nature: string;
  color: string;
  bg: string;
  description: string;
  dotKeys: string[];
}

const DEGREES: DegreeChord[] = [
  {
    id: "I", degree: "I", symbol: "IM7", notes: "do – mi – sol – si", nature: "7e majeure",
    color: "#0F6E56", bg: "#E1F5EE",
    description: "Triade majeure + 7e majeure. Accord de tonique enrichi, sonorité stable et lumineuse.",
    dotKeys: ["Do:3", "Mi:3", "Sol:3", "Si:3"],
  },
  {
    id: "II", degree: "II", symbol: "IIm7", notes: "ré – fa – la – do", nature: "7e mineure",
    color: "#185FA5", bg: "#E6F1FB",
    description: "Triade mineure + 7e mineure. Fonction de sous-dominante, prépare souvent le V.",
    dotKeys: ["Ré:3", "Fa:3", "La:3", "Do:4"],
  },
  {
    id: "III", degree: "III", symbol: "IIIm7", notes: "mi – sol – si – ré", nature: "7e mineure",
    color: "#185FA5", bg: "#E6F1FB",
    description: "Triade mineure + 7e mineure. Degré médiant, couleur intermédiaire entre I et V.",
    dotKeys: ["Mi:3", "Sol:3", "Si:3", "Ré:4"],
  },
  {
    id: "IV", degree: "IV", symbol: "IVM7", notes: "fa – la – do – mi", nature: "7e majeure",
    color: "#0F6E56", bg: "#E1F5EE",
    description: "Triade majeure + 7e majeure. Sous-dominante riche, seconde 7e majeure du mode (avec le I).",
    dotKeys: ["Fa:3", "La:3", "Do:4", "Mi:4"],
  },
  {
    id: "V", degree: "V", symbol: "V7", notes: "sol – si – ré – fa", nature: "7e de dominante",
    color: "#BA7517", bg: "#FAEEDA",
    description: "Triade majeure + 7e mineure : la seule combinaison de ce type dans la gamme. Sa 7e peut entrer sans préparation.",
    dotKeys: ["Sol:2", "Si:2", "Ré:3", "Fa:3"],
  },
  {
    id: "VI", degree: "VI", symbol: "VIm7", notes: "la – do – mi – sol", nature: "7e mineure",
    color: "#185FA5", bg: "#E6F1FB",
    description: "Triade mineure + 7e mineure. Relatif mineur, employé dans les marches et les cadences rompues.",
    dotKeys: ["La:2", "Do:3", "Mi:3", "Sol:3"],
  },
  {
    id: "VII", degree: "VII", symbol: "VIIø7", notes: "si – ré – fa – la", nature: "7e mi-diminuée",
    color: "#993C1D", bg: "#FAECE7",
    description: "Triade diminuée + 7e mineure (mi-diminué). Accord de sensible en majeur ; en mineur harmonique il devient 7e diminuée (VII°7).",
    dotKeys: ["Si:2", "Ré:3", "Fa:3", "La:3"],
  },
];

// ── Renversements et chiffrage ───────────────────────────────────────────────

interface InversionRow {
  etat: string;
  basse: string;
  chiffrage: string;
  color: string;
}

const INVERSIONS: InversionRow[] = [
  { etat: "État fondamental", basse: "Fondamentale", chiffrage: "7", color: "#0F6E56" },
  { etat: "1er renversement", basse: "Tierce", chiffrage: "6/5", color: "#185FA5" },
  { etat: "2e renversement", basse: "Quinte", chiffrage: "4/3", color: "#BA7517" },
  { etat: "3e renversement", basse: "7e (dissonance)", chiffrage: "+2 / 2", color: "#993C1D" },
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
};

export default function Cours39() {
  const [activeSection, setActiveSection] = useState<string>("degres");
  const i18n = useCoursI18n("cours39");
  const tc = i18n.tc;
  const n = (key: string) => tc(`narrative.${key}` as never);
  const { questions: ALL_QUESTIONS } = useCoursContent(cours39Content);
  const [activeDeg, setActiveDeg] = useState<string | null>(null);

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
    if (id === "degres") return n("navDegres");
    if (id === "ecriture") return n("navEcriture");
    return n("navQuiz");
  };

  return (
    <div style={S.wrap}>
      {/* Piano caché */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={3} startOctave={2} showLabels={false} />
      </div>

      {/* Header */}
      <div style={S.header}>
        <span style={S.badge}>{n("headerBadge")}</span>
        <h1 style={S.h1}>{n("headerTitle")}</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Arcangelo Corelli"
        period="1653–1713"
        emoji="🎻"
        concept={n("maitreConceptLabel")}
        anecdote={n("maitreAnecdote")}
        lesson={n("maitreLesson")}
        accentColor="#BA7517"
      />

      {/* Navigation */}
      <nav style={S.nav}>
        {(["degres", "ecriture", "quiz"] as const).map(id => (
          <button key={id} style={S.pill(activeSection === id)} onClick={() => setActiveSection(id)}>
            {sectionLabel(id)}
          </button>
        ))}
      </nav>

      {/* ══ SECTION 1 : LES 7èmes SUR CHAQUE DEGRÉ ══ */}
      {activeSection === "degres" && (
        <div>
          <h2 style={S.h2}>{n("degSectionTitle")}</h2>
          <p style={S.p}>{n("degIntro")}</p>

          <div style={S.infoBox} dangerouslySetInnerHTML={{ __html: n("degInfoBox") }} />

          <p style={{ fontSize: 13, color: "#888", marginBottom: 16 }}>
            {n("degClickHint")}
          </p>

          {DEGREES.map(deg => (
            <div
              key={deg.id}
              onClick={() => {
                const isActive = activeDeg === deg.id;
                setActiveDeg(isActive ? null : deg.id);
                playChord(pianoRef as React.RefObject<PianoPlayerRef>, deg.dotKeys);
              }}
              style={{
                border: `0.5px solid ${activeDeg === deg.id ? deg.color : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 8,
                overflow: "hidden",
                cursor: "pointer",
                background: activeDeg === deg.id ? deg.bg : "#fff",
                transition: "all .15s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px" }}>
                <div style={{
                  fontSize: 11, fontWeight: 700, color: deg.color,
                  background: deg.bg, border: `0.5px solid ${deg.color}`,
                  padding: "3px 10px", borderRadius: 6, fontFamily: "monospace",
                  flexShrink: 0, whiteSpace: "nowrap" as const, minWidth: 56, textAlign: "center" as const,
                }}>
                  {deg.symbol}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>{deg.nature}</div>
                  <div style={{ fontSize: 12, color: "#888", marginTop: 2, fontFamily: "monospace" }}>
                    {deg.notes}
                  </div>
                </div>
                <div style={{ fontSize: 11, color: "#bbb", flexShrink: 0 }}>
                  {n("degDegreLabel")} {deg.degree}
                </div>
              </div>

              {activeDeg === deg.id && (
                <div style={{ padding: "0 16px 16px", borderTop: `0.5px solid ${deg.color}20` }}>
                  <div style={{ fontSize: 13, color: "#444", lineHeight: 1.6, marginTop: 12, marginBottom: 12 }}>
                    {deg.description}
                  </div>
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      playChord(pianoRef as React.RefObject<PianoPlayerRef>, deg.dotKeys);
                    }}
                    style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${deg.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: deg.color }}
                  >
                    {n("degRelistenBtn")} {deg.symbol}
                  </button>
                </div>
              )}
            </div>
          ))}

          <div style={S.warnBox} dangerouslySetInnerHTML={{ __html: n("degMineurBox") }} />
        </div>
      )}

      {/* ══ SECTION 2 : ÉCRITURE — PRÉPARATION, RÉSOLUTION, RENVERSEMENTS, MARCHE ══ */}
      {activeSection === "ecriture" && (
        <div>
          <h2 style={S.h2}>{n("ecrSectionTitle")}</h2>
          <p style={S.p}>{n("ecrIntro")}</p>

          {/* Préparation / résolution */}
          <h3 style={S.h3}>{n("ecrPrepTitle")}</h3>
          <p style={S.p}>{n("ecrPrepText")}</p>
          <div style={S.tip} dangerouslySetInnerHTML={{ __html: n("ecrResolBox") }} />

          <button
            onClick={() => {
              // V7 (sol si ré fa) puis I (do mi sol do) — la 7e fa descend sur mi
              playChord(pianoRef as React.RefObject<PianoPlayerRef>, ["Sol:2", "Si:2", "Ré:3", "Fa:3"], 2.0);
              setTimeout(() => playChord(pianoRef as React.RefObject<PianoPlayerRef>, ["Do:3", "Mi:3", "Sol:3", "Do:4"], 2.6), 2200);
            }}
            style={{ fontSize: 13, padding: "8px 20px", border: "0.5px solid #333", borderRadius: 20, cursor: "pointer", background: "#111", color: "#fff", marginBottom: 24 }}
          >
            {n("ecrResolListenBtn")}
          </button>

          {/* Renversements */}
          <h3 style={S.h3}>{n("ecrInvTitle")}</h3>
          <p style={S.p}>{n("ecrInvText")}</p>

          <div style={{ overflowX: "auto", marginBottom: 16 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {[
                    n("ecrTableHeaderEtat"),
                    n("ecrTableHeaderBasse"),
                    n("ecrTableHeaderChiffrage"),
                  ].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "8px 10px", fontWeight: 500, color: "#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {INVERSIONS.map((r, i) => (
                  <tr key={r.etat} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "8px 10px", fontWeight: 500, color: r.color, fontSize: 11 }}>{r.etat}</td>
                    <td style={{ padding: "8px 10px", fontSize: 11, color: "#555" }}>{r.basse}</td>
                    <td style={{ padding: "8px 10px", fontFamily: "monospace", fontSize: 12, color: "#111" }}>{r.chiffrage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Marche de 7èmes */}
          <h3 style={S.h3}>{n("ecrMarcheTitle")}</h3>
          <p style={S.p}>{n("ecrMarcheText")}</p>
          <div style={S.infoBox} dangerouslySetInnerHTML={{ __html: n("ecrMarcheBox") }} />

          <button
            onClick={() => {
              // Esquisse de chaîne de 7èmes par quintes descendantes : IM7 – IVM7 – VIIø7 – IIIm7
              const chain: string[][] = [
                ["Do:3", "Mi:3", "Sol:3", "Si:3"],
                ["Do:3", "Fa:3", "La:3", "Mi:4"],
                ["Si:2", "Ré:3", "Fa:3", "La:3"],
                ["Mi:3", "Sol:3", "Si:3", "Ré:4"],
              ];
              chain.forEach((c, i) => setTimeout(() => playChord(pianoRef as React.RefObject<PianoPlayerRef>, c, 1.8), i * 1600));
            }}
            style={{ fontSize: 13, padding: "8px 20px", border: "0.5px solid #BA7517", borderRadius: 20, cursor: "pointer", background: "#FAEEDA", color: "#BA7517", marginBottom: 16 }}
          >
            {n("ecrMarcheListenBtn")}
          </button>

          <div style={S.warnBox} dangerouslySetInnerHTML={{ __html: n("ecrVoixBox") }} />
        </div>
      )}

      {/* ══ SECTION 3 : QUIZ ══ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.h2}>{n("quizSectionTitle")}</h2>

          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 8 ? "🎻" : quizScore >= 6 ? "👍" : "💪"}
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

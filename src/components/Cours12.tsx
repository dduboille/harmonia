"use client";

/**
 * Cours12.tsx
 * Harmonia · Niveau 2 · Cours 12 — La substitution tritonique
 * Convention : affichage anglais, dotKeys PianoPlayer français
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { useTerm } from "@/hooks/useTerm";
import { cours12Content } from "@/data/cours12Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";

function playChord(ref: React.RefObject<PianoPlayerRef>, keys: string[], duration = 2.4) {
  keys.forEach(key => {
    const [note, octStr] = key.split(":");
    ref.current?.playNote(note, parseInt(octStr), { duration });
  });
}

function playSeq(ref: React.RefObject<PianoPlayerRef>, chords: string[][], gapMs = 2200) {
  chords.forEach((chord, i) => {
    setTimeout(() => playChord(ref, chord, 2.0), i * gapMs);
  });
}

// ── Chords ────────────────────────────────────────────────────────────────────

// G7 : Sol Si Ré Fa — Sol:2=31, Si:3=47, Ré:4=50, Fa:4=53 ✓
const G7  = ["Sol:2", "Si:3", "Ré:4", "Fa:4"];
// Db7 : Réb Fa Lab Cb(=Si) — Réb:3=37, Fa:3=41, Lab:3=44, Si:3=47 ✓
const DB7 = ["Réb:3", "Fa:3", "Lab:3", "Si:3"];
// CMaj7 : Do Mi Sol Si — 36 40 43 47 ✓
const CMAJ7 = ["Do:3", "Mi:3", "Sol:3", "Si:3"];
// Dm7 : Ré Fa La Do — 38 41 45 48 ✓
const DM7 = ["Ré:3", "Fa:3", "La:3", "Do:4"];
// C (triade) for simpler resolution demos
const C_MAJ = ["Do:3", "Mi:3", "Sol:3", "Do:4"];

// ── Table des substitutions ───────────────────────────────────────────────────

interface SubRow {
  original: string;
  sub: string;
  sharedTones: string;   // the two shared guide tones
  bassMove: string;      // bass movement to I
}

const SUB_TABLE: SubRow[] = [
  { original: "G7",  sub: "D♭7",  sharedTones: "B / F",   bassMove: "D♭ → C  (↓ ½ ton)" },
  { original: "D7",  sub: "A♭7",  sharedTones: "F# / C",  bassMove: "A♭ → G  (↓ ½ ton)" },
  { original: "A7",  sub: "E♭7",  sharedTones: "C# / G",  bassMove: "E♭ → D  (↓ ½ ton)" },
  { original: "E7",  sub: "B♭7",  sharedTones: "G# / D",  bassMove: "B♭ → A  (↓ ½ ton)" },
  { original: "B7",  sub: "F7",   sharedTones: "D# / A",  bassMove: "F  → E  (↓ ½ ton)" },
  { original: "F♯7", sub: "C7",   sharedTones: "A# / E",  bassMove: "C  → B  (↓ ½ ton)" },
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

// ── Styles ────────────────────────────────────────────────────────────────────

const PRIMARY   = "#1A3A6E";
const PRIMARY_BG = "#E8EDF5";
const G7_COLOR  = "#BA7517";
const G7_BG     = "#FAEEDA";
const DB7_COLOR = "#7B3FA0";
const DB7_BG    = "#F0EAFA";
const C_COLOR   = "#0F6E56";
const C_BG      = "#E1F5EE";

const S = {
  wrap:     { fontFamily: "var(--font-sans, system-ui)", maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" } as React.CSSProperties,
  header:   { padding: "1.5rem 0 1rem", borderBottom: "0.5px solid #e5e5e5", marginBottom: "1.25rem" } as React.CSSProperties,
  badge:    { display: "inline-block", background: PRIMARY_BG, color: PRIMARY, fontSize: 11, fontWeight: 500, padding: "2px 10px", borderRadius: 20, marginBottom: 6 } as React.CSSProperties,
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
  h2:  { fontSize: 17, fontWeight: 500, color: "#111", marginBottom: 8 } as React.CSSProperties,
  h3:  { fontSize: 14, fontWeight: 500, margin: "20px 0 10px", color: "#111" } as React.CSSProperties,
  p:   { fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: "1rem" } as React.CSSProperties,
  info:  { borderLeft: `2px solid ${PRIMARY}`, padding: "8px 14px", background: PRIMARY_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#0D2547", lineHeight: 1.6 } as React.CSSProperties,
  warn:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: G7_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
  tip:   { borderLeft: `2px solid ${C_COLOR}`, padding: "8px 14px", background: C_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#085041", lineHeight: 1.6 } as React.CSSProperties,
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function Cours12() {
  const [activeSection, setActiveSection] = useState<string>("principe");
  const i18n = useCoursI18n("cours12");
  const tc = i18n.tc;
  const n = (key: string) => tc(`narrative.${key}` as any);
  const tr = useTerm();
  const { questions: ALL_QUESTIONS } = useCoursContent(cours12Content);

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
    if (id === "principe") return n("navPrincipe");
    if (id === "application") return n("navApplication");
    return n("navQuiz");
  };

  const COMPARISONS = [
    {
      id: "standard",
      title: n("compCardStandardTitle"),
      bassLine: n("compCardStandardBassLine"),
      feel: n("compCardStandardFeel"),
      chords: [G7, C_MAJ],
      labels: ["G7", "C"],
      color: "#BA7517",
      bg: "#FAEEDA",
    },
    {
      id: "tritone",
      title: n("compCardTritoneTitle"),
      bassLine: n("compCardTritoneBassLine"),
      feel: n("compCardTritoneFeel"),
      chords: [DB7, C_MAJ],
      labels: ["D♭7", "C"],
      color: "#7B3FA0",
      bg: "#F0EAFA",
    },
  ];

  return (
    <div style={S.wrap}>
      {/* Piano caché */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={4} startOctave={2} showLabels={false} />
      </div>

      {/* Header */}
      <div style={S.header}>
        <span style={S.badge}>{i18n.badge}</span>
        <h1 style={S.h1}>{tr("La substitution tritonique")}</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="John Coltrane"
        period="1926–1967"
        emoji="🎷"
        concept={n("maitreConcept")}
        anecdote={n("maitreAnecdote")}
        lesson={n("maitreLesson")}
        accentColor={PRIMARY}
      />

      {/* Navigation */}
      <nav style={S.nav}>
        {(["principe", "application", "quiz"] as const).map(id => (
          <button key={id} style={S.pill(activeSection === id)} onClick={() => setActiveSection(id)}>
            {sectionLabel(id)}
          </button>
        ))}
      </nav>

      {/* ══ SECTION 1 : PRINCIPE ══ */}
      {activeSection === "principe" && (
        <div>
          <h2 style={S.h2}>{n("principeTitle")}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: n("principeP1") }} />

          <div style={S.info} dangerouslySetInnerHTML={{ __html: n("principeInfo") }} />

          {/* Comparaison sonore */}
          <h3 style={S.h3}>{n("comparerH3")}</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
            {COMPARISONS.map(card => (
              <div key={card.id} style={{ border: `0.5px solid ${card.color}50`, borderRadius: 10, padding: "14px 16px", background: card.bg }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: card.color, marginBottom: 8, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>
                  {card.title}
                </div>
                <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 10 }}>
                  {card.labels.map((l, i) => (
                    <React.Fragment key={l}>
                      <span style={{ fontFamily: "monospace", fontSize: 16, fontWeight: 700, color: i === card.labels.length - 1 ? C_COLOR : card.color }}>{l}</span>
                      {i < card.labels.length - 1 && <span style={{ color: "#bbb", fontSize: 12 }}>→</span>}
                    </React.Fragment>
                  ))}
                </div>
                <div style={{ fontSize: 12, color: "#555", marginBottom: 6, fontFamily: "monospace" }}>
                  basse : <strong>{card.bassLine}</strong>
                </div>
                <div style={{ fontSize: 12, color: "#666", lineHeight: 1.5, marginBottom: 10 }}>{card.feel}</div>
                <button
                  onClick={() => playSeq(pianoRef as React.RefObject<PianoPlayerRef>, card.chords, 2200)}
                  style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${card.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: card.color }}
                >
                  {n("listenBtn")}
                </button>
              </div>
            ))}
          </div>

          {/* Pourquoi ça fonctionne */}
          <h3 style={S.h3}>{n("pourquoiH3")}</h3>
          <p style={S.p}>{n("pourquoiP")}</p>

          {/* Carte visuelle triton partagé */}
          <div style={{ border: "0.5px solid #e5e5e5", borderRadius: 12, overflow: "hidden", marginBottom: 16 }}>
            {/* G7 */}
            <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", borderBottom: "0.5px solid #e5e5e5" }}>
              <div style={{ background: G7_BG, padding: "12px 16px", display: "flex", alignItems: "center" }}>
                <span style={{ fontFamily: "monospace", fontSize: 18, fontWeight: 700, color: G7_COLOR }}>G7</span>
              </div>
              <div style={{ padding: "12px 16px" }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" as const }}>
                  {[
                    { note: "G", role: "Fondamentale", dim: true },
                    { note: "B", role: "3ce ↔", shared: true },
                    { note: "D", role: "5te", dim: true },
                    { note: "F", role: "♭7te ↔", shared: true },
                  ].map(n2 => (
                    <div key={n2.note} style={{ textAlign: "center" as const, minWidth: 44 }}>
                      <div style={{
                        fontFamily: "monospace", fontSize: 15, fontWeight: 700,
                        color: n2.shared ? G7_COLOR : "#bbb",
                        background: n2.shared ? G7_BG : "transparent",
                        border: n2.shared ? `1px solid ${G7_COLOR}` : "1px solid #e5e5e5",
                        borderRadius: 6, padding: "4px 8px", marginBottom: 2,
                      }}>{n2.note}</div>
                      <div style={{ fontSize: 10, color: n2.shared ? G7_COLOR : "#ccc" }}>{n2.role}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* flèche d'inversion */}
            <div style={{ background: "#f8f8f8", padding: "6px 16px", borderBottom: "0.5px solid #e5e5e5", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 11, color: "#888" }}>{n("enharmoniqueNote")}</span>
            </div>
            {/* Db7 */}
            <div style={{ display: "grid", gridTemplateColumns: "140px 1fr" }}>
              <div style={{ background: DB7_BG, padding: "12px 16px", display: "flex", alignItems: "center" }}>
                <span style={{ fontFamily: "monospace", fontSize: 18, fontWeight: 700, color: DB7_COLOR }}>D♭7</span>
              </div>
              <div style={{ padding: "12px 16px" }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" as const }}>
                  {[
                    { note: "D♭", role: "Fondamentale", dim: true },
                    { note: "F",  role: "3ce ↔", shared: true },
                    { note: "A♭", role: "5te", dim: true },
                    { note: "C♭(=B)", role: "♭7te ↔", shared: true },
                  ].map(n2 => (
                    <div key={n2.note} style={{ textAlign: "center" as const, minWidth: 44 }}>
                      <div style={{
                        fontFamily: "monospace", fontSize: 13, fontWeight: 700,
                        color: n2.shared ? DB7_COLOR : "#bbb",
                        background: n2.shared ? DB7_BG : "transparent",
                        border: n2.shared ? `1px solid ${DB7_COLOR}` : "1px solid #e5e5e5",
                        borderRadius: 6, padding: "4px 8px", marginBottom: 2,
                      }}>{n2.note}</div>
                      <div style={{ fontSize: 10, color: n2.shared ? DB7_COLOR : "#ccc" }}>{n2.role}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div style={S.tip} dangerouslySetInnerHTML={{ __html: n("tritonTip") }} />

          {/* Table des substitutions */}
          <h3 style={S.h3}>{n("sixPairesH3")}</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {[n("tableHeaderOriginal"), n("tableHeaderSub"), n("tableHeaderShared"), n("tableHeaderBass")].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 10px", fontWeight: 500, color: "#666", whiteSpace: "nowrap" as const }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SUB_TABLE.map((r, i) => (
                  <tr key={r.original} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "7px 10px", fontFamily: "monospace", fontWeight: 700, color: G7_COLOR }}>{r.original}</td>
                    <td style={{ padding: "7px 10px", fontFamily: "monospace", fontWeight: 700, color: DB7_COLOR }}>{r.sub}</td>
                    <td style={{ padding: "7px 10px", fontFamily: "monospace", fontSize: 11, color: "#555" }}>{r.sharedTones}</td>
                    <td style={{ padding: "7px 10px", fontFamily: "monospace", fontSize: 11, color: C_COLOR }}>{r.bassMove}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ══ SECTION 2 : APPLICATIONS ══ */}
      {activeSection === "application" && (
        <div>
          <h2 style={S.h2}>{n("applicationTitle")}</h2>
          <p style={S.p}>{n("applicationP1")}</p>

          {/* II-V-I comparaison */}
          <h3 style={S.h3}>{n("ii251H3")}</h3>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: 10, marginBottom: 24 }}>
            {/* Standard */}
            <div style={{ border: `0.5px solid ${G7_COLOR}40`, borderRadius: 10, padding: "14px 16px", background: G7_BG }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: G7_COLOR, marginBottom: 10, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>{n("ii251StandardLabel")}</div>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 10, flexWrap: "wrap" as const }}>
                {[
                  { sym: "Dm7", fn: "II", color: "#185FA5" },
                  { sym: "G7",  fn: "V", color: G7_COLOR },
                  { sym: "CMaj7", fn: "I", color: C_COLOR },
                ].map((c, i, arr) => (
                  <React.Fragment key={c.sym}>
                    <div style={{ textAlign: "center" as const }}>
                      <div style={{ fontFamily: "monospace", fontSize: 18, fontWeight: 700, color: c.color }}>{c.sym}</div>
                      <div style={{ fontSize: 10, color: "#888" }}>{c.fn}</div>
                    </div>
                    {i < arr.length - 1 && <span style={{ color: "#bbb" }}>→</span>}
                  </React.Fragment>
                ))}
              </div>
              <div style={{ fontFamily: "monospace", fontSize: 12, color: "#888", marginBottom: 10 }}
                dangerouslySetInnerHTML={{ __html: n("ii251StandardBass") }} />
              <button
                onClick={() => playSeq(pianoRef as React.RefObject<PianoPlayerRef>, [DM7, G7, CMAJ7], 2200)}
                style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${G7_COLOR}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: G7_COLOR }}
              >
                {n("listenStandardBtn")}
              </button>
            </div>

            {/* Avec sub */}
            <div style={{ border: `0.5px solid ${DB7_COLOR}40`, borderRadius: 10, padding: "14px 16px", background: DB7_BG }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: DB7_COLOR, marginBottom: 10, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>{n("ii251SubLabel")}</div>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 10, flexWrap: "wrap" as const }}>
                {[
                  { sym: "Dm7", fn: "II", color: "#185FA5" },
                  { sym: "D♭7", fn: "♭II", color: DB7_COLOR },
                  { sym: "CMaj7", fn: "I", color: C_COLOR },
                ].map((c, i, arr) => (
                  <React.Fragment key={c.sym}>
                    <div style={{ textAlign: "center" as const }}>
                      <div style={{ fontFamily: "monospace", fontSize: 18, fontWeight: 700, color: c.color }}>{c.sym}</div>
                      <div style={{ fontSize: 10, color: "#888" }}>{c.fn}</div>
                    </div>
                    {i < arr.length - 1 && <span style={{ color: "#bbb" }}>→</span>}
                  </React.Fragment>
                ))}
              </div>
              <div style={{ fontFamily: "monospace", fontSize: 12, color: DB7_COLOR, marginBottom: 10 }}
                dangerouslySetInnerHTML={{ __html: n("ii251SubBass") }} />
              <button
                onClick={() => playSeq(pianoRef as React.RefObject<PianoPlayerRef>, [DM7, DB7, CMAJ7], 2200)}
                style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${DB7_COLOR}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: DB7_COLOR }}
              >
                {n("listenSubBtn")}
              </button>
            </div>
          </div>

          <div style={S.info} dangerouslySetInnerHTML={{ __html: n("bassLineInfo") }} />

          {/* Substitutions sur d'autres degrés */}
          <h3 style={S.h3}>{n("secondaryDomH3")}</h3>
          <p style={S.p}>{n("secondaryDomP")}</p>

          <div style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, overflow: "hidden", marginBottom: 16 }}>
            {[
              { label: n("secDomLabel1"), orig: "A7", sub: "E♭7", bass: n("secDomBass1") },
              { label: n("secDomLabel2"), orig: "D7", sub: "A♭7", bass: n("secDomBass2") },
              { label: n("secDomLabel3"), orig: "G7", sub: "D♭7", bass: n("secDomBass3") },
            ].map((r, i) => (
              <div key={r.orig} style={{ display: "grid", gridTemplateColumns: "160px 80px 80px 1fr", alignItems: "center", padding: "10px 16px", borderBottom: i < 2 ? "0.5px solid #f0f0f0" : "none", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                <div style={{ fontSize: 12, color: "#555" }}>{r.label}</div>
                <div style={{ fontFamily: "monospace", fontSize: 13, fontWeight: 600, color: G7_COLOR }}>{r.orig}</div>
                <div style={{ fontFamily: "monospace", fontSize: 13, fontWeight: 600, color: DB7_COLOR }}>{r.sub}</div>
                <div style={{ fontFamily: "monospace", fontSize: 11, color: C_COLOR }}>{r.bass}</div>
              </div>
            ))}
          </div>

          {/* Exemples jazz */}
          <h3 style={S.h3}>{n("jazzExamplesH3")}</h3>

          {[
            {
              title: n("jazzExample1Title"),
              color: PRIMARY,
              bg: PRIMARY_BG,
              body: n("jazzExample1Body"),
            },
            {
              title: n("jazzExample2Title"),
              color: DB7_COLOR,
              bg: DB7_BG,
              body: n("jazzExample2Body"),
            },
            {
              title: n("jazzExample3Title"),
              color: "#993C1D",
              bg: "#FAECE7",
              body: n("jazzExample3Body"),
            },
          ].map(item => (
            <div key={item.title} style={{ border: `0.5px solid ${item.color}30`, borderRadius: 10, padding: "14px 16px", background: item.bg, marginBottom: 10 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: item.color, marginBottom: 6 }}>{item.title}</div>
              <div style={{ fontSize: 13, color: "#555", lineHeight: 1.65 }}>{item.body}</div>
            </div>
          ))}

          <div style={S.warn} dangerouslySetInnerHTML={{ __html: n("limitWarn") }} />
        </div>
      )}

      {/* ══ SECTION 3 : QUIZ ══ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.h2}>{tr("Entraînement")}</h2>

          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 8 ? "🎷" : quizScore >= 6 ? "👍" : "💪"}
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
                style={{ fontSize: 13, padding: "8px 20px", border: `0.5px solid ${PRIMARY}`, borderRadius: 20, cursor: "pointer", background: PRIMARY_BG, color: PRIMARY }}
              >{tr("Nouveau quiz")}</button>
            </div>
          ) : (
            <div>
              <div style={{ fontSize: 12, color: "#999", marginBottom: 10 }}>
                Question {quizIdx + 1} / {QUIZ_COUNT}
                <span style={{ marginLeft: 12, color: "#bbb" }}>{ALL_QUESTIONS.length} {n("quizPoolLabel")}</span>
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
                  {quizIdx + 1 < QUIZ_COUNT ? n("quizNextBtn") : n("quizScoreBtn")}
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
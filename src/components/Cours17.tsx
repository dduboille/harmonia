"use client";

/**
 * Cours17.tsx
 * Harmonia · Niveau 2 · Cours 17 — La phrase musicale et la forme
 * Convention : affichage anglais, dotKeys PianoPlayer français
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { useTerm } from "@/hooks/useTerm";
import { cours17Content } from "@/data/cours17Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";

// ── Audio helpers ─────────────────────────────────────────────────────────────

function playChord(ref: React.RefObject<PianoPlayerRef>, keys: string[], dur = 1.4) {
  keys.forEach(key => {
    const [n, o] = key.split(":");
    ref.current?.playNote(n, parseInt(o), { duration: dur });
  });
}

function playProg(
  ref: React.RefObject<PianoPlayerRef>,
  chords: string[][],
  gapMs = 1100,
  dur = 1.0,
) {
  chords.forEach((chord, i) => {
    setTimeout(() => playChord(ref, chord, dur), i * gapMs);
  });
}

// ── Audio demos (ascending pitch verified) ────────────────────────────────────

// Beethoven 5th motif: Sol–Sol–Sol–Mib (single notes played sequentially)
const BEETHOVEN: string[][] = [["Sol:4"],["Sol:4"],["Sol:4"],["Mib:4"]];

// Ascending march in C major: triads on I–II–III–IV
const MARCHE_DEMO: string[][] = [
  ["Do:4","Mi:4","Sol:4"],    // I   — C
  ["Ré:4","Fa:4","La:4"],     // II  — Dm
  ["Mi:4","Sol:4","Si:4"],    // III — Em
  ["Fa:4","La:4","Do:5"],     // IV  — F
];

// Strict repetition demo
const STRICTE_DEMO: string[][] = [
  ["Do:4","Mi:4","Sol:4"],
  ["Do:4","Mi:4","Sol:4"],
];

// Melodic transformation demo (motif → transposed a step up)
const TRANSFO_DEMO: string[][] = [
  ["Do:4","Mi:4","Sol:4"],    // motif original
  ["Ré:4","Fa:4","La:4"],     // un ton plus haut
];

// Period: antecedent (→ V) + consequent (→ I)
const ANTECEDENT: string[][] = [
  ["Do:4","Mi:4","Sol:4"],
  ["Ré:4","Fa:4","La:4"],
  ["Sol:3","Si:3","Ré:4","Fa:4"],   // G7 — demi-cadence V
];
const CONSEQUENT: string[][] = [
  ["Do:4","Mi:4","Sol:4"],
  ["Ré:4","Fa:4","La:4"],
  ["Do:3","Mi:3","Sol:3","Si:3"],   // CMaj7 — cadence parfaite I
];
const PERIOD_DEMO: string[][] = [...ANTECEDENT, ...CONSEQUENT];

// Blues 12 mesures (simplified chord outline)
const BLUES_DEMO: string[][] = [
  ["Do:3","Mi:3","Sol:3","Sib:3"],  // C7  (I7) — mes 1
  ["Do:3","Mi:3","Sol:3","Sib:3"],  // C7        — mes 2
  ["Do:3","Mi:3","Sol:3","Sib:3"],  // C7        — mes 3
  ["Do:3","Mi:3","Sol:3","Sib:3"],  // C7        — mes 4
  ["Fa:3","La:3","Do:4","Mib:4"],   // F7  (IV7) — mes 5
  ["Fa:3","La:3","Do:4","Mib:4"],   // F7        — mes 6
  ["Do:3","Mi:3","Sol:3","Sib:3"],  // C7        — mes 7
  ["Do:3","Mi:3","Sol:3","Sib:3"],  // C7        — mes 8
  ["Ré:3","Fa:3","La:3","Do:4"],    // Dm7 (II)  — mes 9
  ["Sol:3","Si:3","Ré:4","Fa:4"],   // G7  (V)   — mes 10
  ["Do:3","Mi:3","Sol:3","Sib:3"],  // C7        — mes 11
  ["Sol:3","Si:3","Ré:4","Fa:4"],   // G7  (turnaround) — mes 12
];

// ── Static data ───────────────────────────────────────────────────────────────

interface Technique {
  id: string;
  nameKey: string;
  color: string;
  bg: string;
  descKey: string;
  example: string;
  demo?: string[][];
  demoLabelKey?: string;
}

interface Forme {
  id: string;
  nameKey: string;
  schema: string;
  color: string;
  bg: string;
  descKey: string;
  examplesKey: string;
  demo?: string[][];
}

const TECHNIQUES: Technique[] = [
  {
    id: "stricte",
    nameKey: "techStricteName",
    color: "#185FA5",
    bg: "#E6F1FB",
    descKey: "techStricteDesc",
    example: "Do–Mi–Sol  →  Do–Mi–Sol",
    demo: STRICTE_DEMO,
    demoLabelKey: "techStricteDemoLabel",
  },
  {
    id: "transformation",
    nameKey: "techTransfoName",
    color: "#0F6E56",
    bg: "#E1F5EE",
    descKey: "techTransfoDesc",
    example: "Do–Mi–Sol  →  Ré–Fa–La  (un ton plus haut)",
    demo: TRANSFO_DEMO,
    demoLabelKey: "techTransfoDemoLabel",
  },
  {
    id: "marche",
    nameKey: "techMarcheName",
    color: "#7B1F1F",
    bg: "#FCEAEA",
    descKey: "techMarcheDesc",
    example: "Do–Mi–Sol  →  Ré–Fa–La  →  Mi–Sol–Si  (marche tonale ascendante)",
    demo: MARCHE_DEMO,
    demoLabelKey: "techMarcheDemoLabel",
  },
  {
    id: "complementaire",
    nameKey: "techComplementaireName",
    color: "#6B3FA0",
    bg: "#F0EAFA",
    descKey: "techComplementaireDesc",
    example: "Motif A (mes. 1–2)  +  Motif B complémentaire (mes. 3–4)",
  },
  {
    id: "harmonique",
    nameKey: "techHarmoniqueName",
    color: "#BA7517",
    bg: "#FAEEDA",
    descKey: "techHarmoniqueDesc",
    example: "Mélodie Do–Mi–Sol sur I (CMaj7)  →  même mélodie sur VI (Am7)",
  },
];

const FORMES: Forme[] = [
  {
    id: "aba",
    nameKey: "formeAbaName",
    schema: "A – B – A",
    color: "#185FA5",
    bg: "#E6F1FB",
    descKey: "formeAbaDesc",
    examplesKey: "formeAbaExamples",
  },
  {
    id: "aaba",
    nameKey: "formeAABAName",
    schema: "A – A – B – A",
    color: "#0F6E56",
    bg: "#E1F5EE",
    descKey: "formeAABADesc",
    examplesKey: "formeAABAExamples",
  },
  {
    id: "blues",
    nameKey: "formeBluesName",
    schema: "I⁷(4) – IV⁷(2) – I⁷(2) – II–V–I(4)",
    color: "#7B1F1F",
    bg: "#FCEAEA",
    descKey: "formeBluesDesc",
    examplesKey: "formeBluesExamples",
    demo: BLUES_DEMO,
  },
  {
    id: "abac",
    nameKey: "formeABACName",
    schema: "A – B – A – C",
    color: "#6B3FA0",
    bg: "#F0EAFA",
    descKey: "formeABACDesc",
    examplesKey: "formeABACExamples",
  },
  {
    id: "sonate",
    nameKey: "formeSonateName",
    schema: "Exposition – Développement – Réexposition",
    color: "#BA7517",
    bg: "#FAEEDA",
    descKey: "formeSonateDesc",
    examplesKey: "formeSonateExamples",
  },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const QUIZ_COUNT = 10;
const SECTIONS_IDS = ["phrase", "periode", "quiz"] as const;
type SectionId = typeof SECTIONS_IDS[number];

const PRIMARY    = "#6B2D8A";
const PRIMARY_BG = "#F0E8F8";

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
  h2:       { fontSize: 17, fontWeight: 500, color: "#111", marginBottom: 8 } as React.CSSProperties,
  h3:       { fontSize: 14, fontWeight: 500, color: "#111", margin: "20px 0 10px" } as React.CSSProperties,
  p:        { fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: "1rem" } as React.CSSProperties,
  infoBox:  { borderLeft: `2px solid ${PRIMARY}`, padding: "8px 14px", background: PRIMARY_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#3A0A50", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
  tip:      { borderLeft: "2px solid #0F6E56", padding: "8px 14px", background: "#E1F5EE", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#085041", lineHeight: 1.6 } as React.CSSProperties,
};

export default function Cours17() {
  const [activeSection, setActiveSection] = useState<SectionId>("phrase");
  const i18n = useCoursI18n("cours17");
  const tc = i18n.tc;
  const n = (key: string) => tc(`narrative.${key}` as any);
  const tr = useTerm();
  const { questions: ALL_QUESTIONS } = useCoursContent(cours17Content);
  const [activeTech,  setActiveTech]  = useState<string | null>(null);
  const [activeForme, setActiveForme] = useState<string | null>(null);

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

  const sectionLabel = (id: SectionId) => {
    if (id === "phrase")  return n("navPhrase");
    if (id === "periode") return n("navPeriode");
    return n("navQuiz");
  };

  const ETAPES = [
    { n: "①", nameKey: "step1Name", descKey: "step1Desc" },
    { n: "②", nameKey: "step2Name", descKey: "step2Desc" },
    { n: "③", nameKey: "step3Name", descKey: "step3Desc" },
    { n: "④", nameKey: "step4Name", descKey: "step4Desc" },
  ];

  const tableRows: [string, string, string][] = [
    [n("tableRow1Aspect"), n("tableRow1Phrase"), n("tableRow1Periode")],
    [n("tableRow2Aspect"), n("tableRow2Phrase"), n("tableRow2Periode")],
    [n("tableRow3Aspect"), n("tableRow3Phrase"), n("tableRow3Periode")],
    [n("tableRow4Aspect"), n("tableRow4Phrase"), n("tableRow4Periode")],
    [n("tableRow5Aspect"), n("tableRow5Phrase"), n("tableRow5Periode")],
  ];

  return (
    <div style={S.wrap}>
      {/* Piano caché */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={3} startOctave={3} showLabels={false} />
      </div>

      {/* Header */}
      <div style={S.header}>
        <span style={S.badge}>{n("headerBadge")}</span>
        <h1 style={S.h1}>{tr(n("headerTitle"))}</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Arnold Schoenberg"
        period={n("maitreCardPeriod")}
        emoji="📖"
        concept={n("maitreCardConcept")}
        anecdote={n("maitreCardAnecdote")}
        lesson={n("maitreCardLesson")}
        accentColor={PRIMARY}
      />

      {/* Navigation */}
      <nav style={S.nav}>
        {SECTIONS_IDS.map(id => (
          <button key={id} style={S.pill(activeSection === id)} onClick={() => setActiveSection(id)}>
            {sectionLabel(id)}
          </button>
        ))}
      </nav>

      {/* ══ SECTION 1 : LA PHRASE ══ */}
      {activeSection === "phrase" && (
        <div>
          <h2 style={S.h2}>{n("phraseTitle")}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: n("phraseIntro") }} />

          {/* Beethoven motif demo */}
          <div style={{ background: "#f8f8f8", border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "14px 16px", marginBottom: "1.25rem" }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: "#111", marginBottom: 4 }}>
              {n("beethovenBoxTitle")}
            </div>
            <div style={{ fontFamily: "monospace", fontSize: 13, color: PRIMARY, marginBottom: 10 }}>
              {n("beethovenFormulaCaption")}
            </div>
            <div style={{ fontSize: 12, color: "#666", marginBottom: 10, lineHeight: 1.6 }}>
              {n("beethovenBoxDesc")}
            </div>
            <button
              onClick={() => playProg(pianoRef as React.RefObject<PianoPlayerRef>, BEETHOVEN, 450, 0.4)}
              style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${PRIMARY}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: PRIMARY }}
            >
              {n("beethovenListenBtn")}
            </button>
          </div>

          {/* 4 étapes */}
          <h3 style={S.h3}>{n("stepsTitle")}</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8, marginBottom: "1.25rem" }}>
            {ETAPES.map(({ n: num, nameKey, descKey }) => (
              <div key={num} style={{ border: `0.5px solid ${PRIMARY}25`, borderRadius: 8, padding: "12px 14px", background: PRIMARY_BG }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: PRIMARY, marginBottom: 4, lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: 13, fontWeight: 500, color: "#111", marginBottom: 3 }}>{n(nameKey)}</div>
                <div style={{ fontSize: 12, color: "#666", lineHeight: 1.5 }}>{n(descKey)}</div>
              </div>
            ))}
          </div>
          <div style={S.infoBox} dangerouslySetInnerHTML={{ __html: n("liquidationBox") }} />

          {/* Techniques de répétition */}
          <h3 style={S.h3}>{n("techTitle")}</h3>
          {TECHNIQUES.map(tech => (
            <div
              key={tech.id}
              style={{
                border: `0.5px solid ${activeTech === tech.id ? tech.color : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 8,
                overflow: "hidden",
                cursor: "pointer",
                background: activeTech === tech.id ? tech.bg : "#fff",
                transition: "all .15s",
              }}
              onClick={() => setActiveTech(activeTech === tech.id ? null : tech.id)}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#111", marginBottom: 2 }}>{n(tech.nameKey)}</div>
                  <div style={{ fontFamily: "monospace", fontSize: 11, color: tech.color }}>{tech.example}</div>
                </div>
                <div style={{ fontSize: 11, color: "#bbb" }}>{activeTech === tech.id ? "▲" : "▼"}</div>
              </div>
              {activeTech === tech.id && (
                <div style={{ padding: "0 16px 14px", borderTop: `0.5px solid ${tech.color}20` }}>
                  <p style={{ ...S.p, marginTop: 10, marginBottom: tech.demo ? 10 : 0 }}>{n(tech.descKey)}</p>
                  {tech.demo && tech.demoLabelKey && (
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        playProg(pianoRef as React.RefObject<PianoPlayerRef>, tech.demo!, tech.id === "stricte" ? 1000 : 1100, 0.9);
                      }}
                      style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${tech.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: tech.color }}
                    >
                      {n(tech.demoLabelKey)}
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}

          <div style={S.warnBox} dangerouslySetInnerHTML={{ __html: n("warnBox") }} />
        </div>
      )}

      {/* ══ SECTION 2 : PÉRIODE & FORMES ══ */}
      {activeSection === "periode" && (
        <div>
          <h2 style={S.h2}>{n("periodeTitle")}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: n("periodeIntro") }} />

          {/* Antécédent / Conséquent demos */}
          <h3 style={S.h3}>{n("antecedentConsequentTitle")}</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
            <div style={{ border: "0.5px solid #BA7517", borderRadius: 10, padding: "14px 16px", background: "#FAEEDA" }}>
              <div style={{ fontSize: 12, fontWeight: 500, color: "#BA7517", marginBottom: 4 }}>{n("antecedentLabel")}</div>
              <div style={{ fontFamily: "monospace", fontSize: 11, color: "#633806", marginBottom: 8 }}>
                I – IIm – V  (se termine sur V)
              </div>
              <div style={{ fontSize: 12, color: "#555", lineHeight: 1.5, marginBottom: 10 }}>
                {n("antecedentDesc")}
              </div>
              <button
                onClick={() => playProg(pianoRef as React.RefObject<PianoPlayerRef>, ANTECEDENT, 1200, 1.1)}
                style={{ fontSize: 11, padding: "4px 12px", border: "0.5px solid #BA7517", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#BA7517" }}
              >
                {n("antecedentBtn")}
              </button>
            </div>
            <div style={{ border: `0.5px solid ${PRIMARY}`, borderRadius: 10, padding: "14px 16px", background: PRIMARY_BG }}>
              <div style={{ fontSize: 12, fontWeight: 500, color: PRIMARY, marginBottom: 4 }}>{n("consequentLabel")}</div>
              <div style={{ fontFamily: "monospace", fontSize: 11, color: "#3A0A50", marginBottom: 8 }}>
                I – IIm – I  (se termine sur I)
              </div>
              <div style={{ fontSize: 12, color: "#555", lineHeight: 1.5, marginBottom: 10 }}>
                {n("consequentDesc")}
              </div>
              <button
                onClick={() => playProg(pianoRef as React.RefObject<PianoPlayerRef>, CONSEQUENT, 1200, 1.1)}
                style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${PRIMARY}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: PRIMARY }}
              >
                {n("consequentBtn")}
              </button>
            </div>
          </div>
          <div style={{ textAlign: "center", marginBottom: "1.25rem" }}>
            <button
              onClick={() => playProg(pianoRef as React.RefObject<PianoPlayerRef>, PERIOD_DEMO, 1100, 1.0)}
              style={{ fontSize: 12, padding: "6px 18px", border: "0.5px solid #333", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#333" }}
            >
              {n("periodCompleteBtn")}
            </button>
          </div>

          {/* Tableau comparatif phrase vs période */}
          <h3 style={S.h3}>{n("phraseVsPeriodeTitle")}</h3>
          <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {[n("tableAspect"), n("tablePhrase"), n("tablePeriode")].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "7px 12px", fontWeight: 500, color: "#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map(([aspect, phrase, periode], idx) => (
                  <tr key={aspect} style={{ borderBottom: "0.5px solid #f0f0f0", background: idx % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "7px 12px", fontWeight: 500, color: "#555" }}>{aspect}</td>
                    <td style={{ padding: "7px 12px", color: "#444" }}>{phrase}</td>
                    <td style={{ padding: "7px 12px", color: "#444" }}>{periode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Grandes formes */}
          <h3 style={S.h3}>{n("grandesFormesTitle")}</h3>
          {FORMES.map(forme => (
            <div
              key={forme.id}
              style={{
                border: `0.5px solid ${activeForme === forme.id ? forme.color : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 8,
                overflow: "hidden",
                cursor: "pointer",
                background: activeForme === forme.id ? forme.bg : "#fff",
                transition: "all .15s",
              }}
              onClick={() => setActiveForme(activeForme === forme.id ? null : forme.id)}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#111", marginBottom: 2 }}>{n(forme.nameKey)}</div>
                  <div style={{ fontFamily: "monospace", fontSize: 12, color: forme.color }}>{forme.schema}</div>
                </div>
                <div style={{ fontSize: 11, color: "#bbb" }}>{activeForme === forme.id ? "▲" : "▼"}</div>
              </div>
              {activeForme === forme.id && (
                <div style={{ padding: "0 16px 14px", borderTop: `0.5px solid ${forme.color}20` }}>
                  <p style={{ ...S.p, marginTop: 10, marginBottom: 6 }}>{n(forme.descKey)}</p>
                  <div style={{ fontSize: 12, color: "#888", marginBottom: forme.demo ? 12 : 0 }}>
                    <em>{n("formesExamplesLabel")}</em> {n(forme.examplesKey)}
                  </div>
                  {forme.demo && (
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        playProg(pianoRef as React.RefObject<PianoPlayerRef>, forme.demo!, 900, 0.85);
                      }}
                      style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${forme.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: forme.color }}
                    >
                      {n("formesBluesBtn")}
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}

          <div style={S.tip} dangerouslySetInnerHTML={{ __html: n("tipBox") }} />
        </div>
      )}

      {/* ══ SECTION 3 : QUIZ ══ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.h2}>{n("quizTitle")}</h2>
          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 8 ? "📖" : quizScore >= 6 ? "👍" : "💪"}
              </div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>
                Score : {quizScore} / {QUIZ_COUNT}
              </div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
                {i18n.quizMessage(quizScore, QUIZ_COUNT)}
              </div>
              <button
                onClick={resetQuiz}
                style={{ fontSize: 13, padding: "8px 20px", border: `0.5px solid ${PRIMARY}`, borderRadius: 20, cursor: "pointer", background: PRIMARY_BG, color: PRIMARY }}
              >{tr("Nouveau quiz")}</button>
            </div>
          ) : (
            <div>
              <div style={{ fontSize: 12, color: "#999", marginBottom: 10 }}>
                {n("quizQuestionCounter")} {quizIdx + 1} / {QUIZ_COUNT}
                <span style={{ marginLeft: 12, color: "#bbb" }}>{ALL_QUESTIONS.length} {n("quizPoolSize")}</span>
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
"use client";

/**
 * Cours14.tsx
 * Harmonia · Niveau 2 · Cours 14 — L'harmonisation modale
 * Convention : affichage anglais, dotKeys PianoPlayer français
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { useTerm } from "@/hooks/useTerm";
import { cours14Content } from "@/data/cours14Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";

// ── Audio helpers ─────────────────────────────────────────────────────────────

function playChord(ref: React.RefObject<PianoPlayerRef>, keys: string[], dur = 1.8) {
  keys.forEach(key => {
    const [n, o] = key.split(":");
    ref.current?.playNote(n, parseInt(o), { duration: dur });
  });
}

function playProg(
  ref: React.RefObject<PianoPlayerRef>,
  chords: string[][],
  gapMs = 1600,
  dur = 1.5,
) {
  chords.forEach((chord, i) => {
    setTimeout(() => playChord(ref, chord, dur), i * gapMs);
  });
}

// ── Chord data ────────────────────────────────────────────────────────────────

// Tonal demo: C – F – G7 – C (I–IV–V7–I)
const TONAL_DEMO: string[][] = [
  ["Do:3","Mi:3","Sol:3"],
  ["Fa:3","La:3","Do:4"],
  ["Sol:3","Si:3","Ré:4","Fa:4"],
  ["Do:3","Mi:3","Sol:3"],
];

// Modal demo: Dm – G – Dm – G (D dorien Im–IV–Im–IV)
const DORIAN_DEMO: string[][] = [
  ["Ré:3","Fa:3","La:3"],
  ["Sol:3","Si:3","Ré:4"],
  ["Ré:3","Fa:3","La:3"],
  ["Sol:3","Si:3","Ré:4"],
];

// ── Mode data ─────────────────────────────────────────────────────────────────

interface ModalMode {
  id: string;
  name: string;
  color: string;
  bg: string;
  emoji: string;
  rootKey: string;
  characteristicChord: string;
  progression: string;
  progExample: string;
  avoidChord: string;
  avoidReason: string;
  description: string;
  chords: string[][];
}

const MODAL_MODES: ModalMode[] = [
  {
    id: "dorien",
    name: "Dorien",
    color: "#185FA5",
    bg: "#E6F1FB",
    emoji: "🌊",
    rootKey: "D dorien",
    characteristicChord: "IV majeur — grâce à la 6te majeure (B en D dorien)",
    progression: "Im – IV – Im",
    progExample: "Dm – G – Dm",
    avoidChord: "A7 (V7 en D dorien)",
    avoidReason: "A7 introduit C# — la sensible que le dorien n'a pas (C naturel). Ce C# crée une attraction tonale vers Dm, transformant la couleur modale en mineur harmonique classique.",
    description: "Le dorien se distingue du mineur éolien par son IV majeur — grâce à la 6te majeure. L'oscillation Im–IV sans résolution est la couleur jazz-modal par excellence. So What de Miles Davis tourne sur Dm7–G pendant tout le morceau.",
    chords: [
      ["Ré:3","Fa:3","La:3"],
      ["Sol:3","Si:3","Ré:4"],
      ["Ré:3","Fa:3","La:3"],
    ],
  },
  {
    id: "phrygien",
    name: "Phrygien",
    color: "#993C1D",
    bg: "#FAECE7",
    emoji: "🔥",
    rootKey: "E phrygien",
    characteristicChord: "♭II majeur — la cadence phrygienne",
    progression: "Im – ♭II – Im",
    progExample: "Em – F – Em",
    avoidChord: "B7 (V7 en E phrygien)",
    avoidReason: "B7 introduit D# — une sensible étrangère au phrygien (D naturel). Ce D# crée une résolution tonale vers Em qui efface complètement la couleur méditerranéenne sombre du mode.",
    description: "Le ♭II (F en E phrygien) est l'accord le plus caractéristique de ce mode. La cadence ♭II→Im est l'ADN du flamenco — le mouvement descendant par demi-ton crée une tension unique, très différente de V7→I.",
    chords: [
      ["Mi:3","Sol:3","Si:3"],
      ["Fa:3","La:3","Do:4"],
      ["Mi:3","Sol:3","Si:3"],
    ],
  },
  {
    id: "lydien",
    name: "Lydien",
    color: "#6B3FA0",
    bg: "#F0EAFA",
    emoji: "✨",
    rootKey: "F lydien",
    characteristicChord: "II majeur — grâce au #4 (B naturel en F lydien)",
    progression: "I – II – I",
    progExample: "F – G – F",
    avoidChord: "Bb (IV de F majeur standard)",
    avoidReason: "Bb réintroduit exactement la note que le lydien remplace par B naturel (#4). Jouer Bb efface instantanément la couleur onirique du lydien et fait entendre une gamme majeure standard.",
    description: "La progression I–II en lydien n'existe pas en majeur tonal (II y est mineur). Ici II est majeur grâce au #4 — un mouvement de seconde ascendante majeur–majeur unique, couleur lumineuse et magique utilisée par John Williams dans ses musiques de films.",
    chords: [
      ["Fa:3","La:3","Do:4"],
      ["Sol:3","Si:3","Ré:4"],
      ["Fa:3","La:3","Do:4"],
    ],
  },
  {
    id: "mixolydien",
    name: "Mixolydien",
    color: "#BA7517",
    bg: "#FAEEDA",
    emoji: "🎸",
    rootKey: "G mixolydien",
    characteristicChord: "♭VII majeur — sans résolution de sensible",
    progression: "I – ♭VII – IV – I",
    progExample: "G – F – C – G",
    avoidChord: "D7 (V7 en G mixolydien)",
    avoidReason: "D7 introduit F# — la sensible absente du mixolydien (F naturel). Ce F# crée une tension vers G (résolution tonale) qui brise la couleur cyclique blues/rock du mode.",
    description: "Le mixolydien est la base harmonique du blues et du rock. La progression I–♭VII–IV–I tourne en boucle sans jamais résoudre — énergie perpétuelle. Le ♭VII (F en G mixolydien) est un accord majeur flamboyant qui ancre la couleur.",
    chords: [
      ["Sol:3","Si:3","Ré:4"],
      ["Fa:3","La:3","Do:4"],
      ["Do:3","Mi:3","Sol:3"],
      ["Sol:3","Si:3","Ré:4"],
    ],
  },
  {
    id: "eolien",
    name: "Éolien",
    color: "#2D4A8A",
    bg: "#E8EEF8",
    emoji: "🌙",
    rootKey: "A éolien",
    characteristicChord: "♭VII majeur — sans sensible",
    progression: "Im – ♭VI – ♭VII – Im",
    progExample: "Am – F – G – Am",
    avoidChord: "E7 (V7 en A éolien)",
    avoidReason: "E7 introduit G# — la sensible absente de l'éolien (G naturel). Ce G# appelle impérativement la résolution vers A, transformant le mode en mineur harmonique et brisant la mélancolie naturelle de l'éolien.",
    description: "L'éolien est la gamme mineure naturelle — le mode le plus naturellement modal. Sans sensible, il n'appelle pas de résolution. Im–♭VI–♭VII–Im est la base de centaines de chansons pop et rock mélancoliques (House of the Rising Sun, Losing My Religion...).",
    chords: [
      ["La:3","Do:4","Mi:4"],
      ["Fa:3","La:3","Do:4"],
      ["Sol:3","Si:3","Ré:4"],
      ["La:3","Do:4","Mi:4"],
    ],
  },
];

// ── Quiz ───────────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const QUIZ_COUNT = 10;
const SECTIONS_IDS = ["principes", "modes", "quiz"] as const;
type SectionId = typeof SECTIONS_IDS[number];

const PRIMARY    = "#1A6B7A";
const PRIMARY_BG = "#E3F4F7";

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
  p:        { fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: "1rem" } as React.CSSProperties,
  infoBox:  { borderLeft: `2px solid ${PRIMARY}`, padding: "8px 14px", background: PRIMARY_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#0C5060", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
};

export default function Cours14() {
  const [activeSection, setActiveSection] = useState<SectionId>("principes");
  const i18n = useCoursI18n("cours14");
  const tc = i18n.tc;
  const n = (key: string) => tc(`narrative.${key}` as any);
  const tr = useTerm();
  const { questions: ALL_QUESTIONS } = useCoursContent(cours14Content);
  const [activeMode, setActiveMode] = useState<string | null>(null);

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
    if (id === "principes") return n("navPrincipes");
    if (id === "modes") return n("navModes");
    return n("navEntrainement");
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
        <h1 style={S.h1}>{tr("L'harmonisation modale")}</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Claude Debussy"
        period={n("maitrePeriod")}
        emoji="🌊"
        concept={n("maitreConcept")}
        anecdote={n("maitreAnecdote")}
        lesson={n("maitreLesson")}
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

      {/* ══ SECTION 1 : PRINCIPES ══ */}
      {activeSection === "principes" && (
        <div>
          <h2 style={S.h2}>{n("principesTitle")}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: n("principesP1") }} />

          {/* Tableau comparatif */}
          <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  <th style={{ textAlign: "left", padding: "8px 12px", fontWeight: 500, color: "#666" }}>{n("tableColAspect")}</th>
                  <th style={{ textAlign: "left", padding: "8px 12px", fontWeight: 500, color: "#BA7517" }}>{n("tableColTonal")}</th>
                  <th style={{ textAlign: "left", padding: "8px 12px", fontWeight: 500, color: PRIMARY }}>{n("tableColModal")}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [n("tableRow0Aspect"), n("tableRow0Tonal"), n("tableRow0Modal")],
                  [n("tableRow1Aspect"), n("tableRow1Tonal"), n("tableRow1Modal")],
                  [n("tableRow2Aspect"), n("tableRow2Tonal"), n("tableRow2Modal")],
                  [n("tableRow3Aspect"), n("tableRow3Tonal"), n("tableRow3Modal")],
                  [n("tableRow4Aspect"), n("tableRow4Tonal"), n("tableRow4Modal")],
                  [n("tableRow5Aspect"), n("tableRow5Tonal"), n("tableRow5Modal")],
                ].map(([aspect, tonal, modal], i) => (
                  <tr key={aspect} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "8px 12px", fontWeight: 500, color: "#444", fontSize: 12 }}>{aspect}</td>
                    <td style={{ padding: "8px 12px", color: "#633806", fontSize: 12 }}>{tonal}</td>
                    <td style={{ padding: "8px 12px", color: "#0C5060", fontSize: 12 }}>{modal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.infoBox} dangerouslySetInnerHTML={{ __html: n("infoBoxGoldenRule") }} />

          {/* Comparaison audio */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 10px", color: "#111" }}>
            {n("listenDiffTitle")}
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: "1.5rem" }}>
            <div style={{ border: "0.5px solid #BA7517", borderRadius: 10, padding: "14px 16px", background: "#FAEEDA" }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: "#BA7517", marginBottom: 6 }}>{n("tonaLabelTitle")}</div>
              <div style={{ fontFamily: "monospace", fontSize: 12, color: "#444", marginBottom: 4 }}>C – F – G7 – C</div>
              <div style={{ fontSize: 12, color: "#888", marginBottom: 10, lineHeight: 1.5 }}>
                {n("tonalDesc")}
              </div>
              <button
                onClick={() => playProg(pianoRef as React.RefObject<PianoPlayerRef>, TONAL_DEMO, 1600, 1.5)}
                style={{ fontSize: 12, padding: "5px 12px", border: "0.5px solid #BA7517", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#BA7517" }}
              >
                {n("tonaListenBtn")}
              </button>
            </div>
            <div style={{ border: `0.5px solid ${PRIMARY}`, borderRadius: 10, padding: "14px 16px", background: PRIMARY_BG }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: PRIMARY, marginBottom: 6 }}>{n("modalLabelTitle")}</div>
              <div style={{ fontFamily: "monospace", fontSize: 12, color: "#444", marginBottom: 4 }}>Dm – G – Dm – G</div>
              <div style={{ fontSize: 12, color: "#888", marginBottom: 10, lineHeight: 1.5 }}>
                {n("modalDesc")}
              </div>
              <button
                onClick={() => playProg(pianoRef as React.RefObject<PianoPlayerRef>, DORIAN_DEMO, 1400, 1.5)}
                style={{ fontSize: 12, padding: "5px 12px", border: `0.5px solid ${PRIMARY}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: PRIMARY }}
              >
                {n("modalListenBtn")}
              </button>
            </div>
          </div>

          {/* Tableau récap accords caractéristiques */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 10px", color: "#111" }}>
            {n("charChordTableTitle")}
          </h3>
          <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {[n("charChordColMode"), n("charChordColNote"), n("charChordColChord"), n("charChordColProg")].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 10px", fontWeight: 500, color: "#666", whiteSpace: "nowrap" as const }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { mode: "Dorien",     color: "#185FA5", note: n("charChordRow0Note"), chord: n("charChordRow0Chord"), prog: n("charChordRow0Prog") },
                  { mode: "Phrygien",   color: "#993C1D", note: n("charChordRow1Note"), chord: n("charChordRow1Chord"), prog: n("charChordRow1Prog") },
                  { mode: "Lydien",     color: "#6B3FA0", note: n("charChordRow2Note"), chord: n("charChordRow2Chord"), prog: n("charChordRow2Prog") },
                  { mode: "Mixolydien", color: "#BA7517", note: n("charChordRow3Note"), chord: n("charChordRow3Chord"), prog: n("charChordRow3Prog") },
                  { mode: "Éolien",     color: "#2D4A8A", note: n("charChordRow4Note"), chord: n("charChordRow4Chord"), prog: n("charChordRow4Prog") },
                ].map((row, i) => (
                  <tr key={row.mode} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "7px 10px", fontWeight: 500, color: row.color }}>{row.mode}</td>
                    <td style={{ padding: "7px 10px", color: "#555", fontFamily: "monospace", fontSize: 11 }}>{row.note}</td>
                    <td style={{ padding: "7px 10px", color: row.color, fontFamily: "monospace", fontWeight: 500 }}>{row.chord}</td>
                    <td style={{ padding: "7px 10px", color: "#333", fontFamily: "monospace" }}>{row.prog}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.warnBox} dangerouslySetInnerHTML={{ __html: n("warnBoxCommonTrap") }} />
        </div>
      )}

      {/* ══ SECTION 2 : PAR MODE ══ */}
      {activeSection === "modes" && (
        <div>
          <h2 style={S.h2}>{n("modesTitle")}</h2>
          <p style={S.p}>{n("modesP1")}</p>

          {MODAL_MODES.map(mode => (
            <div
              key={mode.id}
              style={{
                border: `0.5px solid ${activeMode === mode.id ? mode.color : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 10,
                overflow: "hidden",
                cursor: "pointer",
                background: activeMode === mode.id ? mode.bg : "#fff",
                transition: "all .15s",
              }}
              onClick={() => setActiveMode(activeMode === mode.id ? null : mode.id)}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px" }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{mode.emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>{mode.name}</span>
                    <span style={{ fontSize: 11, color: "#888" }}>— {mode.rootKey}</span>
                  </div>
                  <div style={{ fontFamily: "monospace", fontSize: 12, color: mode.color, marginTop: 2 }}>
                    {mode.progression} · {mode.progExample}
                  </div>
                </div>
                <div style={{ fontSize: 11, color: "#bbb" }}>{activeMode === mode.id ? "▲" : "▼"}</div>
              </div>

              {activeMode === mode.id && (
                <div style={{ padding: "0 16px 16px", borderTop: `0.5px solid ${mode.color}20` }}>
                  <p style={{ ...S.p, marginTop: 12 }}>{mode.description}</p>

                  <div style={{ marginBottom: 12 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: mode.color, marginBottom: 4, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>{tr("Accord caractéristique")}</div>
                    <div style={{ fontFamily: "monospace", fontSize: 13, color: "#333", background: "#f8f8f8", padding: "5px 10px", borderRadius: 6, display: "inline-block" }}>
                      {mode.characteristicChord}
                    </div>
                  </div>

                  <div style={{ marginBottom: 14, padding: "8px 12px", background: "#FFF3F3", border: "0.5px solid #E8AAAA", borderRadius: 8 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: "#A32D2D", marginBottom: 4, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>
                      {n("avoidLabel")} {mode.avoidChord}
                    </div>
                    <div style={{ fontSize: 12, color: "#501313", lineHeight: 1.6 }}>{mode.avoidReason}</div>
                  </div>

                  <button
                    onClick={e => {
                      e.stopPropagation();
                      playProg(pianoRef as React.RefObject<PianoPlayerRef>, mode.chords, 1400, 1.5);
                    }}
                    style={{ fontSize: 12, padding: "6px 16px", border: `0.5px solid ${mode.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: mode.color }}
                  >
                    {n("listenProgBtnPrefix")} {mode.progExample}
                  </button>
                </div>
              )}
            </div>
          ))}

          <div style={S.warnBox} dangerouslySetInnerHTML={{ __html: n("warnBoxLocrien") }} />
        </div>
      )}

      {/* ══ SECTION 3 : QUIZ ══ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.h2}>{tr("Entraînement")}</h2>

          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 8 ? "🎵" : quizScore >= 6 ? "👍" : "💪"}
              </div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>
                {n("quizScoreLabel")} {quizScore} / {QUIZ_COUNT}
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
                {n("questionLabel")} {quizIdx + 1} / {QUIZ_COUNT}
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
                  {quizIdx + 1 < QUIZ_COUNT ? n("quizNextBtn") : n("quizFinalBtn")}
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
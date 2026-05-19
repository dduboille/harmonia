"use client";

/**
 * Cours19.tsx
 * Harmonia · Niveau 2 · Cours 19 — Introduction à l'orchestration
 * Convention : affichage anglais, dotKeys PianoPlayer français
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { useTerm } from "@/hooks/useTerm";
import { cours19Content } from "@/data/cours19Content";
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

// Registre grave : basse / tuba / contrebasse (Do2–Mi2–Sol2)
const REG_GRAVE: string[][] = [["Do:2","Mi:2","Sol:2"]];   // C2=36, E2=40, G2=43 ✓

// Registre ténor : violoncelle / trombone / basson (Do3–Mi3–Sol3)
const REG_TENOR: string[][] = [["Do:3","Mi:3","Sol:3"]];   // C3=48, E3=52, G3=55 ✓

// Registre mezzo : alto / clarinette / cor (Do4–Mi4–Sol4)
const REG_MEZZO: string[][] = [["Do:4","Mi:4","Sol:4"]];   // C4=60, E4=64, G4=67 ✓

// Registre aigu : violon / flûte / hautbois (Do5–Mi5–Sol5)
const REG_AIGU: string[][] = [["Do:5","Mi:5","Sol:5"]];    // C5=72, E5=76, G5=79 ✓

// Accord de cordes en position ouverte (orchestral)
const ACCORD_OUVERT: string[][] = [["Do:2","Sol:3","Mi:4","Do:5"]]; // 36,55,64,72 ✓

// Accord en position serrée (pianistique)
const ACCORD_SERRE: string[][] = [["Do:4","Mi:4","Sol:4","Do:5"]];  // 60,64,67,72 ✓

// SATB voicing : B=Do3, T=Sol3, A=Mi4, S=Do5
const SATB_DEMO: string[][] = [["Do:3","Sol:3","Mi:4","Do:5"]];     // 48,55,64,72 ✓

// Tutti orchestral (spectre complet)
const TUTTI_ORCH: string[][] = [["Do:2","Sol:2","Do:3","Sol:3","Mi:4","Do:5"]]; // 36,43,48,55,64,72 ✓

// Progression de Boléro (mélodie solo puis harmonisée)
const BOLERO_SOLO: string[][] = [
  ["Do:4"],["Ré:4"],["Mi:4"],["Sol:4"],["Mi:4"],["Ré:4"],["Do:4"],
];
const BOLERO_HARM: string[][] = [
  ["Do:3","Mi:3","Sol:3","Do:4"],   // I  (48,52,55,60) ✓
  ["Sol:2","Si:3","Ré:4","Sol:4"],  // V7 (43,59,62,67) ✓
  ["Do:3","Mi:3","Sol:3","Mi:4"],   // I  (48,52,55,64) ✓
  ["Fa:3","La:3","Do:4","Fa:4"],    // IV (53,57,60,65) ✓
  ["Do:3","Mi:3","Sol:3","Do:4"],   // I  (48,52,55,60) ✓
];

// ── Static data ───────────────────────────────────────────────────────────────

interface Instrument {
  name: string;
  range: string;
  timbre: string;
  role: string;
}

interface Family {
  id: string;
  name: string;
  emoji: string;
  color: string;
  bg: string;
  desc: string;
  instruments: Instrument[];
  demo: string[][];
  demoLabel: string;
  demoDur?: number;
}

interface Principle {
  id: string;
  name: string;
  color: string;
  bg: string;
  desc: string;
  rule: string;
  example: string;
  demo?: string[][];
  demoLabel?: string;
  demo2?: string[][];
  demo2Label?: string;
  demoGapMs?: number;
  demoDur?: number;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const QUIZ_COUNT = 10;
const SECTIONS_IDS = ["instruments", "ecriture", "quiz"] as const;
type SectionId = typeof SECTIONS_IDS[number];

const PRIMARY    = "#2A6050";
const PRIMARY_BG = "#E5F3EF";

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
  infoBox:  { borderLeft: `2px solid ${PRIMARY}`, padding: "8px 14px", background: PRIMARY_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#0D2E27", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
  tip:      { borderLeft: "2px solid #185FA5", padding: "8px 14px", background: "#E6F1FB", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#0D3C6E", lineHeight: 1.6 } as React.CSSProperties,
};

export default function Cours19() {
  const [activeSection, setActiveSection] = useState<SectionId>("instruments");
  const i18n = useCoursI18n("cours19");
  const tc = i18n.tc;
  const n = (key: string) => tc(`narrative.${key}` as any);
  const tr = useTerm();
  const { questions: ALL_QUESTIONS } = useCoursContent(cours19Content);
  const [activeFamily,    setActiveFamily]    = useState<string | null>(null);
  const [activePrinciple, setActivePrinciple] = useState<string | null>(null);

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
    if (id === "instruments") return n("navInstruments");
    if (id === "ecriture")   return n("navEcriture");
    return n("navEntrainement");
  };

  // Build localised FAMILIES array
  const FAMILIES: Family[] = [
    {
      id: "cordes",
      name: n("famCordesName"),
      emoji: "🎻",
      color: "#185FA5",
      bg: "#E6F1FB",
      desc: n("famCordesDesc"),
      instruments: [
        { name: n("famCordesI0Name"), range: n("famCordesI0Range"), timbre: n("famCordesI0Timbre"), role: n("famCordesI0Role") },
        { name: n("famCordesI1Name"), range: n("famCordesI1Range"), timbre: n("famCordesI1Timbre"), role: n("famCordesI1Role") },
        { name: n("famCordesI2Name"), range: n("famCordesI2Range"), timbre: n("famCordesI2Timbre"), role: n("famCordesI2Role") },
        { name: n("famCordesI3Name"), range: n("famCordesI3Range"), timbre: n("famCordesI3Timbre"), role: n("famCordesI3Role") },
      ],
      demo: ACCORD_OUVERT,
      demoLabel: n("famCordesDemoLabel"),
      demoDur: 2.0,
    },
    {
      id: "bois",
      name: n("famBoisName"),
      emoji: "🪈",
      color: "#0F6E56",
      bg: "#E1F5EE",
      desc: n("famBoisDesc"),
      instruments: [
        { name: n("famBoisI0Name"), range: n("famBoisI0Range"), timbre: n("famBoisI0Timbre"), role: n("famBoisI0Role") },
        { name: n("famBoisI1Name"), range: n("famBoisI1Range"), timbre: n("famBoisI1Timbre"), role: n("famBoisI1Role") },
        { name: n("famBoisI2Name"), range: n("famBoisI2Range"), timbre: n("famBoisI2Timbre"), role: n("famBoisI2Role") },
        { name: n("famBoisI3Name"), range: n("famBoisI3Range"), timbre: n("famBoisI3Timbre"), role: n("famBoisI3Role") },
      ],
      demo: REG_MEZZO,
      demoLabel: n("famBoisDemoLabel"),
      demoDur: 2.0,
    },
    {
      id: "cuivres",
      name: n("famCuivresName"),
      emoji: "🎺",
      color: "#7B1F1F",
      bg: "#FCEAEA",
      desc: n("famCuivresDesc"),
      instruments: [
        { name: n("famCuivresI0Name"), range: n("famCuivresI0Range"), timbre: n("famCuivresI0Timbre"), role: n("famCuivresI0Role") },
        { name: n("famCuivresI1Name"), range: n("famCuivresI1Range"), timbre: n("famCuivresI1Timbre"), role: n("famCuivresI1Role") },
        { name: n("famCuivresI2Name"), range: n("famCuivresI2Range"), timbre: n("famCuivresI2Timbre"), role: n("famCuivresI2Role") },
        { name: n("famCuivresI3Name"), range: n("famCuivresI3Range"), timbre: n("famCuivresI3Timbre"), role: n("famCuivresI3Role") },
      ],
      demo: REG_GRAVE,
      demoLabel: n("famCuivresDemoLabel"),
      demoDur: 2.5,
    },
    {
      id: "percussions",
      name: n("famPercussionsName"),
      emoji: "🥁",
      color: "#6B3FA0",
      bg: "#F0EAFA",
      desc: n("famPercussionsDesc"),
      instruments: [
        { name: n("famPercussionsI0Name"), range: n("famPercussionsI0Range"), timbre: n("famPercussionsI0Timbre"), role: n("famPercussionsI0Role") },
        { name: n("famPercussionsI1Name"), range: n("famPercussionsI1Range"), timbre: n("famPercussionsI1Timbre"), role: n("famPercussionsI1Role") },
        { name: n("famPercussionsI2Name"), range: n("famPercussionsI2Range"), timbre: n("famPercussionsI2Timbre"), role: n("famPercussionsI2Role") },
        { name: n("famPercussionsI3Name"), range: n("famPercussionsI3Range"), timbre: n("famPercussionsI3Timbre"), role: n("famPercussionsI3Role") },
      ],
      demo: TUTTI_ORCH,
      demoLabel: n("famPercussionsDemoLabel"),
      demoDur: 2.5,
    },
    {
      id: "piano",
      name: n("famPianoName"),
      emoji: "🎹",
      color: "#BA7517",
      bg: "#FAEEDA",
      desc: n("famPianoDesc"),
      instruments: [
        { name: n("famPianoI0Name"), range: n("famPianoI0Range"), timbre: n("famPianoI0Timbre"), role: n("famPianoI0Role") },
        { name: n("famPianoI1Name"), range: n("famPianoI1Range"), timbre: n("famPianoI1Timbre"), role: n("famPianoI1Role") },
      ],
      demo: ACCORD_SERRE,
      demoLabel: n("famPianoDemoLabel"),
      demoDur: 2.0,
    },
  ];

  // Build localised PRINCIPLES array
  const PRINCIPLES: Principle[] = [
    {
      id: "doublures",
      name: n("prDoubluresName"),
      color: "#185FA5",
      bg: "#E6F1FB",
      desc: n("prDoubluresDesc"),
      rule: n("prDoubluresRule"),
      example: n("prDoubluresExample"),
      demo: ACCORD_OUVERT,
      demoLabel: n("prDoubluresDemoLabel"),
      demo2: ACCORD_SERRE,
      demo2Label: n("prDoubluresDemo2Label"),
      demoGapMs: 1400,
      demoDur: 1.8,
    },
    {
      id: "equilibre",
      name: n("prEquilibreName"),
      color: "#0F6E56",
      bg: "#E1F5EE",
      desc: n("prEquilibreDesc"),
      rule: n("prEquilibreRule"),
      example: n("prEquilibreExample"),
      demo: BOLERO_HARM,
      demoLabel: n("prEquilibreDemoLabel"),
      demoGapMs: 1300,
      demoDur: 1.2,
    },
    {
      id: "registres",
      name: n("prRegistresName"),
      color: "#7B1F1F",
      bg: "#FCEAEA",
      desc: n("prRegistresDesc"),
      rule: n("prRegistresRule"),
      example: n("prRegistresExample"),
      demo: REG_GRAVE,
      demoLabel: n("prRegistresDemoLabel"),
      demo2: REG_AIGU,
      demo2Label: n("prRegistresDemo2Label"),
      demoGapMs: 1200,
      demoDur: 2.0,
    },
    {
      id: "satb",
      name: n("prSatbName"),
      color: "#6B3FA0",
      bg: "#F0EAFA",
      desc: n("prSatbDesc"),
      rule: n("prSatbRule"),
      example: n("prSatbExample"),
      demo: SATB_DEMO,
      demoLabel: n("prSatbDemoLabel"),
      demoGapMs: 1400,
      demoDur: 2.0,
    },
    {
      id: "piano",
      name: n("prPianoName"),
      color: "#BA7517",
      bg: "#FAEEDA",
      desc: n("prPianoDesc"),
      rule: n("prPianoRule"),
      example: n("prPianoExample"),
    },
  ];

  // Build localised register demo rows
  const REGISTER_DEMOS = [
    { label: n("instrRegGraveLabel"), color: "#6B3FA0", demo: REG_GRAVE, desc: n("instrRegGraveDesc") },
    { label: n("instrRegTenorLabel"), color: "#7B1F1F", demo: REG_TENOR, desc: n("instrRegTenorDesc") },
    { label: n("instrRegMezzoLabel"), color: "#0F6E56", demo: REG_MEZZO, desc: n("instrRegMezzoDesc") },
    { label: n("instrRegAiguLabel"),  color: "#185FA5", demo: REG_AIGU,  desc: n("instrRegAiguDesc")  },
  ];

  // Build localised range table rows
  const RANGE_ROWS = [
    { voix: n("instrRegistresSoprano"), reg: "Sol3 – Do7", color: "#185FA5", instr: "Violon I, Flûte, Hautbois, Trompette" },
    { voix: n("instrRegistresMezzo"),   reg: "Do3 – Mi6",  color: "#0F6E56", instr: "Violon II, Alto, Clarinette, Cor" },
    { voix: n("instrRegistresTenor"),   reg: "Mi2 – Fa4",  color: "#7B1F1F", instr: "Violoncelle, Trombone, Basson" },
    { voix: n("instrRegistresBasse"),   reg: "Sib0 – Fa3", color: "#6B3FA0", instr: "Contrebasse, Tuba, Contrebasson" },
  ];

  // Build localised examples
  const EXEMPLES = [
    { name: n("exRavelName"),     color: PRIMARY,    bg: PRIMARY_BG,  desc: n("exRavelDesc") },
    { name: n("exDebussyName"),   color: "#185FA5",  bg: "#E6F1FB",   desc: n("exDebussyDesc") },
    { name: n("exBeethovenName"), color: "#7B1F1F",  bg: "#FCEAEA",   desc: n("exBeethovenDesc") },
  ];

  return (
    <div style={S.wrap}>
      {/* Piano caché */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={5} startOctave={2} showLabels={false} />
      </div>

      {/* Header */}
      <div style={S.header}>
        <span style={S.badge}>Niveau 2 · Cours 19</span>
        <h1 style={S.h1}>{tr("Introduction à l'orchestration")}</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Maurice Ravel"
        period="1875–1937"
        emoji="🎼"
        concept={n("maitreConceptLabel")}
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

      {/* ══ SECTION 1 : LES INSTRUMENTS ══ */}
      {activeSection === "instruments" && (
        <div>
          <h2 style={S.h2}>{n("instrH2")}</h2>
          <p style={S.p}>{n("instrIntro")}</p>

          {FAMILIES.map(fam => (
            <div
              key={fam.id}
              style={{
                border: `0.5px solid ${activeFamily === fam.id ? fam.color : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 8,
                overflow: "hidden",
                cursor: "pointer",
                background: activeFamily === fam.id ? fam.bg : "#fff",
                transition: "all .15s",
              }}
              onClick={() => setActiveFamily(activeFamily === fam.id ? null : fam.id)}
            >
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px" }}>
                <span style={{ fontSize: 20 }}>{fam.emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#111" }}>{fam.name}</div>
                  <div style={{ fontSize: 11, color: "#999", marginTop: 1 }}>
                    {fam.instruments.map(i => i.name).join(" · ")}
                  </div>
                </div>
                <div style={{ fontSize: 11, color: "#bbb" }}>{activeFamily === fam.id ? "▲" : "▼"}</div>
              </div>

              {activeFamily === fam.id && (
                <div style={{ padding: "0 16px 16px", borderTop: `0.5px solid ${fam.color}20` }}>
                  <p style={{ ...S.p, marginTop: 12 }}>{fam.desc}</p>

                  {/* Instruments table */}
                  <div style={{ overflowX: "auto", marginBottom: 12 }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                      <thead>
                        <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                          {[n("instrTableInstrument"), n("instrTableTessiture"), n("instrTableTimbre"), n("instrTableRole")].map(h => (
                            <th key={h} style={{ textAlign: "left", padding: "6px 10px", fontWeight: 500, color: "#666" }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {fam.instruments.map((inst, idx) => (
                          <tr key={inst.name} style={{ borderBottom: "0.5px solid #f0f0f0", background: idx % 2 === 0 ? "#fff" : fam.bg }}>
                            <td style={{ padding: "7px 10px", fontWeight: 500, color: fam.color, whiteSpace: "nowrap" as const }}>{inst.name}</td>
                            <td style={{ padding: "7px 10px", fontFamily: "monospace", fontSize: 11, color: "#444" }}>{inst.range}</td>
                            <td style={{ padding: "7px 10px", color: "#555" }}>{inst.timbre}</td>
                            <td style={{ padding: "7px 10px", color: "#666" }}>{inst.role}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <button
                    onClick={e => {
                      e.stopPropagation();
                      playChord(pianoRef as React.RefObject<PianoPlayerRef>, fam.demo[0], fam.demoDur ?? 1.8);
                    }}
                    style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${fam.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: fam.color }}
                  >
                    {fam.demoLabel}
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* Tableau récapitulatif des registres */}
          <h3 style={S.h3}>{n("instrRegistresH3")}</h3>
          <div style={{ overflowX: "auto", marginBottom: "1rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {[n("instrRegistresVoix"), n("instrRegistresRegistre"), n("instrRegistresInstruments")].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 12px", fontWeight: 500, color: "#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {RANGE_ROWS.map(({ voix, reg, color, instr }, idx) => (
                  <tr key={voix} style={{ borderBottom: "0.5px solid #f0f0f0", background: idx % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "7px 12px", fontWeight: 500, color }}>{voix}</td>
                    <td style={{ padding: "7px 12px", fontFamily: "monospace", color: "#444" }}>{reg}</td>
                    <td style={{ padding: "7px 12px", color: "#555" }}>{instr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Démos registres */}
          <h3 style={S.h3}>{n("instrEcouterH3")}</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
            {REGISTER_DEMOS.map(({ label, color, demo, desc }) => (
              <div key={label} style={{ border: `0.5px solid ${color}30`, borderRadius: 8, padding: "10px 12px", background: "#fafafa" }}>
                <div style={{ fontSize: 12, color: "#666", marginBottom: 6 }}>{desc}</div>
                <button
                  onClick={() => playChord(pianoRef as React.RefObject<PianoPlayerRef>, demo[0], 2.0)}
                  style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color }}
                >
                  {label}
                </button>
              </div>
            ))}
          </div>

          <div style={{ ...S.infoBox, marginTop: "1.25rem" }}
            dangerouslySetInnerHTML={{ __html: n("instrInfoBox") }}
          />
        </div>
      )}

      {/* ══ SECTION 2 : ÉCRITURE ORCHESTRALE ══ */}
      {activeSection === "ecriture" && (
        <div>
          <h2 style={S.h2}>{n("ecritureH2")}</h2>
          <p style={S.p}>{n("ecritureIntro")}</p>

          {PRINCIPLES.map(pr => (
            <div
              key={pr.id}
              style={{
                border: `0.5px solid ${activePrinciple === pr.id ? pr.color : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 8,
                overflow: "hidden",
                cursor: "pointer",
                background: activePrinciple === pr.id ? pr.bg : "#fff",
                transition: "all .15s",
              }}
              onClick={() => setActivePrinciple(activePrinciple === pr.id ? null : pr.id)}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px" }}>
                <div style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: pr.color, flexShrink: 0,
                }} />
                <div style={{ flex: 1, fontSize: 13, fontWeight: 500, color: "#111" }}>{pr.name}</div>
                <div style={{ fontSize: 11, color: "#bbb" }}>{activePrinciple === pr.id ? "▲" : "▼"}</div>
              </div>

              {activePrinciple === pr.id && (
                <div style={{ padding: "0 16px 16px", borderTop: `0.5px solid ${pr.color}20` }}>
                  <p style={{ ...S.p, marginTop: 12 }}>{pr.desc}</p>

                  <div style={{ borderLeft: `2px solid ${pr.color}`, paddingLeft: 10, marginBottom: 12, fontSize: 13, color: "#444", lineHeight: 1.7 }}>
                    <strong>{n("ecritureRegle")}</strong> {pr.rule}
                  </div>

                  <div style={{ fontSize: 12, color: "#888", lineHeight: 1.6, marginBottom: pr.demo ? 12 : 0 }}>
                    <em>{n("ecritureExemple")}</em> {pr.example}
                  </div>

                  {(pr.demo || pr.demo2) && (
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const, marginTop: 10 }}>
                      {pr.demo && (
                        <button
                          onClick={e => {
                            e.stopPropagation();
                            if (pr.demo!.length === 1) {
                              playChord(pianoRef as React.RefObject<PianoPlayerRef>, pr.demo![0], pr.demoDur ?? 1.8);
                            } else {
                              playProg(pianoRef as React.RefObject<PianoPlayerRef>, pr.demo!, pr.demoGapMs ?? 1200, pr.demoDur ?? 1.1);
                            }
                          }}
                          style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${pr.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: pr.color }}
                        >
                          {pr.demoLabel ?? n("ecritureDefaultDemo")}
                        </button>
                      )}
                      {pr.demo2 && (
                        <button
                          onClick={e => {
                            e.stopPropagation();
                            if (pr.demo2!.length === 1) {
                              playChord(pianoRef as React.RefObject<PianoPlayerRef>, pr.demo2![0], pr.demoDur ?? 1.8);
                            } else {
                              playProg(pianoRef as React.RefObject<PianoPlayerRef>, pr.demo2!, pr.demoGapMs ?? 1200, pr.demoDur ?? 1.1);
                            }
                          }}
                          style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${pr.color}80`, borderRadius: 20, cursor: "pointer", background: pr.bg, color: pr.color }}
                        >
                          {pr.demo2Label ?? n("ecritureDefaultDemo2")}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Exemples célèbres */}
          <h3 style={S.h3}>{n("ecritureExemplesH3")}</h3>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 8, marginBottom: "1rem" }}>
            {EXEMPLES.map(({ name, color, bg, desc }) => (
              <div key={name} style={{ border: `0.5px solid ${color}30`, borderRadius: 10, padding: "12px 16px", background: bg }}>
                <div style={{ fontSize: 12, fontWeight: 500, color, marginBottom: 4 }}>{name}</div>
                <div style={{ fontSize: 12, color: "#555", lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>

          {/* Tutti demo */}
          <div style={{ textAlign: "center" as const, marginBottom: "1rem" }}>
            <button
              onClick={() => {
                playChord(pianoRef as React.RefObject<PianoPlayerRef>, TUTTI_ORCH[0], 2.5);
              }}
              style={{ fontSize: 12, padding: "6px 18px", border: `0.5px solid #333`, borderRadius: 20, cursor: "pointer", background: "transparent", color: "#333" }}
            >
              {n("ecritureTuttiBtn")}
            </button>
          </div>

          <div style={S.warnBox}
            dangerouslySetInnerHTML={{ __html: n("ecritureWarnBox") }}
          />
        </div>
      )}

      {/* ══ SECTION 3 : QUIZ ══ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.h2}>{n("quizH2")}</h2>
          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 8 ? "🎼" : quizScore >= 6 ? "👍" : "💪"}
              </div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>
                {n("quizScoreLabel").replace("{score}", String(quizScore)).replace("{total}", String(QUIZ_COUNT))}
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
                {n("quizCounter").replace("{idx}", String(quizIdx + 1)).replace("{total}", String(QUIZ_COUNT))}
                <span style={{ marginLeft: 12, color: "#bbb" }}>
                  {n("quizPool").replace("{count}", String(ALL_QUESTIONS.length))}
                </span>
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
                  {quizIdx + 1 < QUIZ_COUNT ? n("quizNext") : n("quizSeeScore")}
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
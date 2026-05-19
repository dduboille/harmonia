"use client";

/**
 * Cours18.tsx
 * Harmonia · Niveau 2 · Cours 18 — Le développement motivique
 * Convention : affichage anglais, dotKeys PianoPlayer français
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { useTerm } from "@/hooks/useTerm";
import { cours18Content } from "@/data/cours18Content";
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

// Beethoven 5th — motif original (Sol–Sol–Sol–Mib, descending minor 3rd)
const MOTIF_ORIG: string[][] = [["Sol:4"],["Sol:4"],["Sol:4"],["Mib:4"]];

// Renversement (inversion): ascending minor 3rd (Sol–Sol–Sol–Sib)
const MOTIF_INV: string[][] = [["Sol:4"],["Sol:4"],["Sol:4"],["Sib:4"]];

// Rétrograde: reversed motif (Mib–Sol–Sol–Sol)
const MOTIF_RETRO: string[][] = [["Mib:4"],["Sol:4"],["Sol:4"],["Sol:4"]];

// Arpège: C major broken chord ascending
const ARPEGE_DEMO: string[][] = [["Do:4"],["Mi:4"],["Sol:4"],["Do:5"]];

// Contrepoint: contrary motion — bass ascending, treble descending
const CONTREPOINT_DEMO: string[][] = [
  ["Do:3","Sol:4"],   // Do3=48, Sol4=67 ✓
  ["Ré:3","Fa:4"],    // Ré3=50, Fa4=65 ✓
  ["Mi:3","Mi:4"],    // Mi3=52, Mi4=64 ✓
  ["Sol:3","Do:4"],   // Sol3=55, Do4=60 ✓
];

// Harmonic I–V7–I (original)
const HARM_ORIG: string[][] = [
  ["Do:3","Mi:3","Sol:3"],          // I   — CMaj  (48,52,55) ✓
  ["Sol:3","Si:3","Ré:4","Fa:4"],   // V7  — G7    (55,59,62,65) ✓
  ["Do:3","Mi:3","Sol:3"],          // I   — CMaj
];

// Harmonic I–VI–I (diatonic substitution: V → VI)
const HARM_SUBST: string[][] = [
  ["Do:3","Mi:3","Sol:3"],   // I  — CMaj  (48,52,55) ✓
  ["La:3","Do:4","Mi:4"],    // VI — Am    (57,60,64) ✓
  ["Do:3","Mi:3","Sol:3"],   // I  — CMaj
];

interface Family {
  id: string;
  letter: string;
  name: string;
  color: string;
  bg: string;
  order: string;
  desc: string;
  subs: { name: string; detail: string }[];
  demo?: string[][];
  demoLabel?: string;
  demoGapMs?: number;
  demoDur?: number;
  demo2?: string[][];
  demo2Label?: string;
  demo2GapMs?: number;
  demo2Dur?: number;
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
const SECTIONS_IDS = ["motif", "techniques", "quiz"] as const;
type SectionId = typeof SECTIONS_IDS[number];

const PRIMARY    = "#6B3D00";
const PRIMARY_BG = "#FDF2E0";

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
  infoBox:  { borderLeft: `2px solid ${PRIMARY}`, padding: "8px 14px", background: PRIMARY_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#3D2000", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
  tip:      { borderLeft: "2px solid #0F6E56", padding: "8px 14px", background: "#E1F5EE", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#085041", lineHeight: 1.6 } as React.CSSProperties,
};

export default function Cours18() {
  const [activeSection, setActiveSection] = useState<SectionId>("motif");
  const i18n = useCoursI18n("cours18");
  const tc = i18n.tc;
  const n = (key: string) => tc(`narrative.${key}` as any);
  const tr = useTerm();
  const { questions: ALL_QUESTIONS } = useCoursContent(cours18Content);
  const [activeFamily, setActiveFamily] = useState<string | null>(null);

  const [quizQuestions] = useState(() => shuffle(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [quizIdx,      setQuizIdx]      = useState(0);
  const [quizScore,    setQuizScore]    = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizDone,     setQuizDone]     = useState(false);
  const [selectedOpt,  setSelectedOpt]  = useState<number | null>(null);

  const pianoRef = useRef<PianoPlayerRef>(null);

  // ── Translated data arrays ────────────────────────────────────────────────

  const ELEMENTS = [
    { n: "①", name: n("elem1Name"), desc: n("elem1Desc") },
    { n: "②", name: n("elem2Name"), desc: n("elem2Desc") },
    { n: "③", name: n("elem3Name"), desc: n("elem3Desc") },
    { n: "④", name: n("elem4Name"), desc: n("elem4Desc") },
    { n: "⑤", name: n("elem5Name"), desc: n("elem5Desc") },
  ];

  const EXEMPLES = [
    {
      name: "Beethoven — 5e Symphonie (1808)",
      color: "#6B3D00",
      bg: "#FDF2E0",
      motif: n("ex1Motif"),
      desc: n("ex1Desc"),
    },
    {
      name: "Wagner — Leitmotiv (opéras, 1850–1882)",
      color: "#185FA5",
      bg: "#E6F1FB",
      motif: n("ex2Motif"),
      desc: n("ex2Desc"),
    },
    {
      name: "John Williams — Star Wars (1977)",
      color: "#0F6E56",
      bg: "#E1F5EE",
      motif: n("ex3Motif"),
      desc: n("ex3Desc"),
    },
  ];

  const FAMILIES: Family[] = [
    {
      id: "harmonie",
      letter: "A",
      name: n("famAName"),
      color: "#185FA5",
      bg: "#E6F1FB",
      order: n("famAOrder"),
      desc: n("famADesc"),
      subs: [
        { name: n("famASub1Name"), detail: n("famASub1Detail") },
        { name: n("famASub2Name"), detail: n("famASub2Detail") },
        { name: n("famASub3Name"), detail: n("famASub3Detail") },
        { name: n("famASub4Name"), detail: n("famASub4Detail") },
      ],
      demo: HARM_ORIG,
      demoLabel: n("famADemoLabel"),
      demoGapMs: 1200,
      demoDur: 1.1,
      demo2: HARM_SUBST,
      demo2Label: n("famADemo2Label"),
      demo2GapMs: 1200,
      demo2Dur: 1.1,
    },
    {
      id: "dynamique",
      letter: "B",
      name: n("famBName"),
      color: "#0F6E56",
      bg: "#E1F5EE",
      order: n("famBOrder"),
      desc: n("famBDesc"),
      subs: [
        { name: n("famBSub1Name"), detail: n("famBSub1Detail") },
        { name: n("famBSub2Name"), detail: n("famBSub2Detail") },
        { name: n("famBSub3Name"), detail: n("famBSub3Detail") },
        { name: n("famBSub4Name"), detail: n("famBSub4Detail") },
      ],
    },
    {
      id: "melodique",
      letter: "C",
      name: n("famCName"),
      color: "#7B1F1F",
      bg: "#FCEAEA",
      order: n("famCOrder"),
      desc: n("famCDesc"),
      subs: [
        { name: n("famCSub1Name"), detail: n("famCSub1Detail") },
        { name: n("famCSub2Name"), detail: n("famCSub2Detail") },
        { name: n("famCSub3Name"), detail: n("famCSub3Detail") },
        { name: n("famCSub4Name"), detail: n("famCSub4Detail") },
      ],
      demo: MOTIF_ORIG,
      demoLabel: n("famCDemoLabel"),
      demoGapMs: 500,
      demoDur: 0.4,
      demo2: MOTIF_INV,
      demo2Label: n("famCDemo2Label"),
      demo2GapMs: 500,
      demo2Dur: 0.4,
    },
    {
      id: "rythmique",
      letter: "D",
      name: n("famDName"),
      color: "#6B3FA0",
      bg: "#F0EAFA",
      order: n("famDOrder"),
      desc: n("famDDesc"),
      subs: [
        { name: n("famDSub1Name"), detail: n("famDSub1Detail") },
        { name: n("famDSub2Name"), detail: n("famDSub2Detail") },
        { name: n("famDSub3Name"), detail: n("famDSub3Detail") },
        { name: n("famDSub4Name"), detail: n("famDSub4Detail") },
      ],
      demo: MOTIF_ORIG,
      demoLabel: n("famDDemoLabel"),
      demoGapMs: 500,
      demoDur: 0.4,
      demo2: MOTIF_RETRO,
      demo2Label: n("famDDemo2Label"),
      demo2GapMs: 500,
      demo2Dur: 0.4,
    },
  ];

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
    if (id === "motif")      return n("navMotif");
    if (id === "techniques") return n("navTechniques");
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
        <span style={S.badge}>{n("badgeLevel")}</span>
        <h1 style={S.h1}>{tr("Le développement motivique")}</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Ludwig van Beethoven"
        period={n("maitreCardPeriod")}
        emoji="🎼"
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

      {/* ══ SECTION 1 : LE MOTIF ══ */}
      {activeSection === "motif" && (
        <div>
          <h2 style={S.h2}>{n("motifH2")}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: n("motifP1") }} />

          {/* Beethoven demo */}
          <div style={{ background: "#f8f8f8", border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "14px 16px", marginBottom: "1.25rem" }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: "#111", marginBottom: 4 }}>
              {n("motifDemoTitle")}
            </div>
            <div style={{ fontFamily: "monospace", fontSize: 14, color: PRIMARY, marginBottom: 6, letterSpacing: "0.04em" }}>
              Sol – Sol – Sol – Mib  (ta-ta-ta-TAA)
            </div>
            <div style={{ fontSize: 12, color: "#666", lineHeight: 1.6, marginBottom: 10 }}>
              {n("motifDemoDesc")}
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const }}>
              <button
                onClick={() => playProg(pianoRef as React.RefObject<PianoPlayerRef>, MOTIF_ORIG, 450, 0.4)}
                style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${PRIMARY}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: PRIMARY }}
              >
                {n("motifBtnOriginal")}
              </button>
              <button
                onClick={() => playProg(pianoRef as React.RefObject<PianoPlayerRef>, MOTIF_INV, 450, 0.4)}
                style={{ fontSize: 12, padding: "5px 14px", border: "0.5px solid #185FA5", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#185FA5" }}
              >
                {n("motifBtnRenversement")}
              </button>
              <button
                onClick={() => playProg(pianoRef as React.RefObject<PianoPlayerRef>, MOTIF_RETRO, 450, 0.4)}
                style={{ fontSize: 12, padding: "5px 14px", border: "0.5px solid #7B1F1F", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#7B1F1F" }}
              >
                {n("motifBtnRetrograde")}
              </button>
            </div>
          </div>

          {/* 5 éléments */}
          <h3 style={S.h3}>{n("motifH3Elements")}</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 8, marginBottom: "1.25rem" }}>
            {ELEMENTS.map(({ n: num, name, desc }) => (
              <div key={num} style={{ border: `0.5px solid ${PRIMARY}25`, borderRadius: 8, padding: "12px 14px", background: PRIMARY_BG }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: PRIMARY, marginBottom: 4, lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: 13, fontWeight: 500, color: "#111", marginBottom: 3 }}>{name}</div>
                <div style={{ fontSize: 12, color: "#666", lineHeight: 1.5 }}>{desc}</div>
              </div>
            ))}
          </div>

          {/* Paradoxe de la répétition */}
          <div style={S.warnBox} dangerouslySetInnerHTML={{ __html: n("motifWarnBox") }} />

          {/* Motif comme personnage */}
          <h3 style={S.h3}>{n("motifH3Rhetorique")}</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginBottom: "1.25rem" }}>
            {[
              { step: "①", name: n("step1Name"), desc: n("step1Desc") },
              { step: "②", name: n("step2Name"), desc: n("step2Desc") },
              { step: "③", name: n("step3Name"), desc: n("step3Desc") },
            ].map(({ step, name, desc }) => (
              <div key={step} style={{ border: "0.5px solid #e5e5e5", borderRadius: 8, padding: "12px 14px", background: "#fff", textAlign: "center" as const }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: PRIMARY, marginBottom: 4 }}>{step}</div>
                <div style={{ fontSize: 13, fontWeight: 500, color: "#111", marginBottom: 4 }}>{name}</div>
                <div style={{ fontSize: 12, color: "#666", lineHeight: 1.5 }}>{desc}</div>
              </div>
            ))}
          </div>

          {/* Exemples célèbres */}
          <h3 style={S.h3}>{n("motifH3Exemples")}</h3>
          {EXEMPLES.map(({ name, color, bg, motif, desc }) => (
            <div key={name} style={{ border: `0.5px solid ${color}30`, borderRadius: 10, padding: "12px 16px", background: bg, marginBottom: 8 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color, marginBottom: 3 }}>{name}</div>
              <div style={{ fontFamily: "monospace", fontSize: 11, color, marginBottom: 6 }}>{motif}</div>
              <div style={{ fontSize: 12, color: "#555", lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}

          <div style={S.infoBox} dangerouslySetInnerHTML={{ __html: n("motifInfoBox") }} />
        </div>
      )}

      {/* ══ SECTION 2 : TECHNIQUES ══ */}
      {activeSection === "techniques" && (
        <div>
          <h2 style={S.h2}>{n("techH2")}</h2>
          <p style={S.p}>{n("techP1")}</p>

          {/* Ordre d'application */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: "1.5rem", flexWrap: "wrap" as const }}>
            {[
              { letter: "A", label: n("techLabelHarmonie"), color: "#185FA5" },
              { letter: "B", label: n("techLabelDynamique"), color: "#0F6E56" },
              { letter: "C", label: n("techLabelMelodie"), color: "#7B1F1F" },
              { letter: "D", label: n("techLabelRythme"), color: "#6B3FA0" },
            ].map(({ letter, label, color }, idx, arr) => (
              <React.Fragment key={letter}>
                <div style={{ textAlign: "center" as const }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, margin: "0 auto 2px" }}>
                    {letter}
                  </div>
                  <div style={{ fontSize: 10, color, fontWeight: 500 }}>{label}</div>
                </div>
                {idx < arr.length - 1 && (
                  <div style={{ fontSize: 12, color: "#bbb", marginBottom: 14 }}>→</div>
                )}
              </React.Fragment>
            ))}
            <div style={{ fontSize: 11, color: "#999", marginLeft: 8, marginBottom: 14 }}>
              {n("techOrderLabel")}
            </div>
          </div>

          {/* 4 familles expandables */}
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
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px" }}>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%",
                  background: fam.color, color: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 12, fontWeight: 700, flexShrink: 0,
                }}>
                  {fam.letter}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#111", marginBottom: 2 }}>{fam.name}</div>
                  <div style={{ fontSize: 11, color: "#999" }}>{fam.order}</div>
                </div>
                <div style={{ fontSize: 11, color: "#bbb" }}>{activeFamily === fam.id ? "▲" : "▼"}</div>
              </div>

              {activeFamily === fam.id && (
                <div style={{ padding: "0 16px 16px", borderTop: `0.5px solid ${fam.color}20` }}>
                  <p style={{ ...S.p, marginTop: 12 }}>{fam.desc}</p>

                  {/* Sous-techniques */}
                  <div style={{ display: "flex", flexDirection: "column" as const, gap: 6, marginBottom: fam.demo ? 12 : 0 }}>
                    {fam.subs.map(sub => (
                      <div key={sub.name} style={{ borderLeft: `2px solid ${fam.color}`, paddingLeft: 10, paddingTop: 2, paddingBottom: 2 }}>
                        <div style={{ fontSize: 12, fontWeight: 500, color: "#333", marginBottom: 1 }}>{sub.name}</div>
                        <div style={{ fontSize: 12, color: "#666", lineHeight: 1.5 }}>{sub.detail}</div>
                      </div>
                    ))}
                  </div>

                  {/* Boutons audio */}
                  {(fam.demo || fam.demo2) && (
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const, marginTop: 12 }}>
                      {fam.demo && (
                        <button
                          onClick={e => {
                            e.stopPropagation();
                            playProg(pianoRef as React.RefObject<PianoPlayerRef>, fam.demo!, fam.demoGapMs ?? 1100, fam.demoDur ?? 1.0);
                          }}
                          style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${fam.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: fam.color }}
                        >
                          {fam.demoLabel ?? "▶ Écouter"}
                        </button>
                      )}
                      {fam.demo2 && (
                        <button
                          onClick={e => {
                            e.stopPropagation();
                            playProg(pianoRef as React.RefObject<PianoPlayerRef>, fam.demo2!, fam.demo2GapMs ?? 1100, fam.demo2Dur ?? 1.0);
                          }}
                          style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${fam.color}80`, borderRadius: 20, cursor: "pointer", background: fam.bg, color: fam.color }}
                        >
                          {fam.demo2Label ?? "▶ Écouter (variante)"}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Démos supplémentaires */}
          <h3 style={S.h3}>{n("techH3Demos")}</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <div style={{ border: "0.5px solid #185FA5", borderRadius: 10, padding: "14px 16px", background: "#E6F1FB" }}>
              <div style={{ fontSize: 12, fontWeight: 500, color: "#185FA5", marginBottom: 4 }}>{n("techArpegeTitle")}</div>
              <div style={{ fontFamily: "monospace", fontSize: 11, color: "#0D3C6E", marginBottom: 8 }}>
                {n("techArpegeFormula")}
              </div>
              <div style={{ fontSize: 12, color: "#555", lineHeight: 1.5, marginBottom: 10 }}>
                {n("techArpegeDesc")}
              </div>
              <button
                onClick={() => playProg(pianoRef as React.RefObject<PianoPlayerRef>, ARPEGE_DEMO, 350, 0.3)}
                style={{ fontSize: 11, padding: "4px 12px", border: "0.5px solid #185FA5", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#185FA5" }}
              >
                {n("techArpegeBtn")}
              </button>
            </div>
            <div style={{ border: "0.5px solid #0F6E56", borderRadius: 10, padding: "14px 16px", background: "#E1F5EE" }}>
              <div style={{ fontSize: 12, fontWeight: 500, color: "#0F6E56", marginBottom: 4 }}>{n("techContrepointTitle")}</div>
              <div style={{ fontFamily: "monospace", fontSize: 11, color: "#085041", marginBottom: 8 }}>
                {n("techContrepointFormula")}
              </div>
              <div style={{ fontSize: 12, color: "#555", lineHeight: 1.5, marginBottom: 10 }}>
                {n("techContrepointDesc")}
              </div>
              <button
                onClick={() => playProg(pianoRef as React.RefObject<PianoPlayerRef>, CONTREPOINT_DEMO, 700, 0.6)}
                style={{ fontSize: 11, padding: "4px 12px", border: "0.5px solid #0F6E56", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#0F6E56" }}
              >
                {n("techContrepointBtn")}
              </button>
            </div>
          </div>

          <div style={{ ...S.tip, marginTop: "1.25rem" }} dangerouslySetInnerHTML={{ __html: n("techTipBox") }} />
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
                {n("quizQuestion")} {quizIdx + 1} {n("quizOf")} {QUIZ_COUNT}
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
                  {quizIdx + 1 < QUIZ_COUNT ? n("quizNextQuestion") : n("quizSeeScore")}
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
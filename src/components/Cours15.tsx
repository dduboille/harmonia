"use client";

/**
 * Cours15.tsx
 * Harmonia · Niveau 2 · Cours 15 — Les progressions jazz avancées
 * Convention : affichage anglais, dotKeys PianoPlayer français
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { useTerm } from "@/hooks/useTerm";
import { cours15Content } from "@/data/cours15Content";
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

// ── Chord voicings (ascending pitch order verified) ───────────────────────────

// Basic II-V-I in C major
const DM7:   string[] = ["Ré:3","Fa:3","La:3","Do:4"];         // D F A C
const G7:    string[] = ["Sol:3","Si:3","Ré:4","Fa:4"];         // G B D F
const CMAJ7: string[] = ["Do:3","Mi:3","Sol:3","Si:3"];         // C E G B

// Extended
const DM9:   string[] = ["Ré:3","Fa:3","La:3","Do:4","Mi:4"];  // D F A C E
const G13:   string[] = ["Sol:2","Si:3","Mi:4","Fa:4"];          // G B E F (root,3,13,b7)
const CMAJ9: string[] = ["Do:3","Mi:3","Sol:3","Si:3","Ré:4"];  // C E G B D

// Minor II-V-I (in C minor)
const DM7B5: string[] = ["Ré:3","Fa:3","Lab:3","Do:4"];         // D F Ab C
const G7B9:  string[] = ["Sol:2","Si:3","Fa:4","Lab:4"];         // G B F Ab (b7,b9)
const CM:    string[] = ["Do:3","Mib:3","Sol:3","Do:4"];         // C Eb G C

// Turnaround chords
const AM7:   string[] = ["La:3","Do:4","Mi:4","Sol:4"];         // A C E G
const A7:    string[] = ["La:2","Do#:3","Mi:3","Sol:3"];         // A C# E G
const EB7:   string[] = ["Mib:3","Sol:3","Sib:3","Réb:4"];      // Eb G Bb Db
const DB7:   string[] = ["Réb:3","Fa:3","Lab:3","Si:3"];         // Db F Ab Cb(=B)

// Blues / cycle
const C7:    string[] = ["Do:3","Mi:3","Sol:3","Sib:3"];         // C E G Bb
const F7:    string[] = ["Fa:3","La:3","Do:4","Mib:4"];          // F A C Eb
const FM7:   string[] = ["Fa:3","Lab:3","Do:4","Mib:4"];         // F Ab C Eb (Fm7)
const BB7:   string[] = ["Sib:2","Ré:3","Fa:3","Lab:3"];         // Bb D F Ab
const EBMAJ7: string[] = ["Mib:3","Sol:3","Sib:3","Ré:4"];       // Eb G Bb D

// ── Progression data ──────────────────────────────────────────────────────────

interface Progression {
  id: string;
  name: string;
  romanNumerals: string;
  chordNames: string;
  color: string;
  bg: string;
  description: string;
  tip: string;
  chords: string[][];
}

const PROGRESSIONS: Progression[] = [
  {
    id: "basic",
    name: "II–V–I basique",
    romanNumerals: "IIm7 – V7 – IMaj7",
    chordNames: "Dm7 – G7 – CMaj7",
    color: "#185FA5",
    bg: "#E6F1FB",
    description: "La cellule harmonique fondamentale du jazz. IIm7 installe la sous-dominante, V7 crée la tension maximale via son triton (Si–Fa), IMaj7 résout. Ce mouvement est présent dans quasiment tous les standards de jazz.",
    tip: "Le triton Si–Fa dans G7 résout en deux demi-tons : Si monte vers Do (3ce de C), Fa descend vers Mi (7te de CMaj7). Ce double mouvement chromatique rend la résolution irrésistible.",
    chords: [DM7, G7, CMAJ7],
  },
  {
    id: "extended",
    name: "II–V–I avec extensions",
    romanNumerals: "IIm9 – V13 – IMaj9",
    chordNames: "Dm9 – G13 – CMaj9",
    color: "#6B3FA0",
    bg: "#F0EAFA",
    description: "Même progression avec des extensions (9e, 13e) qui enrichissent la couleur sans changer la fonction. Dm9 ajoute E, G13 ajoute la 13e (E) et conserve la 7te (F), CMaj9 ajoute D à la résolution.",
    tip: "La 13e de G13 (Mi) anticipe la 3ce de CMaj7 (Mi aussi) — note commune qui prépare l'oreille à la résolution. Les extensions ajoutent de la richesse harmonique sans modifier la direction fonctionnelle.",
    chords: [DM9, G13, CMAJ9],
  },
  {
    id: "minor",
    name: "II–V–I mineur",
    romanNumerals: "IIm7b5 – V7b9 – Im",
    chordNames: "Dm7b5 – G7b9 – Cm",
    color: "#8B2252",
    bg: "#FDEEF5",
    description: "Le II–V–I en mode mineur. IIm7b5 (demi-diminué) est le IIe degré naturel du mineur. V7b9 (dominante avec 9e bémolisée) crée une tension encore plus intense, typique du mineur harmonique. Couleur bien plus sombre.",
    tip: "La b9 (Lab dans G7b9) crée un demi-ton avec la fondamentale de l'accord suivant (Sol–Lab–Sol inverse). V7b9 dans un contexte mineur signale immédiatement 'on va en mineur'.",
    chords: [DM7B5, G7B9, CM],
  },
];

// ── Turnaround data ───────────────────────────────────────────────────────────

interface Turnaround {
  id: string;
  name: string;
  chordNames: string;
  color: string;
  bg: string;
  description: string;
  chords: string[][];
}

const TURNAROUNDS: Turnaround[] = [
  {
    id: "basic",
    name: "Turnaround basique",
    chordNames: "CMaj7 – Am7 – Dm7 – G7",
    color: "#0F6E56",
    bg: "#E1F5EE",
    description: "I – VIm – IIm – V : le turnaround classique. Les 2–4 mesures finales d'un chorus qui ramènent vers le début de la grille. VIm prépare IIm, IIm prépare V, V résout vers I (reprise).",
    chords: [CMAJ7, AM7, DM7, G7],
  },
  {
    id: "secondary",
    name: "Avec dominante secondaire",
    chordNames: "CMaj7 – A7 – Dm7 – G7",
    color: "#BA7517",
    bg: "#FAEEDA",
    description: "I – VI7 – IIm – V : le VIm7 devient VI7 (A7), une dominante secondaire (V7/IIm) qui pointe vers Dm7. Ce C# dans A7 crée une tension supplémentaire avant la sous-dominante.",
    chords: [CMAJ7, A7, DM7, G7],
  },
  {
    id: "tritonesub",
    name: "Avec substitutions tritoniques",
    chordNames: "CMaj7 – Eb7 – Dm7 – Db7",
    color: "#993C1D",
    bg: "#FAECE7",
    description: "I – ♭VI7 – IIm – ♭II7 : Eb7 remplace Am7 (par triton de A7) et Db7 remplace G7 (par triton). La basse descend chromatiquement C–Eb–D–Db–C — mouvement très bebop et sophistiqué.",
    chords: [CMAJ7, EB7, DM7, DB7],
  },
];

// ── Cycle demo ────────────────────────────────────────────────────────────────

const CYCLE_DEMO: string[][] = [DM7, G7, CMAJ7, FM7, BB7, EBMAJ7];
const BLUES_DEMO: string[][] = [C7, C7, C7, C7, F7, F7, C7, C7, DM7, G7, C7, G7];

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
const SECTIONS_IDS = ["iivi", "rythme", "quiz"] as const;
type SectionId = typeof SECTIONS_IDS[number];

const PRIMARY    = "#7B1F1F";
const PRIMARY_BG = "#FCEAEA";

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
  infoBox:  { borderLeft: `2px solid ${PRIMARY}`, padding: "8px 14px", background: PRIMARY_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#5A1010", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
  tip:      { borderLeft: "2px solid #0F6E56", padding: "8px 14px", background: "#E1F5EE", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#085041", lineHeight: 1.6 } as React.CSSProperties,
};

export default function Cours15() {
  const [activeSection, setActiveSection] = useState<SectionId>("iivi");
  const i18n = useCoursI18n("cours15");
  const tc = i18n.tc;
  const n = (key: string) => tc(`narrative.${key}` as any);
  const tr = useTerm();
  const { questions: ALL_QUESTIONS } = useCoursContent(cours15Content);
  const [activeProg, setActiveProg]         = useState<string | null>(null);
  const [activeTurnaround, setActiveTurnaround] = useState<string | null>(null);

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
    if (id === "iivi")   return n("navIivi");
    if (id === "rythme") return n("navRythme");
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
        <span style={S.badge}>{i18n.badge}</span>
        <h1 style={S.h1}>{tr("Les progressions jazz avancées")}</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Charlie Parker"
        period={n("maitrePeriod")}
        emoji="🎷"
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

      {/* ══ SECTION 1 : II-V-I AVANCÉ ══ */}
      {activeSection === "iivi" && (
        <div>
          <h2 style={S.h2}>{n("iiviH2")}</h2>
          <p style={S.p}>{n("iiviIntro")}</p>
          <div style={S.infoBox} dangerouslySetInnerHTML={{ __html: n("iiviInfoBox") }} />

          {PROGRESSIONS.map(prog => (
            <div
              key={prog.id}
              style={{
                border: `0.5px solid ${activeProg === prog.id ? prog.color : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 10,
                overflow: "hidden",
                cursor: "pointer",
                background: activeProg === prog.id ? prog.bg : "#fff",
                transition: "all .15s",
              }}
              onClick={() => setActiveProg(activeProg === prog.id ? null : prog.id)}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                    <span style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>{prog.name}</span>
                  </div>
                  <div style={{ fontFamily: "monospace", fontSize: 12, color: prog.color }}>
                    {prog.romanNumerals} · {prog.chordNames}
                  </div>
                </div>
                <div style={{ fontSize: 11, color: "#bbb" }}>{activeProg === prog.id ? "▲" : "▼"}</div>
              </div>

              {activeProg === prog.id && (
                <div style={{ padding: "0 16px 16px", borderTop: `0.5px solid ${prog.color}20` }}>
                  <p style={{ ...S.p, marginTop: 12 }}>{prog.description}</p>
                  <div style={{ ...S.tip, marginBottom: 14 }}>
                    <strong>{n("iiviProgTipLabel")}</strong> {prog.tip}
                  </div>
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      playProg(pianoRef as React.RefObject<PianoPlayerRef>, prog.chords, 1600, 1.5);
                    }}
                    style={{ fontSize: 12, padding: "6px 16px", border: `0.5px solid ${prog.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: prog.color }}
                  >
                    {n("iiviListenBtn")} {prog.chordNames}
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* Tableau II-V-I dans 4 tonalités */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "24px 0 10px", color: "#111" }}>
            {n("iiviToursH3")}
          </h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {[n("iiviTableTonality"), n("iiviTableIIm7"), n("iiviTableV7"), n("iiviTableIMaj7")].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 12px", fontWeight: 500, color: "#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["C majeur",  "Dm7",  "G7",  "CMaj7"],
                  ["F majeur",  "Gm7",  "C7",  "FMaj7"],
                  ["Bb majeur", "Cm7",  "F7",  "BbMaj7"],
                  ["G majeur",  "Am7",  "D7",  "GMaj7"],
                ].map(([key, ii, v, i], idx) => (
                  <tr key={key} style={{ borderBottom: "0.5px solid #f0f0f0", background: idx % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "7px 12px", fontWeight: 500, color: "#444" }}>{key}</td>
                    <td style={{ padding: "7px 12px", fontFamily: "monospace", color: "#185FA5" }}>{ii}</td>
                    <td style={{ padding: "7px 12px", fontFamily: "monospace", color: PRIMARY }}>{v}</td>
                    <td style={{ padding: "7px 12px", fontFamily: "monospace", color: "#0F6E56" }}>{i}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.warnBox} dangerouslySetInnerHTML={{ __html: n("iiviWarnBox") }} />
        </div>
      )}

      {/* ══ SECTION 2 : RYTHME & TURNAROUNDS ══ */}
      {activeSection === "rythme" && (
        <div>
          <h2 style={S.h2}>{n("rythmeH2")}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: n("rythmeIntro") }} />

          {/* Comparaison rapide / lent */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "0 0 10px", color: "#111" }}>
            {n("rythmeCompareH3")}
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: "1.5rem" }}>
            <div style={{ border: `0.5px solid ${PRIMARY}`, borderRadius: 10, padding: "14px 16px", background: PRIMARY_BG }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: PRIMARY, marginBottom: 6 }}>{n("rythmeGiantTitle")}</div>
              <div style={{ fontSize: 12, color: "#555", lineHeight: 1.6, marginBottom: 8 }}>
                {n("rythmeGiantDesc")}
              </div>
              <div style={{ fontFamily: "monospace", fontSize: 11, color: "#888" }}>
                BMaj7 – D7 – GMaj7 – Bb7 – EbMaj7...
              </div>
            </div>
            <div style={{ border: "0.5px solid #185FA5", borderRadius: 10, padding: "14px 16px", background: "#E6F1FB" }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: "#185FA5", marginBottom: 6 }}>{n("ryhmeSoWhatTitle")}</div>
              <div style={{ fontSize: 12, color: "#555", lineHeight: 1.6, marginBottom: 8 }}>
                {n("ryhmeSoWhatDesc")}
              </div>
              <div style={{ fontFamily: "monospace", fontSize: 11, color: "#888" }}>
                D dorien ×16 | Eb dorien ×8 | D dorien ×8
              </div>
            </div>
          </div>

          {/* Cycle des quintes */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 10px", color: "#111" }}>
            {n("ryhmeCycleH3")}
          </h3>
          <p style={S.p}>{n("ryhmeCycleDesc")}</p>
          <div style={{ padding: "12px 16px", background: "#f8f8f8", borderRadius: 8, marginBottom: 14 }}>
            <div style={{ fontFamily: "monospace", fontSize: 12, color: "#444", marginBottom: 8 }}>
              Dm7 – G7 – CMaj7 – Fm7 – Bb7 – EbMaj7...
            </div>
            <div style={{ fontSize: 12, color: "#888", marginBottom: 10 }}>
              {n("ryhmeCycleLabel")}
            </div>
            <button
              onClick={() => playProg(pianoRef as React.RefObject<PianoPlayerRef>, CYCLE_DEMO, 1400, 1.4)}
              style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${PRIMARY}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: PRIMARY }}
            >
              {n("ryhmeCycleBtn")}
            </button>
          </div>

          {/* Jazz blues */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 10px", color: "#111" }}>
            {n("rythmeBluesH3")}
          </h3>
          <div style={{ overflowX: "auto", marginBottom: 14 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6, minWidth: 480 }}>
              {[
                { chord: "C7", bar: 1 }, { chord: "F7", bar: 2 }, { chord: "C7", bar: 3 }, { chord: "C7", bar: 4 },
                { chord: "F7", bar: 5 }, { chord: "F7", bar: 6 }, { chord: "C7", bar: 7 }, { chord: "Am7", bar: 8 },
                { chord: "Dm7", bar: 9 }, { chord: "G7", bar: 10 }, { chord: "C7", bar: 11 }, { chord: "G7", bar: 12 },
              ].map(({ chord, bar }) => (
                <div key={bar} style={{
                  border: "0.5px solid #e5e5e5",
                  borderRadius: 6,
                  padding: "8px 10px",
                  background: chord.includes("7") && !chord.includes("Maj") && !chord.includes("m") ? "#FAEEDA" : "#fafafa",
                  fontSize: 12,
                }}>
                  <div style={{ fontSize: 10, color: "#bbb", marginBottom: 2 }}>{bar}</div>
                  <div style={{ fontFamily: "monospace", fontWeight: 500, color: "#333" }}>{chord}</div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => playProg(pianoRef as React.RefObject<PianoPlayerRef>, BLUES_DEMO, 1200, 1.1)}
            style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${PRIMARY}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: PRIMARY, marginBottom: "1.5rem" }}
          >
            {n("rythmeBluesBtn")}
          </button>

          {/* Turnarounds */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 10px", color: "#111" }}>
            {n("ryhmeTurnaroundsH3")}
          </h3>
          {TURNAROUNDS.map(ta => (
            <div
              key={ta.id}
              style={{
                border: `0.5px solid ${activeTurnaround === ta.id ? ta.color : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 8,
                overflow: "hidden",
                cursor: "pointer",
                background: activeTurnaround === ta.id ? ta.bg : "#fff",
                transition: "all .15s",
              }}
              onClick={() => setActiveTurnaround(activeTurnaround === ta.id ? null : ta.id)}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#111", marginBottom: 2 }}>{ta.name}</div>
                  <div style={{ fontFamily: "monospace", fontSize: 12, color: ta.color }}>{ta.chordNames}</div>
                </div>
                <div style={{ fontSize: 11, color: "#bbb" }}>{activeTurnaround === ta.id ? "▲" : "▼"}</div>
              </div>
              {activeTurnaround === ta.id && (
                <div style={{ padding: "0 16px 14px", borderTop: `0.5px solid ${ta.color}20` }}>
                  <p style={{ ...S.p, marginTop: 10 }}>{ta.description}</p>
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      playProg(pianoRef as React.RefObject<PianoPlayerRef>, ta.chords, 1500, 1.4);
                    }}
                    style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${ta.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: ta.color }}
                  >
                    {n("ryhmeTurnaroundListenBtn")} {ta.chordNames}
                  </button>
                </div>
              )}
            </div>
          ))}

          <div style={S.tip} dangerouslySetInnerHTML={{ __html: n("rythmeRhythmChangesBox") }} />
        </div>
      )}

      {/* ══ SECTION 3 : QUIZ ══ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.h2}>{n("quizH2")}</h2>
          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 8 ? "🎷" : quizScore >= 6 ? "👍" : "💪"}
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
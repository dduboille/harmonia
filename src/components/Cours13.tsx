"use client";

/**
 * Cours13.tsx
 * Harmonia · Niveau 2 · Cours 13 — Le contrepoint à 2 voix
 * Convention : affichage anglais, dotKeys PianoPlayer français
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { useTerm } from "@/hooks/useTerm";
import { cours13Content } from "@/data/cours13Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";

// Play one beat: CF + CP simultaneously
function playBeat(ref: React.RefObject<PianoPlayerRef>, cf: string, cp: string, dur = 1.6) {
  for (const key of [cf, cp]) {
    const [n, o] = key.split(":");
    ref.current?.playNote(n, parseInt(o), { duration: dur });
  }
}

// Play a sequence of beat pairs at a given interval
function playSpecies(
  ref: React.RefObject<PianoPlayerRef>,
  beats: [string, string][],
  gapMs: number,
  noteDur = 1.5,
) {
  beats.forEach(([cf, cp], i) => {
    setTimeout(() => playBeat(ref, cf, cp, noteDur), i * gapMs);
  });
}

// ── Species data ──────────────────────────────────────────────────────────────

interface Species {
  id: string;
  num: number;
  name: string;
  ratio: string;
  color: string;
  bg: string;
  description: string;
  dissonanceRule: string;
  rhythmNote: string;
  // 1:1 beat pairs — CF in octave 3, CP in octave 4-5
  beats: [string, string][];
  gapMs: number;     // playback gap (faster = higher species)
  noteDur: number;
}

const SPECIES: Species[] = [
  {
    id: "sp1",
    num: 1,
    name: "1ère espèce — Note contre note",
    ratio: "1 : 1",
    color: "#1B5E4A",
    bg: "#E1F5EE",
    description: "Pour chaque note du cantus firmus, une note dans le contrepoint. Toutes les notes doivent être consonantes. C'est la plus simple et la plus rigoureuse des espèces.",
    dissonanceRule: "Aucune dissonance autorisée. Toutes les notes sont consonantes.",
    rhythmNote: "Même valeur dans les deux voix — la plus lente.",
    beats: [
      ["Do:3","Mi:4"], ["Ré:3","Fa:4"], ["Mi:3","Sol:4"],
      ["Fa:3","La:4"], ["Sol:3","Si:4"], ["Fa:3","La:4"],
      ["Mi:3","Sol:4"], ["Ré:3","Fa:4"], ["Do:3","Mi:4"],
    ],
    gapMs: 750,
    noteDur: 1.6,
  },
  {
    id: "sp2",
    num: 2,
    name: "2ème espèce — Deux notes contre une",
    ratio: "2 : 1",
    color: "#1A4A8A",
    bg: "#E6F1FB",
    description: "La voix de contrepoint joue deux notes pendant que le cantus firmus tient une note. La note sur le temps fort doit être consonante ; la note sur le temps faible peut être une note de passage (dissonante si elle relie deux consonances par mouvement conjoint).",
    dissonanceRule: "Dissonance autorisée sur le temps faible uniquement, si note de passage par mouvement conjoint.",
    rhythmNote: "CP en noires (ou croches), CF en blanches — 2× plus rapide.",
    beats: [
      ["Do:3","Mi:4"], ["Do:3","Sol:4"],
      ["Ré:3","Fa:4"], ["Ré:3","La:4"],
      ["Mi:3","Sol:4"], ["Mi:3","Mi:4"],
      ["Fa:3","La:4"], ["Fa:3","Sol:4"],
      ["Mi:3","Sol:4"], ["Mi:3","Si:4"],
      ["Ré:3","Fa:4"], ["Ré:3","Fa:4"],
      ["Do:3","Mi:4"],
    ],
    gapMs: 420,
    noteDur: 0.85,
  },
  {
    id: "sp3",
    num: 3,
    name: "3ème espèce — Quatre notes contre une",
    ratio: "4 : 1",
    color: "#6B3FA0",
    bg: "#F0EAFA",
    description: "Le contrepoint joue quatre notes pour chaque note du cantus firmus. Outre les notes de passage, on peut utiliser des broderies (notes auxiliaires) et des échappées. Le mouvement doit rester principalement conjoint pour garder la fluidité.",
    dissonanceRule: "Dissonances sur temps faibles 2, 3 et 4 : notes de passage, broderies, échappées.",
    rhythmNote: "CP en croches (quadruples plus rapides), CF en rondes — 4× plus rapide.",
    beats: [
      ["Do:3","Mi:4"], ["Do:3","Ré:4"], ["Do:3","Mi:4"], ["Do:3","Sol:4"],
      ["Ré:3","Fa:4"], ["Ré:3","Mi:4"], ["Ré:3","Fa:4"], ["Ré:3","La:4"],
      ["Mi:3","Sol:4"], ["Mi:3","Fa:4"], ["Mi:3","Sol:4"], ["Mi:3","Si:4"],
      ["Do:3","Mi:4"],
    ],
    gapMs: 230,
    noteDur: 0.45,
  },
  {
    id: "sp4",
    num: 4,
    name: "4ème espèce — Syncopes et retards",
    ratio: "2 : 1 (syncopes)",
    color: "#8B2252",
    bg: "#FDEEF5",
    description: "La note du contrepoint est introduite sur le temps faible et tenue (liée) sur le temps fort suivant, créant une dissonance sur le temps fort. Cette dissonance — le retard (suspension) — se résout ensuite par mouvement conjoint descendant. C'est l'espèce la plus expressive.",
    dissonanceRule: "Dissonance sur le temps fort (suspension 7-6, 4-3, 9-8) : préparée sur le temps faible précédent, résolue par descente d'un degré.",
    rhythmNote: "Notes liées en syncope : temps faible → temps fort (retard). La résolution se fait sur le temps faible suivant.",
    beats: [
      ["Do:3","Mi:4"], ["Do:3","Sol:4"],
      ["Ré:3","Sol:4"], ["Ré:3","La:4"],
      ["Mi:3","La:4"], ["Mi:3","Sol:4"],
      ["Fa:3","Sol:4"], ["Fa:3","La:4"],
      ["Sol:3","La:4"], ["Sol:3","Si:4"],
      ["Do:3","Si:4"], ["Do:3","Do:5"],
      ["Do:3","Mi:4"],
    ],
    gapMs: 500,
    noteDur: 1.1,
  },
  {
    id: "sp5",
    num: 5,
    name: "5ème espèce — Contrepoint fleuri",
    ratio: "Libre",
    color: "#BA7517",
    bg: "#FAEEDA",
    description: "Combinaison libre de toutes les espèces précédentes dans une même voix. Le contrepoint fleuri ressemble à une mélodie naturelle : il mêle notes longues, notes de passage, broderies, retards et ornements. C'est l'aboutissement du contrepoint strict.",
    dissonanceRule: "Toutes les règles des espèces 1 à 4 s'appliquent selon la valeur rythmique utilisée à chaque instant.",
    rhythmNote: "Libre : rondes, blanches, noires, croches — le compositeur choisit selon l'expression.",
    beats: [
      ["Do:3","Mi:4"], ["Do:3","Ré:4"],
      ["Ré:3","Fa:4"], ["Ré:3","Fa:4"], ["Ré:3","Sol:4"],
      ["Mi:3","Sol:4"], ["Mi:3","Sol:4"],
      ["Fa:3","La:4"], ["Fa:3","Sol:4"], ["Fa:3","Fa:4"],
      ["Mi:3","Sol:4"], ["Mi:3","Si:4"],
      ["Ré:3","La:4"],
      ["Do:3","Mi:4"],
    ],
    gapMs: 320,
    noteDur: 0.7,
  },
];

// ── Motion types ──────────────────────────────────────────────────────────────

interface Motion {
  id: string;
  name: string;
  description: string;
  rule: string;
  allowed: boolean;
  color: string;
  bg: string;
  cfKeys: string[];
  cpKeys: string[];
}

const MOTIONS: Motion[] = [
  {
    id: "contraire",
    name: "Contraire",
    description: "Les deux voix se déplacent en directions opposées (l'une monte, l'autre descend).",
    rule: "Mouvement le plus indépendant, le plus recommandé. Assure l'autonomie des voix.",
    allowed: true,
    color: "#0F6E56",
    bg: "#E1F5EE",
    cfKeys: ["Sol:3","Fa:3","Mi:3","Ré:3","Do:3"],
    cpKeys: ["Mi:4","Fa:4","Sol:4","La:4","Si:4"],
  },
  {
    id: "oblique",
    name: "Oblique",
    description: "Une voix reste sur la même note ; l'autre se déplace.",
    rule: "Bon mouvement — crée un ancrage harmonique pendant que l'autre voix apporte du mouvement.",
    allowed: true,
    color: "#185FA5",
    bg: "#E6F1FB",
    cfKeys: ["Mi:3","Mi:3","Mi:3","Mi:3","Mi:3"],
    cpKeys: ["Do:4","Ré:4","Mi:4","Fa:4","Sol:4"],
  },
  {
    id: "direct",
    name: "Direct (semblable)",
    description: "Les deux voix se déplacent dans le même sens, mais par des intervalles différents.",
    rule: "Autorisé avec modération. Dangereux s'il mène à une quinte ou octave parfaite (quinte cachée).",
    allowed: true,
    color: "#BA7517",
    bg: "#FAEEDA",
    cfKeys: ["Do:3","Ré:3","Mi:3","Fa:3","Sol:3"],
    cpKeys: ["Mi:4","Sol:4","La:4","Si:4","Ré:5"],
  },
  {
    id: "parallele",
    name: "Parallèle (interdit si parfait)",
    description: "Les deux voix se déplacent dans le même sens par le même intervalle.",
    rule: "INTERDIT pour les consonances parfaites (quinte, octave, unisson). Autorisé pour les imparfaites (tierces, sixtes).",
    allowed: false,
    color: "#A32D2D",
    bg: "#FCEBEB",
    cfKeys: ["Do:3","Ré:3"],
    cpKeys: ["Sol:3","La:3"],
  },
];

// ── Dissonance treatments ─────────────────────────────────────────────────────

interface Suspension {
  name: string;
  formula: string;
  description: string;
  resolution: string;
}

const SUSPENSIONS: Suspension[] = [
  {
    name: "Retard 7 – 6",
    formula: "7 → 6",
    description: "La septième (dissonante) se prépare comme sixte sur le temps faible, est tenue sur le temps fort, puis résout par mouvement descendant vers la sixte.",
    resolution: "Septième ↓ un degré → Sixte",
  },
  {
    name: "Retard 4 – 3",
    formula: "4 → 3",
    description: "La quarte (dissonante) est préparée sur le temps faible, tenue sur le temps fort, puis résout vers la tierce. C'est le retard le plus expressif en contrepoint strict.",
    resolution: "Quarte ↓ un degré → Tierce",
  },
  {
    name: "Retard 9 – 8",
    formula: "9 → 8",
    description: "La neuvième (dissonante, = 2de à l'octave) se résout vers l'octave. Très courant dans les suspensions de basse (suspension de bassus).",
    resolution: "Neuvième ↓ un degré → Octave",
  },
  {
    name: "Retard 2 – 3 (bassus)",
    formula: "2 → 3",
    description: "Suspension de basse : la voix inférieure crée une seconde qui résout vers la tierce par mouvement descendant. Le sens de résolution est inversé par rapport aux autres suspensions.",
    resolution: "Seconde ↓ un degré → Tierce",
  },
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

const PRIMARY    = "#5C3A1E";
const PRIMARY_BG = "#F7F0E6";

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
  h2:   { fontSize: 17, fontWeight: 500, color: "#111", marginBottom: 8 } as React.CSSProperties,
  h3:   { fontSize: 14, fontWeight: 500, margin: "20px 0 10px", color: "#111" } as React.CSSProperties,
  p:    { fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: "1rem" } as React.CSSProperties,
  info: { borderLeft: `2px solid ${PRIMARY}`, padding: "8px 14px", background: PRIMARY_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#3A1A08", lineHeight: 1.6 } as React.CSSProperties,
  warn: { borderLeft: "2px solid #A32D2D", padding: "8px 14px", background: "#FCEBEB", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#501313", lineHeight: 1.6 } as React.CSSProperties,
  tip:  { borderLeft: "2px solid #0F6E56", padding: "8px 14px", background: "#E1F5EE", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#085041", lineHeight: 1.6 } as React.CSSProperties,
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function Cours13() {
  const [activeSection, setActiveSection] = useState<string>("especes");
  const i18n = useCoursI18n("cours13");
  const tc = i18n.tc;
  const n = (key: string) => tc(`narrative.${key}` as any);
  const tr = useTerm();
  const { questions: ALL_QUESTIONS } = useCoursContent(cours13Content);
  const [activeSp, setActiveSp] = useState<string | null>(null);

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
    if (id === "especes") return n("navEspeces");
    if (id === "regles") return n("navRegles");
    return n("navQuiz");
  };

  const playMotion = (motion: Motion) => {
    const cfKeys = motion.cfKeys;
    const cpKeys = motion.cpKeys;
    const count = Math.max(cfKeys.length, cpKeys.length);
    for (let i = 0; i < count; i++) {
      const cf = cfKeys[Math.min(i, cfKeys.length - 1)];
      const cp = cpKeys[Math.min(i, cpKeys.length - 1)];
      setTimeout(() => {
        const [cn, co] = cf.split(":");
        const [tn, to] = cp.split(":");
        pianoRef.current?.playNote(cn, parseInt(co), { duration: 1.2 });
        pianoRef.current?.playNote(tn, parseInt(to), { duration: 1.2 });
      }, i * 600);
    }
  };

  return (
    <div style={S.wrap}>
      {/* Piano caché */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={4} startOctave={2} showLabels={false} />
      </div>

      {/* Header */}
      <div style={S.header}>
        <span style={S.badge}>Niveau 2 · Cours 13</span>
        <h1 style={S.h1}>{tr("Le contrepoint à 2 voix")}</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Johann Joseph Fux"
        period={n("maitrePeriod")}
        emoji="📜"
        concept={n("maitreConcept")}
        anecdote={n("maitreAnecdote")}
        lesson={n("maitreLesson")}
        accentColor={PRIMARY}
      />

      {/* Navigation */}
      <nav style={S.nav}>
        {(["especes", "regles", "quiz"] as const).map(id => (
          <button key={id} style={S.pill(activeSection === id)} onClick={() => setActiveSection(id)}>
            {sectionLabel(id)}
          </button>
        ))}
      </nav>

      {/* ══ SECTION 1 : ESPÈCES ══ */}
      {activeSection === "especes" && (
        <div>
          <h2 style={S.h2}>{n("especesTitle")}</h2>
          <p style={S.p}>{n("especesIntro")}</p>

          <div style={S.info} dangerouslySetInnerHTML={{ __html: n("especesInfoBox") }} />

          <p style={{ fontSize: 13, color: "#888", marginBottom: 16 }}>
            {n("especesClickHint")}
          </p>

          {SPECIES.map(sp => (
            <div
              key={sp.id}
              onClick={() => {
                const opening = activeSp !== sp.id;
                setActiveSp(opening ? sp.id : null);
                if (opening) playSpecies(pianoRef as React.RefObject<PianoPlayerRef>, sp.beats, sp.gapMs, sp.noteDur);
              }}
              style={{
                border: `0.5px solid ${activeSp === sp.id ? sp.color : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 8,
                overflow: "hidden",
                cursor: "pointer",
                background: activeSp === sp.id ? sp.bg : "#fff",
                transition: "all .15s",
              }}
            >
              {/* Header espèce */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px" }}>
                <div style={{
                  fontSize: 11, fontWeight: 700, color: sp.color,
                  background: sp.bg, border: `0.5px solid ${sp.color}`,
                  padding: "3px 10px", borderRadius: 6, fontFamily: "monospace",
                  flexShrink: 0, whiteSpace: "nowrap" as const,
                }}>
                  {sp.ratio}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>{sp.name}</div>
                  <div style={{ fontSize: 12, color: "#888", marginTop: 2, fontStyle: "italic" }}>
                    {sp.rhythmNote}
                  </div>
                </div>
              </div>

              {/* Détail */}
              {activeSp === sp.id && (
                <div style={{ padding: "0 16px 16px", borderTop: `0.5px solid ${sp.color}20` }}>
                  <div style={{ marginTop: 12, marginBottom: 10 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: sp.color, marginBottom: 4, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>{n("especesDetailDescLabel")}</div>
                    <div style={{ fontSize: 13, color: "#444", lineHeight: 1.65 }}>{sp.description}</div>
                  </div>
                  <div style={{ marginBottom: 14 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: sp.color, marginBottom: 4, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>{n("especesDetailDissLabel")}</div>
                    <div style={{ fontSize: 13, color: "#444", background: "#f8f8f8", padding: "6px 10px", borderRadius: 6, fontFamily: "monospace" }}>
                      {sp.dissonanceRule}
                    </div>
                  </div>
                  <button
                    onClick={e => { e.stopPropagation(); playSpecies(pianoRef as React.RefObject<PianoPlayerRef>, sp.beats, sp.gapMs, sp.noteDur); }}
                    style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${sp.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: sp.color }}
                  >
                    {n("especesReplayBtn")}
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* Récap tableau */}
          <h3 style={S.h3}>{n("especesRecapTitle")}</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {[n("especesTableHeaderEspece"), n("especesTableHeaderRatio"), n("especesTableHeaderDiss"), n("especesTableHeaderFig")].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 10px", fontWeight: 500, color: "#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { esp: n("especesRow1Esp"), ratio: "1 : 1", diss: n("especesRow1Diss"), fig: n("especesRow1Fig") },
                  { esp: n("especesRow2Esp"), ratio: "2 : 1", diss: n("especesRow2Diss"), fig: n("especesRow2Fig") },
                  { esp: n("especesRow3Esp"), ratio: "4 : 1", diss: n("especesRow3Diss"), fig: n("especesRow3Fig") },
                  { esp: n("especesRow4Esp"), ratio: n("especesRow4Ratio"), diss: n("especesRow4Diss"), fig: n("especesRow4Fig") },
                  { esp: n("especesRow5Esp"), ratio: "Libre", diss: n("especesRow5Diss"), fig: n("especesRow5Fig") },
                ].map((r, i) => (
                  <tr key={r.esp} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "7px 10px", fontWeight: 500, color: SPECIES[i].color }}>{r.esp}</td>
                    <td style={{ padding: "7px 10px", fontFamily: "monospace", fontSize: 11 }}>{r.ratio}</td>
                    <td style={{ padding: "7px 10px", fontSize: 11, color: "#555" }}>{r.diss}</td>
                    <td style={{ padding: "7px 10px", fontSize: 11, color: "#666" }}>{r.fig}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ══ SECTION 2 : RÈGLES ══ */}
      {activeSection === "regles" && (
        <div>
          <h2 style={S.h2}>{n("reglesTitle")}</h2>
          <p style={S.p}>{n("reglesIntro")}</p>

          {/* Intervalles */}
          <h3 style={S.h3}>{n("reglesIntervalsTitle")}</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
            <div style={{ border: "0.5px solid #0F6E5640", borderRadius: 10, padding: "14px 16px", background: "#E1F5EE" }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#0F6E56", marginBottom: 10, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>{n("reglesConso")}</div>
              {[
                { name: n("reglesConsoParfaites"), intervals: "Unisson (1), Quinte (5J), Octave (8)" },
                { name: n("reglesConsoImparfaites"), intervals: "Tierces (M3, m3) · Sixtes (M6, m6)" },
              ].map(g => (
                <div key={g.name} style={{ marginBottom: 8 }}>
                  <div style={{ fontSize: 11, color: "#0F6E56", fontWeight: 500, marginBottom: 2 }}>{g.name}</div>
                  <div style={{ fontSize: 12, fontFamily: "monospace", color: "#444" }}>{g.intervals}</div>
                </div>
              ))}
            </div>
            <div style={{ border: "0.5px solid #A32D2D40", borderRadius: 10, padding: "14px 16px", background: "#FCEBEB" }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#A32D2D", marginBottom: 10, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>{n("reglesDiss")}</div>
              {[
                { name: n("reglesDissAllEsp"), intervals: "Seconde (M2, m2) · Septième (M7, m7)" },
                { name: n("reglesDiss2Voix"), intervals: "Quarte juste (4J) · Triton (A4/D5)" },
              ].map(g => (
                <div key={g.name} style={{ marginBottom: 8 }}>
                  <div style={{ fontSize: 11, color: "#A32D2D", fontWeight: 500, marginBottom: 2 }}>{g.name}</div>
                  <div style={{ fontSize: 12, fontFamily: "monospace", color: "#444" }}>{g.intervals}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mouvements */}
          <h3 style={S.h3}>{n("reglesMotionsTitle")}</h3>

          {MOTIONS.map(motion => (
            <div key={motion.id} style={{
              border: `0.5px solid ${motion.allowed ? motion.color : "#A32D2D"}40`,
              borderRadius: 10, padding: "12px 16px", marginBottom: 8,
              background: motion.bg,
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12, flexWrap: "wrap" as const }}>
                <div style={{ flexShrink: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                    <span style={{ fontWeight: 500, fontSize: 13, color: motion.allowed ? motion.color : "#A32D2D" }}>{motion.name}</span>
                    <span style={{ fontSize: 11, padding: "1px 7px", borderRadius: 10, background: motion.allowed ? motion.color : "#A32D2D", color: "#fff" }}>
                      {motion.allowed ? n("reglesMotionAllowed") : n("reglesMotionForbidden")}
                    </span>
                  </div>
                  <div style={{ fontSize: 12, color: "#555", lineHeight: 1.5, marginBottom: 8 }}>{motion.description}</div>
                  <div style={{ fontSize: 11, color: "#666", fontStyle: "italic", lineHeight: 1.5, marginBottom: 10 }}>{motion.rule}</div>
                  <button
                    onClick={() => playMotion(motion)}
                    style={{ fontSize: 11, padding: "3px 10px", border: `0.5px solid ${motion.allowed ? motion.color : "#A32D2D"}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: motion.allowed ? motion.color : "#A32D2D" }}
                  >
                    {n("reglesMotionListenBtn")}
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div style={S.warn} dangerouslySetInnerHTML={{ __html: n("reglesWarnBox") }} />

          {/* Retards / suspensions */}
          <h3 style={S.h3}>{n("reglesSuspensionsTitle")}</h3>
          <p style={S.p}>{n("reglesSuspensionsIntro")}</p>

          <div style={S.info} dangerouslySetInnerHTML={{ __html: n("reglesSuspensionsInfoBox") }} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
            {SUSPENSIONS.map(s => (
              <div key={s.name} style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "12px 16px", background: "#fafafa" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontFamily: "monospace", fontSize: 15, fontWeight: 700, color: PRIMARY }}>{s.formula}</span>
                  <span style={{ fontSize: 12, fontWeight: 500, color: "#333" }}>{s.name}</span>
                </div>
                <div style={{ fontSize: 12, color: "#555", lineHeight: 1.5, marginBottom: 6 }}>{s.description}</div>
                <div style={{ fontSize: 11, fontFamily: "monospace", color: "#0F6E56" }}>{s.resolution}</div>
              </div>
            ))}
          </div>

          {/* Règles mélodiques */}
          <h3 style={S.h3}>{n("reglesMeloTitle")}</h3>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: 8 }}>
            {[
              { rule: n("reglesMelo1Rule"), detail: n("reglesMelo1Detail") },
              { rule: n("reglesMelo2Rule"), detail: n("reglesMelo2Detail") },
              { rule: n("reglesMelo3Rule"), detail: n("reglesMelo3Detail") },
              { rule: n("reglesMelo4Rule"), detail: n("reglesMelo4Detail") },
              { rule: n("reglesMelo5Rule"), detail: n("reglesMelo5Detail") },
              { rule: n("reglesMelo6Rule"), detail: n("reglesMelo6Detail") },
            ].map((r, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 10, padding: "10px 14px", borderRadius: 8, background: i % 2 === 0 ? "#fafafa" : "#fff", border: "0.5px solid #f0f0f0" }}>
                <div style={{ fontSize: 13, color: "#0F6E56", fontWeight: 500, marginTop: 1 }}>→</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#333", marginBottom: 2 }}>{r.rule}</div>
                  <div style={{ fontSize: 12, color: "#666", lineHeight: 1.5 }}>{r.detail}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={S.tip} dangerouslySetInnerHTML={{ __html: n("reglesTipBox") }} />
        </div>
      )}

      {/* ══ SECTION 3 : QUIZ ══ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.h2}>{n("quizTitle")}</h2>

          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 8 ? "📜" : quizScore >= 6 ? "👍" : "💪"}
              </div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>
                {n("quizScoreLabel")}{quizScore} / {QUIZ_COUNT}
              </div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
                {quizScore >= 8
                  ? n("quizFeedbackGreat")
                  : quizScore >= 6
                  ? n("quizFeedbackGood")
                  : n("quizFeedbackKeepGoing")}
              </div>
              <button
                onClick={resetQuiz}
                style={{ fontSize: 13, padding: "8px 20px", border: `0.5px solid ${PRIMARY}`, borderRadius: 20, cursor: "pointer", background: PRIMARY_BG, color: PRIMARY }}
              >{n("quizNewBtn")}</button>
            </div>
          ) : (
            <div>
              <div style={{ fontSize: 12, color: "#999", marginBottom: 10 }}>
                {n("quizQuestionCounter")} {quizIdx + 1} / {QUIZ_COUNT}
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
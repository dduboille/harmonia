"use client";

/**
 * Cours10.tsx
 * Harmonia · Niveau 2 · Cours 10 — Les modes de la gamme majeure
 * Convention : affichage anglais, dotKeys PianoPlayer français
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { useTerm } from "@/hooks/useTerm";
import { cours10Content } from "@/data/cours10Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";

interface Section { id: string; label: string; }

function playScale(ref: React.RefObject<PianoPlayerRef>, notes: string[], gap = 300) {
  notes.forEach((key, i) => {
    const [note, octStr] = key.split(":");
    setTimeout(() => ref.current?.playNote(note, parseInt(octStr), { duration: 1.2 }), i * gap);
  });
}

// ── Données modes ─────────────────────────────────────────────────────────────

interface Mode {
  id: string;
  name: string;
  degree: number;
  degreeLabel: string;
  rootExample: string;
  structure: string;
  alteration: string;
  color: string;
  bg: string;
  emoji: string;
  character: string;
  famous: string;
  famousDetail: string;
  notes: string[];
  dotKeys: string[];
}

const MODES: Mode[] = [
  {
    id: "ionien",
    name: "Ionien",
    degree: 1,
    degreeLabel: "I",
    rootExample: "C",
    structure: "T – T – ½T – T – T – T – ½T",
    alteration: "Aucune — c'est la gamme majeure standard",
    color: "#0F6E56",
    bg: "#E1F5EE",
    emoji: "☀️",
    character: "Lumineux, stable, affirmé. La référence tonale absolue.",
    famous: "Twinkle Twinkle Little Star, Happy Birthday",
    famousDetail: "Pratiquement toute la musique populaire occidentale repose sur ce mode — c'est la gamme majeure.",
    notes: ["C", "D", "E", "F", "G", "A", "B", "C"],
    dotKeys: ["Do:4","Ré:4","Mi:4","Fa:4","Sol:4","La:4","Si:4","Do:5"],
  },
  {
    id: "dorien",
    name: "Dorien",
    degree: 2,
    degreeLabel: "II",
    rootExample: "D",
    structure: "T – ½T – T – T – T – ½T – T",
    alteration: "Mineur avec 6te majeure — ni trop sombre, ni trop clair",
    color: "#185FA5",
    bg: "#E6F1FB",
    emoji: "🌊",
    character: "Mineur mais lumineux, mystérieux, modal. La couleur du jazz et du folk celtique.",
    famous: "So What – Miles Davis / Scarborough Fair / Oye Como Va – Santana",
    famousDetail: "So What de Miles Davis (1959) est l'exemple modal par excellence. La 6te majeure (B dans D dorien) donne cette couleur unique — ni vraiment triste, ni vraiment joyeux.",
    notes: ["D", "E", "F", "G", "A", "B", "C", "D"],
    dotKeys: ["Ré:4","Mi:4","Fa:4","Sol:4","La:4","Si:4","Do:5","Ré:5"],
  },
  {
    id: "phrygien",
    name: "Phrygien",
    degree: 3,
    degreeLabel: "III",
    rootExample: "E",
    structure: "½T – T – T – T – ½T – T – T",
    alteration: "Mineur avec 2de bémolisée — la note caractéristique la plus distinctive",
    color: "#993C1D",
    bg: "#FAECE7",
    emoji: "🔥",
    character: "Sombre, intense, dramatique. La couleur du flamenco et de la musique espagnole.",
    famous: "Flamenco / Metallica – Wherever I May Roam / thème de Star Wars (Duel of Fates)",
    famousDetail: "Le demi-ton initial (E→F) crée une tension immédiate et une couleur méditerranéenne inconfondable. Le mouvement ♭II→I est la cadence phrygienne emblématique du flamenco.",
    notes: ["E", "F", "G", "A", "B", "C", "D", "E"],
    dotKeys: ["Mi:4","Fa:4","Sol:4","La:4","Si:4","Do:5","Ré:5","Mi:5"],
  },
  {
    id: "lydien",
    name: "Lydien",
    degree: 4,
    degreeLabel: "IV",
    rootExample: "F",
    structure: "T – T – T – ½T – T – T – ½T",
    alteration: "Majeur avec 4te augmentée (#4) — note la plus caractéristique",
    color: "#6B3FA0",
    bg: "#F0EAFA",
    emoji: "✨",
    character: "Lumineux, onirique, éthéré. La couleur de la magie et de l'émerveillement.",
    famous: "The Simpsons (thème) / Flying – John Williams / Lydian Chromatic Concept – George Russell",
    famousDetail: "Le #4 crée une tension douce et rêveuse. John Williams l'utilise abondamment dans ses musiques de films pour évoquer le merveilleux (E.T., Superman). Le thème des Simpsons commence par ce triton ascendant emblématique.",
    notes: ["F", "G", "A", "B", "C", "D", "E", "F"],
    dotKeys: ["Fa:4","Sol:4","La:4","Si:4","Do:5","Ré:5","Mi:5","Fa:5"],
  },
  {
    id: "mixolydien",
    name: "Mixolydien",
    degree: 5,
    degreeLabel: "V",
    rootExample: "G",
    structure: "T – T – ½T – T – T – ½T – T",
    alteration: "Majeur avec 7te mineure — accord de dominante sans résolution",
    color: "#BA7517",
    bg: "#FAEEDA",
    emoji: "🎸",
    character: "Majeur mais non résolu, énergique, bluesy. La couleur du rock et du blues.",
    famous: "Norwegian Wood – Beatles / Sweet Home Chicago / La Grange – ZZ Top",
    famousDetail: "Pratiquement tout le blues et le rock utilisent ce mode. La 7te mineure (F dans G mixolydien) crée un accord de dominante sans tension de résolution — ce qui donne cette couleur énergique et cyclique.",
    notes: ["G", "A", "B", "C", "D", "E", "F", "G"],
    dotKeys: ["Sol:4","La:4","Si:4","Do:5","Ré:5","Mi:5","Fa:5","Sol:5"],
  },
  {
    id: "eolien",
    name: "Éolien",
    degree: 6,
    degreeLabel: "VI",
    rootExample: "A",
    structure: "T – ½T – T – T – ½T – T – T",
    alteration: "C'est la gamme mineure naturelle — le mode le plus utilisé après l'ionien",
    color: "#2D4A8A",
    bg: "#E8EEF8",
    emoji: "🌙",
    character: "Mélancolique, introspectif, naturel. La gamme mineure naturelle.",
    famous: "Stairway to Heaven – Led Zeppelin / Summertime – Gershwin / Losing My Religion – R.E.M.",
    famousDetail: "L'éolien est simplement la gamme mineure naturelle — issu du VIe degré de la gamme majeure. Toute musique en mineur naturel utilise ce mode. Il manque la sensible, ce qui le distingue du mineur harmonique.",
    notes: ["A", "B", "C", "D", "E", "F", "G", "A"],
    dotKeys: ["La:4","Si:4","Do:5","Ré:5","Mi:5","Fa:5","Sol:5","La:5"],
  },
  {
    id: "locrien",
    name: "Locrien",
    degree: 7,
    degreeLabel: "VII",
    rootExample: "B",
    structure: "½T – T – T – ½T – T – T – T",
    alteration: "Mineur avec 2de et 5te bémolisées — le mode le plus instable",
    color: "#555",
    bg: "#F0F0F0",
    emoji: "💀",
    character: "Très sombre, instable, dissonant. Rarement utilisé seul — surtout en métal et jazz avant-garde.",
    famous: "YYZ – Rush / utilisé ponctuellement dans le métal progressif",
    famousDetail: "La quinte diminuée (triton) entre la fondamentale et la quinte rend cet accord extrêmement instable. C'est le VIIe degré de la gamme majeure — Bdim en C majeur. Utilisé avec parcimonie pour des effets dramatiques extrêmes.",
    notes: ["B", "C", "D", "E", "F", "G", "A", "B"],
    dotKeys: ["Si:4","Do:5","Ré:5","Mi:5","Fa:5","Sol:5","La:5","Si:5"],
  },
];

// ── Accords caractéristiques de chaque mode ───────────────────────────────────

interface ModeChord {
  mode: string;
  triads: string;
  characteristic: string;
  progression: string;
}

const MODE_CHORDS: ModeChord[] = [
  { mode: "Ionien",     triads: "I – IIm – IIIm – IV – V – VIm – VIIdim", characteristic: "V7 (dominante active)", progression: "I – IV – V7 – I" },
  { mode: "Dorien",     triads: "Im – IIm – ♭III – IV – Vm – ♭VIdim – ♭VII", characteristic: "IV majeur (6te majeure)", progression: "Im – IV – Im" },
  { mode: "Phrygien",   triads: "Im – ♭II – ♭III – IVm – ♭Vdim – ♭VI – ♭VIIm", characteristic: "♭II (2de bémolisée)", progression: "Im – ♭II – Im" },
  { mode: "Lydien",     triads: "I – II – IIIm – #IVdim – V – VIm – VIIm", characteristic: "#IVdim (triton)", progression: "I – II – I" },
  { mode: "Mixolydien", triads: "I – IIm – IIIdim – IV – Vm – VIm – ♭VII", characteristic: "♭VII majeur (7te mineure)", progression: "I – ♭VII – IV – I" },
  { mode: "Éolien",     triads: "Im – IIdim – ♭III – IVm – Vm – ♭VI – ♭VII", characteristic: "♭VII majeur (sans sensible)", progression: "Im – ♭VI – ♭VII – Im" },
  { mode: "Locrien",    triads: "Idim – ♭II – ♭IIIm – IVm – ♭V – ♭VI – ♭VIIm", characteristic: "Idim (quinte diminuée)", progression: "Idim – ♭II – Idim" },
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
const SECTIONS_IDS = ["modes", "harmonie", "quiz"] as const;

const S = {
  wrap:     { fontFamily: "var(--font-sans, system-ui)", maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" } as React.CSSProperties,
  header:   { padding: "1.5rem 0 1rem", borderBottom: "0.5px solid #e5e5e5", marginBottom: "1.25rem" } as React.CSSProperties,
  badge:    { display: "inline-block", background: "#E6F1FB", color: "#185FA5", fontSize: 11, fontWeight: 500, padding: "2px 10px", borderRadius: 20, marginBottom: 6 } as React.CSSProperties,
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
  infoBox:  { borderLeft: "2px solid #185FA5", padding: "8px 14px", background: "#E6F1FB", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#0C447C", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
  tip:      { borderLeft: "2px solid #0F6E56", padding: "8px 14px", background: "#E1F5EE", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#085041", lineHeight: 1.6 } as React.CSSProperties,
};

export default function Cours10() {
  const [activeSection, setActiveSection] = useState<string>("modes");
  const i18n = useCoursI18n("cours10");
  const tc = i18n.tc;
  const n = (key: string) => tc(`narrative.${key}` as any);
  const tr = useTerm();
  const { questions: ALL_QUESTIONS } = useCoursContent(cours10Content);
  const [activeMode, setActiveMode] = useState<string | null>(null);

  const [quizQuestions] = useState(() => shuffle(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [quizIdx,      setQuizIdx]      = useState(0);
  const [quizScore,    setQuizScore]    = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizDone,     setQuizDone]     = useState(false);
  const [selectedOpt,  setSelectedOpt]  = useState<number | null>(null);

  const pianoRef = useRef<PianoPlayerRef>(null);

  const handlePlayMode = (mode: Mode) => {
    playScale(pianoRef as React.RefObject<PianoPlayerRef>, mode.dotKeys, 280);
  };

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
    if (id === "modes") return n("navModes");
    if (id === "harmonie") return n("navHarmonie");
    return n("navQuiz");
  };

  return (
    <div style={S.wrap}>
      {/* Piano caché */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={2} startOctave={4} showLabels={false} />
      </div>

      {/* Header */}
      <div style={S.header}>
        <span style={S.badge}>Niveau 2 · Cours 10</span>
        <h1 style={S.h1}>{tr("Les modes de la gamme majeure")}</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Miles Davis"
        period={n("maitrePeriod")}
        emoji="🎺"
        concept={n("maitreConcept")}
        anecdote={n("maitreAnecdote")}
        lesson={n("maitreLesson")}
        accentColor="#185FA5"
      />

      {/* Navigation */}
      <nav style={S.nav}>
        {SECTIONS_IDS.map(id => (
          <button key={id} style={S.pill(activeSection === id)} onClick={() => setActiveSection(id)}>
            {sectionLabel(id)}
          </button>
        ))}
      </nav>

      {/* ══ SECTION 1 : LES 7 MODES ══ */}
      {activeSection === "modes" && (
        <div>
          <h2 style={S.h2}>{n("modesH2")}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: n("modesIntro") }} />

          <div style={S.infoBox} dangerouslySetInnerHTML={{ __html: n("modesInfoBox") }} />

          <p style={{ fontSize: 13, color: "#888", marginBottom: 16 }}>
            {n("modesClickHint")}
          </p>

          {MODES.map(mode => (
            <div
              key={mode.id}
              onClick={() => {
                setActiveMode(activeMode === mode.id ? null : mode.id);
                handlePlayMode(mode);
              }}
              style={{
                border: `0.5px solid ${activeMode === mode.id ? mode.color : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 8,
                overflow: "hidden",
                cursor: "pointer",
                background: activeMode === mode.id ? mode.bg : "#fff",
                transition: "all .15s",
              }}
            >
              {/* Header mode */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px" }}>
                <div style={{ fontSize: 22, flexShrink: 0 }}>{mode.emoji}</div>
                <div style={{
                  fontSize: 11, fontWeight: 700, color: mode.color,
                  background: mode.bg, border: `0.5px solid ${mode.color}`,
                  padding: "2px 8px", borderRadius: 6, fontFamily: "monospace",
                  flexShrink: 0,
                }}>
                  {mode.degreeLabel}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>{mode.name}</span>
                    <span style={{ fontSize: 12, color: "#888" }}>{n("modeFromLabel")} {mode.rootExample}</span>
                  </div>
                  <div style={{ fontSize: 12, color: "#888", marginTop: 2, fontStyle: "italic" }}>{mode.character.split(".")[0]}</div>
                </div>
                <div style={{ fontSize: 11, color: "#bbb", fontFamily: "monospace", flexShrink: 0 }}>
                  {mode.notes.join(" ")}
                </div>
              </div>

              {/* Détail si sélectionné */}
              {activeMode === mode.id && (
                <div style={{ padding: "0 16px 16px", borderTop: `0.5px solid ${mode.color}20` }}>
                  {/* Structure */}
                  <div style={{ marginTop: 12, marginBottom: 12 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: mode.color, marginBottom: 6, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>
                      {n("modesDetailStructure")}
                    </div>
                    <div style={{ fontFamily: "monospace", fontSize: 13, color: "#444", background: "#f8f8f8", padding: "6px 10px", borderRadius: 6 }}>
                      {mode.structure}
                    </div>
                  </div>

                  {/* Note caractéristique */}
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: mode.color, marginBottom: 4, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>{n("modesDetailCharacteristic")}</div>
                    <div style={{ fontSize: 13, color: "#444" }}>{mode.alteration}</div>
                  </div>

                  {/* Couleur émotionnelle */}
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: mode.color, marginBottom: 4, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>
                      {n("modesDetailColor")}
                    </div>
                    <div style={{ fontSize: 13, color: "#444", lineHeight: 1.6 }}>{mode.character}</div>
                  </div>

                  {/* Exemples musicaux */}
                  <div style={{ marginBottom: 14 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: mode.color, marginBottom: 4, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>{n("modesDetailFamous")}</div>
                    <div style={{ fontSize: 13, color: "#185FA5", fontWeight: 500, marginBottom: 4 }}>{mode.famous}</div>
                    <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>{mode.famousDetail}</div>
                  </div>

                  <button
                    onClick={e => { e.stopPropagation(); handlePlayMode(mode); }}
                    style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${mode.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: mode.color }}
                  >
                    {n("modesRelistenBtn")} {mode.name}
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* Tableau récap */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "24px 0 8px", color: "#111" }}>{n("modesRecapTitle")}</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {[n("modesTableDegree"), n("modesTableMode"), n("modesTableColor"), n("modesTableAlteration"), n("modesTableEmotion")].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 10px", fontWeight: 500, color: "#666", whiteSpace: "nowrap" as const }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MODES.map((m, i) => (
                  <tr key={m.id} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "7px 10px", fontFamily: "monospace", color: m.color, fontWeight: 700 }}>{m.degreeLabel}</td>
                    <td style={{ padding: "7px 10px", fontWeight: 500 }}>{m.name} {m.emoji}</td>
                    <td style={{ padding: "7px 10px", color: "#555", fontStyle: "italic" as const }}>
                      {m.id === "ionien" || m.id === "lydien" || m.id === "mixolydien" ? n("modesColorMajeur") : m.id === "locrien" ? n("modesColorDim") : n("modesColorMineur")}
                    </td>
                    <td style={{ padding: "7px 10px", fontFamily: "monospace", fontSize: 11, color: "#888" }}>
                      {m.id === "ionien" ? "—" :
                       m.id === "dorien" ? "♭3, ♭7, ♮6" :
                       m.id === "phrygien" ? "♭2, ♭3, ♭6, ♭7" :
                       m.id === "lydien" ? "#4" :
                       m.id === "mixolydien" ? "♭7" :
                       m.id === "eolien" ? "♭3, ♭6, ♭7" :
                       "♭2, ♭3, ♭5, ♭6, ♭7"}
                    </td>
                    <td style={{ padding: "7px 10px", color: "#666", fontSize: 11 }}>{m.character.split(".")[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ══ SECTION 2 : HARMONIE MODALE ══ */}
      {activeSection === "harmonie" && (
        <div>
          <h2 style={S.h2}>{n("harmonieH2")}</h2>
          <p style={S.p}>
            {n("harmonieIntro")}
          </p>

          <div style={S.infoBox} dangerouslySetInnerHTML={{ __html: n("harmonieInfoBox") }} />

          {/* Accords par mode */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 12px", color: "#111" }}>
            {n("harmonieChordTitle")}
          </h3>

          {MODE_CHORDS.map((mc, i) => {
            const mode = MODES.find(m => m.name === mc.mode)!;
            return (
              <div key={mc.mode} style={{
                border: "0.5px solid #e5e5e5",
                borderRadius: 10,
                marginBottom: 8,
                padding: "14px 16px",
                background: i % 2 === 0 ? "#fff" : "#fafafa",
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12, flexWrap: "wrap" as const }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, minWidth: 120 }}>
                    <span style={{ fontSize: 16 }}>{mode.emoji}</span>
                    <span style={{ fontSize: 14, fontWeight: 500, color: mode.color }}>{mc.mode}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, fontFamily: "monospace", color: "#555", marginBottom: 6 }}>
                      {mc.triads}
                    </div>
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" as const }}>
                      <div>
                        <span style={{ fontSize: 11, color: "#888" }}>{n("harmonieChordChar")} </span>
                        <span style={{ fontSize: 12, fontWeight: 500, color: mode.color, fontFamily: "monospace" }}>{mc.characteristic}</span>
                      </div>
                      <div>
                        <span style={{ fontSize: 11, color: "#888" }}>{n("harmonieChordProg")} </span>
                        <span style={{ fontSize: 12, fontWeight: 500, color: "#333", fontFamily: "monospace" }}>{mc.progression}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Progressions modales emblématiques */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "24px 0 12px", color: "#111" }}>{n("harmonieProgTitle")}</h3>

          {[
            {
              mode: "Dorien", emoji: "🌊", color: "#185FA5", bg: "#E6F1FB",
              prog: "Im – IV – Im – IV",
              example: "Dm – G – Dm – G (D dorien)",
              desc: "L'accord IV majeur (G en D dorien) est la marque harmonique du dorien. Im – IV oscille sans résolution — c'est la couleur jazz-modal.",
            },
            {
              mode: "Phrygien", emoji: "🔥", color: "#993C1D", bg: "#FAECE7",
              prog: "Im – ♭II – Im",
              example: "Em – F – Em (E phrygien)",
              desc: "La cadence phrygienne ♭II → Im est l'ADN du flamenco. Le mouvement F → E crée cette tension méditerranéenne unique.",
            },
            {
              mode: "Lydien", emoji: "✨", color: "#6B3FA0", bg: "#F0EAFA",
              prog: "I – II – I",
              example: "F – G – F (F lydien)",
              desc: "La progression I – II en lydien (F – G) est possible grâce au #4. Ce mouvement de seconde montante crée la couleur onirique caractéristique.",
            },
            {
              mode: "Mixolydien", emoji: "🎸", color: "#BA7517", bg: "#FAEEDA",
              prog: "I – ♭VII – IV – I",
              example: "G – F – C – G (G mixolydien)",
              desc: "La progression rock par excellence. Le ♭VII (F en G mixolydien) crée un accord de sous-dominante sans résolution de sensible — énergie pure.",
            },
            {
              mode: "Éolien", emoji: "🌙", color: "#2D4A8A", bg: "#E8EEF8",
              prog: "Im – ♭VI – ♭VII – Im",
              example: "Am – F – G – Am (A éolien)",
              desc: "La progression mineure naturelle la plus courante en pop et rock. Sans sensible, elle ne résout pas — elle oscille dans la mélancolie.",
            },
          ].map(item => (
            <div key={item.mode} style={{
              border: `0.5px solid ${item.color}40`,
              borderRadius: 10,
              marginBottom: 10,
              padding: "14px 16px",
              background: item.bg,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <span style={{ fontSize: 18 }}>{item.emoji}</span>
                <span style={{ fontSize: 14, fontWeight: 500, color: item.color }}>{item.mode}</span>
                <span style={{ fontSize: 13, fontFamily: "monospace", color: item.color, background: "white", padding: "2px 8px", borderRadius: 6, border: `0.5px solid ${item.color}` }}>
                  {item.prog}
                </span>
              </div>
              <div style={{ fontSize: 13, fontFamily: "monospace", color: "#444", marginBottom: 6 }}>{item.example}</div>
              <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}

          <div style={S.warnBox} dangerouslySetInnerHTML={{ __html: n("harmonieWarnBox") }} />
        </div>
      )}

      {/* ══ SECTION 3 : QUIZ ══ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.h2}>{n("quizH2")}</h2>

          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 8 ? "🎹" : quizScore >= 6 ? "👍" : "💪"}
              </div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>
                {n("quizScoreLabel")} {quizScore} / {QUIZ_COUNT}
              </div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
                {quizScore >= 8 ? n("quizFeedbackExcellent") :
                 quizScore >= 6 ? n("quizFeedbackGood") :
                 n("quizFeedbackKeepGoing")}
              </div>
              <button
                onClick={resetQuiz}
                style={{ fontSize: 13, padding: "8px 20px", border: "0.5px solid #185FA5", borderRadius: 20, cursor: "pointer", background: "#E6F1FB", color: "#185FA5" }}
              >{n("quizNewBtn")}</button>
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
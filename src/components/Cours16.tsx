"use client";

/**
 * Cours16.tsx
 * Harmonia · Niveau 2 · Cours 16 — La réharmonisation
 * Convention : affichage anglais, dotKeys PianoPlayer français
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { useTerm } from "@/hooks/useTerm";
import { cours16Content } from "@/data/cours16Content";
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

// Basic II–V–I in C
const DM7:    string[] = ["Ré:3","Fa:3","La:3","Do:4"];          // D F A C
const G7:     string[] = ["Sol:3","Si:3","Ré:4","Fa:4"];          // G B D F
const CMAJ7:  string[] = ["Do:3","Mi:3","Sol:3","Si:3"];          // C E G B

// Diatonic substitutes
const AM7:    string[] = ["La:3","Do:4","Mi:4","Sol:4"];          // A C E G  (VIm7)
const EM7:    string[] = ["Mi:3","Sol:3","Si:3","Ré:4"];          // E G B D  (IIIm7)
const FMAJ7:  string[] = ["Fa:3","La:3","Do:4","Mi:4"];           // F A C E  (IVMaj7)

// Tritone substitutes
const DB7:    string[] = ["Réb:3","Fa:3","Lab:3","Si:3"];         // Db F Ab Cb(=B)

// Modal borrows from C minor
const FM:     string[] = ["Fa:3","Lab:3","Do:4","Mib:4"];         // F Ab C Eb  (IVm)
const ABMAJ7: string[] = ["Lab:3","Do:4","Mib:4","Sol:4"];        // Ab C Eb G  (bVIMaj7)

// Parallel harmonization
const DBMAJ7: string[] = ["Réb:3","Fa:3","Lab:3","Do:4"];         // Db F Ab C
const DMAJ7:  string[] = ["Ré:3","Fa#:3","La:3","Do#:4"];        // D F# A C#

// Extensions (Evans style)
const DM9:    string[] = ["Ré:3","Fa:3","La:3","Do:4","Mi:4"];   // D F A C E
const G13:    string[] = ["Sol:2","Si:3","Mi:4","Fa:4"];           // G B E F (root,3,13,b7)
const CMAJ9:  string[] = ["Do:3","Mi:3","Sol:3","Si:3","Ré:4"];  // C E G B D

// ── Technique data ────────────────────────────────────────────────────────────

interface Technique {
  id: string;
  name: string;
  color: string;
  bg: string;
  rule: string;
  example: string;
  description: string;
  tip: string;
  originalLabel: string;
  originalChords: string[][];
  reharmLabel: string;
  reharmChords: string[][];
}

const TECHNIQUES: Technique[] = [
  {
    id: "diatonique",
    name: "techniqueDiatoniqueName",
    color: "#185FA5",
    bg: "#E6F1FB",
    rule: "I ↔ VI  ·  II ↔ IV",
    example: "CMaj7 → Am7  ·  Dm7 → FMaj7",
    description: "techniqueDiatoniqueDescription",
    tip: "techniqueDiatoniqueTip",
    originalLabel: "Dm7 – G7 – CMaj7",
    originalChords: [DM7, G7, CMAJ7],
    reharmLabel: "Dm7 – G7 – Am7  (I → VI)",
    reharmChords: [DM7, G7, AM7],
  },
  {
    id: "tritonique",
    name: "techniqueTritoniqueName",
    color: "#7B1F1F",
    bg: "#FCEAEA",
    rule: "V7 → ♭II7  (un triton plus bas)",
    example: "G7 → Db7  ·  D7 → Ab7",
    description: "techniqueTritoniqueDescription",
    tip: "techniqueTritoniqueTip",
    originalLabel: "Dm7 – G7 – CMaj7",
    originalChords: [DM7, G7, CMAJ7],
    reharmLabel: "Dm7 – Db7 – CMaj7  (V7 → ♭II7)",
    reharmChords: [DM7, DB7, CMAJ7],
  },
  {
    id: "modal",
    name: "techniqueModalName",
    color: "#0F6E56",
    bg: "#E1F5EE",
    rule: "IV → IVm  ·  I → Im  ·  bVI  ·  bVII",
    example: "FMaj7 → Fm  ·  I → bVIMaj7",
    description: "techniqueModalDescription",
    tip: "techniqueModalTip",
    originalLabel: "CMaj7 – FMaj7 – G7 – CMaj7",
    originalChords: [CMAJ7, FMAJ7, G7, CMAJ7],
    reharmLabel: "CMaj7 – Fm – G7 – CMaj7  (IV → IVm)",
    reharmChords: [CMAJ7, FM, G7, CMAJ7],
  },
  {
    id: "parallele",
    name: "techniqueParalleleName",
    color: "#6B3FA0",
    bg: "#F0EAFA",
    rule: "Même type d'accord, mouvement chromatique",
    example: "CMaj7 – DbMaj7 – DMaj7",
    description: "techniqueParalleleDescription",
    tip: "techniqueParalleleTip",
    originalLabel: "CMaj7 – Dm7 – Em7",
    originalChords: [CMAJ7, DM7, EM7],
    reharmLabel: "CMaj7 – DbMaj7 – DMaj7  (parallèle chromatique)",
    reharmChords: [CMAJ7, DBMAJ7, DMAJ7],
  },
];

// ── Comparison data ───────────────────────────────────────────────────────────

interface Comparison {
  id: string;
  technique: string;
  techniqueColor: string;
  originalLabel: string;
  reharmLabel: string;
  note: string;
  originalChords: string[][];
  reharmChords: string[][];
}

const COMPARISONS: Comparison[] = [
  {
    id: "tritonsub",
    technique: "compTritonsubTechnique",
    techniqueColor: "#7B1F1F",
    originalLabel: "Dm7 – G7 – CMaj7",
    reharmLabel: "Dm7 – Db7 – CMaj7",
    note: "compTritonsubNote",
    originalChords: [DM7, G7, CMAJ7],
    reharmChords: [DM7, DB7, CMAJ7],
  },
  {
    id: "modalborrow",
    technique: "compModalborrowTechnique",
    techniqueColor: "#0F6E56",
    originalLabel: "CMaj7 – FMaj7 – G7 – CMaj7",
    reharmLabel: "CMaj7 – Fm – G7 – CMaj7",
    note: "compModalborrowNote",
    originalChords: [CMAJ7, FMAJ7, G7, CMAJ7],
    reharmChords: [CMAJ7, FM, G7, CMAJ7],
  },
  {
    id: "extensions",
    technique: "compExtensionsTechnique",
    techniqueColor: "#185FA5",
    originalLabel: "Dm7 – G7 – CMaj7",
    reharmLabel: "Dm9 – G13 – CMaj9",
    note: "compExtensionsNote",
    originalChords: [DM7, G7, CMAJ7],
    reharmChords: [DM9, G13, CMAJ9],
  },
  {
    id: "diatonic",
    technique: "compDiatonicTechnique",
    techniqueColor: "#185FA5",
    originalLabel: "Dm7 – G7 – CMaj7",
    reharmLabel: "Dm7 – G7 – Am7",
    note: "compDiatonicNote",
    originalChords: [DM7, G7, CMAJ7],
    reharmChords: [DM7, G7, AM7],
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
const SECTIONS_IDS = ["principe", "application", "quiz"] as const;
type SectionId = typeof SECTIONS_IDS[number];

const PRIMARY    = "#1A4A7A";
const PRIMARY_BG = "#E6EFF8";

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
  infoBox:  { borderLeft: `2px solid ${PRIMARY}`, padding: "8px 14px", background: PRIMARY_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#0D2D4F", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
  tip:      { borderLeft: "2px solid #0F6E56", padding: "8px 14px", background: "#E1F5EE", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#085041", lineHeight: 1.6 } as React.CSSProperties,
};

export default function Cours16() {
  const [activeSection, setActiveSection] = useState<SectionId>("principe");
  const i18n = useCoursI18n("cours16");
  const tc = i18n.tc;
  const n = (key: string) => tc(`narrative.${key}` as any);
  const tr = useTerm();
  const { questions: ALL_QUESTIONS } = useCoursContent(cours16Content);
  const [activeTechnique, setActiveTechnique]   = useState<string | null>(null);
  const [activeComparison, setActiveComparison] = useState<string | null>(null);

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
    if (id === "principe")    return n("navPrincipe");
    if (id === "application") return n("navApplication");
    return n("navEntrainement");
  };

  return (
    <div style={S.wrap}>
      {/* Piano caché */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={3} startOctave={2} showLabels={false} />
      </div>

      {/* Header */}
      <div style={S.header}>
        <span style={S.badge}>{n("badgeLevel")}</span>
        <h1 style={S.h1}>{tr("La réharmonisation")}</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Bill Evans"
        period={n("maitreCardPeriod")}
        emoji="🎹"
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

      {/* ══ SECTION 1 : LE PRINCIPE ══ */}
      {activeSection === "principe" && (
        <div>
          <h2 style={S.h2}>{n("principleH2")}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: n("principleP1") }} />
          <div style={S.infoBox} dangerouslySetInnerHTML={{ __html: n("principleInfoBox") }} />

          <h3 style={S.h3}>{n("principleH3Techniques")}</h3>
          {TECHNIQUES.map(tech => (
            <div
              key={tech.id}
              style={{
                border: `0.5px solid ${activeTechnique === tech.id ? tech.color : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 10,
                overflow: "hidden",
                cursor: "pointer",
                background: activeTechnique === tech.id ? tech.bg : "#fff",
                transition: "all .15s",
              }}
              onClick={() => setActiveTechnique(activeTechnique === tech.id ? null : tech.id)}
            >
              {/* Header de la carte */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "#111", marginBottom: 2 }}>
                    {n(tech.name)}
                  </div>
                  <div style={{ fontFamily: "monospace", fontSize: 12, color: tech.color }}>
                    {tech.rule}  ·  {tech.example}
                  </div>
                </div>
                <div style={{ fontSize: 11, color: "#bbb" }}>{activeTechnique === tech.id ? "▲" : "▼"}</div>
              </div>

              {/* Contenu développé */}
              {activeTechnique === tech.id && (
                <div style={{ padding: "0 16px 16px", borderTop: `0.5px solid ${tech.color}20` }}>
                  <p style={{ ...S.p, marginTop: 12 }}>{n(tech.description)}</p>
                  <div style={{ ...S.tip, marginBottom: 14 }}>
                    <strong>{n("techniqueTipPrefix")}</strong> {n(tech.tip)}
                  </div>

                  {/* Avant / Après audio */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                    <div style={{ background: "#fafafa", border: "0.5px solid #e5e5e5", borderRadius: 8, padding: "10px 12px" }}>
                      <div style={{ fontSize: 11, color: "#999", marginBottom: 4 }}>{n("techniqueOriginalLabel")}</div>
                      <div style={{ fontFamily: "monospace", fontSize: 12, color: "#444", marginBottom: 8 }}>
                        {tech.originalLabel}
                      </div>
                      <button
                        onClick={e => {
                          e.stopPropagation();
                          playProg(pianoRef as React.RefObject<PianoPlayerRef>, tech.originalChords, 1600, 1.5);
                        }}
                        style={{ fontSize: 11, padding: "4px 12px", border: "0.5px solid #ccc", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#666" }}
                      >
                        {n("techniqueListenBtn")}
                      </button>
                    </div>
                    <div style={{ background: tech.bg, border: `0.5px solid ${tech.color}40`, borderRadius: 8, padding: "10px 12px" }}>
                      <div style={{ fontSize: 11, color: tech.color, marginBottom: 4 }}>{tr("Réharmonisé")}</div>
                      <div style={{ fontFamily: "monospace", fontSize: 12, color: tech.color, marginBottom: 8 }}>
                        {tech.reharmLabel}
                      </div>
                      <button
                        onClick={e => {
                          e.stopPropagation();
                          playProg(pianoRef as React.RefObject<PianoPlayerRef>, tech.reharmChords, 1600, 1.5);
                        }}
                        style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${tech.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: tech.color }}
                      >
                        {n("techniqueListenBtn")}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          <div style={S.warnBox} dangerouslySetInnerHTML={{ __html: n("principleWarnBox") }} />
        </div>
      )}

      {/* ══ SECTION 2 : APPLICATIONS ══ */}
      {activeSection === "application" && (
        <div>
          <h2 style={S.h2}>{n("applicationH2")}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: n("applicationP1") }} />

          {/* Tableau comparatif */}
          <h3 style={S.h3}>{n("applicationH3Comparisons")}</h3>
          {COMPARISONS.map(cmp => (
            <div
              key={cmp.id}
              style={{
                border: `0.5px solid ${activeComparison === cmp.id ? cmp.techniqueColor : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 10,
                overflow: "hidden",
                cursor: "pointer",
                background: activeComparison === cmp.id ? "#fafafa" : "#fff",
                transition: "all .15s",
              }}
              onClick={() => setActiveComparison(activeComparison === cmp.id ? null : cmp.id)}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: cmp.techniqueColor, marginBottom: 2, letterSpacing: "0.04em" }}>
                    {n(cmp.technique)}
                  </div>
                  <div style={{ fontFamily: "monospace", fontSize: 12, color: "#888" }}>
                    {cmp.originalLabel} <span style={{ color: "#ccc" }}>→</span>{" "}
                    <span style={{ color: cmp.techniqueColor }}>{cmp.reharmLabel}</span>
                  </div>
                </div>
                <div style={{ fontSize: 11, color: "#bbb" }}>{activeComparison === cmp.id ? "▲" : "▼"}</div>
              </div>

              {activeComparison === cmp.id && (
                <div style={{ padding: "0 16px 14px", borderTop: `0.5px solid ${cmp.techniqueColor}20` }}>
                  <div style={{ fontSize: 13, color: "#666", margin: "10px 0 14px", lineHeight: 1.6 }}>
                    {n(cmp.note)}
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                    <div style={{ background: "#fafafa", border: "0.5px solid #e5e5e5", borderRadius: 8, padding: "10px 12px" }}>
                      <div style={{ fontSize: 11, color: "#999", marginBottom: 4 }}>{n("techniqueOriginalLabel")}</div>
                      <div style={{ fontFamily: "monospace", fontSize: 12, color: "#444", marginBottom: 8 }}>{cmp.originalLabel}</div>
                      <button
                        onClick={e => {
                          e.stopPropagation();
                          playProg(pianoRef as React.RefObject<PianoPlayerRef>, cmp.originalChords, 1600, 1.5);
                        }}
                        style={{ fontSize: 11, padding: "4px 12px", border: "0.5px solid #ccc", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#666" }}
                      >
                        {n("applicationOriginalBtn")}
                      </button>
                    </div>
                    <div style={{ background: "#f0f4f8", border: `0.5px solid ${cmp.techniqueColor}40`, borderRadius: 8, padding: "10px 12px" }}>
                      <div style={{ fontSize: 11, color: cmp.techniqueColor, marginBottom: 4 }}>{tr("Réharmonisé")}</div>
                      <div style={{ fontFamily: "monospace", fontSize: 12, color: cmp.techniqueColor, marginBottom: 8 }}>{cmp.reharmLabel}</div>
                      <button
                        onClick={e => {
                          e.stopPropagation();
                          playProg(pianoRef as React.RefObject<PianoPlayerRef>, cmp.reharmChords, 1600, 1.5);
                        }}
                        style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${cmp.techniqueColor}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: cmp.techniqueColor }}
                      >
                        {n("applicationReharmBtn")}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Pianistes célèbres */}
          <h3 style={S.h3}>{n("applicationH3Pianists")}</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: "1.5rem" }}>
            {[
              { name: "Bill Evans", worksKey: "pianistEvansWorks", styleKey: "pianistEvansStyle", color: PRIMARY, bg: PRIMARY_BG },
              { name: "Keith Jarrett", worksKey: "pianistJarrettWorks", styleKey: "pianistJarrettStyle", color: "#0F6E56", bg: "#E1F5EE" },
              { name: "Brad Mehldau", worksKey: "pianistMehldauWorks", styleKey: "pianistMehldauStyle", color: "#6B3FA0", bg: "#F0EAFA" },
              { name: "John Coltrane", worksKey: "pianistColtraneWorks", styleKey: "pianistColtraneStyle", color: "#7B1F1F", bg: "#FCEAEA" },
            ].map(({ name, worksKey, styleKey, color, bg }) => (
              <div key={name} style={{ border: `0.5px solid ${color}40`, borderRadius: 10, padding: "14px 16px", background: bg }}>
                <div style={{ fontSize: 13, fontWeight: 500, color, marginBottom: 4 }}>{name}</div>
                <div style={{ fontSize: 11, color: "#888", marginBottom: 6, fontStyle: "italic" }}>{n(worksKey)}</div>
                <div style={{ fontSize: 12, color: "#555", lineHeight: 1.6 }}>{n(styleKey)}</div>
              </div>
            ))}
          </div>

          {/* Réharm par blocs vs complète */}
          <div style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "16px", marginBottom: "1rem" }}>
            <div style={{ fontSize: 14, fontWeight: 500, color: "#111", marginBottom: 12 }}>
              {n("applicationBlocTitle")}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 500, color: "#555", marginBottom: 6 }}>{n("applicationBlocLabel")}</div>
                <div style={{ fontSize: 12, color: "#777", lineHeight: 1.6 }}>
                  {n("applicationBlocText")}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 500, color: "#555", marginBottom: 6 }}>{n("applicationCompleteLabel")}</div>
                <div style={{ fontSize: 12, color: "#777", lineHeight: 1.6 }}>
                  {n("applicationCompleteText")}
                </div>
              </div>
            </div>
          </div>

          <div style={S.tip} dangerouslySetInnerHTML={{ __html: n("applicationTipBox") }} />
        </div>
      )}

      {/* ══ SECTION 3 : QUIZ ══ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.h2}>{tr("Entraînement")}</h2>
          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 8 ? "🎹" : quizScore >= 6 ? "👍" : "💪"}
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
                {n("quizProgress").replace("{idx}", String(quizIdx + 1)).replace("{total}", String(QUIZ_COUNT))}
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
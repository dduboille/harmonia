"use client";

/**
 * Cours36.tsx
 * Harmonia · Niveau 5 · Cours 36 — Harmonie de Debussy et Ravel : l'impressionnisme approfondi
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { cours36Content } from "@/data/cours36Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";
import { VueConservatoire } from "@/components/VueConservatoire";
import { CONSERVATOIRE_DATA_36 } from "@/data/conservatoireData36";

function playScale(ref: React.RefObject<PianoPlayerRef>, notes: string[], gap = 400) {
  notes.forEach((key, i) => {
    const [note, octStr] = key.split(":");
    setTimeout(() => ref.current?.playNote(note, parseInt(octStr), { duration: 1.4 }), i * gap);
  });
}

function playChord(ref: React.RefObject<PianoPlayerRef>, notes: string[]) {
  notes.forEach((key) => {
    const [note, octStr] = key.split(":");
    ref.current?.playNote(note, parseInt(octStr), { duration: 2.0 });
  });
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Types ─────────────────────────────────────────────────────────────────────

interface TechniqueCard {
  nom: string;
  principe: string;
  effet: string;
  dotKeys?: string[];
  scale?: boolean;
}

// ── Navigation ─────────────────────────────────────────────────────────────────

const SECTIONS_IDS = ["debussy", "ravel", "conservatoire", "quiz"] as const;
const QUIZ_COUNT = 10;

const ACCENT = "#0A3D4A";
const ACCENT_BG = "#E8F3F5";

const S = {
  wrap:     { fontFamily: "var(--font-sans, system-ui)", maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" } as React.CSSProperties,
  header:   { padding: "1.5rem 0 1rem", borderBottom: "0.5px solid #e5e5e5", marginBottom: "1.25rem" } as React.CSSProperties,
  badge:    { display: "inline-block", background: ACCENT_BG, color: ACCENT, fontSize: 11, fontWeight: 500, padding: "2px 10px", borderRadius: 20, marginBottom: 6 } as React.CSSProperties,
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
  infoBox:  { borderLeft: `2px solid ${ACCENT}`, padding: "8px 14px", background: ACCENT_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#061E24", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
};

function TechniqueRow({ t, pianoRef, accent, accentBg, listenLabel }: {
  t: TechniqueCard;
  pianoRef: React.RefObject<PianoPlayerRef>;
  accent: string;
  accentBg: string;
  listenLabel: string;
}) {
  return (
    <div style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "14px 16px", background: "#fff" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" as const }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: accent, marginBottom: 4 }}>{t.nom}</div>
          <div style={{ fontFamily: "monospace", fontSize: 12, color: accent, background: accentBg, padding: "3px 8px", borderRadius: 4, display: "inline-block", marginBottom: 6 }}>
            {t.principe}
          </div>
          <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>{t.effet}</div>
        </div>
        {t.dotKeys && (
          <button
            onClick={() => t.scale
              ? playScale(pianoRef, t.dotKeys!, 280)
              : playChord(pianoRef, t.dotKeys!)
            }
            style={{ fontSize: 11, padding: "5px 12px", border: `0.5px solid ${accent}`, borderRadius: 16, cursor: "pointer", background: accentBg, color: accent, flexShrink: 0 }}
          >
            {listenLabel}
          </button>
        )}
      </div>
    </div>
  );
}

export default function Cours36() {
  const [activeSection, setActiveSection] = useState<string>("debussy");
  const i18n = useCoursI18n("cours36");
  const { tc } = i18n;
  const n = (key: string) => tc(`narrative.${key}` as any);
  const { questions: ALL_QUESTIONS } = useCoursContent(cours36Content);

  const [quizQuestions] = useState(() => shuffle(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [quizIdx,      setQuizIdx]      = useState(0);
  const [quizScore,    setQuizScore]    = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizDone,     setQuizDone]     = useState(false);
  const [selectedOpt,  setSelectedOpt]  = useState<number | null>(null);

  const pianoRef = useRef<PianoPlayerRef>(null);

  // ── Data arrays (moved inside component to use n()) ──────────────────────

  const TECHNIQUES_DEBUSSY: TechniqueCard[] = [
    {
      nom:      n("tech_d0_nom"),
      principe: n("tech_d0_principe"),
      effet:    n("tech_d0_effet"),
      dotKeys:  ["Do:3","Ré:3","Mi:3","Fa#:3","Sol#:3","La#:3"],
      scale:    true,
    },
    {
      nom:      n("tech_d1_nom"),
      principe: n("tech_d1_principe"),
      effet:    n("tech_d1_effet"),
      dotKeys:  ["Do:3","Ré:3","Mib:3","Fa:3","Fa#:3","Sol#:3","La:3","Si:3"],
      scale:    true,
    },
    {
      nom:      n("tech_d2_nom"),
      principe: n("tech_d2_principe"),
      effet:    n("tech_d2_effet"),
      dotKeys:  ["Do:3","Mi:3","Sol:3"],
    },
    {
      nom:      n("tech_d3_nom"),
      principe: n("tech_d3_principe"),
      effet:    n("tech_d3_effet"),
      dotKeys:  ["Do:2","Do:2","Do:2"],
      scale:    true,
    },
    {
      nom:      n("tech_d4_nom"),
      principe: n("tech_d4_principe"),
      effet:    n("tech_d4_effet"),
      dotKeys:  ["Do:3","Sol:3"],
    },
  ];

  const TECHNIQUES_RAVEL: TechniqueCard[] = [
    {
      nom:      n("tech_r0_nom"),
      principe: n("tech_r0_principe"),
      effet:    n("tech_r0_effet"),
      dotKeys:  ["Do:3","Mi:3","Sol:3","Ré:4","Fa#:4","La:4"],
    },
    {
      nom:      n("tech_r1_nom"),
      principe: n("tech_r1_principe"),
      effet:    n("tech_r1_effet"),
      dotKeys:  ["Do:3","Mi:3","Sol:3","La:3"],
    },
    {
      nom:      n("tech_r2_nom"),
      principe: n("tech_r2_principe"),
      effet:    n("tech_r2_effet"),
      dotKeys:  ["Do:3","Mi:3","Sol:3","Ré:4"],
    },
    {
      nom:      n("tech_r3_nom"),
      principe: n("tech_r3_principe"),
      effet:    n("tech_r3_effet"),
      dotKeys:  ["Sol:3","La:3","Sib:3","Do:4","Ré:4","Mi:4","Fa:4","Sol:4"],
      scale:    true,
    },
    {
      nom:      n("tech_r4_nom"),
      principe: n("tech_r4_principe"),
      effet:    n("tech_r4_effet"),
      dotKeys:  ["Do:3","Mi:3","Sol:3","Sib:3"],
    },
  ];

  const ANALYSE_STEPS = [
    { n: "1", label: n("step1_label"), desc: n("step1_desc") },
    { n: "2", label: n("step2_label"), desc: n("step2_desc") },
    { n: "3", label: n("step3_label"), desc: n("step3_desc") },
    { n: "4", label: n("step4_label"), desc: n("step4_desc") },
  ];

  // ── Quiz handlers ──────────────────────────────────────────────────────────

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

  return (
    <div style={S.wrap}>
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={4} startOctave={2} showLabels={false} />
      </div>

      <div style={S.header}>
        <span style={S.badge}>{i18n.badge}</span>
        <h1 style={S.h1}>{i18n.title}</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Erik Satie"
        period="1866–1925"
        emoji="🌊"
        concept={n("maitreCardConcept")}
        anecdote={n("maitreCardAnecdote")}
        lesson={n("maitreCardLesson")}
        accentColor={ACCENT}
      />

      <nav style={S.nav}>
        {SECTIONS_IDS.map(id => (
          <button key={id} style={S.pill(activeSection === id)} onClick={() => setActiveSection(id)}>
            {i18n.sectionLabel(id)}
          </button>
        ))}
      </nav>

      {/* ══ SECTION 1 : DEBUSSY ══ */}
      {activeSection === "debussy" && (
        <div>
          <h2 style={S.h2}>{n("debussyH2")}</h2>
          <p style={S.p}>{n("debussyP")}</p>

          <div style={S.infoBox} dangerouslySetInnerHTML={{ __html: n("debussyInfoBox") }} />

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 12px", color: "#111" }}>
            {n("debussyH3Techniques")}
          </h3>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 10, marginBottom: 24 }}>
            {TECHNIQUES_DEBUSSY.map((t, i) => (
              <TechniqueRow key={i} t={t} pianoRef={pianoRef as React.RefObject<PianoPlayerRef>} accent={ACCENT} accentBg={ACCENT_BG} listenLabel={n("ecouter")} />
            ))}
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "0 0 12px", color: "#111" }}>
            {n("debussyH3Analyser")}
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8, marginBottom: 20 }}>
            {ANALYSE_STEPS.map(step => (
              <div key={step.n} style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "12px 14px", background: "#fff" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: ACCENT, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>
                    {step.n}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#111" }}>{step.label}</div>
                </div>
                <div style={{ fontSize: 12, color: "#666", lineHeight: 1.55 }}>{step.desc}</div>
              </div>
            ))}
          </div>

          <div style={S.warnBox} dangerouslySetInnerHTML={{ __html: n("debussyWarnBox") }} />
        </div>
      )}

      {/* ══ SECTION 2 : RAVEL ══ */}
      {activeSection === "ravel" && (
        <div>
          <h2 style={S.h2}>{n("ravelH2")}</h2>
          <p style={S.p}>{n("ravelP")}</p>

          <div style={S.infoBox} dangerouslySetInnerHTML={{ __html: n("ravelInfoBox") }} />

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 12px", color: "#111" }}>
            {n("ravelH3Techniques")}
          </h3>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 10, marginBottom: 24 }}>
            {TECHNIQUES_RAVEL.map((t, i) => (
              <TechniqueRow key={i} t={t} pianoRef={pianoRef as React.RefObject<PianoPlayerRef>} accent={ACCENT} accentBg={ACCENT_BG} listenLabel={n("ecouter")} />
            ))}
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "0 0 12px", color: "#111" }}>
            {n("ravelH3Satie")}
          </h3>
          <div style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "16px 18px", background: "#fff", marginBottom: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: ACCENT, marginBottom: 6 }}>{n("satieName")}</div>
            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7, marginBottom: 10 }}
               dangerouslySetInnerHTML={{ __html: n("satieP") }} />
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" as const }}>
              <div style={{ flex: 1, minWidth: 200 }}>
                <div style={{ fontSize: 12, color: "#888", marginBottom: 4 }}>{n("satieAccord1Label")}</div>
                <button onClick={() => playChord(pianoRef as React.RefObject<PianoPlayerRef>, ["Ré:3","Fa#:3","La:3","Do#:4"])}
                  style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${ACCENT}`, borderRadius: 14, cursor: "pointer", background: ACCENT_BG, color: ACCENT }}>
                  {n("satieAccord1Btn")}
                </button>
              </div>
              <div style={{ flex: 1, minWidth: 200 }}>
                <div style={{ fontSize: 12, color: "#888", marginBottom: 4 }}>{n("satieAccord2Label")}</div>
                <button onClick={() => playChord(pianoRef as React.RefObject<PianoPlayerRef>, ["Sol:3","Si:3","Ré:4","Fa#:4"])}
                  style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${ACCENT}`, borderRadius: 14, cursor: "pointer", background: ACCENT_BG, color: ACCENT }}>
                  {n("satieAccord2Btn")}
                </button>
              </div>
            </div>
          </div>

          <div style={S.warnBox} dangerouslySetInnerHTML={{ __html: n("ravelWarnBox") }} />
        </div>
      )}

      {/* ══ SECTION 3 : CONSERVATOIRE ══ */}
      {activeSection === "conservatoire" && <VueConservatoire data={CONSERVATOIRE_DATA_36} />}

      {/* ══ SECTION 4 : QUIZ ══ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.h2}>{n("quizH2")}</h2>
          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 8 ? "🌊" : quizScore >= 6 ? "👍" : "💪"}
              </div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>
                {i18n.t("score")} : {quizScore} / {QUIZ_COUNT}
              </div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
                {i18n.quizMessage(quizScore, QUIZ_COUNT)}
              </div>
              <button onClick={resetQuiz} style={{ fontSize: 13, padding: "8px 20px", border: `0.5px solid ${ACCENT}`, borderRadius: 20, cursor: "pointer", background: ACCENT_BG, color: ACCENT }}>
                {i18n.newQ}
              </button>
            </div>
          ) : (
            <div>
              <div style={{ fontSize: 12, color: "#999", marginBottom: 10 }}>
                {i18n.t("question")} {quizIdx + 1} / {QUIZ_COUNT}
                <span style={{ marginLeft: 12, color: "#bbb" }}>{ALL_QUESTIONS.length} {i18n.t("questionsPool")}</span>
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
                    if (isCorrect)       { bg = ACCENT_BG; border = ACCENT; color = "#061E24"; }
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
                <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 8, background: selectedOpt === quizQuestions[quizIdx].a ? ACCENT_BG : "#FCEBEB", fontSize: 13, color: selectedOpt === quizQuestions[quizIdx].a ? "#061E24" : "#501313", lineHeight: 1.6 }}>
                  {quizQuestions[quizIdx].fb}
                </div>
              )}
              {quizAnswered && (
                <button onClick={nextQuiz} style={{ marginTop: 12, fontSize: 13, padding: "7px 18px", border: "0.5px solid #333", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#333" }}>
                  {quizIdx + 1 < QUIZ_COUNT ? i18n.nextQ : i18n.seeScore}
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

"use client";

/**
 * Cours37.tsx
 * Harmonia · Niveau 5 · Cours 37 — Analyse avancée : Schenker et analyse motivique
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { useTerm } from "@/hooks/useTerm";
import { cours37Content } from "@/data/cours37Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";
import { VueConservatoire } from "@/components/VueConservatoire";
import { CONSERVATOIRE_DATA_37 } from "@/data/conservatoireData37";

const FR37: Record<string, string> = {
  Do: "C", Ré: "D", Re: "D", Mi: "E", Fa: "F", Sol: "G", La: "A", Si: "B",
};
const FLAT37: Record<string, string> = {
  Cb: "B", Db: "C#", Eb: "D#", Fb: "E", Gb: "F#", Ab: "G#", Bb: "A#",
};
function frNote37(raw: string): string {
  const m = raw.match(/^(Do|Ré|Re|Mi|Fa|Sol|La|Si)([#b]?)$/);
  if (!m) return raw;
  const en = (FR37[m[1]] ?? m[1]) + m[2];
  return FLAT37[en] ?? en;
}

function playScale(ref: React.RefObject<PianoPlayerRef>, notes: string[], gap = 400) {
  notes.forEach((key, i) => {
    const [rawNote, octStr] = key.split(":");
    const note = frNote37(rawNote);
    setTimeout(() => ref.current?.playNote(note, parseInt(octStr), { duration: 1.4 }), i * gap);
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

const SECTIONS_IDS = ["schenker", "motivique", "conservatoire", "quiz"] as const;
const QUIZ_COUNT = 10;

const ACCENT = "#1A3A1A";
const ACCENT_BG = "#EAF3EA";

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
  infoBox:  { borderLeft: `2px solid ${ACCENT}`, padding: "8px 14px", background: ACCENT_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#0A1E0A", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
};

export default function Cours37() {
  const [activeSection, setActiveSection] = useState<string>("schenker");
  const i18n = useCoursI18n("cours37");
  const { tc } = i18n;
  const n = (key: string) => tc(`narrative.${key}` as any);
  const tr = useTerm();
  const { questions: ALL_QUESTIONS } = useCoursContent(cours37Content);

  const [quizQuestions] = useState(() => shuffle(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [quizIdx,      setQuizIdx]      = useState(0);
  const [quizScore,    setQuizScore]    = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizDone,     setQuizDone]     = useState(false);
  const [selectedOpt,  setSelectedOpt]  = useState<number | null>(null);

  const pianoRef = useRef<PianoPlayerRef>(null);

  // ── Translated data arrays ──────────────────────────────────────────────────
  const NIVEAUX = [
    { badge: n("n0badge"), nom: n("n0nom"), desc: n("n0desc"), ex: n("n0ex") },
    { badge: n("n1badge"), nom: n("n1nom"), desc: n("n1desc"), ex: n("n1ex") },
    { badge: n("n2badge"), nom: n("n2nom"), desc: n("n2desc"), ex: n("n2ex") },
    { badge: n("n3badge"), nom: n("n3nom"), desc: n("n3desc"), ex: n("n3ex") },
  ];

  const TRANSFORMATIONS = [
    { nom: n("t0nom"), desc: n("t0desc"), ex: n("t0ex"), original: ["Sol:3","Sol:3","Sol:3","Mib:3"], transforme: ["La:3","La:3","La:3","Fa:3"] },
    { nom: n("t1nom"), desc: n("t1desc"), ex: n("t1ex"), original: ["Do:3","Mi:3","Sol:3"], transforme: ["Do:3","Lab:2","Fa:2"] },
    { nom: n("t2nom"), desc: n("t2desc"), ex: n("t2ex"), original: ["Sol:3","Fa:3","Mi:3","Ré:3"], transforme: ["Sol:4","Fa:4","Mi:4","Ré:4"] },
    { nom: n("t3nom"), desc: n("t3desc"), ex: n("t3ex"), original: ["Sol:3","Sol:3","Sol:3","Mib:3"], transforme: ["Sol:4","Sol:4"] },
  ];

  const ORNEMENTS = [
    { nom: n("o0nom"), desc: n("o0desc") },
    { nom: n("o1nom"), desc: n("o1desc") },
    { nom: n("o2nom"), desc: n("o2desc") },
    { nom: n("o3nom"), desc: n("o3desc") },
  ];

  const METHODE_STEPS = [
    { n: "1", label: n("s1label"), desc: n("s1desc") },
    { n: "2", label: n("s2label"), desc: n("s2desc") },
    { n: "3", label: n("s3label"), desc: n("s3desc") },
    { n: "4", label: n("s4label"), desc: n("s4desc") },
  ];

  // ── Quiz handlers ───────────────────────────────────────────────────────────
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
        composer="Arnold Schoenberg"
        period={n("maitreCardPeriod")}
        emoji="🎼"
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

      {/* ══ SECTION 1 : SCHENKER ══ */}
      {activeSection === "schenker" && (
        <div>
          <h2 style={S.h2}>{n("schenkerH2")}</h2>
          <p style={S.p}>{n("schenkerP")}</p>

          <div style={S.infoBox} dangerouslySetInnerHTML={{ __html: n("schenkerInfoBox") }} />

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" as const, marginBottom: 20 }}>
            <div style={{ flex: 1, minWidth: 200, border: `0.5px solid ${ACCENT}`, borderRadius: 10, padding: "12px 14px", background: ACCENT_BG }}>
              <div style={{ fontSize: 12, color: ACCENT, fontWeight: 600, marginBottom: 4 }}>{n("urlinieLabel")}</div>
              <div style={{ fontFamily: "monospace", fontSize: 11, color: ACCENT, marginBottom: 8 }}>{n("urlinieNotes")}</div>
              <button onClick={() => playScale(pianoRef as React.RefObject<PianoPlayerRef>, ["Sol:4","Fa:4","Mi:4","Ré:4","Do:4"], 400)}
                style={{ fontSize: 11, padding: "3px 10px", border: `0.5px solid ${ACCENT}`, borderRadius: 14, cursor: "pointer", background: "transparent", color: ACCENT }}>
                {n("urlinieBtn")}
              </button>
            </div>
            <div style={{ flex: 1, minWidth: 200, border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "12px 14px", background: "#fff" }}>
              <div style={{ fontSize: 12, color: "#555", fontWeight: 600, marginBottom: 4 }}>{n("bassLabel")}</div>
              <div style={{ fontFamily: "monospace", fontSize: 11, color: "#555", marginBottom: 8 }}>{n("bassNotes")}</div>
              <button onClick={() => playScale(pianoRef as React.RefObject<PianoPlayerRef>, ["Do:2","Sol:2","Do:3"], 600)}
                style={{ fontSize: 11, padding: "3px 10px", border: "0.5px solid #aaa", borderRadius: 14, cursor: "pointer", background: "transparent", color: "#555" }}>
                {n("bassBtn")}
              </button>
            </div>
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 12px", color: "#111" }}>
            {n("niveauxH3")}
          </h3>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 8, marginBottom: 24 }}>
            {NIVEAUX.map((niv, i) => (
              <div key={i} style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "14px 16px", background: "#fff" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12, flexWrap: "wrap" as const }}>
                  <div style={{ minWidth: 60, flexShrink: 0 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#fff", background: ACCENT, borderRadius: 6, padding: "2px 8px", textAlign: "center" as const }}>
                      {niv.badge}
                    </div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#111", marginBottom: 4 }}>{niv.nom}</div>
                    <div style={{ fontSize: 12, color: "#555", lineHeight: 1.6, marginBottom: 4 }}>{niv.desc}</div>
                    <div style={{ fontFamily: "monospace", fontSize: 11, color: ACCENT, background: ACCENT_BG, padding: "2px 8px", borderRadius: 4, display: "inline-block" }}>
                      {niv.ex}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "0 0 12px", color: "#111" }}>
            {n("ornementsH3")}
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8, marginBottom: 20 }}>
            {ORNEMENTS.map((o, i) => (
              <div key={i} style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "12px 14px", background: "#fff" }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#111", marginBottom: 4 }}>{o.nom}</div>
                <div style={{ fontSize: 12, color: "#666", lineHeight: 1.55 }}>{o.desc}</div>
              </div>
            ))}
          </div>

          <div style={S.warnBox} dangerouslySetInnerHTML={{ __html: n("schenkerWarn") }} />
        </div>
      )}

      {/* ══ SECTION 2 : MOTIVIQUE ══ */}
      {activeSection === "motivique" && (
        <div>
          <h2 style={S.h2}>{n("motiviqueH2")}</h2>
          <p style={S.p}>{n("motiviqueP")}</p>

          <div style={S.infoBox} dangerouslySetInnerHTML={{ __html: n("beethInfoBox") }} />

          <div style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "16px 18px", background: "#fff", marginBottom: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#111", marginBottom: 8 }}>{n("beethCard")}</div>
            <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6, marginBottom: 10 }}
              dangerouslySetInnerHTML={{ __html: n("beethDesc") }} />
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" as const }}>
              <button onClick={() => playScale(pianoRef as React.RefObject<PianoPlayerRef>, ["Sol:3","Sol:3","Sol:3","Mib:3"], 250)}
                style={{ fontSize: 11, padding: "5px 14px", border: `0.5px solid ${ACCENT}`, borderRadius: 16, cursor: "pointer", background: ACCENT_BG, color: ACCENT }}>
                {n("motifOrigBtn")}
              </button>
              <button onClick={() => playScale(pianoRef as React.RefObject<PianoPlayerRef>, ["Fa:3","Fa:3","Fa:3","Ré:3"], 250)}
                style={{ fontSize: 11, padding: "5px 14px", border: "0.5px solid #aaa", borderRadius: 16, cursor: "pointer", background: "transparent", color: "#555" }}>
                {n("motifTransBtn")}
              </button>
            </div>
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 12px", color: "#111" }}>
            {n("transformH3")}
          </h3>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 10, marginBottom: 24 }}>
            {TRANSFORMATIONS.map((t, i) => (
              <div key={i} style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "14px 16px", background: "#fff" }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: ACCENT, marginBottom: 4 }}>{t.nom}</div>
                <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6, marginBottom: 8 }}>{t.desc}</div>
                <div style={{ fontSize: 12, color: "#888", fontStyle: "italic", marginBottom: 10 }}>{n("labelExemple")} {t.ex}</div>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" as const }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <span style={{ fontSize: 11, color: "#888" }}>{n("labelOriginal")}</span>
                    <button onClick={() => playScale(pianoRef as React.RefObject<PianoPlayerRef>, t.original, 300)}
                      style={{ fontSize: 11, padding: "3px 10px", border: "0.5px solid #ccc", borderRadius: 12, cursor: "pointer", background: "transparent", color: "#555" }}>
                      ▶
                    </button>
                  </div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <span style={{ fontSize: 11, color: ACCENT }}>{n("labelTransforme")}</span>
                    <button onClick={() => playScale(pianoRef as React.RefObject<PianoPlayerRef>, t.transforme, 300)}
                      style={{ fontSize: 11, padding: "3px 10px", border: `0.5px solid ${ACCENT}`, borderRadius: 12, cursor: "pointer", background: ACCENT_BG, color: ACCENT }}>
                      ▶
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "0 0 12px", color: "#111" }}>
            {n("methodeH3")}
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8, marginBottom: 20 }}>
            {METHODE_STEPS.map(step => (
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

          <div style={S.infoBox} dangerouslySetInnerHTML={{ __html: n("brahmsInfoBox") }} />
          <div style={S.warnBox} dangerouslySetInnerHTML={{ __html: n("motiviqueWarn") }} />
        </div>
      )}

      {/* ══ SECTION 3 : CONSERVATOIRE ══ */}
      {activeSection === "conservatoire" && <VueConservatoire data={CONSERVATOIRE_DATA_37} />}

      {/* ══ SECTION 4 : QUIZ ══ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.h2}>{n("quizH2")}</h2>
          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 8 ? "🎼" : quizScore >= 6 ? "👍" : "💪"}
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
                    if (isCorrect)       { bg = ACCENT_BG; border = ACCENT; color = "#0A1E0A"; }
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
                <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 8, background: selectedOpt === quizQuestions[quizIdx].a ? ACCENT_BG : "#FCEBEB", fontSize: 13, color: selectedOpt === quizQuestions[quizIdx].a ? "#0A1E0A" : "#501313", lineHeight: 1.6 }}>
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

"use client";

/**
 * Cours24.tsx
 * Harmonia · Niveau 2 · Cours 24 — Les accords de sixte augmentée
 * Convention : affichage français, dotKeys PianoPlayer français avec ":"
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { useTerm } from "@/hooks/useTerm";
import { cours24Content } from "@/data/cours24Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";
import { VueConservatoire } from "@/components/VueConservatoire";
import { CONSERVATOIRE_DATA_24 } from "@/data/conservatoireData24";

// ── Helpers ────────────────────────────────────────────────────────────────────

function playScale(ref: React.RefObject<PianoPlayerRef>, notes: string[], gap = 300) {
  notes.forEach((key, i) => {
    const [note, octStr] = key.split(":");
    setTimeout(() => ref.current?.playNote(note, parseInt(octStr), { duration: 1.2 }), i * gap);
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

// ── Données sixtes augmentées ─────────────────────────────────────────────────

interface Sixte {
  id: string;
  nom: string;
  abrev: string;
  notes: string;
  structure: string;
  desc: string;
  color: string;
  bg: string;
  dotKeys: string[];
  resolution: string;
}

// ── Constants ─────────────────────────────────────────────────────────────────

const QUIZ_COUNT = 10;
const SECTIONS_IDS = ["types", "application", "conservatoire", "quiz"] as const;

// ── Styles ────────────────────────────────────────────────────────────────────

const S = {
  wrap: { fontFamily: "var(--font-sans, system-ui)", maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" } as React.CSSProperties,
  header: { padding: "1.5rem 0 1rem", borderBottom: "0.5px solid #e5e5e5", marginBottom: "1.25rem" } as React.CSSProperties,
  badge: { display: "inline-block", background: "#F0EBF8", color: "#5C3D6E", fontSize: 11, fontWeight: 500, padding: "2px 10px", borderRadius: 20, marginBottom: 6 } as React.CSSProperties,
  h1: { fontSize: 26, fontWeight: 500, color: "#111", margin: 0 } as React.CSSProperties,
  subtitle: { fontSize: 14, color: "#666", marginTop: 4, lineHeight: 1.6 } as React.CSSProperties,
  nav: { display: "flex", gap: 6, flexWrap: "wrap" as const, marginBottom: "1.5rem" },
  pill: (active: boolean): React.CSSProperties => ({
    fontSize: 12, padding: "5px 14px",
    border: `0.5px solid ${active ? "#333" : "#ddd"}`,
    borderRadius: 20, cursor: "pointer",
    background: active ? "#111" : "transparent",
    color: active ? "#fff" : "#666",
    transition: "all .15s",
  }),
  h2: { fontSize: 17, fontWeight: 500, color: "#111", marginBottom: 8 } as React.CSSProperties,
  p: { fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: "1rem" } as React.CSSProperties,
  infoBox: { borderLeft: "2px solid #5C3D6E", padding: "8px 14px", background: "#F0EBF8", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#3A2650", lineHeight: 1.6 } as React.CSSProperties,
  warnBox: { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
};

// ── Composant ─────────────────────────────────────────────────────────────────

export default function Cours24() {
  const [activeSection, setActiveSection] = useState<string>("types");
  const i18n = useCoursI18n("cours24");
  const { tc } = i18n;
  const n = (key: string) => tc(`narrative.${key}` as any);
  const tr = useTerm();
  const { questions: ALL_QUESTIONS } = useCoursContent(cours24Content);

  const [activeSixte, setActiveSixte] = useState<string | null>(null);

  const [quizQuestions] = useState(() => shuffle(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizDone, setQuizDone] = useState(false);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);

  const pianoRef = useRef<PianoPlayerRef>(null);

  // ── Translated data arrays ──────────────────────────────────────────────────

  const SIXTES: Sixte[] = [
    {
      id: "italienne",
      nom: n("sixteItNom"),
      abrev: "It+6",
      notes: "Lab – Do – Fa#",
      structure: "bVI – I – #IV",
      desc: n("sixteItDesc"),
      color: "#5C3D6E",
      bg: "#F0EBF8",
      dotKeys: ["Lab:3", "Do:4", "Fa#:4"],
      resolution: n("sixteItResolution"),
    },
    {
      id: "francaise",
      nom: n("sixtefrNom"),
      abrev: "Fr+6",
      notes: "Lab – Do – Ré – Fa#",
      structure: "bVI – I – II – #IV",
      desc: n("sixtefrDesc"),
      color: "#185FA5",
      bg: "#E6F1FB",
      dotKeys: ["Lab:3", "Do:4", "Ré:4", "Fa#:4"],
      resolution: n("sixtefrResolution"),
    },
    {
      id: "allemande",
      nom: n("sixteAlNom"),
      abrev: "Al+6",
      notes: "Lab – Do – Mib – Fa#",
      structure: "bVI – I – bIII – #IV",
      desc: n("sixteAlDesc"),
      color: "#993C1D",
      bg: "#FAECE7",
      dotKeys: ["Lab:3", "Do:4", "Mib:4", "Fa#:4"],
      resolution: n("sixteAlResolution"),
    },
  ];

  const handlePlaySixte = (sixte: Sixte) => {
    playScale(pianoRef as React.RefObject<PianoPlayerRef>, sixte.dotKeys, 320);
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

  return (
    <div style={S.wrap}>
      {/* Piano caché */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={2} startOctave={3} showLabels={false} />
      </div>

      {/* Header */}
      <div style={S.header}>
        <span style={S.badge}>{i18n.badge}</span>
        <h1 style={S.h1}>{tr("Les accords de sixte augmentée")}</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Franz Liszt"
        period="1811–1886"
        emoji="🎹"
        concept={n("maitreCardConcept")}
        anecdote={n("maitreCardAnecdote")}
        lesson={n("maitreCardLesson")}
        accentColor="#5C3D6E"
      />

      {/* Navigation */}
      <nav style={S.nav}>
        {SECTIONS_IDS.map(id => (
          <button key={id} style={S.pill(activeSection === id)} onClick={() => setActiveSection(id)}>
            {i18n.sectionLabel(id)}
          </button>
        ))}
      </nav>

      {/* ══ SECTION 1 : LES 3 TYPES ══ */}
      {activeSection === "types" && (
        <div>
          <h2 style={S.h2}>{n("h2Types")}</h2>
          <p style={S.p}>{n("pTypes")}</p>

          <div style={S.infoBox} dangerouslySetInnerHTML={{ __html: n("infoBoxContext") }} />

          <p style={{ fontSize: 13, color: "#888", marginBottom: 16 }}>
            {n("clickHint")}
          </p>

          {SIXTES.map(sixte => (
            <div
              key={sixte.id}
              onClick={() => {
                setActiveSixte(activeSixte === sixte.id ? null : sixte.id);
                handlePlaySixte(sixte);
              }}
              style={{
                border: `0.5px solid ${activeSixte === sixte.id ? sixte.color : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 8,
                overflow: "hidden",
                cursor: "pointer",
                background: activeSixte === sixte.id ? sixte.bg : "#fff",
                transition: "all .15s",
              }}
            >
              {/* Header sixte */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px" }}>
                <div style={{
                  fontSize: 11, fontWeight: 700, color: sixte.color,
                  background: sixte.bg, border: `0.5px solid ${sixte.color}`,
                  padding: "2px 8px", borderRadius: 6, fontFamily: "monospace",
                  flexShrink: 0,
                }}>
                  {sixte.abrev}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>{sixte.nom}</span>
                    <span style={{ fontSize: 12, color: "#888", fontFamily: "monospace" }}>{sixte.structure}</span>
                  </div>
                  <div style={{ fontSize: 12, color: "#888", marginTop: 2, fontStyle: "italic" }}>
                    {sixte.desc.split("—")[0].trim()}
                  </div>
                </div>
                <div style={{ fontSize: 11, color: "#bbb", fontFamily: "monospace", flexShrink: 0 }}>
                  {sixte.notes}
                </div>
              </div>

              {/* Détail si sélectionné */}
              {activeSixte === sixte.id && (
                <div style={{ padding: "0 16px 16px", borderTop: `0.5px solid ${sixte.color}20` }}>
                  {/* Notes */}
                  <div style={{ marginTop: 12, marginBottom: 12 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: sixte.color, marginBottom: 6, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>
                      {n("notesLabel")}
                    </div>
                    <div style={{ fontFamily: "monospace", fontSize: 14, color: "#444", background: "#f8f8f8", padding: "6px 10px", borderRadius: 6 }}>
                      {sixte.notes}
                    </div>
                  </div>

                  {/* Structure */}
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: sixte.color, marginBottom: 4, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>
                      {n("structureLabel")}
                    </div>
                    <div style={{ fontFamily: "monospace", fontSize: 13, color: "#444" }}>{sixte.structure}</div>
                  </div>

                  {/* Description */}
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: sixte.color, marginBottom: 4, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>
                      {n("caracLabel")}
                    </div>
                    <div style={{ fontSize: 13, color: "#444", lineHeight: 1.6 }}>{sixte.desc}</div>
                  </div>

                  {/* Résolution */}
                  <div style={{ marginBottom: 14 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: sixte.color, marginBottom: 4, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>
                      {n("resolutionLabel")}
                    </div>
                    <div style={{ fontSize: 13, color: "#444", lineHeight: 1.6, fontFamily: "monospace" }}>{sixte.resolution}</div>
                  </div>

                  <button
                    onClick={e => { e.stopPropagation(); handlePlaySixte(sixte); }}
                    style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${sixte.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: sixte.color }}
                  >
                    {n("reecouterBtn")} {sixte.abrev}
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* Règle universelle */}
          <div style={S.infoBox} dangerouslySetInnerHTML={{ __html: n("infoBoxRegle") }} />
        </div>
      )}

      {/* ══ SECTION 2 : USAGE & CONTEXTE ══ */}
      {activeSection === "application" && (
        <div>
          <h2 style={S.h2}>{n("h2Application")}</h2>
          <p style={S.p}>{n("pApplication")}</p>

          {/* Sous-section A : Contexte d'apparition */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 10px", color: "#111" }}>
            {n("h3Contexte")}
          </h3>

          <div style={S.infoBox} dangerouslySetInnerHTML={{ __html: n("infoBoxSchema") }} />

          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: "#555", marginBottom: 8 }}>
              {n("bassePremierRenversement")}
            </div>
            <div style={{ fontFamily: "monospace", fontSize: 13, background: "#f8f8f8", padding: "8px 12px", borderRadius: 6, color: "#333" }}>
              {n("bassePremierRenversementDesc")}
            </div>
          </div>

          {/* Exemples d'œuvres */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 10px", color: "#111" }}>
            {n("h3Exemples")}
          </h3>

          {[
            {
              titre: "Der Wanderer, D.489",
              compositeur: "Franz Schubert",
              type: "Al+6",
              color: "#993C1D",
              bg: "#FAECE7",
              dotKeys: ["Lab:3", "Do:4", "Mib:4", "Fa#:4"],
              comment: n("commentSchubert"),
            },
            {
              titre: "Sonate op.57 « Appassionata »",
              compositeur: "Ludwig van Beethoven",
              type: "It+6",
              color: "#5C3D6E",
              bg: "#F0EBF8",
              dotKeys: ["Lab:3", "Do:4", "Fa#:4"],
              comment: n("commentBeethoven"),
            },
            {
              titre: "Intermezzo op.118 n°2",
              compositeur: "Johannes Brahms",
              type: "Fr+6",
              color: "#185FA5",
              bg: "#E6F1FB",
              dotKeys: ["Lab:3", "Do:4", "Ré:4", "Fa#:4"],
              comment: n("commentBrahms"),
            },
          ].map(ex => (
            <div key={ex.titre} style={{
              border: `0.5px solid ${ex.color}40`,
              borderRadius: 10,
              marginBottom: 10,
              padding: "14px 16px",
              background: ex.bg,
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap" as const, gap: 8 }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>{ex.titre}</div>
                  <div style={{ fontSize: 12, color: "#666", marginTop: 2 }}>{ex.compositeur}</div>
                  <div style={{ marginTop: 6 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: ex.color, background: "rgba(255,255,255,0.7)", padding: "2px 8px", borderRadius: 6, border: `0.5px solid ${ex.color}`, fontFamily: "monospace" }}>
                      {ex.type}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => playScale(pianoRef as React.RefObject<PianoPlayerRef>, ex.dotKeys, 320)}
                  style={{ fontSize: 12, padding: "5px 12px", border: `0.5px solid ${ex.color}`, borderRadius: 20, cursor: "pointer", background: "rgba(255,255,255,0.8)", color: ex.color, flexShrink: 0 }}
                >
                  ▶ {i18n.listen}
                </button>
              </div>
              <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6, marginTop: 10 }}>{ex.comment}</div>
            </div>
          ))}

          {/* Sous-section B : Utilisation stylistique */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "24px 0 10px", color: "#111" }}>
            {n("h3Stylistique")}
          </h3>

          {[
            {
              epoque: "Baroque tardif",
              icone: "🪔",
              color: "#BA7517",
              desc: n("epoqueBaroque"),
            },
            {
              epoque: "Classique",
              icone: "🏛️",
              color: "#185FA5",
              desc: n("epoqueClassique"),
            },
            {
              epoque: "Romantique",
              icone: "🌹",
              color: "#5C3D6E",
              desc: n("epoqueRomantique"),
            },
            {
              epoque: "Jazz (substitution tritonique)",
              icone: "🎷",
              color: "#0F6E56",
              desc: n("epoqueJazz"),
            },
          ].map(item => (
            <div key={item.epoque} style={{
              display: "flex",
              gap: 12,
              padding: "12px 14px",
              border: "0.5px solid #e5e5e5",
              borderRadius: 8,
              marginBottom: 8,
              background: "#fafafa",
            }}>
              <div style={{ fontSize: 20, flexShrink: 0, paddingTop: 2 }}>{item.icone}</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, color: item.color, marginBottom: 4 }}>{item.epoque}</div>
                <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            </div>
          ))}

          {/* InfoBox Jazz */}
          <div style={S.infoBox} dangerouslySetInnerHTML={{ __html: n("infoBoxJazz") }} />

          <div style={S.warnBox} dangerouslySetInnerHTML={{ __html: n("warnBox") }} />
        </div>
      )}

      {/* ══ SECTION 3 : CONSERVATOIRE ══ */}
      {activeSection === "conservatoire" && (
        <VueConservatoire data={CONSERVATOIRE_DATA_24} />
      )}

      {/* ══ SECTION 4 : QUIZ ══ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.h2}>Quiz — Les sixtes augmentées</h2>

          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 8 ? "🎹" : quizScore >= 6 ? "👍" : "💪"}
              </div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>
                {i18n.t("score")} : {quizScore} / {QUIZ_COUNT}
              </div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
                {i18n.quizMessage(quizScore, QUIZ_COUNT)}
              </div>
              <button
                onClick={resetQuiz}
                style={{ fontSize: 13, padding: "8px 20px", border: "0.5px solid #5C3D6E", borderRadius: 20, cursor: "pointer", background: "#F0EBF8", color: "#5C3D6E" }}
              >
                {i18n.newQ}
              </button>
            </div>
          ) : (
            <div>
              <div style={{ fontSize: 12, color: "#999", marginBottom: 10 }}>
                Question {quizIdx + 1} / {QUIZ_COUNT}
                <span style={{ marginLeft: 12, color: "#bbb" }}>{ALL_QUESTIONS.length} {i18n.t("questionsPool")}</span>
              </div>
              <div style={{ fontSize: 15, fontWeight: 500, color: "#111", lineHeight: 1.6, marginBottom: 16 }}>
                {quizQuestions[quizIdx].q}
              </div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 8 }}>
                {quizQuestions[quizIdx].opts.map((opt, i) => {
                  const isCorrect = i === quizQuestions[quizIdx].a;
                  const isSelected = selectedOpt === i;
                  let bg = "#fff", border = "#e5e5e5", color = "#333";
                  if (quizAnswered) {
                    if (isCorrect) { bg = "#E1F5EE"; border = "#0F6E56"; color = "#085041"; }
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

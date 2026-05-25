"use client";

/**
 * Cours28.tsx
 * Harmonia · Niveau 3 · Cours 28 — Formes musicales approfondies
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { useTerm } from "@/hooks/useTerm";
import { cours28Content } from "@/data/cours28Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";
import { VueConservatoire } from "@/components/VueConservatoire";
import { CONSERVATOIRE_DATA_28 } from "@/data/conservatoireData28";

function playScale(ref: React.RefObject<PianoPlayerRef>, notes: string[], gap = 400) {
  notes.forEach((key, i) => {
    const [note, octStr] = key.split(":");
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

// ── Constants ──────────────────────────────────────────────────────────────

const SECTIONS_IDS = ["formes", "analyse", "conservatoire", "quiz"] as const;
const QUIZ_COUNT = 10;
const ACCENT = "#4A2C6E";
const ACCENT_BG = "#F0EBF8";

// ── Données formes ─────────────────────────────────────────────────────────

interface SonateSubSection {
  titre: string;
  tonalite: string;
  detail: string;
}

interface FormeData {
  id: string;
  nom: string;
  schema: string;
  tonalite: string;
  description: string;
  exemples: string[];
  color: string;
  bg: string;
  sonateSections?: SonateSubSection[];
}

const FORMES: FormeData[] = [
  {
    id: "binaire",
    nom: "Forme binaire",
    schema: "||:A:||·||:B:||",
    tonalite: "A → dominante · B → tonique",
    description: "La forme binaire alterne deux sections répétées. La section A crée une instabilité tonale (souvent vers la dominante) ; la section B résout vers la tonique. C'est la structure des danses baroques.",
    exemples: ["Suite française n°2 BWV 813 (Bach)", "Allemandes et courantes du Clavecin bien tempéré", "Danses de cour baroques"],
    color: "#1A5C3A",
    bg: "#E8F5EE",
  },
  {
    id: "ternaire",
    nom: "Forme ternaire",
    schema: "A · B · A'",
    tonalite: "A → tonique · B → tonalité contrastante · A' → tonique",
    description: "La forme ternaire présente un thème (A), une section contrastante (B), puis le retour du thème (A'). Elle structure le menuet, le scherzo, le nocturne et de nombreuses pièces romantiques.",
    exemples: ["Menuets des suites de Bach", "Nocturne op.9 n°2 (Chopin)", "Scherzos des sonates de Beethoven"],
    color: "#BA7517",
    bg: "#FAEEDA",
  },
  {
    id: "rondo",
    nom: "Forme rondo",
    schema: "A · B · A · C · A (…)",
    tonalite: "A toujours à la tonique · B, C → tonalités contrastantes",
    description: "Le rondo alterne un refrain (A) toujours à la tonique avec des épisodes contrastants (B, C…). C'est la forme typique des finales classiques — son caractère cyclique convient à la conclusion.",
    exemples: ["Finale de la Sonate Pathétique op.13 (Beethoven)", "Finales des concertos de Mozart", "Rondos pour piano de Mozart K.485"],
    color: "#1A4A7A",
    bg: "#E8F0FA",
  },
  {
    id: "sonate",
    nom: "Forme sonate",
    schema: "Exposition · Développement · Réexposition",
    tonalite: "T1 tonique · T2 dominante → modulations → T1 + T2 à la TONIQUE",
    description: "La forme sonate est la grande forme instrumentale du classicisme. Elle crée une tension tonale (T2 à la dominante) que seule la réexposition peut résoudre (T2 à la tonique). C'est une dramaturgie musicale complète.",
    exemples: ["Sonate K.545 (Mozart)", "Symphonie n°5 (Beethoven)", "Sonate Pathétique op.13 (Beethoven)"],
    color: ACCENT,
    bg: ACCENT_BG,
    sonateSections: [
      {
        titre: "Exposition",
        tonalite: "T1 à la tonique · T2 à la dominante (majeur) ou relatif majeur (mineur)",
        detail: "L'exposition présente les deux thèmes principaux dans deux tonalités distinctes. T1 établit la tonalité principale ; une transition module vers T2 dans la tonalité de la dominante (en majeur). Cette tension tonale est le moteur de toute la sonate.",
      },
      {
        titre: "Développement",
        tonalite: "Modulations libres — INTERDIT de rester à la tonique",
        detail: "Le développement fragmente, combine et module à partir du matériau de l'exposition. Il doit traverser plusieurs tonalités — c'est son rôle dramatique. Il se conclut sur V (dominante) qui prépare le retour.",
      },
      {
        titre: "Réexposition",
        tonalite: "T1 à la tonique · T2 à la TONIQUE (résolution fondamentale)",
        detail: "La réexposition reprend l'exposition mais avec T2 à la TONIQUE au lieu de la dominante. C'est la résolution harmonique de toute la forme. La transition est modifiée pour rester à la tonique.",
      },
    ],
  },
];

// ── Données analyse comparative ────────────────────────────────────────────

interface OeuvreData {
  titre: string;
  compositeur: string;
  forme: string;
  description: string;
  notes: string[];
  dotKeys: string[];
}

const OEUVRES: OeuvreData[] = [
  {
    titre: "Prélude en Do majeur BWV 846",
    compositeur: "Johann Sebastian Bach",
    forme: "Arpège harmonique continu",
    description: "Ce prélude est une progression harmonique continue en arpèges — aucun thème distinct, aucune structure binaire ou ternaire formelle. Bach déroule une succession d'accords arpégés de I à I, avec des enrichissements harmoniques remarquables (II7, V7). C'est une forme pré-classique proche de la toccata.",
    notes: ["Do:3", "Mi:3", "Sol:3", "Do:4", "Mi:4"],
    dotKeys: ["Do:3", "Mi:3", "Sol:3", "Do:4", "Mi:4"],
  },
  {
    titre: "Sonate K.331 — Thème et variations",
    compositeur: "Wolfgang Amadeus Mozart",
    forme: "Thème et variations (6 variations)",
    description: "La K.331 est unique parmi les sonates de Mozart : son premier mouvement est un thème et variations — pas une forme sonate. Le thème en La majeur est suivi de six variations qui en transforment le rythme, la mélodie et l'harmonie. Le fameux Rondo alla Turca est le finale de cette sonate.",
    notes: ["La:4", "Si:4", "Do#:5", "Mi:5", "La:5"],
    dotKeys: ["La:4", "Si:4", "Do#:5", "Mi:5", "La:5"],
  },
  {
    titre: "Sonate Pathétique op.13",
    compositeur: "Ludwig van Beethoven",
    forme: "Forme sonate avec introduction lente (Grave)",
    description: "La Pathétique se distingue par une introduction lente (Grave) en Do mineur qui précède l'Allegro di molto e con brio. Beethoven fait revenir ce Grave au milieu du développement et à la fin de la réexposition — une expansion formelle originale qui dépasse le schéma sonate classique.",
    notes: ["Do:4", "Ré:4", "Mib:4", "Fa:4", "Sol:4"],
    dotKeys: ["Do:4", "Ré:4", "Mib:4", "Fa:4", "Sol:4"],
  },
];

// ── Styles ─────────────────────────────────────────────────────────────────

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
  infoBox:  { borderLeft: `2px solid ${ACCENT}`, padding: "8px 14px", background: ACCENT_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#2A1040", lineHeight: 1.6 } as React.CSSProperties,
};

// ── Component ──────────────────────────────────────────────────────────────

export default function Cours28() {
  const [activeSection, setActiveSection] = useState<string>("formes");
  const i18n = useCoursI18n("cours28");
  const tr = useTerm();
  const { questions: ALL_QUESTIONS } = useCoursContent(cours28Content);

  const [quizQuestions] = useState(() => shuffle(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [quizIdx,      setQuizIdx]      = useState(0);
  const [quizScore,    setQuizScore]    = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizDone,     setQuizDone]     = useState(false);
  const [selectedOpt,  setSelectedOpt]  = useState<number | null>(null);

  const pianoRef = useRef<PianoPlayerRef>(null);

  const sectionLabel = (id: string) => {
    if (id === "formes")        return "Les grandes formes";
    if (id === "analyse")       return "Analyse comparative";
    if (id === "conservatoire") return "🎓 Conservatoire";
    return "Quiz";
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
        <PianoPlayer ref={pianoRef} octaves={4} startOctave={2} showLabels={false} />
      </div>

      {/* Header */}
      <div style={S.header}>
        <span style={S.badge}>Niveau 3 · Cours 28</span>
        <h1 style={S.h1}>{tr("Formes musicales approfondies")}</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Ludwig van Beethoven"
        period="1770–1827"
        emoji="🏛️"
        concept="Architecture musicale"
        anecdote="Beethoven a étiré la forme sonate jusqu'à ses limites — la Neuvième Symphonie dure 70 minutes là où Mozart en prenait 25. Il avait compris que la forme n'est pas un contenant mais une force dramatique en elle-même."
        lesson="La forme n'est pas où on met la musique — c'est ce que la musique devient."
        accentColor={ACCENT}
      />

      {/* Navigation */}
      <nav style={S.nav}>
        {SECTIONS_IDS.map(id => (
          <button key={id} style={S.pill(activeSection === id)} onClick={() => setActiveSection(id)}>
            {sectionLabel(id)}
          </button>
        ))}
      </nav>

      {/* ══ SECTION 1 : LES GRANDES FORMES ══ */}
      {activeSection === "formes" && (
        <div>
          <h2 style={S.h2}>Les grandes formes musicales</h2>
          <p style={S.p}>
            La forme musicale est l'organisation du discours dans le temps. Elle détermine comment les idées musicales se succèdent, contrastent et se résolvent. Chaque grande période a développé ses propres architectures formelles.
          </p>

          <div style={S.infoBox}>
            <strong>Principe fondamental :</strong> Toute grande forme crée une tension tonale qui attend une résolution. Dans la forme sonate, c'est T2 à la dominante qui réclame de revenir à la tonique. La forme n'est pas un contenant — c'est une force harmonique qui se déploie dans le temps.
          </div>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: 16, marginTop: 20 }}>
            {FORMES.map(forme => (
              <div key={forme.id} style={{ border: `0.5px solid ${forme.color}30`, borderRadius: 12, overflow: "hidden" }}>
                {/* En-tête de forme */}
                <div style={{ padding: "14px 16px", background: forme.bg, borderBottom: `0.5px solid ${forme.color}20` }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" as const }}>
                    <span style={{ fontSize: 15, fontWeight: 600, color: forme.color }}>{forme.nom}</span>
                    <span style={{ fontFamily: "monospace", fontSize: 13, color: forme.color, background: `${forme.color}15`, padding: "2px 10px", borderRadius: 20 }}>
                      {forme.schema}
                    </span>
                  </div>
                  <div style={{ fontSize: 12, color: forme.color, marginTop: 4, fontStyle: "italic" }}>
                    {forme.tonalite}
                  </div>
                </div>

                {/* Corps */}
                <div style={{ padding: "14px 16px", background: "#fff" }}>
                  <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7, margin: "0 0 10px" }}>
                    {forme.description}
                  </p>

                  {/* Sous-sections sonate */}
                  {forme.sonateSections && (
                    <div style={{ display: "flex", flexDirection: "column" as const, gap: 8, margin: "12px 0 14px" }}>
                      {forme.sonateSections.map((sub, idx) => (
                        <div key={idx} style={{ padding: "10px 14px", borderLeft: `3px solid ${ACCENT}`, background: ACCENT_BG, borderRadius: "0 8px 8px 0" }}>
                          <div style={{ fontSize: 13, fontWeight: 600, color: ACCENT, marginBottom: 2 }}>{sub.titre}</div>
                          <div style={{ fontSize: 11, color: "#6B3FA0", marginBottom: 4, fontStyle: "italic" }}>{sub.tonalite}</div>
                          <div style={{ fontSize: 12, color: "#444", lineHeight: 1.6 }}>{sub.detail}</div>
                        </div>
                      ))}

                      {/* Boutons piano pour la forme sonate */}
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const, marginTop: 4 }}>
                        <button
                          onClick={() => playScale(pianoRef as React.RefObject<PianoPlayerRef>, ["Do:4", "Mi:4", "Sol:4", "Do:5"], 350)}
                          style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${ACCENT}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: ACCENT }}
                        >
                          ▶ Thème 1 — Do majeur (tonique)
                        </button>
                        <button
                          onClick={() => playScale(pianoRef as React.RefObject<PianoPlayerRef>, ["Sol:4", "Si:4", "Ré:5", "Sol:5"], 350)}
                          style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${ACCENT}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: ACCENT }}
                        >
                          ▶ Thème 2 — Sol majeur (dominante)
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Exemples */}
                  <div style={{ marginTop: 8 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#888", letterSpacing: "0.08em", marginBottom: 4 }}>EXEMPLES</div>
                    <div style={{ display: "flex", flexDirection: "column" as const, gap: 2 }}>
                      {forme.exemples.map((ex, i) => (
                        <div key={i} style={{ fontSize: 12, color: "#555", paddingLeft: 8, borderLeft: `2px solid ${forme.color}40` }}>
                          {ex}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ══ SECTION 2 : ANALYSE COMPARATIVE ══ */}
      {activeSection === "analyse" && (
        <div>
          <h2 style={S.h2}>Analyse comparative de formes</h2>
          <p style={S.p}>
            Comparer des œuvres de différentes formes permet de percevoir comment chaque architecture organise l'espace harmonique et temporel différemment. Ces trois œuvres illustrent trois logiques formelles distinctes.
          </p>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: 16 }}>
            {OEUVRES.map((oeuvre, idx) => (
              <div key={idx} style={{ border: "0.5px solid #e5e5e5", borderRadius: 12, overflow: "hidden" }}>
                {/* En-tête */}
                <div style={{ padding: "14px 16px", background: ACCENT_BG, borderBottom: "0.5px solid #DDD5F0" }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: ACCENT, marginBottom: 2 }}>{oeuvre.titre}</div>
                  <div style={{ fontSize: 12, color: "#666", marginBottom: 6 }}>{oeuvre.compositeur}</div>
                  <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, color: ACCENT, background: `${ACCENT}15`, padding: "2px 10px", borderRadius: 20 }}>
                    {oeuvre.forme}
                  </span>
                </div>

                {/* Corps */}
                <div style={{ padding: "14px 16px", background: "#fff" }}>
                  <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7, margin: "0 0 12px" }}>
                    {oeuvre.description}
                  </p>
                  <button
                    onClick={() => playScale(pianoRef as React.RefObject<PianoPlayerRef>, oeuvre.dotKeys, 420)}
                    style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${ACCENT}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: ACCENT }}
                  >
                    ▶ Écouter le motif principal
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ ...S.infoBox, marginTop: 20 }}>
            <strong>À retenir :</strong> Bach (arpège harmonique) → pas de thèmes distincts, logique contrapuntique. Mozart K.331 (thème et variations) → un seul thème transformé. Beethoven op.13 (forme sonate enrichie) → deux thèmes, tension harmonique, et retour du Grave initial dans le développement.
          </div>
        </div>
      )}

      {/* ══ SECTION 3 : CONSERVATOIRE ══ */}
      {activeSection === "conservatoire" && <VueConservatoire data={CONSERVATOIRE_DATA_28} />}

      {/* ══ SECTION 4 : QUIZ ══ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.h2}>Quiz — Formes musicales</h2>
          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 8 ? "🏛️" : quizScore >= 6 ? "👍" : "💪"}
              </div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>
                Score : {quizScore} / {QUIZ_COUNT}
              </div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
                {quizScore >= 8 ? "Excellent ! Vous maîtrisez les grandes formes musicales." :
                 quizScore >= 6 ? "Bien ! Revoyez la réexposition de la forme sonate et les tonalités de T2." :
                 "Continuez — relisez les sections Formes et Analyse comparative."}
              </div>
              <button
                onClick={resetQuiz}
                style={{ fontSize: 13, padding: "8px 20px", border: `0.5px solid ${ACCENT}`, borderRadius: 20, cursor: "pointer", background: ACCENT_BG, color: ACCENT }}
              >
                Nouvelles questions
              </button>
            </div>
          ) : (
            <div>
              <div style={{ fontSize: 12, color: "#999", marginBottom: 10 }}>
                Question {quizIdx + 1} / {QUIZ_COUNT}
                <span style={{ marginLeft: 12, color: "#bbb" }}>{ALL_QUESTIONS.length} questions dans la banque</span>
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
                    if (isCorrect)       { bg = ACCENT_BG; border = ACCENT; color = "#2A1040"; }
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
                <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 8, background: selectedOpt === quizQuestions[quizIdx].a ? ACCENT_BG : "#FCEBEB", fontSize: 13, color: selectedOpt === quizQuestions[quizIdx].a ? "#2A1040" : "#501313", lineHeight: 1.6 }}>
                  {quizQuestions[quizIdx].fb}
                </div>
              )}
              {quizAnswered && (
                <button onClick={nextQuiz}
                  style={{ marginTop: 12, fontSize: 13, padding: "7px 18px", border: "0.5px solid #333", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#333" }}>
                  {quizIdx + 1 < QUIZ_COUNT ? "Question suivante →" : "Voir mon score"}
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

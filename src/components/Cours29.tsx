"use client";

/**
 * Cours29.tsx
 * Harmonia · Niveau 3 · Cours 29 — Analyse comparative du répertoire
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { useTerm } from "@/hooks/useTerm";
import { cours29Content } from "@/data/cours29Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";
import { VueConservatoire } from "@/components/VueConservatoire";
import { CONSERVATOIRE_DATA_29 } from "@/data/conservatoireData29";

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

// ── Données périodes ───────────────────────────────────────────────────────────

interface Periode {
  id: string;
  nom: string;
  annees: string;
  compositeurs: string;
  couleur: string;
  bg: string;
  caracteristiques: string[];
  progression: string;
  dotKeys: string[];
}

const PERIODES: Periode[] = [
  {
    id: "baroque",
    nom: "Baroque",
    annees: "1600–1750",
    compositeurs: "Bach, Haendel",
    couleur: "#7B4F00",
    bg: "#FDF3E7",
    caracteristiques: [
      "Basse continue",
      "Fonctions tonales claires",
      "Contrepoint rigoureux",
      "Cadences fréquentes et affirmées",
    ],
    progression: "I–V6–I (cadence baroque simple)",
    dotKeys: ["Do:3", "Mi:3", "Sol:3", "Sol:2", "Si:2", "Sol:3", "Do:3", "Mi:3", "Sol:3"],
  },
  {
    id: "classique",
    nom: "Classique",
    annees: "1750–1820",
    compositeurs: "Mozart, Haydn",
    couleur: "#185FA5",
    bg: "#E6F1FB",
    caracteristiques: [
      "Phrases symétriques (4+4 mesures)",
      "Harmonie économe et claire",
      "Cadences parfaites affirmées",
      "Basse d'Alberti",
    ],
    progression: "I–IV–V7–I (classique économe)",
    dotKeys: ["Do:3", "Mi:3", "Sol:3", "Fa:2", "La:2", "Do:3", "Sol:2", "Si:2", "Ré:3", "Fa:3", "Do:3", "Mi:3", "Sol:3"],
  },
  {
    id: "romantique",
    nom: "Romantique",
    annees: "1820–1900",
    compositeurs: "Schubert, Chopin, Wagner",
    couleur: "#993C1D",
    bg: "#FAECE7",
    caracteristiques: [
      "Chromatisme envahissant",
      "Modulations par tierce",
      "Accords altérés expressifs",
      "Ambiguïté tonale croissante",
    ],
    progression: "Im–bVI–III–VI (modulation par tierces)",
    dotKeys: ["Do:3", "Mib:3", "Sol:3", "Lab:2", "Do:3", "Mib:3", "Mi:2", "Sol#:2", "Si:2", "La:2", "Do:3", "Mi:3"],
  },
  {
    id: "postromantique",
    nom: "Post-romantique",
    annees: "1880–1920",
    compositeurs: "Wagner tardif, Mahler, Strauss",
    couleur: "#5C3D6E",
    bg: "#F0EBF8",
    caracteristiques: [
      "Tonalité élargie mais présente",
      "Chromatisme total",
      "Accords de 9e, 11e, 13e",
      "Tension maintenue longtemps",
    ],
    progression: "I–III–bVII–I (ambiguïté harmonique)",
    dotKeys: ["Do:3", "Mi:3", "Sol:3", "Mi:3", "Sol:3", "Si:3", "Sib:2", "Ré:3", "Fa:3", "Do:3", "Mi:3", "Sol:3"],
  },
  {
    id: "impressionniste",
    nom: "Impressionniste",
    annees: "1890–1930",
    compositeurs: "Debussy, Ravel",
    couleur: "#0F6E56",
    bg: "#E1F5EE",
    caracteristiques: [
      "Accords par couleur non par fonction",
      "Modes, pentatonique, gamme par tons",
      "Parallélismes (planing)",
      "Fonctions flottantes",
    ],
    progression: "Planing Maj7 ascendant (sans résolution)",
    dotKeys: ["Do:4", "Mi:4", "Sol:4", "Si:4", "Ré:4", "Fa#:4", "La:4", "Do#:5", "Mi:4", "Sol#:4", "Si:4", "Ré#:5"],
  },
];

// ── Données harmonisations ──────────────────────────────────────────────────

interface Harmonisation {
  nom: string;
  dotKeys: string[];
  description: string;
  accent: string;
  bg: string;
}

const HARMONISATIONS: Harmonisation[] = [
  {
    nom: "Baroque (Bach)",
    dotKeys: ["Do:3", "Mi:3", "Sol:3", "Sol:2", "Si:2", "Sol:3", "Do:3"],
    description: "Contrepoint strict, cadence V7–I affirmée. La mélodie est soutenue par un contrepoint indépendant.",
    accent: "#7B4F00",
    bg: "#FDF3E7",
  },
  {
    nom: "Classique (Mozart)",
    dotKeys: ["Do:3", "Mi:3", "Sol:3", "Fa:2", "La:2", "Do:3", "Sol:2", "Si:2", "Ré:3", "Do:3", "Mi:3", "Sol:3"],
    description: "I–IV–V–I économe et clair. La basse d'Alberti accompagne discrètement.",
    accent: "#185FA5",
    bg: "#E6F1FB",
  },
  {
    nom: "Romantique (Chopin)",
    dotKeys: ["Do:3", "Mi:3", "Sol:3", "Lab:2", "Do:3", "Mib:3", "Sol:2", "Si:2", "Ré:3", "Do:3", "Mi:3", "Sol:3"],
    description: "I–bVI–V–I avec chromatisme. L'emprunt au mineur crée une couleur sombre inattendue.",
    accent: "#993C1D",
    bg: "#FAECE7",
  },
  {
    nom: "Post-romantique (Wagner)",
    dotKeys: ["Do:3", "Mi:3", "Sol:3", "Mi:3", "Sol#:3", "Si:3", "Sib:2", "Ré:3", "Fa:3", "Do:3", "Mi:3", "Sol:3"],
    description: "I–III–bVII–I avec ambiguïté tonale. La tonique arrive mais après un détour inattendu.",
    accent: "#5C3D6E",
    bg: "#F0EBF8",
  },
  {
    nom: "Impressionniste (Debussy)",
    dotKeys: ["Do:4", "Mi:4", "Sol:4", "Si:4", "Ré:4", "Fa#:4", "La:4", "Do#:5", "Do:4", "Mi:4", "Sol:4", "Si:4"],
    description: "Accords de 9e en parallèles. Pas de résolution fonctionnelle — la couleur prime sur la tension.",
    accent: "#0F6E56",
    bg: "#E1F5EE",
  },
];

// ── Config ────────────────────────────────────────────────────────────────────

const SECTIONS_IDS = ["evolution", "comparaison", "conservatoire", "quiz"] as const;
const QUIZ_COUNT = 10;

const ACCENT = "#2D5C3A";
const ACCENT_BG = "#E8F5EE";

// ── Styles ────────────────────────────────────────────────────────────────────

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
  infoBox:  { borderLeft: `2px solid ${ACCENT}`, padding: "8px 14px", background: ACCENT_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#1A3A20", lineHeight: 1.6 } as React.CSSProperties,
};

// ── Composant principal ────────────────────────────────────────────────────────

export default function Cours29() {
  const [activeSection, setActiveSection] = useState<string>("evolution");
  const i18n = useCoursI18n("cours29");
  const tr = useTerm();
  const { questions: ALL_QUESTIONS } = useCoursContent(cours29Content);

  // Section 1 — évolution
  const [activePeriode, setActivePeriode] = useState<string | null>(null);

  // Section 2 — comparaison
  const [activeHarmo, setActiveHarmo] = useState<number | null>(null);

  // Quiz
  const [quizQuestions] = useState(() => shuffle(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [quizIdx,      setQuizIdx]      = useState(0);
  const [quizScore,    setQuizScore]    = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizDone,     setQuizDone]     = useState(false);
  const [selectedOpt,  setSelectedOpt]  = useState<number | null>(null);

  const pianoRef = useRef<PianoPlayerRef>(null);

  const sectionLabel = (id: string) => {
    if (id === "evolution")     return "Évolution harmonique";
    if (id === "comparaison")   return "Même mélodie, 5 styles";
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
        <PianoPlayer ref={pianoRef} octaves={5} startOctave={2} showLabels={false} />
      </div>

      {/* Header */}
      <div style={S.header}>
        <span style={S.badge}>Niveau 3 · Cours 29</span>
        <h1 style={S.h1}>{tr("Analyse comparative du répertoire")}</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Claude Debussy"
        period="1862–1918"
        emoji="🎨"
        concept="Évolution du langage harmonique"
        anecdote="Debussy refusait d'être appelé 'impressionniste'. Il préférait 'musicien français'. Mais quand on lui demandait ses règles harmoniques, il répondait : 'Mon plaisir est ma règle.' Paradoxalement, sa liberté apparente repose sur une connaissance parfaite de tout ce qu'il transgressait."
        lesson="Pour s'affranchir des règles, il faut d'abord les maîtriser parfaitement."
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

      {/* ══ SECTION 1 : ÉVOLUTION HARMONIQUE ══ */}
      {activeSection === "evolution" && (
        <div>
          <h2 style={S.h2}>L'évolution du langage harmonique</h2>
          <p style={S.p}>
            Du baroque à l'impressionnisme, le langage harmonique a traversé 5 grandes périodes stylistiques. Chacune redéfinit le rapport à la dissonance, à la résolution et aux fonctions tonales. Cliquez sur une période pour l'explorer.
          </p>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: 10, marginBottom: 24 }}>
            {PERIODES.map(periode => {
              const isOpen = activePeriode === periode.id;
              return (
                <div key={periode.id} style={{ border: `0.5px solid ${isOpen ? periode.couleur : "#e5e5e5"}`, borderRadius: 10, overflow: "hidden", transition: "border-color .15s" }}>
                  {/* En-tête de la période */}
                  <button
                    onClick={() => setActivePeriode(isOpen ? null : periode.id)}
                    style={{
                      width: "100%", display: "flex", alignItems: "center", gap: 14,
                      padding: "14px 16px", background: isOpen ? periode.bg : "#fff",
                      border: "none", cursor: "pointer", textAlign: "left" as const,
                      transition: "background .15s",
                    }}
                  >
                    <div style={{ flexShrink: 0, width: 10, height: 10, borderRadius: "50%", background: periode.couleur }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                        <span style={{ fontSize: 15, fontWeight: 600, color: periode.couleur }}>{periode.nom}</span>
                        <span style={{ fontSize: 12, color: "#888" }}>{periode.annees}</span>
                      </div>
                      <div style={{ fontSize: 12, color: "#666", marginTop: 2 }}>{periode.compositeurs}</div>
                    </div>
                    <span style={{ fontSize: 12, color: "#aaa", flexShrink: 0 }}>{isOpen ? "▲" : "▼"}</span>
                  </button>

                  {/* Contenu expandé */}
                  {isOpen && (
                    <div style={{ padding: "0 16px 16px", background: periode.bg }}>
                      {/* Caractéristiques */}
                      <div style={{ marginBottom: 14 }}>
                        <div style={{ fontSize: 11, fontWeight: 700, color: periode.couleur, letterSpacing: "0.08em", marginBottom: 8 }}>CARACTÉRISTIQUES</div>
                        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 6 }}>
                          {periode.caracteristiques.map((c, i) => (
                            <span key={i} style={{ fontSize: 12, padding: "3px 10px", background: "#fff", border: `0.5px solid ${periode.couleur}`, borderRadius: 20, color: periode.couleur }}>
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Progression */}
                      <div style={{ marginBottom: 14 }}>
                        <div style={{ fontSize: 11, fontWeight: 700, color: periode.couleur, letterSpacing: "0.08em", marginBottom: 6 }}>PROGRESSION TYPE</div>
                        <div style={{ fontFamily: "monospace", fontSize: 13, color: "#333", background: "#fff", padding: "6px 12px", borderRadius: 6 }}>
                          {periode.progression}
                        </div>
                      </div>

                      {/* Bouton écouter */}
                      <button
                        onClick={() => playScale(pianoRef as React.RefObject<PianoPlayerRef>, periode.dotKeys, 380)}
                        style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${periode.couleur}`, borderRadius: 20, cursor: "pointer", background: "#fff", color: periode.couleur }}
                      >
                        ▶ Écouter la progression
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div style={S.infoBox}>
            <strong>Critère d'identification :</strong> quelle est la relation à la dominante ?
            Bach : obligatoire — Mozart : affirmée et économe — Schubert : enrichie — Wagner : suspendue — Debussy : inexistante.
          </div>
        </div>
      )}

      {/* ══ SECTION 2 : MÊME MÉLODIE, 5 STYLES ══ */}
      {activeSection === "comparaison" && (
        <div>
          <h2 style={S.h2}>Même mélodie, 5 harmonisations</h2>
          <p style={S.p}>
            La mélodie Do–Mi–Sol–Do est harmonisée ici dans 5 styles différents. Même mélodie, univers harmoniques radicalement distincts. Comparez le traitement de la dominante, des dissonances et des couleurs selon chaque période.
          </p>

          {/* Mélodie commune */}
          <div style={{ marginBottom: 20, padding: "12px 16px", background: "#f8f8f8", borderRadius: 10, border: "0.5px solid #e5e5e5" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#888", letterSpacing: "0.08em", marginBottom: 6 }}>MÉLODIE COMMUNE</div>
            <div style={{ fontFamily: "monospace", fontSize: 15, color: "#333", letterSpacing: "0.05em" }}>Do — Mi — Sol — Do</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
            {HARMONISATIONS.map((h, idx) => {
              const isActive = activeHarmo === idx;
              return (
                <div
                  key={idx}
                  style={{
                    border: `0.5px solid ${isActive ? h.accent : "#e5e5e5"}`,
                    borderRadius: 10, overflow: "hidden",
                    transition: "border-color .15s",
                  }}
                >
                  {/* En-tête */}
                  <div style={{ padding: "12px 16px", background: isActive ? h.bg : "#fff", display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ flexShrink: 0, width: 10, height: 10, borderRadius: "50%", background: h.accent }} />
                    <span style={{ flex: 1, fontSize: 14, fontWeight: 500, color: isActive ? h.accent : "#111" }}>{h.nom}</span>
                    <button
                      onClick={() => {
                        setActiveHarmo(isActive ? null : idx);
                        playScale(pianoRef as React.RefObject<PianoPlayerRef>, h.dotKeys, 400);
                      }}
                      style={{ fontSize: 12, padding: "4px 12px", border: `0.5px solid ${h.accent}`, borderRadius: 20, cursor: "pointer", background: "#fff", color: h.accent, flexShrink: 0 }}
                    >
                      ▶ Écouter
                    </button>
                  </div>

                  {/* Description */}
                  {isActive && (
                    <div style={{ padding: "10px 16px 14px", background: h.bg, borderTop: `0.5px solid ${h.accent}20` }}>
                      <p style={{ fontSize: 13, color: "#444", lineHeight: 1.65, margin: 0 }}>{h.description}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{ ...S.infoBox, marginTop: 20 }}>
            <strong>À observer :</strong> comparez la basse sur le 2e accord de chaque harmonisation. Bach descend vers la dominante Sol. Debussy monte en parallèle. La différence est là — dans la logique de mouvement de la basse.
          </div>
        </div>
      )}

      {/* ══ SECTION 3 : CONSERVATOIRE ══ */}
      {activeSection === "conservatoire" && <VueConservatoire data={CONSERVATOIRE_DATA_29} />}

      {/* ══ SECTION 4 : QUIZ ══ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.h2}>Quiz — Analyse comparative du répertoire</h2>
          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 8 ? "🎨" : quizScore >= 6 ? "👍" : "💪"}
              </div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>
                Score : {quizScore} / {QUIZ_COUNT}
              </div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
                {quizScore >= 8
                  ? "Excellent ! Vous identifiez les styles harmoniques avec précision."
                  : quizScore >= 6
                  ? "Bien ! Revoyez les critères d'identification des périodes romantique et impressionniste."
                  : "Continuez — relisez les 5 périodes et leurs critères distinctifs."}
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
                    if (isCorrect)       { bg = ACCENT_BG; border = ACCENT; color = "#1A3A20"; }
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
                <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 8, background: selectedOpt === quizQuestions[quizIdx].a ? ACCENT_BG : "#FCEBEB", fontSize: 13, color: selectedOpt === quizQuestions[quizIdx].a ? "#1A3A20" : "#501313", lineHeight: 1.6 }}>
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

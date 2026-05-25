"use client";

/**
 * Cours31.tsx
 * Harmonia · Niveau 4 · Cours 31 — Polytonalité et harmonie quartale
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { useTerm } from "@/hooks/useTerm";
import { cours31Content } from "@/data/cours31Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";
import { VueConservatoire } from "@/components/VueConservatoire";
import { CONSERVATOIRE_DATA_31 } from "@/data/conservatoireData31";

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

// ── Exemples bitonaux ──────────────────────────────────────────────────────────

interface ExempleBitonal {
  titre: string;
  description: string;
  couche1?: string;
  couche2?: string;
  dotKeys1?: string[];
  dotKeys2?: string[];
  dotKeysMix: string[];
  couleur: string;
}

const EXEMPLES_BITONAUX: ExempleBitonal[] = [
  {
    titre: "Stravinsky — Pétrouchka",
    description: "Le célèbre 'accord de Pétrouchka' superpose Do majeur (Do–Mi–Sol) et Fa# majeur (Fa#–La#–Do#). Intervalle entre les toniques : un triton — le maximum de tension.",
    couche1: "Do majeur : Do–Mi–Sol",
    couche2: "Fa# majeur : Fa#–La#–Do#",
    dotKeys1: ["Do:3","Mi:3","Sol:3"],
    dotKeys2: ["Fa#:3","La#:3","Do#:4"],
    dotKeysMix: ["Do:3","Mi:3","Fa#:3","La#:3","Do#:4"],
    couleur: "Tension brutale, choc tonal, tragédie du personnage",
  },
  {
    titre: "Polytonalité douce — Do + Sol",
    description: "Deux tonalités à distance de quinte : beaucoup moins de tension que le triton. Les harmoniques naturelles rendent Do et Sol proches — la polytonalité est subtile.",
    couche1: "Do majeur",
    couche2: "Sol majeur superposé",
    dotKeysMix: ["Do:3","Mi:3","Sol:3","Si:3","Ré:4"],
    couleur: "Flottement doux, ambiguïté tonale légère",
  },
  {
    titre: "Slash chord G/F#",
    description: "Accord de Sol majeur sur basse Fa# — le Fa# crée une tension avec la fondamentale Sol. Courant dans le rock progressif et le jazz fusion.",
    couche1: "Sol majeur : Sol–Si–Ré",
    couche2: "Basse Fa# (non-harmonique)",
    dotKeysMix: ["Fa#:2","Sol:3","Si:3","Ré:4"],
    couleur: "Tension basse/accord, modernité, ambiguïté résoluble",
  },
];

// ── Accords quartaux ───────────────────────────────────────────────────────────

interface AccordQuartal {
  nom: string;
  description: string;
  structure: string;
  dotKeys: string[];
  effet: string;
}

const ACCORDS_QUARTAUX: AccordQuartal[] = [
  {
    nom: "Quarte pure × 3",
    description: "Trois quartes justes empilées : Do–Fa–Sib. Aucune tierce → pas de majeur ni de mineur.",
    structure: "Do + quarte → Fa + quarte → Sib",
    dotKeys: ["Do:3","Fa:3","Sib:3"],
    effet: "Ambiguïté pure — l'accord ne 'tire' pas vers une résolution",
  },
  {
    nom: "Quarte + triton",
    description: "Quarte juste + quarte augmentée (triton) : Do–Fa–Si. Le triton final crée une légère aspérité.",
    structure: "Do + quarte juste → Fa + triton → Si",
    dotKeys: ["Do:3","Fa:3","Si:3"],
    effet: "Plus tendu que la quarte pure — aspérité caractéristique",
  },
  {
    nom: "McCoy Tyner voicing",
    description: "Voicing à 4 notes en quartes : Ré–Sol–Do–Fa. Signature du piano jazz modal (Coltrane quartet).",
    structure: "4 quartes justes empilées à partir de Ré",
    dotKeys: ["Ré:3","Sol:3","Do:4","Fa:4"],
    effet: "Son 'modal jazz' immédiatement reconnaissable — ouverture harmonique totale",
  },
  {
    nom: "So What chord",
    description: "L'accord signature de 'So What' de Miles Davis : 4 quartes + tierce majeure au sommet. Ré–Sol–Do–Fa–La.",
    structure: "4 quartes + tierce maj (Do–La au sommet)",
    dotKeys: ["Ré:3","Sol:3","Do:4","Fa:4","La:4"],
    effet: "Accord emblématique du jazz modal — spacieux, ni majeur ni mineur",
  },
];

// ── Navigation ─────────────────────────────────────────────────────────────────

const SECTIONS_IDS = ["polytonalite", "quartale", "conservatoire", "quiz"] as const;
const QUIZ_COUNT = 10;

const ACCENT = "#6B2D5E";
const ACCENT_BG = "#F5EAF3";

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
  infoBox:  { borderLeft: `2px solid ${ACCENT}`, padding: "8px 14px", background: ACCENT_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#3D0F33", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
};

export default function Cours31() {
  const [activeSection, setActiveSection] = useState<string>("polytonalite");
  const i18n = useCoursI18n("cours31");
  const tr = useTerm();
  const { questions: ALL_QUESTIONS } = useCoursContent(cours31Content);

  const [quizQuestions] = useState(() => shuffle(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [quizIdx,      setQuizIdx]      = useState(0);
  const [quizScore,    setQuizScore]    = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizDone,     setQuizDone]     = useState(false);
  const [selectedOpt,  setSelectedOpt]  = useState<number | null>(null);

  const pianoRef = useRef<PianoPlayerRef>(null);

  const sectionLabel = (id: string) => {
    if (id === "polytonalite") return "Polytonalité";
    if (id === "quartale") return "Harmonie quartale";
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
        <span style={S.badge}>Niveau 4 · Cours 31</span>
        <h1 style={S.h1}>{tr("Polytonalité et harmonie quartale")}</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Igor Stravinsky"
        period="1882–1971"
        emoji="⚡"
        concept="Choc des tonalités"
        anecdote="La première de 'Le Sacre du Printemps' en 1913 provoqua une émeute dans la salle. Stravinsky superposait des tonalités si éloignées que le public crut à une erreur. L'accord de Pétrouchka — Do majeur contre Fa# majeur, un triton — est la signature de cette brutalité choisie."
        lesson="La tension polytonale n'est pas une erreur — c'est un langage. La distance entre les tonalités contrôle l'intensité du choc."
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

      {/* ══ SECTION 1 : POLYTONALITÉ ══ */}
      {activeSection === "polytonalite" && (
        <div>
          <h2 style={S.h2}>Polytonalité — deux tonalités simultanées</h2>
          <p style={S.p}>
            La polytonalité superpose deux (ou plusieurs) tonalités distinctes en même temps. Contrairement à l'atonalité, chaque couche reste tonale — c'est leur combinaison qui crée la tension ou l'ambiguïté.
          </p>

          <div style={S.infoBox}>
            <strong>Bitonalité vs polytonalité :</strong> La bitonalité est la forme la plus courante — exactement deux tonalités superposées. La distance entre les toniques détermine l'intensité du choc : tierce (douce) → quinte (floue) → triton (brutal). Stravinsky privilégiait le triton pour sa tension maximale.
          </div>

          {/* Exemples bitonaux */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 12px", color: "#111" }}>
            Exemples et techniques bitonales
          </h3>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 12, marginBottom: 24 }}>
            {EXEMPLES_BITONAUX.map((ex, idx) => (
              <div key={idx} style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, overflow: "hidden" }}>
                <div style={{ padding: "14px 16px" }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#111", marginBottom: 6 }}>{ex.titre}</div>
                  <div style={{ fontSize: 13, color: "#555", lineHeight: 1.65, marginBottom: 8 }}>{ex.description}</div>
                  {ex.couche1 && (
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const, marginBottom: 8 }}>
                      <div style={{ fontFamily: "monospace", fontSize: 12, color: ACCENT, background: ACCENT_BG, padding: "3px 8px", borderRadius: 4 }}>
                        Couche 1 : {ex.couche1}
                      </div>
                      {ex.couche2 && (
                        <div style={{ fontFamily: "monospace", fontSize: 12, color: "#5C3D6E", background: "#F0EBF8", padding: "3px 8px", borderRadius: 4 }}>
                          Couche 2 : {ex.couche2}
                        </div>
                      )}
                    </div>
                  )}
                  <div style={{ fontSize: 12, color: "#777", fontStyle: "italic", marginBottom: 10 }}>
                    Effet : {ex.couleur}
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const }}>
                    {ex.dotKeys1 && (
                      <button
                        onClick={() => playChord(pianoRef as React.RefObject<PianoPlayerRef>, ex.dotKeys1!)}
                        style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${ACCENT}`, borderRadius: 16, cursor: "pointer", background: "transparent", color: ACCENT }}
                      >
                        ▶ Couche 1
                      </button>
                    )}
                    {ex.dotKeys2 && (
                      <button
                        onClick={() => playChord(pianoRef as React.RefObject<PianoPlayerRef>, ex.dotKeys2!)}
                        style={{ fontSize: 11, padding: "4px 12px", border: "0.5px solid #5C3D6E", borderRadius: 16, cursor: "pointer", background: "transparent", color: "#5C3D6E" }}
                      >
                        ▶ Couche 2
                      </button>
                    )}
                    <button
                      onClick={() => playChord(pianoRef as React.RefObject<PianoPlayerRef>, ex.dotKeysMix)}
                      style={{ fontSize: 11, padding: "4px 12px", border: "0.5px solid #333", borderRadius: 16, cursor: "pointer", background: "#111", color: "#fff" }}
                    >
                      ▶ Superposition
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={S.warnBox}>
            <strong>Polytonalité ≠ atonalité :</strong> Dans la musique polytonale, on entend encore des centres tonaux — simplement plusieurs à la fois. L'analyse doit identifier chaque couche séparément. Confondre les deux systèmes est l'erreur la plus fréquente.
          </div>

          <div style={S.infoBox}>
            <strong>Analyse polytonale :</strong> Identifier d'abord chaque couche indépendamment, puis noter la distance entre les toniques (tierce, quinte, triton...). L'effet dépend directement de cette distance : toniques à la tierce = polytonalité douce (Milhaud) ; toniques au triton = choc maximal (Stravinsky).
          </div>
        </div>
      )}

      {/* ══ SECTION 2 : HARMONIE QUARTALE ══ */}
      {activeSection === "quartale" && (
        <div>
          <h2 style={S.h2}>Harmonie quartale — construire en quartes</h2>
          <p style={S.p}>
            L'harmonie quartale remplace l'empilement de tierces (Do–Mi–Sol) par l'empilement de quartes (Do–Fa–Sib). Sans tierce, l'accord n'est ni majeur ni mineur — il crée une ambiguïté moderne caractéristique du jazz modal et de la musique du XXe siècle.
          </p>

          <div style={S.infoBox}>
            <strong>Pourquoi les quartes changent tout :</strong> Un accord en tierces (triade) a une qualité définie (majeur/mineur) et une fonction tonale forte. Un accord en quartes n'a ni qualité ni fonction claire — il flotte. C'est précisément cette neutralité que Miles Davis et McCoy Tyner exploitaient dans le jazz modal.
          </div>

          {/* Accords quartaux */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 12px", color: "#111" }}>
            Accords quartaux fondamentaux
          </h3>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 10, marginBottom: 24 }}>
            {ACCORDS_QUARTAUX.map((aq, idx) => (
              <div key={idx} style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "14px 16px", background: "#fff" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" as const }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#111", marginBottom: 4 }}>{aq.nom}</div>
                    <div style={{ fontFamily: "monospace", fontSize: 12, color: ACCENT, background: ACCENT_BG, padding: "3px 8px", borderRadius: 4, display: "inline-block", marginBottom: 6 }}>
                      {aq.structure}
                    </div>
                    <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6, marginBottom: 4 }}>{aq.description}</div>
                    <div style={{ fontSize: 12, color: "#777", fontStyle: "italic" }}>
                      Effet : {aq.effet}
                    </div>
                    <div style={{ fontFamily: "monospace", fontSize: 12, color: ACCENT, marginTop: 4 }}>
                      Notes : {aq.dotKeys.join(" – ")}
                    </div>
                  </div>
                  <button
                    onClick={() => playChord(pianoRef as React.RefObject<PianoPlayerRef>, aq.dotKeys)}
                    style={{ fontSize: 11, padding: "5px 14px", border: `0.5px solid ${ACCENT}`, borderRadius: 20, cursor: "pointer", background: ACCENT_BG, color: ACCENT, flexShrink: 0 }}
                  >
                    ▶ Écouter
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Construction du So What chord */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "0 0 12px", color: "#111" }}>
            Construire le So What chord sur toute note
          </h3>
          <p style={S.p}>
            Le So What chord suit toujours la même formule : <strong>Note + quarte + quarte + quarte + tierce majeure</strong>. Sur Ré : Ré–Sol–Do–Fa–La. Cette formule transpose exactement partout.
          </p>
          <div style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "14px 16px", background: "#fff", marginBottom: 20 }}>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" as const }}>
              {[
                { label: "So What (Ré)", dotKeys: ["Ré:3","Sol:3","Do:4","Fa:4","La:4"] },
                { label: "Transposé (Sol)", dotKeys: ["Sol:3","Do:4","Fa:4","Sib:4","Ré:5"] },
              ].map((ex, i) => (
                <div key={i} style={{ flex: 1, minWidth: 150 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#111", marginBottom: 4 }}>{ex.label}</div>
                  <div style={{ fontFamily: "monospace", fontSize: 12, color: ACCENT, marginBottom: 8 }}>
                    {ex.dotKeys.join(" – ")}
                  </div>
                  <button
                    onClick={() => playChord(pianoRef as React.RefObject<PianoPlayerRef>, ex.dotKeys)}
                    style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${ACCENT}`, borderRadius: 16, cursor: "pointer", background: ACCENT_BG, color: ACCENT }}
                  >
                    ▶ Écouter
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div style={S.warnBox}>
            <strong>Erreur fréquente :</strong> Analyser les accords quartaux avec les fonctions T/SD/D. L'harmonie quartale fonctionne par couleur et ambiguïté, pas par progression fonctionnelle. Dans "So What", les deux accords (Ré et Mib) ne sont pas une II–III — ce sont deux couleurs juxtaposées.
          </div>
        </div>
      )}

      {/* ══ SECTION 3 : CONSERVATOIRE ══ */}
      {activeSection === "conservatoire" && <VueConservatoire data={CONSERVATOIRE_DATA_31} />}

      {/* ══ SECTION 4 : QUIZ ══ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.h2}>Quiz — Polytonalité et harmonie quartale</h2>
          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 8 ? "⚡" : quizScore >= 6 ? "👍" : "💪"}
              </div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>
                Score : {quizScore} / {QUIZ_COUNT}
              </div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
                {quizScore >= 8 ? "Excellent ! Vous maîtrisez la polytonalité et l'harmonie quartale." :
                 quizScore >= 6 ? "Bien ! Revoyez les accords quartaux et l'accord de Pétrouchka." :
                 "Continuez — relisez les sections Polytonalité et Harmonie quartale."}
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
                    if (isCorrect)       { bg = ACCENT_BG; border = ACCENT; color = "#3D0F33"; }
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
                <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 8, background: selectedOpt === quizQuestions[quizIdx].a ? ACCENT_BG : "#FCEBEB", fontSize: 13, color: selectedOpt === quizQuestions[quizIdx].a ? "#3D0F33" : "#501313", lineHeight: 1.6 }}>
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

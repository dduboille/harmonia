"use client";

/**
 * Cours25.tsx
 * Harmonia · Niveau 2 · Cours 25 — Le chromatisme et l'harmonie chromatique avancée
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { useTerm } from "@/hooks/useTerm";
import { cours25Content } from "@/data/cours25Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";
import { VueConservatoire } from "@/components/VueConservatoire";
import { CONSERVATOIRE_DATA_25 } from "@/data/conservatoireData25";

function playScale(ref: React.RefObject<PianoPlayerRef>, notes: string[], gap = 320) {
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

// ── Données lignes chromatiques ────────────────────────────────────────────────

interface LigneChromatique {
  id: string;
  nom: string;
  desc: string;
  exemple: string;
  dotKeys: string[];
  color: string;
  bg: string;
}

const LIGNES: LigneChromatique[] = [
  {
    id: "lamento",
    nom: "Basse de lamento",
    desc: "Descente chromatique de quarte, de la tonique à la dominante. La ligne de basse la plus expressive du baroque — elle évoque le deuil, la plainte, l'inéluctable. Purcell, Haendel, Pachelbel y ont tous recours pour les moments les plus intenses.",
    exemple: "Do – Si – Sib – La – Lab – Sol (en Do mineur)",
    dotKeys: ["Do:3", "Si:2", "Sib:2", "La:2", "Lab:2", "Sol:2"],
    color: "#1A5C3A",
    bg: "#E8F5EE",
  },
  {
    id: "sensibilisation",
    nom: "Chromatisme ascendant",
    desc: "Montée chromatique par demi-tons — chaque note est sensibilisée vers la suivante. Crée une tension croissante et inévitable. Fréquent dans le romantisme pour exprimer l'aspiration, le désir, la montée dramatique.",
    exemple: "Do – Do# – Ré – Ré# – Mi – Fa (en Do majeur)",
    dotKeys: ["Do:4", "Do#:4", "Ré:4", "Ré#:4", "Mi:4", "Fa:4"],
    color: "#185FA5",
    bg: "#E6F1FB",
  },
  {
    id: "broderie",
    nom: "Broderie chromatique",
    desc: "Note auxiliaire à demi-ton de la note principale — plus serrée qu'une broderie diatonique. L'effet est d'une expression intensifiée, d'un frisson autour d'une note centrale. Bach et Chopin en font un usage raffiné.",
    exemple: "Sol – Fa# – Sol (broderie inférieure chromatique)",
    dotKeys: ["Sol:4", "Fa#:4", "Sol:4", "Sol:4"],
    color: "#993C1D",
    bg: "#FAECE7",
  },
];

// ── Accords ambigus ────────────────────────────────────────────────────────────

const DIM7_RESOLUTIONS = [
  { tonalite: "La mineur",    accord: "Sol#dim7 → La mineur",  dotKeys: ["Sol#:3", "Si:3", "Ré:4", "Fa:4"] },
  { tonalite: "Do mineur",    accord: "Sidim7 → Do mineur",    dotKeys: ["Si:3", "Ré:4", "Fa:4", "Lab:4"] },
  { tonalite: "Mib mineur",   accord: "Rédim7 → Mib mineur",   dotKeys: ["Ré:3", "Fa:3", "Lab:3", "Si:3"] },
  { tonalite: "Fa# mineur",   accord: "Fadim7 → Fa# mineur",   dotKeys: ["Fa:3", "Lab:3", "Si:3", "Ré:4"] },
];

const SECTIONS_IDS = ["lignes", "ambiguite", "conservatoire", "quiz"] as const;
const QUIZ_COUNT = 10;

const ACCENT = "#1A5C3A";
const ACCENT_BG = "#E8F5EE";

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
  infoBox:  { borderLeft: `2px solid ${ACCENT}`, padding: "8px 14px", background: ACCENT_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#0E3D26", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
};

export default function Cours25() {
  const [activeSection, setActiveSection] = useState<string>("lignes");
  const i18n = useCoursI18n("cours25");
  const tr = useTerm();
  const { questions: ALL_QUESTIONS } = useCoursContent(cours25Content);

  const [activeLigne, setActiveLigne] = useState<string | null>(null);
  const [showTristan, setShowTristan] = useState(false);
  const [showDim7, setShowDim7] = useState(false);

  const [quizQuestions] = useState(() => shuffle(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [quizIdx,      setQuizIdx]      = useState(0);
  const [quizScore,    setQuizScore]    = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizDone,     setQuizDone]     = useState(false);
  const [selectedOpt,  setSelectedOpt]  = useState<number | null>(null);

  const pianoRef = useRef<PianoPlayerRef>(null);

  const sectionLabel = (id: string) => {
    if (id === "lignes")     return "Lignes chromatiques";
    if (id === "ambiguite")  return "Ambiguïté tonale";
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
        <PianoPlayer ref={pianoRef} octaves={3} startOctave={2} showLabels={false} />
      </div>

      {/* Header */}
      <div style={S.header}>
        <span style={S.badge}>Niveau 2 · Cours 25</span>
        <h1 style={S.h1}>{tr("Le chromatisme et l'harmonie chromatique avancée")}</h1>
        <p style={S.subtitle}>Lignes chromatiques, accord de Tristan, modulation enharmonique — la tonalité poussée à ses limites.</p>
      </div>

      <MaitreCard
        composer="Richard Wagner"
        period="1813–1883"
        emoji="🎭"
        concept="Chromatisme et ambiguïté tonale"
        anecdote="Le Prélude de Tristan und Isolde commence sur un accord que les théoriciens débattent encore aujourd'hui. Wagner a poussé le chromatisme si loin que la tonalité elle-même devient incertaine — ouvrant la voie à Schönberg et à la musique du XXe siècle."
        lesson="Le chromatisme n'est pas une décoration — c'est une logique harmonique plus profonde."
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

      {/* ══ SECTION 1 : LIGNES CHROMATIQUES ══ */}
      {activeSection === "lignes" && (
        <div>
          <h2 style={S.h2}>Les grandes lignes chromatiques</h2>
          <p style={S.p}>
            Le chromatisme s'organise en <strong>lignes directionnelles</strong> — des mouvements par demi-tons qui créent une logique propre, distincte mais complémentaire de l'harmonie diatonique.
            Chaque ligne chromatique porte une signification expressive précise.
          </p>

          <p style={{ fontSize: 13, color: "#888", marginBottom: 16 }}>
            Cliquez sur une ligne pour l'explorer et l'écouter.
          </p>

          {LIGNES.map(ligne => (
            <div
              key={ligne.id}
              onClick={() => {
                setActiveLigne(activeLigne === ligne.id ? null : ligne.id);
                playScale(pianoRef as React.RefObject<PianoPlayerRef>, ligne.dotKeys, 380);
              }}
              style={{
                border: `0.5px solid ${activeLigne === ligne.id ? ligne.color : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 8,
                overflow: "hidden",
                cursor: "pointer",
                background: activeLigne === ligne.id ? ligne.bg : "#fff",
                transition: "all .15s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px" }}>
                <div style={{
                  fontSize: 11, fontWeight: 700, color: ligne.color,
                  background: ligne.bg, border: `0.5px solid ${ligne.color}`,
                  padding: "2px 8px", borderRadius: 6, fontFamily: "monospace",
                  flexShrink: 0,
                }}>
                  {ligne.id === "lamento" ? "↓" : ligne.id === "sensibilisation" ? "↑" : "~"}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>{ligne.nom}</div>
                  <div style={{ fontSize: 12, color: "#888", marginTop: 2, fontFamily: "monospace" }}>{ligne.exemple}</div>
                </div>
              </div>

              {activeLigne === ligne.id && (
                <div style={{ padding: "0 16px 16px", borderTop: `0.5px solid ${ligne.color}20` }}>
                  <p style={{ fontSize: 13, color: "#444", lineHeight: 1.7, marginTop: 12, marginBottom: 12 }}>
                    {ligne.desc}
                  </p>
                  <button
                    onClick={e => { e.stopPropagation(); playScale(pianoRef as React.RefObject<PianoPlayerRef>, ligne.dotKeys, 380); }}
                    style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${ligne.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: ligne.color }}
                  >
                    ▶ Réécouter
                  </button>
                </div>
              )}
            </div>
          ))}

          <div style={S.infoBox}>
            <strong>Règle universelle de résolution chromatique :</strong><br />
            ♯ monte (Do# → Ré) · ♭ descend (Réb → Do)<br />
            Ne jamais résoudre une note chromatique dans le sens opposé à son altération — c'est la faute la plus fréquente en harmonisation.
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "24px 0 12px", color: "#111" }}>
            Chromatisme ascendant vs descendant
          </h3>
          {[
            { dir: "Ascendant", desc: "Sensibilise vers le haut. Exprime l'aspiration, la montée dramatique, le désir.", color: "#1A5C3A", bg: "#E8F5EE" },
            { dir: "Descendant", desc: "Assombrit vers le bas. Exprime la résignation, la plainte, le deuil — c'est le chromatisme du lamento baroque.", color: "#993C1D", bg: "#FAECE7" },
          ].map(item => (
            <div key={item.dir} style={{ border: `0.5px solid ${item.color}40`, borderRadius: 10, marginBottom: 8, padding: "14px 16px", background: item.bg }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: item.color, marginBottom: 4 }}>{item.dir}</div>
              <div style={{ fontSize: 13, color: "#444", lineHeight: 1.65 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      )}

      {/* ══ SECTION 2 : AMBIGUÏTÉ TONALE ══ */}
      {activeSection === "ambiguite" && (
        <div>
          <h2 style={S.h2}>Ambiguïté tonale et enharmonie</h2>
          <p style={S.p}>
            Le chromatisme poussé à l'extrême crée des accords dont la <strong>fonction tonale devient délibérément ambiguë</strong>.
            Wagner, Liszt et leurs contemporains ont exploré cette zone frontière où la tonalité elle-même vacille.
          </p>

          {/* Accord de Tristan */}
          <div style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, marginBottom: 12, overflow: "hidden" }}>
            <div
              onClick={() => {
                setShowTristan(!showTristan);
                playScale(pianoRef as React.RefObject<PianoPlayerRef>, ["Fa:3", "Si:3", "Ré#:4", "Sol#:4"], 400);
              }}
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", cursor: "pointer" }}
            >
              <div>
                <div style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>L'accord de Tristan</div>
                <div style={{ fontSize: 12, color: "#888", fontFamily: "monospace", marginTop: 2 }}>Fa – Si – Ré# – Sol#</div>
              </div>
              <div style={{ fontSize: 11, color: ACCENT, fontWeight: 600 }}>{showTristan ? "▲ Masquer" : "▼ Analyser"}</div>
            </div>
            {showTristan && (
              <div style={{ padding: "0 16px 16px", borderTop: "0.5px solid #f0f0f0" }}>
                <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7, marginTop: 12 }}>
                  Cet accord ouvre le Prélude de <em>Tristan und Isolde</em> (1865). Depuis 160 ans, les théoriciens débattent de son analyse :
                </p>
                {[
                  { analyse: "IVm7 avec quinte augmentée", explication: "Fa–Lab–Do–Mib avec ♯5 → Fa–Lab–Do#–Mib (enharmonique de Ré#)" },
                  { analyse: "V7 de II avec 9e", explication: "Sol#7 (= Lab7) en état d'inversion, 2e renversement avec 9e ajoutée" },
                  { analyse: "Accord de sensible altéré", explication: "VII9 altéré de La mineur — la note Sol# attire vers La" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start" }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: ACCENT, background: ACCENT_BG, padding: "2px 6px", borderRadius: 4, flexShrink: 0, marginTop: 1 }}>
                      {i + 1}
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 500, color: "#111" }}>{item.analyse}</div>
                      <div style={{ fontSize: 12, color: "#666", lineHeight: 1.5 }}>{item.explication}</div>
                    </div>
                  </div>
                ))}
                <div style={S.infoBox}>
                  <strong>Conclusion :</strong> L'ambiguïté EST le message. Wagner refuse toute résolution claire — la tonalité de La mineur est suggérée mais jamais confirmée, créant une tension permanente sur toute la durée du prélude (16 minutes).
                </div>
                <button
                  onClick={e => { e.stopPropagation(); playScale(pianoRef as React.RefObject<PianoPlayerRef>, ["Fa:3", "Si:3", "Ré#:4", "Sol#:4"], 400); }}
                  style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${ACCENT}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: ACCENT }}
                >
                  ▶ Écouter l'accord de Tristan
                </button>
              </div>
            )}
          </div>

          {/* Diminué 7e et enharmonie */}
          <div style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, marginBottom: 12, overflow: "hidden" }}>
            <div
              onClick={() => {
                setShowDim7(!showDim7);
                playScale(pianoRef as React.RefObject<PianoPlayerRef>, ["Sol#:3", "Si:3", "Ré:4", "Fa:4"], 400);
              }}
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", cursor: "pointer" }}
            >
              <div>
                <div style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>Le diminué 7e et ses 4 visages</div>
                <div style={{ fontSize: 12, color: "#888", fontFamily: "monospace", marginTop: 2 }}>Sol# – Si – Ré – Fa</div>
              </div>
              <div style={{ fontSize: 11, color: ACCENT, fontWeight: 600 }}>{showDim7 ? "▲ Masquer" : "▼ Explorer"}</div>
            </div>
            {showDim7 && (
              <div style={{ padding: "0 16px 16px", borderTop: "0.5px solid #f0f0f0" }}>
                <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7, marginTop: 12 }}>
                  Le diminué 7e est symétrique — construit de tierces mineures égales. Ce qui le rend <strong>enharmoniquement ambigu</strong> : le même accord peut être réinterprété de 4 façons différentes, résolvant vers 4 tonalités distinctes.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
                  {DIM7_RESOLUTIONS.map((r, i) => (
                    <div
                      key={i}
                      onClick={e => { e.stopPropagation(); playScale(pianoRef as React.RefObject<PianoPlayerRef>, r.dotKeys, 350); }}
                      style={{ border: `0.5px solid ${ACCENT}40`, borderRadius: 8, padding: "10px 12px", cursor: "pointer", background: ACCENT_BG }}
                    >
                      <div style={{ fontSize: 12, fontWeight: 600, color: ACCENT, marginBottom: 2 }}>{r.tonalite}</div>
                      <div style={{ fontSize: 11, color: "#555", fontFamily: "monospace" }}>{r.accord}</div>
                      <div style={{ fontSize: 10, color: ACCENT, marginTop: 4 }}>▶ Écouter</div>
                    </div>
                  ))}
                </div>
                <div style={S.infoBox}>
                  <strong>Modulation enharmonique :</strong> Changer l'interprétation d'un accord sans changer ses notes. Le même son, une nouvelle direction tonale — technique fondamentale de Schubert, Liszt et Wagner pour des modulations imperceptibles.
                </div>
              </div>
            )}
          </div>

          <div style={S.warnBox}>
            <strong>Pièges fréquents :</strong><br />
            · Chromatisme gratuit sans direction — chaque note altérée doit avoir une résolution logique<br />
            · Confusion enharmonique : G# (monte → A) ≠ Ab (descend → G)<br />
            · Perdre le centre tonal en accumulant les chromatismes sans ancrage diatonique
          </div>
        </div>
      )}

      {/* ══ SECTION 3 : CONSERVATOIRE ══ */}
      {activeSection === "conservatoire" && <VueConservatoire data={CONSERVATOIRE_DATA_25} />}

      {/* ══ SECTION 4 : QUIZ ══ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.h2}>Quiz — Chromatisme</h2>
          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 8 ? "🎭" : quizScore >= 6 ? "👍" : "💪"}
              </div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>
                Score : {quizScore} / {QUIZ_COUNT}
              </div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
                {quizScore >= 8 ? "Excellent ! Vous maîtrisez le chromatisme avancé." :
                 quizScore >= 6 ? "Bien ! Revoyez la modulation enharmonique." :
                 "Continuez — relisez les lignes chromatiques et l'accord de Tristan."}
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
                    if (isCorrect)       { bg = "#E8F5EE"; border = ACCENT; color = "#0E3D26"; }
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
                <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 8, background: selectedOpt === quizQuestions[quizIdx].a ? "#E8F5EE" : "#FCEBEB", fontSize: 13, color: selectedOpt === quizQuestions[quizIdx].a ? "#0E3D26" : "#501313", lineHeight: 1.6 }}>
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

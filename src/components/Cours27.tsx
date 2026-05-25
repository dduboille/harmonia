"use client";

/**
 * Cours27.tsx
 * Harmonia · Niveau 3 · Cours 27 — Analyse fonctionnelle profonde
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { useTerm } from "@/hooks/useTerm";
import { cours27Content } from "@/data/cours27Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";
import { VueConservatoire } from "@/components/VueConservatoire";
import { CONSERVATOIRE_DATA_27 } from "@/data/conservatoireData27";

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

// ── Données ────────────────────────────────────────────────────────────────

interface Region {
  nom: string;
  abrev: string;
  degres: string;
  description: string;
  color: string;
  bg: string;
}

const REGIONS: Region[] = [
  {
    nom: "Région tonique",
    abrev: "T",
    degres: "I, III, VI",
    description: "Accords de repos et de stabilité. Partagent au moins deux notes avec l'accord de tonique. Rôle : ancrage et prolongation du centre tonal.",
    color: "#1A3A5C",
    bg: "#E6ECF5",
  },
  {
    nom: "Région sous-dominante",
    abrev: "SD",
    degres: "II, IV",
    description: "Accords de préparation intermédiaire. Créent un mouvement directionnel entre T et D sans la tension maximale de la dominante.",
    color: "#1A5C3A",
    bg: "#E6F5EC",
  },
  {
    nom: "Région dominante",
    abrev: "D",
    degres: "V, VII",
    description: "Accords de tension maximale. Contiennent le triton (sensible + 4te) qui exige la résolution vers I. Le V7 est l'accord de dominante par excellence.",
    color: "#7A2020",
    bg: "#F5E6E6",
  },
];

interface CoucheAnalyse {
  niveau: string;
  label: string;
  description: string;
  accords: string;
}

const COUCHES_ANALYSE: CoucheAnalyse[] = [
  {
    niveau: "Surface",
    label: "Vordergrund",
    description: "Tous les accords tels qu'ils apparaissent dans la partition — accords de passage, broderies, ornements inclus.",
    accords: "I – I6 – IV – II6 – I6/4 – V7 – I",
  },
  {
    niveau: "Intermédiaire",
    label: "Mittelgrund",
    description: "Accords regroupés par fonction. Les ornements et accords de passage sont éliminés. Seuls les piliers fonctionnels restent.",
    accords: "I – IV – V7 – I",
  },
  {
    niveau: "Profond",
    label: "Hintergrund",
    description: "La Ursatz : structure fondamentale. Une seule prolongation T→D→T révèle l'arche tonale de l'œuvre.",
    accords: "I ——— V ——— I",
  },
];

interface StepReduction {
  n: number;
  titre: string;
  detail: string;
  exemple: string;
}

const STEPS_REDUCTION: StepReduction[] = [
  {
    n: 1,
    titre: "Écrire tous les accords (surface)",
    detail: "Analyser chaque accord de la partition et le nommer. Ne rien omettre à cette étape — c'est le Vordergrund complet.",
    exemple: "Mozart K.331 mm.1–4 : I – V6 – I – IV6 – I6/4 – V – I",
  },
  {
    n: 2,
    titre: "Regrouper par régions fonctionnelles",
    detail: "Identifier quels accords appartiennent à T (I, III, VI), SD (II, IV) ou D (V, VII). Repérer les prolongations.",
    exemple: "T(prolongé) – SD – T(6/4 cad.) – D – T : structure intermédiaire",
  },
  {
    n: 3,
    titre: "Identifier les piliers structuraux",
    detail: "Repérer l'accord d'ouverture (I), la cadence médiane (V ou demi-cadence), la cadence finale (V–I). Ce sont les piliers de la Bassbrechung.",
    exemple: "Mozart K.331 : I (m.1) → V (m.8) → I (m.16) — Bassbrechung sur 16 mesures",
  },
  {
    n: 4,
    titre: "Tracer l'Urlinie et la Bassbrechung",
    detail: "Dégager la descente fondamentale du soprano (Kopfton → 1̂) et l'arche de basse (I–V–I). Superposer les deux : c'est la Ursatz.",
    exemple: "Urlinie 3̂–2̂–1̂ (Mi–Ré–Do) sur Bassbrechung I–V–I = Ursatz complète",
  },
];

const SECTIONS_IDS = ["hierarchies", "ursatz", "conservatoire", "quiz"] as const;
const QUIZ_COUNT = 10;

const ACCENT = "#1A3A5C";
const ACCENT_BG = "#E6ECF5";

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
  infoBox:  { borderLeft: `2px solid ${ACCENT}`, padding: "8px 14px", background: ACCENT_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#0A1F36", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
};

export default function Cours27() {
  const [activeSection, setActiveSection] = useState<string>("hierarchies");
  const i18n = useCoursI18n("cours27");
  const tr = useTerm();
  const { questions: ALL_QUESTIONS } = useCoursContent(cours27Content);

  const [quizQuestions] = useState(() => shuffle(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [quizIdx,      setQuizIdx]      = useState(0);
  const [quizScore,    setQuizScore]    = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizDone,     setQuizDone]     = useState(false);
  const [selectedOpt,  setSelectedOpt]  = useState<number | null>(null);

  const pianoRef = useRef<PianoPlayerRef>(null);

  const sectionLabel = (id: string) => {
    if (id === "hierarchies")   return "Hiérarchies tonales";
    if (id === "ursatz")        return "Réduction schenkérienne";
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
        <span style={S.badge}>Niveau 3 · Cours 27</span>
        <h1 style={S.h1}>{tr("Analyse fonctionnelle profonde")}</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Heinrich Schenker"
        period="1868–1935"
        emoji="🔭"
        concept="Analyse structurelle"
        anecdote="Schenker était convaincu que toute grande musique tonale repose sur une structure profonde identique — la Ursatz. Derrière la complexité apparente de Bach ou Beethoven, il voyait toujours la même arche fondamentale."
        lesson="Comprendre une œuvre c'est voir à travers les notes de surface jusqu'à sa structure osseuse."
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

      {/* ══ SECTION 1 : HIÉRARCHIES TONALES ══ */}
      {activeSection === "hierarchies" && (
        <div>
          <h2 style={S.h2}>Hiérarchies tonales et régions</h2>
          <p style={S.p}>
            L'harmonie tonale ne traite pas tous les accords de façon égale. Chaque accord appartient à une <strong>région fonctionnelle</strong> — tonique (T), sous-dominante (SD) ou dominante (D) — qui détermine son rôle dans la logique directionnelle de la musique.
          </p>
          <p style={S.p}>
            La distinction essentielle : l'<strong>harmonie de surface</strong> désigne tous les accords visibles dans la partition ; l'<strong>harmonie structurelle</strong> ne retient que les piliers qui portent la logique tonale profonde.
          </p>

          {/* Régions tonales */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "0 0 12px", color: "#111" }}>
            Les trois régions fonctionnelles
          </h3>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 10, marginBottom: 24 }}>
            {REGIONS.map(r => (
              <div key={r.abrev} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 16px", border: `0.5px solid ${r.color}22`, borderRadius: 10, background: r.bg }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: r.color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, flexShrink: 0 }}>
                  {r.abrev}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: r.color, marginBottom: 2 }}>
                    {r.nom} — <span style={{ fontFamily: "monospace" }}>{r.degres}</span>
                  </div>
                  <div style={{ fontSize: 13, color: "#444", lineHeight: 1.65 }}>{r.description}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={S.infoBox}>
            <strong>Règle directionnelle :</strong> La progression fonctionnelle canonique est T → SD → D → T. Toute progression tonale bien formée suit cette direction. Le mouvement inverse (D → SD ou SD → T directement après SD) crée des retours en arrière fonctionnels à éviter.
          </div>

          {/* Analyse en couches */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "24px 0 12px", color: "#111" }}>
            Analyse en couches — surface vs structure profonde
          </h3>
          <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7, marginBottom: 12 }}>
            La même progression harmonique peut être lue à trois niveaux de profondeur. Plus on réduit, plus la structure tonale fondamentale apparaît.
          </p>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 8, marginBottom: 24 }}>
            {COUCHES_ANALYSE.map((c, idx) => (
              <div key={c.niveau} style={{ padding: "14px 16px", border: "0.5px solid #e5e5e5", borderRadius: 10, background: idx === 2 ? ACCENT_BG : "#fff" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: idx === 2 ? ACCENT : "#888", background: idx === 2 ? ACCENT + "22" : "#f0f0f0", padding: "2px 8px", borderRadius: 10 }}>
                    {c.niveau}
                  </span>
                  <span style={{ fontSize: 12, color: "#999", fontStyle: "italic" }}>{c.label}</span>
                </div>
                <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6, marginBottom: 8 }}>{c.description}</div>
                <div style={{ fontFamily: "monospace", fontSize: 13, color: idx === 2 ? ACCENT : "#333", background: idx === 2 ? ACCENT + "11" : "#f8f8f8", padding: "6px 12px", borderRadius: 6 }}>
                  {c.accords}
                </div>
              </div>
            ))}
          </div>

          {/* Piano Bach */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "0 0 10px", color: "#111" }}>
            Exemple sonore — Choral Bach (mélodie de surface)
          </h3>
          <p style={{ fontSize: 13, color: "#555", lineHeight: 1.65, marginBottom: 10 }}>
            Écoutez cet extrait du Choral BWV 227 en Do majeur. La mélodie de surface orne une structure profonde simple : I prolongé → V → I.
          </p>
          <button
            onClick={() => playScale(pianoRef as React.RefObject<PianoPlayerRef>, ["Do:3", "Mi:3", "Sol:3", "Sol:3", "La:3", "Fa:3", "Sol:3", "Do:3"], 420)}
            style={{ fontSize: 12, padding: "6px 16px", border: `0.5px solid ${ACCENT}`, borderRadius: 20, cursor: "pointer", background: ACCENT_BG, color: ACCENT }}
          >
            ▶ Choral Bach (mélodie Do majeur)
          </button>

          <div style={{ ...S.warnBox, marginTop: 20 }}>
            <strong>Piège fréquent :</strong> Analyser chaque accord isolément, sans voir la région fonctionnelle à laquelle il appartient. La logique harmonique est directionnelle — T→SD→D→T — pas une succession d'accords indépendants.
          </div>
        </div>
      )}

      {/* ══ SECTION 2 : RÉDUCTION SCHENKÉRIENNE ══ */}
      {activeSection === "ursatz" && (
        <div>
          <h2 style={S.h2}>Réduction schenkérienne simplifiée</h2>
          <p style={S.p}>
            Heinrich Schenker (1868–1935) a développé une méthode d'analyse en couches qui révèle la structure tonale profonde de toute grande œuvre. Au fond de toute musique tonale, il voit une même structure : la <strong>Ursatz</strong>, composée de l'<strong>Urlinie</strong> (soprano) et de la <strong>Bassbrechung</strong> (basse).
          </p>

          {/* Urlinie */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "0 0 10px", color: "#111" }}>
            L'Urlinie — ligne fondamentale descendante
          </h3>
          <div style={{ padding: "14px 16px", border: `0.5px solid ${ACCENT}33`, borderRadius: 10, background: ACCENT_BG, marginBottom: 16 }}>
            <p style={{ fontSize: 13, color: "#0A1F36", lineHeight: 1.7, margin: 0 }}>
              L'<strong>Urlinie</strong> est la descente mélodique fondamentale du soprano. Elle part d'un <strong>Kopfton</strong> (note de couverture : 3̂, 5̂ ou 8̂) et descend diatoniquement jusqu'à 1̂ (tonique). Trois formes possibles :
            </p>
            <ul style={{ margin: "10px 0 0", paddingLeft: 20, fontSize: 13, color: "#0A1F36", lineHeight: 2 }}>
              <li><strong>3̂–2̂–1̂</strong> (descente de tierce) — la plus fréquente dans les formes courtes</li>
              <li><strong>5̂–4̂–3̂–2̂–1̂</strong> (descente de quinte) — très fréquente chez Bach et Mozart</li>
              <li><strong>8̂–7̂–6̂–5̂–4̂–3̂–2̂–1̂</strong> (descente d'octave) — formes longues et monumentales</li>
            </ul>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" as const, marginBottom: 20 }}>
            <button
              onClick={() => playScale(pianoRef as React.RefObject<PianoPlayerRef>, ["Mi:5", "Ré:5", "Do:5"], 500)}
              style={{ fontSize: 12, padding: "6px 16px", border: `0.5px solid ${ACCENT}`, borderRadius: 20, cursor: "pointer", background: ACCENT_BG, color: ACCENT }}
            >
              ▶ Urlinie 3̂–2̂–1̂
            </button>
            <button
              onClick={() => playScale(pianoRef as React.RefObject<PianoPlayerRef>, ["Sol:5", "Fa:5", "Mi:5", "Ré:5", "Do:5"], 500)}
              style={{ fontSize: 12, padding: "6px 16px", border: `0.5px solid ${ACCENT}33`, borderRadius: 20, cursor: "pointer", background: "transparent", color: ACCENT }}
            >
              ▶ Urlinie 5̂–4̂–3̂–2̂–1̂
            </button>
          </div>

          {/* Bassbrechung */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "0 0 10px", color: "#111" }}>
            La Bassbrechung — arche I–V–I à la basse
          </h3>
          <div style={{ padding: "14px 16px", border: "0.5px solid #1A5C3A33", borderRadius: 10, background: "#E6F5EC", marginBottom: 16 }}>
            <p style={{ fontSize: 13, color: "#0A3A1F", lineHeight: 1.7, margin: 0 }}>
              La <strong>Bassbrechung</strong> est l'arche de basse fondamentale : <strong>I–V–I</strong>. Elle décrit le mouvement de quinte (Do→Sol→Do) qui structure la tonalité à n'importe quelle échelle — d'une phrase de 4 mesures à une symphonie entière. La Bassbrechung est la loi harmonique universelle de la musique tonale.
            </p>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" as const, marginBottom: 20 }}>
            <button
              onClick={() => playScale(pianoRef as React.RefObject<PianoPlayerRef>, ["Do:3", "Sol:3", "Do:4"], 600)}
              style={{ fontSize: 12, padding: "6px 16px", border: "0.5px solid #1A5C3A", borderRadius: 20, cursor: "pointer", background: "#E6F5EC", color: "#1A5C3A" }}
            >
              ▶ Bassbrechung I–V–I
            </button>
          </div>

          {/* Méthode de réduction en 4 étapes */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "4px 0 12px", color: "#111" }}>
            Méthode de réduction en 4 étapes — Mozart K.331
          </h3>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 8, marginBottom: 24 }}>
            {STEPS_REDUCTION.map(step => (
              <div key={step.n} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "12px 16px", border: "0.5px solid #e5e5e5", borderRadius: 10, background: "#fff" }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: ACCENT, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0 }}>
                  {step.n}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#111", marginBottom: 2 }}>{step.titre}</div>
                  <div style={{ fontSize: 13, color: "#555", lineHeight: 1.65, marginBottom: 6 }}>{step.detail}</div>
                  <div style={{ fontFamily: "monospace", fontSize: 12, color: ACCENT, background: ACCENT_BG, padding: "4px 10px", borderRadius: 5, display: "inline-block" }}>
                    {step.exemple}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={S.infoBox}>
            <strong>La Ursatz en résumé :</strong> Superposez l'Urlinie (soprano descendant de 3̂/5̂/8̂ vers 1̂) et la Bassbrechung (basse I–V–I). Ce contrepoint à deux voix est la structure fondamentale universelle de toute musique tonale — toute œuvre en est une prolongation élaborée.
          </div>

          <div style={S.warnBox}>
            <strong>Attention :</strong> La réduction schenkérienne ne simplifie pas arbitrairement — elle révèle la hiérarchie structurelle. Ne jamais sauter les étapes : commencer par la surface complète, puis réduire couche par couche jusqu'à la Ursatz.
          </div>
        </div>
      )}

      {/* ══ SECTION 3 : CONSERVATOIRE ══ */}
      {activeSection === "conservatoire" && <VueConservatoire data={CONSERVATOIRE_DATA_27} />}

      {/* ══ SECTION 4 : QUIZ ══ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.h2}>Quiz — Analyse fonctionnelle profonde</h2>
          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 8 ? "🔭" : quizScore >= 6 ? "👍" : "💪"}
              </div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>
                Score : {quizScore} / {QUIZ_COUNT}
              </div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
                {quizScore >= 8 ? "Excellent ! Vous maîtrisez l'analyse hiérarchique et la réduction schenkérienne." :
                 quizScore >= 6 ? "Bien ! Revoyez les concepts d'Urlinie, de Bassbrechung et de prolongation." :
                 "Continuez — relisez les sections Hiérarchies et Réduction schenkérienne."}
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
                    if (isCorrect)       { bg = ACCENT_BG; border = ACCENT; color = "#0A1F36"; }
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
                <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 8, background: selectedOpt === quizQuestions[quizIdx].a ? ACCENT_BG : "#FCEBEB", fontSize: 13, color: selectedOpt === quizQuestions[quizIdx].a ? "#0A1F36" : "#501313", lineHeight: 1.6 }}>
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

"use client";

/**
 * Cours30.tsx
 * Harmonia · Niveau 4 · Cours 30 — Harmonie impressionniste et modalité avancée
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { useTerm } from "@/hooks/useTerm";
import { cours30Content } from "@/data/cours30Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";
import { VueConservatoire } from "@/components/VueConservatoire";
import { CONSERVATOIRE_DATA_30 } from "@/data/conservatoireData30";

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

// ── Gammes spéciales ───────────────────────────────────────────────────────────

interface GammeSpeciale {
  id: string;
  nom: string;
  structure: string;
  notes: string;
  description: string;
  couleur: string;
  dotKeys: string[];
  accord: string;
}

const GAMMES: GammeSpeciale[] = [
  {
    id: "tons",
    nom: "Gamme par tons",
    structure: "T–T–T–T–T–T (6 tons entiers)",
    notes: "Do–Ré–Mi–Fa#–Sol#–La#",
    description: "Aucune note directrice — le flottement tonal est total. Debussy en est le maître. Tous les accords sont augmentés.",
    couleur: "Mystère, dissolution, flottement onirique",
    dotKeys: ["Do:3","Ré:3","Mi:3","Fa#:3","Sol#:3","La#:3"],
    accord: "Do augmenté : Do–Mi–Sol#",
  },
  {
    id: "octatonique",
    nom: "Gamme octatonique",
    structure: "T–½T–T–½T–T–½T–T–½T (alternance)",
    notes: "Do–Ré–Mib–Fa–Fa#–Sol#–La–Si",
    description: "Alternance ton/demi-ton. Contient 3 accords diminués 7e. Stravinsky et Messiaen l'adoraient.",
    couleur: "Tension symétrique, mystère slave",
    dotKeys: ["Do:3","Ré:3","Mib:3","Fa:3","Fa#:3","Sol#:3","La:3","Si:3"],
    accord: "Dim7 : Do–Mib–Fa#–La",
  },
  {
    id: "pentatonique",
    nom: "Gamme pentatonique",
    structure: "T–T–T½–T–T½ (5 notes sans demi-ton)",
    notes: "Do–Ré–Mi–Sol–La",
    description: "5 notes sans aucun demi-ton, donc sans tension directrice. Utilisée dans le jazz, le folk et l'impressionnisme oriental.",
    couleur: "Simplicité, sérénité, couleur orientale",
    dotKeys: ["Do:3","Ré:3","Mi:3","Sol:3","La:3"],
    accord: "Pas d'accord de dominante",
  },
  {
    id: "augmente",
    nom: "Accord augmenté",
    structure: "Tierce majeure + tierce majeure",
    notes: "Do–Mi–Sol#",
    description: "Accord à 3 demi-tons égaux. Symétrique — peut résoudre vers 3 tonalités différentes. Caractéristique de l'harmonie impressionniste.",
    couleur: "Flottement, ambiguïté, couleur mystique",
    dotKeys: ["Do:3","Mi:3","Sol#:3","Do:4","Mi:4","Sol#:4"],
    accord: "= 3 accords augmentés identiques (enharmonie)",
  },
];

// ── Planing exemple ────────────────────────────────────────────────────────────

const PLANING = [
  { label: "Accord 1 (Do Maj7)", dotKeys: ["Do:3","Mi:3","Sol:3","Si:3"] },
  { label: "Accord 2 (Ré Maj7)", dotKeys: ["Ré:3","Fa#:3","La:3","Do#:4"] },
  { label: "Accord 3 (Mi Maj7)", dotKeys: ["Mi:3","Sol#:3","Si:3","Ré#:4"] },
];

// ── Modes de Messiaen ──────────────────────────────────────────────────────────

interface ModeMessiaen {
  num: number;
  nom: string;
  notes: string;
  transpositions: number;
  structure: string;
  couleur: string;
  exemple: string;
  dotKeys: string[];
}

const MODES_MESSIAEN: ModeMessiaen[] = [
  {
    num: 1,
    nom: "Mode 1 — Gamme par tons",
    notes: "Do–Ré–Mi–Fa#–Sol#–La#",
    transpositions: 2,
    structure: "T–T–T–T–T–T",
    couleur: "Flottement total, dissolution de la tonalité",
    exemple: "Debussy, 'Voiles'",
    dotKeys: ["Do:4","Ré:4","Mi:4","Fa#:4","Sol#:4","La#:4"],
  },
  {
    num: 2,
    nom: "Mode 2 — Octatonique",
    notes: "Do–Ré–Mib–Fa–Fa#–Sol#–La–Si",
    transpositions: 3,
    structure: "T–½T–T–½T–T–½T–T–½T",
    couleur: "Tension symétrique, mystère, flamboyance",
    exemple: "Messiaen, 'Quartet pour la fin du Temps'",
    dotKeys: ["Do:4","Ré:4","Mib:4","Fa:4","Fa#:4","Sol#:4","La:4","Si:4"],
  },
  {
    num: 3,
    nom: "Mode 3",
    notes: "Do–Ré–Mib–Mi–Fa#–Sol–Sol#–La#–Si",
    transpositions: 4,
    structure: "T–½T–½T–T–½T–½T–T–½T–½T",
    couleur: "Richesse chromatique dense",
    exemple: "Messiaen, 'Les Corps Glorieux'",
    dotKeys: ["Do:4","Ré:4","Mib:4","Mi:4","Fa#:4","Sol:4","Sol#:4","La#:4","Si:4"],
  },
];

// ── Modal interchange ──────────────────────────────────────────────────────────

const MODAL_INTERCHANGE = [
  { accord: "IVm (Fam en Do)", origine: "Do éolien / Do mineur", dotKeys: ["Fa:3","Lab:3","Do:4"], effet: "Couleur sombre soudaine — le IVm emprunté est le plus expressif" },
  { accord: "bVII (Sib en Do)", origine: "Do mixolydien", dotKeys: ["Sib:2","Ré:3","Fa:3"], effet: "Son 'rock' — dominant sans résolution fonctionnelle" },
  { accord: "bVI (Lab en Do)", origine: "Do éolien", dotKeys: ["Lab:2","Do:3","Mib:3"], effet: "Couleur romantique — emprunt très expressif" },
];

// ── Navigation ─────────────────────────────────────────────────────────────────

const SECTIONS_IDS = ["impressionnisme", "modalite", "conservatoire", "quiz"] as const;
const QUIZ_COUNT = 10;

const ACCENT = "#2D6B7A";
const ACCENT_BG = "#E3F3F7";

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
  infoBox:  { borderLeft: `2px solid ${ACCENT}`, padding: "8px 14px", background: ACCENT_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#0F3840", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
};

export default function Cours30() {
  const [activeSection, setActiveSection] = useState<string>("impressionnisme");
  const i18n = useCoursI18n("cours30");
  const tr = useTerm();
  const { questions: ALL_QUESTIONS } = useCoursContent(cours30Content);

  const [quizQuestions] = useState(() => shuffle(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [quizIdx,      setQuizIdx]      = useState(0);
  const [quizScore,    setQuizScore]    = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizDone,     setQuizDone]     = useState(false);
  const [selectedOpt,  setSelectedOpt]  = useState<number | null>(null);

  const pianoRef = useRef<PianoPlayerRef>(null);

  const sectionLabel = (id: string) => {
    if (id === "impressionnisme") return "Impressionnisme";
    if (id === "modalite") return "Modalité avancée";
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
        <span style={S.badge}>Niveau 4 · Cours 30</span>
        <h1 style={S.h1}>{tr("Harmonie impressionniste et modalité avancée")}</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Maurice Ravel"
        period="1875–1937"
        emoji="💧"
        concept="Couleur harmonique pure"
        anecdote="Ravel disait qu'il ne cherchait pas à exprimer des émotions mais des couleurs sonores. Son Boléro — un seul accord de Do majeur pendant 15 minutes — prouve que la couleur peut remplacer la fonction. Debussy l'appelait 'l'horloger du son'."
        lesson="Quand l'accord devient couleur, la tension n'est plus fonctionnelle — elle est sensorielle."
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

      {/* ══ SECTION 1 : IMPRESSIONNISME ══ */}
      {activeSection === "impressionnisme" && (
        <div>
          <h2 style={S.h2}>Techniques de l'harmonie impressionniste</h2>
          <p style={S.p}>
            L'harmonie impressionniste rompt avec la logique tension-résolution du système tonal. Debussy et Ravel substituent à la fonction harmonique la couleur sonore — chaque accord est une nuance, non un rôle.
          </p>

          <div style={S.infoBox}>
            <strong>Le planing :</strong> déplacement d'un accord entier en mouvement parallèle. Les quintes et octaves parallèles sont intentionnelles — elles créent l'effet de bloc sonore glissant. Ne pas analyser avec les fonctions T/SD/D.
          </div>

          {/* Gammes spéciales */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 12px", color: "#111" }}>
            Gammes et accords caractéristiques
          </h3>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 10, marginBottom: 24 }}>
            {GAMMES.map(g => (
              <div key={g.id} style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, overflow: "hidden" }}>
                <div style={{ padding: "14px 16px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" as const }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#111", marginBottom: 4 }}>{g.nom}</div>
                      <div style={{ fontFamily: "monospace", fontSize: 12, color: ACCENT, background: ACCENT_BG, padding: "3px 8px", borderRadius: 4, display: "inline-block", marginBottom: 6 }}>
                        {g.structure}
                      </div>
                      <div style={{ fontSize: 13, color: "#444", marginBottom: 4 }}>
                        <strong>Notes :</strong> {g.notes}
                      </div>
                      <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6, marginBottom: 4 }}>{g.description}</div>
                      <div style={{ fontSize: 12, color: "#777", fontStyle: "italic" }}>
                        Couleur : {g.couleur}
                      </div>
                      <div style={{ fontSize: 12, color: ACCENT, marginTop: 4 }}>
                        Accord type : {g.accord}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const, marginTop: 10 }}>
                    <button
                      onClick={() => playScale(pianoRef as React.RefObject<PianoPlayerRef>, g.dotKeys, 350)}
                      style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${ACCENT}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: ACCENT }}
                    >
                      ▶ Écouter la gamme
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Planing exemple */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "0 0 12px", color: "#111" }}>
            Exemple de planing chromatique (Maj7 montant)
          </h3>
          <p style={S.p}>
            Trois accords Maj7 successifs transposés chromatiquement d'un ton vers le haut — aucune résolution, pure couleur glissante.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" as const, marginBottom: 20 }}>
            {PLANING.map((pl, idx) => (
              <div key={idx} style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "12px 14px", background: "#fff", minWidth: 160 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: "#111", marginBottom: 6 }}>{pl.label}</div>
                <div style={{ fontFamily: "monospace", fontSize: 12, color: ACCENT, marginBottom: 8 }}>
                  {pl.dotKeys.join(" – ")}
                </div>
                <button
                  onClick={() => playChord(pianoRef as React.RefObject<PianoPlayerRef>, pl.dotKeys)}
                  style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${ACCENT}`, borderRadius: 16, cursor: "pointer", background: ACCENT_BG, color: ACCENT }}
                >
                  ▶ Écouter
                </button>
              </div>
            ))}
          </div>

          <div style={S.warnBox}>
            <strong>Erreur fréquente :</strong> Analyser l'harmonie de Debussy avec les fonctions T/SD/D. Les accords impressionnistes n'ont pas de rôle fonctionnel — chercher une dominante dans "Voiles" c'est chercher la mauvaise chose. Analyser par couleur et registre.
          </div>
        </div>
      )}

      {/* ══ SECTION 2 : MODALITÉ AVANCÉE ══ */}
      {activeSection === "modalite" && (
        <div>
          <h2 style={S.h2}>Modalité avancée et modes de Messiaen</h2>
          <p style={S.p}>
            Messiaen a théorisé les modes à transpositions limitées — des gammes dont la symétrie interne réduit le nombre de transpositions distinctes possibles. Chaque mode possède une couleur unique et reconnaissable.
          </p>

          <div style={S.infoBox}>
            <strong>Transpositions limitées :</strong> Un mode à transpositions limitées est une gamme dont la symétrie interne fait que certaines transpositions reproduisent la même collection de notes. Mode 1 : 2 transpositions. Mode 2 : 3 transpositions. Plus le chiffre est bas, plus la symétrie est forte.
          </div>

          {/* Modes de Messiaen */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 12px", color: "#111" }}>
            Modes à transpositions limitées
          </h3>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 10, marginBottom: 24 }}>
            {MODES_MESSIAEN.map(m => (
              <div key={m.num} style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "14px 16px", background: "#fff" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: ACCENT, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, flexShrink: 0 }}>
                    {m.num}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#111" }}>{m.nom}</div>
                    <div style={{ fontSize: 12, color: "#888", marginTop: 1 }}>
                      {m.transpositions} transpositions · {m.exemple}
                    </div>
                  </div>
                </div>
                <div style={{ fontFamily: "monospace", fontSize: 12, color: ACCENT, background: ACCENT_BG, padding: "3px 8px", borderRadius: 4, display: "inline-block", marginBottom: 6 }}>
                  {m.structure}
                </div>
                <div style={{ fontSize: 13, color: "#444", marginBottom: 4 }}>
                  <strong>Notes :</strong> {m.notes}
                </div>
                <div style={{ fontSize: 13, color: "#555", fontStyle: "italic", marginBottom: 8 }}>
                  Couleur : {m.couleur}
                </div>
                <button
                  onClick={() => playScale(pianoRef as React.RefObject<PianoPlayerRef>, m.dotKeys, 300)}
                  style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${ACCENT}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: ACCENT }}
                >
                  ▶ Écouter le mode
                </button>
              </div>
            ))}
          </div>

          {/* Modal interchange */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "0 0 12px", color: "#111" }}>
            Modal interchange (emprunts modaux en Do majeur)
          </h3>
          <p style={S.p}>
            L'emprunt modal consiste à utiliser ponctuellement un accord d'un mode parallèle (même tonique, mode différent) sans réellement moduler. Do reste le centre tonal.
          </p>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 8, marginBottom: 20 }}>
            {MODAL_INTERCHANGE.map((mi, idx) => (
              <div key={idx} style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "12px 16px", background: "#fff" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" as const }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#111", marginBottom: 3 }}>{mi.accord}</div>
                    <div style={{ fontSize: 12, color: "#888", marginBottom: 3 }}>
                      Emprunté au : <em>{mi.origine}</em>
                    </div>
                    <div style={{ fontSize: 13, color: "#555", lineHeight: 1.55 }}>{mi.effet}</div>
                  </div>
                  <button
                    onClick={() => playChord(pianoRef as React.RefObject<PianoPlayerRef>, mi.dotKeys)}
                    style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${ACCENT}`, borderRadius: 16, cursor: "pointer", background: ACCENT_BG, color: ACCENT, flexShrink: 0 }}
                  >
                    ▶ Écouter
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={S.warnBox}>
            <strong>Modal interchange ≠ modulation :</strong> L'emprunt modal est ponctuel — la tonique ne change pas. En Do majeur, emprunter Lab (bVI) crée une couleur, mais Do reste le centre. Une modulation implique un changement de centre tonal confirmé par une cadence.
          </div>
        </div>
      )}

      {/* ══ SECTION 3 : CONSERVATOIRE ══ */}
      {activeSection === "conservatoire" && <VueConservatoire data={CONSERVATOIRE_DATA_30} />}

      {/* ══ SECTION 4 : QUIZ ══ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.h2}>Quiz — Harmonie impressionniste et modalité avancée</h2>
          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 8 ? "🎨" : quizScore >= 6 ? "👍" : "💪"}
              </div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>
                Score : {quizScore} / {QUIZ_COUNT}
              </div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
                {quizScore >= 8 ? "Excellent ! Vous maîtrisez l'harmonie impressionniste." :
                 quizScore >= 6 ? "Bien ! Revoyez les modes de Messiaen et le planing." :
                 "Continuez — relisez les sections Impressionnisme et Modalité avancée."}
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
                    if (isCorrect)       { bg = ACCENT_BG; border = ACCENT; color = "#0F3840"; }
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
                <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 8, background: selectedOpt === quizQuestions[quizIdx].a ? ACCENT_BG : "#FCEBEB", fontSize: 13, color: selectedOpt === quizQuestions[quizIdx].a ? "#0F3840" : "#501313", lineHeight: 1.6 }}>
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

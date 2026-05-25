"use client";

/**
 * Cours26.tsx
 * Harmonia · Niveau 2 · Cours 26 — Harmonisation DEM : basse donnée et soprano donné
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { useTerm } from "@/hooks/useTerm";
import { cours26Content } from "@/data/cours26Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";
import { VueConservatoire } from "@/components/VueConservatoire";
import { CONSERVATOIRE_DATA_26 } from "@/data/conservatoireData26";

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

// ── Données méthodes ───────────────────────────────────────────────────────────

const METHODE_BASSE = [
  { n: 1, titre: "Identifier la tonalité", detail: "Analyser l'armure et confirmer par la cadence finale. Distinguer majeur et mineur (présence de la sensible ?)." },
  { n: 2, titre: "Analyser chaque note de basse", detail: "Fondamentale → état fondamental. Tierce → 1er renversement. Quinte → 2e renversement (rare, cadentiel). Note étrangère → ne pas placer d'accord." },
  { n: 3, titre: "Proposer 2–3 accords possibles", detail: "Chaque note de basse peut correspondre à plusieurs accords compatibles avec la tonalité — lister les options." },
  { n: 4, titre: "Choisir selon la logique fonctionnelle", detail: "Respecter T → SD → D → T. Éviter les retours arrière (IV–V–IV). Préparer la cadence finale par V ou I6/4–V." },
  { n: 5, titre: "Réaliser les 3 voix supérieures", detail: "Éviter quintes et octaves parallèles. Doubler la fondamentale à l'état fondamental, la tierce en 1er renversement. Favoriser le mouvement contraire." },
];

const METHODE_SOPRANO = [
  { n: 1, titre: "Identifier la tonalité", detail: "La mélodie révèle la tonalité — repérer les altérations caractéristiques (sensible, 6te en mineur) et la note finale." },
  { n: 2, titre: "Analyser chaque note du soprano", detail: "Quelle position d'accord peut-elle occuper ? Fondamentale, tierce, quinte, ou septième de l'accord ?" },
  { n: 3, titre: "Identifier les notes étrangères", detail: "Notes courtes ou ornementales : passage (entre deux notes d'accord), broderie (autour d'une note), retard (dissonance résolue), anticipation." },
  { n: 4, titre: "Proposer les accords compatibles", detail: "Pour chaque note réelle du soprano, lister les accords qui peuvent la contenir (maximum 2–3 options)." },
  { n: 5, titre: "Construire la basse et les voix intérieures", detail: "Choisir les positions d'accord selon le rythme harmonique voulu. Préférer l'état fondamental aux cadences. Varier les renversements dans le corps de la phrase." },
];

interface Exercice {
  id: string;
  titre: string;
  niveau: string;
  description: string;
  notes: string;
  dotKeys: string[];
  analyse: string;
  indice: string;
}

const EXERCICES_BASSE: Exercice[] = [
  {
    id: "b1",
    titre: "Exercice 1 — Basse simple en Do majeur",
    niveau: "Facile",
    description: "Harmonisez cette basse en Do majeur. Identifiez d'abord la position de chaque note (fondamentale, tierce ou quinte).",
    notes: "Do – Sol – La – Fa – Sol – Do",
    dotKeys: ["Do:3", "Sol:3", "La:3", "Fa:3", "Sol:3", "Do:4"],
    analyse: "I – V6 – VI – IV – V – I (cadence parfaite finale)",
    indice: "Sol à la basse = tierce de Mi (V6) ou fondamentale de V. Ici, Sol après Do suggère V6 car La suit — VI est plus logique après V6 qu'après V.",
  },
  {
    id: "b2",
    titre: "Exercice 2 — Basse en Sol majeur",
    niveau: "Moyen",
    description: "Harmonisez cette basse en Sol majeur. Attention à la sensible (Fa#) et aux renversements.",
    notes: "Sol – Ré – Mi – Do – Ré – Sol",
    dotKeys: ["Sol:3", "Ré:3", "Mi:3", "Do:3", "Ré:3", "Sol:3"],
    analyse: "I – V – VI – IV – V – I (structure symétrique classique)",
    indice: "Ré est la fondamentale de V ou la quinte de I. Ici, après Sol (I), Ré → Mi suggère un mouvement V–VI (cadence rompue) avant la conclusion IV–V–I.",
  },
  {
    id: "b3",
    titre: "Exercice 3 — Basse en Ré mineur (niveau DEM)",
    niveau: "DEM",
    description: "Basse en Ré mineur harmonique. La sensible Do# doit apparaître avant le Ré final. Attention au bVI (Sib).",
    notes: "Ré – La – Sib – Sol – Do# – Ré",
    dotKeys: ["Ré:3", "La:3", "Sib:3", "Sol:3", "Do#:4", "Ré:4"],
    analyse: "Im – V – bVI – IVm – V(harm.) – Im (cadence parfaite en mineur harmonique)",
    indice: "Do# à la basse = VII#6 (1er renversement du VII# = sensible du mineur harmonique). Ce V6 monte vers Im par demi-ton — tension maximale avant la résolution.",
  },
];

const EXERCICES_SOPRANO: Exercice[] = [
  {
    id: "s1",
    titre: "Exercice 1 — Soprano simple en Do majeur",
    niveau: "Facile",
    description: "Harmonisez ce soprano en Do majeur. Toutes les notes sont réelles (pas de notes étrangères).",
    notes: "Mi – Ré – Do – Si – Do",
    dotKeys: ["Mi:5", "Ré:5", "Do:5", "Si:4", "Do:5"],
    analyse: "I6 – V6 – I – V – I (ou I6 – II6 – I – V – I selon le rythme harmonique choisi)",
    indice: "Mi au soprano peut être tierce de I (état fondamental Do–Mi–Sol) ou fondamentale de III (rarement). Commencer par I6 (tierce au soprano) est élégant.",
  },
  {
    id: "s2",
    titre: "Exercice 2 — Soprano avec notes étrangères",
    niveau: "Moyen",
    description: "Ce soprano contient une note étrangère. Identifiez-la avant d'harmoniser.",
    notes: "Sol – Fa# – Sol – Mi – Ré – Do",
    dotKeys: ["Sol:5", "Fa#:5", "Sol:5", "Mi:5", "Ré:5", "Do:5"],
    analyse: "I – (note de passage) – I – I6 ou VI – V – I · Fa# = note de passage chromatique entre Sol et Mi",
    indice: "Fa# est trop court et non harmonique pour recevoir un accord — c'est une note de passage chromatique entre Sol et Mi. Ne pas harmoniser Fa# : maintenir l'accord de Sol (I) sur les deux premières notes.",
  },
];

const SECTIONS_IDS = ["basse", "soprano", "conservatoire", "quiz"] as const;
const QUIZ_COUNT = 10;

const ACCENT = "#993C1D";
const ACCENT_BG = "#FAECE7";

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
  infoBox:  { borderLeft: `2px solid ${ACCENT}`, padding: "8px 14px", background: ACCENT_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#5C1F0A", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
};

export default function Cours26() {
  const [activeSection, setActiveSection] = useState<string>("basse");
  const i18n = useCoursI18n("cours26");
  const tr = useTerm();
  const { questions: ALL_QUESTIONS } = useCoursContent(cours26Content);

  const [showAnswerB, setShowAnswerB] = useState<Record<string, boolean>>({});
  const [showAnswerS, setShowAnswerS] = useState<Record<string, boolean>>({});

  const [quizQuestions] = useState(() => shuffle(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [quizIdx,      setQuizIdx]      = useState(0);
  const [quizScore,    setQuizScore]    = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizDone,     setQuizDone]     = useState(false);
  const [selectedOpt,  setSelectedOpt]  = useState<number | null>(null);

  const pianoRef = useRef<PianoPlayerRef>(null);

  const sectionLabel = (id: string) => {
    if (id === "basse")         return "Basse donnée";
    if (id === "soprano")       return "Soprano donné";
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

  const niveauColor = (n: string) =>
    n === "Facile" ? "#1A5C3A" : n === "Moyen" ? "#BA7517" : ACCENT;
  const niveauBg = (n: string) =>
    n === "Facile" ? "#E8F5EE" : n === "Moyen" ? "#FAEEDA" : ACCENT_BG;

  return (
    <div style={S.wrap}>
      {/* Piano caché */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={4} startOctave={2} showLabels={false} />
      </div>

      {/* Header */}
      <div style={S.header}>
        <span style={S.badge}>Niveau 2 · Cours 26</span>
        <h1 style={S.h1}>{tr("Harmonisation DEM : basse donnée et soprano donné")}</h1>
        <p style={S.subtitle}>Les deux exercices fondamentaux de l'examen DEM — méthode, exemples guidés et quiz.</p>
      </div>

      <MaitreCard
        composer="César Franck"
        period="1822–1890"
        emoji="🎼"
        concept="Harmonisation stylée"
        anecdote="César Franck était réputé pour sa capacité à harmoniser n'importe quelle basse de façon impeccable à vue. Ses élèves (Duparc, d'Indy, Chausson) témoignaient qu'il voyait instantanément toutes les possibilités harmoniques d'une ligne de basse donnée."
        lesson="Une basse bien harmonisée raconte déjà toute l'histoire — les voix supérieures n'ont qu'à suivre."
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

      {/* ══ SECTION 1 : BASSE DONNÉE ══ */}
      {activeSection === "basse" && (
        <div>
          <h2 style={S.h2}>Harmoniser une basse donnée</h2>
          <p style={S.p}>
            La basse donnée est l'un des deux grands exercices d'harmonisation au DEM. Chaque note de basse révèle la position d'accord — à vous de choisir lequel est le plus pertinent selon la logique fonctionnelle.
          </p>

          {/* Méthode en 5 étapes */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "0 0 12px", color: "#111" }}>
            Méthode en 5 étapes
          </h3>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 8, marginBottom: 24 }}>
            {METHODE_BASSE.map(step => (
              <div key={step.n} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "12px 16px", border: "0.5px solid #e5e5e5", borderRadius: 10, background: "#fff" }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: ACCENT, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0 }}>
                  {step.n}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#111", marginBottom: 2 }}>{step.titre}</div>
                  <div style={{ fontSize: 13, color: "#555", lineHeight: 1.65 }}>{step.detail}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={S.infoBox}>
            <strong>Règle critique — le 6/4 de cadence :</strong> Le 6/4 n'est jamais placé sur un temps faible. Il apparaît uniquement sur le temps fort fort (2e ou 4e temps), suivi obligatoirement de V puis I. Toute autre utilisation du 2e renversement est rarissime.
          </div>

          {/* Exercices */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "24px 0 12px", color: "#111" }}>
            Exercices guidés
          </h3>
          {EXERCICES_BASSE.map(ex => (
            <div key={ex.id} style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, marginBottom: 12, overflow: "hidden" }}>
              <div style={{ padding: "14px 16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: niveauColor(ex.niveau), background: niveauBg(ex.niveau), padding: "2px 8px", borderRadius: 10 }}>
                    {ex.niveau}
                  </span>
                  <span style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>{ex.titre.split("—")[1]?.trim()}</span>
                </div>
                <p style={{ fontSize: 13, color: "#555", lineHeight: 1.65, margin: "0 0 10px" }}>{ex.description}</p>
                <div style={{ fontFamily: "monospace", fontSize: 14, color: ACCENT, background: ACCENT_BG, padding: "8px 12px", borderRadius: 6, marginBottom: 10 }}>
                  {ex.notes}
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const }}>
                  <button
                    onClick={() => playScale(pianoRef as React.RefObject<PianoPlayerRef>, ex.dotKeys, 450)}
                    style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${ACCENT}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: ACCENT }}
                  >
                    ▶ Écouter la basse
                  </button>
                  <button
                    onClick={() => setShowAnswerB(prev => ({ ...prev, [ex.id]: !prev[ex.id] }))}
                    style={{ fontSize: 12, padding: "5px 14px", border: "0.5px solid #ccc", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#555" }}
                  >
                    {showAnswerB[ex.id] ? "Masquer la correction" : "Voir la correction"}
                  </button>
                </div>
              </div>
              {showAnswerB[ex.id] && (
                <div style={{ padding: "12px 16px", borderTop: "0.5px solid #f0f0f0", background: "#fafafa" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.08em", marginBottom: 6 }}>ANALYSE ATTENDUE</div>
                  <div style={{ fontFamily: "monospace", fontSize: 13, color: "#333", marginBottom: 8 }}>{ex.analyse}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#888", letterSpacing: "0.08em", marginBottom: 4 }}>INDICE PÉDAGOGIQUE</div>
                  <div style={{ fontSize: 13, color: "#555", lineHeight: 1.65 }}>{ex.indice}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* ══ SECTION 2 : SOPRANO DONNÉ ══ */}
      {activeSection === "soprano" && (
        <div>
          <h2 style={S.h2}>Harmoniser un soprano donné</h2>
          <p style={S.p}>
            L'harmonisation de soprano donné exige d'abord d'identifier les notes réelles des notes étrangères — puis de construire une basse et des voix intérieures cohérentes sous la mélodie.
          </p>

          {/* Méthode */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "0 0 12px", color: "#111" }}>
            Méthode en 5 étapes
          </h3>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 8, marginBottom: 24 }}>
            {METHODE_SOPRANO.map(step => (
              <div key={step.n} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "12px 16px", border: "0.5px solid #e5e5e5", borderRadius: 10, background: "#fff" }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: ACCENT, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0 }}>
                  {step.n}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#111", marginBottom: 2 }}>{step.titre}</div>
                  <div style={{ fontSize: 13, color: "#555", lineHeight: 1.65 }}>{step.detail}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Notes étrangères rappel */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "0 0 10px", color: "#111" }}>Les notes étrangères à repérer</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 20 }}>
            {[
              { nom: "Note de passage", def: "Conjointe entre deux notes d'accord, non accentuée. Ascendante ou descendante." },
              { nom: "Broderie", def: "Autour d'une note d'accord — monte et redescend (ou l'inverse). Diatonique ou chromatique." },
              { nom: "Retard", def: "Frappe sur le temps fort à la place de la note d'accord — résout descendante." },
              { nom: "Anticipation", def: "Anticipe la note suivante avant la résolution harmonique — courte et non accentuée." },
            ].map(n => (
              <div key={n.nom} style={{ border: "0.5px solid #e5e5e5", borderRadius: 8, padding: "10px 12px", background: "#fff" }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: ACCENT, marginBottom: 4 }}>{n.nom}</div>
                <div style={{ fontSize: 12, color: "#555", lineHeight: 1.55 }}>{n.def}</div>
              </div>
            ))}
          </div>

          <div style={S.warnBox}>
            <strong>Règle d'or :</strong> Ne jamais harmoniser une note étrangère. Identifiez d'abord toutes les notes de passage, broderies et retards — puis harmonisez uniquement les notes réelles. Un accord sur une broderie crée une faute rédhibitoire à l'examen.
          </div>

          {/* Exercices soprano */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "24px 0 12px", color: "#111" }}>Exercices guidés</h3>
          {EXERCICES_SOPRANO.map(ex => (
            <div key={ex.id} style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, marginBottom: 12, overflow: "hidden" }}>
              <div style={{ padding: "14px 16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: niveauColor(ex.niveau), background: niveauBg(ex.niveau), padding: "2px 8px", borderRadius: 10 }}>
                    {ex.niveau}
                  </span>
                  <span style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>{ex.titre.split("—")[1]?.trim()}</span>
                </div>
                <p style={{ fontSize: 13, color: "#555", lineHeight: 1.65, margin: "0 0 10px" }}>{ex.description}</p>
                <div style={{ fontFamily: "monospace", fontSize: 14, color: ACCENT, background: ACCENT_BG, padding: "8px 12px", borderRadius: 6, marginBottom: 10 }}>
                  {ex.notes}
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const }}>
                  <button
                    onClick={() => playScale(pianoRef as React.RefObject<PianoPlayerRef>, ex.dotKeys, 450)}
                    style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${ACCENT}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: ACCENT }}
                  >
                    ▶ Écouter le soprano
                  </button>
                  <button
                    onClick={() => setShowAnswerS(prev => ({ ...prev, [ex.id]: !prev[ex.id] }))}
                    style={{ fontSize: 12, padding: "5px 14px", border: "0.5px solid #ccc", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#555" }}
                  >
                    {showAnswerS[ex.id] ? "Masquer la correction" : "Voir la correction"}
                  </button>
                </div>
              </div>
              {showAnswerS[ex.id] && (
                <div style={{ padding: "12px 16px", borderTop: "0.5px solid #f0f0f0", background: "#fafafa" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.08em", marginBottom: 6 }}>ANALYSE ATTENDUE</div>
                  <div style={{ fontFamily: "monospace", fontSize: 13, color: "#333", marginBottom: 8 }}>{ex.analyse}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#888", letterSpacing: "0.08em", marginBottom: 4 }}>INDICE PÉDAGOGIQUE</div>
                  <div style={{ fontSize: 13, color: "#555", lineHeight: 1.65 }}>{ex.indice}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* ══ SECTION 3 : CONSERVATOIRE ══ */}
      {activeSection === "conservatoire" && <VueConservatoire data={CONSERVATOIRE_DATA_26} />}

      {/* ══ SECTION 4 : QUIZ ══ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.h2}>Quiz — Harmonisation DEM</h2>
          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 8 ? "🎼" : quizScore >= 6 ? "👍" : "💪"}
              </div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>
                Score : {quizScore} / {QUIZ_COUNT}
              </div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
                {quizScore >= 8 ? "Excellent ! Vous êtes prêt pour l'examen DEM." :
                 quizScore >= 6 ? "Bien ! Revoyez les règles du 6/4 et les notes étrangères." :
                 "Continuez — relisez les méthodes basse donnée et soprano donné."}
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
                    if (isCorrect)       { bg = ACCENT_BG; border = ACCENT; color = "#5C1F0A"; }
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
                <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 8, background: selectedOpt === quizQuestions[quizIdx].a ? ACCENT_BG : "#FCEBEB", fontSize: 13, color: selectedOpt === quizQuestions[quizIdx].a ? "#5C1F0A" : "#501313", lineHeight: 1.6 }}>
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

"use client";

/**
 * Cours33.tsx
 * Harmonia · Niveau 5 · Cours 33 — Écriture classique : Fugue et choral
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { useTerm } from "@/hooks/useTerm";
import { cours33Content } from "@/data/cours33Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";
import { VueConservatoire } from "@/components/VueConservatoire";
import { CONSERVATOIRE_DATA_33 } from "@/data/conservatoireData33";

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

// ── Règles du choral ──────────────────────────────────────────────────────────

interface RegleChoral {
  id: string;
  titre: string;
  regle: string;
  explication: string;
  exemple: string;
  dotKeys?: string[];
}

const REGLES_CHORAL: RegleChoral[] = [
  {
    id: "sensible",
    titre: "La sensible monte toujours",
    regle: "Le 7e degré résout TOUJOURS vers la tonique par demi-ton ascendant",
    explication: "En Do majeur, Si doit aller vers Do. En Sol majeur, Fa# doit aller vers Sol. Ne jamais faire sauter ou descendre la sensible — c'est la faute la plus grave.",
    exemple: "G7 → CMaj : Si → Do (montée obligatoire d'un demi-ton)",
    dotKeys: ["Sol:2","Si:2","Ré:3","Fa:3"],
  },
  {
    id: "septieme",
    titre: "La 7e de dominante descend toujours",
    regle: "La septième de dominante résout vers la tierce de la tonique par mouvement descendant conjoint",
    explication: "Dans G7 en Do majeur, le Fa doit descendre vers Mi (tierce de CMaj). Ne jamais faire monter le Fa vers Sol ou Sib.",
    exemple: "G7 → CMaj : Fa → Mi (descente obligatoire)",
    dotKeys: ["Do:3","Mi:3","Sol:3","Si:3"],
  },
  {
    id: "paralleles",
    titre: "Pas de quintes/octaves parallèles",
    regle: "Deux voix ne peuvent pas se déplacer en gardant une quinte ou une octave entre elles",
    explication: "Les parallèles fusionnent deux voix en une seule couleur — l'indépendance est perdue. Utiliser le mouvement contraire pour les éviter.",
    exemple: "Do–Sol–Sol / Sol–Ré–Ré = quintes parallèles interdites",
  },
  {
    id: "doublure",
    titre: "Doubler la fondamentale par défaut",
    regle: "Dans un accord à l'état fondamental, doubler la fondamentale entre deux voix",
    explication: "Sur 4 voix et 3 notes (triade), une note doit être doublée. La fondamentale est le choix par défaut. Éviter de doubler la sensible (7e degré) dans l'accord de V.",
    exemple: "CMaj (Do–Mi–Sol) à 4 voix : Do–Mi–Sol–Do (Do doublé)",
    dotKeys: ["Do:3","Mi:3","Sol:3","Do:4"],
  },
];

// ── Structure de la fugue ─────────────────────────────────────────────────────

interface PartFugue {
  id: string;
  nom: string;
  description: string;
  tonalite: string;
  dotKeys?: string[];
}

const PARTIES_FUGUE: PartFugue[] = [
  {
    id: "sujet",
    nom: "Sujet",
    description: "Thème principal énoncé seul à la tonique, sans accompagnement. Généralement 1 à 4 mesures. Tout le contenu de la fugue est dérivé de ce matériau.",
    tonalite: "Tonique (Do mineur)",
    dotKeys: ["Do:3","Ré:3","Mib:3","Fa:3","Sol:3","Fa:3","Mib:3","Ré:3","Do:3"],
  },
  {
    id: "reponse",
    nom: "Réponse",
    description: "Le sujet transposé à la dominante (une quinte plus haut). Peut être 'tonale' (légèrement modifiée) ou 'réelle' (transposition exacte).",
    tonalite: "Dominante (Sol mineur)",
    dotKeys: ["Sol:3","La:3","Sib:3","Do:4","Ré:4","Do:4","Sib:3","La:3","Sol:3"],
  },
  {
    id: "contresujet",
    nom: "Contre-sujet",
    description: "Contrepoint écrit pour accompagner la réponse. Il réapparaît à chaque entrée du sujet. En contrepoint double avec le sujet (les deux peuvent s'intervertir).",
    tonalite: "Accompagne la réponse",
    dotKeys: ["Do:4","Si:3","La:3","Sol:3","Fa:3","Mi:3","Ré:3"],
  },
  {
    id: "episode",
    nom: "Épisode / Divertissement",
    description: "Section sans sujet complet. Musique de liaison entre les entrées, souvent séquentielle et modulante. Utilise des fragments du sujet ou du contre-sujet.",
    tonalite: "Variable (modulation)",
    dotKeys: ["Mi:3","Ré:3","Do:3","Si:2","La:2","Sol:2"],
  },
  {
    id: "strette",
    nom: "Strette",
    description: "Chevauchement d'entrées : la 2e voix commence le sujet avant que la 1ère l'ait terminé. Technique de compression et d'intensification pour le climax.",
    tonalite: "Tonique (climax)",
    dotKeys: ["Do:3","Ré:3","Mib:3","Fa:3","Sol:3"],
  },
];

// ── Techniques de transformation ──────────────────────────────────────────────

const TRANSFORMATIONS = [
  { nom: "Augmentation", description: "Sujet en valeurs doubles — noires → blanches", dotKeys: ["Do:3","Ré:3","Mib:3","Fa:3"] },
  { nom: "Diminution", description: "Sujet en valeurs réduites — noires → croches", dotKeys: ["Do:4","Ré:4","Mib:4","Fa:4"] },
  { nom: "Inversion", description: "Intervalles retournés — montée → descente", dotKeys: ["Do:3","Si:2","Sib:2","La:2"] },
  { nom: "Rétrograde", description: "Sujet à rebours — dernière note en premier", dotKeys: ["Ré:3","Do:3","Si:2","La:2","Sol:2"] },
];

// ── Navigation ─────────────────────────────────────────────────────────────────

const SECTIONS_IDS = ["choral", "fugue", "conservatoire", "quiz"] as const;
const QUIZ_COUNT = 10;

const ACCENT = "#2D1A4A";
const ACCENT_BG = "#EDE8F5";

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
  infoBox:  { borderLeft: `2px solid ${ACCENT}`, padding: "8px 14px", background: ACCENT_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#1A0A30", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
};

export default function Cours33() {
  const [activeSection, setActiveSection] = useState<string>("choral");
  const i18n = useCoursI18n("cours33");
  const tr = useTerm();
  const { questions: ALL_QUESTIONS } = useCoursContent(cours33Content);

  const [quizQuestions] = useState(() => shuffle(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [quizIdx,      setQuizIdx]      = useState(0);
  const [quizScore,    setQuizScore]    = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizDone,     setQuizDone]     = useState(false);
  const [selectedOpt,  setSelectedOpt]  = useState<number | null>(null);

  const pianoRef = useRef<PianoPlayerRef>(null);

  const sectionLabel = (id: string) => {
    if (id === "choral") return "Le choral à 4 voix";
    if (id === "fugue") return "Introduction à la fugue";
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
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={4} startOctave={2} showLabels={false} />
      </div>

      <div style={S.header}>
        <span style={S.badge}>Niveau 5 · Cours 33</span>
        <h1 style={S.h1}>{tr("Écriture classique : Fugue et choral")}</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Johann Sebastian Bach"
        period="1685–1750"
        emoji="⛪"
        concept="Contrepoint strict et fugue"
        anecdote="Bach composait ses fugues mentalement avant de les écrire. L'Art de la Fugue, son testament musical, s'arrête au milieu d'une mesure — le jour de sa mort. Son nom (B-A-C-H en notation allemande : Sib-La-Do-Si) est le dernier motif thématique qu'il nota dans la fugue inachevée."
        lesson="La fugue n'est pas une forme — c'est une façon de penser à plusieurs voix simultanément."
        accentColor={ACCENT}
      />

      <nav style={S.nav}>
        {SECTIONS_IDS.map(id => (
          <button key={id} style={S.pill(activeSection === id)} onClick={() => setActiveSection(id)}>
            {sectionLabel(id)}
          </button>
        ))}
      </nav>

      {/* ══ SECTION 1 : CHORAL ══ */}
      {activeSection === "choral" && (
        <div>
          <h2 style={S.h2}>Le choral à 4 voix — style Bach</h2>
          <p style={S.p}>
            Le choral à 4 voix (SATB) est l'exercice fondamental de l'écriture classique. Bach a harmonisé ~400 mélodies de choraux luthériens — ces harmonisations sont le modèle absolu du genre. Chaque voix est une ligne mélodique indépendante ; leur combinaison produit l'harmonie.
          </p>

          <div style={S.infoBox}>
            <strong>Les 4 voix SATB :</strong> Soprano (voix aiguë féminine, mélodie de choral donnée) · Alto (voix grave féminine) · Ténor (voix aiguë masculine, sonne une octave plus bas que noté) · Basse (voix grave masculine, fondation harmonique). L'objectif : 4 lignes indépendantes qui sonnent bien ensemble à chaque instant.
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 12px", color: "#111" }}>
            Règles essentielles du style Bach
          </h3>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 10, marginBottom: 24 }}>
            {REGLES_CHORAL.map(r => (
              <div key={r.id} style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "14px 16px", background: "#fff" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" as const }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: ACCENT, marginBottom: 4 }}>{r.titre}</div>
                    <div style={{ fontFamily: "monospace", fontSize: 12, color: ACCENT, background: ACCENT_BG, padding: "3px 8px", borderRadius: 4, display: "inline-block", marginBottom: 6 }}>
                      {r.regle}
                    </div>
                    <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6, marginBottom: 4 }}>{r.explication}</div>
                    <div style={{ fontSize: 12, color: "#888", fontStyle: "italic" }}>
                      Exemple : {r.exemple}
                    </div>
                  </div>
                  {r.dotKeys && (
                    <button
                      onClick={() => playChord(pianoRef as React.RefObject<PianoPlayerRef>, r.dotKeys!)}
                      style={{ fontSize: 11, padding: "5px 12px", border: `0.5px solid ${ACCENT}`, borderRadius: 16, cursor: "pointer", background: ACCENT_BG, color: ACCENT, flexShrink: 0 }}
                    >
                      ▶ Écouter
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "0 0 12px", color: "#111" }}>
            Méthode d'harmonisation en 4 étapes
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8, marginBottom: 20 }}>
            {[
              { n: "1", label: "Identifier tonalité & cadences", desc: "Trouver la tonalité principale, repérer les fins de phrases (ponctuation textuelle = cadence musicale)" },
              { n: "2", label: "Placer la basse d'abord", desc: "La basse établit l'harmonie. Privilégier les positions fondamentales, les quintes à la basse pour les cadences fortes" },
              { n: "3", label: "Compléter alto & ténor", desc: "Remplir les voix internes en évitant les fautes. Mouvement contraire préférable aux voix parallèles" },
              { n: "4", label: "Vérifier toutes les règles", desc: "Quintes/octaves parallèles ? Sensible résolue ? 7te descendante ? Doublures correctes ?" },
            ].map(step => (
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

          <div style={S.warnBox}>
            <strong>Erreur la plus fréquente :</strong> Faire monter la sensible vers la dominante au lieu de la tonique. Si en Do majeur (sensible de Do) qui monte vers Ré au lieu de Do — c'est une faute stylistique grave. La sensible DOIT monter d'un demi-ton vers la tonique, sans exception dans le style Bach.
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "16px 0 12px", color: "#111" }}>
            Exemples d'accords SATB en Do majeur
          </h3>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const, marginBottom: 20 }}>
            {[
              { label: "I (Do Maj)", dotKeys: ["Do:3","Mi:3","Sol:3","Do:4"] },
              { label: "V7 (Sol 7)", dotKeys: ["Sol:2","Si:2","Ré:3","Fa:3"] },
              { label: "IV (Fa Maj)", dotKeys: ["Fa:3","La:3","Do:4","Fa:4"] },
              { label: "II (Ré m)", dotKeys: ["Ré:3","Fa:3","La:3","Ré:4"] },
            ].map((ex, i) => (
              <div key={i} style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "10px 14px", background: "#fff", minWidth: 140 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: "#111", marginBottom: 4 }}>{ex.label}</div>
                <div style={{ fontFamily: "monospace", fontSize: 11, color: ACCENT, marginBottom: 8 }}>
                  {ex.dotKeys.join(" – ")}
                </div>
                <button
                  onClick={() => playChord(pianoRef as React.RefObject<PianoPlayerRef>, ex.dotKeys)}
                  style={{ fontSize: 11, padding: "3px 10px", border: `0.5px solid ${ACCENT}`, borderRadius: 14, cursor: "pointer", background: ACCENT_BG, color: ACCENT }}
                >
                  ▶ Écouter
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ══ SECTION 2 : FUGUE ══ */}
      {activeSection === "fugue" && (
        <div>
          <h2 style={S.h2}>Introduction à la fugue</h2>
          <p style={S.p}>
            La fugue est une forme de contrepoint où plusieurs voix entrent successivement avec le même thème (sujet), puis le développent en tissant des lignes indépendantes. Ce n'est pas une "forme" au sens de la sonate — c'est un processus contrapuntique.
          </p>

          <div style={S.infoBox}>
            <strong>Anatomie d'une fugue :</strong> Exposition (entrées successives sujet/réponse) → Développement (épisodes, entrées dans d'autres tonalités) → Strette (entrées rapprochées) → Coda (pédale de tonique, cadence finale). La structure suit la logique du contrepoint, pas une forme prédéfinie.
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 12px", color: "#111" }}>
            Éléments fondamentaux de la fugue
          </h3>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 10, marginBottom: 24 }}>
            {PARTIES_FUGUE.map(pf => (
              <div key={pf.id} style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "14px 16px", background: "#fff" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" as const }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#111", marginBottom: 4 }}>{pf.nom}</div>
                    <div style={{ fontSize: 12, color: ACCENT, background: ACCENT_BG, padding: "2px 8px", borderRadius: 4, display: "inline-block", marginBottom: 6, fontFamily: "monospace" }}>
                      {pf.tonalite}
                    </div>
                    <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>{pf.description}</div>
                  </div>
                  {pf.dotKeys && (
                    <button
                      onClick={() => playScale(pianoRef as React.RefObject<PianoPlayerRef>, pf.dotKeys!, 280)}
                      style={{ fontSize: 11, padding: "5px 12px", border: `0.5px solid ${ACCENT}`, borderRadius: 16, cursor: "pointer", background: "transparent", color: ACCENT, flexShrink: 0 }}
                    >
                      ▶ Écouter
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "0 0 12px", color: "#111" }}>
            Techniques de transformation du sujet
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8, marginBottom: 20 }}>
            {TRANSFORMATIONS.map((tr2, i) => (
              <div key={i} style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "12px 14px", background: "#fff" }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#111", marginBottom: 4 }}>{tr2.nom}</div>
                <div style={{ fontSize: 12, color: "#666", lineHeight: 1.5, marginBottom: 8 }}>{tr2.description}</div>
                <button
                  onClick={() => playScale(pianoRef as React.RefObject<PianoPlayerRef>, tr2.dotKeys, 350)}
                  style={{ fontSize: 11, padding: "3px 10px", border: `0.5px solid ${ACCENT}`, borderRadius: 14, cursor: "pointer", background: ACCENT_BG, color: ACCENT }}
                >
                  ▶ Écouter
                </button>
              </div>
            ))}
          </div>

          <div style={S.infoBox}>
            <strong>L'Art de la Fugue BWV 1080 :</strong> 14 fugues (Contrapuncti) et 4 canons, tous construits sur le même sujet en Do mineur. Le Contrapunctus XIV s'interrompt au milieu d'une mesure — Bach mourut avant de le terminer. La dernière note écrite par Bach : un Si (le motif B-A-C-H finit sur Si en notation française).
          </div>

          <div style={S.warnBox}>
            <strong>Erreur fréquente :</strong> Analyser la fugue comme une succession d'accords. La fugue est un tissu de lignes mélodiques indépendantes — l'harmonie résulte de leur rencontre, elle n'est pas planifiée accord par accord. Analyser chaque voix séparément avant d'analyser leur intersection.
          </div>
        </div>
      )}

      {/* ══ SECTION 3 : CONSERVATOIRE ══ */}
      {activeSection === "conservatoire" && <VueConservatoire data={CONSERVATOIRE_DATA_33} />}

      {/* ══ SECTION 4 : QUIZ ══ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.h2}>Quiz — Fugue et choral</h2>
          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 8 ? "⛪" : quizScore >= 6 ? "👍" : "💪"}
              </div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>
                Score : {quizScore} / {QUIZ_COUNT}
              </div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
                {quizScore >= 8 ? "Excellent ! Vous maîtrisez le choral Bach et la fugue." :
                 quizScore >= 6 ? "Bien ! Revoyez les règles du choral et la structure de la fugue." :
                 "Continuez — relisez le choral à 4 voix et l'introduction à la fugue."}
              </div>
              <button onClick={resetQuiz} style={{ fontSize: 13, padding: "8px 20px", border: `0.5px solid ${ACCENT}`, borderRadius: 20, cursor: "pointer", background: ACCENT_BG, color: ACCENT }}>
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
                    if (isCorrect)       { bg = ACCENT_BG; border = ACCENT; color = "#1A0A30"; }
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
                <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 8, background: selectedOpt === quizQuestions[quizIdx].a ? ACCENT_BG : "#FCEBEB", fontSize: 13, color: selectedOpt === quizQuestions[quizIdx].a ? "#1A0A30" : "#501313", lineHeight: 1.6 }}>
                  {quizQuestions[quizIdx].fb}
                </div>
              )}
              {quizAnswered && (
                <button onClick={nextQuiz} style={{ marginTop: 12, fontSize: 13, padding: "7px 18px", border: "0.5px solid #333", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#333" }}>
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

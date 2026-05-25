"use client";

/**
 * Cours34.tsx
 * Harmonia · Niveau 5 · Cours 34 — Composition pour l'image : Harmonie cinématographique
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { useTerm } from "@/hooks/useTerm";
import { cours34Content } from "@/data/cours34Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";
import { VueConservatoire } from "@/components/VueConservatoire";
import { CONSERVATOIRE_DATA_34 } from "@/data/conservatoireData34";

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

// ── Carte des émotions ────────────────────────────────────────────────────────

interface EmotionCard {
  emotion: string;
  harmonie: string;
  outil: string;
  exemple: string;
  dotKeys?: string[];
  scale?: boolean;
}

const EMOTIONS: EmotionCard[] = [
  {
    emotion: "Tension / Danger",
    harmonie: "Triton non résolu (quarte augmentée)",
    outil: "Do–Fa# suspendu sans résolution",
    exemple: "Psycho (Herrmann), Jaws (Williams)",
    dotKeys: ["Do:3", "Fa#:3"],
  },
  {
    emotion: "Mélancolie / Tristesse",
    harmonie: "Mineur descendant Im–♭VI–♭III–♭VII",
    outil: "Descente chromatique de basse La–Fa–Do–Sol",
    exemple: "Liste de Schindler (Williams), Cinema Paradiso (Morricone)",
    dotKeys: ["La:2", "Do:3", "Mi:3", "La:3"],
  },
  {
    emotion: "Héroïsme / Grandeur",
    harmonie: "Majeur brillant I–V–vi–III–IV",
    outil: "Quinte ouverte + cuivres fanfare à l'octave",
    exemple: "Star Wars, Indiana Jones, Superman (Williams)",
    dotKeys: ["Do:3", "Sol:3"],
  },
  {
    emotion: "Mystère / Suspense",
    harmonie: "Mode phrygien (♭II→I) + diminués",
    outil: "Réb→Do non résolu, accords diminués",
    exemple: "The Dark Knight (Zimmer), Psycho (Herrmann)",
    dotKeys: ["Réb:3", "Do:3"],
  },
  {
    emotion: "Amour / Romance",
    harmonie: "Accord add9 majeur (Do–Mi–Sol–Ré)",
    outil: "9e ouverte sans 7te — douceur lumineuse",
    exemple: "Cinema Paradiso, Titanic",
    dotKeys: ["Do:3", "Mi:3", "Sol:3", "Ré:4"],
  },
  {
    emotion: "Épique / Fantaisie",
    harmonie: "Mode lydien (#4 augmentée)",
    outil: "Do–Ré–Mi–Fa#–Sol : quarte augmentée magique",
    exemple: "Harry Potter, E.T., Hook (Williams)",
    dotKeys: ["Do:3", "Ré:3", "Mi:3", "Fa#:3", "Sol:3"],
    scale: true,
  },
];

// ── Leitmotifs ────────────────────────────────────────────────────────────────

interface LeitmotifCard {
  nom: string;
  film: string;
  compositeur: string;
  description: string;
  transformation?: string;
  dotKeys?: string[];
  scale?: boolean;
}

const LEITMOTIFS: LeitmotifCard[] = [
  {
    nom: "Imperial March",
    film: "Star Wars (L'Empire contre-attaque)",
    compositeur: "John Williams (1980)",
    description: "Thème de Dark Vador — cuivres martelés en mineur, rythme pointé belliqueux. La tierce mineure et la quinte diminuée en finale évoquent l'oppression et la menace.",
    transformation: "Le même thème joué par harpe ou cordes douces = vulnérabilité cachée de Vador — double effet sans changer une note.",
    dotKeys: ["Sol:2", "Sol:2", "Sol:2", "Mib:2", "Sib:2"],
    scale: true,
  },
  {
    nom: "Luke's Theme (Main Title)",
    film: "Star Wars (1977)",
    compositeur: "John Williams",
    description: "Thème héroïque en Ré majeur, quinte ascendante initiale = aspiration et grandeur. Le mode lydien apparaît dans les passages de fantaisie (Tatooine sunset).",
    transformation: "En mode mineur ou tempo lent = mélancolie, perte, nostalgie — la même mélodie dit l'opposé.",
    dotKeys: ["Ré:3", "La:3", "Ré:4", "Si:3", "La:3"],
    scale: true,
  },
  {
    nom: "Il Buono, il Brutto, il Cattivo",
    film: "Le Bon, la Brute et le Truand (1966)",
    compositeur: "Ennio Morricone",
    description: "Mode éolien avec sifflement humain, voix imitant le coyote, guimbarde électrique, carillon. La couleur harmonique est simple ; l'orchestration absolument unique crée l'identité sonore du western spaghetti.",
    dotKeys: ["Mi:3", "Sol:3", "Si:3", "Ré:4", "Mi:4"],
    scale: true,
  },
  {
    nom: "Time",
    film: "Inception (2010)",
    compositeur: "Hans Zimmer",
    description: "Seulement 4 accords — Do–Sol–La mineur–Fa — répétés 18 fois pendant 4 minutes. L'orchestration progressive (piano → cordes → ensemble complet) crée toute la tension et l'émotion. Leçon : la complexité harmonique n'est pas le moteur de l'émotion.",
    dotKeys: ["Do:3", "Mi:3", "Sol:3"],
  },
];

// ── Navigation ─────────────────────────────────────────────────────────────────

const SECTIONS_IDS = ["emotions", "leitmotif", "conservatoire", "quiz"] as const;
const QUIZ_COUNT = 10;

const ACCENT = "#1A1A3A";
const ACCENT_BG = "#EEEEF8";

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
  infoBox:  { borderLeft: `2px solid ${ACCENT}`, padding: "8px 14px", background: ACCENT_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#0A0A2A", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
};

export default function Cours34() {
  const [activeSection, setActiveSection] = useState<string>("emotions");
  const i18n = useCoursI18n("cours34");
  const tr = useTerm();
  const { questions: ALL_QUESTIONS } = useCoursContent(cours34Content);

  const [quizQuestions] = useState(() => shuffle(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [quizIdx,      setQuizIdx]      = useState(0);
  const [quizScore,    setQuizScore]    = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizDone,     setQuizDone]     = useState(false);
  const [selectedOpt,  setSelectedOpt]  = useState<number | null>(null);

  const pianoRef = useRef<PianoPlayerRef>(null);

  const sectionLabel = (id: string) => {
    if (id === "emotions") return "Émotions harmoniques";
    if (id === "leitmotif") return "Leitmotif";
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
        <span style={S.badge}>Niveau 5 · Cours 34</span>
        <h1 style={S.h1}>{tr("Composition pour l'image : Harmonie cinématographique")}</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Ennio Morricone"
        period="1928–2020"
        emoji="🎬"
        concept="Harmonie narrative et émotionnelle"
        anecdote="Morricone composait ses musiques AVANT le tournage avec Sergio Leone. Les acteurs jouaient parfois sur le plateau en écoutant la musique à l'oreillette — c'est la mélodie qui dictait le rythme du jeu. Pour 'Il Buono, il Brutto, il Cattivo', il a inventé une orchestration avec sifflement humain, voix de coyote et guimbarde. Reconnaissable en 2 secondes dans le monde entier."
        lesson="La musique de film ne raconte pas ce qu'on voit — elle dit ce qu'on ressent devant ce qu'on voit."
        accentColor={ACCENT}
      />

      <nav style={S.nav}>
        {SECTIONS_IDS.map(id => (
          <button key={id} style={S.pill(activeSection === id)} onClick={() => setActiveSection(id)}>
            {sectionLabel(id)}
          </button>
        ))}
      </nav>

      {/* ══ SECTION 1 : ÉMOTIONS ══ */}
      {activeSection === "emotions" && (
        <div>
          <h2 style={S.h2}>Carte des émotions harmoniques</h2>
          <p style={S.p}>
            Chaque émotion au cinéma a sa couleur harmonique. Les grands compositeurs (Williams, Morricone, Zimmer, Herrmann) utilisent un vocabulaire harmonique précis pour guider l'émotion du spectateur — souvent sans qu'il s'en rende compte. Cette carte est leur boîte à outils.
          </p>

          <div style={S.infoBox}>
            <strong>Principe fondamental :</strong> L'émotion en musique de film vient de la couleur harmonique (quelle gamme, quel accord), du timbre (quel instrument) et de la dynamique (quel volume) — pas de la complexité harmonique. Un accord simple bien orchestré est plus puissant qu'une harmonie complexe mal jouée.
          </div>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: 10, marginBottom: 24 }}>
            {EMOTIONS.map((em, i) => (
              <div key={i} style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "14px 16px", background: "#fff" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" as const }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: ACCENT, marginBottom: 4 }}>{em.emotion}</div>
                    <div style={{ fontFamily: "monospace", fontSize: 12, color: ACCENT, background: ACCENT_BG, padding: "3px 8px", borderRadius: 4, display: "inline-block", marginBottom: 6 }}>
                      {em.harmonie}
                    </div>
                    <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6, marginBottom: 2 }}>
                      <strong>Outil :</strong> {em.outil}
                    </div>
                    <div style={{ fontSize: 12, color: "#888", fontStyle: "italic" }}>
                      Exemples : {em.exemple}
                    </div>
                  </div>
                  {em.dotKeys && (
                    <button
                      onClick={() => em.scale
                        ? playScale(pianoRef as React.RefObject<PianoPlayerRef>, em.dotKeys!, 300)
                        : playChord(pianoRef as React.RefObject<PianoPlayerRef>, em.dotKeys!)
                      }
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
            Techniques d'orchestration pour amplifier l'émotion
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8, marginBottom: 20 }}>
            {[
              { label: "Registre grave = danger", desc: "Les cuivres graves (tuba, trombone) dans le registre grave évoquent la menace. Les cordes aiguës dans le registre aigu = tension." },
              { label: "Pizzicato = légèreté", desc: "Les cordes pincées créent une légèreté et une douceur que l'archet ne peut pas. Idéal pour les moments de comédie ou d'insouciance." },
              { label: "Ostinato = inévitabilité", desc: "Un motif qui se répète sans changement crée un sentiment d'imminence et d'inévitabilité — tension qui monte sans résolution." },
              { label: "Silence = choc maximum", desc: "Le silence après une musique forte est l'outil le plus puissant. L'absence soudaine de son crée un choc émotionnel plus fort que la musique elle-même." },
            ].map((step, i) => (
              <div key={i} style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "12px 14px", background: "#fff" }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#111", marginBottom: 4 }}>{step.label}</div>
                <div style={{ fontSize: 12, color: "#666", lineHeight: 1.55 }}>{step.desc}</div>
              </div>
            ))}
          </div>

          <div style={S.warnBox}>
            <strong>Erreur fréquente :</strong> Utiliser le même registre harmonique pour toutes les émotions. Si la tristesse sonne comme l'héroïsme, le spectateur ne sait pas comment réagir. La carte des émotions harmoniques est un outil de précision — chaque couleur a une fonction narrative distincte.
          </div>
        </div>
      )}

      {/* ══ SECTION 2 : LEITMOTIF ══ */}
      {activeSection === "leitmotif" && (
        <div>
          <h2 style={S.h2}>Le leitmotif et la narration harmonique</h2>
          <p style={S.p}>
            Un leitmotif est un motif musical (mélodie, harmonie, rythme) associé à un personnage, un objet ou une idée dans une œuvre. Il peut être transformé harmoniquement pour refléter l'évolution narrative du personnage — sans changer les notes.
          </p>

          <div style={S.infoBox}>
            <strong>Origine :</strong> Richard Wagner a inventé le leitmotif dans ses opéras de la tétralogie Der Ring des Nibelungen (1876). Chaque personnage, objet magique ou sentiment a son motif. John Williams a appliqué cette technique au cinéma avec une maîtrise équivalente dans Star Wars.
          </div>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: 12, marginBottom: 24 }}>
            {LEITMOTIFS.map((lm, i) => (
              <div key={i} style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "16px 18px", background: "#fff" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" as const }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "#111", marginBottom: 2 }}>{lm.nom}</div>
                    <div style={{ fontSize: 12, color: ACCENT, background: ACCENT_BG, padding: "2px 8px", borderRadius: 4, display: "inline-block", marginBottom: 8, fontFamily: "monospace" }}>
                      {lm.film} — {lm.compositeur}
                    </div>
                    <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6, marginBottom: lm.transformation ? 8 : 0 }}>
                      {lm.description}
                    </div>
                    {lm.transformation && (
                      <div style={{ fontSize: 12, background: "#F5F0FF", border: "0.5px solid #C5B0F0", borderRadius: 6, padding: "6px 10px", color: "#3A1A6E", lineHeight: 1.5 }}>
                        🔄 <strong>Transformation :</strong> {lm.transformation}
                      </div>
                    )}
                  </div>
                  {lm.dotKeys && (
                    <button
                      onClick={() => lm.scale
                        ? playScale(pianoRef as React.RefObject<PianoPlayerRef>, lm.dotKeys!, 350)
                        : playChord(pianoRef as React.RefObject<PianoPlayerRef>, lm.dotKeys!)
                      }
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
            Techniques de transformation du leitmotif
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8, marginBottom: 20 }}>
            {[
              { label: "Majeur → Mineur", desc: "La même mélodie en mode mineur signale la menace, la corruption ou la perte du personnage. Le spectateur reconnaît le thème et ressent le changement instantanément." },
              { label: "Timbre opposé", desc: "Cuivres martelés → harpe ou cordes douces. Même mélodie, émotion opposée. L'Imperial March de Vador en harpe = sa vulnérabilité humaine." },
              { label: "Tempo fragmenté", desc: "Le thème en fragments de 2–3 notes crée de l'inquiétude. L'oreille cherche à compléter la mélodie — le compositeur refuse de la terminer." },
              { label: "Augmentation / Diminution", desc: "Valeurs doublées (plus lent = grandeur épique) ou réduites (plus vite = urgence et danger). Technique contrapuntique appliquée au cinéma." },
            ].map((t, i) => (
              <div key={i} style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "12px 14px", background: "#fff" }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#111", marginBottom: 4 }}>{t.label}</div>
                <div style={{ fontSize: 12, color: "#666", lineHeight: 1.55 }}>{t.desc}</div>
              </div>
            ))}
          </div>

          <div style={S.infoBox}>
            <strong>Morricone et Leone :</strong> Morricone composait AVANT le tournage. Leone montrait la musique aux acteurs sur le plateau — ils jouaient en écoutant. La musique dictait le rythme et l'émotion du jeu, l'inverse de la méthode classique. Cette collaboration unique explique la fusion parfaite image/son dans leurs films.
          </div>

          <div style={S.warnBox}>
            <strong>Technique avancée :</strong> Un leitmotif en majeur qui devient mineur est plus puissant qu'un nouveau thème triste. Pourquoi ? Le spectateur a déjà un lien émotionnel avec le thème original — sa transformation amplifie l'impact. Créer un leitmotif, c'est investir dans une ressource émotionnelle que le compositeur peut exploiter tout au long du film.
          </div>
        </div>
      )}

      {/* ══ SECTION 3 : CONSERVATOIRE ══ */}
      {activeSection === "conservatoire" && <VueConservatoire data={CONSERVATOIRE_DATA_34} />}

      {/* ══ SECTION 4 : QUIZ ══ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.h2}>Quiz — Harmonie cinématographique</h2>
          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 8 ? "🎬" : quizScore >= 6 ? "👍" : "💪"}
              </div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>
                Score : {quizScore} / {QUIZ_COUNT}
              </div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
                {quizScore >= 8 ? "Excellent ! Vous maîtrisez l'harmonie cinématographique et le leitmotif." :
                 quizScore >= 6 ? "Bien ! Revoyez la carte des émotions et les techniques du leitmotif." :
                 "Continuez — relisez les sections Émotions harmoniques et Leitmotif."}
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
                    if (isCorrect)       { bg = ACCENT_BG; border = ACCENT; color = "#0A0A2A"; }
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
                <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 8, background: selectedOpt === quizQuestions[quizIdx].a ? ACCENT_BG : "#FCEBEB", fontSize: 13, color: selectedOpt === quizQuestions[quizIdx].a ? "#0A0A2A" : "#501313", lineHeight: 1.6 }}>
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

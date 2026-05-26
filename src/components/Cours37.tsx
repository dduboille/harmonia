"use client";

/**
 * Cours37.tsx
 * Harmonia · Niveau 5 · Cours 37 — Analyse avancée : Schenker et analyse motivique
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { useTerm } from "@/hooks/useTerm";
import { cours37Content } from "@/data/cours37Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";
import { VueConservatoire } from "@/components/VueConservatoire";
import { CONSERVATOIRE_DATA_37 } from "@/data/conservatoireData37";

const FR37: Record<string, string> = {
  Do: "C", Ré: "D", Re: "D", Mi: "E", Fa: "F", Sol: "G", La: "A", Si: "B",
};
const FLAT37: Record<string, string> = {
  Cb: "B", Db: "C#", Eb: "D#", Fb: "E", Gb: "F#", Ab: "G#", Bb: "A#",
};
function frNote37(raw: string): string {
  const m = raw.match(/^(Do|Ré|Re|Mi|Fa|Sol|La|Si)([#b]?)$/);
  if (!m) return raw;
  const en = (FR37[m[1]] ?? m[1]) + m[2];
  return FLAT37[en] ?? en;
}

function playScale(ref: React.RefObject<PianoPlayerRef>, notes: string[], gap = 400) {
  notes.forEach((key, i) => {
    const [rawNote, octStr] = key.split(":");
    const note = frNote37(rawNote);
    setTimeout(() => ref.current?.playNote(note, parseInt(octStr), { duration: 1.4 }), i * gap);
  });
}

function playChord(ref: React.RefObject<PianoPlayerRef>, notes: string[]) {
  notes.forEach((key) => {
    const [rawNote, octStr] = key.split(":");
    const note = frNote37(rawNote);
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

// ── Niveaux schenkériens ─────────────────────────────────────────────────────

const NIVEAUX_SCHENKER = [
  {
    niveau: "Niveau 4",
    nom: "Vordergrund (premier plan)",
    description: "La surface musicale complète : tous les accords, ornements, mélodies, notes de passage, broderies, arpèges. C'est la musique telle qu'elle est jouée.",
    contenu: "Chaque accord mesure par mesure",
    exemple: "CMaj–Am7–Dm7–G7–Em–Am–F–G7–CMaj",
  },
  {
    niveau: "Niveau 3",
    nom: "Mittelgrund (plan intermédiaire proche)",
    description: "Réduction éliminant les ornements de surface. Restent les fonctions harmoniques principales et les prolongations.",
    contenu: "Fonctions harmoniques essentielles",
    exemple: "I–VI–II–V–I (cadences principales)",
  },
  {
    niveau: "Niveau 2",
    nom: "Mittelgrund (plan intermédiaire profond)",
    description: "Réduction montrant uniquement les régions tonales et les prolongations harmoniques majeures.",
    contenu: "Régions tonales et prolongations",
    exemple: "I (prolongé sur 16 mesures) → V → I",
  },
  {
    niveau: "Niveau 1",
    nom: "Hintergrund (arrière-plan)",
    description: "La structure fondamentale (Ursatz) : Urlinie + Bassbrechung. La charpente harmonique de toute l'œuvre en quelques notes.",
    contenu: "Urlinie (5̂–4̂–3̂–2̂–1̂) + Basse (I–V–I)",
    exemple: "Sol–Fa–Mi–Ré–Do / Do–Sol–Do",
  },
];

// ── Transformations motiviques ────────────────────────────────────────────────

interface Transformation {
  nom: string;
  description: string;
  original: string[];
  transforme: string[];
  exemple?: string;
}

const TRANSFORMATIONS_MOTIVIQUES: Transformation[] = [
  {
    nom: "Transposition",
    description: "Le motif transposé à un autre degré — les intervalles sont conservés",
    original: ["Sol:3","Sol:3","Sol:3","Mib:3"],
    transforme: ["La:3","La:3","La:3","Fa:3"],
    exemple: "Beethoven 5e : motif répété dès la 2e mesure un ton plus bas",
  },
  {
    nom: "Inversion",
    description: "Les intervalles retournés — ce qui montait descend et vice versa",
    original: ["Do:3","Mi:3","Sol:3"],
    transforme: ["Do:3","Lab:2","Fa:2"],
    exemple: "Bach : inversions du sujet dans les fugues",
  },
  {
    nom: "Augmentation",
    description: "Le motif en valeurs doubles — plus lent, plus solennel",
    original: ["Sol:3","Fa:3","Mi:3","Ré:3"],
    transforme: ["Sol:4","Fa:4","Mi:4","Ré:4"],
    exemple: "Dans un registre plus aigu pour marquer l'augmentation",
  },
  {
    nom: "Fragmentation",
    description: "Seulement les 2-3 premières notes du motif — crée l'inquiétude et l'urgence",
    original: ["Sol:3","Sol:3","Sol:3","Mib:3"],
    transforme: ["Sol:4","Sol:4"],
    exemple: "Beethoven 5e : développement fragmente les 4 notes en 2 + 2",
  },
];

// ── Navigation ─────────────────────────────────────────────────────────────────

const SECTIONS_IDS = ["schenker", "motivique", "conservatoire", "quiz"] as const;
const QUIZ_COUNT = 10;

const ACCENT = "#1A3A1A";
const ACCENT_BG = "#EAF3EA";

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
  infoBox:  { borderLeft: `2px solid ${ACCENT}`, padding: "8px 14px", background: ACCENT_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#0A1E0A", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
};

export default function Cours37() {
  const [activeSection, setActiveSection] = useState<string>("schenker");
  const i18n = useCoursI18n("cours37");
  const tr = useTerm();
  const { questions: ALL_QUESTIONS } = useCoursContent(cours37Content);

  const [quizQuestions] = useState(() => shuffle(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [quizIdx,      setQuizIdx]      = useState(0);
  const [quizScore,    setQuizScore]    = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizDone,     setQuizDone]     = useState(false);
  const [selectedOpt,  setSelectedOpt]  = useState<number | null>(null);

  const pianoRef = useRef<PianoPlayerRef>(null);


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
        <span style={S.badge}>{i18n.badge}</span>
        <h1 style={S.h1}>{i18n.title}</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Arnold Schoenberg"
        period="1874–1951"
        emoji="🎼"
        concept="Analyse motivique et structure profonde"
        anecdote="Schoenberg est célèbre pour le dodécaphonisme, mais il était aussi un analyste et théoricien majeur. Il a développé le concept de Grundgestalt (forme fondamentale) — un motif de 2 à 6 notes dont toute l'œuvre est une extension. Son manuel 'Fundamentals of Musical Composition' est encore utilisé dans les conservatoires. Paradoxe : le père de l'atonalité était obsédé par la cohérence motivique que seul le tonal peut établir clairement."
        lesson="L'analyse n'explique pas pourquoi la musique est belle — elle montre la charpente sous la peau. C'est un outil, pas une valeur."
        accentColor={ACCENT}
      />

      <nav style={S.nav}>
        {SECTIONS_IDS.map(id => (
          <button key={id} style={S.pill(activeSection === id)} onClick={() => setActiveSection(id)}>
            {i18n.sectionLabel(id)}
          </button>
        ))}
      </nav>

      {/* ══ SECTION 1 : SCHENKER ══ */}
      {activeSection === "schenker" && (
        <div>
          <h2 style={S.h2}>L'analyse schenkérienne</h2>
          <p style={S.p}>
            Heinrich Schenker (1868–1935) a développé une théorie selon laquelle toute musique tonale est une ornementalisation d'une structure fondamentale simple — l'Ursatz. Son approche révèle les couches de signification cachées sous la surface de la musique.
          </p>

          <div style={S.infoBox}>
            <strong>L'Ursatz :</strong> L'Urlinie (ligne mélodique descendante du 5e, 3e ou 8e degré vers la tonique) soutenue par le Bassbrechung (basse qui arpège I–V–I). Toute la musique tonale est une prolongation et ornementalisation de cet Ursatz. En Do majeur : Sol–Fa–Mi–Ré–Do (dessus) / Do–Sol–Do (basse).
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" as const, marginBottom: 20 }}>
            <div style={{ flex: 1, minWidth: 200, border: `0.5px solid ${ACCENT}`, borderRadius: 10, padding: "12px 14px", background: ACCENT_BG }}>
              <div style={{ fontSize: 12, color: ACCENT, fontWeight: 600, marginBottom: 4 }}>Urlinie 5̂→1̂ (Do majeur)</div>
              <div style={{ fontFamily: "monospace", fontSize: 11, color: ACCENT, marginBottom: 8 }}>Sol–Fa–Mi–Ré–Do</div>
              <button onClick={() => playScale(pianoRef as React.RefObject<PianoPlayerRef>, ["Sol:4","Fa:4","Mi:4","Ré:4","Do:4"], 400)}
                style={{ fontSize: 11, padding: "3px 10px", border: `0.5px solid ${ACCENT}`, borderRadius: 14, cursor: "pointer", background: "transparent", color: ACCENT }}>
                ▶ Écouter l'Urlinie
              </button>
            </div>
            <div style={{ flex: 1, minWidth: 200, border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "12px 14px", background: "#fff" }}>
              <div style={{ fontSize: 12, color: "#555", fontWeight: 600, marginBottom: 4 }}>Bassbrechung I–V–I</div>
              <div style={{ fontFamily: "monospace", fontSize: 11, color: "#555", marginBottom: 8 }}>Do–Sol–Do (basse)</div>
              <button onClick={() => playScale(pianoRef as React.RefObject<PianoPlayerRef>, ["Do:2","Sol:2","Do:3"], 600)}
                style={{ fontSize: 11, padding: "3px 10px", border: "0.5px solid #aaa", borderRadius: 14, cursor: "pointer", background: "transparent", color: "#555" }}>
                ▶ Écouter la basse
              </button>
            </div>
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 12px", color: "#111" }}>
            4 niveaux de réduction
          </h3>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 8, marginBottom: 24 }}>
            {NIVEAUX_SCHENKER.map((niv, i) => (
              <div key={i} style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "14px 16px", background: "#fff" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12, flexWrap: "wrap" as const }}>
                  <div style={{ minWidth: 60, flexShrink: 0 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#fff", background: ACCENT, borderRadius: 6, padding: "2px 8px", textAlign: "center" as const }}>
                      {niv.niveau}
                    </div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#111", marginBottom: 4 }}>{niv.nom}</div>
                    <div style={{ fontSize: 12, color: "#555", lineHeight: 1.6, marginBottom: 4 }}>{niv.description}</div>
                    <div style={{ fontFamily: "monospace", fontSize: 11, color: ACCENT, background: ACCENT_BG, padding: "2px 8px", borderRadius: 4, display: "inline-block" }}>
                      {niv.exemple}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "0 0 12px", color: "#111" }}>
            Types d'ornementalisation (notes non structurelles)
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8, marginBottom: 20 }}>
            {[
              { nom: "Note de passage", desc: "Relie deux notes structurelles par mouvement conjoint : Do–Ré–Mi, le Ré disparaît à la réduction" },
              { nom: "Note de broderie", desc: "Part d'une note structurelle, s'éloigne d'un degré, revient : Do–Ré–Do, le Ré est une broderie" },
              { nom: "Appogiature", desc: "Note étrangère non préparée sur un temps fort, résolue par mouvement conjoint descendant" },
              { nom: "Retard", desc: "La résolution d'une note est retardée — la note non structurelle tient sur le temps fort et se résout ensuite" },
            ].map((t, i) => (
              <div key={i} style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "12px 14px", background: "#fff" }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#111", marginBottom: 4 }}>{t.nom}</div>
                <div style={{ fontSize: 12, color: "#666", lineHeight: 1.55 }}>{t.desc}</div>
              </div>
            ))}
          </div>

          <div style={S.warnBox}>
            <strong>Erreur classique :</strong> Confondre réduction schenkérienne et simplification. La réduction ne supprime pas des notes "au hasard" — elle identifie les notes structurelles selon des critères précis (position métrique, durée, rôle harmonique). Les notes ornementales ne sont pas moins importantes : elles sont la surface expressive. La réduction révèle la structure, elle ne juge pas la valeur.
          </div>
        </div>
      )}

      {/* ══ SECTION 2 : MOTIVIQUE ══ */}
      {activeSection === "motivique" && (
        <div>
          <h2 style={S.h2}>Analyse motivique</h2>
          <p style={S.p}>
            L'analyse motivique identifie les cellules mélodiques de 2 à 6 notes qui constituent la matière première d'une œuvre, puis suit leurs transformations. Ce niveau d'analyse révèle l'unité organique d'une composition — comment tout est dérivé de peu.
          </p>

          <div style={S.infoBox}>
            <strong>Beethoven — 5e Symphonie :</strong> Le motif initial (Sol–Sol–Sol–Mib) n'est pas seulement le début du premier mouvement. Ce motif rythmique (3 croches + noire) et mélodique (tierce mineure descendante) organise les 4 mouvements entiers — dans le thème du 2e mouvement, dans les fanfares du 3e, dans la transition finale du 4e. C'est la définition même de l'unité organique.
          </div>

          <div style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "16px 18px", background: "#fff", marginBottom: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#111", marginBottom: 8 }}>Motif Beethoven 5e — Sol–Sol–Sol–Mib</div>
            <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6, marginBottom: 10 }}>
              Deux dimensions simultanées : <strong>rythme</strong> (court–court–court–long) et <strong>mélodie</strong> (tierce mineure descendante). Les deux sont inséparables dans l'analyse. Dans le 2e mouvement, le rythme est transformé mais la tierce mélodique persiste.
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" as const }}>
              <button onClick={() => playScale(pianoRef as React.RefObject<PianoPlayerRef>, ["Sol:3","Sol:3","Sol:3","Mib:3"], 250)}
                style={{ fontSize: 11, padding: "5px 14px", border: `0.5px solid ${ACCENT}`, borderRadius: 16, cursor: "pointer", background: ACCENT_BG, color: ACCENT }}>
                ▶ Motif original
              </button>
              <button onClick={() => playScale(pianoRef as React.RefObject<PianoPlayerRef>, ["Fa:3","Fa:3","Fa:3","Ré:3"], 250)}
                style={{ fontSize: 11, padding: "5px 14px", border: "0.5px solid #aaa", borderRadius: 16, cursor: "pointer", background: "transparent", color: "#555" }}>
                ▶ Transposé (même rythme)
              </button>
            </div>
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 12px", color: "#111" }}>
            4 transformations motiviques fondamentales
          </h3>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 10, marginBottom: 24 }}>
            {TRANSFORMATIONS_MOTIVIQUES.map((t, i) => (
              <div key={i} style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "14px 16px", background: "#fff" }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: ACCENT, marginBottom: 4 }}>{t.nom}</div>
                <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6, marginBottom: 8 }}>{t.description}</div>
                {t.exemple && (
                  <div style={{ fontSize: 12, color: "#888", fontStyle: "italic", marginBottom: 10 }}>Exemple : {t.exemple}</div>
                )}
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" as const }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <span style={{ fontSize: 11, color: "#888" }}>Original :</span>
                    <button onClick={() => playScale(pianoRef as React.RefObject<PianoPlayerRef>, t.original, 300)}
                      style={{ fontSize: 11, padding: "3px 10px", border: "0.5px solid #ccc", borderRadius: 12, cursor: "pointer", background: "transparent", color: "#555" }}>
                      ▶
                    </button>
                  </div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <span style={{ fontSize: 11, color: ACCENT }}>Transformé :</span>
                    <button onClick={() => playScale(pianoRef as React.RefObject<PianoPlayerRef>, t.transforme, 300)}
                      style={{ fontSize: 11, padding: "3px 10px", border: `0.5px solid ${ACCENT}`, borderRadius: 12, cursor: "pointer", background: ACCENT_BG, color: ACCENT }}>
                      ▶
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "0 0 12px", color: "#111" }}>
            Méthode d'analyse motivique
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8, marginBottom: 20 }}>
            {[
              { n: "1", label: "Identifier le motif générateur", desc: "2 à 6 notes qui apparaissent au début et se répètent. Un intervalle ou un rythme distinctif est la clé." },
              { n: "2", label: "Cartographier les occurrences", desc: "Marquer chaque apparition du motif dans la partition — transpositons, transformations incluses." },
              { n: "3", label: "Analyser les transformations", desc: "Inversion, augmentation, diminution, fragmentation, séquence. Comment le motif se développe-t-il ?" },
              { n: "4", label: "Identifier la fonction structurelle", desc: "Le motif crée-t-il l'exposition, le développement, le climax ? Quel rôle narratif joue-t-il ?" },
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

          <div style={S.infoBox}>
            <strong>Brahms et l'unité motivique :</strong> Dans ses quatuors et symphonies, Brahms dérive souvent toute l'œuvre d'un seul intervalle (une seconde ou une tierce). Cet intervalle générateur apparaît dans la mélodie, la basse, les transitions, les contre-mélodies — toujours reconnaissable, toujours transformé. L'analyse motivique de Brahms révèle une densité thématique comparable à celle de Bach.
          </div>

          <div style={S.warnBox}>
            <strong>Erreur courante :</strong> Analyser chaque accord de surface sans chercher la structure profonde. Dire "Do–Sol–Fa–Do" ne dit rien sur la signification structurelle. L'analyse motivique complète l'analyse harmonique : d'un côté la structure verticale (accords), de l'autre la structure horizontale (motif et sa destinée). Les deux ensemble révèlent la logique compositionnelle.
          </div>
        </div>
      )}

      {/* ══ SECTION 3 : CONSERVATOIRE ══ */}
      {activeSection === "conservatoire" && <VueConservatoire data={CONSERVATOIRE_DATA_37} />}

      {/* ══ SECTION 4 : QUIZ ══ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.h2}>Quiz — Schenker et analyse motivique</h2>
          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 8 ? "🎼" : quizScore >= 6 ? "👍" : "💪"}
              </div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>
                Score : {quizScore} / {QUIZ_COUNT}
              </div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
                {quizScore >= 8 ? "Excellent ! Vous maîtrisez l'analyse schenkérienne et l'analyse motivique." :
                 quizScore >= 6 ? "Bien ! Revoyez les 4 niveaux de réduction et les transformations motiviques." :
                 "Continuez — relisez les sections Analyse schenkérienne et Analyse motivique."}
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
                    if (isCorrect)       { bg = ACCENT_BG; border = ACCENT; color = "#0A1E0A"; }
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
                <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 8, background: selectedOpt === quizQuestions[quizIdx].a ? ACCENT_BG : "#FCEBEB", fontSize: 13, color: selectedOpt === quizQuestions[quizIdx].a ? "#0A1E0A" : "#501313", lineHeight: 1.6 }}>
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

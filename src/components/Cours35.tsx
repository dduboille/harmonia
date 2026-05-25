"use client";

/**
 * Cours35.tsx
 * Harmonia · Niveau 5 · Cours 35 — Jazz avancé : Reharmonisation et improvisation
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { useTerm } from "@/hooks/useTerm";
import { cours35Content } from "@/data/cours35Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";
import { VueConservatoire } from "@/components/VueConservatoire";
import { CONSERVATOIRE_DATA_35 } from "@/data/conservatoireData35";

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

// ── Substitutions harmoniques ─────────────────────────────────────────────────

interface Substitution {
  nom: string;
  principe: string;
  exemple: string;
  avant: string[];
  apres: string[];
}

const SUBSTITUTIONS: Substitution[] = [
  {
    nom: "Substitution diatonique",
    principe: "I ↔ III ↔ VI — accords partageant 2 notes dans la même tonalité",
    exemple: "CMaj7 peut être remplacé par Am7 (même tonalité, 2 notes communes : Mi, Sol)",
    avant: ["Do:3","Mi:3","Sol:3","Si:3"],
    apres: ["La:2","Do:3","Mi:3","Sol:3"],
  },
  {
    nom: "Substitution tritonique",
    principe: "V7 remplacé par l'accord dominant situé un triton plus bas — guide-tones partagés",
    exemple: "G7 → Db7 : Si (3e de G7) = Do# (7e de Db7), Fa (7e de G7) = Mib (3e de Db7)",
    avant: ["Sol:2","Si:2","Ré:3","Fa:3"],
    apres: ["Réb:3","Fa:3","Lab:3","Do:4"],
  },
  {
    nom: "Modal interchange",
    principe: "Emprunter des accords du mode parallèle — bVI, bVII, bIII de la gamme éolienne",
    exemple: "En Do majeur : Fm (mineur parallèle), Ab Maj, Bb Maj — couleur sombre et inattendue",
    avant: ["Do:3","Mi:3","Sol:3"],
    apres: ["Lab:2","Do:3","Mib:3","Sol:3"],
  },
  {
    nom: "Chromatic mediant",
    principe: "Remplacement par un accord à distance de tierce — majeure ou mineure, mode différent",
    exemple: "CMaj7 → EMaj (tierce majeure) ou AbMaj (sixte majeure) — couleur cinématographique",
    avant: ["Do:3","Mi:3","Sol:3","Si:3"],
    apres: ["Mi:3","Sol#:3","Si:3","Ré#:4"],
  },
];

// ── Voicings professionnels ───────────────────────────────────────────────────

interface Voicing {
  nom: string;
  description: string;
  construction: string;
  dotKeys: string[];
  style?: string;
}

const VOICINGS: Voicing[] = [
  {
    nom: "Shell voicing (1–3–7)",
    description: "Fondamentale + 3e + 7e sans quinte. Le squelette de l'accord — épuré, laisse de l'espace pour mélodie et basse.",
    construction: "CMaj7 : Do–Mi–Si (quinte Sol omise). G7 : Sol–Si–Fa. Dm7 : Ré–Fa–Do.",
    dotKeys: ["Do:3","Mi:3","Si:3"],
    style: "Accompagnement voix, contrebasse joue la fondamentale",
  },
  {
    nom: "Drop 2",
    description: "Accord fermé dont la 2e voix (depuis le haut) descend d'une octave — ouverture du registre.",
    construction: "CMaj7 fermé : Do–Mi–Sol–Si → Drop 2 : Do–Sol–Si–Mi (Sol descend une octave)",
    dotKeys: ["Do:3","Sol:3","Si:3","Mi:4"],
    style: "Guitaristes jazz, pianistes — registre plus large et naturel",
  },
  {
    nom: "Bill Evans (7–9, sans fondamentale)",
    description: "Fondamentale omise (jouée par le contrebassiste). 3e–7e–9e en voicing léger et aérien.",
    construction: "CMaj9 Evans : Mi–Si–Ré (3e–7e–9e). La fondamentale Do est sous-entendue.",
    dotKeys: ["Mi:3","Si:3","Ré:4"],
    style: "Jazz moderne, trio piano–basse–batterie",
  },
  {
    nom: "Quartal So What",
    description: "Accord construit en quartes superposées. Miles Davis et Bill Evans pour 'So What'.",
    construction: "Ré–Sol–Do–Fa–La : quatre quartes successives + tierce au sommet",
    dotKeys: ["Ré:3","Sol:3","Do:4","Fa:4","La:4"],
    style: "Jazz modal, ouverture sonore sans couleur majeur/mineur définie",
  },
  {
    nom: "Rootless left hand (main gauche sans fondamentale)",
    description: "Main gauche joue 3e–7e (+ extensions optionnelles), main droite joue mélodie/solo.",
    construction: "G7 left hand : Si–Fa–La (3–7–13) ou Si–Fa–Lab (3–7–b13 altéré)",
    dotKeys: ["Si:2","Fa:3","La:3"],
    style: "Pianistes qui accompagnent un soliste ou une voix",
  },
];

// ── Navigation ─────────────────────────────────────────────────────────────────

const SECTIONS_IDS = ["reharmonisation", "voicings", "conservatoire", "quiz"] as const;
const QUIZ_COUNT = 10;

const ACCENT = "#3D1A00";
const ACCENT_BG = "#F7EFE8";

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
  infoBox:  { borderLeft: `2px solid ${ACCENT}`, padding: "8px 14px", background: ACCENT_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#1A0800", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
};

export default function Cours35() {
  const [activeSection, setActiveSection] = useState<string>("reharmonisation");
  const i18n = useCoursI18n("cours35");
  const tr = useTerm();
  const { questions: ALL_QUESTIONS } = useCoursContent(cours35Content);

  const [quizQuestions] = useState(() => shuffle(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [quizIdx,      setQuizIdx]      = useState(0);
  const [quizScore,    setQuizScore]    = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizDone,     setQuizDone]     = useState(false);
  const [selectedOpt,  setSelectedOpt]  = useState<number | null>(null);

  const pianoRef = useRef<PianoPlayerRef>(null);

  const sectionLabel = (id: string) => {
    if (id === "reharmonisation") return "Reharmonisation";
    if (id === "voicings") return "Voicings avancés";
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
        <span style={S.badge}>Niveau 5 · Cours 35</span>
        <h1 style={S.h1}>{tr("Jazz avancé : Reharmonisation et improvisation")}</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Miles Davis"
        period="1926–1991"
        emoji="🎷"
        concept="Harmonie modale et reharmonisation"
        anecdote="Kind of Blue (1959) a été enregistré en deux sessions sans répétition — les musiciens découvraient les grilles modales en studio. Miles leur donnait une gamme et une couleur, pas des accords. Le résultat : l'album de jazz le plus vendu de l'histoire. Miles Davis disait : 'Ne jouez pas ce qui est là — jouez ce qui n'est pas là.'"
        lesson="La sophistication harmonique au jazz ne vient pas de la complexité — elle vient de savoir choisir exactement ce qu'on met et ce qu'on laisse."
        accentColor={ACCENT}
      />

      <nav style={S.nav}>
        {SECTIONS_IDS.map(id => (
          <button key={id} style={S.pill(activeSection === id)} onClick={() => setActiveSection(id)}>
            {sectionLabel(id)}
          </button>
        ))}
      </nav>

      {/* ══ SECTION 1 : REHARMONISATION ══ */}
      {activeSection === "reharmonisation" && (
        <div>
          <h2 style={S.h2}>Reharmonisation avancée</h2>
          <p style={S.p}>
            Reharmoniser, c'est remplacer les accords d'une grille existante par d'autres accords sous la même mélodie. La contrainte absolue : chaque note mélodique doit rester compatible avec le nouvel accord (fondamentale, 3e, 5te, 7e ou extension disponible — jamais une note évitée).
          </p>

          <div style={S.infoBox}>
            <strong>Guide-tones :</strong> La tierce et la septième de l'accord sont les notes qui définissent sa couleur harmonique. Ce sont les notes essentielles à ne jamais frotter contre la mélodie lors d'une reharmonisation. Si la mélodie est un demi-ton au-dessus ou en dessous d'un guide-tone, l'accord est mal choisi.
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 12px", color: "#111" }}>
            4 techniques de substitution
          </h3>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 12, marginBottom: 24 }}>
            {SUBSTITUTIONS.map((sub, i) => (
              <div key={i} style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "14px 16px", background: "#fff" }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: ACCENT, marginBottom: 4 }}>{sub.nom}</div>
                <div style={{ fontFamily: "monospace", fontSize: 12, color: ACCENT, background: ACCENT_BG, padding: "3px 8px", borderRadius: 4, display: "inline-block", marginBottom: 6 }}>
                  {sub.principe}
                </div>
                <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6, marginBottom: 10 }}>{sub.exemple}</div>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" as const }}>
                  <div style={{ flex: 1, minWidth: 180, border: "0.5px solid #e5e5e5", borderRadius: 8, padding: "10px 12px", background: "#fafafa" }}>
                    <div style={{ fontSize: 11, color: "#888", marginBottom: 4 }}>Accord original</div>
                    <div style={{ fontFamily: "monospace", fontSize: 11, color: "#555", marginBottom: 8 }}>{sub.avant.join(" – ")}</div>
                    <button onClick={() => playChord(pianoRef as React.RefObject<PianoPlayerRef>, sub.avant)}
                      style={{ fontSize: 11, padding: "3px 10px", border: "0.5px solid #ccc", borderRadius: 12, cursor: "pointer", background: "transparent", color: "#555" }}>
                      ▶ Avant
                    </button>
                  </div>
                  <div style={{ flex: 1, minWidth: 180, border: `0.5px solid ${ACCENT}`, borderRadius: 8, padding: "10px 12px", background: ACCENT_BG }}>
                    <div style={{ fontSize: 11, color: ACCENT, marginBottom: 4 }}>Accord substitut</div>
                    <div style={{ fontFamily: "monospace", fontSize: 11, color: ACCENT, marginBottom: 8 }}>{sub.apres.join(" – ")}</div>
                    <button onClick={() => playChord(pianoRef as React.RefObject<PianoPlayerRef>, sub.apres)}
                      style={{ fontSize: 11, padding: "3px 10px", border: `0.5px solid ${ACCENT}`, borderRadius: 12, cursor: "pointer", background: "transparent", color: ACCENT }}>
                      ▶ Après
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "0 0 12px", color: "#111" }}>
            Chord scales — quelle gamme sur quel accord ?
          </h3>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 8, marginBottom: 20 }}>
            {[
              { accord: "IMaj7 (CMaj7)", gamme: "Ionien ou Lydien (#11)", couleur: "Stable, brillant ou magique", dotKeys: ["Do:3","Ré:3","Mi:3","Fa#:3","Sol:3","La:3","Si:3"] },
              { accord: "IIm7 (Dm7)", gamme: "Dorien (6e naturelle)", couleur: "Jazz standard — la 13e ajoute de la lumière", dotKeys: ["Ré:3","Mi:3","Fa:3","Sol:3","La:3","Si:3","Do:4"] },
              { accord: "V7 (G7)", gamme: "Mixolydien ou Altérée (super-locrien)", couleur: "Standard ou tension maximale (b9 #9 b13)", dotKeys: ["Sol:3","La:3","Si:3","Do:4","Ré:4","Mi:4","Fa:4"] },
              { accord: "V7alt (G7alt)", gamme: "Altérée = 7e mode min. mélodique de Lab", couleur: "Maximum de tension — toutes les altérations", dotKeys: ["Sol:3","Lab:3","Sib:3","Si:3","Réb:4","Mib:4","Fa:4"] },
            ].map((cs, i) => (
              <div key={i} style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "12px 14px", background: "#fff" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" as const }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#111", marginBottom: 2 }}>{cs.accord}</div>
                    <div style={{ fontSize: 12, fontFamily: "monospace", color: ACCENT, marginBottom: 2 }}>Gamme : {cs.gamme}</div>
                    <div style={{ fontSize: 12, color: "#888" }}>Couleur : {cs.couleur}</div>
                  </div>
                  <button onClick={() => playScale(pianoRef as React.RefObject<PianoPlayerRef>, cs.dotKeys, 250)}
                    style={{ fontSize: 11, padding: "5px 12px", border: `0.5px solid ${ACCENT}`, borderRadius: 16, cursor: "pointer", background: ACCENT_BG, color: ACCENT, flexShrink: 0 }}>
                    ▶ Gamme
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={S.warnBox}>
            <strong>Erreur classique :</strong> Utiliser la substitution tritonique sur tous les accords. Elle ne fonctionne que sur les accords de dominante V7 — parce que c'est la seule fois où les guide-tones (3e et 7e) sont partagés avec le substitut. L'appliquer sur un IMaj7 ou un IIm7 produit une dissonance non-stylistique.
          </div>
        </div>
      )}

      {/* ══ SECTION 2 : VOICINGS ══ */}
      {activeSection === "voicings" && (
        <div>
          <h2 style={S.h2}>Voicings professionnels</h2>
          <p style={S.p}>
            Le voicing est la disposition des notes d'un accord dans le registre. Pour un même accord, il existe des dizaines de voicings possibles — chacun avec sa couleur, son contexte d'emploi, son effet sonore. La maîtrise des voicings distingue l'harmoniste du pianiste ordinaire.
          </p>

          <div style={S.infoBox}>
            <strong>Principe fondamental :</strong> Il n'y a pas de "bon" voicing absolu — il y a des voicings adaptés à chaque contexte. Le shell voicing pour accompagner une voix, le drop 2 pour une texture plus riche, le voicing Evans pour le trio jazz, le quartal pour la couleur modale.
          </div>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: 10, marginBottom: 24 }}>
            {VOICINGS.map((v, i) => (
              <div key={i} style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "14px 16px", background: "#fff" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" as const }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: ACCENT, marginBottom: 4 }}>{v.nom}</div>
                    <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6, marginBottom: 4 }}>{v.description}</div>
                    <div style={{ fontFamily: "monospace", fontSize: 12, color: ACCENT, background: ACCENT_BG, padding: "3px 8px", borderRadius: 4, display: "inline-block", marginBottom: 4 }}>
                      {v.construction}
                    </div>
                    {v.style && (
                      <div style={{ fontSize: 12, color: "#888", fontStyle: "italic" }}>
                        Usage : {v.style}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => playChord(pianoRef as React.RefObject<PianoPlayerRef>, v.dotKeys)}
                    style={{ fontSize: 11, padding: "5px 12px", border: `0.5px solid ${ACCENT}`, borderRadius: 16, cursor: "pointer", background: ACCENT_BG, color: ACCENT, flexShrink: 0 }}
                  >
                    ▶ Écouter
                  </button>
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "0 0 12px", color: "#111" }}>
            Tensions disponibles et notes à éviter
          </h3>
          <div style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, overflow: "hidden", marginBottom: 20 }}>
            <table style={{ width: "100%", borderCollapse: "collapse" as const, fontSize: 12 }}>
              <thead>
                <tr style={{ background: ACCENT_BG }}>
                  <th style={{ padding: "8px 12px", textAlign: "left" as const, color: ACCENT, fontWeight: 600 }}>Accord</th>
                  <th style={{ padding: "8px 12px", textAlign: "left" as const, color: ACCENT, fontWeight: 600 }}>Tensions disponibles</th>
                  <th style={{ padding: "8px 12px", textAlign: "left" as const, color: "#BA7517", fontWeight: 600 }}>À éviter</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { accord: "IMaj7", dispo: "9, #11, 13", eviter: "b9, #9, b13, 11 naturel" },
                  { accord: "IIm7", dispo: "9, 11, 13", eviter: "b9, b13" },
                  { accord: "V7", dispo: "9, 13 (standard)", eviter: "11 naturel" },
                  { accord: "V7alt", dispo: "b9, #9, #11, b13", eviter: "9, 11, 13 naturels" },
                  { accord: "Im7", dispo: "9, 11", eviter: "13 naturel (use b13)" },
                ].map((row, i) => (
                  <tr key={i} style={{ borderTop: "0.5px solid #f0f0f0" }}>
                    <td style={{ padding: "8px 12px", fontFamily: "monospace", color: "#333", fontWeight: 500 }}>{row.accord}</td>
                    <td style={{ padding: "8px 12px", color: "#2D5A1A" }}>{row.dispo}</td>
                    <td style={{ padding: "8px 12px", color: "#A32D2D" }}>{row.eviter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.warnBox}>
            <strong>Erreur fréquente :</strong> Confondre chord scale et mode. Un chord scale est toujours lié à un accord spécifique dans un contexte harmonique précis. CMaj7 en Do majeur utilise l'ionien par défaut — mais si on veut la couleur lydienne (#11), on choisit le lydien. Le contexte (tonal ou modal) détermine le chord scale, pas la grille seule.
          </div>
        </div>
      )}

      {/* ══ SECTION 3 : CONSERVATOIRE ══ */}
      {activeSection === "conservatoire" && <VueConservatoire data={CONSERVATOIRE_DATA_35} />}

      {/* ══ SECTION 4 : QUIZ ══ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.h2}>Quiz — Reharmonisation et voicings</h2>
          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 8 ? "🎷" : quizScore >= 6 ? "👍" : "💪"}
              </div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>
                Score : {quizScore} / {QUIZ_COUNT}
              </div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
                {quizScore >= 8 ? "Excellent ! Vous maîtrisez la reharmonisation et les voicings jazz." :
                 quizScore >= 6 ? "Bien ! Revoyez les techniques de substitution et les chord scales." :
                 "Continuez — relisez les sections Reharmonisation et Voicings avancés."}
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
                    if (isCorrect)       { bg = ACCENT_BG; border = ACCENT; color = "#1A0800"; }
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
                <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 8, background: selectedOpt === quizQuestions[quizIdx].a ? ACCENT_BG : "#FCEBEB", fontSize: 13, color: selectedOpt === quizQuestions[quizIdx].a ? "#1A0800" : "#501313", lineHeight: 1.6 }}>
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

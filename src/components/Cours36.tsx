"use client";

/**
 * Cours36.tsx
 * Harmonia · Niveau 5 · Cours 36 — Harmonie de Debussy et Ravel : l'impressionnisme approfondi
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { useTerm } from "@/hooks/useTerm";
import { cours36Content } from "@/data/cours36Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";
import { VueConservatoire } from "@/components/VueConservatoire";
import { CONSERVATOIRE_DATA_36 } from "@/data/conservatoireData36";

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

// ── Techniques de Debussy ────────────────────────────────────────────────────

interface TechniqueCard {
  nom: string;
  principe: string;
  effet: string;
  dotKeys?: string[];
  scale?: boolean;
}

const TECHNIQUES_DEBUSSY: TechniqueCard[] = [
  {
    nom: "Gamme par tons",
    principe: "6 tons entiers sans demi-ton — Do–Ré–Mi–Fa#–Sol#–La#",
    effet: "Flottement total : sans sensible, aucune note ne tire vers la suivante. Tous les accords sont augmentés.",
    dotKeys: ["Do:3","Ré:3","Mi:3","Fa#:3","Sol#:3","La#:3"],
    scale: true,
  },
  {
    nom: "Gamme octatonique (ton-demi-ton)",
    principe: "8 notes alternant ton et demi-ton — Do–Ré–Mib–Fa–Fa#–Sol#–La–Si",
    effet: "Couleur ambiguë et symétrique — la tonalité est impossible à établir (la gamme se répète à distance de tierce mineure).",
    dotKeys: ["Do:3","Ré:3","Mib:3","Fa:3","Fa#:3","Sol#:3","La:3","Si:3"],
    scale: true,
  },
  {
    nom: "Planing (homorythmie parallèle)",
    principe: "Toutes les voix bougent au même rythme avec le même type d'accord transposé",
    effet: "L'accord se déplace comme un bloc sonore — les quintes parallèles sont intentionnelles, créant l'effet de glissement caractéristique.",
    dotKeys: ["Do:3","Mi:3","Sol:3"],
  },
  {
    nom: "Pédale longue",
    principe: "Basse immobile (note tenue) pendant que l'harmonie change librement au-dessus",
    effet: "Suspension temporelle — le temps harmonique s'arrête à la basse. Technique médiévale (organum) réinventée.",
    dotKeys: ["Do:2","Do:2","Do:2"],
    scale: true,
  },
  {
    nom: "Quintes ouvertes médiévales",
    principe: "Accord de fondamentale + quinte sans tierce — ni majeur ni mineur",
    effet: "Pureté archaïque et atemporelle, évocation du plain-chant et des cloches (La Cathédrale Engloutie).",
    dotKeys: ["Do:3","Sol:3"],
  },
];

const TECHNIQUES_RAVEL: TechniqueCard[] = [
  {
    nom: "Polyaccord (superposition)",
    principe: "Deux accords complets superposés — Do Maj + Ré Maj = cluster hybride",
    effet: "Couleur harmonique dense et inédite — les deux accords restent reconnaissables mais créent quelque chose de nouveau.",
    dotKeys: ["Do:3","Mi:3","Sol:3","Ré:4","Fa#:4","La:4"],
  },
  {
    nom: "Note ajoutée (6te ou 9e)",
    principe: "Enrichissement de l'accord sans 7te — CMaj6 : Do–Mi–Sol–La",
    effet: "Douceur lumineuse — moins 'jazz' que le Maj7, plus 'naïf' et tendre. Signature du style ravélien.",
    dotKeys: ["Do:3","Mi:3","Sol:3","La:3"],
  },
  {
    nom: "Add9 (9e sans 7te)",
    principe: "Accord majeur + 9e : Do–Mi–Sol–Ré — 9e sans 7te intermédiaire",
    effet: "Ouverture et clarté — l'accord semble aspirer vers le haut. Très différent du Maj9 (qui ajoute aussi la 7te).",
    dotKeys: ["Do:3","Mi:3","Sol:3","Ré:4"],
  },
  {
    nom: "Modalité néoclassique",
    principe: "Modes anciens (dorien, phrygien, lydien) dans un langage moderne",
    effet: "Couleur modale sans archaïsme — le mode dorien sur Sol donne une lumière particulière absente du mineur harmonique.",
    dotKeys: ["Sol:3","La:3","Sib:3","Do:4","Ré:4","Mi:4","Fa:4","Sol:4"],
    scale: true,
  },
  {
    nom: "Ostinato harmonique (Boléro)",
    principe: "Un seul accord (Do7) pendant 15 minutes — la tension vient de l'orchestration progressive",
    effet: "Démonstration que la progression harmonique n'est pas le seul moteur de tension — le timbre et la dynamique suffisent.",
    dotKeys: ["Do:3","Mi:3","Sol:3","Sib:3"],
  },
];

// ── Navigation ─────────────────────────────────────────────────────────────────

const SECTIONS_IDS = ["debussy", "ravel", "conservatoire", "quiz"] as const;
const QUIZ_COUNT = 10;

const ACCENT = "#0A3D4A";
const ACCENT_BG = "#E8F3F5";

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
  infoBox:  { borderLeft: `2px solid ${ACCENT}`, padding: "8px 14px", background: ACCENT_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#061E24", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
};

function TechniqueRow({ t, pianoRef, accent, accentBg }: {
  t: TechniqueCard;
  pianoRef: React.RefObject<PianoPlayerRef>;
  accent: string;
  accentBg: string;
}) {
  return (
    <div style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "14px 16px", background: "#fff" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" as const }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: accent, marginBottom: 4 }}>{t.nom}</div>
          <div style={{ fontFamily: "monospace", fontSize: 12, color: accent, background: accentBg, padding: "3px 8px", borderRadius: 4, display: "inline-block", marginBottom: 6 }}>
            {t.principe}
          </div>
          <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>{t.effet}</div>
        </div>
        {t.dotKeys && (
          <button
            onClick={() => t.scale
              ? playScale(pianoRef, t.dotKeys!, 280)
              : playChord(pianoRef, t.dotKeys!)
            }
            style={{ fontSize: 11, padding: "5px 12px", border: `0.5px solid ${accent}`, borderRadius: 16, cursor: "pointer", background: accentBg, color: accent, flexShrink: 0 }}
          >
            ▶ Écouter
          </button>
        )}
      </div>
    </div>
  );
}

export default function Cours36() {
  const [activeSection, setActiveSection] = useState<string>("debussy");
  const i18n = useCoursI18n("cours36");
  const tr = useTerm();
  const { questions: ALL_QUESTIONS } = useCoursContent(cours36Content);

  const [quizQuestions] = useState(() => shuffle(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [quizIdx,      setQuizIdx]      = useState(0);
  const [quizScore,    setQuizScore]    = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizDone,     setQuizDone]     = useState(false);
  const [selectedOpt,  setSelectedOpt]  = useState<number | null>(null);

  const pianoRef = useRef<PianoPlayerRef>(null);

  const sectionLabel = (id: string) => {
    if (id === "debussy") return "Harmonie de Debussy";
    if (id === "ravel") return "Harmonie de Ravel";
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
        <span style={S.badge}>Niveau 5 · Cours 36</span>
        <h1 style={S.h1}>{tr("Harmonie de Debussy et Ravel : l'impressionnisme approfondi")}</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Erik Satie"
        period="1866–1925"
        emoji="🌊"
        concept="Harmonie statique et impressionnisme précurseur"
        anecdote="Satie a inventé la 'musique d'ameublement' (1920) — une musique censée se confondre avec le bruit de l'environnement, comme un meuble sonore. Lors de sa première exécution, le public s'assit poliment et écouta. Satie furieux parcourait la salle en criant : 'Parlez ! Bougez ! N'écoutez pas !' Il préfigurait Brian Eno et la musique ambient de 50 ans."
        lesson="La musique peut exister sans tension ni résolution — la couleur harmonique est une fin en soi."
        accentColor={ACCENT}
      />

      <nav style={S.nav}>
        {SECTIONS_IDS.map(id => (
          <button key={id} style={S.pill(activeSection === id)} onClick={() => setActiveSection(id)}>
            {sectionLabel(id)}
          </button>
        ))}
      </nav>

      {/* ══ SECTION 1 : DEBUSSY ══ */}
      {activeSection === "debussy" && (
        <div>
          <h2 style={S.h2}>L'harmonie impressionniste de Debussy</h2>
          <p style={S.p}>
            Debussy a dissous le système tonal classique non pas en le rejetant, mais en le contournant. Il a remplacé les fonctions harmoniques (T/SD/D) par des couleurs sonores — l'accord n'a plus de rôle, il a une texture. La tension-résolution cède la place à l'atmosphère.
          </p>

          <div style={S.infoBox}>
            <strong>Principe fondamental :</strong> Chez Debussy, la progression harmonique suit la mélodie et l'image sonore — pas la logique fonctionnelle. Analyser Debussy avec les fonctions T/SD/D revient à appliquer les règles de l'échecs aux dés. La grille d'analyse est inappropriée.
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 12px", color: "#111" }}>
            5 techniques harmoniques caractéristiques
          </h3>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 10, marginBottom: 24 }}>
            {TECHNIQUES_DEBUSSY.map((t, i) => (
              <TechniqueRow key={i} t={t} pianoRef={pianoRef as React.RefObject<PianoPlayerRef>} accent={ACCENT} accentBg={ACCENT_BG} />
            ))}
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "0 0 12px", color: "#111" }}>
            Comment analyser une pièce impressionniste
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8, marginBottom: 20 }}>
            {[
              { n: "1", label: "Identifier la gamme source", desc: "Par tons (6 tons entiers), octatonique (ton-demi-ton), pentatonique, ou mode ecclésiastique ?" },
              { n: "2", label: "Repérer la technique de texture", desc: "Planing ? Pédale longue ? Quintes ouvertes ? Homorythmie parallèle ?" },
              { n: "3", label: "Analyser la couleur de l'accord", desc: "Qualité de l'accord, extensions présentes, registre. Pas de fonction harmonique." },
              { n: "4", label: "Observer registre et dynamique", desc: "Les changements de couleur viennent souvent du registre et du volume, pas de la progression d'accords." },
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
            <strong>Erreur classique :</strong> Chercher des cadences V→I dans Debussy. Debussy les évite systématiquement — c'est le principe même de son esthétique. Le Prélude à l'après-midi d'un faune (110 mesures) ne contient aucune cadence dominante-tonique classique. L'harmonie "flotte" sans jamais se résoudre.
          </div>
        </div>
      )}

      {/* ══ SECTION 2 : RAVEL ══ */}
      {activeSection === "ravel" && (
        <div>
          <h2 style={S.h2}>L'harmonie calculée de Ravel</h2>
          <p style={S.p}>
            Ravel partage avec Debussy la surface impressionniste — accords colorés, extensions, modes — mais sa logique est opposée. Ravel se définissait lui-même comme un "horloger" : chaque accord est calculé, chaque voicing mesuré. La Pavane, le Boléro, les Valses nobles sont des constructions architecturales déguisées en rêveries.
          </p>

          <div style={S.infoBox}>
            <strong>Différence essentielle :</strong> Debussy crée intuitivement par images et couleurs sonores. Ravel calcule avec une rigueur quasi mathématique. Même surface impressionniste, logiques compositionnelles opposées. Debussy lui-même les distinguait clairement et refusait d'être associé à Ravel.
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 12px", color: "#111" }}>
            5 techniques harmoniques de Ravel
          </h3>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 10, marginBottom: 24 }}>
            {TECHNIQUES_RAVEL.map((t, i) => (
              <TechniqueRow key={i} t={t} pianoRef={pianoRef as React.RefObject<PianoPlayerRef>} accent={ACCENT} accentBg={ACCENT_BG} />
            ))}
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "0 0 12px", color: "#111" }}>
            Satie : le précurseur oublié
          </h3>
          <div style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "16px 18px", background: "#fff", marginBottom: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: ACCENT, marginBottom: 6 }}>Erik Satie (1866–1925)</div>
            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7, marginBottom: 10 }}>
              Satie précède Debussy et Ravel et préfigure le minimalisme de 50 ans. Ses <strong>Gymnopédies</strong> (1888) utilisent des accords de 7e majeure en balancement lent — deux couleurs qui alternent sans jamais progresser dramatiquement. Ses <strong>Vexations</strong> (1893, découvertes après sa mort) anticipent Steve Reich : une pièce de 52 secondes à jouer 840 fois d'affilée.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" as const }}>
              <div style={{ flex: 1, minWidth: 200 }}>
                <div style={{ fontSize: 12, color: "#888", marginBottom: 4 }}>Gymnopédie n°1 — accord I (Ré Maj7)</div>
                <button onClick={() => playChord(pianoRef as React.RefObject<PianoPlayerRef>, ["Ré:3","Fa#:3","La:3","Do#:4"])}
                  style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${ACCENT}`, borderRadius: 14, cursor: "pointer", background: ACCENT_BG, color: ACCENT }}>
                  ▶ Accord I (Dmaj7)
                </button>
              </div>
              <div style={{ flex: 1, minWidth: 200 }}>
                <div style={{ fontSize: 12, color: "#888", marginBottom: 4 }}>Accord IV (Sol Maj7)</div>
                <button onClick={() => playChord(pianoRef as React.RefObject<PianoPlayerRef>, ["Sol:3","Si:3","Ré:4","Fa#:4"])}
                  style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${ACCENT}`, borderRadius: 14, cursor: "pointer", background: ACCENT_BG, color: ACCENT }}>
                  ▶ Accord IV (Gmaj7)
                </button>
              </div>
            </div>
          </div>

          <div style={S.warnBox}>
            <strong>Erreur fréquente :</strong> Croire que Debussy et Ravel sont le même compositeur avec le même style. Leur surface est similaire (impressionnisme, couleurs) mais leur méthode est opposée. Ravel peut écrire en formes classiques strictes (Sonatine pour piano, Quatuor à cordes) avec un langage impressionniste. Debussy évite les formes classiques. Cette différence est fondamentale.
          </div>
        </div>
      )}

      {/* ══ SECTION 3 : CONSERVATOIRE ══ */}
      {activeSection === "conservatoire" && <VueConservatoire data={CONSERVATOIRE_DATA_36} />}

      {/* ══ SECTION 4 : QUIZ ══ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.h2}>Quiz — Impressionnisme : Debussy, Ravel, Satie</h2>
          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 8 ? "🌊" : quizScore >= 6 ? "👍" : "💪"}
              </div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>
                Score : {quizScore} / {QUIZ_COUNT}
              </div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
                {quizScore >= 8 ? "Excellent ! Vous maîtrisez l'harmonie impressionniste de Debussy et Ravel." :
                 quizScore >= 6 ? "Bien ! Revoyez les techniques de planing, pédale longue et polyaccords." :
                 "Continuez — relisez les sections Debussy et Ravel en détail."}
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
                    if (isCorrect)       { bg = ACCENT_BG; border = ACCENT; color = "#061E24"; }
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
                <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 8, background: selectedOpt === quizQuestions[quizIdx].a ? ACCENT_BG : "#FCEBEB", fontSize: 13, color: selectedOpt === quizQuestions[quizIdx].a ? "#061E24" : "#501313", lineHeight: 1.6 }}>
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

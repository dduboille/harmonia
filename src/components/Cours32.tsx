"use client";

/**
 * Cours32.tsx
 * Harmonia · Niveau 4 · Cours 32 — Extensions jazz avancées et reharmonisation moderne
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { useTerm } from "@/hooks/useTerm";
import { cours32Content } from "@/data/cours32Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";
import { VueConservatoire } from "@/components/VueConservatoire";
import { CONSERVATOIRE_DATA_32 } from "@/data/conservatoireData32";

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

// ── Extensions altérées ────────────────────────────────────────────────────────

interface Extension {
  id: string;
  nom: string;
  symbole: string;
  description: string;
  couleur: string;
  exemple: string;
  dotKeys: string[];
  gamme: string;
}

const EXTENSIONS: Extension[] = [
  {
    id: "b9",
    nom: "Neuvième bémol",
    symbole: "G7b9",
    description: "La 9e bémolisée — un demi-ton au-dessus de la fondamentale. Couleur sombre, expressive, espagnole.",
    couleur: "Sombre, flamenco, expressif, Bach",
    exemple: "Accord le plus utilisé dans le jazz post-bop sombre et la musique espagnole",
    dotKeys: ["Sol:2","Si:2","Ré:3","Fa:3","Lab:3"],
    gamme: "Gamme diminuée (ton/demi-ton)",
  },
  {
    id: "s9",
    nom: "Neuvième dièse",
    symbole: "G7#9",
    description: "La 9e augmentée — enharmonique de la tierce mineure. Coexiste avec la tierce majeure → ambiguïté maj/min caractéristique.",
    couleur: "Funky, électrique, 'Purple Haze' (Jimi Hendrix)",
    exemple: "Accord signature du rock blues et du funk — Hendrix en est le maître absolu",
    dotKeys: ["Sol:2","Si:2","Ré:3","Fa:3","La#:3"],
    gamme: "Gamme altérée (super-locrien)",
  },
  {
    id: "s11",
    nom: "Onzième dièse",
    symbole: "G7#11",
    description: "La 4te augmentée (triton) au-dessus de la fondamentale. Couleur lydienne dominante — lumineuse et moderne.",
    couleur: "Lydien, lumineux, ouvert — thème des Simpsons",
    exemple: "Mode lydien dominant sur V7 — jazz moderne et musique de film",
    dotKeys: ["Sol:2","Si:2","Ré:3","Fa:3","Do#:4"],
    gamme: "Mode lydien dominant (4e mode de la mineure mélodique)",
  },
  {
    id: "b13",
    nom: "Treizième bémol / accord altéré",
    symbole: "G7alt",
    description: "L'accord altéré contient b9, #9, b5 et b13 — tension maximale avant résolution. Issu de la gamme altérée.",
    couleur: "Tension extrême, résolution dramatique, post-bop",
    exemple: "Coltrane, Miles Davis, Bill Evans — dominante la plus tendue du jazz",
    dotKeys: ["Sol:2","Si:2","Réb:3","Fa:3","Lab:3"],
    gamme: "Gamme altérée (super-locrien = 7e mode de la mineure mélodique)",
  },
  {
    id: "13",
    nom: "Treizième naturelle",
    symbole: "G13",
    description: "La 13e naturelle — 6e de la gamme à l'octave supérieure. Accord complet et lumineux du jazz traditionnel.",
    couleur: "Lumineux, complet, jazz traditionnel, Big Band",
    exemple: "Jazz classique, standards, arrangements Big Band — couleur pleine et ouverte",
    dotKeys: ["Sol:2","Si:2","Ré:3","Fa:3","Mi:4"],
    gamme: "Mixolydien (gamme majeure avec 7te bémolisée)",
  },
];

// ── Tensions disponibles par degré ─────────────────────────────────────────────

interface TensionDegre {
  degre: string;
  exemple: string;
  disponibles: string;
  eviter: string;
  couleur: string;
}

const TENSIONS: TensionDegre[] = [
  { degre: "IMaj7", exemple: "DoMaj7", disponibles: "9 · #11 · 13", eviter: "b9 · 11 naturel", couleur: "Lydien naturel" },
  { degre: "IIm7", exemple: "Rém7", disponibles: "9 · 11", eviter: "b9 · b13", couleur: "Dorien" },
  { degre: "V7", exemple: "Sol7", disponibles: "b9 · #9 · #11 · b13", eviter: "11 naturel", couleur: "Altéré / Lydien dom." },
  { degre: "Im7", exemple: "Lam7", disponibles: "9 · 11 · b13", eviter: "b9 · #9", couleur: "Dorien / Éolien" },
  { degre: "IIm7b5", exemple: "Rém7b5", disponibles: "b9 · 11 · b13", eviter: "9 naturelle", couleur: "Locrien #2" },
];

// ── Giant Steps ────────────────────────────────────────────────────────────────

interface GiantStepsCell {
  accord: string;
  tonalite: string;
  fonction: string;
  mesures: string;
  dotKeys: string[];
}

const GIANT_STEPS_CELLS: GiantStepsCell[] = [
  { accord: "BMaj7", tonalite: "Si majeur", fonction: "Tonique 1", mesures: "1–2", dotKeys: ["Si:2","Ré#:3","Fa#:3","La#:3"] },
  { accord: "D7", tonalite: "Pivot vers Sol", fonction: "Dominante pivot", mesures: "3", dotKeys: ["Ré:3","Fa#:3","La:3","Do:4"] },
  { accord: "GMaj7", tonalite: "Sol majeur", fonction: "Tonique 2", mesures: "4", dotKeys: ["Sol:3","Si:3","Ré:4","Fa#:4"] },
];

// ── Substitutions ──────────────────────────────────────────────────────────────

interface Substitution {
  type: string;
  description: string;
  original: string;
  substitut: string;
  principe: string;
  dotKeysOrig: string[];
  dotKeysSub: string[];
}

const SUBSTITUTIONS: Substitution[] = [
  {
    type: "Substitution tritonique",
    description: "Remplacer V7 par le dominante à distance de triton. G7 → Db7. Les deux partagent les mêmes guide-tones (Si/Do# et Fa/Mib s'échangent).",
    original: "G7 (Sol–Si–Ré–Fa)",
    substitut: "Db7 (Réb–Fa–Lab–Do)",
    principe: "Si (3ce de G7) = Do# (7te de Db7) | Fa (7te de G7) = Mib (3ce de Db7)",
    dotKeysOrig: ["Sol:2","Si:2","Ré:3","Fa:3"],
    dotKeysSub: ["Réb:3","Fa:3","Lab:3","Do:4"],
  },
  {
    type: "Substitution par demi-ton",
    description: "Approcher un accord par son voisin à demi-ton. Avant CMaj7, jouer Db7 puis résoudre par mouvement chromatique descendant.",
    original: "G7 → CMaj7",
    substitut: "Ab7 → CMaj7 (approche demi-ton sur la tonique)",
    principe: "La fondamentale descend d'un demi-ton (Lab → Sol) vers la tonique",
    dotKeysOrig: ["Sol:2","Si:2","Ré:3","Fa:3"],
    dotKeysSub: ["Lab:2","Do:3","Mib:3","Fa#:3"],
  },
  {
    type: "Substitution relatif mineur",
    description: "Remplacer IMaj7 par son relatif mineur (VIm7). CMaj7 → Am7. Les deux accords partagent 3 notes sur 4.",
    original: "CMaj7 (Do–Mi–Sol–Si)",
    substitut: "Am7 (La–Do–Mi–Sol)",
    principe: "3 notes communes — la couleur change mais la fonction reste similaire",
    dotKeysOrig: ["Do:3","Mi:3","Sol:3","Si:3"],
    dotKeysSub: ["La:2","Do:3","Mi:3","Sol:3"],
  },
  {
    type: "Cycle de Coltrane (tierce majeure)",
    description: "Remplacer une progression II–V–I par trois II–V–I successifs à distance de tierce majeure. C'est le principe de Giant Steps.",
    original: "Dm7–G7–CMaj7",
    substitut: "Dm7–G7 → Bm7–E7 → GMaj7–C# → CMaj7",
    principe: "3 toniques à distance de tierce maj (Do–La♭–Mi♭ = triangle parfait)",
    dotKeysOrig: ["Ré:3","Fa:3","La:3","Do:4"],
    dotKeysSub: ["Si:2","Ré#:3","Fa#:3","La#:3"],
  },
];

// ── Navigation ─────────────────────────────────────────────────────────────────

const SECTIONS_IDS = ["extensions", "coltrane", "conservatoire", "quiz"] as const;
const QUIZ_COUNT = 10;

const ACCENT = "#3D5A1A";
const ACCENT_BG = "#EBF2E0";

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
  infoBox:  { borderLeft: `2px solid ${ACCENT}`, padding: "8px 14px", background: ACCENT_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#1E2E0A", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
};

export default function Cours32() {
  const [activeSection, setActiveSection] = useState<string>("extensions");
  const i18n = useCoursI18n("cours32");
  const tr = useTerm();
  const { questions: ALL_QUESTIONS } = useCoursContent(cours32Content);

  const [quizQuestions] = useState(() => shuffle(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [quizIdx,      setQuizIdx]      = useState(0);
  const [quizScore,    setQuizScore]    = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizDone,     setQuizDone]     = useState(false);
  const [selectedOpt,  setSelectedOpt]  = useState<number | null>(null);

  const pianoRef = useRef<PianoPlayerRef>(null);

  const sectionLabel = (id: string) => {
    if (id === "extensions") return "Extensions altérées";
    if (id === "coltrane") return "Changements de Coltrane";
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
        <span style={S.badge}>Niveau 4 · Cours 32</span>
        <h1 style={S.h1}>{tr("Extensions jazz avancées et reharmonisation moderne")}</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="John Coltrane"
        period="1926–1967"
        emoji="🎷"
        concept="Cycle de tierces majeures"
        anecdote="Coltrane a composé 'Giant Steps' en 1960 — une grille qui tourne autour de 3 toniques à distance de tierce majeure (Si, Sol, Mib). Le tempo était si rapide que même les meilleurs pianistes ne pouvaient pas l'accompagner lors des répétitions. McCoy Tyner dut apprendre un nouveau langage harmonique pour suivre."
        lesson="Quand la progression est trop rapide pour penser accord par accord, il faut trouver le système géométrique en dessous."
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

      {/* ══ SECTION 1 : EXTENSIONS ALTÉRÉES ══ */}
      {activeSection === "extensions" && (
        <div>
          <h2 style={S.h2}>Extensions altérées — colorer la dominante</h2>
          <p style={S.p}>
            Les extensions altérées ajoutent des notes au-delà de la septième. Sur un accord de dominante (V7), ces extensions créent des couleurs spécifiques — de la tension sombre (b9) au son funky (#9) en passant par le lydien (#11). Chaque extension a sa propre gamme source.
          </p>

          <div style={S.infoBox}>
            <strong>Règle des guide-tones :</strong> La tierce et la septième d'un accord de dominante (Si et Fa dans G7) sont les notes essentielles — elles définissent la qualité de l'accord et guident la résolution. Les extensions s'ajoutent par-dessus sans écraser ces guide-tones.
          </div>

          {/* Extensions */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 12px", color: "#111" }}>
            Les 5 extensions fondamentales sur G7
          </h3>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 10, marginBottom: 24 }}>
            {EXTENSIONS.map(ext => (
              <div key={ext.id} style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, overflow: "hidden" }}>
                <div style={{ padding: "14px 16px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" as const }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                        <div style={{ fontSize: 14, fontWeight: 600, color: "#111" }}>{ext.nom}</div>
                        <div style={{ fontFamily: "monospace", fontSize: 13, fontWeight: 700, color: ACCENT, background: ACCENT_BG, padding: "1px 8px", borderRadius: 4 }}>
                          {ext.symbole}
                        </div>
                      </div>
                      <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6, marginBottom: 4 }}>{ext.description}</div>
                      <div style={{ fontSize: 12, color: "#777", fontStyle: "italic", marginBottom: 4 }}>
                        Couleur : {ext.couleur}
                      </div>
                      <div style={{ fontSize: 12, color: ACCENT }}>
                        Gamme : {ext.gamme}
                      </div>
                      <div style={{ fontFamily: "monospace", fontSize: 12, color: "#888", marginTop: 4 }}>
                        {ext.dotKeys.join(" – ")}
                      </div>
                    </div>
                    <button
                      onClick={() => playChord(pianoRef as React.RefObject<PianoPlayerRef>, ext.dotKeys)}
                      style={{ fontSize: 11, padding: "5px 14px", border: `0.5px solid ${ACCENT}`, borderRadius: 20, cursor: "pointer", background: ACCENT_BG, color: ACCENT, flexShrink: 0 }}
                    >
                      ▶ Écouter
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tableau tensions disponibles */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "0 0 12px", color: "#111" }}>
            Tensions disponibles par degré
          </h3>
          <p style={S.p}>
            Toutes les extensions ne sont pas stylistiquement correctes sur tous les degrés. Le tableau suivant liste les tensions "disponibles" (qui sonnent bien) et celles à éviter.
          </p>
          <div style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, overflow: "hidden", marginBottom: 20 }}>
            <div style={{ display: "grid", gridTemplateColumns: "100px 100px 1fr 1fr 80px", background: "#fafafa", padding: "8px 14px", borderBottom: "0.5px solid #e5e5e5", fontSize: 11, fontWeight: 600, color: "#666", gap: 8 }}>
              <div>Degré</div>
              <div>Exemple</div>
              <div>Disponibles</div>
              <div>À éviter</div>
              <div>Couleur</div>
            </div>
            {TENSIONS.map((t, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "100px 100px 1fr 1fr 80px", padding: "8px 14px", borderBottom: i < TENSIONS.length - 1 ? "0.5px solid #f0f0f0" : "none", fontSize: 12, gap: 8, alignItems: "center" }}>
                <div style={{ fontFamily: "monospace", fontWeight: 700, color: ACCENT }}>{t.degre}</div>
                <div style={{ color: "#888" }}>{t.exemple}</div>
                <div style={{ color: "#2D6B3A", fontWeight: 500 }}>{t.disponibles}</div>
                <div style={{ color: "#A32D2D" }}>{t.eviter}</div>
                <div style={{ fontSize: 11, color: "#999" }}>{t.couleur}</div>
              </div>
            ))}
          </div>

          <div style={S.warnBox}>
            <strong>Erreur fréquente :</strong> Empiler b9 et #9 simultanément — les deux créent des couleurs contradictoires (sombre vs funky). Choisir UNE couleur d'extension par accord selon l'effet recherché. Sur G7 : b9 (Ravel, flamenco) OU #9 (Hendrix, funk) — pas les deux.
          </div>
        </div>
      )}

      {/* ══ SECTION 2 : CHANGEMENTS DE COLTRANE ══ */}
      {activeSection === "coltrane" && (
        <div>
          <h2 style={S.h2}>Changements de Coltrane et Giant Steps</h2>
          <p style={S.p}>
            John Coltrane a développé une technique de reharmonisation basée sur le cycle de tierces majeures. Plutôt que de rester dans une tonalité, il remplace un accord par trois centres tonaux à distance de tierce majeure — formant un triangle parfait sur le cercle des quintes.
          </p>

          <div style={S.infoBox}>
            <strong>Le triangle de Coltrane :</strong> Si (B), Sol (G) et Mib (Eb) sont séparés d'exactement une tierce majeure chacun. Ces trois toniques divisent l'octave en trois parties égales. Passer par les trois en 16 mesures à tempo rapide crée l'effet "Giant Steps" — trop vite pour l'oreille, mais géométriquement parfait.
          </div>

          {/* Giant Steps cells */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 12px", color: "#111" }}>
            Anatomie de Giant Steps (début)
          </h3>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" as const, marginBottom: 20 }}>
            {GIANT_STEPS_CELLS.map((cell, idx) => (
              <div key={idx} style={{ flex: 1, minWidth: 160, border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "12px 14px", background: "#fff" }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: ACCENT, fontFamily: "monospace", marginBottom: 4 }}>
                  {cell.accord}
                </div>
                <div style={{ fontSize: 12, color: "#888", marginBottom: 3 }}>{cell.tonalite}</div>
                <div style={{ fontSize: 11, color: "#aaa", marginBottom: 6 }}>mm. {cell.mesures} · {cell.fonction}</div>
                <div style={{ fontFamily: "monospace", fontSize: 11, color: "#999", marginBottom: 8 }}>
                  {cell.dotKeys.join(" – ")}
                </div>
                <button
                  onClick={() => playChord(pianoRef as React.RefObject<PianoPlayerRef>, cell.dotKeys)}
                  style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${ACCENT}`, borderRadius: 16, cursor: "pointer", background: ACCENT_BG, color: ACCENT }}
                >
                  ▶ Écouter
                </button>
              </div>
            ))}
          </div>

          <div style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "14px 16px", background: "#fff", marginBottom: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: "#111", marginBottom: 8 }}>
              Séquence Giant Steps complète : Si – Sol – Mib (3 toniques à tierces maj)
            </div>
            <button
              onClick={() => playScale(
                pianoRef as React.RefObject<PianoPlayerRef>,
                ["Si:2","Ré#:3","Fa#:3","La#:3","Sol:3","Si:3","Ré:4","Fa#:4","Mib:3","Sol:3","Sib:3","Ré:4"],
                300
              )}
              style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${ACCENT}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: ACCENT }}
            >
              ▶ Écouter le cycle BMaj7 → GMaj7 → EbMaj7
            </button>
          </div>

          {/* Substitutions */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "0 0 12px", color: "#111" }}>
            Techniques de reharmonisation
          </h3>
          <p style={S.p}>
            La reharmonisation remplace les accords originaux par d'autres qui maintiennent la même fonction ou la même couleur, mais avec une couleur harmonique différente.
          </p>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 10, marginBottom: 24 }}>
            {SUBSTITUTIONS.map((sub, idx) => (
              <div key={idx} style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "14px 16px", background: "#fff" }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#111", marginBottom: 4 }}>{sub.type}</div>
                <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6, marginBottom: 8 }}>{sub.description}</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const, marginBottom: 8 }}>
                  <div style={{ fontSize: 12, color: "#888" }}>
                    <strong>Original :</strong> {sub.original}
                  </div>
                </div>
                <div style={{ fontSize: 12, color: ACCENT, fontStyle: "italic", marginBottom: 10 }}>
                  Principe : {sub.principe}
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const }}>
                  <button
                    onClick={() => playChord(pianoRef as React.RefObject<PianoPlayerRef>, sub.dotKeysOrig)}
                    style={{ fontSize: 11, padding: "4px 12px", border: "0.5px solid #888", borderRadius: 16, cursor: "pointer", background: "transparent", color: "#555" }}
                  >
                    ▶ Original
                  </button>
                  <button
                    onClick={() => playChord(pianoRef as React.RefObject<PianoPlayerRef>, sub.dotKeysSub)}
                    style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${ACCENT}`, borderRadius: 16, cursor: "pointer", background: ACCENT_BG, color: ACCENT }}
                  >
                    ▶ Substitution
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={S.warnBox}>
            <strong>Substitution tritonique — la règle :</strong> Elle ne fonctionne que sur V7, pas sur tous les accords. G7 → Db7 fonctionne car ils partagent les mêmes guide-tones (Si/Do# · Fa/Mib). Tenter une substitution tritonique sur IMaj7 ou IIm7 produit une dissonance non-stylistique — la note caractéristique change de rôle.
          </div>
        </div>
      )}

      {/* ══ SECTION 3 : CONSERVATOIRE ══ */}
      {activeSection === "conservatoire" && <VueConservatoire data={CONSERVATOIRE_DATA_32} />}

      {/* ══ SECTION 4 : QUIZ ══ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.h2}>Quiz — Extensions jazz avancées et reharmonisation</h2>
          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 8 ? "🎷" : quizScore >= 6 ? "👍" : "💪"}
              </div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>
                Score : {quizScore} / {QUIZ_COUNT}
              </div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
                {quizScore >= 8 ? "Excellent ! Vous maîtrisez les extensions et les changements de Coltrane." :
                 quizScore >= 6 ? "Bien ! Revoyez les tensions disponibles et la substitution tritonique." :
                 "Continuez — relisez les sections Extensions altérées et Changements de Coltrane."}
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
                    if (isCorrect)       { bg = ACCENT_BG; border = ACCENT; color = "#1E2E0A"; }
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
                <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 8, background: selectedOpt === quizQuestions[quizIdx].a ? ACCENT_BG : "#FCEBEB", fontSize: 13, color: selectedOpt === quizQuestions[quizIdx].a ? "#1E2E0A" : "#501313", lineHeight: 1.6 }}>
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

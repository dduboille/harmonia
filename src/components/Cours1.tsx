"use client";

/**
 * Cours1.tsx
 * Harmonia · Niveau 1 · Cours 1 — La gamme, les degrés et les intervalles
 * i18n : UI chrome traduit via next-intl (useCoursI18n)
 * Contenu pédagogique : FR pour MVP
 *
 * Convention Harmonia : noms de notes en anglais (C D E F G A B)
 */

import React, { useRef, useState, useCallback } from "react";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { cours1Content, type Degree, type IntervalDef } from "@/data/cours1Content";
import MaitreCard from "@/components/MaitreCard";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Section {
  id: string;
  label: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SECTIONS_IDS = ["origines","degres","tons","intervalles","quiz"] as const;

// Noms de notes : notation anglaise (standard Harmonia)
// dotKeys et playNote utilisent les noms anglais transmis au PianoPlayer
const GAMMES = [
  {
    name: "C majeur", root: "C", displayRoot: "C", startOctave: 3,
    notes: ["C", "D", "E", "F", "G", "A", "B"],
    steps: ["T", "T", "½", "T", "T", "T", "½"],
    accidentals: [], blackLabels: {} as Record<string, string>, accidentalDisplay: [] as string[],
    dotKeys: ["C:3","D:3","E:3","F:3","G:3","A:3","B:3","C:4"],
  },
  {
    name: "G majeur", root: "G", displayRoot: "G", startOctave: 3,
    notes: ["G", "A", "B", "C", "D", "E", "F#"],
    steps: ["T", "T", "½", "T", "T", "T", "½"],
    accidentals: ["F#"], blackLabels: { "F#": "F#" }, accidentalDisplay: ["F#"],
    dotKeys: ["G:3","A:3","B:3","C:4","D:4","E:4","F#:4","G:4"],
  },
  {
    name: "F majeur", root: "F", displayRoot: "F", startOctave: 3,
    notes: ["F", "G", "A", "A#", "C", "D", "E"],
    steps: ["T", "T", "½", "T", "T", "T", "½"],
    accidentals: ["A#"], blackLabels: { "A#": "Bb" }, accidentalDisplay: ["Bb"],
    dotKeys: ["F:3","G:3","A:3","A#:3","C:4","D:4","E:4","F:4"],
  },
  {
    name: "D majeur", root: "D", displayRoot: "D", startOctave: 3,
    notes: ["D", "E", "F#", "G", "A", "B", "C#"],
    steps: ["T", "T", "½", "T", "T", "T", "½"],
    accidentals: ["F#", "C#"], blackLabels: { "F#": "F#", "C#": "C#" }, accidentalDisplay: ["F#", "C#"],
    dotKeys: ["D:3","E:3","F#:3","G:3","A:3","B:3","C#:4","D:4"],
  },
];




function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const QUIZ_COUNT = 10;

// ─── Styles ───────────────────────────────────────────────────────────────────

const S = {
  wrap:     { fontFamily: "var(--font-sans, system-ui)", maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" } as React.CSSProperties,
  header:   { padding: "1.5rem 0 1rem", borderBottom: "0.5px solid #e5e5e5", marginBottom: "1.25rem" } as React.CSSProperties,
  badge:    { display: "inline-block", background: "#E6F1FB", color: "#185FA5", fontSize: 11, fontWeight: 500, padding: "2px 10px", borderRadius: 20, marginBottom: 6 } as React.CSSProperties,
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
  stitle:   { fontSize: 17, fontWeight: 500, color: "#111", marginBottom: 8 } as React.CSSProperties,
  sbody:    { fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: "1rem" } as React.CSSProperties,
  infoBox:  { borderLeft: "2px solid #185FA5", padding: "8px 14px", background: "#E6F1FB", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#0C447C", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
};

// ─── Composant ────────────────────────────────────────────────────────────────

export default function Cours1() {
  const i18n = useCoursI18n("cours1");
  const { degrees: DEGREES, intervals: INTERVALS, questions: ALL_QUESTIONS } = useCoursContent(cours1Content);
  const [activeSection,  setActiveSection]  = useState("origines");
  const [activeGamme,    setActiveGamme]    = useState(0);
  const [activeDeg,      setActiveDeg]      = useState<number | null>(null);
  const [activeInterval, setActiveInterval] = useState<number | null>(null);
  const [quizQuestions,  setQuizQuestions]  = useState(() => shuffleArray(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [quizIdx,        setQuizIdx]        = useState(0);
  const [quizScore,      setQuizScore]      = useState(0);
  const [quizAnswered,   setQuizAnswered]   = useState(false);
  const [quizDone,       setQuizDone]       = useState(false);
  const [selectedOpt,    setSelectedOpt]    = useState<number | null>(null);

  const pianoRef = useRef<PianoPlayerRef>(null);

  const playInterval = useCallback((iv: IntervalDef) => {
    const [n1, o1, n2, o2] = iv.exampleNotes;
    pianoRef.current?.playNote(n1, o1, { duration: 1.2 });
    setTimeout(() => pianoRef.current?.playNote(n2, o2, { duration: 1.5 }), 600);
  }, []);

  const playInverse = useCallback((iv: IntervalDef) => {
    const [n1, o1, n2, o2] = iv.exampleNotes;
    pianoRef.current?.playNote(n2, o2, { duration: 1.2 });
    setTimeout(() => pianoRef.current?.playNote(n1, o1 + 1, { duration: 1.5 }), 600);
  }, []);

  const playGamme = useCallback(() => {
    const g = GAMMES[activeGamme];
    g.notes.forEach((note, i) => {
      setTimeout(() => pianoRef.current?.playNote(note, 3, { duration: 0.7 }), i * 280);
    });
  }, [activeGamme]);

  const answerQuiz = (optIdx: number) => {
    if (quizAnswered) return;
    setSelectedOpt(optIdx);
    setQuizAnswered(true);
    if (optIdx === quizQuestions[quizIdx].a) setQuizScore((s) => s + 1);
  };

  const nextQuiz = () => {
    if (quizIdx + 1 >= QUIZ_COUNT) { setQuizDone(true); }
    else { setQuizIdx((i) => i + 1); setQuizAnswered(false); setSelectedOpt(null); }
  };

  const resetQuiz = () => {
    setQuizQuestions(shuffleArray(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
    setQuizIdx(0); setQuizScore(0);
    setQuizAnswered(false); setSelectedOpt(null); setQuizDone(false);
  };

  const g = GAMMES[activeGamme];

  return (
    <div style={S.wrap}>
      {/* Piano caché — audio uniquement */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={2} startOctave={3} showLabels={false} />
      </div>

      {/* Header */}
      <div style={S.header}>
        <span style={S.badge}>{i18n.badge}</span>
        <h1 style={S.h1}>{i18n.title}</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
         composer="Pythagore"
         period="580–495 av. J.-C."
         emoji="⚒️"
          concept="Gammes & Intervalles"
         anecdote="En passant devant une forge, Pythagore remarque que certains marteaux produisent des sons harmonieux ensemble. En mesurant leur poids, il découvre que l'harmonie est une proportion mathématique : un marteau deux fois plus lourd produit une octave, un et demi produit une quinte. La musique n'est pas une affaire de goût — c'est une affaire de physique."
         lesson="L'intervalle est la cellule de base de la musique. Une question de physique acoustique avant d'être une question d'esthétique."
        accentColor="#185FA5"
      />

      {/* Navigation */}
      <nav style={S.nav}>
        {SECTIONS_IDS.map((id) => (
          <button key={id} style={S.pill(activeSection === id)} onClick={() => setActiveSection(id)}>
            {i18n.sectionLabel(id)}
          </button>
        ))}
      </nav>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 1 : ORIGINES
      ══════════════════════════════════════════════════════════════ */}
      {activeSection === "origines" && (
        <div>
          <h2 style={S.stitle}>D'où viennent ces 7 notes ?</h2>
          <p style={S.sbody}>
            Les premières théories musicales occidentales, notamment celles des Grecs avec Pythagore, cherchaient à
            fonder la gamme sur des rapports de fréquences simples — des sons qui <em>s'accordent</em> naturellement à l'oreille.
          </p>
          <p style={S.sbody}>
            Le point de départ est l'<strong>octave</strong> : une note et son double en fréquence sonnent identiques
            à des hauteurs différentes. La seconde consonance fondamentale est la <strong>quinte juste</strong> (rapport 3/2).
            En enchaînant six quintes à partir de Fa :
          </p>

          <div style={{ background: "#f8f8f8", borderRadius: 10, padding: "14px 18px", margin: "12px 0", fontFamily: "monospace", fontSize: 15, letterSpacing: 2, color: "#333", textAlign: "center" }}>
            F → C → G → D → A → E → B
          </div>

          <p style={S.sbody}>
            En ramenant chaque note dans la même octave, on obtient exactement <strong>7 hauteurs distinctes</strong>.
            Réordonnées par hauteur croissante, elles forment la gamme diatonique naturelle.
          </p>

          <div style={S.infoBox}>
            En C majeur : <strong>C – D – E – F – G – A – B</strong>.<br />
            La gamme la plus simple : aucune altération, toutes les touches blanches du piano.
          </div>

          <h3 style={{ fontSize: 15, fontWeight: 500, color: "#111", margin: "1.5rem 0 .5rem" }}>
            L'origine des noms de notes
          </h3>
          <p style={S.sbody}>
            Au <strong>XIe siècle</strong>, le moine bénédictin <strong>Guido d'Arezzo</strong> cherche un
            moyen d'enseigner le chant plus efficacement. Il remarque que les premières syllabes de chaque
            vers d'un hymne à Saint Jean-Baptiste correspondent aux notes successives de la gamme :
          </p>

          <div style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, overflow: "hidden", margin: "12px 0" }}>
            {[
              { syl: "Ut", verse: "Ut queant laxis",   note: "Do / C (Ier degré)"  },
              { syl: "Ré", verse: "Resonare fibris",   note: "Ré / D (IIe degré)"  },
              { syl: "Mi", verse: "Mira gestorum",     note: "Mi / E (IIIe degré)" },
              { syl: "Fa", verse: "Famuli tuorum",     note: "Fa / F (IVe degré)"  },
              { syl: "Sol", verse: "Solve polluti",    note: "Sol / G (Ve degré)"  },
              { syl: "La", verse: "Labii reatum",      note: "La / A (VIe degré)"  },
            ].map((row, i) => (
              <div key={row.syl} style={{ display: "flex", alignItems: "center", gap: 16, padding: "8px 14px", background: i % 2 === 0 ? "#fff" : "#fafafa", borderBottom: i < 5 ? "0.5px solid #f0f0f0" : "none" }}>
                <span style={{ fontWeight: 700, fontSize: 15, color: "#185FA5", minWidth: 32 }}>{row.syl}</span>
                <span style={{ fontSize: 13, color: "#555", flex: 1, fontStyle: "italic" }}>{row.verse}…</span>
                <span style={{ fontSize: 12, color: "#888" }}>{row.note}</span>
              </div>
            ))}
          </div>

          <p style={S.sbody}>
            Le <strong>Si / B</strong> fut ajouté plus tard (initiales de <em>Sancte Ioannes</em>).
            Au <strong>XVIe siècle</strong>, <em>Ut</em> devint <strong>Do</strong> — syllabe plus ouverte
            et plus chantable.
          </p>

          <div style={S.warnBox}>
            <strong>Deux systèmes coexistent :</strong> le système latin (Do Ré Mi Fa Sol La Si) utilisé en France,
            Italie et Espagne, et le système anglais (C D E F G A B) utilisé dans le monde entier en jazz,
            pop et harmonie moderne. <strong>Harmonia utilise la notation anglaise</strong> comme standard universel.
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 : LES DEGRÉS
      ══════════════════════════════════════════════════════════════ */}
      {activeSection === "degres" && (
        <div>
          <h2 style={S.stitle}>Les 7 degrés : chaque note a un rôle</h2>
          <p style={S.sbody}>
            Dans une gamme, chaque note occupe une <strong>position</strong> appelée degré.
            C'est une notion <em>relative</em> : F est le IVe degré en C majeur, mais le Ier degré en F majeur.
            Les noms des degrés traduisent chacun une réalité acoustique précise dans le système tonal.
          </p>
          <p style={{ fontSize: 13, color: "#888", marginBottom: 12 }}>
            Cliquez sur un degré pour découvrir l'origine de son nom et ses attractions.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 6, marginBottom: 12 }}>
            {DEGREES.map((d, i) => (
              <div
                key={d.num}
                onClick={() => setActiveDeg(activeDeg === i ? null : i)}
                style={{
                  border: `0.5px solid ${activeDeg === i ? d.color : "#e5e5e5"}`,
                  borderRadius: 8, padding: "8px 4px", textAlign: "center",
                  cursor: "pointer", background: activeDeg === i ? d.bg : "#fff", transition: "all .15s",
                }}
              >
                <div style={{ fontSize: 11, color: "#999", fontWeight: 500 }}>{d.num}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#111", margin: "2px 0" }}>{d.note}</div>
                <div style={{ fontSize: 9, color: d.color, marginTop: 2, lineHeight: 1.3 }}>{d.name}</div>
              </div>
            ))}
          </div>

          {activeDeg !== null && (
            <div style={{ border: `0.5px solid ${DEGREES[activeDeg].color}`, borderRadius: 10, padding: "14px 18px", background: DEGREES[activeDeg].bg, marginBottom: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <span style={{ fontSize: 22, fontWeight: 700, color: DEGREES[activeDeg].color }}>{DEGREES[activeDeg].num}</span>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 500, color: "#111" }}>{DEGREES[activeDeg].name}</div>
                  <div style={{ fontSize: 13, color: "#666" }}>Note en C majeur : <strong>{DEGREES[activeDeg].note}</strong></div>
                </div>
              </div>
              <div style={{ fontSize: 13, color: "#444", lineHeight: 1.65, marginBottom: 8 }}>
                <strong>Étymologie :</strong>{" "}
                <span dangerouslySetInnerHTML={{ __html: DEGREES[activeDeg].origin }} />
              </div>
              <div style={{ fontSize: 13, color: "#444", lineHeight: 1.65, padding: "8px 12px", background: "rgba(255,255,255,0.6)", borderRadius: 6 }}>
                <strong>Attraction :</strong> {DEGREES[activeDeg].attraction}
              </div>
              <button
                onClick={() => pianoRef.current?.playNote(DEGREES[activeDeg].note, 4, { duration: 2 })}
                style={{ marginTop: 10, fontSize: 12, padding: "5px 14px", border: `0.5px solid ${DEGREES[activeDeg].color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: DEGREES[activeDeg].color }}
              >
                ▶ Écouter {DEGREES[activeDeg].note}
              </button>
            </div>
          )}

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {["N°", "Nom", "Note (C maj.)", "Rôle"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 10px", fontWeight: 500, color: "#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DEGREES.map((d, i) => (
                  <tr key={d.num} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "7px 10px", fontWeight: 700, color: d.color }}>{d.num}</td>
                    <td style={{ padding: "7px 10px", fontWeight: 500 }}>{d.name}</td>
                    <td style={{ padding: "7px 10px" }}>{d.note}</td>
                    <td style={{ padding: "7px 10px", color: "#666", fontSize: 12 }}>
                      {d.num === "I"   && "Centre de gravité"}
                      {d.num === "II"  && "Au-dessus de la tonique"}
                      {d.num === "III" && "À mi-chemin (I↔V)"}
                      {d.num === "IV"  && "Sous la dominante"}
                      {d.num === "V"   && "Domine la gamme"}
                      {d.num === "VI"  && "Au-dessus de la dominante"}
                      {d.num === "VII" && "Sensible à la tonique"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.infoBox}>
            <strong>Attractions fondamentales :</strong> La paire la plus forte est <strong>B → C</strong>
            (VIIe vers Ier) — un seul demi-ton les sépare. La seconde paire est <strong>F → E</strong>
            (IVe vers IIIe), particulièrement active lors de la résolution de la dominante.
            Ces deux attractions sont le moteur de toute l'harmonie tonale.
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3 : TONS & DEMI-TONS
      ══════════════════════════════════════════════════════════════ */}
      {activeSection === "tons" && (
        <div>
          <h2 style={S.stitle}>La structure interne : tons et demi-tons</h2>
          <p style={S.sbody}>
            Les 7 notes ne sont pas également espacées. Entre certaines il y a un <strong>ton</strong> (2 demi-tons),
            entre d'autres seulement un <strong>demi-ton</strong>. Ce schéma précis est ce qui donne à la gamme majeure
            sa couleur caractéristique — il est identique quelle que soit la note de départ.
          </p>

          <div style={S.infoBox}>
            Formule universelle de la gamme majeure : <strong>T – T – ½ – T – T – T – ½</strong>.<br />
            Les deux demi-tons se situent toujours entre les degrés <strong>III–IV</strong> et <strong>VII–I</strong>.
          </div>

          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", margin: "16px 0 12px" }}>
            {GAMMES.map((gm, i) => (
              <button
                key={gm.name}
                onClick={() => setActiveGamme(i)}
                style={{
                  fontSize: 12, padding: "5px 12px",
                  border: `0.5px solid ${i === activeGamme ? "#0F6E56" : "#ddd"}`,
                  borderRadius: 6, cursor: "pointer",
                  background: i === activeGamme ? "#E1F5EE" : "transparent",
                  color: i === activeGamme ? "#0F6E56" : "#666",
                }}
              >
                {gm.name}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", overflowX: "auto", gap: 0, margin: "12px 0", paddingBottom: 4 }}>
            {[...g.notes, g.root].map((note, i) => {
              const isAccidental = (g.accidentals as string[]).includes(note);
              const displayNote = i === g.notes.length ? `${g.root} (VIII)` : note;
              return (
                <React.Fragment key={i}>
                  <div style={{ textAlign: "center", minWidth: i === g.notes.length ? 60 : 52 }}>
                    <div style={{
                      fontSize: 12, fontWeight: 500, padding: "6px 4px",
                      border: `0.5px solid ${i === g.notes.length ? "#0F6E56" : isAccidental ? "#BA7517" : "#e5e5e5"}`,
                      borderRadius: 6,
                      background: i === g.notes.length ? "#E1F5EE" : isAccidental ? "#FAEEDA" : "#f8f8f8",
                      color: i === g.notes.length ? "#0F6E56" : isAccidental ? "#BA7517" : "#111",
                    }}>
                      {displayNote}
                    </div>
                    <div style={{ fontSize: 9, color: "#aaa", marginTop: 3 }}>{i + 1}</div>
                  </div>
                  {i < g.notes.length && (
                    <div style={{ textAlign: "center", minWidth: 28, display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div style={{ height: 3, width: 20, borderRadius: 2, background: g.steps[i] === "T" ? "#9FE1CB" : "#F0997B", marginBottom: 3 }} />
                      <div style={{ fontSize: 10, color: g.steps[i] === "T" ? "#0F6E56" : "#993C1D", fontWeight: 500 }}>
                        {g.steps[i]}
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {g.accidentals.length > 0 && (
            <div style={S.warnBox}>
              {g.name} contient {g.accidentals.length === 1 ? "une altération" : "deux altérations"} :{" "}
              <strong>{g.accidentalDisplay.join(", ")}</strong>. Sans elle, la formule T-T-½-T-T-T-½ ne serait pas respectée.
            </div>
          )}

          <div style={{ margin: "16px 0 8px" }}>
            <PianoPlayer
              dotKeys={g.dotKeys}
              blackKeyLabels={g.blackLabels as any}
              octaves={2}
              startOctave={3}
              showLabels
              showOctaveMarkers
              onNoteClick={(note, octave) => {
                pianoRef.current?.playNote(note, octave, { duration: 1.5 });
              }}
            />
          </div>

          <button
            onClick={playGamme}
            style={{ fontSize: 13, padding: "7px 18px", border: "0.5px solid #0F6E56", borderRadius: 20, cursor: "pointer", background: "#E1F5EE", color: "#0F6E56" }}
          >
            ▶ Jouer la gamme de {g.name}
          </button>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4 : INTERVALLES
      ══════════════════════════════════════════════════════════════ */}
      {activeSection === "intervalles" && (
        <div>
          <h2 style={S.stitle}>Les intervalles et leurs renversements</h2>
          <p style={S.sbody}>
            Un intervalle est la distance entre deux notes. Il se définit par son <strong>nom</strong>
            (combien de degrés séparent les deux notes, extrêmes compris) et sa <strong>nature</strong>
            (le nombre exact de demi-tons, qui détermine la couleur sonore).
          </p>

          <div style={S.infoBox}>
            <strong>Loi des renversements :</strong> inverser un intervalle (faire monter la note grave d'une octave)
            donne toujours un intervalle dont le nom s'additionne à <strong>9</strong> avec l'original
            (ex : tierce 3 + sixte 6 = 9). La nature s'inverse : majeure ↔ mineure, juste ↔ juste.
          </div>

          <p style={{ fontSize: 13, color: "#888", marginBottom: 12 }}>
            Cliquez sur un intervalle pour l'entendre, puis son renversement.
          </p>

          {INTERVALS.map((iv, i) => (
            <div
              key={iv.name}
              style={{
                border: `0.5px solid ${activeInterval === i ? "#185FA5" : "#e5e5e5"}`,
                borderRadius: 10, marginBottom: 8, overflow: "hidden",
                cursor: "pointer", background: activeInterval === i ? "#f0f6ff" : "#fff",
              }}
              onClick={() => setActiveInterval(activeInterval === i ? null : i)}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 8, padding: "10px 14px", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#111" }}>{iv.name}</div>
                  <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>{iv.semis} demi-ton{iv.semis > 1 ? "s" : ""} · {iv.nature}</div>
                  <div style={{ fontSize: 11, color: "#185FA5", marginTop: 2 }}>{iv.example}</div>
                </div>
                <div style={{ fontSize: 16, color: "#ccc", userSelect: "none" }}>⇄</div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#111" }}>{iv.inverse}</div>
                  <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>{iv.inverseSemis} demi-tons · {iv.inverseNature}</div>
                  <div style={{ fontSize: 11, color: "#185FA5", marginTop: 2 }}>{iv.exampleNotes[2]} → {iv.exampleNotes[0]}</div>
                </div>
              </div>

              {activeInterval === i && (
                <div style={{ display: "flex", gap: 8, padding: "8px 14px 12px", borderTop: "0.5px solid #e5e5e5" }}>
                  <button
                    onClick={(e) => { e.stopPropagation(); playInterval(iv); }}
                    style={{ fontSize: 12, padding: "5px 14px", border: "0.5px solid #185FA5", borderRadius: 20, cursor: "pointer", background: "#E6F1FB", color: "#185FA5" }}
                  >
                    ▶ {iv.name}
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); playInverse(iv); }}
                    style={{ fontSize: 12, padding: "5px 14px", border: "0.5px solid #993C1D", borderRadius: 20, cursor: "pointer", background: "#FAECE7", color: "#993C1D" }}
                  >
                    ▶ {iv.inverse} (renversement)
                  </button>
                  {iv.name === "Triton" && (
                    <span style={{ fontSize: 11, color: "#888", display: "flex", alignItems: "center", marginLeft: 4 }}>
                      Le triton est son propre renversement !
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 8px", color: "#111" }}>
            Tableau complet des intervalles
          </h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {["Intervalle", "Nature", "Demi-tons", "Exemple (sur F)"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 10px", fontWeight: 500, color: "#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Seconde",   "mineure / majeure",   "1 / 2",     "F–G♭ / F–G"],
                  ["Tierce",    "mineure / majeure",   "3 / 4",     "F–A♭ / F–A"],
                  ["Quarte",    "juste / augmentée",   "5 / 6",     "F–B♭ / F–B"],
                  ["Quinte",    "dim. / juste / aug.", "6 / 7 / 8", "F–C♭ / F–C / F–C#"],
                  ["Sixte",     "mineure / majeure",   "8 / 9",     "F–D♭ / F–D"],
                  ["Septième",  "mineure / majeure",   "10 / 11",   "F–E♭ / F–E"],
                  ["Octave",    "juste",               "12",        "F–F"],
                ].map(([name, nature, semis, ex], i) => (
                  <tr key={name} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "7px 10px", fontWeight: 500 }}>{name}</td>
                    <td style={{ padding: "7px 10px", color: "#666" }}>{nature}</td>
                    <td style={{ padding: "7px 10px", color: "#185FA5" }}>{semis}</td>
                    <td style={{ padding: "7px 10px", color: "#555" }}>{ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════
          SECTION 5 : QUIZ
      ══════════════════════════════════════════════════════════════ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.stitle}>{i18n.training}</h2>

          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 9 ? "🎹" : quizScore >= 7 ? "👍" : "💪"}
              </div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>
                {i18n.t("score")} : {quizScore} / {QUIZ_COUNT}
              </div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
                {i18n.quizMessage(quizScore, QUIZ_COUNT)}
              </div>
              <button
                onClick={resetQuiz}
                style={{ fontSize: 13, padding: "8px 20px", border: "0.5px solid #185FA5", borderRadius: 20, cursor: "pointer", background: "#E6F1FB", color: "#185FA5" }}
              >
                {i18n.newQ}
              </button>
            </div>
          ) : (
            <div>
              <div style={{ fontSize: 12, color: "#999", marginBottom: 10 }}>
                {i18n.t("question")} {quizIdx + 1} {i18n.t("of")} {QUIZ_COUNT}
                <span style={{ marginLeft: 12, color: "#bbb" }}>{ALL_QUESTIONS.length} {i18n.t("questionsPool")}</span>
              </div>
              <div style={{ fontSize: 15, color: "#111", lineHeight: 1.6, marginBottom: 16, fontWeight: 500 }}>
                {quizQuestions[quizIdx].q}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {quizQuestions[quizIdx].opts.map((opt, i) => {
                  const isCorrect  = i === quizQuestions[quizIdx].a;
                  const isSelected = selectedOpt === i;
                  let bg = "#fff", border = "#e5e5e5", color = "#333";
                  if (quizAnswered) {
                    if (isCorrect)        { bg = "#E1F5EE"; border = "#0F6E56"; color = "#085041"; }
                    else if (isSelected)  { bg = "#FCEBEB"; border = "#A32D2D"; color = "#501313"; }
                  }
                  return (
                    <button
                      key={i}
                      onClick={() => answerQuiz(i)}
                      disabled={quizAnswered}
                      style={{ fontSize: 13, padding: "10px 14px", border: `0.5px solid ${border}`, borderRadius: 8, cursor: quizAnswered ? "default" : "pointer", background: bg, color, textAlign: "left", transition: "all .12s" }}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {quizAnswered && (
                <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 8, background: selectedOpt === quizQuestions[quizIdx].a ? "#E1F5EE" : "#FCEBEB", fontSize: 13, color: selectedOpt === quizQuestions[quizIdx].a ? "#085041" : "#501313", lineHeight: 1.6 }}>
                  {quizQuestions[quizIdx].fb}
                </div>
              )}

              {quizAnswered && (
                <button
                  onClick={nextQuiz}
                  style={{ marginTop: 12, fontSize: 13, padding: "7px 18px", border: "0.5px solid #333", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#333" }}
                >
                  {quizIdx + 1 < QUIZ_COUNT ? i18n.nextQ : i18n.seeScore}
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

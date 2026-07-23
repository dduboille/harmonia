"use client";

import React, { useRef, useState, useCallback } from "react";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { cours1Content, type Degree, type IntervalDef } from "@/data/cours1Content";
import MaitreCard from "@/components/MaitreCard";
import { VueConservatoire } from "@/components/VueConservatoire";

interface Section {
  id: string;
  label: string;
}

const SECTIONS_IDS = ["origines","degres","tons","intervalles","conservatoire","quiz"] as const;

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

export default function Cours1() {
  const i18n = useCoursI18n("cours1");
  const tc = i18n.tc;
  const n = (key: string) => tc(`narrative.${key}` as any);
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
    g.dotKeys.forEach((key, i) => {
      const [note, octaveStr] = key.split(":");
      setTimeout(() => pianoRef.current?.playNote(note, Number(octaveStr), { duration: 0.7 }), i * 280);
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

  // Interval reference table (name + quality translated, semitones + example universal)
  const INT_TABLE = [
    { name: n("intSeconde"),   nature: n("intNatureMinMaj"),      semis: "1 / 2",      ex: "F–G♭ / F–G"         },
    { name: n("intTierce"),    nature: n("intNatureMinMaj"),      semis: "3 / 4",      ex: "F–A♭ / F–A"         },
    { name: n("intQuarte"),    nature: n("intNaturePerfAug"),     semis: "5 / 6",      ex: "F–B♭ / F–B"         },
    { name: n("intQuinte"),    nature: n("intNatureDimPerfAug"),  semis: "6 / 7 / 8",  ex: "F–C♭ / F–C / F–C#"  },
    { name: n("intSixte"),     nature: n("intNatureMinMaj"),      semis: "8 / 9",      ex: "F–D♭ / F–D"         },
    { name: n("intSeptieme"),  nature: n("intNatureMinMaj"),      semis: "10 / 11",    ex: "F–E♭ / F–E"         },
    { name: n("intOctave"),    nature: n("intNaturePerf"),        semis: "12",          ex: "F–F"                },
  ];

  const NOTE_NAMES = [
    n("originesNoteName0"), n("originesNoteName1"), n("originesNoteName2"),
    n("originesNoteName3"), n("originesNoteName4"), n("originesNoteName5"),
  ];

  const NOTE_TABLE_ROWS = [
    { syl: "Ut",  verse: "Ut queant laxis",  note: NOTE_NAMES[0] },
    { syl: "Ré",  verse: "Resonare fibris",  note: NOTE_NAMES[1] },
    { syl: "Mi",  verse: "Mira gestorum",    note: NOTE_NAMES[2] },
    { syl: "Fa",  verse: "Famuli tuorum",    note: NOTE_NAMES[3] },
    { syl: "Sol", verse: "Solve polluti",    note: NOTE_NAMES[4] },
    { syl: "La",  verse: "Labii reatum",     note: NOTE_NAMES[5] },
  ];

  const DEGREE_ROLES: Record<string, string> = {
    I:    n("degresRoleI"),
    II:   n("degresRoleII"),
    III:  n("degresRoleIII"),
    IV:   n("degresRoleIV"),
    V:    n("degresRoleV"),
    VI:   n("degresRoleVI"),
    VII:  n("degresRoleVII"),
  };

  return (
    <div style={S.wrap}>
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
        period={n("maitreCardPeriod")}
        emoji="⚒️"
        concept={n("maitreCardConcept")}
        anecdote={n("maitreCardAnecdote")}
        lesson={n("maitreCardLesson")}
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

      {/* ══ SECTION 1 : ORIGINES ══ */}
      {activeSection === "origines" && (
        <div>
          <h2 style={S.stitle}>{n("originesH2")}</h2>
          <p style={S.sbody} dangerouslySetInnerHTML={{ __html: n("originesP1") }} />
          <p style={S.sbody} dangerouslySetInnerHTML={{ __html: n("originesP2") }} />

          <div style={{ background: "#f8f8f8", borderRadius: 10, padding: "14px 18px", margin: "12px 0", fontFamily: "monospace", fontSize: 15, letterSpacing: 2, color: "#333", textAlign: "center" }}>
            F → C → G → D → A → E → B
          </div>

          <p style={S.sbody} dangerouslySetInnerHTML={{ __html: n("originesP3") }} />

          <div style={S.infoBox} dangerouslySetInnerHTML={{ __html: n("originesInfoBox") }} />

          <h3 style={{ fontSize: 15, fontWeight: 500, color: "#111", margin: "1.5rem 0 .5rem" }}>
            {n("originesH3")}
          </h3>
          <p style={S.sbody} dangerouslySetInnerHTML={{ __html: n("originesP4") }} />

          <div style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, overflow: "hidden", margin: "12px 0" }}>
            {NOTE_TABLE_ROWS.map((row, i) => (
              <div key={row.syl} style={{ display: "flex", alignItems: "center", gap: 16, padding: "8px 14px", background: i % 2 === 0 ? "#fff" : "#fafafa", borderBottom: i < 5 ? "0.5px solid #f0f0f0" : "none" }}>
                <span style={{ fontWeight: 700, fontSize: 15, color: "#185FA5", minWidth: 32 }}>{row.syl}</span>
                <span style={{ fontSize: 13, color: "#555", flex: 1, fontStyle: "italic" }}>{row.verse}…</span>
                <span style={{ fontSize: 12, color: "#888" }}>{row.note}</span>
              </div>
            ))}
          </div>

          <p style={S.sbody} dangerouslySetInnerHTML={{ __html: n("originesP5") }} />

          <div style={S.warnBox} dangerouslySetInnerHTML={{ __html: n("originesWarnBox") }} />
        </div>
      )}

      {/* ══ SECTION 2 : LES DEGRÉS ══ */}
      {activeSection === "degres" && (
        <div>
          <h2 style={S.stitle}>{n("degresH2")}</h2>
          <p style={S.sbody} dangerouslySetInnerHTML={{ __html: n("degresP1") }} />
          <p style={{ fontSize: 13, color: "#888", marginBottom: 12 }}>{n("degresTip")}</p>

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
                  <div style={{ fontSize: 13, color: "#666" }}>{n("degresNoteLabel")} : <strong>{DEGREES[activeDeg].note}</strong></div>
                </div>
              </div>
              <div style={{ fontSize: 13, color: "#444", lineHeight: 1.65, marginBottom: 8 }}>
                <strong>{n("degresEtyLabel")} :</strong>{" "}
                <span dangerouslySetInnerHTML={{ __html: DEGREES[activeDeg].origin }} />
              </div>
              <div style={{ fontSize: 13, color: "#444", lineHeight: 1.65, padding: "8px 12px", background: "rgba(255,255,255,0.6)", borderRadius: 6 }}>
                <strong>{n("degresAttrLabel")} :</strong> {DEGREES[activeDeg].attraction}
              </div>
              <button
                onClick={() => pianoRef.current?.playNote(DEGREES[activeDeg].note, 4, { duration: 2 })}
                style={{ marginTop: 10, fontSize: 12, padding: "5px 14px", border: `0.5px solid ${DEGREES[activeDeg].color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: DEGREES[activeDeg].color }}
              >
                ▶ {n("degresListenBtn")} {DEGREES[activeDeg].note}
              </button>
            </div>
          )}

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {[n("degresTableNum"), n("degresTableName"), n("degresTableNote"), n("degresTableRole")].map((h) => (
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
                      {DEGREE_ROLES[d.num]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.infoBox} dangerouslySetInnerHTML={{ __html: n("degresInfoBox") }} />
        </div>
      )}

      {/* ══ SECTION 3 : TONS & DEMI-TONS ══ */}
      {activeSection === "tons" && (
        <div>
          <h2 style={S.stitle}>{n("tonsH2")}</h2>
          <p style={S.sbody} dangerouslySetInnerHTML={{ __html: n("tonsP1") }} />

          <div style={S.infoBox} dangerouslySetInnerHTML={{ __html: n("tonsInfoBox") }} />

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
              {g.name} {n("tonsContains")} {g.accidentals.length === 1 ? n("tonsOneAccidental") : n("tonsTwoAccidentals")} :{" "}
              <strong>{g.accidentalDisplay.join(", ")}</strong>. {n("tonsAccidentalNote")}
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
            ▶ {n("tonsPlayBtnPrefix")} {g.name}
          </button>
        </div>
      )}

      {/* ══ SECTION 4 : INTERVALLES ══ */}
      {activeSection === "intervalles" && (
        <div>
          <h2 style={S.stitle}>{n("intervallesH2")}</h2>
          <p style={S.sbody} dangerouslySetInnerHTML={{ __html: n("intervallesP1") }} />

          <div style={S.infoBox} dangerouslySetInnerHTML={{ __html: n("intervallesInfoBox") }} />

          <p style={{ fontSize: 13, color: "#888", marginBottom: 12 }}>{n("intervallesTip")}</p>

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
                  <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>
                    {iv.semis} {iv.semis > 1 ? n("semitones") : n("semitone")} · {iv.nature}
                  </div>
                  <div style={{ fontSize: 11, color: "#185FA5", marginTop: 2 }}>{iv.example}</div>
                </div>
                <div style={{ fontSize: 16, color: "#ccc", userSelect: "none" }}>⇄</div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#111" }}>{iv.inverse}</div>
                  <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>
                    {iv.inverseSemis} {iv.inverseSemis > 1 ? n("semitones") : n("semitone")} · {iv.inverseNature}
                  </div>
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
                    ▶ {iv.inverse} ({n("renversement")})
                  </button>
                  {iv.name === "Triton" && (
                    <span style={{ fontSize: 11, color: "#888", display: "flex", alignItems: "center", marginLeft: 4 }}>
                      {n("tritonSelfNote")}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 8px", color: "#111" }}>
            {n("intervallesTableH2")}
          </h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {[n("intTableH1"), n("intTableH2"), n("intTableH3"), n("intTableH4")].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 10px", fontWeight: 500, color: "#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {INT_TABLE.map(({ name, nature, semis, ex }, i) => (
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

      {activeSection === "conservatoire" && <VueConservatoire courseNum={1} />}

      {/* ══ SECTION 5 : QUIZ ══ */}
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

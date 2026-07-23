"use client";

/**
 * Cours2.tsx
 * Harmonia · Niveau 1 · Cours 2 — Les accords : triades, tétrades, renversements
 * i18n : UI chrome traduit via next-intl (useCoursI18n)
 * Convention Harmonia : noms de notes en anglais (C D E F G A B)
 */

import React, { useRef, useState, useCallback } from "react";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { useTerm } from "@/hooks/useTerm";
import { cours2Content } from "@/data/cours2Content";
import MaitreCard from "@/components/MaitreCard";
import { VueConservatoire } from "@/components/VueConservatoire";

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

// ─── Moteur de notes (notation anglaise) ──────────────────────────────────────

const CHROMATIC_SHARP = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
const CHROMATIC_FLAT  = ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"];

function noteIndex(note: string): number {
  let i = CHROMATIC_SHARP.indexOf(note);
  if (i >= 0) return i;
  i = CHROMATIC_FLAT.indexOf(note);
  return i >= 0 ? i : 0;
}

type AccordContext = "sharp" | "flat";

interface ChordNotes {
  name: string;
  notes: string[];
  dotKeys: string[];
}

function buildChord(root: string, intervals: number[], suffix: string, ctx: AccordContext, inversion = 0): ChordNotes {
  const rootIdx = noteIndex(root);
  const notes = intervals.map((iv, i) => {
    if (i === 0) return root;
    const idx = (rootIdx + iv) % 12;
    return ctx === "flat" ? CHROMATIC_FLAT[idx] : CHROMATIC_SHARP[idx];
  });

  const baseAbs = intervals.map(iv => rootIdx + iv);
  const rotated = [...baseAbs.slice(inversion), ...baseAbs.slice(0, inversion)];
  let prev = -1;
  const ascending = rotated.map(abs => {
    while (abs <= prev) abs += 12;
    prev = abs;
    return abs;
  });
  const dotKeys = ascending.map(abs => {
    const oct = 3 + Math.floor(abs / 12);
    const idx = abs % 12;
    const noteName = ctx === "flat" ? CHROMATIC_FLAT[idx] : CHROMATIC_SHARP[idx];
    return `${noteName}:${oct}`;
  });

  const bassNote = ctx === "flat"
    ? CHROMATIC_FLAT[(rootIdx + intervals[inversion]) % 12]
    : CHROMATIC_SHARP[(rootIdx + intervals[inversion]) % 12];
  const name = inversion === 0 ? `${root}${suffix}` : `${root}${suffix}/${bassNote}`;

  return { name, notes, dotKeys };
}

// Fondamentales touches blanches uniquement
const ROOTS_WHITE = ["C","D","E","F","G","A","B"];

// Contexte par type : accords mineurs/diminués → bémols
function chordCtx(_root: string, type: string): AccordContext {
  if (["dim","min","m7","m7b5","dim7","hdim"].includes(type)) return "flat";
  return "sharp";
}

// ─── Données ──────────────────────────────────────────────────────────────────

const TRIAD_TYPES = [
  {
    id: "maj", label: "Majeure", suffix: "", intervals: [0,4,7],
    struct1: "Tierce majeure (4 demi-tons)",
    struct2: "Tierce mineure (3 demi-tons)",
    quinte: "juste (7 demi-tons)", stability: "stable",
    color: "#0F6E56", bg: "#E1F5EE",
    desc: "La triade la plus lumineuse. Sa quinte juste lui donne une assise solide — couleur brillante, affirmée, ouverte.",
    ctx: "sharp" as AccordContext,
  },
  {
    id: "min", label: "Mineure", suffix: "m", intervals: [0,3,7],
    struct1: "Tierce mineure (3 demi-tons)",
    struct2: "Tierce majeure (4 demi-tons)",
    quinte: "juste (7 demi-tons)", stability: "stable",
    color: "#534AB7", bg: "#EEEDFE",
    desc: "Même stabilité que la majeure (quinte juste), mais la tierce mineure lui donne une couleur plus sombre et intérieure.",
    ctx: "flat" as AccordContext,
  },
  {
    id: "dim", label: "Diminuée", suffix: "dim", intervals: [0,3,6],
    struct1: "Tierce mineure (3 demi-tons)",
    struct2: "Tierce mineure (3 demi-tons)",
    quinte: "diminuée (6 demi-tons)", stability: "instable",
    color: "#993C1D", bg: "#FAECE7",
    desc: "La quinte diminuée crée une forte tension. Dense et dissonante, cette triade réclame une résolution.",
    ctx: "flat" as AccordContext,
  },
  {
    id: "aug", label: "Augmentée", suffix: "aug", intervals: [0,4,8],
    struct1: "Tierce majeure (4 demi-tons)",
    struct2: "Tierce majeure (4 demi-tons)",
    quinte: "augmentée (8 demi-tons)", stability: "instable",
    color: "#BA7517", bg: "#FAEEDA",
    desc: "La quinte augmentée crée une couleur mystérieuse et suspendue — comme en attente d'une direction.",
    ctx: "sharp" as AccordContext,
  },
];

// Intervalles RELATIFS à la fondamentale de chaque accord (même convention que
// TRIAD_TYPES : [0,4,7]=majeure, [0,3,7]=mineure, [0,3,6]=diminuée). `buildChord`
// ajoute déjà l'index de la fondamentale — lui passer des classes de hauteur
// ABSOLUES (ex. [2,5,9] pour ré-fa-la) la décale une seconde fois et brise
// l'accord (bug signalé : « Dm » affichait ré-sol-si au lieu de ré-fa-la).
const GAMME_ACCORDS = [
  { deg:"I",   root:"C", suffix:"",    intervals:[0,4,7], ctx:"sharp" as AccordContext, fn:"Tonique",   fnColor:"#0F6E56", fnBg:"#E1F5EE", type:"Majeure",  desc:"L'accord de repos absolu. Aucune note du triton instable." },
  { deg:"II",  root:"D", suffix:"m",   intervals:[0,3,7], ctx:"flat"  as AccordContext, fn:"Sous-dom.", fnColor:"#534AB7", fnBg:"#EEEDFE", type:"Mineure",  desc:"Légèrement tendu. Prépare naturellement la dominante." },
  { deg:"III", root:"E", suffix:"m",   intervals:[0,3,7], ctx:"flat"  as AccordContext, fn:"Tonique",   fnColor:"#0F6E56", fnBg:"#E1F5EE", type:"Mineure",  desc:"Stable mais coloré. Substitut possible du I." },
  { deg:"IV",  root:"F", suffix:"",    intervals:[0,4,7], ctx:"flat"  as AccordContext, fn:"Sous-dom.", fnColor:"#534AB7", fnBg:"#EEEDFE", type:"Majeure",  desc:"Prépare la dominante. Contient F, note du triton." },
  { deg:"V",   root:"G", suffix:"",    intervals:[0,4,7], ctx:"sharp" as AccordContext, fn:"Dominante", fnColor:"#BA7517", fnBg:"#FAEEDA", type:"Majeure",  desc:"Le plus tendu. Contient le triton B–F. Appelle la résolution." },
  { deg:"VI",  root:"A", suffix:"m",   intervals:[0,3,7], ctx:"flat"  as AccordContext, fn:"Tonique",   fnColor:"#0F6E56", fnBg:"#E1F5EE", type:"Mineure",  desc:"Tonique secondaire. Souvent substitut du I (cadence rompue)." },
  { deg:"VII", root:"B", suffix:"dim", intervals:[0,3,6], ctx:"flat"  as AccordContext, fn:"Dominante", fnColor:"#BA7517", fnBg:"#FAEEDA", type:"Diminuée", desc:"La seule triade diminuée. Forte tension vers le I." },
];

// Même principe que GAMME_ACCORDS, une tierce de plus : les 7 tétrades de la
// gamme majeure. Intervalles RELATIFS à la fondamentale (cf. commentaire ci-dessus).
const GAMME_TETRADS = [
  { deg:"I",   root:"C", suffix:"Maj7", intervals:[0,4,7,11], ctx:"sharp" as AccordContext, fn:"Tonique",   fnColor:"#0F6E56", fnBg:"#E1F5EE", type:"Maj7",  desc:"Couleur douce et enrichie du repos. La 7e majeure ajoute une tension raffinée sans instabilité." },
  { deg:"II",  root:"D", suffix:"m7",   intervals:[0,3,7,10], ctx:"flat"  as AccordContext, fn:"Sous-dom.", fnColor:"#534AB7", fnBg:"#EEEDFE", type:"m7",    desc:"Le plus fréquent en jazz. Prépare la dominante avec une couleur plus sombre que la triade seule." },
  { deg:"III", root:"E", suffix:"m7",   intervals:[0,3,7,10], ctx:"flat"  as AccordContext, fn:"Tonique",   fnColor:"#0F6E56", fnBg:"#E1F5EE", type:"m7",    desc:"Stable mais coloré, comme sa triade. Souvent substitut du I ou du V." },
  { deg:"IV",  root:"F", suffix:"Maj7", intervals:[0,4,7,11], ctx:"sharp" as AccordContext, fn:"Sous-dom.", fnColor:"#534AB7", fnBg:"#EEEDFE", type:"Maj7",  desc:"Prépare la dominante en douceur. Sa 7e majeure adoucit la tension du IV." },
  { deg:"V",   root:"G", suffix:"7",    intervals:[0,4,7,10], ctx:"sharp" as AccordContext, fn:"Dominante", fnColor:"#BA7517", fnBg:"#FAEEDA", type:"7",     desc:"L'unique dominante 7 de la gamme. Contient le triton complet B–F — appelle fortement la résolution." },
  { deg:"VI",  root:"A", suffix:"m7",   intervals:[0,3,7,10], ctx:"flat"  as AccordContext, fn:"Tonique",   fnColor:"#0F6E56", fnBg:"#E1F5EE", type:"m7",    desc:"Tonique secondaire enrichie. Fréquent en cadence rompue ou en point de départ de progression." },
  { deg:"VII", root:"B", suffix:"m7♭5", intervals:[0,3,6,10], ctx:"flat"  as AccordContext, fn:"Dominante", fnColor:"#BA7517", fnBg:"#FAEEDA", type:"m7♭5",  desc:"Le seul demi-diminué de la gamme. Sensible et triton réunis dans un même accord — tension maximale." },
];

const TETRAD_TYPES = [
  {
    id:"maj7",  label:"Maj7",          suffix:"Maj7",  intervals:[0,4,7,11], ctx:"sharp" as AccordContext,
    struct1:"Tierce majeure (4 dt)", struct2:"Tierce mineure (3 dt)", struct3:"Tierce majeure (4 dt)",
    base:"Triade majeure + 7e majeure",
    color:"#0F6E56", bg:"#E1F5EE",
    desc:"Couleur chaude et raffinée. La septième majeure ajoute une tension douce. Accord tonique typique du jazz.",
    example: (r: string) => { const c = buildChord(r,[0,4,7,11],"Maj7","sharp"); return `${r}Maj7 = ${c.notes.join("–")}`; },
  },
  {
    id:"dom7",  label:"7 (dominante)", suffix:"7",     intervals:[0,4,7,10], ctx:"sharp" as AccordContext,
    struct1:"Tierce majeure (4 dt)", struct2:"Tierce mineure (3 dt)", struct3:"Tierce mineure (3 dt)",
    base:"Triade majeure + 7e mineure",
    color:"#BA7517", bg:"#FAEEDA",
    desc:"L'accord de dominante par excellence. Sa 7e mineure crée le triton avec la tierce — tension maximale.",
    example: (r: string) => { const c = buildChord(r,[0,4,7,10],"7","sharp"); return `${r}7 = ${c.notes.join("–")}`; },
  },
  {
    id:"min7",  label:"m7",            suffix:"m7",    intervals:[0,3,7,10], ctx:"flat" as AccordContext,
    struct1:"Tierce mineure (3 dt)", struct2:"Tierce majeure (4 dt)", struct3:"Tierce mineure (3 dt)",
    base:"Triade mineure + 7e mineure",
    color:"#534AB7", bg:"#EEEDFE",
    desc:"Couleur sombre et fluide. L'accord le plus fréquent de la gamme (II, III, VI). Très utilisé en jazz et pop.",
    example: (r: string) => { const c = buildChord(r,[0,3,7,10],"m7","flat"); return `${r}m7 = ${c.notes.join("–")}`; },
  },
  {
    id:"hdim",  label:"m7♭5",          suffix:"m7♭5",  intervals:[0,3,6,10], ctx:"flat" as AccordContext,
    struct1:"Tierce mineure (3 dt)", struct2:"Tierce mineure (3 dt)", struct3:"Tierce majeure (4 dt)",
    base:"Triade diminuée + 7e mineure",
    color:"#993C1D", bg:"#FAECE7",
    desc:"Aussi appelé demi-diminué. Très tendu — c'est le VIIe degré de la gamme majeure en tétrade.",
    example: (r: string) => { const c = buildChord(r,[0,3,6,10],"m7♭5","flat"); return `${r}m7♭5 = ${c.notes.join("–")}`; },
  },
  {
    id:"dim7",  label:"dim7",          suffix:"dim7",  intervals:[0,3,6,9],  ctx:"flat" as AccordContext,
    struct1:"Tierce mineure (3 dt)", struct2:"Tierce mineure (3 dt)", struct3:"Tierce mineure (3 dt)",
    base:"Triade diminuée + 7e diminuée",
    color:"#A32D2D", bg:"#FCEBEB",
    desc:"Symétrie parfaite : quatre tierces mineures. Tous ses renversements sonnent identiques. Tension dramatique.",
    example: (r: string) => { const c = buildChord(r,[0,3,6,9],"dim7","flat"); return `${r}dim7 = ${c.notes.join("–")}`; },
  },
];

const INV_CHORD_TYPES = [
  { id:"maj",  label:"Majeure",   suffix:"",     intervals:[0,4,7],    ctx:"sharp" as AccordContext },
  { id:"min",  label:"Mineure",   suffix:"m",    intervals:[0,3,7],    ctx:"flat"  as AccordContext },
  { id:"dim",  label:"Diminuée",  suffix:"dim",  intervals:[0,3,6],    ctx:"flat"  as AccordContext },
  { id:"aug",  label:"Augmentée", suffix:"aug",  intervals:[0,4,8],    ctx:"sharp" as AccordContext },
  { id:"maj7", label:"Maj7",      suffix:"Maj7", intervals:[0,4,7,11], ctx:"sharp" as AccordContext },
  { id:"dom7", label:"7",         suffix:"7",    intervals:[0,4,7,10], ctx:"sharp" as AccordContext },
  { id:"min7", label:"m7",        suffix:"m7",   intervals:[0,3,7,10], ctx:"flat"  as AccordContext },
  { id:"hdim", label:"m7♭5",      suffix:"m7♭5", intervals:[0,3,6,10], ctx:"flat"  as AccordContext },
];

// ─── Quiz (reformulé Harmonia, notation anglaise) ─────────────────────────────

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const QUIZ_COUNT = 10;

// ─── Composant ────────────────────────────────────────────────────────────────

export default function Cours2() {
  const i18n = useCoursI18n("cours2");
  const tc = i18n.tc;
  const n = (key: string) => tc(`narrative.${key}` as any);
  const tr = useTerm();
  const { questions: QUIZ_POOL } = useCoursContent(cours2Content);
  const [activeSection, setActiveSection] = useState("triades");
  const pianoRef = useRef<PianoPlayerRef>(null);

  // S1 : Triades
  const [triadRoot, setTriadRoot] = useState("C");
  const [triadTypeId, setTriadTypeId] = useState("maj");
  const triadType  = TRIAD_TYPES.find(t => t.id === triadTypeId)!;
  const triadChord = buildChord(triadRoot, triadType.intervals, triadType.suffix, triadType.ctx);

  const playChordFromKeys = useCallback((dotKeys: string[], arp = false) => {
    dotKeys.forEach((key, i) => {
      const [note, octStr] = key.split(":");
      setTimeout(() => pianoRef.current?.playNote(note, parseInt(octStr), { duration: 1.8 }), arp ? i * 110 : 0);
    });
  }, []);

  // S2 : Gamme
  const [selDeg, setSelDeg] = useState<number | null>(null);

  // S2b : Gamme (tétrades)
  const [selDegTet, setSelDegTet] = useState<number | null>(null);

  // S3 : Tétrades
  const [tetRoot, setTetRoot] = useState("C");
  const [tetTypeId, setTetTypeId] = useState("maj7");
  const tetType  = TETRAD_TYPES.find(t => t.id === tetTypeId)!;
  const tetChord = buildChord(tetRoot, tetType.intervals, tetType.suffix, tetType.ctx);

  // S4 : Renversements
  const [invRoot, setInvRoot] = useState("C");
  const [invChordTypeId, setInvChordTypeId] = useState("maj");
  const [invIdx, setInvIdx] = useState(0);
  const invChordType = INV_CHORD_TYPES.find(t => t.id === invChordTypeId)!;
  const maxInv    = invChordType.intervals.length - 1;
  const safeInvIdx = Math.min(invIdx, maxInv);
  const invChord  = buildChord(invRoot, invChordType.intervals, invChordType.suffix, invChordType.ctx, safeInvIdx);

  const INV_NAMES = [n("invNomsFondamental"), n("invNoms1er"), n("invNoms2e"), n("invNoms3e")];
  const INV_BASS  = [n("invBass0"), n("invBass1"), n("invBass2"), n("invBass3")];
  const INV_DESC  = [n("invDesc0"), n("invDesc1"), n("invDesc2"), n("invDesc3")];

  // Quiz
  const [quizQs,    setQuizQs]    = useState(() => shuffleArray(QUIZ_POOL).slice(0, QUIZ_COUNT));
  const [quizIdx,   setQuizIdx]   = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [answered,  setAnswered]  = useState(false);
  const [selected,  setSelected]  = useState<number | null>(null);
  const [done,      setDone]      = useState(false);

  const answerQuiz = (i: number) => {
    if (answered) return;
    setSelected(i); setAnswered(true);
    if (i === quizQs[quizIdx].a) setQuizScore(s => s + 1);
  };
  const nextQuiz = () => {
    if (quizIdx + 1 >= QUIZ_COUNT) { setDone(true); return; }
    setQuizIdx(i => i + 1); setAnswered(false); setSelected(null);
  };
  const resetQuiz = () => {
    setQuizQs(shuffleArray(QUIZ_POOL).slice(0, QUIZ_COUNT));
    setQuizIdx(0); setQuizScore(0); setAnswered(false); setSelected(null); setDone(false);
  };

  const SECTIONS_IDS = ["triades","gamme","tetrades","gammeTetrades","renversements","conservatoire","quiz"] as const;

  const btnSel = (active: boolean, color = "#333"): React.CSSProperties => ({
    fontSize: 12, padding: "4px 10px",
    border: `0.5px solid ${active ? color : "#ddd"}`,
    borderRadius: 6, cursor: "pointer",
    background: active ? color : "transparent",
    color: active ? "#fff" : "#666",
  });

  return (
    <div style={S.wrap}>
      <div style={{ position:"absolute", opacity:0, pointerEvents:"none", height:0, overflow:"hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={2} startOctave={3} showLabels={false} />
      </div>

      <div style={S.header}>
        <span style={S.badge}>{i18n.badge}</span>
        <h1 style={S.h1}>{i18n.title}</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="J.S. Bach"
        period="1685–1750"
        emoji="🎹"
        concept="Les Accords"
        anecdote={n("maitreAnecdote")}
        lesson={n("maitreLesson")}
        accentColor="#BA7517"
      />

      <nav style={S.nav}>
        {SECTIONS_IDS.map(id => (
          <button key={id} style={S.pill(activeSection === id)} onClick={() => setActiveSection(id)}>
            {i18n.sectionLabel(id)}
          </button>
        ))}
      </nav>

      {/* ══ TRIADES ══ */}
      {activeSection === "triades" && (
        <div>
          <h2 style={S.stitle}>{n("triadesTitle")}</h2>
          <p style={S.sbody} dangerouslySetInnerHTML={{ __html: n("triadesBody") }} />

          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 12, color: "#888", marginBottom: 6 }}>{n("triadesRootLabel")}</div>
            <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
              {ROOTS_WHITE.map(r => (
                <button key={r} onClick={() => setTriadRoot(r)} style={btnSel(r === triadRoot)}>{r}</button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 12, color: "#888", marginBottom: 6 }}>{tr("Type d'accord")}</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {TRIAD_TYPES.map(t => (
                <button key={t.id} onClick={() => setTriadTypeId(t.id)}
                  style={{ fontSize: 12, padding: "5px 12px", border: `0.5px solid ${t.id === triadTypeId ? t.color : "#ddd"}`, borderRadius: 6, cursor: "pointer", background: t.id === triadTypeId ? t.bg : "transparent", color: t.id === triadTypeId ? t.color : "#666" }}>
                  {tr(t.label)}
                </button>
              ))}
            </div>
          </div>

          <div style={{ border: `0.5px solid ${triadType.color}`, borderRadius: 10, padding: "14px 18px", background: triadType.bg, marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 10 }}>
              <span style={{ fontSize: 24, fontWeight: 600, color: triadType.color }}>{triadChord.name}</span>
              <span style={{ fontSize: 13, color: "#666" }}>{triadChord.notes.join(" – ")}</span>
              <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 10, background: triadType.stability === "stable" ? "#E1F5EE" : "#FAECE7", color: triadType.stability === "stable" ? "#0F6E56" : "#993C1D" }}>
                {tr(triadType.stability)}
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
              {triadChord.notes.map((note, i) => (
                <React.Fragment key={i}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 14, fontWeight: 500, padding: "6px 12px", border: `0.5px solid ${triadType.color}`, borderRadius: 6, background: "rgba(255,255,255,0.7)", color: "#111" }}>{note}</div>
                    <div style={{ fontSize: 10, color: "#888", marginTop: 3 }}>{n(`triadesNoteRole${i}` as any)}</div>
                  </div>
                  {i < 2 && (
                    <div style={{ paddingTop: 8, textAlign: "center" }}>
                      <div style={{ fontSize: 10, color: triadType.color, whiteSpace: "nowrap" }}>{triadType[i===0?"struct1":"struct2"]}</div>
                      <div style={{ fontSize: 18, color: triadType.color, lineHeight: 1 }}>→</div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div style={{ fontSize: 13, color: "#555", marginBottom: 6 }}>
              <strong>{n("triadesQuinteLabel")}</strong> {triadType.quinte}
            </div>
            <p style={{ fontSize: 13, color: "#444", lineHeight: 1.6, marginBottom: 10 }}>{triadType.desc}</p>

            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => playChordFromKeys(triadChord.dotKeys, false)}
                style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${triadType.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: triadType.color }}>
                {n("triadesPlayChord")}
              </button>
              <button onClick={() => playChordFromKeys(triadChord.dotKeys, true)}
                style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${triadType.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: triadType.color }}>
                {n("triadesPlayArp")}
              </button>
            </div>
          </div>

          <PianoPlayer dotKeys={triadChord.dotKeys} octaves={2} startOctave={3} showLabels showOctaveMarkers />

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 8px", color: "#111" }}>{n("triadesTableTitle")}</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {[n("triadesTableType"), n("triadesTableStruct"), n("triadesTableQuinte"), n("triadesTableStability"), n("triadesTableExample")].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 10px", fontWeight: 500, color: "#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TRIAD_TYPES.map((t, i) => {
                  const ex = buildChord("C", t.intervals, t.suffix, t.ctx);
                  return (
                    <tr key={t.id} style={{ borderBottom: "0.5px solid #f0f0f0", background: i%2===0?"#fff":"#fafafa" }}>
                      <td style={{ padding: "7px 10px", fontWeight: 500, color: t.color }}>{tr(t.label)}</td>
                      <td style={{ padding: "7px 10px", fontSize: 12, color: "#555" }}>{t.struct1}<br/><span style={{ color: "#aaa" }}>+</span> {t.struct2}</td>
                      <td style={{ padding: "7px 10px", fontSize: 12 }}>{t.quinte}</td>
                      <td style={{ padding: "7px 10px" }}>
                        <span style={{ fontSize: 11, padding: "1px 7px", borderRadius: 10, background: t.stability==="stable"?"#E1F5EE":"#FAECE7", color: t.stability==="stable"?"#0F6E56":"#993C1D" }}>{tr(t.stability)}</span>
                      </td>
                      <td style={{ padding: "7px 10px", fontSize: 12, color: "#555" }}>C{t.suffix} = {ex.notes.join("–")}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ══ GAMME ══ */}
      {activeSection === "gamme" && (
        <div>
          <h2 style={S.stitle}>{n("gammeTitle")}</h2>
          <p style={S.sbody} dangerouslySetInnerHTML={{ __html: n("gammeBody") }} />
          <p style={{ fontSize: 13, color: "#888", marginBottom: 12 }}>{n("gammeClickHint")}</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 5, marginBottom: 12 }}>
            {GAMME_ACCORDS.map((d, i) => {
              const chord = buildChord(d.root, d.intervals, d.suffix, d.ctx);
              return (
                <div key={d.deg}
                  onClick={() => { setSelDeg(i); playChordFromKeys(chord.dotKeys, true); }}
                  style={{ border: `0.5px solid ${selDeg===i ? d.fnColor : "#e5e5e5"}`, borderRadius: 8, padding: "8px 4px", textAlign: "center", cursor: "pointer", background: selDeg===i ? d.fnBg : "#fff", transition: "all .15s" }}>
                  <div style={{ fontSize: 10, color: "#999", fontWeight: 500 }}>{d.deg}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#111", margin: "2px 0" }}>{chord.name}</div>
                  <div style={{ fontSize: 10, color: "#888" }}>{tr(d.type)}</div>
                  <div style={{ fontSize: 9, marginTop: 3, padding: "1px 4px", borderRadius: 8, display: "inline-block", background: d.fnBg, color: d.fnColor, fontWeight: 500 }}>{tr(d.fn)}</div>
                </div>
              );
            })}
          </div>

          {selDeg !== null && (() => {
            const d = GAMME_ACCORDS[selDeg];
            const chord = buildChord(d.root, d.intervals, d.suffix, d.ctx);
            return (
              <>
                <div style={{ border: `0.5px solid ${d.fnColor}`, borderRadius: 10, padding: "14px 18px", background: d.fnBg, marginBottom: 16 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 8 }}>
                    <span style={{ fontSize: 22, fontWeight: 600, color: d.fnColor }}>{chord.name}</span>
                    <span style={{ fontSize: 13, color: "#666" }}>{chord.notes.join(" – ")}</span>
                  </div>
                  <p style={{ fontSize: 13, color: "#444", lineHeight: 1.6, margin: 0 }}>{d.desc}</p>
                </div>
                <PianoPlayer dotKeys={chord.dotKeys} octaves={2} startOctave={3} showLabels showOctaveMarkers />
              </>
            );
          })()}

          <div style={S.infoBox} dangerouslySetInnerHTML={{ __html: n("gammeInfoBox") }} />
        </div>
      )}

      {/* ══ TÉTRADES ══ */}
      {activeSection === "tetrades" && (
        <div>
          <h2 style={S.stitle}>{n("tetradsTitle")}</h2>
          <p style={S.sbody} dangerouslySetInnerHTML={{ __html: n("tetradsBody") }} />

          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 12, color: "#888", marginBottom: 6 }}>{n("tetradsRootLabel")}</div>
            <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
              {ROOTS_WHITE.map(r => (
                <button key={r} onClick={() => setTetRoot(r)} style={btnSel(r === tetRoot)}>{r}</button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 12, color: "#888", marginBottom: 6 }}>{n("tetradsTypeLabel")}</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {TETRAD_TYPES.map(t => (
                <button key={t.id} onClick={() => setTetTypeId(t.id)}
                  style={{ fontSize: 12, padding: "5px 12px", border: `0.5px solid ${t.id===tetTypeId ? t.color : "#ddd"}`, borderRadius: 6, cursor: "pointer", background: t.id===tetTypeId ? t.bg : "transparent", color: t.id===tetTypeId ? t.color : "#666" }}>
                  {tr(t.label)}
                </button>
              ))}
            </div>
          </div>

          <div style={{ border: `0.5px solid ${tetType.color}`, borderRadius: 10, padding: "14px 18px", background: tetType.bg, marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 10 }}>
              <span style={{ fontSize: 24, fontWeight: 600, color: tetType.color }}>{tetChord.name}</span>
              <span style={{ fontSize: 13, color: "#666" }}>{tetChord.notes.join(" – ")}</span>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: 6, marginBottom: 12, flexWrap: "wrap" }}>
              {tetChord.notes.map((note, i) => (
                <React.Fragment key={i}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 13, fontWeight: 500, padding: "5px 10px", border: `0.5px solid ${tetType.color}`, borderRadius: 6, background: "rgba(255,255,255,0.7)", color: "#111" }}>{note}</div>
                    <div style={{ fontSize: 10, color: "#888", marginTop: 2 }}>{n(`tetradsNoteRole${i}` as any)}</div>
                  </div>
                  {i < 3 && (
                    <div style={{ paddingTop: 6 }}>
                      <div style={{ fontSize: 10, color: tetType.color, whiteSpace: "nowrap" }}>
                        {[tetType.struct1, tetType.struct2, tetType.struct3][i]}
                      </div>
                      <div style={{ fontSize: 16, color: tetType.color }}>→</div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div style={{ fontSize: 12, color: "#666", marginBottom: 8 }}><strong>{n("tetradsBaseLabel")}</strong> {tetType.base}</div>
            <p style={{ fontSize: 13, color: "#444", lineHeight: 1.6, marginBottom: 8 }}>{tetType.desc}</p>
            <div style={{ fontSize: 12, color: tetType.color, fontStyle: "italic", marginBottom: 10 }}>{tetType.example(tetRoot)}</div>

            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => playChordFromKeys(tetChord.dotKeys, false)}
                style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${tetType.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: tetType.color }}>{n("tetradsPlayChord")}</button>
              <button onClick={() => playChordFromKeys(tetChord.dotKeys, true)}
                style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${tetType.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: tetType.color }}>{n("tetradsPlayArp")}</button>
            </div>
          </div>

          <PianoPlayer dotKeys={tetChord.dotKeys} octaves={2} startOctave={3} showLabels showOctaveMarkers />

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 8px", color: "#111" }}>{n("tetradsTableTitle")}</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {[n("tetradsTableDegre"), n("tetradsTableChord"), n("tetradsTableNotes"), n("tetradsTableType")].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 10px", fontWeight: 500, color: "#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { deg:"I",   chord:"CMaj7",  notes:"C–E–G–B",   type:"Maj7",  color:"#0F6E56" },
                  { deg:"II",  chord:"Dm7",    notes:"D–F–A–C",   type:"m7",    color:"#534AB7" },
                  { deg:"III", chord:"Em7",    notes:"E–G–B–D",   type:"m7",    color:"#534AB7" },
                  { deg:"IV",  chord:"FMaj7",  notes:"F–A–C–E",   type:"Maj7",  color:"#0F6E56" },
                  { deg:"V",   chord:"G7",     notes:"G–B–D–F",   type:"7",     color:"#BA7517" },
                  { deg:"VI",  chord:"Am7",    notes:"A–C–E–G",   type:"m7",    color:"#534AB7" },
                  { deg:"VII", chord:"Bm7♭5",  notes:"B–D–F–A",   type:"m7♭5", color:"#993C1D" },
                ].map((row, i) => (
                  <tr key={row.deg} style={{ borderBottom: "0.5px solid #f0f0f0", background: i%2===0?"#fff":"#fafafa" }}>
                    <td style={{ padding: "7px 10px", fontWeight: 700, color: "#888" }}>{row.deg}</td>
                    <td style={{ padding: "7px 10px", fontWeight: 600, color: row.color }}>{row.chord}</td>
                    <td style={{ padding: "7px 10px", color: "#555" }}>{row.notes}</td>
                    <td style={{ padding: "7px 10px" }}>
                      <span style={{ fontSize: 11, padding: "1px 7px", borderRadius: 10, background: "#f0f0f0", color: row.color }}>{tr(row.type)}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={S.warnBox}>{n("tetradsWarnBox")}</div>
        </div>
      )}

      {/* ══ GAMME (TÉTRADES) ══ */}
      {activeSection === "gammeTetrades" && (
        <div>
          <h2 style={S.stitle}>{n("gammeTetradesTitle")}</h2>
          <p style={S.sbody} dangerouslySetInnerHTML={{ __html: n("gammeTetradesBody") }} />
          <p style={{ fontSize: 13, color: "#888", marginBottom: 12 }}>{n("gammeTetradesClickHint")}</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 5, marginBottom: 12 }}>
            {GAMME_TETRADS.map((d, i) => {
              const chord = buildChord(d.root, d.intervals, d.suffix, d.ctx);
              return (
                <div key={d.deg}
                  onClick={() => { setSelDegTet(i); playChordFromKeys(chord.dotKeys, true); }}
                  style={{ border: `0.5px solid ${selDegTet===i ? d.fnColor : "#e5e5e5"}`, borderRadius: 8, padding: "8px 4px", textAlign: "center", cursor: "pointer", background: selDegTet===i ? d.fnBg : "#fff", transition: "all .15s" }}>
                  <div style={{ fontSize: 10, color: "#999", fontWeight: 500 }}>{d.deg}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#111", margin: "2px 0" }}>{chord.name}</div>
                  <div style={{ fontSize: 10, color: "#888" }}>{tr(d.type)}</div>
                  <div style={{ fontSize: 9, marginTop: 3, padding: "1px 4px", borderRadius: 8, display: "inline-block", background: d.fnBg, color: d.fnColor, fontWeight: 500 }}>{tr(d.fn)}</div>
                </div>
              );
            })}
          </div>

          {selDegTet !== null && (() => {
            const d = GAMME_TETRADS[selDegTet];
            const chord = buildChord(d.root, d.intervals, d.suffix, d.ctx);
            return (
              <>
                <div style={{ border: `0.5px solid ${d.fnColor}`, borderRadius: 10, padding: "14px 18px", background: d.fnBg, marginBottom: 16 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 8 }}>
                    <span style={{ fontSize: 22, fontWeight: 600, color: d.fnColor }}>{chord.name}</span>
                    <span style={{ fontSize: 13, color: "#666" }}>{chord.notes.join(" – ")}</span>
                  </div>
                  <p style={{ fontSize: 13, color: "#444", lineHeight: 1.6, margin: 0 }}>{d.desc}</p>
                </div>
                <PianoPlayer dotKeys={chord.dotKeys} octaves={2} startOctave={3} showLabels showOctaveMarkers />
              </>
            );
          })()}

          <div style={S.infoBox} dangerouslySetInnerHTML={{ __html: n("gammeTetradesInfoBox") }} />
        </div>
      )}

      {/* ══ RENVERSEMENTS ══ */}
      {activeSection === "renversements" && (
        <div>
          <h2 style={S.stitle}>{n("renversementsTitle")}</h2>
          <p style={S.sbody} dangerouslySetInnerHTML={{ __html: n("renversementsBody") }} />

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 16 }}>
            <div>
              <div style={{ fontSize: 12, color: "#888", marginBottom: 6 }}>{n("renversementsRootLabel")}</div>
              <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                {ROOTS_WHITE.map(r => (
                  <button key={r} onClick={() => { setInvRoot(r); setInvIdx(0); }} style={btnSel(r===invRoot)}>{r}</button>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 12, color: "#888", marginBottom: 6 }}>{tr("Type d'accord")}</div>
              <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                {INV_CHORD_TYPES.map(t => (
                  <button key={t.id} onClick={() => { setInvChordTypeId(t.id); setInvIdx(0); }}
                    style={{ fontSize: 12, padding: "4px 10px", border: `0.5px solid ${t.id===invChordTypeId ? "#333" : "#ddd"}`, borderRadius: 6, cursor: "pointer", background: t.id===invChordTypeId ? "#111" : "transparent", color: t.id===invChordTypeId ? "#fff" : "#666" }}>
                    {tr(t.label)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 6, marginBottom: 12, flexWrap: "wrap" }}>
            {INV_NAMES.slice(0, maxInv + 1).map((name, i) => (
              <button key={i} onClick={() => {
                setInvIdx(i);
                // `invChord` vient du rendu EN COURS (calculé avec l'ancien invIdx) : le
                // lire ici rejouerait toujours le renversement précédent, un clic en retard.
                // On recalcule donc l'accord pour l'index `i` qu'on vient de choisir.
                const chord = buildChord(invRoot, invChordType.intervals, invChordType.suffix, invChordType.ctx, i);
                playChordFromKeys(chord.dotKeys, true);
              }}
                style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${i===safeInvIdx ? "#0F6E56" : "#ddd"}`, borderRadius: 20, cursor: "pointer", background: i===safeInvIdx ? "#E1F5EE" : "transparent", color: i===safeInvIdx ? "#0F6E56" : "#666" }}>
                {name}
              </button>
            ))}
          </div>

          <div style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "14px 18px", background: "#f8f8f8", marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 6 }}>
              <span style={{ fontSize: 18, fontWeight: 600, color: "#111" }}>
                {invRoot}{invChordType.suffix}{safeInvIdx > 0 ? `/${invChord.dotKeys[0].split(":")[0]}` : ""}
              </span>
              <span style={{ fontSize: 13, color: "#666" }}>
                {invChord.dotKeys.map(k => k.split(":")[0]).join(" – ")}
              </span>
            </div>
            <div style={{ fontSize: 13, color: "#555", marginBottom: 6 }}>
              <strong>{n("renversementsBassLabel")}</strong> {invChord.dotKeys[0].split(":")[0]} ({INV_BASS[safeInvIdx]})
            </div>
            <p style={{ fontSize: 13, color: "#444", lineHeight: 1.6, margin: "0 0 10px" }}>{INV_DESC[safeInvIdx]}</p>
            <button onClick={() => playChordFromKeys(invChord.dotKeys, true)}
              style={{ fontSize: 12, padding: "5px 14px", border: "0.5px solid #0F6E56", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#0F6E56" }}>
              {n("renversementsListenBtn")}
            </button>
          </div>

          <PianoPlayer dotKeys={invChord.dotKeys} octaves={2} startOctave={3} showLabels showOctaveMarkers />

          <div style={S.infoBox} dangerouslySetInnerHTML={{ __html: n("renversementsInfoBox") }} />

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 8px", color: "#111" }}>{n("renversementsTableTitle")}</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {[n("renversementsTableName"), n("renversementsTableBass"), n("renversementsTableNotes"), n("renversementsTableNotation")].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 10px", fontWeight: 500, color: "#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { name: n("renversementsRow0Name"), bass: n("renversementsRow0Bass"), notes:"C–E–G", notation:"C" },
                  { name: n("renversementsRow1Name"), bass: n("renversementsRow1Bass"), notes:"E–G–C", notation:"C/E" },
                  { name: n("renversementsRow2Name"), bass: n("renversementsRow2Bass"), notes:"G–C–E", notation:"C/G" },
                ].map((row, i) => (
                  <tr key={row.name} style={{ borderBottom: "0.5px solid #f0f0f0", background: i%2===0?"#fff":"#fafafa" }}>
                    <td style={{ padding: "7px 10px", fontWeight: 500 }}>{row.name}</td>
                    <td style={{ padding: "7px 10px", color: "#666" }}>{row.bass}</td>
                    <td style={{ padding: "7px 10px", color: "#555" }}>{row.notes}</td>
                    <td style={{ padding: "7px 10px", fontWeight: 600, color: "#185FA5" }}>{row.notation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeSection === "conservatoire" && <VueConservatoire courseNum={2} />}

      {/* ══ QUIZ ══ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.stitle}>{i18n.training}</h2>
          {done ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>{quizScore>=8?"🎹":quizScore>=6?"👍":"💪"}</div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>{i18n.t("score")} : {quizScore} / {QUIZ_COUNT}</div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
                {quizScore===QUIZ_COUNT ? n("quizScorePerfect") : quizScore>=7 ? n("quizScoreGood") : n("quizScoreKeepGoing")}
              </div>
              <button onClick={resetQuiz}
                style={{ fontSize: 13, padding: "8px 20px", border: "0.5px solid #185FA5", borderRadius: 20, cursor: "pointer", background: "#E6F1FB", color: "#185FA5" }}>
                {i18n.newQ}
              </button>
            </div>
          ) : (
            <div>
              <div style={{ fontSize: 12, color: "#999", marginBottom: 8 }}>
                {i18n.t("question")} {quizIdx+1} {i18n.t("of")} {QUIZ_COUNT} &nbsp;·&nbsp;
                <span style={{ color: "#bbb" }}>{QUIZ_POOL.length} {i18n.t("questionsPool")}</span>
              </div>
              <div style={{ fontSize: 15, fontWeight: 500, color: "#111", lineHeight: 1.6, marginBottom: 16 }}>
                {quizQs[quizIdx].q}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {quizQs[quizIdx].opts.map((opt, i) => {
                  const isCorrect  = i === quizQs[quizIdx].a;
                  const isSelected = selected === i;
                  let bg="#fff", border="#e5e5e5", color="#333";
                  if (answered) {
                    if (isCorrect)       { bg="#E1F5EE"; border="#0F6E56"; color="#085041"; }
                    else if (isSelected) { bg="#FCEBEB"; border="#A32D2D"; color="#501313"; }
                  }
                  return (
                    <button key={i} onClick={() => answerQuiz(i)} disabled={answered}
                      style={{ fontSize: 13, padding: "10px 14px", border: `0.5px solid ${border}`, borderRadius: 8, cursor: answered?"default":"pointer", background: bg, color, textAlign: "left", transition: "all .12s" }}>
                      {opt}
                    </button>
                  );
                })}
              </div>
              {answered && (
                <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 8, background: selected===quizQs[quizIdx].a?"#E1F5EE":"#FCEBEB", fontSize: 13, color: selected===quizQs[quizIdx].a?"#085041":"#501313", lineHeight: 1.6 }}>
                  {quizQs[quizIdx].fb}
                </div>
              )}
              {answered && (
                <button onClick={nextQuiz}
                  style={{ marginTop: 12, fontSize: 13, padding: "7px 18px", border: "0.5px solid #333", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#333" }}>
                  {quizIdx+1 < QUIZ_COUNT ? i18n.nextQ : i18n.seeScore}
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
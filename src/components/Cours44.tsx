"use client";

/**
 * Cours44.tsx
 * Harmonia · Niveau 5 (≈ Master M1) · Cours 44 — Analyse post-tonale : la théorie
 * des ensembles (set theory)
 *
 * Clef de voûte du parcours licence/maîtrise : prend le relais des cours 27/37
 * (Schenker — musique tonale) hors tonalité. Sept sections calquées sur la spec
 * validée :
 *  1. Pourquoi une nouvelle théorie ?      — atonalité libre, Forte, Straus
 *  2. Classes de hauteurs & d'intervalles  — tables pc (0-11) et ic (0-6)
 *  3. Les ensembles                        — Tn/TnI, cellule op. 11 gravée
 *  4. Forme normale & forme première       — algorithmes pas à pas (rotations)
 *  5. Vecteur & nombres de Forte           — relation Z, table des célèbres
 *  6. Application & sérialisme             — segmentation op. 11, série op. 21
 *  7. Applications & entraînement          — méthode, calculateur, exercices, quiz
 *
 * Gravure (Verovio via StudioScore) : lib/contrepoint-vers-musicxml, une voix,
 * sans armure (répertoire atonal — toute altération est écrite sur la note).
 *  - cellule op. 11 (3 notes puis 5 notes réelles : Si4-Sol♯4-Sol4-La4-Fa4) ;
 *  - accord « Farben » (op. 16 n° 3) : le graveur 1-2 voix ne superpose pas
 *    d'accord dans une voix et le SATB plafonne à 4 sons — l'accord à 5 sons
 *    est donc gravé ARPÉGÉ de bas en haut (clé de fa, voicing réel Do3…La4),
 *    et l'audio le fait entendre plaqué puis arpégé ;
 *  - série de la Symphonie op. 21 de Webern : 12 hauteurs réelles à l'octave 4,
 *    deux mesures à 6/4 = les deux hexacordes.
 * Audio : PianoPlayer en noms de notes FRANÇAIS (Do Ré Mi…), chaque ensemble
 * plaqué puis arpégé. Arithmétique : lib/pcset (le verrou testé du cours).
 */

import React, { useMemo, useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { cours44Content, type Cours44Locale } from "@/data/cours44Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";
import StudioScore from "@/components/StudioScore";
import { contrepointVersMusicXML, type CpVoix, type CpDuree } from "@/lib/contrepoint-vers-musicxml";
import { formeNormale, formePremiere, vecteurIntervalles, vecteurEnTexte } from "@/lib/pcset";
import type { NoteName } from "@/lib/satb-rules";

// ─── Données musicales invariantes (identiques dans les six langues) ───────────

/** Noms d'affichage des 12 classes de hauteurs (solfège FR, conventions du cours). */
const PC_NOTES = ["Do", "Do♯/Ré♭", "Ré", "Ré♯/Mi♭", "Mi", "Fa", "Fa♯/Sol♭", "Sol", "Sol♯/La♭", "La", "La♯/Si♭", "Si"];

/** Noms audio (PianoPlayer) des 12 pcs — dièses uniquement. */
const PC_AUDIO = ["Do", "Do#", "Ré", "Ré#", "Mi", "Fa", "Fa#", "Sol", "Sol#", "La", "La#", "Si"];

/** Table des classes d'intervalles : demi-tons par ic (notation neutre « 1 / 11 »). */
const IC_DEMITONS = ["0", "1 / 11", "2 / 10", "3 / 9", "4 / 8", "5 / 7", "6"];

/** Transformations de {7,8,11} (section 3) — calculs de la spec, à l'identique. */
const OPS_ROWS = [
  { op: "T1", calc: "7+1, 8+1, 11+1", res: "{8, 9, 0}", notes: "Sol♯, La, Do", pcs: [8, 9, 0] },
  { op: "T5", calc: "7+5, 8+5, 11+5", res: "{0, 1, 4}", notes: "Do, Do♯, Mi", pcs: [0, 1, 4] },
  { op: "T0I", calc: "−7, −8, −11", res: "{5, 4, 1} = {1, 4, 5}", notes: "Do♯, Mi, Fa", pcs: [1, 4, 5] },
  { op: "T4I", calc: "4−7, 4−8, 4−11", res: "{9, 8, 5} = {5, 8, 9}", notes: "Fa, Sol♯, La", pcs: [5, 8, 9] },
];

/** Rotations de l'exemple B {7,9,1,2} (section 4) ; best = la plus compacte. */
const ROT_B = [
  { rot: "(1, 2, 7, 9)", etendue: "9 − 1 = 8", best: false },
  { rot: "(2, 7, 9, 13)", etendue: "13 − 2 = 11", best: false },
  { rot: "(7, 9, 13, 14)", etendue: "14 − 7 = 7", best: true },
  { rot: "(9, 13, 14, 19)", etendue: "19 − 9 = 10", best: false },
];

/** Rotations de l'exemple C {11,0,2,3,6} (section 4). */
const ROT_C = [
  { rot: "(0, 2, 3, 6, 11)", etendue: "11", best: false },
  { rot: "(2, 3, 6, 11, 12)", etendue: "10", best: false },
  { rot: "(3, 6, 11, 12, 14)", etendue: "11", best: false },
  { rot: "(6, 11, 12, 14, 15)", etendue: "9", best: false },
  { rot: "(11, 12, 14, 15, 18)", etendue: "7", best: true },
];

/** Table des ensembles célèbres (section 5) — la colonne Identité vient du contenu. */
const FAMOUS_SETS = [
  { forte: "3-1", prime: [0, 1, 2], vecteur: "<210000>" },
  { forte: "3-3", prime: [0, 1, 4], vecteur: "<101100>" },
  { forte: "3-4", prime: [0, 1, 5], vecteur: "<100110>" },
  { forte: "3-5", prime: [0, 1, 6], vecteur: "<100011>" },
  { forte: "3-11", prime: [0, 3, 7], vecteur: "<001110>" },
  { forte: "3-12", prime: [0, 4, 8], vecteur: "<000300>" },
  { forte: "4-16", prime: [0, 1, 5, 7], vecteur: "<110121>" },
  { forte: "4-21", prime: [0, 2, 4, 6], vecteur: "<030201>" },
  { forte: "4-28", prime: [0, 3, 6, 9], vecteur: "<004002>" },
  { forte: "5-Z17", prime: [0, 1, 3, 4, 8], vecteur: "<212320>" },
  { forte: "6-20", prime: [0, 1, 4, 5, 8, 9], vecteur: "<303630>" },
  { forte: "6-35", prime: [0, 2, 4, 6, 8, 10], vecteur: "<060603>" },
  { forte: "7-35", prime: [0, 1, 3, 5, 6, 8, 10], vecteur: "<254361>" },
  { forte: "8-28", prime: [0, 1, 3, 4, 6, 7, 9, 10], vecteur: "<448444>" },
];

/** Segmentation op. 11 (section 6) — le libellé du segment vient du contenu. */
const SEG_ROWS = [
  { pcs: "{7, 8, 11}", fn: "[7, 8, 11]", fp: "[0,1,4]", classe: "3-3", audio: [7, 8, 11] },
  { pcs: "{7, 8, 9}", fn: "[7, 8, 9]", fp: "[0,1,2]", classe: "3-1", audio: [7, 8, 9] },
  { pcs: "{5, 7, 9}", fn: "[5, 7, 9]", fp: "[0,2,4]", classe: "3-6", audio: [5, 7, 9] },
  { pcs: "{5, 7, 8, 9, 11}", fn: "[5, 7, 8, 9, 11]", fp: "[0,2,3,4,6]", classe: "5-8", audio: [5, 7, 8, 9, 11] },
];

/** Série de Webern op. 21 : P0, I0, R0 (numéros + notes FR — invariants). */
const WEBERN = {
  P0: { nums: "0, 9, 10, 11, 7, 8, 2, 1, 5, 4, 3, 6", notes: "Do, La, Si♭, Si, Sol, Sol♯, Ré, Do♯, Fa, Mi, Mi♭, Fa♯" },
  I0: { nums: "0, 3, 2, 1, 5, 4, 10, 11, 7, 8, 9, 6", notes: "Do, Mi♭, Ré, Do♯, Fa, Mi, Si♭, Si, Sol, Sol♯, La, Fa♯" },
};

// ─── Gravures (une voix, sans armure : altérations écrites, style atonal) ───────

interface Grav { name: NoteName; octave: number }
const g = (name: NoteName, octave: number): Grav => ({ name, octave });

// Cellule d'ouverture op. 11 n° 1 : les 3 premières notes (Si4-Sol♯4-Sol4).
const CELL3: Grav[] = [g("B", 4), g("G#", 4), g("G", 4)];
// Les 5 premières notes de la mélodie (mes. 1-3) : Si4-Sol♯4-Sol4 puis La4-Fa4.
const CELL5: Grav[] = [g("B", 4), g("G#", 4), g("G", 4), g("A", 4), g("F", 4)];
// Accord « Farben » (voicing réel, grave→aigu) — gravé ARPÉGÉ (cf. en-tête).
const FARBEN: Grav[] = [g("C", 3), g("G#", 3), g("B", 3), g("E", 4), g("A", 4)];
// Série de l'op. 21 de Webern, hauteurs réelles chantables à l'octave 4.
const WEBERN_ROW: Grav[] = [
  g("A", 4), g("F#", 4), g("G", 4), g("G#", 4), g("E", 4), g("F", 4),
  g("B", 4), g("Bb", 4), g("D", 4), g("C#", 4), g("C", 4), g("Eb", 4),
];

/** Une suite de notes → MusicXML une voix (noires), chiffrage au choix. */
function melodieXML(notes: Grav[], beats: number, clef: "sol" | "fa" = "sol"): string {
  const voix: CpVoix = { clef, notes: notes.map((n) => ({ ...n, duree: "quarter" as CpDuree })) };
  return contrepointVersMusicXML([voix], { beats, beatType: 4, showKeySignature: false });
}

// ─── Audio (PianoPlayer, noms FR) ────────────────────────────────────────────────

const EN_TO_FR: Record<string, string> = { C: "Do", D: "Ré", E: "Mi", F: "Fa", G: "Sol", A: "La", B: "Si" };

/** « G#4 » (graveur) → { fr: "Sol#", oct: 4 } (audio). ♭ rendu par son enharmonie ♯. */
function gravVersAudio(n: Grav): { fr: string; oct: number } {
  const FLAT_TO_SHARP: Record<string, string> = { Bb: "La#", Eb: "Ré#", Ab: "Sol#", Db: "Do#", Gb: "Fa#" };
  if (n.name.endsWith("b")) return { fr: FLAT_TO_SHARP[n.name] ?? n.name, oct: n.octave };
  const acc = n.name.endsWith("#") ? "#" : "";
  const base = acc ? n.name.slice(0, -1) : n.name;
  return { fr: EN_TO_FR[base] + acc, oct: n.octave };
}

/** Joue une mélodie gravée, note à note. */
function playMelodie(ref: React.RefObject<PianoPlayerRef | null>, notes: Grav[], pas = 0.55) {
  notes.forEach((n, i) => {
    const { fr, oct } = gravVersAudio(n);
    ref.current?.playNote(fr, oct, { startTime: i * pas, duration: pas * 0.92 });
  });
}

/** Joue un ensemble de pcs : plaqué, puis arpégé (l'oreille avant le calcul). */
function playPcs(ref: React.RefObject<PianoPlayerRef | null>, pcs: number[], octave = 4) {
  const specs = pcs.map((p) => `${PC_AUDIO[p]}:${octave}`);
  ref.current?.playVoicing(specs, { duration: 1.6 });
  pcs.forEach((p, i) => {
    ref.current?.playNote(PC_AUDIO[p], octave, { startTime: 1.8 + i * 0.42, duration: 0.4 });
  });
}

/** Joue l'accord « Farben » : plaqué (voicing réel), puis arpégé de bas en haut. */
function playFarben(ref: React.RefObject<PianoPlayerRef | null>) {
  const specs = FARBEN.map((n) => { const { fr, oct } = gravVersAudio(n); return `${fr}:${oct}`; });
  ref.current?.playVoicing(specs, { duration: 2.2 });
  FARBEN.forEach((n, i) => {
    const { fr, oct } = gravVersAudio(n);
    ref.current?.playNote(fr, oct, { startTime: 2.5 + i * 0.45, duration: 0.42 });
  });
}

// ─── Quiz ───────────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const QUIZ_COUNT = 10;
const ACCENT = "#31547C"; // bleu ardoise — identité visuelle du cours 44
const ACCENT_BG = "#E9EFF7";

// ─── Styles (repris des cours 42/43) ────────────────────────────────────────────

const S = {
  wrap: { fontFamily: "var(--font-sans, system-ui)", maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" } as React.CSSProperties,
  hdr: { padding: "1.5rem 0 1rem", borderBottom: "0.5px solid #e5e5e5", marginBottom: "1.25rem" } as React.CSSProperties,
  badge: { display: "inline-block", background: ACCENT_BG, color: ACCENT, fontSize: 11, fontWeight: 500, padding: "2px 10px", borderRadius: 20, marginBottom: 6 } as React.CSSProperties,
  h1: { fontSize: 26, fontWeight: 500, color: "#111", margin: 0 } as React.CSSProperties,
  sub: { fontSize: 14, color: "#666", marginTop: 4, lineHeight: 1.6 } as React.CSSProperties,
  nav: { display: "flex", gap: 6, flexWrap: "wrap" as const, marginBottom: "1.5rem" },
  pill: (a: boolean): React.CSSProperties => ({ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${a ? "#333" : "#ddd"}`, borderRadius: 20, cursor: "pointer", background: a ? "#111" : "transparent", color: a ? "#fff" : "#666", transition: "all .15s" }),
  h2: { fontSize: 17, fontWeight: 500, color: "#111", marginBottom: 8 } as React.CSSProperties,
  h3: { fontSize: 14, fontWeight: 500, margin: "20px 0 10px", color: "#111" } as React.CSSProperties,
  p: { fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: "1rem" } as React.CSSProperties,
  ul: { fontSize: 13.5, color: "#555", lineHeight: 1.8, paddingLeft: 20, marginBottom: "1rem" } as React.CSSProperties,
  info: { borderLeft: "2px solid #185FA5", padding: "8px 14px", background: "#E6F1FB", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#0C447C", lineHeight: 1.6 } as React.CSSProperties,
  tip: { borderLeft: `2px solid ${ACCENT}`, padding: "8px 14px", background: ACCENT_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#243B57", lineHeight: 1.6 } as React.CSSProperties,
  quote: { borderLeft: "2px solid #999", padding: "8px 14px", background: "#fafafa", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13.5, color: "#333", lineHeight: 1.6 } as React.CSSProperties,
  tableWrap: { overflowX: "auto" as const, margin: "12px 0" },
  table: { width: "100%", borderCollapse: "collapse" as const, fontSize: 12.5 },
  th: { textAlign: "left" as const, padding: "6px 9px", fontWeight: 500, color: "#666", borderBottom: "0.5px solid #e5e5e5", whiteSpace: "nowrap" as const },
  td: { padding: "6px 9px", color: "#555", verticalAlign: "top" as const },
  caption: { fontSize: 11, color: "#999", marginBottom: 4 } as React.CSSProperties,
  mono: { fontFamily: "monospace" } as React.CSSProperties,
  listenBtn: { fontSize: 12, padding: "5px 14px", border: `0.5px solid ${ACCENT}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: ACCENT, marginTop: 8 } as React.CSSProperties,
  miniBtn: { fontSize: 11, padding: "2px 8px", border: `0.5px solid ${ACCENT}`, borderRadius: 12, cursor: "pointer", background: "transparent", color: ACCENT } as React.CSSProperties,
  scoreBox: { border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "12px 14px", margin: "12px 0", background: "#fff" } as React.CSSProperties,
  serie: { fontFamily: "monospace", fontSize: 13, background: "#fafafa", border: "0.5px solid #eee", borderRadius: 8, padding: "10px 14px", margin: "10px 0", lineHeight: 1.8, overflowX: "auto" as const } as React.CSSProperties,
} as const;

// ─── Blocs partagés ──────────────────────────────────────────────────────────────

/** Exemple gravé (une voix) + bouton d'écoute mélodique. */
function ScoreBlock({ notes, beats, clef = "sol", listenLabel, pianoRef, onListen }: {
  notes: Grav[];
  beats: number;
  clef?: "sol" | "fa";
  listenLabel: string;
  pianoRef: React.RefObject<PianoPlayerRef | null>;
  onListen?: () => void;
}) {
  const xml = useMemo(() => melodieXML(notes, beats, clef), [notes, beats, clef]);
  return (
    <div style={S.scoreBox}>
      <StudioScore musicxml={xml} />
      <button onClick={() => (onListen ? onListen() : playMelodie(pianoRef, notes))} style={S.listenBtn}>
        🔊 {listenLabel}
      </button>
    </div>
  );
}

/** Formate un ensemble façon cours : [0,1,4]. */
const fmt = (pcs: number[]) => `[${pcs.join(",")}]`;

/** Calculateur interactif : jusqu'à 6 pcs → forme normale / première / vecteur. */
function Calculateur({ c, pianoRef }: { c: Cours44Locale; pianoRef: React.RefObject<PianoPlayerRef | null> }) {
  const [sel, setSel] = useState<number[]>([]);
  const toggle = (pc: number) =>
    setSel((s) => (s.includes(pc) ? s.filter((x) => x !== pc) : s.length >= 6 ? s : [...s, pc].sort((a, b) => a - b)));

  const ok = sel.length >= 2;
  return (
    <div style={{ border: `0.5px solid ${ACCENT}`, borderRadius: 10, padding: "12px 14px", margin: "12px 0", background: "#fff" }}>
      <div style={{ fontSize: 13.5, fontWeight: 600, color: "#111", marginBottom: 4 }}>{c.calcTitle}</div>
      <div style={{ fontSize: 12.5, color: "#666", marginBottom: 10, lineHeight: 1.5 }}>{c.calcHelp}</div>
      <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 10 }}>
        {PC_AUDIO.map((name, pc) => {
          const on = sel.includes(pc);
          return (
            <button key={pc} onClick={() => toggle(pc)} title={PC_NOTES[pc]}
              style={{ minWidth: 44, padding: "6px 4px", borderRadius: 8, cursor: "pointer", border: `0.5px solid ${on ? ACCENT : "#ddd"}`, background: on ? ACCENT : "#fff", color: on ? "#fff" : "#555", fontSize: 12, lineHeight: 1.3 }}>
              <div style={{ fontWeight: 700 }}>{pc}</div>
              <div style={{ fontSize: 10 }}>{name.replace("#", "♯")}</div>
            </button>
          );
        })}
      </div>
      {ok ? (
        <div style={{ fontSize: 13, color: "#333", lineHeight: 1.9 }}>
          <span style={{ color: "#999" }}>{`{${sel.join(",")}}`}</span>
          <span style={{ margin: "0 8px", color: "#ccc" }}>→</span>
          <strong>{c.calcNormalLabel}</strong> <span style={S.mono}>{fmt(formeNormale(sel))}</span>
          <span style={{ margin: "0 8px", color: "#ccc" }}>·</span>
          <strong>{c.calcPrimeLabel}</strong> <span style={S.mono}>{fmt(formePremiere(sel))}</span>
          <span style={{ margin: "0 8px", color: "#ccc" }}>·</span>
          <strong>{c.calcVectorLabel}</strong> <span style={S.mono}>{vecteurEnTexte(vecteurIntervalles(sel))}</span>
          <div>
            <button onClick={() => playPcs(pianoRef, sel)} style={{ ...S.miniBtn, marginTop: 6 }}>🔊 {c.listenBtn}</button>
          </div>
        </div>
      ) : (
        <div style={{ fontSize: 12.5, color: "#999" }}>{c.calcEmpty}</div>
      )}
    </div>
  );
}

// ─── Composant ───────────────────────────────────────────────────────────────────

const SECTIONS = ["intro", "pcs", "ensembles", "formes", "vecteur", "analyse", "quiz"] as const;

export default function Cours44() {
  const i18n = useCoursI18n("cours44");
  const c = useCoursContent<Cours44Locale>(cours44Content);
  const pianoRef = useRef<PianoPlayerRef>(null);

  const [sec, setSec] = useState<string>("intro");
  const [openEx, setOpenEx] = useState<number | null>(null);

  // Quiz
  const [qs, setQs] = useState(() => shuffle(c.questions).slice(0, QUIZ_COUNT));
  const [qi, setQi] = useState(0);
  const [scr, setScr] = useState(0);
  const [ans, setAns] = useState(false);
  const [ch, setCh] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const answer = (i: number) => { if (ans) return; setCh(i); setAns(true); if (i === qs[qi].a) setScr((s) => s + 1); };
  const next = () => { if (qi + 1 >= QUIZ_COUNT) setDone(true); else { setQi((i) => i + 1); setAns(false); setCh(null); } };
  const reset = () => { setQs(shuffle(c.questions).slice(0, QUIZ_COUNT)); setQi(0); setScr(0); setAns(false); setCh(null); setDone(false); };

  const rotTable = (rows: { rot: string; etendue: string; best: boolean }[]) => (
    <div style={S.tableWrap}>
      <table style={S.table}>
        <thead>
          <tr>{c.rotHeaders.map((hh) => <th key={hh} style={S.th}>{hh}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderBottom: "0.5px solid #f0f0f0", background: r.best ? ACCENT_BG : i % 2 ? "#fafafa" : "#fff" }}>
              <td style={{ ...S.td, ...S.mono, fontWeight: r.best ? 700 : 400, color: r.best ? ACCENT : "#555" }}>{r.rot}</td>
              <td style={{ ...S.td, ...S.mono, fontWeight: r.best ? 700 : 400, color: r.best ? ACCENT : "#555" }}>{r.etendue}{r.best ? " ←" : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div style={S.wrap}>
      {/* Piano caché — audio uniquement (noms FR) */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={5} startOctave={2} showLabels={false} />
      </div>

      {/* Header */}
      <div style={S.hdr}>
        <span style={S.badge}>{i18n.badge}</span>
        <h1 style={S.h1}>{i18n.title}</h1>
        <p style={S.sub}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Allen Forte"
        period="1926–2014"
        emoji="🧮"
        concept={c.maitreConcept}
        anecdote={c.maitreAnecdote}
        lesson={c.maitreLesson}
        accentColor={ACCENT}
      />

      {/* Nav */}
      <nav style={S.nav}>
        {SECTIONS.map((id) => (
          <button key={id} style={S.pill(sec === id)} onClick={() => setSec(id)}>
            {i18n.sectionLabel(id)}
          </button>
        ))}
      </nav>

      {/* ══ 1. POURQUOI UNE NOUVELLE THÉORIE ? ══ */}
      {sec === "intro" && (
        <div>
          <h2 style={S.h2}>{c.introH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.introP1 }} />
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.introP2 }} />
          <div style={S.tip} dangerouslySetInnerHTML={{ __html: c.introBox }} />
        </div>
      )}

      {/* ══ 2. CLASSES DE HAUTEURS & D'INTERVALLES ══ */}
      {sec === "pcs" && (
        <div>
          <h2 style={S.h2}>{c.pcsH2}</h2>

          <h3 style={S.h3}>{c.hauteurH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.hauteurP1 }} />
          <ul style={S.ul}>
            {c.hauteurEquiv.map((it, i) => <li key={i} dangerouslySetInnerHTML={{ __html: it }} />)}
          </ul>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.hauteurP2 }} />

          <div style={S.caption}>{c.pcTableCaption}</div>
          <div style={S.tableWrap}>
            <table style={S.table}>
              <tbody>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  <td style={{ ...S.td, fontWeight: 600, color: "#666" }}>{c.pcLabel}</td>
                  {PC_NOTES.map((_, pc) => <td key={pc} style={{ ...S.td, ...S.mono, fontWeight: 700, color: ACCENT, textAlign: "center" }}>{pc}</td>)}
                </tr>
                <tr>
                  <td style={{ ...S.td, fontWeight: 600, color: "#666" }}>{c.noteLabel}</td>
                  {PC_NOTES.map((n, pc) => <td key={pc} style={{ ...S.td, textAlign: "center", whiteSpace: "nowrap" }}>{n}</td>)}
                </tr>
              </tbody>
            </table>
          </div>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.modP }} />

          <h3 style={S.h3}>{c.intervH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.intervP1 }} />
          <div style={S.quote} dangerouslySetInnerHTML={{ __html: c.icFormule }} />

          <div style={S.caption}>{c.icTableCaption}</div>
          <div style={S.tableWrap}>
            <table style={S.table}>
              <thead>
                <tr>{c.icHeaders.map((hh) => <th key={hh} style={S.th}>{hh}</th>)}</tr>
              </thead>
              <tbody>
                {IC_DEMITONS.map((demi, ic) => (
                  <tr key={ic} style={{ borderBottom: "0.5px solid #f0f0f0", background: ic % 2 ? "#fafafa" : "#fff" }}>
                    <td style={{ ...S.td, ...S.mono, fontWeight: 700, color: ACCENT }}>{ic}</td>
                    <td style={{ ...S.td, ...S.mono }}>{demi}</td>
                    <td style={S.td}>{c.icTonal[ic]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={S.tip} dangerouslySetInnerHTML={{ __html: c.icExemple }} />
        </div>
      )}

      {/* ══ 3. LES ENSEMBLES ══ */}
      {sec === "ensembles" && (
        <div>
          <h2 style={S.h2}>{c.ensH2}</h2>

          <h3 style={S.h3}>{c.defH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.defP }} />

          <h3 style={S.h3}>{c.opsH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.opsP }} />
          <ul style={S.ul}>
            {c.opsList.map((it, i) => <li key={i} dangerouslySetInnerHTML={{ __html: it }} />)}
          </ul>

          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.exTravIntro }} />
          <ScoreBlock notes={CELL3} beats={3} listenLabel={c.listenBtn} pianoRef={pianoRef} />

          <div style={S.caption}>{c.opsTableCaption}</div>
          <div style={S.tableWrap}>
            <table style={S.table}>
              <thead>
                <tr>
                  {c.opsHeaders.map((hh) => <th key={hh} style={S.th}>{hh}</th>)}
                  <th style={S.th}>🔊</th>
                </tr>
              </thead>
              <tbody>
                {OPS_ROWS.map((r, i) => (
                  <tr key={r.op} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 ? "#fafafa" : "#fff" }}>
                    <td style={{ ...S.td, ...S.mono, fontWeight: 700, color: ACCENT }}>{r.op}</td>
                    <td style={{ ...S.td, ...S.mono }}>{r.calc}</td>
                    <td style={{ ...S.td, ...S.mono }}>{r.res}</td>
                    <td style={S.td}>{r.notes}</td>
                    <td style={S.td}>
                      <button onClick={() => playPcs(pianoRef, r.pcs)} style={S.miniBtn}>🔊</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.ensP2 }} />
          <div style={S.info}>
            {c.ensEcoute}{" "}
            <button onClick={() => playPcs(pianoRef, [7, 8, 11])} style={S.miniBtn}>🔊 {"{7, 8, 11}"}</button>
          </div>
        </div>
      )}

      {/* ══ 4. FORME NORMALE & FORME PREMIÈRE ══ */}
      {sec === "formes" && (
        <div>
          <h2 style={S.h2}>{c.formesH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.formesP1 }} />

          <h3 style={S.h3}>{c.fnH3}</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
            {c.fnSteps.map((step, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 10, padding: "10px 14px", borderRadius: 8, background: i % 2 === 0 ? "#fafafa" : "#fff", border: "0.5px solid #f0f0f0" }}>
                <div style={{ fontSize: 13, color: ACCENT, fontWeight: 700, marginTop: 1 }}>{i + 1}.</div>
                <div style={{ fontSize: 13, color: "#444", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: step }} />
              </div>
            ))}
          </div>
          <div style={S.info} dangerouslySetInnerHTML={{ __html: c.fnNote }} />

          <h3 style={S.h3}>{c.exATitle}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.exAText }} />

          <h3 style={S.h3}>{c.exBTitle}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.exBIntro }} />
          {rotTable(ROT_B)}
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.exBResult }} />

          <h3 style={S.h3}>{c.exCTitle}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.exCIntro }} />
          {rotTable(ROT_C)}
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.exCResult }} />

          <h3 style={S.h3}>{c.fpH3}</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
            {c.fpSteps.map((step, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 10, padding: "10px 14px", borderRadius: 8, background: i % 2 === 0 ? "#fafafa" : "#fff", border: "0.5px solid #f0f0f0" }}>
                <div style={{ fontSize: 13, color: ACCENT, fontWeight: 700, marginTop: 1 }}>{i + 1}.</div>
                <div style={{ fontSize: 13, color: "#444", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: step }} />
              </div>
            ))}
          </div>

          <h3 style={S.h3}>{c.exA2Title}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.exA2Text }} />
          <h3 style={S.h3}>{c.exB2Title}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.exB2Text }} />
          <h3 style={S.h3}>{c.exC2Title}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.exC2Text }} />

          <div style={S.tip} dangerouslySetInnerHTML={{ __html: c.reflexBox }} />
          <Calculateur c={c} pianoRef={pianoRef} />
        </div>
      )}

      {/* ══ 5. VECTEUR & NOMBRES DE FORTE ══ */}
      {sec === "vecteur" && (
        <div>
          <h2 style={S.h2}>{c.vecH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.vecP1 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
            {c.vecCalcs.map((calc, i) => (
              <div key={i} style={{ padding: "10px 14px", borderRadius: 8, background: i % 2 === 0 ? "#fafafa" : "#fff", border: "0.5px solid #f0f0f0", fontSize: 13, color: "#444", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: calc }} />
            ))}
          </div>

          <h3 style={S.h3}>{c.forteH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.forteP }} />

          <h3 style={S.h3}>{c.zH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.zP1 }} />
          <ul style={S.ul}>
            {c.zList.map((it, i) => (
              <li key={i}>
                <span dangerouslySetInnerHTML={{ __html: it }} />{" "}
                <button onClick={() => playPcs(pianoRef, i === 0 ? [0, 1, 4, 6] : [0, 1, 3, 7])} style={S.miniBtn}>🔊</button>
              </li>
            ))}
          </ul>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.zP2 }} />

          <h3 style={S.h3}>{c.famousH3}</h3>
          <div style={S.caption}>{c.famousCaption}</div>
          <div style={S.tableWrap}>
            <table style={S.table}>
              <thead>
                <tr>
                  {c.famousHeaders.map((hh) => <th key={hh} style={S.th}>{hh}</th>)}
                  <th style={S.th}>🔊</th>
                </tr>
              </thead>
              <tbody>
                {FAMOUS_SETS.map((r, i) => (
                  <tr key={r.forte} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 ? "#fafafa" : "#fff" }}>
                    <td style={{ ...S.td, ...S.mono, fontWeight: 700, color: ACCENT, whiteSpace: "nowrap" }}>{r.forte}</td>
                    <td style={{ ...S.td, ...S.mono, whiteSpace: "nowrap" }}>{fmt(r.prime)}</td>
                    <td style={{ ...S.td, ...S.mono, whiteSpace: "nowrap" }}>{r.vecteur}</td>
                    <td style={S.td} dangerouslySetInnerHTML={{ __html: c.famousIdentites[i] }} />
                    <td style={S.td}>
                      <button onClick={() => playPcs(pianoRef, r.prime)} style={S.miniBtn}>🔊</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={S.tip} dangerouslySetInnerHTML={{ __html: c.famousP2 }} />
        </div>
      )}

      {/* ══ 6. APPLICATION & SÉRIALISME ══ */}
      {sec === "analyse" && (
        <div>
          <h2 style={S.h2}>{c.analyseH2}</h2>

          <h3 style={S.h3}>{c.segH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.segP1 }} />
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.segIntro }} />
          <ScoreBlock notes={CELL5} beats={5} listenLabel={c.listenBtn} pianoRef={pianoRef} />

          <div style={S.tableWrap}>
            <table style={S.table}>
              <thead>
                <tr>
                  {c.segHeaders.map((hh) => <th key={hh} style={S.th}>{hh}</th>)}
                  <th style={S.th}>🔊</th>
                </tr>
              </thead>
              <tbody>
                {SEG_ROWS.map((r, i) => (
                  <tr key={i} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 ? "#fafafa" : "#fff" }}>
                    <td style={{ ...S.td, color: "#111" }}>{c.segLabels[i]}</td>
                    <td style={{ ...S.td, ...S.mono, whiteSpace: "nowrap" }}>{r.pcs}</td>
                    <td style={{ ...S.td, ...S.mono, whiteSpace: "nowrap" }}>{r.fn}</td>
                    <td style={{ ...S.td, ...S.mono, whiteSpace: "nowrap" }}>{r.fp}</td>
                    <td style={{ ...S.td, ...S.mono, fontWeight: 700, color: ACCENT }}>{r.classe}</td>
                    <td style={S.td}>
                      <button onClick={() => playPcs(pianoRef, r.audio)} style={S.miniBtn}>🔊</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.segP2 }} />

          {/* Accord « Farben » — gravé arpégé (voir en-tête), audio plaqué puis arpégé */}
          <div style={S.caption} dangerouslySetInnerHTML={{ __html: c.famousIdentites[9] }} />
          <ScoreBlock notes={FARBEN} beats={5} clef="fa" listenLabel={c.listenBtn} pianoRef={pianoRef} onListen={() => playFarben(pianoRef)} />

          <h3 style={S.h3}>{c.serieH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.serieP1 }} />
          <ul style={S.ul}>
            {c.serieFormes.map((it, i) => <li key={i} dangerouslySetInnerHTML={{ __html: it }} />)}
          </ul>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.serieP2 }} />

          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.webernIntro }} />
          <div style={S.serie}>
            <strong>P0</strong> = {WEBERN.P0.nums}
            <br />
            <span style={{ color: "#888" }}>({WEBERN.P0.notes})</span>
          </div>
          <ScoreBlock notes={WEBERN_ROW} beats={6} listenLabel={c.listenBtn} pianoRef={pianoRef} />

          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.webernI0P }} />
          <div style={S.serie}>
            <strong>I0</strong> = {WEBERN.I0.nums}
            <br />
            <span style={{ color: "#888" }}>({WEBERN.I0.notes})</span>
          </div>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.webernControle }} />
          <div style={S.tip} dangerouslySetInnerHTML={{ __html: c.webernSym }} />
        </div>
      )}

      {/* ══ 7. APPLICATIONS & ENTRAÎNEMENT ══ */}
      {sec === "quiz" && (
        <div>
          <h2 style={S.h2}>{c.entrainH2}</h2>

          <h3 style={S.h3}>{c.methodeH3}</h3>
          <ol style={{ fontSize: 14, color: "#555", lineHeight: 1.8, paddingLeft: 20, marginBottom: "1rem" }}>
            {c.methodeSteps.map((step, i) => <li key={i} dangerouslySetInnerHTML={{ __html: step }} />)}
          </ol>

          <Calculateur c={c} pianoRef={pianoRef} />

          <h3 style={S.h3}>{c.exercicesH3}</h3>
          {c.exercices.map((ex, i) => (
            <div key={i} style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "12px 14px", marginBottom: 8, background: "#fff" }}>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: "#111", marginBottom: 4 }}>{ex.titre}</div>
              <div style={{ fontSize: 13, color: "#444", marginBottom: 8, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: ex.consigne }} />
              <button
                onClick={() => setOpenEx(openEx === i ? null : i)}
                style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${ACCENT}`, borderRadius: 20, cursor: "pointer", background: openEx === i ? ACCENT_BG : "transparent", color: ACCENT }}
              >
                {openEx === i ? c.masquerCorrige : c.voirCorrige}
              </button>
              {openEx === i && (
                <div style={{ marginTop: 10 }}>
                  <div style={S.caption}>{c.corrigeLabel}</div>
                  <div style={{ fontSize: 12.5, color: "#555", lineHeight: 1.7, background: "#fafafa", border: "0.5px solid #f0f0f0", borderRadius: 8, padding: "10px 14px" }} dangerouslySetInnerHTML={{ __html: ex.controle }} />
                </div>
              )}
            </div>
          ))}

          <h3 style={S.h3}>{c.quizH3}</h3>
          {done ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>{scr >= 8 ? "🧮" : scr >= 6 ? "👍" : "💪"}</div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>{i18n.t("score")} : {scr} / {QUIZ_COUNT}</div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>{i18n.quizMessage(scr, QUIZ_COUNT)}</div>
              <button onClick={reset} style={{ fontSize: 13, padding: "8px 20px", border: `0.5px solid ${ACCENT}`, borderRadius: 20, cursor: "pointer", background: ACCENT_BG, color: ACCENT }}>{i18n.newQ}</button>
            </div>
          ) : (
            <div>
              <div style={{ fontSize: 12, color: "#999", marginBottom: 10 }}>
                {i18n.t("question")} {qi + 1} {i18n.t("of")} {QUIZ_COUNT}
                <span style={{ marginLeft: 12, color: "#bbb" }}>{c.questions.length} {i18n.t("questionsPool")}</span>
              </div>
              <div style={{ fontSize: 15, fontWeight: 500, color: "#111", lineHeight: 1.6, marginBottom: 16 }}>{qs[qi].q}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {qs[qi].opts.map((opt, i) => {
                  const isCorrect = i === qs[qi].a;
                  const isSelected = ch === i;
                  let bg = "#fff", border = "#e5e5e5", color = "#333";
                  if (ans) {
                    if (isCorrect) { bg = "#E1F5EE"; border = "#0F6E56"; color = "#085041"; }
                    else if (isSelected) { bg = "#FCEBEB"; border = "#A32D2D"; color = "#501313"; }
                  }
                  return (
                    <button key={i} onClick={() => answer(i)} disabled={ans}
                      style={{ fontSize: 13, padding: "10px 14px", border: `0.5px solid ${border}`, borderRadius: 8, cursor: ans ? "default" : "pointer", background: bg, color, textAlign: "left", transition: "all .12s" }}>
                      {opt}
                    </button>
                  );
                })}
              </div>
              {ans && (
                <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 8, background: ch === qs[qi].a ? "#E1F5EE" : "#FCEBEB", fontSize: 13, color: ch === qs[qi].a ? "#085041" : "#501313", lineHeight: 1.6 }}>
                  {qs[qi].fb}
                </div>
              )}
              {ans && (
                <button onClick={next} style={{ marginTop: 12, fontSize: 13, padding: "7px 18px", border: "0.5px solid #333", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#333" }}>
                  {qi + 1 < QUIZ_COUNT ? i18n.nextQ : i18n.seeScore}
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

"use client";

/**
 * Cours43.tsx
 * Harmonia · Niveau 3 (≈ Licence L3) · Cours 43 — Contrepoint modal de la Renaissance (style Palestrina)
 *
 * Prolonge le cours 13 (espèces de Fux) et le cours 10 (modes). Sept sections
 * calquées sur la spec validée :
 *  1. Le style Palestrina & la prima pratica
 *  2. Les modes ecclésiastiques           — table des 12 modes
 *  3. La ligne mélodique                  — règles + cantus modèle gravé (1 voix)
 *  4. Consonances & contrepoint à 2 voix  — 1re espèce + fleuri gravés (2 voix)
 *  5. La dissonance                       — passage, broderie, cambiata, retards (2 voix)
 *  6. Contrepoint 3-4 voix & cadences     — cadences dorienne & phrygienne (4 voix, SATB)
 *  7. Applications & entraînement         — méthode, exercices (modèles gravés) + quiz
 *
 * Gravure : deux graveurs selon le nombre de voix —
 *  - 1-2 voix (contrepoint) → lib/contrepoint-vers-musicxml (UNE voix par portée, SANS silence parasite) ;
 *  - 3-4 voix (cadences)    → lib/satb-vers-musicxml (grand staff SATB, comme le cours 42).
 * Les exemples sont MODAUX : gravés sans armure, la ficta (Do♯, Fa♯) est écrite sur la note.
 * Audio : PianoPlayer en noms de notes FRANÇAIS (Do Ré Mi…).
 */

import React, { useMemo, useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { cours43Content, type Cours43Locale } from "@/data/cours43Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";
import StudioScore from "@/components/StudioScore";
import { satbVersMusicXML } from "@/lib/satb-vers-musicxml";
import { contrepointVersMusicXML, type CpVoix, type CpDuree } from "@/lib/contrepoint-vers-musicxml";
import { specAudio, noteAudio } from "@/lib/cours-audio";
import type { Measure, NoteEntry, NoteName } from "@/lib/satb-rules";

// ─── Données musicales des exemples (indépendantes de la langue) ────────────────
// Noms de notes en solfège FR à la convention de GRAVURE (Do4 = do central) ;
// l'audio passe par specAudio/noteAudio (lib/cours-audio) qui corrigent l'octave.

// ── Contrepoint (1-2 voix) : chaque voix = clé + séquence de notes brèves ────────
type Dur = "whole" | "half";
interface Tok { t: string; d: Dur; lie?: boolean }
interface CpVoixData { clef: "sol" | "fa"; notes: Tok[] }

const w = (t: string): Tok => ({ t, d: "whole" });
const wl = (t: string): Tok => ({ t, d: "whole", lie: true }); // ronde liée à la suivante
const h = (t: string): Tok => ({ t, d: "half" });
const hl = (t: string): Tok => ({ t, d: "half", lie: true }); // blanche liée à la suivante

// Section 3 — cantus modèle (mode dorien), une seule voix, 11 semi-brèves.
const CANTUS_MODELE: CpVoixData[] = [
  { clef: "sol", notes: ["Ré4", "Fa4", "Mi4", "Ré4", "Sol4", "Fa4", "La4", "Sol4", "Fa4", "Mi4", "Ré4"].map(w) },
];

// Section 4 — 1re espèce (note contre note), contrepoint au-dessus du cantus.
const EX_PREMIERE: CpVoixData[] = [
  { clef: "sol", notes: ["Ré5", "La4", "Sol4", "La4", "Si4", "Do5", "Fa5", "Sol5", "Ré5", "Do#5", "Ré5"].map(w) },
  { clef: "sol", notes: ["Ré4", "Fa4", "Mi4", "Ré4", "Sol4", "Fa4", "La4", "Sol4", "Fa4", "Mi4", "Ré4"].map(w) },
];

// Section 4 — fleuri : 4 minimes descendantes sur un Ré4 tenu (ronde liée).
const EX_FLEURI: CpVoixData[] = [
  { clef: "sol", notes: [h("Ré5"), h("Do5"), h("Si4"), h("La4")] },
  { clef: "sol", notes: [wl("Ré4"), w("Ré4")] },
];

// Section 5 — note de passage (Ré5 dissonant, temps faible) sur Do4 tenu.
const EX_PASSAGE: CpVoixData[] = [
  { clef: "sol", notes: [h("Mi5"), h("Ré5"), w("Do5")] },
  { clef: "sol", notes: [wl("Do4"), w("Do4")] },
];

// Section 5 — broderie (Ré5 voisin, temps faible) sur Do4 tenu.
const EX_BRODERIE: CpVoixData[] = [
  { clef: "sol", notes: [h("Mi5"), h("Ré5"), w("Mi5")] },
  { clef: "sol", notes: [wl("Do4"), w("Do4")] },
];

// Section 5 — nota cambiata : Do5 (7m) quitté par saut de tierce descendante.
const EX_CAMBIATA: CpVoixData[] = [
  { clef: "sol", notes: [h("Ré5"), h("Do5"), h("La4"), h("Si4")] },
  { clef: "sol", notes: [wl("Ré4"), w("Ré4")] },
];

// Section 5 — retard 7-6 : Do5 tenu (préparé 6m) devient 7m au temps fort, résout Si4.
const EX_RETARD76: CpVoixData[] = [
  { clef: "sol", notes: [wl("Do5"), h("Do5"), h("Si4")] },
  { clef: "sol", notes: [w("Mi4"), w("Ré4")] },
];

// Section 5 — retard 4-3 : Sol4 tenu (préparé 5J) devient 4te au temps fort, résout Fa4.
const EX_RETARD43: CpVoixData[] = [
  { clef: "sol", notes: [wl("Sol4"), h("Sol4"), h("Fa4")] },
  { clef: "sol", notes: [w("Do4"), w("Ré4")] },
];

// Section 7 — exercice 2 : fleuri cadentiel sur Fa4 – Mi4 – Ré4 avec retard 7-6
// préparé et lié. Ré5 préparé (6M sur Fa4) au temps faible, tenu par-dessus la
// barre → 7e dissonante sur Mi4 au temps fort → résout Do♯5 (sensible) → Ré5.
const EX_CP_EX2: CpVoixData[] = [
  { clef: "sol", notes: [h("La4"), hl("Ré5"), h("Ré5"), h("Do#5"), w("Ré5")] },
  { clef: "sol", notes: [w("Fa4"), w("Mi4"), w("Ré4")] },
];

// ── Cadences (3-4 voix) : grand staff SATB (une case null = voix qui se tait) ────
interface Voicing { s: string | null; a: string | null; t: string | null; b: string | null; }

// Section 6 — cadence dorienne (finale Ré), retard 7-6, 4 voix.
const EX_DORIEN: Voicing[] = [
  { s: "Ré5", a: "La4", t: "Fa4", b: "Ré3" },
  { s: "Ré5", a: "La4", t: "Mi4", b: "La2" },
  { s: "Do#5", a: "La4", t: "Mi4", b: "La2" },
  { s: "Ré5", a: "La4", t: "Ré4", b: "Ré3" },
];

// Section 6 / exercice 4 — cadence phrygienne (finale Mi), 4 voix.
const EX_PHRYGIEN: Voicing[] = [
  { s: "Ré5", a: "Fa4", t: "La3", b: "Fa3" },
  { s: "Mi5", a: "Sol4", t: "Si3", b: "Mi3" },
];

// Section 7 / exercice 3 — cadence mixolydienne (finale Sol), 3 voix réelles (alto tacet).
const EX_MIXO: Voicing[] = [
  { s: "Fa#4", a: null, t: "La3", b: "Ré3" },
  { s: "Sol4", a: null, t: "Sol3", b: "Sol2" },
];

// Corrigés des exercices, dans l'ordre de content.exercices.
type Corrige =
  | { kind: "cp"; data: CpVoixData[] }
  | { kind: "satb"; data: Voicing[] };
const EX_CORRIGES: Corrige[] = [
  { kind: "cp", data: EX_PREMIERE },
  { kind: "cp", data: EX_CP_EX2 },
  { kind: "satb", data: EX_MIXO },
  { kind: "satb", data: EX_PHRYGIEN },
];

// ─── Conversion solfège FR → forme moteur ───────────────────────────────────────

const FR_TO_EN: Record<string, string> = { Do: "C", "Ré": "D", Mi: "E", Fa: "F", Sol: "G", La: "A", Si: "B" };
const DUR_Q: Record<Dur, number> = { whole: 4, half: 2 };

/** « Sol4 » → { fr: "Sol", oct: 4 } ; « Do#5 » → { fr: "Do#", oct: 5 }. */
function splitTok(tok: string): { fr: string; oct: number } {
  return { fr: tok.slice(0, -1), oct: parseInt(tok.slice(-1), 10) };
}

/** Nom FR (avec altération) → NoteName anglais. */
function toName(fr: string): NoteName {
  const acc = fr.endsWith("#") ? "#" : fr.endsWith("b") ? "b" : "";
  const base = acc ? fr.slice(0, -1) : fr;
  return ((FR_TO_EN[base] ?? base) + acc) as NoteName;
}

/** Une case SATB (ou null) → NoteEntry. */
function toEntry(tok: string | null): NoteEntry {
  if (!tok) return { name: null, octave: 4 };
  const { fr, oct } = splitTok(tok);
  return { name: toName(fr), octave: oct };
}

function toMeasures(vs: Voicing[]): Measure[] {
  return vs.map((v) => ({ soprano: toEntry(v.s), alto: toEntry(v.a), tenor: toEntry(v.t), bass: toEntry(v.b) }));
}

/** Voix de contrepoint (tokens FR) → CpVoix (noms anglais) pour le graveur. */
function toCpVoix(v: CpVoixData): CpVoix {
  return {
    clef: v.clef,
    notes: v.notes.map((n) => {
      const { fr, oct } = splitTok(n.t);
      return { name: toName(fr), octave: oct, duree: n.d as CpDuree, ...(n.lie ? { lie: true } : {}) };
    }),
  };
}

// ─── Audio ──────────────────────────────────────────────────────────────────────

/** Spécifications audio FR (grave → aigu) d'une colonne SATB, pour playVoicing. */
function toFrSpecs(v: Voicing): string[] {
  return [v.b, v.t, v.a, v.s]
    .filter((x): x is string => Boolean(x))
    .map(specAudio); // octave gravée → octave PianoPlayer (Ré3 gravé sonne bien Ré3)
}

/** Joue une suite de colonnes SATB (cadences note contre note). */
function playProg(ref: React.RefObject<PianoPlayerRef | null>, vs: Voicing[], gap = 1300) {
  vs.forEach((v, i) => setTimeout(() => ref.current?.playVoicing(toFrSpecs(v), { duration: 1.7 }), i * gap));
}

/** Joue un contrepoint : chaque voix jouée à son rythme (tenues liées fusionnées). */
function playContrepoint(ref: React.RefObject<PianoPlayerRef | null>, voices: CpVoixData[]) {
  const SEC = 0.62; // durée d'une noire
  voices.forEach((v) => {
    // Fusionne les notes liées (une tenue = une seule attaque prolongée).
    const merged: { tok: string; q: number }[] = [];
    let prevLie = false;
    v.notes.forEach((n) => {
      const q = DUR_Q[n.d];
      if (prevLie && merged.length) merged[merged.length - 1].q += q;
      else merged.push({ tok: n.t, q });
      prevLie = !!n.lie;
    });
    let onset = 0;
    merged.forEach((m) => {
      const { nom, octave } = noteAudio(m.tok); // octave gravée → octave PianoPlayer
      ref.current?.playNote(nom, octave, { startTime: onset * SEC, duration: m.q * SEC * 0.95 });
      onset += m.q;
    });
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
const VIOLET = "#5C3D6E";

// ─── Styles (repris du cours 42) ─────────────────────────────────────────────────

const S = {
  wrap: { fontFamily: "var(--font-sans, system-ui)", maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" } as React.CSSProperties,
  hdr: { padding: "1.5rem 0 1rem", borderBottom: "0.5px solid #e5e5e5", marginBottom: "1.25rem" } as React.CSSProperties,
  badge: { display: "inline-block", background: "#F0EBF8", color: VIOLET, fontSize: 11, fontWeight: 500, padding: "2px 10px", borderRadius: 20, marginBottom: 6 } as React.CSSProperties,
  h1: { fontSize: 26, fontWeight: 500, color: "#111", margin: 0 } as React.CSSProperties,
  sub: { fontSize: 14, color: "#666", marginTop: 4, lineHeight: 1.6 } as React.CSSProperties,
  nav: { display: "flex", gap: 6, flexWrap: "wrap" as const, marginBottom: "1.5rem" },
  pill: (a: boolean): React.CSSProperties => ({ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${a ? "#333" : "#ddd"}`, borderRadius: 20, cursor: "pointer", background: a ? "#111" : "transparent", color: a ? "#fff" : "#666", transition: "all .15s" }),
  h2: { fontSize: 17, fontWeight: 500, color: "#111", marginBottom: 8 } as React.CSSProperties,
  h3: { fontSize: 14, fontWeight: 500, margin: "20px 0 10px", color: "#111" } as React.CSSProperties,
  p: { fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: "1rem" } as React.CSSProperties,
  info: { borderLeft: "2px solid #185FA5", padding: "8px 14px", background: "#E6F1FB", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#0C447C", lineHeight: 1.6 } as React.CSSProperties,
  warn: { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
  tip: { borderLeft: `2px solid ${VIOLET}`, padding: "8px 14px", background: "#F0EBF8", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#3f2a4e", lineHeight: 1.6 } as React.CSSProperties,
  tableWrap: { overflowX: "auto" as const, margin: "12px 0" },
  table: { width: "100%", borderCollapse: "collapse" as const, fontSize: 12.5 },
  th: { textAlign: "left" as const, padding: "6px 9px", fontWeight: 500, color: "#666", borderBottom: "0.5px solid #e5e5e5", whiteSpace: "nowrap" as const },
  td: { padding: "6px 9px", color: "#555", verticalAlign: "top" as const },
  listenBtn: { fontSize: 12, padding: "5px 14px", border: `0.5px solid ${VIOLET}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: VIOLET, marginTop: 8 } as React.CSSProperties,
  scoreBox: { border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "12px 14px", margin: "12px 0", background: "#fff" } as React.CSSProperties,
};

// ─── Blocs « exemple gravé » + bouton d'écoute ──────────────────────────────────

/** Exemple à 1-2 voix (contrepoint) : gravé sans silence parasite, sans armure (modal). */
function ContrepointExample({ voices, listenLabel, pianoRef }: {
  voices: CpVoixData[];
  listenLabel: string;
  pianoRef: React.RefObject<PianoPlayerRef | null>;
}) {
  const xml = useMemo(() => contrepointVersMusicXML(voices.map(toCpVoix), { showKeySignature: false }), [voices]);
  return (
    <div style={S.scoreBox}>
      <StudioScore musicxml={xml} />
      <button onClick={() => playContrepoint(pianoRef, voices)} style={S.listenBtn}>🔊 {listenLabel}</button>
    </div>
  );
}

/** Exemple à 3-4 voix (cadence) : grand staff SATB, modal (armure masquée, ficta écrite). */
function SatbExample({ voicings, listenLabel, pianoRef }: {
  voicings: Voicing[];
  listenLabel: string;
  pianoRef: React.RefObject<PianoPlayerRef | null>;
}) {
  const xml = useMemo(() => satbVersMusicXML(toMeasures(voicings), "C", false), [voicings]);
  return (
    <div style={S.scoreBox}>
      <StudioScore musicxml={xml} />
      <button onClick={() => playProg(pianoRef, voicings)} style={S.listenBtn}>🔊 {listenLabel}</button>
    </div>
  );
}

// ─── Composant ───────────────────────────────────────────────────────────────────

const SECTIONS = ["intro", "modes", "melodie", "contrepoint", "dissonance", "cadences", "quiz"] as const;

export default function Cours43() {
  const i18n = useCoursI18n("cours43");
  const c = useCoursContent<Cours43Locale>(cours43Content);
  const pianoRef = useRef<PianoPlayerRef>(null);

  const [sec, setSec] = useState<string>("intro");
  const [openEx, setOpenEx] = useState<number | null>(null);
  const [showBonus, setShowBonus] = useState(false);

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
        composer="Giovanni Pierluigi da Palestrina"
        period="v. 1525–1594"
        emoji="⛪"
        concept={c.maitreConcept}
        anecdote={c.maitreAnecdote}
        lesson={c.maitreLesson}
        accentColor={VIOLET}
      />

      {/* Nav */}
      <nav style={S.nav}>
        {SECTIONS.map((id) => (
          <button key={id} style={S.pill(sec === id)} onClick={() => setSec(id)}>
            {i18n.sectionLabel(id)}
          </button>
        ))}
      </nav>

      {/* ══ 1. LE STYLE PALESTRINA ══ */}
      {sec === "intro" && (
        <div>
          <h2 style={S.h2}>{c.introH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.introP1 }} />
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.introP2 }} />
          <div style={S.info} dangerouslySetInnerHTML={{ __html: c.introJeppesenBox }} />
        </div>
      )}

      {/* ══ 2. LES MODES ══ */}
      {sec === "modes" && (
        <div>
          <h2 style={S.h2}>{c.modesH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.modesP1 }} />

          <div style={{ fontSize: 11, color: "#999", marginBottom: 4 }}>{c.modesTableCaption}</div>
          <div style={S.tableWrap}>
            <table style={S.table}>
              <thead>
                <tr>{c.modesHeaders.map((hh) => <th key={hh} style={S.th}>{hh}</th>)}</tr>
              </thead>
              <tbody>
                {c.modesRows.map((r, i) => (
                  <tr key={r.num} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 ? "#fafafa" : "#fff" }}>
                    <td style={{ ...S.td, fontFamily: "monospace", color: VIOLET }}>{r.num}</td>
                    <td style={{ ...S.td, fontWeight: 600, color: "#111" }}>{r.nom}</td>
                    <td style={S.td}>{r.type}</td>
                    <td style={{ ...S.td, fontWeight: 600, color: VIOLET }}>{r.finale}</td>
                    <td style={{ ...S.td, whiteSpace: "nowrap" }}>{r.ambitus}</td>
                    <td style={S.td}>{r.teneur}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.tip} dangerouslySetInnerHTML={{ __html: c.teneurRuleBox }} />
          <div style={S.info} dangerouslySetInnerHTML={{ __html: c.pointsClesBox }} />
        </div>
      )}

      {/* ══ 3. LA LIGNE MÉLODIQUE ══ */}
      {sec === "melodie" && (
        <div>
          <h2 style={S.h2}>{c.melodieH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.melodieP1 }} />

          <h3 style={S.h3}>{c.reglesTitle}</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
            {c.reglesMelodiques.map((step, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 10, padding: "10px 14px", borderRadius: 8, background: i % 2 === 0 ? "#fafafa" : "#fff", border: "0.5px solid #f0f0f0" }}>
                <div style={{ fontSize: 13, color: VIOLET, fontWeight: 700, marginTop: 1 }}>{i + 1}.</div>
                <div style={{ fontSize: 13, color: "#444", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: step }} />
              </div>
            ))}
          </div>

          <div style={{ fontSize: 11, color: "#999", marginBottom: 4 }}>{c.sautsTableCaption}</div>
          <div style={S.tableWrap}>
            <table style={S.table}>
              <thead>
                <tr>{c.sautsHeaders.map((hh) => <th key={hh} style={S.th}>{hh}</th>)}</tr>
              </thead>
              <tbody>
                {c.sautsRows.map((r, i) => {
                  const bad = /interdit|forbidden|verboten|prohibido|vietato|proibido/i.test(r.statut);
                  return (
                    <tr key={i} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 ? "#fafafa" : "#fff" }}>
                      <td style={{ ...S.td, fontWeight: 600, color: "#111" }}>{r.intervalle}</td>
                      <td style={{ ...S.td, color: bad ? "#A32D2D" : "#0F6E56" }}>{r.statut}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>{c.cantusH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.cantusIntro }} />
          <ContrepointExample voices={CANTUS_MODELE} listenLabel={c.listenBtn} pianoRef={pianoRef} />
          <div style={S.tip} dangerouslySetInnerHTML={{ __html: c.cantusAnalyse }} />
        </div>
      )}

      {/* ══ 4. CONSONANCES & 2 VOIX ══ */}
      {sec === "contrepoint" && (
        <div>
          <h2 style={S.h2}>{c.contrepointH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.consonancesP1 }} />

          <h3 style={S.h3}>{c.conduiteTitle}</h3>
          <ul style={{ fontSize: 13.5, color: "#555", lineHeight: 1.8, paddingLeft: 20, marginBottom: "1rem" }}>
            {c.conduiteRegles.map((it, i) => <li key={i} dangerouslySetInnerHTML={{ __html: it }} />)}
          </ul>

          <h3 style={S.h3}>{c.exempleH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.exempleIntro }} />
          <ContrepointExample voices={EX_PREMIERE} listenLabel={c.listenBtn} pianoRef={pianoRef} />
          <div style={S.tip} dangerouslySetInnerHTML={{ __html: c.exempleAnalyse }} />

          <h3 style={S.h3}>{c.fleuriH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.fleuriP }} />
          <ContrepointExample voices={EX_FLEURI} listenLabel={c.listenBtn} pianoRef={pianoRef} />
          <div style={S.tip} dangerouslySetInnerHTML={{ __html: c.fleuriAnalyse }} />
        </div>
      )}

      {/* ══ 5. LA DISSONANCE ══ */}
      {sec === "dissonance" && (
        <div>
          <h2 style={S.h2}>{c.dissonanceH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.dissonanceP1 }} />

          <h3 style={S.h3}>{c.passageH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.passageP }} />
          <ContrepointExample voices={EX_PASSAGE} listenLabel={c.listenBtn} pianoRef={pianoRef} />
          <ContrepointExample voices={EX_BRODERIE} listenLabel={c.listenBtn} pianoRef={pianoRef} />

          <h3 style={S.h3}>{c.cambiataH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.cambiataP }} />
          <ContrepointExample voices={EX_CAMBIATA} listenLabel={c.listenBtn} pianoRef={pianoRef} />

          <h3 style={S.h3}>{c.retardH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.retardP1 }} />
          <div style={{ fontSize: 11, color: "#999", marginBottom: 4 }}>{c.retardTableCaption}</div>
          <div style={S.tableWrap}>
            <table style={S.table}>
              <thead>
                <tr>{c.retardHeaders.map((hh) => <th key={hh} style={S.th}>{hh}</th>)}</tr>
              </thead>
              <tbody>
                {c.retardRows.map((r, i) => (
                  <tr key={r.type} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 ? "#fafafa" : "#fff" }}>
                    <td style={{ ...S.td, fontWeight: 600, color: VIOLET }}>{r.type}</td>
                    <td style={S.td}>{r.prep}</td>
                    <td style={{ ...S.td, color: "#A32D2D" }}>{r.percussion}</td>
                    <td style={S.td}>{r.resolution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ContrepointExample voices={EX_RETARD76} listenLabel={c.listenBtn} pianoRef={pianoRef} />
          <ContrepointExample voices={EX_RETARD43} listenLabel={c.listenBtn} pianoRef={pianoRef} />
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.retardP2 }} />
        </div>
      )}

      {/* ══ 6. CADENCES MODALES ══ */}
      {sec === "cadences" && (
        <div>
          <h2 style={S.h2}>{c.cadencesH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.cadencesP1 }} />

          <h3 style={S.h3}>{c.clausuleTitle}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.clausuleP }} />

          <h3 style={S.h3}>{c.dorienH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.dorienIntro }} />
          <SatbExample voicings={EX_DORIEN} listenLabel={c.listenBtn} pianoRef={pianoRef} />
          <div style={S.tip} dangerouslySetInnerHTML={{ __html: c.dorienAnalyse }} />

          <h3 style={S.h3}>{c.phrygienH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.phrygienIntro }} />
          <SatbExample voicings={EX_PHRYGIEN} listenLabel={c.listenBtn} pianoRef={pianoRef} />
          <div style={S.tip} dangerouslySetInnerHTML={{ __html: c.phrygienAnalyse }} />

          <div style={S.info} dangerouslySetInnerHTML={{ __html: c.imitationBox }} />
        </div>
      )}

      {/* ══ 7. ENTRAÎNEMENT — méthode, exercices gravés + quiz ══ */}
      {sec === "quiz" && (
        <div>
          <h2 style={S.h2}>{c.entrainH2}</h2>

          <h3 style={S.h3}>{c.methodeH3}</h3>
          <ol style={{ fontSize: 14, color: "#555", lineHeight: 1.8, paddingLeft: 20, marginBottom: "1rem" }}>
            {c.methodeSteps.map((step, i) => <li key={i} dangerouslySetInnerHTML={{ __html: step }} />)}
          </ol>

          <h3 style={S.h3}>{c.exercicesH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.exercicesIntro }} />

          {c.exercices.map((ex, i) => (
            <div key={i} style={{ border: "0.5px solid #e8e3db", borderRadius: 10, padding: "12px 14px", marginBottom: 8, background: "#fff" }}>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: "#111", marginBottom: 4 }}>{ex.titre}</div>
              <div style={{ fontSize: 13, color: "#444", marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: ex.consigne }} />
              <button
                onClick={() => setOpenEx(openEx === i ? null : i)}
                style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${VIOLET}`, borderRadius: 20, cursor: "pointer", background: openEx === i ? "#F0EBF8" : "transparent", color: VIOLET }}
              >
                {openEx === i ? c.masquerCorrige : c.voirCorrige}
              </button>
              {openEx === i && (
                <div style={{ marginTop: 10 }}>
                  <div style={{ fontSize: 11, color: "#999", marginBottom: 4 }}>{c.corrigeLabel}</div>
                  {EX_CORRIGES[i].kind === "cp"
                    ? <ContrepointExample voices={(EX_CORRIGES[i] as { data: CpVoixData[] }).data} listenLabel={c.listenBtn} pianoRef={pianoRef} />
                    : <SatbExample voicings={(EX_CORRIGES[i] as { data: Voicing[] }).data} listenLabel={c.listenBtn} pianoRef={pianoRef} />}
                  <div style={{ fontSize: 12, color: "#666", lineHeight: 1.55, marginTop: 4 }} dangerouslySetInnerHTML={{ __html: ex.controle }} />
                </div>
              )}
            </div>
          ))}

          <h3 style={S.h3}>{c.quizH3}</h3>
          {done ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>{scr >= 8 ? "⛪" : scr >= 6 ? "👍" : "💪"}</div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>{i18n.t("score")} : {scr} / {QUIZ_COUNT}</div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>{i18n.quizMessage(scr, QUIZ_COUNT)}</div>
              <button onClick={reset} style={{ fontSize: 13, padding: "8px 20px", border: `0.5px solid ${VIOLET}`, borderRadius: 20, cursor: "pointer", background: "#F0EBF8", color: VIOLET }}>{i18n.newQ}</button>
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

          {/* Question bonus */}
          <div style={{ ...S.tip, marginTop: 20 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: VIOLET, marginBottom: 4 }}>{c.bonusLabel}</div>
            <div style={{ fontSize: 13, color: "#3f2a4e", marginBottom: 8 }}>{c.bonusQ}</div>
            <button onClick={() => setShowBonus((v) => !v)} style={{ fontSize: 12, padding: "4px 12px", border: `0.5px solid ${VIOLET}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: VIOLET }}>
              {c.bonusToggle}
            </button>
            {showBonus && <div style={{ fontSize: 13, color: "#3f2a4e", lineHeight: 1.6, marginTop: 8 }} dangerouslySetInnerHTML={{ __html: c.bonusA }} />}
          </div>
        </div>
      )}
    </div>
  );
}

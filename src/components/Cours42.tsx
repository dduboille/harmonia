"use client";

/**
 * Cours42.tsx
 * Harmonia · Niveau 3 (≈ Licence L3) · Cours 42 — Harmonisation au clavier & basse chiffrée
 *
 * Premier cours « niveau licence ». Sept sections calquées sur la spec validée :
 *  1. La basse chiffrée      — définition + distinction basse chiffrée / basse donnée
 *  2. Le code                — table de référence des chiffrages + altérations
 *  3. Réaliser à 4 voix      — méthode en 3 temps + exemple gravé (Verovio)
 *  4. Au clavier             — disposition main gauche / main droite
 *  5. Marches & formules     — 6/4 cadentiel, retard 4-3, marche de sixtes (gravés)
 *  6. Applications           — déchiffrage d'un extrait + corrigé
 *  7. Entraînement           — exercices SATB (corrigés gravés) + quiz
 *
 * Conventions Harmonia :
 *  - Contenu (prose, tables, quiz, exercices) : locale-clé via useCoursContent(cours42Content).
 *  - Coque i18n (badge/titre/sous-titre/sections/quiz) : useCoursI18n("cours42").
 *  - Audio : PianoPlayer en noms de notes FRANÇAIS (Do Ré Mi…).
 *  - Gravure : StudioScore (Verovio) alimenté par satb-vers-musicxml — jamais de SVG à la main.
 */

import React, { useMemo, useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { cours42Content, type Cours42Locale } from "@/data/cours42Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";
import StudioScore from "@/components/StudioScore";
import { satbVersMusicXML } from "@/lib/satb-vers-musicxml";
import type { Measure, NoteEntry, NoteName } from "@/lib/satb-rules";

// ─── Données musicales des exemples gravés (indépendantes de la langue) ─────────
// Noms de notes en solfège FR ; l'octave suit la convention PianoPlayer (Do4 = do central).
// Une case null = voix qui se tait (marche de sixtes à 3 voix réelles → ténor tacet).

interface Voicing { s: string | null; a: string | null; t: string | null; b: string | null; }

// Section 3 — exemple entièrement réalisé : I – IV – I6/4 – V – I
const EX_REALISER: Voicing[] = [
  { s: "Sol4", a: "Do4", t: "Mi3", b: "Do3" },
  { s: "Fa4", a: "Do4", t: "La3", b: "Fa3" },
  { s: "Mi4", a: "Do4", t: "Sol3", b: "Sol3" },
  { s: "Ré4", a: "Si3", t: "Sol3", b: "Sol3" },
  { s: "Mi4", a: "Do4", t: "Sol3", b: "Do3" },
];

// Section 5 — 6/4 cadentiel → V → I
const EX_SIXQUATRE: Voicing[] = [
  { s: "Mi4", a: "Do4", t: "Sol3", b: "Sol3" },
  { s: "Ré4", a: "Si3", t: "Sol3", b: "Sol3" },
  { s: "Mi4", a: "Do4", t: "Sol3", b: "Do3" },
];

// Section 5 — retard 4-3 : préparation, percussion, résolution, tonique
const EX_RETARD: Voicing[] = [
  { s: "Sol4", a: "Do4", t: "Mi3", b: "Do3" },
  { s: "Sol4", a: "Do4", t: "Ré3", b: "Sol2" },
  { s: "Sol4", a: "Si3", t: "Ré3", b: "Sol2" },
  { s: "Sol4", a: "Do4", t: "Mi3", b: "Do3" },
];

// Section 5 — marche de sixtes (3 voix réelles, faux-bourdon) : IV6 – iii6 – ii6 – I6
const EX_SIXTES: Voicing[] = [
  { s: "Fa4", a: "Do4", t: null, b: "La3" },
  { s: "Mi4", a: "Si3", t: null, b: "Sol3" },
  { s: "Ré4", a: "La3", t: null, b: "Fa3" },
  { s: "Do4", a: "Sol3", t: null, b: "Mi3" },
];

// Section 7 — corrigés gravés des quatre exercices (même ordre que content.exercices)
const EX_CORRIGES: Voicing[][] = [
  // Exercice 1 — I – V – I
  [
    { s: "Mi4", a: "Do4", t: "Sol3", b: "Do3" },
    { s: "Ré4", a: "Si3", t: "Sol3", b: "Sol3" },
    { s: "Mi4", a: "Do4", t: "Sol3", b: "Do3" },
  ],
  // Exercice 2 — I – V6/5 – I
  [
    { s: "Do4", a: "Sol3", t: "Mi3", b: "Do3" },
    { s: "Ré4", a: "Sol3", t: "Fa3", b: "Si2" },
    { s: "Do4", a: "Sol3", t: "Mi3", b: "Do3" },
  ],
  // Exercice 3 — IV – I6/4 – V – I
  [
    { s: "Fa4", a: "Do4", t: "La3", b: "Fa3" },
    { s: "Mi4", a: "Do4", t: "Sol3", b: "Sol3" },
    { s: "Ré4", a: "Si3", t: "Sol3", b: "Sol3" },
    { s: "Mi4", a: "Do4", t: "Sol3", b: "Do3" },
  ],
  // Exercice 4 — marche de sixtes IV6 – iii6 – ii6 – I6 (3 voix)
  EX_SIXTES,
];

// ─── Conversion solfège FR → forme moteur (satb-rules) et spécifications audio ──

const FR_TO_EN: Record<string, string> = { Do: "C", "Ré": "D", Mi: "E", Fa: "F", Sol: "G", La: "A", Si: "B" };

/** « Sol4 » → { fr: "Sol", oct: 4 } ; « Sol#3 » → { fr: "Sol#", oct: 3 }. */
function splitTok(tok: string): { fr: string; oct: number } {
  return { fr: tok.slice(0, -1), oct: parseInt(tok.slice(-1), 10) };
}

/** Une case de voix → NoteEntry (nom anglais pour satb-vers-musicxml). */
function toEntry(tok: string | null): NoteEntry {
  if (!tok) return { name: null, octave: 4 };
  const { fr, oct } = splitTok(tok);
  const acc = fr.endsWith("#") ? "#" : fr.endsWith("b") ? "b" : "";
  const base = acc ? fr.slice(0, -1) : fr;
  return { name: ((FR_TO_EN[base] ?? base) + acc) as NoteName, octave: oct };
}

function toMeasures(vs: Voicing[]): Measure[] {
  return vs.map((v) => ({ soprano: toEntry(v.s), alto: toEntry(v.a), tenor: toEntry(v.t), bass: toEntry(v.b) }));
}

/** Spécifications audio FR (grave → aigu) d'une colonne, pour PianoPlayer.playVoicing. */
function toFrSpecs(v: Voicing): string[] {
  return [v.b, v.t, v.a, v.s]
    .filter((x): x is string => Boolean(x))
    .map((tok) => { const { fr, oct } = splitTok(tok); return `${fr}:${oct}`; });
}

function playProg(ref: React.RefObject<PianoPlayerRef | null>, vs: Voicing[], gap = 1150) {
  vs.forEach((v, i) => setTimeout(() => ref.current?.playVoicing(toFrSpecs(v), { duration: 1.5 }), i * gap));
}

// ─── Quiz ──────────────────────────────────────────────────────────────────────

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

// ─── Styles ─────────────────────────────────────────────────────────────────────

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

// ─── Bloc « exemple gravé » (Verovio) + bouton d'écoute ─────────────────────────

function EngravedExample({ voicings, caption, listenLabel, pianoRef }: {
  voicings: Voicing[];
  caption?: string;
  listenLabel: string;
  pianoRef: React.RefObject<PianoPlayerRef | null>;
}) {
  const xml = useMemo(() => satbVersMusicXML(toMeasures(voicings), "C", true), [voicings]);
  return (
    <div style={S.scoreBox}>
      <StudioScore musicxml={xml} />
      {caption && <div style={{ fontSize: 12, color: "#888", marginTop: 6, lineHeight: 1.55 }} dangerouslySetInnerHTML={{ __html: caption }} />}
      <button onClick={() => playProg(pianoRef, voicings)} style={S.listenBtn}>🔊 {listenLabel}</button>
    </div>
  );
}

// ─── Composant ───────────────────────────────────────────────────────────────────

const SECTIONS = ["intro", "code", "realiser", "clavier", "marches", "applications", "quiz"] as const;

export default function Cours42() {
  const i18n = useCoursI18n("cours42");
  const c = useCoursContent<Cours42Locale>(cours42Content);
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

  const playChord = (specs: string[]) => pianoRef.current?.playVoicing(specs, { duration: 1.8 });

  return (
    <div style={S.wrap}>
      {/* Piano caché — audio uniquement (noms FR) */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={4} startOctave={2} showLabels={false} />
      </div>

      {/* Header */}
      <div style={S.hdr}>
        <span style={S.badge}>{i18n.badge}</span>
        <h1 style={S.h1}>{i18n.title}</h1>
        <p style={S.sub}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Johann Sebastian Bach"
        period="1685–1750"
        emoji="🎹"
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

      {/* ══ 1. LA BASSE CHIFFRÉE ══ */}
      {sec === "intro" && (
        <div>
          <h2 style={S.h2}>{c.introH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.introP1 }} />
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.introP2 }} />
          <div style={S.info} dangerouslySetInnerHTML={{ __html: c.introDistinctionBox }} />
        </div>
      )}

      {/* ══ 2. LE CODE DES CHIFFRAGES ══ */}
      {sec === "code" && (
        <div>
          <h2 style={S.h2}>{c.codeH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.codeP1 }} />

          <div style={{ fontSize: 11, color: "#999", marginBottom: 4 }}>{c.refCaption}</div>
          <div style={S.tableWrap}>
            <table style={S.table}>
              <thead>
                <tr>{c.refHeaders.map((h) => <th key={h} style={S.th}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {c.refRows.map((r, i) => (
                  <tr key={r.accord + i} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 ? "#fafafa" : "#fff" }}>
                    <td style={{ ...S.td, fontFamily: "monospace", fontWeight: 600, color: VIOLET, whiteSpace: "nowrap" }}>{r.chiffrage}</td>
                    <td style={S.td}>{r.nom}</td>
                    <td style={S.td}>{r.position}</td>
                    <td style={S.td}>{r.intervalles}</td>
                    <td style={{ ...S.td, whiteSpace: "nowrap" }}>{r.exemple}</td>
                    <td style={{ ...S.td, fontWeight: 600, color: "#111" }}>{r.accord}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.tip} dangerouslySetInnerHTML={{ __html: c.memoBox }} />

          <h3 style={S.h3}>{c.altH3}</h3>
          <div style={S.tableWrap}>
            <table style={S.table}>
              <thead>
                <tr>{c.altHeaders.map((h) => <th key={h} style={S.th}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {c.altRows.map((r, i) => (
                  <tr key={i} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 ? "#fafafa" : "#fff" }}>
                    <td style={{ ...S.td, fontWeight: 600, color: "#111" }}>{r.signe}</td>
                    <td style={S.td}>{r.sens}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.warn} dangerouslySetInnerHTML={{ __html: c.altExampleBox }} />
          <div style={{ background: "#fafafa", border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "12px 14px" }}>
            <div style={{ fontSize: 12, color: "#999", marginBottom: 8 }}>{c.altAudioLabel}</div>
            <button onClick={() => playChord(["Mi:3", "Sol#:3", "Si:3"])} style={{ ...S.listenBtn, marginTop: 0 }}>🔊 {c.altAudioBtn}</button>
          </div>
        </div>
      )}

      {/* ══ 3. RÉALISER À QUATRE VOIX ══ */}
      {sec === "realiser" && (
        <div>
          <h2 style={S.h2}>{c.realiserH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.realiserP1 }} />

          <h3 style={S.h3}>{c.methodStepsTitle}</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
            {c.methodSteps.map((step, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 10, padding: "10px 14px", borderRadius: 8, background: i % 2 === 0 ? "#fafafa" : "#fff", border: "0.5px solid #f0f0f0" }}>
                <div style={{ fontSize: 13, color: VIOLET, fontWeight: 700, marginTop: 1 }}>{i + 1}.</div>
                <div style={{ fontSize: 13, color: "#444", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: step }} />
              </div>
            ))}
          </div>

          <h3 style={S.h3}>{c.exempleH3}</h3>
          <div style={{ fontSize: 13, color: "#444", marginBottom: 4 }}><strong>{c.exempleConsigne}</strong></div>
          <div style={{ fontSize: 13, color: VIOLET, marginBottom: 4 }}>{c.exempleEnchainement}</div>
          <EngravedExample voicings={EX_REALISER} caption={c.scoreHint} listenLabel={c.listenBtn} pianoRef={pianoRef} />
          <div style={S.tip} dangerouslySetInnerHTML={{ __html: c.exempleControles }} />
        </div>
      )}

      {/* ══ 4. AU CLAVIER ══ */}
      {sec === "clavier" && (
        <div>
          <h2 style={S.h2}>{c.clavierH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.clavierP1 }} />
          <ul style={{ fontSize: 14, color: "#555", lineHeight: 1.8, paddingLeft: 20, marginBottom: "1rem" }}>
            <li dangerouslySetInnerHTML={{ __html: c.clavierMGItem }} />
            <li dangerouslySetInnerHTML={{ __html: c.clavierMDItem }} />
          </ul>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.clavierP2 }} />

          <div style={{ fontSize: 11, color: "#999", marginBottom: 4 }}>{c.clavierTableCaption}</div>
          <div style={S.tableWrap}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}></th>
                  {c.clavierCols.map((col, i) => <th key={i} style={{ ...S.th, textAlign: "center" }}>{col}</th>)}
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "0.5px solid #f0f0f0" }}>
                  <td style={{ ...S.td, fontWeight: 600, color: "#111" }}>{c.clavierRowMDLabel}</td>
                  {c.clavierMD.map((v, i) => <td key={i} style={{ ...S.td, textAlign: "center", fontFamily: "monospace", color: VIOLET }}>{v}</td>)}
                </tr>
                <tr style={{ background: "#fafafa" }}>
                  <td style={{ ...S.td, fontWeight: 600, color: "#111" }}>{c.clavierRowMGLabel}</td>
                  {c.clavierMG.map((v, i) => <td key={i} style={{ ...S.td, textAlign: "center", fontFamily: "monospace" }}>{v}</td>)}
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ background: "#fafafa", border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "12px 14px", marginBottom: 12 }}>
            <div style={{ fontSize: 12, color: "#999", marginBottom: 8 }}>{c.clavierAudioLabel}</div>
            <button
              onClick={() => c.clavierMD.forEach((chord, i) => setTimeout(() => {
                const specs = [c.clavierMG[i], ...chord.split("-")].map((tok) => { const { fr, oct } = splitTok(tok); return `${fr}:${oct}`; });
                pianoRef.current?.playVoicing(specs, { duration: 1.5 });
              }, i * 1150))}
              style={{ ...S.listenBtn, marginTop: 0 }}
            >🔊 {c.clavierListenBtn}</button>
          </div>

          <div style={S.tip} dangerouslySetInnerHTML={{ __html: c.clavierDiffBox }} />
        </div>
      )}

      {/* ══ 5. MARCHES & FORMULES ══ */}
      {sec === "marches" && (
        <div>
          <h2 style={S.h2}>{c.marchesH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.marchesP1 }} />

          <h3 style={S.h3}>{c.sixQuatreH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.sixQuatreP }} />
          <EngravedExample voicings={EX_SIXQUATRE} caption={c.sixQuatreCaption} listenLabel={c.listenBtn} pianoRef={pianoRef} />

          <h3 style={S.h3}>{c.retardH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.retardP1 }} />
          <EngravedExample voicings={EX_RETARD} caption={c.retardCaption} listenLabel={c.listenBtn} pianoRef={pianoRef} />
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.retardP2 }} />

          <h3 style={S.h3}>{c.sixtesH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.sixtesP1 }} />
          <EngravedExample voicings={EX_SIXTES} caption={c.sixtesCaption} listenLabel={c.listenBtn} pianoRef={pianoRef} />
          <div style={S.warn} dangerouslySetInnerHTML={{ __html: c.sixtesNote }} />

          <h3 style={S.h3}>{c.progH3}</h3>
          <ul style={{ fontSize: 13.5, color: "#555", lineHeight: 1.8, paddingLeft: 20 }}>
            {c.progItems.map((it, i) => <li key={i} dangerouslySetInnerHTML={{ __html: it }} />)}
          </ul>
        </div>
      )}

      {/* ══ 6. APPLICATIONS ══ */}
      {sec === "applications" && (
        <div>
          <h2 style={S.h2}>{c.appliH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.appliP1 }} />

          <h3 style={S.h3}>{c.appliStepsH3}</h3>
          <ol style={{ fontSize: 14, color: "#555", lineHeight: 1.8, paddingLeft: 20, marginBottom: "1rem" }}>
            {c.appliSteps.map((step, i) => <li key={i} dangerouslySetInnerHTML={{ __html: step }} />)}
          </ol>

          <div style={{ fontSize: 13, color: "#444", marginBottom: 2 }}><strong>{c.extraitLabel}</strong></div>
          <div style={{ fontSize: 13, color: VIOLET, marginBottom: 10 }}>{c.extraitConsigne}</div>
          <div style={S.tip} dangerouslySetInnerHTML={{ __html: c.corrigeBox }} />

          <h3 style={S.h3}>{c.examenH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.examenP1 }} />
        </div>
      )}

      {/* ══ 7. ENTRAÎNEMENT — exercices gravés + quiz ══ */}
      {sec === "quiz" && (
        <div>
          <h2 style={S.h2}>{c.entrainH2}</h2>

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
                  <EngravedExample voicings={EX_CORRIGES[i]} listenLabel={c.listenBtn} pianoRef={pianoRef} />
                  <div style={{ fontSize: 12, color: "#666", lineHeight: 1.55, marginTop: 4 }} dangerouslySetInnerHTML={{ __html: ex.controle }} />
                </div>
              )}
            </div>
          ))}

          <h3 style={S.h3}>{c.quizH3}</h3>
          {done ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>{scr >= 8 ? "🎹" : scr >= 6 ? "👍" : "💪"}</div>
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

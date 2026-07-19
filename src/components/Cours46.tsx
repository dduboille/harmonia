"use client";

/**
 * Cours46.tsx
 * Harmonia · Niveau 3 (≈ L3 · DNSPM) · Cours 46 — Analyser une œuvre qu'on va jouer
 *
 * Premier cours du parcours DNSPM (diplôme d'interprète) : l'analyse AU SERVICE
 * de l'interprétation, selon le fil « analyser → décider → entendre ». Sept
 * sections calquées sur la spec validée :
 *  1. Pourquoi analyser ?   — décisions fondées vs improvisées + règle du cours
 *  2. La carte de l'œuvre   — forme, proportions, plan tonal (table du menuet)
 *  3. Le squelette          — phrase de 8 mesures gravée/jouée + table
 *                             événement → décision (LE cœur du cours)
 *  4. Le phrasé             — carrures, respirations, conventions (→ ∨ (∨) —),
 *                             la phrase de la section 3 annotée
 *  5. Les voix              — SATB 4 accords : l'alto isolé PUIS en contexte
 *                             (le contraste est la leçon)
 *  6. La fiche              — les 5 rubriques + fiche modèle dépliable
 *  7. Entraînement          — méthode 5 passes, 2 exercices de fiche (corrigés
 *                             dépliables), exercice final /analyse-partition
 *                             (check-list visuelle) + quiz 10 questions
 *
 * Gravure (Verovio via StudioScore), trois graveurs selon la matière :
 *  - Piece (piece-vers-musicxml) : la phrase de la section 3 — grand staff
 *    mélodie + basse avec RYTHMES RÉELS (noires, blanches, rondes). Le graveur
 *    SATB est exclu (rondes uniquement) ; le graveur contrepoint aurait suffi,
 *    mais le grand staff piano (mélodie en clé de sol, basse en clé de fa)
 *    est la lecture voulue pour un cours d'interprète.
 *  - SATB en rondes (satb-vers-musicxml) : les 4 accords de la section 5
 *    (un accord par mesure, rondes — exactement le domaine de ce graveur).
 *  - 1 voix (contrepoint-vers-musicxml) : la ligne d'alto ISOLÉE de la
 *    section 5 (Do4 – Si3 – Si♭3 – La3 en rondes), pour que l'élève entende
 *    la voix intérieure nue avant de la réentendre dans les accords.
 * Audio : PianoPlayer en noms FRANÇAIS via lib/cours-audio (specAudio /
 * noteAudio) — l'audio sonne à l'octave de la gravure (Do4 = do central).
 */

import React, { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { cours46Content, type Cours46Locale } from "@/data/cours46Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";
import StudioScore from "@/components/StudioScore";
import { satbVersMusicXML } from "@/lib/satb-vers-musicxml";
import { contrepointVersMusicXML, type CpVoix } from "@/lib/contrepoint-vers-musicxml";
import { pieceVersMusicXML } from "@/lib/piece-vers-musicxml";
import { specAudio, noteAudio } from "@/lib/cours-audio";
import type { Piece, Note as PieceNote, Hauteur, BaseDuree, LettreNote } from "@/lib/piece-model";
import type { Measure, NoteEntry, NoteName } from "@/lib/satb-rules";

// ─── Données musicales des exemples (invariantes : mêmes notes dans les 6 langues) ──
// Noms de notes en solfège FR à la convention de GRAVURE (Do4 = do central).

interface Tok { t: string; d: BaseDuree }
const n = (t: string): Tok => ({ t, d: "noire" });
const b = (t: string): Tok => ({ t, d: "blanche" });
const r = (t: string): Tok => ({ t, d: "ronde" });

// Section 3 — phrase de 8 mesures en Do majeur, 4/4 (spec, table « Mélodie »).
// Degrés : I | I | VI | IV | II6 | I6/4 | V7 | I. Ré4, Fa4, Si4 = notes de passage.
const PHRASE_MELODIE: Tok[][] = [
  [n("Do4"), n("Ré4"), n("Mi4"), n("Fa4")],
  [b("Sol4"), b("Mi4")],
  [b("La4"), b("Do5")],
  [n("Do5"), n("Si4"), b("La4")],
  [b("La4"), b("Ré5")],
  [r("Do5")],
  [r("Si4")],
  [r("Do5")],
];
// Basse en rondes (spec, table « Basse »).
const PHRASE_BASSE: string[] = ["Do3", "Do3", "La2", "Fa2", "Fa2", "Sol2", "Sol2", "Do3"];

// Section 5 — 4 accords SATB d'école en Do majeur : I – V – V7/IV – II6.
// L'alto descend chromatiquement Do4 – Si3 – Si♭3 – La3 (la ligne à projeter).
interface Voicing { s: string; a: string; t: string; b: string }
const SATB_VOIX: Voicing[] = [
  { s: "Sol4", a: "Do4", t: "Mi3", b: "Do3" },
  { s: "Sol4", a: "Si3", t: "Ré3", b: "Sol2" },
  { s: "Sol4", a: "Sib3", t: "Mi3", b: "Do3" },
  { s: "Ré4", a: "La3", t: "Fa3", b: "Fa2" },
];
// La ligne d'alto isolée (mêmes notes que la voix d'alto ci-dessus).
const ALTO_SEUL: string[] = ["Do4", "Si3", "Sib3", "La3"];

// ─── Conversions solfège FR → graveurs ──────────────────────────────────────────

const FR_TO_EN: Record<string, string> = { Do: "C", "Ré": "D", Mi: "E", Fa: "F", Sol: "G", La: "A", Si: "B" };

/** « Sib3 » → { fr: "Sib", oct: 3 }. */
function splitTok(tok: string): { fr: string; oct: number } {
  return { fr: tok.slice(0, -1), oct: parseInt(tok.slice(-1), 10) };
}

/** Nom FR (« Sib ») → nom moteur anglais (« Bb »). */
function frToEn(fr: string): string {
  const acc = fr.endsWith("#") ? "#" : fr.endsWith("b") ? "b" : "";
  const base = acc ? fr.slice(0, -1) : fr;
  return (FR_TO_EN[base] ?? base) + acc;
}

/** « Sib3 » → Hauteur (piece-model). */
function toHauteur(tok: string): Hauteur {
  const { fr, oct } = splitTok(tok);
  const en = frToEn(fr);
  const alteration = en.endsWith("#") ? 1 : en.endsWith("b") ? -1 : 0;
  return { lettre: en[0] as LettreNote, alteration, octave: oct };
}

/** Une note simple du modèle Piece. */
function pNote(tok: string, dur: BaseDuree): PieceNote {
  return { type: "note", hauteurs: [toHauteur(tok)], duree: { base: dur, points: 0 } };
}

/** Une case de voix SATB → NoteEntry (satb-vers-musicxml). */
function toEntry(tok: string): NoteEntry {
  const { fr, oct } = splitTok(tok);
  return { name: frToEn(fr) as NoteName, octave: oct };
}

function toMeasures(vs: Voicing[]): Measure[] {
  return vs.map((v) => ({ soprano: toEntry(v.s), alto: toEntry(v.a), tenor: toEntry(v.t), bass: toEntry(v.b) }));
}

// ─── Audio (PianoPlayer via lib/cours-audio : l'octave gravée sonne juste) ──────

/** Nombre de noires d'une durée du modèle Piece. */
const DUREE_NOIRES: Record<BaseDuree, number> = { ronde: 4, blanche: 2, noire: 1, croche: 0.5, double: 0.25 };

/** Joue la phrase de la section 3 : mélodie rythmée + basse en rondes. */
function playPhrase(ref: React.RefObject<PianoPlayerRef | null>, pas = 0.55) {
  let t = 0;
  PHRASE_MELODIE.flat().forEach((tok) => {
    const d = DUREE_NOIRES[tok.d] * pas;
    const { nom, octave } = noteAudio(tok.t);
    ref.current?.playNote(nom, octave, { startTime: t, duration: d * 0.95 });
    t += d;
  });
  PHRASE_BASSE.forEach((tok, i) => {
    const { nom, octave } = noteAudio(tok);
    ref.current?.playNote(nom, octave, { startTime: i * 4 * pas, duration: 4 * pas * 0.95, velocity: 0.55 });
  });
}

/** Colonne SATB → specs « Nom:octave » du grave à l'aigu. */
function toSpecs(v: Voicing): string[] {
  return [v.b, v.t, v.a, v.s].map(specAudio);
}

/** Joue la progression SATB, un accord toutes les gapMs millisecondes. */
function playProg(ref: React.RefObject<PianoPlayerRef | null>, vs: Voicing[], gapMs = 1300, dureeS = 1.7) {
  vs.forEach((v, i) => setTimeout(() => ref.current?.playVoicing(toSpecs(v), { duration: dureeS }), i * gapMs));
}

/** Joue la ligne d'alto seule (une ronde ≈ 1,2 s — même allure que les accords). */
function playAlto(ref: React.RefObject<PianoPlayerRef | null>, pas = 1.3) {
  ALTO_SEUL.forEach((tok, i) => {
    const { nom, octave } = noteAudio(tok);
    ref.current?.playNote(nom, octave, { startTime: i * pas, duration: pas * 0.95 });
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
const ACCENT = "#8A2D3B"; // bordeaux profond — identité visuelle du cours 46 (parcours DNSPM)
const ACCENT_BG = "#F7E9EC";

// ─── Styles (repris des cours 42/43/44/45) ──────────────────────────────────────

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
  info: { borderLeft: "2px solid #185FA5", padding: "8px 14px", background: "#E6F1FB", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#0C447C", lineHeight: 1.6 } as React.CSSProperties,
  tip: { borderLeft: `2px solid ${ACCENT}`, padding: "8px 14px", background: ACCENT_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#5C1E28", lineHeight: 1.6 } as React.CSSProperties,
  warn: { borderLeft: "2px solid #BA7517", padding: "10px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "14px 0", fontSize: 13, color: "#633806", lineHeight: 1.65 } as React.CSSProperties,
  quote: { borderLeft: "2px solid #999", padding: "10px 14px", background: "#fafafa", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13.5, color: "#333", lineHeight: 1.7 } as React.CSSProperties,
  tableWrap: { overflowX: "auto" as const, margin: "12px 0" },
  table: { width: "100%", borderCollapse: "collapse" as const, fontSize: 12.5 },
  th: { textAlign: "left" as const, padding: "6px 9px", fontWeight: 500, color: "#666", borderBottom: "0.5px solid #e5e5e5", whiteSpace: "nowrap" as const },
  td: { padding: "6px 9px", color: "#555", verticalAlign: "top" as const, lineHeight: 1.55 },
  caption: { fontSize: 11, color: "#999", marginBottom: 4 } as React.CSSProperties,
  listenBtn: { fontSize: 12, padding: "5px 14px", border: `0.5px solid ${ACCENT}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: ACCENT, marginTop: 8, marginRight: 6 } as React.CSSProperties,
  scoreBox: { border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "12px 14px", margin: "12px 0", background: "#fff" } as React.CSSProperties,
  toggleBtn: (open: boolean): React.CSSProperties => ({ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${ACCENT}`, borderRadius: 20, cursor: "pointer", background: open ? ACCENT_BG : "transparent", color: ACCENT }),
} as const;

// ─── Blocs partagés ──────────────────────────────────────────────────────────────

/** Partition gravée + bouton(s) d'écoute. */
function ScoreBlock({ xml, caption, buttons }: {
  xml: string;
  caption?: string;
  buttons: { label: string; onClick: () => void }[];
}) {
  return (
    <div style={S.scoreBox}>
      {caption && <div style={S.caption} dangerouslySetInnerHTML={{ __html: caption }} />}
      <StudioScore musicxml={xml} />
      <div>
        {buttons.map((bt, i) => (
          <button key={i} onClick={bt.onClick} style={S.listenBtn}>🔊 {bt.label}</button>
        ))}
      </div>
    </div>
  );
}

/**
 * Carte-lien vers un outil de la plateforme (même motif que les bannières
 * « Pratiquer avec le Générateur SATB » de la page cours, aux couleurs du cours).
 */
function LinkCard({ href, titre, desc, go, prominent }: {
  href: string;
  titre: string;
  desc: string;
  go: string;
  prominent?: boolean;
}) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12,
        background: `linear-gradient(135deg, ${ACCENT_BG} 0%, #F2DCE2 100%)`,
        border: `0.5px solid #D8A9B3`, borderRadius: 12,
        padding: prominent ? "18px 20px" : "12px 16px", margin: "14px 0",
      }}>
        <div>
          <div style={{ fontSize: prominent ? 14 : 13, fontWeight: 600, color: ACCENT, marginBottom: 4 }}>
            ♪ {titre}
          </div>
          <div style={{ fontSize: 12, color: "#7A3A47", lineHeight: 1.5 }}>{desc}</div>
        </div>
        <div style={{ fontSize: 13, fontWeight: 600, color: ACCENT, whiteSpace: "nowrap" as const }}>{go}</div>
      </div>
    </Link>
  );
}

// ─── Composant ───────────────────────────────────────────────────────────────────

const SECTIONS = ["intro", "carte", "squelette", "phrase", "voix", "fiche", "quiz"] as const;

export default function Cours46() {
  const i18n = useCoursI18n("cours46");
  const c = useCoursContent<Cours46Locale>(cours46Content);
  const locale = useLocale();
  const pianoRef = useRef<PianoPlayerRef>(null);

  const [sec, setSec] = useState<string>("intro");
  const [openEx, setOpenEx] = useState<number | null>(null);
  const [showFiche, setShowFiche] = useState(false);
  // Check-list de l'exercice final — état LOCAL, purement visuel (aucune persistance).
  const [checks, setChecks] = useState<boolean[]>(() => Array(6).fill(false));

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

  // Gravures (mémoïsées : notes invariantes)
  // Phrase section 3 : grand staff mélodie + basse, rythmes réels (modèle Piece).
  const xmlPhrase = useMemo(() => {
    const piece: Piece = {
      armure: 0,
      chiffrage: { temps: 4, unite: 4 },
      mesures: PHRASE_MELODIE.map((mel, i) => ({
        voix: {
          soprano: mel.map((tok) => pNote(tok.t, tok.d)),
          alto: [],
          tenor: [],
          basse: [pNote(PHRASE_BASSE[i], "ronde")],
        },
      })),
    };
    return pieceVersMusicXML(piece);
  }, []);
  // Section 5 : les 4 accords SATB (rondes) et la ligne d'alto isolée (1 voix).
  const xmlSatb = useMemo(() => satbVersMusicXML(toMeasures(SATB_VOIX), "C", true), []);
  const xmlAlto = useMemo(() => {
    const voix: CpVoix = {
      clef: "sol",
      notes: ALTO_SEUL.map((tok) => {
        const { fr, oct } = splitTok(tok);
        return { name: frToEn(fr) as NoteName, octave: oct, duree: "whole" as const };
      }),
    };
    return contrepointVersMusicXML([voix], { beats: 4, beatType: 4, keySignature: "C", showKeySignature: true });
  }, []);

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
        composer="Alfred Cortot"
        period="1877–1962"
        emoji="🎼"
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

      {/* ══ 1. POURQUOI ANALYSER ? ══ */}
      {sec === "intro" && (
        <div>
          <h2 style={S.h2}>{c.introH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.introP1 }} />
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.introP2 }} />
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.introP3 }} />
          <div style={S.tip} dangerouslySetInnerHTML={{ __html: c.regleOr }} />
        </div>
      )}

      {/* ══ 2. LA CARTE DE L'ŒUVRE ══ */}
      {sec === "carte" && (
        <div>
          <h2 style={S.h2}>{c.carteH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.carteP1 }} />
          <div style={S.info} dangerouslySetInnerHTML={{ __html: c.carteP2 }} />

          <h3 style={S.h3}>{c.menuetH3}</h3>
          <div style={S.caption}>{c.menuetIntro}</div>
          <div style={S.tableWrap}>
            <table style={{ ...S.table, minWidth: 640 }}>
              <thead>
                <tr>{c.menuetHeaders.map((hh) => <th key={hh} style={S.th}>{hh}</th>)}</tr>
              </thead>
              <tbody>
                {c.menuetRows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 ? "#fafafa" : "#fff" }}>
                    <td style={{ ...S.td, fontWeight: 600, color: ACCENT, whiteSpace: "nowrap" }}>{row.section}</td>
                    <td style={{ ...S.td, whiteSpace: "nowrap" }}>{row.mesures}</td>
                    <td style={S.td} dangerouslySetInnerHTML={{ __html: row.plan }} />
                    <td style={S.td} dangerouslySetInnerHTML={{ __html: row.fonction }} />
                    <td style={S.td} dangerouslySetInnerHTML={{ __html: row.consequence }} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={S.tip} dangerouslySetInnerHTML={{ __html: c.carteConclusion }} />
        </div>
      )}

      {/* ══ 3. LE SQUELETTE HARMONIQUE ══ */}
      {sec === "squelette" && (
        <div>
          <h2 style={S.h2}>{c.squelH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.squelP1 }} />
          <LinkCard href={`/${locale}/squelette-harmonique`} titre={c.linkSquelette.titre} desc={c.linkSquelette.desc} go={c.linkGo} />

          <h3 style={S.h3}>{c.phraseH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.phraseIntro }} />
          <ScoreBlock xml={xmlPhrase} caption={c.phraseCaption}
            buttons={[{ label: c.listenBtn, onClick: () => playPhrase(pianoRef) }]} />

          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.squelP2 }} />
          <div style={S.caption}>{c.decisionsCaption}</div>
          <div style={S.tableWrap}>
            <table style={{ ...S.table, minWidth: 560 }}>
              <thead>
                <tr>{c.decisionsHeaders.map((hh) => <th key={hh} style={S.th}>{hh}</th>)}</tr>
              </thead>
              <tbody>
                {c.decisionsRows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 ? "#fafafa" : "#fff" }}>
                    <td style={{ ...S.td, fontWeight: 600, color: ACCENT, whiteSpace: "nowrap" }}>{row.evenement}</td>
                    <td style={S.td} dangerouslySetInnerHTML={{ __html: row.fait }} />
                    <td style={S.td} dangerouslySetInnerHTML={{ __html: row.decision }} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={S.tip} dangerouslySetInnerHTML={{ __html: c.squelP3 }} />
        </div>
      )}

      {/* ══ 4. LE PHRASÉ ══ */}
      {sec === "phrase" && (
        <div>
          <h2 style={S.h2}>{c.phraseeH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.phraseeP1 }} />
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.phraseeP2 }} />

          <div style={S.caption}>{c.conventionsCaption}</div>
          <div style={S.tableWrap}>
            <table style={{ ...S.table, maxWidth: 420 }}>
              <thead>
                <tr>{c.conventionsHeaders.map((hh) => <th key={hh} style={S.th}>{hh}</th>)}</tr>
              </thead>
              <tbody>
                {c.conventionsRows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 ? "#fafafa" : "#fff" }}>
                    <td style={{ ...S.td, fontWeight: 700, fontSize: 15, color: ACCENT, whiteSpace: "nowrap" }}>{row.signe}</td>
                    <td style={S.td} dangerouslySetInnerHTML={{ __html: row.sens }} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>{c.annoteeH3}</h3>
          <div style={S.quote} dangerouslySetInnerHTML={{ __html: c.annoteeP }} />
          <ScoreBlock xml={xmlPhrase} caption={c.phraseCaption}
            buttons={[{ label: c.listenBtn, onClick: () => playPhrase(pianoRef) }]} />
        </div>
      )}

      {/* ══ 5. LES VOIX ══ */}
      {sec === "voix" && (
        <div>
          <h2 style={S.h2}>{c.voixH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.voixP1 }} />

          <h3 style={S.h3}>{c.satbH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.satbIntro }} />
          <div style={S.tip} dangerouslySetInnerHTML={{ __html: c.voixEcouteTip }} />

          {/* 1. La ligne d'alto NUE — l'entendre seule d'abord */}
          <ScoreBlock xml={xmlAlto} caption={c.altoCaption}
            buttons={[{ label: c.altoBtn, onClick: () => playAlto(pianoRef) }]} />

          {/* 2. La même ligne DANS les accords — le contraste est la leçon */}
          <ScoreBlock xml={xmlSatb}
            buttons={[
              { label: c.satbBtn, onClick: () => playProg(pianoRef, SATB_VOIX) },
              { label: c.altoBtn, onClick: () => playAlto(pianoRef) },
            ]} />

          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.voixP2 }} />
          <div style={S.quote} dangerouslySetInnerHTML={{ __html: c.voixVerif }} />
        </div>
      )}

      {/* ══ 6. LA FICHE D'INTERPRÉTATION ══ */}
      {sec === "fiche" && (
        <div>
          <h2 style={S.h2}>{c.ficheH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.ficheP1 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
            {c.rubriques.map((rub, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 10, padding: "10px 14px", borderRadius: 8, background: i % 2 === 0 ? "#fafafa" : "#fff", border: "0.5px solid #f0f0f0" }}>
                <div style={{ fontSize: 13, color: ACCENT, fontWeight: 700, marginTop: 1 }}>{i + 1}.</div>
                <div style={{ fontSize: 13, color: "#444", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: rub }} />
              </div>
            ))}
          </div>

          <h3 style={S.h3}>{c.ficheModeleH3}</h3>
          <button onClick={() => setShowFiche((v) => !v)} style={S.toggleBtn(showFiche)}>
            {showFiche ? c.ficheMasquer : c.ficheVoir}
          </button>
          {showFiche && <div style={{ ...S.quote, marginTop: 10 }} dangerouslySetInnerHTML={{ __html: c.ficheModeleQuote }} />}

          <div style={S.info} dangerouslySetInnerHTML={{ __html: c.editionBox }} />
          <div style={S.warn} dangerouslySetInnerHTML={{ __html: c.humiliteBox }} />
        </div>
      )}

      {/* ══ 7. ENTRAÎNEMENT ══ */}
      {sec === "quiz" && (
        <div>
          <h2 style={S.h2}>{c.entrainH2}</h2>

          <h3 style={S.h3}>{c.methodeH3}</h3>
          <div style={S.tip} dangerouslySetInnerHTML={{ __html: c.methodeP }} />

          <h3 style={S.h3}>{c.exercicesH3}</h3>
          {c.exercices.map((ex, i) => (
            <div key={i} style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "12px 14px", marginBottom: 8, background: "#fff" }}>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: "#111", marginBottom: 4 }}>{ex.titre}</div>
              <div style={{ fontSize: 13, color: "#444", marginBottom: 6, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: ex.description }} />
              <div style={{ fontSize: 13, color: "#444", marginBottom: 8, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: ex.consigne }} />
              <button onClick={() => setOpenEx(openEx === i ? null : i)} style={S.toggleBtn(openEx === i)}>
                {openEx === i ? c.masquerCorrige : c.voirCorrige}
              </button>
              {openEx === i && (
                <div style={{ marginTop: 10 }}>
                  <div style={S.caption}>{c.corrigeLabel}</div>
                  <div style={{ fontSize: 12.5, color: "#555", lineHeight: 1.7, background: "#fafafa", border: "0.5px solid #f0f0f0", borderRadius: 8, padding: "10px 14px" }} dangerouslySetInnerHTML={{ __html: ex.corrige }} />
                </div>
              )}
            </div>
          ))}

          {/* Exercice final — le répertoire de l'élève dans /analyse-partition */}
          <h3 style={S.h3}>{c.capstoneH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.capstoneP1 }} />
          <div style={{ border: `0.5px solid ${ACCENT}`, borderRadius: 10, padding: "12px 14px", margin: "12px 0", background: "#fff" }}>
            {c.capstoneChecklist.map((item, i) => (
              <div key={i}
                onClick={() => setChecks((prev) => prev.map((v, j) => (j === i ? !v : v)))}
                style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 10, padding: "6px 0", cursor: "pointer", alignItems: "start" }}>
                <div aria-hidden style={{
                  width: 16, height: 16, marginTop: 2, borderRadius: 4, flexShrink: 0,
                  border: `1.5px solid ${checks[i] ? ACCENT : "#bbb"}`,
                  background: checks[i] ? ACCENT : "#fff",
                  color: "#fff", fontSize: 11, lineHeight: "14px", textAlign: "center" as const,
                }}>{checks[i] ? "✓" : ""}</div>
                <div style={{ fontSize: 13, color: checks[i] ? "#888" : "#444", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item }} />
              </div>
            ))}
          </div>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.capstoneP2 }} />
          <LinkCard href={`/${locale}/analyse-partition`} titre={c.linkAnalyseur.titre} desc={c.linkAnalyseur.desc} go={c.linkGo} prominent />

          <h3 style={S.h3}>{c.quizH3}</h3>
          {done ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>{scr >= 8 ? "🎼" : scr >= 6 ? "👍" : "💪"}</div>
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

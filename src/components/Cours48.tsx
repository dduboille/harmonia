"use client";

/**
 * Cours48.tsx
 * Harmonia · Niveau 3 (≈ L3 · DNSPM) · Cours 48 — Méthodologie du relevé
 *
 * DERNIER cours du parcours DNSPM et du catalogue. Compagnon méthodologique de
 * l'outil /releve : le cours enseigne les stratégies, l'outil est le gymnase.
 * Sept sections calquées sur la spec validée :
 *  1. Le relevé        — nature de l'épreuve, ce qu'elle entraîne (audiation),
 *                        la règle d'or (tonalité → cadence → basse → chiffrages)
 *  2. La basse d'abord — 3 techniques, octave libre, exemple I–VI–IV–V–I gravé
 *                        et joué + LA BASSE SEULE (bouton dédié : on entend le
 *                        squelette qu'on chantera en degrés)
 *  3. Les fonctions    — T/SD/D, la cadence d'abord, les formules-blocs ;
 *                        l'exemple I–II6–I6/4–V7–I gravé et joué
 *  4. Les renversements — le test de la ligne de basse (I–I6–IV gravé/joué) et
 *                        la PAIRE MINIMALE V/V7 : deux gravures de 2 mesures,
 *                        chacune jouable — entendre l'alto Sol4 contre Fa4
 *                        EST la leçon
 *  5. Les 6 écoutes    — la table écoute → objectif unique + discipline du crayon
 *  6. Écoute ↔ écriture — la table de diagnostic des erreurs (3 patrons)
 *  7. Entraînement     — fiche réflexe (6 lignes) en encadré proéminent, quiz
 *                        9 questions, protocole /releve en 3 séances (LinkCard
 *                        proéminente), 2 drills écrits avec corrigés dépliables
 *
 * Gravure (Verovio via StudioScore) :
 *  - satbVersMusicXML pour TOUS les exemples SATB (rondes, une mesure par
 *    accord — exactement le domaine de ce graveur) : sections 2, 3, 4 et le
 *    corrigé du drill 1 (Sol majeur, armure 1 dièse — le Fa♯ de l'alto est
 *    couvert par l'armure).
 *  - pieceVersMusicXML (grand staff) pour le corrigé du drill 2 : le corrigé
 *    validé ne donne QUE la basse et les chiffrages — on grave donc le
 *    SQUELETTE DES VOIX EXTRÊMES (basse verbatim + un dessus en dixièmes
 *    Do5–Si4–La4–Sol♯4, chaque note = tierce ou dixième de l'accord chiffré),
 *    fidèle à la doctrine du cours (les voix extrêmes d'abord) sans inventer
 *    de réalisation interne non validée. Armure 0 (la mineur) : le Sol♮ du
 *    mineur naturel s'affiche sans altération à la basse, le Sol♯ de la
 *    dominante majeure porte son dièse accidentel au dessus.
 * Audio : PianoPlayer en noms FRANÇAIS via lib/cours-audio (specAudio /
 * noteAudio) — l'audio sonne à l'octave de la gravure (Do4 = do central).
 */

import React, { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { cours48Content, type Cours48Locale } from "@/data/cours48Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";
import StudioScore from "@/components/StudioScore";
import { satbVersMusicXML } from "@/lib/satb-vers-musicxml";
import { pieceVersMusicXML } from "@/lib/piece-vers-musicxml";
import { specAudio, noteAudio } from "@/lib/cours-audio";
import type { Piece, Note as PieceNote, Hauteur, LettreNote } from "@/lib/piece-model";
import type { Measure, NoteEntry, NoteName } from "@/lib/satb-rules";

// ─── Données musicales des exemples (invariantes : mêmes notes dans les 6 langues) ──
// Noms de notes en solfège FR à la convention de GRAVURE (Do4 = do central).
// Toutes les hauteurs sont transcrites de la spec validée, note à note.

interface Voicing { s: string; a: string; t: string; b: string }

// Section 2 — Do majeur, I–VI–IV–V–I : le soprano immobile sur Do5, la basse
// seule fait avancer l'harmonie (c'est la leçon).
const S2_PROG: Voicing[] = [
  { s: "Do5", a: "Sol4", t: "Mi4", b: "Do3" },
  { s: "Do5", a: "La4", t: "Mi4", b: "La2" },
  { s: "Do5", a: "La4", t: "Fa4", b: "Fa2" },
  { s: "Si4", a: "Sol4", t: "Ré4", b: "Sol2" },
  { s: "Do5", a: "Sol4", t: "Mi4", b: "Do3" },
];
const S2_BASSE = ["Do3", "La2", "Fa2", "Sol2", "Do3"]; // chantée « 1 – 6 – 4 – 5 – 1 »

// Section 3 — Do majeur, I + [II6–I6/4–V7–I] : la grande formule cadentielle,
// la septième Fa4 (alto) descend sur Mi4.
const S3_PROG: Voicing[] = [
  { s: "Do5", a: "Sol4", t: "Mi4", b: "Do3" },
  { s: "Ré5", a: "La4", t: "Fa4", b: "Fa2" },
  { s: "Do5", a: "Sol4", t: "Mi4", b: "Sol2" },
  { s: "Si4", a: "Fa4", t: "Ré4", b: "Sol2" },
  { s: "Do5", a: "Mi4", t: "Do4", b: "Do3" },
];

// Section 4 — le test de la ligne de basse : I – I6 – IV, basse Do3–Mi3–Fa3.
const S4_PROG: Voicing[] = [
  { s: "Do5", a: "Sol4", t: "Mi4", b: "Do3" },
  { s: "Do5", a: "Sol4", t: "Do4", b: "Mi3" },
  { s: "Do5", a: "La4", t: "Do4", b: "Fa3" },
];

// Section 4 — LA paire minimale V/V7 : les deux accords ne diffèrent que par
// l'alto (Sol4 dans V, Fa4 dans V7) — entendre cette note EST la leçon.
const V_PAIR: Voicing[] = [
  { s: "Si4", a: "Sol4", t: "Ré4", b: "Sol2" },
  { s: "Do5", a: "Sol4", t: "Mi4", b: "Do3" },
];
const V7_PAIR: Voicing[] = [
  { s: "Si4", a: "Fa4", t: "Ré4", b: "Sol2" },
  { s: "Do5", a: "Mi4", t: "Do4", b: "Do3" },
];

// Drill 1 — corrigé (Sol majeur, I–II6–I6/4–V7–I) : SATB verbatim de la spec.
const DRILL1_PROG: Voicing[] = [
  { s: "Ré5", a: "Sol4", t: "Si3", b: "Sol2" },
  { s: "Do5", a: "La4", t: "Mi4", b: "Do3" },
  { s: "Si4", a: "Sol4", t: "Ré4", b: "Ré3" },
  { s: "La4", a: "Fa#4", t: "Do4", b: "Ré3" },
  { s: "Sol4", a: "Ré4", t: "Si3", b: "Sol2" },
];

// Drill 2 — corrigé (la mineur, i–v6–iv6–V) : la BASSE est verbatim ; le dessus
// en dixièmes est le squelette des voix extrêmes (chaque note appartient à
// l'accord chiffré : Do = tierce de i, Si = quinte de v6, La = quinte de iv6,
// Sol♯ = tierce de V). Basse en Sol♮ (mineur naturel), dessus final en Sol♯.
const DRILL2_BASSE = ["La2", "Sol2", "Fa2", "Mi2"];
const DRILL2_DESSUS = ["Do5", "Si4", "La4", "Sol#4"];

// ─── Conversions solfège FR → graveurs ──────────────────────────────────────────

const FR_TO_EN: Record<string, string> = { Do: "C", "Ré": "D", Mi: "E", Fa: "F", Sol: "G", La: "A", Si: "B" };

/** « Sol#4 » → { fr: "Sol#", oct: 4 }. */
function splitTok(tok: string): { fr: string; oct: number } {
  return { fr: tok.slice(0, -1), oct: parseInt(tok.slice(-1), 10) };
}

/** Nom FR (« Sol# ») → nom moteur anglais (« G# »). */
function frToEn(fr: string): string {
  const acc = fr.endsWith("#") ? "#" : fr.endsWith("b") ? "b" : "";
  const base = acc ? fr.slice(0, -1) : fr;
  return (FR_TO_EN[base] ?? base) + acc;
}

/** Une case de voix SATB → NoteEntry (satb-vers-musicxml). */
function toEntry(tok: string): NoteEntry {
  const { fr, oct } = splitTok(tok);
  return { name: frToEn(fr) as NoteName, octave: oct };
}

function toMeasures(vs: Voicing[]): Measure[] {
  return vs.map((v) => ({ soprano: toEntry(v.s), alto: toEntry(v.a), tenor: toEntry(v.t), bass: toEntry(v.b) }));
}

/** « Sol#4 » → Hauteur (piece-model). */
function toHauteur(tok: string): Hauteur {
  const { fr, oct } = splitTok(tok);
  const en = frToEn(fr);
  const alteration = en.endsWith("#") ? 1 : en.endsWith("b") ? -1 : 0;
  return { lettre: en[0] as LettreNote, alteration, octave: oct };
}

/** Une ronde du modèle Piece. */
function pRonde(tok: string): PieceNote {
  return { type: "note", hauteurs: [toHauteur(tok)], duree: { base: "ronde", points: 0 } };
}

/** Grand staff 2 voix (dessus / basse) en rondes — le squelette du drill 2. */
function pieceSquelette(dessus: string[], basse: string[], armure = 0): string {
  const piece: Piece = {
    armure,
    chiffrage: { temps: 4, unite: 4 },
    mesures: dessus.map((tok, i) => ({
      voix: {
        soprano: [pRonde(tok)],
        alto: [],
        tenor: [],
        basse: [pRonde(basse[i])],
      },
    })),
  };
  return pieceVersMusicXML(piece);
}

// ─── Audio (PianoPlayer via lib/cours-audio : l'octave gravée sonne juste) ──────

type PianoRef = React.RefObject<PianoPlayerRef | null>;

/** Colonne SATB → specs « Nom:octave » du grave à l'aigu. */
function toSpecs(v: Voicing): string[] {
  return [v.b, v.t, v.a, v.s].map(specAudio);
}

/** Joue une progression SATB, un accord toutes les gapMs millisecondes. */
function playProg(ref: PianoRef, vs: Voicing[], gapMs = 1300, dureeS = 1.7) {
  vs.forEach((v, i) => setTimeout(() => ref.current?.playVoicing(toSpecs(v), { duration: dureeS }), i * gapMs));
}

/** Joue une ligne seule (la basse du relevé, le dessus du squelette). */
function playLigne(ref: PianoRef, toks: string[], pas = 1.1) {
  toks.forEach((tok, i) => {
    const { nom, octave } = noteAudio(tok);
    ref.current?.playNote(nom, octave, { startTime: i * pas, duration: pas * 0.95 });
  });
}

/** Joue le squelette 2 voix du drill 2 : basse + dessus ensemble, par mesure. */
function playSquelette(ref: PianoRef, dessus: string[], basse: string[], gapMs = 1300, dureeS = 1.7) {
  dessus.forEach((tok, i) => {
    setTimeout(
      () => ref.current?.playVoicing([specAudio(basse[i]), specAudio(tok)], { duration: dureeS }),
      i * gapMs,
    );
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

const QUIZ_COUNT = 9;
const ACCENT = "#0F6E56"; // vert profond — identité visuelle du cours 48 (clôture du parcours DNSPM)
const ACCENT_BG = "#E1F5EE";

// ─── Styles (repris des cours 42/43/44/45/46/47) ────────────────────────────────

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
  tip: { borderLeft: `2px solid ${ACCENT}`, padding: "8px 14px", background: ACCENT_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#0A4A3A", lineHeight: 1.6 } as React.CSSProperties,
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

/** Carte-lien vers un cours ou un outil de la plateforme (motif des cours 42-47). */
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
        background: `linear-gradient(135deg, ${ACCENT_BG} 0%, #D2EDE2 100%)`,
        border: `0.5px solid #9CCDBB`, borderRadius: 12,
        padding: prominent ? "18px 20px" : "12px 16px", margin: "14px 0",
      }}>
        <div>
          <div style={{ fontSize: prominent ? 14 : 13, fontWeight: 600, color: ACCENT, marginBottom: 4 }}>
            ♪ {titre}
          </div>
          <div style={{ fontSize: 12, color: "#2C5D4C", lineHeight: 1.5 }}>{desc}</div>
        </div>
        <div style={{ fontSize: 13, fontWeight: 600, color: ACCENT, whiteSpace: "nowrap" as const }}>{go}</div>
      </div>
    </Link>
  );
}

// ─── Composant ───────────────────────────────────────────────────────────────────

const SECTIONS = ["quoi", "basse", "fonctions", "renversements", "ecoutes", "boucle", "quiz"] as const;

export default function Cours48() {
  const i18n = useCoursI18n("cours48");
  const c = useCoursContent<Cours48Locale>(cours48Content);
  const locale = useLocale();
  const pianoRef = useRef<PianoPlayerRef>(null);

  const [sec, setSec] = useState<string>("quoi");
  const [openD1, setOpenD1] = useState(false);
  const [openD2, setOpenD2] = useState(false);

  // Quiz (9 questions, toutes servies — options JAMAIS mélangées : les positions
  // des bonnes réponses sont réparties dans les données, aucune position dominante)
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
  const xmlS2 = useMemo(() => satbVersMusicXML(toMeasures(S2_PROG)), []);
  const xmlS3 = useMemo(() => satbVersMusicXML(toMeasures(S3_PROG)), []);
  const xmlS4 = useMemo(() => satbVersMusicXML(toMeasures(S4_PROG)), []);
  const xmlV = useMemo(() => satbVersMusicXML(toMeasures(V_PAIR)), []);
  const xmlV7 = useMemo(() => satbVersMusicXML(toMeasures(V7_PAIR)), []);
  const xmlDrill1 = useMemo(() => satbVersMusicXML(toMeasures(DRILL1_PROG), "G"), []);
  const xmlDrill2 = useMemo(() => pieceSquelette(DRILL2_DESSUS, DRILL2_BASSE, 0), []);

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
        composer="Nadia Boulanger"
        period="1887–1979"
        emoji="👂"
        concept={c.maitreConcept}
        anecdote={c.maitreAnecdote}
        lesson={c.maitreLesson}
        accentColor={ACCENT}
      />

      {/* Note « comment travailler ce cours » — la contrainte assumée, en tête */}
      <div style={S.info} dangerouslySetInnerHTML={{ __html: c.noteTravail }} />

      {/* Nav */}
      <nav style={S.nav}>
        {SECTIONS.map((id) => (
          <button key={id} style={S.pill(sec === id)} onClick={() => setSec(id)}>
            {i18n.sectionLabel(id)}
          </button>
        ))}
      </nav>

      {/* ══ 1. QU'EST-CE QUE LE RELEVÉ ? ══ */}
      {sec === "quoi" && (
        <div>
          <h2 style={S.h2}>{c.quoiH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.quoiP1 }} />
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.quoiP2 }} />
          <div style={S.quote} dangerouslySetInnerHTML={{ __html: c.regleOr }} />
          <LinkCard href={`/${locale}/cours/45`} titre={c.linkCours45.titre} desc={c.linkCours45.desc} go={c.linkGo} />
        </div>
      )}

      {/* ══ 2. LA BASSE D'ABORD ══ */}
      {sec === "basse" && (
        <div>
          <h2 style={S.h2}>{c.basseH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.basseP1 }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 14 }}>
            {c.basseTechniques.map((item, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 10, padding: "10px 14px", borderRadius: 8, background: i % 2 === 0 ? "#fafafa" : "#fff", border: "0.5px solid #f0f0f0" }}>
                <div style={{ fontSize: 13, color: ACCENT, fontWeight: 700, marginTop: 1 }}>{i + 1}.</div>
                <div style={{ fontSize: 13, color: "#444", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item }} />
              </div>
            ))}
          </div>

          <div style={S.info} dangerouslySetInnerHTML={{ __html: c.basseOctave }} />

          <h3 style={S.h3}>{c.exS2H3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.exS2P }} />
          <ScoreBlock xml={xmlS2} caption={c.s2ScoreCaption}
            buttons={[
              { label: c.btnProg, onClick: () => playProg(pianoRef, S2_PROG) },
              // LE dispositif du palier ① : la basse seule, à chanter en degrés
              { label: c.btnBasse, onClick: () => playLigne(pianoRef, S2_BASSE) },
            ]} />
          <div style={S.tip} dangerouslySetInnerHTML={{ __html: c.s2Apres }} />
        </div>
      )}

      {/* ══ 3. LES FONCTIONS AVANT LES ACCORDS ══ */}
      {sec === "fonctions" && (
        <div>
          <h2 style={S.h2}>{c.fonctH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.fonctP1 }} />
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.fonctP2 }} />
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.fonctP3 }} />

          <h3 style={S.h3}>{c.exS3H3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.exS3P }} />
          <ScoreBlock xml={xmlS3} caption={c.s3ScoreCaption}
            buttons={[{ label: c.btnProg, onClick: () => playProg(pianoRef, S3_PROG) }]} />
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.s3Raisonnement }} />
        </div>
      )}

      {/* ══ 4. LES RENVERSEMENTS À L'OREILLE ══ */}
      {sec === "renversements" && (
        <div>
          <h2 style={S.h2}>{c.renvH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.renvP1 }} />
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.renvP2 }} />
          <ScoreBlock xml={xmlS4} caption={c.s4ScoreCaption}
            buttons={[{ label: c.btnProg, onClick: () => playProg(pianoRef, S4_PROG) }]} />
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.s4Apres }} />

          <h3 style={S.h3}>{c.septH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.septP }} />
          {/* La paire minimale : deux gravures, chacune jouable — l'alto Sol4/Fa4 */}
          <ScoreBlock xml={xmlV} caption={c.vCaption}
            buttons={[{ label: "V → I", onClick: () => playProg(pianoRef, V_PAIR) }]} />
          <ScoreBlock xml={xmlV7} caption={c.v7Caption}
            buttons={[{ label: "V7 → I", onClick: () => playProg(pianoRef, V7_PAIR) }]} />
          <div style={S.tip} dangerouslySetInnerHTML={{ __html: c.septApres }} />
        </div>
      )}

      {/* ══ 5. LES 6 ÉCOUTES ══ */}
      {sec === "ecoutes" && (
        <div>
          <h2 style={S.h2}>{c.ecoutesH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.ecoutesP1 }} />

          <div style={S.tableWrap}>
            <table style={{ ...S.table, minWidth: 480 }}>
              <thead>
                <tr>{c.ecoutesHeaders.map((hh) => <th key={hh} style={S.th}>{hh}</th>)}</tr>
              </thead>
              <tbody>
                {c.ecoutesRows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 ? "#fafafa" : "#fff" }}>
                    <td style={{ ...S.td, fontWeight: 700, color: ACCENT, whiteSpace: "nowrap" }}>{row.n}</td>
                    <td style={S.td} dangerouslySetInnerHTML={{ __html: row.objectif }} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.warn} dangerouslySetInnerHTML={{ __html: c.crayonP }} />
        </div>
      )}

      {/* ══ 6. ÉCOUTE ↔ ÉCRITURE ══ */}
      {sec === "boucle" && (
        <div>
          <h2 style={S.h2}>{c.boucleH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.boucleP1 }} />
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.diagIntro }} />

          <div style={S.tableWrap}>
            <table style={{ ...S.table, minWidth: 620 }}>
              <thead>
                <tr>{c.diagHeaders.map((hh) => <th key={hh} style={S.th}>{hh}</th>)}</tr>
              </thead>
              <tbody>
                {c.diagRows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 ? "#fafafa" : "#fff" }}>
                    <td style={S.td} dangerouslySetInnerHTML={{ __html: row.erreur }} />
                    <td style={S.td} dangerouslySetInnerHTML={{ __html: row.revele }} />
                    <td style={S.td} dangerouslySetInnerHTML={{ __html: row.remede }} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.boucleP2 }} />
        </div>
      )}

      {/* ══ 7. ENTRAÎNEMENT ══ */}
      {sec === "quiz" && (
        <div>
          <h2 style={S.h2}>{c.entrainH2}</h2>

          {/* La fiche réflexe — encadré proéminent */}
          <h3 style={S.h3}>{c.ficheH3}</h3>
          <div style={{ border: `1px solid ${ACCENT}`, borderRadius: 12, background: ACCENT_BG, padding: "14px 18px", marginBottom: 18 }}>
            {c.ficheLines.map((line, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 10, padding: "5px 0", fontSize: 13, color: "#0A4A3A", lineHeight: 1.6 }}>
                <span style={{ fontWeight: 700, color: ACCENT }}>{i + 1}.</span>
                <span dangerouslySetInnerHTML={{ __html: line }} />
              </div>
            ))}
          </div>

          {/* Quiz */}
          <h3 style={S.h3}>{c.quizH3}</h3>
          {done ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>{scr >= 8 ? "👂" : scr >= 6 ? "👍" : "💪"}</div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>{i18n.t("score")} : {scr} / {QUIZ_COUNT}</div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>{i18n.quizMessage(scr, QUIZ_COUNT)}</div>
              <button onClick={reset} style={{ fontSize: 13, padding: "8px 20px", border: `0.5px solid ${ACCENT}`, borderRadius: 20, cursor: "pointer", background: ACCENT_BG, color: ACCENT }}>{i18n.newQ}</button>
            </div>
          ) : (
            <div>
              <div style={{ fontSize: 12, color: "#999", marginBottom: 10 }}>
                {i18n.t("question")} {qi + 1} {i18n.t("of")} {QUIZ_COUNT}
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

          {/* Le protocole /releve en trois séances */}
          <h3 style={S.h3}>{c.protoH3}</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 8 }}>
            {c.protoSteps.map((step, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 12, padding: "12px 16px", borderRadius: 10, background: "#fff", border: "0.5px solid #e5e5e5" }}>
                <div style={{ width: 26, height: 26, borderRadius: "50%", background: ACCENT, color: "#fff", fontSize: 13, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>{i + 1}</div>
                <div>
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: "#111", marginBottom: 4 }}>{step.titre}</div>
                  <div style={{ fontSize: 13, color: "#444", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: step.desc }} />
                </div>
              </div>
            ))}
          </div>
          <LinkCard href={`/${locale}/releve`} titre={c.linkReleve.titre} desc={c.linkReleve.desc} go={c.linkGo} prominent />

          {/* Les deux drills écrits, corrigés dépliables */}
          <h3 style={S.h3}>{c.drillsH3}</h3>

          <div style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "12px 14px", marginBottom: 8, background: "#fff" }}>
            <div style={{ fontSize: 13.5, fontWeight: 600, color: "#111", marginBottom: 4 }}>{c.drill1Titre}</div>
            <div style={{ fontSize: 13, color: "#444", marginBottom: 8, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: c.drill1Enonce }} />
            <button onClick={() => setOpenD1((v) => !v)} style={S.toggleBtn(openD1)}>
              {openD1 ? c.masquerCorrige : c.voirCorrige}
            </button>
            {openD1 && (
              <div style={{ marginTop: 10 }}>
                <div style={S.caption}>{c.corrigeLabel}</div>
                <div style={{ fontSize: 12.5, color: "#555", lineHeight: 1.7, background: "#fafafa", border: "0.5px solid #f0f0f0", borderRadius: 8, padding: "10px 14px" }} dangerouslySetInnerHTML={{ __html: c.drill1Corrige }} />
                <ScoreBlock xml={xmlDrill1} caption={c.drill1ScoreCaption}
                  buttons={[{ label: c.btnProg, onClick: () => playProg(pianoRef, DRILL1_PROG) }]} />
              </div>
            )}
          </div>

          <div style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "12px 14px", marginBottom: 8, background: "#fff" }}>
            <div style={{ fontSize: 13.5, fontWeight: 600, color: "#111", marginBottom: 4 }}>{c.drill2Titre}</div>
            <div style={{ fontSize: 13, color: "#444", marginBottom: 8, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: c.drill2Enonce }} />
            <button onClick={() => setOpenD2((v) => !v)} style={S.toggleBtn(openD2)}>
              {openD2 ? c.masquerCorrige : c.voirCorrige}
            </button>
            {openD2 && (
              <div style={{ marginTop: 10 }}>
                <div style={S.caption}>{c.corrigeLabel}</div>
                <div style={{ fontSize: 12.5, color: "#555", lineHeight: 1.7, background: "#fafafa", border: "0.5px solid #f0f0f0", borderRadius: 8, padding: "10px 14px" }} dangerouslySetInnerHTML={{ __html: c.drill2Corrige }} />
                <ScoreBlock xml={xmlDrill2} caption={c.drill2ScoreCaption}
                  buttons={[
                    { label: c.btnBasse, onClick: () => playLigne(pianoRef, DRILL2_BASSE) },
                    { label: c.btnProg, onClick: () => playSquelette(pianoRef, DRILL2_DESSUS, DRILL2_BASSE) },
                  ]} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

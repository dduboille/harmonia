"use client";

/**
 * Cours47.tsx
 * Harmonia · Niveau 3 (≈ L3 · DNSPM) · Cours 47 — Orchestration et lecture d'orchestre
 *
 * Deuxième cours du parcours DNSPM : il prolonge le cours 19 (Introduction à
 * l'orchestration). Ici on ne décrit plus l'orchestre, on apprend à LE LIRE.
 * Sept sections calquées sur la spec validée :
 *  1. Le conducteur   — ordre des familles, noms IT/FR/DE (piège « in B »),
 *                       méthode de balayage, lien cours 19
 *  2. Les clés        — clés d'ut 3 et 4, tables des notes-ancres (lignes)
 *  3. Transpositeurs  — LA table de référence avec, pour CHAQUE instrument,
 *                       deux boutons 🔊 écrit / 🔊 sonnant (le dispositif
 *                       pédagogique clé du cours : l'oreille mémorise
 *                       l'intervalle) + le pseudo-cluster gravé et joué
 *                       écrit PUIS sonnant
 *  4. La verticalité  — le tutti 12 portées en table HTML (hauteurs écrites,
 *                       transpositeurs en gras), résolutions, contenu réel,
 *                       et la réduction SONNANTE gravée + jouée
 *  5. La réduction    — la table MD/MG, la réduction gravée sur deux portées,
 *                       boutons « tutti complet » vs « réduction »
 *  6. L'équilibre     — les 3 dispositions (juxtaposition / encastrement /
 *                       enrobage) gravées en 3 mesures + pièges classiques
 *  7. Entraînement    — méthode en 6 passes, exercices a (drill avec boutons
 *                       écrit/réel par ligne) et b (mini-conducteur, corrigé
 *                       + réduction gravée), capstone /analyse-partition,
 *                       quiz 10 questions
 *
 * Gravure (Verovio via StudioScore) — le choix des graveurs, documenté :
 *  - Le tutti écrit de 12 portées est HORS de portée des graveurs actuels
 *    (satb = 4 voix, piece = 2 portées) : il est présenté en table HTML avec
 *    les lignes de résolution écrit → sonnant, conformément à la spec ; sa
 *    réduction SONNANTE (basse réelle + classes repliées) est gravée dessous.
 *  - pieceVersMusicXML (grand staff, ACCORDS via hauteurs[]) grave TOUT le
 *    reste : le pseudo-cluster (2 mesures, portée de sol), la réduction
 *    sonnante du tutti, la réduction pianistique de la section 5 (la MD de
 *    l'accord 4 a QUATRE notes + MG 2 → le graveur SATB, une note par voix,
 *    ne suffit pas : il faudrait 6 voix ; les accords du modèle Piece
 *    règlent la question), la réduction de l'exercice b (armure 1 dièse) et
 *    les 3 dispositions de la section 6 (soprano = flûtes hampes en haut,
 *    alto = clarinettes hampes en bas — la répartition des familles se VOIT).
 * Audio : PianoPlayer en noms FRANÇAIS via lib/cours-audio (specAudio /
 * noteAudio) — l'audio sonne à l'octave de la gravure (Do4 = do central).
 * Les paires écrit/sonnant jouent EXACTEMENT les hauteurs de la table
 * (vérifiées : Cl. Si♭ Ré4 → Do4 ; Cor en Fa Sol4 → Do4 ; etc.).
 */

import React, { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { cours47Content, type Cours47Locale } from "@/data/cours47Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";
import StudioScore from "@/components/StudioScore";
import { pieceVersMusicXML } from "@/lib/piece-vers-musicxml";
import { specAudio, noteAudio } from "@/lib/cours-audio";
import type { Piece, Note as PieceNote, Hauteur, LettreNote } from "@/lib/piece-model";

// ─── Données musicales des exemples (invariantes : mêmes notes dans les 6 langues) ──
// Noms de notes en solfège FR à la convention de GRAVURE (Do4 = do central).

// Section 2 — les lignes des clés d'ut (notes-ancres), du bas vers le haut.
const UT3_LIGNES = ["Fa3", "La3", "Do4", "Mi4", "Sol4"];
const UT4_LIGNES = ["Ré3", "Fa3", "La3", "Do4", "Mi4"];

// Section 3 — pour CHAQUE ligne de la table de transposition, la paire
// écrit/sonnant de l'« exemple exact » (ordre = ordre des lignes de la table).
// Chaque paire transcrit la colonne « Exemple exact » de la spec validée.
const TRANSPO_AUDIO: { ecrit: string; sonnant: string }[] = [
  { ecrit: "Do4", sonnant: "Do5" },  // Piccolo (+ 8ve)
  { ecrit: "Do4", sonnant: "Fa3" },  // Cor anglais (− 5te J)
  { ecrit: "Ré4", sonnant: "Do4" },  // Clarinette en Si♭ (− 2de M)
  { ecrit: "Mib4", sonnant: "Do4" }, // Clarinette en La (− 3ce m)
  { ecrit: "Sol4", sonnant: "Do4" }, // Cor en Fa (− 5te J)
  { ecrit: "Ré4", sonnant: "Do4" },  // Trompette en Si♭ (− 2de M)
  { ecrit: "Do4", sonnant: "Mib3" }, // Sax alto en Mi♭ (− 6te M)
  { ecrit: "Do4", sonnant: "Sib2" }, // Sax ténor en Si♭ (− 9e M)
  { ecrit: "Do3", sonnant: "Do2" },  // Contrebasse (− 8ve)
  { ecrit: "Do3", sonnant: "Do2" },  // Contrebasson (− 8ve)
  { ecrit: "Do4", sonnant: "Do5" },  // Célesta (+ 8ve)
];

// Section 3 — le pseudo-cluster : écrit (Cl. Fa♯4, Cor Sol4, Tr. La4) puis sonnant.
const CLUSTER_ECRIT = ["Fa#4", "Sol4", "La4"];
const CLUSTER_SONNANT = ["Do4", "Mi4", "Sol4"];

// Section 4 — réduction SONNANTE du tutti : basse réelle + classes repliées.
// (Accords : I · IV · V7 · I — hauteurs réelles issues de la résolution.)
const TUTTI_SON_MD: string[][] = [
  ["Do4", "Mi4", "Sol4"],
  ["Do4", "Fa4", "La4"],
  ["Ré4", "Fa4", "Sol4", "Si4"],
  ["Do4", "Mi4", "Sol4"],
];
const TUTTI_SON_MG: string[][] = [
  ["Do2", "Do3"],
  ["Fa2", "Fa3"],
  ["Sol2", "Sol3"],
  ["Do2", "Do3"],
];

// Section 5 — la réduction pianistique de la spec (table MD/MG).
const RED_MD: string[][] = [
  ["Mi4", "Sol4", "Mi5"],
  ["Fa4", "La4", "Fa5"],
  ["Fa4", "Si4", "Ré5"],
  ["Mi4", "Sol4", "Do5", "Mi5"],
];
const RED_MG: string[][] = [
  ["Do2", "Do3"],
  ["Fa2", "Fa3"],
  ["Sol2", "Sol3"],
  ["Do2", "Do3"],
];

// Section 5 — le tutti « complet » en hauteurs réelles (doublures conservées,
// pour la comparaison à l'oreille tutti ↔ réduction).
const TUTTI_COMPLET: string[][] = [
  ["Do2", "Do3", "Do4", "Mi4", "Sol4", "Mi5", "Sol5", "Mi6"],
  ["Fa2", "Fa3", "Do4", "Fa4", "La4", "Fa5", "La5", "Fa6"],
  ["Sol2", "Sol3", "Ré4", "Fa4", "Sol4", "Si4", "Ré5", "Si5", "Ré6"],
  ["Do2", "Do3", "Do4", "Mi4", "Sol4", "Do5", "Mi5", "Do6", "Mi6"],
];

// Section 6 — les 3 dispositions de l'accord Do4–Mi4–Sol4–Do5 (hauteurs réelles).
// Par mesure : notes des FLÛTES (hampes en haut) et des CLARINETTES (hampes en bas).
const DISPO_FLUTES: string[][] = [
  ["Sol4", "Do5"], // juxtaposition : Fl. 1 Do5, Fl. 2 Sol4
  ["Mi4", "Do5"],  // encastrement : Fl. 1 Do5, Fl. 2 Mi4
  ["Do4", "Do5"],  // enrobage     : Fl. 1 Do5, Fl. 2 Do4
];
const DISPO_CLARINETTES: string[][] = [
  ["Do4", "Mi4"],  // juxtaposition : Cl. 1 Mi4, Cl. 2 Do4
  ["Do4", "Sol4"], // encastrement : Cl. 1 Sol4, Cl. 2 Do4
  ["Mi4", "Sol4"], // enrobage     : Cl. 1 Sol4, Cl. 2 Mi4
];
const DISPO_ACCORD = ["Do4", "Mi4", "Sol4", "Do5"];

// Section 7 — exercice a : les trois notes écrites et réelles de chaque ligne.
const EXA_AUDIO: { ecrit: string[]; reel: string[] }[] = [
  { ecrit: ["Sol4", "La4", "Si4"], reel: ["Fa4", "Sol4", "La4"] },   // Cl. Si♭ (− 2de M)
  { ecrit: ["Do5", "Si4", "Sol4"], reel: ["Fa4", "Mi4", "Do4"] },    // Cor en Fa (− 5te J)
  { ecrit: ["Mi5", "Do5", "La4"], reel: ["Sol4", "Mib4", "Do4"] },   // Sax alto (− 6te M)
];

// Section 7 — exercice b : la réduction du corrigé (Sol majeur, armure 1 dièse).
const EXB_MD: string[][] = [
  ["Mi4", "Do5"],
  ["Fa#4", "Do5"],
  ["Sol4", "Si4"],
];
const EXB_MG: string[][] = [
  ["Do3", "Sol3"],
  ["Ré3", "La3"],
  ["Sol2", "Sol3"],
];

// ─── Conversions solfège FR → graveur (modèle Piece) ───────────────────────────

const FR_TO_EN: Record<string, string> = { Do: "C", "Ré": "D", Mi: "E", Fa: "F", Sol: "G", La: "A", Si: "B" };

/** « Sib3 » → { fr: "Sib", oct: 3 }. */
function splitTok(tok: string): { fr: string; oct: number } {
  return { fr: tok.slice(0, -1), oct: parseInt(tok.slice(-1), 10) };
}

/** « Sib3 » → Hauteur (piece-model). */
function toHauteur(tok: string): Hauteur {
  const { fr, oct } = splitTok(tok);
  const acc = fr.endsWith("#") ? 1 : fr.endsWith("b") ? -1 : 0;
  const base = acc !== 0 ? fr.slice(0, -1) : fr;
  return { lettre: (FR_TO_EN[base] ?? base) as LettreNote, alteration: acc, octave: oct };
}

/** Un accord en rondes du modèle Piece (1 note = accord d'une hauteur). */
function pAccord(toks: string[]): PieceNote {
  return { type: "note", hauteurs: toks.map(toHauteur), duree: { base: "ronde", points: 0 } };
}

/**
 * Grand staff en accords tenus : une ronde-accord MD (soprano) et une
 * ronde-accord MG (basse) par mesure. mg vide → portée de fa en silences
 * (cas des exemples « portée de sol seule » : cluster, dispositions).
 */
function pieceAccords(md: string[][], mg: string[][], armure = 0): string {
  const piece: Piece = {
    armure,
    chiffrage: { temps: 4, unite: 4 },
    mesures: md.map((chord, i) => ({
      voix: {
        soprano: [pAccord(chord)],
        alto: [],
        tenor: [],
        basse: mg.length ? [pAccord(mg[i])] : [],
      },
    })),
  };
  return pieceVersMusicXML(piece);
}

/** Les dispositions : 2 voix sur la portée de sol (flûtes hampes ↑, clarinettes hampes ↓). */
function pieceDispositions(): string {
  const piece: Piece = {
    armure: 0,
    chiffrage: { temps: 4, unite: 4 },
    mesures: DISPO_FLUTES.map((fl, i) => ({
      voix: {
        soprano: [pAccord(fl)],
        alto: [pAccord(DISPO_CLARINETTES[i])],
        tenor: [],
        basse: [],
      },
    })),
  };
  return pieceVersMusicXML(piece);
}

// ─── Audio (PianoPlayer via lib/cours-audio : l'octave gravée sonne juste) ──────

type PianoRef = React.RefObject<PianoPlayerRef | null>;

/** Joue une note isolée (paires écrit/sonnant de la table de transposition). */
function playTok(ref: PianoRef, tok: string) {
  const { nom, octave } = noteAudio(tok);
  ref.current?.playNote(nom, octave, { duration: 1.6 });
}

/** Joue une suite de notes (drill de l'exercice a). */
function playSeq(ref: PianoRef, toks: string[], pas = 0.7) {
  toks.forEach((tok, i) => {
    const { nom, octave } = noteAudio(tok);
    ref.current?.playNote(nom, octave, { startTime: i * pas, duration: pas * 0.95 });
  });
}

/** Joue un accord plaqué (cluster écrit/sonnant, accord des dispositions). */
function playChord(ref: PianoRef, toks: string[], dureeS = 2.0) {
  ref.current?.playVoicing(toks.map(specAudio), { duration: dureeS });
}

/** Joue une suite d'accords MD+MG (réductions, tutti), un accord toutes les gapMs ms. */
function playChords(ref: PianoRef, md: string[][], mg: string[][], gapMs = 1400, dureeS = 1.8) {
  md.forEach((chord, i) => {
    const toks = [...(mg[i] ?? []), ...chord];
    setTimeout(() => ref.current?.playVoicing(toks.map(specAudio), { duration: dureeS }), i * gapMs);
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
const ACCENT = "#28527A"; // bleu de Prusse — identité visuelle du cours 47 (parcours DNSPM)
const ACCENT_BG = "#E9F1F8";

// ─── Styles (repris des cours 42/43/44/45/46) ───────────────────────────────────

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
  tip: { borderLeft: `2px solid ${ACCENT}`, padding: "8px 14px", background: ACCENT_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#1B3A58", lineHeight: 1.6 } as React.CSSProperties,
  warn: { borderLeft: "2px solid #BA7517", padding: "10px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "14px 0", fontSize: 13, color: "#633806", lineHeight: 1.65 } as React.CSSProperties,
  quote: { borderLeft: "2px solid #999", padding: "10px 14px", background: "#fafafa", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13.5, color: "#333", lineHeight: 1.7 } as React.CSSProperties,
  tableWrap: { overflowX: "auto" as const, margin: "12px 0" },
  table: { width: "100%", borderCollapse: "collapse" as const, fontSize: 12.5 },
  th: { textAlign: "left" as const, padding: "6px 9px", fontWeight: 500, color: "#666", borderBottom: "0.5px solid #e5e5e5", whiteSpace: "nowrap" as const },
  td: { padding: "6px 9px", color: "#555", verticalAlign: "top" as const, lineHeight: 1.55 },
  caption: { fontSize: 11, color: "#999", marginBottom: 4 } as React.CSSProperties,
  listenBtn: { fontSize: 12, padding: "5px 14px", border: `0.5px solid ${ACCENT}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: ACCENT, marginTop: 8, marginRight: 6 } as React.CSSProperties,
  // Petits boutons écrit/sonnant des lignes de table (le dispositif clé du cours)
  miniBtn: { fontSize: 11, padding: "2px 8px", border: `0.5px solid ${ACCENT}`, borderRadius: 12, cursor: "pointer", background: "transparent", color: ACCENT, whiteSpace: "nowrap" as const, marginRight: 4, marginBottom: 2 } as React.CSSProperties,
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

/** Carte-lien vers un cours ou un outil de la plateforme (motif des cours 42-46). */
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
        background: `linear-gradient(135deg, ${ACCENT_BG} 0%, #DCE9F5 100%)`,
        border: `0.5px solid #A9C4DC`, borderRadius: 12,
        padding: prominent ? "18px 20px" : "12px 16px", margin: "14px 0",
      }}>
        <div>
          <div style={{ fontSize: prominent ? 14 : 13, fontWeight: 600, color: ACCENT, marginBottom: 4 }}>
            ♪ {titre}
          </div>
          <div style={{ fontSize: 12, color: "#3A5B7C", lineHeight: 1.5 }}>{desc}</div>
        </div>
        <div style={{ fontSize: 13, fontWeight: 600, color: ACCENT, whiteSpace: "nowrap" as const }}>{go}</div>
      </div>
    </Link>
  );
}

/** Table des notes-ancres d'une clé d'ut : les 5 lignes et leurs notes. */
function AncresTable({ label, notes, headers }: { label: string; notes: string[]; headers: string[] }) {
  return (
    <div style={{ margin: "12px 0" }}>
      <div style={S.caption}>{label}</div>
      <div style={S.tableWrap}>
        <table style={{ ...S.table, maxWidth: 480 }}>
          <thead>
            <tr>{headers.map((hh) => <th key={hh} style={S.th}>{hh}</th>)}</tr>
          </thead>
          <tbody>
            <tr>
              {notes.map((n, i) => (
                <td key={i} style={{ ...S.td, fontWeight: 700, fontSize: 14, color: i === notes.indexOf("Do4") ? ACCENT : "#333" }}>
                  {n.replace("b", "♭").replace("#", "♯")}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Composant ───────────────────────────────────────────────────────────────────

const SECTIONS = ["conducteur", "cles", "transpo", "verticalite", "reduction", "equilibre", "quiz"] as const;

export default function Cours47() {
  const i18n = useCoursI18n("cours47");
  const c = useCoursContent<Cours47Locale>(cours47Content);
  const locale = useLocale();
  const pianoRef = useRef<PianoPlayerRef>(null);

  const [sec, setSec] = useState<string>("conducteur");
  const [openExA, setOpenExA] = useState(false);
  const [openExB, setOpenExB] = useState(false);

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
  const xmlCluster = useMemo(() => pieceAccords([CLUSTER_ECRIT, CLUSTER_SONNANT], []), []);
  const xmlTuttiSon = useMemo(() => pieceAccords(TUTTI_SON_MD, TUTTI_SON_MG), []);
  const xmlReduction = useMemo(() => pieceAccords(RED_MD, RED_MG), []);
  const xmlDispo = useMemo(() => pieceDispositions(), []);
  const xmlExB = useMemo(() => pieceAccords(EXB_MD, EXB_MG, 1), []);

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
        composer="Hector Berlioz"
        period="1803–1869"
        emoji="🎺"
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

      {/* ══ 1. LIRE UNE PARTITION D'ORCHESTRE ══ */}
      {sec === "conducteur" && (
        <div>
          <h2 style={S.h2}>{c.condH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.condP1 }} />

          <div style={S.caption}>{c.nomsCaption}</div>
          <div style={S.tableWrap}>
            <table style={{ ...S.table, minWidth: 560 }}>
              <thead>
                <tr>{c.nomsHeaders.map((hh) => <th key={hh} style={S.th}>{hh}</th>)}</tr>
              </thead>
              <tbody>
                {c.nomsRows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 ? "#fafafa" : "#fff" }}>
                    <td style={{ ...S.td, fontWeight: 600, color: ACCENT }} dangerouslySetInnerHTML={{ __html: row.it }} />
                    <td style={S.td} dangerouslySetInnerHTML={{ __html: row.fr }} />
                    <td style={S.td} dangerouslySetInnerHTML={{ __html: row.de }} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>{c.balayageH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.balayageP }} />
          <LinkCard href={`/${locale}/cours/19`} titre={c.linkCours19.titre} desc={c.linkCours19.desc} go={c.linkGo} />
        </div>
      )}

      {/* ══ 2. LES CLÉS ══ */}
      {sec === "cles" && (
        <div>
          <h2 style={S.h2}>{c.clesH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.clesP1 }} />

          <div style={S.tableWrap}>
            <table style={{ ...S.table, minWidth: 560 }}>
              <thead>
                <tr>{c.clesHeaders.map((hh) => <th key={hh} style={S.th}>{hh}</th>)}</tr>
              </thead>
              <tbody>
                {c.clesRows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 ? "#fafafa" : "#fff" }}>
                    <td style={{ ...S.td, fontWeight: 600, color: ACCENT, whiteSpace: "nowrap" }}>{row.cle}</td>
                    <td style={S.td} dangerouslySetInnerHTML={{ __html: row.instruments }} />
                    <td style={S.td} dangerouslySetInnerHTML={{ __html: row.do4 }} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={S.h3}>{c.ancresH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.ancresP }} />
          <AncresTable label={c.ancresUt3Label} notes={UT3_LIGNES} headers={c.ancresLignesHeaders} />
          <AncresTable label={c.ancresUt4Label} notes={UT4_LIGNES} headers={c.ancresLignesHeaders} />
        </div>
      )}

      {/* ══ 3. LES INSTRUMENTS TRANSPOSITEURS ══ */}
      {sec === "transpo" && (
        <div>
          <h2 style={S.h2}>{c.transpoH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.transpoP1 }} />

          <div style={S.caption}>{c.transpoCaption}</div>
          <div style={S.tableWrap}>
            <table style={{ ...S.table, minWidth: 720 }}>
              <thead>
                <tr>{c.transpoHeaders.map((hh) => <th key={hh} style={S.th}>{hh}</th>)}</tr>
              </thead>
              <tbody>
                {c.transpoRows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 ? "#fafafa" : "#fff" }}>
                    <td style={{ ...S.td, fontWeight: 600, color: ACCENT, whiteSpace: "nowrap" }}>{row.instrument}</td>
                    <td style={S.td} dangerouslySetInnerHTML={{ __html: row.regle }} />
                    <td style={S.td} dangerouslySetInnerHTML={{ __html: row.exemple }} />
                    <td style={S.td} dangerouslySetInnerHTML={{ __html: row.methode }} />
                    <td style={{ ...S.td, whiteSpace: "nowrap" }}>
                      {/* LE dispositif du cours : entendre l'écrit PUIS le sonnant */}
                      <button style={S.miniBtn} onClick={() => playTok(pianoRef, TRANSPO_AUDIO[i].ecrit)}>🔊 {c.btnEcrit}</button>
                      <button style={S.miniBtn} onClick={() => playTok(pianoRef, TRANSPO_AUDIO[i].sonnant)}>🔊 {c.btnSonnant}</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.info} dangerouslySetInnerHTML={{ __html: c.transpoP2 }} />

          <h3 style={S.h3}>{c.clusterH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.clusterP }} />
          <ScoreBlock xml={xmlCluster} caption={c.clusterCaption}
            buttons={[
              { label: c.btnEcrit, onClick: () => playChord(pianoRef, CLUSTER_ECRIT) },
              { label: c.btnSonnant, onClick: () => playChord(pianoRef, CLUSTER_SONNANT) },
            ]} />
        </div>
      )}

      {/* ══ 4. LA VERTICALITÉ ══ */}
      {sec === "verticalite" && (
        <div>
          <h2 style={S.h2}>{c.vertH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.vertP1 }} />

          <h3 style={S.h3}>{c.tuttiH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.tuttiIntro }} />
          {/* Le tutti 12 portées : table HTML (les graveurs actuels s'arrêtent à 2 portées) */}
          <div style={S.tableWrap}>
            <table style={{ ...S.table, minWidth: 560 }}>
              <thead>
                <tr>{c.tuttiHeaders.map((hh) => <th key={hh} style={S.th}>{hh}</th>)}</tr>
              </thead>
              <tbody>
                {c.tuttiRows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 ? "#fafafa" : "#fff" }}>
                    <td style={{ ...S.td, fontWeight: 600, color: ACCENT, whiteSpace: "nowrap" }}>{row.instr}</td>
                    {row.a.map((cell, j) => (
                      <td key={j} style={S.td} dangerouslySetInnerHTML={{ __html: cell }} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.caption}>{c.resolCaption}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 14 }}>
            {c.resolRows.map((row, i) => (
              <div key={i} style={{ fontSize: 13, color: "#444", lineHeight: 1.6, padding: "8px 12px", borderRadius: 8, background: i % 2 === 0 ? "#fafafa" : "#fff", border: "0.5px solid #f0f0f0" }} dangerouslySetInnerHTML={{ __html: row }} />
            ))}
          </div>

          <div style={S.caption}>{c.contenuCaption}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 14 }}>
            {c.contenuList.map((item, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 10, padding: "10px 14px", borderRadius: 8, background: i % 2 === 0 ? "#fafafa" : "#fff", border: "0.5px solid #f0f0f0" }}>
                <div style={{ fontSize: 13, color: ACCENT, fontWeight: 700, marginTop: 1 }}>{i + 1}.</div>
                <div style={{ fontSize: 13, color: "#444", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item }} />
              </div>
            ))}
          </div>

          <div style={S.tip} dangerouslySetInnerHTML={{ __html: c.vertBilan }} />
          <ScoreBlock xml={xmlTuttiSon} caption={c.tuttiSonCaption}
            buttons={[{ label: c.btnTuttiSon, onClick: () => playChords(pianoRef, TUTTI_SON_MD, TUTTI_SON_MG) }]} />
        </div>
      )}

      {/* ══ 5. LA RÉDUCTION AU PIANO ══ */}
      {sec === "reduction" && (
        <div>
          <h2 style={S.h2}>{c.redH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.redP1 }} />

          <div style={S.caption}>{c.redCaption}</div>
          <div style={S.tableWrap}>
            <table style={{ ...S.table, minWidth: 560 }}>
              <thead>
                <tr>{c.redHeaders.map((hh, i) => <th key={i} style={S.th}>{hh}</th>)}</tr>
              </thead>
              <tbody>
                {c.redRows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 ? "#fafafa" : "#fff" }}>
                    <td style={{ ...S.td, fontWeight: 600, color: ACCENT, whiteSpace: "nowrap" }}>{row.main}</td>
                    {row.a.map((cell, j) => (
                      <td key={j} style={{ ...S.td, whiteSpace: "nowrap" }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ScoreBlock xml={xmlReduction} caption={c.redScoreCaption}
            buttons={[
              { label: c.btnReduction, onClick: () => playChords(pianoRef, RED_MD, RED_MG) },
              { label: c.btnTuttiComplet, onClick: () => playChords(pianoRef, TUTTI_COMPLET, []) },
            ]} />
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.redP2 }} />
        </div>
      )}

      {/* ══ 6. L'ÉQUILIBRE ET LES REGISTRES ══ */}
      {sec === "equilibre" && (
        <div>
          <h2 style={S.h2}>{c.eqH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.eqP1 }} />

          <h3 style={S.h3}>{c.dispoH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.dispoIntro }} />
          <div style={S.tableWrap}>
            <table style={{ ...S.table, minWidth: 620 }}>
              <thead>
                <tr>{c.dispoHeaders.map((hh) => <th key={hh} style={S.th}>{hh}</th>)}</tr>
              </thead>
              <tbody>
                {c.dispoRows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 ? "#fafafa" : "#fff" }}>
                    <td style={S.td} dangerouslySetInnerHTML={{ __html: row.nom }} />
                    {row.cells.map((cell, j) => (
                      <td key={j} style={S.td} dangerouslySetInnerHTML={{ __html: cell }} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ScoreBlock xml={xmlDispo} caption={c.dispoScoreCaption}
            buttons={[{ label: c.btnDispo, onClick: () => playChord(pianoRef, DISPO_ACCORD) }]} />

          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.eqP2 }} />
          <div style={S.warn} dangerouslySetInnerHTML={{ __html: c.piegesWarn }} />
        </div>
      )}

      {/* ══ 7. ENTRAÎNEMENT ══ */}
      {sec === "quiz" && (
        <div>
          <h2 style={S.h2}>{c.entrainH2}</h2>

          <h3 style={S.h3}>{c.methodeH3}</h3>
          <div style={S.tip} dangerouslySetInnerHTML={{ __html: c.methodeP }} />

          <h3 style={S.h3}>{c.exercicesH3}</h3>

          {/* Exercice a — drill de transposition avec écoute écrit/réel par ligne */}
          <div style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "12px 14px", marginBottom: 8, background: "#fff" }}>
            <div style={{ fontSize: 13.5, fontWeight: 600, color: "#111", marginBottom: 4 }}>{c.exATitre}</div>
            <div style={{ fontSize: 13, color: "#444", marginBottom: 6, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: c.exAIntro }} />
            <div style={S.tableWrap}>
              <table style={{ ...S.table, minWidth: 520 }}>
                <thead>
                  <tr>
                    <th style={S.th}>{c.exAHeaders[0]}</th>
                    <th style={S.th}>{c.exAHeaders[1]}</th>
                    {openExA && <th style={S.th}>{c.exAHeaders[2]}</th>}
                  </tr>
                </thead>
                <tbody>
                  {c.exARows.map((row, i) => (
                    <tr key={i} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 ? "#fafafa" : "#fff" }}>
                      <td style={{ ...S.td, fontWeight: 600, color: ACCENT, whiteSpace: "nowrap" }}>{row.instrument}</td>
                      <td style={{ ...S.td, whiteSpace: "nowrap" }}>
                        {row.ecrit}{" "}
                        <button style={S.miniBtn} onClick={() => playSeq(pianoRef, EXA_AUDIO[i].ecrit)}>🔊 {c.btnEcrit}</button>
                      </td>
                      {openExA && (
                        <td style={{ ...S.td, whiteSpace: "nowrap" }}>
                          <span dangerouslySetInnerHTML={{ __html: row.reel }} />{" "}
                          <button style={S.miniBtn} onClick={() => playSeq(pianoRef, EXA_AUDIO[i].reel)}>🔊 {c.btnSonnant}</button>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ fontSize: 13, color: "#444", marginBottom: 8, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: c.exAEchauffement }} />
            <button onClick={() => setOpenExA((v) => !v)} style={S.toggleBtn(openExA)}>
              {openExA ? c.masquerCorrige : c.voirCorrige}
            </button>
          </div>

          {/* Exercice b — mini-conducteur à réduire */}
          <div style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "12px 14px", marginBottom: 8, background: "#fff" }}>
            <div style={{ fontSize: 13.5, fontWeight: 600, color: "#111", marginBottom: 4 }}>{c.exBTitre}</div>
            <div style={{ fontSize: 13, color: "#444", marginBottom: 6, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: c.exBIntro }} />
            <div style={S.tableWrap}>
              <table style={{ ...S.table, minWidth: 480 }}>
                <thead>
                  <tr>{c.exBHeaders.map((hh) => <th key={hh} style={S.th}>{hh}</th>)}</tr>
                </thead>
                <tbody>
                  {c.exBRows.map((row, i) => (
                    <tr key={i} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 ? "#fafafa" : "#fff" }}>
                      <td style={{ ...S.td, fontWeight: 600, color: ACCENT, whiteSpace: "nowrap" }}>{row.instr}</td>
                      {row.a.map((cell, j) => (
                        <td key={j} style={S.td}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ fontSize: 13, color: "#444", marginBottom: 8, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: c.exBConsigne }} />
            <button onClick={() => setOpenExB((v) => !v)} style={S.toggleBtn(openExB)}>
              {openExB ? c.masquerCorrige : c.voirCorrige}
            </button>
            {openExB && (
              <div style={{ marginTop: 10 }}>
                <div style={S.caption}>{c.corrigeLabel}</div>
                <div style={{ fontSize: 12.5, color: "#555", lineHeight: 1.7, background: "#fafafa", border: "0.5px solid #f0f0f0", borderRadius: 8, padding: "10px 14px" }} dangerouslySetInnerHTML={{ __html: c.exBCorrige }} />
                <ScoreBlock xml={xmlExB} caption={c.exBScoreCaption}
                  buttons={[{ label: c.listenBtn, onClick: () => playChords(pianoRef, EXB_MD, EXB_MG) }]} />
              </div>
            )}
          </div>

          {/* Exercice c — synthèse avec /analyse-partition */}
          <h3 style={S.h3}>{c.capstoneH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.capstoneP }} />
          <LinkCard href={`/${locale}/analyse-partition`} titre={c.linkAnalyseur.titre} desc={c.linkAnalyseur.desc} go={c.linkGo} prominent />

          <h3 style={S.h3}>{c.quizH3}</h3>
          {done ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>{scr >= 8 ? "🎺" : scr >= 6 ? "👍" : "💪"}</div>
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

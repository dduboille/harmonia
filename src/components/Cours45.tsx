"use client";

/**
 * Cours45.tsx
 * Harmonia · Niveau 3 (≈ Licence L3) · Cours 45 — Méthodologie du commentaire d'écoute
 *
 * Dernier cours du parcours licence/maîtrise : la méthode complète de l'épreuve
 * (grille des paramètres, marqueurs stylistiques, plan, vocabulaire) + le gymnase
 * harmonique (cadences, modes, modulations, rythme harmonique, textures, formes).
 * Sept sections calquées sur la spec validée :
 *  1. L'épreuve            — définition + règle d'or « décrire → identifier → situer »
 *  2. La grille d'écoute   — table des 8 paramètres (cœur du cours)
 *  3. Les périodes         — table des marqueurs stylistiques (6 périodes)
 *  4. Les formes           — indices auditifs + période 8 mesures + mini-rondo
 *  5. Entendre l'harmonie  — 4 cadences, majeur/mineur, 2 modulations,
 *                            rythme harmonique, 4 textures (tout gravé ET joué)
 *  6. Le plan              — plan en 3 temps, registre, pièges, commentaire modèle
 *  7. Entraînement         — méthode, exercices 1-2 (corrigés modèles),
 *                            drills à l'aveugle (ex. 3 et 4), quiz 10 questions
 *
 * Gravure (Verovio via StudioScore), trois graveurs selon la matière :
 *  - SATB en rondes (satb-vers-musicxml) : les 4 cadences, la progression en Do
 *    mineur (armure gravée via « Eb » = l'armure de Do mineur, le Si♮ porte son
 *    bécarre), les 2 modulations, la version lente du rythme harmonique et la
 *    période de 8 mesures. NB : le graveur SATB n'écrit que des rondes — la
 *    version RAPIDE du rythme harmonique n'est donc pas re-gravée : même
 *    partition, deux boutons d'écoute (lent / rapide ×2), le phénomène est
 *    purement auditif.
 *  - 1 voix (contrepoint-vers-musicxml) : la monodie et le refrain du mini-rondo.
 *  - Piece (piece-vers-musicxml) : l'homophonie note contre note (noires réelles),
 *    le canon à 2 voix (l'entrée décalée exige un silence de mesure — le graveur
 *    contrepoint n'a pas de silence par construction) et la mélodie accompagnée
 *    (blanches au soprano + basse d'Alberti en croches).
 * Audio : PianoPlayer en noms de notes FRANÇAIS (Do Ré Mi…), Do4 = do central.
 * Les couplets B et C du mini-rondo ne sont PAS gravés : la spec n'en donne pas
 * les notes (description seulement) — aucune note inventée.
 */

import React, { useMemo, useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { cours45Content, type Cours45Locale } from "@/data/cours45Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";
import StudioScore from "@/components/StudioScore";
import { satbVersMusicXML } from "@/lib/satb-vers-musicxml";
import { contrepointVersMusicXML, type CpVoix, type CpDuree } from "@/lib/contrepoint-vers-musicxml";
import { pieceVersMusicXML } from "@/lib/piece-vers-musicxml";
import { specAudio, noteAudio } from "@/lib/cours-audio";
import type { Piece, Note as PieceNote, Hauteur, BaseDuree, LettreNote } from "@/lib/piece-model";
import type { Measure, NoteEntry, NoteName } from "@/lib/satb-rules";

// ─── Données musicales des exemples (invariantes : mêmes notes dans les 6 langues) ──
// Noms de notes en solfège FR ; l'octave suit la convention PianoPlayer (Do4 = do central).

interface Voicing { s: string; a: string; t: string; b: string }

// Section 4 — Illustration 1 : période antécédent/conséquent, Do majeur, 8 mesures.
// I – IV – I6/4 – V (demi-cadence) | I – IV – V7 – I (cadence parfaite).
const PERIODE: Voicing[] = [
  { s: "Mi5", a: "Sol4", t: "Do4", b: "Do3" },
  { s: "Fa5", a: "La4", t: "Do4", b: "Fa2" },
  { s: "Mi5", a: "Sol4", t: "Do4", b: "Sol2" },
  { s: "Ré5", a: "Sol4", t: "Si3", b: "Sol2" },
  { s: "Mi5", a: "Sol4", t: "Do4", b: "Do3" },
  { s: "Fa5", a: "La4", t: "Do4", b: "Fa2" },
  { s: "Ré5", a: "Fa4", t: "Si3", b: "Sol2" },
  { s: "Do5", a: "Mi4", t: "Do4", b: "Do3" },
];

// Section 5.1 — les quatre cadences (Do majeur, SATB). L'ordre est celui du drill
// (exercice 3) et de c.cadenceNames : parfaite, plagale, demi-cadence, rompue.
const CAD_PARFAITE: Voicing[] = [
  { s: "Mi5", a: "Sol4", t: "Do4", b: "Do3" },
  { s: "Fa5", a: "La4", t: "Do4", b: "Fa3" },
  { s: "Ré5", a: "Fa4", t: "Si3", b: "Sol3" },
  { s: "Do5", a: "Mi4", t: "Do4", b: "Do3" },
];
const CAD_PLAGALE: Voicing[] = [
  { s: "Do5", a: "Mi4", t: "Sol3", b: "Do3" },
  { s: "Do5", a: "Fa4", t: "La3", b: "Fa2" },
  { s: "Do5", a: "Mi4", t: "Sol3", b: "Do3" },
];
const CAD_DEMI: Voicing[] = [
  { s: "Mi5", a: "Sol4", t: "Do4", b: "Do3" },
  { s: "Fa5", a: "La4", t: "Do4", b: "Fa2" },
  { s: "Ré5", a: "Sol4", t: "Si3", b: "Sol2" },
];
const CAD_ROMPUE: Voicing[] = [
  { s: "Mi5", a: "Sol4", t: "Do4", b: "Do3" },
  { s: "Ré5", a: "Fa4", t: "Si3", b: "Sol2" },
  { s: "Do5", a: "Mi4", t: "Do4", b: "La2" },
];
const CADENCES: Voicing[][] = [CAD_PARFAITE, CAD_PLAGALE, CAD_DEMI, CAD_ROMPUE];

// Section 5.2 — la même marche i–iv–V7–i en Do mineur (Si bécarre = sensible).
const MINEUR: Voicing[] = [
  { s: "Mib5", a: "Sol4", t: "Do4", b: "Do3" },
  { s: "Fa5", a: "Lab4", t: "Do4", b: "Fa3" },
  { s: "Ré5", a: "Fa4", t: "Si3", b: "Sol3" },
  { s: "Do5", a: "Mib4", t: "Do4", b: "Do3" },
];

// Section 5.3 — modulation vers la dominante (Do → Sol majeur, signal : Fa♯).
const MODUL_DOM: Voicing[] = [
  { s: "Mi5", a: "Sol4", t: "Do4", b: "Do3" },
  { s: "Fa5", a: "La4", t: "Do4", b: "Fa3" },
  { s: "Ré5", a: "Sol4", t: "Si3", b: "Sol3" },
  { s: "Ré5", a: "Fa#4", t: "Do4", b: "Ré3" },
  { s: "Ré5", a: "Sol4", t: "Si3", b: "Sol2" },
];
// Section 5.3 — modulation vers le relatif (Do → La mineur, signal : Sol♯).
const MODUL_REL: Voicing[] = [
  { s: "Do5", a: "Mi4", t: "Sol3", b: "Do3" },
  { s: "Ré5", a: "Mi4", t: "Sol#3", b: "Mi3" },
  { s: "Do5", a: "Mi4", t: "La3", b: "La2" },
];

// Section 5.4 — rythme harmonique : progression I – vi – IV – V – I.
const RYTHME: Voicing[] = [
  { s: "Mi5", a: "Sol4", t: "Do4", b: "Do3" },
  { s: "Mi5", a: "La4", t: "Do4", b: "La2" },
  { s: "Fa5", a: "La4", t: "Do4", b: "Fa2" },
  { s: "Ré5", a: "Sol4", t: "Si3", b: "Sol2" },
  { s: "Do5", a: "Mi4", t: "Do4", b: "Do3" },
];

// Section 5.5 — homophonie : le thème Do5-Ré5-Mi5-Do5 note contre note (noires).
const HOMOPHONIE: Voicing[] = [
  { s: "Do5", a: "Sol4", t: "Mi4", b: "Do3" },
  { s: "Ré5", a: "Sol4", t: "Si3", b: "Sol2" },
  { s: "Mi5", a: "Sol4", t: "Do4", b: "Do3" },
  { s: "Do5", a: "Sol4", t: "Mi4", b: "Do3" },
];

// Section 5.5 — monodie (le thème seul) et section 4 — refrain du mini-rondo.
const THEME: { tok: string; dur: CpDuree }[] = [
  { tok: "Do5", dur: "quarter" }, { tok: "Ré5", dur: "quarter" },
  { tok: "Mi5", dur: "quarter" }, { tok: "Do5", dur: "quarter" },
];
const RONDO_A: { tok: string; dur: CpDuree }[] = [
  { tok: "Do5", dur: "quarter" }, { tok: "Ré5", dur: "quarter" }, { tok: "Mi5", dur: "quarter" }, { tok: "Do5", dur: "quarter" },
  { tok: "Fa5", dur: "quarter" }, { tok: "Mi5", dur: "quarter" }, { tok: "Ré5", dur: "quarter" }, { tok: "Si4", dur: "quarter" },
  { tok: "Do5", dur: "quarter" }, { tok: "Mi5", dur: "quarter" }, { tok: "Sol5", dur: "quarter" }, { tok: "Mi5", dur: "quarter" },
  { tok: "Ré5", dur: "half" }, { tok: "Do5", dur: "half" },
];

// Section 5.5 — canon (Frère Jacques) : voix 2 une mesure plus tard, octave inférieure.
const CANON_V1: { tok: string; dur: BaseDuree }[][] = [
  [{ tok: "Do5", dur: "noire" }, { tok: "Ré5", dur: "noire" }, { tok: "Mi5", dur: "noire" }, { tok: "Do5", dur: "noire" }],
  [{ tok: "Mi5", dur: "noire" }, { tok: "Fa5", dur: "noire" }, { tok: "Sol5", dur: "blanche" }],
  [],
];
const CANON_V2: { tok: string; dur: BaseDuree }[][] = [
  [],
  [{ tok: "Do4", dur: "noire" }, { tok: "Ré4", dur: "noire" }, { tok: "Mi4", dur: "noire" }, { tok: "Do4", dur: "noire" }],
  [{ tok: "Mi4", dur: "noire" }, { tok: "Fa4", dur: "noire" }, { tok: "Sol4", dur: "blanche" }],
];

// Section 5.5 — mélodie accompagnée : thème en blanches + basse d'Alberti en croches.
const ALBERTI_SOP: { tok: string; dur: BaseDuree }[][] = [
  [{ tok: "Do5", dur: "blanche" }, { tok: "Ré5", dur: "blanche" }],
  [{ tok: "Mi5", dur: "blanche" }, { tok: "Do5", dur: "blanche" }],
];
const ALBERTI_BAS: { tok: string; dur: BaseDuree }[][] = [
  ["Do3", "Sol3", "Mi3", "Sol3", "Sol2", "Ré3", "Si2", "Ré3"].map((tok) => ({ tok, dur: "croche" as BaseDuree })),
  ["Do3", "Sol3", "Mi3", "Sol3", "Do3", "Sol3", "Mi3", "Sol3"].map((tok) => ({ tok, dur: "croche" as BaseDuree })),
];

// ─── Conversions solfège FR → graveurs / audio ───────────────────────────────────

const FR_TO_EN: Record<string, string> = { Do: "C", "Ré": "D", Mi: "E", Fa: "F", Sol: "G", La: "A", Si: "B" };

/** « Sol#3 » → { fr: "Sol#", oct: 3 }. */
function splitTok(tok: string): { fr: string; oct: number } {
  return { fr: tok.slice(0, -1), oct: parseInt(tok.slice(-1), 10) };
}

/** Nom FR (« Mib ») → nom moteur anglais (« Eb »). */
function frToEn(fr: string): string {
  const acc = fr.endsWith("#") ? "#" : fr.endsWith("b") ? "b" : "";
  const base = acc ? fr.slice(0, -1) : fr;
  return (FR_TO_EN[base] ?? base) + acc;
}

/** Une case de voix → NoteEntry (satb-vers-musicxml). */
function toEntry(tok: string): NoteEntry {
  const { fr, oct } = splitTok(tok);
  return { name: frToEn(fr) as NoteName, octave: oct };
}

function toMeasures(vs: Voicing[]): Measure[] {
  return vs.map((v) => ({ soprano: toEntry(v.s), alto: toEntry(v.a), tenor: toEntry(v.t), bass: toEntry(v.b) }));
}

/** « Sol#3 » → Hauteur (piece-model). */
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

/** Piece à 2 voix (soprano + alto OU soprano + basse) depuis des listes par mesure. */
function deuxVoixPiece(
  haut: { tok: string; dur: BaseDuree }[][],
  bas: { tok: string; dur: BaseDuree }[][],
  voixBasse: "alto" | "basse",
): Piece {
  const nb = Math.max(haut.length, bas.length);
  return {
    armure: 0,
    chiffrage: { temps: 4, unite: 4 },
    mesures: Array.from({ length: nb }, (_, i) => ({
      voix: {
        soprano: (haut[i] ?? []).map((n) => pNote(n.tok, n.dur)),
        alto: voixBasse === "alto" ? (bas[i] ?? []).map((n) => pNote(n.tok, n.dur)) : [],
        tenor: [],
        basse: voixBasse === "basse" ? (bas[i] ?? []).map((n) => pNote(n.tok, n.dur)) : [],
      },
    })),
  };
}

/** Mélodie une voix → MusicXML (contrepoint, clé de sol, armure de Do). */
function monodieXML(notes: { tok: string; dur: CpDuree }[]): string {
  const voix: CpVoix = {
    clef: "sol",
    notes: notes.map((n) => {
      const { fr, oct } = splitTok(n.tok);
      return { name: frToEn(fr) as NoteName, octave: oct, duree: n.dur };
    }),
  };
  return contrepointVersMusicXML([voix], { beats: 4, beatType: 4, keySignature: "C", showKeySignature: true });
}

// ─── Audio (PianoPlayer, noms FR — les bémols FR « Mib » sont compris nativement) ──
// L'octave gravée passe par specAudio/noteAudio (lib/cours-audio) : sans cette
// correction, PianoPlayer sonnerait une octave au-dessus de la partition affichée.

/** Colonne SATB → specs « Nom:octave » du grave à l'aigu. */
function toSpecs(v: Voicing): string[] {
  return [v.b, v.t, v.a, v.s].map(specAudio);
}

/** Joue une progression SATB, un accord toutes les gapMs millisecondes. */
function playProg(ref: React.RefObject<PianoPlayerRef | null>, vs: Voicing[], gapMs = 1150, dureeS = 1.5) {
  vs.forEach((v, i) => setTimeout(() => ref.current?.playVoicing(toSpecs(v), { duration: dureeS }), i * gapMs));
}

/** Joue une mélodie (durées : noire = pas, blanche = 2 pas). */
function playMelodie(ref: React.RefObject<PianoPlayerRef | null>, notes: { tok: string; dur: CpDuree | BaseDuree }[], pas = 0.5) {
  let t = 0;
  notes.forEach((n) => {
    const d = n.dur === "half" || n.dur === "blanche" ? 2 * pas : n.dur === "croche" ? pas / 2 : pas;
    const { nom, octave } = noteAudio(n.tok);
    ref.current?.playNote(nom, octave, { startTime: t, duration: d * 0.95 });
    t += d;
  });
}

/** Joue le canon : voix 1 puis voix 2 décalée d'une mesure (4 noires). */
function playCanon(ref: React.RefObject<PianoPlayerRef | null>, pas = 0.5) {
  const v1 = CANON_V1.flat();
  const v2 = CANON_V2.flat();
  playMelodie(ref, v1, pas);
  let t = 4 * pas; // entrée une mesure plus tard
  v2.forEach((n) => {
    const d = n.dur === "blanche" ? 2 * pas : pas;
    const { nom, octave } = noteAudio(n.tok);
    ref.current?.playNote(nom, octave, { startTime: t, duration: d * 0.95 });
    t += d;
  });
}

/** Joue la mélodie accompagnée : blanches au soprano + croches d'Alberti. */
function playAlberti(ref: React.RefObject<PianoPlayerRef | null>, croche = 0.3) {
  ALBERTI_SOP.flat().forEach((n, i) => {
    const { nom, octave } = noteAudio(n.tok);
    ref.current?.playNote(nom, octave, { startTime: i * 4 * croche, duration: 4 * croche * 0.95 });
  });
  ALBERTI_BAS.flat().forEach((n, i) => {
    const { nom, octave } = noteAudio(n.tok);
    ref.current?.playNote(nom, octave, { startTime: i * croche, duration: croche * 0.9, velocity: 0.55 });
  });
}

/** Rythme harmonique : lent (1 accord/mesure) ou rapide (noires, joué deux fois). */
function playRythme(ref: React.RefObject<PianoPlayerRef | null>, rapide: boolean) {
  if (!rapide) {
    playProg(ref, RYTHME, 1500, 1.9);
  } else {
    playProg(ref, [...RYTHME, ...RYTHME], 375, 0.5);
  }
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
const ACCENT = "#136A63"; // vert-bleu profond — identité visuelle du cours 45
const ACCENT_BG = "#E4F1EF";

// ─── Styles (repris des cours 42/43/44) ─────────────────────────────────────────

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
  tip: { borderLeft: `2px solid ${ACCENT}`, padding: "8px 14px", background: ACCENT_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#0E4A44", lineHeight: 1.6 } as React.CSSProperties,
  warn: { borderLeft: "2px solid #BA7517", padding: "10px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "14px 0", fontSize: 13, color: "#633806", lineHeight: 1.65 } as React.CSSProperties,
  quote: { borderLeft: "2px solid #999", padding: "10px 14px", background: "#fafafa", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13.5, color: "#333", lineHeight: 1.7 } as React.CSSProperties,
  tableWrap: { overflowX: "auto" as const, margin: "12px 0" },
  table: { width: "100%", borderCollapse: "collapse" as const, fontSize: 12.5 },
  th: { textAlign: "left" as const, padding: "6px 9px", fontWeight: 500, color: "#666", borderBottom: "0.5px solid #e5e5e5", whiteSpace: "nowrap" as const },
  td: { padding: "6px 9px", color: "#555", verticalAlign: "top" as const, lineHeight: 1.55 },
  caption: { fontSize: 11, color: "#999", marginBottom: 4 } as React.CSSProperties,
  listenBtn: { fontSize: 12, padding: "5px 14px", border: `0.5px solid ${ACCENT}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: ACCENT, marginTop: 8, marginRight: 6 } as React.CSSProperties,
  miniBtn: { fontSize: 11, padding: "2px 8px", border: `0.5px solid ${ACCENT}`, borderRadius: 12, cursor: "pointer", background: "transparent", color: ACCENT } as React.CSSProperties,
  scoreBox: { border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "12px 14px", margin: "12px 0", background: "#fff" } as React.CSSProperties,
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
        {buttons.map((b, i) => (
          <button key={i} onClick={b.onClick} style={S.listenBtn}>🔊 {b.label}</button>
        ))}
      </div>
    </div>
  );
}

/**
 * Drill à l'aveugle : un bouton joue un exemple au hasard (audio seul), l'élève
 * choisit parmi les réponses, retour immédiat + score courant. État local, aucun
 * moteur nouveau : uniquement PianoPlayer.
 */
function DrillAveugle({ c, options, play, scoreLabel }: {
  c: Cours45Locale;
  options: string[];
  play: (idx: number) => void;
  scoreLabel: string;
}) {
  const [cur, setCur] = useState<number | null>(null);
  const [answered, setAnswered] = useState<number | null>(null);
  const [ok, setOk] = useState(0);
  const [total, setTotal] = useState(0);

  const lancer = () => {
    const idx = Math.floor(Math.random() * options.length);
    setCur(idx);
    setAnswered(null);
    play(idx);
  };
  const repondre = (i: number) => {
    if (cur === null || answered !== null) return;
    setAnswered(i);
    setTotal((t) => t + 1);
    if (i === cur) setOk((o) => o + 1);
  };

  return (
    <div style={{ border: `0.5px solid ${ACCENT}`, borderRadius: 10, padding: "12px 14px", margin: "12px 0", background: "#fff" }}>
      <div style={{ marginBottom: 10 }}>
        <button onClick={lancer} style={{ ...S.listenBtn, marginTop: 0, background: ACCENT_BG, fontWeight: 600 }}>
          🔊 {c.drillPlayBtn}
        </button>
        {cur !== null && (
          <button onClick={() => play(cur)} style={{ ...S.listenBtn, marginTop: 0 }}>
            {c.drillReplayBtn}
          </button>
        )}
      </div>
      <div style={{ fontSize: 12, color: "#999", marginBottom: 6 }}>{c.drillAnswerPrompt}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 8 }}>
        {options.map((opt, i) => {
          let bg = "#fff", border = "#ddd", color = "#555";
          if (answered !== null) {
            if (i === cur) { bg = "#E1F5EE"; border = "#0F6E56"; color = "#085041"; }
            else if (i === answered) { bg = "#FCEBEB"; border = "#A32D2D"; color = "#501313"; }
          }
          return (
            <button key={i} onClick={() => repondre(i)} disabled={cur === null || answered !== null}
              style={{ fontSize: 12.5, padding: "7px 12px", border: `0.5px solid ${border}`, borderRadius: 8, cursor: cur === null || answered !== null ? "default" : "pointer", background: bg, color, textAlign: "left", transition: "all .12s" }}>
              {opt}
            </button>
          );
        })}
      </div>
      {answered !== null && cur !== null && (
        <div style={{ padding: "8px 12px", borderRadius: 8, background: answered === cur ? "#E1F5EE" : "#FCEBEB", fontSize: 12.5, color: answered === cur ? "#085041" : "#501313", marginBottom: 8 }}>
          {answered === cur ? c.drillCorrect : `${c.drillWrong} ${options[cur]}`}
        </div>
      )}
      <div style={{ fontSize: 12, color: "#666" }}>
        {scoreLabel} : <strong>{ok} / {total}</strong>
        {total > 0 && (
          <button onClick={() => { setOk(0); setTotal(0); setCur(null); setAnswered(null); }} style={{ ...S.miniBtn, marginLeft: 10 }}>
            {c.drillResetBtn}
          </button>
        )}
      </div>
    </div>
  );
}

// ─── Composant ───────────────────────────────────────────────────────────────────

const SECTIONS = ["intro", "grille", "periodes", "formes", "harmonie", "plan", "quiz"] as const;

export default function Cours45() {
  const i18n = useCoursI18n("cours45");
  const c = useCoursContent<Cours45Locale>(cours45Content);
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

  // Gravures (mémoïsées : notes invariantes)
  const xmlPeriode = useMemo(() => satbVersMusicXML(toMeasures(PERIODE), "C", true), []);
  const xmlCadences = useMemo(() => CADENCES.map((v) => satbVersMusicXML(toMeasures(v), "C", true)), []);
  // « Eb » = l'armure de Do mineur (3 bémols) : le graveur dérive l'armure d'une
  // clé majeure ; le Si♮ (sensible) porte alors son bécarre, comme attendu.
  const xmlMineur = useMemo(() => satbVersMusicXML(toMeasures(MINEUR), "Eb", true), []);
  const xmlModDom = useMemo(() => satbVersMusicXML(toMeasures(MODUL_DOM), "C", true), []);
  const xmlModRel = useMemo(() => satbVersMusicXML(toMeasures(MODUL_REL), "C", true), []);
  const xmlRythme = useMemo(() => satbVersMusicXML(toMeasures(RYTHME), "C", true), []);
  const xmlMonodie = useMemo(() => monodieXML(THEME), []);
  const xmlRondo = useMemo(() => monodieXML(RONDO_A), []);
  // Homophonie note contre note : les 4 voix en noires dans UNE mesure (modèle Piece).
  const xmlHomophonie = useMemo(() => pieceVersMusicXML({
    armure: 0,
    chiffrage: { temps: 4, unite: 4 },
    mesures: [{
      voix: {
        soprano: HOMOPHONIE.map((v) => pNote(v.s, "noire")),
        alto: HOMOPHONIE.map((v) => pNote(v.a, "noire")),
        tenor: HOMOPHONIE.map((v) => pNote(v.t, "noire")),
        basse: HOMOPHONIE.map((v) => pNote(v.b, "noire")),
      },
    }],
  }), []);
  const xmlCanon = useMemo(() => pieceVersMusicXML(deuxVoixPiece(CANON_V1, CANON_V2, "alto")), []);
  const xmlAlberti = useMemo(() => pieceVersMusicXML(deuxVoixPiece(ALBERTI_SOP, ALBERTI_BAS, "basse")), []);

  const playHomophonie = () => playProg(pianoRef, HOMOPHONIE, 600, 0.7);
  const textureXml = [xmlMonodie, xmlHomophonie, xmlCanon, xmlAlberti];
  const texturePlay = [
    () => playMelodie(pianoRef, THEME),
    playHomophonie,
    () => playCanon(pianoRef),
    () => playAlberti(pianoRef),
  ];

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

      {/* Note d'honnêteté « Comment travailler ce cours » — toujours visible, en tête */}
      <div style={S.warn}>
        <div style={{ fontWeight: 700, marginBottom: 4 }}>🎧 {c.honneteTitle}</div>
        <div dangerouslySetInnerHTML={{ __html: c.honneteBody }} />
      </div>

      <MaitreCard
        composer="Olivier Messiaen"
        period="1908–1992"
        emoji="👂"
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

      {/* ══ 1. L'ÉPREUVE ══ */}
      {sec === "intro" && (
        <div>
          <h2 style={S.h2}>{c.introH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.introP1 }} />
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.introP2 }} />
          <div style={S.tip} dangerouslySetInnerHTML={{ __html: c.regleOr }} />
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.introP3 }} />
        </div>
      )}

      {/* ══ 2. LA GRILLE D'ÉCOUTE ══ */}
      {sec === "grille" && (
        <div>
          <h2 style={S.h2}>{c.grilleH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.grilleP1 }} />
          <div style={S.caption}>{c.grilleCaption}</div>
          <div style={S.tableWrap}>
            <table style={S.table}>
              <thead>
                <tr>{c.grilleHeaders.map((hh) => <th key={hh} style={S.th}>{hh}</th>)}</tr>
              </thead>
              <tbody>
                {c.grilleRows.map((r, i) => (
                  <tr key={i} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 ? "#fafafa" : "#fff" }}>
                    <td style={{ ...S.td, whiteSpace: "nowrap" }} dangerouslySetInnerHTML={{ __html: r.param }} />
                    <td style={S.td} dangerouslySetInnerHTML={{ __html: r.questions }} />
                    <td style={S.td} dangerouslySetInnerHTML={{ __html: r.vocab }} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.grilleP2 }} />
        </div>
      )}

      {/* ══ 3. LES PÉRIODES ══ */}
      {sec === "periodes" && (
        <div>
          <h2 style={S.h2}>{c.periodesH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.periodesP1 }} />
          <div style={S.caption}>{c.periodesCaption}</div>
          <div style={S.tableWrap}>
            <table style={{ ...S.table, minWidth: 860 }}>
              <thead>
                <tr>{c.periodesHeaders.map((hh) => <th key={hh} style={S.th}>{hh}</th>)}</tr>
              </thead>
              <tbody>
                {c.periodesRows.map((r, i) => (
                  <tr key={i} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 ? "#fafafa" : "#fff" }}>
                    <td style={{ ...S.td, minWidth: 120 }} dangerouslySetInnerHTML={{ __html: r.periode }} />
                    <td style={S.td} dangerouslySetInnerHTML={{ __html: r.effectif }} />
                    <td style={S.td} dangerouslySetInnerHTML={{ __html: r.texture }} />
                    <td style={S.td} dangerouslySetInnerHTML={{ __html: r.harmonie }} />
                    <td style={S.td} dangerouslySetInnerHTML={{ __html: r.formes }} />
                    <td style={S.td} dangerouslySetInnerHTML={{ __html: r.indices }} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={S.tip} dangerouslySetInnerHTML={{ __html: c.periodesP2 }} />
        </div>
      )}

      {/* ══ 4. LES FORMES ══ */}
      {sec === "formes" && (
        <div>
          <h2 style={S.h2}>{c.formesH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.formesP1 }} />
          <ul style={S.ul}>
            {c.formesList.map((it, i) => <li key={i} dangerouslySetInnerHTML={{ __html: it }} />)}
          </ul>

          <h3 style={S.h3}>{c.illu1H3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.illu1P }} />
          <ScoreBlock xml={xmlPeriode} caption={c.illu1Chords}
            buttons={[{ label: c.listenBtn, onClick: () => playProg(pianoRef, PERIODE, 1500, 1.9) }]} />
          <div style={S.tip} dangerouslySetInnerHTML={{ __html: c.illu1Ecoute }} />

          <h3 style={S.h3}>{c.illu2H3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.illu2P1 }} />
          <ScoreBlock xml={xmlRondo}
            buttons={[{ label: c.listenBtn, onClick: () => playMelodie(pianoRef, RONDO_A) }]} />
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.illu2P2 }} />
        </div>
      )}

      {/* ══ 5. ENTENDRE L'HARMONIE ══ */}
      {sec === "harmonie" && (
        <div>
          <h2 style={S.h2}>{c.harmH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.harmP1 }} />

          <h3 style={S.h3}>{c.cadH3}</h3>
          {CADENCES.map((v, i) => (
            <div key={i}>
              <div style={{ fontSize: 13, color: "#333", marginTop: 10 }}>
                <span dangerouslySetInnerHTML={{ __html: c.cadLabels[i].nom }} />
                {" — "}
                <span style={{ color: ACCENT }} dangerouslySetInnerHTML={{ __html: c.cadLabels[i].accords }} />
              </div>
              <ScoreBlock xml={xmlCadences[i]}
                buttons={[{ label: c.listenBtn, onClick: () => playProg(pianoRef, v) }]} />
            </div>
          ))}
          <div style={S.tip} dangerouslySetInnerHTML={{ __html: c.cadEcoute }} />

          <h3 style={S.h3}>{c.modeH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.modeP1 }} />
          <ScoreBlock xml={xmlMineur}
            buttons={[
              { label: c.modeMinBtn, onClick: () => playProg(pianoRef, MINEUR) },
              { label: c.modeMajBtn, onClick: () => playProg(pianoRef, CAD_PARFAITE) },
            ]} />
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.modeP2 }} />

          <h3 style={S.h3}>{c.modulH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.modulP1 }} />
          <div style={{ fontSize: 13, color: "#333", marginTop: 10 }} dangerouslySetInnerHTML={{ __html: c.modulDomTitle }} />
          <ScoreBlock xml={xmlModDom}
            buttons={[{ label: c.listenBtn, onClick: () => playProg(pianoRef, MODUL_DOM) }]} />
          <div style={{ fontSize: 13, color: "#333", marginTop: 10 }} dangerouslySetInnerHTML={{ __html: c.modulRelTitle }} />
          <ScoreBlock xml={xmlModRel}
            buttons={[{ label: c.listenBtn, onClick: () => playProg(pianoRef, MODUL_REL) }]} />
          <div style={S.tip} dangerouslySetInnerHTML={{ __html: c.modulEcoute }} />

          <h3 style={S.h3}>{c.rythmeH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.rythmeP1 }} />
          <ScoreBlock xml={xmlRythme}
            buttons={[
              { label: c.rythmeLentBtn, onClick: () => playRythme(pianoRef, false) },
              { label: c.rythmeRapideBtn, onClick: () => playRythme(pianoRef, true) },
            ]} />
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.rythmeP2 }} />

          <h3 style={S.h3}>{c.textureH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.textureP1 }} />
          {c.textureLabels.map((t, i) => (
            <div key={i}>
              <div style={{ fontSize: 13, color: "#333", marginTop: 10 }}>
                <strong>{i + 1}. {t.titre}</strong>{" — "}
                <span dangerouslySetInnerHTML={{ __html: t.desc }} />
              </div>
              <ScoreBlock xml={textureXml[i]}
                buttons={[{ label: c.listenBtn, onClick: texturePlay[i] }]} />
            </div>
          ))}
          <div style={S.tip} dangerouslySetInnerHTML={{ __html: c.textureP2 }} />
        </div>
      )}

      {/* ══ 6. LE PLAN ══ */}
      {sec === "plan" && (
        <div>
          <h2 style={S.h2}>{c.planH2}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.planP1 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
            {c.planSteps.map((step, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 10, padding: "10px 14px", borderRadius: 8, background: i % 2 === 0 ? "#fafafa" : "#fff", border: "0.5px solid #f0f0f0" }}>
                <div style={{ fontSize: 13, color: ACCENT, fontWeight: 700, marginTop: 1 }}>{i + 1}.</div>
                <div style={{ fontSize: 13, color: "#444", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: step }} />
              </div>
            ))}
          </div>
          <div style={S.tip} dangerouslySetInnerHTML={{ __html: c.registreBox }} />
          <div style={S.info} dangerouslySetInnerHTML={{ __html: c.piegesBox }} />

          <h3 style={S.h3}>{c.modeleH3}</h3>
          <p style={{ ...S.p, fontStyle: "italic", fontSize: 13 }} dangerouslySetInnerHTML={{ __html: c.modeleDesc }} />
          <div style={S.quote} dangerouslySetInnerHTML={{ __html: c.modeleQuote }} />
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
              <button
                onClick={() => setOpenEx(openEx === i ? null : i)}
                style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${ACCENT}`, borderRadius: 20, cursor: "pointer", background: openEx === i ? ACCENT_BG : "transparent", color: ACCENT }}
              >
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

          {/* Drill exercice 3 — cadences à l'aveugle */}
          <h3 style={S.h3}>{c.drillCadH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.drillCadConsigne }} />
          <DrillAveugle c={c} options={c.cadenceNames}
            play={(idx) => playProg(pianoRef, CADENCES[idx])}
            scoreLabel={i18n.t("score")} />

          {/* Drill exercice 4a — dominante ou relatif */}
          <h3 style={S.h3}>{c.drillModH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.drillModConsigne }} />
          <DrillAveugle c={c} options={c.modulationNames}
            play={(idx) => playProg(pianoRef, idx === 0 ? MODUL_DOM : MODUL_REL)}
            scoreLabel={i18n.t("score")} />

          {/* Drill exercice 4b — rythme harmonique lent ou rapide */}
          <h3 style={S.h3}>{c.drillRytH3}</h3>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: c.drillRytConsigne }} />
          <DrillAveugle c={c} options={c.rythmeNames}
            play={(idx) => playRythme(pianoRef, idx === 1)}
            scoreLabel={i18n.t("score")} />

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

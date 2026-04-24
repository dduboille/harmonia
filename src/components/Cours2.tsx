"use client";

/**
 * Cours 2 — Les accords
 * Harmonia · Niveau 1
 */

import React, { useRef, useState, useCallback } from "react";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";

// ─── Styles ───────────────────────────────────────────────────────────────────

const S = {
  wrap: { fontFamily: "var(--font-sans, system-ui)", maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" } as React.CSSProperties,
  header: { padding: "1.5rem 0 1rem", borderBottom: "0.5px solid #e5e5e5", marginBottom: "1.25rem" } as React.CSSProperties,
  badge: { display: "inline-block", background: "#E6F1FB", color: "#185FA5", fontSize: 11, fontWeight: 500, padding: "2px 10px", borderRadius: 20, marginBottom: 6 } as React.CSSProperties,
  h1: { fontSize: 26, fontWeight: 500, color: "#111", margin: 0 } as React.CSSProperties,
  subtitle: { fontSize: 14, color: "#666", marginTop: 4, lineHeight: 1.6 } as React.CSSProperties,
  nav: { display: "flex", gap: 6, flexWrap: "wrap" as const, marginBottom: "1.5rem" },
  pill: (active: boolean): React.CSSProperties => ({
    fontSize: 12, padding: "5px 14px",
    border: `0.5px solid ${active ? "#333" : "#ddd"}`,
    borderRadius: 20, cursor: "pointer",
    background: active ? "#111" : "transparent",
    color: active ? "#fff" : "#666",
    transition: "all .15s",
  }),
  stitle: { fontSize: 17, fontWeight: 500, color: "#111", marginBottom: 8 } as React.CSSProperties,
  sbody: { fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: "1rem" } as React.CSSProperties,
  infoBox: { borderLeft: "2px solid #185FA5", padding: "8px 14px", background: "#E6F1FB", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#0C447C", lineHeight: 1.6 } as React.CSSProperties,
  warnBox: { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
};

// ─── Note engine ──────────────────────────────────────────────────────────────

// Toutes les notes avec leur index chromatique (0=Do)
const CHROMATIC_SHARP = ["Do","Do#","Ré","Ré#","Mi","Fa","Fa#","Sol","Sol#","La","La#","Si"];
const CHROMATIC_FLAT  = ["Do","Réb","Ré","Mib","Mi","Fa","Solb","Sol","Lab","La","Sib","Si"];

// Index chromatique d'une note (accepte dièse et bémol)
function noteIndex(note: string): number {
  let i = CHROMATIC_SHARP.indexOf(note);
  if (i >= 0) return i;
  i = CHROMATIC_FLAT.indexOf(note);
  return i >= 0 ? i : 0;
}

// Règle d'enharmonie : pour chaque type d'accord, utiliser bémols ou dièses ?
// Les accords mineurs/diminués utilisent des bémols pour les tierces/quintes altérées
// Les accords majeurs/augmentés utilisent des dièses
type AccordContext = "sharp" | "flat";

function noteAtCtx(rootNote: string, semis: number, ctx: AccordContext): string {
  const i = (noteIndex(rootNote) + semis) % 12;
  return ctx === "flat" ? CHROMATIC_FLAT[i] : CHROMATIC_SHARP[i];
}

// Nom de l'accord + notes selon le contexte
interface ChordNotes {
  name: string;
  notes: string[];
  dotKeys: string[];
}

function buildChord(root: string, intervals: number[], suffix: string, ctx: AccordContext, inversion = 0): ChordNotes {
  const rootIdx = noteIndex(root);
  const notes = intervals.map((iv, i) => {
    if (i === 0) return root; // fondamentale toujours telle quelle
    const idx = (rootIdx + iv) % 12;
    return ctx === "flat" ? CHROMATIC_FLAT[idx] : CHROMATIC_SHARP[idx];
  });

  // DotKeys avec octaves
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

  // Basse au renversement
  const bassNote = ctx === "flat"
    ? CHROMATIC_FLAT[(rootIdx + intervals[inversion]) % 12]
    : CHROMATIC_SHARP[(rootIdx + intervals[inversion]) % 12];
  const name = inversion === 0 ? `${root}${suffix}` : `${root}${suffix}/${inversion === 0 ? root : bassNote}`;

  return { name, notes, dotKeys };
}

// ─── Types d'accords ──────────────────────────────────────────────────────────

// Pour chaque fondamentale, on définit le contexte (dièse ou bémol)
// Règle simplifiée : fondamentales avec bémol → contexte flat
const FLAT_ROOTS = new Set(["Fa","Sib","Mib","Lab","Réb","Solb"]);
function rootCtx(root: string): AccordContext {
  return FLAT_ROOTS.has(root) ? "flat" : "sharp";
}

// Contexte spécial par type : diminué et mineur préfèrent les bémols
function chordCtx(root: string, type: string): AccordContext {
  if (["dim","min","m7","m7b5","dim7","hdim"].includes(type)) return "flat";
  return rootCtx(root);
}

const ROOTS_WHITE = ["Do","Ré","Mi","Fa","Sol","La","Si"];

// ── TRIADES ──

const TRIAD_TYPES = [
  {
    id: "maj", label: "Majeure", suffix: "", intervals: [0,4,7],
    struct1: "Tierce majeure (4 demi-tons)",
    struct2: "Tierce mineure (3 demi-tons)",
    quinte: "juste (7 demi-tons)", stability: "stable",
    color: "#0F6E56", bg: "#E1F5EE",
    desc: "La triade la plus lumineuse et stable. Sa quinte juste lui donne une assise solide. Couleur brillante, affirmée, ouverte.",
    ctx: "sharp" as AccordContext,
  },
  {
    id: "min", label: "Mineure", suffix: "m", intervals: [0,3,7],
    struct1: "Tierce mineure (3 demi-tons)",
    struct2: "Tierce majeure (4 demi-tons)",
    quinte: "juste (7 demi-tons)", stability: "stable",
    color: "#534AB7", bg: "#EEEDFE",
    desc: "Même quinte juste que la majeure, donc même stabilité — mais la tierce mineure lui donne une couleur sombre, intérieure, mélancolique.",
    ctx: "flat" as AccordContext,
  },
  {
    id: "dim", label: "Diminuée", suffix: "dim", intervals: [0,3,6],
    struct1: "Tierce mineure (3 demi-tons)",
    struct2: "Tierce mineure (3 demi-tons)",
    quinte: "diminuée (6 demi-tons)", stability: "instable",
    color: "#993C1D", bg: "#FAECE7",
    desc: "La quinte diminuée crée une forte instabilité. Cette triade est dense, tendue, dissonante — elle réclame une résolution.",
    ctx: "flat" as AccordContext,
  },
  {
    id: "aug", label: "Augmentée", suffix: "aug", intervals: [0,4,8],
    struct1: "Tierce majeure (4 demi-tons)",
    struct2: "Tierce majeure (4 demi-tons)",
    quinte: "augmentée (8 demi-tons)", stability: "instable",
    color: "#BA7517", bg: "#FAEEDA",
    desc: "La quinte augmentée est également instable. Cette triade sonne mystérieuse, suspendue, comme en attente d'une direction.",
    ctx: "sharp" as AccordContext,
  },
];

// ── ACCORDS DE LA GAMME ──

const GAMME_ACCORDS = [
  { deg:"I",   root:"Do",  suffix:"",    intervals:[0,4,7],  ctx:"sharp" as AccordContext, fn:"Tonique",    fnColor:"#0F6E56", fnBg:"#E1F5EE", type:"Majeure",  desc:"L'accord de repos absolu. Aucune note du triton instable." },
  { deg:"II",  root:"Ré",  suffix:"m",   intervals:[2,5,9],  ctx:"flat"  as AccordContext, fn:"Sous-dom.",  fnColor:"#534AB7", fnBg:"#EEEDFE", type:"Mineure",  desc:"Légèrement tendu. Prépare naturellement la dominante." },
  { deg:"III", root:"Mi",  suffix:"m",   intervals:[4,7,11], ctx:"flat"  as AccordContext, fn:"Tonique",    fnColor:"#0F6E56", fnBg:"#E1F5EE", type:"Mineure",  desc:"Stable mais coloré. Substitut possible du I." },
  { deg:"IV",  root:"Fa",  suffix:"",    intervals:[5,9,0],  ctx:"flat"  as AccordContext, fn:"Sous-dom.",  fnColor:"#534AB7", fnBg:"#EEEDFE", type:"Majeure",  desc:"Prépare la dominante. Contient Fa, note du triton." },
  { deg:"V",   root:"Sol", suffix:"",    intervals:[7,11,2], ctx:"sharp" as AccordContext, fn:"Dominante",  fnColor:"#BA7517", fnBg:"#FAEEDA", type:"Majeure",  desc:"Le plus tendu. Contient le triton Si–Fa. Appelle la résolution." },
  { deg:"VI",  root:"La",  suffix:"m",   intervals:[9,0,4],  ctx:"flat"  as AccordContext, fn:"Tonique",    fnColor:"#0F6E56", fnBg:"#E1F5EE", type:"Mineure",  desc:"Tonique secondaire. Souvent substitut du I (cadence rompue)." },
  { deg:"VII", root:"Si",  suffix:"dim", intervals:[11,2,5], ctx:"flat"  as AccordContext, fn:"Dominante",  fnColor:"#BA7517", fnBg:"#FAEEDA", type:"Diminuée", desc:"La seule triade diminuée. Forte tension vers le I." },
];

// ── TÉTRADES ──

const TETRAD_TYPES = [
  {
    id:"maj7",  label:"Maj7",          suffix:"Maj7",   intervals:[0,4,7,11], ctx:"sharp" as AccordContext,
    struct1:"Tierce majeure (4 dt)", struct2:"Tierce mineure (3 dt)", struct3:"Tierce majeure (4 dt)",
    base:"Triade majeure + 7e majeure",
    color:"#0F6E56", bg:"#E1F5EE",
    desc:"Couleur chaude et raffinée. La septième majeure ajoute une tension douce. Accord tonique typique du jazz.",
    example: (r: string) => { const c = buildChord(r,[0,4,7,11],"Maj7","sharp"); return `${r}Maj7 = ${c.notes.join("–")}`; },
  },
  {
    id:"dom7",  label:"7 (dominante)", suffix:"7",      intervals:[0,4,7,10], ctx:"sharp" as AccordContext,
    struct1:"Tierce majeure (4 dt)", struct2:"Tierce mineure (3 dt)", struct3:"Tierce mineure (3 dt)",
    base:"Triade majeure + 7e mineure",
    color:"#BA7517", bg:"#FAEEDA",
    desc:"L'accord de dominante par excellence. Sa 7e mineure crée le triton avec la tierce — tension maximale.",
    example: (r: string) => { const c = buildChord(r,[0,4,7,10],"7","sharp"); return `${r}7 = ${c.notes.join("–")}`; },
  },
  {
    id:"min7",  label:"m7",            suffix:"m7",     intervals:[0,3,7,10], ctx:"flat" as AccordContext,
    struct1:"Tierce mineure (3 dt)", struct2:"Tierce majeure (4 dt)", struct3:"Tierce mineure (3 dt)",
    base:"Triade mineure + 7e mineure",
    color:"#534AB7", bg:"#EEEDFE",
    desc:"Couleur sombre et fluide. L'accord le plus fréquent de la gamme (II, III, VI). Très utilisé en jazz et pop.",
    example: (r: string) => { const c = buildChord(r,[0,3,7,10],"m7","flat"); return `${r}m7 = ${c.notes.join("–")}`; },
  },
  {
    id:"hdim",  label:"m7♭5",          suffix:"m7♭5",   intervals:[0,3,6,10], ctx:"flat" as AccordContext,
    struct1:"Tierce mineure (3 dt)", struct2:"Tierce mineure (3 dt)", struct3:"Tierce majeure (4 dt)",
    base:"Triade diminuée + 7e mineure",
    color:"#993C1D", bg:"#FAECE7",
    desc:"Aussi appelé demi-diminué. Très tendu — c'est le VIIe degré de la gamme majeure en tétrade.",
    example: (r: string) => { const c = buildChord(r,[0,3,6,10],"m7♭5","flat"); return `${r}m7♭5 = ${c.notes.join("–")}`; },
  },
  {
    id:"dim7",  label:"dim7",          suffix:"dim7",   intervals:[0,3,6,9],  ctx:"flat" as AccordContext,
    struct1:"Tierce mineure (3 dt)", struct2:"Tierce mineure (3 dt)", struct3:"Tierce mineure (3 dt)",
    base:"Triade diminuée + 7e diminuée",
    color:"#A32D2D", bg:"#FCEBEB",
    desc:"Symétrie parfaite : quatre tierces mineures. Tous ses renversements sonnent identiques. Tension dramatique.",
    example: (r: string) => { const c = buildChord(r,[0,3,6,9],"dim7","flat"); return `${r}dim7 = ${c.notes.join("–")}`; },
  },
];

// ── RENVERSEMENTS ──

const INV_NAMES = ["État fondamental","1er renversement","2e renversement","3e renversement"];
const INV_BASS  = ["fondamentale","tierce","quinte","septième"];
const INV_DESC  = [
  "La fondamentale est à la basse. L'accord sonne plein, stable, ancré.",
  "La tierce est à la basse. L'accord sonne plus léger, ouvert — fluidifie la ligne de basse.",
  "La quinte est à la basse. Plus instable, souvent utilisé comme accord de passage.",
  "La septième est à la basse. Couleur très suspendue — pousse fortement vers la résolution.",
];

// Types disponibles pour les renversements (triade + tétrade)
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

// ── QUIZ ──

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const QUIZ_POOL = [
  // Structure des triades
  { q:"Structure d'une triade majeure ?", opts:["3ce min + 3ce maj","3ce maj + 3ce min","3ce min + 3ce min","3ce maj + 3ce maj"], a:1, fb:"Triade majeure = tierce majeure (4 dt) + tierce mineure (3 dt). Ex : Do–Mi–Sol." },
  { q:"Structure d'une triade mineure ?", opts:["3ce min + 3ce maj","3ce maj + 3ce min","3ce min + 3ce min","3ce maj + 3ce maj"], a:0, fb:"Triade mineure = tierce mineure (3 dt) + tierce majeure (4 dt). Ex : Do–Mi♭–Sol." },
  { q:"Structure d'une triade diminuée ?", opts:["3ce min + 3ce maj","3ce maj + 3ce min","3ce min + 3ce min","3ce maj + 3ce maj"], a:2, fb:"Triade diminuée = tierce mineure + tierce mineure. Ex : Do–Mi♭–Sol♭." },
  { q:"Structure d'une triade augmentée ?", opts:["3ce min + 3ce maj","3ce maj + 3ce min","3ce min + 3ce min","3ce maj + 3ce maj"], a:3, fb:"Triade augmentée = tierce majeure + tierce majeure. Ex : Do–Mi–Sol#." },
  { q:"Combien de demi-tons contient une tierce majeure ?", opts:["2","3","4","5"], a:2, fb:"Tierce majeure = 4 demi-tons. Ex : Do–Mi." },
  { q:"Combien de demi-tons contient une tierce mineure ?", opts:["2","3","4","5"], a:1, fb:"Tierce mineure = 3 demi-tons. Ex : Ré–Fa." },
  { q:"Quelle triade a une quinte diminuée ?", opts:["Majeure","Mineure","Diminuée","Augmentée"], a:2, fb:"La triade diminuée a une quinte diminuée (6 demi-tons)." },
  { q:"Quelle triade a une quinte augmentée ?", opts:["Majeure","Mineure","Diminuée","Augmentée"], a:3, fb:"La triade augmentée a une quinte augmentée (8 demi-tons)." },
  { q:"Quelles triades sont 'stables' (quinte juste) ?", opts:["Majeure et augmentée","Mineure et diminuée","Majeure et mineure","Diminuée et augmentée"], a:2, fb:"Majeure et mineure ont une quinte juste (7 demi-tons) → stables." },
  { q:"Combien de notes dans une triade ?", opts:["2","3","4","5"], a:1, fb:"Une triade = 3 notes : fondamentale, tierce, quinte." },
  { q:"Comment construit-on un accord ?", opts:["Superposition de secondes","Superposition de tierces","Superposition de quartes","Superposition de quintes"], a:1, fb:"Un accord est construit par superposition de tierces." },
  // Notes des accords — triades
  { q:"Quelles notes composent Do majeur ?", opts:["Do–Mi♭–Sol","Do–Mi–Sol","Do–Mi–Sol#","Do–Mi♭–Sol♭"], a:1, fb:"Do majeur = Do–Mi–Sol. Tierce majeure (4 dt) + tierce mineure (3 dt)." },
  { q:"Quelles notes composent Do mineur ?", opts:["Do–Mi♭–Sol","Do–Mi–Sol","Do–Mi–Sol#","Do–Mi♭–Sol♭"], a:0, fb:"Do mineur = Do–Mi♭–Sol. Tierce mineure (3 dt) + tierce majeure (4 dt)." },
  { q:"Quelles notes composent Do diminué ?", opts:["Do–Mi♭–Sol","Do–Mi–Sol","Do–Mi♭–Sol♭","Do–Mi–Sol#"], a:2, fb:"Do diminué = Do–Mi♭–Sol♭. Deux tierces mineures." },
  { q:"Quelles notes composent Sol majeur ?", opts:["Sol–Si♭–Ré","Sol–Si–Ré","Sol–La–Ré","Sol–Si–Mi"], a:1, fb:"Sol majeur = Sol–Si–Ré." },
  { q:"Quelles notes composent Ré mineur ?", opts:["Ré–Fa#–La","Ré–Fa–La","Ré–Fa–Sol","Ré–Mi–La"], a:1, fb:"Ré mineur = Ré–Fa–La. Tierce mineure (Ré→Fa) + tierce majeure (Fa→La)." },
  { q:"Quelles notes composent La majeur ?", opts:["La–Do–Mi","La–Do#–Mi♭","La–Do#–Mi","La–Si–Mi"], a:2, fb:"La majeur = La–Do#–Mi." },
  { q:"Quelles notes composent Mi mineur ?", opts:["Mi–Sol#–Si","Mi–Sol–Si","Mi–Sol–La#","Mi–Fa#–Si"], a:1, fb:"Mi mineur = Mi–Sol–Si." },
  { q:"Quelles notes composent Si diminué ?", opts:["Si–Ré–Fa","Si–Ré–Fa#","Si–Ré#–Fa#","Si–Ré–Sol"], a:0, fb:"Si diminué = Si–Ré–Fa. Les notes du triton de Do majeur !" },
  { q:"Quel accord est formé par Mi–Sol–Si ?", opts:["Mi majeur","Mi mineur","Sol majeur","Do majeur"], a:1, fb:"Mi–Sol = 3 dt (3ce min) + Sol–Si = 4 dt (3ce maj) → Mi mineur." },
  { q:"Quel accord est formé par Fa–La–Do ?", opts:["Fa mineur","Fa majeur","La mineur","Do majeur"], a:1, fb:"Fa–La = 4 dt (3ce maj) + La–Do = 3 dt (3ce min) → Fa majeur." },
  { q:"Quel accord est formé par Si–Ré–Fa ?", opts:["Si mineur","Si majeur","Si diminué","Ré mineur"], a:2, fb:"Si–Ré = 3 dt + Ré–Fa = 3 dt → deux tierces mineures → Si diminué." },
  { q:"Quelle est la quinte de Mi mineur ?", opts:["La","Si","Do","Sol"], a:1, fb:"Mi mineur = Mi–Sol–Si. La quinte est Si (7 dt au-dessus de Mi)." },
  { q:"Quelle est la tierce de Ré mineur ?", opts:["Fa","Fa#","Sol","Mi"], a:0, fb:"Ré mineur = Ré–Fa–La. La tierce mineure est Fa (3 dt au-dessus de Ré)." },
  // Gamme majeure — triades
  { q:"Quel type produit le Ier degré de Do majeur ?", opts:["Majeur","Mineur","Diminué","Augmenté"], a:0, fb:"Le Ier degré donne toujours un accord majeur en gamme majeure." },
  { q:"Quel type produit le IIe degré de Do majeur ?", opts:["Majeur","Mineur","Diminué","Augmenté"], a:1, fb:"Le IIe degré donne un accord mineur : Ré–Fa–La." },
  { q:"Quel type produit le Ve degré de Do majeur ?", opts:["Majeur","Mineur","Diminué","Augmenté"], a:0, fb:"Le Ve degré donne un accord majeur : Sol–Si–Ré." },
  { q:"Quel type produit le VIIe degré de Do majeur ?", opts:["Majeur","Mineur","Diminué","Augmenté"], a:2, fb:"Le VIIe degré donne la seule triade diminuée : Si–Ré–Fa." },
  { q:"Combien de triades mineures en gamme majeure ?", opts:["1","2","3","4"], a:2, fb:"3 triades mineures : IIe (Dm), IIIe (Em), VIe (Am)." },
  { q:"Combien de triades majeures en gamme majeure ?", opts:["1","2","3","4"], a:2, fb:"3 triades majeures : Ier (C), IVe (F), Ve (G)." },
  { q:"Quel accord correspond au VIe degré de Do majeur ?", opts:["Fa majeur","La mineur","Sol majeur","Si diminué"], a:1, fb:"La–Do–Mi = La mineur." },
  { q:"Quel est l'accord de dominante en Do majeur ?", opts:["Fa majeur","La mineur","Sol majeur","Ré mineur"], a:2, fb:"Sol–Si–Ré = Sol majeur. Ve degré = dominante." },
  { q:"Pourquoi le VIIe degré donne une triade diminuée ?", opts:["Par convention","Car la quinte Si–Fa est diminuée","Car Si est instable","Par hasard"], a:1, fb:"Si–Ré–Fa : l'intervalle Si–Fa = 6 dt = quinte diminuée." },
  { q:"La séquence des types en gamme majeure est :", opts:["Maj Min Maj Min Maj Min dim","Maj Min Min Maj Maj Min dim","Min Maj Min Maj Min Maj dim","Maj Maj Min Min Maj Min dim"], a:1, fb:"I=Maj II=min III=min IV=Maj V=Maj VI=min VII=dim. Séquence fixe dans toute gamme majeure." },
  // Tétrades — structure
  { q:"Qu'est-ce qu'une tétrade ?", opts:["Une triade renversée","Une triade + une septième","Un accord de 5 notes","Un accord sans quinte"], a:1, fb:"Tétrade = triade + tierce supplémentaire au-dessus de la quinte (la septième)." },
  { q:"Structure d'un accord Maj7 ?", opts:["Triade maj + 7e min","Triade min + 7e maj","Triade maj + 7e maj","Triade min + 7e min"], a:2, fb:"Maj7 = triade majeure + septième majeure. Ex : CMaj7 = Do–Mi–Sol–Si." },
  { q:"Structure d'un accord dominant 7 (X7) ?", opts:["Triade maj + 7e min","Triade min + 7e maj","Triade maj + 7e maj","Triade min + 7e min"], a:0, fb:"X7 = triade majeure + septième mineure. Ex : G7 = Sol–Si–Ré–Fa." },
  { q:"Structure d'un accord m7 ?", opts:["Triade maj + 7e min","Triade min + 7e maj","Triade maj + 7e maj","Triade min + 7e min"], a:3, fb:"m7 = triade mineure + septième mineure. Ex : Dm7 = Ré–Fa–La–Do." },
  { q:"Structure d'un accord m7♭5 ?", opts:["Triade dim + 7e maj","Triade dim + 7e min","Triade aug + 7e min","Triade min + 7e dim"], a:1, fb:"m7♭5 = triade diminuée + septième mineure. Ex : Bm7♭5 = Si–Ré–Fa–La." },
  { q:"Différence entre CMaj7 et C7 ?", opts:["La quinte","La tierce","La septième","La fondamentale"], a:2, fb:"CMaj7 = 7e majeure (Si). C7 = 7e mineure (Si♭). Tout le reste est identique." },
  // Tétrades — notes
  { q:"Quelles notes composent G7 (Sol7) ?", opts:["Sol–Si–Ré–Fa#","Sol–Si–Ré–Fa","Sol–Si♭–Ré–Fa","Sol–La–Ré–Fa"], a:1, fb:"G7 = Sol–Si–Ré–Fa. Triade Sol majeur + 7e mineure (Fa)." },
  { q:"Quelles notes composent CMaj7 ?", opts:["Do–Mi–Sol–Si♭","Do–Mi♭–Sol–Si","Do–Mi–Sol–Si","Do–Mi–Sol#–Si"], a:2, fb:"CMaj7 = Do–Mi–Sol–Si. Triade Do majeur + 7e majeure (Si)." },
  { q:"Quelles notes composent Dm7 ?", opts:["Ré–Fa#–La–Do","Ré–Fa–La–Do","Ré–Fa–La–Do#","Ré–Fa–Sol–Do"], a:1, fb:"Dm7 = Ré–Fa–La–Do. Triade Ré mineur + 7e mineure (Do)." },
  { q:"Quelles notes composent Bm7♭5 (Si m7♭5) ?", opts:["Si–Ré–Fa#–La","Si–Ré–Fa–La","Si–Ré♭–Fa–La","Si–Ré–Fa–La♭"], a:1, fb:"Bm7♭5 = Si–Ré–Fa–La. Triade Si diminué + 7e mineure (La)." },
  { q:"Quel degré de Do majeur produit un accord Maj7 ?", opts:["IIe et Ve","Ier et IVe","IIIe et VIe","Ve et VIIe"], a:1, fb:"CMaj7 (Ier) et FMaj7 (IVe). Ce sont les deux seuls Maj7 de la gamme." },
  { q:"Combien d'accords m7 en gamme de Do majeur ?", opts:["1","2","3","4"], a:2, fb:"3 accords m7 : Dm7 (II), Em7 (III), Am7 (VI)." },
  { q:"Quel est l'accord du VIIe degré en tétrade ?", opts:["CMaj7","G7","Bm7♭5","Bdim7"], a:2, fb:"Si–Ré–Fa–La = Bm7♭5 (demi-diminué)." },
  { q:"Quel accord contient le triton complet Fa–Si ?", opts:["CMaj7","FMaj7","G7","Am7"], a:2, fb:"G7 = Sol–Si–Ré–Fa. Il contient Si (la sensible) et Fa (la sous-dominante)." },
  // Renversements
  { q:"Qu'est-ce qu'un renversement ?", opts:["Un accord joué plus vite","Un changement de la note à la basse","Un accord avec des notes manquantes","Une transposition"], a:1, fb:"Un renversement change la note à la basse. L'accord garde ses notes, seul l'ordre change." },
  { q:"Combien de renversements possède une triade ?", opts:["2","3","4","5"], a:1, fb:"Une triade a 3 positions : état fondamental, 1er (tierce à la basse), 2e (quinte)." },
  { q:"Combien de renversements possède une tétrade ?", opts:["2","3","4","5"], a:2, fb:"Une tétrade a 4 positions : fondamental, 1er, 2e, 3e (septième à la basse)." },
  { q:"Que signifie C/E ?", opts:["Do avec Mi ajouté","Do majeur avec Mi à la basse","Do mineur en Mi","Accord de Mi avec Do"], a:1, fb:"X/Y = accord X avec Y à la basse. C/E = Do majeur, 1er renversement." },
  { q:"Quelle note est à la basse dans G/B ?", opts:["Sol","La","Si","Do"], a:2, fb:"G/B = Sol majeur avec Si (B) à la basse = 1er renversement." },
  { q:"Quelle est la basse du 2e renversement ?", opts:["Fondamentale","Tierce","Quinte","Septième"], a:2, fb:"Le 2e renversement a la quinte à la basse. Ex : C/G = Do majeur avec Sol." },
  { q:"Quelle est la basse du 3e renversement (tétrade) ?", opts:["Fondamentale","Tierce","Quinte","Septième"], a:3, fb:"Le 3e renversement (uniquement tétrades) a la septième à la basse." },
  { q:"Un accord renversé contient-il les mêmes notes ?", opts:["Non, elles changent","Oui, seul l'ordre change","Seule la basse change","Non, une note est omise"], a:1, fb:"Un renversement ne change pas les notes — il change quelle note est la plus grave." },
  { q:"Comment note-t-on le 1er renversement de Do majeur ?", opts:["C","C/E","C/G","Cm"], a:1, fb:"C/E = Do majeur avec Mi (la tierce) à la basse." },
  { q:"Pourquoi utilise-t-on des renversements ?", opts:["Pour changer la couleur","Pour fluidifier la basse","Pour varier la texture","Toutes ces raisons"], a:3, fb:"Les renversements servent à fluidifier la ligne de basse, varier la couleur et l'équilibre." },
  { q:"Quel est le 1er renversement de Am (La mineur) ?", opts:["Am/E","Am/C","Am/La","Am/G"], a:1, fb:"La mineur = La–Do–Mi. 1er renversement = tierce à la basse = Do. Notation : Am/C." },
  { q:"Quelle note est à la basse dans FMaj7/A ?", opts:["Fa","Sol","La","Mi"], a:2, fb:"FMaj7/A = Fa Maj7 avec La (A) à la basse = 1er renversement (tierce)." },
  // Reconnaissance
  { q:"Quel accord produit le IVe degré de Sol majeur ?", opts:["Do majeur","Ré mineur","Mi mineur","Si diminué"], a:0, fb:"Sol(I) La(II) Si(III) Do(IV). Le IVe degré de Sol majeur est Do majeur." },
  { q:"Quel accord produit le Ve degré de Sol majeur ?", opts:["Do majeur","Ré majeur","Mi mineur","La mineur"], a:1, fb:"Sol(I) La(II) Si(III) Do(IV) Ré(V). La dominante de Sol majeur est Ré majeur." },
  { q:"Quel accord produit le IIe degré de Ré majeur ?", opts:["Mi mineur","Mi majeur","Sol mineur","La majeur"], a:0, fb:"Ré(I) Mi(II). Le IIe degré de Ré majeur est Mi mineur." },
  { q:"Quel accord produit le Ve degré de Fa majeur ?", opts:["Do majeur","Do mineur","Sol majeur","Sib majeur"], a:0, fb:"Fa(I) Sol(II) La(III) Sib(IV) Do(V). La dominante de Fa majeur est Do majeur." },
  { q:"Quelles notes composent Em7 (Mi m7) ?", opts:["Mi–Sol#–Si–Ré","Mi–Sol–Si–Ré","Mi–Sol–Si♭–Ré","Mi–Sol–La#–Ré"], a:1, fb:"Em7 = Mi–Sol–Si–Ré. Triade Mi mineur + 7e mineure (Ré)." },
  { q:"Quelles notes composent Am7 (La m7) ?", opts:["La–Do#–Mi–Sol","La–Do–Mi–Sol","La–Do–Mi♭–Sol","La–Do–Mi–Sol#"], a:1, fb:"Am7 = La–Do–Mi–Sol. Triade La mineur + 7e mineure (Sol)." },
  { q:"Quelles notes composent FMaj7 ?", opts:["Fa–La–Do–Mi♭","Fa–La♭–Do–Mi","Fa–La–Do–Mi","Fa–La–Do#–Mi"], a:2, fb:"FMaj7 = Fa–La–Do–Mi. Triade Fa majeur + 7e majeure (Mi)." },
  { q:"Quel accord a les notes Sol–Si–Ré–Fa ?", opts:["GMaj7","G7","Gm7","Gdim7"], a:1, fb:"Sol–Si–Ré–Fa = G7. Triade Sol majeur + 7e mineure (Fa)." },
  { q:"Quel accord a les notes Ré–Fa–La–Do ?", opts:["DMaj7","D7","Dm7","Ddim7"], a:2, fb:"Ré–Fa–La–Do = Dm7. Triade Ré mineur + 7e mineure (Do)." },
  // Vocabulaire
  { q:"Comment appelle-t-on la note de référence d'un accord ?", opts:["La tonique","La fondamentale","La basse","La racine"], a:1, fb:"La fondamentale est la note de départ, celle qui donne son nom à l'accord." },
  { q:"La septième d'un accord C7 est :", opts:["Do","Mi","Sol","Si♭"], a:3, fb:"C7 = Do–Mi–Sol–Si♭. La septième mineure de Do est Si♭ (10 demi-tons au-dessus)." },
  { q:"Que signifie 'demi-diminué' ?", opts:["Accord diminué sans quinte","Accord m7♭5","Accord dim7 renversé","Accord entre mineur et diminué"], a:1, fb:"Le demi-diminué = m7♭5 : triade diminuée + 7e mineure. Il est 'à moitié' diminué car sa 7e n'est pas diminuée." },
  { q:"Quel est le seul accord de dominante 7 (X7) en gamme de Do majeur ?", opts:["CMaj7","FMaj7","G7","Am7"], a:2, fb:"G7 est le seul accord de dominante 7 de la gamme. Il contient le triton Si–Fa." },
  { q:"Pourquoi le Ve degré est-il appelé 'dominante' ?", opts:["Car il est le plus grave","Car il domine par sa position","Car il contient le triton","Car il est toujours majeur"], a:1, fb:"La dominante est le Ve degré — à la quinte au-dessus de la tonique, il 'domine' la gamme." },
  { q:"Qu'est-ce que la fondamentale d'un accord renversé ?", opts:["La note à la basse","La note qui donne son nom à l'accord","La note la plus aiguë","La quinte de l'accord"], a:1, fb:"La fondamentale est toujours la note qui donne son nom à l'accord, peu importe le renversement." },
];

const QUIZ_COUNT = 10;

// ─── Composant ────────────────────────────────────────────────────────────────

export default function Cours2() {
  const [activeSection, setActiveSection] = useState("triades");
  const pianoRef = useRef<PianoPlayerRef>(null);

  // ── S1 : Triades ──
  const [triadRoot, setTriadRoot] = useState("Do");
  const [triadTypeId, setTriadTypeId] = useState("maj");
  const triadType = TRIAD_TYPES.find(t => t.id === triadTypeId)!;
  const triadChord = buildChord(triadRoot, triadType.intervals, triadType.suffix, triadType.ctx);

  const playChordFromKeys = useCallback((dotKeys: string[], arp = false) => {
    dotKeys.forEach((key, i) => {
      const [note, octStr] = key.split(":");
      setTimeout(() => pianoRef.current?.playNote(note, parseInt(octStr), { duration: 1.8 }), arp ? i * 110 : 0);
    });
  }, []);

  // ── S2 : Gamme ──
  const [selDeg, setSelDeg] = useState<number | null>(null);

  // ── S3 : Tétrades ──
  const [tetRoot, setTetRoot] = useState("Do");
  const [tetTypeId, setTetTypeId] = useState("maj7");
  const tetType = TETRAD_TYPES.find(t => t.id === tetTypeId)!;
  const tetChord = buildChord(tetRoot, tetType.intervals, tetType.suffix, tetType.ctx);

  // ── S4 : Renversements ──
  const [invRoot, setInvRoot] = useState("Do");
  const [invChordTypeId, setInvChordTypeId] = useState("maj");
  const [invIdx, setInvIdx] = useState(0);
  const invChordType = INV_CHORD_TYPES.find(t => t.id === invChordTypeId)!;
  const maxInv = invChordType.intervals.length - 1;
  const safeInvIdx = Math.min(invIdx, maxInv);
  const invChord = buildChord(invRoot, invChordType.intervals, invChordType.suffix, invChordType.ctx, safeInvIdx);

  // ── Quiz ──
  const [quizQs, setQuizQs] = useState(() => shuffleArray(QUIZ_POOL).slice(0, QUIZ_COUNT));
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState(false);

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

  const SECTIONS = [
    { id:"triades", label:"Les triades" },
    { id:"gamme",   label:"Gamme majeure" },
    { id:"tetrades",label:"Tétrades" },
    { id:"renversements", label:"Renversements" },
    { id:"quiz",    label:"Entraînement" },
  ];

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
        <span style={S.badge}>Niveau 1 · Cours 2</span>
        <h1 style={S.h1}>Les accords</h1>
        <p style={S.subtitle}>De la triade simple à l'accord de septième — construire, harmoniser, renverser.</p>
      </div>

      <nav style={S.nav}>
        {SECTIONS.map(s => (
          <button key={s.id} style={S.pill(activeSection === s.id)} onClick={() => setActiveSection(s.id)}>
            {s.label}
          </button>
        ))}
      </nav>

      {/* ══ TRIADES ══ */}
      {activeSection === "triades" && (
        <div>
          <h2 style={S.stitle}>Construire une triade</h2>
          <p style={S.sbody}>
            Un accord naît d'une idée simple : <strong>empiler des tierces</strong>. On part d'une fondamentale,
            on monte d'une tierce, puis d'une autre. Deux tierces empilées donnent trois sons — une <strong>triade</strong>.
            Ce qui différencie les quatre types, c'est la taille de chaque tierce.
          </p>

          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 12, color: "#888", marginBottom: 6 }}>Fondamentale</div>
            <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
              {ROOTS_WHITE.map(r => (
                <button key={r} onClick={() => setTriadRoot(r)} style={btnSel(r === triadRoot)}>{r}</button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 12, color: "#888", marginBottom: 6 }}>Type d'accord</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {TRIAD_TYPES.map(t => (
                <button key={t.id} onClick={() => setTriadTypeId(t.id)}
                  style={{ fontSize: 12, padding: "5px 12px", border: `0.5px solid ${t.id === triadTypeId ? t.color : "#ddd"}`, borderRadius: 6, cursor: "pointer", background: t.id === triadTypeId ? t.bg : "transparent", color: t.id === triadTypeId ? t.color : "#666" }}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ border: `0.5px solid ${triadType.color}`, borderRadius: 10, padding: "14px 18px", background: triadType.bg, marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 10 }}>
              <span style={{ fontSize: 24, fontWeight: 600, color: triadType.color }}>{triadChord.name}</span>
              <span style={{ fontSize: 13, color: "#666" }}>{triadChord.notes.join(" – ")}</span>
              <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 10, background: triadType.stability === "stable" ? "#E1F5EE" : "#FAECE7", color: triadType.stability === "stable" ? "#0F6E56" : "#993C1D" }}>
                {triadType.stability}
              </span>
            </div>

            {/* Structure visuelle */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
              {triadChord.notes.map((note, i) => (
                <React.Fragment key={i}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 14, fontWeight: 500, padding: "6px 12px", border: `0.5px solid ${triadType.color}`, borderRadius: 6, background: "rgba(255,255,255,0.7)", color: "#111" }}>{note}</div>
                    <div style={{ fontSize: 10, color: "#888", marginTop: 3 }}>{i===0?"fondamentale":i===1?"tierce":"quinte"}</div>
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
              <strong>Quinte :</strong> {triadType.quinte}
            </div>
            <p style={{ fontSize: 13, color: "#444", lineHeight: 1.6, marginBottom: 10 }}>{triadType.desc}</p>

            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => playChordFromKeys(triadChord.dotKeys, false)}
                style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${triadType.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: triadType.color }}>
                ▶ Accord
              </button>
              <button onClick={() => playChordFromKeys(triadChord.dotKeys, true)}
                style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${triadType.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: triadType.color }}>
                ▶ Arpège
              </button>
            </div>
          </div>

          <PianoPlayer dotKeys={triadChord.dotKeys} octaves={2} startOctave={3} showLabels showOctaveMarkers />

          {/* Tableau récapitulatif */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 8px", color: "#111" }}>Les 4 types de triades</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {["Type","Structure (tierces)","Quinte","Stabilité","Exemple (sur Do)"].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 10px", fontWeight: 500, color: "#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TRIAD_TYPES.map((t, i) => {
                  const ex = buildChord("Do", t.intervals, t.suffix, t.ctx);
                  return (
                    <tr key={t.id} style={{ borderBottom: "0.5px solid #f0f0f0", background: i%2===0?"#fff":"#fafafa" }}>
                      <td style={{ padding: "7px 10px", fontWeight: 500, color: t.color }}>{t.label}</td>
                      <td style={{ padding: "7px 10px", fontSize: 12, color: "#555" }}>{t.struct1}<br/><span style={{ color: "#aaa" }}>+</span> {t.struct2}</td>
                      <td style={{ padding: "7px 10px", fontSize: 12 }}>{t.quinte}</td>
                      <td style={{ padding: "7px 10px" }}>
                        <span style={{ fontSize: 11, padding: "1px 7px", borderRadius: 10, background: t.stability==="stable"?"#E1F5EE":"#FAECE7", color: t.stability==="stable"?"#0F6E56":"#993C1D" }}>{t.stability}</span>
                      </td>
                      <td style={{ padding: "7px 10px", fontSize: 12, color: "#555" }}>Do{t.suffix} = {ex.notes.join("–")}</td>
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
          <h2 style={S.stitle}>Les 7 accords de la gamme majeure</h2>
          <p style={S.sbody}>
            En construisant une triade sur chaque degré de la gamme — en utilisant <strong>uniquement les notes de cette gamme</strong> —
            on obtient 7 accords, chacun avec une couleur et une fonction précise.
          </p>
          <p style={{ fontSize: 13, color: "#888", marginBottom: 12 }}>Cliquez sur un degré pour voir et entendre l'accord :</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 5, marginBottom: 12 }}>
            {GAMME_ACCORDS.map((d, i) => {
              const chord = buildChord(d.root, d.intervals, d.suffix, d.ctx);
              return (
                <div key={d.deg}
                  onClick={() => { setSelDeg(i); playChordFromKeys(chord.dotKeys, true); }}
                  style={{ border: `0.5px solid ${selDeg===i ? d.fnColor : "#e5e5e5"}`, borderRadius: 8, padding: "8px 4px", textAlign: "center", cursor: "pointer", background: selDeg===i ? d.fnBg : "#fff", transition: "all .15s" }}>
                  <div style={{ fontSize: 10, color: "#999", fontWeight: 500 }}>{d.deg}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#111", margin: "2px 0" }}>{chord.name}</div>
                  <div style={{ fontSize: 10, color: "#888" }}>{d.type}</div>
                  <div style={{ fontSize: 9, marginTop: 3, padding: "1px 4px", borderRadius: 8, display: "inline-block", background: d.fnBg, color: d.fnColor, fontWeight: 500 }}>{d.fn}</div>
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

          <div style={S.infoBox}>
            <strong>Séquence fixe en gamme majeure :</strong><br />
            I=<span style={{ color:"#0F6E56" }}>Maj</span> · II=<span style={{ color:"#534AB7" }}>min</span> · III=<span style={{ color:"#534AB7" }}>min</span> · IV=<span style={{ color:"#0F6E56" }}>Maj</span> · V=<span style={{ color:"#0F6E56" }}>Maj</span> · VI=<span style={{ color:"#534AB7" }}>min</span> · VII=<span style={{ color:"#993C1D" }}>dim</span>
          </div>
        </div>
      )}

      {/* ══ TÉTRADES ══ */}
      {activeSection === "tetrades" && (
        <div>
          <h2 style={S.stitle}>Les accords de septième</h2>
          <p style={S.sbody}>
            On enrichit une triade en ajoutant <strong>une tierce supplémentaire</strong> au-dessus de la quinte.
            Cette 4e note — la <strong>septième</strong> — complexifie la couleur de l'accord.
          </p>

          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 12, color: "#888", marginBottom: 6 }}>Fondamentale</div>
            <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
              {ROOTS_WHITE.map(r => (
                <button key={r} onClick={() => setTetRoot(r)} style={btnSel(r === tetRoot)}>{r}</button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 12, color: "#888", marginBottom: 6 }}>Type</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {TETRAD_TYPES.map(t => (
                <button key={t.id} onClick={() => setTetTypeId(t.id)}
                  style={{ fontSize: 12, padding: "5px 12px", border: `0.5px solid ${t.id===tetTypeId ? t.color : "#ddd"}`, borderRadius: 6, cursor: "pointer", background: t.id===tetTypeId ? t.bg : "transparent", color: t.id===tetTypeId ? t.color : "#666" }}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ border: `0.5px solid ${tetType.color}`, borderRadius: 10, padding: "14px 18px", background: tetType.bg, marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 10 }}>
              <span style={{ fontSize: 24, fontWeight: 600, color: tetType.color }}>{tetChord.name}</span>
              <span style={{ fontSize: 13, color: "#666" }}>{tetChord.notes.join(" – ")}</span>
            </div>

            {/* Structure visuelle */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 6, marginBottom: 12, flexWrap: "wrap" }}>
              {tetChord.notes.map((note, i) => (
                <React.Fragment key={i}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 13, fontWeight: 500, padding: "5px 10px", border: `0.5px solid ${tetType.color}`, borderRadius: 6, background: "rgba(255,255,255,0.7)", color: "#111" }}>{note}</div>
                    <div style={{ fontSize: 10, color: "#888", marginTop: 2 }}>{["fond.","tierce","quinte","7e"][i]}</div>
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

            <div style={{ fontSize: 12, color: "#666", marginBottom: 8 }}><strong>Base :</strong> {tetType.base}</div>
            <p style={{ fontSize: 13, color: "#444", lineHeight: 1.6, marginBottom: 8 }}>{tetType.desc}</p>
            <div style={{ fontSize: 12, color: tetType.color, fontStyle: "italic", marginBottom: 10 }}>{tetType.example(tetRoot)}</div>

            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => playChordFromKeys(tetChord.dotKeys, false)}
                style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${tetType.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: tetType.color }}>▶ Accord</button>
              <button onClick={() => playChordFromKeys(tetChord.dotKeys, true)}
                style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${tetType.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: tetType.color }}>▶ Arpège</button>
            </div>
          </div>

          <PianoPlayer dotKeys={tetChord.dotKeys} octaves={2} startOctave={3} showLabels showOctaveMarkers />

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 8px", color: "#111" }}>Tétrades de Do majeur</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {["Degré","Accord","Notes","Type"].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 10px", fontWeight: 500, color: "#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { deg:"I",   chord:"CMaj7", notes:"Do–Mi–Sol–Si",  type:"Maj7",  color:"#0F6E56" },
                  { deg:"II",  chord:"Dm7",   notes:"Ré–Fa–La–Do",   type:"m7",    color:"#534AB7" },
                  { deg:"III", chord:"Em7",   notes:"Mi–Sol–Si–Ré",  type:"m7",    color:"#534AB7" },
                  { deg:"IV",  chord:"FMaj7", notes:"Fa–La–Do–Mi",   type:"Maj7",  color:"#0F6E56" },
                  { deg:"V",   chord:"G7",    notes:"Sol–Si–Ré–Fa",  type:"7",     color:"#BA7517" },
                  { deg:"VI",  chord:"Am7",   notes:"La–Do–Mi–Sol",  type:"m7",    color:"#534AB7" },
                  { deg:"VII", chord:"Bm7♭5", notes:"Si–Ré–Fa–La",  type:"m7♭5", color:"#993C1D" },
                ].map((row, i) => (
                  <tr key={row.deg} style={{ borderBottom: "0.5px solid #f0f0f0", background: i%2===0?"#fff":"#fafafa" }}>
                    <td style={{ padding: "7px 10px", fontWeight: 700, color: "#888" }}>{row.deg}</td>
                    <td style={{ padding: "7px 10px", fontWeight: 600, color: row.color }}>{row.chord}</td>
                    <td style={{ padding: "7px 10px", color: "#555" }}>{row.notes}</td>
                    <td style={{ padding: "7px 10px" }}>
                      <span style={{ fontSize: 11, padding: "1px 7px", borderRadius: 10, background: "#f0f0f0", color: row.color }}>{row.type}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={S.warnBox}>Le Ve degré (G7) est le seul accord de dominante 7 (X7) de la gamme majeure. Il contient le triton complet Si–Fa.</div>
        </div>
      )}

      {/* ══ RENVERSEMENTS ══ */}
      {activeSection === "renversements" && (
        <div>
          <h2 style={S.stitle}>Renversements</h2>
          <p style={S.sbody}>
            Un accord contient toujours les mêmes notes — mais quelle note est placée <strong>à la basse</strong> change la couleur.
            La note la plus grave détermine le renversement. La notation utilise un slash : C/E = Do majeur avec Mi à la basse.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 16 }}>
            <div>
              <div style={{ fontSize: 12, color: "#888", marginBottom: 6 }}>Fondamentale</div>
              <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                {ROOTS_WHITE.map(r => (
                  <button key={r} onClick={() => { setInvRoot(r); setInvIdx(0); }} style={btnSel(r===invRoot)}>{r}</button>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 12, color: "#888", marginBottom: 6 }}>Type d'accord</div>
              <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                {INV_CHORD_TYPES.map(t => (
                  <button key={t.id} onClick={() => { setInvChordTypeId(t.id); setInvIdx(0); }}
                    style={{ fontSize: 12, padding: "4px 10px", border: `0.5px solid ${t.id===invChordTypeId ? "#333" : "#ddd"}`, borderRadius: 6, cursor: "pointer", background: t.id===invChordTypeId ? "#111" : "transparent", color: t.id===invChordTypeId ? "#fff" : "#666" }}>
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tabs renversements */}
          <div style={{ display: "flex", gap: 6, marginBottom: 12, flexWrap: "wrap" }}>
            {INV_NAMES.slice(0, maxInv + 1).map((name, i) => (
              <button key={i} onClick={() => { setInvIdx(i); setTimeout(() => playChordFromKeys(invChord.dotKeys, true), 50); }}
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
              <strong>Basse :</strong> {invChord.dotKeys[0].split(":")[0]} ({INV_BASS[safeInvIdx]})
            </div>
            <p style={{ fontSize: 13, color: "#444", lineHeight: 1.6, margin: "0 0 10px" }}>{INV_DESC[safeInvIdx]}</p>
            <button onClick={() => playChordFromKeys(invChord.dotKeys, true)}
              style={{ fontSize: 12, padding: "5px 14px", border: "0.5px solid #0F6E56", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#0F6E56" }}>
              ▶ Écouter
            </button>
          </div>

          <PianoPlayer dotKeys={invChord.dotKeys} octaves={2} startOctave={3} showLabels showOctaveMarkers />

          <div style={S.infoBox}>
            <strong>Notation slash :</strong> C/E = accord de Do majeur avec Mi à la basse. Toujours : <em>nom de l'accord / note de basse</em>. L'état fondamental n'a pas de slash.
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 8px", color: "#111" }}>Renversements de Do majeur</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {["Renversement","Basse","Notes","Notation"].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 10px", fontWeight: 500, color: "#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { name:"État fondamental", bass:"fondamentale (Do)", notes:"Do–Mi–Sol", notation:"C" },
                  { name:"1er renversement",  bass:"tierce (Mi)",       notes:"Mi–Sol–Do", notation:"C/E" },
                  { name:"2e renversement",   bass:"quinte (Sol)",      notes:"Sol–Do–Mi", notation:"C/G" },
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

      {/* ══ QUIZ ══ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.stitle}>Entraînement</h2>
          {done ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>{quizScore>=8?"🎹":quizScore>=6?"👍":"💪"}</div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>Score : {quizScore} / {QUIZ_COUNT}</div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
                {quizScore===QUIZ_COUNT?"Parfait !":quizScore>=7?"Très bien !":"Continue à pratiquer."}
              </div>
              <button onClick={resetQuiz}
                style={{ fontSize: 13, padding: "8px 20px", border: "0.5px solid #185FA5", borderRadius: 20, cursor: "pointer", background: "#E6F1FB", color: "#185FA5" }}>
                Nouvelles questions →
              </button>
            </div>
          ) : (
            <div>
              <div style={{ fontSize: 12, color: "#999", marginBottom: 8 }}>
                Question {quizIdx+1} / {QUIZ_COUNT} &nbsp;·&nbsp;
                <span style={{ color: "#bbb" }}>{QUIZ_POOL.length} questions dans le pool</span>
              </div>
              <div style={{ fontSize: 15, fontWeight: 500, color: "#111", lineHeight: 1.6, marginBottom: 16 }}>
                {quizQs[quizIdx].q}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {quizQs[quizIdx].opts.map((opt, i) => {
                  const isCorrect = i === quizQs[quizIdx].a;
                  const isSelected = selected === i;
                  let bg="#fff", border="#e5e5e5", color="#333";
                  if (answered) {
                    if (isCorrect) { bg="#E1F5EE"; border="#0F6E56"; color="#085041"; }
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
                  {quizIdx+1 < QUIZ_COUNT ? "Question suivante →" : "Voir le score →"}
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

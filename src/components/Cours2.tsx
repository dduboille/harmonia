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

const GAMME_ACCORDS = [
  { deg:"I",   root:"C", suffix:"",    intervals:[0,4,7],  ctx:"sharp" as AccordContext, fn:"Tonique",   fnColor:"#0F6E56", fnBg:"#E1F5EE", type:"Majeure",  desc:"L'accord de repos absolu. Aucune note du triton instable." },
  { deg:"II",  root:"D", suffix:"m",   intervals:[2,5,9],  ctx:"flat"  as AccordContext, fn:"Sous-dom.", fnColor:"#534AB7", fnBg:"#EEEDFE", type:"Mineure",  desc:"Légèrement tendu. Prépare naturellement la dominante." },
  { deg:"III", root:"E", suffix:"m",   intervals:[4,7,11], ctx:"flat"  as AccordContext, fn:"Tonique",   fnColor:"#0F6E56", fnBg:"#E1F5EE", type:"Mineure",  desc:"Stable mais coloré. Substitut possible du I." },
  { deg:"IV",  root:"F", suffix:"",    intervals:[5,9,0],  ctx:"flat"  as AccordContext, fn:"Sous-dom.", fnColor:"#534AB7", fnBg:"#EEEDFE", type:"Majeure",  desc:"Prépare la dominante. Contient F, note du triton." },
  { deg:"V",   root:"G", suffix:"",    intervals:[7,11,2], ctx:"sharp" as AccordContext, fn:"Dominante", fnColor:"#BA7517", fnBg:"#FAEEDA", type:"Majeure",  desc:"Le plus tendu. Contient le triton B–F. Appelle la résolution." },
  { deg:"VI",  root:"A", suffix:"m",   intervals:[9,0,4],  ctx:"flat"  as AccordContext, fn:"Tonique",   fnColor:"#0F6E56", fnBg:"#E1F5EE", type:"Mineure",  desc:"Tonique secondaire. Souvent substitut du I (cadence rompue)." },
  { deg:"VII", root:"B", suffix:"dim", intervals:[11,2,5], ctx:"flat"  as AccordContext, fn:"Dominante", fnColor:"#BA7517", fnBg:"#FAEEDA", type:"Diminuée", desc:"La seule triade diminuée. Forte tension vers le I." },
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

const INV_NAMES = ["État fondamental","1er renversement","2e renversement","3e renversement"];
const INV_BASS  = ["fondamentale","tierce","quinte","septième"];
const INV_DESC  = [
  "La fondamentale est à la basse. L'accord sonne plein, stable, ancré.",
  "La tierce est à la basse. L'accord sonne plus léger, ouvert — fluidifie la ligne de basse.",
  "La quinte est à la basse. Plus instable, souvent utilisé comme accord de passage.",
  "La septième est à la basse. Couleur très suspendue — pousse fortement vers la résolution.",
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

const QUIZ_POOL = [
  // Structure des triades
  { q:"Structure d'une triade majeure ?", opts:["3ce min + 3ce maj","3ce maj + 3ce min","3ce min + 3ce min","3ce maj + 3ce maj"], a:1, fb:"Triade majeure = tierce majeure (4 dt) + tierce mineure (3 dt). Ex : C–E–G." },
  { q:"Structure d'une triade mineure ?", opts:["3ce min + 3ce maj","3ce maj + 3ce min","3ce min + 3ce min","3ce maj + 3ce maj"], a:0, fb:"Triade mineure = tierce mineure (3 dt) + tierce majeure (4 dt). Ex : C–Eb–G." },
  { q:"Structure d'une triade diminuée ?", opts:["3ce min + 3ce maj","3ce maj + 3ce min","3ce min + 3ce min","3ce maj + 3ce maj"], a:2, fb:"Triade diminuée = tierce mineure + tierce mineure. Ex : C–Eb–Gb." },
  { q:"Structure d'une triade augmentée ?", opts:["3ce min + 3ce maj","3ce maj + 3ce min","3ce min + 3ce min","3ce maj + 3ce maj"], a:3, fb:"Triade augmentée = tierce majeure + tierce majeure. Ex : C–E–G#." },
  { q:"Combien de demi-tons contient une tierce majeure ?", opts:["2","3","4","5"], a:2, fb:"Tierce majeure = 4 demi-tons. Ex : C–E." },
  { q:"Combien de demi-tons contient une tierce mineure ?", opts:["2","3","4","5"], a:1, fb:"Tierce mineure = 3 demi-tons. Ex : D–F." },
  { q:"Quelle triade a une quinte diminuée ?", opts:["Majeure","Mineure","Diminuée","Augmentée"], a:2, fb:"La triade diminuée a une quinte diminuée (6 demi-tons)." },
  { q:"Quelle triade a une quinte augmentée ?", opts:["Majeure","Mineure","Diminuée","Augmentée"], a:3, fb:"La triade augmentée a une quinte augmentée (8 demi-tons)." },
  { q:"Quelles triades sont stables (quinte juste) ?", opts:["Majeure et augmentée","Mineure et diminuée","Majeure et mineure","Diminuée et augmentée"], a:2, fb:"Majeure et mineure ont toutes deux une quinte juste (7 demi-tons) → stables." },
  { q:"Combien de notes dans une triade ?", opts:["2","3","4","5"], a:1, fb:"Une triade = 3 notes : fondamentale, tierce, quinte." },
  { q:"Comment construit-on un accord ?", opts:["Superposition de secondes","Superposition de tierces","Superposition de quartes","Superposition de quintes"], a:1, fb:"Un accord est construit par superposition de tierces." },
  // Notes des accords
  { q:"Quelles notes composent C major (Do majeur) ?", opts:["C–Eb–G","C–E–G","C–E–G#","C–Eb–Gb"], a:1, fb:"C major = C–E–G. Tierce majeure (4 dt) + tierce mineure (3 dt)." },
  { q:"Quelles notes composent Cm (Do mineur) ?", opts:["C–Eb–G","C–E–G","C–E–G#","C–Eb–Gb"], a:0, fb:"Cm = C–Eb–G. Tierce mineure (3 dt) + tierce majeure (4 dt)." },
  { q:"Quelles notes composent Cdim (Do diminué) ?", opts:["C–Eb–G","C–E–G","C–Eb–Gb","C–E–G#"], a:2, fb:"Cdim = C–Eb–Gb. Deux tierces mineures." },
  { q:"Quelles notes composent G major ?", opts:["G–Bb–D","G–B–D","G–A–D","G–B–E"], a:1, fb:"G major = G–B–D." },
  { q:"Quelles notes composent Dm ?", opts:["D–F#–A","D–F–A","D–F–G","D–E–A"], a:1, fb:"Dm = D–F–A. Tierce mineure (D→F) + tierce majeure (F→A)." },
  { q:"Quelles notes composent A major ?", opts:["A–C–E","A–C#–Eb","A–C#–E","A–B–E"], a:2, fb:"A major = A–C#–E." },
  { q:"Quelles notes composent Em ?", opts:["E–G#–B","E–G–B","E–G–A#","E–F#–B"], a:1, fb:"Em = E–G–B." },
  { q:"Quelles notes composent Bdim ?", opts:["B–D–F","B–D–F#","B–D#–F#","B–D–G"], a:0, fb:"Bdim = B–D–F. Les notes du triton de C majeur !" },
  { q:"Quel accord est formé par E–G–B ?", opts:["E major","Em","G major","C major"], a:1, fb:"E–G = 3 dt (3ce min) + G–B = 4 dt (3ce maj) → Em." },
  { q:"Quel accord est formé par F–A–C ?", opts:["Fm","F major","A minor","C major"], a:1, fb:"F–A = 4 dt (3ce maj) + A–C = 3 dt (3ce min) → F major." },
  { q:"Quel accord est formé par B–D–F ?", opts:["Bm","B major","Bdim","Dm"], a:2, fb:"B–D = 3 dt + D–F = 3 dt → deux tierces mineures → Bdim." },
  // Gamme majeure — triades
  { q:"Quel type produit le Ier degré de C majeur ?", opts:["Majeur","Mineur","Diminué","Augmenté"], a:0, fb:"Le Ier degré donne toujours un accord majeur en gamme majeure." },
  { q:"Quel type produit le IIe degré de C majeur ?", opts:["Majeur","Mineur","Diminué","Augmenté"], a:1, fb:"Le IIe degré donne un accord mineur : D–F–A." },
  { q:"Quel type produit le Ve degré de C majeur ?", opts:["Majeur","Mineur","Diminué","Augmenté"], a:0, fb:"Le Ve degré donne un accord majeur : G–B–D." },
  { q:"Quel type produit le VIIe degré de C majeur ?", opts:["Majeur","Mineur","Diminué","Augmenté"], a:2, fb:"Le VIIe degré donne la seule triade diminuée : B–D–F." },
  { q:"Combien de triades mineures en gamme majeure ?", opts:["1","2","3","4"], a:2, fb:"3 triades mineures : IIe (Dm), IIIe (Em), VIe (Am)." },
  { q:"Combien de triades majeures en gamme majeure ?", opts:["1","2","3","4"], a:2, fb:"3 triades majeures : Ier (C), IVe (F), Ve (G)." },
  { q:"Quel accord correspond au VIe degré de C majeur ?", opts:["F major","Am","G major","Bdim"], a:1, fb:"A–C–E = Am." },
  { q:"Quel est l'accord de dominante en C majeur ?", opts:["F major","Am","G major","Dm"], a:2, fb:"G–B–D = G major. Ve degré = dominante." },
  { q:"La séquence des types en gamme majeure est :", opts:["Maj min Maj min Maj min dim","Maj min min Maj Maj min dim","min Maj min Maj min Maj dim","Maj Maj min min Maj min dim"], a:1, fb:"I=Maj II=min III=min IV=Maj V=Maj VI=min VII=dim. Séquence fixe dans toute gamme majeure." },
  // Tétrades
  { q:"Qu'est-ce qu'une tétrade ?", opts:["Une triade renversée","Une triade + une septième","Un accord de 5 notes","Un accord sans quinte"], a:1, fb:"Tétrade = triade + tierce supplémentaire au-dessus de la quinte (la septième)." },
  { q:"Structure d'un accord Maj7 ?", opts:["Triade maj + 7e min","Triade min + 7e maj","Triade maj + 7e maj","Triade min + 7e min"], a:2, fb:"Maj7 = triade majeure + septième majeure. Ex : CMaj7 = C–E–G–B." },
  { q:"Structure d'un accord dominant 7 (X7) ?", opts:["Triade maj + 7e min","Triade min + 7e maj","Triade maj + 7e maj","Triade min + 7e min"], a:0, fb:"X7 = triade majeure + septième mineure. Ex : G7 = G–B–D–F." },
  { q:"Structure d'un accord m7 ?", opts:["Triade maj + 7e min","Triade min + 7e maj","Triade maj + 7e maj","Triade min + 7e min"], a:3, fb:"m7 = triade mineure + septième mineure. Ex : Dm7 = D–F–A–C." },
  { q:"Structure d'un accord m7♭5 ?", opts:["Triade dim + 7e maj","Triade dim + 7e min","Triade aug + 7e min","Triade min + 7e dim"], a:1, fb:"m7♭5 = triade diminuée + septième mineure. Ex : Bm7♭5 = B–D–F–A." },
  { q:"Différence entre CMaj7 et C7 ?", opts:["La quinte","La tierce","La septième","La fondamentale"], a:2, fb:"CMaj7 = 7e majeure (B). C7 = 7e mineure (Bb). Tout le reste est identique." },
  // Notes des tétrades
  { q:"Quelles notes composent G7 ?", opts:["G–B–D–F#","G–B–D–F","G–Bb–D–F","G–A–D–F"], a:1, fb:"G7 = G–B–D–F. Triade G major + 7e mineure (F)." },
  { q:"Quelles notes composent CMaj7 ?", opts:["C–E–G–Bb","C–Eb–G–B","C–E–G–B","C–E–G#–B"], a:2, fb:"CMaj7 = C–E–G–B. Triade C major + 7e majeure (B)." },
  { q:"Quelles notes composent Dm7 ?", opts:["D–F#–A–C","D–F–A–C","D–F–A–C#","D–F–G–C"], a:1, fb:"Dm7 = D–F–A–C. Triade Dm + 7e mineure (C)." },
  { q:"Quelles notes composent Bm7♭5 ?", opts:["B–D–F#–A","B–D–F–A","B–Db–F–A","B–D–F–Ab"], a:1, fb:"Bm7♭5 = B–D–F–A. Triade Bdim + 7e mineure (A)." },
  { q:"Quel degré de C majeur produit un accord Maj7 ?", opts:["IIe et Ve","Ier et IVe","IIIe et VIe","Ve et VIIe"], a:1, fb:"CMaj7 (Ier) et FMaj7 (IVe). Ce sont les deux seuls Maj7 de la gamme." },
  { q:"Combien d'accords m7 en gamme de C majeur ?", opts:["1","2","3","4"], a:2, fb:"3 accords m7 : Dm7 (II), Em7 (III), Am7 (VI)." },
  { q:"Quel est l'accord du VIIe degré en tétrade ?", opts:["CMaj7","G7","Bm7♭5","Bdim7"], a:2, fb:"B–D–F–A = Bm7♭5 (demi-diminué)." },
  { q:"Quel accord contient le triton complet F–B ?", opts:["CMaj7","FMaj7","G7","Am7"], a:2, fb:"G7 = G–B–D–F. Il contient B (la sensible) et F (la sous-dominante)." },
  // Renversements
  { q:"Qu'est-ce qu'un renversement ?", opts:["Un accord joué plus vite","Un changement de la note à la basse","Un accord avec des notes manquantes","Une transposition"], a:1, fb:"Un renversement change la note à la basse. L'accord garde ses notes, seul l'ordre change." },
  { q:"Combien de renversements possède une triade ?", opts:["2","3","4","5"], a:1, fb:"Une triade a 3 positions : état fondamental, 1er (tierce à la basse), 2e (quinte)." },
  { q:"Combien de renversements possède une tétrade ?", opts:["2","3","4","5"], a:2, fb:"Une tétrade a 4 positions : fondamental, 1er, 2e, 3e (septième à la basse)." },
  { q:"Que signifie C/E ?", opts:["C avec E ajouté","C major avec E à la basse","C mineur en E","Accord de E avec C"], a:1, fb:"X/Y = accord X avec Y à la basse. C/E = C major, 1er renversement." },
  { q:"Quelle note est à la basse dans G/B ?", opts:["G","A","B","C"], a:2, fb:"G/B = G major avec B à la basse = 1er renversement." },
  { q:"Quelle est la basse du 2e renversement ?", opts:["Fondamentale","Tierce","Quinte","Septième"], a:2, fb:"Le 2e renversement a la quinte à la basse. Ex : C/G = C major avec G." },
  { q:"Quelle est la basse du 3e renversement (tétrade) ?", opts:["Fondamentale","Tierce","Quinte","Septième"], a:3, fb:"Le 3e renversement (uniquement tétrades) a la septième à la basse." },
  { q:"Comment note-t-on le 1er renversement de C major ?", opts:["C","C/E","C/G","Cm"], a:1, fb:"C/E = C major avec E (la tierce) à la basse." },
  { q:"Pourquoi utilise-t-on des renversements ?", opts:["Pour changer la couleur","Pour fluidifier la basse","Pour varier la texture","Toutes ces raisons"], a:3, fb:"Les renversements servent à fluidifier la ligne de basse, varier la couleur et l'équilibre." },
  { q:"Quel est le 1er renversement de Am ?", opts:["Am/E","Am/C","Am/A","Am/G"], a:1, fb:"Am = A–C–E. 1er renversement = tierce à la basse = C. Notation : Am/C." },
  // Reconnaissance
  { q:"Quel accord produit le IVe degré de G majeur ?", opts:["C major","Dm","Em","Bdim"], a:0, fb:"G(I) A(II) B(III) C(IV). Le IVe degré de G majeur est C major." },
  { q:"Quel accord produit le Ve degré de G majeur ?", opts:["C major","D major","Em","Am"], a:1, fb:"G(I) A(II) B(III) C(IV) D(V). La dominante de G majeur est D major." },
  { q:"Quel accord produit le IIe degré de D majeur ?", opts:["Em","E major","Gm","A major"], a:0, fb:"D(I) E(II). Le IIe degré de D majeur est Em." },
  { q:"Quelles notes composent Em7 ?", opts:["E–G#–B–D","E–G–B–D","E–G–Bb–D","E–G–A#–D"], a:1, fb:"Em7 = E–G–B–D. Triade Em + 7e mineure (D)." },
  { q:"Quelles notes composent Am7 ?", opts:["A–C#–E–G","A–C–E–G","A–C–Eb–G","A–C–E–G#"], a:1, fb:"Am7 = A–C–E–G. Triade Am + 7e mineure (G)." },
  { q:"Quelles notes composent FMaj7 ?", opts:["F–A–C–Eb","F–Ab–C–E","F–A–C–E","F–A–C#–E"], a:2, fb:"FMaj7 = F–A–C–E. Triade F major + 7e majeure (E)." },
  { q:"Quel accord a les notes G–B–D–F ?", opts:["GMaj7","G7","Gm7","Gdim7"], a:1, fb:"G–B–D–F = G7. Triade G major + 7e mineure (F)." },
  { q:"Quel accord a les notes D–F–A–C ?", opts:["DMaj7","D7","Dm7","Ddim7"], a:2, fb:"D–F–A–C = Dm7. Triade Dm + 7e mineure (C)." },
  // Vocabulaire
  { q:"Comment appelle-t-on la note de référence d'un accord ?", opts:["La tonique","La fondamentale","La basse","La racine"], a:1, fb:"La fondamentale est la note de départ, celle qui donne son nom à l'accord." },
  { q:"La septième d'un accord C7 est :", opts:["C","E","G","Bb"], a:3, fb:"C7 = C–E–G–Bb. La septième mineure de C est Bb (10 demi-tons au-dessus)." },
  { q:"Que signifie 'demi-diminué' ?", opts:["Accord diminué sans quinte","Accord m7♭5","Accord dim7 renversé","Accord entre mineur et diminué"], a:1, fb:"Le demi-diminué = m7♭5 : triade diminuée + 7e mineure." },
  { q:"Quel est le seul accord dominant 7 (X7) en C majeur ?", opts:["CMaj7","FMaj7","G7","Am7"], a:2, fb:"G7 est le seul accord de dominante 7 de la gamme. Il contient le triton B–F." },

  // ── Questions supplémentaires ──
  { q:"Quelles notes composent Dm7♭5 (Bm7♭5 version D) ?", opts:["D–F–A–C","D–F–Ab–C","D–F#–A–C","D–F–Ab–Cb"], a:1, fb:"Dm7♭5 = D–F–Ab–C. Triade Ddim (D–F–Ab) + 7e mineure (C)." },
  { q:"Quel accord produit le IIIe degré de C majeur ?", opts:["C major","Dm","Em","F major"], a:2, fb:"C(I) D(II) E(III). Le IIIe degré de C majeur est Em (Mi–Sol–Si)." },
  { q:"Quel accord produit le VIe degré de G majeur ?", opts:["Am","Em","Bm","C major"], a:1, fb:"G(I) A(II) B(III) C(IV) D(V) E(VI). Le VIe degré de G majeur est Em." },
  { q:"Quelle est la différence entre Bdim et Bm7♭5 ?", opts:["La quinte","La fondamentale","La septième : dim7 a une 7e diminuée, m7♭5 a une 7e mineure","La tierce"], a:2, fb:"Bdim = B–D–F (triade). Bm7♭5 = B–D–F–A (tétrade, 7e mineure). La différence est la septième ajoutée." },
  { q:"Combien de demi-tons contient une septième diminuée ?", opts:["8","9","10","11"], a:1, fb:"Septième diminuée = 9 demi-tons. Ex : B–Ab (la7e dim de Bdim7). C'est enharmonique à une sixte majeure." },
  { q:"Dans la gamme de D majeur, quel accord est produit par le Ve degré ?", opts:["D major","Em","A major","G major"], a:2, fb:"D(I) E(II) F#(III) G(IV) A(V). La dominante de D majeur est A major." },
  { q:"Quelles notes composent A7 (La dominant 7) ?", opts:["A–C#–E–G","A–C–E–G","A–C#–E–G#","A–C–E–G#"], a:0, fb:"A7 = A–C#–E–G. Triade A major (A–C#–E) + 7e mineure (G)." },
  { q:"Quel accord a les notes B–D–F–A ?", opts:["Bdim","Bm","Bm7♭5","BMaj7"], a:2, fb:"B–D (tierce min) + D–F (tierce min) = Bdim. + A (7e min) → Bm7♭5 (demi-diminué)." },
  { q:"La triade augmentée est symétrique car :", opts:["Ses trois notes sont identiques","Elle contient deux tierces majeures identiques — on peut la renverser sans changer sa structure","Elle n'a pas de renversement","Elle appartient à plusieurs gammes simultanément"], a:1, fb:"C–E–G# = E–G#–C = G#–C–E (chacune = deux tierces majeures). La triade augmentée est symétrique : ses trois renversements ont la même structure." },
  { q:"Pourquoi la triade diminuée est-elle instable ?", opts:["Car elle est mineure","Car sa quinte diminuée crée une dissonance — deux tierces mineures empilées génèrent une 5te à 6 dt au lieu de 7","Car elle n'a que 3 notes","Car elle est toujours renversée"], a:1, fb:"La quinte diminuée (6 demi-tons) est instable — ce n'est pas la quinte juste (7 dt) à laquelle l'oreille s'attend. Cette instabilité fait de Bdim l'accord de tension par excellence." },
  { q:"Dans G7, quelle note est la septième de dominante ?", opts:["G","B","D","F"], a:3, fb:"G7 = G–B–D–F. F est la septième (mineure) de G7. C'est la note du triton (avec B) qui doit descendre vers E lors de la résolution." },
  { q:"Quel accord de C majeur a la même fondamentale que la tonique mais avec une 7e majeure ?", opts:["C7","CMaj7","Cm7","Cdim7"], a:1, fb:"CMaj7 = C–E–G–B. Fondamentale C + 7e majeure B. À ne pas confondre avec C7 (= C–E–G–Bb, 7e mineure)." },
  { q:"Quel renversement d'accord est le plus instable ?", opts:["L'état fondamental","Le 1er renversement","Le 2e renversement","Le 3e renversement"], a:2, fb:"Le 2e renversement (quinte à la basse) est le plus instable — c'est le 6/4 de cadence. Le 3e renversement (septième à la basse) est très tendu et pousse fortement vers la résolution." },
  { q:"Quel accord correspond à Am/C ?", opts:["C major","Am en 1er renversement — C à la basse","Am en 2e renversement — E à la basse","Cm"], a:1, fb:"Am/C = accord de La mineur (A–C–E) avec C à la basse. C est la tierce de Am → 1er renversement." },
  { q:"Comment note-t-on le 2e renversement de G major ?", opts:["G","G/B","G/D","Gm"], a:2, fb:"G/D = G major avec D (la quinte) à la basse = 2e renversement." },
  { q:"Quel accord est formé par A–C–E ?", opts:["A major","Am","C major","F major"], a:1, fb:"A–C = 3 demi-tons (tierce min) + C–E = 4 demi-tons (tierce maj) → Am." },
  { q:"Quel accord est formé par D–F#–A–C ?", opts:["DMaj7","D7","Dm7","Ddim7"], a:1, fb:"D–F# = 4 dt (3ce maj) + F#–A = 3 dt + A–C = 3 dt → triade D major + 7e min = D7." },
  { q:"En E majeur, quel accord produit le IIe degré ?", opts:["Em","F# mineur","F# major","G# mineur"], a:1, fb:"E(I) F#(II). Le IIe degré de E majeur est F# mineur (F#–A–C#)." },
  { q:"Pourquoi utilise-t-on le 1er renversement plutôt que l'état fondamental ?", opts:["Pour rendre l'accord plus dissonant","Pour fluidifier la ligne de basse par mouvement conjoint","Pour ajouter une note","Pour changer la tonalité"], a:1, fb:"Le 1er renversement place la tierce à la basse. Cela permet des lignes de basse conjointes plus mélodiques — ex : C–C/E–F au lieu de C–C–F." },
  { q:"Quelles notes composent E7 ?", opts:["E–G–B–D","E–G#–B–D","E–G–B–D#","E–G#–B–D#"], a:1, fb:"E7 = E–G#–B–D. Triade E major (E–G#–B) + 7e mineure (D)." },
  { q:"Quel accord contient uniquement les notes du triton de C majeur (F et B) ?", opts:["Bdim uniquement","G7 et Bdim — les deux contiennent F et B","FMaj7","Am7"], a:1, fb:"G7 = G–B–D–F (contient F et B). Bdim = B–D–F (contient F et B). Les deux accords contiennent le triton fonctionnel de C majeur." },
  { q:"Qu'est-ce qu'un accord de sixte ajoutée (add6) ?", opts:["Un accord avec une 7e majeure","Un accord de triade avec une 6te ajoutée sans septième","Un accord en premier renversement","Un accord avec une 6te et une 7e"], a:1, fb:"Un accord add6 (ex : Cadd6 = C–E–G–A) ajoute une sixte sans septième. À distinguer de CMaj7 (qui a B, pas A) et de Am7 (qui est un autre accord)." },
  { q:"En F majeur, quel accord produit le VIIe degré ?", opts:["Bdim","Edim","Am","Gm"], a:1, fb:"F(I) G(II) A(III) Bb(IV) C(V) D(VI) E(VII). Le VIIe de F majeur est E. E–G–Bb = Edim." },
  { q:"Quelles notes composent Cdim7 ?", opts:["C–Eb–Gb–Bb","C–Eb–Gb–A","C–E–Gb–A","C–Eb–G–Bb"], a:1, fb:"Cdim7 = C–Eb–Gb–A (ou Bbb). Triade Cdim (C–Eb–Gb) + 7e diminuée (A = Bbb enharmonique). 4 notes symétriques espacées de 3 dt." },
  { q:"Comment la tierce d'un accord détermine-t-elle son mode ?", opts:["Elle ne le détermine pas","Une tierce majeure (4 dt) → accord majeur ; une tierce mineure (3 dt) → accord mineur","La tierce détermine la quinte","La tierce détermine la septième"], a:1, fb:"La tierce est la note qui 'colore' l'accord. Tierce majeure = couleur majeure. Tierce mineure = couleur mineure. C'est la première note qu'on modifie pour changer le mode d'un accord." },
];

const QUIZ_COUNT = 10;

// ─── Composant ────────────────────────────────────────────────────────────────

export default function Cours2() {
  const i18n = useCoursI18n("cours2");
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

  const SECTIONS_IDS = ["triades","gamme","tetrades","renversements","quiz"] as const;

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
        <p style={S.subtitle}>De la triade simple à l'accord de septième — construire, harmoniser, renverser.</p>
      </div>

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

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 8px", color: "#111" }}>Les 4 types de triades</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {["Type","Structure (tierces)","Quinte","Stabilité","Exemple (sur C)"].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 10px", fontWeight: 500, color: "#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TRIAD_TYPES.map((t, i) => {
                  const ex = buildChord("C", t.intervals, t.suffix, t.ctx);
                  return (
                    <tr key={t.id} style={{ borderBottom: "0.5px solid #f0f0f0", background: i%2===0?"#fff":"#fafafa" }}>
                      <td style={{ padding: "7px 10px", fontWeight: 500, color: t.color }}>{t.label}</td>
                      <td style={{ padding: "7px 10px", fontSize: 12, color: "#555" }}>{t.struct1}<br/><span style={{ color: "#aaa" }}>+</span> {t.struct2}</td>
                      <td style={{ padding: "7px 10px", fontSize: 12 }}>{t.quinte}</td>
                      <td style={{ padding: "7px 10px" }}>
                        <span style={{ fontSize: 11, padding: "1px 7px", borderRadius: 10, background: t.stability==="stable"?"#E1F5EE":"#FAECE7", color: t.stability==="stable"?"#0F6E56":"#993C1D" }}>{t.stability}</span>
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
            Cette 4e note — la <strong>septième</strong> — complexifie la couleur de l'accord sans en briser la structure.
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

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 8px", color: "#111" }}>Tétrades de C majeur</h3>
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
                      <span style={{ fontSize: 11, padding: "1px 7px", borderRadius: 10, background: "#f0f0f0", color: row.color }}>{row.type}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={S.warnBox}>Le Ve degré (G7) est le seul accord de dominante 7 (X7) de la gamme. Il contient le triton complet B–F.</div>
        </div>
      )}

      {/* ══ RENVERSEMENTS ══ */}
      {activeSection === "renversements" && (
        <div>
          <h2 style={S.stitle}>Renversements</h2>
          <p style={S.sbody}>
            Un accord contient toujours les mêmes notes — mais quelle note est placée <strong>à la basse</strong> change la couleur.
            La note la plus grave détermine le renversement. La notation utilise un slash : C/E = C major avec E à la basse.
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
            <strong>Notation slash :</strong> C/E = accord de C major avec E à la basse. Toujours : <em>nom de l'accord / note de basse</em>. L'état fondamental n'a pas de slash.
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 8px", color: "#111" }}>Renversements de C major</h3>
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
                  { name:"État fondamental", bass:"fondamentale (C)", notes:"C–E–G", notation:"C" },
                  { name:"1er renversement",  bass:"tierce (E)",       notes:"E–G–C", notation:"C/E" },
                  { name:"2e renversement",   bass:"quinte (G)",       notes:"G–C–E", notation:"C/G" },
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
          <h2 style={S.stitle}>{i18n.training}</h2>
          {done ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>{quizScore>=8?"🎹":quizScore>=6?"👍":"💪"}</div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>{i18n.t("score")} : {quizScore} / {QUIZ_COUNT}</div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
                {quizScore===QUIZ_COUNT?"Parfait ! Tu maîtrises la construction des accords.":quizScore>=7?"Très bien ! Quelques points à consolider.":"Continue à pratiquer — relis les sections et recommence."}
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

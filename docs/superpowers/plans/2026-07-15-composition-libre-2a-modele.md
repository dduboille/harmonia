# Composition libre 2a — modèle de pièce + export MusicXML — Plan d'implémentation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Un modèle de pièce pur (deux portées, richesse rythmique complète) et son export MusicXML, fondation de l'éditeur de composition — vérifié par aller-retour avec le parseur existant.

**Architecture :** Deux modules purs. `src/lib/piece-model.ts` (les types + `pieceVierge()` + le calcul des durées en divisions) ; `src/lib/piece-vers-musicxml.ts` (la sérialisation). Aucune interface : le MusicXML produit hérite gratuitement de l'affichage (Verovio), de l'analyse et de l'export. La saisie interactive est le sous-projet 2b.

**Tech Stack :** TypeScript strict, vitest. Aucune dépendance nouvelle.

**Spec :** `docs/superpowers/specs/2026-07-15-composition-libre-2a-modele-design.md`

**Contraintes d'environnement :**
- **NE JAMAIS lancer `npx tsc --noEmit`** : cela sature la mémoire de ce poste. Contrôle : `NODE_OPTIONS="--max-old-space-size=8192" npm run build`.
- Tests : `npx vitest run`. La suite compte **285 tests** avant ce chantier.
- TypeScript strict, pas de `any`. Commentaires et identifiants en **français**, disant le POURQUOI.

**Ce qui existe et qu'on réutilise (à lire) :**
- `src/lib/musicxml-parse.ts` — `parseMusicXML(xml): ParsedScore`, `TPQ = 768`. C'est lui qui VALIDE la sérialisation, par aller-retour. Il normalise les `<divisions>` du fichier sur sa grille interne (TPQ=768 par noire) : une noire écrite en divisions 48 est relue à 768 ticks.

---

## Structure des fichiers

| Fichier | Responsabilité |
|---|---|
| `src/lib/piece-model.ts` *(nouveau)* | Les types du modèle ; `dureeEnDivisions` (durée → ticks, refuse l'impossible) ; `pieceVierge()` (8 mesures, Do majeur, 4/4). |
| `src/lib/piece-vers-musicxml.ts` *(nouveau)* | `pieceVersMusicXML(piece): string` — MusicXML à une partie, deux portées. |

---

## Task 1 : Le modèle et le calcul des durées

**Files:**
- Create: `src/lib/piece-model.ts`
- Test: `src/lib/piece-model.test.ts`

- [ ] **Step 1: Écrire les tests qui échouent**

Créer `src/lib/piece-model.test.ts` :

```ts
import { describe, it, expect } from "vitest";
import { dureeEnDivisions, pieceVierge, DIVISIONS, type Duree } from "./piece-model";

describe("dureeEnDivisions — durées entières en divisions 48", () => {
  const d = (base: Duree["base"], points: Duree["points"] = 0, nolet?: Duree["nolet"]): Duree =>
    ({ base, points, nolet });

  it("les valeurs de base", () => {
    expect(DIVISIONS).toBe(48);
    expect(dureeEnDivisions(d("ronde"))).toBe(192);
    expect(dureeEnDivisions(d("blanche"))).toBe(96);
    expect(dureeEnDivisions(d("noire"))).toBe(48);
    expect(dureeEnDivisions(d("croche"))).toBe(24);
    expect(dureeEnDivisions(d("double"))).toBe(12);
  });

  it("les points", () => {
    expect(dureeEnDivisions(d("noire", 1))).toBe(72);   // noire pointée = 1,5 noire
    expect(dureeEnDivisions(d("noire", 2))).toBe(84);   // double pointée = 1,75 noire
    expect(dureeEnDivisions(d("croche", 1))).toBe(36);
  });

  it("le triolet (3 dans le temps de 2)", () => {
    // Un triolet de croches : chaque croche vaut 2/3 d'une croche = 16.
    expect(dureeEnDivisions(d("croche", 0, { reelles: 3, normales: 2 }))).toBe(16);
    // Trois d'entre elles occupent bien deux croches (48).
    expect(3 * dureeEnDivisions(d("croche", 0, { reelles: 3, normales: 2 }))).toBe(48);
  });

  it("refuse une durée non représentable en divisions 48", () => {
    // Un triolet de doubles pointées ne tombe pas juste : on refuse plutôt que de
    // produire une durée fractionnaire, invalide en MusicXML.
    expect(() => dureeEnDivisions(d("double", 2, { reelles: 3, normales: 2 }))).toThrow();
  });
});

describe("pieceVierge — 8 mesures, Do majeur, 4/4", () => {
  it("a la bonne armure et le bon chiffrage", () => {
    const p = pieceVierge();
    expect(p.armure).toBe(0);
    expect(p.chiffrage).toEqual({ temps: 4, unite: 4 });
    expect(p.mesures).toHaveLength(8);
  });

  it("chaque mesure a deux portées, chacune un silence de mesure", () => {
    const p = pieceVierge();
    for (const m of p.mesures) {
      expect(m.portees).toHaveLength(2);
      for (const voix of m.portees) {
        expect(voix).toHaveLength(1);
        const ev = voix[0];
        expect(ev.type).toBe("silence");
        expect(ev.type === "silence" && ev.mesureEntiere).toBe(true);
      }
    }
  });
});
```

- [ ] **Step 2: Lancer les tests, vérifier qu'ils échouent**

Run: `npx vitest run src/lib/piece-model.test.ts`
Expected: FAIL — `Failed to resolve import "./piece-model"`.

- [ ] **Step 3: Écrire le module**

Créer `src/lib/piece-model.ts` :

```ts
/**
 * lib/piece-model.ts
 * Harmonia — Le MODÈLE d'une pièce composée dans le studio : source de vérité,
 * pure (aucun rendu, aucun XML). L'éditeur (2b) mutera ce modèle ; le sérialiseur
 * le convertit en MusicXML, d'où découlent la gravure (Verovio), l'analyse et l'export.
 *
 * Tout est nommé en français, comme le reste du moteur.
 */

export type LettreNote = "C" | "D" | "E" | "F" | "G" | "A" | "B";
export type BaseDuree = "ronde" | "blanche" | "noire" | "croche" | "double";

export interface Hauteur {
  lettre: LettreNote;
  alteration: number; // -2..+2 (0 = bécarre)
  octave: number;     // octave standard (Do4 = do central)
}

export interface Duree {
  base: BaseDuree;
  points: 0 | 1 | 2;
  /** n-olet : { reelles: 3, normales: 2 } pour le triolet. Absent = pas de n-olet. */
  nolet?: { reelles: number; normales: number };
}

export interface Note {
  type: "note";
  hauteurs: Hauteur[]; // 1 = note simple, 2+ = accord
  duree: Duree;
  /** Liaison de TENUE vers la note suivante. */
  liee?: boolean;
}

export interface Silence {
  type: "silence";
  duree: Duree;
  /** Silence occupant toute la mesure (la mesure vide) : se grave centré. */
  mesureEntiere?: boolean;
}

export type Evenement = Note | Silence;
export type Voix = Evenement[];

/** Une mesure : la portée du haut (clé de Sol) et du bas (clé de Fa). */
export interface Mesure {
  portees: [Voix, Voix];
}

export interface Piece {
  armure: number;                          // -7..+7
  chiffrage: { temps: number; unite: number };
  mesures: Mesure[];
}

/**
 * Divisions par NOIRE dans le MusicXML produit. 48 rend TOUTES les durées visées
 * entières : la double vaut 12, la croche 24, la noire 48 ; un triolet de croches
 * vaut 16 (24 × 2/3) ; une noire pointée 72. Sans ce dénominateur commun, points et
 * triolets tomberaient sur des durées fractionnaires, invalides en MusicXML.
 */
export const DIVISIONS = 48;

const NOIRES: Record<BaseDuree, number> = {
  ronde: 4, blanche: 2, noire: 1, croche: 0.5, double: 0.25,
};

// Facteur des points, en fraction exacte : 1, 3/2, 7/4.
const POINT_NUM = [1, 3, 7] as const;
const POINT_DEN = [1, 2, 4] as const;

/**
 * Durée en ticks (divisions). Le calcul est fait en fraction EXACTE (numérateur /
 * dénominateur) pour ne dépendre d'aucun arrondi flottant : une combinaison qui ne
 * tombe pas juste (un triolet de doubles pointées…) est REFUSÉE plutôt que de
 * produire une durée fractionnaire.
 */
export function dureeEnDivisions(duree: Duree, divisions: number = DIVISIONS): number {
  const baseTicks = NOIRES[duree.base] * divisions; // entier pour divisions = 48
  const num = POINT_NUM[duree.points] * (duree.nolet?.normales ?? 1);
  const den = POINT_DEN[duree.points] * (duree.nolet?.reelles ?? 1);
  const ticks = (baseTicks * num) / den;
  if (!Number.isInteger(ticks)) {
    throw new Error(`Durée non représentable en divisions=${divisions} : ${JSON.stringify(duree)}`);
  }
  return ticks;
}

/** La pièce vierge de départ : 8 mesures (une phrase), Do majeur, 4/4, portées vides. */
export function pieceVierge(): Piece {
  const mesureVide = (): Mesure => ({
    portees: [
      [{ type: "silence", duree: { base: "ronde", points: 0 }, mesureEntiere: true }],
      [{ type: "silence", duree: { base: "ronde", points: 0 }, mesureEntiere: true }],
    ],
  });
  return {
    armure: 0,
    chiffrage: { temps: 4, unite: 4 },
    mesures: Array.from({ length: 8 }, mesureVide),
  };
}
```

- [ ] **Step 4: Lancer les tests, vérifier qu'ils passent**

Run: `npx vitest run src/lib/piece-model.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/lib/piece-model.ts src/lib/piece-model.test.ts
git commit -m "feat(compo): modele de piece et calcul des durees en divisions"
```

---

## Task 2 : L'export MusicXML

**Files:**
- Create: `src/lib/piece-vers-musicxml.ts`
- Test: `src/lib/piece-vers-musicxml.test.ts`

**Contexte :** le test maître est l'ALLER-RETOUR : sérialiser une pièce, la relire avec `parseMusicXML`, et vérifier que les notes correspondent. Le parseur normalise les divisions sur TPQ=768 : une noire (48 ici) est relue à 768 ticks.

- [ ] **Step 1: Écrire les tests qui échouent**

Créer `src/lib/piece-vers-musicxml.test.ts` :

```ts
import { describe, it, expect } from "vitest";
import { parseMusicXML, TPQ } from "./musicxml-parse";
import { pieceVersMusicXML } from "./piece-vers-musicxml";
import { pieceVierge, type Piece, type Note, type Hauteur } from "./piece-model";

/** Raccourci : une note simple. */
function n(lettre: Hauteur["lettre"], octave: number, base: Note["duree"]["base"], points: 0 | 1 | 2 = 0, extra: Partial<Note> = {}): Note {
  return { type: "note", hauteurs: [{ lettre, alteration: 0, octave }], duree: { base, points }, ...extra };
}

/** Une pièce d'une mesure : voix du haut et du bas fournies. */
function piece1(haut: Piece["mesures"][0]["portees"][0], bas: Piece["mesures"][0]["portees"][1]): Piece {
  return { armure: 0, chiffrage: { temps: 4, unite: 4 }, mesures: [{ portees: [haut, bas] }] };
}

describe("pieceVersMusicXML — aller-retour par le parseur", () => {
  it("quatre noires à la portée du haut se relisent aux bons instants", () => {
    const xml = pieceVersMusicXML(piece1(
      [n("C", 5, "noire"), n("D", 5, "noire"), n("E", 5, "noire"), n("F", 5, "noire")],
      [{ type: "silence", duree: { base: "ronde", points: 0 }, mesureEntiere: true }],
    ));
    const score = parseMusicXML(xml);
    const haut = score.notes.filter((x) => x.midi >= 71).sort((a, b) => a.onset - b.onset);
    expect(haut.map((x) => x.onset)).toEqual([0, TPQ, 2 * TPQ, 3 * TPQ]);
    expect(haut.map((x) => x.midi)).toEqual([72, 74, 76, 77]); // Do5 Ré5 Mi5 Fa5
  });

  it("la portée du bas est lue simultanément (grâce au <backup>)", () => {
    const xml = pieceVersMusicXML(piece1(
      [n("C", 5, "ronde")],
      [n("C", 3, "ronde")],
    ));
    const score = parseMusicXML(xml);
    // Do5 (72) en haut et Do3 (48) en bas, tous deux à l'instant 0.
    const a0 = score.notes.filter((x) => x.onset === 0).map((x) => x.midi).sort((a, b) => a - b);
    expect(a0).toEqual([48, 72]);
  });

  it("une noire POINTÉE dure 1,5 temps", () => {
    const xml = pieceVersMusicXML(piece1(
      [n("C", 5, "noire", 1), n("D", 5, "croche"), n("E", 5, "noire"), n("F", 5, "noire")],
      [{ type: "silence", duree: { base: "ronde", points: 0 }, mesureEntiere: true }],
    ));
    const doNote = parseMusicXML(xml).notes.find((x) => x.midi === 72)!;
    expect(doNote.duration).toBe(Math.round(1.5 * TPQ));
  });

  it("deux notes LIÉES se fondent en une seule tenue", () => {
    const xml = pieceVersMusicXML(piece1(
      [n("C", 5, "blanche", 0, { liee: true }), n("C", 5, "blanche")],
      [{ type: "silence", duree: { base: "ronde", points: 0 }, mesureEntiere: true }],
    ));
    const dos = parseMusicXML(xml).notes.filter((x) => x.midi === 72);
    expect(dos).toHaveLength(1);            // fusionnées
    expect(dos[0].duration).toBe(4 * TPQ);  // deux blanches = une ronde
  });

  it("un TRIOLET de croches occupe le temps de deux croches", () => {
    const triolet = (l: Hauteur["lettre"]): Note => ({
      type: "note", hauteurs: [{ lettre: l, alteration: 0, octave: 5 }],
      duree: { base: "croche", points: 0, nolet: { reelles: 3, normales: 2 } },
    });
    const xml = pieceVersMusicXML(piece1(
      [triolet("C"), triolet("D"), triolet("E"), n("F", 5, "noire"), n("G", 5, "noire"), n("A", 5, "noire")],
      [{ type: "silence", duree: { base: "ronde", points: 0 }, mesureEntiere: true }],
    ));
    const score = parseMusicXML(xml);
    const trio = score.notes.filter((x) => [72, 74, 76].includes(x.midi)).sort((a, b) => a.onset - b.onset);
    // Trois notes dans un temps (768) : chacune 256.
    expect(trio.map((x) => x.duration)).toEqual([256, 256, 256]);
    expect(trio[2].onset).toBe(512);
    // La note SUIVANTE (Fa) tombe bien au 2e temps.
    expect(score.notes.find((x) => x.midi === 77)!.onset).toBe(TPQ);
  });

  it("un ACCORD empile ses hauteurs au même instant", () => {
    const accord: Note = {
      type: "note",
      hauteurs: [
        { lettre: "C", alteration: 0, octave: 4 },
        { lettre: "E", alteration: 0, octave: 4 },
        { lettre: "G", alteration: 0, octave: 4 },
      ],
      duree: { base: "ronde", points: 0 },
    };
    const xml = pieceVersMusicXML(piece1(
      [accord],
      [{ type: "silence", duree: { base: "ronde", points: 0 }, mesureEntiere: true }],
    ));
    const a0 = parseMusicXML(xml).notes.filter((x) => x.onset === 0).map((x) => x.midi).sort((a, b) => a - b);
    expect(a0).toEqual([60, 64, 67]); // Do-Mi-Sol
  });

  it("une altération est conservée (Fa# se relit en Fa#)", () => {
    const faDiese: Note = {
      type: "note", hauteurs: [{ lettre: "F", alteration: 1, octave: 5 }], duree: { base: "ronde", points: 0 },
    };
    const xml = pieceVersMusicXML(piece1(
      [faDiese],
      [{ type: "silence", duree: { base: "ronde", points: 0 }, mesureEntiere: true }],
    ));
    const note = parseMusicXML(xml).notes.find((x) => x.onset === 0 && x.midi > 60)!;
    expect(note.step).toBe("F");
    expect(note.alter).toBe(1);
  });
});

describe("pieceVersMusicXML — la pièce vierge", () => {
  it("produit un MusicXML de 8 mesures relisible", () => {
    const score = parseMusicXML(pieceVersMusicXML(pieceVierge()));
    expect(score.measures).toHaveLength(8);
    expect(score.fifths).toBe(0);
    expect(score.signature).toBe("4/4");
  });
});
```

- [ ] **Step 2: Lancer les tests, vérifier qu'ils échouent**

Run: `npx vitest run src/lib/piece-vers-musicxml.test.ts`
Expected: FAIL — `Failed to resolve import "./piece-vers-musicxml"`.

- [ ] **Step 3: Écrire le module**

Créer `src/lib/piece-vers-musicxml.ts` :

```ts
/**
 * lib/piece-vers-musicxml.ts
 * Harmonia — Sérialise une `Piece` en MusicXML : à une PARTIE, DEUX PORTÉES
 * (convention MusicXML : <staff>1 = clé de Sol, <staff>2 = clé de Fa, séparées dans
 * chaque mesure par un <backup>). De ce MusicXML découlent la gravure (Verovio),
 * l'analyse et l'export vers MuseScore.
 */

import {
  DIVISIONS,
  dureeEnDivisions,
  type Piece,
  type Mesure,
  type Voix,
  type Note,
  type Silence,
  type Hauteur,
  type BaseDuree,
} from "./piece-model";

const TYPE_XML: Record<BaseDuree, string> = {
  ronde: "whole", blanche: "half", noire: "quarter", croche: "eighth", double: "16th",
};

function hauteurXML(h: Hauteur): string {
  const alter = h.alteration !== 0 ? `<alter>${h.alteration}</alter>` : "";
  return `<pitch><step>${h.lettre}</step>${alter}<octave>${h.octave}</octave></pitch>`;
}

/**
 * Un `<note>` par hauteur ; les hauteurs 2..n portent `<chord/>`. `tenueEntrante`
 * ferme une liaison venue de la note précédente ; `note.liee` en ouvre une vers la
 * suivante. La liaison est à la fois SONORE (`<tie>`) et GRAPHIQUE (`<tied>`).
 */
function noteXML(note: Note, voix: string, portee: number, tenueEntrante: boolean): string {
  const duree = dureeEnDivisions(note.duree);
  const type = TYPE_XML[note.duree.base];
  const points = "<dot/>".repeat(note.duree.points);
  const modif = note.duree.nolet
    ? `<time-modification><actual-notes>${note.duree.nolet.reelles}</actual-notes>` +
      `<normal-notes>${note.duree.nolet.normales}</normal-notes></time-modification>`
    : "";

  const debut = note.liee;
  const ties =
    (tenueEntrante ? `<tie type="stop"/>` : "") + (debut ? `<tie type="start"/>` : "");
  const tied =
    (tenueEntrante ? `<tied type="stop"/>` : "") + (debut ? `<tied type="start"/>` : "");
  const notations = tied ? `<notations>${tied}</notations>` : "";

  return note.hauteurs
    .map((h, i) => {
      const chord = i > 0 ? "<chord/>" : "";
      return (
        `<note>${chord}${hauteurXML(h)}<duration>${duree}</duration>${ties}` +
        `<voice>${voix}</voice><type>${type}</type>${points}${modif}` +
        `<staff>${portee}</staff>${notations}</note>`
      );
    })
    .join("");
}

function silenceXML(s: Silence, voix: string, portee: number, ticksMesure: number): string {
  if (s.mesureEntiere) {
    // Silence de mesure : `measure="yes"`, durée = toute la mesure, sans <type>.
    return `<note><rest measure="yes"/><duration>${ticksMesure}</duration>` +
      `<voice>${voix}</voice><staff>${portee}</staff></note>`;
  }
  const duree = dureeEnDivisions(s.duree);
  const points = "<dot/>".repeat(s.duree.points);
  return `<note><rest/><duration>${duree}</duration><voice>${voix}</voice>` +
    `<type>${TYPE_XML[s.duree.base]}</type>${points}<staff>${portee}</staff></note>`;
}

function voixXML(voix: Voix, numeroVoix: string, portee: number, ticksMesure: number): string {
  let out = "";
  let tenueEntrante = false;
  for (const ev of voix) {
    if (ev.type === "silence") {
      out += silenceXML(ev, numeroVoix, portee, ticksMesure);
      tenueEntrante = false;
    } else {
      out += noteXML(ev, numeroVoix, portee, tenueEntrante);
      tenueEntrante = !!ev.liee;
    }
  }
  return out;
}

function attributsXML(piece: Piece): string {
  return (
    `<attributes><divisions>${DIVISIONS}</divisions>` +
    `<key><fifths>${piece.armure}</fifths></key>` +
    `<time><beats>${piece.chiffrage.temps}</beats><beat-type>${piece.chiffrage.unite}</beat-type></time>` +
    `<staves>2</staves>` +
    `<clef number="1"><sign>G</sign><line>2</line></clef>` +
    `<clef number="2"><sign>F</sign><line>4</line></clef></attributes>`
  );
}

function mesureXML(mesure: Mesure, index: number, piece: Piece, ticksMesure: number): string {
  const attrs = index === 0 ? attributsXML(piece) : "";
  const haut = voixXML(mesure.portees[0], "1", 1, ticksMesure);
  const bas = voixXML(mesure.portees[1], "2", 2, ticksMesure);
  // Le <backup> ramène le curseur au début de la mesure pour écrire la 2e portée.
  return (
    `<measure number="${index + 1}">${attrs}${haut}` +
    `<backup><duration>${ticksMesure}</duration></backup>${bas}</measure>`
  );
}

export function pieceVersMusicXML(piece: Piece): string {
  // Durée d'une mesure en ticks : temps × (une noire) × 4 / unité. En 4/4 : 4×48 = 192.
  const ticksMesure = (piece.chiffrage.temps * DIVISIONS * 4) / piece.chiffrage.unite;
  const mesures = piece.mesures
    .map((m, i) => mesureXML(m, i, piece, ticksMesure))
    .join("");

  return (
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<score-partwise version="4.0">` +
    `<part-list><score-part id="P1"><part-name>Harmonia</part-name></score-part></part-list>` +
    `<part id="P1">${mesures}</part>` +
    `</score-partwise>`
  );
}
```

- [ ] **Step 4: Lancer les tests, vérifier qu'ils passent**

Run: `npx vitest run src/lib/piece-vers-musicxml.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/lib/piece-vers-musicxml.ts src/lib/piece-vers-musicxml.test.ts
git commit -m "feat(compo): export MusicXML d'une piece (deux portees, rythmes riches)"
```

---

## Task 3 : Vérification d'ensemble

- [ ] **Step 1:** `npx vitest run` — tout vert (les 285 + les nouveaux).
- [ ] **Step 2:** `NODE_OPTIONS="--max-old-space-size=8192" npm run build` — succès. **Jamais `npx tsc --noEmit`.**
- [ ] **Step 3: Contrôle manuel de la gravure Verovio.** L'aller-retour prouve que notre parseur relit le MusicXML, pas que Verovio le grave joliment. Écrire une petite pièce (quelques mesures : des noires, un triolet, un accord, une note liée sur les deux portées), la sérialiser, et coller le MusicXML dans le Studio (ou un fichier `.musicxml` importé) → vérifier que Verovio la grave correctement (deux portées, clés, rythmes, liaison, triolet). Rapporter ce qu'on voit ; tout défaut de gravure (ordre des éléments MusicXML, `<backup>`) se corrige ici.

---

## Auto-relecture

**Couverture de la spec :**
- Modèle deux portées, une voix, richesse rythmique complète → Task 1 (types). ✅
- Durées en divisions, refus de l'impossible → Task 1 (`dureeEnDivisions`). ✅
- Pièce vierge 8 mesures / Do majeur / 4/4 / silences de mesure → Task 1 (`pieceVierge`). ✅
- Export MusicXML deux portées via `<backup>` + `<staff>` → Task 2. ✅
- Points, liaisons, triolets (time-modification), accords, altérations → Task 2, testés. ✅
- Vérification par aller-retour avec le parseur → Task 2 (tous les tests). ✅
- Contrôle manuel Verovio (la gravure réelle) → Task 3. ✅

**Cohérence des types :** `Piece`/`Mesure`/`Voix`/`Note`/`Silence`/`Hauteur`/`Duree` (Task 1) sont consommés par `pieceVersMusicXML` (Task 2) ; `dureeEnDivisions` et `DIVISIONS` (Task 1) sont le seul point de calcul des durées, réutilisé par le sérialiseur.

**Le point de vigilance, redit :** l'aller-retour valide la RELECTURE, pas la GRAVURE. Le contrôle manuel Verovio (Task 3) est la seule preuve que le MusicXML produit se grave — c'est là que se règlent d'éventuels problèmes d'ordre d'éléments ou de `<backup>`.

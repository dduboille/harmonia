# Contrôle de la conduite des voix (2e) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Détecter en direct, dans l'atelier `/composer`, les fautes de conduite des voix (quintes/octaves parallèles et directes, croisements, écart, tessiture), les lister dans un panneau et surligner les notes fautives sur la partition.

**Architecture:** Un module pur `conduite-voix.ts` construit les verticalités du modèle SATB (rythmes indépendants) et applique les règles ; `StudioScore` gagne un surlignage multi-notes rouge/orange ; `AtelierComposition` affiche le panneau, surligne et permet de cliquer une faute pour sélectionner la note.

**Tech Stack:** TypeScript strict, React 19, Verovio 6.2.0, vitest.

---

## Notes transverses (à lire avant de commencer)

- **Ne JAMAIS `npx tsc --noEmit`** (OOM). Vérif types via `NODE_OPTIONS="--max-old-space-size=8192" npm run build`.
- Tests : `npx vitest run <fichier>`.
- Le modèle : `Piece.mesures[i].voix[nom]` = `Evenement[]` (`Note | Silence`), une hauteur par note.
- `Curseur = { mesure, voix, note: number | "fin" }` (déjà en place). Les positions de fautes sont
  des `Curseur` avec `note` = index de note (jamais `"fin"`), directement utilisables par
  `onsetMsMidiDeSelection` et `setCurseur`.
- Helpers déjà disponibles : `midiDeHauteur` (`piece-model.ts`), `capaciteMesure` (`composition-edition.ts`),
  `dureeEnDivisions`, `ORDRE_VOIX` (`piece-model.ts`), `onsetMsMidiDeSelection` (`composition-edition.ts`).

---

## Task 1 : `conduite-voix.ts` — les verticalités

**Files:**
- Create: `src/lib/conduite-voix.ts`
- Test: `src/lib/conduite-voix.test.ts`

- [ ] **Step 1 : Écrire le test des verticalités**

Créer `src/lib/conduite-voix.test.ts` :

```ts
import { describe, it, expect } from "vitest";
import { verticalites } from "./conduite-voix";
import type { Piece, Note, NomVoix, Voix } from "./piece-model";

function note(lettre: Note["hauteurs"][0]["lettre"], octave: number, base: Note["duree"]["base"]): Note {
  return { type: "note", hauteurs: [{ lettre, alteration: 0, octave }], duree: { base, points: 0 } };
}
/** Pièce d'UNE mesure 4/4 avec les voix fournies. */
function piece1(voix: Partial<Record<NomVoix, Voix>>): Piece {
  return {
    armure: 0, chiffrage: { temps: 4, unite: 4 },
    mesures: [{ voix: { soprano: voix.soprano ?? [], alto: voix.alto ?? [], tenor: voix.tenor ?? [], basse: voix.basse ?? [] } }],
  };
}

describe("verticalites — reconstruire les accords malgre des rythmes independants", () => {
  it("une voix tenue pendant que l'autre bouge : 2 verticalites, la tenue en mouvement oblique", () => {
    // Soprano : blanche Do5 (tenue 2 temps). Basse : Do3 noire puis Ré3 noire.
    const v = verticalites(piece1({
      soprano: [note("C", 5, "blanche")],
      basse: [note("C", 3, "noire"), note("D", 3, "noire")],
    }));
    expect(v).toHaveLength(2); // deux attaques : t=0 (S+B) et t=1 temps (B)
    // À la 2e verticalité, le soprano sonne toujours Do5 mais SANS attaque (oblique).
    expect(v[1].sons.soprano!.midi).toBe(72);
    expect(v[1].sons.soprano!.attaque).toBe(false);
    expect(v[1].sons.basse!.attaque).toBe(true);
  });
  it("chaque son porte la position (mesure, voix, note) de sa note", () => {
    const v = verticalites(piece1({ basse: [note("C", 3, "noire"), note("D", 3, "noire")] }));
    expect(v[1].sons.basse!.position).toEqual({ mesure: 0, voix: "basse", note: 1 });
  });
});
```

- [ ] **Step 2 : Lancer — échoue** — Run: `npx vitest run src/lib/conduite-voix.test.ts` → FAIL (module absent).

- [ ] **Step 3 : Implémenter le module + `verticalites`**

Créer `src/lib/conduite-voix.ts` :

```ts
/**
 * lib/conduite-voix.ts
 * Harmonia — Contrôle de la CONDUITE DES VOIX d'un choral SATB (pur, testé).
 *
 * Les voix ont des rythmes indépendants : on ne peut pas comparer « temps par temps ».
 * On reconstruit donc les VERTICALITÉS — ce qui sonne dans chaque voix à chaque instant
 * d'attaque — puis on applique les règles classiques (parallèles, directes, croisements,
 * écart, tessiture). Chaque faute pointe la ou les notes en cause, pour le surlignage.
 */

import { capaciteMesure, type Curseur } from "./composition-edition";
import {
  dureeEnDivisions, midiDeHauteur, ORDRE_VOIX,
  type Piece, type NomVoix,
} from "./piece-model";

/** Une note qui sonne dans une voix à un instant, avec sa position pour le pointage. */
export interface SonVoix {
  midi: number;
  position: Curseur;   // { mesure, voix, note }
  attaque: boolean;    // la note commence-t-elle exactement à cet instant ?
}

/** Une verticalité : ce qui sonne dans chaque voix à un instant d'attaque. */
export interface Verticalite {
  onset: number;                            // ticks depuis le début de la pièce
  mesure: number;                           // mesure de cet instant (0-based)
  sons: Partial<Record<NomVoix, SonVoix>>;  // voix absente = silence / pas encore entrée
}

/** Reconstruit les verticalités aux instants d'attaque de note (toutes voix confondues). */
export function verticalites(piece: Piece): Verticalite[] {
  const capacite = capaciteMesure(piece.chiffrage);
  interface NoteAbs { onset: number; fin: number; midi: number; position: Curseur; }
  const parVoix = new Map<NomVoix, NoteAbs[]>();
  const attaques = new Set<number>();

  for (const voix of ORDRE_VOIX) {
    const notes: NoteAbs[] = [];
    piece.mesures.forEach((m, mesure) => {
      let t = mesure * capacite;
      m.voix[voix].forEach((ev, note) => {
        const d = dureeEnDivisions(ev.duree);
        if (ev.type === "note") {
          notes.push({ onset: t, fin: t + d, midi: midiDeHauteur(ev.hauteurs[0]), position: { mesure, voix, note } });
          attaques.add(t);
        }
        t += d;
      });
    });
    parVoix.set(voix, notes);
  }

  return [...attaques].sort((a, b) => a - b).map((onset) => {
    const sons: Partial<Record<NomVoix, SonVoix>> = {};
    for (const voix of ORDRE_VOIX) {
      const n = parVoix.get(voix)!.find((x) => x.onset <= onset && onset < x.fin);
      if (n) sons[voix] = { midi: n.midi, position: n.position, attaque: n.onset === onset };
    }
    return { onset, mesure: Math.floor(onset / capacite), sons };
  });
}
```

- [ ] **Step 4 : Lancer — passe** — Run: `npx vitest run src/lib/conduite-voix.test.ts` → PASS.

- [ ] **Step 5 : Commit**

```bash
git add src/lib/conduite-voix.ts src/lib/conduite-voix.test.ts
git commit -m "feat(compo): conduite-voix — verticalites du modele SATB"
```

---

## Task 2 : `detecterFautes` — fautes verticales (croisement, écart, tessiture)

**Files:**
- Modify: `src/lib/conduite-voix.ts`
- Test: `src/lib/conduite-voix.test.ts`

- [ ] **Step 1 : Écrire les tests**

Ajouter dans `conduite-voix.test.ts` (compléter l'import : `import { verticalites, detecterFautes } from "./conduite-voix";`) :

```ts
describe("detecterFautes — fautes verticales", () => {
  it("croisement : alto au-dessus du soprano", () => {
    const f = detecterFautes(piece1({ soprano: [note("C", 4, "ronde")], alto: [note("E", 4, "ronde")] }));
    expect(f.some((x) => x.type === "croisement")).toBe(true);
    const c = f.find((x) => x.type === "croisement")!;
    expect(c.severite).toBe("faute");
    expect(c.positions).toHaveLength(2);
  });
  it("ecart : soprano et alto a plus d'une octave", () => {
    // S = Do6 (84 mais hors tessiture aussi), A = Do4 (60) : écart = 24 > 12.
    const f = detecterFautes(piece1({ soprano: [note("C", 6, "ronde")], alto: [note("C", 4, "ronde")] }));
    expect(f.some((x) => x.type === "ecart")).toBe(true);
    expect(f.find((x) => x.type === "ecart")!.severite).toBe("avertissement");
  });
  it("ecart : exactement une octave n'est PAS signale", () => {
    const f = detecterFautes(piece1({ soprano: [note("C", 5, "ronde")], alto: [note("C", 4, "ronde")] }));
    expect(f.some((x) => x.type === "ecart")).toBe(false);
  });
  it("tessiture : une basse a Do5 est hors ambitus", () => {
    const f = detecterFautes(piece1({ basse: [note("C", 5, "ronde")] }));
    const t = f.find((x) => x.type === "tessiture")!;
    expect(t.severite).toBe("avertissement");
    expect(t.positions).toEqual([{ mesure: 0, voix: "basse", note: 0 }]);
  });
  it("un accord SATB bien place ne produit aucune faute verticale", () => {
    const f = detecterFautes(piece1({
      soprano: [note("G", 4, "ronde")], alto: [note("E", 4, "ronde")],
      tenor: [note("C", 4, "ronde")], basse: [note("C", 3, "ronde")],
    }));
    expect(f.filter((x) => ["croisement", "ecart", "tessiture"].includes(x.type))).toEqual([]);
  });
});
```

- [ ] **Step 2 : Lancer — échoue** — Run: `npx vitest run src/lib/conduite-voix.test.ts` → FAIL (`detecterFautes` absent).

- [ ] **Step 3 : Implémenter la structure `Faute` + les règles verticales**

Ajouter dans `conduite-voix.ts` :

```ts
export type TypeFaute =
  | "quintes-paralleles" | "octaves-paralleles"
  | "quinte-directe" | "octave-directe"
  | "croisement" | "ecart" | "tessiture";

export interface Faute {
  type: TypeFaute;
  severite: "faute" | "avertissement";
  message: string;
  mesure: number;       // 0-based ; l'affichage ajoute 1
  positions: Curseur[]; // 1 à 2 notes fautives
}

/** Ambitus (midi) et libellés de chaque voix. */
const AMBITUS: Record<NomVoix, { min: number; max: number }> = {
  soprano: { min: 60, max: 79 }, alto: { min: 55, max: 72 },
  tenor: { min: 48, max: 67 }, basse: { min: 40, max: 60 },
};
const NOM: Record<NomVoix, string> = { soprano: "Soprano", alto: "Alto", tenor: "Ténor", basse: "Basse" };

/** Paires voisines (haut, bas) pour croisement et écart. */
const VOISINES: [NomVoix, NomVoix][] = [["soprano", "alto"], ["alto", "tenor"], ["tenor", "basse"]];
const MSG_CROISEMENT: Record<string, string> = {
  "soprano-alto": "Soprano sous l'alto",
  "alto-tenor": "Alto sous le ténor",
  "tenor-basse": "Ténor sous la basse",
};

export function detecterFautes(piece: Piece): Faute[] {
  const fautes: Faute[] = [];
  const verts = verticalites(piece);

  // ── Tessiture : par note (indépendant des verticalités, pas de doublon) ──
  for (const voix of ORDRE_VOIX) {
    piece.mesures.forEach((m, mesure) => {
      m.voix[voix].forEach((ev, note) => {
        if (ev.type !== "note") return;
        const midi = midiDeHauteur(ev.hauteurs[0]);
        if (midi < AMBITUS[voix].min || midi > AMBITUS[voix].max) {
          fautes.push({ type: "tessiture", severite: "avertissement", message: `${NOM[voix]} hors tessiture`, mesure, positions: [{ mesure, voix, note }] });
        }
      });
    });
  }

  // ── Croisement et écart : par verticalité (au moins une des deux voix attaque) ──
  for (const v of verts) {
    for (const [haut, bas] of VOISINES) {
      const a = v.sons[haut], b = v.sons[bas];
      if (!a || !b) continue;
      if (!a.attaque && !b.attaque) continue; // ne signaler qu'une fois, à l'attaque
      if (a.midi < b.midi) {
        fautes.push({ type: "croisement", severite: "faute", message: MSG_CROISEMENT[`${haut}-${bas}`], mesure: v.mesure, positions: [a.position, b.position] });
      }
      // Écart : uniquement S–A et A–T (pas T–B), > une octave.
      if ((haut === "soprano" || haut === "alto") && a.midi - b.midi > 12) {
        fautes.push({ type: "ecart", severite: "avertissement", message: `${NOM[haut]}–${NOM[bas]} : écart > octave`, mesure: v.mesure, positions: [a.position, b.position] });
      }
    }
  }

  return fautes;
}
```

- [ ] **Step 4 : Lancer — passe** — Run: `npx vitest run src/lib/conduite-voix.test.ts` → PASS.

- [ ] **Step 5 : Commit**

```bash
git add src/lib/conduite-voix.ts src/lib/conduite-voix.test.ts
git commit -m "feat(compo): conduite-voix — croisement, ecart, tessiture"
```

---

## Task 3 : `detecterFautes` — fautes horizontales (parallèles + directes)

**Files:**
- Modify: `src/lib/conduite-voix.ts`
- Test: `src/lib/conduite-voix.test.ts`

- [ ] **Step 1 : Écrire les tests**

Ajouter dans `conduite-voix.test.ts` un helper deux-mesures et les tests :

```ts
/** Pièce de DEUX mesures 4/4 (rondes) : chaque voix = [note m1, note m2]. */
function piece2(voix: Partial<Record<NomVoix, [Note, Note]>>): Piece {
  const m = (i: 0 | 1): Record<NomVoix, Voix> => ({
    soprano: voix.soprano ? [voix.soprano[i]] : [],
    alto: voix.alto ? [voix.alto[i]] : [],
    tenor: voix.tenor ? [voix.tenor[i]] : [],
    basse: voix.basse ? [voix.basse[i]] : [],
  });
  return { armure: 0, chiffrage: { temps: 4, unite: 4 }, mesures: [{ voix: m(0) }, { voix: m(1) }] };
}

describe("detecterFautes — parallèles et directes", () => {
  it("quintes paralleles S-B : Sol4/Do3 -> La4/Re3", () => {
    // G4/C3 = 19 demi-tons ≡ 7 (quinte) ; A4/D3 = 19 ≡ 7 ; les deux montent → quintes parallèles.
    const f = detecterFautes(piece2({
      soprano: [note("G", 4, "ronde"), note("A", 4, "ronde")],
      basse:   [note("C", 3, "ronde"), note("D", 3, "ronde")],
    }));
    expect(f.some((x) => x.type === "quintes-paralleles")).toBe(true);
    expect(f.find((x) => x.type === "quintes-paralleles")!.severite).toBe("faute");
  });
  it("mouvement contraire vers une quinte n'est PAS parallele", () => {
    // S descend Si4->La4, B monte Do3->Ré3 : arrivée La4/Ré3 (69-50=19 ≡ 7, quinte) mais mouvement
    // contraire → pas de parallélisme.
    const f = detecterFautes(piece2({
      soprano: [note("B", 4, "ronde"), note("A", 4, "ronde")],
      basse:   [note("C", 3, "ronde"), note("D", 3, "ronde")],
    }));
    expect(f.some((x) => x.type === "quintes-paralleles")).toBe(false);
  });
  it("octaves paralleles : Do5/Do4 -> Re5/Re4", () => {
    const f = detecterFautes(piece2({
      soprano: [note("C", 5, "ronde"), note("D", 5, "ronde")],
      alto:    [note("C", 4, "ronde"), note("D", 4, "ronde")],
    }));
    expect(f.some((x) => x.type === "octaves-paralleles")).toBe(true);
  });
  it("quinte directe S-B : soprano arrive sur la quinte par saut, meme sens que la basse", () => {
    // B : Do3 -> Fa3 (monte). S : Do5 -> Do6 (saut d'octave, monte). Arrivée Do6/Fa3 : intervalle
    // réduit |84-53|%12 = 31%12 = 7 (quinte). Avant : |72-48|%12 = 0 (pas une quinte) -> directe.
    const f = detecterFautes(piece2({
      soprano: [note("C", 5, "ronde"), note("C", 6, "ronde")],
      basse:   [note("C", 3, "ronde"), note("F", 3, "ronde")],
    }));
    expect(f.some((x) => x.type === "quinte-directe")).toBe(true);
    expect(f.find((x) => x.type === "quinte-directe")!.severite).toBe("avertissement");
  });
  it("quinte atteinte par degre conjoint au soprano n'est PAS une directe", () => {
    // Arrivée SUR une quinte, même sens, mais le soprano n'avance que d'un ton (pas un saut).
    // S : Do5(72) -> Ré5(74), |Δ| = 2 ≤ 2. B : Mi3(52) -> Sol3(55) monte (saut). Arrivée Ré5/Sol3 :
    // 74-55 = 19 ≡ 7 (quinte) ; avant Do5/Mi3 = 72-52 = 20 ≡ 8 (pas une quinte). Même sens (montant).
    const f = detecterFautes(piece2({
      soprano: [note("C", 5, "ronde"), note("D", 5, "ronde")],
      basse:   [note("E", 3, "ronde"), note("G", 3, "ronde")],
    }));
    // |Δsoprano| = 2, non > 2 : pas de directe.
    expect(f.some((x) => x.type === "quinte-directe")).toBe(false);
  });
  it("directe seulement S-B : une quinte directe entre A et T n'est pas signalee", () => {
    // A : Do4->Do5 (saut), T : Do4->Fa4. Arrivée Do5/Fa4 = quinte, même sens, saut a l'alto — mais
    // la regle des directes ne vaut QUE pour soprano-basse.
    const f = detecterFautes(piece2({
      alto:  [note("C", 4, "ronde"), note("C", 5, "ronde")],
      tenor: [note("C", 4, "ronde"), note("F", 4, "ronde")],
    }));
    expect(f.some((x) => x.type === "quinte-directe" || x.type === "octave-directe")).toBe(false);
  });
});
```

- [ ] **Step 2 : Lancer — échoue** — Run: `npx vitest run src/lib/conduite-voix.test.ts` → FAIL (règles horizontales absentes).

- [ ] **Step 3 : Implémenter les règles horizontales**

Dans `conduite-voix.ts`, ajouter la constante des paires et compléter `detecterFautes` AVANT le
`return fautes;` :

```ts
const LABEL: Record<NomVoix, string> = { soprano: "S", alto: "A", tenor: "T", basse: "B" };
const PAIRES: [NomVoix, NomVoix][] = [
  ["soprano", "alto"], ["soprano", "tenor"], ["soprano", "basse"],
  ["alto", "tenor"], ["alto", "basse"], ["tenor", "basse"],
];
```
(Placer ces constantes en haut du fichier, près de `AMBITUS`.)

Puis, dans `detecterFautes`, juste avant `return fautes;` :

```ts
  // ── Parallèles (toutes paires) et directes (S–B) : entre verticalités consécutives ──
  for (let k = 1; k < verts.length; k++) {
    const prev = verts[k - 1], cur = verts[k];

    for (const [v1, v2] of PAIRES) {
      const p1 = prev.sons[v1], p2 = prev.sons[v2], c1 = cur.sons[v1], c2 = cur.sons[v2];
      if (!p1 || !p2 || !c1 || !c2) continue;
      const d1 = c1.midi - p1.midi, d2 = c2.midi - p2.midi;
      const memeSens = d1 !== 0 && d2 !== 0 && Math.sign(d1) === Math.sign(d2);
      if (!memeSens) continue;
      const avant = Math.abs(p1.midi - p2.midi) % 12;
      const apres = Math.abs(c1.midi - c2.midi) % 12;
      if (avant === 7 && apres === 7) {
        fautes.push({ type: "quintes-paralleles", severite: "faute", message: `Quintes ‖ ${LABEL[v1]}–${LABEL[v2]}`, mesure: cur.mesure, positions: [c1.position, c2.position] });
      }
      if (avant === 0 && apres === 0) {
        fautes.push({ type: "octaves-paralleles", severite: "faute", message: `Octaves ‖ ${LABEL[v1]}–${LABEL[v2]}`, mesure: cur.mesure, positions: [c1.position, c2.position] });
      }
    }

    // Directes : soprano–basse uniquement, mouvement direct, arrivée sur 5te/8ve, saut au soprano,
    // et l'intervalle d'arrivée n'était PAS déjà une 5te/8ve (sinon c'est un parallèle).
    const ps = prev.sons.soprano, pb = prev.sons.basse, cs = cur.sons.soprano, cb = cur.sons.basse;
    if (ps && pb && cs && cb) {
      const ds = cs.midi - ps.midi, db = cb.midi - pb.midi;
      const memeSens = ds !== 0 && db !== 0 && Math.sign(ds) === Math.sign(db);
      if (memeSens && Math.abs(ds) > 2) {
        const avant = Math.abs(ps.midi - pb.midi) % 12;
        const apres = Math.abs(cs.midi - cb.midi) % 12;
        if (apres === 7 && avant !== 7) {
          fautes.push({ type: "quinte-directe", severite: "avertissement", message: "Quinte directe S–B", mesure: cur.mesure, positions: [cs.position, cb.position] });
        }
        if (apres === 0 && avant !== 0) {
          fautes.push({ type: "octave-directe", severite: "avertissement", message: "Octave directe S–B", mesure: cur.mesure, positions: [cs.position, cb.position] });
        }
      }
    }
  }
```

- [ ] **Step 4 : Lancer — passe** — Run: `npx vitest run src/lib/conduite-voix.test.ts` → PASS.

- [ ] **Step 5 : Vérifier le build (types du module complet)**

Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build`
Expected: succès.

- [ ] **Step 6 : Commit**

```bash
git add src/lib/conduite-voix.ts src/lib/conduite-voix.test.ts
git commit -m "feat(compo): conduite-voix — quintes/octaves paralleles et directes"
```

---

## Task 4 : `StudioScore` — surlignage multi-notes des fautes

**Files:**
- Modify: `src/components/StudioScore.tsx`

- [ ] **Step 1 : Étendre `StudioScoreRef`**

Dans `src/components/StudioScore.tsx`, ajouter à l'interface `StudioScoreRef` :

```ts
  /** Surligne un ensemble de notes fautives (rouge = faute, orange = avertissement) ; [] efface. */
  surlignerFautes(fautes: Array<{ onsetMs: number; midi: number; severite: "faute" | "avertissement" }>): void;
```

- [ ] **Step 2 : Implémenter la méthode**

Ajouter une ref pour les éléments de fautes (près de `notesSelection`) :

```ts
  const notesFautes = useRef<Element[]>([]);
```

Dans le `useImperativeHandle`, ajouter :

```ts
    surlignerFautes(fautes) {
      const tk = tkRef.current;
      const hote = conteneur.current;
      if (!tk || !hote) return;
      for (const el of notesFautes.current) el.classList.remove("harmonia-faute", "harmonia-avert");
      notesFautes.current = [];
      for (const f of fautes) {
        let ids: string[] = [];
        try { ids = tk.getElementsAtTime(f.onsetMs + 1).notes ?? []; } catch { continue; }
        for (const id of ids) {
          let midi: number | undefined;
          try { midi = tk.getMIDIValuesForElement(id).pitch; } catch { midi = undefined; }
          if (midi !== f.midi) continue;
          const el = hote.querySelector(`[id="${id}"]`);
          if (el) {
            el.classList.add(f.severite === "faute" ? "harmonia-faute" : "harmonia-avert");
            notesFautes.current.push(el);
          }
        }
      }
    },
```

- [ ] **Step 3 : Ajouter les styles**

Dans le bloc `<style>` du rendu, ajouter deux règles (garder les existantes `.harmonia-joue` et `.harmonia-selection`) :

```
        .harmonia-faute, .harmonia-faute * { fill: #E53E3E !important; }
        .harmonia-avert, .harmonia-avert * { fill: #DD6B20 !important; }
```

- [ ] **Step 4 : Vérifier le build** — Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build` → succès (le Studio ne l'utilise pas ; méthode additive).

- [ ] **Step 5 : Commit**

```bash
git add src/components/StudioScore.tsx
git commit -m "feat(compo): StudioScore surlignage multi-notes des fautes"
```

---

## Task 5 : Atelier — panneau des fautes + surlignage + clic

**Files:**
- Modify: `src/components/AtelierComposition.tsx`

- [ ] **Step 1 : Importer et calculer les fautes**

Ajouter l'import :

```ts
import { detecterFautes, type Faute } from "@/lib/conduite-voix";
```

Après le `useMemo` de `musicxml`, ajouter :

```ts
  const fautes = useMemo(() => detecterFautes(piece), [piece]);
```

- [ ] **Step 2 : Surligner les fautes sur la partition**

Ajouter un effet (à côté de celui de la sélection) :

```ts
  useEffect(() => {
    const cibles = fautes.flatMap((f) =>
      f.positions
        .map((pos) => {
          const s = onsetMsMidiDeSelection(piece, pos);
          return s ? { ...s, severite: f.severite } : null;
        })
        .filter((x): x is { onsetMs: number; midi: number; severite: "faute" | "avertissement" } => x !== null),
    );
    scoreRef.current?.surlignerFautes(cibles);
    // Re-surligner après chaque regravure. musicxml change avec piece.
  }, [musicxml, fautes, piece]);
```

- [ ] **Step 3 : Le panneau des fautes**

Ajouter, dans le JSX (sous la partition ou dans la colonne, en cohérence avec la mise en page ; à
côté du panneau existant s'il y en a un), un panneau listant les fautes. `carte` et les couleurs sont
déjà définis dans le composant ; réutiliser le style `carte`. Cliquer une ligne sélectionne la note :

```tsx
        {/* ── Conduite des voix ─────────────────────────────────────── */}
        <div style={{ ...carte }}>
          <h2 style={{ fontSize: 15, fontWeight: 600, color: "#1a1a1a", margin: "0 0 10px", fontFamily: "Georgia, serif" }}>
            Conduite des voix
          </h2>
          {fautes.length === 0 ? (
            <p style={{ fontSize: 13, color: "#0F6E56", margin: 0, fontFamily: "system-ui, sans-serif" }}>
              Aucune faute détectée.
            </p>
          ) : (
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              {fautes.map((f, i) => (
                <li key={i}>
                  <button
                    onClick={() => setCurseur(f.positions[0])}
                    style={{
                      display: "flex", alignItems: "center", gap: 8, width: "100%", textAlign: "left",
                      padding: "6px 10px", borderRadius: 6, cursor: "pointer",
                      border: "0.5px solid #e0dbd3", background: "#fff",
                      fontFamily: "system-ui, sans-serif", fontSize: 13,
                    }}
                  >
                    <span style={{ width: 8, height: 8, borderRadius: "50%", flexShrink: 0, background: f.severite === "faute" ? "#E53E3E" : "#DD6B20" }} />
                    <span style={{ color: "#1a1a1a" }}>{f.message}</span>
                    <span style={{ color: "#aaa" }}>· mesure {f.mesure + 1}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
```

- [ ] **Step 4 : Vérifier le build** — Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build` → succès.

- [ ] **Step 5 : Lancer toute la suite de tests** — Run: `npx vitest run` → tout vert.

- [ ] **Step 6 : Commit**

```bash
git add src/components/AtelierComposition.tsx
git commit -m "feat(compo): atelier — panneau conduite des voix + surlignage des fautes"
```

---

## Task 6 : Vérification finale

- [ ] **Step 1 : Build + tests complets**

Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build && npx vitest run`
Expected: build OK, tous les tests verts.

- [ ] **Step 2 : Contrôle manuel (Dany, en production, Pro)**

Sur `/composer` : écrire deux accords produisant des quintes parallèles S–B → elles apparaissent en
rouge dans le panneau et sur la partition ; cliquer la faute sélectionne la note ; corriger fait
disparaître la faute en direct. Vérifier qu'une voix tenue pendant qu'une autre bouge ne crée pas de
fausse quinte parallèle ; qu'une note hors tessiture s'affiche en orange ; qu'un choral correct
n'affiche « Aucune faute détectée ».

# Édition sur place dans l'atelier (2d) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Permettre, dans l'atelier `/composer`, de revenir sur une note déjà posée (flèches ←/→ ou clic), de la transposer (↑/↓, Maj = octave) et de la corriger en place (remplacer hauteur/durée, supprimer), sans changer le mode d'ajout « au bout ».

**Architecture:** Toute la logique d'édition est PURE dans `composition-edition.ts` (fonctions + tests vitest), le `Curseur` gagne un champ `note: number | "fin"`. `AtelierComposition.tsx` câble clavier/clic/palette et le surlignage. `StudioScore.tsx` gagne un surlignage de sélection par identité et un rappel de clic, appariés au modèle via les valeurs MIDI de Verovio (tempo par défaut déterministe, les pièces de l'atelier n'ont pas de tempo).

**Tech Stack:** TypeScript strict, React 19, Verovio 6.2.0 (WASM), vitest.

---

## Notes transverses (à lire avant de commencer)

- **Ne JAMAIS lancer `npx tsc --noEmit`** (sature la mémoire). Vérif types via le build :
  `NODE_OPTIONS="--max-old-space-size=8192" npm run build`.
- Tests : `npx vitest run <fichier>` pour un fichier, `npx vitest run` pour tout.
- Le modèle d'édition d'une voix est `Voix = Evenement[]` où `Evenement = Note | Silence`. En 2d une
  voix ne porte qu'une hauteur par note (pas d'accord empilé) : on opère sur `hauteurs[0]`.
- `Curseur.note` est un index dans le tableau BRUT de la voix (`piece.mesures[m].voix[v]`), qui peut
  mêler notes et silences. `positions` n'énumère que les entrées `note`.
- Tempo : les pièces de l'atelier n'émettent aucun tempo → Verovio grave à 120 bpm par défaut. Une
  noire = 500 ms, `DIVISIONS = 48` par noire ⇒ `MS_PAR_TICK = 60000 / (120 × 48)`. C'est la seule
  hypothèse de l'appariement clic/surlignage ; elle est déterministe ici.

---

## Task 1 : `Curseur.note` + `midiDeHauteur`, adaptation du socle

**Files:**
- Modify: `src/lib/piece-model.ts` (ajout `midiDeHauteur`)
- Modify: `src/lib/composition-edition.ts` (champ `note` sur `Curseur`, retours mis à jour)
- Modify: `src/components/AtelierComposition.tsx` (constructions de `Curseur`)
- Test: `src/lib/piece-model.test.ts` (si absent, le créer), `src/lib/composition-edition.test.ts`

- [ ] **Step 1 : Écrire le test de `midiDeHauteur`**

Ajouter dans `src/lib/piece-model.test.ts` (créer le fichier avec l'entête d'import s'il n'existe pas) :

```ts
import { describe, it, expect } from "vitest";
import { midiDeHauteur } from "./piece-model";

describe("midiDeHauteur", () => {
  it("convertit lettre + altération + octave en MIDI", () => {
    expect(midiDeHauteur({ lettre: "C", alteration: 0, octave: 4 })).toBe(60); // Do central
    expect(midiDeHauteur({ lettre: "A", alteration: 0, octave: 4 })).toBe(69); // La4
    expect(midiDeHauteur({ lettre: "F", alteration: 1, octave: 5 })).toBe(78); // Fa#5
  });
});
```

- [ ] **Step 2 : Lancer le test — il échoue**

Run: `npx vitest run src/lib/piece-model.test.ts`
Expected: FAIL (`midiDeHauteur` n'existe pas).

- [ ] **Step 3 : Implémenter `midiDeHauteur`**

Dans `src/lib/piece-model.ts`, après `dureeEnDivisions` :

```ts
/** Demi-tons de la fondamentale (Do) pour chaque lettre. */
const DEMI_LETTRE: Record<LettreNote, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

/** Numéro MIDI d'une hauteur (Do4 = 60). */
export function midiDeHauteur(h: Hauteur): number {
  return (h.octave + 1) * 12 + DEMI_LETTRE[h.lettre] + h.alteration;
}
```

- [ ] **Step 4 : Lancer le test — il passe**

Run: `npx vitest run src/lib/piece-model.test.ts`
Expected: PASS.

- [ ] **Step 5 : Étendre `Curseur` avec `note`**

Dans `src/lib/composition-edition.ts`, remplacer l'interface `Curseur` :

```ts
/** Le curseur d'édition : mesure, voix, et la note sélectionnée (ou "fin" = mode ajout). */
export interface Curseur {
  mesure: number;
  voix: NomVoix;
  note: number | "fin";
}
```

Dans la même fonction `inserer`, garantir que l'ajout se fait bien en mode « fin » : après une
insertion, le curseur suivant reste en mode ajout. Remplacer le calcul de `curseurSuivant` :

```ts
  const curseurSuivant: Curseur =
    pleine && curseur.mesure + 1 < piece.mesures.length
      ? { mesure: curseur.mesure + 1, voix: curseur.voix, note: "fin" }
      : { mesure: curseur.mesure, voix: curseur.voix, note: "fin" };
```

Et dans `effacer`, ajouter `note: "fin"` aux deux `Curseur` construits (`precedent` et le retour de
la branche « recule ») :

```ts
  if (curseur.mesure > 0) {
    const precedent: Curseur = { mesure: curseur.mesure - 1, voix: curseur.voix, note: "fin" };
    const voixPrec = piece.mesures[precedent.mesure].voix[precedent.voix];
    const piecePrec = voixPrec.length > 0 ? avecVoix(piece, precedent, voixPrec.slice(0, -1)) : piece;
    return { piece: piecePrec, curseur: precedent };
  }
```

- [ ] **Step 6 : Adapter les constructions de `Curseur` dans l'atelier**

Dans `src/components/AtelierComposition.tsx`, ajouter `note: "fin"` partout où un `Curseur` est
construit :

- état initial : `useState<Curseur>({ mesure: 0, voix: "soprano", note: "fin" })`
- `toutEffacer` : `setCurseur({ mesure: 0, voix: "soprano", note: "fin" })`
- `choisirVoix` : `setCurseur({ mesure: positionEcriture(piece, voix), voix, note: "fin" })`

- [ ] **Step 7 : Adapter les tests existants du socle au nouveau `Curseur`**

Dans `src/lib/composition-edition.test.ts`, mettre à jour `CURSEUR0` et toutes les constructions
littérales `{ mesure, voix }` pour inclure `note: "fin"` :

```ts
const CURSEUR0: Curseur = { mesure: 0, voix: "soprano", note: "fin" };
```

Et dans les `it(...)` qui passent des curseurs littéraux à `inserer` (ex. `{ mesure: 0, voix: "alto" }`),
ajouter `note: "fin"`. Les assertions `toEqual({ mesure: 0, voix: "soprano" })` deviennent
`toEqual({ mesure: 0, voix: "soprano", note: "fin" })` ; `toEqual({ mesure: 1, voix: "soprano" })`
→ `{ mesure: 1, voix: "soprano", note: "fin" }`.

- [ ] **Step 8 : Lancer toute la suite — vert**

Run: `npx vitest run`
Expected: PASS (tous les tests adaptés passent).

- [ ] **Step 9 : Commit**

```bash
git add src/lib/piece-model.ts src/lib/piece-model.test.ts src/lib/composition-edition.ts src/lib/composition-edition.test.ts src/components/AtelierComposition.tsx
git commit -m "feat(compo): Curseur.note + midiDeHauteur (socle 2d)"
```

---

## Task 2 : `positions` — énumérer les notes navigables

**Files:**
- Modify: `src/lib/composition-edition.ts`
- Test: `src/lib/composition-edition.test.ts`

- [ ] **Step 1 : Écrire le test**

```ts
describe("positions — notes navigables d'une voix", () => {
  it("énumère les notes dans l'ordre, à travers les mesures, en ignorant silences et mesures vides", () => {
    let p = pieceEdition();
    // mesure 0 : deux noires ; mesure 1 : vide ; mesure 2 : une note après un silence saisi.
    p.mesures[0].voix.soprano = [noteN("noire"), noteN("noire")];
    p.mesures[2].voix.soprano = [{ type: "silence", duree: { base: "noire", points: 0 } }, noteN("noire")];
    expect(positions(p, "soprano")).toEqual([
      { mesure: 0, note: 0 },
      { mesure: 0, note: 1 },
      { mesure: 2, note: 1 }, // l'index 0 est un silence : non navigable
    ]);
  });
  it("une voix sans note donne une liste vide", () => {
    expect(positions(pieceEdition(), "alto")).toEqual([]);
  });
});
```

- [ ] **Step 2 : Lancer — échoue**

Run: `npx vitest run src/lib/composition-edition.test.ts`
Expected: FAIL (`positions` n'existe pas).

- [ ] **Step 3 : Implémenter**

Dans `src/lib/composition-edition.ts` :

```ts
/**
 * Les positions NAVIGABLES d'une voix : une entrée par NOTE (les silences saisis ne sont pas
 * sélectionnables), dans l'ordre de lecture, à travers les mesures. `note` est l'index BRUT
 * dans le tableau de la mesure.
 */
export function positions(piece: Piece, voix: NomVoix): Array<{ mesure: number; note: number }> {
  const out: Array<{ mesure: number; note: number }> = [];
  piece.mesures.forEach((m, mesure) => {
    m.voix[voix].forEach((ev, note) => {
      if (ev.type === "note") out.push({ mesure, note });
    });
  });
  return out;
}
```

- [ ] **Step 4 : Lancer — passe**

Run: `npx vitest run src/lib/composition-edition.test.ts`
Expected: PASS.

- [ ] **Step 5 : Commit**

```bash
git add src/lib/composition-edition.ts src/lib/composition-edition.test.ts
git commit -m "feat(compo): positions — enumerer les notes navigables"
```

---

## Task 3 : `naviguer` — déplacer la sélection ←/→

**Files:**
- Modify: `src/lib/composition-edition.ts`
- Test: `src/lib/composition-edition.test.ts`

- [ ] **Step 1 : Écrire le test**

```ts
describe("naviguer — deplacer la selection", () => {
  it("depuis fin, la fleche gauche selectionne la derniere note", () => {
    let p = pieceEdition();
    p.mesures[0].voix.soprano = [noteN("noire"), noteN("noire")];
    const c: Curseur = { mesure: 1, voix: "soprano", note: "fin" };
    expect(naviguer(p, c, -1)).toEqual({ mesure: 0, voix: "soprano", note: 1 });
  });
  it("la fleche droite avance de note en note puis revient a fin", () => {
    let p = pieceEdition();
    p.mesures[0].voix.soprano = [noteN("noire"), noteN("noire")];
    const c0: Curseur = { mesure: 0, voix: "soprano", note: 0 };
    const c1 = naviguer(p, c0, 1);
    expect(c1).toEqual({ mesure: 0, voix: "soprano", note: 1 });
    // au-dela de la derniere note : mode ajout sur la mesure d'ecriture.
    expect(naviguer(p, c1, 1)).toEqual({ mesure: 0, voix: "soprano", note: "fin" });
  });
  it("la fleche gauche sur la premiere note y reste", () => {
    let p = pieceEdition();
    p.mesures[0].voix.soprano = [noteN("noire")];
    const c: Curseur = { mesure: 0, voix: "soprano", note: 0 };
    expect(naviguer(p, c, -1)).toEqual({ mesure: 0, voix: "soprano", note: 0 });
  });
  it("sur une voix sans note, reste en fin", () => {
    const c: Curseur = { mesure: 0, voix: "alto", note: "fin" };
    expect(naviguer(pieceEdition(), c, -1)).toEqual({ mesure: 0, voix: "alto", note: "fin" });
  });
});
```

- [ ] **Step 2 : Lancer — échoue**

Run: `npx vitest run src/lib/composition-edition.test.ts`
Expected: FAIL.

- [ ] **Step 3 : Implémenter**

```ts
/**
 * Déplace la sélection le long des `positions` de la voix active. `sens` = +1 (droite) ou -1
 * (gauche). Au-delà de la dernière note → mode ajout ("fin") sur la mesure d'écriture ; avant la
 * première → reste sur la première. Depuis "fin", gauche sélectionne la dernière note.
 */
export function naviguer(piece: Piece, curseur: Curseur, sens: -1 | 1): Curseur {
  const pos = positions(piece, curseur.voix);
  if (pos.length === 0) return { ...curseur, note: "fin" };

  const finCurseur: Curseur = { mesure: positionEcriture(piece, curseur.voix), voix: curseur.voix, note: "fin" };
  const indexCourant =
    curseur.note === "fin"
      ? pos.length // « fin » est juste après la dernière position
      : pos.findIndex((q) => q.mesure === curseur.mesure && q.note === curseur.note);

  const cible = indexCourant + sens;
  if (cible >= pos.length) return finCurseur;
  if (cible < 0) return { mesure: pos[0].mesure, voix: curseur.voix, note: pos[0].note };
  const q = pos[cible];
  return { mesure: q.mesure, voix: curseur.voix, note: q.note };
}
```

- [ ] **Step 4 : Lancer — passe**

Run: `npx vitest run src/lib/composition-edition.test.ts`
Expected: PASS.

- [ ] **Step 5 : Commit**

```bash
git add src/lib/composition-edition.ts src/lib/composition-edition.test.ts
git commit -m "feat(compo): naviguer entre les notes (fleches)"
```

---

## Task 4 : `transposerDegre` + `transposerOctave`

**Files:**
- Modify: `src/lib/composition-edition.ts`
- Test: `src/lib/composition-edition.test.ts`

- [ ] **Step 1 : Écrire le test**

```ts
describe("transposerDegre / transposerOctave", () => {
  const selNote0 = (base = "noire" as const): { p: Piece; c: Curseur } => {
    const p = pieceEdition();
    p.mesures[0].voix.soprano = [{ type: "note", hauteurs: [{ lettre: "C", alteration: 0, octave: 5 }], duree: { base, points: 0 } }];
    return { p, c: { mesure: 0, voix: "soprano", note: 0 } };
  };
  it("monte d'un degre diatonique : C5 -> D5", () => {
    const { p, c } = selNote0();
    const h = transposerDegre(p, c, 1).mesures[0].voix.soprano[0] as Note;
    expect(h.hauteurs[0]).toEqual({ lettre: "D", alteration: 0, octave: 5 });
  });
  it("passe l'octave en montant depuis B : B4 -> C5", () => {
    const p = pieceEdition();
    p.mesures[0].voix.soprano = [{ type: "note", hauteurs: [{ lettre: "B", alteration: 0, octave: 4 }], duree: { base: "noire", points: 0 } }];
    const c: Curseur = { mesure: 0, voix: "soprano", note: 0 };
    expect((transposerDegre(p, c, 1).mesures[0].voix.soprano[0] as Note).hauteurs[0])
      .toEqual({ lettre: "C", alteration: 0, octave: 5 });
  });
  it("efface l'alteration en bougeant sur la portee : F#5 monte -> G5 (becarre)", () => {
    const p = pieceEdition();
    p.mesures[0].voix.soprano = [{ type: "note", hauteurs: [{ lettre: "F", alteration: 1, octave: 5 }], duree: { base: "noire", points: 0 } }];
    const c: Curseur = { mesure: 0, voix: "soprano", note: 0 };
    expect((transposerDegre(p, c, 1).mesures[0].voix.soprano[0] as Note).hauteurs[0])
      .toEqual({ lettre: "G", alteration: 0, octave: 5 });
  });
  it("transposerOctave monte d'une octave, borne a 7", () => {
    const { p, c } = selNote0();
    expect((transposerOctave(p, c, 1).mesures[0].voix.soprano[0] as Note).hauteurs[0].octave).toBe(6);
    // borne haute
    const p7 = pieceEdition();
    p7.mesures[0].voix.soprano = [{ type: "note", hauteurs: [{ lettre: "C", alteration: 0, octave: 7 }], duree: { base: "noire", points: 0 } }];
    expect((transposerOctave(p7, c, 1).mesures[0].voix.soprano[0] as Note).hauteurs[0].octave).toBe(7);
  });
  it("sans effet en mode fin", () => {
    const { p } = selNote0();
    const c: Curseur = { mesure: 0, voix: "soprano", note: "fin" };
    expect(transposerDegre(p, c, 1)).toBe(p);
  });
});
```

- [ ] **Step 2 : Lancer — échoue**

Run: `npx vitest run src/lib/composition-edition.test.ts`
Expected: FAIL.

- [ ] **Step 3 : Implémenter**

Ajouter en tête de `composition-edition.ts` l'import de `Note` et `Hauteur` s'ils ne sont pas déjà
importés (vérifier la ligne d'import depuis `./piece-model` et compléter). Puis :

```ts
/** L'ordre diatonique des lettres, pour le déplacement sur la portée. */
const ECHELLE_LETTRES: LettreNote[] = ["C", "D", "E", "F", "G", "A", "B"];

/** Applique une transformation à la 1re hauteur de la note sélectionnée (sans effet en "fin"). */
function avecHauteurSelectionnee(
  piece: Piece, curseur: Curseur, f: (h: Hauteur) => Hauteur,
): Piece {
  if (curseur.note === "fin") return piece;
  const voix = piece.mesures[curseur.mesure].voix[curseur.voix];
  const ev = voix[curseur.note];
  if (!ev || ev.type !== "note") return piece;
  const nouvelle: Note = { ...ev, hauteurs: [f(ev.hauteurs[0]), ...ev.hauteurs.slice(1)] };
  const nouvelleVoix = voix.map((x, i) => (i === curseur.note ? nouvelle : x));
  return avecVoix(piece, curseur, nouvelleVoix);
}

/**
 * Transpose la note sélectionnée d'un DEGRÉ diatonique (déplacement sur la portée) : la lettre
 * avance/recule dans l'échelle, l'octave suit à la jonction B↔C, l'altération repasse à bécarre.
 */
export function transposerDegre(piece: Piece, curseur: Curseur, sens: -1 | 1): Piece {
  return avecHauteurSelectionnee(piece, curseur, (h) => {
    const i = ECHELLE_LETTRES.indexOf(h.lettre);
    const j = i + sens;
    const lettre = ECHELLE_LETTRES[(j + 7) % 7];
    const octave = h.octave + (j < 0 ? -1 : j > 6 ? 1 : 0);
    return { lettre, alteration: 0, octave };
  });
}

/** Transpose la note sélectionnée d'une OCTAVE (bornée 1..7). */
export function transposerOctave(piece: Piece, curseur: Curseur, sens: -1 | 1): Piece {
  return avecHauteurSelectionnee(piece, curseur, (h) => ({
    ...h, octave: Math.min(7, Math.max(1, h.octave + sens)),
  }));
}
```

Note : `LettreNote`, `Hauteur`, `Note` doivent figurer dans l'import `from "./piece-model"`.

- [ ] **Step 4 : Lancer — passe**

Run: `npx vitest run src/lib/composition-edition.test.ts`
Expected: PASS.

- [ ] **Step 5 : Commit**

```bash
git add src/lib/composition-edition.ts src/lib/composition-edition.test.ts
git commit -m "feat(compo): transposer la note selectionnee (degre + octave)"
```

---

## Task 5 : `remplacerHauteur` + `remplacerDuree`

**Files:**
- Modify: `src/lib/composition-edition.ts`
- Test: `src/lib/composition-edition.test.ts`

- [ ] **Step 1 : Écrire le test**

```ts
describe("remplacerHauteur / remplacerDuree", () => {
  const selDo5 = (base = "noire" as const, points: 0 | 1 | 2 = 0): { p: Piece; c: Curseur } => {
    const p = pieceEdition();
    p.mesures[0].voix.soprano = [
      { type: "note", hauteurs: [{ lettre: "C", alteration: 0, octave: 5 }], duree: { base, points } },
      { type: "note", hauteurs: [{ lettre: "E", alteration: 0, octave: 5 }], duree: { base: "noire", points: 0 } },
    ];
    return { p, c: { mesure: 0, voix: "soprano", note: 0 } };
  };
  it("remplace lettre + alteration, garde octave et duree", () => {
    const { p, c } = selDo5("noire");
    const n0 = remplacerHauteur(p, c, "G", 1).mesures[0].voix.soprano[0] as Note;
    expect(n0.hauteurs[0]).toEqual({ lettre: "G", alteration: 1, octave: 5 });
    expect(n0.duree).toEqual({ base: "noire", points: 0 });
    // la 2e note n'a pas bouge
    expect((remplacerHauteur(p, c, "G", 1).mesures[0].voix.soprano[1] as Note).hauteurs[0].lettre).toBe("E");
  });
  it("remplace la duree si elle tient (noire -> croche)", () => {
    const { p, c } = selDo5("noire");
    const n0 = remplacerDuree(p, c, { base: "croche", points: 0 }).mesures[0].voix.soprano[0] as Note;
    expect(n0.duree).toEqual({ base: "croche", points: 0 });
    expect(n0.hauteurs[0].lettre).toBe("C"); // hauteur gardee
  });
  it("refuse la duree qui deborde la mesure (sans rien changer)", () => {
    // mesure pleine : 4 noires ; remplacer la 1re par une ronde deborderait.
    const p = pieceEdition();
    p.mesures[0].voix.soprano = [noteN("noire"), noteN("noire"), noteN("noire"), noteN("noire")];
    const c: Curseur = { mesure: 0, voix: "soprano", note: 0 };
    expect(remplacerDuree(p, c, { base: "ronde", points: 0 })).toBe(p);
  });
  it("sans effet en mode fin", () => {
    const { p } = selDo5();
    const c: Curseur = { mesure: 0, voix: "soprano", note: "fin" };
    expect(remplacerHauteur(p, c, "G", 0)).toBe(p);
    expect(remplacerDuree(p, c, { base: "croche", points: 0 })).toBe(p);
  });
});
```

- [ ] **Step 2 : Lancer — échoue**

Run: `npx vitest run src/lib/composition-edition.test.ts`
Expected: FAIL.

- [ ] **Step 3 : Implémenter**

```ts
/** Remplace lettre + altération de la note sélectionnée (garde octave et durée). */
export function remplacerHauteur(
  piece: Piece, curseur: Curseur, lettre: LettreNote, alteration: number,
): Piece {
  return avecHauteurSelectionnee(piece, curseur, (h) => ({ ...h, lettre, alteration }));
}

/**
 * Remplace la durée de la note sélectionnée (garde la hauteur), SI la nouvelle durée tient dans la
 * mesure (les autres notes ne bougent pas). Sinon renvoie la pièce inchangée.
 */
export function remplacerDuree(piece: Piece, curseur: Curseur, duree: Duree): Piece {
  if (curseur.note === "fin") return piece;
  const voix = piece.mesures[curseur.mesure].voix[curseur.voix];
  const ev = voix[curseur.note];
  if (!ev || ev.type !== "note") return piece;
  const capacite = capaciteMesure(piece.chiffrage);
  const autres = dureePlacee(voix) - dureeEnDivisions(ev.duree);
  if (autres + dureeEnDivisions(duree) > capacite) return piece; // déborde
  const nouvelle: Note = { ...ev, duree };
  const nouvelleVoix = voix.map((x, i) => (i === curseur.note ? nouvelle : x));
  return avecVoix(piece, curseur, nouvelleVoix);
}
```

Note : `Duree` doit figurer dans l'import `from "./piece-model"` (déjà le cas).

- [ ] **Step 4 : Lancer — passe**

Run: `npx vitest run src/lib/composition-edition.test.ts`
Expected: PASS.

- [ ] **Step 5 : Commit**

```bash
git add src/lib/composition-edition.ts src/lib/composition-edition.test.ts
git commit -m "feat(compo): remplacer hauteur/duree en place"
```

---

## Task 6 : `supprimerNote`

**Files:**
- Modify: `src/lib/composition-edition.ts`
- Test: `src/lib/composition-edition.test.ts`

- [ ] **Step 1 : Écrire le test**

```ts
describe("supprimerNote — retirer la note selectionnee", () => {
  it("retire la note et selectionne la precedente", () => {
    const p = pieceEdition();
    p.mesures[0].voix.soprano = [noteN("noire"), noteN("noire"), noteN("noire")];
    const c: Curseur = { mesure: 0, voix: "soprano", note: 1 };
    const r = supprimerNote(p, c);
    expect(r.piece.mesures[0].voix.soprano).toHaveLength(2);
    expect(r.curseur).toEqual({ mesure: 0, voix: "soprano", note: 0 });
  });
  it("sur la premiere note, repasse en mode ajout", () => {
    const p = pieceEdition();
    p.mesures[0].voix.soprano = [noteN("noire")];
    const c: Curseur = { mesure: 0, voix: "soprano", note: 0 };
    const r = supprimerNote(p, c);
    expect(r.piece.mesures[0].voix.soprano).toHaveLength(0);
    expect(r.curseur.note).toBe("fin");
  });
  it("sans effet en mode fin", () => {
    const p = pieceEdition();
    const c: Curseur = { mesure: 0, voix: "soprano", note: "fin" };
    const r = supprimerNote(p, c);
    expect(r.piece).toBe(p);
    expect(r.curseur).toBe(c);
  });
});
```

- [ ] **Step 2 : Lancer — échoue**

Run: `npx vitest run src/lib/composition-edition.test.ts`
Expected: FAIL.

- [ ] **Step 3 : Implémenter**

```ts
/**
 * Supprime la note sélectionnée (décale la suite de la voix) et sélectionne la note PRÉCÉDENTE de
 * la voix (dans la même mesure) ; s'il n'y en a plus, repasse en mode ajout ("fin"). Sans effet en
 * mode ajout.
 */
export function supprimerNote(piece: Piece, curseur: Curseur): { piece: Piece; curseur: Curseur } {
  if (curseur.note === "fin") return { piece, curseur };
  const voix = piece.mesures[curseur.mesure].voix[curseur.voix];
  const index = curseur.note;
  const nouvelleVoix = voix.filter((_, i) => i !== index);
  const nouvellePiece = avecVoix(piece, curseur, nouvelleVoix);
  // Chercher la note précédente (même mesure) pour garder une sélection visible.
  let prec = -1;
  for (let i = index - 1; i >= 0; i--) {
    if (nouvelleVoix[i]?.type === "note") { prec = i; break; }
  }
  const nouveauCurseur: Curseur =
    prec >= 0
      ? { mesure: curseur.mesure, voix: curseur.voix, note: prec }
      : { mesure: curseur.mesure, voix: curseur.voix, note: "fin" };
  return { piece: nouvellePiece, curseur: nouveauCurseur };
}
```

- [ ] **Step 4 : Lancer — passe**

Run: `npx vitest run src/lib/composition-edition.test.ts`
Expected: PASS.

- [ ] **Step 5 : Commit**

```bash
git add src/lib/composition-edition.ts src/lib/composition-edition.test.ts
git commit -m "feat(compo): supprimer la note selectionnee"
```

---

## Task 7 : Appariement modèle ↔ Verovio (temps + MIDI)

**Files:**
- Modify: `src/lib/composition-edition.ts`
- Test: `src/lib/composition-edition.test.ts`

But : deux fonctions pures qui traduisent entre une note du modèle et le couple `(onsetMs, midi)`
que Verovio expose, pour le surlignage de la sélection et le clic.

- [ ] **Step 1 : Écrire le test**

```ts
import { midiDeHauteur } from "./piece-model";

describe("appariement Verovio : onset/midi <-> position", () => {
  it("onsetMsMidiDeSelection donne le temps et le MIDI de la note selectionnee", () => {
    const p = pieceEdition();
    // mesure 0 : Do5 noire puis Re5 noire ; on selectionne la 2e (onset = 1 temps).
    p.mesures[0].voix.soprano = [
      { type: "note", hauteurs: [{ lettre: "C", alteration: 0, octave: 5 }], duree: { base: "noire", points: 0 } },
      { type: "note", hauteurs: [{ lettre: "D", alteration: 0, octave: 5 }], duree: { base: "noire", points: 0 } },
    ];
    const c: Curseur = { mesure: 0, voix: "soprano", note: 1 };
    const r = onsetMsMidiDeSelection(p, c)!;
    expect(r.midi).toBe(74); // Re5
    expect(r.onsetMs).toBeCloseTo(500, 0); // 1 noire a 120 bpm
  });
  it("trouverPosition retrouve la note a partir de (onsetMs, midi)", () => {
    const p = pieceEdition();
    p.mesures[0].voix.soprano = [{ type: "note", hauteurs: [{ lettre: "C", alteration: 0, octave: 5 }], duree: { base: "noire", points: 0 } }];
    p.mesures[0].voix.basse = [{ type: "note", hauteurs: [{ lettre: "C", alteration: 0, octave: 3 }], duree: { base: "ronde", points: 0 } }];
    // A t=0, deux notes : Do5 (72) au soprano, Do3 (48) a la basse. On cible la basse.
    expect(trouverPosition(p, 0, 48)).toEqual({ mesure: 0, voix: "basse", note: 0 });
  });
  it("trouverPosition renvoie null si rien ne correspond", () => {
    expect(trouverPosition(pieceEdition(), 0, 60)).toBeNull();
  });
});
```

- [ ] **Step 2 : Lancer — échoue**

Run: `npx vitest run src/lib/composition-edition.test.ts`
Expected: FAIL.

- [ ] **Step 3 : Implémenter**

```ts
import { DIVISIONS, midiDeHauteur } from "./piece-model"; // compléter l'import existant

/** ms par tick au tempo par défaut de Verovio (120 bpm, une noire = 500 ms, DIVISIONS ticks/noire). */
export const MS_PAR_TICK = 60000 / (120 * DIVISIONS);

/** Onset (en ticks) de la note d'index `note` dans sa voix (offset de mesure inclus). */
function onsetTicks(piece: Piece, mesure: number, voix: NomVoix, note: number): number {
  const capacite = capaciteMesure(piece.chiffrage);
  const evs = piece.mesures[mesure].voix[voix];
  let t = mesure * capacite;
  for (let i = 0; i < note; i++) t += dureeEnDivisions(evs[i].duree);
  return t;
}

/** (onsetMs, midi) de la note sélectionnée, pour surligner l'élément Verovio correspondant. */
export function onsetMsMidiDeSelection(
  piece: Piece, curseur: Curseur,
): { onsetMs: number; midi: number } | null {
  if (curseur.note === "fin") return null;
  const ev = piece.mesures[curseur.mesure].voix[curseur.voix][curseur.note];
  if (!ev || ev.type !== "note") return null;
  return {
    onsetMs: onsetTicks(piece, curseur.mesure, curseur.voix, curseur.note) * MS_PAR_TICK,
    midi: midiDeHauteur(ev.hauteurs[0]),
  };
}

/**
 * Retrouve la position (mesure, voix, note) d'une note à partir du couple (onsetMs, midi) remonté
 * par Verovio au clic. Tolérance d'un demi-tick sur le temps. Renvoie null si aucune ne colle.
 */
export function trouverPosition(piece: Piece, onsetMs: number, midi: number): Curseur | null {
  const cibleTicks = Math.round(onsetMs / MS_PAR_TICK);
  for (const voix of ORDRE_VOIX) {
    const p = positions(piece, voix);
    for (const { mesure, note } of p) {
      const ev = piece.mesures[mesure].voix[voix][note] as Note;
      if (midiDeHauteur(ev.hauteurs[0]) !== midi) continue;
      if (Math.abs(onsetTicks(piece, mesure, voix, note) - cibleTicks) <= 1) {
        return { mesure, voix, note };
      }
    }
  }
  return null;
}
```

Note : `ORDRE_VOIX` est déjà importé ; ajouter `DIVISIONS` et `midiDeHauteur` à l'import de
`./piece-model`.

- [ ] **Step 4 : Lancer — passe**

Run: `npx vitest run src/lib/composition-edition.test.ts`
Expected: PASS.

- [ ] **Step 5 : Commit**

```bash
git add src/lib/composition-edition.ts src/lib/composition-edition.test.ts
git commit -m "feat(compo): appariement onset/midi <-> position (Verovio)"
```

---

## Task 8 : StudioScore — surlignage de sélection + clic

**Files:**
- Modify: `src/types/verovio.d.ts`
- Modify: `src/components/StudioScore.tsx`

- [ ] **Step 1 : Étendre le stub Verovio**

Dans `src/types/verovio.d.ts`, dans la classe `VerovioToolkit`, ajouter :

```ts
    /**
     * Valeurs MIDI d'un élément (note) : instant de déclenchement et hauteur MIDI. Sert à apparier
     * une note gravée avec le modèle (clic, surlignage de sélection).
     */
    getMIDIValuesForElement(xmlId: string): { time?: number; pitch?: number; duration?: number };
```

- [ ] **Step 2 : Étendre `StudioScoreRef` et les props**

Dans `src/components/StudioScore.tsx`, remplacer l'interface `StudioScoreRef` et `Props` :

```ts
export interface StudioScoreRef {
  /** Surligne les notes sonnant à `ms` (temps ÉCRIT) ; `null` efface tout. */
  surlignerATemps(ms: number | null): void;
  /** Surligne UNE note choisie par (onsetMs, midi) ; `null` efface la sélection. */
  surlignerSelection(sel: { onsetMs: number; midi: number } | null): void;
}

interface Props {
  musicxml: string;
  /** Clic sur une note gravée : remonte (onsetMs, midi) de l'élément cliqué. */
  onSelectNote?: (sel: { onsetMs: number; midi: number }) => void;
}
```

- [ ] **Step 3 : Implémenter le surlignage de sélection et le clic**

Ajouter une ref pour la note sélectionnée (à côté de `notesJouees`) :

```ts
  const notesSelection = useRef<Element[]>([]);
```

Dans `useImperativeHandle`, ajouter la méthode `surlignerSelection` (à côté de `surlignerATemps`) :

```ts
    surlignerSelection(sel: { onsetMs: number; midi: number } | null) {
      const tk = tkRef.current;
      const hote = conteneur.current;
      if (!tk || !hote) return;
      for (const el of notesSelection.current) el.classList.remove("harmonia-selection");
      notesSelection.current = [];
      if (!sel) return;
      let ids: string[] = [];
      try {
        // +1 ms pour tomber À L'INTÉRIEUR de la note (et non juste avant son attaque).
        ids = tk.getElementsAtTime(sel.onsetMs + 1).notes ?? [];
      } catch { return; }
      for (const id of ids) {
        let midi: number | undefined;
        try { midi = tk.getMIDIValuesForElement(id).pitch; } catch { midi = undefined; }
        if (midi === sel.midi) {
          const el = hote.querySelector(`[id="${id}"]`);
          if (el) { el.classList.add("harmonia-selection"); notesSelection.current.push(el); }
        }
      }
    },
```

Câbler le clic : sur le `<div ref={conteneur}>`, ajouter `onClick`. Remplacer le bloc de rendu final
par :

```tsx
  const onClick = (e: React.MouseEvent) => {
    const tk = tkRef.current;
    if (!tk || !onSelectNote) return;
    let el = e.target as Element | null;
    // Remonter jusqu'à l'élément .note porteur d'un id.
    while (el && el !== e.currentTarget) {
      if (el.classList?.contains("note") && el.id) {
        try {
          const v = tk.getMIDIValuesForElement(el.id);
          if (typeof v.time === "number" && typeof v.pitch === "number") {
            onSelectNote({ onsetMs: v.time, midi: v.pitch });
          }
        } catch { /* élément non temporel : on ignore */ }
        return;
      }
      el = el.parentElement;
    }
  };

  return (
    <>
      <style>{`
        .harmonia-joue, .harmonia-joue * { fill: #C62828 !important; }
        .harmonia-selection, .harmonia-selection * { fill: #5C3D6E !important; }
      `}</style>
      <div ref={conteneur} onClick={onClick} style={{ width: "100%", overflowX: "auto", cursor: "pointer" }} />
    </>
  );
```

Penser à récupérer `onSelectNote` dans la signature : `function StudioScore({ musicxml, onSelectNote }, ref)`.
Ajouter `onSelectNote` (et rien d'autre) — `musicxml` reste la seule dépendance de l'effet de gravure.

- [ ] **Step 4 : Vérifier le build**

Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build`
Expected: succès (types OK, pas d'erreur de compilation).

- [ ] **Step 5 : Commit**

```bash
git add src/types/verovio.d.ts src/components/StudioScore.tsx
git commit -m "feat(compo): StudioScore surlignage de selection + clic sur note"
```

---

## Task 9 : Câblage de l'atelier (clavier, palette contextuelle, sélection, clic)

**Files:**
- Modify: `src/components/AtelierComposition.tsx`

- [ ] **Step 1 : Importer les nouvelles fonctions**

Remplacer l'import depuis `@/lib/composition-edition` :

```ts
import {
  inserer, effacer, positionEcriture, naviguer,
  transposerDegre, transposerOctave, remplacerHauteur, remplacerDuree,
  supprimerNote, onsetMsMidiDeSelection, trouverPosition, type Curseur,
} from "@/lib/composition-edition";
```

- [ ] **Step 2 : `poserNote` — remplacer si une note est sélectionnée**

Dans `poserNote`, au début du corps, aiguiller vers le remplacement en mode sélection :

```ts
  const poserNote = useCallback(
    (lettre: LettreNote) => {
      // Mode sélection : on CORRIGE la hauteur de la note pointée (garde la durée).
      if (curseur.note !== "fin") {
        const np = remplacerHauteur(piece, curseur, lettre, alteration);
        if (np !== piece) {
          setPiece(np);
          const oct = (np.mesures[curseur.mesure].voix[curseur.voix][curseur.note] as Note).hauteurs[0].octave;
          pianoRef.current?.playVoicing([specHauteur(lettre, alteration, oct)], { duration: 0.5, velocity: 0.8 });
        }
        return;
      }
      const oct = octaves[curseur.voix];
      const duree: Duree = { base, points, ...(triolet ? { nolet: { reelles: 3, normales: 2 } } : {}) };
      const note: Note = { type: "note", hauteurs: [{ lettre, alteration, octave: oct }], duree };
      const r = inserer(piece, curseur, note);
      if (r.piece !== piece) {
        setPiece(r.piece);
        setCurseur(r.curseur);
        pianoRef.current?.playVoicing([specHauteur(lettre, alteration, oct)], { duration: 0.5, velocity: 0.8 });
      }
    },
    [piece, curseur, octaves, base, points, alteration, triolet],
  );
```

- [ ] **Step 3 : Changer la durée = corriger si sélection**

Ajouter un gestionnaire dédié pour les boutons de durée/points/triolet, remplaçant les `setBase` etc.
en mode sélection. Ajouter après `poserSilence` :

```ts
  // Choisit base ou points : en mode sélection, CORRIGE la durée de la note pointée ; sinon règle
  // la palette de saisie. (Le triolet reste géré à part : il n'a de sens qu'en mode ajout.)
  const choisirDuree = useCallback((patch: { base?: BaseDuree; points?: 0 | 1 | 2 }) => {
    if (curseur.note !== "fin") {
      const ev = piece.mesures[curseur.mesure].voix[curseur.voix][curseur.note];
      if (ev && ev.type === "note") {
        const np = remplacerDuree(piece, curseur, { ...ev.duree, ...patch });
        if (np !== piece) setPiece(np);
      }
      return;
    }
    if (patch.base !== undefined) setBase(patch.base);
    if (patch.points !== undefined) setPoints(patch.points);
  }, [piece, curseur]);
```

Puis, dans le JSX de la palette, brancher les boutons DURÉE et POINTS sur `choisirDuree` :

- bouton durée : `onClick={() => choisirDuree({ base: d.base })}`
- bouton points : `onClick={() => choisirDuree({ points: p })}`

Laisser le bouton TRIOLET inchangé (il ne fait que basculer la palette `triolet`, utile en mode
ajout). Garder l'état `base`/`points`/`triolet` pour l'apparence des boutons actifs et la saisie.

- [ ] **Step 4 : Navigation + transposition + suppression au clavier**

Étendre `actionsRef` et le `switch` clavier. D'abord, ajouter des callbacks :

```ts
  const naviguerNote = useCallback((sens: -1 | 1) => {
    setCurseur((c) => naviguer(piece, c, sens));
  }, [piece]);

  const transposer = useCallback((sens: -1 | 1, octave: boolean) => {
    setPiece((p) => (octave ? transposerOctave(p, curseur, sens) : transposerDegre(p, curseur, sens)));
    // retour sonore de la note transposée
    const np = octave ? transposerOctave(piece, curseur, sens) : transposerDegre(piece, curseur, sens);
    if (curseur.note !== "fin") {
      const ev = np.mesures[curseur.mesure].voix[curseur.voix][curseur.note];
      if (ev && ev.type === "note") {
        const h = ev.hauteurs[0];
        pianoRef.current?.playVoicing([specHauteur(h.lettre, h.alteration, h.octave)], { duration: 0.4, velocity: 0.7 });
      }
    }
  }, [piece, curseur]);

  const effacerContextuel = useCallback(() => {
    if (curseur.note !== "fin") {
      const r = supprimerNote(piece, curseur);
      setPiece(r.piece); setCurseur(r.curseur);
    } else {
      effacerDerniere();
    }
  }, [piece, curseur, effacerDerniere]);
```

Mettre à jour la ref et le handler. Remplacer la ligne `actionsRef` et le `switch` :

```ts
  const actionsRef = useRef({ poserNote, poserSilence, effacerContextuel, naviguerNote, transposer, setBase });
  actionsRef.current = { poserNote, poserSilence, effacerContextuel, naviguerNote, transposer, setBase };
```

Le garde existant `if (e.metaKey || e.ctrlKey || e.altKey) return;` NE contient PAS `shiftKey` :
`Maj` passe donc déjà. Ne rien y changer.

Remplacer le `switch` (les flèches lisent `e.shiftKey` pour l'octave) :

```ts
      switch (e.key) {
        case "ArrowLeft":  e.preventDefault(); a.naviguerNote(-1); break;
        case "ArrowRight": e.preventDefault(); a.naviguerNote(1); break;
        case "ArrowUp":    e.preventDefault(); a.transposer(1, e.shiftKey); break;
        case "ArrowDown":  e.preventDefault(); a.transposer(-1, e.shiftKey); break;
        case "Backspace":  e.preventDefault(); a.effacerContextuel(); break;
        case "r": case "R": e.preventDefault(); a.poserSilence(); break;
      }
```

- [ ] **Step 5 : Surlignage de la sélection + clic**

Ajouter un effet qui surligne la note sélectionnée à chaque changement de `piece`/`curseur`, après
le `useMemo` de `musicxml` (le surlignage doit suivre la regravure) :

```ts
  useEffect(() => {
    scoreRef.current?.surlignerSelection(onsetMsMidiDeSelection(piece, curseur));
    // La regravure recrée le SVG : on re-surligne après. musicxml change avec piece.
  }, [musicxml, curseur, piece]);
```

Ajouter le gestionnaire de clic passé à `StudioScore` :

```ts
  const onSelectNote = useCallback((sel: { onsetMs: number; midi: number }) => {
    const pos = trouverPosition(piece, sel.onsetMs, sel.midi);
    if (pos) setCurseur(pos); // sélectionne ET bascule la voix
  }, [piece]);
```

Et dans le JSX, passer la prop :

```tsx
          <StudioScore ref={scoreRef} musicxml={musicxml} onSelectNote={onSelectNote} />
```

- [ ] **Step 6 : Repère texte de la sélection**

Dans la carte du sélecteur de voix, remplacer l'affichage « mesure N » par un repère qui distingue
sélection et ajout :

```tsx
            <span style={{ color: "#aaa" }}> · </span>
            {curseur.note === "fin" ? (
              <><span style={{ color: "#aaa" }}>ajout · mesure </span>
                <strong style={{ color: VOIX_META[curseur.voix].couleur }}>{curseur.mesure + 1}</strong></>
            ) : (
              <strong style={{ color: VOIX_META[curseur.voix].couleur }}>note sélectionnée (mesure {curseur.mesure + 1})</strong>
            )}
```

- [ ] **Step 7 : Mettre à jour l'aide clavier**

Remplacer la ligne d'aide clavier (« Clavier : … ») par :

```tsx
          <strong style={{ color: "#777" }}>Clavier :</strong> a…g = poser/corriger la note · ← → = naviguer entre les notes · ↑ ↓ = transposer (Maj = octave) · 1–5 = durée · R = silence · Retour arrière = effacer.
```

Et le paragraphe d'en-tête (« … posez les notes avec les boutons ci-dessous ou au clavier … ») :
ajouter « ; flèches ← → pour revenir corriger une note, ↑ ↓ pour la déplacer. »

- [ ] **Step 8 : Vérifier le build**

Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build`
Expected: succès.

- [ ] **Step 9 : Lancer toute la suite de tests**

Run: `npx vitest run`
Expected: PASS (tout vert).

- [ ] **Step 10 : Commit**

```bash
git add src/components/AtelierComposition.tsx
git commit -m "feat(compo): atelier — naviguer/transposer/corriger + clic sur note"
```

---

## Task 10 : Vérification finale

- [ ] **Step 1 : Build + tests complets**

Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build && npx vitest run`
Expected: build OK, tous les tests verts.

- [ ] **Step 2 : Contrôle manuel (à faire par Dany en production, Pro)**

Sur `/composer` : poser quelques notes ; `←` pour revenir en arrière (le surlignage viole suit) ;
`↑/↓` transposent la note, `Maj+↑/↓` d'une octave ; cliquer un bouton C/D/E remplace la hauteur ;
changer la durée corrige la durée (refus si ça déborde) ; `Retour arrière` supprime ; cliquer une
note dans la partition la sélectionne (et bascule la voix). Vérifier que le mode ajout (après `→`
au-delà de la dernière note) reste identique à avant.

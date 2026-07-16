# Accords empilés dans une voix (2g) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Permettre d'empiler plusieurs hauteurs dans une même voix de l'atelier `/composer` (Maj+lettre, bascule « Accord »), d'éditer l'accord comme un BLOC (sélection par toute tête, transposition entière, dépilement par Retour arrière), et d'adapter la conduite des voix aux hauteurs extrêmes — l'analyse harmonique, l'export et la lecture suivent déjà.

**Architecture:** Deux fonctions pures nouvelles (`empilerHauteur`, `retirerDerniereHauteur`) et une cible commune (`cibleAccord`) dans `composition-edition.ts` ; les transformations existantes passent de `hauteurs[0]` au bloc entier ; l'appariement clic/surlignage passe à `midis: number[]` (lib + `StudioScore` + atelier) ; `conduite-voix.ts` représente chaque voix par ses extrêmes `haut`/`bas` (+ `midis` pour la tessiture).

**Tech Stack:** TypeScript strict, React 19, Verovio 6.2.0, vitest.

---

## Notes transverses (à lire avant de commencer)

- **Ne JAMAIS `npx tsc --noEmit`** (OOM). Vérif types via `NODE_OPTIONS="--max-old-space-size=8192" npm run build`.
- Tests : `npx vitest run <fichier>` ; suite complète `npx vitest run` (367 tests verts au départ).
- Modèle : `Note.hauteurs: Hauteur[]` (« 1 = note simple, 2+ = accord », `piece-model.ts:28`) ;
  `midiDeHauteur` exporté par `piece-model.ts`. L'export MusicXML écrit déjà `<chord/>` pour les
  hauteurs 2..n (`piece-vers-musicxml.ts:45`) : AUCUN travail côté export/analyse/lecture.
- `Curseur = { mesure, voix, note: number | "fin" }` (`composition-edition.ts:20`).
- **Décision de la spec précisée** : en mode ajout ("fin"), la CIBLE d'un geste d'accord est le
  DERNIER ÉVÉNEMENT de la voix (en remontant les mesures depuis le curseur), et seulement si c'est
  une note — un silence de queue rend empiler/dépiler sans effet (Retour arrière retombe alors sur
  `effacer`, qui retire ce silence).

---

## Task 1 : `composition-edition.ts` — empiler / dépiler (pur)

**Files:**
- Modify: `src/lib/composition-edition.ts`
- Test: `src/lib/composition-edition.test.ts`

- [ ] **Step 1 : Écrire les tests**

Dans `src/lib/composition-edition.test.ts`, repérer les fabriques existantes (le fichier a déjà
des helpers pour construire pièces et notes — les réutiliser ; sinon, en tête du nouveau
`describe`, utiliser ce constructeur minimal) :

```ts
function noteSimple(lettre: LettreNote, octave: number): Note {
  return { type: "note", hauteurs: [{ lettre, alteration: 0, octave }], duree: { base: "noire", points: 0 } };
}
```

Ajouter :

```ts
describe("empilerHauteur / retirerDerniereHauteur — l'accord dans une voix", () => {
  /** Une pièce d'une mesure 4/4, basse seule. */
  function pieceBasse(evs: Evenement[]): Piece {
    return {
      armure: 0, chiffrage: { temps: 4, unite: 4 },
      mesures: [{ voix: { soprano: [], alto: [], tenor: [], basse: evs } }],
    };
  }
  const selection: Curseur = { mesure: 0, voix: "basse", note: 0 };
  const ajout: Curseur = { mesure: 0, voix: "basse", note: "fin" };

  it("empile sur la note sélectionnée, ordre conservé", () => {
    const p = empilerHauteur(pieceBasse([noteSimple("C", 3)]), selection, "E", 0, 3);
    const n = p.mesures[0].voix.basse[0] as Note;
    expect(n.hauteurs.map((h) => h.lettre)).toEqual(["C", "E"]);
  });
  it("empile sur la DERNIÈRE note de la voix en mode ajout", () => {
    const p = empilerHauteur(pieceBasse([noteSimple("C", 3), noteSimple("D", 3)]), ajout, "F", 0, 3);
    expect((p.mesures[0].voix.basse[0] as Note).hauteurs).toHaveLength(1);
    expect((p.mesures[0].voix.basse[1] as Note).hauteurs.map((h) => h.lettre)).toEqual(["D", "F"]);
  });
  it("refuse le doublon midi exact", () => {
    const avant = pieceBasse([noteSimple("C", 3)]);
    expect(empilerHauteur(avant, selection, "C", 0, 3)).toBe(avant);
  });
  it("sans effet : silence de queue, voix vide", () => {
    const silence: Silence = { type: "silence", duree: { base: "noire", points: 0 } };
    const avecSilence = pieceBasse([noteSimple("C", 3), silence]);
    expect(empilerHauteur(avecSilence, ajout, "E", 0, 3)).toBe(avecSilence);
    const vide = pieceBasse([]);
    expect(empilerHauteur(vide, ajout, "E", 0, 3)).toBe(vide);
  });
  it("mode ajout : remonte à la mesure précédente si la courante est vide", () => {
    const p: Piece = {
      armure: 0, chiffrage: { temps: 4, unite: 4 },
      mesures: [
        { voix: { soprano: [], alto: [], tenor: [], basse: [noteSimple("C", 3)] } },
        { voix: { soprano: [], alto: [], tenor: [], basse: [] } },
      ],
    };
    const r = empilerHauteur(p, { mesure: 1, voix: "basse", note: "fin" }, "G", 0, 3);
    expect((r.mesures[0].voix.basse[0] as Note).hauteurs.map((h) => h.lettre)).toEqual(["C", "G"]);
  });

  it("retire la dernière hauteur empilée (et elle seule)", () => {
    const accord = empilerHauteur(pieceBasse([noteSimple("C", 3)]), selection, "E", 0, 3);
    const p = retirerDerniereHauteur(accord, selection);
    expect((p.mesures[0].voix.basse[0] as Note).hauteurs.map((h) => h.lettre)).toEqual(["C"]);
  });
  it("sans effet sur une note simple", () => {
    const avant = pieceBasse([noteSimple("C", 3)]);
    expect(retirerDerniereHauteur(avant, selection)).toBe(avant);
  });
});
```

Compléter les imports du fichier de test si besoin (`empilerHauteur`, `retirerDerniereHauteur`,
types `Evenement`, `Silence`).

- [ ] **Step 2 : Lancer — échoue** — Run: `npx vitest run src/lib/composition-edition.test.ts` → FAIL (fonctions absentes).

- [ ] **Step 3 : Implémenter**

Dans `src/lib/composition-edition.ts`, ajouter (après `effacer`, avant `MS_PAR_TICK`) :

```ts
/**
 * La note CIBLE d'un geste d'ACCORD : la note sélectionnée, ou — en mode ajout — le
 * DERNIER ÉVÉNEMENT de la voix (en remontant les mesures depuis le curseur), seulement
 * si c'est une note. Un silence de queue ne se « dépile » pas : la cible est nulle et
 * l'appelant retombe sur `effacer`.
 */
export function cibleAccord(piece: Piece, curseur: Curseur): { mesure: number; note: number } | null {
  if (curseur.note !== "fin") {
    const ev = piece.mesures[curseur.mesure].voix[curseur.voix][curseur.note];
    return ev && ev.type === "note" ? { mesure: curseur.mesure, note: curseur.note } : null;
  }
  for (let mesure = curseur.mesure; mesure >= 0; mesure--) {
    const voix = piece.mesures[mesure].voix[curseur.voix];
    if (voix.length > 0) {
      const note = voix.length - 1;
      return voix[note].type === "note" ? { mesure, note } : null;
    }
  }
  return null;
}

/**
 * Empile une hauteur sur la note cible (cf. `cibleAccord`). L'ordre d'empilement est
 * CONSERVÉ — c'est lui que `retirerDerniereHauteur` dépile. Refuse le doublon exact
 * (même midi) ; pièce inchangée si pas de cible.
 */
export function empilerHauteur(
  piece: Piece, curseur: Curseur, lettre: LettreNote, alteration: number, octave: number,
): Piece {
  const cible = cibleAccord(piece, curseur);
  if (!cible) return piece;
  const voix = piece.mesures[cible.mesure].voix[curseur.voix];
  const ev = voix[cible.note] as Note;
  const h: Hauteur = { lettre, alteration, octave };
  if (ev.hauteurs.some((x) => midiDeHauteur(x) === midiDeHauteur(h))) return piece;
  const nouvelle: Note = { ...ev, hauteurs: [...ev.hauteurs, h] };
  const nouvelleVoix = voix.map((x, i) => (i === cible.note ? nouvelle : x));
  return avecVoix(piece, { ...curseur, mesure: cible.mesure }, nouvelleVoix);
}

/** Dépile la dernière hauteur d'un ACCORD (2+ hauteurs) ; note simple = pièce inchangée. */
export function retirerDerniereHauteur(piece: Piece, curseur: Curseur): Piece {
  const cible = cibleAccord(piece, curseur);
  if (!cible) return piece;
  const voix = piece.mesures[cible.mesure].voix[curseur.voix];
  const ev = voix[cible.note] as Note;
  if (ev.hauteurs.length < 2) return piece;
  const nouvelle: Note = { ...ev, hauteurs: ev.hauteurs.slice(0, -1) };
  const nouvelleVoix = voix.map((x, i) => (i === cible.note ? nouvelle : x));
  return avecVoix(piece, { ...curseur, mesure: cible.mesure }, nouvelleVoix);
}
```

- [ ] **Step 4 : Lancer — passe** — Run: `npx vitest run src/lib/composition-edition.test.ts` → PASS.

- [ ] **Step 5 : Commit**

```bash
git add src/lib/composition-edition.ts src/lib/composition-edition.test.ts
git commit -m "feat(compo): empilerHauteur / retirerDerniereHauteur — l'accord dans une voix (pur)"
```

---

## Task 2 : l'accord est un BLOC — transformations sur toutes les hauteurs

**Files:**
- Modify: `src/lib/composition-edition.ts` (lignes ~161-200 : `avecHauteurSelectionnee`, `transposerDegre`, `transposerOctave`, `remplacerHauteur`)
- Test: `src/lib/composition-edition.test.ts`

- [ ] **Step 1 : Écrire les tests**

Ajouter au `describe` de la Task 1 (ou dans un `describe` frère « le bloc accord ») :

```ts
  it("transposerDegre déplace TOUTES les hauteurs", () => {
    const accord = empilerHauteur(pieceBasse([noteSimple("C", 3)]), selection, "E", 0, 3);
    const p = transposerDegre(accord, selection, 1);
    expect((p.mesures[0].voix.basse[0] as Note).hauteurs.map((h) => h.lettre)).toEqual(["D", "F"]);
  });
  it("transposerOctave : bloc soudé — si UNE hauteur sort des bornes, rien ne bouge", () => {
    const grave = empilerHauteur(pieceBasse([noteSimple("C", 1)]), selection, "G", 0, 5);
    expect(transposerOctave(grave, selection, -1)).toBe(grave); // C1 sortirait (octave 0)
    const ok = transposerOctave(grave, selection, 1);
    expect((ok.mesures[0].voix.basse[0] as Note).hauteurs.map((h) => h.octave)).toEqual([2, 6]);
  });
  it("remplacerHauteur remplace le bloc par une note SIMPLE (octave de la 1re hauteur)", () => {
    const accord = empilerHauteur(pieceBasse([noteSimple("C", 3)]), selection, "E", 0, 4);
    const p = remplacerHauteur(accord, selection, "D", 1);
    const n = p.mesures[0].voix.basse[0] as Note;
    expect(n.hauteurs).toEqual([{ lettre: "D", alteration: 1, octave: 3 }]);
  });
```

- [ ] **Step 2 : Lancer — échoue** — Run: `npx vitest run src/lib/composition-edition.test.ts` → FAIL (les transformations ne touchent que `hauteurs[0]`).

- [ ] **Step 3 : Implémenter**

Dans `composition-edition.ts`, REMPLACER le helper `avecHauteurSelectionnee` et les trois
fonctions qui l'utilisent par :

```ts
/**
 * Applique une transformation à la NOTE sélectionnée (le bloc entier — accord compris).
 * `f` peut renvoyer `null` pour refuser la transformation : la pièce ne change pas.
 * Sans effet en "fin" ou sur un silence.
 */
function avecNoteSelectionnee(
  piece: Piece, curseur: Curseur, f: (n: Note) => Note | null,
): Piece {
  if (curseur.note === "fin") return piece;
  const voix = piece.mesures[curseur.mesure].voix[curseur.voix];
  const ev = voix[curseur.note];
  if (!ev || ev.type !== "note") return piece;
  const nouvelle = f(ev);
  if (!nouvelle) return piece;
  const nouvelleVoix = voix.map((x, i) => (i === curseur.note ? nouvelle : x));
  return avecVoix(piece, curseur, nouvelleVoix);
}

/**
 * Transpose la note sélectionnée d'un DEGRÉ diatonique — TOUTES les hauteurs du bloc : la lettre
 * avance/recule dans l'échelle, l'octave suit à la jonction B↔C, l'altération repasse à bécarre.
 */
export function transposerDegre(piece: Piece, curseur: Curseur, sens: -1 | 1): Piece {
  return avecNoteSelectionnee(piece, curseur, (ev) => ({
    ...ev,
    hauteurs: ev.hauteurs.map((h) => {
      const i = ECHELLE_LETTRES.indexOf(h.lettre);
      const j = i + sens;
      return {
        lettre: ECHELLE_LETTRES[(j + 7) % 7],
        alteration: 0,
        octave: h.octave + (j < 0 ? -1 : j > 6 ? 1 : 0),
      };
    }),
  }));
}

/** Transpose la note sélectionnée d'une OCTAVE — bloc SOUDÉ : si une hauteur sort de 1..7, rien ne bouge. */
export function transposerOctave(piece: Piece, curseur: Curseur, sens: -1 | 1): Piece {
  return avecNoteSelectionnee(piece, curseur, (ev) =>
    ev.hauteurs.some((h) => h.octave + sens < 1 || h.octave + sens > 7)
      ? null
      : { ...ev, hauteurs: ev.hauteurs.map((h) => ({ ...h, octave: h.octave + sens })) },
  );
}

/**
 * Remplace la note sélectionnée par une note SIMPLE (lettre + altération, octave de la
 * 1re hauteur) — sur un accord, c'est le geste de correction : le bloc entier cède la place.
 */
export function remplacerHauteur(
  piece: Piece, curseur: Curseur, lettre: LettreNote, alteration: number,
): Piece {
  return avecNoteSelectionnee(piece, curseur, (ev) => ({
    ...ev,
    hauteurs: [{ lettre, alteration, octave: ev.hauteurs[0].octave }],
  }));
}
```

(`avecHauteurSelectionnee` disparaît — vérifier qu'aucun autre appelant n'existe : `grep -n "avecHauteurSelectionnee" src/`.)

- [ ] **Step 4 : Lancer — passe** — Run: `npx vitest run src/lib/composition-edition.test.ts` → PASS.
  Les tests EXISTANTS de transposition/remplacement (notes simples) doivent passer inchangés :
  pour une note à une hauteur, le comportement est identique — à une exception près :
  `transposerOctave` aux bornes renvoie désormais la MÊME pièce (avant : nouvelle pièce à valeurs
  identiques). Si un test existant échoue UNIQUEMENT sur cette identité d'objet, adapter ce test
  (le nouveau contrat est plus propre) et le signaler dans le rapport ; tout autre échec → STOP.

- [ ] **Step 5 : Commit**

```bash
git add src/lib/composition-edition.ts src/lib/composition-edition.test.ts
git commit -m "feat(compo): l'accord est un bloc — transpositions et correction sur toutes les hauteurs"
```

---

## Task 3 : appariement multi-têtes — lib + StudioScore + atelier

**Files:**
- Modify: `src/lib/composition-edition.ts` (`onsetMsMidiDeSelection` ~271-281, `trouverPosition` ~287-300)
- Modify: `src/components/StudioScore.tsx` (`StudioScoreRef`, `surlignerSelection`, `surlignerFautes`)
- Modify: `src/components/AtelierComposition.tsx` (les deux effets de surlignage)
- Test: `src/lib/composition-edition.test.ts`

- [ ] **Step 1 : Écrire les tests**

Ajouter dans `composition-edition.test.ts` :

```ts
describe("appariement multi-têtes (accords)", () => {
  it("onsetMsMidiDeSelection renvoie TOUS les midis du bloc", () => {
    const accord = empilerHauteur(pieceBasse([noteSimple("C", 3)]), selection, "G", 0, 3);
    const s = onsetMsMidiDeSelection(accord, selection);
    expect(s?.midis).toEqual([48, 55]); // Do3, Sol3
  });
  it("trouverPosition retrouve le bloc par une hauteur EMPILÉE", () => {
    const accord = empilerHauteur(pieceBasse([noteSimple("C", 3)]), selection, "G", 0, 3);
    expect(trouverPosition(accord, 0, 55)).toEqual({ mesure: 0, voix: "basse", note: 0 }); // par le Sol3
    expect(trouverPosition(accord, 0, 48)).toEqual({ mesure: 0, voix: "basse", note: 0 }); // par le Do3
  });
});
```

Adapter les tests EXISTANTS de `onsetMsMidiDeSelection` : `midi: X` devient `midis: [X]`
(les lister : `grep -n "onsetMsMidiDeSelection" src/lib/composition-edition.test.ts`).

- [ ] **Step 2 : Lancer — échoue** — Run: `npx vitest run src/lib/composition-edition.test.ts` → FAIL.

- [ ] **Step 3 : Implémenter la lib**

Dans `composition-edition.ts` :

```ts
/** (onsetMs, midis) de la note sélectionnée — TOUS les midis du bloc, pour surligner chaque tête. */
export function onsetMsMidiDeSelection(
  piece: Piece, curseur: Curseur,
): { onsetMs: number; midis: number[] } | null {
  if (curseur.note === "fin") return null;
  const ev = piece.mesures[curseur.mesure].voix[curseur.voix][curseur.note];
  if (!ev || ev.type !== "note") return null;
  return {
    onsetMs: onsetTicks(piece, curseur.mesure, curseur.voix, curseur.note) * MS_PAR_TICK,
    midis: ev.hauteurs.map(midiDeHauteur),
  };
}
```

Dans `trouverPosition`, remplacer la comparaison sur `hauteurs[0]` :

```ts
      if (!ev.hauteurs.some((h) => midiDeHauteur(h) === midi)) continue;
```

(à la place de `if (midiDeHauteur(ev.hauteurs[0]) !== midi) continue;`).

- [ ] **Step 4 : Lancer — passe** — Run: `npx vitest run src/lib/composition-edition.test.ts` → PASS.

- [ ] **Step 5 : StudioScore — surlignage par ensembles de midis**

Dans `src/components/StudioScore.tsx` :

Interface (remplacer les deux signatures) :

```ts
  /** Surligne UNE note (toutes les têtes d'un accord) par (onsetMs, midis) ; `null` efface. */
  surlignerSelection(sel: { onsetMs: number; midis: number[] } | null): void;
  /** Surligne un ensemble de notes fautives (rouge = faute, orange = avertissement) ; [] efface. */
  surlignerFautes(fautes: Array<{ onsetMs: number; midis: number[]; severite: "faute" | "avertissement" }>): void;
```

Dans `surlignerSelection`, remplacer la comparaison `midi === sel.midi` par
`midi !== undefined && sel.midis.includes(midi)`. Dans `surlignerFautes`, remplacer
`if (midi !== f.midi) continue;` par `if (midi === undefined || !f.midis.includes(midi)) continue;`.
Rien d'autre ne change (mêmes classes CSS, même effacement).

- [ ] **Step 6 : Atelier — suivre les nouvelles formes**

Dans `src/components/AtelierComposition.tsx` :
- L'effet de sélection (`scoreRef.current?.surlignerSelection(onsetMsMidiDeSelection(piece, curseur))`)
  ne change PAS (la forme transite telle quelle).
- L'effet des fautes : le type du filtre change —

```ts
        .filter((x): x is { onsetMs: number; midis: number[]; severite: "faute" | "avertissement" } => x !== null),
```

(le `map` au-dessus est inchangé : `{ ...s, severite: f.severite }` porte désormais `midis`).

- [ ] **Step 7 : Vérifier le build** — Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build` → succès.
  (`surlignerSelection`/`surlignerFautes` ne sont consommés QUE par l'atelier ; le Studio n'utilise
  que `surlignerATemps`, inchangé.)

- [ ] **Step 8 : Suite complète** — Run: `npx vitest run` → tout vert.

- [ ] **Step 9 : Commit**

```bash
git add src/lib/composition-edition.ts src/lib/composition-edition.test.ts src/components/StudioScore.tsx src/components/AtelierComposition.tsx
git commit -m "feat(compo): appariement et surlignage multi-tetes — le clic et la selection voient tout l'accord"
```

---

## Task 4 : l'interaction — Maj+lettre, bascule « Accord », Retour arrière qui dépile

**Files:**
- Modify: `src/components/AtelierComposition.tsx`

- [ ] **Step 1 : Imports et état**

Compléter l'import de `@/lib/composition-edition` avec `empilerHauteur`, `retirerDerniereHauteur`,
`cibleAccord`. Ajouter l'état (près de `triolet`) :

```ts
  const [accord, setAccord] = useState(false);
```

- [ ] **Step 2 : Le callback `empiler`**

Ajouter après `poserNote` :

```ts
  // ── Empiler une hauteur (accord dans la voix) ────────────────────────────────
  // Maj+lettre au clavier, ou la bascule « Accord » pour les boutons. La hauteur
  // s'ajoute à la note sélectionnée — ou à la dernière note de la voix en mode
  // ajout — à l'octave courante de la voix. L'accord COMPLET est rejoué.
  const empiler = useCallback(
    (lettre: LettreNote) => {
      const oct = octaves[curseur.voix];
      const np = empilerHauteur(piece, curseur, lettre, alteration, oct);
      if (np === piece) return;
      setPiece(np);
      const cible = cibleAccord(np, curseur);
      if (cible) {
        const ev = np.mesures[cible.mesure].voix[curseur.voix][cible.note] as Note;
        pianoRef.current?.playVoicing(
          ev.hauteurs.map((h) => specHauteur(h.lettre, h.alteration, h.octave)),
          { duration: 0.5, velocity: 0.8 },
        );
      }
    },
    [piece, curseur, octaves, alteration],
  );
```

- [ ] **Step 3 : Retour arrière qui dépile**

Remplacer `effacerContextuel` :

```ts
  const effacerContextuel = useCallback(() => {
    // Un accord fond hauteur par hauteur avant que la note ne disparaisse.
    const depile = retirerDerniereHauteur(piece, curseur);
    if (depile !== piece) { setPiece(depile); return; }
    if (curseur.note !== "fin") {
      const r = supprimerNote(piece, curseur);
      setPiece(r.piece); setCurseur(r.curseur);
    } else {
      effacerDerniere();
    }
  }, [piece, curseur, effacerDerniere]);
```

- [ ] **Step 4 : La bascule « Accord » et les boutons de notes**

Dans la palette, à côté du bouton Triolet, ajouter :

```tsx
          <button
            onClick={() => setAccord((a) => !a)}
            style={accord ? btnOn : btn}
            title="Les notes s'empilent sur la dernière note posée (Maj+lettre au clavier)"
          >
            {accord ? "♪ Accord actif" : "Accord"}
          </button>
```

Les BOUTONS de notes empilent quand la bascule est active : dans la rangée `NOTES.map(...)`,
remplacer `onClick={() => poserNote(lettre)}` par
`onClick={() => (accord ? empiler(lettre) : poserNote(lettre))}`.

Dans `toutEffacer`, ajouter `setAccord(false);`.

Dans la barre du sélecteur de voix, à côté du rappel triolet existant
(`{triolet && (<span …>Triolet : entrez les trois notes du groupe</span>)}`), ajouter le même
rappel pour la bascule :

```tsx
          {accord && (
            <span style={{ fontSize: 12, color: "#BA7517", fontWeight: 600 }}>
              Accord : les notes s&apos;empilent sur la dernière posée
            </span>
          )}
```

- [ ] **Step 5 : Le clavier (Maj+lettre)**

Dans `actionsRef` (les DEUX lignes : déclaration + réaffectation), ajouter `empiler` :

```ts
  const actionsRef = useRef({ poserNote, empiler, poserSilence, effacerContextuel, naviguerNote, transposer, setBase });
  actionsRef.current = { poserNote, empiler, poserSilence, effacerContextuel, naviguerNote, transposer, setBase };
```

Dans le handler `onKeyDown`, la branche des lettres devient :

```ts
      if (TOUCHE_LETTRE[k]) {
        e.preventDefault();
        if (e.shiftKey) a.empiler(TOUCHE_LETTRE[k]);
        else a.poserNote(TOUCHE_LETTRE[k]);
        return;
      }
```

- [ ] **Step 6 : L'aide clavier**

Dans le bloc « Aide clavier », compléter la ligne :

```tsx
          <strong style={{ color: "#777" }}>Clavier :</strong> a…g = poser/corriger la note · Maj+a…g = empiler (accord) · ← → = naviguer entre les notes · ↑ ↓ = transposer (Maj = octave) · 1–5 = durée · R = silence · Retour arrière = effacer (un accord se dépile hauteur par hauteur).
```

- [ ] **Step 7 : Vérifier le build** — Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build` → succès.

- [ ] **Step 8 : Commit**

```bash
git add src/components/AtelierComposition.tsx
git commit -m "feat(compo): atelier — Maj+lettre et bascule Accord empilent, Retour arriere depile"
```

---

## Task 5 : `conduite-voix.ts` — les hauteurs extrêmes

**Files:**
- Modify: `src/lib/conduite-voix.ts`
- Test: `src/lib/conduite-voix.test.ts`

- [ ] **Step 1 : Adapter les tests existants + écrire les nouveaux**

Dans `src/lib/conduite-voix.test.ts` : remplacer TOUTES les lectures `sons.<voix>!.midi` par
`sons.<voix>!.haut` (les lister : `grep -n "\.midi" src/lib/conduite-voix.test.ts`) — pour des
notes simples `haut === bas`, les valeurs attendues ne changent pas. Puis ajouter :

```ts
/** Note à PLUSIEURS hauteurs (accord empilé), pour les tests d'extrêmes. */
function accord(hs: Array<[Note["hauteurs"][0]["lettre"], number]>, base: Note["duree"]["base"]): Note {
  return {
    type: "note",
    hauteurs: hs.map(([lettre, octave]) => ({ lettre, alteration: 0, octave })),
    duree: { base, points: 0 },
  };
}

describe("detecterFautes — accords empilés (hauteurs extrêmes)", () => {
  it("verticalites expose haut/bas/midis", () => {
    const v = verticalites(piece1({ basse: [accord([["C", 3], ["G", 3]], "ronde")] }));
    expect(v[0].sons.basse).toMatchObject({ haut: 55, bas: 48, midis: [48, 55] });
  });
  it("croisement sur extrêmes ADJACENTS : le grave du soprano sous l'aigu de l'alto", () => {
    // Soprano = accord Mi4+Do5 (bas = 64), Alto = La4 (69) : 64 < 69 → croisement.
    const f = detecterFautes(piece1({
      soprano: [accord([["E", 4], ["C", 5]], "ronde")],
      alto: [note("A", 4, "ronde")],
    }));
    expect(f.some((x) => x.type === "croisement")).toBe(true);
  });
  it("pas de faux croisement quand les extrêmes sont bien ordonnés", () => {
    // Soprano = Sol4+Do5 (bas = 67), Alto = Mi4 (64) : 67 > 64 → rien.
    const f = detecterFautes(piece1({
      soprano: [accord([["G", 4], ["C", 5]], "ronde")],
      alto: [note("E", 4, "ronde")],
    }));
    expect(f.some((x) => x.type === "croisement")).toBe(false);
  });
  it("parallèles sur la LIGNE extérieure : quintes S–B malgré une hauteur interne", () => {
    // S : Sol4→La4 (haut). B : accord Do3+Mi3 → accord Ré3+Fa3 : la LIGNE de basse est
    // le bas (Do3→Ré3). Sol4/Do3 = quinte, La4/Ré3 = quinte, même sens → parallèles.
    const f = detecterFautes(piece2({
      soprano: [note("G", 4, "ronde"), note("A", 4, "ronde")],
      basse: [accord([["C", 3], ["E", 3]], "ronde"), accord([["D", 3], ["F", 3]], "ronde")],
    }));
    expect(f.some((x) => x.type === "quintes-paralleles")).toBe(true);
  });
  it("tessiture : une hauteur EMPILÉE hors ambitus est signalée", () => {
    // Basse Do3 (dans l'ambitus) + Do5 empilé (72 > 60) → tessiture.
    const f = detecterFautes(piece1({ basse: [accord([["C", 3], ["C", 5]], "ronde")] }));
    expect(f.some((x) => x.type === "tessiture")).toBe(true);
  });
});
```

(Les helpers `piece1`, `piece2`, `note` existent déjà dans ce fichier de test.)

- [ ] **Step 2 : Lancer — échoue** — Run: `npx vitest run src/lib/conduite-voix.test.ts` → FAIL (`haut` inconnu).

- [ ] **Step 3 : Implémenter**

Dans `src/lib/conduite-voix.ts` :

1. `SonVoix` devient :

```ts
/** Ce qui sonne dans une voix à un instant : les EXTRÊMES du bloc, et tout pour la tessiture. */
export interface SonVoix {
  haut: number;        // midi le plus aigu (== bas pour une note simple)
  bas: number;         // midi le plus grave
  midis: number[];     // toutes les hauteurs, dans l'ordre d'empilement
  position: Curseur;
  attaque: boolean;
}
```

2. Dans `verticalites`, l'interface interne et la construction :

```ts
  interface NoteAbs { onset: number; fin: number; haut: number; bas: number; midis: number[]; position: Curseur; }
```

et, dans la boucle (à la place du `midi: midiDeHauteur(ev.hauteurs[0])`) :

```ts
        if (ev.type === "note") {
          const midis = ev.hauteurs.map(midiDeHauteur);
          notes.push({
            onset: t, fin: t + d,
            haut: Math.max(...midis), bas: Math.min(...midis), midis,
            position: { mesure, voix, note },
          });
          attaques.add(t);
        }
```

puis `sons[voix] = { haut: n.haut, bas: n.bas, midis: n.midis, position: n.position, attaque: n.onset === onset };`

3. Dans `detecterFautes` :

- **Tessiture** — remplacer la lecture d'une seule hauteur par toutes (une seule faute par note) :

```ts
        if (ev.type !== "note") return;
        const hors = ev.hauteurs.some((h) => {
          const midi = midiDeHauteur(h);
          return midi < AMBITUS[voix].min || midi > AMBITUS[voix].max;
        });
        if (hors) {
          fautes.push({ type: "tessiture", severite: "avertissement", message: `${NOM[voix]} hors tessiture`, mesure, positions: [{ mesure, voix, note }] });
        }
```

- **Croisement / écart** (extrêmes ADJACENTS — `a` est la voix haute, `b` la basse) :

```ts
      if (a.bas < b.haut) {
        fautes.push({ type: "croisement", ... });          // message et positions inchangés
      }
      if ((haut === "soprano" || haut === "alto") && a.bas - b.haut > 12) {
        fautes.push({ type: "ecart", ... });               // message et positions inchangés
      }
```

- **Parallèles / directes** — la LIGNE de chaque voix est son extrême extérieur. Ajouter le
  helper (près de `PAIRES`) :

```ts
/** La LIGNE mélodique d'une voix : son extrême EXTÉRIEUR — le grave pour la basse, l'aigu sinon. */
function ligne(voix: NomVoix, son: SonVoix): number {
  return voix === "basse" ? son.bas : son.haut;
}
```

Dans la boucle des parallèles, remplacer les lectures `.midi` :

```ts
      const d1 = ligne(v1, c1) - ligne(v1, p1), d2 = ligne(v2, c2) - ligne(v2, p2);
      ...
      const avant = Math.abs(ligne(v1, p1) - ligne(v2, p2)) % 12;
      const apres = Math.abs(ligne(v1, c1) - ligne(v2, c2)) % 12;
```

Dans les directes S–B : `ds = cs.haut - ps.haut`, `db = cb.bas - pb.bas`,
`avant = Math.abs(ps.haut - pb.bas) % 12`, `apres = Math.abs(cs.haut - cb.bas) % 12`.

- [ ] **Step 4 : Lancer — passe** — Run: `npx vitest run src/lib/conduite-voix.test.ts` → PASS
  (les verdicts existants sur notes simples ne changent pas). Tout autre échec → STOP.

- [ ] **Step 5 : Commit**

```bash
git add src/lib/conduite-voix.ts src/lib/conduite-voix.test.ts
git commit -m "feat(compo): conduite-voix — les accords empiles controles par leurs hauteurs extremes"
```

---

## Task 6 : l'analyse voit l'accord empilé + vérification finale

**Files:**
- Test: `src/lib/analyse-resultat.test.ts` (ajout)

- [ ] **Step 1 : Écrire le test d'aller-retour**

Dans le `describe("aller-retour atelier …")` de `src/lib/analyse-resultat.test.ts`, ajouter :

```ts
  it("un accord EMPILÉ dans une voix traverse l'export et se chiffre", () => {
    // Basse = Do3+Sol3 empilés, soprano = Mi4 : trois sons, un accord de Do (I).
    const doGrave: Note = {
      type: "note",
      hauteurs: [{ lettre: "C", alteration: 0, octave: 3 }, { lettre: "G", alteration: 0, octave: 3 }],
      duree: { base: "ronde", points: 0 },
    };
    const piece: Piece = {
      armure: 0, chiffrage: { temps: 4, unite: 4 },
      mesures: [{ voix: { soprano: [ronde("E", 4)], alto: [], tenor: [], basse: [doGrave] } }],
    };
    const a = analyserPartition(parseMusicXML(pieceVersMusicXML(piece)), "");
    expect(a.mesures[0].accords[0]?.degreeNum).toBe(1);
  });
```

(Attention : `ronde` est déclaré DANS le `describe` existant — placer le test dans ce même bloc.)

- [ ] **Step 2 : Lancer — passe directement** — Run: `npx vitest run src/lib/analyse-resultat.test.ts` → PASS
  (l'export `<chord/>` et la chaîne existent déjà ; ce test VERROUILLE le comportement).
  S'il échoue, c'est une vraie découverte : STOP et rapporter.

- [ ] **Step 3 : Build + suite complète**

Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build && npx vitest run`
Expected: build OK, tous les tests verts.

- [ ] **Step 4 : Commit**

```bash
git add src/lib/analyse-resultat.test.ts
git commit -m "test(compo): l'accord empile traverse export et analyse (verrou)"
```

- [ ] **Step 5 : Contrôle manuel (Dany, en production, Pro)**

Sur `/composer` : poser Do à la basse, Maj+e puis Maj+g → l'accord Do-Mi-Sol se grave et sonne
entier ; cliquer une tête empilée sélectionne le bloc (toutes les têtes en violet) ; ↑ transpose
les trois sons ; Retour arrière dépile Sol, puis Mi, puis supprime Do ; la bascule « Accord »
fait pareil à la souris ; l'analyse chiffre l'accord ; une hauteur empilée hors tessiture
s'affiche en orange. Vérifier l'appariement Verovio au clic sur une tête INTERNE de l'accord
(risque connu, comme 2d : WASM non couvert par les tests).

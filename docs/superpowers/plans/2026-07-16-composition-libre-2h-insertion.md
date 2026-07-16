# Insertion au milieu (2h) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Intercaler une note ou un silence AVANT la note sélectionnée dans l'atelier `/composer` (bascule « Insérer » + touche I), avec refus local à la mesure et une sélection qui reste sur la même note pour enchaîner les insertions.

**Architecture:** Une fonction pure `insererAvant` dans `composition-edition.ts` (splice immuable + curseur décalé de +1, refus si la durée ne tient pas dans la mesure) ; dans l'atelier, un état `insertion` EXCLUSIF de la bascule `accord`, branché dans `poserNote`/`poserSilence` (le mode se lit à l'intérieur, les boutons et le clavier ne changent pas de routage), touche I, bouton et rappels. Gravure, analyse, conduite, lecture et surlignages suivent sans travail (recalcul par frappe).

**Tech Stack:** TypeScript strict, React 19, vitest.

---

## Notes transverses (à lire avant de commencer)

- **Ne JAMAIS `npx tsc --noEmit`** (OOM). Vérif types via `NODE_OPTIONS="--max-old-space-size=8192" npm run build`.
- Tests : `npx vitest run <fichier>` ; suite complète `npx vitest run` (388 tests verts au départ).
- `Curseur = { mesure, voix, note: number | "fin" }` ; helpers dispo dans
  `composition-edition.ts` : `avecVoix` (privé), `dureePlacee`, `capaciteMesure`,
  `dureeEnDivisions` (importé de piece-model).
- Le fichier de test `composition-edition.test.ts` contient déjà (describe « empilerHauteur / … »)
  les helpers `pieceBasse(evs)`, `noteSimple(lettre, octave)` et les curseurs
  `selection`/`ajout` — réutilisables.
- Ancrages atelier (`src/components/AtelierComposition.tsx`, état post-correctifs) :
  `const [accord, setAccord] = useState(false);` (l. ~134), `poserNote` (l. ~193, branche
  sélection = correction), `poserSilence` (l. ~242), `toutEffacer` (l. ~313, contient déjà
  `setAccord(false)`), `actionsRef` (2 lignes, l. ~389-390), switch clavier avec
  `case "r": case "R"` (l. ~421), bouton Accord `onClick={() => setAccord((a) => !a)}`
  (l. ~499), rappels `{triolet && …}` / `{accord && …}` dans la barre de voix, bloc
  « Aide clavier » en bas.

---

## Task 1 : `insererAvant` — l'édition pure

**Files:**
- Modify: `src/lib/composition-edition.ts`
- Test: `src/lib/composition-edition.test.ts`

- [ ] **Step 1 : Écrire les tests**

Ajouter dans `src/lib/composition-edition.test.ts` (describe frère, en réutilisant `pieceBasse`,
`noteSimple` — les redéclarer localement si la portée l'exige, à l'identique) :

```ts
describe("insererAvant — intercaler avant la sélection", () => {
  const surD: Curseur = { mesure: 0, voix: "basse", note: 1 };

  it("insère avant la note sélectionnée et la sélection SUIT (+1)", () => {
    const p = pieceBasse([noteSimple("C", 3), noteSimple("D", 3)]);
    const r = insererAvant(p, surD, noteSimple("E", 3));
    expect(r.piece.mesures[0].voix.basse.map((e) => (e as Note).hauteurs[0].lettre)).toEqual(["C", "E", "D"]);
    expect(r.curseur).toEqual({ mesure: 0, voix: "basse", note: 2 }); // toujours le Ré
  });
  it("insertions consécutives : la sélection reste sur la note d'origine", () => {
    const p = pieceBasse([noteSimple("C", 3), noteSimple("D", 3)]);
    const r1 = insererAvant(p, surD, noteSimple("E", 3));
    const r2 = insererAvant(r1.piece, r1.curseur, noteSimple("F", 3));
    expect(r2.piece.mesures[0].voix.basse.map((e) => (e as Note).hauteurs[0].lettre)).toEqual(["C", "E", "F", "D"]);
    expect(r2.curseur.note).toBe(3);
  });
  it("refuse si la durée ne tient pas dans la mesure (mêmes références)", () => {
    const pleine = pieceBasse([noteSimple("C", 3), noteSimple("D", 3), noteSimple("E", 3), noteSimple("F", 3)]); // 4 noires en 4/4
    const r = insererAvant(pleine, { mesure: 0, voix: "basse", note: 3 }, noteSimple("G", 3));
    expect(r.piece).toBe(pleine);
    expect(r.curseur).toEqual({ mesure: 0, voix: "basse", note: 3 });
  });
  it("avant la PREMIÈRE note : la nouvelle devient l'index 0", () => {
    const p = pieceBasse([noteSimple("C", 3)]);
    const r = insererAvant(p, { mesure: 0, voix: "basse", note: 0 }, noteSimple("B", 2));
    expect(r.piece.mesures[0].voix.basse.map((e) => (e as Note).hauteurs[0].lettre)).toEqual(["B", "C"]);
    expect(r.curseur.note).toBe(1);
  });
  it("avant un accord : le bloc n'est pas touché", () => {
    const accord = empilerHauteur(pieceBasse([noteSimple("C", 3)]), { mesure: 0, voix: "basse", note: 0 }, "G", 0, 3);
    const r = insererAvant(accord, { mesure: 0, voix: "basse", note: 0 }, noteSimple("D", 3));
    expect((r.piece.mesures[0].voix.basse[1] as Note).hauteurs).toHaveLength(2);
  });
  it("un SILENCE s'intercale comme une note", () => {
    const p = pieceBasse([noteSimple("C", 3), noteSimple("D", 3)]);
    const silence: Silence = { type: "silence", duree: { base: "noire", points: 0 } };
    const r = insererAvant(p, surD, silence);
    expect(r.piece.mesures[0].voix.basse[1].type).toBe("silence");
    expect(r.curseur.note).toBe(2);
  });
  it("inerte en mode ajout et sur pièce vide (mêmes références)", () => {
    const p = pieceBasse([noteSimple("C", 3)]);
    const rFin = insererAvant(p, { mesure: 0, voix: "basse", note: "fin" }, noteSimple("E", 3));
    expect(rFin.piece).toBe(p);
    const vide = pieceBasse([]);
    const rVide = insererAvant(vide, { mesure: 0, voix: "basse", note: "fin" }, noteSimple("E", 3));
    expect(rVide.piece).toBe(vide);
  });
  it("invariant d'appariement : la sélection pointe la même note, décalée de la durée insérée", () => {
    const p = pieceBasse([noteSimple("C", 3), noteSimple("D", 3)]);
    const avant = onsetMsMidiDeSelection(p, surD)!;
    const r = insererAvant(p, surD, noteSimple("E", 3));
    const apres = onsetMsMidiDeSelection(r.piece, r.curseur)!;
    expect(apres.midis).toEqual(avant.midis);                       // toujours le Ré (62)
    expect(apres.onsetMs).toBeCloseTo(avant.onsetMs + 48 * MS_PAR_TICK); // décalé d'une noire
  });
});
```

Compléter les imports du fichier si besoin (`insererAvant`, `MS_PAR_TICK` — `Silence`, `Note`,
`Curseur`, `empilerHauteur`, `onsetMsMidiDeSelection` y sont déjà).

- [ ] **Step 2 : Lancer — échoue** — Run: `npx vitest run src/lib/composition-edition.test.ts` → FAIL (`insererAvant` absent).

- [ ] **Step 3 : Implémenter**

Dans `src/lib/composition-edition.ts`, ajouter après `inserer` (l. ~119) :

```ts
/**
 * Insère un événement (note ou silence) juste AVANT la note sélectionnée, si sa durée
 * tient dans la mesure (refus LOCAL : rien ne franchit la barre — les événements
 * suivants de la mesure se décalent). Le curseur SUIT la note sélectionnée — son index
 * glisse de +1 — pour enchaîner les insertions. Sans effet en mode ajout ("fin"), sur
 * un silence pointé ou si ça ne tient pas.
 */
export function insererAvant(
  piece: Piece, curseur: Curseur, evenement: Evenement,
): { piece: Piece; curseur: Curseur } {
  if (curseur.note === "fin") return { piece, curseur };
  const voix = piece.mesures[curseur.mesure].voix[curseur.voix];
  const ev = voix[curseur.note];
  if (!ev || ev.type !== "note") return { piece, curseur };
  const capacite = capaciteMesure(piece.chiffrage);
  if (dureePlacee(voix) + dureeEnDivisions(evenement.duree) > capacite) return { piece, curseur };

  const nouvelleVoix = [...voix.slice(0, curseur.note), evenement, ...voix.slice(curseur.note)];
  return {
    piece: avecVoix(piece, curseur, nouvelleVoix),
    curseur: { ...curseur, note: curseur.note + 1 },
  };
}
```

- [ ] **Step 4 : Lancer — passe** — Run: `npx vitest run src/lib/composition-edition.test.ts` → PASS (tous, existants compris).

- [ ] **Step 5 : Commit**

```bash
git add src/lib/composition-edition.ts src/lib/composition-edition.test.ts
git commit -m "feat(compo): insererAvant — intercaler note ou silence avant la selection (pur)"
```

---

## Task 2 : l'atelier — bascule « Insérer », touche I, lettres et silence

**Files:**
- Modify: `src/components/AtelierComposition.tsx`

- [ ] **Step 1 : Import, état, bascules exclusives**

Compléter l'import de `@/lib/composition-edition` avec `insererAvant`. Ajouter l'état (après
`accord`) et remplacer les bascules par des versions EXCLUSIVES (une lettre ne peut pas avoir
deux sens) :

```ts
  const [insertion, setInsertion] = useState(false);
```

```ts
  // Insérer et Accord sont EXCLUSIVES : chacune éteint l'autre en s'activant.
  const basculerAccord = useCallback(() => { setInsertion(false); setAccord((a) => !a); }, []);
  const basculerInsertion = useCallback(() => { setAccord(false); setInsertion((i) => !i); }, []);
```

(Placer ces deux callbacks près de `choisirTonalite`.) Dans le JSX, le bouton Accord passe de
`onClick={() => setAccord((a) => !a)}` à `onClick={basculerAccord}`. Dans `toutEffacer`, ajouter
`setInsertion(false);` (à côté du `setAccord(false)` existant).

- [ ] **Step 2 : `poserNote` — la branche insertion**

Dans `poserNote`, AVANT la branche de correction existante (`if (curseur.note !== "fin") { ... remplacerHauteur ... }`),
insérer :

```ts
      // Mode insertion : la lettre s'INTERCALE avant la note sélectionnée (durée et
      // altération de la palette, octave de la voix, sans triolet — un membre de
      // groupe inséré isolément casserait le groupe).
      if (insertion && curseur.note !== "fin") {
        const oct = octaves[curseur.voix];
        const note: Note = { type: "note", hauteurs: [{ lettre, alteration, octave: oct }], duree: { base, points } };
        const r = insererAvant(piece, curseur, note);
        if (r.piece !== piece) {
          setPiece(r.piece);
          setCurseur(r.curseur);
          pianoRef.current?.playVoicing([specHauteur(lettre, alteration, oct)], { duration: 0.5, velocity: 0.8 });
        }
        return;
      }
```

Ajouter `insertion` aux dépendances du `useCallback` de `poserNote`.

- [ ] **Step 3 : `poserSilence` — la branche insertion**

Dans `poserSilence`, avant l'appel à `inserer` :

```ts
    // Mode insertion : le silence s'intercale avant la note sélectionnée.
    if (insertion && curseur.note !== "fin") {
      const r = insererAvant(piece, curseur, silence);
      if (r.piece !== piece) { setPiece(r.piece); setCurseur(r.curseur); }
      return;
    }
```

(La déclaration `const silence: Silence = ...` existe en tête du callback — placer la branche
juste après.) Ajouter `insertion` aux dépendances.

- [ ] **Step 4 : La touche I et le bouton**

Dans les DEUX lignes d'`actionsRef`, ajouter `basculerInsertion` :

```ts
  const actionsRef = useRef({ poserNote, empiler, poserSilence, effacerContextuel, naviguerNote, transposer, setBase, basculerInsertion });
  actionsRef.current = { poserNote, empiler, poserSilence, effacerContextuel, naviguerNote, transposer, setBase, basculerInsertion };
```

Dans le `switch` du clavier, ajouter (à côté de `case "r": case "R"`) :

```ts
        case "i": case "I": e.preventDefault(); a.basculerInsertion(); break;
```

Dans la palette, après le bouton Accord :

```tsx
          <button
            onClick={basculerInsertion}
            style={insertion ? btnOn : btn}
            title="La prochaine note se pose avant la note sélectionnée (touche I)"
          >
            {insertion ? "→| Insertion active" : "Insérer"}
          </button>
```

Dans la barre de voix, après le rappel `{accord && (…)}` :

```tsx
          {insertion && (
            <span style={{ fontSize: 12, color: "#BA7517", fontWeight: 600 }}>
              Insertion : les notes se posent avant la sélection
            </span>
          )}
```

Dans le bloc « Aide clavier », compléter la ligne (après « Maj+a…g = empiler (accord) ») avec
« · I = insérer avant la note sélectionnée ».

- [ ] **Step 5 : Vérifier le build** — Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build` → succès.

- [ ] **Step 6 : Suite complète** — Run: `npx vitest run` → tout vert (396 attendus : 388 + 8).

- [ ] **Step 7 : Commit**

```bash
git add src/components/AtelierComposition.tsx
git commit -m "feat(compo): atelier — bascule Inserer (touche I), notes et silences intercales avant la selection"
```

---

## Task 3 : Vérification finale

- [ ] **Step 1 : Build + tests complets**

Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build && npx vitest run`
Expected: build OK, tous les tests verts.

- [ ] **Step 2 : Contrôle manuel (Dany, en production, Pro)**

Sur `/composer` : écrire Do-Mi (noires) au soprano, sélectionner Mi (flèches ou clic), activer
« Insérer » (bouton ou touche I) → taper d → Do-Ré-Mi, la sélection toujours sur Mi ; taper
encore une lettre → elle s'intercale encore avant Mi ; remplir la mesure → l'insertion ne fait
plus rien (silencieux) ; désactiver → les lettres corrigent Mi comme avant ; R en mode insertion
pose un silence avant Mi ; activer Accord éteint Insérer et réciproquement.

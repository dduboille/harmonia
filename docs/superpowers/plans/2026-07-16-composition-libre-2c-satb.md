# Composition libre 2c — écriture SATB à quatre voix — Plan d'implémentation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Faire passer l'atelier `/composer` à la vraie écriture SATB : quatre voix nommées (S/A/T/B), rythmes indépendants, hampes séparées, voix vide masquée.

**Architecture :** Une refonte du socle. Le modèle passe de « deux portées, une voix » à « quatre voix nommées » ; l'export MusicXML émet jusqu'à deux voix par portée avec leurs hampes ; la logique d'édition opère par voix ; l'atelier gagne un sélecteur de voix. Le garde-fou reste l'aller-retour par `parseMusicXML`.

**Tech Stack :** TypeScript strict, vitest, Next.js 16, React 19. Aucune dépendance nouvelle.

**Spec :** `docs/superpowers/specs/2026-07-16-composition-libre-2c-satb-design.md`

**Contraintes d'environnement :**
- **NE JAMAIS lancer `npx tsc --noEmit`** : sature la mémoire. Contrôle d'intégration : `NODE_OPTIONS="--max-old-space-size=8192" npm run build`.
- Tests : `npx vitest run`. La suite compte **312 tests** avant ce chantier.
- TypeScript strict, pas de `any`. Commentaires et identifiants en **français**. Textes UI en français.

**Ce qui change (le socle 2a/2b, à faire évoluer de façon cohérente) :**
- `src/lib/piece-model.ts` — le modèle (`Mesure`).
- `src/lib/piece-vers-musicxml.ts` — l'export.
- `src/lib/composition-edition.ts` — l'édition.
- `src/components/AtelierComposition.tsx` — l'atelier.

Et leurs tests. **Ces trois libs sont couplées par le changement de forme de `Mesure` : le build ne passera qu'une fois les trois à jour.** On les fait donc ensemble (Task 1), puis l'UI (Task 2), puis la vérification.

---

## Task 1 : Les trois libs (modèle, export, édition)

**Files:**
- Modify: `src/lib/piece-model.ts` + `src/lib/piece-model.test.ts`
- Modify: `src/lib/piece-vers-musicxml.ts` + `src/lib/piece-vers-musicxml.test.ts`
- Modify: `src/lib/composition-edition.ts` + `src/lib/composition-edition.test.ts`

### 1a — le modèle

- [ ] **Step 1: Adapter `piece-model.ts`**

Remplacer l'interface `Mesure` et `pieceVierge`, ajouter les voix nommées :

```ts
export type NomVoix = "soprano" | "alto" | "tenor" | "basse";

/** L'ordre canonique des voix (haut → bas). */
export const ORDRE_VOIX: NomVoix[] = ["soprano", "alto", "tenor", "basse"];

/** Portée (1 = Sol, 2 = Fa) et sens de hampe de chaque voix (convention SATB). */
export const CONFIG_VOIX: Record<NomVoix, { portee: 1 | 2; hampe: "up" | "down" }> = {
  soprano: { portee: 1, hampe: "up" },
  alto:    { portee: 1, hampe: "down" },
  tenor:   { portee: 2, hampe: "up" },
  basse:   { portee: 2, hampe: "down" },
};

/** Une mesure porte les quatre voix nommées (chacune peut être vide). */
export interface Mesure {
  voix: Record<NomVoix, Voix>;
}
```

`pieceVierge()` — 8 mesures aux quatre voix VIDES (le modèle d'édition ne porte que les notes
posées ; les silences sont ajoutés au rendu) :

```ts
export function pieceVierge(): Piece {
  const mesureVide = (): Mesure => ({
    voix: { soprano: [], alto: [], tenor: [], basse: [] },
  });
  return {
    armure: 0,
    chiffrage: { temps: 4, unite: 4 },
    mesures: Array.from({ length: 8 }, mesureVide),
  };
}
```

- [ ] **Step 2: Adapter `piece-model.test.ts`**

Le test « pieceVierge — chaque mesure a deux portées » devient : chaque mesure a les quatre voix,
toutes vides. (Les tests de `dureeEnDivisions` ne changent pas.)

```ts
describe("pieceVierge — 8 mesures, Do majeur, 4/4", () => {
  it("a la bonne armure et le bon chiffrage", () => {
    const p = pieceVierge();
    expect(p.armure).toBe(0);
    expect(p.chiffrage).toEqual({ temps: 4, unite: 4 });
    expect(p.mesures).toHaveLength(8);
  });
  it("chaque mesure a les quatre voix, toutes vides", () => {
    for (const m of pieceVierge().mesures) {
      expect(Object.keys(m.voix).sort()).toEqual(["alto", "basse", "soprano", "tenor"]);
      for (const v of ["soprano", "alto", "tenor", "basse"] as const) {
        expect(m.voix[v]).toEqual([]);
      }
    }
  });
});
```

### 1b — l'édition

- [ ] **Step 3: Adapter `composition-edition.ts`**

Le curseur gagne la voix ; `inserer`/`effacer` opèrent sur la voix nommée ; ajouter `voixActives`.

```ts
import {
  dureeEnDivisions, DIVISIONS, ORDRE_VOIX,
  type Piece, type Voix, type Evenement, type Silence, type Duree, type NomVoix,
} from "./piece-model";

export interface Curseur {
  mesure: number;
  voix: NomVoix;
}

export function capaciteMesure(chiffrage: { temps: number; unite: number }): number {
  return (chiffrage.temps * DIVISIONS * 4) / chiffrage.unite;
}

export function dureePlacee(voix: Voix): number {
  return voix.reduce((t, ev) => t + dureeEnDivisions(ev.duree), 0);
}

// (SILENCES_STD et decouperEnSilences INCHANGÉS — cf. 2b.)

/** Les voix qui portent au moins une note quelque part dans la pièce. */
export function voixActives(piece: Piece): NomVoix[] {
  return ORDRE_VOIX.filter((v) =>
    piece.mesures.some((m) => m.voix[v].some((e) => e.type === "note")),
  );
}

/** Remplace une voix (mesure, voix nommée) sans muter la pièce. */
function avecVoix(piece: Piece, curseur: Curseur, voix: Voix): Piece {
  return {
    ...piece,
    mesures: piece.mesures.map((m, i) =>
      i === curseur.mesure ? { voix: { ...m.voix, [curseur.voix]: voix } } : m,
    ),
  };
}

export function inserer(
  piece: Piece, curseur: Curseur, evenement: Evenement,
): { piece: Piece; curseur: Curseur } {
  const capacite = capaciteMesure(piece.chiffrage);
  const voix = piece.mesures[curseur.mesure].voix[curseur.voix];
  const reste = capacite - dureePlacee(voix);
  if (dureeEnDivisions(evenement.duree) > reste) return { piece, curseur };

  const nouvelleVoix = [...voix, evenement];
  const nouvellePiece = avecVoix(piece, curseur, nouvelleVoix);
  const pleine = dureePlacee(nouvelleVoix) >= capacite;
  const curseurSuivant: Curseur =
    pleine && curseur.mesure + 1 < piece.mesures.length
      ? { mesure: curseur.mesure + 1, voix: curseur.voix }
      : curseur;
  return { piece: nouvellePiece, curseur: curseurSuivant };
}

export function effacer(piece: Piece, curseur: Curseur): { piece: Piece; curseur: Curseur } {
  const voix = piece.mesures[curseur.mesure].voix[curseur.voix];
  if (voix.length > 0) return { piece: avecVoix(piece, curseur, voix.slice(0, -1)), curseur };
  if (curseur.mesure > 0) {
    const precedent: Curseur = { mesure: curseur.mesure - 1, voix: curseur.voix };
    const voixPrec = piece.mesures[precedent.mesure].voix[precedent.voix];
    const piecePrec = voixPrec.length > 0 ? avecVoix(piece, precedent, voixPrec.slice(0, -1)) : piece;
    return { piece: piecePrec, curseur: precedent };
  }
  return { piece, curseur };
}
```

Retirer `remplirSilences` et `basculerPortee` (l'ancienne API deux-portées) : le remplissage en
silences déménage dans l'export (il dépend des voix actives et des portées) ; la navigation entre
voix se fait en changeant `curseur.voix` dans le composant.

- [ ] **Step 4: Adapter `composition-edition.test.ts`**

Reprendre les tests d'`inserer`/`effacer`/`dureePlacee`/`decouperEnSilences` avec le nouveau
`Curseur` (`{ mesure, voix: "soprano" }`) et une pièce d'édition à quatre voix vides. Retirer les
tests de `remplirSilences`/`basculerPortee`. Ajouter :

```ts
it("voixActives ne retient que les voix qui ont une note", () => {
  const p = pieceEdition();
  p.mesures[0].voix.soprano = [noteN("noire")];
  p.mesures[3].voix.basse = [noteN("ronde")];
  expect(voixActives(p)).toEqual(["soprano", "basse"]);
});
it("insérer dans l'alto ne touche pas le soprano", () => {
  let p = pieceEdition();
  ({ piece: p } = inserer(p, { mesure: 0, voix: "soprano" }, noteN("noire")));
  ({ piece: p } = inserer(p, { mesure: 0, voix: "alto" }, noteN("blanche")));
  expect(p.mesures[0].voix.soprano).toHaveLength(1);
  expect(p.mesures[0].voix.alto).toHaveLength(1);
});
```
où `pieceEdition()` fabrique 8 mesures à quatre voix vides.

### 1c — l'export

- [ ] **Step 5: Adapter `piece-vers-musicxml.ts`**

L'export émet, par mesure, les voix ACTIVES groupées par portée, séparées par des `<backup>`, chaque
note avec son `<stem>` (avant `<staff>`) et son `<staff>`. Une portée sans voix active reçoit une
voix de silence pour rester visible. Le remplissage en silences se fait ici (via `decouperEnSilences`).

```ts
import {
  DIVISIONS, ORDRE_VOIX, CONFIG_VOIX,
  type Piece, type Voix, type Note, type Silence, type Hauteur, type BaseDuree, type NomVoix,
} from "./piece-model";
import { capaciteMesure, dureePlacee, decouperEnSilences, voixActives } from "./composition-edition";

// numéro de voix MusicXML par nom (distinct par portée)
const NUM_VOIX: Record<NomVoix, string> = { soprano: "1", alto: "2", tenor: "3", basse: "4" };

// … TYPE_XML, hauteurXML inchangés …

function noteXML(
  note: Note, voix: string, portee: number, hampe: string,
  tenueEntrante: boolean, tupletDebut: boolean, tupletFin: boolean,
): string {
  // identique à 2b, mais on insère <stem>hampe</stem> AVANT <staff>.
  // ordre schéma : … type, dot, time-modification, stem, staff, notations.
}

function silenceXML(s: Silence, voix: string, portee: number, ticksMesure: number): string {
  // identique à 2b (pas de <stem> sur un silence).
}

/** Prépare la voix d'UNE mesure : les événements posés + les silences de complément
 *  (ou un silence de mesure si vide). */
function voixMesureXML(
  evenements: Voix, nom: NomVoix, ticksMesure: number,
): string {
  const num = NUM_VOIX[nom];
  const { portee, hampe } = CONFIG_VOIX[nom];
  const complet: Voix = evenements.length === 0
    ? [{ type: "silence", duree: { base: "ronde", points: 0 }, mesureEntiere: true }]
    : [...evenements, ...decouperEnSilences(capaciteMesureTicks(ticksMesure, evenements))];
  // (calculer le vide = ticksMesure - dureePlacee(evenements))
  // émettre chaque événement : note → noteXML(…, hampe, …) ; silence → silenceXML(…)
  // en suivant l'état de liaison + n-olet (comme voixXML de 2b).
}

export function pieceVersMusicXML(piece: Piece): string {
  const ticksMesure = capaciteMesure(piece.chiffrage);
  const actives = voixActives(piece);

  const mesures = piece.mesures.map((mesure, i) => {
    const attrs = i === 0 ? attributsXML(piece) : "";

    // Par portée (1 puis 2) : les voix actives de cette portée, ou une voix de
    // silence si aucune, pour que la portée reste visible.
    const parPortee = ([1, 2] as const).map((p) => {
      const voixDeLaPortee = ORDRE_VOIX.filter((v) => CONFIG_VOIX[v].portee === p && actives.includes(v));
      if (voixDeLaPortee.length === 0) {
        const repli: NomVoix = p === 1 ? "soprano" : "tenor";
        return [voixMesureXML([], repli, ticksMesure)];
      }
      return voixDeLaPortee.map((v) => voixMesureXML(mesure.voix[v], v, ticksMesure));
    }).flat();

    // Un <backup> entre chaque voix (pas après la dernière).
    const backup = `<backup><duration>${ticksMesure}</duration></backup>`;
    return `<measure number="${i + 1}">${attrs}${parPortee.join(backup)}</measure>`;
  }).join("");

  return `<?xml version="1.0" encoding="UTF-8"?><score-partwise version="4.0">` +
    `<part-list><score-part id="P1"><part-name>Harmonia</part-name></score-part></part-list>` +
    `<part id="P1">${mesures}</part></score-partwise>`;
}
```

**Note à l'implémenteur :** `attributsXML` (avec `<staves>2</staves>` et les deux clés) est
inchangé de 2b. `voixMesureXML` réunit la logique de `voixXML` de 2b (liaison entrante, groupes de
triolet) + le remplissage en silences + la hampe. Écris-la proprement et fais-la valider par
l'aller-retour.

- [ ] **Step 6: Adapter `piece-vers-musicxml.test.ts`**

Les fabriques de test passent au modèle quatre voix. Reprendre les cas existants (noires, pointée,
liaison, triolet, altération — désormais dans la voix soprano) et ajouter :

```ts
it("deux voix par portée (soprano + alto) se relisent au bon instant", () => {
  // Mesure : soprano = Do5 ronde ; alto = La4 ronde. Même onset, hauteurs distinctes.
  const xml = pieceVersMusicXML(piece4voix({ soprano: [n("C",5,"ronde")], alto: [n("A",4,"ronde")] }));
  const a0 = parseMusicXML(xml).notes.filter((x) => x.onset === 0).map((x) => x.midi).sort((a,b)=>a-b);
  expect(a0).toEqual([69, 72]); // La4, Do5 tous deux à l'instant 0
});

it("rythmes indépendants : soprano 2 noires + basse 1 blanche", () => {
  const xml = pieceVersMusicXML(piece4voix({
    soprano: [n("C",5,"blanche"), n("D",5,"blanche")],
    basse:   [n("C",3,"ronde")],
  }));
  const score = parseMusicXML(xml);
  expect(score.notes.filter((x) => x.midi === 72)).toHaveLength(1);  // Do5 blanche
  expect(score.notes.find((x) => x.midi === 48)!.duration).toBe(4 * TPQ); // Do3 ronde tenue
});

it("une voix entièrement vide n'est PAS émise", () => {
  const xml = pieceVersMusicXML(piece4voix({ soprano: [n("C",5,"ronde")], basse: [n("C",3,"ronde")] }));
  // Alto (voix 2) et Ténor (voix 3) absents.
  expect(xml).not.toContain("<voice>2</voice>");
  expect(xml).not.toContain("<voice>3</voice>");
});

it("un accord SATB : une note par voix au même instant", () => {
  const xml = pieceVersMusicXML(piece4voix({
    soprano: [n("G",4,"ronde")], alto: [n("E",4,"ronde")],
    tenor:   [n("C",4,"ronde")], basse: [n("C",3,"ronde")],
  }));
  const a0 = parseMusicXML(xml).notes.filter((x) => x.onset === 0).map((x) => x.midi).sort((a,b)=>a-b);
  expect(a0).toEqual([48, 60, 64, 67]); // Do3, Do4, Mi4, Sol4
});
```
où `piece4voix(voix: Partial<Record<NomVoix, Voix>>)` fabrique une pièce d'UNE mesure avec les voix
fournies (les autres vides), et `n(lettre, octave, base)` une note simple.

- [ ] **Step 7: Lancer les tests des trois libs**

Run: `npx vitest run src/lib/piece-model.test.ts src/lib/composition-edition.test.ts src/lib/piece-vers-musicxml.test.ts`
Expected: tout vert. Puis la suite complète :

Run: `npx vitest run`
Expected: vert (les tests de bout en bout de l'analyseur n'utilisent pas ce modèle ; seuls ces trois fichiers changent).

- [ ] **Step 8: Commit**

```bash
git add src/lib/piece-model.ts src/lib/piece-model.test.ts src/lib/composition-edition.ts src/lib/composition-edition.test.ts src/lib/piece-vers-musicxml.ts src/lib/piece-vers-musicxml.test.ts
git commit -m "feat(compo): modele et export SATB a quatre voix (hampes, voix masquees)"
```

---

## Task 2 : L'atelier à quatre voix

**Files:**
- Modify: `src/components/AtelierComposition.tsx`

- [ ] **Step 1: Adapter le composant**

- **État initial** : la pièce vierge à quatre voix (`Array.from({ length: 8 }, () => ({ voix: { soprano: [], alto: [], tenor: [], basse: [] } }))`), et `curseur: { mesure: 0, voix: "soprano" }`.
- **Sélecteur de voix** : quatre boutons S / A / T / B remplaçant la bascule de portée, chacun coloré (Soprano `#5C3D6E`, Alto `#185FA5`, Ténor `#0F6E56`, Basse `#BA7517`), le bouton actif mis en avant. Cliquer change `curseur.voix` (en gardant la mesure).
- **`poserNote` / `poserSilence` / `effacer`** : opèrent sur `curseur.voix` via `inserer`/`effacer` (déjà adaptés). Retirer toute référence à `basculerPortee` et `remplirSilences`.
- **La gravure** : `useMemo(() => pieceVersMusicXML(piece), [piece])` — l'export fait désormais le remplissage en silences lui-même, plus besoin de `remplirSilences`.
- **Le repère de position** : « Voix : Soprano · mesure N » (la couleur de la voix active).
- Le reste (piano, clavier, palette de durées, écoute) inchangé, opérant sur la voix active.

- [ ] **Step 2: Vérifier au build**

Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build`
Expected: succès. **Jamais `npx tsc --noEmit`.**

- [ ] **Step 3: Commit**

```bash
git add src/components/AtelierComposition.tsx
git commit -m "feat(compo): atelier a quatre voix SATB (selecteur de voix colore)"
```

---

## Task 3 : Vérification d'ensemble

- [ ] **Step 1:** `npx vitest run` — tout vert.
- [ ] **Step 2:** `NODE_OPTIONS="--max-old-space-size=8192" npm run build` — succès.
- [ ] **Step 3: Contrôle manuel** (`/fr/composer`, Pro) :
  - écrire un court choral : quelques accords SATB (une note par voix au même instant), puis un
    passage à rythmes indépendants (basse tenue sous des voix qui bougent) ;
  - vérifier que les **hampes se séparent** (S/T haut, A/B bas), que la gravure suit, que la
    **lecture joue les quatre voix**, et qu'une voix laissée vide **ne s'affiche pas** ;
  - la sélection de voix colorée est claire ; Retour arrière efface dans la voix active.

  **C'est ce contrôle qui dit si le 2c a atteint son but.** Rapporter surtout la clarté de la
  saisie voix par voix et l'exactitude de la gravure à quatre voix.

---

## Auto-relecture

**Couverture de la spec :**
- Quatre voix nommées, portées/hampes → Task 1a (`CONFIG_VOIX`, `Mesure.voix`). ✅
- Rythmes indépendants → conséquence des voix séparées, testé (Task 1c). ✅
- Voix vide masquée, portées toujours visibles → Task 1c (`voixActives` + repli par portée), testé. ✅
- Hampes explicites → Task 1c (`<stem>`). ✅
- Édition par voix (curseur.voix) → Task 1b, testé. ✅
- Sélecteur de voix coloré → Task 2. ✅
- Aller-retour (accord SATB, deux voix/portée) → Task 1c, testé. ✅

**Cohérence des types :** `NomVoix`/`CONFIG_VOIX`/`ORDRE_VOIX` (modèle) traversent édition et export ; `Curseur` (édition) pilote l'atelier ; l'export consomme `voixActives`/`decouperEnSilences` de l'édition (dépendance export → édition → modèle, sans cycle).

**Les points de vigilance, redits :** c'est une refonte — l'aller-retour par le parseur est le garde-fou de l'export à plusieurs voix ; les hampes sont émises explicitement ; une voix masquée ne doit pas décaler les mesures ni la lecture. La gravure réelle des deux-voix-par-portée (hampes, silences) se valide au contrôle manuel Verovio.

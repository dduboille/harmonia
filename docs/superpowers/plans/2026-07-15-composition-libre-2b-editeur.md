# Composition libre 2b — l'éditeur de saisie — Plan d'implémentation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Un atelier de composition : l'élève écrit sa pièce note à note (piano à l'écran + clavier d'ordinateur), Verovio la grave à chaque frappe, et il peut l'écouter.

**Architecture :** Une logique d'édition PURE (`composition-edition.ts`) au-dessus du modèle 2a, et un composant `AtelierComposition.tsx` qui l'orchestre en réutilisant `StudioScore` (gravure Verovio), `pieceVersMusicXML` (2a), `parseMusicXML` + `planifierLecture` (lecture) et `PianoPlayer` (son). Le modèle ne porte que les notes POSÉES ; les silences de complément sont ajoutés au moment de graver, ce qui garde l'édition triviale.

**Tech Stack :** TypeScript strict, vitest, Next.js 16 App Router, React 19. Aucune dépendance nouvelle.

**Spec :** `docs/superpowers/specs/2026-07-15-composition-libre-2b-editeur-design.md`

**Contraintes d'environnement :**
- **NE JAMAIS lancer `npx tsc --noEmit`** : sature la mémoire. Contrôle d'intégration : `NODE_OPTIONS="--max-old-space-size=8192" npm run build`.
- Tests : `npx vitest run`. La suite compte **300 tests** avant ce chantier.
- TypeScript strict, pas de `any`. Commentaires et identifiants en **français**. Textes UI en français.

**Ce qui existe et qu'on réutilise (à lire) :**
- `src/lib/piece-model.ts` — `Piece`, `Mesure`, `Voix`, `Note`, `Silence`, `Evenement`, `Hauteur`, `Duree`, `BaseDuree`, `dureeEnDivisions`, `DIVISIONS`, `pieceVierge`.
- `src/lib/piece-vers-musicxml.ts` — `pieceVersMusicXML(piece)`.
- `src/lib/musicxml-parse.ts` — `parseMusicXML`, `TPQ`.
- `src/lib/studio-playback.ts` — `planifierLecture(score, vitesse)` → `{ evenements, mesures, dureeTotale }`.
- `src/components/StudioScore.tsx` — `<StudioScore musicxml={...} ref={...} />` (grave via Verovio ; `ref` expose `surlignerATemps` — non requis ici mais disponible).
- `src/components/PianoPlayer.tsx` — `PianoPlayerRef.playVoicing(specs, { duration, velocity })`, `stopAll()`. Spec d'une note = `"<nom>:<octave PianoPlayer>"`, octave PianoPlayer = octave standard − 1.
- `src/components/MelodicEditor.tsx` — un éditeur SATB SVG existant : **à lire pour le patron de la rangée de touches de piano cliquable et la saisie**. On NE le réutilise pas (il grave en SVG maison), mais son interaction est la référence.
- `src/app/[locale]/studio/page.tsx` — le patron d'une page Pro. `src/app/[locale]/analyse/page.tsx` — le hub où ajouter l'entrée.

---

## Structure des fichiers

| Fichier | Responsabilité |
|---|---|
| `src/lib/composition-edition.ts` *(nouveau)* | Logique d'édition pure : capacité, insertion, effacement, remplissage en silences. |
| `src/components/AtelierComposition.tsx` *(nouveau)* | L'éditeur : palette, saisie piano + clavier, gravure Verovio, écoute, navigation. |
| `src/app/[locale]/composer/page.tsx` *(nouveau)* | Page Pro (paywall + `AtelierComposition`). |
| `src/app/[locale]/analyse/page.tsx` *(modifié)* | Entrée « Composer » dans le hub. |

---

## Task 1 : La logique d'édition (pure)

**Files:**
- Create: `src/lib/composition-edition.ts`
- Test: `src/lib/composition-edition.test.ts`

- [ ] **Step 1: Écrire les tests qui échouent**

Créer `src/lib/composition-edition.test.ts` :

```ts
import { describe, it, expect } from "vitest";
import { parseMusicXML, TPQ } from "./musicxml-parse";
import { pieceVersMusicXML } from "./piece-vers-musicxml";
import { pieceVierge, type Piece, type Note, type Hauteur } from "./piece-model";
import {
  capaciteMesure, dureePlacee, decouperEnSilences, remplirSilences,
  inserer, effacer, type Curseur,
} from "./composition-edition";

const DO5: Hauteur = { lettre: "C", alteration: 0, octave: 5 };
function noteN(base: Note["duree"]["base"], points: 0 | 1 | 2 = 0): Note {
  return { type: "note", hauteurs: [DO5], duree: { base, points } };
}
/** Une pièce d'édition vide : mêmes 8 mesures que la vierge, mais VOIX VIDES
 *  (le modèle d'édition ne porte que les notes posées). */
function pieceEdition(): Piece {
  return {
    armure: 0, chiffrage: { temps: 4, unite: 4 },
    mesures: Array.from({ length: 8 }, () => ({ portees: [[], []] as [Note[], Note[]] })),
  };
}
const CURSEUR0: Curseur = { mesure: 0, portee: 0 };

describe("capaciteMesure / dureePlacee", () => {
  it("une mesure 4/4 vaut 4 noires", () => {
    expect(capaciteMesure({ temps: 4, unite: 4 })).toBe(4 * 48);
    expect(capaciteMesure({ temps: 3, unite: 4 })).toBe(3 * 48);
    expect(capaciteMesure({ temps: 6, unite: 8 })).toBe(6 * 24);
  });
  it("dureePlacee somme les durées posées", () => {
    expect(dureePlacee([noteN("noire"), noteN("croche")])).toBe(48 + 24);
  });
});

describe("decouperEnSilences — combler un vide en valeurs standard", () => {
  it("3 temps → une blanche pointée", () => {
    const s = decouperEnSilences(3 * 48);
    expect(s.map((x) => x.duree)).toEqual([{ base: "blanche", points: 1 }]);
  });
  it("la somme des silences vaut le vide", () => {
    const total = decouperEnSilences(3 * 48 + 24).reduce((t, x) => {
      const q: Record<string, number> = { ronde: 192, blanche: 96, noire: 48, croche: 24, double: 12 };
      return t + q[x.duree.base] * (x.duree.points === 1 ? 1.5 : 1);
    }, 0);
    expect(total).toBe(3 * 48 + 24);
  });
});

describe("remplirSilences — la pièce toujours renderable", () => {
  it("une voix vide devient un silence de mesure", () => {
    const p = remplirSilences(pieceEdition());
    const ev = p.mesures[0].portees[0][0];
    expect(ev.type).toBe("silence");
    expect(ev.type === "silence" && ev.mesureEntiere).toBe(true);
  });
  it("une voix partielle est complétée à la capacité", () => {
    const p = pieceEdition();
    p.mesures[0].portees[0] = [noteN("noire")];
    const rempli = remplirSilences(p);
    const voix = rempli.mesures[0].portees[0];
    // La noire + des silences dont le total complète la mesure.
    expect(voix[0].type).toBe("note");
    expect(voix.slice(1).every((e) => e.type === "silence")).toBe(true);
  });
});

describe("inserer", () => {
  it("insère une note qui tient et garde le curseur sur la mesure", () => {
    const { piece, curseur } = inserer(pieceEdition(), CURSEUR0, noteN("noire"));
    expect(piece.mesures[0].portees[0]).toHaveLength(1);
    expect(curseur).toEqual({ mesure: 0, portee: 0 });
  });
  it("quand la mesure se remplit, le curseur passe à la suivante", () => {
    let p = pieceEdition();
    let c = CURSEUR0;
    for (let i = 0; i < 4; i++) ({ piece: p, curseur: c } = inserer(p, c, noteN("noire")));
    expect(p.mesures[0].portees[0]).toHaveLength(4);
    expect(c).toEqual({ mesure: 1, portee: 0 });
  });
  it("refuse une note trop longue pour la place restante", () => {
    let p = pieceEdition();
    let c = CURSEUR0;
    ({ piece: p, curseur: c } = inserer(p, c, noteN("blanche", 1))); // 3 temps
    const avant = p;
    const res = inserer(p, c, noteN("ronde")); // 4 temps, il n'en reste qu'un
    expect(res.piece).toBe(avant);            // inchangé
    expect(res.piece.mesures[0].portees[0]).toHaveLength(1);
  });
});

describe("effacer", () => {
  it("retire la dernière note posée", () => {
    let p = pieceEdition();
    let c = CURSEUR0;
    ({ piece: p, curseur: c } = inserer(p, c, noteN("noire")));
    ({ piece: p, curseur: c } = inserer(p, c, noteN("noire")));
    ({ piece: p, curseur: c } = effacer(p, c));
    expect(p.mesures[0].portees[0]).toHaveLength(1);
  });
  it("sur une mesure vide, recule et efface la dernière de la précédente", () => {
    let p = pieceEdition();
    let c = CURSEUR0;
    for (let i = 0; i < 4; i++) ({ piece: p, curseur: c } = inserer(p, c, noteN("noire")));
    // c est sur la mesure 1 (vide) ; effacer doit revenir à la mesure 0 et retirer une note.
    ({ piece: p, curseur: c } = effacer(p, c));
    expect(c.mesure).toBe(0);
    expect(p.mesures[0].portees[0]).toHaveLength(3);
  });
});

describe("aller-retour complet par le socle 2a", () => {
  it("une pièce composée par insertions se relit aux bons instants", () => {
    let p = pieceEdition();
    let c = CURSEUR0;
    for (const l of ["C", "D", "E", "F"] as Hauteur["lettre"][]) {
      ({ piece: p, curseur: c } = inserer(p, c, {
        type: "note", hauteurs: [{ lettre: l, alteration: 0, octave: 5 }], duree: { base: "noire", points: 0 },
      }));
    }
    const score = parseMusicXML(pieceVersMusicXML(remplirSilences(p)));
    const haut = score.notes.filter((x) => x.midi >= 72 && x.onset < 4 * TPQ).sort((a, b) => a.onset - b.onset);
    expect(haut.map((x) => x.onset)).toEqual([0, TPQ, 2 * TPQ, 3 * TPQ]);
  });
});
```

- [ ] **Step 2: Lancer les tests, vérifier qu'ils échouent**

Run: `npx vitest run src/lib/composition-edition.test.ts`
Expected: FAIL — `Failed to resolve import "./composition-edition"`.

- [ ] **Step 3: Écrire le module**

Créer `src/lib/composition-edition.ts` :

```ts
/**
 * lib/composition-edition.ts
 * Harmonia — La logique d'ÉDITION de l'atelier de composition (pure).
 *
 * Le modèle d'édition ne porte que les notes POSÉES par l'élève : une voix peut être
 * incomplète. Le remplissage en silences est une affaire de RENDU (`remplirSilences`),
 * pas d'édition — l'édition reste ainsi triviale (ajouter / retirer la dernière), et
 * `remplirSilences` produit une pièce toujours valide, sérialisable et gravable.
 */

import {
  dureeEnDivisions, DIVISIONS,
  type Piece, type Voix, type Evenement, type Silence, type Duree,
} from "./piece-model";

export interface Curseur {
  mesure: number;
  portee: 0 | 1;
}

/** Ticks d'une mesure : temps × (une noire) × 4 / unité. En 4/4 : 4×48. */
export function capaciteMesure(chiffrage: { temps: number; unite: number }): number {
  return (chiffrage.temps * DIVISIONS * 4) / chiffrage.unite;
}

/** Somme des durées POSÉES dans une voix. */
export function dureePlacee(voix: Voix): number {
  return voix.reduce((t, ev) => t + dureeEnDivisions(ev.duree), 0);
}

// Valeurs de silence standard, du plus long au plus court (ticks à divisions 48).
const SILENCES_STD: ReadonlyArray<{ ticks: number; duree: Duree }> = [
  { ticks: 144, duree: { base: "blanche", points: 1 } },
  { ticks: 96,  duree: { base: "blanche", points: 0 } },
  { ticks: 72,  duree: { base: "noire", points: 1 } },
  { ticks: 48,  duree: { base: "noire", points: 0 } },
  { ticks: 36,  duree: { base: "croche", points: 1 } },
  { ticks: 24,  duree: { base: "croche", points: 0 } },
  { ticks: 18,  duree: { base: "double", points: 1 } },
  { ticks: 12,  duree: { base: "double", points: 0 } },
];

/**
 * Comble un vide (en ticks) par des silences de valeurs standard, du plus grand au
 * plus petit. Suppose un vide « propre » (multiple de la double-croche = 12 ticks) —
 * ce que garantit une saisie où les triolets sont entrés en groupes complets.
 */
export function decouperEnSilences(ticks: number): Silence[] {
  const out: Silence[] = [];
  let reste = ticks;
  for (const s of SILENCES_STD) {
    while (reste >= s.ticks) {
      out.push({ type: "silence", duree: s.duree });
      reste -= s.ticks;
    }
  }
  return out;
}

/**
 * Complète chaque voix à la capacité de la mesure : une voix VIDE devient un silence
 * de mesure (centré) ; une voix partielle reçoit ses silences de complément. C'est
 * la pièce rendue par cette fonction qu'on sérialise et grave.
 */
export function remplirSilences(piece: Piece): Piece {
  const capacite = capaciteMesure(piece.chiffrage);
  const silenceMesure: Silence = {
    type: "silence", duree: { base: "ronde", points: 0 }, mesureEntiere: true,
  };

  const remplirVoix = (voix: Voix): Voix => {
    if (voix.length === 0) return [silenceMesure];
    const vide = capacite - dureePlacee(voix);
    return vide > 0 ? [...voix, ...decouperEnSilences(vide)] : [...voix];
  };

  return {
    ...piece,
    mesures: piece.mesures.map((m) => ({
      portees: [remplirVoix(m.portees[0]), remplirVoix(m.portees[1])] as [Voix, Voix],
    })),
  };
}

/** Remplace la voix (mesure, portée) par une nouvelle, sans muter la pièce. */
function avecVoix(piece: Piece, curseur: Curseur, voix: Voix): Piece {
  return {
    ...piece,
    mesures: piece.mesures.map((m, i) => {
      if (i !== curseur.mesure) return m;
      const portees: [Voix, Voix] = [m.portees[0], m.portees[1]];
      portees[curseur.portee] = voix;
      return { portees };
    }),
  };
}

/**
 * Insère un événement au curseur s'il tient dans le temps restant de la mesure.
 * Sinon (note trop longue) : rien ne change. Quand la mesure se remplit exactement,
 * le curseur passe à la mesure suivante (s'il en reste une).
 */
export function inserer(
  piece: Piece, curseur: Curseur, evenement: Evenement,
): { piece: Piece; curseur: Curseur } {
  const capacite = capaciteMesure(piece.chiffrage);
  const voix = piece.mesures[curseur.mesure].portees[curseur.portee];
  const reste = capacite - dureePlacee(voix);
  const d = dureeEnDivisions(evenement.duree);

  if (d > reste) return { piece, curseur }; // ne rentre pas : inchangé

  const nouvelleVoix = [...voix, evenement];
  const nouvellePiece = avecVoix(piece, curseur, nouvelleVoix);

  const pleine = dureePlacee(nouvelleVoix) >= capacite;
  const curseurSuivant: Curseur =
    pleine && curseur.mesure + 1 < piece.mesures.length
      ? { mesure: curseur.mesure + 1, portee: curseur.portee }
      : curseur;

  return { piece: nouvellePiece, curseur: curseurSuivant };
}

/**
 * Efface la dernière note posée. Si la mesure courante est vide et qu'on n'est pas à
 * la première, on recule à la précédente et on y retire la dernière — un seul Retour
 * arrière efface toujours quelque chose de visible.
 */
export function effacer(piece: Piece, curseur: Curseur): { piece: Piece; curseur: Curseur } {
  const voix = piece.mesures[curseur.mesure].portees[curseur.portee];
  if (voix.length > 0) {
    return { piece: avecVoix(piece, curseur, voix.slice(0, -1)), curseur };
  }
  if (curseur.mesure > 0) {
    const precedent: Curseur = { mesure: curseur.mesure - 1, portee: curseur.portee };
    const voixPrec = piece.mesures[precedent.mesure].portees[precedent.portee];
    const piecePrec = voixPrec.length > 0
      ? avecVoix(piece, precedent, voixPrec.slice(0, -1))
      : piece;
    return { piece: piecePrec, curseur: precedent };
  }
  return { piece, curseur };
}

/** Bascule entre la portée du haut (0) et du bas (1). */
export function basculerPortee(curseur: Curseur): Curseur {
  return { mesure: curseur.mesure, portee: curseur.portee === 0 ? 1 : 0 };
}
```

- [ ] **Step 4: Lancer les tests, vérifier qu'ils passent**

Run: `npx vitest run src/lib/composition-edition.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/lib/composition-edition.ts src/lib/composition-edition.test.ts
git commit -m "feat(compo): logique d'edition de l'atelier (insertion, effacement, remplissage)"
```

---

## Task 2 : L'atelier (le composant)

**Files:**
- Create: `src/components/AtelierComposition.tsx`

**Contexte :** composant client. État = une pièce d'édition (voix vides au départ) + un curseur. À lire d'abord : `MelodicEditor.tsx` (le patron de la rangée de touches cliquable), `Studio.tsx` (le patron de la lecture par `setTimeout` + `PianoPlayer`).

- [ ] **Step 1: Écrire le composant**

Créer `src/components/AtelierComposition.tsx`. Structure (styles inline, comme le reste du produit) :

**État :**
```tsx
const [piece, setPiece] = useState<Piece>(() => ({
  armure: 0, chiffrage: { temps: 4, unite: 4 },
  mesures: Array.from({ length: 8 }, () => ({ portees: [[], []] as [Voix, Voix] })),
}));
const [curseur, setCurseur] = useState<Curseur>({ mesure: 0, portee: 0 });
const [base, setBase] = useState<BaseDuree>("noire");
const [points, setPoints] = useState<0 | 1 | 2>(0);
const [alteration, setAlteration] = useState<-1 | 0 | 1>(0);
const [triolet, setTriolet] = useState(false);
const [octave, setOctave] = useState(5);       // octave courante pour le clavier d'ordinateur
const [isPlaying, setIsPlaying] = useState(false);
```

**La gravure** (mémoïsée) :
```tsx
const musicxml = useMemo(() => pieceVersMusicXML(remplirSilences(piece)), [piece]);
```
rendue par `<StudioScore musicxml={musicxml} />`.

**Poser une note** (piano ou clavier) :
```tsx
const poserNote = useCallback((lettre: LettreNote, oct: number) => {
  const duree: Duree = { base, points, ...(triolet ? { nolet: { reelles: 3, normales: 2 } } : {}) };
  const note: Note = { type: "note", hauteurs: [{ lettre, alteration, octave: oct }], duree };
  setPiece((p) => {
    const r = inserer(p, curseur, note);
    if (r.piece !== p) {
      setCurseur(r.curseur);
      // jouer la note posée
      pianoRef.current?.playVoicing([specDepuisLettre(lettre, alteration, oct)], { duration: 0.4, velocity: 0.8 });
    }
    return r.piece;
  });
}, [base, points, alteration, triolet, curseur]);
```
`specDepuisLettre` construit la spec PianoPlayer (nom + altération → `"C#:4"` etc., octave PianoPlayer = octave standard − 1).

**Poser un silence** : même schéma avec un `Silence` de la durée courante.

**Effacer** : `setPiece((p) => { const r = effacer(p, curseur); setCurseur(r.curseur); return r.piece; });`

**Le clavier de piano** : une rangée de touches (≈ 2 octaves autour de l'octave courante), clic → `poserNote(lettre, oct)`. Reprendre le patron visuel de `MelodicEditor.tsx`.

**Le clavier d'ordinateur** : `useEffect` posant un `keydown` sur `window` :
- `a`..`g` → `poserNote` (a=La, b=Si, c=Do, d=Ré, e=Mi, f=Fa, g=Sol) à l'octave courante ;
- `ArrowUp`/`ArrowDown` → change l'octave courante ;
- `Backspace` → efface ;
- `r` → silence ;
- chiffres `1`..`5` → durée (ronde…double). Empêcher le comportement par défaut, ignorer si un champ a le focus.

**La palette** : boutons durée (ronde/blanche/noire/croche/double), points (0/1/2), altération (♯/♮/♭), triolet (bascule), silence, portée (Sol/Fa via `basculerPortee`).

**Le repère de position** : afficher « mesure N · portée Sol/Fa » et, dans la palette, indiquer clairement où ira la prochaine note.

**Écouter** (reprendre `Studio.tsx`) : `parseMusicXML(musicxml)` → `planifierLecture(score, 1)` → programmer chaque note via `setTimeout` + `pianoRef.current.playVoicing`, bouton Arrêter qui annule les timeouts + `stopAll()`. Garder les identifiants de timeout dans une ref.

**PianoPlayer caché** pour le son (comme `Studio.tsx`) :
```tsx
<div style={{ height: 0, overflow: "hidden", pointerEvents: "none" }}>
  <PianoPlayer ref={pianoRef} octaves={5} startOctave={1} showLabels={false} />
</div>
```

- [ ] **Step 2: Vérifier au build**

Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build`
Expected: succès. **Jamais `npx tsc --noEmit`.**

- [ ] **Step 3: Commit**

```bash
git add src/components/AtelierComposition.tsx
git commit -m "feat(compo): atelier de composition (saisie piano + clavier, gravure Verovio, ecoute)"
```

---

## Task 3 : La page et le hub

**Files:**
- Create: `src/app/[locale]/composer/page.tsx`
- Modify: `src/app/[locale]/analyse/page.tsx`

- [ ] **Step 1: La page Pro**

Créer `src/app/[locale]/composer/page.tsx`, calquée sur `studio/page.tsx` :

```tsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUserPlan } from "@/lib/progression";
import { ProPaywall } from "@/components/Paywall";
import AtelierComposition from "@/components/AtelierComposition";

interface Props { params: Promise<{ locale: string }>; }

export default async function ComposerPage({ params }: Props) {
  const { locale } = await params;
  const { userId } = await auth();
  if (!userId) redirect(`/${locale}/sign-in?redirect_url=/${locale}/composer`);

  const plan = await getUserPlan(userId);
  if (plan === "free") {
    return (
      <ProPaywall
        locale={locale}
        title="Atelier de composition"
        description="Composez votre propre pièce à deux portées, note à note — gravure en direct, écoute, et bientôt l'analyse harmonique. Réservé aux abonnés Pro."
      />
    );
  }
  return <AtelierComposition />;
}
```

- [ ] **Step 2: L'entrée dans le hub**

Dans `src/app/[locale]/analyse/page.tsx`, ajouter au tableau `TOOLS` :

```ts
{
  href: "composer",
  icon: "✐",
  title: "Atelier de composition",
  desc: "Composez votre pièce à deux portées, note à note — gravure en direct et écoute.",
  pro: true,
},
```

- [ ] **Step 3: Vérifier**

Run: `npx vitest run` → tout vert (les 300 + Task 1).
Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build` → succès, `/[locale]/composer` dans la table des routes.

- [ ] **Step 4: Commit**

```bash
git add "src/app/[locale]/composer/page.tsx" "src/app/[locale]/analyse/page.tsx"
git commit -m "feat(compo): page atelier de composition (Pro) et entree dans le hub"
```

---

## Task 4 : Vérification d'ensemble

- [ ] **Step 1:** `npx vitest run` — tout vert.
- [ ] **Step 2:** `NODE_OPTIONS="--max-old-space-size=8192" npm run build` — succès.
- [ ] **Step 3: Contrôle manuel** (`npm run dev`, `/fr/composer`, Pro) :
  - composer quelques mesures aux deux portées : des noires, une note pointée, un silence, un accord (poser plusieurs hauteurs — NOTE : l'accord n'est pas couvert par la saisie pas à pas simple ; le signaler si absent), une liaison ;
  - la gravure suit à chaque frappe, le repère montre la position, Retour arrière efface ;
  - l'écoute joue juste ; le triolet (trois notes) se grave avec son crochet.

  **C'est ce contrôle, et non les tests, qui dit si le 2b a atteint son but.** Rapporter surtout : la fluidité de la saisie, l'exactitude de la gravure, et tout cas où la mesure se remplit mal.

---

## Auto-relecture

**Couverture de la spec :**
- Saisie par ajout, mesure par mesure → Task 1 (`inserer`), testé. ✅
- Remplissage en silences (modèle toujours valide) → Task 1 (`remplirSilences`, `decouperEnSilences`), testé. ✅
- Effacer la dernière / reculer → Task 1 (`effacer`), testé. ✅
- Deux portées, bascule → Task 1 (`basculerPortee`), Task 2. ✅
- Saisie piano + clavier d'ordinateur → Task 2. ✅
- Gravure Verovio à chaque frappe → Task 2 (`remplirSilences` → `pieceVersMusicXML` → `StudioScore`). ✅
- Écoute → Task 2 (reprise de `Studio.tsx`). ✅
- Page Pro + hub → Task 3. ✅
- Aller-retour de bout en bout par le socle 2a → Task 1, testé. ✅

**Cohérence des types :** `Curseur` (Task 1) piloté par `AtelierComposition` (Task 2) ; `inserer`/`effacer`/`remplirSilences` opèrent sur `Piece`/`Voix`/`Evenement` (2a) ; `remplirSilences(piece)` → `pieceVersMusicXML` (2a) → `StudioScore`/`parseMusicXML` (existants).

**Les points de vigilance, redits :** le triolet à la saisie (groupes complets, vides multiples de 12) est le plus délicat — si l'implémentation montre qu'il alourdit trop l'éditeur, le sortir en chantier séparé (comme le clic-sur-portée). Le remplissage en silences doit rester en valeurs notables. La gravure à chaque frappe est acceptable sur 8 mesures.

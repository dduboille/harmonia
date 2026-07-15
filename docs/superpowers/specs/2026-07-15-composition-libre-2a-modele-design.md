# Spec — Composition libre, phase 2 · 2a : modèle de pièce + export MusicXML

**Date :** 2026-07-15
**Auteur :** Dany Duboille (avec Claude Code)
**Statut :** validé (design)
**Situe :** module 2 (composition libre) → phase 2 (l'éditeur) → sous-projet **2a** (la fondation)

## Contexte

La phase 1 (le Studio) importe, grave, joue et analyse un MusicXML composé ailleurs. La phase 2
apporte la **saisie dans Harmonia**. Décision d'architecture prise : **saisie pas à pas + gravure
Verovio** — on n'écrit pas de moteur de gravure, on écrit dans un MODÈLE que Verovio regrave à
chaque note. La phase 2 se découpe :

- **2a — le modèle de pièce + l'export MusicXML** (cette spec) : la fondation.
- **2b — la saisie pas à pas** : l'éditeur interactif (curseur, frappe des notes), par-dessus 2a.
- **2c — les raffinements** : voix multiples, annulation, cas exotiques.

Le 2a n'a **pas d'interface**. C'est un modèle pur et son sérialiseur. Dès qu'il sait s'exporter
en MusicXML, il hérite gratuitement de l'affichage (Verovio, déjà en place), de l'analyse
(l'analyseur A/B/C) et de l'export (ouvrable dans MuseScore).

## Décisions de cadrage (validées)

- **Richesse rythmique complète d'emblée** : durées de la ronde à la double-croche, notes
  pointées, liaisons de tenue, silences, **triolets**, altérations, une armure, un chiffrage.
- **Deux portées** (Sol et Fa), **une voix par portée** pour commencer (les voix multiples sont en
  2c).
- **Pièce vierge de départ** : **8 mesures** (la longueur d'une phrase), **Do majeur**, **4/4**,
  deux portées vides. Une mesure vide = **un silence de mesure par portée** (pour qu'elle se grave
  proprement).

## Architecture

### 1. Le modèle — `src/lib/piece-model.ts` (nouveau)

Une structure pure, source de vérité, en français :

```ts
interface Piece {
  armure: number;            // altérations à la clé : -7..+7 (0 = Do majeur)
  chiffrage: { temps: number; unite: number }; // 4/4 → { temps: 4, unite: 4 }
  mesures: Mesure[];
}

interface Mesure {
  // Portée du haut (clé de Sol) et du bas (clé de Fa). Une voix chacune en 2a.
  portees: [Voix, Voix];
}

type Voix = Evenement[];

type Evenement = Note | Silence;

interface Note {
  type: "note";
  hauteurs: Hauteur[];  // 1 = note simple, 2+ = accord
  duree: Duree;
  /** Liaison de TENUE vers la note suivante de même hauteur. */
  liee?: boolean;
}

interface Silence {
  type: "silence";
  duree: Duree;
  /** Un silence qui occupe TOUTE la mesure (la mesure vide) se grave centré. */
  mesureEntiere?: boolean;
}

interface Hauteur {
  lettre: "C" | "D" | "E" | "F" | "G" | "A" | "B";
  alteration: number; // -2..+2
  octave: number;     // octave standard (Do4 = do central)
}

interface Duree {
  base: "ronde" | "blanche" | "noire" | "croche" | "double";
  points: 0 | 1 | 2;
  /** n-olet : 3 dans le temps de 2 pour le triolet. Absent = pas de n-olet. */
  nolet?: { reelles: number; normales: number };
}

/** La pièce vierge de départ : 8 mesures, Do majeur, 4/4, deux portées de silences de mesure. */
function pieceVierge(): Piece;
```

### 2. Le sérialiseur — `src/lib/piece-vers-musicxml.ts` (nouveau)

`pieceVersMusicXML(piece): string` produit un `<score-partwise>` **à une partie, deux portées** —
la convention MusicXML : `<staff>1` (clé de Sol), `<staff>2` (clé de Fa), séparés dans chaque
mesure par un `<backup>`. En tête (mesure 1) : `divisions`, `key`, `time`, `staves` et les deux
clés. Pour chaque note : `type`, `dot`, `staff`, `voice`, `pitch` (avec `alter`), la liaison (`tie`
+ `tied`), et — pour un triolet — la `time-modification` (3 pour 2). Les accords empilent les
hauteurs avec `<chord/>`.

**Divisions = 48.** Ce choix rend TOUTES les durées entières : la noire vaut 48, la double 12, la
croche 24 ; un triolet de croches vaut 16 (24 × 2/3) ; une noire pointée 72. Sans un dénominateur
commun, points et triolets tomberaient sur des durées fractionnaires, invalides en MusicXML.

## Ce que ça débloque

`pièce → MusicXML` donne aussitôt, sans code neuf :
- **l'affichage** via `StudioScore` (Verovio) ;
- **l'analyse** via la route `/api/analyse-partition` ;
- **l'export** (le même fichier s'ouvre dans MuseScore).

## Tests (vitest)

Le sérialiseur est le cœur du risque. La vérification maîtresse est un **aller-retour** par notre
propre parseur :

- **Aller-retour** : construire une pièce → `pieceVersMusicXML` → `parseMusicXML` → les notes
  retrouvées (hauteurs midi, onsets en ticks, durées) correspondent à ce qu'on a écrit.
- **Note pointée** : une noire pointée sort avec `<type>quarter</type><dot/>` et la bonne durée.
- **Liaison** : deux notes liées produisent `tie`/`tied` start puis stop, et le parseur les fusionne
  en une seule note tenue (le comportement déjà testé du sous-projet B).
- **Triolet** : trois croches en triolet produisent la `time-modification` 3/2 et occupent le temps
  de deux croches.
- **Accord** : trois hauteurs simultanées sortent avec `<chord/>` et le parseur les lit au même
  onset.
- **Deux portées** : une note en portée du bas porte `<staff>2` et se lit dans la bonne octave.
- **Pièce vierge** : `pieceVierge()` → 8 mesures, armure 0, 4/4 ; chaque mesure se sérialise avec un
  silence de mesure par portée, et le MusicXML est relisible par le parseur (8 mesures détectées).

## Vérification

- `npx vitest run` → tout vert.
- `NODE_OPTIONS="--max-old-space-size=8192" npm run build` → succès.
  (⚠️ `npx tsc --noEmit` sature la mémoire de ce poste — ne jamais le lancer.)
- Contrôle manuel : sérialiser une petite pièce écrite à la main, la coller dans le Studio (ou la
  charger dans Verovio) → elle se grave correctement ; l'ouvrir dans MuseScore → elle s'ouvre.

## Hors périmètre (YAGNI)

- **La saisie / l'éditeur** (curseur, frappe) → 2b.
- **Voix multiples par portée**, changements d'armure/chiffrage en cours de pièce, **n-olets autres
  que le triolet**, quintolets, doubles-croches en triolet → 2c.
- **L'import** MusicXML vers le modèle (le sens inverse) → non requis ici ; le Studio importe déjà
  pour l'analyse, et l'éditeur part d'une pièce vierge.
- Nuances, articulations, pédale, tempo → non (le modèle décrit les hauteurs et les rythmes).

## Points de vigilance

- **Le regroupement des triolets.** Trois notes de triolet forment un groupe ; le sérialiseur doit
  émettre la `time-modification` sur chacune et, idéalement, le crochet `<tuplet>` (début/fin) sur
  la première et la dernière. Un triolet mal groupé se grave faux. On s'en tient au triolet simple
  (3 pour 2) en 2a.
- **Divisions entières.** Toute durée doit tomber juste en divisions de 48 ; une combinaison
  impossible (un triolet de doubles pointées…) doit être refusée par le modèle plutôt que produire
  une durée fractionnaire. On borne donc les combinaisons à ce que 48 encode exactement.
- **Validité MusicXML pour Verovio.** Verovio est tolérant mais exige une structure correcte
  (ordre des éléments, `<backup>` de la bonne durée entre les portées). L'aller-retour par notre
  parseur ne garantit pas à lui seul le rendu Verovio — d'où le contrôle manuel.
- **Cohérence des durées de mesure.** La somme des durées d'une voix doit remplir la mesure ; en 2a
  la pièce vierge le garantit (un silence de mesure), mais 2b devra y veiller à la saisie.

## Critères de succès

- Le modèle représente une pièce à deux portées avec toute la richesse rythmique validée.
- `pieceVersMusicXML` produit un MusicXML **relu fidèlement par notre parseur** (aller-retour vert)
  et **gravé par Verovio**.
- `pieceVierge()` rend 8 mesures en Do majeur à 4/4, prêtes à être remplies par l'éditeur (2b).
- Le socle est prêt : l'éditeur de 2b n'aura qu'à muter le modèle et le regraver.
- Aucune régression ; le build passe.

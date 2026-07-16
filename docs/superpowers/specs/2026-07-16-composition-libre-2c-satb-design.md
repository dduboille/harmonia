# Spec — Composition libre, phase 2 · 2c : écriture SATB à quatre voix

**Date :** 2026-07-16
**Auteur :** Dany Duboille (avec Claude Code)
**Statut :** validé (design)
**Situe :** module 2 (composition libre) → phase 2 → sous-projet **2c** (l'écriture à quatre voix)

## Contexte

Le 2a a posé le modèle de pièce et son export MusicXML ; le 2b a livré l'atelier `/composer`
(saisie note à note, gravure Verovio, écoute). Mais le modèle est **à deux portées, une voix
chacune** : impossible d'écrire un vrai choral. Le 2c fait passer l'atelier à la **véritable
écriture SATB à quatre voix indépendantes** — le besoin réel d'un outil d'harmonie.

**Décision prise :** quatre voix nommées **Soprano, Alto, Ténor, Basse**, chacune avec son **propre
rythme** ; Soprano + Alto sur la portée de Sol, Ténor + Basse sur celle de Fa ; hampes séparées
(Soprano/Ténor vers le haut, Alto/Basse vers le bas).

## Décisions de cadrage (validées)

- **Quatre voix nommées**, rythmes indépendants. Répartition et hampes :

  | Voix | Portée | Hampe |
  |---|---|---|
  | Soprano | Sol (1) | haut |
  | Alto | Sol (1) | bas |
  | Ténor | Fa (2) | haut |
  | Basse | Fa (2) | bas |

- **Saisie par voix active** : on choisit la voix (boutons S / A / T / B, **couleurs reprises de
  l'ancien éditeur** — Soprano violet `#5C3D6E`, Alto bleu `#185FA5`, Ténor vert `#0F6E56`, Basse
  or `#BA7517`), puis on pose les notes comme aujourd'hui (piano ou clavier).
- **Voix entièrement vide = masquée.** Une voix qui n'a **aucune note sur toute la pièce** n'est
  pas gravée (pas de silences partout). Une voix qui a au moins une note s'affiche avec des
  silences là où elle se tait. (Une portée sans aucune voix active reste tout de même affichée,
  avec un silence, pour que le grand système apparaisse.)
- **Pièce vierge** : 8 mesures, Do majeur, 4/4, les quatre voix vides.

## Architecture — une refonte du socle, pas un simple ajout

Le modèle, l'export et la logique d'édition passent tous de « deux portées, une voix » à « quatre
voix ». Les tests suivent.

### 1. Le modèle — `src/lib/piece-model.ts` (modifié)

```ts
export type NomVoix = "soprano" | "alto" | "tenor" | "basse";

/** Une mesure porte les quatre voix nommées (chacune peut être vide). */
export interface Mesure {
  voix: Record<NomVoix, Voix>; // Voix = Evenement[]
}
```

`pieceVierge()` rend 8 mesures aux quatre voix vides. Une constante décrit la portée et la hampe de
chaque voix (`CONFIG_VOIX`).

### 2. L'export MusicXML — `src/lib/piece-vers-musicxml.ts` (modifié)

Une partie, deux portées, **jusqu'à deux voix par portée**. Dans chaque mesure : les voix sont
écrites l'une après l'autre, séparées par des `<backup>` (de la durée de la mesure), chaque note
portant son `<staff>` et son `<stem>` (haut/bas selon la voix). Seules les **voix actives** (au
moins une note dans la pièce) sont émises ; si une portée n'a aucune voix active, on y met une voix
de silence pour qu'elle apparaisse.

### 3. La logique d'édition — `src/lib/composition-edition.ts` (modifié)

Le curseur gagne la voix : `Curseur = { mesure: number; voix: NomVoix }`. `inserer`, `effacer`,
`remplirSilences`, la navigation opèrent **par voix nommée**. `remplirSilences` complète chaque voix
active à la capacité.

### 4. L'atelier — `src/components/AtelierComposition.tsx` (modifié)

- Un **sélecteur de voix** (S / A / T / B, couleurs SATB), remplaçant la bascule de portée : la voix
  active dit où la note ira (et sur quelle portée).
- Le reste (palette de durées, piano, clavier, gravure, écoute) inchangé, mais opérant sur la voix
  active.
- La **pièce vierge** de l'état initial passe à quatre voix.

## Tests (vitest)

- **Modèle** : `pieceVierge()` a 8 mesures, chacune avec les quatre voix (S/A/T/B) vides.
- **Export — deux voix par portée** : une mesure avec Soprano et Alto se sérialise avec les deux
  voix en `<staff>1`, séparées par un `<backup>`, chaque note avec son `<stem>` ; l'aller-retour par
  `parseMusicXML` retrouve les deux voix au bon instant (même onset, hauteurs distinctes).
- **Rythmes indépendants** : Soprano deux noires + Basse une blanche dans la même mesure → les deux
  se relisent correctement (le Soprano à deux onsets, la Basse tenue).
- **Voix masquée** : une pièce où seuls Soprano et Basse ont des notes → l'Alto et le Ténor ne sont
  PAS émis (aucune trace de leur voix dans le MusicXML), mais les deux portées apparaissent.
- **Édition par voix** : insérer dans l'Alto ne touche pas le Soprano ; le curseur porte la voix.
- **Aller-retour complet** : composer un accord SATB (une note par voix au même instant) → les
  quatre notes se relisent au même onset, aux bonnes hauteurs et bonnes portées.

## Vérification

- `npx vitest run` → tout vert (tests existants adaptés + nouveaux).
- `NODE_OPTIONS="--max-old-space-size=8192" npm run build` → succès.
  (⚠️ `npx tsc --noEmit` sature la mémoire — ne jamais le lancer.)
- Contrôle manuel (`/composer`, Pro) : écrire un court choral à quatre voix (chaque voix sa ligne),
  vérifier que les hampes se séparent, que les rythmes indépendants se gravent, que la lecture joue
  les quatre voix, et qu'une voix laissée vide ne s'affiche pas.

## Hors périmètre (YAGNI)

- **Plus de deux voix par portée**, ou un nombre de voix variable → non ; on s'en tient à SATB.
- **Le contrôle de conduite des voix** (quintes parallèles, croisements) → l'ancien éditeur le
  faisait ; on pourra le rebrancher plus tard, ce n'est pas l'objet du 2c.
- **Édition d'une note déjà posée au milieu**, accords empilés dans UNE voix, clic-sur-portée,
  analyse en direct → itérations distinctes (certaines déjà notées).

## Points de vigilance

- **C'est une refonte** : bien vérifier que l'aller-retour par le parseur (qui gère déjà plusieurs
  `<backup>` et voix) reste vert, et que la gravure Verovio des deux-voix-par-portée est correcte
  (hampes, silences des voix actives).
- **Les hampes** : émettre `<stem>` explicitement plutôt que de compter sur l'auto-hampe de Verovio,
  pour garantir la convention SATB.
- **La voix masquée** ne doit pas casser l'alignement des mesures ni la lecture : une voix non émise
  ne compte simplement pas ; les portées restent présentes.
- **La lecture** doit jouer les quatre voix (elle passe déjà par `parseMusicXML` → toutes les voix
  sont lues ; rien de spécial à faire si l'export est correct).

## Critères de succès

- On écrit un choral à quatre voix indépendantes dans l'atelier, voix par voix, au piano et au
  clavier.
- Les hampes se séparent (S/T haut, A/B bas), les rythmes indépendants se gravent, la lecture joue
  les quatre voix.
- Une voix laissée entièrement vide ne s'affiche pas ; les deux portées restent visibles.
- Le modèle reste toujours valide et sérialisable ; aucune régression sur le socle (aller-retour).
- Le build passe.

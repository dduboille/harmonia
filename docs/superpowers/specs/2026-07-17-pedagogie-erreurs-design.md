# Spec — Pédagogie des erreurs (roadmap n° 3)

**Date :** 2026-07-17
**Auteur :** Dany Duboille (avec Claude Code)
**Statut :** validé (roadmap, ordre validé par Dany)

## Contexte

Quand le moteur signale « Quintes parallèles S–B (m.1→2) », le message est minimal. Demande de
Dany : « développer, expliquer ce qu'est une quinte parallèle et comment faire pour l'éviter,
éventuellement proposer quelque chose, dans un cadre sous l'exercice — l'explication et la
pédagogie avant tout. »

## Décisions

1. **Un cadre « Comprendre ces remarques » sous l'exercice** (dans `HarmoniaEditor`, sous la
   liste de feedback existante) : pour chaque TYPE d'erreur actuellement affiché (déduplication
   par type), une fiche dépliante (`<details>`) avec trois volets :
   - **Qu'est-ce que c'est ?** — définition claire, un exemple chiffré concret ;
   - **Pourquoi l'école l'interdit / le surveille** — la raison musicale (fusion des voix,
     indépendance, tradition), pas un dogme ;
   - **Comment l'éviter** — 2-3 gestes concrets applicables immédiatement (mouvement contraire,
     échange de notes entre voix, changement de doublure…).
2. **Les 14 types couverts** : parallel_fifth, parallel_octave, hidden_fifth, hidden_octave,
   leading_tone, doubled_leading_tone, seventh, spacing, crossing, range, cross_relation,
   missing_accidental, wrong_chord, wrong_bass.
3. **Contenu = le produit** : fiches FR rédigées d'abord et **validées par Dany**, puis
   traduites dans les 5 autres langues (même processus que satb.errors). ~100-160 mots par
   fiche. Espace i18n : `satb.pedagogie.<type>.{titre,quoi,pourquoi,comment}`.
4. **Fermées par défaut**, état visuel discret (le feedback court reste premier) ; s'ouvre par
   fiche. Accessible (details/summary natifs).
5. **Phase 2 (hors périmètre ici)** : « proposer quelque chose » — suggestion de correction
   automatique calculée. Reporté ; la structure des fiches réserve l'emplacement.

## Vérification

- Fiches FR validées par Dany avant traduction.
- Les 14 types ont leur fiche dans les 6 langues (test simple : les clés existent — un test
  vitest sur les fichiers messages garantit qu'aucun type n'est muet).
- Build + suite verts ; contrôle manuel : provoquer une quinte parallèle → la fiche s'affiche.

## Périmètre (YAGNI)

- Pas de suggestion automatique (phase 2) ; pas d'illustrations/partitions dans les fiches
  (texte + exemples chiffrés en toutes lettres) ; pas de refonte du feedback court existant.

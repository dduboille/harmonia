"use client";

/**
 * Cours12.tsx
 * Harmonia · Niveau 2 · Cours 12 — La substitution tritonique
 * Convention : affichage anglais, dotKeys PianoPlayer français
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { cours12Content } from "@/data/cours12Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";

function playChord(ref: React.RefObject<PianoPlayerRef>, keys: string[], duration = 2.4) {
  keys.forEach(key => {
    const [note, octStr] = key.split(":");
    ref.current?.playNote(note, parseInt(octStr), { duration });
  });
}

function playSeq(ref: React.RefObject<PianoPlayerRef>, chords: string[][], gapMs = 2200) {
  chords.forEach((chord, i) => {
    setTimeout(() => playChord(ref, chord, 2.0), i * gapMs);
  });
}

// ── Chords ────────────────────────────────────────────────────────────────────

// G7 : Sol Si Ré Fa — Sol:2=31, Si:3=47, Ré:4=50, Fa:4=53 ✓
const G7  = ["Sol:2", "Si:3", "Ré:4", "Fa:4"];
// Db7 : Réb Fa Lab Cb(=Si) — Réb:3=37, Fa:3=41, Lab:3=44, Si:3=47 ✓
const DB7 = ["Réb:3", "Fa:3", "Lab:3", "Si:3"];
// CMaj7 : Do Mi Sol Si — 36 40 43 47 ✓
const CMAJ7 = ["Do:3", "Mi:3", "Sol:3", "Si:3"];
// Dm7 : Ré Fa La Do — 38 41 45 48 ✓
const DM7 = ["Ré:3", "Fa:3", "La:3", "Do:4"];
// C (triade) for simpler resolution demos
const C_MAJ = ["Do:3", "Mi:3", "Sol:3", "Do:4"];

// ── Table des substitutions ───────────────────────────────────────────────────

interface SubRow {
  original: string;
  sub: string;
  sharedTones: string;   // the two shared guide tones
  bassMove: string;      // bass movement to I
}

const SUB_TABLE: SubRow[] = [
  { original: "G7",  sub: "D♭7",  sharedTones: "B / F",   bassMove: "D♭ → C  (↓ ½ ton)" },
  { original: "D7",  sub: "A♭7",  sharedTones: "F# / C",  bassMove: "A♭ → G  (↓ ½ ton)" },
  { original: "A7",  sub: "E♭7",  sharedTones: "C# / G",  bassMove: "E♭ → D  (↓ ½ ton)" },
  { original: "E7",  sub: "B♭7",  sharedTones: "G# / D",  bassMove: "B♭ → A  (↓ ½ ton)" },
  { original: "B7",  sub: "F7",   sharedTones: "D# / A",  bassMove: "F  → E  (↓ ½ ton)" },
  { original: "F♯7", sub: "C7",   sharedTones: "A# / E",  bassMove: "C  → B  (↓ ½ ton)" },
];

// ── Comparaisons sonores ──────────────────────────────────────────────────────

interface CompCard {
  id: string;
  title: string;
  bassLine: string;
  feel: string;
  chords: string[][];
  labels: string[];
  color: string;
  bg: string;
}

const COMPARISONS: CompCard[] = [
  {
    id: "standard",
    title: "Cadence standard",
    bassLine: "G → C  (quinte descendante)",
    feel: "Fort, affirmatif — la cadence authentique classique",
    chords: [G7, C_MAJ],
    labels: ["G7", "C"],
    color: "#BA7517",
    bg: "#FAEEDA",
  },
  {
    id: "tritone",
    title: "Substitution tritonique",
    bassLine: "D♭ → C  (demi-ton descendant)",
    feel: "Lisse, chromatique — résolution par glissement",
    chords: [DB7, C_MAJ],
    labels: ["D♭7", "C"],
    color: "#7B3FA0",
    bg: "#F0EAFA",
  },
];

// ── Quiz ──────────────────────────────────────────────────────────────────────

const ALL_QUESTIONS = [
  // Définition du triton
  { q: "Un triton est un intervalle de...", opts: ["5 demi-tons", "6 demi-tons", "7 demi-tons", "4 demi-tons"], a: 1, fb: "Le triton = 6 demi-tons = quarte augmentée = quinte diminuée. C'est l'intervalle le plus dissonant de la gamme tempérée — il divise l'octave (12 demi-tons) exactement en deux. Ex : Do → Fa# = 6 demi-tons." },
  { q: "Pourquoi appelle-t-on le triton 'diabolus in musica' au Moyen Âge ?", opts: ["C'était facile à jouer", "C'était l'intervalle le plus consonant", "Sa dissonance extrême était considérée dangereuse et était proscrite", "Il ressemblait au son d'un diable"], a: 2, fb: "Au Moyen Âge et à la Renaissance, le triton était explicitement interdit dans la musique d'église en raison de sa dissonance. 'Diabolus in musica' (diable dans la musique) est une expression qui date du traité de Johannes de Muris (XIVe siècle)." },
  { q: "Le triton de Sol est...", opts: ["Ré", "Do#", "Réb", "La"], a: 2, fb: "Sol → Réb = 6 demi-tons (Sol=7, Sol#=8, La=9, Sib=10, Si=11, Do=12, Réb=13... en partant de Do=0 : Sol=7, +6=13=Réb à l'octave sup... plutôt : G=7, +6=13=Db modulaire). Sol + 6 = Réb. C'est pourquoi Db7 est la substitution tritonique de G7." },
  { q: "Le triton de Do est...", opts: ["Sol", "Fa#", "Sib", "La#"], a: 1, fb: "Do → Fa# = 6 demi-tons. Do=0, +6=Fa#(Gb). La substitution tritonique de C7 est F#7 (ou Gb7 selon le contexte)." },
  { q: "Le triton de Ré est...", opts: ["Sol#", "Lab", "Sol#/Lab (enharmoniques)", "Sol"], a: 2, fb: "Ré + 6 demi-tons = Sol# = Lab (notes enharmoniques). Les deux notations sont équivalentes. La substitution tritonique de D7 est Ab7." },
  { q: "Combien de paires de substitutions tritoniques existent dans les 12 tonalités ?", opts: ["6 paires", "12 paires", "24 paires", "3 paires"], a: 0, fb: "Il y a 6 paires de substitutions tritoniques : G7↔Db7, D7↔Ab7, A7↔Eb7, E7↔Bb7, B7↔F7, F#7↔C7. Chaque paire partage le même triton interne (les guide tones)." },
  // Le triton partagé
  { q: "G7 contient le triton B – F. Dans Db7, ces mêmes notes sont...", opts: ["La 9te et la 5te", "La ♭7te (Cb=B) et la 3ce (F)", "La 3ce et la quinte", "La fondamentale et la 9te"], a: 1, fb: "Dans Db7 : la 3ce est Fa (F) et la ♭7te est Do♭ (Cb = B naturel enharmoniquement). Le triton F–B est partagé entre G7 et Db7, mais les rôles s'inversent : B (3ce de G7) devient ♭7 de Db7 ; F (♭7 de G7) devient 3ce de Db7." },
  { q: "Les 'guide tones' d'un accord sont...", opts: ["la fondamentale et la 5te", "la 3ce et la 7te", "la 9te et la 13te", "la fondamentale et la 9te"], a: 1, fb: "Les guide tones = 3ce + 7te. Ce sont les notes qui définissent la qualité (majeur/mineur) et la tension (dominant/Maj7) d'un accord. La fondamentale et la 5te sont acoustiquement redondantes ; 3ce et 7te portent toute l'information harmonique." },
  { q: "Dans la substitution tritonique, les guide tones...", opts: ["disparaissent complètement", "restent identiques mais échangent leurs rôles (3ce ↔ 7te)", "se déplacent d'un demi-ton", "doublent d'octave"], a: 1, fb: "C'est le secret de la substitution tritonique : les deux notes du triton restent présentes, mais leurs rôles s'inversent. La 3ce de G7 (Si/B) devient la ♭7te de Db7 (Do♭/Cb). La ♭7te de G7 (Fa/F) devient la 3ce de Db7 (Fa/F). Les deux accords résolvent vers C pour la même raison : ils partagent le même triton instable." },
  { q: "Pourquoi G7 et Db7 résolvent-ils tous deux vers C majeur ?", opts: ["Par convention historique uniquement", "Car ils partagent le même triton interne (B–F = Cb–F) qui résout vers C", "Car ils ont la même fondamentale", "Car ils ont la même 5te"], a: 1, fb: "G7 et Db7 partagent les notes B (=Cb) et F — le triton. Ce triton se résout vers C et E (B→C demi-ton ascendant, F→E demi-ton descendant). Peu importe que la basse soit G ou Db, les guide tones résolvent identiquement vers CMaj7." },
  { q: "La résolution du triton B–F vers C–E implique...", opts: ["B monte d'un demi-ton vers C ; F descend d'un demi-ton vers E", "B descend vers A ; F monte vers G", "B et F restent en place", "B monte d'un ton vers C# ; F descend d'un ton vers Eb"], a: 0, fb: "B → C (demi-ton ascendant) et F → E (demi-ton descendant). Ces deux mouvements de demi-ton convergent vers la tonique C et sa 3ce E. C'est cette attraction du triton vers la tierce majeure de la tonique qui génère la tension → résolution." },
  // La ligne de basse
  { q: "La cadence standard G7 → C implique quel mouvement de basse ?", opts: ["Chromatique descendant (G→Gb→F→E→...→C)", "Descente de quinte (G down to C = descente de quinte juste)", "Montée de quarte", "Reste sur G"], a: 1, fb: "G7 → C : la basse descend d'une quinte juste (7 demi-tons) de Sol à Do. Ce mouvement de quinte descendante (ou montée de quarte) est le mouvement cadentiel le plus fort de la tonalité — la raison pour laquelle V→I est la résolution archétypale." },
  { q: "La cadence tritonique Db7 → C implique quel mouvement de basse ?", opts: ["Descente de quinte (Db → Gb)", "Montée d'un demi-ton (Db→D)", "Descente d'un demi-ton chromatique (Db→C)", "Reste sur Db"], a: 2, fb: "Db7 → C : la basse descend d'un demi-ton de Réb à Do. C'est le mouvement chromatique le plus lisse possible. Cette résolution par glissement (plutôt que par saut de quinte) est l'avantage principal de la substitution tritonique : douceur et chromatisme." },
  { q: "Dans le II-V-I standard (Dm7–G7–CMaj7), la ligne de basse est...", opts: ["D → Db → C (chromatique)", "D → G → C (5tes descendantes)", "D → E → C", "D → A → C"], a: 1, fb: "Dm7–G7–CMaj7 en Do : basse = Ré–Sol–Do. Ré→Sol = quinte descendante (ou quarte montante) ; Sol→Do = quinte descendante. Progression par cycle des quintes — très fort harmoniquement, moins lisse linéairement." },
  { q: "Dans le II-V-I avec substitution (Dm7–Db7–CMaj7), la ligne de basse est...", opts: ["D → G → C", "D → Db → C (descente chromatique !)", "D → E → C", "D → Ab → C"], a: 1, fb: "Avec la substitution tritonique : basse = Ré–Réb–Do. C'est une descente chromatique de 3 notes (D→Db→C). Cette ligne de basse est l'un des effets les plus caractéristiques du jazz moderne — le pianiste ou le bassiste peut créer cette voix intérieure qui descend par demi-tons." },
  { q: "Quel est l'avantage principal de la ligne de basse D–Db–C par rapport à D–G–C ?", opts: ["Elle est plus forte harmoniquement", "Elle est plus chromatique et lisse — meilleure conduite de voix", "Elle évite toute dissonance", "Elle est plus facile à chanter"], a: 1, fb: "D–Db–C est une descente chromatique de 3 notes consécutives (chaque note est un demi-ton plus bas). Cette continuité linéaire crée une sensation de 'glissement' très appréciée en jazz. D–G–C est plus fort harmoniquement mais moins lisse mélodiquement." },
  // Calcul des substitutions
  { q: "Quelle est la substitution tritonique de D7 ?", opts: ["G7", "Ab7", "Eb7", "A7"], a: 1, fb: "Ré + 6 demi-tons = Lab = Ab. La substitution tritonique de D7 est Ab7. Vérification : D7 contient F#–C (triton). Ab7 contient C–Gb/F# (même triton). ✓" },
  { q: "Quelle est la substitution tritonique de A7 ?", opts: ["Eb7", "D7", "Bb7", "E7"], a: 0, fb: "La + 6 demi-tons = Mi♭ = Eb. La substitution tritonique de A7 est Eb7. A7 contient C#–G (triton). Eb7 contient G–Db (= C#). Même triton, rôles inversés. ✓" },
  { q: "Quelle est la substitution tritonique de E7 ?", opts: ["B7", "Bb7", "A7", "F7"], a: 1, fb: "Mi + 6 demi-tons = Si♭ = Bb. La substitution tritonique de E7 est Bb7. E7 contient G#–D (triton). Bb7 contient D–Ab (= G#). ✓" },
  { q: "Quelle est la substitution tritonique de C7 ?", opts: ["F7", "G7", "F#7/Gb7", "Gb7 uniquement"], a: 2, fb: "Do + 6 demi-tons = Fa# = Gb. La substitution tritonique de C7 est F#7 (ou Gb7). C7 contient E–Bb (triton). Gb7 contient Bb–E. Même triton inversé. ✓" },
  { q: "Quelle est la substitution tritonique de F7 ?", opts: ["C7", "B7", "Gb7", "Bb7"], a: 1, fb: "Fa + 6 demi-tons = Si = B. La substitution tritonique de F7 est B7. F7 contient A–Eb (triton). B7 contient D#–A (= Eb–A). ✓" },
  { q: "Quelle est la substitution tritonique de Bb7 ?", opts: ["Eb7", "F7", "E7", "Ab7"], a: 2, fb: "Si♭ + 6 demi-tons = Mi = E. La substitution tritonique de Bb7 est E7. Bb7 contient D–Ab (triton). E7 contient G#–D (= Ab–D). ✓" },
  { q: "Si le triton sub de G7 est Db7, quel est le triton sub de Db7 ?", opts: ["G♭7", "G7", "Ab7", "C7"], a: 1, fb: "La relation est réciproque : si Db7 est le triton sub de G7, alors G7 est le triton sub de Db7. Réb + 6 = Sol. Chaque paire de substitutions tritoniques est symétrique — on peut substituer dans les deux sens." },
  // Applications jazz
  { q: "Dans Autumn Leaves, la cadence Am7♭5–D7–Gm avec substitution devient...", opts: ["Am7♭5–Ab7–Gm", "Am7♭5–G7–Gm", "Bm7♭5–Ab7–Gm", "Am7♭5–Db7–Gm"], a: 0, fb: "D7 → sub tritonique = Ab7 (Ré + 6 = Lab). Autumn Leaves : Am7♭5–D7–Gm avec sub → Am7♭5–Ab7–Gm. La ligne de basse A–Ab–G descend chromatiquement — très courant dans les arrangements jazz de ce standard." },
  { q: "La substitution tritonique peut s'appliquer à...", opts: ["uniquement le V7 principal", "n'importe quel accord de dominante 7te (y compris les dominantes secondaires)", "uniquement les accords majeurs", "uniquement en jazz bebop"], a: 1, fb: "Tout accord dominant 7te (contenant un triton interne) peut être substitué. Cela inclut les dominantes secondaires : V7/II (A7→Eb7), V7/IV (C7→Gb7), etc. C'est la raison pour laquelle la substitution tritonique est si polyvalente." },
  { q: "Dans un cycle II–V–I–IV–VII–III–VI, peut-on substituer tous les V7 ?", opts: ["Non — uniquement le V7 principal", "Oui — chaque dominant 7te peut être remplacé par son triton sub", "Oui, mais seulement les V7 impairs", "Non — cela briserait la tonalité"], a: 1, fb: "Oui. Dans un cycle de dominantes (ex : G7–C7–F7–Bb7 etc.), chaque accord peut être remplacé par son tritone sub : Db7–Gb7–B7–E7 etc. Cette 'chaîne de substitutions' crée une descente chromatique continue dans la basse — texture très jazz moderne." },
  { q: "La 'substitution de Coltrane' dans Giant Steps utilise...", opts: ["le même triton partagé", "un cycle de tierces majeures (divise l'octave en 3 parties égales)", "uniquement des dominantes secondaires", "des accords diminués"], a: 1, fb: "Les 'Coltrane changes' de Giant Steps (1960) étendent le concept de substitution avec un cycle de tierces majeures : B → G → E♭ (chacun à distance de tierce majeure = 4 demi-tons). Ce n'est pas directement la substitution tritonique, mais un développement harmonique voisin — diviser l'octave en 3 parties égales." },
  { q: "Dans Giant Steps, Coltrane passe par combien de centres tonaux différents en 2 mesures ?", opts: ["1", "2", "3", "4"], a: 2, fb: "Giant Steps progresse par 3 centres tonaux (B, G, E♭) en 2 mesures — un mouvement harmonique à une vitesse inouïe pour 1959. Chaque centre dure environ 2 temps. C'est ce que les musiciens de l'époque appelaient 'courir les changements' — il fallait improviser à une vitesse harmonique extrême." },
  { q: "Quel pianiste a enregistré Giant Steps avec Coltrane en 1960 ?", opts: ["Bill Evans", "Herbie Hancock", "Tommy Flanagan", "McCoy Tyner"], a: 2, fb: "Tommy Flanagan a joué piano sur Giant Steps (1960). L'histoire raconte qu'il était tellement surpris par l'harmonie de Coltrane lors de l'enregistrement qu'il a dû improviser 'de mémoire' — son solo est court car il ne maîtrisait pas encore les Coltrane changes." },
  { q: "La substitution tritonique est une technique principalement développée dans...", opts: ["la musique baroque", "le bebop et le jazz moderne (années 1940-1950)", "la musique Renaissance", "le jazz dixieland (années 1920)"], a: 1, fb: "La substitution tritonique est née dans le bebop (Charlie Parker, Dizzy Gillespie, Thelonious Monk, années 1940). Elle a été théorisée et systématisée dans les années 1950 avant d'être poussée à l'extrême par Coltrane dans les années 1960." },
  // Extensions sur le sub
  { q: "Sur Db7 (substitution de G7 → C), quelle est la 9te majeure ?", opts: ["Do", "Mi♭", "Fa", "Si♭"], a: 1, fb: "9te de Réb = 2de majeure à l'octave = Mi♭. Db9 = Réb–Fa–Lab–Do♭–Mi♭. La 9te (Mi♭) est disponible sur Db7 — elle résout vers Mi naturel dans CMaj7 par demi-ton ascendant. Excellent mouvement de voix !" },
  { q: "Sur Db7 → C, la 13te de Db7 est...", opts: ["Si♭", "Mi♭", "Si", "La♭"], a: 0, fb: "13te de Réb = 6te majeure = Si♭. Db13 contient Si♭ comme 13te. Si♭ → La (5te de C) = demi-ton descendant — belle résolution. La 13te (Bb/Si♭) est disponible sur Db7 car elle est à distance de ton de Lab (5te de Db7)." },
  { q: "La #11 de Db7 est...", opts: ["Sol", "Sol naturel (G)", "Fa#", "Mi♭"], a: 1, fb: "#11 de Réb = 4te augmentée = Sol naturel (G). Db7#11 contient Sol comme #11. Sol est la fondamentale de G7 — c'est une belle connexion harmonique entre les deux accords substitués. Db7#11 → CMaj7 est très courant en jazz." },
  { q: "Db7#11 → CMaj7 : la #11 (Sol) résout vers...", opts: ["Sol (reste en place dans CMaj7)", "Fa (5te de CMaj7)", "Mi (3ce de CMaj7)", "Ré (9te de CMaj9)"], a: 0, fb: "Sol est à la fois la #11 de Db7 et la quinte de CMaj7. La note reste en place lors de la résolution — c'est une 'common tone' (note commune) qui assure une continuité remarquable entre le sub et la résolution. Technique courante dans les arrangements jazz." },
  // Fonction harmonique
  { q: "La substitution tritonique préserve quelle fonction harmonique ?", opts: ["Tonique", "Sous-dominante", "Dominante (tension → résolution)", "Modale"], a: 2, fb: "Db7 reste un accord de dominante — il crée de la tension (via son triton interne B–F = Cb–F) qui se résout vers C. La fonction dominante est préservée même si la basse change. C'est ce qui rend la substitution harmoniquement cohérente." },
  { q: "Le degré de Db7 dans la gamme de Do majeur est...", opts: ["♭II7 (second degré bémolisé)", "IV7", "VI7", "♭VII7"], a: 0, fb: "Réb est le IIe degré bémolisé de Do majeur (♭II). Db7 utilisé comme substitution tritonique de G7 est donc noté ♭II7 dans l'analyse fonctionnelle. Ce mouvement ♭II7→I est appelé 'résolution napolitaine' dans certaines analyses — bien que le mécanisme jazz soit différent de l'accord napolitain classique." },
  { q: "La substitution tritonique de la dominante secondaire V7/II (A7) en Do est...", opts: ["D7", "Eb7", "E♭7", "Eb7 (= Mi♭7)"], a: 3, fb: "A7 (dominante de Dm) + 6 demi-tons = Eb7. La substitution tritonique de A7 est Eb7. Dans une progression Dm7–A7–G7, on peut substituer : Dm7–Eb7–G7 ou Dm7–Eb7–Db7, créant une descente chromatique Mi♭→Ré♭→Do." },
  { q: "La résolution Db7 → CMaj7 est parfois comparée à la cadence napolitaine car...", opts: ["les deux utilisent un accord sur ♭II", "les deux sont des cadences parfaites", "les deux proviennent du baroque", "les deux utilisent le triton"], a: 0, fb: "L'accord napolitain (♭II6 classique) et la substitution tritonique Db7 partagent le fait d'utiliser un accord dont la fondamentale est ♭II (Réb en Do). Les mécanismes diffèrent (voix leading classique vs triton jazz), mais la fonction ♭II→I est commune." },
  // Voix leading
  { q: "La substitution tritonique améliore la conduite de voix car...", opts: ["elle supprime toutes les dissonances", "elle crée des mouvements par demi-tons (voix leading chromatique) au lieu de sauts de quinte", "elle simplifie l'harmonie", "elle évite le triton"], a: 1, fb: "Les sauts de quinte (G→C) créent une progression forte mais avec de grands intervalles. La substitution tritonique (Db→C) remplace le saut de quinte par un demi-ton, améliorant la linéarité et la fluidité des voix. C'est le voix leading chromatique (chromatic voice leading) du jazz." },
  { q: "Dans la substitution Db7→CMaj7, combien de voix se déplacent par demi-ton ?", opts: ["1", "2", "3", "0"], a: 2, fb: "3 voix bougent par demi-ton : Réb→Do (basse, ½ ton), Fa→Mi (3ce de Db7 → 3ce de CMaj7, ½ ton), Si→Do (♭7te de Db7 → fondamentale de CMaj7, ½ ton ascendant). Seul Lab (5te de Db7) doit sauter vers Sol (quinte de CMaj7). Voix leading exceptionnel !" },
  { q: "Dans la résolution G7→CMaj7 (standard), combien de voix se déplacent par demi-ton ?", opts: ["0", "1", "2", "3"], a: 2, fb: "G7→CMaj7 : Si→Do (½ ton, sensible vers tonique) et Fa→Mi (½ ton, ♭7te vers 3ce). Le Sol (basse) saute à Do (quinte). Ré peut sauter vers Sol ou Do. Deux mouvements par demi-ton — moins lisse que la substitution (3 demi-tons)." },
  // Coltrane avancé
  { q: "Les 'Coltrane changes' divisent l'octave en...", opts: ["2 parties égales (tritons)", "3 parties égales (tierces majeures)", "4 parties égales (tierces mineures)", "6 parties égales (tons entiers)"], a: 1, fb: "Les Coltrane changes divisent l'octave en 3 parties égales par tierces majeures (4 demi-tons chacune) : B → G → E♭ → B (retour). Chaque division de tierce majeure génère un centre tonal temporaire. Ce cycle par tierces majeures est aussi appelé 'mouvement de Coltrane' ou 'cadence de Coltrane'." },
  { q: "Quel album de John Coltrane (1960) a révolutionné l'harmonie jazz ?", opts: ["A Love Supreme", "Kind of Blue", "Giant Steps", "My Favorite Things"], a: 2, fb: "Giant Steps (1960) est l'album qui a introduit les 'Coltrane changes' — une progression harmonique par tierces majeures à une vitesse inouïe. Le titre track 'Giant Steps' est devenu l'un des standards jazz les plus difficiles à improviser." },
  { q: "Le saxophone de Coltrane sur 'A Love Supreme' (1964) utilise plutôt...", opts: ["des Coltrane changes rapides", "un style modal plus statique sur des vamps", "la substitution tritonique systématique", "des gammes pentatoniques uniquement"], a: 1, fb: "A Love Supreme (1964) est plus modal — inspiré par Kind of Blue de Miles Davis. Coltrane utilise ici de longues improvisations sur des vamps modaux plutôt que des progressions harmoniques complexes. C'est un équilibre entre son approche harmonique de Giant Steps et le jazz modal." },
  // Ear training
  { q: "À l'oreille, Db7→C sonne par rapport à G7→C...", opts: ["Plus abrupt et fort", "Plus lisse et chromatique — sensation de 'glissement'", "Identique", "Plus dissonant"], a: 1, fb: "Db7→C sonne plus lisse car la basse descend par demi-ton (Réb→Do). La résolution semble 'glisser' vers la tonique plutôt que d'y 'tomber' (comme dans G→C par quinte). Le résultat est plus surprenant et sophistiqué — signature du jazz moderne." },
  { q: "La basse Réb→Do dans Db7→C crée un intervalle de...", opts: ["seconde majeure (ton)", "seconde mineure (demi-ton)", "tierce mineure", "quinte"], a: 1, fb: "Réb→Do = seconde mineure = demi-ton = 1 demi-ton. C'est le plus petit intervalle de la gamme tempérée occidentale. La résolution par demi-ton descendant est la plus lisse possible — d'où l'effet de 'glissement chromatique' très recherché en jazz." },
  { q: "La basse Sol→Do dans G7→C crée un intervalle de...", opts: ["quarte juste (ascendant)", "quinte juste (descendant)", "tierce majeure", "sixte"], a: 1, fb: "Sol→Do descendant = quinte juste (7 demi-tons). Sol→Do ascendant = quarte juste. En termes de mouvement de basse, on dit 'descente de quinte' (G down to C). C'est le mouvement cadentiel le plus fort de la tonalité." },
  { q: "Peut-on entendre G7 et Db7 utilisés ensemble dans la même mesure ?", opts: ["Non — ils s'excluent mutuellement", "Oui — souvent comme accords de passage chromatiques (G7–Db7–C)", "Oui, mais uniquement en mode mineur", "Non — ils ont le même triton donc sonnent pareils"], a: 1, fb: "G7 et Db7 peuvent coexister comme accords de passage chromatiques : G7–Db7–CMaj7 en une seule progression. La basse descend G→Db→C par triton puis demi-ton. On voit aussi G7–G♭7–C (♭V7 comme passing chord) dans certains arrangements." },
  // Applications avancées
  { q: "Le 'backdoor dominant' (♭VII7→I, ex: Bb7→C) est-il lié à la substitution tritonique ?", opts: ["Non — mécanisme complètement différent", "Oui — Bb7 est le triton sub de E7, pas de G7 (mécanismes voisins mais distincts)", "Oui — c'est exactement la même chose", "Non — le backdoor n'utilise pas de triton"], a: 1, fb: "Le backdoor dominant (Bb7→C = ♭VII7→I) utilise un accord à distance de ton de la tonique, pas de triton. C'est un mécanisme harmonique voisin (résolution par glissement) mais distinct de la substitution tritonique. Ils partagent cependant l'idée de résoudre vers I depuis un accord non-conventionnel." },
  { q: "Dans un blues en La, la cadence IV7–I7 (D7–A7) avec substitution devient...", opts: ["D7–Eb7", "Ab7–A7", "Ab7–Eb7", "D7–Ab7"], a: 3, fb: "D7 (IV7 en La) n'est pas habituellement substitué dans ce contexte. Mais A7 (I7 en blues) → La + 6 = Mi♭. Substitution de A7 = Eb7. Dans le blues, la substitution tritonique s'applique surtout aux V7 (E7→La) : E7 → Bb7. Bb7→A crée une résolution chromatique par ½ ton." },
  { q: "La substitution tritonique peut-elle s'appliquer au IVMaj7 (sous-dominant majeur) ?", opts: ["Oui — FMaj7 peut être substitué par BMaj7", "Non — le IVMaj7 n'a pas de triton instable à résoudre", "Oui, mais seulement en jazz fusion", "Non — le IVMaj7 est toujours stable"], a: 1, fb: "Non. La substitution tritonique ne s'applique qu'aux accords de dominante 7te (contenant un triton instable). Un accord IVMaj7 (FMaj7) a une 7te majeure — son triton interne est différent et n'a pas la même urgence de résolution. Le concept de sub est lié à la tension dominante." },
  { q: "Charlie Parker utilisait souvent dans ses improvisations...", opts: ["des gammes pentatoniques uniquement", "des 'substitutions' et des 'turnarounds' avec les triton subs pour créer des lignes chromatiques", "uniquement la gamme majeure", "des accords de quartes empilées"], a: 1, fb: "Charlie Parker ('Bird') était un maître des substitutions harmoniques — il improvisait sur G7–Db7–C en temps réel, créant des lignes bebop très chromatiques. Il a dit : 'Si vous ne vivez pas dans l'harmonie, vous serez toujours en dehors.' Les triton subs sont au cœur du bebop." },
  { q: "Miles Davis dans 'Round Midnight' (arrangement) utilise des substitutions pour...", opts: ["simplifier les accords originaux de Monk", "enrichir les changements de Monk avec des substitutions chromatiques", "éviter les accords diminués", "transposer le morceau dans une autre tonalité"], a: 1, fb: "Miles Davis et Gil Evans ont enrichi 'Round Midnight' (originalement de Monk) avec de nombreuses substitutions, notamment tritoniques, créant une texture harmonique plus dense. C'est un exemple parfait de réharmonisation jazz utilisant les tritone subs." },
  { q: "La relation entre G7 et Db7 peut aussi être vue comme...", opts: ["une modulation distante", "deux accords à distance d'un triton dont les rôles de guide tones s'inversent", "deux accords ayant la même fondamentale", "deux accords ayant la même 5te"], a: 1, fb: "G7 et Db7 sont à distance d'un triton (6 demi-tons) l'un de l'autre. Leurs guide tones (B/Cb et F) sont exactement les mêmes, avec les rôles inversés (3ce ↔ 7te). C'est une symétrie harmonique élégante au cœur du triton sub." },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const QUIZ_COUNT = 10;

// ── Styles ────────────────────────────────────────────────────────────────────

const PRIMARY   = "#1A3A6E";
const PRIMARY_BG = "#E8EDF5";
const G7_COLOR  = "#BA7517";
const G7_BG     = "#FAEEDA";
const DB7_COLOR = "#7B3FA0";
const DB7_BG    = "#F0EAFA";
const C_COLOR   = "#0F6E56";
const C_BG      = "#E1F5EE";

const S = {
  wrap:     { fontFamily: "var(--font-sans, system-ui)", maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" } as React.CSSProperties,
  header:   { padding: "1.5rem 0 1rem", borderBottom: "0.5px solid #e5e5e5", marginBottom: "1.25rem" } as React.CSSProperties,
  badge:    { display: "inline-block", background: PRIMARY_BG, color: PRIMARY, fontSize: 11, fontWeight: 500, padding: "2px 10px", borderRadius: 20, marginBottom: 6 } as React.CSSProperties,
  h1:       { fontSize: 26, fontWeight: 500, color: "#111", margin: 0 } as React.CSSProperties,
  subtitle: { fontSize: 14, color: "#666", marginTop: 4, lineHeight: 1.6 } as React.CSSProperties,
  nav:      { display: "flex", gap: 6, flexWrap: "wrap" as const, marginBottom: "1.5rem" },
  pill:     (active: boolean): React.CSSProperties => ({
    fontSize: 12, padding: "5px 14px",
    border: `0.5px solid ${active ? "#333" : "#ddd"}`,
    borderRadius: 20, cursor: "pointer",
    background: active ? "#111" : "transparent",
    color: active ? "#fff" : "#666",
    transition: "all .15s",
  }),
  h2:  { fontSize: 17, fontWeight: 500, color: "#111", marginBottom: 8 } as React.CSSProperties,
  h3:  { fontSize: 14, fontWeight: 500, margin: "20px 0 10px", color: "#111" } as React.CSSProperties,
  p:   { fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: "1rem" } as React.CSSProperties,
  info:  { borderLeft: `2px solid ${PRIMARY}`, padding: "8px 14px", background: PRIMARY_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#0D2547", lineHeight: 1.6 } as React.CSSProperties,
  warn:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: G7_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
  tip:   { borderLeft: `2px solid ${C_COLOR}`, padding: "8px 14px", background: C_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#085041", lineHeight: 1.6 } as React.CSSProperties,
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function Cours12() {
  const [activeSection, setActiveSection] = useState<string>("principe");
  const i18n = useCoursI18n("cours12");
  const { questions: ALL_QUESTIONS } = useCoursContent(cours12Content);

  const [quizQuestions] = useState(() => shuffle(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [quizIdx,      setQuizIdx]      = useState(0);
  const [quizScore,    setQuizScore]    = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizDone,     setQuizDone]     = useState(false);
  const [selectedOpt,  setSelectedOpt]  = useState<number | null>(null);

  const pianoRef = useRef<PianoPlayerRef>(null);

  const answerQuiz = (optIdx: number) => {
    if (quizAnswered) return;
    setSelectedOpt(optIdx);
    setQuizAnswered(true);
    if (optIdx === quizQuestions[quizIdx].a) setQuizScore(s => s + 1);
  };

  const nextQuiz = () => {
    if (quizIdx + 1 >= QUIZ_COUNT) setQuizDone(true);
    else { setQuizIdx(i => i + 1); setQuizAnswered(false); setSelectedOpt(null); }
  };

  const resetQuiz = () => {
    setQuizIdx(0); setQuizScore(0);
    setQuizAnswered(false); setSelectedOpt(null); setQuizDone(false);
  };

  const sectionLabel = (id: string) => {
    if (id === "principe") return "Le principe";
    if (id === "application") return "Applications";
    return "Entraînement";
  };

  return (
    <div style={S.wrap}>
      {/* Piano caché */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={4} startOctave={2} showLabels={false} />
      </div>

      {/* Header */}
      <div style={S.header}>
        <span style={S.badge}>Niveau 2 · Cours 12</span>
        <h1 style={S.h1}>La substitution tritonique</h1>
        <p style={S.subtitle}>Remplacer V7 par l&apos;accord situé un triton plus bas — même tension, basse chromatique.</p>
      </div>

      <MaitreCard
        composer="John Coltrane"
        period="1926–1967"
        emoji="🎷"
        concept="Substitution tritonique"
        anecdote="En 1959, Coltrane commence à composer Giant Steps. Il montre ses partitions à ses musiciens lors de la session d'enregistrement. Tommy Flanagan, pianiste de session chevronné, ne l'avait jamais vu. Le résultat s'entend sur l'album : Flanagan improvise avec prudence, sidéré par la vitesse des changements harmoniques — une modulation toutes les deux temps, par tierces majeures. Giant Steps sort en 1960 et redéfinit les limites de l'harmonie jazz."
        lesson="La substitution tritonique, c'est découvrir qu'un accord peut se résoudre vers deux toniques différentes en partageant le même triton. Ce n'est pas de la magie — c'est de la symétrie."
        accentColor={PRIMARY}
      />

      {/* Navigation */}
      <nav style={S.nav}>
        {(["principe", "application", "quiz"] as const).map(id => (
          <button key={id} style={S.pill(activeSection === id)} onClick={() => setActiveSection(id)}>
            {sectionLabel(id)}
          </button>
        ))}
      </nav>

      {/* ══ SECTION 1 : PRINCIPE ══ */}
      {activeSection === "principe" && (
        <div>
          <h2 style={S.h2}>Le principe de la substitution tritonique</h2>
          <p style={S.p}>
            En do majeur, G7 est la dominante naturelle — il résout vers C par descente de quinte.
            La substitution tritonique remplace G7 par <strong>D♭7</strong>, situé
            exactement un triton plus bas (6 demi-tons). D♭7 résout vers C tout aussi bien,
            mais la basse descend par demi-ton (D♭→C) au lieu d&apos;un saut de quinte.
          </p>

          <div style={S.info}>
            <strong>Définition :</strong> la substitution tritonique (tritone substitution, ou &laquo; tri-sub &raquo;)
            remplace tout accord dominant V7 par le dominant situé un triton plus bas.
            G7 → D♭7, D7 → A♭7, A7 → E♭7, E7 → B♭7, etc.
          </div>

          {/* Comparaison sonore */}
          <h3 style={S.h3}>Comparer les deux résolutions</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
            {COMPARISONS.map(card => (
              <div key={card.id} style={{ border: `0.5px solid ${card.color}50`, borderRadius: 10, padding: "14px 16px", background: card.bg }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: card.color, marginBottom: 8, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>
                  {card.title}
                </div>
                <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 10 }}>
                  {card.labels.map((l, i) => (
                    <React.Fragment key={l}>
                      <span style={{ fontFamily: "monospace", fontSize: 16, fontWeight: 700, color: i === card.labels.length - 1 ? C_COLOR : card.color }}>{l}</span>
                      {i < card.labels.length - 1 && <span style={{ color: "#bbb", fontSize: 12 }}>→</span>}
                    </React.Fragment>
                  ))}
                </div>
                <div style={{ fontSize: 12, color: "#555", marginBottom: 6, fontFamily: "monospace" }}>
                  basse : <strong>{card.bassLine}</strong>
                </div>
                <div style={{ fontSize: 12, color: "#666", lineHeight: 1.5, marginBottom: 10 }}>{card.feel}</div>
                <button
                  onClick={() => playSeq(pianoRef as React.RefObject<PianoPlayerRef>, card.chords, 2200)}
                  style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${card.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: card.color }}
                >
                  ▶ Écouter
                </button>
              </div>
            ))}
          </div>

          {/* Pourquoi ça fonctionne */}
          <h3 style={S.h3}>Pourquoi ça fonctionne — le triton partagé</h3>
          <p style={S.p}>
            G7 et D♭7 partagent exactement les mêmes deux notes de guide (3ce et 7te),
            mais leurs rôles sont inversés. C&apos;est ce triton commun qui leur permet
            de résoudre tous les deux vers C.
          </p>

          {/* Carte visuelle triton partagé */}
          <div style={{ border: "0.5px solid #e5e5e5", borderRadius: 12, overflow: "hidden", marginBottom: 16 }}>
            {/* G7 */}
            <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", borderBottom: "0.5px solid #e5e5e5" }}>
              <div style={{ background: G7_BG, padding: "12px 16px", display: "flex", alignItems: "center" }}>
                <span style={{ fontFamily: "monospace", fontSize: 18, fontWeight: 700, color: G7_COLOR }}>G7</span>
              </div>
              <div style={{ padding: "12px 16px" }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" as const }}>
                  {[
                    { note: "G", role: "Fondamentale", dim: true },
                    { note: "B", role: "3ce ↔", shared: true },
                    { note: "D", role: "5te", dim: true },
                    { note: "F", role: "♭7te ↔", shared: true },
                  ].map(n => (
                    <div key={n.note} style={{ textAlign: "center" as const, minWidth: 44 }}>
                      <div style={{
                        fontFamily: "monospace", fontSize: 15, fontWeight: 700,
                        color: n.shared ? G7_COLOR : "#bbb",
                        background: n.shared ? G7_BG : "transparent",
                        border: n.shared ? `1px solid ${G7_COLOR}` : "1px solid #e5e5e5",
                        borderRadius: 6, padding: "4px 8px", marginBottom: 2,
                      }}>{n.note}</div>
                      <div style={{ fontSize: 10, color: n.shared ? G7_COLOR : "#ccc" }}>{n.role}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* flèche d'inversion */}
            <div style={{ background: "#f8f8f8", padding: "6px 16px", borderBottom: "0.5px solid #e5e5e5", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 11, color: "#888" }}>B = C♭ (enharmonique) · F = F — les 2 notes restent, les rôles s&apos;inversent</span>
            </div>
            {/* Db7 */}
            <div style={{ display: "grid", gridTemplateColumns: "140px 1fr" }}>
              <div style={{ background: DB7_BG, padding: "12px 16px", display: "flex", alignItems: "center" }}>
                <span style={{ fontFamily: "monospace", fontSize: 18, fontWeight: 700, color: DB7_COLOR }}>D♭7</span>
              </div>
              <div style={{ padding: "12px 16px" }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" as const }}>
                  {[
                    { note: "D♭", role: "Fondamentale", dim: true },
                    { note: "F",  role: "3ce ↔", shared: true },
                    { note: "A♭", role: "5te", dim: true },
                    { note: "C♭(=B)", role: "♭7te ↔", shared: true },
                  ].map(n => (
                    <div key={n.note} style={{ textAlign: "center" as const, minWidth: 44 }}>
                      <div style={{
                        fontFamily: "monospace", fontSize: 13, fontWeight: 700,
                        color: n.shared ? DB7_COLOR : "#bbb",
                        background: n.shared ? DB7_BG : "transparent",
                        border: n.shared ? `1px solid ${DB7_COLOR}` : "1px solid #e5e5e5",
                        borderRadius: 6, padding: "4px 8px", marginBottom: 2,
                      }}>{n.note}</div>
                      <div style={{ fontSize: 10, color: n.shared ? DB7_COLOR : "#ccc" }}>{n.role}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div style={S.tip}>
            <strong>La résolution du triton :</strong> B→C (demi-ton ascendant) et F→E (demi-ton descendant).
            Ces deux mouvements convergent vers la tonique et sa 3ce — c&apos;est l&apos;attraction du triton
            vers la tierce majeure de la tonique, que la basse soit G ou D♭.
          </div>

          {/* Table des substitutions */}
          <h3 style={S.h3}>Les 6 paires de substitutions tritoniques</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {["V7 original", "Sub tritonique", "Triton partagé", "Mouvement de basse"].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 10px", fontWeight: 500, color: "#666", whiteSpace: "nowrap" as const }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SUB_TABLE.map((r, i) => (
                  <tr key={r.original} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "7px 10px", fontFamily: "monospace", fontWeight: 700, color: G7_COLOR }}>{r.original}</td>
                    <td style={{ padding: "7px 10px", fontFamily: "monospace", fontWeight: 700, color: DB7_COLOR }}>{r.sub}</td>
                    <td style={{ padding: "7px 10px", fontFamily: "monospace", fontSize: 11, color: "#555" }}>{r.sharedTones}</td>
                    <td style={{ padding: "7px 10px", fontFamily: "monospace", fontSize: 11, color: C_COLOR }}>{r.bassMove}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ══ SECTION 2 : APPLICATIONS ══ */}
      {activeSection === "application" && (
        <div>
          <h2 style={S.h2}>Applications pratiques</h2>
          <p style={S.p}>
            La substitution tritonique s&apos;applique à tout accord dominant 7te,
            qu&apos;il soit le V7 principal ou une dominante secondaire.
            Son effet le plus recherché est la ligne de basse chromatique descendante.
          </p>

          {/* II-V-I comparaison */}
          <h3 style={S.h3}>II – V – I : standard vs substitution</h3>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: 10, marginBottom: 24 }}>
            {/* Standard */}
            <div style={{ border: `0.5px solid ${G7_COLOR}40`, borderRadius: 10, padding: "14px 16px", background: G7_BG }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: G7_COLOR, marginBottom: 10, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>Standard</div>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 10, flexWrap: "wrap" as const }}>
                {[
                  { sym: "Dm7", fn: "II", color: "#185FA5" },
                  { sym: "G7",  fn: "V", color: G7_COLOR },
                  { sym: "CMaj7", fn: "I", color: C_COLOR },
                ].map((c, i, arr) => (
                  <React.Fragment key={c.sym}>
                    <div style={{ textAlign: "center" as const }}>
                      <div style={{ fontFamily: "monospace", fontSize: 18, fontWeight: 700, color: c.color }}>{c.sym}</div>
                      <div style={{ fontSize: 10, color: "#888" }}>{c.fn}</div>
                    </div>
                    {i < arr.length - 1 && <span style={{ color: "#bbb" }}>→</span>}
                  </React.Fragment>
                ))}
              </div>
              <div style={{ fontFamily: "monospace", fontSize: 12, color: "#888", marginBottom: 10 }}>
                Basse : <strong>D → G → C</strong> (5tes descendantes)
              </div>
              <button
                onClick={() => playSeq(pianoRef as React.RefObject<PianoPlayerRef>, [DM7, G7, CMAJ7], 2200)}
                style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${G7_COLOR}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: G7_COLOR }}
              >
                ▶ Écouter II-V-I standard
              </button>
            </div>

            {/* Avec sub */}
            <div style={{ border: `0.5px solid ${DB7_COLOR}40`, borderRadius: 10, padding: "14px 16px", background: DB7_BG }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: DB7_COLOR, marginBottom: 10, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>Avec substitution tritonique</div>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 10, flexWrap: "wrap" as const }}>
                {[
                  { sym: "Dm7", fn: "II", color: "#185FA5" },
                  { sym: "D♭7", fn: "♭II", color: DB7_COLOR },
                  { sym: "CMaj7", fn: "I", color: C_COLOR },
                ].map((c, i, arr) => (
                  <React.Fragment key={c.sym}>
                    <div style={{ textAlign: "center" as const }}>
                      <div style={{ fontFamily: "monospace", fontSize: 18, fontWeight: 700, color: c.color }}>{c.sym}</div>
                      <div style={{ fontSize: 10, color: "#888" }}>{c.fn}</div>
                    </div>
                    {i < arr.length - 1 && <span style={{ color: "#bbb" }}>→</span>}
                  </React.Fragment>
                ))}
              </div>
              <div style={{ fontFamily: "monospace", fontSize: 12, color: DB7_COLOR, marginBottom: 10 }}>
                Basse : <strong>D → D♭ → C</strong> (descente chromatique !)
              </div>
              <button
                onClick={() => playSeq(pianoRef as React.RefObject<PianoPlayerRef>, [DM7, DB7, CMAJ7], 2200)}
                style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${DB7_COLOR}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: DB7_COLOR }}
              >
                ▶ Écouter II-♭II-I (avec sub)
              </button>
            </div>
          </div>

          <div style={S.info}>
            <strong>La ligne de basse D → D♭ → C</strong> est l&apos;une des progressions
            les plus caractéristiques du jazz. Le pianiste ou le bassiste peut construire cette
            descente chromatique dans la voix de basse, indépendamment des voix supérieures.
          </div>

          {/* Substitutions sur d'autres degrés */}
          <h3 style={S.h3}>Substitution sur les dominantes secondaires</h3>
          <p style={S.p}>
            Tout accord dominant 7te (y compris les dominantes secondaires V7/X) peut être substitué.
            Dans une progression avec plusieurs dominantes, on peut créer une descente
            chromatique continue dans la basse.
          </p>

          <div style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, overflow: "hidden", marginBottom: 16 }}>
            {[
              { label: "V7/II  (A7 → Dm)", orig: "A7", sub: "E♭7", bass: "Eb → D (½ ton)" },
              { label: "V7/V   (D7 → G7)", orig: "D7", sub: "A♭7", bass: "Ab → G (½ ton)" },
              { label: "V7     (G7 → C)",  orig: "G7", sub: "D♭7", bass: "Db → C (½ ton)" },
            ].map((r, i) => (
              <div key={r.orig} style={{ display: "grid", gridTemplateColumns: "160px 80px 80px 1fr", alignItems: "center", padding: "10px 16px", borderBottom: i < 2 ? "0.5px solid #f0f0f0" : "none", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                <div style={{ fontSize: 12, color: "#555" }}>{r.label}</div>
                <div style={{ fontFamily: "monospace", fontSize: 13, fontWeight: 600, color: G7_COLOR }}>{r.orig}</div>
                <div style={{ fontFamily: "monospace", fontSize: 13, fontWeight: 600, color: DB7_COLOR }}>{r.sub}</div>
                <div style={{ fontFamily: "monospace", fontSize: 11, color: C_COLOR }}>{r.bass}</div>
              </div>
            ))}
          </div>

          {/* Exemples jazz */}
          <h3 style={S.h3}>Exemples jazz célèbres</h3>

          {[
            {
              title: "Autumn Leaves — Miles Davis / Bill Evans",
              color: PRIMARY,
              bg: PRIMARY_BG,
              body: "La progression Am7♭5–D7–Gm est l'une des plus connues du répertoire jazz. Avec tritone sub : Am7♭5–A♭7–Gm. La basse descend A–A♭–G chromatiquement. Bill Evans et Miles Davis utilisent cette substitution dans leurs versions emblématiques d'Autumn Leaves.",
            },
            {
              title: "Round Midnight — Thelonious Monk",
              color: DB7_COLOR,
              bg: DB7_BG,
              body: "Monk, inventeur de nombreuses substitutions, utilise des triton subs dans Round Midnight pour enrichir sa propre composition. Miles Davis et Gil Evans développent ces idées dans leur version avec arrangement orchestral (1957). La richesse chromatique de cette pièce doit beaucoup aux substitutions.",
            },
            {
              title: "Giant Steps — John Coltrane",
              color: "#993C1D",
              bg: "#FAECE7",
              body: "Giant Steps (1960) pousse la logique de substitution au-delà du triton : Coltrane divise l'octave en 3 parties égales par tierces majeures (B → G → E♭), créant des changements harmoniques à une vitesse inouïe. C'est l'extension ultime du concept de substitution — non plus par triton, mais par tierce majeure.",
            },
          ].map(item => (
            <div key={item.title} style={{ border: `0.5px solid ${item.color}30`, borderRadius: 10, padding: "14px 16px", background: item.bg, marginBottom: 10 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: item.color, marginBottom: 6 }}>{item.title}</div>
              <div style={{ fontSize: 13, color: "#555", lineHeight: 1.65 }}>{item.body}</div>
            </div>
          ))}

          <div style={S.warn}>
            <strong>Limite de la substitution :</strong> la substitution tritonique s&apos;applique
            aux accords de <em>dominante 7te</em> uniquement (triton interne instable).
            Elle ne s&apos;applique pas aux accords Maj7, mineur 7 ou demi-diminués —
            ces accords n&apos;ont pas le même type de tension à résoudre.
          </div>
        </div>
      )}

      {/* ══ SECTION 3 : QUIZ ══ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.h2}>Entraînement</h2>

          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 8 ? "🎷" : quizScore >= 6 ? "👍" : "💪"}
              </div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>
                Score : {quizScore} / {QUIZ_COUNT}
              </div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
                {quizScore >= 8
                  ? "Excellent — la substitution tritonique n'a plus de secrets !"
                  : quizScore >= 6
                  ? "Bien — encore quelques progressions à pratiquer et ce sera parfait."
                  : "Continue à écouter les deux résolutions — l'oreille s'éduque par comparaison !"}
              </div>
              <button
                onClick={resetQuiz}
                style={{ fontSize: 13, padding: "8px 20px", border: `0.5px solid ${PRIMARY}`, borderRadius: 20, cursor: "pointer", background: PRIMARY_BG, color: PRIMARY }}
              >
                Nouveau quiz
              </button>
            </div>
          ) : (
            <div>
              <div style={{ fontSize: 12, color: "#999", marginBottom: 10 }}>
                Question {quizIdx + 1} / {QUIZ_COUNT}
                <span style={{ marginLeft: 12, color: "#bbb" }}>{ALL_QUESTIONS.length} questions dans le pool</span>
              </div>
              <div style={{ fontSize: 15, fontWeight: 500, color: "#111", lineHeight: 1.6, marginBottom: 16 }}>
                {quizQuestions[quizIdx].q}
              </div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 8 }}>
                {quizQuestions[quizIdx].opts.map((opt, i) => {
                  const isCorrect  = i === quizQuestions[quizIdx].a;
                  const isSelected = selectedOpt === i;
                  let bg = "#fff", border = "#e5e5e5", color = "#333";
                  if (quizAnswered) {
                    if (isCorrect)       { bg = "#E1F5EE"; border = "#0F6E56"; color = "#085041"; }
                    else if (isSelected) { bg = "#FCEBEB"; border = "#A32D2D"; color = "#501313"; }
                  }
                  return (
                    <button key={i} onClick={() => answerQuiz(i)} disabled={quizAnswered}
                      style={{ fontSize: 13, padding: "10px 14px", border: `0.5px solid ${border}`, borderRadius: 8, cursor: quizAnswered ? "default" : "pointer", background: bg, color, textAlign: "left" as const, transition: "all .12s" }}>
                      {opt}
                    </button>
                  );
                })}
              </div>

              {quizAnswered && (
                <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 8, background: selectedOpt === quizQuestions[quizIdx].a ? "#E1F5EE" : "#FCEBEB", fontSize: 13, color: selectedOpt === quizQuestions[quizIdx].a ? "#085041" : "#501313", lineHeight: 1.6 }}>
                  {quizQuestions[quizIdx].fb}
                </div>
              )}

              {quizAnswered && (
                <button onClick={nextQuiz}
                  style={{ marginTop: 12, fontSize: 13, padding: "7px 18px", border: "0.5px solid #333", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#333" }}>
                  {quizIdx + 1 < QUIZ_COUNT ? "Question suivante →" : "Voir mon score"}
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

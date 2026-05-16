"use client";

/**
 * Cours15.tsx
 * Harmonia · Niveau 2 · Cours 15 — Les progressions jazz avancées
 * Convention : affichage anglais, dotKeys PianoPlayer français
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { cours15Content } from "@/data/cours15Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";

// ── Audio helpers ─────────────────────────────────────────────────────────────

function playChord(ref: React.RefObject<PianoPlayerRef>, keys: string[], dur = 1.8) {
  keys.forEach(key => {
    const [n, o] = key.split(":");
    ref.current?.playNote(n, parseInt(o), { duration: dur });
  });
}

function playProg(
  ref: React.RefObject<PianoPlayerRef>,
  chords: string[][],
  gapMs = 1600,
  dur = 1.5,
) {
  chords.forEach((chord, i) => {
    setTimeout(() => playChord(ref, chord, dur), i * gapMs);
  });
}

// ── Chord voicings (ascending pitch order verified) ───────────────────────────

// Basic II-V-I in C major
const DM7:   string[] = ["Ré:3","Fa:3","La:3","Do:4"];         // D F A C
const G7:    string[] = ["Sol:3","Si:3","Ré:4","Fa:4"];         // G B D F
const CMAJ7: string[] = ["Do:3","Mi:3","Sol:3","Si:3"];         // C E G B

// Extended
const DM9:   string[] = ["Ré:3","Fa:3","La:3","Do:4","Mi:4"];  // D F A C E
const G13:   string[] = ["Sol:2","Si:3","Mi:4","Fa:4"];          // G B E F (root,3,13,b7)
const CMAJ9: string[] = ["Do:3","Mi:3","Sol:3","Si:3","Ré:4"];  // C E G B D

// Minor II-V-I (in C minor)
const DM7B5: string[] = ["Ré:3","Fa:3","Lab:3","Do:4"];         // D F Ab C
const G7B9:  string[] = ["Sol:2","Si:3","Fa:4","Lab:4"];         // G B F Ab (b7,b9)
const CM:    string[] = ["Do:3","Mib:3","Sol:3","Do:4"];         // C Eb G C

// Turnaround chords
const AM7:   string[] = ["La:3","Do:4","Mi:4","Sol:4"];         // A C E G
const A7:    string[] = ["La:2","Do#:3","Mi:3","Sol:3"];         // A C# E G
const EB7:   string[] = ["Mib:3","Sol:3","Sib:3","Réb:4"];      // Eb G Bb Db
const DB7:   string[] = ["Réb:3","Fa:3","Lab:3","Si:3"];         // Db F Ab Cb(=B)

// Blues / cycle
const C7:    string[] = ["Do:3","Mi:3","Sol:3","Sib:3"];         // C E G Bb
const F7:    string[] = ["Fa:3","La:3","Do:4","Mib:4"];          // F A C Eb
const FM7:   string[] = ["Fa:3","Lab:3","Do:4","Mib:4"];         // F Ab C Eb (Fm7)
const BB7:   string[] = ["Sib:2","Ré:3","Fa:3","Lab:3"];         // Bb D F Ab
const EBMAJ7: string[] = ["Mib:3","Sol:3","Sib:3","Ré:4"];       // Eb G Bb D

// ── Progression data ──────────────────────────────────────────────────────────

interface Progression {
  id: string;
  name: string;
  romanNumerals: string;
  chordNames: string;
  color: string;
  bg: string;
  description: string;
  tip: string;
  chords: string[][];
}

const PROGRESSIONS: Progression[] = [
  {
    id: "basic",
    name: "II–V–I basique",
    romanNumerals: "IIm7 – V7 – IMaj7",
    chordNames: "Dm7 – G7 – CMaj7",
    color: "#185FA5",
    bg: "#E6F1FB",
    description: "La cellule harmonique fondamentale du jazz. IIm7 installe la sous-dominante, V7 crée la tension maximale via son triton (Si–Fa), IMaj7 résout. Ce mouvement est présent dans quasiment tous les standards de jazz.",
    tip: "Le triton Si–Fa dans G7 résout en deux demi-tons : Si monte vers Do (3ce de C), Fa descend vers Mi (7te de CMaj7). Ce double mouvement chromatique rend la résolution irrésistible.",
    chords: [DM7, G7, CMAJ7],
  },
  {
    id: "extended",
    name: "II–V–I avec extensions",
    romanNumerals: "IIm9 – V13 – IMaj9",
    chordNames: "Dm9 – G13 – CMaj9",
    color: "#6B3FA0",
    bg: "#F0EAFA",
    description: "Même progression avec des extensions (9e, 13e) qui enrichissent la couleur sans changer la fonction. Dm9 ajoute E, G13 ajoute la 13e (E) et conserve la 7te (F), CMaj9 ajoute D à la résolution.",
    tip: "La 13e de G13 (Mi) anticipe la 3ce de CMaj7 (Mi aussi) — note commune qui prépare l'oreille à la résolution. Les extensions ajoutent de la richesse harmonique sans modifier la direction fonctionnelle.",
    chords: [DM9, G13, CMAJ9],
  },
  {
    id: "minor",
    name: "II–V–I mineur",
    romanNumerals: "IIm7b5 – V7b9 – Im",
    chordNames: "Dm7b5 – G7b9 – Cm",
    color: "#8B2252",
    bg: "#FDEEF5",
    description: "Le II–V–I en mode mineur. IIm7b5 (demi-diminué) est le IIe degré naturel du mineur. V7b9 (dominante avec 9e bémolisée) crée une tension encore plus intense, typique du mineur harmonique. Couleur bien plus sombre.",
    tip: "La b9 (Lab dans G7b9) crée un demi-ton avec la fondamentale de l'accord suivant (Sol–Lab–Sol inverse). V7b9 dans un contexte mineur signale immédiatement 'on va en mineur'.",
    chords: [DM7B5, G7B9, CM],
  },
];

// ── Turnaround data ───────────────────────────────────────────────────────────

interface Turnaround {
  id: string;
  name: string;
  chordNames: string;
  color: string;
  bg: string;
  description: string;
  chords: string[][];
}

const TURNAROUNDS: Turnaround[] = [
  {
    id: "basic",
    name: "Turnaround basique",
    chordNames: "CMaj7 – Am7 – Dm7 – G7",
    color: "#0F6E56",
    bg: "#E1F5EE",
    description: "I – VIm – IIm – V : le turnaround classique. Les 2–4 mesures finales d'un chorus qui ramènent vers le début de la grille. VIm prépare IIm, IIm prépare V, V résout vers I (reprise).",
    chords: [CMAJ7, AM7, DM7, G7],
  },
  {
    id: "secondary",
    name: "Avec dominante secondaire",
    chordNames: "CMaj7 – A7 – Dm7 – G7",
    color: "#BA7517",
    bg: "#FAEEDA",
    description: "I – VI7 – IIm – V : le VIm7 devient VI7 (A7), une dominante secondaire (V7/IIm) qui pointe vers Dm7. Ce C# dans A7 crée une tension supplémentaire avant la sous-dominante.",
    chords: [CMAJ7, A7, DM7, G7],
  },
  {
    id: "tritonesub",
    name: "Avec substitutions tritoniques",
    chordNames: "CMaj7 – Eb7 – Dm7 – Db7",
    color: "#993C1D",
    bg: "#FAECE7",
    description: "I – ♭VI7 – IIm – ♭II7 : Eb7 remplace Am7 (par triton de A7) et Db7 remplace G7 (par triton). La basse descend chromatiquement C–Eb–D–Db–C — mouvement très bebop et sophistiqué.",
    chords: [CMAJ7, EB7, DM7, DB7],
  },
];

// ── Cycle demo ────────────────────────────────────────────────────────────────

const CYCLE_DEMO: string[][] = [DM7, G7, CMAJ7, FM7, BB7, EBMAJ7];
const BLUES_DEMO: string[][] = [C7, C7, C7, C7, F7, F7, C7, C7, DM7, G7, C7, G7];

// ── Quiz ───────────────────────────────────────────────────────────────────────

const ALL_QUESTIONS = [
  // II-V-I fondamentaux
  { q: "Que représentent II, V et I dans la progression II–V–I ?", opts: ["Des intervalles de gamme", "Des degrés de la gamme majeure sur lesquels sont construits les accords", "Des numéros de mesures", "Des extensions d'accords"], a: 1, fb: "II, V et I désignent les degrés de la gamme. En C majeur : II = Dm7, V = G7, I = CMaj7. Cette notation chiffrée est transposable dans n'importe quelle tonalité — c'est le grand avantage." },
  { q: "En C majeur, quels sont les accords du II–V–I ?", opts: ["Em7 – A7 – DMaj7", "Dm7 – G7 – CMaj7", "Am7 – D7 – GMaj7", "Fm7 – Bb7 – EbMaj7"], a: 1, fb: "En C : IIm7 = Dm7 (D F A C), V7 = G7 (G B D F), IMaj7 = CMaj7 (C E G B). La cellule fondamentale du jazz — retrouvée dans quasiment tous les standards." },
  { q: "En F majeur, quels sont les accords du II–V–I ?", opts: ["Dm7 – G7 – CMaj7", "Gm7 – C7 – FMaj7", "Am7 – D7 – GMaj7", "Em7 – A7 – DMaj7"], a: 1, fb: "En F : IIm7 = Gm7, V7 = C7, IMaj7 = FMaj7. Même formule transposée. Les jazzmen apprennent le II–V–I dans les 12 tonalités pour naviguer dans n'importe quel standard." },
  { q: "En G majeur, quels sont les accords du II–V–I ?", opts: ["Fm7 – Bb7 – EbMaj7", "Am7 – D7 – GMaj7", "Bm7 – E7 – AMaj7", "Cm7 – F7 – BbMaj7"], a: 1, fb: "En G : IIm7 = Am7, V7 = D7, IMaj7 = GMaj7. Le mouvement IIm7 – V7 – IMaj7 est identique dans toutes les tonalités — seuls les noms des accords changent." },
  { q: "Quel intervalle dans G7 crée la tension de résolution vers CMaj7 ?", opts: ["La quinte (Sol–Ré)", "La tierce (Sol–Si)", "Le triton (Si–Fa)", "L'octave"], a: 2, fb: "Le triton Si–Fa dans G7 est le moteur de résolution. Si (sensible) monte vers Do, Fa (7te) descend vers Mi. Ces deux mouvements chromatiques simultanés rendent la résolution vers CMaj7 irrésistible." },
  { q: "Pourquoi le II–V–I est-il si central en jazz ?", opts: ["Car il n'a que 3 accords", "Car il combine les 3 fonctions tonales : préparation (IIm), tension (V7) et résolution (I)", "Car c'est le seul mouvement harmonique du jazz", "Car il vient du blues"], a: 1, fb: "IIm7 = sous-dominante (prépare), V7 = dominante (crée tension), IMaj7 = tonique (résout). Ces 3 fonctions se retrouvent dans toute la musique tonale — le jazz en a fait sa cellule de base, répétée et transposée à volonté." },
  { q: "Quel est le rôle de IIm7 dans le II–V–I ?", opts: ["Créer la tension maximale", "Préparer V7 — il agit comme sous-dominante, menant naturellement à la dominante", "Résoudre la progression", "Introduire le mode lydien"], a: 1, fb: "IIm7 est la sous-dominante : il prépare V7. En C : Dm7 → G7 est un mouvement naturel de quarte descendante (D→G) très courant. IIm7 'lance' la progression vers V, qui résout vers I." },

  // Extensions
  { q: "Que signifie 'Dm9' dans un II–V–I étendu ?", opts: ["Dm7 avec 9e bémolisée", "Dm7 avec la 9e naturelle (Mi) ajoutée", "Un accord de 9 sons", "Dm7 sans la quinte"], a: 1, fb: "Dm9 = Dm7 + 9e = D F A C E. La 9e (Mi, 2de à l'octave supérieure) enrichit la couleur sans changer la fonction de sous-dominante. Elle apporte une sophistication jazz sans modifier la direction harmonique." },
  { q: "Que signifie 'G13' dans un II–V–I étendu ?", opts: ["G7 à 13 sons", "G7 avec la 13e (Mi) — souvent voicé avec 3e, 13e et 7te, sans 5te ni 9e", "G majeur avec 13e bémolisée", "Un accord de 13 mesures"], a: 1, fb: "G13 = G7 + 13e = G B D F A E. En pratique jazz, voicé G B E F (root, 3, 13, b7). La 13e (Mi) est une note commune avec CMaj7 (sa 3ce) — elle prépare l'oreille à la résolution." },
  { q: "Que signifie 'G7b9' ?", opts: ["G7 avec 9e normale", "G7 avec la 9e bémolisée (Lab)", "G7 avec 7te bémolisée", "G diminué de 9"], a: 1, fb: "G7b9 = G B D F Ab. La b9 (Lab) crée un demi-ton avec la fondamentale et une tension très forte. C'est la couleur typique du V7 en contexte mineur — G7b9 pointe impérativement vers Cm." },
  { q: "La 9e d'un accord Dm9 est :", opts: ["Do (C)", "Fa (F)", "Mi (E)", "La (A)"], a: 2, fb: "Fondamentale D, puis b3=F, 5=A, b7=C, 9=E. La 9e est simplement la 2de à l'octave supérieure. En Dm9 : D F A C E — Mi (E) est la 9e." },
  { q: "La 13e d'un accord G13 est :", opts: ["Mi (E)", "La (A)", "Ré (D)", "Do (C)"], a: 0, fb: "Degrés de G7 : 1=G, 3=B, 5=D, b7=F. La 13e = 6te à l'octave supérieure = E (Mi). En G13, ce Mi naturel est identique à la 3ce de CMaj7 — note commune qui prépare la résolution." },
  { q: "Pourquoi les extensions enrichissent-elles le II–V–I sans le changer harmoniquement ?", opts: ["Car elles remplacent les notes de base", "Car elles ajoutent de la couleur sans modifier la fonction tonale", "Car elles ne s'entendent pas", "Car elles changent le mode"], a: 1, fb: "Les extensions (9e, 11e, 13e) s'ajoutent à la structure fondamentale. Dm9 reste IIm7, G13 reste V7, CMaj9 reste IMaj7. La direction harmonique est inchangée — seule la richesse coloristique augmente." },

  // Minor II-V-I
  { q: "Quel est le IIe degré en C mineur ?", opts: ["Dm7", "Dm7b5 (demi-diminué)", "Ddim7", "D majeur"], a: 1, fb: "En C mineur harmonique : IIe degré = Dm7b5 (D F Ab C) — accord demi-diminué. La 5te est bémolisée (Ab) car la 6te de C mineur est Lab. C'est le IIm7b5 caractéristique du II–V–I mineur." },
  { q: "Pourquoi utilise-t-on G7b9 dans le II–V–I mineur ?", opts: ["Car b9 est plus facile à jouer", "Car Ab est la 6te bémolisée du mineur harmonique — elle devient b9 de G7, créant une tension très forte vers Cm", "Car G7 ne fonctionne pas en mineur", "Car b9 remplace la 7te"], a: 1, fb: "En C mineur harmonique : 6te = Lab (Ab). Cette note devient la b9 de G7b9. G7b9 contient G B D F Ab — la b9 (Ab) crée un demi-ton avec G et une tension maximale vers Cm. C'est l'accord dominant naturel du mineur harmonique." },
  { q: "Quelle est la différence entre Dm7b5 et Ddim7 ?", opts: ["Aucune différence", "Dm7b5 a une 7te mineure (C) ; Ddim7 a une 7te doublement bémolisée (Cb=B)", "Dm7b5 est majeur", "Ddim7 est plus grave"], a: 1, fb: "Dm7b5 (demi-diminué) = D F Ab C (b7 mineure). Ddim7 (diminué complet) = D F Ab Cb (b7 doublement bémolisée = B). Le demi-diminué est le IIm7b5 standard du II–V–I mineur en jazz." },
  { q: "En A mineur, quels sont les accords du II–V–I mineur ?", opts: ["Bm7 – E7 – AMaj7", "Bm7b5 – E7b9 – Am", "Dm7 – G7 – CMaj7", "Cm7 – F7 – BbMaj7"], a: 1, fb: "En A mineur : IIm7b5 = Bm7b5 (B D F A), V7b9 = E7b9 (E G# D F F#... b9 = F naturel), Im = Am. Même formule IIm7b5 – V7b9 – Im, transposée en La mineur." },
  { q: "Dans quelle célèbre progression retrouve-t-on le II–V–I mineur ?", opts: ["I Got Rhythm (Gershwin)", "Autumn Leaves (Kosma)", "Blueberry Hill", "Fly Me to the Moon"], a: 1, fb: "Autumn Leaves alterne II–V–I majeur et II–V–I mineur — c'est pourquoi il est si souvent utilisé pour apprendre. Gm7b5–C7b9–Fm et Cm7–F7–BbMaj7 s'y enchaînent naturellement." },
  { q: "Pourquoi le II–V–I en C mineur utilise-t-il G7 (majeur) et non Gm7 ?", opts: ["Par convention arbitraire", "Car le mineur harmonique monte la 7te (B naturel = sensible), rendant V majeur et créant la résolution vers Im", "Car Gm7 est trop doux", "Car G7 est plus facile à jouer"], a: 1, fb: "La gamme mineure harmonique élève le 7e degré (G→G#, ou en C mineur : B naturel). Cela crée la sensible (B→C) et rend V = G majeur/G7. Sans cette sensible, il n'y aurait pas de résolution forte vers Im." },

  // Rythme harmonique
  { q: "Qu'est-ce que le 'rythme harmonique' ?", opts: ["Le tempo d'un morceau", "La vitesse à laquelle les accords changent dans une progression", "Le rythme de la mélodie", "Le pattern de batterie"], a: 1, fb: "Le rythme harmonique est la fréquence de changement des accords. Rapide : les accords changent toutes les 2 mesures ou moins (Giant Steps). Lent : les accords tiennent 8 ou 16 mesures (So What). C'est une dimension fondamentale de l'identité d'un morceau." },
  { q: "Giant Steps de Coltrane a un rythme harmonique :", opts: ["Très lent — 1 accord par 16 mesures", "Très rapide — tonalités changeant toutes les 1–2 mesures", "Moyen — 1 accord par 4 mesures", "Inexistant"], a: 1, fb: "Giant Steps (1960) est célèbre pour son rythme harmonique extrêmement rapide — les tonalités changent toutes les 1–2 mesures selon un cycle de tierces majeures. Ce 'Coltrane matrix' a révolutionné le jazz en rendant l'improvisation très exigeante." },
  { q: "So What de Miles Davis a un rythme harmonique :", opts: ["Très rapide", "Très lent — D dorien pendant 16 mesures, Eb dorien pendant 8 mesures", "Variable selon le soliste", "Identique à Giant Steps"], a: 1, fb: "So What (1959) exemplifie le rythme harmonique lent du jazz modal. D dorien tient 16 mesures, puis Eb dorien 8 mesures. Aucune résolution V7–I — la couleur modale s'installe et reste." },
  { q: "Un 'turnaround' en jazz est :", opts: ["Un accord diminué", "Les 2–4 mesures finales d'un chorus qui créent la tension nécessaire pour relancer le chorus suivant", "Un changement de tempo", "Une substitution tritonique"], a: 1, fb: "Un turnaround est la séquence harmonique de fin de chorus (souvent I–VI–II–V) qui recrée la tension pour relancer naturellement la grille depuis le début. Il 'tourne' vers la reprise." },
  { q: "Le turnaround basique en C majeur est :", opts: ["C – F – G7 – C", "CMaj7 – Am7 – Dm7 – G7", "Dm7b5 – G7b9 – Cm – G7", "CMaj7 – Fm7 – Bb7 – EbMaj7"], a: 1, fb: "CMaj7 – Am7 – Dm7 – G7 (I – VIm – IIm – V) est le turnaround classique. VIm prépare IIm, IIm prépare V, V résout vers I (reprise). C'est la base de Rhythm Changes et de centaines de standards." },
  { q: "Qu'est-ce que le 'jazz blues sur 12 mesures' ?", opts: ["Le blues classique en mi transposé", "La forme blues (I7–IV7–V7) enrichie d'accords de passage jazz, de II–V et de substitutions", "Un blues de 12 minutes exactement", "Un blues uniquement en mineur"], a: 1, fb: "Le jazz blues garde la forme 12 mesures mais enrichit les accords : I devient I7, des II–V s'ajoutent comme accords de passage, des substitutions remplacent certains accords. Bien plus dense harmoniquement que le blues rock." },
  { q: "Rhythm Changes fait référence à :", opts: ["Un changement de tempo", "La grille harmonique de I Got Rhythm de Gershwin (1930), base de centaines de standards bebop", "Un accord rythmique syncopé", "La substitution tritonique du V7"], a: 1, fb: "Rhythm Changes = grille de I Got Rhythm (Gershwin, 1930). Des centaines de morceaux bebop l'utilisent (Oleo, Anthropology, Cottontail). Structure AABA avec I–VI–II–V répété et un pont de dominantes secondaires." },
  { q: "Qu'est-ce que le cycle des quintes en jazz ?", opts: ["Jouer des gammes en quintes", "Un enchaînement d'accords où chaque accord descend d'une quinte — génère des II–V–I successifs", "Un exercice de doigts", "La progression de Giant Steps"], a: 1, fb: "Cycle des quintes : chaque accord descend d'une quinte. Dm7→G7→CMaj7→Fm7→Bb7→EbMaj7... On y reconnaît des II–V–I enchaînés : Dm7–G7 (II–V en C), Fm7–Bb7 (II–V en Eb). C'est la base du mouvement harmonique jazz." },
  { q: "Pourquoi les musiciens de jazz apprennent-ils le II–V–I dans les 12 tonalités ?", opts: ["Pour impressionner le public", "Car les standards modulent souvent dans plusieurs tonalités — maîtriser toutes les tonalités permet d'improviser sans hésitation", "Car c'est imposé par le conservatoire", "Pour éviter le blues"], a: 1, fb: "Un standard jazz peut passer par 4 à 8 tonalités dans un seul chorus. Connaître II–V–I dans les 12 tonalités permet aux musiciens de naviguer naturellement sans réfléchir à chaque accord." },
  { q: "La forme AABA en jazz signifie :", opts: ["4 parties identiques", "A (8 bars) répété 2 fois, pont B (8 bars), retour A (8 bars) — 32 mesures au total", "Un blues sur 12 mesures", "Une improvisation libre"], a: 1, fb: "AABA est la forme la plus courante des standards jazz sur 32 mesures. A = grille principale, B = pont (souvent dominantes secondaires). Rhythm Changes, I Got Rhythm, et des centaines de standards utilisent cette forme." },

  // Turnarounds avancés
  { q: "Dans le turnaround 'CMaj7 – A7 – Dm7 – G7', A7 est :", opts: ["L'accord de tonique relatif", "Une dominante secondaire (V7/IIm) qui pointe vers Dm7", "Une substitution tritonique de Am7", "L'accord de sous-dominante"], a: 1, fb: "A7 est le V7/IIm — dominante secondaire de Dm7. A7 (A C# E G) contient C# (sensible de D) qui crée une attraction vers Dm7. Comparé à Am7, A7 ajoute une tension intermédiaire plus dynamique." },
  { q: "Dans le turnaround avec substitutions tritoniques 'CMaj7–Eb7–Dm7–Db7', la basse crée :", opts: ["Un mouvement ascendant par tons", "Un mouvement chromatique descendant : C–Eb–D–Db–C", "Un mouvement de quintes descendantes", "Une pédale fixe"], a: 1, fb: "CMaj7–Eb7–Dm7–Db7 : basse C – Eb – D – Db – (C). Mouvement chromatique descendant très caractéristique du bebop. Db7 (substitut tritonique de G7) résout par demi-ton descendant vers C." },
  { q: "Le substitut tritonique de G7 est :", opts: ["F#7", "Db7", "Am7", "Bb7"], a: 1, fb: "Le substitut tritonique de G7 est Db7 — situé un triton (6 demi-tons) plus haut. Db7 (Db F Ab Cb) partage le même triton que G7 (Si/Cb et Fa) avec les rôles inversés. Db7→C est une résolution par demi-ton descendant." },
  { q: "Pourquoi Eb7 peut-il remplacer Am7 dans un turnaround ?", opts: ["Car Eb est la tierce de C", "Car A7 (dominante secondaire de Dm) a Eb7 comme substitut tritonique — un triton plus bas que A7", "Car Eb7 est toujours interchangeable avec Am7", "Car Eb est dans la gamme de C"], a: 1, fb: "Am7 peut devenir A7 (dominante secondaire de Dm). Le substitut tritonique de A7 est Eb7 (un triton plus bas). Ainsi : Am7 → A7 → Eb7 (par substitution tritonique). C'est pourquoi Eb7 apparaît dans les turnarounds bebop." },

  // II-V enchaînés
  { q: "Un enchaînement 'Dm7–G7 | Gm7–C7 | Cm7–F7...' est :", opts: ["Des II–V sans résolution sur I, descendant par quintes", "Des turnarounds successifs", "Des modes enchaînés", "Un blues jazz"], a: 0, fb: "Dm7–G7 (II–V en C), Gm7–C7 (II–V en F), Cm7–F7 (II–V en Bb)... Ce sont des II–V successifs descendant par quintes, sans résolution sur I à chaque fois. C'est la progression de Autumn Leaves et de nombreux standards." },
  { q: "Qu'est-ce qu'un II–V 'sans résolution' ?", opts: ["Une erreur harmonique", "IIm–V7 sans l'accord I — crée une tension suspendue très expressive", "Un accord diminué", "Le mode locrien"], a: 1, fb: "Des IIm7–V7 enchaînés sans jamais atterrir sur I créent une tension harmonique suspendue. L'oreille anticipe I sans le recevoir — technique très expressive utilisée dans les transitions et pour 'déjouer' l'attente de l'auditeur." },
  { q: "Comment transposer II–V–I de C en Bb ?", opts: ["Abaisser tous les accords d'un demi-ton", "IIm7 = Cm7, V7 = F7, IMaj7 = BbMaj7", "Monter d'une quinte", "Changer seulement l'accord I"], a: 1, fb: "En Bb : IIm7 = Cm7, V7 = F7, IMaj7 = BbMaj7. La formule IIm7–V7–IMaj7 est identique, transposée. C'est pourquoi les musiciens apprennent la progression dans les 12 tonalités." },

  // Charlie Parker / bebop
  { q: "Pourquoi Charlie Parker a-t-il révolutionné le jazz ?", opts: ["Il jouait plus fort", "Il a multiplié les substitutions harmoniques et accéléré le rythme harmonique à une vitesse sans précédent", "Il a inventé le saxophone", "Il a supprimé les improvisations"], a: 1, fb: "Parker ('Bird') a transformé le jazz en usant de toutes les substitutions (tritoniques, secondaires), en improvisant sur des grilles très rapides (Rhythm Changes, standards enrichis) et en utilisant systématiquement toutes les extensions (b9, #9, #11, b13...)." },
  { q: "Le bebop se caractérise par :", opts: ["Des tempos lents et progressions simples", "Des tempos très rapides, grilles complexes, nombreuses substitutions et mélodies ornementées", "L'utilisation exclusive du blues", "L'absence d'improvisation"], a: 1, fb: "Le bebop (Parker, Gillespie, Powell, années 1940-50) : tempos élevés, grilles denses (Rhythm Changes, standards enrichis), lignes mélodiques rapides avec chromatismes, usage intensif des substitutions harmoniques." },
  { q: "Giant Steps de Coltrane utilise des II–V–I dans des tonalités séparées de :", opts: ["Quintes (C–G–D–A...)", "Tierces majeures (C–E–Ab–C)", "Demi-tons (C–Db–D...)", "Octaves"], a: 1, fb: "Giant Steps utilise le 'cycle de Coltrane' — II–V–I dans des tonalités séparées de tierces majeures (C–E–Ab). Ces 3 tonalités couvrent les 12 notes chromatiques et créent une progression qui 'tourne' très vite, rendant l'improvisation extrêmement complexe." },
  { q: "Sur quelles formes Parker improvisait-il le plus souvent ?", opts: ["Uniquement le blues en mi bémol", "Le blues jazz 12 mesures et Rhythm Changes principalement", "Des accords modaux (dorien)", "Gammes pentatoniques seulement"], a: 1, fb: "Parker utilisait principalement le blues jazz 12 mesures et les Rhythm Changes (grille de I Got Rhythm) — deux formes qu'il a enrichies de toutes les substitutions possibles. Ko-Ko, Ornithology, Anthropology... toutes ces compositions reposent sur ces grilles." },
  { q: "Qu'est-ce qu'un 'rootless voicing' en jazz ?", opts: ["Un accord sans tierce", "Un voicing sans fondamentale — souvent joué par le pianiste quand le bassiste tient la fondamentale", "Un accord diminué", "Un accord avec 7te bémolisée"], a: 1, fb: "Un rootless voicing omet la fondamentale : comme le bassiste la joue, le pianiste place 3e, 7te et extensions dans un espace plus compact et sonore. Ex. G13 rootless : B E F (3, 13, b7) sans G en bas." },
  { q: "Qu'est-ce qu'une 'grille' en jazz ?", opts: ["Une partition complète", "La séquence d'accords (durée et hauteur) sur laquelle les musiciens improvisent", "Un exercice de gammes", "Un effet de réverbération"], a: 1, fb: "La 'grille' (ou 'changes') est la séquence d'accords du morceau. Les musiciens jazz l'apprennent par cœur et improvisent 'sur' la grille. Le 'lead sheet' contient grille et mélodie — sans indication de voicing." },

  // Révision générale
  { q: "Dans le II–V–I 'Dm7 – G7 – CMaj7', quel accord crée la tension maximale ?", opts: ["Dm7 (II)", "G7 (V)", "CMaj7 (I)", "Ils ont tous la même tension"], a: 1, fb: "G7 (V) crée la tension maximale via son triton (Si–Fa). C'est la dominante — son rôle est de créer l'attraction vers I. Dm7 prépare G7 (sous-dominante), CMaj7 résout (tonique)." },
  { q: "Quelle extension est la plus couramment utilisée sur V7 en contexte mineur ?", opts: ["La 9e majeure", "La 9e bémolisée (b9)", "La 11te augmentée", "La 5te bémolisée"], a: 1, fb: "V7b9 est quasi-obligatoire en contexte mineur. G7b9 en C mineur — la b9 (Ab) est la 6te bémolisée du mineur harmonique, ce qui crée une tension maximale et une couleur très sombre vers Im." },
  { q: "Un II–V–I en C mineur (Dm7b5–G7b9–Cm) est plus _______ qu'en majeur.", opts: ["Joyeux", "Sombre et dramatique", "Rapide", "Stable"], a: 1, fb: "Le II–V–I mineur (Dm7b5–G7b9–Cm) est bien plus sombre que le majeur (Dm7–G7–CMaj7). Dm7b5 est instable (quinte diminuée), G7b9 est très tendu (b9 chromatique), Cm résout en mineur — couleur dramatique typique d'Autumn Leaves ou Misty." },
  { q: "Pourquoi enchaîner plusieurs II–V–I dans différentes tonalités ?", opts: ["Pour jouer plus de notes", "Pour naviguer dans plusieurs tonalités et créer un mouvement harmonique élaboré — typique du bebop", "Pour éviter les quintes parallèles", "Pour raccourcir le morceau"], a: 1, fb: "Enchaîner des II–V–I dans des tonalités différentes crée une progression modulante. Ex. Dm7–G7–CMaj7 (en C) → Gm7–C7–FMaj7 (en F) → Cm7–F7–BbMaj7 (en Bb)... Le jazz moderne navigue ainsi dans de nombreuses tonalités à chaque chorus." },
  { q: "Qu'est-ce qu'un 'standard jazz' ?", opts: ["Un tempo fixe de 120 BPM", "Un morceau dont la grille est si connue que les musiciens l'improvisent de mémoire", "Un accord de dominante", "Un blues sur 12 mesures"], a: 1, fb: "Un standard est une composition dont la grille (et souvent la mélodie) est connue de tous les jazzmen. All The Things You Are, Autumn Leaves, Round Midnight... Les musiciens improvisent 'sur les changes' sans partition." },
  { q: "La structure du jazz blues sur 12 mesures en C est :", opts: ["8 mesures de C7, 4 mesures de G7", "C7 (4 bars) – F7 (2 bars) – C7 (2 bars) – IIm–V (2 bars) – C7–G7 (2 bars)", "I – II – III – IV – V – VI – V – IV – III – II – I – I", "16 mesures égales"], a: 1, fb: "Jazz blues (12 bars en C) : C7 (4) | F7 (2) | C7 (2) | Dm7–G7 (2) | C7–G7 (2). Les substitutions varient selon les musiciens mais la forme reste : I7 – IV7 – I7 – II–V – I7." },
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
const SECTIONS_IDS = ["iivi", "rythme", "quiz"] as const;
type SectionId = typeof SECTIONS_IDS[number];

const PRIMARY    = "#7B1F1F";
const PRIMARY_BG = "#FCEAEA";

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
  h2:       { fontSize: 17, fontWeight: 500, color: "#111", marginBottom: 8 } as React.CSSProperties,
  p:        { fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: "1rem" } as React.CSSProperties,
  infoBox:  { borderLeft: `2px solid ${PRIMARY}`, padding: "8px 14px", background: PRIMARY_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#5A1010", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
  tip:      { borderLeft: "2px solid #0F6E56", padding: "8px 14px", background: "#E1F5EE", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#085041", lineHeight: 1.6 } as React.CSSProperties,
};

export default function Cours15() {
  const [activeSection, setActiveSection] = useState<SectionId>("iivi");
  const i18n = useCoursI18n("cours15");
  const { questions: ALL_QUESTIONS } = useCoursContent(cours15Content);
  const [activeProg, setActiveProg]         = useState<string | null>(null);
  const [activeTurnaround, setActiveTurnaround] = useState<string | null>(null);

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

  const sectionLabel = (id: SectionId) => {
    if (id === "iivi")   return "II–V–I avancé";
    if (id === "rythme") return "Rythme & turnarounds";
    return "Entraînement";
  };

  return (
    <div style={S.wrap}>
      {/* Piano caché */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={3} startOctave={2} showLabels={false} />
      </div>

      {/* Header */}
      <div style={S.header}>
        <span style={S.badge}>Niveau 2 · Cours 15</span>
        <h1 style={S.h1}>Les progressions jazz avancées</h1>
        <p style={S.subtitle}>
          II–V–I avec extensions, version mineure, rythme harmonique, turnarounds et jazz blues.
        </p>
      </div>

      <MaitreCard
        composer="Charlie Parker"
        period="1920–1955"
        emoji="🎷"
        concept="Bebop & substitutions"
        anecdote="Parker ('Bird') improvise en 1945 sur Koko (grille de Cherokee) à une vitesse qui stupéfie ses contemporains. Il utilise simultanément des substitutions tritoniques, des dominantes secondaires et des extensions b9/#9 que personne n'avait enchaînées aussi rapidement. Dizzy Gillespie dit : 'Il entendait des choses que nous n'entendions même pas encore.'"
        lesson="Le II–V–I n'est pas une formule — c'est un espace d'exploration. Plus tu en maîtrises les variations (extensions, substitutions, enchaînements), plus tu as de couleurs à ta disposition."
        accentColor={PRIMARY}
      />

      {/* Navigation */}
      <nav style={S.nav}>
        {SECTIONS_IDS.map(id => (
          <button key={id} style={S.pill(activeSection === id)} onClick={() => setActiveSection(id)}>
            {sectionLabel(id)}
          </button>
        ))}
      </nav>

      {/* ══ SECTION 1 : II-V-I AVANCÉ ══ */}
      {activeSection === "iivi" && (
        <div>
          <h2 style={S.h2}>Le II–V–I — trois versions</h2>
          <p style={S.p}>
            Le II–V–I est la cellule harmonique fondamentale du jazz. IIm7 prépare, V7 crée la tension,
            IMaj7 résout. Cette même structure existe en version basique, avec extensions, et en mineur —
            trois couleurs très différentes sur la même architecture.
          </p>
          <div style={S.infoBox}>
            <strong>Principe clé :</strong> le triton dans V7 (Si–Fa en G7) est le moteur de la résolution.
            Si monte vers Do (3ce de CMaj7), Fa descend vers Mi (7te de CMaj7) — double mouvement
            chromatique irrésistible qui définit la cadence jazz.
          </div>

          {PROGRESSIONS.map(prog => (
            <div
              key={prog.id}
              style={{
                border: `0.5px solid ${activeProg === prog.id ? prog.color : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 10,
                overflow: "hidden",
                cursor: "pointer",
                background: activeProg === prog.id ? prog.bg : "#fff",
                transition: "all .15s",
              }}
              onClick={() => setActiveProg(activeProg === prog.id ? null : prog.id)}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                    <span style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>{prog.name}</span>
                  </div>
                  <div style={{ fontFamily: "monospace", fontSize: 12, color: prog.color }}>
                    {prog.romanNumerals} · {prog.chordNames}
                  </div>
                </div>
                <div style={{ fontSize: 11, color: "#bbb" }}>{activeProg === prog.id ? "▲" : "▼"}</div>
              </div>

              {activeProg === prog.id && (
                <div style={{ padding: "0 16px 16px", borderTop: `0.5px solid ${prog.color}20` }}>
                  <p style={{ ...S.p, marginTop: 12 }}>{prog.description}</p>
                  <div style={{ ...S.tip, marginBottom: 14 }}>
                    <strong>À l'oreille :</strong> {prog.tip}
                  </div>
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      playProg(pianoRef as React.RefObject<PianoPlayerRef>, prog.chords, 1600, 1.5);
                    }}
                    style={{ fontSize: 12, padding: "6px 16px", border: `0.5px solid ${prog.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: prog.color }}
                  >
                    ▶ Écouter {prog.chordNames}
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* Tableau II-V-I dans 4 tonalités */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "24px 0 10px", color: "#111" }}>
            II–V–I dans 4 tonalités
          </h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {["Tonalité", "IIm7", "V7", "IMaj7"].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 12px", fontWeight: 500, color: "#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["C majeur",  "Dm7",  "G7",  "CMaj7"],
                  ["F majeur",  "Gm7",  "C7",  "FMaj7"],
                  ["Bb majeur", "Cm7",  "F7",  "BbMaj7"],
                  ["G majeur",  "Am7",  "D7",  "GMaj7"],
                ].map(([key, ii, v, i], idx) => (
                  <tr key={key} style={{ borderBottom: "0.5px solid #f0f0f0", background: idx % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "7px 12px", fontWeight: 500, color: "#444" }}>{key}</td>
                    <td style={{ padding: "7px 12px", fontFamily: "monospace", color: "#185FA5" }}>{ii}</td>
                    <td style={{ padding: "7px 12px", fontFamily: "monospace", color: PRIMARY }}>{v}</td>
                    <td style={{ padding: "7px 12px", fontFamily: "monospace", color: "#0F6E56" }}>{i}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.warnBox}>
            <strong>Entraînement essentiel :</strong> apprends à jouer (ou chanter) le II–V–I dans
            les 12 tonalités. Les standards modulent constamment — connaître la progression dans
            toutes les tonalités est la condition sine qua non pour improviser librement.
          </div>
        </div>
      )}

      {/* ══ SECTION 2 : RYTHME & TURNAROUNDS ══ */}
      {activeSection === "rythme" && (
        <div>
          <h2 style={S.h2}>Rythme harmonique & turnarounds</h2>
          <p style={S.p}>
            Le <strong>rythme harmonique</strong> est la vitesse à laquelle les accords changent.
            C'est une dimension fondamentale de l'identité d'un morceau — aussi importante que
            le tempo ou la mélodie. Les turnarounds sont les progressions de fin de chorus qui
            "tournent" vers la reprise.
          </p>

          {/* Comparaison rapide / lent */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "0 0 10px", color: "#111" }}>
            Rapide vs lent — deux approches
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: "1.5rem" }}>
            <div style={{ border: `0.5px solid ${PRIMARY}`, borderRadius: 10, padding: "14px 16px", background: PRIMARY_BG }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: PRIMARY, marginBottom: 6 }}>Giant Steps — rapide</div>
              <div style={{ fontSize: 12, color: "#555", lineHeight: 1.6, marginBottom: 8 }}>
                Coltrane (1960). Les tonalités changent toutes les 1–2 mesures selon un cycle
                de tierces majeures (C–E–Ab). Rythme harmonique extrêmement dense.
              </div>
              <div style={{ fontFamily: "monospace", fontSize: 11, color: "#888" }}>
                BMaj7 – D7 – GMaj7 – Bb7 – EbMaj7...
              </div>
            </div>
            <div style={{ border: "0.5px solid #185FA5", borderRadius: 10, padding: "14px 16px", background: "#E6F1FB" }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: "#185FA5", marginBottom: 6 }}>So What — lent</div>
              <div style={{ fontSize: 12, color: "#555", lineHeight: 1.6, marginBottom: 8 }}>
                Miles Davis (1959). D dorien pendant 16 mesures, Eb dorien pendant 8 mesures.
                Rythme harmonique modal très lent — la couleur s'installe et reste.
              </div>
              <div style={{ fontFamily: "monospace", fontSize: 11, color: "#888" }}>
                D dorien ×16 | Eb dorien ×8 | D dorien ×8
              </div>
            </div>
          </div>

          {/* Cycle des quintes */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 10px", color: "#111" }}>
            Cycle des quintes — II–V enchaînés
          </h3>
          <p style={S.p}>
            Enchaîner des II–V dans des tonalités descendant par quintes est la base de nombreux standards.
            Dm7–G7 (II–V en C), puis Gm7–C7 (II–V en F), puis Cm7–F7 (II–V en Bb)... On reconnaît
            Autumn Leaves, All The Things You Are, et des dizaines d'autres.
          </p>
          <div style={{ padding: "12px 16px", background: "#f8f8f8", borderRadius: 8, marginBottom: 14 }}>
            <div style={{ fontFamily: "monospace", fontSize: 12, color: "#444", marginBottom: 8 }}>
              Dm7 – G7 – CMaj7 – Fm7 – Bb7 – EbMaj7...
            </div>
            <div style={{ fontSize: 12, color: "#888", marginBottom: 10 }}>
              (II–V–I en C) → (II–V en Eb) → ...
            </div>
            <button
              onClick={() => playProg(pianoRef as React.RefObject<PianoPlayerRef>, CYCLE_DEMO, 1400, 1.4)}
              style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${PRIMARY}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: PRIMARY }}
            >
              ▶ Écouter le cycle
            </button>
          </div>

          {/* Jazz blues */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 10px", color: "#111" }}>
            Jazz blues — 12 mesures en C
          </h3>
          <div style={{ overflowX: "auto", marginBottom: 14 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6, minWidth: 480 }}>
              {[
                { chord: "C7", bar: 1 }, { chord: "F7", bar: 2 }, { chord: "C7", bar: 3 }, { chord: "C7", bar: 4 },
                { chord: "F7", bar: 5 }, { chord: "F7", bar: 6 }, { chord: "C7", bar: 7 }, { chord: "Am7", bar: 8 },
                { chord: "Dm7", bar: 9 }, { chord: "G7", bar: 10 }, { chord: "C7", bar: 11 }, { chord: "G7", bar: 12 },
              ].map(({ chord, bar }) => (
                <div key={bar} style={{
                  border: "0.5px solid #e5e5e5",
                  borderRadius: 6,
                  padding: "8px 10px",
                  background: chord.includes("7") && !chord.includes("Maj") && !chord.includes("m") ? "#FAEEDA" : "#fafafa",
                  fontSize: 12,
                }}>
                  <div style={{ fontSize: 10, color: "#bbb", marginBottom: 2 }}>{bar}</div>
                  <div style={{ fontFamily: "monospace", fontWeight: 500, color: "#333" }}>{chord}</div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => playProg(pianoRef as React.RefObject<PianoPlayerRef>, BLUES_DEMO, 1200, 1.1)}
            style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${PRIMARY}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: PRIMARY, marginBottom: "1.5rem" }}
          >
            ▶ Écouter le blues jazz
          </button>

          {/* Turnarounds */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 10px", color: "#111" }}>
            Turnarounds — 3 versions
          </h3>
          {TURNAROUNDS.map(ta => (
            <div
              key={ta.id}
              style={{
                border: `0.5px solid ${activeTurnaround === ta.id ? ta.color : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 8,
                overflow: "hidden",
                cursor: "pointer",
                background: activeTurnaround === ta.id ? ta.bg : "#fff",
                transition: "all .15s",
              }}
              onClick={() => setActiveTurnaround(activeTurnaround === ta.id ? null : ta.id)}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#111", marginBottom: 2 }}>{ta.name}</div>
                  <div style={{ fontFamily: "monospace", fontSize: 12, color: ta.color }}>{ta.chordNames}</div>
                </div>
                <div style={{ fontSize: 11, color: "#bbb" }}>{activeTurnaround === ta.id ? "▲" : "▼"}</div>
              </div>
              {activeTurnaround === ta.id && (
                <div style={{ padding: "0 16px 14px", borderTop: `0.5px solid ${ta.color}20` }}>
                  <p style={{ ...S.p, marginTop: 10 }}>{ta.description}</p>
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      playProg(pianoRef as React.RefObject<PianoPlayerRef>, ta.chords, 1500, 1.4);
                    }}
                    style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${ta.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: ta.color }}
                  >
                    ▶ Écouter {ta.chordNames}
                  </button>
                </div>
              )}
            </div>
          ))}

          <div style={S.tip}>
            <strong>Rhythm Changes :</strong> la grille de I Got Rhythm (Gershwin, 1930) est la
            base de centaines de standards bebop — Anthropology, Oleo, Cottontail. Structure AABA
            de 32 mesures : section A = I–VI–II–V répété, pont B = dominantes secondaires.
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
                {i18n.quizMessage(quizScore, QUIZ_COUNT)}
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

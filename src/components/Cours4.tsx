"use client";

/**
 * Cours4.tsx
 * Harmonia · Niveau 1 · Cours 4 — Cadences et progressions
 *
 * TODO: i18n — basculer vers next-intl (passe dédiée)
 *
 * Sections :
 * 1. Les cadences — définition et 5 types
 * 2. Techniques d'enchaînement — extension, pendule, cycle des quintes
 * 3. Entraînement — quiz
 *
 * Convention Harmonia : noms de notes en anglais (C D E F G A B)
 * Audio : PianoPlayer via playChord / playProgression
 */

import React, { useRef, useState, useCallback } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import { SATB } from "@/lib/satb-voicings";
import MaitreCard from "@/components/MaitreCard";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Section {
  id: string;
  label: string;
}

// ─── Helpers audio ────────────────────────────────────────────────────────────

// PianoPlayer attend des noms de notes EN FRANÇAIS (Do Ré Mi Fa Sol La Si)
// Les dotKeys ont le format "NomFrançais:octave"
const CHORDS = SATB;

// Joue une note de basse + accord au-dessus
function playChord(ref: React.RefObject<PianoPlayerRef>, keys: string[], duration = 1.8) {
  keys.forEach((key, i) => {
    const [note, octStr] = key.split(":");
    setTimeout(() => ref.current?.playNote(note, parseInt(octStr), { duration }), 0);
  });
}

function playProgression(
  ref: React.RefObject<PianoPlayerRef>,
  chordNames: string[],
  gap = 900
) {
  chordNames.forEach((name, i) => {
    const keys = CHORDS[name] ?? [];
    setTimeout(() => playChord(ref, keys, 1.2), i * gap);
  });
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SECTIONS_IDS = ["cadences","progressions","quiz"] as const;

interface CadenceDef {
  id: string;
  name: string;
  structure: string;
  progression: string[];
  condition?: string;
  effect: string;
  color: string;
  bg: string;
  analogy: string;
}

const CADENCES: CadenceDef[] = [
  {
    id: "parfaite",
    name: "Cadence parfaite",
    structure: "V → I",
    progression: ["G7","C"],
    condition: "Les deux accords à l'état fondamental",
    effect: "La plus conclusive de toutes. Elle referme une phrase avec une netteté absolue — point final du discours musical.",
    color: "#0F6E56",
    bg: "#E1F5EE",
    analogy: "Le point final d'une phrase.",
  },
  {
    id: "imparfaite",
    name: "Cadence imparfaite",
    structure: "V → I",
    progression: ["G7/B","C/E"],
    condition: "Au moins un des deux accords est renversé",
    effect: "La résolution vers la tonique est bien perçue, mais elle reste moins affirmée — une conclusion en retrait, nuancée.",
    color: "#534AB7",
    bg: "#EEEDFE",
    analogy: "Une virgule plutôt qu'un point.",
  },
  {
    id: "rompue",
    name: "Cadence rompue",
    structure: "V → VI",
    progression: ["G7","Am"],
    effect: "La dominante résout sur le VIe degré au lieu du Ier. L'oreille est surprise — la phrase se prolonge là où elle semblait vouloir s'arrêter.",
    color: "#BA7517",
    bg: "#FAEEDA",
    analogy: "Une fausse piste — on attendait l'arrivée, mais le chemin continue.",
  },
  {
    id: "plagale",
    name: "Cadence plagale",
    structure: "IV → I",
    progression: ["F","C"],
    effect: "La sous-dominante résout directement sur la tonique, sans passer par la dominante. Couleur douce, solennelle — typique des conclusions religieuses et du blues.",
    color: "#993C1D",
    bg: "#FAECE7",
    analogy: "L'« Amen » de l'harmonie.",
  },
  {
    id: "demi",
    name: "Demi-cadence",
    structure: "… → V",
    progression: ["Dm","G7"],
    effect: "La phrase se termine sur la dominante, laissant une question en suspens. Elle appelle une suite — c'est une ponctuation d'attente.",
    color: "#185FA5",
    bg: "#E6F1FB",
    analogy: "Une question restée sans réponse.",
  },
];

interface ProgressionTech {
  id: string;
  name: string;
  desc: string;
  detail: string;
  progression: string[];
  color: string;
  bg: string;
}

const PROGRESSION_TECHS: ProgressionTech[] = [
  {
    id: "extension",
    name: "Extension de fonction",
    desc: "Enchaîner plusieurs accords de même fonction pour lui donner plus de poids.",
    detail: "On prolonge une fonction — souvent la sous-dominante — en l'approchant par un accord qui la précède naturellement. La structure SD → D → T reste visible, mais dilatée dans le temps. Ex : Dm → F → G7 → C (deux accords SD avant la dominante).",
    progression: ["Dm","F","G7","C"],
    color: "#0F6E56",
    bg: "#E1F5EE",
  },
  {
    id: "pendule",
    name: "Le pendule",
    desc: "Alterner entre deux fonctions pour créer un effet d'oscillation.",
    detail: "On oscille entre la tonique et la sous-dominante (ou tonique et dominante) pendant plusieurs mesures avant de résoudre. Ce balancement crée une énergie rythmique et harmonique stable, très fréquente en intro ou en coda. Ex : C → F → C → F → G7 → C.",
    progression: ["C","F","C","F","G7","C"],
    color: "#534AB7",
    bg: "#EEEDFE",
  },
  {
    id: "cycle",
    name: "Cycle des quintes diatoniques",
    desc: "Chaque accord descend d'une quinte (ou monte d'une quarte) dans la gamme.",
    detail: "Le cycle complet diatonique en C majeur : C → F → Bdim → Em → Am → Dm → G7 → C. Chaque accord appelle le suivant par un mouvement de quinte descendante — l'enchaînement le plus naturel de l'harmonie tonale. On y retrouve la logique T → SD → D → T.",
    progression: ["C","F","Bdim","Em","Am","Dm","G7","C"],
    color: "#BA7517",
    bg: "#FAEEDA",
  },
];

// ─── Quiz ─────────────────────────────────────────────────────────────────────

const ALL_QUESTIONS = [
  // Cadences — identification
  { q: "Quelle cadence se termine sur le Ve degré ?", opts: ["Parfaite", "Plagale", "Demi-cadence", "Rompue"], a: 2, fb: "La demi-cadence se termine sur la dominante (V). Elle laisse la phrase en suspens, comme une question." },
  { q: "Quelle cadence enchaîne IV → I ?", opts: ["Parfaite", "Plagale", "Rompue", "Imparfaite"], a: 1, fb: "La cadence plagale = IV → I. Douce et solennelle, c'est l'«Amen» de l'harmonie." },
  { q: "Quelle cadence surprend l'oreille en résolvant sur VI ?", opts: ["Plagale", "Imparfaite", "Rompue", "Parfaite"], a: 2, fb: "La cadence rompue : V → VI au lieu de V → I. L'oreille attendait la tonique — elle arrive sur la sus-dominante." },
  { q: "La cadence parfaite nécessite que les accords V et I soient :", opts: ["Renversés", "À l'état fondamental", "Arpeggés", "En mode mineur"], a: 1, fb: "Condition de la cadence parfaite : les deux accords doivent être à l'état fondamental. Sinon c'est une cadence imparfaite." },
  { q: "Quelle est la différence entre cadence parfaite et imparfaite ?", opts: ["Le tempo", "L'un est en majeur, l'autre en mineur", "Au moins un accord est renversé dans l'imparfaite", "La parfaite utilise IV → I"], a: 2, fb: "La cadence imparfaite utilise aussi V → I, mais au moins un des deux accords est renversé — ce qui adoucit la conclusion." },
  { q: "En C majeur, quelle cadence parfaite utilise G7 → C ?", opts: ["Plagale", "Demi-cadence", "Cadence parfaite", "Cadence rompue"], a: 2, fb: "G7 → C : le Ve degré (G7) résout sur le Ier (C), les deux à l'état fondamental → cadence parfaite." },
  { q: "La cadence plagale est souvent associée à :", opts: ["La tension maximale", "La musique sacrée et le blues", "Les transitions modulantes", "Les introductions"], a: 1, fb: "La cadence plagale (IV → I) a une couleur douce et solennelle, très présente dans la musique religieuse et le blues." },
  { q: "Quelle cadence prolonge le discours musical par effet de surprise ?", opts: ["Parfaite", "Plagale", "Demi-cadence", "Rompue"], a: 3, fb: "La cadence rompue déjoue les attentes : au lieu de résoudre sur I, la dominante résout sur VI, prolongeant la phrase." },
  // Progressions
  { q: "Quelle technique consiste à enchaîner deux accords de même fonction ?", opts: ["Le pendule", "L'extension de fonction", "Le cycle des quintes", "La modulation"], a: 1, fb: "L'extension de fonction prolonge une fonction (souvent SD) en enchaînant plusieurs accords de même rôle avant la résolution." },
  { q: "Quelle est la formule du cycle des quintes en C majeur ?", opts: ["C–G–Am–Em–F–Dm–Bdim–C", "C–F–Bdim–Em–Am–Dm–G7–C", "C–Dm–Em–F–G–Am–Bdim–C", "C–Am–F–G–C"], a: 1, fb: "C → F → Bdim → Em → Am → Dm → G7 → C. Chaque accord descend d'une quinte dans la gamme." },
  { q: "Le pendule alterne typiquement entre :", opts: ["T et D", "T et SD", "SD et D", "D et D"], a: 1, fb: "Le pendule oscille le plus souvent entre la Tonique (I) et la Sous-dominante (IV), créant un effet de balancement." },
  { q: "La structure SD → D → T est :", opts: ["Une modulation", "La colonne vertébrale de l'harmonie tonale", "Un type de cadence", "Une technique de renversement"], a: 1, fb: "SD → D → T est le cycle fondamental de l'harmonie tonale. Toutes les techniques de progression s'organisent autour de lui." },
  { q: "Dans le cycle des quintes diatonique, quel mouvement relie chaque accord ?", opts: ["Montée d'une tierce", "Descente d'une quarte", "Descente d'une quinte (= montée d'une quarte)", "Montée d'une seconde"], a: 2, fb: "Descendre d'une quinte équivaut à monter d'une quarte. Ce mouvement crée une attraction naturelle entre les fondamentales." },
  { q: "Quel degré de la gamme majeure donne la seule triade diminuée ?", opts: ["IVe", "Ve", "VIe", "VIIe"], a: 3, fb: "Le VIIe degré (B en C majeur) donne Bdim. C'est la seule triade diminuée de la gamme majeure." },
  { q: "Quelle progression illustre un pendule T–SD ?", opts: ["C–G7–C", "C–F–C–F", "Dm–G7–C", "F–C–G7–C"], a: 1, fb: "C–F–C–F oscille entre le Ier (C, tonique) et le IVe (F, sous-dominante) — c'est le pendule T–SD." },
  { q: "L'extension de fonction sur la sous-dominante donne par exemple :", opts: ["C–G7–C", "Dm–F–G7–C", "F–C–F–C", "G7–Am–G7–C"], a: 1, fb: "Dm–F–G7–C : deux accords de sous-dominante (Dm et F) précèdent la dominante (G7) puis la tonique (C)." },
  // Fonctions rappel
  { q: "Quelle fonction contient les deux notes du triton (IV + VII) ?", opts: ["Tonique", "Sous-dominante", "Dominante", "Médiante"], a: 2, fb: "La fonction dominante contient le triton complet (IVe + VIIe degrés). En C majeur : F + B dans G7." },
  { q: "En C majeur, quels accords ont la fonction tonique ?", opts: ["C et G", "C et Am", "F et Dm", "G7 et Bdim"], a: 1, fb: "C (Ier) et Am (VIe) sont les accords de fonction tonique en C majeur. Ils ne contiennent aucune note du triton F–B." },
  { q: "Quel accord prépare la dominante dans SD → D → T ?", opts: ["La tonique", "La sous-dominante", "La médiante", "La sensible"], a: 1, fb: "La sous-dominante (IV ou II en C majeur) prépare la tension avant la dominante." },
  { q: "En C majeur, quelle substitution peut remplacer F dans une progression ?", opts: ["G7", "Em", "Dm", "Am"], a: 2, fb: "Dm est la substitution diatonique de F — tous deux ont la fonction sous-dominante. On peut les échanger librement." },
  // Analyse
  { q: "La progression Dm → G7 → C est :", opts: ["Un pendule", "Un cycle des quintes partiel", "Un II–V–I", "Une cadence rompue"], a: 2, fb: "Dm → G7 → C = II–V–I : la progression cadentielle fondamentale de la musique tonale (et du jazz)." },
  { q: "Dans la progression C → F → C → F → G7 → C, on identifie :", opts: ["Un cycle des quintes", "Une extension de dominante", "Un pendule suivi d'une cadence parfaite", "Deux cadences rompues"], a: 2, fb: "C–F–C–F = pendule T–SD. Puis G7 → C = cadence parfaite. C'est le schéma type du pendule avec résolution finale." },
  { q: "Quelle est la fonction harmonique de Am en C majeur ?", opts: ["Dominante", "Sous-dominante", "Tonique", "Modulante"], a: 2, fb: "Am (VIe degré) a la fonction tonique. Il ne contient ni F ni B — aucune note du triton fonctionnel." },
  { q: "En C majeur, G7 résolvant sur Am plutôt que sur C est une :", opts: ["Cadence parfaite", "Cadence imparfaite", "Cadence plagale", "Cadence rompue"], a: 3, fb: "G7 → Am : la dominante résout sur le VIe degré au lieu du Ier. C'est la cadence rompue — l'effet de surprise." },
  { q: "Quel enchaînement NE respecte PAS SD → D → T ?", opts: ["Dm–G7–C", "F–G7–C", "C–F–G7", "C–G7–F"], a: 3, fb: "C–G7–F : on passe de la tonique (C) à la dominante (G7) puis à la sous-dominante (F). T → D → SD est un mouvement régressif — inhabituel." },

  // ── Cadences dans d'autres tonalités ──
  { q: "En G majeur, quelle progression forme une cadence parfaite ?", opts: ["C→G", "D7→G", "G→D7", "Em→G"], a: 1, fb: "D7 → G : la dominante (Ve degré = D7) résout sur la tonique (Ier = G) à l'état fondamental → cadence parfaite." },
  { q: "En F majeur, quelle progression forme une cadence parfaite ?", opts: ["Bb→F", "C7→F", "F→C7", "Dm→F"], a: 1, fb: "C7 → F : le Ve degré de F majeur est C. C7 → F à l'état fondamental = cadence parfaite." },
  { q: "En D majeur, la cadence plagale est :", opts: ["A7→D", "G→D", "D→A7", "Bm→D"], a: 1, fb: "G → D : le IVe degré de D majeur est G. G → D = cadence plagale (IV → I)." },
  { q: "En G majeur, la cadence rompue typique est :", opts: ["D7→G", "D7→Em", "C→G", "G→D7"], a: 1, fb: "D7 → Em : la dominante de G majeur résout sur le VIe degré (Em) au lieu du Ier → cadence rompue." },
  { q: "En A majeur, quelle progression est une demi-cadence ?", opts: ["E7→A", "D→E7", "A→D", "F#m→A"], a: 1, fb: "D → E7 : on arrive sur le Ve degré (E7) sans le résoudre → demi-cadence, phrase en suspens." },
  { q: "En C mineur, la cadence parfaite utilise :", opts: ["Fm→Cm", "G7→Cm", "Cm→G7", "Ab→Cm"], a: 1, fb: "G7 → Cm : la dominante (G7, même en mineur harmonique) résout sur la tonique mineure = cadence parfaite." },

  // ── Situations musicales ──
  { q: "Une phrase musicale se termine et l'on ressent une suspension, une attente. C'est :", opts: ["Cadence parfaite", "Cadence rompue", "Demi-cadence", "Cadence plagale"], a: 2, fb: "La demi-cadence laisse la phrase ouverte sur la dominante — sensation d'attente, de question sans réponse." },
  { q: "Un hymne se termine par IV → I. Quel nom porte cette cadence ?", opts: ["Parfaite", "Imparfaite", "Rompue", "Plagale"], a: 3, fb: "IV → I est la cadence plagale, souvent appelée 'Amen' en raison de son usage fréquent dans la musique sacrée." },
  { q: "L'auditeur s'attend à une résolution sur I, mais l'accord VI arrive à la place. C'est :", opts: ["Une demi-cadence", "Une cadence parfaite", "Une cadence rompue", "Une extension de fonction"], a: 2, fb: "V → VI au lieu de V → I = cadence rompue. L'effet de surprise prolonge la phrase là où l'oreille attendait la fin." },
  { q: "Une phrase se termine sur V, puis une nouvelle phrase commence. C'est :", opts: ["Cadence parfaite", "Demi-cadence", "Cadence rompue", "Cadence plagale"], a: 1, fb: "Terminer sur la dominante (V) sans résoudre = demi-cadence. Elle crée une coupure naturelle entre deux phrases." },
  { q: "Une progression tourne en boucle C–F–C–F avant de résoudre. Quelle technique est utilisée ?", opts: ["Extension de dominante", "Pendule T–SD", "Cycle des quintes", "Cadence rompue"], a: 1, fb: "Alterner entre Tonique (C) et Sous-dominante (F) = pendule T–SD. La résolution viendra plus tard." },
  { q: "La progression Dm–F–G7–C utilise deux accords SD. C'est une :", opts: ["Demi-cadence", "Extension de fonction SD", "Cadence rompue", "Cadence plagale"], a: 1, fb: "Dm et F ont tous deux la fonction sous-dominante. Les enchaîner avant G7–C = extension de la fonction SD." },

  // ── Analyse de progressions ──
  { q: "Quelle est la fonction de F dans la progression F–G7–C ?", opts: ["Tonique", "Dominante", "Sous-dominante", "Médiante"], a: 2, fb: "F (IVe degré de C) a la fonction sous-dominante. F–G7–C = SD–D–T, la progression fondamentale." },
  { q: "Dans Am–Dm–G7–C, quel accord a la fonction tonique ?", opts: ["Am uniquement", "C uniquement", "Am et C", "Dm et G7"], a: 2, fb: "Am (VIe degré) et C (Ier degré) ont tous deux la fonction tonique — ils ne contiennent pas les notes du triton F–B." },
  { q: "Dans la progression C–Am–F–G, quel est l'enchaînement fonctionnel ?", opts: ["T–T–SD–D", "T–D–SD–T", "SD–T–D–SD", "D–T–SD–D"], a: 0, fb: "C=T, Am=T, F=SD, G=D → T–T–SD–D. Cette progression (I–VI–IV–V) est une des plus utilisées en pop." },
  { q: "La progression G7–Am en C majeur est une :", opts: ["Cadence parfaite", "Cadence imparfaite", "Demi-cadence", "Cadence rompue"], a: 3, fb: "G7 → Am : la dominante résout sur le VIe degré (Am) au lieu du Ier (C) → cadence rompue." },
  { q: "Quelle progression termine sur la dominante et crée une attente ?", opts: ["C–F–G7–C", "C–F–G7", "F–C–G7–C", "C–G7–Am–C"], a: 1, fb: "C–F–G7 se termine sur G7 sans résoudre → demi-cadence. L'auditeur attend la suite." },
  { q: "Dans C–F–Bdim–Em–Am–Dm–G7–C, quel mouvement relie chaque accord ?", opts: ["Montée d'une tierce", "Descente d'une quinte diatonique", "Montée d'une seconde", "Descente d'une octave"], a: 1, fb: "C'est le cycle des quintes diatoniques en C majeur. Chaque accord descend d'une quinte (ou monte d'une quarte) dans la gamme." },
  { q: "La progression I–IV–I–IV–V–I est un exemple de :", opts: ["Cycle des quintes", "Extension de dominante", "Pendule T–SD avec cadence finale", "Série de cadences rompues"], a: 2, fb: "I–IV–I–IV = pendule entre tonique et sous-dominante. Puis V–I = cadence parfaite qui conclut. Structure très courante en folk et blues." },

  // ── Substitutions et variantes ──
  { q: "Peut-on remplacer Am par C dans une progression sans changer la fonction ?", opts: ["Non, ils n'ont pas la même fonction", "Oui, tous deux ont la fonction tonique", "Seulement en mineur", "Seulement avant la dominante"], a: 1, fb: "Am (VIe) et C (Ier) ont tous deux la fonction tonique en C majeur. La substitution I ↔ VI est une substitution diatonique classique." },
  { q: "Peut-on remplacer Dm par F dans la progression Dm–G7–C ?", opts: ["Non, Dm est dominante", "Oui, F a la même fonction sous-dominante", "Seulement en rythme lent", "Non, cela brise la logique tonale"], a: 1, fb: "F et Dm ont tous deux la fonction sous-dominante. F–G7–C est aussi valide que Dm–G7–C — même logique SD–D–T." },
  { q: "Dans une cadence rompue V → VI, par quel accord VI peut-on encore substituer ?", opts: ["Le IIe degré", "Le IIIe degré", "Le IVe degré", "Le VIIe degré"], a: 1, fb: "Em (IIIe) est aussi un accord de fonction tonique. V → III est une autre forme de cadence rompue possible." },
  { q: "Bdim peut remplacer G7 car :", opts: ["Il a la même fondamentale", "Il a la même fonction dominante", "Il est plus stable", "Il contient la sous-dominante uniquement"], a: 1, fb: "Bdim et G7 ont tous deux la fonction dominante en C majeur. Bdim contient B (sensible) et F (sous-dominante) — le triton complet." },

  // ── Structure musicale ──
  { q: "Une phrase musicale qui se termine en cadence parfaite et une autre qui suit est appelée :", opts: ["Un motif", "Une période", "Un développement", "Une modulation"], a: 1, fb: "Une période est généralement formée de deux phrases : la première en demi-cadence (question), la seconde en cadence parfaite (réponse)." },
  { q: "Pourquoi la cadence parfaite est-elle la plus conclusive ?", opts: ["Car elle utilise le IVe degré", "Car V et I sont à l'état fondamental et le triton se résout pleinement", "Car elle est la plus grave", "Car elle utilise toujours G7"], a: 1, fb: "V à l'état fondamental → I à l'état fondamental : la résolution du triton est complète, la basse fait un mouvement de quinte descendante — effet conclusif maximal." },
  { q: "Pourquoi la cadence imparfaite est-elle moins conclusive que la parfaite ?", opts: ["Elle utilise un accord différent", "Le renversement adoucit la résolution, surtout à la basse", "Elle est toujours en mineur", "Elle ne résout pas le triton"], a: 1, fb: "Le renversement change la note à la basse. Un accord renversé sonne moins stable — la résolution est perçue, mais atténuée." },
  { q: "Quel est le rôle d'une demi-cadence dans une structure musicale en deux phrases ?", opts: ["Elle conclut la première phrase", "Elle ouvre la première phrase et crée une attente", "Elle module vers une nouvelle tonalité", "Elle répète la tonique"], a: 1, fb: "La demi-cadence termine souvent la première phrase (antécédent) en laissant une question ouverte — la seconde phrase (conséquent) apporte la réponse avec une cadence parfaite." },
  { q: "Dans quelle situation utilise-t-on typiquement le cycle des quintes complet ?", opts: ["Pour créer une rupture brutale", "Pour parcourir tous les degrés de la gamme de façon naturelle", "Pour moduler en mineur", "Pour éviter la cadence parfaite"], a: 1, fb: "Le cycle des quintes diatonique parcourt les 7 degrés de la gamme, créant un mouvement continu et naturel vers la tonique finale." },
  { q: "Le II–V–I est considéré comme la progression cadentielle fondamentale car :", opts: ["Il évite la tonique", "Il combine SD–D–T de façon optimale avec le mouvement de quinte à la basse", "Il est le plus court", "Il utilise toujours des accords renversés"], a: 1, fb: "Dm–G7–C : la basse descend par quintes (D→G→C), chaque accord prépare le suivant, et la résolution du triton est complète. Efficacité maximale." },

  // ── Pièges et nuances ──
  { q: "V → I avec I en renversement C/E est :", opts: ["Cadence parfaite", "Cadence imparfaite", "Cadence plagale", "Demi-cadence"], a: 1, fb: "Si l'accord d'arrivée (I) est renversé, c'est une cadence imparfaite — même si la dominante est à l'état fondamental." },
  { q: "IV → I est plagale. Mais F/A → C est :", opts: ["Toujours plagale", "Une cadence parfaite", "Toujours imparfaite car F est renversé", "Ni plagale ni imparfaite"], a: 2, fb: "Si F est en renversement (F/A), la cadence plagale devient imparfaite — un accord renversé empêche la conclusion franche." },
  { q: "Une progression en boucle sans cadence parfaite crée :", opts: ["Une modulation", "Un sentiment de stabilité absolue", "Une tension continue ou un effect statique", "Une demi-cadence permanente"], a: 2, fb: "Sans cadence parfaite, la musique reste en suspension ou en mouvement continu. Le blues et le rock exploitent souvent ce principe pour créer de l'énergie ou de l'ambiguïté." },
  { q: "La progression C–G7–C est une cadence parfaite. Et C–G–C ?", opts: ["Aussi parfaite", "Imparfaite car G sans septième", "Plagale", "Rompue"], a: 0, fb: "C–G–C est aussi une cadence parfaite : G (triade) → C, les deux à l'état fondamental. La septième n'est pas obligatoire — c'est l'état fondamental qui compte." },
];

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const QUIZ_COUNT = 8;

// ─── Styles ───────────────────────────────────────────────────────────────────

const S = {
  wrap:     { fontFamily: "var(--font-sans, system-ui)", maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" } as React.CSSProperties,
  header:   { padding: "1.5rem 0 1rem", borderBottom: "0.5px solid #e5e5e5", marginBottom: "1.25rem" } as React.CSSProperties,
  badge:    { display: "inline-block", background: "#E6F1FB", color: "#185FA5", fontSize: 11, fontWeight: 500, padding: "2px 10px", borderRadius: 20, marginBottom: 6 } as React.CSSProperties,
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
  stitle:   { fontSize: 17, fontWeight: 500, color: "#111", marginBottom: 8 } as React.CSSProperties,
  sbody:    { fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: "1rem" } as React.CSSProperties,
  infoBox:  { borderLeft: "2px solid #185FA5", padding: "8px 14px", background: "#E6F1FB", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#0C447C", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
};

// ─── Composant ────────────────────────────────────────────────────────────────

export default function Cours4() {
  const [activeSection, setActiveSection] = useState("cadences");
  const i18n = useCoursI18n("cours4");
  const [activeCadence, setActiveCadence] = useState<string | null>(null);
  const [activeTech,    setActiveTech]    = useState<string | null>(null);

  // Quiz
  const [quizQuestions, setQuizQuestions] = useState(() => shuffleArray(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [quizIdx,       setQuizIdx]       = useState(0);
  const [quizScore,     setQuizScore]     = useState(0);
  const [quizAnswered,  setQuizAnswered]  = useState(false);
  const [quizDone,      setQuizDone]      = useState(false);
  const [selectedOpt,   setSelectedOpt]   = useState<number | null>(null);

  const pianoRef = useRef<PianoPlayerRef>(null);

  const handlePlayCadence = useCallback((progression: string[]) => {
    playProgression(pianoRef as React.RefObject<PianoPlayerRef>, progression, 900);
  }, []);

  const handlePlayTech = useCallback((progression: string[]) => {
    playProgression(pianoRef as React.RefObject<PianoPlayerRef>, progression, 800);
  }, []);

  const answerQuiz = (optIdx: number) => {
    if (quizAnswered) return;
    setSelectedOpt(optIdx);
    setQuizAnswered(true);
    if (optIdx === quizQuestions[quizIdx].a) setQuizScore((s) => s + 1);
  };

  const nextQuiz = () => {
    if (quizIdx + 1 >= QUIZ_COUNT) { setQuizDone(true); }
    else { setQuizIdx((i) => i + 1); setQuizAnswered(false); setSelectedOpt(null); }
  };

  const resetQuiz = () => {
    setQuizQuestions(shuffleArray(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
    setQuizIdx(0); setQuizScore(0);
    setQuizAnswered(false); setSelectedOpt(null); setQuizDone(false);
  };

  return (
    <div style={S.wrap}>
      {/* Piano caché */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={3} startOctave={3} showLabels={false} />
      </div>

      {/* Header */}
      <div style={S.header}>
        <span style={S.badge}>{i18n.badge}</span>
        <h1 style={S.h1}>{i18n.title}</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Joseph Haydn"
        period="1732–1809"
        emoji="😄"
        concept="Cadences"
        anecdote="Dans sa Symphonie n°94 dite 'La Surprise', Haydn utilise une cadence inattendue pour réveiller son public. Après une longue phrase douce, un accord fortissimo surgit là où l'auditeur attendait une résolution tranquille. Haydn aimait jouer avec les attentes — pour lui, la cadence n'était pas qu'une conclusion, c'était un outil dramatique."
        lesson="La cadence est la ponctuation de la musique : elle peut affirmer, questionner ou surprendre."
        accentColor="#185FA5"
      />

      {/* Navigation */}
      <nav style={S.nav}>
        {SECTIONS_IDS.map((id) => (
          <button key={id} style={S.pill(activeSection === id)} onClick={() => setActiveSection(id)}>
            {i18n.sectionLabel(id)}
          </button>
        ))}
      </nav>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 1 : CADENCES
      ══════════════════════════════════════════════════════════════ */}
      {activeSection === "cadences" && (
        <div>
          <h2 style={S.stitle}>Les cadences : ponctuation du discours musical</h2>
          <p style={S.sbody}>
            En musique tonale, une <strong>cadence</strong> est une formule harmonique qui termine une phrase musicale.
            Comme la ponctuation dans une langue, elle indique au niveau de conclusion — point final, virgule,
            question ou surprise. La nature de la cadence détermine si la musique se ferme, s'ouvre ou rebondit.
          </p>

          <div style={S.infoBox}>
            Toutes les cadences reposent sur le même moteur : la <strong>relation dominante → tonique</strong>.
            Ce qui les distingue, c'est la résolution — attendue, adoucie, absente ou déjouée.
          </div>

          <p style={{ fontSize: 13, color: "#888", marginBottom: 16 }}>
            Cliquez sur une cadence pour l'entendre en C majeur.
          </p>

          {CADENCES.map((cad) => (
            <div
              key={cad.id}
              onClick={() => {
                setActiveCadence(activeCadence === cad.id ? null : cad.id);
                handlePlayCadence(cad.progression);
              }}
              style={{
                border: `0.5px solid ${activeCadence === cad.id ? cad.color : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 8,
                overflow: "hidden",
                cursor: "pointer",
                background: activeCadence === cad.id ? cad.bg : "#fff",
                transition: "all .15s",
              }}
            >
              {/* Header cadence */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px" }}>
                <div style={{
                  fontSize: 13, fontWeight: 700, color: cad.color,
                  background: cad.bg, border: `0.5px solid ${cad.color}`,
                  padding: "3px 10px", borderRadius: 6, whiteSpace: "nowrap" as const,
                  fontFamily: "monospace",
                }}>
                  {cad.structure}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>{cad.name}</div>
                  <div style={{ fontSize: 11, color: "#888", marginTop: 2, fontStyle: "italic" }}>{cad.analogy}</div>
                </div>
                <div style={{ fontSize: 11, color: "#bbb" }}>
                  {cad.progression.join(" → ")}
                </div>
              </div>

              {/* Détail si sélectionné */}
              {activeCadence === cad.id && (
                <div style={{ padding: "0 16px 14px", borderTop: `0.5px solid ${cad.color}20` }}>
                  {cad.condition && (
                    <div style={{ fontSize: 12, color: cad.color, marginBottom: 8, marginTop: 10, fontWeight: 500 }}>
                      Condition : {cad.condition}
                    </div>
                  )}
                  <p style={{ fontSize: 13, color: "#444", lineHeight: 1.65, margin: "10px 0 10px" }}>
                    {cad.effect}
                  </p>
                  <button
                    onClick={(e) => { e.stopPropagation(); handlePlayCadence(cad.progression); }}
                    style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${cad.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: cad.color }}
                  >
                    ▶ Réécouter {cad.progression.join(" → ")}
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* Tableau récap */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "24px 0 8px", color: "#111" }}>Récapitulatif</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {["Cadence", "Structure", "Exemple (C maj.)", "Effet"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 10px", fontWeight: 500, color: "#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Parfaite",    struct: "V → I",   ex: "G7 → C",   effet: "Conclusive, finale" },
                  { name: "Imparfaite",  struct: "V → I",   ex: "G7/B → C/E", effet: "Conclusive, adoucie" },
                  { name: "Rompue",      struct: "V → VI",  ex: "G7 → Am",  effet: "Surprise, prolonge" },
                  { name: "Plagale",     struct: "IV → I",  ex: "F → C",    effet: "Douce, solennelle" },
                  { name: "Demi-cadence", struct: "… → V",  ex: "Dm → G7",  effet: "Suspensive, question" },
                ].map((row, i) => (
                  <tr key={row.name} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "7px 10px", fontWeight: 500 }}>{row.name}</td>
                    <td style={{ padding: "7px 10px", fontFamily: "monospace", color: "#185FA5" }}>{row.struct}</td>
                    <td style={{ padding: "7px 10px", color: "#555" }}>{row.ex}</td>
                    <td style={{ padding: "7px 10px", color: "#888", fontSize: 12 }}>{row.effet}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 : PROGRESSIONS
      ══════════════════════════════════════════════════════════════ */}
      {activeSection === "progressions" && (
        <div>
          <h2 style={S.stitle}>Techniques de progression harmonique</h2>
          <p style={S.sbody}>
            La structure fondamentale <strong>SD → D → T</strong> est le squelette de presque toute progression tonale.
            Mais la musique n'est pas faite d'une seule phrase — elle se déploie, respire, insiste, surprend.
            Trois techniques permettent de varier et d'élaborer ce squelette.
          </p>

          <div style={S.infoBox}>
            Quelle que soit la technique utilisée, la logique SD → D → T reste présente en arrière-plan.
            Ce n'est jamais un cadre brisé — seulement <strong>dilaté, répété ou déplacé</strong>.
          </div>

          <p style={{ fontSize: 13, color: "#888", marginBottom: 16 }}>
            Cliquez sur une technique pour l'entendre en C majeur.
          </p>

          {PROGRESSION_TECHS.map((tech) => (
            <div
              key={tech.id}
              onClick={() => {
                setActiveTech(activeTech === tech.id ? null : tech.id);
                handlePlayTech(tech.progression);
              }}
              style={{
                border: `0.5px solid ${activeTech === tech.id ? tech.color : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 10,
                overflow: "hidden",
                cursor: "pointer",
                background: activeTech === tech.id ? tech.bg : "#fff",
                transition: "all .15s",
              }}
            >
              <div style={{ padding: "12px 16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <span style={{ fontSize: 14, fontWeight: 500, color: activeTech === tech.id ? tech.color : "#111" }}>
                    {tech.name}
                  </span>
                  <span style={{
                    fontSize: 10, padding: "1px 8px", borderRadius: 10,
                    background: tech.bg, color: tech.color, border: `0.5px solid ${tech.color}`,
                    fontFamily: "monospace",
                  }}>
                    {tech.progression.join(" → ")}
                  </span>
                </div>
                <p style={{ fontSize: 13, color: "#666", margin: 0, lineHeight: 1.6 }}>{tech.desc}</p>
              </div>

              {activeTech === tech.id && (
                <div style={{ padding: "0 16px 14px", borderTop: `0.5px solid ${tech.color}20` }}>
                  <p style={{ fontSize: 13, color: "#444", lineHeight: 1.65, margin: "10px 0 10px" }}>
                    {tech.detail}
                  </p>
                  <button
                    onClick={(e) => { e.stopPropagation(); handlePlayTech(tech.progression); }}
                    style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${tech.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: tech.color }}
                  >
                    ▶ Réécouter
                  </button>
                </div>
              )}
            </div>
          ))}

          <div style={S.warnBox}>
            <strong>Le II–V–I</strong> (ex : Dm → G7 → C) est la progression cadentielle la plus importante
            de la musique tonale. Elle combine l'extension de sous-dominante (II), la dominante (V7)
            et la résolution (I) en trois accords — c'est la colonne vertébrale du jazz et de l'harmonie classique.
          </div>

          {/* Tableau fonctions rappel */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "24px 0 8px", color: "#111" }}>
            Substitutions diatoniques en C majeur
          </h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {["Fonction", "Accords interchangeables", "Exemple"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 10px", fontWeight: 500, color: "#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { fn: "Tonique (T)",        accords: "C  ↔  Am",  ex: "C → G7 → C  ou  Am → G7 → C" },
                  { fn: "Sous-dominante (SD)", accords: "Dm  ↔  F", ex: "Dm → G7 → C  ou  F → G7 → C" },
                  { fn: "Dominante (D)",       accords: "G7  ↔  Bdim", ex: "G7 → C  ou  Bdim → C" },
                ].map((row, i) => (
                  <tr key={row.fn} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "7px 10px", fontWeight: 500 }}>{row.fn}</td>
                    <td style={{ padding: "7px 10px", fontFamily: "monospace", color: "#185FA5" }}>{row.accords}</td>
                    <td style={{ padding: "7px 10px", color: "#888", fontSize: 12 }}>{row.ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3 : QUIZ
      ══════════════════════════════════════════════════════════════ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.stitle}>Entraînement</h2>

          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 7 ? "🎹" : quizScore >= 5 ? "👍" : "💪"}
              </div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>
                {i18n.t("score")} : {quizScore} / {QUIZ_COUNT}
              </div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
                {i18n.quizMessage(quizScore, QUIZ_COUNT)}
              </div>
              <button
                onClick={resetQuiz}
                style={{ fontSize: 13, padding: "8px 20px", border: "0.5px solid #185FA5", borderRadius: 20, cursor: "pointer", background: "#E6F1FB", color: "#185FA5" }}
              >
                {i18n.newQ}
              </button>
            </div>
          ) : (
            <div>
              <div style={{ fontSize: 12, color: "#999", marginBottom: 10 }}>
                {i18n.t("question")} {quizIdx + 1} {i18n.t("of")} {QUIZ_COUNT}
                <span style={{ marginLeft: 12, color: "#bbb" }}>{ALL_QUESTIONS.length} {i18n.t("questionsPool")}</span>
              </div>
              <div style={{ fontSize: 15, fontWeight: 500, color: "#111", lineHeight: 1.6, marginBottom: 16 }}>
                {quizQuestions[quizIdx].q}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {quizQuestions[quizIdx].opts.map((opt, i) => {
                  const isCorrect  = i === quizQuestions[quizIdx].a;
                  const isSelected = selectedOpt === i;
                  let bg = "#fff", border = "#e5e5e5", color = "#333";
                  if (quizAnswered) {
                    if (isCorrect)       { bg = "#E1F5EE"; border = "#0F6E56"; color = "#085041"; }
                    else if (isSelected) { bg = "#FCEBEB"; border = "#A32D2D"; color = "#501313"; }
                  }
                  return (
                    <button
                      key={i}
                      onClick={() => answerQuiz(i)}
                      disabled={quizAnswered}
                      style={{ fontSize: 13, padding: "10px 14px", border: `0.5px solid ${border}`, borderRadius: 8, cursor: quizAnswered ? "default" : "pointer", background: bg, color, textAlign: "left", transition: "all .12s" }}
                    >
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
                <button
                  onClick={nextQuiz}
                  style={{ marginTop: 12, fontSize: 13, padding: "7px 18px", border: "0.5px solid #333", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#333" }}
                >
                  {quizIdx + 1 < QUIZ_COUNT ? i18n.nextQ : i18n.seeScore}
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

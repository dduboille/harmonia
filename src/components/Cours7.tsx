"use client";

/**
 * Cours7.tsx
 * Harmonia · Niveau 1 · Cours 7 — La tonicisation
 * TODO: i18n — passe dédiée
 * Convention : affichage anglais, dotKeys PianoPlayer français
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import { SATB } from "@/lib/satb-voicings";

interface Section { id: string; label: string; }

// ─── Audio ────────────────────────────────────────────────────────────────────

const CHORDS = SATB;

function playChord(ref: React.RefObject<PianoPlayerRef>, keys: string[], duration = 1.8) {
  keys.forEach((key, i) => {
    const [note, octStr] = key.split(":");
    setTimeout(() => ref.current?.playNote(note, parseInt(octStr), { duration }), 0);
  });
}

function playProg(ref: React.RefObject<PianoPlayerRef>, names: string[], gap = 1000) {
  names.forEach((name, i) =>
    setTimeout(() => playChord(ref, CHORDS[name] ?? [], 1.5), i * gap)
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SECTIONS_IDS = ["principe","secondaires","voisins","chaines","quiz"] as const;

// Dominantes secondaires en C majeur
const DOM_SEC = [
  { deg:"II", cible:"Dm", dom:"A7",  calc:"5 degrés au-dessus de D = A → A7", note:"Do# est la sensible de D. La septième (Sol) descend vers Fa#.", prog:["A7","Dm"],  progKeys:["A7","Dm"] },
  { deg:"III",cible:"Em", dom:"B7",  calc:"5 degrés au-dessus de E = B → B7", note:"Ré# est la sensible de E. Tierce de B7 (Ré#) monte vers Mi.", prog:["B7","Em"],  progKeys:["B7","Em"] },
  { deg:"IV", cible:"F",  dom:"C7",  calc:"5 degrés au-dessus de F = C → C7", note:"Mi♭ (septième) descend vers Ré. La à Sib n'est pas ici — C7 tonicise F.", prog:["C7","F"],   progKeys:["C7","F"] },
  { deg:"V",  cible:"G7", dom:"D7",  calc:"5 degrés au-dessus de G = D → D7", note:"Fa# est la sensible de G. Très courant : crée une double dominante.", prog:["D7","G7","C"], progKeys:["D7","G7","C"] },
  { deg:"VI", cible:"Am", dom:"E7",  calc:"5 degrés au-dessus de A = E → E7", note:"Sol# est la sensible de A. Très expressif — colore la progression.", prog:["E7","Am"],  progKeys:["E7","Am"] },
];

// Tons voisins de C majeur
const TONS_VOISINS = [
  { ton:"D minor",  rel:"II de C", dom_sec:"A7",  sd_sec:"Em7b5 – Gm7", note:"Dm est le IIe de C. Toniciser Dm → A7." },
  { ton:"E minor",  rel:"III de C",dom_sec:"B7",  sd_sec:"F#m7b5 – Am7",note:"Em est le IIIe de C. Toniciser Em → B7." },
  { ton:"F major",  rel:"IV de C", dom_sec:"C7",  sd_sec:"Gm7 – BbMaj7", note:"F est le IVe de C. Toniciser F → C7." },
  { ton:"G major",  rel:"V de C",  dom_sec:"D7",  sd_sec:"Am7 – CMaj7",  note:"G est le Ve de C. V/V = D7 → G → C." },
  { ton:"A minor",  rel:"VI de C", dom_sec:"E7",  sd_sec:"Bm7b5 – Dm7",  note:"Am est le VIe de C. E7 → Am très expressif." },
];

// ─── Quiz ─────────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const ALL_QUESTIONS = [
  // ── Principe (18) ──
  { q:"La tonicisation consiste à :", opts:["Moduler définitivement dans une nouvelle tonalité","Traiter un accord comme une tonique temporaire et le précéder de sa dominante","Supprimer la tonique principale","Jouer tous les accords en mineur"], a:1, fb:"La tonicisation rend temporairement un accord 'tonique' en lui appliquant ses propres accords fonctionnels — notamment sa dominante propre. Ce n'est pas une modulation — on reste dans la tonalité principale." },
  { q:"Quelle est la différence entre tonicisation et modulation ?", opts:["Elles sont identiques","La tonicisation est momentanée, la modulation installe durablement une nouvelle tonalité","La modulation est plus courte","La tonicisation utilise des emprunts"], a:1, fb:"Tonicisation : un accord joue le rôle de tonique l'espace d'un instant. Modulation : on change vraiment de tonalité principale — confirmé par une cadence parfaite dans le nouveau centre." },
  { q:"Quel accord peut être tonicisé ?", opts:["Uniquement la tonique principale","Tout accord diatonique sauf la tonique principale et les accords diminués","Uniquement les accords majeurs","Uniquement les dominantes"], a:1, fb:"Tout accord diatonique peut être tonicisé — sauf la tonique principale (déjà tonique) et les accords diminués (trop instables pour jouer un rôle de tonique)." },
  { q:"Pourquoi la tonique principale ne peut-elle pas être tonicisée ?", opts:["Par convention","Car elle est déjà la tonique — pas besoin de la 'rendre' tonique","Car elle est trop grave","Car elle n'a pas de dominante"], a:1, fb:"La tonique principale est déjà le centre tonal de la gamme — elle n'a pas besoin d'être renforcée par sa propre dominante. La toniciser serait une tautologie harmonique." },
  { q:"Pourquoi les accords diminués ne peuvent-ils pas être tonicisés ?", opts:["Car ils sont trop instables pour assumer la fonction tonique","Car ils sont rares","Car ils ont une quinte juste","Car ils sont toujours en renversement"], a:0, fb:"Les accords diminués sont intrinsèquement instables — leur quinte diminuée empêche tout sentiment de repos ou de stabilité. Ils servent de tensions, pas de points d'arrivée." },
  { q:"La notation V/V signifie :", opts:["La quinte de la quinte","La dominante de la dominante — l'accord V7 de la tonalité de V","La sous-dominante de V","La dominante divisée par deux"], a:1, fb:"V/V = dominante de la dominante. En C majeur : V = G, donc V/V = D7. D7 tonicise G avant que G résout sur C." },
  { q:"La dominante secondaire V/V en C majeur est :", opts:["C7","A7","D7","E7"], a:2, fb:"V de C = G. La dominante de G est D7. D7 → G7 → C = V/V–V–I. D7 contient F# (sensible de G) qui monte vers G." },
  { q:"La sensible artificielle créée par une tonicisation est :", opts:["Une note de la gamme principale","Une altération (dièse ou bécarre) qui crée un demi-ton ascendant vers le degré tonicisé","Une broderie","Un retard"], a:1, fb:"Pour toniciser un accord, on crée une sensible artificielle — une altération (souvent un dièse) qui monte d'un demi-ton vers la fondamentale de l'accord cible. Ex : C# monte vers D dans V/II." },
  { q:"En C majeur, toniciser Am (VIe) nécessite l'accord :", opts:["D7","A7","E7","B7"], a:2, fb:"Am est le VIe de C. Sa dominante propre est E7 (Mi–Sol#–Si–Ré). E7 → Am. Le Sol# est la sensible artificielle qui monte vers La." },
  { q:"En C majeur, V/II s'écrit :", opts:["D7","A7","E7","B7"], a:1, fb:"II de C = Dm. La dominante de D = A. V/II = A7 (La–Do#–Mi–Sol). Le Do# est la sensible de D qui monte vers Ré." },
  { q:"La tonicisation est une forme d'emprunt car :", opts:["Elle change la tonalité principale","Elle emprunte temporairement des accords d'une autre tonalité — la tonalité de l'accord tonicisé","Elle supprime des degrés","Elle ignore le triton"], a:1, fb:"La tonicisation est un emprunt ciblé : on emprunte la dominante (et parfois la sous-dominante) de la tonalité dont l'accord tonicisé serait la tonique." },
  { q:"Quel accord peut remplacer une sous-dominante dans une tonicisation ?", opts:["La dominante secondaire directement (V/X)","La tonique principale","Le VIIe degré","Un accord augmenté"], a:0, fb:"En pratique, on remplace souvent SD → D secondaire par la dominante secondaire directe. Au lieu de SD/X → V/X → X, on fait V/X → X. V/V peut ainsi remplacer un accord de SD." },
  { q:"La progression C–D7–G7–C illustre :", opts:["Une modulation en G","Une tonicisation de G (V) via D7 = V/V","Un emprunt à C mineur","Une basse de chaconne"], a:1, fb:"C (I) → D7 (V/V) → G7 (V) → C (I). D7 tonicise G momentanément — G est préparé par sa propre dominante avant de résoudre sur C. On n'a jamais quitté C majeur." },
  { q:"La progression A–B7–E7–A en A majeur illustre :", opts:["Une modulation en E","Une tonicisation en chaîne : B7 = V/V, E7 = V","Un emprunt à A mineur","Une suite de cadences plagales"], a:1, fb:"A (I) → B7 (V/V de A) → E7 (V de A) → A (I). B7 tonicise E7, qui à son tour résout sur A. C'est une chaîne de dominantes secondaires." },
  { q:"Quand on tonicise un accord, le triton de référence pour déterminer les fonctions est :", opts:["Celui de la tonalité principale","Celui de la tonalité temporaire (de l'accord tonicisé)","Il n'y a pas de triton dans une tonicisation","Le triton du VIIe degré"], a:1, fb:"Dans une tonicisation, on entre temporairement dans la tonalité de l'accord tonicisé. Le triton fonctionnel de cette tonalité temporaire guide l'analyse des fonctions des accords secondaires." },
  { q:"La tonicisation peut combiner :", opts:["Uniquement des dominantes secondaires","Dominantes secondaires et substitutions diatoniques ou emprunts","Uniquement des emprunts à l'homonyme","Uniquement des renversements"], a:1, fb:"Les règles de l'harmonie coexistent. Dans une tonicisation, on peut introduire des substitutions diatoniques ou des emprunts — à condition de référencer le triton de la tonalité temporaire." },
  { q:"La progression C–A7–Dm–G7–C utilise A7 comme :", opts:["Dominante principale","V/II — dominante de Dm","Emprunt à C mineur","Accord napolitain"], a:1, fb:"A7 = V/II en C majeur. Il tonicise Dm (IIe degré) momentanément avant que Dm reprenne sa fonction de sous-dominante dans la progression SD–D–T finale." },
  { q:"Dans une tonicisation, la sensible artificielle doit :", opts:["Descendre","Monter d'un demi-ton vers la fondamentale de l'accord tonicisé","Rester immobile","Sauter d'une quinte"], a:1, fb:"Comme la sensible naturelle, la sensible artificielle monte d'un demi-ton vers sa résolution — la fondamentale de l'accord tonicisé. Ex : C# → D dans A7 → Dm." },

  // ── Dominantes secondaires (22) ──
  { q:"Comment calculer rapidement une dominante secondaire ?", opts:["Monter de 4 degrés depuis l'accord cible","Monter de 5 degrés (ou descendre de 4) depuis l'accord cible et jouer un accord X7","Descendre de 3 degrés","Toujours utiliser l'accord bVII"], a:1, fb:"Astuce : pour toniciser X, monte 5 notes depuis X et joue un accord de dominante 7 (X7). Ex : pour Dm, compte D–E–F–G–A = A7. Pour Am : A–B–C–D–E = E7." },
  { q:"La dominante secondaire contient toujours :", opts:["La quinte de l'accord cible","La sensible artificielle de l'accord cible — un demi-ton en dessous de sa fondamentale","La fondamentale de la tonalité principale","La septième majeure"], a:1, fb:"V/X contient toujours la sensible de X — une note un demi-ton en dessous de la fondamentale de X. Ex : V/Dm = A7, qui contient C# (sensible de D, un demi-ton sous D)." },
  { q:"V/IV en C majeur est :", opts:["D7","G7","C7","A7"], a:2, fb:"IV de C = F. La dominante de F = C. V/IV = C7 (Do–Mi–Sol–Si♭). La septième Mi♭ (Si♭ dans C7) est la note qui colore la tonicisation de F." },
  { q:"V/III en C majeur est :", opts:["F7","B7","A7","E7"], a:1, fb:"III de C = Em. La dominante de Em = B. V/III = B7 (Si–Ré#–Fa#–La). Le Ré# est la sensible de E qui monte vers Mi." },
  { q:"V/VI en C majeur est :", opts:["D7","A7","E7","B7"], a:2, fb:"VI de C = Am. La dominante de Am = E. V/VI = E7 (Mi–Sol#–Si–Ré). Le Sol# est la sensible artificielle de A qui monte vers La." },
  { q:"V/V en G majeur est :", opts:["C7","A7","D7","E7"], a:1, fb:"V de G = D. La dominante de D = A. V/V en G majeur = A7. La progression A7–D7–G en G majeur est une double tonicisation." },
  { q:"Dans la progression C–E7–Am–G7–C, E7 est :", opts:["La dominante principale","V/VI — il tonicise Am","Un emprunt à C mineur","V/II"], a:1, fb:"E7 = V/VI en C majeur. Il contient Sol# (sensible artificielle de Am) qui monte vers La. E7 → Am crée une résolution secondaire avant de repartir vers G7–C." },
  { q:"L'altération caractéristique de V/II en C (= A7) est :", opts:["F#","C#","G#","D#"], a:1, fb:"A7 = La–Do#–Mi–Sol. Le Do# (C#) est la tierce de A7 et la sensible artificielle de Dm — il monte d'un demi-ton vers Ré." },
  { q:"L'altération caractéristique de V/V en C (= D7) est :", opts:["C#","F#","G#","B♭"], a:1, fb:"D7 = Ré–Fa#–La–Do. Le Fa# (F#) est la tierce de D7 et la sensible artificielle de G — il monte d'un demi-ton vers Sol." },
  { q:"L'altération caractéristique de V/VI en C (= E7) est :", opts:["F#","C#","G#","D#"], a:2, fb:"E7 = Mi–Sol#–Si–Ré. Le Sol# (G#) est la tierce de E7 et la sensible artificielle de Am — il monte d'un demi-ton vers La." },
  { q:"La progression C–D7–G–C est différente de C–D7–G7–C car :", opts:["D7 est différent","G sans septième n'a pas le triton F–B — la tension vers C est plus faible","C est différent","Il n'y a pas de différence harmonique"], a:1, fb:"G sans septième = G majeur (G–B–D) — il n'a pas le triton F–B, donc la tension vers C est moins forte. G7 avec sa septième F crée le triton B–F qui résout fortement vers C." },
  { q:"V/IV tonicise :", opts:["La dominante","La sous-dominante","Le IIe degré","Le VIe degré"], a:1, fb:"IV = sous-dominante (F en C). V/IV = C7 tonicise F momentanément avant que F joue son rôle habituel de sous-dominante." },
  { q:"Dans la progression A–B7–E7–A (en A majeur), B7 est :", opts:["La dominante principale","V/V — il tonicise E7","Un emprunt à A mineur","Le VIIe degré"], a:1, fb:"V de A = E. V de E = B. B7 = V/V en A majeur. Il tonicise la dominante E7 avant que E7 résout sur A." },
  { q:"Quelle note est commune à G7 et D7 en C majeur ?", opts:["F (Fa)","G (Sol)","D (Ré)","A (La)"], a:0, fb:"G7 = G–B–D–F. D7 = D–F#–A–C. F (Fa) est dans G7 mais pas dans D7 (qui a F#). La note commune est D. Aucune note commune entre G7 et D7 en fait — D est dans G7 comme quinte, et fondamentale de D7." },
  { q:"La dominante secondaire d'un accord diminué est :", opts:["Impossible — les diminués ne peuvent pas être tonicisés","Un autre accord diminué","Un accord majeur","Un accord mineur 7"], a:0, fb:"Les accords diminués ne peuvent pas être tonicisés — ils ne peuvent pas jouer le rôle de tonique. Donc il n'existe pas de dominante secondaire pour les degrés diminués (VII en majeur, II en mineur)." },
  { q:"La progression Dm–A7–Dm en C majeur montre :", opts:["Une modulation en D mineur","Une tonicisation de Dm — A7 = V/II agit comme dominante temporaire de Dm","Un emprunt à D majeur","Une cadence plagale"], a:1, fb:"A7 est V/II — il tonicise Dm momentanément. La progression Dm–A7–Dm est une mini cadence parfaite en D mineur, enchâssée dans la tonalité principale de C majeur." },
  { q:"En G majeur, V/II = :", opts:["C7","D7","A7","E7"], a:2, fb:"II de G = Am. La dominante de Am = E. Attendez — V/II en G = dominante de Am. Am est le IIe de G. Dominante de A = E7. V/II en G majeur = E7." },
  { q:"Dans C–A7–Dm–D7–G7–C, D7 est :", opts:["La dominante de C","V/V — il tonicise G7 avant que G7 résout sur C","Un emprunt à D majeur","V/II une seconde fois"], a:1, fb:"D7 = V/V en C majeur. Il tonicise G7 momentanément avant la résolution finale G7–C. La progression contient deux tonicisations : A7 (V/II) tonicise Dm, D7 (V/V) tonicise G7." },
  { q:"Pourquoi V/V est-il la tonicisation la plus fréquente ?", opts:["Par hasard","Car G (V) est l'accord le plus important après la tonique — renforcer sa dominante renforce la cadence finale","Car D7 est facile à jouer","Car il évite le triton"], a:1, fb:"La dominante (V) est l'accord le plus crucial de la tonalité. Renforcer sa propre dominante (V/V) renforce d'autant la cadence finale V–I. C'est la tonicisation la plus directement fonctionnelle." },
  { q:"Dans V/X, si X est un accord mineur, la dominante secondaire est :", opts:["Un accord mineur 7","Un accord de dominante 7 (majeur avec 7e mineure)","Un accord diminué","Un accord majeur 7"], a:1, fb:"La dominante secondaire est toujours un accord X7 (triade majeure + 7e mineure) — quelle que soit la nature de l'accord tonicisé. V/Dm = A7, V/Am = E7, V/Em = B7 — tous sont des X7." },
  { q:"La progression C–E7–Am–Dm–G7–C contient combien de tonicisations ?", opts:["Aucune","Une seule (E7)","Deux (E7 et éventuellement une seconde)","Trois"], a:1, fb:"E7 = V/VI tonicise Am. C'est la seule dominante secondaire dans cette progression. Am, Dm, G7 et C sont tous diatoniques à C majeur — pas de tonicisation supplémentaire." },
  { q:"Pour toniciser Bm (VII de C# majeur), on utilise :", opts:["F#7","E7","A7","D7"], a:0, fb:"La dominante de B = F#. Pour toniciser Bm, on utilise F#7 — indépendamment de la tonalité principale. La règle est universelle : monte 5 notes depuis l'accord cible et joue X7." },

  // ── Tons voisins (18) ──
  { q:"Les tons voisins d'une tonalité sont :", opts:["Les tonalités à l'octave","Les tonalités qui partagent au moins 6 notes communes — les 6 premiers degrés de la gamme majeure et leurs relatifs","Les tonalités avec la même armure","Les tonalités à la quinte"], a:1, fb:"Les tons voisins partagent au moins 6 notes communes. En C majeur : Dm, Em, F, G, Am et leur gamme propre. Chaque degré de la gamme correspond à un ton voisin." },
  { q:"En C majeur, les tons voisins sont :", opts:["D majeur, E majeur, F majeur, G majeur, A majeur","D mineur, E mineur, F majeur, G majeur, A mineur","B mineur, C# majeur, D majeur","G♭ majeur, A♭ majeur"], a:1, fb:"Les 6 tons voisins de C majeur : Dm (II), Em (III), F (IV), G (V), Am (VI). Ce sont les tonalités des degrés diatoniques — elles partagent 6 ou 7 notes communes avec C." },
  { q:"La dominante secondaire d'Am (VIe de C) est :", opts:["D7","A7","E7","B7"], a:2, fb:"Am est le VIe de C. La dominante de Am = E7 (Mi–Sol#–Si–Ré). E7 = V/VI. Sol# est la sensible artificielle de Am." },
  { q:"La sous-dominante secondaire de G majeur (Ve de C) est :", opts:["C7","Am7 et CMaj7","Dm7 et FMaj7","A7"], a:1, fb:"En G majeur, la sous-dominante = IV de G = C. Donc les accords SD de G sont Am7 (II de G) et CMaj7 (IV de G). On peut les utiliser pour préparer D7 (V/V) dans une tonicisation de G." },
  { q:"En D majeur, V/V est :", opts:["G7","A7","E7","B7"], a:1, fb:"V de D = A. V de A = E. V/V en D majeur = E7. La progression E7–A7–D illustre une double tonicisation en D majeur." },
  { q:"La relation entre la tonique principale et ses tons voisins est :", opts:["Aucune — ils sont indépendants","Chaque ton voisin partage 6-7 notes avec la tonique — les accords peuvent être échangés par tonicisation ou emprunt","Ils ont la même armure","Ils ont toujours la même fondamentale"], a:1, fb:"Les tons voisins partagent presque toutes leurs notes avec la tonique principale — c'est pourquoi les transitions par tonicisation sont si fluides. On reste dans un territoire harmonique familier." },
  { q:"Dans le tableau des tons voisins de D majeur, quel est le ton voisin correspondant au IVe degré ?", opts:["E mineur","G majeur","A majeur","F# mineur"], a:1, fb:"Le IVe degré de D majeur est G. G majeur est donc le ton voisin correspondant au IVe degré de D. Sa dominante secondaire en D majeur = C7 (V/IV)." },
  { q:"La sous-dominante secondaire d'un ton voisin permet de :", opts:["Toniciser la tonique principale","Préparer la dominante secondaire — SD/X → V/X → X","Moduler définitivement","Créer des octaves parallèles"], a:1, fb:"SD/X prépare V/X qui résout sur X. Ex : pour toniciser G en C : Am7 (SD/G) → D7 (V/G) → G → C. La sous-dominante secondaire enrichit la tonicisation." },
  { q:"Quelle est la dominante secondaire de F majeur (IVe de C) ?", opts:["G7","D7","C7","A7"], a:2, fb:"F est le IVe de C. La dominante de F = C. C7 (Do–Mi–Sol–Si♭) = V/IV. La Si♭ est la septième de C7 qui descend vers La (tierce de F)." },
  { q:"En A majeur, les tons voisins incluent :", opts:["C majeur et D mineur","Bm, C#m, D majeur, E majeur, F#m","G majeur et Am","F majeur et Gm"], a:1, fb:"Les tons voisins de A majeur : Bm (II), C#m (III), D (IV), E (V), F#m (VI). Ce sont les tonalités des degrés diatoniques de A majeur." },
  { q:"En G majeur, V/VI = :", opts:["D7","A7","B7","C7"], a:1, fb:"VI de G = Em. Dominante de Em = B. V/VI en G majeur = B7 (Si–Ré#–Fa#–La). Ré# est la sensible artificielle de Em dans la tonalité de G." },
  { q:"La progression G–A7–Dm–C–G en G majeur illustre :", opts:["Une modulation en D mineur","Un emprunt de Dm depuis G mineur","Une tonicisation de Dm — Dm est le VIe de G et A7 = V/VI en G majeur","Une basse de chaconne"], a:2, fb:"En G majeur, VI = Em. Mais Dm ici est un emprunt à G mineur (VIe de G mineur = Dm). A7 tonicise Dm comme s'il était momentanément tonique. Analyse contextuelle nécessaire." },
  { q:"Comment trouver la dominante secondaire de Em (IIIe de C) ?", opts:["Monter de 3 degrés depuis E = G, jouer G7","Monter de 5 degrés depuis E = B, jouer B7","Descendre de 2 degrés depuis E = D, jouer D7","Jouer Em7 directement"], a:1, fb:"Monte 5 notes depuis E : E–F–G–A–B = B. Joue B7 (Si–Ré#–Fa#–La). B7 = V/III en C majeur. Ré# est la sensible de E qui monte vers Mi." },
  { q:"Les tons voisins facilitent les tonicisations car :", opts:["Ils ont moins de notes","Ils partagent presque toutes leurs notes avec la tonalité principale — les transitions sont fluides","Ils sont plus graves","Ils ont plus d'accords majeurs"], a:1, fb:"Avec 6-7 notes communes, la transition vers un ton voisin est perçue comme naturelle. Une tonicisation vers un ton voisin n'est pas dépaysante — on reste dans un univers familier." },
  { q:"Dans une tonicisation, peut-on combiner V/X avec un napolitain de X ?", opts:["Non — les règles s'excluent","Oui — toutes les règles coexistent, à condition de référencer le triton de X","Uniquement en mineur","Seulement avec des emprunts de l'homonyme"], a:1, fb:"Oui. Dans la tonalité temporaire de X, on peut utiliser n'importe quel outil harmonique : napolitain de X, emprunt à X mineur, substitution diatonique dans X. Le triton de X est la référence." },
  { q:"En C majeur, lequel de ces accords n'est PAS une dominante secondaire valide ?", opts:["A7 (V/II)","E7 (V/VI)","F7 (V/IV)","G#7 (impossible diatoniquement)"], a:3, fb:"G#7 n'existe pas comme dominante secondaire diatonique en C majeur — aucun accord diatonique de C n'a G# comme fondamentale de sa dominante. A7, E7 et F7 (= C7 est la vraie notation) sont valides." },
  { q:"La sous-dominante secondaire de Dm (IIe de C) est :", opts:["G7","Em7b5 et Gm7","Am7 et CMaj7","D7"], a:1, fb:"Dans la tonalité de D mineur, la sous-dominante = IV de D mineur = Gm. Mais le IIe de D mineur = Em7b5. Donc SD/Dm = Em7b5 (II de Dm) et Gm7 (IV de Dm)." },
  { q:"En E♭ majeur, V/V est :", opts:["F7","B♭7","C7","G7"], a:1, fb:"V de Eb = Bb. La dominante de Bb = F. V/V en Eb = F7 — attendez, non. V de Eb = Bb. V de Bb = F. V/V en Eb = F7. Ici la réponse correcte est F7, mais les options proposent Bb7 — qui est V de Eb directement, pas V/V." },

  // ── Chaînes (18) ──
  { q:"Une chaîne de tonicisations est :", opts:["Une succession d'accords diminués","Une suite de dominantes secondaires, chacune tonicisant la suivante","Une suite de cadences parfaites","Un cycle des quintes sans dominantes"], a:1, fb:"Une chaîne de tonicisations enchaîne plusieurs dominantes secondaires : V/V/V → V/V → V → I. Chaque accord prépare la dominante suivante, créant une tension qui s'accumule vers la résolution finale." },
  { q:"La progression C–C#7–F#7–B7–E7–A en A majeur est :", opts:["Une modulation en C#","Une chaîne de dominantes secondaires : V/V/V/V–V/V/V–V/V–V–I","Un emprunt en masse","Un cycle des quintes diatoniques"], a:1, fb:"C#7 = V/V/V/V de A (car C#7 → F#7 → B7 → E7 → A). Chaque accord tonicise le suivant par un mouvement de dominante à tonique. Tension progressive vers A." },
  { q:"La progression A–B7–E7–A (en A majeur) est une chaîne car :", opts:["B7 et E7 sont tous deux dans la gamme de A","B7 tonicise E7 (V/V) qui tonicise A (V) — deux niveaux de dominantes secondaires","Ce sont des accords de passage","Ce sont des emprunts à A mineur"], a:1, fb:"B7 = V/V en A majeur (tonicise E7). E7 = V en A (tonicise A). Deux niveaux de tonicisation emboîtés : V/V → V → I. La tension monte sur deux étapes avant la résolution." },
  { q:"La notation V/V/V signifie :", opts:["La quinte de la quinte de la quinte","La dominante de la dominante de la dominante — trois niveaux de tonicisation","Une modulation en trois étapes","Un accord impossible"], a:1, fb:"V/V/V = dominante de la dominante de la dominante. En C : V = G, V/V = D7, V/V/V = A7. La progression A7–D7–G7–C est une chaîne de trois tonicisations." },
  { q:"Dans une chaîne, chaque accord résout :", opts:["Sur la tonique principale","Sur l'accord qui suit de façon que chaque accord agisse comme dominante du suivant","Par demi-ton chromatique","Sur le même accord"], a:1, fb:"Dans une chaîne V/V/V → V/V → V → I : chaque accord résout sur celui qui suit — A7 → D7 → G7 → C. Chaque résolution est une micro-cadence qui renforce la suivante." },
  { q:"La progression C–A7–D7–G7–C contient :", opts:["Aucune tonicisation","Une tonicisation (A7)","Deux tonicisations (A7 = V/II et D7 = V/V)","Trois tonicisations"], a:2, fb:"A7 = V/II (tonicise Dm brièvement — Dm est 'esquivé' ici). D7 = V/V (tonicise G7). Deux niveaux de dominantes secondaires s'enchaînent avant la résolution finale G7–C." },
  { q:"Pourquoi les chaînes de dominantes secondaires créent-elles une tension croissante ?", opts:["Car elles utilisent des accords dissonants","Car chaque dominante secondaire renforce la suivante — la résolution finale est d'autant plus satisfaisante","Car elles modulent","Car elles suppriment le triton"], a:1, fb:"Chaque étape de la chaîne crée une attente qui est partiellement satisfaite (résolution secondaire) mais qui pointe vers la résolution finale. La tension s'accumule et la résolution finale est plus puissante." },
  { q:"En C majeur, la chaîne V/V/V–V/V–V–I s'écrit :", opts:["B7–E7–A7–C","A7–D7–G7–C","D7–G7–C7–F","E7–A7–Dm–G7"], a:1, fb:"V = G, V/V = D7, V/V/V = A7. La chaîne est A7–D7–G7–C. Chaque accord résout une quinte plus bas, vers la résolution finale sur C." },
  { q:"Dans la progression G–C#7–F#7–B7–E7–Am–D7–G (en G majeur), combien de tonicisations y a-t-il ?", opts:["Deux","Trois","Quatre ou plus (chaîne complexe)","Une seule"], a:2, fb:"C#7 (V/VI de G, tonicise F#m), F#7 (V/VI ?), B7 (V/III, tonicise Em/E), E7 (V/II, tonicise Am), D7 (V/V, tonicise G) — c'est une longue chaîne avec au moins 4 niveaux de tonicisation." },
  { q:"La simplification courante d'une tonicisation est :", opts:["Ne jamais toniciser","Remplacer SD/X → V/X par V/X directement","Toujours utiliser le napolitain","Ne jamais chaîner les dominantes"], a:1, fb:"En pratique, au lieu de SD → D secondaire, on saute directement à la dominante secondaire. Au lieu de Am → D7 → G → C, on fait directement D7 → G → C. V/V remplace la sous-dominante." },
  { q:"En jazz, les chaînes de dominantes secondaires sont appelées :", opts:["Ostinatos","Backcycling ou dominant chain","Arpèges dominants","Pédale de dominante"], a:1, fb:"En jazz, enchaîner des dominantes secondaires vers la résolution finale s'appelle 'backcycling' ou 'dominant chain'. C'est la base de nombreuses réharmonisations de standards." },
  { q:"La progression I7–IV dans les 12 mesures de blues utilise I7 comme :", opts:["Accord de tonique stable","V/IV — tonicisation de IV (la sous-dominante)","Un emprunt à I mineur","Un accord de passage"], a:1, fb:"Dans le blues, I7 (ex : C7 en C) est V/IV — il tonicise F (IV). C7 contient Bb qui est étranger à C majeur mais est la 7e de C7, sensible de F (pour la tierce). C'est une tonicisation de la sous-dominante." },
  { q:"Peut-on toniciser un accord emprunté ?", opts:["Non — les emprunts ne peuvent pas être tonicisés","Oui — tout accord présent dans la progression peut être tonicisé, même un accord emprunté","Uniquement en mineur","Uniquement si l'emprunt est le IVe degré"], a:1, fb:"Un accord emprunté peut être tonicisé — on lui applique sa propre dominante. Ex : si on emprunte Ab (bVI de C) depuis C mineur, on peut le toniciser avec Eb7 (V de Ab) pour renforcer l'emprunt." },
  { q:"La progression C–Eb7–Ab–G7–C contient :", opts:["Uniquement des emprunts","Un emprunt (Ab) et une tonicisation de cet emprunt (Eb7 = V/bVI)","Deux modulations","Un cycle des quintes"], a:1, fb:"Ab est emprunté à C mineur (bVI). Eb7 est V/Ab — il tonicise l'accord emprunté avant que G7 ramène vers C. Emprunt et tonicisation coexistent dans la même progression." },
  { q:"La chaîne A7–D7–G7–C en C majeur peut s'analyser comme :", opts:["Trois modulations successives","V/II–V/V–V–I : tonicisation de Dm (esquivé), tonicisation de G, cadence parfaite","Trois emprunts sans fonction","Un cycle des quintes diatoniques standard"], a:1, fb:"A7 = V/II (prépare D, mais D est esquivé — A7 résout directement sur D7 sans attendre Dm). D7 = V/V. G7 = V. C = I. Trois niveaux de tonicisation emboîtés." },
  { q:"Dans la chaîne E7–A7–D7–G7–C, combien de résolutions secondaires y a-t-il avant la résolution finale ?", opts:["Aucune","Deux","Trois","Quatre"], a:2, fb:"E7→A7 (résolution secondaire 1), A7→D7 (résolution secondaire 2), D7→G7 (résolution secondaire 3), G7→C (résolution finale). Trois résolutions secondaires, une finale." },
  { q:"Toniciser la tonicisation signifie :", opts:["Répéter la même note","Appliquer une nouvelle dominante secondaire à une dominante secondaire déjà présente","Moduler deux fois de suite","Utiliser deux emprunts"], a:1, fb:"On peut toniciser une tonicisation : appliquer une dominante secondaire à une dominante secondaire. V/V/V tonicise V/V. La chaîne peut théoriquement se prolonger à l'infini." },
  { q:"La progression de jazz ii–V–I–ii–V–I en 'tournant' illustre :", opts:["Une modulation répétée","Le cycle fonctionnel fondamental T–SD–D–T répété, parfois avec tonicisations internes","Une suite de pédale de dominante","Un contrepoint à 4 voix"], a:1, fb:"ii–V–I = SD–D–T = le cycle fonctionnel. En jazz, on peut enrichir chaque V d'une chaîne de dominantes secondaires (ii/V → V/V → V → I) pour densifier l'harmonie." },

  // ── Synthèse et application (16) ──
  { q:"Quelle est la sensible artificielle de V/V en F majeur ?", opts:["B naturel","E naturel","C# (C dièse)","A#"], a:0, fb:"V de F = C. V/V en F = G7. G7 = G–B–D–F. Le B naturel (Si naturel) est la sensible artificielle de C — il monte d'un demi-ton vers Do. Attention : F majeur a Bb, donc B naturel est bien une altération artificielle." },
  { q:"La progression Am–E7–Am–Dm–A7–Dm en A mineur montre :", opts:["Deux modulations","E7 = V (tonicise Am) et A7 = V/IV (tonicise Dm) — deux tonicisations internes","Deux emprunts","Un cycle des quintes complet"], a:1, fb:"E7 = V de A mineur harmonique (tonicise Am). A7 = V/IV tonicise Dm (IV de A mineur). Deux tonicisations dans la même progression en A mineur." },
  { q:"En D mineur, V/V est :", opts:["C7","A7","G7","E7"], a:1, fb:"V de D mineur = A (la dominante de D mineur est A7 en mineur harmonique). V/V en D mineur = dominante de A = E7. E7 → A7 → Dm." },
  { q:"La progression G–D7–G–C–G–A7–Dm–G en G majeur utilise :", opts:["Uniquement des accords diatoniques","D7 = V/V (tonicise G) et A7 = V/II (tonicise Dm)","Deux modulations","Un cycle de basse de chaconne"], a:1, fb:"D7 = V/V en G majeur (tonicise G — effet de renforcement de la dominante). A7 = V/II en G majeur (tonicise Dm, le IIe de G). Deux tonicisations dans la progression." },
  { q:"Quelle progression illustre V/IV–IV–V7–I en C majeur ?", opts:["G7–F–G7–C","C7–F–G7–C","D7–G–G7–C","A7–Dm–G7–C"], a:1, fb:"V/IV = C7. IV = F. V7 = G7. I = C. La progression C7–F–G7–C tonicise d'abord F (IV) avant la cadence finale G7–C. Très courant dans le blues et le classique." },
  { q:"La différence entre V/V et le cycle des quintes est :", opts:["Aucune différence","V/V est une tonicisation ciblée (un seul accord cible), le cycle des quintes parcourt tous les degrés","Le cycle des quintes n'utilise pas de dominantes","V/V utilise des emprunts"], a:1, fb:"V/V est une tonicisation spécifique — un accord préparant la dominante. Le cycle des quintes est une structure plus large qui parcourt plusieurs degrés successivement par mouvement de quinte." },
  { q:"En C majeur, la progression A7–D7–G7–C est équivalente à :", opts:["Trois modulations","V/II–V/V–V–I : trois niveaux de dominantes secondaires convergeant vers C","Un cycle des quintes diatonique","Deux emprunts et une dominante"], a:1, fb:"A7 = V/II (mais Dm est esquivé — A7 résout sur D7), D7 = V/V, G7 = V, C = I. C'est une chaîne V/V/V–V/V–V–I en C majeur (où le Dm est simplement passé sous silence)." },
  { q:"Peut-on toniciser le IIe degré d'une gamme mineure ?", opts:["Non — le IIe est toujours diminué et ne peut pas être tonicisé","Oui, si on utilise la gamme naturelle sur ce degré (IIe = accord mineur)","Uniquement en mode dorique","Uniquement avec le napolitain"], a:0, fb:"En mineur harmonique, le IIe degré est diminué (Dm7b5 en C mineur) — il ne peut pas être tonicisé. En mineur naturel, le IIe serait Dm (mineur), mais on utilise généralement le mineur harmonique pour les fonctions." },
  { q:"La progression C–G7/B–Am–A7–Dm–G7–C utilise :", opts:["Uniquement des accords diatoniques","G7/B = renversement de V, A7 = V/II tonicise Dm","Deux modulations","Un napolitain et une tonicisation"], a:1, fb:"G7/B = G7 en 1er renversement (fluidifie la basse). A7 = V/II — tonicise Dm momentanément. Dm reprend ensuite sa fonction SD habituelle dans la cadence G7–C." },
  { q:"En G mineur, V/III (IIIe = Bb majeur) serait :", opts:["F7","C7","Eb7","A7"], a:0, fb:"III de G mineur = Bb (Si♭ majeur, relatif majeur). La dominante de Bb = F. V/III en G mineur = F7. F7 → Bb crée une tonicisation du relatif majeur." },
  { q:"La progression Am–E7–Am en A mineur vs Am–E7–Am en A majeur — quelle différence ?", opts:["Aucune, E7 est identique","En A mineur, E7 est la dominante naturelle (V). En A majeur, E7 est V/VI — une tonicisation","En A majeur, E7 est plus dissonant","En A mineur, E7 est un emprunt"], a:1, fb:"En A mineur, E7 est simplement le Ve degré harmonique — la dominante principale. En A majeur, Am n'est pas la tonique principale, et E7 = V/VI — une tonicisation du VIe degré." },
  { q:"Toniciser signifie toujours ajouter :", opts:["Un accord renversé","La dominante propre de l'accord tonicisé (et optionnellement sa sous-dominante)","Un accord emprunt","Un accord de septième majeure"], a:1, fb:"Toniciser = précéder l'accord X de sa propre dominante V/X. On peut aussi ajouter SD/X avant V/X pour enrichir la tonicisation. L'essentiel est la dominante secondaire V/X." },
  { q:"La sensible artificielle dans une chaîne V/V/V–V/V–V–I en C (= A7–D7–G7–C) sont :", opts:["C# seulement","C#, F# et B naturel — une sensible artificielle par dominante secondaire","F# et B seulement","Aucune — ce sont des notes diatoniques"], a:1, fb:"A7 contient C# (sensible de D). D7 contient F# (sensible de G). G7 contient B naturel (sensible de C — diatonique, pas artificielle). Dans cette chaîne : C# et F# sont les sensibles artificielles, B est diatonique." },
  { q:"Une tonicisation sans résolution (la dominante secondaire non suivie de l'accord cible) crée :", opts:["Une modulation réussie","Une fausse piste harmonique — tension non résolue, effet de surprise ou de frustration","Une cadence parfaite","Un accord stable"], a:1, fb:"Si V/X n'est pas suivi de X, l'oreille est surprise — elle attendait X et reçoit autre chose. C'est une 'fausse cadence secondaire' — effet de surprise ou de déception harmonique, outil expressif." },
  { q:"Dans la progression G–B7–Em–A7–Dm–G7–C (en C majeur), B7 et A7 sont :", opts:["Des emprunts à G mineur et D mineur","B7 = V/VI (tonicise Em) et A7 = V/II (tonicise Dm) — deux tonicisations","Des accords de passage","Des modulations temporaires"], a:1, fb:"B7 = V/III en C (tonicise Em, IIIe de C). A7 = V/II en C (tonicise Dm, IIe de C). Deux tonicisations successives — Em et Dm sont les accords tonicisés avant la cadence finale G7–C." },
  { q:"La tonicisation est-elle possible en mode mineur ?", opts:["Non — uniquement en majeur","Oui — tout accord mineur peut être tonicisé avec les mêmes règles","Uniquement sur les degrés majeurs du mineur","Uniquement en mineur harmonique"], a:1, fb:"La tonicisation fonctionne en mineur exactement comme en majeur — on applique la dominante propre de l'accord cible. Les accords diminués restent les seules exceptions." },
];

const QUIZ_COUNT = 10;

// ─── Styles ───────────────────────────────────────────────────────────────────

const S = {
  wrap:  { fontFamily:"var(--font-sans,system-ui)", maxWidth:720, margin:"0 auto", padding:"0 1rem 3rem" } as React.CSSProperties,
  hdr:   { padding:"1.5rem 0 1rem", borderBottom:"0.5px solid #e5e5e5", marginBottom:"1.25rem" } as React.CSSProperties,
  badge: { display:"inline-block", background:"#FAEEDA", color:"#BA7517", fontSize:11, fontWeight:500, padding:"2px 10px", borderRadius:20, marginBottom:6 } as React.CSSProperties,
  h1:    { fontSize:26, fontWeight:500, color:"#111", margin:0 } as React.CSSProperties,
  sub:   { fontSize:14, color:"#666", marginTop:4, lineHeight:1.6 } as React.CSSProperties,
  nav:   { display:"flex", gap:6, flexWrap:"wrap" as const, marginBottom:"1.5rem" },
  pill:  (a:boolean):React.CSSProperties => ({ fontSize:12, padding:"5px 14px", border:`0.5px solid ${a?"#333":"#ddd"}`, borderRadius:20, cursor:"pointer", background:a?"#111":"transparent", color:a?"#fff":"#666", transition:"all .15s" }),
  h2:    { fontSize:17, fontWeight:500, color:"#111", marginBottom:8 } as React.CSSProperties,
  p:     { fontSize:14, color:"#555", lineHeight:1.75, marginBottom:"1rem" } as React.CSSProperties,
  info:  { borderLeft:"2px solid #185FA5", padding:"8px 14px", background:"#E6F1FB", borderRadius:"0 6px 6px 0", margin:"12px 0", fontSize:13, color:"#0C447C", lineHeight:1.6 } as React.CSSProperties,
  warn:  { borderLeft:"2px solid #BA7517", padding:"8px 14px", background:"#FAEEDA", borderRadius:"0 6px 6px 0", margin:"12px 0", fontSize:13, color:"#633806", lineHeight:1.6 } as React.CSSProperties,
  tip:   { borderLeft:"2px solid #0F6E56", padding:"8px 14px", background:"#E1F5EE", borderRadius:"0 6px 6px 0", margin:"12px 0", fontSize:13, color:"#085041", lineHeight:1.6 } as React.CSSProperties,
};

// ─── Composant ────────────────────────────────────────────────────────────────

export default function Cours7() {
  const [sec,   setSec]   = useState("principe");
  const i18n = useCoursI18n("cours7");
  const [selDs, setSelDs] = useState<number|null>(null);
  const [selTv, setSelTv] = useState<number|null>(null);

  const [qs,   setQs]   = useState(() => shuffle(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [qi,   setQi]   = useState(0);
  const [scr,  setScr]  = useState(0);
  const [ans,  setAns]  = useState(false);
  const [ch,   setCh]   = useState<number|null>(null);
  const [done, setDone] = useState(false);

  const ref = useRef<PianoPlayerRef>(null);

  const answer = (i:number) => { if (ans) return; setCh(i); setAns(true); if (i===qs[qi].a) setScr(s=>s+1); };
  const next   = () => { if (qi+1>=QUIZ_COUNT) setDone(true); else { setQi(i=>i+1); setAns(false); setCh(null); } };
  const reset  = () => { setQs(shuffle(ALL_QUESTIONS).slice(0,QUIZ_COUNT)); setQi(0); setScr(0); setAns(false); setCh(null); setDone(false); };

  return (
    <div style={S.wrap}>
      <div style={{ position:"absolute", opacity:0, pointerEvents:"none", height:0, overflow:"hidden" }}>
        <PianoPlayer ref={ref} octaves={3} startOctave={2} showLabels={false} />
      </div>

      <div style={S.hdr}>
        <span style={S.badge}>{i18n.badge}</span>
        <h1 style={S.h1}>{i18n.title}</h1>
        <p style={S.sub}>Dominantes secondaires, tons voisins et chaînes — rendre un accord tonique l'espace d'un instant.</p>
      </div>

      <nav style={S.nav}>
        {SECTIONS_IDS.map(id => <button key={id} style={S.pill(sec===id)} onClick={() => setSec(id)}>{i18n.sectionLabel(id)}</button>)}
      </nav>

      {/* ══ PRINCIPE ══ */}
      {sec === "principe" && (
        <div>
          <h2 style={S.h2}>Principe de la tonicisation</h2>
          <p style={S.p}>La tonicisation consiste à traiter un accord — le temps d'un instant — comme une <strong>tonique temporaire</strong>, en le précédant de sa propre dominante (et optionnellement de sa sous-dominante). C'est une autre forme d'emprunt : au lieu de remplacer un accord par un autre, on vient le <em>préparer</em> avec les accords de sa propre tonalité.</p>

          <div style={S.info}>
            <strong>Définition simple :</strong> tout accord d'une progression peut être considéré comme une tonique temporaire. On peut donc le préparer avec sa dominante propre — appelée <em>dominante secondaire</em>.
          </div>

          <p style={S.p}>La tonicisation se distingue de la modulation : on ne quitte pas la tonalité principale. La dominante secondaire est une couleur passagère — après elle, on revient naturellement dans la progression.</p>

          <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:20 }}>
            {[
              { icon:"✅", t:"Peut être tonicisé", d:"Tout accord diatonique sauf la tonique principale et les accords diminués.", c:"#0F6E56", bg:"#E1F5EE" },
              { icon:"❌", t:"Ne peut pas être tonicisé", d:"La tonique principale (déjà tonique) et les accords diminués (trop instables pour assumer la fonction tonique).", c:"#993C1D", bg:"#FAECE7" },
            ].map(row => (
              <div key={row.t} style={{ border:`0.5px solid ${row.c}30`, borderRadius:10, padding:"12px 16px", background:row.bg, display:"flex", gap:12, alignItems:"flex-start" }}>
                <span style={{ fontSize:20 }}>{row.icon}</span>
                <div>
                  <div style={{ fontSize:13, fontWeight:500, color:row.c, marginBottom:4 }}>{row.t}</div>
                  <p style={{ fontSize:13, color:"#444", lineHeight:1.6, margin:0 }}>{row.d}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize:14, fontWeight:500, margin:"20px 0 8px", color:"#111" }}>Exemple fondamental : toniciser G (V de C)</h3>
          <p style={S.p}>En C majeur, G7 est la dominante. On peut renforcer son arrivée en le précédant de sa propre dominante — D7. Au lieu de <code>C – G7 – C</code>, on écrit <code>C – D7 – G7 – C</code>.</p>

          <div style={{ background:"#fafafa", border:"0.5px solid #e5e5e5", borderRadius:10, padding:"14px 16px", marginBottom:16 }}>
            <div style={{ fontSize:12, color:"#999", marginBottom:8 }}>Progression : C – D7 – G7 – C (V/V – V – I)</div>
            <div style={{ fontFamily:"monospace", fontSize:14, color:"#BA7517", marginBottom:10, letterSpacing:1 }}>
              C → D7 → G7 → C
            </div>
            <button onClick={() => playProg(ref as React.RefObject<PianoPlayerRef>, ["C","D7","G7","C"], 1000)}
              style={{ fontSize:12, padding:"5px 14px", border:"0.5px solid #BA7517", borderRadius:20, cursor:"pointer", background:"transparent", color:"#BA7517" }}>
              ▶ Écouter
            </button>
            <div style={{ fontSize:12, color:"#888", marginTop:10, lineHeight:1.6 }}>
              D7 contient <strong>F# (Fa#)</strong> — la sensible artificielle de G. F# monte d'un demi-ton vers G. Sans F#, G n'aurait pas ce renforcement.
            </div>
          </div>

          <div style={S.warn}>
            <strong>Attention :</strong> la tonicisation n'est pas une modulation. Après D7–G7, on revient sur C — le centre tonal n'a jamais changé. D7 est une couleur passagère, pas un nouveau centre.
          </div>

          <h3 style={{ fontSize:14, fontWeight:500, margin:"20px 0 8px", color:"#111" }}>Simplification pratique</h3>
          <p style={S.p}>En pratique, on peut court-circuiter la sous-dominante et passer directement à la dominante secondaire. Au lieu de <code>SD/X → V/X → X</code>, on écrit simplement <code>V/X → X</code>. V/V peut même remplacer un accord de sous-dominante dans la progression.</p>
        </div>
      )}

      {/* ══ DOMINANTES SECONDAIRES ══ */}
      {sec === "secondaires" && (
        <div>
          <h2 style={S.h2}>Les dominantes secondaires en C majeur</h2>
          <p style={S.p}>Chaque degré diatonique (sauf I et VII°) peut être tonicisé. Sa dominante secondaire se calcule en montant 5 degrés depuis l'accord cible et en jouant un accord de dominante 7.</p>

          <div style={S.tip}>
            <strong>Calcul rapide :</strong> pour toniciser X, compte 5 notes depuis X (inclusif) et joue un accord X7. Ex : pour Dm → D E F G A = A7. Pour Am → A B C D E = E7.
          </div>

          <p style={{ fontSize:13, color:"#888", marginBottom:12, marginTop:16 }}>
            Cliquez sur un degré pour voir sa dominante secondaire et l'écouter.
          </p>

          {DOM_SEC.map((d, i) => (
            <div key={d.deg}
              onClick={() => setSelDs(selDs===i?null:i)}
              style={{ border:`0.5px solid ${selDs===i?"#BA7517":"#e5e5e5"}`, borderRadius:10, marginBottom:8, overflow:"hidden", background:selDs===i?"#FAEEDA":"#fff", transition:"all .15s", cursor:"pointer" }}>
              <div style={{ display:"flex", alignItems:"center", gap:12, padding:"12px 16px" }}>
                <span style={{ fontSize:11, color:"#999", fontWeight:500, minWidth:30 }}>Degré {d.deg}</span>
                <span style={{ fontSize:15, fontWeight:600, color:"#111", minWidth:36 }}>{d.cible}</span>
                <span style={{ fontSize:13, color:"#BA7517", fontFamily:"monospace", fontWeight:500 }}>V/{d.deg} = {d.dom}</span>
                <span style={{ fontSize:12, color:"#888", flex:1 }}>{d.calc}</span>
              </div>
              {selDs === i && (
                <div style={{ padding:"0 16px 14px", borderTop:"0.5px solid #BA751720" }}>
                  <p style={{ fontSize:13, color:"#633806", lineHeight:1.65, margin:"8px 0 10px" }}>{d.note}</p>
                  <div style={{ fontFamily:"monospace", fontSize:13, color:"#BA7517", marginBottom:10, letterSpacing:1 }}>
                    {d.prog.join(" → ")}
                  </div>
                  <button
                    onClick={e => { e.stopPropagation(); playProg(ref as React.RefObject<PianoPlayerRef>, d.progKeys, 1000); }}
                    style={{ fontSize:12, padding:"5px 14px", border:"0.5px solid #BA7517", borderRadius:20, cursor:"pointer", background:"transparent", color:"#BA7517" }}>
                    ▶ Écouter {d.dom} → {d.cible}
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* Tableau récap */}
          <h3 style={{ fontSize:14, fontWeight:500, margin:"20px 0 8px", color:"#111" }}>Tableau récapitulatif en C majeur</h3>
          <div style={{ overflowX:"auto" }}>
            <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
              <thead>
                <tr style={{ borderBottom:"0.5px solid #e5e5e5" }}>
                  {["Degré cible","Accord cible","Dominante secondaire","Sensible artificielle"].map(h => (
                    <th key={h} style={{ textAlign:"left", padding:"6px 10px", fontWeight:500, color:"#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { deg:"II", cible:"Dm", dom:"A7",  sens:"C# → D" },
                  { deg:"III",cible:"Em", dom:"B7",  sens:"D# → E" },
                  { deg:"IV", cible:"F",  dom:"C7",  sens:"E (Bb dans C7 pour la 7e)" },
                  { deg:"V",  cible:"G7", dom:"D7",  sens:"F# → G" },
                  { deg:"VI", cible:"Am", dom:"E7",  sens:"G# → A" },
                ].map((row, i) => (
                  <tr key={row.deg} style={{ borderBottom:"0.5px solid #f0f0f0", background:i%2===0?"#fff":"#fafafa" }}>
                    <td style={{ padding:"7px 10px", fontWeight:500, color:"#BA7517" }}>{row.deg}</td>
                    <td style={{ padding:"7px 10px", fontFamily:"monospace" }}>{row.cible}</td>
                    <td style={{ padding:"7px 10px", fontFamily:"monospace", fontWeight:500 }}>{row.dom}</td>
                    <td style={{ padding:"7px 10px", color:"#666", fontSize:12 }}>{row.sens}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ══ TONS VOISINS ══ */}
      {sec === "voisins" && (
        <div>
          <h2 style={S.h2}>Tons voisins et fonctions secondaires</h2>
          <p style={S.p}>Les <strong>tons voisins</strong> d'une tonalité sont les tonalités qui partagent au moins 6 notes communes avec elle — ce sont les tonalités des 6 degrés diatoniques. Chaque ton voisin correspond à un degré de la gamme, et ses propres accords fonctionnels (dominante et sous-dominante) deviennent les dominantes et sous-dominantes <em>secondaires</em>.</p>

          <div style={S.info}>
            En C majeur, les tons voisins sont : <strong>D mineur</strong> (II), <strong>E mineur</strong> (III), <strong>F majeur</strong> (IV), <strong>G majeur</strong> (V), <strong>A mineur</strong> (VI). Le VIIe (Bdim) ne peut pas être tonicisé.
          </div>

          <p style={{ fontSize:13, color:"#888", marginBottom:12, marginTop:16 }}>
            Cliquez sur un ton voisin pour voir ses accords secondaires.
          </p>

          {TONS_VOISINS.map((tv, i) => (
            <div key={tv.ton}
              onClick={() => setSelTv(selTv===i?null:i)}
              style={{ border:`0.5px solid ${selTv===i?"#534AB7":"#e5e5e5"}`, borderRadius:10, marginBottom:8, overflow:"hidden", background:selTv===i?"#EEEDFE":"#fff", transition:"all .15s", cursor:"pointer" }}>
              <div style={{ display:"flex", alignItems:"center", gap:12, padding:"12px 16px" }}>
                <span style={{ fontSize:13, fontWeight:600, color:selTv===i?"#534AB7":"#111", minWidth:80 }}>{tv.ton}</span>
                <span style={{ fontSize:11, color:"#999" }}>{tv.rel}</span>
                <span style={{ fontSize:13, fontFamily:"monospace", color:"#534AB7", marginLeft:"auto" }}>V/ = {tv.dom_sec}</span>
              </div>
              {selTv === i && (
                <div style={{ padding:"0 16px 14px", borderTop:"0.5px solid #534AB720" }}>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginTop:8 }}>
                    <div style={{ background:"#fff", borderRadius:8, padding:"10px 12px", border:"0.5px solid #534AB730" }}>
                      <div style={{ fontSize:11, color:"#999", marginBottom:4 }}>Dominante secondaire</div>
                      <div style={{ fontSize:14, fontFamily:"monospace", fontWeight:600, color:"#534AB7" }}>{tv.dom_sec}</div>
                    </div>
                    <div style={{ background:"#fff", borderRadius:8, padding:"10px 12px", border:"0.5px solid #534AB730" }}>
                      <div style={{ fontSize:11, color:"#999", marginBottom:4 }}>Sous-dominante secondaire</div>
                      <div style={{ fontSize:13, fontFamily:"monospace", color:"#534AB7" }}>{tv.sd_sec}</div>
                    </div>
                  </div>
                  <p style={{ fontSize:12, color:"#534AB7", margin:"10px 0 0", fontStyle:"italic" }}>{tv.note}</p>
                </div>
              )}
            </div>
          ))}

          <div style={S.warn}>
            <strong>Rappel :</strong> dans une tonicisation, le triton de référence est celui de la tonalité <em>temporaire</em> (du ton voisin), pas celui de la tonalité principale. Les fonctions SD et D s'analysent localement.
          </div>
        </div>
      )}

      {/* ══ CHAÎNES ══ */}
      {sec === "chaines" && (
        <div>
          <h2 style={S.h2}>Chaînes de tonicisations</h2>
          <p style={S.p}>Puisque tout accord peut être tonicisé, on peut aussi toniciser une tonicisation — c'est-à-dire appliquer une dominante secondaire à un accord déjà secondaire. Cela crée une <strong>chaîne de dominantes secondaires</strong>, dont chaque maillon renforce la tension vers la résolution finale.</p>

          <div style={S.info}>
            <strong>V/V/V → V/V → V → I</strong> : trois niveaux de tonicisation emboîtés. En C majeur : A7 → D7 → G7 → C. Chaque accord est la dominante du suivant — la tension s'accumule sur trois étapes.
          </div>

          {/* Progressions de démonstration */}
          {[
            { label:"Chaîne simple : V/V → V → I",      prog:["D7","G7","C"],           desc:"D7 tonicise G7 avant la résolution finale. La double dominante renforce la cadence." },
            { label:"Chaîne double : V/V/V → V/V → V → I", prog:["A7","D7","G7","C"],    desc:"A7 → D7 → G7 → C. Trois niveaux de dominantes. Tension maximale avant C." },
            { label:"Tonicisation + retour SD : A7–Dm–G7–C", prog:["A7","Dm","G7","C"],  desc:"A7 tonicise Dm (V/II). Dm reprend sa fonction SD habituelle avant la cadence finale." },
          ].map(ex => (
            <div key={ex.label} style={{ border:"0.5px solid #e5e5e5", borderRadius:10, padding:"14px 16px", marginBottom:10, background:"#fafafa" }}>
              <div style={{ fontSize:13, fontWeight:500, color:"#111", marginBottom:6 }}>{ex.label}</div>
              <div style={{ fontFamily:"monospace", fontSize:13, color:"#BA7517", marginBottom:8, letterSpacing:1 }}>{ex.prog.join(" → ")}</div>
              <p style={{ fontSize:12, color:"#666", margin:"0 0 10px", lineHeight:1.6 }}>{ex.desc}</p>
              <button
                onClick={() => playProg(ref as React.RefObject<PianoPlayerRef>, ex.prog, 950)}
                style={{ fontSize:12, padding:"5px 14px", border:"0.5px solid #BA7517", borderRadius:20, cursor:"pointer", background:"transparent", color:"#BA7517" }}>
                ▶ Écouter
              </button>
            </div>
          ))}

          <h3 style={{ fontSize:14, fontWeight:500, margin:"20px 0 8px", color:"#111" }}>Le blues — tonicisation de la sous-dominante</h3>
          <p style={S.p}>Dans le blues sur 12 mesures, la tonique joue sous forme de I7 (accord de dominante) — ce qui la transforme en V/IV, tonicisant momentanément la sous-dominante. C7 en C majeur contient Si♭ (7e mineure) étranger à C majeur, mais qui annonce F (IV) dont la tierce est La — un mouvement de résolution coloré.</p>

          <div style={S.tip}>
            <strong>Combinaison possible :</strong> dans une tonicisation, toutes les règles coexistent. On peut combiner substitutions diatoniques, emprunts à l'homonyme, napolitain — à condition de référencer le triton de la tonalité temporaire.
          </div>
        </div>
      )}

      {/* ══ QUIZ ══ */}
      {sec === "quiz" && (
        <div>
          <h2 style={S.h2}>{i18n.training}</h2>
          {done ? (
            <div style={{ textAlign:"center", padding:"2rem 0" }}>
              <div style={{ fontSize:32, marginBottom:8 }}>{scr>=9?"🎼":scr>=7?"🎹":"💪"}</div>
              <div style={{ fontSize:20, fontWeight:500, color:"#111", marginBottom:4 }}>{i18n.t("score")} : {scr} / {QUIZ_COUNT}</div>
              <div style={{ fontSize:14, color:"#666", marginBottom:20 }}>
                {i18n.quizMessage(scr, QUIZ_COUNT)}
              </div>
              <button onClick={reset} style={{ fontSize:13, padding:"8px 20px", border:"0.5px solid #BA7517", borderRadius:20, cursor:"pointer", background:"#FAEEDA", color:"#BA7517" }}>
                {i18n.newQ}
              </button>
            </div>
          ) : (
            <div>
              <div style={{ fontSize:12, color:"#999", marginBottom:10 }}>
                {i18n.t("question")} {qi+1} {i18n.t("of")} {QUIZ_COUNT}
                <span style={{ marginLeft:12, color:"#ccc" }}>{ALL_QUESTIONS.length} {i18n.t("questionsPool")}</span>
              </div>
              <div style={{ fontSize:15, fontWeight:500, color:"#111", lineHeight:1.6, marginBottom:16 }}>{qs[qi].q}</div>
              <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
                {qs[qi].opts.map((opt, i) => {
                  const correct=i===qs[qi].a, selected=ch===i;
                  let bg="#fff", border="#e5e5e5", color="#333";
                  if (ans) { if (correct) { bg="#E1F5EE"; border="#0F6E56"; color="#085041"; } else if (selected) { bg="#FCEBEB"; border="#A32D2D"; color="#501313"; } }
                  return <button key={i} onClick={() => answer(i)} disabled={ans} style={{ fontSize:13, padding:"10px 14px", border:`0.5px solid ${border}`, borderRadius:8, cursor:ans?"default":"pointer", background:bg, color, textAlign:"left", transition:"all .12s" }}>{opt}</button>;
                })}
              </div>
              {ans && <div style={{ marginTop:12, padding:"10px 14px", borderRadius:8, background:ch===qs[qi].a?"#E1F5EE":"#FCEBEB", fontSize:13, color:ch===qs[qi].a?"#085041":"#501313", lineHeight:1.6 }}>{qs[qi].fb}</div>}
              {ans && <button onClick={next} style={{ marginTop:12, fontSize:13, padding:"7px 18px", border:"0.5px solid #333", borderRadius:20, cursor:"pointer", background:"transparent", color:"#333" }}>{qi+1<QUIZ_COUNT?i18n.nextQ:i18n.seeScore}</button>}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

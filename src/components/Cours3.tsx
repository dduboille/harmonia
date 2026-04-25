"use client";

/**
 * Cours3.tsx
 * Harmonia · Niveau 1 · Cours 3 — Fonctions tonales et conduites de voix
 * i18n : UI chrome traduit via next-intl (useCoursI18n)
 * Contenu pédagogique : FR pour MVP
 * Convention Harmonia : noms de notes en anglais (C D E F G A B)
 */

import React, { useRef, useState } from "react";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import { useCoursI18n } from "@/hooks/useCoursI18n";

// ─── Audio ────────────────────────────────────────────────────────────────────

const CHORDS: Record<string, string[]> = {
  C:    ["Do:3","Mi:3","Sol:3"],
  Dm:   ["Ré:3","Fa:3","La:3"],
  Em:   ["Mi:3","Sol:3","Si:3"],
  F:    ["Fa:3","La:3","Do:4"],
  G7:   ["Sol:3","Si:3","Ré:4","Fa:4"],
  Am:   ["La:3","Do:4","Mi:4"],
  Bdim: ["Si:3","Ré:4","Fa:4"],
  Dm7:  ["Ré:3","Fa:3","La:3","Do:4"],
  CMaj7:["Do:3","Mi:3","Sol:3","Si:3"],
  // Triton seul
  tritone: ["Fa:3","Si:3"],
};

function playChord(ref: React.RefObject<PianoPlayerRef>, keys: string[], dur = 1.8) {
  keys.forEach(k => {
    const [n, o] = k.split(":");
    ref.current?.playNote(n, parseInt(o), { duration: dur });
  });
}

function playProg(ref: React.RefObject<PianoPlayerRef>, names: string[], gap = 1000) {
  names.forEach((name, i) =>
    setTimeout(() => playChord(ref, CHORDS[name] ?? [], 1.5), i * gap)
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SECTIONS_IDS = ["triton","fonctions","progressions","voix","quiz"] as const;

// Accords de C majeur avec leur fonction
const ACCORDS_C = [
  { deg:"I",   chord:"C",    fn:"Tonique",      fnColor:"#0F6E56", fnBg:"#E1F5EE", note:"Stable — pas de triton. Point d'arrivée et de repos.", keys:["Do:3","Mi:3","Sol:3"] },
  { deg:"II",  chord:"Dm",   fn:"Sous-dom.",    fnColor:"#534AB7", fnBg:"#EEEDFE", note:"Contient Fa. Prépare la tension (sous-dominante).", keys:["Ré:3","Fa:3","La:3"] },
  { deg:"III", chord:"Em",   fn:"Ambigu",       fnColor:"#888",    fnBg:"#f5f5f5", note:"Contient Si mais pas Fa — accord 'bâtard', rarement utilisé seul.", keys:["Mi:3","Sol:3","Si:3"] },
  { deg:"IV",  chord:"F",    fn:"Sous-dom.",    fnColor:"#534AB7", fnBg:"#EEEDFE", note:"Contient Fa. Prépare la dominante.", keys:["Fa:3","La:3","Do:4"] },
  { deg:"V",   chord:"G7",   fn:"Dominante",    fnColor:"#BA7517", fnBg:"#FAEEDA", note:"Contient Fa ET Si (le triton complet). Maximum de tension.", keys:["Sol:3","Si:3","Ré:4","Fa:4"] },
  { deg:"VI",  chord:"Am",   fn:"Tonique",      fnColor:"#0F6E56", fnBg:"#E1F5EE", note:"Pas de triton. Alternative douce à la tonique.", keys:["La:3","Do:4","Mi:4"] },
  { deg:"VII", chord:"Bdim", fn:"Dominante",    fnColor:"#BA7517", fnBg:"#FAEEDA", note:"Contient Fa ET Si. Tension extrême — sensible sans fondamentale.", keys:["Si:3","Ré:4","Fa:4"] },
];

// Règles de conduite de voix
const REGLES_VOIX = [
  { icon:"🚫", titre:"Quintes et octaves parallèles", desc:"Deux voix formant une quinte (ou octave) qui bougent dans la même direction vers une nouvelle quinte (ou octave). Interdit — annule l'indépendance des voix.", couleur:"#993C1D", bg:"#FAECE7" },
  { icon:"↑",  titre:"Résolution de la sensible",     desc:"La sensible (VIIe degré, ici B) doit monter vers la tonique (C). Ce demi-ton ascendant est obligatoire — jamais descendre la sensible.", couleur:"#0F6E56", bg:"#E1F5EE" },
  { icon:"↓",  titre:"Résolution de la septième",     desc:"La septième de dominante (F dans G7) doit descendre par degré conjoint vers la tierce de l'accord suivant (E dans C). Règle absolue.", couleur:"#185FA5", bg:"#E6F1FB" },
  { icon:"2x", titre:"Doublure de la fondamentale",   desc:"Dans un accord à 3 sons réparti sur 4 voix, on double la fondamentale par défaut. Exception : au VIIe degré, on double la tierce — jamais la sensible.", couleur:"#534AB7", bg:"#EEEDFE" },
  { icon:"↔",  titre:"Mouvement contraire",           desc:"Le mouvement le plus équilibré : une voix monte, l'autre descend. Il donne de la vitalité à l'écriture et évite naturellement les parallèles.", couleur:"#BA7517", bg:"#FAEEDA" },
  { icon:"≤8", titre:"Espacement des voix",           desc:"Entre soprano–alto et alto–ténor : pas plus d'une octave. Entre ténor–basse : jusqu'à deux octaves tolérées.", couleur:"#3B6D11", bg:"#EAF3DE" },
];

// Progressions pour démonstration
const PROGS = [
  { id:"sddt", label:"SD → D → T", chords:["Dm","G7","C"],  desc:"L'enchaînement fondamental. Dm (sous-dominante) prépare G7 (dominante), qui résout sur C (tonique).", color:"#0F6E56" },
  { id:"iivi",  label:"II – V – I", chords:["Dm7","G7","CMaj7"], desc:"La cadence jazz par excellence. Dm7 = sous-dominante étendue, G7 = dominante, CMaj7 = tonique colorée.", color:"#534AB7" },
  { id:"full",  label:"I – IV – V7 – I", chords:["C","F","G7","C"], desc:"Progression complète T–SD–D–T en C majeur. Les quatre fonctions harmoniques dans leur enchaînement naturel.", color:"#185FA5" },
  { id:"rompu", label:"V → VI (rompue)", chords:["G7","Am"],  desc:"Cadence rompue : G7 résout sur Am (VI) au lieu de C (I). Effet de surprise qui prolonge la phrase.", color:"#BA7517" },
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
  // ── Le triton (16) ──
  { q:"Combien de tons contient le triton ?", opts:["2","3","4","6"], a:1, fb:"Le triton = 3 tons (6 demi-tons). Son nom vient de là — tri-ton. En C majeur, il se forme entre F et B." },
  { q:"En C majeur, quelles notes forment le triton ?", opts:["C et G","F et B","E et A","D et A"], a:1, fb:"F (Fa, IVe degré) et B (Si, VIIe degré) sont les deux notes du triton de C majeur. Ce sont les notes constitutives de l'accord G7." },
  { q:"Pourquoi le triton est-il instable ?", opts:["Car il est très grave","Car il est à mi-chemin de l'octave — son ambiguïté acoustique crée une forte tension vers la résolution","Car il contient toujours des bémols","Car il est rare en musique"], a:1, fb:"Le triton divise l'octave en deux parties égales (6+6 demi-tons) — il est parfaitement symétrique. Cette absence de direction crée une tension qui appelle une résolution." },
  { q:"Vers quels degrés le triton résout-il naturellement ?", opts:["Vers V et VII","Vers I et III (ou leur équivalent)","Vers II et IV","Vers VI et VII"], a:1, fb:"Le triton F–B résout par demi-ton conjoint : F descend vers E (tierce de C) et B monte vers C (tonique). La résolution cible les degrés I et III." },
  { q:"Dans G7, la note F est :", opts:["La fondamentale","La tierce","La quinte","La septième"], a:3, fb:"G7 = G–B–D–F. F est la septième (mineure) de G7. C'est la moitié du triton — elle doit descendre vers E lors de la résolution." },
  { q:"Dans G7, la note B est :", opts:["La fondamentale","La tierce","La quinte","La septième"], a:1, fb:"G7 = G–B–D–F. B est la tierce de G7 — et c'est la sensible de C majeur. Elle doit monter vers C lors de la résolution." },
  { q:"Lors de la résolution G7 → C, la sensible B :", opts:["Descend vers G","Monte vers C par demi-ton","Reste sur B","Saute vers E"], a:1, fb:"B (sensible) monte obligatoirement vers C (tonique). Ce demi-ton ascendant est la résolution de la sensible — règle absolue de l'harmonie tonale." },
  { q:"Lors de la résolution G7 → C, la septième F :", opts:["Monte vers G","Descend vers E par degré conjoint","Reste sur F","Saute vers C"], a:1, fb:"F (septième de dominante) descend vers E (tierce de C). Ce demi-ton descendant est la résolution de la septième — règle absolue." },
  { q:"Le triton de G majeur est formé par :", opts:["G et D","C et F#","B et E","A et D"], a:1, fb:"En G majeur, les IVe (C) et VIIe (F#) degrés forment le triton. C–F# = 6 demi-tons = triton." },
  { q:"Quel accord de C majeur contient les deux notes du triton (F et B) ?", opts:["C","F","G7","Am"], a:2, fb:"G7 = G–B–D–F. Il contient B (sensible) et F (7e de dominante) — le triton complet. C'est pourquoi G7 est la dominante parfaite." },
  { q:"Le triton est instable depuis combien de siècles en musique occidentale ?", opts:["Environ 100 ans","Environ 400 ans","Environ 1 000 ans","Depuis toujours"], a:1, fb:"Depuis environ 400 ans (musique baroque), le triton est au cœur de la tension harmonique de la musique tonale. L'harmonie fonctionnelle repose sur cette instabilité." },
  { q:"La résolution du triton F–B se fait par :", opts:["Deux mouvements ascendants","Deux mouvements descendants","Un mouvement ascendant (B→C) et un descendant (F→E) — mouvements contraires","Deux sauts de quinte"], a:2, fb:"B monte vers C (+½ ton) et F descend vers E (-½ ton). Ce double mouvement contraire par demi-ton est la résolution du triton — très stable car symétrique." },
  { q:"L'accord Bdim contient-il le triton de C majeur ?", opts:["Non","Oui — il contient B et F, les deux notes du triton","Il contient F mais pas B","Il contient B mais pas F"], a:1, fb:"Bdim = B–D–F. Il contient bien B (sensible) et F (sous-dominante) — le triton complet. C'est pourquoi Bdim est une alternative fonctionnelle à G7 : les deux sont dominante." },
  { q:"Le triton s'appelle aussi :", opts:["Quarte diminuée","Quinte diminuée ou quarte augmentée","Sixte mineure","Septième diminuée"], a:1, fb:"Le triton = quarte augmentée (F–B ascendant) ou quinte diminuée (B–F descendant). 6 demi-tons dans les deux cas — même intervalle, noms différents selon le sens." },
  { q:"En F majeur, quelles notes forment le triton ?", opts:["F et C","Bb et E","G et D","A et Eb"], a:1, fb:"En F majeur, IV = Bb et VII = E. Le triton de F majeur est Bb–E (6 demi-tons). L'accord de dominante de F est C7, qui contient Bb et E." },
  { q:"Pourquoi le triton est-il la clé de l'harmonie fonctionnelle ?", opts:["Car il est rare","Car sa présence ou absence définit les fonctions T, SD et D — il organise toute la tension harmonique","Car il crée des accords de 4 notes","Car il appartient uniquement à la gamme mineure"], a:1, fb:"La présence des deux notes du triton → Dominante. Une seule → Sous-dominante. Aucune → Tonique. Le triton est le 'thermostat' de la tension harmonique." },

  // ── Fonctions tonales (20) ──
  { q:"Combien de fonctions tonales principales existent ?", opts:["2","3","4","5"], a:1, fb:"Trois fonctions : Tonique (T), Sous-dominante (SD), Dominante (D). Elles organisent tous les accords selon leur rôle dans la tension/résolution." },
  { q:"La fonction Tonique est caractérisée par :", opts:["La présence du triton complet","L'absence de F et B — stabilité, résolution, repos","La présence de F seul","La présence de B seul"], a:1, fb:"La Tonique ne contient aucune des deux notes du triton (ni F ni B). Elle est stable — c'est le point de repos et de résolution. En C : I (C) et VI (Am)." },
  { q:"La fonction Sous-dominante est caractérisée par :", opts:["La présence du triton complet","La présence de F (IVe degré) mais pas de B","La présence de B mais pas de F","L'absence de F et B"], a:1, fb:"La Sous-dominante contient F (sous-dominante) mais pas B (sensible). Elle prépare la tension sans en être le sommet. En C : II (Dm) et IV (F)." },
  { q:"La fonction Dominante est caractérisée par :", opts:["L'absence de triton","La présence de F seul","La présence du triton complet (F et B)","La présence de B seul"], a:2, fb:"La Dominante contient les deux notes du triton (F et B). Elle est le sommet de la tension — elle appelle impérativement la résolution sur la Tonique. En C : V (G7) et VII (Bdim)." },
  { q:"En C majeur, quels accords ont la fonction Tonique ?", opts:["C et G","Dm et F","C et Am","G7 et Bdim"], a:2, fb:"C (I) et Am (VI) : aucun ne contient F ni B. Ce sont les deux toniques de C majeur. Am est une tonique 'douce', souvent utilisée dans les cadences rompues." },
  { q:"En C majeur, quels accords ont la fonction Dominante ?", opts:["G7 et Am","G7 et Bdim","C et Em","Dm et F"], a:1, fb:"G7 (V) et Bdim (VII) contiennent tous deux F et B — le triton complet. Ce sont les deux dominantes de C majeur." },
  { q:"En C majeur, quels accords ont la fonction Sous-dominante ?", opts:["C et Am","G7 et Bdim","Dm et F","Em et G"], a:2, fb:"Dm (II) et F (IV) contiennent F mais pas B. Ce sont les deux sous-dominantes de C majeur." },
  { q:"L'enchaînement fondamental de l'harmonie tonale est :", opts:["T → D → SD","SD → D → T","D → T → SD","T → SD → T"], a:1, fb:"SD → D → T est la 'colonne vertébrale' de l'harmonie tonale. La Sous-dominante prépare la Dominante qui résout sur la Tonique." },
  { q:"Qu'est-ce qu'une substitution diatonique ?", opts:["Un accord renversé","Remplacer un accord par un autre de même fonction dans la même gamme","Un accord emprunté d'une autre gamme","Un accord de 4 sons"], a:1, fb:"Une substitution diatonique remplace un accord par un autre de même fonction dans la même gamme. Ex : Am peut remplacer C (tous deux = Tonique en C)." },
  { q:"En C majeur, Dm peut remplacer F car :", opts:["Ils ont la même fondamentale","Ils ont tous deux la fonction Sous-dominante — ils contiennent F mais pas B","Ils ont les mêmes notes","Ils sont à la quinte l'un de l'autre"], a:1, fb:"Dm (II) et F (IV) ont tous deux la fonction Sous-dominante : ils contiennent F (IVe degré) mais pas B. Ils peuvent donc se substituer l'un à l'autre sans changer la logique fonctionnelle." },
  { q:"En C majeur, Am peut remplacer C car :", opts:["Am est plus grave","Ils ont tous deux la fonction Tonique — ni F ni B","Am est plus stable","Ils ont la même fondamentale"], a:1, fb:"Am (VI) et C (I) ont tous deux la fonction Tonique. La cadence rompue (G7 → Am au lieu de G7 → C) exploite cette substitution pour créer un effet de surprise." },
  { q:"Pourquoi Em est-il qualifié d'accord 'bâtard' ?", opts:["Car il est diminué","Car il ne contient que B (la sensible) sans F — sa fonction est ambiguë et il est rarement utilisé seul","Car il est trop aigu","Car il n'appartient pas à C majeur"], a:1, fb:"Em (III) contient B (sensible de C) mais pas F (sous-dominante). Il ne rentre donc clairement dans aucune des trois fonctions. Les compositeurs ne sont pas d'accord sur son rôle." },
  { q:"La progression I–VI–II–V–I en C est :", opts:["T–D–SD–D–T","T–T–SD–D–T","SD–D–T–D–T","T–D–T–SD–T"], a:1, fb:"C(T) – Am(T) – Dm(SD) – G(D) – C(T) = T–T–SD–D–T. Les deux toniques s'enchaînent (I et VI), puis on suit le cycle SD–D–T." },
  { q:"Pourquoi enchaîner seulement des toniques est ennuyeux ?", opts:["Car les toniques sont dissonantes","Car la musique devient trop stable sans tension — il n'y a pas de mouvement","Car les toniques sont instables","Car on ne peut pas chanter dessus"], a:1, fb:"La musique fonctionne par contraste entre tension et résolution. Seulement des toniques = trop de stabilité, aucun élan. Seulement des dominantes = trop d'inconfort. L'équilibre est essentiel." },
  { q:"La 'couleur émotionnelle' d'une progression est déterminée par :", opts:["Son tempo","La résolution — l'accord de tonique et sa couleur majeure ou mineure","Le nombre d'accords","La hauteur des notes"], a:1, fb:"En harmonie fonctionnelle, l'émotion vient de la résolution — quelle couleur arrive à la tonique. La tension (Dominante) crée l'attente, la résolution (Tonique) donne la couleur émotionnelle." },
  { q:"Pourquoi G7 → Am est une cadence rompue ?", opts:["Car G7 est mal résolu","Car l'oreille attendait C (tonique principale) mais reçoit Am — surprise harmonique","Car Am n'est pas dans C majeur","Car G7 n'est pas la dominante"], a:1, fb:"La cadence rompue trompe les attentes : G7 (dominante) devrait résoudre sur C (tonique). En allant vers Am (tonique de substitution), on crée une surprise qui prolonge la phrase." },
  { q:"En G majeur, la dominante est :", opts:["D","D7","C","A7"], a:1, fb:"En G majeur, V = D. Avec la septième : D7 (Ré–Fa#–La–Do). D7 contient le triton de G majeur (C et F#) — il résout sur G." },
  { q:"La progression Dm–G7–C est analysée comme :", opts:["T–D–SD","SD–D–T","D–T–SD","T–SD–D"], a:1, fb:"Dm = Sous-dominante (II), G7 = Dominante (V), C = Tonique (I). SD–D–T est l'enchaînement fondamental — c'est la cadence du II–V–I." },
  { q:"Quelle est la différence fonctionnelle entre G et G7 en C majeur ?", opts:["Aucune","G7 est plus instable — il contient le triton complet (F), G ne le contient pas","G est plus instable","G7 est une tonique"], a:1, fb:"G (G–B–D) contient B (sensible) mais pas F. G7 (G–B–D–F) contient les deux notes du triton. G7 est nettement plus tendu et résout plus fortement vers C." },
  { q:"En D majeur, quelles notes forment le triton (IVe et VIIe degrés) ?", opts:["D et A","G et C#","F# et B","E et A"], a:1, fb:"En D majeur, IV = G et VII = C#. G–C# = 6 demi-tons = triton. La dominante de D majeur est A7, qui contient G et C#." },

  // ── Progressions (18) ──
  { q:"Une cadence parfaite est :", opts:["IV → I","V → I avec les deux accords à l'état fondamental","V → VI","II → V"], a:1, fb:"Cadence parfaite = V → I, tous deux à l'état fondamental. C'est la cadence la plus conclusive — G7 (fondamentale) → C (fondamentale) en C majeur." },
  { q:"Une cadence imparfaite diffère de la parfaite car :", opts:["Elle utilise IV au lieu de V","Au moins un des deux accords est renversé","Elle résout sur VI","Elle est en mode mineur"], a:1, fb:"Cadence imparfaite = V → I, mais au moins un accord est renversé. La résolution est perceptible mais moins ferme qu'avec les deux accords en état fondamental." },
  { q:"Une cadence plagale est :", opts:["V → I","IV → I — douce et solennelle","II → V","V → VI"], a:1, fb:"Cadence plagale = IV → I (F → C en C majeur). Sa couleur douce et solennelle lui vaut le surnom de cadence 'Amen' — très présente dans la musique sacrée." },
  { q:"Une demi-cadence se termine sur :", opts:["I","II","IV","V — la phrase reste suspendue"], a:3, fb:"La demi-cadence se termine sur la dominante (V) sans résoudre. C'est une suspension — comme une question restée sans réponse. L'oreille attend la suite." },
  { q:"La cadence rompue V → VI crée un effet de :", opts:["Résolution forte","Surprise — l'oreille attendait I mais reçoit VI","Instabilité maximale","Conclusion définitive"], a:1, fb:"La cadence rompue déjoue les attentes — V devrait résoudre sur I, mais va sur VI à la place. L'effet de surprise permet de prolonger la phrase sans conclure." },
  { q:"Le cycle des quintes descendantes est :", opts:["I–II–III–IV–V–VI–VII","I–IV–VII–III–VI–II–V–I — chaque accord descend d'une quinte","V–IV–III–II–I","I–V–IV–I"], a:1, fb:"I–IV–VII–III–VI–II–V–I : chaque accord descend d'une quinte (ou monte d'une quarte) par rapport au précédent. Ce mouvement de quinte est le plus naturel et le plus fort de l'harmonie." },
  { q:"La technique du 'pendule' consiste à :", opts:["Alterner entre dominante et tonique uniquement","Alterner entre deux fonctions (ex : T–SD–T–SD) avant de progresser","Répéter indéfiniment le même accord","Changer de tonalité à chaque mesure"], a:1, fb:"Le pendule alterne entre deux fonctions (souvent T–SD ou T–D) créant un effet d'oscillation. Ex : C–Am–F–C–Am–F… avant une cadence finale G7–C." },
  { q:"L'extension de fonction consiste à :", opts:["Répéter un accord deux fois","Enchaîner plusieurs accords de même fonction pour la prolonger","Changer la basse d'un accord","Renverser un accord"], a:1, fb:"On peut prolonger une fonction en enchaînant plusieurs accords de même rôle. Ex : Dm–F–G7–C = SD–SD–D–T. Les deux sous-dominantes donnent plus de poids à la préparation." },
  { q:"Dans le cycle des quintes en C majeur, quel accord suit Dm ?", opts:["C","G","Am","Bdim"], a:1, fb:"I–IV–VII–III–VI–II–V–I. Dm est le IIe degré. Le suivant dans le cycle = Ve degré = G. Dm → G : la fondamentale descend d'une quinte (Ré → Sol)." },
  { q:"La progression ii–V–I (2–5–1) est fondamentale car :", opts:["Car elle utilise trois accords","Car SD → D → T en tétrades, avec des notes communes optimisant la conduite de voix","Car elle est en mineur","Car elle utilise le triton deux fois"], a:1, fb:"II–V–I = SD–D–T en version enrichie (tétrades). Les notes communes entre Dm7 et G7 (D et F) permettent une conduite de voix minimale — c'est la cadence la plus efficace de la musique tonale." },
  { q:"En C majeur, la progression Dm7 → G7 utilise combien de notes communes ?", opts:["0","1","2","4"], a:2, fb:"Dm7 = D–F–A–C. G7 = G–B–D–F. Notes communes : D et F (2 notes). Ces deux notes peuvent rester en place, et seules A–C doivent bouger vers B–G." },
  { q:"Pour passer de II à V dans un II–V–I minimal, quelles voix doivent bouger ?", opts:["Toutes les voix","Seules la fondamentale et la tierce — les deux autres restent en place","Aucune voix ne bouge","Toutes sauf la basse"], a:1, fb:"De Dm7 (D–F–A–C) vers G7 (G–B–D–F) : D reste, F reste. Seules A descend vers G et C descend vers B. Conduite de voix minimale — deux mouvements conjoints descendants." },
  { q:"La progression C–Am–F–G est fonctionnellement :", opts:["T–D–SD–D","T–T–SD–D","SD–T–D–T","D–T–SD–T"], a:1, fb:"C = T, Am = T (substitution diatonique), F = SD, G = D. T–T–SD–D — c'est le cycle harmonique de nombreuses chansons pop modernes." },
  { q:"Dans la progression G7 → C, le triton résout par :", opts:["Deux mouvements ascendants","Deux mouvements descendants","Mouvement contraire : B monte vers C (+½), F descend vers E (-½)","Deux sauts de tierce"], a:2, fb:"B (tierce de G7, sensible) monte vers C (+½ ton). F (septième de G7) descend vers E (tierce de C) (-½ ton). Ce double mouvement contraire par demi-ton est la résolution du triton." },
  { q:"Pourquoi la cadence parfaite exige-t-elle les deux accords à l'état fondamental ?", opts:["Par convention arbitraire","Les fondamentales V et I à la basse créent le signal acoustique le plus fort d'une résolution — la basse 'confirme' le mouvement harmonique","Car les renversements sont interdits","Pour faciliter la lecture"], a:1, fb:"La basse est le fondement de l'harmonie. Quand Sol (V) et Do (I) sont à la basse, le changement de fondamentale est perçu comme une résolution ferme et définitive." },
  { q:"Quelle cadence termine traditionnellement un morceau classique ?", opts:["Demi-cadence","Cadence plagale","Cadence parfaite","Cadence rompue"], a:2, fb:"La cadence parfaite (V–I, état fondamental) est la conclusion traditionnelle. Elle apporte la résolution la plus ferme et conclusive — signal clair de fin de phrase ou de pièce." },
  { q:"La progression Am–Dm–G7–C est analysée comme :", opts:["D–T–SD–T","T–SD–D–T","SD–D–T–SD","T–D–SD–T"], a:1, fb:"Am = T (VI), Dm = SD (II), G7 = D (V), C = T (I). T–SD–D–T — c'est une variation du cycle fondamental. Am comme tonique initiale est fréquent dans les progressions en mineur relatif." },
  { q:"En G majeur, le II–V–I correspond à :", opts:["Am–D–G","Am7–D7–GMaj7","Em–D–G","Bm–E7–A"], a:1, fb:"En G majeur : II = Am7, V = D7, I = GMaj7. La cadence Am7–D7–GMaj7 est le II–V–I de G majeur." },

  // ── Conduite de voix (20) ──
  { q:"Les quatre voix du modèle SATB sont :", opts:["Soprano, Ténor, Alto, Baryton","Soprano, Alto, Ténor, Basse","Soprano, Mezzo-soprano, Ténor, Basse","Soprano, Alto, Baryton, Basse"], a:1, fb:"SATB = Soprano (voix féminine aiguë), Alto (voix féminine grave), Ténor (voix masculine aiguë), Basse (voix masculine grave). Chaque voix a sa tessiture propre." },
  { q:"La tessiture du soprano est :", opts:["G3 à C5","C4 à G5","C3 à G4","E2 à C4"], a:1, fb:"Soprano : C4 (Do central) à G5. Alto : G3 à C5. Ténor : C3 à G4. Basse : E2 à C4. Ces tessitures garantissent le confort vocal et l'équilibre acoustique." },
  { q:"Les quintes parallèles sont interdites car :", opts:["Elles sont trop dissonantes","Elles annulent l'indépendance des voix — deux voix en quinte parallèle sonnent comme une seule","Elles créent des quintes augmentées","Elles sont impossibles à chanter"], a:1, fb:"Les quintes parallèles donnent l'illusion que deux voix ne font qu'une — elles 'collent' ensemble et perdent leur indépendance mélodique. L'écriture polyphonique exige des voix indépendantes." },
  { q:"Le mouvement contraire entre deux voix est :", opts:["Les deux voix montent ensemble","Les deux voix descendent ensemble","Une voix monte, l'autre descend — le mouvement le plus équilibré","Une voix reste immobile"], a:2, fb:"Le mouvement contraire est le plus équilibré et le plus favorable à l'indépendance des voix. Il évite naturellement les octaves et quintes parallèles et donne de la vitalité à l'écriture." },
  { q:"Le mouvement oblique est :", opts:["Les deux voix qui montent","Une voix qui reste immobile pendant que l'autre se déplace","Les deux voix qui descendent","Un saut de quinte dans les deux voix"], a:1, fb:"Le mouvement oblique : une voix tient une note (ou la répète) pendant que l'autre se déplace. Très fréquent lors des résolutions, notamment pour la sensible montante." },
  { q:"Pourquoi favorise-t-on les mouvements conjoints (secondes) ?", opts:["Car ils sont plus faciles à écrire","Car ils sont plus naturels vocalement et réduisent les risques de parallèles","Car ils créent plus de tension","Car ils sont obligatoires"], a:1, fb:"Les mouvements conjoints (par secondes) sont les plus naturels pour les voix — chantables et fluides. Ils minimisent les sauts difficiles et réduisent les risques d'octaves ou quintes parallèles." },
  { q:"La règle du doublement dans un accord à l'état fondamental est :", opts:["Doubler la tierce","Doubler la quinte","Doubler la fondamentale (sauf au VIIe degré)","Doubler la septième"], a:2, fb:"On double la fondamentale par défaut — c'est la note la plus stable. Exception : au VIIe degré (Bdim), on double la tierce (D) car B est la sensible — on ne double jamais la sensible." },
  { q:"Pourquoi ne double-t-on jamais la sensible ?", opts:["Car elle est trop aiguë","Car la doubler crée deux résolutions obligatoires vers la même note — problème d'octaves parallèles à la résolution","Car elle est trop grave","Car elle est instable et difficile à intonner"], a:1, fb:"Doubler la sensible créerait deux B qui doivent tous deux monter vers C — produisant des octaves parallèles à la résolution. C'est une faute grave en écriture à 4 voix." },
  { q:"L'espacement maximal autorisé entre soprano et alto est :", opts:["Une tierce","Une quinte","Une octave","Deux octaves"], a:2, fb:"Entre soprano–alto et entre alto–ténor : maximum une octave. Entre ténor–basse : jusqu'à deux octaves tolérées. Ces proportions maintiennent l'équilibre du spectre sonore." },
  { q:"Un croisement de voix se produit quand :", opts:["Deux voix jouent la même note","L'alto chante plus haut que le soprano (ou le ténor plus haut que l'alto, etc.)","Deux voix font un saut de quinte","La basse monte dans le registre du ténor"], a:1, fb:"Le croisement de voix : une voix inférieure dépasse une voix supérieure. Ex : l'alto (G3–C5) qui monte plus haut que le soprano actuel. Interdit en écriture stricte." },
  { q:"Un chevauchement de voix se produit quand :", opts:["Deux voix jouent la même note","Une voix dépasse la note que la voix adjacente vient de quitter","Deux voix montent ensemble","La basse est trop grave"], a:1, fb:"Le chevauchement : une voix 'coiffe' la note de la voix adjacente. Ex : l'alto monte plus haut que la note que le soprano venait de quitter. Interdit en écriture stricte." },
  { q:"Lors du passage II → V dans un II–V–I, les voix F et C (de Dm7) :", opts:["Montent vers G et D","Descendent : F reste en F (7e de G7) et C descend vers B (3e de G7)","Sautent d'une tierce","Restent immobiles"], a:1, fb:"F reste en F (la septième de G7). C descend vers B (la tierce de G7). C'est le mouvement conjoint minimal : A (5e de Dm7) descend vers G (fondamentale de G7). Deux mouvements seulement." },
  { q:"La règle 'la septième descend' signifie :", opts:["La septième de tout accord descend","La septième de dominante (F dans G7) doit descendre par degré conjoint (F→E) lors de la résolution sur la tonique","La septième d'un accord mineur descend","La septième d'un accord Maj7 descend"], a:1, fb:"La septième de dominante (F dans G7) descend conjointement vers la tierce de l'accord de résolution (E dans C). Règle absolue en écriture harmonique." },
  { q:"Dans l'écriture à 4 voix, les 'octaves directes' entre soprano et basse sont :", opts:["Autorisées dans tous les cas","Interdites en mouvement direct — tolérées si le soprano avance par degrés conjoints","Toujours obligatoires","Autorisées uniquement en mineur"], a:1, fb:"Les octaves directes (soprano et basse qui bougent dans la même direction pour former une octave) sont interdites en général. Tolerance unique : si le soprano avance par demi-ton ou ton." },
  { q:"Pourquoi les mouvements disjoints (grands intervalles) sont-ils à éviter dans les voix intérieures ?", opts:["Car ils créent des consonances","Car ils créent des risques de parallèles, sont difficiles à chanter et rompent la fluidité mélodique","Car ils sont trop courts","Car ils créent trop de dissonances"], a:1, fb:"Les sauts importants dans les voix intérieures (alto, ténor) rompent la fluidité, sont difficiles à intonner et augmentent les risques d'erreurs (parallèles, chevauchements). On réserve les grands intervalles à la basse." },
  { q:"La seconde augmentée est :", opts:["Un intervalle diatonique normal","Un intervalle à éviter dans les voix — il est difficile à chanter et sonne 'oriental'","Un intervalle de base en C majeur","Un saut de tierce"], a:1, fb:"La seconde augmentée (1,5 ton, ex : Ab–B) est difficile à intonner et à chanter. Elle apparaît naturellement dans la gamme mineure harmonique et est à éviter dans les voix mélodiques." },
  { q:"Qu'est-ce qu'une voix 'chantable' ?", opts:["Une voix très rapide","Une voix qui progresse par mouvements conjoints, reste dans la tessiture et n'a pas de saut difficile","Une voix avec beaucoup de notes","Une voix qui double le soprano"], a:1, fb:"Une voix chantable : mouvements conjoints préférés, tessiture respectée, sauts limités, résolutions logiques. L'écriture SATB doit être vocalement naturelle pour chacune des 4 voix." },
  { q:"Le principe 'minimum de mouvement = meilleure écriture' signifie :", opts:["Ne jamais bouger les voix","Utiliser les notes communes et les mouvements conjoints — ne déplacer une voix que si c'est musicalement nécessaire","Écrire le moins de notes possible","Toutes les voix restent immobiles"], a:1, fb:"Une bonne conduite de voix économise les mouvements : on conserve les notes communes entre accords et on avance par degrés conjoints. Chaque déplacement doit être justifié musicalement." },
  { q:"Dans V → I en C, quelle voix fait le plus petit déplacement ?", opts:["La basse (G → C, quarte)","L'alto (B → C, demi-ton, ou D → C, ton)","Le ténor (D → E, ton)","Toutes bougent de la même distance"], a:1, fb:"La sensible (B) monte d'un demi-ton vers C — c'est le plus petit déplacement possible (½ ton). C'est pourquoi la sensible est toujours au soprano ou à l'alto pour guider la résolution." },
  { q:"Pourquoi la basse a-t-elle plus de liberté que les voix supérieures pour les grands intervalles ?", opts:["Car la basse est toujours grave","Car la basse a un rôle structurel — elle doit parfois sauter pour poser les fondamentales des accords (G → C = quarte) tout en restant dans sa tessiture","Car elle est toujours à l'état fondamental","Car la basse n'a pas de règles"], a:1, fb:"La basse pose les fondamentales des accords — parfois très éloignées (G → C = quarte). Ce rôle structurel justifie les sauts plus grands. De plus, sa tessiture grave est naturellement plus mobile." },

  // ── Synthèse et application (18) ──
  { q:"La progression Dm7–G7–CMaj7 est :", opts:["T–D–SD","SD–D–T","D–T–SD","SD–T–D"], a:1, fb:"Dm7 = Sous-dominante (II), G7 = Dominante (V), CMaj7 = Tonique (I). SD–D–T = le II–V–I jazz — l'enchaînement fondamental en version enrichie (tétrades)." },
  { q:"En A mineur, le triton fonctionnel est formé par :", opts:["A et E","D et G#","G et D","B et F"], a:1, fb:"En A mineur harmonique, IV = D et VII = G# (sensible élevée). Le triton fonctionnel de A mineur est D–G# (6 demi-tons). La dominante est E7 qui contient D et G#." },
  { q:"La cadence plagale F → C est souvent qualifiée de cadence :", opts:["Parfaite","Rompue","Amen — douce et solennelle, caractéristique de la musique sacrée","Imparfaite"], a:2, fb:"La cadence plagale (IV → I = F → C) a une couleur douce et solennelle. Son usage constant dans les 'Amen' de la musique liturgique lui a valu ce surnom." },
  { q:"Dans la progression C–Am–F–G–C, Am joue le rôle de :", opts:["Dominante","Sous-dominante","Tonique de substitution (VI remplace I)","Accord de passage"], a:2, fb:"Am (VI) est la tonique de substitution — il remplace C comme premier accord du cycle. La progression devient T(alt)–SD–D–T, avec Am comme tonique alternative." },
  { q:"Pourquoi I6/4 (C/G, 2e renversement de I) est-il instable ?", opts:["Car il est en position fondamentale","Car la quinte (G) à la basse crée un son similaire à V — l'oreille perçoit une dominante 'déguisée'","Car il est toujours suivi de IV","Car il contient le triton"], a:1, fb:"C/G (Sol à la basse) sonne comme une dominante suspendue — G est la fondamentale de V. Le 6/4 cadentiel crée une forte attente de la vraie dominante G7." },
  { q:"L'accord I6 (C/E, 1er renversement) est utilisé pour :", opts:["Remplacer la dominante","Fluidifier la ligne de basse — E à la basse permet C → E → F (montée conjointe) au lieu de C → C → F","Renforcer la tension","Toujours avant une cadence rompue"], a:1, fb:"C/E (Mi à la basse) est le premier renversement. La basse joue E — ce qui permet des lignes de basse conjointes et mélodiques. Ex : basse C–E–F–G au lieu de C–C–F–G." },
  { q:"La progression Am–F–C–G est fonctionnellement :", opts:["T–SD–T–D","D–T–SD–T","SD–T–D–T","T–T–SD–D"], a:0, fb:"Am = T (VI), F = SD (IV), C = T (I), G = D (V). T–SD–T–D. Cette progression est en fait T–T–SD–D si on analyse Am comme substitut de I : T(Am)–SD(F)–T(C)–D(G)." },
  { q:"Dans V7 → I, si on supprime la quinte de I pour éviter les octaves, on garde :", opts:["Fondamentale et quinte","Fondamentale, tierce et fondamentale doublée (3 fondamentales)","Uniquement la tierce","Fondamentale et septième"], a:1, fb:"Dans la cadence parfaite V7 → I, on supprime souvent la quinte de I pour faciliter la conduite de voix. L'accord de tonique devient : fondamentale (x2, doublée), tierce. La quinte est supprimée ('sucrée')." },
  { q:"Pourquoi la progression SD–D–T est-elle universelle en musique tonale ?", opts:["Par convention historique arbitraire","Car elle combine les trois états de l'harmonie : préparation–tension maximale–résolution — un cycle naturel tension/résolution","Car elle utilise exactement 3 accords","Car elle est en majeur"], a:1, fb:"SD–D–T reproduit un cycle naturel : préparation de la tension (SD), sommet de la tension (D), résolution et repos (T). Ce cycle structure le discours musical depuis 400 ans." },
  { q:"En A mineur harmonique, la dominante est :", opts:["Em","E","E7","Am"], a:2, fb:"En A mineur harmonique, le VIIe degré est élevé (G#). L'accord de dominante est E7 (E–G#–B–D). G# est la sensible de A mineur — elle monte vers A à la résolution." },
  { q:"La notation 'II–V–I' en jazz correspond à :", opts:["Trois accords au hasard","Sous-dominante–Dominante–Tonique en tétrades — la cadence cadentielle fondamentale du jazz","Trois accords majeurs","Trois accords de blues"], a:1, fb:"II–V–I = Dm7–G7–CMaj7 en C. Sous-dominante (m7) → Dominante (7) → Tonique (Maj7). La cadence la plus jouée du jazz — des milliers de standards en sont basés." },
  { q:"Pour passer de G7 vers C avec une conduite de voix optimale :", opts:["Toutes les voix font un grand saut","La sensible B monte vers C, la 7e F descend vers E, G reste ou descend vers G, D reste ou descend vers C","Toutes les voix restent immobiles","La basse saute d'une octave"], a:1, fb:"B → C (+½, sensible), F → E (-½, 7e de dominante), G reste ou descend (fondamentale → fondamentale ou quinte), D → C ou E (quinte → fondamentale ou tierce). Mouvements conjoints économiques." },
  { q:"Le modèle chorale de Bach est la référence pour la conduite de voix car :", opts:["Bach a inventé toutes les règles","Ses chorals appliquent systématiquement et élégamment toutes les règles de l'écriture à 4 voix — ils sont la synthèse parfaite de la pratique harmonique baroque","Ses chorals sont très simples","Bach utilisait toujours le même accord"], a:1, fb:"Les chorals de Bach (harmonisations de mélodies luthériennes) sont le corpus de référence de l'écriture à 4 voix. Chaque voix est mélodiquement logique tout en formant des harmonies correctes." },
  { q:"La fausse relation de triton se produit quand :", opts:["On joue le triton dans la même voix","Une voix joue F et une autre voix B à deux accords successifs (ou inversement), créant une relation chromatique instable","On évite le triton","On joue deux tritons successifs"], a:1, fb:"La fausse relation de triton : une voix joue F et une autre joue B (ou vice versa) dans deux accords consécutifs, mais dans des voix différentes. Cela crée une dissonance indirecte perturbante." },
  { q:"Que signifie 'mener les voix' (voice leading) ?", opts:["Choisir les accords","Guider chaque voix d'un accord à l'autre de manière fluide, logique et vocalement naturelle","Écrire la mélodie","Choisir la tonalité"], a:1, fb:"La conduite de voix (voice leading) est l'art de faire évoluer chaque ligne mélodique (S, A, T, B) d'un accord à l'autre de manière fluide, chantable et logique." },
  { q:"Dans l'écriture à 4 voix, les 3 types de mouvements sont :", opts:["Ascendant, descendant, chromatique","Direct/parallèle, contraire, oblique","Conjoint, disjoint, sauté","Lent, rapide, immobile"], a:1, fb:"Les 3 types de mouvement entre deux voix : direct/parallèle (même direction), contraire (directions opposées), oblique (une voix immobile, l'autre bouge). Le contraire est le plus équilibré." },
  { q:"Quel accord de C majeur peut initier une progression SD–D–T avec Am comme tonique finale (cadence rompue) ?", opts:["C direct","Dm → G7 → Am (cadence rompue)","F → G7 → Am (cadence rompue)","Les deux b et c sont corrects"], a:3, fb:"La cadence rompue G7 → Am peut être précédée de Dm ou de F (les deux sous-dominantes de C). Dm → G7 → Am et F → G7 → Am sont tous deux des progressions SD–D–T(rompue) valides." },
  { q:"Pourquoi dit-on que la polyphonie est 'contrôlée' dans l'écriture harmonique ?", opts:["Car il y a peu de notes","Car chaque voix est indépendante mélodiquement mais s'inscrit dans des accords harmoniques définis — équilibre horizontal et vertical","Car on ne peut pas improviser","Car les voix se suivent toujours"], a:1, fb:"L'écriture harmonique est une 'polyphonie contrôlée' : chaque voix a sa propre logique mélodique (horizontal) mais ensemble elles forment des accords corrects (vertical). L'équilibre des deux dimensions est l'art de l'harmonie." },
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

export default function Cours3() {
  const i18n = useCoursI18n("cours3");
  const [sec,    setSec]    = useState("triton");
  const [selDeg, setSelDeg] = useState<number|null>(null);
  const [selReg, setSelReg] = useState<number|null>(null);
  const [selProg,setSelProg]= useState<string|null>(null);

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
      {/* Piano caché */}
      <div style={{ position:"absolute", opacity:0, pointerEvents:"none", height:0, overflow:"hidden" }}>
        <PianoPlayer ref={ref} octaves={3} startOctave={2} showLabels={false} />
      </div>

      {/* Header */}
      <div style={S.hdr}>
        <span style={S.badge}>{i18n.badge}</span>
        <h1 style={S.h1}>{i18n.title}</h1>
        <p style={S.sub}>{i18n.subtitle}</p>
      </div>

      {/* Nav */}
      <nav style={S.nav}>
        {SECTIONS_IDS.map(id => (
          <button key={id} style={S.pill(sec===id)} onClick={() => setSec(id)}>
            {i18n.sectionLabel(id)}
          </button>
        ))}
      </nav>

      {/* ══ TRITON ══ */}
      {sec === "triton" && (
        <div>
          <h2 style={S.h2}>Le triton — moteur de la tension harmonique</h2>
          <p style={S.p}>Le <strong>triton</strong> est l'intervalle de 3 tons (6 demi-tons) qui se forme naturellement entre les IVe et VIIe degrés d'une gamme majeure. En C majeur : <strong>F et B</strong> (Fa et Si). Son instabilité acoustique est le moteur de toute la tension harmonique tonale.</p>

          <div style={S.info}>
            <strong>En C majeur :</strong> le triton se forme entre F (IVe degré, sous-dominante) et B (VIIe degré, sensible). Ces deux notes se trouvent dans G7 — c'est pourquoi G7 est la dominante parfaite.
          </div>

          <div style={{ background:"#fafafa", border:"0.5px solid #e5e5e5", borderRadius:10, padding:"14px 16px", marginBottom:16 }}>
            <div style={{ fontSize:12, color:"#999", marginBottom:8 }}>Écouter le triton F–B en C majeur</div>
            <div style={{ display:"flex", gap:10, flexWrap:"wrap" as const }}>
              <button onClick={() => playChord(ref as React.RefObject<PianoPlayerRef>, CHORDS.tritone, 2.5)}
                style={{ fontSize:12, padding:"5px 14px", border:"0.5px solid #BA7517", borderRadius:20, cursor:"pointer", background:"transparent", color:"#BA7517" }}>
                ▶ F–B (le triton)
              </button>
              <button onClick={() => playChord(ref as React.RefObject<PianoPlayerRef>, CHORDS.G7, 2.5)}
                style={{ fontSize:12, padding:"5px 14px", border:"0.5px solid #BA7517", borderRadius:20, cursor:"pointer", background:"transparent", color:"#BA7517" }}>
                ▶ G7 (contient F et B)
              </button>
              <button onClick={() => playProg(ref as React.RefObject<PianoPlayerRef>, ["G7","C"], 1200)}
                style={{ fontSize:12, padding:"5px 14px", border:"0.5px solid #0F6E56", borderRadius:20, cursor:"pointer", background:"transparent", color:"#0F6E56" }}>
                ▶ G7 → C (résolution)
              </button>
            </div>
            <div style={{ fontSize:12, color:"#888", marginTop:10, lineHeight:1.6 }}>
              Dans G7 → C : B monte vers C (+½ ton, sensible→tonique) et F descend vers E (-½ ton, septième→tierce). Ce double mouvement contraire est la résolution du triton.
            </div>
          </div>

          <h3 style={{ fontSize:14, fontWeight:500, margin:"20px 0 8px", color:"#111" }}>Pourquoi le triton crée-t-il de la tension ?</h3>
          <p style={S.p}>Le triton divise l'octave en deux parties égales (6+6 demi-tons). Cette symétrie parfaite le prive de direction naturelle — il ne sait pas où aller. L'oreille perçoit cette ambiguïté comme une tension qui doit se résoudre.</p>

          <div style={S.warn}>
            <strong>Le triton en C majeur est la clé fonctionnelle :</strong> la présence des deux notes F et B dans un accord détermine sa fonction. C'est lui qui organise toute la tension harmonique.
          </div>

          <h3 style={{ fontSize:14, fontWeight:500, margin:"20px 0 8px", color:"#111" }}>Classification des accords par rapport au triton</h3>
          <div style={{ overflowX:"auto" }}>
            <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
              <thead>
                <tr style={{ borderBottom:"0.5px solid #e5e5e5" }}>
                  {["Fonction","Notes du triton","Caractère","Exemples en C"].map(h => (
                    <th key={h} style={{ textAlign:"left", padding:"6px 10px", fontWeight:500, color:"#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { fn:"Tonique (T)",      notes:"Ni F ni B",   car:"Stable, repos",   ex:"C, Am" },
                  { fn:"Sous-dom. (SD)",   notes:"F seul",      car:"Prépare",         ex:"Dm, F" },
                  { fn:"Dominante (D)",    notes:"F et B",      car:"Tension maximale",ex:"G7, Bdim" },
                ].map((row, i) => (
                  <tr key={row.fn} style={{ borderBottom:"0.5px solid #f0f0f0", background:i%2===0?"#fff":"#fafafa" }}>
                    <td style={{ padding:"7px 10px", fontWeight:500 }}>{row.fn}</td>
                    <td style={{ padding:"7px 10px", fontFamily:"monospace", color:"#BA7517" }}>{row.notes}</td>
                    <td style={{ padding:"7px 10px", color:"#555" }}>{row.car}</td>
                    <td style={{ padding:"7px 10px", fontFamily:"monospace" }}>{row.ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ══ FONCTIONS ══ */}
      {sec === "fonctions" && (
        <div>
          <h2 style={S.h2}>Les fonctions tonales</h2>
          <p style={S.p}>Chaque accord d'une gamme majeure remplit un <strong>rôle fonctionnel</strong> déterminé par sa relation au triton. Ce rôle définit son comportement dans la progression — s'il crée du repos, prépare ou génère de la tension.</p>

          <div style={S.tip}>
            <strong>Mémo rapide :</strong> F et B ? → Dominante. F seul ? → Sous-dominante. Ni l'un ni l'autre ? → Tonique.
          </div>

          <p style={{ fontSize:13, color:"#888", marginBottom:12, marginTop:16 }}>
            Cliquez sur un degré pour l'entendre et voir son analyse.
          </p>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:5, marginBottom:12 }}>
            {ACCORDS_C.map((d, i) => (
              <div key={d.deg}
                onClick={() => { setSelDeg(selDeg===i?null:i); playChord(ref as React.RefObject<PianoPlayerRef>, d.keys, 2); }}
                style={{ border:`0.5px solid ${selDeg===i?d.fnColor:"#e5e5e5"}`, borderRadius:8, padding:"8px 4px", textAlign:"center", cursor:"pointer", background:selDeg===i?d.fnBg:"#fff", transition:"all .15s" }}>
                <div style={{ fontSize:10, color:"#999", fontWeight:500 }}>{d.deg}</div>
                <div style={{ fontSize:13, fontWeight:600, color:"#111", margin:"2px 0" }}>{d.chord}</div>
                <div style={{ fontSize:9, padding:"1px 4px", borderRadius:8, display:"inline-block", background:d.fnBg, color:d.fnColor, fontWeight:500, marginTop:2 }}>{d.fn}</div>
              </div>
            ))}
          </div>

          {selDeg !== null && (
            <div style={{ border:`0.5px solid ${ACCORDS_C[selDeg].fnColor}`, borderRadius:10, padding:"12px 16px", background:ACCORDS_C[selDeg].fnBg, marginBottom:16 }}>
              <div style={{ fontSize:15, fontWeight:500, color:ACCORDS_C[selDeg].fnColor, marginBottom:4 }}>
                {ACCORDS_C[selDeg].deg} — {ACCORDS_C[selDeg].chord} <span style={{ fontSize:12, fontWeight:400 }}>({ACCORDS_C[selDeg].fn})</span>
              </div>
              <p style={{ fontSize:13, color:"#444", lineHeight:1.6, margin:0 }}>{ACCORDS_C[selDeg].note}</p>
            </div>
          )}

          <div style={S.info}>
            <strong>Substitutions diatoniques :</strong> deux accords de même fonction peuvent se remplacer. Am ↔ C (deux toniques), Dm ↔ F (deux sous-dominantes). Cette flexibilité permet des variations harmoniques sans changer la logique fonctionnelle.
          </div>

          <div style={S.warn}>
            <strong>Em (IIIe degré) :</strong> accord 'bâtard' — il contient B (sensible) mais pas F. Sa fonction est ambiguë. Les compositeurs ne s'accordent pas sur son rôle, et il est rarement utilisé seul dans une progression simple.
          </div>
        </div>
      )}

      {/* ══ PROGRESSIONS ══ */}
      {sec === "progressions" && (
        <div>
          <h2 style={S.h2}>Progressions et cadences</h2>
          <p style={S.p}>L'enchaînement <strong>SD → D → T</strong> est la colonne vertébrale de l'harmonie tonale. Toutes les progressions en sont des variantes ou des extensions. Les <strong>cadences</strong> ponctuent le discours musical comme des signes de ponctuation.</p>

          <p style={{ fontSize:13, color:"#888", marginBottom:12 }}>Cliquez sur une progression pour l'écouter et voir son analyse.</p>

          {PROGS.map(prog => (
            <div key={prog.id}
              onClick={() => { setSelProg(selProg===prog.id?null:prog.id); }}
              style={{ border:`0.5px solid ${selProg===prog.id?prog.color:"#e5e5e5"}`, borderRadius:10, marginBottom:8, overflow:"hidden", cursor:"pointer", transition:"all .15s", background:selProg===prog.id?"#fafafa":"#fff" }}>
              <div style={{ display:"flex", alignItems:"center", gap:12, padding:"12px 16px" }}>
                <span style={{ fontSize:14, fontWeight:600, color:prog.color, fontFamily:"monospace", minWidth:120 }}>{prog.label}</span>
                <span style={{ fontSize:12, color:"#666", flex:1 }}>{prog.desc.slice(0,60)}…</span>
              </div>
              {selProg === prog.id && (
                <div style={{ padding:"0 16px 14px", borderTop:`0.5px solid ${prog.color}20` }}>
                  <p style={{ fontSize:13, color:"#444", lineHeight:1.65, margin:"8px 0 10px" }}>{prog.desc}</p>
                  <div style={{ fontFamily:"monospace", fontSize:13, color:prog.color, marginBottom:10, letterSpacing:1 }}>
                    {prog.chords.join(" → ")}
                  </div>
                  <button
                    onClick={e => { e.stopPropagation(); playProg(ref as React.RefObject<PianoPlayerRef>, prog.chords, 1000); }}
                    style={{ fontSize:12, padding:"5px 14px", border:`0.5px solid ${prog.color}`, borderRadius:20, cursor:"pointer", background:"transparent", color:prog.color }}>
                    ▶ Écouter
                  </button>
                </div>
              )}
            </div>
          ))}

          <h3 style={{ fontSize:14, fontWeight:500, margin:"20px 0 8px", color:"#111" }}>Les cadences</h3>
          <div style={{ overflowX:"auto" }}>
            <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
              <thead>
                <tr style={{ borderBottom:"0.5px solid #e5e5e5" }}>
                  {["Cadence","Structure","Effet"].map(h => (
                    <th key={h} style={{ textAlign:"left", padding:"6px 10px", fontWeight:500, color:"#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { c:"Parfaite",    s:"V → I (état fond.)",  e:"Conclusive, finale" },
                  { c:"Imparfaite",  s:"V → I (renversé)",    e:"Conclusive mais moins ferme" },
                  { c:"Plagale",     s:"IV → I",              e:"Douce, solennelle (Amen)" },
                  { c:"Rompue",      s:"V → VI",              e:"Surprise, phrase prolongée" },
                  { c:"Demi-cadence",s:"… → V",               e:"Suspension, question ouverte" },
                ].map((row, i) => (
                  <tr key={row.c} style={{ borderBottom:"0.5px solid #f0f0f0", background:i%2===0?"#fff":"#fafafa" }}>
                    <td style={{ padding:"7px 10px", fontWeight:500 }}>{row.c}</td>
                    <td style={{ padding:"7px 10px", fontFamily:"monospace", color:"#BA7517" }}>{row.s}</td>
                    <td style={{ padding:"7px 10px", color:"#555" }}>{row.e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ══ CONDUITE DE VOIX ══ */}
      {sec === "voix" && (
        <div>
          <h2 style={S.h2}>La conduite de voix (SATB)</h2>
          <p style={S.p}>L'harmonie à 4 voix (Soprano, Alto, Ténor, Basse) n'est pas un empilement d'accords — c'est une <strong>polyphonie contrôlée</strong> où chaque voix a sa propre logique mélodique. La conduite de voix est l'art de faire évoluer ces 4 lignes simultanément de manière fluide et logique.</p>

          <p style={{ fontSize:13, color:"#888", marginBottom:12 }}>Cliquez sur une règle pour en voir le détail.</p>

          {REGLES_VOIX.map((r, i) => (
            <div key={r.titre} onClick={() => setSelReg(selReg===i?null:i)}
              style={{ border:`0.5px solid ${selReg===i?r.couleur:"#e5e5e5"}`, borderRadius:10, marginBottom:8, overflow:"hidden", cursor:"pointer", background:selReg===i?r.bg:"#fff", transition:"all .15s" }}>
              <div style={{ display:"flex", alignItems:"center", gap:12, padding:"12px 16px" }}>
                <span style={{ fontSize:20, minWidth:28 }}>{r.icon}</span>
                <span style={{ fontSize:13, fontWeight:500, color:selReg===i?r.couleur:"#111", flex:1 }}>{r.titre}</span>
                <span style={{ fontSize:11, color:r.couleur, background:r.bg, border:`0.5px solid ${r.couleur}`, padding:"1px 8px", borderRadius:8 }}>
                  {["Interdit","Obligatoire","Obligatoire","Règle","Préféré","Limite"][i]}
                </span>
              </div>
              {selReg === i && (
                <div style={{ padding:"0 16px 14px", borderTop:`0.5px solid ${r.couleur}20` }}>
                  <p style={{ fontSize:13, color:"#444", lineHeight:1.65, margin:"8px 0 0" }}>{r.desc}</p>
                </div>
              )}
            </div>
          ))}

          <div style={S.tip}>
            <strong>Principe clé :</strong> une bonne conduite de voix ne repose pas sur la multiplication des mouvements, mais sur leur nécessité. On conserve les notes communes, on avance par degrés conjoints, et on ne bouge que lorsque c'est musicalement nécessaire.
          </div>

          <h3 style={{ fontSize:14, fontWeight:500, margin:"20px 0 8px", color:"#111" }}>Le modèle minimaliste : II – V – I</h3>
          <div style={{ background:"#fafafa", border:"0.5px solid #e5e5e5", borderRadius:10, padding:"14px 16px", marginBottom:12 }}>
            <div style={{ overflowX:"auto" }}>
              <table style={{ borderCollapse:"collapse", fontSize:12, minWidth:400 }}>
                <thead>
                  <tr style={{ borderBottom:"0.5px solid #e5e5e5" }}>
                    {["Voix","Dm7 (II)","G7 (V)","CMaj7 (I)","Mouvement"].map(h => (
                      <th key={h} style={{ textAlign:"left", padding:"5px 10px", fontWeight:500, color:"#666" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { v:"Soprano", dm7:"D5", g7:"D5", c:"E5", m:"D reste, puis monte vers E (+ton)" },
                    { v:"Alto",    dm7:"F4", g7:"F4", c:"E4", m:"F reste (7e de G7), descend vers E (-½)" },
                    { v:"Ténor",   dm7:"A3", g7:"G3", c:"G3", m:"A descend vers G (-ton), reste" },
                    { v:"Basse",   dm7:"D3", g7:"G3", c:"C3", m:"D monte vers G (+4te), descend vers C (-5te)" },
                  ].map((row, i) => (
                    <tr key={row.v} style={{ borderBottom:"0.5px solid #f0f0f0", background:i%2===0?"#fff":"#fafafa" }}>
                      <td style={{ padding:"6px 10px", fontWeight:500, color:"#555" }}>{row.v}</td>
                      <td style={{ padding:"6px 10px", fontFamily:"monospace", color:"#534AB7" }}>{row.dm7}</td>
                      <td style={{ padding:"6px 10px", fontFamily:"monospace", color:"#BA7517" }}>{row.g7}</td>
                      <td style={{ padding:"6px 10px", fontFamily:"monospace", color:"#0F6E56" }}>{row.c}</td>
                      <td style={{ padding:"6px 10px", fontSize:11, color:"#888" }}>{row.m}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button onClick={() => playProg(ref as React.RefObject<PianoPlayerRef>, ["Dm7","G7","CMaj7"], 1000)}
              style={{ marginTop:10, fontSize:12, padding:"5px 14px", border:"0.5px solid #534AB7", borderRadius:20, cursor:"pointer", background:"transparent", color:"#534AB7" }}>
              ▶ Écouter Dm7 → G7 → CMaj7
            </button>
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
              <div style={{ fontSize:20, fontWeight:500, color:"#111", marginBottom:4 }}>
                {i18n.t("score")} : {scr} / {QUIZ_COUNT}
              </div>
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

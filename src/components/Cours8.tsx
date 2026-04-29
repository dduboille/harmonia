"use client";

/**
 * Cours8.tsx
 * Harmonia · Niveau 1 · Cours 8 — Modulation par accord pivot
 * TODO: i18n — passe dédiée
 * Convention : affichage anglais, dotKeys PianoPlayer français
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import { SATB } from "@/lib/satb-voicings";

interface Section { id: string; label: string; }

// ─── Audio ────────────────────────────────────────────────────────────────────

const CHORDS = SATB;{

function playChord(ref: React.RefObject<PianoPlayerRef>, keys: string[], duration = 1.8) {
  keys.forEach((key, i) => {
    const [note, octStr] = key.split(":");
    setTimeout(() => ref.current?.playNote(note, parseInt(octStr), { duration }), i * 40);
  });
}

function playProg(ref: React.RefObject<PianoPlayerRef>, names: string[], gap = 1000) {
  names.forEach((name, i) =>
    setTimeout(() => playChord(ref, CHORDS[name] ?? [], 1.5), i * gap)
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SECTIONS_IDS = ["logique","pivot","outils","exemples","quiz"] as const;

// Accords communs entre C et G majeur
const ACCORDS_COMMUNS_CG = [
  { accord:"C",  enC:"I (Tonique)",        enG:"IV (Sous-dominante)", pivot:false, note:"Trop marqué comme tonique de C — à éviter comme pivot." },
  { accord:"Em", enC:"III (Tonique)",      enG:"VI (Tonique)",        pivot:true,  note:"Bon pivot : tonique dans les deux. Discret, non cadentiel." },
  { accord:"Am", enC:"VI (Tonique)",       enG:"II (Sous-dominante)", pivot:true,  note:"Excellent pivot : prépare naturellement D7 en Sol majeur." },
  { accord:"G",  enC:"V (Dominante)",      enG:"I (Tonique)",         pivot:false, note:"Fonctionnerait mais G est la tonique d'arrivée — trop affirmé." },
];

// Exemples de modulations par accord pivot
const EXEMPLES_MOD = [
  {
    id: "cg",
    de: "C majeur", vers: "G majeur",
    pivot: "Am",
    roles: "VI en C / II en G",
    prog: ["C","F","G7","C","Am","D7","G"],
    progKeys: ["C","F","G7","C","Am_pivot","D7","G"],
    desc: "Am est VI en C (tonique secondaire) et II en G (sous-dominante). Après Am, D7 est la dominante de G — la modulation est confirmée par la cadence D7–G.",
    color: "#0F6E56", bg: "#E1F5EE",
  },
  {
    id: "cf",
    de: "C majeur", vers: "F majeur",
    pivot: "Dm",
    roles: "II en C / VI en F",
    prog: ["C","Am","Dm","C7","F"],
    progKeys: ["C","Am","Dm","C7","F"],
    desc: "Dm est II en C (sous-dominante) et VI en F (tonique secondaire). C7 (V/IV en C = V de F) confirme la nouvelle tonalité. Cadence C7–F.",
    color: "#534AB7", bg: "#EEEDFE",
  },
  {
    id: "gd",
    de: "G majeur", vers: "D majeur",
    pivot: "Bm",
    roles: "III en G / VI en D",
    prog: ["G","Em","Bm","A7","D"],
    progKeys: ["G","Em","Bm","A7","D"],
    desc: "Bm est III en G (tonique) et VI en D (tonique secondaire). A7 (V de D) confirme D majeur. Transition fluide entre tons voisins à distance de quinte.",
    color: "#BA7517", bg: "#FAEEDA",
  },
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
  // ── Logique de la modulation (18) ──
  { q:"Une modulation est :", opts:["Un emprunt d'accord étranger","Un changement durable de tonalité principale — le centre tonal se déplace","Une tonicisation prolongée","Un changement de tempo"], a:1, fb:"La modulation installe durablement une nouvelle tonalité — elle est confirmée par une cadence parfaite dans le nouveau centre. Elle se distingue de l'emprunt (momentané) et de la tonicisation (bref)." },
  { q:"Quelle condition rend une modulation 'réelle' (durable) ?", opts:["Utiliser un accord diminué","La confirmation par une cadence parfaite dans la nouvelle tonalité, suivie d'un séjour","L'utilisation d'accords renversés","La présence d'une sensible artificielle"], a:1, fb:"Une modulation n'est pas une simple couleur passagère — elle installe un nouveau centre tonal. Pour cela, une cadence parfaite (V–I) dans le nouveau ton confirme l'arrivée. Sans ce séjour, c'est une tonicisation." },
  { q:"Qu'est-ce qui distingue fondamentalement une modulation d'un emprunt ?", opts:["La durée — modulation = durable, emprunt = momentané","La hauteur des notes","Le nombre de voix","L'armure uniquement"], a:0, fb:"Un emprunt est une couleur passagère — on revient immédiatement à la tonalité principale. La modulation déplace durablement le centre tonal — on reste dans la nouvelle tonalité pendant plusieurs mesures." },
  { q:"La modulation par accord pivot est la plus fréquente car :", opts:["Elle est la plus rapide","Elle est la plus fluide — l'accord pivot appartient aux deux tonalités, assurant une transition sans rupture","Elle évite la dominante","Elle ne nécessite pas de cadence"], a:1, fb:"L'accord pivot appartient simultanément à la tonalité de départ et à celle d'arrivée. On le réinterprète (même accord, nouvelle fonction) — la transition est donc imperceptible, sans rupture." },
  { q:"Pour confirmer l'arrivée dans une nouvelle tonalité, on utilise :", opts:["Un accord renversé","Une cadence parfaite (V–I) dans le nouveau ton","Un accord de sixte napolitaine","Une pédale de tonique"], a:1, fb:"La cadence parfaite dans la nouvelle tonalité — V (à l'état fondamental) → I (à l'état fondamental) — est le signal le plus fort que le centre tonal a changé. Sans elle, la modulation reste ambiguë." },
  { q:"Les tons voisins sont privilégiés pour les modulations car :", opts:["Ils ont moins de notes","Ils partagent de nombreux accords — les pivots abondent, la transition est douce","Ils sont plus graves","Ils utilisent moins d'altérations"], a:1, fb:"Tons voisins = 6-7 notes communes. Plus les deux tonalités partagent de notes et d'accords, plus il y a de pivots possibles et plus la modulation est fluide. Les tons éloignés nécessitent des transitions plus abruptes." },
  { q:"Une modulation directe (sans pivot) crée :", opts:["Une transition très douce","Une rupture brutale — effet théâtral ou dramatique","Une cadence imparfaite","Un retard harmonique"], a:1, fb:"La modulation directe (sans accord de transition) saute brusquement d'une tonalité à l'autre. Cet effet peut être voulu — pour marquer un changement dramatique — mais il reste une exception stylistique." },
  { q:"La tonique de la tonalité d'arrivée est généralement évitée comme pivot car :", opts:["Elle est toujours diminuée","Elle est trop marquée — entendre la tonique du nouveau ton avant la cadence affaiblit la surprise de l'arrivée","Elle n'appartient pas à la gamme de départ","Elle crée des octaves parallèles"], a:1, fb:"Si on entend la tonique de G (G majeur) trop tôt comme accord diatonique de C (V de C), l'oreille anticipe l'arrivée. L'accord pivot idéal est neutre — il ne préfigure pas trop nettement la destination." },
  { q:"Combien de temps faut-il rester dans la nouvelle tonalité pour valider une modulation ?", opts:["Un seul accord suffit","Au moins une cadence parfaite — plusieurs mesures de préférence","Exactement 4 mesures","Une octave de durée"], a:1, fb:"Une modulation n'est validée que si on séjourne dans la nouvelle tonalité. Un seul accord de la nouvelle tonalité, c'est une tonicisation. Il faut au minimum une cadence parfaite, idéalement plusieurs mesures." },
  { q:"Dans la progression C–F–G7–C–Am–D7–G, la modulation de C vers G est confirmée par :", opts:["Am","D7","G — l'accord final","La présence de F# dans D7"], a:1, fb:"D7 est la dominante de G. D7–G est la cadence parfaite en G majeur. C'est D7 qui confirme que l'on est en G — il contient F# (sensible de G) qui monte vers Sol." },
  { q:"La modulation vers la dominante (ex : C→G) est la plus fréquente dans la musique classique car :", opts:["Elle est la plus dramatique","G est le ton le plus proche de C — ils partagent 6 notes et plusieurs accords communs","C et G ont la même armure","Elle évite le triton"], a:1, fb:"C et G ne diffèrent que d'une note (F vs F#). C'est la modulation la plus naturelle — très fréquente chez Bach, Haydn, Mozart. La modulation vers la dominante est souvent utilisée pour la section B ou le développement." },
  { q:"La modulation vers le relatif mineur (ex : C→Am) est caractéristique de :", opts:["La cadence plagale","Nombreuses formes musicales — le trio, la section contrastante","La pédale de dominante","Le cycle des quintes"], a:1, fb:"C majeur et Am partagent exactement les mêmes notes. La modulation vers le relatif mineur crée un glissement vers une couleur plus sombre sans changer les notes de la gamme — très naturelle et très fréquente." },
  { q:"Pour moduler de C majeur vers E♭ majeur (ton éloigné), on peut utiliser :", opts:["Un accord pivot direct (ils partagent peu d'accords)","Une série d'emprunts graduels ou une modulation directe dramatique","Une basse de chaconne","Le cycle des quintes complet"], a:1, fb:"C et Eb sont éloignés (3 bémols de différence). Un pivot direct est difficile — on peut passer par des tons intermédiaires (emprunts progressifs, chromatis me) ou moduler directement pour un effet dramatique." },
  { q:"Qu'est-ce qu'un 'schéma de modulation type' ?", opts:["Un accord de pivot fixe","I–IV–V–I (en départ), pivot, V–I (en arrivée) — soit T→SD dans le départ, pivot, D→T dans l'arrivée","Deux cadences parfaites consécutives","Un changement d'armure brutal"], a:1, fb:"Schéma type : T–SD (dans la tonalité de départ) → accord pivot (réinterprété) → D–T (cadence parfaite dans la nouvelle tonalité). Le pivot est souvent une sous-dominante ou un accord neutre." },
  { q:"Pourquoi la sous-dominante est-elle souvent choisie comme accord pivot ?", opts:["Car elle est la plus grave","Car elle prépare naturellement la dominante de la nouvelle tonalité — elle est fonctionnellement en 'attente'","Car elle a toujours une quinte juste","Car elle est toujours majeure"], a:1, fb:"La sous-dominante prépare la dominante — c'est sa fonction. Utilisée comme pivot, elle se réinterprète comme SD de la nouvelle tonalité et appelle naturellement la dominante qui confirme l'arrivée." },
  { q:"La modulation peut être préparée par :", opts:["N'importe quel accord sans préparation","Une tonicisation progressive vers la nouvelle tonalité — V/V peut préparer la modulation vers V","Un accord napolitain uniquement","Une pédale de basse obligatoire"], a:1, fb:"Une tonicisation vers V (ex : D7 en C qui prépare G) peut devenir une modulation si on reste en G. Le V/V prépare si naturellement la nouvelle tonique (G) que la transition semble évidente." },
  { q:"Dans une modulation par accord pivot, combien de fonctions a l'accord pivot ?", opts:["Une seule","Deux — une dans chaque tonalité (départ et arrivée)","Trois","Aucune — il est neutre"], a:1, fb:"L'accord pivot a deux fonctions simultanées : l'une dans la tonalité de départ, l'autre dans celle d'arrivée. C'est cette double appartenance qui permet la transition sans rupture." },
  { q:"La modulation est souvent utilisée dans les formes musicales pour :", opts:["Accélérer le tempo","Créer un contraste et donner du mouvement au discours musical — sections A et B, développement","Éviter les répétitions de mélodie","Simplifier l'harmonie"], a:1, fb:"La modulation est un outil formel puissant — elle crée un contraste harmonique entre les sections d'une pièce. La forme sonate exploite systématiquement la modulation vers la dominante dans le développement." },

  // ── Accord pivot (22) ──
  { q:"Un accord pivot est :", opts:["Un accord joué très fort","Un accord appartenant simultanément à deux tonalités différentes — il assure la transition","Un accord de dominante secondaire","Un accord en deuxième renversement"], a:1, fb:"L'accord pivot est un accord qui appartient aux deux tonalités — départ et arrivée. On le joue une fois avec sa fonction de départ, puis on le réinterprète dans la nouvelle tonalité. C'est la charnière de la modulation." },
  { q:"Quelle propriété fait d'un accord un bon pivot ?", opts:["D'être majeur","D'appartenir aux deux tonalités et d'avoir une fonction naturelle dans chacune — idéalement non-cadentielle","D'être à l'état fondamental","De n'avoir aucune altération"], a:1, fb:"Un bon pivot appartient aux deux tonalités et a une fonction musicalement logique dans chacune. Il est idéalement non-cadentiel (pas la dominante ni la tonique principale) pour ne pas trop marquer la direction." },
  { q:"En modulant de C vers G, Am est un excellent pivot car :", opts:["Am est majeur dans les deux tonalités","Am est VI en C (tonique secondaire) et II en G (sous-dominante) — deux fonctions naturelles","Am est la dominante des deux","Am contient toutes les notes des deux gammes"], a:1, fb:"Am = VI en C (tonique, rôle stable) et II en G (sous-dominante, prépare D7). La réinterprétation est naturelle — Am en VI dans C glisse vers Am en II dans G, qui appelle D7–G." },
  { q:"En modulant de C vers G, Em est un pivot :", opts:["Impossible — Em n'est pas dans G","Possible — Em est III en C et VI en G, deux fonctions toniques","Très courant et cadentiel","Impossible car Em est diminué en G"], a:1, fb:"Em est III en C (tonique) et VI en G (tonique). C'est un pivot valide — Em a la même sonorité dans les deux tonalités (tonique secondaire). Il est moins courant qu'Am mais fonctionne." },
  { q:"Pourquoi évite-t-on G comme pivot en modulant de C vers G ?", opts:["G n'est pas dans C","G est la tonique d'arrivée — l'utiliser comme pivot trop tôt révèle prématurément la destination","G est toujours mineur","G crée des octaves parallèles"], a:1, fb:"G est la tonique de G majeur. Si on l'entend trop tôt comme V de C (sa fonction en C), l'oreille anticipe l'arrivée et perd la surprise. On préfère un pivot plus neutre — Am ou Em." },
  { q:"Les accords communs entre C majeur et G majeur sont :", opts:["C, Dm, Em, F, G, Am","C, Em, G, Am (et Bdim en C = Em en G)","G, D, A, E, B","F, Bb, Eb"], a:1, fb:"C majeur : C Dm Em F G7 Am Bdim. G majeur : G Am Bm C D7 Em F#dim. Accords communs : C (I en C / IV en G), Em (III en C / VI en G), Am (VI en C / II en G), G (V en C / I en G)." },
  { q:"En modulant de G vers D, Bm est un bon pivot car :", opts:["Bm est majeur dans les deux","Bm est III en G (tonique) et VI en D (tonique secondaire) — deux fonctions stables","Bm est la dominante de G","Bm n'existe pas en D"], a:1, fb:"Bm est III de G et VI de D — tonique dans les deux tonalités. C'est le pivot le plus naturel pour la modulation G→D, symétrique à Am pour C→G." },
  { q:"La progression C–Am–D7–G illustre :", opts:["Une tonicisation de Am","Une modulation de C vers G avec Am comme pivot","Une cadence rompue","Une basse de chaconne"], a:1, fb:"Am est pivot : VI en C (tonique, la progression commence en C) → II en G (sous-dominante). D7 est la dominante de G. La cadence D7–G confirme G majeur comme nouveau centre tonal." },
  { q:"En modulant de F vers C, Dm est un pivot car :", opts:["Dm est majeur dans les deux","Dm est VI en F et II en C — fonctions tonique et sous-dominante","Dm est la dominante de F","Dm n'existe pas en C"], a:1, fb:"Dm est VI de F (tonique secondaire) et II de C (sous-dominante). En modulant F→C, Dm se réinterprète et prépare G7 (V de C). La cadence G7–C confirme C." },
  { q:"Pour trouver un accord pivot, on cherche :", opts:["Un accord majeur quelconque","Les accords communs aux deux tonalités — on liste les accords de chaque gamme et on trouve les intersections","Un accord diminué","Un accord renversé"], a:1, fb:"Méthode : (1) lister tous les accords de la gamme de départ, (2) lister tous les accords de la gamme d'arrivée, (3) trouver les accords communs, (4) choisir celui avec les fonctions les plus musicales." },
  { q:"Le pivot idéal est généralement :", opts:["La tonique de la gamme de départ","Une sous-dominante ou un accord de fonction tonique secondaire — ni trop marqué ni trop instable","La dominante de la gamme d'arrivée","Un accord diminué"], a:1, fb:"Ni la tonique principale (trop marquée) ni la dominante (trop cadentielle) — le pivot idéal est un accord intermédiaire : VI ou II de départ (= II ou VI d'arrivée). Am pour C→G est l'exemple classique." },
  { q:"En C majeur, F est un accord commun à :", opts:["C majeur et G majeur","C majeur et F majeur (I de F) et Bb majeur (V de Bb)","C majeur et D mineur","C majeur et E mineur"], a:1, fb:"F (Fa majeur) est IV de C, I de F, et V de Bb. En modulant de C vers F, F serait la tonique d'arrivée — à éviter comme pivot. Vers Bb, F pourrait être un pivot (V de Bb = SD de C — rôle similaire)." },
  { q:"La notation 'pivot' dans une analyse harmonique se note souvent :", opts:["En rouge","Avec un crochet double — la même mesure annotée dans les deux tonalités (ex : [VI en C = II en G])","En 3/4","Avec un accord diminué"], a:1, fb:"L'accord pivot est annoté doublement : VI en C / II en G (ou similaire). Cette double annotation montre explicitement la réinterprétation — même accord, deux lectures fonctionnelles simultanées." },
  { q:"En modulant de Am vers C majeur, quel accord peut servir de pivot ?", opts:["G7","Em — III de C et VI de Am (les deux relatives partagent tous leurs accords)","Dm","Bdim"], a:1, fb:"Am et C sont relatifs — ils partagent exactement les mêmes 7 notes et les mêmes accords. N'importe quel accord peut être pivot. Em est souvent utilisé : III de C et VI de Am — deux fonctions toniques." },
  { q:"En modulant de C vers Eb (médiante inférieure), les accords communs sont :", opts:["Nombreux — 6 accords communs","Rares — C et Eb ne partagent que Cm (I de Cm et VI de Eb) et Gm","Aucun — modulation directe obligatoire","F et Bb seulement"], a:1, fb:"C majeur et Eb majeur ne partagent pas beaucoup d'accords diatoniques. Cm peut servir de pivot (minorisation de C → I de Cm → VI de Eb). Ou Am → VI de C / IIm de... c'est une modulation plus complexe." },
  { q:"La progression G–Em–Am–D7–G (en G majeur) montre :", opts:["Une modulation vers Am","Une cadence parfaite en G avec Am comme accord de passage","Un retour à G sans modulation — Am est II de G (sous-dominante)","Une tonicisation de D"], a:1, fb:"Pas de modulation ici — Am est simplement II de G (sous-dominante), Em est VI de G (tonique). La progression est T–T–SD–D–T en G majeur. Am n'a pas changé de tonalité." },
  { q:"En modulant de D vers A, F#m est un pivot car :", opts:["F#m est majeur dans D","F#m est III en D (tonique) et VI en A (tonique) — deux fonctions stables","F#m est la dominante de D","F#m n'existe qu'en A"], a:1, fb:"F#m est le IIIe degré de D majeur et le VIe degré de A majeur — tonique dans les deux tonalités. C'est le pivot naturel pour D→A, comme Bm l'est pour G→D et Am pour C→G." },
  { q:"Quel accord commun à C et F est un bon pivot pour moduler C→F ?", opts:["C (tonique de départ — trop marqué)","Am — VI en C et III en F (deux toniques)","G7 (dominante de C — trop cadentielle)","Bdim"], a:1, fb:"Am est VI de C (tonique) et III de F (tonique aussi). C'est un pivot neutre et naturel. Après Am en C, on peut réinterpréter Am comme III de F et partir vers C7–F pour confirmer F majeur." },
  { q:"Pour moduler de C vers Bb, on peut utiliser Dm comme pivot car :", opts:["Dm est I de Bb","Dm est II en C (sous-dominante) et III en Bb (tonique) — deux fonctions","Dm est la dominante de Bb","Dm n'est pas dans Bb"], a:1, fb:"Dm est II de C (SD) et III de Bb (tonique). En réinterprétant Dm comme III de Bb, on peut enchaîner vers F7 (V de Bb) puis Bb. La modulation C→Bb est une modulation vers la sous-dominante." },
  { q:"La modulation de C vers Am (relatif mineur) :", opts:["Nécessite beaucoup d'accords pivots","Est la plus facile — Am et C partagent tous leurs accords, n'importe quel accord peut servir de pivot","Nécessite une cadence directe","Est impossible sans modulation chromatique"], a:1, fb:"C et Am sont relatifs — mêmes notes, même armure. N'importe quel accord commun peut servir de pivot. En pratique, Em (III/C = VI/Am) ou G (V/C = VII/Am) sont courants pour cette transition." },
  { q:"La progression C–F–G7–C–Am–E7–Am montre :", opts:["Une modulation vers Am avec Am–E7–Am comme cadence parfaite en Am (E7 = V de Am harmonique)","Un emprunt de E7","Une tonicisation sans modulation","Une cadence plagale en C"], a:0, fb:"E7 est V de Am harmonique (Mi–Sol#–Si–Ré). E7–Am est une cadence parfaite en Am. Si on reste en Am après, c'est une modulation. La progression C–Am est le pivot (VI de C = I de Am), puis E7–Am confirme Am." },
  { q:"Le pivot 'Am = VI en C / II en G' signifie que :", opts:["Am change de sonorité selon la tonalité","Am garde la même sonorité (accord de La mineur) mais sa fonction harmonique change — tonique en C, sous-dominante en G","Am est joué différemment dans chaque tonalité","Am est une erreur dans une des deux tonalités"], a:1, fb:"L'accord Am (La–Do–Mi) reste identique. Seule son interprétation fonctionnelle change : dans C, c'est une alternative à la tonique (VI). Dans G, c'est un accord préparatoire vers D7 (SD). Même son, deux rôles." },

  // ── 6/4 de cadence et V7sus4 (20) ──
  { q:"Le 6/4 de cadence est :", opts:["Un accord de sixte ajoutée","Le Ier degré en deuxième renversement — la quinte est à la basse","Le Ve degré en premier renversement","Un accord de sixte napolitaine"], a:1, fb:"I6/4 = premier degré en 2e renversement (la quinte à la basse). En C : C/G (Do–Mi–Sol avec Sol à la basse). Les intervalles au-dessus de la basse sont une sixte (Mi–Sol) et une quarte (Sol–Do) — d'où le nom 6/4." },
  { q:"Pourquoi le 6/4 de cadence est-il placé juste avant la dominante ?", opts:["Par convention arbitraire","Car ses notes (quarte et sixte sur la basse) agissent comme des appoggiatures de la quinte et de la tierce de V","Car il est plus grave","Car il remplace la sous-dominante"], a:1, fb:"Le 6/4 de cadence contient Do (quarte) et Mi (sixte) au-dessus de Sol. Ces deux notes descendent conjointement vers Si (tierce de G7) et Ré (quinte de G7). C'est une double appoggiature de la dominante." },
  { q:"En C majeur, le 6/4 de cadence s'écrit :", opts:["C/E","G/B","C/G","F/C"], a:2, fb:"C/G = Do–Mi–Sol avec Sol à la basse. C'est le I en 2e renversement. Sol est la quinte de C — d'où le nom I6/4 (sixte Do–Mi et quarte Sol–Do au-dessus de la basse Sol)." },
  { q:"La résolution du 6/4 de cadence vers V7 se fait par :", opts:["Un saut de quinte","La quarte qui descend vers la tierce de V, et la sixte qui descend vers la quinte de V","Un mouvement ascendant","Un saut de tierce"], a:1, fb:"C (quarte) descend vers Si (tierce de G7). Mi (sixte) descend vers Ré (quinte de G7). Sol (basse) reste — c'est la fondamentale de G. Deux descentes conjointes : Do→Si et Mi→Ré. La basse Sol reste immobile." },
  { q:"La séquence I6/4 → V7 → I est :", opts:["Une cadence imparfaite","Une cadence parfaite renforcée — le 6/4 de cadence prépare le V7 avec plus de tension","Une cadence rompue","Une demi-cadence"], a:1, fb:"I6/4 → V7 → I est une cadence parfaite avec préparation. Le 6/4 renforce la tension avant V7 — double appoggiature qui amplifie l'attente de résolution. Très utilisé dans les concertos classiques." },
  { q:"Le V7sus4 est :", opts:["V7 avec une septième suspendue","V7 où la tierce est temporairement remplacée par une quarte (souvent la tonique)","V7 en premier renversement","V7 avec une 9e ajoutée"], a:1, fb:"V7sus4 = accord de dominante 7 avec suspension de quarte : la tierce (Si en G7) est remplacée par la quarte (Do). En G7sus4 : Sol–Do–Ré–Fa. La quarte (Do) se résout ensuite sur la tierce (Si) : V7sus4 → V7." },
  { q:"En C majeur, G7sus4 contient les notes :", opts:["Sol–Si–Ré–Fa","Sol–Do–Ré–Fa","Sol–Si–Mi–Fa","Sol–Do–Mi–Fa"], a:1, fb:"G7sus4 = Sol–Do–Ré–Fa. La tierce Si est remplacée par la quarte Do. La quarte Do descend vers Si pour donner G7 = Sol–Si–Ré–Fa. V7sus4 → V7 → I." },
  { q:"La résolution du V7sus4 vers V7 se fait par :", opts:["Un saut de quinte","La quarte (Do dans G7sus4) qui descend d'un demi-ton vers la tierce (Si dans G7)","Un mouvement ascendant","La basse qui monte"], a:1, fb:"Dans G7sus4 → G7 : Do (quarte suspendue) descend d'un demi-ton vers Si (tierce). La suspension se lève — la tension se résout vers la vraie dominante G7 avant la résolution finale sur C." },
  { q:"Le V7sus4 crée une tension plus douce que V7 car :", opts:["Il est plus grave","La quarte remplace la tierce — pas de sensible (Si) dans l'accord, moins de tension chromatique","Il est plus rapide","Il a moins de notes"], a:1, fb:"G7sus4 ne contient pas Si (la sensible de C). L'accord est moins tendu qu'un G7 complet. La suspension crée une attente élégante — quand Si arrive enfin (V7sus4 → V7), la résolution sur C est très satisfaisante." },
  { q:"La séquence SD → I6/4 → V7 → I est :", opts:["Une cadence imparfaite","Une cadence parfaite avec double préparation — SD prépare 6/4, 6/4 prépare V7","Une demi-cadence","Une cadence rompue"], a:1, fb:"SD prépare 6/4 qui prépare V7 qui résout sur I. Trois étapes de préparation croissante — chaque accord amplifie la tension avant la résolution finale. Formule classique pour les grandes cadences." },
  { q:"Le 6/4 de cadence est utilisé pour :", opts:["Commencer une phrase","Confirmer l'arrivée dans une nouvelle tonalité avant la cadence parfaite","Créer une pédale de dominante","Remplacer la sous-dominante"], a:1, fb:"Le 6/4 de cadence (I6/4 de la nouvelle tonalité) est souvent placé juste avant la cadence parfaite — il annonce fortement la résolution imminente. C'est un 'drapeau harmonique' de la nouvelle tonalité." },
  { q:"Dans un concerto classique, le 6/4 de cadence est souvent suivi de :", opts:["La mélodie principale","Un solo cadenza — la double appoggiature résout vers la dominante sur laquelle l'interprète improvise","La récapitulation directe","Un accord de napolitain"], a:1, fb:"La cadence de concerto utilise le 6/4 pour marquer le début de la cadence soliste. Le 6/4 (Sol en basse) est tenu pendant que le soliste improvise, puis l'orchestre résout V7–I à la fin." },
  { q:"Le V7sus4 est particulièrement utilisé dans :", opts:["La musique baroque uniquement","Le jazz, le post-romantique et la musique moderne — pour sa préparation élégante","La musique médiévale","Les fugues uniquement"], a:1, fb:"V7sus4 est très prisé dans le jazz (Herbie Hancock, Bill Evans), le post-romantisme (Wagner, Debussy) et la pop/rock moderne. Il offre une préparation plus colorée et moins conventionnelle que le V direct." },
  { q:"Le 6/4 de cadence est parfois appelé 'quarte et sixte' car :", opts:["Il a quatre notes et six accords","Les intervalles au-dessus de la basse sont une quarte et une sixte (depuis la basse jusqu'aux notes de l'accord)","Il dure quatre mesures","Il est en 6/4 de temps"], a:1, fb:"Au-dessus de la basse Sol : Do est une quarte (Sol→Do = 4 degrés) et Mi est une sixte (Sol→Mi = 6 degrés). Ces deux intervalles caractérisent le I6/4 = 'accord de quarte et sixte' ou '6/4 de cadence'." },
  { q:"Quelle est la différence entre I6/4 et I6 ?", opts:["Aucune différence","I6/4 = 2e renversement (quinte à la basse), I6 = 1er renversement (tierce à la basse)","I6 = 2e renversement","I6/4 a une note de plus"], a:1, fb:"I6 = premier renversement : la tierce est à la basse (C/E en C). I6/4 = deuxième renversement : la quinte est à la basse (C/G en C). La notation chiffrée 6/4 et 6 provient de la basse chiffrée baroque." },
  { q:"La séquence V7sus4 → V7 → I évoque implicitement :", opts:["Deux toniques successives","La présence du Ier et du VIIe degré dans le mouvement de voix — Do (tonique) dans sus4 descend vers Si (sensible) qui monte vers Do","Un emprunt à la dominante","Un accord napolitain"], a:1, fb:"Do (quarte suspendue dans G7sus4) descend vers Si (tierce de G7 = sensible de C). Puis Si monte vers Do (résolution finale). Le Do → Si → Do est un mouvement de suspension-sensible-résolution implicite dans la voix." },
  { q:"Pour quelle raison le 6/4 de cadence doit-il avoir la basse doublée ?", opts:["Par esthétique","Car la basse (quinte de l'accord) est le son le plus stable du I6/4 — la doubler renforce l'accord","Car la tierce est instable","Par convention uniquement"], a:1, fb:"Dans I6/4, la basse est la quinte de l'accord. La règle de doublure du 6/4 de cadence : doubler la basse (= la quinte). La quinte est la note la plus neutre — la doubler stabilise l'accord instable." },
  { q:"Après I6/4 → V7, peut-on insérer V7sus4 entre les deux ?", opts:["Non — V7sus4 doit toujours précéder V7 directement","Oui : I6/4 → V7sus4 → V7 → I est possible et crée une tension encore plus graduée","Non — le 6/4 et le sus4 s'excluent","Seulement en mineur"], a:1, fb:"La séquence I6/4 → V7sus4 → V7 → I est tout à fait valide et élaborée. Chaque étape ajoute une couche de tension : 6/4 prépare sus4, sus4 libère la quarte vers la tierce, V7 résout sur I." },
  { q:"Le V7sus4 est souvent noté :", opts:["Vsus4","V7sus4 ou V11 (la quarte = 11e en notation jazz)","Vadd4","V4/4"], a:1, fb:"V7sus4 en notation classique = V11 en notation jazz (la quarte est l'11e harmonique). G7sus4 = G11 en jazz. Les deux notations désignent le même accord : Sol–Do–Ré–Fa (sans la tierce Si)." },
  { q:"Quel compositeur a utilisé le 6/4 de cadence de manière particulièrement dramatique ?", opts:["Bach","Mozart uniquement","Rachmaninov — dans son Concerto n°2, le 6/4 crée un effet grandiose avant la résolution","Debussy uniquement"], a:2, fb:"Le Concerto pour piano n°2 de Rachmaninov est souvent cité comme exemple d'utilisation dramatique du 6/4 de cadence — la basse tenue sur Sol (quinte de C) pendant plusieurs mesures avant la résolution finale." },

  // ── Exemples et synthèse (32) ──
  { q:"La progression C–F–G7–C–Am–D7–G est une modulation vers :", opts:["F majeur","Am","G majeur — D7–G est la cadence parfaite de G","D mineur"], a:2, fb:"Am (VI en C) devient II en G. D7 (V de G) confirme la nouvelle tonalité. La cadence parfaite D7–G établit G majeur comme nouveau centre. Schéma type : T–SD–V–I (en C), pivot Am, V–I (en G)." },
  { q:"Dans la modulation C→G avec Am comme pivot, D7 joue le rôle de :", opts:["Sous-dominante de G","Dominante de G — V de G, confirme l'arrivée dans la nouvelle tonalité","Accord pivot supplémentaire","Accord de passage chromatique"], a:1, fb:"D7 = V de G. D7–G est la cadence parfaite qui confirme G majeur. D7 contient F# (sensible de G) — c'est lui qui marque définitivement l'entrée dans la nouvelle tonalité." },
  { q:"Pour moduler de G vers C, on peut utiliser :", opts:["Em comme pivot (VI en G / III en C)","F# comme pivot","B comme pivot","Uniquement une modulation directe"], a:0, fb:"Em est VI de G (tonique) et III de C (tonique). Après Am (I de Am, relatif de C) puis G7–C, ou directement Em–Am–G7–C : Em comme pivot pour G→C crée une transition naturelle vers C." },
  { q:"La modulation vers la sous-dominante (C→F) est moins fréquente que C→G car :", opts:["F est moins harmonieux","Elle donne une sensation de 'détente' — on perd une altération (F remplace F#) — plutôt que de tension","F est hors tonalité","Elle nécessite plus d'accords"], a:1, fb:"Moduler vers la dominante (C→G) ajoute F# — une tension. Moduler vers la sous-dominante (C→F) enlève la sensible et perd F# — un relâchement. Le premier crée de l'élan, le second donne une couleur plus sombre et apaisée." },
  { q:"La progression C–Em–Am–E7–Am–D7–G module de C vers :", opts:["Am","G — Em et Am sont pivots, E7–Am établit Am temporairement, D7–G confirme G","F","D"], a:1, fb:"Longue progression : C commence en C majeur. Em–Am sont diatoniques. E7–Am = tonicisation de Am (ou modulation brève en Am). D7–G = cadence parfaite en G. La modulation finale est vers G majeur." },
  { q:"En modulant de D vers A, A7 joue le rôle de :", opts:["Accord pivot","Dominante de A — V7 de A, confirme l'arrivée en A majeur","Sous-dominante de D","Accord emprunté"], a:1, fb:"A7 = V de A majeur. La cadence A7–A confirme A comme nouveau centre tonal. F#m (VI de D / III de A) ou Bm (VI de A = II de D ? non) peut servir de pivot avant A7–A." },
  { q:"La formule SD → 6/4 → V7 → I s'écrit en C majeur :", opts:["F → C/G → G7 → C","G7 → C/G → F → C","F → G7/B → C/G → G","Dm → C/G → G7 → C"], a:0, fb:"F (SD = IV de C) → C/G (6/4 de cadence = I6/4) → G7 (dominante V7) → C (tonique I). C'est la séquence complète avec 6/4 intercalé. Le C/G prépare G7 par ses appoggiatures Do→Si et Mi→Ré." },
  { q:"Le 6/4 de cadence dans une modulation est utilisé pour :", opts:["Annuler la modulation","Confirmer et ancrer solidement la nouvelle tonalité — c'est un 'drapeau harmonique'","Remplacer l'accord pivot","Créer une tonicisation"], a:1, fb:"Après l'accord pivot et la dominante secondaire, le 6/4 de cadence (I6/4 de la nouvelle tonalité) + V7 → I forment la cadence la plus affirmée possible. La nouvelle tonalité est établie sans ambiguïté." },
  { q:"En G majeur, le 6/4 de cadence est :", opts:["G/D","D/A","G/D est correct","D/F#"], a:0, fb:"6/4 de G = G/D (Sol–Si–Ré avec Ré à la basse). Le 2e renversement de G. Les intervalles au-dessus de Ré : Sol = quarte, Si = sixte. Résolution : Sol→Fa# (tierce de D7) et Si→La (quinte de D7)." },
  { q:"Quel est l'effet du V7sus4 dans une modulation ?", opts:["Il annule la modulation","Il prépare plus doucement la dominante de la nouvelle tonalité — la quarte suspendue donne une couleur de transition plus expressive","Il crée une fausse relation","Il remplace l'accord pivot"], a:1, fb:"V7sus4 dans la nouvelle tonalité précède V7 avec une tension plus douce. La suspension (quarte au lieu de tierce) retarde le plein effet de la dominante — la résolution finale est plus attendue et plus satisfaisante." },
  { q:"La progression C–Am (pivot VI/II) – D7 – G – D/F# – G suit le schéma :", opts:["T–SD–D–T en C","T–pivot–V–I en G avec 1er renversement de D pour fluidifier la basse","Deux modulations successives","Un cycle des quintes complet"], a:1, fb:"C (T en C) → Am (pivot VI/C = II/G) → D7 (V de G) → G (I de G) → D/F# (V6 de G, 1er renversement, fluidifie la basse) → G (retour I). Progression modulante C→G avec basse élaborée." },
  { q:"La modulation de C vers Am (relatif mineur) n'altère pas l'armure car :", opts:["L'armure change toujours en modulation","C et Am partagent exactement les mêmes notes — même armure (0 altération), seul le centre tonal change","L'armure n'existe pas en mineur","La modulation vers le mineur est impossible"], a:1, fb:"C majeur et Am naturel utilisent exactement les mêmes 7 notes — pas d'altération dans l'armure. La modulation est 'modale' — on change de centre sans changer les notes. Am harmonique introduit G# comme seule altération." },
  { q:"La progression Em–C–G–D7 (sans introduction) commence probablement en :", opts:["C majeur","G majeur — D7 est la dominante de G, et Em–C–G sont tous diatoniques à G","D majeur","E mineur"], a:1, fb:"Em (VI), C (IV), G (I), D7 (V) = VI–IV–I–V en G majeur. C'est une progression entièrement diatonique à G. Sans contexte précédent en C, la tonalité la plus probable est G majeur." },
  { q:"Après une modulation, comment retourner à la tonalité d'origine ?", opts:["On ne peut pas revenir","Par une nouvelle modulation — souvent avec un accord commun entre la tonalité actuelle et d'origine","Par une cadence rompue","Par une pédale de dominante obligatoire"], a:1, fb:"Le retour à la tonalité d'origine est lui-même une modulation. On peut utiliser un nouveau pivot, une modulation directe, ou une cadence enchaînée. La forme sonate utilise ce retour (récapitulation) comme moment structurel fort." },
  { q:"En D majeur, le 6/4 de cadence est :", opts:["D/A","A/E","G/D","D/F#"], a:0, fb:"6/4 de D = D/A (Ré–Fa#–La avec La à la basse). Le 2e renversement de D. La à la basse est la quinte de D. Résolution : Ré→Do# (tierce de A7) et Fa#→Mi (quinte de A7)." },
  { q:"La progression F–Dm–Am–C7–F peut être analysée comme :", opts:["Une modulation vers C avec Am comme pivot","Une progression entièrement en F majeur avec C7 = V7 de F","Une tonicisation de Am","Une basse de chaconne"], a:1, fb:"F (I), Dm (VI), Am (III), C7 (V7), F (I) = T–T–T–D–T en F majeur. C7 est la dominante de F (V7 de F). Pas de modulation — tout est diatonique à F majeur (Am est le IIIe de F)." },
  { q:"Dans Sonate en Do de Mozart, la modulation vers Sol au sein de l'exposition est confirmée par :", opts:["Un accord napolitain","D7 (V de G) suivi de G — cadence parfaite qui installe Sol comme nouveau centre","C7 (V/IV)","Une pédale de Sol"], a:1, fb:"Comme dans toute forme sonate classique, la modulation vers la dominante (G majeur) est confirmée par la cadence parfaite D7–G. C'est l'une des conventions les plus solidement établies de la musique classique." },
  { q:"Si la progression est C–Am–F–G–Em–Am–E7–Am, la modulation finale est vers :", opts:["F majeur","G majeur","Am — E7 (V de Am harmonique) – Am est la cadence parfaite de Am","Em"], a:2, fb:"E7–Am est la cadence parfaite de A mineur (E7 = V de Am harmonique). Si la progression reste en Am après, la modulation est vers Am. Le Sol# dans E7 est la sensible de La." },
  { q:"Le schéma 'I–IV–V–I (dans départ) → accord pivot → V–I (dans arrivée)' illustre :", opts:["Une tonicisation","Le schéma type de modulation par accord pivot — cadence dans le départ, pivot, cadence dans l'arrivée","Une cadence rompue","Un emprunt à l'homonyme"], a:1, fb:"C'est le schéma canonique : établir la tonalité de départ par une cadence, glisser vers le pivot, puis confirmer la nouvelle tonalité par sa propre cadence parfaite. Structure narrative claire et efficace." },
  { q:"La V7sus4 avant une cadence parfaite en G majeur s'écrit :", opts:["G7sus4–G7–C","D7sus4–D7–G","A7sus4–D7–G","D7sus4–G"], a:1, fb:"V7sus4 de G = D7sus4 (Ré–Sol–La–Do avec Sol = quarte suspendue de la tierce Fa#). D7sus4 → D7 → G. La quarte Sol descend vers Fa# (sensible de G) qui monte vers Sol (tonique)." },
  { q:"En modulant de C vers D (ton distant d'un ton entier), un pivot possible est :", opts:["Em — III de C et II de D","Bm — pas dans C","G — V de C et IV de D","F — pas dans D"], a:2, fb:"G est V de C (dominante) et IV de D (sous-dominante). G/D — fonctions différentes mais valides. Em est III de C mais Em est aussi la IIe de D (Em n'est pas diatonique à D majeur... En D majeur : D Em F#m G A Bm C#dim. Em n'est pas dans D.) G est le pivot le plus simple." },
  { q:"La séquence F–C/G–G7–C illustre :", opts:["Une modulation vers G","SD–6/4–V7–I en C — cadence parfaite avec préparation 6/4","Un emprunt à F majeur","Une tonicisation de G"], a:1, fb:"F = IV (sous-dominante de C). C/G = I6/4 (6/4 de cadence). G7 = V7 (dominante). C = I (tonique). La séquence SD–6/4–V7–I est la cadence parfaite classique avec 6/4 intercalé." },
  { q:"Quel outil permet de confirmer la nouvelle tonalité le plus efficacement ?", opts:["Un accord renversé","La cadence parfaite I6/4 → V7 → I dans la nouvelle tonalité","Un accord emprunté","Une pédale de basse"], a:1, fb:"La séquence I6/4 → V7 → I est la confirmation la plus affirmée d'une nouvelle tonalité. Le 6/4 prépare V7 avec tension maximale, puis V7 résout sur I — signal acoustique fort d'un nouveau centre tonal." },
  { q:"Dans la modulation C→G, après Am (pivot), D7 est entendu pour la première fois comme :", opts:["Un accord de C majeur","V de G — premier accord clairement appartenant à G majeur et non à C","Un accord emprunté de A mineur","Un accord de passage"], a:1, fb:"D7 contient F# — une note qui n'appartient pas à C majeur. C'est le premier accord qui signale clairement la nouvelle tonalité G. L'oreille entend F# et comprend qu'on est maintenant en G." },
  { q:"La modulation par accord pivot est dite 'enharmonique' quand :", opts:["L'accord pivot change de nom selon la tonalité","L'accord pivot est réinterprété enharmoniquement (ex : G# = Ab) permettant une modulation vers un ton éloigné","L'armure change en même temps","Le pivot est augmenté"], a:1, fb:"La modulation enharmonique utilise la même hauteur de son écrite différemment : G# = Ab. Un accord de G#m peut être réinterprété comme Abm — passant ainsi dans une tonalité très éloignée. Technique romantique avancée." },
  { q:"En Bb majeur, le 6/4 de cadence est :", opts:["Bb/F","F/C","Eb/Bb","Bb/D"], a:0, fb:"6/4 de Bb = Bb/F (Si♭–Ré–Fa avec Fa à la basse). Fa est la quinte de Bb — c'est le 2e renversement. Résolution : Si♭→La (tierce de F7) et Ré→Do (quinte de F7). Basse Fa reste immobile." },
  { q:"La modulation de C vers A majeur (tierce majeure ascendante) est :", opts:["Impossible sans modulation directe","Difficile — C et A partagent peu d'accords (Em est III de C et V de Am, pas de A majeur directement)","Simple — F est pivot","Identique à C→G"], a:1, fb:"C majeur et A majeur ne partagent que quelques accords (Em possible). Cette modulation vers la médiante majeure est moins naturelle que C→G. On peut passer par Am comme intermédiaire (C→Am→A) ou moduler par chromatis me." },
  { q:"Quelle est la notation américaine du 6/4 de cadence en C majeur ?", opts:["Cadd6","C/G","G/C","C6/4"], a:1, fb:"C/G = accord de Do majeur avec Sol à la basse. C'est la notation slash (accord/basse) standard. En C/G, le C désigne l'accord (C majeur), le G désigne la note à la basse (Sol)." },
  { q:"Un V7sus4 sans résolution vers V7 (directement vers I) crée :", opts:["Un effet standard","Un effet harmonique moderne — la quarte ne se résout pas, elle 'flotte' sur I. Très courant en jazz et pop contemporaine.","Une erreur harmonique","Une cadence plagale"], a:1, fb:"En jazz et en musique contemporaine, V7sus4 peut résoudre directement sur I sans passer par V7. La quarte non résolue reste suspendue — effet ambigu, modal. Ex : Dsus4 → G sans passer par D7." },
  { q:"La modulation par accord pivot diffère de la modulation directe car :", opts:["Elle est plus rapide","Elle est plus fluide — l'accord pivot appartient aux deux tonalités, évitant toute rupture","Elle n'utilise jamais de cadence","Elle est plus rare"], a:1, fb:"La modulation directe saute brusquement d'une tonalité à l'autre — rupture audible. La modulation par pivot glisse entre les deux sans rupture, grâce à l'accord qui appartient simultanément aux deux gammes." },
  { q:"En A majeur, le 6/4 de cadence est :", opts:["A/E","E/B","A/C#","D/A"], a:0, fb:"6/4 de A = A/E (La–Do#–Mi avec Mi à la basse). Mi est la quinte de A — 2e renversement. Résolution : La→Sol# (tierce de E7) et Do#→Si (quinte de E7). Basse Mi reste immobile." },
  { q:"Quelle est la fonction de Am dans la progression C–Am–D7–G ?", opts:["Sous-dominante de C uniquement","Pivot : VI de C (tonique) réinterprété comme II de G (sous-dominante)","Dominante de C","Accord de passage"], a:1, fb:"Am est VI de C (tonique secondaire) et II de G (sous-dominante). C'est la charnière de la modulation C→G — il glisse d'une fonction tonique stable vers une fonction préparatoire dans G, appelant D7–G." },
];

const QUIZ_COUNT = 10;

// ─── Styles ───────────────────────────────────────────────────────────────────

const S = {
  wrap:  { fontFamily:"var(--font-sans,system-ui)", maxWidth:720, margin:"0 auto", padding:"0 1rem 3rem" } as React.CSSProperties,
  hdr:   { padding:"1.5rem 0 1rem", borderBottom:"0.5px solid #e5e5e5", marginBottom:"1.25rem" } as React.CSSProperties,
  badge: { display:"inline-block", background:"#E6F1FB", color:"#185FA5", fontSize:11, fontWeight:500, padding:"2px 10px", borderRadius:20, marginBottom:6 } as React.CSSProperties,
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

export default function Cours8() {
  const [sec,    setSec]    = useState("logique");
  const i18n = useCoursI18n("cours8");
  const [selAc,  setSelAc]  = useState<number|null>(null);
  const [selEx,  setSelEx]  = useState<string|null>(null);

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
        <p style={S.sub}>Changer de tonalité sans rupture — l'accord pivot, le 6/4 de cadence et le V7sus4.</p>
      </div>

      <nav style={S.nav}>
        {SECTIONS_IDS.map(id => <button key={id} style={S.pill(sec===id)} onClick={() => setSec(id)}>{i18n.sectionLabel(id)}</button>)}
      </nav>

      {/* ══ LOGIQUE ══ */}
      {sec === "logique" && (
        <div>
          <h2 style={S.h2}>Logique d'une modulation</h2>
          <p style={S.p}>La modulation est d'une autre nature que l'emprunt ou la tonicisation. Ce n'est plus un simple jeu de couleurs — c'est un <strong>véritable voyage</strong>. Lorsqu'un compositeur module, il change de tonalité de référence. Le centre de gravité harmonique se déplace durablement.</p>

          <div style={S.info}>
            <strong>Distinction clé :</strong><br/>
            Emprunt = une couleur passagère (un accord étranger, on revient immédiatement).<br/>
            Tonicisation = un instant de tonique temporaire (quelques accords, puis retour).<br/>
            Modulation = un voyage durable — confirmé par une cadence parfaite dans le nouveau centre.
          </div>

          <h3 style={{ fontSize:14, fontWeight:500, margin:"20px 0 8px", color:"#111" }}>Les trois conditions d'une vraie modulation</h3>
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
            {[
              { n:"1", t:"Effacer l'ancien centre", d:"La tonalité de départ doit s'estomper — la nouvelle ne peut s'installer que si l'ancienne s'est affaiblie.", c:"#993C1D", bg:"#FAECE7" },
              { n:"2", t:"Confirmer le nouveau", d:"Une cadence parfaite (V–I, tous deux à l'état fondamental) dans la nouvelle tonalité — c'est le signal acoustique fort.", c:"#0F6E56", bg:"#E1F5EE" },
              { n:"3", t:"Séjourner", d:"On reste dans la nouvelle tonalité suffisamment longtemps pour que l'oreille l'adopte comme nouveau centre. Un seul accord ne suffit pas.", c:"#185FA5", bg:"#E6F1FB" },
            ].map(step => (
              <div key={step.n} style={{ border:`0.5px solid ${step.c}30`, borderRadius:10, padding:"12px 16px", background:step.bg, display:"flex", gap:12, alignItems:"flex-start" }}>
                <div style={{ minWidth:26, height:26, borderRadius:"50%", background:step.c, color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:600, flexShrink:0 }}>{step.n}</div>
                <div>
                  <div style={{ fontSize:13, fontWeight:500, color:step.c, marginBottom:3 }}>{step.t}</div>
                  <p style={{ fontSize:13, color:"#444", lineHeight:1.6, margin:0 }}>{step.d}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize:14, fontWeight:500, margin:"20px 0 8px", color:"#111" }}>Tons voisins — les destinations privilégiées</h3>
          <p style={S.p}>Plus deux tonalités sont proches (partagent de nombreuses notes), plus la modulation est fluide et les pivots abondants. Les tons voisins sont les destinations naturelles de la modulation.</p>

          <div style={{ overflowX:"auto" }}>
            <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
              <thead>
                <tr style={{ borderBottom:"0.5px solid #e5e5e5" }}>
                  {["Destination","Relation à C","Notes communes","Facilité"].map(h => (
                    <th key={h} style={{ textAlign:"left", padding:"6px 10px", fontWeight:500, color:"#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { dest:"G majeur",  rel:"Dominante (V)", notes:"6/7", fac:"Très facile" },
                  { dest:"F majeur",  rel:"Sous-dominante (IV)", notes:"6/7", fac:"Très facile" },
                  { dest:"A mineur",  rel:"Relatif mineur (VI)", notes:"7/7", fac:"Naturelle" },
                  { dest:"D mineur",  rel:"IIe degré", notes:"6/7", fac:"Facile" },
                  { dest:"E mineur",  rel:"IIIe degré", notes:"6/7", fac:"Facile" },
                  { dest:"Eb majeur", rel:"Médiante (emprunt)", notes:"2-3/7", fac:"Difficile — pivot rare" },
                ].map((row, i) => (
                  <tr key={row.dest} style={{ borderBottom:"0.5px solid #f0f0f0", background:i%2===0?"#fff":"#fafafa" }}>
                    <td style={{ padding:"7px 10px", fontWeight:500 }}>{row.dest}</td>
                    <td style={{ padding:"7px 10px", color:"#555" }}>{row.rel}</td>
                    <td style={{ padding:"7px 10px", color:"#185FA5", fontWeight:500 }}>{row.notes}</td>
                    <td style={{ padding:"7px 10px", color:row.fac.startsWith("Très")||row.fac==="Naturelle"?"#0F6E56":row.fac==="Facile"?"#BA7517":"#993C1D" }}>{row.fac}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ══ ACCORD PIVOT ══ */}
      {sec === "pivot" && (
        <div>
          <h2 style={S.h2}>L'accord pivot</h2>
          <p style={S.p}>L'accord pivot appartient simultanément à la tonalité de départ <em>et</em> à celle d'arrivée. On le joue dans la tonalité de départ avec sa fonction d'origine, puis on le <strong>réinterprète</strong> avec sa nouvelle fonction dans la tonalité d'arrivée. C'est cette double appartenance qui assure la fluidité de la transition.</p>

          <div style={S.tip}>
            <strong>Méthode pour trouver un pivot :</strong><br/>
            (1) Lister les accords de la tonalité de départ.<br/>
            (2) Lister les accords de la tonalité d'arrivée.<br/>
            (3) Trouver les accords communs.<br/>
            (4) Choisir celui avec les fonctions les plus naturelles dans les deux tonalités.
          </div>

          <h3 style={{ fontSize:14, fontWeight:500, margin:"20px 0 8px", color:"#111" }}>Accords communs entre C majeur et G majeur</h3>
          <p style={{ fontSize:13, color:"#888", marginBottom:12 }}>Cliquez sur un accord pour voir son analyse dans les deux tonalités.</p>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:8, marginBottom:12 }}>
            {ACCORDS_COMMUNS_CG.map((ac, i) => (
              <div key={ac.accord} onClick={() => setSelAc(selAc===i?null:i)}
                style={{ border:`0.5px solid ${selAc===i?(ac.pivot?"#0F6E56":"#BA7517"):"#e5e5e5"}`, borderRadius:10, padding:"10px 8px", textAlign:"center", cursor:"pointer", background:selAc===i?(ac.pivot?"#E1F5EE":"#FAEEDA"):"#fff", transition:"all .15s" }}>
                <div style={{ fontSize:16, fontWeight:700, color:"#111", marginBottom:4 }}>{ac.accord}</div>
                <div style={{ fontSize:10, padding:"2px 6px", borderRadius:8, display:"inline-block", background:ac.pivot?"#E1F5EE":"#FAECE7", color:ac.pivot?"#0F6E56":"#993C1D", fontWeight:500 }}>
                  {ac.pivot?"✓ Bon pivot":"✗ Déconseillé"}
                </div>
              </div>
            ))}
          </div>

          {selAc !== null && (
            <div style={{ border:`0.5px solid ${ACCORDS_COMMUNS_CG[selAc].pivot?"#0F6E56":"#BA7517"}`, borderRadius:10, padding:"14px 16px", background:ACCORDS_COMMUNS_CG[selAc].pivot?"#E1F5EE":"#FAEEDA", marginBottom:16 }}>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:10 }}>
                <div>
                  <div style={{ fontSize:11, color:"#999", marginBottom:3 }}>En C majeur</div>
                  <div style={{ fontSize:13, fontWeight:500, color:"#111" }}>{ACCORDS_COMMUNS_CG[selAc].enC}</div>
                </div>
                <div>
                  <div style={{ fontSize:11, color:"#999", marginBottom:3 }}>En G majeur</div>
                  <div style={{ fontSize:13, fontWeight:500, color:"#111" }}>{ACCORDS_COMMUNS_CG[selAc].enG}</div>
                </div>
              </div>
              <p style={{ fontSize:13, color:"#444", lineHeight:1.6, margin:0 }}>{ACCORDS_COMMUNS_CG[selAc].note}</p>
            </div>
          )}

          <div style={S.warn}>
            <strong>À éviter comme pivot :</strong> la tonique de la gamme de départ (trop marquée) et la tonique de la gamme d'arrivée (révèle prématurément la destination). On préfère les accords de fonction intermédiaire — VI ou III.
          </div>

          <h3 style={{ fontSize:14, fontWeight:500, margin:"20px 0 8px", color:"#111" }}>Schéma de modulation type (C→G)</h3>
          <div style={{ background:"#fafafa", border:"0.5px solid #e5e5e5", borderRadius:10, padding:"14px 16px", marginBottom:12 }}>
            <div style={{ fontSize:12, color:"#999", marginBottom:8 }}>I–IV–V–I (C) → pivot Am → V–I (G)</div>
            <div style={{ fontFamily:"monospace", fontSize:13, color:"#185FA5", letterSpacing:1, marginBottom:10 }}>
              C → F → G7 → C → Am → D7 → G
            </div>
            <button onClick={() => playProg(ref as React.RefObject<PianoPlayerRef>, ["C","F","G7","C","Am_pivot","D7","G"], 1000)}
              style={{ fontSize:12, padding:"5px 14px", border:"0.5px solid #185FA5", borderRadius:20, cursor:"pointer", background:"transparent", color:"#185FA5" }}>
              ▶ Écouter
            </button>
            <div style={{ fontSize:12, color:"#888", marginTop:10, lineHeight:1.65 }}>
              Am : VI en C (tonique secondaire) → II en G (sous-dominante). <br/>
              D7 : premier accord clairement dans G (contient F#). G : cadence parfaite confirmée.
            </div>
          </div>
        </div>
      )}

      {/* ══ OUTILS ══ */}
      {sec === "outils" && (
        <div>
          <h2 style={S.h2}>6/4 de cadence et V7sus4</h2>
          <p style={S.p}>Pour ancrer solidement la nouvelle tonalité, les compositeurs disposent de deux outils puissants qui préparent la dominante avec une tension accrue. Ce sont comme des <em>drapeaux harmoniques</em> — ils annoncent l'arrivée avec éclat.</p>

          {/* 6/4 */}
          <div style={{ border:"0.5px solid #185FA530", borderRadius:10, padding:"16px", background:"#E6F1FB", marginBottom:16 }}>
            <h3 style={{ fontSize:15, fontWeight:500, color:"#185FA5", marginBottom:8 }}>Le 6/4 de cadence (I⁶₄)</h3>
            <p style={{ fontSize:13, color:"#0C447C", lineHeight:1.65, marginBottom:12 }}>
              Le Ier degré joué en <strong>deuxième renversement</strong> — la quinte est à la basse. En C : <code>C/G</code> (Sol–Do–Mi avec Sol à la basse). Les intervalles au-dessus de Sol sont une sixte (Mi) et une quarte (Do) — d'où le nom.
            </p>
            <div style={{ background:"rgba(255,255,255,0.7)", borderRadius:8, padding:"10px 14px", marginBottom:12 }}>
              <div style={{ fontSize:12, color:"#999", marginBottom:6 }}>Résolution : C/G → G7 → C</div>
              <div style={{ fontSize:13, color:"#185FA5", fontFamily:"monospace" }}>Do (quarte) → Si (tierce de G7) ↓</div>
              <div style={{ fontSize:13, color:"#185FA5", fontFamily:"monospace" }}>Mi (sixte) → Ré (quinte de G7) ↓</div>
              <div style={{ fontSize:13, color:"#185FA5", fontFamily:"monospace" }}>Sol (basse) → Sol (fondamentale de G7, reste)</div>
            </div>
            <button onClick={() => playProg(ref as React.RefObject<PianoPlayerRef>, ["C/G","G7","C"], 900)}
              style={{ fontSize:12, padding:"5px 14px", border:"0.5px solid #185FA5", borderRadius:20, cursor:"pointer", background:"transparent", color:"#185FA5" }}>
              ▶ Écouter C/G → G7 → C
            </button>
            <div style={{ fontSize:12, color:"#888", marginTop:10 }}>Doublure : toujours doubler la basse (Sol) dans le 6/4 de cadence.</div>
          </div>

          {/* V7sus4 */}
          <div style={{ border:"0.5px solid #534AB730", borderRadius:10, padding:"16px", background:"#EEEDFE", marginBottom:16 }}>
            <h3 style={{ fontSize:15, fontWeight:500, color:"#534AB7", marginBottom:8 }}>Le V7sus4</h3>
            <p style={{ fontSize:13, color:"#2E2A87", lineHeight:1.65, marginBottom:12 }}>
              La dominante 7 avec <strong>suspension de quarte</strong> — la tierce est temporairement remplacée par une quarte (souvent la tonique). En C : <code>G7sus4</code> = Sol–Do–Ré–Fa. Do (quarte) se résout ensuite en Si (tierce) : G7sus4 → G7.
            </p>
            <div style={{ background:"rgba(255,255,255,0.7)", borderRadius:8, padding:"10px 14px", marginBottom:12 }}>
              <div style={{ fontSize:12, color:"#999", marginBottom:6 }}>Résolution : G7sus4 → G7 → C</div>
              <div style={{ fontSize:13, color:"#534AB7", fontFamily:"monospace" }}>Do (quarte) → Si (tierce) ↓  (libère la suspension)</div>
              <div style={{ fontSize:13, color:"#534AB7", fontFamily:"monospace" }}>Sol–Ré–Fa restent inchangés</div>
              <div style={{ fontSize:13, color:"#534AB7", fontFamily:"monospace" }}>Puis G7 → C : Si → Do ↑ et Fa → Mi ↓</div>
            </div>
            <button onClick={() => playProg(ref as React.RefObject<PianoPlayerRef>, ["G7sus4","G7","C"], 950)}
              style={{ fontSize:12, padding:"5px 14px", border:"0.5px solid #534AB7", borderRadius:20, cursor:"pointer", background:"transparent", color:"#534AB7" }}>
              ▶ Écouter G7sus4 → G7 → C
            </button>
          </div>

          <div style={S.tip}>
            <strong>Combinaison optimale :</strong> SD → I6/4 → V7sus4 → V7 → I. Chaque étape ajoute une couche de tension avant la résolution finale. Cette séquence est la cadence la plus élaborée de l'harmonie tonale classique.
          </div>

          <h3 style={{ fontSize:14, fontWeight:500, margin:"20px 0 8px", color:"#111" }}>Comparaison</h3>
          <div style={{ overflowX:"auto" }}>
            <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
              <thead>
                <tr style={{ borderBottom:"0.5px solid #e5e5e5" }}>
                  {["Outil","Structure","Tension","Usage typique"].map(h => (
                    <th key={h} style={{ textAlign:"left", padding:"6px 10px", fontWeight:500, color:"#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { o:"I6/4",      s:"I en 2e renversement (quinte à la basse)", t:"Forte (double appoggiature)", u:"Cadences solennelles, concertos" },
                  { o:"V7sus4",    s:"V7 avec quarte au lieu de tierce",          t:"Douce (suspension élégante)",  u:"Jazz, post-romantisme, pop moderne" },
                  { o:"I6/4+sus4", s:"Les deux enchaînés",                        t:"Maximale",                     u:"Grandes cadences classiques" },
                ].map((row, i) => (
                  <tr key={row.o} style={{ borderBottom:"0.5px solid #f0f0f0", background:i%2===0?"#fff":"#fafafa" }}>
                    <td style={{ padding:"7px 10px", fontFamily:"monospace", fontWeight:500 }}>{row.o}</td>
                    <td style={{ padding:"7px 10px", color:"#555", fontSize:12 }}>{row.s}</td>
                    <td style={{ padding:"7px 10px", color:"#BA7517" }}>{row.t}</td>
                    <td style={{ padding:"7px 10px", color:"#666", fontSize:12 }}>{row.u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ══ EXEMPLES ══ */}
      {sec === "exemples" && (
        <div>
          <h2 style={S.h2}>Exemples de modulations par accord pivot</h2>
          <p style={S.p}>Trois modulations par accord pivot illustrant différentes relations tonales — dominante, sous-dominante, et modulation à la quinte par degrés diatoniques.</p>

          {EXEMPLES_MOD.map(ex => (
            <div key={ex.id} style={{ border:`0.5px solid ${selEx===ex.id?ex.color:"#e5e5e5"}`, borderRadius:10, marginBottom:12, overflow:"hidden", background:selEx===ex.id?ex.bg:"#fff", transition:"all .15s", cursor:"pointer" }}
              onClick={() => setSelEx(selEx===ex.id?null:ex.id)}>
              <div style={{ padding:"14px 16px" }}>
                <div style={{ display:"flex", alignItems:"baseline", gap:10, marginBottom:4 }}>
                  <span style={{ fontSize:15, fontWeight:500, color:selEx===ex.id?ex.color:"#111" }}>
                    {ex.de} → {ex.vers}
                  </span>
                  <span style={{ fontSize:12, padding:"1px 8px", borderRadius:10, background:ex.bg, color:ex.color, border:`0.5px solid ${ex.color}`, fontFamily:"monospace" }}>
                    pivot : {ex.pivot}
                  </span>
                </div>
                <div style={{ fontSize:12, color:"#888", fontStyle:"italic" }}>{ex.roles}</div>
              </div>

              {selEx === ex.id && (
                <div style={{ padding:"0 16px 16px", borderTop:`0.5px solid ${ex.color}20` }}>
                  <p style={{ fontSize:13, color:"#444", lineHeight:1.65, margin:"10px 0 10px" }}>{ex.desc}</p>
                  <div style={{ fontFamily:"monospace", fontSize:13, color:ex.color, letterSpacing:1, marginBottom:10 }}>
                    {ex.prog.join(" → ")}
                  </div>
                  <button
                    onClick={e => { e.stopPropagation(); playProg(ref as React.RefObject<PianoPlayerRef>, ex.progKeys, 1000); }}
                    style={{ fontSize:12, padding:"5px 14px", border:`0.5px solid ${ex.color}`, borderRadius:20, cursor:"pointer", background:"transparent", color:ex.color }}>
                    ▶ Écouter
                  </button>
                </div>
              )}
            </div>
          ))}

          <h3 style={{ fontSize:14, fontWeight:500, margin:"24px 0 8px", color:"#111" }}>Modulation complète avec 6/4 de cadence</h3>
          <div style={{ background:"#fafafa", border:"0.5px solid #e5e5e5", borderRadius:10, padding:"14px 16px", marginBottom:12 }}>
            <div style={{ fontSize:12, color:"#999", marginBottom:6 }}>C → G avec 6/4 de confirmation</div>
            <div style={{ fontFamily:"monospace", fontSize:13, color:"#185FA5", letterSpacing:1, marginBottom:8 }}>
              C – F – G7 – C – Am – D7 – G/D – D7 – G
            </div>
            <div style={{ fontSize:12, color:"#666", lineHeight:1.65, marginBottom:10 }}>
              Am = pivot (VI/C = II/G) → D7 = V de G → G/D = 6/4 de cadence (confirme G) → D7 – G = cadence parfaite.
            </div>
            <button
              onClick={() => playProg(ref as React.RefObject<PianoPlayerRef>, ["C","F","G7","C","Am_pivot","D7","C/G","G7","G"], 950)}
              style={{ fontSize:12, padding:"5px 14px", border:"0.5px solid #185FA5", borderRadius:20, cursor:"pointer", background:"transparent", color:"#185FA5" }}>
              ▶ Écouter
            </button>
          </div>

          <div style={S.info}>
            <strong>Astuce d'analyse :</strong> dans une partition, cherchez la première altération accidentelle qui n'appartient pas à l'armure — c'est souvent la sensible artificielle de la nouvelle tonalité, et donc le signal de la modulation.
          </div>
        </div>
      )}

      {/* ══ QUIZ ══ */}
      {sec === "quiz" && (
        <div>
          <h2 style={S.h2}>{i18n.training}</h2>
          {done ? (
            <div style={{ textAlign:"center", padding:"2rem 0" }}>
              <div style={{ fontSize:32, marginBottom:8 }}>{scr>=9?"🗺️":scr>=7?"🎹":"💪"}</div>
              <div style={{ fontSize:20, fontWeight:500, color:"#111", marginBottom:4 }}>{i18n.t("score")} : {scr} / {QUIZ_COUNT}</div>
              <div style={{ fontSize:14, color:"#666", marginBottom:20 }}>
                {i18n.quizMessage(scr, QUIZ_COUNT)}
              </div>
              <button onClick={reset} style={{ fontSize:13, padding:"8px 20px", border:"0.5px solid #185FA5", borderRadius:20, cursor:"pointer", background:"#E6F1FB", color:"#185FA5" }}>
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

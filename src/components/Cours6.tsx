"use client";

/**
 * Cours6.tsx
 * Harmonia · Niveau 1 · Cours 6 — Construire une harmonisation
 * TODO: i18n — passe dédiée
 * Convention : affichage anglais, dotKeys PianoPlayer français
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import { SATB } from "@/lib/satb-voicings";

interface Section { id: string; label: string; }

const CHORDS = SATB;

function playChord(ref: React.RefObject<PianoPlayerRef>, keys: string[], duration = 1.8) {
  keys.forEach((key, i) => {
    const [note, octStr] = key.split(":");
    setTimeout(() => ref.current?.playNote(note, parseInt(octStr), { duration }), 0);
  });
}

function playProg(ref: React.RefObject<PianoPlayerRef>, names: string[], gap = 1000) {
  names.forEach((name, i) =>
    setTimeout(() => playChord(ref, CHORDS[name] ?? [], 1.6), i * gap)
  );
}

const SECTIONS_IDS = ["tonal","etrangeres","squelette","accomp","quiz"] as const;

const INDICES_TONAL = [
  { icon: "♭#", title: "L'armure",                desc: "Elle indique les tonalités probables — la gamme majeure et sa relative mineure. Deux bémols → Bb majeur ou G mineur." },
  { icon: "↑½", title: "La sensible",             desc: "Un demi-ton ascendant vers une note stable = probable sensible → tonique. La sensible est le VIIe degré harmonique." },
  { icon: "⏸",  title: "Points stables",          desc: "Les notes tenues ou répétées sur les temps forts correspondent souvent au Ier ou VIe degré — pôles d'attraction naturels." },
  { icon: "||", title: "Cadence finale",           desc: "La fin de phrase révèle souvent le vrai centre tonal — le VIIe qui monte vers le Ier, ou un V7 qui résout." },
  { icon: "♯♮", title: "Altérations accidentelles",desc: "Ponctuelles → emprunt probable. Prolongées → possible modulation. La sensible artificielle crée une tonicisation." },
];

const NOTES_ETRANGERES = [
  { name:"Note de passage", abbr:"NP",  color:"#0F6E56", bg:"#E1F5EE", def:"Relie deux notes réelles par mouvement conjoint, sur un temps faible.", exemple:"Dans C–D–E sur C majeur : D est une note de passage entre C et E.", regles:"Toujours par mouvement conjoint. Généralement sur temps faible." },
  { name:"Broderie",        abbr:"Br",  color:"#534AB7", bg:"#EEEDFE", def:"Note étrangère entourée de deux notes identiques — elle quitte et revient sur la même note réelle.", exemple:"C–D–C sur accord C : D est une broderie supérieure de C.", regles:"Mouvement conjoint dans les deux sens. Ornement par excellence." },
  { name:"Retard",          abbr:"Ret", color:"#BA7517", bg:"#FAEEDA", def:"Note prolongée du temps précédent, devenant dissonante sur le nouvel accord, puis résolue.", exemple:"F tenu pendant G7 → F est un retard (4–3) qui descend vers E sur C.", regles:"Préparation → Dissonance → Résolution. Toujours sur temps fort." },
  { name:"Anticipation",    abbr:"Ant", color:"#993C1D", bg:"#FAECE7", def:"Note de l'accord suivant introduite avant que cet accord n'arrive.", exemple:"E joué à la fin du V7 avant que C arrive — E anticipe la tierce de C.", regles:"Généralement sur temps faible. Pas de résolution — c'est déjà la bonne note." },
  { name:"Appoggiature",    abbr:"App", color:"#185FA5", bg:"#E6F1FB", def:"Note étrangère appuyée sur un temps fort, résolue par degrés conjoints.", exemple:"D sur temps fort pendant C majeur → résout sur C ou E.", regles:"Sur temps fort. Résolution conjointe ascendante ou descendante. Très expressive." },
  { name:"Échappée",        abbr:"Éch", color:"#3B6D11", bg:"#EAF3DE", def:"Note étrangère issue d'un mouvement conjoint, résolue par un saut disjoint.", exemple:"C → D (conjoint) → résolution par saut vers B. D est l'échappée.", regles:"Arrivée conjointe, départ disjoint. Plus rare, effet de surprise." },
];

const ACCOMP_TYPES = [
  { name:"Arpège",              color:"#0F6E56", bg:"#E1F5EE", desc:"Dépliage régulier de l'accord — ascendant, descendant ou mixte. Crée une continuité fluide.", usage:"Ballades, nocturnes, accompagnements lyriques. Ex : Clair de Lune.", tension:"Faible à modérée." },
  { name:"Accords brisés",      color:"#534AB7", bg:"#EEEDFE", desc:"Fragments rythmiques irréguliers de l'accord. Donne un souffle intérieur et de l'élasticité.", usage:"Sonates, pièces romantiques.", tension:"Variable selon la densité." },
  { name:"Basse / accord séparés", color:"#BA7517", bg:"#FAEEDA", desc:"Basse sur le temps fort, accord sur les temps faibles — ou inversement.", usage:"Valse (1–2–3), styles populaires, guitare.", tension:"Stable — la basse ancre le rythme." },
  { name:"Comping",             color:"#993C1D", bg:"#FAECE7", desc:"Accords ponctuels sur les contretemps — écriture syncopée, beaucoup de silence.", usage:"Jazz, gospel, funk. L'espace est aussi important que les notes.", tension:"Élevée si syncopes nombreuses." },
  { name:"Contrepoint",         color:"#185FA5", bg:"#E6F1FB", desc:"Chaque voix est un motif autonome mélodiquement. Exige la maîtrise de la conduite de voix.", usage:"Fugues, inventions, chorals de Bach.", tension:"Très élevée — densité polyphonique maximale." },
];

const DEMO_PROGS: Record<string, { chords: string[]; label: string; desc: string }> = {
  fondamental: { chords:["C","F","G7","C"],         label:"I – IV – V7 – I",             desc:"Progression fondamentale T–SD–D–T. Fondamentales à la basse aux deux cadences." },
  renverse:    { chords:["C","C/E","F","G7","C"],   label:"I – I6 – IV – V7 – I",        desc:"I6 = C/E fluidifie la basse : C→E→F→G→C. Ligne mélodique conjoncte ascendante." },
  iivi:        { chords:["Dm7","G7","CMaj7"],        label:"II7 – V7 – I (cadence jazz)", desc:"Dm7 → G7 : notes communes. G7 → CMaj7 : triton F–B résout vers E–C." },
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const ALL_QUESTIONS = [
  // Centre tonal (20)
  { q:"Quelle est la première chose à analyser pour identifier le centre tonal ?", opts:["Le tempo","L'armure","La longueur","Le registre"], a:1, fb:"L'armure indique immédiatement les tonalités probables — la gamme majeure et sa relative mineure. C'est le premier repère de l'analyse tonale." },
  { q:"2 dièses (F# et C#) correspondent à la tonalité de :", opts:["G majeur ou E mineur","D majeur ou B mineur","A majeur ou F# mineur","B♭ majeur ou G mineur"], a:1, fb:"2 dièses = armure de D majeur / B mineur. F# et C# sont les altérations constitutives de ces deux gammes." },
  { q:"La sensible se reconnaît à :", opts:["Un saut de tierce","Un demi-ton ascendant vers une note stable","Une longue tenue","Un saut de quinte"], a:1, fb:"La sensible est le VIIe degré harmonique — elle monte d'un demi-ton vers la tonique. C'est l'attraction mélodique la plus forte de la gamme." },
  { q:"Une note tenue sur un temps fort en début de phrase correspond souvent à :", opts:["La dominante","Le VIIe degré","Le Ier ou VIe degré — pôles de stabilité","Une note étrangère"], a:2, fb:"Les notes stables sur les temps forts correspondent aux degrés I et VI — les pôles toniques. La mélodie s'y repose naturellement." },
  { q:"Une altération accidentelle prolongée sur plusieurs mesures indique :", opts:["Un emprunt ponctuel","Une modulation possible","Une erreur de notation","Un retard"], a:1, fb:"Altération ponctuelle = emprunt. Prolongée = le centre tonal peut avoir changé — signe d'une modulation vers une nouvelle tonalité." },
  { q:"La cadence finale est utile pour identifier le centre tonal car :", opts:["Elle est toujours V7–I","Elle révèle la résolution réelle — le degré I local","Elle utilise des rondes","Elle est toujours en majeur"], a:1, fb:"La cadence finale montre comment la phrase se résout. Le degré I de la cadence est le centre tonal local." },
  { q:"Le rythme harmonique est :", opts:["La vitesse du métronome","La fréquence de changement des accords","Le nombre de notes par mesure","Le type de mesure"], a:1, fb:"Le rythme harmonique est la fréquence à laquelle les accords changent — indépendamment du tempo." },
  { q:"Pourquoi toutes les notes d'une mélodie ne correspondent-elles pas nécessairement à l'accord ?", opts:["Car la mélodie peut être fausse","Car certaines sont des notes étrangères — ornements qui ne font pas partie de l'accord","Car l'accord est toujours renversé","Car les altérations changent tout"], a:1, fb:"La mélodie contient souvent des notes étrangères. Les identifier évite d'empiler des accords inutiles." },
  { q:"Les 'notes réelles' sont :", opts:["Les notes jouées en double","Les notes qui appartiennent à l'accord harmonique en cours","Les notes sans altération","Les notes de basse"], a:1, fb:"Les notes réelles appartiennent à l'accord — elles constituent la structure harmonique. Les autres ornent cette structure." },
  { q:"Un emprunt diffère d'une modulation car :", opts:["L'emprunt utilise des accords renversés","L'emprunt est momentané et ne déplace pas le centre tonal","L'emprunt suit toujours V7–I","L'emprunt utilise le napolitain"], a:1, fb:"Un emprunt est bref. Une modulation installe durablement une nouvelle tonalité — confirmée par une cadence parfaite dans le nouveau centre." },
  { q:"La tonalité de F majeur a combien de bémols ?", opts:["Aucun","Un (B♭)","Deux (B♭, E♭)","Trois"], a:1, fb:"F majeur a un bémol : Si♭ (B♭). C'est l'armure à un bémol — la gamme F G A B♭ C D E F." },
  { q:"La mélodie qui tourne autour de G et monte vers A♭ suggère :", opts:["C majeur","A♭ majeur ou F mineur","G majeur","D mineur"], a:1, fb:"G → A♭ est un demi-ton ascendant : G agit comme sensible de A♭. La tonalité est probablement A♭ majeur ou F mineur (relatif)." },
  { q:"Une tonalité mineure se distingue d'une majeure homonyme dans la mélodie par :", opts:["Son armure uniquement","La présence récurrente du IIIe degré mineur et de la sensible spécifique","Son tempo","Son registre"], a:1, fb:"En mineur, la mélodie gravite autour de la tierce mineure (Eb en C mineur) et de la sensible harmonique (B naturel). Ces notes caractérisent le mode mineur même sans armure." },
  { q:"Quelle mélodie suggère C majeur plutôt que A mineur ?", opts:["Une mélodie qui finit sur A","Une mélodie qui commence et finit sur C, avec des appuis fréquents sur E et G","Une mélodie avec beaucoup de notes graves","Une mélodie en triolets"], a:1, fb:"Si la mélodie s'ancre sur C (tonique), E (tierce) et G (quinte) et termine sur C, la tonalité est C majeur. Si elle s'ancre sur A, c'est A mineur." },
  { q:"Le rythme harmonique d'une ballade est typiquement :", opts:["Un accord par note","Un accord par mesure ou demi-mesure","Un accord par huitième","Aucun accord régulier"], a:1, fb:"Une ballade change d'accord lentement — souvent une fois par mesure. Chaque accord a le temps de s'installer dans l'oreille." },
  { q:"La tonicisation se reconnaît dans la mélodie à :", opts:["Une longue tenue","Une sensible artificielle — demi-ton ascendant vers un degré non-tonique","Un saut de quinte","Un retard"], a:1, fb:"Une tonicisation crée une sensible temporaire vers un accord non-tonique. Ex : C# (sensible de D) suivi de D dans une mélodie en G majeur = tonicisation de Dm." },
  { q:"Si la mélodie contient un F# dans une tonalité à 0 dièse, c'est probablement :", opts:["Une erreur","Une tonicisation de G (dont F# est la sensible) ou un emprunt","Une note de broderie","La fondamentale d'un accord"], a:1, fb:"En C majeur, F# est hors gamme. C'est probablement la sensible de G (V), créant une tonicisation V/V — ou un emprunt. La présence de G qui suit confirme la tonicisation." },
  { q:"Qu'est-ce qui différencie les 'points stables' des notes de passage dans une mélodie ?", opts:["Leur hauteur","Les points stables sont sur les temps forts et les degrés I/VI — les notes de passage relient des notes stables","Leur durée uniquement","Leur registre"], a:1, fb:"Points stables : temps forts, longues durées, degrés I et VI. Notes de passage : temps faibles, durées courtes, relient deux notes réelles. La position métrique est un indice clé." },
  { q:"Harmoniser chaque note avec un accord différent crée :", opts:["Une belle harmonie riche","Un rythme harmonique trop rapide qui désOriente l'oreille","Plus de clarté tonale","Un accompagnement plus facile à écrire"], a:1, fb:"Trop de changements d'accords créent du chaos harmonique. La mélodie contient des notes étrangères qui n'exigent pas de nouvel accord — l'ignorer surcharge l'harmonisation." },
  { q:"En G majeur, la sensible est :", opts:["F naturel","F# (Fa dièse)","G","A"], a:1, fb:"G majeur harmonique élève le VIIe degré : F naturel devient F#. F# est la sensible de G majeur — elle monte par demi-ton vers G (la tonique)." },

  // Notes étrangères (20)
  { q:"Une note de passage relie deux notes réelles :", opts:["Par un saut de tierce","Par mouvement conjoint sur un temps faible","Par un saut de quinte","Par demi-ton chromatique toujours"], a:1, fb:"La note de passage est conjointe (seconde) et généralement sur temps faible. Elle crée une liaison mélodique fluide entre deux notes réelles." },
  { q:"Une broderie se définit comme :", opts:["Une note qui quitte l'accord par saut","Une note entourée de deux notes identiques — elle part et revient sur la même note réelle","Une note qui anticipe l'accord suivant","Une note prolongée"], a:1, fb:"La broderie quitte une note réelle par un demi-ton ou un ton, puis y revient. C'est le plus simple des ornements." },
  { q:"Le retard se place sur :", opts:["Un temps faible","Un temps fort — préparé, dissonant, puis résolu","N'importe quel temps","Toujours avant la barre de mesure"], a:1, fb:"Le retard arrive sur un temps fort — c'est ce qui lui donne sa puissance. Préparé → dissonant → résolu." },
  { q:"Dans V7 → I, si F est tenu pendant l'accord de C, c'est :", opts:["Une anticipation","Un retard 4–3 — F descend vers E","Une broderie","Une note de passage"], a:1, fb:"F est la quarte qui retarde la tierce E de C. Retard classique 4→3 sur la tonique." },
  { q:"L'anticipation est :", opts:["Une note prolongée d'un accord précédent","La note de l'accord suivant introduite en avance","Une note étrangère résolue par saut","Toujours sur un temps fort"], a:1, fb:"L'anticipation joue une note de l'accord suivant avant qu'il arrive. Elle n'a pas besoin de résolution — c'est déjà la bonne note." },
  { q:"L'appoggiature diffère du retard car :", opts:["Elle n'est pas préparée — elle arrive sur un temps fort sans avoir été entendue avant","Elle est sur temps faible","Elle n'est jamais dissonante","Elle ne se résout pas"], a:0, fb:"Le retard est préparé. L'appoggiature n'est pas préparée — elle arrive brusquement sur un temps fort et se résout conjointement. Plus dramatique." },
  { q:"L'échappée se caractérise par :", opts:["Arrivée par saut, résolution conjointe","Arrivée conjointe, résolution par saut (disjoint)","Deux mouvements conjoints","Deux sauts"], a:1, fb:"L'échappée arrive conjointement puis s'échappe par un saut. Son effet de surprise vient de cette résolution inattendue." },
  { q:"Identifier les notes étrangères sert à :", opts:["Trouver des erreurs dans la mélodie","Ne pas mettre un accord sous chaque note — simplifier l'harmonisation","Transposer la mélodie","Identifier le mode"], a:1, fb:"Les notes étrangères ornent l'accord en cours sans en avoir besoin d'un propre. Les identifier évite un rythme harmonique trop rapide." },
  { q:"Dans C–D–E–D–C sur accord C majeur, D est :", opts:["Une note réelle","Note de passage (C→D→E) puis note de passage descendante (E→D→C)","Toujours une erreur","Une appoggiature"], a:1, fb:"D entre C et E = note de passage ascendante. D entre E et C = note de passage descendante. Dans les deux cas, D orne la structure C–E–C." },
  { q:"Un retard typique dans une cadence V–I est :", opts:["La quinte qui reste","La septième qui monte","La quarte qui descend vers la tierce (4–3)","La fondamentale qui saute"], a:2, fb:"Le retard 4–3 est classique sur la tonique : F (quarte) → E (tierce) sur C. Un des retards les plus fréquents de la musique tonale." },
  { q:"Parmi ces exemples, lequel est une note de passage ?", opts:["E tenu pendant C→G","D entre C et E sur accord C","G joué avant G7","B qui descend vers C sur G7→C"], a:1, fb:"D entre C et E = note de passage conjointe ascendante. Les autres sont : tenue (note réelle), anticipation, et sensible (note réelle de G7)." },
  { q:"Pourquoi les retards sont-ils sur les temps forts ?", opts:["Par convention arbitraire","Le temps fort amplifie la dissonance — la résolution est d'autant plus satisfaisante","Les temps faibles sont réservés aux accords","C'est plus facile à noter"], a:1, fb:"Sur un temps fort, la dissonance est plus perceptible. La résolution qui suit est plus satisfaisante. L'effet expressif du retard dépend de cette position métrique." },
  { q:"La mélodie C–D–E–G–E–D–C sur accord C : quelles sont les notes réelles ?", opts:["Toutes","C, E et G (la triade C) — D est note de passage","C et D seulement","G et D seulement"], a:1, fb:"C–E–G = triade C majeur. D apparaît entre C et E (NP ascendante) et entre E et C (NP descendante). D ne requiert pas de changement d'accord." },
  { q:"Dans G7, la note B pendant un accord de G7 est :", opts:["Une note étrangère","Une note réelle — B est la tierce de G7","Une broderie","Un retard"], a:1, fb:"G7 = G–B–D–F. B est la tierce de G7 — c'est une note réelle, pas étrangère." },
  { q:"L'appoggiature est souvent sur les notes :", opts:["Graves de la mélodie","Hautes de la mélodie et sur les temps forts — elle donne une accentuation expressive","Toujours chromatiques","Toujours dans l'accord"], a:1, fb:"L'appoggiature est une note expressive placée sur un temps fort — souvent sur un sommet mélodique. Son arrivée non préparée et sa résolution conjointe lui donnent son caractère pathétique." },
  { q:"Dans la mélodie E–F–G–A sur accord C majeur, F est :", opts:["Note réelle","Note de passage entre E et G","Appoggiature","Retard"], a:1, fb:"E et G sont des notes réelles de C majeur. F est entre elles — note de passage conjoncte ascendante. Pas besoin d'un nouvel accord." },
  { q:"La différence entre broderie et note de passage est :", opts:["La broderie revient sur sa note de départ ; la note de passage va vers une note différente","Elles sont identiques","La broderie est sur temps fort","La note de passage utilise des sauts"], a:0, fb:"Broderie : part d'une note et revient sur la même. Note de passage : part d'une note et continue vers une note différente. La broderie oscille ; la note de passage avance." },
  { q:"Quel ornement est préparé (entendu dans l'accord précédent) ?", opts:["L'appoggiature","L'anticipation","Le retard","L'échappée"], a:2, fb:"Le retard est la seule note étrangère préparée — elle est entendue dans l'accord précédent avant de devenir dissonante. L'appoggiature arrive sans préparation." },
  { q:"Une mélodie avec de nombreuses notes étrangères nécessite :", opts:["Beaucoup d'accords différents","Un rythme harmonique plus lent — les ornements n'exigent pas de nouveaux accords","Un tempo plus rapide","Des accords renversés uniquement"], a:1, fb:"Une mélodie ornée peut reposer sur très peu d'accords. Les notes étrangères enrichissent la ligne sans changer l'harmonie — d'où l'importance de les identifier avant d'harmoniser." },
  { q:"L'anticipation est généralement sur :", opts:["Le temps fort","Le temps faible (avant la barre ou le changement d'accord)","La dominante","Le VIe degré"], a:1, fb:"L'anticipation précède l'accord — elle est sur le temps faible juste avant le changement. Elle crée un effet de hâte légère vers la nouvelle harmonie." },

  // Squelette harmonique (25)
  { q:"Le squelette harmonique est :", opts:["La mélodie seule","L'organisation à 3–4 voix qui donne corps à la progression","La ligne de basse uniquement","L'accompagnement rythmique"], a:1, fb:"Le squelette harmonique est la réalisation à plusieurs voix de la progression — avant tout choix stylistique. Il teste la solidité de la structure harmonique." },
  { q:"La ligne de basse doit être solide aux cadences car :", opts:["Elle est toujours doublée","Les cadences parfaites exigent V et I à l'état fondamental","Elle joue toujours la quinte","La basse est toujours octavée"], a:1, fb:"La cadence parfaite (V→I) exige les deux accords à l'état fondamental. La basse joue les fondamentales — G et C — pour confirmer la résolution sans ambiguïté." },
  { q:"Les renversements à la basse servent à :", opts:["Rendre l'accord instable","Créer une ligne de basse mélodique et conjointe","Doubler la mélodie","Éviter les dissonances"], a:1, fb:"Un renversement place une tierce ou quinte à la basse — permettant des lignes de basse conjointes et mélodiques plutôt que des sauts entre fondamentales." },
  { q:"Les voix intermédiaires (alto et ténor) ont pour rôle de :", opts:["Doubler la mélodie","Compléter l'accord et assurer la continuité du tissu polyphonique","Créer des tensions","Jouer en solo"], a:1, fb:"Alto et ténor complètent l'accord — tierce, quinte, septième selon le contexte. Leur mouvement doit être fluide et préférablement conjoint." },
  { q:"Le mouvement préféré entre basse et voix supérieures est :", opts:["Parallèle","Contraire — une voix monte, l'autre descend","Oblique toujours","Toujours en tierce parallèle"], a:1, fb:"Le mouvement contraire maximise l'indépendance polyphonique et évite naturellement les parallèles. C'est le mouvement le plus équilibré." },
  { q:"La règle de doublure dans un accord à l'état fondamental est :", opts:["Doubler la tierce","Doubler la quinte","Doubler la fondamentale (sauf exceptions)","Doubler la septième"], a:2, fb:"La fondamentale est la note la plus stable — on la double par défaut. Exception : VIIe degré → doubler sa tierce (jamais la sensible)." },
  { q:"Dans I6 (premier renversement de I), la basse joue :", opts:["La fondamentale","La tierce","La quinte","La septième"], a:1, fb:"I6 = premier renversement : la tierce est à la basse. En C majeur, C/E a E (Mi) à la basse." },
  { q:"Les notes communes entre deux accords doivent :", opts:["Être évitées","Être conservées dans la même voix — elles simplifient la conduite de voix","Monter d'une seconde","Être doublées"], a:1, fb:"Conserver les notes communes réduit les déplacements. Ex : C → Am : C et E sont communes. Les garder sur place fluidifie l'écriture." },
  { q:"Quel mouvement est interdit entre toutes les voix ?", opts:["Les mouvements conjoints","Les quintes et octaves parallèles","Le mouvement contraire","Les mouvements disjoints"], a:1, fb:"Les quintes et octaves parallèles annulent l'indépendance des voix — elles donnent l'illusion que deux voix n'en font qu'une. Interdit en écriture stricte." },
  { q:"La sensible (VIIe degré) doit obligatoirement :", opts:["Descendre vers le VIe degré","Monter vers la tonique par demi-ton","Rester immobile","Sauter vers la quinte"], a:1, fb:"La sensible monte obligatoirement vers la tonique — c'est la règle absolue. En C majeur : B → C. Ce demi-ton ascendant est l'attraction mélodique fondamentale." },
  { q:"La septième de dominante (F dans G7) doit :", opts:["Monter vers G","Descendre vers E (tierce de I) par degré conjoint","Rester sur F","Sauter vers C"], a:1, fb:"La septième de dominante descend conjointement vers la tierce de l'accord suivant. F → E sur G7 → C. Règle absolue : la septième de dominante descend." },
  { q:"Quelle est la règle concernant l'espacement entre soprano et alto ?", opts:["Pas plus de deux octaves","Pas plus d'une octave","Exactement une tierce","Pas de règle"], a:1, fb:"Entre soprano et alto, et entre alto et ténor : maximum une octave. Entre ténor et basse : jusqu'à deux octaves autorisées." },
  { q:"Le principe 'moins de mouvements = meilleure écriture' signifie :", opts:["Écrire le moins de notes possible","Utiliser les notes communes et les mouvements conjoints — ne bouger que si nécessaire","Ne jamais utiliser de renversements","Toutes les voix restent immobiles"], a:1, fb:"Une bonne conduite de voix conserve les notes communes, avance par degrés conjoints et ne bouge que lorsque c'est musicalement nécessaire." },
  { q:"Dans I6/4 (deuxième renversement de I), la basse joue :", opts:["La fondamentale","La tierce","La quinte","La septième"], a:2, fb:"Le 2e renversement (6/4) place la quinte à la basse. C/G en C majeur : G (Sol) à la basse. C'est le 6/4 de cadence — il prépare la dominante." },
  { q:"La doublure de la septième est :", opts:["Obligatoire","Interdite — la septième ne se double jamais","Recommandée","Possible en mouvement contraire"], a:1, fb:"La septième ne se double jamais — elle doit résoudre conjointement vers l'accord suivant. Deux septièmes qui résoudrait vers deux notes identiques créerait des octaves parallèles." },
  { q:"Quel croisement est interdit en écriture à 4 voix ?", opts:["L'alto qui dépasse momentanément le ténor","Aucun — les voix peuvent se croiser librement","Les voix ne doivent jamais se croiser — le soprano reste toujours au-dessus de l'alto, etc.","Seule la basse peut dépasser le ténor"], a:2, fb:"Les voix ne se croisent pas : S > A > T > B en tout temps. Un croisement efface l'indépendance des voix et crée de la confusion polyphonique." },
  { q:"Un chevauchement de voix est :", opts:["Quand deux voix jouent la même note","Quand une voix dépasse la note que la voix adjacente vient de quitter","Quand les voix jouent en octave","Quand une voix saute d'une octave"], a:1, fb:"Le chevauchement : A joue une note plus haute que le S vient de quitter (ou inversement). Il crée une confusion sur l'identité des voix — interdit en écriture stricte." },
  { q:"La progression C–Am–F–G est fonctionnellement :", opts:["T–T–SD–D","T–D–SD–T","T–T–SD–T","SD–D–T–D"], a:0, fb:"C = tonique (I), Am = tonique (VI), F = sous-dominante (IV), G = dominante (V). C–Am–F–G = T–T–SD–D — une progression très courante en pop." },
  { q:"Pourquoi la basse et la mélodie ne doivent-elles pas souvent se confondre ?", opts:["Pour des raisons de registre","Car cela rigidifie le discours — on perd la richesse du dialogue entre les deux extrêmes","Car c'est interdit","Car elles jouent toujours en octaves"], a:1, fb:"Quand basse et mélodie jouent les mêmes notes, on perd la richesse du dialogue entre les registres extrêmes. Un contrechant discret de la basse est plus vivant qu'un doublement." },
  { q:"Dans la progression II–V–I, quelles notes de Dm7 se conservent dans G7 ?", opts:["Aucune","F et A — F est dans G7, A n'est pas dans G7 mais peut rester","F et C — F est dans G7 (septième) et C peut descendre vers B","D et A"], a:2, fb:"Dm7 = D–F–A–C. G7 = G–B–D–F. Notes communes : D et F. F reste comme septième de G7. D reste comme quinte de G7. A et C bougent vers G et B." },
  { q:"Une cadence parfaite exige :", opts:["Un accord renversé au moins","V et I à l'état fondamental (fondamentales à la basse)","Le VIIe degré","Un accord de sixte"], a:1, fb:"La cadence parfaite requiert V et I à l'état fondamental — les fondamentales G et C à la basse. Tout renversement la transforme en cadence imparfaite." },
  { q:"Le 6/4 de cadence (I6/4) est utilisé :", opts:["À la place de la dominante","Juste avant la dominante — il prépare V7 comme une double appoggiature","Comme tonique finale","À l'ouverture de chaque phrase"], a:1, fb:"Le 6/4 de cadence (C/G) précède G7 — ses notes G et E sont la quinte et la tierce de G7. Il agit comme une double appoggiature ascendante de la quinte et de la tierce de la dominante." },
  { q:"La tessiture du soprano en écriture SATB est :", opts:["G3 à C5","C4 à G5","C3 à G4","E2 à C4"], a:1, fb:"Soprano : C4 (Do médium) à G5. Alto : G3 à C5. Ténor : C3 à G4. Basse : E2 à C4. Ces tessitures garantissent le confort vocal et l'équilibre acoustique." },
  { q:"Qu'est-ce qu'une quinte directe (ou quinte de la battue) ?", opts:["Deux voix formant une quinte par mouvement conjoint","Deux voix extérieures (S et B) atteignant une quinte par mouvement direct (même direction)","Deux quintes consécutives","Une quinte diminuée"], a:1, fb:"La quinte directe : soprano et basse bougent dans la même direction et arrivent sur une quinte. C'est interdit entre les voix extrêmes — toléré uniquement si le soprano avance par degrés conjoints." },
  { q:"La progression I–V6–I6–IV–V7–I utilise des renversements pour :", opts:["Rendre les accords instables","Créer une ligne de basse ascendante conjointe : C–B–C–F–G–C","Éviter la dominante","Doubler la mélodie"], a:1, fb:"V6 = G/B, I6 = C/E. Basse : C→B→C→F→G→C — ligne mélodique variée et intéressante grâce aux renversements." },

  // Accompagnement (15)
  { q:"L'accompagnement est construit à partir de :", opts:["Rien — il est improvisé librement","Le squelette harmonique, dont il est la mise en forme expressive","La mélodie uniquement","Le rythme uniquement"], a:1, fb:"L'accompagnement s'appuie sur le squelette harmonique — il en est la traduction stylistique. Il soutient et amplifie la courbe de tension musicale." },
  { q:"L'arpège est caractérisé par :", opts:["Des accords plaqués simultanément","Le dépliage régulier des notes de l'accord dans le temps","Des syncopes rythmiques","Des contrepoints indépendants"], a:1, fb:"L'arpège déploie les notes de l'accord dans le temps — plutôt que simultanément. Il crée une continuité fluide caractéristique des ballades et nocturnes." },
  { q:"Le comping est issu du :", opts:["Baroque","Classique viennois","Jazz — accords ponctuels sur les contretemps avec beaucoup de silence","Romantisme"], a:2, fb:"Le comping est une technique jazz — accords courts, syncopés, avec du silence expressif. L'espace entre les accords est aussi important que les accords eux-mêmes." },
  { q:"Quel paramètre augmente la tension dans un accompagnement ?", opts:["Moins de notes","Un tempo plus lent","Plus de densité — plus de notes et rythmes plus rapides","Un ambitus serré"], a:2, fb:"La tension augmente avec la densité — plus de notes par mesure, syncopes, rythme harmonique rapide, ambitus large." },
  { q:"L'ambitus d'un accompagnement désigne :", opts:["Le nombre de voix","L'écart entre la note la plus grave et la note la plus aiguë","Le registre moyen","La durée de chaque note"], a:1, fb:"L'ambitus est l'étendue de l'accompagnement. Large = tension dramatique. Serré = compression dynamique et atmosphère intime." },
  { q:"Les notes étrangères dans l'accompagnement :", opts:["Affaiblissent l'harmonie","Créent de l'intensité — retards, appoggiatures ajoutent des dissonances expressives résolues","Doivent être évitées","N'ont aucun effet"], a:1, fb:"Les notes étrangères enrichissent l'accompagnement — un retard ou une appoggiature crée une micro-tension qui se résout, ajoutant de l'expression à chaque accord." },
  { q:"Le style basse–accord séparé est typique de :", opts:["La fugue baroque","La valse — basse sur 1, accord sur 2 et 3","Le nocturne romantique","La toccata"], a:1, fb:"La valse utilise basse(1)–accord(2)–accord(3). Ce pattern ancre le premier temps et crée le balancement caractéristique." },
  { q:"Un accompagnement en contrepoint exige :", opts:["Peu de connaissance en harmonie","La maîtrise de la conduite de voix — chaque ligne est mélodiquement autonome","Uniquement des accords plaqués","L'improvisation"], a:1, fb:"Le contrepoint traite chaque voix comme une ligne indépendante. C'est la forme la plus complexe — elle exige une maîtrise totale de la conduite de voix." },
  { q:"Un bon accompagnement ne contredit jamais :", opts:["Le tempo","La courbe de tension musicale de la mélodie","La tonalité","Le registre du chanteur"], a:1, fb:"L'accompagnement doit être cohérent avec la dynamique de tension de la mélodie — il l'annonce, l'accompagne ou la prolonge." },
  { q:"La répétition d'un motif dans l'accompagnement crée :", opts:["De la tension","De la stabilité — la répétition ancre et rassure l'oreille","De la surprise","Du désordre"], a:1, fb:"La répétition d'un motif crée de la stabilité — l'oreille reconnaît et anticipe. La variation du motif crée de la tension." },
  { q:"Un accompagnement qui 's'intensifie' peut utiliser :", opts:["Uniquement plus de tempo","Plus de notes, ambitus large, notes étrangères expressives, rythme harmonique rapide","Moins de voix","Des accords plus simples"], a:1, fb:"L'intensification combine plusieurs paramètres : densité, ambitus, rythme harmonique, notes expressives. Chacun contribue à la tension générale." },
  { q:"Quel type d'accompagnement Bach utilise-t-il dans ses chorals ?", opts:["Arpèges romantiques","Contrepoint strict à 4 voix (S, A, T, B)","Comping jazz","Accords brisés"], a:1, fb:"Les chorals de Bach sont le modèle canonique — chaque voix (soprano, alto, ténor, basse) a son propre parcours mélodique logique et chantable." },
  { q:"La mélodie 'suggère' une harmonisation quand elle :", opts:["Est très grave","Contient des arpèges d'accords ou des lignes fortement tonales","N'a pas d'armure","Est chromatique"], a:1, fb:"Une mélodie qui arpège une triade 'dessine' l'accord — la progression est évidente. Ces 'cadeaux harmoniques' rendent l'harmonisation naturelle." },
  { q:"Le mouvement conjoint dans les voix intérieures est préféré car :", opts:["Il est plus rapide à écrire","Il est plus chantable et réduit les risques de parallèles","Il sonne plus fort","Il évite les doublures"], a:1, fb:"Les mouvements conjoints sont les plus naturels vocalement. Ils minimisent les sauts risqués et réduisent les risques de quintes/octaves parallèles." },
  { q:"Les 3 étapes de l'harmonisation sont :", opts:["Mélodie / Basse / Accords","Centre tonal + notes étrangères / Squelette harmonique / Accompagnement","Accords / Rythme / Dynamique","Analyse / Écriture / Correction"], a:1, fb:"(1) Identifier le centre tonal et les notes étrangères. (2) Construire le squelette harmonique à 3–4 voix. (3) Écrire l'accompagnement expressif." },

  // Synthèse (12)
  { q:"La première étape d'une harmonisation est :", opts:["Écrire la ligne de basse","Identifier le centre tonal et le rythme harmonique","Choisir les accords","Écrire l'accompagnement"], a:1, fb:"Avant de choisir les accords, il faut identifier la tonalité et comprendre le rythme harmonique — où les accords changent, quelles notes sont réelles ou étrangères." },
  { q:"La vérification fonctionnelle d'une harmonisation s'assure que :", opts:["Tous les accords sont majeurs","Les fonctions T–SD–D–T s'enchaînent logiquement et mènent vers des cadences claires","Aucune voix ne croise","Les renversements sont évités"], a:1, fb:"Vérification fonctionnelle : les fonctions s'enchaînent (SD→D→T), les cadences sont présentes et bien marquées, la tension progresse logiquement." },
  { q:"Pourquoi dit-on qu'il n'existe pas de 'solution parfaite' en harmonisation ?", opts:["Car la théorie est incomplète","Car l'harmonisation est un art — plusieurs harmonisations peuvent être bonnes pour une même mélodie","Car les règles changent","Car la mélodie prime toujours"], a:1, fb:"L'harmonisation est créative, pas mécanique. Pour une même mélodie, plusieurs progressions peuvent être musicalement valides." },
  { q:"La démarche pour proposer des accords candidats est :", opts:["Choisir au hasard","Repérer les notes réelles, chercher les accords les contenant, vérifier la logique fonctionnelle","Toujours I–IV–V–I","Toujours commencer par la dominante"], a:1, fb:"(1) Identifier les notes réelles. (2) Lister les accords diatoniques les contenant. (3) Vérifier T–SD–D–T. (4) Choisir l'accord le plus naturel." },
  { q:"La progression Am–Dm–G7–C est fonctionnellement :", opts:["T–T–D–T","T–SD–D–T","SD–D–T–T","D–T–SD–T"], a:1, fb:"Am = tonique (VI), Dm = sous-dominante (II), G7 = dominante (V), C = tonique (I). T–SD–D–T — le cycle fonctionnel fondamental." },
  { q:"Dans C/G (2e renversement), la basse joue :", opts:["C","E","G","B"], a:2, fb:"C/G = accord de C majeur avec G à la basse. 2e renversement : la quinte est à la basse." },
  { q:"Quel accord de C majeur contient le triton F–B ?", opts:["C","F","G7","Am"], a:2, fb:"G7 = G–B–D–F. Il contient B et F — le triton fonctionnel de C. C'est la dominante qui pousse vers C." },
  { q:"Si la mélodie contient C# dans une tonalité à 0 dièse, c'est probablement :", opts:["Une erreur","Une tonicisation de D ou un emprunt — C# est la sensible de D","Une note de broderie","La fondamentale d'un accord"], a:1, fb:"En C majeur, C# est hors gamme. C'est probablement la sensible de D (V/V) — tonicisation ou emprunt. La présence de D qui suit confirme." },
  { q:"Pour harmoniser E–F–G–A sur accord G majeur, F est :", opts:["Note réelle","Note de passage entre E et G — E et G sont dans G, F les relie","Appoggiature","Retard"], a:1, fb:"G majeur : G–B–D. Mais dans ce contexte avec E et G comme notes réelles (E = 6e, G = fondamentale), F est note de passage conjoncte entre E et G." },
  { q:"La note A dans la mélodie, pendant l'accord de F (Fa majeur), est :", opts:["Une note étrangère","Une note réelle — A est la tierce de F","Une broderie","Un retard"], a:1, fb:"F majeur = F–A–C. A est la tierce de F — c'est une note réelle de l'accord. Pas une note étrangère." },
  { q:"La progression I–IV–V7–I en C est :", opts:["C–F–G7–C","C–G–F–C","C–Dm–G7–C","C–Am–G7–C"], a:0, fb:"I = C, IV = F, V7 = G7, I = C. La progression fondamentale T–SD–D–T en C majeur : C–F–G7–C." },
  { q:"Un accompagnement de type 'arpège' convient particulièrement à :", opts:["Une fugue baroque à tempo vif","Une ballade lyrique ou un nocturne — il crée fluidité et continuité","Un standard de jazz moderne","Une fanfare militaire"], a:1, fb:"L'arpège est le style d'accompagnement des ballades et nocturnes — Chopin, Schubert, Brahms. Sa continuité fluide soutient les mélodies longues et chantantes." },
];

const QUIZ_COUNT = 10;

const S = {
  wrap:  { fontFamily: "var(--font-sans, system-ui)", maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" } as React.CSSProperties,
  hdr:   { padding: "1.5rem 0 1rem", borderBottom: "0.5px solid #e5e5e5", marginBottom: "1.25rem" } as React.CSSProperties,
  badge: { display: "inline-block", background: "#EAF3DE", color: "#3B6D11", fontSize: 11, fontWeight: 500, padding: "2px 10px", borderRadius: 20, marginBottom: 6 } as React.CSSProperties,
  h1:    { fontSize: 26, fontWeight: 500, color: "#111", margin: 0 } as React.CSSProperties,
  sub:   { fontSize: 14, color: "#666", marginTop: 4, lineHeight: 1.6 } as React.CSSProperties,
  nav:   { display: "flex", gap: 6, flexWrap: "wrap" as const, marginBottom: "1.5rem" },
  pill:  (a: boolean): React.CSSProperties => ({ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${a?"#333":"#ddd"}`, borderRadius: 20, cursor: "pointer", background: a?"#111":"transparent", color: a?"#fff":"#666", transition: "all .15s" }),
  h2:    { fontSize: 17, fontWeight: 500, color: "#111", marginBottom: 8 } as React.CSSProperties,
  p:     { fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: "1rem" } as React.CSSProperties,
  info:  { borderLeft: "2px solid #185FA5", padding: "8px 14px", background: "#E6F1FB", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#0C447C", lineHeight: 1.6 } as React.CSSProperties,
  warn:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
  tip:   { borderLeft: "2px solid #0F6E56", padding: "8px 14px", background: "#E1F5EE", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#085041", lineHeight: 1.6 } as React.CSSProperties,
};

export default function Cours6() {
  const [sec,  setSec]  = useState("tonal");
  const i18n = useCoursI18n("cours6");
  const [si,   setSi]   = useState<number|null>(null);
  const [se,   setSe]   = useState<number|null>(null);
  const [sa,   setSa]   = useState<number|null>(null);
  const [sp,   setSp]   = useState<string|null>(null);

  const [qs,   setQs]   = useState(() => shuffle(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [qi,   setQi]   = useState(0);
  const [scr,  setScr]  = useState(0);
  const [ans,  setAns]  = useState(false);
  const [ch,   setCh]   = useState<number|null>(null);
  const [done, setDone] = useState(false);

  const ref = useRef<PianoPlayerRef>(null);

  const answer = (i: number) => { if (ans) return; setCh(i); setAns(true); if (i === qs[qi].a) setScr(s => s+1); };
  const next   = () => { if (qi+1 >= QUIZ_COUNT) setDone(true); else { setQi(i=>i+1); setAns(false); setCh(null); } };
  const reset  = () => { setQs(shuffle(ALL_QUESTIONS).slice(0,QUIZ_COUNT)); setQi(0); setScr(0); setAns(false); setCh(null); setDone(false); };

  return (
    <div style={S.wrap}>
      <div style={{ position:"absolute", opacity:0, pointerEvents:"none", height:0, overflow:"hidden" }}>
        <PianoPlayer ref={ref} octaves={3} startOctave={2} showLabels={false} />
      </div>

      <div style={S.hdr}>
        <span style={S.badge}>{i18n.badge}</span>
        <h1 style={S.h1}>{i18n.title}</h1>
        <p style={S.sub}>De la mélodie à l'accord — identifier le centre tonal, distinguer les notes étrangères, bâtir le squelette harmonique et choisir l'accompagnement.</p>
      </div>

      <nav style={S.nav}>
        {SECTIONS_IDS.map(id => <button key={id} style={S.pill(sec===id)} onClick={() => setSec(id)}>{i18n.sectionLabel(id)}</button>)}
      </nav>

      {/* ══ CENTRE TONAL ══ */}
      {sec === "tonal" && (
        <div>
          <h2 style={S.h2}>Identifier le centre tonal</h2>
          <p style={S.p}>Avant de choisir un seul accord, la première question est : <em>dans quel paysage tonal la mélodie évolue-t-elle ?</em> La tonalité est une force d'attraction — la mélodie montre ses préférences, ses appuis, ses pôles de repos. Plusieurs indices permettent de les repérer.</p>
          <div style={S.info}>Il n'existe souvent pas de certitude absolue. L'harmonisation est un art d'interprétation : on propose la lecture la plus cohérente et naturelle à l'oreille.</div>
          <p style={{ fontSize:13, color:"#888", marginBottom:12 }}>Cliquez sur un indice pour en savoir plus.</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(130px, 1fr))", gap:8, marginBottom:16 }}>
            {INDICES_TONAL.map((ind, i) => (
              <div key={ind.title} onClick={() => setSi(si===i?null:i)} style={{ border:`0.5px solid ${si===i?"#185FA5":"#e5e5e5"}`, borderRadius:10, padding:"12px 10px", textAlign:"center", cursor:"pointer", background:si===i?"#E6F1FB":"#fff", transition:"all .15s" }}>
                <div style={{ fontSize:22, marginBottom:6 }}>{ind.icon}</div>
                <div style={{ fontSize:12, fontWeight:500, color:"#111" }}>{ind.title}</div>
              </div>
            ))}
          </div>
          {si !== null && (
            <div style={{ border:"0.5px solid #185FA5", borderRadius:10, padding:"14px 16px", background:"#E6F1FB", marginBottom:16 }}>
              <div style={{ fontSize:14, fontWeight:500, color:"#185FA5", marginBottom:6 }}>{INDICES_TONAL[si].title}</div>
              <p style={{ fontSize:13, color:"#0C447C", lineHeight:1.65, margin:0 }}>{INDICES_TONAL[si].desc}</p>
            </div>
          )}
          <h3 style={{ fontSize:14, fontWeight:500, margin:"20px 0 8px", color:"#111" }}>Les 5 étapes de l'harmonisation</h3>
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:16 }}>
            {[
              { n:"1", t:"Identifier le centre tonal", d:"Armure, sensible, points stables, cadence finale, altérations accidentelles." },
              { n:"2", t:"Repérer les notes réelles", d:"Isoler la structure harmonique des ornements — notes de passage, broderies, retards, etc." },
              { n:"3", t:"Proposer des accords candidats", d:"Chercher les accords diatoniques contenant les notes réelles. Vérifier la logique T–SD–D–T." },
              { n:"4", t:"Construire le squelette", d:"Réaliser la progression à 3–4 voix en respectant la conduite de voix." },
              { n:"5", t:"Écrire l'accompagnement", d:"Choisir le style qui épouse la courbe de tension de la mélodie." },
            ].map(step => (
              <div key={step.n} style={{ display:"flex", gap:12, alignItems:"flex-start", border:"0.5px solid #e5e5e5", borderRadius:8, padding:"10px 14px", background:"#fafafa" }}>
                <div style={{ minWidth:26, height:26, borderRadius:"50%", background:"#3B6D11", color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:600, flexShrink:0 }}>{step.n}</div>
                <div>
                  <div style={{ fontSize:13, fontWeight:500, color:"#111", marginBottom:2 }}>{step.t}</div>
                  <div style={{ fontSize:12, color:"#666" }}>{step.d}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={S.warn}><strong>Erreur fréquente :</strong> vouloir harmoniser chaque note avec un accord différent. Résultat : un rythme harmonique chaotique. La plupart des notes sont des notes étrangères — elles n'ont pas besoin d'un accord propre.</div>
        </div>
      )}

      {/* ══ NOTES ÉTRANGÈRES ══ */}
      {sec === "etrangeres" && (
        <div>
          <h2 style={S.h2}>Notes réelles et notes étrangères</h2>
          <p style={S.p}>Une mélodie contient souvent des notes qui <em>ornent</em> l'accord sans en faire partie — ce sont les <strong>notes étrangères</strong>. Les identifier est essentiel pour harmoniser sans surabondance d'accords.</p>
          <div style={S.tip}><strong>Règle d'or :</strong> si une note peut s'expliquer comme une note étrangère par rapport à un accord voisin, pas besoin d'un nouvel accord. On garde l'accord en cours.</div>
          <p style={{ fontSize:13, color:"#888", marginBottom:12, marginTop:16 }}>Cliquez sur une catégorie pour voir sa définition et son exemple.</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:8, marginBottom:12 }}>
            {NOTES_ETRANGERES.map((ne, i) => (
              <div key={ne.abbr} onClick={() => setSe(se===i?null:i)} style={{ border:`0.5px solid ${se===i?ne.color:"#e5e5e5"}`, borderRadius:8, padding:"10px 12px", cursor:"pointer", background:se===i?ne.bg:"#fff", transition:"all .15s", textAlign:"center" }}>
                <div style={{ fontSize:18, fontWeight:700, color:ne.color, fontFamily:"monospace" }}>{ne.abbr}</div>
                <div style={{ fontSize:12, color:"#555", marginTop:4 }}>{ne.name}</div>
              </div>
            ))}
          </div>
          {se !== null && (
            <div style={{ border:`0.5px solid ${NOTES_ETRANGERES[se].color}`, borderRadius:10, padding:"14px 16px", background:NOTES_ETRANGERES[se].bg, marginBottom:16 }}>
              <div style={{ fontSize:14, fontWeight:500, color:NOTES_ETRANGERES[se].color, marginBottom:8 }}>{NOTES_ETRANGERES[se].name}</div>
              <p style={{ fontSize:13, color:"#333", lineHeight:1.65, marginBottom:8 }}>{NOTES_ETRANGERES[se].def}</p>
              <div style={{ fontSize:12, color:"#666", fontStyle:"italic", marginBottom:6 }}>Exemple : {NOTES_ETRANGERES[se].exemple}</div>
              <div style={{ fontSize:12, color:NOTES_ETRANGERES[se].color, fontWeight:500 }}>Règle : {NOTES_ETRANGERES[se].regles}</div>
            </div>
          )}
          <h3 style={{ fontSize:14, fontWeight:500, margin:"20px 0 8px", color:"#111" }}>Tableau récapitulatif</h3>
          <div style={{ overflowX:"auto" }}>
            <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
              <thead>
                <tr style={{ borderBottom:"0.5px solid #e5e5e5" }}>
                  {["Type","Préparation","Position","Résolution"].map(h => <th key={h} style={{ textAlign:"left", padding:"6px 8px", fontWeight:500, color:"#666" }}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  { t:"Note de passage", prep:"Conjointe",           pos:"Temps faible", res:"Conjointe" },
                  { t:"Broderie",        prep:"Conjointe",           pos:"Variable",     res:"Revient sur place" },
                  { t:"Retard",          prep:"Préparée (même note)",pos:"Temps fort",   res:"Conjointe descendante" },
                  { t:"Anticipation",    prep:"Variable",            pos:"Temps faible", res:"Aucune (bonne note)" },
                  { t:"Appoggiature",    prep:"Non préparée",        pos:"Temps fort",   res:"Conjointe" },
                  { t:"Échappée",        prep:"Conjointe",           pos:"Variable",     res:"Saut disjoint" },
                ].map((row, i) => (
                  <tr key={row.t} style={{ borderBottom:"0.5px solid #f0f0f0", background:i%2===0?"#fff":"#fafafa" }}>
                    <td style={{ padding:"7px 8px", fontWeight:500 }}>{row.t}</td>
                    <td style={{ padding:"7px 8px", color:"#555" }}>{row.prep}</td>
                    <td style={{ padding:"7px 8px", color:"#555" }}>{row.pos}</td>
                    <td style={{ padding:"7px 8px", color:"#555" }}>{row.res}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ══ SQUELETTE ══ */}
      {sec === "squelette" && (
        <div>
          <h2 style={S.h2}>Construire le squelette harmonique</h2>
          <p style={S.p}>Le squelette harmonique est la réalisation à 3 ou 4 voix de la progression — avant tout choix stylistique. C'est l'étape décisive : elle teste la solidité de la structure harmonique.</p>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:16 }}>
            {[
              { t:"La ligne de basse",       c:"#0F6E56", bg:"#E1F5EE", d:"Second pilier de l'harmonie. Solide aux cadences, mélodique entre les cadences. Les renversements fluidifient les grands sauts." },
              { t:"Les voix intermédiaires", c:"#534AB7", bg:"#EEEDFE", d:"Alto et ténor complètent l'accord. Préférer les notes communes et les mouvements conjoints. Éviter croisements et chevauchements." },
              { t:"La doublure",             c:"#BA7517", bg:"#FAEEDA", d:"Un accord à 3 sons sur 4 voix nécessite une doublure. Règle : fondamentale. Exception : VIIe → tierce. Ne jamais doubler la sensible." },
              { t:"Mouvement contraire",     c:"#185FA5", bg:"#E6F1FB", d:"Entre basse et voix supérieures, le mouvement contraire maximise l'indépendance polyphonique et évite les parallèles." },
            ].map(card => (
              <div key={card.t} style={{ border:`0.5px solid ${card.c}30`, borderRadius:10, padding:"12px 14px", background:card.bg }}>
                <div style={{ fontSize:13, fontWeight:500, color:card.c, marginBottom:6 }}>{card.t}</div>
                <p style={{ fontSize:12, color:"#444", lineHeight:1.6, margin:0 }}>{card.d}</p>
              </div>
            ))}
          </div>
          <div style={S.warn}><strong>Règles absolues :</strong> La sensible monte obligatoirement vers la tonique. La septième de dominante descend conjointement. Quintes et octaves parallèles sont interdites.</div>
          <h3 style={{ fontSize:14, fontWeight:500, margin:"20px 0 8px", color:"#111" }}>Exemples de progressions</h3>
          {Object.entries(DEMO_PROGS).map(([key, prog]) => (
            <div key={key} style={{ border:`0.5px solid ${sp===key?"#3B6D11":"#e5e5e5"}`, borderRadius:10, marginBottom:8, overflow:"hidden", background:sp===key?"#EAF3DE":"#fff", transition:"all .15s", cursor:"pointer" }} onClick={() => setSp(sp===key?null:key)}>
              <div style={{ padding:"12px 16px" }}>
                <div style={{ fontSize:13, fontWeight:500, color:"#111", marginBottom:3 }}>{prog.label}</div>
                <div style={{ fontSize:12, color:"#666" }}>{prog.desc}</div>
              </div>
              {sp === key && (
                <div style={{ padding:"0 16px 12px", borderTop:"0.5px solid #3B6D1130" }}>
                  <div style={{ fontFamily:"monospace", fontSize:13, color:"#3B6D11", margin:"8px 0", letterSpacing:1 }}>{prog.chords.join(" → ")}</div>
                  <button onClick={e => { e.stopPropagation(); playProg(ref as React.RefObject<PianoPlayerRef>, prog.chords, 1000); }} style={{ fontSize:12, padding:"5px 14px", border:"0.5px solid #3B6D11", borderRadius:20, cursor:"pointer", background:"transparent", color:"#3B6D11" }}>▶ Écouter</button>
                </div>
              )}
            </div>
          ))}
          <div style={S.tip}><strong>Principe clé :</strong> une bonne conduite de voix repose sur la nécessité des mouvements, pas leur multiplication. Conservez les notes communes, avancez par degrés conjoints.</div>
        </div>
      )}

      {/* ══ ACCOMPAGNEMENT ══ */}
      {sec === "accomp" && (
        <div>
          <h2 style={S.h2}>L'accompagnement</h2>
          <p style={S.p}>L'accompagnement est la mise en forme expressive du squelette harmonique. Il soutient, amplifie ou anticipe la <strong>courbe de tension musicale</strong> de la mélodie.</p>
          <p style={{ fontSize:13, color:"#888", marginBottom:12 }}>Cliquez sur un type pour en voir les détails.</p>
          {ACCOMP_TYPES.map((ac, i) => (
            <div key={ac.name} onClick={() => setSa(sa===i?null:i)} style={{ border:`0.5px solid ${sa===i?ac.color:"#e5e5e5"}`, borderRadius:10, marginBottom:8, overflow:"hidden", background:sa===i?ac.bg:"#fff", transition:"all .15s", cursor:"pointer" }}>
              <div style={{ display:"flex", alignItems:"center", gap:12, padding:"12px 16px" }}>
                <span style={{ fontSize:14, fontWeight:600, color:ac.color, minWidth:90 }}>{ac.name}</span>
                <span style={{ fontSize:12, color:"#888", flex:1 }}>{ac.desc.slice(0,60)}…</span>
              </div>
              {sa === i && (
                <div style={{ padding:"0 16px 14px", borderTop:`0.5px solid ${ac.color}20` }}>
                  <p style={{ fontSize:13, color:"#444", lineHeight:1.65, margin:"8px 0 6px" }}>{ac.desc}</p>
                  <p style={{ fontSize:12, color:ac.color, fontStyle:"italic", margin:"0 0 4px" }}>Usage : {ac.usage}</p>
                  <p style={{ fontSize:12, color:"#666", margin:0 }}>Tension : {ac.tension}</p>
                </div>
              )}
            </div>
          ))}
          <h3 style={{ fontSize:14, fontWeight:500, margin:"20px 0 8px", color:"#111" }}>Paramètres de tension</h3>
          <div style={{ overflowX:"auto" }}>
            <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
              <thead>
                <tr style={{ borderBottom:"0.5px solid #e5e5e5" }}>
                  {["Paramètre","Faible tension","Haute tension"].map(h => <th key={h} style={{ textAlign:"left", padding:"6px 10px", fontWeight:500, color:"#666" }}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  { p:"Densité",         low:"Peu de notes, rythme simple", high:"Nombreuses notes, syncopes" },
                  { p:"Ambitus",         low:"Serré (compression intime)",  high:"Large (dramatique)" },
                  { p:"Rythme harmonique",low:"Lent (1 accord / mesure)",   high:"Rapide (plusieurs / mesure)" },
                  { p:"Motif",           low:"Répétitif (stabilité)",        high:"Varié (surprise, tension)" },
                  { p:"Notes étrangères",low:"Aucune (consonance pure)",     high:"Retards, appoggiatures" },
                ].map((row, i) => (
                  <tr key={row.p} style={{ borderBottom:"0.5px solid #f0f0f0", background:i%2===0?"#fff":"#fafafa" }}>
                    <td style={{ padding:"7px 10px", fontWeight:500 }}>{row.p}</td>
                    <td style={{ padding:"7px 10px", color:"#0F6E56" }}>{row.low}</td>
                    <td style={{ padding:"7px 10px", color:"#BA7517" }}>{row.high}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={S.info}>Un même squelette harmonique peut donner un nocturne (arpèges), un choral (contrepoint) ou un standard jazz (comping) — selon le style choisi. L'accompagnement est un choix esthétique autant que technique.</div>
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
              <div style={{ fontSize:14, color:"#666", marginBottom:20 }}>{i18n.quizMessage(scr, QUIZ_COUNT)}</div>
              <button onClick={reset} style={{ fontSize:13, padding:"8px 20px", border:"0.5px solid #3B6D11", borderRadius:20, cursor:"pointer", background:"#EAF3DE", color:"#3B6D11" }}>{i18n.newQ}</button>
            </div>
          ) : (
            <div>
              <div style={{ fontSize:12, color:"#999", marginBottom:10 }}>{i18n.t("question")} {qi+1} {i18n.t("of")} {QUIZ_COUNT}<span style={{ marginLeft:12, color:"#ccc" }}>{ALL_QUESTIONS.length} {i18n.t("questionsPool")}</span></div>
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

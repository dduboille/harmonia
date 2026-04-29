"use client";

/**
 * Cours9.tsx
 * Harmonia · Niveau 1 · Cours 9 — Modulations avancées et pédales harmoniques
 * i18n : UI chrome traduit via next-intl (useCoursI18n)
 * Contenu pédagogique (questions, descriptions) : FR uniquement pour MVP
 * Convention : affichage anglais, dotKeys PianoPlayer français
 */

import React, { useRef, useState } from "react";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import { useCoursI18n } from "@/hooks/useCoursI18n";
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

function playProg(ref: React.RefObject<PianoPlayerRef>, names: string[], gap = 950) {
  names.forEach((name, i) =>
    setTimeout(() => playChord(ref, CHORDS[name] ?? [], 1.5), i * gap)
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SECTIONS_IDS = ["marche","notecom","minor","pedales","appog","quiz"] as const;

const TYPES_MARCHE = [
  {
    name: "Marche diatonique",
    subtitle: "Séquence tonale",
    color: "#0F6E56", bg: "#E1F5EE",
    desc: "Le motif se répète à l'intérieur de la même gamme, en suivant fidèlement les intervalles diatoniques. Les intervalles changent légèrement à chaque transposition pour rester dans la gamme.",
    exemple: "Canon de Pachelbel : I–V répété sur VI–III puis IV–I. Chaque 'marche' reste en D majeur.",
    effet: "Crée du mouvement et de l'animation sans quitter la tonalité. Très fréquent dans le baroque et le classique.",
    prog: ["C","G","Am","Em","F","C","G","C"],
    color2: "#0F6E56",
  },
  {
    name: "Marche harmonique",
    subtitle: "Séquence modulante",
    color: "#534AB7", bg: "#EEEDFE",
    desc: "Le motif est transposé à l'identique — mêmes intervalles exacts. Cela force à sortir de la gamme de départ et crée des modulations successives.",
    exemple: "Gm → Fm → Ebm → Dbm : le même motif descend d'un ton à chaque fois. Chaque étape est une nouvelle tonalité.",
    effet: "Crée une progression 'voyageuse' — chaque étape est une escale tonale. Outil de modulation puissant.",
    prog: ["Gm","Fm2","Ebm","Dbm"],
    color2: "#534AB7",
  },
];

const TYPES_PEDALES = [
  {
    type: "Pédale de tonique",
    note: "I (tonique)",
    role: "Stabilise le centre tonal — souvent en début ou fin de passage",
    car: "Peut apparaître dans n'importe quelle voix. L'harmonie au-dessus peut changer librement.",
    ex: "Do tenu (basse) pendant C–Am–F–G",
    color: "#0F6E56", bg: "#E1F5EE",
  },
  {
    type: "Pédale de dominante",
    note: "V (dominante)",
    role: "Prolonge la tension — généralement avant une cadence parfaite",
    car: "Produit des dissonances temporaires avec les accords du dessus (IV, II). La résolution sur I est d'autant plus satisfaisante.",
    ex: "Sol tenu (basse) pendant Dm–G7–C",
    color: "#BA7517", bg: "#FAEEDA",
  },
  {
    type: "Double pédale",
    note: "I + V simultanés",
    role: "Maintient les deux pôles tonaux — ancre forte de la tonalité",
    car: "À l'octave ou dans deux voix opposées (basse et soprano). Utilisée dans les passages modulants.",
    ex: "Do et Sol tenus pendant Am–Dm–G7–C",
    color: "#185FA5", bg: "#E6F1FB",
  },
  {
    type: "Pédale de soprano",
    note: "Variable (souvent V ou III)",
    role: "Stabilise un intervalle supérieur pendant les changements d'accords",
    car: "Produit des accords appogiaturés et des suspensions. Très utilisée dans l'impressionnisme.",
    ex: "Sol tenu (soprano) pendant C–F–G–C",
    color: "#534AB7", bg: "#EEEDFE",
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
  // ── Marche harmonique (20) ──
  { q:"Qu'est-ce qu'une marche musicale ?", opts:["Un accord répété","Un motif mélodique ou harmonique répété sur différents degrés — transposé progressivement","Une succession de cadences parfaites","Un changement de tempo"], a:1, fb:"Une marche (ou séquence) est un motif répété sur différents degrés : on déplace le motif comme on 'marche' par étapes. Le Canon de Pachelbel est l'exemple classique de marche diatonique." },
  { q:"La différence entre marche diatonique et marche harmonique est :", opts:["La marche diatonique est plus grave","La marche diatonique reste dans la gamme (intervalles ajustés), la marche harmonique transpose exactement (peut quitter la gamme)","Elles sont identiques","La marche harmonique utilise des accords mineurs uniquement"], a:1, fb:"Marche diatonique : le motif s'adapte aux intervalles de la gamme — on reste dans la tonalité. Marche harmonique : transposition exacte des intervalles — on sort de la gamme et on module." },
  { q:"Le Canon de Pachelbel est un exemple de :", opts:["Marche harmonique","Marche diatonique — le motif descend par degrés en restant dans D majeur","Modulation par note commune","Pédale de dominante"], a:1, fb:"Le Canon de Pachelbel déplace le même motif harmonique par degrés successifs en D majeur — c'est une marche diatonique. Les intervalles s'ajustent légèrement pour rester dans la gamme." },
  { q:"Une marche harmonique module car :", opts:["Elle utilise des accords diminués","Elle transpose le motif avec des intervalles exacts — cela force à utiliser des notes hors de la gamme de départ","Elle change le tempo","Elle utilise la gamme chromatique"], a:1, fb:"La marche harmonique préserve les intervalles exacts du motif. Si le motif contient une tierce majeure, chaque transposition aura une tierce majeure exacte — ce qui peut introduire des notes étrangères à la gamme." },
  { q:"La progression Gm–Fm–Ebm–Dbm est une marche :", opts:["Diatonique en G mineur","Harmonique — chaque accord descend d'un ton, même type (mineur), sortant de la gamme","Chromatique","Cadentielle"], a:1, fb:"Gm → Fm → Ebm → Dbm : chaque accord mineur descend d'un ton entier. La progression quitte G mineur après Fm — c'est une marche harmonique descendante par tons." },
  { q:"La marche diatonique de l'Étude op.10 n°3 de Chopin reste dans :", opts:["E mineur","E majeur — le motif se déplace par degrés en restant dans la gamme","C majeur","A mineur"], a:1, fb:"L'Étude op.10 n°3 de Chopin est en E majeur. La marche diatonique de la section A déplace le motif par degrés sans quitter E majeur. Chopin y apporte parfois de légères variantes du modèle." },
  { q:"La marche harmonique est un outil de modulation car :", opts:["Elle est très rapide","Chaque 'étape' de la marche peut être perçue comme une nouvelle escale tonale — la tension s'accumule","Elle évite les cadences","Elle utilise uniquement des accords majeurs"], a:1, fb:"Chaque transposition exacte de la marche harmonique introduit de nouvelles altérations — chaque étape est potentiellement une nouvelle tonalité. La progression est 'voyageuse' : on s'éloigne progressivement du point de départ." },
  { q:"Dans une marche harmonique, la cadence parfaite à l'arrivée sert à :", opts:["Recommencer la marche","Confirmer et ancrer la nouvelle tonalité — signal que le voyage s'achève","Créer une fausse piste","Revenir à la tonalité de départ"], a:1, fb:"Après une marche harmonique qui fait voyager à travers plusieurs tonalités, une cadence parfaite dans la tonalité finale confirme l'arrivée. Sans elle, on resterait dans l'ambiguïté." },
  { q:"La marche harmonique descendante par tons Gm–Fm–Ebm–Dbm se retrouve dans :", opts:["La basse de chaconne uniquement","De nombreux morceaux romantiques et jazz — ex: Misty, nombreuses ballades","Le blues uniquement","Les fugues baroques uniquement"], a:1, fb:"La descente harmonique par tons (cycle de secondes descendantes) est omniprésente en jazz et en musique pop romantique. Elle crée une sensation de 'glissement' harmonique progressif." },
  { q:"La Chaconne de Bach utilise une basse ostinato qui est :", opts:["Une marche harmonique","Une marche diatonique — la basse descend par degrés en restant dans D mineur","Un accord pivot","Une pédale de dominante"], a:1, fb:"La basse de la Chaconne de Bach descend par degrés conjoints dans D mineur — D–C–Bb–A. C'est une marche diatonique à la basse (ostinato), pas une marche harmonique qui modulerait." },
  { q:"Schoenberg distingue marche tonale et marche mélodique car :", opts:["Ce sont des noms différents pour la même chose","La marche tonale adapte les intervalles à la gamme, la marche mélodique peut légèrement modifier le dessin mélodique lui-même","Il n'y a pas de distinction","La marche mélodique est plus grave"], a:1, fb:"Schoenberg note que dans une marche tonale (diatonique), les intervalles s'ajustent mais aussi le dessin mélodique peut légèrement varier pour s'adapter à la gamme. Ces deux notions distinguent le niveau harmonique et mélodique de l'adaptation." },
  { q:"La progression C–G–Am–Em–F–C–Dm–G est une marche :", opts:["Harmonique — elle quitte C majeur","Diatonique — tous les accords appartiennent à C majeur","Chromatique","Directe"], a:1, fb:"C G Am Em F C Dm G : tous ces accords sont diatoniques à C majeur. La progression est une marche diatonique — le motif I–V se transpose sur VI–III puis IV–I, restant en C." },
  { q:"Une marche harmonique ascendante par demi-tons crée :", opts:["Une sensation apaisante","Une tension chromatique intense — chaque étape monte d'un demi-ton","Une progression bleue","Un effet de pédale"], a:1, fb:"La montée chromatique par demi-tons (ex : Cm–C#m–Dm–D#m) crée une tension chromatique progressive très intense. Utilisée par Ravel, Chopin et de nombreux compositeurs pour des effets dramatiques." },
  { q:"La marche harmonique par cycle de quintes descendantes est :", opts:["Une marche diatonique uniquement","La même chose que le cycle des quintes diatoniques — mais en version exacte, modulante","Impossible en pratique","Exclusivement baroque"], a:1, fb:"Le cycle des quintes harmoniques transpose exactement le motif de quinte à chaque étape. Si on reste diatonique, c'est le cycle vu au cours 3. Si on préserve les intervalles exacts, on module — marche harmonique." },
  { q:"La différence sonore entre marche diatonique et marche harmonique est :", opts:["Aucune","La marche diatonique sonne 'à l'intérieur' de la tonalité, la marche harmonique crée une sensation de dérive tonale","La marche harmonique est plus grave","La marche diatonique est plus rapide"], a:1, fb:"La marche diatonique reste dans le 'pays' tonal — l'oreille reconnaît la gamme. La marche harmonique 'dérive' — les intervalles exacts créent des notes étrangères, donnant une sensation de voyage progressif." },
  { q:"Dans l'Étude op.10 n°3, Chopin alterne marche diatonique et :", opts:["Marche chromatique","Marche harmonique à certains endroits — preuve que les deux procédés coexistent","Pédale de basse","Accord napolitain"], a:1, fb:"Dans l'Étude op.10 n°3, Chopin utilise principalement une marche diatonique mais introduit par endroits des transpositions exactes (marche harmonique) pour créer de légères dérives tonales." },
  { q:"Pour utiliser une marche harmonique comme outil de modulation, on :", opts:["Répète la marche indéfiniment","Arrête la marche sur la nouvelle tonalité et la confirme par une cadence parfaite","Ignore les altérations créées","Revient toujours à la tonalité de départ"], a:1, fb:"La marche harmonique transporte vers une nouvelle tonalité à chaque étape. Quand on arrive à la destination souhaitée, on stoppe la marche et on confirme la nouvelle tonalité par une cadence parfaite." },
  { q:"Le pattern I–V–VI–III–IV–I–II–V en C (Canon de Pachelbel) est une marche :", opts:["Harmonique — il module en G","Diatonique — il reste en C tout en déplaçant le motif I–V sur différents degrés","Directe — il saute entre tonalités","Mixte"], a:1, fb:"I–V : C–G. VI–III : Am–Em. IV–I : F–C. II–V : Dm–G. Tout reste dans C majeur. Les degrés de la marche (I, VI, IV, II) sont le point de départ du motif, qui s'adapte à chaque fois à la gamme." },
  { q:"La marche harmonique par tons (Gm–Fm–Ebm) est descendante. Si on la rend ascendante :", opts:["Ce n'est pas possible","On obtient Gm–Am–Bm — une marche ascendante par tons (ou par demi-tons selon l'intervalle choisi)","Elle devient diatonique","Elle devient une pédale"], a:1, fb:"Une marche harmonique peut aller dans les deux sens. Gm–Am–Bm = marche ascendante par tons. Cm–Db–Dm = marche ascendante par demi-tons. La direction crée des effets expressifs différents (tension montante vs descente)." },
  { q:"La marche 'chromatique' (par demi-tons) est une forme de marche :", opts:["Diatonique","Harmonique — les demi-tons exacts forcent à quitter la gamme à chaque étape","Tonale uniquement","Plagale"], a:1, fb:"Une marche par demi-tons transpose le motif d'un demi-ton à chaque fois — même intervalles exacts. C'est une marche harmonique chromatique. Chaque étape introduit de nouvelles altérations." },

  // ── Modulation par note commune (16) ──
  { q:"La modulation par note commune utilise :", opts:["Un accord commun aux deux tonalités","Une seule note identique (note pivot) qui sert de lien entre l'accord de départ et l'accord d'arrivée","Deux accords communs","La sensible artificielle"], a:1, fb:"La modulation par note commune n'utilise pas un accord entier comme pivot, mais une seule note qui appartient aux deux contextes harmoniques. Cette note change de fonction — elle 'glisse' d'un rôle à un autre." },
  { q:"Dans la modulation par note commune, la note pivot est généralement :", opts:["À la basse — effet de pédale","Au soprano — elle attire l'attention et guide l'oreille","Au ténor — voix la plus stable","À l'alto — voix intermédiaire"], a:1, fb:"La note pivot fonctionne mieux au soprano car elle est la plus audible. L'oreille suit la ligne supérieure — quand elle reste immobile pendant que l'harmonie change en dessous, le glissement est fluide et perceptible." },
  { q:"En modulant de G vers Eb avec Sol comme note commune :", opts:["Sol devient la tierce de Eb majeur (Sol est la tierce de Eb = Mi♭–Sol–Si♭)","Sol devient la fondamentale de Eb","Sol devient la sensible de Eb","Sol n'appartient pas à Eb"], a:0, fb:"Sol est la tierce de Eb majeur (Mi♭–Sol–Si♭). En G majeur, Sol est la tonique. Sol comme note commune : tonique de G → tierce de Eb. La même hauteur change de rôle harmonique — modulation fluide." },
  { q:"Les notes les plus courantes pour une modulation par note commune sont :", opts:["La fondamentale et la quinte","La tierce, la septième, la neuvième et la treizième","La sensible uniquement","Les notes de l'accord de dominante"], a:1, fb:"Les notes d'extension (tierce, septième, neuvième, treizième) sont les plus utilisées comme notes communes car elles appartiennent à de nombreux accords dans différentes tonalités." },
  { q:"Si la note commune est à la basse plutôt qu'au soprano, l'effet est :", opts:["Identique","Plus statique — elle agit comme une pédale plutôt que comme une note mélodique conductrice","Plus dramatique","Plus rapide"], a:1, fb:"Une note commune à la basse crée un effet de pédale — l'harmonie change au-dessus d'une basse immobile. Au soprano, elle guide l'oreille mélodiquement. Les deux effets sont valides mais différents." },
  { q:"La modulation par note commune est utilisée par :", opts:["Bach uniquement","Chopin, Liszt, Debussy et le jazz moderne — particulièrement pour les modulations vers des tons éloignés","Mozart uniquement","Le baroque uniquement"], a:1, fb:"Cette technique est caractéristique du romantisme (Chopin, Liszt, Schubert) et de l'impressionnisme (Debussy). En jazz, une note pivot peut être la tierce ou la septième du nouvel accord — réharmonisation." },
  { q:"La modulation par note commune permet d'atteindre :", opts:["Uniquement les tons voisins","Des tonalités éloignées de manière fluide — la note commune crée un lien imperceptible malgré la distance","Uniquement le relatif mineur","La même tonalité (tautologie)"], a:1, fb:"La modulation par note commune est particulièrement utile pour les tonalités éloignées (médiantes, tons à distance de tierce) — l'accord pivot diatonique serait difficile à trouver, mais une seule note suffit." },
  { q:"La modulation vers la médiante (tonalité à une tierce) utilise souvent :", opts:["Un accord pivot diatonique","La note commune — la tierce de l'accord de départ devient la fondamentale ou la tierce de la nouvelle tonalité","Une cadence directe uniquement","Le cycle des quintes"], a:1, fb:"Les modulations par tierces (médiantes) sont idéales pour la note commune : la tierce de l'accord de départ devient souvent une note structurelle de la nouvelle tonalité. Ex : Sol = tierce de C → tonique de G (modulation classique) ou tierce de Eb." },
  { q:"La progression G majeur → Mi♭ majeur avec Sol au soprano illustre :", opts:["Une modulation directe brutale","Une modulation par note commune : Sol = tonique de G → tierce de Eb","Une tonicisation de Eb","Une pédale de tonique"], a:1, fb:"Sol est la tonique de G. Dans Eb majeur (Mi♭–Sol–Si♭), Sol est la tierce. En maintenant Sol au soprano pendant que l'harmonie glisse de G vers Eb, on entend la même note dans deux contextes différents — modulation très fluide." },
  { q:"En jazz, la réharmonisation par note commune consiste à :", opts:["Jouer un accord différent avec la même basse","Garder une note importante (tierce ou septième) de l'accord original dans le nouvel accord de remplacement","Transposer tous les accords","Supprimer la mélodie"], a:1, fb:"En réharmonisation jazz, on remplace un accord en conservant une de ses notes structurelles (souvent la tierce ou la septième) dans le nouvel accord. La continuité mélodique masque le changement harmonique." },
  { q:"La note commune fonctionne particulièrement bien quand elle est :", opts:["Sur un temps faible","Tenue ou répétée — sa durée lui donne le temps de changer de fonction sans rupture","Très courte","Sur le temps le plus faible de la mesure"], a:1, fb:"Une note commune doit être entendue assez longtemps pour que l'oreille l'identifie dans le premier contexte, puis la réinterprète dans le second. Une note trop courte ne permettrait pas cette double perception." },
  { q:"La modulation par note commune diffère de la modulation par accord pivot car :", opts:["L'accord pivot est plus dramatique","La note commune utilise un seul son comme lien (pas un accord entier) — plus subtile, plus utilisée pour les tons éloignés","Elles sont identiques","L'accord pivot est plus récent"], a:1, fb:"L'accord pivot partage un accord entier entre deux tonalités — fonctionne bien pour les tons proches. La note commune partage une seule hauteur — plus flexible, permet d'atteindre des tons très éloignés de manière fluide." },
  { q:"Si Mi est la note commune entre C majeur (tierce) et A mineur (tonique), on peut moduler :", opts:["Uniquement de C vers Am","Dans les deux sens : C→Am (Mi = III de C = I de Am) ou Am→C (Mi = I de Am = III de C)","Uniquement en utilisant G7","Uniquement en mineur harmonique"], a:1, fb:"Une note commune fonctionne dans les deux directions. Mi = III de C et I de Am. On peut donc moduler C→Am (Mi reste, rôle change) ou Am→C (Mi reste, rôle change dans l'autre sens). Même mécanisme, directions opposées." },
  { q:"La modulation par note commune crée une sensation de :", opts:["Rupture dramatique","Glissement imperceptible — l'oreille est guidée par la note tenue pendant que l'harmonie change discrètement","Acceleration rythmique","Instabilité chromatique intense"], a:1, fb:"C'est la grande force de cette technique : le changement harmonique est presque imperceptible grâce à la note maintenue. L'oreille suit le fil conducteur de la note commune et 'glisse' naturellement vers la nouvelle tonalité." },
  { q:"Dans une modulation par note commune, qu'est-ce qui 'bouge' et qu'est-ce qui 'reste' ?", opts:["Tout bouge","L'harmonie bouge (les accords changent), la note commune reste — le fil conducteur","Rien ne bouge — c'est une pédale","La mélodie reste, tout le reste bouge"], a:1, fb:"La note commune est la stabilité dans le changement : elle reste immobile (ou répétée) pendant que toute l'harmonie autour d'elle se transforme. C'est ce contraste entre stabilité et mouvement qui crée la fluidité." },
  { q:"La note commune est parfois appelée 'note pivot' par analogie avec :", opts:["L'accord pivot","La pédale harmonique","Les deux — dans les deux cas, un élément 'pivote' entre deux contextes fonctionnels","L'accord napolitain"], a:2, fb:"Par analogie avec l'accord pivot (un accord entier pivotant entre deux tonalités), la note commune est une 'note pivot' — un seul son qui pivote entre deux contextes. La logique est identique, l'échelle est différente." },

  // ── Modulation par minorisation (14) ──
  { q:"La minorisation d'un accord consiste à :", opts:["Le jouer en mineur sans altérer le contexte tonal","Abaisser la tierce majeure d'un demi-ton pour rendre l'accord mineur — le transformant souvent en pont vers une nouvelle tonalité","Le transposer d'un demi-ton","Le jouer en renversement"], a:1, fb:"La minorisation abaisse la tierce d'un accord majeur pour le rendre mineur. Ex : C (Do–Mi–Sol) → Cm (Do–Mi♭–Sol). Ce nouvel accord mineur peut être réinterprété dans une autre tonalité." },
  { q:"L'effet expressif de la minorisation est :", opts:["De la joie","Une mélancolie subite — l'abaissement de la tierce crée un glissement émotionnel vers l'ombre","De la tension rythmique","De la clarté tonale"], a:1, fb:"La minorisation crée un glissement émotionnel immédiat — la tierce mineure apporte une couleur mélancolique qui contraste avec l'accord majeur précédent. C'est un des effets les plus expressifs de l'harmonie tonale." },
  { q:"Dans la progression C → Cm → F7 → Bb, Cm est :", opts:["Un emprunt à C mineur","La minorisation de C, réinterprétée comme II de Bb majeur — elle initie la modulation vers Bb","Une tonicisation de Bb","Un accord napolitain"], a:1, fb:"C (I de C) → Cm (minorisation, I minorisé) → Cm réinterprété comme IIm de Bb → F7 (V de Bb) → Bb (I de Bb). La minorisation de C le transforme en IIm de Bb — modulation de C vers Bb." },
  { q:"La modulation par minorisation de C vers Bb fonctionne car :", opts:["C et Bb ont la même armure","Cm (Do–Mi♭–Sol) est le IIe degré de Bb majeur (Si♭–Do–Ré–Mi♭–Fa–Sol–La). Cm se réinterprète naturellement dans Bb.","Cm est la dominante de Bb","C et Bb sont à la quinte l'un de l'autre"], a:1, fb:"Cm = Do–Mi♭–Sol. En Bb majeur, le IIe degré = Cm. La minorisation de C (C→Cm) le transforme en IIm de Bb, qui prépare naturellement F7 (V de Bb) puis Bb. Élégant et économique." },
  { q:"La majorisation est l'opération inverse de la minorisation :", opts:["Faux — la minorisation est irréversible","Vrai — on élève la tierce mineure d'un demi-ton pour rendre un accord mineur majeur","Faux — les deux sont identiques","Vrai — mais la majorisation est beaucoup plus fréquente"], a:1, fb:"La majorisation (mineur → majeur) est l'inverse de la minorisation. Elle est moins courante mais existe — ex : Am → A (majeur) peut initier une tonicisation ou une modulation. La minorisation reste plus fréquente expressément." },
  { q:"La progression I → Im est un exemple de :", opts:["Modulation directe","Minorisation de la tonique — très expressive, souvent dans les codas","Emprunt à l'homonyme uniquement","Pédale de dominante"], a:1, fb:"I → Im est une minorisation de la tonique — C → Cm. C'est une des transitions les plus expressives : la tonique elle-même s'assombrit. Très utilisée dans les codas romantiques et les conclusions mélancoliques." },
  { q:"IV → IVm (ex : F → Fm en C majeur) est :", opts:["Un accord napolitain","Un emprunt classique du romantisme — la minorisation de la sous-dominante","Une tonicisation de Fm","Une modulation en C mineur"], a:1, fb:"F → Fm = minorisation du IVe degré. C'est un des emprunts les plus fréquents du romantisme. La couleur sombre du Fm contraste avec F et enrichit la progression. Peut initier une modulation ou rester un simple emprunt." },
  { q:"La minorisation est parfois appelée 'changement modal' car :", opts:["Elle change le tempo","Elle transforme le mode de l'accord (majeur → mineur) — analogie avec le changement de mode d'une gamme","Elle utilise deux armures","Elle change la métrique"], a:1, fb:"La minorisation est un changement de mode local : l'accord passe du mode majeur au mode mineur. C'est analogue à passer d'une gamme majeure à sa parallèle mineure — mais à l'échelle d'un seul accord." },
  { q:"V → Vm est plus rare que I → Im car :", opts:["V mineur n'existe pas","V mineur perd la sensible — Gm n'a pas Si naturel (sensible de C), affaiblissant la tension cadentielle","V mineur est hors tonalité","V mineur est trop grave"], a:1, fb:"Gm (Sol–Si♭–Ré) n'a pas Si naturel — la sensible de C est perdue. Gm a donc moins de tension cadentielle que G ou G7. V → Vm est un affaiblissement de la dominante — rare, mais utilisé pour des effets spécifiques (ex : cadence modale)." },
  { q:"La progression Am–G–F–E7–Am en A mineur illustre :", opts:["Une minorisation","Une majorisation du Ve degré — Em devient E7 (majeur avec 7e) pour créer la sensible G#","Une marche harmonique","Une pédale de dominante"], a:1, fb:"E7 (Mi–Sol#–Si–Ré) est la majorisation-fonctionnalisation du Ve degré de A mineur. En mineur naturel, le Ve serait Em (mineur, sans G#). La mineure harmonique 'majorise' la dominante pour créer la sensible." },
  { q:"La minorisation peut créer une modulation vers :", opts:["Uniquement le relatif mineur","La tonalité dont l'accord minorisé devient un degré fonctionnel naturel — souvent la tonalité une quarte au-dessus","La même tonalité","Uniquement des tons éloignés"], a:1, fb:"La minorisation de C (C→Cm) prépare Bb (Cm = IIm de Bb). En général, l'accord minorisé devient le IIm de la nouvelle tonalité — une quarte au-dessus. Ex : D→Dm prépare Bb... non, prépare C (Dm = IIm de C). Toujours une quarte au-dessus." },
  { q:"Quelle notation indique une minorisation dans un chiffrage d'accords ?", opts:["L'accord suivi de '7'","L'accord suivi de 'm' — ex : C devient Cm","L'accord suivi de 'aug'","L'accord suivi de 'dim'"], a:1, fb:"La minorisation de C s'écrit Cm dans le chiffrage américain. Le 'm' indique que la tierce est abaissée d'un demi-ton. C = Do–Mi–Sol, Cm = Do–Mi♭–Sol." },
  { q:"Dans la progression C–Cm–Bb–F, Cm initie une modulation vers :", opts:["F majeur","Bb majeur — Cm = IIm de Bb, prépare F7 (V de Bb) puis Bb","G mineur","C mineur définitivement"], a:1, fb:"Cm = IIm de Bb majeur. La progression Cm–F7 serait SD–D en Bb, mais ici on a Cm–Bb directement. La modulation vers Bb est amorcée par la minorisation de C." },
  { q:"La minorisation du IVe degré (F → Fm en C) est souvent suivie de :", opts:["G7 directement","C (tonique) pour une cadence plagale mineure","D7","Am"], a:1, fb:"La progression C–Fm–C est une cadence plagale mineure — Fm remplace F comme sous-dominante. C'est un emprunt très expressif. On peut aussi enchaîner vers G7 : C–Fm–G7–C = SD empruntée–D–T." },

  // ── Pédales harmoniques (22) ──
  { q:"Une pédale harmonique est :", opts:["Un accord répété sans changer","Une note tenue ou répétée pendant que les autres voix changent d'accords","Un accord de dominante fixe","Un ornement mélodique"], a:1, fb:"La pédale harmonique est une note maintenue (tenue ou répétée) dans une voix pendant que les harmonies changent autour d'elle. Elle peut appartenir aux accords qui passent ou leur être étrangère — créant alors des dissonances." },
  { q:"La pédale de tonique crée :", opts:["De la tension maximale","De la stabilité — elle ancre le centre tonal en maintenant la fondamentale de la tonique","Une modulation","Une suspension"], a:1, fb:"La pédale de tonique maintient le Ier degré (Do en C) pendant que l'harmonie évolue. Elle ancre le centre tonal — l'oreille ne perd jamais le fil de la tonique. Souvent utilisée en début ou fin de mouvement." },
  { q:"La pédale de dominante prépare :", opts:["Une nouvelle tonalité","La cadence finale — la dominante tenue crée une tension prolongée qui amplifie la résolution sur I","Une pédale de tonique","Un accord napolitain"], a:1, fb:"La pédale de dominante maintient Sol (en C) pendant que les accords changent au-dessus. Cette tension prolongée rend la résolution finale sur C d'autant plus satisfaisante. Très utilisée avant les grandes cadences." },
  { q:"La double pédale maintient simultanément :", opts:["Deux fondamentales quelconques","Les deux pôles tonaux — tonique et dominante (Do et Sol en C)","La tierce et la quinte","Deux dominantes secondaires"], a:1, fb:"La double pédale maintient simultanément I et V — Do et Sol en C. Elle ancre les deux pôles fondamentaux de la tonalité, créant une base très stable pour des harmonies mouvantes au-dessus." },
  { q:"La pédale de soprano est caractéristique de :", opts:["La musique baroque uniquement","La musique du XIXe siècle et l'impressionnisme (Debussy, Ravel)","La fugue uniquement","Le jazz moderne uniquement"], a:1, fb:"La pédale de soprano — note tenue dans la voix supérieure — est particulièrement développée dans le romantisme et l'impressionnisme. Debussy l'utilise abondamment pour créer des effets de suspension et d'ambiguïté harmonique." },
  { q:"Une pédale est 'étrangère' quand :", opts:["Elle est jouée fort","Elle ne fait pas partie de l'accord qui passe au-dessus — elle crée une dissonance temporaire","Elle est très grave","Elle dure une seule mesure"], a:1, fb:"Une pédale étrangère (ou 'pédal note' en anglais) ne fait pas partie de l'accord en cours — elle créé une dissonance. Cette dissonance est résolue quand un accord contenant la pédale arrive. L'effet de tension est expressif." },
  { q:"La progression C–Am–F–G avec Do tenu à la basse est une pédale de :", opts:["Dominante","Tonique — Do est le Ier degré de C, il reste à la basse pendant toute la progression","Double pédale","Pédale de soprano"], a:1, fb:"Do est la tonique de C majeur. Maintenu à la basse pendant Am, F et G (qui ne contiennent pas tous Do comme fondamentale), il crée une pédale de tonique. L'effet ancre C comme centre pendant l'évolution harmonique." },
  { q:"La progression Dm–G7–C avec Sol tenu à la basse est une pédale de :", opts:["Tonique","Dominante — Sol est le Ve degré de C. Il reste immobile pendant que Dm et G7 passent","Double pédale","Pédale de soprano"], a:1, fb:"Sol est la dominante de C. Maintenu à la basse pendant Dm et G7, il crée une pédale de dominante. La tension est maximale — Sol ne résout sur Do qu'à la fin. Très utilisé avant les grandes cadences." },
  { q:"La pédale de tonique est souvent utilisée :", opts:["Au milieu d'un développement tendu","En début ou fin de pièce — pour stabiliser et ancrer le centre tonal","Uniquement en mineur","Pour moduler"],  a:1, fb:"La pédale de tonique est un outil de stabilisation — elle est naturelle en début de pièce (pour établir la tonalité) ou en fin (pour la confirmer définitivement). Au milieu, elle peut créer un effet de repos ou de point d'orgue." },
  { q:"Qu'est-ce qui distingue une pédale d'un accord répété ?", opts:["Rien — c'est la même chose","Dans une pédale, une seule note est tenue pendant que les autres voix changent librement. Un accord répété répète toutes ses notes ensemble.","La pédale est toujours plus grave","L'accord répété est toujours fortissimo"], a:1, fb:"La pédale = une note immobile, harmonies changeantes autour. Accord répété = toutes les notes de l'accord se répètent ensemble. La pédale maintient une continuité mélodique dans une voix pendant le changement harmonique." },
  { q:"Dans la forme musicale, la pédale de dominante est souvent utilisée :", opts:["Au début d'une pièce","Avant la récapitulation dans une forme sonate — elle crée l'attente du retour à la tonique","Dans le développement uniquement","À la fin d'une pièce seulement"], a:1, fb:"Dans la forme sonate, la pédale de dominante précède souvent la récapitulation — la dominante tenue pendant plusieurs mesures crée une attente intense du retour au thème principal en tonique. Effet dramatique très efficace." },
  { q:"La pédale peut être :", opts:["Uniquement à la basse","Dans n'importe quelle voix — basse, soprano, alto ou ténor","Uniquement au soprano","Uniquement dans les voix intermédiaires"], a:1, fb:"La pédale peut occuper n'importe quelle voix. La basse est la plus fréquente (pédales de tonique et de dominante). Le soprano est utilisé pour des effets de suspension et d'impressionnisme. Les voix intérieures sont plus rares mais possibles." },
  { q:"Une double pédale (Do + Sol) crée un effet de :", opts:["Modulation vers G","Ambiguïté tonale — les deux pôles sont maintenus, permettant des harmonies libres","Cadence parfaite prolongée","Accord diminué"], a:1, fb:"La double pédale Do–Sol maintient simultanément la tonique et la dominante — les deux fondamentaux de la tonalité. Au-dessus, l'harmonie peut s'aventurer librement sans perdre le fil tonal. Effet de stabilité et d'ambiguïté simultanées." },
  { q:"La pédale de dominante crée des dissonances car :", opts:["La note Sol ne s'entend pas bien","Les accords qui passent au-dessus (IV, II) contiennent des notes qui 'frottent' avec Sol","Les voix se croisent","La sensible n'est pas résolue"], a:1, fb:"Sol (pédale) + F majeur au-dessus = Sol + Fa + La + Do. Sol et Fa sont distants d'une 7e — dissonance. Sol + Dm = Sol + Ré + Fa + La. Ces dissonances créent la tension qui sera résolue sur C avec Sol dans l'accord." },
  { q:"Chopin utilise souvent la pédale de :", opts:["Soprano uniquement","Dominante dans ses nocturnes — la basse tient Sol pendant que l'harmonie évolue richement","Tonique uniquement","Double pédale uniquement"], a:1, fb:"Les Nocturnes de Chopin utilisent fréquemment la pédale de dominante à la basse gauche (souvent en octave) pendant que la main droite joue des harmonies complexes et ornées. L'effet est très romantique." },
  { q:"La pédale de soprano est particulièrement utilisée dans :", opts:["Les fugues baroques","L'impressionnisme (Debussy, Ravel) — elle crée des accords appogiaturés et des harmonies suspendues","Le blues uniquement","La forme sonate classique"], a:1, fb:"Debussy et Ravel utilisent abondamment la pédale de soprano — souvent la dominante ou la médiante — pour créer des harmonies flottantes et ambiguës caractéristiques de leur style impressionniste." },
  { q:"La progression G7–C où Sol est tenu à la basse pendant C est :", opts:["Une pédale de dominante","Une pédale de tonique — Sol est la quinte de C, qui reste après que G7 ait résolu","Une double pédale","Une pédale étrangère"], a:1, fb:"Quand G7 résout sur C, Sol (basse) peut rester — Sol est la quinte de C. Ce Sol tenu est maintenant une pédale de quinte (ou de dominante maintenue). Il ne crée pas de dissonance dans C mais donne une couleur de I6/4." },
  { q:"La pédale de dominante dans une fugue de Bach est souvent :", opts:["Une seule mesure","Une longue tenue de plusieurs mesures à la basse avant la strette ou la cadence finale","Un ornement rapide","Une note répétée au soprano"], a:1, fb:"Dans les fugues de Bach, la pédale de dominante (pédale d'orgue) est souvent un Sol tenu sur plusieurs mesures à la basse, pendant que les voix supérieures s'agitent. C'est une technique caractéristique de l'écriture fuguée." },
  { q:"Le terme 'pédale d'orgue' vient de :", opts:["La pédale de tempo","Le clavier de pédale de l'orgue — l'instrumentiste peut tenir une note au pied pendant que les mains jouent d'autres harmonies","Les pédales d'expression","Les pédales du piano"], a:1, fb:"L'orgue possède un clavier de basse joué aux pieds (le pédalier). L'organiste peut tenir une note au pied pendant que les deux mains jouent librement. Cette technique a inspiré le concept de pédale harmonique dans toute la composition." },
  { q:"Quelle pédale est la plus rare dans l'écriture classique ?", opts:["Pédale de tonique","Pédale de dominante","Pédale intérieure (voix intermédiaire tenue)","Double pédale"], a:2, fb:"La pédale dans une voix intérieure (alto ou ténor) est la plus rare — difficile à percevoir et à gérer techniquement. Les pédales de basse et de soprano sont beaucoup plus fréquentes car elles occupent les registres extrêmes, plus audibles." },
  { q:"Dans une double pédale Do–Sol, laquelle des deux est la plus grave ?", opts:["Sol","Do — Do3 est plus grave que Sol3","Elles sont au même octave","Cela dépend des voix"], a:1, fb:"Do3 (octave 3) est plus grave que Sol3. Dans une double pédale classique à la basse, Do est souvent à la basse et Sol une quinte au-dessus — ou Do et Sol à l'octave (Do3 et Do4, Sol2 et Sol3)." },
  { q:"La pédale de tonique en fin de pièce crée un effet de :", opts:["Surprise","Conclusion et stabilisation définitive — la tonique maintenue pendant les derniers accords confirme le centre tonal","Tension maximale","Modulation vers le relatif"], a:1, fb:"En fin de pièce, la pédale de tonique (souvent avec un accord de C tenu à la basse pendant les derniers accords) crée un sentiment de conclusion inévitable. Le centre tonal est ancré — l'oreille sait que la pièce se termine ici." },

  // ── Accords appogiaturés (20) ──
  { q:"Un accord appogiaturé est :", opts:["Un accord joué forte","Un accord étranger inséré brièvement avant un accord réel, dont il prépare la résolution par dissonance","Un accord renversé","Un accord de dominante secondaire"], a:1, fb:"L'accord appogiaturé est l'équivalent harmonique de la note d'appogiature — une dissonance harmonique entière qui se résout sur un accord réel. Il est étranger à la fonction en cours et crée une tension brève mais intense." },
  { q:"La différence entre accord appogiaturé et accord de passage est :", opts:["Aucune différence","L'accord appogiaturé est sur un temps fort et crée une dissonance forte. L'accord de passage est sur un temps faible et relie deux accords réels","L'accord de passage est plus grave","L'accord appogiaturé dure plus longtemps"], a:1, fb:"L'accord appogiaturé est sur un temps fort (comme la note d'appogiature) et crée une dissonance accentuée. L'accord de passage est sur un temps faible et relie fluidement deux harmonies réelles." },
  { q:"L'accord de dominante sur tonique (ex : G7/C) est :", opts:["Un accord de tonique","Un accord appogiaturé — G7 posé sur une basse de tonique, créant une dissonance qui retarde la résolution finale","Un accord de passage","Un accord pivot"], a:1, fb:"G7/C = Sol–Si–Ré–Fa avec Do à la basse. L'accord exprime une tension de dominante (G7) mais le Do à la basse empêche la résolution — Do est la tonique, pas Sol. C'est un retard harmonique de la résolution." },
  { q:"En C majeur, G7/C résout sur :", opts:["G majeur","C majeur — la dissonance de dominante se résout normalement sur la tonique","Dm","Am"], a:1, fb:"G7/C crée une tension de dominante sur basse de tonique. La résolution naturelle est C majeur — les voix résolvent normalement (Si→Do, Fa→Mi) et la basse Do reste immobile. La dissonance est résolue." },
  { q:"L'accord de dominante sur tonique est qualifié de 'retard harmonique' car :", opts:["Il est très lent","Il retarde l'arrivée de l'accord de tonique réel — la basse de tonique est déjà là mais l'accord de dominante crée encore de la tension","Il est plus grave","Il utilise la septième majeure"], a:1, fb:"Dans G7/C, la basse Do est la tonique — elle est 'là' — mais l'accord de dominante au-dessus crée encore de la tension. C'est comme si la résolution était amorcée (basse) mais pas encore complète (accord). Effet de suspense harmonique." },
  { q:"Les accords appogiaturés sont fréquents dans :", opts:["Le baroque strict uniquement","Le romantisme et l'impressionnisme — pour la richesse expressive des dissonances retardées","Le blues uniquement","La musique médiévale"], a:1, fb:"Le romantisme (Chopin, Liszt, Wagner) et l'impressionnisme (Debussy, Ravel) exploitent abondamment les accords appogiaturés — dissonances expressives qui amplifient la tension avant résolution. Langage harmonique riche et coloré." },
  { q:"Un accord appogiaturé crée de la tension car :", opts:["Il est joué fort","Il est étranger à la fonction harmonique en cours — sa dissonance appelle une résolution","Il est en renversement","Il est mineur"], a:1, fb:"L'accord appogiaturé introduit des notes étrangères à l'accord attendu. Cette dissonance crée une tension qui demande résolution — exactement comme une note d'appogiature, mais à l'échelle d'un accord entier." },
  { q:"La résolution d'un accord appogiaturé se fait :", opts:["Par un saut de quinte","Par des mouvements conjoints des voix vers les notes de l'accord réel","Par un saut de tierce","Par la basse uniquement"], a:1, fb:"Les voix de l'accord appogiaturé se résoudent conjointement (par degrés) vers les notes de l'accord réel. Ex : dans G7/C → C, les voix Sol–Si–Ré–Fa glissent vers Do–Mi–Sol (accord C). La basse Do reste immobile." },
  { q:"L'accord appogiaturé est sur :", opts:["Un temps faible","Un temps fort — comme la note d'appogiature, sa force vient de sa position accentuée","Toujours sur la levée","Après la barre de mesure"], a:1, fb:"L'accord appogiaturé, comme la note d'appogiature, est placé sur un temps fort. Sa position accentuée amplifie la dissonance — l'oreille s'y attarde davantage avant que la résolution n'arrive." },
  { q:"La progression G7/C → C peut s'analyser comme :", opts:["Une cadence imparfaite","Un accord de dominante appogiaturé → résolution sur la tonique — retard harmonique du Ier degré","Une tonicisation de G","Un emprunt à G majeur"], a:1, fb:"G7/C est V7 sur basse de I — l'accord appogiaturé de dominante sur tonique. La résolution G7/C → C est un retard harmonique : la basse Do était déjà là, l'accord de dominante se lève pour révéler l'accord de C pur." },
  { q:"Quel compositeur est célèbre pour ses accords appogiaturés dans ses sonates ?", opts:["Bach","Beethoven — ses accords de V sur pédale de I sont très caractéristiques dans les codas","Haydn uniquement","Scarlatti"], a:1, fb:"Beethoven utilise fréquemment des accords de V sur pédale de I (G7/C, D7/G etc.) dans ses codas et transitions — effet très dramatique qui retarde la résolution finale et amplifie l'impact de la cadence parfaite." },
  { q:"La notation G7/C signifie :", opts:["G7 transposé en C","Accord G7 (Sol–Si–Ré–Fa) avec Do à la basse — le slash indique la note de basse","G et C joués ensemble","G7 suivi de C"], a:1, fb:"La notation X/Y = accord X avec Y à la basse. G7/C = accord de Sol septième de dominante (Sol–Si–Ré–Fa) avec Do (Do) à la basse. Le Do est étranger à l'accord G7 — c'est ce qui crée la dissonance appogiaturée." },
  { q:"Un accord appogiaturé peut :", opts:["Être n'importe quel accord","Être un accord de n'importe quelle fonction posé sur une basse étrangère à cet accord","Uniquement être une dominante sur tonique","Uniquement être en position fondamentale"], a:1, fb:"En principe, n'importe quel accord peut être appogiaturé — IV/I, II/I, etc. Le cas le plus classique et expressif reste V7/I (dominante sur basse de tonique), mais la technique s'applique plus largement." },
  { q:"La différence entre pédale et accord appogiaturé est :", opts:["Aucune différence","La pédale maintient une note dans une voix pendant que les accords changent. L'accord appogiaturé est un accord entier étranger qui précède et se résout sur un accord réel.","La pédale est toujours à la basse","L'accord appogiaturé dure plus longtemps"], a:1, fb:"Pédale : une note immobile (dans une voix), harmonies changeantes autour. Accord appogiaturé : un accord entier étranger, ponctuel, sur un temps fort, qui se résout sur l'accord réel. Deux phénomènes différents, quoique liés." },
  { q:"Dans G7/C, le Do à la basse est :", opts:["La septième de G7","La fondamentale de C (tonique) placée à la basse — étranger à l'accord G7 au-dessus","La quinte de G","La sensible de C"], a:1, fb:"G7 = Sol–Si–Ré–Fa. Do n'est pas dans G7 — c'est la fondamentale de C. Placé à la basse, Do crée la dissonance : l'accord G7 flotte au-dessus de la basse 'tonique', créant l'accord appogiaturé." },
  { q:"L'effet musical de G7/C → C est similaire à :", opts:["Une cadence rompue","Un retard — comme si la résolution sur Do était annoncée par la basse (déjà Do) mais retardée par l'accord de dominante encore présent","Une modulation","Une cadence plagale"], a:1, fb:"G7/C → C est analogue à un retard mélodique : la basse 'annonce' Do, mais l'accord de dominante crée encore de la tension. Quand G7/C se résout en C pur, la résolution est complète — effet de 'délivrance' harmonique." },
  { q:"La pédale de soprano crée souvent des accords :", opts:["Parfaits","Appogiaturés — la note tenue au soprano devient étrangère aux accords changeant sous elle","Diminués uniquement","De septième majeure"], a:1, fb:"La pédale de soprano, tenue pendant que les accords changent sous elle, crée naturellement des accords appogiaturés — la note fixe est étrangère aux accords changeants. Cet effet est très caractéristique de l'écriture impressionniste." },
  { q:"Dans une coda romantique, G7/C → C est souvent précédé de :", opts:["Dm uniquement","Une longue pédale de dominante ou un 6/4 de cadence — pour amplifier encore plus la tension finale","Am","Une modulation en G"], a:1, fb:"La séquence I6/4 → G7/C → C (ou Dm–I6/4–G7/C–C) est une accumulation de tensions : 6/4 prépare G7/C qui est lui-même un retard de C. La résolution finale sur C pur est d'autant plus satisfaisante." },
  { q:"Peut-on avoir un accord appogiaturé de tonique (I) sur basse de dominante ?", opts:["Non — uniquement V sur I","Oui — C/G (Do–Mi–Sol sur basse Sol) est le 2e renversement de I, parfois analysé comme I appogiaturé sur V","Non — la tonique ne peut pas être appogiaturée","Seulement en mineur"], a:1, fb:"C/G peut être analysé comme I6/4 = accord de I en 2e renversement, avec Sol (dominante) à la basse. C'est le 6/4 de cadence — un accord de tonique 'appogiaturé' sur la basse de dominante, qui se résout vers V7–I." },
  { q:"Le terme 'accord d'appogiature' vient de :", opts:["L'italien 'appoggiare' (s'appuyer) — l'accord s'appuie sur un accord réel avant de se résoudre","Le latin 'apparatus'","L'allemand 'Aufsatz'","Le grec 'apoggios'"], a:0, fb:"'Appoggiare' en italien signifie 's'appuyer'. L'appoggiature (note ou accord) s'appuie lourdement sur un temps fort avant de se résoudre. Le terme reflète cette idée de poids expressif et de tension accentuée." },

  // ── Synthèse (16) ──
  { q:"Parmi ces quatre techniques, laquelle peut moduler vers des tons très éloignés le plus facilement ?", opts:["Accord pivot diatonique","Marche harmonique ou note commune — les deux peuvent atteindre des tons éloignés","Minorisation uniquement","Pédale de dominante"], a:1, fb:"L'accord pivot diatonique fonctionne bien pour les tons proches (voisins). La marche harmonique et la note commune sont plus flexibles — elles peuvent atteindre des tons éloignés (médiantes, tierces) de manière fluide." },
  { q:"La progression C–Cm–Bb–F7–Bb utilise :", opts:["Une pédale de tonique","Une minorisation de C (C→Cm) qui initie la modulation vers Bb","Un accord napolitain","Une marche diatonique"], a:1, fb:"C→Cm = minorisation. Cm = IIm de Bb. F7 = V de Bb. Bb = I de Bb. C'est la séquence de modulation par minorisation : I de C (minorisé) → IIm de Bb → V de Bb → I de Bb." },
  { q:"La progression C–Am–F–G avec Do tenu à la basse ET Sol tenu au soprano est :", opts:["Une pédale de tonique","Une double pédale — Do à la basse (tonique) et Sol au soprano (dominante)","Un accord appogiaturé","Une marche diatonique"], a:1, fb:"Do à la basse + Sol au soprano tenu = double pédale (tonique + dominante). L'harmonie Am–F–G évolue librement entre ces deux pôles immobiles." },
  { q:"La marche harmonique C–G–Am–Em (puis répétition à la quinte inférieure) est :", opts:["Une marche harmonique — elle module","Une marche diatonique — la répétition à la quinte inférieure reste dans C majeur (F–C–Dm–Am)","Une pédale de dominante","Une tonicisation"], a:1, fb:"Si la répétition adapte les intervalles à la gamme (F–C–Dm–Am en C), c'est une marche diatonique. Si elle transpose exactement (F#–C#–D#m–A#m), ce serait harmonique et modulerait. La première option reste diatonique." },
  { q:"Dans une progression avec pédale de dominante, les accords qui créent le plus de dissonance sont :", opts:["I et V","IV et II — ils contiennent des notes qui frottent avec la pédale de Sol","III et VI","VII et III"], a:1, fb:"Pédale Sol + Fa majeur (F) au-dessus = Sol + Fa–La–Do. Sol et Fa sont une septième mineure — dissonance. Pédale Sol + Ré mineur (Dm) = Sol + Ré–Fa–La. Sol et Fa encore. IV et II créent les dissonances les plus fortes avec une pédale de dominante." },
  { q:"La progression Gm–Fm–Ebm–Dbm peut moduler vers :", opts:["G majeur","Db mineur ou la tonalité dont Dbm est un degré — après Dbm, une cadence parfaite confirme","C majeur uniquement","Uniquement les tons voisins de G"], a:1, fb:"La marche harmonique Gm–Fm–Ebm–Dbm s'arrête sur Dbm. Si on confirme Db (majeur ou mineur) par une cadence parfaite (Ab7–Dbm ou Ab–Db), la modulation vers Db est établie. La marche a servi de transition." },
  { q:"Quel outil crée la modulation la plus imperceptible ?", opts:["La marche harmonique","La modulation par note commune — une seule note reste, le changement est presque inaudible","La minorisation","La modulation directe"], a:1, fb:"La note commune maintenue au soprano pendant le changement harmonique crée la transition la plus fluide — l'oreille suit le fil de la note tenue et 'glisse' naturellement vers la nouvelle tonalité sans rupture perceptible." },
  { q:"L'accord G7/C suivi de C est souvent précédé de :", opts:["Un accord de F uniquement","Dm, F, ou tout accord de SD — pour la séquence SD–appogiaturé–T","G majeur","Am uniquement"], a:1, fb:"La séquence SD → G7/C → C est très fréquente : Dm (ou F) prépare la dominante appogiaturée G7/C qui se résout sur C. On peut aussi enchaîner I6/4 → G7/C → C pour une cadence encore plus élaborée." },
  { q:"La pédale de tonique au début d'une pièce sert à :", opts:["Créer de la tension","Établir clairement la tonalité dès le début — l'auditeur s'ancre dans le nouveau centre tonal","Moduler rapidement","Créer une ambiguïté tonale"], a:1, fb:"Une pédale de tonique en ouverture établit immédiatement et sans ambiguïté la tonalité principale. Bach et Händel utilisent souvent cette technique dans leurs préludes et ouvertures pour ancrer la tonalité dès les premières mesures." },
  { q:"La modulation par minorisation est parfois appelée 'chromatisme fonctionnel' car :", opts:["Elle utilise la gamme chromatique entière","L'altération (abaissement de la tierce) est chromatique mais fonctionnellement justifiée — elle sert à changer de tonalité","Elle est très rapide","Elle utilise uniquement des demi-tons"], a:1, fb:"'Chromatisme fonctionnel' : le Mi♭ (abaissement de Mi dans C→Cm) est une altération chromatique (Mi → Mi♭, un demi-ton). Mais ce chromatisme est fonctionnel — il sert à réinterpréter l'accord dans une nouvelle tonalité." },
  { q:"La pédale de dominante prolongée avant une récapitulation dans la forme sonate crée :", opts:["De la monotonie","L'attente maximale du retour au thème principal — la tension accumulée amplifie l'impact de la récapitulation","Une modulation vers la dominante","Un accord appogiaturé de tonique"], a:1, fb:"Dans la forme sonate, la retransition vers la récapitulation utilise souvent une longue pédale de dominante. Cette attente prolongée du retour à la tonique crée une tension structurelle forte — quand le thème revient, l'impact est décuplé." },
  { q:"Quelle est la relation entre accord appogiaturé et 6/4 de cadence ?", opts:["Ils sont identiques","I6/4 peut être analysé comme un accord appogiaturé de I sur basse de V — les deux sont des dissonances structurelles qui préparent la dominante","Aucune relation","Le 6/4 est toujours appogiaturé"], a:1, fb:"I6/4 (C/G) = accord de C avec Sol à la basse. Sol est la dominante — l'accord de C 'flotte' sur une basse de dominante. C'est analogue à un accord appogiaturé de I sur V. Les deux créent une dissonance résolue vers V7–I." },
  { q:"Les techniques de marche, note commune, minorisation et pédale peuvent :", opts:["S'exclure mutuellement","Se combiner librement — ex : une marche harmonique avec pédale, ou une minorisation avec note commune","Uniquement être utilisées séparément","S'utiliser uniquement en mineur"], a:1, fb:"Toutes ces techniques peuvent coexister et se combiner. Une progression complexe peut utiliser une marche harmonique qui s'arrête sur une note commune, puis une minorisation pour confirmer la nouvelle tonalité avec une pédale de dominante." },
  { q:"La technique la plus utilisée pour les grandes finales orchestrales est :", opts:["La marche diatonique","La pédale de tonique + accord appogiaturé + cadence parfaite — accumulation de tensions résolues sur I","La minorisation","La note commune"], a:1, fb:"Les grandes finales (Beethoven, Brahms, Mahler) accumulent les tensions : pédale de dominante puis de tonique, accords appogiaturés, 6/4, V7, résolution sur I. L'accumulation et la résolution finale créent un effet catartique puissant." },
  { q:"Dans le répertoire romantique, quelle technique de modulation est préférée pour les passages lyriques ?", opts:["La marche harmonique brutale","La modulation par note commune — sa fluidité préserve le chant mélodique","La minorisation uniquement","La pédale de dominante"], a:1, fb:"Les passages lyriques romantiques (Schubert, Schumann, Brahms) utilisent souvent la note commune pour moduler sans perturber le chant. La mélodie glisse naturellement d'une tonalité à l'autre, guidée par la note tenue." },
  { q:"La distinction entre modulation et tonicisation dans un contexte de marche harmonique est :", opts:["Impossible à faire","Déterminée par la durée du séjour dans la nouvelle tonalité — tonicisation si bref, modulation si confirmée par cadence","Déterminée par la hauteur","Toujours une modulation dans une marche harmonique"], a:1, fb:"Dans une marche harmonique, chaque étape peut être une tonicisation brève ou une modulation plus longue. Si on s'arrête et qu'une cadence parfaite confirme, c'est une modulation. Si la marche continue immédiatement, chaque étape est une tonicisation." },
];

const QUIZ_COUNT = 10;

// ─── Styles ───────────────────────────────────────────────────────────────────

const S = {
  wrap:  { fontFamily:"var(--font-sans,system-ui)", maxWidth:720, margin:"0 auto", padding:"0 1rem 3rem" } as React.CSSProperties,
  hdr:   { padding:"1.5rem 0 1rem", borderBottom:"0.5px solid #e5e5e5", marginBottom:"1.25rem" } as React.CSSProperties,
  badge: { display:"inline-block", background:"#EEEDFE", color:"#534AB7", fontSize:11, fontWeight:500, padding:"2px 10px", borderRadius:20, marginBottom:6 } as React.CSSProperties,
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

export default function Cours9() {
  const i18n = useCoursI18n("cours9");
  const [sec,    setSec]    = useState("marche");
  const [selM,   setSelM]   = useState<number|null>(null);
  const [selP,   setSelP]   = useState<number|null>(null);

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
        <p style={S.sub}>{i18n.subtitle}</p>
      </div>

      <nav style={S.nav}>
        {SECTIONS_IDS.map(id => (
          <button key={id} style={S.pill(sec===id)} onClick={() => setSec(id)}>
            {i18n.sectionLabel(id)}
          </button>
        ))}
      </nav>

      {/* ══ MARCHE ══ */}
      {sec === "marche" && (
        <div>
          <h2 style={S.h2}>La marche harmonique</h2>
          <p style={S.p}>Une <strong>marche</strong> est un motif musical (harmonique ou mélodique) répété à différents degrés — comme si on déplaçait le motif progressivement. Il en existe deux grandes familles aux effets très différents.</p>

          <div style={S.info}>
            <strong>Canon de Pachelbel :</strong> l'exemple le plus célèbre de marche diatonique. Le motif I–V est transposé sur VI–III puis IV–I, restant dans D majeur tout au long.
          </div>

          <p style={{ fontSize:13, color:"#888", marginBottom:12, marginTop:16 }}>Cliquez pour comparer les deux types.</p>

          {TYPES_MARCHE.map((m, i) => (
            <div key={m.name} onClick={() => setSelM(selM===i?null:i)}
              style={{ border:`0.5px solid ${selM===i?m.color:"#e5e5e5"}`, borderRadius:10, marginBottom:10, overflow:"hidden", background:selM===i?m.bg:"#fff", transition:"all .15s", cursor:"pointer" }}>
              <div style={{ padding:"14px 16px" }}>
                <div style={{ fontSize:15, fontWeight:500, color:selM===i?m.color:"#111", marginBottom:3 }}>{m.name}</div>
                <div style={{ fontSize:12, color:"#888", fontStyle:"italic", marginBottom:6 }}>{m.subtitle}</div>
                <p style={{ fontSize:13, color:"#555", lineHeight:1.65, margin:0 }}>{m.desc}</p>
              </div>
              {selM === i && (
                <div style={{ padding:"0 16px 14px", borderTop:`0.5px solid ${m.color}20` }}>
                  <p style={{ fontSize:13, color:"#444", lineHeight:1.65, margin:"8px 0 8px", fontStyle:"italic" }}>Exemple : {m.exemple}</p>
                  <p style={{ fontSize:12, color:m.color, margin:"0 0 10px" }}>Effet : {m.effet}</p>
                  <div style={{ fontFamily:"monospace", fontSize:13, color:m.color, letterSpacing:1, marginBottom:10 }}>
                    {m.prog.join(" → ")}
                  </div>
                  <button onClick={e => { e.stopPropagation(); playProg(ref as React.RefObject<PianoPlayerRef>, m.prog as string[], 900); }}
                    style={{ fontSize:12, padding:"5px 14px", border:`0.5px solid ${m.color}`, borderRadius:20, cursor:"pointer", background:"transparent", color:m.color }}>
                    ▶ Écouter
                  </button>
                </div>
              )}
            </div>
          ))}

          <h3 style={{ fontSize:14, fontWeight:500, margin:"20px 0 8px", color:"#111" }}>Comparaison</h3>
          <div style={{ overflowX:"auto" }}>
            <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
              <thead>
                <tr style={{ borderBottom:"0.5px solid #e5e5e5" }}>
                  {["","Marche diatonique","Marche harmonique"].map(h => (
                    <th key={h} style={{ textAlign:"left", padding:"6px 10px", fontWeight:500, color:"#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label:"Intervalles", dia:"Adaptés à la gamme", har:"Exactement identiques" },
                  { label:"Tonalité",    dia:"Reste dans la gamme", har:"Quitte la gamme — module" },
                  { label:"Effet",       dia:"Animation interne", har:"Dérive / voyage tonal" },
                  { label:"Exemple",     dia:"Canon de Pachelbel", har:"Gm–Fm–Ebm–Dbm" },
                ].map((row, i) => (
                  <tr key={row.label} style={{ borderBottom:"0.5px solid #f0f0f0", background:i%2===0?"#fff":"#fafafa" }}>
                    <td style={{ padding:"7px 10px", fontWeight:500, color:"#888" }}>{row.label}</td>
                    <td style={{ padding:"7px 10px", color:"#0F6E56" }}>{row.dia}</td>
                    <td style={{ padding:"7px 10px", color:"#534AB7" }}>{row.har}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ══ NOTE COMMUNE ══ */}
      {sec === "notecom" && (
        <div>
          <h2 style={S.h2}>Modulation par note commune</h2>
          <p style={S.p}>Au lieu d'un <em>accord</em> commun aux deux tonalités (pivot), on utilise ici une seule <strong>note</strong> comme lien. Cette note appartient à l'accord de départ avec une certaine fonction, puis est maintenue pendant que l'harmonie change — elle se retrouve dans le nouvel accord avec une fonction différente.</p>

          <div style={S.tip}>
            <strong>Exemple classique :</strong> G majeur → Eb majeur avec Sol au soprano.<br/>
            Sol = tonique de G (fondamentale) → Sol = tierce de Eb (Mi♭–Sol–Si♭).<br/>
            La même hauteur, deux rôles différents. La modulation est presque imperceptible.
          </div>

          <div style={S.info}>
            <strong>Où placer la note commune ?</strong> De préférence au soprano — elle est la plus audible et guide l'oreille. À la basse, elle crée plutôt un effet de pédale. Dans les voix intérieures, l'effet est plus discret.
          </div>

          <h3 style={{ fontSize:14, fontWeight:500, margin:"20px 0 8px", color:"#111" }}>Notes communes fréquentes</h3>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:8, marginBottom:16 }}>
            {[
              { note:"La tierce",     ex:"Mi de C = tierce de C → tierce de Am ou fondamentale de Em", color:"#0F6E56", bg:"#E1F5EE" },
              { note:"La septième",   ex:"Sib de C7 = septième de C7 → fondamentale de Bb ou tierce de Gm", color:"#534AB7", bg:"#EEEDFE" },
              { note:"La neuvième",   ex:"Ré de C9 = neuvième de C → tierce de Bb ou fondamentale de Dm", color:"#BA7517", bg:"#FAEEDA" },
              { note:"La treizième",  ex:"La de C13 = treizième de C → fondamentale de Am ou tierce de F", color:"#185FA5", bg:"#E6F1FB" },
            ].map(item => (
              <div key={item.note} style={{ border:`0.5px solid ${item.color}30`, borderRadius:10, padding:"12px 14px", background:item.bg }}>
                <div style={{ fontSize:13, fontWeight:500, color:item.color, marginBottom:5 }}>{item.note}</div>
                <p style={{ fontSize:12, color:"#444", lineHeight:1.6, margin:0 }}>{item.ex}</p>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize:14, fontWeight:500, margin:"20px 0 8px", color:"#111" }}>Exemples de progressions</h3>
          {[
            { label:"G → Eb via Sol (tierce de Eb)", prog:["G","Eb","Bb7","Eb"], desc:"Sol = I de G → III de Eb. Harmonie change, Sol tenu au soprano." },
            { label:"C → Am via Mi (I de Am)", prog:["C","Am","E7","Am"], desc:"Mi = III de C → I de Am. C devient Am — modulation vers le relatif mineur." },
            { label:"C → F via Fa (IV de C)", prog:["C","F","C7","F"], desc:"Fa = IV de C → I de F. C7 (V/IV) confirme F comme nouveau centre." },
          ].map(ex => (
            <div key={ex.label} style={{ border:"0.5px solid #e5e5e5", borderRadius:10, padding:"12px 16px", marginBottom:8, background:"#fafafa" }}>
              <div style={{ fontSize:13, fontWeight:500, color:"#111", marginBottom:4 }}>{ex.label}</div>
              <div style={{ fontFamily:"monospace", fontSize:12, color:"#534AB7", marginBottom:6, letterSpacing:1 }}>{ex.prog.join(" → ")}</div>
              <p style={{ fontSize:12, color:"#666", margin:"0 0 8px", lineHeight:1.6 }}>{ex.desc}</p>
              <button onClick={() => playProg(ref as React.RefObject<PianoPlayerRef>, ex.prog, 950)}
                style={{ fontSize:12, padding:"5px 14px", border:"0.5px solid #534AB7", borderRadius:20, cursor:"pointer", background:"transparent", color:"#534AB7" }}>
                ▶ Écouter
              </button>
            </div>
          ))}

          <div style={S.warn}>
            La modulation par note commune est particulièrement efficace pour atteindre des <strong>tonalités éloignées</strong> (médiantes, relations de tierce) où l'accord pivot diatonique est difficile à trouver.
          </div>
        </div>
      )}

      {/* ══ MINORISATION ══ */}
      {sec === "minor" && (
        <div>
          <h2 style={S.h2}>Modulation par minorisation</h2>
          <p style={S.p}>La minorisation transforme un accord majeur en son homonyme mineur — on abaisse la tierce d'un demi-ton. Ce nouvel accord mineur peut alors être réinterprété comme un degré d'une autre tonalité, initiant ainsi une modulation.</p>

          <div style={S.tip}>
            <strong>Exemple fondamental :</strong> C (Do–Mi–Sol) → Cm (Do–Mi♭–Sol)<br/>
            Cm = IIm de Bb majeur → F7 (V de Bb) → Bb<br/>
            En abaissant un seul demi-ton (Mi → Mi♭), on module de C vers Bb.
          </div>

          <h3 style={{ fontSize:14, fontWeight:500, margin:"20px 0 8px", color:"#111" }}>Les trois minorisat ions les plus fréquentes</h3>
          {[
            { de:"I → Im", ex:"C → Cm (C majeur)", vers:"Bb majeur (Cm = IIm de Bb)", desc:"La plus dramatique — la tonique elle-même s'assombrit. Très expressif dans les codas romantiques.", prog:["C","Cm","F7","Bb"], color:"#993C1D", bg:"#FAECE7" },
            { de:"IV → IVm", ex:"F → Fm (en C)", vers:"Emprunt — reste en C", desc:"Le IVm est souvent un simple emprunt coloré, pas toujours une modulation. Couleur sombre sur la sous-dominante.", prog:["C","Fm","G7","C"], color:"#0F6E56", bg:"#E1F5EE" },
            { de:"I → Im (en mineur)", ex:"A → Am (en G)", vers:"G mineur ou Gm est VI de Bb", desc:"Moins fréquent mais expressif — la majorisation inverse (Im→I) est aussi possible.", prog:["G","Gm","F","Eb"], color:"#534AB7", bg:"#EEEDFE" },
          ].map(row => (
            <div key={row.de} style={{ border:`0.5px solid ${row.color}30`, borderRadius:10, padding:"14px 16px", marginBottom:10, background:row.bg }}>
              <div style={{ fontSize:14, fontWeight:500, color:row.color, marginBottom:4 }}>{row.de} — {row.ex}</div>
              <div style={{ fontSize:12, color:"#666", marginBottom:6 }}>Vers : {row.vers}</div>
              <p style={{ fontSize:13, color:"#444", lineHeight:1.6, marginBottom:8 }}>{row.desc}</p>
              <div style={{ fontFamily:"monospace", fontSize:12, color:row.color, letterSpacing:1, marginBottom:8 }}>{row.prog.join(" → ")}</div>
              <button onClick={() => playProg(ref as React.RefObject<PianoPlayerRef>, row.prog, 1000)}
                style={{ fontSize:12, padding:"5px 14px", border:`0.5px solid ${row.color}`, borderRadius:20, cursor:"pointer", background:"transparent", color:row.color }}>
                ▶ Écouter
              </button>
            </div>
          ))}

          <div style={S.info}>
            <strong>Cas fréquents :</strong> IV majeur → IV mineur (emprunt classique du romantisme), I majeur → I mineur (très expressif), V majeur → V mineur (rare mais efficace comme préparation modale).
          </div>
        </div>
      )}

      {/* ══ PÉDALES ══ */}
      {sec === "pedales" && (
        <div>
          <h2 style={S.h2}>Les pédales harmoniques</h2>
          <p style={S.p}>Une <strong>pédale harmonique</strong> est une note maintenue (tenue ou répétée) dans une voix pendant que les autres voix changent d'accords. Elle peut appartenir aux accords qui passent — ou leur être étrangère, créant des dissonances expressives résolues plus tard.</p>

          <p style={{ fontSize:13, color:"#888", marginBottom:12 }}>Cliquez sur un type de pédale pour en voir les détails.</p>

          {TYPES_PEDALES.map((p, i) => (
            <div key={p.type} onClick={() => setSelP(selP===i?null:i)}
              style={{ border:`0.5px solid ${selP===i?p.color:"#e5e5e5"}`, borderRadius:10, marginBottom:8, overflow:"hidden", background:selP===i?p.bg:"#fff", transition:"all .15s", cursor:"pointer" }}>
              <div style={{ display:"flex", alignItems:"center", gap:12, padding:"12px 16px" }}>
                <span style={{ fontSize:13, fontWeight:600, color:selP===i?p.color:"#111", minWidth:120 }}>{p.type}</span>
                <span style={{ fontSize:11, color:"#999", flex:1 }}>Note tenue : {p.note}</span>
                <span style={{ fontSize:11, color:p.color, background:p.bg, padding:"2px 8px", borderRadius:8, border:`0.5px solid ${p.color}` }}>{p.role.split(" — ")[0]}</span>
              </div>
              {selP === i && (
                <div style={{ padding:"0 16px 14px", borderTop:`0.5px solid ${p.color}20` }}>
                  <p style={{ fontSize:13, color:"#444", lineHeight:1.65, margin:"8px 0 6px" }}>{p.car}</p>
                  <div style={{ fontFamily:"monospace", fontSize:12, color:p.color, marginTop:6 }}>
                    Exemple : {p.ex}
                  </div>
                </div>
              )}
            </div>
          ))}

          <h3 style={{ fontSize:14, fontWeight:500, margin:"20px 0 8px", color:"#111" }}>Tableau comparatif</h3>
          <div style={{ overflowX:"auto" }}>
            <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
              <thead>
                <tr style={{ borderBottom:"0.5px solid #e5e5e5" }}>
                  {["Type","Note tenue","Position habituelle","Usage typique"].map(h => (
                    <th key={h} style={{ textAlign:"left", padding:"6px 8px", fontWeight:500, color:"#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { t:"Tonique",  n:"I",    pos:"Basse",   u:"Début/fin — stabilisation" },
                  { t:"Dominante",n:"V",    pos:"Basse",   u:"Avant cadence — tension" },
                  { t:"Double",   n:"I+V",  pos:"Basse+voix",u:"Passages modulants" },
                  { t:"Soprano",  n:"Variable",pos:"Soprano",u:"Impressionnisme — suspension" },
                ].map((row, i) => (
                  <tr key={row.t} style={{ borderBottom:"0.5px solid #f0f0f0", background:i%2===0?"#fff":"#fafafa" }}>
                    <td style={{ padding:"7px 8px", fontWeight:500 }}>{row.t}</td>
                    <td style={{ padding:"7px 8px", color:"#185FA5", fontFamily:"monospace" }}>{row.n}</td>
                    <td style={{ padding:"7px 8px", color:"#555" }}>{row.pos}</td>
                    <td style={{ padding:"7px 8px", color:"#555" }}>{row.u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.warn}>
            <strong>Origine du terme :</strong> l'orgue possède un <em>pédalier</em> — un clavier joué aux pieds qui tient les basses. L'organiste peut maintenir une note au pied pendant que les deux mains jouent librement. D'où le terme 'pédale d'orgue' (pédale harmonique).
          </div>
        </div>
      )}

      {/* ══ ACCORDS APPOGIATURÉS ══ */}
      {sec === "appog" && (
        <div>
          <h2 style={S.h2}>Les accords appogiaturés</h2>
          <p style={S.p}>Un <strong>accord appogiaturé</strong> est l'équivalent harmonique de la note d'appogiature — un accord entier étranger à la fonction en cours, inséré sur un <em>temps fort</em>, qui se résout vers un accord réel. La dissonance est brève mais expressive.</p>

          <div style={S.info}>
            <strong>Schéma fonctionnel :</strong> Accord étranger (temps fort, dissonant) → Accord réel (résolution conjointe des voix)
          </div>

          <h3 style={{ fontSize:14, fontWeight:500, margin:"20px 0 8px", color:"#111" }}>L'accord de dominante sur tonique — le cas classique</h3>
          <div style={{ border:"0.5px solid #185FA530", borderRadius:10, padding:"16px", background:"#E6F1FB", marginBottom:16 }}>
            <div style={{ fontSize:14, fontWeight:500, color:"#185FA5", marginBottom:8 }}>G7/C — dominante appogiaturée sur basse de tonique</div>
            <p style={{ fontSize:13, color:"#0C447C", lineHeight:1.65, marginBottom:12 }}>
              G7/C = Sol–Si–Ré–Fa avec <strong>Do à la basse</strong>. L'accord exprime une tension de dominante (G7), mais le Do à la basse empêche la résolution réelle — Do est la tonique, pas Sol. C'est un <em>retard harmonique</em> de la résolution finale.
            </p>
            <div style={{ background:"rgba(255,255,255,0.7)", borderRadius:8, padding:"10px 14px", marginBottom:12 }}>
              <div style={{ fontSize:12, color:"#999", marginBottom:6 }}>Résolution G7/C → C</div>
              <div style={{ fontSize:13, fontFamily:"monospace", color:"#185FA5" }}>Si → Do ↑ (sensible → tonique)</div>
              <div style={{ fontSize:13, fontFamily:"monospace", color:"#185FA5" }}>Fa → Mi ↓ (7e → tierce)</div>
              <div style={{ fontSize:13, fontFamily:"monospace", color:"#185FA5" }}>Ré → Mi ou Sol (quinte → reste)</div>
              <div style={{ fontSize:13, fontFamily:"monospace", color:"#185FA5" }}>Do (basse) → reste immobile</div>
            </div>
            <button onClick={() => playProg(ref as React.RefObject<PianoPlayerRef>, ["G7/C","C"], 1000)}
              style={{ fontSize:12, padding:"5px 14px", border:"0.5px solid #185FA5", borderRadius:20, cursor:"pointer", background:"transparent", color:"#185FA5" }}>
              ▶ Écouter G7/C → C
            </button>
          </div>

          <div style={S.tip}>
            <strong>Séquence complète :</strong> Dm → G7/C → C ou I6/4 → G7/C → C. L'accord appogiaturé G7/C retarde la résolution en C — plus la tension est prolongée, plus la résolution est satisfaisante.
          </div>

          <h3 style={{ fontSize:14, fontWeight:500, margin:"20px 0 8px", color:"#111" }}>Relation avec la pédale de soprano</h3>
          <p style={S.p}>La pédale de soprano crée naturellement des accords appogiaturés : la note tenue au soprano devient étrangère aux accords changeant sous elle, créant des dissonances successives résolues chaque fois que l'harmonie "rejoint" la pédale. C'est la technique caractéristique de l'écriture impressionniste.</p>

          <div style={S.info}>
            <strong>Usage romantique :</strong> les codas de Beethoven, Brahms et Mahler accumulent souvent : SD → I6/4 → G7/C → C. Chaque étape retarde la résolution finale — l'effet catartique est maximal quand C pur arrive enfin.
          </div>
        </div>
      )}

      {sec === "quiz" && (
        <div>
          <h2 style={S.h2}>{i18n.training}</h2>
          {done ? (
            <div style={{ textAlign:"center", padding:"2rem 0" }}>
              <div style={{ fontSize:32, marginBottom:8 }}>{scr>=9?"🎓":scr>=7?"🎹":"💪"}</div>
              <div style={{ fontSize:20, fontWeight:500, color:"#111", marginBottom:4 }}>
                {i18n.t("score")} : {scr} / {QUIZ_COUNT}
              </div>
              <div style={{ fontSize:14, color:"#666", marginBottom:20 }}>
                {i18n.quizMessage(scr, QUIZ_COUNT)}
              </div>
              <button onClick={reset} style={{ fontSize:13, padding:"8px 20px", border:"0.5px solid #534AB7", borderRadius:20, cursor:"pointer", background:"#EEEDFE", color:"#534AB7" }}>
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

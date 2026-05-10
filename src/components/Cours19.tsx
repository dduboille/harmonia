"use client";

/**
 * Cours19.tsx
 * Harmonia · Niveau 2 · Cours 19 — Introduction à l'orchestration
 * Convention : affichage anglais, dotKeys PianoPlayer français
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";

// ── Audio helpers ─────────────────────────────────────────────────────────────

function playChord(ref: React.RefObject<PianoPlayerRef>, keys: string[], dur = 1.4) {
  keys.forEach(key => {
    const [n, o] = key.split(":");
    ref.current?.playNote(n, parseInt(o), { duration: dur });
  });
}

function playProg(
  ref: React.RefObject<PianoPlayerRef>,
  chords: string[][],
  gapMs = 1100,
  dur = 1.0,
) {
  chords.forEach((chord, i) => {
    setTimeout(() => playChord(ref, chord, dur), i * gapMs);
  });
}

// ── Audio demos (ascending pitch verified) ────────────────────────────────────

// Registre grave : basse / tuba / contrebasse (Do2–Mi2–Sol2)
const REG_GRAVE: string[][] = [["Do:2","Mi:2","Sol:2"]];   // C2=36, E2=40, G2=43 ✓

// Registre ténor : violoncelle / trombone / basson (Do3–Mi3–Sol3)
const REG_TENOR: string[][] = [["Do:3","Mi:3","Sol:3"]];   // C3=48, E3=52, G3=55 ✓

// Registre mezzo : alto / clarinette / cor (Do4–Mi4–Sol4)
const REG_MEZZO: string[][] = [["Do:4","Mi:4","Sol:4"]];   // C4=60, E4=64, G4=67 ✓

// Registre aigu : violon / flûte / hautbois (Do5–Mi5–Sol5)
const REG_AIGU: string[][] = [["Do:5","Mi:5","Sol:5"]];    // C5=72, E5=76, G5=79 ✓

// Accord de cordes en position ouverte (orchestral)
const ACCORD_OUVERT: string[][] = [["Do:2","Sol:3","Mi:4","Do:5"]]; // 36,55,64,72 ✓

// Accord en position serrée (pianistique)
const ACCORD_SERRE: string[][] = [["Do:4","Mi:4","Sol:4","Do:5"]];  // 60,64,67,72 ✓

// SATB voicing : B=Do3, T=Sol3, A=Mi4, S=Do5
const SATB_DEMO: string[][] = [["Do:3","Sol:3","Mi:4","Do:5"]];     // 48,55,64,72 ✓

// Tutti orchestral (spectre complet)
const TUTTI_ORCH: string[][] = [["Do:2","Sol:2","Do:3","Sol:3","Mi:4","Do:5"]]; // 36,43,48,55,64,72 ✓

// Progression de Boléro (mélodie solo puis harmonisée)
const BOLERO_SOLO: string[][] = [
  ["Do:4"],["Ré:4"],["Mi:4"],["Sol:4"],["Mi:4"],["Ré:4"],["Do:4"],
];
const BOLERO_HARM: string[][] = [
  ["Do:3","Mi:3","Sol:3","Do:4"],   // I  (48,52,55,60) ✓
  ["Sol:2","Si:3","Ré:4","Sol:4"],  // V7 (43,59,62,67) ✓
  ["Do:3","Mi:3","Sol:3","Mi:4"],   // I  (48,52,55,64) ✓
  ["Fa:3","La:3","Do:4","Fa:4"],    // IV (53,57,60,65) ✓
  ["Do:3","Mi:3","Sol:3","Do:4"],   // I  (48,52,55,60) ✓
];

// ── Static data ───────────────────────────────────────────────────────────────

interface Instrument {
  name: string;
  range: string;
  timbre: string;
  role: string;
}

interface Family {
  id: string;
  name: string;
  emoji: string;
  color: string;
  bg: string;
  desc: string;
  instruments: Instrument[];
  demo: string[][];
  demoLabel: string;
  demoDur?: number;
}

const FAMILIES: Family[] = [
  {
    id: "cordes",
    name: "Cordes",
    emoji: "🎻",
    color: "#185FA5",
    bg: "#E6F1FB",
    desc: "L'épine dorsale de l'orchestre. Les cordes jouent en tutti (tout l'ensemble) ou en pupitre séparé. Leur homogénéité de timbre permet des fondus et des crescendos progressifs impossibles avec d'autres familles.",
    instruments: [
      { name: "Violon I & II", range: "Sol3 – La7  (pratique : Sol3–Mi6)", timbre: "Brillant, lyrique, agile", role: "Mélodie soprano, harmonie haute" },
      { name: "Alto (viola)", range: "Do3 – Mi6  (pratique : Do3–La5)", timbre: "Sombre, chaud, nasal — registre intermédiaire", role: "Harmonie contralto, contre-mélodie" },
      { name: "Violoncelle", range: "Do2 – La5  (pratique : Do2–Mi5)", timbre: "Chantant, puissant, expressif", role: "Mélodie grave, basse chantante, contrepoint" },
      { name: "Contrebasse", range: "Mi1 – Sol4  (sonne 8ve plus bas)", timbre: "Massif, grave, pizzicato pour le jazz", role: "Fondation harmonique, renforcement du grave" },
    ],
    demo: ACCORD_OUVERT,
    demoLabel: "▶ Accord de cordes (position ouverte)",
    demoDur: 2.0,
  },
  {
    id: "bois",
    name: "Bois",
    emoji: "🪈",
    color: "#0F6E56",
    bg: "#E1F5EE",
    desc: "Les bois apportent couleur et individualité. Chaque instrument a un timbre si distinct qu'ils s'entendent même doublés par les cordes. Ils assurent les doublures intermédiaires, les solos lyriques et le contrepoint.",
    instruments: [
      { name: "Flûte", range: "Do4 – Do7  (sonne comme notée)", timbre: "Aérien, lumineux, rapide en aigu", role: "Mélodie soprano, ornements, solos lyriques" },
      { name: "Hautbois", range: "Sib3 – La6  (sonne comme notée)", timbre: "Nasal, poignant, expressif", role: "Solos cantabile, doublure aigu de mélodie" },
      { name: "Clarinette (en Sib)", range: "Mi3 – Sib6  (sonne un ton plus bas)", timbre: "Trois registres : chalumeau (sombre) / médium / aigu (perçant)", role: "Harmonie intermédiaire, solos, rôle très polyvalent" },
      { name: "Basson", range: "Sib1 – Mib5  (sonne comme notée)", timbre: "Grave, sombre, légèrement comique en aigu", role: "Basse des bois, contrepoint, doublure du grave" },
    ],
    demo: REG_MEZZO,
    demoLabel: "▶ Registre bois (médium-aigu)",
    demoDur: 2.0,
  },
  {
    id: "cuivres",
    name: "Cuivres",
    emoji: "🎺",
    color: "#7B1F1F",
    bg: "#FCEAEA",
    desc: "Les cuivres sont les instruments les plus puissants de l'orchestre. Utilisés avec parcimonie en dynamique douce, ils sont fondus dans la masse ; en forte, ils dominent tout. Ravel et Brahms maîtrisent l'art de les utiliser à pleine puissance sans masquer les cordes.",
    instruments: [
      { name: "Cor (french horn)", range: "Si1 – Fa5  (sonne un quinte plus bas)", timbre: "Noble, chaleureux, doux en harmoniques", role: "Lien entre bois et cuivres, harmonie médium, solos lyriques" },
      { name: "Trompette", range: "Fa#3 – Do6  (sonne comme notée ou un ton plus bas)", timbre: "Éclatant, brillant, fanfare, coupant en aigu", role: "Mélodie soprano, fanfares, punctuation rythmique" },
      { name: "Trombone", range: "Mi2 – Fa4  (+ pédales graves)", timbre: "Puissant, grave, majestueux — seul glissando possible", role: "Harmonie grave, chorals de cuivres, basse des cuivres" },
      { name: "Tuba", range: "Sib0 – Fa4  (sonne comme notée)", timbre: "Massif, profond, fondation", role: "Fondation grave des cuivres, basse harmonique" },
    ],
    demo: REG_GRAVE,
    demoLabel: "▶ Registre cuivres graves (tuba/tbn)",
    demoDur: 2.5,
  },
  {
    id: "percussions",
    name: "Percussions",
    emoji: "🥁",
    color: "#6B3FA0",
    bg: "#F0EAFA",
    desc: "Les percussions structurent le rythme, soulignent les climax et ajoutent de la couleur. Les instruments à son déterminé (timbales, xylophone) jouent des hauteurs précises ; les instruments à son indéterminé (caisse claire, cymbales) apportent timbre et couleur.",
    instruments: [
      { name: "Timbales", range: "Sons déterminés — jeu entre Do2 et La3", timbre: "Solennel, roulant, tonnant selon la frappe", role: "Harmonie rythmique, ponctuation, crescendos dramatiques" },
      { name: "Caisse claire", range: "Son indéterminé — registre médium-aigu", timbre: "Brillant, militaire, tranchant", role: "Articulation rythmique, marches, tensions" },
      { name: "Cymbales", range: "Son indéterminé — large spectre", timbre: "Brillant, déployé — crash / charleston / suspendue", role: "Accents, transitions, brillance au forte" },
      { name: "Grosse caisse", range: "Son indéterminé — grave", timbre: "Grave, sourd, percutant", role: "Accents forts, soulignement des climax" },
    ],
    demo: TUTTI_ORCH,
    demoLabel: "▶ Accord tutti (spectre complet)",
    demoDur: 2.5,
  },
  {
    id: "piano",
    name: "Piano & guitare",
    emoji: "🎹",
    color: "#BA7517",
    bg: "#FAEEDA",
    desc: "Le piano est un instrument harmonique complet — il peut jouer mélodie, harmonie et basse simultanément. À l'orchestre, il s'utilise souvent en soliste ou en couleur percussive. La guitare joue plus souvent dans les formations de chambre et le jazz.",
    instruments: [
      { name: "Piano", range: "La0 – Do8  (étendue complète)", timbre: "Percussif, richesse harmonique, pédale de résonance", role: "Instrument autonome ou soliste, couleur percussive à l'orchestre" },
      { name: "Guitare", range: "Mi2 – Mi6  (sonne 8ve plus bas que notée)", timbre: "Chaleureux, intime, attaque douce", role: "Harmonie de chambre, accompagnement jazz/classique" },
    ],
    demo: ACCORD_SERRE,
    demoLabel: "▶ Position serrée (pianistique)",
    demoDur: 2.0,
  },
];

interface Principle {
  id: string;
  name: string;
  color: string;
  bg: string;
  desc: string;
  rule: string;
  example: string;
  demo?: string[][];
  demoLabel?: string;
  demo2?: string[][];
  demo2Label?: string;
  demoGapMs?: number;
  demoDur?: number;
}

const PRINCIPLES: Principle[] = [
  {
    id: "doublures",
    name: "Doublures",
    color: "#185FA5",
    bg: "#E6F1FB",
    desc: "Doubler un instrument, c'est lui confier la même ligne mélodique ou harmonique — à l'unisson ou à l'octave. La doublure renforce le son sans changer sa fonction.",
    rule: "Cordes + Bois → fusion douce, son arrondi. Cordes + Cuivres → puissance et brillance. Éviter de doubler les cuivres fortissimo sur les bois : les cuivres couvrent.",
    example: "Beethoven 5e : le motif Sol–Sol–Sol–Mib est joué aux cordes et aux bois ensemble dès la 1ère mesure — doublure à l'unisson pour un impact maximal.",
    demo: ACCORD_OUVERT,
    demoLabel: "▶ Position ouverte (orchestrale)",
    demo2: ACCORD_SERRE,
    demo2Label: "▶ Position serrée (pianistique)",
    demoGapMs: 1400,
    demoDur: 1.8,
  },
  {
    id: "equilibre",
    name: "Équilibre dynamique",
    color: "#0F6E56",
    bg: "#E1F5EE",
    desc: "L'équilibre entre familles est l'un des défis majeurs de l'orchestration. Un cuivres fortissimo peut couvrir 30 violons jouant forte. Les proportions dynamiques doivent être choisies avec soin.",
    rule: "Cuivres fortissimo : les bois et cordes disparaissent. Pour que les cordes s'entendent au forte, les cuivres jouent mezzo-forte. Le piano à l'orchestre est souvent en opposition ou en solo, rarement en doublure.",
    example: "Ravel Boléro : la même mélodie et harmonie sont répétées 18 fois avec une orchestration progressivement plus dense — modèle d'équilibre cumulatif.",
    demo: BOLERO_HARM,
    demoLabel: "▶ Progression harmonique du Boléro",
    demoGapMs: 1300,
    demoDur: 1.2,
  },
  {
    id: "registres",
    name: "Registres et spectre sonore",
    color: "#7B1F1F",
    bg: "#FCEAEA",
    desc: "L'orchestre couvre un spectre de Do0 (contrebasse/tuba grave) à Do8 (piccolo/violon aigu). Le rôle de l'orchestrateur est de remplir ce spectre harmoniquement sans créer de 'trous' ni de 'bourrages'.",
    rule: "Éviter les trous : si le ténor saute au soprano sans médium, le son semble creux. Éviter le bourrage : trop de notes dans le même registre crée de la boue sonore. Espacer les voix : plus les voix sont graves, plus elles doivent être espacées.",
    example: "Règle fondamentale : les intervalles graves doivent être larges (quintes, octaves) et les aigus peuvent être serrés (tierces, secondes). Un accord parfait Do-Mi-Sol : en grave = Do2–Sol2–Do3 ; en aigu = Do4–Mi4–Sol4.",
    demo: REG_GRAVE,
    demoLabel: "▶ Grave (espace large)",
    demo2: REG_AIGU,
    demo2Label: "▶ Aigu (espace serré OK)",
    demoGapMs: 1200,
    demoDur: 2.0,
  },
  {
    id: "satb",
    name: "SATB → orchestre",
    color: "#6B3FA0",
    bg: "#F0EAFA",
    desc: "La distribution des voix de contrepoint (Soprano/Alto/Ténor/Basse) se mappe naturellement sur les familles orchestrales selon leurs tessitures respectives.",
    rule: "Soprano (S) → Violon I, Flûte, Hautbois, Trompette. Alto (A) → Violon II, Alto, Clarinette, Cor. Ténor (T) → Violoncelle, Trombone, Basson. Basse (B) → Contrebasse, Tuba, Basson grave.",
    example: "Un choral de Bach transcrit pour orchestre : basse aux violoncelles/contrebasses, ténor aux altos/basses de cor, alto aux violons II/clarinettes, soprano aux violons I/hautbois.",
    demo: SATB_DEMO,
    demoLabel: "▶ Accord SATB (B=Do3, T=Sol3, A=Mi4, S=Do5)",
    demoGapMs: 1400,
    demoDur: 2.0,
  },
  {
    id: "piano",
    name: "Écriture pour piano",
    color: "#BA7517",
    bg: "#FAEEDA",
    desc: "L'écriture pianistique obéit à des contraintes spécifiques liées aux deux mains, à la pédale de résonance et à la tessiture idéale de l'instrument.",
    rule: "Main droite : mélodie + harmonie haute (registre Do4–Do6). Main gauche : basse + accompagnement (registre La0–Do4). Pédale de résonance : prolonge et connecte les harmonies. Éviter trop de notes dans le grave (boue sonore) et trop dans l'aigu (aigreur).",
    example: "Chopin Nocturne : mélodie lyrique à la main droite (registre Mi4–Sol5), arpèges larges à la main gauche (registre Do2–Sol3), pédale de résonance tenue sur toute la mesure.",
  },
];

// ── Quiz ──────────────────────────────────────────────────────────────────────

const ALL_QUESTIONS = [
  // Familles
  { q: "Combien de grandes familles d'instruments compose l'orchestre symphonique ?", opts: ["2 (cordes et cuivres)", "3 (cordes, bois, cuivres)", "4 (cordes, bois, cuivres, percussions)", "5 (+ piano)"], a: 2, fb: "L'orchestre symphonique comprend 4 grandes familles : cordes (violons, altos, violoncelles, contrebasses), bois (flûte, hautbois, clarinette, basson), cuivres (cor, trompette, trombone, tuba), percussions (timbales, caisse claire, cymbales...). On ajoute parfois harpe, piano ou guitare selon l'œuvre." },
  { q: "Quelle famille d'instruments constitue 'l'épine dorsale' de l'orchestre ?", opts: ["Les cuivres", "Les percussions", "Les cordes — plus nombreuses et les plus présentes", "Les bois"], a: 2, fb: "Les cordes forment la fondation de l'orchestre : elles sont de loin les plus nombreuses (un grand orchestre compte 60+ musiciens de cordes sur ~100 musiciens). Leur homogénéité de timbre permet des fondus et crescendos impossibles avec d'autres familles." },
  { q: "Les 'bois' sont ainsi appelés car :", opts: ["Ils jouent des musiques de forêt", "Historiquement fabriqués en bois — bien que flûtes et saxophones modernes soient souvent en métal", "Ils sont toujours joués en forêt", "Ils produisent toujours un son doux"], a: 1, fb: "Les bois (woodwinds) sont nommés d'après leur matériau historique. Aujourd'hui, les flûtes sont généralement en métal (argent, or) et les saxophones également — mais ils restent classés dans les bois par leur mécanisme de production de son (colonne d'air dans un tube)." },

  // Cordes
  { q: "Quelle est la tessiture pratique du violon ?", opts: ["Do2 – Sol4 (registre grave)", "Sol3 – Mi6 environ (registre soprano)", "Do1 – Do5 (grande étendue)", "La3 – La6 (médium)"], a: 1, fb: "Le violon couvre pratiquement Sol3–Mi6 (avec des extensions possibles jusqu'à La7 pour les virtuoses). C'est l'instrument de mélodie soprano par excellence. Il existe en deux pupitres : Violon I (mélodie principale) et Violon II (harmonie haute)." },
  { q: "Quel instrument à cordes a le timbre le plus sombre et intermédiaire ?", opts: ["Le violon", "L'alto (viola)", "Le violoncelle", "La contrebasse"], a: 1, fb: "L'alto (viola) a un timbre sombre, chaud et légèrement nasal — souvent décrit comme le plus 'humain' des cordes. Sa tessiture intermédiaire (Do3–La5 environ) et son timbre caractéristique en font l'instrument de l'harmonie contralto et des contre-mélodies expressives." },
  { q: "Le violoncelle joue principalement quel rôle dans l'orchestre ?", opts: ["Mélodie soprano uniquement", "Mélodie grave et basse chantante — capable de lignes lyriques expressives dans son registre médium", "Accompagnement rythmique uniquement", "Doublure des cuivres"], a: 1, fb: "Le violoncelle est l'un des instruments les plus polyvalents : basse harmonique (Do2–Si2), contrepoint (médium), et mélodie lyrique (Mi3–La5). Sa capacité à chanter dans le registre ténor l'a rendu favori pour les thèmes principaux (Dvorak Concerto, suite de Bach)." },
  { q: "La contrebasse sonne à quelle hauteur par rapport à la notation ?", opts: ["Comme écrite", "Une octave plus bas que notée", "Une quinte plus bas", "Une tierce plus haut"], a: 1, fb: "La contrebasse est un instrument transpositeur à l'octave inférieure : ce qui est noté Do3 sonne Do2 à l'oreille. Cette convention simplifie la lecture des partitions (évite trop de lignes supplémentaires). Son rôle principal est la fondation harmonique des graves." },
  { q: "Le 'pizzicato' pour les cordes désigne :", opts: ["Jouer avec l'archet", "Pincer les cordes avec les doigts — technique percussive, plus courte et sèche que l'archet", "Jouer très doucement", "Jouer en sourdine"], a: 1, fb: "Le pizzicato est le jeu en pinçant les cordes (sans archet). Il produit une attaque brève et sèche — très utilisé dans les accompagnements de danse, les pizzicato jazz (contrebasse) et les effets de couleur orchestrale. Bartók a développé le 'pizzicato snap' (claqué contre la touche)." },
  { q: "L'archet (arco) sur les cordes produit :", opts: ["Un son bref et sec", "Un son continu — le frottement de la mèche sur la corde crée une vibration soutenue", "Un son pincé", "Un son percussif"], a: 1, fb: "L'archet (arco) produit un son continu par frottement de crin de cheval sur la corde. Cette capacité de son tenu distingue les cordes des instruments à sons brefs. Le détaché, le legato, le spiccato et le col legno (avec le bois de l'archet) sont autant de variantes de techniques d'archet." },

  // Bois
  { q: "Quel est le timbre caractéristique de la flûte en registre aigu ?", opts: ["Grave et sombre", "Aérien, lumineux, brillant — souvent utilisé pour les textures éthérées", "Nasal et poignant", "Massif et puissant"], a: 1, fb: "En registre aigu, la flûte est lumineuse et aérienne — idéale pour les textures impressionnistes (Debussy, Prélude à l'après-midi d'un faune commence par un solo de flûte). En grave (pied de flûte), elle est voilée et mystérieuse. C'est l'instrument le plus agile des bois." },
  { q: "Quel instrument à vent est le plus expressif pour les solos lyriques et poignants ?", opts: ["La flûte", "Le hautbois — son timbre nasal et pénétrant le rend inimitable dans les mélodies expressives", "La clarinette", "Le basson"], a: 1, fb: "Le hautbois est l'instrument dont le timbre se rapproche le plus de la voix humaine nasale. Il a une sonorité très distinctive, reconnaissable même mêlée aux cordes. Solos célèbres : Concerto en la mineur d'Albinoni, Second Concerto brandebourgeois de Bach, Symphonie 4 de Brahms." },
  { q: "La clarinette en Sib transpose ses notes à quelle hauteur ?", opts: ["Comme écrite", "Un ton plus bas que notée (do sonne Sib)", "Un ton plus haut", "Une quinte plus bas"], a: 1, fb: "La clarinette en Sib est un instrument transpositeur : ce qui est noté Do sonne Sib à l'oreille. Pour que le clarinettiste joue en Do majeur avec les cordes, le chef lui donne une partie notée un ton plus haut (Ré majeur). Cette transposition existe pour raisons historiques de construction de l'instrument." },
  { q: "Les trois registres de la clarinette sont :", opts: ["Grave, médium, aigu (uniformes)", "Chalumeau (grave, sombre), clarinon (médium, clair), aigu (perçant) — trois couleurs très distinctes", "Forte, mezzo, piano", "Monodique, harmonique, polyphonique"], a: 1, fb: "La clarinette a trois registres acoustiquement très distincts : chalumeau (grave, La3–Mi4, velouté et sombre), médium/clarinon (Fa4–Si4, clarté du registre normal), aigu (Do5–Sib6, de brillant à perçant). Cette hétérogénéité est un défi et une richesse pour le compositeur." },
  { q: "Le basson joue quel rôle principal dans l'orchestre ?", opts: ["Mélodie soprano", "Basse des bois, contrepoint grave, et coloriste humoristique en aigu", "Solo de fanfare", "Doublure de la flûte"], a: 1, fb: "Le basson est la basse des bois et un contrepointiste précieux. En grave (Sib1–Fa2), il fonde la section des bois. En médium, il joue des lignes de contrepoint. En aigu, son timbre devient légèrement comique ou plaintif — Dukas l'utilise pour l'apprenti sorcier, Prokofiev pour le grand-père dans Pierre et le Loup." },

  // Cuivres
  { q: "Quel instrument de cuivre est décrit comme le 'lien' entre cuivres et bois ?", opts: ["La trompette", "Le cor (french horn) — son timbre peut se fondre aussi bien avec les bois qu'avec les cuivres", "Le trombone", "Le tuba"], a: 1, fb: "Le cor a un timbre unique : joué doucement (bouché ou en harmoniques), il se fond avec les bois et les cordes. Joué ouvertement fort, il sonne comme un cuivre. Cette polyvalence en fait le trait d'union de l'orchestre. Brahms l'aimait particulièrement pour ses lignes lyriques et ses harmonies fondues." },
  { q: "La trompette est connue pour :", opts: ["Son timbre grave et noble", "Son éclat et sa brillance — tranchante en aigu, idéale pour les fanfares et les mélodies héroïques", "Sa douceur en pianissimo", "Son caractère comique"], a: 1, fb: "La trompette est l'instrument des fanfares, des appels militaires et des lignes héroïques. Son timbre éclatant en forte est incomparable — mais elle peut aussi jouer pianissimo avec une sourdine (son métallique et lointain). Utilisée avec parcimonie, elle marque les moments clés." },
  { q: "Le trombone est le seul instrument de cuivre qui peut :", opts: ["Jouer en pizzicato", "Produire un glissando continu — grâce à la coulisse qui fait varier la longueur du tube", "Jouer à 3 parties simultanément", "S'accorder librement en temps réel"], a: 1, fb: "La coulisse du trombone est unique dans les cuivres : en la faisant glisser, on obtient un glissando continu (portamento), impossible sur trompette ou cor. Cette technique est utilisée pour des effets dramatiques (jazz, Stockhausen) et pour les passages lyriques où la voix humaine semble glisser d'une note à l'autre." },
  { q: "Pourquoi le tuba est-il indispensable dans l'orchestre ?", opts: ["Il joue la mélodie principale", "Il fonde la harmonie grave des cuivres — sans lui, la base des cuivres manque de profondeur et d'assise", "Il remplace la contrebasse", "Il est uniquement percussif"], a: 1, fb: "Le tuba est la fondation des cuivres : sans lui, les trombones manquent d'assise dans le grave. Il double souvent la contrebasse ou joue une basse indépendante. Composé de nombreux tubes repliés sur eux-mêmes, c'est l'instrument le plus grave et le plus puissant des cuivres." },
  { q: "Pourquoi les cuivres doivent-ils souvent jouer moins fort que leur dynamique naturelle ?", opts: ["Par convention musicale", "Parce qu'ils sont acoustiquement beaucoup plus puissants que les cordes et les bois — jouer fortissimo couvrirait complètement les autres sections", "Parce qu'ils fatiguent vite", "Parce que le chef le demande toujours"], a: 1, fb: "L'acoustique des cuivres est radicalement différente de celle des cordes. Un seul trompettiste fortissimo peut couvrir 30 violonistes forte. L'orchestrateur doit donc constamment compenser : notions de 'piano pour les cuivres' en cas de doublure avec les cordes, et réserver le fortissimo aux tutti de grande puissance." },

  // Percussions
  { q: "Les timbales sont classées comme instruments à son :", opts: ["Indéterminé (comme la caisse claire)", "Déterminé — on peut régler leur hauteur (généralement entre Do2 et La3)", "Indéfini selon le morceau", "Uniquement rythmique"], a: 1, fb: "Les timbales (kettledrums) ont une hauteur déterminée réglable par une pédale : on peut changer de note pendant la pièce. Un orchestre utilise généralement 2 à 5 timbales couvrant Do2–La3 environ. Beethoven leur a assigné des rôles mélodiques et harmoniques précis (ex. Concerto pour violon en Ré mineur — tension sur Ré et La)." },
  { q: "La caisse claire apporte principalement :", opts: ["Des sons longs et chantants", "Une articulation rythmique tranchante — roulements, flams, accentuations militaires", "Des harmonies graves", "Une couleur douce et intimiste"], a: 1, fb: "La caisse claire (snare drum) est l'instrument de la précision rythmique : roulements rapides, accents syncopés, figures militaires. Sa présence marque les moments d'énergie et d'articulation. Ravel l'utilise tout au long du Boléro pour maintenir le rythme ostinato caractéristique." },
  { q: "Quelle est la différence principale entre les percussions à son déterminé et indéterminé ?", opts: ["La taille de l'instrument", "Les instruments à son déterminé jouent des hauteurs précises (timbales, xylophone, marimba) ; les indéterminés apportent timbre et rythme sans hauteur fixe (caisse claire, cymbales)", "Le matériau de fabrication", "Il n'y a aucune différence musicale"], a: 1, fb: "Distinction fondamentale : instruments à son déterminé (timbales, xylophone, vibraphone, marimba, glockenspiel) jouent des hauteurs musicales précises et peuvent participer à l'harmonie. Instruments à son indéterminé (caisse claire, grosse caisse, cymbales, tam-tam) apportent couleur, rythme et texture." },

  // Doublures
  { q: "Quelle combinaison de doublure produit le son le plus 'fondu' et arrondi ?", opts: ["Cordes + Cuivres", "Cordes + Bois — leurs timbres se mélangent naturellement sans que l'un domine l'autre", "Bois + Cuivres", "Percussions + Cordes"], a: 1, fb: "Cordes + Bois forment la combinaison de doublure la plus douce. Les cordes arrondissent le timbre des bois ; les bois précisent l'intonation des cordes. C'est la doublure préférée dans les passages lyriques. Cordes + Cuivres est plus puissant mais moins fondu." },
  { q: "La 'doublure à l'octave' (superoctave) produit quel effet ?", opts: ["Aucun changement sonore perceptible", "Un approfondissement (octave grave) ou un éclaircissement (octave aiguë) du son — sans changer la couleur harmonique", "Un changement de tonalité", "Un accord dissonant"], a: 1, fb: "La doublure à l'octave enrichit le timbre : ajouter l'octave grave (ex. basson doublet la clarinette) profondeur et chaleur ; ajouter l'octave aiguë (ex. flûte doublet le violon) apporte brillance et projection. L'harmonie ne change pas — seule la couleur de l'instrument change." },
  { q: "Pourquoi éviter de doubler les cuivres fortissimo sur les bois ?", opts: ["Par convention stylistique uniquement", "Les cuivres fortissimo couvrent complètement les bois — ces derniers deviennent inaudibles", "Les bois sonnent mieux seuls", "Les cuivres changent la tonalité des bois"], a: 1, fb: "L'acoustique est sans pitié : un trompettiste ou tromboniste fortissimo produit un volume sonore plusieurs fois supérieur à un hautboïste ou clarinettiste. En cas de doublure forte, les bois disparaissent sous les cuivres. La solution : les cuivres jouent mezzo-forte, les bois forte." },
  { q: "La doublure à l'unisson (deux instruments, même hauteur) sert à :", opts: ["Changer l'harmonie", "Renforcer la puissance et la projection sans modifier le caractère mélodique ni l'harmonie", "Créer de la dissonance", "Transposer d'une octave"], a: 1, fb: "La doublure à l'unisson additionne les volumes sans modifier l'harmonie ni le caractère. Elle est utilisée pour renforcer une ligne principale (mélodie doublée à l'unisson par plusieurs instruments = projection maximale), ou pour fusionner les couleurs de timbre de deux instruments différents." },
  { q: "Pour un passage orchestral lyrique et doux, quelle doublure est la plus appropriée ?", opts: ["Trompette + Trombone fortissimo", "Violons + Flûtes ou hautbois — cordes + bois en nuance douce", "Tuba + Grosse caisse", "Cuivres tutti"], a: 1, fb: "Pour un passage doux et lyrique, cordes + bois (flûte, hautbois, clarinette) en dynamique douce est la combinaison idéale. Les timbres se fondent naturellement, le résultat est arrondi et chantant. Les cuivres sont réservés aux climax ou utilisés pianissimo avec sourdine pour une couleur lointaine." },

  // Équilibre
  { q: "Dans le Boléro de Ravel, la même mélodie et harmonie sont répétées 18 fois pour démontrer :", opts: ["La répétition motivique", "L'enrichissement orchestral progressif — chaque répétition ajoute des instruments, illustrant comment l'orchestration transforme une idée simple", "La forme rondo", "La substitution tritonique"], a: 1, fb: "Le Boléro (1928) est l'étude d'orchestration la plus célèbre du répertoire : même mélodie (en ut majeur), même harmonie, même rythme de caisse claire — seule l'orchestration change à chaque cycle. On entend successivement chaque instrument de l'orchestre, puis leurs combinaisons de plus en plus riches." },
  { q: "Pourquoi le piano est-il rarement doublé en unisson à l'orchestre ?", opts: ["Par convention stylistique", "Car son timbre percussif et son attaque brusque ne se fondent pas naturellement avec les cordes et les bois", "Car il est trop doux", "Car il change la tonalité"], a: 1, fb: "Le piano a un timbre percussif (enveloppe attack-decay rapide) très différent des cordes et des bois (son continu). En doublure, ce contraste crée un clash plutôt qu'une fusion. À l'orchestre, le piano est généralement utilisé en soliste (concerto), en couleur percussive ponctuelle, ou en rôle autonome." },
  { q: "Quel est l'instrument le plus puissant de l'orchestre ?", opts: ["La grosse caisse", "La trompette (ou les cuivres en général) — ils dominent acoustiquement toutes les autres familles en fortissimo", "Le violon (car il est le plus nombreux)", "La contrebasse"], a: 1, fb: "Les cuivres sont les instruments les plus puissants de l'orchestre, et la trompette est souvent la plus perçante. Un seul trompettiste fortissimo peut couvrir un pupitre complet de violons. Cette puissance acoustique impose à l'orchestrateur de traiter les cuivres avec parcimonie pour maintenir l'équilibre." },
  { q: "Comment Debussy équilibre-t-il les textures dans le Prélude à l'après-midi d'un faune ?", opts: ["En utilisant des cuivres fortissimo", "En gardant les cuivres très discrets, favorisant les textures légères de bois et cordes avec pédale de harpe", "En utilisant uniquement des cordes", "En supprimant toutes les percussions"], a: 1, fb: "Le Prélude à l'après-midi d'un faune (1894) est un modèle d'orchestration impressionniste : flûte solo, harpe, cordes en sourdine, bois en demi-teintes. Debussy utilise les cuivres très parcimonieusement pour garder la texture transparente — l'opposé de Beethoven ou Wagner." },

  // Registres
  { q: "Quel registre correspond à la voix de soprano dans l'orchestre ?", opts: ["Violoncelle et basson", "Violon I, flûte, hautbois, trompette — instruments à tessiture aiguë", "Cor et alto", "Tuba et contrebasse"], a: 1, fb: "Le registre soprano (voix haute) est couvert par : Violon I (Sol3–Mi6), Flûte (Do4–Do7), Hautbois (Sib3–La6), Trompette (Fa#3–Do6). Ce registre aiguporte la mélodie principale dans la plupart des textures orchestrales standard." },
  { q: "Quel registre correspond à la voix de basse dans l'orchestre ?", opts: ["Violon II et clarinette", "Contrebasse, tuba, basson grave — instruments à tessiture très grave", "Alto et cor", "Trombone et hautbois"], a: 1, fb: "Le registre basse est assuré par : Contrebasse (Mi1–Sol4, sonne 8ve plus bas), Tuba (Sib0–Fa4), Basson grave (Sib1–Mi3), Contrebasson (Sib0–Mi3). Ces instruments fondent la pyramide harmonique de l'orchestre — sans eux, le son manque d'assise." },
  { q: "Pourquoi faut-il 'espacer' les voix dans le grave davantage que dans l'aigu ?", opts: ["Par convention uniquement", "Car en grave, les intervalles resserés créent de la boue sonore — les harmoniques se confondent. En aigu, les tierces et secondes sonnent claires", "Car les instruments graves sont plus gros", "Car les harmoniques graves sont moins nombreuses"], a: 1, fb: "Physique acoustique fondamentale : les harmoniques des notes graves sont plus denses et se chevauchent davantage. Un accord Do2–Mi2 (tierce mineure en grave) sonne boueux ; Do5–Mi5 sonne clair. Règle d'or : plus on est grave, plus on espace les voix (quintes, octaves) ; en aigu, les secondes et tierces sont acceptables." },
  { q: "Un 'trou' harmonique dans l'orchestration désigne :", opts: ["Un silence dans la partition", "Un registre non couvert par aucun instrument — le spectre sonore a une zone vide, créant un son déséquilibré", "Un accord diminué", "Une modulation manquée"], a: 1, fb: "Un trou harmonique survient quand le registre médium n'est pas couvert alors que le grave et l'aigu sont présents. Le son semble 'creux' — on entend la basse et le soprano mais pas le milieu. Solution : ajouter des instruments dans le registre intermédiaire (alto, clarinette, cor, violoncelle médium)." },

  // SATB → Orchestre
  { q: "Dans la correspondance SATB → orchestre, la voix de ténor (T) est assurée par :", opts: ["Violon I et flûte", "Violoncelle, trombone, basson — registre Do3–Fa4 environ", "Cor et alto", "Hautbois et clarinette"], a: 1, fb: "La voix de ténor correspond à : Violoncelle (registre médium Do3–Mi5), Trombone (Mi2–Fa4, registre ténor principal), Basson (registre médium Ré3–Mib5). Ces instruments assurent la troisième voix (ténor) dans les textures à 4 parties distribuées à l'orchestre." },
  { q: "Pour orchestrer un choral à 4 voix (SATB), on distribuera la voix de soprano à :", opts: ["Tuba et contrebasse", "Violon I, flûte ou hautbois — instruments dont la tessiture aiguë correspond à la voix soprano", "Basson et trombone", "Alto et clarinette grave"], a: 1, fb: "Soprano (voix la plus aiguë) → Violon I (Sol3–Mi6), Flûte (Do4–Do7), Hautbois (Sib3–La6) ou Trompette. Ces instruments ont la brillance et la tessiture pour porter la ligne mélodique principale avec clarté et projection." },

  // Ravel
  { q: "Maurice Ravel est surtout célèbre pour quel chef-d'œuvre d'orchestration ?", opts: ["La Symphonie n°5 en Do mineur", "Le Boléro — étude d'orchestration progressive sur un ostinato rythmique et une mélodie répétée 18 fois", "Le Requiem", "La Symphonie Fantastique"], a: 1, fb: "Le Boléro (1928) est la composition la plus jouée de Ravel et l'une des plus connues du répertoire orchestral. Conçu initialement comme une commande de Ida Rubinstein, il est devenu une démonstration parfaite de l'orchestration progressive : seul le timbre change, pas la mélodie ni l'harmonie." },
  { q: "Ravel a orchestré pour orchestre une œuvre célèbre de quel compositeur ?", opts: ["Bach", "Mussorgsky — Tableaux d'une exposition, transcription de l'original pour piano en chef-d'œuvre orchestral", "Beethoven", "Schubert"], a: 1, fb: "Tableaux d'une exposition (1874) de Moussorgsky était une suite pour piano. En 1922, Ravel en fait une orchestration considérée comme l'une des plus brillantes du répertoire. Il exploite chaque famille d'instruments pour illustrer chaque tableau : le saxo pour 'Le vieux château', les trompettes pour la 'Grande Porte de Kiev'." },
  { q: "Le Prélude à l'après-midi d'un faune de Debussy commence par :", opts: ["Un accord fortissimo de cuivres", "Un solo de flûte non accompagné — mélodie chromatique, douce et flottante", "Un rythme de timbales", "Un accord de cordes pianissimo"], a: 1, fb: "L'œuvre ouvre sur un solo de flûte — mélodie chromatique (La4–Mi4), pianissimo, lente, évocatrice. Ce début révolutionnaire (1894) illustre la vision impressionniste : la couleur instrumentale (flûte = air, lumière, nature) est au service de l'évocation, pas du développement motivique." },
  { q: "Ravel est considéré comme un génie de l'orchestration parce que :", opts: ["Il composait plus vite que les autres", "Il avait une maîtrise exceptionnelle des timbres et des combinaisons instrumentales — chaque instrument dans son registre idéal, chaque couleur à sa juste place", "Il utilisait toujours tous les instruments", "Il évitait les cuivres"], a: 1, fb: "Ravel avait un sens exceptionnel du 'placement' instrumental — chaque instrument dans son registre de prédilection, chaque combinaison de timbres calculée pour l'effet maximum. Son orchestration de Tableaux est un manuel vivant : on peut y lire comment il utilise chaque instrument pour sa couleur spécifique." },
  { q: "Ravel vivait à quelle époque ?", opts: ["Baroque (1600–1750)", "Classicisme (1750–1820)", "Romantisme tardif / Impressionnisme (1875–1937)", "Contemporain (après 1950)"], a: 2, fb: "Maurice Ravel (1875–1937) appartient à la période de l'impressionnisme musical (avec Debussy, son contemporain). Il est connu pour sa précision stylistique, son sens de l'humour, ses œuvres pour piano (Gaspard de la Nuit) et son orchestration inégalée (Boléro, La Valse, orchestration des Tableaux de Moussorgski)." },

  // Piano
  { q: "La pédale de résonance du piano sert à :", opts: ["Changer la tonalité", "Lever les étouffoirs — les notes résonnent librement, se superposant et créant une richesse harmonique et de résonance", "Rendre le son plus sec", "Changer le registre"], a: 1, fb: "La pédale de résonance (pédale droite) lève tous les étouffoirs : les cordes vibrent librement, y compris celles des notes non jouées (résonance sympathique). Cela crée une résonance chaleureuse et permettde connecter les harmonies. Utilisée avec excès, elle crée de la boue sonore ; utilisée avec art (Chopin, Debussy), elle enrichit considérablement le timbre." },
  { q: "Dans l'écriture pianistique standard, la main gauche gère généralement :", opts: ["La mélodie principale uniquement", "La basse et l'accompagnement harmonique — laissant la main droite libre pour la mélodie", "Les ornements uniquement", "Le registre aigu"], a: 1, fb: "La division main droite / main gauche au piano est fondamentale : main droite = mélodie (registre médium-aigu, Do4–Do6 environ) ; main gauche = basse + accompagnement (registre La0–Do4). Cette division permet à un seul musicien de jouer simultanément mélodie, harmonie et basse — un ensemble complet." },
  { q: "Pourquoi faut-il éviter d'écrire trop de notes dans le grave du piano ?", opts: ["Par convention de notation", "Car les harmoniques des notes graves se superposent et créent de la boue sonore — les accords serrés en grave sonnent flous", "Car le registre grave est réservé au pouce", "Car les cordes graves sont moins nombreuses"], a: 1, fb: "En grave (Do1–Do3), les harmoniques des notes sont nombreuses et très proches. Des accords serrés (Do1–Ré1–Mi1) créent une boue sonore où les notes se confondent. Solution : espacement large en grave (octaves, quintes), accords plus serrés en médium-aigu. Chopin et Ravel maîtrisent parfaitement cette règle." },

  // Chambre
  { q: "La formation 'quatuor à cordes' est composée de :", opts: ["4 violons", "2 violons, 1 alto, 1 violoncelle — la formation de chambre la plus emblématique", "2 violons, 2 violoncelles", "Violon, alto, violoncelle, contrebasse"], a: 1, fb: "Le quatuor à cordes (2 violons, alto, violoncelle) est la formation de chambre la plus importante du répertoire classique. Il couvre un large spectre (Sol3–La7 au-dessus, Do2–Sol5 en dessous) avec une homogénéité de timbre unique. Haydn, Mozart, Beethoven et Schubert y ont écrit leurs pages les plus intimes." },
  { q: "Un 'trio avec piano' (piano trio) est formé de :", opts: ["3 pianos", "Piano, violon, violoncelle — formation de chambre très fréquente dans le répertoire classique et romantique", "Piano, flûte, clarinette", "Piano, violon, alto"], a: 1, fb: "Le trio avec piano (piano, violon, violoncelle) est l'une des formations de chambre les plus fréquentes. Beethoven, Schubert, Brahms, Ravel y ont écrit des chefs-d'œuvre. L'équilibre y est délicat : le piano peut facilement couvrir le violon et le violoncelle s'il joue trop fort." },
  { q: "En musique de chambre, l'équilibre dynamique entre musiciens est :", opts: ["Géré par un chef d'orchestre", "La responsabilité de chaque musicien — il n'y a pas de chef, chacun doit écouter et adapter son volume", "Fixé par le compositeur avec des métronomes", "Non important — c'est une petite formation"], a: 1, fb: "En musique de chambre, il n'y a pas de chef : l'équilibre est la responsabilité collective des musiciens. Chacun doit écouter les autres et adapter en permanence son volume, son phrasé et sa dynamique. C'est une forme de conversation musicale — chaque instrument est à la fois narrateur et auditeur." },
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
const SECTIONS_IDS = ["instruments", "ecriture", "quiz"] as const;
type SectionId = typeof SECTIONS_IDS[number];

const PRIMARY    = "#2A6050";
const PRIMARY_BG = "#E5F3EF";

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
  h3:       { fontSize: 14, fontWeight: 500, color: "#111", margin: "20px 0 10px" } as React.CSSProperties,
  p:        { fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: "1rem" } as React.CSSProperties,
  infoBox:  { borderLeft: `2px solid ${PRIMARY}`, padding: "8px 14px", background: PRIMARY_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#0D2E27", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
  tip:      { borderLeft: "2px solid #185FA5", padding: "8px 14px", background: "#E6F1FB", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#0D3C6E", lineHeight: 1.6 } as React.CSSProperties,
};

export default function Cours19() {
  const [activeSection, setActiveSection] = useState<SectionId>("instruments");
  const i18n = useCoursI18n("cours19");
  const [activeFamily,    setActiveFamily]    = useState<string | null>(null);
  const [activePrinciple, setActivePrinciple] = useState<string | null>(null);

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
    if (id === "instruments") return "Les instruments";
    if (id === "ecriture")   return "Écriture orchestrale";
    return "Entraînement";
  };

  return (
    <div style={S.wrap}>
      {/* Piano caché */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={5} startOctave={2} showLabels={false} />
      </div>

      {/* Header */}
      <div style={S.header}>
        <span style={S.badge}>Niveau 2 · Cours 19</span>
        <h1 style={S.h1}>Introduction à l'orchestration</h1>
        <p style={S.subtitle}>
          Les 4 familles d'instruments, leurs tessitures et rôles — puis les principes
          d'écriture : doublures, équilibre, registres, distribution SATB, écriture pour piano.
        </p>
      </div>

      <MaitreCard
        composer="Maurice Ravel"
        period="1875–1937"
        emoji="🎼"
        concept="Orchestration & précision du timbre"
        anecdote="En 1922, Sergei Diaghilev demande à Ravel d'orchestrer les Tableaux d'une exposition de Moussorgsky pour les Ballets Russes. Ravel passe des mois à choisir chaque instrument pour chaque tableau. À un collègue qui lui demande comment il décide, il répond : 'Je n'invente rien. J'entends la couleur d'abord — le timbre de l'instrument qui convient — et ensuite j'écris la note.'"
        lesson="L'orchestration n'est pas un habillage : c'est une part essentielle de la composition. Avant d'écrire pour un instrument, demande-toi : dans quel registre sonne-t-il le mieux ? Quelle est sa couleur naturelle ? Comment interagit-il avec les autres ? L'instrument idéal joué dans son registre idéal produit une beauté que aucun autre ne peut reproduire."
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

      {/* ══ SECTION 1 : LES INSTRUMENTS ══ */}
      {activeSection === "instruments" && (
        <div>
          <h2 style={S.h2}>Les familles d'instruments et leurs caractéristiques</h2>
          <p style={S.p}>
            L'orchestre symphonique est organisé en 4 grandes familles. Chaque famille
            a ses propres caractéristiques acoustiques, ses tessitures et ses rôles
            typiques. Connaître ces caractéristiques est le point de départ de toute
            écriture orchestrale.
          </p>

          {FAMILIES.map(fam => (
            <div
              key={fam.id}
              style={{
                border: `0.5px solid ${activeFamily === fam.id ? fam.color : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 8,
                overflow: "hidden",
                cursor: "pointer",
                background: activeFamily === fam.id ? fam.bg : "#fff",
                transition: "all .15s",
              }}
              onClick={() => setActiveFamily(activeFamily === fam.id ? null : fam.id)}
            >
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px" }}>
                <span style={{ fontSize: 20 }}>{fam.emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#111" }}>{fam.name}</div>
                  <div style={{ fontSize: 11, color: "#999", marginTop: 1 }}>
                    {fam.instruments.map(i => i.name).join(" · ")}
                  </div>
                </div>
                <div style={{ fontSize: 11, color: "#bbb" }}>{activeFamily === fam.id ? "▲" : "▼"}</div>
              </div>

              {activeFamily === fam.id && (
                <div style={{ padding: "0 16px 16px", borderTop: `0.5px solid ${fam.color}20` }}>
                  <p style={{ ...S.p, marginTop: 12 }}>{fam.desc}</p>

                  {/* Instruments table */}
                  <div style={{ overflowX: "auto", marginBottom: 12 }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                      <thead>
                        <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                          {["Instrument", "Tessiture", "Timbre", "Rôle"].map(h => (
                            <th key={h} style={{ textAlign: "left", padding: "6px 10px", fontWeight: 500, color: "#666" }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {fam.instruments.map((inst, idx) => (
                          <tr key={inst.name} style={{ borderBottom: "0.5px solid #f0f0f0", background: idx % 2 === 0 ? "#fff" : fam.bg }}>
                            <td style={{ padding: "7px 10px", fontWeight: 500, color: fam.color, whiteSpace: "nowrap" as const }}>{inst.name}</td>
                            <td style={{ padding: "7px 10px", fontFamily: "monospace", fontSize: 11, color: "#444" }}>{inst.range}</td>
                            <td style={{ padding: "7px 10px", color: "#555" }}>{inst.timbre}</td>
                            <td style={{ padding: "7px 10px", color: "#666" }}>{inst.role}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <button
                    onClick={e => {
                      e.stopPropagation();
                      playChord(pianoRef as React.RefObject<PianoPlayerRef>, fam.demo[0], fam.demoDur ?? 1.8);
                    }}
                    style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${fam.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: fam.color }}
                  >
                    {fam.demoLabel}
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* Tableau récapitulatif des registres */}
          <h3 style={S.h3}>Carte des registres par tessiture</h3>
          <div style={{ overflowX: "auto", marginBottom: "1rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {["Voix", "Registre", "Instruments principaux"].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 12px", fontWeight: 500, color: "#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { voix: "Soprano", reg: "Sol3 – Do7", color: "#185FA5", instr: "Violon I, Flûte, Hautbois, Trompette" },
                  { voix: "Mezzo / Alto", reg: "Do3 – Mi6", color: "#0F6E56", instr: "Violon II, Alto, Clarinette, Cor" },
                  { voix: "Ténor", reg: "Mi2 – Fa4", color: "#7B1F1F", instr: "Violoncelle, Trombone, Basson" },
                  { voix: "Basse", reg: "Sib0 – Fa3", color: "#6B3FA0", instr: "Contrebasse, Tuba, Contrebasson" },
                ].map(({ voix, reg, color, instr }, idx) => (
                  <tr key={voix} style={{ borderBottom: "0.5px solid #f0f0f0", background: idx % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "7px 12px", fontWeight: 500, color }}>{voix}</td>
                    <td style={{ padding: "7px 12px", fontFamily: "monospace", color: "#444" }}>{reg}</td>
                    <td style={{ padding: "7px 12px", color: "#555" }}>{instr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Démos registres */}
          <h3 style={S.h3}>Écouter les 4 registres</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
            {[
              { label: "▶ Grave (basse)", color: "#6B3FA0", demo: REG_GRAVE, desc: "Do2–Mi2–Sol2 — tuba/contrebasse" },
              { label: "▶ Ténor", color: "#7B1F1F", demo: REG_TENOR, desc: "Do3–Mi3–Sol3 — violoncelle/basson" },
              { label: "▶ Mezzo", color: "#0F6E56", demo: REG_MEZZO, desc: "Do4–Mi4–Sol4 — alto/clarinette" },
              { label: "▶ Soprano (aigu)", color: "#185FA5", demo: REG_AIGU, desc: "Do5–Mi5–Sol5 — violon/flûte" },
            ].map(({ label, color, demo, desc }) => (
              <div key={label} style={{ border: `0.5px solid ${color}30`, borderRadius: 8, padding: "10px 12px", background: "#fafafa" }}>
                <div style={{ fontSize: 12, color: "#666", marginBottom: 6 }}>{desc}</div>
                <button
                  onClick={() => playChord(pianoRef as React.RefObject<PianoPlayerRef>, demo[0], 2.0)}
                  style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color }}
                >
                  {label}
                </button>
              </div>
            ))}
          </div>

          <div style={{ ...S.infoBox, marginTop: "1.25rem" }}>
            <strong>Règle d'or :</strong> plus on est grave, plus on doit espacer les voix. Un accord
            Do2–Mi2 sonne boueux ; Do2–Sol2–Do3 sonne clair. En aigu, les tierces et secondes
            sont parfaitement lisibles. Cette règle guide la distribution de toutes les voix
            orchestrales et pianistiques.
          </div>
        </div>
      )}

      {/* ══ SECTION 2 : ÉCRITURE ORCHESTRALE ══ */}
      {activeSection === "ecriture" && (
        <div>
          <h2 style={S.h2}>Principes d'écriture orchestrale</h2>
          <p style={S.p}>
            L'orchestration est l'art d'attribuer les voix musicales aux instruments selon
            leurs caractéristiques. Cinq principes guident l'écriture : doublures, équilibre
            dynamique, gestion des registres, distribution SATB, et contraintes spécifiques
            au piano et à la chambre.
          </p>

          {PRINCIPLES.map(pr => (
            <div
              key={pr.id}
              style={{
                border: `0.5px solid ${activePrinciple === pr.id ? pr.color : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 8,
                overflow: "hidden",
                cursor: "pointer",
                background: activePrinciple === pr.id ? pr.bg : "#fff",
                transition: "all .15s",
              }}
              onClick={() => setActivePrinciple(activePrinciple === pr.id ? null : pr.id)}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px" }}>
                <div style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: pr.color, flexShrink: 0,
                }} />
                <div style={{ flex: 1, fontSize: 13, fontWeight: 500, color: "#111" }}>{pr.name}</div>
                <div style={{ fontSize: 11, color: "#bbb" }}>{activePrinciple === pr.id ? "▲" : "▼"}</div>
              </div>

              {activePrinciple === pr.id && (
                <div style={{ padding: "0 16px 16px", borderTop: `0.5px solid ${pr.color}20` }}>
                  <p style={{ ...S.p, marginTop: 12 }}>{pr.desc}</p>

                  <div style={{ borderLeft: `2px solid ${pr.color}`, paddingLeft: 10, marginBottom: 12, fontSize: 13, color: "#444", lineHeight: 1.7 }}>
                    <strong>Règle :</strong> {pr.rule}
                  </div>

                  <div style={{ fontSize: 12, color: "#888", lineHeight: 1.6, marginBottom: pr.demo ? 12 : 0 }}>
                    <em>Exemple :</em> {pr.example}
                  </div>

                  {(pr.demo || pr.demo2) && (
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const, marginTop: 10 }}>
                      {pr.demo && (
                        <button
                          onClick={e => {
                            e.stopPropagation();
                            if (pr.demo!.length === 1) {
                              playChord(pianoRef as React.RefObject<PianoPlayerRef>, pr.demo![0], pr.demoDur ?? 1.8);
                            } else {
                              playProg(pianoRef as React.RefObject<PianoPlayerRef>, pr.demo!, pr.demoGapMs ?? 1200, pr.demoDur ?? 1.1);
                            }
                          }}
                          style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${pr.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: pr.color }}
                        >
                          {pr.demoLabel ?? "▶ Écouter"}
                        </button>
                      )}
                      {pr.demo2 && (
                        <button
                          onClick={e => {
                            e.stopPropagation();
                            if (pr.demo2!.length === 1) {
                              playChord(pianoRef as React.RefObject<PianoPlayerRef>, pr.demo2![0], pr.demoDur ?? 1.8);
                            } else {
                              playProg(pianoRef as React.RefObject<PianoPlayerRef>, pr.demo2!, pr.demoGapMs ?? 1200, pr.demoDur ?? 1.1);
                            }
                          }}
                          style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${pr.color}80`, borderRadius: 20, cursor: "pointer", background: pr.bg, color: pr.color }}
                        >
                          {pr.demo2Label ?? "▶ Variante"}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Exemples célèbres */}
          <h3 style={S.h3}>Exemples d'orchestration remarquables</h3>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 8, marginBottom: "1rem" }}>
            {[
              { name: "Ravel — Boléro (1928)", color: PRIMARY, bg: PRIMARY_BG, desc: "Le même ostinato rythmique à la caisse claire, la même mélodie en Do majeur, la même harmonie — répétés 18 fois avec une orchestration progressivement plus dense. Chaque répétition ajoute des instruments ou change les combinaisons. Étude d'orchestration en temps réel." },
              { name: "Debussy — Prélude à l'après-midi d'un faune (1894)", color: "#185FA5", bg: "#E6F1FB", desc: "L'impressionnisme orchestral par excellence : flûte solo, harpe, cordes en sourdine, cors bouché, bois en demi-teintes. Chaque instrument dans son registre le plus poétique. Aucun cuivre fort — tout est suggestion et couleur." },
              { name: "Beethoven — 5e Symphonie op.67 (1808)", color: "#7B1F1F", bg: "#FCEAEA", desc: "Modèle d'économie de moyens : un motif de 4 notes distribué à travers toutes les familles. L'orchestration suit l'intensité du discours — cordes + bois en p, tutti fortissimo aux moments clés. Chaque instrument à sa juste place." },
            ].map(({ name, color, bg, desc }) => (
              <div key={name} style={{ border: `0.5px solid ${color}30`, borderRadius: 10, padding: "12px 16px", background: bg }}>
                <div style={{ fontSize: 12, fontWeight: 500, color, marginBottom: 4 }}>{name}</div>
                <div style={{ fontSize: 12, color: "#555", lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>

          {/* Tutti demo */}
          <div style={{ textAlign: "center" as const, marginBottom: "1rem" }}>
            <button
              onClick={() => {
                playChord(pianoRef as React.RefObject<PianoPlayerRef>, TUTTI_ORCH[0], 2.5);
              }}
              style={{ fontSize: 12, padding: "6px 18px", border: `0.5px solid #333`, borderRadius: 20, cursor: "pointer", background: "transparent", color: "#333" }}
            >
              ▶ Accord tutti — Do2·Sol2·Do3·Sol3·Mi4·Do5 (spectre complet)
            </button>
          </div>

          <div style={S.warnBox}>
            <strong>Pièges classiques :</strong> (1) Cuivres trop forts — ils couvrent les cordes et
            les bois. (2) Grave trop serré — boue sonore. (3) Tessiture non couverte — trou harmonique.
            (4) Piano doublé en unisson avec les cordes — les timbres ne se fondent pas. Ravel évite
            systématiquement ces pièges : chaque note, chaque instrument, à sa juste place.
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
                {quizScore >= 8 ? "🎼" : quizScore >= 6 ? "👍" : "💪"}
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

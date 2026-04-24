"use client";

/**
 * Cours 1 — La gamme
 * Harmonia · Niveau 1
 *
 * Sections :
 * 1. Origines — d'où viennent ces 7 notes + histoire du nom des notes
 * 2. Les degrés — position, sens des noms, attractions entre notes
 * 3. Tons & demi-tons — structure de la gamme, sélecteur de gammes avec points rouges
 * 4. Intervalles — face à face avec renversements + écoute
 * 5. Entraînement — quiz
 */

import React, { useRef, useState, useCallback } from "react";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Section {
  id: string;
  label: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SECTIONS: Section[] = [
  { id: "origines", label: "Origines" },
  { id: "degres", label: "Les degrés" },
  { id: "tons", label: "Tons & demi-tons" },
  { id: "intervalles", label: "Intervalles" },
  { id: "quiz", label: "Entraînement" },
];

const GAMMES = [
  {
    name: "Do majeur", root: "Do", startOctave: 3,
    notes: ["Do", "Ré", "Mi", "Fa", "Sol", "La", "Si"],
    steps: ["T", "T", "½", "T", "T", "T", "½"],
    accidentals: [], blackLabels: {} as Record<string, string>, accidentalDisplay: [] as string[],
    // Do3 Ré3 Mi3 Fa3 Sol3 La3 Si3 Do4
    dotKeys: ["Do:3","Ré:3","Mi:3","Fa:3","Sol:3","La:3","Si:3","Do:4"],
  },
  {
    name: "Sol majeur", root: "Sol", startOctave: 3,
    notes: ["Sol", "La", "Si", "Do", "Ré", "Mi", "Fa#"],
    steps: ["T", "T", "½", "T", "T", "T", "½"],
    accidentals: ["Fa#"], blackLabels: { "Fa#": "Fa#" }, accidentalDisplay: ["Fa#"],
    // Sol3 La3 Si3 Do4 Ré4 Mi4 Fa#4 Sol4
    dotKeys: ["Sol:3","La:3","Si:3","Do:4","Ré:4","Mi:4","Fa#:4","Sol:4"],
  },
  {
    name: "Fa majeur", root: "Fa", startOctave: 3,
    notes: ["Fa", "Sol", "La", "La#", "Do", "Ré", "Mi"],
    steps: ["T", "T", "½", "T", "T", "T", "½"],
    accidentals: ["La#"], blackLabels: { "La#": "Sib" }, accidentalDisplay: ["Sib"],
    // Fa3 Sol3 La3 La#3 Do4 Ré4 Mi4 Fa4
    dotKeys: ["Fa:3","Sol:3","La:3","La#:3","Do:4","Ré:4","Mi:4","Fa:4"],
  },
  {
    name: "Ré majeur", root: "Ré", startOctave: 3,
    notes: ["Ré", "Mi", "Fa#", "Sol", "La", "Si", "Do#"],
    steps: ["T", "T", "½", "T", "T", "T", "½"],
    accidentals: ["Fa#", "Do#"], blackLabels: { "Fa#": "Fa#", "Do#": "Do#" }, accidentalDisplay: ["Fa#", "Do#"],
    // Ré3 Mi3 Fa#3 Sol3 La3 Si3 Do#4 Ré4
    dotKeys: ["Ré:3","Mi:3","Fa#:3","Sol:3","La:3","Si:3","Do#:4","Ré:4"],
  },
];

const DEGREES = [
  {
    num: "I",
    name: "Tonique",
    note: "Do",
    origin: "Du latin «&nbsp;tonus&nbsp;» — le son de référence, le centre de gravité de toute la gamme. C'est la note à laquelle tout revient.",
    attraction: "Elle attire toutes les autres notes, surtout le VIIe degré (la sensible) qui se trouve juste en dessous.",
    color: "#0F6E56",
    bg: "#E1F5EE",
  },
  {
    num: "II",
    name: "Sus-tonique",
    note: "Ré",
    origin: "Littéralement «&nbsp;au-dessus de la tonique&nbsp;» — la note immédiatement supérieure au centre.",
    attraction: "Attirée vers le Ier degré (en descendant) ou vers le IIIe (en montant). Elle crée une légère instabilité.",
    color: "#534AB7",
    bg: "#EEEDFE",
  },
  {
    num: "III",
    name: "Médiante",
    note: "Mi",
    origin: "Du latin «&nbsp;medius&nbsp;» — elle est à mi-chemin entre la tonique (I) et la dominante (V), à 4 demi-tons de chacune.",
    attraction: "Elle définit la couleur majeure ou mineure de la gamme. En majeur, elle forme une tierce majeure avec la tonique.",
    color: "#185FA5",
    bg: "#E6F1FB",
  },
  {
    num: "IV",
    name: "Sous-dominante",
    note: "Fa",
    origin: "«&nbsp;Sous la dominante&nbsp;» — elle est une quinte en dessous de la dominante, ou une quarte au-dessus de la tonique.",
    attraction: "Elle a une forte tendance à descendre vers le IIIe degré, surtout dans le contexte de la résolution du triton.",
    color: "#993C1D",
    bg: "#FAECE7",
  },
  {
    num: "V",
    name: "Dominante",
    note: "Sol",
    origin: "Du latin «&nbsp;dominare&nbsp;» — elle domine la gamme, à la quinte au-dessus de la tonique. C'est le second pôle d'attraction.",
    attraction: "Elle appelle fortement la résolution vers la tonique. L'accord construit sur ce degré est le plus tendu de la gamme.",
    color: "#BA7517",
    bg: "#FAEEDA",
  },
  {
    num: "VI",
    name: "Sus-dominante",
    note: "La",
    origin: "«&nbsp;Au-dessus de la dominante&nbsp;» — une seconde au-dessus du Ve degré.",
    attraction: "Proche de la tonique par sa stabilité, elle est souvent utilisée comme substitut du Ier degré.",
    color: "#3B6D11",
    bg: "#EAF3DE",
  },
  {
    num: "VII",
    name: "Sensible",
    note: "Si",
    origin: "«&nbsp;Sensible&nbsp;» car elle est sensible à l'attraction de la tonique — elle n'est qu'à un demi-ton en dessous du Ier degré.",
    attraction: "Attraction la plus forte de toute la gamme : elle monte quasi-obligatoirement vers la tonique. C'est l'instabilité incarnée.",
    color: "#A32D2D",
    bg: "#FCEBEB",
  },
];

interface IntervalDef {
  name: string;
  semis: number;
  nature: string;
  example: string;
  exampleNotes: [string, number, string, number];
  inverse: string;
  inverseSemis: number;
  inverseNature: string;
}

const INTERVALS: IntervalDef[] = [
  {
    name: "Seconde mineure",
    semis: 1,
    nature: "mineure",
    example: "Mi → Fa",
    exampleNotes: ["Mi", 3, "Fa", 3],
    inverse: "Septième majeure",
    inverseSemis: 11,
    inverseNature: "majeure",
  },
  {
    name: "Seconde majeure",
    semis: 2,
    nature: "majeure",
    example: "Do → Ré",
    exampleNotes: ["Do", 3, "Ré", 3],
    inverse: "Septième mineure",
    inverseSemis: 10,
    inverseNature: "mineure",
  },
  {
    name: "Tierce mineure",
    semis: 3,
    nature: "mineure",
    example: "Ré → Fa",
    exampleNotes: ["Ré", 3, "Fa", 3],
    inverse: "Sixte majeure",
    inverseSemis: 9,
    inverseNature: "majeure",
  },
  {
    name: "Tierce majeure",
    semis: 4,
    nature: "majeure",
    example: "Do → Mi",
    exampleNotes: ["Do", 3, "Mi", 3],
    inverse: "Sixte mineure",
    inverseSemis: 8,
    inverseNature: "mineure",
  },
  {
    name: "Quarte juste",
    semis: 5,
    nature: "juste",
    example: "Do → Fa",
    exampleNotes: ["Do", 3, "Fa", 3],
    inverse: "Quinte juste",
    inverseSemis: 7,
    inverseNature: "juste",
  },
  {
    name: "Triton",
    semis: 6,
    nature: "augm. / dim.",
    example: "Fa → Si",
    exampleNotes: ["Fa", 3, "Si", 3],
    inverse: "Triton",
    inverseSemis: 6,
    inverseNature: "augm. / dim.",
  },
];

// ─── Grand pool de questions (tirage aléatoire à chaque session) ──────────────

const ALL_QUESTIONS = [
  // ── Théorie générale ──
  { q: "Quel moine a inventé les noms des notes au XIe siècle ?", opts: ["Rameau", "Guido d'Arezzo", "Bach", "Pythagore"], a: 1, fb: "Guido d'Arezzo a créé la solmisation en tirant les syllabes de chaque vers d'un hymne à Saint Jean-Baptiste." },
  { q: "Pourquoi le VIIe degré s'appelle-t-il « sensible » ?", opts: ["Car il est le plus aigu", "Car il est expressif", "Car il est à ½ ton de la tonique", "Car il est toujours bémol"], a: 2, fb: "La sensible est à ½ ton sous la tonique. Cette proximité crée une forte attraction vers le haut." },
  { q: "Quelle est la formule T/½ d'une gamme majeure ?", opts: ["T-T-T-½-T-T-½", "T-½-T-T-½-T-T", "T-T-½-T-T-T-½", "½-T-T-T-T-½-T"], a: 2, fb: "T-T-½-T-T-T-½ est universelle. Les ½ tons sont entre III-IV et VII-I." },
  { q: "Que signifie « médiante » ?", opts: ["Mi-chemin entre tonique et dominante", "Note la plus haute", "Note sous la dominante", "Note la plus instable"], a: 0, fb: "La médiante (IIIe) est à mi-chemin entre I et V — 4 demi-tons de chacune." },
  { q: "Combien de notes contient une gamme diatonique ?", opts: ["5", "6", "7", "8"], a: 2, fb: "La gamme diatonique contient 7 notes distinctes (plus la tonique répétée à l'octave)." },
  { q: "Combien de demi-tons contient une octave ?", opts: ["6", "10", "12", "14"], a: 2, fb: "Une octave = 12 demi-tons. C'est la base du système tempéré occidental." },
  { q: "Quelle consonance a permis de construire la gamme naturelle ?", opts: ["La tierce", "La quinte juste (3/2)", "La seconde", "Le triton"], a: 1, fb: "La quinte juste (rapport 3/2) est la seconde consonance fondamentale après l'octave." },
  { q: "Quel est le rapport de fréquence de l'octave ?", opts: ["3/2", "4/3", "2/1", "5/4"], a: 2, fb: "L'octave = rapport 2/1. Une note à 220 Hz a son octave à 440 Hz." },
  { q: "Un ton correspond à combien de demi-tons ?", opts: ["1", "2", "3", "4"], a: 1, fb: "Un ton = 2 demi-tons. Ex : Do-Ré = 1 ton = 2 demi-tons (Do → Do# → Ré)." },
  { q: "Quel est le plus petit intervalle du système occidental ?", opts: ["Le ton", "Le demi-ton", "La tierce mineure", "La seconde majeure"], a: 1, fb: "Le demi-ton est l'unité de base. Sur un piano, c'est la distance entre deux touches voisines." },
  { q: "À quelle fréquence est accordé le La standard (La4) ?", opts: ["220 Hz", "330 Hz", "440 Hz", "880 Hz"], a: 2, fb: "Le La4 = 440 Hz est la référence internationale d'accordage depuis 1939." },
  { q: "Combien d'octaves couvre un piano standard à 88 touches ?", opts: ["5", "7", "8", "10"], a: 1, fb: "Un piano à 88 touches couvre 7 octaves et une tierce mineure (de La0 à Do8)." },
  // ── Degrés ──
  { q: "Quel degré s'appelle la « dominante » ?", opts: ["IIIe", "IVe", "Ve", "VIe"], a: 2, fb: "La dominante est le Ve degré — à la quinte au-dessus de la tonique." },
  { q: "Quel degré s'appelle la « sous-dominante » ?", opts: ["IIe", "IIIe", "IVe", "Ve"], a: 2, fb: "La sous-dominante (IVe) est une quinte en dessous de la dominante." },
  { q: "Quel degré s'appelle la « sus-tonique » ?", opts: ["Ier", "IIe", "IIIe", "IVe"], a: 1, fb: "La sus-tonique (IIe) est la note immédiatement au-dessus de la tonique." },
  { q: "Quel degré s'appelle la « sus-dominante » ?", opts: ["IVe", "Ve", "VIe", "VIIe"], a: 2, fb: "La sus-dominante (VIe) est au-dessus de la dominante (Ve)." },
  { q: "En Do majeur, quelle note est la sensible ?", opts: ["La", "Sol", "Si", "Fa"], a: 2, fb: "Si est le VIIe degré de Do majeur — à ½ ton sous Do." },
  { q: "En Do majeur, quelle note est la médiante ?", opts: ["Ré", "Mi", "Fa", "Sol"], a: 1, fb: "Mi est le IIIe degré de Do majeur — à mi-chemin entre Do (I) et Sol (V)." },
  { q: "En Do majeur, quelle note est la dominante ?", opts: ["Fa", "Sol", "La", "Si"], a: 1, fb: "Sol est le Ve degré de Do majeur." },
  { q: "En Do majeur, quelle note est la sous-dominante ?", opts: ["Mi", "Fa", "Sol", "La"], a: 1, fb: "Fa est le IVe degré de Do majeur." },
  { q: "En Sol majeur, quelle note est la dominante ?", opts: ["Do", "Ré", "Mi", "Fa#"], a: 1, fb: "Sol(I) La(II) Si(III) Do(IV) Ré(V). La dominante de Sol majeur est Ré." },
  { q: "En Sol majeur, quelle note est la sensible ?", opts: ["Mi", "Fa", "Fa#", "Sol#"], a: 2, fb: "Sol La Si Do Ré Mi Fa#(VII). La sensible de Sol majeur est Fa#." },
  { q: "En Fa majeur, quelle note est la sensible ?", opts: ["Mi", "Sol", "Sib", "Ré"], a: 0, fb: "Fa Sol La Sib Do Ré Mi(VII). La sensible de Fa majeur est Mi." },
  { q: "En Ré majeur, quelle note est la sous-dominante ?", opts: ["Sol", "La", "Si", "Do#"], a: 0, fb: "Ré(I) Mi(II) Fa#(III) Sol(IV). La sous-dominante de Ré majeur est Sol." },
  { q: "En Ré majeur, quelle note est la sensible ?", opts: ["Do", "Do#", "Ré#", "Si"], a: 1, fb: "Ré Mi Fa# Sol La Si Do#(VII). La sensible est Do#, à ½ ton sous Ré." },
  { q: "Quel est le VIIe degré de Sol majeur ?", opts: ["Fa", "Fa#", "Sol#", "La"], a: 1, fb: "Sol(I) La(II) Si(III) Do(IV) Ré(V) Mi(VI) Fa#(VII). La sensible de Sol majeur est Fa#." },
  { q: "Quel est le IVe degré de Sol majeur ?", opts: ["Do", "Ré", "Mi", "Fa#"], a: 0, fb: "Sol(I) La(II) Si(III) Do(IV). La sous-dominante de Sol majeur est Do." },
  { q: "Quel est le Ve degré de Fa majeur ?", opts: ["Do", "Sib", "Ré", "Mi"], a: 0, fb: "Fa(I) Sol(II) La(III) Sib(IV) Do(V). La dominante de Fa majeur est Do." },
  { q: "Quel est le IIIe degré de Ré majeur ?", opts: ["Fa", "Fa#", "Sol", "Sol#"], a: 1, fb: "Ré(I) Mi(II) Fa#(III). La médiante de Ré majeur est Fa#." },
  { q: "Quelle gamme a Mi comme sensible ?", opts: ["Do majeur", "Fa majeur", "Sol majeur", "Sib majeur"], a: 1, fb: "En Fa majeur : Fa Sol La Sib Do Ré Mi(VII). Mi est la sensible à ½ ton sous Fa." },
  { q: "Quelle gamme a Si comme sensible ?", opts: ["Do majeur", "Sol majeur", "Fa majeur", "Ré majeur"], a: 0, fb: "En Do majeur : Do Ré Mi Fa Sol La Si(VII). Si est la sensible à ½ ton sous Do." },
  { q: "Pourquoi le IVe degré s'appelle-t-il « sous-dominante » ?", opts: ["Car il est instable", "Car il est une quinte sous la dominante", "Car il est bémol", "Car il prépare la tonique"], a: 1, fb: "La sous-dominante est une quinte en dessous de la dominante (Ve degré)." },
  // ── Gammes spécifiques ──
  { q: "La gamme de Sol majeur contient quel dièse ?", opts: ["Do#", "Fa#", "Sol#", "Si#"], a: 1, fb: "Sol La Si Do Ré Mi Fa# — le Fa# assure le ½ ton entre le VIe et VIIe degré." },
  { q: "La gamme de Fa majeur contient quelle altération ?", opts: ["Fa#", "Sib", "Mib", "Do#"], a: 1, fb: "Fa Sol La Sib Do Ré Mi — le Sib assure le ½ ton entre le IIIe (La) et IVe (Sib) degré." },
  { q: "La gamme de Ré majeur contient combien d'altérations ?", opts: ["0", "1", "2", "3"], a: 2, fb: "Ré Mi Fa# Sol La Si Do# — deux dièses : Fa# et Do#." },
  { q: "Quelle gamme ne contient aucune altération ?", opts: ["Sol majeur", "Fa majeur", "Do majeur", "Ré majeur"], a: 2, fb: "Do majeur est la seule gamme majeure sans dièse ni bémol." },
  { q: "Combien de dièses contient La majeur ?", opts: ["1", "2", "3", "4"], a: 2, fb: "La Si Do# Ré Mi Fa# Sol# — trois dièses : Do#, Fa#, Sol#." },
  { q: "Combien de bémols contient Si♭ majeur ?", opts: ["1", "2", "3", "4"], a: 1, fb: "Sib Do Ré Mib Fa Sol La — deux bémols : Sib et Mib." },
  { q: "La gamme de Mi majeur contient combien de dièses ?", opts: ["2", "3", "4", "5"], a: 2, fb: "Mi Fa# Sol# La Si Do# Ré# — quatre dièses." },
  { q: "Quelle gamme contient un seul bémol ?", opts: ["Réb majeur", "Sib majeur", "Fa majeur", "Mib majeur"], a: 2, fb: "Fa majeur contient un seul bémol : Sib." },
  { q: "En La majeur, lesquelles sont dièsées parmi Do, Sol, Ré ?", opts: ["Do seulement", "Sol seulement", "Do et Sol", "Do et Fa et Sol"], a: 2, fb: "La Si Do# Ré Mi Fa# Sol# — Do et Sol sont dièsés." },
  { q: "Laquelle de ces notes n'appartient pas à Sol majeur ?", opts: ["Fa#", "Do", "Fa naturel", "Si"], a: 2, fb: "Sol majeur contient Fa# — Fa naturel n'en fait pas partie." },
  { q: "Laquelle de ces notes n'appartient pas à Fa majeur ?", opts: ["Sib", "La", "Si naturel", "Do"], a: 2, fb: "Fa majeur contient Sib — Si naturel n'en fait pas partie." },
  { q: "Laquelle de ces notes n'appartient pas à Ré majeur ?", opts: ["Fa#", "Do#", "Sol#", "La"], a: 2, fb: "Ré majeur : Ré Mi Fa# Sol La Si Do# — Sol naturel (pas Sol#) est dans la gamme." },
  { q: "Combien de notes Do majeur et Sol majeur ont-ils en commun ?", opts: ["4", "5", "6", "7"], a: 2, fb: "Do majeur et Sol majeur partagent 6 notes. Seul le Fa (vs Fa#) diffère." },
  { q: "Quelle note est commune à Do majeur ET Sol majeur ?", opts: ["Fa", "Fa#", "Si", "Do"], a: 3, fb: "Do apparaît dans les deux gammes. En fait elles partagent 6 notes sur 7." },
  // ── Intervalles — demi-tons ──
  { q: "Combien de demi-tons contient une tierce majeure ?", opts: ["2", "3", "4", "5"], a: 2, fb: "Tierce majeure = 4 demi-tons. Ex : Do–Mi." },
  { q: "Combien de demi-tons contient une tierce mineure ?", opts: ["2", "3", "4", "5"], a: 1, fb: "Tierce mineure = 3 demi-tons. Ex : Ré–Fa." },
  { q: "Combien de demi-tons contient une quinte juste ?", opts: ["5", "6", "7", "8"], a: 2, fb: "Quinte juste = 7 demi-tons. Ex : Do–Sol." },
  { q: "Combien de demi-tons contient une quarte juste ?", opts: ["4", "5", "6", "7"], a: 1, fb: "Quarte juste = 5 demi-tons. Ex : Do–Fa." },
  { q: "Combien de demi-tons contient une seconde majeure ?", opts: ["1", "2", "3", "4"], a: 1, fb: "Seconde majeure = 2 demi-tons. Ex : Do–Ré." },
  { q: "Combien de demi-tons contient une seconde mineure ?", opts: ["1", "2", "3", "4"], a: 0, fb: "Seconde mineure = 1 demi-ton. Ex : Mi–Fa." },
  { q: "Combien de demi-tons contient une sixte majeure ?", opts: ["7", "8", "9", "10"], a: 2, fb: "Sixte majeure = 9 demi-tons. Ex : Do–La." },
  { q: "Combien de demi-tons contient une sixte mineure ?", opts: ["7", "8", "9", "10"], a: 1, fb: "Sixte mineure = 8 demi-tons. Ex : Mi–Do." },
  { q: "Combien de demi-tons contient une septième majeure ?", opts: ["9", "10", "11", "12"], a: 2, fb: "Septième majeure = 11 demi-tons. Ex : Do–Si." },
  { q: "Combien de demi-tons contient une septième mineure ?", opts: ["9", "10", "11", "12"], a: 1, fb: "Septième mineure = 10 demi-tons. Ex : Do–Sib." },
  { q: "Combien de demi-tons contient le triton ?", opts: ["5", "6", "7", "8"], a: 1, fb: "Triton = 6 demi-tons = exactement 3 tons. Ex : Fa–Si en Do majeur." },
  // ── Intervalles — renversements ──
  { q: "L'inversion d'une tierce majeure donne :", opts: ["Sixte mineure", "Sixte majeure", "Septième mineure", "Quinte juste"], a: 0, fb: "3+6=9. La nature s'inverse : majeure → mineure. Tierce majeure → Sixte mineure." },
  { q: "L'inversion d'une quarte juste donne :", opts: ["Quinte diminuée", "Quinte juste", "Sixte mineure", "Tierce majeure"], a: 1, fb: "4+5=9. La nature juste reste juste : quarte juste → quinte juste." },
  { q: "L'inversion du triton est :", opts: ["Quinte juste", "Quarte juste", "Le triton lui-même", "Sixte mineure"], a: 2, fb: "Triton = 6 demi-tons. 12-6=6. Le triton est son propre renversement !" },
  { q: "L'inversion d'une tierce mineure donne :", opts: ["Sixte majeure", "Sixte mineure", "Septième majeure", "Quinte juste"], a: 0, fb: "3+6=9. La nature s'inverse : mineure → majeure. Tierce mineure → Sixte majeure." },
  { q: "L'inversion d'une seconde majeure donne :", opts: ["Septième majeure", "Septième mineure", "Sixte majeure", "Sixte mineure"], a: 1, fb: "2+7=9. La nature s'inverse : majeure → mineure. Seconde majeure → Septième mineure." },
  { q: "L'inversion d'une seconde mineure donne :", opts: ["Septième majeure", "Septième mineure", "Sixte majeure", "Octave"], a: 0, fb: "1+8=9. La nature s'inverse : mineure → majeure. Seconde mineure → Septième majeure." },
  { q: "La somme du nom d'un intervalle et de son renversement vaut toujours :", opts: ["7", "8", "9", "12"], a: 2, fb: "Toujours 9 : tierce(3)+sixte(6)=9 ; quarte(4)+quinte(5)=9 ; seconde(2)+septième(7)=9." },
  { q: "La nature d'une quinte juste renversée est :", opts: ["Quarte diminuée", "Quarte juste", "Quarte augmentée", "Quinte juste"], a: 1, fb: "La nature juste reste juste au renversement. Quinte juste → quarte juste." },
  // ── Intervalles — reconnaissance ──
  { q: "Quel intervalle sépare Do et Sol ?", opts: ["Quarte juste", "Quinte juste", "Sixte majeure", "Tierce majeure"], a: 1, fb: "Do Ré Mi Fa Sol = 5 degrés → quinte. 7 demi-tons → juste." },
  { q: "Quel intervalle sépare Do et Fa ?", opts: ["Tierce majeure", "Quarte juste", "Quinte juste", "Sixte mineure"], a: 1, fb: "Do Ré Mi Fa = 4 degrés → quarte. 5 demi-tons → juste." },
  { q: "Quel intervalle sépare Do et Mi ?", opts: ["Seconde majeure", "Tierce mineure", "Tierce majeure", "Quarte juste"], a: 2, fb: "Do Ré Mi = 3 degrés → tierce. 4 demi-tons → majeure." },
  { q: "Quel intervalle sépare Do et Ré ?", opts: ["Seconde mineure", "Seconde majeure", "Tierce mineure", "Tierce majeure"], a: 1, fb: "Do Ré = 2 degrés → seconde. 2 demi-tons → majeure." },
  { q: "Quel intervalle sépare Mi et Fa ?", opts: ["Seconde mineure", "Seconde majeure", "Tierce mineure", "Triton"], a: 0, fb: "Mi Fa = 2 degrés → seconde. 1 demi-ton → mineure. C'est l'un des deux ½ tons naturels." },
  { q: "Quel intervalle sépare Fa et Si ?", opts: ["Quinte juste", "Quarte juste", "Triton", "Sixte mineure"], a: 2, fb: "Fa Sol La Si = 4 degrés → quarte. Mais 6 demi-tons → quarte augmentée = triton." },
  { q: "Quel intervalle sépare Do et La ?", opts: ["Quinte juste", "Sixte mineure", "Sixte majeure", "Septième mineure"], a: 2, fb: "Do Ré Mi Fa Sol La = 6 degrés → sixte. 9 demi-tons → majeure." },
  { q: "Quel intervalle sépare Do et Si ?", opts: ["Sixte majeure", "Septième mineure", "Septième majeure", "Octave"], a: 2, fb: "Do … Si = 7 degrés → septième. 11 demi-tons → majeure." },
  { q: "Quel intervalle sépare Si et Do ?", opts: ["Seconde majeure", "Seconde mineure", "Tierce mineure", "Triton"], a: 1, fb: "Si Do = 2 degrés → seconde. 1 demi-ton → mineure. C'est l'autre ½ ton naturel." },
  // ── Structure gamme ──
  { q: "Entre quels degrés se trouvent les ½ tons de la gamme majeure ?", opts: ["I-II et V-VI", "III-IV et VII-VIII", "II-III et VI-VII", "IV-V et VI-VII"], a: 1, fb: "½ tons entre III-IV (Mi-Fa) et VII-VIII (Si-Do). Les seuls endroits où deux blanches sont adjacentes." },
  { q: "Combien de tons y a-t-il entre I et II dans une gamme majeure ?", opts: ["½ ton", "1 ton", "1 ton et ½", "2 tons"], a: 1, fb: "Entre I et II : 1 ton (seconde majeure). Ex : Do-Ré." },
  { q: "Combien de tons y a-t-il entre III et IV dans une gamme majeure ?", opts: ["½ ton", "1 ton", "1 ton et ½", "2 tons"], a: 0, fb: "Entre III et IV : ½ ton (seconde mineure). Ex : Mi-Fa. C'est l'un des deux ½ tons caractéristiques." },
  { q: "Combien de tons y a-t-il entre I et V dans une gamme majeure ?", opts: ["2 tons", "2 tons et ½", "3 tons", "3 tons et ½"], a: 3, fb: "De I à V : T+T+½+T = 3 tons et ½ = 7 demi-tons = quinte juste." },
  { q: "Combien de tons y a-t-il entre I et III dans une gamme majeure ?", opts: ["1 ton", "1 ton et ½", "2 tons", "2 tons et ½"], a: 2, fb: "De I à III : T+T = 2 tons = 4 demi-tons = tierce majeure." },
  { q: "Entre Mi et Fa, il y a :", opts: ["1 ton", "½ ton", "1 ton et ½", "2 tons"], a: 1, fb: "Mi-Fa est l'un des deux ½ tons naturels du piano (touches blanches adjacentes)." },
  { q: "Entre Si et Do, il y a :", opts: ["1 ton", "½ ton", "1 ton et ½", "2 tons"], a: 1, fb: "Si-Do est l'autre ½ ton naturel du piano." },
  { q: "Entre Do et Ré, il y a :", opts: ["½ ton", "1 ton", "1 ton et ½", "2 tons"], a: 1, fb: "Do-Ré = 1 ton. La touche noire Do# se trouve entre eux." },
  // ── Histoire / étymologie ──
  { q: "D'où vient le nom « Ut » (aujourd'hui Do) ?", opts: ["D'un théoricien nommé Ut", "De la première syllabe d'un hymne à St Jean", "Du grec ancien", "De l'arabe"], a: 1, fb: "'Ut queant laxis' est le premier vers de l'hymne dont Guido d'Arezzo a tiré les syllabes." },
  { q: "Pourquoi « Ut » est-il devenu « Do » ?", opts: ["Par décret royal", "Car c'est plus facile à chanter", "Car Ut était trop grave", "Par erreur d'imprimerie"], a: 1, fb: "'Do' est une syllabe plus ouverte et plus facile à chanter. Ce changement date du XVIe siècle." },
  { q: "D'où vient le nom « Si » ?", opts: ["Du latin 'sine'", "Des initiales de 'Sancte Ioannes'", "D'un théoricien espagnol", "Du grec 'sigma iota'"], a: 1, fb: "'Si' = initiales de 'Sancte Ioannes' (Saint Jean), le dédicataire de l'hymne." },
  { q: "Quel siècle a vu naître la notation de Guido d'Arezzo ?", opts: ["IXe siècle", "Xe siècle", "XIe siècle", "XIIe siècle"], a: 2, fb: "Guido d'Arezzo vivait au XIe siècle (vers 990-1050)." },
  { q: "Comment s'appelle 'Do' en notation anglosaxonne ?", opts: ["A", "B", "C", "D"], a: 2, fb: "Do=C, Ré=D, Mi=E, Fa=F, Sol=G, La=A, Si=B." },
  { q: "Comment s'appelle 'La' en notation anglosaxonne ?", opts: ["E", "F", "G", "A"], a: 3, fb: "La = A. La fréquence standard du La est 440 Hz (La4 = A4)." },
  { q: "Comment s'appelle 'Si' en notation anglosaxonne ?", opts: ["A", "B", "C", "D"], a: 1, fb: "Si = B. En Allemagne, 'B' désigne Sib et 'H' désigne Si naturel !" },
  { q: "Comment s'appelle 'Sol' en notation anglosaxonne ?", opts: ["E", "F", "G", "A"], a: 2, fb: "Sol = G. La gamme de Sol majeur se note 'G major' en anglais." },
  // ── Altérations ──
  { q: "Qu'est-ce qu'un dièse (#) ?", opts: ["Baisse d'un ½ ton", "Hausse d'un ½ ton", "Hausse d'un ton", "Baisse d'un ton"], a: 1, fb: "Un dièse (#) élève la note d'un demi-ton. Fa# est un demi-ton au-dessus de Fa." },
  { q: "Qu'est-ce qu'un bémol (♭) ?", opts: ["Baisse d'un ½ ton", "Hausse d'un ½ ton", "Hausse d'un ton", "Baisse d'un ton"], a: 0, fb: "Un bémol (♭) abaisse la note d'un demi-ton. Sib est un demi-ton en dessous de Si." },
  { q: "Fa# et Sol♭ désignent-ils la même touche sur un piano ?", opts: ["Non, jamais", "Oui, en tempérament égal", "Seulement en Sol majeur", "Seulement en Fa majeur"], a: 1, fb: "En tempérament égal, Fa# = Sol♭ : ce sont des enharmoniques — même touche, noms différents." },
  { q: "La# et Sib désignent-ils la même note ?", opts: ["Non", "Oui, ce sont des enharmoniques", "Seulement dans certaines gammes", "Jamais"], a: 1, fb: "Oui : La# et Sib sont enharmoniques — même son, noms différents selon le contexte." },
  { q: "Qu'est-ce qu'un bécarré (♮) ?", opts: ["Hausse d'un ½ ton", "Baisse d'un ½ ton", "Annulation d'une altération précédente", "Doublement d'une note"], a: 2, fb: "Le bécarré (♮) annule un dièse ou bémol précédent et rétablit la note naturelle." },
  { q: "Comment appelle-t-on deux notes qui sonnent pareil mais s'écrivent différemment ?", opts: ["Synonymes", "Enharmoniques", "Homophones", "Chromatiques"], a: 1, fb: "Les enharmoniques sonnent pareil mais ont des noms différents. Ex : Fa# = Sol♭." },
  { q: "Qu'est-ce qu'une gamme chromatique ?", opts: ["5 notes", "7 notes", "12 demi-tons", "Sans altérations"], a: 2, fb: "La gamme chromatique contient les 12 demi-tons de l'octave — toutes les touches blanches ET noires." },
];

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const QUIZ_COUNT = 8; // questions par session

// ─── Styles inline ────────────────────────────────────────────────────────────
// (En production, utilise Tailwind ou CSS modules)

const S = {
  wrap: { fontFamily: "var(--font-sans, system-ui)", maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" } as React.CSSProperties,
  header: { padding: "1.5rem 0 1rem", borderBottom: "0.5px solid #e5e5e5", marginBottom: "1.25rem" } as React.CSSProperties,
  badge: { display: "inline-block", background: "#E6F1FB", color: "#185FA5", fontSize: 11, fontWeight: 500, padding: "2px 10px", borderRadius: 20, marginBottom: 6 } as React.CSSProperties,
  h1: { fontSize: 26, fontWeight: 500, color: "#111", margin: 0 } as React.CSSProperties,
  subtitle: { fontSize: 14, color: "#666", marginTop: 4, lineHeight: 1.6 } as React.CSSProperties,
  nav: { display: "flex", gap: 6, flexWrap: "wrap" as const, marginBottom: "1.5rem" },
  pill: (active: boolean): React.CSSProperties => ({
    fontSize: 12, padding: "5px 14px",
    border: `0.5px solid ${active ? "#333" : "#ddd"}`,
    borderRadius: 20, cursor: "pointer",
    background: active ? "#111" : "transparent",
    color: active ? "#fff" : "#666",
    transition: "all .15s",
  }),
  stitle: { fontSize: 17, fontWeight: 500, color: "#111", marginBottom: 8 } as React.CSSProperties,
  sbody: { fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: "1rem" } as React.CSSProperties,
  infoBox: { borderLeft: "2px solid #185FA5", padding: "8px 14px", background: "#E6F1FB", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#0C447C", lineHeight: 1.6 } as React.CSSProperties,
  warnBox: { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
  card: { border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "12px 16px", background: "#fff", marginBottom: 8 } as React.CSSProperties,
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function Cours1() {
  const [activeSection, setActiveSection] = useState("origines");
  const [activeGamme, setActiveGamme] = useState(0);
  const [activeDeg, setActiveDeg] = useState<number | null>(null);
  const [activeInterval, setActiveInterval] = useState<number | null>(null);
  const [quizQuestions, setQuizQuestions] = useState(() => shuffleArray(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizDone, setQuizDone] = useState(false);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);

  const pianoRef = useRef<PianoPlayerRef>(null);

  const playInterval = useCallback((iv: IntervalDef) => {
    const [n1, o1, n2, o2] = iv.exampleNotes;
    pianoRef.current?.playNote(n1, o1, { duration: 1.2 });
    setTimeout(() => pianoRef.current?.playNote(n2, o2, { duration: 1.5 }), 600);
  }, []);

  const playInverse = useCallback((iv: IntervalDef) => {
    const [, , n2, o2] = iv.exampleNotes;
    // Inverse: play n2 then n1 one octave up
    const [n1, o1] = [iv.exampleNotes[0], iv.exampleNotes[1]];
    pianoRef.current?.playNote(n2, o2, { duration: 1.2 });
    setTimeout(() => pianoRef.current?.playNote(n1, o1 + 1, { duration: 1.5 }), 600);
  }, []);

  const playGamme = useCallback(() => {
    const g = GAMMES[activeGamme];
    g.notes.forEach((note, i) => {
      setTimeout(() => pianoRef.current?.playNote(note, 3, { duration: 0.7 }), i * 280);
    });
  }, [activeGamme]);

  const answerQuiz = (optIdx: number) => {
    if (quizAnswered) return;
    setSelectedOpt(optIdx);
    setQuizAnswered(true);
    if (optIdx === quizQuestions[quizIdx].a) setQuizScore((s) => s + 1);
  };

  const nextQuiz = () => {
    if (quizIdx + 1 >= QUIZ_COUNT) {
      setQuizDone(true);
    } else {
      setQuizIdx((i) => i + 1);
      setQuizAnswered(false);
      setSelectedOpt(null);
    }
  };

  const resetQuiz = () => {
    setQuizQuestions(shuffleArray(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
    setQuizIdx(0);
    setQuizScore(0);
    setQuizAnswered(false);
    setSelectedOpt(null);
    setQuizDone(false);
  };

  const g = GAMMES[activeGamme];

  return (
    <div style={S.wrap}>
      {/* Shared piano (hidden, used for audio only) */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={2} startOctave={3} showLabels={false} />
      </div>

      {/* Header */}
      <div style={S.header}>
        <span style={S.badge}>Niveau 1 · Cours 1</span>
        <h1 style={S.h1}>La gamme</h1>
        <p style={S.subtitle}>Comment 7 notes construisent tout un langage musical.</p>
      </div>

      {/* Navigation */}
      <nav style={S.nav}>
        {SECTIONS.map((s) => (
          <button key={s.id} style={S.pill(activeSection === s.id)} onClick={() => setActiveSection(s.id)}>
            {s.label}
          </button>
        ))}
      </nav>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 1 : ORIGINES
      ══════════════════════════════════════════════════════════════ */}
      {activeSection === "origines" && (
        <div>
          <h2 style={S.stitle}>D'où viennent ces 7 notes ?</h2>
          <p style={S.sbody}>
            Les premiers théoriciens de la musique occidentale — notamment les Grecs avec Pythagore — ont cherché à
            bâtir une gamme sur des rapports de fréquences simples, c'est-à-dire des sons qui <em>s'accordent</em> naturellement.
          </p>
          <p style={S.sbody}>
            Le point de départ est l'<strong>octave</strong> : une note et son double en fréquence sonnent
            identiques à des hauteurs différentes. Puis vient la <strong>quinte juste</strong> (rapport 3/2),
            la seconde consonance la plus pure. En enchaînant six quintes à partir de Fa :
          </p>

          <div style={{ background: "#f8f8f8", borderRadius: 10, padding: "14px 18px", margin: "12px 0", fontFamily: "monospace", fontSize: 15, letterSpacing: 2, color: "#333", textAlign: "center" }}>
            Fa → Do → Sol → Ré → La → Mi → Si
          </div>

          <p style={S.sbody}>
            En ramenant chaque note dans la même octave de départ, on obtient exactement
            <strong> 7 hauteurs distinctes</strong> — la gamme diatonique. Pas 5, pas 12 : 7.
            C'est la physique acoustique qui l'impose.
          </p>

          <div style={S.infoBox}>
            Puis ces notes sont réordonnées par hauteur croissante : <strong>Do – Ré – Mi – Fa – Sol – La – Si</strong>.
            C'est la gamme de Do majeur — la plus simple car elle ne contient aucune altération.
          </div>

          {/* Histoire du nom des notes */}
          <h3 style={{ fontSize: 15, fontWeight: 500, color: "#111", margin: "1.5rem 0 .5rem" }}>
            L'origine du nom des notes
          </h3>
          <p style={S.sbody}>
            Au <strong>XIe siècle</strong>, le moine bénédictin italien <strong>Guido d'Arezzo</strong> cherche un
            moyen d'enseigner le chant plus facilement. Il remarque que les premières syllabes de chaque vers
            d'un hymne à Saint Jean-Baptiste commencent sur les notes successives de la gamme :
          </p>

          <div style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, overflow: "hidden", margin: "12px 0" }}>
            {[
              { syl: "Ut", verse: "Ut queant laxis", note: "Do (Ier degré)" },
              { syl: "Ré", verse: "Resonare fibris", note: "Ré (IIe degré)" },
              { syl: "Mi", verse: "Mira gestorum", note: "Mi (IIIe degré)" },
              { syl: "Fa", verse: "Famuli tuorum", note: "Fa (IVe degré)" },
              { syl: "Sol", verse: "Solve polluti", note: "Sol (Ve degré)" },
              { syl: "La", verse: "Labii reatum", note: "La (VIe degré)" },
            ].map((row, i) => (
              <div key={row.syl} style={{ display: "flex", alignItems: "center", gap: 16, padding: "8px 14px", background: i % 2 === 0 ? "#fff" : "#fafafa", borderBottom: i < 5 ? "0.5px solid #f0f0f0" : "none" }}>
                <span style={{ fontWeight: 700, fontSize: 15, color: "#185FA5", minWidth: 32 }}>{row.syl}</span>
                <span style={{ fontSize: 13, color: "#555", flex: 1, fontStyle: "italic" }}>{row.verse}…</span>
                <span style={{ fontSize: 12, color: "#888" }}>{row.note}</span>
              </div>
            ))}
          </div>

          <p style={S.sbody}>
            Le <strong>Si</strong> fut ajouté plus tard (initiales de <em>Sancte Ioannes</em> = Saint Jean).
            Puis au <strong>XVIe siècle</strong>, <em>Ut</em> devint <strong>Do</strong> — syllabe plus ouverte
            et plus facile à chanter, peut-être en hommage au théoricien <strong>Giovanni Battista Doni</strong>.
          </p>

          <div style={S.warnBox}>
            Les noms anglais (C, D, E, F, G, A, B) ont une origine différente — ils dérivent
            du système médiéval de notation par lettres. C = Do, D = Ré, E = Mi, F = Fa, G = Sol, A = La, B = Si.
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 : LES DEGRÉS
      ══════════════════════════════════════════════════════════════ */}
      {activeSection === "degres" && (
        <div>
          <h2 style={S.stitle}>Les 7 degrés : chaque note a un nom et un rôle</h2>
          <p style={S.sbody}>
            Dans une gamme, chaque note occupe une <strong>position</strong> qu'on appelle degré.
            C'est une notion <em>relative</em> : Fa est le IVe degré en Do majeur, mais le Ier en Fa majeur.
            Les noms des degrés ne sont pas arbitraires — chacun traduit une réalité acoustique et musicale précise.
          </p>
          <p style={{ fontSize: 13, color: "#888", marginBottom: 12 }}>
            Cliquez sur un degré pour découvrir l'origine de son nom et ses attractions.
          </p>

          {/* Grille des degrés */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 6, marginBottom: 12 }}>
            {DEGREES.map((d, i) => (
              <div
                key={d.num}
                onClick={() => setActiveDeg(activeDeg === i ? null : i)}
                style={{
                  border: `0.5px solid ${activeDeg === i ? d.color : "#e5e5e5"}`,
                  borderRadius: 8,
                  padding: "8px 4px",
                  textAlign: "center",
                  cursor: "pointer",
                  background: activeDeg === i ? d.bg : "#fff",
                  transition: "all .15s",
                }}
              >
                <div style={{ fontSize: 11, color: "#999", fontWeight: 500 }}>{d.num}</div>
                <div style={{ fontSize: 14, fontWeight: 500, color: "#111", margin: "2px 0" }}>{d.note}</div>
                <div style={{ fontSize: 9, color: d.color, marginTop: 2, lineHeight: 1.3 }}>{d.name}</div>
              </div>
            ))}
          </div>

          {/* Détail du degré sélectionné */}
          {activeDeg !== null && (
            <div style={{ border: `0.5px solid ${DEGREES[activeDeg].color}`, borderRadius: 10, padding: "14px 18px", background: DEGREES[activeDeg].bg, marginBottom: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <span style={{ fontSize: 22, fontWeight: 700, color: DEGREES[activeDeg].color }}>
                  {DEGREES[activeDeg].num}
                </span>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 500, color: "#111" }}>{DEGREES[activeDeg].name}</div>
                  <div style={{ fontSize: 13, color: "#666" }}>Note : {DEGREES[activeDeg].note}</div>
                </div>
              </div>
              <div style={{ fontSize: 13, color: "#444", lineHeight: 1.65, marginBottom: 8 }}>
                <strong>Étymologie :</strong>{" "}
                <span dangerouslySetInnerHTML={{ __html: DEGREES[activeDeg].origin }} />
              </div>
              <div style={{ fontSize: 13, color: "#444", lineHeight: 1.65, padding: "8px 12px", background: "rgba(255,255,255,0.6)", borderRadius: 6 }}>
                <strong>Attraction :</strong> {DEGREES[activeDeg].attraction}
              </div>
              <button
                onClick={() => pianoRef.current?.playNote(DEGREES[activeDeg].note, 3, { duration: 2 })}
                style={{ marginTop: 10, fontSize: 12, padding: "5px 14px", border: `0.5px solid ${DEGREES[activeDeg].color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: DEGREES[activeDeg].color }}
              >
                ▶ Écouter {DEGREES[activeDeg].note}
              </button>
            </div>
          )}

          {/* Tableau récapitulatif */}
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {["N°", "Nom", "Note (Do maj.)", "Étymologie courte"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 10px", fontWeight: 500, color: "#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DEGREES.map((d, i) => (
                  <tr key={d.num} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "7px 10px", fontWeight: 700, color: d.color }}>{d.num}</td>
                    <td style={{ padding: "7px 10px", fontWeight: 500 }}>{d.name}</td>
                    <td style={{ padding: "7px 10px" }}>{d.note}</td>
                    <td style={{ padding: "7px 10px", color: "#666", fontSize: 12 }}>
                      {d.num === "I" && "Centre de gravité"}
                      {d.num === "II" && "Au-dessus de la tonique"}
                      {d.num === "III" && "À mi-chemin (I↔V)"}
                      {d.num === "IV" && "Sous la dominante"}
                      {d.num === "V" && "Domine la gamme"}
                      {d.num === "VI" && "Au-dessus de la dominante"}
                      {d.num === "VII" && "Sensible à la tonique"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.infoBox}>
            <strong>Notes qui s'attirent :</strong> La paire la plus forte est <strong>Si → Do</strong>
            (VIIe vers Ier) — un demi-ton seulement les sépare. La seconde paire importante est
            <strong> Fa → Mi</strong> (IVe vers IIIe), surtout dans le contexte de la dominante qui se résout.
            Ces attractions sont le moteur de toute la musique tonale.
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3 : TONS & DEMI-TONS
      ══════════════════════════════════════════════════════════════ */}
      {activeSection === "tons" && (
        <div>
          <h2 style={S.stitle}>La structure interne : tons et demi-tons</h2>
          <p style={S.sbody}>
            Les 7 notes ne sont pas également espacées. Entre certaines il y a un <strong>ton</strong> (2 demi-tons),
            entre d'autres seulement un <strong>demi-ton</strong>. Ce schéma précis donne à la gamme majeure
            sa couleur caractéristique. Sur un piano, un demi-ton = deux touches voisines (avec ou sans touche noire).
          </p>

          <div style={S.infoBox}>
            La formule universelle : <strong>T – T – ½ – T – T – T – ½</strong>.<br />
            Les deux demi-tons se trouvent toujours entre les degrés <strong>III–IV</strong> et <strong>VII–I</strong>.
            Cette formule s'applique à toute gamme majeure, quelle que soit la note de départ.
          </div>

          {/* Sélecteur de gamme */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", margin: "16px 0 12px" }}>
            {GAMMES.map((gm, i) => (
              <button
                key={gm.name}
                onClick={() => setActiveGamme(i)}
                style={{
                  fontSize: 12, padding: "5px 12px",
                  border: `0.5px solid ${i === activeGamme ? "#0F6E56" : "#ddd"}`,
                  borderRadius: 6, cursor: "pointer",
                  background: i === activeGamme ? "#E1F5EE" : "transparent",
                  color: i === activeGamme ? "#0F6E56" : "#666",
                }}
              >
                {gm.name}
              </button>
            ))}
          </div>

          {/* Rangée des notes avec T/½ — inclut la tonique finale */}
          <div style={{ display: "flex", alignItems: "center", overflowX: "auto", gap: 0, margin: "12px 0", paddingBottom: 4 }}>
            {[...g.notes, g.root].map((note, i) => {
              const isAccidental = g.accidentals.includes(note);
              const displayNote = i === g.notes.length
                ? `${g.root} (VIII)` // tonique finale
                : note;
              return (
                <React.Fragment key={i}>
                  <div style={{ textAlign: "center", minWidth: i === g.notes.length ? 60 : 52 }}>
                    <div style={{
                      fontSize: 12, fontWeight: 500, padding: "6px 4px",
                      border: `0.5px solid ${i === g.notes.length ? "#0F6E56" : isAccidental ? "#BA7517" : "#e5e5e5"}`,
                      borderRadius: 6,
                      background: i === g.notes.length ? "#E1F5EE" : isAccidental ? "#FAEEDA" : "#f8f8f8",
                      color: i === g.notes.length ? "#0F6E56" : isAccidental ? "#BA7517" : "#111",
                    }}>
                      {displayNote}
                    </div>
                    <div style={{ fontSize: 9, color: "#aaa", marginTop: 3 }}>{i + 1}</div>
                  </div>
                  {i < g.notes.length && (
                    <div style={{ textAlign: "center", minWidth: 28, display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div style={{ height: 3, width: 20, borderRadius: 2, background: g.steps[i] === "T" ? "#9FE1CB" : "#F0997B", marginBottom: 3 }} />
                      <div style={{ fontSize: 10, color: g.steps[i] === "T" ? "#0F6E56" : "#993C1D", fontWeight: 500 }}>
                        {g.steps[i]}
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {g.accidentals.length > 0 && (
            <div style={S.warnBox}>
              {g.name} contient {g.accidentals.length === 1 ? "un dièse/bémol" : "deux altérations"} :{" "}
              <strong>{g.accidentalDisplay.join(", ")}</strong>. Sans cette altération, la formule T-T-½-T-T-T-½
              ne serait pas respectée.
            </div>
          )}

          {/* Piano 2 octaves — points rouges précis de la tonique à la tonique */}
          <div style={{ margin: "16px 0 8px" }}>
            <PianoPlayer
              dotKeys={g.dotKeys}
              blackKeyLabels={g.blackLabels}
              octaves={2}
              startOctave={3}
              showLabels
              showOctaveMarkers
              onNoteClick={(note, octave) => {
                pianoRef.current?.playNote(note, octave, { duration: 1.5 });
              }}
            />
          </div>

          <button
            onClick={playGamme}
            style={{ fontSize: 13, padding: "7px 18px", border: "0.5px solid #0F6E56", borderRadius: 20, cursor: "pointer", background: "#E1F5EE", color: "#0F6E56" }}
          >
            ▶ Jouer la gamme de {g.name}
          </button>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4 : INTERVALLES
      ══════════════════════════════════════════════════════════════ */}
      {activeSection === "intervalles" && (
        <div>
          <h2 style={S.stitle}>Les intervalles et leurs renversements</h2>
          <p style={S.sbody}>
            Un intervalle est la distance entre deux notes. Il se définit par son <strong>nom</strong>
            (combien de degrés séparent les deux notes, en comptant les deux extrêmes) et sa <strong>nature</strong>
            (le nombre exact de demi-tons, qui détermine la couleur sonore).
          </p>

          <div style={S.infoBox}>
            <strong>Loi des renversements :</strong> quand on inverse un intervalle (la note grave monte d'une octave),
            on obtient son complémentaire. Les noms s'additionnent toujours à <strong>9</strong> (ex : tierce 3 + sixte 6 = 9).
            La nature s'inverse : majeure ↔ mineure, juste ↔ juste.
          </div>

          <p style={{ fontSize: 13, color: "#888", marginBottom: 12 }}>
            Cliquez sur un intervalle pour l'entendre, puis son renversement en face.
          </p>

          {/* Intervalles face à face */}
          {INTERVALS.map((iv, i) => (
            <div
              key={iv.name}
              style={{
                border: `0.5px solid ${activeInterval === i ? "#185FA5" : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 8,
                overflow: "hidden",
                cursor: "pointer",
                background: activeInterval === i ? "#f0f6ff" : "#fff",
              }}
              onClick={() => setActiveInterval(activeInterval === i ? null : i)}
            >
              {/* Header */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 8, padding: "10px 14px", alignItems: "center" }}>
                {/* Intervalle gauche */}
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#111" }}>{iv.name}</div>
                  <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>
                    {iv.semis} demi-ton{iv.semis > 1 ? "s" : ""} · {iv.nature}
                  </div>
                  <div style={{ fontSize: 11, color: "#185FA5", marginTop: 2 }}>{iv.example}</div>
                </div>

                {/* Flèche centrale */}
                <div style={{ fontSize: 16, color: "#ccc", userSelect: "none" }}>⇄</div>

                {/* Intervalle droit (renversement) */}
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#111" }}>{iv.inverse}</div>
                  <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>
                    {iv.inverseSemis} demi-tons · {iv.inverseNature}
                  </div>
                  <div style={{ fontSize: 11, color: "#185FA5", marginTop: 2 }}>
                    {/* Inversion de l'exemple */}
                    {iv.exampleNotes[2]} → {iv.exampleNotes[0]}
                  </div>
                </div>
              </div>

              {/* Boutons d'écoute (visibles si sélectionné) */}
              {activeInterval === i && (
                <div style={{ display: "flex", gap: 8, padding: "8px 14px 12px", borderTop: "0.5px solid #e5e5e5" }}>
                  <button
                    onClick={(e) => { e.stopPropagation(); playInterval(iv); }}
                    style={{ fontSize: 12, padding: "5px 14px", border: "0.5px solid #185FA5", borderRadius: 20, cursor: "pointer", background: "#E6F1FB", color: "#185FA5" }}
                  >
                    ▶ {iv.name}
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); playInverse(iv); }}
                    style={{ fontSize: 12, padding: "5px 14px", border: "0.5px solid #993C1D", borderRadius: 20, cursor: "pointer", background: "#FAECE7", color: "#993C1D" }}
                  >
                    ▶ {iv.inverse} (renversement)
                  </button>
                  {iv.name === "Triton" && (
                    <span style={{ fontSize: 11, color: "#888", display: "flex", alignItems: "center", marginLeft: 4 }}>
                      Le triton est son propre renversement !
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Tableau récapitulatif complet */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 8px", color: "#111" }}>
            Tableau complet des intervalles
          </h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {["Intervalle", "Nature", "Demi-tons", "Exemple (sur Fa)"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 10px", fontWeight: 500, color: "#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Seconde", "mineure / majeure", "1 / 2", "Fa–Sol♭ / Fa–Sol"],
                  ["Tierce", "mineure / majeure", "3 / 4", "Fa–La♭ / Fa–La"],
                  ["Quarte", "juste / augmentée", "5 / 6", "Fa–Si♭ / Fa–Si"],
                  ["Quinte", "dim. / juste / aug.", "6 / 7 / 8", "Fa–Do♭ / Fa–Do / Fa–Do#"],
                  ["Sixte", "mineure / majeure", "8 / 9", "Fa–Ré♭ / Fa–Ré"],
                  ["Septième", "mineure / majeure", "10 / 11", "Fa–Mi♭ / Fa–Mi"],
                  ["Octave", "juste", "12", "Fa–Fa"],
                ].map(([name, nature, semis, ex], i) => (
                  <tr key={name} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "7px 10px", fontWeight: 500 }}>{name}</td>
                    <td style={{ padding: "7px 10px", color: "#666" }}>{nature}</td>
                    <td style={{ padding: "7px 10px", color: "#185FA5" }}>{semis}</td>
                    <td style={{ padding: "7px 10px", color: "#555" }}>{ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════
          SECTION 5 : QUIZ
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
                Score : {quizScore} / {QUIZ_COUNT}
              </div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
                {quizScore === QUIZ_COUNT
                  ? "Parfait ! Tu maîtrises les bases de la gamme."
                  : quizScore >= 6
                  ? "Très bien ! Quelques points à revoir."
                  : "Continue à pratiquer — relis les sections et recommence."}
              </div>
              <button
                onClick={resetQuiz}
                style={{ fontSize: 13, padding: "8px 20px", border: "0.5px solid #185FA5", borderRadius: 20, cursor: "pointer", background: "#E6F1FB", color: "#185FA5" }}
              >
                Nouvelles questions →
              </button>
            </div>
          ) : (
            <div>
              <div style={{ fontSize: 12, color: "#999", marginBottom: 10 }}>
                Question {quizIdx + 1} / {QUIZ_COUNT}
                <span style={{ marginLeft: 12, color: "#bbb" }}>{ALL_QUESTIONS.length} questions dans le pool — nouvelles à chaque session</span>
              </div>
              <div style={{ fontSize: 15, color: "#111", lineHeight: 1.6, marginBottom: 16, fontWeight: 500 }}>
                {quizQuestions[quizIdx].q}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {quizQuestions[quizIdx].opts.map((opt, i) => {
                  const isCorrect = i === quizQuestions[quizIdx].a;
                  const isSelected = selectedOpt === i;
                  let bg = "#fff", border = "#e5e5e5", color = "#333";
                  if (quizAnswered) {
                    if (isCorrect) { bg = "#E1F5EE"; border = "#0F6E56"; color = "#085041"; }
                    else if (isSelected) { bg = "#FCEBEB"; border = "#A32D2D"; color = "#501313"; }
                  } else if (isSelected) {
                    bg = "#E6F1FB"; border = "#185FA5";
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
                  {quizIdx + 1 < QUIZ_COUNT ? "Question suivante →" : "Voir le score →"}
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

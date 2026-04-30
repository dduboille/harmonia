"use client";

/**
 * Cours1.tsx
 * Harmonia · Niveau 1 · Cours 1 — La gamme, les degrés et les intervalles
 * i18n : UI chrome traduit via next-intl (useCoursI18n)
 * Contenu pédagogique : FR pour MVP
 *
 * Convention Harmonia : noms de notes en anglais (C D E F G A B)
 */

import React, { useRef, useState, useCallback } from "react";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import { useCoursI18n } from "@/hooks/useCoursI18n";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Section {
  id: string;
  label: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SECTIONS_IDS = ["origines","degres","tons","intervalles","quiz"] as const;

// Noms de notes : notation anglaise (standard Harmonia)
// dotKeys et playNote utilisent les noms anglais transmis au PianoPlayer
const GAMMES = [
  {
    name: "C majeur", root: "C", displayRoot: "C", startOctave: 3,
    notes: ["C", "D", "E", "F", "G", "A", "B"],
    steps: ["T", "T", "½", "T", "T", "T", "½"],
    accidentals: [], blackLabels: {} as Record<string, string>, accidentalDisplay: [] as string[],
    dotKeys: ["C:3","D:3","E:3","F:3","G:3","A:3","B:3","C:4"],
  },
  {
    name: "G majeur", root: "G", displayRoot: "G", startOctave: 3,
    notes: ["G", "A", "B", "C", "D", "E", "F#"],
    steps: ["T", "T", "½", "T", "T", "T", "½"],
    accidentals: ["F#"], blackLabels: { "F#": "F#" }, accidentalDisplay: ["F#"],
    dotKeys: ["G:3","A:3","B:3","C:4","D:4","E:4","F#:4","G:4"],
  },
  {
    name: "F majeur", root: "F", displayRoot: "F", startOctave: 3,
    notes: ["F", "G", "A", "A#", "C", "D", "E"],
    steps: ["T", "T", "½", "T", "T", "T", "½"],
    accidentals: ["A#"], blackLabels: { "A#": "Bb" }, accidentalDisplay: ["Bb"],
    dotKeys: ["F:3","G:3","A:3","A#:3","C:4","D:4","E:4","F:4"],
  },
  {
    name: "D majeur", root: "D", displayRoot: "D", startOctave: 3,
    notes: ["D", "E", "F#", "G", "A", "B", "C#"],
    steps: ["T", "T", "½", "T", "T", "T", "½"],
    accidentals: ["F#", "C#"], blackLabels: { "F#": "F#", "C#": "C#" }, accidentalDisplay: ["F#", "C#"],
    dotKeys: ["D:3","E:3","F#:3","G:3","A:3","B:3","C#:4","D:4"],
  },
];

const DEGREES = [
  {
    num: "I", name: "Tonique", note: "C",
    origin: "Du latin «&nbsp;tonus&nbsp;» — le son de référence, le centre de gravité de toute la gamme. Toutes les autres notes gravitent autour d'elle.",
    attraction: "Elle attire toutes les autres notes, et plus particulièrement le VIIe degré (la sensible), situé à seulement un demi-ton en dessous.",
    color: "#0F6E56", bg: "#E1F5EE",
  },
  {
    num: "II", name: "Sus-tonique", note: "D",
    origin: "Littéralement «&nbsp;au-dessus de la tonique&nbsp;» — la note immédiatement supérieure au centre tonal.",
    attraction: "Instable, elle tend vers le Ier degré (en descendant) ou vers le IIIe (en montant). Elle est souvent le point de départ des progressions harmoniques.",
    color: "#534AB7", bg: "#EEEDFE",
  },
  {
    num: "III", name: "Médiante", note: "E",
    origin: "Du latin «&nbsp;medius&nbsp;» — elle est à mi-chemin entre la tonique (I) et la dominante (V), à 4 demi-tons de chacune.",
    attraction: "Elle définit la couleur de la gamme : tierce majeure (4 demi-tons) = sonorité majeure, tierce mineure (3 demi-tons) = sonorité mineure.",
    color: "#185FA5", bg: "#E6F1FB",
  },
  {
    num: "IV", name: "Sous-dominante", note: "F",
    origin: "«&nbsp;Sous la dominante&nbsp;» — elle est une quinte en dessous de la dominante, ou une quarte au-dessus de la tonique.",
    attraction: "Elle prépare la tension. Dans une résolution, le IVe degré tend à descendre vers le IIIe — c'est l'un des mouvements les plus caractéristiques de l'harmonie tonale.",
    color: "#993C1D", bg: "#FAECE7",
  },
  {
    num: "V", name: "Dominante", note: "G",
    origin: "Du latin «&nbsp;dominare&nbsp;» — elle domine la gamme, à la quinte juste au-dessus de la tonique. C'est le second pôle structurant.",
    attraction: "Elle appelle fortement la résolution vers la tonique. L'accord de dominante est le plus tendu de la gamme — c'est lui qui donne son mouvement au discours musical.",
    color: "#BA7517", bg: "#FAEEDA",
  },
  {
    num: "VI", name: "Sus-dominante", note: "A",
    origin: "«&nbsp;Au-dessus de la dominante&nbsp;» — une seconde au-dessus du Ve degré.",
    attraction: "Sa stabilité relative en fait un substitut naturel de la tonique. La cadence rompue (V→VI) exploite cette parenté pour surprendre l'oreille.",
    color: "#3B6D11", bg: "#EAF3DE",
  },
  {
    num: "VII", name: "Sensible", note: "B",
    origin: "«&nbsp;Sensible&nbsp;» car elle est sensible à l'attraction de la tonique — à seulement un demi-ton en dessous du Ier degré.",
    attraction: "L'attraction la plus puissante de toute la gamme. La sensible monte quasi-obligatoirement vers la tonique. Son instabilité est le moteur principal de la résolution harmonique.",
    color: "#A32D2D", bg: "#FCEBEB",
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
    name: "Seconde mineure", semis: 1, nature: "mineure",
    example: "E → F",
    exampleNotes: ["E", 3, "F", 3],
    inverse: "Septième majeure", inverseSemis: 11, inverseNature: "majeure",
  },
  {
    name: "Seconde majeure", semis: 2, nature: "majeure",
    example: "C → D",
    exampleNotes: ["C", 3, "D", 3],
    inverse: "Septième mineure", inverseSemis: 10, inverseNature: "mineure",
  },
  {
    name: "Tierce mineure", semis: 3, nature: "mineure",
    example: "D → F",
    exampleNotes: ["D", 3, "F", 3],
    inverse: "Sixte majeure", inverseSemis: 9, inverseNature: "majeure",
  },
  {
    name: "Tierce majeure", semis: 4, nature: "majeure",
    example: "C → E",
    exampleNotes: ["C", 3, "E", 3],
    inverse: "Sixte mineure", inverseSemis: 8, inverseNature: "mineure",
  },
  {
    name: "Quarte juste", semis: 5, nature: "juste",
    example: "C → F",
    exampleNotes: ["C", 3, "F", 3],
    inverse: "Quinte juste", inverseSemis: 7, inverseNature: "juste",
  },
  {
    name: "Triton", semis: 6, nature: "augm. / dim.",
    example: "F → B",
    exampleNotes: ["F", 3, "B", 3],
    inverse: "Triton", inverseSemis: 6, inverseNature: "augm. / dim.",
  },
];

// ─── Quiz ─────────────────────────────────────────────────────────────────────
// Contenu reformulé — approche pédagogique Harmonia (non copiée)

const ALL_QUESTIONS = [
  // ── Théorie générale ──
  { q: "Quel moine a inventé les noms des notes au XIe siècle ?", opts: ["Rameau", "Guido d'Arezzo", "Bach", "Pythagore"], a: 1, fb: "Guido d'Arezzo a créé la solmisation en tirant les syllabes des premiers mots de chaque vers d'un hymne à Saint Jean-Baptiste." },
  { q: "Pourquoi le VIIe degré s'appelle-t-il « sensible » ?", opts: ["Car il est le plus aigu", "Car il est expressif", "Car il est à ½ ton de la tonique", "Car il est toujours bémol"], a: 2, fb: "La sensible est à ½ ton sous la tonique. Cette proximité crée une attraction vers le haut presque irrésistible." },
  { q: "Quelle est la formule T/½ d'une gamme majeure ?", opts: ["T-T-T-½-T-T-½", "T-½-T-T-½-T-T", "T-T-½-T-T-T-½", "½-T-T-T-T-½-T"], a: 2, fb: "T-T-½-T-T-T-½ est la formule universelle. Les deux demi-tons se trouvent entre les degrés III–IV et VII–I." },
  { q: "Que signifie « médiante » ?", opts: ["Mi-chemin entre tonique et dominante", "Note la plus haute", "Note sous la dominante", "Note la plus instable"], a: 0, fb: "La médiante (IIIe) est à mi-chemin entre I et V — à 4 demi-tons de chacune." },
  { q: "Combien de notes contient une gamme diatonique ?", opts: ["5", "6", "7", "8"], a: 2, fb: "La gamme diatonique contient 7 notes distinctes, plus la répétition de la tonique à l'octave." },
  { q: "Combien de demi-tons contient une octave ?", opts: ["6", "10", "12", "14"], a: 2, fb: "Une octave = 12 demi-tons. C'est la base du tempérament égal occidental." },
  { q: "Quelle consonance a permis de construire la gamme naturelle ?", opts: ["La tierce", "La quinte juste (3/2)", "La seconde", "Le triton"], a: 1, fb: "La quinte juste (rapport 3/2) est la seconde consonance fondamentale après l'octave. En enchaînant 6 quintes, on obtient les 7 notes de la gamme." },
  { q: "Quel est le rapport de fréquence de l'octave ?", opts: ["3/2", "4/3", "2/1", "5/4"], a: 2, fb: "L'octave = rapport 2/1. Une note à 220 Hz a son octave à 440 Hz." },
  { q: "Un ton correspond à combien de demi-tons ?", opts: ["1", "2", "3", "4"], a: 1, fb: "Un ton = 2 demi-tons. Ex : C–D = 1 ton = 2 demi-tons (C → C# → D)." },
  { q: "Quel est le plus petit intervalle du système occidental ?", opts: ["Le ton", "Le demi-ton", "La tierce mineure", "La seconde majeure"], a: 1, fb: "Le demi-ton est l'unité de base. Sur un piano, c'est la distance entre deux touches voisines." },
  { q: "À quelle fréquence est accordé le La standard (A4) ?", opts: ["220 Hz", "330 Hz", "440 Hz", "880 Hz"], a: 2, fb: "Le A4 = 440 Hz est la référence internationale d'accordage depuis 1939." },
  { q: "Combien d'octaves couvre un piano standard à 88 touches ?", opts: ["5", "7", "8", "10"], a: 1, fb: "Un piano à 88 touches couvre 7 octaves et une tierce mineure (de A0 à C8)." },
  // ── Degrés ──
  { q: "Quel degré s'appelle la « dominante » ?", opts: ["IIIe", "IVe", "Ve", "VIe"], a: 2, fb: "La dominante est le Ve degré — à la quinte juste au-dessus de la tonique." },
  { q: "Quel degré s'appelle la « sous-dominante » ?", opts: ["IIe", "IIIe", "IVe", "Ve"], a: 2, fb: "La sous-dominante (IVe) est une quinte en dessous de la dominante, ou une quarte au-dessus de la tonique." },
  { q: "Quel degré s'appelle la « sus-tonique » ?", opts: ["Ier", "IIe", "IIIe", "IVe"], a: 1, fb: "La sus-tonique (IIe) est la note immédiatement au-dessus de la tonique." },
  { q: "En C majeur, quelle note est la sensible ?", opts: ["A", "G", "B", "F"], a: 2, fb: "B est le VIIe degré de C majeur — à ½ ton sous C." },
  { q: "En C majeur, quelle note est la médiante ?", opts: ["D", "E", "F", "G"], a: 1, fb: "E est le IIIe degré de C majeur — à mi-chemin entre C (I) et G (V)." },
  { q: "En C majeur, quelle note est la dominante ?", opts: ["F", "G", "A", "B"], a: 1, fb: "G est le Ve degré de C majeur." },
  { q: "En C majeur, quelle note est la sous-dominante ?", opts: ["E", "F", "G", "A"], a: 1, fb: "F est le IVe degré de C majeur." },
  { q: "En G majeur, quelle note est la dominante ?", opts: ["C", "D", "E", "F#"], a: 1, fb: "G(I) A(II) B(III) C(IV) D(V). La dominante de G majeur est D." },
  { q: "En G majeur, quelle note est la sensible ?", opts: ["E", "F", "F#", "G#"], a: 2, fb: "G A B C D E F#(VII). La sensible de G majeur est F#." },
  { q: "En F majeur, quelle note est la sensible ?", opts: ["E", "G", "Bb", "D"], a: 0, fb: "F G A Bb C D E(VII). La sensible de F majeur est E." },
  { q: "En D majeur, quelle note est la sous-dominante ?", opts: ["G", "A", "B", "C#"], a: 0, fb: "D(I) E(II) F#(III) G(IV). La sous-dominante de D majeur est G." },
  { q: "En D majeur, quelle note est la sensible ?", opts: ["C", "C#", "D#", "B"], a: 1, fb: "D E F# G A B C#(VII). La sensible est C#, à ½ ton sous D." },
  { q: "Quel est le VIIe degré de G majeur ?", opts: ["F", "F#", "G#", "A"], a: 1, fb: "G(I) A(II) B(III) C(IV) D(V) E(VI) F#(VII). La sensible de G majeur est F#." },
  { q: "Quel est le IVe degré de G majeur ?", opts: ["C", "D", "E", "F#"], a: 0, fb: "G(I) A(II) B(III) C(IV). La sous-dominante de G majeur est C." },
  { q: "Quel est le Ve degré de F majeur ?", opts: ["C", "Bb", "D", "E"], a: 0, fb: "F(I) G(II) A(III) Bb(IV) C(V). La dominante de F majeur est C." },
  { q: "Quel est le IIIe degré de D majeur ?", opts: ["F", "F#", "G", "G#"], a: 1, fb: "D(I) E(II) F#(III). La médiante de D majeur est F#." },
  { q: "Quelle gamme a E comme sensible ?", opts: ["C majeur", "F majeur", "G majeur", "Bb majeur"], a: 1, fb: "En F majeur : F G A Bb C D E(VII). E est la sensible à ½ ton sous F." },
  { q: "Quelle gamme a B comme sensible ?", opts: ["C majeur", "G majeur", "F majeur", "D majeur"], a: 0, fb: "En C majeur : C D E F G A B(VII). B est la sensible à ½ ton sous C." },
  // ── Gammes ──
  { q: "La gamme de G majeur contient quel dièse ?", opts: ["C#", "F#", "G#", "B#"], a: 1, fb: "G A B C D E F# — le F# assure le ½ ton entre le VIe et VIIe degré." },
  { q: "La gamme de F majeur contient quelle altération ?", opts: ["F#", "Bb", "Eb", "C#"], a: 1, fb: "F G A Bb C D E — le Bb assure le ½ ton entre le IIIe (A) et IVe (Bb) degré." },
  { q: "La gamme de D majeur contient combien d'altérations ?", opts: ["0", "1", "2", "3"], a: 2, fb: "D E F# G A B C# — deux dièses : F# et C#." },
  { q: "Quelle gamme ne contient aucune altération ?", opts: ["G majeur", "F majeur", "C majeur", "D majeur"], a: 2, fb: "C majeur est la seule gamme majeure sans dièse ni bémol." },
  { q: "Combien de dièses contient A majeur ?", opts: ["1", "2", "3", "4"], a: 2, fb: "A B C# D E F# G# — trois dièses : C#, F#, G#." },
  { q: "Combien de bémols contient Bb majeur ?", opts: ["1", "2", "3", "4"], a: 1, fb: "Bb C D Eb F G A — deux bémols : Bb et Eb." },
  { q: "La gamme de E majeur contient combien de dièses ?", opts: ["2", "3", "4", "5"], a: 2, fb: "E F# G# A B C# D# — quatre dièses." },
  { q: "Quelle gamme contient un seul bémol ?", opts: ["Db majeur", "Bb majeur", "F majeur", "Eb majeur"], a: 2, fb: "F majeur contient un seul bémol : Bb." },
  { q: "Laquelle de ces notes n'appartient pas à G majeur ?", opts: ["F#", "C", "F naturel", "B"], a: 2, fb: "G majeur contient F# — F naturel n'en fait pas partie." },
  { q: "Laquelle de ces notes n'appartient pas à F majeur ?", opts: ["Bb", "A", "B naturel", "C"], a: 2, fb: "F majeur contient Bb — B naturel n'en fait pas partie." },
  { q: "Combien de notes C majeur et G majeur ont-ils en commun ?", opts: ["4", "5", "6", "7"], a: 2, fb: "C majeur et G majeur partagent 6 notes. Seul le F (vs F#) diffère." },
  // ── Intervalles ──
  { q: "Combien de demi-tons contient une tierce majeure ?", opts: ["2", "3", "4", "5"], a: 2, fb: "Tierce majeure = 4 demi-tons. Ex : C–E." },
  { q: "Combien de demi-tons contient une tierce mineure ?", opts: ["2", "3", "4", "5"], a: 1, fb: "Tierce mineure = 3 demi-tons. Ex : D–F." },
  { q: "Combien de demi-tons contient une quinte juste ?", opts: ["5", "6", "7", "8"], a: 2, fb: "Quinte juste = 7 demi-tons. Ex : C–G." },
  { q: "Combien de demi-tons contient une quarte juste ?", opts: ["4", "5", "6", "7"], a: 1, fb: "Quarte juste = 5 demi-tons. Ex : C–F." },
  { q: "Combien de demi-tons contient une seconde majeure ?", opts: ["1", "2", "3", "4"], a: 1, fb: "Seconde majeure = 2 demi-tons. Ex : C–D." },
  { q: "Combien de demi-tons contient une seconde mineure ?", opts: ["1", "2", "3", "4"], a: 0, fb: "Seconde mineure = 1 demi-ton. Ex : E–F." },
  { q: "Combien de demi-tons contient une sixte majeure ?", opts: ["7", "8", "9", "10"], a: 2, fb: "Sixte majeure = 9 demi-tons. Ex : C–A." },
  { q: "Combien de demi-tons contient une septième majeure ?", opts: ["9", "10", "11", "12"], a: 2, fb: "Septième majeure = 11 demi-tons. Ex : C–B." },
  { q: "Combien de demi-tons contient le triton ?", opts: ["5", "6", "7", "8"], a: 1, fb: "Triton = 6 demi-tons = exactement 3 tons. Ex : F–B en C majeur." },
  // ── Renversements ──
  { q: "L'inversion d'une tierce majeure donne :", opts: ["Sixte mineure", "Sixte majeure", "Septième mineure", "Quinte juste"], a: 0, fb: "3+6=9. La nature s'inverse : majeure → mineure. Tierce majeure → Sixte mineure." },
  { q: "L'inversion d'une quarte juste donne :", opts: ["Quinte diminuée", "Quinte juste", "Sixte mineure", "Tierce majeure"], a: 1, fb: "4+5=9. La nature juste reste juste. Quarte juste → Quinte juste." },
  { q: "L'inversion du triton est :", opts: ["Quinte juste", "Quarte juste", "Le triton lui-même", "Sixte mineure"], a: 2, fb: "Triton = 6 demi-tons. 12-6=6. Le triton est son propre renversement !" },
  { q: "L'inversion d'une tierce mineure donne :", opts: ["Sixte majeure", "Sixte mineure", "Septième majeure", "Quinte juste"], a: 0, fb: "3+6=9. La nature s'inverse : mineure → majeure. Tierce mineure → Sixte majeure." },
  { q: "La somme du nom d'un intervalle et de son renversement vaut toujours :", opts: ["7", "8", "9", "12"], a: 2, fb: "Toujours 9 : tierce(3)+sixte(6)=9 ; quarte(4)+quinte(5)=9 ; seconde(2)+septième(7)=9." },
  // ── Reconnaissance d'intervalles ──
  { q: "Quel intervalle sépare C et G ?", opts: ["Quarte juste", "Quinte juste", "Sixte majeure", "Tierce majeure"], a: 1, fb: "C D E F G = 5 degrés → quinte. 7 demi-tons → juste." },
  { q: "Quel intervalle sépare C et F ?", opts: ["Tierce majeure", "Quarte juste", "Quinte juste", "Sixte mineure"], a: 1, fb: "C D E F = 4 degrés → quarte. 5 demi-tons → juste." },
  { q: "Quel intervalle sépare C et E ?", opts: ["Seconde majeure", "Tierce mineure", "Tierce majeure", "Quarte juste"], a: 2, fb: "C D E = 3 degrés → tierce. 4 demi-tons → majeure." },
  { q: "Quel intervalle sépare E et F ?", opts: ["Seconde mineure", "Seconde majeure", "Tierce mineure", "Triton"], a: 0, fb: "E F = 2 degrés → seconde. 1 demi-ton → mineure. C'est l'un des deux demi-tons naturels." },
  { q: "Quel intervalle sépare F et B ?", opts: ["Quinte juste", "Quarte juste", "Triton", "Sixte mineure"], a: 2, fb: "F G A B = 4 degrés → quarte. Mais 6 demi-tons → quarte augmentée = triton." },
  { q: "Quel intervalle sépare B et C ?", opts: ["Seconde majeure", "Seconde mineure", "Tierce mineure", "Triton"], a: 1, fb: "B C = 2 degrés → seconde. 1 demi-ton → mineure. C'est l'autre demi-ton naturel." },
  // ── Structure de la gamme ──
  { q: "Entre quels degrés se trouvent les ½ tons de la gamme majeure ?", opts: ["I-II et V-VI", "III-IV et VII-VIII", "II-III et VI-VII", "IV-V et VI-VII"], a: 1, fb: "Les demi-tons se trouvent entre III-IV (E-F) et VII-VIII (B-C). Ce sont les seuls endroits sans touche noire entre deux touches blanches." },
  { q: "Entre E et F, il y a :", opts: ["1 ton", "½ ton", "1 ton et ½", "2 tons"], a: 1, fb: "E-F est l'un des deux demi-tons naturels du piano — deux touches blanches adjacentes sans touche noire entre elles." },
  { q: "Entre B et C, il y a :", opts: ["1 ton", "½ ton", "1 ton et ½", "2 tons"], a: 1, fb: "B-C est l'autre demi-ton naturel du piano." },
  // ── Notation ──
  { q: "Comment s'appelle C en notation française ?", opts: ["La", "Ré", "Do", "Sol"], a: 2, fb: "C = Do. La correspondance complète : C=Do, D=Ré, E=Mi, F=Fa, G=Sol, A=La, B=Si." },
  { q: "Comment s'appelle A en notation française ?", opts: ["Mi", "Fa", "Sol", "La"], a: 3, fb: "A = La. La fréquence standard du A est 440 Hz (A4)." },
  { q: "Comment s'appelle B en notation française ?", opts: ["La", "Si", "Do", "Ré"], a: 1, fb: "B = Si. En Allemagne, 'B' désigne Sib et 'H' désigne Si naturel !" },
  { q: "Comment s'appelle G en notation française ?", opts: ["Mi", "Fa", "Sol", "La"], a: 2, fb: "G = Sol. La gamme de Sol majeur se note G major en anglais." },
  // ── Altérations ──
  { q: "Qu'est-ce qu'un dièse (#) ?", opts: ["Baisse d'un ½ ton", "Hausse d'un ½ ton", "Hausse d'un ton", "Baisse d'un ton"], a: 1, fb: "Un dièse (#) élève la note d'un demi-ton. F# est un demi-ton au-dessus de F." },
  { q: "Qu'est-ce qu'un bémol (♭) ?", opts: ["Baisse d'un ½ ton", "Hausse d'un ½ ton", "Hausse d'un ton", "Baisse d'un ton"], a: 0, fb: "Un bémol (♭) abaisse la note d'un demi-ton. Bb est un demi-ton en dessous de B." },
  { q: "F# et Gb désignent-ils la même touche sur un piano ?", opts: ["Non, jamais", "Oui, en tempérament égal", "Seulement en G majeur", "Seulement en F majeur"], a: 1, fb: "En tempérament égal, F# = Gb : ce sont des enharmoniques — même touche, noms différents selon le contexte." },
  { q: "Comment appelle-t-on deux notes qui sonnent pareil mais s'écrivent différemment ?", opts: ["Synonymes", "Enharmoniques", "Homophones", "Chromatiques"], a: 1, fb: "Les enharmoniques sonnent pareil mais ont des noms différents. Ex : F# = Gb." },

  // ── Questions supplémentaires ──
  { q: "Pourquoi la gamme à 7 degrés s'est-elle imposée par rapport à d'autres gammes ?", opts: ["Elle est plus facile à jouer", "Elle était associée au chiffre 'parfait' 7 et jugée harmonieuse par les Grecs", "Elle est la seule possible acoustiquement", "Elle correspond aux 7 planètes connues"], a: 1, fb: "Les théoriciens grecs privilégiaient le chiffre 7 (nombre 'parfait'). La gamme à 7 sons, issue d'empilements de quintes, s'est imposée comme référence face aux gammes pentatonique (5) et chromatique (12)." },
  { q: "En C majeur, quel est le VIe degré ?", opts: ["D", "E", "F", "A"], a: 3, fb: "C(I) D(II) E(III) F(IV) G(V) A(VI). Le VIe degré de C majeur est A (La) — appelé sus-dominante." },
  { q: "Quel est le nom du IIe degré ?", opts: ["Tonique", "Sus-tonique", "Médiante", "Sensible"], a: 1, fb: "Le IIe degré s'appelle sus-tonique — il est juste au-dessus de la tonique (I)." },
  { q: "Quel est le nom du VIe degré ?", opts: ["Sus-dominante", "Médiante", "Sous-dominante", "Sensible"], a: 0, fb: "Le VIe degré s'appelle sus-dominante — il est juste au-dessus de la dominante (V)." },
  { q: "En A majeur, quelle est la sensible ?", opts: ["F#", "G", "G#", "B"], a: 2, fb: "A B C# D E F# G#(VII). La sensible de A majeur est G#, à ½ ton sous A." },
  { q: "En E majeur, quelle est la sous-dominante ?", opts: ["A", "B", "C#", "D#"], a: 0, fb: "E(I) F#(II) G#(III) A(IV). La sous-dominante de E majeur est A." },
  { q: "En Bb majeur, quelle est la dominante ?", opts: ["Eb", "F", "G", "Ab"], a: 1, fb: "Bb(I) C(II) D(III) Eb(IV) F(V). La dominante de Bb majeur est F." },
  { q: "Combien de demi-tons contient une sixte mineure ?", opts: ["7", "8", "9", "10"], a: 1, fb: "Sixte mineure = 8 demi-tons. Ex : E–C (ascendant). C'est l'inversion de la tierce majeure (4 + 8 = 12)." },
  { q: "Combien de demi-tons contient une septième mineure ?", opts: ["9", "10", "11", "12"], a: 1, fb: "Septième mineure = 10 demi-tons. Ex : C–Bb. C'est l'inversion de la seconde majeure (2 + 10 = 12)." },
  { q: "L'inversion d'une seconde majeure donne :", opts: ["Septième majeure", "Septième mineure", "Sixte majeure", "Sixte mineure"], a: 0, fb: "2 + 7 = 9. La nature s'inverse : majeure → mineure... attendez — seconde majeure → septième mineure (nature inversée) ? Non : seconde MAjeure → septième MIneure. Mais la règle est 2+7=9 et majeure↔mineure." },
  { q: "L'inversion d'une quinte juste donne :", opts: ["Quarte diminuée", "Quarte juste", "Tierce majeure", "Sixte mineure"], a: 1, fb: "5 + 4 = 9. La nature juste reste juste. Quinte juste → Quarte juste." },
  { q: "En B majeur, combien de dièses y a-t-il ?", opts: ["3", "4", "5", "6"], a: 2, fb: "B majeur a 5 dièses : F#, C#, G#, D#, A#. La gamme : B C# D# E F# G# A#." },
  { q: "Quel intervalle sépare C et B (notes adjacentes dans la gamme) ?", opts: ["Seconde mineure", "Seconde majeure", "Tierce mineure", "Triton"], a: 1, fb: "C→D = seconde majeure (2 demi-tons). La seconde diatonique entre C et D dans la gamme de C majeur est majeure." },
  { q: "L'intervalle C–G# est :", opts: ["Quinte juste", "Quinte diminuée", "Quinte augmentée", "Sixte mineure"], a: 2, fb: "C–G = quinte juste (7 demi-tons). C–G# = 8 demi-tons → quinte augmentée (+1 demi-ton par rapport à la juste)." },
  { q: "L'intervalle C–Gb est :", opts: ["Quinte juste", "Quinte diminuée", "Quarte augmentée", "Triton"], a: 1, fb: "C–G = quinte juste (7 demi-tons). C–Gb = 6 demi-tons → quinte diminuée (-1 demi-ton). C'est aussi un triton !" },
  { q: "Quel est le terme exact pour un intervalle augmenté d'un demi-ton supplémentaire ?", opts: ["Doublement augmenté", "Sur-augmenté", "Excédentaire", "Ils n'existent pas"], a: 0, fb: "Un intervalle peut être doublement augmenté (deux demi-tons de plus que juste/majeur). Très rare en pratique mais théoriquement valide." },
  { q: "La gamme pentatonique contient combien de notes ?", opts: ["4", "5", "6", "7"], a: 1, fb: "La gamme pentatonique (du grec penta = 5) contient 5 notes. Elle précède historiquement la gamme à 7 sons et reste très utilisée en jazz, blues et musiques du monde." },
  { q: "Quel est le rapport de fréquence d'une quinte juste ?", opts: ["2/1", "3/2", "4/3", "5/4"], a: 1, fb: "La quinte juste = rapport 3/2. C'est la seconde consonance fondamentale après l'octave (2/1). Ces rapports simples sont à la base de la gamme pythagoricienne." },
  { q: "En Ab majeur, combien de bémols y a-t-il ?", opts: ["2", "3", "4", "5"], a: 2, fb: "Ab majeur a 4 bémols : Bb, Eb, Ab, Db. La gamme : Ab Bb C Db Eb F G." },
  { q: "Quel intervalle est formé entre le IVe et le VIIe degré d'une gamme majeure ?", opts: ["Quinte juste", "Quarte augmentée (triton)", "Tierce majeure", "Sixte mineure"], a: 1, fb: "En C majeur : F(IV) et B(VII). F–B = 6 demi-tons = quarte augmentée = triton. C'est le triton fonctionnel qui génère la tension harmonique." },
];

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const QUIZ_COUNT = 10;

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

export default function Cours1() {
  const i18n = useCoursI18n("cours1");
  const [activeSection,  setActiveSection]  = useState("origines");
  const [activeGamme,    setActiveGamme]    = useState(0);
  const [activeDeg,      setActiveDeg]      = useState<number | null>(null);
  const [activeInterval, setActiveInterval] = useState<number | null>(null);
  const [quizQuestions,  setQuizQuestions]  = useState(() => shuffleArray(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [quizIdx,        setQuizIdx]        = useState(0);
  const [quizScore,      setQuizScore]      = useState(0);
  const [quizAnswered,   setQuizAnswered]   = useState(false);
  const [quizDone,       setQuizDone]       = useState(false);
  const [selectedOpt,    setSelectedOpt]    = useState<number | null>(null);

  const pianoRef = useRef<PianoPlayerRef>(null);

  const playInterval = useCallback((iv: IntervalDef) => {
    const [n1, o1, n2, o2] = iv.exampleNotes;
    pianoRef.current?.playNote(n1, o1, { duration: 1.2 });
    setTimeout(() => pianoRef.current?.playNote(n2, o2, { duration: 1.5 }), 600);
  }, []);

  const playInverse = useCallback((iv: IntervalDef) => {
    const [n1, o1, n2, o2] = iv.exampleNotes;
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
    if (quizIdx + 1 >= QUIZ_COUNT) { setQuizDone(true); }
    else { setQuizIdx((i) => i + 1); setQuizAnswered(false); setSelectedOpt(null); }
  };

  const resetQuiz = () => {
    setQuizQuestions(shuffleArray(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
    setQuizIdx(0); setQuizScore(0);
    setQuizAnswered(false); setSelectedOpt(null); setQuizDone(false);
  };

  const g = GAMMES[activeGamme];

  return (
    <div style={S.wrap}>
      {/* Piano caché — audio uniquement */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={2} startOctave={3} showLabels={false} />
      </div>

      {/* Header */}
      <div style={S.header}>
        <span style={S.badge}>{i18n.badge}</span>
        <h1 style={S.h1}>{i18n.title}</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>
      import MaitreCard from "@/components/MaitreCard";

      <MaitreCard
         composer="Pythagore"
         period="580–495 av. J.-C."
         emoji="⚒️"
          concept="Gammes & Intervalles"
         anecdote="En passant devant une forge, Pythagore remarque que certains marteaux produisent des sons harmonieux ensemble. En mesurant leur poids, il découvre que l'harmonie est une proportion mathématique : un marteau deux fois plus lourd produit une octave, un et demi produit une quinte. La musique n'est pas une affaire de goût — c'est une affaire de physique."
         lesson="L'intervalle est la cellule de base de la musique. Une question de physique acoustique avant d'être une question d'esthétique."
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
          SECTION 1 : ORIGINES
      ══════════════════════════════════════════════════════════════ */}
      {activeSection === "origines" && (
        <div>
          <h2 style={S.stitle}>D'où viennent ces 7 notes ?</h2>
          <p style={S.sbody}>
            Les premières théories musicales occidentales, notamment celles des Grecs avec Pythagore, cherchaient à
            fonder la gamme sur des rapports de fréquences simples — des sons qui <em>s'accordent</em> naturellement à l'oreille.
          </p>
          <p style={S.sbody}>
            Le point de départ est l'<strong>octave</strong> : une note et son double en fréquence sonnent identiques
            à des hauteurs différentes. La seconde consonance fondamentale est la <strong>quinte juste</strong> (rapport 3/2).
            En enchaînant six quintes à partir de Fa :
          </p>

          <div style={{ background: "#f8f8f8", borderRadius: 10, padding: "14px 18px", margin: "12px 0", fontFamily: "monospace", fontSize: 15, letterSpacing: 2, color: "#333", textAlign: "center" }}>
            F → C → G → D → A → E → B
          </div>

          <p style={S.sbody}>
            En ramenant chaque note dans la même octave, on obtient exactement <strong>7 hauteurs distinctes</strong>.
            Réordonnées par hauteur croissante, elles forment la gamme diatonique naturelle.
          </p>

          <div style={S.infoBox}>
            En C majeur : <strong>C – D – E – F – G – A – B</strong>.<br />
            La gamme la plus simple : aucune altération, toutes les touches blanches du piano.
          </div>

          <h3 style={{ fontSize: 15, fontWeight: 500, color: "#111", margin: "1.5rem 0 .5rem" }}>
            L'origine des noms de notes
          </h3>
          <p style={S.sbody}>
            Au <strong>XIe siècle</strong>, le moine bénédictin <strong>Guido d'Arezzo</strong> cherche un
            moyen d'enseigner le chant plus efficacement. Il remarque que les premières syllabes de chaque
            vers d'un hymne à Saint Jean-Baptiste correspondent aux notes successives de la gamme :
          </p>

          <div style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, overflow: "hidden", margin: "12px 0" }}>
            {[
              { syl: "Ut", verse: "Ut queant laxis",   note: "Do / C (Ier degré)"  },
              { syl: "Ré", verse: "Resonare fibris",   note: "Ré / D (IIe degré)"  },
              { syl: "Mi", verse: "Mira gestorum",     note: "Mi / E (IIIe degré)" },
              { syl: "Fa", verse: "Famuli tuorum",     note: "Fa / F (IVe degré)"  },
              { syl: "Sol", verse: "Solve polluti",    note: "Sol / G (Ve degré)"  },
              { syl: "La", verse: "Labii reatum",      note: "La / A (VIe degré)"  },
            ].map((row, i) => (
              <div key={row.syl} style={{ display: "flex", alignItems: "center", gap: 16, padding: "8px 14px", background: i % 2 === 0 ? "#fff" : "#fafafa", borderBottom: i < 5 ? "0.5px solid #f0f0f0" : "none" }}>
                <span style={{ fontWeight: 700, fontSize: 15, color: "#185FA5", minWidth: 32 }}>{row.syl}</span>
                <span style={{ fontSize: 13, color: "#555", flex: 1, fontStyle: "italic" }}>{row.verse}…</span>
                <span style={{ fontSize: 12, color: "#888" }}>{row.note}</span>
              </div>
            ))}
          </div>

          <p style={S.sbody}>
            Le <strong>Si / B</strong> fut ajouté plus tard (initiales de <em>Sancte Ioannes</em>).
            Au <strong>XVIe siècle</strong>, <em>Ut</em> devint <strong>Do</strong> — syllabe plus ouverte
            et plus chantable.
          </p>

          <div style={S.warnBox}>
            <strong>Deux systèmes coexistent :</strong> le système latin (Do Ré Mi Fa Sol La Si) utilisé en France,
            Italie et Espagne, et le système anglais (C D E F G A B) utilisé dans le monde entier en jazz,
            pop et harmonie moderne. <strong>Harmonia utilise la notation anglaise</strong> comme standard universel.
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 : LES DEGRÉS
      ══════════════════════════════════════════════════════════════ */}
      {activeSection === "degres" && (
        <div>
          <h2 style={S.stitle}>Les 7 degrés : chaque note a un rôle</h2>
          <p style={S.sbody}>
            Dans une gamme, chaque note occupe une <strong>position</strong> appelée degré.
            C'est une notion <em>relative</em> : F est le IVe degré en C majeur, mais le Ier degré en F majeur.
            Les noms des degrés traduisent chacun une réalité acoustique précise dans le système tonal.
          </p>
          <p style={{ fontSize: 13, color: "#888", marginBottom: 12 }}>
            Cliquez sur un degré pour découvrir l'origine de son nom et ses attractions.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 6, marginBottom: 12 }}>
            {DEGREES.map((d, i) => (
              <div
                key={d.num}
                onClick={() => setActiveDeg(activeDeg === i ? null : i)}
                style={{
                  border: `0.5px solid ${activeDeg === i ? d.color : "#e5e5e5"}`,
                  borderRadius: 8, padding: "8px 4px", textAlign: "center",
                  cursor: "pointer", background: activeDeg === i ? d.bg : "#fff", transition: "all .15s",
                }}
              >
                <div style={{ fontSize: 11, color: "#999", fontWeight: 500 }}>{d.num}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#111", margin: "2px 0" }}>{d.note}</div>
                <div style={{ fontSize: 9, color: d.color, marginTop: 2, lineHeight: 1.3 }}>{d.name}</div>
              </div>
            ))}
          </div>

          {activeDeg !== null && (
            <div style={{ border: `0.5px solid ${DEGREES[activeDeg].color}`, borderRadius: 10, padding: "14px 18px", background: DEGREES[activeDeg].bg, marginBottom: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <span style={{ fontSize: 22, fontWeight: 700, color: DEGREES[activeDeg].color }}>{DEGREES[activeDeg].num}</span>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 500, color: "#111" }}>{DEGREES[activeDeg].name}</div>
                  <div style={{ fontSize: 13, color: "#666" }}>Note en C majeur : <strong>{DEGREES[activeDeg].note}</strong></div>
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
                onClick={() => pianoRef.current?.playNote(DEGREES[activeDeg].note, 4, { duration: 2 })}
                style={{ marginTop: 10, fontSize: 12, padding: "5px 14px", border: `0.5px solid ${DEGREES[activeDeg].color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: DEGREES[activeDeg].color }}
              >
                ▶ Écouter {DEGREES[activeDeg].note}
              </button>
            </div>
          )}

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {["N°", "Nom", "Note (C maj.)", "Rôle"].map((h) => (
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
                      {d.num === "I"   && "Centre de gravité"}
                      {d.num === "II"  && "Au-dessus de la tonique"}
                      {d.num === "III" && "À mi-chemin (I↔V)"}
                      {d.num === "IV"  && "Sous la dominante"}
                      {d.num === "V"   && "Domine la gamme"}
                      {d.num === "VI"  && "Au-dessus de la dominante"}
                      {d.num === "VII" && "Sensible à la tonique"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.infoBox}>
            <strong>Attractions fondamentales :</strong> La paire la plus forte est <strong>B → C</strong>
            (VIIe vers Ier) — un seul demi-ton les sépare. La seconde paire est <strong>F → E</strong>
            (IVe vers IIIe), particulièrement active lors de la résolution de la dominante.
            Ces deux attractions sont le moteur de toute l'harmonie tonale.
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
            entre d'autres seulement un <strong>demi-ton</strong>. Ce schéma précis est ce qui donne à la gamme majeure
            sa couleur caractéristique — il est identique quelle que soit la note de départ.
          </p>

          <div style={S.infoBox}>
            Formule universelle de la gamme majeure : <strong>T – T – ½ – T – T – T – ½</strong>.<br />
            Les deux demi-tons se situent toujours entre les degrés <strong>III–IV</strong> et <strong>VII–I</strong>.
          </div>

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

          <div style={{ display: "flex", alignItems: "center", overflowX: "auto", gap: 0, margin: "12px 0", paddingBottom: 4 }}>
            {[...g.notes, g.root].map((note, i) => {
              const isAccidental = (g.accidentals as string[]).includes(note);
              const displayNote = i === g.notes.length ? `${g.root} (VIII)` : note;
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
              {g.name} contient {g.accidentals.length === 1 ? "une altération" : "deux altérations"} :{" "}
              <strong>{g.accidentalDisplay.join(", ")}</strong>. Sans elle, la formule T-T-½-T-T-T-½ ne serait pas respectée.
            </div>
          )}

          <div style={{ margin: "16px 0 8px" }}>
            <PianoPlayer
              dotKeys={g.dotKeys}
              blackKeyLabels={g.blackLabels as any}
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
            (combien de degrés séparent les deux notes, extrêmes compris) et sa <strong>nature</strong>
            (le nombre exact de demi-tons, qui détermine la couleur sonore).
          </p>

          <div style={S.infoBox}>
            <strong>Loi des renversements :</strong> inverser un intervalle (faire monter la note grave d'une octave)
            donne toujours un intervalle dont le nom s'additionne à <strong>9</strong> avec l'original
            (ex : tierce 3 + sixte 6 = 9). La nature s'inverse : majeure ↔ mineure, juste ↔ juste.
          </div>

          <p style={{ fontSize: 13, color: "#888", marginBottom: 12 }}>
            Cliquez sur un intervalle pour l'entendre, puis son renversement.
          </p>

          {INTERVALS.map((iv, i) => (
            <div
              key={iv.name}
              style={{
                border: `0.5px solid ${activeInterval === i ? "#185FA5" : "#e5e5e5"}`,
                borderRadius: 10, marginBottom: 8, overflow: "hidden",
                cursor: "pointer", background: activeInterval === i ? "#f0f6ff" : "#fff",
              }}
              onClick={() => setActiveInterval(activeInterval === i ? null : i)}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 8, padding: "10px 14px", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#111" }}>{iv.name}</div>
                  <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>{iv.semis} demi-ton{iv.semis > 1 ? "s" : ""} · {iv.nature}</div>
                  <div style={{ fontSize: 11, color: "#185FA5", marginTop: 2 }}>{iv.example}</div>
                </div>
                <div style={{ fontSize: 16, color: "#ccc", userSelect: "none" }}>⇄</div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#111" }}>{iv.inverse}</div>
                  <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>{iv.inverseSemis} demi-tons · {iv.inverseNature}</div>
                  <div style={{ fontSize: 11, color: "#185FA5", marginTop: 2 }}>{iv.exampleNotes[2]} → {iv.exampleNotes[0]}</div>
                </div>
              </div>

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

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 8px", color: "#111" }}>
            Tableau complet des intervalles
          </h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {["Intervalle", "Nature", "Demi-tons", "Exemple (sur F)"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 10px", fontWeight: 500, color: "#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Seconde",   "mineure / majeure",   "1 / 2",     "F–G♭ / F–G"],
                  ["Tierce",    "mineure / majeure",   "3 / 4",     "F–A♭ / F–A"],
                  ["Quarte",    "juste / augmentée",   "5 / 6",     "F–B♭ / F–B"],
                  ["Quinte",    "dim. / juste / aug.", "6 / 7 / 8", "F–C♭ / F–C / F–C#"],
                  ["Sixte",     "mineure / majeure",   "8 / 9",     "F–D♭ / F–D"],
                  ["Septième",  "mineure / majeure",   "10 / 11",   "F–E♭ / F–E"],
                  ["Octave",    "juste",               "12",        "F–F"],
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
          <h2 style={S.stitle}>{i18n.training}</h2>

          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 9 ? "🎹" : quizScore >= 7 ? "👍" : "💪"}
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
              <div style={{ fontSize: 15, color: "#111", lineHeight: 1.6, marginBottom: 16, fontWeight: 500 }}>
                {quizQuestions[quizIdx].q}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {quizQuestions[quizIdx].opts.map((opt, i) => {
                  const isCorrect  = i === quizQuestions[quizIdx].a;
                  const isSelected = selectedOpt === i;
                  let bg = "#fff", border = "#e5e5e5", color = "#333";
                  if (quizAnswered) {
                    if (isCorrect)        { bg = "#E1F5EE"; border = "#0F6E56"; color = "#085041"; }
                    else if (isSelected)  { bg = "#FCEBEB"; border = "#A32D2D"; color = "#501313"; }
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

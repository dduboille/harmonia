/**
 * src/lib/orthographe-tonale.ts
 * Orthographe enharmonique d'une note SELON L'ARMURE.
 *
 * Une classe de hauteur ne suffit pas à nommer une note : la hauteur 3 s'écrit
 * « Mi♭ » en mi♭ mineur (6 bémols) et « Ré♯ » en mi majeur (4 dièses). Les tables
 * chromatiques figées du projet (`NOTE_FR`, toute en dièses) ignorent cette
 * distinction et produisent « Ré♯ mineur » là où l'élève attend « Mi♭ mineur ».
 *
 * Le calcul passe par le CYCLE DES QUINTES, seul endroit où chaque orthographe a
 * une position unique : … Do♭(-7) Sol♭(-6) Ré♭(-5) La♭(-4) Mi♭(-3) Si♭(-2) Fa(-1)
 * Do(0) Sol(1) Ré(2) La(3) Mi(4) Si(5) Fa♯(6) Do♯(7) … Les sept notes d'une armure
 * `fifths` occupent les positions `fifths-1` à `fifths+5` — pour le majeur comme
 * pour son relatif mineur, qui partagent la même armure.
 *
 * On choisit donc, parmi les orthographes possibles d'une hauteur, celle dont la
 * position est la PLUS PROCHE du centre de l'armure. C'est ce critère, et non
 * « le moins d'altérations », qui donne les bonnes réponses : en mi♭ mineur le
 * VI s'écrit Do♭ et non Si, bien que Si n'ait aucune altération.
 */

/** Les lettres dans l'ordre du cycle des quintes, en partant de Fa (position -1). */
const LETTRES_FR = ["Fa", "Do", "Sol", "Ré", "La", "Mi", "Si"];
const LETTRES_EN = ["F", "C", "G", "D", "A", "E", "B"];

/** Position sur le cycle des quintes → { lettre, altération }. Do = 0, Sol = 1, Fa = -1. */
function decomposer(position: number): { indice: number; alteration: number } {
  return {
    indice: (((position + 1) % 7) + 7) % 7,
    alteration: Math.floor((position + 1) / 7),
  };
}

/** Classe de hauteur (0-11) d'une position du cycle des quintes. */
function hauteurDe(position: number): number {
  return (((7 * position) % 12) + 12) % 12;
}

function suffixe(alteration: number, symboles: { diese: string; bemol: string }): string {
  if (alteration === 0) return "";
  const s = alteration > 0 ? symboles.diese : symboles.bemol;
  return s.repeat(Math.abs(alteration));
}

/**
 * Choisit la position du cycle des quintes qui orthographie `pc` dans l'armure
 * `fifths`. `forcer` permet d'imposer un côté quand le contexte le sait mieux que
 * l'armure — typiquement un degré chiffré « ♭II » ou « ♯iv ».
 */
function meilleurePosition(
  pc: number,
  fifths: number,
  forcer?: "bemol" | "diese",
): number {
  // Centre de l'armure : les sept notes couvrent fifths-1 … fifths+5.
  const centre = fifths + 2;
  let meilleure = 0;
  let meilleurScore = Infinity;

  // Une fenêtre de ±14 positions couvre largement du double bémol au double dièse.
  for (let p = centre - 14; p <= centre + 14; p++) {
    if (hauteurDe(p) !== pc) continue;
    const { alteration } = decomposer(p);
    if (Math.abs(alteration) > 2) continue;              // pas de triple altération
    if (forcer === "bemol" && alteration > 0) continue;
    if (forcer === "diese" && alteration < 0) continue;

    const distance = Math.abs(p - centre);
    // Proximité de l'armure ET simplicité de l'altération se pèsent l'une contre
    // l'autre ; ni l'une ni l'autre ne l'emporte seule.
    //
    // Trop de poids à la distance et le La bécarre de mi♭ mineur (le ♯4 des
    // sixtes augmentées) devient un « Si♭♭ », plus proche de l'armure mais
    // illisible. Trop de poids à l'altération et le VI de cette même tonalité
    // devient un « Si », sans altération mais qu'on n'écrit jamais là. Un double
    // dièse ou bémol coûte donc deux crans de distance : assez pour être écarté
    // quand une note naturelle existe à distance comparable, pas assez pour
    // renoncer à un Do♭ franchement plus proche qu'un Si.
    const score =
      (distance + 2 * Math.abs(alteration)) * 10 +
      // À égalité stricte, on suit le côté de l'armure.
      (fifths <= 0 ? (alteration > 0 ? 1 : 0) : alteration < 0 ? 1 : 0);

    if (score < meilleurScore) {
      meilleurScore = score;
      meilleure = p;
    }
  }
  return meilleure;
}

/**
 * Nom français d'une hauteur dans une armure : `nomNoteFr(3, -6)` → « Mib ».
 *
 * Altérations en ASCII (`#`, `b`), comme `NOTE_FR` et `NOTE_FR_BEMOL` dont cette
 * fonction prend la place : les libellés d'accords du projet s'écrivent « Mib »
 * et « Fa# », pas « Mi♭ » ni « Fa♯».
 */
export function nomNoteFr(
  pc: number,
  fifths: number,
  forcer?: "bemol" | "diese",
): string {
  const { indice, alteration } = decomposer(meilleurePosition(pc, fifths, forcer));
  return LETTRES_FR[indice] + suffixe(alteration, { diese: "#", bemol: "b" });
}

/** Variante lettres anglaises : `nomNoteEn(3, -6)` → « Eb ». */
export function nomNoteEn(
  pc: number,
  fifths: number,
  forcer?: "bemol" | "diese",
): string {
  const { indice, alteration } = decomposer(meilleurePosition(pc, fifths, forcer));
  return LETTRES_EN[indice] + suffixe(alteration, { diese: "#", bemol: "b" });
}

/** Classe de hauteur de chaque lettre, pour retrouver l'octave d'une orthographe. */
const PC_LETTRE_EN: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

/**
 * Nom ANGLAIS et octave d'une note MIDI, orthographiés dans l'armure.
 *
 * L'octave ne peut pas se déduire de la seule hauteur : Si3 et Do♭4 sont la même
 * touche, mais la lettre « Do » appartient à l'octave SUIVANTE. Calculer
 * `Math.floor(midi / 12) - 1` puis coller un « Cb » dessus produit un Do♭3, soit
 * un demi-ton sous Do3 — une septième plus bas que voulu. On déduit donc
 * l'octave de l'orthographe retenue, de sorte que le nom rendu se relise
 * toujours à la hauteur d'origine.
 */
export function nomEtOctaveEn(
  midi: number,
  fifths: number,
  forcer?: "bemol" | "diese",
): { name: string; octave: number } {
  const position = meilleurePosition(((midi % 12) + 12) % 12, fifths, forcer);
  const { indice, alteration } = decomposer(position);
  const lettre = LETTRES_EN[indice];
  // (octave + 1) * 12 + pcLettre + altération === midi
  const octave = (midi - PC_LETTRE_EN[lettre] - alteration) / 12 - 1;
  return { name: lettre + suffixe(alteration, { diese: "#", bemol: "b" }), octave };
}

/**
 * Armure d'une tonalité donnée par sa tonique et son mode, quand on ne dispose
 * que d'une classe de hauteur. AMBIGU par nature — la hauteur 6 est Fa♯ majeur
 * (+6) ou Sol♭ majeur (-6) — donc on retient l'armure la plus simple, celle qui
 * a le moins d'altérations. À n'utiliser QUE faute de mieux : partout où
 * l'armure réelle est disponible (`ParsedScore.fifths`, `Piece.armure`), c'est
 * elle qui fait foi.
 */
export function armurePresumee(tonicPc: number, mode: "major" | "minor"): number {
  // Armure du majeur relatif : en mineur, la tonique du relatif est +3 demi-tons.
  const pcMajeur = mode === "major" ? tonicPc : (tonicPc + 3) % 12;
  let meilleure = 0;
  let meilleurAbs = Infinity;
  for (let f = -7; f <= 7; f++) {
    if (hauteurDe(f) !== pcMajeur) continue;
    if (Math.abs(f) < meilleurAbs) {
      meilleurAbs = Math.abs(f);
      meilleure = f;
    }
  }
  return meilleure;
}

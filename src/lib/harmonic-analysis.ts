/**
 * lib/harmonic-analysis.ts
 * Harmonia — Moteur d'analyse harmonique (fonctions pures, sans XML ni HTTP).
 */

export type Fonction = "T" | "SD" | "D" | "?";

export type Categorie =
  | "diatonique"
  | "dominante_secondaire"
  | "sensible_degre"
  | "emprunt"
  | "napolitain"
  | "chromatique";

export interface Chord {
  rootPc: number;
  rootFr: string;
  quality: string;
  qualityName: string;
  pcs: number[];
}

export interface ChordResult {
  rootPc: number;
  rootFr: string;
  quality: string;
  /**
   * Les classes de hauteurs de l'accord. Conservées car l'analyse d'un accord
   * isolé peut devoir être RÉVISÉE au vu de la séquence : la cible d'une 7e
   * diminuée n'est tranchée que par sa résolution (cf. `annotateResolutions`).
   */
  pcs: number[];
  degree: string;
  degreeNum: number;
  fonction: Fonction;
  categorie: Categorie;
  cible?: string;
  resolue?: boolean;
  beat?: number;
}

// ── Constantes ────────────────────────────────────────────────────────────────

export const NOTE_FR: Record<number, string> = {
  0: "Do", 1: "Do#", 2: "Ré", 3: "Ré#", 4: "Mi",
  5: "Fa", 6: "Fa#", 7: "Sol", 8: "Sol#", 9: "La", 10: "La#", 11: "Si",
};

/** Raccourci lisible pour les tests. */
export const PC = { Do: 0, Ré: 2, Mi: 4, Fa: 5, Sol: 7, La: 9, Si: 11 } as const;

export const CHORD_PATTERNS: Array<{ quality: string; name: string; intervals: number[] }> = [
  { quality: "Maj7", name: "maj7", intervals: [0, 4, 7, 11] },
  { quality: "7",    name: "dom7", intervals: [0, 4, 7, 10] },
  { quality: "m7",   name: "min7", intervals: [0, 3, 7, 10] },
  { quality: "°7",   name: "dim7", intervals: [0, 3, 6, 9]  },
  { quality: "ø7",   name: "m7b5", intervals: [0, 3, 6, 10] },
  { quality: "aug",  name: "aug",  intervals: [0, 4, 8]     },
  { quality: "",     name: "maj",  intervals: [0, 4, 7]     },
  { quality: "m",    name: "min",  intervals: [0, 3, 7]     },
  { quality: "°",    name: "dim",  intervals: [0, 3, 6]     },
  { quality: "sus4", name: "sus4", intervals: [0, 5, 7]     },
  { quality: "sus2", name: "sus2", intervals: [0, 2, 7]     },
];

/** Intervalles des 7 degrés (pour la numérotation romaine). */
const MAJOR_DEGREES = [0, 2, 4, 5, 7, 9, 11];
const MINOR_DEGREES = [0, 2, 3, 5, 7, 8, 10];

export const ROMANS = ["I", "II", "III", "IV", "V", "VI", "VII"];

// ── Identification d'accord ───────────────────────────────────────────────────

export function identifyChord(pcs: number[]): Chord | null {
  const unique = [...new Set(pcs.map((p) => ((p % 12) + 12) % 12))];
  if (unique.length < 2) return null;

  for (const pattern of CHORD_PATTERNS) {
    if (pattern.intervals.length > unique.length + 1) continue;
    for (const root of unique) {
      const norm = unique.map((p) => (p - root + 12) % 12);
      if (pattern.intervals.every((iv) => norm.includes(iv))) {
        return {
          rootPc: root,
          rootFr: NOTE_FR[root] ?? "?",
          quality: pattern.quality,
          qualityName: pattern.name,
          pcs: unique,
        };
      }
    }
  }
  return null;
}

// ── Helpers tonalité ──────────────────────────────────────────────────────────

/**
 * Ensemble des hauteurs considérées diatoniques.
 * En MINEUR, on inclut la 7e ÉLEVÉE (11) : sans cela, l'accord de V (Sol-Si♮-Ré
 * en Do mineur) serait déclaré non diatonique — régression inacceptable.
 */
export function diatonicSet(tonicPc: number, mode: "major" | "minor"): Set<number> {
  const base = mode === "major" ? MAJOR_DEGREES : [...MINOR_DEGREES, 11];
  return new Set(base.map((s) => (tonicPc + s) % 12));
}

/** Numéro de degré (1-7) de la fondamentale, ou null si chromatique. */
export function degreeOfRoot(
  rootPc: number, tonicPc: number, mode: "major" | "minor",
): number | null {
  const iv = (rootPc - tonicPc + 12) % 12;
  const degrees = mode === "major" ? MAJOR_DEGREES : MINOR_DEGREES;
  let idx = degrees.indexOf(iv);
  if (idx === -1 && mode === "minor" && iv === 11) idx = 6; // sensible (7e élevée)
  return idx === -1 ? null : idx + 1;
}

/** Hauteur (pc) d'un degré donné. */
export function pcOfDegree(num: number, tonicPc: number, mode: "major" | "minor"): number {
  const degrees = mode === "major" ? MAJOR_DEGREES : MINOR_DEGREES;
  return (tonicPc + degrees[num - 1]) % 12;
}

export function fonctionOfDegree(num: number): Fonction {
  if ([1, 3, 6].includes(num)) return "T";
  if ([2, 4].includes(num)) return "SD";
  if ([5, 7].includes(num)) return "D";
  return "?";
}

/**
 * Cibles tonicisables : ni la tonique, ni un degré diminué.
 *
 * L'ordre est celui de la PRIORITÉ de tonicisation, et non celui de la gamme :
 * il sert d'arbitre en repli quand plusieurs cibles sont possibles (cas de la
 * 7e diminuée, symétrique — cf. `analyzeChord`, règle 3). La dominante est de
 * loin la cible la plus fréquente, viennent ensuite les degrés du relatif.
 * Quand la séquence fournit une résolution, c'est elle qui tranche
 * (cf. `annotateResolutions`) — cette priorité ne s'applique qu'à défaut.
 */
export function tonicizableTargets(mode: "major" | "minor"): Array<{ num: number; label: string }> {
  return mode === "major"
    ? [{ num: 5, label: "V" }, { num: 2, label: "ii" }, { num: 6, label: "vi" },
       { num: 4, label: "IV" }, { num: 3, label: "iii" }]
    : [{ num: 5, label: "V" }, { num: 4, label: "iv" }, { num: 6, label: "VI" },
       { num: 3, label: "III" }, { num: 7, label: "VII" }];
}

/**
 * Toutes les lectures possibles d'un accord de sensible : couples
 * (fondamentale candidate, cible visée), rendus dans l'ordre de priorité des
 * cibles.
 *
 * La 7e diminuée est SYMÉTRIQUE (empilement de tierces mineures) : ses quatre
 * notes peuvent chacune être la fondamentale, et donc viser quatre cibles
 * différentes. `identifyChord` en choisit une arbitrairement (la première
 * rencontrée dans l'ordre du MusicXML) : on ne peut pas s'y fier.
 * Pour les autres qualités (° et ø7), la fondamentale est univoque.
 */
export function leadingCandidates(
  pcs: number[], quality: string, rootPc: number,
  tonicPc: number, mode: "major" | "minor",
): Array<{ root: number; target: { num: number; label: string } }> {
  const candidats = quality === "°7" ? pcs : [rootPc];
  const out: Array<{ root: number; target: { num: number; label: string } }> = [];

  // Boucle externe sur les CIBLES (par priorité) : le résultat ne dépend donc
  // pas de l'ordre des notes de l'accord.
  for (const target of tonicizableTargets(mode)) {
    const targetPc = pcOfDegree(target.num, tonicPc, mode);
    for (const root of candidats) {
      if (root === (targetPc + 11) % 12) out.push({ root, target }); // demi-ton sous la cible
    }
  }
  return out;
}

const DOMINANT_QUALITIES = new Set(["", "7"]);

const LEADING_QUALITIES = new Set(["°", "°7", "ø7"]);

/**
 * Cibles tonicisables situées une quinte juste SOUS la fondamentale : lectures
 * « dominante secondaire » plausibles de l'accord, par ordre de priorité.
 */
export function dominantCandidates(
  rootPc: number, tonicPc: number, mode: "major" | "minor",
): Array<{ num: number; label: string }> {
  return tonicizableTargets(mode).filter(
    (t) => rootPc === (pcOfDegree(t.num, tonicPc, mode) + 7) % 12,
  );
}

function leadingPrefix(quality: string): string {
  if (quality === "°7") return "vii°7";
  if (quality === "ø7") return "viiø7";
  return "vii°";
}

/**
 * Ensemble diatonique du mode HOMONYME (pour détecter les emprunts).
 *
 * ATTENTION : on construit cet ensemble sur les degrés BRUTS, et non via
 * `diatonicSet`. L'homonyme du majeur est le mineur NATUREL, sans 7e élevée.
 * `diatonicSet(_, "minor")` inclut la 7e élevée — c'est indispensable pour que
 * le V du mode mineur reste diatonique, mais c'est bien trop permissif ici :
 * avec elle, un Mi♭ AUGMENTÉ (Mi♭-Sol-Si♮) en Do majeur passait pour un
 * « emprunt bIII », alors que le Si♮ n'appartient pas au Do mineur naturel.
 */
function parallelSet(tonicPc: number, mode: "major" | "minor"): Set<number> {
  const base = mode === "major" ? MINOR_DEGREES : MAJOR_DEGREES;
  return new Set(base.map((s) => (tonicPc + s) % 12));
}

/** Étiquette d'un degré chromatique (fondamentale hors gamme). */
const FLAT_LABEL: Record<number, string> = {
  1: "bII", 3: "bIII", 6: "bV", 8: "bVI", 10: "bVII",
};

const FLAT_FONCTION: Record<number, Fonction> = {
  1: "SD", 3: "T", 6: "SD", 8: "SD", 10: "SD",
};

function isMinorish(quality: string): boolean {
  return quality === "m" || quality === "m7" || quality === "°" ||
         quality === "°7" || quality === "ø7";
}

/** Étiquette d'un accord emprunté : "iv", "bVI", "bVII7"… */
function empruntLabel(
  chord: { rootPc: number; quality: string }, tonicPc: number, mode: "major" | "minor",
): { label: string; fonction: Fonction } {
  const deg = degreeOfRoot(chord.rootPc, tonicPc, mode);
  const suffix = chord.quality.includes("7") ? "7" : "";

  if (deg !== null) {
    // Fondamentale diatonique, seule la qualité est empruntée (ex. Fa mineur → iv)
    const roman = ROMANS[deg - 1];
    const label = isMinorish(chord.quality) ? roman.toLowerCase() : roman;
    return { label: label + suffix, fonction: fonctionOfDegree(deg) };
  }

  // Fondamentale chromatique (ex. Lab en Do → bVI)
  const iv = (chord.rootPc - tonicPc + 12) % 12;
  return {
    label: (FLAT_LABEL[iv] ?? "chr") + suffix,
    fonction: FLAT_FONCTION[iv] ?? "?",
  };
}

// ── Analyse d'un accord ───────────────────────────────────────────────────────

export function analyzeChord(
  chord: Chord, tonicPc: number, mode: "major" | "minor",
): ChordResult {
  const base = {
    rootPc: chord.rootPc,
    rootFr: chord.rootFr,
    quality: chord.quality,
    pcs: chord.pcs,
  };

  // ── Règle 1 : diatonique = TOUTES les notes dans la gamme ──
  const dia = diatonicSet(tonicPc, mode);
  const toutesDiatoniques = chord.pcs.every((pc) => dia.has(pc));
  const deg = degreeOfRoot(chord.rootPc, tonicPc, mode);

  if (toutesDiatoniques && deg !== null) {
    return {
      ...base,
      degree: ROMANS[deg - 1] + chord.quality,
      degreeNum: deg,
      fonction: fonctionOfDegree(deg),
      categorie: "diatonique",
    };
  }

  // ── Règle 2 : dominante secondaire (lecture PROVISOIRE) ──
  //
  // ATTENTION : sur un accord isolé, cette lecture n'est qu'une HYPOTHÈSE. En
  // mineur, la tonique est une quinte juste au-dessus du iv ((t+5)+7 ≡ t) :
  // tout accord majeur sur la tonique — une tierce picarde — tombe ici et
  // ressortirait en « V/iv », ce qui est absurde. De même le Fa majeur en Do
  // mineur (IV emprunté) est une quinte au-dessus du VII.
  // Seule la RÉSOLUTION tranche : `annotateResolutions` rétrograde en emprunt
  // les accords PARFAITS qui ne rejoignent pas leur cible (cf. « Rétrogradation »).
  if (DOMINANT_QUALITIES.has(chord.quality)) {
    const [t] = dominantCandidates(chord.rootPc, tonicPc, mode);
    if (t) {
      return {
        ...base,
        degree: (chord.quality === "7" ? "V7/" : "V/") + t.label,
        degreeNum: 0,
        fonction: "D",
        categorie: "dominante_secondaire",
        cible: t.label,
      };
    }
  }

  // ── Règle 3 : sensible de degré ──
  if (LEADING_QUALITIES.has(chord.quality)) {
    // La 7e diminuée peut désigner plusieurs cibles valides. En l'absence de
    // contexte, on retient la plus prioritaire ; la séquence pourra corriger ce
    // choix au vu de la résolution réelle (cf. `annotateResolutions`).
    const [meilleur] = leadingCandidates(
      chord.pcs, chord.quality, chord.rootPc, tonicPc, mode,
    );
    if (meilleur) {
      return {
        ...base,
        rootPc: meilleur.root,
        rootFr: NOTE_FR[meilleur.root] ?? chord.rootFr,
        degree: leadingPrefix(chord.quality) + "/" + meilleur.target.label,
        degreeNum: 0,
        fonction: "D",
        categorie: "sensible_degre",
        cible: meilleur.target.label,
      };
    }
  }

  // ── Règle 4 : emprunt modal (toutes les notes dans le mode homonyme) ──
  const par = parallelSet(tonicPc, mode);
  if (chord.pcs.every((pc) => par.has(pc))) {
    const { label, fonction } = empruntLabel(chord, tonicPc, mode);
    if (label !== "chr") {
      return {
        ...base,
        degree: label,
        degreeNum: degreeOfRoot(chord.rootPc, tonicPc, mode) ?? 0,
        fonction,
        categorie: "emprunt",
      };
    }
  }

  // ── Règle 5 : napolitain (accord majeur sur le 2e degré abaissé) ──
  if (chord.quality === "" && chord.rootPc === (tonicPc + 1) % 12) {
    return {
      ...base,
      degree: "bII",
      degreeNum: 0,
      fonction: "SD",
      categorie: "napolitain",
    };
  }

  // ── Règle 6 : chromatisme non classé ──
  return {
    ...base,
    degree: "chr",
    degreeNum: 0,
    fonction: "?",
    categorie: "chromatique",
  };
}

// ── Analyse de séquence ───────────────────────────────────────────────────────

export interface ChromaEvent {
  measure: number;
  beat?: number;
  accord: string;
  degree: string;
  categorie: Categorie;
  cible?: string;
  resolue?: boolean;
  explication: string;
}

/** Numéro de degré à partir de son étiquette ("ii", "IV"…). */
function numOfLabel(label: string): number {
  const idx = ROMANS.findIndex((r) => r.toLowerCase() === label.toLowerCase());
  return idx + 1;
}

/**
 * Applique à un accord la lecture « sensible de degré » désignée par sa
 * résolution, si l'accord suivant est bien l'une de ses cibles possibles.
 */
function reviseLeadingReading(
  c: ChordResult, next: ChordResult, tonicPc: number, mode: "major" | "minor",
): boolean {
  const lectures = leadingCandidates(c.pcs, c.quality, c.rootPc, tonicPc, mode);
  const confirmee = lectures.find(
    (l) => next.rootPc === pcOfDegree(l.target.num, tonicPc, mode),
  );
  if (!confirmee) return false;

  c.rootPc = confirmee.root;
  c.rootFr = NOTE_FR[confirmee.root] ?? c.rootFr;
  c.degree = leadingPrefix(c.quality) + "/" + confirmee.target.label;
  c.degreeNum = 0;
  c.fonction = "D";
  c.categorie = "sensible_degre";
  c.cible = confirmee.target.label;
  return true;
}

/**
 * PROMOTION — un accord provisoirement lu comme diatonique (ou emprunté) peut
 * être, en réalité, la dominante du degré qui le suit.
 *
 * Cas d'école : en Do mineur, Sib7 (Sib-Ré-Fa-Lab) appartient tout entier au
 * mineur naturel ; la règle 1 le happe donc en « VII7 ». Mais Sib7 → Mib est la
 * tonicisation du relatif majeur : c'est un V7/III. Sans cet arbitrage, la
 * cible III serait à jamais inatteignable pour une 7e de dominante.
 *
 * CONDITION DE TRITON — on ne promeut QUE les accords porteurs d'un triton
 * (7e de dominante, ou accord de sensible ° / °7 / ø7), jamais un accord
 * PARFAIT diatonique. Un accord parfait n'a aucune tension dominante : sans
 * altération chromatique ni 7e, ce n'est pas une dominante secondaire, c'est le
 * degré qu'il est. Promouvoir les accords parfaits relirait toute marche de
 * quintes comme une chaîne de dominantes (en Do majeur, I → IV deviendrait
 * V/IV → IV ; en Do mineur, VII → III → VI deviendrait V/III → V/VI → …).
 */
function promoteIfTonicizing(
  c: ChordResult, next: ChordResult, tonicPc: number, mode: "major" | "minor",
): boolean {
  // Voie de la quinte : seule la 7e de dominante (triton 3ce–7e) qualifie.
  if (c.quality === "7") {
    const t = dominantCandidates(c.rootPc, tonicPc, mode).find(
      (t) => next.rootPc === pcOfDegree(t.num, tonicPc, mode),
    );
    if (t) {
      c.degree = "V7/" + t.label;
      c.degreeNum = 0;
      c.fonction = "D";
      c.categorie = "dominante_secondaire";
      c.cible = t.label;
      return true;
    }
  }

  // Voie du demi-ton : accord de sensible diatonique visant un autre degré
  // (en Do mineur, Ré° → Mib est le vii° du relatif majeur).
  if (LEADING_QUALITIES.has(c.quality)) {
    return reviseLeadingReading(c, next, tonicPc, mode);
  }

  return false;
}

/**
 * RÉTROGRADATION — une dominante secondaire provisoire portée par un accord
 * PARFAIT (sans 7e) n'est pas confirmée si la cible ne vient pas.
 *
 * C'est ce qui sauve la tierce picarde : en Do mineur, la tonique est une quinte
 * juste au-dessus du iv, donc TOUT accord majeur de tonique est capté par la
 * règle 2 en « V/iv ». S'il ne va pas sur Fa mineur, ce n'est pas une dominante :
 * c'est un I emprunté au majeur homonyme (fonction T). Idem pour Fa majeur en Do
 * mineur : « V/VII » s'il va sur Sib, IV emprunté (SD) sinon.
 *
 * On ne rétrograde JAMAIS une 7e de dominante : une dominante secondaire non
 * résolue existe bel et bien (rompue secondaire), et le triton la trahit.
 */
function demoteIfUnconfirmed(
  c: ChordResult, next: ChordResult | undefined, tonicPc: number, mode: "major" | "minor",
): void {
  const targetPc = pcOfDegree(numOfLabel(c.cible!), tonicPc, mode);
  if (next && next.rootPc === targetPc) return; // cible atteinte : lecture confirmée

  // La cible n'arrive pas. L'accord est-il tout entier dans le mode homonyme
  // NATUREL ? Alors c'est un emprunt modal, et non une dominante.
  const par = parallelSet(tonicPc, mode);
  if (!c.pcs.every((pc) => par.has(pc))) return; // sinon : V/x non résolu

  const { label, fonction } = empruntLabel(c, tonicPc, mode);
  if (label === "chr") return;

  c.degree = label;
  c.degreeNum = degreeOfRoot(c.rootPc, tonicPc, mode) ?? 0;
  c.fonction = fonction;
  c.categorie = "emprunt";
  delete c.cible;
  delete c.resolue;
}

/**
 * Arbitre chaque accord au vu de sa RÉSOLUTION, puis renseigne `resolue`.
 * Mutation en place (la séquence est l'unité d'analyse).
 *
 * `analyzeChord` ne voit qu'un accord isolé : sa lecture est PROVISOIRE. Trois
 * arbitrages sont ici rendus, tous fondés sur le même principe — c'est l'accord
 * suivant qui décide :
 *
 *  1. PROMOTION (cf. `promoteIfTonicizing`) : un accord diatonique porteur d'un
 *     triton et suivi de la cible qu'il annonce devient dominante secondaire
 *     (Sib7 → Mib = V7/III).
 *  2. RÉTROGRADATION (cf. `demoteIfUnconfirmed`) : une dominante secondaire
 *     provisoire sur accord parfait, privée de sa cible, redevient un emprunt
 *     (tierce picarde = I ; Fa majeur en Do mineur = IV).
 *  3. RÉVISION DE CIBLE des 7es diminuées : cet accord est SYMÉTRIQUE, ses
 *     quatre notes peuvent viser quatre cibles ; `analyzeChord` s'est rabattu
 *     sur un ordre de priorité. Un °7 suivi de Rém est un vii°7/ii, le même
 *     accord suivi de Fa est un vii°7/IV.
 */
export function annotateResolutions(
  chords: ChordResult[], tonicPc: number, mode: "major" | "minor",
): void {
  for (let i = 0; i < chords.length; i++) {
    const c = chords[i];
    const next = chords[i + 1];

    if (next && c.categorie === "sensible_degre" && c.quality === "°7") {
      // Révision de la cible au vu de la résolution réelle. Sinon : aucune
      // résolution reconnaissable, on garde la cible prioritaire.
      reviseLeadingReading(c, next, tonicPc, mode);
    } else if (next && (c.categorie === "diatonique" || c.categorie === "emprunt")) {
      promoteIfTonicizing(c, next, tonicPc, mode);
    } else if (c.categorie === "dominante_secondaire" && c.quality === "") {
      demoteIfUnconfirmed(c, next, tonicPc, mode);
    }

    if (!c.cible) continue;
    const targetPc = pcOfDegree(numOfLabel(c.cible), tonicPc, mode);
    c.resolue = !!next && next.rootPc === targetPc;
  }
}

/** Construit les événements chromatiques expliqués (pour l'onglet dédié). */
export function buildChromaEvents(
  seq: Array<{ result: ChordResult; measure: number }>,
  tonicPc: number,
  mode: "major" | "minor",
): ChromaEvent[] {
  const events: ChromaEvent[] = [];

  for (let i = 0; i < seq.length; i++) {
    const { result: c, measure } = seq[i];
    if (c.categorie === "diatonique") continue;

    const next = seq[i + 1]?.result;
    const chaine = !!c.resolue && !!next &&
      (next.categorie === "dominante_secondaire" || next.categorie === "sensible_degre");

    let explication: string;
    if (c.categorie === "dominante_secondaire" || c.categorie === "sensible_degre") {
      const targetPc = pcOfDegree(numOfLabel(c.cible!), tonicPc, mode);
      const cibleNom = NOTE_FR[targetPc];
      const suite = c.resolue
        ? (chaine
            ? "Enchaîne sur une autre dominante secondaire (chaîne de dominantes)."
            : "Résolue sur sa cible à l'accord suivant.")
        : "Non résolue (rompue secondaire).";
      explication = `Tonicise le ${c.cible} (${cibleNom}). ${suite}`;
    } else if (c.categorie === "emprunt") {
      const homonyme = mode === "major" ? "mineur" : "majeur";
      explication = `Emprunt au mode homonyme (${homonyme}).`;
    } else if (c.categorie === "napolitain") {
      explication =
        "Accord napolitain (bII). Le renversement (sixte) sera confirmé lorsque la basse sera suivie.";
    } else {
      explication = "Accord chromatique non identifié.";
    }

    events.push({
      measure,
      beat: c.beat,
      accord: `${c.rootFr}${c.quality}`,
      degree: c.degree,
      categorie: c.categorie,
      cible: c.cible,
      resolue: c.resolue,
      explication,
    });
  }

  return events;
}

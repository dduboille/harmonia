/**
 * lib/voicing-ecole.ts
 * Harmonia — Moteur commun de réalisation SATB « d'école ».
 *
 * Ce module est le PLAYBOOK partagé du chantier ① (conformité du corpus). Il
 * réalise une progression d'accords en quatre voix par recherche en profondeur
 * (DFS) avec retour arrière :
 *   1. la basse porte une classe de hauteurs imposée (fondamentale, ou tierce/
 *      quinte pour un renversement — d'où le paramètre `bassPc`) ;
 *   2. l'accord est COMPLÉTÉ — alto/ténor couvrent d'abord les hauteurs
 *      manquantes, et toute doublure privilégie la fondamentale, JAMAIS la
 *      sensible ni la 7e ;
 *   3. l'enchaînement des mesures écarte d'emblée les candidats fautifs
 *      (quintes/octaves parallèles, sensible externe non résolue, 7e non
 *      résolue, directes soprano–basse), et garde le meilleur mouvement.
 * Tessitures, espacements (≤ octave S–A / A–T) et absence de croisement sont
 * garantis par construction.
 *
 * Il était initialement local à `src/exercises/generator.ts` (générateur du
 * corpus). Il est EXTRAIT ICI SANS CHANGEMENT DE COMPORTEMENT pour être partagé
 * avec `src/lib/satb-generator.ts` (générateur de la page /generateur-satb),
 * qui réalise des accords RENVERSÉS — d'où la seule généralisation par rapport
 * à l'original : `buildCandidates`/`voiceProgression` reçoivent une classe de
 * hauteurs de basse explicite au lieu de forcer la fondamentale. Le générateur
 * du corpus passe simplement `bassPc = rootPc` : son comportement est identique.
 */

/** Un accord posé en hauteurs MIDI absolues. */
export interface VoicedMeasure {
  soprano: number;
  alto: number;
  tenor: number;
  bass: number;
}

/** Rôles (classes de hauteurs) d'un accord dans une tonalité donnée. */
export interface ChordSpec {
  rootPc: number;
  thirdPc: number;
  fifthPc: number;
  seventhPc: number | null; // null = triade
  pcs: number[];            // hauteurs distinctes de l'accord
  fifthOmissible: boolean;  // la quinte peut-elle manquer ? (quintes justes seulement)
}

/** Une mesure à réaliser : accord, soprano imposé (1re mesure), basse imposée. */
export interface SpecEntry {
  spec: ChordSpec;
  firstSopranoPc: number; // classe de hauteurs imposée au soprano de la 1re mesure
  bassPc: number;         // classe de hauteurs imposée à la basse
}

/** Tessitures par voix (en MIDI, C4 = 60). */
export const RANGES = {
  soprano: { min: 60, max: 79 }, // C4–G5
  alto:    { min: 55, max: 72 }, // G3–C5
  tenor:   { min: 48, max: 67 }, // C3–G4
  bass:    { min: 40, max: 60 }, // E2–C4
};

const VOICE_KEYS = ["soprano", "alto", "tenor", "bass"] as const;

export function pcOfMidi(midi: number): number {
  return ((midi % 12) + 12) % 12;
}

/** Hauteurs MIDI d'une classe de hauteurs dans une tessiture. */
function midisInRange(pc: number, min: number, max: number): number[] {
  const out: number[] = [];
  for (let m = min; m <= max; m++) if (pcOfMidi(m) === pc) out.push(m);
  return out;
}

/**
 * Ordre de préférence des doublures : fondamentale, puis quinte, puis tierce —
 * JAMAIS la sensible de la tonalité, ni la septième (dissonance).
 */
function doublingOrder(spec: ChordSpec, ltPc: number): number[] {
  return [spec.rootPc, spec.fifthPc, spec.thirdPc].filter(
    pc => pc !== ltPc && pc !== spec.seventhPc,
  );
}

/**
 * Tous les voicings légaux d'un accord pour une (ou plusieurs) note(s) de
 * soprano : basse = `bassPc` (fondamentale ou note du renversement), accord
 * complété, doublures réglementaires, tessitures et espacements respectés,
 * aucun croisement.
 */
export function buildCandidates(
  spec: ChordSpec,
  sopranoPcs: number[],
  ltPc: number,
  bassPc: number,
): VoicedMeasure[] {
  const out: VoicedMeasure[] = [];
  for (const sopranoPc of sopranoPcs) {
    const sopMidis  = midisInRange(sopranoPc, RANGES.soprano.min, RANGES.soprano.max);
    const bassMidis = midisInRange(bassPc, RANGES.bass.min, RANGES.bass.max);
    for (const sop of sopMidis) {
      for (const bass of bassMidis) {
        const covered = new Set([sopranoPc, bassPc]);
        const missing = spec.pcs.filter(pc => !covered.has(pc));

        // Classes de hauteurs des deux voix intérieures (alto, ténor).
        const innerPcPairs: [number, number][] = [];
        if (missing.length === 2) {
          innerPcPairs.push([missing[0], missing[1]]);
        } else if (missing.length === 1) {
          for (const d of doublingOrder(spec, ltPc)) innerPcPairs.push([missing[0], d]);
        } else if (missing.length === 0) {
          const dbl = doublingOrder(spec, ltPc);
          for (const d1 of dbl) for (const d2 of dbl) innerPcPairs.push([d1, d2]);
        } else {
          // Soprano sur une note d'une tétrade : trois hauteurs pour deux voix
          // intérieures — on n'ellipse que la quinte JUSTE, sinon impasse.
          if (spec.seventhPc !== null && spec.fifthOmissible) {
            const m2 = missing.filter(pc => pc !== spec.fifthPc);
            if (m2.length === 2) innerPcPairs.push([m2[0], m2[1]]);
          }
        }

        for (const [pa, pb] of innerPcPairs) {
          for (const [altoPc, tenorPc] of [[pa, pb], [pb, pa]] as [number, number][]) {
            const altoMidis  = midisInRange(altoPc,  RANGES.alto.min,  RANGES.alto.max);
            const tenorMidis = midisInRange(tenorPc, RANGES.tenor.min, RANGES.tenor.max);
            for (const alto of altoMidis) {
              for (const tenor of tenorMidis) {
                if (!(bass <= tenor && tenor <= alto && alto <= sop)) continue; // pas de croisement
                if (sop - alto > 12) continue;   // espacement S-A ≤ 1 octave
                if (alto - tenor > 12) continue;  // espacement A-T ≤ 1 octave
                out.push({ soprano: sop, alto, tenor, bass });
              }
            }
          }
        }
      }
    }
  }
  return out;
}

const CANDIDATE_PAIRS = [
  ["soprano", "alto"], ["soprano", "tenor"], ["soprano", "bass"],
  ["alto", "tenor"], ["alto", "bass"], ["tenor", "bass"],
] as const;

/** Quintes ou octaves parallèles entre deux mesures — même logique que le juge. */
function hasParallels(prev: VoicedMeasure, cur: VoicedMeasure): boolean {
  for (const [v1, v2] of CANDIDATE_PAIRS) {
    const prevInt = Math.abs(prev[v1] - prev[v2]) % 12;
    const curInt  = Math.abs(cur[v1]  - cur[v2])  % 12;
    const d1 = cur[v1] - prev[v1], d2 = cur[v2] - prev[v2];
    const sameDir = (d1 > 0 && d2 > 0) || (d1 < 0 && d2 < 0);
    if (!sameDir) continue;
    if (prevInt === 7 && curInt === 7) return true;
    if (prevInt === 0 && curInt === 0 && pcOfMidi(prev[v1]) !== pcOfMidi(cur[v1])) return true;
  }
  return false;
}

interface TransitionInfo {
  armed: boolean;           // la sensible du prev doit-elle résoudre (arrivée I/VI) ?
  ltPc: number;
  dominantePc: number;
  seventhPc: number | null; // septième du prev à faire descendre
}

/**
 * Coût d'un candidat par rapport à la mesure précédente, ou `null` s'il est
 * irrecevable (parallèle, sensible externe non résolue, 7e non résolue, directe
 * soprano-basse). Toutes ces contraintes sont dures pour que la copie du modèle
 * vaille 100.
 */
function scoreNext(cur: VoicedMeasure, prev: VoicedMeasure, info: TransitionInfo): number | null {
  if (hasParallels(prev, cur)) return null;

  // Sensible de la tonalité (règle 4c) : dans une cadence armée (arrivée I/VI),
  // la sensible du prev DOIT se résoudre — la voix externe est une faute
  // bloquante, l'interne un avertissement noté. On les traite toutes deux comme
  // des contraintes dures.
  if (info.armed) {
    for (const v of VOICE_KEYS) {
      if (pcOfMidi(prev[v]) !== info.ltPc) continue;
      const d = cur[v] - prev[v];
      const external = v === "soprano" || v === "bass";
      const ok = external
        ? d === 1 || d === 0
        : d === 1 || d === 0 || (d === -4 && pcOfMidi(cur[v]) === info.dominantePc);
      if (!ok) return null;
    }
  }

  // Septième d'accord (règle 4d) : elle descend par degré ou tient. Contrainte dure.
  if (info.seventhPc !== null) {
    for (const v of VOICE_KEYS) {
      if (pcOfMidi(prev[v]) !== info.seventhPc) continue;
      const d = cur[v] - prev[v];
      if (d !== 0 && d !== -1 && d !== -2) return null;
    }
  }

  // Quintes/octaves directes soprano-basse (règle 4e, avertissement) : dure aussi.
  const ds = cur.soprano - prev.soprano, db = cur.bass - prev.bass;
  if (ds !== 0 && db !== 0 && Math.sign(ds) === Math.sign(db) && Math.abs(ds) > 2) {
    const avant = Math.abs(prev.soprano - prev.bass) % 12;
    const apres = Math.abs(cur.soprano - cur.bass) % 12;
    if ((apres === 7 && avant !== 7) || (apres === 0 && avant !== 0)) return null;
  }

  return VOICE_KEYS.reduce((s, v) => s + Math.abs(cur[v] - prev[v]), 0);
}

/** Coût d'une première mesure : voicing compact et centré. */
function costFirst(m: VoicedMeasure): number {
  return (m.soprano - m.bass) * 2 + Math.abs(m.alto - 62) + Math.abs(m.tenor - 53);
}

/**
 * Réalise toute la progression par recherche en profondeur : le meilleur
 * candidat d'abord, retour arrière sur impasse. `null` si aucune conduite légale
 * n'existe dans l'espace des candidats.
 */
export function voiceProgression(
  specs: SpecEntry[],
  tonicPc: number,
  minor: boolean,
): VoicedMeasure[] | null {
  const ltPc = (tonicPc + 11) % 12;
  const dominantePc = (tonicPc + 7) % 12;
  const sixtePc = (tonicPc + (minor ? 8 : 9)) % 12;

  function transition(i: number): TransitionInfo {
    const prev = specs[i - 1].spec, cur = specs[i].spec;
    const armed =
      (prev.rootPc === dominantePc || prev.rootPc === ltPc) &&
      (cur.rootPc === tonicPc || cur.rootPc === sixtePc);
    return { armed, ltPc, dominantePc, seventhPc: prev.seventhPc };
  }

  function dfs(i: number, prev: VoicedMeasure | null): VoicedMeasure[] | null {
    if (i === specs.length) return [];
    const sopranoPcs = i === 0 ? [specs[0].firstSopranoPc] : specs[i].spec.pcs;
    let ordered = buildCandidates(specs[i].spec, sopranoPcs, ltPc, specs[i].bassPc);
    if (i === 0) {
      ordered = ordered.sort((a, b) => costFirst(a) - costFirst(b));
    } else {
      const info = transition(i);
      ordered = ordered
        .map(c => [scoreNext(c, prev as VoicedMeasure, info), c] as const)
        .filter((x): x is readonly [number, VoicedMeasure] => x[0] !== null)
        .sort((a, b) => a[0] - b[0])
        .map(x => x[1]);
    }
    for (const c of ordered) {
      const rest = dfs(i + 1, c);
      if (rest) return [c, ...rest];
    }
    return null;
  }

  return dfs(0, null);
}

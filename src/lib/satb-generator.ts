/**
 * src/lib/satb-generator.ts
 * Moteur de génération d'exercices SATB pour la page /generateur-satb.
 *
 * DÉCISION DE PARTAGE (chantier « mise à niveau /generateur-satb », Task 2) :
 * le moteur de réalisation à quatre voix — voicings complets, doublures
 * réglementaires, rejets durs (parallèles, directes S–B, sensible externe non
 * résolue, 7e non résolue), tessitures/espacements/croisements — est PARTAGÉ
 * avec le générateur du corpus (`src/exercises/generator.ts`). Il a été extrait
 * dans `@/lib/voicing-ecole` et est importé par les DEUX générateurs. La seule
 * généralisation nécessaire au partage : `buildCandidates`/`voiceProgression`
 * reçoivent une classe de hauteurs de basse explicite (`bassPc`) — car cette
 * page réalise des accords RENVERSÉS (II6, I64, bII6, V6…), là où le corpus est
 * en état fondamental. Ce fichier ne garde que la couche « chiffrage romain →
 * accord réel » (parseDeg/buildChord, avec renversements et extensions), la
 * conversion MIDI→note (orthographe mineure comprise) et l'auto-filtrage.
 *
 * Étapes :
 *  1. Transposition des degrés romains en accords réels dans la tonalité choisie
 *     (avec renversements et extensions).
 *  2. Réalisation SATB par le moteur partagé (DFS + retour arrière).
 *  3. Auto-filtrage : une solution qui n'obtient pas 100 (école) écarte le combo
 *     (la fonction renvoie `null`).
 */

import type { ProgressionTemplate } from "@/data/progressions-templates";
import { voiceProgression, type ChordSpec, type SpecEntry, type VoicedMeasure } from "@/lib/voicing-ecole";
import { validateSATB, type Measure } from "@/lib/satb-rules";

// ── Types publics ──────────────────────────────────────────────────────────────

export type Doigte = "1" | "3" | "5" | "7";

export interface SATBMeasure {
  soprano: { name: string; octave: number };
  alto:    { name: string; octave: number };
  tenor:   { name: string; octave: number };
  bass:    { name: string; octave: number };
}

export interface GeneratedExercise {
  template: ProgressionTemplate;
  tonalite: string;
  mode: "major" | "minor";
  doigte: Doigte;
  accords: string[];
  labels: string[];
  mesures: SATBMeasure[];
  solution: SATBMeasure[];
  dotKeys: string[][];
  lilypondCode: string;
  reglesAppliquees: string[];
}

// ── Constantes ─────────────────────────────────────────────────────────────────

const SHARP_NAMES = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
const FLAT_NAMES  = ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"];
const FLAT_KEYS   = new Set(["F","Bb","Eb","Ab","Db","Gb","Cb","Dm","Gm","Cm","Fm","Bbm","Ebm"]);
const MINOR_KEYS  = new Set(["Am","Em","Bm","F#m","C#m","G#m","Dm","Gm","Cm","Fm","Bbm","Ebm"]);

const KEY_ROOTS: Record<string, number> = {
  "C":0,"G":7,"D":2,"A":9,"E":4,"B":11,"F#":6,"Gb":6,
  "F":5,"Bb":10,"Eb":3,"Ab":8,"Db":1,"Cb":11,
  "Am":9,"Em":4,"Bm":11,"F#m":6,"C#m":1,"G#m":8,
  "Dm":2,"Gm":7,"Cm":0,"Fm":5,"Bbm":10,"Ebm":3,
};

const MAJOR_SCALE = [0,2,4,5,7,9,11];
const MINOR_SCALE = [0,2,3,5,7,8,10];

// Default chord quality per scale degree (major / minor)
const MAJ_QUAL = ["maj","min","min","maj","maj","min","dim"] as const;
const MIN_QUAL = ["min","dim","maj","min","maj","maj","maj"] as const;

// ── Helpers de nom ───────────────────────────────────────────────────────────

function noteName(pc: number, key: string): string {
  return FLAT_KEYS.has(key) ? FLAT_NAMES[pc % 12] : SHARP_NAMES[pc % 12];
}

// ── Orthographe de la sensible en mineur (miroir de exercises/generator.ts) ────
//
// La sensible (7e degré HAUSSÉ) d'un mineur en bémols doit s'écrire comme un
// dièse/naturel du 7e degré, jamais comme un bémol : en Ré mineur c'est un DO#
// (et non Réb), en Do mineur un SI naturel, etc. Repli sur l'orthographe par
// défaut si la graphie exacte est exotique (E#, B#, F##).

const LETTERS = ["C", "D", "E", "F", "G", "A", "B"];
const LETTER_PC: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
const SAFE_NAMES = new Set([...SHARP_NAMES, ...FLAT_NAMES]);

/** Orthographe du 7e degré haussé (sensible) pour une tonique mineure. */
function raisedSeventhSpelling(tonicName: string, ltPc: number): string {
  const idx = LETTERS.indexOf(tonicName[0]);
  const seventhLetter = LETTERS[(idx + 6) % 7]; // lettre juste sous la tonique
  const diff = ((ltPc - LETTER_PC[seventhLetter]) % 12 + 12) % 12;
  const acc = diff === 0 ? "" : diff === 1 ? "#" : diff === 2 ? "##" : "";
  return seventhLetter + acc;
}

/** Nom de la tonique (lettre + éventuelle altération) d'une signature « Am », « Bbm »… */
function tonicNameOf(key: string): string {
  return key.endsWith("m") ? key.slice(0, -1) : key;
}

// ── Degree parser ──────────────────────────────────────────────────────────────

type Extension = "none" | "dom7" | "maj7" | "min7" | "hdim7" | "dom7b9";
type ChordQuality = "maj" | "min" | "dim" | "aug";

interface DegreeInfo {
  flatted: boolean;
  degree: number;
  explicitMinor: boolean;
  inversion: 0 | 1 | 2;
  extension: Extension;
}

function parseDeg(deg: string): DegreeInfo {
  let s = deg;
  const flatted = s.startsWith("b");
  if (flatted) s = s.slice(1);

  const ROMAN: [string, number][] = [["VII",7],["VI",6],["V",5],["IV",4],["III",3],["II",2],["I",1]];
  let degree = 1;
  for (const [r, d] of ROMAN) {
    if (s.startsWith(r)) { degree = d; s = s.slice(r.length); break; }
  }

  let extension: Extension = "none";
  let explicitMinor = false;

  if (s.startsWith("m7b5"))         { explicitMinor = true; extension = "hdim7"; s = s.slice(4); }
  else if (s.startsWith("Maj7") || s.startsWith("maj7")) { extension = "maj7"; s = s.slice(4); }
  else if (s.startsWith("m7"))      { explicitMinor = true; extension = "min7"; s = s.slice(2); }
  else if (s.startsWith("7b9"))     { extension = "dom7b9"; s = s.slice(3); }
  else if (s.startsWith("7"))       { extension = "dom7"; s = s.slice(1); }
  else if (s.startsWith("m"))       { explicitMinor = true; s = s.slice(1); }

  let inversion: 0|1|2 = 0;
  if (s.startsWith("64"))      inversion = 2;
  else if (s.startsWith("6"))  inversion = 1;

  return { flatted, degree, explicitMinor, inversion, extension };
}

// ── Chord builder ──────────────────────────────────────────────────────────────

/** Un accord réel : rôles pour le moteur partagé + basse imposée + affichage. */
interface BuiltChord {
  spec: ChordSpec;
  bassPc: number;      // classe de hauteurs à la basse (fondamentale ou renversement)
  tones: number[];     // hauteurs ordonnées [fond, 3ce, 5te, (7e)] — pour la position soprano
  displayName: string;
}

function buildChord(info: DegreeInfo, keyRoot: number, mode: "major"|"minor", key: string): BuiltChord {
  const scale = mode === "major" ? MAJOR_SCALE : MINOR_SCALE;
  const defQual = mode === "major" ? MAJ_QUAL : MIN_QUAL;

  // Root PC
  let offset = scale[info.degree - 1];
  if (info.flatted && mode === "major") offset = (offset - 1 + 12) % 12;
  const rootPc = (keyRoot + offset) % 12;

  // Quality
  let quality: ChordQuality;
  if (info.extension === "hdim7") quality = "dim";
  else if (info.explicitMinor) quality = "min";
  else if (info.flatted) quality = "maj";
  else if (mode === "minor" && info.degree === 4) quality = "maj"; // Dorian IV
  else quality = defQual[info.degree - 1] as ChordQuality;

  // Intervals from root
  const intervals: number[] =
    quality === "maj" ? [0,4,7] :
    quality === "min" ? [0,3,7] :
    quality === "dim" ? [0,3,6] : [0,4,8];

  if (info.extension === "dom7" || info.extension === "min7") intervals.push(10);
  else if (info.extension === "maj7")   intervals.push(11);
  else if (info.extension === "hdim7")  { intervals[2] = 6; intervals.push(10); }
  else if (info.extension === "dom7b9") intervals.push(10);

  const tones = intervals.map(i => (rootPc + i) % 12);

  const thirdPc  = tones[1];
  const fifthPc  = tones[2];
  const seventhPc = tones.length > 3 ? tones[3] : null;
  const pcs = [...new Set(tones)];

  // La quinte n'est ellipsable que si elle est JUSTE (accords maj/min et leurs
  // 7es) — jamais pour un accord diminué/augmenté/demi-diminué (quinte altérée
  // caractéristique).
  const fifthOmissible = quality === "maj" || quality === "min";

  // Bass tone (renversement : 1er = 3ce, 2e = 5te)
  const bassPc = tones[info.inversion] ?? tones[0];

  // Display name — les degrés bémolisés s'écrivent en bémol (bII = Db, non C#)
  const root = info.flatted ? FLAT_NAMES[rootPc % 12] : noteName(rootPc, key);
  const qSuf = quality === "min" ? "m" : quality === "dim" ? "dim" : "";
  const eSuf =
    info.extension === "hdim7"   ? "m7b5" :
    info.extension === "dom7b9"  ? "7b9" :
    info.extension === "maj7"    ? "maj7" :
    (info.extension === "dom7" || info.extension === "min7") ? "7" : "";
  const invSuf = info.inversion === 1 ? `/${noteName(tones[1] ?? tones[0], key)}` :
                 info.inversion === 2 ? `/${noteName(tones[2] ?? tones[0], key)}` : "";

  const displayName = info.extension === "hdim7"
    ? `${root}m7b5${invSuf}`
    : `${root}${qSuf}${eSuf}${invSuf}`;

  return {
    spec: { rootPc, thirdPc, fifthPc, seventhPc, pcs, fifthOmissible },
    bassPc,
    tones,
    displayName,
  };
}

// ── Empreinte sonore d'un degré (export pour le relevé) ────────────────────────

/**
 * Empreinte SONORE d'un symbole de degré dans une tonalité : classes de
 * hauteurs de l'accord réalisé (triées) + classe de hauteurs de la basse.
 * Deux symboles d'empreinte identique sont indiscernables à l'oreille dans
 * cette tonalité (en mineur I ≡ Im, VI ≡ bVI ; partout V7 ≡ V7b9 — la 9e
 * mineure n'est jamais voicée). Le relevé s'en sert pour écarter des
 * pastilles de chiffrage tout distracteur qui sonnerait comme la bonne
 * réponse (une oreille juste ne doit jamais être notée fausse).
 */
export function empreinteDegre(symbole: string, tonalite: string): { pcs: number[]; bassPc: number } {
  const mode: "major" | "minor" = MINOR_KEYS.has(tonalite) ? "minor" : "major";
  const keyRoot = KEY_ROOTS[tonalite] ?? 0;
  const ch = buildChord(parseDeg(symbole), keyRoot, mode, tonalite);
  return { pcs: [...ch.spec.pcs].sort((a, b) => a - b), bassPc: ch.bassPc };
}

// ── MIDI → note ────────────────────────────────────────────────────────────────

function pcOf(midi: number): number {
  return ((midi % 12) + 12) % 12;
}

/**
 * Convertit une hauteur MIDI en {nom, octave}, en forçant l'orthographe de la
 * sensible haussée en mineur (Ré m → Do#, non Réb) quand elle est « sûre ».
 */
function makeToEntry(key: string, mode: "major"|"minor") {
  const tonicPc = KEY_ROOTS[key] ?? 0;
  const ltPc = (tonicPc + 11) % 12;
  const ltName = mode === "minor" ? raisedSeventhSpelling(tonicNameOf(key), ltPc) : "";
  const ltForce = mode === "minor" && SAFE_NAMES.has(ltName);
  return (midi: number): { name: string; octave: number } => {
    const octave = Math.floor(midi / 12) - 1;
    if (ltForce && pcOf(midi) === ltPc) return { name: ltName, octave };
    return { name: noteName(pcOf(midi), key), octave };
  };
}

// ── LilyPond export ────────────────────────────────────────────────────────────

function toLilyNote(name: string, octave: number): string {
  const n = name.toLowerCase()
    .replace("##", "isis").replace("#", "is")
    .replace("bb", "eses").replace("b", "es");
  const diff = octave - 3;
  const oSuf = diff > 0 ? "'".repeat(diff) : diff < 0 ? ",".repeat(-diff) : "";
  return n + oSuf;
}

function generateLilyPond(mesures: SATBMeasure[], key: string, mode: "major"|"minor"): string {
  const keyLily = key.toLowerCase().replace("#","is").replace("b","es").replace("m","");
  const modeLily = mode === "minor" ? "\\minor" : "\\major";
  const chords = mesures.map(m => {
    const b = toLilyNote(m.bass.name, m.bass.octave);
    const t = toLilyNote(m.tenor.name, m.tenor.octave);
    const a = toLilyNote(m.alto.name, m.alto.octave);
    const s = toLilyNote(m.soprano.name, m.soprano.octave);
    return `  <${b} ${t} ${a} ${s}>1`;
  }).join("\n");
  return `\\version "2.24.0"\n\\relative c' {\n  \\key ${keyLily} ${modeLily}\n  \\time 4/4\n${chords}\n}`;
}

// ── Main export ──────────────────────────────────────────────────────────────

const DOIGTE_IDX: Record<Doigte, number> = { "1":0, "3":1, "5":2, "7":3 };

/**
 * Le 1er accord du gabarit impose-t-il DÉJÀ son renversement (I64, II6, bII6…) ?
 *
 * Si oui, le doigté de départ est INERTE : la basse de la 1re mesure suit le
 * chiffrage du gabarit, exactement comme les mesures suivantes — sinon le doigté
 * écraserait l'inversion que l'exercice a précisément pour but de faire
 * travailler. Seul l'accord d'index 0 est concerné (le doigté ne touche jamais
 * les autres) : un gabarit comme IV–I64–V–I n'est PAS « imposé », son 1er accord
 * (IV) étant fondamental. Réutilisé par l'UI pour griser le panneau « doigté ».
 */
export function premierAccordImpose(template: ProgressionTemplate): boolean {
  return parseDeg(template.symboles[0]).inversion !== 0;
}

/**
 * Génère un exercice SATB pour un combo (gabarit × tonalité × doigté).
 *
 * Le doigté fixe la note de l'accord placée à la BASSE de la première mesure —
 * c'est le RENVERSEMENT qui ouvre l'exercice : ① fondamentale (état fondamental),
 * ③ tierce (1er renversement), ⑤ quinte (2e renversement), ⑦ septième (3e
 * renversement), avec repli sur la quinte pour une triade (pas de 7e à mettre à
 * la basse). Ce renversement de départ REMPLACE le chiffrage du gabarit sur la
 * seule 1re mesure ; les mesures suivantes gardent leurs propres renversements.
 *
 * EXCEPTION — le doigté ne gouverne cette basse QUE si le gabarit laisse son 1er
 * accord en position fondamentale. Si le chiffrage impose déjà un renversement à
 * ce 1er accord (I64, II6, bII6…), le doigté est INERTE : la basse suit le
 * chiffrage comme les autres mesures — l'exercice porte justement sur ce
 * renversement et le doigté ne doit pas l'écraser (cf. `premierAccordImpose`).
 *
 * Le soprano de la 1re mesure n'est PAS imposé : le moteur partagé exige une note
 * de soprano UNIQUE pour ancrer sa recherche en tête (là où les mesures suivantes
 * explorent librement toutes les notes de l'accord). On simule donc un soprano
 * libre ICI, sans toucher au moteur, par une boucle : on essaie chaque note de
 * l'accord (fondamentale, 3ce, 5te, [7e]) au soprano et l'on retient la PREMIÈRE
 * conduite complète et légale. L'auto-filtrage renvoie `null` si aucun soprano ne
 * se laisse conduire, ou si la solution obtenue ne vaut pas 100 contre les règles
 * d'école (combo écarté).
 */
export function generateSATBExercise(
  template: ProgressionTemplate,
  tonalite: string,
  doigte: Doigte
): GeneratedExercise | null {
  const mode: "major"|"minor" = MINOR_KEYS.has(tonalite) ? "minor" : "major";
  const keyRoot = KEY_ROOTS[tonalite] ?? 0;
  const minor = mode === "minor";

  const chords = template.symboles.map(deg => buildChord(parseDeg(deg), keyRoot, mode, tonalite));

  // Basse de la 1re mesure. Cas normal (1er accord fondamental dans le gabarit) :
  // = note du doigté (renversement de départ), avec le même repli qu'auparavant
  // (⑦ sur une triade n'a pas de 7e → on retombe sur la quinte, dernière note).
  // Cas d'un gabarit qui impose déjà un renversement à son 1er accord (I64, II6,
  // bII6…) : on garde SA basse et le doigté reste sans effet (cf. premierAccordImpose).
  const ch0 = chords[0];
  const bassPc0 = premierAccordImpose(template)
    ? ch0.bassPc
    : (ch0.tones[DOIGTE_IDX[doigte]] ?? ch0.tones[ch0.tones.length - 1]);

  // Le soprano de la 1re mesure est libre, mais le moteur partagé n'accepte
  // qu'UN soprano imposé en tête : on l'essaie donc sur chaque note de l'accord
  // (fond., 3ce, 5te, [7e]) et l'on garde la 1re conduite qui aboutit. La basse
  // de la 1re mesure reste épinglée à `bassPc0` (doigté, ou renversement imposé
  // par le gabarit) ; les autres mesures gardent la basse de leur chiffrage.
  let voiced: VoicedMeasure[] | null = null;
  for (const firstSopranoPc of ch0.tones) {
    const specs: SpecEntry[] = chords.map((ch, idx) => ({
      spec: ch.spec,
      firstSopranoPc: idx === 0 ? firstSopranoPc : 0,
      bassPc: idx === 0 ? bassPc0 : ch.bassPc,
    }));
    voiced = voiceProgression(specs, keyRoot, minor);
    if (voiced) break; // 1re conduite légale trouvée pour ce soprano de départ
  }
  if (!voiced) return null; // aucun soprano ne se conduit : combo écarté

  const toEntry = makeToEntry(tonalite, mode);

  const mesures: SATBMeasure[] = voiced.map(vm => ({
    soprano: toEntry(vm.soprano),
    alto:    toEntry(vm.alto),
    tenor:   toEntry(vm.tenor),
    bass:    toEntry(vm.bass),
  }));

  // Auto-filtrage : la solution doit passer le juge (école) contre elle-même
  // sans AUCUNE erreur ni avertissement noté (hors cross_relation), avec la
  // VRAIE signature (mineures « Xm »).
  const jugement = validateSATB(mesures as unknown as Measure[], tonalite, false, mesures as unknown as Measure[], "ecole");
  const fautes = jugement.filter(e => e.severity === "error");
  const avertsNotes = jugement.filter(e => e.severity === "warning" && e.type !== "cross_relation");
  if (fautes.length > 0 || avertsNotes.length > 0) return null; // combo écarté

  const dotKeys: string[][] = mesures.map(m => [
    `${m.bass.name}:${m.bass.octave}`,
    `${m.tenor.name}:${m.tenor.octave}`,
    `${m.alto.name}:${m.alto.octave}`,
    `${m.soprano.name}:${m.soprano.octave}`,
  ]);
  const accords = chords.map(ch => ch.displayName);

  const rules = ["Tessitures SATB respectées","Mouvement conjoint privilégié","Accords complets, doublures réglées"];
  if (template.symboles.some(d => d.includes("V"))) rules.push("Sensible résolue vers la tonique");
  if (template.symboles.some(d => d.includes("7"))) rules.push("Septième résolue par degré conjoint");
  if (template.symboles.some(d => d.startsWith("b"))) rules.push("Accord emprunté utilisé");

  return {
    template,
    tonalite,
    mode,
    doigte,
    accords,
    labels: template.symboles,
    mesures,
    solution: mesures,
    dotKeys,
    lilypondCode: generateLilyPond(mesures, tonalite, mode),
    reglesAppliquees: rules,
  };
}

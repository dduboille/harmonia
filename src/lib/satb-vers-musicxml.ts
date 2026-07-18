/**
 * lib/satb-vers-musicxml.ts
 * Harmonia — Sérialise l'état de l'éditeur SATB (une suite de `Measure`) en
 * MusicXML grand staff : une PARTIE, DEUX portées (staff 1 = clé de Sol pour
 * soprano+alto, staff 2 = clé de Fa pour ténor+basse), quatre voix en rondes
 * (4/4), une mesure d'exercice = une mesure gravée. Séparation des voix par
 * <backup> pour qu'elles attaquent toutes au même instant.
 *
 * De ce MusicXML découle la gravure Verovio de l'éditeur (clic sur note,
 * surlignage de sélection, fautes colorées) — le pendant SATB de
 * `piece-vers-musicxml.ts`, son grand frère côté atelier de composition.
 *
 * Pas de tempo explicite : le défaut Verovio (120 BPM) est le contrat
 * d'appariement (une ronde = 2000 ms), verrouillé par verovio-appariement.test.
 */

import { decoderNote, GLYPHE_ALTERATION as GLYPHE, armureDe as armure } from "@/lib/note-musicxml";
import type { Measure, NoteEntry, Voice } from "@/lib/satb-rules";

// Résolution : une noire = 1 division → une ronde vaut 4. La valeur exacte est
// indifférente pour l'appariement MIDI (l'onset dépend du tempo et du chiffrage,
// pas des <divisions>), on prend la plus simple.
const DIVISIONS = 1;
const RONDE = 4 * DIVISIONS;

// Numéro de voix, portée et hampe par voix SATB. Numéros DISTINCTS entre les
// deux portées (1/2 puis 5/6) pour que le graveur ne confonde jamais les voix.
// Hampes : S/T vers le haut, A/B vers le bas (convention du chœur à quatre voix ;
// sans effet sur les rondes, mais posée pour l'homogénéité avec le grand frère).
const CONFIG: Record<Voice, { voix: string; portee: number; hampe: "up" | "down" }> = {
  soprano: { voix: "1", portee: 1, hampe: "up" },
  alto: { voix: "2", portee: 1, hampe: "down" },
  tenor: { voix: "5", portee: 2, hampe: "up" },
  bass: { voix: "6", portee: 2, hampe: "down" },
};

// Ordre d'émission des voix dans la mesure : du haut vers le bas.
const ORDRE: Voice[] = ["soprano", "alto", "tenor", "bass"];

// Décodage des hauteurs, glyphe d'altération et armure : primitives partagées avec
// le graveur du contrepoint (lib/note-musicxml.ts), pour une orthographe unique.

/** Un <note> (ou un silence de ronde si la case est vide) pour une voix. */
function noteXML(entry: NoteEntry, voix: string, portee: number, hampe: string, attendu: Record<string, number>): string {
  if (entry.name === null) {
    return `<note><rest/><duration>${RONDE}</duration><voice>${voix}</voice><type>whole</type><staff>${portee}</staff></note>`;
  }
  const { step, alter } = decoderNote(entry.name);
  const alterXML = alter !== 0 ? `<alter>${alter}</alter>` : "";
  const pitch = `<pitch><step>${step}</step>${alterXML}<octave>${entry.octave}</octave></pitch>`;
  // Altération affichée seulement si elle contredit l'armure (armure vide ⇒ toute
  // altération est écrite ; note conforme à l'armure ⇒ rien à afficher).
  const accidental = alter !== (attendu[step] ?? 0) ? `<accidental>${GLYPHE[alter]}</accidental>` : "";
  return (
    `<note>${pitch}<duration>${RONDE}</duration><voice>${voix}</voice><type>whole</type>` +
    `${accidental}<stem>${hampe}</stem><staff>${portee}</staff></note>`
  );
}

function attributsXML(fifths: number): string {
  return (
    `<attributes><divisions>${DIVISIONS}</divisions>` +
    `<key><fifths>${fifths}</fifths></key>` +
    `<time><beats>4</beats><beat-type>4</beat-type></time>` +
    `<staves>2</staves>` +
    `<clef number="1"><sign>G</sign><line>2</line></clef>` +
    `<clef number="2"><sign>F</sign><line>4</line></clef></attributes>`
  );
}

/**
 * @param measures        état de l'éditeur (une entrée par mesure d'exercice)
 * @param keySignature    « C », « D », « Bm »… (ignoré si showKeySignature=false)
 * @param showKeySignature grave l'armure ; sinon <fifths>0</fifths> et altérations
 *                         écrites sur chaque note altérée
 */
export function satbVersMusicXML(
  measures: Measure[],
  keySignature = "C",
  showKeySignature = true,
): string {
  const { fifths, attendu } = showKeySignature ? armure(keySignature) : { fifths: 0, attendu: {} };

  // Le <backup> ramène le curseur au début de la mesure entre chaque voix (pas
  // après la dernière) : les quatre voix commencent au même instant.
  const backup = `<backup><duration>${RONDE}</duration></backup>`;

  const mesures = measures
    .map((mesure, i) => {
      const attrs = i === 0 ? attributsXML(fifths) : "";
      const voix = ORDRE.map((v) => {
        const cfg = CONFIG[v];
        return noteXML(mesure[v], cfg.voix, cfg.portee, cfg.hampe, attendu);
      });
      return `<measure number="${i + 1}">${attrs}${voix.join(backup)}</measure>`;
    })
    .join("");

  return (
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<score-partwise version="4.0">` +
    `<part-list><score-part id="P1"><part-name>Harmonia</part-name></score-part></part-list>` +
    `<part id="P1">${mesures}</part>` +
    `</score-partwise>`
  );
}

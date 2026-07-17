/**
 * lib/squelette-vers-musicxml.ts
 * Harmonia — Sérialise un squelette RÉALISÉ (des `VoicedMeasure` regroupés par mesure)
 * en MusicXML grand staff : une PARTIE, DEUX portées (staff 1 = clé de Sol pour
 * soprano+alto, staff 2 = clé de Fa pour ténor+basse), 4/4. Chaque mesure porte
 * UN accord (rondes) ou DEUX (deux blanches) ; une mesure vide reçoit des silences.
 *
 * L'épellation des MIDI suit l'armure (midi-vers-musicxml.ts, l'orthographieur partagé
 * avec la composition guidée) : pas de 3e logique divergente. Séparation des voix par
 * <backup> pour qu'elles attaquent toutes au même instant.
 *
 * Pas de tempo explicite : le défaut Verovio (120 BPM) est le contrat d'appariement —
 * une ronde en 4/4 dure 2000 ms, une blanche 1000 ms (verrouillé par
 * verovio-appariement.test).
 */

import { armure, nomsPourArmure, decoderMidi, GLYPHE } from "@/lib/midi-vers-musicxml";
import type { VoicedMeasure } from "@/lib/voicing-ecole";

// Résolution : une noire = 1 division → ronde = 4, blanche = 2. La valeur exacte est
// indifférente pour l'appariement MIDI (l'onset dépend du tempo, pas des divisions).
const DIVISIONS = 1;
const RONDE = 4 * DIVISIONS;
const BLANCHE = 2 * DIVISIONS;

// Voix / portée / hampe par voix SATB. Numéros DISTINCTS entre les deux portées
// (1/2 puis 5/6) pour que le graveur ne confonde jamais les voix.
const VOIX_CFG = [
  { champ: "soprano", voix: "1", portee: 1, hampe: "up" },
  { champ: "alto", voix: "2", portee: 1, hampe: "down" },
  { champ: "tenor", voix: "5", portee: 2, hampe: "up" },
  { champ: "bass", voix: "6", portee: 2, hampe: "down" },
] as const;

/** Un <note> chanté, épelé au diapason de l'armure. */
function noteXML(
  midi: number, voix: string, portee: number, hampe: string,
  type: string, duree: number, noms: string[], attendu: Record<string, number>,
): string {
  const { step, alter, octave } = decoderMidi(midi, noms);
  const alterXML = alter !== 0 ? `<alter>${alter}</alter>` : "";
  const pitch = `<pitch><step>${step}</step>${alterXML}<octave>${octave}</octave></pitch>`;
  // Altération affichée seulement si elle contredit l'armure.
  const accidental = alter !== (attendu[step] ?? 0) ? `<accidental>${GLYPHE[alter]}</accidental>` : "";
  return (
    `<note>${pitch}<duration>${duree}</duration><voice>${voix}</voice><type>${type}</type>` +
    `${accidental}<stem>${hampe}</stem><staff>${portee}</staff></note>`
  );
}

/** Une ronde de silence (mesure sans accord). */
function silenceXML(voix: string, portee: number): string {
  return `<note><rest/><duration>${RONDE}</duration><voice>${voix}</voice><type>whole</type><staff>${portee}</staff></note>`;
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
 * @param mesures       les voicings regroupés par mesure (0, 1 ou 2 accords chacune)
 * @param keySignature  « C », « Am », « Db »… décide l'armure et l'orthographe
 */
export function squeletteVersMusicXML(mesures: VoicedMeasure[][], keySignature = "C"): string {
  const { fifths, attendu } = armure(keySignature);
  const noms = nomsPourArmure(fifths);

  // Le <backup> ramène le curseur au début de la mesure entre chaque voix (pas après
  // la dernière) : les quatre voix commencent au même instant.
  const backup = `<backup><duration>${RONDE}</duration></backup>`;

  const corps = mesures
    .map((bloc, i) => {
      const attrs = i === 0 ? attributsXML(fifths) : "";
      const voix = VOIX_CFG.map((cfg) => {
        if (bloc.length === 0) return silenceXML(cfg.voix, cfg.portee);
        if (bloc.length === 1) {
          return noteXML(bloc[0][cfg.champ], cfg.voix, cfg.portee, cfg.hampe, "whole", RONDE, noms, attendu);
        }
        // Deux accords → deux blanches.
        return bloc
          .slice(0, 2)
          .map((v) => noteXML(v[cfg.champ], cfg.voix, cfg.portee, cfg.hampe, "half", BLANCHE, noms, attendu))
          .join("");
      });
      return `<measure number="${i + 1}">${attrs}${voix.join(backup)}</measure>`;
    })
    .join("");

  return (
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<score-partwise version="4.0">` +
    `<part-list><score-part id="P1"><part-name>Harmonia</part-name></score-part></part-list>` +
    `<part id="P1">${corps}</part>` +
    `</score-partwise>`
  );
}

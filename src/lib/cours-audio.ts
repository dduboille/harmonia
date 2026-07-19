/**
 * lib/cours-audio.ts
 * Harmonia — Convention d'octave pour l'AUDIO des exemples gravés des cours.
 *
 * Les données musicales des cours (Cours42, 43, 45, 46…) sont écrites à la
 * convention de GRAVURE : « Do4 » = do central = midi 60. Or `PianoPlayer`
 * interprète ses specs « Nom:octave » une octave PLUS HAUT : `toMidiNote`
 * ajoute 1 à l'octave (« Do:4 » → C5 = midi 72). Le studio applique déjà la
 * correction (voir `specDepuisMidi` dans lib/studio-playback.ts : octave
 * standard − 1) — les cours doivent faire de même, sinon tout sonne à
 * l'octave supérieure de la partition affichée.
 *
 * Ces deux helpers font l'UNIQUE conversion jeton gravé → audio :
 *   specAudio("Do3")  → "Do:2"  (PianoPlayer jouera C3 = midi 48)
 *   noteAudio("Sol#4") → { nom: "Sol#", octave: 3 }  (pour playNote)
 *
 * On ne touche NI à PianoPlayer (d'autres écrans dépendent de son comportement)
 * NI aux données de gravure : seule la couche audio des cours passe par ici.
 */

/** « Sol#4 » (gravure, Do4 = do central) → nom + octave pour PianoPlayer.playNote. */
export function noteAudio(tok: string): { nom: string; octave: number } {
  return { nom: tok.slice(0, -1), octave: parseInt(tok.slice(-1), 10) - 1 };
}

/** « Sol#4 » (gravure) → spec « Sol#:3 » pour PianoPlayer.playVoicing / playChordSpecs. */
export function specAudio(tok: string): string {
  const { nom, octave } = noteAudio(tok);
  return `${nom}:${octave}`;
}

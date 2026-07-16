/**
 * lib/conduite-voix.ts
 * Harmonia — Contrôle de la CONDUITE DES VOIX d'un choral SATB (pur, testé).
 *
 * Les voix ont des rythmes indépendants : on ne peut pas comparer « temps par temps ».
 * On reconstruit donc les VERTICALITÉS — ce qui sonne dans chaque voix à chaque instant
 * d'attaque — puis on applique les règles classiques (parallèles, directes, croisements,
 * écart, tessiture). Chaque faute pointe la ou les notes en cause, pour le surlignage.
 */

import { capaciteMesure, type Curseur } from "./composition-edition";
import {
  dureeEnDivisions, midiDeHauteur, ORDRE_VOIX,
  type Piece, type NomVoix,
} from "./piece-model";

/** Une note qui sonne dans une voix à un instant, avec sa position pour le pointage. */
export interface SonVoix {
  midi: number;
  position: Curseur;   // { mesure, voix, note }
  attaque: boolean;    // la note commence-t-elle exactement à cet instant ?
}

/** Une verticalité : ce qui sonne dans chaque voix à un instant d'attaque. */
export interface Verticalite {
  onset: number;                            // ticks depuis le début de la pièce
  mesure: number;                           // mesure de cet instant (0-based)
  sons: Partial<Record<NomVoix, SonVoix>>;  // voix absente = silence / pas encore entrée
}

/** Reconstruit les verticalités aux instants d'attaque de note (toutes voix confondues). */
export function verticalites(piece: Piece): Verticalite[] {
  const capacite = capaciteMesure(piece.chiffrage);
  interface NoteAbs { onset: number; fin: number; midi: number; position: Curseur; }
  const parVoix = new Map<NomVoix, NoteAbs[]>();
  const attaques = new Set<number>();

  for (const voix of ORDRE_VOIX) {
    const notes: NoteAbs[] = [];
    piece.mesures.forEach((m, mesure) => {
      let t = mesure * capacite;
      m.voix[voix].forEach((ev, note) => {
        const d = dureeEnDivisions(ev.duree);
        if (ev.type === "note") {
          notes.push({ onset: t, fin: t + d, midi: midiDeHauteur(ev.hauteurs[0]), position: { mesure, voix, note } });
          attaques.add(t);
        }
        t += d;
      });
    });
    parVoix.set(voix, notes);
  }

  return [...attaques].sort((a, b) => a - b).map((onset) => {
    const sons: Partial<Record<NomVoix, SonVoix>> = {};
    for (const voix of ORDRE_VOIX) {
      const n = parVoix.get(voix)!.find((x) => x.onset <= onset && onset < x.fin);
      if (n) sons[voix] = { midi: n.midi, position: n.position, attaque: n.onset === onset };
    }
    return { onset, mesure: Math.floor(onset / capacite), sons };
  });
}

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

export type TypeFaute =
  | "quintes-paralleles" | "octaves-paralleles"
  | "quinte-directe" | "octave-directe"
  | "croisement" | "ecart" | "tessiture";

export interface Faute {
  type: TypeFaute;
  severite: "faute" | "avertissement";
  message: string;
  mesure: number;       // 0-based ; l'affichage ajoute 1
  positions: Curseur[]; // 1 à 2 notes fautives
}

/** Ambitus (midi) et libellés de chaque voix. */
const AMBITUS: Record<NomVoix, { min: number; max: number }> = {
  soprano: { min: 60, max: 79 }, alto: { min: 55, max: 72 },
  tenor: { min: 48, max: 67 }, basse: { min: 40, max: 60 },
};
const NOM: Record<NomVoix, string> = { soprano: "Soprano", alto: "Alto", tenor: "Ténor", basse: "Basse" };

/** Paires voisines (haut, bas) pour croisement et écart. */
const VOISINES: [NomVoix, NomVoix][] = [["soprano", "alto"], ["alto", "tenor"], ["tenor", "basse"]];
const MSG_CROISEMENT: Record<string, string> = {
  "soprano-alto": "Soprano sous l'alto",
  "alto-tenor": "Alto sous le ténor",
  "tenor-basse": "Ténor sous la basse",
};

export function detecterFautes(piece: Piece): Faute[] {
  const fautes: Faute[] = [];
  const verts = verticalites(piece);

  // ── Tessiture : par note (indépendant des verticalités, pas de doublon) ──
  for (const voix of ORDRE_VOIX) {
    piece.mesures.forEach((m, mesure) => {
      m.voix[voix].forEach((ev, note) => {
        if (ev.type !== "note") return;
        const midi = midiDeHauteur(ev.hauteurs[0]);
        if (midi < AMBITUS[voix].min || midi > AMBITUS[voix].max) {
          fautes.push({ type: "tessiture", severite: "avertissement", message: `${NOM[voix]} hors tessiture`, mesure, positions: [{ mesure, voix, note }] });
        }
      });
    });
  }

  // ── Croisement et écart : par verticalité (au moins une des deux voix attaque) ──
  for (const v of verts) {
    for (const [haut, bas] of VOISINES) {
      const a = v.sons[haut], b = v.sons[bas];
      if (!a || !b) continue;
      if (!a.attaque && !b.attaque) continue; // ne signaler qu'une fois, à l'attaque
      if (a.midi < b.midi) {
        fautes.push({ type: "croisement", severite: "faute", message: MSG_CROISEMENT[`${haut}-${bas}`], mesure: v.mesure, positions: [a.position, b.position] });
      }
      if ((haut === "soprano" || haut === "alto") && a.midi - b.midi > 12) {
        fautes.push({ type: "ecart", severite: "avertissement", message: `${NOM[haut]}–${NOM[bas]} : écart > octave`, mesure: v.mesure, positions: [a.position, b.position] });
      }
    }
  }

  return fautes;
}

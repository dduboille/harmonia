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

/** Ce qui sonne dans une voix à un instant : les EXTRÊMES du bloc, et tout pour la tessiture. */
export interface SonVoix {
  haut: number;        // midi le plus aigu (== bas pour une note simple)
  bas: number;         // midi le plus grave
  midis: number[];     // toutes les hauteurs, dans l'ordre d'empilement
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
  interface NoteAbs { onset: number; fin: number; haut: number; bas: number; midis: number[]; position: Curseur; }
  const parVoix = new Map<NomVoix, NoteAbs[]>();
  const attaques = new Set<number>();

  for (const voix of ORDRE_VOIX) {
    const notes: NoteAbs[] = [];
    piece.mesures.forEach((m, mesure) => {
      let t = mesure * capacite;
      m.voix[voix].forEach((ev, note) => {
        const d = dureeEnDivisions(ev.duree);
        if (ev.type === "note") {
          const midis = ev.hauteurs.map(midiDeHauteur);
          notes.push({
            onset: t, fin: t + d,
            haut: Math.max(...midis), bas: Math.min(...midis), midis,
            position: { mesure, voix, note },
          });
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
      if (n) sons[voix] = { haut: n.haut, bas: n.bas, midis: n.midis, position: n.position, attaque: n.onset === onset };
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
const LABEL: Record<NomVoix, string> = { soprano: "S", alto: "A", tenor: "T", basse: "B" };
const PAIRES: [NomVoix, NomVoix][] = [
  ["soprano", "alto"], ["soprano", "tenor"], ["soprano", "basse"],
  ["alto", "tenor"], ["alto", "basse"], ["tenor", "basse"],
];

/** La LIGNE mélodique d'une voix : son extrême EXTÉRIEUR — le grave pour la basse, l'aigu sinon. */
function ligne(voix: NomVoix, son: SonVoix): number {
  return voix === "basse" ? son.bas : son.haut;
}

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
        const hors = ev.hauteurs.some((h) => {
          const midi = midiDeHauteur(h);
          return midi < AMBITUS[voix].min || midi > AMBITUS[voix].max;
        });
        if (hors) {
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
      if (a.bas < b.haut) {
        fautes.push({ type: "croisement", severite: "faute", message: MSG_CROISEMENT[`${haut}-${bas}`], mesure: v.mesure, positions: [a.position, b.position] });
      }
      if ((haut === "soprano" || haut === "alto") && a.bas - b.haut > 12) {
        fautes.push({ type: "ecart", severite: "avertissement", message: `${NOM[haut]}–${NOM[bas]} : écart > octave`, mesure: v.mesure, positions: [a.position, b.position] });
      }
    }
  }

  // ── Parallèles (toutes paires) et directes (S–B) : entre verticalités consécutives ──
  for (let k = 1; k < verts.length; k++) {
    const prev = verts[k - 1], cur = verts[k];

    for (const [v1, v2] of PAIRES) {
      const p1 = prev.sons[v1], p2 = prev.sons[v2], c1 = cur.sons[v1], c2 = cur.sons[v2];
      if (!p1 || !p2 || !c1 || !c2) continue;
      const d1 = ligne(v1, c1) - ligne(v1, p1), d2 = ligne(v2, c2) - ligne(v2, p2);
      const memeSens = d1 !== 0 && d2 !== 0 && Math.sign(d1) === Math.sign(d2);
      if (!memeSens) continue;
      const avant = Math.abs(ligne(v1, p1) - ligne(v2, p2)) % 12;
      const apres = Math.abs(ligne(v1, c1) - ligne(v2, c2)) % 12;
      if (avant === 7 && apres === 7) {
        fautes.push({ type: "quintes-paralleles", severite: "faute", message: `Quintes ‖ ${LABEL[v1]}–${LABEL[v2]}`, mesure: cur.mesure, positions: [c1.position, c2.position] });
      }
      if (avant === 0 && apres === 0) {
        fautes.push({ type: "octaves-paralleles", severite: "faute", message: `Octaves ‖ ${LABEL[v1]}–${LABEL[v2]}`, mesure: cur.mesure, positions: [c1.position, c2.position] });
      }
    }

    const ps = prev.sons.soprano, pb = prev.sons.basse, cs = cur.sons.soprano, cb = cur.sons.basse;
    if (ps && pb && cs && cb) {
      const ds = cs.haut - ps.haut, db = cb.bas - pb.bas;
      const memeSens = ds !== 0 && db !== 0 && Math.sign(ds) === Math.sign(db);
      if (memeSens && Math.abs(ds) > 2) {
        const avant = Math.abs(ps.haut - pb.bas) % 12;
        const apres = Math.abs(cs.haut - cb.bas) % 12;
        if (apres === 7 && avant !== 7) {
          fautes.push({ type: "quinte-directe", severite: "avertissement", message: "Quinte directe S–B", mesure: cur.mesure, positions: [cs.position, cb.position] });
        }
        if (apres === 0 && avant !== 0) {
          fautes.push({ type: "octave-directe", severite: "avertissement", message: "Octave directe S–B", mesure: cur.mesure, positions: [cs.position, cb.position] });
        }
      }
    }
  }

  return fautes;
}

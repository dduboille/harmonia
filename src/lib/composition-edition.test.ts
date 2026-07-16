import { describe, it, expect } from "vitest";
import { parseMusicXML, TPQ } from "./musicxml-parse";
import { pieceVersMusicXML } from "./piece-vers-musicxml";
import { type Piece, type Note, type Hauteur, type Evenement, type Silence, type LettreNote } from "./piece-model";
import {
  capaciteMesure, dureePlacee, decouperEnSilences, voixActives,
  inserer, effacer, positionEcriture, positions, naviguer,
  transposerDegre, transposerOctave, remplacerHauteur, remplacerDuree,
  supprimerNote, onsetMsMidiDeSelection, trouverPosition, type Curseur,
  empilerHauteur, retirerDerniereHauteur,
} from "./composition-edition";

const DO5: Hauteur = { lettre: "C", alteration: 0, octave: 5 };
function noteN(base: Note["duree"]["base"], points: 0 | 1 | 2 = 0): Note {
  return { type: "note", hauteurs: [DO5], duree: { base, points } };
}
/** Une pièce d'édition vide : 8 mesures aux QUATRE voix vides. */
function pieceEdition(): Piece {
  return {
    armure: 0, chiffrage: { temps: 4, unite: 4 },
    mesures: Array.from({ length: 8 }, () => ({
      voix: { soprano: [], alto: [], tenor: [], basse: [] },
    })),
  };
}
const CURSEUR0: Curseur = { mesure: 0, voix: "soprano", note: "fin" };

describe("capaciteMesure / dureePlacee", () => {
  it("une mesure 4/4 vaut 4 noires", () => {
    expect(capaciteMesure({ temps: 4, unite: 4 })).toBe(4 * 48);
    expect(capaciteMesure({ temps: 3, unite: 4 })).toBe(3 * 48);
    expect(capaciteMesure({ temps: 6, unite: 8 })).toBe(6 * 24);
  });
  it("dureePlacee somme les durées posées", () => {
    expect(dureePlacee([noteN("noire"), noteN("croche")])).toBe(48 + 24);
  });
});

describe("decouperEnSilences — combler un vide en valeurs standard", () => {
  it("3 temps → une blanche pointée", () => {
    const s = decouperEnSilences(3 * 48);
    expect(s.map((x) => x.duree)).toEqual([{ base: "blanche", points: 1 }]);
  });
  it("la somme des silences vaut le vide", () => {
    const total = decouperEnSilences(3 * 48 + 24).reduce((t, x) => {
      const q: Record<string, number> = { ronde: 192, blanche: 96, noire: 48, croche: 24, double: 12 };
      return t + q[x.duree.base] * (x.duree.points === 1 ? 1.5 : 1);
    }, 0);
    expect(total).toBe(3 * 48 + 24);
  });
});

describe("voixActives — masquer les voix sans note", () => {
  it("ne retient que les voix qui ont une note", () => {
    const p = pieceEdition();
    p.mesures[0].voix.soprano = [noteN("noire")];
    p.mesures[3].voix.basse = [noteN("ronde")];
    expect(voixActives(p)).toEqual(["soprano", "basse"]);
  });
  it("une pièce entièrement vide n'a aucune voix active", () => {
    expect(voixActives(pieceEdition())).toEqual([]);
  });
});

describe("inserer", () => {
  it("insère une note qui tient et garde le curseur sur la mesure", () => {
    const { piece, curseur } = inserer(pieceEdition(), CURSEUR0, noteN("noire"));
    expect(piece.mesures[0].voix.soprano).toHaveLength(1);
    expect(curseur).toEqual({ mesure: 0, voix: "soprano", note: "fin" });
  });
  it("quand la mesure se remplit, le curseur passe à la suivante", () => {
    let p = pieceEdition();
    let c = CURSEUR0;
    for (let i = 0; i < 4; i++) ({ piece: p, curseur: c } = inserer(p, c, noteN("noire")));
    expect(p.mesures[0].voix.soprano).toHaveLength(4);
    expect(c).toEqual({ mesure: 1, voix: "soprano", note: "fin" });
  });
  it("refuse une note trop longue pour la place restante", () => {
    let p = pieceEdition();
    let c = CURSEUR0;
    ({ piece: p, curseur: c } = inserer(p, c, noteN("blanche", 1))); // 3 temps
    const avant = p;
    const res = inserer(p, c, noteN("ronde")); // 4 temps, il n'en reste qu'un
    expect(res.piece).toBe(avant);             // inchangé
    expect(res.piece.mesures[0].voix.soprano).toHaveLength(1);
  });
  it("insérer dans l'alto ne touche pas le soprano", () => {
    let p = pieceEdition();
    ({ piece: p } = inserer(p, { mesure: 0, voix: "soprano", note: "fin" }, noteN("noire")));
    ({ piece: p } = inserer(p, { mesure: 0, voix: "alto", note: "fin" }, noteN("blanche")));
    expect(p.mesures[0].voix.soprano).toHaveLength(1);
    expect(p.mesures[0].voix.alto).toHaveLength(1);
  });
});

describe("positionEcriture — où écrit chaque voix", () => {
  it("une voix vide écrit à la première mesure", () => {
    expect(positionEcriture(pieceEdition(), "alto")).toBe(0);
  });
  it("chaque voix a sa propre position : soprano rempli n'avance pas l'alto", () => {
    // On remplit la mesure 0 au soprano (une ronde) ; l'alto, lui, reste en mesure 0.
    let p = pieceEdition();
    ({ piece: p } = inserer(p, { mesure: 0, voix: "soprano", note: "fin" }, noteN("ronde")));
    expect(positionEcriture(p, "soprano")).toBe(1); // sa mesure 0 est pleine
    expect(positionEcriture(p, "alto")).toBe(0);    // l'alto écrit toujours en mesure 0
  });
  it("saute les mesures pleines jusqu'à la première place libre", () => {
    let p = pieceEdition();
    ({ piece: p } = inserer(p, { mesure: 0, voix: "tenor", note: "fin" }, noteN("ronde")));
    ({ piece: p } = inserer(p, { mesure: 1, voix: "tenor", note: "fin" }, noteN("ronde")));
    expect(positionEcriture(p, "tenor")).toBe(2);
  });
  it("toutes les mesures pleines : reste sur la dernière", () => {
    let p = pieceEdition();
    for (let i = 0; i < p.mesures.length; i++) {
      ({ piece: p } = inserer(p, { mesure: i, voix: "basse", note: "fin" }, noteN("ronde")));
    }
    expect(positionEcriture(p, "basse")).toBe(p.mesures.length - 1);
  });
});

describe("effacer", () => {
  it("retire la dernière note posée", () => {
    let p = pieceEdition();
    let c = CURSEUR0;
    ({ piece: p, curseur: c } = inserer(p, c, noteN("noire")));
    ({ piece: p, curseur: c } = inserer(p, c, noteN("noire")));
    ({ piece: p, curseur: c } = effacer(p, c));
    expect(p.mesures[0].voix.soprano).toHaveLength(1);
  });
  it("sur une mesure vide, recule et efface la dernière de la précédente", () => {
    let p = pieceEdition();
    let c = CURSEUR0;
    for (let i = 0; i < 4; i++) ({ piece: p, curseur: c } = inserer(p, c, noteN("noire")));
    // c est sur la mesure 1 (vide) ; effacer doit revenir à la mesure 0 et retirer une note.
    ({ piece: p, curseur: c } = effacer(p, c));
    expect(c.mesure).toBe(0);
    expect(p.mesures[0].voix.soprano).toHaveLength(3);
  });
});

describe("positions — notes navigables d'une voix", () => {
  it("énumère les notes dans l'ordre, à travers les mesures, en ignorant silences et mesures vides", () => {
    let p = pieceEdition();
    p.mesures[0].voix.soprano = [noteN("noire"), noteN("noire")];
    p.mesures[2].voix.soprano = [{ type: "silence", duree: { base: "noire", points: 0 } }, noteN("noire")];
    expect(positions(p, "soprano")).toEqual([
      { mesure: 0, note: 0 },
      { mesure: 0, note: 1 },
      { mesure: 2, note: 1 },
    ]);
  });
  it("une voix sans note donne une liste vide", () => {
    expect(positions(pieceEdition(), "alto")).toEqual([]);
  });
});

describe("naviguer — deplacer la selection", () => {
  it("depuis fin, la fleche gauche selectionne la derniere note", () => {
    let p = pieceEdition();
    p.mesures[0].voix.soprano = [noteN("noire"), noteN("noire")];
    const c: Curseur = { mesure: 1, voix: "soprano", note: "fin" };
    expect(naviguer(p, c, -1)).toEqual({ mesure: 0, voix: "soprano", note: 1 });
  });
  it("la fleche droite avance de note en note puis revient a fin", () => {
    let p = pieceEdition();
    p.mesures[0].voix.soprano = [noteN("noire"), noteN("noire")];
    const c0: Curseur = { mesure: 0, voix: "soprano", note: 0 };
    const c1 = naviguer(p, c0, 1);
    expect(c1).toEqual({ mesure: 0, voix: "soprano", note: 1 });
    expect(naviguer(p, c1, 1)).toEqual({ mesure: 0, voix: "soprano", note: "fin" });
  });
  it("la fleche gauche sur la premiere note y reste", () => {
    let p = pieceEdition();
    p.mesures[0].voix.soprano = [noteN("noire")];
    const c: Curseur = { mesure: 0, voix: "soprano", note: 0 };
    expect(naviguer(p, c, -1)).toEqual({ mesure: 0, voix: "soprano", note: 0 });
  });
  it("sur une voix sans note, reste en fin", () => {
    const c: Curseur = { mesure: 0, voix: "alto", note: "fin" };
    expect(naviguer(pieceEdition(), c, -1)).toEqual({ mesure: 0, voix: "alto", note: "fin" });
  });
});

describe("transposerDegre / transposerOctave", () => {
  const selNote0 = (base = "noire" as const): { p: Piece; c: Curseur } => {
    const p = pieceEdition();
    p.mesures[0].voix.soprano = [{ type: "note", hauteurs: [{ lettre: "C", alteration: 0, octave: 5 }], duree: { base, points: 0 } }];
    return { p, c: { mesure: 0, voix: "soprano", note: 0 } };
  };
  it("monte d'un degre diatonique : C5 -> D5", () => {
    const { p, c } = selNote0();
    const h = transposerDegre(p, c, 1).mesures[0].voix.soprano[0] as Note;
    expect(h.hauteurs[0]).toEqual({ lettre: "D", alteration: 0, octave: 5 });
  });
  it("passe l'octave en montant depuis B : B4 -> C5", () => {
    const p = pieceEdition();
    p.mesures[0].voix.soprano = [{ type: "note", hauteurs: [{ lettre: "B", alteration: 0, octave: 4 }], duree: { base: "noire", points: 0 } }];
    const c: Curseur = { mesure: 0, voix: "soprano", note: 0 };
    expect((transposerDegre(p, c, 1).mesures[0].voix.soprano[0] as Note).hauteurs[0])
      .toEqual({ lettre: "C", alteration: 0, octave: 5 });
  });
  it("efface l'alteration en bougeant sur la portee : F#5 monte -> G5 (becarre)", () => {
    const p = pieceEdition();
    p.mesures[0].voix.soprano = [{ type: "note", hauteurs: [{ lettre: "F", alteration: 1, octave: 5 }], duree: { base: "noire", points: 0 } }];
    const c: Curseur = { mesure: 0, voix: "soprano", note: 0 };
    expect((transposerDegre(p, c, 1).mesures[0].voix.soprano[0] as Note).hauteurs[0])
      .toEqual({ lettre: "G", alteration: 0, octave: 5 });
  });
  it("transposerOctave monte d'une octave, borne a 7", () => {
    const { p, c } = selNote0();
    expect((transposerOctave(p, c, 1).mesures[0].voix.soprano[0] as Note).hauteurs[0].octave).toBe(6);
    const p7 = pieceEdition();
    p7.mesures[0].voix.soprano = [{ type: "note", hauteurs: [{ lettre: "C", alteration: 0, octave: 7 }], duree: { base: "noire", points: 0 } }];
    expect((transposerOctave(p7, c, 1).mesures[0].voix.soprano[0] as Note).hauteurs[0].octave).toBe(7);
  });
  it("sans effet en mode fin", () => {
    const { p } = selNote0();
    const c: Curseur = { mesure: 0, voix: "soprano", note: "fin" };
    expect(transposerDegre(p, c, 1)).toBe(p);
  });
});

describe("remplacerHauteur / remplacerDuree", () => {
  const selDo5 = (base = "noire" as const, points: 0 | 1 | 2 = 0): { p: Piece; c: Curseur } => {
    const p = pieceEdition();
    p.mesures[0].voix.soprano = [
      { type: "note", hauteurs: [{ lettre: "C", alteration: 0, octave: 5 }], duree: { base, points } },
      { type: "note", hauteurs: [{ lettre: "E", alteration: 0, octave: 5 }], duree: { base: "noire", points: 0 } },
    ];
    return { p, c: { mesure: 0, voix: "soprano", note: 0 } };
  };
  it("remplace lettre + alteration, garde octave et duree", () => {
    const { p, c } = selDo5("noire");
    const n0 = remplacerHauteur(p, c, "G", 1).mesures[0].voix.soprano[0] as Note;
    expect(n0.hauteurs[0]).toEqual({ lettre: "G", alteration: 1, octave: 5 });
    expect(n0.duree).toEqual({ base: "noire", points: 0 });
    expect((remplacerHauteur(p, c, "G", 1).mesures[0].voix.soprano[1] as Note).hauteurs[0].lettre).toBe("E");
  });
  it("remplace la duree si elle tient (noire -> croche)", () => {
    const { p, c } = selDo5("noire");
    const n0 = remplacerDuree(p, c, { base: "croche", points: 0 }).mesures[0].voix.soprano[0] as Note;
    expect(n0.duree).toEqual({ base: "croche", points: 0 });
    expect(n0.hauteurs[0].lettre).toBe("C");
  });
  it("refuse la duree qui deborde la mesure (sans rien changer)", () => {
    const p = pieceEdition();
    p.mesures[0].voix.soprano = [noteN("noire"), noteN("noire"), noteN("noire"), noteN("noire")];
    const c: Curseur = { mesure: 0, voix: "soprano", note: 0 };
    expect(remplacerDuree(p, c, { base: "ronde", points: 0 })).toBe(p);
  });
  it("sans effet en mode fin", () => {
    const { p } = selDo5();
    const c: Curseur = { mesure: 0, voix: "soprano", note: "fin" };
    expect(remplacerHauteur(p, c, "G", 0)).toBe(p);
    expect(remplacerDuree(p, c, { base: "croche", points: 0 })).toBe(p);
  });
});

describe("supprimerNote — retirer la note selectionnee", () => {
  it("retire la note et selectionne la precedente", () => {
    const p = pieceEdition();
    p.mesures[0].voix.soprano = [noteN("noire"), noteN("noire"), noteN("noire")];
    const c: Curseur = { mesure: 0, voix: "soprano", note: 1 };
    const r = supprimerNote(p, c);
    expect(r.piece.mesures[0].voix.soprano).toHaveLength(2);
    expect(r.curseur).toEqual({ mesure: 0, voix: "soprano", note: 0 });
  });
  it("sur la premiere note, repasse en mode ajout", () => {
    const p = pieceEdition();
    p.mesures[0].voix.soprano = [noteN("noire")];
    const c: Curseur = { mesure: 0, voix: "soprano", note: 0 };
    const r = supprimerNote(p, c);
    expect(r.piece.mesures[0].voix.soprano).toHaveLength(0);
    expect(r.curseur.note).toBe("fin");
  });
  it("sans effet en mode fin", () => {
    const p = pieceEdition();
    const c: Curseur = { mesure: 0, voix: "soprano", note: "fin" };
    const r = supprimerNote(p, c);
    expect(r.piece).toBe(p);
    expect(r.curseur).toBe(c);
  });
});

describe("appariement Verovio : onset/midi <-> position", () => {
  it("onsetMsMidiDeSelection donne le temps et le MIDI de la note selectionnee", () => {
    const p = pieceEdition();
    p.mesures[0].voix.soprano = [
      { type: "note", hauteurs: [{ lettre: "C", alteration: 0, octave: 5 }], duree: { base: "noire", points: 0 } },
      { type: "note", hauteurs: [{ lettre: "D", alteration: 0, octave: 5 }], duree: { base: "noire", points: 0 } },
    ];
    const c: Curseur = { mesure: 0, voix: "soprano", note: 1 };
    const r = onsetMsMidiDeSelection(p, c)!;
    expect(r.midi).toBe(74);
    expect(r.onsetMs).toBeCloseTo(500, 0);
  });
  it("trouverPosition retrouve la note a partir de (onsetMs, midi)", () => {
    const p = pieceEdition();
    p.mesures[0].voix.soprano = [{ type: "note", hauteurs: [{ lettre: "C", alteration: 0, octave: 5 }], duree: { base: "noire", points: 0 } }];
    p.mesures[0].voix.basse = [{ type: "note", hauteurs: [{ lettre: "C", alteration: 0, octave: 3 }], duree: { base: "ronde", points: 0 } }];
    expect(trouverPosition(p, 0, 48)).toEqual({ mesure: 0, voix: "basse", note: 0 });
  });
  it("trouverPosition renvoie null si rien ne correspond", () => {
    expect(trouverPosition(pieceEdition(), 0, 60)).toBeNull();
  });
});

describe("aller-retour complet par le socle 2a", () => {
  it("une pièce composée par insertions se relit aux bons instants", () => {
    let p = pieceEdition();
    let c = CURSEUR0;
    for (const l of ["C", "D", "E", "F"] as Hauteur["lettre"][]) {
      ({ piece: p, curseur: c } = inserer(p, c, {
        type: "note", hauteurs: [{ lettre: l, alteration: 0, octave: 5 }], duree: { base: "noire", points: 0 },
      }));
    }
    const score = parseMusicXML(pieceVersMusicXML(p));
    const haut = score.notes.filter((x) => x.midi >= 72 && x.onset < 4 * TPQ).sort((a, b) => a.onset - b.onset);
    expect(haut.map((x) => x.onset)).toEqual([0, TPQ, 2 * TPQ, 3 * TPQ]);
  });
});

/** Une note simple (une seule hauteur). */
function noteSimple(lettre: LettreNote, octave: number): Note {
  return { type: "note", hauteurs: [{ lettre, alteration: 0, octave }], duree: { base: "noire", points: 0 } };
}

describe("empilerHauteur / retirerDerniereHauteur — l'accord dans une voix", () => {
  /** Une pièce d'une mesure 4/4, basse seule. */
  function pieceBasse(evs: Evenement[]): Piece {
    return {
      armure: 0, chiffrage: { temps: 4, unite: 4 },
      mesures: [{ voix: { soprano: [], alto: [], tenor: [], basse: evs } }],
    };
  }
  const selection: Curseur = { mesure: 0, voix: "basse", note: 0 };
  const ajout: Curseur = { mesure: 0, voix: "basse", note: "fin" };

  it("empile sur la note sélectionnée, ordre conservé", () => {
    const p = empilerHauteur(pieceBasse([noteSimple("C", 3)]), selection, "E", 0, 3);
    const n = p.mesures[0].voix.basse[0] as Note;
    expect(n.hauteurs.map((h) => h.lettre)).toEqual(["C", "E"]);
  });
  it("empile sur la DERNIÈRE note de la voix en mode ajout", () => {
    const p = empilerHauteur(pieceBasse([noteSimple("C", 3), noteSimple("D", 3)]), ajout, "F", 0, 3);
    expect((p.mesures[0].voix.basse[0] as Note).hauteurs).toHaveLength(1);
    expect((p.mesures[0].voix.basse[1] as Note).hauteurs.map((h) => h.lettre)).toEqual(["D", "F"]);
  });
  it("refuse le doublon midi exact", () => {
    const avant = pieceBasse([noteSimple("C", 3)]);
    expect(empilerHauteur(avant, selection, "C", 0, 3)).toBe(avant);
  });
  it("sans effet : silence de queue, voix vide", () => {
    const silence: Silence = { type: "silence", duree: { base: "noire", points: 0 } };
    const avecSilence = pieceBasse([noteSimple("C", 3), silence]);
    expect(empilerHauteur(avecSilence, ajout, "E", 0, 3)).toBe(avecSilence);
    const vide = pieceBasse([]);
    expect(empilerHauteur(vide, ajout, "E", 0, 3)).toBe(vide);
  });
  it("mode ajout : remonte à la mesure précédente si la courante est vide", () => {
    const p: Piece = {
      armure: 0, chiffrage: { temps: 4, unite: 4 },
      mesures: [
        { voix: { soprano: [], alto: [], tenor: [], basse: [noteSimple("C", 3)] } },
        { voix: { soprano: [], alto: [], tenor: [], basse: [] } },
      ],
    };
    const r = empilerHauteur(p, { mesure: 1, voix: "basse", note: "fin" }, "G", 0, 3);
    expect((r.mesures[0].voix.basse[0] as Note).hauteurs.map((h) => h.lettre)).toEqual(["C", "G"]);
  });

  it("retire la dernière hauteur empilée (et elle seule)", () => {
    const accord = empilerHauteur(pieceBasse([noteSimple("C", 3)]), selection, "E", 0, 3);
    const p = retirerDerniereHauteur(accord, selection);
    expect((p.mesures[0].voix.basse[0] as Note).hauteurs.map((h) => h.lettre)).toEqual(["C"]);
  });
  it("sans effet sur une note simple", () => {
    const avant = pieceBasse([noteSimple("C", 3)]);
    expect(retirerDerniereHauteur(avant, selection)).toBe(avant);
  });

  it("transposerDegre déplace TOUTES les hauteurs", () => {
    const accord = empilerHauteur(pieceBasse([noteSimple("C", 3)]), selection, "E", 0, 3);
    const p = transposerDegre(accord, selection, 1);
    expect((p.mesures[0].voix.basse[0] as Note).hauteurs.map((h) => h.lettre)).toEqual(["D", "F"]);
  });
  it("transposerOctave : bloc soudé — si UNE hauteur sort des bornes, rien ne bouge", () => {
    const grave = empilerHauteur(pieceBasse([noteSimple("C", 1)]), selection, "G", 0, 5);
    expect(transposerOctave(grave, selection, -1)).toBe(grave); // C1 sortirait (octave 0)
    const ok = transposerOctave(grave, selection, 1);
    expect((ok.mesures[0].voix.basse[0] as Note).hauteurs.map((h) => h.octave)).toEqual([2, 6]);
  });
  it("remplacerHauteur remplace le bloc par une note SIMPLE (octave de la 1re hauteur)", () => {
    const accord = empilerHauteur(pieceBasse([noteSimple("C", 3)]), selection, "E", 0, 4);
    const p = remplacerHauteur(accord, selection, "D", 1);
    const n = p.mesures[0].voix.basse[0] as Note;
    expect(n.hauteurs).toEqual([{ lettre: "D", alteration: 1, octave: 3 }]);
  });
});

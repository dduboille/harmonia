import { describe, it, expect } from "vitest";
import { parseMusicXML, TPQ } from "./musicxml-parse";
import { pieceVersMusicXML } from "./piece-vers-musicxml";
import { pieceVierge, type Piece, type Note, type Voix, type Hauteur, type NomVoix } from "./piece-model";

/** Raccourci : une note simple. */
function n(lettre: Hauteur["lettre"], octave: number, base: Note["duree"]["base"], points: 0 | 1 | 2 = 0, extra: Partial<Note> = {}): Note {
  return { type: "note", hauteurs: [{ lettre, alteration: 0, octave }], duree: { base, points }, ...extra };
}

/** Une pièce d'UNE mesure avec les voix fournies (les autres vides). */
function piece4voix(voix: Partial<Record<NomVoix, Voix>>): Piece {
  return {
    armure: 0,
    chiffrage: { temps: 4, unite: 4 },
    mesures: [{
      voix: {
        soprano: voix.soprano ?? [],
        alto: voix.alto ?? [],
        tenor: voix.tenor ?? [],
        basse: voix.basse ?? [],
      },
    }],
  };
}

describe("pieceVersMusicXML — aller-retour par le parseur", () => {
  it("quatre noires au soprano se relisent aux bons instants", () => {
    const xml = pieceVersMusicXML(piece4voix({
      soprano: [n("C", 5, "noire"), n("D", 5, "noire"), n("E", 5, "noire"), n("F", 5, "noire")],
    }));
    const score = parseMusicXML(xml);
    const haut = score.notes.filter((x) => x.midi >= 71).sort((a, b) => a.onset - b.onset);
    expect(haut.map((x) => x.onset)).toEqual([0, TPQ, 2 * TPQ, 3 * TPQ]);
    expect(haut.map((x) => x.midi)).toEqual([72, 74, 76, 77]); // Do5 Ré5 Mi5 Fa5
  });

  it("le soprano et la basse sont lus simultanément (grâce au <backup>)", () => {
    const xml = pieceVersMusicXML(piece4voix({
      soprano: [n("C", 5, "ronde")],
      basse: [n("C", 3, "ronde")],
    }));
    const score = parseMusicXML(xml);
    // Do5 (72) au soprano et Do3 (48) à la basse, tous deux à l'instant 0.
    const a0 = score.notes.filter((x) => x.onset === 0).map((x) => x.midi).sort((a, b) => a - b);
    expect(a0).toEqual([48, 72]);
  });

  it("une noire POINTÉE dure 1,5 temps", () => {
    const xml = pieceVersMusicXML(piece4voix({
      soprano: [n("C", 5, "noire", 1), n("D", 5, "croche"), n("E", 5, "noire"), n("F", 5, "noire")],
    }));
    const doNote = parseMusicXML(xml).notes.find((x) => x.midi === 72)!;
    expect(doNote.duration).toBe(Math.round(1.5 * TPQ));
  });

  it("deux notes LIÉES se fondent en une seule tenue", () => {
    const xml = pieceVersMusicXML(piece4voix({
      soprano: [n("C", 5, "blanche", 0, { liee: true }), n("C", 5, "blanche")],
    }));
    const dos = parseMusicXML(xml).notes.filter((x) => x.midi === 72);
    expect(dos).toHaveLength(1);            // fusionnées
    expect(dos[0].duration).toBe(4 * TPQ);  // deux blanches = une ronde
  });

  it("un TRIOLET de croches occupe le temps de deux croches", () => {
    const triolet = (l: Hauteur["lettre"]): Note => ({
      type: "note", hauteurs: [{ lettre: l, alteration: 0, octave: 5 }],
      duree: { base: "croche", points: 0, nolet: { reelles: 3, normales: 2 } },
    });
    const xml = pieceVersMusicXML(piece4voix({
      soprano: [triolet("C"), triolet("D"), triolet("E"), n("F", 5, "noire"), n("G", 5, "noire"), n("A", 5, "noire")],
    }));
    const score = parseMusicXML(xml);
    const trio = score.notes.filter((x) => [72, 74, 76].includes(x.midi)).sort((a, b) => a.onset - b.onset);
    // Trois notes dans un temps (768) : chacune 256.
    expect(trio.map((x) => x.duration)).toEqual([256, 256, 256]);
    expect(trio[2].onset).toBe(512);
    // La note SUIVANTE (Fa) tombe bien au 2e temps.
    expect(score.notes.find((x) => x.midi === 77)!.onset).toBe(TPQ);
  });

  it("un triolet porte le CROCHET (tuplet start/stop) sur ses bornes", () => {
    const triolet = (l: Hauteur["lettre"]): Note => ({
      type: "note", hauteurs: [{ lettre: l, alteration: 0, octave: 5 }],
      duree: { base: "croche", points: 0, nolet: { reelles: 3, normales: 2 } },
    });
    const xml = pieceVersMusicXML(piece4voix({
      soprano: [triolet("C"), triolet("D"), triolet("E"), n("F", 5, "noire"), n("G", 5, "noire"), n("A", 5, "noire")],
    }));
    // Un seul crochet ouvert et un seul fermé pour le groupe de trois.
    expect((xml.match(/<tuplet type="start"\/>/g) ?? []).length).toBe(1);
    expect((xml.match(/<tuplet type="stop"\/>/g) ?? []).length).toBe(1);
  });

  it("un ACCORD empile ses hauteurs au même instant", () => {
    const accord: Note = {
      type: "note",
      hauteurs: [
        { lettre: "C", alteration: 0, octave: 4 },
        { lettre: "E", alteration: 0, octave: 4 },
        { lettre: "G", alteration: 0, octave: 4 },
      ],
      duree: { base: "ronde", points: 0 },
    };
    const xml = pieceVersMusicXML(piece4voix({ soprano: [accord] }));
    const a0 = parseMusicXML(xml).notes.filter((x) => x.onset === 0).map((x) => x.midi).sort((a, b) => a - b);
    expect(a0).toEqual([60, 64, 67]); // Do-Mi-Sol
  });

  it("une altération est conservée (Fa# se relit en Fa#)", () => {
    const faDiese: Note = {
      type: "note", hauteurs: [{ lettre: "F", alteration: 1, octave: 5 }], duree: { base: "ronde", points: 0 },
    };
    const xml = pieceVersMusicXML(piece4voix({ soprano: [faDiese] }));
    const note = parseMusicXML(xml).notes.find((x) => x.onset === 0 && x.midi > 60)!;
    expect(note.step).toBe("F");
    expect(note.alter).toBe(1);
  });

  it("une altération HORS armure porte un <accidental> explicite (pas en armure)", () => {
    // Sans <accidental>, Verovio dessine le dièse depuis <alter> mais sa table
    // de temps MIDI (renderToMIDI) l'IGNORE : un Fa♯ hors armure sonnait Fa
    // bécarre dans l'appariement de StudioScore. Le glyphe doit être émis dès
    // que l'altération contredit l'armure — et seulement dans ce cas.
    const faDiese: Note = {
      type: "note", hauteurs: [{ lettre: "F", alteration: 1, octave: 5 }], duree: { base: "ronde", points: 0 },
    };
    // Armure 0 (Do majeur) : le Fa♯ contredit l'armure → accidental émis.
    expect(pieceVersMusicXML(piece4voix({ soprano: [faDiese] })))
      .toContain("<accidental>sharp</accidental>");
    // Armure 1 dièse (Sol majeur) : le Fa♯ est À l'armure → aucun accidental.
    const enSol: Piece = { ...piece4voix({ soprano: [faDiese] }), armure: 1 };
    expect(pieceVersMusicXML(enSol)).not.toContain("<accidental>");
  });

  it("deux voix par portée (soprano + alto) se relisent au bon instant", () => {
    // Mesure : soprano = Do5 ronde ; alto = La4 ronde. Même onset, hauteurs distinctes.
    const xml = pieceVersMusicXML(piece4voix({ soprano: [n("C", 5, "ronde")], alto: [n("A", 4, "ronde")] }));
    const a0 = parseMusicXML(xml).notes.filter((x) => x.onset === 0).map((x) => x.midi).sort((a, b) => a - b);
    expect(a0).toEqual([69, 72]); // La4, Do5 tous deux à l'instant 0
  });

  it("rythmes indépendants : soprano 2 blanches + basse 1 ronde", () => {
    const xml = pieceVersMusicXML(piece4voix({
      soprano: [n("C", 5, "blanche"), n("D", 5, "blanche")],
      basse:   [n("C", 3, "ronde")],
    }));
    const score = parseMusicXML(xml);
    expect(score.notes.filter((x) => x.midi === 72)).toHaveLength(1);          // Do5 blanche
    expect(score.notes.find((x) => x.midi === 48)!.duration).toBe(4 * TPQ);    // Do3 ronde tenue
  });

  it("une voix entièrement vide n'est PAS émise", () => {
    const xml = pieceVersMusicXML(piece4voix({ soprano: [n("C", 5, "ronde")], basse: [n("C", 3, "ronde")] }));
    // Alto (voix 2) et Ténor (voix 3) absents.
    expect(xml).not.toContain("<voice>2</voice>");
    expect(xml).not.toContain("<voice>3</voice>");
  });

  it("un accord SATB : une note par voix au même instant", () => {
    const xml = pieceVersMusicXML(piece4voix({
      soprano: [n("G", 4, "ronde")], alto: [n("E", 4, "ronde")],
      tenor:   [n("C", 4, "ronde")], basse: [n("C", 3, "ronde")],
    }));
    const a0 = parseMusicXML(xml).notes.filter((x) => x.onset === 0).map((x) => x.midi).sort((a, b) => a - b);
    expect(a0).toEqual([48, 60, 64, 67]); // Do3, Do4, Mi4, Sol4
  });

  it("les hampes se séparent : soprano en haut, alto en bas", () => {
    // Une portée avec une voix haute (soprano) et une basse (alto) : hampes opposées.
    const xml = pieceVersMusicXML(piece4voix({ soprano: [n("C", 5, "ronde")], alto: [n("A", 4, "ronde")] }));
    expect(xml).toContain("<stem>up</stem>");
    expect(xml).toContain("<stem>down</stem>");
    // Aucune hampe sur un silence : tout bloc <note> contenant <rest> est sans <stem>.
    const blocsSilence = xml.split("<note>").filter((b) => b.includes("<rest"));
    expect(blocsSilence.length).toBeGreaterThan(0); // il y a bien des silences (portée 2 en repli)
    for (const bloc of blocsSilence) {
      expect(bloc.slice(0, bloc.indexOf("</note>"))).not.toContain("<stem>");
    }
  });
});

describe("pieceVersMusicXML — la pièce vierge", () => {
  it("produit un MusicXML de 8 mesures relisible, à deux portées visibles", () => {
    const xml = pieceVersMusicXML(pieceVierge());
    const score = parseMusicXML(xml);
    expect(score.measures).toHaveLength(8);
    expect(score.fifths).toBe(0);
    expect(score.signature).toBe("4/4");
    // Aucune note active : les deux portées restent visibles via un silence de repli.
    expect(xml).toContain("<staff>1</staff>");
    expect(xml).toContain("<staff>2</staff>");
  });
});

describe("le mode dans l'export", () => {
  it("sans mode : <mode>major</mode> par défaut", () => {
    const piece: Piece = {
      armure: 0, chiffrage: { temps: 4, unite: 4 },
      mesures: [{ voix: { soprano: [], alto: [], tenor: [], basse: [] } }],
    };
    expect(pieceVersMusicXML(piece)).toContain("<mode>major</mode>");
  });
  it("mode minor : <mode>minor</mode>", () => {
    const piece: Piece = {
      armure: 0, mode: "minor", chiffrage: { temps: 4, unite: 4 },
      mesures: [{ voix: { soprano: [], alto: [], tenor: [], basse: [] } }],
    };
    expect(pieceVersMusicXML(piece)).toContain("<mode>minor</mode>");
  });
});

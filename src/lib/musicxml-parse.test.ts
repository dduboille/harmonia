import { describe, it, expect } from "vitest";
import { parseMusicXML, noteNameFr, TPQ, inferModeParProfil } from "./musicxml-parse";

/** Enveloppe minimale : une partie, des mesures fournies telles quelles. */
function partition(mesures: string, divisions = 1): string {
  return `<score-partwise><part id="P1">${mesures.replace(
    "@ATTR@",
    `<attributes><divisions>${divisions}</divisions><key><fifths>0</fifths></key>` +
      `<time><beats>4</beats><beat-type>4</beat-type></time></attributes>`,
  )}</part></score-partwise>`;
}

function note(step: string, octave: number, duration: number, extra = ""): string {
  return `<note><pitch><step>${step}</step><octave>${octave}</octave></pitch>` +
    `<duration>${duration}</duration>${extra}</note>`;
}

function noteAlteree(step: string, alter: number, octave: number, duration: number): string {
  return `<note><pitch><step>${step}</step><alter>${alter}</alter><octave>${octave}</octave></pitch>` +
    `<duration>${duration}</duration></note>`;
}

describe("parseMusicXML — en-tête", () => {
  it("lit l'armure, le mode et la signature", () => {
    const s = parseMusicXML(partition(`<measure number="1">@ATTR@${note("C", 4, 4)}</measure>`));
    expect(s.fifths).toBe(0);
    expect(s.mode).toBe("major");
    expect(s.signature).toBe("4/4");
  });
});

describe("parseMusicXML — tempos", () => {
  it("lit <sound tempo> (autorité de lecture)", () => {
    const s = parseMusicXML(partition(
      `<measure number="1">@ATTR@<sound tempo="66"/>${note("C", 4, 4)}</measure>`,
    ));
    expect(s.tempos).toEqual([{ onset: 0, bpm: 66 }]);
  });

  it("lit une direction avec <sound tempo> et la place à l'instant courant", () => {
    // Grave à 60 en tête, Allegro à 132 au début de la mesure 2.
    const s = parseMusicXML(partition(
      `<measure number="1">@ATTR@<direction><sound tempo="60"/></direction>${note("C", 4, 4)}</measure>` +
      `<measure number="2"><direction><sound tempo="132"/></direction>${note("D", 4, 4)}</measure>`,
    ));
    expect(s.tempos).toEqual([
      { onset: 0, bpm: 60 },
      { onset: 4 * TPQ, bpm: 132 },
    ]);
  });

  it("convertit une marque métronomique sans <sound> en noires/minute", () => {
    // La blanche à 60 = la noire à 120.
    const s = parseMusicXML(partition(
      `<measure number="1">@ATTR@` +
      `<direction><direction-type><metronome><beat-unit>half</beat-unit><per-minute>60</per-minute></metronome></direction-type></direction>` +
      `${note("C", 4, 4)}</measure>`,
    ));
    expect(s.tempos).toEqual([{ onset: 0, bpm: 120 }]);
  });

  it("un fichier sans tempo rend une liste vide", () => {
    const s = parseMusicXML(partition(`<measure number="1">@ATTR@${note("C", 4, 4)}</measure>`));
    expect(s.tempos).toEqual([]);
  });
});

describe("parseMusicXML — <backup> (LE bug)", () => {
  it("place les deux voix EN MÊME TEMPS, pas l'une après l'autre", () => {
    const xml = partition(
      `<measure number="1">@ATTR@` +
        `${note("C", 5, 4, "<voice>1</voice>")}` +
        `<backup><duration>4</duration></backup>` +
        `${note("E", 3, 4, "<voice>2</voice>")}` +
        `</measure>`,
    );
    const s = parseMusicXML(xml);
    expect(s.notes).toHaveLength(2);
    expect(s.notes.map((n) => n.onset)).toEqual([0, 0]);
    expect(s.notes.map((n) => n.measure)).toEqual([1, 1]);
    expect(s.notes.map((n) => n.beat)).toEqual([1, 1]);
  });

  it("<forward> avance le curseur", () => {
    const xml = partition(
      `<measure number="1">@ATTR@` +
        `<forward><duration>2</duration></forward>${note("G", 4, 2)}</measure>`,
    );
    const s = parseMusicXML(xml);
    expect(s.notes[0].onset).toBe(2 * TPQ);
    expect(s.notes[0].beat).toBe(3);
  });
});

describe("parseMusicXML — durées et liaisons", () => {
  it("une note liée sonne d'un seul tenant, sans seconde attaque", () => {
    const xml = partition(
      `<measure number="1">@ATTR@` +
        `${note("C", 4, 2, `<tie type="start"/><voice>1</voice>`)}` +
        `${note("C", 4, 2, `<tie type="stop"/><voice>1</voice>`)}` +
        `</measure>`,
    );
    const s = parseMusicXML(xml);
    expect(s.notes).toHaveLength(1);
    expect(s.notes[0].duration).toBe(4 * TPQ);
  });

  it("une liaison par-dessus la barre de mesure est fusionnée", () => {
    const xml = partition(
      `<measure number="1">@ATTR@${note("C", 4, 4, `<tie type="start"/><voice>1</voice>`)}</measure>` +
        `<measure number="2">${note("C", 4, 4, `<tie type="stop"/><voice>1</voice>`)}</measure>`,
    );
    const s = parseMusicXML(xml);
    expect(s.notes).toHaveLength(1);
    expect(s.notes[0].duration).toBe(8 * TPQ);
    expect(s.measures).toHaveLength(2);
  });

  it("les notes de <chord/> partagent l'onset de la précédente", () => {
    const xml = partition(
      `<measure number="1">@ATTR@` +
        `${note("C", 4, 4)}` +
        `<note><chord/><pitch><step>E</step><octave>4</octave></pitch><duration>4</duration></note>` +
        `<note><chord/><pitch><step>G</step><octave>4</octave></pitch><duration>4</duration></note>` +
        `</measure>`,
    );
    const s = parseMusicXML(xml);
    expect(s.notes.map((n) => n.onset)).toEqual([0, 0, 0]);
  });

  it("les silences avancent le curseur mais ne produisent pas de note", () => {
    const xml = partition(
      `<measure number="1">@ATTR@<note><rest/><duration>2</duration></note>${note("G", 4, 2)}</measure>`,
    );
    const s = parseMusicXML(xml);
    expect(s.notes).toHaveLength(1);
    expect(s.notes[0].beat).toBe(3);
  });

  it("les notes d'ornement (<grace>) sont ignorées et n'avancent pas le curseur", () => {
    const xml = partition(
      `<measure number="1">@ATTR@` +
        `<note><grace/><pitch><step>D</step><octave>4</octave></pitch></note>` +
        `${note("C", 4, 4)}</measure>`,
    );
    const s = parseMusicXML(xml);
    expect(s.notes).toHaveLength(1);
    expect(s.notes[0].step).toBe("C");
    expect(s.notes[0].onset).toBe(0);
  });

  it("normalise des <divisions> différentes sur la même grille de ticks", () => {
    const a = parseMusicXML(partition(`<measure number="1">@ATTR@${note("C", 4, 4)}</measure>`, 1));
    const b = parseMusicXML(partition(`<measure number="1">@ATTR@${note("C", 4, 96)}</measure>`, 24));
    expect(a.notes[0].duration).toBe(b.notes[0].duration);
    expect(a.notes[0].duration).toBe(4 * TPQ);
  });
});

describe("parseMusicXML — hauteur et orthographe", () => {
  it("conserve l'orthographe : un Mi bémol n'est pas un Ré dièse", () => {
    const xml = partition(
      `<measure number="1">@ATTR@` +
        `<note><pitch><step>E</step><alter>-1</alter><octave>4</octave></pitch><duration>4</duration></note>` +
        `</measure>`,
    );
    const n = parseMusicXML(xml).notes[0];
    expect(n.step).toBe("E");
    expect(n.alter).toBe(-1);
    expect(n.pc).toBe(3);
    expect(n.midi).toBe(63);
    expect(noteNameFr(n.step, n.alter)).toBe("Mib");
  });

  it("noteNameFr rend les altérations", () => {
    expect(noteNameFr("F", 1)).toBe("Fa#");
    expect(noteNameFr("A", -1)).toBe("Lab");
    expect(noteNameFr("D", 0)).toBe("Ré");
  });
});

describe("parseMusicXML — plusieurs parties", () => {
  it("aligne les parties sur la même grille temporelle", () => {
    const xml =
      `<score-partwise>` +
      `<part id="P1"><measure number="1">` +
      `<attributes><divisions>1</divisions><key><fifths>0</fifths></key></attributes>` +
      `${note("C", 5, 4)}</measure></part>` +
      `<part id="P2"><measure number="1">` +
      `<attributes><divisions>2</divisions></attributes>` +
      `${note("C", 3, 8)}</measure></part>` +
      `</score-partwise>`;
    const s = parseMusicXML(xml);
    expect(s.notes).toHaveLength(2);
    expect(s.notes.map((n) => n.onset)).toEqual([0, 0]);
    expect(s.notes.map((n) => n.duration)).toEqual([4 * TPQ, 4 * TPQ]);
  });

  it("<part-list> n'est pas pris pour une partie : l'id réel est conservé", () => {
    const xml =
      `<score-partwise>` +
      `<part-list><score-part id="PIANO"><part-name>Piano</part-name></score-part></part-list>` +
      `<part id="PIANO"><measure number="1">` +
      `<attributes><divisions>1</divisions></attributes>` +
      `${note("C", 4, 4)}</measure></part>` +
      `</score-partwise>`;
    const s = parseMusicXML(xml);
    expect(s.notes).toHaveLength(1);
    expect(s.notes[0].part).toBe("PIANO");
  });
});

describe("parseMusicXML — mesure de levée", () => {
  it("la mesure 0 (anacrouse) est une mesure à part entière, pas la mesure 1", () => {
    const xml =
      `<score-partwise><part id="P1">` +
      `<measure number="0" implicit="yes">` +
      `<attributes><divisions>1</divisions><key><fifths>0</fifths></key></attributes>` +
      `${note("G", 4, 1)}</measure>` +
      `<measure number="1">${note("C", 4, 4)}</measure>` +
      `<measure number="2">${note("D", 4, 4)}</measure>` +
      `</part></score-partwise>`;
    const s = parseMusicXML(xml);
    expect(s.measures.map((m) => m.numero)).toEqual([0, 1, 2]);
    expect(s.measures.map((m) => m.start)).toEqual([0, TPQ, 5 * TPQ]);
    expect(s.notes.map((n) => n.measure)).toEqual([0, 1, 2]);
    // La levée ne se plaque pas sur le 1er temps de la mesure 1.
    expect(s.notes.map((n) => n.onset)).toEqual([0, TPQ, 5 * TPQ]);
  });
});

describe("parseMusicXML — robustesse des fichiers réels", () => {
  it("une liaison se referme même si une autre partie lit la mesure plus longue", () => {
    // P1 ne remplit que 2 temps de la mesure 1 ; P2 en remplit 4. La mesure dure
    // donc 4 temps, et la note liée de P1 n'est plus adjacente à la barre.
    const xml =
      `<score-partwise>` +
      `<part id="P1">` +
      `<measure number="1"><attributes><divisions>1</divisions></attributes>` +
      `${note("C", 4, 2, `<tie type="start"/><voice>1</voice>`)}</measure>` +
      `<measure number="2">${note("C", 4, 4, `<tie type="stop"/><voice>1</voice>`)}</measure>` +
      `</part>` +
      `<part id="P2">` +
      `<measure number="1"><attributes><divisions>1</divisions></attributes>` +
      `${note("G", 3, 4)}</measure>` +
      `<measure number="2">${note("G", 3, 4)}</measure>` +
      `</part>` +
      `</score-partwise>`;
    const s = parseMusicXML(xml);
    const doTenu = s.notes.filter((n) => n.step === "C");
    expect(doTenu).toHaveLength(1); // aucune réattaque en mesure 2
    expect(doTenu[0].onset).toBe(0);
    expect(doTenu[0].duration).toBe(8 * TPQ);
  });

  it("les notes de repère (<cue/>) ne sonnent pas mais avancent le curseur", () => {
    const xml = partition(
      `<measure number="1">@ATTR@` +
        `<note><cue/><pitch><step>B</step><octave>4</octave></pitch><duration>2</duration></note>` +
        `${note("G", 4, 2)}</measure>`,
    );
    const s = parseMusicXML(xml);
    expect(s.notes).toHaveLength(1);
    expect(s.notes[0].step).toBe("G");
    expect(s.notes[0].beat).toBe(3);
  });

  it("accepte les attributs en guillemets simples", () => {
    const xml =
      `<score-partwise><part id='P1'><measure number='2'>` +
      `<attributes><divisions>1</divisions></attributes>` +
      `${note("C", 4, 2, `<tie type='start'/><voice>1</voice>`)}` +
      `${note("C", 4, 2, `<tie type='stop'/><voice>1</voice>`)}` +
      `</measure></part></score-partwise>`;
    const s = parseMusicXML(xml);
    expect(s.measures[0].numero).toBe(2);
    expect(s.notes).toHaveLength(1);
    expect(s.notes[0].duration).toBe(4 * TPQ);
  });

  it("un changement de <divisions> en cours de mesure n'agit pas rétroactivement", () => {
    const xml =
      `<score-partwise><part id="P1"><measure number="1">` +
      `<attributes><divisions>1</divisions></attributes>` +
      `${note("C", 4, 2)}` + // 2 noires à divisions=1
      `<attributes><divisions>4</divisions></attributes>` +
      `${note("E", 4, 8)}` + // 2 noires à divisions=4
      `</measure></part></score-partwise>`;
    const s = parseMusicXML(xml);
    expect(s.notes.map((n) => n.duration)).toEqual([2 * TPQ, 2 * TPQ]);
    expect(s.notes.map((n) => n.onset)).toEqual([0, 2 * TPQ]);
    expect(s.measures[0].length).toBe(4 * TPQ);
  });

  it("ignore les <note> enfermées dans un commentaire XML", () => {
    const xml = partition(
      `<measure number="1">@ATTR@` +
        `<!-- <note><pitch><step>B</step><octave>4</octave></pitch>` +
        `<duration>2</duration></note> -->` +
        `${note("C", 4, 4)}</measure>`,
    );
    const s = parseMusicXML(xml);
    expect(s.notes).toHaveLength(1);
    expect(s.notes[0].step).toBe("C");
    expect(s.notes[0].onset).toBe(0);
  });

  it("un unisson doublé dans l'accord ne casse pas la liaison de la note tenue", () => {
    const xml =
      `<score-partwise><part id="P1">` +
      `<measure number="1"><attributes><divisions>1</divisions></attributes>` +
      `${note("C", 4, 4, `<tie type="start"/><voice>1</voice>`)}` +
      `<note><chord/><pitch><step>C</step><octave>4</octave></pitch>` +
      `<duration>4</duration><voice>1</voice></note>` +
      `</measure>` +
      `<measure number="2">` +
      `${note("C", 4, 4, `<tie type="stop"/><voice>1</voice>`)}` +
      `</measure></part></score-partwise>`;
    const s = parseMusicXML(xml);
    // Le doublement subsiste, mais la note liée ne se réattaque pas en mesure 2.
    expect(s.notes.every((n) => n.measure === 1)).toBe(true);
    expect(s.notes.some((n) => n.duration === 8 * TPQ)).toBe(true);
  });
});

describe("mode : inféré par profil tonal quand <mode> est absent de l'armure", () => {
  it("inferModeParProfil : tonique + tierce + sensible mineures dominent → 'minor'", () => {
    // Sol mineur (tonique Sol = pc 7) : sol-sib-ré (accord de tonique) très présents,
    // + fa# (sensible) qui résout sur sol — signature d'un VRAI mineur tonal, pas
    // d'une simple altération de passage (cf. le garde-fou Pathétique plus bas).
    const notes = [
      { pc: 7, duration: 100 },  // sol (tonique), très présent
      { pc: 7, duration: 100 },
      { pc: 10, duration: 60 },  // sib (tierce mineure)
      { pc: 2, duration: 60 },   // ré (quinte)
      { pc: 6, duration: 20 },   // fa# (sensible, résolution vers sol)
      { pc: 7, duration: 40 },
    ];
    expect(inferModeParProfil(notes, /* tonique majeure = */ 10)).toBe("minor");
  });

  it("inferModeParProfil : tonique + tierce + sensible majeures dominent → 'major'", () => {
    // Si♭ majeur (tonique Si♭ = pc 10) : si♭-ré-fa (accord de tonique) très présents,
    // + la naturel (sensible majeure) qui résout sur si♭.
    const notes = [
      { pc: 10, duration: 100 }, // sib (tonique)
      { pc: 10, duration: 100 },
      { pc: 2, duration: 60 },   // ré (tierce majeure)
      { pc: 5, duration: 60 },   // fa (quinte)
      { pc: 9, duration: 20 },   // la (sensible, résolution vers sib)
      { pc: 10, duration: 40 },
    ];
    expect(inferModeParProfil(notes, 10)).toBe("major");
  });

  it("inferModeParProfil : aucune note → repli neutre 'major' (ne plante pas)", () => {
    expect(inferModeParProfil([], 0)).toBe("major");
  });

  it("parseMusicXML : armure de 2 bémols SANS <mode>, contenu net de Sol mineur → 'minor'", () => {
    // Reproduit la structure réelle qui a révélé le bug : export MuseScore de Dany
    // (Symphonie n°40 de Mozart, K.550) sans balise <mode>, motif d'ouverture
    // sol-sib-ré à la basse (voix d'alto), sensible fa# en fin d'extrait.
    const xml = `<score-partwise><part id="P1">` +
      `<measure number="1"><attributes><divisions>1</divisions><key><fifths>-2</fifths></key>` +
      `<time><beats>2</beats><beat-type>2</beat-type></time></attributes>` +
      note("G", 4, 4) + noteAlteree("B", -1, 4, 2) + note("D", 4, 2) +
      `</measure>` +
      `<measure number="2">` +
      note("G", 4, 4) + noteAlteree("B", -1, 4, 2) + note("D", 4, 2) +
      `</measure>` +
      `<measure number="3">` +
      noteAlteree("F", 1, 4, 4) + note("G", 4, 4) + // fa# (sensible) → sol (tonique)
      `</measure></part></score-partwise>`;
    const s = parseMusicXML(xml);
    expect(s.fifths).toBe(-2);
    expect(s.mode).toBe("minor");
  });

  it("parseMusicXML : balise <mode>major> explicite JAMAIS remise en cause, même avec du contenu mineur", () => {
    const xml = `<score-partwise><part id="P1">` +
      `<measure number="1"><attributes><divisions>1</divisions>` +
      `<key><fifths>-2</fifths><mode>major</mode></key>` +
      `<time><beats>2</beats><beat-type>2</beat-type></time></attributes>` +
      note("G", 4, 4) + noteAlteree("B", -1, 4, 2) + note("D", 4, 2) +
      noteAlteree("F", 1, 4, 4) + note("G", 4, 4) +
      `</measure></part></score-partwise>`;
    const s = parseMusicXML(xml);
    expect(s.mode).toBe("major");
  });
});

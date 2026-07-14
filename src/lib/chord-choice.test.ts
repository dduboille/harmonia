import { describe, it, expect } from "vitest";
import { parseMusicXML } from "./musicxml-parse";
import { spansParTemps } from "./harmony-segmentation";
import { carteMelodique } from "./voice-lines";
import { choisirAccord, type ChoixAccord } from "./chord-choice";

// ── Fabrique de MusicXML ──────────────────────────────────────────────────────
//
// Le plan proposait une fabrique à DEUX voix. Elle ne suffit pas : les cas qui
// comptent ici sont des textures à quatre voix (une note étrangère se juge contre
// un accord, et un accord tient dans les trois autres voix). On en prend donc
// autant qu'on veut.

/**
 * `"C5:2"` → un Do5 de deux croches (les <divisions> valent 2 : l'unité est la
 * croche). `"+E5:2"` plaque la note sur la précédente (<chord/>) : c'est ainsi
 * qu'on écrit un accord DANS UNE SEULE VOIX — l'écriture pianistique, celle où
 * aucune ligne mélodique n'existe. `"R:4"` est un silence : il éloigne une note de
 * sa voisine sans rompre la voix.
 */
function notes(spec: string, voice: string): string {
  return spec
    .split(" ")
    .map((s) => {
      const plaquee = s.startsWith("+");
      const [nom, duree] = (plaquee ? s.slice(1) : s).split(":");
      if (nom === "R") {
        return `<note><rest/><duration>${duree}</duration><voice>${voice}</voice></note>`;
      }
      const step = nom[0];
      const alter = nom.includes("#") ? 1 : nom.includes("b") ? -1 : 0;
      const octave = nom[nom.length - 1];
      const alt = alter === 0 ? "" : `<alter>${alter}</alter>`;
      return (
        `<note>${plaquee ? "<chord/>" : ""}` +
        `<pitch><step>${step}</step>${alt}<octave>${octave}</octave></pitch>` +
        `<duration>${duree}</duration><voice>${voice}</voice></note>`
      );
    })
    .join("");
}

/** Une mesure, une voix par entrée de `voix`, séparées par les <backup> réels. */
function partition(voix: string[], beats = 4): string {
  const corps = voix
    .map((spec, i) => {
      const bloc = notes(spec, String(i + 1));
      return i === 0 ? bloc : `<backup><duration>${beats * 2}</duration></backup>${bloc}`;
    })
    .join("");

  return (
    `<score-partwise><part-list><score-part id="P1"/></part-list>` +
    `<part id="P1"><measure number="1">` +
    `<attributes><divisions>2</divisions><key><fifths>0</fifths></key>` +
    `<time><beats>${beats}</beats><beat-type>4</beat-type></time></attributes>` +
    corps +
    `</measure></part></score-partwise>`
  );
}

function accordAuTemps(xml: string, beat = 1): ChoixAccord | null {
  const score = parseMusicXML(xml);
  const carte = carteMelodique(score.notes);
  const span = spansParTemps(score).find((s) => s.beat === beat);
  if (!span) throw new Error(`aucun temps ${beat}`);
  return choisirAccord(span, carte, {});
}

/** Les sons de l'accord retenu, triés — l'ordre d'énumération n'a aucun sens. */
function sons(choix: ChoixAccord): number[] {
  return [...choix.chord.pcs].sort((a, b) => a - b);
}

// ── Les cas ───────────────────────────────────────────────────────────────────

describe("choisirAccord — la note de passage ne fait pas l'accord", () => {
  it("Do-Ré-Mi en croches sur un accord de Do : l'accord reste Do majeur", () => {
    // S : Do5 Ré5 (croches) puis Mi5 — le Ré traverse par degrés conjoints.
    // A/T/B : Sol4, Mi4, Do3 tenus — l'accord, lui, ne bouge pas.
    const choix = accordAuTemps(
      partition(["C5:1 D5:1 E5:2", "G4:4", "E4:4", "C3:4"], 2),
    )!;

    expect(choix.chord.rootPc).toBe(0);
    expect(choix.chord.quality).toBe("");
    expect(sons(choix)).toEqual([0, 4, 7]);
    expect(choix.etrangeres.map((e) => e.note.step)).toEqual(["D"]);
    // La basse de l'accord est bien le Do3, et non le Ré de passage.
    expect(choix.chord.bassPc).toBe(0);
  });
});

describe("choisirAccord — la pédale n'entre pas dans l'accord", () => {
  // Sans la BARRIÈRE DES SUS, ce test échoue — et il échoue pour la bonne raison :
  // le `Csus4` (Do-Fa-Sol) est COMPLET là où le V7 est à quinte omise, et il gagne
  // au coût. La fonction tonale s'inverserait (T au lieu de D) sur la texture la
  // plus banale du répertoire.
  const xml = partition(["F5:4 E5:4", "B4:4 C5:4", "G4:4 G4:4", "C3:8"]);

  it("V7 sur pédale de tonique : la fondamentale est Sol, et le Do n'est pas de l'accord", () => {
    const choix = accordAuTemps(xml, 1)!;

    expect(choix.chord.rootPc).toBe(7);
    expect(choix.chord.quality).toBe("7");
    expect(choix.chord.pcs).not.toContain(0);
    // La basse de l'accord est le Sol4 — la note la plus grave ENTENDUE (Do3) est
    // la pédale, et la prendre pour basse inventerait un renversement.
    expect(choix.chord.bassPc).toBe(7);
    expect(choix.etrangeres.map((e) => e.note.step)).toEqual(["C"]);
  });

  it("la pédale redevient note de l'accord quand l'harmonie la rejoint", () => {
    const choix = accordAuTemps(xml, 3)!;

    expect(choix.chord.rootPc).toBe(0);
    expect(choix.chord.quality).toBe("");
    expect(choix.etrangeres).toHaveLength(0);
    expect(choix.chord.bassPc).toBe(0);
  });
});

describe("choisirAccord — le retard ne fait pas l'accord", () => {
  // Le 4-3 de cadence : le Do de la soprano est TENU par-dessus le changement
  // d'harmonie, puis se résout sur le Si. Pendant qu'il sonne, l'accord de Sol n'a
  // pas sa tierce — et `Gsus4` (Sol-Do-Ré) est COMPLET quand Sol majeur ne l'est pas
  // encore. Il gagnerait au coût (2,10 contre 1,78) : c'est la barrière des sus, et
  // elle seule, qui l'écarte.
  const xml = partition(["C5:5 B4:3", "E4:4 D4:4", "G4:4 G4:4", "C3:4 G2:4"]);

  it("temps 1 : Do majeur", () => {
    const choix = accordAuTemps(xml, 1)!;
    expect(choix.chord.rootPc).toBe(0);
    expect(choix.chord.quality).toBe("");
  });

  it("temps 3 : Sol majeur, le Do retardé n'étant pas de l'accord", () => {
    const choix = accordAuTemps(xml, 3)!;

    expect(choix.chord.rootPc).toBe(7);
    expect(choix.chord.quality).toBe("");
    expect(sons(choix)).toEqual([2, 7, 11]);
    expect(choix.etrangeres.map((e) => e.note.step)).toEqual(["C"]);
    expect(choix.chord.bassPc).toBe(7);
  });
});

describe("choisirAccord — la pédale de dominante ne retourne pas la fonction", () => {
  // Ré-Fa-La sur une pédale de Sol : le ii. Sans la barrière, `Gsus2` (Sol-La-Ré)
  // est complet et fait jeu égal avec Ré mineur — la sous-dominante deviendrait
  // dominante sur un coup de dé (l'ordre de `CHORD_PATTERNS`).
  const xml = partition(["A4:4 B4:4", "F4:4 D4:4", "D4:4 G3:4", "G2:8"]);

  it("temps 1 : ii, et la pédale de Sol reste dehors", () => {
    const choix = accordAuTemps(xml, 1)!;

    expect(choix.chord.rootPc).toBe(2);
    expect(choix.chord.quality).toBe("m");
    expect(choix.chord.pcs).not.toContain(7);
    expect(choix.chord.bassPc).toBe(2);
    expect(choix.etrangeres.map((e) => e.note.step)).toEqual(["G"]);
  });

  it("temps 3 : le V, que la pédale rejoint", () => {
    const choix = accordAuTemps(xml, 3)!;
    expect(choix.chord.rootPc).toBe(7);
    expect(choix.chord.quality).toBe("");
    expect(choix.etrangeres).toHaveLength(0);
  });
});

describe("choisirAccord — la 7e réelle contre la 7e de passage", () => {
  it("Sol-Si-Ré-Fa tenus : c'est un V7, non un V qui abandonne son Fa", () => {
    const choix = accordAuTemps(partition(["F5:4", "D5:4", "B4:4", "G3:4"], 2))!;

    expect(choix.chord.rootPc).toBe(7);
    expect(choix.chord.quality).toBe("7");
    expect(sons(choix)).toEqual([2, 5, 7, 11]);
    expect(choix.etrangeres).toHaveLength(0);
  });

  it("mais un La de croche entre Sol et Si reste une note de passage : Do, non Lam7", () => {
    // Do-Mi-Sol tenu, soprano Sol5-La5-Si5. Les quatre sons de Lam7 sont là — et
    // Lam7 les explique TOUS. C'est le COÛT DU SON REVENDIQUÉ qui l'écarte : un
    // accord ne réclame pas une note qu'il ne fait qu'effleurer.
    const choix = accordAuTemps(
      partition(["G5:1 A5:1 B5:2", "E4:4", "C4:4", "C3:4"], 2),
    )!;

    expect(choix.chord.rootPc).toBe(0);
    expect(choix.chord.quality).toBe("");
    expect(sons(choix)).toEqual([0, 4, 7]);
    expect(choix.etrangeres.map((e) => e.note.step)).toEqual(["A"]);
  });
});

describe("choisirAccord — l'appoggiature du temps fort", () => {
  it("un Fa long sur le temps, résolu sur le Mi : l'accord reste Do majeur", () => {
    // Le Fa occupe TOUT le temps fort, il pèse donc lourd — et Do-Fa-Sol forme un
    // `Csus4` complet. Ni le poids ni la complétude ne doivent renverser l'accord.
    const choix = accordAuTemps(
      partition(["F5:2 E5:2", "G4:4", "E4:4", "C3:4"], 2),
    )!;

    expect(choix.chord.rootPc).toBe(0);
    expect(choix.chord.quality).toBe("");
    expect(choix.etrangeres.map((e) => e.note.step)).toEqual(["F"]);
  });
});

describe("choisirAccord — la broderie", () => {
  it("l'alto brode le Mi par le Fa : l'accord ne bronche pas", () => {
    const choix = accordAuTemps(
      partition(["G5:4", "E4:1 F4:1 E4:2", "C4:4", "C3:4"], 2),
    )!;

    expect(choix.chord.rootPc).toBe(0);
    expect(choix.chord.quality).toBe("");
    expect(choix.etrangeres.map((e) => e.note.step)).toEqual(["F"]);
  });
});

describe("choisirAccord — les trois tarifs de l'abandon", () => {
  // Trois partitions RIGOUREUSEMENT identiques au temps 1 : un Ré5 de noire sur un
  // accord de Do (Sol4, Mi4, Do3). Seule change la façon dont la voix de soprano
  // QUITTE ce Ré. Le coût du choix doit donc croître de tarif en tarif — et lui seul.
  const base = ["G4:4", "E4:4", "C3:4"];

  // Quittée par degré conjoint : une étrangère légitime. C'est de l'écriture.
  const legitime = accordAuTemps(partition(["D5:2 E5:2", ...base], 2))!;

  // Le Mi5 est PLAQUÉ avec un Sol5 : la voix n'est plus une ligne, `carteMelodique`
  // ne sait plus rien du Ré. On ne sait pas — on ne punit pas.
  const inconnue = accordAuTemps(partition(["D5:2 E5:2 +G5:2", ...base], 2))!;

  // Quittée par un saut, et abordée par rien : une anomalie. Elle se paie cher.
  const anomalie = accordAuTemps(partition(["D5:2 A5:2", ...base], 2))!;

  it("les trois lisent le même accord de Do majeur", () => {
    for (const choix of [legitime, inconnue, anomalie]) {
      expect(choix.chord.rootPc).toBe(0);
      expect(choix.chord.quality).toBe("");
      expect(choix.etrangeres.map((e) => e.note.step)).toEqual(["D"]);
    }
  });

  it("mais l'abandon ne coûte pas le même prix : légitime < inconnu < anomalie", () => {
    expect(legitime.cout).toBeLessThan(inconnue.cout);
    expect(inconnue.cout).toBeLessThan(anomalie.cout);
  });

  it("une voisine que le silence a éloignée n'est plus une voisine : plein tarif", () => {
    // Le Ré5 est bien SUIVI d'un Mi5 — mais trois temps plus loin, après un silence.
    // Sans la garde de CONTIGUÏTÉ, ce Mi lointain suffirait à faire passer le Ré pour
    // une note de passage, et n'importe quel abandon deviendrait « légitime » pourvu
    // qu'un jour, quelque part dans la voix, une note conjointe finisse par venir.
    const lointaine = accordAuTemps(
      partition(["D5:2 R:4 E5:2", "G4:8", "E4:8", "C3:8"], 4),
    )!;

    expect(lointaine.chord.rootPc).toBe(0);
    expect(lointaine.etrangeres.map((e) => e.note.step)).toEqual(["D"]);
    // Le Ré est facturé comme l'anomalie qu'il est, et non comme l'étrangère qu'il
    // n'est pas : le même coût, au centime près, que le Ré quitté par un saut.
    expect(lointaine.cout).toBeCloseTo(anomalie.cout, 10);
  });
});

describe("choisirAccord — le poids métrique", () => {
  // Le MÊME Ré étranger, la MÊME durée d'une croche, le MÊME accord de Do dessous :
  // seule sa place dans la mesure change. Sur le temps, il pèse — il faut de bonnes
  // raisons pour l'écarter. Au contretemps, il ne pèse presque rien.
  const base = ["G4:4", "E4:4", "C3:4"];
  const surLeTemps = accordAuTemps(partition(["D5:1 E5:1 E5:2", ...base], 2))!;
  const auContretemps = accordAuTemps(partition(["C5:1 D5:1 E5:2", ...base], 2))!;

  it("les deux lisent Do majeur, le Ré étranger", () => {
    for (const choix of [surLeTemps, auContretemps]) {
      expect(choix.chord.rootPc).toBe(0);
      expect(choix.etrangeres.map((e) => e.note.step)).toEqual(["D"]);
    }
  });

  it("l'étrangère du temps coûte plus cher que celle du contretemps", () => {
    // C'est tout le sens de la prime d'attaque : sans elle, les deux coûts seraient
    // rigoureusement égaux et une croche du contretemps aurait le poids d'une note
    // du temps fort.
    expect(auContretemps.cout).toBeLessThan(surLeTemps.cout);
  });
});

describe("choisirAccord — ce qui n'a pas de lecture", () => {
  it("une quinte à vide n'est pas un accord : null", () => {
    expect(accordAuTemps(partition(["C5:4", "G3:4"], 2))).toBeNull();
  });
});

// ── Non-régression : le choral à quatre voix ─────────────────────────────────
//
// Le même choral que `analyse-pipeline.test.ts`, passé par la NOUVELLE chaîne. Le
// garde-fou de tout le chantier : le coût ne doit pas trouver, sur une écriture nue
// et sans la moindre note étrangère, une harmonie autre que celle qu'y lit un
// musicien — I, V6/5, I, V7/V ‖ V, I.

const CHORAL = (() => {
  const note = (step: string, alter: number, octave: number, duree: number, voice: string) =>
    `<note><pitch><step>${step}</step>${alter === 0 ? "" : `<alter>${alter}</alter>`}` +
    `<octave>${octave}</octave></pitch><duration>${duree}</duration>` +
    `<voice>${voice}</voice></note>`;

  const attrs =
    `<attributes><divisions>1</divisions><key><fifths>0</fifths><mode>major</mode></key>` +
    `<time><beats>4</beats><beat-type>4</beat-type></time></attributes>`;

  // S / A / T / B — quatre voix réelles, deux par portée, séparées par les <backup>.
  const m1 =
    `<measure number="1">${attrs}` +
    note("C", 0, 5, 1, "1") + note("G", 0, 4, 1, "1") +
    note("E", 0, 5, 1, "1") + note("F", 1, 4, 1, "1") +
    `<backup><duration>4</duration></backup>` +
    note("E", 0, 4, 1, "2") + note("D", 0, 4, 1, "2") +
    note("E", 0, 4, 1, "2") + note("C", 0, 4, 1, "2") +
    `</measure>`;
  const m2 =
    `<measure number="2">` +
    note("D", 0, 5, 1, "1") + note("C", 0, 5, 3, "1") +
    `<backup><duration>4</duration></backup>` +
    note("B", 0, 4, 1, "2") + note("E", 0, 4, 3, "2") +
    `</measure>`;
  const m1b =
    `<measure number="1">${attrs}` +
    note("G", 0, 3, 1, "1") + note("F", 0, 3, 1, "1") +
    note("G", 0, 3, 1, "1") + note("A", 0, 3, 1, "1") +
    `<backup><duration>4</duration></backup>` +
    note("C", 0, 3, 1, "2") + note("B", 0, 2, 1, "2") +
    note("C", 0, 3, 1, "2") + note("D", 0, 3, 1, "2") +
    `</measure>`;
  const m2b =
    `<measure number="2">` +
    note("G", 0, 3, 1, "1") + note("G", 0, 3, 3, "1") +
    `<backup><duration>4</duration></backup>` +
    note("G", 0, 2, 1, "2") + note("C", 0, 3, 3, "2") +
    `</measure>`;

  return (
    `<score-partwise><part-list><score-part id="P1"/><score-part id="P2"/></part-list>` +
    `<part id="P1">${m1}${m2}</part><part id="P2">${m1b}${m2b}</part></score-partwise>`
  );
})();

describe("choisirAccord — le choral à quatre voix (non-régression)", () => {
  const score = parseMusicXML(CHORAL);
  const carte = carteMelodique(score.notes);
  const lus = spansParTemps(score).map((span) => {
    const choix = choisirAccord(span, carte, {});
    return {
      mesure: span.measure,
      temps: span.beat,
      accord: choix ? `${choix.chord.rootPc}:${choix.chord.quality}` : "?",
      basse: choix?.chord.bassPc,
    };
  });

  it("rend la même harmonie que le moteur d'origine, basses comprises", () => {
    expect(lus.slice(0, 5)).toEqual([
      // I — Do majeur, basse Do
      { mesure: 1, temps: 1, accord: "0:", basse: 0 },
      // V6/5 — Sol7, basse la SENSIBLE : le Si2. La 7e complète bat la triade qui
      // abandonnerait son Fa.
      { mesure: 1, temps: 2, accord: "7:7", basse: 11 },
      { mesure: 1, temps: 3, accord: "0:", basse: 0 },
      // V7/V — Ré7 (avec son Fa#), basse Ré.
      { mesure: 1, temps: 4, accord: "2:7", basse: 2 },
      // V — Sol majeur, basse Sol.
      { mesure: 2, temps: 1, accord: "7:", basse: 7 },
    ]);
  });

  it("l'accord final tenu est lu Do majeur à chacun de ses temps", () => {
    expect(lus.slice(5)).toEqual([
      { mesure: 2, temps: 2, accord: "0:", basse: 0 },
      { mesure: 2, temps: 3, accord: "0:", basse: 0 },
      { mesure: 2, temps: 4, accord: "0:", basse: 0 },
    ]);
  });

  it("aucune note étrangère : le choral est nu", () => {
    const score2 = parseMusicXML(CHORAL);
    const carte2 = carteMelodique(score2.notes);
    for (const span of spansParTemps(score2)) {
      expect(choisirAccord(span, carte2, {})?.etrangeres).toHaveLength(0);
    }
  });
});

import { describe, it, expect } from "vitest";
import { TPQ, type ParsedNote } from "./musicxml-parse";
import { classer, conjointe, contigues, type ContexteEtrangere } from "./notes-etrangeres";

function n(midi: number, onset = 0, duration = TPQ): ParsedNote {
  return {
    step: "C", alter: 0, octave: 4, pc: ((midi % 12) + 12) % 12, midi,
    onset, duration, measure: 1, beat: 1, voice: "1", part: "P1",
  };
}

/** Contexte par défaut : accord de Do majeur, temps fort, note non tenue. */
function ctx(p: Partial<ContexteEtrangere> = {}): ContexteEtrangere {
  return {
    pcsAccord: [0, 4, 7],
    pcsAccordPrecedent: undefined,
    pcsAccordSuivant: undefined,
    debutSegment: 0,
    finSegment: TPQ,
    tempsFort: true,
    traverseAccords: false,
    ...p,
  };
}

describe("conjointe — le degré conjoint", () => {
  it("un demi-ton et un ton sont conjoints", () => {
    expect(conjointe(60, 61)).toBe(true);
    expect(conjointe(60, 62)).toBe(true);
    expect(conjointe(60, 58)).toBe(true);
  });
  it("une tierce est un saut", () => {
    expect(conjointe(60, 63)).toBe(false);
  });
  it("l'unisson n'est pas un mouvement conjoint", () => {
    expect(conjointe(60, 60)).toBe(false);
  });
});

describe("contigues — deux notes qui se suivent dans le discours", () => {
  it("la note qui attaque là où la précédente s'éteint la suit", () => {
    expect(contigues(n(60, 0, TPQ), n(62, TPQ))).toBe(true);
  });
  it("deux mesures de silence rompent le fil : elles ne se suivent pas", () => {
    expect(contigues(n(60, 0, TPQ), n(62, 8 * TPQ))).toBe(false);
  });
});

describe("classer — les règles de degré conjoint", () => {
  it("NOTE DE PASSAGE : conjointe des deux côtés, même sens", () => {
    // Do → Ré → Mi
    const re = n(62, TPQ / 2, TPQ / 2);
    const t = classer(re, { precedente: n(60), suivante: n(64, TPQ) }, ctx());
    expect(t).toBe("passage");
  });

  it("BRODERIE : conjointe des deux côtés, sens inverse", () => {
    // Do → Ré → Do
    const re = n(62, TPQ / 2, TPQ / 2);
    const t = classer(re, { precedente: n(60), suivante: n(60, TPQ) }, ctx());
    expect(t).toBe("broderie");
  });

  it("ÉCHAPPÉE : abordée par degré conjoint, quittée par SAUT", () => {
    // Do → Ré → Sol
    const re = n(62, TPQ / 2, TPQ / 2);
    const t = classer(re, { precedente: n(60), suivante: n(67, TPQ) }, ctx());
    expect(t).toBe("echappee");
  });

  it("APPOGGIATURE : abordée par SAUT, quittée par degré conjoint", () => {
    // Do → Fa → Mi : saut de quarte sur le temps fort, résolution conjointe
    // descendante. (Sol → Fa → Mi n'aurait rien prouvé : Sol-Fa est un TON, donc
    // un degré conjoint — cette figure-là est une descente, c'est-à-dire un passage.)
    const fa = n(65, 0, TPQ / 2);
    const t = classer(fa, { precedente: n(60, -TPQ), suivante: n(64, TPQ / 2) }, ctx());
    expect(t).toBe("appoggiature");
  });

  it("une note sans voisinage (accord plaqué) n'est PAS nommée", () => {
    expect(classer(n(62), null, ctx())).toBeNull();
  });

  it("une note qui saute des deux côtés n'est PAS nommée", () => {
    const t = classer(n(62), { precedente: n(67, -TPQ), suivante: n(57, TPQ) }, ctx());
    expect(t).toBeNull();
  });

  it("une suivante LOINTAINE ne fait pas une note de passage", () => {
    // La voix reprend deux mesures plus loin, un ton au-dessus. Le fil mélodique
    // est rompu : on ne « passe » pas vers un futur lointain.
    const re = n(62, 0, TPQ);
    const t = classer(re, { precedente: n(60, -TPQ), suivante: n(64, 8 * TPQ) }, ctx());
    expect(t).toBeNull();
  });
});

describe("classer — retard et appoggiature : SEULE la préparation les sépare", () => {
  // Le 4-3 de cadence en Do majeur : le Do se retarde sur l'accord de Sol,
  // et se résout sur le Si.
  const solMajeur = [7, 11, 2];

  it("RETARD : le Do était consonant à l'accord PRÉCÉDENT, tenu, résolu vers le bas", () => {
    // La note attaque AVANT le segment courant : elle est préparée.
    const doTenu = n(72, -TPQ, 2 * TPQ);
    const t = classer(
      doTenu,
      { precedente: n(72, -2 * TPQ), suivante: n(71, TPQ) },
      ctx({
        pcsAccord: solMajeur,
        pcsAccordPrecedent: [0, 4, 7], // Do majeur : le Do y est consonant
        debutSegment: 0,
        finSegment: TPQ,
      }),
    );
    expect(t).toBe("retard");
  });

  it("APPOGGIATURE : le MÊME Do, mais ATTAQUÉ sur le temps — non préparé", () => {
    const doAttaque = n(72, 0, TPQ);
    const t = classer(
      doAttaque,
      { precedente: n(76, -TPQ), suivante: n(71, TPQ) },
      ctx({
        pcsAccord: solMajeur,
        pcsAccordPrecedent: [0, 4, 7],
        debutSegment: 0,
        finSegment: TPQ,
      }),
    );
    expect(t).toBe("appoggiature");
  });

  it("pas de retard si la note n'était PAS consonante à l'accord précédent", () => {
    const doTenu = n(72, -TPQ, 2 * TPQ);
    const t = classer(
      doTenu,
      { precedente: n(72, -2 * TPQ), suivante: n(71, TPQ) },
      ctx({
        pcsAccord: solMajeur,
        pcsAccordPrecedent: [2, 5, 9], // Ré mineur : le Do n'y est pas
        debutSegment: 0,
        finSegment: TPQ,
      }),
    );
    expect(t).not.toBe("retard");
  });

  it("pas de retard si la résolution monte", () => {
    const doTenu = n(72, -TPQ, 2 * TPQ);
    const t = classer(
      doTenu,
      { precedente: n(72, -2 * TPQ), suivante: n(74, TPQ) },
      ctx({
        pcsAccord: solMajeur,
        pcsAccordPrecedent: [0, 4, 7],
        debutSegment: 0,
        finSegment: TPQ,
      }),
    );
    expect(t).not.toBe("retard");
  });
});

describe("classer — anticipation et pédale", () => {
  it("ANTICIPATION : la note est un son de l'accord SUIVANT, sur temps faible, répétée", () => {
    const doAnticipe = n(72, TPQ / 2, TPQ / 2);
    const t = classer(
      doAnticipe,
      { precedente: n(74, 0), suivante: n(72, TPQ) },
      ctx({
        pcsAccord: [7, 11, 2],      // Sol majeur
        pcsAccordSuivant: [0, 4, 7], // Do majeur : le Do y est chez lui
        tempsFort: false,
      }),
    );
    expect(t).toBe("anticipation");
  });

  it("PÉDALE : la note traverse plusieurs accords", () => {
    const doPedale = n(36, 0, 4 * TPQ);
    const t = classer(
      doPedale,
      { precedente: undefined, suivante: n(36, 4 * TPQ) },
      ctx({ pcsAccord: [7, 11, 2, 5], traverseAccords: true }),
    );
    expect(t).toBe("pedale");
  });

  it("la pédale passe AVANT les règles de degré conjoint", () => {
    // Sans cet ordre, la note suivante (un degré conjoint plus haut, très loin
    // dans la voix) ferait passer la pédale pour une note de passage.
    const doPedale = n(36, 0, 4 * TPQ);
    const t = classer(
      doPedale,
      { precedente: n(34, -TPQ), suivante: n(38, 4 * TPQ) },
      ctx({ pcsAccord: [7, 11, 2, 5], traverseAccords: true }),
    );
    expect(t).toBe("pedale");
  });

  it("le RETARD passe avant la pédale : lui aussi est tenu par-dessus la barre", () => {
    const doTenu = n(72, -TPQ, 2 * TPQ);
    const t = classer(
      doTenu,
      { precedente: n(72, -2 * TPQ), suivante: n(71, TPQ) },
      ctx({
        pcsAccord: [7, 11, 2],
        pcsAccordPrecedent: [0, 4, 7],
        traverseAccords: true, // il traverse, mais c'est un retard
      }),
    );
    expect(t).toBe("retard");
  });
});

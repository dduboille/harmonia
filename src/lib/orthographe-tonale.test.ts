import { describe, it, expect } from "vitest";
import { nomNoteFr, nomNoteEn, armurePresumee } from "./orthographe-tonale";

/** Armures usuelles, pour lire les cas ci-dessous sans compter sur ses doigts. */
const DO_MAJEUR = 0;
const MIB_MINEUR = -6;   // mib mineur / Solb majeur
const MI_MAJEUR = 4;
const SIB_MINEUR = -5;
const MIB_MAJEUR = -3;
const LAB_MINEUR = -7;

describe("nomNoteFr — la même hauteur, selon l'armure", () => {
  it("la hauteur 3 s'écrit Mib en mib mineur et Ré# en mi majeur", () => {
    expect(nomNoteFr(3, MIB_MINEUR)).toBe("Mib");
    expect(nomNoteFr(3, MI_MAJEUR)).toBe("Ré#");
  });

  it("la hauteur 6 s'écrit Solb côté bémols et Fa# côté dièses", () => {
    expect(nomNoteFr(6, MIB_MINEUR)).toBe("Solb");
    expect(nomNoteFr(6, DO_MAJEUR)).toBe("Fa#");
    expect(nomNoteFr(6, 6)).toBe("Fa#");
  });
});

describe("nomNoteFr — le cas qui motive tout : mib mineur (6 bémols)", () => {
  // Les degrés de mib mineur naturel : Mib Fa Solb Lab Sib Dob Réb.
  const attendu: Array<[number, string]> = [
    [3, "Mib"],   // i
    [5, "Fa"],    // ii°
    [6, "Solb"],  // III
    [8, "Lab"],   // iv
    [10, "Sib"],  // v
    [11, "Dob"],  // VI  — et non « Si », bien que Si n'ait aucune altération
    [1, "Réb"],   // VII
  ];
  it.each(attendu)("hauteur %i → %s", (pc, nom) => {
    expect(nomNoteFr(pc, MIB_MINEUR)).toBe(nom);
  });

  it("la sensible du mineur harmonique reste un Ré bécarre", () => {
    // Ré♮ (hauteur 2) est le 7e degré haussé ; l'écrire Mibb serait absurde.
    expect(nomNoteFr(2, MIB_MINEUR)).toBe("Ré");
  });
});

describe("nomNoteFr — les autres armures bémolisées", () => {
  it("sib mineur : la tonique est Sib, pas La#", () => {
    expect(nomNoteFr(10, SIB_MINEUR)).toBe("Sib");
    expect(nomNoteFr(1, SIB_MINEUR)).toBe("Réb");   // III
    expect(nomNoteFr(6, SIB_MINEUR)).toBe("Solb");  // VI
  });

  it("mib majeur : I, IV et V s'écrivent Mib, Lab, Sib", () => {
    expect(nomNoteFr(3, MIB_MAJEUR)).toBe("Mib");
    expect(nomNoteFr(8, MIB_MAJEUR)).toBe("Lab");
    expect(nomNoteFr(10, MIB_MAJEUR)).toBe("Sib");
  });

  it("lab mineur (7 bémols) : la tonique est Lab, pas Sol#", () => {
    expect(nomNoteFr(8, LAB_MINEUR)).toBe("Lab");
    expect(nomNoteFr(11, LAB_MINEUR)).toBe("Dob");
    expect(nomNoteFr(1, LAB_MINEUR)).toBe("Réb");
  });
});

describe("nomNoteFr — les armures diésées gardent leurs dièses", () => {
  it("mi majeur : les degrés altérés sont des dièses", () => {
    expect(nomNoteFr(4, MI_MAJEUR)).toBe("Mi");
    expect(nomNoteFr(6, MI_MAJEUR)).toBe("Fa#");
    expect(nomNoteFr(8, MI_MAJEUR)).toBe("Sol#");
    expect(nomNoteFr(11, MI_MAJEUR)).toBe("Si");
    expect(nomNoteFr(1, MI_MAJEUR)).toBe("Do#");
  });

  it("do# mineur (4 dièses) : tonique Do#, pas Réb", () => {
    expect(nomNoteFr(1, MI_MAJEUR)).toBe("Do#");
  });
});

describe("nomNoteFr — do majeur, les emprunts penchent du bon côté", () => {
  it("les degrés empruntés s'écrivent en bémols (bIII, bVI, bVII)", () => {
    expect(nomNoteFr(3, DO_MAJEUR)).toBe("Mib");
    expect(nomNoteFr(8, DO_MAJEUR)).toBe("Lab");
    expect(nomNoteFr(10, DO_MAJEUR)).toBe("Sib");
  });

  it("les sensibles de dominantes secondaires s'écrivent en dièses", () => {
    expect(nomNoteFr(6, DO_MAJEUR)).toBe("Fa#");   // tierce de Ré7 = V/V
    expect(nomNoteFr(1, DO_MAJEUR)).toBe("Do#");   // tierce de La7 = V/ii
  });
});

describe("nomNoteFr — le forçage par le degré chiffré", () => {
  it("« forcer bémol » impose le côté bémol même en armure diésée", () => {
    expect(nomNoteFr(1, MI_MAJEUR)).toBe("Do#");
    expect(nomNoteFr(1, MI_MAJEUR, "bemol")).toBe("Réb");
  });

  it("« forcer dièse » impose le côté dièse même en armure bémolisée", () => {
    expect(nomNoteFr(6, MIB_MINEUR)).toBe("Solb");
    expect(nomNoteFr(6, MIB_MINEUR, "diese")).toBe("Fa#");
  });
});

describe("nomNoteFr — invariants", () => {
  it("rend un nom pour toute hauteur dans toute armure, sans triple altération", () => {
    for (let f = -7; f <= 7; f++) {
      for (let pc = 0; pc < 12; pc++) {
        const n = nomNoteFr(pc, f);
        expect(n, `pc=${pc} armure=${f}`).toMatch(/^(Do|Ré|Mi|Fa|Sol|La|Si)(#{1,2}|b{1,2})?$/);
      }
    }
  });

  it("les sept degrés d'une armure sont tous écrits sans altération redondante", () => {
    // Pour chaque armure, les 7 notes diatoniques doivent porter au plus une altération.
    for (let f = -7; f <= 7; f++) {
      for (let d = 0; d < 7; d++) {
        const pc = (((7 * (f - 1 + d)) % 12) + 12) % 12;
        const n = nomNoteFr(pc, f);
        expect(n, `armure=${f} degré=${d} → ${n}`).not.toMatch(/(##|bb)/);
      }
    }
  });
});

describe("nomNoteEn — mêmes règles, lettres anglaises", () => {
  it("hauteur 3 : Eb en mib mineur, D# en mi majeur", () => {
    expect(nomNoteEn(3, MIB_MINEUR)).toBe("Eb");
    expect(nomNoteEn(3, MI_MAJEUR)).toBe("D#");
  });

  it("hauteur 11 en mib mineur : Cb", () => {
    expect(nomNoteEn(11, MIB_MINEUR)).toBe("Cb");
  });
});

describe("armurePresumee — le repli quand seule la hauteur est connue", () => {
  it("retient l'armure la plus simple des deux enharmonies", () => {
    expect(armurePresumee(0, "major")).toBe(0);    // Do majeur
    expect(armurePresumee(3, "major")).toBe(-3);   // Mib majeur, pas Ré#
    expect(armurePresumee(9, "minor")).toBe(0);    // la mineur
    expect(armurePresumee(3, "minor")).toBe(-6);   // mib mineur, pas ré# (+6 aussi possible)
  });

  it("tranche les enharmonies à 6 altérations vers la forme la plus courante", () => {
    // Fa# majeur (+6) et Solb majeur (-6) sont aussi simples l'un que l'autre ;
    // on retient le premier trouvé, ce qui reste cohérent d'un appel à l'autre.
    expect(Math.abs(armurePresumee(6, "major"))).toBe(6);
  });
});

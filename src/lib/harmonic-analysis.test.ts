import { describe, it, expect } from "vitest";
import {
  identifyChord,
  analyzeChord,
  annotateResolutions,
  buildChromaEvents,
  PC,
} from "./harmonic-analysis";

// Aide : analyse un accord donné par ses classes de hauteurs, dans une tonalité.
function an(pcs: number[], tonicPc: number, mode: "major" | "minor") {
  const chord = identifyChord(pcs)!;
  return analyzeChord(chord, tonicPc, mode);
}

// Construit une séquence analysée à partir de listes de pcs, résolutions comprises.
function seq(chords: number[][], tonicPc: number, mode: "major" | "minor") {
  const s = chords.map((pcs, i) => ({
    result: analyzeChord(identifyChord(pcs)!, tonicPc, mode),
    measure: i + 1,
  }));
  annotateResolutions(s.map((x) => x.result), tonicPc, mode);
  return s;
}

describe("identifyChord", () => {
  it("reconnaît un accord parfait majeur", () => {
    expect(identifyChord([0, 4, 7])?.quality).toBe("");
  });
  it("reconnaît une 7e de dominante", () => {
    const c = identifyChord([9, 1, 4, 7])!; // La-Do#-Mi-Sol
    expect(c.rootPc).toBe(9);
    expect(c.quality).toBe("7");
  });
});

describe("analyse diatonique (majeur)", () => {
  it("Sol7 en Do majeur est V7 (fonction D)", () => {
    const r = an([7, 11, 2, 5], PC.Do, "major"); // Sol-Si-Ré-Fa
    expect(r.degree).toBe("V7");
    expect(r.degreeNum).toBe(5);
    expect(r.fonction).toBe("D");
    expect(r.categorie).toBe("diatonique");
  });

  it("Rém en Do majeur est IIm (fonction SD)", () => {
    const r = an([2, 5, 9], PC.Do, "major"); // Ré-Fa-La
    expect(r.degreeNum).toBe(2);
    expect(r.fonction).toBe("SD");
    expect(r.categorie).toBe("diatonique");
  });
});

describe("analyse diatonique (mineur) — le piège de la 7e élevée", () => {
  it("Sol majeur en Do mineur reste diatonique (V), grâce à la 7e élevée", () => {
    const r = an([7, 11, 2], PC.Do, "minor"); // Sol-Si♮-Ré
    expect(r.categorie).toBe("diatonique");
    expect(r.degreeNum).toBe(5);
    expect(r.fonction).toBe("D");
  });
});

describe("chromatisme non encore classé", () => {
  it("La7 en Do majeur n'est pas diatonique", () => {
    const r = an([9, 1, 4, 7], PC.Do, "major"); // La-Do#-Mi-Sol
    expect(r.categorie).not.toBe("diatonique");
  });
});

describe("dominantes secondaires", () => {
  it("La7 en Do majeur est V7/ii", () => {
    const r = an([9, 1, 4, 7], PC.Do, "major"); // La-Do#-Mi-Sol
    expect(r.degree).toBe("V7/ii");
    expect(r.categorie).toBe("dominante_secondaire");
    expect(r.cible).toBe("ii");
    expect(r.fonction).toBe("D");
  });

  it("Ré7 en Do majeur est V7/V", () => {
    const r = an([2, 6, 9, 0], PC.Do, "major"); // Ré-Fa#-La-Do
    expect(r.degree).toBe("V7/V");
    expect(r.cible).toBe("V");
  });

  it("Mi majeur en Do majeur est V/vi", () => {
    const r = an([4, 8, 11], PC.Do, "major"); // Mi-Sol#-Si
    expect(r.degree).toBe("V/vi");
    expect(r.cible).toBe("vi");
    expect(r.categorie).toBe("dominante_secondaire");
  });

  it("Sol7 en Do majeur reste V7 diatonique (et non V7/I)", () => {
    const r = an([7, 11, 2, 5], PC.Do, "major");
    expect(r.categorie).toBe("diatonique");
    expect(r.degree).toBe("V7");
  });
});

describe("sensibles de degré", () => {
  it("Do#°7 en Do majeur est vii°7/ii", () => {
    // Do#-Mi-Sol-La# (7e diminuée sur Do#), un demi-ton sous Ré (ii)
    const r = an([1, 4, 7, 10], PC.Do, "major");
    expect(r.degree).toBe("vii°7/ii");
    expect(r.categorie).toBe("sensible_degre");
    expect(r.cible).toBe("ii");
    expect(r.fonction).toBe("D");
  });

  it("Fa#°7 en Do majeur est vii°7/V", () => {
    // Fa#-La-Do-Mi♭ : un demi-ton sous Sol (V)
    const r = an([6, 9, 0, 3], PC.Do, "major");
    expect(r.degree).toBe("vii°7/V");
    expect(r.cible).toBe("V");
  });
});

// CORRECTION B(a) — la 7e diminuée est symétrique : plusieurs de ses notes
// peuvent viser une cible tonicisable valide. L'étiquette ne doit JAMAIS
// dépendre de l'ordre d'écriture des notes dans le MusicXML.
describe("désambiguïsation du °7 — indépendance à l'ordre des notes", () => {
  const ROTATIONS_DO_DIESE = [
    [1, 4, 7, 10],
    [4, 7, 10, 1],
    [7, 10, 1, 4],
    [10, 1, 4, 7],
  ];

  it("Do#°7 donne la même étiquette quelle que soit la rotation des notes", () => {
    const etiquettes = ROTATIONS_DO_DIESE.map((pcs) => {
      const r = an(pcs, PC.Do, "major");
      return `${r.degree}|${r.rootFr}|${r.cible}`;
    });
    expect(new Set(etiquettes).size).toBe(1);
    // À défaut de résolution, la priorité des cibles tranche : V, ii, vi, IV, iii.
    // Do# ne vise pas V ; il vise ii — qui l'emporte sur IV (visé par le Mi).
    expect(etiquettes[0]).toBe("vii°7/ii|Do#|ii");
  });

  const ROTATIONS_FA_DIESE = [
    [6, 9, 0, 3],
    [9, 0, 3, 6],
    [0, 3, 6, 9],
    [3, 6, 9, 0],
  ];

  it("Fa#°7 donne la même étiquette quelle que soit la rotation des notes", () => {
    const etiquettes = ROTATIONS_FA_DIESE.map((pcs) => {
      const r = an(pcs, PC.Do, "major");
      return `${r.degree}|${r.rootFr}|${r.cible}`;
    });
    expect(new Set(etiquettes).size).toBe(1);
    // Fa# vise V (prioritaire) ; le Mi♭ viserait iii, moins prioritaire.
    expect(etiquettes[0]).toBe("vii°7/V|Fa#|V");
  });
});

describe("emprunts modaux", () => {
  it("Fa mineur en Do majeur est iv (emprunt, SD)", () => {
    const r = an([5, 8, 0], PC.Do, "major"); // Fa-Lab-Do
    expect(r.degree).toBe("iv");
    expect(r.categorie).toBe("emprunt");
    expect(r.fonction).toBe("SD");
  });

  it("Lab majeur en Do majeur est bVI (emprunt)", () => {
    const r = an([8, 0, 3], PC.Do, "major"); // Lab-Do-Mib
    expect(r.degree).toBe("bVI");
    expect(r.categorie).toBe("emprunt");
    expect(r.fonction).toBe("SD");
  });

  it("Sib majeur en Do majeur est bVII (emprunt)", () => {
    const r = an([10, 2, 5], PC.Do, "major"); // Sib-Ré-Fa
    expect(r.degree).toBe("bVII");
    expect(r.categorie).toBe("emprunt");
  });

  it("Mib majeur en Do majeur est bIII (emprunt, T)", () => {
    const r = an([3, 7, 10], PC.Do, "major"); // Mib-Sol-Sib
    expect(r.degree).toBe("bIII");
    expect(r.fonction).toBe("T");
  });
});

describe("napolitain", () => {
  it("Réb majeur en Do majeur est bII (napolitain, SD)", () => {
    const r = an([1, 5, 8], PC.Do, "major"); // Réb-Fa-Lab
    expect(r.degree).toBe("bII");
    expect(r.categorie).toBe("napolitain");
    expect(r.fonction).toBe("SD");
  });
});

describe("résidu chromatique", () => {
  it("Do augmenté en Do majeur reste chromatique (inclassable)", () => {
    // Do-Mi-Sol# : ni dominante secondaire, ni sensible, ni emprunt, ni napolitain
    const r = an([0, 4, 8], PC.Do, "major");
    expect(r.categorie).toBe("chromatique");
    expect(r.fonction).toBe("?");
  });

  // CORRECTION A — l'emprunt se réfère au mode homonyme NATUREL (sans 7e élevée).
  it("Mib augmenté en Do majeur reste chromatique (et non un emprunt bIII)", () => {
    // Mib-Sol-Si♮ : le Si♮ n'appartient PAS au Do mineur naturel.
    // Il n'y figure que par la 7e élevée du mineur harmonique, qui n'a rien à
    // faire dans la définition de l'emprunt modal.
    const r = an([3, 7, 11], PC.Do, "major");
    expect(r.categorie).toBe("chromatique");
    expect(r.fonction).toBe("?");
  });
});

describe("résolution des dominantes secondaires", () => {
  it("La7 → Rém : résolue", () => {
    const s = seq([[9, 1, 4, 7], [2, 5, 9]], PC.Do, "major");
    expect(s[0].result.resolue).toBe(true);
  });

  it("La7 → Fa : non résolue", () => {
    const s = seq([[9, 1, 4, 7], [5, 9, 0]], PC.Do, "major");
    expect(s[0].result.resolue).toBe(false);
  });

  it("Mi7 → La7 → Rém : chaîne de dominantes (Mi7 résolue)", () => {
    const s = seq([[4, 8, 11, 2], [9, 1, 4, 7], [2, 5, 9]], PC.Do, "major");
    expect(s[0].result.degree).toBe("V7/vi");
    expect(s[0].result.resolue).toBe(true);
    expect(s[1].result.degree).toBe("V7/ii");
    expect(s[1].result.resolue).toBe(true);
  });
});

// CORRECTION B(b) — c'est la RÉSOLUTION qui désigne la cible d'une 7e diminuée.
describe("désambiguïsation du °7 par la résolution", () => {
  it("Do#°7 → Rém est vii°7/ii (résolu)", () => {
    const s = seq([[1, 4, 7, 10], [2, 5, 9]], PC.Do, "major");
    expect(s[0].result.degree).toBe("vii°7/ii");
    expect(s[0].result.cible).toBe("ii");
    expect(s[0].result.rootFr).toBe("Do#");
    expect(s[0].result.resolue).toBe(true);
  });

  it("le MÊME accord, résolu sur Fa, devient vii°7/IV", () => {
    // Accord identique (Do#-Mi-Sol-La#), résolution différente : le Mi est alors
    // la sensible, et la cible est le IV.
    const s = seq([[1, 4, 7, 10], [5, 9, 0]], PC.Do, "major");
    expect(s[0].result.degree).toBe("vii°7/IV");
    expect(s[0].result.cible).toBe("IV");
    expect(s[0].result.rootFr).toBe("Mi");
    expect(s[0].result.resolue).toBe(true);
  });

  it("Fa#°7 → Sol est vii°7/V (résolu)", () => {
    const s = seq([[6, 9, 0, 3], [7, 11, 2]], PC.Do, "major");
    expect(s[0].result.degree).toBe("vii°7/V");
    expect(s[0].result.cible).toBe("V");
    expect(s[0].result.resolue).toBe(true);
  });

  it("l'arbitrage par la résolution ne dépend pas de l'ordre des notes", () => {
    // Les 4 rotations du même °7, toutes résolues sur Fa : toutes vii°7/IV.
    const etiquettes = [
      [1, 4, 7, 10],
      [4, 7, 10, 1],
      [7, 10, 1, 4],
      [10, 1, 4, 7],
    ].map((pcs) => {
      const s = seq([pcs, [5, 9, 0]], PC.Do, "major");
      const r = s[0].result;
      return `${r.degree}|${r.rootFr}|${r.resolue}`;
    });
    expect(new Set(etiquettes).size).toBe(1);
    expect(etiquettes[0]).toBe("vii°7/IV|Mi|true");
  });

  it("sans résolution reconnaissable, la priorité des cibles s'applique", () => {
    // Do#°7 → Do : aucune des cibles possibles (ii, IV) n'est atteinte.
    const s = seq([[1, 4, 7, 10], [0, 4, 7]], PC.Do, "major");
    expect(s[0].result.degree).toBe("vii°7/ii");
    expect(s[0].result.resolue).toBe(false);
  });
});

// CORRECTION M1/M2/M4 — un accord isolé ne suffit pas à trancher : c'est la
// RÉSOLUTION qui décide. Le mode mineur est le terrain de tous les pièges, car
// la tonique y est une quinte juste au-dessus du IV, et le VII y est une 7e de
// dominante entièrement diatonique.
describe("mineur — arbitrage des dominantes secondaires par la résolution", () => {
  const DO_M = [0, 4, 7];       // Do majeur
  const DO_m = [0, 3, 7];       // Do mineur
  const DO_7 = [0, 4, 7, 10];   // Do7
  const FA_M = [5, 9, 0];       // Fa majeur
  const FA_m = [5, 8, 0];       // Fa mineur
  const SOL_M = [7, 11, 2];     // Sol majeur
  const SIB_M = [10, 2, 5];     // Sib majeur
  const SIB_7 = [10, 2, 5, 8];  // Sib7
  const MIB_M = [3, 7, 10];     // Mib majeur

  // M1 — la tierce picarde n'est PAS un V/iv.
  it("tierce picarde : Do majeur en dernier accord de Do mineur est un I emprunté (T)", () => {
    const s = seq([SOL_M, DO_M], PC.Do, "minor"); // Sol → Do majeur (final)
    const picarde = s[1].result;
    expect(picarde.categorie).toBe("emprunt");
    expect(picarde.degree).toBe("I");
    expect(picarde.fonction).toBe("T");
    expect(picarde.cible).toBeUndefined();
  });

  it("V/iv légitime : Do majeur → Fa mineur en Do mineur", () => {
    const s = seq([DO_M, FA_m], PC.Do, "minor");
    expect(s[0].result.degree).toBe("V/iv");
    expect(s[0].result.categorie).toBe("dominante_secondaire");
    expect(s[0].result.cible).toBe("iv");
    expect(s[0].result.resolue).toBe(true);
  });

  it("V7/iv : Do7 → Fa mineur en Do mineur (inchangé)", () => {
    const s = seq([DO_7, FA_m], PC.Do, "minor");
    expect(s[0].result.degree).toBe("V7/iv");
    expect(s[0].result.categorie).toBe("dominante_secondaire");
    expect(s[0].result.resolue).toBe(true);
  });

  // M2 — le Sib7, pourtant entièrement diatonique du Do mineur naturel, est la
  // dominante du relatif majeur dès lors qu'il s'y résout.
  it("Sib7 → Mib en Do mineur est V7/III (promotion)", () => {
    const s = seq([SIB_7, MIB_M], PC.Do, "minor");
    expect(s[0].result.categorie).toBe("dominante_secondaire");
    expect(s[0].result.degree).toBe("V7/III");
    expect(s[0].result.cible).toBe("III");
    expect(s[0].result.fonction).toBe("D");
    expect(s[0].result.resolue).toBe(true);
  });

  it("Sib7 → Sol en Do mineur reste diatonique (VII7) : la promotion est conditionnelle", () => {
    const s = seq([SIB_7, SOL_M], PC.Do, "minor");
    expect(s[0].result.categorie).toBe("diatonique");
    expect(s[0].result.degree).toBe("VII7");
    expect(s[0].result.cible).toBeUndefined();
  });

  // M4 — Fa majeur n'est un V/VII que s'il va vraiment sur Sib.
  it("Fa → Sol → Do mineur : le Fa majeur est un IV emprunté (SD), pas un V/VII", () => {
    const s = seq([FA_M, SOL_M, DO_m], PC.Do, "minor");
    expect(s[0].result.categorie).toBe("emprunt");
    expect(s[0].result.degree).toBe("IV");
    expect(s[0].result.fonction).toBe("SD");
    expect(s[0].result.cible).toBeUndefined();
    expect(s[1].result.categorie).toBe("diatonique"); // Sol = V
    expect(s[1].result.degreeNum).toBe(5);
  });

  it("V/VII légitime : Fa → Sib en Do mineur", () => {
    const s = seq([FA_M, SIB_M], PC.Do, "minor");
    expect(s[0].result.categorie).toBe("dominante_secondaire");
    expect(s[0].result.degree).toBe("V/VII");
    expect(s[0].result.resolue).toBe(true);
  });

  it("une 7e de dominante non résolue N'EST PAS rétrogradée : La7 → Fa en Do majeur", () => {
    const s = seq([[9, 1, 4, 7], FA_M], PC.Do, "major");
    expect(s[0].result.categorie).toBe("dominante_secondaire");
    expect(s[0].result.degree).toBe("V7/ii");
    expect(s[0].result.resolue).toBe(false); // rompue secondaire
  });

  // Garde-fou : la promotion exige la tension d'un triton. Un accord PARFAIT
  // diatonique n'est jamais une dominante secondaire, même suivi du degré situé
  // une quinte plus bas — sinon toute marche de quintes (I→IV, VII→III→VI…)
  // serait relue en chaîne de dominantes.
  it("I → IV en Do majeur reste diatonique (et non V/IV → IV)", () => {
    const s = seq([DO_M, FA_M], PC.Do, "major");
    expect(s[0].result.categorie).toBe("diatonique");
    expect(s[0].result.degree).toBe("I");
    expect(s[1].result.categorie).toBe("diatonique");
    expect(s[1].result.degree).toBe("IV");
  });

  it("Sib (accord parfait) → Mib en Do mineur reste diatonique (VII) : pas de triton", () => {
    const s = seq([SIB_M, MIB_M], PC.Do, "minor");
    expect(s[0].result.categorie).toBe("diatonique");
    expect(s[0].result.degree).toBe("VII");
  });

  it("la tierce picarde produit un événement d'emprunt expliqué", () => {
    const s = seq([SOL_M, DO_M], PC.Do, "minor");
    const events = buildChromaEvents(s, PC.Do, "minor");
    expect(events).toHaveLength(1);
    expect(events[0].degree).toBe("I");
    expect(events[0].categorie).toBe("emprunt");
    expect(events[0].explication).toContain("homonyme");
  });
});

describe("événements chromatiques", () => {
  it("produit un événement expliqué pour La7 → Rém", () => {
    const s = seq([[9, 1, 4, 7], [2, 5, 9]], PC.Do, "major");
    const events = buildChromaEvents(s, PC.Do, "major");
    expect(events).toHaveLength(1);
    expect(events[0].degree).toBe("V7/ii");
    expect(events[0].measure).toBe(1);
    expect(events[0].explication).toContain("Tonicise");
  });

  it("ne produit aucun événement pour une suite diatonique", () => {
    const s = seq([[7, 11, 2], [0, 4, 7]], PC.Do, "major"); // Sol → Do
    expect(buildChromaEvents(s, PC.Do, "major")).toHaveLength(0);
  });

  it("signale une dominante secondaire non résolue", () => {
    const s = seq([[9, 1, 4, 7], [5, 9, 0]], PC.Do, "major"); // La7 → Fa
    const events = buildChromaEvents(s, PC.Do, "major");
    expect(events[0].resolue).toBe(false);
    expect(events[0].explication).toContain("Non résolue");
  });

  it("signale la chaîne de dominantes", () => {
    const s = seq([[4, 8, 11, 2], [9, 1, 4, 7], [2, 5, 9]], PC.Do, "major");
    const events = buildChromaEvents(s, PC.Do, "major");
    expect(events).toHaveLength(2);
    expect(events[0].explication).toContain("chaîne de dominantes");
  });

  it("explique un emprunt modal", () => {
    const s = seq([[5, 8, 0], [0, 4, 7]], PC.Do, "major"); // Fam → Do
    const events = buildChromaEvents(s, PC.Do, "major");
    expect(events[0].degree).toBe("iv");
    expect(events[0].explication).toContain("homonyme");
  });
});

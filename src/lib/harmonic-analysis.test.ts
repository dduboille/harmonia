import { describe, it, expect } from "vitest";
import {
  identifyChord,
  identifyChordFromNotes,
  inversionOf,
  figureOf,
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

  it("Rém en Do majeur est ii (fonction SD)", () => {
    const r = an([2, 5, 9], PC.Do, "major"); // Ré-Fa-La
    expect(r.degree).toBe("ii");
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

// ── CORRECTION 1 — le vii°7 DIATONIQUE du mineur harmonique ───────────────────
//
// Si-Ré-Fa-Lab en Do mineur est l'accord chromatique le plus courant du choral
// en mineur. C'est une 7e diminuée : un empilement de tierces mineures, donc un
// accord SYMÉTRIQUE. `identifyChord` en choisit la fondamentale au hasard (la
// première note rencontrée dans le MusicXML). L'étiquette et la FONCTION ne
// doivent en aucun cas dépendre de cet ordre : la fondamentale est la sensible
// de la tonalité (Si), un point c'est tout.
describe("vii°7 diatonique du mineur — fondamentale canonique, jamais l'ordre des notes", () => {
  const ROTATIONS_SI = [
    [11, 2, 5, 8], // Si-Ré-Fa-Lab
    [2, 5, 8, 11], // Ré-Fa-Lab-Si
    [5, 8, 11, 2], // Fa-Lab-Si-Ré
    [8, 11, 2, 5], // Lab-Si-Ré-Fa
  ];

  it("les 4 rotations donnent le même chiffrage vii°7 (degré 7, fonction D, diatonique)", () => {
    const lus = ROTATIONS_SI.map((pcs) => {
      const r = an(pcs, PC.Do, "minor");
      return `${r.degree}|${r.degreeNum}|${r.fonction}|${r.categorie}|${r.rootFr}`;
    });
    expect(new Set(lus).size).toBe(1);
    expect(lus[0]).toBe("vii°7|7|D|diatonique|Si");
  });

  it("Si°7 → Do mineur : l'accord reste vii°7 (D), quelle que soit la rotation", () => {
    for (const pcs of ROTATIONS_SI) {
      const s = seq([pcs, [0, 3, 7]], PC.Do, "minor"); // °7 → i
      expect(s[0].result.degree).toBe("vii°7");
      expect(s[0].result.fonction).toBe("D");
      expect(s[0].result.categorie).toBe("diatonique");
      expect(s[0].result.rootFr).toBe("Si");
      expect(s[1].result.degree).toBe("i"); // Do mineur
    }
  });

  it("la résolution peut toujours désigner une autre cible : Si°7 → Mib = vii°7/III", () => {
    // Ré-Fa-Lab-Si est aussi la 7e diminuée de la sensible de Mib (relatif majeur).
    const s = seq([[11, 2, 5, 8], [3, 7, 10]], PC.Do, "minor");
    expect(s[0].result.categorie).toBe("sensible_degre");
    expect(s[0].result.degree).toBe("vii°7/III");
    expect(s[0].result.cible).toBe("III");
    expect(s[0].result.rootFr).toBe("Ré");
    expect(s[0].result.resolue).toBe(true);
  });
});

// ── CORRECTION 2 — la qualité de l'accord emprunté doit être écrite ───────────
//
// Un chiffrage « ii7 » se lit Rém7 : ce n'est PAS l'accord Ré-Fa-Lab-Do. Un
// « bVI7 » se lit Lab7 (7e de dominante) : ce n'est PAS Lab Maj7 (bVIΔ7).
describe("emprunts — le symbole de qualité est obligatoire", () => {
  it("Ré ø7 en Do majeur est iiø7 (et non ii7)", () => {
    const r = an([2, 5, 8, 0], PC.Do, "major"); // Ré-Fa-Lab-Do
    expect(r.degree).toBe("iiø7");
    expect(r.categorie).toBe("emprunt");
    expect(r.fonction).toBe("SD");
  });

  it("Ré ° en Do majeur est ii° (et non ii)", () => {
    const r = an([2, 5, 8], PC.Do, "major"); // Ré-Fa-Lab
    expect(r.degree).toBe("ii°");
    expect(r.categorie).toBe("emprunt");
    expect(r.fonction).toBe("SD");
  });

  // Le Δ dit la 7e MAJEURE, le 7 dit l'ÉTAT FONDAMENTAL (renversement 0) : les
  // deux se cumulent, comme « V7 ». Un « bVIΔ » sans chiffre ne dirait pas dans
  // quel renversement l'accord se présente.
  it("Lab Maj7 en Do majeur est bVIΔ7 (et non bVI7)", () => {
    const r = an([8, 0, 3, 7], PC.Do, "major"); // Lab-Do-Mib-Sol
    expect(r.degree).toBe("bVIΔ7");
    expect(r.categorie).toBe("emprunt");
    expect(r.fonction).toBe("SD");
  });

  it("Mib Maj7 en Do majeur est bIIIΔ7", () => {
    const r = an([3, 7, 10, 2], PC.Do, "major"); // Mib-Sol-Sib-Ré
    expect(r.degree).toBe("bIIIΔ7");
    expect(r.categorie).toBe("emprunt");
    expect(r.fonction).toBe("T");
  });

  it("Sib7 (7e de dominante) en Do majeur reste bVII7", () => {
    const r = an([10, 2, 5, 8], PC.Do, "major"); // Sib-Ré-Fa-Lab
    expect(r.degree).toBe("bVII7");
    expect(r.categorie).toBe("emprunt");
  });

  it("Fam7 en Do majeur est iv7 (la minuscule dit déjà « mineur »)", () => {
    const r = an([5, 8, 0, 3], PC.Do, "major"); // Fa-Lab-Do-Mib
    expect(r.degree).toBe("iv7");
    expect(r.categorie).toBe("emprunt");
    expect(r.fonction).toBe("SD");
  });
});

// ── CORRECTION 3(a) — la fonction du 7e degré en mineur ───────────────────────
//
// En mineur, il y a DEUX 7es degrés. La sensible (Si♮) est dominante — c'est la
// tierce du V. La sous-tonique naturelle (Sib) ne l'est pas : le même Sib majeur
// est un emprunt bVII / SD en Do majeur ; il ne peut pas devenir dominante au
// seul motif que la tonalité est mineure.
describe("fonction du 7e degré en mineur — sensible vs sous-tonique", () => {
  it("Sib majeur en Do mineur (sous-tonique) est VII de fonction SD", () => {
    const r = an([10, 2, 5], PC.Do, "minor"); // Sib-Ré-Fa
    expect(r.categorie).toBe("diatonique");
    expect(r.degree).toBe("VII");
    expect(r.degreeNum).toBe(7);
    expect(r.fonction).toBe("SD");
  });

  it("Si°7 en Do mineur (sensible) est vii°7 de fonction D", () => {
    const r = an([11, 2, 5, 8], PC.Do, "minor");
    expect(r.degreeNum).toBe(7);
    expect(r.fonction).toBe("D");
  });

  it("Si° (triade) en Do mineur est vii° de fonction D", () => {
    const r = an([11, 2, 5], PC.Do, "minor"); // Si-Ré-Fa
    expect(r.degree).toBe("vii°");
    expect(r.fonction).toBe("D");
    expect(r.categorie).toBe("diatonique");
  });

  it("en majeur, le 7e degré reste dominante", () => {
    const r = an([11, 2, 5], PC.Do, "major"); // Si-Ré-Fa
    expect(r.degree).toBe("vii°");
    expect(r.fonction).toBe("D");
  });
});

// ── CORRECTION 3(b) — la casse du chiffre romain porte la qualité ─────────────
describe("casse des chiffrages — majuscule = majeur, minuscule = mineur/diminué", () => {
  it("les 7 degrés de Do majeur : I ii iii IV V vi vii°", () => {
    const degres = [
      [0, 4, 7], [2, 5, 9], [4, 7, 11], [5, 9, 0],
      [7, 11, 2], [9, 0, 4], [11, 2, 5],
    ].map((pcs) => an(pcs, PC.Do, "major").degree);
    expect(degres).toEqual(["I", "ii", "iii", "IV", "V", "vi", "vii°"]);
  });

  it("les degrés de Do mineur (harmonique) : i ii° III iv V VI vii°", () => {
    const degres = [
      [0, 3, 7], [2, 5, 8], [3, 7, 10], [5, 8, 0],
      [7, 11, 2], [8, 0, 3], [11, 2, 5],
    ].map((pcs) => an(pcs, PC.Do, "minor").degree);
    expect(degres).toEqual(["i", "ii°", "III", "iv", "V", "VI", "vii°"]);
  });

  it("la 7e de dominante diatonique garde son chiffrage V7", () => {
    expect(an([7, 11, 2, 5], PC.Do, "major").degree).toBe("V7");
  });

  it("le ii7 diatonique de Do majeur (Rém7) est bien ii7", () => {
    const r = an([2, 5, 9, 0], PC.Do, "major"); // Ré-Fa-La-Do
    expect(r.degree).toBe("ii7");
    expect(r.categorie).toBe("diatonique");
  });

  it("le IΔ7 diatonique de Do majeur (Do Maj7) est bien IΔ7", () => {
    const r = an([0, 4, 7, 11], PC.Do, "major"); // Do-Mi-Sol-Si
    expect(r.degree).toBe("IΔ7");
    expect(r.categorie).toBe("diatonique");
    expect(r.fonction).toBe("T");
  });
});

// ── CORRECTION A — le vii°7 EMPRUNTÉ du majeur ───────────────────────────────
//
// Si-Ré-Fa-Lab en Do MAJEUR est la 7e diminuée de sensible empruntée au mineur
// homonyme (le Lab en est la 6e abaissée). Elle a fonction de DOMINANTE et se
// résout sur la tonique : le musicien écrit « vii°7 », SANS barre. Ce n'est pas
// une tonicisation du vi au seul motif que le Lab est la sensible de La.
describe("vii°7 emprunté en majeur — la tonique est une cible d'accord de sensible", () => {
  const SI_DIM7 = [11, 2, 5, 8]; // Si-Ré-Fa-Lab
  const DO_M = [0, 4, 7];
  const DO_m = [0, 3, 7];

  const ROTATIONS_SI = [
    [11, 2, 5, 8],
    [2, 5, 8, 11],
    [5, 8, 11, 2],
    [8, 11, 2, 5],
  ];

  it("Si-Ré-Fa-Lab en Do majeur est vii°7 (D, emprunt) — et non vii°7/vi", () => {
    const r = an(SI_DIM7, PC.Do, "major");
    expect(r.degree).toBe("vii°7");
    expect(r.degreeNum).toBe(7);
    expect(r.fonction).toBe("D");
    expect(r.categorie).toBe("emprunt");
    expect(r.cible).toBeUndefined();
    expect(r.rootFr).toBe("Si");
  });

  it("Si°7 → Do majeur : l'accord reste vii°7 (jamais vii°7/vi)", () => {
    const s = seq([SI_DIM7, DO_M], PC.Do, "major");
    const r = s[0].result;
    expect(r.degree).toBe("vii°7");
    expect(r.degree).not.toBe("vii°7/vi");
    expect(r.categorie).toBe("emprunt");
    expect(r.fonction).toBe("D");
    expect(r.cible).toBeUndefined();
  });

  it("les 4 rotations donnent le même chiffrage en Do majeur", () => {
    const lus = ROTATIONS_SI.map((pcs) => {
      const r = an(pcs, PC.Do, "major");
      return `${r.degree}|${r.degreeNum}|${r.fonction}|${r.categorie}|${r.rootFr}|${r.cible}`;
    });
    expect(new Set(lus).size).toBe(1);
    expect(lus[0]).toBe("vii°7|7|D|emprunt|Si|undefined");
  });

  it("les 4 rotations restent vii°7 une fois résolues sur Do majeur", () => {
    for (const pcs of ROTATIONS_SI) {
      const s = seq([pcs, DO_M], PC.Do, "major");
      expect(s[0].result.degree).toBe("vii°7");
      expect(s[0].result.categorie).toBe("emprunt");
      expect(s[0].result.cible).toBeUndefined();
      expect(s[0].result.rootFr).toBe("Si");
    }
  });

  it("l'événement produit est un emprunt au mode homonyme", () => {
    const s = seq([SI_DIM7, DO_M], PC.Do, "major");
    const events = buildChromaEvents(s, PC.Do, "major");
    expect(events).toHaveLength(1);
    expect(events[0].degree).toBe("vii°7");
    expect(events[0].categorie).toBe("emprunt");
    expect(events[0].cible).toBeUndefined();
  });

  // Non-régressions : le vii°7 du mineur reste DIATONIQUE, et une 7e diminuée
  // qui tonicise vraiment un autre degré garde sa barre.
  it("non-régression : le même accord en Do mineur reste vii°7 diatonique", () => {
    const r = an(SI_DIM7, PC.Do, "minor");
    expect(r.degree).toBe("vii°7");
    expect(r.fonction).toBe("D");
    expect(r.categorie).toBe("diatonique");
  });

  it("non-régression : Si°7 → Do mineur reste vii°7 diatonique", () => {
    const s = seq([SI_DIM7, DO_m], PC.Do, "minor");
    expect(s[0].result.degree).toBe("vii°7");
    expect(s[0].result.categorie).toBe("diatonique");
    expect(s[0].result.fonction).toBe("D");
  });

  it("non-régression : Si°7 → Mib en Do mineur reste vii°7/III", () => {
    const s = seq([SI_DIM7, [3, 7, 10]], PC.Do, "minor");
    expect(s[0].result.degree).toBe("vii°7/III");
    expect(s[0].result.cible).toBe("III");
    expect(s[0].result.categorie).toBe("sensible_degre");
  });

  it("non-régression : Do#°7 → Rém en Do majeur reste vii°7/ii", () => {
    const s = seq([[1, 4, 7, 10], [2, 5, 9]], PC.Do, "major");
    expect(s[0].result.degree).toBe("vii°7/ii");
    expect(s[0].result.cible).toBe("ii");
    expect(s[0].result.categorie).toBe("sensible_degre");
    expect(s[0].result.resolue).toBe(true);
  });

  it("un V de la tonique reste le V : Sol7 → Do majeur n'est pas « V7/I »", () => {
    const s = seq([[7, 11, 2, 5], DO_M], PC.Do, "major");
    expect(s[0].result.degree).toBe("V7");
    expect(s[0].result.categorie).toBe("diatonique");
  });
});

// ── CORRECTION B — les emprunts au MAJEUR homonyme dans une tonalité mineure ──
//
// Le mode mineur emprunte au majeur ses degrés ÉLEVÉS : la 3ce (#III) et la 6te
// (#VI, inflexion dorienne). Sans étiquette pour ces fondamentales, la règle de
// l'emprunt abandonnait et l'accord retombait en « chromatique / ? ».
describe("emprunts au majeur homonyme en mode mineur", () => {
  it("La mineur en Do mineur est #vi (emprunt, SD)", () => {
    const r = an([9, 0, 4], PC.Do, "minor"); // La-Do-Mi : 6te élevée (dorien)
    expect(r.categorie).toBe("emprunt");
    expect(r.degree).toBe("#vi");
    expect(r.fonction).toBe("SD");
  });

  it("Mi mineur en Do mineur est #iii (emprunt, T)", () => {
    const r = an([4, 7, 11], PC.Do, "minor"); // Mi-Sol-Si
    expect(r.categorie).toBe("emprunt");
    expect(r.degree).toBe("#iii");
    expect(r.fonction).toBe("T");
  });

  it("La7 en Do mineur reste chromatique : le Do# sort du majeur homonyme", () => {
    // Garde-fou : l'étiquette #VI ne s'applique qu'aux accords TOUT ENTIERS dans
    // le majeur homonyme. La-Do#-Mi-Sol n'y est pas (Do#).
    const r = an([9, 1, 4, 7], PC.Do, "minor");
    expect(r.categorie).toBe("chromatique");
  });

  it("non-régression : Fa majeur en Do mineur reste un IV emprunté (SD)", () => {
    const s = seq([[5, 9, 0], [0, 3, 7]], PC.Do, "minor"); // Fa → Do mineur
    expect(s[0].result.categorie).toBe("emprunt");
    expect(s[0].result.degree).toBe("IV");
    expect(s[0].result.fonction).toBe("SD");
    expect(s[0].result.cible).toBeUndefined();
  });
});

// ── Nettoyages ────────────────────────────────────────────────────────────────
describe("robustesse", () => {
  it("l'explication d'une chaîne reste juste quand la suite est un accord de sensible", () => {
    // Si7 (V7/iii) → Mi° (vii°/IV) → Fa : l'accord qui suit n'est pas une
    // dominante SECONDAIRE mais une sensible de degré. L'explication doit rester
    // vraie dans les deux cas.
    const s = seq([[11, 3, 6, 9], [4, 7, 10], [5, 9, 0]], PC.Do, "major");
    expect(s[0].result.degree).toBe("V7/iii");
    expect(s[0].result.resolue).toBe(true);
    expect(s[1].result.categorie).toBe("sensible_degre");

    const events = buildChromaEvents(s, PC.Do, "major");
    expect(events[0].explication).toContain("chaîne de dominantes");
    expect(events[0].explication).not.toContain("une autre dominante secondaire");
  });
});

// ── BASSE, RENVERSEMENTS ET CHIFFRAGE FRANÇAIS ────────────────────────────────

describe("identifyChordFromNotes — la basse arbitre", () => {
  it("Do-Mi-Sol-La est un La m7, quelle que soit la basse", () => {
    const pcs = [0, 4, 7, 9];
    expect(identifyChordFromNotes(pcs, 9)?.rootPc).toBe(9); // La à la basse
    expect(identifyChordFromNotes(pcs, 0)?.rootPc).toBe(9); // Do à la basse
    expect(identifyChordFromNotes(pcs, 0)?.quality).toBe("m7");
  });

  it("préfère la lecture qui n'abandonne aucune note", () => {
    // Sol-Si-Ré-Fa : la 7e de dominante explique tout ; la triade laisserait le Fa.
    const c = identifyChordFromNotes([7, 11, 2, 5], 7);
    expect(c?.rootPc).toBe(7);
    expect(c?.quality).toBe("7");
  });

  it("à égalité, préfère la fondamentale à la basse (état fondamental)", () => {
    // 7e diminuée : les quatre notes sont candidates. La basse tranche.
    expect(identifyChordFromNotes([11, 2, 5, 8], 5)?.rootPc).toBe(5);
    expect(identifyChordFromNotes([11, 2, 5, 8], 11)?.rootPc).toBe(11);
  });

  it("conserve la basse dans l'accord rendu", () => {
    expect(identifyChordFromNotes([0, 4, 7], 4)?.bassPc).toBe(4);
  });
});

describe("inversionOf / figureOf — chiffrage français", () => {
  it("triades", () => {
    expect(inversionOf(0, "", 0)).toBe(0);
    expect(inversionOf(0, "", 4)).toBe(1);
    expect(inversionOf(0, "", 7)).toBe(2);
    expect(figureOf("", 0)).toBe("");
    expect(figureOf("", 1)).toBe("6");
    expect(figureOf("", 2)).toBe("6/4");
  });

  it("septièmes", () => {
    expect(figureOf("7", 0)).toBe("7");
    expect(figureOf("7", 1)).toBe("6/5");
    expect(figureOf("7", 2)).toBe("+4");
    expect(figureOf("7", 3)).toBe("+2");
  });

  it("une basse ÉTRANGÈRE à l'accord (pédale) n'invente pas de renversement", () => {
    expect(inversionOf(0, "", 2)).toBe(0);
  });

  it("sans basse connue, on présume l'état fondamental", () => {
    expect(inversionOf(0, "", undefined)).toBe(0);
  });
});

describe("analyzeChord — le degré porte le chiffrage", () => {
  const DO = 0;

  it("I, I6, I6/4", () => {
    const deg = (bass: number) =>
      analyzeChord(identifyChordFromNotes([0, 4, 7], bass)!, DO, "major").degree;
    expect(deg(0)).toBe("I");
    expect(deg(4)).toBe("I6");
    expect(deg(7)).toBe("I6/4");
  });

  it("V7, V6/5, V+4, V+2", () => {
    const deg = (bass: number) =>
      analyzeChord(identifyChordFromNotes([7, 11, 2, 5], bass)!, DO, "major").degree;
    expect(deg(7)).toBe("V7");
    expect(deg(11)).toBe("V6/5");
    expect(deg(2)).toBe("V+4");
    expect(deg(5)).toBe("V+2");
  });

  it("vi7 et vi6/5 — Do-Mi-Sol-La selon la basse", () => {
    const deg = (bass: number) =>
      analyzeChord(identifyChordFromNotes([0, 4, 7, 9], bass)!, DO, "major").degree;
    expect(deg(9)).toBe("vi7");
    expect(deg(0)).toBe("vi6/5");
  });

  it("le vii°7 emprunté garde son symbole et prend son chiffrage", () => {
    const c = identifyChordFromNotes([11, 2, 5, 8], 11)!;
    expect(analyzeChord(c, DO, "major").degree).toBe("vii°7");
    const c6 = identifyChordFromNotes([11, 2, 5, 8], 2)!;
    expect(analyzeChord(c6, DO, "major").degree).toBe("vii°6/5");
  });

  it("la dominante secondaire est chiffrée elle aussi", () => {
    // La7 (La-Do#-Mi-Sol) en Do majeur → V7/ii ; avec Do# à la basse → V6/5/ii.
    const deg = (bass: number) =>
      analyzeChord(identifyChordFromNotes([9, 1, 4, 7], bass)!, DO, "major").degree;
    expect(deg(9)).toBe("V7/ii");
    expect(deg(1)).toBe("V6/5/ii");
  });

  it("la basse est rendue", () => {
    const r = analyzeChord(identifyChordFromNotes([0, 4, 7], 4)!, DO, "major");
    expect(r.bassPc).toBe(4);
  });
});

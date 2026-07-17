/**
 * Tests du moteur de validation SATB.
 *
 * Ce moteur porte la crédibilité académique du produit : une règle du contrepoint
 * mal appliquée décrédibilise l'ensemble. Les cas ci-dessous couvrent les fautes
 * classiques de l'écriture à quatre voix, et surtout les situations voisines qui
 * ne doivent PAS être signalées — c'est là qu'un moteur trop zélé perd la
 * confiance de l'élève.
 */

import { describe, it, expect } from "vitest";
import { validateSATB, noteExercice, type Measure, type NoteName, type ValidationError } from "@/lib/satb-rules";

/** Raccourci de construction d'une mesure : ["C4","E4","G4","C5"] = B, T, A, S. */
function chord(bass: string, tenor: string, alto: string, soprano: string): Measure {
  const parse = (s: string) => {
    const m = /^([A-G](?:#|##|b|bb)?)(-?\d)$/.exec(s);
    if (!m) throw new Error(`Note illisible : ${s}`);
    return { name: m[1] as NoteName, octave: Number(m[2]) };
  };
  return {
    bass: parse(bass),
    tenor: parse(tenor),
    alto: parse(alto),
    soprano: parse(soprano),
  };
}

const typesOf = (errors: ValidationError[]) => errors.map(e => e.type);

describe("validateSATB — écriture correcte", () => {
  it("ne signale rien sur une cadence parfaite V–I bien conduite en do majeur", () => {
    // G3 B3 D4 G4  →  C3 E4 C4… on garde une conduite classique :
    // V : G2 D4 B3 G4 → I : C3 E4 C4 E4 (mouvement contraire à la basse)
    const measures = [
      chord("G2", "D3", "B3", "G4"),
      chord("C3", "E3", "C4", "E4"),
    ];
    expect(validateSATB(measures)).toEqual([]);
  });

  it("accepte un accord isolé bien disposé", () => {
    expect(validateSATB([chord("C3", "E3", "G3", "C4")])).toEqual([]);
  });

  it("ignore les mesures incomplètes plutôt que de crier à la faute", () => {
    const incomplete: Measure = {
      bass: { name: "C", octave: 3 },
      tenor: { name: null, octave: 3 },
      alto: { name: null, octave: 4 },
      soprano: { name: null, octave: 4 },
    };
    expect(validateSATB([incomplete])).toEqual([]);
  });
});

describe("validateSATB — quintes parallèles", () => {
  it("détecte deux quintes justes consécutives par mouvement direct", () => {
    // Basse C3 → D3, Soprano G3 → A3 : quinte puis quinte, même direction.
    const measures = [
      chord("C3", "E3", "G3", "G3"),
      chord("D3", "F3", "A3", "A3"),
    ];
    const errors = validateSATB(measures);
    expect(typesOf(errors)).toContain("parallel_fifth");
  });

  it("ne signale PAS deux quintes atteintes par mouvement contraire", () => {
    // Basse monte C3 → G3, soprano descend G4 → D4 : l'intervalle reste une
    // quinte, mais le mouvement contraire l'autorise.
    const measures = [
      chord("C3", "E3", "G3", "G4"),
      chord("G3", "B3", "B3", "D4"),
    ];
    expect(typesOf(validateSATB(measures))).not.toContain("parallel_fifth");
  });
});

describe("validateSATB — octaves parallèles", () => {
  it("détecte deux octaves consécutives par mouvement direct", () => {
    // Basse C3 → D3 et ténor C4 → D4 : octave puis octave, même direction.
    const measures = [
      chord("C3", "C4", "E4", "G4"),
      chord("D3", "D4", "F4", "A4"),
    ];
    expect(typesOf(validateSATB(measures))).toContain("parallel_octave");
  });

  it("ne signale pas une octave répétée sur la même note", () => {
    // La règle ne vise que le mouvement : deux fois la même octave n'est pas
    // une octave parallèle.
    const measures = [
      chord("C3", "C4", "E4", "G4"),
      chord("C3", "C4", "E4", "G4"),
    ];
    expect(typesOf(validateSATB(measures))).not.toContain("parallel_octave");
  });
});

describe("validateSATB — tessitures", () => {
  it("signale une basse sous son ambitus (E2)", () => {
    const errors = validateSATB([chord("C2", "E3", "G3", "C4")]);
    expect(typesOf(errors)).toContain("range");
    expect(errors.find(e => e.type === "range")?.params.voice).toBe("bass");
  });

  it("signale un soprano au-dessus de son ambitus (G5)", () => {
    const errors = validateSATB([chord("C3", "E3", "G3", "A5")]);
    expect(typesOf(errors)).toContain("range");
    expect(errors.find(e => e.type === "range")?.params.voice).toBe("soprano");
  });

  it("accepte les notes exactement aux bornes de l'ambitus", () => {
    // Basse E2 (borne basse) et soprano G5 (borne haute).
    const errors = validateSATB([chord("E2", "E3", "G3", "G5")]);
    expect(typesOf(errors)).not.toContain("range");
  });
});

describe("validateSATB — espacement et croisement", () => {
  it("signale un écart de plus d'une octave entre soprano et alto", () => {
    const errors = validateSATB([chord("C3", "E3", "G3", "A4")]);
    expect(typesOf(errors)).toContain("spacing");
  });

  it("tolère un écart d'exactement une octave", () => {
    // Alto G3, soprano G4 : douze demi-tons, la limite est inclusive.
    const errors = validateSATB([chord("C3", "E3", "G3", "G4")]);
    expect(typesOf(errors)).not.toContain("spacing");
  });

  it("signale un croisement lorsque le ténor passe au-dessus de l'alto", () => {
    const errors = validateSATB([chord("C3", "C4", "G3", "C5")]);
    expect(typesOf(errors)).toContain("crossing");
  });
});

describe("validateSATB — fausses relations", () => {
  it("signale une fausse relation chromatique entre deux voix différentes", () => {
    // Alto joue F4, puis le soprano attaque F#4 : la contradiction est répartie
    // entre deux voix — c'est la fausse relation.
    const measures = [
      chord("C3", "A3", "F4", "C5"),
      chord("D3", "A3", "D4", "F#4"),
    ];
    const errors = validateSATB(measures);
    expect(typesOf(errors)).toContain("cross_relation");
    expect(errors.find(e => e.type === "cross_relation")?.severity).toBe("warning");
  });

  it("n'invente pas de fausse relation quand le chromatisme reste dans la même voix", () => {
    // Le soprano fait lui-même F4 → F#4 : mouvement chromatique légitime.
    const measures = [
      chord("C3", "A3", "C4", "F4"),
      chord("D3", "A3", "D4", "F#4"),
    ];
    expect(typesOf(validateSATB(measures))).not.toContain("cross_relation");
  });
});

describe("validateSATB — conformité à la solution", () => {
  // Solution : V – I en do majeur (G au V, C fondamentale au I, triades complètes).
  const SOLUTION = [
    chord("G2", "D3", "B3", "G4"),
    chord("C3", "G3", "C4", "E4"),
  ];

  it("accord hors sujet → wrong_chord (error)", () => {
    const copie = [
      chord("C3", "E3", "G3", "C4"), // Do majeur au lieu de Sol
      chord("C3", "G3", "C4", "E4"),
    ];
    const errs = validateSATB(copie, "C", false, SOLUTION);
    const wc = errs.find(e => e.type === "wrong_chord");
    expect(wc).toBeDefined();
    expect(wc!.severity).toBe("error");
    expect(wc!.params.from).toBe(1);
  });
  it("bon accord, mauvaise basse (renversement) → wrong_bass, PAS wrong_chord", () => {
    const copie = [
      chord("B2", "D3", "G3", "G4"), // V6 au lieu de V à l'état fondamental
      chord("C3", "G3", "C4", "E4"),
    ];
    const errs = validateSATB(copie, "C", false, SOLUTION);
    expect(typesOf(errs)).toContain("wrong_bass");
    expect(typesOf(errs)).not.toContain("wrong_chord");
    expect(errs.find(e => e.type === "wrong_bass")!.params.expected).toBe("G");
  });
  it("réalisation ALTERNATIVE valide (autres octaves/doublures, même accord même basse) → conforme", () => {
    const copie = [
      chord("G2", "B3", "D4", "G4"), // autre disposition du V
      chord("C3", "G3", "E4", "C5"), // autre disposition du I (mêmes pitch classes, même basse)
    ];
    // NB : d'autres règles (ex. octaves parallèles) peuvent parler sur cette copie —
    // seules les erreurs de CONFORMITÉ sont sous test ici.
    const errs = validateSATB(copie, "C", false, SOLUTION);
    expect(typesOf(errs)).not.toContain("wrong_chord");
    expect(typesOf(errs)).not.toContain("wrong_bass");
  });
  it("mesure incomplète → la conformité se tait", () => {
    const copie = [
      { ...chord("C3", "E3", "G3", "C4"), soprano: { name: null, octave: 4 } } as Measure,
      chord("C3", "G3", "C4", "E4"), // = SOLUTION[1] : seule la mesure incomplète est sous test
    ];
    const errs = validateSATB(copie, "C", false, SOLUTION);
    expect(typesOf(errs)).not.toContain("wrong_chord");
  });
  it("sans solution : comportement inchangé (aucune erreur de conformité possible)", () => {
    const copie = [chord("C3", "E3", "G3", "C4")];
    expect(typesOf(validateSATB(copie, "C", false))).not.toContain("wrong_chord");
  });
});

describe("validateSATB — la sensible (barème d'école)", () => {
  // V7 – I en do majeur ; la sensible (B) est au soprano. Le I est une triade
  // COMPLÈTE : les copies fautives doivent rester CONFORMES (mêmes pitch classes,
  // même basse), sinon les règles de résolution se taisent par construction.
  const SOL_V7_I = [
    chord("G2", "F3", "D4", "B4"),
    chord("C3", "E3", "G4", "C5"),
  ];

  it("sensible au soprano montant à la tonique → rien", () => {
    const errs = validateSATB(SOL_V7_I, "C", false, SOL_V7_I);
    expect(typesOf(errs)).not.toContain("leading_tone");
  });
  it("sensible au soprano NE montant PAS → leading_tone (error)", () => {
    const copie = [
      chord("G2", "F3", "D4", "B4"),
      chord("C3", "E3", "C4", "G4"), // {do,mi,sol} basse do : CONFORME ; B4 → G4 : la sensible saute
    ];
    const errs = validateSATB(copie, "C", false, SOL_V7_I);
    const lt = errs.find(e => e.type === "leading_tone");
    expect(lt).toBeDefined();
    expect(lt!.severity).toBe("error"); // voix extrême (même la descente à la dominante y est interdite)
  });
  it("sensible à l'ALTO descendant à la dominante (frustrée) → rien", () => {
    const sol = [
      chord("G2", "D3", "B3", "F4"),   // sensible à l'alto
      chord("C3", "E3", "G3", "E4"),   // B3 → G3 : descente à la dominante
    ];
    const errs = validateSATB(sol, "C", false, sol);
    expect(typesOf(errs)).not.toContain("leading_tone");
  });
  it("sensible à l'alto sautant AILLEURS → leading_tone (warning)", () => {
    const sol = [
      chord("G2", "D3", "B3", "F4"),
      chord("C3", "E3", "E4", "C5"),   // B3 → E4 : ni tonique, ni tenue, ni dominante
    ];
    const errs = validateSATB(sol, "C", false, sol);
    const lt = errs.find(e => e.type === "leading_tone");
    expect(lt).toBeDefined();
    expect(lt!.severity).toBe("warning"); // voix interne
  });
  it("cadence rompue V→VI : la sensible monte quand même → rien", () => {
    const sol = [
      chord("G2", "D3", "F4", "B4"),
      chord("A2", "C3", "E4", "C5"),   // B4 → C5 ✓
    ];
    const errs = validateSATB(sol, "C", false, sol);
    expect(typesOf(errs)).not.toContain("leading_tone");
  });
  it("sensible TENUE (V → V7) → rien", () => {
    const sol = [
      chord("G2", "D3", "B3", "G4"),
      chord("G2", "F3", "B3", "G4"),   // B3 tenu
    ];
    const errs = validateSATB(sol, "C", false, sol);
    expect(typesOf(errs)).not.toContain("leading_tone");
  });
  it("en LA MINEUR (Am) : sensible = sol dièse, mêmes verdicts", () => {
    const sol = [
      chord("E2", "E3", "B3", "G#4"),  // V de la mineur, sensible au soprano
      chord("A2", "E3", "C4", "A4"),   // G#4 → A4 ✓
    ];
    expect(typesOf(validateSATB(sol, "Am", false, sol))).not.toContain("leading_tone");
    const faux = [
      chord("E2", "E3", "B3", "G#4"),
      chord("A2", "E3", "C4", "E4"),   // G#4 → E4 : saute
    ];
    expect(validateSATB(faux, "Am", false, sol).find(e => e.type === "leading_tone")!.severity).toBe("error");
  });
  it("accord NON dominant contenant le pc de la sensible (iii) → la règle se tait", () => {
    const sol = [
      chord("E3", "G3", "B3", "E4"),   // iii (Em) — B présent mais pas fonction dominante
      chord("A2", "A3", "C4", "E4"),   // vi
    ];
    expect(typesOf(validateSATB(sol, "C", false, sol))).not.toContain("leading_tone");
  });
  it("sensible DOUBLÉE dans un accord de dominante → doubled_leading_tone (error)", () => {
    const sol = [
      chord("G2", "B3", "D4", "B4"),   // B au ténor ET au soprano
      chord("C3", "C4", "E4", "C5"),
    ];
    const errs = validateSATB(sol, "C", false, sol);
    const d = errs.find(e => e.type === "doubled_leading_tone");
    expect(d).toBeDefined();
    expect(d!.severity).toBe("error");
  });
});

describe("validateSATB — la sensible en marche (I/VI seulement)", () => {
  it("marche de septièmes Bø7 → Em7 en do : la sensible perd sa fonction → rien", () => {
    // Bø7 (B-D-F-A, fonction vii) → Em7 (E-G-B-D, iii) : l'accord d'arrivée
    // n'est ni le I ni le VI, la sensible du Bø7 (B) n'y résout donc rien —
    // la règle doit se taire, alors même que le départ est bien un accord de
    // sensible (racine 11) qui armerait la règle SANS le raffinement R4.
    const m1 = chord("B2", "A3", "D4", "F4");
    const m2 = chord("E3", "G3", "D4", "E4");
    const marche = [m1, m2];
    const errs = validateSATB(marche, "C", false, marche);
    // La fixture est sa propre solution : vérifie d'abord qu'elle est conforme
    // à elle-même (sinon les règles de résolution ne parlent pas du tout).
    expect(errs.filter(e => e.type === "wrong_chord" || e.type === "wrong_bass")).toEqual([]);
    expect(typesOf(errs)).not.toContain("leading_tone");
  });

  it("V → IV en do (arrivée ni I ni VI) : la sensible saute → rien", () => {
    const m1 = chord("G2", "B3", "D4", "G4");  // V : sol-si-ré, sensible au ténor
    const m2 = chord("F2", "F3", "C4", "A4");  // IV : fa-la-do — la sensible saute (B3 → F3)
    const cadence = [m1, m2];
    const errs = validateSATB(cadence, "C", false, cadence);
    expect(errs.filter(e => e.type === "wrong_chord" || e.type === "wrong_bass")).toEqual([]);
    expect(typesOf(errs)).not.toContain("leading_tone");
  });

  it("non-régression : cadence V→I reste armée (test existant)", () => {
    const sol = [
      chord("G2", "F3", "D4", "B4"),
      chord("C3", "E3", "C4", "G4"), // sensible qui saute → toujours signalé
    ];
    const errs = validateSATB(sol, "C", false, sol);
    expect(typesOf(errs)).toContain("leading_tone");
  });

  it("non-régression : cadence rompue V→VI reste armée (test existant)", () => {
    const sol = [
      chord("G2", "D3", "F4", "B4"),
      chord("A2", "C3", "E4", "C5"),   // B4 → C5 ✓, résolution correcte
    ];
    const errs = validateSATB(sol, "C", false, sol);
    expect(typesOf(errs)).not.toContain("leading_tone"); // armée mais résolue : rien à signaler
  });
});

describe("validateSATB — sensible à la basse d'un V6 (règle « Pachelbel »)", () => {
  // Geste séquentiel canonique reconnu par les traités : I – V6 – vi… la sensible
  // est à la BASSE du V6 et DESCEND par degré vers le VI (do–sol/si–la). Elle n'y
  // fonctionne pas comme sensible cadentielle : la règle doit se taire.
  it("I – V6 – vi en do : basse sensible B3 → A3 (descend d'un ton vers le VI) → rien", () => {
    const sol = [
      chord("C3", "E3", "G3", "C4"),   // I
      chord("B3", "D4", "G4", "D5"),   // V6 : sensible (si) à la basse
      chord("A3", "E4", "A4", "C5"),   // vi (la mineur) : basse B3 → A3, descente d'un ton
    ];
    const errs = validateSATB(sol, "C", false, sol);
    expect(errs.filter(e => e.type === "wrong_chord" || e.type === "wrong_bass")).toEqual([]);
    expect(typesOf(errs)).not.toContain("leading_tone");
  });

  it("non-exemption : V6 → I (arrivée tonique) basse sensible descendante → leading_tone (error)", () => {
    // L'exemption ne vaut QUE pour l'arrivée sur le VI. Vers la tonique, la sensible
    // à la basse doit toujours MONTER.
    const sol = [
      chord("B3", "D4", "G4", "D5"),   // V6 : sensible à la basse
      chord("E3", "G3", "C4", "G4"),   // I6 : basse B3 → E3, la sensible plonge
    ];
    const errs = validateSATB(sol, "C", false, sol);
    expect(errs.filter(e => e.type === "wrong_chord" || e.type === "wrong_bass")).toEqual([]);
    const lt = errs.find(e => e.type === "leading_tone");
    expect(lt?.severity).toBe("error");
  });

  it("non-exemption : V6 → I basse sensible qui MONTE → rien (inchangé)", () => {
    const sol = [
      chord("B3", "D4", "G4", "D5"),   // V6
      chord("C4", "E4", "G4", "C5"),   // I : basse B3 → C4, la sensible monte
    ];
    const errs = validateSATB(sol, "C", false, sol);
    expect(typesOf(errs)).not.toContain("leading_tone");
  });

  it("non-exemption : sensible au SOPRANO sautant, arrivée VI → leading_tone (error)", () => {
    // L'exemption est réservée à la basse : au soprano, la sensible doit résoudre.
    const sol = [
      chord("G2", "D3", "G3", "B4"),   // V : sensible (si) au soprano
      chord("A2", "C3", "E3", "E5"),   // vi : B4 → E5, saut — pas de résolution
    ];
    const errs = validateSATB(sol, "C", false, sol);
    expect(errs.filter(e => e.type === "wrong_chord" || e.type === "wrong_bass")).toEqual([]);
    const lt = errs.find(e => e.type === "leading_tone");
    expect(lt?.severity).toBe("error");
  });
});

describe("validateSATB — contrat de sortie", () => {
  it("rapporte la mesure en numérotation humaine dans params, l'index en interne", () => {
    const errors = validateSATB([chord("C2", "E3", "G3", "C4")]);
    expect(errors[0].measure).toBe(0);     // index à partir de zéro
    expect(errors[0].params.from).toBe(1); // mesure 1 pour l'élève
  });

  it("ne renvoie aucune phrase toute faite : le moteur reste neutre linguistiquement", () => {
    const errors = validateSATB([chord("C2", "E3", "G3", "C4")]);
    expect(errors[0]).not.toHaveProperty("message");
  });
});

describe("validateSATB — 7e d'accord et directes S–B", () => {
  it("7e de V7 descendant par degré → rien ; quittée par saut → seventh (warning)", () => {
    const sol = [
      chord("G2", "F3", "D4", "B4"),   // 7e = F au ténor
      chord("C3", "E3", "C4", "C5"),   // F3 → E3 ✓
    ];
    expect(typesOf(validateSATB(sol, "C", false, sol))).not.toContain("seventh");
    const faux = [
      chord("G2", "F3", "D4", "B4"),
      chord("C3", "C4", "E4", "C5"),   // {do,mi} basse do : CONFORME ; F3 → C4 : la 7e saute
    ];
    const errs = validateSATB(faux, "C", false, sol);
    const s = errs.find(e => e.type === "seventh");
    expect(s).toBeDefined();
    expect(s!.severity).toBe("warning");
  });
  it("7e TENUE → rien ; triade sans 7e → la règle se tait", () => {
    const tenue = [
      chord("G2", "F3", "D4", "B4"),
      chord("C3", "F3", "C4", "C5"),   // F3 tenu (deviendra retard — toléré)
    ];
    expect(typesOf(validateSATB(tenue, "C", false, tenue))).not.toContain("seventh");
    const triade = [
      chord("G2", "D3", "B3", "G4"),
      chord("C3", "E3", "C4", "E4"),
    ];
    expect(typesOf(validateSATB(triade, "C", false, triade))).not.toContain("seventh");
  });
  it("quinte directe S–B (saut du soprano vers la quinte, même sens) → hidden_fifth (warning)", () => {
    // B : C3 → G3 (monte). S : E4 → D5 (saut, monte). Arrivée D5/G3 = quinte réduite,
    // qui n'en était pas une avant (E4/C3 = tierce+octave).
    const sol = [
      chord("C3", "E3", "G3", "E4"),
      chord("G3", "B3", "G4", "D5"),
    ];
    const errs = validateSATB(sol, "C", false, sol);
    const h = errs.find(e => e.type === "hidden_fifth");
    expect(h).toBeDefined();
    expect(h!.severity).toBe("warning");
  });
  it("arrivée sur la quinte par mouvement conjoint du soprano → rien", () => {
    const sol = [
      chord("E3", "G3", "C4", "C5"),
      chord("G3", "B3", "G4", "D5"),   // soprano C5 → D5 : conjoint (2 demi-tons)
    ];
    expect(typesOf(validateSATB(sol, "C", false, sol))).not.toContain("hidden_fifth");
  });
  it("quintes déjà PARALLÈLES : parallel_fifth, pas de doublon hidden_fifth", () => {
    const sol = [
      chord("C3", "E3", "E4", "G4"),
      chord("D3", "F3", "F4", "A4"),   // quintes parallèles S–B (G4/C3 → A4/D3)
    ];
    const errs = validateSATB(sol, "C", false, sol);
    expect(typesOf(errs)).toContain("parallel_fifth");
    expect(typesOf(errs)).not.toContain("hidden_fifth");
  });
});

describe("validateSATB — mode libre", () => {
  // Deux mesures à quintes parallèles VOULUES (planing/parallélisme assumé),
  // toutes voix dans leur tessiture, reproduites à l'identique comme solution :
  // en mode ecole, les parallèles doivent être détectées (test de contrôle) ;
  // en mode libre, elles doivent rester muettes.
  const PARALLELES_VOULUES = [
    chord("C3", "E3", "C4", "G4"),
    chord("D3", "F3", "D4", "A4"),
  ];

  // Solution V–I en do majeur, réutilisée pour vérifier que la conformité
  // reste vivante en mode libre.
  const SOLUTION = [
    chord("G2", "D3", "B3", "G4"),
    chord("C3", "G3", "C4", "E4"),
  ];

  it("accord faux en libre → wrong_chord (la conformité vit)", () => {
    const copie = [
      chord("C3", "E3", "G3", "C4"), // Do majeur au lieu de Sol
      chord("C3", "G3", "C4", "E4"),
    ];
    const errs = validateSATB(copie, "C", false, SOLUTION, "libre");
    expect(typesOf(errs)).toContain("wrong_chord");
  });

  it("quintes parallèles VOULUES jugées contre elles-mêmes en libre → aucune erreur ni avertissement", () => {
    const errs = validateSATB(PARALLELES_VOULUES, "C", false, PARALLELES_VOULUES, "libre");
    expect(errs).toEqual([]);
  });

  it("hors tessiture en libre → range", () => {
    const errs = validateSATB([chord("C2", "E3", "G3", "C4")], undefined, false, undefined, "libre");
    expect(typesOf(errs)).toContain("range");
  });

  it("contrôle : le même couple de mesures à quintes parallèles en mode ecole → parallel_fifth", () => {
    const errs = validateSATB(PARALLELES_VOULUES, "C", false, PARALLELES_VOULUES);
    expect(typesOf(errs)).toContain("parallel_fifth");
  });

  it("espacement, croisement, fausse relation en libre → muets (cas espacement)", () => {
    const errs = validateSATB([chord("C3", "E3", "G3", "A4")], undefined, false, undefined, "libre");
    expect(typesOf(errs)).not.toContain("spacing");
  });
});

describe("noteExercice", () => {
  it("0 avertissement → 100 ; 2 → 80 ; 5 et plus → 60 (plancher)", () => {
    expect(noteExercice(0)).toBe(100);
    expect(noteExercice(2)).toBe(80);
    expect(noteExercice(5)).toBe(60);
    expect(noteExercice(9)).toBe(60);
  });
});

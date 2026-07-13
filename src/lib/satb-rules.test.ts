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
import { validateSATB, type Measure, type NoteName, type ValidationError } from "@/lib/satb-rules";

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

import { describe, it, expect } from "vitest";
import { TPQ, type ParsedNote } from "./musicxml-parse";
import { carteMelodique } from "./voice-lines";

function n(
  midi: number, onset: number, duration: number, voice = "1", part = "P1",
): ParsedNote {
  return {
    step: "C", alter: 0, octave: 4, pc: ((midi % 12) + 12) % 12, midi,
    onset, duration, measure: 1, beat: 1, voice, part,
  };
}

describe("carteMelodique — la ligne d'une voix", () => {
  it("donne à chaque note sa précédente et sa suivante dans SA voix", () => {
    const do4 = n(60, 0, TPQ);
    const re4 = n(62, TPQ, TPQ);
    const mi4 = n(64, 2 * TPQ, TPQ);
    const carte = carteMelodique([do4, re4, mi4]);

    expect(carte.voisinage(re4)).toEqual({ precedente: do4, suivante: mi4 });
    expect(carte.voisinage(do4)).toEqual({ precedente: undefined, suivante: re4 });
    expect(carte.voisinage(mi4)).toEqual({ precedente: re4, suivante: undefined });
  });

  it("ne mélange pas les voix", () => {
    const sopr = n(72, 0, TPQ, "1");
    const basse = n(48, 0, TPQ, "2");
    const sopr2 = n(74, TPQ, TPQ, "1");
    const carte = carteMelodique([sopr, basse, sopr2]);

    expect(carte.voisinage(sopr)?.suivante).toBe(sopr2);
    expect(carte.voisinage(basse)?.suivante).toBeUndefined();
  });

  it("ne mélange pas les parties, même à numéro de voix identique", () => {
    const a = n(72, 0, TPQ, "1", "P1");
    const b = n(48, 0, TPQ, "1", "P2");
    const a2 = n(74, TPQ, TPQ, "1", "P1");
    const carte = carteMelodique([a, b, a2]);

    expect(carte.voisinage(a)?.suivante).toBe(a2);
    expect(carte.voisinage(b)?.suivante).toBeUndefined();
  });
});

describe("carteMelodique — la voix qui n'est pas une ligne", () => {
  it("rend null quand la voix porte un accord plaqué : aucune ligne n'existe", () => {
    // Écriture pianistique : trois notes simultanées dans la même voix.
    const do4 = n(60, 0, TPQ);
    const mi4 = n(64, 0, TPQ);
    const sol4 = n(67, 0, TPQ);
    const suite = n(65, TPQ, TPQ);
    const carte = carteMelodique([do4, mi4, sol4, suite]);

    expect(carte.voisinage(do4)).toBeNull();
    expect(carte.voisinage(mi4)).toBeNull();
    expect(carte.voisinage(sol4)).toBeNull();
  });

  it("l'accord plaqué ne contamine que SON instant, pas toute la voix", () => {
    const accord1 = n(60, 0, TPQ);
    const accord2 = n(64, 0, TPQ);
    const seule = n(65, TPQ, TPQ);
    const carte = carteMelodique([accord1, accord2, seule]);

    expect(carte.voisinage(accord1)).toBeNull();
    // La note isolée, elle, garde une ligne — mais sa précédente est ambiguë :
    // on ne peut pas dire laquelle des deux notes de l'accord la précède.
    expect(carte.voisinage(seule)).toBeNull();
  });
});

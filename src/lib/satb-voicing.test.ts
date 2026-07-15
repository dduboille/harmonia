import { describe, it, expect } from "vitest";
import { realiserSATB, type Voicing } from "./satb-voicing";

// midi utilitaire : Do4 = 60.
describe("realiserSATB — la basse suit le renversement demandé", () => {
  it("V7 fondamental : Sol à la basse", () => {
    // Sol7 = [7,11,2,5], basse imposée Sol (pc 7). Soprano = Ré5 (74).
    const v = realiserSATB([7, 11, 2, 5], 7, 74, null);
    expect(v.bass % 12).toBe(7);
  });

  it("V6/5 : la sensible (Si) à la basse", () => {
    const v = realiserSATB([7, 11, 2, 5], 11, 74, null);
    expect(v.bass % 12).toBe(11);
  });

  it("bII6 : la basse est la tierce du napolitain (Fa)", () => {
    // Réb majeur = [1,5,8], basse imposée Fa (pc 5).
    const v = realiserSATB([1, 5, 8], 5, 72, null);
    expect(v.bass % 12).toBe(5);
  });

  it("la basse reste dans un registre grave plausible", () => {
    const v = realiserSATB([0, 4, 7], 0, 72, null);
    expect(v.bass).toBeGreaterThanOrEqual(36);
    expect(v.bass).toBeLessThanOrEqual(60);
  });

  it("alto et ténor restent entre la basse et le soprano", () => {
    const v: Voicing = realiserSATB([0, 4, 7], 0, 72, null);
    expect(v.alto).toBeLessThan(72);
    expect(v.tenor).toBeLessThan(v.alto + 1);
    expect(v.tenor).toBeGreaterThan(v.bass - 1);
  });
});

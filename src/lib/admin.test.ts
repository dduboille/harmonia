import { describe, it, expect } from "vitest";
import { estAdmin } from "./admin";

/**
 * Ces cas venaient de `trial-codes.test.ts` et suivent la fonction : c'est le
 * garde-fou de tous les écrans d'administration, y compris celui des
 * établissements et de leurs licences.
 */
describe("estAdmin", () => {
  it("reconnaît l'administrateur, quelle que soit la casse", () => {
    expect(estAdmin("Dany@Exemple.fr", "dany@exemple.fr")).toBe(true);
    expect(estAdmin("dany@exemple.fr", "DANY@EXEMPLE.FR")).toBe(true);
  });

  it("refuse un autre compte", () => {
    expect(estAdmin("quelquun@exemple.fr", "dany@exemple.fr")).toBe(false);
  });

  it("refuse quand l'une des deux valeurs manque", () => {
    // Le cas qui compte : `ADMIN_EMAIL` non posée en production ouvrirait
    // l'administration à tout le monde si l'absence valait égalité.
    expect(estAdmin("dany@exemple.fr", undefined)).toBe(false);
    expect(estAdmin(undefined, "dany@exemple.fr")).toBe(false);
    expect(estAdmin(undefined, undefined)).toBe(false);
    expect(estAdmin("", "")).toBe(false);
  });
});

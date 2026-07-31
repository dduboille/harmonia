import { describe, it, expect } from "vitest";
import {
  ESSAI_DUREE_JOURS,
  genererCode,
  calculerExpiration,
  validerRachat,
  estAdmin,
  type TrialCode,
} from "./trial-codes";

describe("genererCode", () => {
  it("génère un code de 8 caractères", () => {
    expect(genererCode()).toHaveLength(8);
  });

  it("n'utilise que des lettres/chiffres non ambigus (pas de 0/O/1/I)", () => {
    const code = genererCode();
    expect(code).toMatch(/^[A-HJ-NP-Z2-9]+$/);
  });

  it("génère des codes différents à chaque appel (probabiliste, mais casse ici serait un vrai bug)", () => {
    const codes = new Set(Array.from({ length: 20 }, () => genererCode()));
    expect(codes.size).toBe(20);
  });
});

describe("calculerExpiration", () => {
  it("ajoute exactement ESSAI_DUREE_JOURS jours à la date donnée", () => {
    const depart = new Date("2026-08-01T00:00:00.000Z");
    const fin = calculerExpiration(depart);
    expect(ESSAI_DUREE_JOURS).toBe(14);
    expect(fin).toBe("2026-08-15T00:00:00.000Z");
  });
});

describe("validerRachat", () => {
  const codeValide: TrialCode = {
    id: "code-1",
    code: "ABCD2FGH",
    max_uses: 5,
    uses_count: 2,
    active: true,
  };

  it("accepte un code actif, sous sa limite, pour un utilisateur qui n'a jamais consommé d'essai", () => {
    expect(validerRachat(codeValide, false)).toEqual({ ok: true });
  });

  it("refuse un code introuvable (null)", () => {
    const res = validerRachat(null, false);
    expect(res).toEqual({ ok: false, status: 404, erreur: "Code introuvable." });
  });

  it("refuse un code désactivé", () => {
    const res = validerRachat({ ...codeValide, active: false }, false);
    expect(res).toEqual({ ok: false, status: 400, erreur: "Ce code n'est plus actif." });
  });

  it("refuse un code ayant atteint sa limite d'utilisations", () => {
    const res = validerRachat({ ...codeValide, uses_count: 5, max_uses: 5 }, false);
    expect(res).toEqual({ ok: false, status: 400, erreur: "Ce code a atteint sa limite d'utilisations." });
  });

  it("refuse un utilisateur ayant déjà consommé un essai (n'importe quel code)", () => {
    const res = validerRachat(codeValide, true);
    expect(res).toEqual({ ok: false, status: 409, erreur: "Vous avez déjà utilisé un essai." });
  });
});

describe("estAdmin", () => {
  it("reconnaît l'e-mail admin, insensible à la casse", () => {
    expect(estAdmin("Dany@Example.com", "dany@example.com")).toBe(true);
  });

  it("refuse un e-mail différent", () => {
    expect(estAdmin("quelquun@ailleurs.com", "dany@example.com")).toBe(false);
  });

  it("refuse si l'e-mail admin n'est pas configuré", () => {
    expect(estAdmin("dany@example.com", undefined)).toBe(false);
  });

  it("refuse si l'e-mail utilisateur est absent", () => {
    expect(estAdmin(undefined, "dany@example.com")).toBe(false);
  });
});

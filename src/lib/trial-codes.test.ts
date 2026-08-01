import { describe, it, expect } from "vitest";
import {
  ESSAI_DUREE_JOURS,
  genererCode,
  calculerExpiration,
  validerRachat,
  aAbonnementPayantActif,
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

  it("accepte un code actif, sous sa limite, pour un utilisateur éligible", () => {
    expect(validerRachat(codeValide, false, false)).toEqual({ ok: true });
  });

  it("refuse un code introuvable (null)", () => {
    const res = validerRachat(null, false, false);
    expect(res).toEqual({ ok: false, status: 404, code: "introuvable", erreur: "Code introuvable." });
  });

  it("refuse un code désactivé", () => {
    const res = validerRachat({ ...codeValide, active: false }, false, false);
    expect(res).toEqual({ ok: false, status: 400, code: "inactif", erreur: "Ce code n'est plus actif." });
  });

  it("refuse un code ayant atteint sa limite d'utilisations", () => {
    const res = validerRachat({ ...codeValide, uses_count: 5, max_uses: 5 }, false, false);
    expect(res).toEqual({ ok: false, status: 400, code: "limiteAtteinte", erreur: "Ce code a atteint sa limite d'utilisations." });
  });

  it("refuse un utilisateur ayant déjà consommé un essai (n'importe quel code)", () => {
    const res = validerRachat(codeValide, true, false);
    expect(res).toEqual({ ok: false, status: 409, code: "dejaUtilise", erreur: "Vous avez déjà utilisé un essai." });
  });

  it("refuse un utilisateur ayant déjà un abonnement payant actif", () => {
    const res = validerRachat(codeValide, false, true);
    expect(res).toEqual({ ok: false, status: 400, code: "abonnementActif", erreur: "Vous avez déjà un abonnement actif — inutile d'utiliser un code d'essai." });
  });

  it("priorise l'abonnement actif sur l'essai déjà consommé (même message dans les deux cas de figure)", () => {
    const res = validerRachat(codeValide, true, true);
    expect(res.ok).toBe(false);
    if (!res.ok) expect(res.code).toBe("abonnementActif");
  });

  it("refuse un utilisateur déjà consommé même avec un code introuvable — même statut 409 dans les deux cas (pas d'oracle sur la validité du code)", () => {
    const avecCodeValide = validerRachat(codeValide, true, false);
    const avecCodeInexistant = validerRachat(null, true, false);
    expect(avecCodeValide).toEqual(avecCodeInexistant);
  });
});

describe("aAbonnementPayantActif", () => {
  it("refuse si aucun abonnement (null)", () => {
    expect(aAbonnementPayantActif(null)).toBe(false);
  });

  it("refuse une ligne d'essai (pas de stripe_subscription_id)", () => {
    expect(aAbonnementPayantActif({ stripe_subscription_id: null, current_period_end: "2099-01-01T00:00:00.000Z" })).toBe(false);
  });

  it("refuse un abonnement Stripe déjà expiré", () => {
    expect(aAbonnementPayantActif({ stripe_subscription_id: "sub_123", current_period_end: "2000-01-01T00:00:00.000Z" })).toBe(false);
  });

  it("accepte un abonnement Stripe réel et encore actif", () => {
    expect(aAbonnementPayantActif({ stripe_subscription_id: "sub_123", current_period_end: "2099-01-01T00:00:00.000Z" })).toBe(true);
  });

  it("refuse si current_period_end est absent, même avec un stripe_subscription_id", () => {
    expect(aAbonnementPayantActif({ stripe_subscription_id: "sub_123", current_period_end: null })).toBe(false);
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

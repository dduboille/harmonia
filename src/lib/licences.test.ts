import { describe, it, expect } from "vitest";
import { licenceActive, siegesDisponibles, type Licence } from "./licences";

function licence(p: Partial<Licence> = {}): Licence {
  return {
    id: "l1",
    etablissement_id: "e1",
    sieges: 30,
    valid_from: "2026-09-01",
    valid_until: "2027-06-30",
    statut: "active",
    reference: null,
    ...p,
  };
}

describe("licenceActive — les bornes sont incluses", () => {
  it("couvre le premier jour", () => {
    expect(licenceActive(licence(), new Date("2026-09-01T00:00:00Z"))).toBe(true);
  });

  it("couvre le DERNIER jour en entier, pas jusqu'à son matin", () => {
    // Le piège : comparer des horodatages ferait expirer la licence à minuit,
    // et un élève perdrait l'accès le jour même de son dernier cours.
    expect(licenceActive(licence(), new Date("2027-06-30T23:59:00Z"))).toBe(true);
  });

  it("ne couvre ni la veille ni le lendemain", () => {
    expect(licenceActive(licence(), new Date("2026-08-31T23:59:00Z"))).toBe(false);
    expect(licenceActive(licence(), new Date("2027-07-01T00:01:00Z"))).toBe(false);
  });

  it("une licence suspendue ne couvre rien, même dans sa période", () => {
    const l = licence({ statut: "suspendue" });
    expect(licenceActive(l, new Date("2027-01-15T12:00:00Z"))).toBe(false);
  });

  it("une licence annulée non plus", () => {
    expect(licenceActive(licence({ statut: "annulee" }), new Date("2027-01-15"))).toBe(false);
  });
});

describe("siegesDisponibles — cumul des licences en cours", () => {
  const a = new Date("2027-01-15T12:00:00Z");

  it("additionne les licences actives d'un même établissement", () => {
    // Cas réel : une licence de rentrée, puis une extension en cours d'année.
    expect(siegesDisponibles([licence({ sieges: 30 }), licence({ id: "l2", sieges: 12 })], a)).toBe(42);
  });

  it("ignore celles qui sont expirées ou suspendues", () => {
    const licences = [
      licence({ sieges: 30 }),
      licence({ id: "l2", sieges: 100, valid_until: "2026-12-31" }),  // expirée
      licence({ id: "l3", sieges: 50, statut: "suspendue" }),          // suspendue
    ];
    expect(siegesDisponibles(licences, a)).toBe(30);
  });

  it("rend zéro quand rien ne court", () => {
    expect(siegesDisponibles([], a)).toBe(0);
    expect(siegesDisponibles([licence({ statut: "annulee" })], a)).toBe(0);
  });

  it("l'année scolaire suivante, la licence de l'année précédente ne compte plus", () => {
    expect(siegesDisponibles([licence({ sieges: 30 })], new Date("2027-09-15"))).toBe(0);
  });
});

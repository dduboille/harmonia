/**
 * lib/pcset.test.ts
 * Verrou arithmétique du cours 44 : chaque valeur IMPRIMÉE dans la spec
 * validée (2026-07-18-cours-set-theory-contenu-fr.md) — formes normales,
 * formes premières, vecteurs, transformations Tn/TnI — doit être reproduite
 * à l'identique par le moteur. Un désaccord = arrêt (on ne corrige ni le
 * moteur ni le cours en silence).
 */

import { describe, it, expect } from "vitest";
import {
  mod12,
  classeIntervalle,
  transposer,
  inverser,
  formeNormale,
  formePremiere,
  vecteurIntervalles,
  vecteurEnTexte,
} from "./pcset";

describe("mod12 & classes d'intervalles (section 2)", () => {
  it("arithmétique modulo 12 de la spec : 11 + 2 = 1 ; 3 − 7 = 8", () => {
    expect(mod12(11 + 2)).toBe(1);
    expect(mod12(3 - 7)).toBe(8);
  });

  it("ic(i) = min(i, 12 − i) : Sol♯→Ré = ic 6 ; Mi→Do = ic 4", () => {
    expect(classeIntervalle(2 - 8)).toBe(6);
    expect(classeIntervalle(0 - 4)).toBe(4);
    expect(classeIntervalle(11)).toBe(1);
    expect(classeIntervalle(6)).toBe(6);
    expect(classeIntervalle(0)).toBe(0);
  });
});

describe("Tn et TnI (section 3 — cellule op. 11 {7,8,11})", () => {
  it("T1{7,8,11} = {8,9,0} ; T5 = {0,1,4}", () => {
    expect(transposer([7, 8, 11], 1).sort((a, b) => a - b)).toEqual([0, 8, 9]);
    expect(transposer([7, 8, 11], 5).sort((a, b) => a - b)).toEqual([0, 1, 4]);
  });

  it("T0I{7,8,11} = {1,4,5} ; T4I = {5,8,9}", () => {
    expect(inverser([7, 8, 11]).sort((a, b) => a - b)).toEqual([1, 4, 5]);
    expect(inverser([7, 8, 11], 4).sort((a, b) => a - b)).toEqual([5, 8, 9]);
  });

  it("quiz Q8 : T8({1,4,9}) = {0,5,9}", () => {
    expect(transposer([1, 4, 9], 8).sort((a, b) => a - b)).toEqual([0, 5, 9]);
  });

  it("quiz Q3 : T4I({2,3,7}) = {9,1,2}", () => {
    expect(inverser([2, 3, 7], 4).sort((a, b) => a - b)).toEqual([1, 2, 9]);
  });

  it("exercice 4 : T4I({4,5,9}) = {0,7,11}", () => {
    expect(inverser([4, 5, 9], 4).sort((a, b) => a - b)).toEqual([0, 7, 11]);
  });
});

describe("Forme normale (section 4)", () => {
  it("exemple A : {0,1,4} → [0,1,4]", () => {
    expect(formeNormale([0, 1, 4])).toEqual([0, 1, 4]);
  });

  it("exemple B : {7,9,1,2} → [7,9,1,2]", () => {
    expect(formeNormale([7, 9, 1, 2])).toEqual([7, 9, 1, 2]);
  });

  it("exemple C : {11,0,2,3,6} → [11,0,2,3,6]", () => {
    expect(formeNormale([11, 0, 2, 3, 6])).toEqual([11, 0, 2, 3, 6]);
  });

  it("quiz Q1 : {0,4,6,11} → [11,0,4,6]", () => {
    expect(formeNormale([0, 4, 6, 11])).toEqual([11, 0, 4, 6]);
  });

  it("exercice 1 : {10,11,2,5} → [10,11,2,5]", () => {
    expect(formeNormale([10, 11, 2, 5])).toEqual([10, 11, 2, 5]);
  });

  it("exercice 4 : {4,5,9} → [4,5,9] ; {7,11,0} → [7,11,0]", () => {
    expect(formeNormale([4, 5, 9])).toEqual([4, 5, 9]);
    expect(formeNormale([7, 11, 0])).toEqual([7, 11, 0]);
  });

  it("segmentation op. 11 : [7,8,11], [7,8,9], [5,7,9], [5,7,8,9,11]", () => {
    expect(formeNormale([11, 8, 7])).toEqual([7, 8, 11]);
    expect(formeNormale([8, 7, 9])).toEqual([7, 8, 9]);
    expect(formeNormale([7, 9, 5])).toEqual([5, 7, 9]);
    expect(formeNormale([11, 8, 7, 9, 5])).toEqual([5, 7, 8, 9, 11]);
  });

  it("ensemble totalement symétrique : {0,4,8} → [0,4,8] (plus petit numéro)", () => {
    expect(formeNormale([4, 8, 0])).toEqual([0, 4, 8]);
  });

  it("accord « Farben » {0,8,11,4,9} → [8,9,11,0,4] (départage au tassement)", () => {
    expect(formeNormale([0, 8, 11, 4, 9])).toEqual([8, 9, 11, 0, 4]);
  });
});

describe("Forme première (section 4 + table des ensembles célèbres)", () => {
  it("exemple A : {0,1,4} → [0,1,4] (3-3)", () => {
    expect(formePremiere([0, 1, 4])).toEqual([0, 1, 4]);
  });

  it("exemple B : {7,9,1,2} → [0,1,5,7] (4-16)", () => {
    expect(formePremiere([7, 9, 1, 2])).toEqual([0, 1, 5, 7]);
  });

  it("exemple C : {11,0,2,3,6} → [0,1,3,4,7] (5-16)", () => {
    expect(formePremiere([11, 0, 2, 3, 6])).toEqual([0, 1, 3, 4, 7]);
  });

  it("quiz Q5 : {2,5,6,9} → [0,3,4,7] (4-17, symétrique)", () => {
    expect(formePremiere([2, 5, 6, 9])).toEqual([0, 3, 4, 7]);
  });

  it("quiz Q9 : gamme par tons → [0,2,4,6,8,10] (6-35)", () => {
    expect(formePremiere([0, 2, 4, 6, 8, 10])).toEqual([0, 2, 4, 6, 8, 10]);
  });

  it("exercice 1 : {10,11,2,5} → [0,1,4,7] (4-18)", () => {
    expect(formePremiere([10, 11, 2, 5])).toEqual([0, 1, 4, 7]);
  });

  it("exercice 2 (relation Z) : 4-Z15 et 4-Z29 restent distincts", () => {
    expect(formePremiere([0, 1, 4, 6])).toEqual([0, 1, 4, 6]);
    expect(formePremiere([0, 1, 3, 7])).toEqual([0, 1, 3, 7]);
  });

  it("exercice 4 : {4,5,9} et {7,11,0} → même classe [0,1,5] (3-4)", () => {
    expect(formePremiere([4, 5, 9])).toEqual([0, 1, 5]);
    expect(formePremiere([7, 11, 0])).toEqual([0, 1, 5]);
  });

  it("quiz Q3 : {2,3,7} et {9,1,2} → même classe [0,1,5]", () => {
    expect(formePremiere([2, 3, 7])).toEqual([0, 1, 5]);
    expect(formePremiere([9, 1, 2])).toEqual([0, 1, 5]);
  });

  it("accord « Farben » {0,8,11,4,9} → [0,1,3,4,8] (5-Z17)", () => {
    expect(formePremiere([0, 8, 11, 4, 9])).toEqual([0, 1, 3, 4, 8]);
  });

  it("segmentation op. 11 : 3-1, 3-6, 5-8", () => {
    expect(formePremiere([7, 8, 9])).toEqual([0, 1, 2]);
    expect(formePremiere([5, 7, 9])).toEqual([0, 2, 4]);
    expect(formePremiere([5, 7, 8, 9, 11])).toEqual([0, 2, 3, 4, 6]);
  });

  it("triade majeure ET mineure → [0,3,7] (3-11)", () => {
    expect(formePremiere([0, 4, 7])).toEqual([0, 3, 7]);
    expect(formePremiere([0, 3, 7])).toEqual([0, 3, 7]);
  });
});

describe("Vecteur d'intervalles (section 5)", () => {
  const vec = (pcs: number[]) => vecteurEnTexte(vecteurIntervalles(pcs));

  it("calculs complets de la spec : [0,1,4], [0,3,7], [0,2,4,6]", () => {
    expect(vec([0, 1, 4])).toBe("<101100>");
    expect(vec([0, 3, 7])).toBe("<001110>");
    expect(vec([0, 2, 4, 6])).toBe("<030201>");
  });

  it("l'inversion ne change jamais le vecteur : majeur = mineur", () => {
    expect(vec([0, 4, 7])).toBe("<001110>");
  });

  it("exemple B {7,9,1,2} (4-16) → <110121>", () => {
    expect(vec([7, 9, 1, 2])).toBe("<110121>");
  });

  it("relation Z : 4-Z15 [0,1,4,6] et 4-Z29 [0,1,3,7] → <111111>", () => {
    expect(vec([0, 1, 4, 6])).toBe("<111111>");
    expect(vec([0, 1, 3, 7])).toBe("<111111>");
  });

  it("exercice 1 : [0,1,4,7] (4-18) → <102111>", () => {
    expect(vec([0, 1, 4, 7])).toBe("<102111>");
  });

  it("quiz Q2 : trichorde viennois [0,1,6] (3-5) → <100011>", () => {
    expect(vec([0, 1, 6])).toBe("<100011>");
  });

  it("quiz Q6 : un pentacorde compte 10 paires", () => {
    const somme = vecteurIntervalles([0, 1, 3, 4, 8]).reduce((s, x) => s + x, 0);
    expect(somme).toBe(10);
  });

  it("table des ensembles célèbres : les 14 vecteurs imprimés", () => {
    expect(vec([0, 1, 2])).toBe("<210000>"); // 3-1
    expect(vec([0, 1, 4])).toBe("<101100>"); // 3-3
    expect(vec([0, 1, 5])).toBe("<100110>"); // 3-4
    expect(vec([0, 1, 6])).toBe("<100011>"); // 3-5
    expect(vec([0, 3, 7])).toBe("<001110>"); // 3-11
    expect(vec([0, 4, 8])).toBe("<000300>"); // 3-12
    expect(vec([0, 1, 5, 7])).toBe("<110121>"); // 4-16
    expect(vec([0, 2, 4, 6])).toBe("<030201>"); // 4-21
    expect(vec([0, 3, 6, 9])).toBe("<004002>"); // 4-28
    expect(vec([0, 1, 3, 4, 8])).toBe("<212320>"); // 5-Z17 (Farben)
    expect(vec([0, 1, 4, 5, 8, 9])).toBe("<303630>"); // 6-20
    expect(vec([0, 2, 4, 6, 8, 10])).toBe("<060603>"); // 6-35
    expect(vec([0, 1, 3, 5, 6, 8, 10])).toBe("<254361>"); // 7-35
    expect(vec([0, 1, 3, 4, 6, 7, 9, 10])).toBe("<448444>"); // 8-28
  });

  it("5-Z17 et son Z-associé 5-Z37 [0,3,4,5,8] partagent <212320>", () => {
    expect(vec([0, 3, 4, 5, 8])).toBe("<212320>");
    expect(formePremiere([0, 3, 4, 5, 8])).toEqual([0, 3, 4, 5, 8]);
  });
});

describe("Sérialisme (section 6 — Symphonie op. 21 de Webern)", () => {
  const P0 = [0, 9, 10, 11, 7, 8, 2, 1, 5, 4, 3, 6];

  it("I0 = 0,3,2,1,5,4,10,11,7,8,9,6 (terme à terme, ordre conservé)", () => {
    expect(inverser(P0)).toEqual([0, 3, 2, 1, 5, 4, 10, 11, 7, 8, 9, 6]);
  });

  it("R0 = 6,3,4,5,1,2,8,7,11,10,9,0", () => {
    expect([...P0].reverse()).toEqual([6, 3, 4, 5, 1, 2, 8, 7, 11, 10, 9, 0]);
  });

  it("le second hexacorde est le rétrograde du premier transposé au triton", () => {
    const premier = P0.slice(0, 6);
    const retro = [...premier].reverse();
    expect(transposer(retro, 6)).toEqual(P0.slice(6));
  });

  it("R6(P0) = P0 : la série est son propre rétrograde au triton", () => {
    const R0 = [...P0].reverse();
    expect(transposer(R0, 6)).toEqual(P0);
  });
});

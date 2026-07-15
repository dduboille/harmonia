import { describe, it, expect } from "vitest";
import { construirePalette, resoudreAccord } from "./palette-fonctionnelle";

const DO = 0;

describe("construirePalette — groupes fonctionnels", () => {
  it("niveau 3 en Do majeur : prédominantes, dominantes, chromatisme", () => {
    const groupes = construirePalette(DO, "major", 3);
    const parTitre = Object.fromEntries(groupes.map((g) => [g.titre, g.accords.map((a) => a.degree)]));

    // Prédominante : ii, ii6, IV (diatoniques SD).
    expect(parTitre["Prédominante"]).toEqual(expect.arrayContaining(["ii", "ii6", "IV"]));
    // Dominante : V, V7, V6/5, et la 7e de sensible — DEMI-diminuée en majeur (viiø7,
    // Si-Ré-Fa-La), telle que le moteur la nomme, et non vii°7.
    expect(parTitre["Dominante"]).toEqual(expect.arrayContaining(["V", "V7", "V6/5", "viiø7"]));
    // Chromatisme : V7/ii, V7/V, iv, bVI, et le napolitain bII6 (catégorie chromatique
    // « napolitain » → groupe Chromatisme, comme tous les accords chromatiques).
    expect(parTitre["Chromatisme"]).toEqual(expect.arrayContaining(["V7/ii", "V7/V", "iv", "bVI", "bII6"]));
  });

  it("niveau 1 : aucun accord chromatique", () => {
    const groupes = construirePalette(DO, "major", 1);
    const chroma = groupes.find((g) => g.titre === "Chromatisme");
    expect(chroma === undefined || chroma.accords.length === 0).toBe(true);
    // Mais la tonique et la dominante diatoniques sont là.
    const titres = groupes.filter((g) => g.accords.length > 0).map((g) => g.titre);
    expect(titres).toEqual(expect.arrayContaining(["Tonique", "Prédominante", "Dominante"]));
  });

  it("chaque accord porte le degré et la fonction que le moteur rendrait", () => {
    const groupes = construirePalette(DO, "major", 3);
    const v7 = groupes.flatMap((g) => g.accords).find((a) => a.degree === "V7")!;
    expect(v7.fonction).toBe("D");
    expect(v7.nom).toBe("Sol7");
    // La basse d'un V6/5 est la sensible (Si).
    const v65 = groupes.flatMap((g) => g.accords).find((a) => a.degree === "V6/5")!;
    expect(v65.bassPc).toBe(11);
  });
});

describe("resoudreAccord — id de palette OU nom d'accord", () => {
  it("résout un id de palette en pcs + basse", () => {
    const a = resoudreAccord("V6/5", DO, "major")!;
    expect(a.degree).toBe("V6/5");
    expect(a.bassPc).toBe(11);
  });

  it("résout un nom d'accord simple (fondamentale à la basse)", () => {
    // Les exercices existants donnent "C", "Dm", "G7" : on doit savoir les lire.
    const c = resoudreAccord("C", DO, "major")!;
    expect(c.pcs.sort((x, y) => x - y)).toEqual([0, 4, 7]);
    expect(c.bassPc).toBe(0);
    const g7 = resoudreAccord("G7", DO, "major")!;
    expect(g7.degree).toBe("V7");
  });

  it("rend null sur une entrée illisible", () => {
    expect(resoudreAccord("???", DO, "major")).toBeNull();
  });
});

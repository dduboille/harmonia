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

  it("les degrés abaissés sont nommés en BÉMOLS, pas en dièses", () => {
    const accords = construirePalette(DO, "major", 3).flatMap((g) => g.accords);
    // bVI = Lab majeur (et non « Sol# »), bII6 = napolitain Réb (et non « Do# »).
    expect(accords.find((a) => a.degree === "bVI")!.nom).toBe("Lab");
    expect(accords.find((a) => a.degree === "bII6")!.nom).toBe("Réb");
  });
});

describe("construirePalette — la dominante avec sensible existe en mineur", () => {
  const LA = 9; // La mineur : sensible = Sol# (8)

  it("le groupe Dominante contient V, V7, vii°7 (bâtis sur la sensible)", () => {
    const groupes = construirePalette(LA, "minor", 3);
    const dominante = groupes.find((g) => g.titre === "Dominante")!;
    const degres = dominante.accords.map((a) => a.degree);
    expect(degres).toEqual(expect.arrayContaining(["V", "V7", "vii°7"]));
  });

  it("resoudreAccord('V') rend la dominante MAJEURE (Mi), fonction D", () => {
    const v = resoudreAccord("V", LA, "minor")!;
    expect(v).not.toBeNull();
    expect(v.fonction).toBe("D");
    expect(v.bassPc).toBe(4); // Mi
  });

  it("resoudreAccord('V7') rend bien un V7 en mineur", () => {
    const v7 = resoudreAccord("V7", LA, "minor")!;
    expect(v7).not.toBeNull();
    expect(v7.degree).toBe("V7");
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

describe("construirePalette — l'orthographe suit l'armure, pas la touche du piano", () => {
  const MIB = 3;   // mib mineur : 6 bémols
  const nomDuDegre = (accords: { degree: string; nom: string }[], degre: string) =>
    accords.find((a) => a.degree === degre)?.nom;

  it("mib mineur : la tonique est « Mibm », jamais « Ré#m »", () => {
    const accords = construirePalette(MIB, "minor", 2).flatMap((g) => g.accords);
    expect(nomDuDegre(accords, "i")).toBe("Mibm");
    expect(accords.every((a) => !a.nom.startsWith("Ré#"))).toBe(true);
  });

  it("mib mineur : les sept degrés portent leur nom d'armure", () => {
    const accords = construirePalette(MIB, "minor", 2).flatMap((g) => g.accords);
    expect(nomDuDegre(accords, "III")).toBe("Solb");
    expect(nomDuDegre(accords, "iv")).toBe("Labm");
    expect(nomDuDegre(accords, "VII")).toBe("Réb");
    // Le VI s'écrit Dob : « Si » sonnerait pareil mais ne s'écrit pas en mib mineur.
    expect(nomDuDegre(accords, "VI")).toBe("Dob");
  });

  it("mib majeur : I, IV et V sont Mib, Lab et Sib", () => {
    const accords = construirePalette(MIB, "major", 1).flatMap((g) => g.accords);
    expect(nomDuDegre(accords, "I")).toBe("Mib");
    expect(nomDuDegre(accords, "IV")).toBe("Lab");
    expect(nomDuDegre(accords, "V")).toBe("Sib");
  });

  it("une armure diésée garde ses dièses", () => {
    const accords = construirePalette(4, "major", 1).flatMap((g) => g.accords);  // Mi majeur
    expect(nomDuDegre(accords, "I")).toBe("Mi");
    expect(nomDuDegre(accords, "IV")).toBe("La");
    expect(nomDuDegre(accords, "V")).toBe("Si");
    expect(accords.every((a) => !a.nom.includes("b"))).toBe(true);
  });

  it("l'armure explicite l'emporte sur la déduction quand elle est fournie", () => {
    // Même hauteur de tonique (3), deux tonalités : mib mineur (6♭) et ré# mineur (6♯).
    const enBemols = construirePalette(MIB, "minor", 1, -6).flatMap((g) => g.accords);
    const enDieses = construirePalette(MIB, "minor", 1, 6).flatMap((g) => g.accords);
    expect(nomDuDegre(enBemols, "i")).toBe("Mibm");
    expect(nomDuDegre(enDieses, "i")).toBe("Ré#m");
  });
});

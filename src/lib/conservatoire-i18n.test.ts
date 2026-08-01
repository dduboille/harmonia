import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import { join } from "path";
import { fusionnerConservatoire, type SurcoucheConservatoire } from "./conservatoire-i18n";
import type { CoursConservatoireData } from "@/data/conservatoireData";

const FR: CoursConservatoireData = {
  intuition: "Intuition française",
  reference: { badge: "Badge FR", citation: "Citation FR", auteur: "Auteur FR" },
  voix: ["voix FR 1", "voix FR 2"],
  repertoire: {
    titre: "Titre FR",
    compositeur: "Compositeur FR",
    notes: ["C4", "E4"],
    musicxml: "<score/>",
    analyse: [{ numero: 1, nom: "Do", degre: "I", fonction: "T" }],
    analyseNarrative: {
      tonalite: "Do majeur",
      metrique: "4/4",
      forme: "Forme FR",
      sections: [{ label: "L FR", titre: "T FR", chiffrage: "I", fonctions: "T", texte: "Texte FR" }],
      synthese: [{ titre: "S FR", texte: "Synthèse FR" }],
    },
  },
  pieges: [{ erreur: "Erreur FR", correction: "Correction FR" }],
  resume: ["résumé FR 1"],
};

describe("fusionnerConservatoire — repli français", () => {
  it("sans traduction, rend le français à l'identique", () => {
    expect(fusionnerConservatoire(FR, undefined)).toEqual(FR);
  });

  it("avec une traduction vide, rend le français à l'identique", () => {
    expect(fusionnerConservatoire(FR, {})).toEqual(FR);
  });

  it("applique une traduction complète", () => {
    const trad: SurcoucheConservatoire = {
      intuition: "English intuition",
      reference: { badge: "Badge EN", citation: "Citation EN", auteur: "Author EN" },
      voix: ["voice EN 1"],
      repertoire: { titre: "Title EN", compositeur: "Composer EN" },
      pieges: [{ erreur: "Error EN", correction: "Fix EN" }],
      resume: ["summary EN"],
    };
    const out = fusionnerConservatoire(FR, trad);
    expect(out.intuition).toBe("English intuition");
    expect(out.reference.auteur).toBe("Author EN");
    expect(out.voix).toEqual(["voice EN 1"]);
    expect(out.repertoire.titre).toBe("Title EN");
    expect(out.pieges[0].correction).toBe("Fix EN");
    expect(out.resume).toEqual(["summary EN"]);
  });

  it("une traduction PARTIELLE ne perd rien : les champs absents restent français", () => {
    const out = fusionnerConservatoire(FR, { intuition: "Only this is translated" });
    expect(out.intuition).toBe("Only this is translated");
    expect(out.reference).toEqual(FR.reference);
    expect(out.voix).toEqual(FR.voix);
    expect(out.pieges).toEqual(FR.pieges);
    expect(out.resume).toEqual(FR.resume);
    expect(out.repertoire.analyseNarrative).toEqual(FR.repertoire.analyseNarrative);
  });

  it("ne traduit JAMAIS la partition, les notes ni les pastilles d'analyse", () => {
    const out = fusionnerConservatoire(FR, {
      repertoire: { titre: "Title EN", compositeur: "Composer EN", musicxml: "<PIRATE/>", notes: ["X9"], analyse: [] },
    } as SurcoucheConservatoire);
    expect(out.repertoire.musicxml).toBe("<score/>");
    expect(out.repertoire.notes).toEqual(["C4", "E4"]);
    expect(out.repertoire.analyse).toEqual(FR.repertoire.analyse);
  });

  it("ignore les valeurs vides, blanches ou de type inattendu", () => {
    const out = fusionnerConservatoire(FR, {
      intuition: "   ",
      reference: "pas un objet",
      voix: [],
      pieges: [{ erreur: "sans correction" }],
      resume: [42, null],
      analyseNarrative: { sections: [] },
    } as SurcoucheConservatoire);
    expect(out).toEqual(FR);
  });

  it("n'accepte une analyse narrative que si elle porte des sections", () => {
    const narr = {
      tonalite: "C major", metrique: "4/4", forme: "Form EN",
      sections: [{ label: "L EN", titre: "T EN", chiffrage: "I", fonctions: "T", texte: "Text EN" }],
      synthese: [{ titre: "S EN", texte: "Summary EN" }],
    };
    expect(fusionnerConservatoire(FR, { analyseNarrative: narr }).repertoire.analyseNarrative).toEqual(narr);
    expect(fusionnerConservatoire(FR, { analyseNarrative: { sections: [] } }).repertoire.analyseNarrative)
      .toEqual(FR.repertoire.analyseNarrative);
  });
});

// ── Cohérence des fichiers de langue eux-mêmes ────────────────────────────────

const LOCALES = ["fr", "en", "es", "de", "pt", "it"] as const;
const msg = Object.fromEntries(
  LOCALES.map((l) => [l, JSON.parse(readFileSync(join(process.cwd(), "messages", `${l}.json`), "utf-8"))]),
) as Record<string, Record<string, { conservatoire?: SurcoucheConservatoire }>>;

describe("messages : surcouche conservatoire", () => {
  it("l'ancien namespace global `conservatoire` a bien disparu des 6 fichiers", () => {
    for (const l of LOCALES) {
      expect(
        (msg[l] as Record<string, unknown>).conservatoire,
        `namespace global 'conservatoire' encore présent dans ${l}.json`,
      ).toBeUndefined();
    }
  });

  it("toute surcouche présente est structurellement valide (fusion sans exception)", () => {
    for (const l of LOCALES) {
      for (let n = 1; n <= 48; n++) {
        const sur = msg[l][`cours${n}`]?.conservatoire;
        if (!sur) continue;
        expect(() => fusionnerConservatoire(FR, sur), `cours${n} / ${l}`).not.toThrow();
      }
    }
  });

  it("les 6 langues couvrent exactement les mêmes cours (pas de trou dans une seule langue)", () => {
    const couverture = (l: string) =>
      Array.from({ length: 48 }, (_, i) => i + 1).filter((n) => msg[l][`cours${n}`]?.conservatoire);
    const ref = couverture("fr");
    for (const l of LOCALES.filter((x) => x !== "fr")) {
      expect(couverture(l), `couverture ${l} différente de fr`).toEqual(ref);
    }
  });
});

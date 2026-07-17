/**
 * Complétude des fiches pédagogiques (satb.pedagogie) dans les 6 langues.
 *
 * Chaque type d'erreur affiché sous l'exercice ouvre une fiche « Comprendre ces
 * remarques » à trois volets. Ce test garantit qu'AUCUN type n'est muet : pour
 * les 14 types du moteur et les 6 fichiers de messages, les 4 clés
 * (titre, quoi, pourquoi, comment) existent et sont non vides. La source des
 * types est VALIDATION_ERROR_TYPES : un type ajouté au moteur casse ce test tant
 * que sa fiche n'est pas rédigée dans toutes les langues.
 */

import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, it, expect } from "vitest";
import { VALIDATION_ERROR_TYPES } from "@/lib/satb-rules";

const LOCALES = ["fr", "en", "de", "es", "it", "pt"] as const;

function pedagogie(locale: string): Record<string, Record<string, string>> {
  const file = path.resolve(__dirname, "../../messages", `${locale}.json`);
  const data = JSON.parse(readFileSync(file, "utf-8"));
  return data.satb.pedagogie;
}

describe("satb.pedagogie — complétude i18n", () => {
  for (const locale of LOCALES) {
    describe(locale, () => {
      const p = pedagogie(locale);

      it("expose le titre de section et les 3 libellés de volet", () => {
        expect(typeof p.titre).toBe("string");
        expect(p.titre.trim().length).toBeGreaterThan(0);
        for (const label of ["quoi", "pourquoi", "comment"] as const) {
          expect(typeof p.labels?.[label]).toBe("string");
          expect(p.labels[label].trim().length).toBeGreaterThan(0);
        }
      });

      for (const type of VALIDATION_ERROR_TYPES) {
        it(`fiche « ${type} » : titre + 3 volets non vides`, () => {
          const fiche = p[type] as unknown as Record<string, string>;
          expect(fiche, `type manquant : ${type}`).toBeTruthy();
          for (const key of ["titre", "quoi", "pourquoi", "comment"] as const) {
            expect(typeof fiche[key]).toBe("string");
            expect(fiche[key].trim().length, `${locale}.${type}.${key} vide`).toBeGreaterThan(0);
          }
        });
      }
    });
  }

  it("couvre exactement les 14 types du moteur", () => {
    expect(VALIDATION_ERROR_TYPES).toHaveLength(14);
  });
});

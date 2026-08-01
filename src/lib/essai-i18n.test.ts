import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import { join } from "path";
import { validerRachat, type TrialCode } from "./trial-codes";

/**
 * L'API /api/trial/redeem ne renvoie plus de phrase française à afficher : elle
 * renvoie un CODE stable que la page /essai traduit. Ce test verrouille les deux
 * bouts du contrat — si un motif de refus est ajouté sans sa traduction, la page
 * afficherait le message générique « inconnu » sans que rien ne le signale.
 */

const LOCALES = ["fr", "en", "es", "de", "pt", "it"] as const;

/** Les codes émis par la route en plus de ceux de `validerRachat`. */
const CODES_ROUTE = ["requeteInvalide", "codeManquant", "serveur"] as const;
/** Les codes purement côté client (pas de réponse HTTP associée). */
const CODES_CLIENT = ["reseau", "inconnu"] as const;

function messages(locale: string): Record<string, Record<string, string>> {
  const brut = readFileSync(join(process.cwd(), "messages", `${locale}.json`), "utf-8");
  return JSON.parse(brut).essai;
}

/** Tous les codes que `validerRachat` peut réellement produire, par construction. */
function codesDeValidation(): string[] {
  const base: TrialCode = { id: "x", code: "ABCD2FGH", max_uses: 5, uses_count: 0, active: true };
  const cas = [
    validerRachat(base, false, true),                                  // abonnementActif
    validerRachat(base, true, false),                                  // dejaUtilise
    validerRachat(null, false, false),                                 // introuvable
    validerRachat({ ...base, active: false }, false, false),           // inactif
    validerRachat({ ...base, uses_count: 5 }, false, false),           // limiteAtteinte
  ];
  return cas.flatMap((r) => (r.ok ? [] : [r.code]));
}

describe("contrat des codes d'erreur de l'essai", () => {
  it("validerRachat produit bien les 5 motifs de refus attendus", () => {
    expect(codesDeValidation().sort()).toEqual(
      ["abonnementActif", "dejaUtilise", "inactif", "introuvable", "limiteAtteinte"]
    );
  });

  it.each(LOCALES)("%s : chaque code d'erreur a sa traduction", (locale) => {
    const erreurs = messages(locale).erreurs;
    const attendus = [...codesDeValidation(), ...CODES_ROUTE, ...CODES_CLIENT];
    for (const code of attendus) {
      expect(erreurs[code], `essai.erreurs.${code} manquant dans ${locale}.json`).toBeTruthy();
    }
  });

  it.each(LOCALES)("%s : les libellés de la page sont présents", (locale) => {
    const m = messages(locale);
    for (const cle of ["label", "titre", "intro", "champLabel", "bouton", "boutonEnCours", "succes", "succesCta", "pasDeCode"]) {
      expect(m[cle], `essai.${cle} manquant dans ${locale}.json`).toBeTruthy();
    }
  });

  it("aucune traduction n'est restée identique au français (hors fr)", () => {
    const fr = messages("fr");
    for (const locale of LOCALES.filter((l) => l !== "fr")) {
      const m = messages(locale);
      // `titre` contient « 14 » dans toutes les langues : on compare le reste.
      expect(m.bouton, `essai.bouton non traduit en ${locale}`).not.toBe(fr.bouton);
      expect(m.erreurs.introuvable, `essai.erreurs.introuvable non traduit en ${locale}`).not.toBe(fr.erreurs.introuvable);
    }
  });
});

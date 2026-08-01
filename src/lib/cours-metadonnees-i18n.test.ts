import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import { join } from "path";
import { COURS } from "./catalogue";

/**
 * Les métadonnées des pages de cours (<title>, description, OpenGraph, Twitter)
 * et le titre affiché par le paywall viennent des messages — PAS de
 * `catalogue.ts`, qui n'existe qu'en français. Ce test garde cette source :
 * un cours ajouté sans `title`/`subtitle` traduits ferait silencieusement
 * retomber les 5 autres langues sur du texte français indexé comme localisé.
 */

const LOCALES = ["fr", "en", "es", "de", "pt", "it"] as const;

const messages = Object.fromEntries(
  LOCALES.map((l) => [
    l,
    JSON.parse(readFileSync(join(process.cwd(), "messages", `${l}.json`), "utf-8")),
  ])
) as Record<string, Record<string, { title?: string; subtitle?: string }>>;

describe("métadonnées localisées des pages de cours", () => {
  it.each(LOCALES)("%s : les %i cours ont un title et un subtitle non vides", (locale) => {
    const manquants: string[] = [];
    for (const c of COURS) {
      const o = messages[locale][`cours${c.num}`];
      if (!o?.title?.trim()) manquants.push(`cours${c.num}.title`);
      if (!o?.subtitle?.trim()) manquants.push(`cours${c.num}.subtitle`);
    }
    expect(manquants, `manquants dans ${locale}.json : ${manquants.join(", ")}`).toEqual([]);
  });

  it.each(LOCALES.filter((l) => l !== "fr"))(
    "%s : aucun titre de cours n'est resté identique au français",
    (locale) => {
      const identiques = COURS
        .filter((c) => messages[locale][`cours${c.num}`]?.title === messages.fr[`cours${c.num}`]?.title)
        .map((c) => c.num);
      expect(identiques, `titres non traduits en ${locale} : cours ${identiques.join(", ")}`).toEqual([]);
    }
  );

  it("le libellé « Cours {num} » du fil d'Ariane existe dans les 6 langues", () => {
    for (const locale of LOCALES) {
      const paywall = (JSON.parse(
        readFileSync(join(process.cwd(), "messages", `${locale}.json`), "utf-8")
      ) as { paywall?: { coursNum?: string } }).paywall;
      expect(paywall?.coursNum, `paywall.coursNum manquant dans ${locale}.json`).toBeTruthy();
      expect(paywall!.coursNum, `paywall.coursNum sans jeton {num} dans ${locale}.json`).toContain("{num}");
    }
  });
});

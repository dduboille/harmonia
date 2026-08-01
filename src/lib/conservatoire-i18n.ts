import type { CoursConservatoireData } from "@/data/conservatoireData";
import type { AnalyseNarrative } from "@/data/conservatoire-bwv846";

/**
 * Surcouche traduite d'une section conservatoire, telle qu'elle vit dans
 * `messages/{locale}.json` sous `cours{N}.conservatoire`.
 *
 * Tout y est facultatif : la traduction d'un cours peut n'être que partielle
 * (par exemple la prose faite mais pas encore l'analyse narrative). Chaque
 * champ absent, vide ou d'un type inattendu retombe sur la version française,
 * qui reste la source de vérité structurelle.
 */
export interface SurcoucheConservatoire {
  intuition?: unknown;
  reference?: unknown;
  voix?: unknown;
  repertoire?: unknown;
  pieges?: unknown;
  resume?: unknown;
  analyseNarrative?: unknown;
}

function chaine(v: unknown, repli: string): string {
  return typeof v === "string" && v.trim() ? v : repli;
}

function listeChaines(v: unknown, repli: string[]): string[] {
  if (!Array.isArray(v)) return repli;
  const propres = v.filter((x): x is string => typeof x === "string" && x.trim().length > 0);
  return propres.length ? propres : repli;
}

function objet(v: unknown): Record<string, unknown> {
  return v && typeof v === "object" && !Array.isArray(v) ? (v as Record<string, unknown>) : {};
}

/**
 * Fusionne la version française d'une section conservatoire avec sa traduction.
 *
 * Ne sont JAMAIS traduits : la partition (`musicxml`), les notes jouées et les
 * pastilles d'analyse (`analyse`) — ce sont des données musicales communes à
 * toutes les langues, pas du texte d'interface.
 */
export function fusionnerConservatoire(
  fr: CoursConservatoireData,
  trad: SurcoucheConservatoire | undefined,
): CoursConservatoireData {
  const t = trad ?? {};
  const ref = objet(t.reference);
  const rep = objet(t.repertoire);

  const piegesTrad = Array.isArray(t.pieges)
    ? t.pieges.filter(
        (p): p is { erreur: string; correction: string } =>
          !!p && typeof p === "object" &&
          typeof (p as { erreur?: unknown }).erreur === "string" &&
          typeof (p as { correction?: unknown }).correction === "string",
      )
    : [];

  const narr = objet(t.analyseNarrative);
  const narrValide =
    Array.isArray(narr.sections) && narr.sections.length > 0
      ? (narr as unknown as AnalyseNarrative)
      : undefined;

  return {
    intuition: chaine(t.intuition, fr.intuition),
    reference: {
      badge: chaine(ref.badge, fr.reference.badge),
      citation: chaine(ref.citation, fr.reference.citation),
      auteur: chaine(ref.auteur, fr.reference.auteur),
    },
    voix: listeChaines(t.voix, fr.voix),
    repertoire: {
      titre: chaine(rep.titre, fr.repertoire.titre),
      compositeur: chaine(rep.compositeur, fr.repertoire.compositeur),
      notes: fr.repertoire.notes,
      musicxml: fr.repertoire.musicxml,
      analyse: fr.repertoire.analyse,
      analyseNarrative: narrValide ?? fr.repertoire.analyseNarrative,
    },
    pieges: piegesTrad.length ? piegesTrad : fr.pieges,
    resume: listeChaines(t.resume, fr.resume),
  };
}

/**
 * lib/squelette-analyse.ts
 * Harmonia — Analyse du squelette pour la frise sous la portée : la FONCTION de
 * chaque accord posé, et la CADENCE finale (sur les deux derniers accords).
 *
 * On ne réanalyse rien : chaque `AccordPalette` porte déjà sa `fonction` et son
 * `degree` (étiquetés par le moteur harmonique). L'analyse se réduit donc à lire
 * ces champs et à appliquer une règle simple de cadence sur les degrés.
 */

import type { Fonction } from "@/lib/harmonic-analysis";
import { accordsEnSuite, type Squelette } from "@/lib/squelette-model";

export type Cadence = "parfaite" | "plagale" | "demi" | "rompue";

/** La fonction de chaque accord posé, dans l'ordre de lecture, pour la frise. */
export function etiquettesFonctionnelles(
  sq: Squelette,
): Array<{ mesure: number; emplacement: number; fonction: Fonction }> {
  return accordsEnSuite(sq).map(({ mesure, emplacement, accord }) => ({
    mesure,
    emplacement,
    fonction: accord.fonction,
  }));
}

/**
 * NOYAU d'un chiffre romain : le degré SANS son chiffrage de renversement, pour
 * comparer « V6/5 » et « V » comme un même degré.
 *
 * Un accord APPLIQUÉ (dominante secondaire « V7/V », sensible « vii°7/ii »…) n'est
 * jamais une cadence tonale : on le renvoie tel quel (il ne coïncidera avec aucun
 * degré cible). On le repère à une barre suivie d'un chiffre romain — à distinguer
 * du chiffrage « 6/5 », où la barre est suivie d'un chiffre.
 */
function noyauDegre(degree: string): string {
  if (/\/[b#]*[IViv]/.test(degree)) return degree; // accord appliqué
  const m = degree.match(/^([b#]*[IViv]+)/);
  return m ? m[1] : degree;
}

const estTonique = (n: string) => n === "I" || n === "i";
const estDominante = (n: string) => n === "V"; // majuscule seulement : le v mineur naturel n'est pas conclusif
const estSousDominante = (n: string) => n === "IV" || n === "iv";
const estSubmediante = (n: string) => n === "vi" || n === "VI";

/**
 * Cadence sur les DEUX DERNIERS accords posés (par ordre de lecture), lue sur leurs
 * degrés et robuste aux renversements :
 *  - V(7) → I : parfaite (quel que soit le renversement ; la nuance « imparfaite »
 *    est hors périmètre v1) ;
 *  - IV → I : plagale ;
 *  - V(7) → vi : rompue ;
 *  - … → V : demi-cadence (la suite s'arrête sur la dominante).
 * `null` sinon, ou s'il y a moins de deux accords.
 */
export function detecterCadence(sq: Squelette): Cadence | null {
  const suite = accordsEnSuite(sq);
  if (suite.length < 2) return null;
  const avant = noyauDegre(suite[suite.length - 2].accord.degree);
  const apres = noyauDegre(suite[suite.length - 1].accord.degree);

  if (estDominante(avant) && estTonique(apres)) return "parfaite";
  if (estSousDominante(avant) && estTonique(apres)) return "plagale";
  if (estDominante(avant) && estSubmediante(apres)) return "rompue";
  if (estDominante(apres)) return "demi";
  return null;
}

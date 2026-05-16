"use client";

import { useLocale } from "next-intl";
import { MUSIC_TERMS } from "@/data/musicTerms";

/**
 * Returns a translator function for short music theory terms.
 * Falls back to the French key when no translation exists.
 *
 * Usage:
 *   const tr = useTerm();
 *   tr("Majeure")  → "Mayor"  (es)
 *   tr("stable")   → "stabil" (de)
 */
export function useTerm(): (fr: string) => string {
  const locale = useLocale();
  return (fr: string) => MUSIC_TERMS[fr]?.[locale] ?? fr;
}

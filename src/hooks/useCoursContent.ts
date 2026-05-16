"use client";

import { useLocale } from "next-intl";

/**
 * Hook to retrieve locale-keyed pedagogical content.
 * Falls back to "fr" when the locale has no content yet.
 */
export function useCoursContent<T>(content: Record<string, T>): T {
  const locale = useLocale();
  return (content[locale] ?? content["fr"]) as T;
}

/**
 * src/app/sitemap.ts
 * Harmonia — Sitemap dynamique
 *
 * Les cours sont dérivés du catalogue : le sitemap n'en déclarait que 9 sur 41.
 * Chaque URL porte ses alternates hreflang pour les 6 langues.
 */
import { MetadataRoute } from "next";
import { COURS } from "@/lib/catalogue";

const BASE_URL = "https://www.getharmonia.app";
const LOCALES = ["fr", "en", "es", "de", "pt", "it"] as const;

const TOOL_ROUTES: Array<{ path: string; priority: number }> = [
  { path: "cours",             priority: 0.9 },
  { path: "conservatoire",     priority: 0.9 },
  { path: "upgrade",           priority: 0.8 },
  { path: "cursus",            priority: 0.8 },
  { path: "dictee",            priority: 0.8 },
  { path: "notes-etrangeres",  priority: 0.8 },
  { path: "tonalites",         priority: 0.7 },
  { path: "generateur-satb",   priority: 0.7 },
  { path: "composition",       priority: 0.7 },
  { path: "conditions",        priority: 0.3 },
  { path: "confidentialite",   priority: 0.3 },
];

/** Alternates hreflang d'une page donnée, pour les 6 locales. */
function alternates(path: string): Record<string, string> {
  return Object.fromEntries(
    LOCALES.map(l => [l, `${BASE_URL}/${l}${path}`])
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  const push = (path: string, priority: number, changeFrequency: "weekly" | "monthly") => {
    for (const locale of LOCALES) {
      entries.push({
        url: `${BASE_URL}/${locale}${path}`,
        lastModified,
        changeFrequency,
        priority,
        alternates: { languages: alternates(path) },
      });
    }
  };

  push("", 1.0, "weekly");

  for (const route of TOOL_ROUTES) {
    push(`/${route.path}`, route.priority, "monthly");
  }

  for (const cours of COURS) {
    push(`/cours/${cours.num}`, 0.8, "monthly");
  }

  return entries;
}

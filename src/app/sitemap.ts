/**
 * src/app/sitemap.ts
 * Harmonia — Sitemap dynamique
 */
import { MetadataRoute } from "next";

const BASE_URL = "https://www.getharmonia.app";
const LOCALES = ["fr", "en", "es", "de", "pt", "it"];
const COURS_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const TOOL_ROUTES: Array<{ path: string; priority: number }> = [
  { path: "dictee",            priority: 0.8 },
  { path: "notes-etrangeres",  priority: 0.8 },
  { path: "generateur-satb",   priority: 0.7 },
  { path: "editeur-melodique", priority: 0.7 },
  { path: "composition",       priority: 0.7 },
  { path: "conservatoire",     priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    entries.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    });
    entries.push({
      url: `${BASE_URL}/${locale}/cours`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    });
    entries.push({
      url: `${BASE_URL}/${locale}/tonalites`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });
    entries.push({
      url: `${BASE_URL}/${locale}/upgrade`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });

    for (const route of TOOL_ROUTES) {
      entries.push({
        url: `${BASE_URL}/${locale}/${route.path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route.priority,
      });
    }

    for (const id of COURS_IDS) {
      entries.push({
        url: `${BASE_URL}/${locale}/cours/${id}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return entries;
}

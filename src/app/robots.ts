/**
 * src/app/robots.ts
 * Harmonia — Robots.txt dynamique
 */
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/fr/dashboard",
          "/en/dashboard",
          "/es/dashboard",
          "/de/dashboard",
          "/pt/dashboard",
          "/it/dashboard",
          "/fr/profil",
          "/en/profil",
          "/es/profil",
          "/de/profil",
          "/pt/profil",
          "/it/profil",
        ],
      },
    ],
    sitemap: "https://www.getharmonia.app/sitemap.xml",
  };
}
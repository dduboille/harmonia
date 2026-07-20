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
          // Comptes / progression personnelle : rien à indexer, contenu propre à chaque visiteur.
          "/fr/dashboard", "/en/dashboard", "/es/dashboard", "/de/dashboard", "/pt/dashboard", "/it/dashboard",
          "/fr/profil", "/en/profil", "/es/profil", "/de/profil", "/pt/profil", "/it/profil",
          // Bac à sable de la landing (cf. LandingPreview.tsx) : contenu dupliqué/expérimental,
          // jamais promu — indexé, il concurrencerait la vraie page d'accueil.
          "/fr/preview", "/en/preview", "/es/preview", "/de/preview", "/pt/preview", "/it/preview",
          // Page vitrine conservatoire mise de côté (cf. mémoire projet) : pas le récit actuel.
          "/fr/landing-conservatoire", "/en/landing-conservatoire", "/es/landing-conservatoire",
          "/de/landing-conservatoire", "/pt/landing-conservatoire", "/it/landing-conservatoire",
          // Page de développement (banc d'essai PianoPlayer), sans intérêt pour un visiteur.
          "/fr/test-piano", "/en/test-piano", "/es/test-piano", "/de/test-piano", "/pt/test-piano", "/it/test-piano",
          // Flux d'adhésion à une classe par code d'invitation : sans code, page sans contenu ;
          // avec code, spécifique à un visiteur — aucune valeur générique à indexer.
          "/fr/rejoindre", "/en/rejoindre", "/es/rejoindre", "/de/rejoindre", "/pt/rejoindre", "/it/rejoindre",
        ],
      },
    ],
    sitemap: "https://www.getharmonia.app/sitemap.xml",
  };
}
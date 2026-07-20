/**
 * src/app/llms.txt/route.ts
 * Harmonia — llms.txt (convention llmstxt.org)
 *
 * Décrit le site pour les systèmes d'IA (agents de recherche, assistants) qui le
 * lisent avant de le citer ou d'en parler — l'équivalent de robots.txt/sitemap.xml
 * mais pour un lecteur qui comprend le langage naturel plutôt que des règles de
 * crawl. Généré depuis `COURS` (catalogue.ts) : jamais de nombre figé qui se
 * périme quand un cours s'ajoute.
 */
import { COURS, COURS_COUNT, FREE_COURS } from "@/lib/catalogue";

export const dynamic = "force-static";

const SITE_URL = "https://www.getharmonia.app";

const LEVEL_LABEL: Record<number, string> = {
  1: "Niveau 1 — Fondamentaux",
  2: "Niveau 2 — Approfondissement",
  3: "Niveau 3 — Maîtrise (inclut le socle licence et DNSPM)",
  4: "Niveau 4 — Harmonie élargie",
  5: "Niveau 5 — Parcours spécialisés (inclut le master)",
};

function coursSection(): string {
  const parNiveau = new Map<number, typeof COURS>();
  for (const c of COURS) {
    const liste = parNiveau.get(c.level) ?? [];
    liste.push(c);
    parNiveau.set(c.level, liste);
  }
  const blocs: string[] = [];
  for (const [level, label] of Object.entries(LEVEL_LABEL)) {
    const cours = parNiveau.get(Number(level)) ?? [];
    const lignes = cours
      .map((c) => `- [${c.title}](${SITE_URL}/fr/cours/${c.num}): ${c.desc}`)
      .join("\n");
    blocs.push(`### ${label}\n\n${lignes}`);
  }
  return blocs.join("\n\n");
}

function buildLlmsTxt(): string {
  return `# Harmonia

> Harmonia est une plateforme éducative en ligne dédiée à l'harmonie tonale et à l'écriture musicale : ${COURS_COUNT} cours interactifs, un moteur de validation harmonique en temps réel (conduite des voix, quintes/octaves parallèles, résolutions), et une suite d'outils de composition et d'analyse. Disponible en français, anglais, espagnol, allemand, portugais et italien.

Le contenu couvre trois parcours qui se recoupent dans les mêmes cours : un cursus de conservatoire (niveaux 1 à 5, jalonné sur les épreuves du DEM), un socle de licence/master de musicologie (basse chiffrée, contrepoint de la Renaissance, méthodologie du commentaire d'écoute, analyse post-tonale/set theory), et un parcours DNSPM pour interprètes (analyser une œuvre à l'exécution, lecture de partition d'orchestre, méthodologie du relevé). Les ${FREE_COURS.length} premiers cours sont accessibles gratuitement sans carte bancaire ; le reste du catalogue est disponible par abonnement.

## Cours

${coursSection()}

## Outils

- [Éditeur SATB](${SITE_URL}/fr/entrainement): réalisation d'exercices à quatre voix (soprano/alto/ténor/basse) avec validation harmonique en temps réel — quintes et octaves parallèles, croisements, résolutions de sensible et de septième, tessitures.
- [Générateur d'exercices SATB](${SITE_URL}/fr/entrainement): génère des exercices de conduite des voix par gabarit, tonalité (24 tonalités majeures et mineures) et doigté de départ.
- [Comparateur de styles](${SITE_URL}/fr/entrainement): compare les signatures harmoniques de compositeurs et styles (Bach, Mozart, Chopin, jazz, rock…).
- [Bibliothèque de progressions](${SITE_URL}/fr/entrainement): progressions harmoniques classées par catégorie (cadences, modulations, cycles, emprunts, jazz), à écouter et analyser.
- [Studio de composition](${SITE_URL}/fr/creation): composition guidée (harmonisation d'une basse ou d'un soprano donnés) et atelier libre à deux portées, gravure et lecture en direct.
- [Squelette harmonique](${SITE_URL}/fr/creation): pose d'une succession d'accords sur 8 mesures depuis une banque groupée par fonction (tonique, prédominante, dominante, chromatisme), réalisée automatiquement à quatre voix, puis exportable vers l'atelier de composition.
- [Relevé harmonique](${SITE_URL}/fr/creation): entraînement à l'oreille par paliers (basse, chiffrages, réalisation SATB complète) sur des progressions d'école, en mode entraînement libre ou en mode examen à écoutes comptées.
- [Analyseur de partitions](${SITE_URL}/fr/analyse): import d'une partition (MusicXML), gravure professionnelle, lecture audio et analyse harmonique automatique — degrés, fonctions, cadences.
- [Dictée harmonique et d'intervalles](${SITE_URL}/fr/entrainement): entraînement à la reconnaissance d'accords et d'intervalles à l'oreille.
- [Page des tonalités](${SITE_URL}/fr/tonalites): référence complète des 24 tonalités (armures, accords diatoniques, triton fonctionnel).
- [Espace conservatoire](${SITE_URL}/fr/conservatoire): gestion de classes pour les enseignants — devoirs, progression par élève, annotations.

## Accès

- Gratuit : cours 1 à ${FREE_COURS.length}, quiz illimités sur ces cours, exercices SATB de niveau 1.
- Abonnement Étudiant : intégralité des ${COURS_COUNT} cours et de leurs exercices.
- Abonnement Pro : Étudiant + assistant IA conversationnel, analyse de partition, comparateur de styles, bibliothèque de progressions.

## Optional

- [Conditions d'utilisation](${SITE_URL}/fr/conditions)
- [Politique de confidentialité](${SITE_URL}/fr/confidentialite)
`;
}

export async function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

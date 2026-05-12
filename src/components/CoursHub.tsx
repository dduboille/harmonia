"use client";

/**
 * CoursHub.tsx
 * Harmonia · Niveau 1 — Page d'accueil des cours
 * i18n : UI chrome traduit via next-intl
 */

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

// ─── Données ──────────────────────────────────────────────────────────────────

const COURS = [
  {
    num: 1,
    title: "La gamme, les degrés et les intervalles",
    desc: "Des origines acoustiques de la gamme aux intervalles et leurs renversements.",
    tags: ["Gamme", "Degrés", "Intervalles"],
    available: true,
  },
  {
    num: 2,
    title: "Les accords",
    desc: "Construire une triade, enrichir en septième, maîtriser les renversements.",
    tags: ["Triades", "Tétrades", "Renversements"],
    available: true,
  },
  {
    num: 3,
    title: "Fonctions tonales et conduites de voix",
    desc: "Le triton comme moteur de tension. Le cycle SD → D → T et le II–V–I.",
    tags: ["Fonctions", "Triton", "Voix"],
    available: true,
  },
  {
    num: 4,
    title: "Cadences et progressions",
    desc: "La ponctuation musicale : cadence parfaite, plagale, rompue, demi-cadence.",
    tags: ["Cadences", "Progressions", "Cycle des quintes"],
    available: true,
  },
  {
    num: 5,
    title: "Emprunts et suites harmoniques classiques",
    desc: "Mode mineur, emprunts à l'homonyme, accord napolitain, basse de chaconne.",
    tags: ["Mineur", "Emprunts", "Napolitain"],
    available: true,
  },
  {
    num: 6,
    title: "Construire une harmonisation",
    desc: "De la mélodie à l'accompagnement : analyser, choisir les accords, réaliser.",
    tags: ["Harmonisation", "Mélodie", "Accompagnement"],
    available: true,
  },
  {
    num: 7,
    title: "La tonicisation",
    desc: "Dominantes secondaires, tons voisins et chaînes de tonicisations.",
    tags: ["Tonicisation", "V/V", "Tons voisins"],
    available: true,
  },
  {
    num: 8,
    title: "Modulation par accord pivot",
    desc: "Changer de tonalité avec fluidité. Le 6/4 de cadence et le V7sus4.",
    tags: ["Modulation", "Accord pivot", "6/4"],
    available: true,
  },
  {
    num: 9,
    title: "Modulation avancée et pédales",
    desc: "Marche harmonique, note commune, minorisation, pédales et accords appogiaturés.",
    tags: ["Marche", "Pédale", "Minorisation"],
    available: true,
  },
  {
    num: 10,
    title: "Les modes de la gamme majeure",
    desc: "Ionien, dorien, phrygien, lydien, mixolydien, éolien, locrien — sept couleurs, une seule gamme.",
    tags: ["Modes", "Modal", "Jazz"],
    available: true,
  },
  {
    num: 11,
    title: "Les extensions d'accords",
    desc: "9e, 11e, 13e — empiler des tierces au-delà de la 7te pour enrichir la couleur harmonique.",
    tags: ["Extensions", "9e", "Jazz"],
    available: true,
  },
  {
    num: 12,
    title: "La substitution tritonique",
    desc: "Remplacer V7 par l'accord situé un triton plus bas — même tension, basse chromatique.",
    tags: ["Triton", "Substitution", "Jazz"],
    available: true,
  },
  {
    num: 13,
    title: "Le contrepoint à 2 voix",
    desc: "Les 5 espèces de Fux — note contre note, doubles croches, liaisons, syncopes et fleuretis.",
    tags: ["Contrepoint", "Espèces", "Fux"],
    available: true,
  },
  {
    num: 14,
    title: "L'harmonisation modale",
    desc: "Colorer chaque mode avec ses accords caractéristiques — dorien, phrygien, lydien, mixolydien, éolien.",
    tags: ["Modal", "Debussy", "Couleur"],
    available: true,
  },
  {
    num: 15,
    title: "Les progressions jazz avancées",
    desc: "II–V–I avancé, extensions, rythme harmonique, turnarounds et jazz blues.",
    tags: ["Jazz", "Bebop", "II-V-I"],
    available: true,
  },
  {
    num: 16,
    title: "La réharmonisation",
    desc: "Substitution diatonique, tritonique, emprunt modal et harmonisation parallèle — transformer les accords sous une mélodie intacte.",
    tags: ["Réharmonisation", "Bill Evans", "Substitution"],
    available: true,
  },
  {
    num: 17,
    title: "La phrase musicale et la forme",
    desc: "Motif, développement en 4 étapes, techniques de répétition, période antécédent-conséquent et grandes formes musicales.",
    tags: ["Phrase", "Forme", "Analyse"],
    available: true,
  },
  {
    num: 18,
    title: "Le développement motivique",
    desc: "Les 5 éléments du motif, le paradoxe de la répétition, et les 4 familles de techniques — de l'harmonie (moins radical) au rythme (plus radical).",
    tags: ["Motif", "Développement", "Beethoven"],
    available: true,
  },
  {
    num: 19,
    title: "Introduction à l'orchestration",
    desc: "Les 4 familles d'instruments, leurs tessitures et rôles — doublures, équilibre, registres et distribution SATB à l'orchestre.",
    tags: ["Orchestre", "Timbres", "Ravel"],
    available: true,
  },
  {
    num: 20,
    title: "Analyse des grands compositeurs classiques",
    desc: "Bach, Mozart, Beethoven, Schubert, Chopin, Liszt, Berlioz, Tchaïkovski, Rachmaninov — les signatures harmoniques qui ont façonné la musique occidentale.",
    tags: ["Analyse", "Compositeurs", "Histoire"],
    available: true,
  },
  {
    num: 21,
    title: "Analyse des compositeurs modernes et contemporains",
    desc: "Debussy, Ravel, Stravinsky, Messiaen, Satie, Beatles, Radiohead, Morricone — de l'impressionnisme au rock, comment le XXe siècle a réinventé l'harmonie.",
    tags: ["Moderne", "Contemporain", "Impressionnisme"],
    available: true,
  },
  {
    num: 22,
    title: "La réharmonisation",
    desc: "Transformer une progression en conservant la mélodie — substitutions diatonique et tritonique, emprunt modal, harmonisation parallèle.",
    tags: ["Réharmonisation", "Substitution", "Jazz"],
    available: true,
  },
  {
    num: 23,
    title: "Composer dans le style des maîtres",
    desc: "Bach, Mozart, Chopin, Debussy, Jazz, Rock — identifier et reproduire les signatures harmoniques des grands compositeurs.",
    tags: ["Style", "Composition", "Analyse"],
    available: true,
  },
];

// ─── Styles ───────────────────────────────────────────────────────────────────

const S = {
  wrap: {
    fontFamily: "var(--font-sans, system-ui)",
    maxWidth: 760,
    margin: "0 auto",
    padding: "0 1rem 4rem",
  } as React.CSSProperties,

  header: {
    padding: "2rem 0 1.5rem",
    borderBottom: "0.5px solid #e5e5e5",
    marginBottom: "2rem",
  } as React.CSSProperties,

  badge: {
    display: "inline-block",
    background: "#E6F1FB",
    color: "#185FA5",
    fontSize: 11,
    fontWeight: 500,
    padding: "2px 10px",
    borderRadius: 20,
    marginBottom: 8,
  } as React.CSSProperties,

  h1: {
    fontSize: 28,
    fontWeight: 500,
    color: "#111",
    margin: "0 0 6px",
  } as React.CSSProperties,

  subtitle: {
    fontSize: 14,
    color: "#666",
    lineHeight: 1.7,
    maxWidth: 520,
  } as React.CSSProperties,

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: 12,
  } as React.CSSProperties,

  sectionLabel: {
    fontSize: 11,
    fontWeight: 600,
    color: "#aaa",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    margin: "2rem 0 .75rem",
  } as React.CSSProperties,
};

// ─── Composant carte ──────────────────────────────────────────────────────────

function CoursCard({ cours, locale, t }: { cours: typeof COURS[0]; locale: string; t: ReturnType<typeof useTranslations> }) {
  const isAvailable = cours.available;

  const card = (
    <div
      style={{
        border: `0.5px solid ${isAvailable ? "#e5e5e5" : "#f0f0f0"}`,
        borderRadius: 12,
        padding: "16px 18px",
        background: isAvailable ? "#fff" : "#fafafa",
        cursor: isAvailable ? "pointer" : "default",
        transition: "all .15s",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        opacity: isAvailable ? 1 : 0.7,
        position: "relative" as const,
      }}
    >
      {/* Numéro + statut */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{
          fontSize: 11,
          fontWeight: 700,
          color: isAvailable ? "#185FA5" : "#bbb",
          background: isAvailable ? "#E6F1FB" : "#f0f0f0",
          padding: "2px 8px",
          borderRadius: 10,
        }}>
          {t("cours.level1")} · {cours.num}
        </span>
        {isAvailable ? (
          <span style={{
            fontSize: 10,
            fontWeight: 500,
            color: "#0F6E56",
            background: "#E1F5EE",
            padding: "2px 8px",
            borderRadius: 10,
          }}>
            {t("coursHub.available")}
          </span>
        ) : (
          <span style={{
            fontSize: 10,
            fontWeight: 500,
            color: "#bbb",
            background: "#f5f5f5",
            padding: "2px 8px",
            borderRadius: 10,
          }}>
            {t("coursHub.comingSoon")}
          </span>
        )}
      </div>

      {/* Titre */}
      <div style={{
        fontSize: 14,
        fontWeight: 500,
        color: isAvailable ? "#111" : "#888",
        lineHeight: 1.4,
      }}>
        {cours.title}
      </div>

      {/* Description */}
      <div style={{
        fontSize: 13,
        color: "#888",
        lineHeight: 1.6,
      }}>
        {cours.desc}
      </div>

      {/* Tags */}
      <div style={{ display: "flex", gap: 5, flexWrap: "wrap" as const }}>
        {cours.tags.map((tag) => (
          <span key={tag} style={{
            fontSize: 10,
            color: isAvailable ? "#555" : "#bbb",
            background: isAvailable ? "#f5f5f5" : "#f8f8f8",
            padding: "2px 8px",
            borderRadius: 6,
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Flèche si disponible */}
      {isAvailable && (
        <div style={{
          fontSize: 12,
          color: "#185FA5",
          fontWeight: 500,
          marginTop: 2,
        }}>
          {t("coursHub.startCours")} →
        </div>
      )}
    </div>
  );

  if (!isAvailable) return card;

  return (
    <Link href={`/${locale}/cours/${cours.num}`} style={{ textDecoration: "none" }}>
      {card}
    </Link>
  );
}

// ─── Composant principal ──────────────────────────────────────────────────────

export default function CoursHub() {
  const params = useParams();
  const locale = (params?.locale as string) ?? "fr";
  const t = useTranslations();

  const available = COURS.filter((c) => c.available);
  const upcoming  = COURS.filter((c) => !c.available);

  return (
    <div style={S.wrap}>
      {/* Header */}
      <div style={S.header}>
        <span style={S.badge}>Harmonia · {t("common.level")} 1</span>
        <h1 style={S.h1}>{t("coursHub.title")}</h1>
        <p style={S.subtitle}>{t("coursHub.subtitle")}</p>
      </div>

      {/* Progression */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        margin: "0 0 2rem",
        padding: "12px 16px",
        background: "#f8f8f8",
        borderRadius: 10,
        border: "0.5px solid #ececec",
      }}>
        <div style={{ fontSize: 13, color: "#555" }}>
          <strong style={{ color: "#111" }}>{available.length}</strong> {t("coursHub.available").toLowerCase()}
          &nbsp;·&nbsp;
          <strong style={{ color: "#aaa" }}>{upcoming.length}</strong> {t("coursHub.comingSoon").toLowerCase()}
        </div>
        <div style={{ flex: 1, height: 4, background: "#e5e5e5", borderRadius: 4, overflow: "hidden" }}>
          <div style={{
            height: "100%",
            width: `${(available.length / COURS.length) * 100}%`,
            background: "#185FA5",
            borderRadius: 4,
            transition: "width .3s",
          }} />
        </div>
        <div style={{ fontSize: 11, color: "#bbb", whiteSpace: "nowrap" as const }}>
          {Math.round((available.length / COURS.length) * 100)}%
        </div>
      </div>

      {/* Cours disponibles */}
      <div style={S.sectionLabel}>{t("coursHub.available")}</div>
      <div style={S.grid}>
        {available.map((c) => (
          <CoursCard key={c.num} cours={c} locale={locale} t={t} />
        ))}
      </div>

      {/* Cours à venir */}
      {upcoming.length > 0 && (
        <>
          <div style={S.sectionLabel}>{t("coursHub.comingSoon")}</div>
          <div style={S.grid}>
            {upcoming.map((c) => (
              <CoursCard key={c.num} cours={c} locale={locale} t={t} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

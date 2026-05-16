"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

// ─── Données ──────────────────────────────────────────────────────────────────

const COURS = [
  { num: 1,  level: 1 as const, title: "La gamme, les degrés et les intervalles",    desc: "Des origines acoustiques de la gamme aux intervalles et leurs renversements.",                                                            tags: ["Gamme", "Degrés", "Intervalles"] },
  { num: 2,  level: 1 as const, title: "Les accords",                                  desc: "Construire une triade, enrichir en septième, maîtriser les renversements.",                                                               tags: ["Triades", "Tétrades", "Renversements"] },
  { num: 3,  level: 1 as const, title: "Fonctions tonales et conduites de voix",       desc: "Le triton comme moteur de tension. Le cycle SD → D → T et le II–V–I.",                                                                   tags: ["Fonctions", "Triton", "Voix"] },
  { num: 4,  level: 1 as const, title: "Cadences et progressions",                     desc: "La ponctuation musicale : cadence parfaite, plagale, rompue, demi-cadence.",                                                             tags: ["Cadences", "Progressions", "Cycle des quintes"] },
  { num: 5,  level: 1 as const, title: "Emprunts et suites harmoniques classiques",    desc: "Mode mineur, emprunts à l'homonyme, accord napolitain, basse de chaconne.",                                                              tags: ["Mineur", "Emprunts", "Napolitain"] },
  { num: 6,  level: 1 as const, title: "Construire une harmonisation",                 desc: "De la mélodie à l'accompagnement : analyser, choisir les accords, réaliser.",                                                            tags: ["Harmonisation", "Mélodie", "Accompagnement"] },
  { num: 7,  level: 1 as const, title: "La tonicisation",                              desc: "Dominantes secondaires, tons voisins et chaînes de tonicisations.",                                                                       tags: ["Tonicisation", "V/V", "Tons voisins"] },
  { num: 8,  level: 1 as const, title: "Modulation par accord pivot",                  desc: "Changer de tonalité avec fluidité. Le 6/4 de cadence et le V7sus4.",                                                                     tags: ["Modulation", "Accord pivot", "6/4"] },
  { num: 9,  level: 1 as const, title: "Modulation avancée et pédales",                desc: "Marche harmonique, note commune, minorisation, pédales et accords appogiaturés.",                                                         tags: ["Marche", "Pédale", "Minorisation"] },
  { num: 10, level: 2 as const, title: "Les modes de la gamme majeure",                desc: "Ionien, dorien, phrygien, lydien, mixolydien, éolien, locrien — sept couleurs, une seule gamme.",                                        tags: ["Modes", "Modal", "Jazz"] },
  { num: 11, level: 2 as const, title: "Les extensions d'accords",                     desc: "9e, 11e, 13e — empiler des tierces au-delà de la 7te pour enrichir la couleur harmonique.",                                              tags: ["Extensions", "9e", "Jazz"] },
  { num: 12, level: 2 as const, title: "La substitution tritonique",                   desc: "Remplacer V7 par l'accord situé un triton plus bas — même tension, basse chromatique.",                                                  tags: ["Triton", "Substitution", "Jazz"] },
  { num: 13, level: 2 as const, title: "Le contrepoint à 2 voix",                      desc: "Les 5 espèces de Fux — note contre note, doubles croches, liaisons, syncopes et fleuretis.",                                             tags: ["Contrepoint", "Espèces", "Fux"] },
  { num: 14, level: 2 as const, title: "L'harmonisation modale",                       desc: "Colorer chaque mode avec ses accords caractéristiques — dorien, phrygien, lydien, mixolydien, éolien.",                                  tags: ["Modal", "Debussy", "Couleur"] },
  { num: 15, level: 2 as const, title: "Les progressions jazz avancées",               desc: "II–V–I avancé, extensions, rythme harmonique, turnarounds et jazz blues.",                                                               tags: ["Jazz", "Bebop", "II-V-I"] },
  { num: 16, level: 2 as const, title: "La réharmonisation",                           desc: "Substitution diatonique, tritonique, emprunt modal et harmonisation parallèle — transformer les accords sous une mélodie intacte.",       tags: ["Réharmonisation", "Bill Evans", "Substitution"] },
  { num: 17, level: 3 as const, title: "La phrase musicale et la forme",               desc: "Motif, développement en 4 étapes, techniques de répétition, période antécédent-conséquent et grandes formes musicales.",                 tags: ["Phrase", "Forme", "Analyse"] },
  { num: 18, level: 3 as const, title: "Le développement motivique",                   desc: "Les 5 éléments du motif, le paradoxe de la répétition, et les 4 familles de techniques — de l'harmonie au rythme.",                     tags: ["Motif", "Développement", "Beethoven"] },
  { num: 19, level: 3 as const, title: "Introduction à l'orchestration",               desc: "Les 4 familles d'instruments, leurs tessitures et rôles — doublures, équilibre, registres et distribution SATB à l'orchestre.",          tags: ["Orchestre", "Timbres", "Ravel"] },
  { num: 20, level: 3 as const, title: "Analyse des grands compositeurs classiques",   desc: "Bach, Mozart, Beethoven, Schubert, Chopin, Liszt, Berlioz, Tchaïkovski, Rachmaninov — les signatures harmoniques.",                      tags: ["Analyse", "Compositeurs", "Histoire"] },
  { num: 21, level: 3 as const, title: "Analyse des compositeurs modernes",            desc: "Debussy, Ravel, Stravinsky, Messiaen, Satie, Beatles, Radiohead, Morricone — de l'impressionnisme au rock.",                             tags: ["Moderne", "Contemporain", "Impressionnisme"] },
  { num: 22, level: 3 as const, title: "La réharmonisation avancée",                   desc: "Transformer une progression en conservant la mélodie — substitutions diatonique et tritonique, emprunt modal, harmonisation parallèle.", tags: ["Réharmonisation", "Substitution", "Jazz"] },
  { num: 23, level: 3 as const, title: "Composer dans le style des maîtres",           desc: "Bach, Mozart, Chopin, Debussy, Jazz, Rock — identifier et reproduire les signatures harmoniques des grands compositeurs.",                tags: ["Style", "Composition", "Analyse"] },
];

// ─── Méta par niveau ─────────────────────────────────────────────────────────

const LEVEL_META = {
  1: { label: "Niveau 1", sublabel: "Fondamentaux",      color: "#185FA5", bg: "#E6F1FB", border: "#C2D9F3", href: "niveau-1" },
  2: { label: "Niveau 2", sublabel: "Approfondissement", color: "#BA7517", bg: "#FAEEDA", border: "#F6AD55", href: "niveau-2" },
  3: { label: "Niveau 3", sublabel: "Maîtrise",          color: "#5C3D6E", bg: "#F0EBF8", border: "#C9B3DD", href: "niveau-3" },
} as const;

// ─── Carte cours ─────────────────────────────────────────────────────────────

function CoursCard({ cours, locale, level }: { cours: typeof COURS[0]; locale: string; level: 1 | 2 | 3 }) {
  const meta = LEVEL_META[level];
  return (
    <Link href={`/${locale}/cours/${cours.num}`} style={{ textDecoration: "none" }}>
      <div style={{
        border: "0.5px solid #e8e3db",
        borderRadius: 12,
        padding: "18px 20px",
        background: "#fff",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        transition: "box-shadow .15s",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{
            fontSize: 11, fontWeight: 700,
            color: meta.color, background: meta.bg,
            border: `0.5px solid ${meta.border}`,
            padding: "2px 9px", borderRadius: 10,
            fontFamily: "system-ui, sans-serif",
          }}>
            {meta.sublabel} · {cours.num}
          </span>
          <span style={{
            fontSize: 10, fontWeight: 500,
            color: "#0F6E56", background: "#E1F5EE",
            padding: "2px 8px", borderRadius: 10,
            fontFamily: "system-ui, sans-serif",
          }}>
            Disponible
          </span>
        </div>

        <div style={{ fontSize: 15, fontWeight: 500, color: "#1a1a1a", lineHeight: 1.4, fontFamily: "Georgia, 'Times New Roman', serif" }}>
          {cours.title}
        </div>

        <div style={{ fontSize: 13, color: "#888", lineHeight: 1.6, fontFamily: "system-ui, sans-serif" }}>
          {cours.desc}
        </div>

        <div style={{ display: "flex", gap: 5, flexWrap: "wrap" as const }}>
          {cours.tags.map(tag => (
            <span key={tag} style={{
              fontSize: 10, color: "#666", background: "#f5f5f5",
              padding: "2px 8px", borderRadius: 6,
              fontFamily: "system-ui, sans-serif",
            }}>
              {tag}
            </span>
          ))}
        </div>

        <div style={{ fontSize: 12, color: meta.color, fontWeight: 500, fontFamily: "system-ui, sans-serif" }}>
          Commencer →
        </div>
      </div>
    </Link>
  );
}

// ─── Composant principal ──────────────────────────────────────────────────────

interface Props {
  level: 1 | 2 | 3;
}

export default function CoursLevel({ level }: Props) {
  const params = useParams();
  const locale = (params?.locale as string) ?? "fr";
  const meta = LEVEL_META[level];
  const cours = COURS.filter(c => c.level === level);

  return (
    <div style={{
      fontFamily: "Georgia, 'Times New Roman', serif",
      background: "#faf8f4",
      minHeight: "100vh",
      padding: "2.5rem 2rem 5rem",
    }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>

        {/* Fil d'Ariane */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "2rem", fontFamily: "system-ui, sans-serif" }}>
          <Link href={`/${locale}/cours`} style={{ fontSize: 12, color: "#888", textDecoration: "none" }}>Cours</Link>
          <span style={{ fontSize: 12, color: "#ccc" }}>›</span>
          <span style={{ fontSize: 12, color: meta.color, fontWeight: 600 }}>{meta.label}</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: "2.5rem", paddingBottom: "2rem", borderBottom: "0.5px solid #e8e3db" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: meta.bg, border: `0.5px solid ${meta.border}`,
            borderRadius: 20, padding: "4px 14px",
            fontSize: 12, fontWeight: 600, color: meta.color,
            fontFamily: "system-ui, sans-serif", marginBottom: 16, letterSpacing: "0.04em",
          }}>
            <span>✦</span>
            {meta.label} · {meta.sublabel}
          </div>
          <h1 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 400, margin: "0 0 10px", letterSpacing: "-0.02em", color: "#1a1a1a" }}>
            {level === 1 && "Fondamentaux de l'harmonie tonale"}
            {level === 2 && "Jazz, modes et techniques avancées"}
            {level === 3 && "Composition, analyse et maîtrise"}
          </h1>
          <p style={{ fontSize: 15, color: "#666", lineHeight: 1.7, margin: 0, fontFamily: "system-ui, sans-serif" }}>
            {level === 1 && "9 cours pour bâtir une fondation solide — des origines de la gamme aux modulations. La base indispensable de toute l'harmonie."}
            {level === 2 && "7 cours pour élargir le langage harmonique — modes, extensions, jazz, contrepoint. Sortir du cadre classique et explorer de nouvelles couleurs."}
            {level === 3 && "7 cours pour atteindre la maîtrise — forme musicale, orchestration, analyse des grands compositeurs et composition dans leurs styles."}
          </p>
        </div>

        {/* Grille cours */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: 12,
        }}>
          {cours.map(c => (
            <CoursCard key={c.num} cours={c} locale={locale} level={level} />
          ))}
        </div>

        {/* Retour */}
        <div style={{ marginTop: "3rem", textAlign: "center" as const }}>
          <Link href={`/${locale}/cours`} style={{
            fontSize: 13, color: "#888", textDecoration: "none",
            fontFamily: "system-ui, sans-serif",
          }}>
            ← Tous les niveaux
          </Link>
        </div>
      </div>
    </div>
  );
}

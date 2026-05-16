"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

const LEVELS = [
  {
    num: 1 as const,
    label: "Niveau 1",
    sublabel: "Fondamentaux",
    color: "#185FA5",
    bg: "#E6F1FB",
    border: "#C2D9F3",
    coursRange: "Cours 1 à 9",
    count: 9,
    desc: "Des origines acoustiques de la gamme aux modulations avancées. La fondation complète de l'harmonie tonale : accords, cadences, conduites de voix, tonicisations.",
    topics: ["Gamme & intervalles", "Accords & renversements", "Cadences", "Modulations"],
    href: "niveau-1",
  },
  {
    num: 2 as const,
    label: "Niveau 2",
    sublabel: "Approfondissement",
    color: "#BA7517",
    bg: "#FAEEDA",
    border: "#F6AD55",
    coursRange: "Cours 10 à 16",
    count: 7,
    desc: "Les modes de l'Église, les extensions jazz, la substitution tritonique, le contrepoint à deux voix et la réharmonisation. Élargir le langage harmonique au-delà du tonal classique.",
    topics: ["Modes", "Extensions 9e–13e", "Contrepoint", "Jazz avancé"],
    href: "niveau-2",
  },
  {
    num: 3 as const,
    label: "Niveau 3",
    sublabel: "Maîtrise",
    color: "#5C3D6E",
    bg: "#F0EBF8",
    border: "#C9B3DD",
    coursRange: "Cours 17 à 23",
    count: 7,
    desc: "La phrase musicale, le développement motivique, l'orchestration, l'analyse des grands compositeurs et la composition dans les styles — Bach, Debussy, Jazz, Rock.",
    topics: ["Forme musicale", "Orchestration", "Analyse", "Composition"],
    href: "niveau-3",
  },
];

export default function CoursHubPage() {
  const params = useParams();
  const locale = (params?.locale as string) ?? "fr";

  return (
    <div style={{
      fontFamily: "Georgia, 'Times New Roman', serif",
      background: "#faf8f4",
      minHeight: "100vh",
      padding: "3rem 2rem 5rem",
    }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <div style={{
            fontSize: 11, fontWeight: 600, letterSpacing: "0.15em",
            color: "#BA7517", textTransform: "uppercase" as const,
            fontFamily: "system-ui, sans-serif", marginBottom: 14,
          }}>
            Harmonia · Cours
          </div>
          <h1 style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 400, margin: "0 0 14px",
            letterSpacing: "-0.02em", color: "#1a1a1a",
          }}>
            Choisissez votre niveau
          </h1>
          <p style={{
            fontSize: 16, color: "#666", lineHeight: 1.7, margin: 0,
            fontFamily: "system-ui, sans-serif", maxWidth: 540,
          }}>
            23 cours organisés en 3 niveaux progressifs — des fondamentaux de l&apos;harmonie jusqu&apos;à la composition dans le style des maîtres.
          </p>
        </div>

        {/* Cartes de niveau */}
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 14 }}>
          {LEVELS.map(lvl => (
            <Link key={lvl.num} href={`/${locale}/cours/${lvl.href}`} style={{ textDecoration: "none" }}>
              <div style={{
                background: "#fff",
                border: "0.5px solid #e8e3db",
                borderRadius: 16,
                padding: "26px 30px",
                display: "flex",
                alignItems: "center",
                gap: 26,
                cursor: "pointer",
              }}>
                {/* Badge numéro */}
                <div style={{
                  width: 72, height: 72,
                  borderRadius: 16,
                  background: lvl.bg,
                  border: `0.5px solid ${lvl.border}`,
                  display: "flex",
                  flexDirection: "column" as const,
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: lvl.color, fontFamily: "system-ui", letterSpacing: "0.06em" }}>NVL.</span>
                  <span style={{ fontSize: 30, fontWeight: 400, color: lvl.color, lineHeight: 1 }}>{lvl.num}</span>
                </div>

                {/* Contenu */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" as const }}>
                    <span style={{ fontSize: 17, fontWeight: 500, color: "#1a1a1a" }}>{lvl.label}</span>
                    <span style={{
                      fontSize: 11, fontWeight: 600,
                      color: lvl.color, background: lvl.bg,
                      border: `0.5px solid ${lvl.border}`,
                      padding: "2px 9px", borderRadius: 10,
                      fontFamily: "system-ui",
                    }}>
                      {lvl.sublabel}
                    </span>
                    <span style={{ fontSize: 11, color: "#bbb", fontFamily: "system-ui" }}>
                      {lvl.coursRange} · {lvl.count} cours
                    </span>
                  </div>
                  <p style={{
                    fontSize: 13, color: "#666", lineHeight: 1.65,
                    margin: "0 0 12px", fontFamily: "system-ui, sans-serif",
                  }}>
                    {lvl.desc}
                  </p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const }}>
                    {lvl.topics.map(t => (
                      <span key={t} style={{
                        fontSize: 11, color: "#888", background: "#f5f5f5",
                        padding: "2px 8px", borderRadius: 6,
                        fontFamily: "system-ui",
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Flèche */}
                <div style={{ fontSize: 20, color: lvl.color, flexShrink: 0, fontFamily: "system-ui" }}>→</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Note bas de page */}
        <p style={{
          marginTop: "2.5rem", fontSize: 12, color: "#bbb",
          textAlign: "center" as const, fontFamily: "system-ui, sans-serif",
        }}>
          Gratuit pour commencer · Cours 1 à 3 accessibles sans abonnement
        </p>
      </div>
    </div>
  );
}

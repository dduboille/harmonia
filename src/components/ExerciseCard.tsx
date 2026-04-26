"use client";

/**
 * ExerciseCard.tsx
 * Harmonia — Carte d'exercice pour les listings (cours/[id]/exercices et atelier)
 */

import React from "react";
import Link from "next/link";
import type { SATBExercise } from "@/types/exercise";
import { DIFFICULTY_LABEL, DIFFICULTY_COLOR, DIFFICULTY_BG } from "@/types/exercise";

interface ExerciseCardProps {
  exercise: SATBExercise;
  locale: string;
  /** Si true, affiche aussi le cours d'appartenance */
  showCours?: boolean;
}

const TYPE_ICON: Record<string, string> = {
  satb:      "𝄢",
  identify:  "🔍",
  harmonize: "🎼",
  analysis:  "📊",
};

const TYPE_LABEL: Record<string, string> = {
  satb:      "Réalisation SATB",
  identify:  "Identification",
  build:     "Construction",
  harmonize: "Harmonisation",
  analysis:  "Analyse",
};

const TYPE_COLOR: Record<string, string> = {
  satb:      "#185FA5",
  identify:  "#534AB7",
  build:     "#0F6E56",
  harmonize: "#BA7517",
  analysis:  "#555",
};

export default function ExerciseCard({ exercise: ex, locale, showCours = false }: ExerciseCardProps) {
  const href = `/${locale}/cours/${ex.cours}/exercices/${ex.id}`;

  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <div style={{
        background: "#fff",
        border: "0.5px solid #e8e3db",
        borderRadius: 12,
        padding: "16px 18px",
        cursor: "pointer",
        transition: "all .15s",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLDivElement).style.borderColor = "#185FA5";
          (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 16px rgba(24,95,165,0.08)";
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(-1px)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLDivElement).style.borderColor = "#e8e3db";
          (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {/* Type */}
            <span style={{
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.06em",
              color: TYPE_COLOR[ex.type] ?? "#185FA5",
              background: "#f0f0f0",
              padding: "2px 8px",
              borderRadius: 8,
            }}>
              {TYPE_LABEL[ex.type] ?? ex.type}
            </span>
            {/* Cours */}
            {showCours && (
              <span style={{
                fontSize: 10,
                color: "#aaa",
                background: "#f5f5f5",
                padding: "2px 8px",
                borderRadius: 8,
              }}>
                Cours {ex.cours}
              </span>
            )}
          </div>
          {/* Difficulté */}
          <span style={{
            fontSize: 10,
            fontWeight: 600,
            color: DIFFICULTY_COLOR[ex.difficulty],
            background: DIFFICULTY_BG[ex.difficulty],
            padding: "2px 8px",
            borderRadius: 8,
          }}>
            {DIFFICULTY_LABEL[ex.difficulty]}
          </span>
        </div>

        {/* Titre */}
        <div>
          <div style={{ fontSize: 15, fontWeight: 500, color: "#1a1a1a", lineHeight: 1.3, marginBottom: 3 }}>
            {ex.title}
          </div>
          {ex.subtitle && (
            <div style={{ fontSize: 12, color: "#888", lineHeight: 1.5 }}>
              {ex.subtitle}
            </div>
          )}
        </div>

        {/* Mesures preview */}
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap" as const }}>
          {ex.measures.map((m, i) => (
            <span key={i} style={{
              fontSize: 11,
              fontFamily: "monospace",
              color: "#BA7517",
              background: "#FAEEDA",
              padding: "2px 8px",
              borderRadius: 6,
            }}>
              {m}
            </span>
          ))}
        </div>

        {/* Tags concepts */}
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap" as const }}>
          {ex.concepts.slice(0, 3).map(c => (
            <span key={c} style={{
              fontSize: 10,
              color: "#666",
              background: "#f5f5f5",
              padding: "2px 8px",
              borderRadius: 6,
            }}>
              {c}
            </span>
          ))}
          {ex.concepts.length > 3 && (
            <span style={{ fontSize: 10, color: "#bbb" }}>+{ex.concepts.length - 3}</span>
          )}
        </div>

        {/* Arrow */}
        <div style={{ fontSize: 12, color: "#185FA5", fontWeight: 500, marginTop: 2 }}>
          Commencer →
        </div>
      </div>
    </Link>
  );
}

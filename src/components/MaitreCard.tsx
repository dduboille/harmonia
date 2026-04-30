"use client";

/**
 * src/components/MaitreCard.tsx
 * Harmonia — Encadré "Pause Culture" : anecdote de maître
 * Insérer en début de cours pour contextualiser le concept
 */

import React, { useState } from "react";

interface MaitreCardProps {
  composer: string;       // Ex: "Brahms"
  period: string;         // Ex: "1833–1897"
  emoji: string;          // Ex: "🖊️"
  concept: string;        // Ex: "Conduite de voix"
  anecdote: string;       // Texte complet de l'anecdote
  lesson: string;         // L'essentiel à retenir
  accentColor?: string;   // Couleur d'accent (défaut: #BA7517)
}

export default function MaitreCard({
  composer,
  period,
  emoji,
  concept,
  anecdote,
  lesson,
  accentColor = "#BA7517",
}: MaitreCardProps) {
  const [expanded, setExpanded] = useState(false);

  // Couleur de fond dérivée de la couleur d'accent
  const bg = accentColor === "#BA7517" ? "#FAEEDA"
    : accentColor === "#185FA5" ? "#E6F1FB"
    : accentColor === "#0F6E56" ? "#E1F5EE"
    : accentColor === "#534AB7" ? "#EEEDFE"
    : accentColor === "#993C1D" ? "#FAECE7"
    : "#f4f1ec";

  return (
    <div style={{
      border: `0.5px solid ${accentColor}40`,
      borderLeft: `3px solid ${accentColor}`,
      borderRadius: "0 10px 10px 0",
      background: bg,
      padding: "16px 20px",
      marginBottom: "1.5rem",
    }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
        <span style={{ fontSize: 24 }}>{emoji}</span>
        <div>
          <div style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.1em",
            color: accentColor,
            textTransform: "uppercase" as const,
            marginBottom: 2,
          }}>
            Pause Culture · {concept}
          </div>
          <div style={{ fontSize: 15, fontWeight: 500, color: "#1a1a1a" }}>
            {composer} <span style={{ fontSize: 12, color: "#aaa", fontWeight: 400 }}>({period})</span>
          </div>
        </div>
      </div>

      {/* Anecdote — tronquée ou complète */}
      <p style={{
        fontSize: 13,
        color: "#555",
        lineHeight: 1.75,
        margin: "0 0 10px",
        fontStyle: "italic",
      }}>
        {expanded ? anecdote : `${anecdote.slice(0, 180)}${anecdote.length > 180 ? "…" : ""}`}
      </p>

      {anecdote.length > 180 && (
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            fontSize: 12,
            color: accentColor,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            marginBottom: 12,
            textDecoration: "underline",
          }}
        >
          {expanded ? "Voir moins" : "Lire la suite"}
        </button>
      )}

      {/* L'essentiel */}
      <div style={{
        borderTop: `0.5px solid ${accentColor}30`,
        paddingTop: 10,
        marginTop: 4,
        display: "flex",
        gap: 8,
        alignItems: "flex-start",
      }}>
        <span style={{ fontSize: 14, flexShrink: 0, marginTop: 1 }}>💡</span>
        <p style={{
          fontSize: 13,
          color: "#333",
          margin: 0,
          lineHeight: 1.6,
          fontWeight: 400,
        }}>
          <strong style={{ color: accentColor }}>À retenir : </strong>
          {lesson}
        </p>
      </div>
    </div>
  );
}

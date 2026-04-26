/**
 * src/app/[locale]/atelier/page.tsx
 * Harmonia — Catalogue global des exercices (L'Atelier)
 */

"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import ExerciseCard from "@/components/ExerciseCard";
import { ALL_EXERCISES } from "@/exercise.ts/all-exercises";
import { DIFFICULTY_LABEL, DIFFICULTY_COLOR, DIFFICULTY_BG } from "@/types/exercise";
import type { Difficulty } from "@/types/exercise";

const COURS_LABELS: Record<number, string> = {
  1: "Cours 1 — Gamme & intervalles",
  2: "Cours 2 — Accords",
  3: "Cours 3 — Fonctions tonales",
  4: "Cours 4 — Cadences",
  5: "Cours 5 — Emprunts",
  6: "Cours 6 — Harmonisation",
  7: "Cours 7 — Tonicisation",
  8: "Cours 8 — Modulation",
  9: "Cours 9 — Modulations avancées",
};

const TYPE_LABELS: Record<string, string> = {
  satb:      "Réalisation SATB",
  identify:  "Identification",
  harmonize: "Harmonisation",
  analysis:  "Analyse",
};

export default function AtelierPage() {
  const params = useParams();
  const locale = (params?.locale as string) ?? "fr";

  const [filterCours,      setFilterCours]      = useState<number | null>(null);
  const [filterDifficulty, setFilterDifficulty] = useState<Difficulty | null>(null);
  const [filterType,       setFilterType]       = useState<string | null>(null);
  const [search,           setSearch]           = useState("");

  const filtered = useMemo(() => {
    return ALL_EXERCISES.filter(ex => {
      if (filterCours      && ex.cours      !== filterCours)      return false;
      if (filterDifficulty && ex.difficulty !== filterDifficulty) return false;
      if (filterType       && ex.type       !== filterType)       return false;
      if (search) {
        const q = search.toLowerCase();
        return ex.title.toLowerCase().includes(q)
          || ex.tags.some(t => t.toLowerCase().includes(q))
          || ex.concepts.some(c => c.toLowerCase().includes(q));
      }
      return true;
    });
  }, [filterCours, filterDifficulty, filterType, search]);

  const availableCours   = [...new Set(ALL_EXERCISES.map(e => e.cours))].sort();
  const availableTypes   = [...new Set(ALL_EXERCISES.map(e => e.type))];

  return (
    <main style={{ minHeight: "100vh", background: "#f4f1ec", padding: "3rem 1rem" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div style={{
            fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
            color: "#BA7517", textTransform: "uppercase" as const, marginBottom: 6,
          }}>
            Harmonia · L'Atelier
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 500, color: "#1a1a1a", margin: "0 0 8px" }}>
            Tous les exercices
          </h1>
          <p style={{ fontSize: 14, color: "#888", lineHeight: 1.7, maxWidth: 540, margin: 0 }}>
            {ALL_EXERCISES.length} exercices de conduite de voix SATB — filtre par cours, difficulté ou concept.
            Chaque exercice génère un feedback harmonique en temps réel.
          </p>
        </div>

        {/* Filtres */}
        <div style={{
          background: "#fff",
          border: "0.5px solid #e8e3db",
          borderRadius: 12,
          padding: "16px 20px",
          marginBottom: "2rem",
        }}>
          {/* Recherche */}
          <div style={{ marginBottom: 14 }}>
            <input
              type="text"
              placeholder="Rechercher un exercice, un concept, une tonalité…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                width: "100%",
                padding: "9px 14px",
                border: "0.5px solid #e0dbd3",
                borderRadius: 8,
                fontSize: 13,
                color: "#333",
                background: "#fafaf8",
                outline: "none",
                boxSizing: "border-box" as const,
              }}
            />
          </div>

          {/* Cours */}
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 10, color: "#aaa", letterSpacing: "0.06em", marginBottom: 6 }}>COURS</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const }}>
              <button onClick={() => setFilterCours(null)}
                style={pillStyle(filterCours === null, "#185FA5")}>
                Tous
              </button>
              {availableCours.map(c => (
                <button key={c} onClick={() => setFilterCours(filterCours === c ? null : c)}
                  style={pillStyle(filterCours === c, "#185FA5")}>
                  Cours {c}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulté */}
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 10, color: "#aaa", letterSpacing: "0.06em", marginBottom: 6 }}>DIFFICULTÉ</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const }}>
              <button onClick={() => setFilterDifficulty(null)}
                style={pillStyle(filterDifficulty === null, "#555")}>
                Toutes
              </button>
              {([1, 2, 3] as Difficulty[]).map(d => (
                <button key={d} onClick={() => setFilterDifficulty(filterDifficulty === d ? null : d)}
                  style={pillStyle(filterDifficulty === d, DIFFICULTY_COLOR[d])}>
                  {DIFFICULTY_LABEL[d]}
                </button>
              ))}
            </div>
          </div>

          {/* Type */}
          <div>
            <div style={{ fontSize: 10, color: "#aaa", letterSpacing: "0.06em", marginBottom: 6 }}>TYPE</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const }}>
              <button onClick={() => setFilterType(null)}
                style={pillStyle(filterType === null, "#555")}>
                Tous
              </button>
              {availableTypes.map(t => (
                <button key={t} onClick={() => setFilterType(filterType === t ? null : t)}
                  style={pillStyle(filterType === t, "#185FA5")}>
                  {TYPE_LABELS[t] ?? t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Résultats */}
        <div style={{ marginBottom: 12, fontSize: 12, color: "#aaa" }}>
          {filtered.length} exercice{filtered.length > 1 ? "s" : ""}
          {search && ` pour "${search}"`}
        </div>

        {filtered.length === 0 ? (
          <div style={{
            background: "#fff",
            border: "0.5px solid #e8e3db",
            borderRadius: 12,
            padding: "3rem",
            textAlign: "center" as const,
            color: "#bbb",
            fontSize: 14,
          }}>
            Aucun exercice ne correspond à ces filtres.
          </div>
        ) : (
          // Grouper par cours si pas de filtre cours actif
          filterCours !== null ? (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 12,
            }}>
              {filtered.map(ex => (
                <ExerciseCard key={ex.id} exercise={ex} locale={locale} showCours={false} />
              ))}
            </div>
          ) : (
            availableCours
              .filter(c => filtered.some(e => e.cours === c))
              .map(coursId => {
                const group = filtered.filter(e => e.cours === coursId);
                return (
                  <div key={coursId} style={{ marginBottom: "2.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                      <div style={{ fontSize: 12, fontWeight: 600, color: "#555" }}>
                        {COURS_LABELS[coursId]}
                      </div>
                      <Link href={`/${locale}/cours/${coursId}/exercices`} style={{
                        fontSize: 11, color: "#185FA5", textDecoration: "none",
                      }}>
                        Voir tous →
                      </Link>
                    </div>
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                      gap: 12,
                    }}>
                      {group.map(ex => (
                        <ExerciseCard key={ex.id} exercise={ex} locale={locale} showCours={false} />
                      ))}
                    </div>
                  </div>
                );
              })
          )
        )}
      </div>
    </main>
  );
}

function pillStyle(active: boolean, color: string): React.CSSProperties {
  return {
    padding: "5px 12px",
    borderRadius: 20,
    border: `0.5px solid ${active ? color : "#e0dbd3"}`,
    background: active ? color : "#fff",
    color: active ? "#fff" : "#666",
    fontSize: 11,
    fontWeight: active ? 600 : 400,
    cursor: "pointer",
    transition: "all .15s",
  };
}

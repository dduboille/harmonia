/**
 * src/app/[locale]/cours/[id]/exercices/[exerciceId]/page.tsx
 * Harmonia — Page d'un exercice individuel
 */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import HarmoniaEditor from "@/components/HarmoniaEditor";
import { ALL_EXERCISES } from "@/exercises/all-exercises";
import { DIFFICULTY_LABEL, DIFFICULTY_COLOR, DIFFICULTY_BG } from "@/types/exercise";
import type { Measure } from "@/components/HarmoniaEditor";

interface Props {
  params: { locale: string; id: string; exerciceId: string };
}

export default function ExercicePage({ params }: Props) {
  const { locale, id, exerciceId } = params;
  const exercise = ALL_EXERCISES.find(e => e.id === exerciceId && e.cours === parseInt(id));

  const [completed, setCompleted] = useState(false);

  if (!exercise) return notFound();

  const allExercises = ALL_EXERCISES.filter(e => e.cours === exercise.cours);
  const currentIdx   = allExercises.findIndex(e => e.id === exerciceId);
  const nextEx       = allExercises[currentIdx + 1];
  const prevEx       = allExercises[currentIdx - 1];

  return (
    <main style={{ minHeight: "100vh", background: "#f4f1ec", padding: "2.5rem 1rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>

        {/* Breadcrumb */}
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: "1.5rem", fontSize: 12, color: "#aaa", flexWrap: "wrap" as const }}>
          <Link href={`/${locale}/cours`} style={{ color: "#aaa", textDecoration: "none" }}>← Cours</Link>
          <span>·</span>
          <Link href={`/${locale}/cours/${id}`} style={{ color: "#aaa", textDecoration: "none" }}>Cours {id}</Link>
          <span>·</span>
          <Link href={`/${locale}/cours/${id}/exercices`} style={{ color: "#aaa", textDecoration: "none" }}>Exercices</Link>
          <span>·</span>
          <span style={{ color: "#666" }}>{exercise.title}</span>
        </div>

        {/* Métadonnées */}
        <div style={{ marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" as const }}>
          <span style={{
            fontSize: 10, fontWeight: 600, letterSpacing: "0.06em",
            color: DIFFICULTY_COLOR[exercise.difficulty],
            background: DIFFICULTY_BG[exercise.difficulty],
            padding: "3px 10px", borderRadius: 10,
          }}>
            {DIFFICULTY_LABEL[exercise.difficulty]}
          </span>
          {exercise.tags.slice(0, 3).map(t => (
            <span key={t} style={{ fontSize: 10, color: "#666", background: "#f0ece6", padding: "3px 10px", borderRadius: 10 }}>
              {t}
            </span>
          ))}
          <span style={{ fontSize: 11, color: "#bbb", marginLeft: "auto" }}>
            {currentIdx + 1} / {allExercises.length}
          </span>
        </div>

        {/* Hint — affiché avant l'exercice */}
        {exercise.hint && (
          <div style={{
            background: "#FAEEDA",
            border: "0.5px solid #F6AD55",
            borderRadius: 10,
            padding: "10px 16px",
            marginBottom: "1.5rem",
            fontSize: 13,
            color: "#744210",
            lineHeight: 1.65,
          }}>
            <span style={{ fontWeight: 600 }}>Indice : </span>{exercise.hint}
          </div>
        )}

        {/* Éditeur SATB */}
        <div style={{ marginBottom: "1.5rem" }}>
          <HarmoniaEditor
            title={exercise.title}
            subtitle={exercise.subtitle}
            measures={exercise.measures}
            keySignature={exercise.keySignature}
            solution={exercise.solution}
            onComplete={(measures: Measure[]) => setCompleted(true)}
          />
        </div>

        {/* Explication — affichée après complétion */}
        {completed && exercise.explanation && (
          <div style={{
            background: "#F0FFF4",
            border: "1px solid #9AE6B4",
            borderRadius: 12,
            padding: "16px 20px",
            marginBottom: "1.5rem",
            fontSize: 14,
            color: "#276749",
            lineHeight: 1.7,
          }}>
            <div style={{ fontWeight: 600, marginBottom: 6 }}>📖 Explication</div>
            {exercise.explanation}
          </div>
        )}

        {/* Concepts mis en jeu */}
        <div style={{
          background: "#fff",
          border: "0.5px solid #e8e3db",
          borderRadius: 12,
          padding: "16px 20px",
          marginBottom: "1.5rem",
        }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#aaa", marginBottom: 10 }}>
            CONCEPTS MIS EN JEU
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const }}>
            {exercise.concepts.map(c => (
              <span key={c} style={{
                fontSize: 12,
                color: "#185FA5",
                background: "#E6F1FB",
                padding: "4px 12px",
                borderRadius: 8,
              }}>
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation entre exercices */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          {prevEx ? (
            <Link href={`/${locale}/cours/${id}/exercices/${prevEx.id}`} style={{
              padding: "9px 18px", borderRadius: 10,
              border: "0.5px solid #e0dbd3",
              background: "#fff", color: "#555",
              fontSize: 13, textDecoration: "none",
              display: "flex", alignItems: "center", gap: 6,
            }}>
              ← {prevEx.title}
            </Link>
          ) : <div />}

          <Link href={`/${locale}/cours/${id}/exercices`} style={{
            fontSize: 12, color: "#aaa", textDecoration: "none",
          }}>
            Tous les exercices
          </Link>

          {nextEx ? (
            <Link href={`/${locale}/cours/${id}/exercices/${nextEx.id}`} style={{
              padding: "9px 18px", borderRadius: 10,
              border: "0.5px solid #185FA5",
              background: "#185FA5", color: "#fff",
              fontSize: 13, textDecoration: "none",
              display: "flex", alignItems: "center", gap: 6,
            }}>
              {nextEx.title} →
            </Link>
          ) : (
            <Link href={`/${locale}/cours/${id}/exercices`} style={{
              padding: "9px 18px", borderRadius: 10,
              border: "0.5px solid #0F6E56",
              background: "#E1F5EE", color: "#0F6E56",
              fontSize: 13, textDecoration: "none",
            }}>
              ✓ Tous les exercices du cours
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { COURS, FREE_COURS } from "@/lib/catalogue";


// ─── Méta par niveau ─────────────────────────────────────────────────────────
// `univ` = clé i18n de la correspondance universitaire, affichée discrètement à
// côté du libellé de niveau (N1 ≈ L1, N2 ≈ L2, N3 ≈ L3, N4 ≈ L3/M1, N5 ≈ M1).

const LEVEL_META = {
  1: { label: "Niveau 1", sublabel: "Fondamentaux",      color: "#185FA5", bg: "#E6F1FB", border: "#C2D9F3", href: "niveau-1", univ: "univ1" }, // ≈ Licence 1
  2: { label: "Niveau 2", sublabel: "Approfondissement", color: "#BA7517", bg: "#FAEEDA", border: "#F6AD55", href: "niveau-2", univ: "univ2" }, // ≈ Licence 2
  3: { label: "Niveau 3", sublabel: "Maîtrise",          color: "#5C3D6E", bg: "#F0EBF8", border: "#C9B3DD", href: "niveau-3", univ: "univ3" }, // ≈ Licence 3
  4: { label: "Niveau 4", sublabel: "Harmonie élargie",  color: "#2D6B7A", bg: "#E3F3F7", border: "#A8D8E2", href: "niveau-4", univ: "univ4" }, // ≈ Licence 3 / Master 1
  5: { label: "Niveau 5", sublabel: "Parcours spécialisé", color: "#4A2C6E", bg: "#F0ECE4", border: "#C9B8E0", href: "niveau-5", univ: "univ5" }, // ≈ Master 1
} as const;

// ─── Carte cours ─────────────────────────────────────────────────────────────

type TFunc = ReturnType<typeof useTranslations<"coursHub">>;

function CoursCard({ cours, locale, level, t, locked }: { cours: typeof COURS[0]; locale: string; level: 1 | 2 | 3 | 4 | 5; t: TFunc; locked: boolean }) {
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
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{
              fontSize: 11, fontWeight: 700,
              color: meta.color, background: meta.bg,
              border: `0.5px solid ${meta.border}`,
              padding: "2px 9px", borderRadius: 10,
              fontFamily: "system-ui, sans-serif",
            }}>
              {meta.sublabel} · {cours.num}
            </span>
            <span style={{ fontSize: 10, color: "#aaa", fontFamily: "system-ui, sans-serif", whiteSpace: "nowrap" as const }}>
              {t(meta.univ as Parameters<TFunc>[0])}
            </span>
          </div>
          {locked ? (
            <span style={{
              fontSize: 10, fontWeight: 600,
              color: "#8a5a10", background: "#FAEEDA",
              padding: "2px 8px", borderRadius: 10,
              fontFamily: "system-ui, sans-serif",
            }}>
              🔒 {t("locked")}
            </span>
          ) : (
            <span style={{
              fontSize: 10, fontWeight: 500,
              color: "#0F6E56", background: "#E1F5EE",
              padding: "2px 8px", borderRadius: 10,
              fontFamily: "system-ui, sans-serif",
            }}>
              {t("available")}
            </span>
          )}
        </div>

        <div style={{ fontSize: 15, fontWeight: 500, color: "#1a1a1a", lineHeight: 1.4, fontFamily: "Georgia, 'Times New Roman', serif" }}>
          {t(`c${cours.num}` as Parameters<TFunc>[0])}
        </div>

        <div style={{ fontSize: 13, color: "#888", lineHeight: 1.6, fontFamily: "system-ui, sans-serif" }}>
          {t(`d${cours.num}` as Parameters<TFunc>[0])}
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
          {t("startArrow")}
        </div>
      </div>
    </Link>
  );
}

// ─── Composant principal ──────────────────────────────────────────────────────

interface Props {
  level: 1 | 2 | 3 | 4 | 5;
  /** Plan de l'utilisateur, résolu côté serveur. Absent = visiteur non connecté. */
  plan?: "free" | "pro" | "annual";
}

export default function CoursLevel({ level, plan = "free" }: Props) {
  const params = useParams();
  const locale = (params?.locale as string) ?? "fr";
  const t = useTranslations("coursHub");
  const meta = LEVEL_META[level];
  const cours = COURS.filter(c => c.level === level);
  const isLocked = (num: number) => plan === "free" && !FREE_COURS.includes(num);

  const sublabel = t(`sublabel${level}` as Parameters<TFunc>[0]);
  const levelTitle = t(`level${level}Title` as Parameters<TFunc>[0]);
  const levelDesc = t(`level${level}Desc` as Parameters<TFunc>[0]);

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
          <Link href={`/${locale}/cours`} style={{ fontSize: 12, color: "#888", textDecoration: "none" }}>{t("breadcrumb")}</Link>
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
            {meta.label} · {sublabel}
            <span style={{ fontWeight: 500, opacity: 0.7, marginLeft: 2 }}>· {t(meta.univ as Parameters<TFunc>[0])}</span>
          </div>
          <h1 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 400, margin: "0 0 10px", letterSpacing: "-0.02em", color: "#1a1a1a" }}>
            {levelTitle}
          </h1>
          <p style={{ fontSize: 15, color: "#666", lineHeight: 1.7, margin: 0, fontFamily: "system-ui, sans-serif" }}>
            {levelDesc}
          </p>
        </div>

        {/* Grille cours */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: 12,
        }}>
          {cours.map(c => (
            <CoursCard key={c.num} cours={c} locale={locale} level={level} t={t} locked={isLocked(c.num)} />
          ))}
        </div>

        {/* Retour */}
        <div style={{ marginTop: "3rem", textAlign: "center" as const }}>
          <Link href={`/${locale}/cours`} style={{
            fontSize: 13, color: "#888", textDecoration: "none",
            fontFamily: "system-ui, sans-serif",
          }}>
            {t("backAll")}
          </Link>
        </div>
      </div>
    </div>
  );
}

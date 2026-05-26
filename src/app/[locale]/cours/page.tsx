"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

const LEVELS = [
  { num: 1 as const, color: "#185FA5", bg: "#E6F1FB", border: "#C2D9F3", count: 9, href: "niveau-1" },
  { num: 2 as const, color: "#BA7517", bg: "#FAEEDA", border: "#F6AD55", count: 7, href: "niveau-2" },
  { num: 3 as const, color: "#5C3D6E", bg: "#F0EBF8", border: "#C9B3DD", count: 13, href: "niveau-3" },
  { num: 4 as const, color: "#2D6B7A", bg: "#E3F3F7", border: "#A8D8E2", count: 3, href: "niveau-4" },
  { num: 5 as const, color: "#4A2C6E", bg: "#F0ECE4", border: "#C9B8E0", count: 5, href: "niveau-5" },
];

export default function CoursHubPage() {
  const params = useParams();
  const locale = (params?.locale as string) ?? "fr";
  const t = useTranslations("hub");

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
            {t("chooseLevel")}
          </h1>
          <p style={{
            fontSize: 16, color: "#666", lineHeight: 1.7, margin: 0,
            fontFamily: "system-ui, sans-serif", maxWidth: 540,
          }}>
            {t("subtitle")}
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
                    <span style={{ fontSize: 17, fontWeight: 500, color: "#1a1a1a" }}>{t(`level${lvl.num}`)}</span>
                    <span style={{
                      fontSize: 11, fontWeight: 600,
                      color: lvl.color, background: lvl.bg,
                      border: `0.5px solid ${lvl.border}`,
                      padding: "2px 9px", borderRadius: 10,
                      fontFamily: "system-ui",
                    }}>
                      {t(`level${lvl.num}sub`)}
                    </span>
                    <span style={{ fontSize: 11, color: "#bbb", fontFamily: "system-ui" }}>
                      {t(`level${lvl.num}range`)} · {lvl.count} {t("lessons")}
                    </span>
                  </div>
                  <p style={{
                    fontSize: 13, color: "#666", lineHeight: 1.65,
                    margin: "0 0 12px", fontFamily: "system-ui, sans-serif",
                  }}>
                    {t(`level${lvl.num}desc`)}
                  </p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const }}>
                    {t(`level${lvl.num}topics`).split(",").map(topic => (
                      <span key={topic} style={{
                        fontSize: 11, color: "#888", background: "#f5f5f5",
                        padding: "2px 8px", borderRadius: 6,
                        fontFamily: "system-ui",
                      }}>
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Flèche */}
                <div style={{ fontSize: 14, color: lvl.color, flexShrink: 0, fontFamily: "system-ui", fontWeight: 600 }}>{t("start")}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Note bas de page */}
        <p style={{
          marginTop: "2.5rem", fontSize: 12, color: "#bbb",
          textAlign: "center" as const, fontFamily: "system-ui, sans-serif",
        }}>
          {t("freeNote")}
        </p>
      </div>
    </div>
  );
}

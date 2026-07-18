"use client";

/**
 * FichesErreurs.tsx
 * Harmonia — Le panneau « Comprendre ces remarques ».
 *
 * Extrait de HarmoniaEditor pour être PARTAGÉ (éditeur SATB + squelette
 * harmonique) : une fiche dépliante par TYPE d'erreur présent (dédupliqué, ordre =
 * première apparition, pire sévérité conservée), qui explique la faute et donne les
 * gestes pour l'éviter. Les fiches sont fermées par défaut (details/summary natifs,
 * accessibles) ; le rendu et les libellés i18n (`satb.pedagogie.*`) sont inchangés.
 */

import React from "react";
import { useTranslations } from "next-intl";
import type { ValidationError } from "@/lib/satb-rules";

export default function FichesErreurs({ errors }: { errors: ValidationError[] }) {
  const t = useTranslations("satb");
  if (errors.length === 0) return null;

  // Une fiche par type, en gardant la PIRE sévérité rencontrée pour ce type et
  // l'ordre de première apparition.
  const parType = new Map<string, "error" | "warning">();
  for (const e of errors) {
    const deja = parType.get(e.type);
    if (!deja || (deja === "warning" && e.severity === "error")) parType.set(e.type, e.severity);
  }
  const fiches = [...parType].map(([type, severity]) => ({ type, severity }));

  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontSize: 11, color: "#6b6b6b", letterSpacing: "0.06em", marginBottom: 8 }}>
        {t("pedagogie.titre").toUpperCase()}
      </div>
      <div style={{ display: "flex", flexDirection: "column" as const, gap: 6 }}>
        {fiches.map(({ type, severity }) => (
          <details key={type} style={{
            borderRadius: 8,
            border: "0.5px solid #e0dbd3",
            background: "#faf8f4",
            fontSize: 13,
            color: "#4a4a4a",
            overflow: "hidden",
          }}>
            <summary style={{
              cursor: "pointer",
              padding: "8px 12px",
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontWeight: 500,
              color: "#3a2f6b",
              listStyle: "revert",
            }}>
              <span style={{ fontSize: 13, color: severity === "error" ? "#C53030" : "#B7791F" }}>
                {severity === "error" ? "✗" : "⚠"}
              </span>
              {t(`pedagogie.${type}.titre` as never)}
            </summary>
            <div style={{ padding: "0 12px 12px 12px", display: "flex", flexDirection: "column" as const, gap: 8, lineHeight: 1.5 }}>
              {(["quoi", "pourquoi", "comment"] as const).map(volet => (
                <div key={volet}>
                  <div style={{ fontWeight: 600, color: "#571AFF", marginBottom: 2 }}>
                    {t(`pedagogie.labels.${volet}` as never)}
                  </div>
                  <div>{t(`pedagogie.${type}.${volet}` as never)}</div>
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}

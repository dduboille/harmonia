"use client";

import React from "react";
import type { AnalysisResult } from "@/lib/analyse-resultat";
import {
  FONC_STYLE, CAT_STYLE, nomAccordAffichable, libelleEtrangere,
} from "@/components/StudioAnalyse";

/**
 * AtelierAnalyse.tsx
 * Harmonia — L'analyse harmonique EN DIRECT de l'atelier `/composer` : le pendant
 * compact de StudioAnalyse. Une ligne par mesure ANALYSÉE (accords chiffrés, degré,
 * fonction, notes étrangères), les cadences signalées à leur mesure. Pas de plan
 * tonal ni de compteurs : sur 8 mesures d'exercice, ils chargent plus qu'ils
 * n'éclairent. Pas de « mesure active » non plus — ici on écrit, on ne suit pas
 * une lecture.
 */

const pastille = (bg: string, color: string): React.CSSProperties => ({
  background: bg, color, padding: "1px 8px", borderRadius: 10,
  fontSize: 11, fontWeight: 700,
});

export default function AtelierAnalyse({ analyse }: { analyse: AnalysisResult | null }) {
  const lignes = analyse ? analyse.mesures.filter((m) => m.accords.length > 0) : [];

  if (lignes.length === 0) {
    return (
      <p style={{ fontSize: 13, color: "#999", margin: 0, fontFamily: "system-ui, sans-serif" }}>
        Posez des notes pour voir l'analyse.
      </p>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {/* La tonalité lue : le rappel de ce que le moteur regarde. */}
      <div style={{ fontSize: 11, color: "#999", fontFamily: "system-ui, sans-serif", marginBottom: 2 }}>
        Lue en <strong style={{ color: "#5C3D6E" }}>{analyse!.tonalite}</strong>
      </div>

      {lignes.map((m) => {
        const cadences = analyse!.cadences.filter((c) => c.measure === m.numero);
        return (
          <div
            key={m.numero}
            style={{
              display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: 8,
              padding: "6px 10px", borderRadius: 6,
              border: "0.5px solid #e0dbd3", background: "#fff",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            <span style={{ fontSize: 11, color: "#999", fontWeight: 600, minWidth: 30 }}>
              m. {m.numero}
            </span>

            {m.accords.map((a, i) => {
              const nom = nomAccordAffichable(a.categorie, `${a.rootFr}${a.quality}`);
              return (
                <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 5, flexWrap: "wrap" }}>
                  <strong style={{ fontSize: 13, color: "#1a1a1a", fontFamily: "Georgia, serif" }}>
                    {nom ?? "—"}
                    {a.bassFr && a.bassFr !== a.rootFr && (
                      <span style={{ fontSize: 11, color: "#999", fontWeight: 400 }}>/{a.bassFr}</span>
                    )}
                  </strong>
                  <span style={pastille("#F0EBF8", "#5C3D6E")}>{a.degree}</span>
                  {a.fonction !== "?" ? (
                    <span style={pastille(FONC_STYLE[a.fonction].bg, FONC_STYLE[a.fonction].color)}>
                      {FONC_STYLE[a.fonction].label}
                    </span>
                  ) : (
                    <span style={pastille("#F5F5F5", "#999")}>chr</span>
                  )}
                  {a.categorie !== "diatonique" && (
                    <span style={{ ...pastille(CAT_STYLE[a.categorie].bg, CAT_STYLE[a.categorie].color), fontSize: 10, whiteSpace: "nowrap" }}>
                      {CAT_STYLE[a.categorie].label}
                    </span>
                  )}
                  {a.notesEtrangeres?.map((e, ei) => (
                    <span key={ei} title={`voix ${e.voix}`} style={{ ...pastille("#FDF3E3", "#8A5A12"), fontSize: 10, fontWeight: 600, whiteSpace: "nowrap" }}>
                      {libelleEtrangere(e)}
                    </span>
                  ))}
                  {i < m.accords.length - 1 && <span style={{ color: "#ddd" }}>·</span>}
                </span>
              );
            })}

            {cadences.map((c, ci) => (
              <span key={ci} style={{ ...pastille("#E1F5EE", "#0F6E56"), marginLeft: "auto", whiteSpace: "nowrap" }}>
                {c.label}
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
}

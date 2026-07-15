"use client";

import React, { useEffect, useRef } from "react";
import type {
  AnalysisResult,
  Fonction,
  Categorie,
  NoteEtrangere,
} from "@/app/api/analyse-partition/route";

/**
 * StudioAnalyse.tsx
 * Harmonia — L'analyse harmonique en regard de la partition gravée : une ligne par
 * MESURE (accords, degrés, fonctions), la mesure en cours de lecture surlignée. Le
 * plan tonal (régions/modulations) est rappelé en tête. C'est le pendant
 * pédagogique de la gravure Verovio.
 *
 * POURQUOI par mesure et non par accord : le surlignage suit la lecture, qui avance
 * à la mesure (cf. Studio.tsx). Aligner l'analyse sur cette même granularité rend la
 * synchronisation lisible — l'élève voit d'un coup l'harmonie de la mesure qui sonne.
 *
 * Les couleurs (fonctions, catégories chromatiques, plan tonal) sont reprises telles
 * quelles d'AnalysePartition.tsx : même vocabulaire visuel dans tout le produit.
 */

// ── Style helpers (repris d'AnalysePartition.tsx pour la cohérence visuelle) ─────

const FONC_STYLE: Record<Fonction, { bg: string; color: string; label: string }> = {
  T:   { bg: "#E1F5EE", color: "#0F6E56", label: "T" },
  SD:  { bg: "#E3F2FD", color: "#1565C0", label: "SD" },
  D:   { bg: "#FFEBEE", color: "#C62828", label: "D" },
  "?": { bg: "#F5F5F5", color: "#777",    label: "?" },
};

const CAT_STYLE: Record<Categorie, { bg: string; color: string; label: string }> = {
  diatonique:           { bg: "#f0ece6", color: "#888",    label: "diatonique" },
  dominante_secondaire: { bg: "#FAEEDA", color: "#BA7517", label: "dominante secondaire" },
  sensible_degre:       { bg: "#FAEEDA", color: "#BA7517", label: "sensible de degré" },
  emprunt:              { bg: "#F0EBF8", color: "#5C3D6E", label: "emprunt" },
  napolitain:           { bg: "#E6F1FB", color: "#185FA5", label: "napolitain" },
  sixte_augmentee:      { bg: "#FDF0E6", color: "#A85416", label: "sixte augmentée" },
  chromatique:          { bg: "#FCEBEB", color: "#A32D2D", label: "chromatique" },
};

/**
 * Nom d'accord AFFICHABLE, ou `null` quand il ne faut rien montrer. Une sixte
 * augmentée porte un nom enharmonique (une 7e de dominante) que l'analyse sert
 * justement à dissiper : on ne l'affiche pas, le DEGRÉ dit le reste.
 * (Même règle qu'AnalysePartition.tsx.)
 */
function nomAccordAffichable(categorie: Categorie, nom: string): string | null {
  return categorie === "sixte_augmentee" ? null : nom;
}

/** Une note étrangère, telle qu'on l'écrit : « Ré (note de passage) ». */
function libelleEtrangere(e: NoteEtrangere): string {
  return `${e.nom} (${e.type ?? "étrangère"})`;
}

// ── Composant ────────────────────────────────────────────────────────────────

export default function StudioAnalyse({
  analyse,
  mesureActive,
}: {
  analyse: AnalysisResult;
  mesureActive: number | null;
}) {
  // Faire défiler la mesure surlignée dans la vue au fil de la lecture : sans cela,
  // dès que la pièce dépasse la hauteur du panneau, le surlignage sort du champ et
  // l'élève perd le fil. On ne touche qu'au conteneur du panneau (`block: "nearest"`),
  // jamais à la page entière.
  const conteneur = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (mesureActive === null || !conteneur.current) return;
    const ligne = conteneur.current.querySelector<HTMLElement>(
      `[data-mesure="${mesureActive}"]`,
    );
    ligne?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [mesureActive]);

  const aModulation = analyse.planTonal.regions.length > 1;

  return (
    <div ref={conteneur} style={{ display: "flex", flexDirection: "column", gap: 8 }}>

      {/* ── Plan tonal (régions), en tête, seulement s'il y a modulation ── */}
      {aModulation && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 6 }}>
          {analyse.planTonal.regions.map((r, i) => (
            <div
              key={i}
              title={r.pivot
                ? `Pivot : ${r.pivot.etiquetteAncienne} = ${r.pivot.etiquetteNouvelle} (${r.nom})`
                : undefined}
              style={{
                background: "#F0EBF8", color: "#5C3D6E",
                borderRadius: 8, padding: "6px 12px",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              <span style={{ fontSize: 13, fontWeight: 700, fontFamily: "Georgia, serif" }}>{r.nom}</span>
              <span style={{ fontSize: 11, color: "#8A7799", marginLeft: 8 }}>
                m. {r.mesureDebut}–{r.mesureFin}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* ── Une ligne par mesure ── */}
      {analyse.mesures.map((m) => {
        const actif = m.numero === mesureActive;
        return (
          <div
            key={m.numero}
            data-mesure={m.numero}
            style={{
              background: actif ? "#F0EBF8" : "#fff",
              border: `0.5px solid ${actif ? "#c9b8dc" : "#e8e3db"}`,
              borderRadius: 8,
              padding: "8px 12px",
              display: "flex",
              alignItems: "baseline",
              flexWrap: "wrap",
              gap: 8,
              transition: "background .15s, border-color .15s",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            <span style={{ fontSize: 11, color: "#999", fontWeight: 600, minWidth: 34 }}>
              m. {m.numero}
            </span>

            {m.accords.length === 0 ? (
              <span style={{ color: "#ccc", fontSize: 13 }}>—</span>
            ) : (
              m.accords.map((a, i) => {
                const nom = nomAccordAffichable(a.categorie, `${a.rootFr}${a.quality}`);
                return (
                  <span
                    key={i}
                    style={{ display: "inline-flex", alignItems: "center", gap: 5, flexWrap: "wrap" }}
                  >
                    {/* Nom de l'accord (rien pour une sixte augmentée) + basse chiffrée. */}
                    <strong style={{ fontSize: 14, color: "#1a1a1a", fontFamily: "Georgia, serif" }}>
                      {nom ?? "—"}
                      {a.bassFr && a.bassFr !== a.rootFr && (
                        <span style={{ fontSize: 11, color: "#999", fontWeight: 400 }}>/{a.bassFr}</span>
                      )}
                    </strong>

                    {/* Degré. */}
                    <span style={{
                      background: "#F0EBF8", color: "#5C3D6E",
                      padding: "1px 8px", borderRadius: 10,
                      fontSize: 11, fontWeight: 700,
                    }}>
                      {a.degree}
                    </span>

                    {/* Fonction tonale (T / SD / D), ou « chr » hors fonction. */}
                    {a.fonction !== "?" ? (
                      <span style={{
                        background: FONC_STYLE[a.fonction].bg,
                        color: FONC_STYLE[a.fonction].color,
                        padding: "1px 8px", borderRadius: 10,
                        fontSize: 11, fontWeight: 700,
                      }}>
                        {FONC_STYLE[a.fonction].label}
                      </span>
                    ) : (
                      <span style={{
                        background: "#F5F5F5", color: "#999",
                        padding: "1px 8px", borderRadius: 10,
                        fontSize: 11, fontWeight: 700,
                      }}>
                        chr
                      </span>
                    )}

                    {/* Catégorie chromatique, seulement quand elle sort du diatonique. */}
                    {a.categorie !== "diatonique" && (
                      <span style={{
                        background: CAT_STYLE[a.categorie].bg,
                        color: CAT_STYLE[a.categorie].color,
                        padding: "1px 7px", borderRadius: 6,
                        fontSize: 10, fontWeight: 600, whiteSpace: "nowrap",
                      }}>
                        {CAT_STYLE[a.categorie].label}
                        {a.resolue !== undefined && (a.resolue ? " ✓" : " ✗")}
                      </span>
                    )}

                    {/* Notes étrangères : de l'écriture, pas de l'harmonie. */}
                    {a.notesEtrangeres && a.notesEtrangeres.length > 0 && a.notesEtrangeres.map((e, ei) => (
                      <span
                        key={ei}
                        title={`voix ${e.voix}`}
                        style={{
                          background: "#FDF3E3", color: "#8A5A12",
                          padding: "1px 7px", borderRadius: 6,
                          fontSize: 10, fontWeight: 600, whiteSpace: "nowrap",
                        }}
                      >
                        {libelleEtrangere(e)}
                      </span>
                    ))}

                    {/* Séparateur entre accords d'une même mesure. */}
                    {i < m.accords.length - 1 && (
                      <span style={{ color: "#ddd", margin: "0 2px" }}>·</span>
                    )}
                  </span>
                );
              })
            )}
          </div>
        );
      })}
    </div>
  );
}

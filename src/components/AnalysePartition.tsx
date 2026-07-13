"use client";

import React, { useCallback, useRef, useState } from "react";

// ── Types (mirror of API route) ───────────────────────────────────────────────

type Fonction = "T" | "SD" | "D" | "?";

interface ChordResult {
  rootFr: string;
  quality: string;
  degree: string;
  degreeNum: number;
  fonction: Fonction;
  beat?: number;
}

interface CadenceResult {
  type: "parfaite" | "plagale" | "rompue" | "demi";
  label: string;
  measure: number;
  chords: string[];
}

interface MesureResult {
  numero: number;
  accords: ChordResult[];
}

interface AnalysisResult {
  fichier: string;
  tonalite: string;
  tonicFr: string;
  mode: "major" | "minor";
  nombreMesures: number;
  signature: string;
  mesures: MesureResult[];
  cadences: CadenceResult[];
  nombreChromatiques: number;
}

// ── Style helpers ─────────────────────────────────────────────────────────────

const FONC_STYLE: Record<Fonction, { bg: string; color: string; label: string }> = {
  T:   { bg: "#E1F5EE", color: "#0F6E56", label: "T" },
  SD:  { bg: "#E3F2FD", color: "#1565C0", label: "SD" },
  D:   { bg: "#FFEBEE", color: "#C62828", label: "D" },
  "?": { bg: "#F5F5F5", color: "#777",    label: "?" },
};

const CADENCE_COLOR: Record<string, { bg: string; color: string }> = {
  parfaite: { bg: "#E1F5EE", color: "#0F6E56" },
  plagale:  { bg: "#E3F2FD", color: "#1565C0" },
  rompue:   { bg: "#FFF3E0", color: "#E65100" },
  demi:     { bg: "#F5F5F5", color: "#555" },
};

// ── Main Component ────────────────────────────────────────────────────────────

type Tab = "resume" | "mesures" | "cadences" | "commentaire";

export default function AnalysePartition() {
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>("resume");
  const [commentaire, setCommentaire] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(async (file: File) => {
    setError(null);
    setAnalysis(null);
    setCommentaire("");
    setIsLoading(true);
    setActiveTab("resume");

    const fd = new FormData();
    fd.append("file", file);

    try {
      const res = await fetch("/api/analyse-partition", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Erreur lors de l'analyse");
      } else {
        setAnalysis(data as AnalysisResult);
      }
    } catch {
      setError("Erreur réseau. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }, [handleFile]);

  const generateCommentaire = async () => {
    if (!analysis || isGenerating) return;
    setIsGenerating(true);
    setCommentaire("");
    setActiveTab("commentaire");

    try {
      const res = await fetch("/api/analyse-partition/commentaire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ analysis }),
      });
      if (!res.ok) {
        setCommentaire("Erreur lors de la génération du commentaire.");
        setIsGenerating(false);
        return;
      }
      const data = await res.json();
      setCommentaire(data.text ?? "");
    } catch {
      setCommentaire("Erreur réseau.");
    } finally {
      setIsGenerating(false);
    }
  };

  // ── Drop zone ───────────────────────────────────────────────────────────────

  const dropZone = (
    <div
      onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={onDrop}
      onClick={() => inputRef.current?.click()}
      style={{
        border: `2px dashed ${isDragging ? "#5C3D6E" : "#c9c0d3"}`,
        borderRadius: 16,
        padding: "56px 32px",
        textAlign: "center",
        cursor: "pointer",
        background: isDragging ? "#F0EBF8" : "#faf9f7",
        transition: "all .18s",
      }}
    >
      <div style={{ fontSize: 40, marginBottom: 12 }}>◎</div>
      <div style={{ fontSize: 17, fontWeight: 700, color: "#1a1a1a", marginBottom: 6, fontFamily: "Georgia, serif" }}>
        Déposez votre partition ici
      </div>
      <div style={{ fontSize: 13, color: "#888", marginBottom: 18, fontFamily: "system-ui, sans-serif" }}>
        ou cliquez pour choisir un fichier
      </div>
      <div style={{
        display: "inline-block",
        padding: "6px 16px",
        border: "1px solid #c9c0d3",
        borderRadius: 20,
        fontSize: 11,
        color: "#777",
        fontFamily: "system-ui, sans-serif",
        letterSpacing: "0.04em",
      }}>
        .mxl · .xml · .musicxml
      </div>
      <div style={{ marginTop: 10, fontSize: 11, color: "#767676", fontFamily: "system-ui, sans-serif" }}>
        Max 5 Mo
      </div>
      <input
        ref={inputRef}
        type="file"
        accept=".xml,.musicxml,.mxl"
        style={{ display: "none" }}
        onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
      />
    </div>
  );

  // ── Loading ─────────────────────────────────────────────────────────────────

  if (isLoading) {
    return (
      <main style={{ minHeight: "100vh", background: "#f4f1ec", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", fontFamily: "system-ui, sans-serif" }}>
          <div style={{ fontSize: 36, marginBottom: 16, animation: "spin 1.2s linear infinite" }}>◎</div>
          <div style={{ fontSize: 15, color: "#5C3D6E", fontWeight: 600 }}>Analyse en cours…</div>
          <div style={{ fontSize: 12, color: "#999", marginTop: 6 }}>Parsing MusicXML · Détection des accords · Identification des cadences</div>
          <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
        </div>
      </main>
    );
  }

  // ── No analysis yet ─────────────────────────────────────────────────────────

  if (!analysis) {
    return (
      <main style={{ minHeight: "100vh", background: "#f4f1ec", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "#BA7517", textTransform: "uppercase", marginBottom: 8, fontFamily: "system-ui, sans-serif" }}>
              Fonctionnalité Pro
            </div>
            <h1 style={{ fontSize: 26, fontWeight: 700, color: "#1a1a1a", margin: "0 0 10px", fontFamily: "Georgia, serif" }}>
              Analyse de partition
            </h1>
            <p style={{ fontSize: 14, color: "#666", lineHeight: 1.65, margin: 0, fontFamily: "system-ui, sans-serif" }}>
              Importez un fichier MusicXML pour obtenir une analyse harmonique automatique — degrés, fonctions, cadences et commentaire pédagogique IA.
            </p>
          </div>
          {error && (
            <div style={{
              background: "#FFEBEE", border: "1px solid #FFCDD2", borderRadius: 10,
              padding: "12px 16px", marginBottom: 20, fontSize: 13, color: "#C62828",
              fontFamily: "system-ui, sans-serif",
            }}>
              {error}
            </div>
          )}
          {dropZone}
        </div>
      </main>
    );
  }

  // ── Analysis report ─────────────────────────────────────────────────────────

  const tabs: { id: Tab; label: string }[] = [
    { id: "resume",      label: "Résumé" },
    { id: "mesures",     label: `Mesures (${analysis.nombreMesures})` },
    { id: "cadences",    label: `Cadences (${analysis.cadences.length})` },
    { id: "commentaire", label: "✦ Commentaire IA" },
  ];

  const cadenceCounts = analysis.cadences.reduce<Record<string, number>>((acc, c) => {
    acc[c.type] = (acc[c.type] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <main style={{ minHeight: "100vh", background: "#f4f1ec", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
          <div>
            <div style={{ fontSize: 11, color: "#888", fontFamily: "system-ui, sans-serif", marginBottom: 4 }}>
              {analysis.fichier}
            </div>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: "#1a1a1a", margin: 0, fontFamily: "Georgia, serif" }}>
              Analyse harmonique
            </h1>
          </div>
          <button
            onClick={() => { setAnalysis(null); setError(null); setCommentaire(""); }}
            style={{
              padding: "8px 16px", borderRadius: 8, border: "1px solid #c9c0d3",
              background: "#fff", color: "#555", fontSize: 12, cursor: "pointer",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            ← Nouvelle partition
          </button>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: 24, borderBottom: "1px solid #e0dbd3", paddingBottom: 0 }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "10px 18px",
                border: "none",
                borderBottom: `2px solid ${activeTab === tab.id ? "#5C3D6E" : "transparent"}`,
                background: "transparent",
                color: activeTab === tab.id ? "#5C3D6E" : "#888",
                fontWeight: activeTab === tab.id ? 700 : 400,
                fontSize: 13,
                cursor: "pointer",
                fontFamily: "system-ui, sans-serif",
                transition: "color .15s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Résumé ── */}
        {activeTab === "resume" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 24 }}>
            {[
              { label: "Tonalité", value: analysis.tonalite, accent: "#5C3D6E" },
              { label: "Signature", value: analysis.signature },
              { label: "Mesures",   value: String(analysis.nombreMesures) },
              { label: "Cadences",  value: String(analysis.cadences.length) },
              { label: "Accords chromatiques", value: String(analysis.nombreChromatiques) },
            ].map(card => (
              <div key={card.label} style={{
                background: "#fff", borderRadius: 12, padding: "16px 20px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
              }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#999", textTransform: "uppercase", marginBottom: 6, fontFamily: "system-ui, sans-serif" }}>
                  {card.label}
                </div>
                <div style={{ fontSize: 22, fontWeight: 700, color: card.accent ?? "#1a1a1a", fontFamily: "Georgia, serif" }}>
                  {card.value}
                </div>
              </div>
            ))}

            {/* Cadence summary */}
            {analysis.cadences.length > 0 && (
              <div style={{ gridColumn: "1 / -1", background: "#fff", borderRadius: 12, padding: "16px 20px", boxShadow: "0 1px 4px rgba(0,0,0,0.07)" }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#999", textTransform: "uppercase", marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>
                  Répartition des cadences
                </div>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {(["parfaite", "plagale", "rompue", "demi"] as const).map(type => {
                    const count = cadenceCounts[type] ?? 0;
                    if (count === 0) return null;
                    const s = CADENCE_COLOR[type];
                    return (
                      <div key={type} style={{
                        background: s.bg, color: s.color,
                        padding: "6px 14px", borderRadius: 20,
                        fontSize: 12, fontWeight: 700,
                        fontFamily: "system-ui, sans-serif",
                      }}>
                        {type.charAt(0).toUpperCase() + type.slice(1)} × {count}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── Mesures ── */}
        {activeTab === "mesures" && (
          <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 1px 4px rgba(0,0,0,0.07)", overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "system-ui, sans-serif" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #e8e3ed" }}>
                  {["Mesure", "Temps", "Accord", "Degré", "Fonction"].map(h => (
                    <th key={h} style={{
                      padding: "12px 16px", textAlign: "left",
                      fontSize: 10, fontWeight: 700, letterSpacing: "0.08em",
                      color: "#999", textTransform: "uppercase",
                    }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {analysis.mesures.flatMap((m, mi) => {
                  const rowBg = mi % 2 === 0 ? "#fff" : "#faf9f7";
                  if (m.accords.length === 0) {
                    return [(
                      <tr key={`${m.numero}-empty`} style={{ borderBottom: "1px solid #f0ebe8", background: rowBg }}>
                        <td style={{ padding: "10px 16px", color: "#888", fontSize: 13, fontWeight: 600 }}>{m.numero}</td>
                        <td style={{ padding: "10px 16px", color: "#ccc", fontSize: 12 }}>—</td>
                        <td colSpan={3} style={{ padding: "10px 16px", color: "#ccc", fontSize: 13 }}>—</td>
                      </tr>
                    )];
                  }
                  return m.accords.map((chord, ci) => (
                    <tr
                      key={`${m.numero}-${ci}`}
                      style={{ borderBottom: "1px solid #f0ebe8", background: rowBg }}
                    >
                      <td style={{ padding: "10px 16px", color: "#888", fontSize: 13, fontWeight: 600 }}>
                        {ci === 0 ? m.numero : ""}
                      </td>
                      <td style={{ padding: "10px 16px", color: "#767676", fontSize: 12, fontWeight: 600 }}>
                        {chord.beat !== undefined ? `T${chord.beat}` : ""}
                      </td>
                      <td style={{ padding: "10px 16px", fontSize: 14, fontWeight: 700, color: "#1a1a1a" }}>
                        {`${chord.rootFr}${chord.quality}`}
                      </td>
                      <td style={{ padding: "10px 16px" }}>
                        <span style={{
                          display: "inline-block",
                          background: "#F0EBF8", color: "#5C3D6E",
                          padding: "2px 10px", borderRadius: 12,
                          fontSize: 12, fontWeight: 700,
                        }}>
                          {chord.degree}
                        </span>
                      </td>
                      <td style={{ padding: "10px 16px" }}>
                        {chord.fonction !== "?" ? (
                          <span style={{
                            display: "inline-block",
                            background: FONC_STYLE[chord.fonction].bg,
                            color: FONC_STYLE[chord.fonction].color,
                            padding: "2px 10px", borderRadius: 12,
                            fontSize: 12, fontWeight: 700,
                          }}>
                            {FONC_STYLE[chord.fonction].label}
                          </span>
                        ) : (
                          <span style={{
                            display: "inline-block",
                            background: "#F5F5F5", color: "#999",
                            padding: "2px 10px", borderRadius: 12,
                            fontSize: 12, fontWeight: 700,
                          }}>
                            chr
                          </span>
                        )}
                      </td>
                    </tr>
                  ));
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* ── Cadences ── */}
        {activeTab === "cadences" && (
          <div>
            {analysis.cadences.length === 0 ? (
              <div style={{ textAlign: "center", padding: "48px 0", color: "#767676", fontFamily: "system-ui, sans-serif", fontSize: 14 }}>
                Aucune cadence détectée dans cette partition.
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {analysis.cadences.map((cad, i) => {
                  const s = CADENCE_COLOR[cad.type];
                  return (
                    <div key={i} style={{
                      background: "#fff", borderRadius: 12,
                      padding: "16px 20px", boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
                      display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap",
                    }}>
                      <span style={{
                        background: s.bg, color: s.color,
                        padding: "4px 14px", borderRadius: 20,
                        fontSize: 12, fontWeight: 700,
                        fontFamily: "system-ui, sans-serif",
                        whiteSpace: "nowrap",
                      }}>
                        {cad.label}
                      </span>
                      <span style={{ fontSize: 13, color: "#1a1a1a", fontFamily: "Georgia, serif", fontWeight: 600 }}>
                        {cad.chords[0]} → {cad.chords[1]}
                      </span>
                      <span style={{ marginLeft: "auto", fontSize: 12, color: "#767676", fontFamily: "system-ui, sans-serif" }}>
                        mesure {cad.measure}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ── Commentaire IA ── */}
        {activeTab === "commentaire" && (
          <div>
            {!commentaire && !isGenerating ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>✦</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#1a1a1a", marginBottom: 8, fontFamily: "Georgia, serif" }}>
                  Commentaire pédagogique IA
                </div>
                <div style={{ fontSize: 13, color: "#888", marginBottom: 24, fontFamily: "system-ui, sans-serif", maxWidth: 400, margin: "0 auto 24px" }}>
                  Générez une analyse narrative complète de cette partition par Claude, votre professeur virtuel.
                </div>
                <button
                  onClick={generateCommentaire}
                  style={{
                    padding: "12px 32px", borderRadius: 10,
                    background: "#5C3D6E", color: "#fff",
                    fontSize: 14, fontWeight: 700, border: "none", cursor: "pointer",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  Générer le commentaire →
                </button>
              </div>
            ) : (
              <div style={{
                background: "#fff", borderRadius: 12, padding: "28px 32px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
                fontFamily: "Georgia, serif", fontSize: 15, lineHeight: 1.75, color: "#1a1a1a",
                minHeight: 200,
              }}>
                {isGenerating && !commentaire && (
                  <span style={{ color: "#767676", fontFamily: "system-ui, sans-serif", fontSize: 13 }}>
                    Génération en cours…
                  </span>
                )}
                <div style={{ whiteSpace: "pre-wrap" }}>
                  {commentaire}
                  {isGenerating && <span style={{ borderLeft: "2px solid #5C3D6E", marginLeft: 2, animation: "blink 1s step-end infinite" }} />}
                </div>
                {!isGenerating && commentaire && (
                  <button
                    onClick={generateCommentaire}
                    style={{
                      marginTop: 24, padding: "8px 18px", borderRadius: 8,
                      border: "1px solid #c9c0d3", background: "transparent",
                      color: "#5C3D6E", fontSize: 12, cursor: "pointer",
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    Régénérer
                  </button>
                )}
                <style>{`@keyframes blink { 50% { opacity: 0 } }`}</style>
              </div>
            )}
          </div>
        )}

      </div>
    </main>
  );
}

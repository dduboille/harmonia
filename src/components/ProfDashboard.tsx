"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import type { Classe } from "@/types/conservatoire";

const ACCENT = "#2D5A8E";
const BETA_BG = "#FAEEDA";
const BETA_COLOR = "#BA7517";

interface Props {
  classes: Classe[];
  totalEleves: number;
}

export default function ProfDashboard({ classes: initialClasses, totalEleves: initialTotal }: Props) {
  const params = useParams();
  const locale = (params?.locale as string) ?? "fr";

  const [classes, setClasses] = useState<Classe[]>(initialClasses);
  const [showModal, setShowModal] = useState(false);
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const totalEleves = classes.reduce((s, c) => s + c.elevesCount, 0) || initialTotal;
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 600;

  async function createClasse() {
    if (!nom.trim()) { setError("Le nom est requis."); return; }
    setCreating(true);
    setError("");
    try {
      const res = await fetch("/api/conservatoire/classes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nom: nom.trim(), description: description.trim() || undefined }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error ?? "Erreur"); return; }
      setClasses(prev => [data.classe, ...prev]);
      setNom(""); setDescription(""); setShowModal(false);
    } catch {
      setError("Erreur réseau");
    } finally {
      setCreating(false);
    }
  }

  function copyCode(code: string) {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 20px", fontFamily: "system-ui, sans-serif" }}>

      {/* Beta banner */}
      <div style={{
        background: BETA_BG,
        color: BETA_COLOR,
        border: `1px solid ${BETA_COLOR}33`,
        borderRadius: 10,
        padding: "10px 16px",
        fontSize: 13,
        marginBottom: 28,
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}>
        <span style={{
          background: BETA_COLOR,
          color: "#fff",
          fontSize: 10,
          fontWeight: 800,
          padding: "2px 6px",
          borderRadius: 4,
          letterSpacing: "0.07em",
        }}>BETA</span>
        Mode beta — accès libre. Toute personne connectée peut créer une classe.
      </div>

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 800, color: "#1a1a1a", margin: 0, fontFamily: "Georgia, serif" }}>
            Espace professeur
          </h1>
          <p style={{ color: "#666", marginTop: 4, fontSize: 14 }}>
            Gérez vos classes et suivez la progression de vos élèves.
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          style={{
            background: ACCENT,
            color: "#fff",
            border: "none",
            borderRadius: 10,
            padding: "11px 22px",
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          + Créer une classe
        </button>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 14, marginBottom: 36 }}>
        {[
          { label: "Classes", value: classes.length },
          { label: "Élèves au total", value: totalEleves },
          { label: "Devoirs actifs", value: "–" },
        ].map((s) => (
          <div key={s.label} style={{
            background: "#fff",
            border: "1px solid #e8e2da",
            borderRadius: 12,
            padding: "20px 18px",
          }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: ACCENT }}>{s.value}</div>
            <div style={{ fontSize: 13, color: "#888", marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Classes list */}
      <h2 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a", marginBottom: 16 }}>Mes classes</h2>

      {classes.length === 0 ? (
        <div style={{
          background: "#fff",
          border: "1px dashed #ccc",
          borderRadius: 14,
          padding: "48px 24px",
          textAlign: "center",
          color: "#999",
        }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🎓</div>
          <p style={{ fontSize: 15 }}>Aucune classe pour l'instant.</p>
          <button
            onClick={() => setShowModal(true)}
            style={{
              marginTop: 16,
              background: ACCENT,
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "10px 20px",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Créer ma première classe
          </button>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {classes.map((c) => (
            <div key={c.id} style={{
              background: "#fff",
              border: "1px solid #e8e2da",
              borderRadius: 14,
              padding: "20px 22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
            }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 16, color: "#1a1a1a", marginBottom: 4 }}>{c.nom}</div>
                {c.description && (
                  <div style={{ fontSize: 13, color: "#888", marginBottom: 8 }}>{c.description}</div>
                )}
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                  <span style={{
                    background: "#f0eaf8",
                    color: "#5C3D6E",
                    padding: "3px 10px",
                    borderRadius: 8,
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    fontFamily: "monospace",
                  }}>
                    {c.codeAcces}
                  </span>
                  <button
                    onClick={() => copyCode(c.codeAcces)}
                    style={{
                      background: "transparent",
                      border: "1px solid #ccc",
                      borderRadius: 6,
                      padding: "2px 10px",
                      fontSize: 12,
                      cursor: "pointer",
                      color: "#555",
                    }}
                  >
                    {copied === c.codeAcces ? "✓ Copié" : "Copier le code"}
                  </button>
                  <span style={{ fontSize: 13, color: "#999" }}>
                    {c.elevesCount} élève{c.elevesCount !== 1 ? "s" : ""}
                  </span>
                </div>
              </div>
              <Link
                href={`/${locale}/prof/classe/${c.id}`}
                style={{
                  background: ACCENT,
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Voir la classe →
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* Create class modal */}
      {showModal && (
        <div style={{
          position: "fixed", inset: 0,
          background: "rgba(0,0,0,0.45)",
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 500, padding: 16,
        }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}
        >
          <div style={{
            background: "#fff",
            borderRadius: 16,
            padding: "32px 28px",
            width: "100%",
            maxWidth: 440,
            boxShadow: "0 16px 60px rgba(0,0,0,0.2)",
          }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 24px", color: "#1a1a1a", fontFamily: "Georgia, serif" }}>
              Créer une classe
            </h2>

            <label style={{ display: "block", marginBottom: 16 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#444", display: "block", marginBottom: 6 }}>
                Nom de la classe *
              </span>
              <input
                autoFocus
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") createClasse(); }}
                placeholder="Ex : Harmonie 1ère année"
                style={{
                  width: "100%", boxSizing: "border-box",
                  padding: "10px 12px", border: "1px solid #ccc",
                  borderRadius: 8, fontSize: 14, outline: "none",
                }}
              />
            </label>

            <label style={{ display: "block", marginBottom: 20 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#444", display: "block", marginBottom: 6 }}>
                Description (optionnel)
              </span>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Ex : Cours du jeudi 18h, niveau débutant"
                rows={3}
                style={{
                  width: "100%", boxSizing: "border-box",
                  padding: "10px 12px", border: "1px solid #ccc",
                  borderRadius: 8, fontSize: 14, resize: "vertical", outline: "none",
                }}
              />
            </label>

            {error && (
              <p style={{ color: "#c0392b", fontSize: 13, marginBottom: 12 }}>{error}</p>
            )}

            <div style={{ display: "flex", gap: 10 }}>
              <button
                onClick={() => { setShowModal(false); setNom(""); setDescription(""); setError(""); }}
                style={{
                  flex: 1, padding: "11px", border: "1px solid #ccc",
                  borderRadius: 8, background: "#fff", fontSize: 14, cursor: "pointer", color: "#444",
                }}
              >
                Annuler
              </button>
              <button
                onClick={createClasse}
                disabled={creating}
                style={{
                  flex: 2, padding: "11px", border: "none",
                  borderRadius: 8, background: ACCENT, color: "#fff",
                  fontSize: 14, fontWeight: 700, cursor: creating ? "default" : "pointer",
                  opacity: creating ? 0.7 : 1,
                }}
              >
                {creating ? "Création…" : "Créer la classe"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

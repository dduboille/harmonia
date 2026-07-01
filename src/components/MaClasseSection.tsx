"use client";

import React, { useState } from "react";
import Link from "next/link";

const ACCENT = "#2D5A8E";

interface Devoir {
  id: string;
  titre: string;
  dateLimite: string | null;
  type: string;
  exerciseUrl: string | null;
}

interface ClasseInfo {
  id: string;
  nom: string;
  prof_id: string;
  code_acces: string;
}

interface Correction {
  devoirTitre: string;
  note: number | null;
  commentaire: string | null;
  correctedAt: string;
}

interface Props {
  locale: string;
  membership: { classe_id: string; classes: ClasseInfo | ClasseInfo[] | null } | null;
  devoirs: Devoir[];
  corrections?: Correction[];
}

export default function MaClasseSection({ locale, membership, devoirs, corrections = [] }: Props) {
  const [showJoin, setShowJoin] = useState(false);
  const [code, setCode] = useState("");
  const [joining, setJoining] = useState(false);
  const [joinError, setJoinError] = useState("");
  const [joined, setJoined] = useState<string | null>(null);

  const classe = membership?.classes
    ? (Array.isArray(membership.classes) ? membership.classes[0] : membership.classes)
    : null;

  async function rejoindre() {
    if (!code.trim()) { setJoinError("Entrez un code."); return; }
    setJoining(true);
    setJoinError("");
    try {
      const res = await fetch("/api/conservatoire/eleves?action=rejoindre", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ codeAcces: code.trim() }),
      });
      const data = await res.json();
      if (!res.ok) { setJoinError(data.error ?? "Code invalide."); return; }
      setJoined(data.classeNom);
      setShowJoin(false);
      setCode("");
    } catch {
      setJoinError("Erreur réseau");
    } finally {
      setJoining(false);
    }
  }

  if (joined) {
    return (
      <div style={{
        background: "#e8f5e9",
        border: "1px solid #a5d6a7",
        borderRadius: 10,
        padding: "16px 20px",
        marginBottom: "2rem",
        fontSize: 14,
        color: "#2e7d32",
        fontFamily: "system-ui, sans-serif",
      }}>
        ✓ Vous avez rejoint la classe <strong>{joined}</strong>. Rechargez la page pour voir vos devoirs.
      </div>
    );
  }

  if (!classe) {
    return (
      <div style={{
        background: "#fff",
        border: "1px solid #e8e2da",
        borderRadius: 10,
        padding: "18px 20px",
        marginBottom: "2rem",
        fontFamily: "system-ui, sans-serif",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
          <div>
            <div style={{ fontWeight: 600, fontSize: 14, color: "#1a1a1a", marginBottom: 2 }}>🎓 Ma classe</div>
            <div style={{ fontSize: 13, color: "#888" }}>Vous n'êtes inscrit dans aucune classe.</div>
          </div>
          <button
            onClick={() => setShowJoin(true)}
            style={{
              background: ACCENT, color: "#fff",
              border: "none", borderRadius: 8,
              padding: "9px 18px", fontSize: 13, fontWeight: 600, cursor: "pointer",
            }}
          >
            Rejoindre une classe
          </button>
        </div>

        {showJoin && (
          <div style={{
            position: "fixed", inset: 0,
            background: "rgba(0,0,0,0.45)",
            display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 500, padding: 16,
          }}
            onClick={(e) => { if (e.target === e.currentTarget) setShowJoin(false); }}
          >
            <div style={{
              background: "#fff", borderRadius: 14,
              padding: "28px 24px", width: "100%", maxWidth: 360,
              boxShadow: "0 12px 48px rgba(0,0,0,0.18)",
            }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 18px", fontFamily: "Georgia, serif" }}>
                Rejoindre une classe
              </h3>
              <label style={{ display: "block", marginBottom: 14 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#444", display: "block", marginBottom: 6 }}>
                  Code d'accès (6 caractères)
                </span>
                <input
                  autoFocus
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase())}
                  onKeyDown={(e) => { if (e.key === "Enter") rejoindre(); }}
                  maxLength={6}
                  placeholder="EX : AB3Z9K"
                  style={{
                    width: "100%", boxSizing: "border-box",
                    padding: "10px 12px", border: "1px solid #ccc",
                    borderRadius: 8, fontSize: 16, fontFamily: "monospace",
                    outline: "none", textTransform: "uppercase", letterSpacing: "0.1em",
                  }}
                />
              </label>
              {joinError && <p style={{ color: "#c0392b", fontSize: 13, marginBottom: 10 }}>{joinError}</p>}
              <div style={{ display: "flex", gap: 10 }}>
                <button
                  onClick={() => setShowJoin(false)}
                  style={{ flex: 1, padding: "10px", border: "1px solid #ccc", borderRadius: 8, background: "#fff", fontSize: 14, cursor: "pointer", color: "#444" }}
                >
                  Annuler
                </button>
                <button
                  onClick={rejoindre}
                  disabled={joining}
                  style={{ flex: 2, padding: "10px", border: "none", borderRadius: 8, background: ACCENT, color: "#fff", fontSize: 14, fontWeight: 700, cursor: joining ? "default" : "pointer", opacity: joining ? 0.7 : 1 }}
                >
                  {joining ? "Vérification…" : "Rejoindre"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div style={{
      background: "#fff",
      border: `1.5px solid ${ACCENT}40`,
      borderRadius: 12,
      padding: "20px 22px",
      marginBottom: "2rem",
      fontFamily: "system-ui, sans-serif",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10, marginBottom: devoirs.length > 0 ? 16 : 0 }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: ACCENT, textTransform: "uppercase", marginBottom: 4 }}>
            🎓 Ma classe
          </div>
          <div style={{ fontWeight: 700, fontSize: 15, color: "#1a1a1a" }}>{classe.nom}</div>
        </div>
        <Link
          href={`/${locale}/prof/classe/${classe.id}`}
          style={{ fontSize: 13, color: ACCENT, textDecoration: "none", fontWeight: 600 }}
        >
          Voir le détail →
        </Link>
      </div>

      {devoirs.length > 0 ? (
        <div style={{ borderTop: "1px solid #f0ebe3", paddingTop: 14 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#888", marginBottom: 10, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Devoirs en cours
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {devoirs.map((d) => (
              <div key={d.id} style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 14px",
                background: "#fafafa",
                borderRadius: 8,
                gap: 10,
                flexWrap: "wrap",
              }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span style={{
                    background: "#f0eaf8", color: "#5C3D6E",
                    padding: "1px 7px", borderRadius: 5,
                    fontSize: 11, fontWeight: 600, marginRight: 8,
                  }}>
                    {d.type}
                  </span>
                  <span style={{ fontSize: 14, color: "#1a1a1a" }}>{d.titre}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                  {d.dateLimite && (
                    <span style={{ fontSize: 12, color: "#888", whiteSpace: "nowrap" }}>
                      Limite : {new Date(d.dateLimite).toLocaleDateString("fr-FR")}
                    </span>
                  )}
                  {d.exerciseUrl && (
                    <Link
                      href={`${d.exerciseUrl}?devoirId=${d.id}`}
                      style={{
                        fontSize: 12, fontWeight: 700,
                        color: "#fff", background: ACCENT,
                        padding: "5px 12px", borderRadius: 6,
                        textDecoration: "none", whiteSpace: "nowrap",
                      }}
                    >
                      Faire l'exercice →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ color: "#999", fontSize: 13 }}>Aucun devoir assigné pour l'instant.</div>
      )}

      {corrections.length > 0 && (
        <div style={{ borderTop: "1px solid #f0ebe3", paddingTop: 14, marginTop: 16 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#888", marginBottom: 10, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Retours du professeur
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {corrections.map((c, i) => {
              const ok = (c.note ?? 0) >= 70;
              return (
                <div key={i} style={{
                  padding: "10px 14px",
                  background: "#fafafa",
                  borderRadius: 8,
                  border: "0.5px solid #e8e3db",
                }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 14, color: "#1a1a1a", fontWeight: 600 }}>{c.devoirTitre}</span>
                    {c.note != null && (
                      <span style={{ fontSize: 14, fontWeight: 700, color: ok ? "#0F6E56" : "#E53E3E" }}>{c.note}%</span>
                    )}
                  </div>
                  {c.commentaire && (
                    <div style={{ fontSize: 13, color: "#555", marginTop: 6, lineHeight: 1.6, fontStyle: "italic" }}>
                      « {c.commentaire} »
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

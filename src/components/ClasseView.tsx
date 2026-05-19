"use client";

import React, { useState } from "react";
import type { Classe, Eleve, Devoir } from "@/types/conservatoire";

const ACCENT = "#2D5A8E";

const COURS_NOMS: Record<number, string> = {
  1: "La gamme, les degrés et les intervalles",
  2: "Les accords",
  3: "Fonctions tonales et conduites de voix",
  4: "Cadences et progressions",
  5: "Emprunts et suites harmoniques classiques",
  6: "Construire une harmonisation",
  7: "La tonicisation",
  8: "Modulation par accord pivot",
  9: "Modulations avancées et pédales harmoniques",
  10: "Les modes de la gamme majeure",
  11: "Les extensions d'accords",
  12: "La substitution tritonique",
  13: "Le contrepoint à 2 voix",
  14: "L'harmonisation modale",
  15: "Les progressions jazz avancées",
  16: "La réharmonisation",
  17: "La phrase musicale et la forme",
  18: "Le développement motivique",
  19: "Introduction à l'orchestration",
  20: "Analyse des grands compositeurs classiques",
  21: "Analyse des compositeurs modernes et contemporains",
  22: "La réharmonisation avancée",
  23: "Composer dans le style des maîtres",
};

interface ProgressionEntry {
  userId: string;
  coursCompletés: number;
  exercicesReussis: number;
  scoreMoyen: number;
  derniereActivite: string;
}

interface Props {
  classe: Classe;
  eleves: Eleve[];
  devoirs: Devoir[];
  progression: ProgressionEntry[];
}

type Tab = "eleves" | "devoirs" | "progression";

export default function ClasseView({ classe, eleves: initialEleves, devoirs: initialDevoirs, progression }: Props) {
  const [tab, setTab] = useState<Tab>("eleves");
  const [devoirs, setDevoirs] = useState<Devoir[]>(initialDevoirs);
  const [showDevoirModal, setShowDevoirModal] = useState(false);
  const [newDevoir, setNewDevoir] = useState({ titre: "", type: "cours" as Devoir["type"], referenceId: "", dateLimite: "" });
  const [creating, setCreating] = useState(false);
  const [devoirError, setDevoirError] = useState("");

  async function createDevoir() {
    if (!newDevoir.titre.trim()) { setDevoirError("Le titre est requis."); return; }
    setCreating(true);
    setDevoirError("");
    try {
      const res = await fetch("/api/conservatoire/devoirs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          classeId: classe.id,
          titre: newDevoir.titre.trim(),
          type: newDevoir.type,
          referenceId: newDevoir.referenceId || undefined,
          dateLimite: newDevoir.dateLimite || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) { setDevoirError(data.error ?? "Erreur"); return; }
      setDevoirs(prev => [data.devoir, ...prev]);
      setShowDevoirModal(false);
      setNewDevoir({ titre: "", type: "cours", referenceId: "", dateLimite: "" });
    } catch {
      setDevoirError("Erreur réseau");
    } finally {
      setCreating(false);
    }
  }

  // Build progression map by userId
  const progMap: Record<string, ProgressionEntry> = {};
  for (const p of progression) progMap[p.userId] = p;

  // Top 3 most active students
  const top3 = [...progression]
    .sort((a, b) => b.exercicesReussis - a.exercicesReussis)
    .slice(0, 3);

  // Chart: nb students per cours completed count
  const buckets: Record<number, number> = {};
  for (const p of progression) {
    buckets[p.coursCompletés] = (buckets[p.coursCompletés] ?? 0) + 1;
  }

  const tabStyle = (t: Tab): React.CSSProperties => ({
    padding: "10px 22px",
    borderRadius: "8px 8px 0 0",
    border: "none",
    background: tab === t ? "#fff" : "transparent",
    color: tab === t ? ACCENT : "#666",
    fontWeight: tab === t ? 700 : 500,
    fontSize: 14,
    cursor: "pointer",
    borderBottom: tab === t ? "2px solid " + ACCENT : "2px solid transparent",
    fontFamily: "system-ui, sans-serif",
  });

  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "32px 20px", fontFamily: "system-ui, sans-serif" }}>

      {/* Class header */}
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: "#1a1a1a", margin: "0 0 6px", fontFamily: "Georgia, serif" }}>
          {classe.nom}
        </h1>
        {classe.description && (
          <p style={{ color: "#666", fontSize: 14, marginBottom: 8 }}>{classe.description}</p>
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
            Code : {classe.codeAcces}
          </span>
          <span style={{ fontSize: 13, color: "#999" }}>
            {classe.elevesCount} élève{classe.elevesCount !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", borderBottom: "2px solid #e8e2da", marginBottom: 0, gap: 2 }}>
        <button style={tabStyle("eleves")} onClick={() => setTab("eleves")}>👥 Élèves</button>
        <button style={tabStyle("devoirs")} onClick={() => setTab("devoirs")}>📋 Devoirs</button>
        <button style={tabStyle("progression")} onClick={() => setTab("progression")}>📈 Progression globale</button>
      </div>

      <div style={{ background: "#fff", border: "1px solid #e8e2da", borderTop: "none", borderRadius: "0 0 14px 14px", padding: "28px 24px" }}>

        {/* ── ONGLET ÉLÈVES ──────────────────────────────────────── */}
        {tab === "eleves" && (
          <>
            {initialEleves.length === 0 ? (
              <div style={{ textAlign: "center", padding: "40px 0", color: "#999" }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>👥</div>
                <p style={{ fontSize: 15 }}>Aucun élève n'a encore rejoint cette classe.</p>
                <p style={{ fontSize: 13, marginTop: 4 }}>
                  Partagez le code <strong style={{ fontFamily: "monospace", color: "#5C3D6E" }}>{classe.codeAcces}</strong> à vos élèves.
                </p>
              </div>
            ) : (
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                  <thead>
                    <tr style={{ borderBottom: "2px solid #e8e2da", textAlign: "left" }}>
                      {["Élève", "Cours complétés", "Score moyen", "Dernière activité"].map((h) => (
                        <th key={h} style={{ padding: "10px 14px", color: "#888", fontWeight: 600, fontSize: 12, letterSpacing: "0.04em", textTransform: "uppercase" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {initialEleves.map((e, i) => {
                      const prog = progMap[e.userId];
                      return (
                        <tr key={e.userId} style={{ background: i % 2 === 0 ? "#fff" : "#fafafa", borderBottom: "1px solid #f0ebe3" }}>
                          <td style={{ padding: "12px 14px" }}>
                            <div style={{ fontWeight: 600, color: "#1a1a1a" }}>{e.nom || "—"}</div>
                            <div style={{ fontSize: 12, color: "#999" }}>{e.email}</div>
                          </td>
                          <td style={{ padding: "12px 14px" }}>
                            <span style={{ fontWeight: 600, color: ACCENT }}>{prog?.coursCompletés ?? 0}</span>
                            <span style={{ color: "#ccc" }}> / 23</span>
                          </td>
                          <td style={{ padding: "12px 14px" }}>
                            {prog?.scoreMoyen != null && prog.scoreMoyen > 0
                              ? <span style={{ fontWeight: 600 }}>{prog.scoreMoyen}%</span>
                              : <span style={{ color: "#ccc" }}>—</span>
                            }
                          </td>
                          <td style={{ padding: "12px 14px", color: "#888", fontSize: 13 }}>
                            {prog?.derniereActivite
                              ? new Date(prog.derniereActivite).toLocaleDateString("fr-FR")
                              : "—"
                            }
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}

        {/* ── ONGLET DEVOIRS ─────────────────────────────────────── */}
        {tab === "devoirs" && (
          <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <h2 style={{ fontSize: 17, fontWeight: 700, margin: 0 }}>Devoirs assignés</h2>
              <button
                onClick={() => setShowDevoirModal(true)}
                style={{
                  background: ACCENT, color: "#fff",
                  border: "none", borderRadius: 8,
                  padding: "9px 18px", fontSize: 13, fontWeight: 700, cursor: "pointer",
                }}
              >
                + Créer un devoir
              </button>
            </div>

            {devoirs.length === 0 ? (
              <div style={{ textAlign: "center", padding: "36px 0", color: "#999" }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>📋</div>
                <p style={{ fontSize: 15 }}>Aucun devoir assigné pour l'instant.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {devoirs.map((d) => (
                  <div key={d.id} style={{
                    border: "1px solid #e8e2da",
                    borderRadius: 10,
                    padding: "16px 18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 10,
                  }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{d.titre}</div>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                        <span style={{
                          background: "#f0eaf8", color: "#5C3D6E",
                          padding: "2px 8px", borderRadius: 6, fontSize: 12, fontWeight: 600,
                        }}>
                          {d.type}
                        </span>
                        {d.dateLimite && (
                          <span style={{ fontSize: 13, color: "#888" }}>
                            Limite : {new Date(d.dateLimite).toLocaleDateString("fr-FR")}
                          </span>
                        )}
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 13, color: "#666" }}>
                        {d.soumissionsCount} soumission{d.soumissionsCount !== 1 ? "s" : ""}
                      </div>
                      <div style={{ fontSize: 13, color: d.corrigésCount < d.soumissionsCount ? "#BA7517" : "#27ae60" }}>
                        {d.corrigésCount} corrigé{d.corrigésCount !== 1 ? "s" : ""}
                        {d.corrigésCount < d.soumissionsCount && " ⚠"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* ── ONGLET PROGRESSION ─────────────────────────────────── */}
        {tab === "progression" && (
          <>
            <h2 style={{ fontSize: 17, fontWeight: 700, marginBottom: 24 }}>Progression globale de la classe</h2>

            {progression.length === 0 ? (
              <div style={{ textAlign: "center", padding: "36px 0", color: "#999" }}>
                <p style={{ fontSize: 15 }}>Pas encore de données de progression.</p>
              </div>
            ) : (
              <>
                {/* Bar chart: students by cours completed */}
                <div style={{ marginBottom: 36 }}>
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: "#888", marginBottom: 14, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    Élèves par nombre de cours complétés
                  </h3>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 100 }}>
                    {Array.from({ length: 24 }, (_, i) => i).map((n) => {
                      const count = buckets[n] ?? 0;
                      const maxCount = Math.max(...Object.values(buckets), 1);
                      const h = Math.max(count > 0 ? 8 : 2, Math.round((count / maxCount) * 90));
                      return (
                        <div key={n} title={`${n} cours : ${count} élève(s)`} style={{
                          flex: 1,
                          height: h,
                          background: count > 0 ? ACCENT : "#e8e2da",
                          borderRadius: "3px 3px 0 0",
                          cursor: count > 0 ? "help" : "default",
                          transition: "opacity 0.15s",
                        }} />
                      );
                    })}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4, fontSize: 10, color: "#bbb" }}>
                    <span>0 cours</span>
                    <span>23 cours</span>
                  </div>
                </div>

                {/* Top 3 */}
                {top3.length > 0 && (
                  <div style={{ marginBottom: 28 }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: "#888", marginBottom: 14, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                      🏆 Top 3 élèves les plus actifs
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {top3.map((p, i) => {
                        const eleve = initialEleves.find(e => e.userId === p.userId);
                        return (
                          <div key={p.userId} style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 14,
                            padding: "12px 16px",
                            background: i === 0 ? "#fef9e7" : "#fafafa",
                            borderRadius: 10,
                            border: `1px solid ${i === 0 ? "#f0c040" : "#e8e2da"}`,
                          }}>
                            <span style={{ fontSize: 20 }}>
                              {["🥇", "🥈", "🥉"][i]}
                            </span>
                            <div style={{ flex: 1 }}>
                              <div style={{ fontWeight: 600, fontSize: 14 }}>{eleve?.nom || eleve?.email || p.userId.slice(0, 8)}</div>
                            </div>
                            <div style={{ textAlign: "right", fontSize: 13, color: "#666" }}>
                              <div><strong style={{ color: ACCENT }}>{p.exercicesReussis}</strong> exercices réussis</div>
                              <div>{p.coursCompletés} cours · {p.scoreMoyen}% moy.</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Weakest students (lowest score) */}
                {progression.filter(p => p.scoreMoyen > 0).length > 0 && (
                  <div>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: "#888", marginBottom: 14, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                      ⚠ Points à renforcer
                    </h3>
                    <div style={{ fontSize: 14, color: "#666", lineHeight: 1.8 }}>
                      {progression
                        .filter(p => p.scoreMoyen > 0 && p.scoreMoyen < 70)
                        .map(p => {
                          const eleve = initialEleves.find(e => e.userId === p.userId);
                          return (
                            <div key={p.userId} style={{ padding: "6px 0", borderBottom: "1px solid #f0ebe3" }}>
                              <strong>{eleve?.nom || eleve?.email || p.userId.slice(0, 8)}</strong>
                              {" — score moyen "}<span style={{ color: "#c0392b", fontWeight: 600 }}>{p.scoreMoyen}%</span>
                            </div>
                          );
                        })}
                      {progression.filter(p => p.scoreMoyen > 0 && p.scoreMoyen < 70).length === 0 && (
                        <span style={{ color: "#27ae60" }}>✓ Tous les élèves sont au-dessus de 70%.</span>
                      )}
                    </div>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>

      {/* Create devoir modal */}
      {showDevoirModal && (
        <div style={{
          position: "fixed", inset: 0,
          background: "rgba(0,0,0,0.45)",
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 500, padding: 16,
        }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowDevoirModal(false); }}
        >
          <div style={{
            background: "#fff",
            borderRadius: 16,
            padding: "32px 28px",
            width: "100%",
            maxWidth: 480,
            boxShadow: "0 16px 60px rgba(0,0,0,0.2)",
          }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 24px", fontFamily: "Georgia, serif" }}>
              Créer un devoir
            </h2>

            <label style={{ display: "block", marginBottom: 14 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#444", display: "block", marginBottom: 6 }}>Titre *</span>
              <input
                autoFocus
                value={newDevoir.titre}
                onChange={(e) => setNewDevoir(p => ({ ...p, titre: e.target.value }))}
                placeholder="Ex : Analyser la cadence de Bach"
                style={{ width: "100%", boxSizing: "border-box", padding: "10px 12px", border: "1px solid #ccc", borderRadius: 8, fontSize: 14, outline: "none" }}
              />
            </label>

            <label style={{ display: "block", marginBottom: 14 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#444", display: "block", marginBottom: 6 }}>Type</span>
              <select
                value={newDevoir.type}
                onChange={(e) => setNewDevoir(p => ({ ...p, type: e.target.value as Devoir["type"], referenceId: "" }))}
                style={{ width: "100%", padding: "10px 12px", border: "1px solid #ccc", borderRadius: 8, fontSize: 14, outline: "none", background: "#fff" }}
              >
                <option value="cours">Cours</option>
                <option value="exercice">Exercice</option>
                <option value="composition">Composition</option>
              </select>
            </label>

            {newDevoir.type === "cours" && (
              <label style={{ display: "block", marginBottom: 14 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#444", display: "block", marginBottom: 6 }}>Cours de référence</span>
                <select
                  value={newDevoir.referenceId}
                  onChange={(e) => setNewDevoir(p => ({ ...p, referenceId: e.target.value }))}
                  style={{ width: "100%", padding: "10px 12px", border: "1px solid #ccc", borderRadius: 8, fontSize: 14, outline: "none", background: "#fff" }}
                >
                  <option value="">— Sélectionner un cours —</option>
                  {Object.entries(COURS_NOMS).map(([id, nom]) => (
                    <option key={id} value={id}>Cours {id} — {nom}</option>
                  ))}
                </select>
              </label>
            )}

            <label style={{ display: "block", marginBottom: 20 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#444", display: "block", marginBottom: 6 }}>Date limite (optionnel)</span>
              <input
                type="date"
                value={newDevoir.dateLimite}
                onChange={(e) => setNewDevoir(p => ({ ...p, dateLimite: e.target.value }))}
                style={{ width: "100%", boxSizing: "border-box", padding: "10px 12px", border: "1px solid #ccc", borderRadius: 8, fontSize: 14, outline: "none" }}
              />
            </label>

            {devoirError && <p style={{ color: "#c0392b", fontSize: 13, marginBottom: 12 }}>{devoirError}</p>}

            <div style={{ display: "flex", gap: 10 }}>
              <button
                onClick={() => { setShowDevoirModal(false); setDevoirError(""); }}
                style={{ flex: 1, padding: "11px", border: "1px solid #ccc", borderRadius: 8, background: "#fff", fontSize: 14, cursor: "pointer", color: "#444" }}
              >
                Annuler
              </button>
              <button
                onClick={createDevoir}
                disabled={creating}
                style={{ flex: 2, padding: "11px", border: "none", borderRadius: 8, background: ACCENT, color: "#fff", fontSize: 14, fontWeight: 700, cursor: creating ? "default" : "pointer", opacity: creating ? 0.7 : 1 }}
              >
                {creating ? "Création…" : "Créer le devoir"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

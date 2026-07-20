"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import type { Classe, Eleve, Devoir } from "@/types/conservatoire";
import { downloadClasseBilan } from "@/lib/pdf-bilan";
import { COURS_COUNT } from "@/lib/catalogue";

const ACCENT = "#2D5A8E";

const ERROR_LABELS: Record<string, string> = {
  parallel_fifth: "Quintes parallèles",
  parallel_octave: "Octaves parallèles",
  cross_relation: "Fausses relations",
  leading_tone: "Sensible non résolue",
  seventh: "Septième mal traitée",
  spacing: "Espacement excessif",
  crossing: "Croisement de voix",
  range: "Note hors tessiture",
  missing_accidental: "Altération manquante",
};

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

export interface ExerciseOption {
  id: string;
  title: string;
  cours: number;
  type: string;
}

interface SoumissionInfo {
  id: string;
  devoirId: string;
  eleveId: string;
  note: number | null;
  commentaire?: string | null;
  submittedAt: string;
  correctedAt?: string | null;
}

interface DetailCell {
  devoirTitre: string;
  eleveNom: string;
  soumission: SoumissionInfo;
}

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
  exercises: ExerciseOption[];
  erreursClasse?: Array<{ type: string; count: number }>;
}

type Tab = "eleves" | "devoirs" | "progression";

export default function ClasseView({ classe, eleves: initialEleves, devoirs: initialDevoirs, progression, exercises, erreursClasse = [] }: Props) {
  const params = useParams();
  const router = useRouter();
  const locale = (params?.locale as string) ?? "fr";
  const [tab, setTab] = useState<Tab>("eleves");

  // Import CSV / invitations
  const [showImport, setShowImport] = useState(false);
  const [importing, setImporting] = useState(false);
  const [importError, setImportError] = useState("");
  const [importResult, setImportResult] = useState<{ rattaches: number; invites: number; dejaMembres: number; total: number } | null>(null);
  const [pendingCount, setPendingCount] = useState(0);

  useEffect(() => {
    fetch(`/api/conservatoire/invitations?classeId=${classe.id}`)
      .then(r => r.json())
      .then(d => setPendingCount((d.invitations ?? []).length))
      .catch(() => {});
  }, [classe.id]);

  // Parse un CSV simple (email[,;]nom), en-tête optionnel
  function parseCSV(text: string): Array<{ email: string; nom: string }> {
    const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    const out: Array<{ email: string; nom: string }> = [];
    for (let i = 0; i < lines.length; i++) {
      const parts = lines[i].split(/[,;\t]/).map(p => p.trim());
      const emailIdx = parts.findIndex(p => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p));
      if (emailIdx === -1) continue; // ligne d'en-tête ou invalide
      const email = parts[emailIdx];
      const nom = parts.filter((_, j) => j !== emailIdx).join(" ").trim();
      out.push({ email, nom });
    }
    return out;
  }

  async function handleImportFile(file: File) {
    setImporting(true);
    setImportError("");
    setImportResult(null);
    try {
      const text = await file.text();
      const eleves = parseCSV(text);
      if (eleves.length === 0) { setImportError("Aucun e-mail valide trouvé dans le fichier."); return; }
      const res = await fetch("/api/conservatoire/invitations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ classeId: classe.id, eleves, locale }),
      });
      const data = await res.json();
      if (!res.ok) { setImportError(data.error ?? "Erreur"); return; }
      setImportResult(data);
      // Rafraîchit le compteur d'invitations et la liste des élèves (SSR)
      fetch(`/api/conservatoire/invitations?classeId=${classe.id}`)
        .then(r => r.json())
        .then(d => setPendingCount((d.invitations ?? []).length))
        .catch(() => {});
      router.refresh();
    } catch {
      setImportError("Erreur de lecture du fichier.");
    } finally {
      setImporting(false);
    }
  }
  const [devoirs, setDevoirs] = useState<Devoir[]>(initialDevoirs);
  const [showDevoirModal, setShowDevoirModal] = useState(false);
  const [newDevoir, setNewDevoir] = useState({ titre: "", type: "cours" as Devoir["type"], referenceId: "", dateLimite: "", dateDebut: "", statut: "publie" as "brouillon" | "publie", eleveId: "" });
  const [creating, setCreating] = useState(false);
  const [devoirError, setDevoirError] = useState("");
  const [exerciseSearch, setExerciseSearch] = useState("");

  const [soumissions, setSoumissions] = useState<SoumissionInfo[]>([]);
  const [loadingSoumissions, setLoadingSoumissions] = useState(false);
  const [detailCell, setDetailCell] = useState<DetailCell | null>(null);

  // Correction (note + commentaire) du modal de détail
  const [editNote, setEditNote] = useState<string>("");
  const [editComment, setEditComment] = useState<string>("");
  const [savingCorrection, setSavingCorrection] = useState(false);
  const [correctionError, setCorrectionError] = useState("");

  // Ouvre le modal de détail en pré-remplissant le formulaire de correction
  function openDetail(cell: DetailCell) {
    setDetailCell(cell);
    setEditNote(cell.soumission.note != null ? String(cell.soumission.note) : "");
    setEditComment(cell.soumission.commentaire ?? "");
    setCorrectionError("");
  }

  async function saveCorrection() {
    if (!detailCell) return;
    const noteNum = Number(editNote);
    if (editNote.trim() === "" || Number.isNaN(noteNum) || noteNum < 0 || noteNum > 100) {
      setCorrectionError("Entrez une note entre 0 et 100.");
      return;
    }
    setSavingCorrection(true);
    setCorrectionError("");
    try {
      const res = await fetch(`/api/conservatoire/soumissions/${detailCell.soumission.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ note: noteNum, commentaire: editComment.trim() || undefined }),
      });
      const data = await res.json();
      if (!res.ok) { setCorrectionError(data.error ?? "Erreur"); return; }
      const correctedAt = data.soumission?.correctedAt ?? new Date().toISOString();
      // Met à jour la matrice locale
      setSoumissions(prev => prev.map(s =>
        s.id === detailCell.soumission.id
          ? { ...s, note: noteNum, commentaire: editComment.trim() || null, correctedAt }
          : s
      ));
      setDetailCell(null);
    } catch {
      setCorrectionError("Erreur réseau");
    } finally {
      setSavingCorrection(false);
    }
  }

  useEffect(() => {
    if (tab === "devoirs") {
      setLoadingSoumissions(true);
      fetch(`/api/conservatoire/soumissions?classeId=${classe.id}`)
        .then(r => r.json())
        .then(d => { setSoumissions(d.soumissions ?? []); })
        .catch(() => {})
        .finally(() => setLoadingSoumissions(false));
    }
  }, [tab, classe.id]);

  const filteredExercises = useMemo(() => {
    if (!exerciseSearch.trim()) return exercises.slice(0, 60);
    const q = exerciseSearch.toLowerCase();
    return exercises.filter(e =>
      e.title.toLowerCase().includes(q) || `cours ${e.cours}`.includes(q) || e.type.includes(q)
    ).slice(0, 60);
  }, [exercises, exerciseSearch]);

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
          dateDebut: newDevoir.dateDebut || undefined,
          statut: newDevoir.statut,
          eleveId: newDevoir.eleveId || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) { setDevoirError(data.error ?? "Erreur"); return; }
      setDevoirs(prev => [data.devoir, ...prev]);
      setShowDevoirModal(false);
      setNewDevoir({ titre: "", type: "cours", referenceId: "", dateLimite: "", dateDebut: "", statut: "publie", eleveId: "" });
      setExerciseSearch("");
    } catch {
      setDevoirError("Erreur réseau");
    } finally {
      setCreating(false);
    }
  }

  async function publishDevoir(devoirId: string) {
    try {
      const res = await fetch(`/api/conservatoire/devoirs/${devoirId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ statut: "publie" }),
      });
      if (!res.ok) return;
      setDevoirs(prev => prev.map(d => d.id === devoirId ? { ...d, statut: "publie" } : d));
    } catch { /* silencieux */ }
  }

  // Nom d'un élève à partir de son id
  function eleveNomById(id: string): string {
    const e = initialEleves.find(x => x.userId === id);
    return e ? (e.nom || e.email) : id.slice(0, 8);
  }

  // Build progression map by userId
  const progMap: Record<string, ProgressionEntry> = {};
  for (const p of progression) progMap[p.userId] = p;

  // ── Alerte de décrochage : inactivité > 14 jours ──
  const INACTIVITE_JOURS = 14;
  function joursInactif(userId: string): number | null {
    const p = progMap[userId];
    if (!p?.derniereActivite) return null; // jamais connecté / aucune activité
    const diff = Date.now() - new Date(p.derniereActivite).getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }

  // ── Bilan PDF de la classe ──
  function exportBilanPDF() {
    downloadClasseBilan({
      classeNom: classe.nom,
      eleves: initialEleves.map((e) => {
        const p = progMap[e.userId];
        return {
          nom: e.nom || "",
          email: e.email || "",
          coursCompletes: p?.coursCompletés ?? 0,
          exercicesReussis: p?.exercicesReussis ?? 0,
          scoreMoyen: p?.scoreMoyen ?? 0,
          derniereActivite: p?.derniereActivite ? new Date(p.derniereActivite).toLocaleDateString("fr-FR") : "—",
        };
      }),
      erreurs: erreursClasse.map((e) => ({ label: ERROR_LABELS[e.type] ?? e.type, count: e.count })),
    });
  }

  // ── Export CSV des résultats de la classe ──
  function exportCSV() {
    const headers = ["Nom", "Email", "Cours complétés", "Exercices réussis", "Score moyen (%)", "Dernière activité"];
    const rows = initialEleves.map((e) => {
      const p = progMap[e.userId];
      return [
        e.nom || "",
        e.email || "",
        String(p?.coursCompletés ?? 0),
        String(p?.exercicesReussis ?? 0),
        p?.scoreMoyen ? String(p.scoreMoyen) : "",
        p?.derniereActivite ? new Date(p.derniereActivite).toLocaleDateString("fr-FR") : "",
      ];
    });
    const esc = (v: string) => `"${v.replace(/"/g, '""')}"`;
    const csv = [headers, ...rows].map((r) => r.map(esc).join(";")).join("\r\n");
    // BOM UTF-8 pour un affichage correct des accents dans Excel
    const blob = new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    const safeName = classe.nom.replace(/[^\p{L}\p{N}]+/gu, "_").replace(/^_+|_+$/g, "");
    a.download = `harmonia_${safeName || "classe"}_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  const top3 = [...progression]
    .sort((a, b) => b.exercicesReussis - a.exercicesReussis)
    .slice(0, 3);

  const buckets: Record<number, number> = {};
  for (const p of progression) {
    buckets[p.coursCompletés] = (buckets[p.coursCompletés] ?? 0) + 1;
  }

  const tabStyle = (t: Tab): React.CSSProperties => ({
    padding: "10px 22px",
    minHeight: 44,
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

  const selectedExercise = newDevoir.type === "exercice" && newDevoir.referenceId
    ? exercises.find(e => e.id === newDevoir.referenceId)
    : null;

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
          {initialEleves.length > 0 && (
            <button
              onClick={exportBilanPDF}
              style={{
                marginLeft: "auto",
                background: "#fff", color: ACCENT,
                border: `1px solid ${ACCENT}55`, borderRadius: 8,
                padding: "7px 14px", fontSize: 13, fontWeight: 600, cursor: "pointer",
              }}
            >
              📄 Bilan PDF
            </button>
          )}
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
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, gap: 10, flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                <span style={{ fontSize: 13, color: "#888" }}>
                  {initialEleves.length} élève{initialEleves.length !== 1 ? "s" : ""}
                </span>
                {pendingCount > 0 && (
                  <span style={{ fontSize: 12, color: "#BA7517", background: "#fdf0d5", border: "1px solid #f0c98055", borderRadius: 8, padding: "2px 10px", fontWeight: 600 }}>
                    {pendingCount} invitation{pendingCount !== 1 ? "s" : ""} en attente
                  </span>
                )}
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <button
                  onClick={() => { setShowImport(true); setImportResult(null); setImportError(""); }}
                  style={{ background: ACCENT, color: "#fff", border: "none", borderRadius: 8, padding: "8px 16px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}
                >
                  ⬆ Importer (CSV)
                </button>
                {initialEleves.length > 0 && (
                  <button
                    onClick={exportCSV}
                    style={{ background: "#fff", color: ACCENT, border: `1px solid ${ACCENT}55`, borderRadius: 8, padding: "8px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}
                  >
                    ⬇ Exporter en CSV
                  </button>
                )}
              </div>
            </div>
            {initialEleves.length === 0 ? (
              <div style={{ textAlign: "center", padding: "40px 0", color: "#999" }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>👥</div>
                <p style={{ fontSize: 15 }}>Aucun élève n'a encore rejoint cette classe.</p>
                <p style={{ fontSize: 13, marginTop: 4 }}>
                  Partagez le code <strong style={{ fontFamily: "monospace", color: "#5C3D6E" }}>{classe.codeAcces}</strong> à vos élèves.
                </p>
              </div>
            ) : (
              <>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                  <thead>
                    <tr style={{ borderBottom: "2px solid #e8e2da", textAlign: "left" }}>
                      {["Élève", "Cours complétés", "Score moyen", "Dernière activité", ""].map((h) => (
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
                            {(() => {
                              const jours = joursInactif(e.userId);
                              if (jours === null) {
                                return (
                                  <span style={{ color: "#E53E3E", fontWeight: 600 }} title="Aucune activité enregistrée">
                                    ⚠ Jamais connecté
                                  </span>
                                );
                              }
                              const decroche = jours >= INACTIVITE_JOURS;
                              return (
                                <span style={{ color: decroche ? "#BA7517" : "#888", fontWeight: decroche ? 600 : 400 }}
                                  title={decroche ? `Inactif depuis ${jours} jours` : undefined}>
                                  {decroche && "⚠ "}
                                  {new Date(prog!.derniereActivite).toLocaleDateString("fr-FR")}
                                </span>
                              );
                            })()}
                          </td>
                          <td style={{ padding: "12px 14px" }}>
                            <Link
                              href={`/${locale}/prof/eleve/${e.userId}?classeId=${classe.id}`}
                              style={{ fontSize: 12, color: ACCENT, textDecoration: "none", fontWeight: 600, whiteSpace: "nowrap" }}
                            >
                              Voir le détail →
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              </>
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
                  padding: "9px 18px", minHeight: 44, fontSize: 13, fontWeight: 700, cursor: "pointer",
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
              <>
                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
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
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
                          <span style={{ fontWeight: 700, fontSize: 15 }}>{d.titre}</span>
                          {d.statut === "brouillon" && (
                            <span style={{ background: "#fdf0d5", color: "#BA7517", padding: "1px 8px", borderRadius: 6, fontSize: 11, fontWeight: 700, border: "1px solid #f0c98055" }}>
                              Brouillon
                            </span>
                          )}
                        </div>
                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                          <span style={{
                            background: "#f0eaf8", color: "#5C3D6E",
                            padding: "2px 8px", borderRadius: 6, fontSize: 12, fontWeight: 600,
                          }}>
                            {d.type}
                          </span>
                          {d.eleveId && (
                            <span style={{ background: "#E6F1FB", color: "#185FA5", padding: "2px 8px", borderRadius: 6, fontSize: 12, fontWeight: 600 }}>
                              👤 {eleveNomById(d.eleveId)}
                            </span>
                          )}
                          {d.dateDebut && (
                            <span style={{ fontSize: 13, color: "#888" }}>
                              Début : {new Date(d.dateDebut).toLocaleDateString("fr-FR")}
                            </span>
                          )}
                          {d.dateLimite && (
                            <span style={{ fontSize: 13, color: "#888" }}>
                              Limite : {new Date(d.dateLimite).toLocaleDateString("fr-FR")}
                            </span>
                          )}
                        </div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        {d.statut === "brouillon" ? (
                          <button
                            onClick={() => publishDevoir(d.id)}
                            style={{ background: ACCENT, color: "#fff", border: "none", borderRadius: 8, padding: "7px 14px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}
                          >
                            Publier
                          </button>
                        ) : (
                          <>
                            <div style={{ fontSize: 13, color: "#666" }}>
                              {d.soumissionsCount} soumission{d.soumissionsCount !== 1 ? "s" : ""}
                            </div>
                            <div style={{ fontSize: 13, color: d.corrigésCount < d.soumissionsCount ? "#BA7517" : "#27ae60" }}>
                              {d.corrigésCount} corrigé{d.corrigésCount !== 1 ? "s" : ""}
                              {d.corrigésCount < d.soumissionsCount && " ⚠"}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Soumission matrix */}
                {initialEleves.length > 0 && (
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#888", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 14 }}>
                      Matrice des soumissions
                    </div>
                    {loadingSoumissions ? (
                      <div style={{ fontSize: 13, color: "#767676" }}>Chargement…</div>
                    ) : (
                      <div style={{ overflowX: "auto" }}>
                        <table style={{ borderCollapse: "collapse", fontSize: 12, width: "100%" }}>
                          <thead>
                            <tr style={{ borderBottom: "2px solid #e8e2da" }}>
                              <th style={{ padding: "8px 12px", textAlign: "left", color: "#888", fontWeight: 600, minWidth: 160 }}>Devoir</th>
                              {initialEleves.map(e => (
                                <th key={e.userId} style={{
                                  padding: "8px 10px", textAlign: "center", color: "#888",
                                  fontWeight: 600, whiteSpace: "nowrap", maxWidth: 90, overflow: "hidden",
                                  textOverflow: "ellipsis",
                                }}>
                                  {(e.nom || e.email.split("@")[0]).slice(0, 12)}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {devoirs.map(d => (
                              <tr key={d.id} style={{ borderBottom: "1px solid #f0ece6" }}>
                                <td style={{
                                  padding: "10px 12px", fontWeight: 500, color: "#333",
                                  maxWidth: 200, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                                }}>
                                  {d.titre}
                                </td>
                                {initialEleves.map(e => {
                                  const soum = soumissions.find(s => s.devoirId === d.id && s.eleveId === e.userId);
                                  if (!soum) {
                                    return (
                                      <td key={e.userId} style={{ textAlign: "center", padding: "10px 8px", color: "#ccc", fontSize: 16 }}>
                                        ○
                                      </td>
                                    );
                                  }
                                  const ok = (soum.note ?? 0) >= 70;
                                  return (
                                    <td
                                      key={e.userId}
                                      style={{ textAlign: "center", padding: "10px 8px", cursor: "pointer" }}
                                      title={`${e.nom || e.email}: ${soum.note != null ? soum.note + "%" : "soumis"}`}
                                      onClick={() => openDetail({
                                        devoirTitre: d.titre,
                                        eleveNom: e.nom || e.email,
                                        soumission: soum,
                                      })}
                                    >
                                      <span style={{ color: ok ? "#0F6E56" : "#E53E3E", fontWeight: 700, fontSize: 15 }}>
                                        {ok ? "✓" : "✗"}
                                      </span>
                                    </td>
                                  );
                                })}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <div style={{ marginTop: 10, fontSize: 11, color: "#767676" }}>
                          ✓ rendu ≥ 70% · ✗ rendu &lt; 70% · ○ pas encore rendu — cliquez sur une cellule pour les détails
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </>
        )}

        {/* ── ONGLET PROGRESSION ─────────────────────────────────── */}
        {tab === "progression" && (
          <>
            <h2 style={{ fontSize: 17, fontWeight: 700, marginBottom: 24 }}>Progression globale de la classe</h2>

            {erreursClasse.length > 0 && (
              <div style={{ marginBottom: 32 }}>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: "#888", marginBottom: 14, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  ⚠ Erreurs d'écriture les plus fréquentes
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {erreursClasse.map(({ type, count }) => (
                    <div key={type} style={{
                      display: "flex", alignItems: "center", gap: 8,
                      background: "#FFF5F5", border: "1px solid #FC818155",
                      borderRadius: 10, padding: "8px 14px",
                    }}>
                      <span style={{ fontSize: 13, color: "#333" }}>{ERROR_LABELS[type] ?? type}</span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#C53030" }}>{count}×</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {progression.length === 0 ? (
              <div style={{ textAlign: "center", padding: "36px 0", color: "#999" }}>
                <p style={{ fontSize: 15 }}>Pas encore de données de progression.</p>
              </div>
            ) : (
              <>
                {/* Bar chart */}
                <div style={{ marginBottom: 36 }}>
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: "#888", marginBottom: 14, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    Élèves par nombre de cours complétés
                  </h3>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 100 }}>
                    {Array.from({ length: COURS_COUNT + 1 }, (_, i) => i).map((n) => {
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
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4, fontSize: 10, color: "#767676" }}>
                    <span>0 cours</span>
                    <span>{COURS_COUNT} cours</span>
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
                            <span style={{ fontSize: 20 }}>{["🥇", "🥈", "🥉"][i]}</span>
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

                {/* Weakest students */}
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

      {/* ── Create devoir modal ──────────────────────────────────── */}
      {showDevoirModal && (
        <div style={{
          position: "fixed", inset: 0,
          background: "rgba(0,0,0,0.45)",
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 500, padding: 16,
        }}
          onClick={(e) => { if (e.target === e.currentTarget) { setShowDevoirModal(false); setDevoirError(""); } }}
        >
          <div style={{
            background: "#fff",
            borderRadius: 16,
            padding: "32px 28px",
            width: "100%",
            maxWidth: 520,
            maxHeight: "90vh",
            overflowY: "auto",
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

            {newDevoir.type === "exercice" && (
              <div style={{ marginBottom: 14 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#444", display: "block", marginBottom: 6 }}>Exercice de référence</span>
                {selectedExercise && (
                  <div style={{
                    fontSize: 12, color: "#0F6E56", background: "#E1F5EE",
                    padding: "6px 10px", borderRadius: 6, marginBottom: 8,
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                  }}>
                    <span>✓ Cours {selectedExercise.cours} — {selectedExercise.title}</span>
                    <button
                      onClick={() => setNewDevoir(p => ({ ...p, referenceId: "" }))}
                      style={{ background: "none", border: "none", color: "#888", cursor: "pointer", fontSize: 14, padding: 0 }}
                    >×</button>
                  </div>
                )}
                <input
                  type="text"
                  placeholder="Rechercher un exercice…"
                  value={exerciseSearch}
                  onChange={e => setExerciseSearch(e.target.value)}
                  style={{
                    width: "100%", boxSizing: "border-box",
                    padding: "8px 12px", border: "1px solid #ccc",
                    borderRadius: 8, fontSize: 13, outline: "none", marginBottom: 6,
                  }}
                />
                <div style={{
                  maxHeight: 200, overflowY: "auto",
                  border: "1px solid #e0dbd3", borderRadius: 8,
                  background: "#fafafa",
                }}>
                  {filteredExercises.length === 0 ? (
                    <div style={{ padding: "12px 14px", fontSize: 13, color: "#767676" }}>Aucun résultat</div>
                  ) : filteredExercises.map(ex => (
                    <div
                      key={ex.id}
                      onClick={() => { setNewDevoir(p => ({ ...p, referenceId: ex.id })); setExerciseSearch(""); }}
                      style={{
                        padding: "8px 12px",
                        cursor: "pointer",
                        background: newDevoir.referenceId === ex.id ? "#E6F1FB" : "transparent",
                        borderBottom: "0.5px solid #f0ece6",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <span style={{ fontSize: 10, fontWeight: 600, color: "#888", background: "#f0ece6", padding: "1px 5px", borderRadius: 4, whiteSpace: "nowrap" }}>
                        C{ex.cours}
                      </span>
                      <span style={{ fontSize: 13, color: "#1a1a1a" }}>{ex.title}</span>
                      <span style={{ fontSize: 10, color: "#767676", marginLeft: "auto" }}>{ex.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div style={{ display: "flex", gap: 12, marginBottom: 14 }}>
              <label style={{ display: "block", flex: 1 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#444", display: "block", marginBottom: 6 }}>Date de début (optionnel)</span>
                <input
                  type="date"
                  value={newDevoir.dateDebut}
                  onChange={(e) => setNewDevoir(p => ({ ...p, dateDebut: e.target.value }))}
                  style={{ width: "100%", boxSizing: "border-box", padding: "10px 12px", border: "1px solid #ccc", borderRadius: 8, fontSize: 14, outline: "none" }}
                />
              </label>
              <label style={{ display: "block", flex: 1 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#444", display: "block", marginBottom: 6 }}>Date limite (optionnel)</span>
                <input
                  type="date"
                  value={newDevoir.dateLimite}
                  onChange={(e) => setNewDevoir(p => ({ ...p, dateLimite: e.target.value }))}
                  style={{ width: "100%", boxSizing: "border-box", padding: "10px 12px", border: "1px solid #ccc", borderRadius: 8, fontSize: 14, outline: "none" }}
                />
              </label>
            </div>

            <label style={{ display: "block", marginBottom: 14 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#444", display: "block", marginBottom: 6 }}>Assigner à</span>
              <select
                value={newDevoir.eleveId}
                onChange={(e) => setNewDevoir(p => ({ ...p, eleveId: e.target.value }))}
                style={{ width: "100%", padding: "10px 12px", border: "1px solid #ccc", borderRadius: 8, fontSize: 14, outline: "none", background: "#fff" }}
              >
                <option value="">Toute la classe</option>
                {initialEleves.map(e => (
                  <option key={e.userId} value={e.userId}>{e.nom || e.email}</option>
                ))}
              </select>
            </label>

            <label style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20, cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={newDevoir.statut === "brouillon"}
                onChange={(e) => setNewDevoir(p => ({ ...p, statut: e.target.checked ? "brouillon" : "publie" }))}
                style={{ width: 16, height: 16, cursor: "pointer" }}
              />
              <span style={{ fontSize: 13, color: "#444" }}>
                Enregistrer comme <strong>brouillon</strong> (non visible par les élèves)
              </span>
            </label>

            {devoirError && <p style={{ color: "#c0392b", fontSize: 13, marginBottom: 12 }}>{devoirError}</p>}

            <div style={{ display: "flex", gap: 10 }}>
              <button
                onClick={() => { setShowDevoirModal(false); setDevoirError(""); setExerciseSearch(""); }}
                style={{ flex: 1, padding: "11px", border: "1px solid #ccc", borderRadius: 8, background: "#fff", fontSize: 14, cursor: "pointer", color: "#444" }}
              >
                Annuler
              </button>
              <button
                onClick={createDevoir}
                disabled={creating}
                style={{ flex: 2, padding: "11px", border: "none", borderRadius: 8, background: ACCENT, color: "#fff", fontSize: 14, fontWeight: 700, cursor: creating ? "default" : "pointer", opacity: creating ? 0.7 : 1 }}
              >
                {creating ? "Création…" : newDevoir.statut === "brouillon" ? "Créer le brouillon" : "Créer et publier"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Detail cell modal ────────────────────────────────────── */}
      {detailCell && (
        <div style={{
          position: "fixed", inset: 0,
          background: "rgba(0,0,0,0.45)",
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 500, padding: 16,
        }}
          onClick={(e) => { if (e.target === e.currentTarget) setDetailCell(null); }}
        >
          <div style={{
            background: "#fff", borderRadius: 14,
            padding: "28px 24px", width: "100%", maxWidth: 360,
            boxShadow: "0 12px 48px rgba(0,0,0,0.18)",
          }}>
            <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 16px", fontFamily: "Georgia, serif" }}>
              Corriger la soumission
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 14, color: "#444" }}>
              <div>
                <span style={{ fontWeight: 600, color: "#888", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.05em" }}>Devoir</span>
                <div style={{ marginTop: 2 }}>{detailCell.devoirTitre}</div>
              </div>
              <div>
                <span style={{ fontWeight: 600, color: "#888", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.05em" }}>Élève</span>
                <div style={{ marginTop: 2 }}>{detailCell.eleveNom}</div>
              </div>
              <div>
                <span style={{ fontWeight: 600, color: "#888", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.05em" }}>Remis le</span>
                <div style={{ marginTop: 2, color: "#666" }}>
                  {new Date(detailCell.soumission.submittedAt).toLocaleString("fr-FR")}
                </div>
              </div>

              <label style={{ display: "block" }}>
                <span style={{ fontWeight: 600, color: "#444", fontSize: 13, display: "block", marginBottom: 6 }}>Note (0–100) *</span>
                <input
                  type="number"
                  min={0}
                  max={100}
                  autoFocus
                  value={editNote}
                  onChange={(e) => setEditNote(e.target.value)}
                  placeholder="Ex : 85"
                  style={{ width: "100%", boxSizing: "border-box", padding: "10px 12px", border: "1px solid #ccc", borderRadius: 8, fontSize: 14, outline: "none" }}
                />
              </label>

              <label style={{ display: "block" }}>
                <span style={{ fontWeight: 600, color: "#444", fontSize: 13, display: "block", marginBottom: 6 }}>Commentaire (optionnel)</span>
                <textarea
                  value={editComment}
                  onChange={(e) => setEditComment(e.target.value)}
                  rows={4}
                  placeholder="Ex : Attention aux quintes parallèles entre basse et ténor à la mesure 3."
                  style={{ width: "100%", boxSizing: "border-box", padding: "10px 12px", border: "1px solid #ccc", borderRadius: 8, fontSize: 14, resize: "vertical", outline: "none" }}
                />
              </label>

              {detailCell.soumission.correctedAt && (
                <div style={{ fontSize: 12, color: "#0F6E56" }}>
                  ✓ Déjà corrigé le {new Date(detailCell.soumission.correctedAt).toLocaleDateString("fr-FR")}
                </div>
              )}
              {correctionError && <p style={{ color: "#c0392b", fontSize: 13, margin: 0 }}>{correctionError}</p>}
            </div>

            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              <button
                onClick={() => setDetailCell(null)}
                style={{ flex: 1, padding: "10px", border: "1px solid #ccc", borderRadius: 8, background: "#fff", fontSize: 14, cursor: "pointer", color: "#444" }}
              >
                Annuler
              </button>
              <button
                onClick={saveCorrection}
                disabled={savingCorrection}
                style={{ flex: 2, padding: "10px", border: "none", borderRadius: 8, background: ACCENT, color: "#fff", fontSize: 14, fontWeight: 700, cursor: savingCorrection ? "default" : "pointer", opacity: savingCorrection ? 0.7 : 1 }}
              >
                {savingCorrection ? "Enregistrement…" : "Enregistrer la correction"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Import CSV modal ──────────────────────────────────────── */}
      {showImport && (
        <div style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)",
          display: "flex", alignItems: "center", justifyContent: "center", zIndex: 500, padding: 16,
        }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowImport(false); }}
        >
          <div style={{ background: "#fff", borderRadius: 16, padding: "32px 28px", width: "100%", maxWidth: 460, boxShadow: "0 16px 60px rgba(0,0,0,0.2)" }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 8px", fontFamily: "Georgia, serif" }}>
              Importer des élèves (CSV)
            </h2>
            <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6, margin: "0 0 18px" }}>
              Fichier CSV avec une adresse e-mail par ligne (colonnes <strong>email</strong> et <strong>nom</strong> optionnel,
              séparateur <code>,</code> ou <code>;</code>). Chaque élève reçoit une invitation et rejoint
              automatiquement la classe en créant son compte avec cette adresse.
            </p>

            {importResult ? (
              <div style={{ background: "#e8f5e9", border: "1px solid #a5d6a7", borderRadius: 10, padding: "14px 16px", fontSize: 14, color: "#2e7d32", marginBottom: 18 }}>
                ✓ Import terminé : <strong>{importResult.rattaches}</strong> rattaché(s) immédiatement,{" "}
                <strong>{importResult.invites}</strong> invité(s) par e-mail
                {importResult.dejaMembres > 0 && <>, {importResult.dejaMembres} déjà membre(s)</>}.
              </div>
            ) : (
              <>
                <label style={{
                  display: "block", border: "1.5px dashed #c8bfa8", borderRadius: 10,
                  padding: "24px 16px", textAlign: "center", cursor: importing ? "default" : "pointer",
                  background: "#faf8f4", marginBottom: 14,
                }}>
                  <input
                    type="file"
                    accept=".csv,text/csv,text/plain"
                    disabled={importing}
                    onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImportFile(f); }}
                    style={{ display: "none" }}
                  />
                  <div style={{ fontSize: 28, marginBottom: 6 }}>📄</div>
                  <div style={{ fontSize: 14, color: "#555", fontWeight: 600 }}>
                    {importing ? "Import en cours…" : "Choisir un fichier CSV"}
                  </div>
                </label>
                {importError && <p style={{ color: "#c0392b", fontSize: 13, margin: "0 0 12px" }}>{importError}</p>}
              </>
            )}

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                onClick={() => setShowImport(false)}
                style={{ padding: "10px 18px", border: "1px solid #ccc", borderRadius: 8, background: "#fff", fontSize: 14, cursor: "pointer", color: "#444" }}
              >
                {importResult ? "Fermer" : "Annuler"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

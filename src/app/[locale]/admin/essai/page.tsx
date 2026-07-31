"use client";

import React, { useState, useEffect, useCallback } from "react";

interface TrialCodeRow {
  id: string;
  code: string;
  max_uses: number;
  uses_count: number;
  active: boolean;
  created_at: string;
}

export default function AdminEssaiPage() {
  const [codes, setCodes] = useState<TrialCodeRow[] | null>(null);
  const [erreurChargement, setErreurChargement] = useState<string | null>(null);
  const [nouveauCode, setNouveauCode] = useState("");
  const [nouveauMaxUses, setNouveauMaxUses] = useState(10);
  const [creation, setCreation] = useState(false);
  const [erreurCreation, setErreurCreation] = useState<string | null>(null);

  const charger = useCallback(async () => {
    const res = await fetch("/api/admin/trial-codes");
    if (!res.ok) {
      setErreurChargement(res.status === 403 ? "Accès refusé." : "Erreur de chargement.");
      return;
    }
    const data = await res.json();
    setCodes(data.codes);
  }, []);

  useEffect(() => { charger(); }, [charger]);

  const creerCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreation(true);
    setErreurCreation(null);
    try {
      const res = await fetch("/api/admin/trial-codes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: nouveauCode || undefined, max_uses: nouveauMaxUses }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErreurCreation(data.error ?? "Erreur lors de la création.");
        return;
      }
      setNouveauCode("");
      await charger();
    } finally {
      setCreation(false);
    }
  };

  const toggleActif = async (id: string, active: boolean) => {
    await fetch(`/api/admin/trial-codes/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ active: !active }),
    });
    await charger();
  };

  if (erreurChargement) {
    return <main style={{ padding: "3rem 1rem", textAlign: "center", fontFamily: "system-ui" }}>{erreurChargement}</main>;
  }

  return (
    <main style={{ minHeight: "100vh", background: "#f4f1ec", padding: "3rem 1rem", fontFamily: "system-ui" }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <h1 style={{ fontSize: 24, fontWeight: 400, fontFamily: "Georgia, serif", marginBottom: 24 }}>
          Codes d'essai
        </h1>

        <form onSubmit={creerCode} style={{ background: "#fff", border: "0.5px solid #e0dbd3", borderRadius: 10, padding: 20, marginBottom: 24, display: "flex", gap: 12, alignItems: "flex-end", flexWrap: "wrap" }}>
          <div>
            <label style={{ display: "block", fontSize: 12, color: "#5f5f5f", marginBottom: 4 }}>Code (vide = généré)</label>
            <input
              value={nouveauCode}
              onChange={(e) => setNouveauCode(e.target.value.toUpperCase())}
              placeholder="NEWSLETTER2026"
              style={{ padding: "8px 10px", borderRadius: 6, border: "1px solid #c8c4bc", fontFamily: "monospace" }}
            />
          </div>
          <div>
            <label style={{ display: "block", fontSize: 12, color: "#5f5f5f", marginBottom: 4 }}>Utilisations max</label>
            <input
              type="number"
              min={1}
              value={nouveauMaxUses}
              onChange={(e) => setNouveauMaxUses(Number(e.target.value))}
              style={{ padding: "8px 10px", borderRadius: 6, border: "1px solid #c8c4bc", width: 100 }}
            />
          </div>
          <button
            type="submit"
            disabled={creation}
            style={{ padding: "9px 18px", borderRadius: 6, border: "none", background: "#1a1a1a", color: "#fff", fontSize: 14, cursor: "pointer" }}
          >
            {creation ? "Création..." : "Créer"}
          </button>
          {erreurCreation && <div style={{ color: "#C53030", fontSize: 13 }}>{erreurCreation}</div>}
        </form>

        <div style={{ background: "#fff", border: "0.5px solid #e0dbd3", borderRadius: 10, overflow: "hidden" }}>
          {codes === null ? (
            <div style={{ padding: 20, fontSize: 13, color: "#767676" }}>Chargement…</div>
          ) : codes.length === 0 ? (
            <div style={{ padding: 20, fontSize: 13, color: "#767676" }}>Aucun code pour l'instant.</div>
          ) : (
            codes.map((c) => (
              <div key={c.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderBottom: "0.5px solid #eee" }}>
                <div>
                  <div style={{ fontFamily: "monospace", fontSize: 15, fontWeight: 600 }}>{c.code}</div>
                  <div style={{ fontSize: 12, color: "#767676" }}>{c.uses_count} / {c.max_uses} utilisations</div>
                </div>
                <button
                  onClick={() => toggleActif(c.id, c.active)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: "1px solid #c8c4bc", background: c.active ? "#0F6E56" : "#e0dbd3", color: c.active ? "#fff" : "#5f5f5f", fontSize: 12, cursor: "pointer" }}
                >
                  {c.active ? "Actif" : "Inactif"}
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}

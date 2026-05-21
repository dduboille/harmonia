"use client";
// src/components/ContactConservatoireForm.tsx
import React, { useState } from "react";

const ACCENT = "#2D5A8E";

export default function ContactConservatoireForm() {
  const [form, setForm] = useState({
    nom: "", email: "", etablissement: "", nbEleves: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [k]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact-conservatoire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div style={{ textAlign: "center", padding: "40px 0" }}>
        <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
        <h3 style={{
          fontSize: 20, fontWeight: 700, color: "#1a1a1a",
          marginBottom: 8, fontFamily: "Georgia, serif",
        }}>
          Demande envoyée
        </h3>
        <p style={{ fontSize: 15, color: "#666", fontFamily: "system-ui, sans-serif" }}>
          Nous vous répondrons sous 48 h ouvrées.
        </p>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "10px 14px", borderRadius: 8,
    border: "1px solid #d0c8bd", fontSize: 14,
    fontFamily: "system-ui, sans-serif", color: "#1a1a1a",
    background: "#fff", boxSizing: "border-box", outline: "none",
  };
  const labelStyle: React.CSSProperties = {
    fontSize: 12, fontWeight: 600, color: "#555",
    fontFamily: "system-ui, sans-serif", display: "block", marginBottom: 6,
  };

  return (
    <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <label htmlFor="cf-nom" style={labelStyle}>Nom *</label>
          <input id="cf-nom" required value={form.nom} onChange={set("nom")}
            style={inputStyle} placeholder="Sophie Martin" />
        </div>
        <div>
          <label htmlFor="cf-email" style={labelStyle}>Email *</label>
          <input id="cf-email" required type="email" value={form.email} onChange={set("email")}
            style={inputStyle} placeholder="sophie@conservatoire.fr" />
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <label htmlFor="cf-etablissement" style={labelStyle}>Établissement *</label>
          <input id="cf-etablissement" required value={form.etablissement} onChange={set("etablissement")}
            style={inputStyle} placeholder="Conservatoire de Lyon" />
        </div>
        <div>
          <label htmlFor="cf-nbEleves" style={labelStyle}>Nombre d'élèves</label>
          <input id="cf-nbEleves" value={form.nbEleves} onChange={set("nbEleves")}
            style={inputStyle} placeholder="45" />
        </div>
      </div>
      <div>
        <label htmlFor="cf-message" style={labelStyle}>Message *</label>
        <textarea id="cf-message" required value={form.message} onChange={set("message")}
          rows={4} style={{ ...inputStyle, resize: "vertical" }}
          placeholder="Décrivez votre projet pédagogique..." />
      </div>
      {status === "error" && (
        <p role="alert" style={{ color: "#dc2626", fontSize: 13, fontFamily: "system-ui, sans-serif", margin: 0 }}>
          Une erreur est survenue. Réessayez ou écrivez à contact@getharmonia.app
        </p>
      )}
      <button type="submit" disabled={status === "loading"} style={{
        background: ACCENT, color: "#fff", padding: "13px 28px",
        borderRadius: 8, fontWeight: 700, fontSize: 15,
        border: "none", cursor: status === "loading" ? "wait" : "pointer",
        fontFamily: "system-ui, sans-serif",
        opacity: status === "loading" ? 0.7 : 1, alignSelf: "flex-start",
      }}>
        {status === "loading" ? "Envoi…" : "Envoyer la demande →"}
      </button>
    </form>
  );
}

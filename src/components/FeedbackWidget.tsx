"use client";

import React, { useState } from "react";

type FeedbackType = "Bug" | "Suggestion" | "Question";

const TYPE_COLORS: Record<FeedbackType, string> = {
  Bug: "#c0392b",
  Suggestion: "#2E8B57",
  Question: "#185FA5",
};

export default function FeedbackWidget() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<FeedbackType>("Suggestion");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || sending) return;
    setSending(true);
    setError(null);
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, message, email: email || undefined }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? "Erreur serveur");
        return;
      }
      setSent(true);
    } catch {
      setError("Impossible d'envoyer. Vérifiez votre connexion.");
    } finally {
      setSending(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => { setSent(false); setMessage(""); setEmail(""); setError(null); }, 300);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Envoyer un feedback"
        style={{
          position: "fixed",
          bottom: 28,
          right: 24,
          zIndex: 1000,
          width: 44,
          height: 44,
          borderRadius: "50%",
          border: "0.5px solid #e0dbd3",
          background: "#fff",
          boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
        }}
      >
        💬
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          onClick={handleClose}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1001,
            background: "rgba(0,0,0,0.35)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            padding: "0 24px 84px 0",
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: "#fff",
              borderRadius: 14,
              border: "0.5px solid #e0dbd3",
              boxShadow: "0 8px 32px rgba(0,0,0,0.16)",
              width: 340,
              padding: "20px 20px 18px",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a" }}>Votre avis</span>
              <button onClick={handleClose} style={{ background: "none", border: "none", fontSize: 18, cursor: "pointer", color: "#aaa", lineHeight: 1 }}>✕</button>
            </div>

            {sent ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>✅</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#2E8B57" }}>Merci pour votre retour !</div>
                <div style={{ fontSize: 12, color: "#888", marginTop: 6 }}>Nous lisons chaque message.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Type selector */}
                <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
                  {(["Bug", "Suggestion", "Question"] as FeedbackType[]).map(t => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setType(t)}
                      style={{
                        flex: 1,
                        padding: "6px 4px",
                        borderRadius: 7,
                        border: `0.5px solid ${type === t ? TYPE_COLORS[t] : "#e0dbd3"}`,
                        background: type === t ? TYPE_COLORS[t] : "#faf8f4",
                        color: type === t ? "#fff" : "#555",
                        fontSize: 11,
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                {/* Message */}
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Décrivez le problème ou votre suggestion…"
                  rows={4}
                  required
                  style={{
                    width: "100%",
                    borderRadius: 8,
                    border: "0.5px solid #e0dbd3",
                    padding: "10px 12px",
                    fontSize: 13,
                    color: "#1a1a1a",
                    resize: "vertical",
                    outline: "none",
                    boxSizing: "border-box",
                    fontFamily: "system-ui, sans-serif",
                    lineHeight: 1.5,
                  }}
                />

                {/* Email */}
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Votre email (optionnel)"
                  style={{
                    width: "100%",
                    borderRadius: 8,
                    border: "0.5px solid #e0dbd3",
                    padding: "8px 12px",
                    fontSize: 12,
                    color: "#555",
                    outline: "none",
                    boxSizing: "border-box",
                    fontFamily: "system-ui, sans-serif",
                    marginTop: 8,
                  }}
                />

                {error && (
                  <div style={{ fontSize: 11, color: "#c0392b", marginTop: 8 }}>{error}</div>
                )}

                <button
                  type="submit"
                  disabled={!message.trim() || sending}
                  style={{
                    width: "100%",
                    marginTop: 12,
                    padding: "9px 0",
                    borderRadius: 8,
                    border: "none",
                    background: !message.trim() || sending ? "#f0ece6" : "#1a1a1a",
                    color: !message.trim() || sending ? "#aaa" : "#fff",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: !message.trim() || sending ? "not-allowed" : "pointer",
                  }}
                >
                  {sending ? "Envoi…" : "Envoyer"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

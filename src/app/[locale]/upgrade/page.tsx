"use client";

/**
 * src/app/[locale]/upgrade/page.tsx
 * Harmonia — Page de passage au plan Pro
 */

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

const PLANS = [
  {
    key: "pro_monthly",
    name: "Pro mensuel",
    price: "9€",
    period: "/mois",
    annual: false,
    features: [
      "Tous les cours (1 à 9)",
      "700+ exercices SATB",
      "24 tonalités × 4 positions",
      "Tous les niveaux",
      "Mises à jour continues",
    ],
  },
  {
    key: "pro_annual",
    name: "Pro annuel",
    price: "79€",
    period: "/an",
    annual: true,
    badge: "−29%",
    features: [
      "Tout le plan Pro mensuel",
      "Économie de 29€ par an",
      "Équivaut à 6,58€/mois",
    ],
  },
];

export default function UpgradePage() {
  const params  = useParams();
  const router  = useRouter();
  const locale  = (params?.locale as string) ?? "fr";
  const [loading, setLoading] = useState<string | null>(null);
  const [error,   setError]   = useState<string | null>(null);

  const handleCheckout = async (priceKey: string) => {
    setLoading(priceKey);
    setError(null);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceKey, locale }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError("Erreur lors de la création de la session.");
      }
    } catch {
      setError("Erreur réseau. Réessaie.");
    } finally {
      setLoading(null);
    }
  };

  return (
    <main style={{ minHeight: "100vh", background: "#f4f1ec", padding: "3rem 1rem" }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center" as const, marginBottom: "3rem" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "#BA7517", textTransform: "uppercase" as const, marginBottom: 8 }}>
            Passer au Pro
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 400, fontFamily: "Georgia, serif", color: "#1a1a1a", margin: "0 0 12px" }}>
            Accédez à tout Harmonia
          </h1>
          <p style={{ fontSize: 15, color: "#888", margin: 0, lineHeight: 1.7 }}>
            9 cours complets · 700+ exercices · 24 tonalités · feedback temps réel
          </p>
        </div>

        {/* Plans */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: "2rem" }}>
          {PLANS.map(plan => (
            <div key={plan.key} style={{
              background: plan.annual ? "#1a1a1a" : "#fff",
              border: `1px solid ${plan.annual ? "#1a1a1a" : "#e0dbd3"}`,
              borderRadius: 12,
              padding: "28px 24px",
              position: "relative" as const,
            }}>
              {plan.badge && (
                <div style={{
                  position: "absolute" as const,
                  top: -10, right: 16,
                  background: "#BA7517",
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: 700,
                  padding: "3px 10px",
                  borderRadius: 10,
                }}>
                  {plan.badge}
                </div>
              )}

              <div style={{ fontSize: 13, fontWeight: 600, color: plan.annual ? "#aaa" : "#888", marginBottom: 8 }}>
                {plan.name}
              </div>

              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 20 }}>
                <span style={{ fontSize: 36, fontWeight: 400, color: plan.annual ? "#fff" : "#1a1a1a", fontFamily: "Georgia, serif" }}>
                  {plan.price}
                </span>
                <span style={{ fontSize: 14, color: plan.annual ? "#666" : "#aaa" }}>
                  {plan.period}
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column" as const, gap: 8, marginBottom: 24 }}>
                {plan.features.map(f => (
                  <div key={f} style={{ display: "flex", gap: 8, fontSize: 13, alignItems: "flex-start" }}>
                    <span style={{ color: plan.annual ? "#9AE6B4" : "#0F6E56", flexShrink: 0 }}>✓</span>
                    <span style={{ color: plan.annual ? "#ccc" : "#555" }}>{f}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleCheckout(plan.key)}
                disabled={loading === plan.key}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: 6,
                  border: "none",
                  background: plan.annual ? "#BA7517" : "#1a1a1a",
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: loading === plan.key ? "wait" : "pointer",
                  opacity: loading === plan.key ? 0.7 : 1,
                }}
              >
                {loading === plan.key ? "Chargement..." : "Choisir ce plan"}
              </button>
            </div>
          ))}
        </div>

        {error && (
          <div style={{ padding: "12px 16px", background: "#FFF5F5", border: "0.5px solid #FC8181", borderRadius: 8, fontSize: 13, color: "#C53030", marginBottom: 16 }}>
            {error}
          </div>
        )}

        {/* Garanties */}
        <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 10, padding: "16px 20px", display: "flex", gap: 24, flexWrap: "wrap" as const, justifyContent: "center" }}>
          {["Annulation à tout moment", "Paiement sécurisé Stripe", "Aucun engagement"].map(g => (
            <div key={g} style={{ fontSize: 12, color: "#888", display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ color: "#0F6E56" }}>✓</span> {g}
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" as const, marginTop: 20 }}>
          <Link href={`/${locale}/dashboard`} style={{ fontSize: 12, color: "#bbb", textDecoration: "none" }}>
            ← Retour au dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}

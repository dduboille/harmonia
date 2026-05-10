"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const PLANS = [
  {
    key: null,
    name: "Gratuit",
    monthlyPrice: "0€",
    annualPrice: "0€",
    period: "",
    desc: "Pour découvrir l'harmonie tonale",
    bg: "#fff",
    border: "#e0dbd3",
    labelColor: "#888",
    priceColor: "#1a1a1a",
    periodColor: "#aaa",
    descColor: "#999",
    checkColor: "#0F6E56",
    featureColor: "#555",
    cta: "Commencer gratuitement",
    ctaBg: "transparent",
    ctaColor: "#1a1a1a",
    ctaBorder: "1px solid #c8c4bc",
    badge: null,
    badgeBg: "",
    features: [
      "Cours 1 à 3 complets",
      "Quiz illimité (cours 1–3)",
      "Exercices niveau 1",
      "Page des 24 tonalités",
      "Audio Salamander",
    ],
    notIncluded: [
      "Cours 4 à 19",
      "Exercices niveaux 2–3",
      "Fonctionnalités IA",
    ],
  },
  {
    key: "student",
    name: "Étudiant",
    monthlyPrice: "9€",
    annualPrice: "79€",
    monthlyKey: "student_monthly",
    annualKey: "student_annual",
    period: "/mois",
    annualPeriod: "/an",
    desc: "Tous les cours et exercices",
    bg: "#1a1a1a",
    border: "#1a1a1a",
    labelColor: "#aaa",
    priceColor: "#fff",
    periodColor: "#666",
    descColor: "#888",
    checkColor: "#9AE6B4",
    featureColor: "#ccc",
    cta: "Choisir Étudiant",
    ctaBg: "#BA7517",
    ctaColor: "#fff",
    ctaBorder: "none",
    badge: "Le plus populaire",
    badgeBg: "#BA7517",
    features: [
      "Tous les cours (1 à 19)",
      "Quiz illimité sur tous les cours",
      "Tous les exercices SATB",
      "24 tonalités × 4 positions",
      "Tous les niveaux de difficulté",
      "Mises à jour continues",
    ],
    notIncluded: [
      "Fonctionnalités IA (bientôt)",
    ],
  },
  {
    key: "pro",
    name: "Pro",
    monthlyPrice: "19€",
    annualPrice: "159€",
    monthlyKey: "pro_monthly",
    annualKey: "pro_annual",
    period: "/mois",
    annualPeriod: "/an",
    desc: "Étudiant + fonctionnalités IA",
    bg: "#FAEEDA",
    border: "#F6AD55",
    labelColor: "#BA7517",
    priceColor: "#1a1a1a",
    periodColor: "#BA7517",
    descColor: "#8a5c00",
    checkColor: "#BA7517",
    featureColor: "#5c3d00",
    cta: "Choisir Pro",
    ctaBg: "#1a1a1a",
    ctaColor: "#fff",
    ctaBorder: "none",
    badge: "Meilleure valeur",
    badgeBg: "#1a1a1a",
    features: [
      "Tout le plan Étudiant",
      "Correction IA de vos harmonisations",
      "Analyse stylistique automatique",
      "Suggestions contextuelles",
      "Accès prioritaire aux nouvelles IA",
    ],
    notIncluded: [],
    aiNote: "Fonctionnalités IA bientôt disponibles",
  },
];

export default function UpgradePage() {
  const params  = useParams();
  const locale  = (params?.locale as string) ?? "fr";
  const [annual,  setAnnual]  = useState(false);
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
      <div style={{ maxWidth: 960, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "#BA7517", textTransform: "uppercase", marginBottom: 8, fontFamily: "system-ui" }}>
            Tarifs
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 400, fontFamily: "Georgia, serif", color: "#1a1a1a", margin: "0 0 12px" }}>
            Choisissez votre rythme
          </h1>
          <p style={{ fontSize: 15, color: "#888", margin: "0 0 28px", lineHeight: 1.7, fontFamily: "system-ui" }}>
            19 cours · 700+ exercices · Feedback harmonique en temps réel
          </p>

          {/* Toggle mensuel/annuel */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "#fff", border: "0.5px solid #e0dbd3", borderRadius: 30, padding: "6px 8px", fontFamily: "system-ui" }}>
            <button
              onClick={() => setAnnual(false)}
              style={{ padding: "7px 20px", borderRadius: 24, border: "none", background: !annual ? "#1a1a1a" : "transparent", color: !annual ? "#fff" : "#888", fontSize: 13, fontWeight: 500, cursor: "pointer", transition: "all .15s" }}
            >
              Mensuel
            </button>
            <button
              onClick={() => setAnnual(true)}
              style={{ padding: "7px 20px", borderRadius: 24, border: "none", background: annual ? "#1a1a1a" : "transparent", color: annual ? "#fff" : "#888", fontSize: 13, fontWeight: 500, cursor: "pointer", transition: "all .15s", display: "flex", alignItems: "center", gap: 8 }}
            >
              Annuel
              <span style={{ background: "#0F6E56", color: "#fff", fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 10, letterSpacing: "0.05em" }}>
                −26%
              </span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: "2rem", alignItems: "start" }}>
          {PLANS.map(plan => {
            const priceKey = plan.key
              ? (annual ? (plan as any).annualKey : (plan as any).monthlyKey)
              : null;
            const isLoading = loading === priceKey;

            return (
              <div key={plan.name} style={{ background: plan.bg, border: `1px solid ${plan.border}`, borderRadius: 14, padding: "32px 28px", position: "relative" }}>

                {/* Badge */}
                {plan.badge && (
                  <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: plan.badgeBg, color: "#fff", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", padding: "4px 14px", borderRadius: 10, fontFamily: "system-ui", whiteSpace: "nowrap" }}>
                    {plan.badge}
                  </div>
                )}

                {/* Nom */}
                <div style={{ fontSize: 12, fontWeight: 700, color: plan.labelColor, fontFamily: "system-ui", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>
                  {plan.name}
                </div>

                {/* Prix */}
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 6 }}>
                  <span style={{ fontSize: 42, fontWeight: 400, color: plan.priceColor, fontFamily: "Georgia, serif", letterSpacing: "-0.02em" }}>
                    {annual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span style={{ fontSize: 14, color: plan.periodColor, fontFamily: "system-ui" }}>
                    {plan.key ? (annual ? (plan as any).annualPeriod : plan.period) : ""}
                  </span>
                </div>
                {plan.key && annual && (
                  <div style={{ fontSize: 12, color: plan.periodColor, fontFamily: "system-ui", marginBottom: 6 }}>
                    soit {plan.name === "Étudiant" ? "6,58€" : "13,25€"}/mois
                  </div>
                )}
                <p style={{ fontSize: 13, color: plan.descColor, margin: "0 0 24px", fontFamily: "system-ui", lineHeight: 1.5 }}>
                  {plan.desc}
                </p>

                {/* CTA */}
                {plan.key ? (
                  <button
                    onClick={() => priceKey && handleCheckout(priceKey)}
                    disabled={isLoading}
                    style={{ width: "100%", padding: "12px", borderRadius: 6, border: plan.ctaBorder, background: plan.ctaBg, color: plan.ctaColor, fontSize: 14, fontWeight: 500, cursor: isLoading ? "wait" : "pointer", opacity: isLoading ? 0.7 : 1, fontFamily: "system-ui", boxSizing: "border-box", marginBottom: 24 }}
                  >
                    {isLoading ? "Chargement..." : plan.cta}
                  </button>
                ) : (
                  <Link href={`/${locale}/cours`} style={{ display: "block", width: "100%", padding: "12px", borderRadius: 6, border: plan.ctaBorder, background: plan.ctaBg, color: plan.ctaColor, fontSize: 14, fontWeight: 500, fontFamily: "system-ui", textAlign: "center", textDecoration: "none", boxSizing: "border-box", marginBottom: 24 }}>
                    {plan.cta}
                  </Link>
                )}

                {/* Features */}
                <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display: "flex", gap: 9, fontSize: 13, alignItems: "flex-start", fontFamily: "system-ui" }}>
                      <span style={{ color: plan.checkColor, flexShrink: 0, marginTop: 1 }}>✓</span>
                      <span style={{ color: plan.featureColor, lineHeight: 1.4 }}>{f}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map(f => (
                    <div key={f} style={{ display: "flex", gap: 9, fontSize: 13, alignItems: "flex-start", fontFamily: "system-ui", opacity: 0.4 }}>
                      <span style={{ color: "#aaa", flexShrink: 0, marginTop: 1 }}>✗</span>
                      <span style={{ color: "#aaa", lineHeight: 1.4 }}>{f}</span>
                    </div>
                  ))}
                </div>

                {/* AI note */}
                {"aiNote" in plan && plan.aiNote && (
                  <div style={{ marginTop: 20, padding: "10px 12px", background: "rgba(186,117,23,0.12)", borderRadius: 8, fontSize: 12, color: "#8a5c00", fontFamily: "system-ui", lineHeight: 1.4, fontStyle: "italic" }}>
                    ✦ {plan.aiNote}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {error && (
          <div style={{ padding: "12px 16px", background: "#FFF5F5", border: "0.5px solid #FC8181", borderRadius: 8, fontSize: 13, color: "#C53030", marginBottom: 16, fontFamily: "system-ui" }}>
            {error}
          </div>
        )}

        {/* Garanties */}
        <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 10, padding: "16px 20px", display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
          {["Annulation à tout moment", "Paiement sécurisé Stripe", "Aucun engagement"].map(g => (
            <div key={g} style={{ fontSize: 12, color: "#888", display: "flex", alignItems: "center", gap: 6, fontFamily: "system-ui" }}>
              <span style={{ color: "#0F6E56" }}>✓</span> {g}
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 20 }}>
          <Link href={`/${locale}/dashboard`} style={{ fontSize: 12, color: "#bbb", textDecoration: "none", fontFamily: "system-ui" }}>
            ← Retour au dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}

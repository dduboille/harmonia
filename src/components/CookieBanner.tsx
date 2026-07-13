"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CONSENT_KEY, CONSENT_EVENT } from "@/components/ConsentGatedAnalytics";

const STORAGE_KEY = CONSENT_KEY;

interface Props {
  locale: string;
}

const COOKIES = [
  {
    icon: "🔒",
    name: "Authentification",
    provider: "Clerk",
    desc: "Maintiennent votre session de connexion et sécurisent votre compte. Indispensables au fonctionnement du service.",
    required: true,
  },
  {
    icon: "📊",
    name: "Analyse d'audience",
    provider: "Vercel Analytics",
    desc: "Mesurent les pages visitées de façon anonyme et agrégée, sans suivi individuel ni identifiant personnel.",
    required: false,
  },
  {
    icon: "💳",
    name: "Paiement sécurisé",
    provider: "Stripe",
    desc: "Chargés uniquement sur les pages d'abonnement. Permettent à Stripe de prévenir la fraude lors du paiement.",
    required: false,
  },
];

export default function CookieBanner({ locale }: Props) {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Small delay so the page renders before the banner slides in
      const t = setTimeout(() => setShow(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  // Second useEffect drives the slide-in: once show=true, trigger mounted=true on next frame
  useEffect(() => {
    if (show) {
      const t = requestAnimationFrame(() => setMounted(true));
      return () => cancelAnimationFrame(t);
    }
  }, [show]);

  function setConsent(value: "all" | "essential") {
    localStorage.setItem(STORAGE_KEY, value);
    // Prévient ConsentGatedAnalytics, qui monte (ou non) les scripts de mesure
    // sans attendre un rechargement de page.
    window.dispatchEvent(new Event(CONSENT_EVENT));
    dismiss();
  }

  function accept() {
    setConsent("all");
  }

  function refuse() {
    setConsent("essential");
  }

  function dismiss() {
    setMounted(false);
    setTimeout(() => setShow(false), 380);
  }

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Gestion des cookies"
      aria-modal="false"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9000,
        display: "flex",
        justifyContent: "center",
        padding: "0 12px 16px",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 640,
          background: "#fff",
          border: "0.5px solid #e0dbd3",
          borderRadius: 14,
          boxShadow: "0 8px 40px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.08)",
          pointerEvents: "all",
          transform: mounted ? "translateY(0)" : "translateY(110%)",
          opacity: mounted ? 1 : 0,
          transition: "transform 0.38s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.38s ease",
          fontFamily: "system-ui, sans-serif",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #2a2015 100%)",
          padding: "16px 22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 16 }}>🍪</span>
            <span style={{
              fontSize: 14, fontWeight: 700, color: "#fff",
              letterSpacing: "-0.01em",
            }}>
              Harmonia utilise des cookies
            </span>
          </div>
          <span style={{
            fontSize: 10, fontWeight: 700, color: "#BA7517",
            letterSpacing: "0.1em", textTransform: "uppercase",
            background: "rgba(186,117,23,0.15)",
            padding: "2px 8px", borderRadius: 6,
          }}>
            RGPD
          </span>
        </div>

        {/* Body */}
        <div style={{ padding: "18px 22px 0" }}>
          <p style={{
            fontSize: 13, color: "#666", lineHeight: 1.65,
            margin: "0 0 16px",
          }}>
            Nous utilisons des cookies pour faire fonctionner le service et, avec votre accord,
            mesurer l&apos;audience et sécuriser les paiements.{" "}
            <Link
              href={`/${locale}/confidentialite`}
              style={{ color: "#185FA5", textDecoration: "none", fontWeight: 600 }}
            >
              En savoir plus
            </Link>
          </p>

          {/* Cookie list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0, borderRadius: 10, border: "0.5px solid #e8e3db", overflow: "hidden", marginBottom: 18 }}>
            {COOKIES.map((c, i) => (
              <div
                key={c.provider}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  padding: "12px 16px",
                  background: i % 2 === 0 ? "#fff" : "#fafaf8",
                  borderBottom: i < COOKIES.length - 1 ? "0.5px solid #f0ece6" : "none",
                }}
              >
                <span style={{ fontSize: 18, flexShrink: 0, marginTop: 1 }}>{c.icon}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#1a1a1a" }}>{c.name}</span>
                    <span style={{
                      fontSize: 10, color: "#888",
                      background: "#f0ece6", padding: "1px 6px", borderRadius: 4,
                      fontWeight: 600, letterSpacing: "0.02em",
                    }}>
                      {c.provider}
                    </span>
                    {c.required && (
                      <span style={{
                        fontSize: 10, color: "#0F6E56",
                        background: "#E1F5EE", padding: "1px 6px", borderRadius: 4,
                        fontWeight: 700,
                      }}>
                        Nécessaire
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: 12, color: "#888", lineHeight: 1.55, margin: 0 }}>{c.desc}</p>
                </div>
                {/* Toggle indicator */}
                <div style={{
                  flexShrink: 0, marginTop: 2,
                  width: 32, height: 18, borderRadius: 9,
                  background: c.required ? "#0F6E56" : "#e0dbd3",
                  position: "relative",
                  transition: "background 0.2s",
                }}>
                  <div style={{
                    position: "absolute",
                    top: 2,
                    left: c.required ? 14 : 2,
                    width: 14, height: 14,
                    borderRadius: "50%",
                    background: "#fff",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.18)",
                    transition: "left 0.2s",
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div style={{
          padding: "0 22px 20px",
          display: "flex",
          gap: 10,
          justifyContent: "flex-end",
          flexWrap: "wrap",
        }}>
          <button
            onClick={refuse}
            style={{
              padding: "9px 18px",
              borderRadius: 8,
              border: "0.5px solid #e0dbd3",
              background: "#fff",
              color: "#555",
              fontSize: 13,
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "system-ui, sans-serif",
              transition: "border-color 0.15s",
              flexShrink: 0,
            }}
          >
            Refuser les non-essentiels
          </button>
          <button
            onClick={accept}
            style={{
              padding: "9px 22px",
              borderRadius: 8,
              border: "none",
              background: "#1a1a1a",
              color: "#fff",
              fontSize: 13,
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "system-ui, sans-serif",
              flexShrink: 0,
            }}
          >
            Accepter tout
          </button>
        </div>
      </div>
    </div>
  );
}

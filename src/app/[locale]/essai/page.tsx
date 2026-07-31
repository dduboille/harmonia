"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";

// `useSearchParams` exige un Suspense boundary en App Router (même convention
// que src/app/[locale]/rejoindre/page.tsx, qui lit aussi un ?code= — sans ce
// wrapper, le build échoue/avertit en production).
function EssaiInner() {
  const params = useParams();
  const locale = (params?.locale as string) ?? "fr";
  const searchParams = useSearchParams();

  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fromUrl = searchParams?.get("code");
    if (fromUrl) setCode(fromUrl.toUpperCase());
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/trial/redeem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: code.trim() }),
      });
      const data = await res.json();
      if (res.status === 401) {
        const retour = `/${locale}/essai?code=${encodeURIComponent(code.trim())}`;
        window.location.assign(`/${locale}/sign-in?redirect_url=${encodeURIComponent(retour)}`);
        return;
      }
      if (!res.ok) {
        setError(data.error ?? "Une erreur est survenue. Réessayez.");
        return;
      }
      setSuccess(true);
    } catch {
      setError("Erreur réseau. Vérifiez votre connexion et réessayez.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ minHeight: "100vh", background: "#f4f1ec", padding: "3rem 1rem" }}>
      <div style={{ maxWidth: 440, margin: "0 auto", fontFamily: "system-ui" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#9A5F12", textTransform: "uppercase", marginBottom: 8 }}>
            Essai gratuit
          </div>
          <h1 style={{ fontSize: "clamp(24px, 5vw, 32px)", fontWeight: 400, fontFamily: "Georgia, serif", color: "#1a1a1a", margin: "0 0 12px" }}>
            14 jours de Pro, sans carte bancaire
          </h1>
          <p style={{ fontSize: 14, color: "#5f5f5f", lineHeight: 1.6 }}>
            Entrez votre code d'essai pour débloquer tous les cours et les fonctionnalités IA.
          </p>
        </div>

        {success ? (
          <div style={{ background: "#fff", border: "0.5px solid #e0dbd3", borderRadius: 12, padding: "28px 24px", textAlign: "center" }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>✓</div>
            <div style={{ fontSize: 16, fontWeight: 500, color: "#1a1a1a", marginBottom: 8 }}>
              Votre essai Pro de 14 jours est activé.
            </div>
            <Link
              href={`/${locale}/dashboard`}
              style={{ display: "inline-block", marginTop: 8, padding: "10px 24px", borderRadius: 6, background: "#1a1a1a", color: "#fff", fontSize: 14, fontWeight: 500, textDecoration: "none" }}
            >
              Aller au tableau de bord
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ background: "#fff", border: "0.5px solid #e0dbd3", borderRadius: 12, padding: "24px" }}>
            <label htmlFor="code" style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#5f5f5f", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>
              Code d'essai
            </label>
            <input
              id="code"
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              placeholder="ABCD2FGH"
              style={{ width: "100%", padding: "12px 14px", borderRadius: 6, border: "1px solid #c8c4bc", fontSize: 16, fontFamily: "monospace", letterSpacing: "0.1em", boxSizing: "border-box", marginBottom: 16 }}
              autoFocus
            />
            {error && (
              <div style={{ padding: "10px 14px", background: "#FFF5F5", border: "0.5px solid #FC8181", borderRadius: 8, fontSize: 13, color: "#C53030", marginBottom: 16 }}>
                {error}
              </div>
            )}
            <button
              type="submit"
              disabled={loading || !code.trim()}
              style={{ width: "100%", padding: "12px", borderRadius: 6, border: "none", background: "#1a1a1a", color: "#fff", fontSize: 14, fontWeight: 500, cursor: loading ? "wait" : "pointer", opacity: loading || !code.trim() ? 0.7 : 1 }}
            >
              {loading ? "Vérification..." : "Activer mon essai"}
            </button>
          </form>
        )}

        <div style={{ textAlign: "center", marginTop: 20 }}>
          <Link href={`/${locale}/upgrade`} style={{ fontSize: 12, color: "#767676", textDecoration: "none" }}>
            Pas de code ? Voir les tarifs →
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function EssaiPage() {
  return (
    <Suspense fallback={null}>
      <EssaiInner />
    </Suspense>
  );
}

"use client";

import React, { useState, Suspense } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

const ACCENT = "#2D5A8E";

function RejoindreInner() {
  const params = useParams();
  const search = useSearchParams();
  const router = useRouter();
  const { isLoaded, isSignedIn } = useAuth();

  const locale = (params?.locale as string) ?? "fr";
  const code = (search.get("code") ?? "").toUpperCase().trim();

  const [joining, setJoining] = useState(false);
  const [error, setError] = useState("");
  const [joinedNom, setJoinedNom] = useState<string | null>(null);

  async function rejoindre() {
    if (!code) { setError("Code d'invitation manquant."); return; }
    setJoining(true);
    setError("");
    try {
      const res = await fetch("/api/conservatoire/eleves?action=rejoindre", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ codeAcces: code }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error ?? "Code invalide."); return; }
      setJoinedNom(data.classeNom ?? "");
    } catch {
      setError("Erreur réseau.");
    } finally {
      setJoining(false);
    }
  }

  const card: React.CSSProperties = {
    background: "#fff", border: "1px solid #e8e2da", borderRadius: 16,
    padding: "32px 28px", width: "100%", maxWidth: 420, textAlign: "center",
    boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
  };

  return (
    <main style={{ minHeight: "100vh", background: "#f4f1ec", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, fontFamily: "system-ui, sans-serif" }}>
      <div style={card}>
        <div style={{ fontSize: 40, marginBottom: 12 }}>🎓</div>
        <h1 style={{ fontSize: 22, fontWeight: 800, color: "#1a1a1a", margin: "0 0 8px", fontFamily: "Georgia, serif" }}>
          Rejoindre une classe
        </h1>

        {!code ? (
          <p style={{ color: "#c0392b", fontSize: 14 }}>Lien invalide : aucun code d'invitation.</p>
        ) : joinedNom !== null ? (
          <>
            <div style={{
              background: "#e8f5e9", border: "1px solid #a5d6a7", borderRadius: 10,
              padding: "14px 16px", fontSize: 14, color: "#2e7d32", margin: "12px 0 20px",
            }}>
              ✓ Vous avez rejoint la classe {joinedNom ? <strong>{joinedNom}</strong> : "avec succès"}.
            </div>
            <button
              onClick={() => router.push(`/${locale}/profil`)}
              style={{ background: ACCENT, color: "#fff", border: "none", borderRadius: 10, padding: "12px 24px", fontSize: 14, fontWeight: 700, cursor: "pointer" }}
            >
              Accéder à mon espace →
            </button>
          </>
        ) : (
          <>
            <p style={{ color: "#666", fontSize: 14, marginBottom: 8 }}>
              Vous êtes invité(e) à rejoindre une classe avec le code :
            </p>
            <div style={{
              fontFamily: "monospace", fontSize: 22, fontWeight: 700, letterSpacing: "0.15em",
              color: "#5C3D6E", background: "#f0eaf8", borderRadius: 10, padding: "10px 0", marginBottom: 20,
            }}>
              {code}
            </div>

            {!isLoaded ? (
              <p style={{ color: "#bbb", fontSize: 14 }}>Chargement…</p>
            ) : isSignedIn ? (
              <>
                {error && <p style={{ color: "#c0392b", fontSize: 13, marginBottom: 12 }}>{error}</p>}
                <button
                  onClick={rejoindre}
                  disabled={joining}
                  style={{ background: ACCENT, color: "#fff", border: "none", borderRadius: 10, padding: "12px 24px", fontSize: 14, fontWeight: 700, cursor: joining ? "default" : "pointer", opacity: joining ? 0.7 : 1, width: "100%" }}
                >
                  {joining ? "Adhésion…" : "Rejoindre cette classe"}
                </button>
              </>
            ) : (
              <>
                <p style={{ color: "#888", fontSize: 13, marginBottom: 14 }}>
                  Connectez-vous ou créez un compte pour rejoindre la classe.
                </p>
                <Link
                  href={`/${locale}/sign-in?redirect_url=${encodeURIComponent(`/${locale}/rejoindre?code=${code}`)}`}
                  style={{ display: "block", background: ACCENT, color: "#fff", borderRadius: 10, padding: "12px 24px", fontSize: 14, fontWeight: 700, textDecoration: "none", marginBottom: 10 }}
                >
                  Se connecter
                </Link>
                <Link
                  href={`/${locale}/sign-up?redirect_url=${encodeURIComponent(`/${locale}/rejoindre?code=${code}`)}`}
                  style={{ display: "block", background: "#fff", color: ACCENT, border: `1px solid ${ACCENT}`, borderRadius: 10, padding: "12px 24px", fontSize: 14, fontWeight: 700, textDecoration: "none" }}
                >
                  Créer un compte
                </Link>
              </>
            )}
          </>
        )}
      </div>
    </main>
  );
}

export default function RejoindrePage() {
  return (
    <Suspense fallback={null}>
      <RejoindreInner />
    </Suspense>
  );
}

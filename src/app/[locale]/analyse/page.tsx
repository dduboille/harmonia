"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const TOOLS = [
  {
    href: "analyse-partition",
    icon: "◎",
    title: "Analyser",
    desc: "Analyse harmonique de partition — chiffrage automatique, détection de cadences.",
    pro: true,
  },
  {
    href: "studio",
    icon: "✎",
    title: "Studio de composition",
    desc: "Importez votre composition MusicXML — partition gravée, lecture audio et analyse harmonique.",
    pro: true,
  },
  {
    href: "assistant",
    icon: "✦",
    title: "Assistant IA",
    desc: "Assistant musical alimenté par IA — questions d'harmonie, contrepoint, orchestration.",
    pro: true,
  },
];

export default function AnalyseHub() {
  const params = useParams();
  const locale = (params?.locale as string) ?? "fr";

  return (
    <main style={{
      minHeight: "100vh",
      background: "#FAF9F7",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "64px 24px 80px",
      fontFamily: "system-ui, sans-serif",
    }}>
      <div style={{ maxWidth: 680, width: "100%" }}>
        <div style={{ marginBottom: 8 }}>
          <span style={{
            fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
            color: "#5C3D6E", textTransform: "uppercase",
          }}>
            Outils avancés
          </span>
        </div>
        <h1 style={{
          fontSize: 36, fontWeight: 700, color: "#1a1a1a",
          letterSpacing: "-0.02em", margin: "0 0 8px",
        }}>
          Analyse
        </h1>
        <p style={{ fontSize: 15, color: "#666", margin: "0 0 48px", lineHeight: 1.5 }}>
          Outils d'analyse avancés réservés aux abonnés Pro.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {TOOLS.map(tool => (
            <Link
              key={tool.href}
              href={`/${locale}/${tool.href}`}
              style={{ textDecoration: "none" }}
            >
              <div style={{
                background: "#fff",
                border: "1px solid #e8e4df",
                borderRadius: 16,
                padding: "24px 28px",
                display: "flex",
                alignItems: "center",
                gap: 20,
                cursor: "pointer",
                position: "relative",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#5C3D6E";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(92,61,110,0.10)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#e8e4df";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {tool.pro && (
                  <span style={{
                    position: "absolute", top: 12, right: 16,
                    background: "#E9C97E", color: "#3a2547",
                    fontSize: 8, fontWeight: 800,
                    padding: "2px 5px", borderRadius: 4,
                    letterSpacing: "0.05em",
                  }}>
                    PRO
                  </span>
                )}
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: "#F0EBF8",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 22, flexShrink: 0,
                }}>
                  {tool.icon}
                </div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#1a1a1a", marginBottom: 4 }}>
                    {tool.title}
                  </div>
                  <div style={{ fontSize: 13, color: "#666", lineHeight: 1.4 }}>
                    {tool.desc}
                  </div>
                </div>
                <div style={{ marginLeft: "auto", color: "#5C3D6E", fontSize: 18, opacity: 0.5 }}>
                  →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

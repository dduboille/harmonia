"use client";

/**
 * src/app/[locale]/tonalites/page.tsx
 * Harmonia — Page de reference des 24 tonalites
 * Design : encyclopedie musicale — sobre, dense, precis
 */

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  MAJOR_KEYS, MINOR_KEYS, ALL_KEYS, GLOBAL_TIPS,
  type Tonalite, type DiatonicChord,
} from "@/data/tonalites";

// ─── Couleurs fonctions ───────────────────────────────────────────────────────

const FN_COLOR: Record<string, string> = {
  T:  "#0F6E56", SD: "#534AB7", D: "#BA7517", "?": "#999",
};
const FN_BG: Record<string, string> = {
  T: "#E1F5EE", SD: "#EEEDFE", D: "#FAEEDA", "?": "#f5f5f5",
};
const QUALITY_SYMBOL: Record<string, string> = {
  major: "M", minor: "m", diminished: "°", dominant7: "7",
  major7: "M7", minor7: "m7", halfDim: "ø", augmented: "+",
};

// ─── Composant carte tonalité ─────────────────────────────────────────────────

function TonaliteCard({
  tonalite: t,
  isSelected,
  onClick,
}: {
  tonalite: Tonalite;
  isSelected: boolean;
  onClick: () => void;
}) {
  const accentColor = t.mode === "major" ? "#185FA5" : "#534AB7";
  const alterCount  = t.sharps > 0 ? t.sharps : t.flats;
  const alterSymbol = t.sharps > 0 ? "♯" : t.flats > 0 ? "♭" : "○";

  return (
    <button onClick={onClick} style={{
      width: "100%",
      padding: "10px 12px",
      border: `1px solid ${isSelected ? accentColor : "#e8e3db"}`,
      borderRadius: 10,
      background: isSelected ? accentColor : "#fff",
      color: isSelected ? "#fff" : "#333",
      cursor: "pointer",
      transition: "all .15s",
      textAlign: "left" as const,
      display: "flex",
      flexDirection: "column" as const,
      gap: 4,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 15, fontWeight: 600, fontFamily: "Georgia, serif" }}>
          {t.rootSolfege}
        </span>
        <span style={{
          fontSize: 10,
          fontWeight: 600,
          color: isSelected ? "rgba(255,255,255,0.7)" : "#bbb",
        }}>
          {alterCount > 0 ? `${alterCount}${alterSymbol}` : alterSymbol}
        </span>
      </div>
      <div style={{ fontSize: 11, color: isSelected ? "rgba(255,255,255,0.8)" : "#888" }}>
        {t.mode === "major" ? "majeur" : "mineur"}
      </div>
    </button>
  );
}

// ─── Détail d'une tonalité ────────────────────────────────────────────────────

function TonaliteDetail({ t }: { t: Tonalite }) {
  const accentColor = t.mode === "major" ? "#185FA5" : "#534AB7";
  const accentBg    = t.mode === "major" ? "#E6F1FB" : "#EEEDFE";
  const relative    = ALL_KEYS.find(k =>
    k.id === (t.mode === "major" ? t.relativeMinor : t.relativeMajor)
  );

  return (
    <div style={{ display: "flex", flexDirection: "column" as const, gap: 20 }}>

      {/* Header */}
      <div style={{
        background: accentColor,
        borderRadius: 12,
        padding: "20px 24px",
        color: "#fff",
      }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", opacity: 0.7, marginBottom: 4 }}>
          {t.mode === "major" ? "TONALITE MAJEURE" : "TONALITE MINEURE"}
        </div>
        <h2 style={{ fontSize: 28, fontWeight: 500, margin: "0 0 4px", fontFamily: "Georgia, serif" }}>
          {t.label}
        </h2>
        <div style={{ fontSize: 13, opacity: 0.8 }}>
          {t.root} {t.mode === "major" ? "major" : "minor"}
          {t.sharps > 0 && ` · ${t.sharps} dièse${t.sharps > 1 ? "s" : ""} : ${t.keySignatureNotes.join(" ")}`}
          {t.flats  > 0 && ` · ${t.flats} bémol${t.flats > 1 ? "s" : ""} : ${t.keySignatureNotes.join(" ")}`}
          {t.sharps === 0 && t.flats === 0 && " · Pas d'altération à la clé"}
        </div>
      </div>

      {/* Gamme */}
      <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 10, padding: "16px 20px" }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#aaa", marginBottom: 12 }}>
          GAMME {t.mode === "major" ? "MAJEURE" : "MINEURE HARMONIQUE"}
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const }}>
          {t.scale.map((note, i) => {
            const isAltered = t.keySignatureNotes.some(a => note.includes(a[0]) && note.length > 1)
              || (t.mode === "minor" && i === 6); // sensible élevée
            return (
              <div key={i} style={{
                display: "flex",
                flexDirection: "column" as const,
                alignItems: "center",
                gap: 3,
              }}>
                <div style={{
                  width: 44, height: 44,
                  borderRadius: 10,
                  background: i === 0 ? accentColor : isAltered ? "#FAEEDA" : "#f4f1ec",
                  color: i === 0 ? "#fff" : isAltered ? "#BA7517" : "#333",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 600, fontFamily: "monospace",
                  border: `1px solid ${i === 0 ? accentColor : isAltered ? "#F6AD55" : "#e0dbd3"}`,
                }}>
                  {note}
                </div>
                <div style={{ fontSize: 9, color: "#bbb", fontWeight: 500 }}>
                  {["I","II","III","IV","V","VI","VII"][i]}
                </div>
              </div>
            );
          })}
        </div>

        {/* Solfège */}
        <div style={{ marginTop: 10, fontSize: 12, color: "#888", fontStyle: "italic" }}>
          {t.scaleSolfege.join(" – ")}
        </div>

        {/* Sensible info en mineur */}
        {t.mode === "minor" && (
          <div style={{ marginTop: 10, padding: "6px 10px", background: "#FAEEDA", borderRadius: 6, fontSize: 12, color: "#744210" }}>
            <strong>Sensible</strong> : {t.scale[6]} — élevée d'un ½ ton par rapport à la gamme mineure naturelle
          </div>
        )}
      </div>

      {/* Accords diatoniques */}
      <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 10, padding: "16px 20px" }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#aaa", marginBottom: 12 }}>
          ACCORDS DIATONIQUES
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 6 }}>
          {t.chords.map((chord) => (
            <div key={chord.degree} style={{
              display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 4,
            }}>
              <div style={{ fontSize: 10, color: "#aaa", fontWeight: 500 }}>{chord.degree}</div>
              <div style={{
                width: "100%",
                padding: "6px 4px",
                borderRadius: 8,
                background: FN_BG[chord.function],
                border: `0.5px solid ${FN_COLOR[chord.function]}30`,
                textAlign: "center" as const,
                fontSize: 12,
                fontWeight: 600,
                color: FN_COLOR[chord.function],
                fontFamily: "monospace",
              }}>
                {chord.name}
              </div>
              <div style={{
                fontSize: 9, fontWeight: 600,
                color: FN_COLOR[chord.function],
                background: FN_BG[chord.function],
                padding: "1px 5px", borderRadius: 4,
              }}>
                {chord.function}
              </div>
            </div>
          ))}
        </div>

        {/* Légende */}
        <div style={{ display: "flex", gap: 12, marginTop: 12, fontSize: 11 }}>
          {Object.entries({ T:"Tonique", SD:"Sous-dom.", D:"Dominante" }).map(([fn, label]) => (
            <span key={fn} style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ width: 8, height: 8, borderRadius: 2, background: FN_COLOR[fn], display: "inline-block" }} />
              <span style={{ color: "#888" }}>{label}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Armure + triton */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {/* Armure */}
        <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 10, padding: "14px 16px" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#aaa", marginBottom: 8 }}>
            ARMURE
          </div>
          {t.keySignatureNotes.length === 0 ? (
            <div style={{ fontSize: 13, color: "#555" }}>Aucune altération</div>
          ) : (
            <div style={{ display: "flex", gap: 5, flexWrap: "wrap" as const }}>
              {t.keySignatureNotes.map(note => (
                <span key={note} style={{
                  fontSize: 13, fontFamily: "monospace", fontWeight: 600,
                  color: t.sharps > 0 ? "#BA7517" : "#185FA5",
                  background: t.sharps > 0 ? "#FAEEDA" : "#E6F1FB",
                  padding: "3px 8px", borderRadius: 6,
                }}>
                  {note}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Triton + tonalité relative */}
        <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 10, padding: "14px 16px" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#aaa", marginBottom: 8 }}>
            TRITON FONCTIONNEL
          </div>
          {(() => {
            const iv = t.chords[3];
            const vii = t.chords[6];
            // Extraire les fondamentales
            const ivNote = iv.name.replace(/m|dim|7|M7|ø/g,"");
            const viiNote = vii.name.replace(/m|dim|7|M7|ø/g,"");
            return (
              <div style={{ fontSize: 13, fontFamily: "monospace", color: "#BA7517", fontWeight: 600 }}>
                {ivNote} – {viiNote}
                <div style={{ fontSize: 11, color: "#888", fontFamily: "system-ui", fontWeight: 400, marginTop: 4 }}>
                  IV ({ivNote}) et VII ({viiNote})
                </div>
              </div>
            );
          })()}
        </div>
      </div>

      {/* Relative + parallèle */}
      {relative && (
        <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 10, padding: "14px 16px" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#aaa", marginBottom: 8 }}>
            TONALITES LIEES
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{
              flex: 1, padding: "8px 12px", borderRadius: 8,
              background: relative.mode === "major" ? "#E6F1FB" : "#EEEDFE",
              fontSize: 13,
            }}>
              <div style={{ fontSize: 10, color: "#aaa", marginBottom: 2 }}>RELATIVE</div>
              <div style={{ fontWeight: 600, color: relative.mode === "major" ? "#185FA5" : "#534AB7" }}>
                {relative.label}
              </div>
              <div style={{ fontSize: 11, color: "#888" }}>Même armure</div>
            </div>
            {t.parallel && (
              <div style={{
                flex: 1, padding: "8px 12px", borderRadius: 8,
                background: "#f4f1ec",
                fontSize: 13,
              }}>
                <div style={{ fontSize: 10, color: "#aaa", marginBottom: 2 }}>HOMONYME</div>
                <div style={{ fontWeight: 600, color: "#555" }}>
                  {ALL_KEYS.find(k => k.id === t.parallel)?.label ?? t.parallel}
                </div>
                <div style={{ fontSize: 11, color: "#888" }}>Meme tonique</div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Astuces */}
      {t.tips.length > 0 && (
        <div style={{ background: "#FAEEDA", border: "0.5px solid #F6AD55", borderRadius: 10, padding: "14px 16px" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#BA7517", marginBottom: 8 }}>
            ASTUCES
          </div>
          <ul style={{ margin: 0, padding: "0 0 0 16px", display: "flex", flexDirection: "column" as const, gap: 4 }}>
            {t.tips.map((tip, i) => (
              <li key={i} style={{ fontSize: 13, color: "#744210", lineHeight: 1.5 }}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// ─── Page principale ──────────────────────────────────────────────────────────

export default function TonalitesPage() {
  const params = useParams();
  const locale = (params?.locale as string) ?? "fr";

  const [mode,     setMode]     = useState<"major" | "minor">("major");
  const [selected, setSelected] = useState<string>("C");
  const [showTips, setShowTips] = useState(false);

  const keys        = mode === "major" ? MAJOR_KEYS : MINOR_KEYS;
  const selectedKey = ALL_KEYS.find(k => k.id === selected) ?? MAJOR_KEYS[0];

  // Si la sélection courante n'est pas dans le mode actif, bascule sur la tonique du mode
  const effectiveKey = selectedKey.mode === mode
    ? selectedKey
    : (mode === "major" ? MAJOR_KEYS[0] : MINOR_KEYS[0]);

  return (
    <main style={{ minHeight: "100vh", background: "#f4f1ec", padding: "2.5rem 1rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "#BA7517", textTransform: "uppercase" as const, marginBottom: 6 }}>
            Harmonia · Reference
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 500, color: "#1a1a1a", margin: "0 0 6px", fontFamily: "Georgia, serif" }}>
            Les 24 tonalites
          </h1>
          <p style={{ fontSize: 14, color: "#888", margin: "0 0 16px", lineHeight: 1.7, maxWidth: 560 }}>
            Reference complete — gammes, armures, accords diatoniques, fonctions tonales et tritons.
            Selectionne une tonalite pour voir son detail complet.
          </p>

          {/* Astuces globales */}
          <button
            onClick={() => setShowTips(s => !s)}
            style={{
              fontSize: 12, padding: "6px 14px", borderRadius: 20,
              border: "0.5px solid #BA7517",
              background: showTips ? "#BA7517" : "transparent",
              color: showTips ? "#fff" : "#BA7517",
              cursor: "pointer",
            }}
          >
            {showTips ? "Masquer les astuces" : "Astuces mnémotechniques"}
          </button>

          {showTips && (
            <div style={{ marginTop: 12, display: "flex", flexDirection: "column" as const, gap: 8 }}>
              {GLOBAL_TIPS.map((tip, i) => (
                <div key={i} style={{
                  background: "#fff",
                  border: "0.5px solid #F6AD55",
                  borderRadius: 10,
                  padding: "12px 16px",
                }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#BA7517", marginBottom: 4 }}>
                    {tip.title}
                  </div>
                  <div style={{ fontSize: 13, color: "#555", lineHeight: 1.65 }}>
                    {tip.content}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Toggle mode */}
        <div style={{ display: "flex", gap: 8, marginBottom: "1.5rem" }}>
          {(["major","minor"] as const).map(m => (
            <button key={m} onClick={() => {
              setMode(m);
              setSelected(m === "major" ? "C" : "Am");
            }}
              style={{
                padding: "8px 20px", borderRadius: 20,
                border: `1px solid ${mode === m ? (m === "major" ? "#185FA5" : "#534AB7") : "#e0dbd3"}`,
                background: mode === m ? (m === "major" ? "#185FA5" : "#534AB7") : "#fff",
                color: mode === m ? "#fff" : "#666",
                fontSize: 13, fontWeight: 500, cursor: "pointer",
              }}>
              {m === "major" ? "12 tonalites majeures" : "12 tonalites mineures"}
            </button>
          ))}
        </div>

        {/* Layout : grille + detail */}
        <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 16, alignItems: "start" }}>

          {/* Grille des tonalités */}
          <div style={{
            background: "#fff",
            border: "0.5px solid #e8e3db",
            borderRadius: 12,
            padding: 12,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 6,
            position: "sticky" as const,
            top: 20,
          }}>
            {keys.map(k => (
              <TonaliteCard
                key={k.id}
                tonalite={k}
                isSelected={effectiveKey.id === k.id}
                onClick={() => setSelected(k.id)}
              />
            ))}
          </div>

          {/* Detail */}
          <div>
            <TonaliteDetail t={effectiveKey} />
          </div>
        </div>

        {/* Lien cours */}
        <div style={{ marginTop: "2rem", padding: "16px 20px", background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 13, color: "#555" }}>
            Pratique ces tonalites dans les exercices
          </div>
          <Link href={`/${locale}/atelier`} style={{ fontSize: 12, color: "#185FA5", textDecoration: "none", fontWeight: 500 }}>
            Ouvrir l'Atelier
          </Link>
        </div>
      </div>
    </main>
  );
}

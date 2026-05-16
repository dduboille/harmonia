"use client";

/**
 * ComparateurStyles — Harmonia
 * La même mélodie de base harmonisée dans 11 styles différents.
 * 100 % inline CSS, zéro Tailwind.
 */

import React, { useRef, useState, useCallback } from "react";
import PianoPlayer, { PianoPlayerRef } from "./PianoPlayer";
import { STYLES, StyleData } from "@/data/stylesData";

// ─── Constantes ───────────────────────────────────────────────────────────────

const PRIMARY   = "#5C3D6E";
const PRIMARY_BG = "#F0EBF8";

// ─── Styles CSS réutilisables ─────────────────────────────────────────────────

const S = {
  page: {
    fontFamily: "Georgia, 'Times New Roman', serif",
    background: "#faf8f4",
    minHeight: "100vh",
    padding: "2.5rem 1.5rem 5rem",
  } as React.CSSProperties,

  inner: {
    maxWidth: 960,
    margin: "0 auto",
  } as React.CSSProperties,

  sectionLabel: {
    fontSize: 11, fontWeight: 700, letterSpacing: "0.15em",
    color: PRIMARY, textTransform: "uppercase" as const,
    fontFamily: "system-ui, sans-serif", marginBottom: 10,
  },

  h1: {
    fontSize: "clamp(26px, 4vw, 40px)",
    fontWeight: 400, margin: "0 0 10px",
    letterSpacing: "-0.02em", color: "#1a1a1a",
  } as React.CSSProperties,

  lead: {
    fontSize: 15, color: "#666", lineHeight: 1.7, margin: "0 0 2.5rem",
    fontFamily: "system-ui, sans-serif", maxWidth: 600,
  } as React.CSSProperties,

  divider: {
    border: "none", borderTop: "0.5px solid #e8e3db",
    margin: "2rem 0",
  } as React.CSSProperties,

  btn: (color: string, bg: string, border: string): React.CSSProperties => ({
    display: "inline-flex", alignItems: "center", gap: 6,
    padding: "9px 18px", borderRadius: 20,
    background: bg, border: `0.5px solid ${border}`,
    color, cursor: "pointer",
    fontSize: 13, fontWeight: 600, fontFamily: "system-ui, sans-serif",
    transition: "opacity .15s",
  }),

  tag: (color: string, bg: string): React.CSSProperties => ({
    fontSize: 11, padding: "2px 9px", borderRadius: 8,
    background: bg, color,
    fontFamily: "system-ui, sans-serif", fontWeight: 500,
  }),
};

// ─── Sous-composants ──────────────────────────────────────────────────────────

function StyleCard({
  style, active, onClick,
}: {
  style: StyleData; active: boolean; onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex", flexDirection: "column", alignItems: "flex-start",
        gap: 4, padding: "14px 16px",
        background: active ? style.bg : "#fff",
        border: `1.5px solid ${active ? style.color : "#e8e3db"}`,
        borderRadius: 12, cursor: "pointer",
        transition: "all .15s", textAlign: "left",
        boxShadow: active ? `0 2px 12px ${style.color}22` : "none",
      }}
    >
      <span style={{ fontSize: 22 }}>{style.emoji}</span>
      <span style={{
        fontSize: 12, fontWeight: 600, color: active ? style.color : "#1a1a1a",
        fontFamily: "system-ui, sans-serif", lineHeight: 1.2,
      }}>
        {style.name}
      </span>
      <span style={{
        fontSize: 10, color: "#999",
        fontFamily: "system-ui, sans-serif",
      }}>
        {style.period.split("·")[0].trim()}
      </span>
    </button>
  );
}

function ChordPill({
  name, active, color, bg,
}: {
  name: string; active: boolean; color: string; bg: string;
}) {
  return (
    <div style={{
      padding: "6px 12px", borderRadius: 8,
      background: active ? bg : "#f5f5f5",
      border: `0.5px solid ${active ? color : "#e0dbd3"}`,
      fontSize: 12, fontWeight: active ? 600 : 400,
      color: active ? color : "#888",
      fontFamily: "system-ui, sans-serif",
      transition: "all .2s",
      minWidth: 80, textAlign: "center" as const,
    }}>
      {name}
    </div>
  );
}

// ─── Composant principal ──────────────────────────────────────────────────────

export default function ComparateurStyles() {
  const pianoRef = useRef<PianoPlayerRef | null>(null);
  const [activeId, setActiveId]   = useState<string>(STYLES[0].id);
  const [playing, setPlaying]     = useState(false);
  const [playingAll, setPlayingAll] = useState(false);
  const [activeChord, setActiveChord] = useState<number>(-1);
  const [abStyle1, setAbStyle1] = useState<string>(STYLES[0].id);
  const [abStyle2, setAbStyle2] = useState<string>(STYLES[4].id);  // jazz default
  const [abActive, setAbActive] = useState<1 | 2 | null>(null);

  const active = STYLES.find(s => s.id === activeId) ?? STYLES[0];

  // ─── Play current style voicings ───────────────────────────────────────────

  const playStyle = useCallback(async (style: StyleData) => {
    if (!pianoRef.current || playing) return;
    setPlaying(true);
    setActiveChord(0);

    const INTERVAL = 1.9;
    style.voicings.forEach((voicing, vi) => {
      setTimeout(() => {
        setActiveChord(vi);
        pianoRef.current?.playVoicing(voicing, { duration: INTERVAL * 0.88 });
      }, vi * INTERVAL * 1000);
    });

    setTimeout(() => {
      setPlaying(false);
      setActiveChord(-1);
    }, style.voicings.length * INTERVAL * 1000 + 400);
  }, [playing]);

  // ─── Play all 11 styles in sequence ────────────────────────────────────────

  const playAllStyles = useCallback(async () => {
    if (!pianoRef.current || playingAll) return;
    setPlayingAll(true);
    setPlaying(true);

    const CHORD_INTERVAL = 1.9;
    const STYLE_GAP      = 0.5;
    let t = 0;

    STYLES.forEach((style) => {
      const start = t;
      style.voicings.forEach((voicing, vi) => {
        const delay = (start + vi * CHORD_INTERVAL) * 1000;
        setTimeout(() => {
          setActiveId(style.id);
          setActiveChord(vi);
          pianoRef.current?.playVoicing(voicing, { duration: CHORD_INTERVAL * 0.88 });
        }, delay);
      });
      t += style.voicings.length * CHORD_INTERVAL + STYLE_GAP;
    });

    setTimeout(() => {
      setPlayingAll(false);
      setPlaying(false);
      setActiveChord(-1);
    }, t * 1000 + 600);
  }, [playingAll]);

  // ─── A/B comparator play ───────────────────────────────────────────────────

  const playAB = useCallback((which: 1 | 2) => {
    if (!pianoRef.current || playing) return;
    const styleId = which === 1 ? abStyle1 : abStyle2;
    const style = STYLES.find(s => s.id === styleId) ?? STYLES[0];
    setAbActive(which);
    playStyle(style).then(() => setAbActive(null));
  }, [abStyle1, abStyle2, playing, playStyle]);

  // ─── Render ────────────────────────────────────────────────────────────────

  return (
    <div style={S.page}>
      <div style={S.inner}>

        {/* Header */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={S.sectionLabel}>Harmonia · Comparateur</div>
          <h1 style={S.h1}>Comparateur de styles harmoniques</h1>
          <p style={S.lead}>
            La même mélodie de base, harmonisée dans 11 styles différents — du contrepoint baroque aux voicings jazz.
            Écoute, compare, et entends comment l'harmonie crée l'émotion.
          </p>
        </div>

        {/* Grid 11 cartes */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
          gap: 10, marginBottom: "2rem",
        }}>
          {STYLES.map(style => (
            <StyleCard
              key={style.id}
              style={style}
              active={activeId === style.id}
              onClick={() => setActiveId(style.id)}
            />
          ))}
        </div>

        <hr style={S.divider} />

        {/* Panneau style actif */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
          marginBottom: "2rem",
        }}>
          {/* Colonne gauche : infos */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <span style={{ fontSize: 32 }}>{active.emoji}</span>
              <div>
                <div style={{ fontSize: 20, fontWeight: 500, color: "#1a1a1a" }}>
                  {active.name}
                </div>
                <div style={{ fontSize: 12, color: "#999", fontFamily: "system-ui" }}>
                  {active.period}
                </div>
              </div>
            </div>

            {/* Signature harmonique */}
            <div style={{
              padding: "10px 14px", borderRadius: 8,
              background: active.bg, border: `0.5px solid ${active.border}`,
              marginBottom: 14,
            }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: active.color, letterSpacing: "0.08em", fontFamily: "system-ui", textTransform: "uppercase" as const, marginBottom: 4 }}>
                Signature harmonique
              </div>
              <div style={{ fontSize: 13, color: "#1a1a1a", fontFamily: "system-ui" }}>
                {active.harmonicSignature}
              </div>
            </div>

            {/* Description */}
            <p style={{
              fontSize: 14, color: "#444", lineHeight: 1.7, margin: "0 0 14px",
              fontFamily: "system-ui, sans-serif",
            }}>
              {active.description}
            </p>

            {/* Techniques */}
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#888", letterSpacing: "0.08em", fontFamily: "system-ui", textTransform: "uppercase" as const, marginBottom: 6 }}>
                3 techniques caractéristiques
              </div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 5 }}>
                {active.techniques.map((t, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <span style={{ color: active.color, fontSize: 14, lineHeight: 1.4, flexShrink: 0 }}>◆</span>
                    <span style={{ fontSize: 13, color: "#444", fontFamily: "system-ui", lineHeight: 1.5 }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Référence */}
            <div style={{
              fontSize: 12, color: "#888", fontFamily: "system-ui",
              borderTop: "0.5px solid #e8e3db", paddingTop: 10,
            }}>
              <span style={{ fontWeight: 600, color: "#666" }}>Référence :</span>{" "}
              {active.reference} —{" "}
              <em>{active.referenceWork}</em>
            </div>
          </div>

          {/* Colonne droite : piano + boutons */}
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 14 }}>
            {/* Chord names */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#888", letterSpacing: "0.08em", fontFamily: "system-ui", textTransform: "uppercase" as const, marginBottom: 8 }}>
                4 accords — voicings
              </div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const }}>
                {active.chordNames.map((name, i) => (
                  <ChordPill
                    key={i} name={name}
                    active={activeChord === i}
                    color={active.color} bg={active.bg}
                  />
                ))}
              </div>
            </div>

            {/* Piano */}
            <div style={{ borderRadius: 10, overflow: "hidden", border: `0.5px solid ${active.border}` }}>
              <PianoPlayer
                ref={pianoRef}
                octaves={4}
                startOctave={2}
                showLabels
                showOctaveMarkers
                dotKeys={activeChord >= 0 ? active.voicings[activeChord] : []}
              />
            </div>

            {/* Boutons de lecture */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" as const }}>
              <button
                onClick={() => playStyle(active)}
                disabled={playing}
                style={S.btn(active.color, active.bg, active.border)}
              >
                <span>{playing && !playingAll ? "⏸" : "▶"}</span>
                {playing && !playingAll ? "Lecture…" : "Écouter ce style"}
              </button>

              <button
                onClick={playAllStyles}
                disabled={playing}
                style={S.btn(PRIMARY, PRIMARY_BG, "#C9B3DD")}
              >
                <span>{playingAll ? "⏸" : "▶▶"}</span>
                {playingAll ? "Séquence en cours…" : "Écouter tous les styles"}
              </button>
            </div>

            {/* Note pédagogique */}
            <div style={{
              padding: "10px 14px", borderRadius: 8,
              background: "#f8f6f2", border: "0.5px solid #e8e3db",
              fontSize: 12, color: "#888", fontFamily: "system-ui",
              lineHeight: 1.6,
            }}>
              💡 <strong style={{ color: "#555" }}>Ce qui change :</strong>{" "}
              les 4 accords jouent la même durée, sur la même fondamentale Do.
              Seuls les voicings, les couleurs et les relations entre accords varient.
            </div>
          </div>
        </div>

        <hr style={S.divider} />

        {/* Comparateur A/B */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={S.sectionLabel}>Comparateur A / B</div>
          <p style={{
            fontSize: 14, color: "#666", lineHeight: 1.6, margin: "0 0 16px",
            fontFamily: "system-ui",
          }}>
            Sélectionne deux styles et alterne-les pour entendre la différence harmonique instantanément.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
          }}>
            {([1, 2] as const).map(which => {
              const styleId = which === 1 ? abStyle1 : abStyle2;
              const setStyle = which === 1 ? setAbStyle1 : setAbStyle2;
              const abStyle  = STYLES.find(s => s.id === styleId) ?? STYLES[0];
              const isActive = abActive === which;

              return (
                <div key={which} style={{
                  padding: "18px 20px",
                  background: isActive ? abStyle.bg : "#fff",
                  border: `1.5px solid ${isActive ? abStyle.color : "#e8e3db"}`,
                  borderRadius: 14,
                  transition: "all .2s",
                }}>
                  <div style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: "0.12em",
                    color: abStyle.color, textTransform: "uppercase" as const,
                    fontFamily: "system-ui", marginBottom: 10,
                  }}>
                    Style {which === 1 ? "A" : "B"}
                  </div>

                  <select
                    value={styleId}
                    onChange={e => setStyle(e.target.value)}
                    style={{
                      width: "100%", padding: "7px 10px",
                      borderRadius: 8, border: "0.5px solid #ddd",
                      fontSize: 13, fontFamily: "system-ui",
                      background: "#fafafa", marginBottom: 12,
                      cursor: "pointer",
                    }}
                  >
                    {STYLES.map(s => (
                      <option key={s.id} value={s.id}>
                        {s.emoji} {s.name}
                      </option>
                    ))}
                  </select>

                  <div style={{ marginBottom: 12 }}>
                    <div style={{
                      fontSize: 11, fontWeight: 600, color: abStyle.color,
                      fontFamily: "system-ui", marginBottom: 4,
                    }}>
                      {abStyle.harmonicSignature}
                    </div>
                    <div style={{ fontSize: 12, color: "#666", fontFamily: "system-ui", lineHeight: 1.5 }}>
                      {abStyle.techniques[0]}
                    </div>
                  </div>

                  <button
                    onClick={() => playAB(which)}
                    disabled={playing}
                    style={S.btn(abStyle.color, abStyle.bg, abStyle.border)}
                  >
                    <span>{isActive ? "⏸" : "▶"}</span>
                    {isActive ? "Lecture…" : `Jouer ${which === 1 ? "A" : "B"}`}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <hr style={S.divider} />

        {/* Tableau récapitulatif */}
        <div>
          <div style={S.sectionLabel}>Tableau récapitulatif</div>
          <div style={{ overflowX: "auto" as const }}>
            <table style={{
              width: "100%", borderCollapse: "collapse" as const,
              fontFamily: "system-ui, sans-serif", fontSize: 12,
            }}>
              <thead>
                <tr style={{ background: "#f5f3ef" }}>
                  {["Style", "Période", "Progression", "Clé caractéristique"].map(h => (
                    <th key={h} style={{
                      padding: "10px 12px", textAlign: "left" as const,
                      fontWeight: 600, color: "#555",
                      borderBottom: "0.5px solid #e0dbd3",
                    }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {STYLES.map((style, i) => (
                  <tr
                    key={style.id}
                    onClick={() => setActiveId(style.id)}
                    style={{
                      background: activeId === style.id ? style.bg : (i % 2 === 0 ? "#fff" : "#faf8f4"),
                      cursor: "pointer",
                      borderBottom: "0.5px solid #f0ede8",
                      transition: "background .15s",
                    }}
                  >
                    <td style={{ padding: "9px 12px", fontWeight: 500, color: style.color }}>
                      {style.emoji} {style.name}
                    </td>
                    <td style={{ padding: "9px 12px", color: "#888" }}>
                      {style.period.split("·")[0].trim()}
                    </td>
                    <td style={{ padding: "9px 12px", color: "#444", fontFamily: "monospace", fontSize: 11 }}>
                      {style.harmonicSignature.split("·")[0].trim()}
                    </td>
                    <td style={{ padding: "9px 12px", color: "#555" }}>
                      {style.techniques[0]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

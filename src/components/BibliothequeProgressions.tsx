"use client";

import React, { useRef, useState, useMemo, useCallback, useEffect } from "react";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import { PROGRESSIONS, Progression } from "@/data/progressions-library";

// ─── Display metadata ─────────────────────────────────────────────────────────

const STYLE_META: Record<string, { label: string; color: string; bg: string; border: string }> = {
  classique:  { label: "Classique",  color: "#1a3a5c", bg: "#E8F0F8", border: "#C2D5EC" },
  jazz:       { label: "Jazz",       color: "#7B4A00", bg: "#FEF0D9", border: "#F5C77E" },
  rock:       { label: "Rock / Pop", color: "#CC2200", bg: "#FEEEEA", border: "#F5B5AA" },
  modal:      { label: "Modal",      color: "#2D6A4F", bg: "#E5F3EE", border: "#8ECFB7" },
  romantique: { label: "Romantique", color: "#185FA5", bg: "#E6F1FB", border: "#A8C7EE" },
};

const EPOQUE_LABEL: Record<string, string> = {
  baroque:      "Baroque",
  classique:    "Classicisme",
  romantique:   "Romantisme",
  moderne:      "Moderne",
  contemporain: "Contemporain",
};

const EMOTION_META: Record<string, { label: string; emoji: string }> = {
  joyeux:        { label: "Joyeux",       emoji: "☀️" },
  melancolique:  { label: "Mélancolique", emoji: "🌧️" },
  dramatique:    { label: "Dramatique",   emoji: "⚡" },
  "mystérieux":  { label: "Mystérieux",   emoji: "🌙" },
  energique:     { label: "Énergique",    emoji: "🔥" },
};

const DIFF: Record<1 | 2 | 3, { label: string; color: string; dots: string }> = {
  1: { label: "Débutant",       color: "#0F6E56", dots: "●" },
  2: { label: "Intermédiaire",  color: "#BA7517", dots: "●●" },
  3: { label: "Avancé",         color: "#CC2200", dots: "●●●" },
};

const FONC: Record<string, { label: string; color: string; bg: string }> = {
  T:  { label: "T",  color: "#0F6E56", bg: "#E1F5EE" },
  SD: { label: "SD", color: "#185FA5", bg: "#E6F1FB" },
  D:  { label: "D",  color: "#CC2200", bg: "#FEEEEA" },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function BibliothequeProgressions() {
  const pianoRef    = useRef<PianoPlayerRef>(null);
  const detailRef   = useRef<HTMLDivElement>(null);

  const [searchTerm,    setSearchTerm]    = useState("");
  const [filterStyle,   setFilterStyle]   = useState("");
  const [filterEpoque,  setFilterEpoque]  = useState("");
  const [filterEmotion, setFilterEmotion] = useState("");
  const [filterDiff,    setFilterDiff]    = useState("");
  const [detailId,      setDetailId]      = useState<string | null>(null);
  const [playingId,     setPlayingId]     = useState<string | null>(null);
  const [activeChordIdx, setActiveChordIdx] = useState(-1);
  const [pendingPlay,   setPendingPlay]   = useState<Progression | null>(null);

  const detailProg = detailId ? (PROGRESSIONS.find(p => p.id === detailId) ?? null) : null;

  // ─── Filtered list ───────────────────────────────────────────────────────────

  const filtered = useMemo(() => PROGRESSIONS.filter(p => {
    if (filterStyle   && p.style      !== filterStyle)            return false;
    if (filterEpoque  && p.epoque     !== filterEpoque)           return false;
    if (filterEmotion && p.emotion    !== filterEmotion)          return false;
    if (filterDiff    && p.difficulte !== Number(filterDiff))     return false;
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      return (
        p.nom.toLowerCase().includes(q) ||
        (p.compositeur?.toLowerCase().includes(q) ?? false) ||
        p.description.toLowerCase().includes(q) ||
        p.exempleMusical.toLowerCase().includes(q)
      );
    }
    return true;
  }), [filterStyle, filterEpoque, filterEmotion, filterDiff, searchTerm]);

  // ─── Playback ────────────────────────────────────────────────────────────────

  // Effect executes pending play after PianoPlayer is guaranteed mounted
  useEffect(() => {
    if (!pendingPlay || !pianoRef.current) return;
    const prog = pendingPlay;
    setPendingPlay(null);
    setPlayingId(prog.id);
    setActiveChordIdx(0);
    const interval = 1.8;
    pianoRef.current.playVoicingSequence(prog.voicings, { interval, arp: true, arpDelay: 0.06 });
    prog.voicings.forEach((_, i) => {
      setTimeout(() => setActiveChordIdx(i), i * interval * 1000);
    });
    setTimeout(() => {
      setPlayingId(null);
      setActiveChordIdx(-1);
    }, prog.voicings.length * interval * 1000 + 1200);
  }, [pendingPlay]);

  const handleListen = useCallback((prog: Progression) => {
    setDetailId(prog.id);
    setPendingPlay(prog);
    setTimeout(() => detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  }, []);

  const openDetail = useCallback((prog: Progression) => {
    setDetailId(prog.id);
    setTimeout(() => detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
  }, []);

  const dotKeys = detailProg
    ? (activeChordIdx >= 0 ? (detailProg.voicings[activeChordIdx] ?? []) : (detailProg.voicings[0] ?? []))
    : [];

  const hasFilters = !!(filterStyle || filterEpoque || filterEmotion || filterDiff || searchTerm);
  const resetFilters = () => { setFilterStyle(""); setFilterEpoque(""); setFilterEmotion(""); setFilterDiff(""); setSearchTerm(""); };

  // ─── Shared styles ───────────────────────────────────────────────────────────

  const selectStyle: React.CSSProperties = {
    padding: "8px 10px", borderRadius: 8,
    border: "0.5px solid #d5cfc6", background: "#fff",
    fontSize: 12, color: "#555", cursor: "pointer", outline: "none",
    fontFamily: "system-ui, sans-serif",
  };

  // ─── Render ──────────────────────────────────────────────────────────────────

  return (
    <main style={{ minHeight: "100vh", background: "#f4f1ec", padding: "2.5rem 1rem" }}>
      <div style={{ maxWidth: 1020, margin: "0 auto" }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#5C3D6E", textTransform: "uppercase", marginBottom: 6 }}>
            Harmonia · Bibliothèque
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 600, color: "#1a1a1a", margin: "0 0 8px", fontFamily: "Georgia, serif" }}>
            Progressions harmoniques
          </h1>
          <p style={{ fontSize: 14, color: "#666", margin: 0, lineHeight: 1.6, maxWidth: 620 }}>
            10 progressions fondamentales classées par style, époque et émotion.
            Écoutez, comparez et analysez les structures qui ont façonné la musique occidentale.
          </p>
        </div>

        {/* ── Filters ── */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "1.25rem", alignItems: "center" }}>
          <input
            type="text"
            placeholder="🔍 Rechercher par nom, compositeur…"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            style={{ ...selectStyle, flex: 1, minWidth: 200, color: "#1a1a1a" }}
          />
          <select value={filterStyle}   onChange={e => setFilterStyle(e.target.value)}   style={selectStyle}>
            <option value="">Tous les styles</option>
            {Object.entries(STYLE_META).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
          </select>
          <select value={filterEpoque}  onChange={e => setFilterEpoque(e.target.value)}  style={selectStyle}>
            <option value="">Toutes les époques</option>
            {Object.entries(EPOQUE_LABEL).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
          <select value={filterEmotion} onChange={e => setFilterEmotion(e.target.value)} style={selectStyle}>
            <option value="">Toutes les émotions</option>
            {Object.entries(EMOTION_META).map(([k, v]) => <option key={k} value={k}>{v.emoji} {v.label}</option>)}
          </select>
          <select value={filterDiff}    onChange={e => setFilterDiff(e.target.value)}    style={selectStyle}>
            <option value="">Toutes difficultés</option>
            <option value="1">● Débutant</option>
            <option value="2">●● Intermédiaire</option>
            <option value="3">●●● Avancé</option>
          </select>
          {hasFilters && (
            <button onClick={resetFilters} style={{ ...selectStyle, color: "#888", background: "#fff" }}>
              ✕ Réinitialiser
            </button>
          )}
        </div>

        {/* ── Count ── */}
        <div style={{ fontSize: 12, color: "#aaa", marginBottom: "1rem" }}>
          {filtered.length} progression{filtered.length !== 1 ? "s" : ""}{hasFilters ? " filtrées" : ""}
        </div>

        {/* ── Grid ── */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "3rem 0", color: "#aaa", fontSize: 14 }}>
            Aucune progression ne correspond à ces filtres.
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 12, marginBottom: "2rem" }}>
            {filtered.map(prog => {
              const sm = STYLE_META[prog.style];
              const em = EMOTION_META[prog.emotion] ?? { emoji: "", label: prog.emotion };
              const df = DIFF[prog.difficulte];
              const isActive  = detailId === prog.id;
              const isPlaying = playingId === prog.id;
              return (
                <div key={prog.id} style={{
                  background: "#fff",
                  border: `0.5px solid ${isActive ? "#5C3D6E" : "#e8e3db"}`,
                  borderRadius: 12,
                  padding: 16,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  boxShadow: isActive ? "0 0 0 2px #5C3D6E20" : "none",
                  transition: "border-color .15s",
                }}>
                  {/* Top row: style badge + difficulty + emotion */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                      <span style={{
                        fontSize: 10, fontWeight: 700, color: sm.color,
                        background: sm.bg, border: `0.5px solid ${sm.border}`,
                        padding: "2px 8px", borderRadius: 6,
                      }}>
                        {sm.label}
                      </span>
                      <span style={{ fontSize: 10, fontWeight: 700, color: df.color, padding: "2px 6px", borderRadius: 6, background: "#f4f1ec" }}>
                        {df.dots}
                      </span>
                    </div>
                    <span style={{ fontSize: 15 }}>{em.emoji}</span>
                  </div>

                  {/* Name + composer */}
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "#1a1a1a", lineHeight: 1.3 }}>{prog.nom}</div>
                    <div style={{ fontSize: 11, color: "#999", marginTop: 2 }}>
                      {prog.compositeur ? `${prog.compositeur} · ` : ""}{EPOQUE_LABEL[prog.epoque]}
                    </div>
                  </div>

                  {/* Roman numeral flow */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4, alignItems: "center" }}>
                    {prog.analyse.map((a, i) => (
                      <React.Fragment key={i}>
                        <span style={{ fontSize: 12, fontWeight: 700, fontFamily: "monospace", color: "#3a3a3a" }}>{a}</span>
                        {i < prog.analyse.length - 1 && <span style={{ fontSize: 10, color: "#ccc" }}>→</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Functional analysis chips */}
                  <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                    {prog.fonctions.map((f, i) => {
                      const fm = FONC[f] ?? { label: f, color: "#666", bg: "#f4f1ec" };
                      return (
                        <span key={i} style={{
                          fontSize: 9, fontWeight: 700, color: fm.color,
                          background: fm.bg, padding: "2px 6px", borderRadius: 4,
                        }}>
                          {fm.label}
                        </span>
                      );
                    })}
                  </div>

                  {/* Buttons */}
                  <div style={{ display: "flex", gap: 6, marginTop: 2 }}>
                    <button
                      onClick={() => handleListen(prog)}
                      disabled={isPlaying}
                      style={{
                        flex: 1, padding: "8px 0", borderRadius: 8, cursor: isPlaying ? "default" : "pointer",
                        border: "0.5px solid #5C3D6E40",
                        background: isPlaying ? "#5C3D6E" : "#F0EBF8",
                        color: isPlaying ? "#fff" : "#5C3D6E",
                        fontSize: 12, fontWeight: 600, fontFamily: "system-ui, sans-serif",
                      }}
                    >
                      {isPlaying ? "♫ En cours…" : "▶ Écouter"}
                    </button>
                    <button
                      onClick={() => openDetail(prog)}
                      style={{
                        flex: 1, padding: "8px 0", borderRadius: 8, cursor: "pointer",
                        border: "0.5px solid #e8e3db",
                        background: isActive ? "#f4f1ec" : "#fff",
                        color: "#555",
                        fontSize: 12, fontWeight: 600, fontFamily: "system-ui, sans-serif",
                      }}
                    >
                      ✦ Analyser
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── Detail panel ── */}
        {/* Outer div always rendered so pianoRef is stable; inner content conditional */}
        <div ref={detailRef} style={{ display: detailProg ? "block" : "none" }}>
          {detailProg && (
            <div style={{
              background: "#fff",
              border: "0.5px solid #5C3D6E40",
              borderRadius: 14,
              padding: "24px",
              marginBottom: "2rem",
              boxShadow: "0 4px 24px rgba(92,61,110,0.08)",
            }}>
              {/* Panel header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                <div>
                  <div style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: "0.12em",
                    color: STYLE_META[detailProg.style].color, marginBottom: 4,
                    textTransform: "uppercase",
                  }}>
                    {STYLE_META[detailProg.style].label} · {EPOQUE_LABEL[detailProg.epoque]}
                  </div>
                  <h2 style={{ fontSize: 21, fontWeight: 600, color: "#1a1a1a", margin: 0, fontFamily: "Georgia, serif" }}>
                    {detailProg.nom}
                  </h2>
                </div>
                <button
                  onClick={() => { setDetailId(null); setPlayingId(null); setActiveChordIdx(-1); }}
                  style={{
                    background: "none", border: "0.5px solid #e8e3db",
                    borderRadius: 8, padding: "6px 12px",
                    cursor: "pointer", fontSize: 12, color: "#888",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  ✕ Fermer
                </button>
              </div>

              {/* Two-column: info | analysis */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28, marginBottom: 24 }}>

                {/* Left: textual info */}
                <div>
                  {detailProg.compositeur && (
                    <div style={{ marginBottom: 14 }}>
                      <div style={{ fontSize: 10, color: "#bbb", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 3 }}>COMPOSITEUR</div>
                      <div style={{ fontSize: 14, fontWeight: 500, color: "#1a1a1a" }}>{detailProg.compositeur}</div>
                    </div>
                  )}
                  <div style={{ fontSize: 13, color: "#555", lineHeight: 1.7, marginBottom: 16 }}>
                    {detailProg.description}
                  </div>
                  <div style={{ marginBottom: 14 }}>
                    <div style={{ fontSize: 10, color: "#bbb", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 4 }}>EXEMPLES MUSICAUX</div>
                    <div style={{ fontSize: 12, color: "#777", fontStyle: "italic", lineHeight: 1.5 }}>{detailProg.exempleMusical}</div>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {(() => {
                      const em = EMOTION_META[detailProg.emotion] ?? { emoji: "", label: detailProg.emotion };
                      const df = DIFF[detailProg.difficulte];
                      return (
                        <>
                          <span style={{ fontSize: 11, background: "#f4f1ec", padding: "4px 10px", borderRadius: 6, color: "#555" }}>
                            {em.emoji} {em.label}
                          </span>
                          <span style={{ fontSize: 11, background: "#f4f1ec", padding: "4px 10px", borderRadius: 6, color: df.color, fontWeight: 600 }}>
                            {df.dots} {df.label}
                          </span>
                        </>
                      );
                    })()}
                  </div>
                </div>

                {/* Right: harmonic analysis table */}
                <div>
                  <div style={{ fontSize: 10, color: "#bbb", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 10 }}>ANALYSE HARMONIQUE</div>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "system-ui, sans-serif" }}>
                    <thead>
                      <tr style={{ fontSize: 10, color: "#bbb", textAlign: "left" }}>
                        <th style={{ padding: "4px 10px 8px 10px", fontWeight: 600 }}>Accord</th>
                        <th style={{ padding: "4px 10px 8px 10px", fontWeight: 600 }}>Degré</th>
                        <th style={{ padding: "4px 10px 8px 10px", fontWeight: 600 }}>Fonction</th>
                      </tr>
                    </thead>
                    <tbody>
                      {detailProg.accords.map((acc, i) => {
                        const isHighlighted = activeChordIdx === i;
                        const f  = detailProg.fonctions[i] ?? "T";
                        const fm = FONC[f] ?? { label: f, color: "#666", bg: "#f4f1ec" };
                        return (
                          <tr key={i} style={{
                            background: isHighlighted ? "#F0EBF8" : i % 2 === 0 ? "#faf8f5" : "#fff",
                            transition: "background .3s",
                          }}>
                            <td style={{ padding: "8px 10px", fontSize: 13, color: "#1a1a1a", borderRadius: "4px 0 0 4px" }}>{acc}</td>
                            <td style={{ padding: "8px 10px", fontFamily: "monospace", fontWeight: 700, fontSize: 13, color: "#5C3D6E" }}>
                              {detailProg.analyse[i]}
                            </td>
                            <td style={{ padding: "8px 10px" }}>
                              <span style={{
                                fontSize: 10, fontWeight: 700, color: fm.color,
                                background: fm.bg, padding: "2px 7px", borderRadius: 4,
                              }}>
                                {fm.label}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Full-width piano + play button */}
              <div style={{ borderTop: "0.5px solid #f0ece6", paddingTop: 20 }}>
                <div style={{ fontSize: 10, color: "#bbb", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 8 }}>
                  PIANO — {activeChordIdx >= 0 && detailProg.accords[activeChordIdx]
                    ? detailProg.accords[activeChordIdx]
                    : "Cliquez ▶ Écouter pour visualiser les accords"}
                </div>
                <PianoPlayer
                  ref={pianoRef}
                  octaves={3}
                  startOctave={2}
                  dotKeys={dotKeys}
                  showOctaveMarkers={true}
                  showLabels={true}
                />
                <button
                  onClick={() => handleListen(detailProg)}
                  disabled={playingId === detailProg.id}
                  style={{
                    marginTop: 14,
                    width: "100%",
                    padding: "12px 0",
                    borderRadius: 10,
                    border: "none",
                    background: playingId === detailProg.id ? "#5C3D6E" : "#F0EBF8",
                    color: playingId === detailProg.id ? "#fff" : "#5C3D6E",
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: playingId === detailProg.id ? "default" : "pointer",
                    fontFamily: "system-ui, sans-serif",
                    transition: "background .2s",
                  }}
                >
                  {playingId === detailProg.id ? "♫ Lecture en cours…" : "▶ Écouter cette progression"}
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}

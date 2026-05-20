// src/components/VisualisationNote.tsx
"use client";

import React, { useEffect, useState } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────
interface CN { fr: string; oct: number; }

export interface VisualisationNoteProps {
  notes: CN[];
  label: string;
  onNext: () => void;
  onReplay?: () => void;
}

// ── Chromatic pitch helper (C3=0, C4=12, C5=24…) ─────────────────────────────
const SEMI: Record<string, number> = {
  "Do":0,"Do#":1,"Réb":1,"Ré":2,"Ré#":3,"Mib":3,"Mi":4,
  "Fa":5,"Fa#":6,"Solb":6,"Sol":7,"Sol#":8,"Lab":8,
  "La":9,"La#":10,"Sib":10,"Si":11,
};
function pitch(fr: string, oct: number) { return (oct - 3) * 12 + (SEMI[fr] ?? 0); }

// ── Diatonic step from C4 = 0 (used for staff y-position) ────────────────────
const DIAT: Record<string, number> = {
  "Do":0,"Do#":0,
  "Réb":1,"Ré":1,"Ré#":1,
  "Mib":2,"Mi":2,
  "Fa":3,"Fa#":3,
  "Solb":4,"Sol":4,"Sol#":4,
  "Lab":5,"La":5,"La#":5,
  "Sib":6,"Si":6,
};
function diatFromC4(fr: string, oct: number) { return (oct - 4) * 7 + (DIAT[fr] ?? 0); }

// ── Accidentals ───────────────────────────────────────────────────────────────
const SHARPS = new Set(["Do#","Ré#","Fa#","Sol#","La#"]);
const FLATS  = new Set(["Réb","Mib","Solb","Lab","Sib"]);

// ── Keyboard constants ────────────────────────────────────────────────────────
const WW = 24; // white key width px
const WH = 96; // white key height px
const BW = 15; // black key width px
const BH = 60; // black key height px

const WHITE_IDX: Record<string, number> = { Do:0, Ré:1, Mi:2, Fa:3, Sol:4, La:5, Si:6 };
const WHITE_FR  = ["Do","Ré","Mi","Fa","Sol","La","Si"] as const;

const BLACK_OFFSET: Record<string, number> = {
  "Do#":0.58,"Réb":0.58,
  "Ré#":1.60,"Mib":1.60,
  "Fa#":3.58,"Solb":3.58,
  "Sol#":4.58,"Lab":4.58,
  "La#":5.60,"Sib":5.60,
};
const BLACK_CANONICAL = ["Do#","Ré#","Fa#","Sol#","La#"] as const;
const BLACK_CANONICAL_OFFSETS: Record<string, number> = {
  "Do#":0.58,"Ré#":1.60,"Fa#":3.58,"Sol#":4.58,"La#":5.60,
};
void BLACK_OFFSET; // defined for completeness but lookup is done via BLACK_CANONICAL_OFFSETS

function isBlack(fr: string) { return fr in BLACK_OFFSET; }
void isBlack; // internal helper — not exported

function whiteX(fr: string, oct: number) {
  return ((oct - 3) * 7 + WHITE_IDX[fr]) * WW;
}
function blackCanonicalX(fr: string, oct: number) {
  return ((oct - 3) * 7 + BLACK_CANONICAL_OFFSETS[fr]) * WW - BW / 2;
}

// ── Staff constants ───────────────────────────────────────────────────────────
const SVG_W    = 280;
const LS       = 10;
const E4_Y     = 95;
function noteY(fr: string, oct: number) {
  return E4_Y - (diatFromC4(fr, oct) - 2) * (LS / 2);
}
const STAFF_LINES = [E4_Y, E4_Y - LS, E4_Y - 2*LS, E4_Y - 3*LS, E4_Y - 4*LS];

// ── PianoKeyboard sub-component ───────────────────────────────────────────────
function PianoKeyboard({ notes }: { notes: CN[] }) {
  const activePitches = new Set(notes.map(n => pitch(n.fr, n.oct)));
  const pitchLabel = new Map(notes.map(n => [pitch(n.fr, n.oct), n.fr]));
  const TOTAL_W = 21 * WW;

  return (
    <div style={{ overflowX: "auto", width: "100%" }}>
      <div style={{ position: "relative", width: TOTAL_W, height: WH, flexShrink: 0 }}>
        {([3,4,5] as const).flatMap(oct =>
          WHITE_FR.map(fr => {
            const p = pitch(fr, oct);
            const active = activePitches.has(p);
            return (
              <div key={`w-${fr}${oct}`} style={{
                position: "absolute",
                left: whiteX(fr, oct),
                top: 0,
                width: WW - 1,
                height: WH,
                background: active ? "#3B82F6" : "#fff",
                border: "1px solid #ccc",
                borderRadius: "0 0 4px 4px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                paddingBottom: 4,
              }}>
                {active && (
                  <span style={{ fontSize: 9, fontWeight: 700, color: "#fff", lineHeight: 1 }}>
                    {pitchLabel.get(p) ?? fr}
                  </span>
                )}
              </div>
            );
          })
        )}
        {([3,4,5] as const).flatMap(oct =>
          BLACK_CANONICAL.map(fr => {
            const p = pitch(fr, oct);
            const active = activePitches.has(p);
            const label = pitchLabel.get(p);
            return (
              <div key={`b-${fr}${oct}`} style={{
                position: "absolute",
                left: blackCanonicalX(fr, oct),
                top: 0,
                width: BW,
                height: BH,
                background: active ? "#3B82F6" : "#222",
                borderRadius: "0 0 3px 3px",
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                paddingBottom: 3,
              }}>
                {active && (
                  <span style={{ fontSize: 8, fontWeight: 700, color: "#fff", lineHeight: 1 }}>
                    {label ?? fr}
                  </span>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

// ── StaffSVG sub-component ────────────────────────────────────────────────────
function StaffSVG({ notes, label }: { notes: CN[]; label: string }) {
  const ys = notes.map(n => noteY(n.fr, n.oct));
  const maxY = Math.max(...ys, E4_Y + 15);
  const svgH = maxY + 28;
  const CLEF_X = 8;
  const NOTE_X = 90;

  function ledgerLines(fr: string, oct: number): number[] {
    const d = diatFromC4(fr, oct);
    const lines: number[] = [];
    if (d <= 0) {
      for (let step = 0; step >= d; step -= 2) {
        lines.push(E4_Y - (step - 2) * (LS / 2));
      }
    }
    if (d >= 12) {
      for (let step = 12; step <= d; step += 2) {
        lines.push(E4_Y - (step - 2) * (LS / 2));
      }
    }
    return lines;
  }

  return (
    <svg
      viewBox={`0 0 ${SVG_W} ${svgH}`}
      style={{ width: "100%", maxWidth: SVG_W, display: "block", margin: "0 auto" }}
    >
      {STAFF_LINES.map((y, i) => (
        <line key={i} x1={CLEF_X} y1={y} x2={SVG_W - 8} y2={y}
          stroke="#333" strokeWidth={0.8} />
      ))}

      <text x={CLEF_X} y={E4_Y - 10}
        style={{ fontSize: 68, fontFamily: "serif", fill: "#333", userSelect: "none" }}>
        𝄞
      </text>

      {notes.map((note, i) => {
        const y    = noteY(note.fr, note.oct);
        const d    = diatFromC4(note.fr, note.oct);
        const stemUp = d < 6;
        const acc  = SHARPS.has(note.fr) ? "♯" : FLATS.has(note.fr) ? "♭" : null;
        const xOff = i % 2 === 0 ? 0 : 12;

        return (
          <g key={i}>
            {ledgerLines(note.fr, note.oct).map((ly, li) => (
              <line key={li}
                x1={NOTE_X + xOff - 10} y1={ly}
                x2={NOTE_X + xOff + 14} y2={ly}
                stroke="#333" strokeWidth={0.8} />
            ))}
            {acc && (
              <text x={NOTE_X + xOff - 14} y={y + 4}
                style={{ fontSize: 11, fontFamily: "serif", fill: "#222" }}>
                {acc}
              </text>
            )}
            <ellipse
              cx={NOTE_X + xOff + 5} cy={y}
              rx={5.5} ry={4}
              fill="#222"
              transform={`rotate(-15, ${NOTE_X + xOff + 5}, ${y})`}
            />
            {stemUp ? (
              <line
                x1={NOTE_X + xOff + 10} y1={y}
                x2={NOTE_X + xOff + 10} y2={y - 30}
                stroke="#222" strokeWidth={1.2} />
            ) : (
              <line
                x1={NOTE_X + xOff} y1={y}
                x2={NOTE_X + xOff} y2={y + 30}
                stroke="#222" strokeWidth={1.2} />
            )}
          </g>
        );
      })}

      <text
        x={SVG_W / 2} y={svgH - 6}
        textAnchor="middle"
        style={{ fontSize: 12, fontFamily: "system-ui, sans-serif", fill: "#5C3D6E", fontWeight: 600 }}
      >
        {label}
      </text>
    </svg>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────
export default function VisualisationNote({ notes, label, onNext, onReplay }: VisualisationNoteProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{
      transform: visible ? "translateY(0)" : "translateY(100%)",
      transition: "transform 250ms ease",
      background: "#fff",
      borderTop: "1px solid #e8e0f0",
      borderRadius: "0 0 18px 18px",
      padding: "1rem 1.25rem 1.25rem",
      width: "100%",
    }}>
      <p style={{
        fontSize: 11, fontWeight: 700, letterSpacing: "0.08em",
        color: "#5C3D6E", margin: "0 0 0.75rem", textTransform: "uppercase",
      }}>
        Visualisation
      </p>

      <div style={{ marginBottom: "1rem" }}>
        <PianoKeyboard notes={notes} />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <StaffSVG notes={notes} label={label} />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {onReplay ? (
          <button
            onClick={onReplay}
            style={{
              background: "none", border: "1px solid #d0c8e0",
              borderRadius: 20, padding: "0.35rem 0.9rem",
              fontSize: "0.8rem", fontWeight: 600, color: "#5C3D6E", cursor: "pointer",
            }}
          >
            ↺ Réécouter
          </button>
        ) : <span />}
        <button
          onClick={onNext}
          style={{
            background: "#5C3D6E", border: "none",
            borderRadius: 20, padding: "0.45rem 1.2rem",
            fontSize: "0.85rem", fontWeight: 700, color: "#fff", cursor: "pointer",
          }}
        >
          Suivant →
        </button>
      </div>
    </div>
  );
}

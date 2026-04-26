"use client";

/**
 * VexFlowScore.tsx
 * Harmonia — Notation musicale via VexFlow v5
 *
 * Format : rondes, sans chiffrage de mesure, barre de mesure entre accords.
 * Une portée = une voix, accords SATB empilés.
 *
 * Syntaxe : liste d'accords séparés par "|"
 *   Portée Sol : "(E5 C5)/w, (F5 A4)/w"
 *   Portée Fa  : "(G3 C3)/w, (C4 F3)/w"
 *
 * Toujours importer via VexFlowScoreClient.tsx (ssr: false)
 */

import React, { useEffect, useRef } from "react";

export interface VexStave {
  clef?: "treble" | "bass" | "alto" | "tenor";
  keySignature?: string;
  /** Accords par mesure, séparés par "|" : "(E5 C5)/w | (F5 A4)/w" */
  measures: string[];
}

export interface VexFlowScoreProps {
  staves: VexStave[];
  width?: number;
  height?: number;
  label?: string;
}

const STAVE_H  = 110;
const TOP_PAD  = 20;
const BOT_PAD  = 36;
const CLEF_W   = 50; // largeur réservée à la clef
const KEY_W    = 0;  // pas d'armure par défaut

export default function VexFlowScore({ staves, width = 520, height, label }: VexFlowScoreProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const totalH = height ?? TOP_PAD + staves.length * STAVE_H + BOT_PAD;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let dead = false;

    import("vexflow").then((VF) => {
      if (dead || !containerRef.current) return;

      container.innerHTML = "";

      const renderer = new VF.Renderer(container, VF.Renderer.Backends.SVG);
      renderer.resize(width, totalH);
      const ctx = renderer.getContext();

      const numMeasures = Math.max(...staves.map((s) => s.measures.length));
      // Largeur disponible après la clef, divisée par nombre de mesures
      const measureW = Math.floor((width - CLEF_W - 20) / numMeasures);

      staves.forEach((staveDef, si) => {
        const clef = staveDef.clef ?? (si === 0 ? "treble" : "bass");
        const y = TOP_PAD + si * STAVE_H;

        staveDef.measures.forEach((measureStr, mi) => {
          const isFirst = mi === 0;
          const isLast  = mi === staveDef.measures.length - 1;

          // Position X : première mesure inclut la clef
          const x = isFirst ? 10 : 10 + CLEF_W + mi * measureW;
          const w = isFirst ? CLEF_W + measureW : measureW;

          const stave = new VF.Stave(x, y, w);

          if (isFirst) {
            stave.addClef(clef);
            if (staveDef.keySignature) stave.addKeySignature(staveDef.keySignature);
          }

          // Barre finale sur la dernière mesure
          if (isLast) {
            stave.setEndBarType(VF.Barline.type.END);
          }

          stave.setContext(ctx).draw();

          // Notes de la mesure
          const notes = parseNotes(VF, measureStr.trim(), clef);
          const voice = new VF.Voice({ numBeats: 4, beatValue: 4 });
          voice.setMode(2); // SOFT
          voice.addTickables(notes);

          new VF.Formatter().joinVoices([voice]).format([voice], w - 20);
          voice.draw(ctx, stave);
        });
      });

    }).catch((e) => console.error("[VexFlowScore]", e));

    return () => {
      dead = true;
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(staves), width, totalH]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "16px 0" }}>
      <div
        ref={containerRef}
        role="img"
        aria-label={label ?? "Partition"}
        style={{
          width, height: totalH, maxWidth: "100%", overflowX: "auto",
          background: "#fff", borderRadius: 8,
          border: "0.5px solid #e8e8e8", boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
        }}
      />
      {label && (
        <p style={{ fontSize: 12, color: "#888", marginTop: 8, fontStyle: "italic", textAlign: "center" }}>
          {label}
        </p>
      )}
    </div>
  );
}

// ─── Parser ───────────────────────────────────────────────────────────────────

function parseNotes(
  VF: typeof import("vexflow"),
  str: string,
  clef: string
): InstanceType<typeof VF.StaveNote>[] {
  return str.split(",").map((raw) => {
    const s = raw.trim();
    const clean = s.replace(/\[[^\]]*\]/g, "").trim();

    // Ronde de silence (mesure vide) : B4/wr ou C3/wr
    if (clean.match(/\/wr$/)) {
      return new VF.StaveNote({ clef, keys: [clef === "treble" ? "b/4" : "c/3"], duration: "wr" });
    }

    // Accord empilé : (E5 C5)/w
    const chordM = clean.match(/^\(([^)]+)\)\/([whqe])/);
    if (chordM) {
      const rawNotes = chordM[1].trim().split(/\s+/);
      const sorted = [...rawNotes].sort((a, b) => {
        const octA = parseInt(a.slice(-1));
        const octB = parseInt(b.slice(-1));
        if (octA !== octB) return octB - octA;
        const order = ["C","D","E","F","G","A","B"];
        return order.indexOf(b[0].toUpperCase()) - order.indexOf(a[0].toUpperCase());
      });
      const note = new VF.StaveNote({
        clef,
        keys: sorted.map(toVexKey),
        duration: chordM[2],
      });
      addAccidentals(VF, note, sorted);
      return note;
    }

    // Note simple : C4/w ou Cb4/w ou C#4/w ou Cbb4/w ou C##4/w
    const noteM = clean.match(/^([A-Ga-g])(#{1,2}|b{1,2})?(\d)\/([whqe])/);
    if (noteM) {
      const note = new VF.StaveNote({
        clef,
        keys: [toVexKey(`${noteM[1]}${noteM[2] ?? ""}${noteM[3]}`)],
        duration: noteM[4],
      });
      addAccidentals(VF, note, [`${noteM[1]}${noteM[2] ?? ""}${noteM[3]}`]);
      return note;
    }

    console.warn("[VexFlowScore] Note non parsée :", raw);
    return new VF.StaveNote({ clef, keys: ["c/4"], duration: "w" });
  });
}

function toVexKey(n: string): string {
  // Supporte ##, bb, #, b, ou rien
  const m = n.trim().match(/^([A-Ga-g])(#{1,2}|b{1,2})?(\d)$/);
  if (!m) return "c/4";
  return `${m[1].toLowerCase()}${m[2] ?? ""}/${m[3]}`;
}

function addAccidentals(
  VF: typeof import("vexflow"),
  note: InstanceType<typeof VF.StaveNote>,
  rawNotes: string[]
) {
  rawNotes.forEach((n, idx) => {
    const m = n.trim().match(/^[A-Ga-g](#{1,2}|b{1,2})\d$/);
    if (!m) return;
    const acc = m[1];
    const vexAcc = acc === "##" ? "##" : acc === "bb" ? "bb" : acc === "#" ? "#" : "b";
    note.addModifier(new VF.Accidental(vexAcc), idx);
  });
}

// ─── Variante SATB ────────────────────────────────────────────────────────────

export interface GrandStaffSATBProps {
  /**
   * Accords portée Sol, un par mesure séparés par "|"
   * Ex : "(E5 C5)/w | (F5 A4)/w"
   */
  treble: string;
  /**
   * Accords portée Fa, un par mesure séparés par "|"
   * Ex : "(G3 C3)/w | (C4 F3)/w"
   */
  bass: string;
  keySignature?: string;
  width?: number;
  label?: string;
}

export function GrandStaffSATB({
  treble, bass,
  keySignature,
  width = 520,
  label,
}: GrandStaffSATBProps) {
  // Découper par "|" pour obtenir les mesures
  const trebleMeasures = treble.split("|").map((m) => m.trim());
  const bassMeasures   = bass.split("|").map((m) => m.trim());

  return (
    <VexFlowScore
      width={width}
      label={label}
      staves={[
        { clef: "treble", keySignature, measures: trebleMeasures },
        { clef: "bass",   keySignature, measures: bassMeasures   },
      ]}
    />
  );
}

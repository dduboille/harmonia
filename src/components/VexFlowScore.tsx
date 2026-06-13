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

// Charte Harmonia — or sur fond sombre
const GOLD = "#C9A84C";
const INK  = "#0E0B08";
const GOLD_STYLE = { fillStyle: GOLD, strokeStyle: GOLD };

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

      // Charte : or sur fond sombre
      ctx.setFillStyle(GOLD);
      ctx.setStrokeStyle(GOLD);

      const numMeasures = Math.max(...staves.map((s) => s.measures.length));
      // Largeur disponible après la clef, divisée par nombre de mesures
      const measureW = Math.floor((width - CLEF_W - 20) / numMeasures);

      // Collecte par portée : staves + voices, pour formatage unifié et connecteurs
      type Row = {
        clef: string;
        staves: InstanceType<typeof VF.Stave>[];
        voices: InstanceType<typeof VF.Voice>[];
      };
      const rows: Row[] = [];

      staves.forEach((staveDef, si) => {
        const clef = staveDef.clef ?? (si === 0 ? "treble" : "bass");
        const y = TOP_PAD + si * STAVE_H;
        const row: Row = { clef, staves: [], voices: [] };

        staveDef.measures.forEach((measureStr, mi) => {
          const isFirst = mi === 0;
          const isLast  = mi === staveDef.measures.length - 1;

          // Position X : première mesure inclut la clef
          const x = isFirst ? 10 : 10 + CLEF_W + mi * measureW;
          const w = isFirst ? CLEF_W + measureW : measureW;

          const stave = new VF.Stave(x, y, w);
          stave.setStyle(GOLD_STYLE);

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
          notes.forEach((n) => n.setStyle(GOLD_STYLE));
          const voice = new VF.Voice({ numBeats: 4, beatValue: 4 });
          voice.setMode(2); // SOFT
          voice.addTickables(notes);

          row.staves.push(stave);
          row.voices.push(voice);
        });

        rows.push(row);
      });

      // Formatage : chaque mesure formatée à la largeur de sa portée, en
      // joignant verticalement la voix Sol et la voix Fa de même index.
      for (let mi = 0; mi < numMeasures; mi++) {
        const colVoices = rows
          .map((r) => r.voices[mi])
          .filter((v): v is InstanceType<typeof VF.Voice> => !!v);
        const stave = rows[0]?.staves[mi];
        if (colVoices.length === 0 || !stave) continue;
        const formatter = new VF.Formatter();
        colVoices.forEach((v) => formatter.joinVoices([v]));
        const fmtW = (stave.getWidth?.() ?? measureW) - 20;
        formatter.format(colVoices, Math.max(40, fmtW));
      }

      // Dessin des voix
      rows.forEach((r) => {
        r.voices.forEach((v, i) => {
          const s = r.staves[i];
          if (s) v.draw(ctx, s);
        });
      });

      // ── Grand staff : accolade + barres système (si ≥ 2 portées) ──
      const trebleStaves = rows[0]?.staves ?? [];
      const bassStaves   = rows[1]?.staves ?? [];
      if (trebleStaves.length > 0 && bassStaves.length > 0) {
        const top = trebleStaves[0];
        const bot = bassStaves[0];

        const brace = new VF.StaveConnector(top, bot)
          .setType(VF.StaveConnector.type.BRACE);
        brace.setStyle(GOLD_STYLE);
        brace.setContext(ctx).draw();

        const leftBar = new VF.StaveConnector(top, bot)
          .setType(VF.StaveConnector.type.SINGLE_LEFT);
        leftBar.setStyle(GOLD_STYLE);
        leftBar.setContext(ctx).draw();

        const lastT = trebleStaves[trebleStaves.length - 1];
        const lastB = bassStaves[bassStaves.length - 1];
        const rightBar = new VF.StaveConnector(lastT, lastB)
          .setType(VF.StaveConnector.type.BOLD_DOUBLE_RIGHT);
        rightBar.setStyle(GOLD_STYLE);
        rightBar.setContext(ctx).draw();
      }

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
          background: INK, borderRadius: 8,
          border: `0.5px solid ${GOLD}33`, boxShadow: "0 1px 6px rgba(0,0,0,0.25)",
        }}
      />
      {label && (
        <p style={{ fontSize: 12, color: GOLD, opacity: 0.7, marginTop: 8, fontStyle: "italic", textAlign: "center" }}>
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

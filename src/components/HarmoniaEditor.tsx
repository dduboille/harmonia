"use client";

/**
 * HarmoniaEditor.tsx
 * Harmonia — Éditeur d'exercices SATB interactif
 *
 * Fonctionnalités :
 * - Portées grand staff (Sol + Fa) via VexFlowScoreClient
 * - Placement de notes voix par voix (B / T / A / S)
 * - Clavier chromatique 12 touches
 * - Validation harmonique en temps réel (parallèles, espacements, résolutions)
 * - Audio via PianoPlayer (note à la saisie + lecture complète)
 * - Feedback couleur sur les erreurs
 *
 * Usage :
 *   <HarmoniaEditor
 *     title="II – V – I en Do majeur"
 *     measures={["II", "V", "I"]}
 *     keySignature="C"
 *     solution={SOLUTION_IIVI}   // optionnel — pour comparaison
 *   />
 */

import React, { useRef, useState, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import PianoPlayer, { PianoPlayerRef, getInstrument } from "@/components/PianoPlayer";

// VexFlow côté client uniquement
const VexFlowScoreClient = dynamic(
  () => import("@/components/VexFlowScoreClient").then((m) => m.GrandStaffSATB),
  { ssr: false, loading: () => <div style={styles.staffPlaceholder}>Chargement partition…</div> }
);

// ─── Types ────────────────────────────────────────────────────────────────────

// Les règles d'écriture et le vocabulaire SATB vivent dans lib/satb-rules.ts :
// ils étaient définis ici, dans le composant, ce qui les rendait intestables.
import type { NoteName, Voice, NoteEntry, Measure, ValidationError } from "@/lib/satb-rules";
import {
  VOICES,
  VOICE_RANGES,
  CHROMATIC_ORDER,
  noteToMidi,
  noteName,
  validateSATB,
} from "@/lib/satb-rules";

export type { NoteName, Voice, NoteEntry, Measure, ValidationError };

export interface HarmoniaEditorProps {
  title?: string;
  subtitle?: string;
  measures?: string[];          // labels ex: ["II","V","I"]
  keySignature?: string;        // ex: "C", "G", "F"
  showKeySignature?: boolean;
  initialNotes?: Partial<Record<Voice, (NoteEntry | null)[]>>; // notes pré-remplies
  solution?: Record<Voice, NoteEntry>[]; // solution pour comparaison
  onComplete?: (measures: Measure[]) => void;
}

// ─── Constantes d'interface ───────────────────────────────────────────────────
// (VOICES, VOICE_LABELS, VOICE_RANGES, CHROMATIC_ORDER, noteToMidi et noteName
//  proviennent désormais de lib/satb-rules.)

const DEFAULT_OCTAVES: Record<Voice, number> = {
  bass: 2, tenor: 3, alto: 4, soprano: 4,
};

// Clavier — 7 touches naturelles uniquement
const NATURAL_KEYS: { name: NoteName; color: string }[] = [
  { name: "C", color: "#E53E3E" },
  { name: "D", color: "#DD6B20" },
  { name: "E", color: "#D69E2E" },
  { name: "F", color: "#38A169" },
  { name: "G", color: "#3182CE" },
  { name: "A", color: "#805AD5" },
  { name: "B", color: "#D53F8C" },
];

// Modificateurs d'altération. Le libellé est traduit à l'affichage : `labelKey`
// pointe vers messages/*.json → satb.accidentals.
type Accidental = "bb" | "b" | "n" | "#" | "##";
const ACCIDENTALS: { symbol: string; value: Accidental; labelKey: string }[] = [
  { symbol: "𝄫", value: "bb", labelKey: "bb" },
  { symbol: "♭", value: "b",  labelKey: "b" },
  { symbol: "♮", value: "n",  labelKey: "n" },
  { symbol: "♯", value: "#",  labelKey: "sharp" },
  { symbol: "𝄪", value: "##", labelKey: "x" },
];

const NOTE_TO_FR: Record<string, string> = {
  "C": "Do", "C#": "Do#", "Db": "Réb",
  "D": "Ré", "D#": "Ré#", "Eb": "Mib",
  "E": "Mi",
  "F": "Fa", "F#": "Fa#", "Gb": "Solb",
  "G": "Sol", "G#": "Sol#", "Ab": "Lab",
  "A": "La", "A#": "La#", "Bb": "Sib",
  "B": "Si",
};

// ─── Conversion vers format VexFlow ──────────────────────────────────────────

function measureToVexFlow(measures: Measure[], measureIdx: number): { treble: string; bass: string } {
  const m = measures[measureIdx];
  if (!m) return { treble: "B4/wr", bass: "C3/wr" };

  const s = m.soprano;
  const a = m.alto;
  const t = m.tenor;
  const b = m.bass;

  function noteStr(n: NoteEntry): string {
    if (!n.name) return "";
    // VexFlow attend ex: Cb4, C##4, Bb3
    return `${n.name}${n.octave}`;
  }

  // Portée Sol (Soprano + Alto)
  let treble: string;
  if (s.name && a.name) {
    treble = `(${noteStr(s)} ${noteStr(a)})/w`;
  } else if (s.name) {
    treble = `${noteStr(s)}/w`;
  } else if (a.name) {
    treble = `${noteStr(a)}/w`;
  } else {
    treble = "B4/wr";
  }

  // Portée Fa (Tenor + Bass)
  let bassClef: string;
  if (t.name && b.name) {
    bassClef = `(${noteStr(t)} ${noteStr(b)})/w`;
  } else if (t.name) {
    bassClef = `${noteStr(t)}/w`;
  } else if (b.name) {
    bassClef = `${noteStr(b)}/w`;
  } else {
    bassClef = "C3/wr";
  }

  return { treble, bass: bassClef };
}

function allMeasuresToVexFlow(measures: Measure[]): { treble: string; bass: string } {
  const parts = measures.map((_, i) => measureToVexFlow(measures, i));
  return {
    treble: parts.map(p => p.treble).join(" | "),
    bass:   parts.map(p => p.bass).join(" | "),
  };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function emptyMeasure(): Measure {
  return {
    bass:    { name: null, octave: DEFAULT_OCTAVES.bass },
    tenor:   { name: null, octave: DEFAULT_OCTAVES.tenor },
    alto:    { name: null, octave: DEFAULT_OCTAVES.alto },
    soprano: { name: null, octave: DEFAULT_OCTAVES.soprano },
  };
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = {
  staffPlaceholder: {
    height: 200,
    background: "#f8f7f4",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
    color: "#767676",
  } as React.CSSProperties,
};

// ─── Composant principal ──────────────────────────────────────────────────────

export default function HarmoniaEditor({
  title,
  subtitle,
  measures: measureLabels = ["I", "IV", "V", "I"],
  keySignature = "C",
  showKeySignature = true,
  initialNotes,
  solution,
  onComplete,
}: HarmoniaEditorProps) {
  const t = useTranslations("satb");

  /** Nom traduit d'une voix. */
  const voiceLabel = useCallback((v: Voice) => t(`voices.${v}` as never), [t]);

  /**
   * Met en mots une faute renvoyée par le moteur. Le moteur ne fabrique plus de
   * phrase : il renvoie un code et ses paramètres, seule façon de rendre le
   * feedback traduisible.
   */
  const errorMessage = useCallback((err: ValidationError): string => {
    const [v1, v2] = err.voices ?? [];
    return t(`errors.${err.type}` as never, {
      voice: err.params.voice ? voiceLabel(err.params.voice) : "",
      v1: v1 ? voiceLabel(v1) : "",
      v2: v2 ? voiceLabel(v2) : "",
      from: err.params.from ?? "",
      to: err.params.to ?? "",
      note: err.params.note ?? "",
      expected: err.params.expected ?? "",
    } as never);
  }, [t, voiceLabel]);

  // State
  const [measures, setMeasures] = useState<Measure[]>(() =>
    measureLabels.map(() => emptyMeasure())
  );
  const [activeVoice,   setActiveVoice]   = useState<Voice>("bass");
  const [activeMeasure, setActiveMeasure] = useState(0);
  const [accidental,    setAccidental]    = useState<Accidental>("n");
  const [errors,        setErrors]        = useState<ValidationError[]>([]);
  const [completed,     setCompleted]     = useState(false);
  const [showSolution,  setShowSolution]  = useState(false);

  const pianoRef = useRef<PianoPlayerRef>(null);

  // ── Suivi des erreurs récurrentes ──
  // Accumule les types d'erreurs rencontrés pendant toute la session de travail
  // (même corrigés avant la remise), puis les envoie une seule fois.
  const errorTypesSeen = useRef<Set<string>>(new Set());
  const errorsFlushed = useRef(false);

  function flushHarmonyErrors(useBeacon: boolean) {
    if (errorsFlushed.current) return;
    const types = Array.from(errorTypesSeen.current);
    if (types.length === 0) return;
    errorsFlushed.current = true;
    const erreurs: Record<string, number> = {};
    for (const t of types) erreurs[t] = 1;
    const payload = JSON.stringify({ erreurs });
    try {
      if (useBeacon && typeof navigator !== "undefined" && navigator.sendBeacon) {
        navigator.sendBeacon("/api/harmony-errors", new Blob([payload], { type: "application/json" }));
      } else {
        fetch("/api/harmony-errors", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: payload,
          keepalive: true,
        }).catch(() => {});
      }
    } catch { /* silencieux */ }
  }

  // Validation à chaque changement
  useEffect(() => {
    const errs = validateSATB(measures, keySignature, !showKeySignature);
    setErrors(errs);
    for (const e of errs) errorTypesSeen.current.add(e.type);
  }, [measures, keySignature, showKeySignature]);

  // Envoi au démontage (l'élève quitte la page sans forcément terminer)
  useEffect(() => {
    return () => { flushHarmonyErrors(true); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Fix 3 : flèches clavier → demi-ton ──
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
      e.preventDefault();
      setMeasures(prev => {
        const next = prev.map(m => ({ ...m }));
        const cur = { ...next[activeMeasure] };
        const v = cur[activeVoice];
        if (!v.name) return prev;
        // Trouver position dans l'ordre chromatique
        const normalized = v.name.replace("bb","").replace("##","")
          .replace("b","").replace("#","").replace("n","");
        // Utiliser noteName() pour normaliser vers dièses
        const normSharp = noteName(v.name as string);
        const idx = CHROMATIC_ORDER.indexOf(normSharp);
        if (idx === -1) return prev;
        let newIdx = idx + (e.key === "ArrowUp" ? 1 : -1);
        let newOctave = v.octave;
        if (newIdx > 11) { newIdx = 0; newOctave = Math.min(7, newOctave + 1); }
        if (newIdx < 0)  { newIdx = 11; newOctave = Math.max(1, newOctave - 1); }
        const newName = CHROMATIC_ORDER[newIdx] as NoteName;
        cur[activeVoice] = { name: newName, octave: newOctave };
        next[activeMeasure] = cur;
        // Audio
        const fr = NOTE_TO_FR[newName] || newName;
        setTimeout(() => pianoRef.current?.playNote(fr, newOctave, { duration: 0.8 }), 0);
        return next;
      });
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeMeasure, activeVoice]);

  // Placer une note (avec altération active)
  const placeNote = useCallback((natural: NoteName) => {
    // Construire le nom complet avec altération
    let fullName: NoteName = natural;
    if (accidental === "b")  fullName = `${natural}b` as NoteName;
    if (accidental === "bb") fullName = `${natural}bb` as NoteName;
    if (accidental === "#")  fullName = `${natural}#` as NoteName;
    if (accidental === "##") fullName = `${natural}##` as NoteName;
    // "n" = naturel, pas de modification

    setMeasures(prev => {
      const next = prev.map(m => ({ ...m }));
      const cur = { ...next[activeMeasure] };
      const existing = cur[activeVoice];
      cur[activeVoice] = { name: fullName, octave: existing.octave };
      next[activeMeasure] = cur;
      return next;
    });

    // Audio — utiliser le nom normalisé (sans double altération pour PianoPlayer)
    const audioName = fullName.replace("bb","b").replace("##","#");
    const fr = NOTE_TO_FR[audioName] || NOTE_TO_FR[natural] || natural;
    const oct = measures[activeMeasure]?.[activeVoice]?.octave ?? DEFAULT_OCTAVES[activeVoice];
    pianoRef.current?.playNote(fr, oct, { duration: 1.2 });
  }, [activeMeasure, activeVoice, accidental, measures]);

  // Effacer la note courante
  const clearNote = useCallback(() => {
    setMeasures(prev => {
      const next = prev.map(m => ({ ...m }));
      const cur = { ...next[activeMeasure] };
      cur[activeVoice] = { name: null, octave: DEFAULT_OCTAVES[activeVoice] };
      next[activeMeasure] = cur;
      return next;
    });
  }, [activeMeasure, activeVoice]);

  // Modifier l'octave
  const changeOctave = useCallback((delta: number) => {
    setMeasures(prev => {
      const next = prev.map(m => ({ ...m }));
      const cur = { ...next[activeMeasure] };
      const v = cur[activeVoice];
      cur[activeVoice] = { ...v, octave: Math.max(1, Math.min(7, v.octave + delta)) };
      next[activeMeasure] = cur;
      return next;
    });
  }, [activeMeasure, activeVoice]);

  // Jouer tout — planifié via l'horloge Tone.Transport (synchronisation précise)
  const playAll = useCallback(async () => {
    await getInstrument();
    const Tone = await import("tone");
    await Tone.start();

    const T = Tone.getTransport();
    T.stop();
    T.cancel();

    const interval = 1.2; // secondes par mesure
    const voices: Voice[] = ["bass", "tenor", "alto", "soprano"];

    measures.forEach((m, i) => {
      const when = i * interval;
      voices.forEach((v) => {
        const n = m[v];
        if (!n.name) return;
        const fr = NOTE_TO_FR[n.name] || n.name;
        // Planifie le déclenchement de la voix à l'instant de la mesure.
        // Le PianoPlayer gère la lecture (+ feedback visuel des touches).
        T.schedule(() => {
          pianoRef.current?.playNote(fr, n.octave, { duration: interval * 0.9 });
        }, when);
      });
    });

    T.start();
  }, [measures]);

  // Vexflow strings
  const { treble, bass } = allMeasuresToVexFlow(showSolution && solution ? solution.map(s => ({
    soprano: s.soprano, alto: s.alto, tenor: s.tenor, bass: s.bass
  })) : measures);

  // Stats
  const totalNotes = measureLabels.length * 4;
  const placedNotes = measures.reduce((acc, m) =>
    acc + VOICES.filter(v => m[v].name !== null).length, 0);
  const progress = Math.round((placedNotes / totalNotes) * 100);
  const hasErrors = errors.filter(e => e.severity === "error").length > 0;
  const hasWarnings = errors.filter(e => e.severity === "warning").length > 0;

  // Note actuelle
  const currentNote = measures[activeMeasure]?.[activeVoice];

  return (
    <div style={{
      fontFamily: "var(--font-sans, 'Georgia', serif)",
      maxWidth: 760,
      margin: "0 auto",
      background: "#fafaf8",
      borderRadius: 16,
      border: "0.5px solid #e8e3db",
      overflow: "hidden",
    }}>

      {/* Piano caché */}
      <div style={{ position:"absolute", opacity:0, pointerEvents:"none", height:0, overflow:"hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={3} startOctave={2} showLabels={false} />
      </div>

      {/* ── En-tête ── */}
      <div style={{
        padding: "20px 24px 16px",
        borderBottom: "0.5px solid #e8e3db",
        background: "#fff",
      }}>
        <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:12 }}>
          <div>
            <div style={{ fontSize:11, fontWeight:600, letterSpacing:"0.1em", color:"#BA7517", textTransform:"uppercase" as const, marginBottom:4 }}>
              Exercice SATB
            </div>
            <h2 style={{ fontSize:18, fontWeight:500, color:"#1a1a1a", margin:0, lineHeight:1.3 }}>
              {title ?? t("defaultTitle")}
            </h2>
            {subtitle && <p style={{ fontSize:13, color:"#888", margin:"4px 0 0", lineHeight:1.5 }}>{subtitle}</p>}
          </div>
          {/* Progression */}
          <div style={{ textAlign:"right" as const, flexShrink:0 }}>
            <div style={{ fontSize:11, color: "#767676", marginBottom:4 }}>{placedNotes}/{totalNotes} notes</div>
            <div style={{ width:80, height:4, background:"#f0ece6", borderRadius:4, overflow:"hidden" }}>
              <div style={{ height:"100%", width:`${progress}%`, background:hasErrors?"#E53E3E":"#185FA5", borderRadius:4, transition:"width .3s" }} />
            </div>
          </div>
        </div>

        {/* Navigation mesures */}
        <div style={{ display:"flex", gap:8, marginTop:14 }}>
          {measureLabels.map((label, i) => {
            const filled = VOICES.filter(v => measures[i]?.[v].name !== null).length;
            const isActive = i === activeMeasure;
            return (
              <button key={i} onClick={() => setActiveMeasure(i)}
                style={{
                  padding: "5px 14px",
                  borderRadius: 20,
                  border: `0.5px solid ${isActive ? "#185FA5" : "#e0dbd3"}`,
                  background: isActive ? "#185FA5" : "#fff",
                  color: isActive ? "#fff" : "#555",
                  fontSize: 12,
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all .15s",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}>
                <span style={{ fontFamily:"monospace" }}>{label}</span>
                <span style={{
                  width:16, height:16, borderRadius:"50%",
                  background: filled === 4 ? (isActive?"rgba(255,255,255,0.3)":"#E1F5EE") : "transparent",
                  border: `1px solid ${filled === 4 ? (isActive?"rgba(255,255,255,0.5)":"#0F6E56") : (isActive?"rgba(255,255,255,0.3)":"#e0dbd3")}`,
                  fontSize: 9,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  color: filled === 4 ? (isActive?"#fff":"#0F6E56") : (isActive?"rgba(255,255,255,0.6)":"#bbb"),
                }}>
                  {filled}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Portées ── */}
      <div style={{ padding:"20px 24px", background:"#fff", borderBottom:"0.5px solid #e8e3db" }}>
        <div style={{ background:"#fdfcfa", borderRadius:10, border:"0.5px solid #ede8e0", padding:"16px 12px", overflow:"auto" }}>
          {/* Labels voix */}
          <div style={{ display:"flex", justifyContent:"space-between", fontSize:10, color: "#767676", letterSpacing:"0.08em", marginBottom:8, padding:"0 8px" }}>
            <span>SOPRANO · ALTO</span>
          </div>
          <VexFlowScoreClient
            treble={treble}
            bass={bass}
            keySignature={showKeySignature ? keySignature : undefined}
            width={700}
            label={measureLabels.map((l,i)=>`Mesure ${i+1}: ${l}`).join(" · ")}
          />
          <div style={{ fontSize:10, color: "#767676", letterSpacing:"0.08em", marginTop:6, padding:"0 8px" }}>
            TÉNOR · BASSE
          </div>
        </div>

        {/* Indicateur mesure active */}
        <div style={{ display:"flex", gap:4, marginTop:10, justifyContent:"center" }}>
          {measureLabels.map((_, i) => (
            <div key={i} style={{
              width: `${100/measureLabels.length}%`,
              height: 3,
              borderRadius: 2,
              background: i === activeMeasure ? "#185FA5" : "#e0dbd3",
              transition: "background .2s",
            }} />
          ))}
        </div>
      </div>

      {/* ── Panneau de saisie ── */}
      <div style={{ padding:"20px 24px" }}>

        {/* Sélecteur de voix */}
        <div style={{ display:"flex", gap:8, marginBottom:16, alignItems:"center" }}>
          <span style={{ fontSize:11, color: "#767676", letterSpacing:"0.06em", marginRight:4 }}>VOIX</span>
          {VOICES.map(v => (
            <button key={v} onClick={() => setActiveVoice(v)}
              style={{
                padding: "7px 16px",
                borderRadius: 8,
                border: `1px solid ${activeVoice === v ? "#185FA5" : "#e0dbd3"}`,
                background: activeVoice === v ? "#185FA5" : "#fff",
                color: activeVoice === v ? "#fff" : "#666",
                fontSize: 13,
                fontWeight: activeVoice === v ? 600 : 400,
                cursor: "pointer",
                transition: "all .15s",
              }}>
              {voiceLabel(v)}
            </button>
          ))}
          <button onClick={clearNote}
            style={{ marginLeft:"auto", padding:"6px 12px", borderRadius:8, border:"0.5px solid #e0dbd3", background:"transparent", color: "#767676", fontSize:11, cursor:"pointer" }}>
            × {t("clear")}
          </button>
        </div>

        {/* Statut courant */}
        <div style={{
          padding:"8px 14px",
          background:"#f4f1ec",
          borderRadius:8,
          fontSize:12,
          color:"#666",
          marginBottom:16,
          display:"flex",
          alignItems:"center",
          gap:8,
        }}>
          <span style={{ color: "#767676" }}>Voix :</span>
          <strong style={{ color:"#185FA5" }}>{voiceLabel(activeVoice)}</strong>
          <span style={{ color:"#e0dbd3" }}>·</span>
          <span style={{ color: "#767676" }}>Mesure :</span>
          <strong>{activeMeasure + 1} ({measureLabels[activeMeasure]})</strong>
          <span style={{ color:"#e0dbd3" }}>·</span>
          <span style={{ color: "#767676" }}>Note :</span>
          <strong style={{ color: currentNote?.name ? "#1a1a1a" : "#bbb", fontFamily:"monospace" }}>
            {currentNote?.name ? `${currentNote.name}${currentNote.octave}` : "—"}
          </strong>
        </div>

        {/* Clavier — 7 touches naturelles + modificateurs */}
        <div style={{ marginBottom:16 }}>
          <div style={{ fontSize:11, color: "#767676", letterSpacing:"0.06em", marginBottom:10 }}>NOTES</div>

          {/* Modificateurs d'altération */}
          <div style={{ display:"flex", gap:6, marginBottom:10, alignItems:"center" }}>
            <span style={{ fontSize:11, color: "#767676", marginRight:4 }}>{t("accidentalLabel")}</span>
            {ACCIDENTALS.map(acc => (
              <button key={acc.value} onClick={() => setAccidental(acc.value)}
                title={t(`accidentals.${acc.labelKey}` as never)}
                aria-label={t(`accidentals.${acc.labelKey}` as never)}
                style={{
                  width: 38, height: 38,
                  borderRadius: 8,
                  border: `1.5px solid ${accidental === acc.value ? "#185FA5" : "#e0dbd3"}`,
                  background: accidental === acc.value ? "#185FA5" : "#fff",
                  color: accidental === acc.value ? "#fff" : "#555",
                  fontSize: 16,
                  cursor: "pointer",
                  transition: "all .12s",
                  fontFamily: "serif",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                {acc.symbol}
              </button>
            ))}
            <span style={{ fontSize:11, color: "#767676", marginLeft:4 }}>
              {t(`accidentals.${ACCIDENTALS.find(a => a.value === accidental)?.labelKey}` as never)}
            </span>
          </div>

          {/* 7 touches naturelles */}
          <div style={{ display:"flex", gap:6 }}>
            {NATURAL_KEYS.map(key => {
              // La touche est "active" si la note courante commence par cette lettre naturelle
              const curName = currentNote?.name ?? "";
              const isSelected = curName === key.name
                || curName === `${key.name}b`
                || curName === `${key.name}bb`
                || curName === `${key.name}#`
                || curName === `${key.name}##`;
              return (
                <button key={key.name} onClick={() => placeNote(key.name)}
                  style={{
                    flex: 1,
                    height: 56,
                    borderRadius: 10,
                    border: `2px solid ${isSelected ? "#fff" : "transparent"}`,
                    background: isSelected ? key.color : key.color,
                    color: "#fff",
                    fontSize: 15,
                    fontWeight: 700,
                    cursor: "pointer",
                    opacity: isSelected ? 1 : 0.85,
                    transform: isSelected ? "scale(1.04)" : "scale(1)",
                    transition: "all .12s",
                    boxShadow: isSelected ? `0 0 0 3px ${key.color}50` : "0 2px 4px rgba(0,0,0,0.1)",
                    fontFamily: "monospace",
                    position: "relative" as const,
                  }}>
                  {key.name}
                  {accidental !== "n" && isSelected && (
                    <span style={{ position:"absolute", top:4, right:6, fontSize:10, opacity:0.8 }}>
                      {ACCIDENTALS.find(a => a.value === accidental)?.symbol}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Info note complète */}
          {currentNote?.name && accidental !== "n" && (
            <div style={{ fontSize:11, color:"#888", marginTop:8 }}>
              Prochain placement : <strong style={{ color:"#185FA5", fontFamily:"monospace" }}>
                {"{note}"}{ACCIDENTALS.find(a=>a.value===accidental)?.symbol} → ex. C{ACCIDENTALS.find(a=>a.value===accidental)?.symbol}
              </strong>
            </div>
          )}
        </div>

        {/* Octave */}
        <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:20 }}>
          <span style={{ fontSize:11, color: "#767676", letterSpacing:"0.06em" }}>OCTAVE</span>
          <button onClick={() => changeOctave(-1)}
            style={{ width:32, height:32, borderRadius:8, border:"0.5px solid #e0dbd3", background:"#fff", color:"#555", fontSize:16, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
            −
          </button>
          <span style={{ fontSize:16, fontWeight:600, color:"#185FA5", minWidth:24, textAlign:"center" as const, fontFamily:"monospace" }}>
            {currentNote?.octave ?? DEFAULT_OCTAVES[activeVoice]}
          </span>
          <button onClick={() => changeOctave(+1)}
            style={{ width:32, height:32, borderRadius:8, border:"0.5px solid #e0dbd3", background:"#fff", color:"#555", fontSize:16, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
            +
          </button>
          <span style={{ fontSize:11, color: "#767676", marginLeft:4 }}>
            {t("range", { voice: voiceLabel(activeVoice) })} {VOICE_RANGES[activeVoice].min[0]}{VOICE_RANGES[activeVoice].min[1]}–{VOICE_RANGES[activeVoice].max[0]}{VOICE_RANGES[activeVoice].max[1]}
          </span>
        </div>

        {/* ── Feedback erreurs ── */}
        {/* aria-live : le verdict harmonique s'affichait visuellement mais
            n'était jamais annoncé — le cœur pédagogique du produit restait
            muet pour un lecteur d'écran. */}
        {errors.length > 0 && (
          <div style={{ marginBottom:20 }} role="status" aria-live="polite">
            <div style={{ fontSize:11, color:"#6b6b6b", letterSpacing:"0.06em", marginBottom:8 }}>{t("analysisTitle")}</div>
            <div style={{ display:"flex", flexDirection:"column" as const, gap:6 }}>
              {errors.map((err, i) => (
                <div key={i} style={{
                  padding:"8px 12px",
                  borderRadius:8,
                  background: err.severity === "error" ? "#FFF5F5" : "#FFFBEB",
                  border: `0.5px solid ${err.severity === "error" ? "#FC8181" : "#F6E05E"}`,
                  fontSize:12,
                  color: err.severity === "error" ? "#C53030" : "#744210",
                  display:"flex",
                  alignItems:"center",
                  gap:8,
                }}>
                  <span style={{ fontSize:14 }}>{err.severity === "error" ? "✗" : "⚠"}</span>
                  {errorMessage(err)}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pas d'erreurs et notes placées */}
        {errors.length === 0 && placedNotes > 0 && (
          <div role="status" aria-live="polite" style={{
            marginBottom:20, padding:"8px 12px", borderRadius:8,
            background:"#F0FFF4", border:"0.5px solid #9AE6B4",
            fontSize:12, color:"#276749", display:"flex", alignItems:"center", gap:8,
          }}>
            <span>✓</span>
            {placedNotes === totalNotes ? t("complete") : t("noError")}
          </div>
        )}

        {/* ── Actions ── */}
        <div style={{ display:"flex", gap:10, alignItems:"center", flexWrap:"wrap" as const }}>
          <button onClick={playAll}
            style={{
              padding:"9px 20px", borderRadius:10,
              border:"1px solid #185FA5",
              background:"#E6F1FB", color:"#185FA5",
              fontSize:13, fontWeight:500, cursor:"pointer",
              display:"flex", alignItems:"center", gap:8,
            }}>
            ▶ {t("play")}
          </button>

          {solution && (
            <button onClick={() => setShowSolution(s => !s)}
              style={{
                padding:"9px 20px", borderRadius:10,
                border:"1px solid #e0dbd3",
                background:showSolution?"#f0ece6":"#fff",
                color:"#666", fontSize:13, cursor:"pointer",
              }}>
              {showSolution ? t("hideSolution") : t("showSolution")}
            </button>
          )}

          <button
            onClick={() => {
              if (placedNotes === totalNotes) {
                setCompleted(true);
                flushHarmonyErrors(false);
                onComplete?.(measures);
              }
            }}
            disabled={placedNotes < totalNotes || hasErrors}
            style={{
              marginLeft:"auto",
              padding:"9px 24px", borderRadius:10,
              border:"none",
              background: placedNotes === totalNotes && !hasErrors ? "#185FA5" : "#e0dbd3",
              color: placedNotes === totalNotes && !hasErrors ? "#fff" : "#aaa",
              fontSize:13, fontWeight:600,
              cursor: placedNotes === totalNotes && !hasErrors ? "pointer" : "default",
              transition:"all .2s",
            }}>
            Terminer ✓
          </button>
        </div>

        {/* Message de complétion */}
        {completed && (
          <div style={{
            marginTop:16, padding:"14px 18px", borderRadius:10,
            background:"#F0FFF4", border:"1px solid #9AE6B4",
            fontSize:14, color:"#276749",
          }}>
            🎹 {t("exerciseDone")} {errors.length === 0 ? t("exercisePerfect") : ""}
          </div>
        )}
      </div>
    </div>
  );
}

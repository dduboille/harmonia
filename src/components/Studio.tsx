"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import StudioScore from "@/components/StudioScore";
import StudioAnalyse from "@/components/StudioAnalyse";
import PianoPlayer, { type PianoPlayerRef } from "@/components/PianoPlayer";
import { extraireMusicXML } from "@/lib/lire-musicxml";
import { parseMusicXML, TPQ, type ParsedScore } from "@/lib/musicxml-parse";
import { planifierLecture } from "@/lib/studio-playback";
import type { AnalysisResult } from "@/app/api/analyse-partition/route";

/**
 * Studio.tsx
 * Harmonia — Le « Studio de composition » : l'élève dépose un MusicXML composé
 * dans MuseScore, Harmonia le GRAVE (Verovio, via StudioScore), le JOUE avec
 * surlignage de la mesure courante, et affiche son ANALYSE harmonique par mesure.
 *
 * Au dépôt, deux traitements EN PARALLÈLE, indépendants :
 *  - `extraireMusicXML` sort le texte MusicXML pour la gravure et la lecture ;
 *  - la route `/api/analyse-partition` produit l'analyse.
 * Chacun peut réussir ou échouer seul : une gravure sans analyse (ou l'inverse)
 * reste utile, donc on n'échoue pas l'un pour l'autre.
 *
 * POURQUOI programmer la lecture par `setTimeout` (et non tout d'avance dans Tone) :
 * l'ARRÊT doit couper le son. En déclenchant chaque note à son instant via un
 * timeout dont on garde l'identifiant, l'arrêt annule les notes encore à venir ; la
 * note déjà partie est relâchée par `pianoRef.stopAll()`. Les mêmes timeouts font
 * avancer le surlignage `mesureActive`, aligné sur les débuts de mesure.
 */

const MAX_OCTETS = 5 * 1024 * 1024; // 5 Mo, comme l'analyseur.
const TEMPO_DEFAUT = 90;

/** Analyse d'un fichier par la route ; lève une Error au message affichable. */
async function analyserFichier(file: File): Promise<AnalysisResult> {
  const fd = new FormData();
  fd.append("file", file);
  let res: Response;
  try {
    res = await fetch("/api/analyse-partition", { method: "POST", body: fd });
  } catch {
    throw new Error("Erreur réseau. Veuillez réessayer.");
  }
  const data = await res.json();
  if (!res.ok) throw new Error(data.error ?? "Erreur lors de l'analyse.");
  return data as AnalysisResult;
}

export default function Studio() {
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [xml, setXml] = useState<string | null>(null);
  const [analyse, setAnalyse] = useState<AnalysisResult | null>(null);
  const [tempo, setTempo] = useState(TEMPO_DEFAUT);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mesureActive, setMesureActive] = useState<number | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const pianoRef = useRef<PianoPlayerRef>(null);
  // Identifiants des timeouts en attente (notes + surlignage + fin), pour tout annuler.
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  // ── Lecture ────────────────────────────────────────────────────────────────

  const arreterLecture = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    pianoRef.current?.stopAll();
    setIsPlaying(false);
    setMesureActive(null);
  }, []);

  const lire = useCallback(() => {
    if (!xml || isPlaying) return;

    let score: ParsedScore;
    try {
      score = parseMusicXML(xml);
    } catch {
      setError("Lecture impossible : ce MusicXML n'a pas pu être analysé.");
      return;
    }

    const evenements = planifierLecture(score, tempo);
    if (evenements.length === 0) return;

    const ids: ReturnType<typeof setTimeout>[] = [];
    const piano = pianoRef.current;

    // Chaque note à son instant. On passe par un timeout (et non par le `startTime`
    // de Tone) pour que l'arrêt, qui annule les timeouts, coupe les notes à venir.
    for (const e of evenements) {
      ids.push(setTimeout(() => {
        piano?.playVoicing([e.spec], { duration: e.duration, velocity: e.velocity });
      }, e.startTime * 1000));
    }

    // Surlignage : un timeout au début de chaque mesure. `measure.start` est en ticks.
    const secondesParTick = 60 / tempo / TPQ;
    for (const m of score.measures) {
      const debutSec = m.start * secondesParTick;
      ids.push(setTimeout(() => setMesureActive(m.numero), debutSec * 1000));
    }

    // Fin de la pièce (dernière note relâchée) → on remet tout à zéro.
    const finSec = Math.max(...evenements.map((e) => e.startTime + e.duration));
    ids.push(setTimeout(() => arreterLecture(), finSec * 1000 + 200));

    timeoutsRef.current = ids;
    setIsPlaying(true);
  }, [xml, tempo, isPlaying, arreterLecture]);

  // À la disparition du composant, ne laisser aucun timeout orphelin.
  useEffect(() => () => { timeoutsRef.current.forEach(clearTimeout); }, []);

  // ── Import ─────────────────────────────────────────────────────────────────

  const handleFile = useCallback(async (file: File) => {
    arreterLecture();
    setError(null);
    setXml(null);
    setAnalyse(null);
    setMesureActive(null);

    if (file.size > MAX_OCTETS) {
      setError("Fichier trop lourd : 5 Mo maximum.");
      return;
    }

    setIsLoading(true);
    // Les deux traitements sont INDÉPENDANTS : `allSettled` pour que l'échec de l'un
    // n'emporte pas l'autre (une gravure sans analyse reste utile, et inversement).
    const [xmlR, anaR] = await Promise.allSettled([
      extraireMusicXML(file),
      analyserFichier(file),
    ]);
    setIsLoading(false);

    if (xmlR.status === "fulfilled") setXml(xmlR.value);
    if (anaR.status === "fulfilled") setAnalyse(anaR.value);

    // Messages d'erreur, du plus englobant au plus précis.
    if (xmlR.status === "rejected" && anaR.status === "rejected") {
      setError("Fichier illisible : vérifiez qu'il s'agit d'un MusicXML valide (.mxl, .xml, .musicxml).");
    } else if (xmlR.status === "rejected") {
      setError("Partition illisible : impossible d'extraire le MusicXML de ce fichier.");
    } else if (anaR.status === "rejected") {
      setError(anaR.reason instanceof Error ? anaR.reason.message : "Erreur lors de l'analyse.");
    }
  }, [arreterLecture]);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }, [handleFile]);

  const nouvellePartition = useCallback(() => {
    arreterLecture();
    setXml(null);
    setAnalyse(null);
    setError(null);
  }, [arreterLecture]);

  // ── Zone de dépôt (reprise d'AnalysePartition) ───────────────────────────────

  const dropZone = (
    <div
      onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={onDrop}
      onClick={() => inputRef.current?.click()}
      style={{
        border: `2px dashed ${isDragging ? "#5C3D6E" : "#c9c0d3"}`,
        borderRadius: 16,
        padding: "56px 32px",
        textAlign: "center",
        cursor: "pointer",
        background: isDragging ? "#F0EBF8" : "#faf9f7",
        transition: "all .18s",
      }}
    >
      <div style={{ fontSize: 40, marginBottom: 12 }}>✎</div>
      <div style={{ fontSize: 17, fontWeight: 700, color: "#1a1a1a", marginBottom: 6, fontFamily: "Georgia, serif" }}>
        Déposez votre composition ici
      </div>
      <div style={{ fontSize: 13, color: "#888", marginBottom: 18, fontFamily: "system-ui, sans-serif" }}>
        ou cliquez pour choisir un fichier
      </div>
      <div style={{
        display: "inline-block",
        padding: "6px 16px",
        border: "1px solid #c9c0d3",
        borderRadius: 20,
        fontSize: 11,
        color: "#777",
        fontFamily: "system-ui, sans-serif",
        letterSpacing: "0.04em",
      }}>
        .mxl · .xml · .musicxml
      </div>
      <div style={{ marginTop: 10, fontSize: 11, color: "#767676", fontFamily: "system-ui, sans-serif" }}>
        Max 5 Mo
      </div>
      <input
        ref={inputRef}
        type="file"
        accept=".xml,.musicxml,.mxl"
        style={{ display: "none" }}
        onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
      />
    </div>
  );

  // ── Chargement ───────────────────────────────────────────────────────────────

  if (isLoading) {
    return (
      <main style={{ minHeight: "100vh", background: "#f4f1ec", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", fontFamily: "system-ui, sans-serif" }}>
          <div style={{ fontSize: 36, marginBottom: 16, animation: "spin 1.2s linear infinite" }}>✎</div>
          <div style={{ fontSize: 15, color: "#5C3D6E", fontWeight: 600 }}>Préparation du studio…</div>
          <div style={{ fontSize: 12, color: "#999", marginTop: 6 }}>Gravure de la partition · Analyse harmonique</div>
          <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
        </div>
      </main>
    );
  }

  // ── Aucun fichier chargé : l'accueil ─────────────────────────────────────────

  if (!xml && !analyse) {
    return (
      <main style={{ minHeight: "100vh", background: "#f4f1ec", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "#BA7517", textTransform: "uppercase", marginBottom: 8, fontFamily: "system-ui, sans-serif" }}>
              Fonctionnalité Pro
            </div>
            <h1 style={{ fontSize: 26, fontWeight: 700, color: "#1a1a1a", margin: "0 0 10px", fontFamily: "Georgia, serif" }}>
              Studio de composition
            </h1>
            <p style={{ fontSize: 14, color: "#666", lineHeight: 1.65, margin: 0, fontFamily: "system-ui, sans-serif" }}>
              Importez votre composition (MusicXML, depuis MuseScore) : Harmonia la grave sur portées, la joue avec surlignage de la mesure courante, et en donne l'analyse harmonique.
            </p>
          </div>
          {error && (
            <div style={{
              background: "#FFEBEE", border: "1px solid #FFCDD2", borderRadius: 10,
              padding: "12px 16px", marginBottom: 20, fontSize: 13, color: "#C62828",
              fontFamily: "system-ui, sans-serif",
            }}>
              {error}
            </div>
          )}
          {dropZone}
        </div>
      </main>
    );
  }

  // ── Studio : partition + lecture + analyse ───────────────────────────────────

  return (
    <main style={{ minHeight: "100vh", background: "#f4f1ec", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        {/* En-tête */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
          <div>
            {analyse && (
              <div style={{ fontSize: 11, color: "#888", fontFamily: "system-ui, sans-serif", marginBottom: 4 }}>
                {analyse.fichier}{analyse.tonalite ? ` · ${analyse.tonalite}` : ""}
              </div>
            )}
            <h1 style={{ fontSize: 22, fontWeight: 700, color: "#1a1a1a", margin: 0, fontFamily: "Georgia, serif" }}>
              Studio de composition
            </h1>
          </div>
          <button
            onClick={nouvellePartition}
            style={{
              padding: "8px 16px", borderRadius: 8, border: "1px solid #c9c0d3",
              background: "#fff", color: "#555", fontSize: 12, cursor: "pointer",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            ← Nouvelle partition
          </button>
        </div>

        {/* Une erreur partielle (ex. analyse échouée mais gravure OK) reste visible. */}
        {error && (
          <div style={{
            background: "#FFF3E0", border: "1px solid #FFE0B2", borderRadius: 10,
            padding: "10px 14px", marginBottom: 16, fontSize: 13, color: "#B26A00",
            fontFamily: "system-ui, sans-serif",
          }}>
            {error}
          </div>
        )}

        {/* Partition gravée */}
        {xml && (
          <div style={{
            background: "#fff", borderRadius: 12, padding: "16px 12px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.07)", marginBottom: 16,
          }}>
            <StudioScore musicxml={xml} />
          </div>
        )}

        {/* Contrôles de lecture */}
        {xml && (
          <div style={{
            display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap",
            background: "#fff", borderRadius: 12, padding: "12px 20px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.07)", marginBottom: 20,
            fontFamily: "system-ui, sans-serif",
          }}>
            <button
              onClick={isPlaying ? arreterLecture : lire}
              style={{
                padding: "10px 24px", borderRadius: 10, border: "none",
                background: isPlaying ? "#C62828" : "#5C3D6E", color: "#fff",
                fontSize: 14, fontWeight: 700, cursor: "pointer",
                display: "inline-flex", alignItems: "center", gap: 8,
              }}
            >
              {isPlaying ? "◼ Arrêter" : "▶ Lire"}
            </button>

            <label style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 13, color: "#555" }}>
              Tempo
              <input
                type="range"
                min={40}
                max={200}
                step={1}
                value={tempo}
                // Changer le tempo pendant la lecture désynchroniserait les timeouts déjà
                // programmés : on le fige tant que ça joue.
                disabled={isPlaying}
                onChange={e => setTempo(Number(e.target.value))}
                style={{ accentColor: "#5C3D6E" }}
              />
              <span style={{ minWidth: 56, fontWeight: 700, color: "#1a1a1a" }}>{tempo} BPM</span>
            </label>

            {mesureActive !== null && (
              <span style={{ marginLeft: "auto", fontSize: 12, color: "#5C3D6E", fontWeight: 700 }}>
                mesure {mesureActive}
              </span>
            )}
          </div>
        )}

        {/* Analyse par mesure, la mesure courante surlignée */}
        {analyse && (
          <div style={{ marginBottom: 24 }}>
            <div style={{
              fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#999",
              textTransform: "uppercase", marginBottom: 10, fontFamily: "system-ui, sans-serif",
            }}>
              Analyse harmonique
            </div>
            <StudioAnalyse analyse={analyse} mesureActive={mesureActive} />
          </div>
        )}

        {/* PianoPlayer monté caché : il ne sert qu'à SONNER (cf. CompositionGuidee). */}
        <div style={{ height: 0, overflow: "hidden", pointerEvents: "none" }}>
          <PianoPlayer ref={pianoRef} octaves={5} startOctave={1} showLabels={false} />
        </div>
      </div>
    </main>
  );
}

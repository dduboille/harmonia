"use client";

import React, { useRef, useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import StudioScore, { type StudioScoreRef } from "@/components/StudioScore";
import { parseMusicXML } from "@/lib/musicxml-parse";
import { planifierLecture } from "@/lib/studio-playback";
import { CONSERVATOIRE_DATA, type CoursConservatoireData } from "@/data/conservatoireData";

const ACCENT = "#2D5A8E";
const ACCENT_BG = "#EEF3FA";

const FR_NOTE: Record<string, string> = {
  Do: "C", Ré: "D", Re: "D", Mi: "E", Fa: "F", Sol: "G", La: "A", Si: "B",
};
const FLAT_TO_SHARP: Record<string, string> = {
  Cb: "B", Db: "C#", Eb: "D#", Fb: "E", Gb: "F#", Ab: "G#", Bb: "A#",
};

function parseNote(s: string): [string, number] {
  // French solfège: "Do:3", "Ré#:4", "Mib:3"
  const frM = s.match(/^(Do|Ré|Re|Mi|Fa|Sol|La|Si)([#b]?):(\d)$/);
  if (frM) {
    const raw = (FR_NOTE[frM[1]] ?? "C") + frM[2];
    return [FLAT_TO_SHARP[raw] ?? raw, parseInt(frM[3])];
  }
  // English: "C4", "F#3", "G#5"
  const enM = s.match(/^([A-G][#b]?)(\d)$/);
  if (enM) return [FLAT_TO_SHARP[enM[1]] ?? enM[1], parseInt(enM[2])];
  return ["C", 4];
}

export function VueConservatoire({
  courseNum,
  data: dataProp,
}: {
  courseNum?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  data?: CoursConservatoireData;
}) {
  const params = useParams();
  const locale = (params?.locale as string) ?? "fr";
  const pianoRef = useRef<PianoPlayerRef>(null);
  const tc = useTranslations("common");
  const tcons = useTranslations("conservatoire");

  const ck = `cours${courseNum}` as const;
  const data: CoursConservatoireData = courseNum ? {
    intuition: tcons(`${ck}.intuition` as any),
    reference: {
      badge: tcons(`${ck}.badge` as any),
      citation: tcons(`${ck}.citation` as any),
      auteur: tcons(`${ck}.auteur` as any),
    },
    voix: [
      tcons(`${ck}.voix0` as any),
      tcons(`${ck}.voix1` as any),
      tcons(`${ck}.voix2` as any),
    ].filter(Boolean),
    repertoire: {
      titre: tcons(`${ck}.titre` as any),
      compositeur: tcons(`${ck}.compositeur` as any),
      notes: CONSERVATOIRE_DATA[ck as `cours${1|2|3|4|5|6|7|8|9}`].repertoire.notes,
      musicxml: CONSERVATOIRE_DATA[ck as `cours${1|2|3|4|5|6|7|8|9}`].repertoire.musicxml,
    },
    pieges: [{
      erreur: tcons(`${ck}.piege0erreur` as any),
      correction: tcons(`${ck}.piege0correction` as any),
    }],
    resume: [
      tcons(`${ck}.resume0` as any),
      tcons(`${ck}.resume1` as any),
      tcons(`${ck}.resume2` as any),
    ].filter(Boolean),
  } : (dataProp ?? CONSERVATOIRE_DATA[`cours${courseNum!}` as `cours${1|2|3|4|5|6|7|8|9}`]);

  const playRepertoire = useCallback(() => {
    data.repertoire.notes.forEach((n, i) => {
      const [note, octave] = parseNote(n);
      setTimeout(() => pianoRef.current?.playNote(note, octave, { duration: 0.8 }), i * 380);
    });
  }, [data.repertoire.notes]);

  // ── Extrait noté (`musicxml`) : lecture avec surlignage synchronisé, même
  // mécanique que Studio.tsx (timeouts annulables + repère piloté par rAF). ──
  const scoreRef = useRef<StudioScoreRef>(null);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const rafRef = useRef<number | null>(null);
  const departRef = useRef<number>(0);
  const [isPlayingScore, setIsPlayingScore] = useState(false);

  const arreterLecturePartition = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    if (rafRef.current !== null) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
    pianoRef.current?.stopAll();
    scoreRef.current?.surlignerATemps(null);
    setIsPlayingScore(false);
  }, []);

  const lirePartition = useCallback(() => {
    const musicxml = data.repertoire.musicxml;
    if (!musicxml || isPlayingScore) return;

    const score = parseMusicXML(musicxml);
    const { evenements, dureeTotale } = planifierLecture(score, 1);
    if (evenements.length === 0) return;

    const ids: ReturnType<typeof setTimeout>[] = [];
    const piano = pianoRef.current;
    for (const e of evenements) {
      ids.push(setTimeout(() => {
        piano?.playVoicing([e.spec], { duration: e.duration, velocity: e.velocity });
      }, e.startTime * 1000));
    }
    ids.push(setTimeout(() => arreterLecturePartition(), dureeTotale * 1000 + 200));
    timeoutsRef.current = ids;

    departRef.current = performance.now();
    const animer = () => {
      scoreRef.current?.surlignerATemps(performance.now() - departRef.current);
      rafRef.current = requestAnimationFrame(animer);
    };
    rafRef.current = requestAnimationFrame(animer);

    setIsPlayingScore(true);
  }, [data.repertoire.musicxml, isPlayingScore, arreterLecturePartition]);

  useEffect(() => () => {
    timeoutsRef.current.forEach(clearTimeout);
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      {/* PianoPlayer masqué */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={3} startOctave={3} showLabels={false} />
      </div>

      {/* 1. Intuition musicale */}
      <div style={{ background: ACCENT_BG, borderRadius: 10, padding: "16px 20px", marginBottom: 12 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: ACCENT, letterSpacing: "0.1em", marginBottom: 8, textTransform: "uppercase" as const }}>
          {tc("conservatoireIntuition")}
        </div>
        <p style={{ fontSize: 14, color: "#1a1a1a", lineHeight: 1.75, margin: 0 }}>
          {data.intuition}
        </p>
      </div>

      {/* 2. Référence pédagogique */}
      <div style={{ border: `0.5px solid ${ACCENT}`, borderRadius: 10, padding: "16px 20px", marginBottom: 12 }}>
        <div style={{ display: "inline-block", background: ACCENT, color: "#fff", fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 20, marginBottom: 10, letterSpacing: "0.05em" }}>
          {data.reference.badge}
        </div>
        <p style={{ fontSize: 14, color: "#333", lineHeight: 1.75, fontStyle: "italic", margin: "0 0 8px" }}>
          « {data.reference.citation} »
        </p>
        <p style={{ fontSize: 12, color: "#888", margin: "0 0 10px" }}>— {data.reference.auteur}</p>
        <Link href={`/${locale}/cursus`} style={{ fontSize: 12, color: ACCENT, textDecoration: "none", fontWeight: 600 }}>
          {tc("conservatoireCursus")}
        </Link>
      </div>

      {/* 3. Conduite des voix */}
      <div style={{ background: "#fff", border: "0.5px solid #e0dbd3", borderRadius: 10, padding: "16px 20px", marginBottom: 12 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: ACCENT, letterSpacing: "0.1em", marginBottom: 10, textTransform: "uppercase" as const }}>
          {tc("conservatoireVoix")}
        </div>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          {data.voix.map((rule, i) => (
            <li key={i} style={{ fontSize: 13, color: "#333", lineHeight: 1.7, marginBottom: 4 }}>
              {rule}
            </li>
          ))}
        </ul>
      </div>

      {/* 4. Exemple du répertoire */}
      <div style={{ background: "#fff", border: "0.5px solid #e0dbd3", borderRadius: 10, padding: "16px 20px", marginBottom: 12 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: ACCENT, letterSpacing: "0.1em", marginBottom: 10, textTransform: "uppercase" as const }}>
          {tc("conservatoireRepertoire")}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: 10, marginBottom: data.repertoire.musicxml ? 12 : 0 }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#1a1a1a" }}>{data.repertoire.titre}</div>
            <div style={{ fontSize: 13, color: "#666", marginTop: 2 }}>{data.repertoire.compositeur}</div>
          </div>
          <button
            onClick={data.repertoire.musicxml ? (isPlayingScore ? arreterLecturePartition : lirePartition) : playRepertoire}
            style={{ fontSize: 12, padding: "6px 16px", border: `0.5px solid ${ACCENT}`, borderRadius: 20, cursor: "pointer", background: ACCENT_BG, color: ACCENT, fontFamily: "system-ui, sans-serif" }}
          >
            {data.repertoire.musicxml && isPlayingScore ? tc("conservatoireArreter") : tc("conservatoireEcouter")}
          </button>
        </div>
        {data.repertoire.musicxml && (
          <div style={{ border: "0.5px solid #e0dbd3", borderRadius: 8, overflow: "hidden" }}>
            <StudioScore ref={scoreRef} musicxml={data.repertoire.musicxml} />
          </div>
        )}
      </div>

      {/* 5. Pièges fréquents */}
      <div style={{ background: "#fff", border: "0.5px solid #e0dbd3", borderRadius: 10, padding: "16px 20px", marginBottom: 12 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: ACCENT, letterSpacing: "0.1em", marginBottom: 10, textTransform: "uppercase" as const }}>
          {tc("conservatoirePieges")}
        </div>
        {data.pieges.map((p, i) => (
          <div key={i} style={{ marginBottom: i < data.pieges.length - 1 ? 12 : 0 }}>
            <div style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 4 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#C0392B", minWidth: 16 }}>✗</span>
              <span style={{ fontSize: 13, color: "#C0392B", lineHeight: 1.6 }}>{p.erreur}</span>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#0F6E56", minWidth: 16 }}>✓</span>
              <span style={{ fontSize: 13, color: "#0F6E56", lineHeight: 1.6 }}>{p.correction}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 6. Résumé conservatoire */}
      <div style={{ background: "#1a1a1a", borderRadius: 10, padding: "16px 20px" }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: "#BA7517", letterSpacing: "0.1em", marginBottom: 10, textTransform: "uppercase" as const }}>
          {tc("conservatoireResume")}
        </div>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          {data.resume.map((point, i) => (
            <li key={i} style={{ fontSize: 13, color: "#fff", lineHeight: 1.7, marginBottom: 4 }}>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

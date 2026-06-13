"use client";

/**
 * Cours38.tsx
 * Harmonia · Niveau 1 · Cours 38 — Les notes étrangères
 *
 * Sections :
 * 1. Définition — qu'est-ce qu'une note étrangère
 * 2. Les types — passage, broderie, appogiature, échappée, anticipation, passage accentuée
 * 3. Le retard — préparation / percussion / résolution + formules 4-3, 7-6, 9-8, 2-3
 * 4. La pédale — note tenue sous une harmonie changeante
 * 5. Emploi (DEM) — repérage à l'analyse, réalisation du chant / basse donnée
 * 6. Entraînement — quiz
 *
 * Convention Harmonia :
 * - Affichage : noms anglais / français selon le contexte pédagogique
 * - Audio (PianoPlayer) : noms français (Do Ré Mi Fa Sol La Si)
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { cours38Content } from "@/data/cours38Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";

// ─── Helpers audio ────────────────────────────────────────────────────────────

type NoteKey = string; // "Do:4"

function playNote(ref: React.RefObject<PianoPlayerRef>, key: NoteKey, duration = 1) {
  const [note, octStr] = key.split(":");
  ref.current?.playNote(note, parseInt(octStr), { duration });
}

// Joue une ligne mélodique (notes successives)
function playMelody(ref: React.RefObject<PianoPlayerRef>, keys: NoteKey[], gap = 600) {
  keys.forEach((key, i) => setTimeout(() => playNote(ref, key, 0.9), i * gap));
}

// Joue un accord (notes simultanées)
function playChord(ref: React.RefObject<PianoPlayerRef>, keys: NoteKey[], duration = 1.6) {
  keys.forEach((key) => playNote(ref, key, duration));
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SECTIONS_IDS = ["definition", "types", "retard", "pedale", "emploi", "quiz"] as const;

// Les types de notes étrangères (hors retard, traité à part) — chaque carte est jouable.
// melody : la ligne mélodique illustrant la note étrangère (la note étrangère est mise en valeur dans le détail).
const TYPES = [
  {
    id: "passage",
    nameKey: "typePassageName",
    tempsKey: "tempsFaible",
    descKey: "typePassageDesc",
    melody: ["Do:4", "Ré:4", "Mi:4"], // Ré = note de passage entre Do et Mi
    color: "#185FA5", bg: "#E6F1FB",
  },
  {
    id: "broderie",
    nameKey: "typeBroderieName",
    tempsKey: "tempsFaible",
    descKey: "typeBroderieDesc",
    melody: ["Mi:4", "Fa:4", "Mi:4"], // Fa = broderie supérieure de Mi
    color: "#0F6E56", bg: "#E1F5EE",
  },
  {
    id: "appogiature",
    nameKey: "typeAppogiatureName",
    tempsKey: "tempsFort",
    descKey: "typeAppogiatureDesc",
    melody: ["Fa:4", "Mi:4"], // Fa (appogiature, temps fort) → Mi (note réelle)
    color: "#BA7517", bg: "#FAEEDA",
  },
  {
    id: "echappee",
    nameKey: "typeEchappeeName",
    tempsKey: "tempsFaible",
    descKey: "typeEchappeeDesc",
    melody: ["Do:4", "Ré:4", "Si:3"], // Do → Ré (conjoint) → Si (saut en sens contraire)
    color: "#534AB7", bg: "#EEEDFE",
  },
  {
    id: "passageAccentuee",
    nameKey: "typePassageAccName",
    tempsKey: "tempsFort",
    descKey: "typePassageAccDesc",
    melody: ["Do:4", "Ré:4", "Mi:4"], // identique au passage, mais le Ré frappe sur le temps fort
    color: "#993C1D", bg: "#FAECE7",
  },
  {
    id: "anticipation",
    nameKey: "typeAnticipationName",
    tempsKey: "tempsFaible",
    descKey: "typeAnticipationDesc",
    melody: ["Ré:4", "Do:4", "Do:4"], // le Do de l'accord final est anticipé
    color: "#3B6D11", bg: "#EAF3DE",
  },
];

// Formules classiques de retard
const RETARDS = [
  { formule: "4-3", descKey: "retard43Desc" },
  { formule: "7-6", descKey: "retard76Desc" },
  { formule: "9-8", descKey: "retard98Desc" },
  { formule: "2-3", descKey: "retard23Desc" },
];

// Les 3 temps du retard (illustration G7sus → G en Do majeur : Do retardant Si)
const RETARD_STEPS = [
  { id: "preparation", labelKey: "retardStepPrepLabel", descKey: "retardStepPrepDesc", color: "#0F6E56", bg: "#E1F5EE" },
  { id: "percussion",  labelKey: "retardStepPercLabel", descKey: "retardStepPercDesc", color: "#BA7517", bg: "#FAEEDA" },
  { id: "resolution",  labelKey: "retardStepResLabel",  descKey: "retardStepResDesc",  color: "#185FA5", bg: "#E6F1FB" },
];

// ─── Quiz ─────────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const QUIZ_COUNT = 8;

// ─── Styles ───────────────────────────────────────────────────────────────────

const S = {
  wrap:  { fontFamily: "var(--font-sans, system-ui)", maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" } as React.CSSProperties,
  hdr:   { padding: "1.5rem 0 1rem", borderBottom: "0.5px solid #e5e5e5", marginBottom: "1.25rem" } as React.CSSProperties,
  badge: { display: "inline-block", background: "#EEEDFE", color: "#534AB7", fontSize: 11, fontWeight: 500, padding: "2px 10px", borderRadius: 20, marginBottom: 6 } as React.CSSProperties,
  h1:    { fontSize: 26, fontWeight: 500, color: "#111", margin: 0 } as React.CSSProperties,
  sub:   { fontSize: 14, color: "#666", marginTop: 4, lineHeight: 1.6 } as React.CSSProperties,
  nav:   { display: "flex", gap: 6, flexWrap: "wrap" as const, marginBottom: "1.5rem" },
  pill:  (a: boolean): React.CSSProperties => ({ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${a ? "#333" : "#ddd"}`, borderRadius: 20, cursor: "pointer", background: a ? "#111" : "transparent", color: a ? "#fff" : "#666", transition: "all .15s" }),
  h2:    { fontSize: 17, fontWeight: 500, color: "#111", marginBottom: 8 } as React.CSSProperties,
  p:     { fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: "1rem" } as React.CSSProperties,
  info:  { borderLeft: "2px solid #185FA5", padding: "8px 14px", background: "#E6F1FB", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#0C447C", lineHeight: 1.6 } as React.CSSProperties,
  warn:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
  tip:   { borderLeft: "2px solid #0F6E56", padding: "8px 14px", background: "#E1F5EE", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#085041", lineHeight: 1.6 } as React.CSSProperties,
};

// ─── Composant ────────────────────────────────────────────────────────────────

export default function Cours38() {
  const i18n = useCoursI18n("cours38");
  const tc = i18n.tc;
  const n = (key: string) => tc(`narrative.${key}` as never);
  const { questions: ALL_QUESTIONS } = useCoursContent(cours38Content);

  const [sec, setSec] = useState<string>("definition");
  const [selType, setSelType] = useState<string | null>(null);
  const [selStep, setSelStep] = useState<string | null>(null);

  const [qs, setQs]   = useState(() => shuffle(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [qi, setQi]   = useState(0);
  const [scr, setScr] = useState(0);
  const [ans, setAns] = useState(false);
  const [ch, setCh]   = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const ref = useRef<PianoPlayerRef>(null);

  const answer = (i: number) => { if (ans) return; setCh(i); setAns(true); if (i === qs[qi].a) setScr(s => s + 1); };
  const next   = () => { if (qi + 1 >= QUIZ_COUNT) setDone(true); else { setQi(i => i + 1); setAns(false); setCh(null); } };
  const reset  = () => { setQs(shuffle(ALL_QUESTIONS).slice(0, QUIZ_COUNT)); setQi(0); setScr(0); setAns(false); setCh(null); setDone(false); };

  return (
    <div style={S.wrap}>
      {/* Piano caché */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={ref} octaves={3} startOctave={3} showLabels={false} />
      </div>

      {/* Header */}
      <div style={S.hdr}>
        <span style={S.badge}>{i18n.badge}</span>
        <h1 style={S.h1}>{i18n.title}</h1>
        <p style={S.sub}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Théodore Dubois"
        period="1837–1924"
        emoji="🎼"
        concept={n("maitreCardConcept")}
        anecdote={n("maitreCardAnecdote")}
        lesson={n("maitreCardLesson")}
        accentColor="#534AB7"
      />

      {/* Nav */}
      <nav style={S.nav}>
        {SECTIONS_IDS.map(id => (
          <button key={id} style={S.pill(sec === id)} onClick={() => setSec(id)}>
            {i18n.sectionLabel(id)}
          </button>
        ))}
      </nav>

      {/* ══ DÉFINITION ══ */}
      {sec === "definition" && (
        <div>
          <h2 style={S.h2}>{n("defH2")}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: n("defP1") }} />

          <div style={S.info} dangerouslySetInnerHTML={{ __html: n("defInfoBox") }} />

          <p style={S.p} dangerouslySetInnerHTML={{ __html: n("defP2") }} />

          <div style={S.tip} dangerouslySetInnerHTML={{ __html: n("defTipBox") }} />
        </div>
      )}

      {/* ══ LES TYPES ══ */}
      {sec === "types" && (
        <div>
          <h2 style={S.h2}>{n("typesH2")}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: n("typesP1") }} />
          <p style={{ fontSize: 13, color: "#888", marginBottom: 16 }}>{n("typesClickHint")}</p>

          {TYPES.map((t) => (
            <div
              key={t.id}
              style={{
                border: `0.5px solid ${selType === t.id ? t.color : "#e5e5e5"}`,
                borderRadius: 10, marginBottom: 8, overflow: "hidden",
                background: selType === t.id ? t.bg : "#fff", transition: "all .15s",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", cursor: "pointer" }}
                onClick={() => {
                  setSelType(selType === t.id ? null : t.id);
                  playMelody(ref as React.RefObject<PianoPlayerRef>, t.melody);
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: selType === t.id ? t.color : "#111" }}>
                    {n(t.nameKey)}
                  </div>
                </div>
                <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 10, background: t.bg, color: t.color, border: `0.5px solid ${t.color}` }}>
                  {n(t.tempsKey)}
                </span>
              </div>

              {selType === t.id && (
                <div style={{ padding: "0 16px 14px", borderTop: `0.5px solid ${t.color}20` }}>
                  <p style={{ fontSize: 13, color: "#444", lineHeight: 1.65, margin: "10px 0 10px" }}>{n(t.descKey)}</p>
                  <button
                    onClick={(ev) => { ev.stopPropagation(); playMelody(ref as React.RefObject<PianoPlayerRef>, t.melody); }}
                    style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${t.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: t.color }}
                  >
                    {n("typesListenBtn")}
                  </button>
                </div>
              )}
            </div>
          ))}

          <div style={S.warn} dangerouslySetInnerHTML={{ __html: n("typesWarnBox") }} />
        </div>
      )}

      {/* ══ LE RETARD ══ */}
      {sec === "retard" && (
        <div>
          <h2 style={S.h2}>{n("retardH2")}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: n("retardP1") }} />

          <div style={S.info} dangerouslySetInnerHTML={{ __html: n("retardInfoBox") }} />

          {/* Les 3 temps */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 8px", color: "#111" }}>{n("retardStepsH3")}</h3>
          <p style={{ fontSize: 13, color: "#888", marginBottom: 12 }}>{n("retardStepsHint")}</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6, marginBottom: 12 }}>
            {RETARD_STEPS.map((step) => (
              <div
                key={step.id}
                onClick={() => setSelStep(selStep === step.id ? null : step.id)}
                style={{ border: `0.5px solid ${selStep === step.id ? step.color : "#e5e5e5"}`, borderRadius: 8, padding: "10px 8px", textAlign: "center", cursor: "pointer", background: selStep === step.id ? step.bg : "#fff", transition: "all .15s" }}
              >
                <div style={{ fontSize: 13, fontWeight: 600, color: step.color }}>{n(step.labelKey)}</div>
              </div>
            ))}
          </div>

          {selStep !== null && (() => {
            const step = RETARD_STEPS.find(s => s.id === selStep)!;
            return (
              <div style={{ border: `0.5px solid ${step.color}`, borderRadius: 10, padding: "12px 16px", background: step.bg, marginBottom: 16 }}>
                <div style={{ fontSize: 15, fontWeight: 500, color: step.color, marginBottom: 4 }}>{n(step.labelKey)}</div>
                <p style={{ fontSize: 13, color: "#444", lineHeight: 1.6, margin: 0 }}>{n(step.descKey)}</p>
              </div>
            );
          })()}

          {/* Démonstration audio d'un retard 4-3 en Do (Fa retardant Mi sur l'accord de Do) */}
          <div style={{ background: "#fafafa", border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "14px 16px", marginBottom: 16 }}>
            <div style={{ fontSize: 12, color: "#999", marginBottom: 8 }}>{n("retardAudioLabel")}</div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" as const }}>
              <button
                onClick={() => playChord(ref as React.RefObject<PianoPlayerRef>, ["Sol:3", "Do:4", "Mi:4"], 1.8)}
                style={{ fontSize: 12, padding: "5px 14px", border: "0.5px solid #0F6E56", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#0F6E56" }}
              >
                {n("retardBtnPrep")}
              </button>
              <button
                onClick={() => playChord(ref as React.RefObject<PianoPlayerRef>, ["Sol:3", "Do:4", "Fa:4"], 1.8)}
                style={{ fontSize: 12, padding: "5px 14px", border: "0.5px solid #BA7517", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#BA7517" }}
              >
                {n("retardBtnPerc")}
              </button>
              <button
                onClick={() => playChord(ref as React.RefObject<PianoPlayerRef>, ["Sol:3", "Do:4", "Mi:4"], 1.8)}
                style={{ fontSize: 12, padding: "5px 14px", border: "0.5px solid #185FA5", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#185FA5" }}
              >
                {n("retardBtnRes")}
              </button>
            </div>
            <div style={{ fontSize: 12, color: "#888", marginTop: 10, lineHeight: 1.6 }}>{n("retardAudioDesc")}</div>
          </div>

          {/* Formules classiques */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 8px", color: "#111" }}>{n("retardFormulesH3")}</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {[n("retardThFormule"), n("retardThDesc")].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 10px", fontWeight: 500, color: "#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {RETARDS.map((r, i) => (
                  <tr key={r.formule} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "7px 10px", fontFamily: "monospace", fontWeight: 600, color: "#534AB7" }}>{r.formule}</td>
                    <td style={{ padding: "7px 10px", color: "#555" }}>{n(r.descKey)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ══ LA PÉDALE ══ */}
      {sec === "pedale" && (
        <div>
          <h2 style={S.h2}>{n("pedaleH2")}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: n("pedaleP1") }} />

          <div style={S.info} dangerouslySetInnerHTML={{ __html: n("pedaleInfoBox") }} />

          <p style={S.p} dangerouslySetInnerHTML={{ __html: n("pedaleP2") }} />

          <div style={{ background: "#fafafa", border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "14px 16px", marginBottom: 16 }}>
            <div style={{ fontSize: 12, color: "#999", marginBottom: 8 }}>{n("pedaleAudioLabel")}</div>
            <button
              onClick={() => {
                // Pédale de Do à la basse pendant que l'harmonie change au-dessus
                playMelody(ref as React.RefObject<PianoPlayerRef>, ["Do:3", "Do:3", "Do:3"], 900);
                setTimeout(() => playChord(ref as React.RefObject<PianoPlayerRef>, ["Mi:4", "Sol:4"], 0.8), 0);
                setTimeout(() => playChord(ref as React.RefObject<PianoPlayerRef>, ["Fa:4", "La:4"], 0.8), 900);
                setTimeout(() => playChord(ref as React.RefObject<PianoPlayerRef>, ["Mi:4", "Sol:4"], 0.8), 1800);
              }}
              style={{ fontSize: 12, padding: "5px 14px", border: "0.5px solid #534AB7", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#534AB7" }}
            >
              {n("pedaleListenBtn")}
            </button>
            <div style={{ fontSize: 12, color: "#888", marginTop: 10, lineHeight: 1.6 }}>{n("pedaleAudioDesc")}</div>
          </div>
        </div>
      )}

      {/* ══ EMPLOI (DEM) ══ */}
      {sec === "emploi" && (
        <div>
          <h2 style={S.h2}>{n("emploiH2")}</h2>
          <p style={S.p} dangerouslySetInnerHTML={{ __html: n("emploiP1") }} />

          <div style={S.tip} dangerouslySetInnerHTML={{ __html: n("emploiTipBox") }} />

          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 8px", color: "#111" }}>{n("emploiStepsH3")}</h3>
          <ol style={{ fontSize: 14, color: "#555", lineHeight: 1.8, paddingLeft: 20, marginBottom: "1rem" }}>
            <li dangerouslySetInnerHTML={{ __html: n("emploiStep1") }} />
            <li dangerouslySetInnerHTML={{ __html: n("emploiStep2") }} />
            <li dangerouslySetInnerHTML={{ __html: n("emploiStep3") }} />
            <li dangerouslySetInnerHTML={{ __html: n("emploiStep4") }} />
          </ol>

          <div style={S.warn} dangerouslySetInnerHTML={{ __html: n("emploiWarnBox") }} />

          <p style={S.p} dangerouslySetInnerHTML={{ __html: n("emploiP2") }} />
        </div>
      )}

      {/* ══ QUIZ ══ */}
      {sec === "quiz" && (
        <div>
          <h2 style={S.h2}>{n("quizH2")}</h2>

          {done ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>{scr >= 7 ? "🎼" : scr >= 5 ? "👍" : "💪"}</div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>{i18n.t("score")} : {scr} / {QUIZ_COUNT}</div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>{i18n.quizMessage(scr, QUIZ_COUNT)}</div>
              <button onClick={reset}
                style={{ fontSize: 13, padding: "8px 20px", border: "0.5px solid #534AB7", borderRadius: 20, cursor: "pointer", background: "#EEEDFE", color: "#534AB7" }}>
                {i18n.newQ}
              </button>
            </div>
          ) : (
            <div>
              <div style={{ fontSize: 12, color: "#999", marginBottom: 10 }}>
                {i18n.t("question")} {qi + 1} {i18n.t("of")} {QUIZ_COUNT}
                <span style={{ marginLeft: 12, color: "#bbb" }}>{ALL_QUESTIONS.length} {i18n.t("questionsPool")}</span>
              </div>
              <div style={{ fontSize: 15, fontWeight: 500, color: "#111", lineHeight: 1.6, marginBottom: 16 }}>
                {qs[qi].q}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {qs[qi].opts.map((opt, i) => {
                  const isCorrect = i === qs[qi].a;
                  const isSelected = ch === i;
                  let bg = "#fff", border = "#e5e5e5", color = "#333";
                  if (ans) {
                    if (isCorrect)       { bg = "#E1F5EE"; border = "#0F6E56"; color = "#085041"; }
                    else if (isSelected) { bg = "#FCEBEB"; border = "#A32D2D"; color = "#501313"; }
                  }
                  return (
                    <button key={i} onClick={() => answer(i)} disabled={ans}
                      style={{ fontSize: 13, padding: "10px 14px", border: `0.5px solid ${border}`, borderRadius: 8, cursor: ans ? "default" : "pointer", background: bg, color, textAlign: "left", transition: "all .12s" }}>
                      {opt}
                    </button>
                  );
                })}
              </div>
              {ans && (
                <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 8, background: ch === qs[qi].a ? "#E1F5EE" : "#FCEBEB", fontSize: 13, color: ch === qs[qi].a ? "#085041" : "#501313", lineHeight: 1.6 }}>
                  {qs[qi].fb}
                </div>
              )}
              {ans && (
                <button onClick={next}
                  style={{ marginTop: 12, fontSize: 13, padding: "7px 18px", border: "0.5px solid #333", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#333" }}>
                  {qi + 1 < QUIZ_COUNT ? i18n.nextQ : i18n.seeScore}
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

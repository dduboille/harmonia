"use client";

/**
 * Releve.tsx
 * Harmonia — Le relevé supérieur (/releve) : entendre une progression d'école
 * SATB synthétisée et la relever par paliers.
 *
 *  ① Basse      — HarmoniaEditor en saisie libre (aucune solution armée, règles
 *                 « libre » : seules les tessitures parlent) ; la page lit
 *                 l'état via la prop additive `onMeasuresChange` (le bouton
 *                 Terminer de l'éditeur exige les quatre voix — inutilisable
 *                 pour une basse seule) et note via `noterBasse` (classe de
 *                 hauteurs, octave libre).
 *  ② Chiffrage  — la basse correcte est donnée (gravée + jouée) ; pastilles
 *                 d'`optionsChiffrage` par mesure, notation exacte.
 *  ③ SATB       — l'expérience dictée complète : HarmoniaEditor avec solution
 *                 armée, règles d'école, score `noteExercice`.
 *
 * Deux modes d'écoute : entraînement (illimité, réécoute par accord) et examen
 * (ECOUTES_EXAMEN écoutes de la progression entière, compteur affiché).
 * Audio : même séquencement que le mode dictée du générateur SATB
 * (playVoicingSequence sur les dotKeys de l'exercice, à l'octave de gravure).
 */

import React, { useRef, useState, useCallback, useMemo, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import StudioScore from "@/components/StudioScore";
import {
  tirerExercice,
  noterBasse,
  noterChiffrages,
  optionsChiffrage,
  ECOUTES_EXAMEN,
  type ExerciceReleve,
  type Palier,
  type ModeEcoute,
  type ResultatNotation,
  type FiltresTirage,
} from "@/lib/releve-model";
import { validateSATB, noteExercice, type Measure, type NoteName } from "@/lib/satb-rules";
import { satbVersMusicXML } from "@/lib/satb-vers-musicxml";
import type { HarmoniaEditorProps } from "@/components/HarmoniaEditor";

const HarmoniaEditor = dynamic(() => import("@/components/HarmoniaEditor"), {
  ssr: false,
  loading: () => <div style={{ padding: 32, textAlign: "center", color: "#888" }}>…</div>,
});

// ── Constantes UI (palette du générateur SATB, l'outil frère) ─────────────────

const PALIERS: Palier[] = ["basse", "chiffrage", "satb"];

interface ScoreSession { bonnes: number; total: number }
type Session = Record<Palier, ScoreSession>;

const SESSION_VIDE: Session = {
  basse: { bonnes: 0, total: 0 },
  chiffrage: { bonnes: 0, total: 0 },
  satb: { bonnes: 0, total: 0 },
};

/** Mesures « basse seule » pour la gravure : silences aux trois voix hautes. */
function mesuresBasseSeule(exercice: ExerciceReleve): Measure[] {
  return exercice.solution.map(m => ({
    bass: { name: m.bass.name as NoteName, octave: m.bass.octave },
    tenor: { name: null, octave: 3 },
    alto: { name: null, octave: 4 },
    soprano: { name: null, octave: 4 },
  }));
}

// ── Composant ──────────────────────────────────────────────────────────────────

export default function Releve({ plan }: { plan?: string }) {
  const t = useTranslations("releve");
  const params = useParams();
  const locale = (params?.locale as string) ?? "fr";
  const isFree = !plan || plan === "free";

  const pianoRef = useRef<PianoPlayerRef>(null);
  // Dernier état de l'éditeur du palier ① (rempli par onMeasuresChange).
  const saisieBasseRef = useRef<Measure[] | null>(null);

  // ── État ──
  const [exercice, setExercice] = useState<ExerciceReleve | null>(null);
  const [options, setOptions] = useState<string[][]>([]);
  const [numTirage, setNumTirage] = useState(0);
  const [palier, setPalier] = useState<Palier>("basse");
  const [modeEcoute, setModeEcoute] = useState<ModeEcoute>("entrainement");
  const [ecoutesRestantes, setEcoutesRestantes] = useState(ECOUTES_EXAMEN);
  const [playing, setPlaying] = useState(false);
  const [filtreNiveau, setFiltreNiveau] = useState<1 | 2 | 3 | null>(null);
  const [filtreTonalites, setFiltreTonalites] = useState<"toutes" | "majeures" | "mineures">("toutes");
  const [resultatBasse, setResultatBasse] = useState<ResultatNotation | null>(null);
  const [choixChiffrage, setChoixChiffrage] = useState<(string | null)[]>([]);
  const [resultatChiffrage, setResultatChiffrage] = useState<ResultatNotation | null>(null);
  const [scoreSatb, setScoreSatb] = useState<number | null>(null);
  const [montrerSolution, setMontrerSolution] = useState(false);
  const [session, setSession] = useState<Session>(SESSION_VIDE);

  // ── Tirage ──
  const nouvelExercice = useCallback(() => {
    const filtres: FiltresTirage = {
      niveau: filtreNiveau,
      tonalites: filtreTonalites,
      // Gating : miroir du générateur SATB — le plan gratuit reste sur II–V–I.
      templateIds: isFree ? ["ii-v-i"] : null,
    };
    const ex = tirerExercice(Math.random, filtres);
    if (!ex) return;
    setExercice(ex);
    setOptions(optionsChiffrage(ex, Math.random));
    setNumTirage(n => n + 1);
    setEcoutesRestantes(ECOUTES_EXAMEN);
    setResultatBasse(null);
    setChoixChiffrage(ex.symboles.map(() => null));
    setResultatChiffrage(null);
    setScoreSatb(null);
    setMontrerSolution(false);
    saisieBasseRef.current = null;
    pianoRef.current?.stopAll();
  }, [filtreNiveau, filtreTonalites, isFree]);

  // Premier tirage au montage (les filtres par défaut suffisent).
  useEffect(() => {
    if (!exercice) nouvelExercice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Écoute (même séquencement que la dictée du générateur) ──
  const ecouterProgression = useCallback(() => {
    if (!exercice || !pianoRef.current || playing) return;
    if (modeEcoute === "examen") {
      if (ecoutesRestantes <= 0) return;
      setEcoutesRestantes(n => n - 1);
    }
    setPlaying(true);
    pianoRef.current.playVoicingSequence(exercice.genere.dotKeys, { interval: 1.5, arp: true, arpDelay: 0.06 });
    setTimeout(() => setPlaying(false), exercice.genere.dotKeys.length * 1500 + 1200);
  }, [exercice, playing, modeEcoute, ecoutesRestantes]);

  const ecouterAccord = useCallback((i: number) => {
    if (!exercice || !pianoRef.current || modeEcoute === "examen") return;
    pianoRef.current.playVoicingSequence([exercice.genere.dotKeys[i]], { interval: 1.5, arp: true, arpDelay: 0.06 });
  }, [exercice, modeEcoute]);

  const ecouterBasse = useCallback(() => {
    if (!exercice || !pianoRef.current) return;
    pianoRef.current.playVoicingSequence(
      exercice.solution.map(m => [`${m.bass.name}:${m.bass.octave}`]),
      { interval: 1.5 },
    );
  }, [exercice]);

  // ── Notation ──
  const verifierBasse = useCallback(() => {
    if (!exercice || resultatBasse) return;
    const saisie = saisieBasseRef.current ?? [];
    const r = noterBasse(exercice.solution.map((_, i) => saisie[i]?.bass ?? null), exercice.solution);
    setResultatBasse(r);
    setSession(s => ({ ...s, basse: { bonnes: s.basse.bonnes + r.bonnes, total: s.basse.total + r.total } }));
  }, [exercice, resultatBasse]);

  const verifierChiffrages = useCallback(() => {
    if (!exercice || resultatChiffrage) return;
    const r = noterChiffrages(choixChiffrage, exercice.symboles);
    setResultatChiffrage(r);
    setSession(s => ({ ...s, chiffrage: { bonnes: s.chiffrage.bonnes + r.bonnes, total: s.chiffrage.total + r.total } }));
  }, [exercice, choixChiffrage, resultatChiffrage]);

  // Palier ③ : le Terminer de l'éditeur ne s'active que sans erreur (conformité
  // acquise) — la note est 100 moins 10 par avertissement restant (noteExercice).
  const handleSatbComplete = useCallback((measures: Measure[]) => {
    if (!exercice || scoreSatb !== null) return;
    const averts = validateSATB(
      measures, exercice.tonalite, false,
      exercice.solution as unknown as Measure[], "ecole",
    ).filter(e => e.severity === "warning" && e.type !== "cross_relation").length;
    setScoreSatb(noteExercice(averts));
    const n = exercice.solution.length;
    setSession(s => ({ ...s, satb: { bonnes: s.satb.bonnes + n, total: s.satb.total + n } }));
  }, [exercice, scoreSatb]);

  // ── Gravures ──
  const xmlBasseSeule = useMemo(
    () => (exercice ? satbVersMusicXML(mesuresBasseSeule(exercice), exercice.tonalite, true) : ""),
    [exercice],
  );
  const xmlSolution = useMemo(
    () => (exercice ? satbVersMusicXML(exercice.solution as unknown as Measure[], exercice.tonalite, true) : ""),
    [exercice],
  );

  // Labels neutres pour l'éditeur : des numéros de mesure, JAMAIS les chiffrages
  // (les afficher trahirait la réponse du palier ② — c'est un relevé d'écoute).
  const labelsNeutres = useMemo(
    () => (exercice ? exercice.symboles.map((_, i) => `${i + 1}`) : []),
    [exercice],
  );

  const noteDejaRendue =
    (palier === "basse" && resultatBasse !== null) ||
    (palier === "chiffrage" && resultatChiffrage !== null) ||
    (palier === "satb" && scoreSatb !== null);

  const ecoutesEpuisees = modeEcoute === "examen" && ecoutesRestantes <= 0;

  // ── Rendu ──
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2rem 1rem", fontFamily: "system-ui, sans-serif" }}>

      {/* En-tête */}
      <div style={{ marginBottom: "1.5rem" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "#185FA5", textTransform: "uppercase", marginBottom: 6 }}>
          ♫ {t("badge")}
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 500, color: "#1a1a1a", margin: "0 0 8px" }}>{t("titre")}</h1>
        <p style={{ fontSize: 14, color: "#666", margin: 0, lineHeight: 1.6 }}>{t("sousTitre")}</p>
      </div>

      {/* Bannière plan gratuit (gating : miroir du générateur SATB) */}
      {isFree && (
        <div style={{
          background: "#FAEEDA", border: "0.5px solid #F6AD55", borderRadius: 8,
          padding: "8px 12px", marginBottom: 16, fontSize: 12, color: "#744210", lineHeight: 1.5,
        }}>
          ✦ {t("gratuit")}{" "}
          <Link href={`/${locale}/upgrade`} style={{ color: "#BA7517", fontWeight: 700, textDecoration: "none" }}>
            {t("passerPro")}
          </Link>
        </div>
      )}

      {/* Barre de contrôle : paliers, mode d'écoute, filtres, nouvel exercice */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", marginBottom: 16 }}>

        {/* Paliers */}
        <div style={{ display: "flex", gap: 6, background: "#f4f1ec", borderRadius: 8, padding: 4 }}>
          {PALIERS.map(p => (
            <button key={p} onClick={() => setPalier(p)}
              style={{
                padding: "7px 14px", borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: "pointer", border: "none",
                background: palier === p ? "#fff" : "transparent",
                color: palier === p ? "#1a1a1a" : "#888",
                boxShadow: palier === p ? "0 1px 4px rgba(0,0,0,0.1)" : "none",
              }}>
              {t(`paliers.${p}`)}
            </button>
          ))}
        </div>

        {/* Mode d'écoute */}
        <div style={{ display: "flex", gap: 6, background: "#f4f1ec", borderRadius: 8, padding: 4 }}>
          {(["entrainement", "examen"] as ModeEcoute[]).map(m => (
            <button key={m}
              onClick={() => { setModeEcoute(m); setEcoutesRestantes(ECOUTES_EXAMEN); }}
              title={m === "examen" ? t("modeExamenAide", { n: ECOUTES_EXAMEN }) : t("modeEntrainementAide")}
              style={{
                padding: "7px 14px", borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: "pointer", border: "none",
                background: modeEcoute === m ? "#fff" : "transparent",
                color: modeEcoute === m ? "#1a1a1a" : "#888",
                boxShadow: modeEcoute === m ? "0 1px 4px rgba(0,0,0,0.1)" : "none",
              }}>
              {t(`modes.${m}`)}
            </button>
          ))}
        </div>

        <button onClick={nouvelExercice}
          style={{
            padding: "9px 18px", borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: "pointer",
            background: "#1a1a1a", color: "#fff", border: "none",
          }}>
          🎲 {t("nouvelExercice")}
        </button>
      </div>

      {/* Filtres du tirage */}
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center", marginBottom: 20 }}>
        <span style={{ fontSize: 11, color: "#767676" }}>{t("filtres.niveau")}</span>
        {([null, 1, 2, 3] as (1 | 2 | 3 | null)[]).map(d => (
          <button key={String(d)} onClick={() => setFiltreNiveau(d)}
            style={{
              padding: "4px 12px", borderRadius: 16, fontSize: 11, fontWeight: 600, cursor: "pointer",
              border: "0.5px solid",
              background: filtreNiveau === d ? "#1a1a1a" : "#fff",
              color: filtreNiveau === d ? "#fff" : "#666",
              borderColor: filtreNiveau === d ? "#1a1a1a" : "#e0dbd3",
            }}>
            {d === null ? t("filtres.tousNiveaux") : `${t("filtres.niveau")} ${d}`}
          </button>
        ))}
        <span style={{ fontSize: 11, color: "#767676", marginLeft: 10 }}>{t("filtres.tonalites")}</span>
        {(["toutes", "majeures", "mineures"] as const).map(f => (
          <button key={f} onClick={() => setFiltreTonalites(f)}
            style={{
              padding: "4px 12px", borderRadius: 16, fontSize: 11, fontWeight: 600, cursor: "pointer",
              border: "0.5px solid",
              background: filtreTonalites === f ? "#185FA5" : "#fff",
              color: filtreTonalites === f ? "#fff" : "#666",
              borderColor: filtreTonalites === f ? "#185FA5" : "#e0dbd3",
            }}>
            {t(`filtres.${f}`)}
          </button>
        ))}
      </div>

      {exercice && (
        <>
          {/* Carte écoute */}
          <div style={{ background: "#fff", border: "0.5px solid #e0dbd3", borderRadius: 12, padding: 20, marginBottom: 20 }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
              <button onClick={ecouterProgression} disabled={playing || ecoutesEpuisees}
                style={{
                  padding: "10px 22px", borderRadius: 8, fontSize: 14, fontWeight: 600,
                  cursor: playing || ecoutesEpuisees ? "not-allowed" : "pointer",
                  background: playing || ecoutesEpuisees ? "#f0ece6" : "#1a1a1a",
                  color: playing || ecoutesEpuisees ? "#888" : "#fff", border: "none",
                }}>
                {playing ? `♪ ${t("lecture")}` : `▶ ${t("ecouterProgression")}`}
              </button>

              {modeEcoute === "examen" && (
                <span style={{
                  fontSize: 13, fontWeight: 700, padding: "6px 14px", borderRadius: 8,
                  background: ecoutesRestantes > 0 ? "#E6F1FB" : "#FEEEEA",
                  color: ecoutesRestantes > 0 ? "#185FA5" : "#CC2200",
                  border: `0.5px solid ${ecoutesRestantes > 0 ? "#A8C7EE" : "#F5B5AA"}`,
                }}>
                  {t("ecoutesRestantes", { n: ecoutesRestantes })}
                </span>
              )}

              <span style={{ fontSize: 12, color: "#888" }}>
                {t("tonalite")} : <strong style={{ color: "#185FA5" }}>{exercice.tonalite}</strong>
                {" · "}{t("mesures", { n: exercice.solution.length })}
              </span>
            </div>

            {ecoutesEpuisees && (
              <div style={{ marginTop: 10, fontSize: 12, color: "#CC2200" }}>{t("ecoutesEpuisees")}</div>
            )}

            {/* Réécoute accord par accord — entraînement seulement */}
            {modeEcoute === "entrainement" && (
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 12 }}>
                {exercice.genere.dotKeys.map((_, i) => (
                  <button key={i} onClick={() => ecouterAccord(i)}
                    style={{
                      padding: "5px 12px", borderRadius: 6, fontSize: 11, fontWeight: 600, cursor: "pointer",
                      background: "#fff", border: "0.5px solid #d5cfc6", color: "#555",
                    }}>
                    ▶ {t("ecouterAccord", { n: i + 1 })}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Consigne du palier */}
          <div style={{
            padding: "10px 16px", borderRadius: 10, background: "#F0F6FF",
            border: "0.5px solid #C2D5EC", fontSize: 13, color: "#185FA5", marginBottom: 16, lineHeight: 1.6,
          }}>
            {t(`consignes.${palier}`)}
          </div>

          {/* ── Palier ① — Basse ── */}
          {palier === "basse" && (
            <div style={{ marginBottom: 20 }}>
              <HarmoniaEditor
                key={`basse-${numTirage}`}
                title={t("paliers.basse")}
                subtitle={t("consignes.basse")}
                measures={labelsNeutres}
                keySignature={exercice.tonalite}
                showKeySignature
                regles="libre"
                onMeasuresChange={m => { saisieBasseRef.current = m; }}
              />
              <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 14, flexWrap: "wrap" }}>
                <button onClick={verifierBasse} disabled={resultatBasse !== null}
                  style={{
                    padding: "10px 22px", borderRadius: 8, fontSize: 13, fontWeight: 700,
                    cursor: resultatBasse ? "default" : "pointer",
                    background: resultatBasse ? "#e0dbd3" : "#185FA5",
                    color: resultatBasse ? "#888" : "#fff", border: "none",
                  }}>
                  ✓ {t("verifierBasse")}
                </button>
              </div>

              {resultatBasse && (
                <div style={{ marginTop: 16 }}>
                  <ResultatParMesure resultat={resultatBasse} t={t} />
                  <div style={{ background: "#fff", border: "0.5px solid #e0dbd3", borderRadius: 10, padding: 16, marginTop: 12 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#555", marginBottom: 10 }}>{t("basseCorrigee")}</div>
                    <StudioScore musicxml={xmlBasseSeule} />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── Palier ② — Chiffrages ── */}
          {palier === "chiffrage" && (
            <div style={{ marginBottom: 20 }}>
              {/* La basse correcte, gravée et jouable */}
              <div style={{ background: "#fff", border: "0.5px solid #e0dbd3", borderRadius: 10, padding: 16, marginBottom: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#555" }}>{t("basseDonnee")}</div>
                  <button onClick={ecouterBasse}
                    style={{
                      padding: "4px 12px", borderRadius: 6, fontSize: 11, fontWeight: 600, cursor: "pointer",
                      background: "#fff", border: "0.5px solid #d5cfc6", color: "#555",
                    }}>
                    ▶ {t("ecouterBasse")}
                  </button>
                </div>
                <StudioScore musicxml={xmlBasseSeule} />
              </div>

              {/* Pastilles par mesure */}
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 14 }}>
                {exercice.symboles.map((sym, i) => {
                  const juge = resultatChiffrage?.parMesure[i];
                  return (
                    <div key={i} style={{
                      background: "#fff", borderRadius: 10, padding: 12, minWidth: 120,
                      border: `1.5px solid ${resultatChiffrage ? (juge ? "#8ECFB7" : "#F5B5AA") : "#e0dbd3"}`,
                    }}>
                      <div style={{ fontSize: 11, fontWeight: 600, color: "#767676", marginBottom: 8 }}>
                        {t("mesure", { n: i + 1 })}{" "}
                        {resultatChiffrage && (
                          <span style={{ color: juge ? "#0F6E56" : "#CC2200", fontWeight: 700 }}>
                            {juge ? "✓" : "✗"}
                          </span>
                        )}
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                        {(options[i] ?? []).map(opt => {
                          const choisi = choixChiffrage[i] === opt;
                          const estBonne = resultatChiffrage && opt === sym;
                          return (
                            <button key={opt}
                              onClick={() => {
                                if (resultatChiffrage) return;
                                setChoixChiffrage(prev => prev.map((c, j) => (j === i ? opt : c)));
                              }}
                              style={{
                                padding: "6px 12px", borderRadius: 8, fontSize: 12, fontWeight: 600,
                                cursor: resultatChiffrage ? "default" : "pointer",
                                fontFamily: "monospace",
                                border: `1.5px solid ${estBonne ? "#0F6E56" : choisi ? "#185FA5" : "#e0dbd3"}`,
                                background: estBonne ? "#E6F5EE" : choisi ? "#EBF3FD" : "#fafaf8",
                                color: estBonne ? "#0F6E56" : choisi ? "#185FA5" : "#555",
                              }}>
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              <button onClick={verifierChiffrages} disabled={resultatChiffrage !== null}
                style={{
                  padding: "10px 22px", borderRadius: 8, fontSize: 13, fontWeight: 700,
                  cursor: resultatChiffrage ? "default" : "pointer",
                  background: resultatChiffrage ? "#e0dbd3" : "#185FA5",
                  color: resultatChiffrage ? "#888" : "#fff", border: "none",
                }}>
                ✓ {t("verifierChiffrages")}
              </button>

              {resultatChiffrage && (
                <div style={{ marginTop: 14 }}>
                  <ResultatParMesure resultat={resultatChiffrage} t={t} />
                </div>
              )}
            </div>
          )}

          {/* ── Palier ③ — SATB complet ── */}
          {palier === "satb" && (
            <div style={{ marginBottom: 20 }}>
              <HarmoniaEditor
                key={`satb-${numTirage}`}
                title={t("paliers.satb")}
                subtitle={t("consignes.satb")}
                measures={labelsNeutres}
                keySignature={exercice.tonalite}
                showKeySignature
                regles="ecole"
                solution={exercice.solution as unknown as HarmoniaEditorProps["solution"]}
                onComplete={handleSatbComplete}
              />
              {scoreSatb !== null && (
                <div style={{
                  marginTop: 14, padding: 16, borderRadius: 12,
                  background: scoreSatb >= 90 ? "#E6F5EE" : "#FEF0D9",
                  border: `0.5px solid ${scoreSatb >= 90 ? "#8ECFB7" : "#F5C77E"}`,
                  fontSize: 16, fontWeight: 700,
                  color: scoreSatb >= 90 ? "#0F6E56" : "#BA7517",
                }}>
                  {t("scoreSatb", { score: scoreSatb })}
                </div>
              )}
            </div>
          )}

          {/* ── Après notation : solution + session ── */}
          {noteDejaRendue && (
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
              <button onClick={() => setMontrerSolution(s => !s)}
                style={{
                  padding: "10px 20px", borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: "pointer",
                  background: montrerSolution ? "#f0ece6" : "#fff", color: "#1a1a1a", border: "0.5px solid #e0dbd3",
                }}>
                {montrerSolution ? t("masquerSolution") : t("voirSolution")}
              </button>
              <button onClick={nouvelExercice}
                style={{
                  padding: "10px 20px", borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: "pointer",
                  background: "#1a1a1a", color: "#fff", border: "none",
                }}>
                🎲 {t("nouvelExercice")}
              </button>
            </div>
          )}

          {montrerSolution && noteDejaRendue && (
            <div style={{ background: "#fff", border: "0.5px solid #e0dbd3", borderRadius: 10, padding: 16, marginBottom: 16 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#555", marginBottom: 4 }}>{t("solutionTitre")}</div>
              <div style={{ fontSize: 12, color: "#888", marginBottom: 10, fontFamily: "monospace" }}>
                {exercice.template.nom} — {exercice.symboles.join(" · ")}
              </div>
              <StudioScore musicxml={xmlSolution} />
            </div>
          )}

          {/* Score de session par palier */}
          <div style={{ background: "#f4f1ec", borderRadius: 10, padding: 16 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#555", marginBottom: 8 }}>{t("session")}</div>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              {PALIERS.map(p => (
                <span key={p} style={{ fontSize: 12, padding: "4px 12px", borderRadius: 8, background: "#fff", border: "0.5px solid #e0dbd3", color: "#555" }}>
                  {t(`paliers.${p}`)} : <strong style={{ color: "#185FA5" }}>
                    {session[p].bonnes}/{session[p].total}
                  </strong>
                </span>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Piano caché (audio) */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={4} startOctave={2} />
      </div>
    </div>
  );
}

// ── Sous-composant : chips ✓/✗ par mesure + score ─────────────────────────────

function ResultatParMesure({ resultat, t }: { resultat: ResultatNotation; t: ReturnType<typeof useTranslations> }) {
  return (
    <div style={{
      padding: 16, borderRadius: 12,
      background: resultat.bonnes === resultat.total ? "#E6F5EE" : resultat.bonnes >= resultat.total / 2 ? "#FEF0D9" : "#FEEEEA",
      border: `0.5px solid ${resultat.bonnes === resultat.total ? "#8ECFB7" : resultat.bonnes >= resultat.total / 2 ? "#F5C77E" : "#F5B5AA"}`,
    }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
        {resultat.parMesure.map((ok, i) => (
          <span key={i} style={{
            fontSize: 12, fontWeight: 700, padding: "4px 10px", borderRadius: 8,
            background: ok ? "#fff" : "#fff",
            border: `1.5px solid ${ok ? "#0F6E56" : "#CC2200"}`,
            color: ok ? "#0F6E56" : "#CC2200",
          }}>
            {t("mesure", { n: i + 1 })} {ok ? "✓" : "✗"}
          </span>
        ))}
      </div>
      <div style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a" }}>
        {t("scoreMesures", { bonnes: resultat.bonnes, total: resultat.total })}
      </div>
    </div>
  );
}

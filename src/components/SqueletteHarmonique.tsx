"use client";

/**
 * SqueletteHarmonique.tsx
 * Harmonia — L'outil « squelette harmonique ».
 *
 * L'élève pose une succession d'accords (banque groupée par fonction, renversements
 * compris) sur 8 mesures × (1 ou 2 accords), les voit réalisés à QUATRE VOIX
 * conduites (moteur d'école, repli bloc), les entend, vérifie la conduite (fautes
 * colorées + fiches partagées), lit la frise fonctionnelle + la cadence, puis exporte
 * le tout vers l'atelier `/composer` pour l'étoffer note à note.
 *
 * Presque tout est de l'ASSEMBLAGE de briques pures déjà testées : le modèle
 * (squelette-model), la réalisation (squelette-realisation), la gravure
 * (squelette-vers-musicxml), l'analyse (squelette-analyse), l'export
 * (squelette-vers-piece), la palette (palette-fonctionnelle), la validation
 * (satb-rules) et l'orthographe MIDI (midi-vers-musicxml). Ce composant ne fait que
 * les câbler à l'UI, à Verovio (StudioScore) et à l'audio (PianoPlayer).
 */

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { useParams, useRouter } from "next/navigation";

import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import StudioScore, { StudioScoreRef } from "@/components/StudioScore";
import FichesErreurs from "@/components/FichesErreurs";

import { construirePalette, type AccordPalette } from "@/lib/palette-fonctionnelle";
import {
  squeletteVierge, poserAccord, viderEmplacement, basculerSubdivision,
  changerTonalite, changerNiveau, accordsEnSuite,
  type Squelette,
} from "@/lib/squelette-model";
import { realiserSquelette } from "@/lib/squelette-realisation";
import { squeletteVersMusicXML } from "@/lib/squelette-vers-musicxml";
import { etiquettesFonctionnelles, detecterCadence } from "@/lib/squelette-analyse";
import { squeletteVersPiece } from "@/lib/squelette-vers-piece";
import { armure, nomsPourArmure, decoderMidi } from "@/lib/midi-vers-musicxml";
import { validateSATB, VOICES, type Measure, type NoteName, type Voice } from "@/lib/satb-rules";
import type { VoicedMeasure } from "@/lib/voicing-ecole";

// ── Palette de couleurs (alignée sur l'identité Harmonia) ──────────────────────
const VIOLET = "#5C3D6E";
const VIOLET_CLAIR = "#F0EBF8";
const CREME = "#FAF9F7";
const BORDURE = "#e8e4df";

// ── Tonalités proposées (une seule à la fois, majeure ou mineure) ──────────────
// `note` = orthographe française du solfège (constante à travers l'app, quelle que
// soit la langue de l'interface) ; `mode` fournit le mot traduit majeur/mineur.
// Les 24 tonalités canoniques de l'app (mêmes que /generateur-satb, voir
// `KEYS_BY_LEVEL` dans GenerateurSATB.tsx et `KEYS` dans satb-generator.test.ts) —
// toutes couvertes par `KEY_ACCIDENTALS` (armure exacte) et par `construirePalette`
// (arithmétique de classes de hauteurs, valable dans les 12).
const TONALITES: Array<{ keySignature: string; tonicPc: number; mode: "major" | "minor"; note: string }> = [
  { keySignature: "C", tonicPc: 0, mode: "major", note: "Do" },
  { keySignature: "G", tonicPc: 7, mode: "major", note: "Sol" },
  { keySignature: "D", tonicPc: 2, mode: "major", note: "Ré" },
  { keySignature: "A", tonicPc: 9, mode: "major", note: "La" },
  { keySignature: "E", tonicPc: 4, mode: "major", note: "Mi" },
  { keySignature: "B", tonicPc: 11, mode: "major", note: "Si" },
  { keySignature: "F#", tonicPc: 6, mode: "major", note: "Fa#" },
  { keySignature: "F", tonicPc: 5, mode: "major", note: "Fa" },
  { keySignature: "Bb", tonicPc: 10, mode: "major", note: "Sib" },
  { keySignature: "Eb", tonicPc: 3, mode: "major", note: "Mib" },
  { keySignature: "Ab", tonicPc: 8, mode: "major", note: "Lab" },
  { keySignature: "Db", tonicPc: 1, mode: "major", note: "Réb" },
  { keySignature: "Am", tonicPc: 9, mode: "minor", note: "La" },
  { keySignature: "Em", tonicPc: 4, mode: "minor", note: "Mi" },
  { keySignature: "Bm", tonicPc: 11, mode: "minor", note: "Si" },
  { keySignature: "F#m", tonicPc: 6, mode: "minor", note: "Fa#" },
  { keySignature: "C#m", tonicPc: 1, mode: "minor", note: "Do#" },
  { keySignature: "G#m", tonicPc: 8, mode: "minor", note: "Sol#" },
  { keySignature: "Dm", tonicPc: 2, mode: "minor", note: "Ré" },
  { keySignature: "Gm", tonicPc: 7, mode: "minor", note: "Sol" },
  { keySignature: "Cm", tonicPc: 0, mode: "minor", note: "Do" },
  { keySignature: "Fm", tonicPc: 5, mode: "minor", note: "Fa" },
  { keySignature: "Bbm", tonicPc: 10, mode: "minor", note: "Sib" },
  { keySignature: "Ebm", tonicPc: 3, mode: "minor", note: "Mib" },
];

const NOMS_DIESES_MIDI = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

/** MIDI → « Note:octave » pour PianoPlayer (octave piano = octave MIDI − 1). */
function midiVersSpec(midi: number): string {
  const nom = NOMS_DIESES_MIDI[((midi % 12) + 12) % 12];
  const octave = Math.floor(midi / 12) - 1;
  return `${nom}:${octave - 1}`;
}

/** MIDI → NoteEntry (nom + octave), orthographié au diapason de l'armure. */
function midiVersNoteEntry(midi: number, noms: string[]): { name: NoteName; octave: number } {
  const { step, alter, octave } = decoderMidi(midi, noms);
  const suff = alter > 0 ? "#".repeat(alter) : alter < 0 ? "b".repeat(-alter) : "";
  return { name: (step + suff) as NoteName, octave };
}

/** Durée d'écoute d'une ronde en secondes (blanche = moitié). */
const DUREE_RONDE = 1.4;

export default function SqueletteHarmonique() {
  const t = useTranslations("squelette");
  const params = useParams();
  const router = useRouter();
  const locale = (params?.locale as string) ?? "fr";

  // ── État : le squelette + l'emplacement sélectionné ──────────────────────────
  const [sq, setSq] = useState<Squelette>(() =>
    squeletteVierge({ tonicPc: 0, mode: "major", keySignature: "C" }, 1),
  );
  const [sel, setSel] = useState<{ mesure: number; emplacement: number }>({ mesure: 0, emplacement: 0 });
  // Compteur incrémenté à chaque fin de gravure Verovio : dépendance des effets de
  // surlignage, pour les RÉ-appliquer après une regravure (le SVG recréé au resize
  // efface les classes de fautes). Même verrou que HarmoniaEditor.
  const [pretDeGravure, setPretDeGravure] = useState(0);

  const pianoRef = useRef<PianoPlayerRef>(null);
  const scoreRef = useRef<StudioScoreRef>(null);

  // Emplacement sélectionné toujours valide (une bascule 2→1 peut l'invalider).
  const selValide = useMemo(() => {
    const nb = sq.mesures[sel.mesure]?.emplacements.length ?? 1;
    return { mesure: sel.mesure, emplacement: Math.min(sel.emplacement, nb - 1) };
  }, [sq, sel]);

  // ── Banque d'accords, dérivée de la tonalité + du niveau ─────────────────────
  const palette = useMemo(
    () => construirePalette(sq.tonalite.tonicPc, sq.tonalite.mode, sq.niveau),
    [sq.tonalite.tonicPc, sq.tonalite.mode, sq.niveau],
  );

  // ── Réalisation SATB + gravure ───────────────────────────────────────────────
  const realisation = useMemo(() => realiserSquelette(sq), [sq]);
  const musicxml = useMemo(
    () => squeletteVersMusicXML(realisation.mesures, sq.tonalite.keySignature),
    [realisation, sq.tonalite.keySignature],
  );
  const aDesAccords = accordsEnSuite(sq).length > 0;

  // ── Séquence PLATE des accords voicés, alignée sur les onsets de la gravure ───
  // L'onset d'un accord dépend de la LONGUEUR gravée de sa mesure : une mesure à un
  // seul accord rempli est gravée en RONDE (onset = m×2000), même si l'accord occupe
  // le 2e emplacement ; une mesure à deux accords est gravée en deux blanches (onsets
  // m×2000 et m×2000+1000). On calcule donc l'onset d'après le bloc réalisé, PAS
  // d'après l'index brut d'emplacement — c'est exactement ce que grave
  // squelette-vers-musicxml.
  const { plat, onsets, estRonde } = useMemo(() => {
    const plat: VoicedMeasure[] = [];
    const onsets: number[] = [];
    const estRonde: boolean[] = [];
    realisation.mesures.forEach((bloc, m) => {
      bloc.forEach((vm, k) => {
        plat.push(vm);
        onsets.push(bloc.length === 2 ? m * 2000 + k * 1000 : m * 2000);
        estRonde.push(bloc.length !== 2);
      });
    });
    return { plat, onsets, estRonde };
  }, [realisation]);

  // ── Vérification de conduite (fautes) ────────────────────────────────────────
  // Sur réalisation « bloc » (repli), la conduite n'est pas garantie : on désactive
  // la vérif. Sinon on convertit chaque voicing MIDI en `Measure` (noms de notes,
  // orthographe au diapason de l'armure) et on appelle validateSATB en mode école
  // sans solution (seules les règles de conduite).
  const erreurs = useMemo(() => {
    if (realisation.approx || plat.length === 0) return [];
    const { fifths } = armure(sq.tonalite.keySignature);
    const noms = nomsPourArmure(fifths);
    const measures: Measure[] = plat.map((vm) => ({
      bass: midiVersNoteEntry(vm.bass, noms),
      tenor: midiVersNoteEntry(vm.tenor, noms),
      alto: midiVersNoteEntry(vm.alto, noms),
      soprano: midiVersNoteEntry(vm.soprano, noms),
    }));
    return validateSATB(measures, sq.tonalite.keySignature, false, undefined, "ecole");
  }, [realisation.approx, plat, sq.tonalite.keySignature]);

  // Cibles de coloration : chaque faute → têtes à colorer, sur la séquence PLATE.
  // Convention identique à HarmoniaEditor : `measure` 0-based, `params.from/to`
  // 1-based (on retranche 1). L'onset provient du tableau `onsets` (aligné au plat).
  const cibles = useMemo(() => {
    const out: Array<{ onsetMs: number; midis: number[]; severite: "faute" | "avertissement" }> = [];
    for (const err of erreurs) {
      if (err.type === "cross_relation") continue; // non colorée (cohérence avec le barème)
      const idxs: number[] = [];
      if (err.params.from != null) idxs.push(err.params.from - 1);
      if (err.params.to != null) idxs.push(err.params.to - 1);
      if (idxs.length === 0 && err.measure != null) idxs.push(err.measure);
      const voix: Voice[] = err.type === "wrong_bass"
        ? ["bass"]
        : err.voices ?? (err.params.voice ? [err.params.voice] : VOICES);
      const severite: "faute" | "avertissement" = err.severity === "error" ? "faute" : "avertissement";
      for (const fi of idxs) {
        const vm = plat[fi];
        if (!vm) continue;
        for (const v of voix) {
          out.push({ onsetMs: onsets[fi], midis: [vm[v]], severite });
        }
      }
    }
    return out;
  }, [erreurs, plat, onsets]);

  const handleReady = useCallback(() => setPretDeGravure((n) => n + 1), []);

  // Ré-application des fautes après chaque (re)gravure ou changement de cibles.
  useEffect(() => {
    scoreRef.current?.surlignerFautes(cibles);
  }, [musicxml, cibles, pretDeGravure]);

  // ── Frise fonctionnelle + cadence ────────────────────────────────────────────
  const frise = useMemo(() => etiquettesFonctionnelles(sq), [sq]);
  const cadence = useMemo(() => detecterCadence(sq), [sq]);
  const suite = useMemo(() => accordsEnSuite(sq), [sq]);

  // ── Actions ──────────────────────────────────────────────────────────────────
  const choisirTonalite = useCallback((keySignature: string, e: React.ChangeEvent<HTMLSelectElement>) => {
    const to = TONALITES.find((x) => x.keySignature === keySignature);
    if (!to) return;
    setSq((s) => changerTonalite(s, { tonicPc: to.tonicPc, mode: to.mode, keySignature: to.keySignature }));
    e.target.blur(); // relâche le focus clavier (leçon de saisie au clavier)
  }, []);

  const choisirNiveau = useCallback((niveau: 1 | 2) => {
    setSq((s) => changerNiveau(s, niveau));
  }, []);

  const poser = useCallback((accord: AccordPalette) => {
    setSq((s) => poserAccord(s, selValide.mesure, selValide.emplacement, accord));
  }, [selValide]);

  const vider = useCallback((mesure: number, emplacement: number) => {
    setSq((s) => viderEmplacement(s, mesure, emplacement));
  }, []);

  const basculer = useCallback((mesure: number) => {
    setSq((s) => basculerSubdivision(s, mesure));
    // Si on repasse à un seul emplacement, ramener la sélection sur le premier.
    setSel((cur) => (cur.mesure === mesure ? { mesure, emplacement: 0 } : cur));
  }, []);

  const ecouter = useCallback(() => {
    const piano = pianoRef.current;
    if (!piano || plat.length === 0) return;
    plat.forEach((vm, i) => {
      const specs = [vm.soprano, vm.alto, vm.tenor, vm.bass].map(midiVersSpec);
      piano.playVoicing(specs, {
        startTime: (onsets[i] / 2000) * DUREE_RONDE,
        duration: (estRonde[i] ? DUREE_RONDE : DUREE_RONDE / 2) * 0.95,
        velocity: 0.62,
      });
    });
  }, [plat, onsets, estRonde]);

  const exporter = useCallback(() => {
    const piece = squeletteVersPiece(realisation.mesures, sq.tonalite);
    try {
      window.sessionStorage.setItem("squelette->piece", JSON.stringify(piece));
    } catch { /* stockage indisponible : on navigue quand même vers l'atelier vierge */ }
    router.push(`/${locale}/composer`);
  }, [realisation.mesures, sq.tonalite, router, locale]);

  const modeMot = (mode: "major" | "minor") => t(mode === "major" ? "majeur" : "mineur");

  // ── Rendu ────────────────────────────────────────────────────────────────────
  return (
    <main style={{ minHeight: "100vh", background: CREME, padding: "40px 20px 80px", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        {/* En-tête */}
        <div style={{ marginBottom: 4 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: VIOLET, textTransform: "uppercase" }}>
            {t("badge")}
          </span>
        </div>
        <h1 style={{ fontSize: 32, fontWeight: 700, color: "#1a1a1a", letterSpacing: "-0.02em", margin: "0 0 8px" }}>
          {t("titre")}
        </h1>
        <p style={{ fontSize: 14, color: "#666", margin: "0 0 28px", lineHeight: 1.5, maxWidth: 640 }}>
          {t("sousTitre")}
        </p>

        {/* Réglages : tonalité + niveau */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "flex-end", marginBottom: 24 }}>
          <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", color: "#777", textTransform: "uppercase" }}>
              {t("tonalite")}
            </span>
            <select
              value={sq.tonalite.keySignature}
              onChange={(e) => choisirTonalite(e.target.value, e)}
              style={{
                padding: "8px 12px", borderRadius: 8, border: `1px solid ${BORDURE}`,
                background: "#fff", fontSize: 14, color: "#333", minWidth: 160, cursor: "pointer",
              }}
            >
              <optgroup label={t("majeur")}>
                {TONALITES.filter((x) => x.mode === "major").map((x) => (
                  <option key={x.keySignature} value={x.keySignature}>{x.note} {modeMot("major")}</option>
                ))}
              </optgroup>
              <optgroup label={t("mineur")}>
                {TONALITES.filter((x) => x.mode === "minor").map((x) => (
                  <option key={x.keySignature} value={x.keySignature}>{x.note} {modeMot("minor")}</option>
                ))}
              </optgroup>
            </select>
          </label>

          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", color: "#777", textTransform: "uppercase" }}>
              {t("niveau")}
            </span>
            <div style={{ display: "flex", gap: 6 }}>
              {([1, 2] as const).map((n) => (
                <button
                  key={n}
                  onClick={() => choisirNiveau(n)}
                  style={{
                    padding: "8px 14px", borderRadius: 8,
                    border: `1px solid ${sq.niveau === n ? VIOLET : BORDURE}`,
                    background: sq.niveau === n ? VIOLET : "#fff",
                    color: sq.niveau === n ? "#fff" : "#555",
                    fontSize: 13, fontWeight: sq.niveau === n ? 600 : 400, cursor: "pointer",
                  }}
                >
                  {n === 1 ? t("niveauDiatonique") : t("niveauChromatique")}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Note d'info — fermée par défaut, juste au-dessus de la banque */}
        <details style={{ marginBottom: 20, border: `1px solid ${BORDURE}`, borderRadius: 10, background: "#fff" }}>
          <summary style={{
            cursor: "pointer", padding: "10px 14px", fontSize: 13, fontWeight: 600, color: VIOLET,
            listStyle: "revert",
          }}>
            {t("infoOuvrir")}
          </summary>
          <div style={{ padding: "4px 16px 16px", fontSize: 13, color: "#444", lineHeight: 1.55 }}>
            <p style={{ margin: "0 0 12px" }}>{t("infoIntro")}</p>
            {(["infoTonique", "infoPredominante", "infoDominante", "infoChromatisme", "infoRenversements"] as const).map((k) => (
              <div key={k} style={{ marginBottom: 10 }}>
                <div style={{ fontWeight: 700, color: "#1a1a1a", marginBottom: 2 }}>{t(`${k}.titre` as never)}</div>
                <div>{t(`${k}.texte` as never)}</div>
              </div>
            ))}
          </div>
        </details>

        {/* Banque d'accords */}
        <section style={{ marginBottom: 28 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", color: "#777", textTransform: "uppercase", marginBottom: 6 }}>
            {t("banque")}
          </div>
          <p style={{ fontSize: 12, color: "#999", margin: "0 0 12px" }}>{t("banqueAide")}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 14 }}>
            {palette.map((groupe) => (
              <div key={groupe.titre} style={{ background: "#fff", border: `1px solid ${BORDURE}`, borderRadius: 12, padding: "12px 12px 14px" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: VIOLET, marginBottom: 10 }}>
                  {t(`groupes.${groupe.titre}` as never)}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {groupe.accords.length === 0 && (
                    <span style={{ fontSize: 12, color: "#bbb" }}>—</span>
                  )}
                  {groupe.accords.map((accord) => (
                    <button
                      key={accord.id}
                      onClick={() => poser(accord)}
                      title={`${accord.nom} · ${accord.degree}`}
                      style={{
                        padding: "6px 10px", borderRadius: 8, border: `1px solid ${BORDURE}`,
                        background: VIOLET_CLAIR, color: "#3a2f6b", fontSize: 13, cursor: "pointer",
                        display: "flex", flexDirection: "column", alignItems: "center", gap: 1, minWidth: 46,
                      }}
                    >
                      <span style={{ fontWeight: 600 }}>{accord.nom}</span>
                      <span style={{ fontSize: 10, opacity: 0.7, fontFamily: "monospace" }}>{accord.degree}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Grille 8 mesures */}
        <section style={{ marginBottom: 28 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", color: "#777", textTransform: "uppercase", marginBottom: 12 }}>
            {t("mesures")}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(96px, 1fr))", gap: 10 }}>
            {sq.mesures.map((mes, m) => (
              <div key={m} style={{ background: "#fff", border: `1px solid ${BORDURE}`, borderRadius: 12, padding: 8, display: "flex", flexDirection: "column", gap: 6 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 10, color: "#aaa", fontFamily: "monospace" }}>{m + 1}</span>
                  <button
                    onClick={() => basculer(m)}
                    title={t("basculer")}
                    style={{ fontSize: 10, color: VIOLET, background: "transparent", border: "none", cursor: "pointer", padding: 2 }}
                  >
                    {mes.emplacements.length === 1 ? t("unAccord") : t("deuxAccords")}
                  </button>
                </div>
                {mes.emplacements.map((emp, e) => {
                  const estSel = selValide.mesure === m && selValide.emplacement === e;
                  return (
                    <div
                      key={e}
                      onClick={() => setSel({ mesure: m, emplacement: e })}
                      style={{
                        position: "relative",
                        minHeight: 42, borderRadius: 8, cursor: "pointer",
                        border: `1.5px solid ${estSel ? VIOLET : BORDURE}`,
                        background: estSel ? VIOLET_CLAIR : "#fafafa",
                        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                        padding: "4px 2px",
                      }}
                    >
                      {emp.accord ? (
                        <>
                          <span style={{ fontSize: 13, fontWeight: 600, color: "#3a2f6b" }}>{emp.accord.nom}</span>
                          <span style={{ fontSize: 10, opacity: 0.7, fontFamily: "monospace", color: "#666" }}>{emp.accord.degree}</span>
                          <button
                            onClick={(ev) => { ev.stopPropagation(); vider(m, e); }}
                            aria-label={t("vider")}
                            title={t("vider")}
                            style={{
                              position: "absolute", top: 2, right: 4, fontSize: 12, lineHeight: 1,
                              color: "#c0392b", background: "transparent", border: "none", cursor: "pointer",
                            }}
                          >
                            ×
                          </button>
                        </>
                      ) : (
                        <span style={{ fontSize: 11, color: "#ccc" }}>{t("emplacementVide")}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </section>

        {/* Portée + lecture */}
        <section style={{ marginBottom: 28, background: "#fff", border: `1px solid ${BORDURE}`, borderRadius: 12, padding: "16px 16px 18px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10, flexWrap: "wrap", gap: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", color: "#777", textTransform: "uppercase" }}>
              {t("portee")}
            </span>
            <button
              onClick={ecouter}
              disabled={!aDesAccords}
              style={{
                padding: "8px 18px", borderRadius: 10,
                border: `1px solid ${aDesAccords ? VIOLET : BORDURE}`,
                background: aDesAccords ? VIOLET_CLAIR : "#f4f4f4",
                color: aDesAccords ? VIOLET : "#bbb",
                fontSize: 13, fontWeight: 500, cursor: aDesAccords ? "pointer" : "default",
              }}
            >
              ▶ {t("ecouter")}
            </button>
          </div>

          {aDesAccords ? (
            <>
              <div style={{ fontSize: 10, color: "#999", letterSpacing: "0.06em", marginBottom: 6 }}>{t("voixHautes")}</div>
              <StudioScore ref={scoreRef} musicxml={musicxml} onReady={handleReady} />
              <div style={{ fontSize: 10, color: "#999", letterSpacing: "0.06em", marginTop: 6 }}>{t("voixBasses")}</div>
            </>
          ) : (
            <div style={{ fontSize: 13, color: "#aaa", padding: "24px 8px", textAlign: "center" }}>{t("vide")}</div>
          )}

          {/* Frise fonctionnelle + cadence */}
          {aDesAccords && (
            <div style={{ marginTop: 16, paddingTop: 14, borderTop: `1px dashed ${BORDURE}` }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", color: "#777", textTransform: "uppercase", marginBottom: 8 }}>
                {t("frise")}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {suite.map(({ accord, mesure, emplacement }, i) => (
                  <div key={`${mesure}-${emplacement}`} style={{
                    display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
                    padding: "6px 10px", borderRadius: 8, background: "#faf8f4", border: `1px solid ${BORDURE}`, minWidth: 48,
                  }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: "#3a2f6b", fontFamily: "monospace" }}>{accord.degree}</span>
                    <span style={{ fontSize: 10, color: VIOLET, fontWeight: 700 }}>{t(`fonctions.${frise[i]?.fonction ?? "?"}` as never)}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 12, fontSize: 13, color: "#444" }}>
                <strong style={{ color: VIOLET }}>{t("cadence")} : </strong>
                {t(`cadences.${cadence ?? "aucune"}` as never)}
              </div>
            </div>
          )}
        </section>

        {/* Vérification de conduite */}
        {aDesAccords && (
          <section style={{ marginBottom: 28 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", color: "#777", textTransform: "uppercase", marginBottom: 8 }}>
              {t("fautesTitre")}
            </div>
            {realisation.approx ? (
              <div style={{ padding: "10px 14px", borderRadius: 8, background: "#FFFBEB", border: "0.5px solid #F6E05E", fontSize: 13, color: "#744210" }}>
                ⚠ {t("approx")}
              </div>
            ) : erreurs.length === 0 ? (
              <div style={{ padding: "10px 14px", borderRadius: 8, background: "#F0FFF4", border: "0.5px solid #9AE6B4", fontSize: 13, color: "#276749" }}>
                ✓ {t("conduiteOk")}
              </div>
            ) : (
              <FichesErreurs errors={erreurs} />
            )}
          </section>
        )}

        {/* Export vers l'atelier */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={exporter}
            disabled={!aDesAccords}
            style={{
              padding: "11px 24px", borderRadius: 10, border: "none",
              background: aDesAccords ? VIOLET : BORDURE,
              color: aDesAccords ? "#fff" : "#aaa",
              fontSize: 14, fontWeight: 600, cursor: aDesAccords ? "pointer" : "default",
            }}
          >
            {t("exporter")} →
          </button>
        </div>
      </div>

      {/* Piano caché (audio uniquement, pas de clavier visible) */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={4} startOctave={1} showLabels={false} />
      </div>
    </main>
  );
}

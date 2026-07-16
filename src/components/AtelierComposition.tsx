"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import StudioScore, { type StudioScoreRef } from "@/components/StudioScore";
import PianoPlayer, { type PianoPlayerRef } from "@/components/PianoPlayer";
import {
  inserer, effacer, type Curseur,
} from "@/lib/composition-edition";
import { pieceVersMusicXML } from "@/lib/piece-vers-musicxml";
import { parseMusicXML, type ParsedScore } from "@/lib/musicxml-parse";
import { planifierLecture, specDepuisMidi } from "@/lib/studio-playback";
import {
  ORDRE_VOIX,
  type Piece, type Voix, type Note, type Silence, type Duree, type BaseDuree,
  type LettreNote, type NomVoix,
} from "@/lib/piece-model";

/**
 * AtelierComposition.tsx
 * Harmonia — L'atelier de composition « note à note » (fonction Pro).
 *
 * L'élève écrit sa pièce en écriture SATB à QUATRE voix nommées (Soprano, Alto, Ténor,
 * Basse), une note à la fois, au piano à l'écran ou au clavier d'ordinateur. Un sélecteur
 * de voix (S/A/T/B) désigne la voix ACTIVE : la saisie opère sur elle seule. À CHAQUE
 * frappe on regrave (Verovio, via StudioScore) et il peut ÉCOUTER. Toute la logique
 * d'édition est PURE (`composition-edition.ts`) : ce composant n'orchestre que l'état,
 * les entrées et le son.
 *
 * POURQUOI regraver directement `piece` (sans complément de silences ici) : le modèle
 * ne porte que les notes POSÉES (voix souvent incomplètes) ; c'est l'export
 * (`pieceVersMusicXML`) qui ajoute lui-même les silences de complément et masque les
 * voix restées vides. Le calcul est mémoïsé sur `piece` seul.
 *
 * PORTÉE : saisie MÉLODIQUE (une hauteur par note) par voix + silences. Les ACCORDS au
 * sens d'une même voix (plusieurs hauteurs simultanées) sont supportés par le modèle mais
 * PAS par cette interaction — l'accord SATB s'obtient en posant une note par voix au même
 * instant. Le triolet reste une bascule manuelle : l'élève entre les trois notes du groupe.
 */

// ── Constantes musicales ─────────────────────────────────────────────────────────

/** Demi-tons de la fondamentale (Do) pour convertir lettre → midi. */
const DEMI: Record<LettreNote, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
/** Noms français des sept notes naturelles. */
const NOM_FR: Record<LettreNote, string> = { C: "Do", D: "Ré", E: "Mi", F: "Fa", G: "Sol", A: "La", B: "Si" };
/** Les sept blanches, dans l'ordre d'une octave. */
const BLANCHES: LettreNote[] = ["C", "D", "E", "F", "G", "A", "B"];
/** Une noire (touche altérée) suit ces blanches (Do♯, Ré♯, Fa♯, Sol♯, La♯). */
const NOIRE_APRES: Partial<Record<LettreNote, true>> = { C: true, D: true, F: true, G: true, A: true };

/** Durées de la palette, du plus long au plus court, avec leur libellé. */
const DUREES: ReadonlyArray<{ base: BaseDuree; label: string; touche: string }> = [
  { base: "ronde", label: "𝅝 Ronde", touche: "1" },
  { base: "blanche", label: "𝅗𝅥 Blanche", touche: "2" },
  { base: "noire", label: "♩ Noire", touche: "3" },
  { base: "croche", label: "♪ Croche", touche: "4" },
  { base: "double", label: "𝅘𝅥𝅯 Double", touche: "5" },
];

/** Lettre de note d'une touche « a »…« g » du clavier d'ordinateur (a = La). */
const TOUCHE_LETTRE: Record<string, LettreNote> = {
  a: "A", b: "B", c: "C", d: "D", e: "E", f: "F", g: "G",
};

/** Spec PianoPlayer d'une hauteur (lettre + altération + octave standard). */
function specHauteur(lettre: LettreNote, alteration: number, octave: number): string {
  return specDepuisMidi((octave + 1) * 12 + DEMI[lettre] + alteration);
}

/**
 * Métadonnées d'affichage de chaque voix : libellé, lettre du sélecteur et couleur
 * d'accent. La couleur suit la voix partout (bouton actif, repère de position) pour
 * que « où j'écris » se lise d'un coup d'œil.
 */
const VOIX_META: Record<NomVoix, { label: string; court: string; couleur: string }> = {
  soprano: { label: "Soprano", court: "S", couleur: "#5C3D6E" },
  alto:    { label: "Alto",    court: "A", couleur: "#185FA5" },
  tenor:   { label: "Ténor",   court: "T", couleur: "#0F6E56" },
  basse:   { label: "Basse",   court: "B", couleur: "#BA7517" },
};

/** Une pièce d'édition vierge : 8 mesures, Do majeur, 4/4, les quatre voix VIDES. */
function pieceEditionVierge(): Piece {
  return {
    armure: 0,
    chiffrage: { temps: 4, unite: 4 },
    mesures: Array.from({ length: 8 }, () => ({
      voix: { soprano: [], alto: [], tenor: [], basse: [] } as Record<NomVoix, Voix>,
    })),
  };
}

export default function AtelierComposition() {
  const [piece, setPiece] = useState<Piece>(pieceEditionVierge);
  const [curseur, setCurseur] = useState<Curseur>({ mesure: 0, voix: "soprano" });
  const [base, setBase] = useState<BaseDuree>("noire");
  const [points, setPoints] = useState<0 | 1 | 2>(0);
  const [alteration, setAlteration] = useState<-1 | 0 | 1>(0);
  const [triolet, setTriolet] = useState(false);
  const [octave, setOctave] = useState(5); // octave courante (clavier d'ordinateur + piano à l'écran)
  const [isPlaying, setIsPlaying] = useState(false);

  const pianoRef = useRef<PianoPlayerRef>(null);
  const scoreRef = useRef<StudioScoreRef>(null);
  // Timeouts en attente (notes + fin de lecture) : les garder pour tout annuler à l'arrêt.
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const rafRef = useRef<number | null>(null);
  const departRef = useRef<number>(0);

  // ── Gravure à chaque frappe ────────────────────────────────────────────────
  // Mémoïsée sur `piece` seul : `pieceVersMusicXML` complète les silences et masque les
  // voix vides lui-même, puis Verovio grave. 8 mesures — le coût par frappe reste acceptable.
  const musicxml = useMemo(() => pieceVersMusicXML(piece), [piece]);

  // ── Poser une note ─────────────────────────────────────────────────────────
  // `altOverride` sert aux touches NOIRES du piano (qui portent leur propre dièse) ;
  // sinon on prend l'altération courante de la palette.
  const poserNote = useCallback(
    (lettre: LettreNote, oct: number, altOverride?: -1 | 0 | 1) => {
      const alt = altOverride ?? alteration;
      const duree: Duree = { base, points, ...(triolet ? { nolet: { reelles: 3, normales: 2 } } : {}) };
      const note: Note = { type: "note", hauteurs: [{ lettre, alteration: alt, octave: oct }], duree };
      const r = inserer(piece, curseur, note);
      if (r.piece !== piece) {
        setPiece(r.piece);
        setCurseur(r.curseur);
        // Jouer la note posée, pour un retour sonore immédiat.
        pianoRef.current?.playVoicing([specHauteur(lettre, alt, oct)], { duration: 0.5, velocity: 0.8 });
      }
    },
    [piece, curseur, base, points, alteration, triolet],
  );

  // ── Poser un silence ─────────────────────────────────────────────────────────
  const poserSilence = useCallback(() => {
    const silence: Silence = { type: "silence", duree: { base, points } };
    const r = inserer(piece, curseur, silence);
    if (r.piece !== piece) {
      setPiece(r.piece);
      setCurseur(r.curseur);
    }
  }, [piece, curseur, base, points]);

  // ── Effacer la dernière note posée ───────────────────────────────────────────
  const effacerDerniere = useCallback(() => {
    const r = effacer(piece, curseur);
    setPiece(r.piece);
    setCurseur(r.curseur);
  }, [piece, curseur]);

  const changerOctave = useCallback((delta: number) => {
    setOctave((o) => Math.min(7, Math.max(1, o + delta)));
  }, []);

  const toutEffacer = useCallback(() => {
    setPiece(pieceEditionVierge());
    setCurseur({ mesure: 0, voix: "soprano" });
  }, []);

  /** Change la voix active en gardant la mesure courante. */
  const choisirVoix = useCallback((voix: NomVoix) => {
    setCurseur((c) => ({ mesure: c.mesure, voix }));
  }, []);

  // ── Lecture (reprise du patron de Studio.tsx) ────────────────────────────────

  const arreterLecture = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    if (rafRef.current !== null) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
    pianoRef.current?.stopAll();
    scoreRef.current?.surlignerATemps(null);
    setIsPlaying(false);
  }, []);

  const lire = useCallback(() => {
    if (isPlaying) return;
    let score: ParsedScore;
    try {
      score = parseMusicXML(musicxml);
    } catch {
      return; // une pièce vide reste renderable ; en pratique, jamais atteint
    }
    const { evenements, dureeTotale } = planifierLecture(score, 1);
    if (evenements.length === 0) return;

    const ids: ReturnType<typeof setTimeout>[] = [];
    const piano = pianoRef.current;
    // Chaque note à son instant, via un timeout dont on garde l'identifiant : l'arrêt
    // annule les notes encore à venir ; la note déjà partie est coupée par `stopAll`.
    for (const e of evenements) {
      ids.push(setTimeout(() => {
        piano?.playVoicing([e.spec], { duration: e.duration, velocity: e.velocity });
      }, e.startTime * 1000));
    }
    ids.push(setTimeout(() => arreterLecture(), dureeTotale * 1000 + 200));
    timeoutsRef.current = ids;

    // Le repère de lecture sur la partition, piloté par la même horloge que le son.
    departRef.current = performance.now();
    const animer = () => {
      scoreRef.current?.surlignerATemps(performance.now() - departRef.current);
      rafRef.current = requestAnimationFrame(animer);
    };
    rafRef.current = requestAnimationFrame(animer);

    setIsPlaying(true);
  }, [isPlaying, musicxml, arreterLecture]);

  // À la disparition du composant : ni timeout ni animation orphelins.
  useEffect(() => () => {
    timeoutsRef.current.forEach(clearTimeout);
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
  }, []);

  // ── Clavier d'ordinateur ─────────────────────────────────────────────────────
  // Les handlers dépendent de l'état ; pour ne poser l'écouteur qu'UNE fois (et ne
  // jamais lire un état périmé), on passe par une ref remise à jour à chaque rendu.
  const actionsRef = useRef({ poserNote, poserSilence, effacerDerniere, changerOctave, setBase });
  actionsRef.current = { poserNote, poserSilence, effacerDerniere, changerOctave, setBase };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      // Ignorer si un champ de saisie a le focus (ex. un input de réglage).
      const cible = e.target as HTMLElement | null;
      const tag = cible?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || cible?.isContentEditable) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      const a = actionsRef.current;
      const k = e.key.toLowerCase();

      if (TOUCHE_LETTRE[k]) {
        e.preventDefault();
        a.poserNote(TOUCHE_LETTRE[k], octave);
        return;
      }
      const dureeTouche = DUREES.find((d) => d.touche === e.key);
      if (dureeTouche) {
        e.preventDefault();
        a.setBase(dureeTouche.base);
        return;
      }
      switch (e.key) {
        case "ArrowUp":   e.preventDefault(); a.changerOctave(1); break;
        case "ArrowDown": e.preventDefault(); a.changerOctave(-1); break;
        case "Backspace": e.preventDefault(); a.effacerDerniere(); break;
        case "r": case "R": e.preventDefault(); a.poserSilence(); break;
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // `octave` est lue directement (pas via ref) car elle change l'octave visée du clavier.
  }, [octave]);

  // ── Styles ───────────────────────────────────────────────────────────────────
  const carte: React.CSSProperties = {
    background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 10, padding: "16px 20px", marginBottom: 12,
  };
  const btn: React.CSSProperties = {
    padding: "6px 12px", minHeight: 34, borderRadius: 6, fontSize: 12,
    fontFamily: "system-ui, sans-serif", cursor: "pointer", fontWeight: 400,
    border: "0.5px solid #e0dbd3", background: "#fff", color: "#444",
  };
  const btnOn: React.CSSProperties = { ...btn, border: "0.5px solid #5C3D6E", background: "#5C3D6E", color: "#fff", fontWeight: 600 };
  const groupeLabel: React.CSSProperties = { fontSize: 11, fontWeight: 600, color: "#888", marginRight: 4, letterSpacing: "0.04em" };
  const separateur = <div style={{ width: 1, height: 28, background: "#e0dbd3" }} />;

  // ── Clavier de piano (2 octaves autour de l'octave courante) ─────────────────
  const octavesClavier = [octave, octave + 1];
  const WHITE_W = 46, WHITE_H = 150, BLACK_W = 30, BLACK_H = 94;
  // Les blanches à plat : { lettre, oct }.
  const blanches = octavesClavier.flatMap((oct) => BLANCHES.map((lettre) => ({ lettre, oct })));

  return (
    <main style={{ minHeight: "100vh", background: "#f4f1ec", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>

        {/* ── En-tête ─────────────────────────────────────────────── */}
        <div style={{ marginBottom: "1.5rem" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#BA7517", textTransform: "uppercase", marginBottom: 4, fontFamily: "system-ui, sans-serif" }}>
            Fonctionnalité Pro
          </div>
          <h1 style={{ fontSize: 24, fontWeight: 600, color: "#1a1a1a", margin: "0 0 4px", fontFamily: "Georgia, serif" }}>
            Atelier de composition
          </h1>
          <p style={{ fontSize: 13, color: "#888", margin: 0, fontFamily: "system-ui, sans-serif" }}>
            Écrivez votre pièce à quatre voix (S/A/T/B) — choisissez la voix, puis posez les notes au piano ci-dessous ou au clavier (a…g). La partition se grave à chaque frappe.
          </p>
        </div>

        {/* ── Palette de saisie ────────────────────────────────────── */}
        <div style={{ ...carte, display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", padding: "12px 16px" }}>
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            <span style={groupeLabel}>DURÉE</span>
            {DUREES.map((d) => (
              <button key={d.base} onClick={() => setBase(d.base)} style={base === d.base ? btnOn : btn} title={`Touche ${d.touche}`}>
                {d.label}
              </button>
            ))}
          </div>
          {separateur}
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            <span style={groupeLabel}>POINTS</span>
            {([0, 1, 2] as const).map((p) => (
              <button key={p} onClick={() => setPoints(p)} style={points === p ? btnOn : btn}>
                {p === 0 ? "—" : p === 1 ? "·" : "··"}
              </button>
            ))}
          </div>
          {separateur}
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            <span style={groupeLabel}>ALTÉRATION</span>
            {([["♭", -1], ["♮", 0], ["♯", 1]] as const).map(([sym, val]) => (
              <button key={val} onClick={() => setAlteration(val)} style={{
                ...(alteration === val ? btnOn : btn), width: 34, height: 34, padding: 0, fontFamily: "serif", fontSize: 16,
              }}>{sym}</button>
            ))}
          </div>
          {separateur}
          <button
            onClick={() => setTriolet((t) => !t)}
            style={triolet ? btnOn : btn}
            title="Entrez les trois notes du groupe l'une après l'autre"
          >
            {triolet ? "⌐ Triolet actif" : "Triolet"}
          </button>
        </div>

        {/* ── Sélecteur de voix + repère de position ───────────────── */}
        <div style={{ ...carte, marginBottom: 12, padding: "10px 16px", display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap", fontFamily: "system-ui, sans-serif", fontSize: 13 }}>
          {/* Quatre boutons colorés S/A/T/B : cliquer désigne la voix ACTIVE (la mesure
              courante est conservée). Le bouton actif prend la couleur de sa voix. */}
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            <span style={groupeLabel}>VOIX</span>
            {ORDRE_VOIX.map((v) => {
              const meta = VOIX_META[v];
              const actif = curseur.voix === v;
              return (
                <button
                  key={v}
                  onClick={() => choisirVoix(v)}
                  title={meta.label}
                  aria-pressed={actif}
                  style={{
                    ...btn,
                    minWidth: 40,
                    fontWeight: actif ? 700 : 500,
                    color: actif ? "#fff" : meta.couleur,
                    background: actif ? meta.couleur : "#fff",
                    border: `0.5px solid ${meta.couleur}`,
                  }}
                >
                  {meta.court}
                </button>
              );
            })}
          </div>
          {separateur}
          <span>
            <span style={{ color: "#aaa" }}>Voix : </span>
            <strong style={{ color: VOIX_META[curseur.voix].couleur }}>{VOIX_META[curseur.voix].label}</strong>
            <span style={{ color: "#aaa" }}> · mesure </span>
            <strong style={{ color: VOIX_META[curseur.voix].couleur }}>{curseur.mesure + 1}</strong>
          </span>
          {triolet && (
            <span style={{ fontSize: 12, color: "#BA7517", fontWeight: 600 }}>
              Triolet : entrez les trois notes du groupe
            </span>
          )}
        </div>

        {/* ── Partition gravée (à chaque frappe) ───────────────────── */}
        <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 10, padding: "16px 12px", marginBottom: 12, overflowX: "auto" }}>
          <StudioScore ref={scoreRef} musicxml={musicxml} />
        </div>

        {/* ── Piano à l'écran ──────────────────────────────────────── */}
        <div style={{ ...carte }}>
          <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12, flexWrap: "wrap" }}>
            <span style={groupeLabel}>OCTAVE</span>
            <button onClick={() => changerOctave(-1)} style={{ ...btn, padding: "5px 12px" }} title="Flèche bas">▼</button>
            <span style={{ fontSize: 14, fontFamily: "monospace", color: "#1a1a1a", minWidth: 20, textAlign: "center" }}>{octave}</span>
            <button onClick={() => changerOctave(1)} style={{ ...btn, padding: "5px 12px" }} title="Flèche haut">▲</button>
            <span style={{ fontSize: 11, color: "#bbb", fontFamily: "system-ui, sans-serif" }}>
              (octaves {octave} et {octave + 1})
            </span>
          </div>

          {/* Rangée de touches : blanches en flex, noires posées par-dessus. */}
          <div style={{ overflowX: "auto", paddingBottom: 4 }}>
            <div style={{ position: "relative", height: WHITE_H, width: blanches.length * WHITE_W }}>
              {/* Blanches */}
              {blanches.map(({ lettre, oct }, i) => (
                <button
                  key={`w-${lettre}-${oct}-${i}`}
                  onClick={() => poserNote(lettre, oct)}
                  style={{
                    position: "absolute", left: i * WHITE_W, top: 0, width: WHITE_W - 2, height: WHITE_H,
                    borderRadius: "0 0 6px 6px", border: "1px solid #d8d2c8", background: "#fff",
                    display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center",
                    paddingBottom: 8, cursor: "pointer", fontFamily: "system-ui, sans-serif",
                  }}
                >
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#5C3D6E" }}>{NOM_FR[lettre]}</span>
                  <span style={{ fontSize: 9, color: "#bbb", fontFamily: "monospace" }}>{oct}</span>
                </button>
              ))}
              {/* Noires (dièse de la blanche à leur gauche) */}
              {blanches.map(({ lettre, oct }, i) =>
                NOIRE_APRES[lettre] && i < blanches.length - 1 ? (
                  <button
                    key={`b-${lettre}-${oct}-${i}`}
                    onClick={() => poserNote(lettre, oct, 1)}
                    style={{
                      position: "absolute", left: (i + 1) * WHITE_W - BLACK_W / 2, top: 0,
                      width: BLACK_W, height: BLACK_H, borderRadius: "0 0 4px 4px",
                      border: "1px solid #1a1a1a", background: "#2a2a2a", color: "#fff",
                      cursor: "pointer", zIndex: 2, fontSize: 9, fontFamily: "system-ui, sans-serif",
                      display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: 6,
                    }}
                    title={`${NOM_FR[lettre]}♯${oct}`}
                  >
                    {NOM_FR[lettre]}♯
                  </button>
                ) : null,
              )}
            </div>
          </div>

          {/* Actions : silence, effacer, écouter, tout effacer */}
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 14, flexWrap: "wrap" }}>
            <button onClick={poserSilence} style={{ ...btn, padding: "8px 14px", fontFamily: "'Times New Roman', serif", fontSize: 15 }} title="Touche R">
              𝄽 Silence
            </button>
            <button onClick={effacerDerniere} style={{ ...btn, padding: "8px 14px", color: "#c0392b" }} title="Retour arrière">
              ⌫ Effacer
            </button>
            <div style={{ flex: 1 }} />
            <button
              onClick={isPlaying ? arreterLecture : lire}
              style={{
                padding: "10px 22px", borderRadius: 10, border: "none",
                background: isPlaying ? "#C62828" : "#5C3D6E", color: "#fff",
                fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "system-ui, sans-serif",
              }}
            >
              {isPlaying ? "◼ Arrêter" : "▶ Écouter"}
            </button>
            <button onClick={toutEffacer} style={{ ...btn, padding: "8px 14px" }}>
              ✕ Tout effacer
            </button>
          </div>
        </div>

        {/* ── Aide clavier ─────────────────────────────────────────── */}
        <div style={{ fontSize: 12, color: "#999", fontFamily: "system-ui, sans-serif", lineHeight: 1.7, padding: "0 4px" }}>
          <strong style={{ color: "#777" }}>Clavier :</strong> a…g = les notes (a = La, c = Do…) · ↑ ↓ = octave · 1–5 = durée · R = silence · Retour arrière = effacer.
        </div>

        {/* PianoPlayer monté caché : il ne sert qu'à SONNER (cf. Studio). */}
        <div style={{ height: 0, overflow: "hidden", pointerEvents: "none" }}>
          <PianoPlayer ref={pianoRef} octaves={5} startOctave={1} showLabels={false} />
        </div>
      </div>
    </main>
  );
}

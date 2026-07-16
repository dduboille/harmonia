"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import StudioScore, { type StudioScoreRef } from "@/components/StudioScore";
import PianoPlayer, { type PianoPlayerRef } from "@/components/PianoPlayer";
import {
  inserer, effacer, positionEcriture, naviguer,
  transposerDegre, transposerOctave, remplacerHauteur, remplacerDuree,
  supprimerNote, onsetMsMidiDeSelection, trouverPosition,
  empilerHauteur, retirerDerniereHauteur, cibleAccord, insererAvant, type Curseur,
} from "@/lib/composition-edition";
import { pieceVersMusicXML } from "@/lib/piece-vers-musicxml";
import { detecterFautes } from "@/lib/conduite-voix";
import { parseMusicXML, type ParsedScore } from "@/lib/musicxml-parse";
import { planifierLecture, specDepuisMidi } from "@/lib/studio-playback";
import AtelierAnalyse from "@/components/AtelierAnalyse";
import { analyserPartition, tonaliteDe, type AnalysisResult } from "@/lib/analyse-resultat";
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
 * Basse), une note à la fois, via les boutons de notes ou le clavier d'ordinateur. Un sélecteur
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
/** Les sept notes naturelles, dans l'ordre d'une octave. */
const NOTES: LettreNote[] = ["C", "D", "E", "F", "G", "A", "B"];

/** Couleur par note (reprise de l'ancien éditeur SATB) : un repère de couleur stable. */
const COULEUR_NOTE: Record<LettreNote, string> = {
  C: "#E53E3E", D: "#DD6B20", E: "#D69E2E",
  F: "#38A169", G: "#3182CE", A: "#805AD5", B: "#D53F8C",
};

/**
 * Octave PAR DÉFAUT de chaque voix : sa TESSITURE. Poser une note dans la basse la
 * place au grave (octave 3), dans le soprano à l'aigu (octave 5) — plus besoin de
 * chercher l'octave. Chaque voix garde ensuite sa propre octave courante, ajustable.
 */
const OCTAVE_DEFAUT: Record<NomVoix, number> = {
  soprano: 5, alto: 4, tenor: 4, basse: 3,
};

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

/** Les 15 armures, du plus bémolisé au plus diésé. */
const ARMURES = [-7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7];

/**
 * Libellé du sélecteur : le nom d'école de la tonalité (`tonaliteDe`, la même table
 * que le panneau d'analyse — « Ré♭ majeur », jamais « Do♯ »), plus le rappel de
 * l'armure entre parenthèses hors Do/la.
 */
function libelleTonalite(fifths: number, mode: "major" | "minor"): string {
  const nom = tonaliteDe(fifths, mode);
  if (fifths === 0) return nom;
  return `${nom} (${Math.abs(fifths)}${fifths > 0 ? "♯" : "♭"})`;
}

/** Une pièce d'édition vierge : 8 mesures, Do majeur, 4/4, les quatre voix VIDES. */
function pieceEditionVierge(): Piece {
  return {
    armure: 0,
    mode: "major",
    chiffrage: { temps: 4, unite: 4 },
    mesures: Array.from({ length: 8 }, () => ({
      voix: { soprano: [], alto: [], tenor: [], basse: [] } as Record<NomVoix, Voix>,
    })),
  };
}

export default function AtelierComposition() {
  const [piece, setPiece] = useState<Piece>(pieceEditionVierge);
  const [curseur, setCurseur] = useState<Curseur>({ mesure: 0, voix: "soprano", note: "fin" });
  const [base, setBase] = useState<BaseDuree>("noire");
  const [points, setPoints] = useState<0 | 1 | 2>(0);
  const [alteration, setAlteration] = useState<-1 | 0 | 1>(0);
  const [triolet, setTriolet] = useState(false);
  const [accord, setAccord] = useState(false);
  const [insertion, setInsertion] = useState(false);
  // Une octave courante PAR VOIX : chaque voix part de sa tessiture (cf. OCTAVE_DEFAUT).
  const [octaves, setOctaves] = useState<Record<NomVoix, number>>(OCTAVE_DEFAUT);
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

  // Contrôle de la conduite des voix : recalculé à chaque frappe (module pur, peu coûteux).
  const fautes = useMemo(() => detecterFautes(piece), [piece]);

  // Analyse harmonique en direct : LA chaîne du Studio, au navigateur, à chaque
  // frappe. Dépend de `musicxml` (qui porte armure, mode et notes).
  const analyse = useMemo<AnalysisResult | null>(() => {
    try {
      return analyserPartition(parseMusicXML(musicxml), "");
    } catch {
      return null; // pièce vide ou non analysable : le panneau montre son état vide
    }
  }, [musicxml]);

  // Surligne la note sélectionnée après chaque regravure (le SVG est recréé à chaque
  // changement de `piece`, donc à chaque frappe : on re-surligne dans la foulée).
  useEffect(() => {
    scoreRef.current?.surlignerSelection(onsetMsMidiDeSelection(piece, curseur));
  }, [musicxml, curseur, piece]);

  // Surligne les notes fautives après chaque regravure (même raison : SVG recréé à chaque frappe).
  useEffect(() => {
    const cibles = fautes.flatMap((f) =>
      f.positions
        .map((pos) => {
          const s = onsetMsMidiDeSelection(piece, pos);
          return s ? { ...s, severite: f.severite } : null;
        })
        .filter((x): x is { onsetMs: number; midis: number[]; severite: "faute" | "avertissement" } => x !== null),
    );
    scoreRef.current?.surlignerFautes(cibles);
  }, [musicxml, fautes, piece]);

  // Clic sur une note gravée : retrouve sa position dans le modèle et la sélectionne
  // (bascule aussi la voix active si besoin).
  const onSelectNote = useCallback((sel: { onsetMs: number; midi: number }) => {
    const pos = trouverPosition(piece, sel.onsetMs, sel.midi);
    if (pos) setCurseur(pos);
  }, [piece]);

  // ── Poser une note ─────────────────────────────────────────────────────────
  // La note se pose à l'octave de la VOIX ACTIVE (sa tessiture), avec l'altération
  // courante de la palette.
  const poserNote = useCallback(
    (lettre: LettreNote) => {
      // Mode insertion : la lettre s'INTERCALE avant la note sélectionnée (durée et
      // altération de la palette, octave de la voix, sans triolet — un membre de
      // groupe inséré isolément casserait le groupe).
      if (insertion && curseur.note !== "fin") {
        const oct = octaves[curseur.voix];
        const note: Note = { type: "note", hauteurs: [{ lettre, alteration, octave: oct }], duree: { base, points } };
        const r = insererAvant(piece, curseur, note);
        if (r.piece !== piece) {
          setPiece(r.piece);
          setCurseur(r.curseur);
          pianoRef.current?.playVoicing([specHauteur(lettre, alteration, oct)], { duration: 0.5, velocity: 0.8 });
        }
        return;
      }
      // Mode sélection : on CORRIGE la hauteur de la note pointée (garde la durée).
      if (curseur.note !== "fin") {
        const np = remplacerHauteur(piece, curseur, lettre, alteration);
        if (np !== piece) {
          setPiece(np);
          const oct = (np.mesures[curseur.mesure].voix[curseur.voix][curseur.note] as Note).hauteurs[0].octave;
          pianoRef.current?.playVoicing([specHauteur(lettre, alteration, oct)], { duration: 0.5, velocity: 0.8 });
        }
        return;
      }
      const oct = octaves[curseur.voix];
      const duree: Duree = { base, points, ...(triolet ? { nolet: { reelles: 3, normales: 2 } } : {}) };
      const note: Note = { type: "note", hauteurs: [{ lettre, alteration, octave: oct }], duree };
      const r = inserer(piece, curseur, note);
      if (r.piece !== piece) {
        setPiece(r.piece);
        setCurseur(r.curseur);
        // Jouer la note posée, pour un retour sonore immédiat.
        pianoRef.current?.playVoicing([specHauteur(lettre, alteration, oct)], { duration: 0.5, velocity: 0.8 });
      }
    },
    [piece, curseur, octaves, base, points, alteration, triolet, insertion],
  );

  // ── Empiler une hauteur (accord dans la voix) ────────────────────────────────
  // Maj+lettre au clavier, ou la bascule « Accord » pour les boutons. La hauteur
  // s'ajoute à la note sélectionnée — ou à la dernière note de la voix en mode
  // ajout — à l'octave courante de la voix. L'accord COMPLET est rejoué.
  const empiler = useCallback(
    (lettre: LettreNote) => {
      const oct = octaves[curseur.voix];
      const np = empilerHauteur(piece, curseur, lettre, alteration, oct);
      if (np === piece) return;
      setPiece(np);
      const cible = cibleAccord(np, curseur);
      if (cible) {
        const ev = np.mesures[cible.mesure].voix[curseur.voix][cible.note] as Note;
        pianoRef.current?.playVoicing(
          ev.hauteurs.map((h) => specHauteur(h.lettre, h.alteration, h.octave)),
          { duration: 0.5, velocity: 0.8 },
        );
      }
    },
    [piece, curseur, octaves, alteration],
  );

  // ── Poser un silence ─────────────────────────────────────────────────────────
  const poserSilence = useCallback(() => {
    const silence: Silence = { type: "silence", duree: { base, points } };
    // Mode insertion : le silence s'intercale avant la note sélectionnée.
    if (insertion && curseur.note !== "fin") {
      const r = insererAvant(piece, curseur, silence);
      if (r.piece !== piece) { setPiece(r.piece); setCurseur(r.curseur); }
      return;
    }
    const r = inserer(piece, curseur, silence);
    if (r.piece !== piece) {
      setPiece(r.piece);
      setCurseur(r.curseur);
    }
  }, [piece, curseur, base, points, insertion]);

  // Choisit base ou points : en mode sélection, CORRIGE la durée de la note pointée ; sinon règle
  // la palette de saisie. (Le triolet reste géré à part : il n'a de sens qu'en mode ajout.)
  const choisirDuree = useCallback((patch: { base?: BaseDuree; points?: 0 | 1 | 2 }) => {
    if (curseur.note !== "fin") {
      const ev = piece.mesures[curseur.mesure].voix[curseur.voix][curseur.note];
      if (ev && ev.type === "note") {
        const np = remplacerDuree(piece, curseur, { ...ev.duree, ...patch });
        if (np !== piece) setPiece(np);
      }
      return;
    }
    if (patch.base !== undefined) setBase(patch.base);
    if (patch.points !== undefined) setPoints(patch.points);
  }, [piece, curseur]);

  // ── Effacer la dernière note posée ───────────────────────────────────────────
  const effacerDerniere = useCallback(() => {
    const r = effacer(piece, curseur);
    setPiece(r.piece);
    setCurseur(r.curseur);
  }, [piece, curseur]);

  // Change l'octave courante de la VOIX ACTIVE (les autres voix gardent la leur).
  const changerOctave = useCallback((delta: number) => {
    setOctaves((o) => ({
      ...o,
      [curseur.voix]: Math.min(7, Math.max(1, o[curseur.voix] + delta)),
    }));
  }, [curseur.voix]);

  // ── Navigation / transposition / suppression sur la sélection ───────────────
  const naviguerNote = useCallback((sens: -1 | 1) => {
    setCurseur((c) => naviguer(piece, c, sens));
  }, [piece]);

  const transposer = useCallback((sens: -1 | 1, octave: boolean) => {
    if (curseur.note === "fin") return;
    const np = octave ? transposerOctave(piece, curseur, sens) : transposerDegre(piece, curseur, sens);
    if (np === piece) return;
    setPiece(np);
    const ev = np.mesures[curseur.mesure].voix[curseur.voix][curseur.note];
    if (ev && ev.type === "note") {
      pianoRef.current?.playVoicing(
        ev.hauteurs.map((h) => specHauteur(h.lettre, h.alteration, h.octave)),
        { duration: 0.4, velocity: 0.7 },
      );
    }
  }, [piece, curseur]);

  const effacerContextuel = useCallback(() => {
    // Un accord fond hauteur par hauteur avant que la note ne disparaisse.
    const depile = retirerDerniereHauteur(piece, curseur);
    if (depile !== piece) { setPiece(depile); return; }
    if (curseur.note !== "fin") {
      const r = supprimerNote(piece, curseur);
      setPiece(r.piece); setCurseur(r.curseur);
    } else {
      effacerDerniere();
    }
  }, [piece, curseur, effacerDerniere]);

  const toutEffacer = useCallback(() => {
    setPiece(pieceEditionVierge());
    setCurseur({ mesure: 0, voix: "soprano", note: "fin" });
    setOctaves(OCTAVE_DEFAUT);
    setAccord(false);
    setInsertion(false);
  }, []);

  /**
   * Change la voix active et place le curseur là où CETTE voix écrit (sa première mesure
   * non pleine) : chaque voix a sa propre position, indépendante des autres. Sans quoi,
   * après avoir rempli une mesure au soprano, passer à l'alto écrirait dans la mesure
   * suivante au lieu de la même.
   */
  const choisirVoix = useCallback((voix: NomVoix) => {
    setCurseur({ mesure: positionEcriture(piece, voix), voix, note: "fin" });
  }, [piece]);

  // Changer de tonalité ne TRANSPOSE pas : les notes gardent leurs hauteurs, seule
  // la notation (armure) et la lecture analytique changent.
  const choisirTonalite = useCallback((armure: number, mode: "major" | "minor") => {
    setPiece((p) => ({ ...p, armure, mode }));
  }, []);

  // Insérer et Accord sont EXCLUSIVES : chacune éteint l'autre en s'activant.
  const basculerAccord = useCallback(() => { setInsertion(false); setAccord((a) => !a); }, []);
  const basculerInsertion = useCallback(() => { setAccord(false); setInsertion((i) => !i); }, []);

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
  const actionsRef = useRef({ poserNote, empiler, poserSilence, effacerContextuel, naviguerNote, transposer, setBase, basculerInsertion });
  actionsRef.current = { poserNote, empiler, poserSilence, effacerContextuel, naviguerNote, transposer, setBase, basculerInsertion };

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
        if (e.shiftKey) a.empiler(TOUCHE_LETTRE[k]);
        else a.poserNote(TOUCHE_LETTRE[k]);
        return;
      }
      const dureeTouche = DUREES.find((d) => d.touche === e.key);
      if (dureeTouche) {
        e.preventDefault();
        a.setBase(dureeTouche.base);
        return;
      }
      switch (e.key) {
        case "ArrowLeft":  e.preventDefault(); a.naviguerNote(-1); break;
        case "ArrowRight": e.preventDefault(); a.naviguerNote(1); break;
        case "ArrowUp":    e.preventDefault(); a.transposer(1, e.shiftKey); break;
        case "ArrowDown":  e.preventDefault(); a.transposer(-1, e.shiftKey); break;
        case "Backspace":  e.preventDefault(); a.effacerContextuel(); break;
        case "r": case "R": e.preventDefault(); a.poserSilence(); break;
        case "i": case "I": e.preventDefault(); a.basculerInsertion(); break;
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // L'écouteur est posé une seule fois : tout l'état est lu via `actionsRef`.
  }, []);

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

  const octaveVoix = octaves[curseur.voix];
  const symboleAlt = alteration === 1 ? "♯" : alteration === -1 ? "♭" : "";

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
            Écrivez votre pièce à quatre voix (S/A/T/B) — choisissez la voix, puis posez les notes avec les boutons ci-dessous ou au clavier (a…g). Chaque voix se pose dans sa tessiture. La partition se grave à chaque frappe ; flèches ← → pour revenir corriger une note, ↑ ↓ pour la déplacer.
          </p>
        </div>

        {/* ── Palette de saisie ────────────────────────────────────── */}
        <div style={{ ...carte, display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", padding: "12px 16px" }}>
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            <span style={groupeLabel}>DURÉE</span>
            {DUREES.map((d) => (
              <button key={d.base} onClick={() => choisirDuree({ base: d.base })} style={base === d.base ? btnOn : btn} title={`Touche ${d.touche}`}>
                {d.label}
              </button>
            ))}
          </div>
          {separateur}
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            <span style={groupeLabel}>POINTS</span>
            {([0, 1, 2] as const).map((p) => (
              <button key={p} onClick={() => choisirDuree({ points: p })} style={points === p ? btnOn : btn}>
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
          <button
            onClick={basculerAccord}
            style={accord ? btnOn : btn}
            title="Les notes s'empilent sur la dernière note posée (Maj+lettre au clavier)"
          >
            {accord ? "♪ Accord actif" : "Accord"}
          </button>
          <button
            onClick={basculerInsertion}
            style={insertion ? btnOn : btn}
            title="La prochaine note se pose avant la note sélectionnée (touche I)"
          >
            {insertion ? "→| Insertion active" : "Insérer"}
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
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={groupeLabel}>TONALITÉ</span>
            <select
              value={`${piece.armure}|${piece.mode ?? "major"}`}
              onChange={(e) => {
                const [f, m] = e.target.value.split("|");
                choisirTonalite(Number(f), m as "major" | "minor");
                // Rendre le focus à la page : un <select> focalisé CAPTE flèches et
                // lettres (le garde du clavier l'ignore exprès), et cliquer la
                // partition — un simple div — ne le lui reprend pas. Sans ce blur,
                // tout le clavier de saisie semble mort après un changement de ton.
                e.currentTarget.blur();
              }}
              aria-label="Tonalité de la pièce"
              style={{ ...btn, padding: "6px 8px", maxWidth: 180 }}
            >
              <optgroup label="Majeur">
                {ARMURES.map((f) => (
                  <option key={`M${f}`} value={`${f}|major`}>{libelleTonalite(f, "major")}</option>
                ))}
              </optgroup>
              <optgroup label="Mineur">
                {ARMURES.map((f) => (
                  <option key={`m${f}`} value={`${f}|minor`}>{libelleTonalite(f, "minor")}</option>
                ))}
              </optgroup>
            </select>
          </div>
          {separateur}
          <span>
            <span style={{ color: "#aaa" }}>Voix : </span>
            <strong style={{ color: VOIX_META[curseur.voix].couleur }}>{VOIX_META[curseur.voix].label}</strong>
            <span style={{ color: "#aaa" }}> · </span>
            {curseur.note === "fin" ? (
              <><span style={{ color: "#aaa" }}>ajout · mesure </span>
                <strong style={{ color: VOIX_META[curseur.voix].couleur }}>{curseur.mesure + 1}</strong></>
            ) : (
              <strong style={{ color: VOIX_META[curseur.voix].couleur }}>note sélectionnée (mesure {curseur.mesure + 1})</strong>
            )}
          </span>
          {triolet && (
            <span style={{ fontSize: 12, color: "#BA7517", fontWeight: 600 }}>
              Triolet : entrez les trois notes du groupe
            </span>
          )}
          {accord && (
            <span style={{ fontSize: 12, color: "#BA7517", fontWeight: 600 }}>
              Accord : les notes s&apos;empilent sur la dernière posée
            </span>
          )}
          {insertion && (
            <span style={{ fontSize: 12, color: "#BA7517", fontWeight: 600 }}>
              Insertion : les notes se posent avant la sélection
            </span>
          )}
        </div>

        {/* ── Partition gravée (à chaque frappe) ───────────────────── */}
        <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 10, padding: "16px 12px", marginBottom: 12, overflowX: "auto" }}>
          <StudioScore ref={scoreRef} musicxml={musicxml} onSelectNote={onSelectNote} />
        </div>

        {/* ── Analyse harmonique en direct ──────────────────────────── */}
        <div style={{ ...carte }}>
          <h2 style={{ fontSize: 15, fontWeight: 600, color: "#1a1a1a", margin: "0 0 10px", fontFamily: "Georgia, serif" }}>
            Analyse harmonique
          </h2>
          <AtelierAnalyse analyse={analyse} />
        </div>

        {/* ── Conduite des voix ─────────────────────────────────────── */}
        <div style={{ ...carte }}>
          <h2 style={{ fontSize: 15, fontWeight: 600, color: "#1a1a1a", margin: "0 0 10px", fontFamily: "Georgia, serif" }}>
            Conduite des voix
          </h2>
          {fautes.length === 0 ? (
            <p style={{ fontSize: 13, color: "#0F6E56", margin: 0, fontFamily: "system-ui, sans-serif" }}>
              Aucune faute détectée.
            </p>
          ) : (
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              {fautes.map((f, i) => (
                <li key={i}>
                  <button
                    onClick={() => setCurseur(f.positions[0])}
                    style={{
                      display: "flex", alignItems: "center", gap: 8, width: "100%", textAlign: "left",
                      padding: "6px 10px", borderRadius: 6, cursor: "pointer",
                      border: "0.5px solid #e0dbd3", background: "#fff",
                      fontFamily: "system-ui, sans-serif", fontSize: 13,
                    }}
                  >
                    <span style={{ width: 8, height: 8, borderRadius: "50%", flexShrink: 0, background: f.severite === "faute" ? "#E53E3E" : "#DD6B20" }} />
                    <span style={{ color: "#1a1a1a" }}>{f.message}</span>
                    <span style={{ color: "#aaa" }}>· mesure {f.mesure + 1}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* ── Saisie des notes ─────────────────────────────────────── */}
        <div style={{ ...carte }}>
          {/* Octave de la VOIX ACTIVE : chaque voix a la sienne (sa tessiture). */}
          <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 14, flexWrap: "wrap" }}>
            <span style={groupeLabel}>OCTAVE ({VOIX_META[curseur.voix].label})</span>
            <button onClick={() => changerOctave(-1)} style={{ ...btn, padding: "5px 12px" }} title="Flèche bas">▼</button>
            <span style={{ fontSize: 14, fontFamily: "monospace", color: "#1a1a1a", minWidth: 20, textAlign: "center" }}>{octaveVoix}</span>
            <button onClick={() => changerOctave(1)} style={{ ...btn, padding: "5px 12px" }} title="Flèche haut">▲</button>
            <span style={{ fontSize: 11, color: "#bbb", fontFamily: "system-ui, sans-serif" }}>
              la note se pose dans le registre de la voix
            </span>
          </div>

          {/* Rangée de boutons de notes (C…B, notation anglo-saxonne), colorés.
              L'altération de la palette (♯ ♭ ♮) s'applique à la note posée ; le nom
              français reste en info-bulle. */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {NOTES.map((lettre) => (
              <button
                key={lettre}
                onClick={() => (accord ? empiler(lettre) : poserNote(lettre))}
                title={`${NOM_FR[lettre]}${symboleAlt} ${octaveVoix}`}
                style={{
                  minWidth: 62, padding: "16px 10px", borderRadius: 8, cursor: "pointer",
                  border: `1.5px solid ${COULEUR_NOTE[lettre]}`, background: "#fff",
                  color: COULEUR_NOTE[lettre], fontWeight: 700, fontSize: 16,
                  fontFamily: "Georgia, serif",
                }}
              >
                {lettre}{symboleAlt}
              </button>
            ))}
          </div>

          {/* Actions : silence, effacer, écouter, tout effacer */}
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 14, flexWrap: "wrap" }}>
            <button onClick={poserSilence} style={{ ...btn, padding: "8px 14px", fontFamily: "'Times New Roman', serif", fontSize: 15 }} title="Touche R">
              𝄽 Silence
            </button>
            <button onClick={effacerContextuel} style={{ ...btn, padding: "8px 14px", color: "#c0392b" }} title="Retour arrière">
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
          <strong style={{ color: "#777" }}>Clavier :</strong> a…g = poser/corriger la note · Maj+a…g = empiler (accord) · I = insérer avant la note sélectionnée · ← → = naviguer entre les notes · ↑ ↓ = transposer (Maj = octave) · 1–5 = durée · R = silence · Retour arrière = effacer (un accord se dépile hauteur par hauteur).
        </div>

        {/* PianoPlayer monté caché : il ne sert qu'à SONNER (cf. Studio). */}
        <div style={{ height: 0, overflow: "hidden", pointerEvents: "none" }}>
          <PianoPlayer ref={pianoRef} octaves={5} startOctave={1} showLabels={false} />
        </div>
      </div>
    </main>
  );
}

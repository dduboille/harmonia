"use client";

import React, {
  forwardRef, useEffect, useImperativeHandle, useRef, useState,
} from "react";

/**
 * StudioScore.tsx
 * Harmonia — Gravure d'une partition MusicXML avec Verovio.
 *
 * POURQUOI Verovio (et non OSMD) : OSMD embarquait sa propre dépendance de gravure
 * dont les déclarations ambiantes écrasaient la résolution du même paquet côté
 * projet et cassaient le rendu de portées historique. Verovio n'embarque aucune
 * dépendance de ce type : plus de conflit. Il grave en WASM, chargé UNIQUEMENT au
 * navigateur — d'où l'import
 * DYNAMIQUE (jamais au rendu serveur). Le WASM est embarqué dans le module JS :
 * aucun fichier .wasm à servir depuis /public.
 *
 * DEUX RESPONSABILITÉS :
 *  1. Graver à la LARGEUR RÉELLE du conteneur (`pageWidth`), sinon Verovio met en
 *     page pour une largeur par défaut plus grande et la dernière mesure de chaque
 *     ligne déborde, tronquée.
 *  2. Exposer, par `ref`, un REPÈRE DE LECTURE : `surlignerATemps(ms)` colore les
 *     notes qui sonnent à cet instant (table de temps interne de Verovio).
 */

export interface StudioScoreRef {
  /** Surligne les notes sonnant à `ms` (temps ÉCRIT) ; `null` efface tout. */
  surlignerATemps(ms: number | null): void;
  /** Surligne UNE note (toutes les têtes d'un accord) par (onsetMs, midis) ; `null` efface. */
  surlignerSelection(sel: { onsetMs: number; midis: number[] } | null): void;
  /** Surligne un ensemble de notes fautives (rouge = faute, orange = avertissement) ; [] efface. */
  surlignerFautes(fautes: Array<{ onsetMs: number; midis: number[]; severite: "faute" | "avertissement" }>): void;
}

interface Props {
  musicxml: string;
  /** Clic sur une note gravée : remonte (onsetMs, midi) de l'élément cliqué. */
  onSelectNote?: (sel: { onsetMs: number; midi: number }) => void;
  /**
   * Appelé à la FIN de chaque gravure (initiale ET regravures au resize), une fois
   * le SVG en place et la table de temps prête. Sert à re-appliquer les surlignages
   * (sélection, fautes) que la regravure a effacés — cf. HarmoniaEditor.
   */
  onReady?: () => void;
}

// Échelle de gravure (en %). `pageWidth` de Verovio est en unités : la largeur en
// pixels rendue vaut `pageWidth × échelle / 100`. Pour tenir dans `L` pixels, il
// faut donc `pageWidth = L × 100 / échelle`.
const ECHELLE = 40;

const StudioScore = forwardRef<StudioScoreRef, Props>(function StudioScore({ musicxml, onSelectNote, onReady }, ref) {
  const conteneur = useRef<HTMLDivElement>(null);
  // `onReady` gardé dans une ref : l'effet de gravure ne dépend QUE de `musicxml`,
  // un changement d'identité du callback ne doit pas re-déclencher la gravure.
  const onReadyRef = useRef(onReady);
  useEffect(() => { onReadyRef.current = onReady; }, [onReady]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- l'instance Verovio est conservée entre rendus pour le surlignage ; son type vit dans le stub verovio.d.ts, mais on n'a besoin ici que d'une poignée opaque.
  const tkRef = useRef<any>(null);
  const notesJouees = useRef<Element[]>([]);
  const notesSelection = useRef<Element[]>([]);
  const notesFautes = useRef<Element[]>([]);
  const [erreur, setErreur] = useState<string | null>(null);

  // ── Gravure (au montage et à chaque nouveau fichier, + sur redimensionnement) ──
  useEffect(() => {
    let annule = false;
    let tempoRedim: ReturnType<typeof setTimeout> | null = null;

    const graver = () => {
      const tk = tkRef.current;
      const hote = conteneur.current;
      if (!tk || !hote) return;
      const largeur = Math.max(320, hote.clientWidth);
      tk.setOptions({
        scale: ECHELLE,
        adjustPageHeight: true,
        breaks: "auto",
        footer: "none",
        pageWidth: Math.round((largeur * 100) / ECHELLE),
      });
      // Un nouveau rendu recrée le SVG : le surlignage courant est perdu, on l'oublie.
      notesJouees.current = [];
      const pages = tk.getPageCount();
      let svg = "";
      for (let p = 1; p <= pages; p++) svg += tk.renderToSVG(p);
      hote.innerHTML = svg;
      // Gravure terminée : le SVG est en place, l'appelant peut re-surligner.
      onReadyRef.current?.();
    };

    (async () => {
      try {
        const creerModule = (await import("verovio/wasm")).default;
        const { VerovioToolkit } = await import("verovio/esm");
        const module = await creerModule();
        if (annule || !conteneur.current) return;
        const tk = new VerovioToolkit(module);
        tk.loadData(musicxml); // Verovio auto-détecte le MusicXML.
        // La table de temps MIDI ne se construit PAS paresseusement (Verovio 6.2.0 :
        // « Calculation of MIDI timemap failed ») : sans ce renderToMIDI,
        // getMIDIValuesForElement rend {} et TOUT l'appariement — clic, sélection,
        // fautes — est muet. Cf. lib/verovio-appariement.test.ts (le contrat).
        tk.renderToMIDI();
        tkRef.current = tk;
        graver();
      } catch (e) {
        setErreur("Impossible d'afficher cette partition.");
        console.error("Verovio:", e);
      }
    })();

    // Regraver à la nouvelle largeur quand la fenêtre change (débattu : on ne veut
    // pas regraver à chaque pixel).
    const onResize = () => {
      if (tempoRedim) clearTimeout(tempoRedim);
      tempoRedim = setTimeout(() => { if (!annule) graver(); }, 200);
    };
    window.addEventListener("resize", onResize);

    return () => {
      annule = true;
      if (tempoRedim) clearTimeout(tempoRedim);
      window.removeEventListener("resize", onResize);
    };
  }, [musicxml]);

  // ── Repère de lecture ────────────────────────────────────────────────────────
  useImperativeHandle(ref, () => ({
    surlignerATemps(ms: number | null) {
      const tk = tkRef.current;
      const hote = conteneur.current;
      if (!tk || !hote) return;

      // Effacer le surlignage précédent.
      for (const el of notesJouees.current) el.classList.remove("harmonia-joue");
      notesJouees.current = [];
      if (ms === null) return;

      let ids: string[] = [];
      try {
        ids = tk.getElementsAtTime(ms).notes ?? [];
      } catch {
        return; // table de temps indisponible : on n'insiste pas.
      }
      for (const id of ids) {
        // Les identifiants sont uniques dans le SVG ; on reste dans NOTRE conteneur.
        const el = hote.querySelector(`[id="${id}"]`);
        if (el) { el.classList.add("harmonia-joue"); notesJouees.current.push(el); }
      }
    },

    surlignerSelection(sel: { onsetMs: number; midis: number[] } | null) {
      const tk = tkRef.current;
      const hote = conteneur.current;
      if (!tk || !hote) return;
      for (const el of notesSelection.current) el.classList.remove("harmonia-selection");
      notesSelection.current = [];
      if (!sel) return;
      let ids: string[] = [];
      try {
        // +1 ms pour tomber À L'INTÉRIEUR de la note (et non juste avant son attaque).
        ids = tk.getElementsAtTime(sel.onsetMs + 1).notes ?? [];
      } catch { return; }
      for (const id of ids) {
        let midi: number | undefined;
        try { midi = tk.getMIDIValuesForElement(id).pitch; } catch { midi = undefined; }
        if (midi !== undefined && sel.midis.includes(midi)) {
          const el = hote.querySelector(`[id="${id}"]`);
          if (el) { el.classList.add("harmonia-selection"); notesSelection.current.push(el); }
        }
      }
    },

    surlignerFautes(fautes) {
      const tk = tkRef.current;
      const hote = conteneur.current;
      if (!tk || !hote) return;
      for (const el of notesFautes.current) el.classList.remove("harmonia-faute", "harmonia-avert");
      notesFautes.current = [];
      for (const f of fautes) {
        let ids: string[] = [];
        try { ids = tk.getElementsAtTime(f.onsetMs + 1).notes ?? []; } catch { continue; }
        for (const id of ids) {
          let midi: number | undefined;
          try { midi = tk.getMIDIValuesForElement(id).pitch; } catch { midi = undefined; }
          if (midi === undefined || !f.midis.includes(midi)) continue;
          const el = hote.querySelector(`[id="${id}"]`);
          if (el) {
            el.classList.add(f.severite === "faute" ? "harmonia-faute" : "harmonia-avert");
            notesFautes.current.push(el);
          }
        }
      }
    },
  }));

  if (erreur) {
    return <div style={{ color: "#c0392b", fontSize: 13, padding: 16 }}>{erreur}</div>;
  }

  const onClick = (e: React.MouseEvent) => {
    const tk = tkRef.current;
    if (!tk || !onSelectNote) return;
    let el = e.target as Element | null;
    // Remonter jusqu'à l'élément .note porteur d'un id.
    while (el && el !== e.currentTarget) {
      if (el.classList?.contains("note") && el.id) {
        try {
          const v = tk.getMIDIValuesForElement(el.id);
          if (typeof v.time === "number" && typeof v.pitch === "number") {
            onSelectNote({ onsetMs: v.time, midi: v.pitch });
          }
        } catch { /* élément non temporel : on ignore */ }
        return;
      }
      el = el.parentElement;
    }
  };

  return (
    <>
      <style>{`
        .harmonia-joue, .harmonia-joue * { fill: #C62828 !important; }
        .harmonia-avert, .harmonia-avert * { fill: #DD6B20 !important; }
        .harmonia-faute, .harmonia-faute * { fill: #E53E3E !important; }
        /* La sélection prime visuellement : règle placée EN DERNIER pour gagner le
           conflit d'égale spécificité quand une note est à la fois sélectionnée et
           fautive (dernier !important l'emporte). */
        .harmonia-selection, .harmonia-selection * { fill: #5C3D6E !important; }
      `}</style>
      <div ref={conteneur} onClick={onClick} style={{ width: "100%", overflowX: "auto", cursor: "pointer" }} />
    </>
  );
});

export default StudioScore;

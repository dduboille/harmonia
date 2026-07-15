"use client";

import React, {
  forwardRef, useEffect, useImperativeHandle, useRef, useState,
} from "react";

/**
 * StudioScore.tsx
 * Harmonia — Gravure d'une partition MusicXML avec Verovio.
 *
 * POURQUOI Verovio (et non OSMD) : OSMD embarque son propre VexFlow 1.x dont les
 * déclarations ambiantes écrasaient la résolution de « vexflow » côté projet et
 * cassaient VexFlowScore.tsx (VexFlow 5). Verovio n'embarque aucun VexFlow : plus
 * de conflit. Il grave en WASM, chargé UNIQUEMENT au navigateur — d'où l'import
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
  /** Surligne les notes sonnant à `ms` (temps ÉCRIT, sans facteur de vitesse) ; `null` efface tout. */
  surlignerATemps(ms: number | null): void;
}

interface Props {
  musicxml: string;
}

// Échelle de gravure (en %). `pageWidth` de Verovio est en unités : la largeur en
// pixels rendue vaut `pageWidth × échelle / 100`. Pour tenir dans `L` pixels, il
// faut donc `pageWidth = L × 100 / échelle`.
const ECHELLE = 40;

const StudioScore = forwardRef<StudioScoreRef, Props>(function StudioScore({ musicxml }, ref) {
  const conteneur = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- l'instance Verovio est conservée entre rendus pour le surlignage ; son type vit dans le stub verovio.d.ts, mais on n'a besoin ici que d'une poignée opaque.
  const tkRef = useRef<any>(null);
  const notesJouees = useRef<Element[]>([]);
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
    };

    (async () => {
      try {
        const creerModule = (await import("verovio/wasm")).default;
        const { VerovioToolkit } = await import("verovio/esm");
        const module = await creerModule();
        if (annule || !conteneur.current) return;
        const tk = new VerovioToolkit(module);
        tk.loadData(musicxml); // Verovio auto-détecte le MusicXML.
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
  }));

  if (erreur) {
    return <div style={{ color: "#c0392b", fontSize: 13, padding: 16 }}>{erreur}</div>;
  }
  return (
    <>
      {/* Le repère : les notes jouées passent en violet Harmonia. Le `!important` et
          le sélecteur descendant forcent la couleur par-dessus les attributs de
          gravure que Verovio pose sur les glyphes. */}
      <style>{`.harmonia-joue, .harmonia-joue * { fill: #C62828 !important; }`}</style>
      <div ref={conteneur} style={{ width: "100%", overflowX: "auto" }} />
    </>
  );
});

export default StudioScore;

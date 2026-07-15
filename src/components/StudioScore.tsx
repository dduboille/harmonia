"use client";

import React, { useEffect, useRef, useState } from "react";

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
 * Simplification (décision coordinateur) : plus de curseur ni de `ref`. Ce
 * composant ne fait que GRAVER. Le surlignage de la mesure en cours de lecture
 * est piloté ailleurs (panneau d'analyse), par notre propre timing.
 */

interface Props {
  musicxml: string;
}

export default function StudioScore({ musicxml }: Props) {
  const conteneur = useRef<HTMLDivElement>(null);
  const [erreur, setErreur] = useState<string | null>(null);

  useEffect(() => {
    let annule = false;
    (async () => {
      try {
        // Import dynamique : Verovio (WASM) n'existe qu'au navigateur, jamais au SSR.
        const creerModule = (await import("verovio/wasm")).default;
        const { VerovioToolkit } = await import("verovio/esm");
        const module = await creerModule();
        if (annule || !conteneur.current) return;

        const tk = new VerovioToolkit(module);
        tk.setOptions({ scale: 40, adjustPageHeight: true, breaks: "auto", footer: "none" });
        tk.loadData(musicxml); // Verovio auto-détecte le MusicXML.

        const pages = tk.getPageCount();
        let svg = "";
        for (let p = 1; p <= pages; p++) svg += tk.renderToSVG(p);
        if (annule || !conteneur.current) return;
        conteneur.current.innerHTML = svg;
      } catch (e) {
        setErreur("Impossible d'afficher cette partition.");
        console.error("Verovio:", e);
      }
    })();
    return () => {
      annule = true;
    };
  }, [musicxml]);

  if (erreur) {
    return <div style={{ color: "#c0392b", fontSize: 13, padding: 16 }}>{erreur}</div>;
  }
  return <div ref={conteneur} style={{ width: "100%", overflowX: "auto" }} />;
}

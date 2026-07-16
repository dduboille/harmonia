/**
 * Déclarations de types pour Verovio 6.x, qui n'en fournit AUCUN.
 *
 * POURQUOI ici : on isole la surface non typée en un seul endroit plutôt que de
 * semer des `any` dans le composant. On ne décrit que ce que StudioScore.tsx
 * emploie réellement. Verovio grave en WASM ; le module WASM est embarqué dans
 * le JS (aucun fichier .wasm séparé à servir).
 */

declare module "verovio/wasm" {
  /**
   * Handle WASM opaque produit par la factory. Il n'est jamais manipulé
   * directement : seul `VerovioToolkit` l'exploite.
   */
  export type VerovioModule = object;

  /** Charge et instancie le module WASM Verovio. */
  const createVerovioModule: () => Promise<VerovioModule>;
  export default createVerovioModule;
}

declare module "verovio/esm" {
  import type { VerovioModule } from "verovio/wasm";

  export class VerovioToolkit {
    constructor(module: VerovioModule);
    /** Options de gravure (échelle, sauts de ligne, pied de page…). */
    setOptions(options: Record<string, unknown>): void;
    /** Charge des données ; Verovio auto-détecte le MusicXML. Renvoie true si OK. */
    loadData(data: string): boolean;
    /** Nombre de pages après mise en page. */
    getPageCount(): number;
    /** SVG d'une page (numérotation 1-based). */
    renderToSVG(page: number): string;
    /**
     * Éléments (notes…) qui SONNENT à l'instant `millisec`, d'après la table de
     * temps interne de Verovio (calculée sur les tempos du fichier). Sert au
     * surlignage de lecture. Le champ `notes` porte les identifiants SVG des notes.
     */
    getElementsAtTime(millisec: number): { notes?: string[]; page?: number };
    /**
     * Valeurs MIDI d'un élément (note) : instant de déclenchement et hauteur MIDI. Sert à apparier
     * une note gravée avec le modèle (clic, surlignage de sélection).
     */
    getMIDIValuesForElement(xmlId: string): { time?: number; pitch?: number; duration?: number };
  }
}

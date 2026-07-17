/**
 * src/app/[locale]/editeur/page.tsx
 * Page démo de l'éditeur SATB Harmonia
 */

import HarmoniaEditor from "@/components/HarmoniaEditor";
import type { NoteEntry } from "@/components/HarmoniaEditor";

function n(name: NoteEntry["name"], octave: number): NoteEntry {
  return { name, octave };
}

// ── Solution de référence : II–V–I en Do majeur ──
// Recomposée par le moteur d'école partagé (@/lib/voicing-ecole) et VÉRIFIÉE
// contre validateSATB (0 erreur, 0 avertissement noté) : accords complets,
// doublures réglées, sensible et 7e résolues. On peut donc réarmer `solution`.
const SOLUTION_IIVI = [
  { soprano: n("C",5), alto: n("F",4), tenor: n("A",3), bass: n("D",3) }, // Dm7
  { soprano: n("B",4), alto: n("F",4), tenor: n("D",4), bass: n("G",2) }, // G7
  { soprano: n("C",5), alto: n("E",4), tenor: n("B",3), bass: n("C",3) }, // CMaj7
];

// ── Solution : I–IV–V7–I en Do majeur (idem — vérifiée école) ──
const SOLUTION_IFVII = [
  { soprano: n("G",4), alto: n("E",4), tenor: n("C",4), bass: n("C",4) }, // C
  { soprano: n("A",4), alto: n("F",4), tenor: n("C",4), bass: n("F",3) }, // F
  { soprano: n("G",4), alto: n("F",4), tenor: n("B",3), bass: n("G",3) }, // G7
  { soprano: n("G",4), alto: n("E",4), tenor: n("C",4), bass: n("C",4) }, // C
];

export default function EditeurPage() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#f4f1ec",
      padding: "3rem 1rem",
    }}>
      <div style={{ maxWidth:760, margin:"0 auto" }}>
        {/* Header page */}
        <div style={{ marginBottom:"2.5rem" }}>
          <div style={{ fontSize:11, fontWeight:600, letterSpacing:"0.1em", color:"#BA7517", textTransform:"uppercase", marginBottom:8 }}>
            Harmonia · Atelier
          </div>
          <h1 style={{ fontSize:28, fontWeight:500, color:"#1a1a1a", margin:"0 0 8px" }}>
            Éditeur de conduite de voix
          </h1>
          <p style={{ fontSize:14, color:"#888", lineHeight:1.7, maxWidth:520, margin:0 }}>
            Place les notes des 4 voix (Basse, Ténor, Alto, Soprano) sur les portées. 
            L'outil vérifie en temps réel les règles harmoniques — parallèles, espacements, tessitures.
          </p>
        </div>

        {/* Exercice 1 */}
        <div style={{ marginBottom:"2rem" }}>
          <div style={{ fontSize:11, color: "#767676", letterSpacing:"0.08em", marginBottom:12 }}>
            EXERCICE 1 · CONDUITE MINIMALISTE
          </div>
          <HarmoniaEditor
            title="II – V – I en Do majeur"
            subtitle="Conduite de voix minimaliste · Position 7351 · 3 mesures"
            measures={["II (Dm7)", "V (G7)", "I (CMaj7)"]}
            keySignature="C"
            solution={SOLUTION_IIVI}
          />
        </div>

        {/* Exercice 2 */}
        <div style={{ marginBottom:"2rem" }}>
          <div style={{ fontSize:11, color: "#767676", letterSpacing:"0.08em", marginBottom:12 }}>
            EXERCICE 2 · PROGRESSION FONDAMENTALE
          </div>
          <HarmoniaEditor
            title="I – IV – V7 – I en Do majeur"
            subtitle="Cadence parfaite complète · 4 mesures"
            measures={["I (C)", "IV (F)", "V7 (G7)", "I (C)"]}
            keySignature="C"
            solution={SOLUTION_IFVII}
          />
        </div>

        {/* Exercice libre */}
        <div style={{ marginBottom:"2rem" }}>
          <div style={{ fontSize:11, color: "#767676", letterSpacing:"0.08em", marginBottom:12 }}>
            EXERCICE LIBRE
          </div>
          <HarmoniaEditor
            title="Progression libre"
            subtitle="Crée ta propre progression harmonique en 4 voix"
            measures={["I", "?", "?", "I"]}
            keySignature="C"
          />
        </div>
      </div>
    </main>
  );
}

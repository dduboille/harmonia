"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

// ── Data ──────────────────────────────────────────────────────────────────────

const PHILO = [
  {
    title: "Pourquoi les accords bougent",
    desc: "L'harmonie comme mouvement de tensions, pas comme liste de règles. Chaque accord expliqué par son rôle acoustique et psychologique.",
  },
  {
    title: "Écriture réelle à 4 voix",
    desc: "Conduite des voix dès le niveau 1. Validation en temps réel des parallélismes, doublures et résolutions. Ce qui distingue Harmonia des cours d'accords habituels.",
  },
  {
    title: "Analyse du répertoire",
    desc: "Bach, Mozart, Beethoven, Chopin, Debussy — chaque concept illustré par des œuvres réelles. La théorie au service de la musique.",
  },
];

const LEVELS = [
  {
    n: 1,
    title: "Fondements tonals",
    refs: "Dubois · Piston · Gallon",
    goal: "Comprendre la logique tonale, écrire une harmonisation simple correcte, analyser des progressions, entendre les fonctions.",
    target: "Fin de cycle débutant/intermédiaire, entrée DEM",
    modules: [
      "Comprendre le système tonal",
      "Construction des accords",
      "Fonctions harmoniques",
      "Conduite des voix",
      "Harmonisation à 4 voix",
      "Cadences et ponctuation musicale",
      "Accords de septième",
      "Dominantes secondaires",
      "Modulation de base",
      "Analyse harmonique",
    ],
  },
  {
    n: 2,
    title: "Écriture avancée & modulation",
    refs: "Koechlin · Aldwell & Schachter · Schönberg",
    goal: "Maîtriser l'écriture harmonique fluide et mobile. Modulations naturelles, dominantes secondaires, chromatisme.",
    target: "DEM, licence musicologie",
    modules: [
      "Modulations avancées (pivot, enharmonie, modulations éloignées)",
      "Dominantes secondaires complexes (chaînes, tonicisations)",
      "Accords de neuvième (préparation, résolution)",
      "Accords altérés (sixte augmentée, napolitain, dominante altérée)",
      "Chromatisme (lignes, enrichissement, ambiguïté)",
      "Écriture chorale avancée",
      "Analyse du répertoire (Bach, Mozart, Beethoven, Schumann, Chopin)",
      "Harmonisation complexe (basses données, soprano donné)",
    ],
  },
  {
    n: 3,
    title: "Analyse structurelle",
    refs: "Schönberg · Riemann · Aldwell",
    goal: "Comprendre pourquoi une œuvre tient. Hiérarchies tonales, formes musicales, pensée compositionnelle.",
    target: "Licence, master, entrée CNSM",
    modules: [
      "Analyse fonctionnelle profonde (hiérarchies, régions tonales)",
      "Formes musicales (phrase, période, forme sonate, développement)",
      "Structure des modulations (architecture tonale, parcours harmonique)",
      "Réduction schenkérienne simplifiée",
      "Continuité harmonique (prolongation, tension longue)",
      "Analyse comparative (Bach → Wagner → Debussy → Ravel)",
      "Harmonie et orchestration (densité, doublures, couleur)",
    ],
  },
  {
    n: 4,
    title: "Harmonie élargie & modernité",
    refs: "Koechlin · Levine · Messiaen",
    goal: "Dépasser la tonalité classique. Modalité, impressionnisme, jazz, écriture contemporaine.",
    target: "Master, formation continue",
    modules: [
      "Modalité (modes, centres flottants, couleur modale)",
      "Harmonie impressionniste (parallélismes, planing, accords non fonctionnels)",
      "Polytonalité (superpositions, ambiguïté)",
      "Harmonie quartale (structures modernes)",
      "Extensions jazz (9e, 11e, 13e, substitutions)",
      "Dominantes modernes (tritonique, altérations)",
      "Écriture contemporaine tonale élargie",
    ],
  },
  {
    n: 5,
    title: "Spécialisations",
    refs: "5 parcours au choix",
    goal: "Approfondir un domaine spécifique selon votre projet musical ou professionnel.",
    target: "Tous niveaux avancés",
    modules: [
      "Écriture classique (fugue, choral, style Bach)",
      "Composition pour l'image (tension, harmonie émotionnelle, textures)",
      "Jazz avancé (reharmonisation, modal interchange)",
      "Harmonie impressionniste (Debussy, Ravel, orchestration couleur)",
      "Analyse avancée (Schenker, analyse motivique)",
    ],
  },
];

const REFS_DATA = [
  {
    author: "Théodore Dubois",
    title: "Traité d'harmonie",
    usage: "Structure pédagogique du niveau 1 — règles classiques, progression rigoureuse",
  },
  {
    author: "Walter Piston",
    title: "Harmony",
    usage: "Clarté moderne — le meilleur compromis entre rigueur et lisibilité",
  },
  {
    author: "Arnold Schönberg",
    title: "Theory of Harmony",
    usage: "Logique profonde — pourquoi les tensions existent, pensée compositionnelle",
  },
  {
    author: "Aldwell & Schachter",
    title: "Harmony and Voice Leading",
    usage: "Analyse et voice leading — référence universitaire moderne",
  },
  {
    author: "Noël Gallon",
    title: "Précis des règles du contrepoint",
    usage: "Conduite des voix — discipline des lignes, indépendance mélodique",
  },
  {
    author: "Mark Levine",
    title: "The Jazz Theory Book",
    usage: "Harmonie élargie — extensions, substitutions, pensée modale",
  },
];

const COMPARE_ROWS = [
  { label: "Contenu", internet: "Listes d'accords", harmonia: "Logique harmonique profonde" },
  { label: "Références", internet: "Aucune", harmonia: "6 grands traités" },
  { label: "Exercices", internet: "Quiz simples", harmonia: "SATB temps réel, analyse, composition" },
  { label: "Analyse", internet: "Absente", harmonia: "Répertoire réel (Bach → Ravel)" },
  { label: "Évaluation", internet: "Score automatique", harmonia: "Correction professeur" },
  { label: "Écriture", internet: "Accords isolés", harmonia: "Conduite des voix intégrée" },
];

const ETABLISSEMENTS = [
  {
    title: "Outil pédagogique complémentaire",
    desc: "Utilisez Harmonia comme support de cours, d'exercices et de devoirs maison. Vos élèves travaillent à leur rythme, vous suivez leur progression.",
  },
  {
    title: "Classe virtuelle",
    desc: "Créez votre classe, assignez des exercices spécifiques, corrigez les travaux soumis, suivez les résultats en temps réel.",
  },
  {
    title: "Cursus intégré",
    desc: "Adoptez le cursus complet comme programme officiel de formation musicale — 5 niveaux, du débutant à l'entrée CNSM.",
  },
];

const PRICING = [
  { label: "Classe", sub: "Jusqu'à 30 élèves", price: "199€/an", highlight: false },
  { label: "Conservatoire", sub: "Jusqu'à 100 élèves", price: "499€/an", highlight: true },
  { label: "Grand établissement", sub: "Élèves illimités", price: "Sur devis", highlight: false },
];

// ── Shared styles ─────────────────────────────────────────────────────────────

const INPUT: React.CSSProperties = {
  width: "100%",
  padding: "10px 14px",
  borderRadius: 6,
  border: "0.5px solid #d0c8bd",
  fontSize: 14,
  fontFamily: "system-ui, sans-serif",
  color: "#1a1a1a",
  background: "#fff",
  boxSizing: "border-box",
};

const LABEL: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  color: "#888",
  fontFamily: "system-ui, sans-serif",
  display: "block",
  marginBottom: 6,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
};

// ── LevelCard ─────────────────────────────────────────────────────────────────

function LevelCard({
  level,
  open,
  onToggle,
}: {
  level: (typeof LEVELS)[0];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div style={{ border: "0.5px solid #e8e3db", borderRadius: 8, overflow: "hidden" }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          background: open ? "#1a1a1a" : "#fff",
          border: "none",
          padding: "24px 28px",
          textAlign: "left" as const,
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 6 }}>
            <span
              style={{
                fontFamily: "monospace",
                fontSize: 11,
                fontWeight: 700,
                color: open ? "#E9C97E" : "#BA7517",
                letterSpacing: "0.12em",
              }}
            >
              NIVEAU {level.n}
            </span>
            <span
              style={{
                fontSize: 11,
                color: open ? "rgba(255,255,255,0.45)" : "#bbb",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              {level.refs}
            </span>
          </div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 400,
              color: open ? "#fff" : "#1a1a1a",
              fontFamily: "Georgia, 'Times New Roman', serif",
              lineHeight: 1.3,
            }}
          >
            {level.title}
          </div>
        </div>
        <span
          style={{
            fontSize: 16,
            color: open ? "#E9C97E" : "#BA7517",
            transition: "transform .2s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            display: "inline-block",
            flexShrink: 0,
          }}
        >
          ▼
        </span>
      </button>

      {open && (
        <div style={{ padding: "28px", borderTop: "0.5px solid #e8e3db", background: "#faf8f4" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 28 }}
          >
            <div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: "#BA7517",
                  letterSpacing: "0.12em",
                  marginBottom: 8,
                  fontFamily: "system-ui",
                }}
              >
                OBJECTIF
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "#444",
                  lineHeight: 1.7,
                  margin: 0,
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {level.goal}
              </p>
            </div>
            <div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: "#BA7517",
                  letterSpacing: "0.12em",
                  marginBottom: 8,
                  fontFamily: "system-ui",
                }}
              >
                NIVEAU VISÉ
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "#444",
                  lineHeight: 1.7,
                  margin: 0,
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {level.target}
              </p>
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: "#BA7517",
                letterSpacing: "0.12em",
                marginBottom: 14,
                fontFamily: "system-ui",
              }}
            >
              MODULES ({level.modules.length})
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: 8,
              }}
            >
              {level.modules.map((m, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    fontSize: 13,
                    color: "#555",
                    fontFamily: "system-ui, sans-serif",
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ color: "#BA7517", flexShrink: 0, fontWeight: 700, marginTop: 1 }}>
                    →
                  </span>
                  {m}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function CursusPage() {
  const params = useParams();
  const locale = (params?.locale as string) ?? "fr";

  const [openLevels, setOpenLevels] = useState<Set<number>>(new Set());
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    email: "",
    etablissement: "",
    ville: "",
    pays: "",
    fonction: "Directeur",
    nbEleves: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  function toggleLevel(n: number) {
    setOpenLevels(prev => {
      const s = new Set(prev);
      s.has(n) ? s.delete(n) : s.add(n);
      return s;
    });
  }

  function set(k: keyof typeof form) {
    return (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => setForm(prev => ({ ...prev, [k]: e.target.value }));
  }

  async function handleSubmit() {
    if (!form.prenom || !form.nom || !form.email || !form.etablissement || !form.ville) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact-cursus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        background: "#faf8f4",
        color: "#1a1a1a",
        overflowX: "hidden",
      }}
    >
      {/* ── 1. Hero ──────────────────────────────────────────────── */}
      <section style={{ padding: "100px 2rem 80px", textAlign: "center" as const }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#FAEEDA",
              border: "0.5px solid #F6AD55",
              borderRadius: 20,
              padding: "5px 14px",
              fontSize: 12,
              fontWeight: 500,
              color: "#BA7517",
              fontFamily: "system-ui, sans-serif",
              marginBottom: 32,
              letterSpacing: "0.04em",
            }}
          >
            <span>𝄞</span> Cursus Conservatoire · Niveaux 1–5
          </div>

          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              margin: "0 0 24px",
              color: "#1a1a1a",
            }}
          >
            Un cursus d'harmonie de niveau
            <br />
            <em style={{ color: "#BA7517", fontStyle: "italic" }}>conservatoire</em>{" "}
            — numérique et interactif
          </h1>

          <p
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "#555",
              lineHeight: 1.75,
              maxWidth: 600,
              margin: "0 auto 40px",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 400,
            }}
          >
            Cinq niveaux progressifs, des fondements tonals à l'harmonie contemporaine.
            Inspiré des grands traités (Dubois, Piston, Schönberg, Aldwell, Gallon, Fux).
          </p>

          <div
            style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" as const }}
          >
            <a
              href="#contact"
              style={{
                padding: "14px 32px",
                borderRadius: 4,
                background: "#1a1a1a",
                color: "#fff",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
                fontFamily: "system-ui, sans-serif",
                letterSpacing: "0.02em",
                border: "1px solid #1a1a1a",
              }}
            >
              Demander un accès établissement
            </a>
            <a
              href="#programme"
              style={{
                padding: "14px 32px",
                borderRadius: 4,
                background: "transparent",
                color: "#1a1a1a",
                textDecoration: "none",
                fontSize: 15,
                fontFamily: "system-ui, sans-serif",
                border: "1px solid #c8c4bc",
              }}
            >
              Voir le programme complet ↓
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. Philosophie pédagogique ───────────────────────────── */}
      <section style={{ padding: "80px 2rem", borderTop: "0.5px solid #e8e3db", background: "#fff" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 56 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.15em",
                color: "#BA7517",
                textTransform: "uppercase" as const,
                fontFamily: "system-ui",
                marginBottom: 12,
              }}
            >
              Philosophie pédagogique
            </div>
            <h2
              style={{
                fontSize: "clamp(26px, 3.5vw, 38px)",
                fontWeight: 400,
                margin: 0,
                letterSpacing: "-0.01em",
              }}
            >
              Former un musicien, pas un empileur d'accords
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
            {PHILO.map((p, i) => (
              <div
                key={p.title}
                style={{
                  padding: "36px 32px",
                  background: i === 1 ? "#f4f1ec" : "#fff",
                  border: "0.5px solid #e8e3db",
                  borderRadius: i === 0 ? "8px 0 0 8px" : i === 2 ? "0 8px 8px 0" : 0,
                }}
              >
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    margin: "0 0 14px",
                    lineHeight: 1.3,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "#666",
                    lineHeight: 1.75,
                    margin: 0,
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Les 5 niveaux ─────────────────────────────────────── */}
      <section id="programme" style={{ padding: "100px 2rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 56 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.15em",
                color: "#BA7517",
                textTransform: "uppercase" as const,
                fontFamily: "system-ui",
                marginBottom: 12,
              }}
            >
              Programme complet
            </div>
            <h2
              style={{
                fontSize: "clamp(26px, 3.5vw, 38px)",
                fontWeight: 400,
                margin: 0,
                letterSpacing: "-0.01em",
              }}
            >
              5 niveaux progressifs
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 8 }}>
            {LEVELS.map(level => (
              <LevelCard
                key={level.n}
                level={level}
                open={openLevels.has(level.n)}
                onToggle={() => toggleLevel(level.n)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Références pédagogiques ───────────────────────────── */}
      <section
        style={{
          padding: "80px 2rem",
          background: "#fff",
          borderTop: "0.5px solid #e8e3db",
          borderBottom: "0.5px solid #e8e3db",
        }}
      >
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 56 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.15em",
                color: "#BA7517",
                textTransform: "uppercase" as const,
                fontFamily: "system-ui",
                marginBottom: 12,
              }}
            >
              Fondements académiques
            </div>
            <h2
              style={{
                fontSize: "clamp(26px, 3.5vw, 38px)",
                fontWeight: 400,
                margin: 0,
                letterSpacing: "-0.01em",
              }}
            >
              Fondé sur les grands traités
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {REFS_DATA.map(ref => (
              <div
                key={ref.author}
                style={{
                  padding: "28px",
                  border: "0.5px solid #e8e3db",
                  borderRadius: 8,
                  background: "#faf8f4",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#BA7517",
                    fontFamily: "system-ui",
                    marginBottom: 6,
                    letterSpacing: "0.04em",
                  }}
                >
                  {ref.author}
                </div>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    margin: "0 0 10px",
                    fontFamily: "Georgia, serif",
                    fontStyle: "italic",
                  }}
                >
                  {ref.title}
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "#666",
                    lineHeight: 1.65,
                    margin: 0,
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {ref.usage}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Comparatif ────────────────────────────────────────── */}
      <section style={{ padding: "100px 2rem" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 56 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.15em",
                color: "#BA7517",
                textTransform: "uppercase" as const,
                fontFamily: "system-ui",
                marginBottom: 12,
              }}
            >
              Positionnement
            </div>
            <h2
              style={{
                fontSize: "clamp(26px, 3.5vw, 38px)",
                fontWeight: 400,
                margin: 0,
                letterSpacing: "-0.01em",
              }}
            >
              Au-delà du cours d'accords habituel
            </h2>
          </div>
          <div style={{ border: "0.5px solid #e8e3db", borderRadius: 8, overflow: "hidden" }}>
            <div
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "#1a1a1a" }}
            >
              <div
                style={{
                  padding: "16px 20px",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#555",
                  fontFamily: "system-ui",
                  letterSpacing: "0.1em",
                }}
              />
              <div
                style={{
                  padding: "16px 20px",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#777",
                  fontFamily: "system-ui",
                  letterSpacing: "0.1em",
                  borderLeft: "0.5px solid #333",
                }}
              >
                COURS INTERNET
              </div>
              <div
                style={{
                  padding: "16px 20px",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#E9C97E",
                  fontFamily: "system-ui",
                  letterSpacing: "0.1em",
                  borderLeft: "0.5px solid #333",
                }}
              >
                HARMONIA CURSUS
              </div>
            </div>
            {COMPARE_ROWS.map((row, i) => (
              <div
                key={row.label}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  borderTop: "0.5px solid #e8e3db",
                  background: i % 2 === 0 ? "#fff" : "#faf8f4",
                }}
              >
                <div
                  style={{
                    padding: "16px 20px",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#444",
                    fontFamily: "system-ui",
                  }}
                >
                  {row.label}
                </div>
                <div
                  style={{
                    padding: "16px 20px",
                    fontSize: 13,
                    color: "#aaa",
                    fontFamily: "system-ui, sans-serif",
                    borderLeft: "0.5px solid #e8e3db",
                  }}
                >
                  {row.internet}
                </div>
                <div
                  style={{
                    padding: "16px 20px",
                    fontSize: 13,
                    color: "#1a1a1a",
                    fontFamily: "system-ui, sans-serif",
                    fontWeight: 500,
                    borderLeft: "0.5px solid #e8e3db",
                  }}
                >
                  <span style={{ color: "#BA7517", marginRight: 6 }}>✓</span>
                  {row.harmonia}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Pour les établissements ───────────────────────────── */}
      <section
        style={{
          padding: "80px 2rem",
          background: "#fff",
          borderTop: "0.5px solid #e8e3db",
          borderBottom: "0.5px solid #e8e3db",
        }}
      >
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 56 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.15em",
                color: "#BA7517",
                textTransform: "uppercase" as const,
                fontFamily: "system-ui",
                marginBottom: 12,
              }}
            >
              Intégration pédagogique
            </div>
            <h2
              style={{
                fontSize: "clamp(26px, 3.5vw, 38px)",
                fontWeight: 400,
                margin: 0,
                letterSpacing: "-0.01em",
              }}
            >
              Intégrez Harmonia dans votre enseignement
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {ETABLISSEMENTS.map((e, i) => (
              <div
                key={e.title}
                style={{
                  padding: "32px 28px",
                  border: "0.5px solid #e8e3db",
                  borderRadius: 8,
                  background: "#faf8f4",
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#BA7517",
                    fontFamily: "monospace",
                    marginBottom: 12,
                    letterSpacing: "0.06em",
                  }}
                >
                  0{i + 1}
                </div>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    margin: "0 0 12px",
                    lineHeight: 1.3,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {e.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "#666",
                    lineHeight: 1.7,
                    margin: 0,
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {e.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Tarifs ────────────────────────────────────────────── */}
      <section style={{ padding: "100px 2rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 56 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.15em",
                color: "#BA7517",
                textTransform: "uppercase" as const,
                fontFamily: "system-ui",
                marginBottom: 12,
              }}
            >
              Tarifs établissement
            </div>
            <h2
              style={{
                fontSize: "clamp(26px, 3.5vw, 38px)",
                fontWeight: 400,
                margin: "0 0 12px",
                letterSpacing: "-0.01em",
              }}
            >
              Un investissement pédagogique
            </h2>
            <p
              style={{ fontSize: 14, color: "#888", margin: 0, fontFamily: "system-ui, sans-serif" }}
            >
              1 mois d'essai gratuit sur demande
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
              alignItems: "start",
              marginBottom: 24,
            }}
          >
            {PRICING.map(plan => (
              <div
                key={plan.label}
                style={{
                  padding: "36px 28px",
                  borderRadius: 8,
                  background: plan.highlight ? "#1a1a1a" : "#fff",
                  border: plan.highlight ? "none" : "0.5px solid #e8e3db",
                  textAlign: "center" as const,
                }}
              >
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    color: plan.highlight ? "#fff" : "#1a1a1a",
                    marginBottom: 6,
                    fontFamily: "Georgia, serif",
                  }}
                >
                  {plan.label}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: plan.highlight ? "#666" : "#aaa",
                    marginBottom: 24,
                    fontFamily: "system-ui",
                  }}
                >
                  {plan.sub}
                </div>
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: 400,
                    color: plan.highlight ? "#E9C97E" : "#BA7517",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {plan.price}
                </div>
              </div>
            ))}
          </div>
          <p
            style={{
              textAlign: "center" as const,
              fontSize: 13,
              color: "#888",
              fontFamily: "system-ui, sans-serif",
              margin: 0,
            }}
          >
            Chaque élève accède à tout Harmonia Pro + le cursus conservatoire complet
          </p>
        </div>
      </section>

      {/* ── 8. Formulaire ────────────────────────────────────────── */}
      <section
        id="contact"
        style={{ padding: "100px 2rem", background: "#fff", borderTop: "0.5px solid #e8e3db" }}
      >
        <div style={{ maxWidth: 620, margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.15em",
                color: "#BA7517",
                textTransform: "uppercase" as const,
                fontFamily: "system-ui",
                marginBottom: 12,
              }}
            >
              Accès établissement
            </div>
            <h2
              style={{
                fontSize: "clamp(24px, 3vw, 36px)",
                fontWeight: 400,
                margin: "0 0 12px",
                letterSpacing: "-0.01em",
              }}
            >
              Demander un accès établissement
            </h2>
            <p
              style={{ fontSize: 14, color: "#888", margin: 0, fontFamily: "system-ui, sans-serif" }}
            >
              Réponse sous 48 h ouvrées · Sans engagement
            </p>
          </div>

          {status === "ok" ? (
            <div style={{ textAlign: "center" as const, padding: "48px 0" }}>
              <div style={{ fontSize: 40, marginBottom: 20, color: "#BA7517" }}>✓</div>
              <h3 style={{ fontSize: 22, fontWeight: 400, color: "#1a1a1a", marginBottom: 10 }}>
                Demande envoyée
              </h3>
              <p
                style={{ fontSize: 15, color: "#666", fontFamily: "system-ui, sans-serif" }}
              >
                Nous vous répondrons sous 48 h ouvrées à {form.email}.
              </p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column" as const, gap: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label style={LABEL}>Prénom *</label>
                  <input
                    value={form.prenom}
                    onChange={set("prenom")}
                    style={INPUT}
                    placeholder="Sophie"
                  />
                </div>
                <div>
                  <label style={LABEL}>Nom *</label>
                  <input
                    value={form.nom}
                    onChange={set("nom")}
                    style={INPUT}
                    placeholder="Martin"
                  />
                </div>
              </div>
              <div>
                <label style={LABEL}>Email *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  style={INPUT}
                  placeholder="s.martin@conservatoire.fr"
                />
              </div>
              <div>
                <label style={LABEL}>Établissement *</label>
                <input
                  value={form.etablissement}
                  onChange={set("etablissement")}
                  style={INPUT}
                  placeholder="Conservatoire de Lyon"
                />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label style={LABEL}>Ville *</label>
                  <input
                    value={form.ville}
                    onChange={set("ville")}
                    style={INPUT}
                    placeholder="Lyon"
                  />
                </div>
                <div>
                  <label style={LABEL}>Pays</label>
                  <input
                    value={form.pays}
                    onChange={set("pays")}
                    style={INPUT}
                    placeholder="France"
                  />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label style={LABEL}>Fonction</label>
                  <select value={form.fonction} onChange={set("fonction")} style={INPUT}>
                    <option value="Directeur">Directeur</option>
                    <option value="Professeur">Professeur</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label style={LABEL}>Nombre d'élèves concernés</label>
                  <input
                    type="number"
                    value={form.nbEleves}
                    onChange={set("nbEleves")}
                    style={INPUT}
                    placeholder="45"
                  />
                </div>
              </div>
              <div>
                <label style={LABEL}>Message (optionnel)</label>
                <textarea
                  value={form.message}
                  onChange={set("message")}
                  rows={4}
                  style={{ ...INPUT, resize: "vertical" as const }}
                  placeholder="Décrivez votre projet pédagogique..."
                />
              </div>

              {status === "error" && (
                <p
                  style={{
                    color: "#dc2626",
                    fontSize: 13,
                    fontFamily: "system-ui, sans-serif",
                    margin: 0,
                  }}
                >
                  Une erreur est survenue. Réessayez ou écrivez à contact@getharmonia.app
                </p>
              )}

              <button
                onClick={handleSubmit}
                disabled={status === "loading"}
                style={{
                  padding: "14px 32px",
                  borderRadius: 4,
                  background: "#1a1a1a",
                  color: "#fff",
                  border: "none",
                  cursor: status === "loading" ? "wait" : "pointer",
                  fontSize: 15,
                  fontWeight: 500,
                  fontFamily: "system-ui, sans-serif",
                  opacity: status === "loading" ? 0.6 : 1,
                  alignSelf: "flex-start",
                  letterSpacing: "0.02em",
                }}
              >
                {status === "loading" ? "Envoi en cours…" : "Envoyer la demande →"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── 9. Footer ────────────────────────────────────────────── */}
      <footer style={{ padding: "40px 2rem", background: "#111", borderTop: "0.5px solid #222" }}>
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap" as const,
            gap: 16,
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>
            Harmonia<span style={{ color: "#BA7517" }}>.</span>
          </div>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" as const }}>
            {[
              { label: "Cours", href: `/${locale}/cours` },
              { label: "Atelier", href: `/${locale}/atelier` },
              { label: "Tonalités", href: `/${locale}/tonalites` },
              { label: "Cursus", href: `/${locale}/cursus` },
              { label: "Confidentialité", href: `/${locale}/confidentialite` },
              { label: "CGU", href: `/${locale}/conditions` },
            ].map(link => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontSize: 13,
                  color: "#555",
                  textDecoration: "none",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div style={{ fontSize: 12, color: "#333", fontFamily: "system-ui, sans-serif" }}>
            © 2026 Harmonia · All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

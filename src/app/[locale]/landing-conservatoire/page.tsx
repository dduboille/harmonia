"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

// ─── Palette ────────────────────────────────────────────────────────────────
const C = {
  bg:      "#faf8f4",
  dark:    "#1a1a1a",
  purple:  "#5C3D6E",
  gold:    "#BA7517",
  goldBg:  "#FDF3E3",
  muted:   "#888",
  border:  "#e8e3db",
  white:   "#fff",
};

// ─── Données ────────────────────────────────────────────────────────────────

const STATS = [
  { n: "9",    label: "Cours structurés" },
  { n: "5",    label: "Niveaux DEM–DNSPM" },
  { n: "6",    label: "Langues disponibles" },
  { n: "200+", label: "Exercices & quiz" },
];

const ATOUTS = [
  {
    icon: "♩",
    titre: "Conforme aux référentiels",
    corps: "Programme aligné sur les cycles du Ministère de la Culture. Du déchiffrage au contrepoint, chaque notion est contextualisée dans la pédagogie française.",
  },
  {
    icon: "✎",
    titre: "Références académiques",
    corps: "Chaque leçon cite Dubois, Piston, Schönberg, Aldwell, Gallon ou Levine. Vos élèves retrouvent les mêmes traités qu'en cours — avec des exemples interactifs.",
  },
  {
    icon: "⌂",
    titre: "Outil pour les équipes",
    corps: "Interface enseignant, suivi par élève, 6 langues pour les classes internationales. Déploiement institution en moins de 48 heures.",
  },
];

const NIVEAUX = [
  { n: "1", titre: "Fondements", detail: "Gamme, degrés, intervalles, triades" },
  { n: "2", titre: "Accords",    detail: "Triades, tétrades, renversements" },
  { n: "3", titre: "Harmonie fonctionnelle", detail: "Fonctions, cadences, progressions" },
  { n: "4", titre: "Cadences & forme", detail: "Cadences, structure de la phrase musicale" },
  { n: "5", titre: "Modes & modulation", detail: "Emprunts, pivot, chromatisme avancé" },
];

const REFS = [
  { auteur: "Théodore Dubois",   ouvrage: "Traité d'Harmonie",             annee: "1901" },
  { auteur: "Walter Piston",     ouvrage: "Harmony",                       annee: "1941" },
  { auteur: "Arnold Schönberg",  ouvrage: "Harmonielehre",                  annee: "1911" },
  { auteur: "Aldwell & Schachter", ouvrage: "Harmony and Voice Leading",   annee: "2003" },
  { auteur: "Jean Gallon",       ouvrage: "Précis d'Harmonie",              annee: "1947" },
  { auteur: "Mark Levine",       ouvrage: "The Jazz Theory Book",           annee: "1995" },
];

const ETABLISSEMENTS = [
  {
    type: "Conservatoire à rayonnement régional",
    desc: "Accès complet pour tous vos élèves et professeurs, tableau de bord pédagogique, intégration au programme de cycle.",
    prix: "À partir de 499 € / an",
  },
  {
    type: "École de musique agréée",
    desc: "Solution souple pour les établissements de toute taille. Déploiement rapide, formation incluse pour l'équipe enseignante.",
    prix: "À partir de 199 € / an par classe",
  },
  {
    type: "Grand établissement & université",
    desc: "Déploiement sur mesure, SSO, API, facturation centralisée. Accompagnement dédié.",
    prix: "Sur devis",
  },
];

const TARIFS = [
  {
    nom: "Classe",
    prix: "199 €",
    periode: "/ an",
    desc: "1 classe, accès illimité aux 9 cours, quiz et exercices.",
    cta: "Demander un accès",
    highlight: false,
  },
  {
    nom: "Conservatoire",
    prix: "499 €",
    periode: "/ an",
    desc: "Établissement complet. Tableau de bord, tous niveaux, support prioritaire.",
    cta: "Contacter l'équipe",
    highlight: true,
  },
  {
    nom: "Grand établissement",
    prix: "Sur devis",
    periode: "",
    desc: "Université, grand conservatoire. SSO, API, facturation centralisée.",
    cta: "Nous écrire",
    highlight: false,
  },
];

// ─── Composant ───────────────────────────────────────────────────────────────

export default function LandingConservatoirePage() {
  const params  = useParams();
  const locale  = (params?.locale as string) ?? "fr";

  const [form, setForm]     = useState({ prenom: "", nom: "", email: "", etablissement: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [k]: e.target.value }));

  async function handleSubmit() {
    if (!form.prenom || !form.nom || !form.email || !form.etablissement) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact-cursus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, ville: "-", fonction: "Directeur" }),
      });
      setStatus(res.ok ? "ok" : "error");
    } catch { setStatus("error"); }
  }

  const LABEL: React.CSSProperties = {
    fontSize: 11, fontWeight: 600, color: C.muted,
    fontFamily: "system-ui, sans-serif",
    display: "block", marginBottom: 6,
    letterSpacing: "0.08em", textTransform: "uppercase",
  };
  const INPUT: React.CSSProperties = {
    width: "100%", padding: "10px 14px", borderRadius: 6,
    border: `0.5px solid ${C.border}`, fontSize: 14,
    fontFamily: "system-ui, sans-serif", color: C.dark,
    background: C.white, boxSizing: "border-box",
  };

  return (
    <div style={{ background: C.bg, fontFamily: "Georgia, 'Times New Roman', serif" }}>

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section style={{
        background: C.dark, color: C.white,
        padding: "100px 2rem 80px",
        textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        {/* Badge */}
        <div style={{
          display: "inline-block",
          border: `0.5px solid ${C.gold}`,
          color: C.gold, fontSize: 11, fontWeight: 600,
          letterSpacing: "0.12em", textTransform: "uppercase",
          padding: "5px 16px", borderRadius: 20,
          fontFamily: "system-ui, sans-serif",
          marginBottom: 32,
        }}>
          Conservatoires · Écoles de musique · Universités
        </div>

        <h1 style={{
          fontSize: "clamp(2.2rem, 5vw, 4rem)",
          fontWeight: 400, lineHeight: 1.15,
          letterSpacing: "-0.02em", margin: "0 auto 24px",
          maxWidth: 720,
        }}>
          La théorie musicale pensée<br />
          <span style={{ color: C.gold }}>pour les conservatoires</span>
        </h1>

        <p style={{
          fontSize: "clamp(1rem, 2vw, 1.2rem)",
          color: "rgba(255,255,255,0.72)", lineHeight: 1.8,
          maxWidth: 580, margin: "0 auto 44px",
          fontFamily: "system-ui, sans-serif",
        }}>
          9 cours interactifs alignés sur les programmes de cycle — du déchiffrage
          au contrepoint — avec les références académiques que vos élèves connaissent déjà.
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="#contact"
            style={{
              background: C.gold, color: C.dark,
              padding: "14px 32px", borderRadius: 30,
              fontFamily: "system-ui, sans-serif",
              fontWeight: 700, fontSize: 14,
              textDecoration: "none", letterSpacing: "0.04em",
            }}
          >
            Demander un accès établissement
          </a>
          <Link
            href={`/${locale}/cursus`}
            style={{
              border: `0.5px solid rgba(255,255,255,0.35)`,
              color: C.white, padding: "14px 32px", borderRadius: 30,
              fontFamily: "system-ui, sans-serif",
              fontWeight: 600, fontSize: 14, textDecoration: "none",
            }}
          >
            Voir le programme complet
          </Link>
        </div>
      </section>

      {/* ══ STATS ═════════════════════════════════════════════════════════════ */}
      <section style={{
        background: C.purple, padding: "40px 2rem",
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
        gap: 1, maxWidth: "100%",
      }}>
        {STATS.map((s) => (
          <div key={s.label} style={{
            textAlign: "center", padding: "24px 16px",
            background: "rgba(255,255,255,0.05)",
          }}>
            <div style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, color: C.gold, lineHeight: 1 }}>
              {s.n}
            </div>
            <div style={{
              fontSize: 12, color: "rgba(255,255,255,0.7)",
              fontFamily: "system-ui, sans-serif", marginTop: 8,
              fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase",
            }}>
              {s.label}
            </div>
          </div>
        ))}
      </section>

      {/* ══ ATOUTS ════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "80px 2rem", maxWidth: 1100, margin: "0 auto" }}>
        <p style={{
          fontSize: 11, fontWeight: 700, color: C.gold,
          letterSpacing: "0.12em", textTransform: "uppercase",
          fontFamily: "system-ui, sans-serif", marginBottom: 16,
          textAlign: "center",
        }}>
          Pourquoi Harmonia
        </p>
        <h2 style={{
          fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400,
          textAlign: "center", color: C.dark,
          margin: "0 auto 60px", maxWidth: 600, lineHeight: 1.3,
          letterSpacing: "-0.01em",
        }}>
          Conçu avec les exigences pédagogiques des conservatoires
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
          {ATOUTS.map((a) => (
            <div key={a.titre} style={{
              background: C.white, borderRadius: 12,
              border: `0.5px solid ${C.border}`, padding: "36px 32px",
            }}>
              <div style={{ fontSize: 28, marginBottom: 16 }}>{a.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 400, color: C.dark, margin: "0 0 12px", lineHeight: 1.3 }}>
                {a.titre}
              </h3>
              <p style={{
                fontSize: 14, color: "#555", lineHeight: 1.8,
                fontFamily: "system-ui, sans-serif", margin: 0,
              }}>
                {a.corps}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ PROGRAMME ═════════════════════════════════════════════════════════ */}
      <section style={{ background: C.dark, padding: "80px 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{
            fontSize: 11, fontWeight: 700, color: C.gold,
            letterSpacing: "0.12em", textTransform: "uppercase",
            fontFamily: "system-ui, sans-serif", marginBottom: 16, textAlign: "center",
          }}>
            Programme
          </p>
          <h2 style={{
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400,
            color: C.white, textAlign: "center",
            margin: "0 auto 48px", letterSpacing: "-0.01em",
          }}>
            5 niveaux, du cycle 1 au cycle 3
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {NIVEAUX.map((nv, i) => (
              <div key={nv.n} style={{
                display: "flex", alignItems: "center", gap: 24,
                background: "rgba(255,255,255,0.04)",
                border: "0.5px solid rgba(255,255,255,0.08)",
                borderRadius: 10, padding: "20px 28px",
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%",
                  border: `0.5px solid ${C.gold}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 14, color: C.gold, fontWeight: 600, flexShrink: 0,
                  fontFamily: "system-ui, sans-serif",
                }}>
                  {nv.n}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 16, fontWeight: 400, color: C.white, marginBottom: 4 }}>
                    {nv.titre}
                  </div>
                  <div style={{
                    fontSize: 13, color: "rgba(255,255,255,0.5)",
                    fontFamily: "system-ui, sans-serif",
                  }}>
                    {nv.detail}
                  </div>
                </div>
                <Link
                  href={`/${locale}/cursus`}
                  style={{
                    fontSize: 12, color: C.gold, textDecoration: "none",
                    fontFamily: "system-ui, sans-serif", flexShrink: 0,
                  }}
                >
                  Détail →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ RÉFÉRENCES ════════════════════════════════════════════════════════ */}
      <section style={{ padding: "80px 2rem", maxWidth: 1100, margin: "0 auto" }}>
        <p style={{
          fontSize: 11, fontWeight: 700, color: C.gold,
          letterSpacing: "0.12em", textTransform: "uppercase",
          fontFamily: "system-ui, sans-serif", marginBottom: 16, textAlign: "center",
        }}>
          Références académiques intégrées
        </p>
        <h2 style={{
          fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 400,
          textAlign: "center", color: C.dark,
          margin: "0 auto 48px", maxWidth: 560, lineHeight: 1.4,
        }}>
          Vos élèves retrouvent les traités qu'ils étudient
        </h2>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 16,
        }}>
          {REFS.map((r) => (
            <div key={r.auteur} style={{
              border: `0.5px solid ${C.border}`, borderRadius: 10,
              padding: "20px 20px", background: C.white,
            }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: C.dark, marginBottom: 4 }}>
                {r.auteur}
              </div>
              <div style={{
                fontSize: 13, color: C.muted, fontStyle: "italic",
                fontFamily: "system-ui, sans-serif", lineHeight: 1.5,
              }}>
                {r.ouvrage}<br />
                <span style={{ fontSize: 11, fontStyle: "normal" }}>{r.annee}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ ÉTABLISSEMENTS ════════════════════════════════════════════════════ */}
      <section style={{ background: C.goldBg, padding: "80px 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{
            fontSize: 11, fontWeight: 700, color: C.gold,
            letterSpacing: "0.12em", textTransform: "uppercase",
            fontFamily: "system-ui, sans-serif", marginBottom: 16, textAlign: "center",
          }}>
            Pour votre établissement
          </p>
          <h2 style={{
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 400,
            textAlign: "center", color: C.dark, margin: "0 auto 48px", maxWidth: 520,
          }}>
            Une solution adaptée à chaque structure
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {ETABLISSEMENTS.map((e, i) => (
              <div key={e.type} style={{
                background: C.white, borderRadius: 12,
                border: `0.5px solid ${C.border}`, padding: "32px 28px",
              }}>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%",
                  background: C.purple, color: C.white,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 700, marginBottom: 16,
                  fontFamily: "system-ui, sans-serif",
                }}>
                  {i + 1}
                </div>
                <h3 style={{
                  fontSize: 16, fontWeight: 400, color: C.dark,
                  margin: "0 0 12px", lineHeight: 1.4,
                }}>
                  {e.type}
                </h3>
                <p style={{
                  fontSize: 13, color: "#555", lineHeight: 1.75,
                  fontFamily: "system-ui, sans-serif", margin: "0 0 20px",
                }}>
                  {e.desc}
                </p>
                <div style={{
                  fontSize: 13, fontWeight: 700, color: C.gold,
                  fontFamily: "system-ui, sans-serif",
                }}>
                  {e.prix}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TARIFS ════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "80px 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{
            fontSize: 11, fontWeight: 700, color: C.gold,
            letterSpacing: "0.12em", textTransform: "uppercase",
            fontFamily: "system-ui, sans-serif", marginBottom: 16, textAlign: "center",
          }}>
            Tarifs
          </p>
          <h2 style={{
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 400,
            textAlign: "center", color: C.dark, margin: "0 auto 48px",
          }}>
            Transparent, sans engagement
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {TARIFS.map((t) => (
              <div key={t.nom} style={{
                background: t.highlight ? C.dark : C.white,
                borderRadius: 14,
                border: t.highlight ? "none" : `0.5px solid ${C.border}`,
                padding: "36px 28px",
                display: "flex", flexDirection: "column", gap: 0,
              }}>
                <div style={{
                  fontSize: 11, fontWeight: 700,
                  color: t.highlight ? "rgba(255,255,255,0.5)" : C.muted,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  fontFamily: "system-ui, sans-serif", marginBottom: 16,
                }}>
                  {t.nom}
                </div>
                <div style={{ marginBottom: 20 }}>
                  <span style={{
                    fontSize: t.prix === "Sur devis" ? 24 : 36,
                    fontWeight: 400,
                    color: t.highlight ? C.white : C.dark,
                  }}>
                    {t.prix}
                  </span>
                  {t.periode && (
                    <span style={{
                      fontSize: 14, color: t.highlight ? "rgba(255,255,255,0.5)" : C.muted,
                      fontFamily: "system-ui, sans-serif",
                    }}>
                      {t.periode}
                    </span>
                  )}
                </div>
                <p style={{
                  fontSize: 13, lineHeight: 1.7, margin: "0 0 28px",
                  color: t.highlight ? "rgba(255,255,255,0.7)" : "#555",
                  fontFamily: "system-ui, sans-serif", flex: 1,
                }}>
                  {t.desc}
                </p>
                <a
                  href="#contact"
                  style={{
                    display: "block", textAlign: "center",
                    padding: "12px 0", borderRadius: 24,
                    background: t.highlight ? C.gold : "transparent",
                    border: t.highlight ? "none" : `0.5px solid ${C.border}`,
                    color: t.highlight ? C.dark : C.dark,
                    fontSize: 13, fontWeight: 700,
                    fontFamily: "system-ui, sans-serif",
                    textDecoration: "none", letterSpacing: "0.04em",
                  }}
                >
                  {t.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT ═══════════════════════════════════════════════════════════ */}
      <section id="contact" style={{
        background: C.dark, padding: "80px 2rem",
      }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <p style={{
            fontSize: 11, fontWeight: 700, color: C.gold,
            letterSpacing: "0.12em", textTransform: "uppercase",
            fontFamily: "system-ui, sans-serif", marginBottom: 16, textAlign: "center",
          }}>
            Contact
          </p>
          <h2 style={{
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 400,
            color: C.white, textAlign: "center", margin: "0 0 40px",
          }}>
            Ouvrir Harmonia dans votre établissement
          </h2>

          {status === "ok" ? (
            <div style={{
              background: "rgba(255,255,255,0.06)",
              border: "0.5px solid rgba(255,255,255,0.12)",
              borderRadius: 12, padding: "48px 32px", textAlign: "center",
            }}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>🎵</div>
              <div style={{ fontSize: 18, color: C.white, fontWeight: 400, marginBottom: 8 }}>
                Message reçu
              </div>
              <div style={{
                fontSize: 14, color: "rgba(255,255,255,0.6)",
                fontFamily: "system-ui, sans-serif",
              }}>
                Nous vous répondons sous 48 heures ouvrées.
              </div>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label style={{ ...LABEL, color: "rgba(255,255,255,0.5)" }}>Prénom</label>
                  <input
                    value={form.prenom} onChange={set("prenom")}
                    placeholder="Jean"
                    style={{ ...INPUT, background: "rgba(255,255,255,0.06)", color: C.white, border: "0.5px solid rgba(255,255,255,0.12)" }}
                  />
                </div>
                <div>
                  <label style={{ ...LABEL, color: "rgba(255,255,255,0.5)" }}>Nom</label>
                  <input
                    value={form.nom} onChange={set("nom")}
                    placeholder="Dupont"
                    style={{ ...INPUT, background: "rgba(255,255,255,0.06)", color: C.white, border: "0.5px solid rgba(255,255,255,0.12)" }}
                  />
                </div>
              </div>
              <div>
                <label style={{ ...LABEL, color: "rgba(255,255,255,0.5)" }}>Email professionnel</label>
                <input
                  type="email" value={form.email} onChange={set("email")}
                  placeholder="direction@conservatoire.fr"
                  style={{ ...INPUT, background: "rgba(255,255,255,0.06)", color: C.white, border: "0.5px solid rgba(255,255,255,0.12)" }}
                />
              </div>
              <div>
                <label style={{ ...LABEL, color: "rgba(255,255,255,0.5)" }}>Établissement</label>
                <input
                  value={form.etablissement} onChange={set("etablissement")}
                  placeholder="Conservatoire de Paris"
                  style={{ ...INPUT, background: "rgba(255,255,255,0.06)", color: C.white, border: "0.5px solid rgba(255,255,255,0.12)" }}
                />
              </div>
              <div>
                <label style={{ ...LABEL, color: "rgba(255,255,255,0.5)" }}>Message (optionnel)</label>
                <textarea
                  value={form.message} onChange={set("message")}
                  rows={4}
                  placeholder="Vos questions, le nombre d'élèves, vos besoins spécifiques…"
                  style={{ ...INPUT, background: "rgba(255,255,255,0.06)", color: C.white, border: "0.5px solid rgba(255,255,255,0.12)", resize: "vertical" }}
                />
              </div>
              <div
                onClick={status === "loading" ? undefined : handleSubmit}
                style={{
                  background: C.gold, color: C.dark,
                  padding: "16px 0", borderRadius: 30,
                  textAlign: "center", fontFamily: "system-ui, sans-serif",
                  fontWeight: 700, fontSize: 14,
                  cursor: status === "loading" ? "wait" : "pointer",
                  letterSpacing: "0.04em",
                  opacity: status === "loading" ? 0.7 : 1,
                }}
              >
                {status === "loading" ? "Envoi…" : "Demander un accès établissement"}
              </div>
              {status === "error" && (
                <p style={{ fontSize: 13, color: "#F87171", textAlign: "center", fontFamily: "system-ui, sans-serif" }}>
                  Une erreur est survenue. Réessayez ou écrivez à appliharmonia@gmail.com.
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ══ FOOTER ════════════════════════════════════════════════════════════ */}
      <footer style={{
        background: "#111", borderTop: "0.5px solid rgba(255,255,255,0.06)",
        padding: "32px 2rem", textAlign: "center",
      }}>
        <div style={{
          fontFamily: "Georgia, serif", fontSize: 18, color: C.white,
          fontWeight: 700, marginBottom: 12,
        }}>
          Harmonia<span style={{ color: C.gold }}>.</span>
        </div>
        <div style={{
          display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap",
          fontFamily: "system-ui, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.4)",
        }}>
          <Link href={`/${locale}/cursus`} style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Cursus</Link>
          <Link href={`/${locale}/cours`}  style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Cours</Link>
          <a href="mailto:appliharmonia@gmail.com" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Contact</a>
        </div>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", fontFamily: "system-ui, sans-serif", marginTop: 20 }}>
          © 2026 Harmonia
        </p>
      </footer>

    </div>
  );
}

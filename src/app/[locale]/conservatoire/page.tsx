import type { Metadata } from "next";
import ContactConservatoireForm from "@/components/ContactConservatoireForm";
import Link from "next/link";

const ACCENT = "#2D5A8E";
const BG = "#faf8f4";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function ConservatoirePage({ params }: Props) {
  const { locale } = await params;

  return (
    <main style={{ background: BG, minHeight: "100vh", fontFamily: "system-ui, sans-serif" }}>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section style={{
        background: ACCENT,
        color: "#fff",
        padding: "80px 24px 72px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{
            display: "inline-block",
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: 20,
            padding: "4px 14px",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.1em",
            marginBottom: 24,
          }}>
            🎓 HARMONIA POUR LES INSTITUTIONS
          </div>
          <h1 style={{
            fontSize: "clamp(28px, 5vw, 46px)",
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: 20,
            fontFamily: "Georgia, serif",
          }}>
            Harmonia pour les conservatoires<br />et écoles de musique
          </h1>
          <p style={{
            fontSize: 18,
            opacity: 0.9,
            maxWidth: 580,
            margin: "0 auto 36px",
            lineHeight: 1.6,
          }}>
            Donnez à vos élèves un outil pédagogique professionnel.
            Suivez leur progression en temps réel.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="#contact-form"
              style={{
                background: "#fff",
                color: ACCENT,
                padding: "14px 28px",
                borderRadius: 10,
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              Demander une démonstration
            </a>
            <Link
              href={`/${locale}/prof`}
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.4)",
                color: "#fff",
                padding: "14px 28px",
                borderRadius: 10,
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              Commencer gratuitement →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Features profs ────────────────────────────────────── */}
      <section style={{ maxWidth: 960, margin: "0 auto", padding: "72px 24px 48px" }}>
        <h2 style={{
          textAlign: "center",
          fontSize: 28,
          fontWeight: 800,
          color: "#1a1a1a",
          marginBottom: 12,
          fontFamily: "Georgia, serif",
        }}>
          Pour les professeurs
        </h2>
        <p style={{ textAlign: "center", color: "#666", marginBottom: 48, fontSize: 16 }}>
          Gérez vos classes et suivez chaque élève individuellement.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {[
            { icon: "⚡", title: "Créer des classes en 30 secondes", desc: "Un nom, un code d'accès généré automatiquement, partagez-le à vos élèves." },
            { icon: "📋", title: "Assigner des cours et exercices", desc: "Créez des devoirs liés à n'importe lequel des 23 cours ou exercices disponibles." },
            { icon: "📊", title: "Progression détaillée de chaque élève", desc: "Scores, cours complétés, activité récente — tout d'un coup d'œil." },
            { icon: "✏️", title: "Corriger avec annotations", desc: "Notez chaque exercice sur 100 et ajoutez un commentaire personnalisé." },
            { icon: "📈", title: "Rapports de progression", desc: "Identifiez les points forts et les lacunes de votre classe en un instant." },
          ].map((f) => (
            <div key={f.title} style={{
              background: "#fff",
              border: "1px solid #e8e2da",
              borderRadius: 14,
              padding: "24px 22px",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}>
              <span style={{ fontSize: 28 }}>{f.icon}</span>
              <strong style={{ fontSize: 15, color: "#1a1a1a" }}>{f.title}</strong>
              <span style={{ fontSize: 14, color: "#666", lineHeight: 1.5 }}>{f.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features élèves ───────────────────────────────────── */}
      <section style={{ background: "#f0eaf8", padding: "60px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <h2 style={{
            textAlign: "center",
            fontSize: 28,
            fontWeight: 800,
            color: "#1a1a1a",
            marginBottom: 12,
            fontFamily: "Georgia, serif",
          }}>
            Pour les élèves
          </h2>
          <p style={{ textAlign: "center", color: "#666", marginBottom: 48, fontSize: 16 }}>
            L'expérience Harmonia complète, enrichie du suivi par le professeur.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {[
              { icon: "🎵", title: "Interface identique", desc: "Accès complet à Harmonia Pro — même expérience que les abonnés individuels." },
              { icon: "📝", title: "Voir les devoirs assignés", desc: "Les devoirs du prof apparaissent directement dans le tableau de bord." },
              { icon: "📤", title: "Soumettre au prof", desc: "Les exercices complétés sont envoyés automatiquement pour correction." },
              { icon: "💬", title: "Feedback personnalisé", desc: "Recevez la note et les commentaires du professeur dans l'application." },
            ].map((f) => (
              <div key={f.title} style={{
                background: "#fff",
                borderRadius: 12,
                padding: "22px 18px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}>
                <span style={{ fontSize: 26 }}>{f.icon}</span>
                <strong style={{ fontSize: 14, color: "#1a1a1a" }}>{f.title}</strong>
                <span style={{ fontSize: 13, color: "#666", lineHeight: 1.5 }}>{f.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tarifs ────────────────────────────────────────────── */}
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "72px 24px" }}>
        <h2 style={{
          textAlign: "center",
          fontSize: 28,
          fontWeight: 800,
          color: "#1a1a1a",
          marginBottom: 12,
          fontFamily: "Georgia, serif",
        }}>
          Tarifs institutionnels
        </h2>
        <p style={{ textAlign: "center", color: "#666", marginBottom: 48, fontSize: 16 }}>
          Chaque élève accède à tout Harmonia Pro inclus dans l'abonnement.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {[
            { label: "Petite école", sub: "Jusqu'à 30 élèves", price: "199 € / an", highlight: false },
            { label: "Conservatoire", sub: "Jusqu'à 100 élèves", price: "499 € / an", highlight: true },
            { label: "Grand établissement", sub: "Élèves illimités", price: "Sur devis", highlight: false },
          ].map((plan) => (
            <div key={plan.label} style={{
              background: plan.highlight ? ACCENT : "#fff",
              color: plan.highlight ? "#fff" : "#1a1a1a",
              border: plan.highlight ? "none" : "1px solid #e8e2da",
              borderRadius: 16,
              padding: "32px 24px",
              textAlign: "center",
              boxShadow: plan.highlight ? "0 8px 32px rgba(45,90,142,0.25)" : "none",
            }}>
              <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 6 }}>{plan.label}</div>
              <div style={{ fontSize: 13, opacity: 0.75, marginBottom: 20 }}>{plan.sub}</div>
              <div style={{ fontSize: 30, fontWeight: 800, fontFamily: "Georgia, serif" }}>{plan.price}</div>
            </div>
          ))}
        </div>
        <p style={{
          textAlign: "center",
          color: "#888",
          marginTop: 24,
          fontSize: 13,
        }}>
          Paiement annuel. Facturation établissement disponible. TVA non incluse.
        </p>
      </section>

      {/* ── Formulaire de contact ─────────────────────────────── */}
      <section id="contact-form" style={{ maxWidth: 680, margin: "0 auto", padding: "72px 24px" }}>
        <h2 style={{
          textAlign: "center",
          fontSize: 28,
          fontWeight: 800,
          color: "#1a1a1a",
          marginBottom: 12,
          fontFamily: "Georgia, serif",
        }}>
          Demander une démonstration
        </h2>
        <p style={{
          textAlign: "center", color: "#666", marginBottom: 40,
          fontSize: 16, fontFamily: "system-ui, sans-serif",
        }}>
          Réponse sous 48 h ouvrées. Sans engagement.
        </p>
        <ContactConservatoireForm />
      </section>

      {/* ── CTA final ─────────────────────────────────────────── */}
      <section style={{
        background: ACCENT,
        color: "#fff",
        padding: "60px 24px",
        textAlign: "center",
      }}>
        <h2 style={{
          fontSize: 26,
          fontWeight: 800,
          marginBottom: 14,
          fontFamily: "Georgia, serif",
        }}>
          Commencer avec une classe gratuite de 10 élèves
        </h2>
        <p style={{ opacity: 0.85, marginBottom: 32, fontSize: 15 }}>
          Aucune carte bancaire requise. Créez votre première classe en 30 secondes.
        </p>
        <Link
          href={`/${locale}/prof`}
          style={{
            background: "#fff",
            color: ACCENT,
            padding: "14px 32px",
            borderRadius: 10,
            fontWeight: 700,
            fontSize: 16,
            textDecoration: "none",
          }}
        >
          Créer ma première classe →
        </Link>
      </section>
    </main>
  );
}

"use client";

/**
 * src/app/[locale]/page.tsx
 * Harmonia — Landing page principale
 */

import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

const FEATURES = [
  { icon: "𝄞", title: "23 cours structurés", desc: "Des origines acoustiques de la gamme aux techniques des grands compositeurs — deux niveaux progressifs couvrant l'harmonie classique, le jazz et la composition." },
  { icon: "🎹", title: "Exercices SATB interactifs", desc: "Placez les notes sur les portées voix par voix. La validation harmonique détecte en temps réel les quintes parallèles, croisements et erreurs de tessiture." },
  { icon: "✓", title: "Feedback immédiat", desc: "Chaque note placée est analysée selon les règles du contrepoint tonal. Vous apprenez de vos erreurs au moment où elles se produisent." },
  { icon: "🔊", title: "Audio haute qualité", desc: "Piano samplé en haute fidélité. Écoutez chaque accord, chaque progression, chaque voicing — des cadences de Bach aux substitutions tritoniques jazz." },
  { icon: "🗺", title: "24 tonalités", desc: "Page de référence complète : gammes, armures, accords diatoniques, tritons fonctionnels et astuces mnémotechniques pour les 12 majeures et 12 mineures." },
  { icon: "🌍", title: "6 langues", desc: "Français, English, Español, Deutsch, Português, Italiano. Harmonia est conçu pour les musiciens du monde entier." },
];

const STEPS = [
  { num: "01", title: "Étudie le cours", desc: "Chaque cours explique les concepts avec des exemples audio, des tableaux récapitulatifs et des anecdotes sur les grands compositeurs." },
  { num: "02", title: "Entraîne-toi au quiz", desc: "Des questions aléatoires piochées dans un pool de 90+ questions par cours — identification, construction, analyse de Bach à Radiohead." },
  { num: "03", title: "Réalise les exercices", desc: "Place les notes sur les portées SATB, choisis les bons renversements, analyse les styles des maîtres. Le moteur valide instantanément tes choix." },
  { num: "04", title: "Progresse", desc: "23 cours, 24 tonalités, niveaux 1 et 2. De la gamme de base aux techniques de composition des grands maîtres." },
];

const PLANS = [
  {
    name: "Gratuit", href: "cours", price: "0€", period: "", desc: "Pour découvrir l'harmonie tonale",
    color: "#555", bg: "#fff", border: "#e0dbd3", cta: "Commencer gratuitement", ctaStyle: "outline",
    features: ["Cours 1 à 3 complets", "Quiz illimité (cours 1–3)", "Exercices SATB niveau 1", "Dictée harmonique", "Page des 24 tonalités", "Audio haute qualité"],
    notIncluded: ["Cours 4 à 23", "Exercices niveaux 2–3", "Fonctionnalités IA"],
  },
  {
    name: "Étudiant", href: "upgrade", price: "9€", period: "/mois", desc: "Tous les cours et exercices",
    color: "#fff", bg: "#1a1a1a", border: "#1a1a1a", cta: "Choisir Étudiant", ctaStyle: "solid", badge: "Le plus populaire",
    features: ["Tous les cours (1 à 23)", "Quiz illimité sur tous les cours", "700+ exercices SATB", "24 tonalités × 4 positions", "Tous les niveaux de difficulté", "Mises à jour continues"],
    notIncluded: ["Fonctionnalités IA"],
  },
  {
    name: "Pro", href: "upgrade", price: "19€", period: "/mois", desc: "Étudiant + fonctionnalités IA",
    color: "#BA7517", bg: "#FAEEDA", border: "#F6AD55", cta: "Choisir Pro", ctaStyle: "amber", badge: "Meilleure valeur",
    features: ["Tout le plan Étudiant", "Assistant IA conversationnel", "Analyse de partition MusicXML", "Bibliothèque de 110 progressions", "Comparateur de 11 styles harmoniques", "Support prioritaire"],
    notIncluded: [],
  },
];

const TESTIMONIALS = [
  { text: "J'ai essayé plusieurs méthodes d'harmonie en ligne. Harmonia est la première où je comprends vraiment pourquoi les règles existent — pas juste comment les appliquer.", author: "Marc D.", role: "Guitariste jazz, 3 ans de pratique", stars: 5 },
  { text: "Le feedback en temps réel sur les quintes parallèles m'a appris plus en deux semaines que 6 mois de cours magistraux. Le placement des notes sur la portée est intuitif.", author: "Sofia R.", role: "Étudiante en conservatoire", stars: 5 },
  { text: "La page des 24 tonalités est une référence que je consulte constamment. Et avoir tout en 6 langues me permet de comparer avec mes élèves italiens.", author: "Thomas K.", role: "Professeur de piano, Berlin", stars: 5 },
];

const FAQ = [
  { q: "Faut-il avoir des bases en théorie musicale ?", a: "Non. Le cours 1 commence depuis les origines acoustiques de la gamme — aucun prérequis n'est nécessaire. Harmonia convient aussi bien aux débutants qu'aux musiciens qui veulent formaliser leurs connaissances." },
  { q: "En combien de temps maîtrise-t-on le programme ?", a: "Le niveau 1 (9 cours) représente environ 30 à 50 heures de travail selon votre rythme et votre niveau de départ. Avec une pratique régulière d'une heure par jour, comptez 6 à 8 semaines." },
  { q: "Les exercices sont-ils adaptés à tous les instruments ?", a: "Oui. L'harmonie tonale est un langage universel. Les exercices travaillent la compréhension harmonique abstraite — applicable à n'importe quel instrument ou à la composition." },
  { q: "Puis-je annuler mon abonnement à tout moment ?", a: "Oui, sans engagement. L'annulation prend effet à la fin de la période en cours. Pour le plan annuel, vous conservez l'accès jusqu'à la fin de l'année payée." },
  { q: "Le contenu est-il régulièrement mis à jour ?", a: "Oui. Harmonia est en développement actif — de nouveaux exercices, cours et fonctionnalités sont ajoutés régulièrement. Les abonnés Pro bénéficient de toutes les mises à jour." },
];

function StarRating({ n }: { n: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: n }).map((_, i) => (
        <span key={i} style={{ color: "#BA7517", fontSize: 14 }}>★</span>
      ))}
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "0.5px solid #e8e3db" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: "100%", background: "none", border: "none", padding: "18px 0", textAlign: "left" as const, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}
      >
        <span style={{ fontSize: 15, fontWeight: 500, color: "#1a1a1a", lineHeight: 1.4 }}>{q}</span>
        <span style={{ fontSize: 20, color: "#BA7517", flexShrink: 0, transition: "transform .2s", transform: open ? "rotate(45deg)" : "rotate(0)", display: "inline-block" }}>+</span>
      </button>
      {open && <div style={{ paddingBottom: 18, fontSize: 14, color: "#666", lineHeight: 1.75 }}>{a}</div>}
    </div>
  );
}

const LOCALES = [
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "es", label: "ES", flag: "🇪🇸" },
  { code: "de", label: "DE", flag: "🇩🇪" },
  { code: "pt", label: "PT", flag: "🇧🇷" },
  { code: "it", label: "IT", flag: "🇮🇹" },
];

function LanguageSwitcher({ currentLocale, pathname }: { currentLocale: string; pathname: string }) {
  const [open, setOpen] = React.useState(false);
  const current = LOCALES.find(l => l.code === currentLocale) ?? LOCALES[0];
  const switchTo = (code: string) => { const parts = pathname.split("/"); parts[1] = code; return parts.join("/"); };
  return (
    <div style={{ position: "relative" as const }}>
      <button onClick={() => setOpen(!open)} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "0.5px solid #e0dbd3", borderRadius: 20, padding: "5px 12px", cursor: "pointer", fontSize: 12, fontWeight: 600, color: "#555", fontFamily: "system-ui, sans-serif" }}>
        <span>{current.flag}</span>
        <span>{current.label}</span>
        <span style={{ fontSize: 8, color: "#aaa" }}>▼</span>
      </button>
      {open && (
        <div style={{ position: "absolute" as const, top: "calc(100% + 8px)", right: 0, background: "#fff", border: "0.5px solid #e0dbd3", borderRadius: 10, boxShadow: "0 4px 20px rgba(0,0,0,0.08)", overflow: "hidden", zIndex: 200, minWidth: 120 }}>
          {LOCALES.map(loc => (
            <a key={loc.code} href={switchTo(loc.code)} onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", fontSize: 13, color: loc.code === currentLocale ? "#185FA5" : "#333", textDecoration: "none", background: loc.code === currentLocale ? "#E6F1FB" : "transparent", fontFamily: "system-ui, sans-serif", fontWeight: loc.code === currentLocale ? 600 : 400 }}>
              <span>{loc.flag}</span>
              <span>{loc.label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

const TOPBAR_H = 42;

export default function LandingPage() {
  const params = useParams();
  const locale = (params?.locale as string) ?? "fr";
  const pathname = typeof window !== "undefined" ? window.location.pathname : `/${locale}`;
  const { isSignedIn } = useUser();
  const t = useTranslations("landing");

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#faf8f4", color: "#1a1a1a", overflowX: "hidden" }}>

      {/* Bandeau d'annonce */}
      <div style={{
        position: "fixed" as const,
        top: 0, left: 0, right: 0,
        zIndex: 200,
        height: TOPBAR_H,
        background: "#5C3D6E",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        fontFamily: "system-ui, sans-serif",
        fontSize: 13,
        fontWeight: 600,
        color: "#fff",
        letterSpacing: "0.05em",
      }}>
        <span style={{ background: "rgba(255,255,255,0.15)", padding: "2px 10px", borderRadius: 10 }}>Nouveau</span>
        <span style={{ opacity: 0.85, fontWeight: 400 }}>{t("topbar")}</span>
        <Link href={`/${locale}/cours`} style={{ color: "#E9C97E", textDecoration: "none", fontWeight: 600 }}>
          {t("topbarCta")}
        </Link>
      </div>

      {/* Navigation */}
      <nav style={{ position: "fixed" as const, top: TOPBAR_H, left: 0, right: 0, zIndex: 100, background: "rgba(250,248,244,0.95)", backdropFilter: "blur(8px)", borderBottom: "0.5px solid #e8e3db", padding: "0 2rem", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em", color: "#1a1a1a" }}>
          Harmonia<span style={{ color: "#BA7517", marginLeft: 2 }}>.</span>
        </div>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <Link href={`/${locale}/cours`} style={{ fontSize: 13, color: "#666", textDecoration: "none" }}>{t("navCourses")}</Link>
          <Link href={`/${locale}/atelier`} style={{ fontSize: 13, color: "#666", textDecoration: "none" }}>{t("navAtelier")}</Link>
          <Link href={`/${locale}/tonalites`} style={{ fontSize: 13, color: "#666", textDecoration: "none" }}>{t("navScales")}</Link>
          <LanguageSwitcher currentLocale={locale} pathname={`/${locale}`} />
          {isSignedIn ? (
            <Link href={`/${locale}/dashboard`} style={{ fontSize: 13, fontWeight: 500, padding: "7px 18px", borderRadius: 20, background: "#1a1a1a", color: "#fff", textDecoration: "none" }}>Mon espace →</Link>
          ) : (
            <Link href={`/${locale}/sign-in`} style={{ fontSize: 13, fontWeight: 500, padding: "7px 18px", borderRadius: 20, background: "#1a1a1a", color: "#fff", textDecoration: "none" }}>Se connecter →</Link>
          )}
        </div>
      </nav>

      {/* Hero — image plein écran */}
      <section style={{
        minHeight: "100vh",
        marginTop: TOPBAR_H + 60,
        position: "relative" as const,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}>
        <img
          src="/partition-hero.jpg"
          alt=""
          style={{ position: "absolute" as const, top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute" as const, top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to bottom, rgba(250,248,244,0.55) 0%, rgba(250,248,244,0.72) 60%, rgba(250,248,244,0.92) 100%)" }} />

        <div style={{ maxWidth: 760, textAlign: "center" as const, position: "relative" as const, zIndex: 1, padding: "80px 2rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#FAEEDA", border: "0.5px solid #F6AD55", borderRadius: 20, padding: "5px 14px", fontSize: 12, fontWeight: 500, color: "#BA7517", fontFamily: "system-ui, sans-serif", marginBottom: 32, letterSpacing: "0.04em" }}>
            <span>✦</span>
            {t("badge")}
          </div>

          <h1 style={{ fontSize: "clamp(40px, 7vw, 72px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", margin: "0 0 24px", color: "#1a1a1a" }}>
            {t("h1")}
            <br />
            <em style={{ color: "#BA7517", fontStyle: "italic" }}>{t("h1em")}</em>
          </h1>

          <p style={{ fontSize: "clamp(16px, 2.5vw, 20px)", color: "#444", lineHeight: 1.7, maxWidth: 560, margin: "0 auto 40px", fontFamily: "system-ui, sans-serif", fontWeight: 400 }}>
            {t("sub")}
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" as const }}>
            <Link href={`/${locale}/cours`} style={{ padding: "14px 32px", borderRadius: 4, background: "#1a1a1a", color: "#fff", textDecoration: "none", fontSize: 15, fontWeight: 500, fontFamily: "system-ui, sans-serif", letterSpacing: "0.02em", border: "1px solid #1a1a1a" }}>
              {t("cta1")}
            </Link>
            <Link href={`/${locale}/tonalites`} style={{ padding: "14px 32px", borderRadius: 4, background: "rgba(255,255,255,0.7)", color: "#1a1a1a", textDecoration: "none", fontSize: 15, fontFamily: "system-ui, sans-serif", border: "1px solid #c8c4bc" }}>
              {t("cta2")}
            </Link>
          </div>

          <p style={{ marginTop: 28, fontSize: 12, color: "#bbb", fontFamily: "system-ui, sans-serif" }}>
            {t("footer")}
          </p>
        </div>
      </section>

      {/* Bande défilante */}
      <div style={{ background: "#1a1a1a", padding: "14px 0", overflow: "hidden", borderTop: "0.5px solid #333", borderBottom: "0.5px solid #333" }}>
        <div style={{ display: "flex", gap: 48, animation: "marquee 20s linear infinite", whiteSpace: "nowrap" as const }}>
          {[...Array(3)].map((_, k) => (
            ["Triton", "II–V–I", "Cadences", "Tonicisation", "Pédales harmoniques", "Conduite de voix", "Emprunts", "Modulation", "24 tonalités", "SATB"].map(item => (
              <span key={`${k}-${item}`} style={{ fontSize: 12, fontFamily: "monospace", color: k % 2 === 0 ? "#BA7517" : "#555", fontWeight: 600, letterSpacing: "0.1em", flexShrink: 0 }}>{item}</span>
            ))
          ))}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }`}</style>
      </div>

      {/* Comment ça marche */}
      <section style={{ padding: "100px 2rem", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center" as const, marginBottom: 64 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", color: "#BA7517", textTransform: "uppercase" as const, fontFamily: "system-ui", marginBottom: 12 }}>{t("methodLabel")}</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, margin: 0, letterSpacing: "-0.01em" }}>{t("methodH2")}</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
          {STEPS.map((step, i) => (
            <div key={step.num} style={{ padding: "32px 28px", background: i % 2 === 0 ? "#fff" : "#f4f1ec", borderRadius: i === 0 ? "8px 0 0 8px" : i === STEPS.length - 1 ? "0 8px 8px 0" : 0, border: "0.5px solid #e8e3db" }}>
              <div style={{ fontSize: 11, fontFamily: "monospace", color: "#BA7517", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 16 }}>{step.num}</div>
              <h3 style={{ fontSize: 16, fontWeight: 500, margin: "0 0 10px", lineHeight: 1.3 }}>{step.title}</h3>
              <p style={{ fontSize: 13, color: "#888", lineHeight: 1.7, margin: 0, fontFamily: "system-ui, sans-serif" }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "80px 2rem", background: "#fff", borderTop: "0.5px solid #e8e3db", borderBottom: "0.5px solid #e8e3db" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 64 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", color: "#185FA5", textTransform: "uppercase" as const, fontFamily: "system-ui", marginBottom: 12 }}>{t("featuresLabel")}</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, margin: 0, letterSpacing: "-0.01em" }}>{t("featuresH2")}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {FEATURES.map(f => (
              <div key={f.title} style={{ padding: "28px", border: "0.5px solid #e8e3db", borderRadius: 10, background: "#faf8f4" }}>
                <div style={{ fontSize: 28, marginBottom: 14, lineHeight: 1 }}>{f.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 500, margin: "0 0 8px" }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: "#888", lineHeight: 1.7, margin: 0, fontFamily: "system-ui, sans-serif" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outils d'entraînement */}
      <section style={{ padding: "80px 2rem", background: "#fff", borderBottom: "0.5px solid #e8e3db" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 64 }}>
            <div style={{
              fontSize: 11, fontWeight: 600, letterSpacing: "0.15em",
              color: "#5C3D6E", textTransform: "uppercase" as const,
              fontFamily: "system-ui", marginBottom: 12,
            }}>
              Outils d'entraînement
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, margin: 0, letterSpacing: "-0.01em" }}>
              5 outils pour pratiquer
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
            {([
              { icon: "🎧", title: "Dictée", desc: "Identifiez accords et intervalles à l'oreille", href: `/${locale}/dictee` },
              { icon: "✎", title: "Composition guidée", desc: "Construisez une progression harmonique pas à pas", href: `/${locale}/composition` },
              { icon: "⊞", title: "Générateur SATB", desc: "Harmonisation à 4 voix avec validation temps réel", href: `/${locale}/generateur-satb` },
              { icon: "♩", title: "Éditeur mélodique", desc: "Composez et écoutez votre mélodie", href: `/${locale}/editeur-melodique` },
              { icon: "♪", title: "Notes étrangères", desc: "Passes, broderies, retards, appoggiatures", href: `/${locale}/notes-etrangeres` },
            ] as const).map(tool => (
              <Link key={tool.title} href={tool.href} style={{ textDecoration: "none" }}>
                <div style={{
                  padding: "24px 20px",
                  border: "0.5px solid #e8e3db",
                  borderRadius: 10,
                  background: "#faf8f4",
                  height: "100%",
                  boxSizing: "border-box" as const,
                  cursor: "pointer",
                }}>
                  <div style={{ fontSize: 28, marginBottom: 12, lineHeight: 1 }}>{tool.icon}</div>
                  <h3 style={{ fontSize: 14, fontWeight: 600, margin: "0 0 8px", color: "#1a1a1a", fontFamily: "system-ui, sans-serif" }}>
                    {tool.title}
                  </h3>
                  <p style={{ fontSize: 12, color: "#888", lineHeight: 1.6, margin: 0, fontFamily: "system-ui, sans-serif" }}>
                    {tool.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section style={{ padding: "100px 2rem" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 64 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", color: "#0F6E56", textTransform: "uppercase" as const, fontFamily: "system-ui", marginBottom: 12 }}>{t("pricingLabel")}</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, margin: "0 0 12px", letterSpacing: "-0.01em" }}>{t("pricingH2")}</h2>
            <p style={{ fontSize: 15, color: "#888", margin: 0, fontFamily: "system-ui, sans-serif" }}>{t("pricingSub")}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, alignItems: "start" }}>
            {PLANS.map(plan => (
              <div key={plan.name} style={{ padding: "32px", borderRadius: 12, background: plan.bg, border: `1px solid ${plan.border}`, position: "relative" as const }}>
                {plan.badge && (
                  <div style={{ position: "absolute" as const, top: -12, left: "50%", transform: "translateX(-50%)", background: plan.name === "Pro" ? "#1a1a1a" : "#BA7517", color: "#fff", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", padding: "4px 12px", borderRadius: 10, fontFamily: "system-ui, sans-serif", whiteSpace: "nowrap" as const }}>
                    {plan.badge}
                  </div>
                )}
                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: plan.name === "Pro" ? "#aaa" : "#888", fontFamily: "system-ui", marginBottom: 8 }}>{plan.name}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 6 }}>
                    <span style={{ fontSize: 40, fontWeight: 400, color: plan.color, letterSpacing: "-0.03em" }}>{plan.price}</span>
                    <span style={{ fontSize: 14, color: plan.name === "Pro" ? "#666" : "#aaa", fontFamily: "system-ui" }}>{plan.period}</span>
                  </div>
                  <p style={{ fontSize: 13, color: plan.name === "Pro" ? "#888" : "#999", margin: 0, fontFamily: "system-ui, sans-serif" }}>{plan.desc}</p>
                </div>
                <Link href={`/${locale}/${plan.href}`} style={{ display: "block", width: "100%", padding: "12px", borderRadius: 6, textAlign: "center" as const, textDecoration: "none", fontSize: 14, fontWeight: 500, fontFamily: "system-ui, sans-serif", background: plan.ctaStyle === "solid" ? "#fff" : plan.ctaStyle === "amber" ? "#BA7517" : "transparent", color: plan.ctaStyle === "solid" ? "#1a1a1a" : plan.ctaStyle === "amber" ? "#fff" : "#1a1a1a", border: plan.ctaStyle === "outline" ? "1px solid #c8c4bc" : plan.ctaStyle === "solid" ? "1px solid #fff" : "none", marginBottom: 24, boxSizing: "border-box" as const }}>
                  {plan.cta}
                </Link>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 8 }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontFamily: "system-ui, sans-serif" }}>
                      <span style={{ color: plan.name === "Pro" ? "#9AE6B4" : "#0F6E56", flexShrink: 0 }}>✓</span>
                      <span style={{ color: plan.name === "Pro" ? "#ccc" : "#555" }}>{f}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontFamily: "system-ui, sans-serif", opacity: 0.4 }}>
                      <span style={{ color: "#aaa", flexShrink: 0 }}>✗</span>
                      <span style={{ color: "#aaa" }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section style={{ padding: "80px 2rem", background: "#1a1a1a", borderTop: "0.5px solid #333" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 56 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", color: "#BA7517", textTransform: "uppercase" as const, fontFamily: "system-ui", marginBottom: 12 }}>Témoignages</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, margin: 0, color: "#fff", letterSpacing: "-0.01em" }}>Ce qu'en disent les musiciens</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{ padding: "28px", background: "#252525", border: "0.5px solid #333", borderRadius: 10 }}>
                <StarRating n={t.stars} />
                <p style={{ fontSize: 14, color: "#ccc", lineHeight: 1.75, margin: "16px 0 20px", fontFamily: "system-ui, sans-serif", fontStyle: "italic" }}>"{t.text}"</p>
                <div style={{ fontSize: 13, color: "#888", fontFamily: "system-ui, sans-serif" }}>
                  <span style={{ color: "#ddd", fontWeight: 500 }}>{t.author}</span>{" · "}{t.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "100px 2rem" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 56 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", color: "#555", textTransform: "uppercase" as const, fontFamily: "system-ui", marginBottom: 12 }}>Questions fréquentes</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, margin: 0, letterSpacing: "-0.01em" }}>Tout ce que vous voulez savoir</h2>
          </div>
          <div style={{ borderTop: "0.5px solid #e8e3db" }}>
            {FAQ.map((item, i) => <FAQItem key={i} q={item.q} a={item.a} />)}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section style={{ padding: "100px 2rem", background: "linear-gradient(135deg, #1a1a1a 0%, #2a2015 100%)", textAlign: "center" as const, borderTop: "0.5px solid #333" }}>
        <div style={{ maxWidth: 580, margin: "0 auto" }}>
          <div style={{ fontSize: 64, marginBottom: 24, lineHeight: 1, color: "#BA7517", opacity: 0.6 }}>𝄞</div>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 400, color: "#fff", margin: "0 0 16px", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
            {t("ctaH2")}<br /><em style={{ color: "#BA7517" }}>{t("ctaEm")}</em>
          </h2>
          <p style={{ fontSize: 16, color: "#888", lineHeight: 1.7, margin: "0 0 40px", fontFamily: "system-ui, sans-serif" }}>
            {t("ctaSub")}
          </p>
          <Link href={`/${locale}/cours`} style={{ display: "inline-block", padding: "16px 40px", borderRadius: 4, background: "#BA7517", color: "#fff", textDecoration: "none", fontSize: 16, fontWeight: 500, fontFamily: "system-ui, sans-serif", letterSpacing: "0.02em" }}>
            {t("ctaBtn")}
          </Link>
          <p style={{ marginTop: 16, fontSize: 12, color: "#555", fontFamily: "system-ui, sans-serif" }}>Cours 1 à 3 · Quiz illimité · Exercices SATB</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "40px 2rem", background: "#111", borderTop: "0.5px solid #222" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: 16 }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>Harmonia<span style={{ color: "#BA7517" }}>.</span></div>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" as const }}>
            {[
              { label: "Cours", href: `/${locale}/cours` },
              { label: "Atelier", href: `/${locale}/atelier` },
              { label: "Tonalités", href: `/${locale}/tonalites` },
              { label: "Confidentialité", href: `/${locale}/confidentialite` },
              { label: "CGU", href: `/${locale}/conditions` },
              { label: "getharmonia.app", href: "https://getharmonia.app" },
            ].map(link => (
              <Link key={link.label} href={link.href} style={{ fontSize: 13, color: "#555", textDecoration: "none", fontFamily: "system-ui, sans-serif" }}>{link.label}</Link>
            ))}
          </div>
          <div style={{ fontSize: 12, color: "#333", fontFamily: "system-ui, sans-serif" }}>© 2026 Harmonia · All rights reserved</div>
        </div>
      </footer>

    </div>
  );
}

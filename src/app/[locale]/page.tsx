"use client";

/**
 * src/app/[locale]/page.tsx
 * Harmonia — Landing page principale
 *
 * Tout le contenu rédactionnel vient de messages/*.json : il était auparavant
 * codé en dur en français, si bien que /en, /es, /de, /pt et /it affichaient
 * leurs sections de conversion (bénéfices, tarifs, témoignages, FAQ) en français.
 */

import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { COURS_COUNT, FREE_COURS } from "@/lib/catalogue";

const FREE_COUNT = FREE_COURS.length;

/** Remplit les jetons de comptage des chaînes traduites. */
function fill(s: string): string {
  return s
    .replaceAll("{count}", String(COURS_COUNT))
    .replaceAll("{freePlus}", String(FREE_COUNT + 1))
    .replaceAll("{free}", String(FREE_COUNT));
}

/**
 * Habillage des cartes tarifaires. Chaque plan porte ses propres couleurs de
 * texte, accordées à son fond : elles étaient auparavant dérivées d'un ternaire
 * `plan.name === "Pro"` qui appliquait les couleurs du thème sombre à la carte
 * crème et inversement — les arguments de vente des deux plans payants
 * s'affichaient donc à 1,4:1 et 2,3:1 de contraste, c'est-à-dire invisibles,
 * pendant que le plan gratuit restait parfaitement lisible.
 */
const PLAN_STYLES = [
  {
    href: "cours", price: "0€", period: "",
    bg: "#fff", border: "#e0dbd3",
    labelColor: "#6b6b6b", priceColor: "#1a1a1a", periodColor: "#6b6b6b", descColor: "#6b6b6b",
    checkColor: "#0F6E56", featureColor: "#444", mutedColor: "#767676",
    badgeBg: "", ctaBg: "transparent", ctaColor: "#1a1a1a", ctaBorder: "1px solid #c8c4bc",
  },
  {
    href: "upgrade", price: "9€", period: "/mois",
    bg: "#1a1a1a", border: "#1a1a1a",
    labelColor: "#bdbdbd", priceColor: "#fff", periodColor: "#bdbdbd", descColor: "#bdbdbd",
    checkColor: "#9AE6B4", featureColor: "#e8e8e8", mutedColor: "#9a9a9a",
    badgeBg: "#9A5F12", ctaBg: "#fff", ctaColor: "#1a1a1a", ctaBorder: "1px solid #fff",
  },
  {
    href: "upgrade", price: "19€", period: "/mois",
    bg: "#FAEEDA", border: "#F6AD55",
    labelColor: "#8a5a10", priceColor: "#1a1a1a", periodColor: "#8a5a10", descColor: "#6b4a00",
    checkColor: "#0F6E56", featureColor: "#4a3800", mutedColor: "#7a6a52",
    badgeBg: "#1a1a1a", ctaBg: "#9A5F12", ctaColor: "#fff", ctaBorder: "none",
  },
];

const LEVEL_ACCENT = ["#9A5F12", "#9A5F12", "#E9C97E", "#9A5F12", "#9A5F12"];

interface Feature { title: string; desc: string }
interface Step { title: string; desc: string }
interface Level { title: string; target: string; refs: string; modules: string[] }
interface Plan { name: string; desc: string; cta: string; badge: string; features: string[]; notIncluded: string[] }
interface Faq { q: string; a: string }

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "0.5px solid #e8e3db" }}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{ width: "100%", background: "none", border: "none", padding: "18px 0", textAlign: "left" as const, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, minHeight: 44 }}
      >
        <span style={{ fontSize: 15, fontWeight: 500, color: "#1a1a1a", lineHeight: 1.4 }}>{q}</span>
        <span aria-hidden="true" style={{ fontSize: 20, color: "#9A5F12", flexShrink: 0, transition: "transform .2s", transform: open ? "rotate(45deg)" : "rotate(0)", display: "inline-block" }}>+</span>
      </button>
      {open && <div style={{ paddingBottom: 18, fontSize: 14, color: "#5f5f5f", lineHeight: 1.75 }}>{a}</div>}
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

function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const [open, setOpen] = useState(false);
  const current = LOCALES.find(l => l.code === currentLocale) ?? LOCALES[0];
  return (
    <div style={{ position: "relative" as const }}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Changer de langue"
        style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "0.5px solid #e0dbd3", borderRadius: 20, padding: "8px 12px", cursor: "pointer", fontSize: 12, fontWeight: 600, color: "#5f5f5f", fontFamily: "system-ui, sans-serif", minHeight: 44 }}
      >
        <span aria-hidden="true">{current.flag}</span>
        <span>{current.label}</span>
        <span aria-hidden="true" style={{ fontSize: 8, color: "#767676" }}>▼</span>
      </button>
      {open && (
        <div style={{ position: "absolute" as const, top: "calc(100% + 8px)", right: 0, background: "#fff", border: "0.5px solid #e0dbd3", borderRadius: 10, boxShadow: "0 4px 20px rgba(0,0,0,0.08)", overflow: "hidden", zIndex: 200, minWidth: 120 }}>
          {LOCALES.map(loc => (
            <a
              key={loc.code}
              href={`/${loc.code}`}
              onClick={() => setOpen(false)}
              style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 16px", fontSize: 13, color: loc.code === currentLocale ? "#185FA5" : "#333", textDecoration: "none", background: loc.code === currentLocale ? "#E6F1FB" : "transparent", fontFamily: "system-ui, sans-serif", fontWeight: loc.code === currentLocale ? 600 : 400, minHeight: 44, boxSizing: "border-box" as const }}
            >
              <span aria-hidden="true">{loc.flag}</span>
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
  const { isSignedIn } = useUser();
  const t = useTranslations("landing");
  const [menuOpen, setMenuOpen] = useState(false);

  const features = t.raw("features") as Feature[];
  const steps = t.raw("steps") as Step[];
  const levels = t.raw("levels") as Level[];
  const plans = t.raw("plans") as Plan[];
  const faq = t.raw("faq") as Faq[];

  const navLinks = [
    { href: `/${locale}/cours`, label: t("navCourses") },
    { href: `/${locale}/atelier`, label: t("navAtelier") },
    { href: `/${locale}/tonalites`, label: t("navScales") },
    { href: `/${locale}/cursus`, label: t("navCursus") },
  ];

  // La FAQ est le seul contenu de la page directement éligible à un rich snippet.
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: faq.map(item => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#faf8f4", color: "#1a1a1a", overflowX: "hidden" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }
        .h-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; }
        .h-levels { display: grid; grid-template-columns: repeat(5, 1fr); gap: 2px; }
        .h-nav-links { display: flex; gap: 24px; align-items: center; }
        .h-burger { display: none; }
        @media (max-width: 900px) {
          .h-steps { grid-template-columns: repeat(2, 1fr); gap: 8px; }
          .h-levels { grid-template-columns: repeat(2, 1fr); gap: 8px; }
          .h-card { border-radius: 8px !important; }
        }
        @media (max-width: 768px) {
          .h-nav-links { display: none; }
          .h-burger { display: flex; }
          .h-nav { padding: 0 1rem !important; }
        }
        @media (max-width: 560px) {
          .h-steps, .h-levels { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Bandeau d'annonce */}
      <div style={{
        position: "fixed" as const, top: 0, left: 0, right: 0, zIndex: 200, height: TOPBAR_H,
        background: "#5C3D6E", display: "flex", alignItems: "center", justifyContent: "center",
        gap: 20, fontFamily: "system-ui, sans-serif", fontSize: 13, fontWeight: 600, color: "#fff",
        letterSpacing: "0.05em", padding: "0 1rem",
      }}>
        <span style={{ background: "rgba(255,255,255,0.2)", padding: "2px 10px", borderRadius: 10 }}>Nouveau</span>
        <span style={{ opacity: 0.95, fontWeight: 400, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" as const }}>{t("topbar")}</span>
        <Link href={`/${locale}/cours`} style={{ color: "#E9C97E", textDecoration: "none", fontWeight: 600, whiteSpace: "nowrap" as const }}>
          {t("topbarCta")}
        </Link>
      </div>

      {/* Navigation */}
      <nav className="h-nav" style={{ position: "fixed" as const, top: TOPBAR_H, left: 0, right: 0, zIndex: 100, background: "rgba(250,248,244,0.95)", backdropFilter: "blur(8px)", borderBottom: "0.5px solid #e8e3db", padding: "0 2rem", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href={`/${locale}`} style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em", color: "#1a1a1a", textDecoration: "none" }}>
          Harmonia<span style={{ color: "#9A5F12", marginLeft: 2 }}>.</span>
        </Link>

        <div className="h-nav-links">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} style={{ fontSize: 13, color: "#5f5f5f", textDecoration: "none" }}>{l.label}</Link>
          ))}
          <LanguageSwitcher currentLocale={locale} />
          <Link href={isSignedIn ? `/${locale}/dashboard` : `/${locale}/sign-in`} style={{ fontSize: 13, fontWeight: 500, padding: "10px 18px", borderRadius: 20, background: "#1a1a1a", color: "#fff", textDecoration: "none" }}>
            {isSignedIn ? t("navDashboard") : t("navSignIn")}
          </Link>
        </div>

        <button
          className="h-burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Menu"
          style={{ background: "none", border: "0.5px solid #e0dbd3", borderRadius: 8, width: 44, height: 44, alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 18, color: "#1a1a1a" }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Menu mobile */}
      {menuOpen && (
        <div style={{ position: "fixed" as const, top: TOPBAR_H + 60, left: 0, right: 0, zIndex: 99, background: "#faf8f4", borderBottom: "0.5px solid #e8e3db", padding: "1rem 1.5rem 1.5rem", display: "flex", flexDirection: "column" as const, gap: 4 }}>
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{ fontSize: 15, color: "#1a1a1a", textDecoration: "none", padding: "12px 0", borderBottom: "0.5px solid #e8e3db", minHeight: 44, display: "flex", alignItems: "center" }}>
              {l.label}
            </Link>
          ))}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 12, gap: 12 }}>
            <LanguageSwitcher currentLocale={locale} />
            <Link href={isSignedIn ? `/${locale}/dashboard` : `/${locale}/sign-in`} onClick={() => setMenuOpen(false)} style={{ fontSize: 14, fontWeight: 500, padding: "12px 20px", borderRadius: 20, background: "#1a1a1a", color: "#fff", textDecoration: "none" }}>
              {isSignedIn ? t("navDashboard") : t("navSignIn")}
            </Link>
          </div>
        </div>
      )}

      {/* Hero */}
      <section style={{ minHeight: "100vh", marginTop: TOPBAR_H + 60, position: "relative" as const, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <Image
          src="/partition-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute" as const, inset: 0, background: "linear-gradient(to bottom, rgba(250,248,244,0.62) 0%, rgba(250,248,244,0.78) 60%, rgba(250,248,244,0.94) 100%)" }} />

        <div style={{ maxWidth: 760, textAlign: "center" as const, position: "relative" as const, zIndex: 1, padding: "80px 1.5rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#FAEEDA", border: "0.5px solid #F6AD55", borderRadius: 20, padding: "5px 14px", fontSize: 12, fontWeight: 600, color: "#8a5a10", fontFamily: "system-ui, sans-serif", marginBottom: 32, letterSpacing: "0.04em" }}>
            <span aria-hidden="true">✦</span>
            {fill(t("badge"))}
          </div>

          <h1 style={{ fontSize: "clamp(64px, 15vw, 148px)", fontWeight: 400, lineHeight: 1, letterSpacing: "-0.03em", margin: "0 0 32px" }}>
            <span style={{ color: "#1a1a1a" }}>harmon</span>
            <span style={{ color: "#5C3D6E" }}>ia</span>
            <span style={{ color: "#9A5F12" }}>.</span>
          </h1>

          <p style={{ fontSize: "clamp(20px, 3.2vw, 34px)", color: "#4a4a4a", lineHeight: 1.45, margin: "0 auto 20px", fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic" }}>
            {t("sub")}
          </p>

          <p style={{ fontSize: "clamp(18px, 2.8vw, 30px)", color: "#5f5f5f", lineHeight: 1.6, margin: "0 auto 48px", fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic" }}>
            {t("sub2")}<br />
            {t("sub3")}
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" as const }}>
            <Link href={`/${locale}/cours`} style={{ padding: "14px 32px", borderRadius: 4, background: "#1a1a1a", color: "#fff", textDecoration: "none", fontSize: 15, fontWeight: 500, fontFamily: "system-ui, sans-serif", letterSpacing: "0.02em", border: "1px solid #1a1a1a" }}>
              {t("cta1")}
            </Link>
            <Link href={`/${locale}/tonalites`} style={{ padding: "14px 32px", borderRadius: 4, background: "rgba(255,255,255,0.8)", color: "#1a1a1a", textDecoration: "none", fontSize: 15, fontFamily: "system-ui, sans-serif", border: "1px solid #a8a49c" }}>
              {t("cta2")}
            </Link>
          </div>

          <p style={{ marginTop: 28, fontSize: 12, color: "#767676", fontFamily: "system-ui, sans-serif" }}>
            {t("footer")}
          </p>
        </div>
      </section>

      {/* Bande défilante */}
      <div style={{ background: "#1a1a1a", padding: "14px 0", overflow: "hidden", borderTop: "0.5px solid #333", borderBottom: "0.5px solid #333" }} aria-hidden="true">
        <div style={{ display: "flex", gap: 48, animation: "marquee 20s linear infinite", whiteSpace: "nowrap" as const }}>
          {[...Array(3)].map((_, k) => (
            ["Triton", "II–V–I", "Cadences", "Tonicisation", "Pédales harmoniques", "Conduite de voix", "Emprunts", "Modulation", "24 tonalités", "SATB"].map(item => (
              <span key={`${k}-${item}`} style={{ fontSize: 12, fontFamily: "monospace", color: k % 2 === 0 ? "#E9C97E" : "#8a8a8a", fontWeight: 600, letterSpacing: "0.1em", flexShrink: 0 }}>{item}</span>
            ))
          ))}
        </div>
      </div>

      {/* Méthode */}
      <section style={{ padding: "100px 1.5rem", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center" as const, marginBottom: 64 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: "#9A5F12", textTransform: "uppercase" as const, fontFamily: "system-ui", marginBottom: 12 }}>{t("methodLabel")}</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, margin: 0, letterSpacing: "-0.01em" }}>{t("methodH2")}</h2>
        </div>
        <div className="h-steps">
          {steps.map((step, i) => (
            <div key={step.title} className="h-card" style={{ padding: "32px 28px", background: i % 2 === 0 ? "#fff" : "#f4f1ec", borderRadius: i === 0 ? "8px 0 0 8px" : i === steps.length - 1 ? "0 8px 8px 0" : 0, border: "0.5px solid #e8e3db" }}>
              <div style={{ fontSize: 11, fontFamily: "monospace", color: "#9A5F12", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 16 }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 500, margin: "0 0 10px", lineHeight: 1.3 }}>{step.title}</h3>
              <p style={{ fontSize: 13, color: "#5f5f5f", lineHeight: 1.7, margin: 0, fontFamily: "system-ui, sans-serif" }}>{fill(step.desc)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fonctionnalités */}
      <section style={{ padding: "80px 1.5rem", background: "#fff", borderTop: "0.5px solid #e8e3db", borderBottom: "0.5px solid #e8e3db" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 64 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: "#185FA5", textTransform: "uppercase" as const, fontFamily: "system-ui", marginBottom: 12 }}>{t("featuresLabel")}</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, margin: 0, letterSpacing: "-0.01em" }}>{t("featuresH2")}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 24 }}>
            {features.map((f, i) => (
              <div key={f.title} style={{ padding: "28px", border: "0.5px solid #e8e3db", borderRadius: 10, background: "#faf8f4" }}>
                <div aria-hidden="true" style={{ fontSize: 28, marginBottom: 14, lineHeight: 1 }}>{["𝄞", "🎹", "✓", "🔊", "🗺", "🌍"][i]}</div>
                <h3 style={{ fontSize: 15, fontWeight: 500, margin: "0 0 8px" }}>{fill(f.title)}</h3>
                <p style={{ fontSize: 13, color: "#5f5f5f", lineHeight: 1.7, margin: 0, fontFamily: "system-ui, sans-serif" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cursus — 5 niveaux */}
      <section style={{ padding: "80px 1.5rem", background: "#fff", borderBottom: "0.5px solid #e8e3db" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 56 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: "#9A5F12", textTransform: "uppercase" as const, fontFamily: "system-ui", marginBottom: 12 }}>
              {t("cursusLabel")}
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, margin: "0 0 12px", letterSpacing: "-0.01em" }}>
              {t("cursusH2")}
            </h2>
            <p style={{ fontSize: 14, color: "#5f5f5f", margin: 0, fontFamily: "system-ui, sans-serif" }}>
              {t("cursusSub")}
            </p>
          </div>

          <div className="h-levels">
            {levels.map((level, i) => {
              const dark = i === 2;
              return (
                <div key={level.title} className="h-card" style={{
                  padding: "28px 22px",
                  background: dark ? "#1a1a1a" : i % 2 === 0 ? "#fff" : "#faf8f4",
                  border: "0.5px solid #e8e3db",
                  borderRadius: i === 0 ? "8px 0 0 8px" : i === levels.length - 1 ? "0 8px 8px 0" : 0,
                  display: "flex", flexDirection: "column" as const,
                }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: LEVEL_ACCENT[i], letterSpacing: "0.14em", fontFamily: "monospace", marginBottom: 10 }}>
                    {t("levelLabel")} {i + 1}
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 500, margin: "0 0 6px", lineHeight: 1.3, color: dark ? "#fff" : "#1a1a1a", letterSpacing: "-0.01em" }}>
                    {level.title}
                  </h3>
                  <div style={{ fontSize: 11, color: dark ? "rgba(255,255,255,0.6)" : "#6b6b6b", fontFamily: "system-ui", marginBottom: 18 }}>
                    {level.refs}
                  </div>
                  <div style={{ display: "inline-block", background: dark ? "rgba(233,201,126,0.2)" : "#FAEEDA", color: dark ? "#E9C97E" : "#8a5a10", fontSize: 10, fontWeight: 600, padding: "3px 9px", borderRadius: 20, marginBottom: 20, fontFamily: "system-ui", letterSpacing: "0.05em", alignSelf: "flex-start" }}>
                    {level.target}
                  </div>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column" as const, gap: 7 }}>
                    {level.modules.map(m => (
                      <li key={m} style={{ display: "flex", alignItems: "flex-start", gap: 7, fontSize: 12, color: dark ? "rgba(255,255,255,0.85)" : "#4a4a4a", fontFamily: "system-ui, sans-serif", lineHeight: 1.5 }}>
                        <span aria-hidden="true" style={{ color: LEVEL_ACCENT[i], flexShrink: 0, fontWeight: 700 }}>→</span>
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: "center" as const, marginTop: 32 }}>
            <Link href={`/${locale}/cursus`} style={{ fontSize: 13, color: "#9A5F12", textDecoration: "none", fontWeight: 600, fontFamily: "system-ui, sans-serif" }}>
              {t("cursusCta")}
            </Link>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section style={{ padding: "100px 1.5rem" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 64 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: "#0F6E56", textTransform: "uppercase" as const, fontFamily: "system-ui", marginBottom: 12 }}>{t("pricingLabel")}</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, margin: "0 0 12px", letterSpacing: "-0.01em" }}>{t("pricingH2")}</h2>
            <p style={{ fontSize: 15, color: "#5f5f5f", margin: 0, fontFamily: "system-ui, sans-serif" }}>{t("pricingSub")}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 20, alignItems: "start" }}>
            {plans.map((plan, i) => {
              const s = PLAN_STYLES[i];
              return (
                <div key={plan.name} style={{ padding: "32px", borderRadius: 12, background: s.bg, border: `1px solid ${s.border}`, position: "relative" as const }}>
                  {plan.badge && (
                    <div style={{ position: "absolute" as const, top: -12, left: "50%", transform: "translateX(-50%)", background: s.badgeBg, color: "#fff", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", padding: "4px 12px", borderRadius: 10, fontFamily: "system-ui, sans-serif", whiteSpace: "nowrap" as const }}>
                      {plan.badge}
                    </div>
                  )}
                  <div style={{ marginBottom: 24 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: s.labelColor, fontFamily: "system-ui", marginBottom: 8 }}>{plan.name}</div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 6 }}>
                      <span style={{ fontSize: 40, fontWeight: 400, color: s.priceColor, letterSpacing: "-0.03em" }}>{s.price}</span>
                      <span style={{ fontSize: 14, color: s.periodColor, fontFamily: "system-ui" }}>{s.period}</span>
                    </div>
                    <p style={{ fontSize: 13, color: s.descColor, margin: 0, fontFamily: "system-ui, sans-serif" }}>{plan.desc}</p>
                  </div>
                  <Link href={`/${locale}/${s.href}`} style={{ display: "block", width: "100%", padding: "14px", borderRadius: 6, textAlign: "center" as const, textDecoration: "none", fontSize: 14, fontWeight: 500, fontFamily: "system-ui, sans-serif", background: s.ctaBg, color: s.ctaColor, border: s.ctaBorder, marginBottom: 24, boxSizing: "border-box" as const }}>
                    {plan.cta}
                  </Link>
                  <div style={{ display: "flex", flexDirection: "column" as const, gap: 8 }}>
                    {plan.features.map(f => (
                      <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontFamily: "system-ui, sans-serif" }}>
                        <span aria-hidden="true" style={{ color: s.checkColor, flexShrink: 0 }}>✓</span>
                        <span style={{ color: s.featureColor }}>{fill(f)}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map(f => (
                      <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontFamily: "system-ui, sans-serif" }}>
                        <span aria-hidden="true" style={{ color: s.mutedColor, flexShrink: 0 }}>✗</span>
                        <span style={{ color: s.mutedColor }}>{fill(f)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "100px 1.5rem" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 56 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: "#5f5f5f", textTransform: "uppercase" as const, fontFamily: "system-ui", marginBottom: 12 }}>{t("faqLabel")}</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, margin: 0, letterSpacing: "-0.01em" }}>{t("faqH2")}</h2>
          </div>
          <div style={{ borderTop: "0.5px solid #e8e3db" }}>
            {faq.map(item => <FAQItem key={item.q} q={item.q} a={item.a} />)}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section style={{ padding: "100px 1.5rem", background: "linear-gradient(135deg, #1a1a1a 0%, #2a2015 100%)", textAlign: "center" as const, borderTop: "0.5px solid #333" }}>
        <div style={{ maxWidth: 580, margin: "0 auto" }}>
          <div aria-hidden="true" style={{ fontSize: 64, marginBottom: 24, lineHeight: 1, color: "#E9C97E", opacity: 0.7 }}>𝄞</div>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 400, color: "#fff", margin: "0 0 16px", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
            {t("ctaH2")}<br /><em style={{ color: "#E9C97E" }}>{t("ctaEm")}</em>
          </h2>
          <p style={{ fontSize: 16, color: "#9a9a9a", lineHeight: 1.7, margin: "0 0 40px", fontFamily: "system-ui, sans-serif" }}>
            {t("ctaSub")}
          </p>
          <Link href={`/${locale}/cours`} style={{ display: "inline-block", padding: "16px 40px", borderRadius: 4, background: "#9A5F12", color: "#fff", textDecoration: "none", fontSize: 16, fontWeight: 500, fontFamily: "system-ui, sans-serif", letterSpacing: "0.02em" }}>
            {t("ctaBtn")}
          </Link>
          <p style={{ marginTop: 16, fontSize: 12, color: "#8a8a8a", fontFamily: "system-ui, sans-serif" }}>{fill(t("ctaNote"))}</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "40px 1.5rem", background: "#111", borderTop: "0.5px solid #222" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: 16 }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>Harmonia<span style={{ color: "#E9C97E" }}>.</span></div>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" as const }}>
            {[
              { label: t("navCourses"), href: `/${locale}/cours` },
              { label: t("navAtelier"), href: `/${locale}/atelier` },
              { label: t("navScales"), href: `/${locale}/tonalites` },
              { label: t("navCursus"), href: `/${locale}/cursus` },
              { label: t("footerPrivacy"), href: `/${locale}/confidentialite` },
              { label: t("footerTerms"), href: `/${locale}/conditions` },
            ].map(link => (
              <Link key={link.href} href={link.href} style={{ fontSize: 13, color: "#9a9a9a", textDecoration: "none", fontFamily: "system-ui, sans-serif" }}>{link.label}</Link>
            ))}
            <a href="mailto:appliharmonia@gmail.com" style={{ fontSize: 13, color: "#9a9a9a", textDecoration: "none", fontFamily: "system-ui, sans-serif" }}>{t("footerContact")}</a>
          </div>
          <div style={{ fontSize: 12, color: "#767676", fontFamily: "system-ui, sans-serif" }}>© 2026 Harmonia</div>
        </div>
      </footer>

    </div>
  );
}

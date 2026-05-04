"use client";

/**
 * src/app/[locale]/page.tsx
 * Harmonia — Landing page principale
 * Design : Conservatoire moderne · Ivoire · Serif · Or ambre
 */

import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useParams } from "next/navigation";

// ─── Données ──────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: "𝄞",
    title: "9 cours de théorie",
    desc: "Des origines acoustiques de la gamme aux modulations avancées — une progression pédagogique rigoureuse, inspirée des meilleures méthodes académiques.",
  },
  {
    icon: "🎹",
    title: "Exercices SATB interactifs",
    desc: "Placez les notes sur les portées, voix par voix. La validation harmonique détecte en temps réel les quintes parallèles, croisements et erreurs de tessiture.",
  },
  {
    icon: "✓",
    title: "Feedback immédiat",
    desc: "Chaque note placée est analysée selon les règles du contrepoint tonal. Vous apprenez de vos erreurs au moment où elles se produisent.",
  },
  {
    icon: "🔊",
    title: "Audio Salamander",
    desc: "Piano à queue Steinway samplé en haute fidélité. Écoutez chaque accord, chaque progression, chaque voicing que vous construisez.",
  },
  {
    icon: "🗺",
    title: "24 tonalités",
    desc: "Page de référence complète : gammes, armures, accords diatoniques, tritons fonctionnels et astuces mnémotechniques pour les 12 majeures et 12 mineures.",
  },
  {
    icon: "🌍",
    title: "6 langues",
    desc: "Français, English, Español, Deutsch, Português, Italiano. Harmonia est conçu pour les musiciens du monde entier.",
  },
];

const STEPS = [
  { num: "01", title: "Étudie le cours", desc: "Chaque cours explique les concepts avec des exemples audio et des tableaux récapitulatifs clairs." },
  { num: "02", title: "Entraîne-toi au quiz", desc: "Des questions aléatoires piochées dans un pool de 90+ questions par cours — identification, construction, analyse." },
  { num: "03", title: "Réalise les exercices", desc: "Place les notes sur les portées SATB. Le moteur de validation vérifie instantanément tes choix harmoniques." },
  { num: "04", title: "Progresse", desc: "Exercices dans les 24 tonalités, 4 positions de voix, 3 niveaux de difficulté. La maîtrise vient par la répétition intelligente." },
];

const PLANS = [
  {
    name: "Gratuit",
    href: "cours",
    price: "0€",
    period: "",
    desc: "Pour découvrir l'harmonie tonale",
    color: "#555",
    bg: "#fff",
    border: "#e0dbd3",
    cta: "Commencer gratuitement",
    ctaStyle: "outline",
    features: [
      "Cours 1 à 3 complets",
      "Quiz illimité (cours 1–3)",
      "Exercices SATB niveaux 1",
      "Page des 24 tonalités",
      "Audio Salamander",
    ],
    notIncluded: [
      "Cours 4 à 9",
      "Exercices avancés (niv. 2–3)",
      "Toutes les tonalités en exercice",
    ],
  },
  {
    name: "Pro",
    href: "upgrade",
    price: "9€",
    period: "/mois",
    desc: "Pour maîtriser l'harmonie complète",
    color: "#fff",
    bg: "#1a1a1a",
    border: "#1a1a1a",
    cta: "Commencer l'essai gratuit",
    ctaStyle: "solid",
    badge: "Le plus populaire",
    features: [
      "Tous les cours (1 à 9) complets",
      "Quiz illimité sur tous les cours",
      "700+ exercices SATB",
      "24 tonalités × 4 positions",
      "Tous les niveaux de difficulté",
      "Exercices identify & build",
      "Mises à jour en continu",
      "Support prioritaire",
    ],
    notIncluded: [],
  },
  {
    name: "Annuel",
    href: "upgrade",
    price: "79€",
    period: "/an",
    desc: "Économisez 29% vs mensuel",
    color: "#BA7517",
    bg: "#FAEEDA",
    border: "#F6AD55",
    cta: "Choisir l'annuel",
    ctaStyle: "amber",
    badge: "Meilleure valeur",
    features: [
      "Tout le plan Pro",
      "Économie de 29€ par an",
      "Accès à vie aux cours achetés",
    ],
    notIncluded: [],
  },
];

const TESTIMONIALS = [
  {
    text: "J'ai essayé plusieurs méthodes d'harmonie en ligne. Harmonia est la première où je comprends vraiment pourquoi les règles existent — pas juste comment les appliquer.",
    author: "Marc D.", role: "Guitariste jazz, 3 ans de pratique",
    stars: 5,
  },
  {
    text: "Le feedback en temps réel sur les quintes parallèles m'a appris plus en deux semaines que 6 mois de cours magistraux. Le placement des notes sur la portée est intuitif.",
    author: "Sofia R.", role: "Étudiante en conservatoire",
    stars: 5,
  },
  {
    text: "La page des 24 tonalités est une référence que je consulte constamment. Et avoir tout en 6 langues me permet de comparer avec mes élèves italiens.",
    author: "Thomas K.", role: "Professeur de piano, Berlin",
    stars: 5,
  },
];

const FAQ = [
  {
    q: "Faut-il avoir des bases en théorie musicale ?",
    a: "Non. Le cours 1 commence depuis les origines acoustiques de la gamme — aucun prérequis n'est nécessaire. Harmonia convient aussi bien aux débutants qu'aux musiciens qui veulent formaliser leurs connaissances.",
  },
  {
    q: "En combien de temps maîtrise-t-on le programme ?",
    a: "Le niveau 1 (9 cours) représente environ 30 à 50 heures de travail selon votre rythme et votre niveau de départ. Avec une pratique régulière d'une heure par jour, comptez 6 à 8 semaines.",
  },
  {
    q: "Les exercices sont-ils adaptés à tous les instruments ?",
    a: "Oui. L'harmonie tonale est un langage universel. Les exercices travaillent la compréhension harmonique abstraite — applicable à n'importe quel instrument ou à la composition.",
  },
  {
    q: "Puis-je annuler mon abonnement à tout moment ?",
    a: "Oui, sans engagement. L'annulation prend effet à la fin de la période en cours. Pour le plan annuel, vous conservez l'accès jusqu'à la fin de l'année payée.",
  },
  {
    q: "Le contenu est-il régulièrement mis à jour ?",
    a: "Oui. Harmonia est en développement actif — de nouveaux exercices, cours et fonctionnalités sont ajoutés régulièrement. Les abonnés Pro bénéficient de toutes les mises à jour.",
  },
];

// ─── Sous-composants ──────────────────────────────────────────────────────────

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
    <div
      style={{
        borderBottom: "0.5px solid #e8e3db",
        padding: "0",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          padding: "18px 0",
          textAlign: "left" as const,
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
        }}
      >
        <span style={{ fontSize: 15, fontWeight: 500, color: "#1a1a1a", lineHeight: 1.4 }}>{q}</span>
        <span style={{
          fontSize: 20,
          color: "#BA7517",
          flexShrink: 0,
          transition: "transform .2s",
          transform: open ? "rotate(45deg)" : "rotate(0)",
          display: "inline-block",
        }}>+</span>
      </button>
      {open && (
        <div style={{ paddingBottom: 18, fontSize: 14, color: "#666", lineHeight: 1.75 }}>
          {a}
        </div>
      )}
    </div>
  );
}

// ─── Page principale ──────────────────────────────────────────────────────────


const LOCALES = [
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'es', label: 'ES', flag: '🇪🇸' },
  { code: 'de', label: 'DE', flag: '🇩🇪' },
  { code: 'pt', label: 'PT', flag: '🇧🇷' },
  { code: 'it', label: 'IT', flag: '🇮🇹' },
];

function LanguageSwitcher({ currentLocale, pathname }: { currentLocale: string; pathname: string }) {
  const [open, setOpen] = React.useState(false);
  const current = LOCALES.find(l => l.code === currentLocale) ?? LOCALES[0];
  
  // Remplace la locale dans le pathname
  const switchTo = (code: string) => {
    const parts = pathname.split('/');
    parts[1] = code;
    return parts.join('/');
  };

  return (
    <div style={{ position: "relative" as const }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          background: "none",
          border: "0.5px solid #e0dbd3",
          borderRadius: 20,
          padding: "5px 12px",
          cursor: "pointer",
          fontSize: 12,
          fontWeight: 600,
          color: "#555",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <span>{current.flag}</span>
        <span>{current.label}</span>
        <span style={{ fontSize: 8, color: "#aaa" }}>▼</span>
      </button>
      {open && (
        <div style={{
          position: "absolute" as const,
          top: "calc(100% + 8px)",
          right: 0,
          background: "#fff",
          border: "0.5px solid #e0dbd3",
          borderRadius: 10,
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          overflow: "hidden",
          zIndex: 200,
          minWidth: 120,
        }}>
          {LOCALES.map(loc => (
            <a
              key={loc.code}
              href={switchTo(loc.code)}
              onClick={() => setOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 16px",
                fontSize: 13,
                color: loc.code === currentLocale ? "#185FA5" : "#333",
                textDecoration: "none",
                background: loc.code === currentLocale ? "#E6F1FB" : "transparent",
                fontFamily: "system-ui, sans-serif",
                fontWeight: loc.code === currentLocale ? 600 : 400,
              }}
            >
              <span>{loc.flag}</span>
              <span>{loc.label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function LandingPage() {
  const params = useParams();
  const locale = (params?.locale as string) ?? "fr";
  const pathname = typeof window !== "undefined" ? window.location.pathname : `/${locale}`;
  const { isSignedIn } = useUser();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: connecter à Resend / base de données
    setSubmitted(true);
  };

  return (
    <div style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      background: "#faf8f4",
      color: "#1a1a1a",
      overflowX: "hidden",
    }}>

      {/* ── Navigation ── */}
      <nav style={{
        position: "fixed" as const,
        top: 0, left: 0, right: 0,
        zIndex: 100,
        background: "rgba(250,248,244,0.95)",
        backdropFilter: "blur(8px)",
        borderBottom: "0.5px solid #e8e3db",
        padding: "0 2rem",
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em", color: "#1a1a1a" }}>
          Harmonia
          <span style={{ color: "#BA7517", marginLeft: 2 }}>.</span>
        </div>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <Link href={`/${locale}/cours`} style={{ fontSize: 13, color: "#666", textDecoration: "none" }}>Cours</Link>
          <Link href={`/${locale}/atelier`} style={{ fontSize: 13, color: "#666", textDecoration: "none" }}>Atelier</Link>
          <Link href={`/${locale}/tonalites`} style={{ fontSize: 13, color: "#666", textDecoration: "none" }}>Tonalités</Link>
          <LanguageSwitcher currentLocale={locale} pathname={`/${locale}`} />
          {isSignedIn ? (
            <Link href={`/${locale}/dashboard`} style={{
              fontSize: 13, fontWeight: 500,
              padding: "7px 18px",
              borderRadius: 20,
              background: "#1a1a1a",
              color: "#fff",
              textDecoration: "none",
            }}>
              Mon espace →
            </Link>
          ) : (
            <Link href={`/${locale}/sign-in`} style={{
              fontSize: 13, fontWeight: 500,
              padding: "7px 18px",
              borderRadius: 20,
              background: "#1a1a1a",
              color: "#fff",
              textDecoration: "none",
            }}>
              Se connecter →
            </Link>
          )}
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{
        background: "#F5F0E8",
        position: "relative" as const,
        overflow: "hidden",
        minHeight: "100vh",
      }}>
        {/* Courbes SVG des 4 voix */}
        <svg style={{ position: "absolute" as const, inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}
          viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="hg1" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#DDD8C4" stopOpacity="0.6"/>
              <stop offset="1" stopColor="#CBA153" stopOpacity="0.4"/>
            </linearGradient>
            <linearGradient id="hg2" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#CBA153" stopOpacity="0.3"/>
              <stop offset="1" stopColor="#DDD8C4" stopOpacity="0.5"/>
            </linearGradient>
            <linearGradient id="hg3" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#DDD8C4" stopOpacity="0.4"/>
              <stop offset="0.5" stopColor="#CBA153" stopOpacity="0.35"/>
              <stop offset="1" stopColor="#DDD8C4" stopOpacity="0.4"/>
            </linearGradient>
            <linearGradient id="hg4" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#CBA153" stopOpacity="0.25"/>
              <stop offset="1" stopColor="#DDD8C4" stopOpacity="0.45"/>
            </linearGradient>
          </defs>
          <style>{`
            @keyframes hv1{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
            @keyframes hv2{0%,100%{transform:translateY(0)}50%{transform:translateY(12px)}}
            @keyframes hv3{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
            @keyframes hv4{0%,100%{transform:translateY(0)}50%{transform:translateY(9px)}}
            .hv1{animation:hv1 8s ease-in-out infinite}
            .hv2{animation:hv2 10s ease-in-out infinite}
            .hv3{animation:hv3 9s ease-in-out infinite}
            .hv4{animation:hv4 11s ease-in-out infinite}
          `}</style>
          <path className="hv1" d="M-40,180 C200,160 400,280 600,230 C800,180 1000,280 1200,220 C1340,180 1400,200 1480,190" stroke="url(#hg1)" strokeWidth="14" strokeLinecap="round" fill="none"/>
          <path className="hv2" d="M-40,340 C180,320 380,420 580,370 C780,320 960,410 1160,360 C1320,325 1400,345 1480,340" stroke="url(#hg2)" strokeWidth="11" strokeLinecap="round" fill="none"/>
          <path className="hv3" d="M-40,680 C200,660 420,740 620,705 C820,670 1020,745 1220,700 C1360,672 1420,685 1480,680" stroke="url(#hg3)" strokeWidth="12" strokeLinecap="round" fill="none"/>
          <path className="hv4" d="M-40,820 C180,805 380,860 580,835 C780,810 980,858 1180,828 C1340,808 1420,820 1480,818" stroke="url(#hg4)" strokeWidth="9" strokeLinecap="round" fill="none"/>
        </svg>

        {/* Nœuds d'accords flottants */}
        {[
          { label: "Dm7", top: "14%", left: "3%", delay: "0s" },
          { label: "Am",  top: "32%", left: "2%", delay: "1.5s" },
          { label: "F",   top: "52%", left: "4%", delay: "0.7s" },
          { label: "G7",  top: "15%", right: "3%", delay: "0.9s" },
          { label: "CMaj7", top: "31%", right: "2%", delay: "1.8s" },
          { label: "Bdim",  top: "50%", right: "4%", delay: "0.3s" },
        ].map((n) => (
          <div key={n.label} style={{
            position: "absolute" as const,
            top: n.top,
            left: (n as any).left,
            right: (n as any).right,
            fontFamily: "system-ui, sans-serif",
            fontSize: 11,
            fontWeight: 500,
            color: "#A0956A",
            background: "rgba(245,240,232,0.88)",
            border: "0.5px solid rgba(185,160,90,0.35)",
            borderRadius: 20,
            padding: "3px 10px",
            zIndex: 1,
            animation: `heroFloat 7s ease-in-out infinite`,
            animationDelay: n.delay,
          }}>{n.label}</div>
        ))}
        <style>{`@keyframes heroFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}`}</style>

        {/* Contenu centré */}
        <div style={{
          position: "relative" as const,
          zIndex: 2,
          display: "flex",
          flexDirection: "column" as const,
          alignItems: "center",
          textAlign: "center" as const,
          padding: "120px 2rem 80px",
        }}>
        {/* Carte partition */}
        <div style={{
          background: "#fff",
          border: "0.5px solid rgba(28,24,16,0.09)",
          borderRadius: 18,
          boxShadow: "0 2px 8px rgba(28,24,16,0.05), 0 16px 48px rgba(28,24,16,0.11)",
          maxWidth: 520,
          width: "100%",
          marginBottom: 24,
          position: "relative" as const,
          overflow: "visible",
        }}>
          {/* Tooltip */}
          <div style={{
            position: "absolute" as const,
            top: -46,
            left: "50%",
            transform: "translateX(-50%)",
            background: "#1C1810",
            color: "#F5F0E8",
            fontSize: 11,
            padding: "8px 14px",
            borderRadius: 9,
            whiteSpace: "nowrap" as const,
            zIndex: 30,
            display: "flex",
            alignItems: "center",
            gap: 8,
            boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#C8A84B", flexShrink: 0, display: "inline-block" }}></span>
            Feedback en temps réel · Correction des quintes parallèles
          </div>
          {/* Barre titre */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 14px", borderBottom: "0.5px solid #F0EAE0" }}>
            {[["#F4BFBF",""], ["#F0D9A0",""], ["#B8E8CC",""]].map(([bg], i) => (
              <span key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: bg, display: "inline-block" }}></span>
            ))}
            <span style={{ fontSize: 11, color: "#B5ACA0", marginLeft: 5, fontFamily: "system-ui, sans-serif" }}>Harmonia — Éditeur SATB · Do majeur</span>
          </div>
          {/* Corps */}
          <div style={{ padding: "20px 20px 16px", position: "relative" as const }}>
            <div style={{
              position: "absolute" as const,
              width: 80, height: 90,
              background: "rgba(200,168,75,0.15)",
              borderRadius: 12,
              top: 30, left: "50%",
              transform: "translateX(-50%)",
              filter: "blur(10px)",
              pointerEvents: "none" as const,
            }}></div>
            <div style={{ display: "flex", justifyContent: "space-around", marginBottom: 10 }}>
              {[["Dm7","#3C3424"],["G7","#C8A84B"],["CMaj7","#3C3424"]].map(([name,color]) => (
                <span key={name} style={{ fontFamily: "Georgia, serif", fontSize: 14, color, fontWeight: 500 }}>{name}</span>
              ))}
            </div>
            <svg viewBox="0 0 460 118" style={{ width: "100%", display: "block" }} xmlns="http://www.w3.org/2000/svg">
              {[22,32,42,52,62,72,82,92,102,112].map(y => (
                <line key={y} x1="32" y1={y} x2="428" y2={y} stroke="#D8D2C4" strokeWidth="0.7"/>
              ))}
              <line x1="32" y1="22" x2="32" y2="112" stroke="#C8C0B0" strokeWidth="1"/>
              <line x1="165" y1="22" x2="165" y2="112" stroke="#DDD8C8" strokeWidth="0.5"/>
              <line x1="298" y1="22" x2="298" y2="112" stroke="#DDD8C8" strokeWidth="0.5"/>
              <line x1="428" y1="22" x2="428" y2="112" stroke="#C8C0B0" strokeWidth="1"/>
              <text x="18" y="56" fontFamily="serif" fontSize="50" fill="#4A4030" opacity="0.65">𝄞</text>
              <text x="18" y="108" fontFamily="serif" fontSize="34" fill="#4A4030" opacity="0.65">𝄢</text>
              {[[88,24],[78,36],[88,46],[78,56],[88,76],[78,86],[88,96]].map(([cx,cy]) => (
                <ellipse key={`${cx}-${cy}`} cx={cx} cy={cy} rx="7" ry="5" fill="#3C3424" transform={`rotate(-12,${cx},${cy})`}/>
              ))}
              <rect x="172" y="14" width="120" height="104" fill="rgba(200,168,75,0.07)" rx="4"/>
              {[[222,24],[212,36],[222,46],[212,56],[222,76],[212,86],[222,96]].map(([cx,cy]) => (
                <ellipse key={`g-${cx}-${cy}`} cx={cx} cy={cy} rx="7" ry="5" fill="#C8A84B" transform={`rotate(-12,${cx},${cy})`}/>
              ))}
              {[[358,22],[348,34],[358,44],[348,54],[358,74],[348,84],[358,94]].map(([cx,cy]) => (
                <ellipse key={`c-${cx}-${cy}`} cx={cx} cy={cy} rx="7" ry="5" fill="#3C3424" transform={`rotate(-12,${cx},${cy})`}/>
              ))}
            </svg>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 14px", borderTop: "0.5px solid #F0EAE0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "#3B6D11", background: "#EAF3DE", padding: "3px 10px", borderRadius: 20 }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#3B6D11", display: "inline-block" }}></span>
              Validation active
            </div>
            <div style={{ display: "flex", gap: 4 }}>
              {["S","A","T","B"].map(v => (
                <span key={v} style={{ fontSize: 10, color: "#A09888", background: "#F0EAE0", padding: "2px 7px", borderRadius: 10, fontFamily: "system-ui, sans-serif" }}>{v}</span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 760, textAlign: "center" as const, position: "relative" as const, zIndex: 1 }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            border: "0.5px solid rgba(200,168,75,0.55)",
            borderRadius: 20,
            padding: "5px 16px",
            fontSize: 11,
            color: "#8A7840",
            background: "rgba(250,246,236,0.9)",
            letterSpacing: "0.03em",
            marginBottom: 22,
            fontFamily: "system-ui, sans-serif",
          }}>
            <span style={{ color: "#C8A84B" }}>✦</span>
            Niveau 1 complet · 9 cours · 700+ exercices
          </div>

          {/* Titre */}
          <h1 style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(34px, 5.2vw, 56px)",
            fontWeight: 400,
            lineHeight: 1.09,
            letterSpacing: "-0.02em",
            margin: "0 0 4px",
            color: "#1C1810",
          }}>
            Maîtrisez l'harmonie
          </h1>
          <div style={{ position: "relative" as const, height: "clamp(42px, 5.8vw, 62px)", marginBottom: 32, display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
            <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "clamp(34px, 5.2vw, 56px)", fontStyle: "italic", color: "rgba(200,168,75,0.22)", lineHeight: 1, position: "absolute" as const, top: 5, left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap" as const }}>
              Vraiment.
            </div>
            <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "clamp(34px, 5.2vw, 56px)", fontStyle: "italic", color: "#C8A84B", lineHeight: 1, position: "absolute" as const, top: 0, left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap" as const }}>
              Vraiment.
            </div>
          </div>

          {/* Sous-titre */}
          <p style={{
            fontSize: 14,
            color: "#706858",
            lineHeight: 1.72,
            maxWidth: 430,
            margin: "0 auto 26px",
            fontFamily: "system-ui, sans-serif",
            fontWeight: 400,
          }}>
            La conduite de voix n'aura plus de secrets : corrections actives des quintes parallèles et des résolutions.
          </p>

          {/* CTA */}
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" as const, marginBottom: 18 }}>
            <Link href={`/${locale}/cours`} style={{
              padding: "12px 28px",
              borderRadius: 24,
              background: "#1C1810",
              color: "#F5F0E8",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500,
              fontFamily: "system-ui, sans-serif",
            }}>
              Commencer gratuitement
            </Link>
            <Link href={`/${locale}/tonalites`} style={{
              padding: "12px 28px",
              borderRadius: 24,
              background: "transparent",
              color: "#4A4438",
              textDecoration: "none",
              fontSize: 14,
              fontFamily: "system-ui, sans-serif",
              border: "0.5px solid #C0B9AA",
            }}>
              Explorer les tonalités
            </Link>
          </div>

          {/* Social proof */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, justifyContent: "center", fontSize: 11, color: "#B0A898", fontFamily: "system-ui, sans-serif" }}>
            <span>Gratuit pour commencer</span>
            <span style={{ width: 1, height: 10, background: "#D0C8B8", display: "inline-block" }}></span>
            <span>Aucune carte requise</span>
            <span style={{ width: 1, height: 10, background: "#D0C8B8", display: "inline-block" }}></span>
            <span>6 langues</span>
          </div>
        </div>
        </div>
      </section>

      {/* ── Bande défilante ── */}
      <div style={{
        background: "#1a1a1a",
        padding: "14px 0",
        overflow: "hidden",
        borderTop: "0.5px solid #333",
        borderBottom: "0.5px solid #333",
      }}>
        <div style={{
          display: "flex",
          gap: 48,
          animation: "marquee 20s linear infinite",
          whiteSpace: "nowrap" as const,
        }}>
          {[...Array(3)].map((_, k) => (
            ["Triton", "II–V–I", "Cadences", "Tonicisation", "Pédales harmoniques",
             "Conduite de voix", "Emprunts", "Modulation", "24 tonalités", "SATB"].map(item => (
              <span key={`${k}-${item}`} style={{
                fontSize: 12,
                fontFamily: "monospace",
                color: k % 2 === 0 ? "#BA7517" : "#555",
                fontWeight: 600,
                letterSpacing: "0.1em",
                flexShrink: 0,
              }}>
                {item}
              </span>
            ))
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-33.333%); }
          }
        `}</style>
      </div>

      {/* ── Comment ça marche ── */}
      <section style={{ padding: "100px 2rem", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center" as const, marginBottom: 64 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", color: "#BA7517", textTransform: "uppercase" as const, fontFamily: "system-ui", marginBottom: 12 }}>
            Méthode
          </div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, margin: 0, letterSpacing: "-0.01em" }}>
            L'apprentissage par la pratique
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 2 }}>
          {STEPS.map((step, i) => (
            <div key={step.num} style={{
              padding: "32px 28px",
              background: i % 2 === 0 ? "#fff" : "#f4f1ec",
              borderRadius: i === 0 ? "8px 0 0 8px" : i === STEPS.length - 1 ? "0 8px 8px 0" : 0,
              border: "0.5px solid #e8e3db",
            }}>
              <div style={{
                fontSize: 11,
                fontFamily: "monospace",
                color: "#BA7517",
                fontWeight: 700,
                letterSpacing: "0.1em",
                marginBottom: 16,
              }}>
                {step.num}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 500, margin: "0 0 10px", lineHeight: 1.3 }}>
                {step.title}
              </h3>
              <p style={{ fontSize: 13, color: "#888", lineHeight: 1.7, margin: 0, fontFamily: "system-ui, sans-serif" }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section style={{ padding: "80px 2rem", background: "#fff", borderTop: "0.5px solid #e8e3db", borderBottom: "0.5px solid #e8e3db" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 64 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", color: "#185FA5", textTransform: "uppercase" as const, fontFamily: "system-ui", marginBottom: 12 }}>
              Fonctionnalités
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, margin: 0, letterSpacing: "-0.01em" }}>
              Tout ce qu'il faut pour progresser
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {FEATURES.map(f => (
              <div key={f.title} style={{
                padding: "28px",
                border: "0.5px solid #e8e3db",
                borderRadius: 10,
                background: "#faf8f4",
              }}>
                <div style={{ fontSize: 28, marginBottom: 14, lineHeight: 1 }}>{f.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 500, margin: "0 0 8px" }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: "#888", lineHeight: 1.7, margin: 0, fontFamily: "system-ui, sans-serif" }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tarifs ── */}
      <section style={{ padding: "100px 2rem" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 64 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", color: "#0F6E56", textTransform: "uppercase" as const, fontFamily: "system-ui", marginBottom: 12 }}>
              Tarifs
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, margin: "0 0 12px", letterSpacing: "-0.01em" }}>
              Choisissez votre rythme
            </h2>
            <p style={{ fontSize: 15, color: "#888", margin: 0, fontFamily: "system-ui, sans-serif" }}>
              Commencez gratuitement. Passez Pro quand vous êtes prêt.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, alignItems: "start" }}>
            {PLANS.map(plan => (
              <div key={plan.name} style={{
                padding: "32px",
                borderRadius: 12,
                background: plan.bg,
                border: `1px solid ${plan.border}`,
                position: "relative" as const,
              }}>
                {plan.badge && (
                  <div style={{
                    position: "absolute" as const,
                    top: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: plan.name === "Pro" ? "#1a1a1a" : "#BA7517",
                    color: "#fff",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    padding: "4px 12px",
                    borderRadius: 10,
                    fontFamily: "system-ui, sans-serif",
                    whiteSpace: "nowrap" as const,
                  }}>
                    {plan.badge}
                  </div>
                )}

                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: plan.name === "Pro" ? "#aaa" : "#888", fontFamily: "system-ui", marginBottom: 8 }}>
                    {plan.name}
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 6 }}>
                    <span style={{ fontSize: 40, fontWeight: 400, color: plan.color, letterSpacing: "-0.03em" }}>
                      {plan.price}
                    </span>
                    <span style={{ fontSize: 14, color: plan.name === "Pro" ? "#666" : "#aaa", fontFamily: "system-ui" }}>
                      {plan.period}
                    </span>
                  </div>
                  <p style={{ fontSize: 13, color: plan.name === "Pro" ? "#888" : "#999", margin: 0, fontFamily: "system-ui, sans-serif" }}>
                    {plan.desc}
                  </p>
                </div>

                <Link href={`/${locale}/${plan.href}`} style={{
                  display: "block",
                  width: "100%",
                  padding: "12px",
                  borderRadius: 6,
                  textAlign: "center" as const,
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: "system-ui, sans-serif",
                  background: plan.ctaStyle === "solid" ? "#fff" :
                              plan.ctaStyle === "amber" ? "#BA7517" : "transparent",
                  color: plan.ctaStyle === "solid" ? "#1a1a1a" :
                         plan.ctaStyle === "amber" ? "#fff" : "#1a1a1a",
                  border: plan.ctaStyle === "outline" ? "1px solid #c8c4bc" :
                          plan.ctaStyle === "solid" ? "1px solid #fff" : "none",
                  marginBottom: 24,
                  boxSizing: "border-box" as const,
                }}>
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

      {/* ── Témoignages ── */}
      <section style={{ padding: "80px 2rem", background: "#1a1a1a", borderTop: "0.5px solid #333" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 56 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", color: "#BA7517", textTransform: "uppercase" as const, fontFamily: "system-ui", marginBottom: 12 }}>
              Témoignages
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, margin: 0, color: "#fff", letterSpacing: "-0.01em" }}>
              Ce qu'en disent les musiciens
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{
                padding: "28px",
                background: "#252525",
                border: "0.5px solid #333",
                borderRadius: 10,
              }}>
                <StarRating n={t.stars} />
                <p style={{
                  fontSize: 14,
                  color: "#ccc",
                  lineHeight: 1.75,
                  margin: "16px 0 20px",
                  fontFamily: "system-ui, sans-serif",
                  fontStyle: "italic",
                }}>
                  "{t.text}"
                </p>
                <div style={{ fontSize: 13, color: "#888", fontFamily: "system-ui, sans-serif" }}>
                  <span style={{ color: "#ddd", fontWeight: 500 }}>{t.author}</span>
                  {" · "}
                  {t.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "100px 2rem" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 56 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", color: "#555", textTransform: "uppercase" as const, fontFamily: "system-ui", marginBottom: 12 }}>
              Questions fréquentes
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, margin: 0, letterSpacing: "-0.01em" }}>
              Tout ce que vous voulez savoir
            </h2>
          </div>

          <div style={{ borderTop: "0.5px solid #e8e3db" }}>
            {FAQ.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section style={{
        padding: "100px 2rem",
        background: "linear-gradient(135deg, #1a1a1a 0%, #2a2015 100%)",
        textAlign: "center" as const,
        borderTop: "0.5px solid #333",
      }}>
        <div style={{ maxWidth: 580, margin: "0 auto" }}>
          <div style={{
            fontSize: 64,
            marginBottom: 24,
            lineHeight: 1,
            color: "#BA7517",
            opacity: 0.6,
          }}>
            𝄞
          </div>
          <h2 style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 400,
            color: "#fff",
            margin: "0 0 16px",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
          }}>
            Commencez à comprendre
            <br />
            <em style={{ color: "#BA7517" }}>la musique</em>
          </h2>
          <p style={{
            fontSize: 16,
            color: "#888",
            lineHeight: 1.7,
            margin: "0 0 40px",
            fontFamily: "system-ui, sans-serif",
          }}>
            3 cours gratuits. Aucune carte de crédit.
            Commencez maintenant et voyez la différence
            entre mémoriser et comprendre.
          </p>

          {submitted ? (
            <div style={{
              padding: "16px 24px",
              background: "#E1F5EE",
              borderRadius: 8,
              fontSize: 14,
              color: "#0F6E56",
              fontFamily: "system-ui, sans-serif",
            }}>
              ✓ Vous êtes sur la liste. On vous prévient dès la sortie !
            </div>
          ) : (
            <Link href={`/${locale}/cours`} style={{
              display: "inline-block",
              padding: "16px 40px",
              borderRadius: 4,
              background: "#BA7517",
              color: "#fff",
              textDecoration: "none",
              fontSize: 16,
              fontWeight: 500,
              fontFamily: "system-ui, sans-serif",
              letterSpacing: "0.02em",
            }}>
              Commencer gratuitement →
            </Link>
          )}

          <p style={{ marginTop: 16, fontSize: 12, color: "#555", fontFamily: "system-ui, sans-serif" }}>
            Cours 1 à 3 · Quiz illimité · Exercices SATB
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{
        padding: "40px 2rem",
        background: "#111",
        borderTop: "0.5px solid #222",
      }}>
        <div style={{
          maxWidth: 960,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap" as const,
          gap: 16,
        }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>
            Harmonia<span style={{ color: "#BA7517" }}>.</span>
          </div>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" as const }}>
            {[
              { label: "Cours", href: `/${locale}/cours` },
              { label: "Atelier", href: `/${locale}/atelier` },
              { label: "Tonalités", href: `/${locale}/tonalites` },
              { label: "getharmonia.app", href: "https://getharmonia.app" },
            ].map(link => (
              <Link key={link.label} href={link.href} style={{ fontSize: 13, color: "#555", textDecoration: "none", fontFamily: "system-ui, sans-serif" }}>
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

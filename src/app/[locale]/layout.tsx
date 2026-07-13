/**
 * src/app/[locale]/layout.tsx
 * Harmonia — Layout racine avec ClerkProvider + SEO metadata
 */
import { ClerkProvider } from "@clerk/nextjs";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ConditionalAppNav } from "@/components/AppNav";
import CookieBanner from "@/components/CookieBanner";
import FeedbackWidget from "@/components/FeedbackWidget";
import ConsentGatedAnalytics from "@/components/ConsentGatedAnalytics";
import { COURS_COUNT } from "@/lib/catalogue";

const LOCALES = ["fr", "en", "es", "de", "pt", "it"] as const;

const META: Record<string, { title: string; description: string; lang: string }> = {
  fr: {
    title: "Harmonia — Apprenez l'harmonie musicale en ligne",
    description: "9 cours interactifs, 700+ exercices SATB, feedback en temps réel. Maîtrisez la conduite de voix, les cadences et les modulations. Gratuit pour commencer.",
    lang: "fr",
  },
  en: {
    title: "Harmonia — Learn Music Harmony Online",
    description: "9 interactive courses, 700+ SATB exercises, real-time feedback. Master voice leading, cadences and modulations. Free to start.",
    lang: "en",
  },
  es: {
    title: "Harmonia — Aprende Armonía Musical Online",
    description: "9 cursos interactivos, 700+ ejercicios SATB, feedback en tiempo real. Domina el contrapunto, las cadencias y las modulaciones. Gratis para empezar.",
    lang: "es",
  },
  de: {
    title: "Harmonia — Musikharmonie Online Lernen",
    description: "9 interaktive Kurse, 700+ SATB-Übungen, Echtzeit-Feedback. Meistern Sie Stimmführung, Kadenzen und Modulationen. Kostenlos starten.",
    lang: "de",
  },
  pt: {
    title: "Harmonia — Aprenda Harmonia Musical Online",
    description: "9 cursos interativos, 700+ exercícios SATB, feedback em tempo real. Domine a condução de vozes, cadências e modulações. Gratuito para começar.",
    lang: "pt",
  },
  it: {
    title: "Harmonia — Impara l'Armonia Musicale Online",
    description: "9 corsi interattivi, 700+ esercizi SATB, feedback in tempo reale. Padroneggia il contrappunto, le cadenze e le modulazioni. Gratis per iniziare.",
    lang: "it",
  },
};

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const meta = META[locale] ?? META.fr;
  const url = `https://www.getharmonia.app/${locale}`;

  return {
    title: meta.title,
    description: meta.description,
    metadataBase: new URL("https://www.getharmonia.app"),
    alternates: {
      canonical: url,
      languages: {
        "fr": "/fr",
        "en": "/en",
        "es": "/es",
        "de": "/de",
        "pt": "/pt",
        "it": "/it",
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      siteName: "Harmonia",
      locale: meta.lang,
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Harmonia — Apprentissage de l'harmonie musicale",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
  };
}

/**
 * Les traductions sont découpées par cours (cours1…cours41) et pèsent 274 Ko
 * à elles seules. Elles étaient toutes sérialisées dans le HTML de chaque page :
 * la landing embarquait le texte des 41 cours. On ne fournit ici que les
 * namespaces partagés (~30 Ko) ; la page d'un cours injecte le sien.
 */
function sharedMessages(all: Record<string, unknown>): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(all).filter(([key]) => !/^cours\d+$/.test(key))
  );
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!LOCALES.includes(locale as (typeof LOCALES)[number])) notFound();
  setRequestLocale(locale);
  const messages = sharedMessages(await getMessages());
  const meta = META[locale] ?? META.fr;

  // Données structurées : le site n'en exposait aucune, alors que Course et
  // Organization sont directement exploitables en rich snippets.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.getharmonia.app/#organization",
        name: "Harmonia",
        url: "https://www.getharmonia.app",
        logo: "https://www.getharmonia.app/og-image.png",
      },
      {
        "@type": "WebSite",
        "@id": "https://www.getharmonia.app/#website",
        url: `https://www.getharmonia.app/${locale}`,
        name: "Harmonia",
        description: meta.description,
        inLanguage: locale,
        publisher: { "@id": "https://www.getharmonia.app/#organization" },
      },
      {
        "@type": "Course",
        name: meta.title,
        description: meta.description,
        inLanguage: locale,
        url: `https://www.getharmonia.app/${locale}/cours`,
        provider: { "@id": "https://www.getharmonia.app/#organization" },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "online",
          courseWorkload: `PT${COURS_COUNT * 2}H`,
        },
        offers: [
          { "@type": "Offer", category: "Free", price: "0", priceCurrency: "EUR" },
          { "@type": "Offer", category: "Subscription", price: "9", priceCurrency: "EUR" },
          { "@type": "Offer", category: "Subscription", price: "19", priceCurrency: "EUR" },
        ],
      },
    ],
  };

  return (
    <ClerkProvider afterSignOutUrl={`/${locale}`}>
      <html lang={locale}>
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </head>
        <body>
          <NextIntlClientProvider messages={messages}>
            <ConditionalAppNav />
            {children}
            <FeedbackWidget />
          </NextIntlClientProvider>
          <ConsentGatedAnalytics />
          <CookieBanner locale={locale} />
        </body>
      </html>
    </ClerkProvider>
  );
}

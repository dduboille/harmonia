/**
 * src/app/[locale]/layout.tsx
 * Harmonia — Layout racine avec ClerkProvider
 *
 * IMPORTANT : remplace ton layout existant
 * Ajoute ClerkProvider autour de tout le contenu
 */

import { ClerkProvider } from "@clerk/nextjs";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

const LOCALES = ["fr", "en", "es", "de", "pt", "it"] as const;

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!LOCALES.includes(locale as any)) notFound();

  const messages = await getMessages();

  return (
    <ClerkProvider>
      <html lang={locale}>
        <body>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

export function generateStaticParams() {
  return LOCALES.map(locale => ({ locale }));
}

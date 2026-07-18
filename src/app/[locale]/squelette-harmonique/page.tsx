import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import SqueletteHarmonique from "@/components/SqueletteHarmonique";

export const metadata: Metadata = {
  title: "Squelette harmonique — Harmonia",
  description:
    "Posez une succession d'accords sur 8 mesures, réalisée à quatre voix conduites, vérifiée et exportable vers l'atelier de composition.",
  openGraph: {
    title: "Squelette harmonique — Harmonia",
    description: "Posez une succession d'accords sur 8 mesures et voyez-la réalisée à quatre voix.",
    url: "https://www.getharmonia.app/fr/squelette-harmonique",
    siteName: "Harmonia",
    type: "website",
  },
};

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function SqueletteHarmoniquePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { userId } = await auth();
  if (!userId) redirect(`/${locale}/sign-in?redirect_url=/${locale}/squelette-harmonique`);

  return <SqueletteHarmonique />;
}

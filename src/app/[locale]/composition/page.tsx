import type { Metadata } from "next";
import { setRequestLocale } from 'next-intl/server';
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUserPlan } from "@/lib/progression";
import CompositionGuidee from '@/components/CompositionGuidee';

export const metadata: Metadata = {
  title: "Composition guidée — Harmonia",
  description: "Créez une progression harmonique pas à pas avec l'aide de l'IA. Explorez les substitutions et enchaînements d'accords.",
  openGraph: {
    title: "Composition guidée — Harmonia",
    description: "Créez une progression harmonique pas à pas avec l'aide de l'IA.",
    url: "https://www.getharmonia.app/fr/composition",
    siteName: "Harmonia",
    type: "website",
  },
};

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function CompositionPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { userId } = await auth();
  if (!userId) redirect(`/${locale}/sign-in`);

  const plan = await getUserPlan(userId);
  return <CompositionGuidee plan={plan} />;
}

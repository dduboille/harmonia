import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUserPlan } from "@/lib/progression";
import { ProPaywall } from "@/components/Paywall";
import AssistantIA from "@/components/AssistantIA";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function AssistantPage({ params }: Props) {
  const { locale } = await params;
  const { userId } = await auth();

  if (!userId) redirect(`/${locale}/sign-in?redirect_url=/${locale}/assistant`);

  const plan = await getUserPlan(userId);

  if (plan === "free") {
    return (
      <ProPaywall
        locale={locale}
        title="Assistant IA — Professeur virtuel"
        description="Posez vos questions de théorie musicale et obtenez des réponses immédiates, des analyses de progressions et des explications adaptées à votre niveau, 24h/24. Réservé aux abonnés Pro."
      />
    );
  }

  return <AssistantIA />;
}

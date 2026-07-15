import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUserPlan } from "@/lib/progression";
import { ProPaywall } from "@/components/Paywall";
import AtelierComposition from "@/components/AtelierComposition";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function ComposerPage({ params }: Props) {
  const { locale } = await params;
  const { userId } = await auth();

  if (!userId) redirect(`/${locale}/sign-in?redirect_url=/${locale}/composer`);

  const plan = await getUserPlan(userId);

  if (plan === "free") {
    return (
      <ProPaywall
        locale={locale}
        title="Atelier de composition"
        description="Composez votre propre pièce à deux portées, note à note — gravure en direct, écoute, et bientôt l'analyse harmonique. Réservé aux abonnés Pro."
      />
    );
  }

  return <AtelierComposition />;
}

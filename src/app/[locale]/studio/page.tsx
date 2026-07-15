import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUserPlan } from "@/lib/progression";
import { ProPaywall } from "@/components/Paywall";
import Studio from "@/components/Studio";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function StudioPage({ params }: Props) {
  const { locale } = await params;
  const { userId } = await auth();

  if (!userId) redirect(`/${locale}/sign-in?redirect_url=/${locale}/studio`);

  const plan = await getUserPlan(userId);

  if (plan === "free") {
    return (
      <ProPaywall
        locale={locale}
        title="Studio de composition"
        description="Importez votre composition (MusicXML), visualisez-la sur portées, écoutez-la et obtenez son analyse harmonique complète. Réservé aux abonnés Pro."
      />
    );
  }

  return <Studio />;
}

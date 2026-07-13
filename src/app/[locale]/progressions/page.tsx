import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUserPlan } from "@/lib/progression";
import { ProPaywall } from "@/components/Paywall";
import BibliothequeProgressions from "@/components/BibliothequeProgressions";
import { PROGRESSIONS } from "@/data/progressions-library";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function ProgressionsPage({ params }: Props) {
  const { locale } = await params;
  const { userId } = await auth();
  if (!userId) redirect(`/${locale}/sign-in?redirect_url=/${locale}/progressions`);

  const plan = await getUserPlan(userId);

  if (plan === "free") {
    return (
      <ProPaywall
        locale={locale}
        title="Bibliothèque de progressions"
        // Le chiffre vient de la donnée : cette page en promettait « plus de 200 »
        // quand la landing en vendait 110.
        description={`${PROGRESSIONS.length} progressions classiques, jazz, modales et contemporaines. Écoutez, analysez et jouez chaque progression au piano. Réservé aux abonnés Pro.`}
      />
    );
  }

  return <BibliothequeProgressions />;
}

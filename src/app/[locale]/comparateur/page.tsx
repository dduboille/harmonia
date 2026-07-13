import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUserPlan } from "@/lib/progression";
import { ProPaywall } from "@/components/Paywall";
import ComparateurStyles from "@/components/ComparateurStyles";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function ComparateurPage({ params }: Props) {
  const { locale } = await params;
  const { userId } = await auth();

  if (!userId) redirect(`/${locale}/sign-in?redirect_url=/${locale}/comparateur`);

  // Le « Comparateur de 11 styles harmoniques » figure dans les arguments de vente
  // du plan Pro, mais la page n'effectuait aucun contrôle : elle était ouverte à
  // tout compte gratuit.
  const plan = await getUserPlan(userId);
  if (plan === "free") {
    return (
      <ProPaywall
        locale={locale}
        title="Comparateur de styles harmoniques"
        description="Confrontez une même progression harmonisée dans 11 styles — du choral de Bach à l'impressionnisme et au jazz modal — pour entendre ce qui sépare une écriture d'une autre. Réservé aux abonnés Pro."
      />
    );
  }

  return <ComparateurStyles />;
}

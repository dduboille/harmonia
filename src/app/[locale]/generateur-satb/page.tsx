import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUserPlan } from "@/lib/progression";
import GenerateurSATB from "@/components/GenerateurSATB";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function GenerateurSATBPage({ params }: Props) {
  const { locale } = await params;
  const { userId } = await auth();
  if (!userId) redirect(`/${locale}/sign-in`);

  const plan = await getUserPlan(userId);

  return (
    <main style={{ minHeight: "100vh", background: "#f4f1ec" }}>
      <GenerateurSATB plan={plan} />
    </main>
  );
}

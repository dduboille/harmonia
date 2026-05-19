import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabase";
import ProfDashboard from "@/components/ProfDashboard";
import type { Classe } from "@/types/conservatoire";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function ProfPage({ params }: Props) {
  const { locale } = await params;
  const { userId } = await auth();

  if (!userId) redirect(`/${locale}/sign-in`);

  // Fetch classes created by this prof
  const { data: raw } = await supabaseAdmin
    .from("classes")
    .select("id, nom, description, code_acces, created_at")
    .eq("prof_id", userId)
    .order("created_at", { ascending: false });

  const classes: Classe[] = await Promise.all(
    (raw ?? []).map(async (c: { id: string; nom: string; description: string | null; code_acces: string; created_at: string }) => {
      const { count } = await supabaseAdmin
        .from("classe_eleves")
        .select("*", { count: "exact", head: true })
        .eq("classe_id", c.id);
      return {
        id: c.id,
        profId: userId,
        nom: c.nom,
        description: c.description ?? undefined,
        codeAcces: c.code_acces,
        elevesCount: count ?? 0,
        createdAt: c.created_at,
      };
    })
  );

  const totalEleves = classes.reduce((s, c) => s + c.elevesCount, 0);

  return <ProfDashboard classes={classes} totalEleves={totalEleves} />;
}

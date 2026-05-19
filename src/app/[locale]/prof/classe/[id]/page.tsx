import { auth } from "@clerk/nextjs/server";
import { clerkClient } from "@clerk/nextjs/server";
import { redirect, notFound } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabase";
import ClasseView from "@/components/ClasseView";
import type { Classe, Eleve, Devoir } from "@/types/conservatoire";
import { ALL_EXERCISES } from "@/exercises/all-exercises";

interface Props {
  params: Promise<{ locale: string; id: string }>;
}

export default async function ClassePage({ params }: Props) {
  const { locale, id } = await params;
  const { userId } = await auth();

  if (!userId) redirect(`/${locale}/sign-in`);

  // Load the class and verify ownership
  const { data: raw } = await supabaseAdmin
    .from("classes")
    .select("id, prof_id, nom, description, code_acces, created_at")
    .eq("id", id)
    .single();

  if (!raw || raw.prof_id !== userId) notFound();

  // Count students
  const { count: elevesCount } = await supabaseAdmin
    .from("classe_eleves")
    .select("*", { count: "exact", head: true })
    .eq("classe_id", id);

  const classe: Classe = {
    id: raw.id,
    profId: userId,
    nom: raw.nom,
    description: raw.description ?? undefined,
    codeAcces: raw.code_acces,
    elevesCount: elevesCount ?? 0,
    createdAt: raw.created_at,
  };

  // Fetch student memberships
  const { data: members } = await supabaseAdmin
    .from("classe_eleves")
    .select("eleve_id")
    .eq("classe_id", id)
    .order("joined_at", { ascending: true });

  const eleveIds: string[] = (members ?? []).map((m: { eleve_id: string }) => m.eleve_id);

  // Fetch Clerk user info for each student
  const clerk = await clerkClient();
  const clerkUsers = await Promise.all(
    eleveIds.map(async (uid) => {
      try {
        return await clerk.users.getUser(uid);
      } catch {
        return null;
      }
    })
  );

  // Fetch progression from user_progress
  const { data: progress } = await supabaseAdmin
    .from("user_progress")
    .select("user_id, cours_id, completed, score, last_seen_at")
    .in("user_id", eleveIds.length > 0 ? eleveIds : ["__none__"]);

  const byStudent: Record<string, { coursIds: Set<number>; scores: number[]; lastSeen: string }> = {};
  for (const p of progress ?? []) {
    if (!byStudent[p.user_id]) byStudent[p.user_id] = { coursIds: new Set(), scores: [], lastSeen: "" };
    if (p.completed) {
      byStudent[p.user_id].coursIds.add(p.cours_id);
      byStudent[p.user_id].scores.push(p.score);
    }
    if (p.last_seen_at > byStudent[p.user_id].lastSeen) {
      byStudent[p.user_id].lastSeen = p.last_seen_at;
    }
  }

  const eleves: Eleve[] = eleveIds.map((uid, i) => {
    const cu = clerkUsers[i];
    const prog = byStudent[uid] ?? { coursIds: new Set(), scores: [], lastSeen: "" };
    const scores = prog.scores;
    return {
      userId: uid,
      email: cu?.emailAddresses?.[0]?.emailAddress ?? uid,
      nom: cu ? [cu.firstName, cu.lastName].filter(Boolean).join(" ") : "",
      progression: {
        coursCompletés: prog.coursIds.size,
        exercicesReussis: scores.filter(s => s >= 70).length,
        scoreMoyen: scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0,
        derniereActivite: prog.lastSeen,
      },
    };
  });

  // Fetch devoirs
  const { data: devoirsRaw } = await supabaseAdmin
    .from("devoirs")
    .select("id, classe_id, titre, type, reference_id, date_limite")
    .eq("classe_id", id)
    .order("created_at", { ascending: false });

  const devoirs: Devoir[] = await Promise.all(
    (devoirsRaw ?? []).map(async (d: { id: string; classe_id: string; titre: string; type: string; reference_id: string | null; date_limite: string | null }) => {
      const { count: total } = await supabaseAdmin
        .from("soumissions")
        .select("*", { count: "exact", head: true })
        .eq("devoir_id", d.id);
      const { count: corriges } = await supabaseAdmin
        .from("soumissions")
        .select("*", { count: "exact", head: true })
        .eq("devoir_id", d.id)
        .not("corrected_at", "is", null);
      return {
        id: d.id,
        classeId: d.classe_id,
        titre: d.titre,
        type: d.type as Devoir["type"],
        referenceId: d.reference_id ?? undefined,
        dateLimite: d.date_limite ?? undefined,
        soumissionsCount: total ?? 0,
        corrigésCount: corriges ?? 0,
      };
    })
  );

  const progression = eleves.map(e => ({
    userId: e.userId,
    coursCompletés: e.progression.coursCompletés,
    exercicesReussis: e.progression.exercicesReussis,
    scoreMoyen: e.progression.scoreMoyen,
    derniereActivite: e.progression.derniereActivite,
  }));

  const exercises = ALL_EXERCISES.map(e => ({ id: e.id, title: e.title ?? "", cours: e.cours, type: e.type }));

  return <ClasseView classe={classe} eleves={eleves} devoirs={devoirs} progression={progression} exercises={exercises} />;
}

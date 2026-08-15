import CoursLevel from "@/components/CoursHub";

// Aucun cours n'étant plus verrouillé, la page n'a plus besoin de résoudre le
// plan de l'utilisateur : elle ne consulte donc plus ni Clerk ni Supabase.
export default async function Niveau5Page() {
  return <CoursLevel level={5} />;
}

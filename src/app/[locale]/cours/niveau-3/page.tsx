import { auth } from "@clerk/nextjs/server";
import CoursLevel from "@/components/CoursHub";
import { getUserPlan } from "@/lib/progression";

export default async function Niveau3Page() {
  const { userId } = await auth();
  const plan = userId ? await getUserPlan(userId) : "free";
  return <CoursLevel level={3} plan={plan} />;
}

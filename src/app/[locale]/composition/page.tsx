import { setRequestLocale } from 'next-intl/server';
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUserPlan } from "@/lib/progression";
import CompositionGuidee from '@/components/CompositionGuidee';

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function CompositionPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { userId } = await auth();
  if (!userId) redirect(`/${locale}/sign-in`);

  const plan = await getUserPlan(userId);
  return <CompositionGuidee plan={plan} />;
}

import { setRequestLocale } from 'next-intl/server';
import CompositionGuidee from '@/components/CompositionGuidee';

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function CompositionPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CompositionGuidee />;
}

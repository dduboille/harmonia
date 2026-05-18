import { setRequestLocale } from 'next-intl/server';
import MelodicEditor from '@/components/MelodicEditor';

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function EditeurMelodiquePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <MelodicEditor />;
}

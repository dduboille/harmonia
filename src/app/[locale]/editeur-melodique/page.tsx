import type { Metadata } from "next";
import { setRequestLocale } from 'next-intl/server';
import MelodicEditor from '@/components/MelodicEditor';

export const metadata: Metadata = {
  title: "Éditeur mélodique — Harmonia",
  description: "Composez et écoutez votre mélodie en temps réel. Éditeur de notes interactif avec rendu audio haute qualité.",
  openGraph: {
    title: "Éditeur mélodique — Harmonia",
    description: "Composez et écoutez votre mélodie en temps réel avec cet éditeur interactif.",
    url: "https://www.getharmonia.app/fr/editeur-melodique",
    siteName: "Harmonia",
    type: "website",
  },
};

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function EditeurMelodiquePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <MelodicEditor />;
}

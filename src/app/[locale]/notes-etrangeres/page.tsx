import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import NotesEtrangeresExercice from "@/components/NotesEtrangeresExercice";

export const metadata: Metadata = {
  title: "Notes étrangères — Harmonia",
  description: "Identifiez les notes de passage, broderies, retards et appoggiatures. Exercices interactifs pour maîtriser les ornements harmoniques.",
  openGraph: {
    title: "Notes étrangères — Harmonia",
    description: "Identifiez les notes de passage, broderies, retards et appoggiatures.",
    url: "https://www.getharmonia.app/fr/notes-etrangeres",
    siteName: "Harmonia",
    type: "website",
  },
};

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function NotesEtrangeresPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <NotesEtrangeresExercice />;
}

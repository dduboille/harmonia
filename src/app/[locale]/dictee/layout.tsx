// src/app/[locale]/dictee/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Dictée harmonique — Harmonia",
  description: "Entraînez-vous à identifier les accords et intervalles à l'oreille. Dictée harmonique et dictée d'intervalles interactives.",
  openGraph: {
    title: "Dictée harmonique — Harmonia",
    description: "Identifiez les accords et intervalles à l'oreille avec ces exercices interactifs.",
    url: "https://www.getharmonia.app/fr/dictee",
    siteName: "Harmonia",
    type: "website",
  },
};

export default function DicteeLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

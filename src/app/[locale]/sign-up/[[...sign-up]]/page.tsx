/**
 * src/app/[locale]/sign-up/[[...sign-up]]/page.tsx
 * Harmonia — Page d'inscription Clerk
 */

import { SignUp } from "@clerk/nextjs";

interface Props {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ redirect_url?: string }>;
}

export default async function SignUpPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const { redirect_url } = await searchParams;
  const target = redirect_url ?? `/${locale}/dashboard`;

  return (
    <main style={{
      minHeight: "100vh",
      background: "#f4f1ec",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem 1rem",
    }}>
      <div style={{ textAlign: "center" as const }}>
        <div style={{
          fontSize: 22,
          fontFamily: "Georgia, serif",
          fontWeight: 700,
          color: "#1a1a1a",
          marginBottom: 24,
        }}>
          Harmonia<span style={{ color: "#BA7517" }}>.</span>
        </div>
        <SignUp forceRedirectUrl={target} signInUrl={`/${locale}/sign-in`} />
      </div>
    </main>
  );
}

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
  // Symétrique de sign-in/page.tsx : ne pas perdre redirect_url si la
  // personne bascule vers "se connecter" depuis ici.
  const signInHref = redirect_url
    ? `/${locale}/sign-in?redirect_url=${encodeURIComponent(redirect_url)}`
    : `/${locale}/sign-in`;

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
        <SignUp forceRedirectUrl={target} signInUrl={signInHref} />
      </div>
    </main>
  );
}

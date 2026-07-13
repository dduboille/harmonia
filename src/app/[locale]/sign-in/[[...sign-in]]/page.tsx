import { SignIn } from "@clerk/nextjs";

interface Props {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ redirect_url?: string }>;
}

export default async function SignInPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const { redirect_url } = await searchParams;
  // Le middleware pose redirect_url sur la page demandée : sans cela, un visiteur
  // renvoyé vers la connexion depuis /de/cours atterrissait sur le tableau de
  // bord français.
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
        <SignIn forceRedirectUrl={target} signUpUrl={`/${locale}/sign-up`} />
      </div>
    </main>
  );
}
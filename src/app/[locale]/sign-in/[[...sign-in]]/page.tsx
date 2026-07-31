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
  // Si quelqu'un clique "créer un compte" depuis ici, il ne doit pas perdre
  // son redirect_url (ex. /essai?code=XXXX) — sans ce report, un visiteur
  // venu avec un code d'essai qui choisit de s'inscrire plutôt que de se
  // connecter atterrissait sur le tableau de bord nu, code perdu.
  const signUpHref = redirect_url
    ? `/${locale}/sign-up?redirect_url=${encodeURIComponent(redirect_url)}`
    : `/${locale}/sign-up`;

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
        <SignIn forceRedirectUrl={target} signUpUrl={signUpHref} />
      </div>
    </main>
  );
}
/**
 * src/app/[locale]/sign-in/[[...sign-in]]/page.tsx
 * Harmonia — Page de connexion Clerk
 */

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
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
        <SignIn />
      </div>
    </main>
  );
}

/**
 * middleware.ts (à la racine du projet, pas dans src/)
 * Harmonia — Middleware Clerk + protection des routes Pro
 */

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Routes qui nécessitent une authentification
const isProtectedRoute = createRouteMatcher([
  "/:locale/dashboard(.*)",
  "/:locale/profil(.*)",
]);

// Routes Pro uniquement (cours 4-9)
const isProRoute = createRouteMatcher([
  "/:locale/cours/4(.*)",
  "/:locale/cours/5(.*)",
  "/:locale/cours/6(.*)",
  "/:locale/cours/7(.*)",
  "/:locale/cours/8(.*)",
  "/:locale/cours/9(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  const { pathname } = req.nextUrl;

  // Extraire la locale de l'URL
  const locale = pathname.split("/")[1] ?? "fr";

  // Routes protégées : rediriger vers signin si non connecté
  if (isProtectedRoute(req) && !userId) {
    const signInUrl = new URL(`/${locale}/sign-in`, req.url);
    signInUrl.searchParams.set("redirect_url", req.url);
    return NextResponse.redirect(signInUrl);
  }

  // Routes Pro : vérifier l'abonnement
  // Note : la vérification complète du plan se fait dans les pages
  // Le middleware vérifie juste l'authentification
  if (isProRoute(req) && !userId) {
    const signInUrl = new URL(`/${locale}/sign-in`, req.url);
    signInUrl.searchParams.set("redirect_url", req.url);
    signInUrl.searchParams.set("reason", "pro_required");
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Exclure les fichiers statiques et les routes internes Next.js
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createIntlMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";

const LOCALES = ["fr", "en", "es", "de", "pt", "it"] as const;
const DEFAULT_LOCALE = "fr";

const intlMiddleware = createIntlMiddleware({
  locales: [...LOCALES],
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: "always",
  localeDetection: false,
});

/**
 * Routes accessibles sans compte.
 * Les pages vitrine (cours, tonalités, tarifs, mentions) doivent rester ouvertes :
 * elles sont dans le sitemap et constituent la porte d'entrée SEO du site.
 * Le contrôle d'accès au contenu payant se fait dans la page, pas ici.
 */
const isPublicRoute = createRouteMatcher([
  "/",
  "/:locale",
  "/:locale/cours(.*)",
  "/:locale/tonalites",
  "/:locale/upgrade",
  "/:locale/cursus",
  "/:locale/conditions",
  "/:locale/confidentialite",
  "/:locale/preview",
  "/:locale/landing-conservatoire",
  "/:locale/sign-in(.*)",
  "/:locale/sign-up(.*)",
  "/:locale/rejoindre(.*)",
  "/api/stripe/webhook",
  "/api/webhooks/clerk",
  "/api/subscribe",
  "/api/contact-cursus",
  "/api/contact-conservatoire",
]);

function localeOf(pathname: string): string {
  const seg = pathname.split("/")[1];
  return (LOCALES as readonly string[]).includes(seg) ? seg : DEFAULT_LOCALE;
}

export default clerkMiddleware(async (auth, req) => {
  const url = req.nextUrl;
  const isApiRoute = url.pathname.startsWith("/api/");

  if (url.pathname === "/sign-in" || url.pathname === "/sign-up") {
    return NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}${url.pathname}`, req.url));
  }

  const { userId } = await auth();
  if (!isPublicRoute(req) && !userId) {
    // Les clients fetch() attendent du JSON : une redirection vers une page HTML
    // ferait échouer res.json() côté appelant.
    if (isApiRoute) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }
    const locale = localeOf(url.pathname);
    const signIn = new URL(`/${locale}/sign-in`, req.url);
    signIn.searchParams.set("redirect_url", url.pathname);
    return NextResponse.redirect(signIn);
  }

  if (!isApiRoute) {
    return intlMiddleware(req);
  }
});

export const config = {
  matcher: [
    // Toute extension absente de cette liste est happée par next-intl, qui lui
    // colle un préfixe de locale et renvoie un 307. C'est ce qui rendait
    // /robots.txt et /sitemap.xml illisibles (xml, txt) ; les samples de piano
    // servis depuis /audio/piano tomberaient dans le même piège (mp3).
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|xml|txt|mp3|wav|ogg|mp4|musicxml|mxl|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};

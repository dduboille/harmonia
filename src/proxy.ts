import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createIntlMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";

const intlMiddleware = createIntlMiddleware({
  locales: ["fr", "en", "es", "de", "pt", "it"],
  defaultLocale: "fr",
  localePrefix: "always",
});

const isPublicRoute = createRouteMatcher([
  "/",
  "/:locale",
  "/:locale/sign-in(.*)",
  "/:locale/sign-up(.*)",
  "/api/stripe/webhook",
  "/api/webhooks/clerk",
  "/api/admin/(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  const url = req.nextUrl;
  const isApiRoute = url.pathname.startsWith("/api/");

  if (url.pathname === "/sign-in") {
    return NextResponse.redirect(new URL("/fr/sign-in", req.url));
  }
  if (url.pathname === "/sign-up") {
    return NextResponse.redirect(new URL("/fr/sign-up", req.url));
  }

  const { userId } = await auth();
  if (!isPublicRoute(req) && !userId) {
    return NextResponse.redirect(new URL("/fr/sign-in", req.url));
  }

  if (!isApiRoute) {
    return intlMiddleware(req);
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/:locale",
  "/:locale/sign-in(.*)",
  "/:locale/sign-up(.*)",
  "/api/stripe/webhook",
  "/api/webhooks/clerk",
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  const url = req.nextUrl;

  // Redirect /sign-in and /sign-up without locale to /fr/sign-in etc.
  if (url.pathname === "/sign-in") {
    return NextResponse.redirect(new URL("/fr/sign-in", req.url));
  }
  if (url.pathname === "/sign-up") {
    return NextResponse.redirect(new URL("/fr/sign-up", req.url));
  }

  if (!isPublicRoute(req) && !userId) {
    return NextResponse.redirect(new URL("/fr/sign-in", req.url));
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
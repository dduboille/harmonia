"use client";

/**
 * Charge Vercel Analytics et Speed Insights uniquement si l'utilisateur a
 * accepté les cookies de mesure d'audience.
 *
 * Le bandeau de consentement écrivait bien le choix dans localStorage, mais
 * personne ne le relisait : les deux scripts étaient montés inconditionnellement
 * dans les layouts, y compris après un refus explicite — alors que le bandeau
 * présente Vercel Analytics comme non essentiel.
 */

import { useSyncExternalStore } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const CONSENT_KEY = "harmonia_cookie_consent";
export const CONSENT_EVENT = "harmonia:consent";

/** Le bandeau émet CONSENT_EVENT au clic ; `storage` couvre les autres onglets. */
function subscribe(onChange: () => void): () => void {
  window.addEventListener(CONSENT_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CONSENT_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getSnapshot(): string | null {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

/** Côté serveur, aucun consentement n'est connu : on ne rend rien. */
function getServerSnapshot(): string | null {
  return null;
}

export default function ConsentGatedAnalytics() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (consent !== "all") return null;

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
